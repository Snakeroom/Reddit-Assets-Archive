// https://www.redditstatic.com/desktop2x/Topic.47489377f810ea9b0ed3.js
// Retrieved at 1/11/2023, 10:30:05 AM by Reddit Dataminer v1.0.0
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, n.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
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
							var i = n.element,
								o = a(i),
								d = this._rootContainsTarget(i),
								c = n.entry,
								l = t && d && this._computeTargetAndRootIntersection(i, s),
								u = n.entry = new r({
									time: e.performance && performance.now && performance.now(),
									target: i,
									boundingClientRect: o,
									rootBounds: s,
									intersectionRect: l
								});
							c ? t && d ? this._hasCrossedThreshold(c, u) && this._queuedEntries.push(u) : c && c.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, n.prototype._computeTargetAndRootIntersection = function(s, r) {
						if ("none" != e.getComputedStyle(s).display) {
							for (var n, i, o, d, l, u, m, p, b = a(s), h = c(s), g = !1; !g;) {
								var f = null,
									v = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == v.display) return;
								if (h == this.root || h == t ? (g = !0, f = r) : h != t.body && h != t.documentElement && "visible" != v.overflow && (f = a(h)), f && (n = f, i = b, o = void 0, d = void 0, l = void 0, u = void 0, m = void 0, p = void 0, o = Math.max(n.top, i.top), d = Math.min(n.bottom, i.bottom), l = Math.max(n.left, i.left), u = Math.min(n.right, i.right), p = d - o, !(b = (m = u - l) >= 0 && p >= 0 && {
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
					}, n.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
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
								var i = this.thresholds[n];
								if (i == s || i == r || i < s != i < r) return !0
							}
					}, n.prototype._rootIsInDom = function() {
						return !this.root || d(t, this.root)
					}, n.prototype._rootContainsTarget = function(e) {
						return d(this.root || t, e)
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
					var s, r, n, i = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (s = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, n = null, function() {
						n || (n = setTimeout((function() {
							s(), n = null
						}), r))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function i(e, t, s, r) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, s, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, s)
				}

				function o(e, t, s, r) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, s, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, s)
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
			var r = s("./node_modules/lodash/_baseTimes.js"),
				n = s("./node_modules/lodash/_castFunction.js"),
				i = s("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				a = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > o) return [];
				var s = a,
					c = d(e, a);
				t = n(t), e -= a;
				for (var l = r(c, t); ++s < e;) t(s);
				return l
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, s, r) {
				var n = s ? s.call(r, e, t) : void 0;
				if (void 0 !== n) return !!n;
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
					if (!1 === (n = s ? s.call(r, l, u, c) : void 0) || void 0 === n && l !== u) return !1
				}
				return !0
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			})), s.d(t, "b", (function() {
				return L
			}));
			var r, n = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/performanceTimings/index.tsx"),
				o = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(r || (r = {}));
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
				v = (Object(m.a)((e, t) => {
					const s = v(e, t);
					if (!s) return f;
					const r = Object(h.bb)(e, {
						subredditName: s.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : f
				}), (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(h.X)(e, {
						subredditId: s
					}) : null
				}),
				x = (e, t, s, r, n) => {
					const i = n.find(e => e <= t) || -1,
						o = n.find(e => e > t) || 1 / 0;
					return t !== o && t !== i && (!(i + s > t) && (!(t + s > o) && !((e, t, s) => {
						const r = s[t - 1],
							n = s[t],
							i = n && Object(b.G)(e, {
								postId: r
							}) || null,
							o = n && Object(b.G)(e, {
								postId: n
							}) || null;
						return i && i.isSponsored || o && o.isSponsored
					})(e, t, r)))
				},
				y = [3];
			Object(m.a)((e, t) => {
				let {
					existingDUPositions: s,
					listingProps: r
				} = t;
				const n = s.slice().sort();
				let i = -1;
				const o = Object(b.z)(e, {
						listingKey: r.listingKey
					}),
					a = [];
				return y.forEach(t => {
					let s = i + t;
					if (!(s >= o.length)) {
						for (; s < o.length && !x(e, s, t, o, n);) s += 1;
						s < o.length && (a.push(s), i = s)
					}
				}), a
			});
			var _ = s("./src/reddit/selectors/platform.ts");
			const S = Object(n.a)(o.f),
				E = Object(n.a)(o.d),
				T = Object(n.a)(o.g),
				C = Object(n.a)(o.c),
				O = Object(n.a)(o.e),
				k = (Object(n.a)(o.i), Object(n.a)(o.h), () => async (e, t, s) => {
					let {
						gqlContext: n
					} = s;
					const i = t(),
						o = (e => {
							return e.focusedVerticals.api.pending.focusedVerticalGqlPending
						})(i),
						c = (e => {
							const t = Object(g.R)(e),
								s = p.d.geoSubredditRecommendationDULoggedIn(e),
								r = p.d.geoSubredditRecommendationDULoggedOut(e);
							return t && s || !t && r
						})(i),
						m = Object(g.R)(i);
					if (o || !c) return;
					e(T());
					let b = !1;
					try {
						const t = m ? r.LoggedInGeo : r.LoggedOutGeo,
							s = await ((e, t, s) => Object(a.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(n(), t);
						if (s.ok && s.body) {
							const {
								data: t
							} = s.body;
							if (j(t)) {
								if (N(t)) {
									e(C({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), b = !0
								} else if (w(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: n,
											category: i
										} = s.focusRecommendations[0],
										o = [r, n],
										a = Object(u.d)(o),
										d = Object(l.b)(o),
										c = Object(u.c)(r),
										m = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [n.id],
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
				N = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				},
				w = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						r = t && t.type;
					return !!(s && !N(e) && r === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				},
				L = () => async (e, t, s) => {
					var r, n;
					const o = t(),
						a = (e => e.focusedVerticals.lastLoadedEnv)(o);
					if ((e => {
							return e.focusedVerticals.api.error.focusedVerticalGqlError
						})(o) || null === a || "client" === a) {
						const s = null === (n = null === (r = Object(_.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === n ? void 0 : n.route.chunk,
							a = Object(g.S)(o);
						return Object(i.i)(() => e(k()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(O({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "e", (function() {
				return N
			})), s.d(t, "g", (function() {
				return w
			})), s.d(t, "a", (function() {
				return L
			})), s.d(t, "f", (function() {
				return I
			})), s.d(t, "b", (function() {
				return P
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/makeActionCreator/index.ts"),
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
					text: r.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				v = (e, t) => Object(i.f)({
					kind: p.b.SuccessCommunityGreen,
					text: r.fbt._("Muted r/{subreddit name}", [r.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					...t ? {
						buttonText: r.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				}),
				x = (e, t) => Object(i.f)({
					kind: p.b.SuccessCommunityGreen,
					text: r.fbt._("Unmuted r/{subreddit name}", [r.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					...t ? {
						buttonText: r.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				});
			var y = s("./src/reddit/endpoints/subreddit/about.ts");
			const _ = Object(n.a)(b.i),
				S = Object(n.a)(b.h),
				E = Object(n.a)(b.G),
				T = (Object(n.a)(b.j), Object(n.a)(b.F), Object(n.a)(b.g)),
				C = Object(n.a)(b.f),
				O = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: r
					} = e;
					return async (e, n, i) => {
						let {
							gqlContext: o
						} = i;
						var a, d;
						const c = await u(o(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) r && r(), e(v(s, k({
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
						successCallback: r
					} = e;
					return async (e, n, i) => {
						let {
							gqlContext: o
						} = i;
						var a, d;
						const c = await m(o(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.deleteSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) r && r(), e(x(s, O({
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
						successCallback: r
					} = e;
					return async (e, n, i) => {
						let {
							gqlContext: o
						} = i;
						var a, d;
						const c = await u(o(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) r && r(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(v(s, N({
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
						subredditName: s,
						successCallback: r
					} = e;
					return async (e, n, i) => {
						let {
							gqlContext: o
						} = i;
						var a, d;
						const c = await m(o(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.deleteSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) r && r(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(x(s, j({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(f(`error-muting-${t}`))
						}
					}
				},
				w = e => {
					let {
						subredditId: t,
						notificationLevel: s
					} = e;
					return async (e, n, a) => {
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
							text: r.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				},
				L = () => async (e, t, s) => {
					let {
						gqlContext: n
					} = s;
					const a = await (e => Object(o.a)(e, d))(n());
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
						text: r.fbt._("Failed to get muted subreddits, please try again.", null, {
							hk: "2dCj3Q"
						})
					}))
				}, I = e => {
					let {
						subredditId: t,
						subredditName: s
					} = e;
					return async (e, r, n) => {
						let {
							gqlContext: i
						} = n;
						var o, a;
						const d = await m(i(), t);
						if (d.ok && d.body && (null === (a = null === (o = d.body) || void 0 === o ? void 0 : o.data.deleteSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) e(T(t)), e(x(s));
						else {
							e(f(`error-unmuting-${t}`))
						}
					}
				}, P = e => {
					let {
						subredditName: t
					} = e;
					return async (e, s, n) => {
						let {
							gqlContext: o
						} = n;
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
								text: r.fbt._("Sorry, r/{subreddit name} is already muted.", [r.fbt._param("subreddit name", t)], {
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
								text: r.fbt._("Sorry, r/{subreddit name} isn't a community.", [r.fbt._param("subreddit name", t)], {
									hk: "3UtglL"
								})
							}))(`error-muting-${t}`, t))
						}
						const x = h.id,
							_ = await u(o(), x);
						if (_.ok && _.body && (null === (d = null === (a = _.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) e(C([h])), e(v(h.name));
						else {
							e(f(`error-muting-${x}`))
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
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				o = s("./src/reddit/actions/notificationsInbox/index.ts"),
				a = s("./src/reddit/actions/subreddit/constants.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = s("./src/reddit/models/Subreddit/index.ts"),
				u = s("./src/reddit/models/Toast/index.ts");
			const m = Object(n.a)(a.z),
				p = Object(n.a)(a.y),
				b = Object(n.a)(a.x),
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
							return r.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.c.FREQUENT:
							return r.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.c.LOW:
							return r.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
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
					successCallback: n,
					undoCallback: a
				} = e;
				return async (e, l, f) => {
					let {
						gqlContext: v
					} = f;
					var x, y, _;
					e(p());
					const S = h(s),
						E = await Object(c.b)(v(), t, S);
					if ((null === (y = null === (x = E.error) || void 0 === x ? void 0 : x.fields) || void 0 === y ? void 0 : y.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(E.body) && (null === (_ = E.body.data.updateSubredditNotificationSettings.errors) || void 0 === _ ? void 0 : _.length)) return e(b()), e(Object(d.f)({
						kind: u.b.Error,
						text: r.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
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
					})), n && n(), e(a ? Object(d.f)(Object(d.e)(g(s), u.b.Undo, r.fbt._("Undo", null, {
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/constants/elementIds.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/components/BackToTop/index.m.less"),
				c = s.n(d);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = e => {
				if (e) {
					const e = document.getElementById(o.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: s,
					style: r
				} = e;
				return n.a.createElement("div", {
					className: Object(i.a)(t, c.a.container),
					style: r
				}, n.a.createElement(a.a, {
					className: c.a.button,
					onClick: () => u(s)
				}, l._("Back to Top", null, {
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
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
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
				v = s("./src/reddit/controls/Dropdown/Row.tsx"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				_ = s("./src/reddit/selectors/tooltip.ts"),
				S = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				E = s.n(S);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const C = "view--layout--FUE",
				O = "LayoutSwitch--picker",
				k = Object(d.a)(f.a),
				j = {
					[b.d.Card]: function(e) {
						return i.a.createElement(x.a, T({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return i.a.createElement(x.a, T({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return i.a.createElement(x.a, T({}, e, {
							name: "view_compact"
						}))
					}
				},
				N = {
					[b.d.Card]: () => r.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => r.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => r.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[b.d.Search]: () => r.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				w = Object(h.v)(),
				L = Object(a.c)({
					dropdownIsOpen: Object(_.b)(O),
					postLayout: h.U,
					redditStyle: h.E
				}),
				I = Object(o.b)(L, e => ({
					onListingLayoutChange: (t, s) => e(Object(u.x)(t, s)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: O
					}))
				}));
			class P extends i.a.Component {
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
							screen: Object(y.cb)(t),
							subreddit: Object(y.lb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: r,
							postLayout: n
						} = this.props, o = s || b.e[n], a = e === o, d = j[e], l = N[e];
						return i.a.createElement(v.b, T({}, t, {
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
							onClick: a ? void 0 : r,
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
							tooltipId: O
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: r
					} = this.props, n = t || b.e[r];
					return i.a.createElement("div", {
						className: Object(c.a)(E.a.Container, e),
						id: C
					}, i.a.createElement("div", {
						className: E.a.DropdownContainer,
						onClick: s
					}, this.renderItem(n, {
						id: O,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), i.a.createElement(g.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = w(I(Object(p.c)(Object(l.a)(P))))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/PostList/index.tsx"),
				n = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(n.a)(r.a)
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
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/SidebarContainer/index.m.less"),
				i = s.n(n);
			t.a = r.a.div("container", i.a)
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = s("./src/reddit/constants/experiments.ts"),
				m = s("./src/reddit/constants/location.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/trackers/navigation.ts"),
				h = s("./src/reddit/selectors/experiments/countrySites.ts"),
				g = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				f = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				v = s("./src/reddit/selectors/meta.ts"),
				x = s("./src/redditGQL/types.ts"),
				y = s("./src/reddit/components/SidebarFooter/index.m.less"),
				_ = s.n(y);
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js"), E = d.a.a("Link", _.a), T = Object(o.c)({
				countryCode: v.b,
				d2xPdpSideRailRecsVariant: g.a,
				isCountrySitesEnabled: h.b,
				isD2xPdpSideRailRecsEnabled: g.b,
				isNavbarLikeMwebEnabled: f.a
			}), C = Object(i.b)(T), O = Object(p.v)({
				isFrontpage: p.B,
				isCountrySitePage: p.z
			}), k = e => {
				let {
					countryCode: t,
					reredditContent: s
				} = e;
				return n.a.createElement("div", {
					className: _.a.GreyRereddit
				}, s, !!m.c[t] && n.a.createElement("div", {
					className: _.a.LinkContainer
				}, n.a.createElement("div", {
					className: _.a.Column
				}, n.a.createElement(E, {
					href: "https://www.redditinc.com/policies/impressum"
				}, S._("Impressum", null, {
					hk: "4cKXSI"
				})), t === x.k.De && n.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: _.a.NoneCapitalizeLink
				}, S._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), n.a.createElement("div", {
					className: _.a.Column
				}, n.a.createElement(E, {
					href: "https://www.reddithelp.com"
				}, S._("help", null, {
					hk: "4lyYaD"
				})), t === x.k.De && n.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, S._("Transparency report", null, {
					hk: "3CgBdG"
				})))), n.a.createElement("div", {
					className: _.a.LinkContainer
				}, n.a.createElement("div", {
					className: _.a.Column
				}, n.a.createElement(E, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, S._("User Agreement", null, {
					hk: "2RA6JL"
				})), n.a.createElement(E, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, S._("Privacy policy", null, {
					hk: "10K04G"
				}))), n.a.createElement("div", {
					className: _.a.Column
				}, n.a.createElement(E, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, S._("Content policy", null, {
					hk: "1DyxZS"
				})), n.a.createElement(E, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, S._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), n.a.createElement("div", {
					className: _.a.Copyright
				}, S._("Reddit Inc © {year}. All rights reserved", [S._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = O(C(Object(c.c)(e => {
				const t = Object(i.f)().getState(),
					s = Object(h.a)(t, Object(a.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.Zc.GreyRereddit || e.d2xPdpSideRailRecsVariant === u.Zc.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === u.Zc.LargeImagePreview ? e.reredditButtons : [];
					return n.a.createElement(k, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				if (!e.isFrontpage && !e.isCountrySitePage) return null;
				const r = t => {
					const r = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return s.includes(t) || "en" === t ? n.a.createElement(E, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(b.a)(t))
					}, r[t]) : null
				};
				return n.a.createElement(l.a, {
					className: _.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!m.c[e.countryCode] && n.a.createElement("div", {
					className: _.a.LinkContainer
				}, n.a.createElement("div", {
					className: _.a.Column
				}, n.a.createElement(E, {
					href: "https://www.redditinc.com/policies/impressum"
				}, S._("Impressum", null, {
					hk: "4cKXSI"
				})), e.countryCode === x.k.De && n.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: _.a.NoneCapitalizeLink
				}, S._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), n.a.createElement("div", {
					className: _.a.Column
				}, n.a.createElement(E, {
					href: "https://www.reddithelp.com"
				}, S._("help", null, {
					hk: "4lyYaD"
				})), e.countryCode === x.k.De && n.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, S._("Transparency report", null, {
					hk: "3CgBdG"
				})))), n.a.createElement("div", {
					className: _.a.LinkContainer
				}, n.a.createElement("div", {
					className: _.a.Column
				}, n.a.createElement(E, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, S._("User Agreement", null, {
					hk: "2RA6JL"
				})), n.a.createElement(E, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, S._("Privacy policy", null, {
					hk: "10K04G"
				}))), n.a.createElement("div", {
					className: _.a.Column
				}, n.a.createElement(E, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, S._("Content policy", null, {
					hk: "1DyxZS"
				})), n.a.createElement(E, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, S._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && n.a.createElement("div", {
					className: _.a.LinkContainer
				}, n.a.createElement("div", {
					className: _.a.Column
				}, r("en"), r("fr"), r("it")), n.a.createElement("div", {
					className: _.a.Column
				}, r("de"), r("es"), r("pt"))), n.a.createElement("div", {
					className: _.a.Copyright
				}, S._("Reddit Inc © {year}. All rights reserved", [S._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
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
			var r = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/lodash/throttle.js"),
				i = s.n(n),
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
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const f = d.g[1] + 24,
				v = u.f + 8,
				x = v + 152 + 16,
				y = x + f + 8,
				_ = h.a.div("Container", b.a),
				S = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: s,
						...r
					} = e;
					return a.a.createElement(c.a, g({
						className: t,
						isOverlay: s,
						style: {
							top: `calc(100vh - ${s?v:8}px)`
						}
					}, r))
				}, "BackToTop", b.a),
				E = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: n,
						isSticky: i,
						shouldStickToBottom: o
					} = e;
					return a.a.createElement("div", {
						className: Object(r.a)(s, {
							[b.a.BottomStickyStyles]: o,
							[b.a.StickyStyles]: !o && i && !n,
							[b.a.StickyStylesFakeOverlay]: !o && !!n
						})
					}, t)
				};
			class T extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > y,
						shouldFooterSticky: this.windowHeight > x
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
					}, d.N), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							children: r,
							className: n,
							hideFooter: i,
							pageLayer: o,
							recommendationsComponent: d,
							reredditButtons: c
						}
					} = this, u = this.state.isAdSticky && !(!t && !r), m = this.state.isBottomSticky;
					return a.a.createElement(_, {
						className: n,
						innerRef: this.setWrapperRef
					}, a.a.createElement(E, {
						isFakeOverlay: s,
						isSticky: u,
						shouldStickToBottom: m
					}, t, r, d, !i && a.a.createElement(l.a, {
						reredditButtons: c
					})), !d && !this.props.hideBackToTop && a.a.createElement(S, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const C = Object(m.v)();
			t.a = C(T)
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
			var r = s("./node_modules/lodash/values.js"),
				n = s.n(r),
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
				v = s("./src/reddit/selectors/userPrefs.ts"),
				x = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				y = s.n(x);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = u.a.div("BladeContainer", y.a), E = u.a.wrapped(h.a, "CloseIcon", y.a), T = u.a.div("LoadingTitleContainer", y.a), C = u.a.div("LoadingNavContainer", y.a), O = u.a.div("ShortLoadingNav", y.a), k = u.a.wrapped(b.a, "ThemedChevron", y.a), j = e => {
				let {
					...t
				} = e;
				return o.a.createElement(S, null, o.a.createElement(E, null), o.a.createElement(p.k, null, o.a.createElement(p.p, null, _._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), o.a.createElement(p.o, null, o.a.createElement(T, null, o.a.createElement("div", {
					className: Object(l.a)(y.a.LoadingTitle, t.isLoading && y.a.loading)
				})), o.a.createElement(C, null, o.a.createElement("div", {
					className: Object(l.a)(y.a.LoadingNav, t.isLoading && y.a.loading)
				}), o.a.createElement(k, null)), o.a.createElement(C, null, o.a.createElement(O, null), o.a.createElement(k, null)), o.a.createElement(C, null, o.a.createElement("div", {
					className: Object(l.a)(y.a.LoadingNav, t.isLoading && y.a.loading)
				}), o.a.createElement(k, null)), o.a.createElement(C, null, o.a.createElement(O, null), o.a.createElement(k, null)), o.a.createElement(C, null, o.a.createElement("div", {
					className: Object(l.a)(y.a.LoadingNav, t.isLoading && y.a.loading)
				}), o.a.createElement(k, null)))))
			}, N = Object(c.a)({
				getComponent: () => Object(m.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("StructuredStyles")]).then(s.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => o.a.createElement(j, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => o.a.createElement(j, {
					gradientType: "posts",
					isLoading: !0
				})
			}), w = Object(d.c)({
				isEditing: f.i,
				isSubscriptionsPinned: v.c,
				moderatorPermissions: g.n
			});
			t.a = Object(a.b)(w)(e => {
				const t = e.moderatorPermissions && n()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? o.a.createElement("div", {
					className: Object(l.a)(y.a.Container, e.isSubscriptionsPinned && y.a.isSubscriptionPinned)
				}, e.children, o.a.createElement(N, {
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
				return v
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "j", (function() {
				return _
			}));
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				i = s.n(n);
			const o = r.a.section("FormPage", i.a),
				a = r.a.h1("HomePageTitle", i.a),
				d = r.a.button("HomePageBreadcrumb", i.a),
				c = r.a.div("HomePageGroup", i.a),
				l = r.a.h1("FormPageTitle", i.a),
				u = r.a.div("FormPageSection", i.a),
				m = r.a.div("FormGroup", i.a),
				p = r.a.h2("FormGroupTitle", i.a),
				b = r.a.div("FormElement", i.a),
				h = r.a.div("FormGroupDescription", i.a),
				g = r.a.div("FormItem", i.a),
				f = r.a.h3("FormElementTitle", i.a),
				v = r.a.div("FormElementDescription", i.a),
				x = r.a.div("FormElementError", i.a),
				y = r.a.div("FormElementSubGroup", i.a),
				_ = r.a.li("FormListItem", i.a)
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
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
				v = s("./src/reddit/components/SubscribeButton/index.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				y = s("./src/reddit/controls/InternalLink/index.tsx"),
				_ = s("./src/reddit/helpers/name/index.ts"),
				S = s("./src/reddit/helpers/widgets/index.tsx"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				T = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less"),
				O = s.n(C);
			const k = Object(h.c)({
				isLoggedIn: T.S,
				subreddit: E.X,
				subredditAboutInfo: E.y
			});
			class j extends n.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditClick = () => {
						const {
							discoveryUnit: e,
							sendEvent: t,
							subreddit: s,
							subredditAboutInfo: r
						} = this.props;
						if (!s) return;
						const n = Object(S.c)(s, r);
						t(Object(u.h)(e, n))
					}
				}
				render() {
					const {
						className: e,
						isLoggedIn: t,
						subreddit: s
					} = this.props;
					return s ? n.a.createElement("div", {
						className: Object(o.a)(O.a.Container, e)
					}, n.a.createElement(f.b, {
						className: O.a.Icon,
						subredditOrProfile: s
					}), n.a.createElement("div", {
						className: O.a.Text
					}, n.a.createElement(y.default, {
						className: O.a.Link,
						onMouseDown: this.trackSubredditClick,
						to: s.url
					}, n.a.createElement("div", {
						className: O.a.Name
					}, Object(_.d)(s.displayText || s.name)), n.a.createElement("div", {
						className: O.a.Members
					}, p.fbt._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [p.fbt._plural(s.subscribers, "subscribers count", Object(g.b)(s.subscribers))], {
						hk: "48BXj1"
					})))), n.a.createElement(v.a, {
						border: !1,
						className: Object(o.a)(O.a.SubscribeButton, {
							[O.a.hidden]: !t
						}),
						identifier: {
							name: s.name,
							type: x.a.SUBREDDIT
						},
						small: !0
					})) : null
				}
			}
			var N = Object(b.b)(k)(Object(c.c)(j)),
				w = s("./src/reddit/helpers/styles/mixins/loading.ts");
			var L = e => {
					const {
						className: t
					} = e, s = Object(w.b)({
						isLoading: !0
					});
					return n.a.createElement("div", {
						className: Object(o.a)(O.a.Container, t)
					}, n.a.createElement("div", {
						className: Object(o.a)(O.a.Icon, O.a.placeholder, s)
					}), n.a.createElement("div", {
						className: O.a.Text
					}, n.a.createElement("div", {
						className: O.a.Link
					}, n.a.createElement("div", {
						className: Object(o.a)(O.a.Name, O.a.placeholder, s)
					}), n.a.createElement("div", {
						className: Object(o.a)(O.a.Members, O.a.placeholder, s)
					}))), n.a.createElement("div", {
						className: O.a.SubscribeButton
					}))
				},
				I = s("./src/reddit/components/TopicSidebar/SubredditList/index.m.less"),
				P = s.n(I);
			const {
				fbt: R
			} = s("./node_modules/fbt/lib/FbtPublic.js"), F = 8, M = Array.from({
				length: F
			}).map((e, t) => n.a.createElement(L, {
				className: P.a.Subreddit,
				key: t
			})), D = {
				enabled: !0,
				id: "xd_103",
				layout: m.c.Large,
				surface: m.d.Topic,
				unitName: m.h,
				unitType: m.e.SubredditListing,
				url: ""
			};
			class B extends n.a.Component {
				constructor() {
					super(...arguments), this.onSeeMoreCommunities = () => {
						this.props.onSeeMoreCommunities && (this.props.sendEvent(Object(u.q)(D)), this.props.onSeeMoreCommunities())
					}
				}
				render() {
					const {
						className: e,
						subredditIds: t,
						topicUrl: s
					} = this.props, r = t.slice(0, F);
					return n.a.createElement(a.a, {
						className: Object(o.a)(P.a.Container, e)
					}, n.a.createElement("div", {
						className: P.a.Title
					}, n.a.createElement(d.b, {
						type: d.a.Widget
					}, R._("Top Communities", null, {
						hk: "46yzcK"
					}))), n.a.createElement("div", {
						className: P.a.SubredditList
					}, r.length > 0 ? r.map(e => n.a.createElement(N, {
						className: P.a.Subreddit,
						discoveryUnit: D,
						key: e,
						subredditId: e
					})) : M), t.length > F && n.a.createElement(i.a, {
						to: s
					}, n.a.createElement(l.r, {
						className: P.a.SeeMore,
						onClick: this.onSeeMoreCommunities
					}, R._("See more", null, {
						hk: "2qkY6H"
					}))))
				}
			}
			t.a = Object(c.c)(B)
		},
		"./src/reddit/components/TopicSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				StickyBottom: "_2yV768nzIKxq_QdOCYdJ3-",
				stickyBottom: "_2yV768nzIKxq_QdOCYdJ3-"
			}
		},
		"./src/reddit/components/TopicSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/reddit/components/SidebarContainer/index.tsx"),
				o = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				a = s("./src/reddit/components/TopicSidebar/index.m.less"),
				d = s.n(a);
			t.a = e => {
				const {
					children: t,
					className: s
				} = e;
				return n.a.createElement(i.a, {
					className: s
				}, t, n.a.createElement(o.a, {
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
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
				v = s("./src/reddit/models/Theme/index.ts"),
				x = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const y = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(x.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				_ = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(x.a)(e).widgetColors.sidebarWidgetHeaderColor,
				S = e => {
					const t = y(e);
					return Object(v.f)(t)
				},
				E = e => {
					const t = _(e);
					return Object(v.f)(t)
				};
			var T = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				C = s.n(T);
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = Object(u.v)(), j = Object(i.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.o)(e, t) || void 0,
						r = t.redditStyle || Object(g.l)(e, {
							subredditId: s
						}),
						n = Object(f.fb)(e);
					return r || n
				},
				nigtmode: f.fb,
				subredditId: u.o,
				topPostVariant: h.d
			}));
			class N extends n.a.Component {
				constructor() {
					super(...arguments), this.contentRef = n.a.createRef(), this.state = {
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
						forceRedditStyle: r,
						headerButton: i,
						id: o,
						onClick: d,
						onHeaderClick: l,
						title: u,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = s ? C.a.widgetContentOnly : C.a.widgetContent, g = !r && this.props.styles, f = g ? this.getWidgetBackgroundStyles() : {}, v = g ? this.getWidgetHeaderStyles() : {};
					return n.a.createElement("div", {
						className: Object(a.a)(t, C.a.widgetBackground, {
							[C.a.redditStyle]: r,
							[C.a.clickable]: !!d,
							[C.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": r,
						onClick: d,
						style: f
					}, u && n.a.createElement("div", {
						className: Object(a.a)(C.a.widgetHeader, {
							[C.a.clickable]: !!l
						}),
						id: o,
						style: {
							...v,
							...this.props.headerStyles
						},
						onClick: l
					}, n.a.createElement("div", {
						className: Object(a.a)(C.a.widgetTitle, p)
					}, n.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), i), n.a.createElement("div", {
						className: Object(a.a)(h, {
							[C.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && n.a.createElement(m.r, {
						className: C.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, O._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = k(j(Object(d.a)(Object(l.c)(N))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return T
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "b", (function() {
				return j
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
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
				v = s("./src/reddit/selectors/experiments/survey.ts"),
				x = s("./src/reddit/selectors/listings.ts"),
				y = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/selectors/tracking.ts"),
				E = s("./src/reddit/selectors/user.ts");

			function T() {
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
			const C = T(),
				O = {
					apiError: x.c,
					apiPending: x.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.U)(e, t),
					loadMore: x.g,
					postsById: y.T,
					postIds: Object(i.a)((e, t) => {
						let {
							listingKey: s,
							listingName: r,
							inSubredditOrProfile: n
						} = t;
						return Object(y.D)(e, s, r, n)
					}),
					subredditsById: _.eb,
					viewportDataLoaded: S.a,
					pageReferrer: p.X,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: v.e,
					isLoggedIn: E.S
				},
				k = Object(n.c)(O),
				j = e => ({
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
					trackOnPostEnteredViewport: (t, s, r, n) => {
						e(c.M(t, r, n))
					},
					trackOnPostExitedViewport: (t, s, r, n) => {
						e(c.N(t, r, n))
					},
					showModalOnScroll: () => e(c.ab()),
					surveyTriggerScrollCounted: () => e(Object(u.m)())
				}),
				N = e => Object(b.b)({
					...e
				}),
				w = (e, t, s, r) => {
					const {
						listingKey: n,
						hostPostData: i,
						listingBelowVariant: o
					} = r;
					return Object(h.k)(e, t, "post", n, i, o, void 0)
				},
				L = Object(r.b)(k, j, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: N,
					postClickEventFactory: w
				}));
			t.a = e => Object(m.c)(C(L(e)))
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = n.a.createContext({})
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./src/reddit/models/WhitelistStatus/index.ts");
			const n = (e, t) => {
				const s = e.some(e => e.isNSFW),
					n = t.some(e => e.wls === r.b.NO_ADS);
				return !s && !n
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
			var r = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				i = s.n(n);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(r.a)(i.a.loadingBackground, {
						[i.a["m-loading"]]: t
					})
				},
				a = e => Object(r.a)(i.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			}));
			var r = s("./src/reddit/selectors/telemetry.ts"),
				n = s("./src/telemetry/models/Event.ts");
			const i = e => {
					let {
						subredditId: t,
						postId: s
					} = e;
					return e => ({
						source: n.f.SubredditMuting,
						action: n.d.Mute,
						noun: n.e.Subreddit,
						subreddit: {
							id: t
						},
						...r.o(e),
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
						source: n.f.SubredditMuting,
						action: n.d.Unmute,
						noun: n.e.Subreddit,
						subreddit: {
							id: t
						},
						...r.o(e),
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
			var r, n, i = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {}));
			const a = (e, t) => s => ({
					source: n.COMMUNITY_WIDGETS,
					action: i.c.CLICK,
					noun: r.SEE_MORE,
					widget: Object(o.yb)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...o.o
				}),
				d = (e, t) => s => ({
					source: n.POST,
					action: i.c.CLICK,
					noun: r.REREDDIT_PROMO,
					post: o.K(s, e),
					subreddit: o.lb(s),
					...t && {
						banner: {
							buttonText: t,
							id: r.REREDDIT_PROMO
						}
					},
					...o.o(s)
				}),
				c = () => e => ({
					source: n.SIDEBAR,
					action: i.c.VIEW,
					noun: r.TOPICS_WIDGET,
					...o.o(e)
				}),
				l = e => t => ({
					source: n.TOPICS_WIDGET,
					action: i.c.CLICK,
					noun: r.TOPIC,
					...o.o(t),
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(i.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, n.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("polygon", {
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
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
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
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})) : i.a.createElement(o.a, {
						kind: o.b.InternalLink,
						priority: o.c.Primary,
						className: d.a.primaryRouterLink,
						to: "/"
					}, r.fbt._("Go Home", null, {
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
					}, t || r.fbt._("Sorry, there doesn't seem to be anything here.", null, {
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
					}, t || r.fbt._("Sorry, You do not have permission to view this page.", null, {
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
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
					return n.a.createElement("span", {
						className: h.a.Container
					}, n.a.createElement(m.default, {
						className: h.a.Link,
						title: t.name,
						to: t.url
					}, n.a.createElement("span", {
						className: h.a.IconContainer
					}, n.a.createElement(p.a, null)), n.a.createElement("span", {
						className: h.a.Name
					}, t.namePlural)))
				},
				f = s("./src/reddit/components/SEOTitle/index.tsx"),
				v = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = s("./src/reddit/components/RelatedTopicList/index.m.less"),
				y = s.n(x);

			function _(e) {
				const {
					children: t,
					limit: s,
					title: r,
					topics: i
				} = e;
				return i.length ? n.a.createElement(v.a, {
					className: y.a.Container
				}, r && n.a.createElement("div", {
					className: y.a.Title
				}, n.a.createElement(f.b, {
					type: f.a.Widget
				}, r)), n.a.createElement("div", {
					className: y.a.RelatedTopicList
				}, i.slice(0, s).map(e => n.a.createElement(g, {
					key: e.id,
					topic: e
				}))), t) : null
			}
			var S = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				E = s("./src/reddit/components/TopicSidebar/index.tsx"),
				T = s("./src/reddit/components/TopicSidebar/SubredditList/index.tsx"),
				C = s("./src/reddit/constants/listings.ts"),
				O = s("./src/reddit/constants/postLayout.ts"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				j = s("./src/reddit/helpers/trackers/screenview.ts"),
				N = s("./src/reddit/layout/page/Listing/index.tsx"),
				w = s("./src/reddit/pages/ErrorPages/index.tsx"),
				L = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				I = s("./src/reddit/controls/Button/index.tsx"),
				P = s("./src/reddit/pages/Topic/TopicHeader/TopicTab/index.m.less"),
				R = s.n(P);
			class F extends n.a.Component {
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
						tabs: r
					} = this.props;
					return r.includes(s) ? n.a.createElement("div", {
						className: Object(o.a)(R.a.Tab, {
							[R.a.ActiveTab]: s === e
						}),
						onClick: this.onClick
					}, t) : null
				}
			}
			var M = F,
				D = s("./src/reddit/pages/Topic/TopicHeader/index.m.less"),
				B = s.n(D);

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var G;
			! function(e) {
				e.Communities = "communities", e.Posts = "posts", e.RelatedTopics = "relatedTopics"
			}(G || (G = {}));
			class A extends n.a.Component {
				renderSubtitleContent() {
					const {
						parentRelatedTopics: e
					} = this.props;
					return e.length ? n.a.createElement("ul", {
						className: B.a.parentRelatedTopics
					}, e.map((e, t) => {
						let {
							namePlural: s,
							url: r
						} = e;
						return n.a.createElement("li", {
							key: t
						}, n.a.createElement(m.default, {
							className: B.a.link,
							to: r
						}, s))
					})) : H._("Topic on Reddit", null, {
						hk: "3gTFev"
					})
				}
				render() {
					const {
						activeTab: e,
						className: t,
						layout: s,
						onTabClick: r,
						tabs: i,
						topicName: a
					} = this.props, d = {
						activeTab: e,
						onTabClick: r,
						tabs: i
					};
					return n.a.createElement("div", {
						className: Object(o.a)(B.a.Container, t)
					}, n.a.createElement("div", {
						className: Object(o.a)(B.a.Content, s === O.g.Large ? B.a.cardWidth : B.a.fullWidth)
					}, n.a.createElement("div", {
						className: B.a.Header
					}, n.a.createElement("div", {
						className: B.a.Title
					}, n.a.createElement(f.b, {
						type: f.a.TopicHeader
					}, a)), n.a.createElement("div", {
						className: B.a.Subtitle
					}, this.renderSubtitleContent())), n.a.createElement("div", {
						className: B.a.Tabs
					}, n.a.createElement(M, W({
						tab: G.Posts
					}, d), H._("Posts", null, {
						hk: "3RLrle"
					})), n.a.createElement(M, W({
						tab: G.Communities
					}, d), H._("Communities", null, {
						hk: "KIwd1"
					})), n.a.createElement(M, W({
						tab: G.RelatedTopics
					}, d), H._("Related Topics", null, {
						hk: "4go2cr"
					})))))
				}
			}
			var z = A,
				V = s("./src/reddit/pages/Topic/Relationship/index.m.less"),
				U = s.n(V);
			const {
				fbt: J
			} = s("./node_modules/fbt/lib/FbtPublic.js"), q = 5;
			class Q extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							openTab: e,
							relationshipIndex: t
						} = this.props;
						e(G.RelatedTopics, t)
					}
				}
				render() {
					const {
						namePlural: e,
						relatedTopics: t
					} = this.props.relationship;
					return n.a.createElement(_, {
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
					return t.length < q ? null : n.a.createElement(L.a, {
						onClick: this.onClick,
						to: "#"
					}, n.a.createElement(I.r, {
						className: U.a.SeeAllRelatedTopics
					}, J._("See all {=[Topic name plural]}", [J._param("=[Topic name plural]", n.a.createElement("span", {
						className: U.a.TopicName
					}, J._("{Topic name plural}", [J._param("Topic name plural", e)], {
						hk: "27C3n9"
					})))], {
						hk: "uH0jh"
					})))
				}
			}
			var K = Q,
				Y = s("./src/lib/prettyPrintNumber/index.ts"),
				Z = s("./src/reddit/components/Flair/index.tsx"),
				X = s("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = s("./src/reddit/components/SubscribeButton/index.tsx"),
				ee = s("./src/reddit/constants/posts.ts"),
				te = s("./src/reddit/helpers/name/index.ts"),
				se = s("./src/reddit/models/Flair/index.ts"),
				re = s("./src/reddit/selectors/subreddit.ts"),
				ne = s("./src/reddit/selectors/user.ts"),
				ie = s("./src/reddit/pages/Topic/SubredditList/Subreddit/index.m.less"),
				oe = s.n(ie);
			const {
				fbt: ae
			} = s("./node_modules/fbt/lib/FbtPublic.js"), de = Object(i.c)({
				isLoggedIn: ne.S,
				subreddit: re.X,
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
						subreddit: r,
						subredditAboutInfo: i
					} = e, a = Object(te.d)(r.displayText || r.name);
					return n.a.createElement("div", {
						className: Object(o.a)(oe.a.Container, t)
					}, n.a.createElement(X.b, {
						className: oe.a.Icon,
						subredditOrProfile: r
					}), n.a.createElement("div", {
						className: oe.a.Text
					}, n.a.createElement(m.default, {
						className: oe.a.Link,
						to: r.url
					}, n.a.createElement("div", {
						className: oe.a.Name
					}, a), n.a.createElement("div", {
						className: oe.a.Meta
					}, n.a.createElement("div", {
						className: oe.a.Members
					}, ae._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [ae._plural(r.subscribers, "subscribers count", Object(Y.b)(r.subscribers))], {
						hk: "48BXj1"
					})), r.isNSFW && n.a.createElement(Z.c, {
						flair: le
					}))), n.a.createElement("div", {
						className: oe.a.About
					}, i.publicDescription || ae._("Welcome to {subreddit name}", [ae._param("subreddit name", a)], {
						hk: "vZ7VH"
					})), n.a.createElement(m.default, {
						className: oe.a.VisitLink,
						to: r.url
					}, ae._("Visit", null, {
						hk: "2z3clp"
					}))), n.a.createElement($.a, {
						className: Object(o.a)(oe.a.SubscribeButton, {
							[oe.a.hidden]: !s
						}),
						identifier: {
							name: r.name,
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
				return n.a.createElement("div", {
					className: pe.a.SubredditList
				}, t.map(e => n.a.createElement(ue, {
					className: pe.a.Subreddit,
					key: e,
					subredditId: e
				})))
			}
			var he = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				ge = s("./src/reddit/pages/Topic/TabHeader/RelationshipTab/index.m.less"),
				fe = s.n(ge);
			class ve extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							index: e,
							onTabClick: t
						} = this.props;
						t(G.RelatedTopics, e)
					}
				}
				render() {
					const {
						activeIndex: e,
						relationship: t,
						index: s
					} = this.props, r = s === e;
					return n.a.createElement("div", {
						className: Object(o.a)(fe.a.RelationshipTab, {
							[fe.a.mActive]: r
						}),
						onClick: this.onClick
					}, t.namePlural)
				}
			}
			var xe = ve,
				ye = s("./src/reddit/pages/Topic/TabHeader/index.m.less"),
				_e = s.n(ye);
			const {
				fbt: Se
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class Ee extends n.a.Component {
				constructor() {
					super(...arguments), this.renderRelatedTopic = (e, t) => {
						const {
							activeRelationshipIndex: s,
							onTabClick: r
						} = this.props;
						return n.a.createElement(xe, {
							activeIndex: s,
							index: t,
							key: e.slug,
							onTabClick: r,
							relationship: e
						})
					}, this.renderRelatedTopicsHeader = () => n.a.createElement("div", {
						className: _e.a.TabHeader
					}, this.props.topic.childRelationships.map(this.renderRelatedTopic)), this.renderTitle = () => {
						const {
							activeTab: e,
							topicNamePlural: t
						} = this.props;
						return e === G.Posts ? Se._("Posts about {topic name}", [Se._param("topic name", t)], {
							hk: "3AGfU"
						}) : e === G.Communities ? Se._("Communities related to {topic name}", [Se._param("topic name", t)], {
							hk: "jKM0V"
						}) : null
					}
				}
				render() {
					const {
						activeLayout: e,
						activeTab: t
					} = this.props, s = t === G.Posts;
					return t === G.RelatedTopics ? this.renderRelatedTopicsHeader() : n.a.createElement("div", {
						className: _e.a.TabHeader
					}, n.a.createElement("div", {
						className: _e.a.TabTitle
					}, n.a.createElement(f.b, {
						type: f.a.Widget
					}, this.renderTitle())), s && n.a.createElement(he.a, {
						className: _e.a.PostsLayoutSwitch,
						layout: O.e[e]
					}))
				}
			}
			var Te = Ee,
				Ce = s("./src/reddit/selectors/topic.ts"),
				Oe = s("./src/reddit/pages/Topic/index.m.less"),
				ke = s.n(Oe);
			const {
				fbt: je
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ne = Object(k.v)(), we = (e, t) => t.match.params.sort || a.cb, Le = e => {
				const t = [];
				return e ? (e.hasPosts && t.push(G.Posts), e.hasSubreddits && t.push(G.Communities), e.childRelationships.length && t.push(G.RelatedTopics), t) : t
			}, Ie = Object(c.b)(() => Object(i.a)((e, t) => Object(Ce.d)(e, t.match.params.topicSlug), (e, t) => Object(Ce.e)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Ce.c)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Ce.a)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Ce.b)(e, {
				topicSlug: t.match.params.topicSlug
			}), k.U, we, e => {
				var t;
				return null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status
			}, (e, t, s, r, n, i, o, a) => ({
				layout: i,
				parentRelatedTopics: r,
				siblingRelatedTopics: n,
				sort: o,
				status: a || 200,
				tabs: Le(s),
				timeSort: void 0,
				topic: s,
				topicName: e,
				topicNamePlural: t
			})), (e, t) => ({
				onLoadMorePosts: () => e(Object(l.morePostsRequested)(t.match.params))
			})), Pe = (e, t) => e === G.Communities ? O.g.Large : t;
			class Re extends n.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.openTab = function(e) {
						let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
						t.setState({
							activeLayout: Pe(e, t.props.layout),
							activeRelationshipIndex: s,
							activeTab: e
						}), window.scrollTo(0, 0)
					}, this.openCommunitiesTab = () => {
						this.openTab(G.Communities)
					}, this.onViewed = (e, t) => {
						var s;
						return Object(j.e)({
							key: Object(d.a)(C.b.Topic, null, {
								topicSlug: null === (s = this.props.topic) || void 0 === s ? void 0 : s.slug
							}),
							sort: this.props.sort,
							timerType: t,
							timerMillis: e,
							timeSort: this.props.timeSort
						})
					}, this.renderNoPosts = () => null, this.renderRelationship = (e, t) => n.a.createElement(K, {
						key: e.slug,
						openTab: this.openTab,
						relationship: e,
						relationshipIndex: t
					}), this.state = {
						activeLayout: O.g.Large,
						activeRelationshipIndex: 0,
						activeTab: void 0
					}
				}
				static getDerivedStateFromProps(e, t) {
					const s = t.activeTab && e.tabs.includes(t.activeTab) && t.activeTab,
						r = e.pageLayer && e.pageLayer.queryParams.activeTab,
						n = r && e.tabs.includes(r) && r,
						i = e.tabs[0],
						o = s || n || i;
					return {
						activeLayout: Pe(o, e.layout),
						activeRelationship: t.activeRelationshipIndex,
						activeTab: o
					}
				}
				componentDidUpdate(e) {
					var t, s, r;
					const n = null === (t = e.topic) || void 0 === t ? void 0 : t.id,
						i = null === (s = this.props.topic) || void 0 === s ? void 0 : s.id;
					n && i !== (null === (r = e.topic) || void 0 === r ? void 0 : r.id) && this.openTab(this.props.tabs[0])
				}
				render() {
					const {
						className: e,
						match: t,
						parentRelatedTopics: s,
						siblingRelatedTopics: r,
						status: i,
						tabs: a,
						topic: c,
						topicName: l,
						topicNamePlural: m
					} = this.props, p = t.params.topicSlug, b = Object(d.a)(C.b.Topic, null, {
						topicSlug: p
					}), {
						activeLayout: h,
						activeRelationshipIndex: g,
						activeTab: f
					} = this.state, v = C.b.Topic;
					if (404 === i) return n.a.createElement(w.b, null);
					if (500 === i) return n.a.createElement(w.b, {
						message: je._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "3SZaDI"
						})
					});
					if (!c) return null;
					const x = c.childRelationships[g],
						y = x && x.relatedTopics || [],
						O = n.a.createElement(n.a.Fragment, null, n.a.createElement(Te, {
							activeLayout: h,
							activeRelationshipIndex: g,
							activeTab: f,
							onTabClick: this.openTab,
							topic: c,
							topicName: l,
							topicNamePlural: m
						}), n.a.createElement("div", {
							className: Object(o.a)(ke.a.TopicTab, {
								[ke.a.active]: f === G.Communities
							})
						}, n.a.createElement(be, {
							subredditIds: c.subredditIds
						})), n.a.createElement("div", {
							className: Object(o.a)(ke.a.TopicTab, {
								[ke.a.active]: f === G.Posts
							})
						}, f === G.Posts && n.a.createElement(u.a, {
							forcedLayout: h,
							listingKey: b,
							listingName: v,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderNoPosts,
							onLoadMore: this.props.onLoadMorePosts
						})), n.a.createElement("div", {
							className: Object(o.a)(ke.a.TopicTab, {
								[ke.a.active]: f === G.RelatedTopics
							})
						}, n.a.createElement(_, {
							topics: y
						}))),
						k = f !== G.RelatedTopics,
						j = f !== G.Communities && a.includes(G.Communities),
						L = n.a.createElement("div", {
							className: ke.a.WidgetsContainer
						}, j && n.a.createElement(T.a, {
							onSeeMoreCommunities: this.openCommunitiesTab,
							subredditIds: c.subredditIds,
							topicUrl: c.url
						}), k && c.childRelationships.map(this.renderRelationship), n.a.createElement(_, {
							limit: 5,
							title: je._("Similar Topics", null, {
								hk: "1Kv3xR"
							}),
							topics: r
						}));
					return n.a.createElement(S.a, null, n.a.createElement(N.a, {
						className: Object(o.a)(ke.a.Container, e),
						content: O,
						fitPageToContent: !0,
						forcedLayout: h,
						sidebars: [null, n.a.createElement(E.a, {
							key: "right",
							className: ke.a.SidebarRight,
							listingName: v
						}, L)],
						navBar: n.a.createElement(z, {
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
			t.default = Ne(Ie(Re))
		},
		"./src/reddit/selectors/experiments/antievil/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => {
				return Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: r.D
				}) === r.Id
			}
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/experiments/index.ts"),
				o = s("./src/reddit/selectors/experiments/utils.ts"),
				a = s("./src/reddit/selectors/meta.ts"),
				d = s("./node_modules/reselect/es/index.js");
			const c = Object(d.a)(e => Object(n.c)(e, {
					experimentEligibilitySelector: e => Object(a.h)(e) && Object(i.f)(e),
					experimentName: r.jc
				}), o.a),
				l = Object(d.a)(e => Object(n.c)(e, {
					experimentEligibilitySelector: e => !Object(a.h)(e) && Object(i.f)(e),
					experimentName: r.ic
				}), o.a),
				u = Object(d.a)(c, l, (e, t) => e || t),
				m = Object(d.a)(c, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			const r = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
			}
		},
		"./src/redditGQL/operations/DeleteSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"c518a45f60a5"}')
		},
		"./src/redditGQL/operations/MutedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"c09ff0d041c1"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"c1fc98c26cf2"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"2620d72fd633"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"432f6b475ece"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Topic.47489377f810ea9b0ed3.js.map