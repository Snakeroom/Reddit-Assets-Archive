// https://www.redditstatic.com/desktop2x/PostSetPage.be907917e102573ab68e.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostSetPage"], {
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
							n = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(r) {
							var i = r.element,
								o = d(i),
								a = this._rootContainsTarget(i),
								c = r.entry,
								l = t && a && this._computeTargetAndRootIntersection(i, n),
								u = r.entry = new s({
									time: e.performance && performance.now && performance.now(),
									target: i,
									boundingClientRect: o,
									rootBounds: n,
									intersectionRect: l
								});
							c ? t && a ? this._hasCrossedThreshold(c, u) && this._queuedEntries.push(u) : c && c.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, r.prototype._computeTargetAndRootIntersection = function(n, s) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var r, i, o, a, l, u, m, p, b = d(n), h = c(n), g = !1; !g;) {
								var f = null,
									x = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == x.display) return;
								if (h == this.root || h == t ? (g = !0, f = s) : h != t.body && h != t.documentElement && "visible" != x.overflow && (f = d(h)), f && (r = f, i = b, o = void 0, a = void 0, l = void 0, u = void 0, m = void 0, p = void 0, o = Math.max(r.top, i.top), a = Math.min(r.bottom, i.bottom), l = Math.max(r.left, i.left), u = Math.min(r.right, i.right), p = a - o, !(b = (m = u - l) >= 0 && p >= 0 && {
										top: o,
										bottom: a,
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
						if (this.root) e = d(this.root);
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
								var i = this.thresholds[r];
								if (i == n || i == s || i < n != i < s) return !0
							}
					}, r.prototype._rootIsInDom = function() {
						return !this.root || a(t, this.root)
					}, r.prototype._rootContainsTarget = function(e) {
						return a(this.root || t, e)
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
					var n, s, r, i = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), s = this.THROTTLE_TIMEOUT, r = null, function() {
						r || (r = setTimeout((function() {
							n(), r = null
						}), s))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function i(e, t, n, s) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, n, s || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
				}

				function o(e, t, n, s) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, n, s || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
				}

				function d(e) {
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

				function a(e, t) {
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
		"./node_modules/lodash/take.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseSlice.js"),
				r = n("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, n) {
				return e && e.length ? (t = n || void 0 === t ? 1 : r(t), s(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseTimes.js"),
				r = n("./node_modules/lodash/_castFunction.js"),
				i = n("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				d = 4294967295,
				a = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > o) return [];
				var n = d,
					c = a(e, d);
				t = r(t), e -= d;
				for (var l = s(c, t); ++n < e;) t(n);
				return l
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, n, s) {
				var r = n ? n.call(s, e, t) : void 0;
				if (void 0 !== r) return !!r;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var i = Object.keys(e),
					o = Object.keys(t);
				if (i.length !== o.length) return !1;
				for (var d = Object.prototype.hasOwnProperty.bind(t), a = 0; a < i.length; a++) {
					var c = i[a];
					if (!d(c)) return !1;
					var l = e[c],
						u = t[c];
					if (!1 === (r = n ? n.call(s, l, u, c) : void 0) || void 0 === r && l !== u) return !1
				}
				return !0
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			})), n.d(t, "b", (function() {
				return I
			}));
			var s, r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/performanceTimings/index.tsx"),
				o = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(s || (s = {}));
			var c, l = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var m = n("./src/lib/objectSelector/index.ts"),
				p = n("./src/reddit/featureFlags/index.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				g = n("./src/reddit/selectors/user.ts");
			const f = [],
				x = (Object(m.a)((e, t) => {
					const n = x(e, t);
					if (!n) return f;
					const s = Object(h.bb)(e, {
						subredditName: n.name
					});
					return s && s.postIds && s.postIds.length ? s.postIds : f
				}), (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(h.X)(e, {
						subredditId: n
					}) : null
				}),
				y = (e, t, n, s, r) => {
					const i = r.find(e => e <= t) || -1,
						o = r.find(e => e > t) || 1 / 0;
					return t !== o && t !== i && (!(i + n > t) && (!(t + n > o) && !((e, t, n) => {
						const s = n[t - 1],
							r = n[t],
							i = r && Object(b.F)(e, {
								postId: s
							}) || null,
							o = r && Object(b.F)(e, {
								postId: r
							}) || null;
						return i && i.isSponsored || o && o.isSponsored
					})(e, t, s)))
				},
				v = [3];
			Object(m.a)((e, t) => {
				let {
					existingDUPositions: n,
					listingProps: s
				} = t;
				const r = n.slice().sort();
				let i = -1;
				const o = Object(b.y)(e, {
						listingKey: s.listingKey
					}),
					d = [];
				return v.forEach(t => {
					let n = i + t;
					if (!(n >= o.length)) {
						for (; n < o.length && !y(e, n, t, o, r);) n += 1;
						n < o.length && (d.push(n), i = n)
					}
				}), d
			});
			var _ = n("./src/reddit/selectors/platform.ts");
			const E = Object(r.a)(o.f),
				S = Object(r.a)(o.d),
				O = Object(r.a)(o.g),
				C = Object(r.a)(o.c),
				j = Object(r.a)(o.e),
				k = (Object(r.a)(o.i), Object(r.a)(o.h), () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const i = t(),
						o = (e => {
							return e.focusedVerticals.api.pending.focusedVerticalGqlPending
						})(i),
						c = (e => {
							const t = Object(g.R)(e),
								n = p.d.geoSubredditRecommendationDULoggedIn(e),
								s = p.d.geoSubredditRecommendationDULoggedOut(e);
							return t && n || !t && s
						})(i),
						m = Object(g.R)(i);
					if (o || !c) return;
					e(O());
					let b = !1;
					try {
						const t = m ? s.LoggedInGeo : s.LoggedOutGeo,
							n = await ((e, t, n) => Object(d.a)(e, {
								...a,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(r(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (N(t)) {
								if (w(t)) {
									e(C({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), b = !0
								} else if (L(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: s,
											interactedSubreddit: r,
											category: i
										} = n.focusRecommendations[0],
										o = [s, r],
										d = Object(u.d)(o),
										a = Object(l.b)(o),
										c = Object(u.c)(s),
										m = {
											recommendedSubredditIds: [s.id],
											interactedSubredditIds: [r.id],
											subreddits: d,
											subredditsAboutInfo: a,
											subredditTopContent: c,
											category: i,
											lastLoadedEnv: "client"
										};
									e(E(m)), b = !0
								}
							} else b = !1
						}
					} catch (h) {
						b = !1
					}
					b || e(S({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}),
				N = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				},
				w = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				},
				L = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						s = t && t.type;
					return !!(n && !w(e) && s === c.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				},
				I = () => async (e, t, n) => {
					var s, r;
					const o = t(),
						d = (e => e.focusedVerticals.lastLoadedEnv)(o);
					if ((e => {
							return e.focusedVerticals.api.error.focusedVerticalGqlError
						})(o) || null === d || "client" === d) {
						const n = null === (r = null === (s = Object(_.b)(t())) || void 0 === s ? void 0 : s.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							d = Object(g.S)(o);
						return Object(i.i)(() => e(k()), {
							name: "getFocusedVerticalsRequested",
							page: n,
							isLoggedIn: d
						})
					}
					if ("server" === d) return e(j({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return j
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "g", (function() {
				return L
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "f", (function() {
				return P
			})), n.d(t, "b", (function() {
				return T
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				a = n("./src/redditGQL/operations/MutedSubreddits.json"),
				c = n("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json"),
				l = n("./src/redditGQL/operations/UpdateSubredditMuteSettings.json");
			const u = (e, t) => Object(o.a)(e, {
					...l,
					variables: {
						input: {
							subredditId: t
						}
					}
				}),
				m = (e, t) => Object(o.a)(e, {
					...d,
					variables: {
						input: {
							subredditId: t
						}
					}
				});
			var p = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/actions/subreddit/constants.ts"),
				h = n("./src/reddit/actions/subreddit/notifications.ts"),
				g = n("./src/reddit/selectors/subreddit.ts");
			const f = e => Object(i.f)({
					id: e,
					kind: p.b.Error,
					duration: i.a,
					text: s.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				x = (e, t) => Object(i.f)({
					kind: p.b.SuccessCommunityGreen,
					text: s.fbt._("Muted r/{subreddit name}", [s.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					...t ? {
						buttonText: s.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				}),
				y = (e, t) => Object(i.f)({
					kind: p.b.SuccessCommunityGreen,
					text: s.fbt._("Unmuted r/{subreddit name}", [s.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					...t ? {
						buttonText: s.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				});
			var v = n("./src/reddit/endpoints/subreddit/about.ts");
			const _ = Object(r.a)(b.i),
				E = Object(r.a)(b.h),
				S = Object(r.a)(b.G),
				O = (Object(r.a)(b.j), Object(r.a)(b.F), Object(r.a)(b.g)),
				C = Object(r.a)(b.f),
				j = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: s
					} = e;
					return async (e, r, i) => {
						let {
							gqlContext: o
						} = i;
						var d, a;
						const c = await u(o(), t);
						if (c.ok && c.body && (null === (a = null === (d = c.body) || void 0 === d ? void 0 : d.data.updateSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) s && s(), e(x(n, k({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(f(`error-muting-${t}`))
						}
					}
				},
				k = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: s
					} = e;
					return async (e, r, i) => {
						let {
							gqlContext: o
						} = i;
						var d, a;
						const c = await m(o(), t);
						if (c.ok && c.body && (null === (a = null === (d = c.body) || void 0 === d ? void 0 : d.data.deleteSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) s && s(), e(y(n, j({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(f(`error-muting-${t}`))
						}
					}
				},
				N = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: s
					} = e;
					return async (e, r, i) => {
						let {
							gqlContext: o
						} = i;
						var d, a;
						const c = await u(o(), t);
						if (c.ok && c.body && (null === (a = null === (d = c.body) || void 0 === d ? void 0 : d.data.updateSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) s && s(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(x(n, w({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(f(`error-muting-${t}`))
						}
					}
				},
				w = e => {
					let {
						subredditId: t,
						subredditName: n,
						successCallback: s
					} = e;
					return async (e, r, i) => {
						let {
							gqlContext: o
						} = i;
						var d, a;
						const c = await m(o(), t);
						if (c.ok && c.body && (null === (a = null === (d = c.body) || void 0 === d ? void 0 : d.data.deleteSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) s && s(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(y(n, N({
							subredditId: t,
							subredditName: n
						})));
						else {
							e(f(`error-muting-${t}`))
						}
					}
				},
				L = e => {
					let {
						subredditId: t,
						notificationLevel: n
					} = e;
					return async (e, r, d) => {
						let {
							gqlContext: a
						} = d;
						var l, u;
						const m = Object(h.a)(n),
							b = await ((e, t, n) => Object(o.a)(e, {
								...c,
								variables: {
									input: {
										...n,
										subredditId: t
									}
								}
							}))(a(), t, m);
						b.ok && b.body && (null === (u = null === (l = b.body) || void 0 === l ? void 0 : l.data.updateSubredditMuteAndNotificationLevelSettings) || void 0 === u ? void 0 : u.ok) ? (e(S({
							subredditId: t,
							notificationLevel: n
						})), e(Object(i.f)({
							kind: p.b.SuccessCommunityGreen,
							text: Object(h.b)(n)
						}))) : e(Object(i.f)({
							kind: p.b.Error,
							text: s.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				},
				I = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const d = await (e => Object(o.a)(e, a))(r());
					if (d.ok && d.body && d.body.data) {
						const {
							data: t
						} = d.body, n = (t && t.identity.mutedSubreddits).edges.map(e => e.node);
						e(_({
							nodes: n
						}))
					} else e(E()), e(Object(i.f)({
						duration: i.a,
						kind: p.b.Error,
						text: s.fbt._("Failed to get muted subreddits, please try again.", null, {
							hk: "2dCj3Q"
						})
					}))
				}, P = e => {
					let {
						subredditId: t,
						subredditName: n
					} = e;
					return async (e, s, r) => {
						let {
							gqlContext: i
						} = r;
						var o, d;
						const a = await m(i(), t);
						if (a.ok && a.body && (null === (d = null === (o = a.body) || void 0 === o ? void 0 : o.data.deleteSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) e(O(t)), e(y(n));
						else {
							e(f(`error-unmuting-${t}`))
						}
					}
				}, T = e => {
					let {
						subredditName: t
					} = e;
					return async (e, n, r) => {
						let {
							gqlContext: o
						} = r;
						var d, a;
						const c = n(),
							l = Object(g.t)(c).find(e => e.name.toLowerCase() === t.toLowerCase());
						if (l) {
							const t = l.name,
								n = `error-muting-duplicate-${t}`;
							return e(Object(i.f)({
								id: n,
								kind: p.b.Error,
								duration: i.a,
								text: s.fbt._("Sorry, r/{subreddit name} is already muted.", [s.fbt._param("subreddit name", t)], {
									hk: "4n64wl"
								})
							}))
						}
						const m = await Object(v.a)(o(), t, !0),
							{
								data: b
							} = m.body,
							h = b && b.subreddit;
						if (!m.ok || null === h) {
							return e(((e, t) => Object(i.f)({
								id: e,
								kind: p.b.Error,
								duration: i.a,
								text: s.fbt._("Sorry, r/{subreddit name} isn't a community.", [s.fbt._param("subreddit name", t)], {
									hk: "3UtglL"
								})
							}))(`error-muting-${t}`, t))
						}
						const y = h.id,
							_ = await u(o(), y);
						if (_.ok && _.body && (null === (a = null === (d = _.body) || void 0 === d ? void 0 : d.data.updateSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) e(C([h])), e(x(h.name));
						else {
							e(f(`error-muting-${y}`))
						}
					}
				}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "d", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				o = n("./src/reddit/actions/notificationsInbox/index.ts"),
				d = n("./src/reddit/actions/subreddit/constants.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = n("./src/reddit/models/Subreddit/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const m = Object(r.a)(d.z),
				p = Object(r.a)(d.y),
				b = Object(r.a)(d.x),
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
							return s.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.c.FREQUENT:
							return s.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.c.LOW:
							return s.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const f = e => {
				let {
					subredditId: t,
					notificationLevel: n,
					successCallback: r,
					undoCallback: d
				} = e;
				return async (e, l, f) => {
					let {
						gqlContext: x
					} = f;
					var y, v, _;
					e(p());
					const E = h(n),
						S = await Object(c.b)(x(), t, E);
					if ((null === (v = null === (y = S.error) || void 0 === y ? void 0 : y.fields) || void 0 === v ? void 0 : v.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(S.body) && (null === (_ = S.body.data.updateSubredditNotificationSettings.errors) || void 0 === _ ? void 0 : _.length)) return e(b()), e(Object(a.f)({
						kind: u.b.Error,
						text: s.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					S.ok && (e(Object(i.c)({
						subredditId: t,
						notificationLevel: n
					})), e(m({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: n
							}
						}
					})), r && r(), e(d ? Object(a.f)(Object(a.e)(g(n), u.b.Undo, s.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(o.i)(t, d))) : Object(a.f)(Object(a.e)(g(n), u.b.SuccessCommunityGreen))))
				}
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/constants/elementIds.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/selectors/experiments/shredditParity.ts"),
				l = n("./src/reddit/components/BackToTop/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = e => {
				if (e) {
					const e = document.getElementById(d.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: n,
					style: s
				} = e;
				const d = Object(i.e)(c.a);
				return r.a.createElement("div", {
					className: Object(o.a)(t, u.a.container),
					style: s
				}, r.a.createElement(a.a, m({
					className: u.a.button,
					onClick: () => b(n)
				}, d && {
					priority: a.c.Secondary,
					rplStyle: !0
				}), p._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/EmptyProfile/EmptyListing.m.less": function(e, t, n) {
			e.exports = {
				PrimaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				primaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				BackgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				backgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				Wrapper: "_1aYPXfy_h5ZUIu0k_69eX1",
				wrapper: "_1aYPXfy_h5ZUIu0k_69eX1"
			}
		},
		"./src/reddit/components/EmptyProfile/forbidden.m.less": function(e, t, n) {
			e.exports = {
				container: "_1RecBWgyCRDIwbumVv_1eu",
				hideIcon: "_2ahl77ziD4jsIXBLc18_Hc",
				title: "_1MRoVpNql4popp175MVxl6",
				subtitle: "_3HccUrmIe42WfjCGgNekWK",
				buttons: "_1BrhZvjQw9AWs6w5xlkj2F"
			}
		},
		"./src/reddit/components/EmptyProfile/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "a", (function() {
				return v
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/PostList/Placeholder.tsx"),
				c = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				u = n.n(l);
			var m = e => {
				let {
					children: t,
					className: n
				} = e;
				return i.a.createElement("div", {
					className: Object(d.a)(u.a.Wrapper, n)
				}, i.a.createElement(a.a, {
					className: u.a.BackgroundPlaceholder,
					isLoading: !1,
					layout: c.g.Classic
				}), i.a.createElement("div", {
					className: u.a.PrimaryText
				}, t))
			};
			var p = e => {
				let {
					className: t,
					profileName: n,
					timeSort: r = o.nc.ALL
				} = e;
				return i.a.createElement(m, {
					className: t
				}, r === o.nc.ALL ? s.fbt._("hmm... {profileName} hasn't commented on anything", [s.fbt._param("profileName", `u/${n}`)], {
					hk: "1MHn3t"
				}) : s.fbt._("hmm... {profileName} hasn't commented recently", [s.fbt._param("profileName", `u/${n}`)], {
					hk: "qN3uL"
				}))
			};
			var b = e => {
				let {
					className: t,
					profileName: n,
					timeSort: r = o.nc.ALL
				} = e;
				return i.a.createElement(m, {
					className: t
				}, r === o.nc.ALL ? s.fbt._("hmm... {profileName} hasn't posted anything", [s.fbt._param("profileName", `u/${n}`)], {
					hk: "28vBEd"
				}) : s.fbt._("hmm... {profileName} hasn't posted recently", [s.fbt._param("profileName", `u/${n}`)], {
					hk: "38GhqN"
				}))
			};
			var h = e => {
					let {
						className: t,
						text: n
					} = e;
					return i.a.createElement(m, {
						className: t
					}, n)
				},
				g = n("./src/reddit/icons/svgs/Hide/index.tsx"),
				f = n("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				x = n.n(f);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var v = () => i.a.createElement("div", {
				className: x.a.container
			}, i.a.createElement(g.a, {
				className: x.a.hideIcon
			}), i.a.createElement("h3", {
				className: x.a.title
			}, y._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), i.a.createElement("p", {
				className: x.a.subtitle
			}, y._("You can only look at your own saved posts and comments", null, {
				hk: "3pWGtF"
			})))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/PostList/index.tsx"),
				r = n("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(r.a)(s.a)
		},
		"./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less": function(e, t, n) {
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
		"./src/reddit/components/Onboarding/LanguageCollection/prompt.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/eligibleUxExperiences/eligibleUxExperiences.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less"),
				l = n.n(c),
				u = n("./src/reddit/constants/componentTestIds.ts"),
				m = n("./src/reddit/contexts/ApiContext.tsx"),
				p = n("./src/reddit/endpoints/onboarding/languageSelections.ts"),
				b = n("./src/reddit/constants/tracking.ts"),
				h = n("./src/reddit/selectors/telemetry.ts");
			const g = "bottom_sheet";
			var f;
			! function(e) {
				e.ADD = "add", e.LATER = "maybe_later", e.SKIP = "skip"
			}(f || (f = {}));
			var x = n("./src/reddit/hooks/useTracking.ts"),
				y = n("./src/reddit/icons/svgs/Close/index.tsx"),
				v = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/selectors/eligibleUXExperiences.ts"),
				E = n("./src/reddit/selectors/experiments/uxtsIntegration.ts"),
				S = n("./src/reddit/selectors/meta.ts"),
				O = n("./src/redditGQL/types.ts");
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), j = e => {
				const {
					gqlContext: t
				} = e, n = Object(i.d)(), c = Object(x.a)(), m = Object(i.e)(S.b), [_, E] = Object(s.useState)(!1), [j, k] = Object(s.useState)({}), [N, w] = Object(s.useState)({}), [L, I] = Object(s.useState)([]);
				let P = ["es"];
				const T = Object(s.useCallback)(async () => {
					const e = await Object(p.b)(t);
					e && (w(e.languages), I(e.preferences), E(!0))
				}, [t]);
				Object(s.useEffect)(() => {
					T()
				}, [T]);
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
						}))(m)), E(!1), n(Object(d.c)({
							experience: O.db.LanguagePreferenceBottomSheet,
							value: !1
						}))
					},
					B = () => {
						const e = Object.keys(j).join();
						c(((e, t) => n => ({
							...Object(h.q)(n),
							source: g,
							action: b.c.CLICK,
							noun: f.ADD,
							actionInfo: {
								...Object(h.d)(n),
								reason: t,
								type: e
							}
						}))(m, e)), (async () => {
							var e;
							const s = j;
							L.map(e => s[e] = !0);
							const r = await Object(p.d)(t, s);
							(null === (e = null == r ? void 0 : r.updateSpokenLanguagesPreference) || void 0 === e ? void 0 : e.ok) ? n(Object(a.f)({
								kind: v.b.SuccessCommunity,
								text: C._("Changes saved", null, {
									hk: "2isjrZ"
								})
							})): n(Object(a.f)({
								kind: v.b.Error,
								text: C._("Changes failed to save. Try adding content languages in user settings", null, {
									hk: "2YYdoj"
								})
							}))
						})(), E(!1), n(Object(d.c)({
							experience: O.db.LanguagePreferenceBottomSheet,
							value: !1
						}))
					};
				return P = P.filter(e => !L.includes(e)), _ && 0 !== P.length ? (c((e => t => ({
					...Object(h.q)(t),
					source: g,
					action: b.c.VIEW,
					noun: b.b.SCREEN,
					actionInfo: {
						...Object(h.d)(t),
						type: e
					}
				}))(m)), n(Object(d.d)(O.db.LanguagePreferenceBottomSheet)), r.a.createElement("div", {
					className: l.a.PromptContainer
				}, r.a.createElement("div", {
					className: l.a.PromptClose
				}, r.a.createElement(y.a, {
					className: l.a.Close,
					onClick: () => R("skip"),
					"data-testid": u.e
				})), r.a.createElement("div", {
					className: l.a.PromptTitle
				}, C._("See content in more languages", null, {
					hk: "4uyzS1"
				})), r.a.createElement("div", {
					className: l.a.PromptSubtitle
				}, C._("Update your settings to make it easier to discover content in multiple languages", null, {
					hk: "3VhB1c"
				})), 1 === P.length ? r.a.createElement("div", {
					className: l.a.PromptRow,
					onClick: () => (e => {
						const t = j;
						t[e] = !0, k(t), B()
					})(P[0]),
					"data-testid": P[0]
				}, C._("Add {language}", [C._param("language", N[P[0]])], {
					hk: "2emiHZ"
				})) : null, r.a.createElement("div", {
					className: Object(o.a)(l.a.PromptRow, {
						[l.a.Dismiss]: !0
					}),
					onClick: () => R("later")
				}, C._("Maybe later", null, {
					hk: "2LjBDw"
				})))) : null
			};
			t.a = Object(m.b)(e => {
				var t;
				const {
					gqlContext: n
				} = e, s = Object(i.f)().getState();
				return (null === (t = Object(i.e)(e => Object(_.a)(e, {
					experience: O.db.LanguagePreferenceBottomSheet
				}))) || void 0 === t ? void 0 : t.value) && Object(E.b)(s) ? r.a.createElement(j, {
					gqlContext: n
				}) : null
			})
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/reddit/components/SidebarContainer/index.tsx"),
				d = n("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				a = n("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				c = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				l = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				u = n("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				m = n("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				p = n("./src/reddit/constants/posts.ts");
			const b = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-ProfileIdCard").then(n.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				h = e => i.a.createElement(o.a, {
					className: e.className
				}, i.a.createElement(b, {
					profileName: e.profileName,
					isOverlay: e.isOverlay
				}), i.a.createElement(m.a, {
					subredditOrProfile: {
						name: e.profileName,
						type: p.a.PROFILE
					}
				}), i.a.createElement(d.a, {
					profileName: e.profileName
				}), i.a.createElement(a.a, {
					profileName: e.profileName
				}), i.a.createElement(c.a, null, i.a.createElement(u.a, {
					profileName: e.profileName
				})), i.a.createElement(l.a, {
					hideBackToTop: e.hideBackToTop
				}));
			h.defaultProps = {
				isOverlay: !1
			}, t.a = h
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SidebarContainer/index.m.less"),
				i = n.n(r);
			t.a = s.a.div("container", i.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/take.js"),
				i = n.n(r),
				o = n("./node_modules/react/index.js"),
				d = n.n(o),
				a = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = n("./src/reddit/layout/row/Inline/index.tsx"),
				p = n("./src/reddit/layout/row/RightAlign/index.tsx");
			const b = e => {
				const {
					className: t,
					hasMoreItems: n,
					headerButton: r,
					items: a,
					minimizedLength: b,
					onLoadMore: h,
					pending: g,
					renderItem: f,
					title: x
				} = e, [y, v] = Object(o.useState)(!1), _ = a.length > b || n, E = (!_ || y ? a : i()(a, b)).map(e => f({
					item: e
				})), S = () => {
					y || v(!0), y && !n && v(!1), n && h && h()
				};
				return d.a.createElement(c.a, {
					className: t,
					headerButton: r,
					title: x
				}, E, d.a.createElement(m.a, null, d.a.createElement(p.a, null, _ && (() => {
					const e = !y || n && h ? s.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : s.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return d.a.createElement(l.r, {
						onClick: S
					}, g ? d.a.createElement(u.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			b.defaultProps = {
				minimizedLength: a.Xb
			}, t.a = b
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Onboarding/LanguageCollection/prompt.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = n("./src/reddit/constants/experiments.ts"),
				p = n("./src/reddit/constants/location.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/helpers/trackers/navigation.ts"),
				g = n("./src/reddit/selectors/experiments/countrySites.ts"),
				f = n("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				x = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				y = n("./src/reddit/selectors/meta.ts"),
				v = n("./src/redditGQL/types.ts"),
				_ = n("./src/reddit/components/SidebarFooter/index.m.less"),
				E = n.n(_);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = a.a.a("Link", E.a), C = Object(o.c)({
				countryCode: y.b,
				d2xPdpSideRailRecsVariant: f.a,
				isCountrySitesEnabled: g.b,
				isD2xPdpSideRailRecsEnabled: f.b,
				isNavbarLikeMwebEnabled: x.a
			}), j = Object(i.b)(C), k = Object(b.v)({
				isFrontpage: b.B,
				isCountrySitePage: b.z
			}), N = e => {
				let {
					countryCode: t,
					reredditContent: n
				} = e;
				return r.a.createElement("div", {
					className: E.a.GreyRereddit
				}, n, !!p.c[t] && r.a.createElement("div", {
					className: E.a.LinkContainer
				}, r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(O, {
					href: "https://www.redditinc.com/policies/impressum"
				}, S._("Impressum", null, {
					hk: "4cKXSI"
				})), t === v.i.De && r.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: E.a.NoneCapitalizeLink
				}, S._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(O, {
					href: "https://www.reddithelp.com"
				}, S._("help", null, {
					hk: "4lyYaD"
				})), t === v.i.De && r.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, S._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: E.a.LinkContainer
				}, r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(O, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, S._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(O, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, S._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(O, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, S._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(O, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, S._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), r.a.createElement("div", {
					className: E.a.Copyright
				}, S._("Reddit, Inc. © {year}. All rights reserved.", [S._param("year", (new Date).getFullYear().toString())], {
					hk: "DPZBh"
				})))
			};
			t.a = k(j(Object(l.c)(e => {
				const t = Object(i.f)().getState(),
					n = Object(g.a)(t, Object(d.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === m.kd.GreyRereddit || e.d2xPdpSideRailRecsVariant === m.kd.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === m.kd.LargeImagePreview ? e.reredditButtons : [];
					return r.a.createElement(N, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				if (!e.isFrontpage && !e.isCountrySitePage) return null;
				const s = t => {
					const s = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return n.includes(t) || "en" === t ? r.a.createElement(O, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(h.a)(t))
					}, s[t]) : null
				};
				return r.a.createElement(u.a, {
					className: E.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!p.c[e.countryCode] && r.a.createElement("div", {
					className: E.a.LinkContainer
				}, r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(O, {
					href: "https://www.redditinc.com/policies/impressum"
				}, S._("Impressum", null, {
					hk: "4cKXSI"
				})), e.countryCode === v.i.De && r.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: E.a.NoneCapitalizeLink
				}, S._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(O, {
					href: "https://www.reddithelp.com"
				}, S._("help", null, {
					hk: "4lyYaD"
				})), e.countryCode === v.i.De && r.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, S._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: E.a.LinkContainer
				}, r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(O, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, S._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(O, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, S._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(O, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, S._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(O, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, S._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: E.a.LinkContainer
				}, r.a.createElement("div", {
					className: E.a.Column
				}, s("en"), s("fr"), s("it")), r.a.createElement("div", {
					className: E.a.Column
				}, s("de"), s("es"), s("pt"))), r.a.createElement("div", {
					className: E.a.Copyright
				}, S._("Reddit, Inc. © {year}. All rights reserved.", [S._param("year", (new Date).getFullYear().toString())], {
					hk: "DPZBh"
				})), r.a.createElement(c.a, null))
			})))
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/profile/index.ts"),
				c = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				u = n("./src/reddit/models/User/index.ts"),
				m = n("./src/reddit/selectors/profile.ts"),
				p = n("./src/reddit/selectors/subscriptions.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				g = n.n(h);
			const f = Object(d.c)({
					currentUser: b.m,
					moderated: m.p,
					subscriptions: p.e,
					hasMoreModerated: m.e,
					loadMorePending: m.b
				}),
				x = Object(o.b)(f, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(a.c)(t.profileName))
				}), (e, t, n) => ({
					...n,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				y = e => {
					let {
						item: t
					} = e;
					return i.a.createElement(l.a, {
						id: t.id,
						iconUrl: t.iconUrl,
						isNSFW: t.isNSFW,
						key: `${t.type}-${t.name}`,
						name: t.name,
						subscribers: t.subscribers,
						isSubscribed: t.isSubscribed,
						widget: void 0,
						sendEvent: () => void 0,
						type: t.type
					})
				};
			t.a = x(e => {
				const {
					currentUser: t,
					moderated: n,
					profileName: r,
					subscriptions: o,
					hasMoreModerated: d,
					onLoadMore: a,
					loadMorePending: l
				} = e;
				if (0 === n.length) return null;
				const m = t && Object(u.e)(t).toLowerCase() === r.toLowerCase() ? s.fbt._("You're a moderator of these communities", null, {
						hk: "2YoCxy"
					}) : s.fbt._("Moderator of these communities", null, {
						hk: "msvzk"
					}),
					p = function(e, t) {
						return e.map(e => ({
							name: e.name,
							subscribers: e.subscribers,
							iconUrl: e.icon.url,
							isNSFW: e.isNSFW,
							isSubscribed: t.has(e.id),
							type: "user" === e.type ? "profile" : "subreddit",
							sendEvent: () => void 0
						}))
					}(n, new Set(o));
				return i.a.createElement(c.a, {
					className: g.a.container,
					title: m,
					items: p,
					renderItem: y,
					hasMoreItems: d,
					onLoadMore: a,
					pending: l
				})
			})
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, n) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/profile/index.ts"),
				l = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				u = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = n("./src/reddit/selectors/profile.ts"),
				p = n("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				b = n.n(p);
			const h = Object(a.c)({
					hasMoreMultireddits: m.f,
					loadMorePending: m.c,
					multireddits: m.q
				}),
				g = Object(o.b)(h, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(c.i)(t.profileName, !0))
				}), (e, t, n) => ({
					...n,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				f = e => {
					let {
						item: t
					} = e;
					return i.a.createElement("div", {
						className: b.a.listItem,
						key: t.url
					}, i.a.createElement("img", {
						className: b.a.icon,
						src: t.icon
					}), i.a.createElement("div", {
						className: b.a.description
					}, i.a.createElement(d.a, {
						className: b.a.name,
						to: t.url
					}, t.displayText), i.a.createElement("div", {
						className: b.a.meta
					}, t.subredditCount && s.fbt._({
						"*": "{communities} communities",
						_1: "1 community"
					}, [s.fbt._plural(t.subredditCount, "communities")], {
						hk: "1eyxrS"
					}))))
				};
			t.a = g(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: n,
					multireddits: r,
					onLoadMore: o,
					profileName: d
				} = e;
				return r && r.length ? i.a.createElement(u.a, null, i.a.createElement(l.a, {
					hasMoreItems: t,
					items: r,
					onLoadMore: o,
					pending: n,
					renderItem: f,
					title: s.fbt._("Public custom feeds by u/{profileName}", [s.fbt._param("profileName", d)], {
						hk: "16Oicc"
					})
				})) : null
			})
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx");
			t.a = i.a.div("Component", r.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/lodash/throttle.js"),
				i = n.n(r),
				o = n("./node_modules/react/index.js"),
				d = n.n(o),
				a = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/components/BackToTop/index.tsx"),
				l = n("./src/reddit/components/SidebarFooter/index.tsx"),
				u = n("./src/reddit/constants/componentSizes.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				b = n.n(p),
				h = n("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const f = a.g[1] + 24,
				x = u.f + 8,
				y = x + 152 + 16,
				v = y + f + 8,
				_ = h.a.div("Container", b.a),
				E = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: n,
						...s
					} = e;
					return d.a.createElement(c.a, g({
						className: t,
						isOverlay: n,
						style: {
							top: `calc(100vh - ${n?x:8}px)`
						}
					}, s))
				}, "BackToTop", b.a),
				S = e => {
					let {
						children: t,
						className: n,
						isFakeOverlay: r,
						isSticky: i,
						shouldStickToBottom: o
					} = e;
					return d.a.createElement("div", {
						className: Object(s.a)(n, {
							[b.a.BottomStickyStyles]: o,
							[b.a.StickyStyles]: !o && i && !r,
							[b.a.StickyStylesFakeOverlay]: !o && !!r
						})
					}, t)
				};
			class O extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > v,
						shouldFooterSticky: this.windowHeight > y
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
					}, a.L), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							adComponentOnFakeOverlay: n,
							children: s,
							className: r,
							hideFooter: i,
							pageLayer: o,
							recommendationsComponent: a,
							reredditButtons: c
						}
					} = this, u = this.state.isAdSticky && !(!t && !s), m = this.state.isBottomSticky;
					return d.a.createElement(_, {
						className: r,
						innerRef: this.setWrapperRef
					}, d.a.createElement(S, {
						isFakeOverlay: n,
						isSticky: u,
						shouldStickToBottom: m
					}, t, s, a, !i && d.a.createElement(l.a, {
						reredditButtons: c
					})), !a && !this.props.hideBackToTop && d.a.createElement(E, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const C = Object(m.v)();
			t.a = C(O)
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, n) {
			e.exports = {
				TrophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				trophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				TrophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				trophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				TrophyItem: "QY_PhyoOHbRd-_92ivr-m",
				trophyItem: "QY_PhyoOHbRd-_92ivr-m",
				TrophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				trophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				Description: "_3n5-aYyk15dtyt-boqlDrq",
				description: "_3n5-aYyk15dtyt-boqlDrq"
			}
		},
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				c = n("./src/reddit/controls/Typography/index.tsx"),
				l = n("./src/reddit/selectors/telemetry.ts");
			var u = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = n("./node_modules/lodash/isEqual.js"),
				b = n.n(p);
			const h = Object(d.b)(d.d, b.a);
			var g = n("./src/reddit/selectors/profile.ts"),
				f = n("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				x = n.n(f),
				y = n("./src/lib/lessComponent.tsx"),
				v = n("./src/lib/opener/index.ts");
			const _ = Object(d.c)({
				trophyCase: (e, t) => {
					let {
						profileName: n
					} = t;
					return Object(g.t)(e, Object(g.o)(e, n))
				}
			}, h);
			t.a = Object(o.b)(_)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : i.a.createElement(a.a, {
					title: s.fbt._("Trophy Case ({trophyCount})", [s.fbt._param("trophyCount", `${t.length}`)], {
						hk: "mzh3V"
					}),
					items: t,
					renderItem: k
				})
			});
			const E = y.a.wrapped(m.a, "TrophyItem", x.a),
				S = y.a.div("TrophyIcon", x.a),
				O = y.a.h5("TrophyName", x.a),
				C = y.a.div("TrophyContent", x.a),
				j = y.a.wrapped(c.c, "Description", x.a),
				k = e => {
					let {
						item: t
					} = e;
					const n = Object(u.a)(),
						s = i.a.createElement("img", {
							src: t.icon,
							title: t.name
						});
					return i.a.createElement(E, {
						key: t.id
					}, i.a.createElement(S, null, t.url ? i.a.createElement("a", {
						target: v.d.BLANK,
						rel: v.c,
						href: t.url,
						onClick: () => n((e => t => ({
							source: "trophy",
							action: "click",
							noun: "trophy",
							...l.q(t),
							actionInfo: Object(l.d)(t, {
								paneName: "profile_about"
							}),
							profile: l.V(t),
							trophy: e
						}))({
							id: t.id,
							name: t.name
						}))
					}, s) : s), i.a.createElement(C, null, i.a.createElement(O, null, t.name), i.a.createElement(j, null, t.description)))
				}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SEOTitle/index.tsx"),
				d = n("./src/reddit/components/Widgets/Base/index.m.less"),
				a = n.n(d);
			const c = i.a.div("WidgetBackground", a.a),
				l = i.a.wrapped(e => {
					let {
						children: t,
						...n
					} = e;
					return r.a.createElement("div", n, r.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", a.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(c, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			})), n.d(t, "a", (function() {
				return N
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				m = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(o.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				v = n("./src/reddit/models/Flair/index.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				S = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				O = n.n(S);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => i.a.createElement(b.a, {
					className: Object(c.a)(O.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, i.a.createElement("div", {
					className: O.a.container
				}, e.isLoading ? i.a.createElement(f.a, {
					className: O.a.loadingIcon,
					sizePx: 32
				}) : i.a.createElement(i.a.Fragment, null, e.isError ? i.a.createElement("p", {
					className: O.a.errorMsg
				}, e.errorMsg || s.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : i.a.createElement(i.a.Fragment, null, e.communities.map(t => i.a.createElement(N, C({
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
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && i.a.createElement(g.t, {
					className: O.a.bottomButton,
					kind: g.b.Button,
					priority: g.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				k = Object(a.c)({
					hideNSFWPref: _.H,
					nightmode: _.fb
				}),
				N = Object(o.b)(k)(e => i.a.createElement("div", {
					className: Object(c.a)(O.a.communityItemContainer, {
						[O.a.withBottomFlair]: e.isNSFW
					})
				}, i.a.createElement(y.a, {
					className: O.a.communityItemExpandCenter,
					widthRight: h.s
				}, i.a.createElement("div", {
					className: O.a.iconContainer
				}, e.communityIcon || e.iconUrl ? i.a.createElement("img", {
					className: O.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : i.a.createElement(x.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(c.a)(O.a.defaultCommunityIcon, {
						[O.a.mNightmode]: e.nightmode
					})
				})), i.a.createElement("div", {
					className: O.a.communityDescriptionContainer
				}, i.a.createElement(d.a, {
					className: O.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(E.b)(e.name, e.type),
					to: Object(E.a)(e.name, e.type)
				}, Object(E.b)(e.name, e.type)), i.a.createElement("div", {
					className: O.a.communityInfoContainer
				}, !!e.subscribers && i.a.createElement("p", {
					className: O.a.subscriberCount
				}, s.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [s.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && i.a.createElement(l.c, {
					className: O.a.nsfwFlair,
					flair: {
						type: v.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? i.a.createElement(f.a, {
					className: Object(c.a)(O.a.communityCta, O.a.smallLoadingIcon),
					sizePx: 12
				}) : i.a.createElement(g.t, {
					className: O.a.communityCta,
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? i.a.createElement(p, {
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
				}) : i.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && i.a.createElement("p", {
					title: e.description,
					className: O.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/posts.ts"),
				r = n("./src/reddit/helpers/name/index.ts");

			function i(e, t) {
				return (t === s.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === s.a.PROFILE ? Object(r.e)(e) : Object(r.d)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				communityItemExpandCenter: "oP8RhN61VEXVL8e6SIxK_",
				communityDescriptionContainer: "_3jEbHrUmHtMsZcfN-z_GpD",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				withBottomFlair: "_14n0HZvxiP1OqS51zI7Sy3",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				nsfwFlair: "_3wQmfxeBovEB3M5pcwt-pv",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				defaultCommunityIcon: "_1yiD4Wxo0icHUUftoUrBiM",
				mNightmode: "_1yugRWTZEox55lEcLyzzAo"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1zLylbOLqdzG2C4JhdkEVQ",
				twitterLogo: "_1N1dJvzR-m3nNoVl8cxHul",
				link: "JqNsQRTEcAPCq8_G0O5mO",
				linkDescription: "_2Y1Xv08xrWbsDZuEvIuRKo",
				name: "_28fbIV1TS_oSVjfzjWnM0f",
				linkTitle: "elMVR2YfkbHdFTihhlUK4",
				linkIcon: "oi2L0mBSRAULcOPEtjXSh",
				description: "KKNu_jB7N6A-PuBrW0WoR",
				visitButton: "NBL39n3gjYvG4c9qlXJIk"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, n) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/components/Widgets/Base/index.tsx"),
				l = n("./src/reddit/constants/posts.ts"),
				u = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				m = n("./src/reddit/models/ExternalAccount/index.ts"),
				p = n("./src/reddit/selectors/externalAccount.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./node_modules/fbt/lib/FbtPublic.js"),
				g = n("./src/reddit/controls/OutboundLink/index.tsx"),
				f = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				x = n("./src/reddit/icons/svgs/Twitter/index.tsx"),
				y = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				v = n("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				_ = n.n(v);
			var E = e => {
					const {
						account: t,
						clickEvent: n,
						provider: s
					} = e;
					let i, o = t.username,
						d = "";
					return s !== m.a.Twitter ? null : (i = r.a.createElement(x.a, {
						className: _.a.twitterLogo
					}), d = h.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), o = `@${t.username}`, r.a.createElement(y.a, null, r.a.createElement("span", {
						className: _.a.icon
					}, i), r.a.createElement(g.b, {
						className: _.a.link,
						href: t.link,
						onClick: n
					}, r.a.createElement("div", {
						className: _.a.linkTitle
					}, r.a.createElement("span", {
						className: _.a.name
					}, o), r.a.createElement(f.a, {
						className: _.a.linkIcon
					})), r.a.createElement("div", {
						className: _.a.linkDescription
					}, d))))
				},
				S = n("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				O = n.n(S);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), j = Object(o.c)({
				twitterAccount: (e, t) => {
					let {
						subredditOrProfile: n
					} = t;
					return n.type === l.a.PROFILE ? Object(p.c)(e, {
						profileName: n.name
					}) : null
				},
				user: (e, t) => {
					let {
						subredditOrProfile: n
					} = t;
					return n.type === l.a.PROFILE ? Object(b.Db)(e, {
						userName: n.name
					}) : null
				}
			}), k = Object(i.b)(j, e => ({
				trackTwitterAccountClicked: t => e((e, n) => u.m(n(), t))
			}), (e, t, n) => ({
				...n,
				...e,
				...t,
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(a.c)(k(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: n
				} = e;
				return n ? r.a.createElement(d.a, null, r.a.createElement(c.b, null, r.a.createElement(c.a, null, C._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), n && r.a.createElement("div", {
					className: O.a.account
				}, r.a.createElement(E, {
					provider: m.a.Twitter,
					account: n,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/widgets.ts"),
				b = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = n("./src/reddit/selectors/experiments/topPosts.ts"),
				g = n("./src/reddit/selectors/structuredStyles.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/models/Theme/index.ts"),
				y = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const v = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(y.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				_ = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(y.a)(e).widgetColors.sidebarWidgetHeaderColor,
				E = e => {
					const t = v(e);
					return Object(x.e)(t)
				},
				S = e => {
					const t = _(e);
					return Object(x.e)(t)
				};
			var O = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				C = n.n(O);
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js"), k = Object(u.v)(), N = Object(i.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.o)(e, t) || void 0,
						s = t.redditStyle || Object(g.l)(e, {
							subredditId: n
						}),
						r = Object(f.fb)(e);
					return s || r
				},
				nigtmode: f.fb,
				subredditId: u.o,
				topPostVariant: h.d
			}));
			class w extends r.a.Component {
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
					return e.backgroundColor = v(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = E(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = _(this.props), e.color = e.fill = S(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: s,
						headerButton: i,
						id: o,
						onClick: a,
						onHeaderClick: l,
						title: u,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = n ? C.a.widgetContentOnly : C.a.widgetContent, g = !s && this.props.styles, f = g ? this.getWidgetBackgroundStyles() : {}, x = g ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(d.a)(t, C.a.widgetBackground, {
							[C.a.redditStyle]: s,
							[C.a.clickable]: !!a,
							[C.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: a,
						style: f
					}, u && r.a.createElement("div", {
						className: Object(d.a)(C.a.widgetHeader, {
							[C.a.clickable]: !!l
						}),
						id: o,
						style: {
							...x,
							...this.props.headerStyles
						},
						onClick: l
					}, r.a.createElement("div", {
						className: Object(d.a)(C.a.widgetTitle, p)
					}, r.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), i), r.a.createElement("div", {
						className: Object(d.a)(h, {
							[C.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.r, {
						className: C.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, j._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = k(N(Object(a.a)(Object(l.c)(w))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "b", (function() {
				return w
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/actions/ads/index.ts"),
				d = n("./src/reddit/actions/focusedVerticals/index.ts"),
				a = n("./src/reddit/actions/gold/tooltips.ts"),
				c = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/postList.ts"),
				u = n("./src/reddit/actions/survey/index.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = n("./src/reddit/helpers/trackers/post.ts"),
				g = n("./src/reddit/components/PostList/Placeholder.tsx"),
				f = n("./src/reddit/featureFlags/index.ts"),
				x = n("./src/reddit/selectors/experiments/hidePostMitigation.ts"),
				y = n("./src/reddit/selectors/experiments/survey.ts"),
				v = n("./src/reddit/selectors/listings.ts"),
				_ = n("./src/reddit/selectors/posts.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				S = n("./src/reddit/selectors/tracking.ts"),
				O = n("./src/reddit/selectors/user.ts");

			function C() {
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
			const j = C(),
				k = {
					apiError: v.c,
					apiPending: v.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.U)(e, t),
					loadMore: v.g,
					postsById: (e, t) => {
						let {
							listingKey: n
						} = t;
						return Object(_.S)(e, {
							listingKey: n,
							keepHiddenPosts: Object(x.a)(e)
						})
					},
					postIds: Object(i.a)((e, t) => {
						let {
							listingKey: n,
							listingName: s,
							inSubredditOrProfile: r
						} = t;
						return Object(_.C)(e, n, s, r, Object(x.a)(e))
					}),
					subredditsById: E.eb,
					viewportDataLoaded: S.b,
					pageReferrer: p.X,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: y.e,
					isLoggedIn: O.S
				},
				N = Object(r.c)(k),
				w = e => ({
					onBottomViewed: (t, n) => e(l.c(t, n)),
					onFirstPostChanged: t => e(Object(a.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(o.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(d.a)({
							lastLoadedEnv: "server"
						})), e(c.K(t))
					},
					fireAdPixelsOfType: (t, n) => {
						e(c.y(t, n))
					},
					trackOnPostEnteredViewport: (t, n, s, r) => {
						e(c.M(t, s, r))
					},
					trackOnPostExitedViewport: (t, n, s, r) => {
						e(c.N(t, s, r))
					},
					showModalOnScroll: () => e(c.ab()),
					surveyTriggerScrollCounted: () => e(Object(u.l)())
				}),
				L = e => Object(b.b)({
					...e
				}),
				I = (e, t, n, s) => {
					const {
						listingKey: r,
						hostPostData: i,
						listingBelowVariant: o
					} = s;
					return Object(h.n)(e, t, "post", r, i, o, void 0)
				},
				P = Object(s.b)(N, w, (e, t, n) => ({
					...e,
					...t,
					...n,
					postComponentForLayout: L,
					postClickEventFactory: I
				}));
			t.a = e => Object(m.c)(j(P(e)))
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "f", (function() {
				return a
			}));
			const s = "comment",
				r = "comment-submission-form-markdown",
				i = "comment-submission-form-richtext",
				o = "comments-page-link-num-comments",
				d = "language-prompt-close",
				a = "post-content"
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				d = n.n(o);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: s = 10
				} = e;
				return r.a.createElement("div", {
					className: Object(i.a)(d.a.loadingIcon, n, {
						[d.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${s}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/endpoints/onboarding/languageSelections.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/makeGqlRequest/index.ts");
			var r, i = n("./src/redditGQL/operations/LanguageSelections.json"),
				o = n("./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json");
			! function(e) {
				e.ALL_KEY = "all_languages_simple", e.SUGGESTED_KEY = "suggested_languages", e.TOP_KEYS = "top_languages"
			}(r || (r = {}));
			const d = (e, t) => {
					const n = {
						allKey: e,
						suggestedKey: r.SUGGESTED_KEY
					};
					return Object(s.a)(t, {
						...i,
						variables: n
					})
				},
				a = async e => {
					const t = await d(r.ALL_KEY, e());
					if (!t.ok) return null;
					const n = t.body,
						s = null == n ? void 0 : n.data;
					return s ? (e => {
						const t = {},
							n = e.identity.preferences.spokenLanguages || [];
						return e.all.map(e => {
							t[e.isoCode] = e.translatedDisplayName
						}), {
							languages: t,
							preferences: n
						}
					})(s) : null
				}, c = async (e, t, n) => {
					const s = await d(e, t());
					if (!s.ok) return null;
					const i = s.body,
						o = null == i ? void 0 : i.data;
					if (o) {
						return ((e, t, n) => {
							let s = null,
								r = [];
							const i = [],
								o = [],
								d = {},
								a = {};
							if (!e) {
								t.identity.preferences.spokenLanguages.map(e => {
									a[e] = !0
								})
							}
							for (let c = 0; c < t.suggested.length; c++) {
								const r = t.suggested[c];
								if (d[r.isoCode] = !0, n === r.isoCode) s = r;
								else {
									if (!e && a[r.isoCode]) continue; {
										const t = !!(e || !e && a[r.isoCode]);
										i.push({
											selected: t,
											...r
										})
									}
								}
							}
							for (let c = 0; c < t.all.length; c++) {
								const i = t.all[c];
								i.isoCode === n ? (s = i, o.push({
									selected: !0,
									...i
								})) : !e && a[i.isoCode] ? o.push({
									selected: !0,
									...i
								}) : d[i.isoCode] || r.push({
									selected: !(e || !a[i.isoCode]),
									...i
								})
							}
							if (r = i.concat(r), null === s) {
								const e = n.split("-").shift();
								for (let t = 0; t < r.length; t++)
									if (r[t].isoCode === e) {
										s = r[t], r.splice(t, 1);
										break
									}
							}
							return s && ((e || !e && a[s.isoCode]) && (s.selected = !0), r.unshift(s)), e || (r = o.concat(r)), {
								sortedLanguages: r
							}
						})(e === r.TOP_KEYS, o, n)
					}
					return null
				}, l = async (e, t) => {
					const n = await ((e, t) => {
						const n = {
							input: {
								spokenLanguages: t
							}
						};
						return Object(s.a)(e, {
							...o,
							variables: n
						})
					})(e(), Object.keys(t));
					if (!n.ok) return null;
					const r = n.body;
					return null == r ? void 0 : r.data
				}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const n = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === s.b.NO_ADS);
				return !n && !r
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				i = n.n(r);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(i.a.loadingBackground, {
						[i.a["m-loading"]]: t
					})
				},
				d = e => Object(s.a)(i.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/telemetry/models/Event.ts");
			const i = e => {
					let {
						subredditId: t,
						postId: n
					} = e;
					return e => ({
						source: r.e.SubredditMuting,
						action: r.c.Mute,
						noun: r.d.Subreddit,
						subreddit: {
							id: t
						},
						...s.q(e),
						...n && {
							post: {
								id: n
							}
						}
					})
				},
				o = e => {
					let {
						subredditId: t,
						postId: n
					} = e;
					return e => ({
						source: r.e.SubredditMuting,
						action: r.c.Unmute,
						noun: r.d.Subreddit,
						subreddit: {
							id: t
						},
						...s.q(e),
						...n && {
							post: {
								id: n
							}
						}
					})
				}
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			}));
			var s, r, i = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const d = (e, t) => n => ({
					source: r.COMMUNITY_WIDGETS,
					action: i.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(o.Ab)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...o.q
				}),
				a = (e, t) => n => ({
					source: r.POST,
					action: i.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: o.M(n, e),
					subreddit: o.nb(n),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...o.q(n)
				}),
				c = () => e => ({
					source: r.SIDEBAR,
					action: i.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...o.q(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: i.c.CLICK,
					noun: s.TOPIC,
					...o.q(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), r.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function i(e) {
				return r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, n) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/RightAlign/index.m.less"),
				i = n.n(r);
			t.a = s.a.div("rightAligned", i.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				a = n.n(d);
			t.a = Object(i.a)(e => r.a.createElement("div", {
				className: Object(o.a)(a.a.expandedCenterContainer, e.className)
			}, r.a.createElement("div", {
				className: a.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: a.a.center
			}, Array.isArray(e.children) && e.children[1]), r.a.createElement("div", {
				className: a.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				a = n.n(d);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: s,
					widthLeft: i,
					gutter: d,
					...l
				} = e;
				return r.a.createElement("div", c({
					className: Object(o.a)(a.a.expandRightContainer, t)
				}, l), r.a.createElement("div", {
					className: a.a.left,
					style: {
						flexBasis: i,
						height: s,
						marginRight: d
					}
				}, Array.isArray(n) && n[0]), r.a.createElement("div", {
					className: a.a.right
				}, Array.isArray(n) && n[1]))
			}, 2)
		},
		"./src/reddit/pages/PostSetPage/index.m.less": function(e, t, n) {
			e.exports = {
				postSetListing: "_2jOCVnTYJCVsPQ4ruQvzka",
				title: "fOMKWN2KEhxy6-TuIuYwc",
				postList: "_1xRdDjpW3oy_aRVI8U-oID",
				post: "_22h_vyR5iS_7iKfgRMvBxS",
				shareFooter: "_2qoLa29p4PZqoh6L4ccFU3",
				sharePostFooter: "hTDJl3WkF4ozSKpswpWjM",
				shareTitle: "_3pxvkcfnzlC05g5q9u9pNh",
				shareButton: "ZH0SbeK7eRfkUQ-FB3JzA"
			}
		},
		"./src/reddit/pages/PostSetPage/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/components/EmptyProfile/index.ts"),
				a = n("./src/reddit/components/ListingPostList/index.tsx"),
				c = n("./src/reddit/components/ProfileSidebar/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				m = n("./src/reddit/layout/page/Listing/index.tsx"),
				p = n("./src/reddit/models/Post/index.ts"),
				b = n("./src/reddit/models/User/index.ts"),
				h = n("./src/reddit/selectors/experiments/postSets.ts"),
				g = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/selectors/user.ts");
			var x = n("./src/reddit/pages/PostSetPage/index.m.less"),
				y = n.n(x);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = e => {
				let {
					numPostsInPostSet: t
				} = e;
				return r.a.createElement("div", {
					className: y.a.shareFooter
				}, t >= 5 ? v._("You’ve shared your post to the maximum {maximum number of posts} communities.", [v._param("maximum number of posts", 5)], {
					hk: "3MFJ59"
				}) : r.a.createElement("div", {
					className: y.a.sharePostFooter
				}, r.a.createElement("span", {
					className: y.a.shareTitle
				}, v._("Other communities might like this too", null, {
					hk: "3p57xL"
				})), r.a.createElement("span", null, v._("Share your post with up to {maximum number of posts} communities—You can even change your title for each one.", [v._param("maximum number of posts", 5)], {
					hk: "4yTsEv"
				})), r.a.createElement(l.t, {
					className: y.a.shareButton,
					text: v._("Share post", null, {
						hk: "3GVQCW"
					})
				})))
			};
			t.default = e => {
				const {
					profileName: t,
					partialPostSetId: n
				} = e.match.params, l = Object(p.z)(n), x = Object(u.b)(t, l), E = l.toLowerCase(), S = Object(i.e)(e => Object(g.P)(e, {
					listingKey: x
				})), O = Object(i.e)(f.m), [C, j] = Object(s.useState)(!1);
				Object(s.useEffect)(() => {
					if (O) {
						const e = Object(b.e)(O);
						j(t === e)
					}
				}, [t, O]);
				const k = Object(i.e)(e => Object(h.b)(e, C));
				return r.a.createElement(m.a, {
					disableFullscreen: !0,
					fitPageToContent: !0,
					content: r.a.createElement("div", {
						className: y.a.postSetListing
					}, r.a.createElement("div", {
						className: y.a.title
					}, v._("Shared to", null, {
						hk: "2yMnz9"
					})), r.a.createElement(a.a, {
						className: y.a.postList,
						listingKey: x,
						listingName: E,
						postClassName: y.a.post,
						noPostsComponent: () => r.a.createElement(d.c, {
							profileName: t,
							timeSort: o.nc.ALL
						}),
						shouldShowInsightsButton: C
					}), k && r.a.createElement(_, {
						numPostsInPostSet: S.length
					})),
					sidebar: r.a.createElement(c.a, {
						profileName: t
					})
				})
			}
		},
		"./src/reddit/selectors/experiments/antievil/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => {
				return Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.I
				}) === s.Rd
			}
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/index.ts"),
				o = n("./src/reddit/selectors/experiments/utils.ts"),
				d = n("./src/reddit/selectors/meta.ts"),
				a = n("./node_modules/reselect/es/index.js");
			const c = Object(a.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(d.h)(e) && Object(i.f)(e),
					experimentName: s.pc
				}), o.a),
				l = Object(a.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(d.h)(e) && Object(i.f)(e),
					experimentName: s.oc
				}), o.a),
				u = Object(a.a)(c, l, (e, t) => e || t),
				m = Object(a.a)(c, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/experiments/hidePostMitigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.ne
					}) === s.Rd
				},
				o = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.oe
					}) === s.Rd
				}
		},
		"./src/reddit/selectors/experiments/postSets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const i = (e, t) => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: () => t,
						experimentName: s.vc
					}) === s.Rd
				},
				o = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.uc
					}) === s.Rd
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostSetPage.be907917e102573ab68e.js.map