// https://www.redditstatic.com/desktop2x/Frontpage.ecd288e4d44ae5385bf6.js
// Retrieved at 6/11/2020, 1:30:09 PM by Reddit Dataminer v1.0.0
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
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
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
								i = c(o),
								a = this._rootContainsTarget(o),
								d = r.entry,
								l = t && a && this._computeTargetAndRootIntersection(o, s),
								u = r.entry = new n({
									time: e.performance && performance.now && performance.now(),
									target: o,
									boundingClientRect: i,
									rootBounds: s,
									intersectionRect: l
								});
							d ? t && a ? this._hasCrossedThreshold(d, u) && this._queuedEntries.push(u) : d && d.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, r.prototype._computeTargetAndRootIntersection = function(s, n) {
						if ("none" != e.getComputedStyle(s).display) {
							for (var r, o, i, a, l, u, m, p, h = c(s), b = d(s), g = !1; !g;) {
								var y = null,
									f = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == f.display) return;
								if (b == this.root || b == t ? (g = !0, y = n) : b != t.body && b != t.documentElement && "visible" != f.overflow && (y = c(b)), y && (r = y, o = h, i = void 0, a = void 0, l = void 0, u = void 0, m = void 0, p = void 0, i = Math.max(r.top, o.top), a = Math.min(r.bottom, o.bottom), l = Math.max(r.left, o.left), u = Math.min(r.right, o.right), p = a - i, !(h = (m = u - l) >= 0 && p >= 0 && {
										top: i,
										bottom: a,
										left: l,
										right: u,
										width: m,
										height: p
									}))) break;
								b = d(b)
							}
							return h
						}
					}, r.prototype._getRootRect = function() {
						var e;
						if (this.root) e = c(this.root);
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
						return !this.root || a(t, this.root)
					}, r.prototype._rootContainsTarget = function(e) {
						return a(this.root || t, e)
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

				function i(e, t, s, n) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, s, n || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, s)
				}

				function c(e) {
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

				function a(e, t) {
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
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var s = Math.floor,
				n = Math.random;
			e.exports = function(e, t) {
				return e + s(n() * (t - e + 1))
			}
		},
		"./node_modules/lodash/random.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRandom.js"),
				r = s("./node_modules/lodash/_isIterateeCall.js"),
				o = s("./node_modules/lodash/toFinite.js"),
				i = parseFloat,
				c = Math.min,
				a = Math.random;
			e.exports = function(e, t, s) {
				if (s && "boolean" != typeof s && r(e, t, s) && (t = s = void 0), void 0 === s && ("boolean" == typeof t ? (s = t, t = void 0) : "boolean" == typeof e && (s = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = o(e), void 0 === t ? (t = e, e = 0) : t = o(t)), e > t) {
					var d = e;
					e = t, t = d
				}
				if (s || e % 1 || t % 1) {
					var l = a();
					return c(e + l * (t - e + i("1e-" + ((l + "").length - 1))), t)
				}
				return n(e, t)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseTimes.js"),
				r = s("./node_modules/lodash/_castFunction.js"),
				o = s("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				c = 4294967295,
				a = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > i) return [];
				var s = c,
					d = a(e, c);
				t = r(t), e -= c;
				for (var l = n(d, t); ++s < e;) t(s);
				return l
			}
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/ScrollChildFactory.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/LRUCache/index.ts");
			class i {
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
			var c = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/async.tsx"),
				d = s("./src/reddit/constants/page.ts");
			const l = new o.a(50),
				u = e => {
					const {
						numInstance: t,
						layout: s,
						listingKey: n,
						listingPosition: o
					} = e, u = "focused-vertical-recommendation-".concat(t, "-").concat(s, "-").concat(n);
					let m = l.get(u);
					if (m) return m;
					const p = new i;
					return m = {
						estHeight: c.d,
						id: "focused-vertical-recommendation-".concat(t, "-").concat(s, "-").concat(n),
						trackOnEnteredViewport() {
							p.publish(c.b)
						},
						render: () => r.a.createElement(a.a, {
							listingPosition: o,
							numInstance: t,
							listingKey: n,
							listingName: d.b,
							pubsub: p
						})
					}, l.set(u, m), m
				}
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts").then(s.bind(null, "./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/CommunityDescWithPosts/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/CommunityDescWithPosts/index.tsx"
				}
			});
			t.a = r
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
				i = s("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				c = s.n(i);
			class a extends r.a.Component {
				render() {
					return r.a.createElement("div", {
						className: Object(o.a)(c.a.heroContainer, this.props.className)
					}, r.a.createElement("div", {
						className: Object(o.a)(c.a.header, this.props.headerClassName)
					}, this.props.header), r.a.createElement("div", {
						className: Object(o.a)(this.props.hidePadding ? c.a.bodyHidePadding : c.a.body, this.props.bodyClassName)
					}, this.props.children))
				}
			}
			t.a = a
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
				Component: "_2_C857z2MF49YnHj6VQteT",
				component: "_2_C857z2MF49YnHj6VQteT",
				EmptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				emptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg"
			}
		},
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/upperFirst.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				a = s("./src/config.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/isFakeSubreddit/index.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/components/PostList/Placeholder.tsx"),
				h = s("./src/reddit/components/EmptySubreddit.m.less"),
				b = s.n(h),
				g = s("./src/lib/lessComponent.tsx");
			const y = g.a.div("PrimaryText", b.a),
				f = g.a.div("SecondaryText", b.a),
				v = g.a.div("MainContentWrapper", b.a),
				_ = g.a.div("MainContent", b.a),
				x = g.a.wrapped(p.a, "BackgroundPlaceholder", b.a),
				O = g.a.wrapped(m.h, "SubmitLink", b.a),
				j = g.a.img("SnooImg", b.a),
				E = g.a.div("EmptyHomepage", b.a),
				P = e => {
					switch (e) {
						case d.N.RISING:
							return n.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case d.N.TOP:
						case d.N.CONTROVERSIAL:
							return null;
						default:
							return n.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				k = e => {
					let {
						listingName: t,
						sort: s
					} = e;
					const r = P(s);
					return c.a.createElement(_, null, c.a.createElement(y, null, (e => {
						switch (e) {
							case d.N.RISING:
								return n.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case d.N.TOP:
							case d.N.CONTROVERSIAL:
								return n.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [n.fbt._param("listing sort option", o()(e))], {
									hk: "48BeCW"
								});
							default:
								return n.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(s)), t && !Object(l.a)(t) && !!r && c.a.createElement(c.a.Fragment, null, c.a.createElement(f, null, P(s)), c.a.createElement(O, {
						to: "/r/".concat(t, "/submit")
					}, n.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				C = () => c.a.createElement(_, null, c.a.createElement(j, {
					src: "".concat(a.a.assetPath, "/img/snoo_discovery@1x.png")
				}), c.a.createElement(y, null, n.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), c.a.createElement(O, {
					to: "/r/popular"
				}, n.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = g.a.wrapped(e => c.a.createElement(E, null, c.a.createElement(x, {
				isLoading: !1,
				layout: u.g.Classic
			}), c.a.createElement(v, null, e.subreddit ? c.a.createElement(k, e) : c.a.createElement(C, null))), "Component", b.a)
		},
		"./src/reddit/components/FeaturedLiveEntrypoint/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/helpers/localStorage/index.ts"),
				a = s("./src/reddit/helpers/trackers/announcement.ts"),
				d = s("./src/reddit/helpers/trackers/banners.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/selectors/experiments/announcementToolV2.ts"),
				m = s("./src/reddit/selectors/live.ts");
			const p = Object(n.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointAnnouncementsCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("FeaturedLiveEntrypointAnnouncementsCarousel").then(s.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.tsx"
					}
				}),
				h = Object(n.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointLegacyAnnouncement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("FeaturedLiveEntrypointLegacyAnnouncement").then(s.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx"
					}
				}),
				b = Object(n.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointAnnouncement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("FeaturedLiveEntrypointAnnouncement").then(s.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/LiveThread/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/LiveThread/index.tsx"
					}
				}),
				g = () => {
					const e = Object(i.d)(m.a, (e, t) => e && t && e[0].id === t[0].id || !1),
						t = Object(i.d)(m.b),
						s = Object(i.d)(u.a);
					return t ? o.a.createElement(b, {
						featuredLiveThread: t
					}) : e && e.length ? s ? o.a.createElement(p, {
						announcements: e
					}) : o.a.createElement(y, {
						announcement: e[0]
					}) : null
				},
				y = e => {
					let {
						announcement: t
					} = e;
					const [s, n] = Object(r.useState)(!0), i = Object(l.a)(), u = Object(r.useCallback)(() => {
						i(Object(a.a)("click", t))
					}, [t, i]), m = Object(r.useCallback)(() => {
						n(!0), i(Object(d.c)(t.id, t)), Object(c.U)(t.id, t.maxImpressionsCount)
					}, [t, i]);
					return Object(r.useEffect)(() => {
						const {
							id: e
						} = t, s = Object(c.n)(e);
						t && s < t.maxImpressionsCount && (n(!1), Object(c.U)(e, s + 1))
					}, []), s ? null : o.a.createElement(h, {
						announcement: t,
						onBtnClick: u,
						onClose: m
					})
				};
			t.a = g
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
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				a = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(a);

			function l() {
				return (l = Object.assign || function(e) {
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
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: i,
					post: a,
					redditStyle: m,
					theme: p
				} = e, h = u(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return r.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, s),
					style: Object(c.c)(n, e),
					onClick: i
				}, h), t)
			})
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/LRUCache/index.ts"),
				i = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				d = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				l = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				u = s("./src/reddit/constants/postLayout.ts"),
				m = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				p = s.n(m),
				h = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				b = s.n(h);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("div", {
					className: Object(c.a)(t, b.a.container, b.a.placeholder, b.a.large, p.a.largeAndMediumPostStyles)
				}, r.a.createElement(l.a, {
					className: b.a.backgroundWrapper
				}, r.a.createElement("div", {
					className: b.a.titleAndDescriptionContainer
				}, r.a.createElement("h3", {
					className: b.a.title
				}, g._("Top broadcast right now", null, {
					hk: "2hS1kb"
				}))), r.a.createElement("div", {
					className: b.a.body
				}, r.a.createElement("div", {
					className: b.a.previewContainer
				}, r.a.createElement("div", {
					className: Object(c.a)(b.a.thumbnail, b.a.noise)
				})))))
			};
			var f = e => {
				let {
					className: t,
					layout: s
				} = e;
				return s === u.g.Classic ? r.a.createElement(a.b, {
					className: Object(c.a)(t, b.a.classicPostPlaceholder),
					isLoading: !0
				}) : s === u.g.Compact ? r.a.createElement(d.a, {
					className: Object(c.a)(t, b.a.compactPostPlaceholder),
					isLoading: !0
				}) : r.a.createElement(y, {
					className: t
				})
			};
			const v = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t,
						layout: s
					} = e;
					return r.a.createElement(f, {
						className: t,
						layout: s
					})
				},
				getComponent: () => Promise.all([s.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), s.e("RpanListingUnit")]).then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var _ = e => r.a.createElement(v, e),
				x = s("./src/reddit/helpers/trackers/rpan.ts");
			const O = e => e === u.g.Classic ? 88 : e === u.g.Compact ? 42 : 340,
				j = new o.a(20),
				E = e => {
					const t = "rpan-".concat(e.layout, "-").concat(e.listingKey),
						s = j.get(t);
					if (s) return s;
					const n = P(e.desiredIndex, e.children),
						o = {
							child: {
								id: t,
								estHeight: O(e.layout),
								trackOnEnteredViewport: () => e.sendEvent(Object(x.x)()),
								render: t => {
									let {
										className: s
									} = t;
									return r.a.createElement(_, {
										className: s,
										layout: e.layout,
										listingName: e.listingName
									})
								}
							},
							idx: n
						};
					return j.set(t, o), o
				},
				P = (e, t) => {
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
				header: "_25K6Ujp7eqOAHEdYuHm3pY",
				titleAndDescriptionContainer: "lQm93MTLO_P-uDIe2PRl3",
				title: "_1eNkAwmWuXZFmNLfie958",
				description: "fTm7r0gvPYKH7pWZpQbgm",
				overflowMenu: "_1g1tKbaVucAvOc7c2mO--M",
				overflowItemIconWrapper: "yw5ALrlWcD8wfh7tIB4Jl",
				overflowItemText: "fxp6qlPWJ76riedygoUS7",
				hideIcon: "_1YoM6AZ3m3ETysTwNLrh3N",
				flatListContainer: "_2psTIDB-4cySf4KyON03mz",
				flatlistSeparator: "_1q8ZrSYLuE8Stn2AL2N4mJ",
				expandoButton: "_2OUloQpdxYXyrn8kPE4iAu",
				videoIcon: "_1uKWYPTIE0QxbdTkW9En19",
				expandoIcon: "_2m0hG8zpYJ2W34yfcu_PGL",
				bigExpando: "qecjZnTfgEjCTlYKgqrl0",
				bigExpandoIcon: "_8ViGpsDZkJ4aNM6aVyan0",
				previewContainer: "_1N144m-88joWY3ZwzWRjrl",
				thumbnail: "A8CAQWacAEq_Pwee5F5IZ",
				placeholder: "_3XAxDMGyfQtOCP0nwHqdLt",
				gradientAnimation: "_3Jz-b55_o5VWDQ42wh1-rr",
				glimmer: "_1HSyAH-KtED8iH51buUWfa",
				noise: "_4AhQxTHsKbDr8Z4UeVFvR",
				infoContainer: "_2aNPePbQCJ2-xyqF693-oh",
				watchingCount: "VT9OiuLNsb6RZcYm86q9G",
				liveStatus: "_1YeXsBJft9g02XQNAzcPWD",
				titlePlaceholder: "_3DC7-C7eSLDyl1gxOp5IFX",
				large: "hrQ5rXDbyl6t3TIXxENXB",
				body: "_1jrhjWiRPpBMVjEPmkDP26",
				previewLink: "_2ZFeLyTw6PIP6lE1S9c4Js",
				classic: "_3Rb0d4ST3qYLtk7GE1D2Ku",
				thumbnailContainer: "_1UGYtZeEoz8fDy4G-b4pqk",
				main: "_12iec8OZ9gJJtQR8nSC2se",
				compact: "_2mQGWgGIa1tOb-9mH8lvcG",
				verticalVotes: "_3Q8HLP8Cv_uongOZe_uVp2",
				score: "_1c8HaTqXDAT7pYLrFLAWFt",
				horizontalVotes: "_3dLEcgpoUWjqaG1vVXlfYR",
				compactPostPlaceholder: "jw9TfhViHYwiaSOWfhKRa",
				classicPostPlaceholder: "_2lnslGhr0-HKZXmHDCzAU7"
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
				i = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				c = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				a = s.n(c);
			t.a = e => {
				const {
					className: t,
					layoutBodyClassName: s,
					showCardView: n
				} = e, c = {
					[a.a["m-card"]]: n
				};
				return r.a.createElement("div", {
					className: Object(o.a)(a.a.container, c, t)
				}, r.a.createElement(i.a, {
					className: a.a.layout,
					bodyClassName: Object(o.a)(a.a.layoutBody, c, s),
					header: e.header,
					headerClassName: Object(o.a)(a.a.layoutHeader, c)
				}, e.children))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				cardViewContainer: "_3SRia4h16KBodhRWPhm8Yn",
				container: "_3_c5cqV3WsdQo95Ql4El73",
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
				i = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				c = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				l = s.n(d);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = r.a.createElement(i.a, {
				className: l.a.duHeader
			}, u._("Trending today", null, {
				hk: "3rOxuO"
			})), p = Object(a.a)({
				isLoading: !0
			});
			t.a = e => r.a.createElement(c.a, {
				className: e.className,
				header: m,
				layoutBodyClassName: l.a.layoutBody,
				showCardView: e.showCardView
			}, Array.from({
				length: e.numberOfItems || 6
			}).map((e, t) => r.a.createElement("div", {
				className: l.a.post,
				key: "placeholder-post-".concat(t)
			}, r.a.createElement("div", {
				className: Object(o.a)(l.a.desc, l.a.one, p)
			}), r.a.createElement("div", {
				className: Object(o.a)(l.a.desc, l.a.two, p)
			}), r.a.createElement("div", {
				className: Object(o.a)(l.a.icon, p)
			}), r.a.createElement("div", {
				className: Object(o.a)(l.a.name, p)
			}))))
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
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/TabBadger/Loader.ts"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/selectors/platform.ts"),
				l = s("./src/reddit/selectors/posts.ts");
			const u = Object(i.c)({
					postCount: l.T,
					previousPageIsOverlay: d.o,
					tabBadged: e => e.tabBadged
				}),
				m = Object(o.b)(u);
			t.a = m(Object(a.c)(e => 0 === e.postCount ? null : r.a.createElement(c.a, {
				handlePillClick: e.handlePillClick,
				previousPageIsOverlay: e.previousPageIsOverlay,
				sendEvent: e.sendEvent,
				shortTimer: e.shortTimer,
				subredditName: e.subredditName,
				subscriberCount: e.subscriberCount,
				tabBadged: e.tabBadged
			})))
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "d", (function() {
				return y
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				c = s("./src/reddit/models/Theme/index.ts"),
				a = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const u = {},
				m = e => Object(c.g)(Object(a.a)(e).post, Object(a.a)(e).backgroundImage, Object(a.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(c.g)(e.postBackgroundColor || Object(a.a)(t).post, e.postBackgroundImage, Object(a.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(c.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				h = e => Object(n.l)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: h(e.postBackgroundColor)
				} : u,
				g = e => e.isActive ? l.a.mIsActive : void 0,
				y = e => {
					const t = Object(o.a)(Object(r.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/announcement.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const r = (e, t) => {
					let {
						id: s,
						title: r,
						description: o
					} = t;
					return t => Object.assign({
						source: "announcement",
						action: e,
						noun: "announcement",
						liveThread: {
							id: s,
							isAnnouncement: !0
						},
						announcement: {
							id: s,
							title: r,
							body: o || ""
						}
					}, Object(n.defaults)(t))
				},
				o = e => t => Object.assign({
					source: "announcement",
					action: e,
					noun: "announcement"
				}, Object(n.defaults)(t))
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "x", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "t", (function() {
				return h
			})), s.d(t, "r", (function() {
				return b
			})), s.d(t, "u", (function() {
				return g
			})), s.d(t, "s", (function() {
				return y
			})), s.d(t, "k", (function() {
				return f
			})), s.d(t, "l", (function() {
				return v
			})), s.d(t, "i", (function() {
				return _
			})), s.d(t, "j", (function() {
				return x
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "q", (function() {
				return j
			})), s.d(t, "m", (function() {
				return E
			})), s.d(t, "p", (function() {
				return P
			})), s.d(t, "w", (function() {
				return k
			})), s.d(t, "n", (function() {
				return C
			})), s.d(t, "b", (function() {
				return N
			})), s.d(t, "c", (function() {
				return I
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "o", (function() {
				return L
			})), s.d(t, "v", (function() {
				return A
			})), s.d(t, "e", (function() {
				return T
			}));
			var n, r = s("./src/reddit/constants/chat.ts"),
				o = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				i = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				c = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(n || (n = {}));
			const a = (e, t) => {
					if (t) {
						const s = c.media(e, t.post.id);
						if (s) {
							s.streamPublicId = t.stream.stream_id, s.id = t.stream.stream_id;
							const n = Object(i.h)(e, {
								streamIdFromPath: t.post.id
							});
							n === i.a.LIVE ? s.type = "stream_live" : n === i.a.VOD ? s.type = "stream_vod" : n === i.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						if (t.post.subreddit) {
							const n = {
								id: t.post.subreddit.id,
								name: t.post.subreddit.name
							};
							return {
								post: c.post(e, t.post.id),
								media: s,
								subreddit: n
							}
						}
						return {
							post: c.post(e, t.post.id),
							media: s
						}
					}
					return {
						subreddit: c.subreddit(e)
					}
				},
				d = (e, t, s) => {
					if (!t || !s) return;
					const n = Object(i.h)(e, {
							streamIdFromPath: t.post.id
						}),
						o = t.chat_disabled || s.chatState === r.f.None;
					return {
						id: s.id,
						sessionDurationMs: s.sessionDurationMs,
						watchDurationMs: s.watchDurationMs,
						heartbeatDurationMs: s.heartbeatDurationMs,
						isLive: n === i.a.LIVE,
						playheadOffsetMs: s.playheadOffsetMs,
						timestampMs: s.timestampMs,
						startTimeMs: s.startTimeMs,
						volume: s.volume,
						chatState: o ? r.f.None : r.f.Compact,
						scrubbingStartMs: s.scrubbingStartMs,
						scrubbingEndMs: s.scrubbingEndMs,
						playerType: s.playerType
					}
				},
				l = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				u = () => e => Object.assign({
					source: "stream_du",
					action: "view",
					noun: "stream_du"
				}, a(e)),
				m = () => e => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "show_less"
				}, a(e)),
				p = (e, t) => s => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "rpan",
					actionInfo: {
						position: t || 0
					}
				}, a(s, e)),
				h = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: d(s, e, t)
				}, l(s), e && Object.assign({}, a(s, e))),
				b = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: d(s, e, t)
				}, l(s), a(s, e)),
				g = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: d(s, e, t)
				}, l(s), a(s, e)),
				y = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: d(s, e, t)
				}, l(s), a(s, e)),
				f = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "share_video",
					playback: d(s, e, t)
				}, l(s), a(s, e)),
				v = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: d(s, e, t)
				}, l(s), a(s, e)),
				_ = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: d(s, e, t)
				}, l(s), a(s, e)),
				x = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: d(s, e, t)
				}, l(s), a(s, e)),
				O = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: d(s, e, t)
				}, a(s, e)),
				j = e => t => {
					const s = Object(i.k)(t, e);
					return Object.assign({
						source: "stream_chat",
						action: "click",
						noun: "send_chat"
					}, a(t, s))
				},
				E = (e, t, s) => n => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: d(n, t, s)
				}, a(n, t)),
				P = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: d(s, e, t)
				}, l(s)),
				k = e => t => Object.assign({
					source: "post",
					action: "view",
					noun: "post",
					profile: c.profile(t),
					screen: c.screen(t)
				}, a(t, e)),
				C = e => e => {
					const t = a(e);
					return !Object(o.e)(e) && t.subreddit && (t.subreddit.id = void 0), Object.assign({
						source: "post",
						action: "consume",
						noun: "post",
						profile: c.profile(e),
						screen: c.screen(e)
					}, t)
				},
				N = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: d(s, e, t)
				}, a(s, e)),
				I = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: d(s, e, t)
				}, a(s, e)),
				w = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: d(s, e, t)
				}, a(s, e)),
				L = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: d(s, e, t)
				}, a(s, e)),
				A = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: d(s, e, t)
				}, a(s, e)),
				T = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: d(s, e, t)
				}, a(s, e))
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
			var n = s("./node_modules/core-js/modules/es6.regexp.match.js"),
				r = s.n(n),
				o = s("./node_modules/core-js/modules/es6.array.sort.js"),
				i = s.n(o),
				c = s("./node_modules/core-js/modules/es6.regexp.search.js"),
				a = s.n(c),
				d = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				l = s("./node_modules/lodash/fromPairs.js"),
				u = s.n(l),
				m = s("./node_modules/react/index.js"),
				p = s.n(m),
				h = s("./node_modules/react-redux/es/index.js"),
				b = s("./node_modules/reselect/es/index.js"),
				g = s("./src/lib/classNames/index.ts"),
				y = s("./src/lib/extractQueryParams/index.ts"),
				f = s("./src/lib/fastdom/index.ts"),
				v = s("./src/lib/makeListingKey/index.ts"),
				_ = s("./src/lib/performanceTimings/index.tsx"),
				x = s("./src/reddit/actions/frontpage.ts"),
				O = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/ScrollChildFactory.tsx"),
				j = s("./src/reddit/components/EmptySubreddit.tsx"),
				E = s("./src/reddit/components/FeaturedLiveEntrypoint/index.tsx"),
				P = s("./src/reddit/components/FrontpageSidebar/index.tsx"),
				k = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				C = s("./src/reddit/components/InFeedPostCreation/async.tsx"),
				N = s("./src/reddit/components/JumpToContent/index.tsx"),
				I = s("./src/reddit/components/ListingPostList/index.tsx"),
				w = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				L = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				A = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				T = s("./src/reddit/components/TabBadger/index.tsx"),
				D = s("./src/reddit/components/TrackingHelper/index.tsx"),
				S = s("./src/reddit/constants/parameters.ts"),
				R = s("./src/reddit/constants/postLayout.ts"),
				U = s("./src/reddit/contexts/PageLayer/index.tsx"),
				F = s("./src/reddit/helpers/trackers/screenview.ts"),
				M = s("./src/reddit/layout/page/Listing/index.tsx"),
				V = s("./src/reddit/selectors/experiments/trending.ts"),
				B = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				H = s("./src/reddit/selectors/frontpage.ts"),
				K = s("./src/reddit/selectors/meta.ts"),
				W = s("./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts"),
				q = s("./src/reddit/selectors/user.ts"),
				G = s("./src/lib/constants/index.ts"),
				Q = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				Z = s("./src/lib/objectSelector/index.ts"),
				J = s("./src/reddit/constants/page.ts"),
				z = s("./src/reddit/pages/Frontpage/index.m.less"),
				Y = s.n(z);

			function X() {
				return (X = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: $
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ee = Object(U.t)(), te = Object(b.c)({
				queryParams: Object(Z.a)((e, t) => {
					let {
						location: s
					} = t;
					return u()([...Object(y.a)(s.search)])
				}),
				sort: (e, t) => {
					let {
						match: s
					} = t;
					const n = Object(H.a)(e);
					return s.params.sort || n
				}
			}), se = Object(b.c)({
				countryMeta: K.b,
				geopopular: q.m
			}), ne = Object(b.c)({
				isInTrendingEntrypointExperiment: V.a,
				isLoggedIn: q.H,
				isPopular: U.C,
				isRpanDuVisible: e => Object(W.a)(e, {
					listingName: Q.P
				}),
				rpanInjectionIndex: e => Object(W.b)(e, {
					listingName: Q.P
				}),
				layout: U.N
			}), re = () => Object(b.a)(se, te, ne, e => Object(W.a)(e, {
				listingName: Q.P
			}), e => Object(W.b)(e, {
				listingName: Q.P
			}), e => e, (e, t, s, n, r, o) => {
				let {
					countryMeta: i,
					geopopular: c
				} = e, {
					queryParams: a,
					sort: d
				} = t;
				const l = S.t in a && a[S.t].toUpperCase(),
					u = "string" == typeof l && l in G.Qb ? G.Qb[l] : G.Rb,
					m = Object(v.a)(J.a, d, a),
					p = i || G.v.Everywhere,
					h = c || p,
					b = S.g in a ? a[S.g].toUpperCase() : h,
					g = [];
				n && g.push(r);
				const y = Object(B.b)(o, g, {
					listingKey: m
				});
				return Object.assign({
					countrySort: b,
					listingKey: m,
					sort: d,
					timeSort: u,
					focusedVerticalPositions: y
				}, s)
			}), oe = (e, t) => ({
				onLoadMorePosts: () => e(x.d({
					sort: t.match.params.sort
				})),
				refreshFeed: () => e(x.e({
					sort: t.match.params.sort
				}))
			}), ie = Object(h.b)(re, oe), ce = Object(d.a)({
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
			}), ae = e => p.a.createElement(ce, X({}, e, {
				fallback: p.a.createElement(A.a, {
					showCardView: !!e.showCardView
				})
			}));
			class de extends p.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = () => {
						const {
							isLoggedIn: e,
							sort: t
						} = this.props;
						f.a.read(() => {
							const s = "".concat(_.c.FrontPage, "-").concat(t);
							Object(_.d)(s, e)
						})
					}
				}
				render() {
					const {
						focusedVerticalPositions: e,
						isInTrendingEntrypointExperiment: t,
						isLoggedIn: s,
						isPopular: n,
						isRpanDuVisible: r,
						layout: o,
						listingKey: i,
						rpanInjectionIndex: c,
						sendEvent: a
					} = this.props, d = n && !s && t, l = {
						baseUrl: "",
						countrySort: this.props.countrySort,
						sort: this.props.sort,
						timeSort: this.props.timeSort
					}, u = {};
					if (o === R.g.Large && e.forEach((e, t) => {
							u[e] = Object(O.a)({
								numInstance: t,
								layout: o,
								listingKey: i,
								listingName: J.b,
								listingPosition: e
							})
						}), r) {
						const {
							child: e,
							idx: t
						} = Object(w.a)({
							children: u,
							desiredIndex: c,
							layout: o,
							listingKey: i,
							listingName: Q.P,
							sendEvent: a
						});
						u[t] = e
					}
					const h = p.a.createElement(P.default, {
						className: Y.a.sidebar,
						listingKey: i,
						listingName: J.b
					});
					return p.a.createElement(M.a, {
						className: Object(g.a)(Y.a.Container, this.props.className),
						fitPageToContent: !0,
						trendingUnit: d && p.a.createElement(ae, {
							showCardView: o === R.g.Large
						}),
						content: p.a.createElement(m.Fragment, null, d && p.a.createElement(L.a, {
							className: Y.a.duHeader
						}, $._("Popular posts", null, {
							hk: "36DJb4"
						})), p.a.createElement(E.a, null), s && p.a.createElement(C.a, null), p.a.createElement(k.a, l), p.a.createElement(N.a, null), p.a.createElement(T.a, {
							listingKey: this.props.listingKey,
							shortTimer: !0,
							handlePillClick: this.props.refreshFeed
						}), p.a.createElement(I.a, {
							injectChildren: u,
							noPostsComponent: () => p.a.createElement(j.a, {
								listingName: J.b,
								sort: this.props.sort
							}),
							key: "listing",
							listingKey: i,
							listingName: J.b,
							listingViewed: (e, t) => Object(F.e)(i, this.props.sort, t, e, this.props.timeSort),
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: h
					})
				}
			}
			t.default = ee(ie(Object(D.c)(de)))
		},
		"./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				a = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const l = Object(n.a)(a.a, a.b, (e, t) => {
					let {
						listingName: s
					} = t;
					const n = Object(c.kb)(e);
					if (!n) return !1;
					let a;
					if (-1 === [o.P, "r/popular"].indexOf(s)) {
						const t = s.replace(/^r\//, ""),
							r = Object(i.E)(e, t),
							o = n.subreddit[r];
						if (!o) return !1;
						a = o
					} else a = n;
					if (!a.rpanDuDismissalTime) return !1;
					return new Date(a.rpanDuDismissalTime).getTime() > Date.now() - 30 * r.w
				}, (e, t) => {
					let {
						listingName: s
					} = t;
					return s
				}, (e, t) => {
					let {
						listingName: s
					} = t;
					return Object(d.m)(e, {
						subreddit: s
					})
				}, d.k, (e, t, s, n, r, i) => {
					if (!e) return !1;
					if (i.isPermanentlyCanceled) return !1;
					if (s) return !1;
					if (t) return !!r && r.show_discovery_unit;
					if (!i.global.viewer_enabled) return !1;
					return [o.P, "r/popular"].indexOf(n) > -1
				}),
				u = Object(n.a)(a.b, (e, t) => {
					let {
						listingName: s
					} = t;
					return s
				}, (e, t) => {
					let {
						listingName: s
					} = t;
					return Object(d.m)(e, {
						subreddit: s
					})
				}, d.l, (e, t, s, n) => {
					if (!e) {
						const e = "home" === t ? n.home_feed_discovery_unit_index : "r/popular" === t ? n.popular_feed_discovery_unit_index : o.i;
						return "number" == typeof e ? e : o.i
					}
					return s ? s.discovery_unit_index : o.i
				})
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return j
			})), s.d(t, "l", (function() {
				return k
			})), s.d(t, "m", (function() {
				return C
			})), s.d(t, "g", (function() {
				return w
			})), s.d(t, "c", (function() {
				return D
			})), s.d(t, "f", (function() {
				return S
			})), s.d(t, "j", (function() {
				return R
			})), s.d(t, "i", (function() {
				return U
			})), s.d(t, "e", (function() {
				return F
			})), s.d(t, "a", (function() {
				return B
			})), s.d(t, "h", (function() {
				return H
			})), s.d(t, "b", (function() {
				return K
			})), s.d(t, "d", (function() {
				return W
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				a = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				u = s("./node_modules/lodash/memoize.js");
			const m = e => e.publicAccessNetwork.listings,
				p = s.n(u)()(e => Object(r.a)(Object(n.a)(m, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var h = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const b = e => e.publicAccessNetwork.reports.reported,
				g = e => e.publicAccessNetwork.history,
				y = e => e.publicAccessNetwork.history.cursor,
				f = e => e.publicAccessNetwork.history.visitOrder,
				v = e => e.publicAccessNetwork.hlsStreams,
				_ = Object(n.a)(v, e => e.ended),
				x = Object(n.a)(v, e => e.removed),
				O = Object(n.a)(e => e.publicAccessNetwork.models, _, x, (e, t, s) => {
					const n = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							r = M(n, c.b.ENDED) ? c.b.ENDED : n,
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
							r = M(n, c.b.ENDED) ? c.b.ENDED : n,
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
				j = (e, t) => {
					return O(e)[Object(i.g)(t)]
				},
				E = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => p(t.listingName)(e, t), O, b, a.i, d.b, (e, t, s, n, r, a) => {
					if (a) {
						const o = [];
						if (e) {
							const t = Object(i.g)(e);
							s[t] && o.push(t)
						}
						const a = o.concat(t),
							d = [...new Set(a)],
							l = new Set([...n, ...r]);
						return d.filter(e => {
							const t = s[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== c.b.KILLED && t.stream.state !== c.b.PURGED
						})
					}
					const d = new Set([...n, ...r]);
					return Object.keys(s).filter(e => !d.has(e)).map(e => s[e]).filter(e => e.rank !== o.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== c.b.KILLED && e.stream.state !== c.b.PURGED).map(e => e.post.id)
				}),
				P = Object(n.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, O, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: n
					} = t;
					return E(e, {
						listingName: s,
						streamIdFromPath: n
					})
				}, (e, t, s) => {
					const n = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? n.slice(0, e) : n
				}),
				k = Object(n.a)(O, P, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				C = Object(n.a)(O, P, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === c.b.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				N = Object(n.a)(f, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: r
					} = t;
					return P(e, {
						listingName: s || r,
						streamIdFromPath: n
					})
				}, (e, t) => {
					const s = new Set(e),
						n = t.filter(e => !s.has(e));
					if (n.length) return n[0]
				}),
				I = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, O, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: r
					} = t;
					return P(e, {
						listingName: s || r,
						streamIdFromPath: n
					})
				}, g, (e, t, s, n) => {
					if (!s.length) return;
					const r = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						o = r.find(e => e.stream.state === c.b.IS_LIVE);
					if (o) return o.post.id;
					const i = r.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (n.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				w = Object(r.a)(Object(n.a)(I, O, (e, t) => e ? t[e] : void 0)),
				L = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(i.g)(s) : void 0
				}, I, b, a.i, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: r
					} = t;
					return P(e, {
						listingName: s || r,
						streamIdFromPath: n
					})
				}, (e, t, s, n, r) => !e || s.includes(e) || n.includes(e) ? t || r[0] : e),
				A = Object(n.a)(y, f, N, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				T = Object(n.a)(y, f, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				D = Object(r.a)(Object(n.a)(L, O, (e, t) => e ? t[e] : void 0)),
				S = Object(r.a)(Object(n.a)(A, O, (e, t) => e ? t[e] : void 0)),
				R = Object(r.a)(Object(n.a)(T, O, (e, t) => e ? t[e] : void 0)),
				U = (Object(r.a)(Object(n.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, O, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign({}, t[s], {
					preloadedPreviewUrl: e[s]
				})))), Object(n.a)((e, t) => {
					let {
						streamId: s
					} = t;
					return s
				}, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => t[e])),
				F = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? j(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function M(e, t) {
				const s = {
					[c.b.NOT_STARTED]: 0,
					[c.b.PUBLISHED]: 1,
					[c.b.IS_LIVE]: 2,
					[c.b.DISCONNECTED]: 2,
					[c.b.ENDED]: 3,
					[c.b.KILLED]: 4,
					[c.b.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const V = Object(n.a)(L, g, (e, t) => e && t.timestamps[e] || 0);
			var B;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(B || (B = {}));
			const H = Object(n.a)(L, O, h.b, (e, t, s) => {
					if (s) return B.INTRO;
					const n = e && t[e];
					if (!n) return B.UNAVAILABLE;
					const r = n.stream.state;
					return r === c.b.IS_LIVE || r === c.b.DISCONNECTED ? B.LIVE : r === c.b.ENDED && n.stream.vod_accessible ? B.VOD : B.UNAVAILABLE
				}),
				K = Object(n.a)(D, H, h.b, l.b, l.o, (e, t, s, n, r) => s ? n : e ? t === B.LIVE || t === B.VOD ? e.stream.hls_url : r : void 0),
				W = Object(n.a)(D, H, V, (e, t, s) => e ? t === B.LIVE ? e.broadcast_time : t === B.VOD && s < e.broadcast_time ? s : 0 : 0)
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const i = e => e.publicAccessNetwork.theaterSettings,
				c = Object(n.a)(i, o.n, (e, t) => t && !e.isIntroFinished),
				a = Object(n.a)(i, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + r.a > Date.now()
		},
		"./src/reddit/selectors/experiments/announcementToolV2.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: n.f
			}) === n.i.Enabled
		},
		"./src/reddit/selectors/live.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = e => e.live.featured,
				r = e => e.live.announcements
		}
	}
]);
//# sourceMappingURL=Frontpage.ecd288e4d44ae5385bf6.js.map