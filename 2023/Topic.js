// https://www.redditstatic.com/desktop2x/Topic.f0941d4961b7ccc63b5a.js
// Retrieved at 8/2/2023, 10:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Topic"], {
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
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
							var i = r.element,
								o = a(i),
								d = this._rootContainsTarget(i),
								c = r.entry,
								l = t && d && this._computeTargetAndRootIntersection(i, s),
								u = r.entry = new n({
									time: e.performance && performance.now && performance.now(),
									target: i,
									boundingClientRect: o,
									rootBounds: s,
									intersectionRect: l
								});
							c ? t && d ? this._hasCrossedThreshold(c, u) && this._queuedEntries.push(u) : c && c.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, r.prototype._computeTargetAndRootIntersection = function(s, n) {
						if ("none" != e.getComputedStyle(s).display) {
							for (var r, i, o, d, l, u, m, p, b = a(s), h = c(s), g = !1; !g;) {
								var f = null,
									x = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == x.display) return;
								if (h == this.root || h == t ? (g = !0, f = n) : h != t.body && h != t.documentElement && "visible" != x.overflow && (f = a(h)), f && (r = f, i = b, o = void 0, d = void 0, l = void 0, u = void 0, m = void 0, p = void 0, o = Math.max(r.top, i.top), d = Math.min(r.bottom, i.bottom), l = Math.max(r.left, i.left), u = Math.min(r.right, i.right), p = d - o, !(b = (m = u - l) >= 0 && p >= 0 && {
										top: o,
										bottom: d,
										left: l,
										right: u,
										width: m,
										height: p
									}))) break;
								h = c(h)
							}
							return b
						}
					}, r.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
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
								var i = this.thresholds[r];
								if (i == s || i == n || i < s != i < n) return !0
							}
					}, r.prototype._rootIsInDom = function() {
						return !this.root || d(t, this.root)
					}, r.prototype._rootContainsTarget = function(e) {
						return d(this.root || t, e)
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
					var s, n, r, i = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (s = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, r = null, function() {
						r || (r = setTimeout((function() {
							s(), r = null
						}), n))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function i(e, t, s, n) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, s, n || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, s)
				}

				function o(e, t, s, n) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, s, n || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, s)
				}

				function a(e) {
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
		"./node_modules/lodash/times.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseTimes.js"),
				r = s("./node_modules/lodash/_castFunction.js"),
				i = s("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				a = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > o) return [];
				var s = a,
					c = d(e, a);
				t = r(t), e -= a;
				for (var l = n(c, t); ++s < e;) t(s);
				return l
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, s, n) {
				var r = s ? s.call(n, e, t) : void 0;
				if (void 0 !== r) return !!r;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var i = Object.keys(e),
					o = Object.keys(t);
				if (i.length !== o.length) return !1;
				for (var a = Object.prototype.hasOwnProperty.bind(t), d = 0; d < i.length; d++) {
					var c = i[d];
					if (!a(c)) return !1;
					var l = e[c],
						u = t[c];
					if (!1 === (r = s ? s.call(n, l, u, c) : void 0) || void 0 === r && l !== u) return !1
				}
				return !0
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			})), s.d(t, "b", (function() {
				return w
			}));
			var n, r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/performanceTimings/index.tsx"),
				o = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(n || (n = {}));
			var c, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var m = s("./src/lib/objectSelector/index.ts"),
				p = s("./src/reddit/featureFlags/index.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/selectors/user.ts");
			const f = [],
				x = (Object(m.a)((e, t) => {
					const s = x(e, t);
					if (!s) return f;
					const n = Object(h.bb)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : f
				}), (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(h.X)(e, {
						subredditId: s
					}) : null
				}),
				v = (e, t, s, n, r) => {
					const i = r.find(e => e <= t) || -1,
						o = r.find(e => e > t) || 1 / 0;
					return t !== o && t !== i && (!(i + s > t) && (!(t + s > o) && !((e, t, s) => {
						const n = s[t - 1],
							r = s[t],
							i = r && Object(b.F)(e, {
								postId: n
							}) || null,
							o = r && Object(b.F)(e, {
								postId: r
							}) || null;
						return i && i.isSponsored || o && o.isSponsored
					})(e, t, n)))
				},
				y = [3];
			Object(m.a)((e, t) => {
				let {
					existingDUPositions: s,
					listingProps: n
				} = t;
				const r = s.slice().sort();
				let i = -1;
				const o = Object(b.y)(e, {
						listingKey: n.listingKey
					}),
					a = [];
				return y.forEach(t => {
					let s = i + t;
					if (!(s >= o.length)) {
						for (; s < o.length && !v(e, s, t, o, r);) s += 1;
						s < o.length && (a.push(s), i = s)
					}
				}), a
			});
			var _ = s("./src/reddit/selectors/platform.ts");
			const S = Object(r.a)(o.f),
				E = Object(r.a)(o.d),
				T = Object(r.a)(o.g),
				O = Object(r.a)(o.c),
				C = Object(r.a)(o.e),
				k = (Object(r.a)(o.i), Object(r.a)(o.h), () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const i = t(),
						o = (e => {
							return e.focusedVerticals.api.pending.focusedVerticalGqlPending
						})(i),
						c = (e => {
							const t = Object(g.R)(e),
								s = p.d.geoSubredditRecommendationDULoggedIn(e),
								n = p.d.geoSubredditRecommendationDULoggedOut(e);
							return t && s || !t && n
						})(i),
						m = Object(g.R)(i);
					if (o || !c) return;
					e(T());
					let b = !1;
					try {
						const t = m ? n.LoggedInGeo : n.LoggedOutGeo,
							s = await ((e, t, s) => Object(a.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(r(), t);
						if (s.ok && s.body) {
							const {
								data: t
							} = s.body;
							if (j(t)) {
								if (L(t)) {
									e(O({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), b = !0
								} else if (N(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: r,
											category: i
										} = s.focusRecommendations[0],
										o = [n, r],
										a = Object(u.d)(o),
										d = Object(l.b)(o),
										c = Object(u.c)(n),
										m = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [r.id],
											subreddits: a,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: i,
											lastLoadedEnv: "client"
										};
									e(S(m)), b = !0
								}
							} else b = !1
						}
					} catch (h) {
						b = !1
					}
					b || e(E({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}),
				j = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				},
				L = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				},
				N = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !L(e) && n === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				},
				w = () => async (e, t, s) => {
					var n, r;
					const o = t(),
						a = (e => e.focusedVerticals.lastLoadedEnv)(o);
					if ((e => {
							return e.focusedVerticals.api.error.focusedVerticalGqlError
						})(o) || null === a || "client" === a) {
						const s = null === (r = null === (n = Object(_.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							a = Object(g.S)(o);
						return Object(i.i)(() => e(k()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(C({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return C
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "e", (function() {
				return L
			})), s.d(t, "g", (function() {
				return N
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "f", (function() {
				return P
			})), s.d(t, "b", (function() {
				return I
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				d = s("./src/redditGQL/operations/MutedSubreddits.json"),
				c = s("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json"),
				l = s("./src/redditGQL/operations/UpdateSubredditMuteSettings.json");
			const u = (e, t) => Object(o.a)(e, {
					...l,
					variables: {
						input: {
							subredditId: t
						}
					}
				}),
				m = (e, t) => Object(o.a)(e, {
					...a,
					variables: {
						input: {
							subredditId: t
						}
					}
				});
			var p = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/actions/subreddit/constants.ts"),
				h = s("./src/reddit/actions/subreddit/notifications.ts"),
				g = s("./src/reddit/selectors/subreddit.ts");
			const f = e => Object(i.f)({
					id: e,
					kind: p.b.Error,
					duration: i.a,
					text: n.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				x = (e, t) => Object(i.f)({
					kind: p.b.SuccessCommunityGreen,
					text: n.fbt._("Muted r/{subreddit name}", [n.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					...t ? {
						buttonText: n.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				}),
				v = (e, t) => Object(i.f)({
					kind: p.b.SuccessCommunityGreen,
					text: n.fbt._("Unmuted r/{subreddit name}", [n.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					...t ? {
						buttonText: n.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				});
			var y = s("./src/reddit/endpoints/subreddit/about.ts");
			const _ = Object(r.a)(b.i),
				S = Object(r.a)(b.h),
				E = Object(r.a)(b.G),
				T = (Object(r.a)(b.j), Object(r.a)(b.F), Object(r.a)(b.g)),
				O = Object(r.a)(b.f),
				C = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, i) => {
						let {
							gqlContext: o
						} = i;
						var a, d;
						const c = await u(o(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) n && n(), e(x(s, k({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(f(`error-muting-${t}`))
						}
					}
				},
				k = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, i) => {
						let {
							gqlContext: o
						} = i;
						var a, d;
						const c = await m(o(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.deleteSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) n && n(), e(v(s, C({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(f(`error-muting-${t}`))
						}
					}
				},
				j = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, i) => {
						let {
							gqlContext: o
						} = i;
						var a, d;
						const c = await u(o(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) n && n(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(x(s, L({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(f(`error-muting-${t}`))
						}
					}
				},
				L = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, i) => {
						let {
							gqlContext: o
						} = i;
						var a, d;
						const c = await m(o(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.deleteSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) n && n(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(v(s, j({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(f(`error-muting-${t}`))
						}
					}
				},
				N = e => {
					let {
						subredditId: t,
						notificationLevel: s
					} = e;
					return async (e, r, a) => {
						let {
							gqlContext: d
						} = a;
						var l, u;
						const m = Object(h.a)(s),
							b = await ((e, t, s) => Object(o.a)(e, {
								...c,
								variables: {
									input: {
										...s,
										subredditId: t
									}
								}
							}))(d(), t, m);
						b.ok && b.body && (null === (u = null === (l = b.body) || void 0 === l ? void 0 : l.data.updateSubredditMuteAndNotificationLevelSettings) || void 0 === u ? void 0 : u.ok) ? (e(E({
							subredditId: t,
							notificationLevel: s
						})), e(Object(i.f)({
							kind: p.b.SuccessCommunityGreen,
							text: Object(h.b)(s)
						}))) : e(Object(i.f)({
							kind: p.b.Error,
							text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				},
				w = () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const a = await (e => Object(o.a)(e, d))(r());
					if (a.ok && a.body && a.body.data) {
						const {
							data: t
						} = a.body, s = (t && t.identity.mutedSubreddits).edges.map(e => e.node);
						e(_({
							nodes: s
						}))
					} else e(S()), e(Object(i.f)({
						duration: i.a,
						kind: p.b.Error,
						text: n.fbt._("Failed to get muted subreddits, please try again.", null, {
							hk: "2dCj3Q"
						})
					}))
				}, P = e => {
					let {
						subredditId: t,
						subredditName: s
					} = e;
					return async (e, n, r) => {
						let {
							gqlContext: i
						} = r;
						var o, a;
						const d = await m(i(), t);
						if (d.ok && d.body && (null === (a = null === (o = d.body) || void 0 === o ? void 0 : o.data.deleteSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) e(T(t)), e(v(s));
						else {
							e(f(`error-unmuting-${t}`))
						}
					}
				}, I = e => {
					let {
						subredditName: t
					} = e;
					return async (e, s, r) => {
						let {
							gqlContext: o
						} = r;
						var a, d;
						const c = s(),
							l = Object(g.t)(c).find(e => e.name.toLowerCase() === t.toLowerCase());
						if (l) {
							const t = l.name,
								s = `error-muting-duplicate-${t}`;
							return e(Object(i.f)({
								id: s,
								kind: p.b.Error,
								duration: i.a,
								text: n.fbt._("Sorry, r/{subreddit name} is already muted.", [n.fbt._param("subreddit name", t)], {
									hk: "4n64wl"
								})
							}))
						}
						const m = await Object(y.a)(o(), t, !0),
							{
								data: b
							} = m.body,
							h = b && b.subreddit;
						if (!m.ok || null === h) {
							return e(((e, t) => Object(i.f)({
								id: e,
								kind: p.b.Error,
								duration: i.a,
								text: n.fbt._("Sorry, r/{subreddit name} isn't a community.", [n.fbt._param("subreddit name", t)], {
									hk: "3UtglL"
								})
							}))(`error-muting-${t}`, t))
						}
						const v = h.id,
							_ = await u(o(), v);
						if (_.ok && _.body && (null === (d = null === (a = _.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) e(O([h])), e(x(h.name));
						else {
							e(f(`error-muting-${v}`))
						}
					}
				}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return m
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "d", (function() {
				return f
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				o = s("./src/reddit/actions/notificationsInbox/index.ts"),
				a = s("./src/reddit/actions/subreddit/constants.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = s("./src/reddit/models/Subreddit/index.ts"),
				u = s("./src/reddit/models/Toast/index.ts");
			const m = Object(r.a)(a.z),
				p = Object(r.a)(a.y),
				b = Object(r.a)(a.x),
				h = e => {
					switch (e) {
						case l.c.FREQUENT:
							return {
								isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
							};
						case l.c.LOW:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
							};
						case l.c.OFF:
						default:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
							}
					}
				},
				g = e => {
					switch (e) {
						case l.c.OFF:
							return n.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.c.FREQUENT:
							return n.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.c.LOW:
							return n.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const f = e => {
				let {
					subredditId: t,
					notificationLevel: s,
					successCallback: r,
					undoCallback: a
				} = e;
				return async (e, l, f) => {
					let {
						gqlContext: x
					} = f;
					var v, y, _;
					e(p());
					const S = h(s),
						E = await Object(c.b)(x(), t, S);
					if ((null === (y = null === (v = E.error) || void 0 === v ? void 0 : v.fields) || void 0 === y ? void 0 : y.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(E.body) && (null === (_ = E.body.data.updateSubredditNotificationSettings.errors) || void 0 === _ ? void 0 : _.length)) return e(b()), e(Object(d.f)({
						kind: u.b.Error,
						text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					E.ok && (e(Object(i.c)({
						subredditId: t,
						notificationLevel: s
					})), e(m({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: s
							}
						}
					})), r && r(), e(a ? Object(d.f)(Object(d.e)(g(s), u.b.Undo, n.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(o.i)(t, a))) : Object(d.f)(Object(d.e)(g(s), u.b.SuccessCommunityGreen))))
				}
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/constants/elementIds.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				l = s("./src/reddit/components/BackToTop/index.m.less"),
				u = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = e => {
				if (e) {
					const e = document.getElementById(a.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: s,
					style: n
				} = e;
				const a = Object(i.e)(c.a);
				return r.a.createElement("div", {
					className: Object(o.a)(t, u.a.container),
					style: n
				}, r.a.createElement(d.a, m({
					className: u.a.button,
					onClick: () => b(s)
				}, a && {
					priority: d.c.Secondary,
					rplStyle: !0
				}), p._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
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
				DropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				dropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/contexts/Tooltip.ts"),
				f = s("./src/reddit/controls/Dropdown/index.tsx"),
				x = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				_ = s("./src/reddit/selectors/tooltip.ts"),
				S = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				E = s.n(S);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = "view--layout--FUE",
				C = "LayoutSwitch--picker",
				k = Object(d.a)(f.a),
				j = {
					[b.d.Card]: function(e) {
						return i.a.createElement(v.a, T({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return i.a.createElement(v.a, T({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return i.a.createElement(v.a, T({}, e, {
							name: "view_compact"
						}))
					}
				},
				L = {
					[b.d.Card]: () => n.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => n.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => n.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[b.d.Search]: () => n.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				N = Object(h.v)(),
				w = Object(a.c)({
					dropdownIsOpen: Object(_.b)(C),
					postLayout: h.U,
					redditStyle: h.E
				}),
				P = Object(o.b)(w, e => ({
					onListingLayoutChange: (t, s) => e(Object(u.x)(t, s)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: C
					}))
				}));
			class I extends i.a.Component {
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
							screen: Object(y.eb)(t),
							subreddit: Object(y.nb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: n,
							postLayout: r
						} = this.props, o = s || b.e[r], a = e === o, d = j[e], l = L[e];
						return i.a.createElement(x.b, T({}, t, {
							className: Object(c.a)(E.a.LayoutItem, {
								[E.a.selected]: a,
								[E.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: l(),
							iconWrapperClassName: E.a.LayoutItemIconWrapper,
							isSelected: a,
							noHover: a,
							onClick: a ? void 0 : () => this.changeLayout(e),
							textClassName: E.a.LayoutItemTextClassName
						}), i.a.createElement(d, {
							className: E.a.LayoutIcon,
							onClick: a ? void 0 : n,
							isFilled: a && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return i.a.createElement(k, T({}, e, {
							className: E.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: E.a.DropdownRow,
							rowIconClassName: E.a.DropdownRowIcon,
							rowSelectedClassName: E.a.DropdownRowSelected,
							tooltipId: C
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: n
					} = this.props, r = t || b.e[n];
					return i.a.createElement("div", {
						className: Object(c.a)(E.a.Container, e),
						id: O
					}, i.a.createElement("div", {
						className: E.a.DropdownContainer,
						onClick: s
					}, this.renderItem(r, {
						id: C,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), i.a.createElement(g.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = N(P(Object(p.c)(Object(l.a)(I))))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/PostList/index.tsx"),
				r = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(r.a)(n.a)
		},
		"./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less": function(e, t, s) {
			e.exports = {
				LanguageRow: "_1uqw13duLAypklZz9JuxH5",
				languageRow: "_1uqw13duLAypklZz9JuxH5",
				Selected: "C0ynfBku9Az2wYA9j1_PA",
				selected: "C0ynfBku9Az2wYA9j1_PA",
				NightModeSelected: "_3JYkv3aRJq9WBVU_Qu_O3K",
				nightModeSelected: "_3JYkv3aRJq9WBVU_Qu_O3K",
				ButtonSection: "_2go248Acx87AyaspT-IqC3",
				buttonSection: "_2go248Acx87AyaspT-IqC3",
				SelectedIcon: "Nqikdy52FO7Ok8SC7YbBy",
				selectedIcon: "Nqikdy52FO7Ok8SC7YbBy",
				FrontFlex: "_3qzPnI-sCnXtXXzmiLCUzt",
				frontFlex: "_3qzPnI-sCnXtXXzmiLCUzt",
				TextSection: "_5Rt2rPaHLuyB5smTxh9cS",
				textSection: "_5Rt2rPaHLuyB5smTxh9cS",
				Placeholder: "_3gtRwVx6uS2xZaynYajI9O",
				placeholder: "_3gtRwVx6uS2xZaynYajI9O",
				Icon: "_1ym0rG9P61fqq5EGeggDEg",
				icon: "_1ym0rG9P61fqq5EGeggDEg",
				isLeft: "_1wilU6X1e2oYYu84p5M0Bn",
				isRight: "_1N6ONFJor0MYB1AANfCh8M",
				LanguageListButtons: "_2GUwrGUdKWdruRBy2ogOPv",
				languageListButtons: "_2GUwrGUdKWdruRBy2ogOPv",
				HeaderBarImproved: "sKUGLH9bgXYnkNvi71PD6",
				headerBarImproved: "sKUGLH9bgXYnkNvi71PD6",
				MoreLanguages: "_34OOuEVRtCgQHxTw6Bm_SM",
				moreLanguages: "_34OOuEVRtCgQHxTw6Bm_SM",
				PromptContainer: "_2NBWDPVfLgJchMUSilY9hq",
				promptContainer: "_2NBWDPVfLgJchMUSilY9hq",
				PromptClose: "_1D3-VzG8d-pAsDFC2aDEqX",
				promptClose: "_1D3-VzG8d-pAsDFC2aDEqX",
				Close: "Z2DAjXDKT-rjUoOgPeR9b",
				close: "Z2DAjXDKT-rjUoOgPeR9b",
				PromptTitle: "_6pr2vYjViLknuzg7J_4II",
				promptTitle: "_6pr2vYjViLknuzg7J_4II",
				PromptSubtitle: "_1j479fpdJDH2JNDpssXW8Z",
				promptSubtitle: "_1j479fpdJDH2JNDpssXW8Z",
				PromptRow: "piSYz03CLXLD5jdQwPjUy",
				promptRow: "piSYz03CLXLD5jdQwPjUy",
				Dismiss: "Fssd937Pdx1KOrc1lhBS5",
				dismiss: "Fssd937Pdx1KOrc1lhBS5"
			}
		},
		"./src/reddit/components/Onboarding/LanguageCollection/prompt.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/actions/eligibleUxExperiences/eligibleUxExperiences.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less"),
				l = s.n(c),
				u = s("./src/reddit/constants/componentTestIds.ts"),
				m = s("./src/reddit/contexts/ApiContext.tsx"),
				p = s("./src/reddit/endpoints/onboarding/languageSelections.ts"),
				b = s("./src/reddit/constants/tracking.ts"),
				h = s("./src/reddit/selectors/telemetry.ts");
			const g = "bottom_sheet";
			var f;
			! function(e) {
				e.ADD = "add", e.LATER = "maybe_later", e.SKIP = "skip"
			}(f || (f = {}));
			var x = s("./src/reddit/hooks/useTracking.ts"),
				v = s("./src/reddit/icons/svgs/Close/index.tsx"),
				y = s("./src/reddit/models/Toast/index.ts"),
				_ = s("./src/reddit/selectors/eligibleUXExperiences.ts"),
				S = s("./src/reddit/selectors/experiments/uxtsIntegration.ts"),
				E = s("./src/reddit/selectors/meta.ts"),
				T = s("./src/redditGQL/types.ts");
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = e => {
				const {
					gqlContext: t
				} = e, s = Object(i.d)(), c = Object(x.a)(), m = Object(i.e)(E.b), [_, S] = Object(n.useState)(!1), [C, k] = Object(n.useState)({}), [j, L] = Object(n.useState)({}), [N, w] = Object(n.useState)([]);
				let P = ["es"];
				const I = Object(n.useCallback)(async () => {
					const e = await Object(p.b)(t);
					e && (L(e.languages), w(e.preferences), S(!0))
				}, [t]);
				Object(n.useEffect)(() => {
					I()
				}, [I]);
				const R = e => {
						c("skip" === e ? (e => t => ({
							...Object(h.q)(t),
							source: g,
							action: b.c.CLICK,
							noun: f.SKIP,
							actionInfo: {
								...Object(h.d)(t),
								type: e
							}
						}))(m) : (e => t => ({
							...Object(h.q)(t),
							source: g,
							action: b.c.CLICK,
							noun: f.LATER,
							actionInfo: {
								...Object(h.d)(t),
								type: e
							}
						}))(m)), S(!1), s(Object(a.c)({
							experience: T.db.LanguagePreferenceBottomSheet,
							value: !1
						}))
					},
					F = () => {
						const e = Object.keys(C).join();
						c(((e, t) => s => ({
							...Object(h.q)(s),
							source: g,
							action: b.c.CLICK,
							noun: f.ADD,
							actionInfo: {
								...Object(h.d)(s),
								reason: t,
								type: e
							}
						}))(m, e)), (async () => {
							var e;
							const n = C;
							N.map(e => n[e] = !0);
							const r = await Object(p.d)(t, n);
							(null === (e = null == r ? void 0 : r.updateSpokenLanguagesPreference) || void 0 === e ? void 0 : e.ok) ? s(Object(d.f)({
								kind: y.b.SuccessCommunity,
								text: O._("Changes saved", null, {
									hk: "2isjrZ"
								})
							})): s(Object(d.f)({
								kind: y.b.Error,
								text: O._("Changes failed to save. Try adding content languages in user settings", null, {
									hk: "2YYdoj"
								})
							}))
						})(), S(!1), s(Object(a.c)({
							experience: T.db.LanguagePreferenceBottomSheet,
							value: !1
						}))
					};
				return P = P.filter(e => !N.includes(e)), _ && 0 !== P.length ? (c((e => t => ({
					...Object(h.q)(t),
					source: g,
					action: b.c.VIEW,
					noun: b.b.SCREEN,
					actionInfo: {
						...Object(h.d)(t),
						type: e
					}
				}))(m)), s(Object(a.d)(T.db.LanguagePreferenceBottomSheet)), r.a.createElement("div", {
					className: l.a.PromptContainer
				}, r.a.createElement("div", {
					className: l.a.PromptClose
				}, r.a.createElement(v.a, {
					className: l.a.Close,
					onClick: () => R("skip"),
					"data-testid": u.e
				})), r.a.createElement("div", {
					className: l.a.PromptTitle
				}, O._("See content in more languages", null, {
					hk: "4uyzS1"
				})), r.a.createElement("div", {
					className: l.a.PromptSubtitle
				}, O._("Update your settings to make it easier to discover content in multiple languages", null, {
					hk: "3VhB1c"
				})), 1 === P.length ? r.a.createElement("div", {
					className: l.a.PromptRow,
					onClick: () => (e => {
						const t = C;
						t[e] = !0, k(t), F()
					})(P[0]),
					"data-testid": P[0]
				}, O._("Add {language}", [O._param("language", j[P[0]])], {
					hk: "2emiHZ"
				})) : null, r.a.createElement("div", {
					className: Object(o.a)(l.a.PromptRow, {
						[l.a.Dismiss]: !0
					}),
					onClick: () => R("later")
				}, O._("Maybe later", null, {
					hk: "2LjBDw"
				})))) : null
			};
			t.a = Object(m.b)(e => {
				var t;
				const {
					gqlContext: s
				} = e, n = Object(i.f)().getState();
				return (null === (t = Object(i.e)(e => Object(_.a)(e, {
					experience: T.db.LanguagePreferenceBottomSheet
				}))) || void 0 === t ? void 0 : t.value) && Object(S.b)(n) ? r.a.createElement(C, {
					gqlContext: s
				}) : null
			})
		},
		"./src/reddit/components/RelatedTopicList/RelatedTopic/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_3tJhQnCiKKw7zk005rnKPi",
				container: "_3tJhQnCiKKw7zk005rnKPi",
				Link: "_1UplSBT2HFX_QHDhVZMx8r",
				link: "_1UplSBT2HFX_QHDhVZMx8r",
				Name: "_36r6mQVhaj58SDTd9Wt-eY",
				name: "_36r6mQVhaj58SDTd9Wt-eY",
				IconContainer: "_1OzhHh5MZVj92UtAsjBwp5",
				iconContainer: "_1OzhHh5MZVj92UtAsjBwp5"
			}
		},
		"./src/reddit/components/RelatedTopicList/index.m.less": function(e, t, s) {
			e.exports = {
				RelatedTopicList: "sACY92mHU6bQuz_UxFIwW",
				relatedTopicList: "sACY92mHU6bQuz_UxFIwW",
				Title: "_5MwovlatIWVRLVWJt1vCL",
				title: "_5MwovlatIWVRLVWJt1vCL"
			}
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
				i = s.n(r);
			t.a = n.a.div("container", i.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
			e.exports = {
				GreyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				greyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				NoneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				noneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/Onboarding/LanguageCollection/prompt.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = s("./src/reddit/constants/experiments.ts"),
				p = s("./src/reddit/constants/location.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/trackers/navigation.ts"),
				g = s("./src/reddit/selectors/experiments/countrySites.ts"),
				f = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				x = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				v = s("./src/reddit/selectors/meta.ts"),
				y = s("./src/redditGQL/types.ts"),
				_ = s("./src/reddit/components/SidebarFooter/index.m.less"),
				S = s.n(_);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), T = d.a.a("Link", S.a), O = Object(o.c)({
				countryCode: v.b,
				d2xPdpSideRailRecsVariant: f.a,
				isCountrySitesEnabled: g.b,
				isD2xPdpSideRailRecsEnabled: f.b,
				isNavbarLikeMwebEnabled: x.a
			}), C = Object(i.b)(O), k = Object(b.v)({
				isFrontpage: b.B,
				isCountrySitePage: b.z
			}), j = e => {
				let {
					countryCode: t,
					reredditContent: s
				} = e;
				return r.a.createElement("div", {
					className: S.a.GreyRereddit
				}, s, !!p.c[t] && r.a.createElement("div", {
					className: S.a.LinkContainer
				}, r.a.createElement("div", {
					className: S.a.Column
				}, r.a.createElement(T, {
					href: "https://www.redditinc.com/policies/impressum"
				}, E._("Impressum", null, {
					hk: "4cKXSI"
				})), t === y.i.De && r.a.createElement(T, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: S.a.NoneCapitalizeLink
				}, E._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: S.a.Column
				}, r.a.createElement(T, {
					href: "https://www.reddithelp.com"
				}, E._("help", null, {
					hk: "4lyYaD"
				})), t === y.i.De && r.a.createElement(T, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, E._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: S.a.LinkContainer
				}, r.a.createElement("div", {
					className: S.a.Column
				}, r.a.createElement(T, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, E._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(T, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, E._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: S.a.Column
				}, r.a.createElement(T, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, E._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(T, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, E._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), r.a.createElement("div", {
					className: S.a.Copyright
				}, E._("Reddit, Inc. © {year}. All rights reserved.", [E._param("year", (new Date).getFullYear().toString())], {
					hk: "DPZBh"
				})))
			};
			t.a = k(C(Object(l.c)(e => {
				const t = Object(i.f)().getState(),
					s = Object(g.a)(t, Object(a.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === m.kd.GreyRereddit || e.d2xPdpSideRailRecsVariant === m.kd.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === m.kd.LargeImagePreview ? e.reredditButtons : [];
					return r.a.createElement(j, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				if (!e.isFrontpage && !e.isCountrySitePage) return null;
				const n = t => {
					const n = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return s.includes(t) || "en" === t ? r.a.createElement(T, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(h.a)(t))
					}, n[t]) : null
				};
				return r.a.createElement(u.a, {
					className: S.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!p.c[e.countryCode] && r.a.createElement("div", {
					className: S.a.LinkContainer
				}, r.a.createElement("div", {
					className: S.a.Column
				}, r.a.createElement(T, {
					href: "https://www.redditinc.com/policies/impressum"
				}, E._("Impressum", null, {
					hk: "4cKXSI"
				})), e.countryCode === y.i.De && r.a.createElement(T, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: S.a.NoneCapitalizeLink
				}, E._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: S.a.Column
				}, r.a.createElement(T, {
					href: "https://www.reddithelp.com"
				}, E._("help", null, {
					hk: "4lyYaD"
				})), e.countryCode === y.i.De && r.a.createElement(T, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, E._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: S.a.LinkContainer
				}, r.a.createElement("div", {
					className: S.a.Column
				}, r.a.createElement(T, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, E._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(T, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, E._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: S.a.Column
				}, r.a.createElement(T, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, E._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(T, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, E._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: S.a.LinkContainer
				}, r.a.createElement("div", {
					className: S.a.Column
				}, n("en"), n("fr"), n("it")), r.a.createElement("div", {
					className: S.a.Column
				}, n("de"), n("es"), n("pt"))), r.a.createElement("div", {
					className: S.a.Copyright
				}, E._("Reddit, Inc. © {year}. All rights reserved.", [E._param("year", (new Date).getFullYear().toString())], {
					hk: "DPZBh"
				})), r.a.createElement(c.a, null))
			})))
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				BottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				bottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/lodash/throttle.js"),
				i = s.n(r),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/components/BackToTop/index.tsx"),
				l = s("./src/reddit/components/SidebarFooter/index.tsx"),
				u = s("./src/reddit/constants/componentSizes.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				b = s.n(p),
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
			const f = d.g[1] + 24,
				x = u.f + 8,
				v = x + 152 + 16,
				y = v + f + 8,
				_ = h.a.div("Container", b.a),
				S = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: s,
						...n
					} = e;
					return a.a.createElement(c.a, g({
						className: t,
						isOverlay: s,
						style: {
							top: `calc(100vh - ${s?x:8}px)`
						}
					}, n))
				}, "BackToTop", b.a),
				E = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: r,
						isSticky: i,
						shouldStickToBottom: o
					} = e;
					return a.a.createElement("div", {
						className: Object(n.a)(s, {
							[b.a.BottomStickyStyles]: o,
							[b.a.StickyStyles]: !o && i && !r,
							[b.a.StickyStylesFakeOverlay]: !o && !!r
						})
					}, t)
				};
			class T extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > y,
						shouldFooterSticky: this.windowHeight > v
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
					}, this.handleResize = i()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.L), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isBottomSticky: !1,
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
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: s,
							children: n,
							className: r,
							hideFooter: i,
							pageLayer: o,
							recommendationsComponent: d,
							reredditButtons: c
						}
					} = this, u = this.state.isAdSticky && !(!t && !n), m = this.state.isBottomSticky;
					return a.a.createElement(_, {
						className: r,
						innerRef: this.setWrapperRef
					}, a.a.createElement(E, {
						isFakeOverlay: s,
						isSticky: u,
						shouldStickToBottom: m
					}, t, n, d, !i && a.a.createElement(l.a, {
						reredditButtons: c
					})), !d && !this.props.hideBackToTop && a.a.createElement(S, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const O = Object(m.v)();
			t.a = O(T)
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less": function(e, t, s) {
			e.exports = {
				BladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				bladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				Container: "_2lnfWQQ2rf3LByOAo0AIxK",
				container: "_2lnfWQQ2rf3LByOAo0AIxK",
				isSubscriptionPinned: "_3VGAuEF6xANTry3OLdIkY-",
				CloseIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				closeIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				LoadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loading: "ZKk731y0xKgZOe9Tjjniq",
				gradientAnimation: "U7_QESggl5iLUzCuBiLcO",
				LoadingTitle: "XP9o26f6xTYlWRW8E4xg",
				loadingTitle: "XP9o26f6xTYlWRW8E4xg",
				LoadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				loadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				LoadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				loadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				ShortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				shortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				ThemedChevron: "_3yekFtL72Ta99kZASWWCIh",
				themedChevron: "_3yekFtL72Ta99kZASWWCIh"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/values.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/makeAsync.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/loadWithRetries/index.ts"),
				p = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				b = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = s("./src/reddit/icons/svgs/Close/index.tsx"),
				g = s("./src/reddit/selectors/moderatorPermissions.ts"),
				f = s("./src/reddit/selectors/structuredStyles.ts"),
				x = s("./src/reddit/selectors/userPrefs.ts"),
				v = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				y = s.n(v);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = u.a.div("BladeContainer", y.a), E = u.a.wrapped(h.a, "CloseIcon", y.a), T = u.a.div("LoadingTitleContainer", y.a), O = u.a.div("LoadingNavContainer", y.a), C = u.a.div("ShortLoadingNav", y.a), k = u.a.wrapped(b.a, "ThemedChevron", y.a), j = e => {
				let {
					...t
				} = e;
				return o.a.createElement(S, null, o.a.createElement(E, null), o.a.createElement(p.k, null, o.a.createElement(p.p, null, _._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), o.a.createElement(p.o, null, o.a.createElement(T, null, o.a.createElement("div", {
					className: Object(l.a)(y.a.LoadingTitle, t.isLoading && y.a.loading)
				})), o.a.createElement(O, null, o.a.createElement("div", {
					className: Object(l.a)(y.a.LoadingNav, t.isLoading && y.a.loading)
				}), o.a.createElement(k, null)), o.a.createElement(O, null, o.a.createElement(C, null), o.a.createElement(k, null)), o.a.createElement(O, null, o.a.createElement("div", {
					className: Object(l.a)(y.a.LoadingNav, t.isLoading && y.a.loading)
				}), o.a.createElement(k, null)), o.a.createElement(O, null, o.a.createElement(C, null), o.a.createElement(k, null)), o.a.createElement(O, null, o.a.createElement("div", {
					className: Object(l.a)(y.a.LoadingNav, t.isLoading && y.a.loading)
				}), o.a.createElement(k, null)))))
			}, L = Object(c.a)({
				getComponent: () => Object(m.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("StructuredStyles")]).then(s.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => o.a.createElement(j, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => o.a.createElement(j, {
					gradientType: "posts",
					isLoading: !0
				})
			}), N = Object(d.c)({
				isEditing: f.i,
				isSubscriptionsPinned: x.c,
				moderatorPermissions: g.n
			});
			t.a = Object(a.b)(N)(e => {
				const t = e.moderatorPermissions && r()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? o.a.createElement("div", {
					className: Object(l.a)(y.a.Container, e.isSubscriptionsPinned && y.a.isSubscriptionPinned)
				}, e.children, o.a.createElement(L, {
					subredditId: e.subredditId
				})) : o.a.createElement(i.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, s) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				breadcrumbTitle: "_24r4TaTKqNLBGA3VgswFrN",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return o
			})), s.d(t, "p", (function() {
				return a
			})), s.d(t, "n", (function() {
				return d
			})), s.d(t, "o", (function() {
				return c
			})), s.d(t, "m", (function() {
				return l
			})), s.d(t, "l", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "j", (function() {
				return _
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				i = s.n(r);
			const o = n.a.section("FormPage", i.a),
				a = n.a.h1("HomePageTitle", i.a),
				d = n.a.button("HomePageBreadcrumb", i.a),
				c = n.a.div("HomePageGroup", i.a),
				l = n.a.h1("FormPageTitle", i.a),
				u = n.a.div("FormPageSection", i.a),
				m = n.a.div("FormGroup", i.a),
				p = n.a.h2("FormGroupTitle", i.a),
				b = n.a.div("FormElement", i.a),
				h = n.a.div("FormGroupDescription", i.a),
				g = n.a.div("FormItem", i.a),
				f = n.a.h3("FormElementTitle", i.a),
				x = n.a.div("FormElementDescription", i.a),
				v = n.a.div("FormElementError", i.a),
				y = n.a.div("FormElementSubGroup", i.a),
				_ = n.a.li("FormListItem", i.a)
		},
		"./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1wPkPx87vMrQd9QW79-Ar7",
				container: "_1wPkPx87vMrQd9QW79-Ar7",
				SubscribeButton: "_1Bc_TFm9q38wDx8icKdasG",
				subscribeButton: "_1Bc_TFm9q38wDx8icKdasG",
				Icon: "_2TzUwYA32R-Hx5HQdxsWWP",
				icon: "_2TzUwYA32R-Hx5HQdxsWWP",
				placeholder: "_3D4_gGvFd4EDWKz4ueGNqu",
				Text: "_1O31lH4tpbJwYBKW2NmwXi",
				text: "_1O31lH4tpbJwYBKW2NmwXi",
				Link: "_3IPnsAjx27sBpv53euPc2G",
				link: "_3IPnsAjx27sBpv53euPc2G",
				Name: "_34EJPxBGGouPQbmc0Z-LmB",
				name: "_34EJPxBGGouPQbmc0Z-LmB",
				Members: "_106YuYJJ3FE95a4NDxNg6k",
				members: "_106YuYJJ3FE95a4NDxNg6k",
				hidden: "_2zUZgN0OEXf0LMxsR-7L6l"
			}
		},
		"./src/reddit/components/TopicSidebar/SubredditList/index.m.less": function(e, t, s) {
			e.exports = {
				Title: "_3T1Jtiyqnd1l1V9fcLf20J",
				title: "_3T1Jtiyqnd1l1V9fcLf20J",
				SubredditList: "_34o8T80OdRMyo2wr1IA3t6",
				subredditList: "_34o8T80OdRMyo2wr1IA3t6",
				Subreddit: "_29_Ws1xvPBAiLL3FvunH-h",
				subreddit: "_29_Ws1xvPBAiLL3FvunH-h",
				SeeMore: "_24xqgM4izvcvOOe3qlOjF",
				seeMore: "_24xqgM4izvcvOOe3qlOjF"
			}
		},
		"./src/reddit/components/TopicSidebar/SubredditList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				m = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				p = s("./node_modules/fbt/lib/FbtPublic.js"),
				b = s("./node_modules/react-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				g = s("./src/lib/prettyPrintNumber/index.ts"),
				f = s("./src/reddit/components/SubredditIcon/index.tsx"),
				x = s("./src/reddit/components/SubscribeButton/index.tsx"),
				v = s("./src/reddit/constants/posts.ts"),
				y = s("./src/reddit/controls/InternalLink/index.tsx"),
				_ = s("./src/reddit/helpers/name/index.ts"),
				S = s("./src/reddit/helpers/widgets/index.tsx"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				T = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less"),
				C = s.n(O);
			const k = Object(h.c)({
				isLoggedIn: T.S,
				subreddit: E.X,
				subredditAboutInfo: E.y
			});
			class j extends r.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditClick = () => {
						const {
							discoveryUnit: e,
							sendEvent: t,
							subreddit: s,
							subredditAboutInfo: n
						} = this.props;
						if (!s) return;
						const r = Object(S.c)(s, n);
						t(Object(u.h)(e, r))
					}
				}
				render() {
					const {
						className: e,
						isLoggedIn: t,
						subreddit: s
					} = this.props;
					return s ? r.a.createElement("div", {
						className: Object(o.a)(C.a.Container, e)
					}, r.a.createElement(f.b, {
						className: C.a.Icon,
						subredditOrProfile: s
					}), r.a.createElement("div", {
						className: C.a.Text
					}, r.a.createElement(y.default, {
						className: C.a.Link,
						onMouseDown: this.trackSubredditClick,
						to: s.url
					}, r.a.createElement("div", {
						className: C.a.Name
					}, Object(_.d)(s.displayText || s.name)), r.a.createElement("div", {
						className: C.a.Members
					}, p.fbt._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [p.fbt._plural(s.subscribers, "subscribers count", Object(g.b)(s.subscribers))], {
						hk: "48BXj1"
					})))), r.a.createElement(x.a, {
						border: !1,
						className: Object(o.a)(C.a.SubscribeButton, {
							[C.a.hidden]: !t
						}),
						identifier: {
							name: s.name,
							type: v.a.SUBREDDIT
						},
						small: !0
					})) : null
				}
			}
			var L = Object(b.b)(k)(Object(c.c)(j)),
				N = s("./src/reddit/helpers/styles/mixins/loading.ts");
			var w = e => {
					const {
						className: t
					} = e, s = Object(N.b)({
						isLoading: !0
					});
					return r.a.createElement("div", {
						className: Object(o.a)(C.a.Container, t)
					}, r.a.createElement("div", {
						className: Object(o.a)(C.a.Icon, C.a.placeholder, s)
					}), r.a.createElement("div", {
						className: C.a.Text
					}, r.a.createElement("div", {
						className: C.a.Link
					}, r.a.createElement("div", {
						className: Object(o.a)(C.a.Name, C.a.placeholder, s)
					}), r.a.createElement("div", {
						className: Object(o.a)(C.a.Members, C.a.placeholder, s)
					}))), r.a.createElement("div", {
						className: C.a.SubscribeButton
					}))
				},
				P = s("./src/reddit/components/TopicSidebar/SubredditList/index.m.less"),
				I = s.n(P);
			const {
				fbt: R
			} = s("./node_modules/fbt/lib/FbtPublic.js"), F = 8, D = Array.from({
				length: F
			}).map((e, t) => r.a.createElement(w, {
				className: I.a.Subreddit,
				key: t
			})), B = {
				enabled: !0,
				id: "xd_103",
				layout: m.c.Large,
				surface: m.d.Topic,
				unitName: m.h,
				unitType: m.e.SubredditListing,
				url: ""
			};
			class M extends r.a.Component {
				constructor() {
					super(...arguments), this.onSeeMoreCommunities = () => {
						this.props.onSeeMoreCommunities && (this.props.sendEvent(Object(u.q)(B)), this.props.onSeeMoreCommunities())
					}
				}
				render() {
					const {
						className: e,
						subredditIds: t,
						topicUrl: s
					} = this.props, n = t.slice(0, F);
					return r.a.createElement(a.a, {
						className: Object(o.a)(I.a.Container, e)
					}, r.a.createElement("div", {
						className: I.a.Title
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, R._("Top Communities", null, {
						hk: "46yzcK"
					}))), r.a.createElement("div", {
						className: I.a.SubredditList
					}, n.length > 0 ? n.map(e => r.a.createElement(L, {
						className: I.a.Subreddit,
						discoveryUnit: B,
						key: e,
						subredditId: e
					})) : D), t.length > F && r.a.createElement(i.a, {
						to: s
					}, r.a.createElement(l.r, {
						className: I.a.SeeMore,
						onClick: this.onSeeMoreCommunities
					}, R._("See more", null, {
						hk: "2qkY6H"
					}))))
				}
			}
			t.a = Object(c.c)(M)
		},
		"./src/reddit/components/TopicSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				StickyBottom: "_2yV768nzIKxq_QdOCYdJ3-",
				stickyBottom: "_2yV768nzIKxq_QdOCYdJ3-"
			}
		},
		"./src/reddit/components/TopicSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/components/SidebarContainer/index.tsx"),
				o = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				a = s("./src/reddit/components/TopicSidebar/index.m.less"),
				d = s.n(a);
			t.a = e => {
				const {
					children: t,
					className: s
				} = e;
				return r.a.createElement(i.a, {
					className: s
				}, t, r.a.createElement(o.a, {
					className: d.a.StickyBottom
				}))
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
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/widgets.ts"),
				b = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = s("./src/reddit/selectors/experiments/topPosts.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/models/Theme/index.ts"),
				v = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const y = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(v.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				_ = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(v.a)(e).widgetColors.sidebarWidgetHeaderColor,
				S = e => {
					const t = y(e);
					return Object(x.e)(t)
				},
				E = e => {
					const t = _(e);
					return Object(x.e)(t)
				};
			var T = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				O = s.n(T);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = Object(u.v)(), j = Object(i.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.o)(e, t) || void 0,
						n = t.redditStyle || Object(g.l)(e, {
							subredditId: s
						}),
						r = Object(f.fb)(e);
					return n || r
				},
				nigtmode: f.fb,
				subredditId: u.o,
				topPostVariant: h.d
			}));
			class L extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
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
					return e.backgroundColor = y(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = S(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = _(this.props), e.color = e.fill = E(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: i,
						id: o,
						onClick: d,
						onHeaderClick: l,
						title: u,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = s ? O.a.widgetContentOnly : O.a.widgetContent, g = !n && this.props.styles, f = g ? this.getWidgetBackgroundStyles() : {}, x = g ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(a.a)(t, O.a.widgetBackground, {
							[O.a.redditStyle]: n,
							[O.a.clickable]: !!d,
							[O.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: d,
						style: f
					}, u && r.a.createElement("div", {
						className: Object(a.a)(O.a.widgetHeader, {
							[O.a.clickable]: !!l
						}),
						id: o,
						style: {
							...x,
							...this.props.headerStyles
						},
						onClick: l
					}, r.a.createElement("div", {
						className: Object(a.a)(O.a.widgetTitle, p)
					}, r.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), i), r.a.createElement("div", {
						className: Object(a.a)(h, {
							[O.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.r, {
						className: O.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, C._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = k(j(Object(d.a)(Object(l.c)(L))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "b", (function() {
				return L
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				d = s("./src/reddit/actions/gold/tooltips.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				u = s("./src/reddit/actions/survey/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/components/PostList/Placeholder.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				x = s("./src/reddit/selectors/experiments/hidePostMitigation.ts"),
				v = s("./src/reddit/selectors/experiments/survey.ts"),
				y = s("./src/reddit/selectors/listings.ts"),
				_ = s("./src/reddit/selectors/posts.ts"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/selectors/tracking.ts"),
				T = s("./src/reddit/selectors/user.ts");

			function O() {
				return Object(p.v)({
					currentProfileName: p.j,
					isCommentPermalink: p.x,
					isCommentsPage: p.y,
					isFrontpage: p.B,
					isProfilePostListing: p.N,
					isTopicPage: p.T,
					pageLayer: e => e
				})
			}
			const C = O(),
				k = {
					apiError: y.c,
					apiPending: y.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.U)(e, t),
					loadMore: y.g,
					postsById: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(_.S)(e, {
							listingKey: s,
							keepHiddenPosts: Object(x.a)(e)
						})
					},
					postIds: Object(i.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: r
						} = t;
						return Object(_.C)(e, s, n, r, Object(x.a)(e))
					}),
					subredditsById: S.eb,
					viewportDataLoaded: E.b,
					pageReferrer: p.X,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: v.e,
					isLoggedIn: T.S
				},
				j = Object(r.c)(k),
				L = e => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(d.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(o.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(c.K(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(c.y(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n, r) => {
						e(c.M(t, n, r))
					},
					trackOnPostExitedViewport: (t, s, n, r) => {
						e(c.N(t, n, r))
					},
					showModalOnScroll: () => e(c.ab()),
					surveyTriggerScrollCounted: () => e(Object(u.l)())
				}),
				N = e => Object(b.b)({
					...e
				}),
				w = (e, t, s, n) => {
					const {
						listingKey: r,
						hostPostData: i,
						listingBelowVariant: o
					} = n;
					return Object(h.n)(e, t, "post", r, i, o, void 0)
				},
				P = Object(n.b)(j, L, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: N,
					postClickEventFactory: w
				}));
			t.a = e => Object(m.c)(C(P(e)))
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "f", (function() {
				return d
			}));
			const n = "comment",
				r = "comment-submission-form-markdown",
				i = "comment-submission-form-richtext",
				o = "comments-page-link-num-comments",
				a = "language-prompt-close",
				d = "post-content"
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = r.a.createContext({})
		},
		"./src/reddit/endpoints/onboarding/languageSelections.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/makeGqlRequest/index.ts");
			var r, i = s("./src/redditGQL/operations/LanguageSelections.json"),
				o = s("./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json");
			! function(e) {
				e.ALL_KEY = "all_languages_simple", e.SUGGESTED_KEY = "suggested_languages", e.TOP_KEYS = "top_languages"
			}(r || (r = {}));
			const a = (e, t) => {
					const s = {
						allKey: e,
						suggestedKey: r.SUGGESTED_KEY
					};
					return Object(n.a)(t, {
						...i,
						variables: s
					})
				},
				d = async e => {
					const t = await a(r.ALL_KEY, e());
					if (!t.ok) return null;
					const s = t.body,
						n = null == s ? void 0 : s.data;
					return n ? (e => {
						const t = {},
							s = e.identity.preferences.spokenLanguages || [];
						return e.all.map(e => {
							t[e.isoCode] = e.translatedDisplayName
						}), {
							languages: t,
							preferences: s
						}
					})(n) : null
				}, c = async (e, t, s) => {
					const n = await a(e, t());
					if (!n.ok) return null;
					const i = n.body,
						o = null == i ? void 0 : i.data;
					if (o) {
						return ((e, t, s) => {
							let n = null,
								r = [];
							const i = [],
								o = [],
								a = {},
								d = {};
							if (!e) {
								t.identity.preferences.spokenLanguages.map(e => {
									d[e] = !0
								})
							}
							for (let c = 0; c < t.suggested.length; c++) {
								const r = t.suggested[c];
								if (a[r.isoCode] = !0, s === r.isoCode) n = r;
								else {
									if (!e && d[r.isoCode]) continue; {
										const t = !!(e || !e && d[r.isoCode]);
										i.push({
											selected: t,
											...r
										})
									}
								}
							}
							for (let c = 0; c < t.all.length; c++) {
								const i = t.all[c];
								i.isoCode === s ? (n = i, o.push({
									selected: !0,
									...i
								})) : !e && d[i.isoCode] ? o.push({
									selected: !0,
									...i
								}) : a[i.isoCode] || r.push({
									selected: !(e || !d[i.isoCode]),
									...i
								})
							}
							if (r = i.concat(r), null === n) {
								const e = s.split("-").shift();
								for (let t = 0; t < r.length; t++)
									if (r[t].isoCode === e) {
										n = r[t], r.splice(t, 1);
										break
									}
							}
							return n && ((e || !e && d[n.isoCode]) && (n.selected = !0), r.unshift(n)), e || (r = o.concat(r)), {
								sortedLanguages: r
							}
						})(e === r.TOP_KEYS, o, s)
					}
					return null
				}, l = async (e, t) => {
					const s = await ((e, t) => {
						const s = {
							input: {
								spokenLanguages: t
							}
						};
						return Object(n.a)(e, {
							...o,
							variables: s
						})
					})(e(), Object.keys(t));
					if (!s.ok) return null;
					const r = s.body;
					return null == r ? void 0 : r.data
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
					r = t.some(e => e.wls === n.b.NO_ADS);
				return !s && !r
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, s) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				i = s.n(r);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(i.a.loadingBackground, {
						[i.a["m-loading"]]: t
					})
				},
				a = e => Object(n.a)(i.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/reddit/selectors/telemetry.ts"),
				r = s("./src/telemetry/models/Event.ts");
			const i = e => {
					let {
						subredditId: t,
						postId: s
					} = e;
					return e => ({
						source: r.e.SubredditMuting,
						action: r.c.Mute,
						noun: r.d.Subreddit,
						subreddit: {
							id: t
						},
						...n.q(e),
						...s && {
							post: {
								id: s
							}
						}
					})
				},
				o = e => {
					let {
						subredditId: t,
						postId: s
					} = e;
					return e => ({
						source: r.e.SubredditMuting,
						action: r.c.Unmute,
						noun: r.d.Subreddit,
						subreddit: {
							id: t
						},
						...n.q(e),
						...s && {
							post: {
								id: s
							}
						}
					})
				}
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			}));
			var n, r, i = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const a = (e, t) => s => ({
					source: r.COMMUNITY_WIDGETS,
					action: i.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(o.Ab)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...o.q
				}),
				d = (e, t) => s => ({
					source: r.POST,
					action: i.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: o.M(s, e),
					subreddit: o.nb(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...o.q(s)
				}),
				c = () => e => ({
					source: r.SIDEBAR,
					action: i.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...o.q(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: i.c.CLICK,
					noun: n.TOPIC,
					...o.q(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, s) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(i.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, r.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, s) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/pages/ErrorPages/index.m.less"),
				d = s.n(a);
			const c = e => {
					let {
						shouldReloadHome: t
					} = e;
					return t ? i.a.createElement(o.a, {
						kind: o.b.ExternalLink,
						priority: o.c.Primary,
						className: d.a.primaryRouterLink,
						href: "/"
					}, n.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})) : i.a.createElement(o.a, {
						kind: o.b.InternalLink,
						priority: o.c.Primary,
						className: d.a.primaryRouterLink,
						to: "/"
					}, n.fbt._("Go Home", null, {
						hk: "3E9E1g"
					}))
				},
				l = e => {
					let {
						message: t,
						shouldReloadHome: s
					} = e;
					return i.a.createElement("div", {
						className: d.a.container
					}, i.a.createElement("h3", {
						className: d.a.title
					}, t || n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), i.a.createElement(c, {
						shouldReloadHome: s
					}))
				},
				u = e => {
					let {
						message: t,
						shouldReloadHome: s
					} = e;
					return i.a.createElement("div", {
						className: d.a.container
					}, i.a.createElement("h3", {
						className: d.a.title
					}, t || n.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), i.a.createElement(c, {
						shouldReloadHome: s
					}))
				}
		},
		"./src/reddit/pages/Topic/Relationship/index.m.less": function(e, t, s) {
			e.exports = {
				SeeAllRelatedTopics: "p7nJ7lD5v2YzECQA-Ha8M",
				seeAllRelatedTopics: "p7nJ7lD5v2YzECQA-Ha8M",
				TopicName: "dJ3xe2Nf-vhZ6EYI5mouf",
				topicName: "dJ3xe2Nf-vhZ6EYI5mouf"
			}
		},
		"./src/reddit/pages/Topic/SubredditList/Subreddit/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_3oYTbP0ZV-MANTieSFQJh4",
				container: "_3oYTbP0ZV-MANTieSFQJh4",
				Icon: "_1Fbn9hME_gsiZEWrYw2CjA",
				icon: "_1Fbn9hME_gsiZEWrYw2CjA",
				Text: "_2Q3cQEpLSLir19P36HjMsM",
				text: "_2Q3cQEpLSLir19P36HjMsM",
				Link: "_2WjUac0CWJTaeqSTapZxRS",
				link: "_2WjUac0CWJTaeqSTapZxRS",
				Name: "_2wytGTWEsoZfbD_7szYe7p",
				name: "_2wytGTWEsoZfbD_7szYe7p",
				Meta: "_3IUCsZmtt3d3WGgFHQ3Fgo",
				meta: "_3IUCsZmtt3d3WGgFHQ3Fgo",
				Members: "wipHspsmXyJJfAajdJPON",
				members: "wipHspsmXyJJfAajdJPON",
				About: "_3qHKAeck1ZFLJpNms-2TDT",
				about: "_3qHKAeck1ZFLJpNms-2TDT",
				VisitLink: "_3GKJa-R8-b1vJZuvPGxMOT",
				visitLink: "_3GKJa-R8-b1vJZuvPGxMOT",
				SubscribeButton: "_17tJu-uGh0u1qEBO4P29Sg",
				subscribeButton: "_17tJu-uGh0u1qEBO4P29Sg",
				hidden: "_2s4ITweJE8SSEgLGNY1LCw"
			}
		},
		"./src/reddit/pages/Topic/SubredditList/index.m.less": function(e, t, s) {
			e.exports = {
				SubredditList: "_3SxeZ1SagmjQfaEOJLcpif",
				subredditList: "_3SxeZ1SagmjQfaEOJLcpif",
				Subreddit: "JJ2QSl-i_fI5G_NYIXnSe",
				subreddit: "JJ2QSl-i_fI5G_NYIXnSe"
			}
		},
		"./src/reddit/pages/Topic/TabHeader/RelationshipTab/index.m.less": function(e, t, s) {
			e.exports = {
				RelationshipTab: "_32zXxOy-JDeJPYiXTZ6GWU",
				relationshipTab: "_32zXxOy-JDeJPYiXTZ6GWU",
				"m-active": "_1SmckvvCqb57y8BYkTM8ew",
				mActive: "_1SmckvvCqb57y8BYkTM8ew"
			}
		},
		"./src/reddit/pages/Topic/TabHeader/index.m.less": function(e, t, s) {
			e.exports = {
				TabHeader: "a44uJVg_2f6Tls24pgm7O",
				tabHeader: "a44uJVg_2f6Tls24pgm7O",
				TabTitle: "_2PgDB6yr3w2D2vcE0ifp7Q",
				tabTitle: "_2PgDB6yr3w2D2vcE0ifp7Q"
			}
		},
		"./src/reddit/pages/Topic/TopicHeader/TopicTab/index.m.less": function(e, t, s) {
			e.exports = {
				Tab: "zB167v8VzkVM9pUFETGba",
				tab: "zB167v8VzkVM9pUFETGba",
				ActiveTab: "_1jUOuw0_aUnqYgs8j-VWYa",
				activeTab: "_1jUOuw0_aUnqYgs8j-VWYa"
			}
		},
		"./src/reddit/pages/Topic/TopicHeader/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_ZTq8EBsRouOv-sGGDFEG",
				container: "_ZTq8EBsRouOv-sGGDFEG",
				Content: "_1gOnjMfh6AZJPpWVWm4hdl",
				content: "_1gOnjMfh6AZJPpWVWm4hdl",
				cardWidth: "kt6mctm16gX4BAz4UkP7F",
				fullWidth: "_13SEe8eTugXMSewCNKUSur",
				Header: "_6HVKzUwnWtxEz7ZXIZ52z",
				header: "_6HVKzUwnWtxEz7ZXIZ52z",
				Title: "_3xUDHcNgeNVz7fD8H1kUy7",
				title: "_3xUDHcNgeNVz7fD8H1kUy7",
				Subtitle: "_1SqJaWH39dwYM80G2bPzqV",
				subtitle: "_1SqJaWH39dwYM80G2bPzqV",
				Tabs: "_2yxC6zU-b3bwwpJq7PFU6W",
				tabs: "_2yxC6zU-b3bwwpJq7PFU6W",
				link: "_28pKATphngn0NYq1jxqIW2",
				"parent-related-topics": "_1b2AsSM880_ExPtu4kLbtn",
				parentRelatedTopics: "_1b2AsSM880_ExPtu4kLbtn"
			}
		},
		"./src/reddit/pages/Topic/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_34DPWmU2xtTM5k6LzxRyBK",
				container: "_34DPWmU2xtTM5k6LzxRyBK",
				SidebarRight: "xN-Lax46afWDvxNsgO_qV",
				sidebarRight: "xN-Lax46afWDvxNsgO_qV",
				TopicTab: "_1w8swivzpCaiRZVhoHJCf2",
				topicTab: "_1w8swivzpCaiRZVhoHJCf2",
				active: "ADUh7gkavNOAWKFsG3XAh",
				WidgetsContainer: "_XJz3g54OuK0zp0Pm8QcB",
				widgetsContainer: "_XJz3g54OuK0zp0Pm8QcB"
			}
		},
		"./src/reddit/pages/Topic/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeListingKey/index.ts"),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/pages/topic.ts"),
				u = s("./src/reddit/components/ListingPostList/index.tsx"),
				m = s("./src/reddit/controls/InternalLink/index.tsx"),
				p = s("./src/reddit/icons/svgs/Search/index.tsx"),
				b = s("./src/reddit/components/RelatedTopicList/RelatedTopic/index.m.less"),
				h = s.n(b);
			var g = e => {
					const {
						topic: t
					} = e;
					return r.a.createElement("span", {
						className: h.a.Container
					}, r.a.createElement(m.default, {
						className: h.a.Link,
						title: t.name,
						to: t.url
					}, r.a.createElement("span", {
						className: h.a.IconContainer
					}, r.a.createElement(p.a, null)), r.a.createElement("span", {
						className: h.a.Name
					}, t.namePlural)))
				},
				f = s("./src/reddit/components/SEOTitle/index.tsx"),
				x = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				v = s("./src/reddit/components/RelatedTopicList/index.m.less"),
				y = s.n(v);

			function _(e) {
				const {
					children: t,
					limit: s,
					title: n,
					topics: i
				} = e;
				return i.length ? r.a.createElement(x.a, {
					className: y.a.Container
				}, n && r.a.createElement("div", {
					className: y.a.Title
				}, r.a.createElement(f.b, {
					type: f.a.Widget
				}, n)), r.a.createElement("div", {
					className: y.a.RelatedTopicList
				}, i.slice(0, s).map(e => r.a.createElement(g, {
					key: e.id,
					topic: e
				}))), t) : null
			}
			var S = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				E = s("./src/reddit/components/TopicSidebar/index.tsx"),
				T = s("./src/reddit/components/TopicSidebar/SubredditList/index.tsx"),
				O = s("./src/reddit/constants/listings.ts"),
				C = s("./src/reddit/constants/postLayout.ts"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				j = s("./src/reddit/helpers/trackers/screenview.ts"),
				L = s("./src/reddit/layout/page/Listing/index.tsx"),
				N = s("./src/reddit/pages/ErrorPages/index.tsx"),
				w = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				P = s("./src/reddit/controls/Button/index.tsx"),
				I = s("./src/reddit/pages/Topic/TopicHeader/TopicTab/index.m.less"),
				R = s.n(I);
			class F extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							onTabClick: e,
							tab: t
						} = this.props;
						e(t)
					}
				}
				render() {
					const {
						activeTab: e,
						children: t,
						tab: s,
						tabs: n
					} = this.props;
					return n.includes(s) ? r.a.createElement("div", {
						className: Object(o.a)(R.a.Tab, {
							[R.a.ActiveTab]: s === e
						}),
						onClick: this.onClick
					}, t) : null
				}
			}
			var D = F,
				B = s("./src/reddit/pages/Topic/TopicHeader/index.m.less"),
				M = s.n(B);

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: A
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var W;
			! function(e) {
				e.Communities = "communities", e.Posts = "posts", e.RelatedTopics = "relatedTopics"
			}(W || (W = {}));
			class H extends r.a.Component {
				renderSubtitleContent() {
					const {
						parentRelatedTopics: e
					} = this.props;
					return e.length ? r.a.createElement("ul", {
						className: M.a.parentRelatedTopics
					}, e.map((e, t) => {
						let {
							namePlural: s,
							url: n
						} = e;
						return r.a.createElement("li", {
							key: t
						}, r.a.createElement(m.default, {
							className: M.a.link,
							to: n
						}, s))
					})) : A._("Topic on Reddit", null, {
						hk: "3gTFev"
					})
				}
				render() {
					const {
						activeTab: e,
						className: t,
						layout: s,
						onTabClick: n,
						tabs: i,
						topicName: a
					} = this.props, d = {
						activeTab: e,
						onTabClick: n,
						tabs: i
					};
					return r.a.createElement("div", {
						className: Object(o.a)(M.a.Container, t)
					}, r.a.createElement("div", {
						className: Object(o.a)(M.a.Content, s === C.g.Large ? M.a.cardWidth : M.a.fullWidth)
					}, r.a.createElement("div", {
						className: M.a.Header
					}, r.a.createElement("div", {
						className: M.a.Title
					}, r.a.createElement(f.b, {
						type: f.a.TopicHeader
					}, a)), r.a.createElement("div", {
						className: M.a.Subtitle
					}, this.renderSubtitleContent())), r.a.createElement("div", {
						className: M.a.Tabs
					}, r.a.createElement(D, G({
						tab: W.Posts
					}, d), A._("Posts", null, {
						hk: "3RLrle"
					})), r.a.createElement(D, G({
						tab: W.Communities
					}, d), A._("Communities", null, {
						hk: "KIwd1"
					})), r.a.createElement(D, G({
						tab: W.RelatedTopics
					}, d), A._("Related Topics", null, {
						hk: "4go2cr"
					})))))
				}
			}
			var U = H,
				z = s("./src/reddit/pages/Topic/Relationship/index.m.less"),
				V = s.n(z);
			const {
				fbt: J
			} = s("./node_modules/fbt/lib/FbtPublic.js"), q = 5;
			class Y extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							openTab: e,
							relationshipIndex: t
						} = this.props;
						e(W.RelatedTopics, t)
					}
				}
				render() {
					const {
						namePlural: e,
						relatedTopics: t
					} = this.props.relationship;
					return r.a.createElement(_, {
						limit: q,
						title: e,
						topics: t
					}, this.renderSeeMoreButton())
				}
				renderSeeMoreButton() {
					const {
						namePlural: e,
						relatedTopics: t
					} = this.props.relationship;
					return t.length < q ? null : r.a.createElement(w.a, {
						onClick: this.onClick,
						to: "#"
					}, r.a.createElement(P.r, {
						className: V.a.SeeAllRelatedTopics
					}, J._("See all {=[Topic name plural]}", [J._param("=[Topic name plural]", r.a.createElement("span", {
						className: V.a.TopicName
					}, J._("{Topic name plural}", [J._param("Topic name plural", e)], {
						hk: "27C3n9"
					})))], {
						hk: "uH0jh"
					})))
				}
			}
			var K = Y,
				Q = s("./src/lib/prettyPrintNumber/index.ts"),
				X = s("./src/reddit/components/Flair/index.tsx"),
				Z = s("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = s("./src/reddit/components/SubscribeButton/index.tsx"),
				ee = s("./src/reddit/constants/posts.ts"),
				te = s("./src/reddit/helpers/name/index.ts"),
				se = s("./src/reddit/models/Flair/index.ts"),
				ne = s("./src/reddit/selectors/subreddit.ts"),
				re = s("./src/reddit/selectors/user.ts"),
				ie = s("./src/reddit/pages/Topic/SubredditList/Subreddit/index.m.less"),
				oe = s.n(ie);
			const {
				fbt: ae
			} = s("./node_modules/fbt/lib/FbtPublic.js"), de = Object(i.c)({
				isLoggedIn: re.S,
				subreddit: ne.X,
				subredditAboutInfo: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.about[s]
				}
			}), ce = Object(c.b)(de), le = {
				text: "nsfw",
				type: se.f.Nsfw
			};
			var ue = ce(e => {
					const {
						className: t,
						isLoggedIn: s,
						subreddit: n,
						subredditAboutInfo: i
					} = e, a = Object(te.d)(n.displayText || n.name);
					return r.a.createElement("div", {
						className: Object(o.a)(oe.a.Container, t)
					}, r.a.createElement(Z.b, {
						className: oe.a.Icon,
						subredditOrProfile: n
					}), r.a.createElement("div", {
						className: oe.a.Text
					}, r.a.createElement(m.default, {
						className: oe.a.Link,
						to: n.url
					}, r.a.createElement("div", {
						className: oe.a.Name
					}, a), r.a.createElement("div", {
						className: oe.a.Meta
					}, r.a.createElement("div", {
						className: oe.a.Members
					}, ae._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [ae._plural(n.subscribers, "subscribers count", Object(Q.b)(n.subscribers))], {
						hk: "48BXj1"
					})), n.isNSFW && r.a.createElement(X.c, {
						flair: le
					}))), r.a.createElement("div", {
						className: oe.a.About
					}, i.publicDescription || ae._("Welcome to {subreddit name}", [ae._param("subreddit name", a)], {
						hk: "vZ7VH"
					})), r.a.createElement(m.default, {
						className: oe.a.VisitLink,
						to: n.url
					}, ae._("Visit", null, {
						hk: "2z3clp"
					}))), r.a.createElement($.a, {
						className: Object(o.a)(oe.a.SubscribeButton, {
							[oe.a.hidden]: !s
						}),
						identifier: {
							name: n.name,
							type: ee.a.SUBREDDIT
						},
						small: !0
					}))
				}),
				me = s("./src/reddit/pages/Topic/SubredditList/index.m.less"),
				pe = s.n(me);

			function be(e) {
				const {
					subredditIds: t = []
				} = e;
				return r.a.createElement("div", {
					className: pe.a.SubredditList
				}, t.map(e => r.a.createElement(ue, {
					className: pe.a.Subreddit,
					key: e,
					subredditId: e
				})))
			}
			var he = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				ge = s("./src/reddit/pages/Topic/TabHeader/RelationshipTab/index.m.less"),
				fe = s.n(ge);
			class xe extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							index: e,
							onTabClick: t
						} = this.props;
						t(W.RelatedTopics, e)
					}
				}
				render() {
					const {
						activeIndex: e,
						relationship: t,
						index: s
					} = this.props, n = s === e;
					return r.a.createElement("div", {
						className: Object(o.a)(fe.a.RelationshipTab, {
							[fe.a.mActive]: n
						}),
						onClick: this.onClick
					}, t.namePlural)
				}
			}
			var ve = xe,
				ye = s("./src/reddit/pages/Topic/TabHeader/index.m.less"),
				_e = s.n(ye);
			const {
				fbt: Se
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class Ee extends r.a.Component {
				constructor() {
					super(...arguments), this.renderRelatedTopic = (e, t) => {
						const {
							activeRelationshipIndex: s,
							onTabClick: n
						} = this.props;
						return r.a.createElement(ve, {
							activeIndex: s,
							index: t,
							key: e.slug,
							onTabClick: n,
							relationship: e
						})
					}, this.renderRelatedTopicsHeader = () => r.a.createElement("div", {
						className: _e.a.TabHeader
					}, this.props.topic.childRelationships.map(this.renderRelatedTopic)), this.renderTitle = () => {
						const {
							activeTab: e,
							topicNamePlural: t
						} = this.props;
						return e === W.Posts ? Se._("Posts about {topic name}", [Se._param("topic name", t)], {
							hk: "3AGfU"
						}) : e === W.Communities ? Se._("Communities related to {topic name}", [Se._param("topic name", t)], {
							hk: "jKM0V"
						}) : null
					}
				}
				render() {
					const {
						activeLayout: e,
						activeTab: t
					} = this.props, s = t === W.Posts;
					return t === W.RelatedTopics ? this.renderRelatedTopicsHeader() : r.a.createElement("div", {
						className: _e.a.TabHeader
					}, r.a.createElement("div", {
						className: _e.a.TabTitle
					}, r.a.createElement(f.b, {
						type: f.a.Widget
					}, this.renderTitle())), s && r.a.createElement(he.a, {
						className: _e.a.PostsLayoutSwitch,
						layout: C.e[e]
					}))
				}
			}
			var Te = Ee,
				Oe = s("./src/reddit/selectors/topic.ts"),
				Ce = s("./src/reddit/pages/Topic/index.m.less"),
				ke = s.n(Ce);
			const {
				fbt: je
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Le = Object(k.v)(), Ne = (e, t) => t.match.params.sort || a.bb, we = e => {
				const t = [];
				return e ? (e.hasPosts && t.push(W.Posts), e.hasSubreddits && t.push(W.Communities), e.childRelationships.length && t.push(W.RelatedTopics), t) : t
			}, Pe = Object(c.b)(() => Object(i.a)((e, t) => Object(Oe.d)(e, t.match.params.topicSlug), (e, t) => Object(Oe.e)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Oe.c)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Oe.a)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Oe.b)(e, {
				topicSlug: t.match.params.topicSlug
			}), k.U, Ne, e => {
				var t;
				return null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status
			}, (e, t, s, n, r, i, o, a) => ({
				layout: i,
				parentRelatedTopics: n,
				siblingRelatedTopics: r,
				sort: o,
				status: a || 200,
				tabs: we(s),
				timeSort: void 0,
				topic: s,
				topicName: e,
				topicNamePlural: t
			})), (e, t) => ({
				onLoadMorePosts: () => e(Object(l.morePostsRequested)(t.match.params))
			})), Ie = (e, t) => e === W.Communities ? C.g.Large : t;
			class Re extends r.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.openTab = function(e) {
						let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
						t.setState({
							activeLayout: Ie(e, t.props.layout),
							activeRelationshipIndex: s,
							activeTab: e
						}), window.scrollTo(0, 0)
					}, this.openCommunitiesTab = () => {
						this.openTab(W.Communities)
					}, this.onViewed = (e, t) => {
						var s;
						return Object(j.e)({
							key: Object(d.a)(O.b.Topic, null, {
								topicSlug: null === (s = this.props.topic) || void 0 === s ? void 0 : s.slug
							}),
							sort: this.props.sort,
							timerType: t,
							timerMillis: e,
							timeSort: this.props.timeSort
						})
					}, this.renderNoPosts = () => null, this.renderRelationship = (e, t) => r.a.createElement(K, {
						key: e.slug,
						openTab: this.openTab,
						relationship: e,
						relationshipIndex: t
					}), this.state = {
						activeLayout: C.g.Large,
						activeRelationshipIndex: 0,
						activeTab: void 0
					}
				}
				static getDerivedStateFromProps(e, t) {
					const s = t.activeTab && e.tabs.includes(t.activeTab) && t.activeTab,
						n = e.pageLayer && e.pageLayer.queryParams.activeTab,
						r = n && e.tabs.includes(n) && n,
						i = e.tabs[0],
						o = s || r || i;
					return {
						activeLayout: Ie(o, e.layout),
						activeRelationship: t.activeRelationshipIndex,
						activeTab: o
					}
				}
				componentDidUpdate(e) {
					var t, s, n;
					const r = null === (t = e.topic) || void 0 === t ? void 0 : t.id,
						i = null === (s = this.props.topic) || void 0 === s ? void 0 : s.id;
					r && i !== (null === (n = e.topic) || void 0 === n ? void 0 : n.id) && this.openTab(this.props.tabs[0])
				}
				render() {
					const {
						className: e,
						match: t,
						parentRelatedTopics: s,
						siblingRelatedTopics: n,
						status: i,
						tabs: a,
						topic: c,
						topicName: l,
						topicNamePlural: m
					} = this.props, p = t.params.topicSlug, b = Object(d.a)(O.b.Topic, null, {
						topicSlug: p
					}), {
						activeLayout: h,
						activeRelationshipIndex: g,
						activeTab: f
					} = this.state, x = O.b.Topic;
					if (404 === i) return r.a.createElement(N.b, null);
					if (500 === i) return r.a.createElement(N.b, {
						message: je._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "3SZaDI"
						})
					});
					if (!c) return null;
					const v = c.childRelationships[g],
						y = v && v.relatedTopics || [],
						C = r.a.createElement(r.a.Fragment, null, r.a.createElement(Te, {
							activeLayout: h,
							activeRelationshipIndex: g,
							activeTab: f,
							onTabClick: this.openTab,
							topic: c,
							topicName: l,
							topicNamePlural: m
						}), r.a.createElement("div", {
							className: Object(o.a)(ke.a.TopicTab, {
								[ke.a.active]: f === W.Communities
							})
						}, r.a.createElement(be, {
							subredditIds: c.subredditIds
						})), r.a.createElement("div", {
							className: Object(o.a)(ke.a.TopicTab, {
								[ke.a.active]: f === W.Posts
							})
						}, f === W.Posts && r.a.createElement(u.a, {
							forcedLayout: h,
							listingKey: b,
							listingName: x,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderNoPosts,
							onLoadMore: this.props.onLoadMorePosts
						})), r.a.createElement("div", {
							className: Object(o.a)(ke.a.TopicTab, {
								[ke.a.active]: f === W.RelatedTopics
							})
						}, r.a.createElement(_, {
							topics: y
						}))),
						k = f !== W.RelatedTopics,
						j = f !== W.Communities && a.includes(W.Communities),
						w = r.a.createElement("div", {
							className: ke.a.WidgetsContainer
						}, j && r.a.createElement(T.a, {
							onSeeMoreCommunities: this.openCommunitiesTab,
							subredditIds: c.subredditIds,
							topicUrl: c.url
						}), k && c.childRelationships.map(this.renderRelationship), r.a.createElement(_, {
							limit: 5,
							title: je._("Similar Topics", null, {
								hk: "1Kv3xR"
							}),
							topics: n
						}));
					return r.a.createElement(S.a, null, r.a.createElement(L.a, {
						className: Object(o.a)(ke.a.Container, e),
						content: C,
						fitPageToContent: !0,
						forcedLayout: h,
						sidebars: [null, r.a.createElement(E.a, {
							key: "right",
							className: ke.a.SidebarRight,
							listingName: x
						}, w)],
						navBar: r.a.createElement(U, {
							activeTab: f,
							layout: h,
							onTabClick: this.openTab,
							parentRelatedTopics: s,
							tabs: a,
							topicName: l
						})
					}))
				}
			}
			t.default = Le(Pe(Re))
		},
		"./src/reddit/selectors/experiments/antievil/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => {
				return Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.I
				}) === n.Rd
			}
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/experiments/index.ts"),
				o = s("./src/reddit/selectors/experiments/utils.ts"),
				a = s("./src/reddit/selectors/meta.ts"),
				d = s("./node_modules/reselect/es/index.js");
			const c = Object(d.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(a.h)(e) && Object(i.f)(e),
					experimentName: n.pc
				}), o.a),
				l = Object(d.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(a.h)(e) && Object(i.f)(e),
					experimentName: n.oc
				}), o.a),
				u = Object(d.a)(c, l, (e, t) => e || t),
				m = Object(d.a)(c, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/experiments/hidePostMitigation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.ne
					}) === n.Rd
				},
				o = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.oe
					}) === n.Rd
				}
		},
		"./src/redditGQL/operations/DeleteSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"c518a45f60a5"}')
		},
		"./src/redditGQL/operations/LanguageSelections.json": function(e) {
			e.exports = JSON.parse('{"id":"40df26b7117b"}')
		},
		"./src/redditGQL/operations/MutedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"c09ff0d041c1"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"be09d1d59e65"}')
		},
		"./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"6d0707c83164"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"2620d72fd633"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"432f6b475ece"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Topic.f0941d4961b7ccc63b5a.js.map