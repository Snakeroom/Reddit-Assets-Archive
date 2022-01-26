// https://www.redditstatic.com/desktop2x/ModListing.5283333672b0266831c3.js
// Retrieved at 1/26/2022, 6:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModListing"], {
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
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, r) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== r[t - 1]
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
							r = t ? this._getRootRect() : {
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
								d = this._rootContainsTarget(o),
								c = n.entry,
								l = t && d && this._computeTargetAndRootIntersection(o, r),
								u = n.entry = new s({
									time: e.performance && performance.now && performance.now(),
									target: o,
									boundingClientRect: a,
									rootBounds: r,
									intersectionRect: l
								});
							c ? t && d ? this._hasCrossedThreshold(c, u) && this._queuedEntries.push(u) : c && c.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, n.prototype._computeTargetAndRootIntersection = function(r, s) {
						if ("none" != e.getComputedStyle(r).display) {
							for (var n, o, a, d, l, u, p, m, b = i(r), h = c(r), f = !1; !f;) {
								var g = null,
									y = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == y.display) return;
								if (h == this.root || h == t ? (f = !0, g = s) : h != t.body && h != t.documentElement && "visible" != y.overflow && (g = i(h)), g && (n = g, o = b, a = void 0, d = void 0, l = void 0, u = void 0, p = void 0, m = void 0, a = Math.max(n.top, o.top), d = Math.min(n.bottom, o.bottom), l = Math.max(n.left, o.left), u = Math.min(n.right, o.right), m = d - a, !(b = (p = u - l) >= 0 && m >= 0 && {
										top: a,
										bottom: d,
										left: l,
										right: u,
										width: p,
										height: m
									}))) break;
								h = c(h)
							}
							return b
						}
					}, n.prototype._getRootRect = function() {
						var e;
						if (this.root) e = i(this.root);
						else {
							var r = t.documentElement,
								s = t.body;
							e = {
								top: 0,
								left: 0,
								right: r.clientWidth || s.clientWidth,
								width: r.clientWidth || s.clientWidth,
								bottom: r.clientHeight || s.clientHeight,
								height: r.clientHeight || s.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, n.prototype._expandRectByRootMargin = function(e) {
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
					}, n.prototype._hasCrossedThreshold = function(e, t) {
						var r = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							s = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (r !== s)
							for (var n = 0; n < this.thresholds.length; n++) {
								var o = this.thresholds[n];
								if (o == r || o == s || o < r != o < s) return !0
							}
					}, n.prototype._rootIsInDom = function() {
						return !this.root || d(t, this.root)
					}, n.prototype._rootContainsTarget = function(e) {
						return d(this.root || t, e)
					}, n.prototype._registerInstance = function() {
						r.indexOf(this) < 0 && r.push(this)
					}, n.prototype._unregisterInstance = function() {
						var e = r.indexOf(this); - 1 != e && r.splice(e, 1)
					}, e.IntersectionObserver = n, e.IntersectionObserverEntry = s
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
						r = t.width * t.height,
						s = this.intersectionRect,
						n = s.width * s.height;
					this.intersectionRatio = r ? n / r : this.isIntersecting ? 1 : 0
				}

				function n(e, t) {
					var r, s, n, o = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (r = this._checkForIntersections.bind(this), s = this.THROTTLE_TIMEOUT, n = null, function() {
						n || (n = setTimeout((function() {
							r(), n = null
						}), s))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function o(e, t, r, s) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, r, s || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, r)
				}

				function a(e, t, r, s) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, r, s || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, r)
				}

				function i(e) {
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

				function d(e, t) {
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
			var s = r("./node_modules/lodash/_baseTimes.js"),
				n = r("./node_modules/lodash/_castFunction.js"),
				o = r("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				i = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > a) return [];
				var r = i,
					c = d(e, i);
				t = n(t), e -= i;
				for (var l = s(c, t); ++r < e;) t(r);
				return l
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, r, s) {
				var n = r ? r.call(s, e, t) : void 0;
				if (void 0 !== n) return !!n;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var o = Object.keys(e),
					a = Object.keys(t);
				if (o.length !== a.length) return !1;
				for (var i = Object.prototype.hasOwnProperty.bind(t), d = 0; d < o.length; d++) {
					var c = o[d];
					if (!i(c)) return !1;
					var l = e[c],
						u = t[c];
					if (!1 === (n = r ? r.call(s, l, u, c) : void 0) || void 0 === n && l !== u) return !1
				}
				return !0
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return _
			})), r.d(t, "d", (function() {
				return v
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "b", (function() {
				return k
			}));
			var s, n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/performanceTimings/index.tsx"),
				a = r("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(s || (s = {}));
			var c, l = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var p = r("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				m = r("./src/reddit/selectors/platform.ts"),
				b = r("./src/reddit/selectors/user.ts");
			const h = Object(n.a)(a.g),
				f = Object(n.a)(a.e),
				g = Object(n.a)(a.h),
				y = Object(n.a)(a.c),
				_ = Object(n.a)(a.f),
				v = Object(n.a)(a.j),
				O = Object(n.a)(a.i),
				w = () => async (e, t, {
					gqlContext: r
				}) => {
					const n = t(),
						o = Object(p.e)(n),
						a = Object(p.d)(n),
						c = Object(b.I)(n);
					if (o || !a) return;
					e(g());
					let m = !1;
					try {
						const t = c ? s.LoggedInGeo : s.LoggedOutGeo,
							n = await ((e, t, r) => Object(i.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(r(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (x(t)) {
								if (S(t)) {
									e(y({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), m = !0
								} else if (C(t)) {
									const r = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: s,
											interactedSubreddit: n,
											category: o
										} = r.focusRecommendations[0],
										a = [s, n],
										i = Object(u.d)(a),
										d = Object(l.b)(a),
										c = Object(u.c)(s),
										p = {
											recommendedSubredditIds: [s.id],
											interactedSubredditIds: [n.id],
											subreddits: i,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: o,
											lastLoadedEnv: "client"
										};
									e(h(p)), m = !0
								}
							} else m = !1
						}
					} catch (_) {
						m = !1
					}
					m || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, x = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, S = e => {
					const t = e.focusVerticalSubredditRecommendations,
						r = t && t.focusRecommendations;
					return !(!r || 0 !== r.length)
				}, C = e => {
					const t = e.focusVerticalSubredditRecommendations,
						r = t && t.focusRecommendations,
						s = t && t.type;
					return !!(r && !S(e) && s === c.GEO && r[0] && r[0].recommendedSubreddit && r[0].interactedSubreddit)
				}, k = () => async (e, t, r) => {
					var s, n;
					const a = t(),
						i = Object(p.g)(a);
					if (Object(p.f)(a) || null === i || "client" === i) {
						const r = null === (n = null === (s = Object(m.b)(t())) || void 0 === s ? void 0 : s.routeMatch) || void 0 === n ? void 0 : n.route.chunk,
							i = Object(b.J)(a);
						return Object(o.i)(() => e(w()), {
							name: "getFocusedVerticalsRequested",
							page: r,
							isLoggedIn: i
						})
					}
					if ("server" === i) return e(_({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/inContextModeration.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return i
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "INCONTEXT__BANNED",
				o = "INCONTEXT__MUTED",
				a = Object(s.a)(n),
				i = Object(s.a)(o)
		},
		"./src/reddit/actions/moderationLog/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = "SUBREDDIT__MODERATION_LOG_LOADED",
				n = "SUBREDDIT__ALL_MODERATORS_LOADED"
		},
		"./src/reddit/actions/pages/modListing/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "modListingDataPending", (function() {
				return P
			})), r.d(t, "modListingDataLoaded", (function() {
				return L
			})), r.d(t, "modListingDataFailed", (function() {
				return M
			})), r.d(t, "modListingPageRequested", (function() {
				return D
			})), r.d(t, "morePostsPending", (function() {
				return F
			})), r.d(t, "morePostsLoaded", (function() {
				return A
			})), r.d(t, "morePostsFailed", (function() {
				return B
			})), r.d(t, "moreModListingRequested", (function() {
				return H
			})), r.d(t, "hideSubredditSuccess", (function() {
				return U
			})), r.d(t, "hideSubredditPending", (function() {
				return V
			})), r.d(t, "hideSubredditFailed", (function() {
				return G
			})), r.d(t, "unhideSubredditSuccess", (function() {
				return q
			})), r.d(t, "unhideSubredditPending", (function() {
				return K
			})), r.d(t, "unhideSubredditFailed", (function() {
				return J
			})), r.d(t, "toggleHiddenSubreddit", (function() {
				return Y
			})), r.d(t, "hideSubreddit", (function() {
				return Q
			})), r.d(t, "unhideSubreddit", (function() {
				return z
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/pick.js"),
				o = r.n(n),
				a = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/makeListingKey/index.ts"),
				c = r("./src/reddit/actions/platform.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/constants/page.ts"),
				p = r("./src/reddit/constants/parameters.ts"),
				m = r("./src/config.ts"),
				b = r("./src/lib/makeApiRequest/index.ts"),
				h = r("./src/lib/omitHeaders/index.ts"),
				f = r("./src/reddit/constants/headers.ts"),
				g = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				y = r("./src/reddit/helpers/name/index.ts"),
				_ = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				v = (e, t) => Object(b.a)(e, {
					data: t,
					endpoint: Object(g.a)(Object(_.a)(`${m.a.gatewayUrl}/desktopapi/v1/mod`)),
					method: a.jb.GET
				});
			const O = (e, t, r, s) => Object(b.a)(Object(h.a)(e, [f.a]), {
					endpoint: `${e.apiUrl}/api/filter/user/${t}/f/mod/${Object(y.c)(r)}`,
					method: s ? a.jb.PUT : a.jb.DELETE,
					data: {
						model: JSON.stringify({
							name: Object(y.h)(r)
						})
					}
				}),
				w = (e, t, r) => O(e, t, r, !0),
				x = (e, t, r) => O(e, t, r, !1);
			var S = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				C = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				k = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				j = r("./src/reddit/helpers/trackers/screenview.ts"),
				E = r("./src/reddit/models/Toast/index.ts"),
				I = r("./src/reddit/routes/modListing/index.ts"),
				N = r("./src/reddit/selectors/user.ts"),
				T = r("./src/reddit/actions/pages/modListing/constants.ts");
			const P = Object(i.a)(T.f),
				L = Object(i.a)(T.e),
				M = Object(i.a)(T.d),
				R = (e, t) => async (r, n, o) => {
					const a = n();
					if (a.listings.postOrder.api.pending[e]) return;
					r(P({
						key: e
					}));
					const i = await Object(k.a)("modListing", () => v(o.apiContext(), t)),
						d = `error-${e}`;
					i.ok ? (r(L({
						key: e,
						meta: a.meta,
						...i.body
					})), r(l.g(d))) : (r(M({
						error: i.error,
						key: e,
						...i.body
					})), 401 === i.status ? Object(C.a)(r, a) : r(l.f({
						id: d,
						kind: E.b.Error,
						text: s.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: R(e, t)
					})))
				}, D = (e, t) => async (r, n) => {
					const {
						sort: i = a.X
					} = e.params, l = Object(I.d)(e.path), m = l ? u.f : u.e, b = Object(d.a)(m, i, e.queryParams), h = n(), f = h.listings.postOrder.ids[b], g = h.listings.postOrder.api.error[b];
					if (h.listings.postOrder.api.pending[b] || f && !g && !t) return void(f && r(c.m({
						title: s.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})));
					const y = W(e.queryParams);
					await r(R(b, {
						...o()(e.queryParams, p.m),
						...o()(e.queryParams, p.l),
						filtered: !!l || void 0,
						moderated_srs: !0,
						sort: i,
						t: Object(S.a)(i, y)
					})), r(c.m({
						title: s.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})), Object(j.h)(n(), !0)
				}, F = Object(i.a)(T.i), A = Object(i.a)(T.h), B = Object(i.a)(T.g), H = e => async (t, r, {
					apiContext: s
				}) => {
					const n = r(),
						i = n.platform.currentPage;
					if (!i) return;
					const {
						sort: c = a.X
					} = e, l = i.queryParams, m = Object(I.d)(i.url), b = m ? u.f : u.e, h = Object(d.a)(b, c, l), f = n.listings.postOrder.loadMore[h];
					if (!f) return;
					const g = n.listings.postOrder.api.pending[h],
						y = n.listings.postOrder.fetchedTokens,
						_ = !(!y[h] || !y[h][f.token]);
					if (g || _) return;
					const O = W(l);
					t(F({
						key: h,
						fetchedToken: f.token
					}));
					const w = await v(s(), {
							after: f.token,
							dist: f.dist,
							filtered: !!m || void 0,
							sort: c,
							t: Object(S.a)(c, O),
							...o()(l, p.m)
						}),
						x = n.listings.postOrder.ids[h],
						C = {
							...w.body,
							postIds: (w.body.postIds || []).filter(e => !x || !x.includes(e))
						};
					w.ok ? t(A({
						key: h,
						fetchedToken: f.token,
						meta: n.meta,
						...C
					})) : t(B({
						key: h,
						error: w.error,
						fetchedToken: f.token,
						...C
					}))
				};

			function W(e) {
				const t = p.B in e && e[p.B].toUpperCase() || "";
				return t in a.gc && a.gc[t]
			}
			const U = Object(i.a)(T.c),
				V = Object(i.a)(T.b),
				G = Object(i.a)(T.a),
				q = Object(i.a)(T.l),
				K = Object(i.a)(T.k),
				J = Object(i.a)(T.j),
				Y = (e, t) => async (r, s, {
					apiContext: n
				}) => {
					const o = s(),
						a = Object(N.k)(o),
						[i, d, c, l] = t ? [V, U, G, w] : [K, q, J, x];
					if (!a || !a.displayText) return;
					const {
						currentPage: u
					} = o.platform;
					if (!u || !u.routeMatch) return;
					r(i(e));
					const p = await l(n(), a.displayText, e);
					p.ok ? (await r(D(u.routeMatch.match, !0)), r(d(e))) : r(c(p.body))
				}, Q = e => Y(e, !0), z = e => Y(e, !1)
		},
		"./src/reddit/actions/pages/powerups.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/pageTitle.ts"),
				n = r("./src/reddit/actions/gold/powerups.ts"),
				o = r("./src/reddit/actions/platform.ts"),
				a = r("./src/reddit/actions/subreddit.ts"),
				i = r("./src/reddit/actions/subscription/index.ts"),
				d = r("./src/reddit/actions/users.ts"),
				c = r("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				l = r("./src/reddit/selectors/moderatorPermissions.ts"),
				u = r("./src/reddit/selectors/subscriptions.ts"),
				p = r("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const r = t();
				if (e(Object(o.m)({
						title: Object(s.h)()
					})), await e(Object(d.t)()), !Object(p.J)(r)) return;
				await e(Object(a.q)());
				const m = Object(c.b)(r),
					b = Object(l.a)(r);
				if (m) return await e(Object(n.d)(b));
				await e(Object(i.e)()), await e(Object(n.o)());
				const h = Object(u.c)(r);
				if (h && h.length) {
					const t = h.map(e => e.id);
					await e(Object(n.d)(t))
				}
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(s.a)({
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
			t.a = n
		},
		"./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/config.ts"),
				a = r("./src/reddit/components/ContentSurvey/index.m.less"),
				i = r.n(a),
				d = r("./src/reddit/helpers/trackers/contentTag.ts"),
				c = r("./src/reddit/hooks/useTracking.ts"),
				l = r("./src/reddit/icons/fonts/index.tsx"),
				u = r("./src/reddit/components/ContentSurvey/SurveyModal.tsx");
			const {
				fbt: p
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function m({
				survey: e,
				subredditId: t
			}) {
				const [r, a] = Object(s.useState)(!1), m = Object(c.a)();
				return Object(s.useEffect)(() => m(Object(d.h)()), [m]), n.a.createElement("div", {
					className: i.a.feedBanner,
					onClick: function() {
						a(!0), m(Object(d.g)())
					}
				}, n.a.createElement("div", {
					className: i.a.notepadSnoo
				}, n.a.createElement("img", {
					src: `${o.a.assetPath}/img/snoovatar-notepad.png`
				})), n.a.createElement("div", {
					className: i.a.bannerCopy
				}, n.a.createElement("p", {
					className: i.a.copy
				}, p._("Set up this community’s content tag", null, {
					hk: "3ssqQf"
				})), n.a.createElement("p", {
					className: i.a.meta
				}, p._("Take a quick survey to help people know what to expect when they visit this community", null, {
					hk: "3sUbRf"
				}))), n.a.createElement(l.a, {
					name: "caret_right",
					className: i.a.chevron
				}), r && n.a.createElement(u.a, {
					withOverlay: !0,
					subredditId: t,
					survey: e,
					onClose: () => a(!1)
				}))
			}
		},
		"./src/reddit/components/ContentSurvey/SurveyModal.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = r("./src/higherOrderComponents/asModal/index.tsx");
			const o = Object(s.a)({
					resolved: {},
					chunkName: () => "",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => Promise.all([r.e(3), r.e(4)]).then(r.bind(null, "./src/reddit/components/ContentSurvey/index.tsx")),
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
				a = Object(n.a)(o);
			t.a = a
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
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, r) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
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
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/upperFirst.js"),
				o = r.n(n),
				a = r("./node_modules/react/index.js"),
				i = r.n(a),
				d = r("./src/config.ts"),
				c = r("./src/lib/constants/index.ts"),
				l = r("./src/lib/isFakeSubreddit/index.ts"),
				u = r("./src/reddit/constants/postLayout.ts"),
				p = r("./src/reddit/controls/Button/index.tsx"),
				m = r("./src/reddit/components/PostList/Placeholder.tsx"),
				b = r("./src/reddit/components/EmptySubreddit.m.less"),
				h = r.n(b),
				f = r("./src/lib/classNames/index.ts"),
				g = r("./src/lib/lessComponent.tsx"),
				y = r("./src/reddit/pages/Subreddit/SurveyUnit.tsx");
			const _ = g.a.wrapped(m.a, "BackgroundPlaceholder", h.a),
				v = g.a.wrapped(p.n, "SubmitLink", h.a),
				O = e => {
					switch (e) {
						case c.W.RISING:
							return s.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case c.W.TOP:
						case c.W.CONTROVERSIAL:
							return null;
						default:
							return s.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				w = ({
					listingName: e,
					sort: t
				}) => {
					const r = O(t);
					return i.a.createElement("div", {
						className: h.a.MainContent
					}, i.a.createElement("div", {
						className: h.a.PrimaryText
					}, (e => {
						switch (e) {
							case c.W.RISING:
								return s.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case c.W.TOP:
							case c.W.CONTROVERSIAL:
								return s.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [s.fbt._param("listing sort option", o()(e))], {
									hk: "48BeCW"
								});
							default:
								return s.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(t)), e && !Object(l.a)(e) && !!r && i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: h.a.SecondaryText
					}, O(t)), i.a.createElement(v, {
						to: `/r/${e}/submit`
					}, s.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				x = () => i.a.createElement("div", {
					className: h.a.MainContent
				}, i.a.createElement("img", {
					className: h.a.SnooImg,
					src: `${d.a.assetPath}/img/snoo_discovery@1x.png`
				}), i.a.createElement("div", {
					className: h.a.PrimaryText
				}, s.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), i.a.createElement(v, {
					to: "/r/popular"
				}, s.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = e => i.a.createElement(i.a.Fragment, null, e.subreddit && i.a.createElement(y.a, {
				subredditId: e.subreddit.id,
				subredditSubscribers: e.subreddit.subscribers
			}), i.a.createElement("div", {
				"data-testid": "empty-subreddit",
				className: Object(f.a)(h.a.Component, h.a.EmptyHomepage)
			}, i.a.createElement(_, {
				isLoading: !1,
				layout: u.g.Classic
			}), i.a.createElement("div", {
				className: h.a.MainContentWrapper
			}, e.subreddit ? i.a.createElement(w, e) : i.a.createElement(x, null))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				d = r("./src/higherOrderComponents/asTooltip.tsx"),
				c = r("./src/lib/classNames/index.ts"),
				l = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = r("./src/reddit/actions/preferences.ts"),
				p = r("./src/reddit/actions/tooltip.ts"),
				m = r("./src/reddit/components/TrackingHelper/index.tsx"),
				b = r("./src/reddit/constants/postLayout.ts"),
				h = r("./src/reddit/contexts/PageLayer/index.tsx"),
				f = r("./src/reddit/contexts/Tooltip.ts"),
				g = r("./src/reddit/controls/Dropdown/index.tsx"),
				y = r("./src/reddit/controls/Dropdown/Row.tsx"),
				_ = r("./src/reddit/icons/fonts/index.tsx"),
				v = r("./src/reddit/selectors/telemetry.ts"),
				O = r("./src/reddit/selectors/tooltip.ts"),
				w = r("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				x = r.n(w);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = "view--layout--FUE",
				k = "LayoutSwitch--picker",
				j = Object(d.a)(g.a),
				E = {
					[b.d.Card]: function(e) {
						return o.a.createElement(_.a, S({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return o.a.createElement(_.a, S({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return o.a.createElement(_.a, S({}, e, {
							name: "view_compact"
						}))
					}
				},
				I = {
					[b.d.Card]: () => s.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => s.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => s.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[b.d.Search]: () => s.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				N = Object(h.u)(),
				T = Object(i.c)({
					dropdownIsOpen: Object(O.b)(k),
					postLayout: h.R,
					redditStyle: h.D
				}),
				P = Object(a.b)(T, e => ({
					onListingLayoutChange: (t, r) => e(Object(u.y)(t, r)),
					openDropdown: () => e(Object(p.h)({
						tooltipId: k
					}))
				}));
			class L extends o.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: r,
							sendEvent: s,
							subredditId: n
						} = this.props;
						t ? t(e) : (r(e, n), s(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(v.Y)(t),
							subreddit: Object(v.hb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: r,
							onLayoutClick: s,
							postLayout: n
						} = this.props, a = r || b.e[n], i = e === a, d = E[e], l = I[e];
						return o.a.createElement(y.b, S({}, t, {
							className: Object(c.a)(x.a.LayoutItem, {
								[x.a.selected]: i,
								[x.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: l(),
							iconWrapperClassName: x.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: x.a.LayoutItemTextClassName
						}), o.a.createElement(d, {
							className: x.a.LayoutIcon,
							onClick: i ? void 0 : s,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(j, S({}, e, {
							className: x.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: x.a.DropdownRow,
							rowIconClassName: x.a.DropdownRowIcon,
							rowSelectedClassName: x.a.DropdownRowSelected,
							tooltipId: k
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: r,
						postLayout: s
					} = this.props, n = t || b.e[s];
					return o.a.createElement("div", {
						className: Object(c.a)(x.a.Container, e),
						id: C
					}, o.a.createElement("div", {
						className: x.a.DropdownContainer,
						onClick: r
					}, this.renderItem(n, {
						id: k,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = N(P(Object(m.c)(Object(l.a)(L))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, r) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				active: "_2VxDgoEy96XoqXUPsQooJk",
				selected: "_1s79QnBguPbckxiiPvFXGP",
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
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/listingSort/index.ts"),
				d = r("./src/reddit/actions/preferences.ts"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				l = r("./src/reddit/contexts/PageLayer/index.tsx"),
				u = r("./src/reddit/helpers/isListingFocused/index.tsx"),
				p = r("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				m = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/addQueryParams/index.ts")),
				b = r("./src/lib/constants/index.ts"),
				h = r("./node_modules/react-router-redux/es/index.js"),
				f = r("./node_modules/reselect/es/index.js"),
				g = r("./src/reddit/actions/tooltip.ts"),
				y = r("./node_modules/fbt/lib/FbtPublic.js"),
				_ = r("./src/higherOrderComponents/asTooltip.tsx"),
				v = r("./src/reddit/constants/history.ts"),
				O = r("./src/reddit/constants/listingSorts.ts"),
				w = r("./src/reddit/contexts/Tooltip.ts"),
				x = r("./src/reddit/controls/Dropdown/index.tsx"),
				S = r("./src/reddit/controls/Dropdown/Row.tsx"),
				C = r("./src/reddit/helpers/path/index.ts"),
				k = r("./src/reddit/helpers/trackers/navigation.ts"),
				j = r("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				E = r("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				I = r("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				N = r("./src/reddit/selectors/tooltip.ts"),
				T = r("./src/reddit/selectors/user.ts"),
				P = r("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				L = r("./src/reddit/components/ListingSort/index.m.less"),
				M = r.n(L),
				R = r("./src/lib/lessComponent.tsx");

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const F = "ListingSort--SortPicker",
				A = Object(_.a)(R.a.wrapped(x.a, "Dropdown", M.a)),
				B = R.a.wrapped(P.a, "ListingSortIcon", M.a),
				H = (R.a.wrapped(j.b, "DropdownTriangle", M.a), R.a.div("Title", M.a)),
				W = R.a.wrapped(e => n.a.createElement(S.b, D({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", M.a),
				U = ({
					disabled: e,
					...t
				}) => n.a.createElement("div", D({}, t, {
					className: Object(a.a)(M.a.SortWrapper, t.className, {
						[M.a.isDisabled]: e
					})
				})),
				V = R.a.div("DropdownRowDisabled", M.a),
				G = Object(l.u)({
					isFrontpage: l.A,
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				q = Object(f.c)({
					isAwardListingExperimentEnabled: I.a,
					isBestSortPopularEnabled: E.a,
					user: T.k,
					dropdownIsOpen: (e, t) => Object(N.b)(t.dropdownId || F)(e),
					isPopularPage: l.F
				}),
				K = Object(o.b)(q, (e, {
					dropdownId: t,
					pageLayer: r
				}) => ({
					onOpenDropdown: () => e(Object(g.h)({
						tooltipId: t || F
					}))
				}));
			var J = R.a.wrapped(G(K(Object(c.c)(e => n.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && n.a.createElement(H, null, y.fbt._("Sort", null, {
					hk: "2BfINq"
				})), n.a.createElement(U, {
					disabled: e.disabled
				}, e.children || n.a.createElement(W, {
					className: e.buttonClassName,
					displayText: Object(O.a)(e.sort),
					id: e.dropdownId || F,
					showDropdownTriangle: !0
				}, n.a.createElement(B, {
					sort: e.sort
				}))), n.a.createElement(w.a.Consumer, null, t => n.a.createElement(A, D({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || F
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? n.a.createElement(V, null, y.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, r, s, n) => {
					const o = [b.W.HOT, b.W.NEW, b.W.TOP, b.W.RISING];
					return (e && (r || s) || t && s) && o.unshift(b.W.BEST), t && n && o.splice(3, 0, b.W.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => {
					const r = e.isProfilePage ? Object(m.a)(e.baseUrl, {
							sort: t
						}) : Object(C.a)(e.baseUrl, `${t}/`),
						s = r.split("?")[0],
						o = e.isProfilePage ? r.replace(s + "?", "") : void 0;
					return n.a.createElement(S.b, {
						className: Object(a.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
						displayText: Object(O.a)(t),
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(k.b)(t))
						},
						href: {
							pathname: s,
							state: {
								[v.b.FeedLoadReason]: v.a.SortChange
							},
							search: o
						},
						isSelected: e.sort === t,
						key: t
					}, n.a.createElement(B, {
						className: e.rowIconClassName,
						sort: t
					}))
				}))))))), "ListingSort", M.a),
				Y = r("./src/reddit/constants/parameters.ts");
			const Q = e => {
					const t = z[e];
					return t && t() || ""
				},
				z = {
					[b.dc.AllStates]: () => y.fbt._("All", null, {
						hk: "3FfdRL"
					}),
					[b.dc.Alaska]: () => y.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[b.dc.Alabama]: () => y.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[b.dc.Arkansas]: () => y.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[b.dc.Arizona]: () => y.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[b.dc.California]: () => y.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[b.dc.Colorado]: () => y.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[b.dc.Connecticut]: () => y.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[b.dc.DistrictOfColumbia]: () => y.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[b.dc.Delaware]: () => y.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[b.dc.Florida]: () => y.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[b.dc.Georgia]: () => y.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[b.dc.Hawaii]: () => y.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[b.dc.Iowa]: () => y.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[b.dc.Idaho]: () => y.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[b.dc.Illinois]: () => y.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[b.dc.Indiana]: () => y.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[b.dc.Kansas]: () => y.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[b.dc.Kentucky]: () => y.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[b.dc.Louisiana]: () => y.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[b.dc.Massachusetts]: () => y.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[b.dc.Maryland]: () => y.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[b.dc.Maine]: () => y.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[b.dc.Michigan]: () => y.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[b.dc.Minnesota]: () => y.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[b.dc.Missouri]: () => y.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[b.dc.Mississippi]: () => y.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[b.dc.Montana]: () => y.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[b.dc.NorthCarolina]: () => y.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[b.dc.NorthDakota]: () => y.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[b.dc.Nebraska]: () => y.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[b.dc.NewHampshire]: () => y.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[b.dc.NewJersey]: () => y.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[b.dc.NewMexico]: () => y.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[b.dc.Nevada]: () => y.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[b.dc.NewYork]: () => y.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[b.dc.Ohio]: () => y.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[b.dc.Oklahoma]: () => y.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[b.dc.Oregon]: () => y.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[b.dc.Pennsylvania]: () => y.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[b.dc.RhodeIsland]: () => y.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[b.dc.SouthCarolina]: () => y.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[b.dc.SouthDakota]: () => y.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[b.dc.Tennessee]: () => y.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[b.dc.Texas]: () => y.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[b.dc.Utah]: () => y.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[b.dc.Virginia]: () => y.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[b.dc.Vermont]: () => y.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[b.dc.Washington]: () => y.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[b.dc.Wisconsin]: () => y.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[b.dc.WestVirginia]: () => y.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[b.dc.Wyoming]: () => y.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var X = r("./src/reddit/components/StateSort/index.m.less"),
				Z = r.n(X);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = R.a.wrapped(x.a, "_Dropdown", Z.a),
				te = Object(_.a)(ee),
				re = e => {
					return e.indexOf("_") > 0 && ne(e) === b.A.UnitedStates
				},
				se = e => {
					if (re(e)) {
						return e.split("_")[1]
					}
					return b.dc.AllStates
				},
				ne = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				oe = e => {
					const t = ne(e),
						r = se(e);
					return re(e) ? `${t}_${r}` : t
				},
				ae = Object(l.u)(),
				ie = Object(f.c)({
					dropdownIsOpen: Object(N.b)("StateSort--StateSortPicker")
				}),
				de = Object(o.b)(ie, e => ({
					onOpenDropdown: () => e(Object(g.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, r) => {
						e(Object(h.b)(t)), e(Object(d.w)(b.A.UnitedStates + "_" + r))
					}
				}));
			var ce = R.a.wrapped(ae(de(e => {
				const t = `${e.baseUrl}?${Y.i}=${b.A.UnitedStates}`;
				return n.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, n.a.createElement(U, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, n.a.createElement(W, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : Q(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), n.a.createElement(w.a.Consumer, null, r => n.a.createElement(te, $({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, r, {
					renderContentsHidden: !0
				}), Object.keys(b.dc).map(r => {
					const s = b.dc[r];
					return n.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === b.dc.AllStates ? t : `${t}_${e}`)(s), oe(s))
					}, n.a.createElement(S.b, {
						className: Object(a.a)(e.rowClassName, e.sort === s ? e.rowSelectedClassName : void 0),
						displayText: Q(s),
						isSelected: e.sort === s
					}))
				}))))
			})), "Component", Z.a);
			const le = {
				[b.A.Everywhere]: () => y.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[b.A.UnitedStates]: () => y.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[b.A.Argentina]: () => y.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[b.A.Australia]: () => y.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[b.A.Bulgaria]: () => y.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[b.A.Canada]: () => y.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[b.A.Chile]: () => y.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[b.A.Colombia]: () => y.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[b.A.Croatia]: () => y.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[b.A.CzechRepublic]: () => y.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[b.A.Finland]: () => y.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[b.A.France]: () => y.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[b.A.Germany]: () => y.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[b.A.Greece]: () => y.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[b.A.Hungary]: () => y.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[b.A.Iceland]: () => y.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[b.A.India]: () => y.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[b.A.Ireland]: () => y.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[b.A.Italy]: () => y.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[b.A.Japan]: () => y.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[b.A.Malaysia]: () => y.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[b.A.Mexico]: () => y.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[b.A.NewZealand]: () => y.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[b.A.Philippines]: () => y.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[b.A.Poland]: () => y.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[b.A.Portugal]: () => y.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[b.A.PuertoRico]: () => y.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[b.A.Romania]: () => y.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[b.A.Serbia]: () => y.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[b.A.Singapore]: () => y.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[b.A.Spain]: () => y.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[b.A.Sweden]: () => y.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[b.A.Taiwan]: () => y.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[b.A.Thailand]: () => y.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[b.A.Turkey]: () => y.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[b.A.UnitedKingdom]: () => y.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var ue = r("./src/reddit/components/CountrySort/index.m.less"),
				pe = r.n(ue);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const be = "CountrySort--CountrySortPicker",
				he = Object(l.u)(),
				fe = Object(f.c)({
					dropdownIsOpen: Object(N.b)(be)
				});
			var ge = he(Object(o.b)(fe, e => ({
					onCloseDropdown: t => e(Object(g.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(g.g)({
						tooltipId: t
					})),
					onClickLink: (t, r) => {
						e(Object(h.b)(t, {
							[v.b.FeedLoadReason]: v.a.GeoModeChange
						})), e(Object(d.w)(r))
					}
				}))(e => {
					const t = ne(e.sort),
						r = se(e.sort),
						s = `${e.baseUrl}?${Y.i}=`;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: Object(a.a)(pe.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(be) : e.onOpenDropdown(be)
					}, n.a.createElement(U, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, n.a.createElement(W, {
						className: e.buttonClassName,
						displayText: (() => t in le ? le[t]() : le[b.A.Everywhere]())(),
						id: be,
						showDropdownTriangle: !0
					})), n.a.createElement(w.a.Consumer, null, r => n.a.createElement(te, me({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: be
					}, r, {
						renderContentsHidden: !0
					}), Object.keys(b.A).map(r => {
						const o = b.A[r];
						return n.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${s}${oe(o)}`, o)
						}, n.a.createElement(S.b, {
							className: Object(a.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
							displayText: le[o](),
							isSelected: t === o
						}))
					})))), t === b.A.UnitedStates && n.a.createElement(ce, {
						baseUrl: e.baseUrl,
						buttonClassName: e.buttonClassName,
						className: e.stateSortClassName,
						disabled: e.disabled,
						dropdownClassName: e.dropdownClassName,
						rowClassName: e.rowClassName,
						rowSelectedClassName: e.rowSelectedClassName,
						showStateAbbreviations: e.showStateAbbreviations,
						sort: r,
						wrapperClassName: e.wrapperClassName
					}))
				})),
				ye = r("./node_modules/path-browserify/index.js"),
				_e = r.n(ye),
				ve = r("./src/reddit/components/TimeSort/index.m.less"),
				Oe = r.n(ve);

			function we() {
				return (we = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const xe = Object(_.a)(x.a),
				Se = R.a.div("ListingSortContainer", Oe.a),
				Ce = Object(l.u)(),
				ke = Object(f.c)({
					dropdownIsOpen: Object(N.b)("TimeSort--SortPicker")
				});
			var je = Ce(Object(o.b)(ke, e => ({
					onOpenDropdown: () => e(Object(g.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(c.c)(e => n.a.createElement(Se, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, n.a.createElement(U, {
					className: e.wrapperClassName,
					disabled: !1
				}, n.a.createElement(W, {
					className: e.buttonClassName,
					displayText: Object(O.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), n.a.createElement(w.a.Consumer, null, t => n.a.createElement(xe, we({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [b.gc.HOUR, b.gc.DAY, b.gc.WEEK, b.gc.MONTH, b.gc.YEAR, b.gc.ALL].map(t => {
					const r = ((e, t) => {
							let r = e.url;
							return e.urlParams.sort || Object(l.J)(e) || (r = _e.a.join(r, t)), r
						})(e.pageLayer, e.listingSort),
						s = Object(m.a)(r, {
							[Y.B]: t
						}),
						o = s.split("?")[0],
						i = `${s.replace(o+"?","")}`;
					return n.a.createElement(S.b, {
						className: Object(a.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
						key: `time_sort_${t}`,
						displayText: Object(O.b)(t),
						href: {
							pathname: o,
							state: {
								[v.b.FeedLoadReason]: v.a.SortChange
							},
							search: i
						},
						isSelected: e.timeSort === t,
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(k.d)(t))
						}
					})
				}))))))),
				Ee = r("./src/reddit/constants/listings.ts"),
				Ie = r("./src/reddit/controls/Button/index.tsx"),
				Ne = r("./src/reddit/icons/fonts/index.tsx"),
				Te = r("./src/reddit/selectors/meta.ts"),
				Pe = r("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Le = r.n(Pe);

			function Me() {
				return (Me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Re = new Set([b.W.CONTROVERSIAL, b.W.TOP]),
				De = new Set([b.W.CONTROVERSIAL, b.W.RISING]),
				Fe = new Set([b.W.CONTROVERSIAL]),
				Ae = "ListingSort--Overflow",
				Be = Object(l.u)({
					isFrontpage: l.A,
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				He = Object(f.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, E.a, T.k, l.F, I.a, Te.i, (e, t, r, s, n, o, a) => {
					if (e) return {
						isPopularPage: n,
						sortOptions: e,
						locale: a
					};
					const i = [b.W.HOT, b.W.NEW, b.W.TOP, b.W.RISING];
					return (t && (s || r) || n && r) && i.unshift(b.W.BEST), n && o && i.splice(3, 0, b.W.AWARDED), {
						isPopularPage: n,
						sortOptions: i,
						locale: a
					}
				});
			class We extends n.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(k.b)(e))
					}, this.renderSortButton = e => {
						const {
							sort: t,
							baseUrl: r,
							isProfilePage: s
						} = this.props, o = s ? Object(m.a)(r, {
							sort: e
						}) : Object(C.a)(r, `${e}/`), i = o.split("?")[0], d = s ? o.replace(i + "?", "") : void 0;
						return n.a.createElement(Ie.t, {
							className: Object(a.a)(Le.a.SortLink, e === t && Le.a.selected),
							kind: Ie.b.InternalLink,
							priority: Ie.c.Plain,
							Icon: r => n.a.createElement(B, Me({}, r, {
								className: Object(a.a)(Le.a.SortIcon, r.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(O.a)(e),
							onClick: () => this.changeSort(e),
							to: {
								pathname: i,
								state: {
									[v.b.FeedLoadReason]: v.a.SortChange
								},
								search: d
							},
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: r,
							isPopularPage: s,
							sort: o
						} = this.props, a = s && !!r && e === b.W.HOT && o === b.W.HOT;
						return n.a.createElement(n.a.Fragment, {
							key: e
						}, this.renderSortButton(e), a && n.a.createElement(ge, {
							baseUrl: Ee.c[Ee.b.Popular],
							buttonClassName: Le.a.DropdownButton,
							className: Le.a.CountrySort,
							disabled: t,
							dropdownClassName: Le.a.Dropdown,
							rowClassName: Le.a.DropdownRow,
							rowSelectedClassName: Le.a.DropdownRowSelected,
							wrapperClassName: Le.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: r,
							stateSortClassName: Le.a.StateSort
						}))
					}
				}
				isLocaleDependentOverflowSort(e) {
					const {
						sort: t,
						isPopularPage: r,
						locale: s
					} = this.props;
					return !s.startsWith("en") && (r ? e === b.W.AWARDED && (t === b.W.HOT || t === b.W.TOP) : e === b.W.BEST && t === b.W.TOP)
				}
				isWideSortCurrentSelected(e) {
					const {
						sort: t
					} = this.props, r = new Set([b.W.TOP, b.W.NEW]);
					return Fe.has(t) && r.has(e)
				}
				isOverflowSort(e) {
					return De.has(e) || this.isLocaleDependentOverflowSort(e) || this.isWideSortCurrentSelected(e)
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: r,
						sort: s,
						sortOptions: o,
						timeSort: i
					} = this.props, d = !t && Re.has(s), c = De.has(s), l = o.filter(e => !this.isOverflowSort(e)), u = o.filter(e => this.isOverflowSort(e) && e !== s);
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(J, Me({}, this.props, {
						buttonClassName: Le.a.DropdownButton,
						className: Object(a.a)(Le.a.SortDropdown, e),
						rowClassName: Le.a.DropdownRow,
						rowIconClassName: Le.a.DropdownRowIcon,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						showTitle: !1
					})), n.a.createElement("div", {
						className: Object(a.a)(Le.a.SortButtons, e)
					}, l.map(this.renderSort)), c && this.renderSort(s), d && n.a.createElement(je, {
						buttonClassName: Le.a.DropdownButton,
						className: Le.a.TimeSort,
						dropdownClassName: Le.a.Dropdown,
						listingSort: s,
						onChange: r,
						rowClassName: Le.a.DropdownRow,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						timeSort: i || b.hc,
						wrapperClassName: Le.a.DropdownSortWrapper
					}), u.length > 0 && n.a.createElement(J, Me({}, this.props, {
						className: Object(a.a)(Le.a.SortOverflow, e),
						dropdownClassName: Le.a.Dropdown,
						dropdownId: Ae,
						rowClassName: Le.a.DropdownRow,
						rowIconClassName: Le.a.DropdownRowIcon,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), n.a.createElement("button", {
						className: Le.a.SortOverflowButton,
						id: Ae
					}, n.a.createElement(Ne.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var Ue = Be(Object(o.b)(He)(Object(c.c)(We))),
				Ve = r("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				Ge = r.n(Ve);
			const qe = Object(l.u)({
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				Ke = Object(o.b)(null, (e, {
					subredditId: t
				}) => ({
					updateSortPreference: (r, s) => {
						if (t) {
							const n = Object(i.c)({
								sort: r,
								timeSort: s
							});
							e(Object(d.J)(t, n))
						}
					}
				}));
			class Je extends n.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						u.a.setState({
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
						countrySort: r,
						disabled: s = !1,
						isProfilePage: o,
						sort: i,
						sortOptions: d,
						subredditId: c,
						timeSort: l,
						updateSortPreference: u
					} = this.props;
					return n.a.createElement("div", {
						className: Object(a.a)(Ge.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, n.a.createElement(Ue, {
						baseUrl: e,
						disabled: s,
						geopopularSort: r,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: d,
						timeSort: l
					}), !o && n.a.createElement(p.a, {
						className: Ge.a.LayoutSwitch,
						subredditId: c
					}))
				}
			}
			t.a = qe(Ke(Object(c.c)(Je)))
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, r) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				rightBorderExp: "d2l2sN1D4PNVkzMmwALA2",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S",
				wrapperExp: "_1C67uwkUf95iJOZ63vDJOZ"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return b
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "a", (function() {
				return g
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/constants/componentSizes.ts"),
				d = r("./src/reddit/contexts/NavbarExp.ts"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/components/JumpToContent/index.m.less"),
				u = r.n(l);
			const p = Object(n.createContext)(null),
				m = Object(n.createContext)(null);
			class b extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						handleRef: null
					}, this.setHandleRef = e => {
						this.state.handleRef !== e && this.setState({
							handleRef: e
						})
					}
				}
				render() {
					return o.a.createElement(p.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, o.a.createElement(m.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const h = i.f + 10,
				f = o.a.memo(() => {
					const [e, t] = Object(n.useState)("-500px"), r = Object(n.useContext)(d.a);
					return o.a.createElement(p.Consumer, null, n => n && o.a.createElement("div", {
						className: Object(a.a)(u.a.wrapper, {
							[u.a.wrapperExp]: r
						}),
						"data-testid": "jump-to-content"
					}, o.a.createElement(c.t, {
						kind: c.b.Button,
						priority: c.c.Plain,
						className: u.a.button,
						style: {
							marginLeft: e
						},
						onBlur: e => {
							const r = e.currentTarget.clientWidth + 55;
							t(`-${r}px`)
						},
						onFocus: () => {
							t("0")
						},
						onClick: () => {
							n.focus(), n.scrollIntoView(), window.scrollBy(0, -h)
						}
					}, s.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), o.a.createElement("div", {
						className: Object(a.a)(u.a.rightBorder, {
							[u.a.rightBorderExp]: r
						})
					})))
				}),
				g = o.a.memo(() => o.a.createElement(m.Consumer, null, e => o.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/components/PostList/index.tsx"),
				n = r("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(n.a)(s.a)
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/constants/index.ts"),
				i = r("./src/reddit/icons/fonts/index.tsx"),
				d = r("./src/reddit/controls/Dropdown/index.m.less"),
				c = r.n(d);
			const l = {
				[a.W.BEST]: "best",
				[a.W.HOT]: "hot",
				[a.W.NEW]: "new",
				[a.W.CONTROVERSIAL]: "controversial",
				[a.W.TOP]: "top",
				[a.W.RISING]: "rising",
				[a.W.AWARDED]: "award"
			};

			function u({
				className: e,
				isFilled: t,
				sort: r
			}) {
				return l[r] ? n.a.createElement(i.a, {
					name: l[r],
					isFilled: t,
					className: Object(o.a)(e, c.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, r) {
			e.exports = {
				Dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				DropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				dropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				Title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				Row: "_1gYorLdXyKMUS-i9loCkHd",
				row: "_1gYorLdXyKMUS-i9loCkHd",
				SortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				sortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				isDisabled: "_1BlN3qzijbBTtkKxs6CX-N",
				DropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				dropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				ListingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu"
			}
		},
		"./src/reddit/components/ModHub/Content/NoPermissions.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/config.ts"),
				n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				i = r("./src/reddit/contexts/NavbarExp.ts"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/ModHub/Content/index.m.less"),
				l = r.n(c);
			t.a = e => {
				const t = Object(o.useContext)(i.a);
				return a.a.createElement("div", {
					className: Object(d.a)(l.a.noPermissions, {
						[l.a.noPermissionsExp]: t
					})
				}, a.a.createElement("img", {
					className: l.a.rememberTheHuman,
					src: `${s.a.assetPath}/img/content-gate-icons/remember-the-human.png`
				}), e.isModerator ? n.fbt._("Sorry, you do not have the moderator permissions needed to view this page", null, {
					hk: "4wUDIF"
				}) : n.fbt._("Sorry, this is a moderator-only page", null, {
					hk: "2BZEIA"
				}), a.a.createElement("div", {
					className: l.a.noPermissionsSmallText
				}, e.isModerator ? n.fbt._("You need to change your mod permissions to view this page", null, {
					hk: "RS9sd"
				}) : e.subredditDisplayText ? n.fbt._("You must be a moderator of {subredditName} to view this page", [n.fbt._param("subredditName", e.subredditDisplayText)], {
					hk: "8eU68"
				}) : n.fbt._("You must be a moderator to view this page", null, {
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
				bodyFont: "_38q9ZzND20FKMoX8BeB0u8",
				bodyFontSmall: "_1tFfFAHeLftmld2a2M4yIs",
				bodyFontMono: "_1N1SJCd40K_9LeW3MSWULf",
				rememberTheHuman: "_2S6IM2TPtTriI4r_2Op1Od",
				noPermissions: "_3jaCG74Q3u55JqGJy3u664",
				noPermissionsExp: "_30KCF1VJPMgbkHOfEhoE2p",
				noPermissionsSmallText: "_1Kxv5kLQoEOhRatEhltXrQ",
				container: "_3gsyCuYXsGWEEgPSTuX9aw",
				isLargePostLayout: "_1WGjuBpIEjcQC-x3_lE_Nu"
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
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, r) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return m
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "n", (function() {
				return h
			})), r.d(t, "p", (function() {
				return f
			})), r.d(t, "o", (function() {
				return g
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "m", (function() {
				return _
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "j", (function() {
				return O
			})), r.d(t, "k", (function() {
				return w
			})), r.d(t, "g", (function() {
				return x
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "q", (function() {
				return C
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "l", (function() {
				return j
			})), r.d(t, "t", (function() {
				return E
			})), r.d(t, "u", (function() {
				return I
			})), r.d(t, "r", (function() {
				return N
			})), r.d(t, "a", (function() {
				return T
			})), r.d(t, "s", (function() {
				return P
			})), r.d(t, "c", (function() {
				return L
			}));
			var s = r("./src/lib/classNames/index.ts"),
				n = r("./src/lib/lessComponent.tsx"),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				i = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/controls/Input/ModalInput.tsx"),
				c = r("./src/reddit/icons/svgs/Close/index.tsx"),
				l = r("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = r.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = n.a.wrapped(c.a, "CloseIcon", u.a),
				b = n.a.section("ModalBody", u.a),
				h = n.a.section("ModalPostPreview", u.a),
				f = n.a.p("ModalText", u.a),
				g = n.a.div("ModalSmallText", u.a),
				y = n.a.div("ModalDescriptionText", u.a),
				_ = n.a.div("ModalMetaText", u.a),
				v = n.a.label("ModalFormItem", u.a),
				O = n.a.wrapped(d.a, "ModalInput", u.a),
				w = n.a.label("ModalInputLabel", u.a),
				x = n.a.footer("ModalFooter", u.a),
				S = n.a.header("ModalHeader", u.a),
				C = n.a.div("ModalTitle", u.a),
				k = n.a.div("ModalAnnotation", u.a),
				j = n.a.div("ModalMain", u.a),
				E = n.a.textarea("TextArea", u.a),
				I = n.a.wrapped(i.l, "WarningButton", u.a),
				N = n.a.wrapped(i.l, "PrimaryButton", u.a),
				T = n.a.wrapped(i.o, "CancelButton", u.a),
				P = n.a.wrapped(i.r, "RemoveButton", u.a),
				L = ({
					className: e,
					...t
				}) => a.a.createElement(i.t, p({
					kind: i.b.Button,
					priority: i.c.Primary,
					className: Object(s.a)(u.a.ConfirmButton, e)
				}, t))
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
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				l = r("./src/reddit/components/SubredditIcon/index.tsx"),
				u = r("./src/reddit/selectors/subreddit.ts"),
				p = r("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				m = r.n(p),
				b = r("./src/lib/lessComponent.tsx");
			const h = b.a.wrapped(l.b, "SubredditIcon", m.a),
				f = b.a.span("Label", m.a),
				g = Object(c.c)({
					subredditOrProfile: u.J
				});
			var y = Object(d.b)(g)(({
				children: e,
				subredditOrProfile: t
			}) => e(t, o.a.createElement(o.a.Fragment, null, o.a.createElement(h, {
				subredditOrProfile: t
			}), o.a.createElement(f, null, t.displayText))));
			var _ = ({
					children: e,
					className: t,
					subredditsOrProfilesIds: r
				}) => {
					const s = r.map(t => o.a.createElement(y, {
						children: e,
						key: t.id,
						identifier: t
					}));
					return o.a.createElement("div", {
						className: t
					}, s)
				},
				v = r("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				O = r.n(v);
			const w = b.a.div("CommunityCount", O.a),
				x = b.a.wrapped(_, "SubredditsOrProfiles", O.a),
				S = b.a.wrapped(a.a, "SidebarSubreddit", O.a),
				C = b.a.wrapped(a.a, "ModalSubreddit", O.a);
			var k;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(k || (k = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: r,
					onSeeMoreDetails: n,
					subredditCategory: a = {
						name: s.fbt._("multi", null, {
							hk: "28Z7Rp"
						})
					}
				} = e, d = t ? S : C, c = r.length, l = t && r.length > 4;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(w, null, s.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [s.fbt._plural(c, "number"), s.fbt._param("category", a.name)], {
					hk: "33iWe4"
				})), c > 0 && o.a.createElement(x, {
					subredditsOrProfilesIds: t ? r.slice(0, 4) : r
				}, (t, r) => o.a.createElement(d, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, r)), c > 0 && l && o.a.createElement(i.r, {
					onClick: n
				}, s.fbt._("See more", null, {
					hk: "QYkk2"
				})))
			}
		},
		"./src/reddit/components/PowerupsCncModule/async.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(s.a)({
				resolved: {},
				chunkName: () => "PowerupsCncModule",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => Promise.resolve().then(r.bind(null, "./src/reddit/components/PowerupsCncModule/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/PowerupsCncModule/index.tsx"
				}
			})
		},
		"./src/reddit/components/PowerupsCncModule/index.m.less": function(e, t, r) {
			e.exports = {
				feedBanner: "_2I3Bfot0_z2fpeo6zu0l2J",
				powerupsLogo: "TQxDD5iDKrkEL8_gkvPUG",
				bolt: "lLsxHGuplL1k0pxt72AKH",
				bannerText: "_3yaV1tcyLQQaYxZ9yj1uPA",
				heading: "_2lL5MmI9e4lUGXlgHCdMMq",
				description: "_2Q6-RCjBdZlxyT48OReije",
				chevron: "_1GgOcxnjXNupiwBONGaA3T"
			}
		},
		"./src/reddit/components/PowerupsCncModule/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "isPowerupsCncModuleHiddenBySpamLimit", (function() {
				return y
			}));
			var s = r("./src/config.ts"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/lib/opener/index.ts"),
				d = r("./src/reddit/constants/localStorage.ts"),
				c = r("./src/reddit/helpers/localStorage/index.ts"),
				l = r("./src/reddit/helpers/trackers/powerups.ts"),
				u = r("./src/reddit/hooks/useTracking.ts"),
				p = r("./src/reddit/icons/fonts/index.tsx"),
				m = r("./src/reddit/routes/powerups/index.ts"),
				b = r("./src/reddit/selectors/subreddit.ts"),
				h = r("./src/reddit/components/PowerupsCncModule/index.m.less"),
				f = r.n(h);
			const {
				fbt: g
			} = r("./node_modules/fbt/lib/FbtPublic.js"), y = e => {
				return Object(c.j)(d.b.POWERUPS_CNC_MODULE_VISIBILITY_STORE, e) > 1
			};
			t.default = ({
				subredditId: e
			}) => {
				const t = Object(u.a)(),
					r = Object(a.e)(t => Object(b.R)(t, {
						subredditId: e
					})),
					h = !!r;
				return Object(n.useEffect)(() => {
					h && (Object(c.S)(d.b.POWERUPS_CNC_MODULE_VISIBILITY_STORE, e), y(e) || t(Object(l.c)()))
				}, [t, h, e]), h ? o.a.createElement("a", {
					className: f.a.feedBanner,
					onClick: () => {
						t(Object(l.b)())
					},
					href: `${s.a.redditUrl}${m.a}`,
					rel: i.c,
					target: "_blank"
				}, o.a.createElement("div", {
					className: f.a.powerupsLogo
				}, o.a.createElement("img", {
					className: f.a.bolt,
					src: `${s.a.assetPath}/img/powerups/powerups-cnc.svg`,
					alt: g._("powerups lightning bolt", null, {
						hk: "2QR5Up"
					})
				})), o.a.createElement("div", {
					className: f.a.bannerText
				}, o.a.createElement("p", {
					className: f.a.heading
				}, g._("Give {subreddit name} members a way to give back", [g._param("subreddit name", r.displayText)], {
					hk: "4poXz"
				})), o.a.createElement("p", {
					className: f.a.description
				}, g._("Harness the power of your community to unlock special perks and features using Powerups.", null, {
					hk: "fJGis"
				}))), o.a.createElement(p.a, {
					name: "caret_right",
					className: f.a.chevron
				})) : null
			}
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/lessComponent.tsx"),
				n = r("./src/reddit/components/SidebarContainer/index.m.less"),
				o = r.n(n);
			t.a = s.a.div("container", o.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, r) {
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
				copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				CountryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR",
				countryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/lessComponent.tsx"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx"),
				c = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = r("./src/reddit/contexts/PageLayer/index.tsx"),
				u = r("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				p = r("./src/reddit/helpers/trackers/navigation.ts"),
				m = r("./src/reddit/selectors/experiments/countrySites.ts"),
				b = r("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				h = r("./src/reddit/components/SidebarFooter/index.m.less"),
				f = r.n(h);
			const {
				fbt: g
			} = r("./node_modules/fbt/lib/FbtPublic.js"), y = i.a.a("Link", f.a), _ = Object(a.c)({
				isCountrySitesEnabled: m.a,
				isNavbarLikeMwebEnabled: b.a
			}), v = Object(o.b)(_), O = Object(l.u)({
				isFrontpage: l.A,
				isCountrySitePage: l.y
			});
			t.a = O(v(Object(d.c)(e => e.isNavbarLikeMwebEnabled ? e.isFrontpage ? n.a.createElement(c.a, {
				className: f.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, n.a.createElement("div", {
				className: f.a.LinkContainer
			}, n.a.createElement("div", {
				className: f.a.Column
			}, n.a.createElement(y, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, g._("User Agreement", null, {
				hk: "2RA6JL"
			})), n.a.createElement(y, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, g._("Privacy policy", null, {
				hk: "10K04G"
			}))), n.a.createElement("div", {
				className: f.a.Column
			}, n.a.createElement(y, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, g._("Content policy", null, {
				hk: "1DyxZS"
			})), n.a.createElement(y, {
				href: "https://www.redditinc.com/policies/moderator-guidelines"
			}, g._("Moderator Guidelines", null, {
				hk: "2O9otm"
			})))), n.a.createElement("div", {
				className: f.a.Copyright
			}, g._("© {year} Reddit, Inc. All rights reserved.", [g._param("year", (new Date).getFullYear().toString())], {
				hk: "sR7zP"
			}))) : null : n.a.createElement(c.a, {
				className: f.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, n.a.createElement("div", {
				className: f.a.LinkContainer
			}, n.a.createElement("div", {
				className: f.a.Column
			}, n.a.createElement(y, {
				href: "https://www.reddithelp.com"
			}, g._("help", null, {
				hk: "4lyYaD"
			})), n.a.createElement(y, {
				href: "https://www.reddit.com/coins"
			}, g._("Reddit coins", null, {
				hk: "32iMaN"
			})), n.a.createElement(y, {
				href: "https://www.reddit.com/premium"
			}, g._("Reddit premium", null, {
				hk: "RuO3A"
			})), e.isFrontpage && n.a.createElement(n.a.Fragment, null, n.a.createElement(y, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, g._("Communities", null, {
				hk: "3CJu37"
			})), n.a.createElement(y, {
				href: `https://www.reddit.com${Object(u.a)()}`
			}, g._("Rereddit", null, {
				hk: "1z3k7C"
			})), n.a.createElement(y, {
				href: "https://www.reddit.com/topics/a-1/"
			}, g._("Topics", null, {
				hk: "349RFt"
			})))), n.a.createElement("div", {
				className: f.a.Column
			}, n.a.createElement(y, {
				href: "https://about.reddit.com"
			}, g._("about", null, {
				hk: "1sqJKs"
			})), n.a.createElement(y, {
				href: "https://about.reddit.com/careers/"
			}, g._("careers", null, {
				hk: "26ABvc"
			})), n.a.createElement(y, {
				href: "https://about.reddit.com/press/"
			}, g._("press", null, {
				hk: "2Qmgdz"
			})), n.a.createElement(y, {
				href: "https://www.redditinc.com/advertising"
			}, g._("advertise", null, {
				hk: "Mt40U"
			})), n.a.createElement(y, {
				href: "http://www.redditblog.com/"
			}, g._("blog", null, {
				hk: "46IQJw"
			})), n.a.createElement(y, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, g._("Terms", null, {
				hk: "4qRzfE"
			})), n.a.createElement(y, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, g._("Content policy", null, {
				hk: "1DyxZS"
			})), n.a.createElement(y, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, g._("Privacy policy", null, {
				hk: "10K04G"
			})), n.a.createElement(y, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, g._("Mod policy", null, {
				hk: "2gYc2T"
			})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && n.a.createElement("div", {
				className: f.a.CountryLinkContainer
			}, n.a.createElement("div", {
				className: f.a.Column
			}, n.a.createElement(y, {
				href: "/",
				onClick: () => e.sendEvent(Object(p.a)("en"))
			}, g._("USA/Global", null, {
				hk: "3nQepG"
			}))), n.a.createElement("div", {
				className: f.a.Column
			}, n.a.createElement(y, {
				href: "/de/",
				onClick: () => e.sendEvent(Object(p.a)("de"))
			}, g._("Deutsch", null, {
				hk: "31zojm"
			})))), n.a.createElement("div", {
				className: f.a.Copyright
			}, g._("Reddit Inc © {year}. All rights reserved", [g._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			}))))))
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/classNames/index.ts"),
				n = r("./node_modules/lodash/throttle.js"),
				o = r.n(n),
				a = r("./node_modules/react/index.js"),
				i = r.n(a),
				d = r("./src/lib/constants/index.ts"),
				c = r("./src/reddit/constants/elementIds.ts"),
				l = r("./src/reddit/controls/Button/index.tsx"),
				u = r("./src/reddit/components/BackToTop/index.m.less"),
				p = r.n(u);
			const {
				fbt: m
			} = r("./node_modules/fbt/lib/FbtPublic.js"), b = e => {
				if (e) {
					const e = document.getElementById(c.d);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var h = ({
					className: e,
					isOverlay: t,
					style: r
				}) => i.a.createElement("div", {
					className: Object(s.a)(e, p.a.container),
					style: r
				}, i.a.createElement(l.l, {
					className: p.a.button,
					onClick: () => b(t)
				}, m._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				f = r("./src/reddit/components/SidebarFooter/index.tsx"),
				g = r("./src/reddit/constants/componentSizes.ts"),
				y = r("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = r("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				v = r.n(_),
				O = r("./src/lib/lessComponent.tsx");

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const x = d.e[1] + 24,
				S = g.f + 8,
				C = S + 152 + 16,
				k = C + x + 8,
				j = O.a.div("Container", v.a),
				E = O.a.wrapped(({
					className: e,
					isOverlay: t,
					...r
				}) => i.a.createElement(h, w({
					className: e,
					isOverlay: t,
					style: {
						top: `calc(100vh - ${t?S:8}px)`
					}
				}, r)), "BackToTop", v.a),
				I = ({
					children: e,
					className: t,
					isFakeOverlay: r,
					isSticky: n
				}) => i.a.createElement("div", {
					className: Object(s.a)(t, {
						[v.a.StickyStyles]: n && !r,
						[v.a.StickyStylesFakeOverlay]: !!r
					})
				}, e);
			class N extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > k,
						shouldFooterSticky: this.windowHeight > C
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
					}, this.handleResize = o()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.K), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: r,
							children: s,
							className: n,
							hideFooter: o,
							pageLayer: a
						}
					} = this, d = this.state.isAdSticky && !(!t && !s);
					return i.a.createElement(j, {
						className: n,
						innerRef: this.setWrapperRef
					}, i.a.createElement(I, {
						isFakeOverlay: r,
						isSticky: d
					}, t, s, !o && i.a.createElement(f.a, null)), !this.props.hideBackToTop && i.a.createElement(E, {
						isOverlay: !!(null === (e = null == a ? void 0 : a.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const T = Object(y.u)();
			t.a = T(N)
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, r) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class a extends n.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return n.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var i = Object(o.a)(a);
			t.a = e => n.a.createElement(i, e)
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, r) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = r("./src/reddit/components/SEOTitle/index.tsx"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				u = r("./src/reddit/contexts/PageLayer/index.tsx"),
				p = r("./src/reddit/controls/Button/index.tsx"),
				m = r("./src/reddit/helpers/trackers/widgets.ts"),
				b = r("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = r("./src/reddit/selectors/experiments/topPosts.ts"),
				f = r("./src/reddit/selectors/structuredStyles.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/models/Theme/index.ts"),
				_ = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const v = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(_.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				O = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(_.a)(e).widgetColors.sidebarWidgetHeaderColor,
				w = e => {
					const t = v(e);
					return Object(y.f)(t)
				},
				x = e => {
					const t = O(e);
					return Object(y.f)(t)
				};
			var S = r("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				C = r.n(S);
			const {
				fbt: k
			} = r("./node_modules/fbt/lib/FbtPublic.js"), j = Object(u.u)(), E = Object(o.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const r = Object(u.n)(e, t) || void 0,
						s = t.redditStyle || Object(f.l)(e, {
							subredditId: r
						}),
						n = Object(g.W)(e);
					return s || n
				},
				nigtmode: g.W,
				subredditId: u.n,
				topPostVariant: h.d
			}));
			class I extends n.a.Component {
				constructor() {
					super(...arguments), this.contentRef = n.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(m.b)(e, t)), this.setState({
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
					return e.backgroundColor = v(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = w(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = O(this.props), e.color = e.fill = x(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: r,
						forceRedditStyle: s,
						headerButton: o,
						id: a,
						onClick: d,
						onHeaderClick: l,
						title: u,
						titleClassName: m,
						truncateThreshold: b
					} = this.props, h = r ? C.a.widgetContentOnly : C.a.widgetContent, f = !s && this.props.styles, g = f ? this.getWidgetBackgroundStyles() : {}, y = f ? this.getWidgetHeaderStyles() : {};
					return n.a.createElement("div", {
						className: Object(i.a)(t, C.a.widgetBackground, {
							[C.a.redditStyle]: s,
							[C.a.clickable]: !!d,
							[C.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: d,
						style: g
					}, u && n.a.createElement("div", {
						className: Object(i.a)(C.a.widgetHeader, {
							[C.a.clickable]: !!l
						}),
						id: a,
						style: y,
						onClick: l
					}, n.a.createElement("div", {
						className: Object(i.a)(C.a.widgetTitle, m)
					}, n.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), o), n.a.createElement("div", {
						className: Object(i.a)(h, {
							[C.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && n.a.createElement(p.r, {
						className: C.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, k._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = j(E(Object(d.a)(Object(l.c)(I))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return x
			})), r.d(t, "d", (function() {
				return C
			})), r.d(t, "b", (function() {
				return j
			}));
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/objectSelector/index.ts"),
				a = r("./src/reddit/actions/ads/index.ts"),
				i = r("./src/reddit/actions/focusedVerticals/index.ts"),
				d = r("./src/reddit/actions/gold/tooltips.ts"),
				c = r("./src/reddit/actions/post.ts"),
				l = r("./src/reddit/actions/postList.ts"),
				u = r("./src/reddit/actions/survey/index.ts"),
				p = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/contexts/PageLayer/index.tsx"),
				b = r("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = r("./src/reddit/helpers/trackers/post.ts"),
				f = r("./src/reddit/components/PostList/Placeholder.tsx"),
				g = r("./src/reddit/featureFlags/index.ts"),
				y = r("./src/reddit/selectors/experiments/survey.ts"),
				_ = r("./src/reddit/selectors/listings.ts"),
				v = r("./src/reddit/selectors/posts.ts"),
				O = r("./src/reddit/selectors/subreddit.ts"),
				w = r("./src/reddit/selectors/tracking.ts");

			function x() {
				return Object(m.u)({
					currentProfileName: m.i,
					isCommentPermalink: m.w,
					isCommentsPage: m.x,
					isFrontpage: m.A,
					isProfilePostListing: m.L,
					isTopicPage: m.Q,
					pageLayer: e => e
				})
			}
			const S = x(),
				C = {
					apiError: _.c,
					apiPending: _.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(m.R)(e, t),
					loadMore: _.g,
					postsById: v.T,
					postIds: Object(o.a)((e, {
						listingKey: t,
						listingName: r,
						inSubredditOrProfile: s
					}) => Object(v.E)(e, t, r, s)),
					subredditsById: O.Y,
					viewportDataLoaded: w.a,
					pageReferrer: m.U,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: y.e
				},
				k = Object(n.c)(C),
				j = e => ({
					onBottomViewed: (t, r) => e(l.c(t, r)),
					onFirstPostChanged: t => e(Object(d.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(a.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(i.a)({
							lastLoadedEnv: "server"
						})), e(c.L(t))
					},
					fireAdPixelsOfType: (t, r) => {
						e(c.z(t, r))
					},
					trackOnPostEnteredViewport: (t, r, s, n) => {
						e(c.O(t, s, n))
					},
					trackOnPostExitedViewport: (t, r, s, n, o) => {
						e(c.P(t, s, n, o))
					},
					showModalOnScroll: () => e(c.bb()),
					surveyTriggerScrollCounted: () => e(Object(u.k)())
				}),
				E = e => Object(b.b)({
					...e
				}),
				I = (e, t, r, s) => {
					const {
						listingKey: n,
						hostPostData: o,
						listingBelowVariant: a
					} = s;
					return Object(h.h)(e, t, "post", n, o, a, void 0)
				},
				N = Object(s.b)(k, j, (e, t, r) => ({
					...e,
					...t,
					...r,
					postComponentForLayout: E,
					postClickEventFactory: I
				}));
			t.a = e => Object(p.c)(S(N(e)))
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/actions/structuredStyles/index.ts"),
				a = r("./src/reddit/selectors/activeModalId.ts"),
				i = r("./src/reddit/selectors/structuredStyles.ts"),
				d = r("./src/reddit/constants/modals.ts");
			const c = Object(n.c)({
				bladeHasUnsavedChanges: i.a,
				isEditing: i.i,
				isBladeEditorDirty: i.h,
				isModalOpen: Object(a.b)(d.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(s.b)(c, (e, {
				subredditId: t
			}) => ({
				requestCloseBlade: () => t && e(Object(o.h)(t))
			}))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return d
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts");
			const o = {
					[n.W.BEST]: () => s.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[n.W.HOT]: () => s.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[n.W.NEW]: () => s.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[n.W.CONTROVERSIAL]: () => s.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[n.W.RISING]: () => s.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[n.W.TOP]: () => s.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[n.W.AWARDED]: () => s.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				a = e => {
					const t = o[e];
					return t && t() || ""
				},
				i = {
					[n.gc.HOUR]: () => s.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[n.gc.DAY]: () => s.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[n.gc.WEEK]: () => s.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[n.gc.MONTH]: () => s.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[n.gc.YEAR]: () => s.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[n.gc.ALL]: () => s.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				d = e => {
					const t = i[e];
					return t && t() || ""
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = n.a.createContext({})
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/constants/keycodes.ts"),
				c = r("./src/reddit/controls/Input/index.m.less"),
				l = r.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			class p extends n.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === d.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...r
					} = this.props;
					return n.a.createElement("input", u({
						className: Object(a.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, r))
				}
			}
			t.a = Object(o.b)(null, {
				closeModal: i.f
			})(p)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, r) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/helpers/getReredditLinkWithYear/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = (e = new Date) => {
				const t = e.getFullYear();
				return `/posts/${e.getMonth()>=6?t:t-1}/`
			}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./node_modules/brcast/dist/brcast.es.js");
			const n = Object(s.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/makeModQueueListingKey/index.ts": function(e, t, r) {
			"use strict";
			t.a = e => {
				const {
					profile: t,
					subreddit: r
				} = e;
				let s = r && `r/${r}` || t && `u/${t}` || "all";
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType || (s += `--[${e.onlyOfType}]`), s
			}
		},
		"./src/reddit/helpers/trackers/contentTag.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return s
			})), r.d(t, "g", (function() {
				return n
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "l", (function() {
				return a
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "j", (function() {
				return d
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "i", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "n", (function() {
				return p
			})), r.d(t, "m", (function() {
				return m
			})), r.d(t, "k", (function() {
				return b
			})), r.d(t, "o", (function() {
				return h
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "d", (function() {
				return g
			}));
			const s = () => () => ({
					source: "content_tag",
					action: "view",
					noun: "verify_topics_module"
				}),
				n = () => () => ({
					source: "content_tag",
					action: "click",
					noun: "verify_topics_module"
				}),
				o = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_intro",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				a = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "start",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				i = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "mature_themes_prompt",
					actionInfo: {
						pageType: "survey_mature_themes"
					}
				}),
				d = e => () => ({
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
				l = (e, t) => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "next",
					actionInfo: {
						reason: t.join(),
						pageType: e
					}
				}),
				u = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "back",
					actionInfo: {
						pageType: e
					}
				}),
				p = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_rating_summary",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				m = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "submit_survey",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				b = () => () => ({
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
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			}));
			r("./src/reddit/constants/categories.tsx");
			var s = r("./src/reddit/selectors/telemetry.ts");
			const n = e => ({
					screen: s.Y(e),
					profile: s.P(e),
					subreddit: s.hb(e)
				}),
				o = e => t => ({
					action: "click",
					source: "nav",
					noun: e,
					...n(t)
				}),
				a = e => t => ({
					...n(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				i = e => t => ({
					...n(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				}),
				d = e => t => ({
					...n(t),
					source: "nav",
					action: "click",
					noun: `lang_${e}`
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "c", (function() {
				return l
			}));
			var s, n, o = r("./src/reddit/constants/tracking.ts"),
				a = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {}));
			const i = (e, t) => r => ({
					source: n.COMMUNITY_WIDGETS,
					action: o.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(a.ub)(r, {
						subredditId: e,
						widgetKind: t
					}),
					...a.m
				}),
				d = (e, t) => r => ({
					source: n.POST,
					action: o.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: a.G(r, e),
					subreddit: a.hb(r),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...a.m(r)
				}),
				c = () => e => ({
					source: n.SIDEBAR,
					action: o.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...a.m(e)
				}),
				l = e => t => ({
					source: n.TOPICS_WIDGET,
					action: o.c.CLICK,
					noun: s.TOPIC,
					...a.m(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, r) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = r.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const c = ({
				className: e,
				isSubreddit: t,
				...r
			}) => n.a.createElement("svg", d({
				className: Object(o.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r), n.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/reddit/constants/colors.ts");
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && n.a.createElement("desc", null, e.desc), n.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), n.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), n.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? o.a.orangered : "none"
			}))
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.m.less": function(e, t, r) {
			e.exports = {
				backgroundContainer: "_2wxsLGNmMLx6sEMLJyn2o9"
			}
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = r("./src/reddit/models/Theme/index.ts"),
				d = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = r("./src/reddit/layout/page/Listing/BackgroundContainer.m.less"),
				l = r.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = Object(a.a)(e => {
				const {
					backgroundColor: t,
					className: r,
					redditStyle: s,
					theme: a,
					...c
				} = e, p = Object(d.a)(e), m = {
					"--pseudo-before-background": t || Object(i.g)(p.canvas, p.canvasImgUrl, p.canvasImgPosition)
				};
				return n.a.createElement("div", u({
					className: Object(o.a)(l.a.backgroundContainer, r),
					style: m
				}, c))
			})
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, r) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7",
				onlyChildMargin: "_2OVNlZuUd8L9v0yVECZ2iA"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/constants/postLayout.ts"),
				c = r("./src/reddit/contexts/PageLayer/index.tsx"),
				l = r("./src/reddit/selectors/structuredStyles.ts"),
				u = r("./src/reddit/layout/page/Listing/Content.m.less"),
				p = r.n(u);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(c.u)(),
				h = Object(a.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(c.R)(e, t)
				}),
				f = Object(o.b)(h);
			t.a = b(f(({
				className: e,
				hideOnlyChildMargin: t,
				disableFullscreen: r,
				dispatch: s,
				fitPageToContent: o,
				forcedLayout: a,
				isCollectionLayout: l,
				isEditing: u,
				layout: b,
				pageLayer: h,
				...f
			}) => n.a.createElement("div", m({
				className: Object(i.a)(e, p.a.styledContent, {
					[p.a.mLargePostLayout]: b === d.g.Large || Object(c.O)(h),
					[p.a.mDisableFullScreen]: r && !l,
					[p.a.mClassicWidth]: l,
					[p.a.mIsEditing]: !!u,
					[p.a.mCanFlexFullWidth]: !o,
					[p.a.onlyChildMargin]: !t
				})
			}, f))))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, r) {
			e.exports = {
				body: "_31N0dvxfpsO6Ur5AKx4O5d",
				sidebar: "_3Kd8DQpBIbsr5E1JcrMFTY",
				defaultLayout: "_1tvThPWQpORoc2taKebHxs",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				outerContainerExp: "_35NDNOyTzBcywfeEavUt6p",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				a = r("./src/reddit/layout/page/Listing/Content.tsx"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/constants/componentSizes.ts"),
				c = r("./src/reddit/constants/elementClassNames.ts"),
				l = r("./src/reddit/constants/screenWidths.ts"),
				u = r("./src/reddit/contexts/NavbarExp.ts"),
				p = r("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				m = r("./src/reddit/layout/page/Listing/index.m.less"),
				b = r.n(m);
			t.a = e => {
				const {
					backgroundColor: t,
					className: r,
					containerRef: m,
					content: h,
					contentBanner: f,
					contentClassName: g,
					contentNavBar: y,
					disableFullscreen: _,
					fitPageToContent: v,
					forcedLayout: O,
					hideOnlyChildMargin: w,
					isCollectionLayout: x,
					isPageSwapped: S,
					maxWidth: C,
					navBar: k,
					redditStyle: j,
					sidebar: E,
					sidebars: I,
					trendingUnit: N,
					subredditId: T
				} = e, P = N ? "28px" : "0", L = S ? {
					marginRight: `${d.q}px`,
					marginTop: P
				} : {
					marginLeft: `${d.q}px`,
					marginTop: P
				}, M = E && n.a.createElement("div", {
					className: Object(i.a)(b.a.sidebar, x ? b.a["m-collectionLayout"] : b.a.defaultLayout),
					style: L
				}, E), R = n.a.createElement(a.a, {
					hideOnlyChildMargin: w,
					className: g,
					disableFullscreen: _,
					fitPageToContent: v,
					forcedLayout: O,
					isCollectionLayout: x
				}, f, h);
				let D;
				D = I ? n.a.createElement(n.a.Fragment, null, I[0], R, I[1]) : S ? n.a.createElement(n.a.Fragment, null, M, R) : n.a.createElement(n.a.Fragment, null, R, M);
				const F = _ ? `${C||l.a+2*d.m}px` : "100%",
					A = Object(s.useContext)(u.a);
				return n.a.createElement(p.a, {
					subredditId: T
				}, n.a.createElement("div", {
					className: Object(i.a)(b.a.outerContainer, c.i, r, {
						[b.a.outerContainerExp]: A
					}),
					ref: m
				}, n.a.createElement(o.a, {
					className: c.h,
					redditStyle: j,
					backgroundColor: t
				}), n.a.createElement("div", {
					className: b.a.innerContainer
				}, k, y, (e => e.hero ? n.a.createElement(n.a.Fragment, null, e.hero) : null)(e), n.a.createElement("div", {
					style: {
						maxWidth: F
					}
				}, N), n.a.createElement("div", {
					className: b.a.body,
					style: {
						maxWidth: F
					}
				}, D))))
			}
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, r) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/lessComponent.tsx"),
				n = r("./src/reddit/layout/row/Inline/index.m.less"),
				o = r.n(n);
			t.a = s.a.div("inlineRow", o.a)
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, r) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				d = r.n(i);
			t.a = Object(o.a)(e => n.a.createElement("div", {
				className: Object(a.a)(d.a.exapndLeftContainer, e.className)
			}, n.a.createElement("div", {
				className: d.a.left
			}, Array.isArray(e.children) && e.children[0]), n.a.createElement("div", {
				className: d.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/pages/ModListing/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./node_modules/lodash/fromPairs.js"),
				n = r.n(s),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				i = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/constants/index.ts"),
				l = r("./src/lib/extractQueryParams/index.ts"),
				u = r("./src/lib/makeListingKey/index.ts"),
				p = r("./src/reddit/actions/pages/modListing/index.ts"),
				m = r("./src/reddit/components/EmptySubreddit.tsx"),
				b = r("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				h = r("./src/reddit/components/JumpToContent/index.tsx"),
				f = r("./src/reddit/components/ListingPostList/index.tsx"),
				g = r("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				y = r("./node_modules/fbt/lib/FbtPublic.js"),
				_ = r("./src/higherOrderComponents/asModal/index.tsx"),
				v = r("./src/reddit/actions/modal.ts"),
				O = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				w = r("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				x = r("./src/reddit/controls/TextButton/index.tsx"),
				S = r("./src/reddit/icons/svgs/Moderate/index.tsx"),
				C = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				k = r("./src/reddit/selectors/activeModalId.ts"),
				j = r("./src/reddit/selectors/modQueue.ts"),
				E = r("./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less"),
				I = r.n(E);
			const {
				fbt: N
			} = r("./node_modules/fbt/lib/FbtPublic.js"), T = Object(_.a)(e => a.a.createElement(O.e, {
				className: I.a.modalBody
			}, a.a.createElement(O.i, null, a.a.createElement(C.a, null, a.a.createElement(O.q, {
				className: I.a.modalTitle
			}, a.a.createElement(S.a, {
				className: I.a.modIcon
			}), N._("r/Mod", null, {
				hk: "2a9ICx"
			})), a.a.createElement(x.a, {
				onClick: e.onCloseModal
			}, a.a.createElement(O.b, null)))), a.a.createElement(O.l, {
				className: I.a.modalMain
			}, a.a.createElement("div", {
				className: I.a.modalDescription
			}, N._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), a.a.createElement(w.b, {
				isSidebar: !1,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			})))), P = e => a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
				className: I.a.feedDetailsTitle
			}, a.a.createElement(S.a, {
				className: I.a.modIcon
			}), N._("r/Mod", null, {
				hk: "2a9ICx"
			})), a.a.createElement("div", {
				className: I.a.feedDetailsDescription
			}, N._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), e.moderatedCommunitiesIds.length ? a.a.createElement(w.b, {
				isSidebar: !0,
				onSeeMoreDetails: e.onSeeMoreDetails,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			}) : a.a.createElement("div", {
				className: I.a.loadingBar
			})), L = Object(d.c)({
				isModalOpen: Object(k.b)("MOD_LISTING_FEED_DETAILS_MODAL_ID"),
				moderatedCommunitiesIds: j.e
			});
			var M = Object(i.b)(L, (e, {}) => ({
					toggleModal: () => e(Object(v.i)("MOD_LISTING_FEED_DETAILS_MODAL_ID"))
				}))(e => {
					const {
						isModalOpen: t,
						moderatedCommunitiesIds: r,
						toggleModal: s
					} = e;
					return r ? a.a.createElement(a.a.Fragment, null, a.a.createElement(P, {
						moderatedCommunitiesIds: r,
						onSeeMoreDetails: s
					}), t && a.a.createElement(T, {
						moderatedCommunitiesIds: r,
						onCloseModal: s,
						onOverlayClick: s,
						withOverlay: !0
					})) : null
				}),
				R = r("./node_modules/react-router-redux/es/index.js"),
				D = r("./src/reddit/components/TrackingHelper/index.tsx"),
				F = r("./src/reddit/contexts/PageLayer/index.tsx"),
				A = r("./src/reddit/controls/Button/index.tsx");
			const B = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				H = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				W = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				});
			var U = r("./src/reddit/routes/modListing/index.ts");
			const V = e => e.modListingPage.filteredSubreddits.api.pending;
			var G = r("./src/reddit/constants/keycodes.ts"),
				q = r("./src/reddit/layout/row/Inline/index.tsx"),
				K = r("./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less"),
				J = r.n(K);
			const Y = Object(d.c)({
				apiError: e => e.modListingPage.filteredSubreddits.api.error,
				isApiPending: V
			});
			class Q extends a.a.Component {
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
						this.canSubmitInput() && (this.props.sendEvent(B()), this.props.hide(this.state.subredditInput), this.clearSubredditInput())
					}, this.onChange = e => {
						this.setSubredditInput(e.target.value)
					}, this.onKeyPress = e => {
						e.key === G.b.Enter && this.submitInput()
					}, this.canSubmitInput = () => this.state.subredditInput && !this.props.isApiPending
				}
				render() {
					const {
						props: e
					} = this;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(q.a, null, a.a.createElement("input", {
						className: J.a.input,
						onChange: this.onChange,
						onKeyPress: this.onKeyPress,
						placeholder: y.fbt._("r/community", null, {
							hk: "4ceDB9"
						}),
						value: this.state.subredditInput
					}), a.a.createElement(A.l, {
						"aria-label": y.fbt._("Hide", null, {
							hk: "1BnFmX"
						}),
						className: J.a.hideButton,
						disabled: !this.canSubmitInput(),
						onClick: this.submitInput
					}, y.fbt._("Hide", null, {
						hk: "1BnFmX"
					}))), e.apiError && e.apiError.explanation && a.a.createElement("div", {
						className: J.a.errorText
					}, e.apiError.explanation))
				}
			}
			var z = Object(i.b)(Y, e => ({
					hide: t => e(Object(p.hideSubreddit)(t))
				}))(Object(D.c)(Q)),
				X = r("./src/lib/lessComponent.tsx"),
				Z = r("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = r("./src/lib/classNames/index.ts"),
				ee = r("./src/reddit/icons/fonts/helpers.tsx");
			var te = e => a.a.createElement("i", {
					className: Object($.a)(Object(ee.b)("clear", e.isFilled), e.className)
				}),
				re = r("./src/reddit/selectors/profile.ts"),
				se = r("./src/reddit/selectors/subreddit.ts"),
				ne = r("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less"),
				oe = r.n(ne);
			const ae = X.a.wrapped(Z.b, "SubredditIcon", oe.a),
				ie = Object(d.c)({
					isApiPending: V,
					subredditOrProfile: (e, t) => {
						const r = Object(se.w)(e, {
							subredditName: t.subredditName
						});
						if (!r) {
							const r = (e => e.startsWith(c.ic) ? e.slice(2) : e)(t.subredditName);
							return r && Object(re.j)(e, {
								profileName: r
							}) || null
						}
						return r
					}
				});
			class de extends a.a.Component {
				constructor() {
					super(...arguments), this.onClickUnhideSubreddit = e => {
						e.stopPropagation(), e.preventDefault(), this.props.subredditOrProfile && (this.props.sendEvent(H()), this.props.unhide(this.props.subredditName))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.subredditOrProfile ? a.a.createElement(w.a, {
						className: oe.a.row,
						to: e.subredditOrProfile.url
					}, a.a.createElement(ae, {
						subredditOrProfile: e.subredditOrProfile
					}), a.a.createElement("span", {
						className: oe.a.label
					}, e.subredditOrProfile.displayText), !e.isApiPending && a.a.createElement("button", {
						"aria-label": y.fbt._("Unhide", null, {
							hk: "2sCv0O"
						}),
						className: oe.a.unhideButton,
						onClick: this.onClickUnhideSubreddit
					}, a.a.createElement(te, null))) : null
				}
			}
			var ce = Object(i.b)(ie, e => ({
					unhide: t => e(Object(p.unhideSubreddit)(t))
				}))(Object(D.c)(de)),
				le = r("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less"),
				ue = r.n(le);
			const {
				fbt: pe
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var me = ({
					hiddenSubredditsNames: e
				}) => {
					const t = e.map(e => a.a.createElement(ce, {
						key: e,
						subredditName: e
					}));
					return a.a.createElement(a.a.Fragment, null, e.length ? a.a.createElement("div", {
						className: ue.a.rows
					}, t) : a.a.createElement("div", {
						className: ue.a.noRows
					}, pe._("Viewing all communities", null, {
						hk: "4p9SL8"
					})))
				},
				be = r("./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less"),
				he = r.n(be);
			const {
				fbt: fe
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ge = Object(F.u)({
				filtered: e => !!e && Object(U.d)(e.url)
			}), ye = Object(d.c)({
				hiddenSubredditsNames: e => e.modListingPage.filteredSubreddits.names
			});
			class _e extends a.a.Component {
				constructor() {
					super(...arguments), this.onToggleFiltered = () => {
						this.props.sendEvent(W(this.props.filtered)), this.props.toggleFiltered()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return a.a.createElement("div", {
						className: he.a.container
					}, a.a.createElement("div", {
						className: he.a.hideCommunitiesHeader
					}, fe._("Hide communities", null, {
						hk: "15OtHo"
					})), a.a.createElement(A.r, {
						className: he.a.tertiaryButton,
						onClick: this.onToggleFiltered
					}, e.filtered ? fe._("Go to unfiltered r/Mods", null, {
						hk: "2RGhxF"
					}) : fe._("Go to filtered r/Mod", null, {
						hk: "YdVw7"
					})), e.filtered && a.a.createElement("div", {
						className: he.a.inputContainer
					}, a.a.createElement(z, null), a.a.createElement(me, {
						hiddenSubredditsNames: e.hiddenSubredditsNames
					})))
				}
			}
			var ve = ge(Object(i.b)(ye, (e, {
					filtered: t
				}) => ({
					toggleFiltered: () => e(Object(R.b)(t ? U.a : U.b))
				}))(Object(D.c)(_e))),
				Oe = r("./src/reddit/components/SidebarContainer/index.tsx"),
				we = r("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				xe = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx");
			var Se = () => a.a.createElement(Oe.a, null, a.a.createElement(xe.a, {
					title: y.fbt._("Feed details", null, {
						hk: "3JlrpB"
					})
				}, a.a.createElement(M, null), a.a.createElement(ve, null)), a.a.createElement(we.a, null)),
				Ce = r("./src/reddit/constants/page.ts"),
				ke = r("./src/reddit/constants/parameters.ts"),
				je = r("./src/reddit/helpers/trackers/screenview.ts"),
				Ee = r("./src/reddit/layout/page/Listing/index.tsx"),
				Ie = r("./src/reddit/selectors/moderatorPermissions.ts");
			const Ne = Object(d.a)((e, {
					location: t
				}) => t.search, (e, {
					match: t
				}) => t.params.sort || c.W.HOT, (e, {
					match: t
				}) => Object(U.d)(t.path), Ie.j, Ie.d, (e, t, r, s, o) => {
					const a = n()([...Object(l.a)(e)]),
						i = ke.B in a && a[ke.B].toUpperCase(),
						d = "string" == typeof i && i in c.gc ? c.gc[i] : c.hc,
						p = r ? Ce.f : Ce.e;
					return {
						filtered: r,
						isModerator: s,
						isModeratorWithPostPerms: o,
						listingKey: Object(u.a)(p, t, a),
						listingName: p,
						sort: t,
						timeSort: d
					}
				}),
				Te = Object(i.b)(Ne, (e, t) => ({
					onLoadMorePosts: () => e(p.moreModListingRequested({
						sort: t.match.params.sort
					}))
				}));
			class Pe extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onViewed = (e, t) => Object(je.f)({
						key: this.props.listingKey,
						sort: this.props.sort,
						timerType: t,
						timerMillis: e
					}), this.renderEmptySubreddit = () => a.a.createElement(m.a, {
						listingName: this.props.listingName,
						sort: this.props.sort
					})
				}
				render() {
					const e = this.props.filtered ? U.b : U.a;
					return a.a.createElement("div", null, this.props.isModeratorWithPostPerms ? a.a.createElement(Ee.a, {
						className: this.props.className,
						fitPageToContent: !0,
						content: a.a.createElement(a.a.Fragment, null, a.a.createElement(b.a, {
							baseUrl: e,
							sort: this.props.sort,
							timeSort: this.props.timeSort
						}), a.a.createElement(h.a, null), a.a.createElement(f.a, {
							listingKey: this.props.listingKey,
							listingName: this.props.listingName,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderEmptySubreddit,
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: a.a.createElement(Se, null)
					}) : a.a.createElement(g.a, {
						isModerator: this.props.isModerator
					}))
				}
			}
			t.default = Te(Pe)
		},
		"./src/reddit/pages/Subreddit/SurveyUnit.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/components/CommunityTopicSurvey/async.tsx"),
				d = r("./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx"),
				c = r("./src/reddit/components/PowerupsCncModule/index.tsx"),
				l = r("./src/reddit/components/PowerupsCncModule/async.ts"),
				u = r("./src/reddit/constants/experiments.ts"),
				p = r("./src/reddit/constants/postLayout.ts"),
				m = r("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				b = r("./src/reddit/selectors/gold/powerups/index.ts");
			const h = Object(s.a)({
				resolved: {},
				chunkName: () => "NewCommunityProgress",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => Promise.all([r.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), r.e(3), r.e("NewCommunityProgress")]).then(r.bind(null, "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx")),
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

			function f({
				postLayout: e,
				subredditId: t,
				subredditSubscribers: r
			}) {
				var s;
				const n = Object(a.e)(e => e.subreddits.survey[t]),
					f = Object(a.e)(e => e.subreddits.progressModule[t]),
					g = Object(a.e)(e => Object(b.b)(e, {
						subredditId: t
					})),
					y = Object(a.e)(m.a),
					_ = y !== u.Yd.NewModule;
				return (null === (s = null == f ? void 0 : f.cards) || void 0 === s ? void 0 : s.length) > 0 && _ ? o.a.createElement(h, {
					closeModuleOnMount: !!e && e !== p.g.Large,
					subredditId: t,
					progressModule: f
				}) : e !== p.g.Large ? null : (null == n ? void 0 : n.isEligible) && !(null == n ? void 0 : n.response) && (!y || y && r > 100) ? o.a.createElement(d.a, {
					subredditId: t,
					survey: n
				}) : g && !Object(c.isPowerupsCncModuleHiddenBySpamLimit)(t) ? o.a.createElement(l.a, {
					subredditId: t
				}) : o.a.createElement(i.a, {
					subredditId: t
				})
			}
		},
		"./src/reddit/reducers/pages/modHub/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/redux/es/redux.js"),
				n = r("./src/reddit/actions/subredditModeration/constants.ts");
			var o = (e = null, t) => {
					switch (t.type) {
						case n.g:
						case n.f:
							return null;
						case n.e:
							return t.payload;
						default:
							return e
					}
				},
				a = r("./src/reddit/models/SubredditModeration/index.ts");
			const i = {};
			var d = (e = i, t) => {
					switch (t.type) {
						case n.g: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, n = Object(a.d)(r, s);
							return {
								...e,
								[n]: !0
							}
						}
						case n.f:
						case n.e: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, n = Object(a.d)(r, s);
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				c = Object(s.c)({
					error: o,
					pending: d
				});
			const l = {};
			var u = (e = l, t) => {
				switch (t.type) {
					case n.f: {
						const {
							fetchedToken: r,
							subredditId: s
						} = t.payload, n = Object(a.d)(s, r);
						return {
							...e,
							[n]: !0
						}
					}
					default:
						return e
				}
			};
			const p = {};
			var m = (e = p, t) => {
					switch (t.type) {
						case n.f: {
							const {
								subredditId: e,
								after: r
							} = t.payload;
							return {
								[e]: r
							}
						}
						default:
							return e
					}
				},
				b = r("./node_modules/icepick/icepick.js");
			const h = {};
			var f = (e = h, t) => {
				switch (t.type) {
					case n.d:
					case n.f: {
						const {
							subredditId: r,
							approvedSubmitters: s
						} = t.payload, n = {
							[r]: s
						};
						return Object(b.merge)(e, n)
					}
					case n.k: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(b.unsetIn)(e, [r, s])
					}
					default:
						return e
				}
			};
			var g = (e = null, t) => {
				switch (t.type) {
					case n.j:
					case n.i:
						return null;
					case n.h:
						return t.payload;
					default:
						return e
				}
			};
			var y = (e = !1, t) => {
					switch (t.type) {
						case n.j:
							return !0;
						case n.i:
						case n.h:
							return !1;
						default:
							return e
					}
				},
				_ = Object(s.c)({
					error: g,
					pending: y
				});
			var v = (e = null, t) => {
					switch (t.type) {
						case n.j:
							return null;
						case n.i: {
							const e = t.payload.approvedSubmitterIds[0];
							return e ? t.payload.approvedSubmitters[e] : null
						}
						default:
							return e
					}
				},
				O = Object(s.c)({
					api: _,
					result: v
				});
			const w = {};
			var x = (e = w, t) => {
					switch (t.type) {
						case n.f: {
							const {
								subredditId: r,
								approvedSubmitterIds: s
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...s]
							} : {
								...e,
								[r]: s
							}
						}
						case n.k: {
							const {
								subredditId: r,
								userId: s
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== s)
							}
						}
						case n.d: {
							const {
								subredditId: r,
								approvedSubmitterIds: s
							} = t.payload, n = s[0];
							return n && e[r] && -1 === e[r].indexOf(n) ? {
								[r]: [n, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				S = Object(s.c)({
					api: c,
					fetchedTokens: u,
					loadMore: m,
					models: f,
					search: O,
					userOrder: x
				}),
				C = r("./src/reddit/actions/grantUserFlair/constants.ts");
			var k = (e = null, t) => {
				switch (t.type) {
					case C.g:
					case C.i:
						return null;
					case C.f:
						return t.payload;
					default:
						return e
				}
			};
			var j = (e = !1, t) => {
					switch (t.type) {
						case C.i:
							return !0;
						case C.g:
						case C.f:
							return !1;
						default:
							return e
					}
				},
				E = Object(s.c)({
					error: k,
					pending: j
				}),
				I = r("./node_modules/lodash/merge.js"),
				N = r.n(I),
				T = r("./node_modules/lodash/omit.js"),
				P = r.n(T);
			const L = {};
			var M = (e = L, t) => {
				switch (t.type) {
					case C.g:
					case C.k: {
						const {
							subredditId: r,
							flairedUsers: s
						} = t.payload;
						return N()({
							...e
						}, {
							[r]: s
						})
					}
					case C.c: {
						const {
							subredditId: r,
							userName: s
						} = t.payload, n = P()(e[r], s);
						return {
							...e,
							[r]: n
						}
					}
					case C.a:
					case C.b:
					case C.h:
						const {
							subredditId: r, userName: s, applied: n
						} = t.payload;
						return n ? {
							...e,
							[r]: {
								...e[r],
								[s]: n
							}
						} : e;
					default:
						return e
				}
			};
			const R = {};
			var D = (e = R, t) => {
				switch (t.type) {
					case C.g: {
						const {
							key: r,
							pageInfo: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			var F = (e = null, t) => {
				switch (t.type) {
					case C.l:
					case C.k:
						return null;
					case C.j:
						return t.payload;
					default:
						return e
				}
			};
			var A = (e = !1, t) => {
					switch (t.type) {
						case C.l:
							return !0;
						case C.k:
						case C.j:
							return !1;
						default:
							return e
					}
				},
				B = Object(s.c)({
					error: F,
					pending: A
				});
			var H = (e = null, t) => {
					switch (t.type) {
						case C.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case C.c: {
							const {
								userName: r
							} = t.payload;
							return e === r ? null : e
						}
						default:
							return e
					}
				},
				W = Object(s.c)({
					api: B,
					result: H
				});
			const U = {};
			var V = (e = U, t) => {
					switch (t.type) {
						case C.g: {
							const {
								key: r,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case C.a: {
							const {
								key: r,
								userName: s
							} = t.payload;
							if (!r) return e;
							if (!e[r].includes(s)) {
								const t = [...e[r], s];
								return {
									...e,
									[r]: t
								}
							}
							return e
						}
						case C.c: {
							const {
								userName: r
							} = t.payload, s = {};
							for (const t in e) s[t] = e[t].filter(e => e !== r);
							return s
						}
						default:
							return e
					}
				},
				G = Object(s.c)({
					api: E,
					models: M,
					pageInfo: D,
					search: W,
					userOrder: V
				}),
				q = r("./src/reddit/actions/moderationLog/constants.ts");
			const K = {};
			var J = (e = K, t) => {
				switch (t.type) {
					case q.b: {
						const {
							actionIds: r,
							key: s,
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[s]: r
							}
						}
					}
					default:
						return e
				}
			};
			const Y = {};
			var Q = (e = Y, t) => {
					switch (t.type) {
						case q.b: {
							const {
								normalizedModerationLog: r,
								subredditId: s
							} = t.payload, n = {};
							r.forEach(e => {
								n[e.id] = e
							});
							const o = {
								[s]: n
							};
							return N()({
								...e
							}, o)
						}
						default:
							return e
					}
				},
				z = Object(s.c)({
					itemOrder: J,
					models: Q
				});
			var X = (e = null, t) => {
				switch (t.type) {
					case q.b: {
						const {
							endCursor: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Z = {};
			var $ = (e = Z, t) => {
				switch (t.type) {
					case q.b: {
						const {
							hasNextPage: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = (e = ee, t) => {
				switch (t.type) {
					case q.b: {
						const {
							hasPreviousPage: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			const re = [];
			var se = (e = re, t) => {
				switch (t.type) {
					case q.a: {
						const {
							normalizedModerators: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			var ne = (e = null, t) => {
					switch (t.type) {
						case q.b: {
							const {
								startCursor: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				oe = Object(s.c)({
					actions: z,
					endCursor: X,
					hasNextPage: $,
					hasPreviousPage: te,
					moderators: se,
					startCursor: ne
				});
			const ae = {};
			var ie = (e = ae, t) => {
				switch (t.type) {
					case n.I:
					case n.u: {
						const {
							subredditId: r,
							moderators: s
						} = t.payload.response || t.payload, n = {
							[r]: s
						};
						return Object(b.merge)(e, n)
					}
					case n.y: {
						const {
							subredditId: r,
							userId: s,
							permissions: n
						} = t.payload;
						return Object(b.setIn)(e, [r, s, "modPermissions"], n)
					}
					case n.Y: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(b.unsetIn)(e, [r, s])
					}
					default:
						return e
				}
			};
			const de = {};
			var ce = (e = de, t) => {
				switch (t.type) {
					case n.v:
					case n.u: {
						const {
							key: r,
							subredditId: s
						} = t.payload;
						return s ? {
							...e,
							[r]: null
						} : e
					}
					case n.t: {
						const {
							error: r,
							key: s,
							subredditId: n
						} = t.payload;
						return n ? {
							...e,
							[s]: r
						} : e
					}
					default:
						return e
				}
			};
			const le = {};
			var ue = (e = le, t) => {
					switch (t.type) {
						case n.t:
						case n.u: {
							const {
								subredditId: r,
								key: s
							} = t.payload;
							return r ? {
								...e,
								[s]: !1
							} : e
						}
						case n.v: {
							const {
								subredditId: r,
								key: s
							} = t.payload;
							return r ? {
								...e,
								[s]: !0
							} : e
						}
						default:
							return e
					}
				},
				pe = Object(s.c)({
					error: ce,
					pending: ue
				});
			const me = {};
			var be = (e = me, t) => {
					switch (t.type) {
						case n.u: {
							const {
								subredditId: r,
								response: s,
								key: n
							} = t.payload;
							return Object(b.setIn)(e, [r, n], s.moderatorIds)
						}
						case n.Y: {
							const {
								subredditId: r,
								userId: s,
								key: n
							} = t.payload, o = e[r][n].filter(e => e !== s);
							return Object(b.setIn)(e, [r, n], o)
						}
						default:
							return e
					}
				},
				he = Object(s.c)({
					data: be,
					api: pe
				});
			var fe = (e = null, t) => {
				switch (t.type) {
					case n.B:
					case n.A:
						return null;
					case n.z:
						return t.payload;
					default:
						return e
				}
			};
			var ge = (e = !1, t) => {
					switch (t.type) {
						case n.A:
						case n.z:
							return !1;
						case n.B:
							return !0;
						default:
							return e
					}
				},
				ye = Object(s.c)({
					error: fe,
					pending: ge
				});
			const _e = {};
			var ve = (e = _e, t) => {
				switch (t.type) {
					case n.A: {
						const {
							subredditId: r,
							moderators: s
						} = t.payload;
						return Object(b.set)(e, r, s)
					}
					case n.V: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(b.unsetIn)(e, [r, s])
					}
					case n.c: {
						const r = t.payload,
							{
								subredditId: s,
								moderators: n
							} = r,
							o = {
								[s]: n
							};
						return Object(b.merge)(e, o)
					}
					default:
						return e
				}
			};
			const Oe = {};
			var we = (e = Oe, t) => {
					switch (t.type) {
						case n.A: {
							const {
								subredditId: r,
								moderatorIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case n.V: {
							const {
								subredditId: r,
								userId: s
							} = t.payload, n = e[r].filter(e => e !== s);
							return {
								...e,
								[r]: n
							}
						}
						case n.c: {
							const r = t.payload,
								{
									subredditId: s,
									moderatorIds: n
								} = r,
								o = [...e[s] || [], ...n];
							return {
								...e,
								[s]: o
							}
						}
						default:
							return e
					}
				},
				xe = Object(s.c)({
					api: ye,
					models: ve,
					userOrder: we
				});
			const Se = {};
			var Ce = (e = Se, t) => {
				switch (t.type) {
					case n.F: {
						const {
							subredditId: r,
							response: s
						} = t.payload, {
							invitePending: n
						} = s, o = {
							[r]: n
						};
						return Object(b.merge)(e, o)
					}
					case n.C:
					case n.D: {
						const {
							subredditId: r
						} = t.payload;
						return Object(b.unset)(e, r)
					}
					default:
						return e
				}
			};
			const ke = {};
			var je = (e = ke, t) => {
				switch (t.type) {
					case n.u: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const Ee = {};
			var Ie = (e = Ee, t) => {
				switch (t.type) {
					case n.F: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const Ne = {};
			var Te = (e = Ne, t) => {
				switch (t.type) {
					case n.F: {
						const {
							response: r
						} = t.payload, s = {
							[r.subredditId]: r.moderators
						};
						return Object(b.merge)({
							...e
						}, s)
					}
					case n.y: {
						const r = t.payload,
							{
								subredditId: s,
								userId: n,
								permissions: o
							} = r;
						return e[s] && e[s][n] ? Object(b.setIn)(e, [s, n, "modPermissions"], o) : e
					}
					default:
						return e
				}
			};
			var Pe = (e = null, t) => {
				switch (t.type) {
					case n.J:
					case n.I:
						return null;
					case n.H:
						return t.payload;
					default:
						return e
				}
			};
			var Le = (e = !1, t) => {
					switch (t.type) {
						case n.J:
							return !0;
						case n.I:
						case n.H:
							return !1;
						default:
							return e
					}
				},
				Me = Object(s.c)({
					error: Pe,
					pending: Le
				}),
				Re = r("./node_modules/lodash/isEqual.js"),
				De = r.n(Re);
			var Fe = (e = null, t) => {
					switch (t.type) {
						case n.J:
						case n.H:
						case n.Y:
							return null;
						case n.I: {
							const e = t.payload.moderatorIds[0];
							return e ? t.payload.moderators[e] : null
						}
						case n.y: {
							const {
								userId: r,
								permissions: s
							} = t.payload;
							return e && e.id === r && !De()(e.modPermissions, s) ? {
								...e,
								modPermissions: s
							} : e
						}
						default:
							return e
					}
				},
				Ae = Object(s.c)({
					api: Me,
					result: Fe
				});
			const Be = {};
			var He = (e = Be, t) => {
				switch (t.type) {
					case n.G:
					case n.F: {
						const {
							subredditId: r,
							key: s
						} = t.payload;
						return r ? {
							...e,
							[s]: null
						} : e
					}
					case n.E: {
						const {
							error: r,
							subredditId: s,
							key: n
						} = t.payload;
						return s ? {
							...e,
							[n]: r
						} : e
					}
					default:
						return e
				}
			};
			const We = {};
			var Ue = (e = We, t) => {
					switch (t.type) {
						case n.E:
						case n.F: {
							const {
								subredditId: r,
								key: s
							} = t.payload;
							return r ? {
								...e,
								[s]: !1
							} : e
						}
						case n.G: {
							const {
								subredditId: r,
								key: s
							} = t.payload;
							return r ? {
								...e,
								[s]: !0
							} : e
						}
						default:
							return e
					}
				},
				Ve = Object(s.c)({
					error: He,
					pending: Ue
				});
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			const Ge = {};
			var qe = (e = Ge, t) => {
					switch (t.type) {
						case n.F: {
							const {
								response: r,
								subredditId: s,
								key: n
							} = t.payload, {
								moderatorIds: o
							} = r;
							return Object(b.merge)(e, {
								[s]: {
									[n]: o
								}
							})
						}
						case n.Y: {
							const {
								subredditId: r,
								userId: s
							} = t.payload, n = {
								...e[r]
							};
							return Object.keys(e[r]).forEach(t => {
								const o = e[r][t].filter(e => e !== s);
								n[t] = o
							}), Object(b.set)(e, r, n)
						}
						default:
							return e
					}
				},
				Ke = Object(s.c)({
					data: qe,
					api: Ve
				}),
				Je = Object(s.c)({
					editableModerators: ie,
					editableUserOrder: he,
					invitedModerators: xe,
					invitePending: Ce,
					loadMoreModerators: Ie,
					loadMoreEditableModerators: je,
					models: Te,
					search: Ae,
					userOrder: Ke
				}),
				Ye = r("./src/reddit/actions/bulkActions/constants.ts");
			var Qe = (e = null, t) => {
					switch (t.type) {
						case Ye.c:
						case Ye.b:
							return null;
						case Ye.a:
							return t.payload;
						default:
							return e
					}
				},
				ze = r("./src/reddit/actions/modQueue/constants.ts");
			var Xe = (e = !1, t) => {
					switch (t.type) {
						case Ye.c:
							return !0;
						case Ye.b:
						case Ye.a:
						case ze.s:
						case ze.r:
							return !1;
						default:
							return e
					}
				},
				Ze = Object(s.c)({
					error: Qe,
					pending: Xe
				});
			const $e = {};
			var et = (e = $e, t) => {
					switch (t.type) {
						case ze.a: {
							const {
								ids: r
							} = t.payload, s = {};
							return r.forEach(e => s[e] = !0), {
								...e,
								...s
							}
						}
						case ze.d: {
							const {
								ids: r
							} = t.payload;
							return P()(e, r)
						}
						case ze.c: {
							const {
								ids: e
							} = t.payload, r = {};
							return e.forEach(e => r[e] = !0), r
						}
						default:
							return e
					}
				},
				tt = r("./src/reddit/models/ModQueue/index.ts");
			const rt = {};
			var st = (e = rt, t) => {
					switch (t.type) {
						case Ye.b: {
							const {
								operation: e,
								ids: r
							} = t.payload;
							return "approve" === e ? rt : {
								[tt.c[e]]: r
							}
						}
						default:
							return e
					}
				},
				nt = Object(s.c)({
					api: Ze,
					selectedItems: et,
					undoLastAction: st
				});
			var ot = (e = null, t) => {
				switch (t.type) {
					case ze.g:
					case ze.f:
						return null;
					case ze.e:
						return t.payload;
					default:
						return e
				}
			};
			var at = (e = !1, t) => {
					switch (t.type) {
						case ze.g:
							return !0;
						case ze.f:
						case ze.e:
							return !1;
						default:
							return e
					}
				},
				it = Object(s.c)({
					error: ot,
					pending: at
				});
			const dt = {};
			var ct = (e = dt, t) => {
				switch (t.type) {
					case ze.f: {
						const {
							listingKey: r,
							page: s,
							response: n
						} = t.payload, {
							modqueue: o
						} = n;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: o
							}
						}
					}
					default:
						return e
				}
			};
			const lt = {};
			var ut = (e = lt, t) => {
					switch (t.type) {
						case ze.f: {
							const {
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: n
							} = s, o = n[n.length - 1] || null;
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				pt = Object(s.c)({
					api: it,
					itemOrder: ct,
					loadMore: ut
				}),
				mt = r("./src/reddit/actions/pages/modListing/constants.ts");
			var bt = (e = null, t) => {
				switch (t.type) {
					case mt.e: {
						const r = t.payload,
							{
								moderatingSubreddits: s
							} = r;
						return s ? null : e
					}
					case ze.i:
					case ze.f:
					case ze.m:
					case ze.p:
					case ze.v: {
						const {
							response: e
						} = t.payload, {
							moderatedAfter: r
						} = e;
						return r
					}
					case ze.k: {
						const e = t.payload,
							{
								moderatedAfter: r
							} = e;
						return r
					}
					default:
						return e
				}
			};
			const ht = [];
			var ft = (e = ht, t) => {
				switch (t.type) {
					case ze.i:
					case ze.f:
					case ze.m:
					case ze.p:
					case ze.v: {
						const {
							response: e
						} = t.payload, {
							listingOrder: r
						} = e;
						return r
					}
					case ze.k: {
						const r = t.payload,
							{
								listingOrder: s
							} = r;
						return [...e, ...s]
					}
					case mt.e: {
						const r = t.payload,
							{
								listingOrder: s
							} = r;
						return s || e
					}
					default:
						return e
				}
			};
			var gt = (e = !1, t) => {
				switch (t.type) {
					case ze.b:
						return !0;
					default:
						return e
				}
			};
			var yt = (e = !1, t) => {
					switch (t.type) {
						case ze.k:
							return !0;
						case ze.b:
							return !1;
						default:
							return e
					}
				},
				_t = Object(s.c)({
					after: bt,
					data: ft,
					loaded: gt,
					pending: yt
				});
			var vt = (e = null, t) => {
				switch (t.type) {
					case ze.j:
					case ze.i:
						return null;
					case ze.h:
						return t.payload;
					default:
						return e
				}
			};
			var Ot = (e = !1, t) => {
					switch (t.type) {
						case ze.j:
							return !0;
						case ze.i:
						case ze.h:
							return !1;
						default:
							return e
					}
				},
				wt = Object(s.c)({
					error: vt,
					pending: Ot
				});
			const xt = {};
			var St = (e = xt, t) => {
				switch (t.type) {
					case ze.i: {
						const {
							listingKey: r,
							page: s,
							response: n
						} = t.payload, {
							modqueue: o
						} = n;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Ct = {};
			var kt = (e = Ct, t) => {
					switch (t.type) {
						case ze.i: {
							const {
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: n
							} = s, o = n[n.length - 1] || null;
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				jt = Object(s.c)({
					api: wt,
					itemOrder: St,
					loadMore: kt
				});
			var Et = (e = null, t) => {
				switch (t.type) {
					case ze.n:
					case ze.m:
						return null;
					case ze.l:
						return t.payload;
					default:
						return e
				}
			};
			var It = (e = !1, t) => {
					switch (t.type) {
						case ze.n:
							return !0;
						case ze.m:
						case ze.l:
							return !1;
						default:
							return e
					}
				},
				Nt = Object(s.c)({
					error: Et,
					pending: It
				});
			const Tt = {};
			var Pt = (e = Tt, t) => {
				switch (t.type) {
					case ze.m: {
						const {
							listingKey: r,
							page: s,
							response: n
						} = t.payload, {
							modqueue: o
						} = n;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Lt = {};
			var Mt = (e = Lt, t) => {
					switch (t.type) {
						case ze.m: {
							const {
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: n
							} = s, o = n[n.length - 1] || null;
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				Rt = Object(s.c)({
					api: Nt,
					itemOrder: Pt,
					loadMore: Mt
				});
			var Dt = (e = null, t) => {
				switch (t.type) {
					case ze.q:
					case ze.p:
						return null;
					case ze.o:
						return t.payload;
					default:
						return e
				}
			};
			var Ft = (e = !1, t) => {
					switch (t.type) {
						case ze.q:
							return !0;
						case ze.p:
						case ze.o:
							return !1;
						default:
							return e
					}
				},
				At = Object(s.c)({
					error: Dt,
					pending: Ft
				});
			const Bt = {};
			var Ht = (e = Bt, t) => {
				switch (t.type) {
					case ze.p: {
						const {
							listingKey: r,
							page: s,
							response: n
						} = t.payload, {
							modqueue: o
						} = n;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Wt = {};
			var Ut = (e = Wt, t) => {
					switch (t.type) {
						case ze.p: {
							const {
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: n
							} = s, o = n[n.length - 1] || null;
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				Vt = Object(s.c)({
					api: At,
					itemOrder: Ht,
					loadMore: Ut
				});
			var Gt = (e = null, t) => {
				switch (t.type) {
					case ze.w:
					case ze.v:
						return null;
					case ze.u:
						return t.payload;
					default:
						return e
				}
			};
			var qt = (e = !1, t) => {
					switch (t.type) {
						case ze.w:
							return !0;
						case ze.v:
						case ze.u:
							return !1;
						default:
							return e
					}
				},
				Kt = Object(s.c)({
					error: Gt,
					pending: qt
				});
			const Jt = {};
			var Yt = (e = Jt, t) => {
				switch (t.type) {
					case ze.v: {
						const {
							listingKey: r,
							page: s,
							response: n
						} = t.payload, {
							modqueue: o
						} = n;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Qt = {};
			var zt = (e = Qt, t) => {
					switch (t.type) {
						case ze.v: {
							const {
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: n
							} = s, o = n[n.length - 1] || null;
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				Xt = Object(s.c)({
					api: Kt,
					itemOrder: Yt,
					loadMore: zt
				}),
				Zt = Object(s.c)({
					bulkAction: nt,
					edited: pt,
					moderatedCommunitiesOrder: _t,
					modqueue: jt,
					reports: Rt,
					spam: Vt,
					unmoderated: Xt
				});
			var $t = (e = null, t) => {
				switch (t.type) {
					case n.N:
					case n.L:
						return null;
					case n.K:
						return t.payload;
					default:
						return e
				}
			};
			const er = {};
			var tr = (e = er, t) => {
					switch (t.type) {
						case n.N: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, n = Object(a.d)(r, s);
							return {
								...e,
								[n]: !0
							}
						}
						case n.L:
						case n.K: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, n = Object(a.d)(r, s);
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				rr = Object(s.c)({
					error: $t,
					pending: tr
				});
			const sr = {};
			var nr = (e = sr, t) => {
					switch (t.type) {
						case n.L: {
							const {
								fetchedToken: r,
								subredditId: s
							} = t.payload, n = Object(a.d)(s, r);
							return {
								...e,
								[n]: !0
							}
						}
						default:
							return e
					}
				},
				or = r("./src/reddit/actions/inContextModeration.ts");
			var ar = (e = null, t) => {
				switch (t.type) {
					case or.b:
						return t.payload;
					default:
						return e
				}
			};
			const ir = {};
			var dr = (e = ir, t) => {
				switch (t.type) {
					case n.L: {
						const {
							subredditId: e,
							after: r
						} = t.payload;
						return {
							[e]: r
						}
					}
					default:
						return e
				}
			};
			const cr = {};
			var lr = (e = cr, t) => {
				switch (t.type) {
					case n.M:
					case n.L: {
						const {
							subredditId: r,
							mutedUsers: s
						} = t.payload, n = {
							[r]: s
						};
						return Object(b.merge)(e, n)
					}
					case n.R: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(b.unsetIn)(e, [r, s])
					}
					default:
						return e
				}
			};
			var ur = (e = null, t) => {
				switch (t.type) {
					case n.Q:
					case n.P:
						return null;
					case n.O:
						return t.payload;
					default:
						return e
				}
			};
			var pr = (e = !1, t) => {
					switch (t.type) {
						case n.Q:
							return !0;
						case n.P:
						case n.O:
							return !1;
						default:
							return e
					}
				},
				mr = Object(s.c)({
					error: ur,
					pending: pr
				});
			var br = (e = null, t) => {
					switch (t.type) {
						case n.Q:
						case n.O:
							return null;
						case n.P: {
							const e = t.payload.mutedUserIds[0];
							return e ? t.payload.mutedUsers[e] : null
						}
						default:
							return e
					}
				},
				hr = Object(s.c)({
					api: mr,
					result: br
				});
			const fr = {};
			var gr = (e = fr, t) => {
					switch (t.type) {
						case n.L: {
							const {
								subredditId: r,
								mutedUserIds: s
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...s]
							} : {
								...e,
								[r]: s
							}
						}
						case n.R: {
							const {
								subredditId: r,
								userId: s
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== s)
							}
						}
						case n.M: {
							const {
								subredditId: r,
								mutedUserIds: s
							} = t.payload, n = s[0];
							return n && e[r] && -1 === e[r].indexOf(n) ? {
								[r]: [n, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				yr = Object(s.c)({
					api: rr,
					fetchedTokens: nr,
					inContext: ar,
					loadMore: dr,
					models: lr,
					search: hr,
					userOrder: gr
				});
			t.a = Object(s.c)({
				approvedSubmitters: S,
				flairedUsers: G,
				moderationLog: oe,
				moderators: Je,
				modQueue: Zt,
				muted: yr
			})
		},
		"./src/reddit/routes/powerups/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = r("./src/lib/constants/index.ts"),
				o = r("./src/reddit/actions/pages/powerups.ts");
			const a = "/powerups",
				i = {
					action: o.a,
					chunk: n.s.POWERUPS,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Powerups",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!r.m[t]
						},
						importAsync: () => r.e("Powerups").then(r.bind(null, "./src/reddit/pages/Powerups/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return r(t)
						},
						resolve() {
							return "./src/reddit/pages/Powerups/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: n.Mb.POWERUPS,
						isResponsive: !0
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return i
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const a = e => {
					const t = Object(n.c)(e, {
						experimentEligibilitySelector: o.J,
						experimentName: s.xc
					});
					return !(!t || Object(s.of)(t))
				},
				i = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: o.J,
						experimentName: s.xc
					}) === s.cd.ListingEnabled
				}
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(n.c)(e, {
					experimentName: s.Nd,
					experimentEligibilitySelector: n.a
				}) === s.Wd.Enabled,
				a = e => Object(n.c)(e, {
					experimentName: s.Od,
					experimentEligibilitySelector: n.a,
					expEventOverride: !1
				}) === s.Xd.Enabled
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return d
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "k", (function() {
				return p
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "g", (function() {
				return v
			})), r.d(t, "d", (function() {
				return O
			}));
			var s = r("./src/lib/objectSelector/index.ts"),
				n = r("./src/reddit/featureFlags/index.ts"),
				o = r("./src/reddit/selectors/posts.ts"),
				a = r("./src/reddit/selectors/subreddit.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const d = (e, t) => {
					const r = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (r) {
						const t = Object(a.R)(e, {
							subredditId: r
						});
						return t && t.displayText || ""
					}
					return ""
				},
				c = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				u = [],
				p = Object(s.a)((e, t) => {
					const r = m(e, t);
					if (!r) return u;
					const s = Object(a.V)(e, {
						subredditName: r.name
					});
					return s && s.postIds && s.postIds.length ? s.postIds : u
				}),
				m = (e, t) => {
					const r = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return r ? Object(a.R)(e, {
						subredditId: r
					}) : null
				},
				b = (e, t, r, s, n) => {
					const a = n.find(e => e <= t) || -1,
						i = n.find(e => e > t) || 1 / 0;
					return t !== i && t !== a && (!(a + r > t) && (!(t + r > i) && !((e, t, r) => {
						const s = r[t - 1],
							n = r[t],
							a = n && Object(o.H)(e, {
								postId: s
							}) || null,
							i = n && Object(o.H)(e, {
								postId: n
							}) || null;
						return a && a.isSponsored || i && i.isSponsored
					})(e, t, s)))
				},
				h = [3],
				f = Object(s.a)((e, {
					existingDUPositions: t,
					listingProps: r
				}) => {
					const s = t.slice().sort();
					let n = -1;
					const a = Object(o.A)(e, {
							listingKey: r.listingKey
						}),
						i = [];
					return h.forEach(t => {
						let r = n + t;
						if (!(r >= a.length)) {
							for (; r < a.length && !b(e, r, t, a, s);) r += 1;
							r < a.length && (i.push(r), n = r)
						}
					}), i
				}),
				g = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				y = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				_ = e => e.focusedVerticals.category,
				v = e => e.focusedVerticals.lastLoadedEnv,
				O = e => {
					const t = Object(i.I)(e),
						r = n.d.geoSubredditRecommendationDULoggedIn(e),
						s = n.d.geoSubredditRecommendationDULoggedOut(e);
					return t && r || !t && s
				}
		},
		"./src/reddit/selectors/gold/powerups/modSignup.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return c
			}));
			var s = r("./src/reddit/featureFlags/subredditPoints.ts"),
				n = r("./src/reddit/selectors/moderatorPermissions.ts"),
				o = r("./src/reddit/selectors/user.ts"),
				a = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/selectors/gold/powerups/index.ts");
			const d = e => {
					const t = Object(n.a)(e);
					if (!t) return null;
					const r = Object(o.G)(e),
						a = [];
					for (const n of t) {
						const t = e.subreddits.models[n];
						if (!t) return null;
						const o = Object(i.h)(e, {
							subredditId: n
						});
						s.b.has(t.name) || t.isNSFW || t.subscribers < 1e3 && !r || a.push({
							id: n,
							displayText: t.displayText,
							hasPowerups: o
						})
					}
					return a
				},
				c = Object(a.a)(d, e => !!(null == e ? void 0 : e.length))
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "e", (function() {
				return b
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/constants/index.ts");
			var s = r("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				n = r("./src/lib/objectSelector/index.ts"),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/reducers/features/comments/index.ts"),
				i = r("./src/reddit/reducers/pages/modHub/index.ts");
			Object(o.a)({
				features: {
					comments: a.a
				},
				pages: {
					modHub: i.a
				}
			});
			const d = (e, t) => Object(s.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					subreddit: t.subredditName
				}),
				c = Object(n.a)((e, t) => {
					var r, s, n;
					const {
						pageName: o,
						page: a
					} = t, i = d(0, t);
					if (!(null === (n = null === (s = null === (r = e.pages.modHub.modQueue[o]) || void 0 === r ? void 0 : r.itemOrder) || void 0 === s ? void 0 : s[i]) || void 0 === n ? void 0 : n[a])) return;
					const c = e.pages.modHub.modQueue[o].itemOrder[i][a];
					return c ? c.map(t => e.posts.models[t] || e.features.comments.models[t]) : []
				}),
				l = (e, t) => {
					var r;
					const {
						pageName: s
					} = t;
					return null === (r = e.pages.modHub.modQueue[s]) || void 0 === r || !r.api || e.pages.modHub.modQueue[s].api.pending
				},
				u = (e, t) => {
					var r;
					const s = d(0, t);
					return null === (r = e.pages.modHub.modQueue[t.pageName]) || void 0 === r ? void 0 : r.loadMore[s]
				},
				p = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				m = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				b = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = (e, {
				listingKey: t
			}) => e.tracking.viewportDataLoaded[t]
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"3b91bd4c7419"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing.5283333672b0266831c3.js.map