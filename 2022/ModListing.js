// https://www.redditstatic.com/desktop2x/ModListing.89ff2ec8f016b4dd1b73.js
// Retrieved at 11/9/2022, 10:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModListing"], {
		"./node_modules/classnames/index.js": function(e, t, r) {
			var n;
			! function() {
				"use strict";
				var r = {}.hasOwnProperty;

				function s() {
					for (var e = [], t = 0; t < arguments.length; t++) {
						var n = arguments[t];
						if (n) {
							var i = typeof n;
							if ("string" === i || "number" === i) e.push(n);
							else if (Array.isArray(n)) {
								if (n.length) {
									var o = s.apply(null, n);
									o && e.push(o)
								}
							} else if ("object" === i)
								if (n.toString === Object.prototype.toString)
									for (var d in n) r.call(n, d) && n[d] && e.push(d);
								else e.push(n.toString())
						}
					}
					return e.join(" ")
				}
				e.exports ? (s.default = s, e.exports = s) : void 0 === (n = function() {
					return s
				}.apply(t, [])) || (e.exports = n)
			}()
		},
		"./node_modules/intersection-observer/intersection-observer.js": function(e, t) {
			! function(e, t) {
				"use strict";
				if ("IntersectionObserver" in e && "IntersectionObserverEntry" in e && "intersectionRatio" in e.IntersectionObserverEntry.prototype) "isIntersecting" in e.IntersectionObserverEntry.prototype || Object.defineProperty(e.IntersectionObserverEntry.prototype, "isIntersecting", {
					get: function() {
						return this.intersectionRatio > 0
					}
				});
				else {
					var r = [];
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
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, r) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== r[t - 1]
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, s.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, s.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							r = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(s) {
							var i = s.element,
								o = d(i),
								a = this._rootContainsTarget(i),
								c = s.entry,
								u = t && a && this._computeTargetAndRootIntersection(i, r),
								l = s.entry = new n({
									time: e.performance && performance.now && performance.now(),
									target: i,
									boundingClientRect: o,
									rootBounds: r,
									intersectionRect: u
								});
							c ? t && a ? this._hasCrossedThreshold(c, l) && this._queuedEntries.push(l) : c && c.isIntersecting && this._queuedEntries.push(l) : this._queuedEntries.push(l)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, s.prototype._computeTargetAndRootIntersection = function(r, n) {
						if ("none" != e.getComputedStyle(r).display) {
							for (var s, i, o, a, u, l, m, b, p = d(r), h = c(r), f = !1; !f;) {
								var g = null,
									_ = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == _.display) return;
								if (h == this.root || h == t ? (f = !0, g = n) : h != t.body && h != t.documentElement && "visible" != _.overflow && (g = d(h)), g && (s = g, i = p, o = void 0, a = void 0, u = void 0, l = void 0, m = void 0, b = void 0, o = Math.max(s.top, i.top), a = Math.min(s.bottom, i.bottom), u = Math.max(s.left, i.left), l = Math.min(s.right, i.right), b = a - o, !(p = (m = l - u) >= 0 && b >= 0 && {
										top: o,
										bottom: a,
										left: u,
										right: l,
										width: m,
										height: b
									}))) break;
								h = c(h)
							}
							return p
						}
					}, s.prototype._getRootRect = function() {
						var e;
						if (this.root) e = d(this.root);
						else {
							var r = t.documentElement,
								n = t.body;
							e = {
								top: 0,
								left: 0,
								right: r.clientWidth || n.clientWidth,
								width: r.clientWidth || n.clientWidth,
								bottom: r.clientHeight || n.clientHeight,
								height: r.clientHeight || n.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, s.prototype._expandRectByRootMargin = function(e) {
						var t = this._rootMarginValues.map((function(t, r) {
								return "px" == t.unit ? t.value : t.value * (r % 2 ? e.width : e.height) / 100
							})),
							r = {
								top: e.top - t[0],
								right: e.right + t[1],
								bottom: e.bottom + t[2],
								left: e.left - t[3]
							};
						return r.width = r.right - r.left, r.height = r.bottom - r.top, r
					}, s.prototype._hasCrossedThreshold = function(e, t) {
						var r = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							n = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (r !== n)
							for (var s = 0; s < this.thresholds.length; s++) {
								var i = this.thresholds[s];
								if (i == r || i == n || i < r != i < n) return !0
							}
					}, s.prototype._rootIsInDom = function() {
						return !this.root || a(t, this.root)
					}, s.prototype._rootContainsTarget = function(e) {
						return a(this.root || t, e)
					}, s.prototype._registerInstance = function() {
						r.indexOf(this) < 0 && r.push(this)
					}, s.prototype._unregisterInstance = function() {
						var e = r.indexOf(this); - 1 != e && r.splice(e, 1)
					}, e.IntersectionObserver = s, e.IntersectionObserverEntry = n
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
						r = t.width * t.height,
						n = this.intersectionRect,
						s = n.width * n.height;
					this.intersectionRatio = r ? s / r : this.isIntersecting ? 1 : 0
				}

				function s(e, t) {
					var r, n, s, i = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (r = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, s = null, function() {
						s || (s = setTimeout((function() {
							r(), s = null
						}), n))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function i(e, t, r, n) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, r, n || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, r)
				}

				function o(e, t, r, n) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, r, n || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, r)
				}

				function d(e) {
					var t;
					try {
						t = e.getBoundingClientRect()
					} catch (r) {}
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
					for (var r = t; r;) {
						if (r == e) return !0;
						r = c(r)
					}
					return !1
				}

				function c(e) {
					var t = e.parentNode;
					return t && 11 == t.nodeType && t.host ? t.host : t
				}
			}(window, document)
		},
		"./node_modules/lodash/times.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseTimes.js"),
				s = r("./node_modules/lodash/_castFunction.js"),
				i = r("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				d = 4294967295,
				a = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > o) return [];
				var r = d,
					c = a(e, d);
				t = s(t), e -= d;
				for (var u = n(c, t); ++r < e;) t(r);
				return u
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, r, n) {
				var s = r ? r.call(n, e, t) : void 0;
				if (void 0 !== s) return !!s;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var i = Object.keys(e),
					o = Object.keys(t);
				if (i.length !== o.length) return !1;
				for (var d = Object.prototype.hasOwnProperty.bind(t), a = 0; a < i.length; a++) {
					var c = i[a];
					if (!d(c)) return !1;
					var u = e[c],
						l = t[c];
					if (!1 === (s = r ? r.call(n, u, l, c) : void 0) || void 0 === s && u !== l) return !1
				}
				return !0
			}
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "EMBEDS__UNLOADABLE",
				i = "EMBEDS__LOADABLE",
				o = Object(n.a)(s),
				d = Object(n.a)(i)
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return I
			})), r.d(t, "b", (function() {
				return M
			}));
			var n, s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/performanceTimings/index.tsx"),
				o = r("./src/reddit/actions/focusedVerticals/constants.ts"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(n || (n = {}));
			var c, u = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				l = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var m = r("./src/lib/objectSelector/index.ts"),
				b = r("./src/reddit/featureFlags/index.ts"),
				p = r("./src/reddit/selectors/posts.ts"),
				h = r("./src/reddit/selectors/subreddit.ts"),
				f = r("./src/reddit/selectors/user.ts");
			const g = [],
				_ = (Object(m.a)((e, t) => {
					const r = _(e, t);
					if (!r) return g;
					const n = Object(h.cb)(e, {
						subredditName: r.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : g
				}), (e, t) => {
					const r = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return r ? Object(h.Y)(e, {
						subredditId: r
					}) : null
				}),
				y = (e, t, r, n, s) => {
					const i = s.find(e => e <= t) || -1,
						o = s.find(e => e > t) || 1 / 0;
					return t !== o && t !== i && (!(i + r > t) && (!(t + r > o) && !((e, t, r) => {
						const n = r[t - 1],
							s = r[t],
							i = s && Object(p.G)(e, {
								postId: n
							}) || null,
							o = s && Object(p.G)(e, {
								postId: s
							}) || null;
						return i && i.isSponsored || o && o.isSponsored
					})(e, t, n)))
				},
				v = [3];
			Object(m.a)((e, t) => {
				let {
					existingDUPositions: r,
					listingProps: n
				} = t;
				const s = r.slice().sort();
				let i = -1;
				const o = Object(p.z)(e, {
						listingKey: n.listingKey
					}),
					d = [];
				return v.forEach(t => {
					let r = i + t;
					if (!(r >= o.length)) {
						for (; r < o.length && !y(e, r, t, o, s);) r += 1;
						r < o.length && (d.push(r), i = r)
					}
				}), d
			});
			var x = r("./src/reddit/selectors/platform.ts");
			const O = Object(s.a)(o.f),
				E = Object(s.a)(o.d),
				S = Object(s.a)(o.g),
				j = Object(s.a)(o.c),
				I = Object(s.a)(o.e),
				C = (Object(s.a)(o.i), Object(s.a)(o.h), () => async (e, t, r) => {
					let {
						gqlContext: s
					} = r;
					const i = t(),
						o = (e => {
							return e.focusedVerticals.api.pending.focusedVerticalGqlPending
						})(i),
						c = (e => {
							const t = Object(f.Q)(e),
								r = b.d.geoSubredditRecommendationDULoggedIn(e),
								n = b.d.geoSubredditRecommendationDULoggedOut(e);
							return t && r || !t && n
						})(i),
						m = Object(f.Q)(i);
					if (o || !c) return;
					e(S());
					let p = !1;
					try {
						const t = m ? n.LoggedInGeo : n.LoggedOutGeo,
							r = await ((e, t, r) => Object(d.a)(e, {
								...a,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (r.ok && r.body) {
							const {
								data: t
							} = r.body;
							if (L(t)) {
								if (P(t)) {
									e(j({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), p = !0
								} else if (k(t)) {
									const r = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: s,
											category: i
										} = r.focusRecommendations[0],
										o = [n, s],
										d = Object(l.d)(o),
										a = Object(u.b)(o),
										c = Object(l.c)(n),
										m = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [s.id],
											subreddits: d,
											subredditsAboutInfo: a,
											subredditTopContent: c,
											category: i,
											lastLoadedEnv: "client"
										};
									e(O(m)), p = !0
								}
							} else p = !1
						}
					} catch (h) {
						p = !1
					}
					p || e(E({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}),
				L = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				},
				P = e => {
					const t = e.focusVerticalSubredditRecommendations,
						r = t && t.focusRecommendations;
					return !(!r || 0 !== r.length)
				},
				k = e => {
					const t = e.focusVerticalSubredditRecommendations,
						r = t && t.focusRecommendations,
						n = t && t.type;
					return !!(r && !P(e) && n === c.GEO && r[0] && r[0].recommendedSubreddit && r[0].interactedSubreddit)
				},
				M = () => async (e, t, r) => {
					var n, s;
					const o = t(),
						d = (e => e.focusedVerticals.lastLoadedEnv)(o);
					if ((e => {
							return e.focusedVerticals.api.error.focusedVerticalGqlError
						})(o) || null === d || "client" === d) {
						const r = null === (s = null === (n = Object(x.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
							d = Object(f.R)(o);
						return Object(i.i)(() => e(C()), {
							name: "getFocusedVerticalsRequested",
							page: r,
							isLoggedIn: d
						})
					}
					if ("server" === d) return e(I({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/modListing/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "modListingDataPending", (function() {
				return T
			})), r.d(t, "modListingDataLoaded", (function() {
				return N
			})), r.d(t, "modListingDataFailed", (function() {
				return w
			})), r.d(t, "modListingPageRequested", (function() {
				return F
			})), r.d(t, "morePostsPending", (function() {
				return A
			})), r.d(t, "morePostsLoaded", (function() {
				return G
			})), r.d(t, "morePostsFailed", (function() {
				return H
			})), r.d(t, "moreModListingRequested", (function() {
				return B
			})), r.d(t, "hideSubredditSuccess", (function() {
				return V
			})), r.d(t, "hideSubredditPending", (function() {
				return q
			})), r.d(t, "hideSubredditFailed", (function() {
				return K
			})), r.d(t, "unhideSubredditSuccess", (function() {
				return U
			})), r.d(t, "unhideSubredditPending", (function() {
				return J
			})), r.d(t, "unhideSubredditFailed", (function() {
				return Q
			})), r.d(t, "toggleHiddenSubreddit", (function() {
				return Y
			})), r.d(t, "hideSubreddit", (function() {
				return X
			})), r.d(t, "unhideSubreddit", (function() {
				return z
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/pick.js"),
				i = r.n(s),
				o = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/makeListingKey/index.ts"),
				c = r("./src/reddit/actions/platform.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/constants/page.ts"),
				m = r("./src/reddit/constants/parameters.ts"),
				b = r("./src/config.ts"),
				p = r("./src/lib/makeApiRequest/index.ts"),
				h = r("./src/lib/omitHeaders/index.ts"),
				f = r("./src/reddit/constants/headers.ts"),
				g = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				_ = r("./src/reddit/helpers/name/index.ts"),
				y = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				v = (e, t) => Object(p.a)(e, {
					data: t,
					endpoint: Object(g.a)(Object(y.a)(`${b.a.gatewayUrl}/desktopapi/v1/mod`)),
					method: o.ob.GET
				});
			const x = (e, t, r, n) => Object(p.a)(Object(h.a)(e, [f.a]), {
					endpoint: `${e.apiUrl}/api/filter/user/${t}/f/mod/${Object(_.d)(r)}`,
					method: n ? o.ob.PUT : o.ob.DELETE,
					data: {
						model: JSON.stringify({
							name: Object(_.j)(r)
						})
					}
				}),
				O = (e, t, r) => x(e, t, r, !0),
				E = (e, t, r) => x(e, t, r, !1);
			var S = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				j = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				I = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				C = r("./src/reddit/helpers/trackers/screenview.ts"),
				L = r("./src/reddit/models/Toast/index.ts"),
				P = r("./src/reddit/routes/modListing/index.ts"),
				k = r("./src/reddit/selectors/user.ts"),
				M = r("./src/reddit/actions/pages/modListing/constants.ts");
			const T = Object(d.a)(M.f),
				N = Object(d.a)(M.e),
				w = Object(d.a)(M.d),
				R = (e, t) => async (r, s, i) => {
					const o = s();
					if (o.listings.postOrder.api.pending[e]) return;
					r(T({
						key: e
					}));
					const d = await Object(I.a)("modListing", () => v(i.apiContext(), t)),
						a = `error-${e}`;
					d.ok ? (r(N({
						key: e,
						meta: o.meta,
						...d.body
					})), r(u.g(a))) : (r(w({
						error: d.error,
						key: e,
						...d.body
					})), 401 === d.status ? Object(j.a)(r, o) : r(u.f({
						id: a,
						kind: L.b.Error,
						text: n.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: R(e, t)
					})))
				}, F = (e, t) => async (r, s) => {
					const {
						sort: d = o.cb
					} = e.params, u = Object(P.d)(e.path), b = u ? l.f : l.e, p = Object(a.a)(b, d, e.queryParams), h = s(), f = h.listings.postOrder.ids[p], g = h.listings.postOrder.api.error[p];
					if (h.listings.postOrder.api.pending[p] || f && !g && !t) return void(f && r(c.m({
						title: n.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})));
					const _ = D(e.queryParams);
					await r(R(p, {
						...i()(e.queryParams, m.q),
						...i()(e.queryParams, m.p),
						filtered: !!u || void 0,
						moderated_srs: !0,
						sort: d,
						t: Object(S.a)(d, _)
					})), r(c.m({
						title: n.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})), Object(C.h)(s(), !0)
				}, A = Object(d.a)(M.i), G = Object(d.a)(M.h), H = Object(d.a)(M.g), B = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					const d = r(),
						c = d.platform.currentPage;
					if (!c) return;
					const {
						sort: u = o.cb
					} = e, b = c.queryParams, p = Object(P.d)(c.url), h = p ? l.f : l.e, f = Object(a.a)(h, u, b), g = d.listings.postOrder.loadMore[f];
					if (!g) return;
					const _ = d.listings.postOrder.api.pending[f],
						y = d.listings.postOrder.fetchedTokens,
						x = !(!y[f] || !y[f][g.token]);
					if (_ || x) return;
					const O = D(b);
					t(A({
						key: f,
						fetchedToken: g.token
					}));
					const E = await v(s(), {
							after: g.token,
							dist: g.dist,
							filtered: !!p || void 0,
							sort: u,
							t: Object(S.a)(u, O),
							...i()(b, m.q)
						}),
						j = d.listings.postOrder.ids[f],
						I = {
							...E.body,
							postIds: (E.body.postIds || []).filter(e => !j || !j.includes(e))
						};
					E.ok ? t(G({
						key: f,
						fetchedToken: g.token,
						meta: d.meta,
						...I
					})) : t(H({
						key: f,
						error: E.error,
						fetchedToken: g.token,
						...I
					}))
				};

			function D(e) {
				const t = m.O in e && e[m.O].toUpperCase() || "";
				return t in o.oc && o.oc[t]
			}
			const V = Object(d.a)(M.c),
				q = Object(d.a)(M.b),
				K = Object(d.a)(M.a),
				U = Object(d.a)(M.l),
				J = Object(d.a)(M.k),
				Q = Object(d.a)(M.j),
				Y = (e, t) => async (r, n, s) => {
					let {
						apiContext: i
					} = s;
					const o = n(),
						d = Object(k.l)(o),
						[a, c, u, l] = t ? [q, V, K, O] : [J, U, Q, E];
					if (!d || !d.displayText) return;
					const {
						currentPage: m
					} = o.platform;
					if (!m || !m.routeMatch) return;
					r(a(e));
					const b = await l(i(), d.displayText, e);
					b.ok ? (await r(F(m.routeMatch.match, !0)), r(c(e))) : r(u(b.body))
				}, X = e => Y(e, !0), z = e => Y(e, !1)
		},
		"./src/reddit/actions/postList.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return c
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = (r("./src/reddit/actions/embedAndImage.ts"), r("./src/reddit/actions/video.ts"), r("./src/reddit/helpers/trackers/postList.ts"));
			r("./src/reddit/constants/postLayout.ts"), r("./src/reddit/models/Media/index.ts"), r("./src/reddit/selectors/platform.ts"), r("./src/reddit/selectors/posts.ts");
			r("./src/reddit/selectors/video.ts");
			const i = "POSTLIST__MARKED_END",
				o = "POSTLIST__UNMARKED_END",
				d = Object(n.a)(i),
				a = Object(n.a)(o),
				c = (e, t) => async (r, n) => {
					const i = n();
					e in i.listings.postOrder.fetchedTokens ? e in i.listings.postOrder.ids ? r(a({
						listingKey: e
					})) : s.l(i, e) : r(d({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/recapGame.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "RECAP__GAME_TOGGLED", (function() {
				return c
			})), r.d(t, "RECAP__GAME_START", (function() {
				return u
			})), r.d(t, "RECAP__GAME_CLOSE", (function() {
				return l
			})), r.d(t, "RECAP__SET_ORIGINAL_NIGHT_MODE", (function() {
				return m
			})), r.d(t, "recapGameToggleAction", (function() {
				return b
			})), r.d(t, "recapGameStartAction", (function() {
				return p
			})), r.d(t, "recapGameCloseAction", (function() {
				return h
			})), r.d(t, "recapGameSetOriginalNightModeAction", (function() {
				return f
			})), r.d(t, "recapGameToggle", (function() {
				return g
			})), r.d(t, "recapGameClose", (function() {
				return _
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/preferences.ts"),
				o = r("./src/reddit/reducers/features/recapGame/index.ts"),
				d = r("./src/reddit/selectors/experiments/recapLeadUpGame.ts"),
				a = r("./src/reddit/selectors/recapGame.ts");
			Object(n.a)({
				features: {
					recapGame: o.b
				}
			});
			const c = "RECAP__GAME_TOGGLED",
				u = "RECAP__GAME_START",
				l = "RECAP__GAME_CLOSE",
				m = "RECAP__SET_ORIGINAL_NIGHT_MODE",
				b = Object(s.a)(c),
				p = Object(s.a)(u),
				h = Object(s.a)(l),
				f = Object(s.a)(m),
				g = () => async (e, t) => {
					const r = t(),
						n = r.platform.currentPage,
						s = Object(d.b)(r),
						i = Object(d.a)(r, {
							pageLayer: n
						});
					(s || i) && e(b())
				}, _ = () => async (e, t) => {
					const r = Object(a.a)(t());
					e(h()), e(Object(i.A)({
						nightmode: r.isNightModeOriginal
					}))
				}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(n.a)({
				resolved: {},
				chunkName: () => "CommunityTopicSurvey",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: async () => r.e("CommunityTopicSurvey").then(r.bind(null, "./src/reddit/components/CommunityTopicSurvey/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/CommunityTopicSurvey/index.tsx"
				}
			});
			t.a = s
		},
		"./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/config.ts"),
				o = r("./src/reddit/components/ContentSurvey/index.m.less"),
				d = r.n(o),
				a = r("./src/reddit/helpers/trackers/contentTag.ts"),
				c = r("./src/reddit/hooks/useTracking.ts"),
				u = r("./src/reddit/icons/fonts/index.tsx"),
				l = r("./src/reddit/components/ContentSurvey/SurveyModal.tsx");
			const {
				fbt: m
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function b(e) {
				let {
					survey: t,
					subredditId: r
				} = e;
				const [o, b] = Object(n.useState)(!1), p = Object(c.a)();
				return Object(n.useEffect)(() => p(Object(a.h)()), [p]), s.a.createElement("div", {
					className: d.a.feedBanner,
					onClick: function() {
						b(!0), p(Object(a.g)())
					}
				}, s.a.createElement("div", {
					className: d.a.notepadSnoo
				}, s.a.createElement("img", {
					src: `${i.a.assetPath}/img/snoovatar-notepad.png`
				})), s.a.createElement("div", {
					className: d.a.bannerCopy
				}, s.a.createElement("p", {
					className: d.a.copy
				}, m._("Set up this community’s content tag", null, {
					hk: "3ssqQf"
				})), s.a.createElement("p", {
					className: d.a.meta
				}, m._("Take a quick survey to help people know what to expect when they visit this community", null, {
					hk: "3sUbRf"
				}))), s.a.createElement(u.a, {
					name: "caret_right",
					className: d.a.chevron
				}), o && s.a.createElement(l.a, {
					withOverlay: !0,
					subredditId: r,
					survey: t,
					onClose: () => b(!1)
				}))
			}
		},
		"./src/reddit/components/ContentSurvey/SurveyModal.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./src/higherOrderComponents/asModal/index.tsx");
			const i = Object(n.a)({
					resolved: {},
					chunkName: () => "",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => Promise.all([r.e(0), r.e(1)]).then(r.bind(null, "./src/reddit/components/ContentSurvey/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/ContentSurvey/index.tsx"
					}
				}),
				o = Object(s.a)(i);
			t.a = o
		},
		"./src/reddit/components/ContentSurvey/index.m.less": function(e, t, r) {
			e.exports = {
				feedBanner: "_3oY2sjcQ7EgBYd7agqleJv",
				notepadSnoo: "B0cLCCVs794x74kjJidDO",
				bannerCopy: "_2NfcId0Mtt4-NP4AbrAck5",
				copy: "BcSr5zM39F4cQJ9MQqkRn",
				meta: "r9AkMaLWOPKfC5Swx9XQf",
				chevron: "yFbNzMMxa-u2DgUP3Gz5h",
				header: "wKkshJ3Og8gaDgJmSULiK",
				introCopy: "m3rT-KnA6An7scRNg10UW",
				checkbox: "Y5aDAUsXXQaMbdCe1-qdG",
				result: "_29ewfEVekvKEl_P2hqf4tI",
				heading: "_3yKTUBG4MrGHv9n644t4Ua",
				card: "_18VT-IpGoX6SDdyHHLI_eo",
				pending: "hg80uiMz2ssH44RLsmlhG",
				infoIcon: "_3HgNBpJCFAy2mohcd9VxmZ",
				banner: "_23eBsXSECZlQ3Eh-zXhEbC",
				communityIcon: "_2Z8cRxGvjX2hQUlQK_VEOE",
				communityName: "_1sHP__xe_7iTbSpLKp7FeC",
				ratingImg: "UZWqo3i6ydUcE18iJqx3P",
				ratingAudience: "_1Y5aAemcMRF3uwSgYpqbsT",
				ratingDescription: "_1e5wHYsIyWJlZSjZCHhBKg",
				reasonsHeader: "_1npcgCYHbRcUsU6KOI7ony",
				reason: "_3rlzPcuZsxLsVx6ib3oBjk"
			}
		},
		"./src/reddit/components/EmptySubreddit.m.less": function(e, t, r) {
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
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/upperFirst.js"),
				i = r.n(s),
				o = r("./node_modules/react/index.js"),
				d = r.n(o),
				a = r("./src/config.ts"),
				c = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/isFakeSubreddit/index.ts"),
				l = r("./src/reddit/constants/postLayout.ts"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				b = r("./src/reddit/components/PostList/Placeholder.tsx"),
				p = r("./src/reddit/components/EmptySubreddit.m.less"),
				h = r.n(p),
				f = r("./src/lib/classNames/index.ts"),
				g = r("./src/lib/lessComponent.tsx"),
				_ = r("./src/reddit/pages/Subreddit/SurveyUnit.tsx");
			const y = g.a.wrapped(b.a, "BackgroundPlaceholder", h.a),
				v = g.a.wrapped(m.n, "SubmitLink", h.a),
				x = e => {
					switch (e) {
						case c.bb.RISING:
							return n.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case c.bb.TOP:
						case c.bb.CONTROVERSIAL:
							return null;
						default:
							return n.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				O = e => {
					let {
						listingName: t,
						sort: r
					} = e;
					const s = x(r);
					return d.a.createElement("div", {
						className: h.a.MainContent
					}, d.a.createElement("div", {
						className: h.a.PrimaryText
					}, (e => {
						switch (e) {
							case c.bb.RISING:
								return n.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case c.bb.TOP:
							case c.bb.CONTROVERSIAL:
								return n.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [n.fbt._param("listing sort option", i()(e))], {
									hk: "48BeCW"
								});
							default:
								return n.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(r)), t && !Object(u.a)(t) && !!s && d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
						className: h.a.SecondaryText
					}, x(r)), d.a.createElement(v, {
						to: `/r/${t}/submit`
					}, n.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				E = () => d.a.createElement("div", {
					className: h.a.MainContent
				}, d.a.createElement("img", {
					className: h.a.SnooImg,
					src: `${a.a.assetPath}/img/snoo_discovery@1x.png`
				}), d.a.createElement("div", {
					className: h.a.PrimaryText
				}, n.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), d.a.createElement(v, {
					to: "/r/popular"
				}, n.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = e => d.a.createElement(d.a.Fragment, null, e.subreddit && d.a.createElement(_.a, {
				subredditId: e.subreddit.id,
				subredditSubscribers: e.subreddit.subscribers
			}), d.a.createElement("div", {
				"data-testid": "empty-subreddit",
				className: Object(f.a)(h.a.Component, h.a.EmptyHomepage)
			}, d.a.createElement(y, {
				isLoading: !1,
				layout: l.g.Classic
			}), d.a.createElement("div", {
				className: h.a.MainContentWrapper
			}, e.subreddit ? d.a.createElement(O, e) : d.a.createElement(E, null))))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/components/PostList/index.tsx"),
				s = r("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(s.a)(n.a)
		},
		"./src/reddit/components/ModHub/Content/NoPermissions.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./node_modules/react/index.js"),
				o = r.n(i),
				d = r("./src/reddit/contexts/NavbarExp.ts"),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/ModHub/Content/index.m.less"),
				u = r.n(c);
			t.a = e => {
				const t = Object(i.useContext)(d.a);
				return o.a.createElement("div", {
					className: Object(a.a)(u.a.noPermissions, {
						[u.a.noPermissionsExp]: t
					})
				}, o.a.createElement("img", {
					className: u.a.rememberTheHuman,
					src: `${n.a.assetPath}/img/content-gate-icons/remember-the-human.png`
				}), e.isModerator ? s.fbt._("Sorry, you do not have the moderator permissions needed to view this page", null, {
					hk: "4wUDIF"
				}) : s.fbt._("Sorry, this is a moderator-only page", null, {
					hk: "2BZEIA"
				}), o.a.createElement("div", {
					className: u.a.noPermissionsSmallText
				}, e.isModerator ? s.fbt._("You need to change your mod permissions to view this page", null, {
					hk: "RS9sd"
				}) : e.subredditDisplayText ? s.fbt._("You must be a moderator of {subredditName} to view this page", [s.fbt._param("subredditName", e.subredditDisplayText)], {
					hk: "8eU68"
				}) : s.fbt._("You must be a moderator to view this page", null, {
					hk: "2N7TXH"
				})))
			}
		},
		"./src/reddit/components/ModHub/Content/index.m.less": function(e, t, r) {
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
				bodyFontH6Small: "mhRrYXj7dAprAm-wE7DdO",
				bodyFont: "_38q9ZzND20FKMoX8BeB0u8",
				bodyFontSmall: "_1tFfFAHeLftmld2a2M4yIs",
				bodyFontMono: "_1N1SJCd40K_9LeW3MSWULf",
				landingPageTitleFontH1: "_188OUQdkNVSC4VoI3use3H",
				landingPageTitleFontH2: "_1Nsrmd1KvVz-41wIUPMJMp",
				landingPageTitleFontH3: "_2pcqzLgqwagTSQPKkGNO-q",
				rememberTheHuman: "_2S6IM2TPtTriI4r_2Op1Od",
				noPermissions: "_3jaCG74Q3u55JqGJy3u664",
				noPermissionsExp: "_30KCF1VJPMgbkHOfEhoE2p",
				noPermissionsSmallText: "_1Kxv5kLQoEOhRatEhltXrQ",
				container: "_3gsyCuYXsGWEEgPSTuX9aw",
				isLargePostLayout: "_1WGjuBpIEjcQC-x3_lE_Nu",
				titleContainer: "_2SyYApGPPZkM6bG9SnSk1k",
				modActivity: "zsQHq8K9sST2NCbphllOm"
			}
		},
		"./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less": function(e, t, r) {
			e.exports = {
				input: "_3w9CCp15Dn8xjuhR8VUE5n",
				hideButton: "_34rIurg3vPxO_tswAxt4wf",
				errorText: "dHzfi1tqA9d2uJEemybvK"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less": function(e, t, r) {
			e.exports = {
				rows: "_1q1k1QSwlFELkqmvELqzPI",
				noRows: "_2bMntgRcO2XGi6Tfep4QfV"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_25Nja5fbb_ZBbGBf8Bm2jO",
				hideCommunitiesHeader: "_2UuftU5L-0PE5_qTvLLSuB",
				inputContainer: "_16VxD_GKhjj0Mvr4ayqcAO",
				tertiaryButton: "_3KQk5TlvMCuZJm3Xc1Mk6L"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less": function(e, t, r) {
			e.exports = {
				SubredditIcon: "YsExfuojv3MEBi8M0sQGM",
				subredditIcon: "YsExfuojv3MEBi8M0sQGM",
				Label: "-KyE0niKrEy2RqEuYXENt",
				label: "-KyE0niKrEy2RqEuYXENt"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less": function(e, t, r) {
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
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return S
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = r("./src/reddit/controls/Button/index.tsx"),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				u = r("./src/reddit/components/SubredditIcon/index.tsx"),
				l = r("./src/reddit/selectors/subreddit.ts"),
				m = r("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				b = r.n(m),
				p = r("./src/lib/lessComponent.tsx");
			const h = p.a.wrapped(u.b, "SubredditIcon", b.a),
				f = p.a.span("Label", b.a),
				g = Object(c.c)({
					subredditOrProfile: l.Q
				});
			var _ = Object(a.b)(g)(e => {
				let {
					children: t,
					subredditOrProfile: r
				} = e;
				return t(r, i.a.createElement(i.a.Fragment, null, i.a.createElement(h, {
					subredditOrProfile: r
				}), i.a.createElement(f, null, r.displayText)))
			});
			var y = e => {
					let {
						children: t,
						className: r,
						subredditsOrProfilesIds: n
					} = e;
					const s = n.map(e => i.a.createElement(_, {
						children: t,
						key: e.id,
						identifier: e
					}));
					return i.a.createElement("div", {
						className: r
					}, s)
				},
				v = r("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				x = r.n(v);
			const O = p.a.div("CommunityCount", x.a),
				E = p.a.wrapped(y, "SubredditsOrProfiles", x.a),
				S = p.a.wrapped(o.a, "SidebarSubreddit", x.a),
				j = p.a.wrapped(o.a, "ModalSubreddit", x.a);
			var I;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(I || (I = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: r,
					onSeeMoreDetails: s,
					subredditCategory: o = {
						name: n.fbt._("multi", null, {
							hk: "28Z7Rp"
						})
					}
				} = e, a = t ? S : j, c = r.length, u = t && r.length > 4;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(O, null, n.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [n.fbt._plural(c, "number"), n.fbt._param("category", o.name)], {
					hk: "33iWe4"
				})), c > 0 && i.a.createElement(E, {
					subredditsOrProfilesIds: t ? r.slice(0, 4) : r
				}, (t, r) => i.a.createElement(a, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, r)), c > 0 && u && i.a.createElement(d.r, {
					onClick: s
				}, n.fbt._("See more", null, {
					hk: "QYkk2"
				})))
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return E
			})), r.d(t, "d", (function() {
				return j
			})), r.d(t, "b", (function() {
				return C
			}));
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/objectSelector/index.ts"),
				o = r("./src/reddit/actions/ads/index.ts"),
				d = r("./src/reddit/actions/focusedVerticals/index.ts"),
				a = r("./src/reddit/actions/gold/tooltips.ts"),
				c = r("./src/reddit/actions/post.ts"),
				u = r("./src/reddit/actions/postList.ts"),
				l = r("./src/reddit/actions/survey/index.ts"),
				m = r("./src/reddit/components/TrackingHelper/index.tsx"),
				b = r("./src/reddit/contexts/PageLayer/index.tsx"),
				p = r("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = r("./src/reddit/helpers/trackers/post.ts"),
				f = r("./src/reddit/components/PostList/Placeholder.tsx"),
				g = r("./src/reddit/featureFlags/index.ts"),
				_ = r("./src/reddit/selectors/experiments/survey.ts"),
				y = r("./src/reddit/selectors/listings.ts"),
				v = r("./src/reddit/selectors/posts.ts"),
				x = r("./src/reddit/selectors/subreddit.ts"),
				O = r("./src/reddit/selectors/tracking.ts");

			function E() {
				return Object(b.v)({
					currentProfileName: b.j,
					isCommentPermalink: b.x,
					isCommentsPage: b.y,
					isFrontpage: b.B,
					isProfilePostListing: b.N,
					isTopicPage: b.T,
					pageLayer: e => e
				})
			}
			const S = E(),
				j = {
					apiError: y.c,
					apiPending: y.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(b.U)(e, t),
					loadMore: y.g,
					postsById: v.T,
					postIds: Object(i.a)((e, t) => {
						let {
							listingKey: r,
							listingName: n,
							inSubredditOrProfile: s
						} = t;
						return Object(v.D)(e, r, n, s)
					}),
					subredditsById: x.fb,
					viewportDataLoaded: O.a,
					pageReferrer: b.X,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: _.e
				},
				I = Object(s.c)(j),
				C = e => ({
					onBottomViewed: (t, r) => e(u.c(t, r)),
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
					fireAdPixelsOfType: (t, r) => {
						e(c.y(t, r))
					},
					trackOnPostEnteredViewport: (t, r, n, s) => {
						e(c.N(t, n, s))
					},
					trackOnPostExitedViewport: (t, r, n, s) => {
						e(c.O(t, n, s))
					},
					showModalOnScroll: () => e(c.bb()),
					surveyTriggerScrollCounted: () => e(Object(l.m)())
				}),
				L = e => Object(p.b)({
					...e
				}),
				P = (e, t, r, n) => {
					const {
						listingKey: s,
						hostPostData: i,
						listingBelowVariant: o
					} = n;
					return Object(h.k)(e, t, "post", s, i, o, void 0)
				},
				k = Object(n.b)(I, C, (e, t, r) => ({
					...e,
					...t,
					...r,
					postComponentForLayout: L,
					postClickEventFactory: P
				}));
			t.a = e => Object(m.c)(S(k(e)))
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/brcast/dist/brcast.es.js");
			const s = Object(n.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/trackers/contentTag.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return n
			})), r.d(t, "g", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "l", (function() {
				return o
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "j", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "i", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "n", (function() {
				return m
			})), r.d(t, "m", (function() {
				return b
			})), r.d(t, "k", (function() {
				return p
			})), r.d(t, "o", (function() {
				return h
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "d", (function() {
				return g
			}));
			const n = () => () => ({
					source: "content_tag",
					action: "view",
					noun: "verify_topics_module"
				}),
				s = () => () => ({
					source: "content_tag",
					action: "click",
					noun: "verify_topics_module"
				}),
				i = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_intro",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				o = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "start",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				d = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "mature_themes_prompt",
					actionInfo: {
						pageType: "survey_mature_themes"
					}
				}),
				a = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: e,
					actionInfo: {
						pageType: e
					}
				}),
				c = e => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "survey_answer",
					actionInfo: {
						pageType: e
					}
				}),
				u = (e, t) => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "next",
					actionInfo: {
						reason: t.join(),
						pageType: e
					}
				}),
				l = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "back",
					actionInfo: {
						pageType: e
					}
				}),
				m = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_rating_summary",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				b = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "submit_survey",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				p = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_rating_review",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				h = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "take_survey",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				f = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "message_modsupport",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				g = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "learn_more",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				})
		},
		"./src/reddit/helpers/trackers/modListing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return a
			}));
			var n = r("./src/reddit/selectors/telemetry.ts");
			const s = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				i = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				o = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				}),
				d = (e, t) => r => ({
					source: "moderator",
					action: "view",
					noun: "activemod_details",
					...Object(n.o)(r),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: e ? "general_queue" : "community"
					},
					subreddit: {
						name: t.toLowerCase(),
						...Object(n.mb)(r, t)
					}
				}),
				a = (e, t, r) => s => ({
					source: "moderator",
					action: "click",
					noun: "subreddit_filter",
					...Object(n.o)(s),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: r ? "activity_card" : "queue_filters",
						reason: e ? "active" : "inactive"
					},
					subreddit: {
						name: t.toLowerCase(),
						...Object(n.mb)(s, t)
					}
				})
		},
		"./src/reddit/icons/fonts/Clear/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: Object(i.a)(Object(o.b)("clear", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/reddit/constants/colors.ts");
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
				fill: e.isUnread ? i.a.orangered : "none"
			}))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, r) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/layout/row/Inline/index.m.less"),
				i = r.n(s);
			t.a = n.a.div("inlineRow", i.a)
		},
		"./src/reddit/pages/ModListing/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/lodash/fromPairs.js"),
				s = r.n(n),
				i = r("./node_modules/react/index.js"),
				o = r.n(i),
				d = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/extractQueryParams/index.ts"),
				l = r("./src/lib/makeListingKey/index.ts"),
				m = r("./src/reddit/actions/pages/modListing/index.ts"),
				b = r("./src/reddit/components/EmptySubreddit.tsx"),
				p = r("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				h = r("./src/reddit/components/JumpToContent/index.tsx"),
				f = r("./src/reddit/components/ListingPostList/index.tsx"),
				g = r("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				_ = r("./node_modules/fbt/lib/FbtPublic.js"),
				y = r("./src/higherOrderComponents/asModal/index.tsx"),
				v = r("./src/reddit/actions/modal.ts"),
				x = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				O = r("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				E = r("./src/reddit/controls/TextButton/index.tsx"),
				S = r("./src/reddit/icons/svgs/Moderate/index.tsx"),
				j = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				I = r("./src/reddit/selectors/activeModalId.ts"),
				C = r("./src/reddit/selectors/modQueue.ts"),
				L = r("./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less"),
				P = r.n(L);
			const {
				fbt: k
			} = r("./node_modules/fbt/lib/FbtPublic.js"), M = Object(y.a)(e => o.a.createElement(x.e, {
				className: P.a.modalBody
			}, o.a.createElement(x.i, null, o.a.createElement(j.a, null, o.a.createElement(x.q, {
				className: P.a.modalTitle
			}, o.a.createElement(S.a, {
				className: P.a.modIcon
			}), k._("r/Mod", null, {
				hk: "2a9ICx"
			})), o.a.createElement(E.a, {
				onClick: e.onCloseModal
			}, o.a.createElement(x.b, null)))), o.a.createElement(x.l, {
				className: P.a.modalMain
			}, o.a.createElement("div", {
				className: P.a.modalDescription
			}, k._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), o.a.createElement(O.b, {
				isSidebar: !1,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			})))), T = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
				className: P.a.feedDetailsTitle
			}, o.a.createElement(S.a, {
				className: P.a.modIcon
			}), k._("r/Mod", null, {
				hk: "2a9ICx"
			})), o.a.createElement("div", {
				className: P.a.feedDetailsDescription
			}, k._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), e.moderatedCommunitiesIds.length ? o.a.createElement(O.b, {
				isSidebar: !0,
				onSeeMoreDetails: e.onSeeMoreDetails,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			}) : o.a.createElement("div", {
				className: P.a.loadingBar
			})), N = Object(a.c)({
				isModalOpen: Object(I.b)("MOD_LISTING_FEED_DETAILS_MODAL_ID"),
				moderatedCommunitiesIds: C.h
			});
			var w = Object(d.b)(N, (e, t) => {
					let {} = t;
					return {
						toggleModal: () => e(Object(v.i)("MOD_LISTING_FEED_DETAILS_MODAL_ID"))
					}
				})(e => {
					const {
						isModalOpen: t,
						moderatedCommunitiesIds: r,
						toggleModal: n
					} = e;
					return r ? o.a.createElement(o.a.Fragment, null, o.a.createElement(T, {
						moderatedCommunitiesIds: r,
						onSeeMoreDetails: n
					}), t && o.a.createElement(M, {
						moderatedCommunitiesIds: r,
						onCloseModal: n,
						onOverlayClick: n,
						withOverlay: !0
					})) : null
				}),
				R = r("./node_modules/react-router-redux/es/index.js"),
				F = r("./src/reddit/components/TrackingHelper/index.tsx"),
				A = r("./src/reddit/contexts/PageLayer/index.tsx"),
				G = r("./src/reddit/controls/Button/index.tsx"),
				H = r("./src/reddit/helpers/trackers/modListing.ts"),
				B = r("./src/reddit/routes/modListing/index.ts");
			const D = e => e.modListingPage.filteredSubreddits.api.pending;
			var V = r("./src/reddit/constants/keycodes.ts"),
				q = r("./src/reddit/layout/row/Inline/index.tsx"),
				K = r("./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less"),
				U = r.n(K);
			const J = Object(a.c)({
				apiError: e => e.modListingPage.filteredSubreddits.api.error,
				isApiPending: D
			});
			class Q extends o.a.Component {
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
						this.canSubmitInput() && (this.props.sendEvent(Object(H.d)()), this.props.hide(this.state.subredditInput), this.clearSubredditInput())
					}, this.onChange = e => {
						this.setSubredditInput(e.target.value)
					}, this.onKeyPress = e => {
						e.key === V.b.Enter && this.submitInput()
					}, this.canSubmitInput = () => this.state.subredditInput && !this.props.isApiPending
				}
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(q.a, null, o.a.createElement("input", {
						className: U.a.input,
						onChange: this.onChange,
						onKeyPress: this.onKeyPress,
						placeholder: _.fbt._("r/community", null, {
							hk: "4ceDB9"
						}),
						value: this.state.subredditInput
					}), o.a.createElement(G.l, {
						"aria-label": _.fbt._("Hide", null, {
							hk: "1BnFmX"
						}),
						className: U.a.hideButton,
						disabled: !this.canSubmitInput(),
						onClick: this.submitInput
					}, _.fbt._("Hide", null, {
						hk: "1BnFmX"
					}))), e.apiError && e.apiError.explanation && o.a.createElement("div", {
						className: U.a.errorText
					}, e.apiError.explanation))
				}
			}
			var Y = Object(d.b)(J, e => ({
					hide: t => e(Object(m.hideSubreddit)(t))
				}))(Object(F.c)(Q)),
				X = r("./src/lib/lessComponent.tsx"),
				z = r("./src/reddit/components/SubredditIcon/index.tsx"),
				Z = r("./src/reddit/icons/fonts/Clear/index.tsx"),
				W = r("./src/reddit/selectors/profile.ts"),
				$ = r("./src/reddit/selectors/subreddit.ts"),
				ee = r("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less"),
				te = r.n(ee);
			const re = X.a.wrapped(z.b, "SubredditIcon", te.a),
				ne = Object(a.c)({
					isApiPending: D,
					subredditOrProfile: (e, t) => {
						const r = Object($.C)(e, {
							subredditName: t.subredditName
						});
						if (!r) {
							const r = (e => e.startsWith(c.qc) ? e.slice(2) : e)(t.subredditName);
							return r && Object(W.k)(e, {
								profileName: r
							}) || null
						}
						return r
					}
				});
			class se extends o.a.Component {
				constructor() {
					super(...arguments), this.onClickUnhideSubreddit = e => {
						e.stopPropagation(), e.preventDefault(), this.props.subredditOrProfile && (this.props.sendEvent(Object(H.e)()), this.props.unhide(this.props.subredditName))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.subredditOrProfile ? o.a.createElement(O.a, {
						className: te.a.row,
						to: e.subredditOrProfile.url
					}, o.a.createElement(re, {
						subredditOrProfile: e.subredditOrProfile
					}), o.a.createElement("span", {
						className: te.a.label
					}, e.subredditOrProfile.displayText), !e.isApiPending && o.a.createElement("button", {
						"aria-label": _.fbt._("Unhide", null, {
							hk: "2sCv0O"
						}),
						className: te.a.unhideButton,
						onClick: this.onClickUnhideSubreddit
					}, o.a.createElement(Z.a, null))) : null
				}
			}
			var ie = Object(d.b)(ne, e => ({
					unhide: t => e(Object(m.unhideSubreddit)(t))
				}))(Object(F.c)(se)),
				oe = r("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less"),
				de = r.n(oe);
			const {
				fbt: ae
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var ce = e => {
					let {
						hiddenSubredditsNames: t
					} = e;
					const r = t.map(e => o.a.createElement(ie, {
						key: e,
						subredditName: e
					}));
					return o.a.createElement(o.a.Fragment, null, t.length ? o.a.createElement("div", {
						className: de.a.rows
					}, r) : o.a.createElement("div", {
						className: de.a.noRows
					}, ae._("Viewing all communities", null, {
						hk: "4p9SL8"
					})))
				},
				ue = r("./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less"),
				le = r.n(ue);
			const {
				fbt: me
			} = r("./node_modules/fbt/lib/FbtPublic.js"), be = Object(A.v)({
				filtered: e => !!e && Object(B.d)(e.url)
			}), pe = Object(a.c)({
				hiddenSubredditsNames: e => e.modListingPage.filteredSubreddits.names
			});
			class he extends o.a.Component {
				constructor() {
					super(...arguments), this.onToggleFiltered = () => {
						this.props.sendEvent(Object(H.c)(this.props.filtered)), this.props.toggleFiltered()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement("div", {
						className: le.a.container
					}, o.a.createElement("div", {
						className: le.a.hideCommunitiesHeader
					}, me._("Hide communities", null, {
						hk: "15OtHo"
					})), o.a.createElement(G.r, {
						className: le.a.tertiaryButton,
						onClick: this.onToggleFiltered
					}, e.filtered ? me._("Go to unfiltered r/Mods", null, {
						hk: "2RGhxF"
					}) : me._("Go to filtered r/Mod", null, {
						hk: "YdVw7"
					})), e.filtered && o.a.createElement("div", {
						className: le.a.inputContainer
					}, o.a.createElement(Y, null), o.a.createElement(ce, {
						hiddenSubredditsNames: e.hiddenSubredditsNames
					})))
				}
			}
			var fe = be(Object(d.b)(pe, (e, t) => {
					let {
						filtered: r
					} = t;
					return {
						toggleFiltered: () => e(Object(R.b)(r ? B.a : B.b))
					}
				})(Object(F.c)(he))),
				ge = r("./src/reddit/components/SidebarContainer/index.tsx"),
				_e = r("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				ye = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx");
			var ve = () => o.a.createElement(ge.a, null, o.a.createElement(ye.a, {
					title: _.fbt._("Feed details", null, {
						hk: "3JlrpB"
					})
				}, o.a.createElement(w, null), o.a.createElement(fe, null)), o.a.createElement(_e.a, null)),
				xe = r("./src/reddit/constants/page.ts"),
				Oe = r("./src/reddit/constants/parameters.ts"),
				Ee = r("./src/reddit/helpers/trackers/screenview.ts"),
				Se = r("./src/reddit/layout/page/Listing/index.tsx"),
				je = r("./src/reddit/selectors/moderatorPermissions.ts");
			const Ie = Object(a.a)((e, t) => {
					let {
						location: r
					} = t;
					return r.search
				}, (e, t) => {
					let {
						match: r
					} = t;
					return r.params.sort || c.bb.HOT
				}, (e, t) => {
					let {
						match: r
					} = t;
					return Object(B.d)(r.path)
				}, je.k, je.d, (e, t, r, n, i) => {
					const o = s()([...Object(u.a)(e)]),
						d = Oe.O in o && o[Oe.O].toUpperCase(),
						a = "string" == typeof d && d in c.oc ? c.oc[d] : c.pc,
						m = r ? xe.f : xe.e;
					return {
						filtered: r,
						isModerator: n,
						isModeratorWithPostPerms: i,
						listingKey: Object(l.a)(m, t, o),
						listingName: m,
						sort: t,
						timeSort: a
					}
				}),
				Ce = Object(d.b)(Ie, (e, t) => ({
					onLoadMorePosts: () => e(m.moreModListingRequested({
						sort: t.match.params.sort
					}))
				}));
			class Le extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onViewed = (e, t) => Object(Ee.f)({
						key: this.props.listingKey,
						sort: this.props.sort,
						timerType: t,
						timerMillis: e
					}), this.renderEmptySubreddit = () => o.a.createElement(b.a, {
						listingName: this.props.listingName,
						sort: this.props.sort
					})
				}
				render() {
					const e = this.props.filtered ? B.b : B.a;
					return o.a.createElement("div", null, this.props.isModeratorWithPostPerms ? o.a.createElement(Se.a, {
						className: this.props.className,
						fitPageToContent: !0,
						content: o.a.createElement(o.a.Fragment, null, o.a.createElement(p.a, {
							baseUrl: e,
							sort: this.props.sort,
							timeSort: this.props.timeSort
						}), o.a.createElement(h.a, null), o.a.createElement(f.a, {
							listingKey: this.props.listingKey,
							listingName: this.props.listingName,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderEmptySubreddit,
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: o.a.createElement(ve, null)
					}) : o.a.createElement(g.a, {
						isModerator: this.props.isModerator
					}))
				}
			}
			t.default = Ce(Le)
		},
		"./src/reddit/pages/Subreddit/SurveyUnit.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			}));
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/reddit/components/CommunityTopicSurvey/async.tsx"),
				a = r("./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx"),
				c = r("./src/reddit/constants/experiments.ts"),
				u = r("./src/reddit/constants/postLayout.ts"),
				l = r("./src/reddit/selectors/experiments/newCommunityProgressV3.ts");
			const m = Object(n.a)({
				resolved: {},
				chunkName: () => "NewCommunityProgress",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => Promise.all([r.e(0), r.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), r.e("NewCommunityProgress")]).then(r.bind(null, "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx"
				}
			});

			function b(e) {
				let {
					postLayout: t,
					subredditId: r,
					subredditSubscribers: n
				} = e;
				var s;
				const b = Object(o.e)(e => e.subreddits.survey[r]),
					p = Object(o.e)(e => e.subreddits.progressModule[r]),
					h = Object(o.e)(l.a),
					f = h !== c.Le.NewModule;
				return (null === (s = null == p ? void 0 : p.cards) || void 0 === s ? void 0 : s.length) > 0 && f ? i.a.createElement(m, {
					closeModuleOnMount: !!t && t !== u.g.Large,
					subredditId: r,
					progressModule: p
				}) : t !== u.g.Large ? null : (null == b ? void 0 : b.isEligible) && !(null == b ? void 0 : b.response) && (!h || h && n > 100) ? i.a.createElement(a.a, {
					subredditId: r,
					survey: b
				}) : i.a.createElement(d.a, {
					subredditId: r
				})
			}
		},
		"./src/reddit/reducers/features/recapGame/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/reddit/actions/recapGame.ts");
			const s = {
				recapGameState: "off",
				isNightModeOriginal: !1
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case n.RECAP__GAME_START:
						return {
							...e, recapGameState: "on"
						};
					case n.RECAP__GAME_TOGGLED:
						const r = "on" === e.recapGameState ? "off" : "on";
						return {
							...e, recapGameState: r
						};
					case n.RECAP__GAME_CLOSE:
						return {
							...e, recapGameState: "off"
						};
					case n.RECAP__SET_ORIGINAL_NIGHT_MODE:
						return {
							...e, isNightModeOriginal: t.payload
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const o = e => {
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: i.R,
						experimentName: n.pd
					});
					return !(!t || Object(n.qg)(t))
				},
				d = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: i.R,
						experimentName: n.pd
					}) === n.Nd.ListingEnabled
				}
		},
		"./src/reddit/selectors/experiments/recapLeadUpGame.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return u
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/contexts/PageLayer/index.tsx"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/user.ts"),
				d = r("./node_modules/reselect/es/index.js");
			const a = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: i.a,
						experimentName: n.lf
					}) === n.Jd
				},
				c = Object(d.a)(o.R, (e, t) => {
					let {
						pageLayer: r
					} = t;
					return Object(s.B)(r)
				}, (e, t) => !e && t),
				u = (e, t) => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: e => c(e, t),
						experimentName: n.mf
					}) === n.Jd
				}
		},
		"./src/reddit/selectors/recapGame.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/recapGame/index.ts");
			Object(n.a)({
				features: {
					recapGame: s.b
				}
			});
			const i = e => {
				var t;
				return (null === (t = e.features) || void 0 === t ? void 0 : t.recapGame) || s.a
			}
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"5398483b6e15"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing.89ff2ec8f016b4dd1b73.js.map