// https://www.redditstatic.com/desktop2x/ModListing.d57bb649b65acdf116a9.js
// Retrieved at 10/20/2022, 9:40:06 AM by Reddit Dataminer v1.0.0
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
								l = t && a && this._computeTargetAndRootIntersection(i, n),
								u = s.entry = new r({
									time: e.performance && performance.now && performance.now(),
									target: i,
									boundingClientRect: o,
									rootBounds: n,
									intersectionRect: l
								});
							c ? t && a ? this._hasCrossedThreshold(c, u) && this._queuedEntries.push(u) : c && c.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, s.prototype._computeTargetAndRootIntersection = function(n, r) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var s, i, o, a, l, u, m, b, p = d(n), h = c(n), g = !1; !g;) {
								var f = null,
									y = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == y.display) return;
								if (h == this.root || h == t ? (g = !0, f = r) : h != t.body && h != t.documentElement && "visible" != y.overflow && (f = d(h)), f && (s = f, i = p, o = void 0, a = void 0, l = void 0, u = void 0, m = void 0, b = void 0, o = Math.max(s.top, i.top), a = Math.min(s.bottom, i.bottom), l = Math.max(s.left, i.left), u = Math.min(s.right, i.right), b = a - o, !(p = (m = u - l) >= 0 && b >= 0 && {
										top: o,
										bottom: a,
										left: l,
										right: u,
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
				for (var l = r(c, t); ++n < e;) t(n);
				return l
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
					var l = e[c],
						u = t[c];
					if (!1 === (s = n ? n.call(r, l, u, c) : void 0) || void 0 === s && l !== u) return !1
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
				return x
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "b", (function() {
				return j
			}));
			var r, s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/performanceTimings/index.tsx"),
				o = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(r || (r = {}));
			var c, l = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var m = n("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				b = n("./src/reddit/selectors/platform.ts"),
				p = n("./src/reddit/selectors/user.ts");
			const h = Object(s.a)(o.g),
				g = Object(s.a)(o.e),
				f = Object(s.a)(o.h),
				y = Object(s.a)(o.c),
				x = Object(s.a)(o.f),
				_ = Object(s.a)(o.j),
				v = Object(s.a)(o.i),
				O = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const i = t(),
						o = Object(m.e)(i),
						c = Object(m.d)(i),
						b = Object(p.P)(i);
					if (o || !c) return;
					e(f());
					let x = !1;
					try {
						const t = b ? r.LoggedInGeo : r.LoggedOutGeo,
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
							if (E(t)) {
								if (S(t)) {
									e(y({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), x = !0
								} else if (C(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: s,
											category: i
										} = n.focusRecommendations[0],
										o = [r, s],
										d = Object(u.d)(o),
										a = Object(l.b)(o),
										c = Object(u.c)(r),
										m = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [s.id],
											subreddits: d,
											subredditsAboutInfo: a,
											subredditTopContent: c,
											category: i,
											lastLoadedEnv: "client"
										};
									e(h(m)), x = !0
								}
							} else x = !1
						}
					} catch (_) {
						x = !1
					}
					x || e(g({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, S = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				}, C = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						r = t && t.type;
					return !!(n && !S(e) && r === c.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, j = () => async (e, t, n) => {
					var r, s;
					const o = t(),
						d = Object(m.g)(o);
					if (Object(m.f)(o) || null === d || "client" === d) {
						const n = null === (s = null === (r = Object(b.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
							d = Object(p.Q)(o);
						return Object(i.i)(() => e(O()), {
							name: "getFocusedVerticalsRequested",
							page: n,
							isLoggedIn: d
						})
					}
					if ("server" === d) return e(x({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/modListing/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "modListingDataPending", (function() {
				return N
			})), n.d(t, "modListingDataLoaded", (function() {
				return T
			})), n.d(t, "modListingDataFailed", (function() {
				return w
			})), n.d(t, "modListingPageRequested", (function() {
				return R
			})), n.d(t, "morePostsPending", (function() {
				return B
			})), n.d(t, "morePostsLoaded", (function() {
				return V
			})), n.d(t, "morePostsFailed", (function() {
				return A
			})), n.d(t, "moreModListingRequested", (function() {
				return H
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
				return W
			})), n.d(t, "unhideSubreddit", (function() {
				return X
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/pick.js"),
				i = n.n(s),
				o = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeListingKey/index.ts"),
				c = n("./src/reddit/actions/platform.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/page.ts"),
				m = n("./src/reddit/constants/parameters.ts"),
				b = n("./src/config.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				h = n("./src/lib/omitHeaders/index.ts"),
				g = n("./src/reddit/constants/headers.ts"),
				f = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				y = n("./src/reddit/helpers/name/index.ts"),
				x = n("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				_ = (e, t) => Object(p.a)(e, {
					data: t,
					endpoint: Object(f.a)(Object(x.a)(`${b.a.gatewayUrl}/desktopapi/v1/mod`)),
					method: o.ob.GET
				});
			const v = (e, t, n, r) => Object(p.a)(Object(h.a)(e, [g.a]), {
					endpoint: `${e.apiUrl}/api/filter/user/${t}/f/mod/${Object(y.d)(n)}`,
					method: r ? o.ob.PUT : o.ob.DELETE,
					data: {
						model: JSON.stringify({
							name: Object(y.j)(n)
						})
					}
				}),
				O = (e, t, n) => v(e, t, n, !0),
				E = (e, t, n) => v(e, t, n, !1);
			var S = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				C = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				j = n("./src/reddit/helpers/timeApiRoute/index.ts"),
				I = n("./src/reddit/helpers/trackers/screenview.ts"),
				k = n("./src/reddit/models/Toast/index.ts"),
				L = n("./src/reddit/routes/modListing/index.ts"),
				P = n("./src/reddit/selectors/user.ts"),
				M = n("./src/reddit/actions/pages/modListing/constants.ts");
			const N = Object(d.a)(M.f),
				T = Object(d.a)(M.e),
				w = Object(d.a)(M.d),
				F = (e, t) => async (n, s, i) => {
					const o = s();
					if (o.listings.postOrder.api.pending[e]) return;
					n(N({
						key: e
					}));
					const d = await Object(j.a)("modListing", () => _(i.apiContext(), t)),
						a = `error-${e}`;
					d.ok ? (n(T({
						key: e,
						meta: o.meta,
						...d.body
					})), n(l.g(a))) : (n(w({
						error: d.error,
						key: e,
						...d.body
					})), 401 === d.status ? Object(C.a)(n, o) : n(l.f({
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
					} = e.params, l = Object(L.d)(e.path), b = l ? u.f : u.e, p = Object(a.a)(b, d, e.queryParams), h = s(), g = h.listings.postOrder.ids[p], f = h.listings.postOrder.api.error[p];
					if (h.listings.postOrder.api.pending[p] || g && !f && !t) return void(g && n(c.m({
						title: r.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})));
					const y = D(e.queryParams);
					await n(F(p, {
						...i()(e.queryParams, m.p),
						...i()(e.queryParams, m.o),
						filtered: !!l || void 0,
						moderated_srs: !0,
						sort: d,
						t: Object(S.a)(d, y)
					})), n(c.m({
						title: r.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})), Object(I.h)(s(), !0)
				}, B = Object(d.a)(M.i), V = Object(d.a)(M.h), A = Object(d.a)(M.g), H = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const d = n(),
						c = d.platform.currentPage;
					if (!c) return;
					const {
						sort: l = o.cb
					} = e, b = c.queryParams, p = Object(L.d)(c.url), h = p ? u.f : u.e, g = Object(a.a)(h, l, b), f = d.listings.postOrder.loadMore[g];
					if (!f) return;
					const y = d.listings.postOrder.api.pending[g],
						x = d.listings.postOrder.fetchedTokens,
						v = !(!x[g] || !x[g][f.token]);
					if (y || v) return;
					const O = D(b);
					t(B({
						key: g,
						fetchedToken: f.token
					}));
					const E = await _(s(), {
							after: f.token,
							dist: f.dist,
							filtered: !!p || void 0,
							sort: l,
							t: Object(S.a)(l, O),
							...i()(b, m.p)
						}),
						C = d.listings.postOrder.ids[g],
						j = {
							...E.body,
							postIds: (E.body.postIds || []).filter(e => !C || !C.includes(e))
						};
					E.ok ? t(V({
						key: g,
						fetchedToken: f.token,
						meta: d.meta,
						...j
					})) : t(A({
						key: g,
						error: E.error,
						fetchedToken: f.token,
						...j
					}))
				};

			function D(e) {
				const t = m.N in e && e[m.N].toUpperCase() || "";
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
						d = Object(P.k)(o),
						[a, c, l, u] = t ? [q, K, G, O] : [J, U, Q, E];
					if (!d || !d.displayText) return;
					const {
						currentPage: m
					} = o.platform;
					if (!m || !m.routeMatch) return;
					n(a(e));
					const b = await u(i(), d.displayText, e);
					b.ok ? (await n(R(m.routeMatch.match, !0)), n(c(e))) : n(l(b.body))
				}, W = e => Y(e, !0), X = e => Y(e, !1)
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
		"./src/reddit/components/BackToSubreddit/index.m.less": function(e, t, n) {
			e.exports = {
				backToSubreddit: "_3aAvvioBKBNnlJqKytAVAd",
				innerContainer: "_3aVffPeM6Nkqs7D0RJ5FBs",
				back: "_17MxNCYEMmDof9NnT6ffxl",
				title: "_2VB8YvVdvxx0h0VGYVrpBX",
				subredditIcon: "_2Aw3HO2EUDcP7F481ZxyYl",
				content: "uhMLc-O1VODjzminrp8py"
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
				l = n("./src/reddit/icons/fonts/index.tsx"),
				u = n("./src/reddit/components/ContentSurvey/SurveyModal.tsx");
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
				}))), s.a.createElement(l.a, {
					name: "caret_right",
					className: d.a.chevron
				}), o && s.a.createElement(u.a, {
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
					importAsync: () => Promise.all([n.e(2), n.e(4)]).then(n.bind(null, "./src/reddit/components/ContentSurvey/index.tsx")),
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
				l = n("./src/lib/isFakeSubreddit/index.ts"),
				u = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/components/PostList/Placeholder.tsx"),
				p = n("./src/reddit/components/EmptySubreddit.m.less"),
				h = n.n(p),
				g = n("./src/lib/classNames/index.ts"),
				f = n("./src/lib/lessComponent.tsx"),
				y = n("./src/reddit/pages/Subreddit/SurveyUnit.tsx");
			const x = f.a.wrapped(b.a, "BackgroundPlaceholder", h.a),
				_ = f.a.wrapped(m.n, "SubmitLink", h.a),
				v = e => {
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
					const s = v(n);
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
					})(n)), t && !Object(l.a)(t) && !!s && d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
						className: h.a.SecondaryText
					}, v(n)), d.a.createElement(_, {
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
				})), d.a.createElement(_, {
					to: "/r/popular"
				}, r.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = e => d.a.createElement(d.a.Fragment, null, e.subreddit && d.a.createElement(y.a, {
				subredditId: e.subreddit.id,
				subredditSubscribers: e.subreddit.subscribers
			}), d.a.createElement("div", {
				"data-testid": "empty-subreddit",
				className: Object(g.a)(h.a.Component, h.a.EmptyHomepage)
			}, d.a.createElement(x, {
				isLoading: !1,
				layout: u.g.Classic
			}), d.a.createElement("div", {
				className: h.a.MainContentWrapper
			}, e.subreddit ? d.a.createElement(O, e) : d.a.createElement(E, null))))
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				rightBorderExp: "d2l2sN1D4PNVkzMmwALA2",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S",
				wrapperExp: "_1C67uwkUf95iJOZ63vDJOZ"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "a", (function() {
				return f
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/constants/componentSizes.ts"),
				a = n("./src/reddit/contexts/NavbarExp.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/components/JumpToContent/index.m.less"),
				u = n.n(l);
			const m = Object(s.createContext)(null),
				b = Object(s.createContext)(null);
			class p extends i.a.Component {
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
					return i.a.createElement(m.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, i.a.createElement(b.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const h = d.f + 10,
				g = i.a.memo(() => {
					const [e, t] = Object(s.useState)("-500px"), n = Object(s.useContext)(a.a);
					return i.a.createElement(m.Consumer, null, s => s && i.a.createElement("div", {
						className: Object(o.a)(u.a.wrapper, {
							[u.a.wrapperExp]: n
						}),
						"data-testid": "jump-to-content"
					}, i.a.createElement(c.t, {
						kind: c.b.Button,
						priority: c.c.Plain,
						className: u.a.button,
						style: {
							marginLeft: e
						},
						onBlur: e => {
							const n = e.currentTarget.clientWidth + 55;
							t(`-${n}px`)
						},
						onFocus: () => {
							t("0")
						},
						onClick: () => {
							s.focus(), s.scrollIntoView(), window.scrollBy(0, -h)
						}
					}, r.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), i.a.createElement("div", {
						className: Object(o.a)(u.a.rightBorder, {
							[u.a.rightBorderExp]: n
						})
					})))
				}),
				f = i.a.memo(() => i.a.createElement(b.Consumer, null, e => i.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
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
				l = n.n(c);
			t.a = e => {
				const t = Object(i.useContext)(d.a);
				return o.a.createElement("div", {
					className: Object(a.a)(l.a.noPermissions, {
						[l.a.noPermissionsExp]: t
					})
				}, o.a.createElement("img", {
					className: l.a.rememberTheHuman,
					src: `${r.a.assetPath}/img/content-gate-icons/remember-the-human.png`
				}), e.isModerator ? s.fbt._("Sorry, you do not have the moderator permissions needed to view this page", null, {
					hk: "4wUDIF"
				}) : s.fbt._("Sorry, this is a moderator-only page", null, {
					hk: "2BZEIA"
				}), o.a.createElement("div", {
					className: l.a.noPermissionsSmallText
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
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				b = n.n(m),
				p = n("./src/lib/lessComponent.tsx");
			const h = p.a.wrapped(l.b, "SubredditIcon", b.a),
				g = p.a.span("Label", b.a),
				f = Object(c.c)({
					subredditOrProfile: u.Q
				});
			var y = Object(a.b)(f)(e => {
				let {
					children: t,
					subredditOrProfile: n
				} = e;
				return t(n, i.a.createElement(i.a.Fragment, null, i.a.createElement(h, {
					subredditOrProfile: n
				}), i.a.createElement(g, null, n.displayText)))
			});
			var x = e => {
					let {
						children: t,
						className: n,
						subredditsOrProfilesIds: r
					} = e;
					const s = r.map(e => i.a.createElement(y, {
						children: t,
						key: e.id,
						identifier: e
					}));
					return i.a.createElement("div", {
						className: n
					}, s)
				},
				_ = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				v = n.n(_);
			const O = p.a.div("CommunityCount", v.a),
				E = p.a.wrapped(x, "SubredditsOrProfiles", v.a),
				S = p.a.wrapped(o.a, "SidebarSubreddit", v.a),
				C = p.a.wrapped(o.a, "ModalSubreddit", v.a);
			var j;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(j || (j = {}));
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
				} = e, a = t ? S : C, c = n.length, l = t && n.length > 4;
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
				}, n)), c > 0 && l && i.a.createElement(d.r, {
					onClick: s
				}, r.fbt._("See more", null, {
					hk: "QYkk2"
				})))
			}
		},
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class o extends s.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return s.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var d = Object(i.a)(o);
			t.a = e => s.a.createElement(d, e)
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "b", (function() {
				return I
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/actions/ads/index.ts"),
				d = n("./src/reddit/actions/focusedVerticals/index.ts"),
				a = n("./src/reddit/actions/gold/tooltips.ts"),
				c = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/postList.ts"),
				u = n("./src/reddit/actions/survey/index.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = n("./src/reddit/helpers/trackers/post.ts"),
				g = n("./src/reddit/components/PostList/Placeholder.tsx"),
				f = n("./src/reddit/featureFlags/index.ts"),
				y = n("./src/reddit/selectors/experiments/survey.ts"),
				x = n("./src/reddit/selectors/listings.ts"),
				_ = n("./src/reddit/selectors/posts.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/tracking.ts");

			function E() {
				return Object(b.u)({
					currentProfileName: b.i,
					isCommentPermalink: b.w,
					isCommentsPage: b.x,
					isFrontpage: b.A,
					isProfilePostListing: b.L,
					isTopicPage: b.R,
					pageLayer: e => e
				})
			}
			const S = E(),
				C = {
					apiError: x.c,
					apiPending: x.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(b.S)(e, t),
					loadMore: x.g,
					postsById: _.T,
					postIds: Object(i.a)((e, t) => {
						let {
							listingKey: n,
							listingName: r,
							inSubredditOrProfile: s
						} = t;
						return Object(_.D)(e, n, r, s)
					}),
					subredditsById: v.fb,
					viewportDataLoaded: O.a,
					pageReferrer: b.V,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: y.e
				},
				j = Object(s.c)(C),
				I = e => ({
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
					trackOnPostEnteredViewport: (t, n, r, s) => {
						e(c.N(t, r, s))
					},
					trackOnPostExitedViewport: (t, n, r, s) => {
						e(c.O(t, r, s))
					},
					showModalOnScroll: () => e(c.bb()),
					surveyTriggerScrollCounted: () => e(Object(u.m)())
				}),
				k = e => Object(p.b)({
					...e
				}),
				L = (e, t, n, r) => {
					const {
						listingKey: s,
						hostPostData: i,
						listingBelowVariant: o
					} = r;
					return Object(h.k)(e, t, "post", s, i, o, void 0)
				},
				P = Object(r.b)(j, I, (e, t, n) => ({
					...e,
					...t,
					...n,
					postComponentForLayout: k,
					postClickEventFactory: L
				}));
			t.a = e => Object(m.c)(S(P(e)))
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/structuredStyles/index.ts"),
				o = n("./src/reddit/selectors/activeModalId.ts"),
				d = n("./src/reddit/selectors/structuredStyles.ts"),
				a = n("./src/reddit/constants/modals.ts");
			const c = Object(s.c)({
				bladeHasUnsavedChanges: d.a,
				isEditing: d.i,
				isBladeEditorDirty: d.h,
				isModalOpen: Object(o.b)(a.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(r.b)(c, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					requestCloseBlade: () => n && e(Object(i.h)(n))
				}
			})
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
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "d", (function() {
				return f
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
				g = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "message_modsupport",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				f = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "learn_more",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				})
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "a", (function() {
				return a
			}));
			n("./src/reddit/constants/categories.tsx");
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: r.bb(e),
					profile: r.T(e),
					subreddit: r.jb(e)
				}),
				i = e => t => ({
					action: "click",
					source: "nav",
					noun: e,
					...s(t)
				}),
				o = e => t => ({
					...s(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				d = e => t => ({
					...s(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				}),
				a = e => t => ({
					...s(t),
					source: "nav",
					action: "click",
					noun: `lang_${e}`
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
		"./src/reddit/layout/page/Listing/BackgroundContainer.m.less": function(e, t, n) {
			e.exports = {
				backgroundContainer: "_2wxsLGNmMLx6sEMLJyn2o9"
			}
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/reddit/models/Theme/index.ts"),
				a = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = n("./src/reddit/layout/page/Listing/BackgroundContainer.m.less"),
				l = n.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(o.a)(e => {
				const {
					backgroundColor: t,
					className: n,
					redditStyle: r,
					theme: o,
					...c
				} = e, m = Object(a.a)(e), b = {
					"--pseudo-before-background": t || Object(d.g)(m.canvas, m.canvasImgUrl, m.canvasImgPosition)
				};
				return s.a.createElement("div", u({
					className: Object(i.a)(l.a.backgroundContainer, n),
					style: b
				}, c))
			})
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, n) {
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
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/postLayout.ts"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				m = n.n(u);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = Object(c.u)(),
				h = Object(o.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(c.S)(e, t)
				}),
				g = Object(i.b)(h);
			t.a = p(g(e => {
				let {
					className: t,
					hideOnlyChildMargin: n,
					disableFullscreen: r,
					dispatch: i,
					fitPageToContent: o,
					forcedLayout: l,
					isCollectionLayout: u,
					isEditing: p,
					layout: h,
					pageLayer: g,
					...f
				} = e;
				return s.a.createElement("div", b({
					className: Object(d.a)(t, m.a.styledContent, {
						[m.a.mLargePostLayout]: h === a.g.Large || Object(c.P)(g),
						[m.a.mDisableFullScreen]: r && !u,
						[m.a.mClassicWidth]: u,
						[m.a.mIsEditing]: !!p,
						[m.a.mCanFlexFullWidth]: !o,
						[m.a.onlyChildMargin]: !n
					})
				}, f))
			}))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, n) {
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
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				o = n("./src/reddit/layout/page/Listing/Content.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/componentSizes.ts"),
				c = n("./src/reddit/constants/elementClassNames.ts"),
				l = n("./src/reddit/constants/screenWidths.ts"),
				u = n("./src/reddit/contexts/NavbarExp.ts"),
				m = n("./node_modules/classnames/index.js"),
				b = n.n(m),
				p = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				h = n("./src/lib/constants/icons.ts"),
				g = n("./src/reddit/components/SubredditIcon/index.tsx"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/components/BackToSubreddit/index.m.less"),
				x = n.n(y);
			var _ = e => {
					const {
						subredditName: t
					} = e, n = `/${t}`;
					return s.a.createElement(p.a, {
						className: x.a.backToSubreddit,
						to: n
					}, s.a.createElement("div", {
						className: x.a.innerContainer
					}, s.a.createElement(f.a, {
						name: h.a.back,
						className: b()(x.a.content, x.a.back)
					}), s.a.createElement(g.b, {
						className: b()(x.a.content, x.a.subredditIcon)
					}), s.a.createElement("span", {
						className: b()(x.a.content, x.a.title)
					}, t)))
				},
				v = n("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				O = n("./src/reddit/layout/page/Listing/index.m.less"),
				E = n.n(O);
			t.a = e => {
				const {
					backgroundColor: t,
					backToSubredditName: n,
					className: m,
					containerRef: b,
					content: p,
					contentBanner: h,
					contentClassName: g,
					contentNavBar: f,
					disableFullscreen: y,
					fitPageToContent: x,
					forcedLayout: O,
					hideOnlyChildMargin: S,
					isCollectionLayout: C,
					isPageSwapped: j,
					maxWidth: I,
					navBar: k,
					redditStyle: L,
					sidebar: P,
					sidebars: M,
					trendingUnit: N,
					subredditId: T
				} = e, w = N ? "28px" : "0", F = j ? {
					marginRight: `${a.p}px`,
					marginTop: w
				} : {
					marginLeft: `${a.p}px`,
					marginTop: w
				}, R = P && s.a.createElement("div", {
					className: Object(d.a)(E.a.sidebar, C ? E.a["m-collectionLayout"] : E.a.defaultLayout),
					style: F
				}, P), B = s.a.createElement(o.a, {
					hideOnlyChildMargin: S,
					className: g,
					disableFullscreen: y,
					fitPageToContent: x,
					forcedLayout: O,
					isCollectionLayout: C
				}, h, n && s.a.createElement(_, {
					subredditName: n
				}), p);
				let V;
				V = M ? s.a.createElement(s.a.Fragment, null, M[0], B, M[1]) : j ? s.a.createElement(s.a.Fragment, null, R, B) : s.a.createElement(s.a.Fragment, null, B, R);
				const A = y ? `${I||l.a+2*a.l}px` : "100%",
					H = Object(r.useContext)(u.a);
				return s.a.createElement(v.a, {
					subredditId: T
				}, s.a.createElement("div", {
					className: Object(d.a)(E.a.outerContainer, c.i, m, {
						[E.a.outerContainerExp]: H
					}),
					ref: b
				}, s.a.createElement(i.a, {
					className: c.h,
					redditStyle: L,
					backgroundColor: t
				}), s.a.createElement("div", {
					className: E.a.innerContainer
				}, k, f, (e => e.hero ? s.a.createElement(s.a.Fragment, null, e.hero) : null)(e), s.a.createElement("div", {
					style: {
						maxWidth: A
					}
				}, N), s.a.createElement("div", {
					className: E.a.body,
					style: {
						maxWidth: A
					}
				}, V))))
			}
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
				l = n("./src/lib/extractQueryParams/index.ts"),
				u = n("./src/lib/makeListingKey/index.ts"),
				m = n("./src/reddit/actions/pages/modListing/index.ts"),
				b = n("./src/reddit/components/EmptySubreddit.tsx"),
				p = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				h = n("./src/reddit/components/JumpToContent/index.tsx"),
				g = n("./src/reddit/components/ListingPostList/index.tsx"),
				f = n("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				y = n("./node_modules/fbt/lib/FbtPublic.js"),
				x = n("./src/higherOrderComponents/asModal/index.tsx"),
				_ = n("./src/reddit/actions/modal.ts"),
				v = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				O = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				E = n("./src/reddit/controls/TextButton/index.tsx"),
				S = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				C = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				j = n("./src/reddit/selectors/activeModalId.ts"),
				I = n("./src/reddit/selectors/modQueue.ts"),
				k = n("./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less"),
				L = n.n(k);
			const {
				fbt: P
			} = n("./node_modules/fbt/lib/FbtPublic.js"), M = Object(x.a)(e => o.a.createElement(v.e, {
				className: L.a.modalBody
			}, o.a.createElement(v.i, null, o.a.createElement(C.a, null, o.a.createElement(v.q, {
				className: L.a.modalTitle
			}, o.a.createElement(S.a, {
				className: L.a.modIcon
			}), P._("r/Mod", null, {
				hk: "2a9ICx"
			})), o.a.createElement(E.a, {
				onClick: e.onCloseModal
			}, o.a.createElement(v.b, null)))), o.a.createElement(v.l, {
				className: L.a.modalMain
			}, o.a.createElement("div", {
				className: L.a.modalDescription
			}, P._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), o.a.createElement(O.b, {
				isSidebar: !1,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			})))), N = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
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
			})), T = Object(a.c)({
				isModalOpen: Object(j.b)("MOD_LISTING_FEED_DETAILS_MODAL_ID"),
				moderatedCommunitiesIds: I.h
			});
			var w = Object(d.b)(T, (e, t) => {
					let {} = t;
					return {
						toggleModal: () => e(Object(_.i)("MOD_LISTING_FEED_DETAILS_MODAL_ID"))
					}
				})(e => {
					const {
						isModalOpen: t,
						moderatedCommunitiesIds: n,
						toggleModal: r
					} = e;
					return n ? o.a.createElement(o.a.Fragment, null, o.a.createElement(N, {
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
				B = n("./src/reddit/contexts/PageLayer/index.tsx"),
				V = n("./src/reddit/controls/Button/index.tsx");
			const A = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				H = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				D = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				});
			var K = n("./src/reddit/routes/modListing/index.ts");
			const q = e => e.modListingPage.filteredSubreddits.api.pending;
			var G = n("./src/reddit/constants/keycodes.ts"),
				U = n("./src/reddit/layout/row/Inline/index.tsx"),
				J = n("./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less"),
				Q = n.n(J);
			const Y = Object(a.c)({
				apiError: e => e.modListingPage.filteredSubreddits.api.error,
				isApiPending: q
			});
			class W extends o.a.Component {
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
						this.canSubmitInput() && (this.props.sendEvent(A()), this.props.hide(this.state.subredditInput), this.clearSubredditInput())
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
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(U.a, null, o.a.createElement("input", {
						className: Q.a.input,
						onChange: this.onChange,
						onKeyPress: this.onKeyPress,
						placeholder: y.fbt._("r/community", null, {
							hk: "4ceDB9"
						}),
						value: this.state.subredditInput
					}), o.a.createElement(V.l, {
						"aria-label": y.fbt._("Hide", null, {
							hk: "1BnFmX"
						}),
						className: Q.a.hideButton,
						disabled: !this.canSubmitInput(),
						onClick: this.submitInput
					}, y.fbt._("Hide", null, {
						hk: "1BnFmX"
					}))), e.apiError && e.apiError.explanation && o.a.createElement("div", {
						className: Q.a.errorText
					}, e.apiError.explanation))
				}
			}
			var X = Object(d.b)(Y, e => ({
					hide: t => e(Object(m.hideSubreddit)(t))
				}))(Object(R.c)(W)),
				z = n("./src/lib/lessComponent.tsx"),
				Z = n("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = n("./src/reddit/icons/fonts/Clear/index.tsx"),
				ee = n("./src/reddit/selectors/profile.ts"),
				te = n("./src/reddit/selectors/subreddit.ts"),
				ne = n("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less"),
				re = n.n(ne);
			const se = z.a.wrapped(Z.b, "SubredditIcon", re.a),
				ie = Object(a.c)({
					isApiPending: q,
					subredditOrProfile: (e, t) => {
						const n = Object(te.C)(e, {
							subredditName: t.subredditName
						});
						if (!n) {
							const n = (e => e.startsWith(c.qc) ? e.slice(2) : e)(t.subredditName);
							return n && Object(ee.k)(e, {
								profileName: n
							}) || null
						}
						return n
					}
				});
			class oe extends o.a.Component {
				constructor() {
					super(...arguments), this.onClickUnhideSubreddit = e => {
						e.stopPropagation(), e.preventDefault(), this.props.subredditOrProfile && (this.props.sendEvent(H()), this.props.unhide(this.props.subredditName))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.subredditOrProfile ? o.a.createElement(O.a, {
						className: re.a.row,
						to: e.subredditOrProfile.url
					}, o.a.createElement(se, {
						subredditOrProfile: e.subredditOrProfile
					}), o.a.createElement("span", {
						className: re.a.label
					}, e.subredditOrProfile.displayText), !e.isApiPending && o.a.createElement("button", {
						"aria-label": y.fbt._("Unhide", null, {
							hk: "2sCv0O"
						}),
						className: re.a.unhideButton,
						onClick: this.onClickUnhideSubreddit
					}, o.a.createElement($.a, null))) : null
				}
			}
			var de = Object(d.b)(ie, e => ({
					unhide: t => e(Object(m.unhideSubreddit)(t))
				}))(Object(R.c)(oe)),
				ae = n("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less"),
				ce = n.n(ae);
			const {
				fbt: le
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ue = e => {
					let {
						hiddenSubredditsNames: t
					} = e;
					const n = t.map(e => o.a.createElement(de, {
						key: e,
						subredditName: e
					}));
					return o.a.createElement(o.a.Fragment, null, t.length ? o.a.createElement("div", {
						className: ce.a.rows
					}, n) : o.a.createElement("div", {
						className: ce.a.noRows
					}, le._("Viewing all communities", null, {
						hk: "4p9SL8"
					})))
				},
				me = n("./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less"),
				be = n.n(me);
			const {
				fbt: pe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), he = Object(B.u)({
				filtered: e => !!e && Object(K.d)(e.url)
			}), ge = Object(a.c)({
				hiddenSubredditsNames: e => e.modListingPage.filteredSubreddits.names
			});
			class fe extends o.a.Component {
				constructor() {
					super(...arguments), this.onToggleFiltered = () => {
						this.props.sendEvent(D(this.props.filtered)), this.props.toggleFiltered()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement("div", {
						className: be.a.container
					}, o.a.createElement("div", {
						className: be.a.hideCommunitiesHeader
					}, pe._("Hide communities", null, {
						hk: "15OtHo"
					})), o.a.createElement(V.r, {
						className: be.a.tertiaryButton,
						onClick: this.onToggleFiltered
					}, e.filtered ? pe._("Go to unfiltered r/Mods", null, {
						hk: "2RGhxF"
					}) : pe._("Go to filtered r/Mod", null, {
						hk: "YdVw7"
					})), e.filtered && o.a.createElement("div", {
						className: be.a.inputContainer
					}, o.a.createElement(X, null), o.a.createElement(ue, {
						hiddenSubredditsNames: e.hiddenSubredditsNames
					})))
				}
			}
			var ye = he(Object(d.b)(ge, (e, t) => {
					let {
						filtered: n
					} = t;
					return {
						toggleFiltered: () => e(Object(F.b)(n ? K.a : K.b))
					}
				})(Object(R.c)(fe))),
				xe = n("./src/reddit/components/SidebarContainer/index.tsx"),
				_e = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				ve = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx");
			var Oe = () => o.a.createElement(xe.a, null, o.a.createElement(ve.a, {
					title: y.fbt._("Feed details", null, {
						hk: "3JlrpB"
					})
				}, o.a.createElement(w, null), o.a.createElement(ye, null)), o.a.createElement(_e.a, null)),
				Ee = n("./src/reddit/constants/page.ts"),
				Se = n("./src/reddit/constants/parameters.ts"),
				Ce = n("./src/reddit/helpers/trackers/screenview.ts"),
				je = n("./src/reddit/layout/page/Listing/index.tsx"),
				Ie = n("./src/reddit/selectors/moderatorPermissions.ts");
			const ke = Object(a.a)((e, t) => {
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
					return Object(K.d)(n.path)
				}, Ie.k, Ie.d, (e, t, n, r, i) => {
					const o = s()([...Object(l.a)(e)]),
						d = Se.N in o && o[Se.N].toUpperCase(),
						a = "string" == typeof d && d in c.oc ? c.oc[d] : c.pc,
						m = n ? Ee.f : Ee.e;
					return {
						filtered: n,
						isModerator: r,
						isModeratorWithPostPerms: i,
						listingKey: Object(u.a)(m, t, o),
						listingName: m,
						sort: t,
						timeSort: a
					}
				}),
				Le = Object(d.b)(ke, (e, t) => ({
					onLoadMorePosts: () => e(m.moreModListingRequested({
						sort: t.match.params.sort
					}))
				}));
			class Pe extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onViewed = (e, t) => Object(Ce.f)({
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
					const e = this.props.filtered ? K.b : K.a;
					return o.a.createElement("div", null, this.props.isModeratorWithPostPerms ? o.a.createElement(je.a, {
						className: this.props.className,
						fitPageToContent: !0,
						content: o.a.createElement(o.a.Fragment, null, o.a.createElement(p.a, {
							baseUrl: e,
							sort: this.props.sort,
							timeSort: this.props.timeSort
						}), o.a.createElement(h.a, null), o.a.createElement(g.a, {
							listingKey: this.props.listingKey,
							listingName: this.props.listingName,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderEmptySubreddit,
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: o.a.createElement(Oe, null)
					}) : o.a.createElement(f.a, {
						isModerator: this.props.isModerator
					}))
				}
			}
			t.default = Le(Pe)
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
				l = n("./src/reddit/constants/postLayout.ts"),
				u = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts");
			const m = Object(r.a)({
				resolved: {},
				chunkName: () => "NewCommunityProgress",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e(2), n.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), n.e("NewCommunityProgress")]).then(n.bind(null, "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx")),
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
					h = Object(o.e)(u.a),
					g = h !== c.Ve.NewModule;
				return (null === (s = null == p ? void 0 : p.cards) || void 0 === s ? void 0 : s.length) > 0 && g ? i.a.createElement(m, {
					closeModuleOnMount: !!t && t !== l.g.Large,
					subredditId: n,
					progressModule: p
				}) : t !== l.g.Large ? null : (null == b ? void 0 : b.isEligible) && !(null == b ? void 0 : b.response) && (!h || h && r > 100) ? i.a.createElement(a.a, {
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
						experimentEligibilitySelector: i.Q,
						experimentName: r.vd
					});
					return !(!t || Object(r.tg)(t))
				},
				d = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: i.Q,
						experimentName: r.vd
					}) === r.Vd.ListingEnabled
				}
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => Object(s.c)(e, {
				experimentName: r.Me,
				experimentEligibilitySelector: s.a
			}) === r.Ue.Enabled
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return a
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "d", (function() {
				return v
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
				o = n("./src/reddit/selectors/subreddit.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const a = (e, t) => {
					const n = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (n) {
						const t = Object(o.Y)(e, {
							subredditId: n
						});
						return t && t.displayText || ""
					}
					return ""
				},
				c = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				u = [],
				m = Object(r.a)((e, t) => {
					const n = b(e, t);
					if (!n) return u;
					const r = Object(o.cb)(e, {
						subredditName: n.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : u
				}),
				b = (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(o.Y)(e, {
						subredditId: n
					}) : null
				},
				p = (e, t, n, r, s) => {
					const o = s.find(e => e <= t) || -1,
						d = s.find(e => e > t) || 1 / 0;
					return t !== d && t !== o && (!(o + n > t) && (!(t + n > d) && !((e, t, n) => {
						const r = n[t - 1],
							s = n[t],
							o = s && Object(i.G)(e, {
								postId: r
							}) || null,
							d = s && Object(i.G)(e, {
								postId: s
							}) || null;
						return o && o.isSponsored || d && d.isSponsored
					})(e, t, r)))
				},
				h = [3],
				g = Object(r.a)((e, t) => {
					let {
						existingDUPositions: n,
						listingProps: r
					} = t;
					const s = n.slice().sort();
					let o = -1;
					const d = Object(i.z)(e, {
							listingKey: r.listingKey
						}),
						a = [];
					return h.forEach(t => {
						let n = o + t;
						if (!(n >= d.length)) {
							for (; n < d.length && !p(e, n, t, d, s);) n += 1;
							n < d.length && (a.push(n), o = n)
						}
					}), a
				}),
				f = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				y = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				x = e => e.focusedVerticals.category,
				_ = e => e.focusedVerticals.lastLoadedEnv,
				v = e => {
					const t = Object(d.P)(e),
						n = s.d.geoSubredditRecommendationDULoggedIn(e),
						r = s.d.geoSubredditRecommendationDULoggedOut(e);
					return t && n || !t && r
				}
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"25e33b051f29"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing.d57bb649b65acdf116a9.js.map