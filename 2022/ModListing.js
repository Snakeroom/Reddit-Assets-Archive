// https://www.redditstatic.com/desktop2x/ModListing.0fec842e9a26a7c3245e.js
// Retrieved at 12/13/2022, 5:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModListing"], {
		"./node_modules/classnames/index.js": function(e, t, n) {
			var r;
			! function() {
				"use strict";
				var n = {}.hasOwnProperty;

				function s() {
					for (var e = [], t = 0; t < arguments.length; t++) {
						var r = arguments[t];
						if (r) {
							var i = typeof r;
							if ("string" === i || "number" === i) e.push(r);
							else if (Array.isArray(r)) {
								if (r.length) {
									var o = s.apply(null, r);
									o && e.push(o)
								}
							} else if ("object" === i)
								if (r.toString === Object.prototype.toString)
									for (var d in r) n.call(r, d) && r[d] && e.push(d);
								else e.push(r.toString())
						}
					}
					return e.join(" ")
				}
				e.exports ? (s.default = s, e.exports = s) : void 0 === (r = function() {
					return s
				}.apply(t, [])) || (e.exports = r)
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
					var n = [];
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
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, n) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== n[t - 1]
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
							n = t ? this._getRootRect() : {
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
								u = t && a && this._computeTargetAndRootIntersection(i, n),
								l = s.entry = new r({
									time: e.performance && performance.now && performance.now(),
									target: i,
									boundingClientRect: o,
									rootBounds: n,
									intersectionRect: u
								});
							c ? t && a ? this._hasCrossedThreshold(c, l) && this._queuedEntries.push(l) : c && c.isIntersecting && this._queuedEntries.push(l) : this._queuedEntries.push(l)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, s.prototype._computeTargetAndRootIntersection = function(n, r) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var s, i, o, a, u, l, m, b, p = d(n), h = c(n), f = !1; !f;) {
								var g = null,
									_ = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == _.display) return;
								if (h == this.root || h == t ? (f = !0, g = r) : h != t.body && h != t.documentElement && "visible" != _.overflow && (g = d(h)), g && (s = g, i = p, o = void 0, a = void 0, u = void 0, l = void 0, m = void 0, b = void 0, o = Math.max(s.top, i.top), a = Math.min(s.bottom, i.bottom), u = Math.max(s.left, i.left), l = Math.min(s.right, i.right), b = a - o, !(p = (m = l - u) >= 0 && b >= 0 && {
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
							var n = t.documentElement,
								r = t.body;
							e = {
								top: 0,
								left: 0,
								right: n.clientWidth || r.clientWidth,
								width: n.clientWidth || r.clientWidth,
								bottom: n.clientHeight || r.clientHeight,
								height: n.clientHeight || r.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, s.prototype._expandRectByRootMargin = function(e) {
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
					}, s.prototype._hasCrossedThreshold = function(e, t) {
						var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (n !== r)
							for (var s = 0; s < this.thresholds.length; s++) {
								var i = this.thresholds[s];
								if (i == n || i == r || i < n != i < r) return !0
							}
					}, s.prototype._rootIsInDom = function() {
						return !this.root || a(t, this.root)
					}, s.prototype._rootContainsTarget = function(e) {
						return a(this.root || t, e)
					}, s.prototype._registerInstance = function() {
						n.indexOf(this) < 0 && n.push(this)
					}, s.prototype._unregisterInstance = function() {
						var e = n.indexOf(this); - 1 != e && n.splice(e, 1)
					}, e.IntersectionObserver = s, e.IntersectionObserverEntry = r
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
						n = t.width * t.height,
						r = this.intersectionRect,
						s = r.width * r.height;
					this.intersectionRatio = n ? s / n : this.isIntersecting ? 1 : 0
				}

				function s(e, t) {
					var n, r, s, i = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, s = null, function() {
						s || (s = setTimeout((function() {
							n(), s = null
						}), r))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function i(e, t, n, r) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
				}

				function o(e, t, n, r) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
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
		"./node_modules/lodash/times.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseTimes.js"),
				s = n("./node_modules/lodash/_castFunction.js"),
				i = n("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				d = 4294967295,
				a = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > o) return [];
				var n = d,
					c = a(e, d);
				t = s(t), e -= d;
				for (var u = r(c, t); ++n < e;) t(n);
				return u
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, n, r) {
				var s = n ? n.call(r, e, t) : void 0;
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
					if (!1 === (s = n ? n.call(r, u, l, c) : void 0) || void 0 === s && u !== l) return !1
				}
				return !0
			}
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "EMBEDS__UNLOADABLE",
				i = "EMBEDS__LOADABLE",
				o = Object(r.a)(s),
				d = Object(r.a)(i)
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return I
			})), n.d(t, "b", (function() {
				return M
			}));
			var r, s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/performanceTimings/index.tsx"),
				o = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(r || (r = {}));
			var c, u = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				l = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var m = n("./src/lib/objectSelector/index.ts"),
				b = n("./src/reddit/featureFlags/index.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/reddit/selectors/user.ts");
			const g = [],
				_ = (Object(m.a)((e, t) => {
					const n = _(e, t);
					if (!n) return g;
					const r = Object(h.cb)(e, {
						subredditName: n.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : g
				}), (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(h.Y)(e, {
						subredditId: n
					}) : null
				}),
				y = (e, t, n, r, s) => {
					const i = s.find(e => e <= t) || -1,
						o = s.find(e => e > t) || 1 / 0;
					return t !== o && t !== i && (!(i + n > t) && (!(t + n > o) && !((e, t, n) => {
						const r = n[t - 1],
							s = n[t],
							i = s && Object(p.G)(e, {
								postId: r
							}) || null,
							o = s && Object(p.G)(e, {
								postId: s
							}) || null;
						return i && i.isSponsored || o && o.isSponsored
					})(e, t, r)))
				},
				v = [3];
			Object(m.a)((e, t) => {
				let {
					existingDUPositions: n,
					listingProps: r
				} = t;
				const s = n.slice().sort();
				let i = -1;
				const o = Object(p.z)(e, {
						listingKey: r.listingKey
					}),
					d = [];
				return v.forEach(t => {
					let n = i + t;
					if (!(n >= o.length)) {
						for (; n < o.length && !y(e, n, t, o, s);) n += 1;
						n < o.length && (d.push(n), i = n)
					}
				}), d
			});
			var x = n("./src/reddit/selectors/platform.ts");
			const O = Object(s.a)(o.f),
				E = Object(s.a)(o.d),
				S = Object(s.a)(o.g),
				j = Object(s.a)(o.c),
				I = Object(s.a)(o.e),
				C = (Object(s.a)(o.i), Object(s.a)(o.h), () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const i = t(),
						o = (e => {
							return e.focusedVerticals.api.pending.focusedVerticalGqlPending
						})(i),
						c = (e => {
							const t = Object(f.R)(e),
								n = b.d.geoSubredditRecommendationDULoggedIn(e),
								r = b.d.geoSubredditRecommendationDULoggedOut(e);
							return t && n || !t && r
						})(i),
						m = Object(f.R)(i);
					if (o || !c) return;
					e(S());
					let p = !1;
					try {
						const t = m ? r.LoggedInGeo : r.LoggedOutGeo,
							n = await ((e, t, n) => Object(d.a)(e, {
								...a,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (k(t)) {
								if (L(t)) {
									e(j({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), p = !0
								} else if (P(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: s,
											category: i
										} = n.focusRecommendations[0],
										o = [r, s],
										d = Object(l.d)(o),
										a = Object(u.b)(o),
										c = Object(l.c)(r),
										m = {
											recommendedSubredditIds: [r.id],
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
				k = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				},
				L = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				},
				P = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						r = t && t.type;
					return !!(n && !L(e) && r === c.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				},
				M = () => async (e, t, n) => {
					var r, s;
					const o = t(),
						d = (e => e.focusedVerticals.lastLoadedEnv)(o);
					if ((e => {
							return e.focusedVerticals.api.error.focusedVerticalGqlError
						})(o) || null === d || "client" === d) {
						const n = null === (s = null === (r = Object(x.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
							d = Object(f.S)(o);
						return Object(i.i)(() => e(C()), {
							name: "getFocusedVerticalsRequested",
							page: n,
							isLoggedIn: d
						})
					}
					if ("server" === d) return e(I({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/modListing/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "modListingDataPending", (function() {
				return T
			})), n.d(t, "modListingDataLoaded", (function() {
				return w
			})), n.d(t, "modListingDataFailed", (function() {
				return N
			})), n.d(t, "modListingPageRequested", (function() {
				return R
			})), n.d(t, "morePostsPending", (function() {
				return H
			})), n.d(t, "morePostsLoaded", (function() {
				return A
			})), n.d(t, "morePostsFailed", (function() {
				return B
			})), n.d(t, "moreModListingRequested", (function() {
				return D
			})), n.d(t, "hideSubredditSuccess", (function() {
				return K
			})), n.d(t, "hideSubredditPending", (function() {
				return q
			})), n.d(t, "hideSubredditFailed", (function() {
				return G
			})), n.d(t, "unhideSubredditSuccess", (function() {
				return U
			})), n.d(t, "unhideSubredditPending", (function() {
				return J
			})), n.d(t, "unhideSubredditFailed", (function() {
				return Q
			})), n.d(t, "toggleHiddenSubreddit", (function() {
				return Y
			})), n.d(t, "hideSubreddit", (function() {
				return X
			})), n.d(t, "unhideSubreddit", (function() {
				return W
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/pick.js"),
				i = n.n(s),
				o = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeListingKey/index.ts"),
				c = n("./src/reddit/actions/platform.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/constants/page.ts"),
				m = n("./src/reddit/constants/parameters.ts"),
				b = n("./src/config.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				h = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts"),
				g = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				_ = n("./src/reddit/helpers/name/index.ts"),
				y = n("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				v = (e, t) => Object(p.a)(e, {
					data: t,
					endpoint: Object(g.a)(Object(y.a)(`${b.a.gatewayUrl}/desktopapi/v1/mod`)),
					method: o.ob.GET
				});
			const x = (e, t, n, r) => Object(p.a)(Object(h.a)(e, [f.a]), {
					endpoint: `${e.apiUrl}/api/filter/user/${t}/f/mod/${Object(_.d)(n)}`,
					method: r ? o.ob.PUT : o.ob.DELETE,
					data: {
						model: JSON.stringify({
							name: Object(_.j)(n)
						})
					}
				}),
				O = (e, t, n) => x(e, t, n, !0),
				E = (e, t, n) => x(e, t, n, !1);
			var S = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				j = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				I = n("./src/reddit/helpers/timeApiRoute/index.ts"),
				C = n("./src/reddit/helpers/trackers/screenview.ts"),
				k = n("./src/reddit/models/Toast/index.ts"),
				L = n("./src/reddit/routes/modListing/index.ts"),
				P = n("./src/reddit/selectors/user.ts"),
				M = n("./src/reddit/actions/pages/modListing/constants.ts");
			const T = Object(d.a)(M.f),
				w = Object(d.a)(M.e),
				N = Object(d.a)(M.d),
				F = (e, t) => async (n, s, i) => {
					const o = s();
					if (o.listings.postOrder.api.pending[e]) return;
					n(T({
						key: e
					}));
					const d = await Object(I.a)("modListing", () => v(i.apiContext(), t)),
						a = `error-${e}`;
					d.ok ? (n(w({
						key: e,
						meta: o.meta,
						...d.body
					})), n(u.g(a))) : (n(N({
						error: d.error,
						key: e,
						...d.body
					})), 401 === d.status ? Object(j.a)(n, o) : n(u.f({
						id: a,
						kind: k.b.Error,
						text: r.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: r.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: F(e, t)
					})))
				}, R = (e, t) => async (n, s) => {
					const {
						sort: d = o.cb
					} = e.params, u = Object(L.d)(e.path), b = u ? l.f : l.e, p = Object(a.a)(b, d, e.queryParams), h = s(), f = h.listings.postOrder.ids[p], g = h.listings.postOrder.api.error[p];
					if (h.listings.postOrder.api.pending[p] || f && !g && !t) return void(f && n(c.m({
						title: r.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})));
					const _ = V(e.queryParams);
					await n(F(p, {
						...i()(e.queryParams, m.p),
						...i()(e.queryParams, m.o),
						filtered: !!u || void 0,
						moderated_srs: !0,
						sort: d,
						t: Object(S.a)(d, _)
					})), n(c.m({
						title: r.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})), Object(C.h)(s(), !0)
				}, H = Object(d.a)(M.i), A = Object(d.a)(M.h), B = Object(d.a)(M.g), D = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const d = n(),
						c = d.platform.currentPage;
					if (!c) return;
					const {
						sort: u = o.cb
					} = e, b = c.queryParams, p = Object(L.d)(c.url), h = p ? l.f : l.e, f = Object(a.a)(h, u, b), g = d.listings.postOrder.loadMore[f];
					if (!g) return;
					const _ = d.listings.postOrder.api.pending[f],
						y = d.listings.postOrder.fetchedTokens,
						x = !(!y[f] || !y[f][g.token]);
					if (_ || x) return;
					const O = V(b);
					t(H({
						key: f,
						fetchedToken: g.token
					}));
					const E = await v(s(), {
							after: g.token,
							dist: g.dist,
							filtered: !!p || void 0,
							sort: u,
							t: Object(S.a)(u, O),
							...i()(b, m.p)
						}),
						j = d.listings.postOrder.ids[f],
						I = {
							...E.body,
							postIds: (E.body.postIds || []).filter(e => !j || !j.includes(e))
						};
					E.ok ? t(A({
						key: f,
						fetchedToken: g.token,
						meta: d.meta,
						...I
					})) : t(B({
						key: f,
						error: E.error,
						fetchedToken: g.token,
						...I
					}))
				};

			function V(e) {
				const t = m.K in e && e[m.K].toUpperCase() || "";
				return t in o.oc && o.oc[t]
			}
			const K = Object(d.a)(M.c),
				q = Object(d.a)(M.b),
				G = Object(d.a)(M.a),
				U = Object(d.a)(M.l),
				J = Object(d.a)(M.k),
				Q = Object(d.a)(M.j),
				Y = (e, t) => async (n, r, s) => {
					let {
						apiContext: i
					} = s;
					const o = r(),
						d = Object(P.m)(o),
						[a, c, u, l] = t ? [q, K, G, O] : [J, U, Q, E];
					if (!d || !d.displayText) return;
					const {
						currentPage: m
					} = o.platform;
					if (!m || !m.routeMatch) return;
					n(a(e));
					const b = await l(i(), d.displayText, e);
					b.ok ? (await n(R(m.routeMatch.match, !0)), n(c(e))) : n(u(b.body))
				}, X = e => Y(e, !0), W = e => Y(e, !1)
		},
		"./src/reddit/actions/postList.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return c
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = (n("./src/reddit/actions/embedAndImage.ts"), n("./src/reddit/actions/video.ts"), n("./src/reddit/helpers/trackers/postList.ts"));
			n("./src/reddit/constants/postLayout.ts"), n("./src/reddit/models/Media/index.ts"), n("./src/reddit/selectors/platform.ts"), n("./src/reddit/selectors/posts.ts");
			n("./src/reddit/selectors/video.ts");
			const i = "POSTLIST__MARKED_END",
				o = "POSTLIST__UNMARKED_END",
				d = Object(r.a)(i),
				a = Object(r.a)(o),
				c = (e, t) => async (n, r) => {
					const i = r();
					e in i.listings.postOrder.fetchedTokens ? e in i.listings.postOrder.ids ? n(a({
						listingKey: e
					})) : s.l(i, e) : n(d({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
				resolved: {},
				chunkName: () => "CommunityTopicSurvey",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: async () => n.e("CommunityTopicSurvey").then(n.bind(null, "./src/reddit/components/CommunityTopicSurvey/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/CommunityTopicSurvey/index.tsx"
				}
			});
			t.a = s
		},
		"./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/config.ts"),
				o = n("./src/reddit/components/ContentSurvey/index.m.less"),
				d = n.n(o),
				a = n("./src/reddit/helpers/trackers/contentTag.ts"),
				c = n("./src/reddit/hooks/useTracking.ts"),
				u = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/components/ContentSurvey/SurveyModal.tsx");
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function b(e) {
				let {
					survey: t,
					subredditId: n
				} = e;
				const [o, b] = Object(r.useState)(!1), p = Object(c.a)();
				return Object(r.useEffect)(() => p(Object(a.h)()), [p]), s.a.createElement("div", {
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
					subredditId: n,
					survey: t,
					onClose: () => b(!1)
				}))
			}
		},
		"./src/reddit/components/ContentSurvey/SurveyModal.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/higherOrderComponents/asModal/index.tsx");
			const i = Object(r.a)({
					resolved: {},
					chunkName: () => "",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e(0), n.e(1)]).then(n.bind(null, "./src/reddit/components/ContentSurvey/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ContentSurvey/index.tsx"
					}
				}),
				o = Object(s.a)(i);
			t.a = o
		},
		"./src/reddit/components/ContentSurvey/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/EmptySubreddit.m.less": function(e, t, n) {
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
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/upperFirst.js"),
				i = n.n(s),
				o = n("./node_modules/react/index.js"),
				d = n.n(o),
				a = n("./src/config.ts"),
				c = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/isFakeSubreddit/index.ts"),
				l = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/components/PostList/Placeholder.tsx"),
				p = n("./src/reddit/components/EmptySubreddit.m.less"),
				h = n.n(p),
				f = n("./src/lib/classNames/index.ts"),
				g = n("./src/lib/lessComponent.tsx"),
				_ = n("./src/reddit/pages/Subreddit/SurveyUnit.tsx");
			const y = g.a.wrapped(b.a, "BackgroundPlaceholder", h.a),
				v = g.a.wrapped(m.n, "SubmitLink", h.a),
				x = e => {
					switch (e) {
						case c.bb.RISING:
							return r.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case c.bb.TOP:
						case c.bb.CONTROVERSIAL:
							return null;
						default:
							return r.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				O = e => {
					let {
						listingName: t,
						sort: n
					} = e;
					const s = x(n);
					return d.a.createElement("div", {
						className: h.a.MainContent
					}, d.a.createElement("div", {
						className: h.a.PrimaryText
					}, (e => {
						switch (e) {
							case c.bb.RISING:
								return r.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case c.bb.TOP:
							case c.bb.CONTROVERSIAL:
								return r.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [r.fbt._param("listing sort option", i()(e))], {
									hk: "48BeCW"
								});
							default:
								return r.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(n)), t && !Object(u.a)(t) && !!s && d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
						className: h.a.SecondaryText
					}, x(n)), d.a.createElement(v, {
						to: `/r/${t}/submit`
					}, r.fbt._("Add a post", null, {
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
				}, r.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), d.a.createElement(v, {
					to: "/r/popular"
				}, r.fbt._("Browse Popular Posts", null, {
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
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/PostList/index.tsx"),
				s = n("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(s.a)(r.a)
		},
		"./src/reddit/components/ModHub/Content/NoPermissions.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				d = n("./src/reddit/contexts/NavbarExp.ts"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ModHub/Content/index.m.less"),
				u = n.n(c);
			t.a = e => {
				const t = Object(i.useContext)(d.a);
				return o.a.createElement("div", {
					className: Object(a.a)(u.a.noPermissions, {
						[u.a.noPermissionsExp]: t
					})
				}, o.a.createElement("img", {
					className: u.a.rememberTheHuman,
					src: `${r.a.assetPath}/img/content-gate-icons/remember-the-human.png`
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
		"./src/reddit/components/ModHub/Content/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3w9CCp15Dn8xjuhR8VUE5n",
				hideButton: "_34rIurg3vPxO_tswAxt4wf",
				errorText: "dHzfi1tqA9d2uJEemybvK"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less": function(e, t, n) {
			e.exports = {
				rows: "_1q1k1QSwlFELkqmvELqzPI",
				noRows: "_2bMntgRcO2XGi6Tfep4QfV"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_25Nja5fbb_ZBbGBf8Bm2jO",
				hideCommunitiesHeader: "_2UuftU5L-0PE5_qTvLLSuB",
				inputContainer: "_16VxD_GKhjj0Mvr4ayqcAO",
				tertiaryButton: "_3KQk5TlvMCuZJm3Xc1Mk6L"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less": function(e, t, n) {
			e.exports = {
				SubredditIcon: "YsExfuojv3MEBi8M0sQGM",
				subredditIcon: "YsExfuojv3MEBi8M0sQGM",
				Label: "-KyE0niKrEy2RqEuYXENt",
				label: "-KyE0niKrEy2RqEuYXENt"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less": function(e, t, n) {
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
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/components/SubredditIcon/index.tsx"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				b = n.n(m),
				p = n("./src/lib/lessComponent.tsx");
			const h = p.a.wrapped(u.b, "SubredditIcon", b.a),
				f = p.a.span("Label", b.a),
				g = Object(c.c)({
					subredditOrProfile: l.Q
				});
			var _ = Object(a.b)(g)(e => {
				let {
					children: t,
					subredditOrProfile: n
				} = e;
				return t(n, i.a.createElement(i.a.Fragment, null, i.a.createElement(h, {
					subredditOrProfile: n
				}), i.a.createElement(f, null, n.displayText)))
			});
			var y = e => {
					let {
						children: t,
						className: n,
						subredditsOrProfilesIds: r
					} = e;
					const s = r.map(e => i.a.createElement(_, {
						children: t,
						key: e.id,
						identifier: e
					}));
					return i.a.createElement("div", {
						className: n
					}, s)
				},
				v = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				x = n.n(v);
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
					subredditsOrProfilesIds: n,
					onSeeMoreDetails: s,
					subredditCategory: o = {
						name: r.fbt._("multi", null, {
							hk: "28Z7Rp"
						})
					}
				} = e, a = t ? S : j, c = n.length, u = t && n.length > 4;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(O, null, r.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [r.fbt._plural(c, "number"), r.fbt._param("category", o.name)], {
					hk: "33iWe4"
				})), c > 0 && i.a.createElement(E, {
					subredditsOrProfilesIds: t ? n.slice(0, 4) : n
				}, (t, n) => i.a.createElement(a, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, n)), c > 0 && u && i.a.createElement(d.r, {
					onClick: s
				}, r.fbt._("See more", null, {
					hk: "QYkk2"
				})))
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return S
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "b", (function() {
				return k
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/actions/ads/index.ts"),
				d = n("./src/reddit/actions/focusedVerticals/index.ts"),
				a = n("./src/reddit/actions/gold/tooltips.ts"),
				c = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postList.ts"),
				l = n("./src/reddit/actions/survey/index.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = n("./src/reddit/helpers/trackers/post.ts"),
				f = n("./src/reddit/components/PostList/Placeholder.tsx"),
				g = n("./src/reddit/featureFlags/index.ts"),
				_ = n("./src/reddit/selectors/experiments/survey.ts"),
				y = n("./src/reddit/selectors/listings.ts"),
				v = n("./src/reddit/selectors/posts.ts"),
				x = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/tracking.ts"),
				E = n("./src/reddit/selectors/user.ts");

			function S() {
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
			const j = S(),
				I = {
					apiError: y.c,
					apiPending: y.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(b.U)(e, t),
					loadMore: y.g,
					postsById: v.T,
					postIds: Object(i.a)((e, t) => {
						let {
							listingKey: n,
							listingName: r,
							inSubredditOrProfile: s
						} = t;
						return Object(v.D)(e, n, r, s)
					}),
					subredditsById: x.fb,
					viewportDataLoaded: O.a,
					pageReferrer: b.X,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: _.e,
					isLoggedIn: E.S
				},
				C = Object(s.c)(I),
				k = e => ({
					onBottomViewed: (t, n) => e(u.c(t, n)),
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
					trackOnPostEnteredViewport: (t, n, r, s) => {
						e(c.M(t, r, s))
					},
					trackOnPostExitedViewport: (t, n, r, s) => {
						e(c.N(t, r, s))
					},
					showModalOnScroll: () => e(c.ab()),
					surveyTriggerScrollCounted: () => e(Object(l.m)())
				}),
				L = e => Object(p.b)({
					...e
				}),
				P = (e, t, n, r) => {
					const {
						listingKey: s,
						hostPostData: i,
						listingBelowVariant: o
					} = r;
					return Object(h.k)(e, t, "post", s, i, o, void 0)
				},
				M = Object(r.b)(C, k, (e, t, n) => ({
					...e,
					...t,
					...n,
					postComponentForLayout: L,
					postClickEventFactory: P
				}));
			t.a = e => Object(m.c)(j(M(e)))
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/brcast/dist/brcast.es.js");
			const s = Object(r.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/trackers/contentTag.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return r
			})), n.d(t, "g", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "l", (function() {
				return o
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "j", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "d", (function() {
				return g
			}));
			const r = () => () => ({
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
		"./src/reddit/helpers/trackers/modListing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
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
				d = (e, t) => n => ({
					source: "moderator",
					action: "view",
					noun: "activemod_details",
					...Object(r.o)(n),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: e ? "general_queue" : "community"
					},
					subreddit: {
						name: t.toLowerCase(),
						...Object(r.nb)(n, t)
					}
				}),
				a = (e, t, n) => s => ({
					source: "moderator",
					action: "click",
					noun: "subreddit_filter",
					...Object(r.o)(s),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: n ? "activity_card" : "queue_filters",
						reason: e ? "active" : "inactive"
					},
					subreddit: {
						name: t.toLowerCase(),
						...Object(r.nb)(s, t)
					}
				}),
				c = (e, t, n, s) => i => ({
					source: "moderator",
					action: "click",
					noun: s ? "expand_previous_actions" : "collapse_previous_actions",
					...Object(r.o)(i),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: n ? "post" : "comment",
						reason: t
					},
					subreddit: Object(r.mb)(i, e)
				})
		},
		"./src/reddit/icons/fonts/Clear/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: Object(i.a)(Object(o.b)("clear", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				d = n.n(o);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const c = e => {
				let {
					className: t,
					isSubreddit: n,
					...r
				} = e;
				return s.a.createElement("svg", a({
					className: Object(i.a)(d.a.dropdown, {
						[d.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r), s.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = c
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/constants/colors.ts");
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
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/Inline/index.m.less"),
				i = n.n(s);
			t.a = r.a.div("inlineRow", i.a)
		},
		"./src/reddit/pages/ModListing/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/lodash/fromPairs.js"),
				s = n.n(r),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				d = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/extractQueryParams/index.ts"),
				l = n("./src/lib/makeListingKey/index.ts"),
				m = n("./src/reddit/actions/pages/modListing/index.ts"),
				b = n("./src/reddit/components/EmptySubreddit.tsx"),
				p = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				h = n("./src/reddit/components/JumpToContent/index.tsx"),
				f = n("./src/reddit/components/ListingPostList/index.tsx"),
				g = n("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				_ = n("./node_modules/fbt/lib/FbtPublic.js"),
				y = n("./src/higherOrderComponents/asModal/index.tsx"),
				v = n("./src/reddit/actions/modal.ts"),
				x = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				O = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				E = n("./src/reddit/controls/TextButton/index.tsx"),
				S = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				j = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				I = n("./src/reddit/selectors/activeModalId.ts"),
				C = n("./src/reddit/selectors/modQueue.ts"),
				k = n("./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less"),
				L = n.n(k);
			const {
				fbt: P
			} = n("./node_modules/fbt/lib/FbtPublic.js"), M = Object(y.a)(e => o.a.createElement(x.e, {
				className: L.a.modalBody
			}, o.a.createElement(x.i, null, o.a.createElement(j.a, null, o.a.createElement(x.q, {
				className: L.a.modalTitle
			}, o.a.createElement(S.a, {
				className: L.a.modIcon
			}), P._("r/Mod", null, {
				hk: "2a9ICx"
			})), o.a.createElement(E.a, {
				onClick: e.onCloseModal
			}, o.a.createElement(x.b, null)))), o.a.createElement(x.l, {
				className: L.a.modalMain
			}, o.a.createElement("div", {
				className: L.a.modalDescription
			}, P._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), o.a.createElement(O.b, {
				isSidebar: !1,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			})))), T = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
				className: L.a.feedDetailsTitle
			}, o.a.createElement(S.a, {
				className: L.a.modIcon
			}), P._("r/Mod", null, {
				hk: "2a9ICx"
			})), o.a.createElement("div", {
				className: L.a.feedDetailsDescription
			}, P._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), e.moderatedCommunitiesIds.length ? o.a.createElement(O.b, {
				isSidebar: !0,
				onSeeMoreDetails: e.onSeeMoreDetails,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			}) : o.a.createElement("div", {
				className: L.a.loadingBar
			})), w = Object(a.c)({
				isModalOpen: Object(I.b)("MOD_LISTING_FEED_DETAILS_MODAL_ID"),
				moderatedCommunitiesIds: C.h
			});
			var N = Object(d.b)(w, (e, t) => {
					let {} = t;
					return {
						toggleModal: () => e(Object(v.i)("MOD_LISTING_FEED_DETAILS_MODAL_ID"))
					}
				})(e => {
					const {
						isModalOpen: t,
						moderatedCommunitiesIds: n,
						toggleModal: r
					} = e;
					return n ? o.a.createElement(o.a.Fragment, null, o.a.createElement(T, {
						moderatedCommunitiesIds: n,
						onSeeMoreDetails: r
					}), t && o.a.createElement(M, {
						moderatedCommunitiesIds: n,
						onCloseModal: r,
						onOverlayClick: r,
						withOverlay: !0
					})) : null
				}),
				F = n("./node_modules/react-router-redux/es/index.js"),
				R = n("./src/reddit/components/TrackingHelper/index.tsx"),
				H = n("./src/reddit/contexts/PageLayer/index.tsx"),
				A = n("./src/reddit/controls/Button/index.tsx"),
				B = n("./src/reddit/helpers/trackers/modListing.ts"),
				D = n("./src/reddit/routes/modListing/index.ts");
			const V = e => e.modListingPage.filteredSubreddits.api.pending;
			var K = n("./src/reddit/constants/keycodes.ts"),
				q = n("./src/reddit/layout/row/Inline/index.tsx"),
				G = n("./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less"),
				U = n.n(G);
			const J = Object(a.c)({
				apiError: e => e.modListingPage.filteredSubreddits.api.error,
				isApiPending: V
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
						this.canSubmitInput() && (this.props.sendEvent(Object(B.d)()), this.props.hide(this.state.subredditInput), this.clearSubredditInput())
					}, this.onChange = e => {
						this.setSubredditInput(e.target.value)
					}, this.onKeyPress = e => {
						e.key === K.b.Enter && this.submitInput()
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
					}), o.a.createElement(A.l, {
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
				}))(Object(R.c)(Q)),
				X = n("./src/lib/lessComponent.tsx"),
				W = n("./src/reddit/components/SubredditIcon/index.tsx"),
				Z = n("./src/reddit/icons/fonts/Clear/index.tsx"),
				z = n("./src/reddit/selectors/profile.ts"),
				$ = n("./src/reddit/selectors/subreddit.ts"),
				ee = n("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less"),
				te = n.n(ee);
			const ne = X.a.wrapped(W.b, "SubredditIcon", te.a),
				re = Object(a.c)({
					isApiPending: V,
					subredditOrProfile: (e, t) => {
						const n = Object($.C)(e, {
							subredditName: t.subredditName
						});
						if (!n) {
							const n = (e => e.startsWith(c.qc) ? e.slice(2) : e)(t.subredditName);
							return n && Object(z.k)(e, {
								profileName: n
							}) || null
						}
						return n
					}
				});
			class se extends o.a.Component {
				constructor() {
					super(...arguments), this.onClickUnhideSubreddit = e => {
						e.stopPropagation(), e.preventDefault(), this.props.subredditOrProfile && (this.props.sendEvent(Object(B.f)()), this.props.unhide(this.props.subredditName))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.subredditOrProfile ? o.a.createElement(O.a, {
						className: te.a.row,
						to: e.subredditOrProfile.url
					}, o.a.createElement(ne, {
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
			var ie = Object(d.b)(re, e => ({
					unhide: t => e(Object(m.unhideSubreddit)(t))
				}))(Object(R.c)(se)),
				oe = n("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less"),
				de = n.n(oe);
			const {
				fbt: ae
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ce = e => {
					let {
						hiddenSubredditsNames: t
					} = e;
					const n = t.map(e => o.a.createElement(ie, {
						key: e,
						subredditName: e
					}));
					return o.a.createElement(o.a.Fragment, null, t.length ? o.a.createElement("div", {
						className: de.a.rows
					}, n) : o.a.createElement("div", {
						className: de.a.noRows
					}, ae._("Viewing all communities", null, {
						hk: "4p9SL8"
					})))
				},
				ue = n("./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less"),
				le = n.n(ue);
			const {
				fbt: me
			} = n("./node_modules/fbt/lib/FbtPublic.js"), be = Object(H.v)({
				filtered: e => !!e && Object(D.d)(e.url)
			}), pe = Object(a.c)({
				hiddenSubredditsNames: e => e.modListingPage.filteredSubreddits.names
			});
			class he extends o.a.Component {
				constructor() {
					super(...arguments), this.onToggleFiltered = () => {
						this.props.sendEvent(Object(B.c)(this.props.filtered)), this.props.toggleFiltered()
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
					})), o.a.createElement(A.r, {
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
						filtered: n
					} = t;
					return {
						toggleFiltered: () => e(Object(F.b)(n ? D.a : D.b))
					}
				})(Object(R.c)(he))),
				ge = n("./src/reddit/components/SidebarContainer/index.tsx"),
				_e = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				ye = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx");
			var ve = () => o.a.createElement(ge.a, null, o.a.createElement(ye.a, {
					title: _.fbt._("Feed details", null, {
						hk: "3JlrpB"
					})
				}, o.a.createElement(N, null), o.a.createElement(fe, null)), o.a.createElement(_e.a, null)),
				xe = n("./src/reddit/constants/page.ts"),
				Oe = n("./src/reddit/constants/parameters.ts"),
				Ee = n("./src/reddit/helpers/trackers/screenview.ts"),
				Se = n("./src/reddit/layout/page/Listing/index.tsx"),
				je = n("./src/reddit/selectors/moderatorPermissions.ts");
			const Ie = Object(a.a)((e, t) => {
					let {
						location: n
					} = t;
					return n.search
				}, (e, t) => {
					let {
						match: n
					} = t;
					return n.params.sort || c.bb.HOT
				}, (e, t) => {
					let {
						match: n
					} = t;
					return Object(D.d)(n.path)
				}, je.k, je.d, (e, t, n, r, i) => {
					const o = s()([...Object(u.a)(e)]),
						d = Oe.K in o && o[Oe.K].toUpperCase(),
						a = "string" == typeof d && d in c.oc ? c.oc[d] : c.pc,
						m = n ? xe.f : xe.e;
					return {
						filtered: n,
						isModerator: r,
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
			class ke extends o.a.PureComponent {
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
					const e = this.props.filtered ? D.b : D.a;
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
			t.default = Ce(ke)
		},
		"./src/reddit/pages/Subreddit/SurveyUnit.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/components/CommunityTopicSurvey/async.tsx"),
				a = n("./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx"),
				c = n("./src/reddit/constants/experiments.ts"),
				u = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts");
			const m = Object(r.a)({
				resolved: {},
				chunkName: () => "NewCommunityProgress",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e(0), n.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), n.e("NewCommunityProgress")]).then(n.bind(null, "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx"
				}
			});

			function b(e) {
				let {
					postLayout: t,
					subredditId: n,
					subredditSubscribers: r
				} = e;
				var s;
				const b = Object(o.e)(e => e.subreddits.survey[n]),
					p = Object(o.e)(e => e.subreddits.progressModule[n]),
					h = Object(o.e)(l.a),
					f = h !== c.Te.NewModule;
				return (null === (s = null == p ? void 0 : p.cards) || void 0 === s ? void 0 : s.length) > 0 && f ? i.a.createElement(m, {
					closeModuleOnMount: !!t && t !== u.g.Large,
					subredditId: n,
					progressModule: p
				}) : t !== u.g.Large ? null : (null == b ? void 0 : b.isEligible) && !(null == b ? void 0 : b.response) && (!h || h && r > 100) ? i.a.createElement(a.a, {
					subredditId: n,
					survey: b
				}) : i.a.createElement(d.a, {
					subredditId: n
				})
			}
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = e => {
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: i.S,
						experimentName: r.yd
					});
					return !(!t || Object(r.qg)(t))
				},
				d = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: i.S,
						experimentName: r.yd
					}) === r.Vd.ListingEnabled
				}
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"c1fc98c26cf2"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing.0fec842e9a26a7c3245e.js.map