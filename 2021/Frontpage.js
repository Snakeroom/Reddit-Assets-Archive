// https://www.redditstatic.com/desktop2x/Frontpage.e49bbfa63eb50ffc3c75.js
// Retrieved at 7/7/2021, 5:30:04 PM by Reddit Dataminer v1.0.0
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
							n = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(r) {
							var o = r.element,
								i = a(o),
								c = this._rootContainsTarget(o),
								d = r.entry,
								l = t && c && this._computeTargetAndRootIntersection(o, n),
								u = r.entry = new s({
									time: e.performance && performance.now && performance.now(),
									target: o,
									boundingClientRect: i,
									rootBounds: n,
									intersectionRect: l
								});
							d ? t && c ? this._hasCrossedThreshold(d, u) && this._queuedEntries.push(u) : d && d.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, r.prototype._computeTargetAndRootIntersection = function(n, s) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var r, o, i, c, l, u, m, p, b = a(n), h = d(n), g = !1; !g;) {
								var f = null,
									y = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == y.display) return;
								if (h == this.root || h == t ? (g = !0, f = s) : h != t.body && h != t.documentElement && "visible" != y.overflow && (f = a(h)), f && (r = f, o = b, i = void 0, c = void 0, l = void 0, u = void 0, m = void 0, p = void 0, i = Math.max(r.top, o.top), c = Math.min(r.bottom, o.bottom), l = Math.max(r.left, o.left), u = Math.min(r.right, o.right), p = c - i, !(b = (m = u - l) >= 0 && p >= 0 && {
										top: i,
										bottom: c,
										left: l,
										right: u,
										width: m,
										height: p
									}))) break;
								h = d(h)
							}
							return b
						}
					}, r.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
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
								var o = this.thresholds[r];
								if (o == n || o == s || o < n != o < s) return !0
							}
					}, r.prototype._rootIsInDom = function() {
						return !this.root || c(t, this.root)
					}, r.prototype._rootContainsTarget = function(e) {
						return c(this.root || t, e)
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
					var n, s, r, o = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), s = this.THROTTLE_TIMEOUT, r = null, function() {
						r || (r = setTimeout((function() {
							n(), r = null
						}), s))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function o(e, t, n, s) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, n, s || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
				}

				function i(e, t, n, s) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, n, s || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
				}

				function a(e) {
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

				function c(e, t) {
					for (var n = t; n;) {
						if (n == e) return !0;
						n = d(n)
					}
					return !1
				}

				function d(e) {
					var t = e.parentNode;
					return t && 11 == t.nodeType && t.host ? t.host : t
				}
			}(window, document)
		},
		"./node_modules/lodash/_arraySampleSize.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/_copyArray.js"),
				o = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, t) {
				return o(r(e), s(t, 0, e.length))
			}
		},
		"./node_modules/lodash/_arrayShuffle.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_copyArray.js"),
				r = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return r(s(e))
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var n = Math.floor,
				s = Math.random;
			e.exports = function(e, t) {
				return e + n(s() * (t - e + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/_shuffleSelf.js"),
				o = n("./node_modules/lodash/values.js");
			e.exports = function(e, t) {
				var n = o(e);
				return r(n, s(t, 0, n.length))
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_shuffleSelf.js"),
				r = n("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return s(r(e))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var n = -1,
					r = e.length,
					o = r - 1;
				for (t = void 0 === t ? r : t; ++n < t;) {
					var i = s(n, o),
						a = e[i];
					e[i] = e[n], e[n] = a
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/random.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRandom.js"),
				r = n("./node_modules/lodash/_isIterateeCall.js"),
				o = n("./node_modules/lodash/toFinite.js"),
				i = parseFloat,
				a = Math.min,
				c = Math.random;
			e.exports = function(e, t, n) {
				if (n && "boolean" != typeof n && r(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = o(e), void 0 === t ? (t = e, e = 0) : t = o(t)), e > t) {
					var d = e;
					e = t, t = d
				}
				if (n || e % 1 || t % 1) {
					var l = c();
					return a(e + l * (t - e + i("1e-" + ((l + "").length - 1))), t)
				}
				return s(e, t)
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arraySampleSize.js"),
				r = n("./node_modules/lodash/_baseSampleSize.js"),
				o = n("./node_modules/lodash/isArray.js"),
				i = n("./node_modules/lodash/_isIterateeCall.js"),
				a = n("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, n) {
				return t = (n ? i(e, t, n) : void 0 === t) ? 1 : a(t), (o(e) ? s : r)(e, t)
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayShuffle.js"),
				r = n("./node_modules/lodash/_baseShuffle.js"),
				o = n("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (o(e) ? s : r)(e)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseTimes.js"),
				r = n("./node_modules/lodash/_castFunction.js"),
				o = n("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				a = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > i) return [];
				var n = a,
					d = c(e, a);
				t = r(t), e -= a;
				for (var l = s(d, t); ++n < e;) t(n);
				return l
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, n, s) {
				var r = n ? n.call(s, e, t) : void 0;
				if (void 0 !== r) return !!r;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var o = Object.keys(e),
					i = Object.keys(t);
				if (o.length !== i.length) return !1;
				for (var a = Object.prototype.hasOwnProperty.bind(t), c = 0; c < o.length; c++) {
					var d = o[c];
					if (!a(d)) return !1;
					var l = e[d],
						u = t[d];
					if (!1 === (r = n ? n.call(s, l, u, d) : void 0) || void 0 === r && l !== u) return !1
				}
				return !0
			}
		},
		"./src/reddit/actions/frontpage/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "frontpagePending", (function() {
				return ne
			})), n.d(t, "frontpageLoaded", (function() {
				return se
			})), n.d(t, "frontpageFailed", (function() {
				return re
			})), n.d(t, "frontpageDataRequested", (function() {
				return oe
			})), n.d(t, "frontpageRequestedHelper", (function() {
				return ie
			})), n.d(t, "frontpageRequested", (function() {
				return ce
			})), n.d(t, "frontpageReloaded", (function() {
				return le
			})), n.d(t, "morePostsPending", (function() {
				return ue
			})), n.d(t, "morePostsLoaded", (function() {
				return me
			})), n.d(t, "morePostsFailed", (function() {
				return pe
			})), n.d(t, "morePostsRequested", (function() {
				return be
			})), n.d(t, "refreshFeed", (function() {
				return he
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/pick.js"),
				o = n.n(r),
				i = n("./src/lib/getParsedUserAgent/index.ts"),
				a = n("./src/reddit/actions/focusedVerticals/index.ts"),
				c = n("./src/lib/base64/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/makeGqlRequest/index.ts"),
				u = n("./src/lib/performanceTimings/index.tsx"),
				m = n("./src/reddit/constants/graphql.ts"),
				p = n("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				b = n("./src/lib/env/index.ts"),
				h = n("./src/lib/sentry/index.ts"),
				g = n("./src/reddit/models/Live/index.ts"),
				f = n("./src/reddit/models/Post/index.ts"),
				y = n("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				_ = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				x = n("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				v = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				k = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				O = n("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				j = n("./src/reddit/selectors/meta.ts"),
				E = n("./src/reddit/selectors/platform.ts"),
				N = n("./src/reddit/selectors/user.ts"),
				C = n("./src/redditGQL/operations/Frontpage.json");
			const S = (e, t) => {
					var n;
					const {
						after: s,
						dist: r,
						isMobile: o,
						layout: i,
						limit: a,
						sort: l,
						t: u
					} = t, b = Object(N.R)(e) || Object(N.K)(e), h = Object(E.o)(e), g = Object.values(d.y).map(e => e), f = Object(j.b)(e), y = g.includes(f) ? f : d.y.Everywhere, _ = {
						adContext: {
							layout: i ? i.toUpperCase() : m.a.Card,
							reddaid: e.user.reddaid,
							distance: r
						},
						forceGeopopular: !0,
						includeCommunityDUs: !1,
						includeFeaturedAnnouncements: !0,
						includeLiveEvents: !0,
						includeIdentity: b && !(null === (n = e.user.account) || void 0 === n ? void 0 : n.totalKarma),
						includePostRecommendations: !1,
						includeSubredditQuestions: b,
						recentPostIds: e.posts.recent,
						region: y
					};
					return l && (_.sort = l.toUpperCase()), u && (_.range = u.toUpperCase()), o ? _.pageSize = Object(p.a)(i) : a && (_.pageSize = a), h && h.ad && (_.forceAds = {
						ad: h.ad
					}), s && (_.after = Object(c.a)(s)), _
				},
				P = async (e, t, n, s) => {
					const r = Date.now(),
						o = await ((e, t) => Object(l.a)(e, {
							...C,
							variables: t
						}, {
							traceRequestName: "get_frontpage"
						}))(e, t),
						i = Date.now();
					let a;
					try {
						const e = Date.now();
						a = (({
							trendingSubreddits: e = [],
							identity: t,
							home: n,
							featuredAnnouncements: s,
							recentPosts: r = []
						}) => {
							const o = [],
								i = [];
							let a;
							const c = {
									postIds: [],
									postInstances: {},
									posts: {},
									postFlair: {},
									profiles: {},
									subreddits: {}
								},
								d = e => {
									if (c.posts[e.id]) return e.id;
									const t = Object(_.e)(e);
									c.posts[t.id] = t;
									const {
										crosspostRoot: n
									} = e;
									n && n.type === f.a.Post && n.postInfo && d(n.postInfo);
									let s = t.id;
									if (Object(f.l)(e)) c.profiles[e.profile.id] || (c.profiles[e.profile.id] = Object(v.a)(e.profile));
									else if (Object(f.m)(e)) c.subreddits[e.subreddit.id] || (c.subreddits[e.subreddit.id] = Object(k.a)(e.subreddit)), c.postFlair[e.subreddit.id] || (c.postFlair[e.subreddit.id] = Object(y.a)(e.subreddit));
									else if (Object(f.h)(e)) {
										const n = Object(_.b)(e);
										if (!n) return null;
										s = n, c.posts[n] = {
											...t,
											id: n,
											permalink: `${t.permalink}?instanceId=${encodeURIComponent(n)}`
										}, c.posts[t.id] || (c.posts[t.id] = {
											...t,
											events: []
										}), c.postInstances[e.id] || (c.postInstances[e.id] = []), c.postInstances[e.id].push(n)
									}
									return s
								};
							for (const p of e) {
								const e = Object(k.a)(p);
								c.subreddits[e.id] = e, o.push(e.id)
							}
							for (const {
									node: p
								} of n.elements.edges)
								if (Object(f.k)(p)) {
									const e = d(p);
									e && c.postIds.push(e)
								} else if (Object(g.c)(p) && !a) a = p;
							else {
								const e = `Received unhandled element type when processing frontpage data: "${p.__typename}"`;
								Object(b.b)() || console.warn(e), h.c.captureMessage(e)
							}
							for (const p of r) {
								if (!p) continue;
								const e = d(p);
								e && i.push(e)
							}
							const l = c.postIds.length - 1,
								u = l >= 0 ? c.postIds[l] : "",
								m = n.elements.dist;
							return {
								...c,
								account: t && Object(O.a)(t) || null,
								featuredLiveThread: a,
								announcements: s,
								preferences: t && t.preferences && Object(x.a)(t.preferences, t.interactions) || null,
								...0 !== o.length && {
									trendingSubredditIds: o
								},
								...0 !== i.length && {
									recentPostIds: i
								},
								token: u,
								...null !== m && {
									dist: m
								}
							}
						})(o.body.data);
						const t = Date.now(),
							c = [{
								duration: i - r,
								logKeyType: u.a.gqlFetchTiming
							}, {
								duration: t - e,
								logKeyType: u.a.gqlNormalizationTiming
							}];
						Object(u.h)({
							name: d.q.FRONTPAGE,
							isLoggedIn: n,
							metrics: c,
							statsdPathsForExperiments: s
						})
					} catch (c) {}
					return {
						...o,
						body: a
					}
				};
			var w = n("./src/lib/pageTitle.ts"),
				T = n("./src/reddit/actions/login.ts"),
				I = n("./src/reddit/actions/platform.ts"),
				A = n("./src/reddit/actions/toaster.ts"),
				L = n("./src/reddit/constants/page.ts"),
				D = n("./src/reddit/constants/parameters.ts"),
				F = n("./src/reddit/constants/postLayout.ts"),
				R = n("./src/reddit/contexts/PageLayer/index.tsx"),
				B = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				U = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				M = n("./src/reddit/models/Toast/index.ts"),
				q = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				W = n("./src/reddit/selectors/frontpage.ts"),
				V = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				G = n("./src/reddit/selectors/runTimeEnvVars.ts"),
				K = n("./src/lib/makeActionCreator/index.ts"),
				H = n("./src/lib/makeListingKey/index.ts"),
				Q = n("./src/reddit/actions/ads/index.ts"),
				z = n("./src/reddit/helpers/chooseVariant/index.ts"),
				J = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Z = n("./src/reddit/actions/seo/linksModule.ts"),
				X = n("./src/reddit/selectors/seo/linksModule.ts"),
				Y = n("./src/reddit/actions/publicAccessNetwork/api.ts"),
				$ = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				ee = n("./src/reddit/helpers/filterListingResponse/index.ts"),
				te = n("./src/reddit/actions/frontpage/constants.ts");
			const ne = Object(K.a)(te.c),
				se = Object(K.a)(te.b),
				re = Object(K.a)(te.a),
				oe = (e, t) => async (n, r, o) => {
					var a, c;
					const d = r();
					if (d.listings.postOrder.api.pending[e]) return;
					const l = F.e[Object(R.O)(d, {})];
					t.isMobile = Object(i.e)(d.meta.userAgent), t.recentPostIds = d.posts.recent, t.layout = l, t.useMockData = !!d.platform.currentPage && (!!d.platform.currentPage.queryParams.useMockData && Object(G.b)(d)), n(ne({
						key: e
					})); {
						const e = d.platform.currentPage,
							n = e && e.url;
						n && (t.clickUrl = n)
					}
					const m = null === (c = null === (a = Object(E.b)(d)) || void 0 === a ? void 0 : a.routeMatch) || void 0 === c ? void 0 : c.route.chunk,
						p = Object(N.K)(d),
						b = await Object(u.i)(() => P(o.gqlContext(), S(d, t), Object(N.R)(d), t.statsdPathsForExperiments), {
							name: "fetchFrontpageData",
							isLoggedIn: p,
							page: m
						});
					n(Object(I.m)(b.status));
					const h = `error-${e}`;
					if (b.ok) {
						const t = b.body;
						n(se({
							key: e,
							meta: d.meta,
							...t
						})), n(A.g(h)), n(Object(Q.b)(J.a.FRONTPAGE))
					} else n(re({
						error: b.error,
						key: e,
						...b.body
					})), n(A.f({
						id: h,
						kind: M.b.Error,
						text: s.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "36ypKx"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: oe(e, t)
					}))
				}, ie = (e, t) => async (n, s) => {
					const r = s(),
						i = Object(W.a)(r),
						{
							sort: a = i
						} = e.params,
						c = Object(H.a)(L.a, a, e.queryParams),
						l = r.listings.postOrder.ids[c],
						u = r.listings.postOrder.api.error[c],
						m = r.listings.postOrder.api.pending[c],
						p = D.x in e.queryParams && e.queryParams[D.x].toUpperCase() || "",
						b = p in d.bc && d.bc[p];
					if (m || l && !u && !t) return void(l && (n(I.l({
						title: w.c()
					})), r.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						n(Object(Q.b)(J.a.FRONTPAGE))
					})));
					const h = Object(B.a)(r),
						g = Object(B.b)(h),
						f = [Object(B.c)(h)];
					await n(oe(c, {
						...o()(e.queryParams, D.l),
						...o()(e.queryParams, D.k),
						limit: g,
						sort: a,
						statsdPathsForExperiments: f,
						t: Object(U.a)(a, b)
					})), n(I.l({
						title: w.c()
					})), Object(z.c)(r, {
						experimentEligibilitySelector: z.a,
						experimentName: "redesign_aa"
					});
					const y = Object(q.a)(r, {});
					Object(q.e)(y) && n(Object(T.j)())
				}, ae = () => async (e, t) => {
					var n, s;
					const r = t();
					if (Object(X.a)(r)) return;
					const o = null === (s = null === (n = Object(E.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
						i = Object(N.K)(r);
					return Object(u.i)(() => e(Object(Z.d)()), {
						name: "frontpageLinksRequested",
						page: o,
						isLoggedIn: i
					})
				}, ce = (e, t) => async n => {
					await Promise.all([n(Object(a.b)()), n(ie(e, t)), n(ae()), n(Object(Y.c)($.R))])
				}, de = Object(K.a)(te.d), le = e => async (t, n) => {
					const s = n(),
						r = s.platform.currentPage.routeMatch.match;
					Object(V.o)(s) || Object(V.u)(s) || (e || t(de()), await t(ce(r, !0)))
				}, ue = Object(K.a)(te.g), me = Object(K.a)(te.f), pe = Object(K.a)(te.e), be = e => async (t, n, {
					gqlContext: s
				}) => {
					const r = n(),
						a = Object(W.a)(r),
						{
							sort: c = a
						} = e,
						l = r.platform.currentPage ? r.platform.currentPage.queryParams : {},
						u = Object(H.a)(L.a, c, l),
						m = r.listings.postOrder.loadMore[u],
						p = l[D.x] ? l[D.x].toUpperCase() : "",
						b = p in d.bc && d.bc[p];
					if (m) {
						const e = r.listings.postOrder.api.pending[u],
							n = r.listings.postOrder.fetchedTokens,
							a = !(!n[u] || !n[u][m.token]);
						if (!e && !a) {
							t(ue({
								key: u,
								fetchedToken: m.token
							}));
							const e = !!r.platform.currentPage && !!r.platform.currentPage.queryParams.useMockData,
								n = Object(B.a)(r),
								a = F.a,
								d = [Object(B.c)(n)],
								p = {
									after: m.token,
									dist: m.dist,
									...o()(l, D.l),
									isMobile: Object(i.e)(r.meta.userAgent),
									limit: a,
									sort: c,
									t: Object(U.a)(c, b),
									layout: F.e[Object(R.O)(r, {})],
									useMockData: e
								}; {
								const e = r.platform.lastPage,
									t = e && e.url;
								t && (p.clickUrl = t)
							}
							const h = () => P(s(), S(r, p), Object(N.R)(r), d),
								g = await h(),
								f = {
									...g.body,
									...Object(ee.a)(r, u, g.body)
								};
							g.ok ? t(me({
								key: u,
								fetchedToken: m.token,
								meta: r.meta,
								...f
							})) : t(pe({
								key: u,
								error: g.error,
								fetchedToken: m.token,
								...f
							}))
						}
					}
				}, he = e => async (t, n) => {
					const s = n(),
						r = Object(W.a)(s),
						{
							sort: o = r
						} = e,
						i = s.platform.currentPage ? s.platform.currentPage.queryParams : {},
						a = Object(H.a)(L.a, o, i),
						c = i[D.x] ? i[D.x].toUpperCase() : "",
						l = c in d.bc && d.bc[c],
						u = Object(B.a)(s),
						m = Object(B.b)(u);
					await t(oe(a, {
						limit: m,
						sort: o,
						t: Object(U.a)(o, l)
					}))
				}
		},
		"./src/reddit/actions/subreddit/topSubreddits.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/subreddit/constants.ts"),
				o = n("./src/reddit/constants/subredditLeaderboard.ts"),
				i = n("./src/reddit/endpoints/subreddit/local.ts"),
				a = n("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				c = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const d = Object(s.a)(r.m),
				l = Object(s.a)(r.l),
				u = Object(s.a)(r.k),
				m = Object(s.a)(r.a),
				p = Object(s.a)(r.b),
				b = Object(s.a)(r.c),
				h = (e, t) => async (n, s, {
					gqlContext: r
				}) => {
					n(d());
					const h = t === o.l ? async function() {
						const t = await Object(i.a)(r(), e);
						if (!t.ok) {
							const e = t.error;
							return n(u({
								error: e
							})), null
						}
						const s = t.body,
							o = s && s.data && s.data.nearbySubreddits;
						return Object(c.a)(o)
					}: async function() {
						const t = await Object(a.a)(r(), e);
						if (!t.ok) {
							const e = t.error;
							return void n(u({
								error: e
							}))
						}
						const s = t.body,
							o = s && s.data && s.data.subredditLeaderboard;
						return Object(c.b)(o)
					}, g = await h();
					if (!g) return;
					const {
						pageInfo: f,
						rankings: y,
						subreddits: _
					} = g;
					n(m({
						subreddits: _
					})), n(p({
						categoryRankingsKey: t,
						rankings: y
					})), n(b({
						categoryRankingsKey: t,
						pageInfo: f
					})), n(l())
				}
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/ScrollChildFactory.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/LRUCache/index.ts");
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
				addListeners(e, ...t) {
					this.listenerMap[e] || (this.listenerMap[e] = []), this.listenerMap[e].push(...t)
				}
				removeListeners(e, ...t) {
					if (!this.listenerMap[e] || !this.listenerMap[e].length) return !1;
					const n = t.length,
						s = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !t.includes(e)), this.listenerMap[e].length - s === n
				}
				publish(e) {
					return !(!this.listenerMap[e] || !this.listenerMap[e].length) && (this.listenerMap[e].forEach(e => e()), !0)
				}
			}
			var a = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				c = n("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/async.tsx"),
				d = n("./src/reddit/constants/page.ts");
			const l = new o.a(50),
				u = e => {
					const {
						numInstance: t,
						layout: n,
						listingKey: s,
						listingPosition: o
					} = e, u = `focused-vertical-recommendation-${t}-${n}-${s}`;
					let m = l.get(u);
					if (m) return m;
					const p = new i;
					return m = {
						estHeight: a.d,
						id: `focused-vertical-recommendation-${t}-${n}-${s}`,
						trackOnEnteredViewport() {
							p.publish(a.b)
						},
						render: () => r.a.createElement(c.a, {
							listingPosition: o,
							numInstance: t,
							listingKey: s,
							listingName: d.b,
							pubsub: p
						})
					}, l.set(u, m), m
				}
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts").then(n.bind(null, "./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/CommunityDescWithPosts/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/CommunityDescWithPosts/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				a = n.n(i);
			class c extends r.a.Component {
				render() {
					return r.a.createElement("div", {
						className: Object(o.a)(a.a.heroContainer, this.props.className)
					}, r.a.createElement("div", {
						className: Object(o.a)(a.a.header, this.props.headerClassName)
					}, this.props.header), r.a.createElement("div", {
						className: Object(o.a)(this.props.hidePadding ? a.a.bodyHidePadding : a.a.body, this.props.bodyClassName)
					}, this.props.children))
				}
			}
			t.a = c
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, n) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FakeBannerAd/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/config.ts"),
				c = n("./src/reddit/components/FakeBannerAd/index.m.less"),
				d = n.n(c),
				l = n("./src/lib/lessComponent.tsx");
			const u = l.a.wrapped(e => i.a.createElement("div", {
					className: e.className,
					ref: e.bannerRef
				}, e.children), "BannerContainer", d.a),
				m = l.a.wrapped(e => i.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", d.a),
				p = "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
				b = .5;
			class h extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.bannerRef = i.a.createRef(), this.state = {
						sentOncePerRender: !1
					}, this.handleVisibilityChange = e => {
						if (!(e.intersectionRatio < b || this.state.sentOncePerRender)) {
							const e = this.bannerRef && this.bannerRef.current,
								t = e ? e.offsetWidth : null,
								n = e ? e.offsetHeight : null;
							this.props.trackSidebarHouseAdViewability(t, n), this.setState({
								sentOncePerRender: !0
							})
						}
					}
				}
				render() {
					const {
						href: e,
						img: t
					} = this.props, {
						sentOncePerRender: n
					} = this.state, o = n ? i.a.createElement(m, {
						src: a.a.assetPath + t
					}) : i.a.createElement(r.a, {
						onChange: this.handleVisibilityChange,
						threshold: b
					}, i.a.createElement(m, {
						src: a.a.assetPath + t
					}));
					return i.a.createElement(u, {
						bannerRef: this.bannerRef,
						className: p,
						"data-before-content": s.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, i.a.createElement("a", {
						href: a.a.redditUrl + e,
						target: "_blank",
						rel: "noopener noreferrer"
					}, o))
				}
			}
		},
		"./src/reddit/components/FeaturedLiveEntrypoint/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/selectors/live.ts");
			const c = Object(s.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointAnnouncementsCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("FeaturedLiveEntrypointAnnouncementsCarousel").then(n.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.tsx"
					}
				}),
				d = Object(s.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointAnnouncement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("FeaturedLiveEntrypointAnnouncement").then(n.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/LiveThread/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/LiveThread/index.tsx"
					}
				}),
				l = () => {
					const e = Object(i.e)(a.a, (e, t) => e && t && e[0].id === t[0].id || !1),
						t = Object(i.e)(a.b);
					return t ? o.a.createElement(d, {
						featuredLiveThread: t
					}) : e && e.length ? o.a.createElement(c, {
						announcements: e
					}) : null
				};
			t.a = l
		},
		"./src/reddit/components/FrontpageSidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/lodash/random.js"),
				r = n.n(s),
				o = n("./node_modules/lodash/shuffle.js"),
				i = n.n(o),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/reddit/actions/subreddit.ts"),
				p = n("./src/reddit/actions/subreddit/topSubreddits.ts"),
				b = n("./src/reddit/components/IdCard/async.tsx"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				g = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				f = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				y = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/components/PremiumCTA/index.m.less"),
				v = n.n(x);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class O extends c.a.Component {
				render() {
					const {
						className: e,
						onClickPremium: t
					} = this.props;
					return c.a.createElement(g.a, null, c.a.createElement(f.a, {
						className: e,
						contentOnly: !0
					}, c.a.createElement("div", {
						className: v.a.wrapper
					}, c.a.createElement("div", {
						className: v.a.contentWrapper
					}, c.a.createElement(_.a, {
						name: "premium",
						isFilled: !0,
						className: v.a.icon
					}), c.a.createElement("div", {
						className: v.a.content
					}, c.a.createElement("div", {
						className: v.a.title
					}, k._("Reddit Premium", null, {
						hk: "39JIKQ"
					})), c.a.createElement("div", {
						className: v.a.description
					}, k._("The best Reddit experience, with monthly Coins", null, {
						hk: "2n1ct3"
					})))), c.a.createElement(y.h, {
						isFullWidth: !0,
						onClick: t
					}, k._("Try Now", null, {
						hk: "2HeiOg"
					})))))
				}
			}
			var j = Object(d.b)(void 0, e => ({
					onClickPremium: () => e(Object(h.b)("/premium"))
				}))(O),
				E = n("./node_modules/fbt/lib/FbtPublic.js"),
				N = n("./src/lib/classNames/index.ts"),
				C = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				S = n("./src/reddit/controls/InternalLink/index.tsx"),
				P = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				w = n("./src/reddit/components/SEOSidebarLinks/index.m.less"),
				T = n.n(w);
			const I = ({
					to: e,
					title: t
				}) => c.a.createElement(C.a, {
					subredditName: t,
					tooltipPosition: ["right", "top"]
				}, c.a.createElement(S.a, {
					className: T.a.Link,
					to: e,
					title: t
				}, t)),
				A = ({
					title: e,
					isOpened: t,
					isExpanded: n,
					children: s,
					onToggle: r,
					onExpand: o
				}) => c.a.createElement("div", {
					className: Object(N.a)(T.a.Section, {
						[T.a.opened]: t,
						[T.a.expanded]: n
					})
				}, c.a.createElement("div", {
					className: T.a.SectionHeader,
					onClick: r
				}, c.a.createElement("div", {
					className: T.a.SectionTitle
				}, e), c.a.createElement(P.a, {
					className: T.a.SectionChevron
				})), c.a.createElement("div", {
					className: T.a.SectionBody
				}, c.a.createElement("div", {
					className: T.a.SectionContent
				}, s), c.a.createElement("div", {
					className: T.a.SectionFooter
				}, c.a.createElement(y.o, {
					className: T.a.SectionButton,
					onClick: o
				}, n ? E.fbt._("Less", null, {
					hk: "PF0lJ"
				}) : E.fbt._("See more", null, {
					hk: "439kAh"
				})))));
			class L extends c.a.Component {
				constructor() {
					super(...arguments), this.state = {
						openedSection: 0,
						isSectionExpanded: !1
					}, this.onToggle = e => {
						this.setState(({
							openedSection: t
						}) => t === e ? {
							openedSection: -1,
							isSectionExpanded: !1
						} : {
							openedSection: e,
							isSectionExpanded: !1
						})
					}, this.onExpand = () => {
						this.setState(({
							isSectionExpanded: e
						}) => ({
							isSectionExpanded: !e
						}))
					}, this.renderLink = ({
						url: e,
						title: t
					}) => c.a.createElement(I, {
						key: t,
						to: e,
						title: t
					}), this.renderSection = (e, t) => c.a.createElement(A, {
						key: e.title,
						title: e.title,
						isOpened: this.isOpened(t),
						isExpanded: this.isExpanded(t),
						onToggle: () => this.onToggle(t),
						onExpand: this.onExpand
					}, e.links.map(this.renderLink))
				}
				isOpened(e) {
					return this.state.openedSection === e
				}
				isExpanded(e) {
					return this.state.isSectionExpanded && this.isOpened(e)
				}
				render() {
					const {
						className: e,
						links: t
					} = this.props;
					if (t) return c.a.createElement(f.a, {
						className: Object(N.a)(T.a.Widget, e),
						contentOnly: !0
					}, t.map(this.renderSection))
				}
			}
			var D = L,
				F = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				R = n("./src/reddit/components/SidebarContainer/index.tsx"),
				B = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				U = n("./node_modules/lodash/sampleSize.js"),
				M = n.n(U),
				q = n("./node_modules/request-idle-callback/index.js"),
				W = n("./src/lib/constants/index.ts"),
				V = n("./src/reddit/components/SubredditIcon/index.tsx"),
				G = n("./src/reddit/constants/localStorage.ts"),
				K = n("./src/reddit/contexts/ApiContext.tsx"),
				H = n("./src/reddit/featureFlags/component.tsx"),
				Q = n("./src/reddit/helpers/localStorage/index.ts"),
				z = n("./src/reddit/helpers/name/index.ts"),
				J = n("./src/lib/makeApiRequest/index.ts"),
				Z = n("./src/lib/omitHeaders/index.ts"),
				X = n("./src/reddit/constants/headers.ts");
			const Y = e => Object(J.a)(Object(Z.a)(e, [X.a]), {
				endpoint: `${e.apiUrl}/api/multi/user/CommunityAdoptionBot/m/adoption_week/`,
				method: W.hb.GET,
				type: "json"
			});
			var $ = n("./src/reddit/components/SubredditAdoptionWidget/index.m.less"),
				ee = n.n($);
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ne = 3, se = 30 * W.ib, re = "SubredditAdoption";
			class oe extends c.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditNames: []
					}
				}
				async getSubredditForAdoption() {
					let e = oe.cachedData || Object(Q.y)(G.b.SUBREDDITS_FOR_ADOPTION_STORE) || null;
					if (!e || Date.now() - e.fetchedAt > se) {
						const t = await Y(this.props.apiContext());
						t.ok && (e = {
							subreddits: t.body.data.subreddits.map(e => e.name),
							fetchedAt: Date.now()
						}, Object(Q.yb)(G.b.SUBREDDITS_FOR_ADOPTION_STORE, e))
					}
					return oe.cachedData = e, e ? e.subreddits : []
				}
				componentDidMount() {
					Object(q.requestIdleCallback)(async () => {
						const e = await this.getSubredditForAdoption();
						this.setState({
							subredditNames: M()(e, ne)
						})
					})
				}
				render() {
					const {
						subredditNames: e
					} = this.state;
					return e.length ? c.a.createElement("div", {
						className: ee.a.container
					}, c.a.createElement("div", {
						className: ee.a.main
					}, c.a.createElement("div", {
						className: ee.a.title
					}, c.a.createElement(V.b, {
						className: ee.a.icon
					}), te._("International Subreddit Adoption Week", null, {
						hk: "487Ffc"
					})), c.a.createElement("div", {
						className: ee.a.description
					}, te._("{subreddits list} and more are looking for moderators!", [te._param("subreddits list", c.a.createElement("strong", null, e.map(z.c).join(", ") + (e.length > 1 ? "," : "")))], {
						hk: "2Tb946"
					}))), c.a.createElement(y.k, {
						className: ee.a.button,
						to: `/r/${re}?utm_source=reddit&utm_medium=fp_banner&utm_campaign=subreddit_adoption_week`
					}, te._("Go Now", null, {
						hk: "LCCmX"
					}))) : null
				}
			}
			oe.cachedData = null;
			var ie = Object(H.a)("srAdoptionWeek", Object(K.b)(oe)),
				ae = n("./src/reddit/components/TopSubredditsWidget/Container.tsx"),
				ce = n("./src/reddit/actions/post.ts"),
				de = n("./src/reddit/components/MiniPost/index.tsx"),
				le = n("./src/reddit/components/Widgets/Base/index.tsx");
			class ue extends c.a.Component {
				render() {
					return c.a.createElement("div", null, c.a.createElement(le.a, null, this.props.headerText), this.props.posts.map(e => c.a.createElement(de.a, {
						key: e.id,
						postId: e.id
					})))
				}
			}
			var me = ue,
				pe = n("./src/reddit/helpers/overlay/index.ts"),
				be = n("./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less"),
				he = n.n(be),
				ge = n("./src/lib/lessComponent.tsx");
			const fe = Object(d.b)(null, (e, t) => ({
					openLightbox: t => () => e(Object(pe.a)(t.permalink)),
					clearLinks: () => e(Object(ce.t)())
				})),
				ye = ge.a.button("ClearButton", he.a);
			class _e extends c.a.Component {
				render() {
					return c.a.createElement(le.b, null, c.a.createElement(me, {
						className: this.props.className,
						headerText: E.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: this.props.posts
					}), c.a.createElement(ye, {
						onClick: this.props.clearLinks
					}, E.fbt._("Clear", null, {
						hk: "1RMjjy"
					})))
				}
			}
			var xe = fe(_e),
				ve = n("./src/reddit/selectors/posts.ts");
			const ke = Object(u.c)({
				recentPosts: ve.O
			});
			var Oe = Object(d.b)(ke, (e, t) => ({
					openLightbox: t => () => e(Object(pe.a)(t.permalink))
				}))(({
					className: e,
					recentPosts: t
				}) => t && t.length ? c.a.createElement(g.a, null, c.a.createElement(xe, {
					className: e,
					headerText: E.fbt._("Recent posts", null, {
						hk: "1olaOT"
					}),
					posts: t
				})) : null),
				je = n("./src/config.ts"),
				Ee = n("./src/lib/env/index.ts"),
				Ne = n("./src/reddit/controls/Chip/index.tsx"),
				Ce = n("./src/reddit/helpers/trackers/widgets.ts"),
				Se = n("./src/reddit/hooks/useTracking.ts");
			const Pe = [{
				getName: () => E.fbt._("Fashion", null, {
					hk: "4tXmOZ"
				}),
				url: "fashion"
			}, {
				getName: () => E.fbt._("Movies", null, {
					hk: "42bzfq"
				}),
				url: "movie"
			}, {
				getName: () => E.fbt._("Television", null, {
					hk: "4CMqPm"
				}),
				url: "television"
			}, {
				getName: () => E.fbt._("Comedy", null, {
					hk: "1ehWvG"
				}),
				url: "comedy"
			}, {
				getName: () => E.fbt._("Books", null, {
					hk: "13uutx"
				}),
				url: "book"
			}, {
				getName: () => E.fbt._("Gaming", null, {
					hk: "2mozPB"
				}),
				url: "gaming"
			}, {
				getName: () => E.fbt._("Science", null, {
					hk: "4u0516"
				}),
				url: "science"
			}, {
				getName: () => E.fbt._("Animals and Pets", null, {
					hk: "3TIGi8"
				}),
				url: "animals_and_pets"
			}, {
				getName: () => E.fbt._("Nature", null, {
					hk: "WhmJu"
				}),
				url: "nature"
			}, {
				getName: () => E.fbt._("Travel", null, {
					hk: "3PHfih"
				}),
				url: "travel"
			}, {
				getName: () => E.fbt._("Sports", null, {
					hk: "3GJvo1"
				}),
				url: "sports"
			}, {
				getName: () => E.fbt._("Memes", null, {
					hk: "4lL42P"
				}),
				url: "internet_culture_and_memes"
			}, {
				getName: () => E.fbt._("Music", null, {
					hk: "15iqrr"
				}),
				url: "music"
			}, {
				getName: () => E.fbt._("Crafts and DIY", null, {
					hk: "1JGKiO"
				}),
				url: "crafts_and_diy"
			}, {
				getName: () => E.fbt._("Technology", null, {
					hk: "2eXPke"
				}),
				url: "technology"
			}, {
				getName: () => E.fbt._("Art", null, {
					hk: "3cl8al"
				}),
				url: "art"
			}, {
				getName: () => E.fbt._("Hobbies", null, {
					hk: "3uC7Vw"
				}),
				url: "hobby"
			}, {
				getName: () => E.fbt._("Gardening", null, {
					hk: "2Uozgr"
				}),
				url: "gardening"
			}, {
				getName: () => E.fbt._("Art Garfunkel", null, {
					hk: "l1iiQ"
				}),
				url: "art_garfunkel"
			}, {
				getName: () => E.fbt._("Tree Frogs", null, {
					hk: "KVS4d"
				}),
				url: "tree_frog"
			}, {
				getName: () => E.fbt._("Adventure Novels", null, {
					hk: "3vbZt6"
				}),
				url: "adventure_novel"
			}, {
				getName: () => E.fbt._("Learning and Education", null, {
					hk: "3wIdG"
				}),
				url: "learning_and_education"
			}, {
				getName: () => E.fbt._("Family", null, {
					hk: "1GgG8Z"
				}),
				url: "family"
			}, {
				getName: () => E.fbt._("Q&A", null, {
					hk: "4En8Hj"
				}),
				url: "qa"
			}, {
				getName: () => E.fbt._("Health", null, {
					hk: "RF6iN"
				}),
				url: "health"
			}, {
				getName: () => E.fbt._("Fitness", null, {
					hk: "JczBr"
				}),
				url: "fitness"
			}, {
				getName: () => E.fbt._("History", null, {
					hk: "2bULhT"
				}),
				url: "history"
			}, {
				getName: () => E.fbt._("Activism", null, {
					hk: "2PWJIy"
				}),
				url: "activism"
			}, {
				getName: () => E.fbt._("Cars", null, {
					hk: "4dnuOx"
				}),
				url: "cars_and_motor_vehicles"
			}, {
				getName: () => E.fbt._("Beauty and Makeup", null, {
					hk: "4ncOsg"
				}),
				url: "beauty_and_makeup"
			}, {
				getName: () => E.fbt._("Philosophy", null, {
					hk: "MNowu"
				}),
				url: "ethics_and_philosophy"
			}, {
				getName: () => E.fbt._("Food and Drink", null, {
					hk: "19vNV9"
				}),
				url: "food_and_drink"
			}, {
				getName: () => E.fbt._("Religion", null, {
					hk: "4aCX5k"
				}),
				url: "religion"
			}, {
				getName: () => E.fbt._("World News", null, {
					hk: "4lETuR"
				}),
				url: "world_news"
			}, {
				getName: () => E.fbt._("Politics", null, {
					hk: "41ePs3"
				}),
				url: "politics"
			}, {
				getName: () => E.fbt._("Meta", null, {
					hk: "1SKBT1"
				}),
				url: "meta_reddit"
			}, {
				getName: () => E.fbt._("Tabletop RPGs", null, {
					hk: "1zUqUF"
				}),
				url: "tabletop_roleplaying_game"
			}, {
				getName: () => E.fbt._("Marketplace and Deals", null, {
					hk: "1qiYgm"
				}),
				url: "marketplace_and_deals"
			}, {
				getName: () => E.fbt._("Finance and Economics", null, {
					hk: "rZrtS"
				}),
				url: "business_economics_and_finance"
			}, {
				getName: () => E.fbt._("Galaxy Quest", null, {
					hk: "1XkOK1"
				}),
				url: "galaxy_quest"
			}, {
				getName: () => E.fbt._("Math", null, {
					hk: "17VRuh"
				}),
				url: "mathematics"
			}, {
				getName: () => E.fbt._("Crypto", null, {
					hk: "1KATZ1"
				}),
				url: "cryptocurrency"
			}];
			var we = n("./src/reddit/components/Widgets/Aggregate/TopicsList/index.m.less"),
				Te = n.n(we);
			const Ie = () => {
					const e = `${je.a.assetPath}/img/banner/banner-medium@2x.png`,
						t = E.fbt._("Find Your Next Community!", null, {
							hk: "4tZ6vB"
						}),
						n = {
							backgroundImage: `url(${e})`
						};
					return c.a.createElement("div", {
						className: Te.a.banner,
						style: n
					}, c.a.createElement("h2", {
						className: Te.a.bannerText
					}, t))
				},
				Ae = e => `/t/${e}?activeTab=communities`,
				Le = e => {
					const t = e.topic.getName();
					return c.a.createElement("div", {
						className: Te.a.itemContainer
					}, c.a.createElement(Ne.a, {
						to: Ae(e.topic.url),
						onClick: () => e.sendEvent(Object(Ce.c)(t))
					}, t))
				};
			var De = c.a.memo(e => {
					const t = Object(Se.a)();
					Object(a.useEffect)(() => t(Object(Ce.d)()), []);
					const n = Pe.map(e => ({
						value: e,
						sort: Object(Ee.d)() ? .5 : Math.random()
					})).sort((e, t) => e.sort - t.sort).map(e => e.value).slice(0, 10);
					return c.a.createElement(f.a, {
						className: e.className,
						noGradient: !0,
						styles: e.widget && e.widget.styles,
						widgetKind: e.widget && e.widget.kind
					}, c.a.createElement(Ie, null), c.a.createElement("div", {
						className: Te.a.container
					}, n.map(e => c.a.createElement(Le, {
						key: e.url,
						topic: e,
						sendEvent: t
					}))))
				}),
				Fe = n("./src/reddit/constants/experiments.ts"),
				Re = n("./src/reddit/constants/subredditLeaderboard.ts"),
				Be = n("./src/reddit/models/GoodContent/index.ts"),
				Ue = n("./src/reddit/helpers/chooseVariant/index.ts");

			function Me(e) {
				return Object(Ue.c)(e, {
					experimentEligibilitySelector: Ue.a,
					experimentName: Fe.v
				})
			}
			var qe = n("./src/reddit/selectors/experiments/utils.ts");
			const We = Object(u.a)(e => Object(Ue.c)(e, {
					experimentName: Fe.Ac,
					experimentEligibilitySelector: Ue.a
				}), qe.a),
				Ve = Object(u.a)(We, e => e === Fe.Cc.Enabled);
			var Ge = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Ke = n("./src/reddit/selectors/user.ts");
			var He = n("./src/reddit/selectors/experiments/uiSimplification.ts"),
				Qe = n("./src/reddit/selectors/seo/linksModule.ts"),
				ze = n("./src/reddit/selectors/subreddit.ts"),
				Je = n("./src/reddit/selectors/subredditLeaderboard.ts");
			n("./src/reddit/components/TopSubredditsWidget/index.tsx"), n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx");
			var Ze = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				Xe = n("./src/reddit/selectors/meta.ts");
			const Ye = "c1020",
				$e = "videos",
				et = Object(u.c)({
					isMod: Ke.L,
					isLoggedIn: Ke.J,
					shouldShowLocalRecommendations: e => !1 !== e.user.prefs.showLocationBasedRecommendations,
					currentUser: Ke.j,
					frontpageLinks: Qe.b,
					isOver18: Ke.db,
					isUISimplificationAllItemsVariant: He.b,
					isInBFFSLeaderboardExperiment: function(e) {
						return Me(e) === Fe.u.RotateEven
					},
					bffsLeaderboardVariant: Me,
					inRpanTopVideoEntrypointExperiment: Ge.e,
					rankings: e => Object(ze.N)(e, Ye),
					shouldShowTopicsWidget: e => {
						const t = Object(Ge.e)(e),
							n = !!Object(ze.N)(e, Ye);
						return (!t || !n) && (!Object(He.b)(e) && function(e) {
							return Object(Ue.c)(e, {
								experimentEligibilitySelector: Ke.K,
								experimentName: Fe.jb
							}) === Fe.Xb
						}(e))
					},
					isNavbarLikeMwebEnabled: l.a,
					locale: Xe.i,
					isInLeaderboardTakeoverExperiment: Ve
				}),
				tt = e => !(!e.currentUser || !e.currentUser.showRecentPosts),
				nt = e => !(e.currentUser && (!e.currentUser || e.currentUser.isGold)),
				st = e => {
					const {
						bffsLeaderboardVariant: t,
						isInBFFSLeaderboardExperiment: n,
						shouldShowLocalRecommendations: s,
						isInLeaderboardTakeoverExperiment: o
					} = e;
					if (o) {
						const e = [...Re.h];
						return {
							category: e[r()(e.length - 1)],
							categories: e
						}
					}
					let a, c, d, l, u;
					n && t === Fe.u.RotateEven ? (a = Re.u, c = Re.n, d = Re.s, l = Re.a) : (a = Re.t, c = Re.j, d = Re.r, l = []), u = [a, ...l, ...d], s && u.unshift(c);
					const m = u[r()(u.length - 1)];
					u = [], m.id !== a.id && u.push(a), s && m.id !== c.id && u.push(c);
					let p = [...l, ...d];
					return p = p.filter(e => e.id !== m.id), u = [...u, ...i()(p).slice(0, 4 - u.length)], {
						category: m,
						categories: u
					}
				};
			class rt extends c.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = async () => {
						this.setState({
							isMounted: !0
						})
					};
					const {
						category: t,
						categories: n
					} = st(e);
					!e.rankings && e.inRpanTopVideoEntrypointExperiment && e.fetchTopSubreddits(), this.state = {
						isMounted: !1,
						category: t,
						categories: n
					}
				}
				render() {
					let e = 0;
					const {
						className: t,
						frontpageLinks: n,
						isLoggedIn: s,
						isOver18: r,
						listingName: o,
						isUISimplificationAllItemsVariant: i,
						shouldShowTopicsWidget: a,
						isNavbarLikeMwebEnabled: d
					} = this.props, {
						category: l,
						categories: u
					} = this.state, m = !i, p = !i && !d;
					return c.a.createElement(R.a, {
						className: t,
						"data-testid": "frontpage-sidebar"
					}, m && c.a.createElement(ae.a, {
						categories: u,
						category: l,
						first: 5,
						isOver18: r,
						shouldDisplayDelta: !this.props.isMod && l.id !== Re.l,
						to: l.path
					}), c.a.createElement(F.a, {
						placement: W.c.ABOVE_THE_FOLD,
						listingName: o,
						removeSidebarSpacer: !m,
						position: Ze.a.FIRST,
						sizes: W.h,
						placementIndex: e++
					}), nt(this.props) && c.a.createElement(j, null), a && c.a.createElement(g.a, null, c.a.createElement(De, null)), s && c.a.createElement(g.a, null, c.a.createElement(b.a, {
						listingName: o
					})), tt(this.props) && c.a.createElement(Oe, null), n && p && c.a.createElement(g.a, null, c.a.createElement(D, {
						links: n
					})), c.a.createElement(B.a, {
						adComponent: c.a.createElement(F.a, {
							placement: W.c.BELOW_THE_FOLD,
							listingName: o,
							position: Ze.a.BOTTOM,
							sizes: W.n,
							placementIndex: e++
						})
					}, s && c.a.createElement(ie, null)))
				}
			}
			const ot = Object(d.b)(et, e => ({
				fetchTopSubreddits: () => {
					const t = {
							categoryId: Ye,
							filter: {
								includeUnrated: !1,
								isBlacklistedSubredditsExcluded: !0,
								isNsfwExcluded: !0,
								isDiscoverable: !0,
								maxRating: Be.b.PG13
							},
							isOnlyModIncluded: !1
						},
						n = Object(Je.d)(Ye, $e);
					e(Object(p.a)(t, n))
				},
				subredditAboutRequested: t => e(Object(m.u)(t))
			}));
			t.default = ot(rt)
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("IdCard").then(n.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/InFeedPostCreation/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-InFeedPostCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-InFeedPostCreation").then(n.bind(null, "./src/reddit/components/InFeedPostCreation/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/InFeedPostCreation/index.tsx"
				}
			})
		},
		"./src/reddit/components/MiniPost/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3fWuhJ6bVet7XJT5A0mZM2",
				title: "_2uR1aBUWmKIo8Fcg-D7bPi",
				crowdControlPreview: "_1R-_n2amB7t3lRrMWDZFYz",
				thumbnailContainer: "tN3XUE_42h_qcAw7KSnlh",
				postDetails: "_2mURCICbBWv1kFMX2GPzA_",
				SubredditLink: "_3g8BYpbdZDmGNwV4UIA3GI",
				subredditLink: "_3g8BYpbdZDmGNwV4UIA3GI",
				subAndMeta: "_3GMQrxl5pvXDUEFvUjr9Qh",
				isSingleLine: "dZATEZTPQCHPtvhujPV0L",
				separator: "_2q6RJ3jSwGkeuWcg6aU-nY",
				meta: "KoclPkialOte6pOEsb4vx"
			}
		},
		"./src/reddit/components/MiniPost/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				l = n("./src/lib/timeAgo/index.ts"),
				u = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = n("./src/reddit/components/Thumbnail/index.tsx"),
				p = n("./src/reddit/helpers/overlay/index.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				g = n("./src/reddit/components/MiniPost/index.m.less"),
				f = n.n(g);
			const y = Object(a.a)(e => e, b.F, b.d, (e, t, n) => {
					return {
						crosspost: n,
						post: t,
						subredditOrProfile: Object(h.K)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				_ = Object(i.b)(y, (e, t) => ({
					openLightbox: t => e(Object(p.a)(t.permalink))
				}));
			class x extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							containerOnClick: e,
							openLightbox: t,
							openLinksNewTab: n,
							post: s
						} = this.props;
						n ? window.open(s.permalink) : t(s), e && e()
					}, this.onClickSubreddit = e => {
						const {
							openLinksNewTab: t,
							subredditOnClick: n,
							subredditOrProfile: s
						} = this.props;
						e.stopPropagation(), t && s && (e.preventDefault(), window.open(s.url)), n && n()
					}, this.onClickThumbnail = e => {
						const {
							thumbnailOnClick: t
						} = this.props;
						e.stopPropagation(), t && t()
					}
				}
				render() {
					const {
						className: e,
						post: t,
						showSubreddit: n = !1,
						subredditOrProfile: r,
						subredditSameLine: i,
						crowdControlPreview: a
					} = this.props;
					return o.a.createElement("div", {
						className: Object(c.a)(f.a.container, e, a ? f.a.crowdControlPreview : null),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: f.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(m.a, {
						post: t
					})), o.a.createElement("div", {
						className: f.a.postDetails
					}, o.a.createElement("p", {
						className: f.a.title,
						title: t.title
					}, t.title), o.a.createElement("div", {
						className: Object(c.a)(f.a.subAndMeta, {
							[f.a.isSingleLine]: i
						})
					}, n && r && r.displayText && o.a.createElement(u.a, {
						className: f.a.SubredditLink,
						to: r.url,
						onClick: this.onClickSubreddit
					}, r.displayText), i && o.a.createElement("div", {
						className: f.a.separator
					}), !a && o.a.createElement("div", null, o.a.createElement("span", {
						className: f.a.meta
					}, s.fbt._({
						"*": "{number} points",
						_1: "1 point"
					}, [s.fbt._plural(t.score, "number", Object(d.b)(t.score))], {
						hk: "1Jm6il"
					})), o.a.createElement("span", {
						className: f.a.meta
					}, s.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [s.fbt._plural(t.numComments, "number", Object(d.b)(t.numComments))], {
						hk: "2jjoyt"
					})), o.a.createElement("span", {
						className: f.a.meta
					}, Object(l.a)(t.created / 1e3, !0))))))
				}
			}
			t.a = _(x)
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: s,
					onClick: i,
					post: c,
					redditStyle: u,
					theme: m,
					...p
				} = e;
				return r.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, n),
					style: Object(a.c)(s, e),
					onClick: i
				}, p), t)
			})
		},
		"./src/reddit/components/PremiumCTA/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_1b1Jalg2nxA_Z-BjKXRfAV",
				contentWrapper: "_1ms8iFlWXJNWcT29GKsv69",
				icon: "_3-m5rOa3loUClNwpCv1uWU",
				content: "_1LofvgShcWAGgRJOa2IRlf",
				title: "_17PUokUAvL3YJx6EyPdD9d",
				description: "rn1KP8t9htFxyeAF8fdJ4"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/LRUCache/index.ts"),
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				d = n("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				l = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				u = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				h = n.n(b);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), f = ({
				className: e
			}) => r.a.createElement("div", {
				className: Object(a.a)(e, h.a.container, h.a.placeholder, h.a.large, p.a.largeAndMediumPostStyles)
			}, r.a.createElement(l.a, {
				className: h.a.backgroundWrapper
			}, r.a.createElement("div", {
				className: h.a.titleAndDescriptionContainer
			}, r.a.createElement("h3", {
				className: h.a.title
			}, g._("Top livestream", null, {
				hk: "4od1tZ"
			}))), r.a.createElement("div", {
				className: h.a.body
			}, r.a.createElement("div", {
				className: h.a.previewContainer
			}, r.a.createElement("div", {
				className: Object(a.a)(h.a.thumbnail, h.a.loading)
			})))));
			var y = ({
				className: e,
				layout: t
			}) => t === u.g.Classic ? r.a.createElement(c.b, {
				className: Object(a.a)(e, h.a.classicPostPlaceholder),
				isLoading: !0
			}) : t === u.g.Compact ? r.a.createElement(d.a, {
				className: Object(a.a)(e, h.a.compactPostPlaceholder),
				isLoading: !0
			}) : r.a.createElement(f, {
				className: e
			});
			const _ = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: ({
					className: e,
					layout: t
				}) => r.a.createElement(y, {
					className: e,
					layout: t
				}),
				getComponent: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("RpanListingUnit")]).then(n.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var x = e => r.a.createElement(_, e),
				v = n("./src/reddit/helpers/trackers/rpan.ts");
			const k = e => e === u.g.Classic ? 84 : e === u.g.Compact ? 42 : 340,
				O = new o.a(20),
				j = e => {
					const t = `rpan-${e.layout}-${e.listingKey}`,
						n = O.get(t);
					if (n) return n;
					const s = E(e.desiredIndex, e.children),
						o = {
							child: {
								id: t,
								estHeight: k(e.layout),
								trackOnEnteredViewport: () => e.sendEvent(Object(v.G)()),
								render: ({
									className: t
								}) => r.a.createElement(x, {
									className: t,
									layout: e.layout,
									listingName: e.listingName
								})
							},
							idx: s
						};
					return O.set(t, o), o
				},
				E = (e, t) => {
					const n = new Set(Object.keys(t).map(e => parseInt(e, 10)));
					for (; n.has(e);) e++;
					return e
				}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less": function(e, t, n) {
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
				loading: "_3Hsr_kP1TY2ld8xQG-XqAL",
				infoContainer: "_2aNPePbQCJ2-xyqF693-oh",
				broadcastTitle: "_2PtVDFQbkz3Sh1f_ppShzf",
				watchingCount: "VT9OiuLNsb6RZcYm86q9G",
				titlePlaceholder: "_3DC7-C7eSLDyl1gxOp5IFX",
				large: "hrQ5rXDbyl6t3TIXxENXB",
				body: "_1jrhjWiRPpBMVjEPmkDP26",
				previewLink: "_2ZFeLyTw6PIP6lE1S9c4Js",
				classic: "_3Rb0d4ST3qYLtk7GE1D2Ku",
				thumbnailContainer: "_1UGYtZeEoz8fDy4G-b4pqk",
				main: "_12iec8OZ9gJJtQR8nSC2se",
				score: "_1c8HaTqXDAT7pYLrFLAWFt",
				compact: "_2mQGWgGIa1tOb-9mH8lvcG",
				verticalVotes: "_3Q8HLP8Cv_uongOZe_uVp2",
				horizontalVotes: "_3dLEcgpoUWjqaG1vVXlfYR",
				compactPostPlaceholder: "jw9TfhViHYwiaSOWfhKRa",
				classicPostPlaceholder: "_2lnslGhr0-HKZXmHDCzAU7",
				upvoteAnimation: "_1MEw3CaNaAuwCohG-n7UPc",
				liveStatus: "_1YeXsBJft9g02XQNAzcPWD"
			}
		},
		"./src/reddit/components/SEOSidebarLinks/index.m.less": function(e, t, n) {
			e.exports = {
				titleFontH1: "_2P7APx0UZzT7G61J3taHT1",
				titleFontH2: "RwS_Oc-tCzFs9JqbyJt7y",
				titleFontH3: "_3efLiav9fPpnRcDjg9Gwg",
				titleFontH4: "_3hvxMzKYjdkuu40CSxKjAu",
				titleFontH5: "_3WpmjCstbhZ90uNfolTEpK",
				titleFontH6: "_2aXJlh_wJ7xa9WJa1Ffc1Q",
				metadataFont: "_2uQdSEwqQ-dgsfQ5DUyRNy",
				flairFont: "_2_0QEUNGrG4wZY0ofsNi1h",
				labelsFont: "Ak2Fs_jf7fnNIs6Xajto6",
				actionFont: "_2yOueT_7JFLAAiCNPTQjfk",
				smallButtonFont: "_1j9G7RzwWzCEXRfBup8qCr",
				largeButtonFont: "_21SizvLABo7WuGdVrlWB3E",
				strongTextFont: "_1rRA9Vf6uOXrFjUcJJcmOL",
				tabFont: "_1nbCityPGTvrop_yKHkhp_",
				buttonFontXS: "_3RerbBqI5ohWwQKBd8_-Ku",
				buttonFontXs: "_3RerbBqI5ohWwQKBd8_-Ku",
				buttonFontS: "_2wKWEQ-jbYxfuGUxCG8h09",
				buttonFontM: "gDNmuWsQQtIKbOsMxXWEo",
				buttonFontL: "_16efVdvn26v_1Oo2lbTnwG",
				buttonFontXL: "_2YqGgd9hmqUohHovWDx40Q",
				buttonFontXl: "_2YqGgd9hmqUohHovWDx40Q",
				bodyFontH1: "_1J85q0678QbXBAlUsUtzth",
				bodyFontH2: "-XsUf9E0eP4ePrgs3Yf81",
				bodyFontH3: "_22-90BPqugW8lJQPIjwpNd",
				bodyFontH4: "_2DU9sYq9m0gC27PMeSCeRK",
				bodyFontH5: "_2F6ZjEPUyXIS06JZc1JsHQ",
				bodyFontH6: "XnmQfbUmMrXwd2eQYT_6a",
				bodyFont: "_3Jp6jLYRWtZI2hmJA9eurC",
				bodyFontSmall: "_2eo_q38bKZsZzaxO_TC6ni",
				bodyFontMono: "_24Qs54CbgE_djlerYbZ1zl",
				Link: "_13rO9T2auFedwF7O7V72O6",
				link: "_13rO9T2auFedwF7O7V72O6",
				SectionHeader: "_2EUcwf_tbEz93vN5QWYP7O",
				sectionHeader: "_2EUcwf_tbEz93vN5QWYP7O",
				SectionTitle: "_2dowUVQFB6EDFymNiITj65",
				sectionTitle: "_2dowUVQFB6EDFymNiITj65",
				SectionChevron: "_2GbTYUvknqxuAWQI2Gnu2g",
				sectionChevron: "_2GbTYUvknqxuAWQI2Gnu2g",
				SectionBody: "_1dqZsiXZltYxbQcUoK1Z-Q",
				sectionBody: "_1dqZsiXZltYxbQcUoK1Z-Q",
				SectionContent: "_2jmnnhuP2AL87nZM3exPTR",
				sectionContent: "_2jmnnhuP2AL87nZM3exPTR",
				SectionFooter: "_3ZTxrJ36ejYA39ZNctzfrx",
				sectionFooter: "_3ZTxrJ36ejYA39ZNctzfrx",
				SectionButton: "dRr-wxcoswiadnFKXkm8G",
				sectionButton: "dRr-wxcoswiadnFKXkm8G",
				Section: "_2pK6e4VBPMQxDuw2kXyIIb",
				section: "_2pK6e4VBPMQxDuw2kXyIIb",
				opened: "_3U7bizV5Ex3dWwKwNODf9R",
				expanded: "_1Rwg1da6VQnIycp8lVYXom",
				Widget: "_3Fe8ia7wR8lbatMEJ6BchP",
				widget: "_3Fe8ia7wR8lbatMEJ6BchP"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3ioMyxiI-wWgZFqBDVBh6r"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less"),
				o = n.n(r);
			t.a = s.a.div("header", o.a)
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1Pcih1cgtQusjyfxp7YPbP",
				"m-card": "Ab_CG1GZxb0mjtooTcgRC",
				mCard: "Ab_CG1GZxb0mjtooTcgRC",
				layout: "_2kSyv4gtHy2zfKKHU-4g7F",
				layoutBody: "_2OOX0Ul2XYOdHT0ojyBOUD",
				layoutHeader: "lUMtC2iyxpeA0-GrN-P2x"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				a = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				c = n.n(a);

			function d(e) {
				const {
					className: t,
					id: n,
					layoutBodyClassName: s,
					showCardView: a
				} = e, d = {
					[c.a["m-card"]]: a
				};
				return r.a.createElement("div", {
					id: n,
					className: Object(o.a)(c.a.container, d, t)
				}, r.a.createElement(i.a, {
					className: c.a.layout,
					bodyClassName: Object(o.a)(c.a.layoutBody, d, s),
					header: e.header,
					headerClassName: Object(o.a)(c.a.layoutHeader, d)
				}, e.children))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				a = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = () => r.a.createElement(i.a, {
				className: l.a.duHeader
			}, u._("Trending today", null, {
				hk: "3rOxuO"
			})), p = Object(c.a)({
				isLoading: !0
			});
			t.a = e => r.a.createElement(a.a, {
				className: e.className,
				header: m(),
				layoutBodyClassName: l.a.layoutBody,
				showCardView: e.showCardView
			}, Array.from({
				length: e.numberOfItems || 6
			}).map((e, t) => r.a.createElement("div", {
				className: l.a.post,
				key: `placeholder-post-${t}`
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
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, n) {
			e.exports = {
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/lodash/random.js"),
				o = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/config.ts"),
				u = n("./src/reddit/components/FakeBannerAd/index.tsx"),
				m = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/helpers/adCount/index.ts"),
				g = n("./src/reddit/helpers/trackers/ads.ts"),
				f = n("./src/reddit/models/Media/index.ts"),
				y = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				_ = n.n(y),
				x = n("./src/lib/lessComponent.tsx");
			const v = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("reddit-components-SidebarNativeAd")]).then(n.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SidebarNativeAd/index.tsx"
					}
				}),
				k = Object(d.c)({
					post: (e, t) => {
						const {
							placement: n,
							placementIndex: s
						} = t, r = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(h.a)(n, r, s)]
					}
				}),
				O = Object(c.b)(k),
				j = x.a.wrapped(b.a, "ThemedWidget", _.a),
				E = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(f.F)(e.media) && e.media.content)),
				N = [{
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}],
				C = Object(p.c)(class extends a.a.Component {
					shouldComponentUpdate(e) {
						const {
							className: t,
							redditStyle: n
						} = this.props;
						return t !== e.className || n !== e.redditStyle
					}
					trackViewability(e, t, n) {
						Math.random() <= l.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(g.b)(e, t, n))
					}
					render() {
						const e = o()(0, N.length - 1),
							{
								img: t,
								href: n
							} = N[e],
							{
								className: s,
								placement: r,
								redditStyle: i
							} = this.props;
						return a.a.createElement(j, {
							className: s,
							contentOnly: !0,
							redditStyle: i
						}, a.a.createElement(u.a, {
							img: t,
							href: n,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, r)
						}))
					}
				});

			function S({
				className: e,
				post: t,
				placementIndex: n,
				refreshKey: s,
				listingName: r,
				placement: o,
				redditStyle: i,
				awaitingBrandSafetyCheck: c,
				forceHouseAd: d,
				removeSidebarSpacer: l
			}) {
				const u = l ? a.a.Fragment : m.a;
				return c || !E(t) && !d ? null : a.a.createElement(u, null, d ? a.a.createElement(C, {
					className: e,
					redditStyle: i,
					placement: o
				}) : a.a.createElement(v, {
					post: t,
					refreshKey: s,
					listingName: r,
					placement: o,
					placementIndex: n
				}))
			}
			t.a = O(S)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/selectors/brandSafety.ts"),
				c = n("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(i.t)();
			t.a = m(Object(o.b)((e, {
				listingName: t,
				pageLayer: n
			}) => {
				const s = Object(a.b)(e, {
						listingName: t,
						pageLayer: n
					}),
					r = Object(d.B)(e) || Object(c.a)(e),
					o = Object(a.e)(e);
				return {
					canShowAd: s && !r,
					awaitingBrandSafetyCheck: !Object(a.c)(e),
					isAdsDisabled: r,
					viewIsUnsafe: o
				}
			})(({
				canShowAd: e,
				isAdsDisabled: t,
				viewIsUnsafe: n,
				pageLayer: s,
				...o
			}) => !t && e && s ? r.a.createElement(l.a, u({
				forceHouseAd: n
			}, o)) : null))
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
				o = n("./src/lib/lessComponent.tsx");
			t.a = o.a.div("Component", r.a)
		},
		"./src/reddit/components/SubredditAdoptionWidget/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_32gg9k8mE7XAO33Q0lKRlU",
				main: "_39QHoSGxWS9OKtoNU9jEE_",
				title: "_27oRfx5g78dJfAJl_8Npk3",
				icon: "_2t2xQcM_0PlqIR0rm5VRfJ",
				description: "_2HAYUIdDUchBheTwqmKIcq",
				button: "_3GA-tK1xBiDrxLJRZR3IIB"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				r = n("./src/reddit/components/SubredditNameLink/index.m.less"),
				o = n.n(r);
			const i = n("./src/lib/lessComponent.tsx").a.wrapped(s.a, "SubredditName", o.a);
			t.a = i
		},
		"./src/reddit/components/TabBadger/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-TabBadger-Component",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-TabBadger-Component").then(n.bind(null, "./src/reddit/components/TabBadger/Component.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/TabBadger/Component.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/TabBadger/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/TabBadger/Loader.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/posts.ts");
			const u = Object(i.c)({
					postCount: l.K,
					previousPageIsOverlay: d.n,
					tabBadged: e => e.tabBadged
				}),
				m = Object(o.b)(u);
			t.a = m(Object(c.c)(e => 0 === e.postCount ? null : r.a.createElement(a.a, {
				handlePillClick: e.handlePillClick,
				previousPageIsOverlay: e.previousPageIsOverlay,
				sendEvent: e.sendEvent,
				shortTimer: e.shortTimer,
				subredditName: e.subredditName,
				subscriberCount: e.subscriberCount,
				tabBadged: e.tabBadged
			})))
		},
		"./src/reddit/components/TopSubredditsWidget/Container.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/components/TopSubredditsWidget/index.tsx"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				a = n("./src/reddit/constants/subredditLeaderboard.ts"),
				c = n("./src/reddit/contexts/ApiContext.tsx"),
				d = n("./src/reddit/endpoints/subreddit/local.ts"),
				l = n("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts"),
				m = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				p = n("./src/reddit/models/GoodContent/index.ts");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const h = async (e, t) => {
				const n = await Object(l.a)(e, t);
				if (n && n.ok) {
					const e = n.body,
						t = e && e.data && e.data.subredditLeaderboard;
					return Object(u.c)(t)
				}
			};
			class g extends r.a.Component {
				constructor(e) {
					super(e), this.sendEventClick = (e, t, n, s) => {
						this.props.sendEvent(Object(m.c)(e, t, n, s)), this.props.onSendEventClick && this.props.onSendEventClick(e, t, n, s)
					}, this.state = {}
				}
				componentDidMount() {
					this.fetchTopSubreddits()
				}
				componentDidUpdate(e) {
					const t = e.category && e.category.id,
						n = this.props && this.props.category && this.props.category.id,
						s = this.props.category && this.props.category.name;
					t !== n && s && !this.state[s] && this.fetchTopSubreddits()
				}
				async fetchTopSubreddits() {
					const {
						category: e,
						first: t
					} = this.props, n = e && e.id;
					if (n !== a.l)(n || n === a.f) && h(this.props.gqlContext(), {
						categoryId: n,
						filter: p.a,
						first: t
					}).then(e => {
						const t = e && e.rankings,
							n = e && e.subreddits,
							s = this.props.category && this.props.category.name || a.c;
						t && n && this.setState(e => ({
							...e,
							[s]: {
								rankings: t,
								subreddits: n
							}
						}))
					}).catch(e => console.error("Error >>>", e));
					else {
						const e = await async function(e, t) {
							const n = await Object(d.a)(e, t);
							if (n && n.ok) {
								const e = n.body,
									t = e && e.data && e.data.nearbySubreddits;
								return Object(u.a)(t)
							}
						}(this.props.gqlContext(), {
							first: t
						});
						if (!e) return;
						const {
							rankings: n,
							subreddits: s
						} = e;
						this.setState(e => ({
							...e,
							[a.m]: {
								rankings: n,
								subreddits: s
							}
						}))
					}
				}
				render() {
					const {
						category: e
					} = this.props, t = e && e.name, n = e && e.displayText, s = t || a.c, i = this.state[s], c = i ? i.rankings : [], d = i ? i.subreddits : {}, l = c && c[0] && c[0].id, u = d && d[l], m = !(u && u.isNSFW) || this.props.isOver18;
					return r.a.createElement(o.b, b({
						categoryName: t,
						categoryDisplayText: n,
						onSendEventClick: this.sendEventClick,
						rankings: c,
						shouldDisplayBannerImg: m,
						shouldDisplayDelta: this.props.shouldDisplayDelta,
						subreddits: d
					}, this.props))
				}
			}
			t.a = Object(c.b)(Object(i.c)(g))
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/icons/fonts/index.tsx"),
				m = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				p = n.n(m);
			const b = e => o.a.createElement(o.a.Fragment, null, o.a.createElement(l.b, {
					className: p.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), o.a.createElement("span", {
					className: p.a.subredditDetailsContainer
				}, e.large ? o.a.createElement(d.a, {
					subredditName: e.subreddit.name
				}, o.a.createElement("span", {
					className: p.a.regularText
				}, e.subreddit.displayText)) : o.a.createElement("span", {
					className: p.a.regularText
				}, e.subreddit.displayText), null === e.rank && o.a.createElement("span", {
					className: p.a.smallText
				}, s.fbt._("This community hasn't been ranked yet.", null, {
					hk: "4CmlZJ"
				})))),
				h = e => {
					const t = Object(a.a)(p.a.subredditRankItem, e.large && p.a.large),
						n = e.delta && e.delta > 0,
						s = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(c.b)(e);
							if (t.length > 3) {
								return `${t.split(".")[0]}k`
							}
							return t
						})(e.rank + 1),
						r = e.delta ? n ? "#46D160" : "#EA0027" : "transparent";
					return o.a.createElement("li", {
						className: p.a.listItem,
						key: e.subreddit.displayText
					}, o.a.createElement(i.a, {
						className: t,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, o.a.createElement("div", {
						className: p.a.subredditRankItemColumn
					}, !e.hasTagline && o.a.createElement("span", {
						className: p.a.rankText
					}, s), !e.hasTagline && o.a.createElement(u.a, {
						className: p.a.arrow,
						name: n ? "caret_up" : "caret_down",
						isFilled: !0,
						style: {
							color: r
						}
					}), o.a.createElement(b, {
						large: e.large,
						rank: e.rank,
						subreddit: e.subreddit
					})), e.shouldDisplayDelta && o.a.createElement("span", {
						className: p.a.regularText
					}, e.delta ? Object(c.b)(Math.abs(e.delta)) : 0)))
				}
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				a = n.n(i);
			const c = e => r.a.createElement("div", {
				className: Object(o.a)(a.a.placeholderWrapper, e.large && a.a.large)
			}, r.a.createElement("span", {
				className: a.a.subredditIconLoading
			}), r.a.createElement("span", {
				className: a.a.subredditNameLoading
			}))
		},
		"./src/reddit/components/TopSubredditsWidget/index.m.less": function(e, t, n) {
			e.exports = {
				communityBanner: "_2-aCCpAklEV0DkVWrpodjE",
				communityBannerText: "_3t8QC0In-G5By0nAIZqfAZ",
				communityBannerCategoryName: "_3tu4wA7qDe2qAPwXNSHPo8",
				taglineBanner: "_1WuTyzo7KQobFlIJHW6Pik",
				taglineBannerBackground: "_34L_D1LSVWJ0ZjeqwrFnPj",
				taglineBannerImage: "pa_89rxjdi45gbVf0w9QR",
				taglineBannerText: "rpzag8Jvbaz6Pji3oRkWZ",
				footer: "_3fyECztJ8AQeIuhZWW-tNU",
				linkButton: "_1Q1oKEA1qDipo5Tk0b_YlY",
				categoryPicker: "_1O_evNy72kVXzYqUj80m_n",
				chipWrapper: "_1ZBD49ybfD0rTPX_Tp3Uz3",
				chip: "_3VVeutMKl2leQEGhurm7YN",
				taglineChip: "_2HZPVURuk0Na0mbosSZJDP",
				listItem: "_267lcOmg8VvXcoj9O0Q1TB",
				subredditRankItem: "_2ARwkAW45Urhf_fMfAMi5_",
				large: "_3WPeZCt6k7JXmTo4Kcf1vQ",
				regularText: "_3A9bf_kZ6VBA2VBRND5gvf",
				subredditIcon: "_3XIp3RTd4tSLZOvILNQorh",
				delta: "b8PFL61jVtugGDJnIQfBO",
				subredditRankItemColumn: "_2NS1CWm-CUQYu57CmZ05ep",
				subredditDetailsContainer: "_1XUTmupLRN-FTmJ6PQB7kO",
				categoryLink: "_25MytV8CK2IS_fK867Q3qH",
				rankText: "_2B-BDgM13P2SLJX-GZrxHV",
				smallText: "_3BO4rLcAUZY_jK4h2rZj7y",
				arrow: "ztLeQJcDYVKbL9h94QtI_",
				negative: "_3dHwI98vF7PVi8MmZFpeXj",
				communityBannerPlaceholder: "_2-cUhM9bP2B5FPfQsDLJGR",
				glimmer: "NJdRTjquS3Maw_lWbQTkw",
				placeholderWrapper: "_2jtVdXcFC3Ioe3B_hXF5Eh",
				subredditIconLoading: "_1F-hYShaC9dYxEEe3_TCGR",
				subredditNameLoading: "_YedzkdLjjcYoXUE26Cyb"
			}
		},
		"./src/reddit/components/TopSubredditsWidget/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/first.js"),
				o = n.n(r),
				i = n("./node_modules/lodash/times.js"),
				a = n.n(i),
				c = n("./node_modules/react/index.js"),
				d = n.n(c),
				l = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				u = n("./src/config.ts"),
				m = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				b = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				h = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				g = n("./src/reddit/constants/subredditLeaderboard.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				y = n("./src/reddit/controls/Chip/index.tsx"),
				_ = n("./src/reddit/helpers/name/index.ts"),
				x = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				v = n("./src/reddit/hooks/useTracking.ts"),
				k = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				O = n.n(k);
			const j = e => {
					const t = !(!e.rankings || !e.rankings.length),
						n = !t && O.a.communityBannerPlaceholder,
						r = e.bannerBackgroundImage && e.shouldDisplayBannerImg ? {
							backgroundImage: `url(${e.bannerBackgroundImage})`
						} : void 0,
						o = e.categoryName === g.m && g.j.path ? g.j.path : g.g;
					return d.a.createElement("div", {
						className: Object(m.a)(e.className, O.a.communityBanner, n),
						style: r
					}, t && d.a.createElement("h2", {
						className: O.a.communityBannerText
					}, d.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || g.e),
						to: o
					}, e.categoryName ? ((e, t) => e === g.m ? s.fbt._("Communities Near You", null, {
						hk: "ZMVOK"
					}) : s.fbt._("Top {categoryName} Communities", [s.fbt._param("categoryName", d.a.createElement("span", {
						className: O.a.categoryName
					}, " ", t || e, " "))], {
						hk: "X3A9z"
					}))(e.categoryName, e.categoryDisplayText) : s.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					}))))
				},
				E = e => {
					const {
						category: t
					} = e, {
						gradients: n
					} = t, r = !!(!e.rankings || !e.rankings.length) && O.a.communityBannerPlaceholder, o = n && Array.isArray(n) && 2 === n.length ? {
						background: `linear-gradient(246.35deg, ${n[0]} 0%, ${n[1]} 100%)`
					} : void 0, i = t.path ? t.path : g.g, a = t.image ? `${t.image}.png` : "magnifying-glass-snoo.png";
					return d.a.createElement("div", {
						className: Object(m.a)(e.className, O.a.taglineBanner, r)
					}, d.a.createElement("div", {
						className: O.a.taglineBannerBackground,
						style: o
					}, d.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", t.name || g.e),
						to: i
					}, d.a.createElement("h2", {
						className: O.a.taglineBannerText
					}, d.a.createElement("img", {
						className: O.a.taglineBannerImage,
						src: `${u.a.assetPath}/img/discovery/${a}`
					}), t.tagline ? (e => d.a.createElement("span", {
						className: O.a.categoryName
					}, s.fbt._("{tagline}", [s.fbt._param("tagline", e)], {
						hk: "3QDJDU"
					})))(t.tagline) : s.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					})))))
				},
				N = e => d.a.createElement("ol", null, e.rankings && e.rankings.map((t, n) => {
					const s = e.subreddits[t.id];
					return d.a.createElement(p.a, {
						delta: t.rankDelta,
						hasTagline: e.hasTagline,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || g.e, s.name),
						rank: n,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: s
					})
				}), !e.rankings.length && C),
				C = d.a.createElement(d.a.Fragment, null, a()(5, e => d.a.createElement(b.a, {
					key: e
				}))),
				S = e => {
					const t = e.isSecondaryButton ? f.n : f.k,
						n = e.linkColor ? {
							backgroundColor: e.linkColor,
							color: "white"
						} : void 0,
						r = e.isSecondaryButton ? e.categoryDisplayText ? s.fbt._("See All {categoryName}", [s.fbt._param("categoryName", e.categoryDisplayText)], {
							hk: "3mjiTN"
						}) : e.categoryName ? s.fbt._("See All {categoryName}", [s.fbt._param("categoryName", e.categoryName)], {
							hk: "3mjiTN"
						}) : s.fbt._("See All", null, {
							hk: "2OZax8"
						}) : s.fbt._("View All", null, {
							hk: "4vfmcB"
						});
					return d.a.createElement("div", {
						className: O.a.footer
					}, d.a.createElement(t, {
						className: O.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || g.e),
						to: e.to || "",
						style: n
					}, r))
				};

			function P(e, t) {
				return t || `${g.g}${Object(_.g)(e)}/`
			}
			const w = e => {
				return d.a.createElement("div", {
					className: O.a.categoryPicker
				}, e.categories && e.categories.map((t, n) => e.activeCategoryName === t.name ? null : d.a.createElement("span", {
					className: O.a.chipWrapper,
					key: t.name,
					onMouseDown: () => ((t, n) => e.onSendEventClick("bottom_leaderboards", t || g.e, void 0, n))(t.name, n + 1)
				}, d.a.createElement(y.a, {
					className: e.hasTagline ? O.a.taglineChip : O.a.chip,
					key: t.name,
					to: P(t.name, t.path),
					wide: t.name === g.m
				}, t.name ? t.name === g.m ? g.k : t.displayText || t.name : s.fbt._("Top", null, {
					hk: "2rw7Gx"
				})))))
			};
			t.b = e => {
				const {
					subreddits: t,
					rankings: n,
					categoryName: s,
					categoryDisplayText: r,
					category: i,
					categories: a
				} = e, l = Object(v.a)();
				Object(c.useEffect)(() => {
					l(Object(x.d)(s || g.e))
				}, []);
				const m = o()(n),
					p = t && m && t[m.id],
					b = `${u.a.assetPath}/img/leaderboard/banner-background.png`,
					f = p ? p.bannerBackgroundImage || b : void 0,
					y = e.to || s && P(s, i.path),
					_ = i && i.tagline,
					k = i && i.gradients && Array.isArray(i.gradients) && 2 === i.gradients.length ? i.gradients[1] : void 0;
				return d.a.createElement(h.a, {
					className: e.className,
					contentOnly: !0
				}, _ && d.a.createElement(E, {
					category: i,
					onSendEventClick: e.onSendEventClick,
					rankings: n
				}), !_ && d.a.createElement(j, {
					bannerBackgroundImage: f,
					categoryName: s,
					categoryDisplayText: r,
					onSendEventClick: e.onSendEventClick,
					rankings: n,
					shouldDisplayBannerImg: e.shouldDisplayBannerImg
				}), d.a.createElement(N, {
					categoryName: s,
					hasTagline: !!_,
					large: e.large,
					onSendEventClick: e.onSendEventClick,
					rankings: n,
					shouldDisplayDelta: !1,
					subreddits: t
				}), d.a.createElement(S, {
					categoryName: s,
					categoryDisplayText: r,
					isSecondaryButton: e.isSecondaryButton,
					linkColor: k,
					onSendEventClick: e.onSendEventClick,
					to: y
				}), a && d.a.createElement(w, {
					activeCategoryName: s,
					categories: a,
					hasTagline: !!_,
					onSendEventClick: e.onSendEventClick
				}))
			}
		},
		"./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less": function(e, t, n) {
			e.exports = {
				ClearButton: "_3k5-X9mL_S9RJuKX2c3dFc",
				clearButton: "_3k5-X9mL_S9RJuKX2c3dFc"
			}
		},
		"./src/reddit/components/Widgets/Aggregate/TopicsList/index.m.less": function(e, t, n) {
			e.exports = {
				itemContainer: "_1ULKkr1Vw-TKylAevPBQl3",
				linkItem: "_1cK4Hfav56VzzWNW6SF7Kj",
				container: "_1rKh-fSjtA_kUJNOHsvtAZ",
				banner: "_2E8lSyj68M9zN75kARoqfq",
				bannerText: "_1giVw239PHkSdxzG2aP5wH"
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
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SEOTitle/index.tsx"),
				a = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(a);
			const d = o.a.div("WidgetBackground", c.a),
				l = o.a.wrapped(({
					children: e,
					...t
				}) => r.a.createElement("div", t, r.a.createElement(i.b, {
					type: i.a.Widget
				}, e)), "WidgetHeader", c.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(d, null, e.children))
		},
		"./src/reddit/constants/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(s || (s = {}));
			var r;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(r || (r = {}))
		},
		"./src/reddit/constants/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "p", (function() {
				return d
			})), n.d(t, "q", (function() {
				return l
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "t", (function() {
				return g
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "r", (function() {
				return y
			})), n.d(t, "u", (function() {
				return _
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "s", (function() {
				return v
			})), n.d(t, "h", (function() {
				return k
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "i", (function() {
				return j
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = "DEFAULT",
				o = "",
				i = "All Communities",
				a = s.fbt._("All Communities", null, {
					hk: "1dfdfL"
				}),
				c = "top",
				d = "MOD",
				l = "moderating",
				u = s.fbt._("moderating", null, {
					hk: "34Ccgk"
				}),
				m = "LOCAL_COMMUNITIES",
				p = "near-you",
				b = s.fbt._("Near You", null, {
					hk: "2QTSPX"
				}),
				h = "/subreddits/leaderboard/",
				g = {
					id: o,
					name: o,
					path: `${h}`
				},
				f = {
					id: m,
					name: p,
					path: `${h}${p}/`
				},
				y = [{
					name: "Sports",
					displayText: s.fbt._("Sports", null, {
						hk: "41sK5Y"
					}),
					id: "c1015",
					path: `${h}sports/`
				}, {
					name: "News",
					displayText: s.fbt._("News", null, {
						hk: "5WND6"
					}),
					id: "c1009",
					path: `${h}news/`
				}, {
					name: "Gaming",
					displayText: s.fbt._("Gaming", null, {
						hk: "4qweUx"
					}),
					id: "c1019",
					path: `${h}gaming/`
				}, {
					name: "Aww",
					displayText: s.fbt._("Aww", null, {
						hk: "3qJjbL"
					}),
					id: "c1000",
					path: `${h}aww/`
				}],
				_ = {
					id: o,
					name: o,
					path: `${h}`,
					image: "popcorn-snoo",
					tagline: s.fbt._("Trending communities are so hot right now", null, {
						hk: "1yqJn4"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				x = {
					id: m,
					name: p,
					path: `${h}${p}/`,
					image: "magnifying-glass-snoo",
					tagline: s.fbt._("Local communities — See what’s near you", null, {
						hk: "s70l7"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				v = [{
					name: "Sports",
					displayText: s.fbt._("Sports", null, {
						hk: "11CI4F"
					}),
					id: "c1015",
					path: `${h}sports/`,
					image: "basketball-snoo",
					tagline: s.fbt._("Sports communities are the real MVP", null, {
						hk: "1zKdF8"
					}),
					gradients: ["#EF839E", "#7795F8"]
				}, {
					name: "News",
					displayText: s.fbt._("News", null, {
						hk: "17cLQ8"
					}),
					id: "c1009",
					path: `${h}news/`,
					image: "newsie-snoo",
					tagline: s.fbt._("News communities to keep you informed", null, {
						hk: "4pGDSm"
					}),
					gradients: ["#D72E33", "#A82455"]
				}, {
					name: "Gaming",
					displayText: s.fbt._("Gaming", null, {
						hk: "2aDSZz"
					}),
					id: "c1019",
					path: `${h}gaming/`,
					image: "esports-snoo",
					tagline: s.fbt._("Gaming communities taking it to the next level", null, {
						hk: "2zM7JE"
					}),
					gradients: ["#F08C3A", "#D72E33"]
				}, {
					name: "Aww",
					displayText: s.fbt._("Aww", null, {
						hk: "3ecS9m"
					}),
					id: "c1000",
					path: `${h}aww/`,
					image: "cat-snoo",
					tagline: s.fbt._("Aww communities — get in on this cuteness", null, {
						hk: "1uAb8e"
					}),
					gradients: ["#F3B54F", "#EC5428"]
				}],
				k = [{
					name: "E3 Gaming",
					displayText: s.fbt._("E3 Gaming", null, {
						hk: "289tR6"
					}),
					id: "c1034",
					path: `${h}e3/`
				}],
				O = [{
					name: "Beauty",
					displayText: s.fbt._("Beauty", null, {
						hk: "4mzjuL"
					}),
					id: "c1023",
					path: `${h}beauty/`,
					image: "makeup-snoo",
					tagline: s.fbt._("Beauty communities make us all look good", null, {
						hk: "2z1nzQ"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				}, {
					name: "Fashion",
					displayText: s.fbt._("Fashion", null, {
						hk: "22tnM2"
					}),
					id: "c1002",
					path: `${h}fashion/`,
					image: "90s-nostalgia-snoo",
					tagline: s.fbt._("Fashion communities are always in style", null, {
						hk: "4pNEnH"
					}),
					gradients: ["#EF839E", "#7795F8"]
				}, {
					name: "Food",
					displayText: s.fbt._("Food", null, {
						hk: "2Bq28v"
					}),
					id: "c1003",
					path: `${h}food/`,
					image: "cookbooks-snoo",
					tagline: s.fbt._("Food communities to make you go mmmm", null, {
						hk: "3OGpOa"
					}),
					gradients: ["#D72E33", "#A82455"]
				}, {
					name: "Fitness",
					displayText: s.fbt._("Fitness", null, {
						hk: "4ruQRK"
					}),
					id: "c1006",
					path: `${h}health_and_fitness/`,
					image: "yoga-snoo",
					tagline: s.fbt._("Fitness communities that know how to work it", null, {
						hk: "3Ow48z"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				}, {
					name: "Outdoors",
					displayText: s.fbt._("Outdoors", null, {
						hk: "1Can0U"
					}),
					id: "c1010",
					path: `${h}outdoors/`,
					image: "telescope-snoo",
					tagline: s.fbt._("Outdoor communities — they’re really out there", null, {
						hk: "1sfigF"
					}),
					gradients: ["#F08C3A", "#D72E33"]
				}, {
					name: "Relationships",
					displayText: s.fbt._("Relationships", null, {
						hk: "QnBO3"
					}),
					id: "c1013",
					path: `${h}relationships/`,
					image: "childrensbooks-snoo",
					tagline: s.fbt._("Relationship communities understand all the feels", null, {
						hk: "27KPX"
					}),
					gradients: ["#F08C3A", "#D72E33"]
				}],
				j = ["Sports", "Gaming", "News", "TV", "Aww", "Memes", "Pics & Gifs", "Travel", "Tech", "Music"]
		},
		"./src/reddit/controls/Chip/index.m.less": function(e, t, n) {
			e.exports = {
				Chip: "yO1xBdgBCFQNZudOlok9d",
				chip: "yO1xBdgBCFQNZudOlok9d",
				isWide: "_1lxXIK3bbUOKz-5A-FRakQ",
				active: "PrkN-68SZ_ce-8V-W4ciS"
			}
		},
		"./src/reddit/controls/Chip/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/controls/Chip/index.m.less"),
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const t = e.to ? {
					kind: i.a.InternalLink,
					to: e.to
				} : {};
				return r.a.createElement(i.q, d({
					className: Object(o.a)(c.a.Chip, {
						[c.a.isWide]: e.wide
					}),
					onClick: e.onClick,
					priority: i.b.Tertiary,
					size: i.c.XS,
					text: e.children
				}, t))
			}
		},
		"./src/reddit/endpoints/subreddit/local.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/redditGQL/operations/GetNearbySubreddits.json");
			t.a = (e, t) => Object(s.a)(e, {
				...r,
				variables: t
			})
		},
		"./src/reddit/endpoints/subreddit/topSubreddits.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/redditGQL/operations/TopSubreddits.json");
			t.a = (e, t) => Object(s.a)(e, {
				...r,
				variables: t
			})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const s = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(o.b)(s)(e => {
					const {
						featureEnabled: s,
						...o
					} = e, i = o;
					return s ? r.a.createElement(t, i) : void 0 !== n ? r.a.createElement(n, i) : null
				})
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
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./src/lib/isFakeSubreddit/index.ts"), n("./src/reddit/constants/postLayout.ts");
			Math.floor(100 * Math.random());
			var s;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(s || (s = {}))
		},
		"./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/lodash/isEmpty.js");
			var s = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const r = ({
					edges: e,
					pageInfo: t
				}) => {
					const n = {},
						r = [];
					for (const {
							node: o,
							...i
						} of e) {
						const e = Object(s.a)(o);
						n[e.id] = e, r.push(i)
					}
					return {
						pageInfo: t,
						rankings: r,
						subreddits: n
					}
				},
				o = ({
					edges: e
				}) => {
					const t = {},
						n = [];
					for (const {
							node: r,
							...o
						} of e) {
						const e = Object(s.a)(r);
						t[e.id] = {
							...e,
							bannerBackgroundImage: r && r.styles && r.styles.bannerBackgroundImage
						}, n.push(o)
					}
					return {
						rankings: n,
						subreddits: t
					}
				},
				i = ({
					edges: e,
					pageInfo: t
				}) => {
					const n = {},
						r = [];
					let o = 0;
					for (const {
							node: i
						} of e) {
						const e = Object(s.a)(i);
						n[e.id] = {
							...e,
							bannerBackgroundImage: i && i.styles && i.styles.bannerBackgroundImage
						}, r.push({
							id: e.id,
							rank: o
						}), o += 1
					}
					return {
						rankings: r,
						subreddits: n,
						pageInfo: t
					}
				}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "d", (function() {
				return f
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
			const u = {},
				m = e => Object(a.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(s.l)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				g = e => e.isActive ? l.a.mIsActive : void 0,
				f = e => {
					const t = Object(o.a)(Object(r.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "G", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "C", (function() {
				return p
			})), n.d(t, "z", (function() {
				return b
			})), n.d(t, "D", (function() {
				return h
			})), n.d(t, "B", (function() {
				return g
			})), n.d(t, "A", (function() {
				return f
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "u", (function() {
				return _
			})), n.d(t, "w", (function() {
				return x
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "o", (function() {
				return k
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "n", (function() {
				return j
			})), n.d(t, "y", (function() {
				return E
			})), n.d(t, "r", (function() {
				return N
			})), n.d(t, "x", (function() {
				return C
			})), n.d(t, "F", (function() {
				return S
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "c", (function() {
				return w
			})), n.d(t, "k", (function() {
				return T
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "v", (function() {
				return D
			})), n.d(t, "E", (function() {
				return F
			})), n.d(t, "f", (function() {
				return R
			})), n.d(t, "l", (function() {
				return B
			})), n.d(t, "m", (function() {
				return U
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "h", (function() {
				return q
			}));
			var s, r = n("./src/reddit/constants/chat.ts"),
				o = n("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(s || (s = {}));
			const a = (e, t) => {
					if (t) {
						const n = i.media(e, t.post.id),
							s = i.post(e, t.post.id),
							r = i.subreddit(e);
						if (t.post.authorInfo && s && (s.authorId = t.post.authorInfo.id), n) {
							n.streamPublicId = t.stream.stream_id, n.id = t.stream.stream_id;
							const s = Object(o.j)(e, {
								streamIdFromPath: t.post.id
							});
							s === o.a.LIVE ? n.type = "stream_live" : s === o.a.VOD ? n.type = "stream_vod" : s === o.a.UNAVAILABLE && (n.type = "stream_unavailable")
						}
						return {
							post: s,
							media: n,
							subreddit: r
						}
					}
					return {
						subreddit: i.subreddit(e)
					}
				},
				c = (e, t, n) => {
					if (!t || !n) return;
					const s = Object(o.j)(e, {
							streamIdFromPath: t.post.id
						}),
						i = t.chat_disabled || n.chatState === r.a.None;
					return {
						id: n.id,
						sessionDurationMs: n.sessionDurationMs,
						watchDurationMs: n.watchDurationMs,
						heartbeatDurationMs: n.heartbeatDurationMs,
						isLive: s === o.a.LIVE,
						playheadOffsetMs: n.playheadOffsetMs,
						timestampMs: n.timestampMs,
						startTimeMs: n.startTimeMs,
						volume: n.volume,
						chatState: i ? r.a.None : r.a.Compact,
						scrubbingStartMs: n.scrubbingStartMs,
						scrubbingEndMs: n.scrubbingEndMs,
						playerType: n.playerType
					}
				},
				d = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				l = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du",
					...a(e)
				}),
				u = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less",
					...a(e)
				}),
				m = (e, t) => n => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...a(n, e),
					actionInfo: i.actionInfo(n, {
						position: t || 0
					})
				}),
				p = (e, t) => n => ({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...e && {
						...a(n, e)
					}
				}),
				b = (e, t) => n => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				h = (e, t) => n => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				g = (e, t) => n => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				f = (e, t, n) => s => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(s, t, n),
					...d(s),
					...a(s, t)
				}),
				y = (e, t, n, s) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, n),
					...d(r),
					...a(r, t),
					actionInfo: i.actionInfo(r, {
						referralId: s
					})
				}),
				_ = (e, t, n) => s => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(s, t, n),
					...d(s),
					...a(s, t)
				}),
				x = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...d(t),
					...a(t, e)
				}),
				v = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				k = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				O = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				j = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: c(n, e, t),
					...a(n, e)
				}),
				E = e => t => {
					const n = Object(o.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...a(t, n)
					}
				},
				N = (e, t, n) => s => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: c(s, t, n),
					...a(s, t)
				}),
				C = (e, t) => n => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: c(n, e, t),
					...d(n)
				}),
				S = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: i.profile(t),
					screen: i.screen(t),
					...a(t, e)
				}),
				P = e => t => {
					const n = a(t, e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: i.profile(t),
						screen: i.screen(t),
						...n
					}
				},
				w = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...a(t, e)
				}),
				T = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...a(t, e),
					targetSubreddit: i.subreddit(t)
				}),
				I = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: c(n, e, t),
					...a(n, e)
				}),
				A = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: c(n, e, t),
					...a(n, e)
				}),
				L = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: c(n, e, t),
					...a(n, e)
				}),
				D = (e, t) => n => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: c(n, e, t),
					...a(n, e)
				}),
				F = (e, t) => n => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: c(n, e, t),
					...a(n, e)
				}),
				R = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: c(n, e, t),
					...a(n, e)
				}),
				B = (e, t) => n => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: c(n, e, t),
					...a(n, e),
					...d(n)
				}),
				U = (e, t) => n => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: c(n, e, t),
					...a(n, e),
					...d(n)
				}),
				M = (e, t) => n => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...a(n, t),
					...d(n)
				}),
				q = (e, t) => n => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...a(n, t),
					...d(n)
				})
		},
		"./src/reddit/helpers/trackers/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			}));
			var s = n("./src/reddit/constants/categories.tsx"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					...r.defaults(t),
					action: "click",
					noun: Object(s.d)(e),
					source: "leaderboard_category"
				}),
				i = (e, t, n) => o => ({
					...r.defaults(o),
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(s.d)(t),
						name: n && n.toLowerCase()
					}
				}),
				a = (e, t) => n => ({
					...r.defaults(n),
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(s.d)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				c = (e, t, n, o) => i => ({
					...r.defaults(i),
					action: "click",
					actionInfo: {
						...r.actionInfo(i),
						position: o && o
					},
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(s.d)(t),
						name: n && n.toLowerCase()
					}
				}),
				d = (e, t) => n => ({
					...r.defaults(n),
					action: "view",
					noun: "leaderboard_right_rail",
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(s.d)(e),
						name: t && t.toLowerCase()
					}
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
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = ({
				className: e,
				isSubreddit: t,
				...n
			}) => r.a.createElement("svg", c({
				className: Object(o.a)(a.a.dropdown, {
					[a.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), r.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = d
		},
		"./src/reddit/models/GoodContent/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = {
					G: "G",
					NC17: "NC17",
					NOT_SHOWN_IN_THEATERS: "NOT_SHOWN_IN_THEATERS",
					PG: "PG",
					PG13: "PG13",
					R: "R"
				},
				r = {
					isBlacklistedSubredditsExcluded: !0,
					isNsfwExcluded: !0,
					maxRating: s.R
				}
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(s || (s = {}))
		},
		"./src/reddit/pages/Frontpage/index.m.less": function(e, t, n) {
			e.exports = {
				duHeader: "_1fauFKjg428h9E1m4B2Vr-",
				sidebar: "_10wb7d3rGvj56Gcs4IQWL5"
			}
		},
		"./src/reddit/pages/Frontpage/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/lodash/fromPairs.js"),
				o = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/extractQueryParams/index.ts"),
				m = n("./src/lib/fastdom/index.ts"),
				p = n("./src/lib/makeListingKey/index.ts"),
				b = n("./src/lib/performanceTimings/index.tsx"),
				h = n("./src/reddit/actions/frontpage/index.ts"),
				g = n("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/ScrollChildFactory.tsx"),
				f = n("./src/reddit/components/EmptySubreddit.tsx"),
				y = n("./src/reddit/components/FeaturedLiveEntrypoint/index.tsx"),
				_ = n("./src/reddit/components/FrontpageSidebar/index.tsx"),
				x = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				v = n("./src/reddit/components/InFeedPostCreation/async.tsx"),
				k = n("./src/reddit/components/JumpToContent/index.tsx"),
				O = n("./src/reddit/components/ListingPostList/index.tsx"),
				j = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				E = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				N = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				C = n("./src/reddit/components/TabBadger/index.tsx"),
				S = n("./src/reddit/components/TrackingHelper/index.tsx"),
				P = n("./src/reddit/constants/parameters.ts"),
				w = n("./src/reddit/constants/postLayout.ts"),
				T = n("./src/reddit/contexts/PageLayer/index.tsx"),
				I = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				A = n("./src/reddit/helpers/trackers/screenview.ts"),
				L = n("./src/reddit/layout/page/Listing/index.tsx"),
				D = n("./src/reddit/selectors/experiments/trending.ts"),
				F = n("./src/reddit/selectors/experiments/uiSimplification.ts"),
				R = n("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				B = n("./src/reddit/selectors/frontpage.ts"),
				U = n("./src/reddit/selectors/meta.ts"),
				M = n("./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts"),
				q = n("./src/reddit/selectors/user.ts"),
				W = n("./src/lib/constants/index.ts"),
				V = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				G = n("./src/lib/objectSelector/index.ts"),
				K = n("./src/reddit/constants/page.ts"),
				H = n("./src/reddit/pages/Frontpage/index.m.less"),
				Q = n.n(H);

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = Object(T.t)(), X = Object(d.c)({
				queryParams: Object(G.a)((e, {
					location: t
				}) => o()([...Object(u.a)(t.search)])),
				sort: (e, {
					match: t
				}) => {
					const n = Object(B.a)(e);
					return t.params.sort || n
				}
			}), Y = Object(d.c)({
				countryMeta: U.b,
				geopopular: q.n
			}), $ = Object(d.c)({
				isInTrendingEntrypointExperiment: D.a,
				isLoggedIn: q.K,
				isPopular: T.C,
				isRpanDuVisible: e => Object(M.a)(e, {
					listingName: V.R
				}),
				rpanInjectionIndex: e => Object(M.b)(e, {
					listingName: V.R
				}),
				layout: T.O,
				isInUISimplificationI18NExperiment: F.a
			}), ee = () => Object(d.a)(Y, X, $, e => Object(M.a)(e, {
				listingName: V.R
			}), e => Object(M.b)(e, {
				listingName: V.R
			}), e => e, I.a, ({
				countryMeta: e,
				geopopular: t
			}, {
				queryParams: n,
				sort: s
			}, r, o, i, a, c) => {
				const d = P.x in n && n[P.x].toUpperCase(),
					l = "string" == typeof d && d in W.bc ? W.bc[d] : W.cc,
					u = Object(p.a)(K.a, s, n),
					m = e || W.y.Everywhere,
					b = t || m,
					h = P.h in n ? n[P.h].toUpperCase() : b,
					g = [];
				return o && g.push(i), {
					cardViewExperimentVariant: c,
					countrySort: h,
					listingKey: u,
					sort: s,
					timeSort: l,
					focusedVerticalPositions: Object(R.b)(a, {
						existingDUPositions: g,
						listingProps: {
							listingKey: u
						}
					}),
					...r
				}
			}), te = (e, t) => ({
				onLoadMorePosts: () => e(h.morePostsRequested({
					sort: t.match.params.sort
				})),
				refreshFeed: () => e(h.refreshFeed({
					sort: t.match.params.sort
				}))
			}), ne = Object(c.b)(ee, te), se = Object(s.a)({
				resolved: {},
				chunkName: () => "Trending",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("Trending").then(n.bind(null, "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx"
				}
			}, {
				ssr: !1
			}), re = e => a.a.createElement(se, z({}, e, {
				fallback: a.a.createElement(N.a, {
					showCardView: !!e.showCardView
				})
			}));
			class oe extends a.a.Component {
				constructor(e) {
					super(e), this.renderEmptySubreddit = () => a.a.createElement(f.a, {
						listingName: K.b,
						sort: this.props.sort
					}), this.onListingViewed = (e, t) => Object(A.f)(this.props.listingKey, this.props.sort, t, e, this.props.timeSort), this.componentDidMount = () => {
						const {
							cardViewExperimentVariant: e,
							isLoggedIn: t,
							sort: n
						} = this.props;
						m.a.read(() => {
							const s = `${b.c.FrontPage}-${n}`,
								r = [Object(I.c)(e)];
							Object(b.d)(s, t, r)
						})
					}
				}
				render() {
					const {
						focusedVerticalPositions: e,
						isInTrendingEntrypointExperiment: t,
						isLoggedIn: n,
						isPopular: s,
						isRpanDuVisible: r,
						layout: o,
						listingKey: c,
						rpanInjectionIndex: d,
						sendEvent: u,
						isInUISimplificationI18NExperiment: m
					} = this.props, p = s && !n && t && !m, b = {
						baseUrl: "",
						countrySort: this.props.countrySort,
						sort: this.props.sort,
						timeSort: this.props.timeSort
					}, h = {};
					if (o === w.g.Large && e.forEach((e, t) => {
							h[e] = Object(g.a)({
								numInstance: t,
								layout: o,
								listingKey: c,
								listingName: K.b,
								listingPosition: e
							})
						}), r) {
						const {
							child: e,
							idx: t
						} = Object(j.a)({
							children: h,
							desiredIndex: d,
							layout: o,
							listingKey: c,
							listingName: V.R,
							sendEvent: u
						});
						h[t] = e
					}
					const f = a.a.createElement(_.default, {
						className: Q.a.sidebar,
						listingKey: c,
						listingName: K.b
					});
					return a.a.createElement(L.a, {
						className: Object(l.a)(Q.a.Container, this.props.className),
						fitPageToContent: !0,
						trendingUnit: p && a.a.createElement(re, {
							showCardView: o === w.g.Large
						}),
						content: a.a.createElement(i.Fragment, null, p && a.a.createElement(E.a, {
							className: Q.a.duHeader
						}, J._("Popular posts", null, {
							hk: "36DJb4"
						})), a.a.createElement(y.a, null), n && a.a.createElement(v.a, null), a.a.createElement(x.a, b), a.a.createElement(k.a, null), a.a.createElement(C.a, {
							listingKey: this.props.listingKey,
							shortTimer: !0,
							handlePillClick: this.props.refreshFeed
						}), a.a.createElement(O.a, {
							injectChildren: h,
							noPostsComponent: this.renderEmptySubreddit,
							key: "listing",
							listingKey: c,
							listingName: K.b,
							listingViewed: this.onListingViewed,
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: f
					})
				}
			}
			t.default = Z(ne(Object(S.c)(oe)))
		},
		"./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = n("./src/reddit/selectors/subreddit.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const l = Object(s.a)(c.a, (e, {
					listingName: t
				}) => {
					const n = Object(a.vb)(e);
					if (!n) return !1;
					let s;
					if (-1 === [o.R, "r/popular"].indexOf(t)) {
						const r = t.replace(/^r\//, ""),
							o = Object(i.D)(e, r),
							a = n.subreddit[o];
						if (!a) return !1;
						s = a
					} else s = n;
					if (!s.rpanDuDismissalTime) return !1;
					return new Date(s.rpanDuDismissalTime).getTime() > Date.now() - 30 * r.z
				}, (e, {
					listingName: t
				}) => t, (e, {
					listingName: t
				}) => Object(d.m)(e, {
					subreddit: t
				}), d.k, (e, {
					sort: t
				}) => t, (e, t, n, s, o, i) => i !== r.U.AWARDED && (!!e && (!o.isPermanentlyCanceled && (!t && (!!s && s.show_discovery_unit))))),
				u = Object(s.a)((e, {
					listingName: t
				}) => t, (e, {
					listingName: t
				}) => Object(d.m)(e, {
					subreddit: t
				}), d.l, (e, t, n) => t ? t.discovery_unit_index : o.i)
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, n) {
			"use strict";
			n.d(t, "l", (function() {
				return k
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "h", (function() {
				return A
			})), n.d(t, "k", (function() {
				return L
			})), n.d(t, "c", (function() {
				return D
			})), n.d(t, "f", (function() {
				return F
			})), n.d(t, "a", (function() {
				return U
			})), n.d(t, "j", (function() {
				return M
			})), n.d(t, "b", (function() {
				return q
			})), n.d(t, "e", (function() {
				return W
			})), n.d(t, "g", (function() {
				return V
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				i = n("./src/reddit/models/PublicAccessNetwork/index.ts"),
				a = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = n("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				u = n.n(d)()(e => Object(r.a)(Object(s.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = n("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				h = e => e.publicAccessNetwork.history,
				g = e => e.publicAccessNetwork.history.cursor,
				f = e => e.publicAccessNetwork.history.visitOrder,
				y = e => e.publicAccessNetwork.hlsStreams,
				_ = Object(s.a)(y, e => e.ended),
				x = Object(s.a)(y, e => e.removed),
				v = Object(s.a)(p, _, x, (e, t, n) => {
					const s = t.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const s = n.stream.state,
							r = R(s, i.a.ENDED) ? i.a.ENDED : s,
							o = n.stream.vod_accessible;
						return r === s && !0 === o ? e : {
							...e,
							[t]: {
								...n,
								stream: {
									...n.stream,
									state: r,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return n.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const s = n.stream.state,
							r = R(s, i.a.ENDED) ? i.a.ENDED : s,
							o = n.stream.vod_accessible;
						return r === s && !1 === o ? e : {
							...e,
							[t]: {
								...n,
								stream: {
									...n.stream,
									state: r,
									vod_accessible: !1
								}
							}
						}
					}, s)
				}),
				k = (e, t) => {
					return v(e)[Object(o.g)(t)]
				},
				O = Object(s.a)((e, {
					streamIdFromPath: t
				}) => t, (e, t) => u(t.listingName)(e, t), v, b, a.h, (e, t, n, s, r) => {
					const a = [];
					if (e) {
						const t = Object(o.g)(e);
						n[t] && a.push(t)
					}
					const c = a.concat(t),
						d = [...new Set(c)],
						l = new Set([...s, ...r]);
					return d.filter(e => {
						const t = n[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== i.a.KILLED && t.stream.state !== i.a.PURGED
					})
				}),
				j = Object(s.a)((e, {
					count: t
				}) => t, v, (e, {
					listingName: t,
					streamIdFromPath: n
				}) => O(e, {
					listingName: t,
					streamIdFromPath: n
				}), (e, t, n) => {
					const s = n.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? s.slice(0, e) : s
				}),
				E = Object(s.a)(v, j, (e, t) => {
					const n = t[0];
					if (n) return e[n]
				}),
				N = Object(s.a)(f, (e, {
					related: t,
					streamIdFromPath: n,
					subreddit: s
				}) => j(e, {
					listingName: t || s,
					streamIdFromPath: n
				}), (e, t) => {
					const n = new Set(e),
						s = t.filter(e => !n.has(e));
					if (s.length) return s[0]
				}),
				C = Object(s.a)((e, {
					streamIdFromPath: t
				}) => t, v, (e, {
					related: t,
					streamIdFromPath: n,
					subreddit: s
				}) => j(e, {
					listingName: t || s,
					streamIdFromPath: n
				}), h, (e, t, n, s) => {
					if (!n.length) return;
					const r = n.map(e => t[e]).filter(t => t && t.post.id !== e),
						o = r.find(e => e.stream.state === i.a.IS_LIVE);
					if (o) return o.post.id;
					const a = r.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (s.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return a ? a.post.id : void 0
				}),
				S = Object(r.a)(Object(s.a)(C, v, (e, t) => e ? t[e] : void 0)),
				P = Object(s.a)((e, {
					streamIdFromPath: t
				}) => t ? Object(o.g)(t) : void 0, C, b, a.h, (e, {
					related: t,
					streamIdFromPath: n,
					subreddit: s
				}) => j(e, {
					listingName: t || s,
					streamIdFromPath: n
				}), (e, t, n, s, r) => !e || n.includes(e) || s.includes(e) ? t || r[0] : e),
				w = Object(s.a)(g, f, N, (e, t, n) => e < t.length - 1 ? t[e + 1] : n),
				T = Object(s.a)(g, f, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				I = Object(r.a)(Object(s.a)(P, v, (e, t) => e ? t[e] : void 0)),
				A = Object(r.a)(Object(s.a)(w, v, (e, t) => e ? t[e] : void 0)),
				L = Object(r.a)(Object(s.a)(T, v, (e, t) => e ? t[e] : void 0)),
				D = (Object(r.a)(Object(s.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, v, (e, t) => Object.keys(e).filter(e => !!t[e]).map(n => ({
					...t[n],
					preloadedPreviewUrl: e[n]
				})))), Object(s.a)(P, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				F = Object(s.a)((e, {
					streamIdFromPath: t
				}) => t ? k(e, t) : void 0, e => !e || e.chat_disabled);

			function R(e, t) {
				const n = {
					[i.a.NOT_STARTED]: 0,
					[i.a.PUBLISHED]: 1,
					[i.a.IS_LIVE]: 2,
					[i.a.DISCONNECTED]: 2,
					[i.a.ENDED]: 3,
					[i.a.KILLED]: 4,
					[i.a.PURGED]: 4
				};
				return n[t] >= n[e]
			}
			const B = Object(s.a)(P, h, (e, t) => e && t.timestamps[e] || 0);
			var U;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(U || (U = {}));
			const M = Object(s.a)(P, v, m.b, (e, t, n) => {
					if (n) return U.INTRO;
					const s = e && t[e];
					if (!s) return U.UNAVAILABLE;
					const r = s.stream.state;
					return r === i.a.IS_LIVE || r === i.a.DISCONNECTED ? U.LIVE : r === i.a.ENDED && s.stream.vod_accessible ? U.VOD : U.UNAVAILABLE
				}),
				q = Object(s.a)(I, M, m.b, c.b, c.o, (e, t, n, s, r) => n ? s : e ? t === U.LIVE || t === U.VOD ? e.stream.hls_url : r : void 0),
				W = Object(s.a)(I, M, B, (e, t, n) => e ? t === U.LIVE ? e.broadcast_time : t === U.VOD && n < e.broadcast_time ? n : 0 : 0),
				V = (e, t) => {
					const n = p(e);
					return !!n && n[t] && n[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const i = e => e.publicAccessNetwork.theaterSettings,
				a = Object(s.a)(i, o.n, (e, t) => t && !e.isIntroFinished),
				c = Object(s.a)(i, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + r.a > Date.now()
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/constants/postLayout.ts"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => r.e[Object(o.O)(e, {})] === r.d.Card,
				c = e => Object(i.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: s.Q
				}) === s.lb.Treatment
		},
		"./src/reddit/selectors/live.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = e => e.live.featured,
				r = e => e.live.announcements
		},
		"./src/reddit/selectors/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/reddit/constants/subredditLeaderboard.ts"),
				r = n("./src/reddit/selectors/category.ts");
			const o = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasPreviousPage,
				i = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasNextPage,
				a = (e, t) => t === s.q ? s.p : t === s.m ? s.l : e || s.c,
				c = (e, t) => {
					const n = e.subreddits.rankings,
						s = t && Object(r.f)(e, {
							categoryName: t
						}),
						o = n[a(s && s.id || null, t)];
					return !(!o || !o.length)
				}
		},
		"./src/redditGQL/operations/Frontpage.json": function(e) {
			e.exports = JSON.parse('{"id":"4ae1ac71ddb8"}')
		},
		"./src/redditGQL/operations/GetNearbySubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"26ddd553d11e"}')
		},
		"./src/redditGQL/operations/TopSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"bc611d08f6ef"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Frontpage.e49bbfa63eb50ffc3c75.js.map