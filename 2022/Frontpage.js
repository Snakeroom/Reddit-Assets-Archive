// https://www.redditstatic.com/desktop2x/Frontpage.f85781879be6dc554e28.js
// Retrieved at 7/25/2022, 4:50:04 PM by Reddit Dataminer v1.0.0
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
					var a = [];
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
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, a) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== a[t - 1]
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(e, "resize", this._checkForIntersections, !0), r(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, n.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, c(e, "resize", this._checkForIntersections, !0), c(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, n.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							a = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(n) {
							var r = n.element,
								c = i(r),
								o = this._rootContainsTarget(r),
								l = n.entry,
								d = t && o && this._computeTargetAndRootIntersection(r, a),
								u = n.entry = new s({
									time: e.performance && performance.now && performance.now(),
									target: r,
									boundingClientRect: c,
									rootBounds: a,
									intersectionRect: d
								});
							l ? t && o ? this._hasCrossedThreshold(l, u) && this._queuedEntries.push(u) : l && l.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, n.prototype._computeTargetAndRootIntersection = function(a, s) {
						if ("none" != e.getComputedStyle(a).display) {
							for (var n, r, c, o, d, u, m, p, b = i(a), h = l(a), g = !1; !g;) {
								var f = null,
									v = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == v.display) return;
								if (h == this.root || h == t ? (g = !0, f = s) : h != t.body && h != t.documentElement && "visible" != v.overflow && (f = i(h)), f && (n = f, r = b, c = void 0, o = void 0, d = void 0, u = void 0, m = void 0, p = void 0, c = Math.max(n.top, r.top), o = Math.min(n.bottom, r.bottom), d = Math.max(n.left, r.left), u = Math.min(n.right, r.right), p = o - c, !(b = (m = u - d) >= 0 && p >= 0 && {
										top: c,
										bottom: o,
										left: d,
										right: u,
										width: m,
										height: p
									}))) break;
								h = l(h)
							}
							return b
						}
					}, n.prototype._getRootRect = function() {
						var e;
						if (this.root) e = i(this.root);
						else {
							var a = t.documentElement,
								s = t.body;
							e = {
								top: 0,
								left: 0,
								right: a.clientWidth || s.clientWidth,
								width: a.clientWidth || s.clientWidth,
								bottom: a.clientHeight || s.clientHeight,
								height: a.clientHeight || s.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, n.prototype._expandRectByRootMargin = function(e) {
						var t = this._rootMarginValues.map((function(t, a) {
								return "px" == t.unit ? t.value : t.value * (a % 2 ? e.width : e.height) / 100
							})),
							a = {
								top: e.top - t[0],
								right: e.right + t[1],
								bottom: e.bottom + t[2],
								left: e.left - t[3]
							};
						return a.width = a.right - a.left, a.height = a.bottom - a.top, a
					}, n.prototype._hasCrossedThreshold = function(e, t) {
						var a = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							s = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (a !== s)
							for (var n = 0; n < this.thresholds.length; n++) {
								var r = this.thresholds[n];
								if (r == a || r == s || r < a != r < s) return !0
							}
					}, n.prototype._rootIsInDom = function() {
						return !this.root || o(t, this.root)
					}, n.prototype._rootContainsTarget = function(e) {
						return o(this.root || t, e)
					}, n.prototype._registerInstance = function() {
						a.indexOf(this) < 0 && a.push(this)
					}, n.prototype._unregisterInstance = function() {
						var e = a.indexOf(this); - 1 != e && a.splice(e, 1)
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
						a = t.width * t.height,
						s = this.intersectionRect,
						n = s.width * s.height;
					this.intersectionRatio = a ? n / a : this.isIntersecting ? 1 : 0
				}

				function n(e, t) {
					var a, s, n, r = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (a = this._checkForIntersections.bind(this), s = this.THROTTLE_TIMEOUT, n = null, function() {
						n || (n = setTimeout((function() {
							a(), n = null
						}), s))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function r(e, t, a, s) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, a, s || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, a)
				}

				function c(e, t, a, s) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, a, s || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, a)
				}

				function i(e) {
					var t;
					try {
						t = e.getBoundingClientRect()
					} catch (a) {}
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

				function o(e, t) {
					for (var a = t; a;) {
						if (a == e) return !0;
						a = l(a)
					}
					return !1
				}

				function l(e) {
					var t = e.parentNode;
					return t && 11 == t.nodeType && t.host ? t.host : t
				}
			}(window, document)
		},
		"./node_modules/lodash/_arraySampleSize.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_baseClamp.js"),
				n = a("./node_modules/lodash/_copyArray.js"),
				r = a("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, t) {
				return r(n(e), s(t, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, a) {
				return e == e && (void 0 !== a && (e = e <= a ? e : a), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_baseClamp.js"),
				n = a("./node_modules/lodash/_shuffleSelf.js"),
				r = a("./node_modules/lodash/values.js");
			e.exports = function(e, t) {
				var a = r(e);
				return n(a, s(t, 0, a.length))
			}
		},
		"./node_modules/lodash/random.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_baseRandom.js"),
				n = a("./node_modules/lodash/_isIterateeCall.js"),
				r = a("./node_modules/lodash/toFinite.js"),
				c = parseFloat,
				i = Math.min,
				o = Math.random;
			e.exports = function(e, t, a) {
				if (a && "boolean" != typeof a && n(e, t, a) && (t = a = void 0), void 0 === a && ("boolean" == typeof t ? (a = t, t = void 0) : "boolean" == typeof e && (a = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = r(e), void 0 === t ? (t = e, e = 0) : t = r(t)), e > t) {
					var l = e;
					e = t, t = l
				}
				if (a || e % 1 || t % 1) {
					var d = o();
					return i(e + d * (t - e + c("1e-" + ((d + "").length - 1))), t)
				}
				return s(e, t)
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_arraySampleSize.js"),
				n = a("./node_modules/lodash/_baseSampleSize.js"),
				r = a("./node_modules/lodash/isArray.js"),
				c = a("./node_modules/lodash/_isIterateeCall.js"),
				i = a("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, a) {
				return t = (a ? c(e, t, a) : void 0 === t) ? 1 : i(t), (r(e) ? s : n)(e, t)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_baseTimes.js"),
				n = a("./node_modules/lodash/_castFunction.js"),
				r = a("./node_modules/lodash/toInteger.js"),
				c = 9007199254740991,
				i = 4294967295,
				o = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > c) return [];
				var a = i,
					l = o(e, i);
				t = n(t), e -= i;
				for (var d = s(l, t); ++a < e;) t(a);
				return d
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, a, s) {
				var n = a ? a.call(s, e, t) : void 0;
				if (void 0 !== n) return !!n;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var r = Object.keys(e),
					c = Object.keys(t);
				if (r.length !== c.length) return !1;
				for (var i = Object.prototype.hasOwnProperty.bind(t), o = 0; o < r.length; o++) {
					var l = r[o];
					if (!i(l)) return !1;
					var d = e[l],
						u = t[l];
					if (!1 === (n = a ? a.call(s, d, u, l) : void 0) || void 0 === n && d !== u) return !1
				}
				return !0
			}
		},
		"./src/lib/promo/withShowSignupUpsell.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return f
			}));
			var s = a("./node_modules/react/index.js");

			function n() {
				return window
			}
			var r = a("./node_modules/lodash/debounce.js"),
				c = a.n(r),
				i = a("./src/reddit/constants/elementIds.ts"),
				o = a("./src/reddit/constants/experiments.ts"),
				l = a("./src/reddit/hooks/usePromoContext.ts"),
				d = a("./src/reddit/constants/promo.ts"),
				u = a("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts");
			var m = function() {
					const e = Object(u.a)(o.Ec.Bottom_cell),
						t = Object(u.a)(o.Ec.Bottom_cell_dismissible),
						a = Object(u.a)(o.Ec.Bottom_cell_dismissible_immediate_trigger),
						s = Object(u.a)(o.Ec.Bottom_cell_signup_upsell_copy),
						n = Object(u.a)(o.Ec.Bottom_cell_surprise_install_copy),
						r = Object(u.a)(o.Ec.Bottom_sheet);
					return e || s || n ? d.b.SignupUpsellCell : t || a ? d.b.SignupUpsellCellDismissible : r ? d.b.SignupUpsellBottomSheet : null
				},
				p = a("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const b = 250,
				h = 1e3;

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}

			function f(e) {
				const t = e.displayName || e.name || "Component";

				function a(t) {
					const a = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b;
						const {
							showPromo: t
						} = Object(l.a)(), a = m(), r = Object(p.a)(a), d = Object(u.a)(o.Ec.Bottom_cell_dismissible_immediate_trigger);
						return s.useMemo(() => c()(() => {
							if (!r && a) {
								const e = document.getElementById(i.e),
									s = e ? e.scrollTop : n().scrollY,
									r = n().innerHeight,
									c = r / 3,
									o = 2 * r;
								s >= (d ? c : o) && t(a)
							}
						}, e, {
							maxWait: h
						}), [d, r, a, t, e])
					}();
					return s.createElement(e, g({
						showSignupUpsell: a
					}, t))
				}
				return a.displayName = `withShowSignupUpsell(${t})`, a
			}
		},
		"./src/reddit/actions/economics/marketplace/constants.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return s
			})), a.d(t, "a", (function() {
				return n
			}));
			const s = "ECON__MARKETPLACE_ITEM_CLAIMED",
				n = "ECON__MARKETPLACE_ITEMS_OUT_OF_STOCK"
		},
		"./src/reddit/actions/frontpage/index.ts": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "frontpagePending", (function() {
				return je
			})), a.d(t, "frontpageLoaded", (function() {
				return Ce
			})), a.d(t, "frontpageFailed", (function() {
				return Ae
			})), a.d(t, "frontpageDataRequested", (function() {
				return Se
			})), a.d(t, "frontpageRequestedHelper", (function() {
				return Ie
			})), a.d(t, "frontpageRequested", (function() {
				return we
			})), a.d(t, "frontpageReloaded", (function() {
				return Me
			})), a.d(t, "morePostsPending", (function() {
				return Le
			})), a.d(t, "morePostsLoaded", (function() {
				return Be
			})), a.d(t, "morePostsFailed", (function() {
				return Fe
			})), a.d(t, "morePostsRequested", (function() {
				return Re
			})), a.d(t, "refreshFeed", (function() {
				return De
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/lodash/pick.js"),
				r = a.n(n),
				c = a("./src/lib/getParsedUserAgent/index.ts"),
				i = a("./src/reddit/actions/focusedVerticals/index.ts"),
				o = a("./src/lib/base64/index.ts"),
				l = a("./src/lib/constants/index.ts"),
				d = a("./src/lib/env/index.ts"),
				u = a("./src/lib/makeGqlRequest/index.ts"),
				m = a("./src/lib/performanceTimings/index.tsx"),
				p = a("./src/lib/sentry/index.ts"),
				b = a("./src/reddit/constants/experiments.ts"),
				h = a("./src/reddit/constants/graphql.ts"),
				g = a("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				f = a("./src/reddit/models/Live/index.ts"),
				v = a("./src/reddit/models/Onboarding/index.ts"),
				_ = a("./src/reddit/models/Post/index.ts"),
				x = a("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				E = a("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				y = a("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				k = a("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				O = a("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				N = a("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				j = a("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				C = a("./src/reddit/models/FeedElement/index.ts");

			function A(e) {
				return e.__typename === C.a.FreeNftFeedElement
			}
			var S = a("./src/reddit/models/NotificationInbox/index.ts"),
				I = a("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				P = a("./src/reddit/selectors/experiments/inAppNotification.ts"),
				w = a("./src/reddit/selectors/experiments/loggedOutOneFeed.ts"),
				T = a("./src/reddit/selectors/experiments/onboarding.ts"),
				M = a("./src/reddit/selectors/platform.ts"),
				L = a("./src/reddit/selectors/user.ts"),
				B = a("./src/redditGQL/operations/Frontpage.json"),
				F = a("./src/redditGQL/types.ts"),
				R = a("./src/lib/ads/session-signals.ts"),
				D = a("./src/lib/initializeClient/installReducer.ts"),
				Z = a("./src/reddit/reducers/features/marketplace/index.ts");
			Object(D.a)({
				features: {
					marketplace: Z.a
				}
			});
			const U = (e, t) => {
					var a, s;
					const {
						after: n,
						dist: r,
						isMobile: c,
						layout: i,
						limit: l,
						sort: d,
						t: u,
						correlationId: m
					} = t, p = Object(T.c)(e), f = Object(L.Z)(e) || Object(L.Q)(e), v = Object(P.a)(e), _ = Object(M.q)(e), x = Object(w.a)(e), {
						numberOfAdsSeen: E,
						numberOfPostsSeen: y
					} = Object(R.a)(), k = {
						adContext: {
							layout: i ? i.toUpperCase() : h.a.Card,
							reddaid: e.user.reddaid,
							distance: r,
							clientSignalSessionData: {
								adsSeenCount: E,
								totalPostsSeenCount: y
							}
						},
						feedRankingContext: {
							servingId: m
						},
						forceGeopopular: !0,
						includeCommunityDUs: !1,
						includeInterestTopics: !!p && !Object(b.Uf)(p),
						includeFeaturedAnnouncements: !0,
						includeLiveEvents: !0,
						includeIdentity: f && !(null === (s = null === (a = e.user.account) || void 0 === a ? void 0 : a.karma) || void 0 === s ? void 0 : s.total),
						includePostRecommendations: f || x,
						includeFreeMarketplaceElement: Object(I.a)(e),
						includeSubredditQuestions: f,
						recentPostIds: e.posts.recent,
						notificationContext: {
							variant: null == v ? void 0 : v.toLowerCase()
						}
					};
					return x ? (k.sort = F.x.Best, k.feedRankingContext.variant = Object(w.b)(e)) : d && (k.sort = d.toUpperCase()), u && (k.range = u.toUpperCase()), c ? k.pageSize = Object(g.a)(i) : l && (k.pageSize = l), _ && _.ad && (k.forceAds = {
						ad: _.ad
					}), n && (k.after = Object(o.a)(n)), k
				},
				q = async (e, t, a, s) => {
					const n = Date.now(),
						r = await ((e, t) => Object(u.a)(e, {
							...B,
							variables: t
						}, {
							traceRequestName: "get_frontpage"
						}))(e, t),
						c = Date.now();
					let i;
					try {
						const e = Date.now();
						i = (e => {
							let {
								trendingSubreddits: t = [],
								identity: a,
								home: s,
								featuredAnnouncements: n,
								recentPosts: r = [],
								liveBarContent: c
							} = e;
							var i, o;
							const l = [],
								u = [];
							let m, b, h, g;
							const C = {
									postIds: [],
									postInstances: {},
									posts: {},
									postFlair: {},
									profiles: {},
									subreddits: {}
								},
								I = e => {
									if (C.posts[e.id]) return e.id;
									const t = Object(y.f)(e);
									C.posts[t.id] = t;
									const {
										crosspostRoot: a
									} = e;
									a && a.type === _.a.Post && a.postInfo && I(a.postInfo);
									let s = t.id;
									if (Object(_.l)(e)) C.profiles[e.profile.id] || (C.profiles[e.profile.id] = Object(O.a)(e.profile));
									else if (Object(_.n)(e)) C.subreddits[e.subreddit.id] || (C.subreddits[e.subreddit.id] = Object(N.a)(e.subreddit)), C.postFlair[e.subreddit.id] || (C.postFlair[e.subreddit.id] = Object(E.a)(e.subreddit));
									else if (Object(_.h)(e)) {
										const a = Object(y.b)(e);
										if (!a) return null;
										s = a, C.posts[a] = {
											...t,
											id: a,
											permalink: `${t.permalink}?instanceId=${encodeURIComponent(a)}`
										}, C.posts[t.id] || (C.posts[t.id] = {
											...t,
											events: []
										}), C.postInstances[e.id] || (C.postInstances[e.id] = []), C.postInstances[e.id].push(a)
									}
									return s
								};
							for (const d of t) {
								const e = Object(N.a)(d);
								C.subreddits[e.id] = e, l.push(e.id)
							}
							for (const [E, {
									node: k
								}] of s.elements.edges.entries())
								if (Object(_.k)(k)) {
									const e = I(k);
									e && C.postIds.push(e)
								} else if (Object(_.m)(k)) {
								if (!k.recommendationContext || !k.postInfo) {
									const e = "Received empty PostRecommendation element when processing frontpage data.";
									Object(d.b)() || console.warn(e), p.c.captureMessage(e);
									continue
								}
								const {
									content: e,
									subreddit: t,
									typeIdentifier: a
								} = k.recommendationContext;
								if (k.postInfo && (null == e ? void 0 : e.richtext)) {
									const s = I(k.postInfo);
									s && (C.postIds.push(s), C.posts[s].recommendationContext = {
										content: Object(y.d)(e.richtext),
										source: {
											source: null == a ? void 0 : a.toLowerCase(),
											subredditId: null == t ? void 0 : t.id,
											subredditName: null == t ? void 0 : t.prefixedName
										}
									})
								}
							} else if (Object(f.c)(k) && !m) m = k;
							else if (Object(v.g)(k)) {
								const e = null === (i = null == k ? void 0 : k.interestTopicRecommendations) || void 0 === i ? void 0 : i.recommendationTopics;
								if (e) {
									const t = Object(x.a)(e);
									t.topics.length && (h = {
										interests: t,
										index: E
									})
								}
							} else if (A(k) && !b) b = {
								element: k,
								index: s.elements.edges.findIndex(e => e.node === k)
							};
							else if (Object(S.d)(k) && (null === (o = null == k ? void 0 : k.notifications) || void 0 === o ? void 0 : o.length)) g = {
								notifications: k.notifications,
								position: E,
								id: k.id
							};
							else {
								const e = `Received unhandled element type when processing frontpage data: "${k.__typename}"`;
								Object(d.b)() || console.warn(e), p.c.captureMessage(e)
							}
							for (const d of r) {
								if (!d) continue;
								const e = I(d);
								e && u.push(e)
							}
							const P = C.postIds.length - 1,
								w = P >= 0 ? C.postIds[P] : "",
								T = s.elements.dist,
								M = s.elements.geoFilter;
							return {
								...C,
								account: a && Object(j.a)(a) || null,
								featuredLiveThread: m,
								marketplaceFeedElement: b,
								interestTopicRecommendations: h,
								announcements: n,
								notifications: g,
								liveBarContent: c,
								preferences: a && a.preferences && Object(k.a)(a.preferences, a.interactions) || null,
								...0 !== l.length && {
									trendingSubredditIds: l
								},
								...0 !== u.length && {
									recentPostIds: u
								},
								token: w,
								...null !== T && {
									dist: T
								},
								...null !== M && {
									geoFilter: M
								}
							}
						})(r.body.data);
						const t = Date.now(),
							o = [{
								duration: c - n,
								logKeyType: m.a.gqlFetchTiming
							}, {
								duration: t - e,
								logKeyType: m.a.gqlNormalizationTiming
							}];
						Object(m.h)({
							name: l.r.FRONTPAGE,
							isLoggedIn: a,
							metrics: o,
							statsdPathsForExperiments: s
						})
					} catch (o) {
						const e = "Error normalizing front page posts";
						Object(d.b)() || console.error(e, o), p.c.captureException(o)
					}
					return {
						...r,
						body: i
					}
				};
			var V = a("./src/lib/pageTitle/index.ts"),
				W = a("./src/lib/pageTitle/helpers.ts"),
				H = a("./src/reddit/actions/login.ts"),
				G = a("./src/reddit/actions/meta.ts"),
				K = a("./src/reddit/actions/platform.ts"),
				z = a("./src/reddit/actions/toaster.ts"),
				Q = a("./src/reddit/constants/history.ts"),
				X = a("./src/reddit/constants/page.ts"),
				J = a("./src/reddit/constants/parameters.ts"),
				Y = a("./src/reddit/constants/postLayout.ts"),
				$ = a("./src/reddit/contexts/PageLayer/index.tsx"),
				ee = a("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				te = a("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				ae = a("./src/reddit/models/Toast/index.ts"),
				se = a("./src/reddit/selectors/experiments/countrySites.ts"),
				ne = a("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				re = a("./src/reddit/selectors/frontpage.ts"),
				ce = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				ie = a("./src/reddit/selectors/runTimeEnvVars.ts"),
				oe = a("./src/lib/makeActionCreator/index.ts"),
				le = a("./src/lib/makeListingKey/index.ts"),
				de = a("./src/reddit/actions/ads/index.ts"),
				ue = a("./src/reddit/helpers/chooseVariant/index.ts"),
				me = a("./src/reddit/helpers/counters/loggedOutOneFeed.ts"),
				pe = a("./src/reddit/helpers/trackers/feed.ts"),
				be = a("./src/reddit/models/LoggedOutOneFeed/index.ts"),
				he = a("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				ge = a("./src/reddit/actions/seo/linksModule.ts"),
				fe = a("./src/reddit/selectors/seo/linksModule.ts"),
				ve = a("./src/reddit/actions/publicAccessNetwork/api.ts"),
				_e = a("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				xe = a("./src/lib/sample/index.ts"),
				Ee = a("./src/reddit/actions/liveBar/index.ts"),
				ye = a("./src/reddit/helpers/filterListingResponse/index.ts"),
				ke = a("./src/reddit/actions/frontpage/constants.ts"),
				Oe = a("./node_modules/uuid/v4.js"),
				Ne = a.n(Oe);
			const je = Object(oe.a)(ke.c),
				Ce = Object(oe.a)(ke.b),
				Ae = Object(oe.a)(ke.a),
				Se = (e, t) => async (a, n, r) => {
					var i, o, l, d, u, p;
					const b = n();
					if (b.listings.postOrder.api.pending[e]) return;
					const h = Y.e[Object($.S)(b, {})];
					t.isMobile = Object(c.e)(b.meta.userAgent), t.recentPostIds = b.posts.recent, t.layout = h, t.useMockData = !!b.platform.currentPage && (!!b.platform.currentPage.queryParams.useMockData && Object(ie.b)(b)), a(je({
						key: e
					})); {
						const e = b.platform.currentPage,
							a = e && e.url;
						a && (t.clickUrl = a)
					}
					const g = Ne()();
					t.correlationId = g;
					const f = null === (o = null === (i = Object(M.b)(b)) || void 0 === i ? void 0 : i.routeMatch) || void 0 === o ? void 0 : o.route.chunk,
						v = Object(L.Q)(b),
						_ = await Object(m.i)(() => q(r.gqlContext(), U(b, t), Object(L.Z)(b), t.statsdPathsForExperiments), {
							name: "fetchFrontpageData",
							isLoggedIn: v,
							page: f
						});
					a(Object(K.n)(_.status));
					const x = `error-${e}`;
					if (_.ok && _.body) {
						const s = _.body;
						a(Ce({
							key: e,
							meta: b.meta,
							correlationId: g,
							...s
						})), a(z.g(x)), s.geoFilter && a(Object(G.k)(s.geoFilter)), s.liveBarContent && a(Object(Ee.b)(null !== (d = null === (l = s.liveBarContent) || void 0 === l ? void 0 : l.posts) && void 0 !== d ? d : [])), a(Object(de.b)(he.a.FRONTPAGE));
						const r = null === (p = null === (u = Object(M.b)(b)) || void 0 === u ? void 0 : u.locationState) || void 0 === p ? void 0 : p[Q.b.FeedLoadReason];
						Object(pe.b)(t.isRefresh ? Q.a.UserRefresh : null != r ? r : Q.a.InitialLoad)(n())
					} else {
						if (a(Ae({
								error: _.error,
								key: e,
								..._.body
							})), a(z.f({
								id: x,
								kind: ae.b.Error,
								text: s.fbt._("Sorry, we couldn't load posts for this page.", null, {
									hk: "36ypKx"
								}),
								buttonText: s.fbt._("Retry", null, {
									hk: "1XMjgA"
								}),
								buttonAction: Se(e, t)
							})), Object(xe.a)(b, {
								rate: 14
							})) {
							const e = Object(w.a)(b);
							Object(me.a)(_.ok ? be.a.ParseError : be.a.XhrError, e ? be.b.OneFeed : v ? be.b.LoggedIn : be.b.Popular)
						}
						const r = _.error;
						Object(pe.a)(r ? `${_.status||"000"}: ${r.type}` : "000: UNKNOWN_ERROR")(n())
					}
				}, Ie = (e, t) => async (a, s) => {
					var n;
					const c = s(),
						i = Object(re.a)(c),
						{
							sort: o = i
						} = e.params,
						d = Object(le.a)(X.b, o, e.queryParams),
						u = c.listings.postOrder.ids[d],
						m = c.listings.postOrder.api.error[d],
						p = c.listings.postOrder.api.pending[d],
						b = Object(se.b)(c),
						h = J.C in e.queryParams && e.queryParams[J.C].toUpperCase() || "",
						g = h in l.ic && l.ic[h],
						f = V.e();
					if (p || u && !m && !t) return void(u && (a(K.m({
						title: b ? Object(W.a)(c, f) : f
					})), (null === (n = c.listings.postOrder.correlationIds) || void 0 === n ? void 0 : n[d]) && a(K.o({
						correlationId: c.listings.postOrder.correlationIds[d]
					})), c.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						a(Object(de.b)(he.a.FRONTPAGE))
					})));
					const v = Object(ee.a)(c),
						_ = Object(ee.b)(v),
						x = [Object(ee.c)(v)];
					await a(Se(d, {
						...r()(e.queryParams, J.k),
						...r()(e.queryParams, J.j),
						limit: _,
						sort: o,
						statsdPathsForExperiments: x,
						t: Object(te.a)(o, g)
					})), a(K.m({
						title: b ? Object(W.a)(c, f) : f
					})), Object(ue.c)(c, {
						experimentEligibilitySelector: ue.a,
						experimentName: "redesign_aa"
					});
					const E = Object(ne.a)(c, {});
					Object(ne.e)(E) && a(Object(H.openRegisterModal)())
				}, Pe = () => async (e, t) => {
					var a, s;
					const n = t();
					if (Object(fe.a)(n)) return;
					const r = null === (s = null === (a = Object(M.b)(t())) || void 0 === a ? void 0 : a.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
						c = Object(L.Q)(n);
					return Object(m.i)(() => e(Object(ge.d)()), {
						name: "frontpageLinksRequested",
						page: r,
						isLoggedIn: c
					})
				}, we = (e, t) => async a => {
					await Promise.all([a(Object(i.b)()), a(Ie(e, t)), a(Pe()), a(Object(ve.c)(_e.R))])
				}, Te = Object(oe.a)(ke.d), Me = e => async (t, a) => {
					const s = a(),
						n = s.platform.currentPage.routeMatch.match;
					Object(ce.o)(s) || Object(ce.u)(s) || (e || t(Te()), await t(we(n, !0)))
				}, Le = Object(oe.a)(ke.g), Be = Object(oe.a)(ke.f), Fe = Object(oe.a)(ke.e), Re = e => async (t, a, s) => {
					let {
						gqlContext: n
					} = s;
					const i = a(),
						o = Object(re.a)(i),
						{
							sort: d = o
						} = e,
						u = i.platform.currentPage ? i.platform.currentPage.queryParams : {},
						m = Object(le.a)(X.b, d, u),
						p = i.listings.postOrder.loadMore[m],
						b = u[J.C] ? u[J.C].toUpperCase() : "",
						h = b in l.ic && l.ic[b];
					if (p) {
						const e = i.listings.postOrder.api.pending[m],
							s = i.listings.postOrder.fetchedTokens,
							o = !(!s[m] || !s[m][p.token]);
						if (!e && !o) {
							t(Le({
								key: m,
								fetchedToken: p.token
							}));
							const e = !!i.platform.currentPage && !!i.platform.currentPage.queryParams.useMockData,
								s = Object(ee.a)(i),
								o = Y.a,
								l = [Object(ee.c)(s)],
								b = {
									after: p.token,
									dist: p.dist,
									...r()(u, J.k),
									isMobile: Object(c.e)(i.meta.userAgent),
									limit: o,
									sort: d,
									t: Object(te.a)(d, h),
									layout: Y.e[Object($.S)(i, {})],
									useMockData: e
								}; {
								const e = i.platform.lastPage,
									t = e && e.url;
								t && (b.clickUrl = t)
							}
							b.correlationId = i.listings.postOrder.correlationIds[m];
							const g = () => q(n(), U(i, b), Object(L.Z)(i), l),
								f = await g(),
								v = {
									...f.body,
									...Object(ye.a)(i, m, f.body)
								};
							if (f.ok) t(Be({
								key: m,
								fetchedToken: p.token,
								meta: i.meta,
								...v
							})), Object(pe.b)(Q.a.NextPageLoad)(a());
							else {
								t(Fe({
									key: m,
									error: f.error,
									fetchedToken: p.token,
									...v
								}));
								const e = f.error;
								Object(pe.a)(e ? `${f.status||"000"}: ${e.type}` : "000: UNKNOWN_ERROR")(a())
							}
						}
					}
				}, De = e => async (t, a) => {
					const s = a(),
						n = Object(re.a)(s),
						{
							sort: r = n
						} = e,
						c = s.platform.currentPage ? s.platform.currentPage.queryParams : {},
						i = Object(le.a)(X.b, r, c),
						o = c[J.C] ? c[J.C].toUpperCase() : "",
						d = o in l.ic && l.ic[o],
						u = Object(ee.a)(s),
						m = Object(ee.b)(u);
					await t(Se(i, {
						limit: m,
						sort: r,
						t: Object(te.a)(r, d),
						isRefresh: !0
					}))
				}
		},
		"./src/reddit/actions/liveBar/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			})), a.d(t, "b", (function() {
				return i
			}));
			var s = a("./src/lib/initializeClient/installReducer.ts"),
				n = a("./src/lib/makeActionCreator/index.ts"),
				r = a("./src/reddit/reducers/features/liveBar/index.ts");
			const c = "LIVEBAR__SET_LIVEBAR_POSTS";
			Object(s.a)({
				features: {
					liveBar: r.a
				}
			});
			const i = Object(n.a)(c)
		},
		"./src/reddit/actions/subreddit/topSubreddits.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return m
			})), a.d(t, "b", (function() {
				return h
			}));
			var s = a("./src/lib/makeActionCreator/index.ts"),
				n = a("./src/reddit/actions/subreddit/constants.ts"),
				r = a("./src/reddit/constants/subredditLeaderboard.ts"),
				c = a("./src/reddit/endpoints/subreddit/local.ts"),
				i = a("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				o = a("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const l = Object(s.a)(n.m),
				d = Object(s.a)(n.l),
				u = Object(s.a)(n.k),
				m = Object(s.a)(n.a),
				p = Object(s.a)(n.b),
				b = Object(s.a)(n.c),
				h = (e, t) => async (a, s, n) => {
					let {
						gqlContext: h
					} = n;
					a(l());
					const g = t === r.l ? async function() {
						const t = await Object(c.a)(h(), e);
						if (!t.ok) {
							const e = t.error;
							return a(u({
								error: e
							})), null
						}
						const s = t.body,
							n = s && s.data && s.data.nearbySubreddits;
						return Object(o.a)(n)
					}: async function() {
						const t = await Object(i.a)(h(), e);
						if (!t.ok) {
							const e = t.error;
							return void a(u({
								error: e
							}))
						}
						const s = t.body,
							n = s && s.data && s.data.subredditLeaderboard;
						return Object(o.b)(n)
					}, f = await g();
					if (!f) return;
					const {
						pageInfo: v,
						rankings: _,
						subreddits: x
					} = f;
					a(m({
						subreddits: x
					})), a(p({
						categoryRankingsKey: t,
						rankings: _
					})), a(b({
						categoryRankingsKey: t,
						pageInfo: v
					})), a(d())
				}
		},
		"./src/reddit/components/AvatarListingBanner/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1DFor3CupL1NpU5U9yYu0Z",
				headerImage: "XZQUJKQDzKTSFlqpyBj10",
				achievementsBannerWrapper: "uGTPXBCdzdPwix1ay2sWY",
				achievementOutfitImage: "_1RlmFdc5gke9u4LO4TjmuM",
				close: "_1GyIL9LKro75RzYn_IlvQF",
				closeLight: "jtQKtjGU0teCJdT1Z_hfr",
				dismissedContainer: "_2aLJmdz-HYUmNuVckIVF_y",
				dismissedText: "KReLO63V_QwsDzLElHkcj",
				legalTextContainer: "KlPvpZsth8DKV7CuatHHb",
				learnMoreLink: "_9wxj9ao63yiSI6HfOnMp3",
				contentWrapper: "_1WnhRjborPdCcpRzrvhhXN",
				copyText: "Xr4B8uvVmI0edJhyfdp0J",
				copyTextTitle: "_3PKayJIvTXt9BOUZjLfsce",
				copyTextHeading: "_3SlsGP84AQPEq7VzMEEYYE",
				copyTextDescription: "_3KD7kX_-GvaYAlt9KBfnfq",
				continueButton: "_3AFwLHLiB-xnSMRF9K5_KJ",
				achievementAvatar: "ix7AJIbbl_A32KVlhfEqS"
			}
		},
		"./src/reddit/components/AvatarListingBanner/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./src/config.ts"),
				n = a("./src/lib/classNames/index.ts"),
				r = a("./node_modules/react/index.js"),
				c = a.n(r),
				i = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/reddit/actions/snoovatarModal.ts"),
				l = a("./src/reddit/constants/avatars.ts"),
				d = a("./src/reddit/constants/banners.ts"),
				u = a("./src/reddit/constants/page.ts"),
				m = a("./src/reddit/controls/Button/index.tsx"),
				p = a("./src/reddit/helpers/localStorage/index.ts"),
				b = a("./src/reddit/helpers/trackers/snoovatar.ts"),
				h = a("./src/reddit/hooks/useTracking.ts"),
				g = a("./src/reddit/icons/svgs/Close/index.tsx"),
				f = a("./src/reddit/selectors/experiments/econ/avatarBanner.ts"),
				v = a("./src/reddit/components/AvatarListingBanner/index.m.less"),
				_ = a.n(v);
			var x = e => c.a.createElement("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 380 600",
					className: Object(n.a)(_.a.achievementAvatar, e.className)
				}, c.a.createElement("defs", null, c.a.createElement("style", null, ".cls-1{isolation:isolate;}.cls-2{fill:#fff;}.cls-3{opacity:0.3;}.cls-4{opacity:0.5;}.cls-5{fill:#7a9299;}.cls-6{fill:#00ccc0;}.cls-7{fill:#fffffe;}.cls-8{fill:#d7dfe2;}.cls-9{fill:lime;}.cls-10{fill:#fff8b8;}.cls-11{fill:none;}.cls-12{fill:#b8c7cc;}.cls-13{opacity:0.2;}.cls-14{mix - blend - mode:multiply;}.cls-15{fill:#f2f6f7;}.cls-16{fill:#ff4500;}")), c.a.createElement("g", {
					className: "cls-1"
				}, c.a.createElement("g", {
					id: "special"
				}, c.a.createElement("path", {
					className: "cls-2",
					d: "M311.77,182.32c-9.67,8.13-22.79,9.67-29.23,7.32a33.5,33.5,0,0,1-21.16-20.92c-3.85-11.45,2.4-24.48,11.46-32.27,8.13-7,25-11.16,37.58-.3C327.57,151,324.44,171.67,311.77,182.32Z"
				}), c.a.createElement("path", {
					d: "M311.73,182.28a4.75,4.75,0,0,1,1-1.49c.29-.37.67-.75,1-1.24l1.21-1.62a31.24,31.24,0,0,0,4.79-9.72,26.69,26.69,0,0,0,.61-12.25,13.37,13.37,0,0,0-.27-1.43c-.14-.46-.28-.91-.41-1.36s-.27-.87-.39-1.3-.35-.81-.52-1.2a23.46,23.46,0,0,0-1-2.18c-.4-.64-.76-1.23-1.09-1.78a34.09,34.09,0,0,0-4.34-5.25,25,25,0,0,0-2.57-2.34c-.45-.37-.87-.8-1.34-1.12l-1.4-1a10.25,10.25,0,0,0-1.45-.89l-1.49-.82-1.56-.67c-.27-.11-.52-.23-.79-.33l-.81-.24a23.76,23.76,0,0,0-6.7-1.19,28.49,28.49,0,0,0-13.33,2.8,23.93,23.93,0,0,0-5.54,3.57,36.35,36.35,0,0,0-4.58,5,32.53,32.53,0,0,0-6,12.45,21.67,21.67,0,0,0-.48,6.48,19.57,19.57,0,0,0,1.52,6.18,29.6,29.6,0,0,0,7.23,10.7,34.37,34.37,0,0,0,5,3.87,28.92,28.92,0,0,0,2.69,1.53c.46.24.91.45,1.37.65s.95.4,1.25.52l.25.07a15.86,15.86,0,0,0,3.5.91,25.67,25.67,0,0,0,3.83.23,34.89,34.89,0,0,0,7.49-.91,39.88,39.88,0,0,0,6.78-2.22,40.35,40.35,0,0,0,5.81-3.22,24,24,0,0,1-4.8,5.49,31.67,31.67,0,0,1-16.3,7.05,21.12,21.12,0,0,1-8.74-.65l.31.1c-.81-.21-1.28-.38-1.84-.57s-1-.39-1.47-.6a17,17,0,0,1-2.28-1.19,38.32,38.32,0,0,1-14.67-16.35c-.35-.81-.75-1.6-1-2.43l-.84-2.47c-.27-.82-.44-1.72-.65-2.57s-.25-1.74-.38-2.6a28.48,28.48,0,0,1,1-10,39.77,39.77,0,0,1,9.23-16.15l1.57-1.61,1.65-1.51c.58-.48,1.18-.94,1.77-1.41s1.25-.83,1.86-1.24a34.07,34.07,0,0,1,7.94-3.5,32.14,32.14,0,0,1,8.3-1.4,29.41,29.41,0,0,1,8.18.76,29,29,0,0,1,13.64,7.53,35.25,35.25,0,0,1,8.51,11.8,28.63,28.63,0,0,1,2.3,13.5c-.05.52-.11,1.07-.17,1.64a10.89,10.89,0,0,1-.29,1.74,23.56,23.56,0,0,1-1,3.6l-.7,1.81c-.26.6-.59,1.16-.89,1.73a14.46,14.46,0,0,1-.94,1.68l-1.06,1.54-.51.75-.59.68L317,177.86c-.72.83-1.53,1.47-2.17,2.1a18.17,18.17,0,0,1-1.85,1.45C312.41,181.78,312,182.08,311.73,182.28Z"
				}), c.a.createElement("path", {
					d: "M285.77,152.21c-1.19.16-6-4.49-12.24-8.92a85.57,85.57,0,0,0-9.8-6.1,58.44,58.44,0,0,0-8.64-3.77c-4-1.32-8.25-2.54-12.51-3.62a66,66,0,0,0-12.75-2,29.12,29.12,0,0,0-11.66,1.7,19.53,19.53,0,0,0-8.47,6.38c-3.9,5-6.23,11.75-7.68,18.62a121.53,121.53,0,0,0-2.53,20.73c-.05,1.68-.09,3.35-.07,5l0,2.46c0,.72,0,1.44.05,2.15s.18,1.49.29,2.28.23,1.61.34,2.4c.23,1.62.44,3.21.66,4.77.4,3.14.72,6.19.88,9.15.08,1.48.12,2.94.07,4.41a20.52,20.52,0,0,1-.18,2.28c-.14.76-.3,1.9-1,2.26a3.52,3.52,0,0,0-.26-2.15,20.34,20.34,0,0,0-1-2l-2.2-4c-1.52-2.77-3.06-5.72-4.43-8.64q-1-2.19-1.92-4.34a43.59,43.59,0,0,1-1.53-4.29c-.06-.2-.11-.41-.16-.65s-.13-.66-.15-.75c-.06-.34-.11-.67-.17-1-.11-.64-.19-1.26-.25-1.84a18.77,18.77,0,0,1-.08-3,150.55,150.55,0,0,1,2.7-19.22,102.83,102.83,0,0,1,5-17.37,42.28,42.28,0,0,1,9.27-14.57,28,28,0,0,1,6.86-5,30.58,30.58,0,0,1,7.72-2.65,44,44,0,0,1,15.17-.17,76,76,0,0,1,13.49,3.37,78.84,78.84,0,0,1,22.23,11.19,50.55,50.55,0,0,1,9.4,9.17A70.1,70.1,0,0,1,285.77,152.21Z"
				}), c.a.createElement("g", {
					className: "cls-3"
				}, c.a.createElement("ellipse", {
					cx: "190",
					cy: "548.5",
					rx: "77.5",
					ry: "38.75"
				}), c.a.createElement("path", {
					d: "M267.44,548.5a5.55,5.55,0,0,1-.28-1.14c-.06-.28-.08-.6-.16-1s-.18-.76-.28-1.2a24,24,0,0,0-2.64-6.51,32.78,32.78,0,0,0-6.25-7.52,51.16,51.16,0,0,0-9.52-6.76A91.53,91.53,0,0,0,225,515.53a119.68,119.68,0,0,0-20.31-3.09,164.1,164.1,0,0,0-28.37.71,131.52,131.52,0,0,0-28.52,6.32,88.59,88.59,0,0,0-13.28,5.93,50.81,50.81,0,0,0-11.27,8.37,30.52,30.52,0,0,0-4.12,5.21,19.36,19.36,0,0,0-2.36,5.75,16.77,16.77,0,0,0,1.62,11.61,29.69,29.69,0,0,0,7.09,8.51,52.87,52.87,0,0,0,9.7,6.51,97.18,97.18,0,0,0,22.29,8.23,151.89,151.89,0,0,0,46.06,3.53c14.82-1.12,28.87-4.25,40.67-9.77A51.93,51.93,0,0,0,259.38,563c4.07-4.15,6.74-9.25,7-14.48a18.06,18.06,0,0,1-.45,8,27.07,27.07,0,0,1-4.3,8.57c-4,5.52-9.94,10.13-16.08,13.66a87.58,87.58,0,0,1-18.35,7.77,85.14,85.14,0,0,1-14.2,3,161.77,161.77,0,0,1-20.63.88,163.4,163.4,0,0,1-19.86-1.56,141.12,141.12,0,0,1-18.89-3.92c-3-.86-6-1.82-9-2.93a90.17,90.17,0,0,1-8.56-3.65,68.93,68.93,0,0,1-8-4.51,53,53,0,0,1-7.22-5.57,36.34,36.34,0,0,1-5.88-6.92,25.29,25.29,0,0,1-3.52-8.38,21.33,21.33,0,0,1,0-9,25,25,0,0,1,3.43-8.1,42.44,42.44,0,0,1,11.92-11.72A78,78,0,0,1,141,516.63a112,112,0,0,1,14.64-4.78,141.25,141.25,0,0,1,28.9-4.11,147.07,147.07,0,0,1,27.26,1.32,113.79,113.79,0,0,1,24.75,6.29,73.69,73.69,0,0,1,12.07,5.84,52,52,0,0,1,11.4,9.14,32.31,32.31,0,0,1,4.07,5.43,29,29,0,0,1,1.45,2.72,27.13,27.13,0,0,1,1,2.63A21.11,21.11,0,0,1,267.44,548.5Z"
				})), c.a.createElement("g", {
					id: "default"
				}, c.a.createElement("ellipse", {
					className: "cls-2",
					cx: "182.34",
					cy: "463",
					rx: "57.58",
					ry: "25.42"
				}), c.a.createElement("path", {
					d: "M239.89,463c-.11-.27-.14-1.13-.47-2.38a14.66,14.66,0,0,0-2.18-4.59c-2.34-3.47-6.91-6.87-12.28-9.44A75.55,75.55,0,0,0,207.72,441,102.62,102.62,0,0,0,193,439a135.56,135.56,0,0,0-20.59.35,109.46,109.46,0,0,0-20.92,3.9,69,69,0,0,0-10,3.74,40.87,40.87,0,0,0-8.83,5.47,16.73,16.73,0,0,0-5.58,7.74,10.27,10.27,0,0,0,1.43,8.55,22.17,22.17,0,0,0,5.86,5.89,44.87,44.87,0,0,0,7.54,4.25,80.74,80.74,0,0,0,16.64,5.22,127.57,127.57,0,0,0,33.62,2.16c10.79-.72,21-2.71,29.87-6.26a41.64,41.64,0,0,0,11.67-6.8,19,19,0,0,0,4-4.71,12.09,12.09,0,0,0,1.67-5.51,11.23,11.23,0,0,1-.85,5.66,19.07,19.07,0,0,1-3.8,5.7,40.87,40.87,0,0,1-12.39,8.47,77,77,0,0,1-23.56,6.51A130.92,130.92,0,0,1,184,490a135.19,135.19,0,0,1-14.23-.89,101.53,101.53,0,0,1-26.39-6.39,49.66,49.66,0,0,1-11.4-6.33,26.36,26.36,0,0,1-4.64-4.5,15.8,15.8,0,0,1-3-5.73,12.15,12.15,0,0,1,0-6.39,15.67,15.67,0,0,1,2.88-5.54,31.18,31.18,0,0,1,9.21-7.53A62.38,62.38,0,0,1,147,442a90.12,90.12,0,0,1,10.63-2.94,119.73,119.73,0,0,1,20.79-2.5,124.19,124.19,0,0,1,19.55.83,96.11,96.11,0,0,1,17.87,3.85c5.32,1.68,12.5,4.81,17.61,9.32a26.65,26.65,0,0,1,3.33,3.53,18.63,18.63,0,0,1,2.13,3.64A12.71,12.71,0,0,1,239.89,463Z"
				}), c.a.createElement("path", {
					className: "cls-2",
					d: "M124.77,463.37c9,37.25,43.74,56,63.79,54.5,18.52-1.37,41.24-8.94,48.76-28.75,2.67-7.06,3.18-15.46,2-25.75"
				}), c.a.createElement("path", {
					d: "M239.35,463.37a23.21,23.21,0,0,1,.81,4.95,59.62,59.62,0,0,1,.11,10.41,38.45,38.45,0,0,1-2.72,11.78l-1.12,2.62-1.29,2.32c-.2.37-.4.74-.6,1.08l-.66,1-1.18,1.72a41.7,41.7,0,0,1-10,9.53,57.56,57.56,0,0,1-12.84,6.49,77.87,77.87,0,0,1-14,3.62l-3.55.52-3.54.36a37,37,0,0,1-7.23-.17,51.72,51.72,0,0,1-11.9-2.88,67.53,67.53,0,0,1-10.84-5.08,73.4,73.4,0,0,1-17.68-14.38,74.2,74.2,0,0,1-6.54-8.41,77.44,77.44,0,0,1-4.92-8.7,69.86,69.86,0,0,1-5.4-16.61,122.54,122.54,0,0,0,8.06,15.84c1.64,2.69,3.42,5.16,5,7.3l2.21,2.87c.69.85,1.26,1.61,1.72,2.22a68.27,68.27,0,0,0,27.68,21.58,48.86,48.86,0,0,0,15.64,3.82c.65,0,1.3,0,1.94,0s1.28,0,1.92-.07c1.28-.11,2.56-.23,3.83-.37s2.52-.33,3.75-.54,2.46-.43,3.66-.7c9.63-2,18.28-5.76,24.92-11.09a35.51,35.51,0,0,0,11.06-14.06,29.78,29.78,0,0,0,1.94-5.26,57.73,57.73,0,0,0,1.86-12.47C239.58,468.33,239.39,464.59,239.35,463.37Z"
				})), c.a.createElement("g", {
					id: "default-2",
					"data-name": "default"
				}, c.a.createElement("path", {
					className: "cls-2",
					d: "M124.77,465.17c5.8,23.75,18.27,52.94,19.51,54.5-3.34,2.57-6.52,8.2-8.28,11.35-2.44,4.39-3,10-.8,14.51,3.81,7.81,14.16,9.86,22.6,8.13,9.72-2,16.63-7.8,22.46-15.92,4.48-6.27,4.1-13.87,4.54-21.59.41-2.34.38-19.37.38-22.15"
				}), c.a.createElement("path", {
					d: "M185.24,494c.39.46.66,3.34.84,7.41.09,2,.16,4.37.2,6.85,0,1.24,0,2.52,0,3.82s0,2.6-.12,4v.16c-.1,3.19-.06,6.45-.27,9.45a37.64,37.64,0,0,1-1.27,7.84,21.67,21.67,0,0,1-1.4,3.59,18.68,18.68,0,0,1-1,1.74c-.33.55-.67,1-1,1.56a48.75,48.75,0,0,1-4.72,6,35.26,35.26,0,0,1-13.22,9.09,31.73,31.73,0,0,1-16.47,1.86,24,24,0,0,1-8.22-2.87,17.73,17.73,0,0,1-6.43-6.44,17.27,17.27,0,0,1-2.33-8.78,20.84,20.84,0,0,1,1.81-8.54c.27-.64.66-1.36.95-1.9l.89-1.58c.61-1,1.24-2.11,1.92-3.15s1.38-2.08,2.16-3.1c.39-.51.8-1,1.23-1.52l.58-.64h.06v0h0s0,0,0-.08l-.43-1c-.27-.64-.53-1.27-.8-1.9-.5-1.26-1-2.52-1.51-3.76-1-2.5-1.88-5-2.75-7.4-1.73-4.88-3.28-9.63-4.62-14.21a182.69,182.69,0,0,1-5.68-25c2.77,4.39,6.07,10.81,9.05,16.9s5.55,11.87,6.45,15.08c1,3.43,2,6.78,3.05,10.05q.81,2.44,1.65,4.83l.87,2.35.44,1.15.31.76c.13.32.29.62.39.93,0,.86,0,1.78,0,2.34a4.08,4.08,0,0,1-.36,1l-.43,1.16c-.38.36-.8.71-1.14,1.07s-.42.41-.62.64c-.41.45-.8.92-1.19,1.4-.77,1-1.5,2-2.19,3s-1.36,2.1-2,3.18c-.34.56-.62,1-.88,1.54a15.17,15.17,0,0,0-.68,1.55c-1.61,4.23-1.24,9.12,1.39,12.44a12.8,12.8,0,0,0,4.87,3.9,19.86,19.86,0,0,0,6.08,1.72A26.86,26.86,0,0,0,161,551a30.4,30.4,0,0,0,10-5.92,46.76,46.76,0,0,0,7.38-8.4,21,21,0,0,0,3.48-9.27c.51-3.34.61-6.77.9-10.17,0-.33,0-.68.08-1.19a3.27,3.27,0,0,1,.05-.35c.12-.77.21-1.79.31-2.82s.21-2.12.32-3.22c.23-2.21.47-4.48.69-6.6C184.62,498.83,185.06,495.23,185.24,494Z"
				})), c.a.createElement("g", {
					id: "default-3",
					"data-name": "default"
				}, c.a.createElement("path", {
					className: "cls-2",
					d: "M235.18,491.65a63.5,63.5,0,0,0-26.93,5.57A62.24,62.24,0,0,0,187.18,513c4.57,5.6,4.08,11.91,5,18.76-3,5.24-6,12.24-5.4,19.44.89,10.77,7.48,16.83,17.71,17.24,7.85.31,16.58-3.8,21.83-9.86,6-7,8.86-14.58,9.65-24C236.18,520,236.92,507.76,235.18,491.65Z"
				}), c.a.createElement("path", {
					className: "cls-2",
					d: "M187.18,513c4.57,5.6,4.08,11.91,5,18.76-3,5.24-6,12.24-5.4,19.44.89,10.77,7.48,16.83,17.71,17.24,7.85.31,16.58-3.8,21.83-9.86,6-7,8.86-14.58,9.65-24,.21-14.57.95-26.81-.79-42.92"
				}), c.a.createElement("path", {
					d: "M235.24,491.64c.68.58,1.69,6.78,2.16,14s.47,15.46.73,20c.1,2,.2,4.06.31,6.13,0,1.07.11,2.12.1,3.24l-.09,1.73-.13,1.66a41.56,41.56,0,0,1-3.53,13.37,39.08,39.08,0,0,1-3.54,6.15c-.68,1-1.39,1.91-2.13,2.81-.38.46-.81.93-1.21,1.39l-1.3,1.3a34.17,34.17,0,0,1-12.18,7.35,29.47,29.47,0,0,1-6.07,1.42,27.27,27.27,0,0,1-6.32,0,25.06,25.06,0,0,1-6.22-1.54,19.62,19.62,0,0,1-5.64-3.43,18.9,18.9,0,0,1-4.13-5.08,21.8,21.8,0,0,1-2.24-5.79c-.25-1-.39-1.94-.54-2.91s-.21-1.9-.21-2.89a27.18,27.18,0,0,1,.47-5.68,36.23,36.23,0,0,1,3.48-9.87c.38-.74.77-1.46,1.18-2.16.2-.35.4-.69.61-1l.16-.26.07-.13,0,0,.11-.13.11-.13V531a2.68,2.68,0,0,0,0-.63c0-.76,0-1.5-.08-2.24a55.71,55.71,0,0,0-.5-8,17.48,17.48,0,0,0-2.41-6.46,13.48,13.48,0,0,1,5.34,5.69,40.23,40.23,0,0,1,3,8.72l.27,1.06.13.52.07.25c0,.09,0,.15.07.34q.19,1,.39,1.92c0,.08,0,.17,0,.24l-.1.22-.2.43-.42.88a10.62,10.62,0,0,0-.5,1.17c-.12.3-.23.59-.34.89-.22.57-.43,1.14-.63,1.68-.78,2.16-1.35,3.95-1.84,5.15a22.18,22.18,0,0,0-1.71,7.37,19.42,19.42,0,0,0,1,7.29,13.18,13.18,0,0,0,3.94,5.7,15.39,15.39,0,0,0,6.32,3A22.4,22.4,0,0,0,215,564.82a26.54,26.54,0,0,0,10.65-7.94,35.15,35.15,0,0,0,6.11-11A39.46,39.46,0,0,0,233.2,540a49.8,49.8,0,0,0,.65-5.76c0-2,0-3.93,0-5.84s.06-3.83.09-5.7q.15-5.57.29-10.77c.05-3.28.37-7.76.57-11.73S235.19,492.78,235.24,491.64Z"
				})), c.a.createElement("g", {
					className: "cls-4"
				}, c.a.createElement("path", {
					className: "cls-2",
					d: "M166.23,535.73c.27.59-2.06,2.43-2.77,3.4a23.68,23.68,0,0,1-4.73,4.54,21.27,21.27,0,0,1-4.61,2.75,15,15,0,0,1-2.37.81,4.17,4.17,0,0,1-2.48-.08,10.08,10.08,0,0,0,1.34-2.37c.32-.68.8-1.24,1.19-1.3a15.07,15.07,0,0,0,7.11-3.26,45.43,45.43,0,0,1,4.68-3.73A8.13,8.13,0,0,1,166.23,535.73Z"
				})), c.a.createElement("g", {
					className: "cls-4"
				}, c.a.createElement("path", {
					className: "cls-2",
					d: "M223.06,543.4c.59.28-.05,2.8,0,3.87a17.79,17.79,0,0,1-.81,5.7,16,16,0,0,1-1.85,4.31,24.2,24.2,0,0,1-2.27,3c-1.46-1.22-1.86-3.56-1.33-4a11.69,11.69,0,0,0,3.45-5.91,34.07,34.07,0,0,1,1.26-5.05A6.86,6.86,0,0,1,223.06,543.4Z"
				})), c.a.createElement("g", {
					id: "default-4",
					"data-name": "default"
				}, c.a.createElement("path", {
					className: "cls-2",
					d: "M124.88,465.17c5.8,23.75,18.27,52.94,19.5,54.5-3.33,2.57-6.52,8.2-8.27,11.35-2.45,4.39-3,10-.81,14.51,3.82,7.81,14.17,9.86,22.61,8.13,9.72-2,16.63-7.8,22.45-15.92,4.49-6.27,4.1-13.87,4.55-21.59.41-2.34.38-19.37.38-22.15"
				}), c.a.createElement("path", {
					d: "M185.35,494c.38.46.65,3.34.84,7.41.09,2,.16,4.37.2,6.85,0,1.24,0,2.52,0,3.82s0,2.6-.12,4v.16c-.1,3.19-.07,6.45-.28,9.45a37,37,0,0,1-1.27,7.84,20.83,20.83,0,0,1-1.4,3.59c-.27.6-.63,1.16-1,1.74s-.67,1-1,1.56a47.72,47.72,0,0,1-4.71,6,35.3,35.3,0,0,1-13.23,9.09A31.71,31.71,0,0,1,147,557.38a24,24,0,0,1-8.21-2.87,17.75,17.75,0,0,1-6.44-6.44,17.37,17.37,0,0,1-2.33-8.78,21.52,21.52,0,0,1,2.77-10.44l.89-1.58c.61-1,1.24-2.11,1.91-3.15s1.39-2.08,2.17-3.1c.38-.51.8-1,1.22-1.52l.58-.64h.06v0h0s0,0,0-.08l-.42-1c-.27-.64-.54-1.27-.8-1.9l-1.51-3.76c-1-2.5-1.89-5-2.75-7.4-1.73-4.88-3.28-9.63-4.62-14.21a181.22,181.22,0,0,1-5.68-25c2.77,4.39,6.07,10.81,9,16.9s5.55,11.87,6.45,15.08c.95,3.43,2,6.78,3,10.05q.8,2.44,1.65,4.83c.29.79.58,1.57.86,2.35l.45,1.15.31.76c.12.32.29.62.39.93,0,.86,0,1.78,0,2.34a3.65,3.65,0,0,1-.35,1l-.43,1.16c-.38.36-.8.71-1.15,1.07s-.41.41-.61.64c-.41.45-.81.92-1.19,1.4-.77,1-1.5,2-2.19,3s-1.36,2.1-2,3.18c-.34.56-.62,1-.87,1.54a15.26,15.26,0,0,0-.69,1.55c-1.61,4.23-1.24,9.12,1.39,12.44a12.83,12.83,0,0,0,4.88,3.9,19.86,19.86,0,0,0,6.08,1.72A26.8,26.8,0,0,0,161.05,551a30.34,30.34,0,0,0,10-5.92,47.56,47.56,0,0,0,7.38-8.4,20.82,20.82,0,0,0,3.47-9.27c.51-3.34.62-6.77.9-10.17,0-.33.05-.68.09-1.19a3.27,3.27,0,0,1,0-.35c.12-.77.21-1.79.31-2.82s.21-2.12.31-3.22c.24-2.21.47-4.48.69-6.6C184.73,498.83,185.17,495.23,185.35,494Z"
				})), c.a.createElement("g", {
					id: "default-5",
					"data-name": "default"
				}, c.a.createElement("path", {
					className: "cls-2",
					d: "M124.88,463.37c9,37.25,43.74,56,63.78,54.5,18.52-1.37,41.25-8.94,48.76-28.75,2.68-7.06,3.19-15.46,2-25.75"
				}), c.a.createElement("path", {
					d: "M239.46,463.37a23.54,23.54,0,0,1,.8,4.95,58.65,58.65,0,0,1,.11,10.41,38.44,38.44,0,0,1-2.71,11.78l-1.12,2.62-1.29,2.32c-.21.37-.4.74-.6,1.08l-.67,1-1.18,1.72a41.65,41.65,0,0,1-10,9.53,57.77,57.77,0,0,1-12.84,6.49,78,78,0,0,1-14,3.62l-3.54.52-3.55.36a36.9,36.9,0,0,1-7.22-.17,51.72,51.72,0,0,1-11.9-2.88,67.53,67.53,0,0,1-10.84-5.08,73.2,73.2,0,0,1-17.68-14.38,74.2,74.2,0,0,1-6.54-8.41,75.9,75.9,0,0,1-4.92-8.7,70.37,70.37,0,0,1-5.41-16.61,122.72,122.72,0,0,0,8.07,15.84c1.64,2.69,3.42,5.16,5,7.3l2.21,2.87c.68.85,1.25,1.61,1.72,2.22A68.21,68.21,0,0,0,169,513.31a48.86,48.86,0,0,0,15.64,3.82c.65,0,1.29,0,1.94,0s1.28,0,1.91-.07c1.29-.11,2.57-.23,3.84-.37s2.51-.33,3.75-.54,2.46-.43,3.66-.7c9.62-2,18.28-5.76,24.92-11.09a35.51,35.51,0,0,0,11.06-14.06,30.59,30.59,0,0,0,1.94-5.26,59,59,0,0,0,1.86-12.47C239.68,468.33,239.49,464.59,239.46,463.37Z"
				})), c.a.createElement("path", {
					d: "M130.59,542c-3.49,18.24,20.63,24.8,33.69,16.89,8.28-5,29.35-18.67,21.46-29.91"
				}), c.a.createElement("path", {
					d: "M185.78,528.94c.26,0,1,.69,1.68,2a9,9,0,0,1,.7,5.46,16.59,16.59,0,0,1-2.3,5.86,48.49,48.49,0,0,1-2.91,4.17,52.26,52.26,0,0,1-10.15,9.86c-1.91,1.47-3.9,2.85-5.89,4.16-.52.33-.95.64-1.54,1s-1.13.68-1.72,1a24.74,24.74,0,0,1-3.57,1.45,28.52,28.52,0,0,1-12.8,1,25.68,25.68,0,0,1-11.43-4.49,16.93,16.93,0,0,1-6.56-9.27,14.24,14.24,0,0,1-.44-5,17.05,17.05,0,0,1,.9-4.28c.74,2.6,1.77,5.89,3.43,8.14a21.06,21.06,0,0,0,2.47,2.86c.82.76,1.48,1.4,1.94,1.89a17,17,0,0,0,6.82,4.61,23.7,23.7,0,0,0,8.08,1.49,22.56,22.56,0,0,0,7.67-1.25,19.2,19.2,0,0,0,3.33-1.57c1.07-.64,2.13-1.33,3.15-2a83.33,83.33,0,0,0,10.78-8.45,38.48,38.48,0,0,0,7.36-8.8,22.42,22.42,0,0,0,1.18-2.49,10.91,10.91,0,0,0,.65-2.93,8.58,8.58,0,0,0-.29-2.72A16.29,16.29,0,0,0,185.78,528.94Z"
				}), c.a.createElement("path", {
					className: "cls-5",
					d: "M161.93,510.13a31.6,31.6,0,0,1-16.56-3.28,63.93,63.93,0,0,1-7.61-4.68c1.6,4.25,4.87,9.69,5.34,14.17.35,3.35-2.77,6.79-4.59,9.68-3.15,5-9.11,12.81-5.91,19,4,7.73,13.66,12.78,21.84,10.07a62.88,62.88,0,0,0,17.82-8.79c4.67-3.47,10.7-6.67,12.56-12.64.87-2.82.65-5.86.38-8.8Q184,511.36,181.69,498a24.84,24.84,0,0,1-16.28,11.64A27.33,27.33,0,0,1,161.93,510.13Z"
				}), c.a.createElement("path", {
					d: "M161.92,510.1a14.21,14.21,0,0,1,2.48-.63,23.53,23.53,0,0,0,5.14-1.64,25.79,25.79,0,0,0,6.17-3.79,23.18,23.18,0,0,0,2.87-2.83,25.58,25.58,0,0,0,1.73-2.35c.57-.89,1.13-1.79,1.64-2.66h.14a1.68,1.68,0,0,1,.08.38l.15.83c.1.56.2,1.12.29,1.68l.57,3.29c.27,1.67.54,3.31.79,4.86.46,3,.88,5.73,1.2,7.81q.56,3.65,1,7.43a53.36,53.36,0,0,1,.6,7.87,14.52,14.52,0,0,1-2.72,8.1,27.17,27.17,0,0,1-6,5.8L171.53,549a56.39,56.39,0,0,1-7.08,4.11,76.47,76.47,0,0,1-7.4,3.12l-1.87.66c-.67.2-1.39.42-2.09.57a17.28,17.28,0,0,1-4.29.31,22,22,0,0,1-16.61-9.53,23.61,23.61,0,0,1-1.29-2.1,10.64,10.64,0,0,1-.93-2.57,12.34,12.34,0,0,1,0-5.21,28,28,0,0,1,3.78-8.51c.77-1.26,1.58-2.47,2.35-3.64s1.61-2.44,2.41-3.53c1.58-2.19,3-4.43,2.8-6.21a26.47,26.47,0,0,0-2.16-7.06l-.19-.44-.35-.79-.69-1.57c-.47-1-.89-2-1.25-3s-.7-1.81-1-2.71l-.52-1.36-.25-.68c-.05-.18-.06-.3-.09-.44l5.44,3.8c.87.61,1.71,1.17,2.53,1.69l1.18.73.71.43a35.08,35.08,0,0,0,5.79,2.7,31,31,0,0,0,11.42,1.79,26.42,26.42,0,0,1-12.09,0,32,32,0,0,1-6.68-2.34,3.33,3.33,0,0,0-.83-.35l-.31-.08c-.16,0-.23,0-.24,0s0,0,0,0l.07.1.11.17.18.23a.59.59,0,0,0,.16.14c0-.1.12.25.22.45s.2.46.3.67c.2.45.38.87.55,1.28.33.83.59,1.59.79,2.26a21.81,21.81,0,0,1,.65,2.87c.05.24.06.5.1.75a6.73,6.73,0,0,1,0,.83,5.14,5.14,0,0,1,0,.88,7.36,7.36,0,0,1-.14.84,15.09,15.09,0,0,1-2.66,5.27l-1.55,2.11-.73,1-.73,1.07c-1,1.42-1.94,2.79-2.82,4.19-1.73,2.78-3.23,5.7-3.48,8.67a7.71,7.71,0,0,0,.8,4.19,19.09,19.09,0,0,0,2.57,3.76c4,4.54,10.1,7.16,15.73,6.36.34-.06.7-.09,1-.18l1-.27c.68-.19,1.38-.45,2.06-.69,1.37-.49,2.72-1,4-1.55a59.18,59.18,0,0,0,7.52-3.74c1.18-.7,2.32-1.45,3.41-2.23s2.22-1.64,3.31-2.4a44.88,44.88,0,0,0,6.1-4.86,13.29,13.29,0,0,0,3.66-6.09,21.37,21.37,0,0,0,.22-7.06c-.46-4.84-1-9.52-1.58-14-.54-4.29-1.36-9.75-1.5-11l0-.23s0-.13,0-.1l-.07.12a8.63,8.63,0,0,1-.94,1.24,3.19,3.19,0,0,1-.31.33l-.24.26a3.22,3.22,0,0,1-.32.32,17.83,17.83,0,0,1-1.35,1.25,24.86,24.86,0,0,1-6.23,3.9,26.26,26.26,0,0,1-6,1.79C163.89,510,162.58,510,161.92,510.1Z"
				}), c.a.createElement("path", {
					className: "cls-6",
					d: "M175,522.62a11.6,11.6,0,0,0,6.1-4.61,3,3,0,0,1,.76-.9,1.59,1.59,0,0,1,1-.2,2.7,2.7,0,0,1,2.15,2.75,6.07,6.07,0,0,1-1.39,3.49,18.25,18.25,0,0,1-10,6.9"
				}), c.a.createElement("path", {
					d: "M173.59,530c0-.35,1.09-.77,2.23-1.4a11.73,11.73,0,0,0,2.89-2.06,33.76,33.76,0,0,0,2.78-3.4,7,7,0,0,0,1.54-3.3,1.27,1.27,0,0,0-.1-.52,1.19,1.19,0,0,0-.16-.29s0,0,0-.06h-.06l-.19.24a9.87,9.87,0,0,1-1,1.07,10.26,10.26,0,0,1-2.13,1.62,9.07,9.07,0,0,1-4.25,1.26c.55-1,1.24-2.13,1.79-3a5.62,5.62,0,0,1,1.42-1.86,7.06,7.06,0,0,0,1.17-.79c.25-.12.88-1.09,1.59-1.41a3.07,3.07,0,0,1,3.62.8,3.82,3.82,0,0,1,.83,1.46,4.16,4.16,0,0,1,.19,1.52,6.46,6.46,0,0,1-.78,2.57,15.82,15.82,0,0,1-1.27,2,14.62,14.62,0,0,1-6.13,5.19,7.09,7.09,0,0,1-2.28.47A9.31,9.31,0,0,1,173.59,530Z"
				}), c.a.createElement("path", {
					className: "cls-7",
					d: "M166.33,535.73c.28.59-2.06,2.43-2.77,3.4a23.42,23.42,0,0,1-4.73,4.54,21,21,0,0,1-4.6,2.75,15,15,0,0,1-2.37.81,4.16,4.16,0,0,1-2.48-.08,10.86,10.86,0,0,0,1.34-2.37c.32-.68.8-1.24,1.18-1.3a15.07,15.07,0,0,0,7.11-3.26,45.45,45.45,0,0,1,4.69-3.73A8.16,8.16,0,0,1,166.33,535.73Z"
				}), c.a.createElement("path", {
					className: "cls-6",
					d: "M144,513c-2,2.79-1.75,6.81-.05,9.82s4.58,5.18,7.56,6.93a20.26,20.26,0,0,0,4.48,2.08,24.33,24.33,0,0,0,6.71.73c2.77,0,5.65,0,8.16-1.23s4.55-3.8,4.19-6.55a3.31,3.31,0,0,0-1.7-2.63c-1.35-.63-2.91.07-4.25.71a25.83,25.83,0,0,1-5.69,2.06,17.09,17.09,0,0,1-20-12.06"
				}), c.a.createElement("path", {
					d: "M143.43,512.86c.38.24,1.44,3.53,4.12,6.3a16.55,16.55,0,0,0,4.6,3.43,14.56,14.56,0,0,0,4.44,1.37,17.14,17.14,0,0,0,6.29-.35,20.1,20.1,0,0,0,3.09-1.05c.51-.22,1-.46,1.54-.71l1.6-.8a9.07,9.07,0,0,1,2-.73,4.81,4.81,0,0,1,2.73.18,4.47,4.47,0,0,1,2.18,1.86,5.82,5.82,0,0,1,.8,2.42,7.32,7.32,0,0,1-1,4.5,9.71,9.71,0,0,1-2.93,3.11,13.62,13.62,0,0,1-6.54,2.07c-1.07.09-2.11.11-3.11.11s-2,0-3-.08a18.21,18.21,0,0,1-6.19-1.31,28.69,28.69,0,0,1-5.1-2.92c-3.09-2.15-5.85-5-6.92-8.49s-.44-7,1.5-9.09a9.28,9.28,0,0,0-.38,4.23,10.9,10.9,0,0,0,1.5,4.13c1.48,2.42,3.73,4,4.79,5a28.34,28.34,0,0,0,3.56,2.78,15.38,15.38,0,0,0,3.79,1.92,17.86,17.86,0,0,0,4.16.74c1.43.1,2.89.17,4.26.15,2.73,0,5.42-.58,7.18-2.28a6,6,0,0,0,1.79-2.94,3.58,3.58,0,0,0-.52-3,2.06,2.06,0,0,0-2.46-.52c-1,.32-2.05,1-3.16,1.44a20.62,20.62,0,0,1-6.83,1.93A17.18,17.18,0,0,1,149,522.69a15.64,15.64,0,0,1-5.55-9.83Z"
				}), c.a.createElement("path", {
					className: "cls-8",
					d: "M124.88,465.67c5.8,23.75,18.27,52.94,19.5,54.5a15.17,15.17,0,0,0-1.95,1.85,34.55,34.55,0,0,0,18.86,5.48,33.77,33.77,0,0,0,23.53-9.2c0-.55.05-1.09.09-1.65.41-2.34.38-19.37.38-22.15"
				}), c.a.createElement("path", {
					d: "M185.35,494.5c.5.42.8,3.75,1,8.05.1,2.15.17,4.55.22,7,0,1.21,0,2.42.05,3.59s0,2.33-.07,3.55v.13c0,.72,0,1.43,0,2.1,0,.08,0,.19,0,.25l-.18.18-.35.34-.68.69c-.22.22-.46.46-.64.62l-.47.45q-.45.45-.87.81a33.89,33.89,0,0,1-20,8.51,37.56,37.56,0,0,1-22-4.87l-1-.58-3.33-2,2.57-3.87s0,0,0,0,0,0,0,0l0,0h0s0,0,0-.07l-.45-1-.83-1.87c-.55-1.25-1.08-2.49-1.59-3.73q-1.53-3.72-2.88-7.4c-1.8-4.89-3.4-9.7-4.75-14.35a142.94,142.94,0,0,1-5.2-25,78.11,78.11,0,0,1,7.37,11.6c2.26,4.22,4.09,8.27,4.58,10.56,1.16,5.49,2.56,10.72,4.12,15.68q1.17,3.72,2.45,7.24c.44,1.16.86,2.33,1.32,3.45.22.57.45,1.13.68,1.69l.86,2a20.56,20.56,0,0,0,.32,2.08l0,.12-.07.1-.12.2-.25.44c-.17.31-.33.64-.49,1-.36.32-.69.66-1,1l-.31-2.36a30.43,30.43,0,0,0,11.7,4.61,33.43,33.43,0,0,0,11.65-.12,32.77,32.77,0,0,0,10-3.62,31.21,31.21,0,0,0,4.16-2.75c.6-.46,1.41-1.15,1.54-1.28l.21-.19s.09-.06.1-.1v-.14l0-.58a3.44,3.44,0,0,1,.05-.36c.1-.77.16-1.73.22-2.63l.18-2.72A151.42,151.42,0,0,1,185.35,494.5Z"
				}), c.a.createElement("g", {
					id: "default-6",
					"data-name": "default"
				}, c.a.createElement("path", {
					className: "cls-2",
					d: "M235.29,491.65a63.5,63.5,0,0,0-26.93,5.57A62.24,62.24,0,0,0,187.29,513c4.56,5.6,4.08,11.91,5,18.76-3,5.24-6,12.24-5.41,19.44.9,10.77,7.49,16.83,17.72,17.24,7.85.31,16.58-3.8,21.83-9.86,6-7,8.86-14.58,9.65-24C236.29,520,237,507.76,235.29,491.65Z"
				}), c.a.createElement("path", {
					className: "cls-2",
					d: "M187.29,513c4.56,5.6,4.08,11.91,5,18.76-3,5.24-6,12.24-5.41,19.44.9,10.77,7.49,16.83,17.72,17.24,7.85.31,16.58-3.8,21.83-9.86,6-7,8.86-14.58,9.65-24,.21-14.57.95-26.81-.79-42.92"
				}), c.a.createElement("path", {
					d: "M235.35,491.64c.68.58,1.69,6.78,2.15,14s.47,15.46.74,20c.1,2,.2,4.06.3,6.13,0,1.07.12,2.12.11,3.24l-.09,1.73-.14,1.66a41.54,41.54,0,0,1-3.52,13.37,39.88,39.88,0,0,1-3.54,6.15c-.68,1-1.39,1.91-2.13,2.81-.39.46-.81.93-1.22,1.39l-1.29,1.3a34.13,34.13,0,0,1-12.19,7.35,29.22,29.22,0,0,1-6.06,1.42,27.27,27.27,0,0,1-6.32,0,25.06,25.06,0,0,1-6.22-1.54,19.48,19.48,0,0,1-5.64-3.43,18.72,18.72,0,0,1-4.13-5.08,22.18,22.18,0,0,1-2.25-5.79c-.24-1-.39-1.94-.53-2.91s-.22-1.9-.22-2.89a27.87,27.87,0,0,1,.48-5.68,36.23,36.23,0,0,1,3.48-9.87q.57-1.11,1.17-2.16c.2-.35.41-.69.62-1l.15-.26.08-.13,0,0,.11-.13.12-.13V531a2.68,2.68,0,0,0,0-.63c0-.76-.05-1.5-.08-2.24a58.78,58.78,0,0,0-.5-8,17.5,17.5,0,0,0-2.42-6.46,13.49,13.49,0,0,1,5.35,5.69,39.67,39.67,0,0,1,3,8.72l.27,1.06.14.52.06.25a3,3,0,0,1,.08.34c.13.65.26,1.29.38,1.92a.69.69,0,0,1,0,.24l-.1.22-.21.43L195,534a11.42,11.42,0,0,0-.51,1.17c-.11.3-.22.59-.34.89l-.62,1.68c-.78,2.16-1.36,3.95-1.84,5.15a22.18,22.18,0,0,0-1.71,7.37,19.62,19.62,0,0,0,1,7.29,13.2,13.2,0,0,0,3.95,5.7,15.41,15.41,0,0,0,6.31,3,22.43,22.43,0,0,0,13.84-1.44,26.61,26.61,0,0,0,10.65-7.94,34.92,34.92,0,0,0,6.1-11,39.5,39.5,0,0,0,1.47-5.83,49.8,49.8,0,0,0,.65-5.76c0-2,0-3.93,0-5.84s.06-3.83.09-5.7q.15-5.57.29-10.77c0-3.28.36-7.76.56-11.73S235.29,492.78,235.35,491.64Z"
				})), c.a.createElement("path", {
					className: "cls-8",
					d: "M239.43,463.87s-22.14,22.63-64.39,20c-44.13-2.75-50.16-20-50.16-20,9,37.25,43.74,56,63.78,54.5,18.52-1.37,41.25-8.94,48.76-28.75C240.1,482.56,240.61,474.16,239.43,463.87Z"
				}), c.a.createElement("path", {
					d: "M239.46,463.87A52.59,52.59,0,0,1,237.92,490c-.33.78-.68,1.57-1,2.37-.18.39-.34.8-.53,1.19l-.64,1.14c-.44.75-.86,1.53-1.32,2.27l-1.54,2.14a17.18,17.18,0,0,1-1.66,2c-.59.64-1.13,1.33-1.75,1.93a44.3,44.3,0,0,1-3.82,3.37,56.57,56.57,0,0,1-14.76,8.26,80.84,80.84,0,0,1-11.08,3.34A88.55,88.55,0,0,1,188,519.78c-8.29.45-16.46-1.91-24-5.35A76.08,76.08,0,0,1,129.18,481a77,77,0,0,1-6.24-16.62l3.82-1.13.14.31a3.15,3.15,0,0,0,.22.39,7.93,7.93,0,0,0,.51.82,15.58,15.58,0,0,0,1.24,1.6c.43.53,1,1,1.42,1.5s1.06.91,1.58,1.38,1.13.84,1.69,1.27a16.36,16.36,0,0,0,1.76,1.18l1.82,1.1c.62.35,1.27.65,1.9,1a73.7,73.7,0,0,0,16.13,5.51c2.78.55,5.53,1.18,8.32,1.51l4.14.6,4.13.39c1.37.11,2.74.3,4.1.34l4,.15c2.69.18,5.34,0,8-.06l2-.06,1.93-.2,3.84-.39c1.28-.1,2.52-.39,3.77-.57s2.48-.39,3.69-.66l3.6-.84c.59-.15,1.19-.27,1.78-.43l1.73-.52,3.43-1,3.3-1.22A81.78,81.78,0,0,0,229,470.52a60.93,60.93,0,0,0,10-7,52.26,52.26,0,0,1-10.67,9.17,78.66,78.66,0,0,1-14.7,7.66l-3.9,1.42c-1.29.46-2.6.78-3.87,1.16-2.54.8-5,1.24-7.36,1.73-.58.11-1.15.24-1.71.33l-1.66.22-3.07.37a39,39,0,0,1-5,.32c-1.55,0-3.1.07-4.63.06l-4.58-.24c-3-.07-6-.51-9-.8-1.48-.13-2.94-.37-4.4-.6l-4.35-.69-4.27-.91-2.11-.45-2.09-.58c-1.38-.41-2.77-.72-4.12-1.19l-4-1.4-3.89-1.65c-1.27-.6-2.49-1.28-3.73-1.9a40.45,40.45,0,0,1-6.76-4.79,16.66,16.66,0,0,1-1.48-1.43l-.71-.75-.66-.8a14,14,0,0,1-2.22-3.58l1.62-.48a71.17,71.17,0,0,0,18.86,33.9,73.29,73.29,0,0,0,14.35,11.25,64.36,64.36,0,0,0,15.86,6.91,46.76,46.76,0,0,0,8.15,1.54,36.1,36.1,0,0,0,8.05-.17A82.33,82.33,0,0,0,206.38,514c9.72-3,18.47-7.88,24.34-14.91a38,38,0,0,0,8.46-19.45A79.11,79.11,0,0,0,239.46,463.87Z"
				}), c.a.createElement("path", {
					d: "M171.08,493a19,19,0,0,1,1.23,3.87c.56,2,1.08,4.31,1.56,5.48a33.14,33.14,0,0,0,1.48,3.16l.86,1.6a16.71,16.71,0,0,0,1,1.44,5.42,5.42,0,0,1,1,2,2.48,2.48,0,0,1-1.27,2.6,4.64,4.64,0,0,1-2.32.42c-.63,0-1.24,0-1.86-.08a14.52,14.52,0,0,1-3.31-.53,6.5,6.5,0,0,1-1.7-.76,5.51,5.51,0,0,1-1.35-1.33,19.72,19.72,0,0,1-1.54-2.76c-.43-.81-.93-1.77-1.29-2.64a47,47,0,0,1-2.78-9.64,29.79,29.79,0,0,1,2.48,4.13A31.76,31.76,0,0,1,165,503.7c.26.78.54,1.54.86,2.28l1,2.21c.63,1.44,1.32,2.69,2.62,3.15a13.72,13.72,0,0,0,4.12.77,12.05,12.05,0,0,0,2,0,1.28,1.28,0,0,0,1.19-.81,1.77,1.77,0,0,0-.38-1.43c-.31-.51-.71-1-1.07-1.52s-.61-1.11-.9-1.65-.53-1.07-.77-1.61a23,23,0,0,1-1.16-3.21c-.27-1.08-.47-2.07-.67-3.06A55.58,55.58,0,0,1,171.08,493Z"
				}), c.a.createElement("g", {
					id: "default-7",
					"data-name": "default"
				}, c.a.createElement("ellipse", {
					className: "cls-9",
					cx: "182.45",
					cy: "463",
					rx: "57.58",
					ry: "25.42"
				}), c.a.createElement("path", {
					d: "M240,463c-.12-.27-.15-1.13-.47-2.38a14.89,14.89,0,0,0-2.18-4.59c-2.34-3.47-6.91-6.87-12.28-9.44A75.62,75.62,0,0,0,207.82,441a102.44,102.44,0,0,0-14.76-2,135.45,135.45,0,0,0-20.58.35,109.46,109.46,0,0,0-20.92,3.9,69,69,0,0,0-10,3.74,40.94,40.94,0,0,0-8.84,5.47,16.71,16.71,0,0,0-5.57,7.74,10.26,10.26,0,0,0,1.42,8.55,22.32,22.32,0,0,0,5.86,5.89A45.36,45.36,0,0,0,142,478.9a80.65,80.65,0,0,0,16.63,5.22,127.57,127.57,0,0,0,33.62,2.16c10.8-.72,21.05-2.71,29.87-6.26a41.7,41.7,0,0,0,11.68-6.8,19,19,0,0,0,4-4.71,12.09,12.09,0,0,0,1.67-5.51,11.35,11.35,0,0,1-.86,5.66,18.84,18.84,0,0,1-3.79,5.7,40.87,40.87,0,0,1-12.39,8.47,77,77,0,0,1-23.56,6.51,131.1,131.1,0,0,1-14.73.63,135.53,135.53,0,0,1-14.23-.89,101.72,101.72,0,0,1-26.39-6.39,49.87,49.87,0,0,1-11.4-6.33,26,26,0,0,1-4.63-4.5,15.8,15.8,0,0,1-3-5.73,12,12,0,0,1,0-6.39,15.82,15.82,0,0,1,2.87-5.54,31.34,31.34,0,0,1,9.22-7.53A62,62,0,0,1,147.11,442a90.12,90.12,0,0,1,10.63-2.94,119.74,119.74,0,0,1,20.78-2.5,124.08,124.08,0,0,1,19.55.83A96,96,0,0,1,216,441.26c5.32,1.68,12.5,4.81,17.61,9.32a26.55,26.55,0,0,1,3.32,3.53,18.22,18.22,0,0,1,2.14,3.64A12.71,12.71,0,0,1,240,463Z"
				})), c.a.createElement("path", {
					d: "M185.46,548c-9.68,28.74,16.95,32.38,31.95,26.59,9-3.46,12.35-11.53,15.87-19.73,3.74-7.75,8.44-18.8,1-25.74"
				}), c.a.createElement("path", {
					d: "M234.33,529.08a2.17,2.17,0,0,1,.91.52,7.39,7.39,0,0,1,.74.64l.79,1a12.5,12.5,0,0,1,2.32,6.33,23.56,23.56,0,0,1-.7,7.71c-.58,2.39-1.32,4.48-1.81,6-.43,1.32-.93,2.68-1.44,4s-1,2.65-1.47,4a47.93,47.93,0,0,1-3.94,8.24,24.5,24.5,0,0,1-6.59,7.2,23.17,23.17,0,0,1-4.31,2.42,31.88,31.88,0,0,1-4.4,1.52,36.26,36.26,0,0,1-15.7.86,26,26,0,0,1-7.51-2.47,18.41,18.41,0,0,1-6.12-5,17.06,17.06,0,0,1-3.22-6.78,20.37,20.37,0,0,1-.38-6.72,31.9,31.9,0,0,1,3.16-10.74c.07.8.12,1.66.14,2.56s.11,1.87.13,2.83a48.8,48.8,0,0,0,.62,5.76,23.38,23.38,0,0,0,1.31,4.78c.21.68.54,1.22.72,1.75a11.69,11.69,0,0,1,.6,1.32,13.16,13.16,0,0,0,7,6.76,25.06,25.06,0,0,0,10,2.07,32,32,0,0,0,9.77-1.37,19,19,0,0,0,7.89-4.37,25.34,25.34,0,0,0,5-6.88c1.3-2.49,2.35-5,3.37-7.55.5-1.28,1.12-2.51,1.62-3.68s1-2.34,1.45-3.48a42,42,0,0,0,2.06-6.68,18.82,18.82,0,0,0,.23-7.38l-.08-.47-.15-.43c-.09-.3-.18-.58-.27-.86a14.93,14.93,0,0,0-.69-1.49C235,530,234.53,529.42,234.33,529.08Z"
				}), c.a.createElement("path", {
					className: "cls-5",
					d: "M236.85,526.89c.11-1.2.22-2.41.36-3.6.69-6.28,1.35-12.83-.85-18.75.74,2.83-1.63,8.5-6.67,12-10.72,7.5-27.36,9.34-38.35,4.16,1.7,3.37,1.46,9.49,1.46,9.49s-3.56,9.82-4.8,15.22c-1.39,6.1-2.24,13.79.68,19.61s25,7.12,31.65,1.72c1.87,0,5.83-5.82,6.86-7.2a45.2,45.2,0,0,0,5.57-9.83C235.73,542.53,236.16,534.64,236.85,526.89Z"
				}), c.a.createElement("path", {
					d: "M236.88,526.9a37.62,37.62,0,0,1-.14,5.72,72,72,0,0,1-1.6,11.79,43.93,43.93,0,0,1-5.33,12.73c-.59,1-1.19,1.85-1.8,2.71l-1.72,2.43a34.32,34.32,0,0,1-3.26,4,8.48,8.48,0,0,1-1,.86,3.5,3.5,0,0,1-.67.41,1.69,1.69,0,0,1-.45.18,5.33,5.33,0,0,1-.6.11l.68-.24a16.94,16.94,0,0,1-7.2,3.13,40.11,40.11,0,0,1-7.74.91,47.1,47.1,0,0,1-7.93-.47,23.85,23.85,0,0,1-7.95-2.45,9.44,9.44,0,0,1-1.92-1.41,6.88,6.88,0,0,1-1.4-2.12,18.08,18.08,0,0,1-1.34-4,29.43,29.43,0,0,1-.52-8.23,51.94,51.94,0,0,1,1.16-7.88c.59-2.6,1.33-5,2.07-7.44l1.32-4c.42-1.24.85-2.48,1.27-3.71h0v-.78l0-1.1c0-.73-.09-1.47-.18-2.18,0-.37-.09-.68-.16-1.08a11,11,0,0,0-.62-2.29c-.25-.78-.72-1.77-1.14-2.71l-1.25-2.77,3.48,1.45,1.78.75c.6.23,1.24.55,1.81.72l1.39.45a6,6,0,0,0,.83.23l1.67.41a40.68,40.68,0,0,0,6.86.75,44.12,44.12,0,0,0,13.38-1.85,40.19,40.19,0,0,0,6.09-2.35c.94-.52,1.92-1,2.79-1.54.44-.28.9-.55,1.32-.83s.82-.58,1.19-.9a16.06,16.06,0,0,0,3.74-4.46,11.92,11.92,0,0,0,1.07-2.55,5.45,5.45,0,0,0,.21-2.34l2.58-.82a30.66,30.66,0,0,1,1.18,12.31c-.32,3.82-.95,7.31-1.39,10.57-.21-2.92-.12-6.64-.28-10.53a31.41,31.41,0,0,0-2.24-11.33l3-.94a7.3,7.3,0,0,1,.17,3.08,13,13,0,0,1-.66,2.61,16.62,16.62,0,0,1-2.29,4.24,17.07,17.07,0,0,1-2.8,3,16.75,16.75,0,0,1-1.38,1.07c-.44.29-.84.53-1.22.75a45.22,45.22,0,0,1-20,5.87,44.13,44.13,0,0,1-9.91-.47,37.41,37.41,0,0,1-4.73-1.12l-.76-.26c-.19-.07-.38-.13-.57-.22l-.58-.26-.3-.13-.07,0h0v0l.06.13a6,6,0,0,1,.36,1.21c0,.22.08.43.13.7s.11.81.15,1.21c.08.79.14,1.59.16,2.37,0,.39,0,.78,0,1.17s0,.7,0,1.3l-.89,2.45-.81,2.31c-.53,1.54-1,3.07-1.52,4.6a65.08,65.08,0,0,0-2.28,9.07,36.46,36.46,0,0,0-.51,8.92,21,21,0,0,0,.77,4.22,13.06,13.06,0,0,0,.71,2,8.41,8.41,0,0,0,.44.9,3.62,3.62,0,0,0,.52.68,9.9,9.9,0,0,0,3.38,2,26.3,26.3,0,0,0,3.94,1.06,43.49,43.49,0,0,0,8,.71,40.4,40.4,0,0,0,7.7-.7,15.75,15.75,0,0,0,6.57-2.59l.69,0c0-.34,0-.2,0-.23l.12-.06a2,2,0,0,0,.37-.22,6.54,6.54,0,0,0,.83-.71,22.44,22.44,0,0,0,1.6-1.76c1-1.25,2-2.55,2.94-3.88a47.4,47.4,0,0,0,4.82-7.89,44.13,44.13,0,0,0,2.49-6.4,63.69,63.69,0,0,0,1.74-7.35C236.13,532.53,236.64,528.27,236.88,526.9Z"
				}), c.a.createElement("path", {
					className: "cls-6",
					d: "M237,519.74a24.93,24.93,0,0,1-15.88,15,42.49,42.49,0,0,1-8.17,1.43,35.17,35.17,0,0,1-11.22-.25,14.24,14.24,0,0,1-9.15-6.05c-1.16.75-1.45,2.34-1.32,3.73.4,4.22,3.72,7.74,7.59,9.5s8.23,2,12.48,2.08a35.3,35.3,0,0,0,8.4-.65,22.72,22.72,0,0,0,13.75-9.91,28.05,28.05,0,0,0,4.2-16.58"
				}), c.a.createElement("path", {
					d: "M237.75,518.09a10.07,10.07,0,0,1,.33,3.61,26.7,26.7,0,0,1-1.24,7.43,26,26,0,0,1-4,7.81,27.1,27.1,0,0,1-5.12,5.13,21.53,21.53,0,0,1-9.26,4.17,35.39,35.39,0,0,1-5.2.53c-1.73.05-3.43.06-5.18,0a26.41,26.41,0,0,1-10.58-2.27,14.84,14.84,0,0,1-7.6-8.14,8.43,8.43,0,0,1-.31-1.09c-.05-.18-.09-.36-.13-.55l-.11-.79a7.21,7.21,0,0,1,.37-3.37,4.68,4.68,0,0,1,1.64-2.19l1.77-1.29,1.27,1.94.62.83a6.11,6.11,0,0,0,.64.75l.33.32.17.15.31.26c.19.17.42.32.63.48a13.93,13.93,0,0,0,2.85,1.53,20.07,20.07,0,0,0,6.5,1.25,56.41,56.41,0,0,0,6.86-.25,44.62,44.62,0,0,0,6.5-.92,24.06,24.06,0,0,0,10.45-5.48,25.25,25.25,0,0,0,6.22-8.4,17.28,17.28,0,0,1-1.7,5.75,22.52,22.52,0,0,1-4.13,5.87,23,23,0,0,1-5.55,4.14,18.09,18.09,0,0,1-4.8,1.75,55.72,55.72,0,0,1-7.71.74,49.78,49.78,0,0,1-7.43-.11,21.65,21.65,0,0,1-7.06-1.88,16.26,16.26,0,0,1-3.06-1.89c-.24-.18-.46-.38-.68-.57l-.3-.28-.17-.17a7.51,7.51,0,0,1-.61-.74c-.13-.17-.24-.36-.36-.55a1.07,1.07,0,0,0-.45.38,2.36,2.36,0,0,0-.38,1.19,2.66,2.66,0,0,0,0,.63l0,.34a3.55,3.55,0,0,0,.09.47,8.37,8.37,0,0,0,.61,1.83,12.34,12.34,0,0,0,5.24,5.43,19.7,19.7,0,0,0,7.11,2.13,55.61,55.61,0,0,0,7.27.3,32.31,32.31,0,0,0,6.79-.67,21,21,0,0,0,5.88-2.38,24,24,0,0,0,8.25-8.37,32,32,0,0,0,3.4-8.25A34.09,34.09,0,0,0,237.75,518.09Z"
				}), c.a.createElement("path", {
					className: "cls-7",
					d: "M223.16,543.4c.59.28,0,2.8,0,3.87a17.79,17.79,0,0,1-.81,5.7,16,16,0,0,1-1.86,4.31,24.2,24.2,0,0,1-2.26,3c-1.46-1.22-1.86-3.56-1.33-4a11.69,11.69,0,0,0,3.45-5.91,35.46,35.46,0,0,1,1.25-5.05A7,7,0,0,1,223.16,543.4Z"
				}), c.a.createElement("path", {
					className: "cls-8",
					d: "M187.29,513.5c4.48,5.5,4.1,11.7,5,18.41a34.53,34.53,0,0,0,19,5.59,33.53,33.53,0,0,0,25-10.66c.24-11.22.45-21.69-1-34.69"
				}), c.a.createElement("path", {
					d: "M235.34,492.14c.62.35,1.33,4.25,1.82,8.81s.75,9.76,1.08,12.65c.3,2.56.51,5.21.66,7.9,0,.68.07,1.35.1,2s.06,1.42.08,2.13l0,1.82V528c0,.15-.16.23-.24.35l-.59.65-1.16,1.28-.79.81a35.1,35.1,0,0,1-15.39,8.82,36.12,36.12,0,0,1-14.88.95A34.56,34.56,0,0,1,192.71,536c-.33-.22-1.36-.85-2.08-1.36l-1.16-.79s-.1-.06-.13-.11v-.17l0-.36-.06-.7-.12-1.38,0-.68,0-.4c0-.51,0-1,0-1.51,0-2,0-3.8-.15-5.51a19.87,19.87,0,0,0-2.39-8.86,10.7,10.7,0,0,1,4.24,3,17.71,17.71,0,0,1,3.12,5.32,33.85,33.85,0,0,1,1.54,5.31c.08.39.15.75.21,1.11,0,.17,0,.34.08.51l0,.24c0,.09,0,0,0,.05a.3.3,0,0,0-.08,0c0,.12-.39.09.56.75a24.38,24.38,0,0,0,2.08,1.4,26.81,26.81,0,0,0,4.45,2.15,28.5,28.5,0,0,0,9.43,1.77,29.46,29.46,0,0,0,16.78-4.8,28.41,28.41,0,0,0,3.21-2.47c.5-.44,1-.9,1.43-1.36l.34-.35.2-.22.37-.44c.09-.15,0-.36,0-.53v-.74c0-.66,0-1.32,0-2,0-1.3,0-2.58-.05-3.84-.06-5-.13-9.7-.06-14.07C234.37,500.9,235.18,493.61,235.34,492.14Z"
				}), c.a.createElement("path", {
					className: "cls-10",
					d: "M239.93,476.56a78.87,78.87,0,0,0-.5-12.69s-22.14,22.63-64.39,20c-44.13-2.75-50.16-20-50.16-20a73.24,73.24,0,0,0,6.61,17.31c6.07,5.26,18.94,12.12,45.49,13.77C212.29,497.15,233.65,481.86,239.93,476.56Z"
				}), c.a.createElement("path", {
					d: "M240,476.58a33.85,33.85,0,0,1-6,4.88A79.19,79.19,0,0,1,219.79,489,89.21,89.21,0,0,1,202,494.31c-1.45.34-2.9.48-4.29.72l-2,.31c-.67.09-1.33.13-2,.2l-3.64.36c-1.14.1-2.2.11-3.16.17a119.65,119.65,0,0,1-18.75-.55,107.31,107.31,0,0,1-19.22-3.63c-6.32-1.94-12.65-4.57-18-8.9l-.67-.54a.93.93,0,0,1-.33-.45l-.23-.44-.58-1.1c-.39-.74-.75-1.48-1.11-2.23q-1.06-2.25-2-4.55a74.38,74.38,0,0,1-3-9.37l3.6-1.06.16.33a3.7,3.7,0,0,0,.24.42,7.32,7.32,0,0,0,.55.86,16.47,16.47,0,0,0,1.29,1.63c.46.53,1,1,1.46,1.51l1.6,1.37a47.64,47.64,0,0,0,13.75,7.16,94.31,94.31,0,0,0,15.2,3.77l3.85.55c1.29.17,2.56.4,3.85.48l3.84.35c1.27.1,2.54.28,3.81.28l3.77.13c1.25,0,2.5.14,3.74.05l3.7-.13c1.23-.05,2.45-.06,3.66-.22a95.62,95.62,0,0,0,26.9-6.25A90.41,90.41,0,0,0,229.31,470c1.72-1.05,3.38-2.1,4.95-3.21.4-.26.78-.56,1.16-.84l.6-.45c.29-.22.57-.44.85-.68,1.1-1,2.18-1.9,3.18-2.85.11,0,.11.33.14.58s.05.5.07.74c.05.49.09,1,.13,1.43.09.92.16,1.8.21,2.65,0,.34,0,.67.05,1l0,.86q0,.84,0,1.62c0,2.11-.06,3.95-.21,5.74-.12-1.83-.3-3.87-.58-6-.07-.54-.15-1.08-.22-1.64s-.17-1.16-.25-1.6-.17-.87-.26-1.31l-.12-.57-.07-.28,0-.13s-.07.08-.11.11c-.5.56-1,1-1.39,1.47s-1.1,1-1.79,1.64l-2.2,1.78-2.28,1.69c-.77.56-1.58,1.06-2.36,1.59s-1.58,1-2.4,1.48l-2.41,1.4c-.8.44-1.62.83-2.42,1.23s-1.58.81-2.37,1.17l-2.34,1-2.23.93-2.15.74c-1.4.45-2.68.93-3.87,1.23s-2.26.55-3.17.76a107.32,107.32,0,0,1-23.64,2.19l-5.73-.26c-1,0-1.88-.13-2.81-.23l-2.8-.29c-1.85-.19-3.69-.35-5.51-.67s-3.62-.53-5.41-.85A86.62,86.62,0,0,1,139.34,477a48.41,48.41,0,0,1-8.72-5.25,21.58,21.58,0,0,1-6.47-7.66l1.47-.43a71.14,71.14,0,0,0,4.73,13.43c.49,1.06,1,2.09,1.55,3.11l.17.31a.37.37,0,0,0,.17.2l.61.5c.42.37.9.68,1.34,1a43.62,43.62,0,0,0,5.75,3.43c8,3.9,16.46,5.77,24.55,6.95a132.18,132.18,0,0,0,23.53,1.3,103.13,103.13,0,0,0,21.33-3.13A97.25,97.25,0,0,0,227.77,484,74.15,74.15,0,0,0,240,476.58Z"
				}), c.a.createElement("path", {
					d: "M226.92,482.82a18.42,18.42,0,0,1,.59,4.39c.17,2.26.27,4.82.39,6.25.47,5,.5,10.82.46,16-.07,9.13-.87,18.08-2.27,23.92a37,37,0,0,1-.69-9.7,122.61,122.61,0,0,0,1.4-19.48c0-5.73-.25-10.69-.21-15C226.59,487.13,226.86,483.54,226.92,482.82Z"
				}), c.a.createElement("path", {
					className: "cls-8",
					d: "M136.6,475.23c-1.29,3.55-1.46,7.67-.65,12.75-2.59-1.45-8-7.2-8.8-8.87-1.11-2.48-.71-6.12-.43-13.59"
				}), c.a.createElement("path", {
					d: "M126.75,465.52c.59.33.26,6.08.58,8.24.14.95.28,1.93.49,2.84a8.76,8.76,0,0,0,.38,1.28c.08.2.17.38.26.56a3,3,0,0,0,.31.43,27.05,27.05,0,0,0,2,2.17c.7.72,1.42,1.42,2.14,2.08l.57.51.17.14c.07.05,0,0,0,0l0,.07a.09.09,0,0,0,.07,0l0,0s0,0,0-.15l0-.14v-.4c0-.29,0-.59.06-.87a15.49,15.49,0,0,1,.2-1.7,15,15,0,0,1,2-5.55c.35,1.26.6,2.82.86,4.2a11.92,11.92,0,0,1,.29,3.28,16.45,16.45,0,0,0-.17,3.62c.07,1.3.15,2.55.22,3.72l-.32-.09s-.16-.08-.24-.14l-.27-.19c-.37-.25-.67-.48-1-.71-.62-.46-1.2-.91-1.78-1.39s-1.14-1-1.61-1.49l-.37-.35-.28-.28-.54-.55a54.22,54.22,0,0,1-4-4.34,5.76,5.76,0,0,1-.77-1.34,8.41,8.41,0,0,1-.43-1.38,15.53,15.53,0,0,1-.33-2.61,28.58,28.58,0,0,1,.16-4.61A26.69,26.69,0,0,1,126.75,465.52Z"
				}), c.a.createElement("path", {
					className: "cls-8",
					d: "M194,483.81c-.07,3.58.85,12.19.85,12.19l17.3-3.12c2.26-2.27,1.19-9.94.28-12.5"
				}), c.a.createElement("path", {
					d: "M212.48,480.37c.35.06,1,1.66,1.33,3.56a32,32,0,0,1,.54,5.42,9.07,9.07,0,0,1-.1,1.78,5.6,5.6,0,0,1-.21.95,2.75,2.75,0,0,1-.18.5,3.66,3.66,0,0,1-.32.62l-.42.58c-.07.09-.14.2-.22.29l-.34.1a7.16,7.16,0,0,1-.7.17l-.49.12-1.67.41c-2.24.53-4.51,1-6.65,1.47-1.88.4-3.76.75-5.6,1.06l-2.42.4-1.32.21-.32.05-.08,0a.22.22,0,0,1,0-.08l0-.17-.06-.67c-.06-.86-.13-1.72-.2-2.56l0-.57v-.33l0-.66a42.9,42.9,0,0,1,.55-9.24c1.48,2.28,2.91,6.38,2.77,7.95,0,.39-.05.78-.08,1.16l0,.58v.27l0,.1c0,.16-.08.26-.11.41s-.1.37.05.33l.39,0a2.06,2.06,0,0,0,.25,0l.54,0,2.08-.24c2.73-.34,5.26-.81,7.63-1.29l3.43-.74.82-.18.44-.11a2.41,2.41,0,0,0,.42-.87,19.21,19.21,0,0,0,.45-5.45c0-.84,0-2,0-3.06S212.5,480.69,212.48,480.37Z"
				}), c.a.createElement("path", {
					className: "cls-10",
					d: "M152.53,479.28l1.17.18a1.4,1.4,0,0,1,1.16,1.17l.53,3.22a1.4,1.4,0,0,1-1.72,1.59l-1-.24a1.42,1.42,0,0,1-1-1.06l-.71-3.17A1.41,1.41,0,0,1,152.53,479.28Z"
				}), c.a.createElement("path", {
					d: "M152.53,479.29c-.09.12-.77.13-1.12.7a1.07,1.07,0,0,0-.12.88,7.73,7.73,0,0,0,.31.93c.16.41.32.83.47,1.27a5.4,5.4,0,0,0,.4,1.09.67.67,0,0,0,.25.19.58.58,0,0,0,.14,0l.32.07.68.13a.54.54,0,0,0,.26,0,.61.61,0,0,0,.3-.27,1.21,1.21,0,0,0,.05-.18.38.38,0,0,0,0-.1,1.49,1.49,0,0,0,0-.25c-.11-.76-.19-1.5-.25-2.22l0-.52,0-.39a.81.81,0,0,0-.23-.47,1.06,1.06,0,0,0-.23-.17l-.39-.14c-.28-.1-.54-.21-.78-.31a3.63,3.63,0,0,1,.89-.39,2.35,2.35,0,0,1,.54-.14,1.69,1.69,0,0,1,.69.11,1.87,1.87,0,0,1,1,.94,1.83,1.83,0,0,1,.19.81c0,.65,0,1.28,0,1.88,0,.31,0,.61,0,.89a2.22,2.22,0,0,1-.14,1.07,1.88,1.88,0,0,1-1.63,1.13,2.63,2.63,0,0,1-.49,0l-.38-.09-.77-.18a1.82,1.82,0,0,1-1.22-1.29c-.13-.45-.24-.88-.36-1.3s-.21-.83-.3-1.22c0-.2-.08-.39-.11-.59a1.77,1.77,0,0,1,0-.76,1.56,1.56,0,0,1,1.06-1.15A1.33,1.33,0,0,1,152.53,479.29Z"
				}), c.a.createElement("path", {
					className: "cls-10",
					d: "M153.91,487.2l1.21.2a1.18,1.18,0,0,1,1,1l.62,3.44a1.18,1.18,0,0,1-1.44,1.36l-1-.25a1.18,1.18,0,0,1-.87-.87l-.8-3.39A1.18,1.18,0,0,1,153.91,487.2Z"
				}), c.a.createElement("path", {
					d: "M153.91,487.22c-.08.11-.73.15-1,.72a.85.85,0,0,0-.07.41,1.18,1.18,0,0,0,0,.2l.08.27c.11.34.22.65.31.87q.25.58.48,1.2l.22.63.1.32a.3.3,0,0,0,.07.11.41.41,0,0,0,.18.12l.13,0,.33.06.65.13a.22.22,0,0,0,.17,0,.3.3,0,0,0,.15-.18.41.41,0,0,0,0-.11l-.09-.51c-.11-.72-.2-1.43-.27-2.1l0-.5,0-.25v-.17a.49.49,0,0,0-.15-.38.53.53,0,0,0-.2-.15l-.4-.14-.74-.3a3.93,3.93,0,0,1,.85-.4,4.42,4.42,0,0,1,.48-.15,1.54,1.54,0,0,1,.7.07,1.77,1.77,0,0,1,1,1,4.35,4.35,0,0,1,.13.44,1.48,1.48,0,0,1,0,.27c0,.62,0,1.22,0,1.8,0,.29,0,.57.05.84l0,.42a1.46,1.46,0,0,1,0,.55,1.6,1.6,0,0,1-1.46,1.25,1.3,1.3,0,0,1-.48,0l-.36-.08-.71-.16a1.64,1.64,0,0,1-1.18-1.23l-.35-1.23c-.12-.4-.22-.78-.31-1.16l-.12-.55a4.1,4.1,0,0,1-.08-.63,1.38,1.38,0,0,1,.86-1.27A1.13,1.13,0,0,1,153.91,487.22Z"
				}), c.a.createElement("path", {
					className: "cls-10",
					d: "M163.77,480.44l-7.12-1.59a1.59,1.59,0,0,0-1.64,2l2.48,11.27a4.5,4.5,0,0,0,3.49,3.62l6.64,1.41a1.59,1.59,0,0,0,1.65-2l-2-11A4.54,4.54,0,0,0,163.77,480.44Z"
				}), c.a.createElement("path", {
					className: "cls-11",
					d: "M163.77,480.44l-7.12-1.59a1.59,1.59,0,0,0-1.64,2l2.48,11.27a4.5,4.5,0,0,0,3.49,3.62l6.64,1.41a1.59,1.59,0,0,0,1.65-2l-2-11A4.54,4.54,0,0,0,163.77,480.44Z"
				}), c.a.createElement("path", {
					d: "M163.77,480.42a2.52,2.52,0,0,1,1.51.41,4.77,4.77,0,0,1,2.06,2.52,12.34,12.34,0,0,1,.44,1.82c.12.61.25,1.2.36,1.78.24,1.14.45,2.18.63,2.91.31,1.3.62,2.65.91,4l.23,1a2.63,2.63,0,0,1,0,1.39,2.27,2.27,0,0,1-.87,1.26,2.06,2.06,0,0,1-1.6.36l-4.24-.82-2.1-.42a6.39,6.39,0,0,1-1.18-.3,4.64,4.64,0,0,1-1.12-.6,5.81,5.81,0,0,1-2.23-3.53c-.25-1.17-.51-2.33-.76-3.48-.49-2.29-.94-4.53-1.36-6.67l-.15-.8a3.38,3.38,0,0,1-.09-1,2.47,2.47,0,0,1,1.14-1.88,2,2,0,0,1,1.13-.28l.31,0,.18.05.37.1,1.42.38c1.87.51,3.58,1,5.09,1.47a37.73,37.73,0,0,1-5.5-.26l-1.43-.18-.34,0c-.15,0-.09,0-.15,0a.66.66,0,0,0-.19.09,1,1,0,0,0-.33.83v.11l0,.18.05.36.11.72c.08.47.15.95.23,1.41.15.94.31,1.87.46,2.77q.48,2.71,1,5.26a5.77,5.77,0,0,0,.77,2.26,4,4,0,0,0,1.67,1.49,4.57,4.57,0,0,0,1.07.31l1.16.24,2.27.47,2.2.44.54.1.26.06h.18a.9.9,0,0,0,.64-.32,1.32,1.32,0,0,0,.32-.71,1.28,1.28,0,0,0,0-.39c0-.14-.06-.33-.09-.49-.13-.68-.26-1.34-.39-2-.51-2.62-1-5.05-1.31-7.34-.1-.53-.15-1.22-.28-1.81A4.93,4.93,0,0,0,166,482,4.15,4.15,0,0,0,163.77,480.42Z"
				}), c.a.createElement("path", {
					className: "cls-10",
					d: "M169,482.18l1.25.16a1.88,1.88,0,0,1,1.63,1.66l.24,2.2a1.89,1.89,0,0,1-2.23,2.05l-1.1-.21a1.89,1.89,0,0,1-1.49-1.51l-.39-2.15A1.87,1.87,0,0,1,169,482.18Z"
				}), c.a.createElement("path", {
					d: "M169,482.19c-.08.13-.8.13-1.3.67a1.57,1.57,0,0,0-.43.93,2.16,2.16,0,0,0,.17.88c.16.44.3.9.44,1.37l.1.36a1.47,1.47,0,0,0,.1.22,1.35,1.35,0,0,0,.28.35,1.27,1.27,0,0,0,.38.2.8.8,0,0,0,.21.05l.36,0,.73.12a1.59,1.59,0,0,0,.39,0,1.05,1.05,0,0,0,.77-.89c0-.05,0-.11,0-.16l0-.29,0-.59c0-.39,0-.77-.05-1.16,0-.22,0-.29,0-.41a1.36,1.36,0,0,0-.52-.83,1.17,1.17,0,0,0-.31-.17c-.11-.05-.29-.09-.43-.14-.3-.09-.58-.19-.84-.29a4.66,4.66,0,0,1,.93-.41,2.67,2.67,0,0,1,.56-.15,1.75,1.75,0,0,1,.68,0,2.08,2.08,0,0,1,1.6,1.64c0,.12,0,.26,0,.36l0,.26,0,.5c0,.34,0,.67,0,1v.48a2.86,2.86,0,0,1-.06.58,2.38,2.38,0,0,1-2.28,1.92,2.07,2.07,0,0,1-.5,0l-.4-.07-.81-.15a2.31,2.31,0,0,1-1.47-1.05,2.54,2.54,0,0,1-.31-.81l-.15-.69c-.1-.45-.19-.89-.27-1.31a2.18,2.18,0,0,1,.24-1.51,1.9,1.9,0,0,1,1.3-.94A1.78,1.78,0,0,1,169,482.19Z"
				}), c.a.createElement("path", {
					className: "cls-10",
					d: "M169.92,490.22l1.33.17a1.59,1.59,0,0,1,1.38,1.42l.26,2.53a1.6,1.6,0,0,1-1.89,1.73l-1.17-.23a1.6,1.6,0,0,1-1.26-1.3l-.42-2.48A1.59,1.59,0,0,1,169.92,490.22Z"
				}), c.a.createElement("path", {
					d: "M169.92,490.24c-.08.12-.77.13-1.17.69a1.26,1.26,0,0,0-.26.89,6.75,6.75,0,0,0,.24.89c.15.42.28.85.41,1.3s.2.67.42.85.33.15.9.24l.69.1a.76.76,0,0,0,.31,0,.72.72,0,0,0,.5-.78c-.06-.76-.11-1.51-.12-2.23v-.4a1.31,1.31,0,0,0-.06-.27,1,1,0,0,0-.37-.44.84.84,0,0,0-.3-.15l-.42-.13-.8-.28a4.32,4.32,0,0,1,.89-.43,4.13,4.13,0,0,1,.5-.15,1.61,1.61,0,0,1,.66,0,2,2,0,0,1,1.17.67,1.66,1.66,0,0,1,.41.95,4.07,4.07,0,0,1,0,.56l0,.47c0,.33,0,.64-.05.93s0,.62,0,.91a2.24,2.24,0,0,1-.29,1.06,2.07,2.07,0,0,1-1.68,1,2.53,2.53,0,0,1-.48,0l-.38-.07-.75-.13a2.06,2.06,0,0,1-1.44-1,2.39,2.39,0,0,1-.28-.78c-.05-.22-.09-.44-.14-.65-.09-.43-.17-.84-.24-1.24a2.5,2.5,0,0,1,.05-1.4,1.7,1.7,0,0,1,1.16-1A1.49,1.49,0,0,1,169.92,490.24Z"
				}), c.a.createElement("path", {
					d: "M188.84,518.6c-.07.15-.69.19-1.42.15s-1.53-.17-2-.19a17.93,17.93,0,0,1-5-1.23,18.2,18.2,0,0,1-3.85-1.85,5.77,5.77,0,0,1-1.4-1.46,9.93,9.93,0,0,0-.9-1.19,2.86,2.86,0,0,1,1.84.33,4.28,4.28,0,0,1,1.11.66,8.51,8.51,0,0,0,2.57,1.8,19.81,19.81,0,0,0,2.64,1.12c1.7.58,3.22.82,4.51,1.17A15.78,15.78,0,0,1,188.84,518.6Z"
				}), c.a.createElement("path", {
					d: "M192.24,522.31a13.64,13.64,0,0,1,1.29-1.84c.67-.92,1.4-2,1.76-2.63l2-3.47.5-.9.28-.52.11-.21c.05-.07.06-.17.16-.17l.49-.12,2-.5.83-.21a1.79,1.79,0,0,0,.56-.19,5.64,5.64,0,0,0,.46-1.2c.36-1.05.69-2.09,1-3.08.56-1.86,1.08-3.62,1.56-5.24a11.48,11.48,0,0,1-.17,5l-1,2.59-.47,1.23a6.79,6.79,0,0,1-.55,1.23,1.24,1.24,0,0,1-.64.46,4.15,4.15,0,0,1-.61.15l-1.17.26-1.12.27-.51.13c-.13,0-.17.09-.23.21a46.35,46.35,0,0,1-4.19,6.47A15.88,15.88,0,0,1,192.24,522.31Z"
				}), c.a.createElement("path", {
					d: "M227.55,493.2a20.73,20.73,0,0,1-3.2,2c-1.69.92-3.67,1.84-4.76,2.37A63.18,63.18,0,0,1,206.67,502a57.78,57.78,0,0,1-5.69,1,17.83,17.83,0,0,1-2.87.24,4.71,4.71,0,0,1-2.83-1c-2.68-2.4-4.86-4.58-6.65-6.39a39,39,0,0,1,6.68,4.78,4.88,4.88,0,0,0,1.64,1.25,5.21,5.21,0,0,0,2,.27c1.43-.08,2.86-.27,4.21-.47a59.17,59.17,0,0,0,7.57-1.7,90,90,0,0,0,11.86-4.6Z"
				}), c.a.createElement("path", {
					d: "M172.42,516.8a.6.6,0,0,1-.46.27,4.2,4.2,0,0,1-1.12.06,20.78,20.78,0,0,1-3.34-.54,62.89,62.89,0,0,1-6.77-2,41.07,41.07,0,0,1-4.1-1.67,28.16,28.16,0,0,1-4-2.33c-2.56-1.74-5-3.64-7.32-5.47l-2.22-1.8h-.17l-.44,0-.88,0c-.59,0-1.17,0-1.76-.07a9.93,9.93,0,0,1-1.77-.3,4.09,4.09,0,0,1-1.76-.87,2.08,2.08,0,0,1-.61-1,2.24,2.24,0,0,1,.05-1.13,4,4,0,0,1,.41-.89,2.64,2.64,0,0,1,.73-.76,3.29,3.29,0,0,1,1.84-.52,6.94,6.94,0,0,1,1.67.23,20.86,20.86,0,0,1,5.39,2.42,39,39,0,0,1,4.14,2.84c-1.39-.64-3.37-1.62-5.26-2.44a32.67,32.67,0,0,0-4.62-1.65,2.94,2.94,0,0,0-2.74.24,2.1,2.1,0,0,0-.56,1.17,1,1,0,0,0,.59,1,7.16,7.16,0,0,0,2.91.75c.51,0,1,.06,1.53.07h.76l.87-.05,1.56,1.32,1.46,1.2c1,.78,1.92,1.53,2.86,2.25,1.88,1.43,3.71,2.76,5.53,3.89a36.23,36.23,0,0,0,5.48,2.66c1.8.72,3.55,1.33,5.22,1.86,1.11.34,2.63.82,4,1.14S172.1,517.15,172.42,516.8Z"
				}), c.a.createElement("path", {
					d: "M139.21,510.33a3.33,3.33,0,0,0,.57.95,6.83,6.83,0,0,0,2,1.25,34.36,34.36,0,0,0,4.64,1.91,53,53,0,0,0,6.17,1.51c1.07.18,2.14.34,3.22.45.53.05,1.07.1,1.59.13l.79,0a3.71,3.71,0,0,1,1,.19,10.77,10.77,0,0,1,2.16,1c.64.42,1.22.84,1.8,1.26l1.7,1.26.83.63.54.43h.06l.38-.08.74-.17,1.46-.36c.94-.25,1.86-.51,2.71-.79a13.28,13.28,0,0,0,4.32-2.09,7.92,7.92,0,0,1-3.17,2.77,14.18,14.18,0,0,1-3.44,1.41l-1.58.33-1.77.33-1.68-1.37-1.47-1.17L161.26,519c-.23-.17-.48-.35-.7-.49s-.5-.28-.76-.4a6,6,0,0,0-1.53-.55l-1.65-.13c-1.1-.09-2.16-.24-3.19-.4a35.86,35.86,0,0,1-10.53-3.28,17.33,17.33,0,0,1-2.59-1.58,3.27,3.27,0,0,1-.91-1.07A1.72,1.72,0,0,1,139.21,510.33Z"
				}), c.a.createElement("path", {
					d: "M236,514.4a14.55,14.55,0,0,1-1.47,4.36,24.37,24.37,0,0,1-3.67,5.42,12.35,12.35,0,0,1-3.25,2.56c-.61.36-1.23.7-1.86,1l-.47.24-.64.3c-.07,0-.15.09-.22.07l-.21-.1-.36-.19-.47-.24-3.78-1.93-1.86-1-.92-.47-.45-.24c-.24-.1,0,0-.24-.06a11.5,11.5,0,0,0-1.16-.05,4.05,4.05,0,0,0-.52,0l-.6.08c-.81.13-1.63.22-2.44.3-1.62.14-3.23.19-4.79.17a44,44,0,0,1-4.55-.33c-.73-.09-1.45-.2-2.14-.32l-1-.19-.5-.11-.24,0-.07,0-.06,0-.18.11-.4.23-.8.44c-.52.27-1,.53-1.55.76a28.61,28.61,0,0,1-2.9,1.13l2.64-1.68,1.45-1,1.58-1.14.74.11.49.06.91.11c.57.07,1.05.14,1.41.2a40.77,40.77,0,0,0,10.66.43c.85-.07,1.63-.19,2.5-.28a10.33,10.33,0,0,1,1.25,0l.64.06a4.87,4.87,0,0,1,.6.29l4.08,2.14,1.95,1,1,.49.38.19s.08,0,.13,0l.16-.08a34.1,34.1,0,0,0,3.5-1.92,12.5,12.5,0,0,0,1.49-1.1,17.14,17.14,0,0,0,1.25-1.31,26.15,26.15,0,0,0,2.1-2.76,31.83,31.83,0,0,0,1.87-3.3A27.57,27.57,0,0,0,236,514.4Z"
				}), c.a.createElement("path", {
					className: "cls-12",
					d: "M195,522.88l-2-7.59a8.76,8.76,0,0,1,5.83-10.55c10.37-3.32,27.59-7.46,29.62.81a2.35,2.35,0,0,1,0,.65c-.15,2-1,12.74-1.12,14.73a.92.92,0,0,1-.24.56c-1.64,1.73-12.35,11.8-31.69,2A1,1,0,0,1,195,522.88Z"
				}), c.a.createElement("path", {
					d: "M195,522.87a1.33,1.33,0,0,0,.7.46c.48.15,1.12.39,1.88.69a27,27,0,0,0,2.6,1l1.52.49.79.26.82.19a29.81,29.81,0,0,0,3.41.68l1.72.23,1.69.06a23.18,23.18,0,0,0,3.08-.13c.94-.11,1.76-.3,2.45-.43a24,24,0,0,0,5.84-2.37,13.21,13.21,0,0,0,1.38-.86c.45-.29.88-.63,1.31-1s.84-.7,1.22-1.08l.29-.29.07-.08,0,0a.26.26,0,0,0,0-.19c.13-2.43.26-4.92.38-7.42.08-1.28.15-2.56.23-3.84,0-.63.07-1.27.11-1.9s.1-1.54.07-1.32a3.46,3.46,0,0,0-1.5-2,11.06,11.06,0,0,0-5.64-1.24,38.88,38.88,0,0,0-6.51.53,109,109,0,0,0-12.61,2.85,11.35,11.35,0,0,0-2.55.92,7.45,7.45,0,0,0-1.94,1.54A7.58,7.58,0,0,0,194,513a8.24,8.24,0,0,0,.18,2.4c.16.88.33,1.74.49,2.58.31,1.68.6,3.28.85,4.79a43.39,43.39,0,0,1-2.32-4.43c-.39-.83-.78-1.71-1.16-2.59a9.45,9.45,0,0,1,1-9.2,8.7,8.7,0,0,1,3.65-3,9.7,9.7,0,0,1,1.34-.47c.44-.12.77-.19,1.17-.29l2.26-.52c1.5-.34,3-.65,4.45-.93a85.24,85.24,0,0,1,8.67-1.28,29.26,29.26,0,0,1,8.37.24,10.13,10.13,0,0,1,3.87,1.61,6.28,6.28,0,0,1,2.34,3.51,3.8,3.8,0,0,1,0,1.24l-.07,1c-.05.66-.1,1.33-.14,2-.09,1.31-.18,2.61-.26,3.87-.16,2.57-.31,5-.45,7.42A1.92,1.92,0,0,1,228,522a3.89,3.89,0,0,1-.39.43l-.32.32c-.39.38-.8.73-1.22,1.08s-.85.64-1.27,1l-1.32.85A23.72,23.72,0,0,1,217.9,528a24.76,24.76,0,0,1-11,.4C202.53,527.73,195.66,524.17,195,522.87Z"
				}), c.a.createElement("path", {
					className: "cls-12",
					d: "M147.87,504.42c-1-.47-8-10.54-9.09-10.62-3.22-.2-6.53-.74-6,1.65.73,3.15,6.4,14.88,6.4,14.88-.11,5.09,26.46,9.15,23.85,1.77C162.29,510,151.74,506.23,147.87,504.42Z"
				}), c.a.createElement("path", {
					d: "M147.88,504.4c.43-.12,3.41,1,6.88,2.26,1.72.67,3.56,1.42,5.22,2.2a24.49,24.49,0,0,1,2.34,1.26,6.23,6.23,0,0,1,1,.8,2.14,2.14,0,0,1,.43.56l.19.29c0,.11.07.22.1.33a3.28,3.28,0,0,1,0,2.23,3.86,3.86,0,0,1-1.46,1.7,9.12,9.12,0,0,1-3.5,1.29,27.18,27.18,0,0,1-7,.23,39,39,0,0,1-6.86-1.16,25,25,0,0,1-3.36-1.13,10.86,10.86,0,0,1-3.35-2.06,4,4,0,0,1-.45-.52,2.63,2.63,0,0,1-.42-.64,3.54,3.54,0,0,1-.33-.8,6.37,6.37,0,0,1-.13-.95l.2.9c-1.86-3.75-3.59-7.47-5.07-11.18-.36-.93-.71-1.85-1-2.84-.07-.24-.15-.48-.22-.77a5.3,5.3,0,0,1-.2-1l0-.32c0-.13,0-.27,0-.4s0-.27.06-.4a4,4,0,0,1,.15-.45,2.56,2.56,0,0,1,.49-.82,3.18,3.18,0,0,1,.67-.57,4.49,4.49,0,0,1,2.14-.59,11.4,11.4,0,0,1,1.56,0l1.37.14.65.08.83.09a2.63,2.63,0,0,1,1.6.85,6.37,6.37,0,0,1,.47.49l.36.42c.45.57.86,1.11,1.25,1.65.77,1.07,1.47,2.11,2.13,3.1l1.87,2.86.86,1.31.42.6.21.27.09.11,0,0h0s-.09.17-.12.25l.11-.23H148a.44.44,0,0,1-.15-.05,2.23,2.23,0,0,1-.35-.17,6.43,6.43,0,0,1-.73-.44c-.49-.32-1-.69-1.5-1.09-1-.8-2.06-1.7-3.05-2.61s-1.95-1.83-2.79-2.63c-.41-.4-.81-.78-1.14-1.07s-.16-.12-.18-.12h0l-.6-.05c-.24,0-.42,0-.59-.08a13.62,13.62,0,0,0-2.51-.27h-.29l-.09-.13a.76.76,0,0,0-.12-.19c-.16-.16-.1-.12-.16-.16l.07,0,.11,0a1,1,0,0,0,.3.05h0a.49.49,0,0,1,0,.12,2,2,0,0,0,.05.27,22,22,0,0,0,.7,2.56c.29.86.59,1.72.91,2.56,1.26,3.38,2.64,6.55,4,9.5l.08.18v.18a2.23,2.23,0,0,0,1.07,1.42,10,10,0,0,0,2.06,1.13,25.67,25.67,0,0,0,4.52,1.41,35.89,35.89,0,0,0,8.83.84,14.76,14.76,0,0,0,3.89-.59,3.85,3.85,0,0,0,1.39-.73,1,1,0,0,0,.36-.88,1.13,1.13,0,0,0-.51-.88,13,13,0,0,0-1.42-1c-1-.61-2.11-1.15-3.16-1.68C154,508,148.82,505.09,147.88,504.4Z"
				}), c.a.createElement("path", {
					className: "cls-7",
					d: "M215.81,533.06a19.09,19.09,0,0,0,4.77-1,5,5,0,0,0,.69-.33,5.8,5.8,0,0,0,.59-.36,5.12,5.12,0,0,0,.52-.4c.14-.14.4-.27.29-.51a.77.77,0,0,0-.61-.26l-.63-.08-.57,0-.26,0h-.06l-.33-.05-.73-.11a7.7,7.7,0,0,1-.75-.63l-.17-.17s.09,0,.13,0a.37.37,0,0,0,.26-.16,2.6,2.6,0,0,0,.35-1.32c.22-.23.6-.44.66-.72a2.48,2.48,0,0,0,.15-.41,6.09,6.09,0,0,0,.2-.89,8.78,8.78,0,0,0,.06-1.92,36.21,36.21,0,0,0-.54-4.26,35.82,35.82,0,0,0-1.05-4.17c-.22-.68-.45-1.35-.71-2-.13-.33-.25-.64-.4-1l-.84-2,.84-.71c.14-.11.25-.23.37-.34l.16-.16.05-.07a3.2,3.2,0,0,0,.6-2.49l1.1,1.22-.44-.12c-.25-.07-.62-.16-.94-.22a16.8,16.8,0,0,0-2.18-.25l-4.49-.31c1.33-.84,3-1.86,4.22-2.64a6.15,6.15,0,0,0,.8-.58l.57-.58a3,3,0,0,0,.23-.3l.08-.12c.06-.08.11-.17.16-.25a5.42,5.42,0,0,0,.49-1c0-.09,0-.07.06-.12s0,0,0-.05l0,0-.05,0h0l-.72,0-3.33.13a23.11,23.11,0,0,1-2.64.05c1.17-.92,2.33-1.82,3.46-2.72l.75-.6.62-.58c.38-.38.72-.74,1-1.07l.48-.56.2-.21a3.83,3.83,0,0,0,.41-.54,5.28,5.28,0,0,0-.54-.2l-.34-.1-.1,0-.17,0-.34-.06a18.89,18.89,0,0,0-2.57-.31c1.54-.63,3-1.06,7-.71a18.29,18.29,0,0,1-1.08,2.65,17.62,17.62,0,0,0-.93,1.71c0,.12.19,0,.14.06l-.11,0c-.38.07-.69.13-.92.19l-.32.08-.12,0h.65c.43,0,.89,0,1.25,0l1.1.1h.13s0,.1,0,.14v.31l0,.59c0,.38,0,.77-.09,1.14a7.59,7.59,0,0,1-1.37,3.33,2.17,2.17,0,0,1-.29.34l-.24.22a4.32,4.32,0,0,1-.58.42l-.13.07-.07,0h0l.22,0,.48.09.51.13.77.24.4.12.06.4a5.26,5.26,0,0,1-.33,2.87,5.32,5.32,0,0,1-.69,1.23l-.22.27-.13.15a3.4,3.4,0,0,1-.29.26c0,.1.08.22.11.33l.16.39c.15.39.29.77.44,1.15.27.76.53,1.52.74,2.28a36.31,36.31,0,0,1,1,4.5,35,35,0,0,1,.45,4.38,9.8,9.8,0,0,1-.2,2.23,7.09,7.09,0,0,1-.31,1.09c-.06.17-.15.37-.22.52l-.11.19a1.11,1.11,0,0,1-.43.43.7.7,0,0,1-.27.11l-.12,0,.16,0,.58.09-.59-.1.36.06.87.15.43.07.21,0,.1,0h0l-.42-.07-.21,0h.08l.32.06.4.07.09,0,.19.05.32.12a3.2,3.2,0,0,1,.92.55,1,1,0,0,1,.28.51.82.82,0,0,1-.12.56c-.09.14-.21.29-.32.44s-.33.32-.5.48a9,9,0,0,1-1.5.89,8.7,8.7,0,0,1-2.91.83A9.59,9.59,0,0,1,215.81,533.06Z"
				}), c.a.createElement("path", {
					className: "cls-7",
					d: "M143.77,511.08c-.21.14-.65-.14-1.08-.55s-.85-.94-1.16-1.21a7,7,0,0,1-2-4,7.23,7.23,0,0,1-.13-.92c0-.23-.05-.44,0-.43s.26.05-.33-.42a3.16,3.16,0,0,1-.81-1,1.91,1.91,0,0,1-.14-1.21A1.7,1.7,0,0,1,139.5,500a2.21,2.21,0,0,0,.1.44.67.67,0,0,0,.06.28.59.59,0,0,0,.41.32c.34.07.47-.17.39-.06s.09.32.27.54a4.94,4.94,0,0,1,.63.85,2.68,2.68,0,0,1,.28,1,3.94,3.94,0,0,1,0,.77,4.94,4.94,0,0,0,.23,2.15,32,32,0,0,0,1.58,3.08A6.83,6.83,0,0,1,143.77,511.08Z"
				}), c.a.createElement("path", {
					className: "cls-10",
					d: "M251.66,374.4c8.16.4,15.56,4.65,22.6,8.8a22,22,0,0,1,5.29,3.87c3.44,3.77,3.86,9.35,3.84,14.45-.09,23.32-5.42,46.26-10.72,69a10.54,10.54,0,0,1-1.68,4.25,9.32,9.32,0,0,1-4.71,2.71,42.25,42.25,0,0,1-37.57-6.63"
				}), c.a.createElement("path", {
					d: "M228.73,470.79c.38,0,1.83,1.06,4.1,2.3a46,46,0,0,0,8.89,3.68,41.77,41.77,0,0,0,10.91,1.67,38.59,38.59,0,0,0,9-.86c1-.26,2-.46,2.94-.8a22.81,22.81,0,0,0,2.85-1,6.94,6.94,0,0,0,2.25-1.48,5.31,5.31,0,0,0,1.2-2.3c.27-.92.47-2,.7-3.09l.69-3.23,1.38-6.52c1.84-8.72,3.62-17.51,4.92-25.9,1.16-7.33,2-14.64,2.53-21.8.15-1.78.19-3.56.29-5.33s.09-3.51.14-5.24a25.91,25.91,0,0,0-1.28-9.48,10.88,10.88,0,0,0-2.28-3.62,19.39,19.39,0,0,0-3.56-2.71c-2.68-1.68-5.29-3.33-7.84-4.75a52.55,52.55,0,0,0-7.56-3.58,31.49,31.49,0,0,0-7.33-1.77,24.06,24.06,0,0,1,7.81.33,44.74,44.74,0,0,1,8.78,2.85c2.84,1.24,5.47,2.6,7.74,3.83a16.26,16.26,0,0,1,5.4,4.21,17.62,17.62,0,0,1,3.27,9.24,59.55,59.55,0,0,1,0,8.87c-.29,5.72-.83,11.24-1.5,16.56-1.34,10.64-3.21,20.5-5.1,29.72-.94,4.6-1.91,9.05-2.85,13.34q-.72,3.22-1.4,6.34a23.1,23.1,0,0,1-.87,3.19,7,7,0,0,1-2.06,2.95,10.52,10.52,0,0,1-3,1.65,29.83,29.83,0,0,1-3,.92c-1,.31-2,.46-2.95.69s-2,.31-2.95.44a41.24,41.24,0,0,1-11.36-.33,36.19,36.19,0,0,1-5.75-1.43,38.34,38.34,0,0,1-5.89-2.55A39.4,39.4,0,0,1,228.73,470.79Z"
				}), c.a.createElement("path", {
					d: "M264.79,405.38c-.34-.17-.42-3.6-.43-5a13.37,13.37,0,0,1,1.8-7.49,8.1,8.1,0,0,1,2.4-2.51,8.25,8.25,0,0,1,3.05-1.22,10.27,10.27,0,0,1,5.2.46,8.11,8.11,0,0,1-1.15.44c-.42.14-.85.26-1.25.37a8.63,8.63,0,0,1-1.89.43,6,6,0,0,0-4.09,1.48,7.82,7.82,0,0,0-2.17,3.37,27.28,27.28,0,0,0-1,6.7A22.75,22.75,0,0,1,264.79,405.38Z"
				}), c.a.createElement("path", {
					className: "cls-10",
					d: "M268,426.49c3.52-.19,9.08.58,12.35-.71,1.32-.52,3.39-5.2,4.08-1.34.37,2-.36,4.85-.59,6.91-.28,2.46-.61,4.92-.95,7.38a3.31,3.31,0,0,1-3.2,3.48,75.07,75.07,0,0,1-8.15,1.42c-2.47.34-5.08.66-7.37-.33s-4-3.77-2.89-6"
				}), c.a.createElement("path", {
					d: "M261.26,437.3c.11.19-.1.8,0,1.66a5.12,5.12,0,0,0,3.15,3.72,7,7,0,0,0,1.83.4,11.57,11.57,0,0,0,3.2-.2c2.92-.68,6.18-1.29,9.22-2.13a7.49,7.49,0,0,0,1.84-.66.62.62,0,0,0,.24-.27,2.29,2.29,0,0,0,.16-.62c.05-.28.09-.67.13-1.09s.09-.8.13-1.2q.12-1.2.24-2.37l.24-2.16.12-1.07c0-.36.09-.79.14-1.15.12-.71.23-1.42.34-2.12s.19-1.54.19-1.41a.16.16,0,0,0,0-.2h-.11s0,0-.12.08-.28.26-.54.45a3.5,3.5,0,0,1-.78.43l-.58.17c-.18.06-.35.09-.52.13a8.5,8.5,0,0,1-1,.16A15,15,0,0,1,277,428a29.51,29.51,0,0,1-3.36-.18c-2.11-.22-4-.56-5.63-.73a22,22,0,0,1,6.19-1.94c2.21-.42,4-.87,4.88-1l.27,0,.13,0h.06l.05,0s0,0,.12-.05a11.2,11.2,0,0,0,.95-.93,5.24,5.24,0,0,1,1.93-1.43,3,3,0,0,1,.86-.17,1.57,1.57,0,0,1,.95.28,3,3,0,0,1,1,1.67,8,8,0,0,1,.21,2.26c0,.4,0,.8-.1,1.12s-.08.55-.13.83c-.19,1-.39,2-.58,2.92-.32,1.86-.59,3.77-.83,5.57-.11.9-.22,1.8-.33,2.67a4.88,4.88,0,0,1-1.07,2.87,5.54,5.54,0,0,1-2.64,1.31c-.81.23-1.61.42-2.41.6-1.59.36-3.13.63-4.62.88a38.47,38.47,0,0,1-4.41.54,10,10,0,0,1-4.4-.69,5.57,5.57,0,0,1-2-1.43,5.9,5.9,0,0,1-1.28-2.3,4.24,4.24,0,0,1-.05-2.2A3.28,3.28,0,0,1,261.26,437.3Z"
				}), c.a.createElement("g", {
					id: "default-8",
					"data-name": "default"
				}, c.a.createElement("path", {
					className: "cls-9",
					d: "M160.41,391.44c-7.58,9.52-14.23,22.32-22.21,41.3-8.86,21.06-18.83,37.36-29.71,32.7C94.87,459.61,99,428.82,104,414.35c6-17.58,19.42-51,47.78-60,10.88-3.44,14.23,11.57,14.23,11.57"
				}), c.a.createElement("path", {
					d: "M166,365.94c-.44-.39-1.22-3-3.31-6.14a11.88,11.88,0,0,0-4.52-4.17,7.33,7.33,0,0,0-3.27-.64,9,9,0,0,0-1.76.24l-.89.26-.95.35A49.18,49.18,0,0,0,137,364a57.36,57.36,0,0,0-9.41,9.67c-7.36,9.66-13.09,21.5-17.59,33.91-.57,1.56-1.11,3.12-1.64,4.69s-1.07,3.18-1.52,4.67a91,91,0,0,0-2.21,9.4,85.68,85.68,0,0,0-1.43,18.77,44.3,44.3,0,0,0,1,7.62,18.39,18.39,0,0,0,2.6,6.28,7.48,7.48,0,0,0,4.29,3.11,5,5,0,0,0,2.32,0,8.35,8.35,0,0,0,2.52-1.07,22.12,22.12,0,0,0,5-4.61,57.9,57.9,0,0,0,4.35-6.08,135.52,135.52,0,0,0,7.19-13.29c1.09-2.26,2.1-4.48,3.14-6.75s2.08-4.49,3.13-6.67c2.11-4.37,4.27-8.56,6.49-12.52a107.9,107.9,0,0,1,14.29-20.4c-1.43,3.13-3.13,6.87-4.82,10.91s-3.38,8.38-5,12.61c-3.2,8.46-6.1,16.46-8.13,20.5-4.17,8.26-8.37,16.25-13.84,23.36a43.7,43.7,0,0,1-4.53,5,21.48,21.48,0,0,1-5.74,4,13.34,13.34,0,0,1-3.54,1,11.6,11.6,0,0,1-3.72-.14,13,13,0,0,1-6.19-3.36,16.85,16.85,0,0,1-3.67-5.53,29,29,0,0,1-1.78-6,56.61,56.61,0,0,1-.83-11.81,103.66,103.66,0,0,1,3.1-22c.44-1.75.92-3.48,1.48-5.18s1.11-3.31,1.68-4.94q1.72-4.87,3.64-9.53a131.88,131.88,0,0,1,8.7-17.44,83.69,83.69,0,0,1,11.07-14.67,64.55,64.55,0,0,1,6.52-5.92,56.56,56.56,0,0,1,7.13-4.7,43.08,43.08,0,0,1,8.36-3.51l1.19-.34a12,12,0,0,1,1.25-.32,11.77,11.77,0,0,1,2.73-.27,9.47,9.47,0,0,1,5.1,1.66,12.14,12.14,0,0,1,3.25,3.46,18.73,18.73,0,0,1,1.75,3.55A23.3,23.3,0,0,1,166,365.94Z"
				}), c.a.createElement("path", {
					className: "cls-12",
					d: "M99.49,429.25c8.4,9.86,20.58,13.9,33.22,14.15,7,.14,2.43,2.65.15,6.87-4.65,8.57-10.16,18.23-21.63,15.5a13.58,13.58,0,0,1-8.67-6.65c-2.16-4-3.33-10.47-3.07-15,.24-4.25,2.78-9.33,1.23-13.51"
				}), c.a.createElement("path", {
					d: "M100.76,430.6c.28.13.95,1.35,1,3.32a31.65,31.65,0,0,1-.89,7,19.82,19.82,0,0,0-.41,3.81,29.53,29.53,0,0,0,.29,3.8,27.44,27.44,0,0,0,1.54,6.09,23.48,23.48,0,0,0,1.83,3.69,12,12,0,0,0,2.64,2.87,11.75,11.75,0,0,0,3.43,1.89,9.77,9.77,0,0,0,1.9.46,12.68,12.68,0,0,0,2,.2l1,0c.32,0,.64-.08,1-.11a10.3,10.3,0,0,0,1.85-.39,11.76,11.76,0,0,0,3.36-1.8,23.56,23.56,0,0,0,5.33-6.24c.66-1.06,1.29-2.15,1.91-3.27s1.27-2.33,1.9-3.48a19.18,19.18,0,0,1,1.23-1.88l.12-.17,0,0h0l0,0s0,0,0,0h-.08l-.66,0c-.71,0-2.23-.18-3.49-.31a52.68,52.68,0,0,1-7.56-1.51,40.9,40.9,0,0,1-12.86-6.07,34.39,34.39,0,0,1-8.36-8.58,97.85,97.85,0,0,0,10.79,5.32c3.83,1.5,7.44,2.47,9.29,3.24a42.84,42.84,0,0,0,11.5,3.05l1.76.17.87.07,1.08.12a5.14,5.14,0,0,1,3.42,1.52,1.81,1.81,0,0,1,.35.86,2.77,2.77,0,0,1-.07.87,5.33,5.33,0,0,1-.75,1.67c-.72,1.09-1.87,2.38-2.25,2.95a11.92,11.92,0,0,0-.73,1.07l-.7,1.2c-.47.81-1,1.62-1.41,2.42-1,1.59-2,3.14-3,4.63a32.85,32.85,0,0,1-3.57,4.14,19.33,19.33,0,0,1-4.47,3.1,15.9,15.9,0,0,1-10.31.85,15,15,0,0,1-8.28-5.35,16.61,16.61,0,0,1-2.3-4.13,29.64,29.64,0,0,1-1.3-4.19,31.2,31.2,0,0,1-.81-8.2,15.36,15.36,0,0,1,.21-2.1,19.44,19.44,0,0,1,.55-2.22c.44-1.48,1-2.91,1.41-4.26a16.2,16.2,0,0,0,.78-3.69A8.86,8.86,0,0,0,100.76,430.6Z"
				}), c.a.createElement("path", {
					className: "cls-12",
					d: "M99.49,429.25A41.82,41.82,0,0,0,137,443.2c-1.79,5-3.53,10.28-6.57,14.61-9.15,1.43-19-1.58-27.09-5.85-8.28-3.1-.51-15.62-2.62-21.34"
				}), c.a.createElement("path", {
					d: "M100.76,430.6c.29.11.89,1.29.92,3.1a36.35,36.35,0,0,1-.67,6.48,21.37,21.37,0,0,0-.29,7,4.67,4.67,0,0,0,1.18,2.34,4.2,4.2,0,0,0,1.81,1l2,.8c.63.24,1.26.5,1.9.72,1.28.47,2.58.92,3.91,1.31a52.25,52.25,0,0,0,8.11,1.82,34.26,34.26,0,0,0,8.14.22,5,5,0,0,0,1-.13c.1,0,.05-.06.08-.08v-.06l.06-.1.12-.21a33.1,33.1,0,0,0,1.75-3.53c.46-1.05.89-2.14,1.3-3.25l.51-1.4H132l-1.43,0c-.64,0-1.27,0-1.9-.08-1.25-.12-2.5-.21-3.72-.44a41.59,41.59,0,0,1-7-1.78A40.91,40.91,0,0,1,106.39,438a34.66,34.66,0,0,1-7.55-8.15c2.84,1.45,6.54,3.49,10.09,5s6.83,2.59,8.47,3.45a34.41,34.41,0,0,0,10.36,3.39,24.19,24.19,0,0,0,2.65.31l1.31.1,1.88-.07,1.85-.07,1.91-.13.93-.07.47,0,.22,0H139s0,0,0,.05l-.05.12c-.24.62-.47,1.24-.71,1.85q-.69,1.78-1.35,3.54c-.2.5-.39,1-.58,1.48l-.49,1.2c-.66,1.6-1.36,3.16-2.14,4.67-.38.75-.8,1.49-1.22,2.22l-.35.56c-.14.23-.3.46-.45.7l-.47.69-.11.17c-.05,0-.13,0-.19,0l-.39,0-1.57.21-1.25.11c-.81.08-1.62.07-2.42.1a47.79,47.79,0,0,1-17.42-3.54c-1.3-.5-2.54-1.06-3.75-1.63l-.9-.44a7.34,7.34,0,0,0-.75-.36,8.14,8.14,0,0,1-2.07-1.23,7.06,7.06,0,0,1-2.35-4.08,12.61,12.61,0,0,1-.08-4.05,45.53,45.53,0,0,1,2-7.86,20.62,20.62,0,0,0,.78-3.45A7.52,7.52,0,0,0,100.76,430.6Z"
				}), c.a.createElement("path", {
					className: "cls-8",
					d: "M169.36,366.41c-9.45-17-25.53-12.66-37.92-1.24-13,12-25.59,25.3-28.42,43.43-1,6.32-2.48,7.68-7.37,11.14-3.9,2.76-4.58,7.88-3.11,12.28,1.84,5.48,6.23,9.81,11.22,12.71,7.1,4.13,22.17,9.65,29.48,3a17,17,0,0,0,3.45-5.2c8-16.28,12.93-35.57,24.6-49.83"
				}), c.a.createElement("path", {
					d: "M161.32,392.69c-.09.55-1.57,2.57-3.51,5.71a114.68,114.68,0,0,0-6.39,12.2c-2.17,4.77-4.21,10-6.06,14.78s-3.53,9.15-4.77,12.27c-.55,1.38-1.11,2.76-1.73,4.15a42.29,42.29,0,0,1-2,4.24,15,15,0,0,1-1.46,2.14,10,10,0,0,1-.95,1l-1.06.86-.53.42-.59.34-1.19.65c-.41.19-.84.33-1.26.49a8.53,8.53,0,0,1-1.27.41,25.38,25.38,0,0,1-10.22.23,47,47,0,0,1-9.6-2.7,43.81,43.81,0,0,1-9-4.65,27.89,27.89,0,0,1-7.37-7.4A22.06,22.06,0,0,1,90,433a16.42,16.42,0,0,1-1-5.54,13.46,13.46,0,0,1,1.27-5.7A11.44,11.44,0,0,1,92,419.23,12.1,12.1,0,0,1,93,418.14c.19-.17.39-.32.59-.48l.54-.41a36.34,36.34,0,0,0,2.9-2.26,7.21,7.21,0,0,0,1.79-2.22,11.81,11.81,0,0,0,.94-3l.72-3.88a53.45,53.45,0,0,1,2.26-8,59.28,59.28,0,0,1,3.45-7.44,75.88,75.88,0,0,1,9.14-12.92,135.07,135.07,0,0,1,10.51-10.71c.89-.82,1.78-1.63,2.68-2.42s1.79-1.61,2.74-2.39a49.86,49.86,0,0,1,5.94-4.19,30.5,30.5,0,0,1,13.28-4.5,19,19,0,0,1,6.79.71,18,18,0,0,1,5.77,2.95,24.87,24.87,0,0,1,7.05,9.05,47.14,47.14,0,0,0-3.64-3.84,22.4,22.4,0,0,0-4.74-3.37,16.84,16.84,0,0,0-5.64-1.76,17.54,17.54,0,0,0-5.83.37,30.48,30.48,0,0,0-10,4.64c-2.8,1.91-5,3.82-6.59,5.1A124.74,124.74,0,0,0,116,384.28a54.16,54.16,0,0,0-10.73,20.06c-.12.44-.26.89-.36,1.33l-.28,1.35c-.19.91-.38,1.77-.55,2.75a16.38,16.38,0,0,1-2,5.66,15.64,15.64,0,0,1-4.21,4.12c-.72.54-1.56,1.09-2.12,1.55a8.18,8.18,0,0,0-1.52,1.75,10.67,10.67,0,0,0-.5,9.16,20.3,20.3,0,0,0,5.42,7.86,31,31,0,0,0,7.92,5.17,49.38,49.38,0,0,0,8.71,3.18,30.3,30.3,0,0,0,8.7,1.08,12.14,12.14,0,0,0,7.32-2.54c1.89-1.5,2.95-4.14,4.17-6.67s2.28-5.06,3.34-7.55c2.11-5,4.07-9.91,6.14-14.59a108,108,0,0,1,8.14-15.37l1.18-1.8,1.2-1.67c.75-1.08,1.54-2,2.22-2.89s1.33-1.58,1.86-2.17Z"
				}), c.a.createElement("path", {
					className: "cls-12",
					d: "M135.2,381.56c-2.47-3.2-11.56-10.66-10.49-14.67a10.61,10.61,0,0,1,3.57-5c11.12-9.68,29.91-13.82,30.07-6.26.1,4.18-6.84,11.12-9.4,14.1-3.57,4.16-7.49,8-11.39,11.84-.43.42-1,.87-1.55.71A1.72,1.72,0,0,1,135.2,381.56Z"
				}), c.a.createElement("path", {
					d: "M135.24,381.53c.15,0,.42.23.75.32s.59-.11,1.06-.65c1-1.14,2.33-2.62,3.77-4.18s3-3.25,4.31-4.82,2.46-3,3.29-4.16c1.42-2,2.93-3.87,4.3-5.87.68-1,1.35-2,1.9-3a10.36,10.36,0,0,0,1.16-2.85l.06-.3a1.48,1.48,0,0,1,0-.21,1.14,1.14,0,0,0,0-.38.79.79,0,0,0-.23-.35,3.11,3.11,0,0,0-.69-.34,6,6,0,0,0-1.27-.23,19.71,19.71,0,0,0-6.45.8,49.89,49.89,0,0,0-11.86,5.11,46.18,46.18,0,0,0-5.09,3.51,9.21,9.21,0,0,0-3,3.58.56.56,0,0,0-.07.27,3,3,0,0,0,.15.72,9.73,9.73,0,0,0,.88,1.87,40.3,40.3,0,0,0,2.58,3.75c1.83,2.44,3.71,4.58,5.16,6.94-1.33-.68-2.79-1.33-4.33-2.18a35.34,35.34,0,0,1-4.57-3,18,18,0,0,1-3.85-3.9,8.9,8.9,0,0,1-1.22-2.47,6,6,0,0,1-.25-1.41,4.58,4.58,0,0,1,.1-1.41l.15-.54a12,12,0,0,1,3.93-5.2,40,40,0,0,1,4.39-3,58.85,58.85,0,0,1,8.82-4.33,48.22,48.22,0,0,1,8.81-2.61,25.44,25.44,0,0,1,4.44-.47,10.45,10.45,0,0,1,4.55.84,4.66,4.66,0,0,1,2.8,4.22,9.65,9.65,0,0,1-1.2,4.33,37.64,37.64,0,0,1-4.31,6.3c-1.53,1.88-3.07,3.55-4.49,5.21a64.68,64.68,0,0,1-4.5,4.66,52.62,52.62,0,0,1-5.46,4.48l-1.39,1a6.12,6.12,0,0,1-1.36.83,1.18,1.18,0,0,1-1.29-.23A2.33,2.33,0,0,1,135.24,381.53Z"
				}), c.a.createElement("path", {
					className: "cls-10",
					d: "M126.14,386.11C118.68,396,111,408,108.76,420.2c-.71,3.93,0,9.36-4.8,9.32a25.93,25.93,0,0,1-8.52-1.94c.47-3.66,2.37-7.18,4.3-10.29s2.32-7.05,3-10.73a52.11,52.11,0,0,1,6.06-16.73c2.65-4.69,7.1-7.77,9.5-12.27a55,55,0,0,0,9.94,6.24A10.15,10.15,0,0,0,126.14,386.11Z"
				}), c.a.createElement("path", {
					d: "M126.11,386.09a3.25,3.25,0,0,1,.4-.83,5.13,5.13,0,0,1,.95-1.24s.13-.09.13-.13l-.23-.1c-.14-.06-.3-.13-.45-.21s-.62-.28-.94-.44-.77-.37-1.19-.59-.89-.48-1.34-.74c-.92-.52-1.86-1.11-2.8-1.75l-1.28-.88c-.32-.2-.64-.47-.92-.62-.19.36-.38.71-.59,1l-.07.11-.12.18-.26.38c-.17.25-.35.48-.53.72-.72.95-1.46,1.83-2.17,2.65a50.61,50.61,0,0,0-3.43,4.23A27.36,27.36,0,0,0,109,392c-.69,1.48-1.35,3-1.92,4.55a52.5,52.5,0,0,0-2.62,9.71c-.56,3.31-.74,7-2.39,10.63a13.75,13.75,0,0,1-.7,1.31l-.65,1.1c-.41.72-.81,1.44-1.18,2.16a22.46,22.46,0,0,0-1.72,4.35,4.31,4.31,0,0,0-.12.49h0s0,0,0,0h0l.34.1c.62.2,1.26.37,1.9.52a20.46,20.46,0,0,0,3.74.57,3.39,3.39,0,0,0,1.25-.14,1.15,1.15,0,0,0,.62-.53,3.62,3.62,0,0,0,.5-1.28,14.26,14.26,0,0,0,.31-1.78c.16-1.28.25-2.69.55-4.16l.45-2c.19-.67.37-1.33.55-2a58.31,58.31,0,0,1,2.82-7.49A81.61,81.61,0,0,1,118,395.48a114.62,114.62,0,0,1,7.64-9.71c-1.4,3.23-3.77,7.67-5.84,11.89s-3.88,8.17-5,10.19a43.94,43.94,0,0,0-5.48,16.5,9.34,9.34,0,0,1-1.6,4.49,4.15,4.15,0,0,1-2.25,1.41l-.62.14-.61,0a8.3,8.3,0,0,1-1.13,0,24.28,24.28,0,0,1-4.16-.77c-.66-.17-1.32-.37-2-.59l-.58-.2-.64-.24-1.27-.51c.07-.45.14-.92.23-1.37,0-.23.08-.46.13-.68l.15-.61c.19-.67.39-1.33.64-2a30.38,30.38,0,0,1,1.68-3.65c.61-1.15,1.32-2.3,1.93-3.33a14.51,14.51,0,0,0,1.3-3.31,69,69,0,0,0,1.26-7.06,49.77,49.77,0,0,1,1.65-6.86A50.62,50.62,0,0,1,106,393a35.54,35.54,0,0,1,3.16-5.7,48.61,48.61,0,0,1,4-4.7c.66-.72,1.31-1.43,1.91-2.14.3-.35.58-.71.87-1.07l.41-.54c.16-.2.38-.58.56-.86.33-.51.65-1.06,1.11-1.83.59.42,1.23.95,1.86,1.44l1.52,1.21c.88.69,1.78,1.39,2.67,2l1.31.9c.43.29.82.55,1.33.86l1.21.77.47.31c.07.05.17.09.18.14l-.18.15a10,10,0,0,0-1.58,1.48Z"
				}), c.a.createElement("path", {
					className: "cls-10",
					d: "M109.56,410.29c5.09,9.23,25.15,15,34.78,12a3.27,3.27,0,0,0,2.21-1.44c.37-.52,1.47-4.48,1.88-4.52-9.46,1.6-31.32-5.71-36.69-11.86"
				}), c.a.createElement("path", {
					d: "M111.77,404.45a2.46,2.46,0,0,1,.69.41,14.74,14.74,0,0,0,1.32.95l.88.6,1,.6c.71.45,1.53.85,2.37,1.28a54.37,54.37,0,0,0,9.74,3.76c3,.78,6.12,1.52,9.32,2.07l2.41.36,2.4.26c.8.07,1.6.08,2.39.13.41,0,.73,0,1.21,0a18.83,18.83,0,0,0,2.44-.18l.94.33.48.16.23.09.12,0,.06,0h0c-.64.44,1.41-1-1.42,1h0c-.1.08,0,.28,0,.5l0,.36,0,.2c.16.05.4.08.6.12s.45.07.6.13l-.15.38c-.1.26-.19.51-.28.76l-.4,1.2-.28.81-.17.45a4.65,4.65,0,0,1-.34.66,5.36,5.36,0,0,1-.77.92,4.66,4.66,0,0,1-1,.71,6.48,6.48,0,0,1-.93.39,14.46,14.46,0,0,1-1.54.42,19.83,19.83,0,0,1-3.11.53c-1,.07-2,.1-3,.1s-2-.05-3-.2a43.78,43.78,0,0,1-11-2.67,36.3,36.3,0,0,1-9-4.87,17.75,17.75,0,0,1-5.66-6.68,28.24,28.24,0,0,0,7.3,4.7c2.73,1.28,5.4,2.18,6.71,2.87a39.31,39.31,0,0,0,12.11,3.81c1,.14,2,.2,3,.26a23.48,23.48,0,0,0,2.92-.1,13.42,13.42,0,0,0,1.42-.17l1.36-.3a6.54,6.54,0,0,0,1.23-.41,2.31,2.31,0,0,0,.78-.72,4.17,4.17,0,0,0,.27-.63l.29-.79.38-1.08.18-.47a2.4,2.4,0,0,1,.11-.23l.06-.1s.11-.06,0,0l-1,.11a25.78,25.78,0,0,1-3.35,0c-1.28,0-2.5-.25-3.72-.38a69.35,69.35,0,0,1-6.92-1.4,60.81,60.81,0,0,1-11.9-4.28,30.57,30.57,0,0,1-5.38-3.42,24.3,24.3,0,0,1-2.14-1.94C112.31,405.17,112,404.69,111.77,404.45Z"
				}), c.a.createElement("path", {
					d: "M115.31,436.35c-.18.26-1,.12-1.88-.16s-1.87-.71-2.48-.85a15.07,15.07,0,0,1-6-3.37,12.88,12.88,0,0,1-3.51-4.6,6.91,6.91,0,0,1-.4-4.95c1.69,1.15,3.35,2.06,3.41,2.73a7.13,7.13,0,0,0,1.41,3.7,11,11,0,0,0,2.52,2.52c1.82,1.34,3.64,2,5,3A10.36,10.36,0,0,1,115.31,436.35Z"
				})), c.a.createElement("g", {
					id: "default-9",
					"data-name": "default"
				}, c.a.createElement("path", {
					className: "cls-9",
					d: "M239.64,463.37c-.82-7.14-2.46-16.13-4.76-22.34-13.64-36.84,9-78.79-30.64-91.82-29.14-9.57-59.41,5.74-75.67,54.17-5.89,17.56-7.77,42.31-3.48,60"
				}), c.a.createElement("path", {
					d: "M125,463.39c-.41-.51-1.42-3.5-2.2-8.06a101.05,101.05,0,0,1-1.25-17.25,135.41,135.41,0,0,1,1.69-19.92,126.12,126.12,0,0,1,3.64-16,124.81,124.81,0,0,1,8.31-21.25A85.92,85.92,0,0,1,148.81,361,58.59,58.59,0,0,1,169,346.6a50.6,50.6,0,0,1,24.31-3.68,58,58,0,0,1,10.35,2,52.39,52.39,0,0,1,9.83,3.9,35.9,35.9,0,0,1,8.75,6.43,31.75,31.75,0,0,1,6.25,8.89c3.08,6.5,4.08,13.3,4.51,19.66s.29,12.53.23,18.43-.08,11.59.24,17.06a92.11,92.11,0,0,0,2.17,15.59c.14.61.29,1.23.43,1.83s.35,1.2.52,1.79l1.09,3.68a75.53,75.53,0,0,1,1.62,7.38,118.51,118.51,0,0,1,1.5,13.7c-1.27-3.74-2.72-8.31-4.47-13.09-.88-2.39-1.84-4.83-2.92-7.17-.55-1.11-1.14-2.42-1.7-3.69s-1-2.59-1.53-3.88a78.46,78.46,0,0,1-4.27-26.33c.28-10.76,1.22-21,.11-30.55a38.06,38.06,0,0,0-3.8-13.34,27.37,27.37,0,0,0-8.9-9.79A43.05,43.05,0,0,0,201.17,350a50.4,50.4,0,0,0-12.84-1.91,45,45,0,0,0-23.58,6.43,60.85,60.85,0,0,0-17.07,15.67,84.41,84.41,0,0,0-6.16,9.29c-1,1.56-1.76,3.19-2.62,4.78s-1.63,3.2-2.33,4.83c-.37.81-.73,1.62-1.09,2.42s-.68,1.62-1,2.43c-.69,1.6-1.28,3.24-1.89,4.84s-1.14,3.23-1.71,4.82-1,3.17-1.47,4.76a135,135,0,0,0-3.79,18.8c-.39,2.91-.75,6.38-1.08,10s-.5,7.42-.5,11A102.18,102.18,0,0,0,125,463.39Z"
				}), c.a.createElement("path", {
					className: "cls-9",
					d: "M234.88,441c-13.64-36.84,9-78.79-30.64-91.82-29.14-9.57-59.41,5.74-75.67,54.17-5.89,17.56-7.77,42.31-3.48,60h0s6,10.25,50.16,13c42.25,2.63,64.39-13,64.39-13h0C238.82,456.23,237.18,447.24,234.88,441Z"
				})), c.a.createElement("path", {
					className: "cls-8",
					d: "M235.52,441.3c-1.89-5.24-3.23-12.49-6.1-17.22-1.24-2.05-1.64-1.65-4.25-2.37a10.74,10.74,0,0,1-6.44-4.43A50.06,50.06,0,0,1,210,393a27.89,27.89,0,0,1,1.69-13.32c2.94-6.82,8.8-9.66,15.9-8.94l-5.73-10.41c-1.88-3.4-34.91,23.61-39.88,23a95,95,0,0,1-25.4-6.57c1.33-6.32.81-13.81,3.38-19.65-33.81,19.62-41.58,71.86-34.86,106.74,15.59,29.88,99.4,22.08,114.55,0C242.22,461.24,239,451.05,235.52,441.3Z"
				}), c.a.createElement("path", {
					d: "M235.58,441.28a41.26,41.26,0,0,1,2.95,6.89c.7,1.95,1.48,4.25,2.15,6.91a32.87,32.87,0,0,1,.77,4.31l.06,1.19c0,.42,0,.83-.06,1.26a5,5,0,0,1-1.1,2.73l.11-.14a26,26,0,0,1-6.77,6.61,51.61,51.61,0,0,1-8.76,4.88,101.48,101.48,0,0,1-19.72,6.2,152.72,152.72,0,0,1-34.85,3.16,104.22,104.22,0,0,1-17.82-1.87,60.84,60.84,0,0,1-17.74-6.2,35.25,35.25,0,0,1-8-6,27.51,27.51,0,0,1-3.25-4c-.25-.36-.47-.74-.69-1.12l-.45-.77-.25-.44-.1-.49-.49-2.6a132.05,132.05,0,0,1-2-19,139.1,139.1,0,0,1,3.93-38,107.34,107.34,0,0,1,6.18-18,94.68,94.68,0,0,1,4.31-8.46,83.35,83.35,0,0,1,5.24-7.87c.7-.91,1.38-1.84,2.15-2.71s1.47-1.79,2.29-2.61,1.57-1.7,2.42-2.49l1.27-1.19.64-.59.31-.3.16-.15.31-.24,4.95-3.84c1.64-1.11,3.27-2.11,4.9-3.16l9.48-5.95c-1,2.4-1.92,4.79-2.87,7.19l-1.3,3.25-.32.79a7.8,7.8,0,0,0-.27.74l-.4,1.28-.4,1.29c-.1.4-.15.76-.22,1.14-.13.75-.31,1.52-.38,2.24l-.25,2.11-.11,1.07c-.14,1.43-.26,2.91-.43,4.43l-.14,1.15,0,.25h0c.9.34,2,.71,2.93,1q3,1,6,1.8t6.09,1.38c1,.19,2,.36,3.06.52l1.53.23,1.33.17s0,0,0,0a10.77,10.77,0,0,0,1-.41c.77-.36,1.61-.82,2.45-1.3,1.69-1,3.39-2,5.08-3.13,3.39-2.19,6.74-4.48,10.08-6.73s6.67-4.49,10.09-6.64c1.73-1.07,3.45-2.12,5.37-3.11a12.22,12.22,0,0,1,5-1.61,4.72,4.72,0,0,1,1.19.13,3.63,3.63,0,0,1,1.11.44l.44.33a1.4,1.4,0,0,1,.42.39l.78,1,3.9,7.22c.8,1.49,1.6,3,2.4,4.43l1.17,2.17.59,1.08c.19.36.27.61.41.91l-7.08-.51c-.57,0-1.08,0-1.62,0a8.76,8.76,0,0,0-1.56.08c-.25,0-.47.09-.7.13l-.31.05-.6.16a10.29,10.29,0,0,0-4.18,2.28,15.71,15.71,0,0,0-4.38,9.1,37.27,37.27,0,0,0,.18,11.05,48.39,48.39,0,0,0,2.85,10.56,52.22,52.22,0,0,0,2.24,4.85c.41.78.85,1.54,1.3,2.3s.93,1.52,1.36,2.08a8.17,8.17,0,0,0,3.36,2.65,16,16,0,0,0,2.22.75l.63.16c.3.08.62.16.92.27a4.09,4.09,0,0,1,1.61,1,6.79,6.79,0,0,1,1.1,1.47c.27.46.46.84.68,1.26.4.84.76,1.67,1.07,2.5.63,1.67,1.11,3.31,1.55,4.93.88,3.23,1.55,6.37,2.45,9.27-1.39-2.65-2.62-5.88-4.07-9.24a47.07,47.07,0,0,0-2.46-5.06,21.23,21.23,0,0,0-1.55-2.35,3.1,3.1,0,0,0-.84-.78,3,3,0,0,0-1.09-.27,14.71,14.71,0,0,1-6.38-2.07,12.82,12.82,0,0,1-2.71-2.43c-.74-.91-1.37-1.74-2-2.66a50.24,50.24,0,0,1-9-24.69A29,29,0,0,1,208,378.57a20.26,20.26,0,0,1,3.13-5.49,17.08,17.08,0,0,1,4.53-3.93,17.75,17.75,0,0,1,4.9-1.95l.45-.1h0a.09.09,0,0,0,.06,0,.48.48,0,0,0,.16.07c.14,0,.12-.07.12-.21v-.12l0-.07c-.2-.41-.41-.81-.61-1.21l-.55-1.09,0-.18a1.27,1.27,0,0,0-.08-.23c-.05-.08-.13-.07-.2-.07l-.24.05-.13,0-.12.05-.31.16c-1.69.84-3.43,1.86-5.14,2.89-3.44,2.09-6.83,4.3-10.2,6.49s-6.72,4.39-10.13,6.51c-1.71,1.06-3.42,2.1-5.21,3.08-.9.49-1.82,1-2.81,1.41a16.18,16.18,0,0,1-1.66.63,5.42,5.42,0,0,1-2.26.25l-1.82-.26-1.69-.28c-1.12-.19-2.24-.4-3.35-.63q-3.33-.69-6.56-1.59t-6.33-2l-1.54-.56-1.61-.61c-1.44-.59-2.92-1.15-4.27-1.77a85.26,85.26,0,0,0,1.48-10.23l.12-1.07.08-.61c.05-.41.11-.82.19-1.23a18.76,18.76,0,0,1,.57-2.44c.13-.38.26-.75.41-1.12l.06-.14s0-.06,0-.05l-.06,0-.24.14-.48.3-1,.58-.94.66a22.33,22.33,0,0,0-1.86,1.42c-.48.34-1.57,1.37-2.48,2.19a65.26,65.26,0,0,0-9.65,11.52A91.46,91.46,0,0,0,129,404.56a130.68,130.68,0,0,0-4.23,27.63,133.16,133.16,0,0,0,1.37,26.57c.16,1.07.34,2.13.55,3.18l.24,1.27.62,1.06a22.79,22.79,0,0,0,3.82,4.55,35.7,35.7,0,0,0,10.12,6.35,79,79,0,0,0,23.07,5.47,137.62,137.62,0,0,0,22.85.22A145.31,145.31,0,0,0,209,477.71a103.81,103.81,0,0,0,15.72-4.88,50,50,0,0,0,7.85-4,24.37,24.37,0,0,0,6.27-5.52l.09-.11,0,0a4.9,4.9,0,0,0,.79-3.14,22.87,22.87,0,0,0-.33-3.72c-.38-2.42-.91-4.65-1.42-6.62C236.93,445.71,236,442.77,235.58,441.28Z"
				}), c.a.createElement("path", {
					className: "cls-10",
					d: "M154.85,396.28c-7.61,7.44-10.79,35-8.92,42,.45,1.71.48,3.63,1.72,4.9,2.21,2.27,6.53,2.4,9.48,2.26-2.77-7.18-2.21-14-1-21.47a83.21,83.21,0,0,1,6.39-21.43,6,6,0,0,0,.8-3.38c-.21-1.16-1.54-2.17-2.57-1.6"
				}), c.a.createElement("path", {
					d: "M160.69,397.55a1.09,1.09,0,0,1,1-.33,2.44,2.44,0,0,1,1.82,1.49,4.47,4.47,0,0,1-.23,3.22c-.41,1-.86,2.12-1.31,3.26a71.77,71.77,0,0,0-3.76,12.94c-.37,2.14-.69,4.34-.93,6.6s-.48,4.56-.55,6.85a37.16,37.16,0,0,0,.34,6.77,29.9,29.9,0,0,0,.67,3.26l.11.39.06.2,0,.1.07.19.52,1.53c.32,1,.76,2.12,1.14,3.18l-3.32.15c-1.08,0-2.46,0-2.88-.05a15.41,15.41,0,0,1-3.84-.7,7.91,7.91,0,0,1-4-2.76,10.88,10.88,0,0,1-1.46-4.22c-.06-.28-.11-.54-.18-.78s-.17-.72-.23-1.06c-.12-.69-.19-1.35-.24-2a37.66,37.66,0,0,1-.1-3.81A83.05,83.05,0,0,1,145,417.77a70.74,70.74,0,0,1,3.52-12.45c1.51-3.74,3.32-7.17,5.93-9.44-3.2,5.42-4.29,16.24-5.34,20.05a80.13,80.13,0,0,0-2.06,10,53.81,53.81,0,0,0-.58,9.62,15.51,15.51,0,0,0,.26,2.22c.17.74.32,1.61.45,2.32a6.44,6.44,0,0,0,.62,1.93,3.76,3.76,0,0,0,1.32,1.31,9.46,9.46,0,0,0,3.89,1.23l1,.1.42,0H156c.05,0,.14,0,.09-.06l-.29-.78-.26-.82c-.23-.84-.45-1.74-.63-2.6a34.69,34.69,0,0,1-.6-5.2,58.42,58.42,0,0,1,.57-9.78A71.37,71.37,0,0,1,159,408.59c.4-1.07.94-2.32,1.55-3.59s1.35-2.58,1.94-3.72.74-2.34.09-3.09a2,2,0,0,0-1-.7A1.45,1.45,0,0,0,160.69,397.55Z"
				}), c.a.createElement("path", {
					className: "cls-10",
					d: "M155.64,394.66l.08,0c2.33-.9,8.27,2.74,10.4,3.68a4.74,4.74,0,0,0,2.45.58,5,5,0,0,0,2.18-1.09c13.35-9.76,27.76-18.14,41.93-26.69-1.88,4.67-3.79,9.45-4.1,14.48-11,7-37.41,23.73-40,23.67-2.18-.05-4.75-1.46-6.75-2.21a55.58,55.58,0,0,1-10-4.42C152.58,400.81,153.74,395.54,155.64,394.66Z"
				}), c.a.createElement("path", {
					d: "M155.65,394.69c-.08.12-.32.3-.59.67a9.25,9.25,0,0,0-.86,1.64c-.29.71-.58,1.57-.88,2.54-.14.49-.3,1-.46,1.54s-.24.85-.39,1.28a5.61,5.61,0,0,0,.91.54l.59.3.68.32c.93.43,1.9.83,2.89,1.22,2,.79,4.09,1.42,6.12,2.27a29.14,29.14,0,0,0,2.87,1.06,8.91,8.91,0,0,0,1.35.3,4.83,4.83,0,0,0,.6.05,1.42,1.42,0,0,0,.44-.1,31.22,31.22,0,0,0,4.16-2.18c6.53-4,13.44-8.49,20.42-13L204,386.38l2.57-1.67.17-.12c.06,0,.13-.09.11-.1v0s0,0,0-.15l.09-.8a36.55,36.55,0,0,1,1.39-6.22l.48-1.47v0h0s.05,0-.2.14l-2.88,1.73-7.93,4.74c-5.22,3.12-10.26,6.18-15,9.17-2.38,1.5-4.69,3-6.91,4.44l-3.27,2.17-1.64,1.1a4.43,4.43,0,0,1-4.68.35c-.61-.27-1.18-.58-1.71-.88-1.06-.6-2.06-1.19-3.06-1.72a24.41,24.41,0,0,0-2.94-1.4,4.78,4.78,0,0,0-2.65-.44,2.4,2.4,0,0,1,1.31-.38,7.68,7.68,0,0,1,1.75.14,24.21,24.21,0,0,1,3.79,1c1.29.44,2.64,1,3.9,1.43a3.77,3.77,0,0,0,1.62.26,2.71,2.71,0,0,0,1.17-.67c1-.85,2.13-1.81,3.16-2.64s2.07-1.64,3-2.35a57.62,57.62,0,0,1,4.83-3.31c5.71-3.36,11.25-6.51,16.58-9.53l7.82-4.47,9.51-5.53c-.95,2.34-1.92,4.64-2.73,6.86l-.5,1.38-.38,1.18c-.25.78-.47,1.57-.66,2.35s-.35,1.57-.47,2.36c-.07.39-.12.79-.16,1.18l0,.31,0,.42c0,.28,0,.57-.08.83L205,388.83l-15.24,9.73c-4.86,3.07-9.51,6-14.06,8.56-1.14.65-2.28,1.28-3.44,1.86-.57.3-1.16.58-1.77.85a8.14,8.14,0,0,1-1,.37,3.21,3.21,0,0,1-1.33.14,13.52,13.52,0,0,1-3.83-1.1c-1.16-.49-2.2-1-3.27-1.41-1.37-.53-3-1.17-4.66-1.95-.83-.39-1.67-.81-2.5-1.28l-1.33-.78a14,14,0,0,1-1.42-1c.29-.63.54-1.26.76-1.83s.37-.93.54-1.37c.36-.88.72-1.7,1.09-2.41a9.31,9.31,0,0,1,1.13-1.75A2.93,2.93,0,0,1,155.65,394.69Z"
				}), c.a.createElement("path", {
					d: "M168.41,398.43q11.28-7.08,22.52-14.23L208.63,373c1.31-.83,15-8.52,14.7-9.58a3,3,0,0,0-3-2.06,8.54,8.54,0,0,0-3.7,1.14,270.58,270.58,0,0,0-30.82,17.73,10.55,10.55,0,0,1-3.8,1.87,9.78,9.78,0,0,1-4.22-.38,77,77,0,0,1-18.62-7.33,4.47,4.47,0,0,1-2.18-2,4.53,4.53,0,0,1,0-2.53c1-5.38,2.82-10.52,4.17-15.8-4.81-.54-9.17,10.84-10.28,14.4-2.83,9-1.2,18.43,3.77,26.4Z"
				}), c.a.createElement("path", {
					d: "M168.4,398.46a47.32,47.32,0,0,1-6.12-1.2l-5.75-1.36-1.74-.42c-.16-.06-.38,0-.5-.17l-.28-.46-.51-.84a36.36,36.36,0,0,1-1.69-3.23,32.35,32.35,0,0,1-3-14.76,42.3,42.3,0,0,1,6.16-19l.29-.42.16-.22.22-.3c.33-.39.65-.8,1-1.15a8,8,0,0,1,2.2-1.63,5.11,5.11,0,0,1,2.27-.54c.21,0,.4,0,.62,0s.5,0,.53.06a3.74,3.74,0,0,0,.57.32c-.42,1.69-.87,3.47-1.36,5.24-.32,1.2-.64,2.4-1,3.6-.57,2.15-1.13,4.3-1.58,6.46a17.93,17.93,0,0,0-.47,2.95.92.92,0,0,0,.23.61,3.4,3.4,0,0,0,.88.67c1.86,1,3.94,2.05,6,2.94a75.34,75.34,0,0,0,12.62,4.28,10.78,10.78,0,0,0,2.85.44,4.63,4.63,0,0,0,2.3-.72c.8-.46,1.74-1.14,2.67-1.75l2.78-1.84c5.53-3.6,11.18-7,16.86-10.06q4.26-2.31,8.53-4.43l2.15-1.05a12.38,12.38,0,0,1,2.63-.95,7.16,7.16,0,0,1,1.64-.14,3.57,3.57,0,0,1,.46,0c.18,0,.37.06.56.1a5.64,5.64,0,0,1,1.07.37,4.5,4.5,0,0,1,2.57,3,3.93,3.93,0,0,1,.06.48s.09,0-.09,0v.22l0,.22a2.12,2.12,0,0,1-.06.44l-.24.41a7.85,7.85,0,0,1-1.62,1.51,4.78,4.78,0,0,1-.44.32l-.25.18-.51.35-1,.67c-1.35.86-2.69,1.67-4,2.47l-7.87,4.55-14.79,9c-9.48,5.72-18.13,10.83-25.6,15.11,8.87-7.56,27.07-20.43,33.93-24.42l5.3-3.09,5.28-2.88c1.73-1,3.43-1.93,5.08-2.92.83-.49,1.64-1,2.42-1.51l.56-.38c.11-.1.36-.23.26-.42a1.15,1.15,0,0,0-1-.73,5.49,5.49,0,0,0-2.63.61c-1.94.89-3.92,1.85-5.83,2.8-3.85,1.91-7.56,3.9-11.16,5.93s-7.08,4.13-10.44,6.27c-1.69,1.07-3.31,2.14-5,3.24a10.3,10.3,0,0,1-2.83,1.36,7.51,7.51,0,0,1-3.19.1,27,27,0,0,1-2.88-.65c-.93-.24-1.85-.5-2.76-.77q-2.73-.82-5.35-1.82a78.71,78.71,0,0,1-10-4.61,5,5,0,0,1-2.29-2.18,5.22,5.22,0,0,1-.11-3.11c.32-1.74.72-3.43,1.14-5.1s.88-3.29,1.33-4.9c.16-.58.31-1.15.47-1.72.1-.39.2-.76.3-1.14l.12-.52a1.06,1.06,0,0,0-.52,0,2.45,2.45,0,0,0-.93.53,5.15,5.15,0,0,0-.72.76c-.05.08-.3.4-.5.69s-.38.58-.57.88a43,43,0,0,0-3.58,7.59,30.35,30.35,0,0,0-1.72,15.45,36,36,0,0,0,1.9,7.19,40.12,40.12,0,0,0,1.67,3.75l.44.81c.06.1.09.23.18.3l.33.11,1.89.58C162.51,396.59,167,398,168.4,398.46Z"
				}), c.a.createElement("path", {
					className: "cls-5",
					d: "M172.78,446.44c-17.39.49-37.94-.95-50.54-14.6-1.33,15-2.42,34,11.91,42.89a112.38,112.38,0,0,0,56,8.38c13.46-2.52,52.83-8.86,49.75-27.35C234.15,417.7,229.57,447.85,172.78,446.44Z"
				}), c.a.createElement("path", {
					d: "M172.78,446.41c1.21-.36,12.92,0,26.14-2.36,3.29-.62,6.68-1.34,10-2.26s6.58-2,9.68-3,6-2.17,8.91-2.83a11.29,11.29,0,0,1,4.32-.32,6,6,0,0,1,3.59,1.83,14.34,14.34,0,0,1,2.94,5.33l.47,1.41.38,1.42c.28.95.47,1.91.7,2.87.42,1.91.79,3.85,1.12,5.79.08.49.18,1,.25,1.48l.17,1.62c0,.55,0,1.1,0,1.65s-.17,1.1-.26,1.65a14.45,14.45,0,0,1-2.93,5.87,24.15,24.15,0,0,1-4.69,4.36,51.57,51.57,0,0,1-11.07,5.81,143.53,143.53,0,0,1-23.71,6.63l-6,1.16-1.47.28-.77.14c-.28.05-.33,0-.48.06l-.38,0-3,.3a112.31,112.31,0,0,1-12,.29,111.17,111.17,0,0,1-39.92-8.5c-6.87-3.16-11-9.51-13-15.93a43.78,43.78,0,0,1-1.79-9.73,74.1,74.1,0,0,1-.14-9.52c0-1.56.17-3.1.27-4.63.09-1,.17-2,.25-3,.13-1.36.25-2.72.38-4.08l.09-1,0-.5,0-.25v-.19s0,0,0,0l1.46,1.42,2.87,2.82c.24.23.46.48.75.71l.51.42.8.68a15.6,15.6,0,0,0,1.65,1.29,46.17,46.17,0,0,0,14.69,6.94,84,84,0,0,0,15.09,2.69c4.9.45,9.59.57,14,.58-7.85,1.05-19.67,1.71-30.71-.89a46.33,46.33,0,0,1-14.74-6.26,27.81,27.81,0,0,1-2.84-2.09l-.6-.49c.06.06,0,0,0,0h0s0,0,0,0,0,0,0,0l-.1,1c-.08.68-.12,1.35-.18,2-.12,1.34-.18,2.68-.26,4a71.12,71.12,0,0,0,.06,7.87,35.4,35.4,0,0,0,3.76,14.56c.31.53.66,1,1,1.56l.49.77.58.71,1.15,1.41,1.32,1.25.66.63c.22.2.48.36.72.54l1.47,1.07a1.54,1.54,0,0,0,.27.19l.41.17.85.38,1.71.74a102.1,102.1,0,0,0,13.94,4.55A111.56,111.56,0,0,0,179.43,483l3.38-.08,3.35-.19c1.11-.09,2.21-.21,3.31-.31a7.13,7.13,0,0,0,.77-.09l.82-.15,1.63-.3c4.34-.81,8.59-1.65,12.73-2.63s8.18-2.08,12.06-3.4a68,68,0,0,0,11.06-4.73,36.58,36.58,0,0,0,4.82-3.19,18.91,18.91,0,0,0,3.77-4A10.94,10.94,0,0,0,239,459l.05-1.29a11.38,11.38,0,0,0-.1-1.3c-.08-.85-.29-1.83-.42-2.73a74.52,74.52,0,0,0-2.39-10.57,12,12,0,0,0-2.31-4.25,4.61,4.61,0,0,0-4-1.28,23.76,23.76,0,0,0-4.82,1.07c-1.61.48-3.22,1-4.82,1.55-3.21,1.07-6.4,2.06-9.58,2.89a102,102,0,0,1-10.41,2.21c-3.8.57-7.77,1-11.5,1.21A136.46,136.46,0,0,1,172.78,446.41Z"
				}), c.a.createElement("path", {
					d: "M192.3,481c-.35,0-.93-1.33-1.46-2.86s-1-3.31-1.43-4.28a46.09,46.09,0,0,1-2.67-11.31c-.88-6.6.07-13.28,1.93-17.29a13.26,13.26,0,0,1,1.47,3.87,7,7,0,0,1,.28,3.15,31.2,31.2,0,0,0-.55,13.7c.66,4,1.7,7.36,2.2,10.4A31,31,0,0,1,192.3,481Z"
				}), c.a.createElement("path", {
					d: "M116.27,467.11c.07-.63,1.31-.6,1.79-1a5.77,5.77,0,0,1,2.68-.94,4.39,4.39,0,0,1,4,1.36c-.45,1.66-1.31,2.82-1.61,2.53-2.47-2.35-4.35-.41-5.81-.94C117,468.09,116.39,467.3,116.27,467.11Zm3.63-1.31h0"
				}), c.a.createElement("path", {
					d: "M152.54,479.1c-.33,0-1.1-1.09-1.79-2.49s-1.32-3.06-1.74-4a31.22,31.22,0,0,1-2.51-10.91,40.57,40.57,0,0,1,2.16-16.33c1.47,2,2.33,5.5,2,6.69a29.47,29.47,0,0,0-1.15,13,74,74,0,0,0,2.32,9.68A41.08,41.08,0,0,1,152.54,479.1Z"
				}), c.a.createElement("path", {
					d: "M171.69,483.45c-.35.09-1.43-1-2.26-2.56a32.74,32.74,0,0,1-1.89-4.48c-1.49-3.71-1.86-8.17-2-12.16a43.73,43.73,0,0,1,.17-5.15c.16-1.57.22-3.13.45-4.75a16.62,16.62,0,0,1,1.2-4.58,6.42,6.42,0,0,1,2.86-3.22,10.77,10.77,0,0,0-.06,4.15,8.5,8.5,0,0,1,.09,3.06,27.74,27.74,0,0,0-.92,3.88c-.24,1.37-.49,2.53-.62,3.75a36.17,36.17,0,0,0-.16,6.77,57.19,57.19,0,0,0,1.92,10.72c.22.69.4,1.69.62,2.6S171.62,483.17,171.69,483.45Z"
				}), c.a.createElement("path", {
					d: "M230.28,471.7c-.3-.13-.46-1.46-.5-3s0-3.25-.18-4.21c-.46-3.39-.47-7.2-.93-10.51a39.92,39.92,0,0,0-1.71-8,20.18,20.18,0,0,0-3.25-5.82,6.16,6.16,0,0,1,3.92,1,5.76,5.76,0,0,1,1.55,1.28,3.06,3.06,0,0,1,.77,1.22,39.53,39.53,0,0,1,1.21,7.4c.22,2.24.31,4.31.42,6.25a58.09,58.09,0,0,1-.12,10.17A21.69,21.69,0,0,1,230.28,471.7Z"
				}), c.a.createElement("path", {
					d: "M212.54,478.71c-.61-.32-.38-5.42-.75-7.38-.62-3.45-.9-7.36-1.44-10.84-.46-3-.9-6-1.32-8.78s-.78-5.27-.95-7.37c2.19,1.12,4.36,4.35,4.38,5.7.11,5.36.54,9.8.92,13.79a52.81,52.81,0,0,1,.37,10.51A18.58,18.58,0,0,1,212.54,478.71Z"
				}), c.a.createElement("path", {
					className: "cls-6",
					d: "M122.79,434.14c7.45,5.3,12.43,13.3,17.22,21.08a11.13,11.13,0,0,1,1.82,4.11c.55,3.77-2.69,6.91-5.63,9.33-2,1.61-4.2,3.32-6.72,3.12-3.13-.24-5.28-3.32-6.23-6.3-1.28-4-1.29-8.26-1.28-12.44L122,437c0-.67.19-1.55.86-1.6"
				}), c.a.createElement("path", {
					d: "M122.87,435.39a1.06,1.06,0,0,0-.43.54,4.32,4.32,0,0,0,0,1.62c.09,1.43.15,3.32.21,5.35.11,4.05.18,8.65.36,11.21a68.16,68.16,0,0,0,.71,6.8,17.87,17.87,0,0,0,2.11,6.27,7,7,0,0,0,2,2.16,3.5,3.5,0,0,0,2.31.63c1.61-.12,3.39-1.49,5.1-3a19.42,19.42,0,0,0,3.76-4,4.73,4.73,0,0,0,.77-4.05,11.58,11.58,0,0,0-1.08-2.24l-1.48-2.48c-1-1.65-1.93-3.26-2.89-4.8a88.51,88.51,0,0,0-5.82-8.44,50.35,50.35,0,0,0-6-6.38,23.63,23.63,0,0,1,8.18,4.78,27.89,27.89,0,0,1,5.51,6.21c1.68,2.94,3.19,5.8,4.68,8.55a15.78,15.78,0,0,1,1.94,4.55,7.46,7.46,0,0,1-.87,4.94,15,15,0,0,1-2.86,3.58c-1.06,1-2.15,1.9-3.25,2.77a14,14,0,0,1-3.68,2.18,6.2,6.2,0,0,1-4.39,0,7.79,7.79,0,0,1-3.32-2.57,13,13,0,0,1-1.9-3.45,27.05,27.05,0,0,1-1.45-7.08c-.19-2.3-.2-4.5-.19-6.6s0-4.13.11-6.09.26-4.4.49-6.64c.12-1.12.23-2.14.35-3a2.43,2.43,0,0,1,.43-1.07A.75.75,0,0,1,122.87,435.39Z"
				}), c.a.createElement("g", {
					id: "default-10",
					"data-name": "default"
				}, c.a.createElement("path", {
					className: "cls-9",
					d: "M259,439.57c-1.14-18.56-3.92-46-22.5-62.52-15.91-14.11-22.11-3.87-24.33-.71s-5.63,16-1.42,26.09,7.75,25.3,10.38,45.72c2.91,22.66,8.17,41,19.89,39.46C255.75,485.62,260,454.84,259,439.57Z"
				}), c.a.createElement("path", {
					className: "cls-9",
					d: "M210.79,402.43c4.77,11.19,7.75,25.3,10.38,45.72,2.91,22.66,8.17,41,19.89,39.46,14.69-2,18.92-32.77,18-48-1.14-18.56-3.92-46-22.5-62.52-15.91-14.11-24.32-.71-24.32-.71"
				}), c.a.createElement("path", {
					d: "M212.16,376.31a4.94,4.94,0,0,1,1.13-2,12.7,12.7,0,0,1,3.82-3.15,12.86,12.86,0,0,1,6.86-1.53,19.83,19.83,0,0,1,7.88,2.5,31.52,31.52,0,0,1,3.62,2.4l1.72,1.34c.57.45,1.07,1,1.61,1.46a35.24,35.24,0,0,1,3.06,3.05l1.41,1.58.7.78.63.83a69.55,69.55,0,0,1,7.46,11.87c5.77,11.25,8.54,24.7,9.84,38,.17,1.67.32,3.34.45,5s.25,3.47.28,5.17a99.71,99.71,0,0,1-.36,10.25,85.88,85.88,0,0,1-3.94,19.87,43.24,43.24,0,0,1-3.79,8.28,26.74,26.74,0,0,1-2.87,3.9,18.17,18.17,0,0,1-3.92,3.37,14.73,14.73,0,0,1-5.08,2.1,13.2,13.2,0,0,1-10.89-2.29,17.9,17.9,0,0,1-3.65-3.62,33.33,33.33,0,0,1-4.34-7.95,66.49,66.49,0,0,1-2.53-8,131.54,131.54,0,0,1-2.82-15.48c-.65-5.08-1-9.86-1.6-14.53s-1.12-9.16-1.78-13.46a138.87,138.87,0,0,0-5.32-23.2,55.42,55.42,0,0,1,5.95,10.1,97.72,97.72,0,0,1,4.82,12.78,110,110,0,0,1,4.5,21.66c.28,4.42.67,8.74,1.26,12.95a83.65,83.65,0,0,0,2.54,12.18,40.69,40.69,0,0,0,2.07,5.55,19.3,19.3,0,0,0,2.94,4.7,9.76,9.76,0,0,0,1.89,1.71,7,7,0,0,0,2.15,1,8.13,8.13,0,0,0,4.8-.17c3.19-1,5.71-3.86,7.54-7a42.65,42.65,0,0,0,4.17-10.07,88,88,0,0,0,3.1-20.92c.06-1.71.06-3.4,0-5.08s-.19-3.31-.32-5q-.39-5-1-9.8a126.4,126.4,0,0,0-3.57-18.24,78.93,78.93,0,0,0-6.24-15.94,57.68,57.68,0,0,0-9.17-12.84l-1.32-1.35c-.23-.23-.46-.48-.7-.71l-.77-.67-1.58-1.4c-.54-.47-1.15-.85-1.73-1.3a17.21,17.21,0,0,0-7.87-3.38,11.86,11.86,0,0,0-7.35,1.54A14.85,14.85,0,0,0,212.16,376.31Z"
				}), c.a.createElement("path", {
					className: "cls-12",
					d: "M219.65,455.18c10.7,7.3,23.51,8,35.78,4.89,6.77-1.7,3,1.92,1.95,6.59-2.23,9.49-5,20.26-16.78,20.65a13.59,13.59,0,0,1-10.12-4.13c-3.13-3.27-6-9.22-6.91-13.65-.89-4.16.22-9.72-2.38-13.36"
				}), c.a.createElement("path", {
					d: "M221.23,456.15c.3.05,1.27,1.05,1.88,2.92a31.3,31.3,0,0,1,1,7,20.42,20.42,0,0,0,.61,3.78,29.43,29.43,0,0,0,4.37,9.06,21.89,21.89,0,0,0,2.74,3.07,12.07,12.07,0,0,0,7.11,3,9.15,9.15,0,0,0,1.95-.06,13,13,0,0,0,2-.33l1-.25c.31-.1.59-.24.9-.35a12.71,12.71,0,0,0,1.68-.87,11.82,11.82,0,0,0,2.76-2.62,23.47,23.47,0,0,0,3.5-7.43c.36-1.19.68-2.41,1-3.65s.6-2.58.91-3.86a19.31,19.31,0,0,1,.69-2.14l.07-.2v0h0a0,0,0,0,0,0,0v0h0l-.07,0-.66.14c-.69.16-2.19.41-3.45.61a51.64,51.64,0,0,1-7.69.54,41.35,41.35,0,0,1-14-2.46,34.69,34.69,0,0,1-10.33-6.08A96.65,96.65,0,0,0,231,458.16c4.09.45,7.82.43,9.81.68a42.7,42.7,0,0,0,11.9-.08l1.74-.31.86-.15,1.07-.18a5.21,5.21,0,0,1,3.7.57,1.8,1.8,0,0,1,.57.74,2.89,2.89,0,0,1,.16.85,5.71,5.71,0,0,1-.28,1.81c-.41,1.24-1.18,2.79-1.4,3.44-.16.42-.3.82-.42,1.23l-.36,1.34c-.24.91-.49,1.81-.73,2.7q-.74,2.68-1.68,5.27a32.36,32.36,0,0,1-2.36,4.93,18.92,18.92,0,0,1-3.5,4.17,15.84,15.84,0,0,1-9.72,3.54,15,15,0,0,1-9.39-3,16.5,16.5,0,0,1-3.31-3.38,28.92,28.92,0,0,1-2.35-3.69,31.28,31.28,0,0,1-2.94-7.7,14.36,14.36,0,0,1-.36-2.09,21.63,21.63,0,0,1-.06-2.28c0-1.54.19-3.06.24-4.48a15.77,15.77,0,0,0-.22-3.77A8.94,8.94,0,0,0,221.23,456.15Z"
				}), c.a.createElement("path", {
					className: "cls-12",
					d: "M219.65,455.18a41.82,41.82,0,0,0,39.86,3.56c-.42,5.28-.7,10.85-2.49,15.83-8.45,3.8-18.72,3.48-27.67,1.51-8.81-.82-4.61-14.95-8.16-19.91"
				}), c.a.createElement("path", {
					d: "M221.23,456.15c.31,0,1.19,1,1.7,2.74a37.35,37.35,0,0,1,1.07,6.43,21.2,21.2,0,0,0,1.56,6.81,4.47,4.47,0,0,0,1.75,1.94,4.12,4.12,0,0,0,2,.5l2.14.24c.67.06,1.34.15,2,.2,1.36.11,2.74.2,4.12.23a52.33,52.33,0,0,0,8.3-.39,33.77,33.77,0,0,0,7.91-1.93,4.1,4.1,0,0,0,.92-.39c.1,0,0-.06.06-.09v-.05h0l0-.12.07-.23a35.3,35.3,0,0,0,.76-3.87q.24-1.71.39-3.48l.13-1.48h0s.05,0-.06,0l-.47.14-1.4.35c-.62.15-1.23.33-1.85.43a36.3,36.3,0,0,1-3.7.55,40.4,40.4,0,0,1-20.08-2.93,34.84,34.84,0,0,1-9.43-5.87c3.13.65,7.23,1.65,11.05,2.13s7.26.7,9.07,1.09a34.33,34.33,0,0,0,10.9.54,25.66,25.66,0,0,0,2.63-.4l1.29-.25,1.8-.56,1.76-.55,1.81-.63.88-.31.44-.16.22-.07.05,0s0,0,0,.05v.13c-.07.66-.14,1.31-.2,2-.13,1.27-.25,2.53-.37,3.77-.06.53-.12,1.06-.17,1.58s-.11.86-.16,1.29c-.22,1.71-.48,3.4-.83,5.06-.17.83-.37,1.65-.59,2.46l-.19.64-.25.79-.27.79-.07.2a.67.67,0,0,1-.17.08l-.36.16-1.46.61c-.44.18-.78.29-1.18.44-.76.29-1.54.49-2.31.73a47.78,47.78,0,0,1-17.73,1.18c-1.38-.14-2.73-.35-4.05-.58l-1-.19c-.31-.06-.72-.15-.82-.15a7.88,7.88,0,0,1-2.32-.64,7,7,0,0,1-3.34-3.32,12.52,12.52,0,0,1-1.15-3.89,46.35,46.35,0,0,1-.12-8.11,20.35,20.35,0,0,0-.14-3.53A7.75,7.75,0,0,0,221.23,456.15Z"
				})), c.a.createElement("path", {
					className: "cls-8",
					d: "M209.76,383.11c-.46-15.95,21.19-14.62,29.83-6.84a75.08,75.08,0,0,1,22.79,30.36,67.64,67.64,0,0,1,5.07,18.77c.58,5.41-2.35,12-.92,16.93a26.87,26.87,0,0,0,2,3.95c2.47,5.17.35,11.65-3.74,15.65s-9.74,6-15.32,7.27c-6.67,1.55-13.88,2.3-20.54.29-7.84-2.36-15.34-7.38-10.12-16.24a4.81,4.81,0,0,0,.78-1.82c.22-1.89-1.82-3.14-3-4.66-1.6-2.12-1.49-5-1.42-7.68a107.7,107.7,0,0,0-1.43-22.54c-1.37-7.31-5.69-13-5.82-20.89"
				}), c.a.createElement("path", {
					d: "M208,395.66c.28.5.42,3.22,1.75,7,.64,1.88,1.55,4,2.52,6.36a39.76,39.76,0,0,1,2.5,7.92,101.5,101.5,0,0,1,1.67,17.43c0,1.41,0,2.77,0,4.09s0,2.57.06,3.68a8.19,8.19,0,0,0,.66,2.85,6.2,6.2,0,0,0,1.5,1.89,14.51,14.51,0,0,1,1.57,1.67,4.46,4.46,0,0,1,1,3.14,4.78,4.78,0,0,1-.52,1.67c-.21.44-.42.77-.54,1.07a10.5,10.5,0,0,0-.77,1.85,8.92,8.92,0,0,0-.41,1.85c0,.3,0,.59,0,.89s.1.57.13.86c.5,2.24,2.6,4.1,5.14,5.42a28.14,28.14,0,0,0,8.41,2.69,34.75,34.75,0,0,0,9.06.05,62.07,62.07,0,0,0,9.17-1.85,33.91,33.91,0,0,0,8.31-3.38,19.54,19.54,0,0,0,3.36-2.55A13.65,13.65,0,0,0,265,457.1a11.64,11.64,0,0,0,1.58-7.24,8.25,8.25,0,0,0-1.1-3c-.31-.56-.72-1.22-1.12-2a10.69,10.69,0,0,1-.56-1.36c-.17-.51-.24-.94-.36-1.41a18.52,18.52,0,0,1-.15-5.11c.15-1.58.4-3,.63-4.45s.44-2.73.55-4c.05-.62.08-1.23.07-1.8,0-.29,0-.56,0-.84s-.07-.65-.1-1a58.54,58.54,0,0,0-1.54-7.85,78.63,78.63,0,0,0-5.68-14.83,77.23,77.23,0,0,0-8.18-13,68.18,68.18,0,0,0-10.13-10.55l-.71-.59-.68-.6c-.41-.33-.82-.67-1.27-1a19.05,19.05,0,0,0-2.82-1.61,25.64,25.64,0,0,0-6.14-2c-4.17-.78-8.48-.57-11.73,1.22a9,9,0,0,0-3.67,3.81,12,12,0,0,0-1.2,5.18,11.66,11.66,0,0,1,0-5.45,10.27,10.27,0,0,1,1.29-2.94,12,12,0,0,1,2.39-2.55,15,15,0,0,1,3.19-1.83,19.92,19.92,0,0,1,3.6-1.07,25.23,25.23,0,0,1,7.56-.23,27.26,27.26,0,0,1,7.21,1.82,23.61,23.61,0,0,1,3.26,1.63c.51.31,1,.65,1.49,1l.7.55.08.06,0,0,.16.11.3.23a47.28,47.28,0,0,1,7.44,6.69,82.89,82.89,0,0,1,12.42,19.2,80.21,80.21,0,0,1,6.6,20.52,49.62,49.62,0,0,1,.62,5.27,26,26,0,0,1-.45,5.3c-.54,3.34-1.35,6.55-1,9.46a6.92,6.92,0,0,0,.53,2c.28.65.69,1.32,1.09,2.05a12.58,12.58,0,0,1,1.55,5,15.79,15.79,0,0,1-2.51,9.65,20.2,20.2,0,0,1-7,6.59,36.66,36.66,0,0,1-8.5,3.52A54.27,54.27,0,0,1,235.3,472a32.62,32.62,0,0,1-4.29-.52,31.22,31.22,0,0,1-4.12-1.11,23.42,23.42,0,0,1-7.51-4,11,11,0,0,1-2.87-3.44,9.67,9.67,0,0,1-.84-2.17,9.56,9.56,0,0,1-.21-2.31,10.24,10.24,0,0,1,.3-2.23,19.73,19.73,0,0,1,.69-2.05l.94-1.85a2.71,2.71,0,0,0,.48-1c0-.56-.16-.85-.93-1.68-.35-.38-.77-.78-1.2-1.27a7.72,7.72,0,0,1-1.19-1.72,10.16,10.16,0,0,1-1-3.79,31.06,31.06,0,0,1,0-3.46c.14-4.29.15-8.42,0-12.44-.14-2.58-.35-5.62-.74-8.77a35.32,35.32,0,0,0-.85-4.68c-.39-1.54-.88-3.07-1.36-4.57a53.87,53.87,0,0,1-2.25-8.2A23.53,23.53,0,0,1,208,395.66Z"
				}), c.a.createElement("path", {
					className: "cls-5",
					d: "M104.6,388c-1.41,4.22-1.55,8.58,2.33,10.05a2,2,0,0,0,1.55,0,2.82,2.82,0,0,0,1-.9,197.8,197.8,0,0,1,24.71-25.9c-.09.08-6.46-2.35-7.21-2.49-2.35-.46-3.83-.55-5.93.39-4.49,2-8.65,6.49-11.78,10.18A29.35,29.35,0,0,0,104.6,388Z"
				}), c.a.createElement("path", {
					d: "M104.55,387.94c-.34-.48.57-3.94,2.69-7.49a19.59,19.59,0,0,1,1.84-2.59c.64-.81,1.31-1.61,2-2.36,1.29-1.51,2.53-2.83,3.44-3.79a22.38,22.38,0,0,1,5.23-4.22,9.66,9.66,0,0,1,3.8-1.31,14.73,14.73,0,0,1,3.88.18c2,.51,2.15.59,5,1.54l.86.29.43.14.21.07.11,0s.11,0,0,.07l-.84,1.17-.21.3c-.06.06,0,.07,0,.08l0,0,.16.15,1,1,.73,1,.38.49.19.25.39.47-1.94,1.8c-.33.3-.65.59-1,.89l-.77.73-1.85,1.82c-5.64,5.6-11.08,11.24-15.92,16.52l-1.79,2-.87,1-.69.8a5.26,5.26,0,0,1-.83.75,3.91,3.91,0,0,1-4,.3,7.59,7.59,0,0,1-1.79-1c-.24-.23-.44-.42-.65-.64l-.53-.69a6.65,6.65,0,0,1-1-3,9,9,0,0,1,.12-2.67,15.54,15.54,0,0,1,1.49-4.24,41.25,41.25,0,0,0,.78,4.42c.36,1.49,1.15,2.79,2,3.13.48.26.66.16.78.07a.34.34,0,0,0,.14-.32.19.19,0,0,0,0-.09h0a1,1,0,0,1,.11-.15l.26-.36a9.24,9.24,0,0,1,1-1.13l12-11.28,10-9.26,1.1-1c-.8-.22-1.56-.49-2.28-.71-.42-.11-2.18-.73-3-.91a13.1,13.1,0,0,0-2.48-.22,5.67,5.67,0,0,0-2.1.5,20.09,20.09,0,0,0-4,2.53,72,72,0,0,0-6.72,6.37c-.3.33-.66.7-1,1.05s-.68.71-1,1.11c-.7.82-1.42,1.72-2.07,2.59A46.86,46.86,0,0,0,104.55,387.94Z"
				}), c.a.createElement("path", {
					className: "cls-5",
					d: "M240.26,383.32c5.45-1,10.87-3.09,8.56-8.47-2.42-5.64-13.72-9.68-19.11-11-10.09-2.39-21,3.47-24.42,12.94a21.86,21.86,0,0,0-1.54,8.81c.44,6.93,5.81,11.85,11.51,6.77,5.16-4.6,9.89-6.81,17.1-8C234.07,384.12,237.17,383.89,240.26,383.32Z"
				}), c.a.createElement("path", {
					d: "M240.26,383.37a8.83,8.83,0,0,1-3.32,1.05c-.93.18-2,.36-3.2.56s-2.4.47-3.69.78a30.68,30.68,0,0,0-7.37,2.83,24.8,24.8,0,0,0-5.16,3.82c-.26.24-.52.5-.77.76l-.39.39-.48.44a10.12,10.12,0,0,1-2.24,1.59,7.42,7.42,0,0,1-2.94.81,7.21,7.21,0,0,1-3.2-.54,9.68,9.68,0,0,1-4.4-4.19,14.4,14.4,0,0,1-1.73-5.47,19.32,19.32,0,0,1,.19-5.54,28.2,28.2,0,0,1,1.38-5.12,22.52,22.52,0,0,1,6-8.88,24,24,0,0,1,16.72-6.21c.75,0,1.5.12,2.25.18s1.47.28,2.2.41c1.39.33,2.67.74,3.94,1.17a52.34,52.34,0,0,1,7.26,3.11,28.16,28.16,0,0,1,6.4,4.48,10.05,10.05,0,0,1,3.49,7.45,5.81,5.81,0,0,1-1.88,4,9.19,9.19,0,0,1-3.13,1.81,22.51,22.51,0,0,1-5.82,1.11,48.07,48.07,0,0,0,4.91-3.15,6.45,6.45,0,0,0,1.84-2.09,2.25,2.25,0,0,0,.09-1.89,6.36,6.36,0,0,0-1.11-1.82c-.29-.27-.51-.53-.81-.78s-.56-.51-.89-.72c-1.21-.92-2.44-1.65-3.23-2.24A41.36,41.36,0,0,0,230.38,366c-.95-.33-1.85-.54-2.75-.76a18.47,18.47,0,0,0-2.77-.3,17.84,17.84,0,0,0-5.46.62,19.68,19.68,0,0,0-9.07,5.34,17.68,17.68,0,0,0-3,4.1,20.33,20.33,0,0,0-1,2.25c-.28.79-.53,1.58-.73,2.37a15.08,15.08,0,0,0,.07,9,7.81,7.81,0,0,0,2.15,3.3,4,4,0,0,0,3,1,5.72,5.72,0,0,0,3-1.54c.22-.16.53-.44.8-.68s.56-.49.84-.72q.85-.71,1.74-1.35a26.86,26.86,0,0,1,7.56-3.88,29.79,29.79,0,0,1,9-1.35C236.85,383.41,239.41,383.4,240.26,383.37Z"
				}), c.a.createElement("path", {
					className: "cls-10",
					d: "M244.32,387.56a62.15,62.15,0,0,0-16.42,5.06c4.14,5.77,9.08,11.84,12.28,18.18a21.51,21.51,0,0,1,2.58,10.73c-.26,4.71-.49,7.31.88,11.64,1.51,4.76,1.37,10.63,1.5,15.59a3.39,3.39,0,0,0,.32,1.64,3.26,3.26,0,0,0,1.7,1.16,92,92,0,0,0,18.38,5.23c1.17-2,2.37-4.21,2.25-6.55-.14-2.7-2-5-2.86-7.53-1.2-3.54-.47-7.41-.1-11.13a55.93,55.93,0,0,0-2.81-23.8"
				}), c.a.createElement("path", {
					d: "M262,407.77c.49.46,2.65,6,3.4,12.8a57.18,57.18,0,0,1,.23,10.37c-.11,1.67-.3,3.23-.39,4.62a21.62,21.62,0,0,0,0,3.62,12.19,12.19,0,0,0,.51,2.57,13.3,13.3,0,0,0,1.08,2.44c.85,1.65,2.08,3.49,2.29,6a9.12,9.12,0,0,1-.47,3.48,15.27,15.27,0,0,1-.6,1.56l-.35.73-.2.39-.31.59-.65,1.17-.16.3s-.05.11-.09.13l-.17,0-.66-.11-2.24-.38c-1-.18-2-.38-3-.6A88.78,88.78,0,0,1,248.31,454l-1.45-.54a10,10,0,0,1-1.69-.77,4.32,4.32,0,0,1-1-.91,3.9,3.9,0,0,1-.66-1.28,8,8,0,0,1-.22-2c-.07-2-.1-4-.2-5.88-.09-1.66-.21-3.29-.45-4.88-.1-.79-.26-1.57-.43-2.33-.09-.37-.17-.76-.29-1.12l-.36-1.2a23,23,0,0,1-.94-5.41,51.47,51.47,0,0,1,.12-5.18l.07-1.22c0-.36,0-.72,0-1.08a17.68,17.68,0,0,0-.2-2.17,20.84,20.84,0,0,0-1.18-4.27,33.42,33.42,0,0,0-1.93-4.07q-1.1-2-2.3-3.91c-1.61-2.54-3.31-5-5-7.36l-2.78-4-1-1.41c-.22-.45-1-1.05-.11-1.18,1.08-.47,2.13-.92,3.16-1.33l1-.39,1-.34c.64-.22,1.28-.42,1.91-.61,1.27-.38,2.52-.71,3.75-1a55,55,0,0,1,7-1.16c-1.91.73-4.24,1.59-6.66,2.63-1.22.52-2.46,1.07-3.7,1.66l-1.84.9-.91.47-.41.22-.12.1c-.13.13-.27.22-.24.31s.26.21.42.36l.11.09.11.13.16.18.6.73,1.14,1.41a51.91,51.91,0,0,1,3.4,4.61c1.49,2.36,2.9,4.74,4.15,7.19a31.6,31.6,0,0,1,2.95,7.69,21.27,21.27,0,0,1,.51,4.05,19.22,19.22,0,0,1-.06,2l-.15,1.88a24.14,24.14,0,0,0,.23,7.13c.22,1.15.59,2.24.89,3.48a32.89,32.89,0,0,1,.63,3.61c.27,2.39.34,4.73.39,7,0,1.15,0,2.28.07,3.4a6.56,6.56,0,0,0,.11,1.46,1.29,1.29,0,0,0,.7.78,13.21,13.21,0,0,0,1.42.6l1.52.57c1,.36,2,.72,3,1,2,.66,4,1.22,6,1.71,1,.24,2,.47,3,.68l1.48.29,1.32.25.39.06.19,0,.1-.17.43-.85a12,12,0,0,0,1-2.52,6.74,6.74,0,0,0-.67-4.85,28.05,28.05,0,0,1-2.29-5.22,18.21,18.21,0,0,1-.4-5.64c.12-1.81.38-3.52.55-5.16s.27-3.27.32-4.87a71.86,71.86,0,0,0-.53-10.87A65.45,65.45,0,0,0,262,407.77Z"
				}), c.a.createElement("path", {
					className: "cls-5",
					d: "M266.83,406.7a1.87,1.87,0,0,1-1.29,2.57,46.19,46.19,0,0,1-16.18,4.27,2.88,2.88,0,0,1-1.17-.08,3,3,0,0,1-1.27-1.12c-7.24-9.68-11.23-21.77-19.95-30.12a36.58,36.58,0,0,1,10.48-4.12c2.54-.57,7.22-2.07,9.7-1.69a13.17,13.17,0,0,1,8.09,5.18A62.64,62.64,0,0,1,266.83,406.7Z"
				}), c.a.createElement("path", {
					d: "M266.79,406.71a10.78,10.78,0,0,1-1.3-3.11c-.61-1.74-1.43-4-2.47-6.4a62.58,62.58,0,0,0-3.57-7,41.84,41.84,0,0,0-3.64-5.28,38.22,38.22,0,0,0-2.84-3.16,12.8,12.8,0,0,0-3.26-2.26,10,10,0,0,0-1.78-.64,6.93,6.93,0,0,0-.91-.16,2,2,0,0,0-.38,0,2.63,2.63,0,0,0-.39,0,22.74,22.74,0,0,0-4.11.82l-2.24.64-1.18.34-1.17.3a37.27,37.27,0,0,0-4.18,1.4l-1,.43-.5.23-.11.06a.44.44,0,0,0-.12.11s0,0,0,.09l.12.06,0,0s0,0,0,0l.09.1.18.2c.24.26.45.54.68.81.44.55.91,1.08,1.31,1.65.85,1.11,1.63,2.24,2.4,3.38,1.49,2.29,2.82,4.61,4.08,6.89,2.51,4.56,4.75,8.94,7.22,12.84.31.48.63,1,.94,1.42l.22.35,0,.06a.35.35,0,0,0,.08.13.41.41,0,0,0,.3.12c.48,0,1.07,0,1.59-.07a51.15,51.15,0,0,0,6.24-.77,51.8,51.8,0,0,0,5.71-1.41l1.33-.42,1.21-.42a1.48,1.48,0,0,0,.47-.26,1.76,1.76,0,0,0,.08-.89,3.45,3.45,0,0,1,.52,1,1.23,1.23,0,0,1-.38,1.14,18.11,18.11,0,0,1-2.38,2,31,31,0,0,1-12,5.22c-.48.09-.94.18-1.38.23l-.73.09a6.23,6.23,0,0,1-1.14,0,4.49,4.49,0,0,1-3.27-1.68,7.47,7.47,0,0,1-.48-.63l-.11-.16-.06-.1-.11-.18-.42-.73c-.28-.49-.58-1-.83-1.45-.54-1-1.06-1.92-1.54-2.87-1-1.91-1.89-3.79-2.78-5.62-1.77-3.67-3.46-7.18-5.36-10.41-.93-1.62-1.94-3.14-3-4.61-.54-.72-1.07-1.43-1.64-2.11l-.54-.63-.63-.7-1.23-1.34-1.2-1.31c-.21-.13.09-.18.18-.26l.39-.22.77-.44c1-.57,2.08-1.14,3.15-1.63.58-.27.91-.41,1.33-.59l1.23-.49q1.23-.47,2.46-.84c.83-.26,1.66-.48,2.47-.68s1.55-.41,2.33-.63a46.41,46.41,0,0,1,4.79-1.13,11.4,11.4,0,0,1,2.66-.16,11.16,11.16,0,0,1,2.58.57A14.17,14.17,0,0,1,254,378a20.9,20.9,0,0,1,1.74,1.64c.55.59,1,1.2,1.45,1.76.89,1.15,1.7,2.33,2.47,3.51a52.15,52.15,0,0,1,3.81,7.15,40.17,40.17,0,0,1,2.59,8.41A42.8,42.8,0,0,1,266.79,406.71Z"
				}), c.a.createElement("path", {
					className: "cls-10",
					d: "M245.56,436.07c-1.78,1.27-5.93,1.6-8.09,2a39.79,39.79,0,0,1-11.51.7,19.81,19.81,0,0,1-9.56-3.62,3.35,3.35,0,0,1-1.68-2.16c-.16-.64.37-4.71,0-4.91,7.16,3.45,20.85,4.65,29,1"
				}), c.a.createElement("path", {
					d: "M243.67,429.09a4.41,4.41,0,0,1-1.68,1,21.39,21.39,0,0,1-3.88,1.2,51.83,51.83,0,0,1-8.46.92,39.15,39.15,0,0,1-7-.23l-1.8-.28-1.79-.36-2.4-.62c-.06,0-.13,0-.13,0s0,.19.06.26-.06,1.76,0,1.59,0,0,0,.06l.05.11.07.13a2.36,2.36,0,0,0,.36.32c.24.18.57.4.83.58a15.21,15.21,0,0,0,1.74,1,19.06,19.06,0,0,0,3.76,1.44,27.55,27.55,0,0,0,7.91.81c1.32,0,2.62-.12,3.88-.23l1.88-.18c.66-.07,1.3-.12,1.9-.15,1.21-.08,2.35-.14,3.41-.27a9.36,9.36,0,0,0,2.81-.66,5.89,5.89,0,0,1-2.48,2.14,22.43,22.43,0,0,1-3.55,1.49l-1.7.57c-.57.19-1.13.35-1.65.47a11.66,11.66,0,0,1-2.61.39,34.91,34.91,0,0,1-11-1.56,21.1,21.1,0,0,1-6.71-3.59,5,5,0,0,1-1-1,4,4,0,0,1-.58-1.34,6.08,6.08,0,0,1,0-1.45c0-.46.05-.92.07-1.37l0-.85c.19-.13.66-.1.58-.36a3.57,3.57,0,0,0,.1-1s0,0,0-.06,0,0,.06,0l.17,0,.33-.09a3.33,3.33,0,0,0,.66-.21l1.75.63a6.56,6.56,0,0,0,.71.22l.63.18c.84.24,1.7.4,2.52.57a49.1,49.1,0,0,0,4.89.65,65.14,65.14,0,0,0,8.9.1c1.35-.08,3.19-.18,4.83-.36.8-.12,1.58-.2,2.19-.34Z"
				}), c.a.createElement("path", {
					d: "M244.62,456.77c0,.18-.48.59-1.28,1a10.13,10.13,0,0,1-3.19.87,39.66,39.66,0,0,1-6.87-.1,10.53,10.53,0,0,1-4.47-1.21,8.62,8.62,0,0,1-1.06-.74l-.24-.2-.34-.31c-.21-.23-.44-.46-.62-.7a4,4,0,0,1-1-3.17,3.16,3.16,0,0,1,.72-1.48,2.82,2.82,0,0,1,1.36-.81,4.21,4.21,0,0,1,1.78,0c.6.09,1.51.34,1.62.32,1.39.2,2.77.36,4.11.47a49.7,49.7,0,0,0,13.36-.68,103.85,103.85,0,0,0,11-2.84,15.49,15.49,0,0,1-4.25,4.05,12.62,12.62,0,0,1-4.56,2.07,62.56,62.56,0,0,1-11.51.46c-1.77-.1-3.48-.26-5.12-.47l-2.42-.34-1.19-.19-.77-.16c-.41-.09-.94-.14-1.16.27a1.09,1.09,0,0,0,.19,1.16,4,4,0,0,0,.38.43l.21.19a3.37,3.37,0,0,0,.36.3,5.79,5.79,0,0,0,1.51.86,15.37,15.37,0,0,0,3.48.83c1.21.17,2.38.33,3.49.44a33.42,33.42,0,0,0,3.77.19A12,12,0,0,0,244.62,456.77Z"
				}), c.a.createElement("path", {
					d: "M117.41,384.36c-.34.55-1.63-.19-2.29-.31a5,5,0,0,1-3-1.91,4.71,4.71,0,0,1-1.15-2.72,3.76,3.76,0,0,1,.68-2.48c1.7.42,3,.81,2.79,1.14a2.56,2.56,0,0,0,.49,3.27c.74.69,1.58.93,2,1.55A4.78,4.78,0,0,1,117.41,384.36Z"
				}), c.a.createElement("path", {
					d: "M239.65,395.72c.23-.32,1.16-.16,2.21,0a10,10,0,0,0,2.9.09,59.94,59.94,0,0,0,7-1.55,33.76,33.76,0,0,0,5-2,12.49,12.49,0,0,0,3.61-2.66,4.08,4.08,0,0,1,1.05,3.41,3.13,3.13,0,0,1-1.31,2.41,35,35,0,0,1-5.55,1.67c-1.64.37-3.12.7-4.55.95-2.83.51-5.49.7-7.62-.1A6.9,6.9,0,0,1,239.65,395.72Z"
				}), c.a.createElement("path", {
					className: "cls-2",
					d: "M218.61,414.92c2.94-1.58,6.63-1.16,9.65.26s5.5,3.75,7.94,6q-9.52-1-19-2.4"
				}), c.a.createElement("path", {
					className: "cls-7",
					d: "M217.21,418.78c.41-.58,6.08.16,8.3.08,1,0,2,0,3,0l.77,0h.39l.11,0a1.52,1.52,0,0,0,.27-.08c.14,0,.18-.1.17-.15l-.06-.07-.22-.11c-.22-.1-.18-.05-.17-.08l-.31-.22-.48-.33c-.32-.21-.63-.41-.95-.6a17.15,17.15,0,0,0-1.9-1,11.5,11.5,0,0,0-7.28-.82,4.44,4.44,0,0,1,1.28-1.72,6.75,6.75,0,0,1,2.19-1.2,6.12,6.12,0,0,1,4-.08,21,21,0,0,1,4,2.42c.29.21.56.44.83.66l1,.8c.74.63,1.4,1.23,2,1.8l3.38,3.26c.27.26.59.54.82.78l-1.08-.1-2.09-.18-7.78-.7a48.12,48.12,0,0,1-5.4-.72A24.17,24.17,0,0,1,217.21,418.78Z"
				}), c.a.createElement("path", {
					className: "cls-2",
					d: "M188.64,406.83c1.45-.72,2.9-1.48,4.33-2.27,3.13-1.73,8-1.26,9.32,2.75l-31,27.93c-2.08,1.87-5.48,3.73-7.37,1.68a5,5,0,0,1-1-2.91c-.58-4.71-3.25-10.58.93-14.25s9.73-6.09,14.83-8.32C182,410,185.36,408.46,188.64,406.83Z"
				}), c.a.createElement("path", {
					className: "cls-7",
					d: "M188.65,406.86c-.27.47-4.15,2.42-8.66,4.62-2.26,1.11-4.7,2.17-6.84,3.29a39.75,39.75,0,0,0-5.25,3.16,31.47,31.47,0,0,0-3.17,2.62,5.18,5.18,0,0,0-1.68,3.05,11,11,0,0,0,.14,3.9c.25,1.39.63,2.82,1,4.34l.24,1.17.18,1.15a3.49,3.49,0,0,0,.46,1.43,1.14,1.14,0,0,0,.32.3.85.85,0,0,0,.37.12,2.64,2.64,0,0,0,1.3-.22,9.82,9.82,0,0,0,3.09-2.06l3.23-3c7.42-6.86,14.91-13.5,21.85-19.43l2.57-2.18,2.39-2,.16-.11c.06,0,.15-.08.1-.15a1.16,1.16,0,0,0-.13-.37,3.88,3.88,0,0,0-1.77-1.36,6.76,6.76,0,0,0-4.81.09l-4.81,2.08a51.15,51.15,0,0,1,4.16-3.45,8,8,0,0,1,6.71-1.14,6.37,6.37,0,0,1,1.76.81,5.83,5.83,0,0,1,.78.61,2.32,2.32,0,0,1,.35.35c.12.13.31.35.44.52a18.43,18.43,0,0,1,1.2,2.34l.13.3c0,.09-.12.16-.17.24l-.4.45a8,8,0,0,1-.86.9l-1.17,1.12-.82.77c-.53.49-1,.89-1.4,1.2-6.47,5-12.39,9.93-17.87,14.65-2.73,2.35-5.36,4.67-7.89,6.93L172,435.62a14.63,14.63,0,0,1-2.05,1.6,9.47,9.47,0,0,1-2.4,1.14,4.5,4.5,0,0,1-2.86,0,3.75,3.75,0,0,1-2.12-2.05,10.16,10.16,0,0,1-.58-2.47c-.22-1.46-.6-2.91-.91-4.39a20.93,20.93,0,0,1-.55-4.57,8,8,0,0,1,1.37-4.56,5.31,5.31,0,0,1,.76-.93,8.29,8.29,0,0,1,.82-.78q.81-.7,1.65-1.32a34.89,34.89,0,0,1,3.41-2.23,59.85,59.85,0,0,1,6.87-3.33c2.14-.9,5.06-2,7.66-2.94S187.9,407.1,188.65,406.86Z"
				}), c.a.createElement("path", {
					className: "cls-2",
					d: "M195.34,436.94l1.44.46a1.28,1.28,0,0,1-1.32-.44c3.43-5,10.95-6.85,15.32-1.5A76.16,76.16,0,0,1,193,438"
				}), c.a.createElement("path", {
					className: "cls-7",
					d: "M193,438c.15-.32,1.64-.5,3.34-.74a34.38,34.38,0,0,0,4.68-.86c1.42-.43,2.9-.85,4.41-1.27L206,435c.13,0,.09,0,.13,0l.05,0,.16-.11c.07-.07.1-.11.09-.15a.56.56,0,0,0-.29-.12c-.06,0-.08,0-.09,0h0l-.37-.1c-.25-.07-.52-.09-.78-.14a8.62,8.62,0,0,0-3.19.25,11.51,11.51,0,0,0-2.93,1.23,14.57,14.57,0,0,0-2.36,1.84l0-1.32c0,.05.07.23.19.28l0,1.68c-.53-.27-.94-.51-1.34-.75a9.06,9.06,0,0,1,1.73-.47l1.28-.22-1.3,1a1.83,1.83,0,0,1-2.28-.18l-.28-.24.26-1a6.52,6.52,0,0,1,3-4.09,13.29,13.29,0,0,1,8.24-.8,5,5,0,0,1,.91.27,4.7,4.7,0,0,1,1.05.44l1,.53.84.62a5.93,5.93,0,0,1,.75.65c.23.23.47.44.7.68l.68.73a3.19,3.19,0,0,1,.32.35L212,436c-1.58.43-3.08.87-4.65,1.26l-1.87.46-1.6.35a30.54,30.54,0,0,1-5.9.73A18.72,18.72,0,0,1,193,438Z"
				}), c.a.createElement("path", {
					className: "cls-2",
					d: "M141.41,416.87l-1-6.74a40.85,40.85,0,0,0-11.16,18.4,74.14,74.14,0,0,0,12.43-11.23"
				}), c.a.createElement("path", {
					className: "cls-7",
					d: "M141.66,417.32c.08.31-1,1.72-2.34,3.24s-3,3.16-3.88,4.13l-.58.64c-.07.08-.29.28-.44.42l-.51.48c-.69.64-1.46,1.33-2.24,2-1.57,1.3-3.21,2.58-5.06,4,.19-.82.5-1.85.74-2.74s.53-1.84.82-2.81.68-2,1.05-3c.18-.51.41-1,.64-1.57s.25-.6.39-.89a33.79,33.79,0,0,1,3.12-5.48c.59-.85,1.22-1.65,1.86-2.42.32-.39.66-.75,1-1.11.17-.19.33-.34.52-.54s.61-.65.91-.94c1.2-1.14,2.34-2.16,3.39-3.08.07-.05.14-.13.19-.16l0,.3.08.58c.05.38.1.75.14,1.12.1.73.17,1.45.23,2.15s.11,1.29.16,1.91l0,1.16c0,.75,0,1.46,0,2.14a12.69,12.69,0,0,1-1.3-1.95c-.2-.37-.4-.76-.59-1.14a.88.88,0,0,0-.38-.3c-.22-.06-.33.12-.4.28s0,.18,0,.1a.15.15,0,0,0-.15-.15s0,0-.08,0l-.26.23-.51.46a24.09,24.09,0,0,0-1.86,1.93,27.75,27.75,0,0,0-3,4.13c-.42.71-.79,1.42-1.14,2.13l-.38.81-.27.66c-.16.44-.31.86-.42,1.24,0,.2-.11.38-.15.55l0,.26,0,.12v.06s0,0,.05,0c1.08-.86,1.85-1.58,2.46-2.14l1.82-1.63,1.86-1.64C138.45,419.58,141.12,417.7,141.66,417.32Z"
				}), c.a.createElement("path", {
					className: "cls-7",
					d: "M228.28,445.49c.19-.6,1.91-.35,2.61-.67a14,14,0,0,1,3.7-.83,9.27,9.27,0,0,1,5.65.81c-.31,1.74-1.46,3.07-2,2.83a8.76,8.76,0,0,0-4.9-.9,9.16,9.16,0,0,1-3.7,0A3.67,3.67,0,0,1,228.28,445.49Z"
				}), c.a.createElement("path", {
					className: "cls-7",
					d: "M113.51,438.39c-.16.63-2,.35-2.77.48a7.36,7.36,0,0,1-4.23-.66,6.22,6.22,0,0,1-4-4.87c1.7-.56,3.24-.71,3.34-.25a4.36,4.36,0,0,0,3,3.23,32.91,32.91,0,0,1,3.32.82A5.32,5.32,0,0,1,113.51,438.39Z"
				}), c.a.createElement("path", {
					className: "cls-2",
					d: "M254.44,460.84c.13.3-.74,1.48-2.13,2.45a20.42,20.42,0,0,1-4.13,2.13,15.86,15.86,0,0,1-5.85,1.27,34,34,0,0,1-6-.37c-.82-.12-1.63-.26-2.43-.41l-1.17-.24a6.51,6.51,0,0,1-1.62-.5,3.27,3.27,0,0,1-1.14-1,4.27,4.27,0,0,1-.31-.53s0,0,0,0a.56.56,0,0,0,0-.07c0-.05,0-.12-.21-.09l-.27.12-.38.14a5.09,5.09,0,0,1-.77.19,5.29,5.29,0,0,1-1.48,0,5.49,5.49,0,0,1-2.45-.94,4.6,4.6,0,0,1-2.09-3.67,5,5,0,0,0,3.41,1.31c1.06,0,1.58-.36,1.87-.29a1.13,1.13,0,0,0,.74-.11,5.77,5.77,0,0,1,1.63-.42,2.73,2.73,0,0,1,1.44.29,2.34,2.34,0,0,1,1,1,3.78,3.78,0,0,1,.26.69l.1.35,0,.08v.05c-.06.06,0,0,0,0s.06.07.13.12a3.1,3.1,0,0,0,.69.25l.84.24a30.26,30.26,0,0,0,6.29,1.12,23,23,0,0,0,9.9-1.61c.63-.26,1.54-.53,2.34-.87S254.19,461,254.44,460.84Z"
				}), c.a.createElement("g", {
					className: "cls-13"
				}, c.a.createElement("path", {
					d: "M163.81,477.71c.36-.2,2.32.65,4.74,1.09a25.11,25.11,0,0,0,6.74.45c2.73-.24,5.63-.66,8.59-1.11s6-.9,8.79-1.39c4.94-.84,9.78-1.7,14.15-2.65s8.3-2,11.5-2.84a17.23,17.23,0,0,1-4.55,4,14.62,14.62,0,0,1-4.69,2.08c-8.36,1.14-15.46,2-21.79,2.88-3.16.44-6.12.88-8.95,1.06a28.9,28.9,0,0,1-8-.45,15.41,15.41,0,0,1-4-1.46A18.64,18.64,0,0,1,163.81,477.71Z"
				})), c.a.createElement("g", {
					className: "cls-13"
				}, c.a.createElement("path", {
					d: "M125.65,463.73c.32-.06.66.39,1.09.84a4.13,4.13,0,0,0,1.33,1.08l.5.18.25.09c.1,0,.09,0,.14,0a.53.53,0,0,0,.33-.13.36.36,0,0,0,.1-.23v0l.17-.19.37-.4a17.1,17.1,0,0,1,5.41-4.24c1,1.54.92,3.57.31,3.83a16.57,16.57,0,0,0-3,1.67c-.41.29-.78.59-1.13.89l-.53.47a5.37,5.37,0,0,1-.7.56,2,2,0,0,1-1.62.34,4.46,4.46,0,0,1-1.45-.76,4.62,4.62,0,0,1-1.55-1.73A3.47,3.47,0,0,1,125.65,463.73Z"
				})), c.a.createElement("ellipse", {
					className: "cls-6",
					cx: "138.25",
					cy: "400.98",
					rx: "11.41",
					ry: "6.86",
					transform: "translate(-285.34 422.59) rotate(-73.9)"
				}), c.a.createElement("path", {
					d: "M144.83,402.88a41.36,41.36,0,0,0,.44-5,12.49,12.49,0,0,0-.65-3.78,6.26,6.26,0,0,0-1.59-2.56,3.86,3.86,0,0,0-3.63-.94,7.48,7.48,0,0,0-3.49,2.3,16.41,16.41,0,0,0-3.72,7.87,14.07,14.07,0,0,0,.31,7.17,5.77,5.77,0,0,0,1.79,2.63,3.56,3.56,0,0,0,2.76.64,8.88,8.88,0,0,0,4.88-3.51,19.37,19.37,0,0,0,2.66-4.89,12.86,12.86,0,0,1-1.73,5.77,8.78,8.78,0,0,1-4,3.84,5.86,5.86,0,0,1-3.58.32,5.21,5.21,0,0,1-2.85-1.87A8.28,8.28,0,0,1,131,408a11.86,11.86,0,0,1-.47-2.92,17.64,17.64,0,0,1,.58-5.52,19.49,19.49,0,0,1,1.92-4.82,14,14,0,0,1,3.13-3.8,6.53,6.53,0,0,1,4.43-1.61,4.78,4.78,0,0,1,2.23.75,5.73,5.73,0,0,1,1.59,1.59,9.15,9.15,0,0,1,1.4,3.84,13.43,13.43,0,0,1-.15,4.35A16.84,16.84,0,0,1,144.83,402.88Z"
				}), c.a.createElement("g", {
					id: "default-11",
					"data-name": "default"
				}, c.a.createElement("g", {
					className: "cls-14"
				}, c.a.createElement("g", {
					className: "cls-3"
				}, c.a.createElement("path", {
					d: "M224.19,380.32a16.68,16.68,0,0,1,.36-3.07l.73.47a30,30,0,0,1-9.24,5.57l-3.13,1.22,2.12-2.68a45.39,45.39,0,0,0,7-12.38l2,1.36a268.28,268.28,0,0,1-24.43,21.06l-2.35-2.27a186.67,186.67,0,0,1,19.37-23.94l2.54,3c-11.69,8.45-22.35,16.18-29.73,21.69l-7.81,5.82L178,391.86a315.61,315.61,0,0,1,32.46-29.08l3.63,6.3a125.37,125.37,0,0,0-25.3,15.4c-8,6.1-15.6,12.91-23.25,19.76l-6.7-5.59A99.7,99.7,0,0,1,176.77,377c6.68-6.27,13.72-11.78,20.58-17.14l5.16,8.08c-7.34,3.9-14,7.88-20.39,12.12a239.88,239.88,0,0,0-28.53,22.21l-7.36-7.08a231.64,231.64,0,0,1,41-38.52l4.66,8.86a102.28,102.28,0,0,0-25,12.55c-1.89,1.31-3.73,2.66-5.51,4.09s-3.77,3-5.76,4.5a47.7,47.7,0,0,1-13.66,7.43l-4.46-7.84c11.76-10.24,22.67-21.63,35.69-29.75l3,7.11a60.61,60.61,0,0,0-17.75,7.07c-5.44,3.15-10.51,6.8-15.55,10.29l-4.19-4.39c3.53-4.11,6.64-8.22,10.39-11.8a51.6,51.6,0,0,1,12-8.27l2,4c-8.26,3.25-14.95,5.82-21.34,8.24,5.66-3.35,12.48-7.13,20.09-11.18l.85,1.73a51,51,0,0,0-10.46,9.18c-3,3.61-5.67,7.87-8.65,12L139.24,376a168.17,168.17,0,0,1,16.56-12.72,64.08,64.08,0,0,1,18.36-8.24L178,364c-7.64,5.35-13.6,10.92-17.88,14.53-5.66,4.85-11.22,9.94-16.68,14.49l-4.17-7.33c3.95-1.11,7.94-3.55,11.73-6.28,1-.68,1.9-1.39,2.84-2.12l2.92-2.25c2-1.51,4-3,6.14-4.33A110.65,110.65,0,0,1,189.24,358l2.7,5.13a220.61,220.61,0,0,0-40.09,36.78l-3.16-3A250.79,250.79,0,0,1,199.38,362l2.11,3.31c-7.28,5.62-14.37,11.16-20.74,17.17A91.65,91.65,0,0,0,164.5,402l-3.27-2.73c8-7.12,15.9-14.12,24.2-20.35a128.56,128.56,0,0,1,26.27-15.65l2.56,4.46A343.24,343.24,0,0,0,182,395.88l-3.61-4.34q19.72-14,38.07-26.77L220,369q-5.15,5.21-9.77,10.62c-2.83,3.36-6,7.21-9.69,12.31l-3.35-3.24c8.34-5.87,17.47-13,25.14-19.64l2,1.34a44.58,44.58,0,0,1-8.14,12.45l-.64-.92a34.73,34.73,0,0,0,9.42-4.57l.15-.1-.05.17Z"
				}))), c.a.createElement("circle", {
					className: "cls-15",
					cx: "117.4",
					cy: "247.35",
					r: "41.5"
				}), c.a.createElement("path", {
					d: "M158.83,248.42a8,8,0,0,1-.48-2.34c-.09-.63-.11-1.37-.25-2.19s-.31-1.73-.49-2.72a43.41,43.41,0,0,0-5.33-13.87,40.75,40.75,0,0,0-11.58-12.39,35.86,35.86,0,0,0-12.6-5.56,39.92,39.92,0,0,0-35.59,9.06,39.48,39.48,0,0,0-6.34,7.26,38.23,38.23,0,0,0-2.39,4.16c-.34.73-.74,1.42-1,2.16l-.84,2.23c-.13.37-.3.73-.41,1.12l-.3,1.14-.63,2.29-.38,2.32a15.45,15.45,0,0,0-.29,2.33,31.48,31.48,0,0,0-.12,4.65c0,.77,0,1.54.09,2.31s.21,1.51.32,2.26a38.28,38.28,0,0,0,30.26,31.7,39.06,39.06,0,0,0,38.11-13.68,42.6,42.6,0,0,0,6.44-10.9,46.85,46.85,0,0,0,2.76-11.37,34.21,34.21,0,0,1,.11,12.36,39.35,39.35,0,0,1-15.39,24.34,26,26,0,0,1-2.64,1.74,22.9,22.9,0,0,1-2.51,1.4c-.82.38-1.6.73-2.32,1-.36.16-.71.31-1,.43l-1,.29c-1.26.33-2.49.73-3.75,1l-3.77.66c-1.26.12-2.52.2-3.77.3l-.93.06-.93,0-1.87,0a45.3,45.3,0,0,1-14.19-2.72,47.14,47.14,0,0,1-12.12-6.71,44.76,44.76,0,0,1-9.18-9.64c-.6-.92-1.27-1.78-1.8-2.72l-1.56-2.83c-.5-.95-.88-2-1.32-2.93-.2-.49-.44-1-.62-1.46l-.49-1.51-.49-1.5a11.4,11.4,0,0,1-.42-1.52c-.23-1-.45-2-.68-3s-.27-2.05-.41-3.06l-.19-1.53c0-.51,0-1,0-1.53l-.06-3.05c.07-1,.15-2,.23-3,0-.5,0-1,.13-1.5l.26-1.47c.19-1,.31-2,.55-2.92a45.05,45.05,0,0,1,1.77-5.6l.53-1.36a9.23,9.23,0,0,1,.58-1.33l1.3-2.57a43,43,0,0,1,6.66-9.11,44.75,44.75,0,0,1,4-3.78c.7-.6,1.47-1.09,2.19-1.64a22.16,22.16,0,0,1,2.24-1.53,42.9,42.9,0,0,1,39-3.47,41.66,41.66,0,0,1,15,10.37c.93,1,1.89,2.24,2.88,3.5l1.34,2.06a18.19,18.19,0,0,1,1.28,2.19l1.17,2.31c.41.77.65,1.61,1,2.41s.64,1.6.86,2.42.43,1.63.64,2.43l.3,1.18c.07.4.13.79.19,1.18.12.78.23,1.54.34,2.27a15.69,15.69,0,0,1,.18,2.12c0,.68.06,1.32.08,1.93,0,.31,0,.6,0,.88s0,.57-.05.83c0,.53-.06,1-.09,1.46C158.91,247.28,158.86,248,158.83,248.42Z"
				}), c.a.createElement("path", {
					className: "cls-15",
					d: "M287.58,221.22c-31-29.14-89.94-36.09-118.41-30.7s-54.8,18.63-70,38.78c-8.32,11-21.47,49.74-21.86,61.62-.44,13.25,3.66,30,10.89,40.79,14.58,21.8,35.9,33,60.88,38.69,40.22,9.1,79.11,7.85,116.61-10.36C327.5,330,323.5,255,287.58,221.22Z"
				}), c.a.createElement("path", {
					d: "M287.62,221.17a16,16,0,0,1,1.63,1.32,36.38,36.38,0,0,1,2.93,2.8l1.84,2c.67.71,1.29,1.54,2,2.39,1.43,1.68,2.81,3.71,4.34,5.91a90.19,90.19,0,0,1,13.7,37.34,92.94,92.94,0,0,1,.15,23.28,83.33,83.33,0,0,1-5.86,22.3,82.2,82.2,0,0,1-10.51,18.21,85.19,85.19,0,0,1-11.74,12.48,95.72,95.72,0,0,1-21.87,14.18,150.41,150.41,0,0,1-24.91,9.56,166.87,166.87,0,0,1-54.31,6,207,207,0,0,1-27.44-3.21c-2.28-.36-4.51-.89-6.77-1.33s-4.5-1-6.76-1.52a135,135,0,0,1-13.3-4.06,99.74,99.74,0,0,1-24.59-12.91,82.93,82.93,0,0,1-10.5-9c-1.68-1.58-3.13-3.35-4.67-5s-2.92-3.5-4.19-5.38L85.06,334c-.56-.85-1.12-1.73-1.65-2.6-1-1.76-2-3.55-2.82-5.38a78.75,78.75,0,0,1-4.12-11.22,81.54,81.54,0,0,1-3.2-23.5c0-1,.15-2.12.23-3.18s.3-2,.46-3,.38-1.93.57-2.89.4-1.91.64-2.84c.88-3.76,2-7.4,3-11q3.33-10.86,7.54-21.27l1.06-2.6L87.92,242c.73-1.73,1.56-3.43,2.36-5.13a63.31,63.31,0,0,1,5.91-10.1,88.43,88.43,0,0,1,16-15.85,122.17,122.17,0,0,1,38.5-19.32A152,152,0,0,1,171,186.84a125.14,125.14,0,0,1,20.22-1.09,185,185,0,0,1,37.81,4.9,157.2,157.2,0,0,1,33.2,11.64,99.4,99.4,0,0,1,26.16,18.1A112,112,0,0,0,260.82,205a172,172,0,0,0-35-9.5A206.42,206.42,0,0,0,192,192.7c-5.07,0-9.75.25-13.85.64l-3,.31-2.73.36-2.49.39-2.31.44A133.49,133.49,0,0,0,134,205.42a94.9,94.9,0,0,0-27.84,19.48,73,73,0,0,0-5.44,6.3l-1.14,1.62c-.36.57-.7,1.17-1,1.75-.73,1.16-1.34,2.41-2,3.63-2.55,4.94-4.74,10.1-6.78,15.25S85.86,263.81,84.21,269a161.9,161.9,0,0,0-4.27,15.62c-.31,1.31-.46,2.59-.69,3.88a34,34,0,0,0-.27,3.82,63.85,63.85,0,0,0,.36,7.83,73.72,73.72,0,0,0,1.18,7.72,75,75,0,0,0,1.91,7.51,61.69,61.69,0,0,0,6.09,13.94,81.62,81.62,0,0,0,9.17,12,82.84,82.84,0,0,0,11,9.93,85.29,85.29,0,0,0,12.43,7.71,99.12,99.12,0,0,0,13.29,5.66,126.67,126.67,0,0,0,13.69,3.93,204.21,204.21,0,0,0,54.5,5.38,155.26,155.26,0,0,0,49.84-10.48c1.9-.78,3.82-1.52,5.69-2.32l5.54-2.56c.94-.4,1.81-.89,2.69-1.35l2.64-1.4c.9-.45,1.74-1,2.58-1.49l2.52-1.55a83.77,83.77,0,0,0,17.61-14.94,79.44,79.44,0,0,0,18.63-39.19,91.38,91.38,0,0,0,1-23l-.27-3.14c-.13-1.05-.29-2.09-.44-3.14-.24-2.12-.73-4.19-1.11-6.28a95,95,0,0,0-8.21-22.85c-.91-1.62-1.76-3.2-2.64-4.67s-1.78-2.86-2.67-4.12-1.75-2.45-2.58-3.53-1.65-2-2.36-2.88C289.65,223.32,288.41,222.05,287.62,221.17Z"
				}), c.a.createElement("path", {
					className: "cls-15",
					d: "M251.16,239.58a41.5,41.5,0,1,1,32.72,65.57"
				}), c.a.createElement("path", {
					d: "M283.89,305.09c.35-.35,2.16-.54,4.77-.91a46.94,46.94,0,0,0,9.45-2.49l1.31-.49c.44-.16.85-.4,1.28-.6.85-.41,1.71-.81,2.55-1.24a43.25,43.25,0,0,0,4.64-3.05,33.92,33.92,0,0,0,6.5-6.32,45.57,45.57,0,0,0,6-10.78A39.89,39.89,0,0,0,323,266.87a38.62,38.62,0,0,0-6.39-23.59,44.37,44.37,0,0,0-6.87-7.78c-.65-.56-1.35-1.06-2-1.6l-1-.8-1.08-.69c-.72-.45-1.41-.94-2.15-1.37l-2.25-1.17a19,19,0,0,0-2.3-1c-.78-.29-1.52-.69-2.33-.91a38.47,38.47,0,0,0-4.79-1.28c-.8-.14-1.6-.37-2.41-.46l-2.42-.25c-.41,0-.81-.1-1.21-.12l-1.21,0a23.79,23.79,0,0,0-2.39,0,41,41,0,0,0-17.46,4.61,44.88,44.88,0,0,0-12.62,9.82,26.21,26.21,0,0,1,3.55-7.5,32.47,32.47,0,0,1,6.72-7.23,33.64,33.64,0,0,1,8.2-4.82,24.12,24.12,0,0,1,6.79-1.8,49,49,0,0,1,19.24,2.35A46.67,46.67,0,0,1,312.06,230a45.47,45.47,0,0,1,15.51,27.38c.09.62.17,1.24.26,1.85a14.69,14.69,0,0,1,.19,1.85c.05,1.24.1,2.47.15,3.68s-.14,2.42-.21,3.62l0,.9-.14.88c-.1.59-.19,1.18-.28,1.76a42.46,42.46,0,0,1-4.43,13,43.48,43.48,0,0,1-7.74,10.27c-.75.72-1.56,1.36-2.33,2l-1.17,1-1.25.86c-.83.55-1.63,1.15-2.48,1.64L305.51,302a34.8,34.8,0,0,1-12.46,3.44,30,30,0,0,1-3.1.1,19,19,0,0,1-2.67-.08C285.68,305.31,284.48,305.17,283.89,305.09Z"
				}), c.a.createElement("g", {
					className: "cls-14"
				}, c.a.createElement("g", {
					className: "cls-3"
				}, c.a.createElement("path", {
					d: "M316.59,266.85a4,4,0,0,0-.7,1,1.94,1.94,0,0,0,.72,2.17l.55.41-.64.34a4.45,4.45,0,0,1-1.11.46,5,5,0,0,1-1,.16,4.7,4.7,0,0,1-.53,0l-.26,0-.13,0h-.1l0,0a4.65,4.65,0,0,1,1.76,1.3,4.35,4.35,0,0,1,.84,3.07l-.09.55-.55.07c-.54.07-1.18.11-1.63.12a8.6,8.6,0,0,1-1.92-.16l-.42-.09-.21-.06h-.05l0,0,.09.08a4.52,4.52,0,0,1,1.13,1.35c.06.12.11.24.16.36l0,.08s0,0,0,0,0,0,0,0a3.52,3.52,0,0,1,.11.44,6.23,6.23,0,0,1,.11,1.7,5.87,5.87,0,0,1-.33,1.47c-.08.23-.15.45-.24.66a1.8,1.8,0,0,1-.14.31l-.18.16h0c-.79-.16-1.59-.33-2.44-.53l-1.17-.31-.87-.24a34.11,34.11,0,0,1-3.63-1.31l1.58-2.25a16.7,16.7,0,0,1,1.4,1.49c.23.27.44.55.66.85l.31.45.43.7a13.92,13.92,0,0,1,1.3,3.06c.27,1,.43,2,.63,3a5.8,5.8,0,0,1-2,.55c-.18,0-.35.07-.53.09h-.54a4.41,4.41,0,0,1-1.11-.15,7.43,7.43,0,0,1-2.45-1.14,23.64,23.64,0,0,1-2.06-1.64,21.87,21.87,0,0,0-2.57-2.05,2.31,2.31,0,0,0-.57-.31,1.74,1.74,0,0,0-.51-.18c-.16-.08-.27,0-.41-.05a2.25,2.25,0,0,1-.36.06l.91-3.16a17.32,17.32,0,0,1,3.11,4.76,8.43,8.43,0,0,1,.38,1c.11.38.27.76.35,1.13a15.46,15.46,0,0,1,.39,2.2,37,37,0,0,1,0,3.94c-.34,0-.58,0-1,0H300a5.71,5.71,0,0,1-2.09-.31,7.78,7.78,0,0,1-3.11-2.33l-.72-.93-.52-.69-.68-.9a8.65,8.65,0,0,0-1.27-1.33,3,3,0,0,0-1.15-.53l2.26-3.23c.49.86.94,1.73,1.36,2.62.21.44.42.88.61,1.33l.15.33.22.55c.16.41.33.79.48,1.22a39.51,39.51,0,0,1,1.46,4.82c.31,1.45.63,2.89.93,4.32l-2.55-.65-1.26-.34a4.91,4.91,0,0,1-1.17-.4l-.59-.27-.61-.38a6.52,6.52,0,0,1-.61-.41l-.63-.55a13,13,0,0,1-1.26-1.29c-.42-.44-.81-1-1.21-1.52s-.95-1.26-1.41-1.89a15.77,15.77,0,0,0-1.11-1.24,4.24,4.24,0,0,0-2.31-1.21l1.69-2.95a16.14,16.14,0,0,1,2.62,5.81,12.36,12.36,0,0,1,.24,1.44,10.35,10.35,0,0,1,.09,1,9.26,9.26,0,0,1,0,1.05,18.16,18.16,0,0,1-.19,1.91,17.89,17.89,0,0,1-.29,1.78c-1.34-.47-2.58-.87-3.76-1.39a15.5,15.5,0,0,1-2.58-1.39,18.4,18.4,0,0,1-3.49-2.91,13.81,13.81,0,0,1-3.62-6.86,15.9,15.9,0,0,0,5.2,5.71,19.29,19.29,0,0,0,3.66,2l.92.34a1.73,1.73,0,0,0,.3,0,.5.5,0,0,0,.32-.1,1.16,1.16,0,0,0-.17-.49l-.05-.05a1.26,1.26,0,0,1,0-.19c0-.09-.05-.18-.07-.27a10.31,10.31,0,0,0-.29-1,21.38,21.38,0,0,0-1.32-3c-.2-.39-.43-.78-.62-1.09l-2.58-4.29,4.44,1.05a13.41,13.41,0,0,1,1.42.36,8.18,8.18,0,0,1,1.3.62,7.62,7.62,0,0,1,1.11.79l.5.43.43.45a17.37,17.37,0,0,1,1.46,1.82c.21.29.44.63.59.85l.13.26a4.94,4.94,0,0,0,.92,1.24,3.22,3.22,0,0,0,.76.53l.22.1.11.05.05,0v0l0-.3a12.32,12.32,0,0,0-.58-2.38l-.14-.37-.25-.61-.52-1.2c-.36-.78-.74-1.54-1.13-2.26l-.92-1.73,1.9.33a6.13,6.13,0,0,1,3.34,1.94,15.1,15.1,0,0,1,1.12,1.35l.88,1.22a5.56,5.56,0,0,0,1.31,1.42,2,2,0,0,0,.87.37,2.47,2.47,0,0,0,.47,0s.09,0,.1,0v-.35a7.76,7.76,0,0,0-.17-1.6c-.06-.26-.13-.51-.21-.76l-.14-.37-.19-.46a14.33,14.33,0,0,0-2.52-3.85l-1.09-1.2,1.5-.23a6.72,6.72,0,0,1,1.17-.16,4.3,4.3,0,0,1,1.14.16,4.13,4.13,0,0,1,1,.38,5.25,5.25,0,0,1,.9.51,26.26,26.26,0,0,1,2.89,2.35l.33.29.22.19c.14.11.27.22.4.31a4,4,0,0,0,.78.48,1.32,1.32,0,0,0,.42.15,1,1,0,0,0,.43.06,1.19,1.19,0,0,0,.42-.06c.21,0,.11-.19.09-.33a6.36,6.36,0,0,0-.78-1.94l-.14-.22-.23-.35c-.17-.25-.35-.49-.54-.73a15.32,15.32,0,0,0-1.2-1.33l1.31-1.88a31.55,31.55,0,0,0,5.38,1.9.27.27,0,0,0,.12,0l.05-.12a1.13,1.13,0,0,0,.08-.24,2.24,2.24,0,0,0,.06-.52,2.07,2.07,0,0,0-.06-.47c0,.1,0-.12,0-.09s-.06-.19-.08-.25l-.22-.42a3.76,3.76,0,0,0-.67-.89c.27-1.23.07-1.69-.21-2-.17-.13.06-.08.18-.11a1.91,1.91,0,0,0,.44-.09,3.43,3.43,0,0,0,1.1-.59,12.09,12.09,0,0,0,1.69.32,15.53,15.53,0,0,0,2.43,0l-.92.89a2.67,2.67,0,0,0-.08-1.25,2.46,2.46,0,0,0-.11-.32c-.09-.15-.14-.29-.24-.43l-.3-.38-.36-.31a2,2,0,0,0-.56-1.49,2.06,2.06,0,0,0-.57-.41c-.06,0,0,0,.05,0h.11l.22,0h.45a4.23,4.23,0,0,0,.83-.14c.51-.13.87-.29.89-.22a4.19,4.19,0,0,0,1.35-.27l.27-.1h0l0,.43h0v0h0l.05-.37-.05.37a2.5,2.5,0,0,1-.85-1.7,2.18,2.18,0,0,1,.31-1.24A2,2,0,0,1,316.59,266.85Z"
				}))), c.a.createElement("g", {
					id: "default-12",
					"data-name": "default"
				}, c.a.createElement("path", {
					d: "M196.87,323.44c.14.31-.23,1.26-1.06,2.51a19.22,19.22,0,0,1-1.68,1.94,20,20,0,0,1-2.32,1.94l-1.32.92c-.46.29-.94.54-1.41.81a28.11,28.11,0,0,1-2.85,1.43c-1.88.84-3.63,1.49-4.87,2a47.39,47.39,0,0,1-14.51,3,75.06,75.06,0,0,1-15-.69c-8.44-1.22-16.69-4.06-23.25-8.67a28.67,28.67,0,0,1-8-8.19,16.9,16.9,0,0,1-2.71-9.41c.54.56,1.09,1.15,1.61,1.73s1.2,1.13,1.75,1.69,1.29,1,1.86,1.52,1.32.9,1.9,1.34c2.5,1.67,4.94,2.87,5.94,4a31.8,31.8,0,0,0,7.16,5.44,43.54,43.54,0,0,0,8,3.51,55.51,55.51,0,0,0,15.79,2.72,66.12,66.12,0,0,0,13.93-1.05,60.89,60.89,0,0,0,11.45-3.23c1.61-.65,3.8-1.51,5.73-2.52.47-.26.89-.55,1.32-.8a7.67,7.67,0,0,0,1.15-.78Z"
				}))), c.a.createElement("path", {
					className: "cls-5",
					d: "M294.79,337c1.86,20.06-21.35,30-36.81,36.31-7.63,3.12-15.75,4.9-23.88,6.29a266.93,266.93,0,0,1-124.18-8.36c-3.25-1-6.56-2.14-9.2-4.29-5.33-4.34-6.76-11.77-7.84-18.57a6.73,6.73,0,0,1,.23-4.15c1.19-2.26,4.37-2.37,6.9-2,9.46,1.43,17.23,6.33,26,9.59a117.81,117.81,0,0,0,30.18,7.38,267.12,267.12,0,0,0,44.45.36,266.14,266.14,0,0,0,86-21.17"
				}), c.a.createElement("path", {
					d: "M286.69,338.46c-.72.56-4.95,2.65-11.39,5.25A242.45,242.45,0,0,1,250.67,352a274.25,274.25,0,0,1-29.32,6.44c-9.51,1.55-18.2,2.43-24.43,2.95a252,252,0,0,1-34.11.55c-2.93-.16-5.82-.33-8.82-.62s-6-.76-8.91-1.34a129.57,129.57,0,0,1-17.41-4.77c-2.83-.95-5.75-2.08-8.48-3.28s-5.45-2.42-8.12-3.51a58.12,58.12,0,0,0-8-2.69c-.67-.16-1.35-.3-2-.43s-1.39-.26-2-.31a6.38,6.38,0,0,0-2.93.23c-.28.13-.37.21-.41.3a1,1,0,0,0-.13.58,8.33,8.33,0,0,0,.15,1.6l.36,2.11a45.31,45.31,0,0,0,2,7.95,16.37,16.37,0,0,0,3.8,6.15,16.81,16.81,0,0,0,6.3,3.49c2.18.77,4.62,1.42,7,2.11,1.18.34,2.35.7,3.53,1l3.54.93,3.54.92,3.57.82,3.55.82c1.19.27,2.38.49,3.57.73a273.75,273.75,0,0,0,83.73,4c2.2-.26,4.4-.48,6.56-.77l6.46-.92c4.27-.65,8.44-1.41,12.48-2.36a87.83,87.83,0,0,0,11.63-3.57c3.81-1.47,7.51-2.95,11.05-4.56,7.05-3.21,13.59-6.93,18.46-11.87a25.48,25.48,0,0,0,5.57-8.26,22,22,0,0,0,1.48-9.34,21,21,0,0,1-.16,9.4,25.8,25.8,0,0,1-5.15,9.91,47.14,47.14,0,0,1-9,8.23,88.45,88.45,0,0,1-10.6,6.42c-3.64,1.9-7.24,3.57-10.79,5.14a80.63,80.63,0,0,1-10.58,3.73,111.93,111.93,0,0,1-16.53,3.32,287.17,287.17,0,0,1-90.91-3l-5.21-1.1-2.59-.54-2.57-.62-5.09-1.22-5-1.35-2.49-.68-2.47-.73-4.9-1.48c-3.22-1-6.61-2.11-9.5-4.32a19.09,19.09,0,0,1-6-8.53A49.69,49.69,0,0,1,91.89,350c-.13-.81-.27-1.58-.38-2.44a7.71,7.71,0,0,1,.1-2.85,4.74,4.74,0,0,1,1.76-2.64A6.23,6.23,0,0,1,96.1,341a14.59,14.59,0,0,1,5.14.2,42.47,42.47,0,0,1,4.71,1.1c6.17,1.8,11.69,4.67,17.2,6.94,2.74,1.14,5.54,2.12,8.34,3s5.58,1.75,8.37,2.47a100.49,100.49,0,0,0,16.7,2.92q8.38.7,16.52.88a289,289,0,0,0,60.46-5.14c4.4-.89,9.61-1.93,15-3.22s11-2.74,16.15-4.28C275.07,342.86,283.81,339.52,286.69,338.46Z"
				}), c.a.createElement("g", {
					className: "cls-14"
				}, c.a.createElement("g", {
					className: "cls-3"
				}, c.a.createElement("path", {
					d: "M240,254.85a16.44,16.44,0,0,1-3.71-3.46,21.45,21.45,0,0,1-2.43-3.79,22.56,22.56,0,0,1-1-2.51c-.16-.48-.28-.85-.39-1.27s-.2-.84-.29-1.27c0-.07-.07-.05-.12-.06l-.18,0-.35,0-.7-.06-1.63-.15-2.18-.2-.56-.06-.29,0-.14,0c-.05,0-.11,0-.08,0a1.84,1.84,0,0,0,.17-.66,15.92,15.92,0,0,0,1.37-2.7,4.71,4.71,0,0,0,.29-1.32,7.09,7.09,0,0,0,0-1.13l.72.62c-1.6.15-3.22,1.25-5.41,1.54l-2.1.28,1.54-1.52a19.87,19.87,0,0,0,3.89-6.71l1,1L217,235.24l-2.57,1,1.55-2.28,5.22-7.68,1,1.4-9.74,3.21-2.77.91,1.65-2.4,5.93-8.64,1.3,1.53c-3.92,1.9-7.8,4.24-12,6.3l-1.34-1.68,8.14-10.08,1.47,1.72c-5,2.84-10.42,4.9-15.37,7.69L198,224.43c3.17-4.31,6.79-8.22,9.89-12.45l1.68,1.86c-3,1.8-6.07,3.36-9,5.09a37.87,37.87,0,0,0-8,5.92L190.6,223c2.09-2.21,4.32-4.17,6.34-6.22a24.76,24.76,0,0,0,5-6.64l2.15,1.7a68.79,68.79,0,0,1-9.57,6.14,64.85,64.85,0,0,0-9,5.8l-2-2.19c3-3.18,6.11-6,9-8.92a63.66,63.66,0,0,0,7.83-9l2.2,2.22c-4.59,3.23-9.34,5.89-13.62,8.61a61,61,0,0,0-11.26,9.07l-2.73-2.14a64,64,0,0,1,7.58-10.29c2.71-3,5.36-5.55,7.67-8.06,1-1.08,2-2.19,3-3.33l2.67,2.86c-9.84,7.66-19.6,15.81-29.86,23.79l-3-3.44a315.14,315.14,0,0,0,23.56-26.4l2.22,4.12c-2.75.31-5.64,2-8.19,4a38.42,38.42,0,0,0-3.7,3.47c-1.29,1.34-2.61,2.62-3.94,3.88-2.66,2.52-5.35,5-8,7.44s-5.28,5-7.65,7.55l-4.35-3.48c3.71-5.36,7.64-10.55,11.57-15.79s7.92-10.5,11.62-15.84l4.51,3.86c-5.59,5.4-11.24,10.89-17,16.33s-11.63,10.86-17.86,16l-4.58-4.32a190.73,190.73,0,0,1,14.56-17.34c5.09-5.5,10.32-10.83,15.41-16.19l3.76,5.34c-8.07,3.61-15.29,9-21.86,15a259.84,259.84,0,0,0-18.59,19.73l-5.32-4.49c10.46-13,21.5-24.35,31.21-36.42l4.94,5.15A167,167,0,0,0,144,213.71a267.6,267.6,0,0,0-17.92,21.17l-6-4.42c1.81-2.54,3.5-4.83,5.22-7.07,9-11.78,18.71-22.75,27-34.41l5.31,5.33c-7.75,5.5-14,13.2-20.12,21.14s-12,16.38-19.47,23.81l-6-4.71c8.76-14.82,19.24-27.85,27.41-41.73l6.18,4.56c-7.28,8-14,16.46-20.48,25s-12.51,17.34-17.91,26.28l-6.86-3.06A83.91,83.91,0,0,1,106,232.76c2.11-4,4.34-7.91,6.6-11.73,4.52-7.62,9.29-15,13.66-22.25l5.78,4.41a172.52,172.52,0,0,0-20.94,27.06,212.11,212.11,0,0,0-15.73,29.37l-6.51-1.92a86.15,86.15,0,0,1,6.43-19.85c2.74-6.09,5.83-11.75,8.84-17.29l5.63,3.18c-10,16.66-18.57,32.31-26.5,47.72L77.76,270a65,65,0,0,1,3.64-16.84c1.78-5.23,3.8-10.08,5.76-14.89a134.7,134.7,0,0,1,14.6-26.77l3.39,3.47a56.27,56.27,0,0,0-9.24,8.33c-.67.75-1.29,1.51-1.87,2.28a19.45,19.45,0,0,0-1.52,2.36A38.35,38.35,0,0,0,90,233.11c-2.87,7-3.66,14.77-6.89,22l-3.89-.62a43.41,43.41,0,0,1,.6-10.47c.28-1.63.62-3.23,1.05-4.79.21-.78.46-1.56.72-2.32s.54-1.46.82-2.18c2.25-5.65,4.75-10.69,6.59-15.77l3.14,1.14c-4.36,11.09-7.92,19.88-12,28.2l-1.68,3.38L77.65,248a14.85,14.85,0,0,1-.09-5.89,20.37,20.37,0,0,1,1.58-5A40.21,40.21,0,0,1,84,229.45a40.74,40.74,0,0,0-4.46,8.13,16.48,16.48,0,0,0-.91,10.22l.25.92.37-.85C83,239.14,86.4,229.47,90,219.26l1.32.49c-1.77,5.61-4.26,11.08-6.2,16.75a39.67,39.67,0,0,0-1.94,8.69,38.92,38.92,0,0,0-.16,8.95l-3.26-.52c2.89-7,3.38-15.28,6.55-23.24A49.29,49.29,0,0,1,89,224.6a35.6,35.6,0,0,1,3.9-5.25c1.39-1.6,2.85-3.1,4.38-4.55a48.81,48.81,0,0,1,4.91-4.12l3.77,3.86a109.53,109.53,0,0,0-7.93,13.72c-2.33,4.73-4.38,9.53-6.19,14.33s-3.67,9.61-5,14.25a55.65,55.65,0,0,0-2.51,13.49l-6.89-1.83c9.93-20.15,19.41-37,26.29-48.35l6.63,3.74-1.09,2c-3,5.55-6,11-8.4,16.54a76.49,76.49,0,0,0-5.3,16.47L89.14,257a222,222,0,0,1,17.07-31.25,176.13,176.13,0,0,1,21.27-27l4.28,3.26c-4.77,7.82-9.66,15.3-14.17,22.84-2.26,3.76-4.42,7.52-6.4,11.29a76.27,76.27,0,0,0-5,11.29L102,245.57c5.87-9.6,12.3-18.64,18.87-27.35s13.37-17,20.48-24.75l3.08,2.28c-8.88,14.83-19.52,28-27.58,41.63l-2.7-2.1c7.25-7.14,13.17-15.55,19.39-23.6s12.77-16,21-21.77l2.17,2.18c-10.54,14.68-22.6,27.66-32.35,41.38L122,231.7a272.43,272.43,0,0,1,19-22.18,169.42,169.42,0,0,1,21.3-19l2,2.13C153.93,205.39,142.72,217,133,229l-2.34-2a259.7,259.7,0,0,1,19.27-20.36,86.4,86.4,0,0,1,22.93-15.62l1.83,2.6c-5.23,5.48-10.47,10.82-15.5,16.25a184.27,184.27,0,0,0-14.08,16.73l-2.49-2.34c6.12-5.06,12-10.45,17.7-15.84s11.35-10.83,16.94-16.21l2.78,2.38c-7.67,11-15.95,21.1-23.26,31.57l-3-2.41c5.17-5.52,10.74-10.25,16-15.19,1.31-1.23,2.59-2.47,3.81-3.73a44.55,44.55,0,0,1,4.13-3.83,27.75,27.75,0,0,1,4.84-3.15,16.83,16.83,0,0,1,5.78-1.79l4.89-.53-3.11,3.85a318.37,318.37,0,0,1-24,26.63l-2.75-3.16c10.2-7.84,20-15.93,30-23.58l2.92,3.13c-3.16,3.63-6.63,7-9.8,10.29a60.67,60.67,0,0,0-8.19,10.69l-3.37-2.63a65.94,65.94,0,0,1,12.59-9.92c4.47-2.74,8.84-5.22,12.94-8.07l3,3a68.14,68.14,0,0,1-8.51,9.65c-3,2.91-6,5.65-8.78,8.57L183.24,221a68.12,68.12,0,0,1,9.66-6.12,64.71,64.71,0,0,0,9-5.7l3.08,2.44c-1.95,4-5,6.91-7.8,9.58-1.22,1.17-2.49,2.31-4.22,4.09l-2.81-2.7c4.57-4.63,10.68-7.36,17.77-11.39l2.42,2.68c-3,4.07-6.6,7.81-10,12.34l-2.2-2.51c5.09-2.8,10.55-4.79,15.48-7.48l1.94,2.28-8.31,9.95-1.65-2.08c4.29-2,8.51-4.43,12.11-6.07l4.05-1.85L219.18,222l-6.09,8.52L211.93,229l9.8-3,2.49-.76-1.49,2.1-5.38,7.57-.87-1.11,10.4-3.69,1.2-.43-.48,1.17c-1.25,3.06-2.89,5.83-4.35,7.06l-.34-.76a13.9,13.9,0,0,0,3-.82,9.7,9.7,0,0,1,2.41-.58l.38,0V236a8.13,8.13,0,0,1-.08,1.49,6.83,6.83,0,0,1-.27,1.2,7.59,7.59,0,0,1-.79,1.72l-.27.41-.15.2c0,.06-.16.16,0,.15l.88.1,1.67.2,1.68.21.72.09.33,0,.15,0h.07s0,0,0,.07a24.31,24.31,0,0,0,.62,2.8,20.48,20.48,0,0,0,.85,2.3,21,21,0,0,0,2,3.63A21.25,21.25,0,0,0,240,254.85Z"
				}))), c.a.createElement("path", {
					className: "cls-8",
					d: "M302.55,206.88c-58.14-58.82-151.27-53.73-210.93-.22A81,81,0,0,0,73.2,238.81c.31-.6.63-1.19,1-1.78a47.67,47.67,0,0,1,10.41-13.25,45,45,0,0,1,16.49-8.5,96.71,96.71,0,0,1,17.06-3.23c28.15-3.07,58.18.4,85.09,8.83,20.42,6.39,36.82,20,38.21,41.36a310,310,0,0,1,.42,32.26c-1,25-14.4,42.6-39.89,49.8-11.84,3.34-24.46,3-36.74,1.8a280.72,280.72,0,0,1-65.47-14.39c-10.13-3.54-19-8.56-24.43-17.62a75.32,75.32,0,0,1-5.67-11.68c1.28,13.81,3,27.78,4.15,30.62,2.41,6,9.34,10.23,14.68,13.23,22.76,12.79,47.16,22,73,23.53,40.69,2.41,84.95-2.48,122.23-20.38,5.68-2.73,11.34-5.75,15.83-10.17,5-5,6-10.87,8.85-16.88,2.49-5.25,6.09-10.05,8.5-15.44a112.15,112.15,0,0,0,9.56-35.73C328.58,247.14,321.12,223,302.55,206.88Z"
				}), c.a.createElement("path", {
					d: "M302.58,206.84a55.78,55.78,0,0,1,7.47,7.14,67.89,67.89,0,0,1,11.59,18.77,80.72,80.72,0,0,1,5.94,30.14,105.12,105.12,0,0,1-6.36,35.82c-1.08,3-2.27,6-3.61,9a90.28,90.28,0,0,1-4.71,8.6,64.46,64.46,0,0,0-4.45,8.51c-1.23,3-2.22,6.1-3.75,9.12a24.6,24.6,0,0,1-2.75,4.29,27,27,0,0,1-3.57,3.6,50.32,50.32,0,0,1-8.16,5.57c-2.85,1.59-5.72,3-8.62,4.3l-4.32,2-4.34,1.78a211.27,211.27,0,0,1-33.47,10.32,259.48,259.48,0,0,1-28.08,4.61c-3.52.45-7.09.68-10.65,1l-5.38.33c-1.79.12-3.59.21-5.4.25-7.22.32-14.51.25-21.84.07-3.66-.15-7.33-.28-11.06-.59-1.85-.15-3.7-.38-5.56-.58s-3.71-.51-5.55-.83A156.77,156.77,0,0,1,124,364.59a184.72,184.72,0,0,1-21.16-8.34c-3.47-1.58-6.87-3.3-10.25-5.06s-6.73-3.54-10.07-5.67a32.51,32.51,0,0,1-9.14-8.15c-.3-.45-.62-.89-.89-1.38a12.26,12.26,0,0,1-.76-1.49,5.5,5.5,0,0,1-.34-.8,8.73,8.73,0,0,1-.28-.88c-.15-.53-.27-1-.37-1.53-.42-2-.72-3.87-1-5.78-1.13-7.62-1.94-15.23-2.69-22.87L65.27,284,72,301.49a72.1,72.1,0,0,0,4.76,10,35.87,35.87,0,0,0,3,4.45,32.28,32.28,0,0,0,3.64,3.85,41,41,0,0,0,9,5.95,77.07,77.07,0,0,0,10.32,4.12,276.69,276.69,0,0,0,44,10.94c7.43,1.23,14.9,2.13,22.33,2.75a112.79,112.79,0,0,0,22-.09,64.76,64.76,0,0,0,10.51-2.1,67.77,67.77,0,0,0,10-3.77c.8-.39,1.6-.75,2.38-1.16l2.28-1.31,1.13-.66,1.08-.74,2.15-1.48,2-1.64,1-.82.93-.9,1.85-1.8,1.68-1.94a44.31,44.31,0,0,0,7.89-14.1,56.65,56.65,0,0,0,2.91-16.15c.26-5.67.3-11.4.22-17.1-.05-2.84-.14-5.69-.26-8.53l-.22-4.26-.12-2.13c0-.72-.15-1.34-.21-2a37.11,37.11,0,0,0-4.86-15,43.39,43.39,0,0,0-10.62-11.76,59.28,59.28,0,0,0-14-8,80.9,80.9,0,0,0-7.72-2.72l-4-1.19-4-1.1a211.57,211.57,0,0,0-65.13-6.85c-10.74.67-21.5,1.77-30.95,5.59a36.87,36.87,0,0,0-12.43,8,51,51,0,0,0-8.65,12.23L70.49,238A90.35,90.35,0,0,1,78.28,220a79,79,0,0,1,5.26-8q1.42-1.91,3-3.72l1.56-1.79,1.68-1.81,3.3-2.8c1.08-.9,2.11-1.85,3.23-2.7l3.32-2.57c1.1-.85,2.19-1.72,3.34-2.5,2.29-1.58,4.51-3.26,6.87-4.7s4.63-3,7-4.32a168,168,0,0,1,29.4-13.52,159.89,159.89,0,0,1,60.61-8.76,146.25,146.25,0,0,1,54.82,13.59,142.55,142.55,0,0,1,41.52,29.82,160.53,160.53,0,0,0-19.53-15.35,141.81,141.81,0,0,0-25-13.28,145.76,145.76,0,0,0-29.14-8.43,152.82,152.82,0,0,0-30.76-2.32,162.23,162.23,0,0,0-56,11.73A175.14,175.14,0,0,0,121.49,189l-4.43,2.59-4,2.59-1.9,1.21c-.61.4-1.18.83-1.76,1.22l-3.28,2.29c-1.14.76-2.21,1.63-3.3,2.45l-3.24,2.47c-1.06.83-2,1.7-3.06,2.54l-2.88,2.4-1.5,1.6-1.53,1.73-1.47,1.78-1.41,1.82a77.32,77.32,0,0,0-5,7.65,85.6,85.6,0,0,0-7.11,16.25l-4.6-1.9a55.71,55.71,0,0,1,9.74-13.53,42,42,0,0,1,14-9A72.64,72.64,0,0,1,110.43,211a153.75,153.75,0,0,1,15.74-1.61,216.16,216.16,0,0,1,61.24,5.55c4.91,1.19,9.78,2.45,14.55,4a81.23,81.23,0,0,1,14,5.61A59.11,59.11,0,0,1,228.4,233a44.7,44.7,0,0,1,9.35,11.72,41.11,41.11,0,0,1,4.63,14.15c.13,1.22.29,2.47.38,3.68l.2,3.6q.18,3.6.27,7.19.2,7.17.06,14.29c0,2.37-.11,4.73-.22,7.09s-.3,4.78-.7,7.14a55.37,55.37,0,0,1-3.75,13.75,49.26,49.26,0,0,1-7.37,12.11c-.79.87-1.51,1.81-2.35,2.63l-2.54,2.46-2.72,2.22a12.89,12.89,0,0,1-1.41,1.05l-1.44,1a58.5,58.5,0,0,1-12.36,6.29c-.53.21-1.07.43-1.61.62l-1.64.52c-1.09.34-2.17.71-3.28,1-2.21.62-4.45,1.08-6.69,1.48a86.92,86.92,0,0,1-13.52,1.11,196.53,196.53,0,0,1-26.5-2,283,283,0,0,1-50.33-11.37,117,117,0,0,1-11.93-4.38A48.33,48.33,0,0,1,82,323.82a35.38,35.38,0,0,1-8.26-9.71,76.46,76.46,0,0,1-5.4-11.21l2.67-.62c.61,6.38,1.29,12.7,2.11,19,.42,3.11.86,6.24,1.47,9.22a18.84,18.84,0,0,0,.54,2l.44,1,.52.92a18.8,18.8,0,0,0,2.73,3.35c4.23,4.14,9.81,6.92,15.16,9.84s10.85,5.5,16.38,7.86a165.14,165.14,0,0,0,33.79,10.52,134,134,0,0,0,17.15,2.17c2.87.14,5.75.28,8.6.38s5.71.17,8.55.16A275.71,275.71,0,0,0,244,361.48a203.84,203.84,0,0,0,30-9.65l1.81-.72,1.76-.79,3.53-1.59c2.36-1,4.65-2.18,6.88-3.35a55.91,55.91,0,0,0,6.36-3.93,29.72,29.72,0,0,0,5.37-4.83,27.21,27.21,0,0,0,4.18-7.51,90.63,90.63,0,0,1,3.93-9.1c1.61-3,3.51-5.93,5.24-8.9.86-1.49,1.69-3,2.41-4.55s1.44-3.21,2.11-4.85c5.41-13.12,8.63-27.87,8.23-41.73A81.34,81.34,0,0,0,323,240.34a69.88,69.88,0,0,0-14.33-27.22c-1.3-1.38-2.39-2.7-3.46-3.71Z"
				}), c.a.createElement("path", {
					className: "cls-8",
					d: "M75.76,230.55c-10.25,19.54-14,51.37-6.13,71.86C68.72,292.45,68,282.57,68,277,67.94,264.08,72,242.76,75.76,230.55Z"
				}), c.a.createElement("path", {
					d: "M75.8,230.56c.3.72-1.13,6.15-2.33,12.55a162.85,162.85,0,0,0-2.62,17.79c-.23,3.26-.42,6.62-.5,10a98.85,98.85,0,0,0,.27,10.29c.51,7,1.22,14.11,1.95,20.93l2.72,25.49-8.4-24.17c-.55-1.58-1.1-3-1.56-4.49a75.15,75.15,0,0,1-2.94-20.07,99.28,99.28,0,0,1,1.53-19c2.08-12,6.31-22.4,11-29.76-.66,4.08-1.8,9.61-2.62,14.82-.46,2.59-.78,5.11-1.17,7.28a46,46,0,0,1-1,5.26c-4.22,15.94-4.09,31.79.58,44.49l-2.31.53c-.48-5.28-.94-10.35-1.32-15.25A133,133,0,0,1,66.53,273a131.85,131.85,0,0,1,3.29-24.9,87.07,87.07,0,0,1,3.06-10.34C74.09,234.36,75.37,231.49,75.8,230.56Z"
				}), c.a.createElement("path", {
					className: "cls-5",
					d: "M258.43,259.72c-1.68-26.7-26.32-41-49.55-47.94-27.51-8.18-63.26-13-91.23-6.65a56,56,0,0,0-14.12,5.25A51.71,51.71,0,0,0,92,218.87a53.24,53.24,0,0,1,9.06-3.59,96.71,96.71,0,0,1,17.06-3.23c28.15-3.07,58.18.4,85.09,8.83,20.42,6.39,36.82,20,38.21,41.36a310,310,0,0,1,.42,32.26c-1,25-14.4,42.6-39.89,49.8-11.84,3.34-24.46,3-36.74,1.8a280.72,280.72,0,0,1-65.47-14.39c-10.13-3.54-19-8.56-24.43-17.62a75.21,75.21,0,0,1-5.86-12.21,56.19,56.19,0,0,0,1.48,10.24c3.87,15.56,15.48,22.4,29.62,27.5a304.27,304.27,0,0,0,73,16.55c13.68,1.37,27.74,1.78,40.93-2.07,28.41-8.28,43.38-28.48,44.46-57.28A367.33,367.33,0,0,0,258.43,259.72Z"
				}), c.a.createElement("path", {
					d: "M258.48,259.72c.33,1.8,1.23,11.4,1.29,25.61,0,3.55,0,7.39-.15,11.46-.06,1-.12,2.07-.19,3.12s-.09,2.12-.26,3.19c-.28,2.15-.5,4.37-1,6.58-.25,1.11-.4,2.25-.74,3.36s-.63,2.24-.95,3.38-.79,2.24-1.19,3.37c-.2.57-.41,1.13-.62,1.7s-.51,1.1-.77,1.66c-.53,1.09-1,2.25-1.6,3.32l-1.86,3.24a56,56,0,0,1-4.51,6.12,55,55,0,0,1-11.57,10.33,71.76,71.76,0,0,1-14,7.12c-1.22.47-2.48.84-3.71,1.27l-1.86.61-1.89.52a69.87,69.87,0,0,1-7.63,1.59,97.68,97.68,0,0,1-15.14,1.08,221.94,221.94,0,0,1-27.71-2.13c-8.45-1.1-16-2.42-22.25-3.69A290.23,290.23,0,0,1,95.7,339.89a65.83,65.83,0,0,1-10.94-5.42,38.84,38.84,0,0,1-9.48-8.38,33.91,33.91,0,0,1-6-11.44A53,53,0,0,1,67.13,302l-1-15.36,5.5,14.41a73.93,73.93,0,0,0,4.89,10.34A37.22,37.22,0,0,0,79.58,316a31.31,31.31,0,0,0,3.82,4,41.35,41.35,0,0,0,9.42,6.12,84.45,84.45,0,0,0,10.87,4.2,279.8,279.8,0,0,0,46.42,11.08c7.87,1.16,15.82,2.08,23.68,2.5a91.19,91.19,0,0,0,23.13-1.39,50.18,50.18,0,0,0,5.51-1.45l2.72-.87c.91-.29,1.77-.68,2.66-1a56.09,56.09,0,0,0,10-5.12,49.59,49.59,0,0,0,8.48-7,47,47,0,0,0,6.37-8.82A48.9,48.9,0,0,0,237.45,305l.37-1.74c.12-.58.17-1.18.26-1.77.14-1.18.39-2.34.44-3.54l.24-3.58.12-3.7q.18-7.41,0-14.81c-.06-2.46-.14-4.92-.26-7.38l-.19-3.68c-.07-1.22-.13-2.48-.29-3.59a36.73,36.73,0,0,0-3.72-13.1,39.5,39.5,0,0,0-8.2-10.89c-6.7-6.34-15.27-10.64-24.19-13.45a218.48,218.48,0,0,0-27.76-6.69,213,213,0,0,0-28-3,194.53,194.53,0,0,0-27.58.8c-9,.93-17.87,2.58-25.49,6.44l-16.31,8.25,13.12-12.69a54.59,54.59,0,0,1,11.75-8.64,58.18,58.18,0,0,1,13.36-5.2,125.1,125.1,0,0,1,27.2-3.22,192.58,192.58,0,0,1,26.28,1.46,231.78,231.78,0,0,1,24.93,4.45c4,.95,8,2,11.9,3.1s7.75,2.32,11.48,3.76a92.45,92.45,0,0,1,20.78,10.82,55.08,55.08,0,0,1,15.47,16.1,42.69,42.69,0,0,1,6.11,20.14,42.85,42.85,0,0,0-6.61-18.54,53,53,0,0,0-16-15.5,93.13,93.13,0,0,0-21.68-10.12c-1.94-.63-3.89-1.23-5.86-1.77s-4-1-6-1.55l-6-1.39c-2-.41-4-.86-6-1.24a226.87,226.87,0,0,0-45.5-4.36,153.3,153.3,0,0,0-18.63,1.41c-1.38.22-2.72.39-4,.62l-3.68.72a55.4,55.4,0,0,0-6.25,1.6,50.69,50.69,0,0,0-10.49,4.64,49.51,49.51,0,0,0-8.8,6.64l-3.14-4.37a61.43,61.43,0,0,1,15.22-5,121,121,0,0,1,15.41-2c5.11-.41,10.2-.62,15.26-.6s10.1.19,15.1.53,9.95.91,14.86,1.56,9.77,1.5,14.56,2.54c2.41.46,4.78,1.06,7.16,1.59s4.73,1.17,7.06,1.85l3.5,1,3.46,1.07c1.15.33,2.31.74,3.46,1.14l1.72.6,1.7.68c9,3.61,17.47,8.87,23.72,16.29a40.69,40.69,0,0,1,9.13,19.29,27.87,27.87,0,0,1,.5,3.52l.18,1.76.1,1.73q.78,13.77.35,27.29a80.9,80.9,0,0,1-1.3,13.51l-.72,3.32-1,3.25a32.52,32.52,0,0,1-1.14,3.18l-.62,1.58c-.22.52-.48,1-.72,1.53l-.74,1.51a11.84,11.84,0,0,1-.8,1.49l-1.72,2.89-2,2.73-.5.67-.54.64-1.1,1.26-1.1,1.26-1.2,1.16a32.32,32.32,0,0,1-2.44,2.26l-2.58,2.1-2.72,1.87a59.48,59.48,0,0,1-11.67,5.9l-1.51.59c-.51.19-1,.33-1.54.5l-3.08,1c-2.08.58-4.18,1.1-6.29,1.47a102,102,0,0,1-25.24,1c-4.15-.28-8.25-.69-12.32-1.18s-8.12-1-12.12-1.7a282.13,282.13,0,0,1-46.21-11.54c-7.38-2.48-14.73-5.84-20.48-11.31a34.22,34.22,0,0,1-3.93-4.41,41.82,41.82,0,0,1-3.12-4.92A77.24,77.24,0,0,1,68,302.42L71,301.8c.44,7.61,2.24,15.11,6.53,21a32.19,32.19,0,0,0,7.74,7.53,55,55,0,0,0,9.55,5.24c3.34,1.47,6.8,2.68,10.26,3.88s6.93,2.31,10.4,3.35q10.38,3.15,20.72,5.5A308.63,308.63,0,0,0,177,354.77a140.38,140.38,0,0,0,19.82.53A73.17,73.17,0,0,0,215.7,352L219,351l3.35-1.34c.56-.23,1.15-.43,1.71-.7l1.69-.82a36.65,36.65,0,0,0,3.42-1.74,54.12,54.12,0,0,0,12.89-9.67A52.5,52.5,0,0,0,251.78,323a63.78,63.78,0,0,0,5.24-15.9,115.34,115.34,0,0,0,1.48-15.71c.2-5,.29-9.67.31-13.83C258.84,269.2,258.6,262.85,258.48,259.72Z"
				}), c.a.createElement("path", {
					className: "cls-8",
					d: "M342.93,268.58c0,31.72-26.19,57.43-45.33,57.43S263,300.3,263,268.58s15.52-57.42,34.65-57.42S342.93,236.87,342.93,268.58Z"
				}), c.a.createElement("path", {
					d: "M342.88,268.58a14.16,14.16,0,0,1-.39-2.75c-.09-.74-.2-1.6-.32-2.58s-.32-2.06-.5-3.23a71,71,0,0,0-1.94-7.91,67.3,67.3,0,0,0-3.56-8.92,64.44,64.44,0,0,0-11.66-16.64,55.34,55.34,0,0,0-6.89-6,43.8,43.8,0,0,0-6.29-3.86,37.57,37.57,0,0,0-5.08-2.12,31,31,0,0,0-5.35-1.24,20.16,20.16,0,0,0-10.62,1.45,25.57,25.57,0,0,0-4.81,2.74,34.16,34.16,0,0,0-4.25,3.75,45.35,45.35,0,0,0-3.66,4.47,51.8,51.8,0,0,0-3.08,5,71.21,71.21,0,0,0-7.4,22.45,92.25,92.25,0,0,0-.79,23.3,84.42,84.42,0,0,0,4.07,19.36,57,57,0,0,0,8.92,16.87,34.68,34.68,0,0,0,6.53,6.3,22.16,22.16,0,0,0,7.77,3.61,18.68,18.68,0,0,0,4.14.5,22.24,22.24,0,0,0,4.2-.42,31.09,31.09,0,0,0,8.15-2.84,52.58,52.58,0,0,0,13.79-10.26,65,65,0,0,0,9.9-13.13,63.38,63.38,0,0,0,6-14.08,62.29,62.29,0,0,0,2.3-13.78A48.67,48.67,0,0,1,342,283a58.47,58.47,0,0,1-1.88,8.22,62.12,62.12,0,0,1-3.15,8.09,64.26,64.26,0,0,1-4.17,7.39,63.45,63.45,0,0,1-4.76,6.27,46.91,46.91,0,0,1-9,8.06A43.06,43.06,0,0,1,303,327.84a25.69,25.69,0,0,1-8.79.08,24.7,24.7,0,0,1-8.07-2.89,36.88,36.88,0,0,1-11.79-11,61,61,0,0,1-7.1-13.61A88.73,88.73,0,0,1,261.83,272a95.22,95.22,0,0,1,2.87-27A73.64,73.64,0,0,1,269,232.8a54.91,54.91,0,0,1,6.5-10.86,37,37,0,0,1,9.08-8.45,29.13,29.13,0,0,1,5.56-2.7,24.4,24.4,0,0,1,6-1.22,28.22,28.22,0,0,1,11.64,1.9,45,45,0,0,1,9.87,5.28,60.29,60.29,0,0,1,14.67,15,57.54,57.54,0,0,1,5.38,9.51,60.59,60.59,0,0,1,3.77,11.21,58.23,58.23,0,0,1,1.41,10.08C343.05,265.36,342.93,267.52,342.88,268.58Z"
				}), c.a.createElement("g", {
					className: "cls-3"
				}, c.a.createElement("path", {
					d: "M302.71,268.58c.61.49.83,5.11,1.87,10.28a54.88,54.88,0,0,0,2.05,7.71,29.22,29.22,0,0,0,2.72,5.8,19.26,19.26,0,0,0,5.52,6,5.33,5.33,0,0,0,6,.18,15.08,15.08,0,0,0,4.88-6,37.28,37.28,0,0,0,2.9-8.15,70.41,70.41,0,0,0,1.85-15,75.82,75.82,0,0,0-1-14.41,43.61,43.61,0,0,0-3.78-12.27c-1.77-3.47-4.22-6.18-7.28-6.7a5.6,5.6,0,0,1,2.58-.66,8.29,8.29,0,0,1,3.26.62,16.33,16.33,0,0,1,5.94,4.33,22.67,22.67,0,0,1,5.39,10.28,82,82,0,0,1,.86,13.4,93.35,93.35,0,0,1-.95,12.3,71.21,71.21,0,0,1-2.49,11.27,38.75,38.75,0,0,1-4.59,10,19.12,19.12,0,0,1-3.66,4.08,11,11,0,0,1-5.18,2.36,9.63,9.63,0,0,1-5.61-.88,14.06,14.06,0,0,1-4.2-3.11,26.69,26.69,0,0,1-5-7.85,39.19,39.19,0,0,1-2.4-8.06,36.88,36.88,0,0,1-.52-9A49.72,49.72,0,0,1,302.71,268.58Z"
				})), c.a.createElement("path", {
					className: "cls-2",
					d: "M269.41,190.15c-.9.13-7.33-2.85-15-5.66l-5.9-2.06-5.9-1.79c-3.84-1-7.32-1.92-9.86-2.33a183.07,183.07,0,0,0-28.3-3,154.67,154.67,0,0,0-28.69,2.11,177.26,177.26,0,0,0-44.71,14.16,219.42,219.42,0,0,0-33.55,19.54,78.25,78.25,0,0,1,13.31-13.46,70.72,70.72,0,0,1,13.92-9.11c24.92-11.14,48.47-16.17,69.45-17s39.39,2.58,54.39,8.15a102.8,102.8,0,0,1,12.35,5.56c2,1,3.86,2.12,5.34,3Z"
				}), c.a.createElement("path", {
					className: "cls-2",
					d: "M269.42,271.29c-.47-.25-.82-2.91-.77-6s.36-6.57.47-8.54a35.9,35.9,0,0,1,.65-5.41c.39-1.9.9-3.62,1.43-5.42a87.92,87.92,0,0,1,3.91-10.44,41.74,41.74,0,0,1,4.84-8.33,23.93,23.93,0,0,1,3.38-3.61,11.29,11.29,0,0,1,4.92-2.56c.25,0,.49-.1.74-.13l.78,0a5.91,5.91,0,0,1,1.51.15,7.82,7.82,0,0,1,2.59,1,12,12,0,0,1,3.26,3.19,24.1,24.1,0,0,1,3.07,6.38c-2-1-4.25-2.67-6.22-3.82a12.71,12.71,0,0,0-2.49-1.13,8.48,8.48,0,0,1-1.21-.32,2.66,2.66,0,0,0-2.1.07c-.21.08-.42.16-.64.26l-.64.38a12,12,0,0,0-1.27.92,23.28,23.28,0,0,0-4.25,4.83A50.75,50.75,0,0,0,276,243.64c-.67,1.79-1.24,3.54-1.77,5.25s-1,3.33-1.34,4.92c-.69,3.2-1.12,6.24-1.6,9.08-.19,1.35-.65,3.19-1,4.83S269.53,270.81,269.42,271.29Z"
				}), c.a.createElement("g", {
					className: "cls-3"
				}, c.a.createElement("path", {
					d: "M313.88,309.68c.28-.05.81.36.77,1.29a3.83,3.83,0,0,1-1.46,2.54,28.1,28.1,0,0,1-4.56,2.74c-3.7,2.28-8.71,2.91-13.15,2.52A24.28,24.28,0,0,1,285,315.51a21.74,21.74,0,0,1-6.56-5.9,14.94,14.94,0,0,1,5.28-1.71c1.63-.21,2.91-.1,3.38.42A16.17,16.17,0,0,0,300,313.66c4.16-.23,7.6-1.6,10.32-2.25.62-.22,1.54-.26,2.28-.46a1.68,1.68,0,0,0,.92-.52A1.81,1.81,0,0,0,313.88,309.68Z"
				})), c.a.createElement("g", {
					className: "cls-3"
				}, c.a.createElement("path", {
					d: "M295.4,294.17c.32,0,.58.34.81.9a5.09,5.09,0,0,1,.11,2.22,12.08,12.08,0,0,1-2,4.37,9.48,9.48,0,0,1-5,4,11.13,11.13,0,0,1-3.48.65,10.49,10.49,0,0,1-1.85-.1c-.63-.07-1.1-.21-1.65-.32a13.65,13.65,0,0,1-4.85-2.37,16.1,16.1,0,0,1-6.13-10.34,14.14,14.14,0,0,1,5.11,0c1.42.27,2.4.68,2.54,1.26a9.42,9.42,0,0,0,3.13,5.23,6.64,6.64,0,0,0,2.31,1.23,5.76,5.76,0,0,0,1.15.24,6,6,0,0,0,1.13,0,7.46,7.46,0,0,0,3.74-1.68,22.68,22.68,0,0,0,2.36-2.3,4,4,0,0,1,.62-.6c.21-.23.57-.49.8-.79A9.74,9.74,0,0,0,295.4,294.17Z"
				})), c.a.createElement("path", {
					className: "cls-2",
					d: "M318.4,226.41a15,15,0,0,1-2.85.88A16.9,16.9,0,0,0,310.3,230a25.81,25.81,0,0,0-7.63,9.78c-4.09,9.32-5.81,21.07-5.17,31.52.55,9.12,2.51,18.07,6.05,25.32a30.89,30.89,0,0,0,6.47,9.14,15.43,15.43,0,0,0,8.38,4.2,9.93,9.93,0,0,1-5.14.77,15.52,15.52,0,0,1-6-2,19,19,0,0,1-7.27-7.18,58.47,58.47,0,0,1-4-11.12,81.27,81.27,0,0,1-1.94-10.63,93.57,93.57,0,0,1-.26-19.44,64.26,64.26,0,0,1,3.67-16.75,33.34,33.34,0,0,1,8.12-12.84,17,17,0,0,1,7.08-4A13.33,13.33,0,0,1,318.4,226.41Z"
				}), c.a.createElement("path", {
					d: "M276.87,218.74a25.82,25.82,0,0,0-1.16-4.81,47,47,0,0,0-4.79-9.07,28.82,28.82,0,0,0-3.73-4.56,38,38,0,0,0-4.5-3.73,55.19,55.19,0,0,0-8.37-4.87,181.15,181.15,0,0,0-25.75-9.62,184.82,184.82,0,0,0-27.34-5.65,178.8,178.8,0,0,0-45.4-.41,131.8,131.8,0,0,0-19.66,4.09,110.74,110.74,0,0,0-16,6.22,66.94,66.94,0,0,1,15.69-9,82.56,82.56,0,0,1,8.76-2.93c1.35-.36,2.59-.68,3.7-.93s2.11-.37,2.91-.48c3.24-.49,6.45-.69,9.6-1,3.16-.13,6.25-.37,9.31-.36,6.11-.13,12,.15,17.73.56l4.24.36c1.4.13,2.79.31,4.16.46,2.76.27,5.45.73,8.11,1.09,5.3.86,10.4,1.82,15.3,3a169.82,169.82,0,0,1,26.9,8.69,104.66,104.66,0,0,1,11.55,5.57,53.61,53.61,0,0,1,5.17,3.32,37.71,37.71,0,0,1,4.56,3.85,24.55,24.55,0,0,1,4,5,52.78,52.78,0,0,1,3.12,6.07,26.25,26.25,0,0,1,1.78,5.63A12.69,12.69,0,0,1,276.87,218.74Z"
				}), c.a.createElement("path", {
					d: "M336.07,260.05c0,.41-1.77,2.74-4.27,5a67.59,67.59,0,0,1-7.39,5.81,53.07,53.07,0,0,1-10.51,5.81,83.09,83.09,0,0,1-11.61,3.79,85.59,85.59,0,0,1-19.64,2.94,46,46,0,0,1-16.15-2.34c2.14-.37,5.05-.61,7.75-.89a48.41,48.41,0,0,1,6.51-.4A63.87,63.87,0,0,0,296,279c2.37-.38,4.65-.86,6.85-1.39s4.28-1.12,6.28-1.8a74.14,74.14,0,0,0,19.45-10.14c.6-.46,1.34-1,2.11-1.5s1.57-1.1,2.29-1.67C334.42,261.4,335.64,260.36,336.07,260.05Z"
				}), c.a.createElement("path", {
					className: "cls-5",
					d: "M219.16,352.38c2.78-.68,7.37-6,9.7-7.92,2.49-2.09,3.92-4.61,6.08-7,5.57-6.2,12-10.51,16.24-18.21a3.47,3.47,0,0,1,1-1.26,2.72,2.72,0,0,1,1.43-.33l6-.28a204.48,204.48,0,0,1-1.92,23.51,6.68,6.68,0,0,1-1.24,3.69,5.46,5.46,0,0,1-3,1.4C244.69,348.11,227.89,350.25,219.16,352.38Z"
				}), c.a.createElement("path", {
					d: "M219.14,352.33c.35-.62,4.9-1.88,10.2-3s11.33-2.22,14.62-3.1c2.91-.78,5.93-1.55,8.89-2.42a4.93,4.93,0,0,0,1.55-.65c.23-.2.25-.27.4-.71a34.19,34.19,0,0,0,.5-4.25c.29-3.22.56-6.45.75-9.63.1-1.59.17-3.17.23-4.74.05-1.4.11-3.79.06-3.17,0-.05-.07,0-.1,0v0H256l-.5,0-1,.06-.5,0h0l-.11.18-.53.92a35.43,35.43,0,0,1-2.46,3.58c-3.55,4.54-7.72,7.86-11.21,11.1-.89.8-1.73,1.61-2.54,2.42s-1.5,1.58-2.27,2.46-1.54,1.79-2.43,2.67c-.44.43-.89.86-1.38,1.26-.23.2-.48.39-.73.58l-.6.45c-1.61,1.26-3.23,2.69-4.88,3.91a26.82,26.82,0,0,1-2.53,1.72,9,9,0,0,1-2.92,1.18,8.44,8.44,0,0,0,2.08-2.14c.6-.81,1.17-1.67,1.76-2.57A65.53,65.53,0,0,1,227.1,343c.23-.26.38-.45.52-.62l.42-.57c.28-.38.54-.77.8-1.17.53-.84,1-1.64,1.52-2.38a17.52,17.52,0,0,1,3.06-3.75c3.51-3.06,7-5.55,10-8.27a38.67,38.67,0,0,0,4.08-4.24c.61-.75,1.16-1.51,1.7-2.3l.78-1.25a4.56,4.56,0,0,1,1.36-1.59,3.78,3.78,0,0,1,2-.55l1.58,0,3.54-.11,1.95-.06.48,0v.49l0,1c0,1.25-.09,2.48-.14,3.71-.16,3.68-.4,7.24-.68,10.67s-.61,6.72-1,10a8.52,8.52,0,0,1-.81,2.79,5,5,0,0,1-2.44,2.24,13.75,13.75,0,0,1-2.47.78c-.76.2-1.5.38-2.24.55-5.93,1.34-11.45,2.23-16.63,2.89-2.46.36-5.84.58-8.82.77Z"
				}), c.a.createElement("g", {
					className: "cls-3"
				}, c.a.createElement("path", {
					d: "M202.62,355.16c.26-.65,2.87-1,5.79-1.68a33.34,33.34,0,0,0,7.83-2.61c2.94-1.59,6-3.36,8.84-5.3a55.41,55.41,0,0,0,7.91-6.43,78.37,78.37,0,0,0,10.41-12.86,126.84,126.84,0,0,0,7-12.34,15.56,15.56,0,0,1,1.93,7.89c0,2.81-.7,5.34-1.54,6.42a124.18,124.18,0,0,1-10.06,11.15,84.89,84.89,0,0,1-9.8,8.32c-6.49,4.7-13.11,7.79-19.28,8.51a18.26,18.26,0,0,1-5.27-.18A25.29,25.29,0,0,1,202.62,355.16Z"
				})), c.a.createElement("g", {
					className: "cls-3"
				}, c.a.createElement("path", {
					d: "M273.4,361.35c-.12.19-.64.34-1.43.46l-.24-1c1.08-.81,2.91-1.91,4.77-3.22a17,17,0,0,0,2.56-2.12,2,2,0,0,0,.57-.87c-.06,0,.11,0,.2,0h.11c.07,0,0,0,0,0l0,0h0l-.24.14h-.46l-.43-.09a6.25,6.25,0,0,0-1-.15,3.81,3.81,0,0,0-1.26-1.15,4.29,4.29,0,0,0-1-.39,6.75,6.75,0,0,0-1-.23l-.29-.05h-.06l.05-.06.09-.12a2.61,2.61,0,0,0,.3-.55,4.21,4.21,0,0,0,.19-.76,9.42,9.42,0,0,0,.05-1.15c1-.48,2-1,3-1.51.51-.26,1-.54,1.49-.82l.75-.43.37-.21.19-.13a18.25,18.25,0,0,0,2.69-2,1.83,1.83,0,0,0,.2-.21.36.36,0,0,0,.09-.14s0,0,.05,0l.32.24a3.4,3.4,0,0,0,.68.36,1.29,1.29,0,0,0,.47.19l.13,0h.05a.2.2,0,0,0,.11,0c.14,0,0,0,.05,0l0,0a.58.58,0,0,0-.15.11.63.63,0,0,0-.11.12s-.14.15-.19.22l-.86,1.21h-.3c-.39,0-.76-.06-1.17-.07h-1.31c-1.87.07-4.08.28-6.42.47l-7,.6c1-.83,1.22-1.09,1.73-1.54l.4-.38.18-.18.1-.08.27-.23,5.11-4.13a36.83,36.83,0,0,1,6.47-4.05l1.82-.94c.66-.35.76-.41,1-.55l.26-.17.1-.06s0,0,0,0,.36.34.42.44a3.22,3.22,0,0,0,.32.32c.21.2.52.39.61.48a1.34,1.34,0,0,0,.57.25h0L285,338l-.05,0-.18.07-.36.15-.18.07-.2-.07-.82-.32-.93-.31c-1.25-.43-2.69-.85-4.15-1.3l-8.86-2.73,4.13-.95.38-.08.18-.05.63-.13,2.57-.54c1.64-.33,3.12-.62,4.65-.86a37.68,37.68,0,0,1,4.73-.48c.81,0,1.6,0,2.37,0h1.69l.39,0,2.6.21c1.68.14,3.25.28,4.72.38a16.85,16.85,0,0,1-3.68,2.16c-.7.31-1.44.6-2.18.87l-1.12.39-.28.09-.13,0-.05,0-.15.15c-.66.8.74,1.06.07.88a10.73,10.73,0,0,0-1.41-.23c-.24,0-.3,0-.23.1s.22.19.42.4a1,1,0,0,1,.13.19l0,.06.09.24,0,.12a.77.77,0,0,1,.06.23,4.17,4.17,0,0,1,0,.61,2.65,2.65,0,0,1-.29,1,2.94,2.94,0,0,1-.44.64,4.48,4.48,0,0,1-.82.71,12.1,12.1,0,0,1-1.36.76c-.33.15-.52.22-.73.3-.44.17-.91.35-1.38.56a17.85,17.85,0,0,0-2.81,1.53c-.23.14-.44.3-.64.45l-.07.06h.26l.35,0c.47,0,1-.07,1.45-.08a11.57,11.57,0,0,1,2.58.13l.3.09.14.05.06,0,.19.12a1.9,1.9,0,0,1,.41.4,2.23,2.23,0,0,1,.19.24c.05.11.1.22.14.33a1.77,1.77,0,0,1,.14.69,1.8,1.8,0,0,1-.08.61,3.53,3.53,0,0,1-.79,1.4,9.5,9.5,0,0,1-.84.84,26.73,26.73,0,0,1-3.36,2.35c-.63.39-1.1.68-1.59.95-.34.2-.65.37-1,.52l-.45.23-.12.05-.05,0s0,0,.06,0h.3a5.28,5.28,0,0,1,2.14.37c.14.12.15,0,.53.69a2.81,2.81,0,0,1,0,2.38,4.48,4.48,0,0,1-.85,1.21,8.67,8.67,0,0,1-.86.78c-2.52,2.05-7,3.24-8.59,3.57l-.07-.33A8.78,8.78,0,0,1,273.4,361.35Z"
				})), c.a.createElement("g", {
					id: "default-13",
					"data-name": "default"
				}, c.a.createElement("ellipse", {
					className: "cls-16",
					cx: "111.72",
					cy: "271.21",
					rx: "20",
					ry: "11.55",
					transform: "translate(-176.16 327.44) rotate(-78.66)"
				}), c.a.createElement("path", {
					d: "M123,273.47c-.27-.45.47-4.29,0-8.69a21.66,21.66,0,0,0-1.56-6.41,10.43,10.43,0,0,0-3-4.19,6.29,6.29,0,0,0-2.93-1.35,6.41,6.41,0,0,0-3.17.36,12.88,12.88,0,0,0-5.39,4.57,29.79,29.79,0,0,0-5.08,14.06A25.42,25.42,0,0,0,103.28,284a9.47,9.47,0,0,0,3.16,4.21,5.33,5.33,0,0,0,4.47.65,11.17,11.17,0,0,0,4.35-2.69,21.64,21.64,0,0,0,3.3-4.07,36.2,36.2,0,0,0,3.92-8.76,22,22,0,0,1-1.72,10.36c-1.46,3.62-4.23,6.59-6.19,7.53a10.22,10.22,0,0,1-6.33,1.18,8.91,8.91,0,0,1-5.32-3,14.75,14.75,0,0,1-2.68-4.83,22.71,22.71,0,0,1-1.11-5,33.2,33.2,0,0,1,.32-9.64,36.65,36.65,0,0,1,2.59-8.65,24.9,24.9,0,0,1,4.71-7.14,11.24,11.24,0,0,1,7.44-3.69,8,8,0,0,1,4.08,1,10,10,0,0,1,3,2.65,15.94,15.94,0,0,1,2.8,6.58,22.59,22.59,0,0,1,.17,7.56c-.15,1.25-.42,2.4-.62,3.32Z"
				}), c.a.createElement("circle", {
					className: "cls-16",
					cx: "214.59",
					cy: "281.72",
					r: "20.5"
				}), c.a.createElement("path", {
					d: "M235.06,281.76a4.3,4.3,0,0,1-.26-1.15c-.05-.31-.07-.67-.15-1.08s-.18-.85-.28-1.33a21.42,21.42,0,0,0-2.79-6.79,20.26,20.26,0,0,0-5.87-6,17.55,17.55,0,0,0-6.28-2.6,19.68,19.68,0,0,0-17.45,4.9,18.79,18.79,0,0,0-5,7.92,18.51,18.51,0,0,0-.63,9.11,18.8,18.8,0,0,0,2.89,7.2,19,19,0,0,0,19.66,8,19.37,19.37,0,0,0,11.39-7.09,21.24,21.24,0,0,0,3-5.45,22.58,22.58,0,0,0,1.23-5.65,16.56,16.56,0,0,1,.22,6.11,19.34,19.34,0,0,1-7.31,12.21,16.21,16.21,0,0,1-4.63,2.53,21.89,21.89,0,0,1-7.4,1.14,22.67,22.67,0,0,1-7.05-1.19,23.52,23.52,0,0,1-6.07-3.17,22,22,0,0,1-4.64-4.66,21.67,21.67,0,0,1-4.24-11.59,22,22,0,0,1,.4-5.91,23.15,23.15,0,0,1,1.94-5.42,21.44,21.44,0,0,1,3.18-4.57,20.76,20.76,0,0,1,2-1.92A23.71,23.71,0,0,1,203,263.7a21.2,21.2,0,0,1,19.23-2.17,20.62,20.62,0,0,1,7.52,4.94,19.6,19.6,0,0,1,5.36,12.73C235.17,280.41,235.07,281.32,235.06,281.76Z"
				}))))),
				E = a("./src/reddit/actions/snoovatar.ts"),
				y = a("./src/reddit/actions/toaster.ts"),
				k = a("./node_modules/lodash/flatten.js"),
				O = a.n(k);
			const N = {
					id: "achievement_head_accessory_012",
					section_id: "head_accessories",
					assets: [{
						accessory_id: "achievement_head_accessory_012",
						slot: 80,
						image_url: "https://i.redd.it/snoovatar/accessory_assets/r13ZdtEfXFM_achievement_head_accessory_012.svg"
					}],
					customizable_classes: [],
					capability_required: null,
					state: "ENABLED",
					tags: ["achievement"],
					available_for_closet: !0
				},
				j = {
					id: "achievement_body_012",
					section_id: "top_body_tops",
					assets: [{
						accessory_id: "achievement_body_012",
						slot: 40,
						image_url: "https://i.redd.it/snoovatar/snoo_assets/XvgCbVDmabY_achievement_body_012.svg"
					}],
					customizable_classes: ["body"],
					capability_required: null,
					state: "ENABLED",
					tags: ["achievement"],
					available_for_closet: !0
				},
				C = {
					id: "achievement_body_bottom_012",
					section_id: "bottom_body_bottoms",
					assets: [{
						accessory_id: "achievement_body_bottom_012",
						slot: 30,
						image_url: "https://i.redd.it/snoovatar/snoo_assets/_Fx-Iq6Aueg_achievement_body_bottom_012.svg"
					}],
					customizable_classes: ["body"],
					capability_required: null,
					state: "ENABLED",
					tags: ["achievement"],
					available_for_closet: !0
				};
			var A = a("./src/reddit/models/Toast/index.ts"),
				S = a("./src/reddit/selectors/avatar.ts");
			const {
				fbt: I
			} = a("./node_modules/fbt/lib/FbtPublic.js"), P = {
				kind: A.b.SuccessCommunityGreen,
				text: I._("Updated! Enjoy your birthday look!", null, {
					hk: "M2XMT"
				})
			}, w = {
				kind: A.b.Error,
				text: I._("Error updating your look. Please try again", null, {
					hk: "2XOYKO"
				})
			}, T = e => {
				const t = Object(i.d)();
				Object(r.useEffect)(() => {
					!async function() {
						e === f.a.Achievements && await t(Object(E.c)())
					}()
				}, [e, t]);
				const a = Object(i.e)(S.a),
					[s, n] = Object(r.useState)(!1),
					c = Object(h.a)();
				return [async () => {
					if (a) {
						const e = a.snoovatar,
							s = (null == e ? void 0 : e.styles) || {},
							r = ((e, t) => {
								const a = O()(t.map(e => e.assets.map(e => e.slot)));
								return [...e.filter(e => !e.assets.find(e => a.includes(e.slot))), ...t]
							})((null == e ? void 0 : e.accessories) || [], [N, j, C]).map(e => e.id);
						c(Object(b.b)());
						try {
							n(!0), t(Object(y.f)(P)), c(Object(b.f)("anniversary_achievement")), await t(Object(E.e)(r, s, {
								set_avatar_to_profile: !0,
								source: "anniversary_achievement"
							}))
						} catch {
							n(!1), t(Object(y.f)(w))
						}
					}
				}, s]
			}, {
				fbt: M
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var L;
			! function(e) {
				e.Dismissed = "dismissed", e.Hidden = "hidden", e.Visible = "visible"
			}(L || (L = {}));
			t.a = e => {
				const {
					bannerType: t,
					className: a
				} = e, v = t === f.a.CommunitySpacesControl, E = Object(i.d)(), y = Object(h.a)(), [k, O] = T(t), N = Object(p.f)(d.a.AVATAR_LISTING_BANNER, u.c), [j, C] = Object(r.useState)(N ? L.Hidden : L.Visible);
				if (Object(r.useEffect)(() => {
						j === L.Visible && t !== f.a.Achievements && y(Object(b.q)(v))
					}, [t, j, y, v]), Object(r.useEffect)(() => {
						j === L.Visible && t === f.a.Achievements && y(Object(b.m)())
					}, [t, j, y]), j === L.Hidden) return null;
				const A = () => {
						C(L.Visible), Object(p.kb)(d.a.AVATAR_LISTING_BANNER, !1, u.c)
					},
					S = () => {
						y(Object(b.e)(v)), E(Object(o.b)({
							source: v ? "community_spaces_control" : "community_spaces"
						}))
					},
					I = () => {
						Object(p.kb)(d.a.AVATAR_LISTING_BANNER, !0, u.c), t === f.a.Achievements ? k() : S()
					};
				if (j === L.Dismissed) return c.a.createElement("div", {
					className: Object(n.a)(_.a.dismissedContainer, a)
				}, c.a.createElement("div", {
					className: _.a.dismissedText
				}, M._("Ok, we won't show you this again.", null, {
					hk: "4z33KK"
				})), c.a.createElement(m.t, {
					onClick: A
				}, M._("undo", null, {
					hk: "1A9z3Y"
				})));
				const {
					title: P,
					heading: w,
					description: B,
					buttonText: F,
					achievementEquipSuccessText: R
				} = function(e) {
					return e === f.a.Achievements ? {
						title: M._("Avatar Unlocked", null, {
							hk: "8hmDI"
						}),
						heading: M._("Welcome to the 1-Year Club!", null, {
							hk: "1rWLgV"
						}),
						description: M._("Celebrate and show off with this exclusive accessory only Redditors in the 1-year club can enjoy.", null, {
							hk: "1rqJGX"
						}),
						buttonText: M._("Claim Your Look", null, {
							hk: "H78ib"
						}),
						achievementEquipSuccessText: M._("Looking Good!", null, {
							hk: "3StzJ0"
						})
					} : e === f.a.CommunitySpaces ? {
						title: M._("Introducing", null, {
							hk: "Cbm1W"
						}),
						heading: M._("Community Square", null, {
							hk: "O5otX"
						}),
						description: M._("Grab an avatar to hang out with people in your communities.", null, {
							hk: "1wAMNP"
						}),
						buttonText: M._("Get Started", null, {
							hk: "3ISZMI"
						})
					} : {
						title: M._("Available Now", null, {
							hk: "42JM0D"
						}),
						heading: M._("Avatar Builder", null, {
							hk: "lY1YA"
						}),
						description: M._("Personalize your look on Reddit with the latest styles and gear!", null, {
							hk: "2y08sF"
						}),
						buttonText: M._("Get Started", null, {
							hk: "3ISZMI"
						})
					}
				}(t), {
					legalCopy: D,
					learnMoreText: Z,
					url: U
				} = l.a, q = `${s.a.assetPath}/img/snoovatars/` + (t === f.a.CommunitySpacesControl ? "CommunitySpace_Control.png" : "CommunitySquare.png");
				return c.a.createElement("div", {
					className: Object(n.a)(_.a.container, a),
					"data-testid": "avatar-listing-banner"
				}, t !== f.a.Achievements && c.a.createElement("img", {
					width: "640",
					height: "360",
					className: _.a.headerImage,
					onClick: S,
					role: "button",
					alt: M._("Continue to Avatar Community Spaces", null, {
						hk: "3qCfDX"
					}),
					src: q
				}), t === f.a.Achievements && c.a.createElement("div", {
					className: _.a.achievementsBannerWrapper,
					onClick: I
				}, c.a.createElement(x, null)), c.a.createElement(g.a, {
					className: Object(n.a)(_.a.close, {
						[_.a.closeLight]: v
					}),
					onClick: () => {
						C(L.Dismissed), Object(p.kb)(d.a.AVATAR_LISTING_BANNER, !0, u.c), t !== f.a.Achievements && y(Object(b.k)(v)), t === f.a.Achievements && y(Object(b.j)())
					}
				}), c.a.createElement("div", {
					className: _.a.contentWrapper
				}, c.a.createElement("div", {
					className: _.a.copyText
				}, c.a.createElement("h4", {
					className: _.a.copyTextTitle
				}, P), c.a.createElement("h1", {
					className: _.a.copyTextHeading
				}, w), c.a.createElement("p", {
					className: _.a.copyTextDescription
				}, B)), c.a.createElement(m.k, {
					onClick: I,
					className: _.a.continueButton,
					disabled: !!O
				}, O ? R : F)), t === f.a.Achievements && c.a.createElement("div", {
					className: _.a.legalTextContainer
				}, D(), c.a.createElement("a", {
					href: U,
					className: _.a.learnMoreLink
				}, Z())))
			}
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/ScrollChildFactory.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return u
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./src/lib/LRUCache/index.ts"),
				c = a("./src/lib/pubsub/index.ts"),
				i = a("./src/reddit/actions/focusedVerticals/constants.ts"),
				o = a("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/async.tsx"),
				l = a("./src/reddit/constants/page.ts");
			const d = new r.a(50),
				u = e => {
					const {
						numInstance: t,
						layout: a,
						listingKey: s,
						listingPosition: r
					} = e, u = `focused-vertical-recommendation-${t}-${a}-${s}`;
					let m = d.get(u);
					if (m) return m;
					const p = new c.a;
					return m = {
						estHeight: i.d,
						id: `focused-vertical-recommendation-${t}-${a}-${s}`,
						trackOnEnteredViewport() {
							p.publish(i.b)
						},
						render: () => n.a.createElement(o.a, {
							listingPosition: r,
							numInstance: t,
							listingKey: s,
							listingName: l.c,
							pubsub: p
						})
					}, d.set(u, m), m
				}
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/async.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!a.m[t]
				},
				importAsync: () => a.e("reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts").then(a.bind(null, "./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/CommunityDescWithPosts/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return a(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/CommunityDescWithPosts/index.tsx"
				}
			});
			t.a = n
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				i = a.n(c);
			class o extends n.a.Component {
				render() {
					return n.a.createElement("div", {
						className: Object(r.a)(i.a.heroContainer, this.props.className)
					}, n.a.createElement("div", {
						className: Object(r.a)(i.a.header, this.props.headerClassName)
					}, this.props.header), n.a.createElement("div", {
						className: Object(r.a)(this.props.hidePadding ? i.a.bodyHidePadding : i.a.body, this.props.bodyClassName)
					}, this.props.children))
				}
			}
			t.a = o
		},
		"./src/reddit/components/Econ/Marketplace/InFeedUnit/async.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(s.a)({
				resolved: {},
				chunkName: () => "MarketplaceInFeedUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!a.m[t]
				},
				importAsync: () => Promise.all([a.e(0), a.e(1), a.e(3), a.e("vendors~MarketplaceClaimModal~MarketplaceInFeedUnit"), a.e("MarketplaceInFeedUnit")]).then(a.bind(null, "./src/reddit/components/Econ/Marketplace/InFeedUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return a(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Marketplace/InFeedUnit/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = n
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, a) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FakeBannerAd/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return h
			}));
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				r = a("./node_modules/react/index.js"),
				c = a.n(r),
				i = a("./src/config.ts"),
				o = a("./src/reddit/components/FakeBannerAd/index.m.less"),
				l = a.n(o),
				d = a("./src/lib/lessComponent.tsx");
			const u = d.a.wrapped(e => c.a.createElement("div", {
					className: e.className,
					ref: e.bannerRef
				}, e.children), "BannerContainer", l.a),
				m = d.a.wrapped(e => c.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", l.a),
				p = "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
				b = .5;
			class h extends c.a.PureComponent {
				constructor() {
					super(...arguments), this.bannerRef = c.a.createRef(), this.state = {
						sentOncePerRender: !1
					}, this.handleVisibilityChange = e => {
						if (!(e.intersectionRatio < b || this.state.sentOncePerRender)) {
							const e = this.bannerRef && this.bannerRef.current,
								t = e ? e.offsetWidth : null,
								a = e ? e.offsetHeight : null;
							this.props.trackSidebarHouseAdViewability(t, a), this.setState({
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
						sentOncePerRender: a
					} = this.state, r = a ? c.a.createElement(m, {
						src: i.a.assetPath + t
					}) : c.a.createElement(n.a, {
						onChange: this.handleVisibilityChange,
						threshold: b
					}, c.a.createElement(m, {
						src: i.a.assetPath + t
					}));
					return c.a.createElement(u, {
						bannerRef: this.bannerRef,
						className: p,
						"data-before-content": s.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, c.a.createElement("a", {
						href: i.a.redditUrl + e,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r))
				}
			}
		},
		"./src/reddit/components/FeaturedLiveEntrypoint/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = a("./node_modules/react/index.js"),
				r = a.n(n),
				c = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/reddit/components/InAppNotifications/index.tsx"),
				o = a("./src/reddit/selectors/experiments/inAppNotification.ts"),
				l = a("./src/reddit/selectors/inAppNotifications.ts"),
				d = a("./src/reddit/selectors/live.ts");
			const u = Object(s.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointAnnouncementsCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!a.m[t]
					},
					importAsync: () => a.e("FeaturedLiveEntrypointAnnouncementsCarousel").then(a.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return a(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.tsx"
					}
				}),
				m = Object(s.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointAnnouncement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!a.m[t]
					},
					importAsync: () => a.e("FeaturedLiveEntrypointAnnouncement").then(a.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/LiveThread/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return a(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/LiveThread/index.tsx"
					}
				}),
				p = () => {
					const e = Object(c.e)(d.a, (e, t) => e && t && e[0].id === t[0].id || !1),
						t = Object(c.e)(e => e.live.shouldShowAnnouncements),
						a = Object(c.e)(d.b),
						s = Object(c.e)(l.b),
						n = Object(c.e)(o.c),
						p = () => {
							var e;
							return (null === (e = null == s ? void 0 : s.notifications) || void 0 === e ? void 0 : e.length) && n ? r.a.createElement(i.b, {
								isOnTop: !0,
								notifications: null == s ? void 0 : s.notifications
							}) : null
						};
					return a ? r.a.createElement(m, {
						featuredLiveThread: a
					}) : e && e.length ? r.a.createElement(r.a.Fragment, null, r.a.createElement(u, {
						announcements: e
					}), !t && p()) : p()
				};
			t.a = p
		},
		"./src/reddit/components/FrontpageSidebar/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s = a("./node_modules/lodash/random.js"),
				n = a.n(s),
				r = a("./node_modules/lodash/shuffle.js"),
				c = a.n(r),
				i = a("./node_modules/react/index.js"),
				o = a.n(i),
				l = a("./node_modules/react-redux/es/index.js"),
				d = a("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				u = a("./node_modules/reselect/es/index.js"),
				m = a("./src/reddit/actions/subreddit.ts"),
				p = a("./src/reddit/actions/subreddit/topSubreddits.ts"),
				b = a("./src/reddit/components/IdCard/async.tsx"),
				h = a("./node_modules/react-router-redux/es/index.js"),
				g = a("./src/reddit/components/SidebarSpacer/index.tsx"),
				f = a("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				v = a("./src/reddit/controls/Button/index.tsx"),
				_ = a("./src/reddit/icons/fonts/index.tsx"),
				x = a("./src/reddit/components/PremiumCTA/index.m.less"),
				E = a.n(x);
			const {
				fbt: y
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class k extends o.a.Component {
				render() {
					const {
						className: e,
						onClickPremium: t
					} = this.props;
					return o.a.createElement(g.a, null, o.a.createElement(f.a, {
						className: e,
						contentOnly: !0
					}, o.a.createElement("div", {
						className: E.a.wrapper
					}, o.a.createElement("div", {
						className: E.a.contentWrapper
					}, o.a.createElement(_.a, {
						name: "premium",
						isFilled: !0,
						className: E.a.icon
					}), o.a.createElement("div", {
						className: E.a.content
					}, o.a.createElement("div", {
						className: E.a.title
					}, y._("Reddit Premium", null, {
						hk: "39JIKQ"
					})), o.a.createElement("div", {
						className: E.a.description
					}, y._("The best Reddit experience, with monthly Coins", null, {
						hk: "2n1ct3"
					})))), o.a.createElement(v.k, {
						isFullWidth: !0,
						onClick: t
					}, y._("Try Now", null, {
						hk: "2HeiOg"
					})))))
				}
			}
			var O = Object(l.b)(void 0, e => ({
					onClickPremium: () => e(Object(h.b)("/premium"))
				}))(k),
				N = a("./node_modules/fbt/lib/FbtPublic.js"),
				j = a("./src/lib/classNames/index.ts"),
				C = a("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				A = a("./src/reddit/controls/InternalLink/index.tsx"),
				S = a("./src/reddit/endpoints/goodContent/index.ts"),
				I = a("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				P = a("./src/reddit/components/SEOSidebarLinks/index.m.less"),
				w = a.n(P);
			const T = e => {
					let {
						to: t,
						title: a
					} = e;
					return o.a.createElement(C.a, {
						subredditName: a,
						tooltipPosition: ["right", "top"]
					}, o.a.createElement(A.default, {
						className: w.a.Link,
						to: t,
						title: a
					}, a))
				},
				M = e => {
					let {
						title: t,
						isOpened: a,
						isExpanded: s,
						children: n,
						onToggle: r,
						onExpand: c
					} = e;
					return o.a.createElement("div", {
						className: Object(j.a)(w.a.Section, {
							[w.a.opened]: a,
							[w.a.expanded]: s
						})
					}, o.a.createElement("div", {
						className: w.a.SectionHeader,
						onClick: r
					}, o.a.createElement("div", {
						className: w.a.SectionTitle
					}, t), o.a.createElement(I.a, {
						className: w.a.SectionChevron
					})), o.a.createElement("div", {
						className: w.a.SectionBody
					}, o.a.createElement("div", {
						className: w.a.SectionContent
					}, n), o.a.createElement("div", {
						className: w.a.SectionFooter
					}, o.a.createElement(v.r, {
						className: w.a.SectionButton,
						onClick: c
					}, s ? N.fbt._("Less", null, {
						hk: "PF0lJ"
					}) : N.fbt._("See more", null, {
						hk: "439kAh"
					})))))
				};
			class L extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						openedSection: 0,
						isSectionExpanded: !1
					}, this.onToggle = e => {
						this.setState(t => {
							let {
								openedSection: a
							} = t;
							return a === e ? {
								openedSection: -1,
								isSectionExpanded: !1
							} : {
								openedSection: e,
								isSectionExpanded: !1
							}
						})
					}, this.onExpand = () => {
						this.setState(e => {
							let {
								isSectionExpanded: t
							} = e;
							return {
								isSectionExpanded: !t
							}
						})
					}, this.renderLink = e => {
						let {
							url: t,
							title: a
						} = e;
						return o.a.createElement(T, {
							key: a,
							to: t,
							title: a
						})
					}, this.renderSection = (e, t) => o.a.createElement(M, {
						key: e.title,
						title: Object(S.b)(e.title),
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
					if (t) return o.a.createElement(f.a, {
						className: Object(j.a)(w.a.Widget, e),
						contentOnly: !0
					}, t.map(this.renderSection))
				}
			}
			var B = L,
				F = a("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				R = a("./src/reddit/components/SidebarContainer/index.tsx"),
				D = a("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				Z = a("./node_modules/lodash/sampleSize.js"),
				U = a.n(Z),
				q = a("./node_modules/request-idle-callback/index.js"),
				V = a("./src/lib/constants/index.ts"),
				W = a("./src/reddit/components/SubredditIcon/index.tsx"),
				H = a("./src/reddit/constants/localStorage.ts"),
				G = a("./src/reddit/contexts/ApiContext.tsx"),
				K = a("./src/reddit/featureFlags/component.tsx"),
				z = a("./src/reddit/helpers/localStorage/index.ts"),
				Q = a("./src/reddit/helpers/name/index.ts"),
				X = a("./src/lib/makeApiRequest/index.ts"),
				J = a("./src/lib/omitHeaders/index.ts"),
				Y = a("./src/reddit/constants/headers.ts");
			const $ = e => Object(X.a)(Object(J.a)(e, [Y.a]), {
				endpoint: `${e.apiUrl}/api/multi/user/CommunityAdoptionBot/m/adoption_week/`,
				method: V.jb.GET,
				type: "json"
			});
			var ee = a("./src/reddit/components/SubredditAdoptionWidget/index.m.less"),
				te = a.n(ee);
			const {
				fbt: ae
			} = a("./node_modules/fbt/lib/FbtPublic.js"), se = 3, ne = 30 * V.kb, re = "SubredditAdoption";
			class ce extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditNames: []
					}
				}
				async getSubredditForAdoption() {
					let e = ce.cachedData || Object(z.A)(H.b.SUBREDDITS_FOR_ADOPTION_STORE) || null;
					if (!e || Date.now() - e.fetchedAt > ne) {
						const t = await $(this.props.apiContext());
						t.ok && (e = {
							subreddits: t.body.data.subreddits.map(e => e.name),
							fetchedAt: Date.now()
						}, Object(z.Eb)(H.b.SUBREDDITS_FOR_ADOPTION_STORE, e))
					}
					return ce.cachedData = e, e ? e.subreddits : []
				}
				componentDidMount() {
					Object(q.requestIdleCallback)(async () => {
						const e = await this.getSubredditForAdoption();
						this.setState({
							subredditNames: U()(e, se)
						})
					})
				}
				render() {
					const {
						subredditNames: e
					} = this.state;
					return e.length ? o.a.createElement("div", {
						className: te.a.container
					}, o.a.createElement("div", {
						className: te.a.main
					}, o.a.createElement("div", {
						className: te.a.title
					}, o.a.createElement(W.b, {
						className: te.a.icon
					}), ae._("International Subreddit Adoption Week", null, {
						hk: "487Ffc"
					})), o.a.createElement("div", {
						className: te.a.description
					}, ae._("{subreddits list} and more are looking for moderators!", [ae._param("subreddits list", o.a.createElement("strong", null, e.map(Q.c).join(", ") + (e.length > 1 ? "," : "")))], {
						hk: "2Tb946"
					}))), o.a.createElement(v.n, {
						className: te.a.button,
						to: `/r/${re}?utm_source=reddit&utm_medium=fp_banner&utm_campaign=subreddit_adoption_week`
					}, ae._("Go Now", null, {
						hk: "LCCmX"
					}))) : null
				}
			}
			ce.cachedData = null;
			var ie = Object(K.a)("srAdoptionWeek", Object(G.b)(ce)),
				oe = a("./src/reddit/components/TopSubredditsWidget/Container.tsx"),
				le = a("./src/reddit/actions/post.ts"),
				de = a("./src/reddit/components/MiniPost/index.tsx"),
				ue = a("./src/reddit/components/Widgets/Base/index.tsx");
			class me extends o.a.Component {
				render() {
					return o.a.createElement("div", null, o.a.createElement(ue.a, null, this.props.headerText), this.props.posts.map(e => o.a.createElement(de.a, {
						key: e.id,
						postId: e.id
					})))
				}
			}
			var pe = me,
				be = a("./src/reddit/helpers/overlay/index.ts"),
				he = a("./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less"),
				ge = a.n(he),
				fe = a("./src/lib/lessComponent.tsx");
			const ve = Object(l.b)(null, (e, t) => ({
					openLightbox: t => () => e(Object(be.a)(t.permalink)),
					clearLinks: () => e(Object(le.t)())
				})),
				_e = fe.a.button("ClearButton", ge.a);
			class xe extends o.a.Component {
				render() {
					return o.a.createElement(ue.b, null, o.a.createElement(pe, {
						className: this.props.className,
						headerText: N.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: this.props.posts
					}), o.a.createElement(_e, {
						onClick: this.props.clearLinks
					}, N.fbt._("Clear", null, {
						hk: "1RMjjy"
					})))
				}
			}
			var Ee = ve(xe),
				ye = a("./src/reddit/selectors/posts.ts");
			const ke = Object(u.c)({
				recentPosts: ye.R
			});
			var Oe = Object(l.b)(ke, (e, t) => ({
					openLightbox: t => () => e(Object(be.a)(t.permalink))
				}))(e => {
					let {
						className: t,
						recentPosts: a
					} = e;
					return a && a.length ? o.a.createElement(g.a, null, o.a.createElement(Ee, {
						className: t,
						headerText: N.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: a
					})) : null
				}),
				Ne = a("./src/config.ts"),
				je = a("./src/lib/env/index.ts"),
				Ce = a("./src/reddit/controls/Chip/index.tsx"),
				Ae = a("./src/reddit/helpers/trackers/widgets.ts"),
				Se = a("./src/reddit/hooks/useTracking.ts");
			const Ie = [{
				getName: () => N.fbt._("Fashion", null, {
					hk: "4tXmOZ"
				}),
				url: "fashion"
			}, {
				getName: () => N.fbt._("Movies", null, {
					hk: "42bzfq"
				}),
				url: "movie"
			}, {
				getName: () => N.fbt._("Television", null, {
					hk: "4CMqPm"
				}),
				url: "television"
			}, {
				getName: () => N.fbt._("Comedy", null, {
					hk: "1ehWvG"
				}),
				url: "comedy"
			}, {
				getName: () => N.fbt._("Books", null, {
					hk: "13uutx"
				}),
				url: "book"
			}, {
				getName: () => N.fbt._("Gaming", null, {
					hk: "2mozPB"
				}),
				url: "gaming"
			}, {
				getName: () => N.fbt._("Science", null, {
					hk: "4u0516"
				}),
				url: "science"
			}, {
				getName: () => N.fbt._("Animals and Pets", null, {
					hk: "3TIGi8"
				}),
				url: "animals_and_pets"
			}, {
				getName: () => N.fbt._("Nature", null, {
					hk: "WhmJu"
				}),
				url: "nature"
			}, {
				getName: () => N.fbt._("Travel", null, {
					hk: "3PHfih"
				}),
				url: "travel"
			}, {
				getName: () => N.fbt._("Sports", null, {
					hk: "3GJvo1"
				}),
				url: "sports"
			}, {
				getName: () => N.fbt._("Memes", null, {
					hk: "4lL42P"
				}),
				url: "internet_culture_and_memes"
			}, {
				getName: () => N.fbt._("Music", null, {
					hk: "15iqrr"
				}),
				url: "music"
			}, {
				getName: () => N.fbt._("Crafts and DIY", null, {
					hk: "1JGKiO"
				}),
				url: "crafts_and_diy"
			}, {
				getName: () => N.fbt._("Technology", null, {
					hk: "2eXPke"
				}),
				url: "technology"
			}, {
				getName: () => N.fbt._("Art", null, {
					hk: "3cl8al"
				}),
				url: "art"
			}, {
				getName: () => N.fbt._("Hobbies", null, {
					hk: "3uC7Vw"
				}),
				url: "hobby"
			}, {
				getName: () => N.fbt._("Gardening", null, {
					hk: "2Uozgr"
				}),
				url: "gardening"
			}, {
				getName: () => N.fbt._("Art Garfunkel", null, {
					hk: "l1iiQ"
				}),
				url: "art_garfunkel"
			}, {
				getName: () => N.fbt._("Tree Frogs", null, {
					hk: "KVS4d"
				}),
				url: "tree_frog"
			}, {
				getName: () => N.fbt._("Adventure Novels", null, {
					hk: "3vbZt6"
				}),
				url: "adventure_novel"
			}, {
				getName: () => N.fbt._("Learning and Education", null, {
					hk: "3wIdG"
				}),
				url: "learning_and_education"
			}, {
				getName: () => N.fbt._("Family", null, {
					hk: "1GgG8Z"
				}),
				url: "family"
			}, {
				getName: () => N.fbt._("Q&A", null, {
					hk: "4En8Hj"
				}),
				url: "qa"
			}, {
				getName: () => N.fbt._("Health", null, {
					hk: "RF6iN"
				}),
				url: "health"
			}, {
				getName: () => N.fbt._("Fitness", null, {
					hk: "JczBr"
				}),
				url: "fitness"
			}, {
				getName: () => N.fbt._("History", null, {
					hk: "2bULhT"
				}),
				url: "history"
			}, {
				getName: () => N.fbt._("Activism", null, {
					hk: "2PWJIy"
				}),
				url: "activism"
			}, {
				getName: () => N.fbt._("Cars", null, {
					hk: "4dnuOx"
				}),
				url: "cars_and_motor_vehicles"
			}, {
				getName: () => N.fbt._("Beauty and Makeup", null, {
					hk: "4ncOsg"
				}),
				url: "beauty_and_makeup"
			}, {
				getName: () => N.fbt._("Philosophy", null, {
					hk: "MNowu"
				}),
				url: "ethics_and_philosophy"
			}, {
				getName: () => N.fbt._("Food and Drink", null, {
					hk: "19vNV9"
				}),
				url: "food_and_drink"
			}, {
				getName: () => N.fbt._("Religion", null, {
					hk: "4aCX5k"
				}),
				url: "religion"
			}, {
				getName: () => N.fbt._("World News", null, {
					hk: "4lETuR"
				}),
				url: "world_news"
			}, {
				getName: () => N.fbt._("Politics", null, {
					hk: "41ePs3"
				}),
				url: "politics"
			}, {
				getName: () => N.fbt._("Meta", null, {
					hk: "1SKBT1"
				}),
				url: "meta_reddit"
			}, {
				getName: () => N.fbt._("Tabletop RPGs", null, {
					hk: "1zUqUF"
				}),
				url: "tabletop_roleplaying_game"
			}, {
				getName: () => N.fbt._("Marketplace and Deals", null, {
					hk: "1qiYgm"
				}),
				url: "marketplace_and_deals"
			}, {
				getName: () => N.fbt._("Finance and Economics", null, {
					hk: "rZrtS"
				}),
				url: "business_economics_and_finance"
			}, {
				getName: () => N.fbt._("Galaxy Quest", null, {
					hk: "1XkOK1"
				}),
				url: "galaxy_quest"
			}, {
				getName: () => N.fbt._("Math", null, {
					hk: "17VRuh"
				}),
				url: "mathematics"
			}, {
				getName: () => N.fbt._("Crypto", null, {
					hk: "1KATZ1"
				}),
				url: "cryptocurrency"
			}];
			var Pe = a("./src/reddit/components/Widgets/Aggregate/TopicsList/index.m.less"),
				we = a.n(Pe);
			const Te = () => {
					const e = `${Ne.a.assetPath}/img/banner/banner-medium@2x.png`,
						t = N.fbt._("Find Your Next Community!", null, {
							hk: "4tZ6vB"
						}),
						a = {
							backgroundImage: `url(${e})`
						};
					return o.a.createElement("div", {
						className: we.a.banner,
						style: a
					}, o.a.createElement("h2", {
						className: we.a.bannerText
					}, t))
				},
				Me = e => `/t/${e}?activeTab=communities`,
				Le = e => {
					const t = e.topic.getName();
					return o.a.createElement("div", {
						className: we.a.itemContainer
					}, o.a.createElement(Ce.a, {
						to: Me(e.topic.url),
						onClick: () => e.sendEvent(Object(Ae.c)(t))
					}, t))
				};
			var Be = o.a.memo(e => {
					const t = Object(Se.a)();
					Object(i.useEffect)(() => t(Object(Ae.d)()), []);
					const a = Ie.map(e => ({
						value: e,
						sort: Object(je.d)() ? .5 : Math.random()
					})).sort((e, t) => e.sort - t.sort).map(e => e.value).slice(0, 10);
					return o.a.createElement(f.a, {
						className: e.className,
						noGradient: !0,
						styles: e.widget && e.widget.styles,
						widgetKind: e.widget && e.widget.kind
					}, o.a.createElement(Te, null), o.a.createElement("div", {
						className: we.a.container
					}, a.map(e => o.a.createElement(Le, {
						key: e.url,
						topic: e,
						sendEvent: t
					}))))
				}),
				Fe = a("./src/reddit/constants/experiments.ts"),
				Re = a("./src/reddit/constants/subredditLeaderboard.ts"),
				De = a("./src/reddit/models/GoodContent/index.ts"),
				Ze = a("./src/reddit/helpers/chooseVariant/index.ts");

			function Ue(e) {
				return Object(Ze.c)(e, {
					experimentEligibilitySelector: Ze.a,
					experimentName: Fe.C
				})
			}
			var qe = a("./src/reddit/selectors/experiments/utils.ts");
			const Ve = Object(u.a)(e => Object(Ze.c)(e, {
					experimentName: Fe.ae,
					experimentEligibilitySelector: Ze.a
				}), qe.a),
				We = Object(u.a)(Ve, e => e === Fe.be.Enabled);
			var He = a("./src/reddit/selectors/experiments/loggedOutOneFeed.ts"),
				Ge = a("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Ke = a("./src/reddit/selectors/user.ts");
			var ze = a("./src/reddit/selectors/seo/linksModule.ts"),
				Qe = a("./src/reddit/selectors/subreddit.ts"),
				Xe = a("./src/reddit/selectors/subredditLeaderboard.ts");
			a("./src/reddit/components/TopSubredditsWidget/index.tsx"), a("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx");
			var Je = a("./src/reddit/helpers/createBannerProperties/index.ts"),
				Ye = a("./src/reddit/selectors/meta.ts");
			const $e = "c1020",
				et = "videos",
				tt = Object(u.c)({
					isMod: Ke.R,
					isLoggedIn: Ke.P,
					isLoggedOutOneFeed: He.a,
					shouldShowLocalRecommendations: e => !1 !== e.user.prefs.showLocationBasedRecommendations,
					currentUser: Ke.k,
					frontpageLinks: ze.b,
					isOver18: Ke.kb,
					isInBFFSLeaderboardExperiment: function(e) {
						return Ue(e) === Fe.B.RotateEven
					},
					bffsLeaderboardVariant: Ue,
					inRpanTopVideoEntrypointExperiment: Ge.e,
					rankings: e => Object(Qe.P)(e, $e),
					shouldShowTopicsWidget: e => {
						const t = Object(Ge.e)(e),
							a = !!Object(Qe.P)(e, $e);
						return (!t || !a) && function(e) {
							return Object(Ze.c)(e, {
								experimentEligibilitySelector: Ke.Q,
								experimentName: Fe.Ac
							}) === Fe.yd
						}(e)
					},
					isNavbarLikeMwebEnabled: d.a,
					locale: Ye.j,
					isInLeaderboardTakeoverExperiment: We
				}),
				at = e => !(!e.currentUser || !e.currentUser.showRecentPosts),
				st = e => !(e.currentUser && (!e.currentUser || e.currentUser.isGold) || e.isLoggedOutOneFeed),
				nt = e => {
					const {
						bffsLeaderboardVariant: t,
						isInBFFSLeaderboardExperiment: a,
						shouldShowLocalRecommendations: s,
						isInLeaderboardTakeoverExperiment: r
					} = e;
					if (r) {
						const e = [...Re.h];
						return {
							category: e[n()(e.length - 1)],
							categories: e
						}
					}
					let i, o, l, d, u;
					a && t === Fe.B.RotateEven ? (i = Re.u, o = Re.n, l = Re.s, d = Re.a) : (i = Re.t, o = Re.j, l = Re.r, d = []), u = [i, ...d, ...l], s && u.unshift(o);
					const m = u[n()(u.length - 1)];
					u = [], m.id !== i.id && u.push(i), s && m.id !== o.id && u.push(o);
					let p = [...d, ...l];
					return p = p.filter(e => e.id !== m.id), u = [...u, ...c()(p).slice(0, 4 - u.length)], {
						category: m,
						categories: u
					}
				};
			class rt extends o.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = async () => {
						this.setState({
							isMounted: !0
						})
					};
					const {
						category: t,
						categories: a
					} = nt(e);
					!e.rankings && e.inRpanTopVideoEntrypointExperiment && e.fetchTopSubreddits(), this.state = {
						isMounted: !1,
						category: t,
						categories: a
					}
				}
				render() {
					let e = 0;
					const {
						className: t,
						frontpageLinks: a,
						isLoggedIn: s,
						isOver18: n,
						listingName: r,
						shouldShowTopicsWidget: c,
						isNavbarLikeMwebEnabled: i
					} = this.props, {
						category: l,
						categories: d
					} = this.state, u = !i;
					return o.a.createElement(R.a, {
						className: t,
						"data-testid": "frontpage-sidebar"
					}, o.a.createElement(oe.a, {
						categories: d,
						category: l,
						first: 5,
						isOver18: n,
						shouldDisplayDelta: !this.props.isMod && l.id !== Re.l,
						to: l.path
					}), o.a.createElement(F.a, {
						placement: V.c.ABOVE_THE_FOLD,
						listingName: r,
						removeSidebarSpacer: !1,
						position: Je.a.FIRST,
						sizes: V.h,
						placementIndex: e++
					}), st(this.props) && o.a.createElement(O, null), c && o.a.createElement(g.a, null, o.a.createElement(Be, null)), s && o.a.createElement(g.a, null, o.a.createElement(b.a, {
						listingName: r
					})), at(this.props) && o.a.createElement(Oe, null), a && u && o.a.createElement(g.a, null, o.a.createElement(B, {
						links: a
					})), o.a.createElement(D.a, {
						adComponent: o.a.createElement(F.a, {
							placement: V.c.BELOW_THE_FOLD,
							listingName: r,
							position: Je.a.BOTTOM,
							sizes: V.o,
							placementIndex: e++
						})
					}, s && o.a.createElement(ie, null)))
				}
			}
			const ct = Object(l.b)(tt, e => ({
				fetchTopSubreddits: () => {
					const t = {
							categoryId: $e,
							filter: {
								includeUnrated: !1,
								isBlacklistedSubredditsExcluded: !0,
								isNsfwExcluded: !0,
								isDiscoverable: !0,
								maxRating: De.b.PG13
							},
							isOnlyModIncluded: !1
						},
						a = Object(Xe.d)($e, et);
					e(Object(p.b)(t, a))
				},
				subredditAboutRequested: t => e(Object(m.u)(t))
			}));
			t.default = ct(rt)
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!a.m[t]
				},
				importAsync: () => a.e("IdCard").then(a.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return a(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/InAppNotifications/index.m.less": function(e, t, a) {
			e.exports = {
				Container: "_2WKuyZi_LYaEvqStrp0X94",
				container: "_2WKuyZi_LYaEvqStrp0X94",
				onTop: "_2Ennafw4adojlWGjuEwLs3",
				Headline: "_122a4M6W6ce4R-yHdlfl1v",
				headline: "_122a4M6W6ce4R-yHdlfl1v",
				CloseBtn: "_2ZWzBMBsRqQ2lyGedikBYm",
				closeBtn: "_2ZWzBMBsRqQ2lyGedikBYm",
				LeftArrow: "_1mLRzwitcJIxjVHH2-R5fE",
				leftArrow: "_1mLRzwitcJIxjVHH2-R5fE",
				RightArrow: "_3-KX7AmKW_5N3VXrNKg9dz",
				rightArrow: "_3-KX7AmKW_5N3VXrNKg9dz",
				ArrowPlaceholder: "_2Fz7dW7yNaimQuGTEvyTVQ",
				arrowPlaceholder: "_2Fz7dW7yNaimQuGTEvyTVQ",
				LoadingIndicator: "_2gXy3VPcNOlMWvJVrh1tko",
				loadingIndicator: "_2gXy3VPcNOlMWvJVrh1tko",
				gradientAnimation: "_3WE6pgqcWIIRJfBBo2phI_",
				Carousel: "Jt86Bv4VZ-x1S2gm0VvNt",
				carousel: "Jt86Bv4VZ-x1S2gm0VvNt",
				NotificationsWrapper: "_2TMEAhWbobv7KmAjztRzzT",
				notificationsWrapper: "_2TMEAhWbobv7KmAjztRzzT",
				Notification: "_15oC-2A1Vw_E49v8hn6NVM",
				notification: "_15oC-2A1Vw_E49v8hn6NVM",
				NotificationUnit: "_2bZiX3yNKAbdIz03tba5By",
				notificationUnit: "_2bZiX3yNKAbdIz03tba5By",
				isActive: "_1yyZ5KjAyhbGu6IWPdeF6x",
				next: "_2GIvpGy9FXU4uqb5yyOQtQ",
				prev: "_2Tc9JVAlHk_Ys5kE2w8hfb",
				Dots: "Vo17yRMYizbbxDX02dKBs",
				dots: "Vo17yRMYizbbxDX02dKBs",
				Dot: "_2_pQdSZUSAwRNDMCkj_Ya2",
				dot: "_2_pQdSZUSAwRNDMCkj_Ya2",
				isSelected: "_3Gk-SknG5pAXaAGwBTDX38",
				DotsPlaceholder: "_3OTujC3Bwhzg113wwj1-Vv",
				dotsPlaceholder: "_3OTujC3Bwhzg113wwj1-Vv"
			}
		},
		"./src/reddit/components/InAppNotifications/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return b
			}));
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				r = a.n(n),
				c = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/actions/appBadgeIndicators/index.ts"),
				l = a("./src/lib/makeActionCreator/index.ts"),
				d = a("./src/reddit/actions/inAppNotifications/constants.ts");
			const u = Object(l.a)(d.a);
			var m, p = a("./src/reddit/actions/notificationsInbox/index.ts");
			! function(e) {
				e.PREV = "prev", e.NEXT = "next"
			}(m || (m = {}));
			var b, h = a("./src/reddit/components/NotificationUnit/Loader.tsx"),
				g = a("./src/reddit/helpers/trackers/inbox.ts"),
				f = a("./src/reddit/hooks/useTracking.ts"),
				v = a("./src/reddit/icons/fonts/index.tsx"),
				_ = a("./src/reddit/selectors/experiments/inAppNotification.ts"),
				x = a("./src/reddit/selectors/inAppNotifications.ts"),
				E = a("./src/reddit/components/InAppNotifications/index.m.less"),
				y = a.n(E);
			! function(e) {
				e[e.SHORT = 90] = "SHORT", e[e.TALL = 120] = "TALL"
			}(b || (b = {}));
			const k = e => {
				let {
					notifications: t,
					isOnTop: a,
					carouselHeight: c,
					shouldHide: o,
					onClose: l,
					onMarkNotificationAsRead: d
				} = e;
				const [u, p] = Object(n.useState)(0), {
					onCarouselNavigate: b
				} = (e => {
					let {
						activeIndex: t,
						items: a,
						setActiveIndex: s
					} = e;
					return {
						onCarouselNavigate: Object(n.useCallback)(e => () => {
							e === m.NEXT && t + 1 >= a.length ? s(0) : e === m.PREV && t <= 0 ? s(a.length - 1) : s(t + (e === m.NEXT ? 1 : -1))
						}, [t, s, a])
					}
				})({
					activeIndex: u,
					items: t,
					setActiveIndex: p
				}), g = t.length > 1;
				return r.a.createElement("div", {
					className: Object(i.a)(y.a.Container, {
						[y.a.onTop]: a
					})
				}, r.a.createElement("h2", {
					className: y.a.Headline
				}, s.fbt._("New notification", null, {
					hk: "3i7JIj"
				})), a ? r.a.createElement("button", {
					className: y.a.CloseBtn,
					onClick: l
				}, r.a.createElement(v.a, {
					name: "close"
				})) : null, r.a.createElement("div", {
					className: y.a.Carousel
				}, g ? r.a.createElement("button", {
					className: y.a.LeftArrow,
					onClick: b(m.PREV)
				}, r.a.createElement(v.a, {
					name: "caret_left"
				})) : r.a.createElement("div", {
					className: y.a.ArrowPlaceholder
				}), r.a.createElement("div", {
					className: y.a.NotificationsWrapper,
					style: {
						height: c + "px"
					}
				}, t.length ? t.map((e, a) => r.a.createElement("div", {
					key: e.id,
					className: Object(i.a)(y.a.Notification, {
						[y.a.isActive]: a === u,
						[y.a.prev]: g && 0 === u && a + 1 === t.length || a === u - 1,
						[y.a.next]: g && u + 1 === t.length && 0 === a || a === u + 1
					})
				}, r.a.createElement(h.a, {
					isInboxPostEmbedEnabled: !1,
					markNotificationAsRead: d,
					notification: e,
					isInTooltip: !0,
					isInAppNotification: !0,
					className: y.a.NotificationUnit,
					shouldHideActionButton: o
				}))) : r.a.createElement("div", {
					className: y.a.LoadingIndicator
				})), g ? r.a.createElement("button", {
					className: y.a.RightArrow,
					onClick: b(m.NEXT)
				}, r.a.createElement(v.a, {
					name: "caret_right"
				})) : r.a.createElement("div", {
					className: y.a.ArrowPlaceholder
				})), g ? r.a.createElement("div", {
					className: y.a.Dots
				}, t.map((e, t) => r.a.createElement("button", {
					onClick: () => p(t),
					key: `notification-carousel-dot-${t}`,
					className: Object(i.a)(y.a.Dot, {
						[y.a.isSelected]: t === u
					})
				}))) : r.a.createElement("div", {
					className: y.a.DotsPlaceholder
				}))
			};
			t.b = e => {
				let {
					isOnTop: t,
					notifications: a
				} = e;
				const s = Object(c.d)(),
					i = Object(f.a)();
				Object(n.useEffect)(() => {
					i(Object(g.r)())
				}, []);
				const l = Object(c.e)(x.c),
					d = Object(c.e)(_.d),
					m = d && t ? b.TALL : b.SHORT;
				return (null == a ? void 0 : a.length) && !l ? r.a.createElement(k, {
					notifications: a,
					carouselHeight: m,
					onClose: () => {
						s(u())
					},
					onMarkNotificationAsRead: async (e, t) => {
						await s(Object(p.h)(e, t)), s(Object(o.c)())
					},
					isOnTop: t,
					shouldHide: !d
				}) : null
			}
		},
		"./src/reddit/components/InFeedPostCreation/async.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-InFeedPostCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!a.m[t]
				},
				importAsync: () => a.e("reddit-components-InFeedPostCreation").then(a.bind(null, "./src/reddit/components/InFeedPostCreation/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return a(t)
				},
				resolve() {
					return "./src/reddit/components/InFeedPostCreation/index.tsx"
				}
			})
		},
		"./src/reddit/components/LangSite/Banner/index.m.less": function(e, t, a) {
			e.exports = {
				Container: "_YS-SvhE12dC8aytZB1uB",
				container: "_YS-SvhE12dC8aytZB1uB",
				cardview: "_6Jk1o_xF1wf7yypTbxlHL",
				Banner: "_2sikk8sbLXAiXWDNu3phSX",
				banner: "_2sikk8sbLXAiXWDNu3phSX",
				Link: "_2JwxTN6T93e6dSCiRFhyRG",
				link: "_2JwxTN6T93e6dSCiRFhyRG",
				Close: "_2TuZp4AT8IMhU1rUzkZMcd",
				close: "_2TuZp4AT8IMhU1rUzkZMcd"
			}
		},
		"./src/reddit/components/LangSite/Banner/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/reselect/es/index.js"),
				i = a("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				o = a("./src/lib/classNames/index.ts"),
				l = a("./src/lib/lessComponent.tsx"),
				d = a("./src/reddit/components/LangSite/Banner/index.m.less"),
				u = a.n(d),
				m = a("./src/reddit/actions/langSite/index.ts"),
				p = a("./src/reddit/components/TrackingHelper/index.tsx"),
				b = a("./src/reddit/helpers/trackers/banners.ts"),
				h = a("./src/reddit/icons/svgs/Close/index.tsx"),
				g = a("./src/reddit/selectors/experiments/countrySites.ts");
			var f = a("./src/reddit/selectors/meta.ts");
			const {
				fbt: v
			} = a("./node_modules/fbt/lib/FbtPublic.js"), _ = l.a.a("Link", u.a), x = {
				de: {
					href: "/de/",
					link: "reddit.com/de",
					text: v._("Browsing in German? Check out", null, {
						hk: "9HPUp"
					})
				},
				fr: {
					href: "/fr/",
					link: "reddit.com/fr",
					text: v._("Browsing in French? Check out", null, {
						hk: "39JaPp"
					})
				},
				es: {
					href: "/es/",
					link: "reddit.com/es",
					text: v._("Browsing in Spanish? Check out", null, {
						hk: "uo3Uu"
					})
				},
				pt: {
					href: "/pt/",
					link: "reddit.com/pt",
					text: v._("Browsing in Portuguese? Check out", null, {
						hk: "2ySndk"
					})
				},
				it: {
					href: "/it/",
					link: "reddit.com/it",
					text: v._("Browsing in Italian? Check out", null, {
						hk: "2ESH1H"
					})
				}
			};
			var E;
			! function(e) {
				e.Hidden = "hidden", e.Visible = "visible"
			}(E || (E = {}));
			const y = Object(c.c)({
					locale: f.j,
					bannerClosedTime: e => e.langSite.bannerClosedTime,
					isCountrySitesEnabled: g.b,
					isIntSiteBannerEnabled: g.d
				}),
				k = Object(r.b)(y, e => ({
					dispatchBannerClose: () => e(Object(m.b)())
				}));
			t.a = k(Object(p.c)(e => {
				const {
					locale: t,
					isCardView: a,
					isCountrySitesEnabled: c,
					isIntSiteBannerEnabled: l,
					bannerClosedTime: d,
					sendEvent: m
				} = e, p = t.split("-")[0];
				let f = !1;
				d && Date.now() - d < 18e5 && (f = !0);
				const [v, y] = Object(s.useState)(f ? E.Hidden : E.Visible), k = Object(r.f)().getState(), O = Object(g.a)(k, Object(i.c)());
				if (Object(s.useEffect)(() => {
						c && l && O.includes(p) && v === E.Visible && m(Object(b.e)())
					}, [p, v, O, c, l, m]), !c || !l || !O.includes(p) || v === E.Hidden) return null;
				const N = () => {
					m(Object(b.c)())
				};
				return n.a.createElement("div", {
					className: Object(o.a)(u.a.Container, {
						[u.a.cardview]: a
					})
				}, (() => p in x ? n.a.createElement("div", {
					className: u.a.Banner
				}, x[p].text, n.a.createElement(_, {
					href: x[p].href,
					onClick: N
				}, x[p].link)) : null)(), n.a.createElement(h.a, {
					className: u.a.Close,
					onClick: () => {
						m(Object(b.d)()), y(E.Hidden), e.dispatchBannerClose()
					}
				}))
			}))
		},
		"./src/reddit/components/LiveBar/LiveBarCarousel/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1VPBg1KDlCxvI_ox4qYNAo",
				carouselItem: "_2db2h0X30WtmIQfUJFZRnq",
				arrowButton: "_1Y1tCbHhgKQX0l1morixry",
				arrowIcon: "fAx-Jen_Rx-Z5QEC97SE8",
				arrowButtonContainer: "_2xULpa8sDBaxbcitAQLF3q",
				arrowVisible: "_31PBJTrgcyi2l7cdc3ISyR",
				nightMode: "_2FwfQDr77ppDA_MpVyBqJD",
				rightArrowContainer: "_1b6syQYyChTyUYEKuX3uXw",
				leftArrowContainer: "_38s8rbiTlmpyPnK0asvSes",
				inner: "_14oueBHoDbEKHcFTLPQh--"
			}
		},
		"./src/reddit/components/LiveBar/index.m.less": function(e, t, a) {
			e.exports = {
				scroller: "YfUlQeQY0xbmCv-So3isP",
				item: "_9GZxo1SLUa-LvmEn4U5Xa",
				pillContainer: "_1DjAcowLU6nXBLbR9gDIh7",
				nightMode: "_2hhpAarfCk4SysWqfTTPVB",
				subredditIconContainer: "_Aez8ZCi35Fhyg421jEbe",
				speakerRing: "_2T4cG_QbLNTY6gw2NDH0Ro",
				speakerRingInner: "CITpOB809Q0rM2nQxrmPF",
				animatedRing: "_1IFyv3N6Pr6OldMx_QRkCB",
				reverbInner: "_25EvUai27Jvfxa0DW4LuHe",
				speakerRingMiddle: "_2WtP4_bwUGAHvglOmgFPrJ",
				reverbMiddle: "_3lOczla1oLaCy3Q-F3XtCt",
				speakerRingOuter: "_1PsBz0Soufa5JBIkpJBxA8",
				reverbOuter: "_2_wvIA-9YGwy12nUEPvFt5",
				subredditIcon: "_1qAfI1NS84Sv0KV8HS4ZMU",
				isDefaultIcon: "_2jFMhi7ZQhvMkFv1ZFOQXi",
				detailsInnerContainer: "AOLrpHxDhzqO46idwzgfq",
				marqueeTitle: "_1WH02SgcXJJDf_KrjYGIcz",
				roomTitle: "_2ixX--0rHhk0pShklscsT6",
				animated: "j-Yc1VEWsB5Voq7zEEuSD",
				"marquee-when-overflow": "rwUYN4KMlVhxNa4hsdV03",
				marqueeWhenOverflow: "rwUYN4KMlVhxNa4hsdV03",
				titleFadeContainer: "xJw6Td40InqoAgZmaHnJY",
				leftFadeContainer: "_3xZTzwEFJpCB_j2S4ooQcS",
				rightFadeContainer: "_XfMIXjVCs4tWlnE_gz6K",
				participantRow: "_2hvzPK71zlbnEi-OAEaCKk",
				participantCount: "_2HCcacJIOCWDbzI3FV1jf5",
				topUsers: "_1l2KWUpMqW1Om4ZRyuy_kW",
				userIconContainer: "_1Hqugp2Ai93zj2Vv4u-o_d",
				userIcon: "_1cCYzFmQVzNnY_MKRLTzyv",
				userIconSnoovatar: "_1XYJltM0iXOUtQ8WhYY_92"
			}
		},
		"./src/reddit/components/LiveBar/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./src/lib/classNames/index.ts"),
				n = a("./node_modules/react/index.js"),
				r = a.n(n),
				c = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/config.ts");
			var o = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "49",
					height: "49",
					viewBox: "0 0 49 49",
					fill: "none"
				}, r.a.createElement("rect", {
					opacity: "0.8",
					x: "1.93444",
					y: "1.15466",
					width: "46",
					height: "46",
					rx: "23",
					stroke: "url(#paint0_linear_284_569805)",
					strokeWidth: "2"
				}), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
					id: "paint0_linear_284_569805",
					x1: "-4.24542",
					y1: "0.154669",
					x2: "55.6993",
					y2: "1.87207",
					gradientUnits: "userSpaceOnUse"
				}, r.a.createElement("stop", {
					stopColor: "#FF538C"
				}), r.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			};
			var l = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "56",
					height: "56",
					viewBox: "0 0 56 56",
					fill: "none"
				}, r.a.createElement("rect", {
					opacity: "0.5",
					x: "0.934437",
					y: "1.15466",
					width: "54",
					height: "54",
					rx: "27",
					stroke: "url(#paint0_linear_284_569806)"
				}), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
					id: "paint0_linear_284_569806",
					x1: "-5.50082",
					y1: "0.65467",
					x2: "63.1858",
					y2: "2.62253",
					gradientUnits: "userSpaceOnUse"
				}, r.a.createElement("stop", {
					stopColor: "#FF538C"
				}), r.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			};
			var d = e => {
					let {
						className: t
					} = e;
					return r.a.createElement("svg", {
						className: t,
						xmlns: "http://www.w3.org/2000/svg",
						width: "64",
						height: "64",
						viewBox: "0 0 64 64",
						fill: "none"
					}, r.a.createElement("rect", {
						opacity: "0.3",
						x: "0.684437",
						y: "0.904663",
						width: "62.5",
						height: "62.5",
						rx: "31.25",
						stroke: "url(#paint0_linear_284_569807)",
						strokeWidth: "0.5"
					}), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
						id: "paint0_linear_284_569807",
						x1: "-6.36412",
						y1: "0.654671",
						x2: "72.3133",
						y2: "2.90877",
						gradientUnits: "userSpaceOnUse"
					}, r.a.createElement("stop", {
						stopColor: "#FF538C"
					}), r.a.createElement("stop", {
						offset: "0.989583",
						stopColor: "#FFAB39"
					}))))
				},
				u = a("./src/reddit/components/SubredditIcon/index.tsx"),
				m = a("./src/reddit/components/UserIcon/index.tsx"),
				p = a("./src/reddit/helpers/name/index.ts"),
				b = a("./src/reddit/selectors/telemetry.ts"),
				h = a("./src/telemetry/models/Event.ts");
			const g = (e, t, a) => ({
				...b.n(e),
				post: b.I(e, t),
				subreddit: b.ib(e, a)
			});
			var f = a("./src/reddit/hooks/useTracking.ts");
			var v = a("./src/reddit/selectors/user.ts"),
				_ = a("./src/reddit/components/LiveBar/index.m.less"),
				x = a.n(_),
				E = a("./node_modules/fbt/lib/FbtPublic.js"),
				y = a("./src/lib/constants/icons.ts"),
				k = a("./src/reddit/icons/fonts/index.tsx"),
				O = a("./src/reddit/components/LiveBar/LiveBarCarousel/index.m.less"),
				N = a.n(O);
			var j = e => {
				let {
					onScrollToElement: t,
					onChildVisible: a,
					children: i
				} = e;
				const o = Object(n.createRef)(),
					l = Object(c.e)(v.db),
					[d, u] = Object(n.useState)(null),
					[m, p] = Object(n.useState)(null),
					[b, h] = Object(n.useState)(!1),
					[g, f] = Object(n.useState)(!1);
				Object(n.useEffect)(() => {
					const e = o.current;
					if (!e) return;
					const t = () => {
						const t = e.getBoundingClientRect(),
							s = Array.from(e.children).filter(e => {
								const a = e.getBoundingClientRect();
								return a.left >= t.left && a.right <= t.right
							});
						if (s.length > 0) {
							const e = (e => {
								const t = e[e.length - 1].nextElementSibling;
								return t instanceof HTMLElement ? t : null
							})(s);
							p(e), u((e => {
								let t = e[0].previousElementSibling;
								return (null == t ? void 0 : t.previousElementSibling) && (t = t.previousElementSibling), t instanceof HTMLElement ? t : null
							})(s)), s.forEach(e => {
								a(e)
							}), e && a(e)
						}
					};
					return t(), e.addEventListener("scroll", t), () => {
						e.removeEventListener("scroll", t)
					}
				}, [o, a]), Object(n.useEffect)(() => {
					h(Boolean(d)), f(Boolean(m))
				}, [d, m]);
				const _ = Object(n.useCallback)(e => {
						var a;
						const s = o.current;
						if (!s || !e) return;
						let n = 0;
						n = e.offsetLeft + e.getBoundingClientRect().width - s.getBoundingClientRect().width / 2.45, s.scroll({
							left: n,
							behavior: "smooth"
						});
						const r = null === (a = e.id) || void 0 === a ? void 0 : a.split("__")[1];
						r && t(r)
					}, [o, t]),
					x = Object(n.useCallback)(() => _(m), [_, m]),
					O = Object(n.useCallback)(() => _(d), [_, d]);
				return r.a.createElement("div", {
					className: Object(s.a)(N.a.container),
					role: "region",
					"aria-label": "carousel"
				}, r.a.createElement("div", {
					className: Object(s.a)(N.a.inner),
					ref: o
				}, n.Children.map(i, (e, t) => r.a.createElement("div", {
					className: Object(s.a)(N.a.carouselItem),
					id: e.props.id,
					key: t,
					"data-position": t
				}, e))), r.a.createElement("div", {
					className: Object(s.a)(N.a.arrowButtonContainer, N.a.leftArrowContainer, {
						[N.a.nightMode]: l,
						[N.a.arrowVisible]: b
					})
				}, r.a.createElement("button", {
					className: N.a.arrowButton,
					onClick: O,
					"aria-label": E.fbt._("previous items", null, {
						hk: "44uTrz"
					})
				}, r.a.createElement(k.a, {
					className: N.a.arrowIcon,
					name: y.a.caret_left
				}))), r.a.createElement("div", {
					className: Object(s.a)(N.a.arrowButtonContainer, N.a.rightArrowContainer, {
						[N.a.nightMode]: l,
						[N.a.arrowVisible]: g
					})
				}, r.a.createElement("button", {
					className: N.a.arrowButton,
					onClick: x,
					"aria-label": E.fbt._("next items", null, {
						hk: "4EEfgp"
					})
				}, r.a.createElement(k.a, {
					className: N.a.arrowIcon,
					name: y.a.caret_right
				}))))
			};
			const {
				fbt: C
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					talks: t
				} = e;
				var a, _, E;
				const y = Object(n.useRef)(null),
					[k, O] = Object(n.useState)((null === (_ = null === (a = t[0]) || void 0 === a ? void 0 : a.talkRoom) || void 0 === _ ? void 0 : _.isLive) ? null === (E = t[0]) || void 0 === E ? void 0 : E.id : ""),
					[N, A] = Object(n.useState)(!1),
					S = Object(c.e)(v.db),
					I = Object(n.useRef)([]),
					P = Object(f.a)();
				Object(n.useEffect)(() => {
					var e;
					const t = null === (e = y.current) || void 0 === e ? void 0 : e.querySelector(`[data-title-id=${k}]`);
					t && (e => {
						if (e) {
							const t = e.getBoundingClientRect().width;
							A(t > 152);
							const a = t - 152;
							if (a > 0) {
								const t = Math.max(145 * a, 2e3);
								e.style.animationDuration = `${t}ms`
							}
						}
					})(t)
				}, [k]), Object(n.useEffect)(() => {
					P((() => e => ({
						...b.n(e),
						source: "live_bar",
						action: h.d.View,
						noun: "live_bar_banner"
					}))())
				}, [P]), Object(n.useEffect)(() => {
					if (t.length > 0) {
						let e = Boolean(k);
						for (let a = 0; a < t.length && !e; a++) {
							const s = t[a];
							(null == s ? void 0 : s.talkRoom) && s.talkRoom.isLive && !e && (e = !0, O(s.id))
						}
					}
				}, [t, P]);
				const w = t.filter(e => {
					var t;
					return null === (t = null == e ? void 0 : e.talkRoom) || void 0 === t ? void 0 : t.isLive
				}).map((e, t) => {
					var a, n, c, f, v, _, E, y, j;
					const {
						id: A,
						talkRoom: I
					} = e, {
						roomId: w,
						roomTitle: T,
						topUsers: M,
						participantCount: L
					} = I, B = null == M ? void 0 : M.slice(0, 3), F = k === A, R = (null === (n = null === (a = e.subreddit) || void 0 === a ? void 0 : a.styles) || void 0 === n ? void 0 : n.icon) || (null === (v = null === (f = null === (c = e.profile) || void 0 === c ? void 0 : c.styles) || void 0 === f ? void 0 : f.legacyIcon) || void 0 === v ? void 0 : v.url), D = (null === (_ = e.subreddit) || void 0 === _ ? void 0 : _.id) || (null === (E = e.profile) || void 0 === E ? void 0 : E.name), Z = "SubredditPost" === e.__typename ? Object(p.c)(null === (y = e.subreddit) || void 0 === y ? void 0 : y.name) : Object(p.d)(null === (j = e.profile) || void 0 === j ? void 0 : j.redditorInfo.displayName);
					return r.a.createElement("button", {
						id: `talk__${A}`,
						key: `talk__${w}`,
						onClick: () => {
							P((e => {
								let {
									postId: t,
									subredditOrProfileId: a,
									liveBarPosition: s,
									roomId: n,
									roomTitle: r
								} = e;
								return e => ({
									...g(e, t, a),
									source: "live_bar",
									action: h.d.Click,
									noun: "live_bar_item",
									actionInfo: {
										...b.A(e),
										position: s
									},
									liveAudioRoom: {
										id: n,
										title: r
									}
								})
							})({
								liveBarPosition: t,
								postId: A,
								roomId: w,
								roomTitle: null != T ? T : "",
								subredditOrProfileId: D
							})), window.open(`${i.a.redditUrl}/talk/${w}`)
						},
						className: Object(s.a)(x.a.pillContainer, {
							[x.a.nightMode]: S
						}),
						onMouseEnter: () => O(A)
					}, r.a.createElement("div", {
						className: x.a.subredditIconContainer
					}, r.a.createElement(o, {
						className: Object(s.a)(x.a.speakerRing, x.a.speakerRingInner, {
							[x.a.animatedRing]: F
						})
					}), F && r.a.createElement(r.a.Fragment, null, r.a.createElement(l, {
						className: Object(s.a)(x.a.speakerRing, x.a.speakerRingMiddle)
					}), r.a.createElement(d, {
						className: Object(s.a)(x.a.speakerRing, x.a.speakerRingOuter)
					})), r.a.createElement(u.b, {
						className: Object(s.a)(x.a.subredditIcon, {
							[x.a.isDefaultIcon]: "" === R
						}),
						iconUrl: R
					})), r.a.createElement("div", {
						className: Object(s.a)(x.a.detailsInnerContainer)
					}, r.a.createElement("div", {
						className: x.a.marqueeTitle
					}, r.a.createElement("p", {
						"data-title-id": `${A}`,
						className: Object(s.a)(x.a.roomTitle, {
							[x.a.animated]: F && N
						})
					}, T), F && N && r.a.createElement("div", {
						className: Object(s.a)(x.a.titleFadeContainer, x.a.leftFadeContainer, {
							[x.a.nightMode]: S
						})
					}), r.a.createElement("div", {
						className: Object(s.a)(x.a.titleFadeContainer, x.a.rightFadeContainer, {
							[x.a.nightMode]: S
						})
					})), r.a.createElement("div", {
						className: x.a.participantRow
					}, r.a.createElement("div", {
						className: x.a.topUsers
					}, (null != B ? B : []).map((e, t) => {
						var a, n;
						return (e => "Redditor" === (null == e ? void 0 : e.__typename) || !!e.snoovatarIcon)(e) && r.a.createElement("div", {
							key: `topuser__${t}`,
							className: Object(s.a)(x.a.userIconContainer, {
								[x.a.userIconSnoovatar]: Boolean(e.snoovatarIcon)
							})
						}, r.a.createElement(m.a, {
							userName: "",
							iconUrl: (null === (a = e.icon) || void 0 === a ? void 0 : a.url) || "",
							className: Object(s.a)(x.a.userIcon, {
								[x.a.userIconSnoovatar]: Boolean(e.snoovatarIcon),
								[x.a.nightMode]: S
							}),
							isNSFW: (null === (n = e.profile) || void 0 === n ? void 0 : n.isNsfw) || !1
						}))
					})), r.a.createElement("p", {
						className: x.a.participantCount
					}, (null != L ? L : 0) > 0 ? C._("{participantCount} in {subredditName}", [C._param("participantCount", L), C._param("subredditName", Z)], {
						hk: "2pp9CZ"
					}) : C._("{subredditName}", [C._param("subredditName", Z)], {
						hk: "JJOAC"
					})))))
				});
				return w.length > 0 && k ? r.a.createElement("div", {
					className: x.a.outer
				}, r.a.createElement("div", {
					ref: y,
					className: x.a.scroller
				}, r.a.createElement(j, {
					onScrollToElement: e => {
						setTimeout(() => {
							O(e)
						}, 500)
					},
					onChildVisible: e => {
						var a, s, n, r;
						if (!e) return;
						const c = e.id.split("__")[1],
							i = e.getAttribute("data-position"),
							o = t.find(e => (null == e ? void 0 : e.id) === c);
						o && !I.current.includes(c) && i && (P((e => {
							let {
								postId: t,
								subredditOrProfileId: a,
								liveBarPosition: s,
								roomId: n,
								roomTitle: r
							} = e;
							return e => ({
								...g(e, t, a),
								source: "live_bar",
								action: h.d.View,
								noun: "live_bar_item",
								actionInfo: {
									...b.A(e),
									position: s
								},
								liveAudioRoom: {
									id: n,
									title: r
								}
							})
						})({
							postId: o.id,
							subredditOrProfileId: (null === (a = o.subreddit) || void 0 === a ? void 0 : a.id) || (null === (s = o.profile) || void 0 === s ? void 0 : s.name),
							liveBarPosition: parseInt(i),
							roomId: (null === (n = o.talkRoom) || void 0 === n ? void 0 : n.roomId) || "",
							roomTitle: (null === (r = o.talkRoom) || void 0 === r ? void 0 : r.roomTitle) || ""
						})), I.current.push(c))
					}
				}, w))) : null
			}
		},
		"./src/reddit/components/MiniPost/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/MiniPost/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				r = a.n(n),
				c = a("./node_modules/react-redux/es/index.js"),
				i = a("./node_modules/reselect/es/index.js"),
				o = a("./src/lib/classNames/index.ts"),
				l = a("./src/lib/prettyPrintNumber/index.ts"),
				d = a("./src/lib/timeAgo/index.ts"),
				u = a("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = a("./src/reddit/components/Thumbnail/index.tsx"),
				p = a("./src/reddit/helpers/overlay/index.ts"),
				b = a("./src/reddit/selectors/posts.ts"),
				h = a("./src/reddit/selectors/subreddit.ts"),
				g = a("./src/reddit/components/MiniPost/index.m.less"),
				f = a.n(g);
			const v = Object(i.a)(e => e, b.G, b.d, (e, t, a) => {
					return {
						crosspost: a,
						post: t,
						subredditOrProfile: Object(h.M)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				_ = Object(c.b)(v, (e, t) => ({
					openLightbox: t => e(Object(p.a)(t.permalink))
				}));
			class x extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							containerOnClick: e,
							openLightbox: t,
							openLinksNewTab: a,
							post: s
						} = this.props;
						a ? window.open(s.permalink) : t(s), e && e()
					}, this.onClickSubreddit = e => {
						const {
							openLinksNewTab: t,
							subredditOnClick: a,
							subredditOrProfile: s
						} = this.props;
						e.stopPropagation(), t && s && (e.preventDefault(), window.open(s.url)), a && a()
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
						showSubreddit: a = !1,
						subredditOrProfile: n,
						subredditSameLine: c,
						crowdControlPreview: i
					} = this.props;
					return r.a.createElement("div", {
						className: Object(o.a)(f.a.container, e, i ? f.a.crowdControlPreview : null),
						onClick: this.onClickContainer
					}, r.a.createElement("div", {
						className: f.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, r.a.createElement(m.a, {
						post: t
					})), r.a.createElement("div", {
						className: f.a.postDetails
					}, r.a.createElement("p", {
						className: f.a.title,
						title: t.title
					}, t.title), r.a.createElement("div", {
						className: Object(o.a)(f.a.subAndMeta, {
							[f.a.isSingleLine]: c
						})
					}, a && n && n.displayText && r.a.createElement(u.a, {
						className: f.a.SubredditLink,
						to: n.url,
						onClick: this.onClickSubreddit
					}, n.displayText), c && r.a.createElement("div", {
						className: f.a.separator
					}), !i && r.a.createElement("div", null, r.a.createElement("span", {
						className: f.a.meta
					}, s.fbt._({
						"*": "{number} points",
						_1: "1 point"
					}, [s.fbt._plural(t.score, "number", Object(l.b)(t.score))], {
						hk: "1Jm6il"
					})), r.a.createElement("span", {
						className: f.a.meta
					}, s.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [s.fbt._plural(t.numComments, "number", Object(l.b)(t.numComments))], {
						hk: "2jjoyt"
					})), r.a.createElement("span", {
						className: f.a.meta
					}, Object(d.a)(t.created / 1e3, !0))))))
				}
			}
			t.a = _(x)
		},
		"./src/reddit/components/Onboarding/Interests/InterestPicker.m.less": function(e, t, a) {
			e.exports = {
				InterestListButtons: "_3miLvWoAksppOIKDbHmCpH",
				interestListButtons: "_3miLvWoAksppOIKDbHmCpH",
				InterestButton: "_3oCL2oMbe3H81mue3bR1CQ",
				interestButton: "_3oCL2oMbe3H81mue3bR1CQ",
				sharedButtonStyles: "nGPPVLjaF9xHLhEfs0OCV",
				Selected: "_9bvUa3_8YwoacACdyRw_T",
				selected: "_9bvUa3_8YwoacACdyRw_T",
				Placeholder: "_3lj8QAQ0ABoP56baCrm__e",
				placeholder: "_3lj8QAQ0ABoP56baCrm__e",
				Icon: "_3DtgruA-lLYrQl-qbVEgJm",
				icon: "_3DtgruA-lLYrQl-qbVEgJm",
				isLeft: "_1U2p5JzQnPfAZNB3-974OG",
				isRight: "_3szUhYjG4tA4Hqfi9MD1fa",
				headerBarImproved: "_3WIacLhd307x2JsrQHXeSe",
				InterestPickerPreview: "_3mV_F85IUlHJXj6vglN9dL",
				interestPickerPreview: "_3mV_F85IUlHJXj6vglN9dL",
				Dismissed: "_3RAeTThkWAn32hs_GxGw58",
				dismissed: "_3RAeTThkWAn32hs_GxGw58",
				InterestPickerPreviewTopBorder: "_25lW6DMq80IbK6ieXPoFp_",
				interestPickerPreviewTopBorder: "_25lW6DMq80IbK6ieXPoFp_",
				InterestPickerPreviewHeader: "_3153esXkC4o22mmMb4NEwq",
				interestPickerPreviewHeader: "_3153esXkC4o22mmMb4NEwq",
				InterestListItem: "OuNwEANldIlJWdGdhx4Ah",
				interestListItem: "OuNwEANldIlJWdGdhx4Ah",
				Title: "_3rvplkPXZC8aONpCwbcmBN",
				title: "_3rvplkPXZC8aONpCwbcmBN",
				ChooseMore: "_3_KngAlh-KmD6kGmN3AnAs",
				chooseMore: "_3_KngAlh-KmD6kGmN3AnAs",
				CaretRight: "_1LQqSQrTWMFaG2ofR18jvF",
				caretRight: "_1LQqSQrTWMFaG2ofR18jvF",
				DismissButton: "_1g-0M7zTPIr2nIPPr-AHJh",
				dismissButton: "_1g-0M7zTPIr2nIPPr-AHJh"
			}
		},
		"./src/reddit/components/Onboarding/Interests/InterestPickerPreview.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return k
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./node_modules/react-redux/es/index.js"),
				c = a("./src/reddit/actions/login.ts"),
				i = a("./src/reddit/components/Onboarding/Interests/InterestPill.tsx"),
				o = a("./src/reddit/components/Scroller/ScrollChild.ts"),
				l = a("./src/reddit/components/TrackingHelper/index.tsx"),
				d = a("./src/reddit/constants/experiments.ts"),
				u = a("./src/reddit/helpers/counters/onboarding.ts"),
				m = a("./src/reddit/helpers/onboarding/reonboarding.ts"),
				p = a("./src/reddit/helpers/trackers/onboarding.ts"),
				b = a("./src/reddit/icons/fonts/index.tsx"),
				h = a("./src/reddit/layout/row/InlineButton/index.tsx"),
				g = a("./src/reddit/models/Onboarding/index.ts"),
				f = a("./src/reddit/selectors/experiments/onboarding.ts"),
				v = a("./src/lib/classNames/index.ts"),
				_ = a("./src/reddit/components/Onboarding/Interests/InterestPicker.m.less"),
				x = a.n(_);
			const {
				fbt: E
			} = a("./node_modules/fbt/lib/FbtPublic.js"), y = e => {
				let {
					interests: t
				} = e;
				const a = Object(r.d)(),
					o = Object(l.b)(),
					_ = Object(r.e)(f.c),
					y = _ === d.ub.Feed ? t.topics.slice(0, 5) : t.topics,
					[k, O] = Object(s.useState)(!1),
					[N, j] = Object(s.useState)(),
					C = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
						e ? (j(e), o(Object(p.z)(null == e ? void 0 : e.topic, null == e ? void 0 : e.id))) : o(Object(p.x)()), a(Object(c.openD2xOnboardingModal)({
							type: g.d.REONBOARDING,
							selectedInterests: e ? {
								[e.id]: []
							} : {}
						})), Object(u.b)(g.f.Popover, _)
					},
					A = Object(s.useCallback)(() => {
						Object(m.a)(), o(Object(p.y)()), O(!0)
					}, [o]);
				return Object(m.b)() ? n.a.createElement("div", {
					className: Object(v.a)(x.a.InterestPickerPreview, {
						[x.a.Dismissed]: k
					})
				}, n.a.createElement("div", {
					className: x.a.InterestPickerPreviewTopBorder
				}), n.a.createElement("div", {
					className: x.a.InterestPickerPreviewHeader
				}, n.a.createElement("h3", {
					className: x.a.Title
				}, E._("What do you want to see more of?", null, {
					hk: "35GlAb"
				})), n.a.createElement("button", {
					"aria-label": E._("Dismiss", null, {
						hk: "2x5qvs"
					}),
					onClick: A
				}, n.a.createElement(b.a, {
					name: "close",
					className: x.a.DismissButton
				}))), n.a.createElement("ul", {
					className: x.a.InterestListButtons
				}, y.map((e, t) => {
					const a = e.topic;
					return n.a.createElement("li", {
						className: x.a.InterestListItem,
						key: e.id
					}, n.a.createElement(i.a, {
						colorIndex: t,
						isSelected: e === N,
						onClickHandler: () => C(e),
						topic: a
					}))
				})), n.a.createElement(h.a, {
					className: x.a.ChooseMore,
					onClick: () => C()
				}, E._("Choose more topics", null, {
					hk: "2bFeJ4"
				}), n.a.createElement(b.a, {
					className: x.a.CaretRight,
					name: "caret_right"
				}))) : null
			}, k = e => {
				let {
					children: t,
					desiredIdx: a,
					interests: s,
					sendEvent: r,
					variant: c
				} = e;
				return {
					child: {
						id: "interest-topic-recommendations",
						estHeight: 300,
						trackOnEnteredViewport: () => {
							Object(m.d)(), Object(u.b)(g.f.Feed, c), r(Object(p.A)())
						},
						render: () => n.a.createElement(y, {
							interests: s
						})
					},
					idx: Object(o.a)(a, t)
				}
			}
		},
		"./src/reddit/components/Onboarding/Interests/InterestPill.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./src/reddit/controls/Button/index.tsx"),
				c = a("./src/lib/classNames/index.ts"),
				i = a("./node_modules/polished/dist/polished.es.js"),
				o = a("./src/reddit/components/Onboarding/Interests/InterestPicker.m.less"),
				l = a.n(o);
			const d = (e, t, a) => {
					if (!t && !a) return {};
					let s = u(e);
					return a && !t && (s = Object(i.f)(s, .25)), {
						backgroundColor: s
					}
				},
				u = e => m[e % 7],
				m = ["#c08d41", "#ffa800", "#ff4500", "#ff3881", "#b44ac0", "#6a5cff", "#3690ea"];
			t.a = e => {
				let {
					colorIndex: t = 0,
					isSelected: a = !1,
					isSubtopic: s = !1,
					onClickHandler: i,
					topic: o
				} = e;
				return n.a.createElement(r.t, {
					className: Object(c.a)(l.a.InterestButton, {
						[l.a.Selected]: a
					}),
					kind: r.b.Button,
					onClick: i,
					style: d(t, a, s)
				}, o)
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, a) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./src/lib/classNames/index.ts"),
				c = a("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = a("./src/reddit/helpers/styles/mixins/index.tsx"),
				o = a("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				l = a.n(o);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(c.a)(e => {
				const {
					children: t,
					className: a,
					flairStyleTemplate: s,
					onClick: c,
					post: o,
					redditStyle: u,
					theme: m,
					...p
				} = e;
				return n.a.createElement("div", d({
					className: Object(r.a)(l.a.backgroundWrapper, a),
					style: Object(i.c)(s, e),
					onClick: c
				}, p), t)
			})
		},
		"./src/reddit/components/PremiumCTA/index.m.less": function(e, t, a) {
			e.exports = {
				wrapper: "_1b1Jalg2nxA_Z-BjKXRfAV",
				contentWrapper: "_1ms8iFlWXJNWcT29GKsv69",
				icon: "_3-m5rOa3loUClNwpCv1uWU",
				content: "_1LofvgShcWAGgRJOa2IRlf",
				title: "_17PUokUAvL3YJx6EyPdD9d",
				description: "rn1KP8t9htFxyeAF8fdJ4"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return N
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./src/lib/LRUCache/index.ts"),
				c = a("./src/higherOrderComponents/makeAsync.tsx"),
				i = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				l = a("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				d = a("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				u = a("./src/reddit/constants/postLayout.ts"),
				m = a("./src/reddit/helpers/styles/mixins/index.m.less"),
				p = a.n(m),
				b = a("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				h = a.n(b);
			const {
				fbt: g
			} = a("./node_modules/fbt/lib/FbtPublic.js"), f = e => {
				let {
					className: t
				} = e;
				return n.a.createElement("div", {
					className: Object(i.a)(t, h.a.container, h.a.placeholder, h.a.large, p.a.largeAndMediumPostStyles)
				}, n.a.createElement(d.a, {
					className: h.a.backgroundWrapper
				}, n.a.createElement("div", {
					className: h.a.titleAndDescriptionContainer
				}, n.a.createElement("h3", {
					className: h.a.title
				}, g._("Top livestream", null, {
					hk: "4od1tZ"
				}))), n.a.createElement("div", {
					className: h.a.body
				}, n.a.createElement("div", {
					className: h.a.previewContainer
				}, n.a.createElement("div", {
					className: Object(i.a)(h.a.thumbnail, h.a.loading)
				})))))
			};
			var v = e => {
				let {
					className: t,
					layout: a
				} = e;
				return a === u.g.Classic ? n.a.createElement(o.b, {
					className: Object(i.a)(t, h.a.classicPostPlaceholder),
					isLoading: !0
				}) : a === u.g.Compact ? n.a.createElement(l.a, {
					className: Object(i.a)(t, h.a.compactPostPlaceholder),
					isLoading: !0
				}) : n.a.createElement(f, {
					className: t
				})
			};
			const _ = Object(c.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t,
						layout: a
					} = e;
					return n.a.createElement(v, {
						className: t,
						layout: a
					})
				},
				getComponent: () => Promise.all([a.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), a.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), a.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), a.e("RpanListingUnit")]).then(a.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var x = e => n.a.createElement(_, e),
				E = a("./src/reddit/components/Scroller/ScrollChild.ts"),
				y = a("./src/reddit/helpers/trackers/rpan.ts");
			const k = e => e === u.g.Classic ? 84 : e === u.g.Compact ? 42 : 340,
				O = new r.a(20),
				N = e => {
					const t = `rpan-${e.layout}-${e.listingKey}`,
						a = O.get(t);
					if (a) return a;
					const s = Object(E.a)(e.desiredIndex, e.children),
						r = {
							child: {
								id: t,
								estHeight: k(e.layout),
								trackOnEnteredViewport: () => e.sendEvent(Object(y.H)()),
								render: t => {
									let {
										className: a
									} = t;
									return n.a.createElement(x, {
										className: a,
										layout: e.layout,
										listingName: e.listingName
									})
								}
							},
							idx: s
						};
					return O.set(t, r), r
				}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/SEOSidebarLinks/index.m.less": function(e, t, a) {
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
				bodyFontH6Small: "_2uzxWjIkraNLW3Wk4Hg-LD",
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
		"./src/reddit/components/Scroller/ScrollChild.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			const s = (e, t) => {
				const a = new Set(Object.keys(t).map(e => parseInt(e, 10)));
				for (; a.has(e);) e++;
				return e
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less": function(e, t, a) {
			e.exports = {
				header: "_3ioMyxiI-wWgZFqBDVBh6r"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./src/lib/lessComponent.tsx"),
				n = a("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less"),
				r = a.n(n);
			t.a = s.a.div("header", r.a)
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1Pcih1cgtQusjyfxp7YPbP",
				"m-card": "Ab_CG1GZxb0mjtooTcgRC",
				mCard: "Ab_CG1GZxb0mjtooTcgRC",
				layout: "_2kSyv4gtHy2zfKKHU-4g7F",
				layoutBody: "_2OOX0Ul2XYOdHT0ojyBOUD",
				layoutHeader: "lUMtC2iyxpeA0-GrN-P2x"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return l
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				i = a("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				o = a.n(i);

			function l(e) {
				const {
					className: t,
					id: a,
					layoutBodyClassName: s,
					showCardView: i
				} = e, l = {
					[o.a["m-card"]]: i
				};
				return n.a.createElement("div", {
					id: a,
					className: Object(r.a)(o.a.container, l, t)
				}, n.a.createElement(c.a, {
					className: o.a.layout,
					bodyClassName: Object(r.a)(o.a.layoutBody, l, s),
					header: e.header,
					headerClassName: Object(r.a)(o.a.layoutHeader, l)
				}, e.children))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				i = a("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				o = a("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = a("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				d = a.n(l);
			const {
				fbt: u
			} = a("./node_modules/fbt/lib/FbtPublic.js"), m = () => n.a.createElement(c.a, {
				className: d.a.duHeader
			}, u._("Trending today", null, {
				hk: "3rOxuO"
			})), p = Object(o.a)({
				isLoading: !0
			});
			t.a = e => n.a.createElement(i.a, {
				className: e.className,
				header: m(),
				layoutBodyClassName: d.a.layoutBody,
				showCardView: e.showCardView
			}, Array.from({
				length: e.numberOfItems || 6
			}).map((e, t) => n.a.createElement("div", {
				className: d.a.post,
				key: `placeholder-post-${t}`
			}, n.a.createElement("div", {
				className: Object(r.a)(d.a.desc, d.a.one, p)
			}), n.a.createElement("div", {
				className: Object(r.a)(d.a.desc, d.a.two, p)
			}), n.a.createElement("div", {
				className: Object(r.a)(d.a.icon, p)
			}), n.a.createElement("div", {
				className: Object(r.a)(d.a.name, p)
			}))))
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, a) {
			e.exports = {
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = a("./node_modules/lodash/random.js"),
				r = a.n(n),
				c = a("./node_modules/react/index.js"),
				i = a.n(c),
				o = a("./node_modules/react-redux/es/index.js"),
				l = a("./node_modules/reselect/es/index.js"),
				d = a("./src/config.ts"),
				u = a("./src/reddit/components/FakeBannerAd/index.tsx"),
				m = a("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = a("./src/reddit/components/TrackingHelper/index.tsx"),
				b = a("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = a("./src/reddit/helpers/adCount/index.ts"),
				g = a("./src/reddit/helpers/trackers/ads.ts"),
				f = a("./src/reddit/models/Media/index.ts"),
				v = a("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				_ = a.n(v),
				x = a("./src/lib/lessComponent.tsx");
			const E = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!a.m[t]
					},
					importAsync: () => Promise.all([a.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), a.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), a.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), a.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), a.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), a.e("PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24"), a.e("reddit-components-SidebarNativeAd")]).then(a.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return a(t)
					},
					resolve() {
						return "./src/reddit/components/SidebarNativeAd/index.tsx"
					}
				}),
				y = Object(l.c)({
					post: (e, t) => {
						const {
							placement: a,
							placementIndex: s
						} = t, n = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(h.a)(a, n, s)]
					}
				}),
				k = Object(o.b)(y),
				O = x.a.wrapped(b.a, "ThemedWidget", _.a),
				N = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(f.F)(e.media) && e.media.content)),
				j = [{
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}],
				C = Object(p.c)(class extends i.a.Component {
					shouldComponentUpdate(e) {
						const {
							className: t,
							redditStyle: a
						} = this.props;
						return t !== e.className || a !== e.redditStyle
					}
					trackViewability(e, t, a) {
						Math.random() <= d.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(g.b)(e, t, a))
					}
					render() {
						const e = r()(0, j.length - 1),
							{
								img: t,
								href: a
							} = j[e],
							{
								className: s,
								placement: n,
								redditStyle: c
							} = this.props;
						return i.a.createElement(O, {
							className: s,
							contentOnly: !0,
							redditStyle: c
						}, i.a.createElement(u.a, {
							img: t,
							href: a,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, n)
						}))
					}
				});

			function A(e) {
				let {
					className: t,
					post: a,
					placementIndex: s,
					refreshKey: n,
					listingName: r,
					placement: c,
					redditStyle: o,
					awaitingBrandSafetyCheck: l,
					forceHouseAd: d,
					removeSidebarSpacer: u
				} = e;
				const p = u ? i.a.Fragment : m.a;
				if (!l && N(a)) {
					let e = null;
					return d ? e = i.a.createElement(C, {
						className: t,
						redditStyle: o,
						placement: c
					}) : a && (e = i.a.createElement(E, {
						post: a,
						postId: a.id,
						refreshKey: n,
						listingName: r,
						placement: c,
						placementIndex: s
					})), i.a.createElement(p, null, e)
				}
				return null
			}
			t.a = k(A)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./node_modules/react-redux/es/index.js"),
				c = a("./src/reddit/contexts/PageLayer/index.tsx"),
				i = a("./src/reddit/selectors/brandSafety.ts"),
				o = a("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				l = a("./src/reddit/selectors/user.ts"),
				d = a("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(c.u)();
			t.a = m(Object(r.b)((e, t) => {
				let {
					listingName: a,
					pageLayer: s
				} = t;
				const n = Object(i.b)(e, {
						listingName: a,
						pageLayer: s
					}),
					r = Object(l.E)(e) || Object(o.a)(e),
					c = Object(i.e)(e);
				return {
					canShowAd: n && !r,
					awaitingBrandSafetyCheck: !Object(i.c)(e),
					isAdsDisabled: r,
					viewIsUnsafe: c
				}
			})(e => {
				let {
					canShowAd: t,
					isAdsDisabled: a,
					viewIsUnsafe: s,
					pageLayer: r,
					...c
				} = e;
				return !a && t && r ? n.a.createElement(d.a, u({
					forceHouseAd: s
				}, c)) : null
			}))
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, a) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./src/reddit/components/SidebarSpacer/index.m.less"),
				n = a.n(s),
				r = a("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", n.a)
		},
		"./src/reddit/components/SubredditAdoptionWidget/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_32gg9k8mE7XAO33Q0lKRlU",
				main: "_39QHoSGxWS9OKtoNU9jEE_",
				title: "_27oRfx5g78dJfAJl_8Npk3",
				icon: "_2t2xQcM_0PlqIR0rm5VRfJ",
				description: "_2HAYUIdDUchBheTwqmKIcq",
				button: "_3GA-tK1xBiDrxLJRZR3IIB"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, a) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./src/reddit/components/TrackingHelper/index.tsx"),
				c = a("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = a("./src/reddit/controls/Button/index.tsx"),
				o = a("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				l = a("./src/reddit/components/SubscribeButton/Inline.m.less"),
				d = a.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = a("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", d.a);
			class p extends n.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.renderUnsubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: a,
							onUnsubscribe: s,
							postId: r,
							sendEvent: c,
							size: l,
							userIsSubscriber: d,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							...h
						} = this.props, g = this.state.isHovered, f = Object(o.a)({
							type: t.type,
							key: g ? "unsubscribe" : "subscribed"
						});
						return n.a.createElement(i.t, u({
							className: e,
							priority: h.shouldReverseColor ? i.c.Primary : i.c.Secondary,
							text: f,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: i.d.XSP
						}, h))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: a,
							onUnsubscribe: s,
							postId: r,
							sendEvent: c,
							size: l,
							userIsSubscriber: d,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							toggleEmailVerificationTooltip: h,
							emailEnablementJoinFollowVoteVariant: g,
							...f
						} = this.props, v = Object(o.a)({
							type: t.type,
							key: "subscribe"
						});
						return n.a.createElement(i.t, u({
							className: e,
							priority: f.shouldReverseColor ? i.c.Secondary : i.c.Primary,
							size: i.d.XSP,
							text: v,
							onClick: this.onClick
						}, f, {
							id: `subscribe-button-${r}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}))
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: a
					} = this.props;
					return t ? this.state.hasJustSubscribed || a ? this.renderUnsubscribeButton() : e ? null : n.a.createElement(m, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(c.a)(Object(r.c)(p))
		},
		"./src/reddit/components/TabBadger/Loader.ts": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-TabBadger-Component",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!a.m[t]
				},
				importAsync: () => a.e("reddit-components-TabBadger-Component").then(a.bind(null, "./src/reddit/components/TabBadger/Component.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return a(t)
				},
				resolve() {
					return "./src/reddit/components/TabBadger/Component.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = n
		},
		"./src/reddit/components/TabBadger/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/reselect/es/index.js"),
				i = a("./src/reddit/components/TabBadger/Loader.ts"),
				o = a("./src/reddit/components/TrackingHelper/index.tsx"),
				l = a("./src/reddit/selectors/platform.ts"),
				d = a("./src/reddit/selectors/posts.ts");
			const u = Object(c.c)({
					postCount: d.M,
					previousPageIsOverlay: l.p,
					tabBadged: e => e.tabBadged
				}),
				m = Object(r.b)(u);
			t.a = m(Object(o.c)(e => 0 === e.postCount ? null : n.a.createElement(i.a, {
				handlePillClick: e.handlePillClick,
				previousPageIsOverlay: e.previousPageIsOverlay,
				sendEvent: e.sendEvent,
				shortTimer: e.shortTimer,
				subredditName: e.subredditName,
				subscriberCount: e.subscriberCount,
				tabBadged: e.tabBadged
			})))
		},
		"./src/reddit/components/TopSubredditsWidget/Container.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/reselect/es/index.js"),
				i = a("./src/reddit/actions/subreddit/topSubreddits.ts"),
				o = a("./src/reddit/components/TopSubredditsWidget/index.tsx"),
				l = a("./src/reddit/components/TrackingHelper/index.tsx"),
				d = a("./src/reddit/constants/subredditLeaderboard.ts"),
				u = a("./src/reddit/contexts/ApiContext.tsx"),
				m = a("./src/reddit/endpoints/subreddit/local.ts"),
				p = a("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				b = a("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts"),
				h = a("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				g = a("./src/reddit/models/GoodContent/index.ts"),
				f = a("./src/reddit/selectors/platform.ts");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = Object(c.c)({
					isOnLeaderboardPage: e => !!Object(f.h)(e),
					isOnFrontpage: e => !!Object(f.g)(e)
				}),
				x = Object(r.b)(_, e => ({
					updateSubredditModels: t => e(Object(i.a)({
						subreddits: t
					}))
				})),
				E = async (e, t) => {
					const a = await Object(p.a)(e, t);
					if (a && a.ok) {
						const e = a.body,
							t = e && e.data && e.data.subredditLeaderboard;
						return Object(b.c)(t)
					}
				};
			class y extends n.a.Component {
				constructor(e) {
					super(e), this.sendEventClick = (e, t, a, s) => {
						this.props.sendEvent(Object(h.c)(e, t, a, s)), this.props.onSendEventClick && this.props.onSendEventClick(e, t, a, s)
					}, this.state = {}
				}
				componentDidMount() {
					this.fetchTopSubreddits()
				}
				componentDidUpdate(e) {
					const t = e.category && e.category.id,
						a = this.props && this.props.category && this.props.category.id,
						s = this.props.category && this.props.category.name;
					t !== a && s && !this.state[s] && this.fetchTopSubreddits()
				}
				async fetchTopSubreddits() {
					const {
						category: e,
						first: t
					} = this.props, a = e && e.id;
					if (a === d.l) {
						const e = await Object(m.b)(this.props.gqlContext(), {
							first: t
						});
						if (!e) return;
						const {
							rankings: a,
							subreddits: s
						} = e;
						return this.props.updateSubredditModels(s), void this.setState(e => ({
							...e,
							[d.m]: {
								rankings: a,
								subreddits: s
							}
						}))
					}(a || a === d.f) && E(this.props.gqlContext(), {
						categoryId: a,
						filter: g.a,
						first: t
					}).then(e => {
						const t = e && e.rankings,
							a = e && e.subreddits;
						a && this.props.updateSubredditModels(a);
						const s = this.props.category && this.props.category.name || d.c;
						t && a && this.setState(e => ({
							...e,
							[s]: {
								rankings: t,
								subreddits: a
							}
						}))
					}).catch(e => console.error("Error >>>", e))
				}
				render() {
					const {
						category: e
					} = this.props, t = e && e.name, a = e && e.displayText, s = t || d.c, r = this.state[s], c = r ? r.rankings : [], i = r ? r.subreddits : {}, l = c && c[0] && c[0].id, u = i && i[l], m = !(u && u.isNSFW) || this.props.isOver18;
					return n.a.createElement(o.b, v({
						categoryName: t,
						categoryDisplayText: a,
						onSendEventClick: this.sendEventClick,
						rankings: c,
						shouldDisplayBannerImg: m,
						shouldDisplayDelta: this.props.shouldDisplayDelta,
						subreddits: i
					}, this.props))
				}
			}
			t.a = x(Object(u.b)(Object(l.c)(y)))
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return _
			}));
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				r = a.n(n),
				c = a("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = a("./src/lib/classNames/index.ts"),
				o = a("./src/lib/prettyPrintNumber/index.ts"),
				l = a("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				d = a("./src/reddit/components/SubredditIcon/index.tsx"),
				u = a("./src/reddit/components/SubscribeButton/Inline.tsx"),
				m = a("./src/reddit/constants/posts.ts"),
				p = a("./src/reddit/controls/Button/index.tsx"),
				b = a("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				h = a("./src/reddit/icons/fonts/index.tsx"),
				g = a("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				f = a.n(g);
			const v = e => r.a.createElement(r.a.Fragment, null, r.a.createElement(d.b, {
					className: f.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), r.a.createElement("span", {
					className: Object(i.a)(f.a.subredditDetailsContainer, {
						[f.a.handleOverflow]: e.shouldShowJoinButton
					})
				}, e.large ? r.a.createElement(l.a, {
					subredditName: e.subreddit.name
				}, r.a.createElement("span", {
					className: f.a.regularText
				}, e.subreddit.displayText)) : r.a.createElement("span", {
					className: f.a.regularText
				}, e.subreddit.displayText), null === e.rank && r.a.createElement("span", {
					className: f.a.smallText
				}, s.fbt._("This community hasn't been ranked yet.", null, {
					hk: "4CmlZJ"
				})))),
				_ = e => {
					const t = Object(i.a)(f.a.subredditRankItem, e.large && f.a.large, {
							[f.a.handleOverflow]: e.isOnFrontpage
						}),
						a = e.delta && e.delta > 0,
						s = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(o.b)(e);
							if (t.length > 3) {
								return `${t.split(".")[0]}k`
							}
							return t
						})(e.rank + 1),
						n = e.delta ? a ? "#46D160" : "#EA0027" : "transparent",
						l = e.isOnLeaderboardPage && e.large;
					return r.a.createElement("li", {
						className: Object(i.a)(f.a.listItem, {
							[f.a.handleOverflow]: e.isOnFrontpage
						}),
						key: `${e.subreddit.displayText}-${e.large}`
					}, r.a.createElement(c.a, {
						className: t,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, r.a.createElement("div", {
						className: Object(i.a)(f.a.subredditRankItemColumn, {
							[f.a.handleOverflow]: e.isOnFrontpage
						})
					}, !e.hasTagline && r.a.createElement("span", {
						className: f.a.rankText
					}, s), !e.hasTagline && r.a.createElement(h.a, {
						className: f.a.arrow,
						name: a ? "caret_up" : "caret_down",
						isFilled: !0,
						style: {
							color: n
						}
					}), r.a.createElement(v, {
						large: e.large,
						rank: e.rank,
						subreddit: e.subreddit,
						shouldShowJoinButton: (l || e.isOnFrontpage) && !e.subreddit.isSubscribed && !e.large
					})), e.shouldDisplayDelta && r.a.createElement("span", {
						className: f.a.regularText
					}, e.delta ? Object(o.b)(Math.abs(e.delta)) : 0)), (l || e.isOnFrontpage) && r.a.createElement("div", {
						className: Object(i.a)(e.large ? f.a.LeaderboardSubscribeButton : f.a.WidgetSubscribeButton, {
							[f.a.noDelta]: !e.shouldDisplayDelta
						})
					}, r.a.createElement(u.a, {
						getEventFactory: t => e.large ? Object(b.g)(e.subreddit.name, t) : Object(b.d)(e.subreddit.name, t),
						identifier: {
							name: e.subreddit.name,
							type: m.a.SUBREDDIT
						},
						size: p.d.XSP
					})))
				}
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				i = a.n(c);
			const o = e => n.a.createElement("div", {
				className: Object(r.a)(i.a.placeholderWrapper, e.fullWidth && i.a.fullWidth, e.large && i.a.large)
			}, n.a.createElement("span", {
				className: i.a.subredditIconLoading
			}), n.a.createElement("span", {
				className: i.a.subredditNameLoading
			}))
		},
		"./src/reddit/components/TopSubredditsWidget/index.m.less": function(e, t, a) {
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
				handleOverflow: "_1mEfDz-ZrTiw9KxnSpAXBy",
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
				subredditNameLoading: "_YedzkdLjjcYoXUE26Cyb",
				fullWidth: "_1MG43W0qN1RYkFlwxoV_tQ",
				LeaderboardSubscribeButton: "_3wMZok1UIz3pr0AAF2ZOTy",
				leaderboardSubscribeButton: "_3wMZok1UIz3pr0AAF2ZOTy",
				noDelta: "-i9ZUMkweo4ZSITdQHUmw",
				WidgetSubscribeButton: "yPMIo9D78wpfNZYMbQXM8",
				widgetSubscribeButton: "yPMIo9D78wpfNZYMbQXM8"
			}
		},
		"./src/reddit/components/TopSubredditsWidget/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return O
			}));
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/lodash/first.js"),
				r = a.n(n),
				c = a("./node_modules/lodash/times.js"),
				i = a.n(c),
				o = a("./node_modules/react/index.js"),
				l = a.n(o),
				d = a("./node_modules/react-router-dom/esm/react-router-dom.js"),
				u = a("./src/config.ts"),
				m = a("./src/lib/classNames/index.ts"),
				p = a("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				b = a("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				h = a("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				g = a("./src/reddit/constants/subredditLeaderboard.ts"),
				f = a("./src/reddit/controls/Button/index.tsx"),
				v = a("./src/reddit/controls/Chip/index.tsx"),
				_ = a("./src/reddit/helpers/name/index.ts"),
				x = a("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				E = a("./src/reddit/hooks/useTracking.ts"),
				y = a("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				k = a.n(y);
			const O = e => {
					const t = !(!e.rankings || !e.rankings.length),
						a = !t && k.a.communityBannerPlaceholder,
						n = e.bannerBackgroundImage && e.shouldDisplayBannerImg ? {
							backgroundImage: `url(${e.bannerBackgroundImage})`
						} : void 0,
						r = e.categoryName === g.m && g.j.path ? g.j.path : g.g;
					return l.a.createElement("div", {
						className: Object(m.a)(e.className, k.a.communityBanner, a),
						style: n
					}, t && l.a.createElement("h2", {
						className: k.a.communityBannerText
					}, l.a.createElement(d.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || g.e),
						to: r
					}, e.categoryName ? ((e, t) => e === g.m ? s.fbt._("Communities Near You", null, {
						hk: "ZMVOK"
					}) : s.fbt._("Top {categoryName} Communities", [s.fbt._param("categoryName", l.a.createElement("span", {
						className: k.a.categoryName
					}, " ", t || e, " "))], {
						hk: "X3A9z"
					}))(e.categoryName, e.categoryDisplayText) : s.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					}))))
				},
				N = e => {
					const {
						category: t
					} = e, {
						gradients: a
					} = t, n = !!(!e.rankings || !e.rankings.length) && k.a.communityBannerPlaceholder, r = a && Array.isArray(a) && 2 === a.length ? {
						background: `linear-gradient(246.35deg, ${a[0]} 0%, ${a[1]} 100%)`
					} : void 0, c = t.path ? t.path : g.g, i = t.image ? `${t.image}.png` : "magnifying-glass-snoo.png";
					return l.a.createElement("div", {
						className: Object(m.a)(e.className, k.a.taglineBanner, n)
					}, l.a.createElement("div", {
						className: k.a.taglineBannerBackground,
						style: r
					}, l.a.createElement(d.a, {
						onMouseDown: () => e.onSendEventClick("banner", t.name || g.e),
						to: c
					}, l.a.createElement("h2", {
						className: k.a.taglineBannerText
					}, l.a.createElement("img", {
						className: k.a.taglineBannerImage,
						src: `${u.a.assetPath}/img/discovery/${i}`
					}), t.tagline ? (e => l.a.createElement("span", {
						className: k.a.categoryName
					}, s.fbt._("{tagline}", [s.fbt._param("tagline", e)], {
						hk: "3QDJDU"
					})))(t.tagline) : s.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					})))))
				},
				j = e => l.a.createElement("ol", null, e.rankings && e.rankings.map((t, a) => {
					const s = e.subreddits[t.id];
					return l.a.createElement(p.a, {
						delta: t.rankDelta,
						hasTagline: e.hasTagline,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || g.e, s.name),
						rank: a,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: s,
						isOnLeaderboardPage: e.isOnLeaderboardPage,
						isOnFrontpage: e.isOnFrontpage
					})
				}), !e.rankings.length && C),
				C = l.a.createElement(l.a.Fragment, null, i()(5, e => l.a.createElement(b.a, {
					key: e
				}))),
				A = e => {
					const t = e.isSecondaryButton ? f.q : f.n,
						a = e.linkColor ? {
							backgroundColor: e.linkColor,
							color: "white"
						} : void 0,
						n = e.isSecondaryButton ? e.categoryDisplayText ? s.fbt._("See All {categoryName}", [s.fbt._param("categoryName", e.categoryDisplayText)], {
							hk: "3mjiTN"
						}) : e.categoryName ? s.fbt._("See All {categoryName}", [s.fbt._param("categoryName", e.categoryName)], {
							hk: "3mjiTN"
						}) : s.fbt._("See All", null, {
							hk: "2OZax8"
						}) : s.fbt._("View All", null, {
							hk: "4vfmcB"
						});
					return l.a.createElement("div", {
						className: k.a.footer
					}, l.a.createElement(t, {
						className: k.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || g.e),
						to: e.to || "",
						style: a
					}, n))
				};

			function S(e, t) {
				return t || `${g.g}${Object(_.h)(e)}/`
			}
			const I = e => {
				return l.a.createElement("div", {
					className: k.a.categoryPicker
				}, e.categories && e.categories.map((t, a) => e.activeCategoryName === t.name ? null : l.a.createElement("span", {
					className: k.a.chipWrapper,
					key: t.name,
					onMouseDown: () => ((t, a) => e.onSendEventClick("bottom_leaderboards", t || g.e, void 0, a))(t.name, a + 1)
				}, l.a.createElement(v.a, {
					className: e.hasTagline ? k.a.taglineChip : k.a.chip,
					key: t.name,
					to: S(t.name, t.path),
					wide: t.name === g.m
				}, t.name ? t.name === g.m ? g.k : t.displayText || t.name : s.fbt._("Top", null, {
					hk: "2rw7Gx"
				})))))
			};
			t.b = e => {
				const {
					subreddits: t,
					rankings: a,
					categoryName: s,
					categoryDisplayText: n,
					category: c,
					categories: i
				} = e, d = Object(E.a)();
				Object(o.useEffect)(() => {
					d(Object(x.e)(s || g.e))
				}, []);
				const m = r()(a),
					p = t && m && t[m.id],
					b = `${u.a.assetPath}/img/leaderboard/banner-background.png`,
					f = p ? p.bannerBackgroundImage || b : void 0,
					v = e.to || s && S(s, c.path),
					_ = c && c.tagline,
					y = c && c.gradients && Array.isArray(c.gradients) && 2 === c.gradients.length ? c.gradients[1] : void 0;
				return l.a.createElement(h.a, {
					className: e.className,
					contentOnly: !0
				}, _ && l.a.createElement(N, {
					category: c,
					onSendEventClick: e.onSendEventClick,
					rankings: a
				}), !_ && l.a.createElement(O, {
					bannerBackgroundImage: f,
					categoryName: s,
					categoryDisplayText: n,
					onSendEventClick: e.onSendEventClick,
					rankings: a,
					shouldDisplayBannerImg: e.shouldDisplayBannerImg
				}), l.a.createElement(j, {
					categoryName: s,
					hasTagline: !!_,
					large: e.large,
					onSendEventClick: e.onSendEventClick,
					rankings: a,
					shouldDisplayDelta: !1,
					subreddits: t,
					isOnLeaderboardPage: e.isOnLeaderboardPage,
					isOnFrontpage: e.isOnFrontpage
				}), l.a.createElement(A, {
					categoryName: s,
					categoryDisplayText: n,
					isSecondaryButton: e.isSecondaryButton,
					linkColor: y,
					onSendEventClick: e.onSendEventClick,
					to: v
				}), i && l.a.createElement(I, {
					activeCategoryName: s,
					categories: i,
					hasTagline: !!_,
					onSendEventClick: e.onSendEventClick
				}))
			}
		},
		"./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less": function(e, t, a) {
			e.exports = {
				ClearButton: "_3k5-X9mL_S9RJuKX2c3dFc",
				clearButton: "_3k5-X9mL_S9RJuKX2c3dFc"
			}
		},
		"./src/reddit/components/Widgets/Aggregate/TopicsList/index.m.less": function(e, t, a) {
			e.exports = {
				itemContainer: "_1ULKkr1Vw-TKylAevPBQl3",
				linkItem: "_1cK4Hfav56VzzWNW6SF7Kj",
				container: "_1rKh-fSjtA_kUJNOHsvtAZ",
				banner: "_2E8lSyj68M9zN75kARoqfq",
				bannerText: "_1giVw239PHkSdxzG2aP5wH"
			}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, a) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./src/lib/lessComponent.tsx"),
				c = a("./src/reddit/components/SEOTitle/index.tsx"),
				i = a("./src/reddit/components/Widgets/Base/index.m.less"),
				o = a.n(i);
			const l = r.a.div("WidgetBackground", o.a),
				d = r.a.wrapped(e => {
					let {
						children: t,
						...a
					} = e;
					return n.a.createElement("div", a, n.a.createElement(c.b, {
						type: c.a.Widget
					}, t))
				}, "WidgetHeader", o.a);
			t.b = e => n.a.createElement("div", {
				className: e.className
			}, n.a.createElement(l, null, e.children))
		},
		"./src/reddit/constants/avatars.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			var s = a("./node_modules/fbt/lib/FbtPublic.js");
			const n = {
				legalCopy: () => s.fbt._("Avatars and avatar visual elements © Reddit and its licensors.", null, {
					hk: "ZgN7P"
				}),
				learnMoreText: () => s.fbt._("Learn more", null, {
					hk: "1rlvT"
				}),
				url: "https://reddit.zendesk.com/hc/en-us/articles/360050641932"
			}
		},
		"./src/reddit/constants/banners.ts": function(e, t, a) {
			"use strict";
			var s;
			a.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.STYLES_ENTRY_BANNER = "styles_entry_banner", e.CREATE_POST_BANNER = "create_post_banner", e.AWARDED_LISTING_BANNER = "awarded_listing_banner", e.AVATAR_LISTING_BANNER = "avatar_listing_banner"
				}(s || (s = {}))
		},
		"./src/reddit/constants/chat.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var s;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(s || (s = {}));
			var n;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(n || (n = {}))
		},
		"./src/reddit/constants/subredditLeaderboard.ts": function(e, t, a) {
			"use strict";
			a.d(t, "c", (function() {
				return n
			})), a.d(t, "f", (function() {
				return r
			})), a.d(t, "d", (function() {
				return c
			})), a.d(t, "b", (function() {
				return i
			})), a.d(t, "e", (function() {
				return o
			})), a.d(t, "p", (function() {
				return l
			})), a.d(t, "q", (function() {
				return d
			})), a.d(t, "o", (function() {
				return u
			})), a.d(t, "l", (function() {
				return m
			})), a.d(t, "m", (function() {
				return p
			})), a.d(t, "k", (function() {
				return b
			})), a.d(t, "g", (function() {
				return h
			})), a.d(t, "t", (function() {
				return g
			})), a.d(t, "j", (function() {
				return f
			})), a.d(t, "r", (function() {
				return v
			})), a.d(t, "u", (function() {
				return _
			})), a.d(t, "n", (function() {
				return x
			})), a.d(t, "s", (function() {
				return E
			})), a.d(t, "h", (function() {
				return y
			})), a.d(t, "a", (function() {
				return k
			})), a.d(t, "i", (function() {
				return O
			}));
			var s = a("./node_modules/fbt/lib/FbtPublic.js");
			const n = "DEFAULT",
				r = "",
				c = "All Communities",
				i = s.fbt._("All Communities", null, {
					hk: "1dfdfL"
				}),
				o = "top",
				l = "MOD",
				d = "moderating",
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
					id: r,
					name: r,
					path: `${h}`
				},
				f = {
					id: m,
					name: p,
					path: `${h}${p}/`
				},
				v = [{
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
					id: r,
					name: r,
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
				E = [{
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
				y = [{
					name: "E3 Gaming",
					displayText: s.fbt._("E3 Gaming", null, {
						hk: "289tR6"
					}),
					id: "c1034",
					path: `${h}e3/`
				}],
				k = [{
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
				O = ["Sports", "Gaming", "News", "TV", "Aww", "Memes", "Pics & Gifs", "Travel", "Tech", "Music"]
		},
		"./src/reddit/controls/Chip/index.m.less": function(e, t, a) {
			e.exports = {
				Chip: "yO1xBdgBCFQNZudOlok9d",
				chip: "yO1xBdgBCFQNZudOlok9d",
				isWide: "_1lxXIK3bbUOKz-5A-FRakQ",
				active: "PrkN-68SZ_ce-8V-W4ciS"
			}
		},
		"./src/reddit/controls/Chip/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/controls/Button/index.tsx"),
				i = a("./src/reddit/controls/Chip/index.m.less"),
				o = a.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const t = e.to ? {
					kind: c.b.InternalLink,
					to: e.to
				} : {};
				return n.a.createElement(c.t, l({
					className: Object(r.a)(o.a.Chip, {
						[o.a.isWide]: e.wide
					}),
					onClick: e.onClick,
					priority: c.c.Tertiary,
					size: c.d.XS,
					text: e.children
				}, t))
			}
		},
		"./src/reddit/endpoints/subreddit/local.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return i
			}));
			var s = a("./src/lib/makeGqlRequest/index.ts"),
				n = a("./src/redditGQL/operations/GetNearbySubreddits.json"),
				r = a("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const c = (e, t) => Object(s.a)(e, {
				...n,
				variables: t
			});
			async function i(e, t) {
				const a = await c(e, t);
				if (a && a.ok) {
					const e = a.body,
						t = e && e.data && e.data.nearbySubreddits;
					return Object(r.a)(t)
				}
			}
			t.a = c
		},
		"./src/reddit/endpoints/subreddit/topSubreddits.ts": function(e, t, a) {
			"use strict";
			var s = a("./src/lib/makeGqlRequest/index.ts"),
				n = a("./src/redditGQL/operations/TopSubreddits.json");
			t.a = (e, t) => Object(s.a)(e, {
				...n,
				variables: t
			})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/reselect/es/index.js"),
				i = a("./src/reddit/featureFlags/index.ts");

			function o(e, t, a) {
				const s = Object(c.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(r.b)(s)(e => {
					const {
						featureEnabled: s,
						...r
					} = e, c = r;
					return s ? n.a.createElement(t, c) : void 0 !== a ? n.a.createElement(a, c) : null
				})
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			a("./src/lib/isFakeSubreddit/index.ts"), a("./src/reddit/constants/postLayout.ts");
			Math.floor(100 * Math.random());
			var s;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(s || (s = {}))
		},
		"./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return n
			})), a.d(t, "c", (function() {
				return r
			})), a.d(t, "a", (function() {
				return c
			}));
			a("./node_modules/lodash/isEmpty.js");
			var s = a("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const n = e => {
					let {
						edges: t,
						pageInfo: a
					} = e;
					const n = {},
						r = [];
					for (const {
							node: c,
							...i
						} of t) {
						const e = Object(s.a)(c);
						n[e.id] = e, r.push(i)
					}
					return {
						pageInfo: a,
						rankings: r,
						subreddits: n
					}
				},
				r = e => {
					let {
						edges: t
					} = e;
					const a = {},
						n = [];
					for (const {
							node: r,
							...c
						} of t) {
						const e = Object(s.a)(r);
						a[e.id] = {
							...e,
							bannerBackgroundImage: r && r.styles && r.styles.bannerBackgroundImage
						}, n.push(c)
					}
					return {
						rankings: n,
						subreddits: a
					}
				},
				c = e => {
					let {
						edges: t,
						pageInfo: a
					} = e;
					const n = {},
						r = [];
					let c = 0;
					for (const {
							node: i
						} of t) {
						const e = Object(s.a)(i);
						n[e.id] = {
							...e,
							publicDescription: null == i ? void 0 : i.publicDescriptionText,
							bannerBackgroundImage: i && i.styles && i.styles.bannerBackgroundImage
						}, r.push({
							id: e.id,
							rank: c
						}), c += 1
					}
					return {
						rankings: r,
						subreddits: n,
						pageInfo: a
					}
				}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "e", (function() {
				return m
			})), a.d(t, "c", (function() {
				return p
			})), a.d(t, "b", (function() {
				return h
			})), a.d(t, "a", (function() {
				return g
			})), a.d(t, "d", (function() {
				return f
			}));
			var s = a("./node_modules/polished/dist/polished.es.js"),
				n = a("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = a("./src/reddit/helpers/styles/smartTextColor.ts"),
				c = a("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = a("./src/reddit/models/Theme/index.ts"),
				o = a("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				l = a("./src/reddit/helpers/styles/mixins/index.m.less"),
				d = a.n(l);
			const u = {},
				m = e => Object(i.g)(Object(o.a)(e).post, Object(o.a)(e).backgroundImage, Object(o.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(o.a)(t).post, e.postBackgroundImage, Object(o.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(s.k)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				g = e => e.isActive ? d.a.mIsActive : void 0,
				f = e => {
					const t = Object(r.a)(Object(n.a)(e), c.a.actionIcon, c.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			})), a.d(t, "H", (function() {
				return d
			})), a.d(t, "i", (function() {
				return u
			})), a.d(t, "j", (function() {
				return m
			})), a.d(t, "D", (function() {
				return p
			})), a.d(t, "A", (function() {
				return b
			})), a.d(t, "E", (function() {
				return h
			})), a.d(t, "C", (function() {
				return g
			})), a.d(t, "B", (function() {
				return f
			})), a.d(t, "u", (function() {
				return v
			})), a.d(t, "v", (function() {
				return _
			})), a.d(t, "x", (function() {
				return x
			})), a.d(t, "r", (function() {
				return E
			})), a.d(t, "p", (function() {
				return y
			})), a.d(t, "q", (function() {
				return k
			})), a.d(t, "o", (function() {
				return O
			})), a.d(t, "z", (function() {
				return N
			})), a.d(t, "s", (function() {
				return j
			})), a.d(t, "y", (function() {
				return C
			})), a.d(t, "G", (function() {
				return A
			})), a.d(t, "t", (function() {
				return S
			})), a.d(t, "c", (function() {
				return I
			})), a.d(t, "n", (function() {
				return P
			})), a.d(t, "k", (function() {
				return w
			})), a.d(t, "b", (function() {
				return T
			})), a.d(t, "d", (function() {
				return M
			})), a.d(t, "e", (function() {
				return L
			})), a.d(t, "w", (function() {
				return B
			})), a.d(t, "F", (function() {
				return F
			})), a.d(t, "f", (function() {
				return R
			})), a.d(t, "l", (function() {
				return D
			})), a.d(t, "m", (function() {
				return Z
			})), a.d(t, "g", (function() {
				return U
			})), a.d(t, "h", (function() {
				return q
			}));
			var s, n = a("./src/reddit/constants/chat.ts"),
				r = a("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				c = a("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(s || (s = {}));
			const i = (e, t) => {
					if (t) {
						const a = c.B(e, t.post.id),
							s = c.I(e, t.post.id),
							n = c.hb(e);
						if (t.post.authorInfo && s && (s.authorId = t.post.authorInfo.id), a) {
							a.streamPublicId = t.stream.stream_id, a.id = t.stream.stream_id;
							const s = Object(r.j)(e, {
								streamIdFromPath: t.post.id
							});
							s === r.a.LIVE ? a.type = "stream_live" : s === r.a.VOD ? a.type = "stream_vod" : s === r.a.UNAVAILABLE && (a.type = "stream_unavailable")
						}
						return {
							post: s,
							media: a,
							subreddit: n
						}
					}
					return {
						subreddit: c.hb(e)
					}
				},
				o = (e, t, a) => {
					if (!t || !a) return;
					const s = Object(r.j)(e, {
							streamIdFromPath: t.post.id
						}),
						c = t.chat_disabled || a.chatState === n.a.None;
					return {
						id: a.id,
						sessionDurationMs: a.sessionDurationMs,
						watchDurationMs: a.watchDurationMs,
						heartbeatDurationMs: a.heartbeatDurationMs,
						isLive: s === r.a.LIVE,
						playheadOffsetMs: a.playheadOffsetMs,
						timestampMs: a.timestampMs,
						startTimeMs: a.startTimeMs,
						volume: a.volume,
						chatState: c ? n.a.None : n.a.Compact,
						scrubbingStartMs: a.scrubbingStartMs,
						scrubbingEndMs: a.scrubbingEndMs,
						playerType: a.playerType
					}
				},
				l = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				d = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du",
					...i(e)
				}),
				u = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less",
					...i(e)
				}),
				m = (e, t) => a => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...i(a, e),
					actionInfo: c.d(a, {
						position: t || 0
					})
				}),
				p = (e, t) => a => ({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: o(a, e, t),
					...l(a),
					...e && {
						...i(a, e)
					}
				}),
				b = (e, t) => a => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: o(a, e, t),
					...l(a),
					...i(a, e)
				}),
				h = (e, t) => a => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: o(a, e, t),
					...l(a),
					...i(a, e)
				}),
				g = (e, t) => a => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: o(a, e, t),
					...l(a),
					...i(a, e)
				}),
				f = (e, t, a) => s => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: o(s, t, a),
					...l(s),
					...i(s, t)
				}),
				v = (e, t, a, s) => n => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: o(n, t, a),
					...l(n),
					...i(n, t),
					actionInfo: c.d(n, {
						referralId: s
					})
				}),
				_ = (e, t, a) => s => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: o(s, t, a),
					...l(s),
					...i(s, t)
				}),
				x = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...l(t),
					...i(t, e)
				}),
				E = (e, t) => a => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: o(a, e, t),
					...l(a),
					...i(a, e)
				}),
				y = (e, t) => a => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: o(a, e, t),
					...l(a),
					...i(a, e)
				}),
				k = (e, t) => a => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: o(a, e, t),
					...l(a),
					...i(a, e)
				}),
				O = (e, t) => a => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: o(a, e, t),
					...i(a, e)
				}),
				N = e => t => {
					const a = Object(r.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...i(t, a)
					}
				},
				j = (e, t, a) => s => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: o(s, t, a),
					...i(s, t)
				}),
				C = (e, t) => a => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: o(a, e, t),
					...l(a)
				}),
				A = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: c.R(t),
					screen: c.Z(t),
					...i(t, e)
				}),
				S = e => t => {
					const a = i(t, e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: c.R(t),
						screen: c.Z(t),
						...a
					}
				},
				I = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...i(t, e)
				}),
				P = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "unfollow",
					...i(t, e)
				}),
				w = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...i(t, e),
					targetSubreddit: c.hb(t)
				}),
				T = (e, t) => a => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: o(a, e, t),
					...i(a, e)
				}),
				M = (e, t) => a => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: o(a, e, t),
					...i(a, e)
				}),
				L = (e, t) => a => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: o(a, e, t),
					...i(a, e)
				}),
				B = (e, t) => a => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: o(a, e, t),
					...i(a, e)
				}),
				F = (e, t) => a => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: o(a, e, t),
					...i(a, e)
				}),
				R = (e, t) => a => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: o(a, e, t),
					...i(a, e)
				}),
				D = (e, t) => a => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: o(a, e, t),
					...i(a, e),
					...l(a)
				}),
				Z = (e, t) => a => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: o(a, e, t),
					...i(a, e),
					...l(a)
				}),
				U = (e, t) => a => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...i(a, t),
					...l(a)
				}),
				q = (e, t) => a => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...i(a, t),
					...l(a)
				})
		},
		"./src/reddit/helpers/trackers/subredditLeaderboard.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			})), a.d(t, "b", (function() {
				return c
			})), a.d(t, "f", (function() {
				return i
			})), a.d(t, "g", (function() {
				return o
			})), a.d(t, "c", (function() {
				return l
			})), a.d(t, "e", (function() {
				return d
			})), a.d(t, "d", (function() {
				return u
			}));
			var s = a("./src/reddit/constants/categories.tsx"),
				n = a("./src/reddit/selectors/telemetry.ts");
			const r = e => t => ({
					...n.n(t),
					action: "click",
					noun: Object(s.d)(e),
					source: "leaderboard_category"
				}),
				c = (e, t, a) => r => ({
					...n.n(r),
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(s.d)(t),
						name: a && a.toLowerCase()
					}
				}),
				i = (e, t) => a => ({
					...n.n(a),
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(s.d)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				o = (e, t) => a => ({
					...n.n(a),
					action: "click",
					source: "leaderboard_subreddit",
					noun: t ? "unsubscribe" : "subscribe",
					subreddit: {
						name: e && e.toLowerCase()
					}
				}),
				l = (e, t, a, r) => c => ({
					...n.n(c),
					action: "click",
					actionInfo: {
						...n.d(c),
						position: r && r
					},
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(s.d)(t),
						name: a && a.toLowerCase()
					}
				}),
				d = (e, t) => a => ({
					...n.n(a),
					action: "view",
					noun: "leaderboard_right_rail",
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(s.d)(e),
						name: t && t.toLowerCase()
					}
				}),
				u = (e, t) => a => ({
					...n.n(a),
					action: "click",
					source: "leaderboard_right_rail",
					noun: t ? "unsubscribe" : "subscribe",
					subreddit: {
						name: e && e.toLowerCase()
					}
				})
		},
		"./src/reddit/hooks/promo/useIsPromoShown.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var s = a("./src/reddit/constants/promo.ts"),
				n = a("./src/reddit/hooks/usePromoContext.ts");

			function r(e) {
				const {
					promos: t
				} = Object(n.a)();
				return !!e && t.get(e) === s.a.Shown
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var s = a("./node_modules/react-redux/es/index.js"),
				n = a("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function r(e) {
				const t = Object(s.e)(n.a) === e,
					a = Object(s.e)(n.c) === e,
					r = Object(s.e)(n.e) === e;
				return t || a || r
			}
		},
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(s.useContext)(n.a)
			}
		},
		"./src/reddit/models/GoodContent/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return s
			})), a.d(t, "a", (function() {
				return n
			}));
			const s = {
					G: "G",
					NC17: "NC17",
					NOT_SHOWN_IN_THEATERS: "NOT_SHOWN_IN_THEATERS",
					PG: "PG",
					PG13: "PG13",
					R: "R"
				},
				n = {
					isBlacklistedSubredditsExcluded: !0,
					isNsfwExcluded: !0,
					maxRating: s.R
				}
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, a) {
			"use strict";
			var s;
			a.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(s || (s = {}))
		},
		"./src/reddit/pages/Frontpage/index.m.less": function(e, t, a) {
			e.exports = {
				duHeader: "_1fauFKjg428h9E1m4B2Vr-",
				sidebar: "_10wb7d3rGvj56Gcs4IQWL5"
			}
		},
		"./src/reddit/pages/Frontpage/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s = a("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = a("./node_modules/lodash/fromPairs.js"),
				r = a.n(n),
				c = a("./node_modules/lodash/memoize.js"),
				i = a.n(c),
				o = a("./node_modules/react/index.js"),
				l = a.n(o),
				d = a("./node_modules/react-redux/es/index.js"),
				u = a("./node_modules/reselect/es/index.js"),
				m = a("./src/lib/classNames/index.ts"),
				p = a("./src/lib/extractQueryParams/index.ts"),
				b = a("./src/lib/fastdom/index.ts"),
				h = a("./src/lib/makeListingKey/index.ts"),
				g = a("./src/lib/performanceTimings/index.tsx"),
				f = a("./src/lib/promo/withShowSignupUpsell.tsx"),
				v = a("./src/reddit/actions/frontpage/index.ts"),
				_ = a("./src/reddit/components/AvatarListingBanner/index.tsx"),
				x = a("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/ScrollChildFactory.tsx"),
				E = a("./src/reddit/components/Econ/Marketplace/InFeedUnit/async.tsx"),
				y = a("./src/reddit/components/EmptySubreddit.tsx"),
				k = a("./src/reddit/components/FeaturedLiveEntrypoint/index.tsx"),
				O = a("./src/reddit/components/FrontpageSidebar/index.tsx"),
				N = a("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				j = a("./src/reddit/components/InAppNotifications/index.tsx"),
				C = a("./src/reddit/components/InFeedPostCreation/async.tsx"),
				A = a("./src/reddit/components/JumpToContent/index.tsx"),
				S = a("./src/reddit/components/LangSite/Banner/index.tsx"),
				I = a("./src/reddit/components/ListingPostList/index.tsx"),
				P = a("./src/reddit/components/LiveBar/index.tsx"),
				w = a("./src/reddit/components/Onboarding/Interests/InterestPickerPreview.tsx"),
				T = a("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				M = a("./src/reddit/components/Scroller/ScrollChild.ts"),
				L = a("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				B = a("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				F = a("./src/reddit/components/TabBadger/index.tsx"),
				R = a("./src/reddit/components/TrackingHelper/index.tsx"),
				D = a("./src/reddit/constants/parameters.ts"),
				Z = a("./src/reddit/constants/postLayout.ts"),
				U = a("./src/reddit/contexts/PageLayer/index.tsx"),
				q = a("./src/reddit/helpers/datadome.ts"),
				V = a("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				W = a("./src/reddit/helpers/trackers/screenview.ts"),
				H = a("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				G = a("./src/reddit/layout/page/Listing/index.tsx"),
				K = a("./src/reddit/selectors/experiments/econ/index.ts"),
				z = a("./src/reddit/selectors/experiments/econ/avatarBanner.ts"),
				Q = a("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				X = a("./src/reddit/selectors/experiments/inAppNotification.ts"),
				J = a("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Y = a("./src/reddit/selectors/experiments/loggedOutOneFeed.ts"),
				$ = a("./src/reddit/selectors/experiments/onboarding.ts"),
				ee = a("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				te = a("./src/reddit/selectors/features/liveBar/index.ts"),
				ae = a("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				se = a("./src/reddit/selectors/frontpage.ts"),
				ne = a("./src/reddit/selectors/gold/marketplace/claimFlow.ts"),
				re = a("./src/reddit/selectors/inAppNotifications.ts"),
				ce = a("./src/reddit/selectors/meta.ts"),
				ie = a("./src/reddit/selectors/onboarding.ts"),
				oe = a("./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts"),
				le = a("./src/reddit/selectors/user.ts"),
				de = a("./src/lib/constants/index.ts"),
				ue = a("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				me = a("./src/lib/objectSelector/index.ts"),
				pe = a("./src/reddit/constants/page.ts"),
				be = a("./src/reddit/pages/Frontpage/index.m.less"),
				he = a.n(be);

			function ge() {
				return (ge = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: fe
			} = a("./node_modules/fbt/lib/FbtPublic.js"), ve = Object(U.u)(), _e = Object(u.c)({
				queryParams: Object(me.a)((e, t) => {
					let {
						location: a
					} = t;
					return r()([...Object(p.a)(a.search)])
				}),
				sort: (e, t) => {
					let {
						match: a
					} = t;
					const s = Object(se.a)(e);
					return a.params.sort || s
				}
			}), xe = Object(u.c)({
				isCommentCountAnimationEnabled: ee.d,
				isVoteCountAnimationEnabled: ee.h,
				isCountAnimShadowTestEnabled: ee.e,
				isLoggedIn: le.Q,
				isLoggedOutOneFeed: Y.a,
				isPopular: U.F,
				isRpanDuVisible: e => Object(oe.a)(e, {
					listingName: ue.R
				}),
				rpanInjectionIndex: e => Object(oe.b)(e, {
					listingName: ue.R
				}),
				layout: U.S,
				isBlockingInterstitialEnabled: J.b,
				isBlockingInterstitialV2Enabled: J.c,
				isTalkLiveBarEnabled: K.t,
				interestTopicRecommendations: ie.b,
				reonboardingFlow: $.c,
				marketplaceFeedUnit: e => Object(Q.a)(e) ? Object(ne.a)(e) : null,
				inAppNotifications: re.b,
				inAppNotificationsPosition: re.a,
				isInAppNotificationFloatInFeedExperimentVariant: X.b,
				liveBarTalks: te.a
			}), Ee = () => Object(u.a)(ce.l, _e, xe, e => Object(oe.a)(e, {
				listingName: ue.R
			}), e => Object(oe.b)(e, {
				listingName: ue.R
			}), e => e, V.a, (e, t, a, s, n, r, c) => {
				let {
					queryParams: i,
					sort: o
				} = t;
				const l = D.C in i && i[D.C].toUpperCase(),
					d = "string" == typeof l && l in de.ic ? de.ic[l] : de.jc,
					u = Object(h.a)(pe.b, o, i),
					m = e,
					p = [];
				s && p.push(n);
				const b = Object(ae.b)(r, {
					existingDUPositions: p,
					listingProps: {
						listingKey: u
					}
				});
				return {
					avatarBanner: a.layout === Z.g.Large ? Object(z.b)(r) : null,
					cardViewExperimentVariant: c,
					countrySort: m,
					listingKey: u,
					sort: o,
					timeSort: d,
					focusedVerticalPositions: b,
					...a
				}
			}), ye = (e, t) => ({
				onLoadMorePosts: () => e(v.morePostsRequested({
					sort: t.match.params.sort
				})),
				refreshFeed: () => e(v.refreshFeed({
					sort: t.match.params.sort
				}))
			}), ke = Object(d.b)(Ee, ye), Oe = Object(s.a)({
				resolved: {},
				chunkName: () => "Trending",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!a.m[t]
				},
				importAsync: () => a.e("Trending").then(a.bind(null, "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return a(t)
				},
				resolve() {
					return "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx"
				}
			}, {
				ssr: !1
			}), Ne = e => l.a.createElement(Oe, ge({}, e, {
				fallback: l.a.createElement(B.a, {
					showCardView: !!e.showCardView
				})
			}));
			class je extends l.a.Component {
				constructor(e) {
					super(e), this.renderEmptySubreddit = () => l.a.createElement(y.a, {
						listingName: pe.c,
						sort: this.props.sort
					}), this.onListingViewed = (e, t) => Object(W.f)({
						key: this.props.listingKey,
						sort: this.props.sort,
						timerType: t,
						timerMillis: e,
						timeSort: this.props.timeSort
					}), this.componentDidMount = () => {
						const {
							cardViewExperimentVariant: e,
							isLoggedIn: t,
							sort: a
						} = this.props;
						b.a.read(() => {
							const s = `${g.c.FrontPage}-${a}`,
								n = [Object(V.c)(e), Object(q.a)()];
							Object(g.d)(s, t, n)
						})
					}, this.memoizedGetInjectChildren = i()(e => {
						let {
							avatarBanner: t,
							focusedVerticalPositions: a,
							interestTopicRecommendations: s,
							isRpanDuVisible: n,
							layout: r,
							listingKey: c,
							marketplaceFeedUnit: i,
							reonboardingFlow: o,
							rpanInjectionIndex: d,
							sendEvent: u,
							inAppNotifications: m,
							inAppNotificationsPosition: p,
							isInAppNotificationFloatInFeedExperimentVariant: b
						} = e;
						return () => {
							const e = {};
							if (r === Z.g.Large && a.forEach((t, a) => {
									e[t] = Object(x.a)({
										numInstance: a,
										layout: r,
										listingKey: c,
										listingName: pe.c,
										listingPosition: t
									})
								}), n) {
								const {
									child: t,
									idx: a
								} = Object(T.a)({
									children: e,
									desiredIndex: d,
									layout: r,
									listingKey: c,
									listingName: ue.R,
									sendEvent: u
								});
								e[a] = t
							}
							if (t && (e[0] = {
									estHeight: 180,
									id: "avatar-listing-banner",
									render(e) {
										let {
											className: a
										} = e;
										return l.a.createElement(_.a, {
											className: a,
											bannerType: t
										})
									}
								}), i) {
								const t = Object(M.a)(i.feedIndex, e);
								e[t] = {
									estHeight: 305,
									id: "marketplace-feed-unit",
									render: () => l.a.createElement(E.a, {
										layout: r
									})
								}
							}
							if (s) {
								const {
									interests: t,
									index: a
								} = s, {
									child: n,
									idx: r
								} = Object(w.a)({
									children: e,
									desiredIdx: a,
									interests: t,
									sendEvent: u,
									variant: o
								});
								e[r] = n
							}
							return p && (null == m ? void 0 : m.notifications) && m.id && b && (e[p] = {
								estHeight: j.a.SHORT,
								id: m.id,
								render: () => l.a.createElement(j.b, {
									notifications: null == m ? void 0 : m.notifications
								})
							}), e
						}
					}, e => {
						let {
							isRpanDuVisible: t,
							avatarBanner: a,
							layout: s,
							marketplaceFeedUnit: n
						} = e;
						return `rpan:${t}_l:${s}_a:${a},mpfu:${null==n?void 0:n.id}`
					})
				}
				render() {
					const {
						isBlockingInterstitialEnabled: e,
						isBlockingInterstitialV2Enabled: t,
						isCommentCountAnimationEnabled: a,
						isCountAnimShadowTestEnabled: s,
						isLoggedIn: n,
						isLoggedOutOneFeed: r,
						isPopular: c,
						isTalkLiveBarEnabled: i,
						isVoteCountAnimationEnabled: d,
						layout: u,
						listingKey: p,
						showSignupUpsell: b,
						liveBarTalks: h
					} = this.props, g = this.memoizedGetInjectChildren(this.props), f = c && !n && !r, v = {
						baseUrl: "",
						countrySort: this.props.countrySort,
						sort: this.props.sort,
						timeSort: this.props.timeSort
					}, _ = l.a.createElement(O.default, {
						className: he.a.sidebar,
						listingKey: p,
						listingName: pe.c
					});
					return l.a.createElement(G.a, {
						className: Object(m.a)(he.a.Container, this.props.className),
						fitPageToContent: !0,
						hero: n ? void 0 : l.a.createElement(S.a, {
							isCardView: Z.e[u] === Z.d.Card
						}),
						trendingUnit: f && l.a.createElement(Ne, {
							showCardView: u === Z.g.Large
						}),
						content: l.a.createElement(o.Fragment, null, f && l.a.createElement(L.a, {
							className: he.a.duHeader
						}, fe._("Popular posts", null, {
							hk: "36DJb4"
						})), l.a.createElement(k.a, null), n && l.a.createElement(C.a, null), n && h.length > 0 && i && l.a.createElement(P.a, {
							talks: h
						}), !r && l.a.createElement(N.a, v), l.a.createElement(A.a, null), l.a.createElement(F.a, {
							listingKey: this.props.listingKey,
							shortTimer: !0,
							handlePillClick: this.props.refreshFeed
						}), l.a.createElement(I.a, {
							getInjectChildren: g,
							isCommentCountAnimationEnabled: a,
							isCountAnimShadowTestEnabled: s,
							isLoggedOutOneFeed: r,
							isVoteCountAnimationEnabled: d,
							noPostsComponent: this.renderEmptySubreddit,
							key: "listing",
							listingKey: p,
							listingName: pe.c,
							listingViewed: this.onListingViewed,
							onLoadMore: this.props.onLoadMorePosts,
							onScroll: b,
							isBlockingInterstitialEnabled: e || t
						})),
						sidebar: _
					})
				}
			}
			t.default = ve(ke(Object(R.c)(Object(f.a)(Object(H.d)(je)))))
		},
		"./src/reddit/reducers/features/liveBar/index.ts": function(e, t, a) {
			"use strict";
			var s = a("./src/reddit/actions/liveBar/index.ts");
			const n = {
				talks: []
			};
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.a:
						return {
							...e, talks: t.payload
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/marketplace/index.ts": function(e, t, a) {
			"use strict";
			var s = a("./src/reddit/actions/economics/marketplace/constants.ts");
			const n = {};
			var r = a("./node_modules/redux/es/redux.js"),
				c = a("./src/reddit/actions/frontpage/constants.ts");
			const i = {
				id: null,
				title: "",
				description: "",
				buttonCtaText: "",
				feedIndex: 0
			};
			t.a = Object(r.c)({
				feedUnit: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.b: {
							const {
								marketplaceFeedElement: a
							} = t.payload;
							return a ? {
								id: a.element.id,
								title: a.element.unitTitle,
								description: a.element.unitDescription,
								buttonCtaText: a.element.buttonCtaText,
								feedIndex: a.index
							} : e
						}
						default:
							return e
					}
				},
				claimStatus: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.b: {
							const {
								claimId: a
							} = t.payload;
							return {
								...e,
								[a]: "claim_success"
							}
						}
						case s.a: {
							const {
								claimId: a
							} = t.payload;
							return {
								...e,
								[a]: "no_nfts_left"
							}
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return m
			})), a.d(t, "b", (function() {
				return p
			}));
			var s = a("./node_modules/reselect/es/index.js"),
				n = a("./src/lib/constants/index.ts"),
				r = a("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				c = a("./src/reddit/selectors/subreddit.ts"),
				i = a("./src/reddit/selectors/user.ts"),
				o = a("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = a("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const d = Object(s.a)(i.k, i.Hb, (e, t) => {
					let {
						listingName: a
					} = t;
					return -1 === [r.R, "r/popular"].indexOf(a)
				}, (e, t) => {
					let {
						listingName: a
					} = t;
					return Object(c.F)(e, a.replace(/^r\//, ""))
				}, (e, t, a, s) => {
					if (e && a && s) {
						return t.subreddit[s]
					}
					return t
				}),
				u = Object(s.a)(d, e => {
					if (!e) return !1;
					if (!e.rpanDuDismissalTime) return !1;
					return new Date(e.rpanDuDismissalTime).getTime() > Date.now() - 30 * n.B
				}),
				m = Object(s.a)(o.a, u, (e, t) => {
					let {
						listingName: a
					} = t;
					return a
				}, (e, t) => {
					let {
						listingName: a
					} = t;
					return Object(l.m)(e, {
						subreddit: a
					})
				}, l.k, (e, t) => {
					let {
						sort: a
					} = t;
					return a
				}, (e, t, a, s, c, i) => {
					return ![r.R, "r/popular"].includes(a) && (i !== n.W.AWARDED && (!!e && (!c.isPermanentlyCanceled && (!t && (!!s && s.show_discovery_unit)))))
				}),
				p = Object(s.a)((e, t) => {
					let {
						listingName: a
					} = t;
					return a
				}, (e, t) => {
					let {
						listingName: a
					} = t;
					return Object(l.m)(e, {
						subreddit: a
					})
				}, l.l, (e, t, a) => t ? t.discovery_unit_index : r.i)
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, a) {
			"use strict";
			a.d(t, "l", (function() {
				return y
			})), a.d(t, "m", (function() {
				return N
			})), a.d(t, "i", (function() {
				return A
			})), a.d(t, "d", (function() {
				return w
			})), a.d(t, "h", (function() {
				return T
			})), a.d(t, "k", (function() {
				return M
			})), a.d(t, "c", (function() {
				return L
			})), a.d(t, "f", (function() {
				return B
			})), a.d(t, "a", (function() {
				return D
			})), a.d(t, "j", (function() {
				return Z
			})), a.d(t, "b", (function() {
				return U
			})), a.d(t, "e", (function() {
				return q
			})), a.d(t, "g", (function() {
				return V
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = a("./node_modules/reselect/es/index.js"),
				n = a("./src/lib/objectSelector/index.ts"),
				r = a("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				c = a("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = a("./src/reddit/selectors/posts.ts"),
				o = a("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				l = a("./node_modules/lodash/memoize.js");
			const d = e => e.publicAccessNetwork.listings,
				u = a.n(l)()(e => Object(n.a)(Object(s.a)(d, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = a("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				h = e => e.publicAccessNetwork.history,
				g = e => e.publicAccessNetwork.history.cursor,
				f = e => e.publicAccessNetwork.history.visitOrder,
				v = e => e.publicAccessNetwork.hlsStreams,
				_ = Object(s.a)(v, e => e.ended),
				x = Object(s.a)(v, e => e.removed),
				E = Object(s.a)(p, _, x, (e, t, a) => {
					const s = t.reduce((e, t) => {
						const a = e[t];
						if (!a) return e;
						const s = a.stream.state,
							n = F(s, c.a.ENDED) ? c.a.ENDED : s,
							r = a.stream.vod_accessible;
						return n === s && !0 === r ? e : {
							...e,
							[t]: {
								...a,
								stream: {
									...a.stream,
									state: n,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return a.reduce((e, t) => {
						const a = e[t];
						if (!a) return e;
						const s = a.stream.state,
							n = F(s, c.a.ENDED) ? c.a.ENDED : s,
							r = a.stream.vod_accessible;
						return n === s && !1 === r ? e : {
							...e,
							[t]: {
								...a,
								stream: {
									...a.stream,
									state: n,
									vod_accessible: !1
								}
							}
						}
					}, s)
				}),
				y = (e, t) => {
					return E(e)[Object(r.g)(t)]
				},
				k = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: a
					} = t;
					return a
				}, (e, t) => u(t.listingName)(e, t), E, b, i.h, (e, t, a, s, n) => {
					const i = [];
					if (e) {
						const t = Object(r.g)(e);
						a[t] && i.push(t)
					}
					const o = i.concat(t),
						l = [...new Set(o)],
						d = new Set([...s, ...n]);
					return l.filter(e => {
						const t = a[e];
						return !d.has(e) && !t.post.isHidden && t.stream.state !== c.a.KILLED && t.stream.state !== c.a.PURGED
					})
				}),
				O = Object(s.a)((e, t) => {
					let {
						count: a
					} = t;
					return a
				}, E, (e, t) => {
					let {
						listingName: a,
						streamIdFromPath: s
					} = t;
					return k(e, {
						listingName: a,
						streamIdFromPath: s
					})
				}, (e, t, a) => {
					const s = a.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? s.slice(0, e) : s
				}),
				N = Object(s.a)(E, O, (e, t) => {
					const a = t[0];
					if (a) return e[a]
				}),
				j = Object(s.a)(f, (e, t) => {
					let {
						related: a,
						streamIdFromPath: s,
						subreddit: n
					} = t;
					return O(e, {
						listingName: a || n,
						streamIdFromPath: s
					})
				}, (e, t) => {
					const a = new Set(e),
						s = t.filter(e => !a.has(e));
					if (s.length) return s[0]
				}),
				C = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: a
					} = t;
					return a
				}, E, (e, t) => {
					let {
						related: a,
						streamIdFromPath: s,
						subreddit: n
					} = t;
					return O(e, {
						listingName: a || n,
						streamIdFromPath: s
					})
				}, h, (e, t, a, s) => {
					if (!a.length) return;
					const n = a.map(e => t[e]).filter(t => t && t.post.id !== e),
						r = n.find(e => e.stream.state === c.a.IS_LIVE);
					if (r) return r.post.id;
					const i = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (s.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				A = Object(n.a)(Object(s.a)(C, E, (e, t) => e ? t[e] : void 0)),
				S = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: a
					} = t;
					return a ? Object(r.g)(a) : void 0
				}, C, b, i.h, (e, t) => {
					let {
						related: a,
						streamIdFromPath: s,
						subreddit: n
					} = t;
					return O(e, {
						listingName: a || n,
						streamIdFromPath: s
					})
				}, (e, t, a, s, n) => !e || a.includes(e) || s.includes(e) ? t || n[0] : e),
				I = Object(s.a)(g, f, j, (e, t, a) => e < t.length - 1 ? t[e + 1] : a),
				P = Object(s.a)(g, f, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				w = Object(n.a)(Object(s.a)(S, E, (e, t) => e ? t[e] : void 0)),
				T = Object(n.a)(Object(s.a)(I, E, (e, t) => e ? t[e] : void 0)),
				M = Object(n.a)(Object(s.a)(P, E, (e, t) => e ? t[e] : void 0)),
				L = (Object(n.a)(Object(s.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, E, (e, t) => Object.keys(e).filter(e => !!t[e]).map(a => ({
					...t[a],
					preloadedPreviewUrl: e[a]
				})))), Object(s.a)(S, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				B = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: a
					} = t;
					return a ? y(e, a) : void 0
				}, e => !e || e.chat_disabled || e.post.isArchived || e.post.isLocked);

			function F(e, t) {
				const a = {
					[c.a.NOT_STARTED]: 0,
					[c.a.PUBLISHED]: 1,
					[c.a.IS_LIVE]: 2,
					[c.a.DISCONNECTED]: 2,
					[c.a.ENDED]: 3,
					[c.a.KILLED]: 4,
					[c.a.PURGED]: 4
				};
				return a[t] >= a[e]
			}
			const R = Object(s.a)(S, h, (e, t) => e && t.timestamps[e] || 0);
			var D;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(D || (D = {}));
			const Z = Object(s.a)(S, E, m.b, (e, t, a) => {
					if (a) return D.INTRO;
					const s = e && t[e];
					if (!s) return D.UNAVAILABLE;
					const n = s.stream.state;
					return n === c.a.IS_LIVE || n === c.a.DISCONNECTED ? D.LIVE : n === c.a.ENDED && s.stream.vod_accessible ? D.VOD : D.UNAVAILABLE
				}),
				U = Object(s.a)(w, Z, m.b, o.b, o.o, (e, t, a, s, n) => a ? s : e ? t === D.LIVE || t === D.VOD ? e.stream.hls_url : n : void 0),
				q = Object(s.a)(w, Z, R, (e, t, a) => e ? t === D.LIVE ? e.broadcast_time : t === D.VOD && a < e.broadcast_time ? a : 0 : 0),
				V = (e, t) => {
					const a = p(e);
					return !!a && a[t] && a[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return i
			})), a.d(t, "c", (function() {
				return o
			})), a.d(t, "a", (function() {
				return l
			}));
			var s = a("./node_modules/reselect/es/index.js"),
				n = a("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				r = a("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const c = e => e.publicAccessNetwork.theaterSettings,
				i = Object(s.a)(c, r.n, (e, t) => t && !e.isIntroFinished),
				o = Object(s.a)(c, e => e.lastChatActivityUtcTs),
				l = e => !!e && e + n.a > Date.now()
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			var s = a("./src/reddit/constants/experiments.ts"),
				n = a("./src/reddit/constants/postLayout.ts"),
				r = a("./src/reddit/contexts/PageLayer/index.tsx"),
				c = a("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => n.e[Object(r.S)(e, {})] === n.d.Card,
				o = e => Object(c.c)(e, {
					experimentEligibilitySelector: i,
					experimentName: s.wb
				}) === s.Cc.Treatment
		},
		"./src/reddit/selectors/experiments/econ/avatarBanner.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return l
			})), a.d(t, "b", (function() {
				return d
			}));
			var s = a("./src/reddit/constants/experiments.ts"),
				n = a("./src/reddit/helpers/chooseVariant/index.ts"),
				r = a("./src/reddit/selectors/user.ts");

			function c(e) {
				return Object(n.c)(e, {
					experimentEligibilitySelector: r.Q,
					experimentName: s.Uc
				})
			}
			const i = 31536e3;

			function o(e) {
				if (c(e)) return !1;
				const t = Object(r.k)(e);
				if (!t) return !1;
				const a = (new Date).getTime() / 1e3 - t.created;
				return a >= i && a <= 1.25 * i
			}
			var l;

			function d(e) {
				const t = c(e);
				return function(e) {
					return Object(n.c)(e, {
						experimentEligibilitySelector: o,
						experimentName: s.Tc
					}) === s.Ad.Enabled
				}(e) ? l.Achievements : t === s.Bd.ControlBanner ? l.CommunitySpacesControl : t === s.Bd.EnabledBanner ? l.CommunitySpaces : null
			}! function(e) {
				e.Achievements = "achievements", e.CommunitySpaces = "communitySpaces", e.CommunitySpacesControl = "communitySpaces--control"
			}(l || (l = {}))
		},
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			})), a.d(t, "b", (function() {
				return c
			}));
			var s = a("./src/reddit/constants/experiments.ts"),
				n = a("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
					return !(Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.de
					}) === s.yd)
				},
				c = e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.ee
				}) === s.yd
		},
		"./src/reddit/selectors/experiments/inAppNotification.ts": function(e, t, a) {
			"use strict";
			a.d(t, "d", (function() {
				return i
			})), a.d(t, "c", (function() {
				return o
			})), a.d(t, "b", (function() {
				return l
			})), a.d(t, "a", (function() {
				return d
			}));
			var s = a("./src/reddit/constants/experiments.ts"),
				n = a("./src/reddit/helpers/chooseVariant/index.ts"),
				r = a("./src/reddit/selectors/experiments/index.ts"),
				c = a("./src/reddit/selectors/experiments/utils.ts");
			const i = e => Object(n.c)(e, {
					experimentName: s.Vb,
					experimentEligibilitySelector: r.e
				}) === s.gb.topOfFeedWithCTAs,
				o = e => (e => Object(n.c)(e, {
					experimentName: s.Vb,
					experimentEligibilitySelector: r.e
				}) === s.gb.topOfFeedNoCTAs)(e) || i(e),
				l = e => Object(n.c)(e, {
					experimentName: s.Vb,
					experimentEligibilitySelector: r.e
				}) === s.gb.floatInFeed,
				d = e => {
					const t = Object(n.c)(e, {
						experimentName: s.Vb,
						experimentEligibilitySelector: r.e
					});
					return Object(c.a)(t)
				}
		},
		"./src/reddit/selectors/experiments/signupUpsellExperiment.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			})), a.d(t, "c", (function() {
				return u
			})), a.d(t, "e", (function() {
				return m
			})), a.d(t, "b", (function() {
				return p
			})), a.d(t, "d", (function() {
				return b
			})), a.d(t, "f", (function() {
				return h
			}));
			var s = a("./node_modules/reselect/es/index.js"),
				n = a("./src/reddit/constants/experiments.ts"),
				r = a("./src/reddit/helpers/chooseVariant/index.ts"),
				c = a("./src/reddit/selectors/meta.ts"),
				i = a("./src/reddit/selectors/experiments/index.ts");
			const o = Object(s.a)(c.h, c.d, i.e, (e, t, a) => !e && !t && !a);

			function l(e, t) {
				return a => Object(r.c)(a, {
					experimentName: e,
					experimentEligibilitySelector: o,
					throttledVariants: {
						[n.Ec.Bottom_cell_dismissible]: e,
						[n.Ec.Bottom_cell_dismissible_immediate_trigger]: e,
						[n.Ec.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const d = l(n.Fb, !0),
				u = l(n.Gb, !0),
				m = l(n.Hb, !0),
				p = l(n.Fb, !1),
				b = l(n.Gb, !1),
				h = l(n.Hb, !1)
		},
		"./src/reddit/selectors/features/liveBar/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			}));
			var s = a("./node_modules/reselect/es/index.js"),
				n = a("./src/lib/initializeClient/installReducer.ts"),
				r = a("./src/reddit/reducers/features/liveBar/index.ts");
			Object(n.a)({
				features: {
					liveBar: r.a
				}
			});
			const c = Object(s.a)(e => {
				var t;
				return null === (t = e.features) || void 0 === t ? void 0 : t.liveBar
			}, e => {
				var t;
				return null !== (t = null == e ? void 0 : e.talks) && void 0 !== t ? t : []
			})
		},
		"./src/reddit/selectors/gold/marketplace/claimFlow.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var s = a("./src/lib/initializeClient/installReducer.ts"),
				n = a("./src/reddit/reducers/features/marketplace/index.ts");
			Object(s.a)({
				features: {
					marketplace: n.a
				}
			});
			const r = e => {
					var t, a;
					const s = null === (a = null === (t = e.features) || void 0 === t ? void 0 : t.marketplace) || void 0 === a ? void 0 : a.feedUnit;
					return (null == s ? void 0 : s.id) ? "claim_success" === c(e, s.id) ? null : s : null
				},
				c = (e, t) => {
					var a, s, n;
					return (null === (n = null === (s = null === (a = e.features) || void 0 === a ? void 0 : a.marketplace) || void 0 === s ? void 0 : s.claimStatus) || void 0 === n ? void 0 : n[t]) || null
				}
		},
		"./src/reddit/selectors/inAppNotifications.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return n
			})), a.d(t, "c", (function() {
				return r
			})), a.d(t, "a", (function() {
				return c
			}));
			const s = e => e.inAppNotifications,
				n = e => {
					var t;
					const a = s(e).notifications;
					if (null === (t = null == a ? void 0 : a.notifications) || void 0 === t ? void 0 : t.length) return {
						notifications: a.notifications,
						id: a.id
					}
				},
				r = e => {
					return s(e).shouldHideInAppNotifications
				},
				c = e => {
					return s(e).inFeedPosition
				}
		},
		"./src/reddit/selectors/live.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return s
			})), a.d(t, "a", (function() {
				return n
			}));
			const s = e => e.live.featured,
				n = e => e.live.announcements
		},
		"./src/reddit/selectors/subredditLeaderboard.ts": function(e, t, a) {
			"use strict";
			a.d(t, "c", (function() {
				return r
			})), a.d(t, "b", (function() {
				return c
			})), a.d(t, "d", (function() {
				return i
			})), a.d(t, "a", (function() {
				return o
			}));
			var s = a("./src/reddit/constants/subredditLeaderboard.ts"),
				n = a("./src/reddit/selectors/category.ts");
			const r = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasPreviousPage,
				c = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasNextPage,
				i = (e, t) => t === s.q ? s.p : t === s.m ? s.l : e || s.c,
				o = (e, t) => {
					const a = e.subreddits.rankings,
						s = t && Object(n.e)(e, {
							categoryName: t
						}),
						r = a[i(s && s.id || null, t)];
					return !(!r || !r.length)
				}
		},
		"./src/redditGQL/operations/Frontpage.json": function(e) {
			e.exports = JSON.parse('{"id":"0a33ae32bdf9"}')
		},
		"./src/redditGQL/operations/GetNearbySubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"aff6d12aa0c2"}')
		},
		"./src/redditGQL/operations/TopSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"6104afd3cdeb"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Frontpage.f85781879be6dc554e28.js.map