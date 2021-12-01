// https://www.redditstatic.com/desktop2x/CommentsPage.793a5017d61b47e287ca.js
// Retrieved at 12/1/2021, 10:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPage"], {
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
					o.prototype.THROTTLE_TIMEOUT = 100, o.prototype.POLL_INTERVAL = null, o.prototype.observe = function(e) {
						if (!this._observationTargets.some((function(t) {
								return t.element == e
							}))) {
							if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: e,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, o.prototype.unobserve = function(e) {
						this._observationTargets = this._observationTargets.filter((function(t) {
							return t.element != e
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, o.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, o.prototype.takeRecords = function() {
						var e = this._queuedEntries.slice();
						return this._queuedEntries = [], e
					}, o.prototype._initThresholds = function(e) {
						var t = e || [0];
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, s) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== s[t - 1]
						}))
					}, o.prototype._parseRootMargin = function(e) {
						var t = (e || "0px").split(/\s+/).map((function(e) {
							var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
							if (!t) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(t[1]),
								unit: t[2]
							}
						}));
						return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
					}, o.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(e, "resize", this._checkForIntersections, !0), r(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, o.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, o.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							s = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(o) {
							var r = o.element,
								i = a(r),
								d = this._rootContainsTarget(r),
								c = o.entry,
								l = t && d && this._computeTargetAndRootIntersection(r, s),
								m = o.entry = new n({
									time: e.performance && performance.now && performance.now(),
									target: r,
									boundingClientRect: i,
									rootBounds: s,
									intersectionRect: l
								});
							c ? t && d ? this._hasCrossedThreshold(c, m) && this._queuedEntries.push(m) : c && c.isIntersecting && this._queuedEntries.push(m) : this._queuedEntries.push(m)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, o.prototype._computeTargetAndRootIntersection = function(s, n) {
						if ("none" != e.getComputedStyle(s).display) {
							for (var o, r, i, d, l, m, p, u, h = a(s), b = c(s), g = !1; !g;) {
								var f = null,
									x = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == x.display) return;
								if (b == this.root || b == t ? (g = !0, f = n) : b != t.body && b != t.documentElement && "visible" != x.overflow && (f = a(b)), f && (o = f, r = h, i = void 0, d = void 0, l = void 0, m = void 0, p = void 0, u = void 0, i = Math.max(o.top, r.top), d = Math.min(o.bottom, r.bottom), l = Math.max(o.left, r.left), m = Math.min(o.right, r.right), u = d - i, !(h = (p = m - l) >= 0 && u >= 0 && {
										top: i,
										bottom: d,
										left: l,
										right: m,
										width: p,
										height: u
									}))) break;
								b = c(b)
							}
							return h
						}
					}, o.prototype._getRootRect = function() {
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
					}, o.prototype._expandRectByRootMargin = function(e) {
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
					}, o.prototype._hasCrossedThreshold = function(e, t) {
						var s = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							n = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (s !== n)
							for (var o = 0; o < this.thresholds.length; o++) {
								var r = this.thresholds[o];
								if (r == s || r == n || r < s != r < n) return !0
							}
					}, o.prototype._rootIsInDom = function() {
						return !this.root || d(t, this.root)
					}, o.prototype._rootContainsTarget = function(e) {
						return d(this.root || t, e)
					}, o.prototype._registerInstance = function() {
						s.indexOf(this) < 0 && s.push(this)
					}, o.prototype._unregisterInstance = function() {
						var e = s.indexOf(this); - 1 != e && s.splice(e, 1)
					}, e.IntersectionObserver = o, e.IntersectionObserverEntry = n
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
						o = n.width * n.height;
					this.intersectionRatio = s ? o / s : this.isIntersecting ? 1 : 0
				}

				function o(e, t) {
					var s, n, o, r = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (s = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, o = null, function() {
						o || (o = setTimeout((function() {
							s(), o = null
						}), n))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function r(e, t, s, n) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, s, n || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, s)
				}

				function i(e, t, s, n) {
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
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var s = "Expected a function";
			e.exports = function(e, t, n) {
				if ("function" != typeof e) throw new TypeError(s);
				return setTimeout((function() {
					e.apply(void 0, n)
				}), t)
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseDelay.js"),
				o = s("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return n(e, 1, t)
				}));
			e.exports = o
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseTimes.js"),
				o = s("./node_modules/lodash/_castFunction.js"),
				r = s("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				a = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > i) return [];
				var s = a,
					c = d(e, a);
				t = o(t), e -= a;
				for (var l = n(c, t); ++s < e;) t(s);
				return l
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, s, n) {
				var o = s ? s.call(n, e, t) : void 0;
				if (void 0 !== o) return !!o;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var r = Object.keys(e),
					i = Object.keys(t);
				if (r.length !== i.length) return !1;
				for (var a = Object.prototype.hasOwnProperty.bind(t), d = 0; d < r.length; d++) {
					var c = r[d];
					if (!a(c)) return !1;
					var l = e[c],
						m = t[c];
					if (!1 === (o = s ? s.call(n, l, m, c) : void 0) || void 0 === o && l !== m) return !1
				}
				return !0
			}
		},
		"./src/lib/makeLinkedPostsListingKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t) => {
				let s = `linkedPosts--[post:'${e}']`;
				return t && (s += "--fallback"), s
			}
		},
		"./src/lib/makeNsfwLinkedPostsListingKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				return `nsfwLinkedPosts--[post:'${e}']`
			}
		},
		"./src/lib/promo/withShowSignupUpsell.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var n = s("./node_modules/react/index.js");

			function o() {
				return window
			}
			var r = s("./node_modules/lodash/debounce.js"),
				i = s.n(r),
				a = s("./src/reddit/constants/elementIds.ts"),
				d = s("./src/reddit/constants/experiments.ts"),
				c = s("./src/reddit/hooks/usePromoContext.ts"),
				l = s("./src/reddit/constants/promo.ts"),
				m = s("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts");
			var p = function() {
					const e = Object(m.a)(d.Xb.Bottom_cell),
						t = Object(m.a)(d.Xb.Bottom_cell_dismissible),
						s = Object(m.a)(d.Xb.Bottom_cell_dismissible_immediate_trigger),
						n = Object(m.a)(d.Xb.Bottom_cell_signup_upsell_copy),
						o = Object(m.a)(d.Xb.Bottom_cell_surprise_install_copy),
						r = Object(m.a)(d.Xb.Bottom_sheet);
					return e || n || o ? l.b.SignupUpsellCell : t || s ? l.b.SignupUpsellCellDismissible : r ? l.b.SignupUpsellBottomSheet : null
				},
				u = s("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const h = 250,
				b = 1e3;

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function f(e) {
				const t = e.displayName || e.name || "Component";

				function s(t) {
					const s = function(e = h) {
						const {
							showPromo: t
						} = Object(c.a)(), s = p(), r = Object(u.a)(s), l = Object(m.a)(d.Xb.Bottom_cell_dismissible_immediate_trigger);
						return n.useMemo(() => i()(() => {
							if (!r && s) {
								const e = document.getElementById(a.d),
									n = e ? e.scrollTop : o().scrollY,
									r = o().innerHeight,
									i = r / 3,
									d = 2 * r;
								n >= (l ? i : d) && t(s)
							}
						}, e, {
							maxWait: b
						}), [l, r, s, t, e])
					}();
					return n.createElement(e, g({
						showSignupUpsell: s
					}, t))
				}
				return s.displayName = `withShowSignupUpsell(${t})`, s
			}
		},
		"./src/reddit/actions/commentsListTruncated/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/commentsListTruncated/constants.ts");
			const r = Object(n.a)(o.a),
				i = Object(n.a)(o.b)
		},
		"./src/reddit/actions/dismissedTruncationList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const r = Object(n.a)(o.a)
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "b", (function() {
				return P
			}));
			var n, o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/performanceTimings/index.tsx"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(n || (n = {}));
			var c, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var p = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				u = s("./src/reddit/selectors/platform.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(o.a)(i.g),
				g = Object(o.a)(i.e),
				f = Object(o.a)(i.h),
				x = Object(o.a)(i.c),
				C = Object(o.a)(i.f),
				v = Object(o.a)(i.j),
				O = Object(o.a)(i.i),
				y = () => async (e, t, {
					gqlContext: s
				}) => {
					const o = t(),
						r = Object(p.e)(o),
						i = Object(p.d)(o),
						c = Object(h.J)(o);
					if (r || !i) return;
					e(f());
					let u = !1;
					try {
						const t = c ? n.LoggedInGeo : n.LoggedOutGeo,
							o = await ((e, t, s) => Object(a.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (o.ok && o.body) {
							const {
								data: t
							} = o.body;
							if (E(t)) {
								if (k(t)) {
									e(x({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), u = !0
								} else if (w(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: o,
											category: r
										} = s.focusRecommendations[0],
										i = [n, o],
										a = Object(m.d)(i),
										d = Object(l.b)(i),
										c = Object(m.c)(n),
										p = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [o.id],
											subreddits: a,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: r,
											lastLoadedEnv: "client"
										};
									e(b(p)), u = !0
								}
							} else u = !1
						}
					} catch (C) {
						u = !1
					}
					u || e(g({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, k = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, w = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !k(e) && n === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, P = () => async (e, t, s) => {
					var n, o;
					const i = t(),
						a = Object(p.g)(i);
					if (Object(p.f)(i) || null === a || "client" === a) {
						const s = null === (o = null === (n = Object(u.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === o ? void 0 : o.route.chunk,
							a = Object(h.K)(i);
						return Object(r.i)(() => e(y()), {
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
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return tt
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return st
			})), s.d(t, "commentsPagePending", (function() {
				return nt
			})), s.d(t, "commentsPageLoaded", (function() {
				return ot
			})), s.d(t, "commentsPageFailed", (function() {
				return rt
			})), s.d(t, "commentsPageRemoveLoadedFull", (function() {
				return it
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return at
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return dt
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return ct
			})), s.d(t, "commentsPageRequested", (function() {
				return lt
			})), s.d(t, "commentsPageDataRequested", (function() {
				return mt
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return pt
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return ut
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react-router-redux/es/index.js"),
				o = s("./src/reddit/actions/category/index.ts"),
				r = s("./src/reddit/actions/discoveryUnit.ts"),
				i = s("./src/reddit/actions/pages/subreddit.ts"),
				a = s("./src/reddit/actions/shortcuts/active.ts"),
				d = s("./src/reddit/actions/subredditSettings.ts"),
				c = s("./src/reddit/endpoints/governance/posts.ts"),
				l = s("./src/reddit/endpoints/page/commentsPage.ts"),
				m = s("./src/reddit/endpoints/page/subredditPage.ts"),
				p = s("./src/reddit/endpoints/profile/info.ts"),
				u = s("./src/reddit/models/Post/index.ts"),
				h = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/pageTitle.ts"),
				g = s("./src/reddit/actions/economics/helpers/async.ts"),
				f = s("./src/reddit/actions/externalAccount.ts"),
				x = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				C = s("./src/reddit/actions/platform.ts"),
				v = s("./src/reddit/actions/post.ts"),
				O = s("./src/reddit/actions/profile/index.ts"),
				y = s("./src/reddit/actions/subreddit.ts"),
				E = s("./src/reddit/actions/toaster.ts"),
				k = s("./src/reddit/constants/adEvents.ts"),
				w = s("./src/reddit/constants/graphql.ts"),
				P = s("./src/reddit/constants/parameters.ts"),
				j = s("./src/reddit/constants/posts.ts"),
				I = s("./src/reddit/helpers/commentList/index.ts"),
				_ = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				S = s("./src/reddit/models/Comment/index.ts"),
				T = s("./src/reddit/models/Media/index.ts"),
				L = s("./src/reddit/models/Subreddit/index.ts"),
				N = s("./src/reddit/models/User/index.ts"),
				R = s("./src/reddit/selectors/category.ts"),
				M = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				F = s("./src/reddit/selectors/experiments/postSeo.ts"),
				A = s("./node_modules/reselect/es/index.js"),
				B = s("./src/reddit/constants/experiments.ts"),
				D = s("./src/reddit/helpers/chooseVariant/index.ts"),
				V = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				W = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				U = s("./src/reddit/selectors/platform.ts"),
				H = s("./node_modules/fbt/lib/FbtPublic.js"),
				K = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				q = s("./src/reddit/selectors/user.ts");
			const G = new Set([u.g.AntiEvilOps, u.g.AutomodFiltered, u.g.CommunityOps, u.g.ContentTakedown, u.g.CopyrightTakedown, u.g.Moderator, u.g.Reddit]),
				Y = new Set([u.g.Author, u.g.AuthorDeleted]),
				z = Object(A.a)(V.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return G.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = H.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let n = Object(K.b)(e);
					return n || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== T.o.TEXT || (n = e.media.markdownContent), n === s
				}),
				Q = Object(A.a)(V.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return Y.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = H.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let n = Object(K.b)(e);
					return n || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== T.o.TEXT || (n = e.media.markdownContent), n === s
				}),
				J = Object(A.a)(q.k, V.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				X = Object(A.a)(U.f, V.a, z, Q, W.a, J, W.b, (e, t, s, n, o, r, i) => {
					if (!e || !t || o) return !1;
					if (n) return !0;
					const a = r || i,
						d = t.score >= 2 || t.numComments >= 2;
					return !(!s || a || d)
				});
			var Z = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				$ = s("./src/reddit/selectors/posts.ts"),
				ee = s("./src/reddit/selectors/subreddit.ts"),
				te = s("./src/lib/makeActionCreator/index.ts"),
				se = s("./src/lib/makeCommentsPageKey/index.ts"),
				ne = s("./src/reddit/actions/ads/index.ts"),
				oe = s("./src/reddit/helpers/canonicalUrls.ts"),
				re = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ie = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				ae = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				de = s("./src/lib/performanceTimings/index.tsx"),
				ce = s("./src/reddit/actions/gold/powerups.ts"),
				le = s("./src/lib/makeListingKey/index.ts"),
				me = s("./src/reddit/actions/googleQASchema/constants.ts");
			const pe = Object(te.a)(me.b),
				ue = Object(te.a)(me.a);
			var he = s("./src/reddit/actions/linkedPosts/constants.ts");
			const be = Object(te.a)(he.a),
				ge = Object(te.a)(he.c),
				fe = Object(te.a)(he.b);
			var xe = s("./src/lib/makeGqlRequest/index.ts"),
				Ce = (s("./src/redditGQL/operations/OtherDiscussions.json"), s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts")),
				ve = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Oe = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				ye = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var Ee = ({
				getState: e,
				onFailure: t,
				onSuccess: s,
				postId: n,
				response: o
			}) => {
				if (!o.ok) return void t(o.error);
				const r = o.body,
					{
						post: i
					} = r && r.data,
					a = e(),
					d = Object(le.a)(n, null, {
						isOtherDiscussions: !0
					});
				if (i) {
					if (i.otherDiscussions && i.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = i, {
							postFlair: o,
							postIds: r,
							posts: c,
							profiles: l,
							subreddits: m
						} = (e => {
							const t = {
									postFlair: {},
									postIds: [],
									posts: {},
									profiles: {},
									subreddits: {}
								},
								s = e => {
									const s = Object(ve.f)(e);
									t.posts[s.id] = s;
									const {
										crosspostRoot: n
									} = e;
									if (n && n.type === u.a.Post && n.postInfo) {
										const e = Object(ve.f)(n.postInfo);
										t.posts[e.id] = e
									}
									return Object(u.l)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(Oe.a)(e.profile)) : Object(u.n)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(ye.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(Ce.a)(e.subreddit))), s.id
								};
							if (e && e.edges)
								for (const {
										node: n
									} of e.edges) {
									const e = s(n);
									e && t.postIds.push(e)
								}
							return t
						})(e);
						s({
							count: t,
							key: d,
							meta: a.meta,
							postFlair: o,
							postId: n,
							postIds: r,
							posts: c,
							profiles: l,
							subreddits: m
						})
					}
				} else s({
					count: 0,
					key: d,
					meta: a.meta,
					postFlair: {},
					postId: n,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			};
			const ke = Object(te.a)(x.a),
				we = Object(te.a)(x.b),
				Pe = Object(te.a)(x.c);
			var je = s("./src/reddit/actions/subreddit/constants.ts"),
				Ie = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var _e = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: n,
					post: o
				}) => {
					try {
						t({
							altText: o && o.media && (o.media.still && o.media.still.altText || o.media.obfuscated && o.media.obfuscated.altText) || null,
							postId: n
						})
					} catch (r) {
						s(r)
					}
				},
				Se = s("./src/lib/makeLinkedPostsListingKey/index.ts");
			var Te = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: n,
					post: o
				}) => {
					try {
						const s = [],
							r = {},
							i = {};
						if (!o || !o.linked) return;
						const a = e(),
							d = a.posts && a.posts.models,
							c = Object(Se.a)(n),
							l = o.linked.posts && o.linked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !d.hasOwnProperty(e.id)) {
								const t = Object(ve.a)(e);
								r[e.id] = t.post, t.crosspost && !d.hasOwnProperty(t.crosspost.id) && (r[t.crosspost.id] = t.crosspost)
							}
							if (Object(u.n)(e)) {
								const {
									subreddit: t
								} = e;
								i[t.id] = Object(ye.a)(t)
							}
						}
						t({
							dist: o.linked.posts && o.linked.posts.dist || null,
							key: c,
							meta: a.meta,
							posts: r,
							postIds: s,
							subreddits: i
						})
					} catch (r) {
						s(r)
					}
				},
				Le = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var Ne = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var Re = ({
					isLinkedPostsFallback: e,
					getState: t,
					onSuccess: s,
					onFailure: n,
					options: o,
					postId: r,
					subreddit: i
				}) => {
					try {
						if (!i) return;
						const n = i.elements || i.posts,
							a = t(),
							d = ((e, t) => {
								const {
									edges: s
								} = e, n = s.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: n
								}
							})(n, a.posts && a.posts.models),
							c = Object(Le.a)(d),
							l = Ne(c),
							m = n.edges.reduce((e, t) => (t.node.id && t.node.id !== r && e.push(t.node.id), e), []),
							{
								range: p,
								sort: u,
								subredditName: b
							} = o,
							g = e && r ? Object(Se.a)(r, !0) : Object(le.a)(b, h.W[u], {
								t: p
							});
						s({
							dist: n.dist,
							key: g,
							meta: a.meta,
							postIds: m,
							posts: l
						})
					} catch (a) {
						n(a)
					}
				},
				Me = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				Fe = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var Ae = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: n,
					post: o
				}) => {
					try {
						const s = [],
							r = {},
							i = {};
						if (!o || !o.nsfwLinked) return;
						const a = e(),
							d = a.posts && a.posts.models,
							c = Object(Fe.a)(n),
							l = o.nsfwLinked.posts && o.nsfwLinked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !d.hasOwnProperty(e.id)) {
								const t = Object(ve.a)(e);
								r[e.id] = t.post, t.crosspost && !d.hasOwnProperty(t.crosspost.id) && (r[t.crosspost.id] = t.crosspost)
							}
							if (Object(u.n)(e)) {
								const {
									subreddit: t
								} = e;
								i[t.id] = Object(ye.a)(t)
							}
						}
						t({
							dist: o.nsfwLinked.posts && o.nsfwLinked.posts.dist || null,
							key: c,
							meta: a.meta,
							posts: r,
							postIds: s,
							subreddits: i
						})
					} catch (r) {
						s(r)
					}
				},
				Be = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const De = Object(te.a)(Be.b),
				Ve = Object(te.a)(Be.a);
			var We = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const Ue = Object(te.a)(We.b),
				He = Object(te.a)(We.a),
				Ke = Object(te.a)(je.j),
				qe = Object(te.a)(je.i),
				Ge = (Object(te.a)(je.r), Object(te.a)(je.q), e => async (t, s, {
					gqlContext: n
				}) => {
					var o, r, i, a;
					const {
						includeNSFWListingBelowExperiment: d,
						includeListingBelowExperiment: c,
						includeOtherDiscussions: l,
						includePostFeed: m,
						includePostQASchemaEligibilityFlag: p,
						listingBelowExperimentVariant: u,
						postId: b,
						range: g,
						sort: f,
						subredditName: x
					} = e, C = Object(le.a)(b, null, {
						isOtherDiscussions: !0
					}), v = s(), O = Object($.A)(v, {
						listingKey: C
					}), y = l && (!O || 0 === O.length), E = Object(le.a)(x, h.W[f], {
						t: g
					}), k = Object($.A)(v, {
						listingKey: E
					}), w = m && (c || !k || 0 === k.length), P = c, j = d, I = Object($.H)(v, {
						postId: b
					}), _ = !!I && !!I.media && (Object(T.J)(I.media) || Object(T.F)(I.media)) && !I.media.altText;
					if (!(y || w || P || j || _ || p)) return;
					y && t(Pe({
						key: C
					}));
					const S = await ((e, t) => Object(xe.a)(e, {
							...Ie,
							variables: t
						}))(n(), e),
						L = S.body,
						N = Object(Me.a)(u),
						R = P && !!(null === (i = null === (r = null === (o = L.data) || void 0 === o ? void 0 : o.post) || void 0 === r ? void 0 : r.linked) || void 0 === i ? void 0 : i.isEligible),
						M = P && (N || !R);
					p && (S.ok ? L.data && L.data.post && t(pe({
						postId: b,
						isEligibleForQASchema: null !== (a = L.data.post.isEligibleForQASchema) && void 0 !== a && a
					})) : t(ue())), y && Ee({
						getState: s,
						onFailure: e => t(ke(e)),
						onSuccess: e => t(we(e)),
						postId: b,
						response: S
					}), (w && !P || M) && (S.ok ? L.data && Re({
						getState: s,
						isLinkedPostsFallback: M,
						onFailure: e => t(qe(e)),
						onSuccess: e => t(Ke(e)),
						options: e,
						postId: b,
						subreddit: L.data.subreddit
					}) : t(qe(S.error))), P && R && !N && S.ok && L.data && Te({
						getState: s,
						onFailure: e => t(fe(e)),
						onSuccess: e => t(ge(e)),
						postId: b,
						post: L.data.post
					}), j && S.ok && Ae({
						getState: s,
						onFailure: e => t(He(e)),
						onSuccess: e => t(Ue(e)),
						postId: b,
						post: L.data.post
					}), _ && S.ok && L.data && _e({
						getState: s,
						onFailure: e => t(Ve(e)),
						onSuccess: e => t(De(e)),
						postId: b,
						post: L.data.post
					}), P && t(be({
						postId: b,
						isEligibleForLinkedPosts: R
					}))
				}),
				Ye = e => {
					var t, s;
					const n = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						o = n && Object(u.t)(n),
						{
							sortToUse: r
						} = Object(_.a)(e, o);
					return (!r || r === h.u.CONFIDENCE) && Object(D.c)(e, {
						experimentEligibilitySelector: () => Object(q.J)(e),
						experimentName: B.z
					}) === B.B.Enabled
				};
			var ze = s("./src/reddit/selectors/chatPost.ts"),
				Qe = s("./src/reddit/selectors/seo/index.ts"),
				Je = s("./src/reddit/actions/pages/constants.ts"),
				Xe = s("./src/lib/initializeClient/installReducer.ts"),
				Ze = s("./src/reddit/reducers/pages/comments/index.ts"),
				$e = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				et = s("./src/reddit/selectors/i18n/index.ts");
			Object(Xe.a)({
				pages: {
					comments: Ze.a
				}
			});
			const tt = 25,
				st = 100,
				nt = Object(te.a)(Je.h),
				ot = Object(te.a)(Je.f),
				rt = Object(te.a)(Je.e),
				it = Object(te.a)(Je.i),
				at = (e, t, s) => {
					const n = !e,
						o = Object($.H)(t, {
							postId: s
						}).belongsTo,
						r = Object(ee.I)(t, {
							identifier: o
						}),
						i = Object(Qe.c)(t, {
							identifier: o
						}),
						a = !!Object(Me.c)(t),
						d = Object(et.a)(t),
						c = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return a ? (c.listingBelow = i || n, c.postFeed = c.listingBelow) : d ? c.nsfwListingBelow = !0 : c.postFeed = (i || n) && (!Object(L.h)(r) && !Object(ze.d)(t, {
						postId: s
					}) && !!r || !Object(U.i)(t) && Object(F.e)(t)), e && (c.postQASchema = Object(F.d)(t)), c
				},
				dt = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				ct = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				lt = e => async (t, s) => {
					var r, i;
					const {
						partialPostId: d,
						partialCommentId: c
					} = e.params, {
						subredditName: l
					} = e.params || "", m = d ? Object(u.t)(d) : "", p = c && Object(S.h)(c), {
						path: g,
						queryParams: E
					} = e, k = Object(x.d)(g), {
						instanceId: I
					} = E, {
						hasSortParam: L,
						sortToUse: N
					} = Object(_.a)(s(), m), M = null === (i = null === (r = Object(U.b)(s())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === i ? void 0 : i.route.chunk, F = ["context", "depth", "limit", P.f].reduce((e, t) => {
						const s = parseInt(E[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: l,
						hasSortParam: L,
						instanceId: I,
						include_categories: !0
					});
					L && (F.sort = N), F.onOtherDiscussions = k, t(v.r(m)), await t(mt(m, p, F, N));
					const A = s().posts.models[m],
						V = Object(q.K)(s());
					if (A && "subreddit" === A.belongsTo.type) {
						const e = A.belongsTo.id,
							s = Object(de.i)(() => t(Object(ce.m)(e, {
								fullData: !0,
								includeIdentity: V
							})), {
								name: "subredditPowerupsRequested",
								page: M,
								isLoggedIn: V
							});
						await s
					}
					if (A) {
						const r = ((e, t) => {
								const s = Object($.U)(e, {
										postId: t
									}),
									n = Object($.H)(e, {
										postId: t
									});
								return s && n ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), m),
							i = Object(ee.I)(s(), {
								identifier: A.belongsTo
							});
						if (i && (e => B.Ge.Redirect === Object(D.b)(e, {
								experimentEligibilitySelector: X,
								experimentName: B.ye
							}))(s())) return void t(Object(n.c)(i.url));
						if ((A.media && A.media.type) === T.o.LIVEVIDEO) {
							const e = `/rpan${A.belongsTo.type===j.a.SUBREDDIT?i.url:"/"}${Object(u.u)(A.id)}`;
							return void t(Object(n.c)(e))
						}
						if (A.belongsTo.type !== j.a.SUBREDDIT || A.isSponsored) {
							if (A.belongsTo.type === j.a.PROFILE) {
								const e = Object(de.i)(() => t(O.d(i.name)), {
									name: "getProfileInfo",
									page: M,
									isLoggedIn: V
								});
								await e
							}
						} else {
							if (!!!Object(ee.P)(s(), {
									subredditId: A.belongsTo.id
								})) {
								const e = Object(de.i)(() => t(y.o(i.name)), {
									name: "getSubredditRules",
									page: M,
									isLoggedIn: V
								});
								await e
							}
						}
						const d = at(!1, s(), m),
							c = k;
						if (dt(c, d)) {
							Object(re.d)(re.a.LinkedPosts);
							const e = Object(re.c)(re.a.LinkedPosts);
							Object(re.d)(re.a.NsfwLinkedPosts);
							const n = Object(re.c)(re.a.NsfwLinkedPosts),
								o = {
									adContext: {
										layout: w.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: m
									},
									range: h.fc.WEEK.toUpperCase(),
									sort: h.P.TOP,
									subredditName: i.name
								},
								r = {
									postId: m
								},
								a = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(Me.c)(s())
								},
								l = {
									nsfwListingBelowCorrelationId: n,
									nsfwListingBelowExperimentVariant: Object($e.a)(s())
								},
								p = ct(d);
							Object(de.i)(() => t(Ge({
								...r,
								...o,
								...a,
								...l,
								...p,
								includeOtherDiscussions: c
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: V,
								page: M
							});
							0
						}
						t(Object(f.p)()), t(C.m({
							title: r
						}));
						const l = s().posts.instances[m] ? e.queryParams.instanceId : A.postId;
						t(Object(a.b)(l)); {
							const e = Object(R.d)(s(), {
								subredditName: i.name
							});
							await Promise.all(e.map(e => t(o.c(e))))
						}
					} else t(C.m({
						title: b.d()
					}));
					const {
						routePrefix: W
					} = e.params;
					j.b[W] === j.a.PROFILE ? Object(oe.d)(s(), t, e) : Object(oe.b)(s(), t, e)
				}, mt = (e, t, s, n) => async (o, a, d) => {
					var u, b;
					const f = a(),
						x = Object(se.a)(e, t, s),
						{
							subredditName: O
						} = s,
						y = f.pages.comments.keyToHeadCommentId.hasOwnProperty(x),
						w = f.pages.comments.api.fullyLoaded[x],
						P = f.pages.comments.api.error[x],
						j = f.pages.comments.api.pending[x],
						_ = !Object(q.J)(f),
						S = Object(q.k)(f),
						T = n === h.u.CHAT,
						L = !!f.platform.lastPage;
					if ((j || y && !P) && !(T && L)) {
						if (y && !f.sidebarPromotedPosts.firstFetch) {
							const e = Object(U.i)(f) ? ae.a.COMMENTS_OVERLAY : ae.a.COMMENTS;
							window.addEventListener("load", () => {
								o(Object(ne.b)(e))
							})
						}
						return void(w || o(ut(e, t, s)))
					}
					o(r.g());
					const R = f.user.prefs.commentMode;
					o(nt({
						key: x,
						postId: e,
						commentMode: R
					}));
					const F = {
						...s,
						...T ? {
							sort: h.u.LIVE
						} : _ ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object($.H)(a(), {
							postId: e
						});
						t && t.numComments && t.numComments > st && (F.truncate = tt)
					}
					const A = null === (b = null === (u = Object(U.b)(f)) || void 0 === u ? void 0 : u.routeMatch) || void 0 === b ? void 0 : b.route.chunk,
						B = Object(de.i)(() => Object(l.a)(d.apiContext(), e, t, F, Object(M.a)(a()), Ye(a())), {
							name: "fetchCommentsPage",
							isLoggedIn: !_,
							page: A
						}),
						D = !_ && S && Object(de.i)(() => Object(p.d)(d.gqlContext(), Object(N.e)(S)), {
							name: "fetchProfileKarma",
							isLoggedIn: !_,
							page: A
						}) || null,
						[V, W] = await Promise.all([B, D]);
					let H;
					if (o(Object(C.n)(V.status)), V.ok) {
						const t = Object.keys(V.body.posts).filter(e => !!V.body.posts[e].isMeta),
							s = V.body.posts[e];
						if (t.length) {
							const e = Object(de.i)(() => Object(c.a)(d.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: A,
									isLoggedIn: !_
								}),
								n = await e;
							n.ok && (H = n.body)
						}
						if (W && W.ok) {
							const {
								data: e
							} = W.body, t = {
								karma: {
									...p.a
								}
							};
							if (Object(p.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							V.body && V.body.account && Object.assign(V.body.account, t)
						}
						const n = Object(I.a)(V.body, e, f);
						o(ot({
							key: x,
							postId: e,
							meta: f.meta,
							governance: H,
							shouldCollapse: n,
							...V.body
						}))
					} {
						const n = Object($.H)(a(), {
							postId: e
						});
						n && V.body.comments && Object.keys(V.body.comments).length < n.numComments ? o(ut(e, t, s)) : V.ok && o(pt({
							key: x
						}));
						const r = Object(U.i)(f) ? ae.a.COMMENTS_OVERLAY : ae.a.COMMENTS;
						o(Object(ne.b)(r))
					}
					if (V.ok) {
						o(E.g(x));
						const t = Object($.H)(a(), {
							postId: e
						});
						if (o(v.z(t, k.a.CommentsView)), t && "subreddit" === t.belongsTo.type && V.body.comments) {
							const e = Object(de.i)(() => o(Object(g.a)({
								commentIds: Object.keys(V.body.comments),
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: A,
								isLoggedIn: !_
							});
							await e
						}
					} else {
						let e;
						O && (o(Object(i.subredditPending)({
							key: x
						})), e = await Object(ie.a)("subreddit", () => Object(m.a)(d.apiContext(), O, {})), o(Object(C.n)(e.status)), o(Object(i.handleSubredditPageApiError)(e, O))), o(rt({
							error: V.error,
							key: x,
							...e ? e.body : V.body
						}))
					}
				}, pt = Object(te.a)(Je.g), ut = (e, t, s) => async (n, o, r) => {
					const i = Object(se.a)(e, t, s),
						a = o(),
						c = Object(q.K)(a),
						m = Object(q.k)(a),
						u = Object(l.a)(r.apiContext(), e, t, s, Object(M.a)(a), Ye(a)),
						h = c && m && Object(p.d)(r.gqlContext(), Object(N.e)(m)) || null,
						[b, f] = await Promise.all([u, h]);
					if (n(Object(C.n)(b.status)), b.ok) {
						if (f && f.ok) {
							const {
								data: e
							} = f.body, t = {
								karma: {
									...p.a
								}
							};
							if (Object(p.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							b.body && b.body.account && Object.assign(b.body.account, t)
						}
						const t = Object(I.a)(b.body, e, a);
						n(ot({
							key: i,
							postId: e,
							meta: a.meta,
							shouldCollapse: t,
							...b.body
						})), n(pt({
							key: i
						}));
						const s = o().posts.models[e],
							r = s && Object($.U)(o(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && r && Object(Z.a)(a, {
							subredditId: r.id
						}) && n(Object(d.h)(r.name, r.id)), s && "subreddit" === s.belongsTo.type && b.body.comments && await n(Object(g.a)({
							commentIds: Object.keys(b.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else n(rt({
						error: b.error,
						key: i,
						...b.body
					}))
				}
		},
		"./src/reddit/actions/shortcuts/active.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/shortcuts/constants.ts");
			const r = Object(n.a)(o.a),
				i = Object(n.a)(o.b)
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/CommentCreation/Loader.m.less": function(e, t, s) {
			e.exports = {
				spacer: "_25blA2uobENRg70NGewwpP",
				isTopLevelComment: "_1chAIcRfDnelKBQkWMIXfl",
				isCommentBoxDesign: "_2mGbbSC1nHodWNoj5NJEYY",
				editor: "_3NuRqPrgRBPdjWunXX3Q8E",
				byline: "_1KZHWcRRAqnSYcyX8FzWOK",
				avatar: "_2gYdPXSssI0f1R9BPp9qsd"
			}
		},
		"./src/reddit/components/CommentCreation/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/RichTextEditor/Placeholder.tsx"),
				c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/selectors/experiments/commentBox.ts"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/components/CommentCreation/Loader.m.less"),
				u = s.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const b = "bottom",
				g = Object(a.c)({
					isCommentBoxDesignEnabled: l.a
				}),
				f = Object(i.b)(g),
				x = ({
					isCommentBoxDesignEnabled: e,
					isTopLevelComment: t,
					children: s
				}) => r.a.createElement("div", {
					className: Object(m.a)(u.a.spacer, {
						[u.a.isCommentBoxDesign]: e,
						[u.a.isTopLevelComment]: t
					})
				}, s),
				C = () => r.a.createElement("div", {
					className: Object(m.a)(u.a.byline, Object(c.a)({
						isLoading: !0
					}))
				}),
				v = () => r.a.createElement("div", {
					className: Object(m.a)(u.a.avatar, Object(c.a)({
						isLoading: !0
					}))
				}),
				O = e => r.a.createElement(x, e, e.isCommentBoxDesignEnabled ? r.a.createElement(v, null) : r.a.createElement(C, null), r.a.createElement(d.a, {
					className: u.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: b
				})),
				y = f(O),
				E = Object(n.a)({
					resolved: {},
					chunkName: () => "RichTextEditor",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/CommentCreation/index.tsx"
					}
				}, {
					ssr: !1
				}),
				k = e => r.a.createElement(E, h({}, e, {
					fallback: r.a.createElement(y, {
						isTopLevelComment: e.isTopLevelComment
					})
				}));
			t.a = k
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				LiveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				liveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				Copy: "_3xhJYY30L68x0pxk-8uTYD",
				copy: "_3xhJYY30L68x0pxk-8uTYD",
				LiveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				liveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				CTAButtons: "_3xkBSA_W2UZqPF31GQZ9K",
				ctaButtons: "_3xkBSA_W2UZqPF31GQZ9K",
				LoginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				loginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				SignupLink: "_1k97Y32qzGNtuVGyt73TpR",
				signupLink: "_1k97Y32qzGNtuVGyt73TpR",
				LiveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				liveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ"
			}
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/isSimpleClick/index.ts"),
				a = s("./src/lib/loginHref/index.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/helpers/trackers/authControls.ts"),
				m = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				p = s.n(m);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(d.c)(({
				className: e,
				isLiveStreaming: t,
				location: s,
				openLoginModal: n,
				openRegisterModal: d,
				origin: m,
				sendEvent: h
			}) => o.a.createElement("div", {
				className: Object(r.a)(e, p.a.Wrapper, {
					[p.a.LiveStreamingWrapper]: t
				})
			}, o.a.createElement("span", {
				className: Object(r.a)(p.a.Copy, {
					[p.a.LiveStreamingCopy]: t
				})
			}, u._("Log in or sign up to leave a comment", null, {
				hk: "1KD7Eh"
			})), o.a.createElement("div", {
				className: p.a.CTAButtons
			}, o.a.createElement(c.t, {
				className: p.a.LoginLink,
				kind: c.b.ExternalLink,
				priority: c.c.Secondary,
				href: Object(a.a)(s, m, "/login"),
				onClick: e => {
					Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), n(), h(Object(l.a)("user_convert")))
				},
				"data-redditstyle": !0
			}, u._("Log In", null, {
				hk: "ZR3pC"
			})), o.a.createElement(c.t, {
				className: Object(r.a)(p.a.SignupLink, {
					[p.a.LiveStreamingSignupLink]: t
				}),
				kind: c.b.ExternalLink,
				priority: c.c.Primary,
				href: Object(a.a)(s, m, "/register"),
				onClick: e => {
					Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), d(), h(Object(l.c)("user_convert")))
				},
				"data-redditstyle": !0
			}, u._("Sign Up", null, {
				hk: "48wH4o"
			})))))
		},
		"./src/reddit/components/CommentSort/CommentSort.m.less": function(e, t, s) {
			e.exports = {
				container: "_2ulKn_zs7Y3LWsOqoFLHPo",
				mHasOtherDiscussions: "_3iO3U_i4YUx-2qahK_BTu1",
				HighlightPicker: "_1n6gZPmNQU56UBglU718cx",
				highlightPicker: "_1n6gZPmNQU56UBglU718cx",
				Row: "zW82EsY6Pakxpq4WWvsUG",
				row: "zW82EsY6Pakxpq4WWvsUG",
				SortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				sortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				containerRow: "_1avwNy0RnwlEwVEW-fwKCI",
				DropdownContainer: "_3N0NZT0gc58Hq7p0XRUjsH",
				dropdownContainer: "_3N0NZT0gc58Hq7p0XRUjsH",
				ContestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				contestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				SortOptionDropdownText: "_3LRBCA71BwLLXBNsSlY7HW",
				sortOptionDropdownText: "_3LRBCA71BwLLXBNsSlY7HW",
				ToggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				toggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				DropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				dropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				hideCommentSort: "uAIheeoxWlq57lu5ghv43",
				HighlightWrapper: "_201SpO3todaXvcWUHaLymN",
				highlightWrapper: "_201SpO3todaXvcWUHaLymN",
				Info: "_1urK6AxAk9Sl76RgLUHOqh",
				info: "_1urK6AxAk9Sl76RgLUHOqh",
				SetSort: "_1Pn7_008tGFVitpaAxNI9b",
				setSort: "_1Pn7_008tGFVitpaAxNI9b",
				SingleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				singleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				SortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				sortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				Title: "_1MfL8RlT7Bsr76qYvR-nqM",
				title: "_1MfL8RlT7Bsr76qYvR-nqM",
				Tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				ViewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				viewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				ViewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q",
				viewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q"
			}
		},
		"./src/reddit/components/CommentSort/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Q
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/actions/comment/index.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/lib/makeApiRequest/index.ts"),
				g = s("./src/lib/omitHeaders/index.ts"),
				f = s("./src/reddit/constants/headers.ts"),
				x = s("./src/reddit/models/Toast/index.ts");
			const C = (e, t) => async (s, o, {
				apiContext: r
			}) => {
				const i = await (async (e, t, s) => Object(b.a)(Object(g.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: c.jb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: s
						}
					}))(r(), e, t),
					a = `error-block-${t}`,
					d = `success-block-${t}`;
				if (i.ok) {
					s(Object(u.R)({
						[e]: {
							suggestedSort: t
						}
					}));
					const o = t ? n.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : n.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					s(h.f({
						id: d,
						kind: x.b.SuccessCommunityGreen,
						text: o
					}))
				} else s(h.f({
					id: a,
					kind: x.b.Error,
					text: n.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: n.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: C(e, t)
				}))
			};
			var v = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				O = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				y = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				E = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				k = s("./src/reddit/components/TrackingHelper/index.tsx"),
				w = s("./src/reddit/controls/Dropdown/index.tsx"),
				P = s("./src/reddit/controls/Dropdown/Row.tsx"),
				j = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				I = s("./src/reddit/helpers/path/index.ts"),
				_ = s("./src/reddit/selectors/telemetry.ts");
			s("./src/telemetry/models/Event.ts");
			const S = (e, t, s, n, o) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(_.listing)(r, void 0, {
						oldSort: s,
						sort: n,
						source: o
					}),
					userSubreddit: Object(_.userSubreddit)(r)
				}),
				T = (e, t) => s => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				L = e => ({
					subreddit: Object(_.subreddit)(e),
					userSubreddit: Object(_.userSubreddit)(e)
				}),
				N = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...L
				});
			var R = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				M = s("./src/reddit/icons/svgs/Info/index.tsx"),
				F = s("./src/reddit/selectors/activeModalId.ts"),
				A = s("./src/reddit/selectors/comments.ts"),
				B = s("./src/reddit/selectors/moderatorPermissions.ts"),
				D = s("./src/reddit/selectors/posts.ts"),
				V = s("./src/reddit/selectors/tooltip.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				U = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				H = s.n(U),
				K = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const q = Object(E.a)(w.a),
				G = e => e === K.a.First ? n.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === K.a.Last ? n.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : n.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class Y extends r.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== K.a.None) {
							e(t === K.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", K.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", K.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", K.a.None)
					}
				}
				componentDidMount() {
					this.track()
				}
				componentDidUpdate(e) {
					e.selectedSort !== this.props.selectedSort && this.track()
				}
				render() {
					const {
						highlightIsOpen: e,
						id: t,
						onOpen: s,
						selectedSort: o
					} = this.props;
					return r.a.createElement("div", {
						className: H.a.HighlightWrapper
					}, r.a.createElement(P.b, {
						className: Object(d.a)(H.a.HighlightPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${G(o)}`,
						id: t,
						noHover: !0,
						onClick: s
					}), r.a.createElement(R.b, {
						className: H.a.DropdownTriangle,
						onClick: s
					}), r.a.createElement(q, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(P.b, {
						displayText: G(K.a.First),
						isSelected: o === K.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(P.b, {
						displayText: G(K.a.Last),
						isSelected: o === K.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(P.b, {
						displayText: G(K.a.None),
						isSelected: o === K.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var z = Y;
			const Q = "CommentSort--SortPicker",
				J = "CommentSort--HighlightPicker",
				X = "CommentSort--Tooltip",
				Z = Object(E.a)(w.a),
				$ = Object(a.c)({
					commentPermalink: (e, {
						commentId: t
					}) => t && Object(A.m)(e, {
						commentId: t
					}),
					contestModeModalIsOpen: Object(F.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(V.b)(Q),
					highlightIsOpen: Object(V.b)(J),
					hasModeratorPostPermissions: (e, {
						postId: t
					}) => {
						const s = Object(B.l)(e, {
							postId: t
						});
						return !!s && s.posts
					},
					post: D.H,
					postPermalink: D.G,
					showCommentHighlighter: (e, {
						postId: t
					}) => {
						const s = Object(W.s)(e),
							n = !!Object(B.l)(e, {
								postId: t
							}),
							o = Object(D.H)(e, {
								postId: t
							});
						return (n || s) && !!o && !!o.previousVisits && o.previousVisits.length > 0
					},
					selectedHighlightSort: A.p
				}),
				ee = Object(i.b)($, (e, {
					postId: t
				}) => ({
					changeHighlightSort: t => e(Object(m.b)({
						sort: t
					})),
					onOpenDropdown: () => e(Object(l.h)({
						tooltipId: Q
					})),
					onOpenHighlightDropdown: t => {
						e(Object(l.h)({
							tooltipId: J
						})), t()
					},
					onSetSuggestedSort: s => e(C(t, s)),
					hideTooltip: () => e(Object(l.i)()),
					setContestMode: s => e(Object(u.V)(s, t)),
					showTooltip: () => e(Object(l.h)({
						tooltipId: X
					})),
					toggleContestModeModal: () => e(Object(p.i)("CommentSort--ContestMode--Modal"))
				}));
			class te extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, s, n) => this.props.sendEvent(S(e, this.props.isOverlay, t, s, n)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(T("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(N(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
					}
				}
				addSuggestedLabel(e) {
					return n.fbt._("{sort name} (suggested)", [n.fbt._param("sort name", e)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentPermalink: s,
						contestModeModalIsOpen: o,
						dropdownIsOpen: i,
						elementRef: a,
						hideTooltip: l,
						highlightIsOpen: m,
						hasModeratorPostPermissions: p,
						isOverlay: u,
						location: h,
						post: b,
						postPermalink: g,
						selectedHighlightSort: f,
						showCommentHighlighter: x,
						sort: C,
						suggestedSort: E,
						showTooltip: k,
						toggleContestModeModal: w
					} = this.props, _ = b.contestMode, S = !h.search.includes(c.u.CONFIDENCE), L = C === c.u.CONFIDENCE && S, N = p && !L, F = c.w[C], A = F ? F() : "", B = E && C === E && !L ? this.addSuggestedLabel(A) : A, D = _ ? n.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : n.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), V = _ ? n.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : n.fbt._("Start", null, {
						hk: "Mjvpj"
					}), W = _ ? n.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : n.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), U = _ && !p;
					return r.a.createElement("div", {
						className: Object(d.a)(t, H.a.container, {
							[H.a.hideCommentSort]: !x && U
						}),
						ref: a
					}, r.a.createElement("div", {
						className: H.a.containerRow
					}, !U && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: H.a.DropdownContainer
					}, r.a.createElement(P.b, {
						className: Object(d.a)(H.a.SortPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Sort by",null,{hk:"E6T9r"})}: ${B}`,
						id: Q,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(R.b, {
						className: H.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(Z, {
						isOpen: i,
						tooltipId: Q
					}, [c.u.CONFIDENCE, c.u.TOP, c.u.NEW, c.u.CONTROVERSIAL, c.u.OLD, c.u.QA].map(e => {
						const t = s || g,
							n = Object(I.b)(t),
							o = c.w[e],
							i = o ? o() : "";
						return r.a.createElement(y.a, {
							className: H.a.ViewFullLinkOrOverlayLink,
							isOverlay: u,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${n}?sort=${e}`
						}, r.a.createElement(P.b, {
							displayText: i,
							isSelected: C === e,
							skipRoleAttr: !0
						}))
					}))), N && !U && (E ? r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: C !== E ? this.setSortOnClick : this.clearSortOnClick
					}, C !== E ? n.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : n.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement("button", {
						className: H.a.SetSort
					}, r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: this.setSortOnClick
					}, n.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: X,
						onMouseEnter: k,
						onMouseLeave: l
					}, r.a.createElement(O.c, {
						className: H.a.Tooltip,
						text: n.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: X
					}), r.a.createElement(M.a, {
						className: H.a.Info
					})))), p && r.a.createElement("button", {
						className: H.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, n.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(j.a, {
						className: H.a.ToggleSwitch,
						on: _
					}))), x && r.a.createElement("div", {
						className: H.a.containerRow
					}, r.a.createElement(z, {
						changeHighlightSort: e,
						highlightIsOpen: m,
						id: J,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: f,
						trackHighlight: T
					})), o && r.a.createElement(v.a, {
						actionText: V,
						headerText: D,
						modalText: W,
						onConfirm: this.setContestMode,
						toggleModal: w,
						withOverlay: !0
					}))
				}
			}
			t.b = ee(Object(k.c)(te))
		},
		"./src/reddit/components/Comments/Comment/ExpandButton/index.m.less": function(e, t, s) {
			e.exports = {
				expandButton: "_2Gzh48SaLz7dQBCULfOC6V",
				expandIcon: "_1tnrhhM9S7dYjApTfvd14l"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				depth6: "SwOx7KbRrXYrqQCWMYPf0",
				isModModeEnabled: "_2hXOR2fIcfnUg0p-Env7KQ",
				LoggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				loggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				HideIfVWSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				hideIfVwSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				HideIfVWLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				hideIfVwLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				isFollowCommentEnabled: "_3rHRwVOKmBBlBOQ4kIW_vq",
				ModeratorGroup: "_1CUkbmFVuU6wklfYeYwPFk",
				moderatorGroup: "_1CUkbmFVuU6wklfYeYwPFk",
				depth9: "_2EcU45Nj3OvIEdu169RlLK",
				depth10: "_2sxg06qfN6lCskrSU7pyoj",
				depth0: "_2t8wLytikHzPCUnvXdS_wu",
				depth3: "_2Ik7QEXtA-lbZKj0ssL89G",
				isInOverlay: "FOPddbU-vkQ5LYmQP6Fgc"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				ModActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				modActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				ViewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				viewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				IgnoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				ignoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				Report: "tfULaYlP83dV84XOxX3YE",
				report: "tfULaYlP83dV84XOxX3YE",
				OverflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				overflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				DropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				dropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				Flatlist: "_1LXnp2ufrzN6ioaTLTjGQ1",
				flatlist: "_1LXnp2ufrzN6ioaTLTjGQ1",
				CommentIcon: "_1g4YvNNIFoV_5_EhsVfyRy",
				commentIcon: "_1g4YvNNIFoV_5_EhsVfyRy",
				Button: "_374Hkkigy4E4srsI2WktEd",
				button: "_374Hkkigy4E4srsI2WktEd",
				ModToolsFlatlist: "_2sGRD7t2kAbCLKrZ6UjoMW",
				modToolsFlatlist: "_2sGRD7t2kAbCLKrZ6UjoMW",
				dropdownRowText: "_3my60CXALAaQkY4P4xVmad",
				overflowMenu: "_1VR6DV38j4rMT5OMeU4gJZ"
			}
		},
		"./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less": function(e, t, s) {
			e.exports = {
				glowHighlightContainer: "_3VH2iGVh92XtlKq0-eVoEN"
			}
		},
		"./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less": function(e, t, s) {
			e.exports = {
				gradientHighlightContainer: "TmlaIdEplCzZ0F1aRGYQh"
			}
		},
		"./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less": function(e, t, s) {
			e.exports = {
				effectContainer: "_15G4fCS1bzGgGK9kBOtN2t",
				bubbleEffectContainer: "_3rhkMikNPUTfnVDvk-6EFo",
				lottieEffectContainer: "_28x1bnTjOY6zWZfooCxkKQ"
			}
		},
		"./src/reddit/components/Comments/Comment/index.m.less": function(e, t, s) {
			e.exports = {
				userIconContainerStyles: "_3W217SmtnKG5RvNrTd7YW0",
				CommentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				commentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				redesign: "HZ-cv9q391bm8s7qT54B3",
				voteButton: "_2m5vzALl8kQdr9kwIFUo5t",
				upDownVote: "_22nWXKAY6OzAfK5GcUqWV2",
				score: "_3ChHiOyYyUkpZ_Nm3ZyM2M",
				ActionBar: "_3KgrO85L1p9wQbgwG27q4y",
				actionBar: "_3KgrO85L1p9wQbgwG27q4y",
				HorizontalVotes: "_1ewTEGuogtFmDvDII2T2Yy",
				horizontalVotes: "_1ewTEGuogtFmDvDII2T2Yy",
				FlatList: "_2_lhaFUJdP8q0o2L9MN2TN",
				flatList: "_2_lhaFUJdP8q0o2L9MN2TN",
				ExpandButton: "_1nGapmdexvR0BuOkfAi6wa",
				expandButton: "_1nGapmdexvR0BuOkfAi6wa",
				hidden: "_1zN1-lYh2LfbYOMAho_O8g",
				visible: "O_Ica0k2O4KFcZyNfsJDU",
				ErrorText: "_3XArRVBsKuWegVHX9CQjH-",
				errorText: "_3XArRVBsKuWegVHX9CQjH-",
				CommentBody: "_3cjCphgls6DH-irkVaA0GM",
				commentBody: "_3cjCphgls6DH-irkVaA0GM",
				EditCommentForm: "JchsqHyN3thfSnN8dUM3",
				editCommentForm: "JchsqHyN3thfSnN8dUM3",
				AuthorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				authorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				UserIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				userIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				SupporterRing: "_2I86011VPvZ-uDOUp1zvd-",
				supporterRing: "_2I86011VPvZ-uDOUp1zvd-",
				UserIcon: "_13ScjOmi6dGdJw0JAonQEr",
				userIcon: "_13ScjOmi6dGdJw0JAonQEr",
				UserIconNft: "_20ZyBb8T475h1qmXRBEL6-",
				userIconNft: "_20ZyBb8T475h1qmXRBEL6-",
				topSupporterIcon: "PjnQ0fgBT0oSZ9nR8HeaJ",
				VerticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				verticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				CommentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				commentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				isPendingDeletion: "_2R8NbVFaqNnBbuA7o2osje",
				isRemoved: "_2zA6eSGIr_oQU7np0uNqoB",
				isLocked: "t8jgOblBrQTKWHnVy0zGD",
				isActive: "_1vvFtxiq5874iIdCUYlL-d",
				highlightComment: "_2ym9uYDdCxu8P4UFCLNCgE",
				topLevel: "_1z5rdmX8TDr6mqwNv7A70U",
				focused: "_1Sy9NCNbLA9uJZj-qgUrMG",
				TopMeta: "_1S45SPAIb30fsXtEcKPSdt",
				topMeta: "_1S45SPAIb30fsXtEcKPSdt",
				noFlair: "_3LqBzV8aCO9tge99jHiUGy",
				collapsed: "_3c9Go6433BnvYx8_7MkPnt",
				CommentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentPerfMarkVisibility: "_2CkgPEY8ljDZH3np9UY1ws"
			}
		},
		"./src/reddit/components/Comments/CommentListNode/index.m.less": function(e, t, s) {
			e.exports = {
				CommentListNodeWrapper: "_3sf33-9rVAO_v4y0pIW_CH",
				commentListNodeWrapper: "_3sf33-9rVAO_v4y0pIW_CH",
				isHidden: "_2csJ1c6CZ_3VQ75SVdUAwt",
				glowBorderTopPadding: "_2PHrzfGnoV59y2Imtb1Y5I",
				glowBorderBottomPadding: "_3kYyDFXW4SA2vk-vehWhXw"
			}
		},
		"./src/reddit/components/Comments/ContinueThreadLink/index.m.less": function(e, t, s) {
			e.exports = {
				ArrowRight: "egHA5MD_goQfvgLP3zgST",
				arrowRight: "egHA5MD_goQfvgLP3zgST",
				HoverSpan: "_2bsN7AuzEexqxXD-vhOkM7",
				hoverSpan: "_2bsN7AuzEexqxXD-vhOkM7",
				Wrapper: "_3ndawrYzcvjHPJFYUHijfP",
				wrapper: "_3ndawrYzcvjHPJFYUHijfP",
				isActive: "btJMgy_2EOVvOVP-DikGZ",
				LinkOrOverlayLink: "b57A3J7QBa7TvY8XeupVn",
				linkOrOverlayLink: "b57A3J7QBa7TvY8XeupVn"
			}
		},
		"./src/reddit/components/Comments/MoreCommentsItem/index.m.less": function(e, t, s) {
			e.exports = {
				MoreCommentsItemWrapper: "_3_mqV5-KnILOxl1TvgYtCk",
				moreCommentsItemWrapper: "_3_mqV5-KnILOxl1TvgYtCk",
				MoreComments: "_2HYsucNpMdUpYlGBMviq8M",
				moreComments: "_2HYsucNpMdUpYlGBMviq8M",
				MoreCommentsInteractive: "_23013peWUhznY89KuYPZKv",
				moreCommentsInteractive: "_23013peWUhznY89KuYPZKv",
				isActive: "l7--vTMsoEqrU8pjG52TF"
			}
		},
		"./src/reddit/components/Comments/PredictionComment/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Comments-PredictionComment",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Comments-PredictionComment").then(s.bind(null, "./src/reddit/components/Comments/PredictionComment/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Comments/PredictionComment/index.tsx"
				}
			})
		},
		"./src/reddit/components/Comments/States/index.m.less": function(e, t, s) {
			e.exports = {
				CommentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				commentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				CommentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				commentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				Avatar: "_3ES-TCR45dPoj_NuOATuNi",
				avatar: "_3ES-TCR45dPoj_NuOATuNi",
				VoteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				voteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				TextColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				textColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				StateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				stateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				CommentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				commentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				SnooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				snooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				EmptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				emptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				ErrorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				errorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				EmptyText: "_2x3Avx0lbWMcic-5bE_guO",
				emptyText: "_2x3Avx0lbWMcic-5bE_guO",
				ErrorFullPage: "_2ze7IsXK_2d3McYZHK6v_D",
				errorFullPage: "_2ze7IsXK_2d3McYZHK6v_D",
				LoadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				loadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				Downvote: "_32W1DnzyRkYXP82ZO96H0V",
				downvote: "_32W1DnzyRkYXP82ZO96H0V",
				Upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				TopMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				topMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				CommentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb",
				commentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb"
			}
		},
		"./src/reddit/components/Comments/States/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return I
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "e", (function() {
				return T
			})), s.d(t, "d", (function() {
				return L
			})), s.d(t, "f", (function() {
				return N
			})), s.d(t, "a", (function() {
				return H
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/times.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/pages/comments.ts"),
				p = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/helpers/describeApiError/index.ts"),
				b = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				f = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				x = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				C = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				v = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				O = s("./src/reddit/components/Comments/States/index.m.less"),
				y = s.n(O);
			const E = l.a.wrapped(C.a, "CommentsIcon", y.a),
				k = l.a.wrapped(v.a, "SnooFacepalm", y.a),
				w = l.a.p("EmptyTitle", y.a),
				P = l.a.p("ErrorTitle", y.a),
				j = l.a.p("EmptyText", y.a),
				I = ({
					className: e,
					isChat: t
				}) => a.a.createElement("div", {
					className: Object(c.a)(y.a.StateContainer, e)
				}, a.a.createElement(E, null), a.a.createElement(w, null, t ? n.fbt._("no messages yet", null, {
					hk: "QOUnY"
				}) : n.fbt._("no comments yet", null, {
					hk: "1yqeoX"
				})), a.a.createElement(j, null, n.fbt._("Be the first to share what you think!", null, {
					hk: "479v5B"
				}))),
				_ = () => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(E, null), a.a.createElement(w, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(j, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				S = ({
					link: e
				}) => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(E, null), a.a.createElement(w, null, n.fbt._("That comment is missing", null, {
					hk: "1i1U0i"
				})), a.a.createElement(u.n, {
					to: Object(b.b)(e)
				}, n.fbt._("View all comments", null, {
					hk: "2CgaIx"
				}))),
				T = Object(d.b)(null, (e, {
					postId: t,
					commentId: s,
					sort: n
				}) => ({
					onClick: () => e(Object(m.commentsPageDataRequested)(t, s, {
						sort: n
					}, n))
				}))(({
					apiError: e,
					onClick: t
				}) => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(k, null), a.a.createElement(P, null, e ? Object(h.a)({
					apiError: e,
					isLoggedOut: !1
				}) : n.fbt._("Sorry, comments couldn't load!", null, {
					hk: "2h6LDi"
				})), a.a.createElement(u.l, {
					onClick: t
				}, n.fbt._("Retry", null, {
					hk: "NOuNi"
				})))),
				L = ({
					postId: e,
					commentId: t,
					sort: s,
					apiError: n
				}) => a.a.createElement("div", {
					className: Object(c.a)(y.a.StateContainer, y.a.ErrorFullPage)
				}, a.a.createElement(T, {
					postId: e,
					commentId: t,
					sort: s,
					apiError: n
				})),
				N = l.a.wrapped(({
					className: e
				}) => a.a.createElement("div", {
					className: e
				}, a.a.createElement(p.a, null)), "LoadingFullPage", y.a),
				R = l.a.div("CommentsPlaceholderContainer", y.a),
				M = l.a.div("CommentPlaceholder", y.a),
				F = l.a.div("Avatar", y.a),
				A = l.a.div("VoteColumn", y.a),
				B = l.a.div("TextColumn", y.a),
				D = l.a.wrapped(x.a, "Upvote", y.a),
				V = l.a.wrapped(f.a, "Downvote", y.a),
				W = () => a.a.createElement("div", {
					className: Object(c.a)(y.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				U = () => a.a.createElement("div", {
					className: Object(c.a)(y.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				H = e => a.a.createElement(R, null, r()(10, t => a.a.createElement(M, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? a.a.createElement(F, {
					className: Object(g.a)({
						isLoading: !0
					})
				}) : a.a.createElement(A, null, a.a.createElement(D, null), a.a.createElement(V, null)), a.a.createElement(B, null, a.a.createElement(W, null), a.a.createElement(U, null)))))
		},
		"./src/reddit/components/Comments/ThreadLines/index.m.less": function(e, t, s) {
			e.exports = {
				Line: "_36AIN2ppxy_z-XSDxTvYj5",
				line: "_36AIN2ppxy_z-XSDxTvYj5",
				LineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				lineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				ShortLineContainer: "_3Wv3am0TXfTcugZJ6niui",
				shortLineContainer: "_3Wv3am0TXfTcugZJ6niui",
				hasGlowBorder: "_9UoUJEplv3y2cpdVestPb"
			}
		},
		"./src/reddit/components/Comments/helpers/hiddenComments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return i
			}));
			let n = {};

			function o(e) {
				return e in n
			}

			function r(e) {
				n[e] = !0
			}

			function i() {
				n = {}
			}
		},
		"./src/reddit/components/Comments/index.m.less": function(e, t, s) {
			e.exports = {
				Scroller: "_1YCqQVO-9r-Up6QPB9H6_4",
				scroller: "_1YCqQVO-9r-Up6QPB9H6_4"
			}
		},
		"./src/reddit/components/Comments/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, o = s("./node_modules/lodash/isEqual.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				h = s("./src/reddit/actions/comment/index.ts"),
				b = s("./src/reddit/constants/comments.ts"),
				g = s("./src/reddit/constants/componentSizes.ts"),
				f = s("./src/reddit/constants/elementClassNames.ts"),
				x = s("./src/reddit/constants/gold.ts"),
				C = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				v = s("./src/reddit/components/LottieAnimation/index.tsx"),
				O = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less"),
				y = s.n(O);
			! function(e) {
				e.Lottie = "lottie"
			}(n || (n = {}));
			const E = {
				threshold: [.75, .001]
			};
			var k = a.a.memo(e => {
				const t = Object(i.useRef)(null),
					[s, o] = Object(i.useState)(!1),
					r = Object(i.useCallback)(e => {
						e.forEach(e => {
							const {
								intersectionRatio: t
							} = e;
							t >= .75 && o(!1), t <= .001 && o(!0)
						})
					}, []);
				Object(C.a)(t, r, E);
				const d = e.type;
				return a.a.createElement("div", {
					className: Object(l.a)(y.a.effectContainer, y.a[d + "EffectContainer"]),
					ref: t,
					role: "presentation"
				}, d === n.Lottie && a.a.createElement(v.a, {
					assetUrl: e.assetUrl,
					prefersReducedAnimation: e.prefersReducedAnimation,
					hidden: s
				}))
			});
			const w = [{
					pattern: /^econ:render:lottie:([a-z0-9-]+)$/i,
					buildParamsFn: function(e) {
						return {
							glowHexColor: P,
							effectHighlight: {
								type: n.Lottie,
								assetUrl: `https://www.redditstatic.com/gold/awards/animations/${e}.json`
							}
						}
					}
				}],
				P = "ff0000";

			function j(e) {
				return function(e) {
					const t = e.filter(e => e.effectHighlight),
						s = t.length ? t : e,
						n = Math.floor(Math.random() * s.length);
					return s[n] || null
				}(e ? function(e) {
					return e.map(_).filter(e => e !== I)
				}(e) : [])
			}
			const I = {
				glowHexColor: null,
				effectHighlight: null
			};

			function _(e) {
				for (const t of w) {
					const s = t.pattern.exec(e);
					if (s) return s.shift(), t.buildParamsFn(...s)
				}
				return I
			}
			var S = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts"),
				T = s("./src/reddit/selectors/comments.ts"),
				L = s("./src/reddit/selectors/commentSelector.ts"),
				N = s("./src/reddit/selectors/communityAwards.ts"),
				R = s("./src/reddit/selectors/moderatorPermissions.ts"),
				M = s("./src/reddit/selectors/posts.ts"),
				F = s("./src/reddit/selectors/user.ts"),
				A = s("./node_modules/fbt/lib/FbtPublic.js"),
				B = s("./src/reddit/models/PostDraft/index.ts"),
				D = s("./src/lib/makeDraftKey/index.ts"),
				V = s("./src/lib/objectSelector/index.ts"),
				W = s("./src/reddit/actions/comment/authoring.ts"),
				U = s("./src/reddit/actions/comment/moderation.ts"),
				H = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				K = s("./src/reddit/icons/fonts/helpers.tsx");
			var q = e => a.a.createElement("i", {
					className: Object(l.a)(Object(K.b)("expand", e.isFilled), e.className)
				}),
				G = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				Y = s.n(G);

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Q, J, X = s("./node_modules/lodash/defer.js"),
				Z = s.n(X),
				$ = s("./src/reddit/actions/tooltip.ts"),
				ee = s("./src/reddit/selectors/tooltip.ts"),
				te = s("./src/reddit/actions/gold/modals.ts"),
				se = s("./src/reddit/actions/modal.ts"),
				ne = s("./src/reddit/actions/reportFlow/index.ts"),
				oe = s("./src/reddit/helpers/correlationIdTracker.ts"),
				re = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ie = s("./src/reddit/helpers/trackers/lightbox.ts"),
				ae = s("./src/reddit/models/Comment/index.ts"),
				de = s("./src/reddit/selectors/activeModalId.ts"),
				ce = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				le = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				me = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				pe = s("./src/reddit/selectors/subreddit.ts"),
				ue = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				he = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				be = s.n(he);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(Q || (Q = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(J || (J = {}));
			const ge = (e, t) => {
					const s = be.a[t],
						n = be.a[e];
					return Object(l.a)(s, n)
				},
				fe = e => Object(l.a)(be.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[be.a.isInOverlay]: e.isInOverlay,
					[be.a.isModModeEnabled]: e.isModModeEnabled,
					[be.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				});
			var xe = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				Ce = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				ve = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				Oe = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				ye = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				Ee = s("./src/reddit/components/ModModeReports/helpers.ts"),
				ke = s("./src/reddit/components/OverflowMenu/index.tsx"),
				we = s("./src/reddit/components/ReportFlow/index.tsx"),
				Pe = s("./src/reddit/components/ReportFlow/new.tsx"),
				je = s("./src/reddit/components/ShareMenu/index.tsx"),
				Ie = s("./src/reddit/components/TrackingHelper/index.tsx"),
				_e = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				Se = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				Te = s("./src/reddit/helpers/trackers/modTools.ts"),
				Le = s("./src/reddit/layout/row/Inline/index.tsx"),
				Ne = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				Re = s.n(Ne),
				Me = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				Fe = s("./src/reddit/selectors/gold/awardIcon.ts");
			var Ae = e => {
					const t = Object(d.e)(me.b),
						s = Object(d.e)(e => t && Object(Fe.a)(e, {
							award: t,
							minSize: 32
						}));
					return s ? a.a.createElement("img", {
						className: Object(l.a)(Re.a.img, e.className),
						id: e.id,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						src: s
					}) : a.a.createElement(Me.a, e)
				},
				Be = s("./src/reddit/icons/fonts/index.tsx"),
				De = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				Ve = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				We = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				Ue = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				He = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Ke = s("./src/reddit/selectors/experiments/postCommentFollow.ts"),
				qe = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				Ge = s.n(qe);
			const Ye = p.a.wrapped(De.a, "CommentIcon", Ge.a),
				ze = p.a.wrapped(He.a, "Report", Ge.a),
				Qe = p.a.wrapped(We.a, "IgnoreReport", Ge.a),
				Je = p.a.wrapped(ye.a, "ModActionsMenu", Ge.a),
				Xe = p.a.div("OverflowMenuSpacer", Ge.a),
				Ze = p.a.wrapped(ke.a, "DropdownRow", Ge.a),
				$e = p.a.wrapped(Le.a, "Flatlist", Ge.a),
				et = p.a.button("Button", Ge.a),
				tt = p.a.wrapped(xe.a, "ModToolsFlatlist", Ge.a),
				st = p.a.wrapped(_e.a, "ViewReportsDropdown", Ge.a),
				nt = e => `Comment-${e}--Modal--DeleteComment`,
				ot = e => `Distinguish--Dropdown--${e}`,
				rt = e => `${e}-overflow-menu`,
				it = e => `View--Reports--${e}`,
				at = Object(c.c)({
					claimedFreeAward: me.b,
					currentUser: F.k,
					isConfirmModalOpen: (e, {
						comment: t
					}) => Object(de.a)(e) === nt(t.id),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(ee.b)(ot(t.id))(e),
					isCommentFollowEnabled: Ke.a,
					isFollowed: (e, {
						comment: t
					}) => Object(T.y)(e, {
						commentId: t.id
					}),
					isFollowedCommentExpired: (e, {
						comment: t
					}) => Object(T.A)(e, {
						commentId: t.id
					}),
					isPendingDeletion: (e, {
						comment: t
					}) => Object(T.B)(e, {
						commentId: t.id
					}),
					isReportsDropdownOpen: (e, {
						comment: t
					}) => Object(ee.b)(it(t.id))(e),
					isLoggedIn: F.K,
					postIsArchived: (e, {
						comment: t
					}) => Object(M.B)(e, {
						postId: t.postId
					}),
					isBlockedUserBannerEnabled: (e, {
						comment: t
					}) => !!Object(M.w)(e, {
						postId: t.postId
					}) && Object(ce.a)(e),
					postAuthorIsBlocked: (e, {
						comment: t
					}) => Object(M.w)(e, {
						postId: t.postId
					}),
					postIsLocked: (e, {
						comment: t
					}) => Object(M.C)(e, {
						postId: t.postId
					}),
					commentPermalink: (e, {
						comment: t
					}) => Object(T.m)(e, {
						commentId: t.id
					}),
					reportFlowIsOpen: (e, {
						comment: t
					}) => {
						var s, n;
						return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
					},
					sendRepliesToggled: (e, {
						comment: t
					}) => Object(T.H)(e, {
						commentId: t.id
					}),
					subredditAboutInfo: (e, {
						subreddit: t
					}) => t ? Object(pe.t)(e, {
						subredditName: t.name
					}) : void 0,
					subredditOrProfile: (e, {
						comment: t
					}) => Object(M.U)(e, {
						postId: t.postId
					}),
					reportingRevampEnabled: le.a
				});
			class dt extends a.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(ie.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(Te.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(Te.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(Te.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(oe.d)(oe.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(n(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(Te.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(Te.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(Te.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleFollow = () => {
						const {
							onCommentFollow: e,
							sendEvent: t,
							comment: s,
							isFollowed: n
						} = this.props;
						e(n ? ae.a.UNFOLLOWED : ae.a.FOLLOWED), t(n ? Object(Te.f)("follow", s.id) : Object(Te.a)("follow", s.id))
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(Te.b)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? a.a.createElement(Pe.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: we.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : a.a.createElement(we.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: we.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					})
				}
				componentDidMount() {
					this.props.isFollowedCommentExpired && this.props.onFollowedCommentExpire()
				}
				render() {
					const {
						comment: e,
						className: t,
						currentUser: s,
						commentPermalink: n,
						deleteComment: o,
						depth: r,
						handleReply: d,
						isAvatarsInCommentsEnabled: c,
						isCommentFollowEnabled: m,
						isFollowed: p,
						isLoggedIn: u,
						isPendingDeletion: h,
						onDistinguishComment: b,
						onIgnoreReports: g,
						onToggleReportsDropdown: f,
						moderatorPermissions: x,
						modModeEnabled: C,
						postIsArchived: v,
						postAuthorIsBlocked: O,
						isBlockedUserBannerEnabled: y,
						postIsLocked: E,
						renderedInOverlay: k,
						sendEvent: w,
						subreddit: P,
						subredditAboutInfo: j,
						toggleDeleteCommentModal: I,
						toggleSendReplies: _,
						trackCommentClick: S
					} = this.props, T = Object(re.a)(x), L = !!s && s.displayText === e.author, N = !!s && s.isEmployee, R = !(j && j.userIsBanned) && (E || v || O && y || T && u || e.isLocked ? T && u : u || c), M = Object(Ee.a)(e), F = T && L && !e.bannedBy, B = L && N && !e.bannedBy, D = F || B, V = s && e.isGildable, W = m && !v, U = [];
					R && U.push(a.a.createElement(et, {
						disabled: h,
						key: "reply",
						onClick: () => {
							d(), Z()(() => S("reply", e.id)())
						}
					}, a.a.createElement(Ye, null), A.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), V && U.push({
						breakpointGroup: J.LoggedInUser,
						icon: a.a.createElement(Ae, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => A.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), U.push(a.a.createElement(je.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: n,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == P ? void 0 : P.type
					}, a.a.createElement(et, {
						onClick: () => this.sendCommentEventWithName("share")
					}, A.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), L || U.push({
						breakpointGroup: J.LoggedInUser,
						icon: a.a.createElement(He.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => A.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), U.push({
						breakpointGroup: J.LoggedInUser,
						icon: a.a.createElement(Be.a, {
							name: e.isSaved ? "saved" : "save"
						}),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? () => A.fbt._("Unsave", null, {
							hk: "48MWs0"
						}) : () => A.fbt._("Save", null, {
							hk: "4yMsMq"
						})
					}), L && U.push({
						breakpointGroup: J.LoggedInUser,
						icon: a.a.createElement(Be.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => A.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), W && U.push({
						breakpointGroup: J.LoggedInUser,
						icon: a.a.createElement(Be.a, {
							name: "notification",
							isFilled: p
						}),
						isIconOverflowOnly: !0,
						key: "follow",
						onClick: this.handleFollow,
						text: p ? () => A.fbt._("Followed", null, {
							hk: "43P2OR"
						}) : () => A.fbt._("Follow", null, {
							hk: "1vo8lJ"
						})
					});
					const H = U.map(e => a.a.isValidElement(e) ? e : a.a.createElement(et, {
							className: ge(e.breakpointGroup, Q.HideIfVWSmaller),
							disabled: h,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						K = U.map(e => a.a.isValidElement(e) ? null : a.a.createElement(Ze, {
							className: ge(e.breakpointGroup, Q.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: Ge.a.dropdownRowText
						}, e.icon));
					return a.a.createElement(i.Fragment, null, a.a.createElement($e, {
						className: Object(l.a)(fe({
							depth: r,
							isInOverlay: k,
							isModModeEnabled: T && C,
							isFollowCommentEnabled: W
						}), t)
					}, H, a.a.createElement(Xe, {
						className: L ? void 0 : ge(J.LoggedInUser, Q.HideIfVWLarger)
					}, a.a.createElement(ke.b, {
						className: Ge.a.overflowMenu,
						disabled: h,
						dropdownId: rt(e.id),
						onClick: () => w(Object(Te.a)("comment_overflow_menu", e.id))
					}, K, L && a.a.createElement(a.a.Fragment, null, a.a.createElement(Ze, {
						displayText: A.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: Ge.a.dropdownRowText
					}, a.a.createElement(Be.a, {
						name: "delete"
					})), a.a.createElement(Se.a, {
						text: A.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: _,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && a.a.createElement(ve.a, {
						actionText: A.fbt._("Delete", null, {
							hk: "1bl9Tc"
						}),
						cancelActionText: A.fbt._("Keep", null, {
							hk: "3hCBEF"
						}),
						headerText: A.fbt._("Delete comment", null, {
							hk: "2EYJqi"
						}),
						modalText: A.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "OzOZd"
						}),
						onConfirm: o,
						toggleModal: I,
						trackClick: () => {},
						withOverlay: !0
					}), T && a.a.createElement(a.a.Fragment, null, C && a.a.createElement(tt, {
						className: ge(J.Moderator, Q.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: L
					}), a.a.createElement(Je, {
						className: C ? ge(J.Moderator, Q.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => w(Object(Te.a)("comment_mod_action_menu", e.id))
					}, a.a.createElement(Ue.a, null), a.a.createElement(ue.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object(Ee.c)(e) && !C && a.a.createElement(Ce.a, {
						text: `${M}`,
						onClick: () => {
							f(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: it(e.id)
					}, a.a.createElement(st, {
						model: e,
						onIgnoreReports: () => {
							g(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: it(e.id)
					}), e.ignoreReports ? a.a.createElement(Qe, null) : a.a.createElement(ze, null)), D && a.a.createElement(Ce.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, a.a.createElement(Ve.a, null), a.a.createElement(Oe.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: N,
						isUserMod: T,
						onDistinguishComment: b,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: ot(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var ct = Object(d.b)(at, (e, {
					comment: t,
					commentsPageKey: s
				}) => ({
					deleteComment: () => s && e(Object(W.h)(t.id, t.postId)),
					handleDelete: () => {
						e(Object(se.i)(nt(t.id))), e(Object($.h)({
							tooltipId: rt(t.id)
						}))
					},
					handleEdit: () => {
						const n = t.media && t.media.rteMode;
						s && e(Object(W.d)({
							commentId: t.id,
							draftKey: Object(D.a)(B.c.edit, t.id),
							text: t.bodyMD || "",
							commentMode: n,
							commentsPageKey: s
						}))
					},
					handleReply: () => s && e(Object(W.p)({
						parentCommentId: t.id,
						commentsPageKey: s
					})),
					onCommentFollow: s => e(Object(W.r)(t.id, s)),
					onDistinguishComment: (s, n) => e(Object(U.b)(t.id, s, n)),
					onFollowedCommentExpire: () => e(Object(h.n)({
						id: t.id,
						expiresAt: 0
					})),
					onGildClick: (s, n) => e(Object(te.d)({
						awardId: n,
						correlationId: s,
						thingId: t.id
					})),
					onIgnoreReports: () => e(Object(U.g)(t.id)),
					onReportClick: () => e(Object(ne.c)(t.id)),
					onToggleSave: () => e(Object(h.m)(t.id)),
					onToggleDistinguishDropdown: () => e(Object($.h)({
						tooltipId: ot(t.id)
					})),
					onToggleReportsDropdown: () => e(Object($.h)({
						tooltipId: it(t.id)
					})),
					toggleDeleteCommentModal: () => e(Object(se.i)(nt(t.id))),
					toggleSendReplies: () => e(Object(W.k)(t.id))
				}))(Object(Ie.c)(dt)),
				lt = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				mt = s.n(lt);
			var pt = a.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return a.a.createElement("div", {
						className: mt.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				ut = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				ht = s.n(ut);
			var bt = a.a.memo(e => a.a.createElement("div", {
					className: ht.a.gradientHighlightContainer,
					role: "presentation"
				})),
				gt = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				ft = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				xt = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				Ct = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				vt = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				Ot = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				yt = s("./src/reddit/components/ModModeReports/index.tsx"),
				Et = s("./src/reddit/components/PostTopMeta/index.tsx"),
				kt = s("./src/reddit/components/RichTextJson/index.tsx"),
				wt = s("./src/reddit/components/UserIcon/index.tsx"),
				Pt = s("./src/reddit/components/UserIcon/constants.ts"),
				jt = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				It = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				_t = s("./src/reddit/constants/componentTestIds.ts"),
				St = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Tt = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				Lt = s("./node_modules/raf/index.js"),
				Nt = s.n(Lt);

			function Rt() {
				return (Rt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Mt = {
					rootMargin: "100px 0px",
					threshold: .01
				},
				Ft = a.a.createContext(!1);
			class At extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !1
					}, this.fastIsVisible = !1, this.setVisible = () => {
						this.setState(e => e.isVisible ? null : {
							isVisible: !0
						})
					}, this.scheduleVisibilityChange = () => {
						this.state.isVisible || Nt()(this.setVisible)
					}, this.handleIntersectionChange = e => {
						const t = e.isIntersecting;
						!this.fastIsVisible && t && (this.scheduleVisibilityChange(), this.fastIsVisible = !0)
					}
				}
				render() {
					const {
						children: e,
						...t
					} = this.props, {
						isVisible: s
					} = this.state, n = {
						...Mt,
						...t
					};
					return a.a.createElement(Tt.a, Rt({}, n, {
						onChange: this.handleIntersectionChange
					}), a.a.createElement("div", null, a.a.createElement(Ft.Provider, {
						value: s
					}, e)))
				}
			}
			var Bt = s("./src/reddit/controls/ErrorText/index.tsx"),
				Dt = s("./src/reddit/controls/InternalLink/index.tsx"),
				Vt = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Wt = s("./src/reddit/helpers/flair.ts"),
				Ut = s("./src/reddit/models/Subreddit/index.ts"),
				Ht = s("./src/reddit/models/User/index.ts"),
				Kt = s("./src/reddit/models/Vote/index.ts"),
				qt = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				Gt = s("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				Yt = s("./src/reddit/selectors/gold/powerups/flairs.ts"),
				zt = s("./src/reddit/selectors/poll/index.ts"),
				Qt = s("./src/reddit/selectors/userPrefs.ts"),
				Jt = s("./src/reddit/selectors/moderatingComments.ts"),
				Xt = s("./src/reddit/components/Comments/Comment/index.m.less"),
				Zt = s.n(Xt),
				$t = s("./src/config.ts"),
				es = s("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				ts = s("./src/reddit/helpers/userSnoovatar/index.ts");

			function ss() {
				return (ss = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ns = p.a.wrapped((function(e) {
					const {
						className: t,
						...s
					} = e;
					return a.a.createElement("button", z({}, s, {
						className: Object(l.a)(t, Y.a.expandButton)
					}), a.a.createElement(q, {
						className: Y.a.expandIcon
					}))
				}), "ExpandButton", Zt.a),
				os = p.a.wrapped(ct, "FlatList", Zt.a),
				rs = p.a.wrapped(Bt.b, "ErrorText", Zt.a),
				is = p.a.wrapped(xt.a, "HorizontalVotes", Zt.a),
				as = p.a.div("ActionBar", Zt.a),
				ds = p.a.wrapped(gt.a, "TopMeta", Zt.a),
				cs = p.a.div("CommentContentWrapper", Zt.a),
				ls = p.a.wrapped(Ct.b, "AuthorHovercard", Zt.a),
				ms = Object(St.u)(),
				ps = Object(d.b)(() => Object(c.c)({
					comment: (e, t) => Object(L.b)(e, t),
					currentProfileModPermissions: St.h,
					depth: (e, t) => Object(T.j)(e, t),
					collapsed: Jt.b,
					collapsedBecauseCrowdControl: Jt.a,
					currentUser: F.k,
					flair: T.e,
					focused: T.t,
					highlightAnimationDisabled: Qt.c,
					isEditing: T.z,
					isLoggedIn: F.K,
					isPendingDeletion: T.B,
					isPresenceConsumptionExpEnabled: Gt.c,
					moderatorPermissions: (e, t) => {
						const s = Object(L.b)(e, t);
						return s ? Object(R.m)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: zt.f,
					modModeEnabled: St.S,
					errorMsgs: T.F,
					replyFormOpen: T.I,
					subreddit: St.r,
					subredditType: T.K,
					allowNFTs: es.a,
					hasSupporterRing: Yt.a,
					isOnlineConsumptionLoadTest: Gt.a,
					isOnlineUserPref: F.P,
					userIsBanned: (e, t) => {
						const s = Object(L.b)(e, t);
						return !!s && Object(pe.bb)(e, {
							subredditId: s.subredditId
						})
					}
				}), (e, {
					commentId: t,
					commentsPageKey: s,
					scrollToAndRemeasure: n,
					trackCommentClick: o
				}) => ({
					onCollapseClick: () => e(Object(h.o)({
						commentId: t,
						commentsPageKey: s,
						scrollToAndRemeasure: n
					})),
					onIgnoreReports: () => e(Object(U.g)(t)),
					onVoteClick: s => {
						const [n, r] = s === Kt.a.upvoted ? [Object(h.q)(t), "upvote_comment"] : [Object(h.j)(t), "downvote_comment"];
						o(r, t)(), e(n)
					}
				})),
				us = Object(V.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				hs = e => a.a.createElement("div", e, e.children),
				bs = e => a.a.createElement(a.a.Fragment, null, e.children),
				gs = ms(ps(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						comment: n,
						commentsPageKey: o,
						collapsed: r,
						collapsedBecauseCrowdControl: d,
						currentProfileModPermissions: c,
						currentUser: m,
						depth: p,
						errorMsgs: u,
						flair: h,
						focused: b,
						hasAwardGradient: g,
						highlightAnimationDisabled: f,
						highlightTreatment: x,
						isActive: C,
						isAvatarsInCommentsEnabled: v,
						isEditing: O,
						isFirstInList: y,
						isHighlighted: E,
						isLoggedIn: w,
						isOnlineUserPref: P,
						isPendingDeletion: j,
						isPresenceConsumptionExpEnabled: I,
						moderatorPermissions: _,
						modModeEnabled: S,
						onCollapseClick: T,
						onIgnoreReports: L,
						onLineMouseOver: N,
						onVoteClick: R,
						prediction: M,
						postId: F,
						replyFormOpen: V,
						subreddit: U,
						trackCommentClick: K,
						renderedInOverlay: q,
						subredditType: G,
						onPresenceIndicatorInViewport: Y,
						allowNFTs: z,
						hasSupporterRing: Q,
						isOnlineConsumptionLoadTest: J,
						userIsBanned: X
					} = e, Z = n.isDeleted, $ = !O && !Z && !!u && u.length > 0, ee = Object(D.a)(B.c.edit, n.id), te = Object(D.a)(B.c.replyToComment, n.id), se = Object(re.a)(_), ne = Object(Ot.c)(n), oe = Object(Ee.c)(n), ie = n.authorIsContractor && G === Ut.f.EmployeesOnly, de = n.isLocked, ce = se && S, le = !O && !Z && (w || v), me = !!m && Object(Ht.e)(m) === n.author, [pe, ue] = Object(i.useState)(null), [he, be] = Object(i.useState)(null), ge = Object(ae.f)(n) || Object(ae.g)(n) ? hs : Dt.a, fe = Object(ae.f)(n) ? bs : ls;
					Object(i.useEffect)(() => {
						if (!O && !Z && (g && ue(a.a.createElement(bt, null)), null !== x)) {
							if (x.glowHexColor) {
								const e = x.glowHexColor;
								ue(a.a.createElement(pt, {
									hexColor: e
								}))
							}
							if (x.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = x.effectHighlight;
								be(a.a.createElement(k, {
									prefersReducedAnimation: f,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [O, Z, g, f, x]);
					const xe = Object(i.useContext)(Ft),
						Ce = !Z && !Object(ae.f)(n) && (!X || X && me) && !Object(ae.g)(n) && w,
						ve = Object(i.useCallback)(() => {
							Ce && I && !me && Y && Y(n.id)
						}, [n.id, Y, Ce, I, me]),
						Oe = Object(It.a)(n),
						ye = !!z && Object(ts.b)(n.profileImage);
					return a.a.createElement("div", {
						className: Object(l.a)(`Comment ${n.id}`, Zt.a.CommentWrapper, {
							[Zt.a.highlightComment]: E,
							[Zt.a.deleted]: Z,
							[Zt.a.focused]: b,
							[Zt.a.redesign]: v,
							[Zt.a.topLevel]: !p
						})
					}, pe, he, !O && !Z && y && a.a.createElement("div", {
						className: Zt.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt="" src="${$t.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstCommentVisible || function(){})();" />\n              `
						}
					}), a.a.createElement(ns, {
						className: Object(l.a)(n.id, {
							[Zt.a.hidden]: !r,
							[Zt.a.visible]: r
						}),
						onClick: () => {
							s(), T(), K("collapse", n.id)()
						},
						onMouseOver: () => N(n.id),
						onMouseOut: s
					}), a.a.createElement(fe, {
						alwaysShowChildren: !0,
						hoverDivClassName: Zt.a.AuthorHoverDiv,
						postOrComment: n,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: q ? Et.c.Lightbox : void 0,
						collapsed: r,
						isCommentAuthorBlocked: Object(ae.g)(n)
					}, a.a.createElement(ge, {
						className: Zt.a.UserIconContainer,
						to: `/user/${n.author}/`
					}, xe ? a.a.createElement(a.a.Fragment, null, Q && a.a.createElement("div", {
						className: Zt.a.supporterRing
					}), a.a.createElement(wt.a, {
						isNft: ye,
						className: Object(l.a)(Zt.a.UserIcon, {
							[Zt.a.UserIconNft]: ye
						}),
						iconUrl: n.profileImage,
						isNSFW: n.profileOver18 || !1,
						nsfwIconUrl: Pt.a,
						userName: n.author,
						isHighlighted: E,
						shouldShowPresenceIndicator: Ce && I,
						onPresenceIndicatorInViewport: ve,
						isCommentAuthorBlocked: Object(ae.g)(n),
						collapsed: r,
						shouldUseOnlineOverride: me,
						isOnlineOverrideValue: P,
						isOnlineStatusLoadTest: Ce && J,
						authorId: n.authorId
					})) : a.a.createElement("div", {
						className: Zt.a.UserIcon
					}))), a.a.createElement(cs, {
						className: Object(l.a)({
							[Zt.a.isActive]: C,
							[Zt.a.isCollapsed]: r,
							[Zt.a.isLocked]: de && ce,
							[Zt.a.isPendingDeletion]: j,
							[Zt.a.isRemoved]: !!n.bannedBy && ce
						})
					}, a.a.createElement(Vt.a, null, A.fbt._("level {depth}", [A.fbt._param("depth", p + 1)], {
						hk: "2XnyAV"
					})), a.a.createElement(ds, {
						userHasNft: ye,
						childrenInfo: t,
						className: Object(l.a)({
							[Zt.a.collapsed]: r,
							[Zt.a.noFlair]: Object(Wt.o)(h || null)
						}),
						collapsed: r,
						collapsedBecauseCrowdControl: d,
						comment: n,
						commentsPageKey: o,
						flair: h,
						isPostComment: !0,
						renderedInOverlay: q,
						renderContractorBadge: ie
					}), !r && a.a.createElement(i.Fragment, null, O && a.a.createElement(H.a, {
						className: Object(l.a)(Zt.a.EditCommentForm, Zt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: o,
						depth: p,
						draftType: B.c.edit,
						draftKey: ee,
						postId: F,
						rtJson: Object(It.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: n.id,
						submitAction: e => Object(W.i)({
							id: n.id,
							commentsPageKey: o,
							depth: p,
							draftKey: ee,
							formData: e
						}),
						submitButtonText: A.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !O && !Z && a.a.createElement("div", {
						"data-test-id": _t.d,
						className: Zt.a.CommentBody
					}, M ? a.a.createElement(ft.a, {
						comment: n,
						prediction: M
					}) : a.a.createElement(kt.a, {
						content: Oe,
						mediaMetadata: n.media && n.media.mediaMetadata,
						rtJsonElementProps: us(e)
					}), a.a.createElement(qt.b, {
						content: Oe
					})), S && se && ne && a.a.createElement(vt.a, {
						thing: n
					}), S && se && oe && a.a.createElement(yt.a, {
						onIgnoreReports: L,
						reportable: n
					}), le && a.a.createElement(as, null, v && a.a.createElement(is, {
						downvoteButtonClassName: Zt.a.voteButton,
						downvoteClassName: Zt.a.upDownVote,
						model: n,
						onVoteClick: R,
						scoreClassName: Zt.a.score,
						upvoteButtonClassName: Zt.a.voteButton,
						upvoteClassName: Zt.a.upDownVote
					}), a.a.createElement(os, {
						comment: n,
						commentsPageKey: o,
						depth: p,
						isAvatarsInCommentsEnabled: v,
						collapsedBecauseCrowdControl: d,
						modModeEnabled: S,
						moderatorPermissions: c || _,
						renderedInOverlay: q,
						isCommentFocused: b,
						subreddit: U,
						trackCommentClick: K
					})), $ && u.map(e => a.a.createElement(rs, {
						key: e
					}, e)), V && a.a.createElement(H.a, {
						className: Object(l.a)(Zt.a.EditCommentForm, Zt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: o,
						depth: p,
						draftType: B.c.replyToComment,
						draftKey: te,
						isTopLevelComment: !1,
						parentCommentId: n.id,
						postId: F,
						submitAction: ({
							validate: e,
							...t
						}, s) => e ? Object(W.s)({
							commentsPageKey: o,
							draftKey: te,
							parentCommentDepth: p,
							parentCommentId: n.id,
							formData: t,
							editorMode: s
						}) : Object(W.l)({
							commentsPageKey: o,
							draftKey: te,
							parentCommentDepth: p,
							parentCommentId: n.id,
							formData: t,
							editorMode: s
						}),
						submitButtonText: A.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))))
				}));
			var fs = e => a.a.createElement(jt.a.Consumer, null, t => a.a.createElement(gs, ss({}, e, {
					trackCommentClick: t
				}))),
				xs = s("./src/lib/domUtils/index.ts"),
				Cs = s("./src/lib/fastdom/index.ts"),
				vs = s("./src/reddit/constants/elementIds.ts");
			const Os = () => {
				Cs.a.write(() => {
					const e = document.getElementById(vs.d);
					e ? Object(xs.c)(e, 0) : Object(xs.c)(document, 0)
				})
			};
			var ys = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				Es = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ks = s("./src/reddit/helpers/path/index.ts"),
				ws = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				Ps = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				js = s.n(Ps);
			const {
				fbt: Is
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _s = p.a.wrapped(ws.a, "ArrowRight", js.a), Ss = p.a.wrapped(ys.a, "LinkOrOverlayLink", js.a), Ts = p.a.span("HoverSpan", js.a), Ls = Object(c.c)({
				permalink: (e, t) => Object(T.m)(e, {
					commentId: Object(T.r)(e, t).parentId
				})
			});
			var Ns = Object(d.b)(Ls)(Object(Es.b)(({
					isActive: e,
					isOverlay: t,
					permalink: s
				}) => a.a.createElement("div", {
					className: Object(l.a)(js.a.Wrapper, {
						[js.a.isActive]: e
					})
				}, a.a.createElement(Ss, {
					isOverlay: !!t,
					to: Object(ks.b)(s),
					onClick: Os
				}, a.a.createElement(Ts, null, Is._("Continue this thread", null, {
					hk: "3eplK8"
				})), " ", a.a.createElement(_s, null))))),
				Rs = s("./src/lib/makeCommentPermalink/index.ts"),
				Ms = s("./src/reddit/actions/login.ts"),
				Fs = s("./src/reddit/constants/experiments.ts"),
				As = s("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Bs = s("./src/reddit/helpers/trackers/moreReplies.ts"),
				Ds = s("./src/reddit/hooks/useTracking.ts"),
				Vs = s("./src/reddit/selectors/experiments/moreRepliesSignup.ts"),
				Ws = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				Us = s.n(Ws);
			const {
				fbt: Hs
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ks = p.a.div("MoreCommentsItemWrapper", Us.a), qs = p.a.p("MoreComments", Us.a), Gs = p.a.wrapped(qs, "MoreCommentsInteractive", Us.a), Ys = Object(c.c)({
				isMoreRepliesSignupEnabled: Vs.a,
				moreCommentsItem: T.C,
				moreCommentsPending: T.D,
				moreRepliesSignupVariant: Vs.c
			});
			var zs = Object(d.b)(Ys, (e, t) => ({
					moreCommentsClicked: () => e(Object(h.l)(t.commentsPageKey, t.moreCommentsId)),
					openRegisterModal: () => {
						const {
							parentId: s,
							postId: n,
							postPermalink: o
						} = t;
						e((e, t) => {
							const r = t();
							Object(Vs.b)(r), e(Object(Ms.k)());
							const i = r.platform.currentPage,
								a = Object(St.R)(r, i),
								d = a ? Object(Rs.a)(a, n, s) : o;
							e(Object(se.k)({
								actionSource: se.a.CommentMoreReplies,
								redirectUrl: d
							}))
						})
					}
				}))(e => {
					const {
						isActive: t,
						isMoreRepliesSignupEnabled: s,
						moreCommentsClicked: n,
						moreCommentsItem: o,
						moreCommentsPending: r,
						moreRepliesSignupVariant: i,
						openRegisterModal: d
					} = e, c = Object(Ds.a)(), m = e => {
						e.preventDefault(), e.stopPropagation(), c(Object(Bs.c)()), d()
					};
					return a.a.createElement(Ks, null, r ? a.a.createElement(qs, null, Hs._("loading...", null, {
						hk: "47z89"
					})) : a.a.createElement(jt.a.Consumer, null, e => a.a.createElement(Gs, {
						className: Object(l.a)({
							[Us.a.isActive]: t
						}),
						onClick: e => ((e, t) => {
							s ? (c(Object(Bs.a)()), i === Fs.Pd.ThrottledDaily ? (As.a.throttleFeature(Fs.Qd.Daily), m(e)) : i === Fs.Pd.ThrottledWeekly ? (As.a.throttleFeature(Fs.Qd.Weekly), m(e)) : m(e)) : n()
						})(e)
					}, Hs._({
						"*": "{number of more replies hidden} more replies",
						_1: "1 more reply"
					}, [Hs._plural(null == o ? void 0 : o.numComments, "number of more replies hidden")], {
						hk: "J0jQW"
					}))))
				}),
				Qs = s("./node_modules/lodash/times.js"),
				Js = s.n(Qs),
				Xs = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				Zs = s.n(Xs);
			const $s = p.a.wrapped(e => a.a.createElement("div", e, a.a.createElement("i", {
					className: f.m
				})), "Line", Zs.a),
				en = p.a.div("LineContainer", Zs.a),
				tn = p.a.div("ShortLineContainer", Zs.a);
			var sn = e => {
					const {
						collapsed: t,
						depth: s,
						hasGlowBorder: n,
						onLineClick: o,
						onLineMouseOver: r,
						onLineMouseOut: i,
						onShortLineClick: d,
						parentNodeIds: c,
						type: m
					} = e;
					return a.a.createElement(en, null, Js()(s + 1, e => e === s ? m !== b.a.Comment || t ? null : a.a.createElement(tn, {
						key: c[e]
					}, a.a.createElement($s, {
						className: Object(l.a)(c[e], {
							[Zs.a.hasGlowBorder]: !!n,
							[Zs.a.topLevel]: 0 === s
						}),
						onClick: d,
						onMouseOver: () => r(c[e]),
						onMouseOut: () => i(c[e])
					})) : a.a.createElement($s, {
						className: c[e],
						key: c[e],
						onClick: o(e),
						onMouseOver: () => r(c[e]),
						onMouseOut: () => i(c[e])
					})))
				},
				nn = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				on = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				rn = s.n(on);
			const an = p.a.div("CommentListNodeWrapper", rn.a),
				dn = e => {
					const t = document.querySelectorAll(`.${e}`);
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(f.f)
				},
				cn = () => {
					const e = document.querySelectorAll(`.${f.f}`);
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(f.f)
				};
			var ln = Object(d.b)(() => Object(c.c)({
				collapsed: (e, {
					commentLink: t,
					commentsPageKey: s
				}) => Object(Jt.b)(e, {
					commentId: t.id,
					commentsPageKey: s
				}),
				commentListNode: (e, t) => Object(T.l)(e, t),
				depth: (e, t) => Object(T.j)(e, t),
				highlightTreatment: (e, {
					commentLink: t
				}) => {
					let s = null;
					const n = Object(T.l)(e, {
						commentLink: t
					});
					if (n && t.type === b.a.Comment) {
						s = j(n.treatmentTags)
					}
					return s
				},
				isActive: (e, {
					commentLink: t
				}) => !!e.shortcuts.activeCommentId && t.id === e.shortcuts.activeCommentId,
				isAvatarsInCommentsEnabled: nn.a,
				isAwarded: (e, {
					commentLink: t
				}) => {
					const s = Object(T.l)(e, {
						commentLink: t
					});
					return !(t.type !== b.a.Comment || !s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(N.a)(e, t);
						return s && s.coinPrice >= x.g
					})
				},
				isHighlighted: (e, {
					commentLink: t
				}) => {
					const s = Object(T.p)(e);
					if (s === S.a.None) return !1;
					if (t.type !== b.a.Comment) return !1;
					const n = t.id,
						o = Object(L.b)(e, {
							commentId: n
						});
					if (!o) return !1;
					const r = Object(F.s)(e),
						i = !!Object(R.l)(e, {
							postId: o.postId
						}),
						a = Object(M.H)(e, {
							postId: o.postId
						});
					if (!a || !a.previousVisits || a.previousVisits.length < 1) return !1;
					const d = s === S.a.Last ? a.previousVisits[a.previousVisits.length - 1] : a.previousVisits[0];
					return (i || r) && o.created > d
				},
				postPermalink: M.G
			}), (e, {
				commentLink: t,
				commentsPageKey: s,
				scrollToAndRemeasure: n
			}) => ({
				onLineClick: o => () => {
					e(Object(h.d)({
						commentLink: t,
						commentsPageKey: s,
						lineDepth: o,
						scrollToAndRemeasure: n
					}))
				},
				onShortLineClick: () => e(Object(h.o)({
					commentId: t.id,
					commentsPageKey: s,
					scrollToAndRemeasure: n
				}))
			}))(e => {
				const {
					childrenInfo: t,
					className: s,
					collapsed: n,
					commentLink: o,
					commentsPageKey: r,
					depth: i,
					highlightTreatment: d,
					isActive: c,
					isAvatarsInCommentsEnabled: m,
					isAwarded: p,
					isFirstInList: u,
					isHidden: h,
					isHighlighted: f,
					onLineClick: x,
					onPresenceIndicatorInViewport: C,
					onShortLineClick: v,
					parentNodeIds: O,
					postId: y,
					postPermalink: E,
					renderedInOverlay: k,
					scrollToAndRemeasure: w
				} = e, P = !!p, j = !(!d || !d.glowHexColor), I = j && i > 0, _ = j, S = a.a.createElement(an, {
					className: Object(l.a)(s, {
						[rn.a.isHidden]: h,
						[rn.a.glowBorderTopPadding]: I,
						[rn.a.glowBorderBottomPadding]: _
					}),
					id: o.id,
					style: {
						paddingLeft: i * (g.w + g.v) + (o.type === b.a.Comment ? g.w : 0)
					},
					tabIndex: -1
				}, a.a.createElement(sn, {
					collapsed: n,
					depth: i,
					hasGlowBorder: I,
					onLineClick: x,
					onLineMouseOver: dn,
					onLineMouseOut: cn,
					onShortLineClick: v,
					type: o.type,
					parentNodeIds: O
				}), mn({
					childrenInfo: t,
					clearHovered: cn,
					commentLink: o,
					commentsPageKey: r,
					depth: i,
					onLineMouseOver: dn,
					hasAwardGradient: P,
					highlightTreatment: d,
					isActive: c,
					isAvatarsInCommentsEnabled: m,
					isFirstInList: u,
					isHighlighted: f,
					parentNodeIds: O,
					postId: y,
					renderedInOverlay: k,
					scrollToAndRemeasure: w,
					onPresenceIndicatorInViewport: C,
					postPermalink: E
				}));
				return m && o.type === b.a.Comment ? a.a.createElement(At, null, S) : S
			});
			const mn = ({
				childrenInfo: e,
				clearHovered: t,
				commentLink: s,
				commentsPageKey: n,
				depth: o,
				hasAwardGradient: r,
				highlightTreatment: i,
				isActive: d,
				isAvatarsInCommentsEnabled: c,
				isFirstInList: l,
				isHighlighted: m,
				onLineMouseOver: p,
				parentNodeIds: u,
				postId: h,
				renderedInOverlay: g,
				scrollToAndRemeasure: f,
				onPresenceIndicatorInViewport: x,
				postPermalink: C
			}) => {
				switch (s.type) {
					case b.a.Comment:
						return a.a.createElement(fs, {
							childrenInfo: e,
							clearHovered: t,
							commentId: s.id,
							commentsPageKey: n,
							hasAwardGradient: r,
							highlightTreatment: i,
							isActive: d,
							isAvatarsInCommentsEnabled: c,
							isFirstInList: l,
							isHighlighted: m,
							onLineMouseOver: p,
							postId: h,
							renderedInOverlay: g,
							scrollToAndRemeasure: f,
							onPresenceIndicatorInViewport: x
						});
					case b.a.MoreComments:
						return a.a.createElement(zs, {
							commentsPageKey: n,
							isActive: d,
							moreCommentsId: s.id,
							parentId: u[o - 1],
							postId: h,
							postPermalink: C
						});
					case b.a.ContinueThread:
						return a.a.createElement(Ns, {
							id: s.id,
							isActive: d
						})
				}
			};
			var pn = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				un = s("./src/reddit/components/Comments/States/index.tsx"),
				hn = s("./src/reddit/components/Scroller/Simple.tsx"),
				bn = s("./src/reddit/featureFlags/index.ts"),
				gn = s("./src/reddit/helpers/commentList/index.ts"),
				fn = s("./src/reddit/helpers/trackers/comment.ts"),
				xn = s("./src/telemetry/index.ts"),
				Cn = s("./src/lib/LRUCache/index.ts"),
				vn = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				On = s("./src/reddit/components/Comments/index.m.less"),
				yn = s.n(On);
			const En = g.f + 10,
				kn = 65,
				wn = p.a.wrapped(hn.b, "Scroller", yn.a),
				Pn = Object(c.c)({
					allCollapsed: T.a,
					commentLinks: T.k,
					commentThreadLinkSet: T.o,
					measureScrollFPS: bn.d.measureScrollFPS,
					moreComments: T.b,
					postPermalink: M.G
				}),
				jn = Object(d.b)(Pn, (e, t) => ({
					loadCommentAuthorsPowerupsInfo: async t => await e(Object(u.getSubredditUserCommentsPowerupsInfoFromCommentLinks)(t)),
					onCommentEnteredViewport: t => e(Object(h.e)(t)),
					onCommentLeftViewport: (t, s) => e(Object(h.h)(t, s))
				})),
				In = new Cn.a(500),
				_n = new Cn.a(500),
				Sn = (e, t) => {
					const s = `entered-${e}`;
					let n = In.get(s);
					return void 0 === n && (n = () => {
						t(e)
					}, In.set(s, n)), n
				},
				Tn = (e, t) => {
					const s = `left-${e}`;
					let n = _n.get(s);
					return void 0 === n && (n = s => {
						t(e, s)
					}, _n.set(s, n)), n
				};
			class Ln extends a.a.Component {
				constructor(e) {
					super(e), this.getParentNodeIds = e => {
						const {
							commentLinks: t,
							commentThreadLinkSet: s
						} = this.props;
						if (this.parentNodeIdsMap[e.id]) return this.parentNodeIdsMap[e.id];
						const n = s[e.id].depth,
							o = t.findIndex(t => t.id === e.id);
						if (0 === n || 0 === o) return this.parentNodeIdsMap[e.id] = [e.id], this.parentNodeIdsMap[e.id];
						const r = t[o - 1],
							i = this.parentNodeIdsMap[r.id].slice();
						return this.parentNodeIdsMap[e.id] = i.filter(e => !!s[e] && s[e].depth < n), this.parentNodeIdsMap[e.id].push(e.id), this.parentNodeIdsMap[e.id]
					}, this.getChildrenInfo = e => this.childrenInfoMap[e] || void 0, this.onPresenceIndicatorInViewport = e => {
						this.state.isPresenceEventSent || (this.setState({
							isPresenceEventSent: !0
						}), this.props.sendEvent(Object(fn.b)(e)))
					}, this.parentNodeIdsMap = {}, pn.c(), this.childrenInfoMap = {}, this.state = {
						isPresenceEventSent: !1
					}
				}
				UNSAFE_componentWillMount() {
					const {
						commentLinks: e,
						allCollapsed: t,
						commentThreadLinkSet: s,
						moreComments: n
					} = this.props;
					this.timerId && xn.c.cancel(this.timerId), e.length && (this.timerId = xn.c.start()), this.findHiddenNodes(e, t, s, n)
				}
				componentDidMount() {
					this.timerId && Object(xn.b)(m.n.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: xn.c.end(this.timerId)
					}), this.props.loadCommentAuthorsPowerupsInfo(this.props.commentLinks)
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						allCollapsed: t,
						commentsPageKey: s,
						commentLinks: n,
						commentThreadLinkSet: o,
						moreComments: i
					} = e;
					(s !== this.props.commentsPageKey || n.length > this.props.commentLinks.length || !r()(t, this.props.allCollapsed)) && this.findHiddenNodes(n, t, o, i)
				}
				shouldComponentUpdate(e) {
					const {
						commentsPageKey: t,
						commentLinks: s,
						allCollapsed: n
					} = this.props;
					return e.commentsPageKey !== t || e.commentLinks.length > s.length || !r()(e.allCollapsed, n) || e.commentLinks.some((e, t) => e.id !== s[t].id)
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && xn.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = xn.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(xn.b)(m.n.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: xn.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					this.timerId && xn.c.cancel(this.timerId)
				}
				findHiddenNodes(e, t, s, n) {
					if (!t || !Object.keys(t).length) return;
					let o = null,
						r = 1 / 0,
						i = 0,
						a = !1;
					pn.c();
					for (let d = 0; d < e.length; d++) {
						const c = e[d];
						o && (s[c.id].depth > r ? (pn.a(c.id), i += Object(gn.d)(c, n), c.type === b.a.ContinueThread && (a = !0)) : (this.childrenInfoMap[o] = {
							numChildren: i,
							hasContinueThread: a
						}, o = null, r = 1 / 0, i = 0, a = !1)), !o && t[c.id] && (o = c.id, r = s[c.id].depth)
					}
				}
				render() {
					return this.props.commentLinks.length ? this.renderList() : this.renderEmptyState()
				}
				getScrollChild(e, t) {
					const {
						commentsPageKey: s,
						onCommentEnteredViewport: n,
						onCommentLeftViewport: o,
						postId: r,
						renderedInOverlay: i
					} = this.props, d = Sn(e.id, n), c = Tn(e.id, o);
					return {
						estHeight: pn.b(e.id) ? 0 : kn,
						id: e.id,
						trackOnEnteredViewport: d,
						trackOnExitedViewport: c,
						render: ({
							placeholderRecommended: n,
							height: o,
							width: d,
							scrollToAndRemeasure: c
						}) => n ? a.a.createElement("div", {
							style: {
								height: o,
								backgroundColor: "#fff"
							}
						}) : a.a.createElement(ln, {
							childrenInfo: this.getChildrenInfo(e.id),
							commentLink: e,
							commentsPageKey: s,
							id: e.id,
							isFirstInList: 0 === t,
							isHidden: pn.b(e.id),
							postId: r,
							scrollToAndRemeasure: c,
							renderedInOverlay: !!i,
							parentNodeIds: this.getParentNodeIds(e),
							onPresenceIndicatorInViewport: this.onPresenceIndicatorInViewport
						})
					}
				}
				renderList() {
					const {
						className: e,
						commentLinks: t,
						commentsPageKey: s,
						measureScrollFPS: n,
						onAllCommentsRendered: o,
						renderedInOverlay: r,
						showSignupUpsell: i
					} = this.props;
					let d;
					if (n) {
						d = `comments-${r?"lightbox":"page"}`
					}
					const c = t.map((e, t) => this.getScrollChild(e, t));
					return a.a.createElement(wn, {
						className: Object(l.a)(yn.a.Scroller, e),
						disableScrollCache: r,
						key: s,
						getContainer: () => r ? document.getElementById(vs.d) : null,
						onScroll: i,
						onAllChildrenRendered: o,
						preventScrollOnMount: !0,
						scrollToChildPadding: En,
						trackingName: d
					}, c)
				}
				renderEmptyState() {
					return this.props.commentId ? a.a.createElement(un.g, {
						link: this.props.postPermalink
					}) : a.a.createElement(un.c, null)
				}
			}
			t.a = jn(Object(Ie.c)(Object(vn.a)(Ln)))
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(n.a)({
				resolved: {},
				chunkName: () => "ChatPost",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("ChatMessageInput~ChatPost"), s.e("ChatPost")]).then(s.bind(null, "./src/reddit/components/CommentsChat/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommentsChat/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = o
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.m.less": function(e, t, s) {
			e.exports = {
				LoaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				loaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				Icon: "_1nrdmuhkCLXh8N_46gKAyn",
				icon: "_1nrdmuhkCLXh8N_46gKAyn",
				Byline: "eI85Q_-1x9VERN15oDr3X",
				byline: "eI85Q_-1x9VERN15oDr3X",
				gradientAnimation: "_3kGJh7EpOUlhrvN051jlhD"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				d = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				c = s.n(d);
			const l = i.a.div("LoaderWrapper", c.a),
				m = i.a.div("Icon", c.a),
				p = i.a.div("Byline", c.a),
				u = Object(r.a)({
					ErrorComponent: () => o.a.createElement(l, null, o.a.createElement(m, null), o.a.createElement(p, null)),
					getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput~ChatPost"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: ({
						isLivestreaming: e
					}) => e ? null : o.a.createElement(l, null, o.a.createElement(m, null), o.a.createElement(p, null))
				});
			t.a = e => o.a.createElement(u, e)
		},
		"./src/reddit/components/CommentsPageNativeAd/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "CommentsPageNativeAd",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CommentsPageNativeAd").then(s.bind(null, "./src/reddit/components/CommentsPageNativeAd/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommentsPageNativeAd/index.tsx"
				}
			})
		},
		"./src/reddit/components/CommentsPageSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				card: "_2Zqrm36MciZxq2elpbtQig",
				inFeedAd: "_2vWBnEHUdKqzj9DabP66L1",
				outerWrapper: "_31AVRNJbVMh2DUFRrpCQcD"
			}
		},
		"./src/reddit/components/CommentsPageSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/lodash/isEqual.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				h = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				b = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				g = s("./src/reddit/components/IdCard/async.tsx"),
				f = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				x = s("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				C = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				v = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				O = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				y = s("./src/reddit/components/Widgets/ReredditLink/async.tsx"),
				E = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				k = s("./src/reddit/featureFlags/component.tsx"),
				w = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				P = s("./src/reddit/models/Post/index.ts"),
				j = s("./src/reddit/selectors/experiments/postSeo.ts"),
				I = s("./src/reddit/selectors/seo/reredditPromo.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				T = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				L = s.n(T);
			const N = Object(k.a)("spPoints", h.a),
				R = Object(k.a)("spLeaderboard", b.a),
				M = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ProfileIdCard").then(s.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				F = Object(c.c)({
					isLoggedIn: S.K,
					postSEOV2IdCardVariant: j.h,
					shouldShowReredditPromo: I.a,
					widgets: Object(p.a)(_.r)
				}),
				A = Object(d.b)(F);
			class B extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						isMounted: !0
					})
				}
				shouldComponentUpdate(e, t) {
					return this.props.subredditName !== e.subredditName || !r()(this.props.widgets, e.widgets) || this.props.post.id !== e.post.id
				}
				renderFooter(e) {
					const {
						commentsPageKey: t,
						isOverlay: s,
						subredditName: n,
						post: o,
						isFakeOverlay: r,
						postSEOV2IdCardVariant: i
					} = this.props, d = !Object(j.c)(i) && !Object(j.f)(i);
					return a.a.createElement(v.a, {
						adComponentOnFakeOverlay: r,
						adComponent: d ? a.a.createElement(x.a, {
							postId: o.id,
							isOverlay: s,
							listingName: n,
							placement: m.c.BELOW_THE_FOLD,
							placementIndex: e,
							position: w.a.BOTTOM,
							refreshKey: o.id,
							sizes: m.p,
							commentsPageKey: t
						}) : null
					})
				}
				render() {
					const {
						className: e,
						commentsPageKey: t,
						isLoggedIn: s,
						isOverlay: n,
						post: o,
						postSEOV2IdCardVariant: r,
						shouldShowReredditPromo: i,
						subredditId: d,
						subredditName: c,
						widgets: p
					} = this.props;
					let h = 0;
					const b = Object(j.c)(r) || Object(j.f)(r),
						v = a.a.createElement(x.a, {
							postId: o.id,
							isOverlay: n,
							listingName: c,
							placement: m.c.ABOVE_THE_FOLD,
							placementIndex: h++,
							position: w.a.FIRST,
							refreshKey: o.id,
							sizes: m.i,
							commentsPageKey: t
						});
					return a.a.createElement("div", {
						className: Object(l.a)(L.a.outerWrapper, e)
					}, Object(P.q)(o) ? a.a.createElement(M, {
						profileName: c,
						isOverlay: n || !1
					}) : a.a.createElement(g.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: n,
						listingName: c,
						postId: o.id,
						rememberPosition: o.numComments > 0,
						isMinimal: b
					}), a.a.createElement(u.a, {
						cardClassName: L.a.card,
						subredditId: d
					}), a.a.createElement(N, {
						className: L.a.card,
						subredditId: d,
						uniqueId: o.id
					}), a.a.createElement(R, {
						className: L.a.card,
						subredditId: d,
						uniqueId: o.id
					}), a.a.createElement(f.a, {
						subredditId: d
					}), v, s && p.map((e, t) => a.a.createElement(C.a, {
						key: `widgetSpacer${t}`
					}, a.a.createElement(E.a, {
						subredditName: c,
						widget: e
					}))), o.isSponsored && a.a.createElement(C.a, null, a.a.createElement(O.a, null)), i && a.a.createElement(y.a, {
						directoryTimestamp: o.created,
						postId: o.id
					}), this.renderFooter(h++))
				}
			}
			t.a = A(B)
		},
		"./src/reddit/components/CommentsWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				ContentWrapper: "_1ump7uMrSA43cqok14tPrG",
				contentWrapper: "_1ump7uMrSA43cqok14tPrG",
				TruncatedComments: "_1oTUrVtKJk1ue0r3fe31kJ",
				truncatedComments: "_1oTUrVtKJk1ue0r3fe31kJ",
				MoreCommentsButton: "j9NixHqtN2j8SKHcdJ0om",
				moreCommentsButton: "j9NixHqtN2j8SKHcdJ0om"
			}
		},
		"./src/reddit/components/CommentsWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				l = s("./src/reddit/components/CommentsWrapper/index.m.less"),
				m = s.n(l);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = "500px";
			class h extends o.a.Component {
				render() {
					const {
						apiPending: e,
						children: t,
						className: s,
						handleViewAllCommentsClick: n,
						innerRef: i,
						shouldTruncateComments: l,
						numberOfComments: h,
						onClick: b
					} = this.props, g = l && !e, f = l ? m.a.TruncatedComments : "";
					return o.a.createElement("div", {
						onClick: b,
						ref: i
					}, o.a.createElement("div", {
						className: Object(r.a)(m.a.ContentWrapper, s, f),
						style: {
							"--commentswrapper-gradient-color": Object(c.a)(this.props).body,
							maxHeight: l ? u : "unset"
						}
					}, t), g && o.a.createElement(d.l, {
						className: m.a.MoreCommentsButton,
						onClick: n,
						"data-redditstyle": !0
					}, p._("View Entire Discussion ({number of comments} Comments)", [p._param("number of comments", Object(a.b)(h))], {
						hk: "1pmqUt"
					})))
				}
			}
			t.a = Object(i.a)(h)
		},
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "CreatorStats",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CreatorStats").then(s.bind(null, "./src/reddit/components/CreatorStats/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CreatorStats/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Audio/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("index~reddit-components-Econ-Prediction"), s.e("index")]).then(s.bind(null, "./src/reddit/components/Econ/Audio/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Audio/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less": function(e, t, s) {
			e.exports = {
				img: "_2j4blQAaYrPKIhe5jBJ9c8"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("index~reddit-components-Econ-Prediction"), s.e("index")]).then(s.bind(null, "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2y7BouacdnDeKNuREDVkim",
				v2Container: "_3Ck2ZoZ2ImMBMvI1gp5MaL",
				title: "KaBtU0qanIOVW0UniJKIe",
				label: "VmuxKqetMFPty4Vt4EAOj",
				participants: "_331K_coiMcnNskYgCaneWt",
				badge: "_29aHDAbliwom5yyuyhXsFc",
				live: "_15J6TjGStJy2YuJAIf8TW4",
				ended: "_3K1ErD5uCGRM98kPQaJ_Nv",
				awards: "_3jKFKIS1X6GZ6MOcUdAy08"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				c = s("./src/reddit/selectors/experiments/econ/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				m = s("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = ({
				participantsCount: e
			}) => p._({
				"*": "· {total participated users} players",
				_1: "· {total participated users} player"
			}, [p._param("total participated users", Object(m.b)(e)), p._plural(e)], {
				hk: "1yrPLH"
			});
			var h = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				b = s.n(h);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = ({
				post: e
			}) => {
				const t = e.predictionTournament,
					s = t.status === d.a.Live,
					o = t.status === d.a.Closed,
					m = Object(i.e)(c.x),
					p = Object(i.e)(t => Object(l.U)(t, {
						postId: e.id
					}));
				return m ? r.a.createElement("div", {
					className: b.a.v2Container
				}, r.a.createElement("div", {
					className: b.a.label
				}, r.a.createElement("span", null, null == p ? void 0 : p.displayText), s && r.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.live)
				}, g._("Live", null, {
					hk: "1G2P1W"
				})), o && r.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.ended)
				}, g._("Ended", null, {
					hk: "4s3hco"
				})), t.totalParticipantsCount && r.a.createElement("span", {
					className: b.a.predictions
				}, r.a.createElement(u, {
					participantsCount: t.totalParticipantsCount
				})), r.a.createElement(a.a, {
					className: b.a.awards,
					thing: e
				})), r.a.createElement("h3", {
					className: b.a.title
				}, t.name)) : r.a.createElement("div", {
					className: b.a.container
				}, r.a.createElement("h3", {
					className: b.a.title
				}, t.name), r.a.createElement("div", {
					className: b.a.label
				}, r.a.createElement("span", null, g._("Predictions Tournament", null, {
					hk: "sZ4UO"
				})), s && r.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.live)
				}, g._("Live", null, {
					hk: "1G2P1W"
				})), o && r.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.ended)
				}, g._("Ended", null, {
					hk: "4s3hco"
				}))), r.a.createElement(a.a, {
					className: b.a.awards,
					thing: e
				}))
			}
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, s) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/FocusableContent/index.m.less"),
				d = s.n(a);
			t.a = i.a.wrapped(e => o.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[d.a.isFocused]: e.isFocused,
					[d.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", d.a)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, s) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/layout/row/Inline/index.tsx"),
				r = s("./src/reddit/components/Hovercards/helpers.m.less"),
				i = s.n(r);
			const a = n.a.wrapped(o.a, "UserActionItem", i.a),
				d = e => {
					const {
						author: t,
						itemId: s,
						subredditName: n,
						tooltipIdPrefix: o,
						tooltipType: r
					} = e;
					let i = o;
					return s && (i = `${i}--${s}`), r && (i = `${i}--${r}`), t && (i = `${i}--${t}`), n && (i = `${i}--${n}`), i
				}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, s) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				a = s.n(i),
				d = s("./src/lib/lessComponent.tsx");
			const c = d.a.div("IconWrapper", a.a),
				l = d.a.div("TextWrapper", a.a);

			function m(e) {
				const {
					className: t,
					color: s,
					icon: n,
					subtitle: i,
					title: d,
					textWrapperClassName: m
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(t, a.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, o.a.createElement("div", {
					className: a.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), n ? o.a.createElement(c, null, n) : o.a.createElement(c, null), o.a.createElement(l, {
					className: m
				}, o.a.createElement("div", {
					className: a.a.title
				}, d), i && o.a.createElement("div", {
					className: a.a.subtitle
				}, i)))
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_1EjIqPTCvhReSe3IjZptiB",
				bannerBase: "_1EjIqPTCvhReSe3IjZptiB",
				ArchivedIcon: "_3Apkcb3itLCGec85v2ZzFz",
				archivedIcon: "_3Apkcb3itLCGec85v2ZzFz"
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/constants/colors.ts"),
				a = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				d = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				c = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less"),
				l = s.n(c);
			t.a = () => r.a.createElement(d.a, {
				className: l.a.BannerBase,
				color: i.b.locked,
				icon: r.a.createElement(a.a, {
					className: l.a.ArchivedIcon
				}),
				subtitle: n.fbt._("New comments cannot be posted and votes cannot be cast", null, {
					hk: "3jwi5b"
				}),
				title: n.fbt._("This thread is archived", null, {
					hk: "kEcat"
				})
			})
		},
		"./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				lockIcon: "_26YMkU38Pb6t5wXIJSne-H",
				bannerBase: "jf95ZrrjIs2i--Ud8Kvb7"
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				a = s("./src/reddit/constants/colors.ts"),
				d = s("./src/reddit/icons/svgs/SquareLock/index.tsx"),
				c = s("./src/reddit/models/Subreddit/index.ts"),
				l = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				m = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less"),
				p = s.n(m);
			const u = r.a.createElement(d.a, {
					className: p.a.lockIcon
				}),
				h = e => Object(c.h)(e) ? i.d.profile : i.d.subreddit;

			function b({
				subredditOrProfile: e
			}) {
				const t = e ? n.fbt._("This thread has been locked by the moderators of {communityname}", [n.fbt._param("communityname", h(e) + e.name)], {
					hk: "2HSQXz"
				}) : n.fbt._("This thread has been locked", null, {
					hk: "4fn3dn"
				});
				return r.a.createElement(l.a, {
					className: p.a.bannerBase,
					color: a.b.locked,
					icon: u,
					subtitle: n.fbt._("New comments cannot be posted", null, {
						hk: "2A32Yr"
					}),
					title: t
				})
			}
		},
		"./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less": function(e, t, s) {
			e.exports = {
				contestModeEnabled: "_3Jf9vrUhPCp1M6DPL_bjy9",
				TrophyIcon: "_3v30vS-N87epKUIqWSlBm1",
				trophyIcon: "_3v30vS-N87epKUIqWSlBm1"
			}
		},
		"./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				c = s("./src/reddit/icons/svgs/Trophy/index.tsx"),
				l = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less"),
				m = s.n(l);
			const p = a.a.wrapped(c.a, "TrophyIcon", m.a);
			t.a = Object(i.a)(e => {
				const {
					hasModeratorPostPermissions: t,
					theme: s
				} = e, o = t ? n.fbt._("Comments are in random ordering and vote scores are hidden to non-mods", null, {
					hk: "2gpz9d"
				}) : n.fbt._("Comments are in random ordering and vote scores are hidden", null, {
					hk: "3qrgsh"
				});
				return r.a.createElement(d.a, {
					className: m.a.contestModeEnabled,
					color: s && s.newCommunityTheme.linkText,
					icon: r.a.createElement(p, null),
					subtitle: o,
					title: n.fbt._("This post has contest mode enabled", null, {
						hk: "42oz5Q"
					})
				})
			})
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				bannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				icon: "S7CavmS-v3qdubhT9asIc",
				link: "FmwbWt4ZwkxbQbR-0vj1G"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3UJGTKmHd4TVKyOdhiMAJ1",
				rawHtmlDisplay: "s2P-f2c3l2Irco5Ru0S5J",
				link: "_1eRb8-B7kEgkwxWFSWuVUk",
				icon: "WCZvfrkaO-Zq7vsDKOAdS"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/controls/InternalLink/index.tsx"),
				m = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				h = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				b = s.n(h);
			const g = r.a.createElement(m.a, {
					className: b.a.icon
				}),
				f = Object(a.c)({
					subreddit: p.w,
					subredditAboutInfo: p.t
				}),
				x = Object(i.b)(f);
			t.a = x(e => {
				const {
					subreddit: t,
					subredditAboutInfo: s
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const o = s && s.quarantineMessageHtml,
					i = s && s.quarantineMessage || n.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return r.a.createElement(u.a, {
					className: b.a.container,
					color: c.b.quarantine,
					icon: g,
					subtitle: r.a.createElement("span", null, n.fbt._("This community is {=quarantined}", [n.fbt._param("=quarantined", r.a.createElement("a", {
						className: b.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, n.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", o ? r.a.createElement(d.a, {
						className: b.a.rawHtmlDisplay,
						html: o
					}) : i, " ", r.a.createElement(l.a, {
						className: b.a.link,
						to: "/"
					}, n.fbt._("Click to return home.", null, {
						hk: "3FgSpg"
					}))),
					title: n.fbt._("Community Quarantined", null, {
						hk: "3RKbEl"
					})
				})
			})
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				a = s("./src/reddit/helpers/overlay/index.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e) {
				const {
					children: t,
					className: s,
					to: n,
					...r
				} = e, c = Object(a.b)(n);
				return o.a.createElement(i.a, d({
					className: s,
					to: c
				}, r), t)
			}

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...s
				} = e, n = t ? c : r.a;
				return o.a.createElement(n, l({}, s, {
					children: s.children,
					className: s.className,
					onClick: s.onClick,
					to: s.to
				}))
			}
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/PostList/index.tsx"),
				o = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(o.a)(n.a)
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/NotificationButton/index.tsx"),
				d = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				c = s("./src/reddit/components/Thumbnail/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/post.ts"),
				p = s("./src/reddit/hooks/useIsClient.ts"),
				u = s("./src/reddit/models/Subreddit/index.ts"),
				h = s("./src/reddit/components/MediumPost/index.m.less"),
				b = s.n(h);
			t.a = ({
				crosspost: e,
				post: t,
				forceShowNSFW: s,
				redditStyle: n,
				shouldShowSubscribeButton: h,
				subredditOrProfile: g,
				templatePlaceholderImage: f,
				shouldShowFollowButton: x,
				isFollowed: C,
				isCommentsPage: v,
				onFollowPostClick: O
			}) => {
				return Object(p.a)() ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(i.a)(b.a.thumbnailContainer, {
						[b.a.mShowingButtonOrOverflow]: x || h
					})
				}, o.a.createElement("div", {
					className: b.a.thumbnailContainerRow
				}, x && o.a.createElement(a.a, {
					isFilled: !!C,
					onClick: O,
					hasTooltip: !0,
					tooltipText: r.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), h && g && o.a.createElement(d.a, {
					className: b.a.subscribeButton,
					getEventFactory: e => Object(m.i)(t.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: g.name,
						type: Object(u.h)(g) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: t.id,
					small: !0
				})), o.a.createElement(c.a, {
					crosspost: e,
					isCommentsPage: v,
					post: t,
					redditStyle: n,
					forceShowNSFW: s,
					templatePlaceholderImage: f
				}))) : null
			}
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, s) {
			e.exports = {
				mainBody: "yn9v_hQEhjlRNZI0xspbA",
				postTitle: "_2wImphGg_1LcEF5MiErvRx",
				subscribeButton: "_2as7ZiIO6VQmOoNUm62veu",
				thumbnailContainer: "_17nmfaMf1Rq20sVfEmle0O",
				mShowingButtonOrOverflow: "yIt5UPS176eVebNGNRQtf",
				content: "_32pB7ODBwG3OSx1u_17g58",
				horizontalVotes: "_1Lt8O-wG_BSSv9bpz5gmwV",
				flatlistContainer: "XrvmOG7SxKlAJj71Fwi2y",
				backgroundWrapper: "_2uazWzYzM0Qndpz5tFu3EX",
				container: "_3xuFbFM3vrCqdGuKGhhhn0",
				leftPadding: "i7Fs9tR9IvW9lWlOG_yrY",
				thumbnailContainerRow: "ly1p6kYBCM7ZqoRjGeAhw",
				postOverflow: "x4YOGJe9jA6wgzmbyKZK0",
				postSource: "_2BgmOVmNwratQ_mDI9DaHR",
				modModeBannerWrapper: "_1wpVciZItCVMc_3pYSceM5"
			}
		},
		"./src/reddit/components/NewCommentPill/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o);
			const i = Object(n.a)({
					resolved: {},
					chunkName: () => "NewCommentPill",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("NewCommentPill").then(s.bind(null, "./src/reddit/components/NewCommentPill/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/NewCommentPill/index.tsx"
					}
				}),
				a = e => r.a.createElement(i, e)
		},
		"./src/reddit/components/NotificationButton/index.m.less": function(e, t, s) {
			e.exports = {
				notificationButton: "_3KTYozwt91D81Yub-OQ4S3",
				icon: "SDzveG4fJf98RLE5vll2w",
				NotificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				notificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				NotificationIconFilled: "_13arOxnT-uyZ238frHLRM2",
				notificationIconFilled: "_13arOxnT-uyZ238frHLRM2"
			}
		},
		"./src/reddit/components/NotificationButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				a = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(c);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: s,
						onClick: n,
						hasTooltip: c,
						tooltipText: m,
						className: p
					} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, p),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: n
				}, o.a.createElement(d.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": m
				})), c && o.a.createElement(i.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, m))
			}
		},
		"./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				bannerBase: "_1H6_lZclv3OiOYYLJ3oAEN",
				BlockIcon: "_3XxN6-i7j-QnWYRDuXOG5a",
				blockIcon: "_3XxN6-i7j-QnWYRDuXOG5a",
				blockedAuthorTextWrapper: "m2v6rWFRpijpyTUSArDdl",
				expandButton: "_1elWTUH22waxJo7g8N3y3J"
			}
		},
		"./src/reddit/components/PostContent/index.m.less": function(e, t, s) {
			e.exports = {
				content: "_3UMN4RCVY5288m_fOZlkcg",
				controlsContainer: "_1hwEKkB_38tIoal6fcdrt9",
				postNumbers: "_1svxG6WJ6vr-T9iN3rf5M6",
				flatlistContainer: "UPYG6UwB7XqTeGj4a4vBr",
				mainBody: "_3MC4c3Q_Y41YKtl1TcvyMt",
				leftPadding: "_1mK-LVHGTTlcFpMsjItjYJ",
				postContainer: "_2rszc84L136gWQrkwH6IaM",
				hasEventMeta: "qpc-hx5EvongRjYhe0TOO",
				PostTitle: "_2v9pwVh0VUYrmhoMv1tHPm",
				postTitle: "_2v9pwVh0VUYrmhoMv1tHPm",
				ExpandoButton: "_1sq8G2ap3_yMYvXINVLxFm",
				expandoButton: "_1sq8G2ap3_yMYvXINVLxFm",
				ClassicExpandoMotion: "_2w7fkGYeZk22ZtKCTcGj_T",
				classicExpandoMotion: "_2w7fkGYeZk22ZtKCTcGj_T",
				ClassicPostMedia: "_3l9ryDzeuWyQEv-5287xPH",
				classicPostMedia: "_3l9ryDzeuWyQEv-5287xPH",
				FullWidthFlatlist: "_3P3ghhoNky7Bzspbfw7--R",
				fullWidthFlatlist: "_3P3ghhoNky7Bzspbfw7--R",
				LargePostMedia: "_1Ap4F5maDtT1E1YuCiaO0r",
				largePostMedia: "_1Ap4F5maDtT1E1YuCiaO0r",
				isCommentsPage: "D3IL3FD0RFy_mkKLPwL4",
				adLinkWrapper: "_3SVc61tFn_bE8SioJlUB-J",
				classicThumbnail: "_1FHUoxLVcplbcdYoOYbzlq",
				classicNotificationButton: "_3PPSzlne0JO99X7TQkgRgN",
				ThumbLink: "_3SCgQPuxXigmV7fEOhNHCN",
				thumbLink: "_3SCgQPuxXigmV7fEOhNHCN",
				VideoProcessingStatus: "_16S8F-ykERyNWpmVnAU9y0",
				videoProcessingStatus: "_16S8F-ykERyNWpmVnAU9y0",
				modModeBannerWrapper: "_2TM2Nmy6QisWK1nerxy26v"
			}
		},
		"./src/reddit/components/PostContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/noop.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/ads/index.ts"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				h = s("./src/lib/timeAgo/index.ts"),
				b = s("./src/reddit/actions/post.ts"),
				g = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				f = s("./src/reddit/models/User/index.ts"),
				x = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				C = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				v = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				O = s("./src/reddit/helpers/path/index.ts"),
				y = s("./src/reddit/helpers/trackers/lightbox.ts"),
				E = s("./src/reddit/helpers/trackers/post.ts"),
				k = s("./src/reddit/actions/tooltip.ts"),
				w = s("./node_modules/lodash/find.js"),
				P = s.n(w),
				j = s("./node_modules/react-motion/lib/react-motion.js");
			const I = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				_ = {},
				S = (e = [], t) => {
					const s = P()(e, {
							key: "expando_content"
						}),
						n = s && s.style ? s.style.opacity : 0;
					return t ? n >= 1 ? [{
						key: "expando_content",
						style: {
							opacity: 1
						}
					}] : n > 0 ? [{
						key: "expando_content",
						style: {
							opacity: Object(j.spring)(1, I)
						}
					}] : [{
						key: "expando_content",
						style: {
							opacity: .1
						}
					}] : n < .1 ? [] : [{
						key: "expando_content",
						style: {
							opacity: Object(j.spring)(0, I)
						}
					}]
				};
			class T extends i.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), _), this.state = {
						expanded: e.shouldExpand,
						renderTransitionMotion: e.shouldExpand
					}
				}
				componentWillReceiveProps(e) {
					e.shouldExpand && !this.state.renderTransitionMotion ? this.setState(() => ({
						renderTransitionMotion: !0
					}), () => {
						setTimeout(() => {
							this.setState({
								expanded: !0
							})
						})
					}) : e.shouldExpand !== this.state.expanded && this.setState({
						expanded: e.shouldExpand
					})
				}
				render() {
					const {
						renderTransitionMotion: e,
						expanded: t
					} = this.state;
					if (!e) return !1;
					const {
						className: s,
						content: n
					} = this.props;
					return i.a.createElement(j.TransitionMotion, {
						styles: e => S(e, t),
						didLeave: this.onSizeChanged,
						willEnter: this.onSizeChanged
					}, e => i.a.createElement("div", {
						className: s
					}, e.map(e => i.a.createElement("div", {
						key: e.key,
						style: e.style
					}, n))))
				}
			}
			var L = s("./src/reddit/models/Media/index.ts"),
				N = s("./src/reddit/models/Post/index.ts"),
				R = s("./src/reddit/models/Vote/index.ts"),
				M = s("./src/reddit/selectors/activeModalId.ts"),
				F = s("./src/reddit/selectors/experiments/categories.ts"),
				A = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				B = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				D = s("./src/reddit/selectors/moderatorPermissions.ts"),
				V = s("./src/reddit/selectors/postCreations.ts"),
				W = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/selectors/showPromotedCTA.ts"),
				H = s("./src/reddit/selectors/user.ts"),
				K = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				q = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				G = s("./src/reddit/components/AwardBadges/index.tsx"),
				Y = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				z = s("./src/reddit/components/Econ/Audio/async.ts"),
				Q = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				J = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				X = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				Z = s("./src/reddit/components/ExpandoButton/index.tsx"),
				$ = s("./src/reddit/components/FlairWrapper/index.tsx"),
				ee = s("./src/reddit/components/Flatlist/index.tsx"),
				te = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				se = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				ne = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				oe = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				re = s("./src/reddit/components/ModModeReports/index.tsx"),
				ie = s("./src/reddit/components/ModModeReports/helpers.ts"),
				ae = s("./src/reddit/components/NotificationButton/index.tsx"),
				de = s("./src/reddit/components/PostContainer/index.tsx"),
				ce = s("./src/higherOrderComponents/makeAsync.tsx"),
				le = s("./src/lib/loadWithRetries/index.ts"),
				me = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const pe = Object(ce.a)({
				ErrorComponent: () => i.a.createElement(me.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(le.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => i.a.createElement(me.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var ue = e => i.a.createElement(pe, e),
				he = s("./src/reddit/components/PostList/index.tsx"),
				be = s("./src/reddit/components/PostMedia/index.tsx"),
				ge = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				fe = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				xe = s("./src/reddit/components/PostTitle/index.tsx"),
				Ce = s("./src/reddit/components/PostTopLine/index.tsx"),
				ve = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Oe = s("./src/reddit/components/ReadingIndicator/async.tsx"),
				ye = s("./src/reddit/components/SourceLink/index.tsx"),
				Ee = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ke = s("./src/reddit/constants/componentTestIds.ts"),
				we = s("./src/reddit/constants/postLayout.ts"),
				Pe = s("./src/reddit/contexts/PageLayer/index.tsx"),
				je = s("./src/reddit/helpers/postEvent.ts"),
				Ie = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				_e = s("./src/reddit/selectors/experiments/postCommentFollow.ts"),
				Se = s("./src/reddit/selectors/postFlair.ts"),
				Te = s("./src/reddit/models/Audio/index.ts"),
				Le = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				Ne = s("./src/reddit/selectors/experiments/econ/index.ts"),
				Re = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Me = s("./src/reddit/constants/experiments.ts"),
				Fe = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Ae = s("./src/reddit/selectors/experiments/presence.ts");
			const Be = e => {
					return Object(Fe.c)(e, {
						experimentEligibilitySelector: Fe.a,
						experimentName: Me.of
					}) === Me.Zc
				},
				De = e => {
					if (Object(Ae.a)(e)) return !1;
					return Object(Fe.c)(e, {
						experimentEligibilitySelector: Fe.a,
						experimentName: Me.nf
					}) === Me.Zc
				},
				Ve = (e, {
					postId: t
				}) => {
					const s = Object(W.H)(e, {
						postId: t
					});
					return !(Object(Ae.a)(e) || !s || s.isSponsored) && Object(Fe.c)(e, {
						experimentEligibilitySelector: Fe.a,
						experimentName: Me.mf
					}) === Me.Zc
				};
			var We = s("./node_modules/fbt/lib/FbtPublic.js"),
				Ue = s("./src/reddit/constants/colors.ts"),
				He = s("./src/reddit/icons/fonts/index.tsx"),
				Ke = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				qe = s("./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less"),
				Ge = s.n(qe);
			const Ye = i.a.createElement(He.a, {
				className: Ge.a.BlockIcon,
				name: "block"
			});
			var ze = e => {
					const {
						onBannerClick: t,
						isExpandable: s
					} = e;
					return i.a.createElement(Ke.a, {
						className: Ge.a.bannerBase,
						color: Ue.b.dayModeActionIcon,
						icon: Ye,
						title: We.fbt._("Posted by a blocked user", null, {
							hk: "1Bg4AI"
						}),
						subtitle: s && i.a.createElement("button", {
							className: Ge.a.expandButton,
							onClick: t
						}, We.fbt._("EXPAND", null, {
							hk: "2t0KIg"
						})),
						textWrapperClassName: Ge.a.blockedAuthorTextWrapper
					})
				},
				Qe = s("./src/config.ts"),
				Je = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				Xe = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				Ze = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				$e = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				et = s.n($e);
			const {
				fbt: tt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), st = () => tt._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [tt._param("=User Agreement", i.a.createElement("a", {
				className: et.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, tt._("User Agreement", null, {
				hk: "3MHgRl"
			}))), tt._param("=Content Policy", i.a.createElement("a", {
				className: et.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, tt._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), nt = () => tt._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [tt._param("=User Agreement", i.a.createElement("a", {
				className: et.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, tt._("User Agreement", null, {
				hk: "yMHtU"
			}))), tt._param("=Content Policy", i.a.createElement("a", {
				className: et.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, tt._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			});
			var ot = e => {
				const {
					hasPerms: t,
					removedBy: s,
					removedByCategory: n,
					subredditName: o
				} = e, r = t ? ((e, t, s) => {
					switch (e) {
						case N.g.AntiEvilOps:
							return tt._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "3a8CyR"
							});
						case N.g.Author:
							return tt._("This post was removed by the person who originally posted it.", null, {
								hk: "2lyUgL"
							});
						case N.g.AuthorDeleted:
							return tt._("This post was deleted by the person who originally posted it.", null, {
								hk: "16LeiH"
							});
						case N.g.AutomodFiltered:
							return tt._("This post was reported by automod, and is waiting for your review.", null, {
								hk: "2E46dR"
							});
						case N.g.CommunityOps:
							return tt._("This post was removed by Reddit admin, u/{username}.", [tt._param("username", t)], {
								hk: "34nHWu"
							});
						case N.g.ContentTakedown:
							return tt._("This post was removed by Reddit.", null, {
								hk: "3uR3iw"
							});
						case N.g.CopyrightTakedown:
							return tt._("This post was removed by Reddit's Legal Operations team.", null, {
								hk: "Ukfj"
							});
						case N.g.Moderator:
							return tt._("This post was removed by r/{subredditName} moderator, u/{username}.", [tt._param("subredditName", s), tt._param("username", t)], {
								hk: "270bcn"
							});
						case N.g.Reddit:
							return tt._("This post was removed by Reddit's spam filters.", null, {
								hk: "1k3lsh"
							});
						default:
							return tt._("This post was removed by Reddit's spam filters.", null, {
								hk: "3oxS8r"
							})
					}
				})(n, s, o) : ((e, t) => {
					switch (e) {
						case N.g.AntiEvilOps:
							return tt._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "2ZqyRT"
							});
						case N.g.Author:
							return tt._("Sorry, this post was removed by the person who originally posted it.", null, {
								hk: "4IRCN"
							});
						case N.g.AuthorDeleted:
							return tt._("Sorry, this post was deleted by the person who originally posted it.", null, {
								hk: "4emmIp"
							});
						case N.g.AutomodFiltered:
							return tt._("Post is awaiting moderator approval.", null, {
								hk: "wdGOr"
							});
						case N.g.CommunityOps:
							return tt._("Sorry, this post was removed by Reddit's Community team.", null, {
								hk: "3fs5lF"
							});
						case N.g.ContentTakedown:
							return tt._("Sorry, this post was removed by Reddit.", null, {
								hk: "3XSuKc"
							});
						case N.g.CopyrightTakedown:
							return tt._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
								hk: "1TbEDT"
							});
						case N.g.Moderator:
							return tt._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [tt._param("subredditName", t)], {
								hk: "12NWKq"
							});
						case N.g.Reddit:
							return tt._("Sorry, this post was removed by Reddit's spam filters.", null, {
								hk: "10ItEu"
							});
						default:
							return tt._("Sorry, this post has been removed", null, {
								hk: "11sG9V"
							})
					}
				})(n, o), a = t ? (e => {
					switch (e) {
						case N.g.AntiEvilOps:
							return i.a.createElement(st, null);
						case N.g.AuthorDeleted:
						case N.g.Author:
							return tt._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
								hk: "2KZLgT"
							});
						case N.g.AutomodFiltered:
							return tt._("It won’t show up in your community feed until you or another moderator approve it.", null, {
								hk: "2X5ECb"
							});
						case N.g.CommunityOps:
							return tt._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [tt._param("=just ask", i.a.createElement("a", {
								className: et.a.link,
								href: `${Qe.a.redditUrl}/message/compose/?to=r/reddit.com`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, tt._("just ask", null, {
								hk: "jn9ip"
							})))], {
								hk: "3hMocZ"
							});
						case N.g.ContentTakedown:
							return i.a.createElement(nt, null);
						case N.g.CopyrightTakedown:
							return tt._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "7jiV"
							});
						case N.g.Moderator:
							return tt._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
								hk: "22qJOB"
							});
						case N.g.Reddit:
							return tt._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3S3oDL"
							});
						default:
							return tt._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "uKfHK"
							})
					}
				})(n) : ((e, t) => {
					switch (e) {
						case N.g.AntiEvilOps:
							return i.a.createElement(st, null);
						case N.g.AuthorDeleted:
						case N.g.Author:
							return tt._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
								hk: "2OBDBc"
							});
						case N.g.AutomodFiltered:
							return tt._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [tt._param("=[subreddit name]", i.a.createElement("a", {
								className: et.a.link,
								href: `${Qe.a.redditUrl}/r/${t}`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, tt._("{subreddit name}", [tt._param("subreddit name", `r/${t}`)], {
								hk: "2o22vl"
							})))], {
								hk: "3dxuEW"
							});
						case N.g.CommunityOps:
							return tt._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
								hk: "uPiHS"
							});
						case N.g.ContentTakedown:
							return i.a.createElement(nt, null);
						case N.g.CopyrightTakedown:
							return tt._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "2e8fhi"
							});
						case N.g.Moderator:
							return tt._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
								hk: "QXZPk"
							});
						case N.g.Reddit:
						default:
							return tt._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3vUmEz"
							})
					}
				})(n, o), d = t ? Ue.b.warning : Ue.b.dayModeActionIcon, c = (e => {
					let t;
					switch (e) {
						case N.g.AntiEvilOps:
						case N.g.AutomodFiltered:
						case N.g.CommunityOps:
						case N.g.ContentTakedown:
						case N.g.CopyrightTakedown:
						case N.g.Reddit:
							t = Je.a;
							break;
						case N.g.AuthorDeleted:
						case N.g.Author:
							t = Ze.b;
							break;
						case N.g.Moderator:
							t = Xe.a;
							break;
						default:
							t = Je.a
					}
					return i.a.createElement(t, {
						className: et.a.icon
					})
				})(n);
				return i.a.createElement(Ke.a, {
					className: et.a.BannerBase,
					color: d,
					icon: c,
					subtitle: a,
					title: r
				})
			};

			function rt(e) {
				const {
					isAdminOrMod: t,
					post: s,
					subredditOrProfile: n
				} = e;
				return i.a.createElement(i.a.Fragment, null, n && s.removedByCategory && i.a.createElement(ot, {
					hasPerms: t,
					removedBy: s.removedBy,
					removedByCategory: s.removedByCategory,
					subredditName: n.name
				}))
			}
			var it = s("./src/reddit/components/PostContent/ViewCount.tsx"),
				at = s("./src/reddit/components/PostContent/index.m.less"),
				dt = s.n(at);
			const {
				fbt: ct
			} = s("./node_modules/fbt/lib/FbtPublic.js"), lt = u.a.wrapped(xe.c, "PostTitle", dt.a), mt = u.a.wrapped(Z.a, "ExpandoButton", dt.a), pt = u.a.wrapped(T, "ClassicExpandoMotion", dt.a), ut = u.a.wrapped(ee.c, "FullWidthFlatlist", dt.a), ht = i.a.createElement("p", {
				className: dt.a.VideoProcessingStatus
			}, ct._("Your video is processing. We'll send you a notification when it's done.", null, {
				hk: "1R8rKB"
			})), bt = Object(Pe.u)({
				isCommentsPage: Pe.x,
				pageLayer: e => e
			}), gt = Object(a.b)(() => Object(l.c)({
				activeModalId: M.a,
				flairStyleTemplate: Pe.U,
				currentUser: H.k,
				crosspost: W.d,
				hideNSFWPref: H.C,
				imageGalleryCurrentItem: W.i,
				isAdminOrMod: (e, t) => {
					const s = Object(W.U)(e, {
						postId: t.postId
					});
					return !!s && Object(B.c)(e, {
						subredditId: s.id
					})
				},
				isCurrentUserProfilePost: W.l,
				isExpanded: W.m,
				isFollowed: W.t,
				isFollowedExpired: W.o,
				isPostFollowEnabled: _e.b,
				showPromotedCTA: U.b,
				post: W.H,
				moderatorPermissions: D.l,
				modModeEnabled: Pe.S,
				isInCategoriesExperiment: F.a,
				showAwardsPlaque: A.a,
				showEditFlair: Se.a,
				subredditOrProfile: W.U,
				isEditing: V.M,
				userIsOp: H.qb,
				isVoteCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Re.f)(e, {
					postId: t.postId
				}),
				isCommentCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Re.c)(e, {
					postId: t.postId
				}),
				isReadingIndicatorsExperimentEnabled: Ve,
				isReadingIndicatorsReadTestEnabled: De,
				isReadingIndicatorsWriteTestEnabled: Be
			}), (e, {
				pageLayer: t,
				postId: s
			}) => ({
				onIgnoreReports: () => e(Object(b.Z)(s)),
				onOpenReportsDropdown: t => e(Object(k.h)({
					tooltipId: t
				})),
				onVoteClick: t => {
					const n = t === R.a.upvoted ? Object(b.db)(s) : Object(b.w)(s);
					e(n)
				},
				fireAdPixelsOfType: (t, s) => e(Object(b.z)(t, s)),
				openPost: t => e(Object(b.K)(t)),
				onFollowPost: t => e(Object(b.cb)(s, t)),
				onFollowPostExpired: () => e(Object(b.W)({
					id: s,
					expiresAt: 0
				}))
			})), ft = e => e.media && e.media.type === L.o.EMBED && e.media.provider === L.v.Imgur && e.media.height > 700, xt = u.a.wrapped(d.a, "ThumbLink", dt.a), Ct = ({
				post: e,
				templatePlaceholderImage: t,
				shouldShowFollowButton: s,
				isFollowed: n,
				onFollowPostClick: o
			}) => {
				const r = e.source ? i.a.createElement(Y.a, {
					post: e,
					forceShowNSFW: !0,
					templatePlaceholderImage: t
				}) : i.a.createElement(xt, {
					to: Object(O.b)(e.permalink)
				}, i.a.createElement(Y.a, {
					post: e,
					forceShowNSFW: !0
				}));
				return i.a.createElement("div", {
					className: dt.a.classicThumbnail
				}, s && i.a.createElement(ae.a, {
					className: dt.a.classicNotificationButton,
					isFilled: !!n,
					onClick: o,
					hasTooltip: !0,
					tooltipText: ct._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), r)
			}, vt = ({
				post: e,
				isExpanded: t,
				scrollerItemRef: s
			}) => i.a.createElement(pt, {
				content: i.a.createElement(i.a.Fragment, null, i.a.createElement(be.a, {
					className: dt.a.ClassicPostMedia,
					isListing: !1,
					isNotCardView: !0,
					post: e,
					shouldLoad: !0,
					showFull: !0,
					showCentered: !0,
					scrollerItemRef: s
				})),
				shouldExpand: !!t
			});
			t.a = bt(gt(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: n,
					fireAdPixelsOfType: d,
					flairStyleTemplate: l,
					forceOpenInNewTab: u,
					hideNSFWPref: b,
					imageGalleryCurrentItem: O,
					isAdminOrMod: k,
					isCommentCountAnimation: w,
					isCommentsPage: P,
					isCountAnimShadowTestEnabled: j,
					isCurrentUserProfilePost: I,
					isEditing: _,
					isExpanded: S,
					isFollowed: T,
					isFollowedExpired: R,
					isOverlay: M,
					isPostFollowEnabled: F,
					isReadingIndicatorsExperimentEnabled: A,
					isReadingIndicatorsReadTestEnabled: B,
					isReadingIndicatorsWriteTestEnabled: D,
					isVoteCountAnimation: V,
					moderatorPermissions: W,
					modModeEnabled: U,
					onFollowPost: H,
					onFollowPostExpired: Y,
					onIgnoreReports: Z,
					onOpenReportsDropdown: ae,
					openPost: ce,
					onVoteClick: le,
					post: me,
					scrollerItemRef: pe,
					sendEvent: Pe,
					showAwardsPlaque: _e,
					showEditFlair: Se,
					showPromotedCTA: Re,
					subredditOrProfile: Me,
					userIsOp: Fe
				} = e, Ae = Object(Ee.b)(), [Be, De] = Object(r.useState)(me.authorIsBlocked), Ve = Object(L.I)(me), We = Object(a.e)(e => Boolean(me.predictionTournament) && Object(Ne.w)(e)), Ue = Object(a.e)(e => Object(Ie.a)(e)), He = Object(a.e)(e => Object(Ne.c)(e)), Ke = Object(c.a)(me), qe = A || B || D;
				Object(r.useEffect)(() => {
					F && R && Y()
				}, []);
				const Ge = me.isSponsored ? Object(he.b)(me.id, {
						fireAdPixelsOfType: d,
						openPost: ce
					}) : o.a,
					Ye = Object(v.a)(W),
					Qe = Object(x.a)(W),
					Je = Object(C.a)(W),
					Xe = Ye || Qe,
					Ze = ((e, t, s) => {
						const [n, o] = e ? [Object(f.e)(e) === s.author, e.isEmployee] : [!1, !1];
						return n || t || o
					})(n, Xe, me),
					$e = !!me.media && (me.media.type === L.o.RTJSON || me.media.type === L.o.TEXT),
					et = Fe && $e,
					tt = Object(oe.c)(me),
					st = Object(ie.c)(me);
				let nt;
				const ot = !(U && Ye),
					at = Object(ge.b)({
						hide: !A && ot,
						editPost: !A && ot,
						save: ot,
						report: !A && ot
					}),
					ct = me.removedByCategory === N.g.AuthorDeleted,
					pt = n && (n.displayText === me.author || n.username === me.author),
					bt = !ct && !ft(me) && (pt || k || !(me.removedByCategory && me.media && (Object(L.L)(me.media) || Object(L.J)(me.media) || Object(L.E)(me.media)))),
					gt = Object(m.t)(me, O),
					{
						source: xt
					} = gt,
					Ot = me.removedByCategory === N.g.Reddit && Object(h.e)(me.created) > 24,
					yt = me.removedByCategory && me.removedByCategory !== N.g.Reddit || Ot,
					Et = F && !yt && !me.isArchived,
					kt = Object(r.useCallback)(() => {
						H(T ? N.f.UNFOLLOWED : N.f.FOLLOWED), Ae(T ? Object(E.n)(me.id) : Object(E.d)(me.id))
					}, [H, Ae, T, me.id]),
					wt = i.a.createElement(lt, {
						post: me,
						size: xe.b.ExtraLarge,
						showCategoryTag: M,
						isOverlay: M,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					Pt = i.a.createElement(it.a, {
						post: me,
						showViewCount: Ze
					}),
					jt = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: n
						} = e, o = Object(a.e)(e => Boolean(n.predictionTournament) && Object(Ne.w)(e)), r = Object(a.e)(e => Object(Te.a)(n) && Object(Ne.c)(e));
						return s ? we.g.Classic : o ? we.g.Large : r ? we.g.Large : t ? we.g.Large : n.media && !ft(n) ? we.g.Large : we.g.Medium
					})(e);
				if (jt === we.g.Classic) {
					const t = Object(g.a)(me);
					nt = i.a.createElement("div", {
						"data-test-id": ke.e
					}, i.a.createElement(fe.a, {
						model: me,
						handleVote: le,
						isCountAnimShadowTestEnabled: j,
						isOverlay: M,
						isVoteCountAnimation: V,
						postId: me.id
					}), i.a.createElement("div", {
						className: dt.a.mainBody
					}, i.a.createElement("div", {
						className: dt.a.content
					}, i.a.createElement(Ce.a, {
						hideAwards: _e,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: P,
						isCurrentUserProfilePost: I,
						isOverlay: !!M,
						isTopicPage: !1,
						post: me,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!M && !me.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: Me,
						shouldShowFollowButton: Et && !t,
						isFollowed: T,
						onFollowPostClick: kt
					}), wt, i.a.createElement($.a, {
						className: P ? dt.a.leftPadding : void 0,
						post: me,
						showCategoryTag: e.isInCategoriesExperiment && P,
						sendEvent: Pe
					}), U && Ye && st && i.a.createElement(re.a, {
						onIgnoreReports: Z,
						reportable: me
					}), i.a.createElement(te.d, null), i.a.createElement("div", {
						className: dt.a.FlatlistContainer
					}, Ue && Be ? i.a.createElement(ze, {
						onBannerClick: () => De(!1),
						isExpandable: Ve
					}) : i.a.createElement(i.a.Fragment, null, i.a.createElement(mt, {
						crosspost: s || void 0,
						isExpanded: !!S,
						post: me,
						useMediaIcons: !1
					}), vt(e)), _e && i.a.createElement(G.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: me,
						tooltipType: M ? ve.c.Lightbox : void 0
					}), i.a.createElement(ut, {
						currentUser: n,
						hasModFlairPerms: Qe,
						hasModFullPerms: Je,
						hasModPostPerms: Ye,
						isOverlay: M,
						onIgnoreReports: Z,
						onOpenReportsDropdown: ae,
						modModeEnabled: U,
						post: me,
						showUpvotePercent: !0,
						showViewCount: Ze,
						useFlatlistBreakpoints: at,
						isCommentCountAnimation: w,
						isCountAnimShadowTestEnabled: j
					}))), t && i.a.createElement(Ct, {
						post: me,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						shouldShowFollowButton: Et,
						isFollowed: T,
						onFollowPostClick: kt
					})))
				} else if (jt === we.g.Medium) {
					const t = Object(g.a)(me);
					nt = i.a.createElement("div", {
						"data-test-id": ke.e
					}, i.a.createElement(fe.a, {
						model: me,
						handleVote: le,
						isCountAnimShadowTestEnabled: j,
						isOverlay: M,
						isReadingIndicatorsExperimentEnabled: A,
						isVoteCountAnimation: V,
						postId: me.id
					}), i.a.createElement("div", {
						className: dt.a.mainBody
					}, i.a.createElement("div", {
						className: dt.a.content
					}, i.a.createElement(Ce.a, {
						hideAwards: _e,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: P,
						isCurrentUserProfilePost: I,
						isOverlay: !!M,
						isTopicPage: !1,
						post: me,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!M && !me.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: Me,
						shouldShowFollowButton: Et && !t,
						isFollowed: T,
						onFollowPostClick: kt
					}), wt, Ue && Be ? i.a.createElement(ze, {
						onBannerClick: () => De(!1),
						isExpandable: Ve
					}) : me.source && i.a.createElement(ye.a, {
						post: me,
						isCommentsPage: P
					}), Object(L.N)(me) && ht, i.a.createElement($.a, {
						className: P ? dt.a.leftPadding : void 0,
						post: me,
						showCategoryTag: e.isInCategoriesExperiment && P,
						sendEvent: Pe
					}), Me && yt && i.a.createElement(rt, {
						isAdminOrMod: k,
						post: me,
						subredditOrProfile: Me
					}), U && Ye && st && i.a.createElement(re.a, {
						onIgnoreReports: Z,
						reportable: me
					})), t && !Ke && i.a.createElement(se.a, {
						post: me,
						forceShowNSFW: !0,
						hasModPostPerms: Xe,
						isCommentsPage: P,
						isOverlay: !0,
						modModeEnabled: U,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						subredditOrProfile: Me,
						shouldShowFollowButton: Et,
						isFollowed: T,
						onFollowPostClick: kt
					})), i.a.createElement(te.d, null), _e && i.a.createElement(G.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: me,
						tooltipType: M ? ve.c.Lightbox : void 0
					}), i.a.createElement("div", {
						className: dt.a.controlsContainer
					}, i.a.createElement(ee.c, {
						currentUser: n,
						hasModFlairPerms: Qe,
						hasModFullPerms: Je,
						hasModPostPerms: Ye,
						isOverlay: M,
						modModeEnabled: U,
						onIgnoreReports: Z,
						onOpenReportsDropdown: ae,
						post: me,
						showEditPost: et,
						showEditFlair: Se,
						tooltipType: M ? ve.c.Lightbox : void 0,
						useFlatlistBreakpoints: at,
						isCommentCountAnimation: w,
						isCountAnimShadowTestEnabled: j,
						shouldHideItems: A
					}), qe && i.a.createElement(Oe.a, {
						isReadingIndicatorsExperiment: A,
						isReadLoadTest: B,
						isWriteLoadTest: D,
						postId: me.id
					}), !A && Pt))
				} else jt === we.g.Large && (nt = i.a.createElement("div", {
					"data-test-id": ke.e
				}, i.a.createElement(fe.a, {
					model: me,
					handleVote: le,
					isCountAnimShadowTestEnabled: j,
					isOverlay: M,
					isReadingIndicatorsExperimentEnabled: A,
					isVoteCountAnimation: V,
					postId: me.id
				}), We && Object(Le.c)(me) && i.a.createElement(i.a.Fragment, null, i.a.createElement(J.a, {
					post: me
				}), i.a.createElement(Q.a, {
					post: me
				})), !We && i.a.createElement(i.a.Fragment, null, i.a.createElement(Ce.a, {
					forceOpenInNewTab: u,
					hideAwards: _e,
					hideNSFWPref: b,
					inSubredditOrProfile: !0,
					isCommentsPage: P,
					isCurrentUserProfilePost: I,
					isOverlay: !!M,
					isTopicPage: !1,
					post: me,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!M && !me.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: Me,
					shouldShowFollowButton: Et,
					isFollowed: T,
					onFollowPostClick: kt
				}), wt, ((e, t, s, n) => e.source && !t && (s || n))(me, s, M, P) && i.a.createElement(ye.a, {
					post: me,
					isCommentsPage: P
				})), i.a.createElement($.a, {
					className: P ? dt.a.leftPadding : void 0,
					post: me,
					showCategoryTag: e.isInCategoriesExperiment && P,
					sendEvent: Pe
				}), Me && yt && i.a.createElement(rt, {
					isAdminOrMod: k,
					post: me,
					subredditOrProfile: Me
				}), _ && i.a.createElement(ue, {
					post: me
				}), Ue && Be ? i.a.createElement(ze, {
					onBannerClick: () => De(!1),
					isExpandable: Ve
				}) : bt && !_ && i.a.createElement(be.a, {
					className: Object(p.a)(dt.a.LargePostMedia, {
						[dt.a.isCommentsPage]: P
					}),
					isCommentsPage: !0,
					isListing: !1,
					isNotCardView: M,
					isOverlay: M,
					post: me,
					shouldLoad: !0,
					showFull: !0,
					shouldPause: !M,
					showCentered: !0,
					showPromotedCTA: Re,
					scrollerItemRef: pe
				}), Re && xt && xt.url && i.a.createElement(K.a, {
					className: dt.a.adLinkWrapper
				}, i.a.createElement(q.a, {
					post: me,
					adLinkContent: gt
				})), U && Ye && tt && i.a.createElement("div", {
					className: dt.a.modModeBannerWrapper
				}, i.a.createElement(ne.a, {
					thing: me
				})), U && Ye && st && i.a.createElement("div", {
					className: dt.a.modModeBannerWrapper
				}, i.a.createElement(re.a, {
					onIgnoreReports: Z,
					reportable: me
				})), He && Object(Te.a)(me) && i.a.createElement(z.a, {
					post: me
				}), i.a.createElement(te.d, null), _e && i.a.createElement(G.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: me,
					tooltipType: M ? ve.c.Lightbox : void 0
				}), i.a.createElement("div", {
					className: dt.a.controlsContainer
				}, i.a.createElement(ee.c, {
					currentUser: n,
					forceOpenInNewTab: u,
					hasModFlairPerms: Qe,
					hasModFullPerms: Je,
					hasModPostPerms: Ye,
					isOverlay: M,
					modModeEnabled: U,
					onIgnoreReports: Z,
					onOpenReportsDropdown: ae,
					post: me,
					showEditPost: et,
					showEditFlair: Se,
					tooltipType: M ? ve.c.Lightbox : void 0,
					useFlatlistBreakpoints: at,
					isCommentCountAnimation: w,
					isCountAnimShadowTestEnabled: j,
					shouldHideItems: A
				}), qe && i.a.createElement(Oe.a, {
					isReadingIndicatorsExperiment: A,
					isReadLoadTest: B,
					isWriteLoadTest: D,
					postId: me.id
				}), !A && Pt)));
				const It = Object(r.useCallback)((e, t) => Object(E.i)(e, t), []);
				return i.a.createElement(de.a, {
					className: Object(p.a)(t, dt.a.postContainer, {
						[dt.a.hasEventMeta]: Object(je.a)(me)
					}),
					isOverlay: M,
					post: me,
					eventFactory: M ? y.b : It,
					onClick: Ge
				}, i.a.createElement(X.a, {
					post: me
				}), nt)
			}))
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				container: "_14-YvdFiW5iVvfe5wdgmET",
				SubscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				isInExperimentStyles: "yM5jY9oh36Af0F7EUOj4L"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/NotificationButton/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				h = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				g = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/OutboundLink/index.tsx"),
				C = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				O = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/PostTopLine/index.m.less"),
				w = s.n(k);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: s,
				hideAwards: o,
				hideNSFWPref: k,
				hostPostData: P,
				iconClassName: j,
				inSubredditOrProfile: I,
				isCommentsPage: _,
				isCompactPinnedPost: S,
				isCurrentUserProfilePost: T,
				isOverlay: L,
				isTopicPage: N,
				listingKey: R,
				post: M,
				shouldShowSubscribeButton: F,
				showCornerOutboundLink: A,
				showSubreddit: B,
				showSubredditIcon: D,
				subredditOrProfile: V,
				isFollowed: W,
				shouldShowFollowButton: U,
				onFollowPostClick: H
			}) => {
				const K = o || N,
					q = V && Object(y.h)(V),
					G = Object(i.e)(e => {
						if (!q) return !0;
						const t = Object(E.tb)(e, M.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(w.a.container, e)
				}, B && V && r.a.createElement("div", {
					className: w.a.subredditIconWrapper
				}, r.a.createElement(h.a, {
					"data-click-id": "subreddit",
					to: V.url
				}, D && r.a.createElement(u.b, {
					className: Object(a.a)(w.a.subredditIcon, j),
					shouldHideNsfwIcon: k,
					subredditOrProfile: V
				}))), r.a.createElement("div", {
					className: w.a.everythingElseWrapper
				}, B && r.a.createElement(c.h, {
					type: M.belongsTo.type,
					id: M.belongsTo.id
				}), r.a.createElement(p.d, {
					className: w.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: t,
					tooltipType: L ? p.c.Lightbox : void 0,
					post: M,
					showSub: B,
					subredditOrProfile: V
				}), r.a.createElement(m.a, {
					className: w.a.postBadges,
					displayText: V ? V.displayText : null,
					inSubredditOrProfile: I,
					isCompactPinnedPost: S,
					post: M,
					tooltipType: L ? p.c.Lightbox : void 0
				}), !K && r.a.createElement(d.a, {
					isPostDetail: _,
					thing: M,
					tooltipType: L ? p.c.Lightbox : void 0
				})), V && G && B && F && !T && r.a.createElement(b.a, {
					className: w.a.SubscribeButton,
					getEventFactory: e => Object(C.i)(M.id, e ? "unsubscribe" : "subscribe", "post", R, P),
					identifier: {
						name: V.name,
						type: q ? g.a.PROFILE : g.a.SUBREDDIT
					},
					postId: M.id,
					size: f.d.XS
				}), A && r.a.createElement(x.b, {
					isSponsored: M.isSponsored,
					postId: M.id,
					href: Object(O.D)(M),
					source: M.source
				}, r.a.createElement(v.a, {
					className: w.a.outboundLinkIcon
				})), U && G && r.a.createElement(l.a, {
					isFilled: !!W,
					onClick: H,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/components/ReadingIndicator/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o);
			const i = Object(n.a)({
					resolved: {},
					chunkName: () => "ReadingIndicator",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("ReadingIndicator").then(s.bind(null, "./src/reddit/components/ReadingIndicator/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ReadingIndicator/index.tsx"
					}
				}),
				a = e => r.a.createElement(i, e)
		},
		"./src/reddit/components/RecommendedPostList/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				footer: "_1khvWSB4GNuM2XwSjluHzO",
				background: "_3P_3k_jLv_J8ieIol9GqFL",
				layout: "_3CzLjB_82xAxB3iyad5yLM",
				arrow: "_3P6Ag4hY0u5ujhvLSAAVUH"
			}
		},
		"./src/reddit/components/RecommendedPostList/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsHeader: "_1UbFWXvPTlrPngGxKndM-h",
				smallBanner: "_3O03kg0NTHcVFAyOQNoptz",
				footer: "Cvt0D6iVwU5TI0SY2nIGC",
				textBanner: "_1_-Wwc76dn19ch_lxyp8hf",
				container: "_2l7c_Oz0UVsamALvPrlznq",
				redditStyle: "_3f1Tk2rNUQGOPokixOdO6a",
				homeUpsellBanner: "HxVtNYGfeayfU1THFnAzK",
				homeUpsellBannerBorder: "_3afoK8x8kiKzCgwyofmvxu",
				postList: "_13FxmZ1xHIcRd_CuOaiyfo",
				loadMore: "_2gnvYSohivzo1V12YQI8DY"
			}
		},
		"./src/reddit/components/RecommendedPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/noop.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				u = s("./src/lib/makeListingKey/index.ts"),
				h = s("./src/reddit/actions/subreddit.ts"),
				b = s("./src/reddit/components/ListingPostList/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/constants/elementIds.ts"),
				x = s("./src/reddit/constants/experiments.ts"),
				C = s("./src/reddit/constants/page.ts"),
				v = s("./src/reddit/constants/postLayout.ts"),
				O = s("./src/reddit/helpers/postCollection.ts"),
				y = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				E = s("./src/reddit/helpers/trackers/lightbox.ts"),
				k = s("./src/reddit/helpers/trackers/screenview.ts"),
				w = s("./src/reddit/selectors/chatPost.ts"),
				P = s("./src/reddit/selectors/commentsListTruncated.ts"),
				j = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				I = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				_ = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				S = s("./src/reddit/selectors/i18n/index.ts"),
				T = s("./src/reddit/selectors/telemetry.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				N = s("./src/lib/classNames/index.ts"),
				R = s("./src/reddit/constants/listings.ts"),
				M = s("./src/reddit/controls/InternalLink/index.tsx"),
				F = s("./src/reddit/helpers/name/index.ts"),
				A = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				B = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				D = s.n(B);
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var W = Object(m.a)(e => {
					const {
						className: t,
						onClick: s,
						shouldDisplaySeeMore: n,
						shouldShowNsfwListingBelow: o,
						subredditOrProfile: r
					} = e, {
						primaryColor: i
					} = r;
					let d = null,
						c = r.url;
					return o ? (c = R.c[R.b.Popular], d = V._("Explore more of Reddit", null, {
						hk: "2wgFkH"
					})) : d = n ? V._("See more posts like this in {subredditName}", [V._param("subredditName", Object(F.c)(r.displayText))], {
						hk: "pLxW5"
					}) : V._("Continue browsing in {subredditName}", [V._param("subredditName", r.displayText)], {
						hk: "2gUyTU"
					}), a.a.createElement(M.a, {
						className: Object(N.a)(D.a.footer, t),
						onMouseDown: s,
						to: c,
						style: {
							backgroundColor: i
						}
					}, a.a.createElement("div", {
						className: D.a.background
					}), a.a.createElement("div", {
						className: D.a.layout
					}, d, a.a.createElement(A.a, {
						className: D.a.arrow
					})))
				}),
				U = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts"),
				H = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				K = s.n(H);
			const q = Object(c.a)((e, {
					isOverlay: t
				}) => t, P.a, j.b, (e, t, s) => !((!t || s) && e)),
				G = Object(c.a)((e, {
					post: t
				}) => !!t && Object(O.a)(t), (e, {
					awaitAllCommentsRendered: t
				}) => t, L.J, L.K, w.d, q, (e, t, s, n, o, r) => !e && !s && !n && !o && !t && r),
				Y = Object(c.a)((e, {
					post: t
				}) => t, I.c, T.request, T.subreddit, (e, t, s, n) => {
					const o = !!e && void 0 !== e.isEligibleForLinkedPosts;
					let r, i = "";
					if (e && (r = {
							hostPostId: e.id,
							isEligibleForLinkedPosts: !1,
							shouldShowLinkedPosts: !1,
							subreddit: n
						}), t && e && o) {
						const {
							isEligibleForLinkedPosts: o,
							id: a
						} = e;
						i = Object(p.a)(a, Object(I.a)(t) || !o), r = {
							canonicalUrl: s.canonical_url,
							baseUrl: s.base_url,
							hostPostId: a,
							isEligibleForLinkedPosts: o,
							shouldShowLinkedPosts: o && !Object(x.uf)(t) && !Object(I.a)(t),
							subreddit: n
						}
					}
					return {
						hostPostData: r,
						isEligibilityLoaded: o,
						listingBelowVariant: t,
						linkedPostsListingKey: i
					}
				}),
				z = Object(c.c)({
					listingBelowLinkedPostsData: Y,
					nsfwListingBelowVariant: _.a,
					shouldShowListingBelow: G,
					shouldShowNsfwListingBelow: S.b
				}),
				Q = Object(d.b)(z, e => ({
					loadMorePosts: t => e(Object(h.r)({
						sort: l.W.HOT,
						subredditName: t
					}))
				}));
			class J extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(f.d) : null, this.onViewed = (e, t) => Object(k.f)({
						key: this.listingKey(),
						sort: l.W.TOP,
						timerType: t,
						timerMillis: e,
						timeSort: l.fc.WEEK
					}), this.onFooterClick = e => {
						this.props.sendEvent(Object(E.c)("recommended_footer"))
					}
				}
				listingKey() {
					const {
						shouldShowNsfwListingBelow: e,
						listingBelowLinkedPostsData: {
							linkedPostsListingKey: t,
							listingBelowVariant: s
						},
						post: n,
						subredditOrProfile: o
					} = this.props;
					return s ? t : e && n && n.id ? Object(U.a)(n.id) : Object(u.a)(o.name, l.W.TOP, {
						t: l.fc.WEEK
					})
				}
				renderSmallBanner() {
					const {
						listingBelowLinkedPostsData: e,
						nsfwListingBelowVariant: t,
						shouldShowNsfwListingBelow: s,
						subredditOrProfile: o,
						theme: r
					} = this.props, {
						isEligibilityLoaded: i,
						hostPostData: d,
						listingBelowVariant: c
					} = e;
					if (c && !Object(x.uf)(c) && !Object(I.a)(c) && !i) return a.a.createElement("div", {
						className: K.a.smallBanner
					});
					const {
						name: l
					} = o, m = Object(y.a)(r.newCommunityTheme.canvas);
					let p = null;
					return p = !(null == d ? void 0 : d.shouldShowLinkedPosts) && !s ? n.fbt._("More posts from the {name} community", [n.fbt._param("name", l)], {
						hk: "2g363L"
					}) : Object(I.b)(c) ? n.fbt._("More posts like this", null, {
						hk: "Maj0v"
					}) : t === x.Xd.DeRecs ? n.fbt._("Popular Posts Near You", null, {
						hk: "22vlW0"
					}) : n.fbt._("More posts you may like", null, {
						hk: "33WdfT"
					}), a.a.createElement("div", {
						className: K.a.smallBanner,
						style: {
							color: m
						}
					}, p)
				}
				render() {
					const {
						contentContainerRef: e,
						listingBelowLinkedPostsData: t,
						shouldShowListingBelow: s,
						shouldShowNsfwListingBelow: n,
						subredditOrProfile: o
					} = this.props, {
						hostPostData: i,
						listingBelowVariant: d
					} = t;
					if (!s) return null;
					const c = !!(null == i ? void 0 : i.shouldShowLinkedPosts);
					return a.a.createElement("div", {
						className: K.a.container
					}, this.renderSmallBanner(), a.a.createElement(b.a, {
						className: K.a.postList,
						disablePlaceholder: !0,
						forcedLayout: v.g.Large,
						getScrollContainer: this.scrollContainer,
						hostPostData: i,
						isTruncated: !0,
						listingBelowVariant: d,
						listingKey: this.listingKey(),
						listingName: C.d.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: K.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: r.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e,
						shouldHideFlair: !0
					}), a.a.createElement(W, {
						className: K.a.footer,
						onClick: this.onFooterClick,
						shouldDisplaySeeMore: c,
						shouldShowNsfwListingBelow: n,
						subredditOrProfile: o
					}))
				}
			}
			t.a = Q(Object(m.a)(Object(g.c)(J)))
		},
		"./src/reddit/components/RichTextEditor/Placeholder.m.less": function(e, t, s) {
			e.exports = {
				content: "_3Yo9aCwUoJBBuPKwf3r5cP",
				mCollapsed: "_225DoZxfrLcZu0fM8-Svk8",
				prompt: "_3CuuiBuYvA4VXTClabDCUK",
				toolbar: "_31gqZmjkDlF5-81EKQ7w_Y",
				topToolbar: "_6rO7u4xvTeWjMNR68asbw",
				bottomToolbar: "_2Qh8N3s0Z7NWIPCVBDCcxH"
			}
		},
		"./src/reddit/components/RichTextEditor/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/FocusableContent/index.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/reddit/components/RichTextEditor/Placeholder.m.less"),
				c = s.n(d);
			t.a = ({
				className: e,
				isCommentBoxDesignEnabled: t,
				isLoading: s,
				toolbarPosition: n
			}) => o.a.createElement("div", {
				className: e
			}, o.a.createElement(i.a, {
				isFocused: !1
			}, !t && "top" === n && o.a.createElement("div", {
				className: Object(r.a)(c.a.toolbar, c.a.topToolbar, Object(a.a)({
					isLoading: s
				}))
			}), o.a.createElement("div", {
				className: Object(r.a)(c.a.content, {
					[c.a.mCollapsed]: t
				})
			}, o.a.createElement("div", {
				className: Object(r.a)(c.a.prompt, Object(a.a)({
					isLoading: !0
				}))
			})), !t && "bottom" === n && o.a.createElement("div", {
				className: Object(r.a)(c.a.toolbar, c.a.bottomToolbar, Object(a.a)({
					isLoading: s
				}))
			})))
		},
		"./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/brandSafety.ts"),
				a = s("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				d = s("./src/reddit/selectors/user.ts"),
				c = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");
			t.a = Object(r.b)((e, {
				postId: t
			}) => ({
				canShowAd: Object(i.a)(e, {
					postId: t
				}) && !Object(d.B)(e) && !Object(a.a)(e)
			}))(({
				canShowAd: e,
				postId: t,
				commentsPageKey: s,
				...n
			}) => e ? o.a.createElement(c.a, n) : null)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
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
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/reddit/components/SidebarFooter/index.m.less"),
				p = s.n(m);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = r.a.a("Link", p.a), b = Object(l.c)({
				isNavbarLikeMwebEnabled: c.a
			}), g = Object(i.b)(b), f = Object(d.u)({
				isFrontpage: d.z
			});
			t.a = f(g(e => e.isNavbarLikeMwebEnabled ? e.isFrontpage ? o.a.createElement(a.a, {
				className: p.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, o.a.createElement("div", {
				className: p.a.LinkContainer
			}, o.a.createElement("div", {
				className: p.a.Column
			}, o.a.createElement(h, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, u._("User Agreement", null, {
				hk: "2RA6JL"
			})), o.a.createElement(h, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, u._("Privacy policy", null, {
				hk: "10K04G"
			}))), o.a.createElement("div", {
				className: p.a.Column
			}, o.a.createElement(h, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, u._("Content policy", null, {
				hk: "1DyxZS"
			})), o.a.createElement(h, {
				href: "https://www.redditinc.com/policies/moderator-guidelines"
			}, u._("Moderator Guidelines", null, {
				hk: "2O9otm"
			})))), o.a.createElement("div", {
				className: p.a.Copyright
			}, u._("© {year} Reddit, Inc. All rights reserved.", [u._param("year", (new Date).getFullYear().toString())], {
				hk: "sR7zP"
			}))) : null : o.a.createElement(a.a, {
				className: p.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, o.a.createElement("div", {
				className: p.a.LinkContainer
			}, o.a.createElement("div", {
				className: p.a.Column
			}, o.a.createElement(h, {
				href: "https://www.reddithelp.com"
			}, u._("help", null, {
				hk: "4lyYaD"
			})), o.a.createElement(h, {
				href: "https://www.reddit.com/coins"
			}, u._("Reddit coins", null, {
				hk: "32iMaN"
			})), o.a.createElement(h, {
				href: "https://www.reddit.com/premium"
			}, u._("Reddit premium", null, {
				hk: "RuO3A"
			})), o.a.createElement(h, {
				href: "https://redditgifts.com/"
			}, u._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && o.a.createElement(o.a.Fragment, null, o.a.createElement(h, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, u._("Communities", null, {
				hk: "3CJu37"
			})), o.a.createElement(h, {
				href: "https://www.reddit.com/posts/2020/"
			}, u._("Rereddit", null, {
				hk: "1z3k7C"
			})), o.a.createElement(h, {
				href: "https://www.reddit.com/topics/a-1/"
			}, u._("Topics", null, {
				hk: "349RFt"
			})))), o.a.createElement("div", {
				className: p.a.Column
			}, o.a.createElement(h, {
				href: "https://about.reddit.com"
			}, u._("about", null, {
				hk: "1sqJKs"
			})), o.a.createElement(h, {
				href: "https://about.reddit.com/careers/"
			}, u._("careers", null, {
				hk: "26ABvc"
			})), o.a.createElement(h, {
				href: "https://about.reddit.com/press/"
			}, u._("press", null, {
				hk: "2Qmgdz"
			})), o.a.createElement(h, {
				href: "https://www.redditinc.com/advertising"
			}, u._("advertise", null, {
				hk: "Mt40U"
			})), o.a.createElement(h, {
				href: "http://www.redditblog.com/"
			}, u._("blog", null, {
				hk: "46IQJw"
			})), o.a.createElement(h, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, u._("Terms", null, {
				hk: "4qRzfE"
			})), o.a.createElement(h, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, u._("Content policy", null, {
				hk: "1DyxZS"
			})), o.a.createElement(h, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, u._("Privacy policy", null, {
				hk: "10K04G"
			})), o.a.createElement(h, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, u._("Mod policy", null, {
				hk: "2gYc2T"
			})))), o.a.createElement("div", {
				className: p.a.Copyright
			}, u._("Reddit Inc © {year} . All rights reserved", [u._param("year", (new Date).getFullYear().toString())], {
				hk: "3nJUt5"
			})))))
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/lodash/throttle.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/constants/elementIds.ts"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/components/BackToTop/index.m.less"),
				p = s.n(m);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				if (e) {
					const e = document.getElementById(c.d);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var b = ({
					className: e,
					isOverlay: t,
					style: s
				}) => a.a.createElement("div", {
					className: Object(n.a)(e, p.a.container),
					style: s
				}, a.a.createElement(l.l, {
					className: p.a.button,
					onClick: () => h(t)
				}, u._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				g = s("./src/reddit/components/SidebarFooter/index.tsx"),
				f = s("./src/reddit/constants/componentSizes.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				C = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				v = s.n(C),
				O = s("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = d.e[1] + 24,
				k = f.f + 8,
				w = k + 152 + 16,
				P = w + E + 8,
				j = O.a.div("Container", v.a),
				I = O.a.wrapped(({
					className: e,
					isOverlay: t,
					...s
				}) => a.a.createElement(b, y({
					className: e,
					isOverlay: t,
					style: {
						top: `calc(100vh - ${t?k:8}px)`
					}
				}, s)), "BackToTop", v.a),
				_ = ({
					children: e,
					className: t,
					isFakeOverlay: s,
					isSticky: o
				}) => a.a.createElement("div", {
					className: Object(n.a)(t, {
						[v.a.StickyStyles]: o && !s,
						[v.a.StickyStylesFakeOverlay]: !!s
					})
				}, e);
			class S extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > P,
						shouldFooterSticky: this.windowHeight > w
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
					}, this.handleResize = r()(() => {
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
							adComponentOnFakeOverlay: s,
							children: n,
							className: o,
							hideFooter: r,
							pageLayer: i
						}
					} = this, d = this.state.isAdSticky && !(!t && !n);
					return a.a.createElement(j, {
						className: o,
						innerRef: this.setWrapperRef
					}, a.a.createElement(_, {
						isFakeOverlay: s,
						isSticky: d
					}, t, n, !r && a.a.createElement(g.a, null)), !this.props.hideBackToTop && a.a.createElement(I, {
						isOverlay: !!(null === (e = null == i ? void 0 : i.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const T = Object(x.u)();
			t.a = T(S)
		},
		"./src/reddit/components/UserIcon/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
		},
		"./src/reddit/components/Widgets/AdRules/index.m.less": function(e, t, s) {
			e.exports = {
				Rule: "_3NwusXLUvLTrYmCFOYpDIA",
				rule: "_3NwusXLUvLTrYmCFOYpDIA",
				RuleIndex: "McQvObPSnfCkWc6C-ti6P",
				ruleIndex: "McQvObPSnfCkWc6C-ti6P",
				RuleTitle: "_2-jOphPs-FiWN_Da514451",
				ruleTitle: "_2-jOphPs-FiWN_Da514451"
			}
		},
		"./src/reddit/components/Widgets/AdRules/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/components/Widgets/AdRules/index.m.less"),
				c = s.n(d);
			const l = i.a.div("Rule", c.a),
				m = i.a.div("RuleIndex", c.a),
				p = i.a.div("RuleTitle", c.a);
			t.a = e => r.a.createElement(a.a, {
				className: e.className,
				title: n.fbt._("Rules for Reddit Ads", null, {
					hk: "3IMHuS"
				}),
				redditStyle: !0
			}, r.a.createElement(l, null, r.a.createElement(m, null, 1, "."), r.a.createElement(p, null, n.fbt._("Keep language civil", null, {
				hk: "2poAMk"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 2, "."), r.a.createElement(p, null, n.fbt._("Comments must be relevant to the Promoted Post and contribute to discussion", null, {
				hk: "zAMr0"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 3, "."), r.a.createElement(p, null, n.fbt._("Comments can offer feedback or criticism, but personal or other attacks on the advertiser or its products may be removed", null, {
				hk: "19a5UD"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 4, "."), r.a.createElement(p, null, n.fbt._("No impersonating or masquerading as celebrities, brands, or other users. To verify yourself in a Promoted Post's thread, message the user promoting the post", null, {
				hk: "BvXoq"
			}))))
		},
		"./src/reddit/components/Widgets/ReredditLink/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "ReredditLink",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ReredditLink").then(s.bind(null, "./src/reddit/components/Widgets/ReredditLink/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Widgets/ReredditLink/index.tsx"
				}
			})
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/trackers/widgets.ts"),
				h = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = s("./src/reddit/selectors/experiments/topPosts.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/models/Theme/index.ts"),
				C = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const v = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(C.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				O = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(C.a)(e).widgetColors.sidebarWidgetHeaderColor,
				y = e => {
					const t = v(e);
					return Object(x.f)(t)
				},
				E = e => {
					const t = O(e);
					return Object(x.f)(t)
				};
			var k = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				w = s.n(k);
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = Object(m.u)(), I = Object(r.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.n)(e, t) || void 0,
						n = t.redditStyle || Object(g.l)(e, {
							subredditId: s
						}),
						o = Object(f.X)(e);
					return n || o
				},
				nigtmode: f.X,
				subredditId: m.n,
				topPostVariant: b.d
			}));
			class _ extends o.a.Component {
				constructor() {
					super(...arguments), this.contentRef = o.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(u.b)(e, t)), this.setState({
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
					return e.backgroundColor = v(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = y(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = O(this.props), e.color = e.fill = E(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: r,
						onClick: i,
						title: d,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, u = s ? w.a.widgetContentOnly : w.a.widgetContent, h = !n && this.props.styles, b = h ? this.getWidgetBackgroundStyles() : {}, g = h ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(a.a)(t, w.a.widgetBackground, {
							[w.a.redditStyle]: n,
							[w.a.clickable]: !!i,
							[w.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: i,
						style: b
					}, d && o.a.createElement("div", {
						className: w.a.widgetHeader,
						style: g
					}, o.a.createElement("div", {
						className: Object(a.a)(w.a.widgetTitle, l)
					}, o.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), r), o.a.createElement("div", {
						className: Object(a.a)(u, {
							[w.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(p.r, {
						className: w.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, P._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = j(I(Object(d.a)(Object(l.c)(_))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return E
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "b", (function() {
				return j
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				d = s("./src/reddit/actions/gold/tooltips.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				m = s("./src/reddit/actions/survey/index.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/components/PostList/Placeholder.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				x = s("./src/reddit/selectors/experiments/survey.ts"),
				C = s("./src/reddit/selectors/listings.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/tracking.ts");

			function E() {
				return Object(u.u)({
					currentProfileName: u.i,
					isCommentPermalink: u.w,
					isCommentsPage: u.x,
					isFrontpage: u.z,
					isProfilePostListing: u.K,
					isTopicPage: u.P,
					pageLayer: e => e
				})
			}
			const k = E(),
				w = {
					apiError: C.c,
					apiPending: C.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(u.Q)(e, t),
					loadMore: C.g,
					postsById: v.S,
					postIds: Object(r.a)((e, {
						listingKey: t,
						listingName: s,
						inSubredditOrProfile: n
					}) => Object(v.E)(e, t, s, n)),
					subredditsById: O.X,
					viewportDataLoaded: y.a,
					pageReferrer: u.T,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: x.e
				},
				P = Object(o.c)(w),
				j = e => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(d.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(c.K(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(c.z(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n, o) => {
						e(c.N(t, n, o))
					},
					trackOnPostExitedViewport: (t, s, n, o, r) => {
						e(c.O(t, n, o, r))
					},
					surveyTriggerScrollCounted: () => e(Object(m.k)())
				}),
				I = e => Object(h.b)({
					...e
				}),
				_ = (e, t, s, n) => {
					const {
						listingKey: o,
						hostPostData: r,
						listingBelowVariant: i
					} = n;
					return Object(b.i)(e, t, "post", o, r, i, void 0)
				},
				S = Object(n.b)(P, j, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: I,
					postClickEventFactory: _
				}));
			t.a = e => Object(p.c)(k(S(e)))
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = o.a.createContext(() => () => {})
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var n = s("./node_modules/lodash/throttle.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/index.m.less"),
				u = s.n(p),
				h = s("./src/reddit/controls/Dropdown/row.m.less"),
				b = s.n(h);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class f extends i.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = o()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, s = Object(a.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(d.a, g({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && i.a.createElement("span", {
						className: s
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(m.a, g({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(c.a, {
						className: u.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const s = Object(a.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle
				});
				return i.a.createElement(f, g({
					className: s
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/InternalLink/index.tsx"),
				r = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = s.n(r);
			t.a = n.a.wrapped(o.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const o = (e, t) => {
				const s = e.some(e => e.isNSFW),
					o = t.some(e => e.wls === n.b.NO_ADS);
				return !s && !o
			}
		},
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/helpers/parseUrl.ts");
			const o = ["old", "new", "en", "www", "np", "m"],
				r = ["reddit.com", "reddit.local"].concat("").concat(o.map((function(e) {
					return e + ".reddit.com"
				}))).concat(o.map((function(e) {
					return e + ".reddit.local"
				}))),
				i = ["mod.reddit.com"],
				a = {
					subreddit: {
						pathnameComponents: ["subredditName"],
						pathname: /^\/r\/(\w+)\/?$/
					},
					user: {
						pathnameComponents: ["username"],
						pathname: /^\/(?:user|u)\/(\w+)\/?$/
					},
					postShortlink: {
						hostnames: r.concat("redd.it"),
						pathnameComponents: ["postID36"],
						pathname: /^\/([A-Za-z0-9]+)\/?$/
					},
					postDetail: {
						pathnameComponents: ["postID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)(?:\/\w+)?\/?$/
					},
					comment: {
						pathnameComponents: ["postID36", "commentID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)\/\w+\/(\w+)\/?$/
					},
					modmailConversation: {
						hostnames: i,
						pathnameComponents: ["modmailConversationId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/?$/
					},
					modmailMessage: {
						hostnames: i,
						pathnameComponents: ["modmailConversationId", "modmailMessageId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/(\w+)\/?$/
					}
				};

			function d(e) {
				return (e.match(new RegExp(n.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(a).some((function(s) {
						return t = function(e, t) {
							const s = a[e];
							if (!a) throw new Error("Could not find reddit URL spec: " + e);
							const o = Object(n.a)(t);
							if (!o) return void console.error("Could not parse url", t);
							if (-1 === (s.hostnames || r).indexOf(o.hostname)) return;
							const i = o.pathname.match(s.pathname);
							if (i) {
								return {
									url: t,
									routeName: e,
									components: s.pathnameComponents.reduce((function(e, t, s) {
										return e[t] = i[s + 1], e
									}), {})
								}
							}
						}(s, e)
					})), t
				})).filter((function(e) {
					return e
				}))
			}
		},
		"./src/reddit/helpers/resonatePage/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => {
				window.resonateAnalytics && window.resonateAnalytics.initialize || function() {
					const e = window.resonateAnalytics = window.resonateAnalytics || [];
					if (!e.initialize) {
						if (e.invoked) return;
						e.invoked = !0, e.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "profile"], e.factory = function(t) {
							return function() {
								const s = Array.prototype.slice.call(arguments);
								return s.unshift(t), e.push(s), e
							}
						};
						for (let t = 0; t < e.methods.length; t++) {
							const s = e.methods[t];
							e[s] = e.factory(s)
						}
						e.load = function(e) {
							const t = document.createElement("script");
							t.type = "text/javascript", t.async = !0, t.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.resonate.com/analytics.js/v1/" + e + "/analytics.min.js";
							const s = document.getElementsByTagName("script")[0];
							s.parentNode.insertBefore(t, s)
						}, e.SNIPPET_VERSION = "1.0.0", e.load("101117480")
					}
				}(), window.resonateAnalytics && window.resonateAnalytics.page && window.resonateAnalytics.page(e)
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
				return i
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = s.n(o);
			const i = ({
					isLoading: e
				}) => Object(n.a)(r.a.loadingBackground, {
					[r.a["m-loading"]]: e
				}),
				a = e => Object(n.a)(r.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/otherDiscussions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => ({
					...Object(n.defaults)(e),
					media: Object(n.media)(e, t),
					profile: Object(n.profile)(e),
					subreddit: Object(n.subreddit)(e) || Object(n.subredditByPostOrCommentId)(e, t)
				}),
				r = e => t => ({
					source: "post",
					action: "click",
					noun: "other_discussions",
					post: Object(n.post)(t, e),
					...o(t, e)
				}),
				i = e => t => ({
					source: "other_discussions",
					action: "click",
					noun: "dismiss",
					post: Object(n.post)(t, e),
					...o(t, e)
				})
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
			var n, o, r = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(o || (o = {}));
			const a = (e, t) => s => ({
					source: o.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(i.widget)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...i.defaults
				}),
				d = (e, t) => s => ({
					source: o.POST,
					action: r.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: i.post(s, e),
					subreddit: i.subreddit(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...i.defaults(s)
				}),
				c = () => e => ({
					source: o.SIDEBAR,
					action: r.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...i.defaults(e)
				}),
				l = e => t => ({
					source: o.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: n.TOPIC,
					...i.defaults(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/hooks/promo/useIsPromoShown.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/promo.ts"),
				o = s("./src/reddit/hooks/usePromoContext.ts");

			function r(e) {
				const {
					promos: t
				} = Object(o.a)();
				return !!e && t.get(e) === n.a.Shown
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function r(e) {
				const t = Object(n.e)(o.a) === e,
					s = Object(n.e)(o.c) === e,
					r = Object(n.e)(o.e) === e;
				return t || s || r
			}
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js");

			function o() {
				const [e, t] = Object(n.useState)(!1);
				return Object(n.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(n.useContext)(o.a)
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/layout/page/Lightbox/FakeLightbox.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				l = s("./src/reddit/components/AlertBanner/heights.ts"),
				m = s("./src/reddit/components/AppRouter/index.tsx"),
				p = s("./src/reddit/components/LightboxHeader/index.tsx"),
				u = s("./src/reddit/constants/componentSizes.ts"),
				h = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				b = s("./src/reddit/models/Theme/index.ts"),
				g = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				C = s.n(x);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = Object(r.b)(() => Object(i.c)({
					showFPR: f.I,
					showSuspended: f.R,
					showOffline: e => e.connection.showBanner
				})),
				y = Object(d.a)(({
					className: e,
					isCollectionLayout: t,
					theme: s,
					...n
				}) => {
					const r = Object(g.a)({
						theme: s,
						...n
					});
					return o.a.createElement("div", v({
						className: Object(a.a)(C.a.fakeOverlay, e),
						style: {
							"--fakelightbox-overlay-background": Object(b.g)(r.canvas, r.canvasImgUrl, r.canvasImgPosition),
							"--fakelightbox-overlay-max-width": t ? `${u.h}px` : `${u.i}px`
						}
					}, n))
				});
			class E extends o.a.Component {
				constructor() {
					super(...arguments), this.renderWrapper = e => {
						const t = {
							browserInfo: e,
							showSuspended: this.props.showSuspended,
							showFPR: this.props.showFPR,
							showOffline: this.props.showOffline
						};
						return o.a.createElement(m.a, {
							className: Object(a.a)(C.a.fakeOverlayLightboxHeaderWrapper, {
								[C.a.wide]: this.props.isCollectionLayout
							}, Object(l.b)(C.a, t))
						}, o.a.createElement(p.a, {
							post: this.props.post,
							onCloseClick: this.props.handleFakeLightboxClick
						}))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(y, {
						isCollectionLayout: !e.isCollectionLayout,
						onClick: e.handleFakeLightboxOverlayClick
					}), o.a.createElement(c.a.Consumer, null, this.renderWrapper), o.a.createElement(h.a, e))
				}
			}
			t.a = O(E)
		},
		"./src/reddit/layout/page/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				lightboxContainer: "_1npCwF50X2J7Wt82SZi6J0",
				mIsCollectionLayout: "_2mmpCGz_MbQyZXoaIL_u6I",
				lightboxContent: "u35lf2ynn4jHsVUwPmNU",
				mNotCollectionLayout: "Dx3UxiK86VcfkFQVHNXNi",
				lightboxSidebar: "_2Xq-4oyrEvHjL5U_EeMnK8",
				defaultLightboxSidebar: "_20b4i5iUhjZQqDZ1BM_Q-9",
				fakeOverlay: "_1QwQLdEXq0cZZb7vcte4KK",
				fakeOverlayContainer: "_3OGqXkiUb_0ZMlksb26boO",
				fakeOverlayContent: "_3KaECfUAGLfWQPO5eNjMNl",
				fakeOverlayLightboxHeaderWrapper: "_9BEqyBVXtRCQxyeYwqJMB",
				wide: "_3lVCgGR2stdSvrxCS2yWD7",
				showDeprecated: "_2NxbeazXeXu0bSJRcwSxd8",
				showFPR: "Hpitc80wLQqDqDh9A37wr",
				showFpr: "Hpitc80wLQqDqDh9A37wr",
				showSuspended: "_39xFv40KohPmMxYVnMJmp",
				offline: "Jvy6k8geBbRljwIwFTLRo",
				navExperiment: "_1BAfE2MtXRmb69Ht2TsVN-"
			}
		},
		"./src/reddit/layout/page/Lightbox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				a = s.n(i);
			const d = e => o.a.createElement("div", {
					tabIndex: e.tabIndex,
					ref: e.innerRef,
					className: Object(r.a)(a.a.lightboxContainer, {
						[a.a.mIsCollectionLayout]: e.isCollectionLayout,
						[a.a.fakeOverlayContainer]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				c = e => o.a.createElement("div", {
					className: Object(r.a)(a.a.lightboxContent, {
						[a.a.mNotCollectionLayout]: !e.isCollectionLayout,
						[a.a.fakeOverlayContent]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				l = e => o.a.createElement("div", {
					className: Object(r.a)(a.a.lightboxSidebar, {
						[a.a.defaultLightboxSidebar]: !e.isCollectionLayout,
						[a.a.mIsCollectionLayout]: e.isCollectionLayout
					})
				}, e.children);
			class m extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.container = null, this.setContainerRef = e => {
						this.container = e, this.props.containerRef && this.props.containerRef(e)
					}
				}
				render() {
					const {
						content: e,
						contentBanner: t,
						isCollectionLayout: s,
						isFakeOverlay: n,
						sidebar: r
					} = this.props;
					return o.a.createElement(d, {
						innerRef: this.setContainerRef,
						isCollectionLayout: s,
						isFakeOverlay: n,
						tabIndex: -1
					}, o.a.createElement(c, {
						isCollectionLayout: s,
						isFakeOverlay: n,
						redditStyle: !0
					}, t, e), r && o.a.createElement(l, {
						isCollectionLayout: s,
						isFakeOverlay: n
					}, r))
				}
			}
			t.a = m
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less": function(e, t, s) {
			e.exports = {
				CommentsNavigationPane: "_1k2YW82YLtn1xvksm7RHIO",
				commentsNavigationPane: "_1k2YW82YLtn1xvksm7RHIO",
				linkOrOverlay: "_1eQ54MneFHfYv8GJO9o-jg",
				OtherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6",
				otherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6"
			}
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				d = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/helpers/path/index.ts"),
				m = s("./src/reddit/helpers/trackers/otherDiscussions.ts"),
				p = s("./src/reddit/selectors/comments.ts"),
				u = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				h = s.n(u);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = Object(r.b)(() => Object(i.c)({
				headComment: p.x,
				post: p.G
			}));
			t.a = Object(c.c)(g(({
				commentId: e,
				headComment: t,
				isOverlay: s,
				post: n,
				postId: r,
				sendEvent: i
			}) => {
				var c;
				if (!n) return null;
				const p = null !== (c = n.numDuplicates) && void 0 !== c ? c : 0,
					u = void 0 !== e,
					g = n.permalink,
					f = p > 0,
					x = Object(l.b)(Object(a.e)(g));
				return u || f ? o.a.createElement("div", {
					className: h.a.CommentsNavigationPane
				}, u && o.a.createElement("div", null, o.a.createElement(d.a, {
					className: h.a.linkOrOverlay,
					isOverlay: s,
					to: Object(l.b)(g)
				}, b._("View all comments", null, {
					hk: "3I5IX9"
				})), t && null !== t.parentId && o.a.createElement(d.a, {
					className: h.a.linkOrOverlay,
					isOverlay: s,
					to: Object(l.b)(t.permalink + "?context=8&depth=9")
				}, b._("Show parent comments", null, {
					hk: "AVRCa"
				}))), f && o.a.createElement(d.a, {
					className: h.a.OtherDiscussionsLink,
					isOverlay: s,
					onClick: () => i(Object(m.a)(r)),
					to: x
				}, b._({
					"*": "View discussions in {other discussion communities count} other communities",
					_1: "View discussions in 1 other community"
				}, [b._plural(p, "other discussion communities count")], {
					hk: "3oofZ8"
				}))) : null
			}))
		},
		"./src/reddit/pages/CommentsPage/index.m.less": function(e, t, s) {
			e.exports = {
				promoBanner: "_25nFZKgLc-Z-1ua1YEzuCL",
				DetailsPageSidebar: "RffBqG1xCvuy1r49wYhLr",
				detailsPageSidebar: "RffBqG1xCvuy1r49wYhLr",
				MoreCommentsButton: "_1ibjfCIu5PPqcaOiPleMRD",
				moreCommentsButton: "_1ibjfCIu5PPqcaOiPleMRD",
				PageContentWrapper: "uI_hDmU5GSiudtABRz_37",
				pageContentWrapper: "uI_hDmU5GSiudtABRz_37",
				LargePageContent: "_3vh3MfGCp46QUOtwrgRgUk",
				largePageContent: "_3vh3MfGCp46QUOtwrgRgUk",
				Spacer: "q6p33SkkiPu07qUoN_Kd",
				spacer: "q6p33SkkiPu07qUoN_Kd",
				CommentsPaneWrapper: "_2M2wOqmeoPVvcSsJ6Po9-V",
				commentsPaneWrapper: "_2M2wOqmeoPVvcSsJ6Po9-V",
				mIsInOverlay: "_3287nL7j7epK9JmDC3N1VR",
				CollectionBodyWrapper: "_3cBG1RcjxrEO-gLlwkn87S",
				collectionBodyWrapper: "_3cBG1RcjxrEO-gLlwkn87S",
				ChatLoggedOutForm: "_20TbWqEmJ0wq_AV7La7GWd",
				chatLoggedOutForm: "_20TbWqEmJ0wq_AV7La7GWd",
				OverviewCommentPost: "lfoKI-nM1Ps5Y1WhxJPc6",
				overviewCommentPost: "lfoKI-nM1Ps5Y1WhxJPc6",
				backgroundMargin: "_34i0o0-SanTnUOM8JXdW6f",
				isFirstInCommentList: "_22yjV_JLQY-BfOOW1wgsgI",
				isLastInCommentList: "_3QJoultgeMO-1x88lIzzSe"
			}
		},
		"./src/reddit/pages/CommentsPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "getCommentsPageKeyById", (function() {
				return gt
			})), s.d(t, "CommentsPage", (function() {
				return Et
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s.n(o),
				i = s("./node_modules/lodash/get.js"),
				a = s.n(i),
				d = s("./node_modules/lodash/throttle.js"),
				c = s.n(d),
				l = s("./node_modules/react/index.js"),
				m = s.n(l),
				p = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/react-router-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				b = s("./src/reddit/models/PostDraft/index.ts"),
				g = s("./src/telemetry/index.ts"),
				f = s("./src/telemetry/models/Timer.ts"),
				x = s("./src/lib/classNames/index.ts"),
				C = s("./src/lib/constants/index.ts"),
				v = s("./src/lib/domUtils/index.ts"),
				O = s("./src/lib/fastdom/index.ts"),
				y = s("./src/lib/lessComponent.tsx"),
				E = s("./src/lib/makeCommentsPageKey/index.ts"),
				k = s("./src/lib/makeDraftKey/index.ts"),
				w = s("./src/lib/performanceTimings/index.tsx"),
				P = s("./src/reddit/actions/ads/index.ts"),
				j = s("./src/reddit/actions/comment/index.ts"),
				I = s("./src/reddit/actions/comment/authoring.ts"),
				_ = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				S = s("./src/reddit/actions/isTrackingCrossposts.ts"),
				T = s("./src/reddit/actions/login.ts"),
				L = s("./src/reddit/actions/pages/comments.ts"),
				N = s("./src/reddit/actions/tooltip.ts"),
				R = s("./src/reddit/actions/upvotePrompt.ts"),
				M = s("./src/reddit/components/CommentsPageNativeAd/async.tsx"),
				F = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				A = s("./src/reddit/components/RecommendedPostList/index.tsx"),
				B = s("./src/reddit/constants/componentSizes.ts"),
				D = s("./src/reddit/constants/elementIds.ts"),
				V = s("./src/reddit/constants/history.ts"),
				W = s("./src/reddit/constants/keycodes.ts"),
				U = s("./src/reddit/constants/posts.ts"),
				H = s("./src/reddit/constants/screenWidths.ts"),
				K = s("./src/reddit/contexts/ApiContext.tsx"),
				q = s("./src/reddit/contexts/PageLayer/index.tsx"),
				G = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				Y = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				z = s("./src/reddit/selectors/upvotePrompt.ts"),
				Q = s("./src/reddit/featureFlags/profileCollections.ts"),
				J = s("./src/reddit/contexts/Post/index.tsx"),
				X = s("./src/reddit/models/Comment/index.ts"),
				Z = s("./src/reddit/models/Post/index.ts"),
				$ = s("./src/reddit/models/Subreddit/index.ts"),
				ee = s("./src/reddit/selectors/chatPost.ts"),
				te = s("./src/reddit/selectors/comments.ts"),
				se = s("./src/reddit/selectors/commentSelector.ts"),
				ne = s("./src/reddit/selectors/commentsListTruncated.ts"),
				oe = s("./src/reddit/selectors/creatorStats.ts"),
				re = s("./src/reddit/selectors/discoveryUnit.ts"),
				ie = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				ae = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				de = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				ce = s("./src/reddit/selectors/experiments/creatorStats.ts"),
				le = s("./src/reddit/selectors/experiments/postSeo.ts"),
				me = s("./src/reddit/selectors/experiments/resonatePilot.ts"),
				pe = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				ue = s("./src/reddit/selectors/isEligibleForCommentTruncation.ts"),
				he = s("./src/reddit/selectors/meta.ts"),
				be = s("./src/reddit/selectors/moderatorPermissions.ts"),
				ge = s("./src/reddit/selectors/posts.ts"),
				fe = s("./src/reddit/selectors/subreddit.ts"),
				xe = s("./src/reddit/selectors/tooltip.ts"),
				Ce = s("./src/reddit/selectors/user.ts"),
				ve = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				Oe = s("./src/reddit/actions/postLevelCrowdControl.ts"),
				ye = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				Ee = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				ke = s("./src/reddit/components/Comments/index.tsx"),
				we = s("./src/reddit/components/Comments/States/index.tsx"),
				Pe = s("./src/reddit/components/CommentsChat/Loader.ts"),
				je = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Ie = s("./src/reddit/components/CommentSort/index.tsx"),
				_e = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				Se = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				Te = s("./src/reddit/components/CreatorStats/loader.tsx"),
				Le = s("./src/reddit/components/HeaderImage/index.tsx"),
				Ne = s("./src/reddit/components/Hovercards/helpers.ts"),
				Re = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				Me = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				Fe = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				Ae = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Be = s("./src/reddit/components/JumpToContent/index.tsx"),
				De = s("./src/reddit/components/NewCommentPill/async.tsx"),
				Ve = s("./src/reddit/components/PostContent/index.tsx"),
				We = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Ue = s("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				He = s("./src/reddit/components/SubredditNav/index.tsx"),
				Ke = s("./src/reddit/components/TrackingHelper/index.tsx"),
				qe = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Ge = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				Ye = s("./src/reddit/helpers/history/index.ts"),
				ze = s("./src/reddit/helpers/matchRedditUrls/index.ts"),
				Qe = s("./src/reddit/helpers/postCollection.ts"),
				Je = s("./src/reddit/helpers/resonatePage/index.ts"),
				Xe = s("./src/reddit/helpers/trackers/lightbox.ts"),
				Ze = s("./src/reddit/helpers/trackers/screenview.ts"),
				$e = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				et = s("./src/reddit/layout/page/Lightbox/FakeLightbox.tsx"),
				tt = s("./src/reddit/layout/page/Listing/index.tsx"),
				st = s("./src/reddit/models/ContentGate.ts"),
				nt = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				ot = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				rt = s("./src/reddit/pages/CommentsPage/index.m.less"),
				it = s.n(rt);

			function at() {
				return (at = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const dt = {
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "POST_COUNT_UPDATE"
						}
					}
				},
				ct = ({
					condition: e,
					wrap: t,
					children: s
				}) => e ? t(s) : s,
				lt = 200,
				mt = 80,
				pt = 32,
				ut = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-pages-CommentsPage-OtherDiscussions",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-pages-CommentsPage-OtherDiscussions").then(s.bind(null, "./src/reddit/pages/CommentsPage/OtherDiscussions/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/CommentsPage/OtherDiscussions/index.tsx"
					}
				}),
				ht = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-Collection",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-Collection").then(s.bind(null, "./src/reddit/components/Collection/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Collection/index.tsx"
					}
				}),
				bt = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ContentGate",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ContentGate").then(s.bind(null, "./src/reddit/components/ContentGate/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ContentGate/index.tsx"
					}
				}),
				gt = ({
					postId: e,
					commentId: t,
					commentsPageKey: s
				}) => t ? Object(E.a)(e) : s,
				ft = e => {
					const {
						state: t
					} = e.location, s = a()(t, V.b.IsOverlay, !1), n = a()(t, V.b.CloseLocation, null), o = a()(t, V.b.ScrollOnLoad, !1);
					o && Object(Ye.c)(V.b.ScrollOnLoad);
					const {
						partialCommentId: r,
						partialPostId: i,
						subredditName: d
					} = e.match.params, c = Object(Z.t)(i), l = r && Object(X.h)(r);
					return m.a.createElement(J.a, {
						postId: c
					}, m.a.createElement(Et, {
						closeLocation: n,
						commentId: l,
						commentsPageKey: e.commentsPageKey,
						isOverlay: s,
						location: e.location,
						onOtherDiscussions: e.onOtherDiscussions,
						postId: c,
						shouldScrollToComments: o,
						sort: e.sort,
						subredditName: d
					}))
				},
				xt = Object(q.u)(),
				Ct = () => Object(h.c)({
					apiError: te.c,
					apiPending: te.d,
					canCommentAsModerator: (e, {
						postId: t
					}) => {
						const s = Object(ge.U)(e, {
							postId: t
						});
						return !!(s && s.id && e.moderatingSubreddits[s.id])
					},
					canViewCreatorStats: (e, {
						postId: t
					}) => Object(oe.a)(e, t),
					comment: se.b,
					communityBannerDiscoveryUnit: re.b,
					contentGateInfo: (e, {
						subredditName: t
					}) => Object(Ce.f)(e, t),
					currentUserShowNSFW: Ce.eb,
					dismissedSubreddits: ie.a,
					fullyLoaded: te.u,
					hasModeratorPostPermissions: be.c,
					headComment: te.x,
					isActionBarAnimationEnabled: Y.b,
					isAvatarsInCommentsEnabled: de.a,
					isBlockedUserBannerEnabled: (e, {
						postId: t
					}) => !!Object(ge.w)(e, {
						postId: t
					}) && Object(ae.a)(e),
					isCountAnimShadowTestEnabled: Y.e,
					isCreatorStatsEnabled: (e, {
						postId: t
					}) => Object(ce.a)(e, t),
					isEligibleForCommentTruncation: ue.a,
					isChatPost: ee.d,
					isCommentsListTruncated: ne.a,
					isLoggedIn: Ce.K,
					isNightmodeOn: Ce.X,
					isTooltipOpen: (e, t) => !!Object(xe.a)(e),
					origin: he.j,
					post: ge.H,
					postSEOV2IdCardVariant: le.h,
					profileCollectionsEnabled: Q.a,
					replyComment: (e, {
						postId: t,
						commentId: s,
						commentsPageKey: n
					}) => Object(te.s)(e, {
						commentsPageKey: gt({
							postId: t,
							commentId: s,
							commentsPageKey: n
						})
					}),
					shouldOpenPostInNewTab: Ce.db,
					subredditAboutInfo: (e, {
						subredditName: t
					}) => t ? Object(fe.t)(e, {
						subredditName: t
					}) : void 0,
					subredditOrProfile: ge.U,
					userHovercardIsOpen: (e, t) => Object(xe.b)(Object(Ne.b)({
						itemId: t.postId,
						tooltipIdPrefix: F.a,
						tooltipType: We.c.StickyPost
					}))(e),
					userPrefs: Ce.ub,
					inResonatePilot: me.a,
					isPostQualifiedForUpvotePrompt: z.c,
					isTypingIndicatorsExperimentEnabled: pe.c
				}),
				vt = (e, t) => ({
					dismissTruncation: t => e(Object(ve.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(_.a)()),
					setCommentFocus: t => e(j.f({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(L.fullCommentsPageDataRequested)(t.postId, void 0, {
						subredditName: t.subredditName
					})),
					onHideTooltip: () => e(Object(N.i)()),
					onToggleTooltip: t => e(Object(N.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(T.i)()),
					openRegisterModal: () => e(Object(T.k)()),
					goToSubredditPage: t => e(Object(u.b)(t)),
					truncateCommentsList: () => e(Object(_.b)()),
					fetchCommentsNativeAd: t => e(Object(P.a)(t)),
					getIsTrackingCrossposts: t => e(Object(S.b)(t)),
					getPostCrowdControlLevel: t => e(Object(Oe.b)(t)),
					triggerUpvotePrompt: (t, s, n) => {
						e(Object(R.b)(t, s, n))
					}
				}),
				Ot = Object(p.b)(Ct, vt);
			class yt extends m.a.Component {
				constructor(e) {
					super(e), this.collectionPostWrapperRef = null, this.didRenderLoading = !1, this.needsUpdatedMeasurements = !0, this.scrollY = null, this.recheckScrollTimer = -1, this.postPaused = !0, this.setPostScrollItemRef = e => {
						this.postScrollItemRef = e, setTimeout(this.handleScroll)
					}, this.setAdScrollItemRef = e => {
						this.adScrollItemRef = e, setTimeout(this.handleScroll), this.needsUpdatedMeasurements = !0
					}, this.setCommentAdRef = e => {
						this.commentAdRef = e
					}, this.handleScroll = c()(() => {
						if (!this.scrollContainerEl) return;
						this.needsUpdatedMeasurements && this.updateMeasurements();
						const {
							didPassAdScrollThreshold: e,
							didScrollPastPost: t,
							scrollContainerEl: s,
							scrollAdThreshold: n,
							scrollPostThreshold: o,
							props: {
								userHovercardIsOpen: r,
								onToggleTooltip: i,
								postId: a
							}
						} = this;
						clearTimeout(this.recheckScrollTimer), this.recheckScrollTimer = -1;
						const d = s === window ? s.scrollY : s ? s.scrollTop : 0;
						this.scrollY = d, this.state.commentNativeAdId && (!e && void 0 !== n && d >= n && (this.didPassAdScrollThreshold = !0, this.adScrollItemRef && this.adScrollItemRef.pauseContent()), e && void 0 !== n && d < n && (this.didPassAdScrollThreshold = !1, this.adScrollItemRef && this.adScrollItemRef.focusContent())), !t && void 0 !== o && d >= o && (this.didScrollPastPost = !0), t && void 0 !== o && d < o && (this.didScrollPastPost = !1, r && O.a.write(() => {
							i(Object(Ne.b)({
								itemId: a,
								tooltipIdPrefix: F.a,
								tooltipType: We.c.StickyPost
							}))
						}))
					}, C.K), this.sendEventWithName = (e, t) => () => this.props.sendEvent(Object(Xe.d)(this.props.postId, e, t)), this.updateWindowHeight = () => {
						this.needsUpdatedMeasurements = !0, this.handleScroll()
					}, this.updateCommentSortRef = e => {
						this.commentSortRef = e, this.needsUpdatedMeasurements = !0
					}, this.updateCommentFormRef = e => {
						this.commentFormRef = e, this.needsUpdatedMeasurements = !0
					}, this.updateCollPostWrapperRef = e => {
						this.collectionPostWrapperRef = e
					}, this.handleViewAllCommentsClick = () => {
						const {
							dismissTruncation: e,
							expandCommentsList: t,
							post: s
						} = this.props;
						t();
						const n = s && Object(Z.s)(s) && s && s.belongsTo.id;
						n && e(n), this.sendEventWithName("view_all_comments")()
					}, this.handleFakeLightboxClick = () => {
						const e = Object(Ge.a)(this.props.subredditOrProfile);
						this.props.goToSubredditPage(e)
					}, this.handleFakeLightboxOverlayClick = () => {
						this.handleFakeLightboxClick(), this.sendEventWithName("post__click__overlay")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === W.b.F || e.keyCode === W.a.F,
							s = e.ctrlKey || e.metaKey;
						t && s && this.props.expandCommentsList()
					}, this.setLayoutRef = e => {
						this.setState({
							layoutRef: e
						})
					}, this.onAllCommentsRendered = () => {
						this.props.isEligibleForCommentTruncation || this.state.allCommentsRendered || this.setState({
							allCommentsRendered: !0
						})
					}, this.didScrollPastPost = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.didPassAdScrollThreshold = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.state = {
						allCommentsRendered: !1,
						layoutRef: null,
						commentNativeAdId: null,
						isUpvotePromptTriggered: !1
					}
				}
				UNSAFE_componentWillMount() {
					const {
						commentId: e,
						setCommentFocus: t
					} = this.props;
					e && t(e)
				}
				async componentDidMount() {
					var e;
					this.props.isPostQualifiedForUpvotePrompt && (this.upvotePromptId = setTimeout(() => {
						this.props.triggerUpvotePrompt(this.props.postId, !1, () => this.setState({
							isUpvotePromptTriggered: !0
						}))
					}, z.b));
					const {
						commentFormRef: t,
						commentSortRef: s,
						props: {
							isLoggedIn: n,
							isOverlay: o,
							post: r,
							shouldScrollToComments: i
						}
					} = this;
					if (r && !r.isSponsored && !r.isRemoved && r.belongsTo.type !== U.a.PROFILE) {
						const e = await this.props.fetchCommentsNativeAd(r.id);
						e && this.setState({
							commentNativeAdId: e
						})
					}
					if (o ? (this.scrollContainerEl = document.getElementById(D.d), i && (t || s) && r && r.numComments ? this.scrollToComments() : O.a.write(() => {
							setTimeout(() => {
								Object(v.c)(this.scrollContainerEl, 0)
							})
						})) : this.scrollContainerEl = window, this.props.hasModeratorPostPermissions && this.props.post)
						if (this.props.getPostCrowdControlLevel(this.props.post.id), this.props.post.crosspostRootId) {
							const e = this.props.post.crosspostRootId;
							this.props.getIsTrackingCrossposts(e)
						} else if (this.props.post.source) {
						const t = this.props.post.source.url;
						if (t) {
							const s = null === (e = Object(ze.a)(t)[0]) || void 0 === e ? void 0 : e.components;
							if (s && s.hasOwnProperty("postID36")) {
								const e = Object(Z.t)(s.postID36);
								this.props.getIsTrackingCrossposts(e)
							}
						}
					}
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), O.a.read(() => {
							this.props.isOverlay || Object(w.d)(w.c.CommentsPage, n)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						C.Lb.includes(e) && Object(Je.a)(e)
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.postId !== this.props.postId && (this.didRenderLoading = !1), e.commentId && e.commentId !== this.props.commentId && this.props.setCommentFocus(e.commentId)
				}
				UNSAFE_componentWillUpdate(e) {
					this.removeListeners(e)
				}
				componentDidUpdate(e) {
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), e.postId !== this.props.postId) {
						const e = this.props.post && Object(Qe.a)(this.props.post);
						this.props.post && this.props.post.numComments ? O.a.read(this.handleScroll) : O.a.write(() => {
							e || Object(v.c)(this.scrollContainerEl, 0), O.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && O.a.write(() => {
							setTimeout(() => {
								Object(v.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = B.b + (this.props.isOverlay ? B.n : 0),
								s = t.getBoundingClientRect().top;
							let n;
							const o = (n = this.props.isOverlay ? document.getElementById(D.d) : document.getElementsByTagName("body")[0]) && n.getBoundingClientRect().top,
								r = Math.abs(o - s),
								i = this.props.isOverlay ? pt : r - e;
							(this.props.isOverlay ? n && n.scrollTop || 0 : window.pageYOffset) >= i && O.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(v.c)(n, i) : Object(v.c)(document, i)
								})
							})
						}
					}
					this.truncateCommentList()
				}
				componentWillUnmount() {
					if (this.removeListeners(), this.needsUpdatedMeasurements = !1, this.scrollContainerEl = void 0, this.upvotePromptId && clearTimeout(this.upvotePromptId), this.props.isOverlay && this.props.isPostQualifiedForUpvotePrompt && !this.state.isUpvotePromptTriggered) {
						const e = !0;
						this.props.triggerUpvotePrompt(this.props.postId, e)
					}
				}
				truncateCommentList() {
					const {
						dismissedSubreddits: e,
						subredditOrProfile: t,
						truncateCommentsList: s
					} = this.props, n = t && t.id;
					n && !e.includes(n) && s()
				}
				updateMeasurements() {
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = lt, this.state.commentNativeAdId && (this.commentAdRef ? this.scrollAdThreshold = this.commentAdRef.offsetTop + this.commentAdRef.clientHeight / 2 : this.scrollAdThreshold = lt)
				}
				addListeners() {
					const {
						isOverlay: e
					} = this.props;
					e && window.addEventListener("resize", this.updateWindowHeight), this.props.isCommentsListTruncated && window.addEventListener("keydown", this.handleFindKeyPress), this.scrollContainerEl && this.scrollContainerEl.addEventListener("scroll", this.handleScroll)
				}
				removeListeners(e) {
					const {
						isOverlay: t
					} = this.props;
					t && window.removeEventListener("resize", this.updateWindowHeight), e && this.props.isCommentsListTruncated !== e.isCommentsListTruncated && window.removeEventListener("keydown", this.handleFindKeyPress), this.scrollContainerEl && this.scrollContainerEl.removeEventListener("scroll", this.handleScroll)
				}
				scrollToComments() {
					O.a.read(() => {
						const e = document.getElementById(D.d);
						if (e) {
							let t, s;
							this.commentFormRef ? (t = this.commentFormRef.offsetTop - mt, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - mt, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), O.a.write(() => {
								Object(v.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => O.a.read(this.handleScroll))
							})
						}
					})
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						apiPending: t,
						commentsPageKey: s
					} = this.props;
					return g.c.has(s) && (e || !t || this.listLongEnoughForScreenView())
				}
				listLongEnoughForScreenView() {
					return !!this.commentSortRef && this.commentSortRef.getBoundingClientRect().bottom > window.innerHeight
				}
				checkAndSendScreenview() {
					O.a.read(() => {
						const {
							commentId: e,
							commentsPageKey: t,
							postId: s,
							sendEvent: n,
							sort: o
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const r = g.c.end(t);
						n(Object(Ze.c)(t, s, e, f.TimerType.InApp, r, o))
					})
				}
				isCommentPermalink() {
					return void 0 !== this.props.commentId
				}
				renderPageError() {
					const {
						contentGateInfo: e,
						currentUserShowNSFW: t,
						isOverlay: s,
						post: n,
						subredditName: o
					} = this.props, r = !(!n || !n.isNSFW || t), i = Object(qe.a)(e, r, o);
					if (!i) return null;
					let a = m.a.createElement(bt, i);
					return s && (a = m.a.createElement($e.a, {
						content: a
					})), a
				}
				render() {
					const {
						apiError: e,
						apiPending: t,
						closeLocation: s,
						commentId: n,
						commentsPageKey: o,
						isActionBarAnimationEnabled: r,
						isCountAnimShadowTestEnabled: i,
						isEligibleForCommentTruncation: a,
						isLoggedIn: d,
						isNightmodeOn: c,
						isOverlay: l,
						post: p,
						postId: u,
						postSEOV2IdCardVariant: h,
						profileCollectionsEnabled: b,
						sendEvent: g,
						sort: f,
						subredditOrProfile: v
					} = this.props, O = Object(le.f)(h);
					if (!p) {
						if (t) return m.a.createElement(we.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === C.o ? m.a.createElement(bt, {
							contentGateType: st.a.PostBlockedForLegalReason
						}) : m.a.createElement(we.d, {
							postId: u,
							commentId: n,
							apiError: e,
							sort: f
						}) : m.a.createElement(we.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const y = this.isCommentPermalink(),
						E = p.belongsTo.type === U.a.PROFILE,
						k = Object(Qe.a)(p) && (!E || b),
						w = !d,
						P = v && v.isQuarantined,
						j = !a && !this.state.allCommentsRendered;
					return dt.input.channel.postID = u, m.a.createElement(wt, {
						closeLocation: s,
						commentsPageKey: o,
						containerRef: this.setLayoutRef,
						handleFakeLightboxClick: this.handleFakeLightboxClick,
						handleFakeLightboxOverlayClick: this.handleFakeLightboxOverlayClick,
						isLoggedIn: d,
						isOverlay: l,
						isSwapVariant: O,
						post: p,
						subredditOrProfile: v,
						shouldFitPageToContent: w,
						isCollectionLayout: k
					}, m.a.createElement(De.a, {
						postId: u,
						isNightMode: c,
						isOverlay: l,
						commentId: n
					}), P && m.a.createElement(Ae.a, {
						subredditName: v.name
					}), m.a.createElement(Be.a, null), m.a.createElement("div", {
						className: Object(x.a)(it.a.PageContentWrapper, {
							[it.a.LargePageContent]: k,
							[it.a.ChatPage]: this.props.isChatPost
						}),
						key: "PostContentWrapper"
					}, k && m.a.createElement(ht, {
						isOverlay: l,
						isNightmodeOn: c,
						postId: u
					}), m.a.createElement(ct, {
						condition: k,
						wrap: e => m.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: it.a.CollectionBodyWrapper
						}, e)
					}, m.a.createElement(Ve.a, {
						isCommentPermalink: y,
						isOverlay: l,
						postId: u,
						redditStyle: l,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: g,
						isActionBarAnimationEnabled: r,
						isCountAnimShadowTestEnabled: i
					}), this.props.canViewCreatorStats && !P && this.props.isCreatorStatsEnabled && m.a.createElement(Te.a, {
						post: p,
						subreddit: v
					}), this.state.commentNativeAdId && m.a.createElement("div", {
						ref: this.setCommentAdRef
					}, m.a.createElement(M.a, {
						key: `event-post-id-${p.id}`,
						isOverlay: l,
						postId: this.state.commentNativeAdId,
						scrollerItemRef: this.setAdScrollItemRef
					})), this.renderCommentPanes())), v && !Object($.h)(v) && m.a.createElement(A.a, {
						awaitAllCommentsRendered: j,
						contentContainerRef: this.state.layoutRef,
						isOverlay: l,
						post: p,
						subredditOrProfile: v
					}))
				}
				renderCommentPanes() {
					const {
						apiError: e,
						apiPending: t,
						canCommentAsModerator: s,
						commentId: n,
						commentsPageKey: r,
						fullyLoaded: i,
						hasModeratorPostPermissions: a,
						headComment: d,
						isAvatarsInCommentsEnabled: c,
						isBlockedUserBannerEnabled: l,
						isChatPost: p,
						isCommentsListTruncated: u,
						isEligibleForCommentTruncation: h,
						isLoggedIn: g,
						isOverlay: f,
						isTypingIndicatorsExperimentEnabled: C,
						location: v,
						onOtherDiscussions: O,
						openLoginModal: y,
						openRegisterModal: E,
						origin: w,
						post: P,
						postId: j,
						replyComment: _,
						sendEvent: S,
						sort: T,
						subredditAboutInfo: L,
						subredditOrProfile: N
					} = this.props;
					if (!P) return null;
					const R = this.isCommentPermalink(),
						M = [],
						F = P.isLocked && !s,
						A = !(R || P.isArchived || L && L.userIsBanned || P.authorIsBlocked && l);
					let B = !1;
					if (F) M.push(m.a.createElement(Me.a, {
						key: "commentThreadBanner",
						subredditOrProfile: N
					}));
					else if (P.isArchived) M.push(m.a.createElement(Re.a, {
						key: "commentThreadBanner"
					}));
					else if (A && !p && !O)
						if (g) {
							B = C;
							const e = Object(k.a)(b.c.replyToPost, j);
							M.push(m.a.createElement(ye.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: b.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								isOverlay: f,
								isTypingIndicatorsExperimentEnabled: C,
								key: "form" + e,
								parentCommentId: "replyToPost",
								postId: j,
								submitAction: ({
									validate: t,
									...s
								}, n) => t ? I.t(j, r, e, s, n) : I.n(j, r, e, s, n),
								submitButtonText: o.fbt._("Comment", null, {
									hk: "m3FAA"
								})
							}))
						} else M.push(m.a.createElement(Ee.a, {
							key: "loggedOutCommentForm",
							location: v,
							openLoginModal: y,
							openRegisterModal: E,
							origin: w
						}));
					if (P.contestMode && M.push(m.a.createElement(Fe.a, {
							hasModeratorPostPermissions: a,
							key: "contestModeBanner"
						})), !p && !O && M.push(m.a.createElement(Ie.b, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: f,
							key: "commentSort",
							location: v,
							postId: j,
							sort: T,
							suggestedSort: P.suggestedSort
						}), m.a.createElement(nt.a, {
							commentId: n,
							commentsPageKey: r,
							isOverlay: f,
							key: "commentNavigation",
							postId: j
						})), M.push(m.a.createElement(Ue.a, {
							postId: j
						})), !t || d || p || O)
						if (!e || d || O)
							if (O) M.push(m.a.createElement(ut, {
								commentSort: T,
								key: "otherDiscussions",
								postId: j,
								isOverlay: f,
								postPermalink: P.permalink
							}));
							else if (p) {
						if (N && N.id) {
							const e = _ ? Object(k.a)(b.c.replyToComment, _.id) : Object(k.a)(b.c.replyToPost, j),
								s = gt({
									postId: j,
									commentId: n,
									commentsPageKey: r
								});
							M.push(m.a.createElement(Pe.a, {
								commentId: n,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !d || !i && t,
								key: "commentsChat",
								postId: j,
								renderedInOverlay: f,
								subredditId: N.id
							}, ({
								scrollToBottom: t
							}) => g ? m.a.createElement(je.a, {
								key: "chatCommentsForm",
								postId: j,
								replyComment: _,
								draftKey: e,
								commentsPageKey: s,
								isEditing: !1,
								scrollToBottom: t,
								sendEvent: S
							}) : m.a.createElement(Ee.a, {
								key: "loggedOutCommentForm",
								className: it.a.ChatLoggedOutForm,
								location: v,
								openLoginModal: y,
								openRegisterModal: E,
								origin: w
							})))
						}
					} else M.push(m.a.createElement("div", {
						className: Object(x.a)(it.a.CommentsPaneWrapper, {
							[it.a.mIsInOverlay]: f
						}),
						key: "commentsPaneWrapper"
					}, m.a.createElement(Se.a, at({}, this.props, {
						shouldTruncateComments: h && u,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: P.numComments,
						onClick: this.handleContentClick
					}), m.a.createElement(ke.a, {
						commentId: n,
						commentsPageKey: r,
						postId: j,
						onAllCommentsRendered: this.onAllCommentsRendered,
						renderedInOverlay: f
					})))), e && d ? M.push(m.a.createElement(we.e, {
						key: "commentsErrorState",
						postId: j,
						commentId: n,
						sort: T,
						apiError: e
					})) : !i && t && M.push(m.a.createElement(we.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					else M.push(m.a.createElement(we.e, {
						postId: j,
						commentId: n,
						sort: T,
						apiError: e
					}));
					else this.didRenderLoading = !0, M.push(m.a.createElement(we.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					if (B) {
						const e = M.shift();
						M.push(e)
					}
					return m.a.createElement(G.a.Provider, {
						value: this.sendEventWithName
					}, M)
				}
			}
			const Et = xt(Object(K.b)(Ot(Object(Ke.c)(yt)))),
				kt = y.a.wrapped(_e.a, "DetailsPageSidebar", it.a),
				wt = e => {
					const {
						children: t,
						commentsPageKey: s,
						containerRef: n,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isCollectionLayout: i,
						isLoggedIn: a,
						isOverlay: d,
						isSwapVariant: c,
						post: l,
						shouldFitPageToContent: p,
						subredditOrProfile: u
					} = e;
					if (!a && !d) return m.a.createElement(et.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: i,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isFakeOverlay: !0,
						post: l,
						sidebar: u && m.a.createElement(_e.a, {
							commentsPageKey: s,
							isFakeOverlay: !0,
							isOverlay: !0,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					if (d) return m.a.createElement($e.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: i,
						sidebar: u && m.a.createElement(_e.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					const h = i ? B.i : H.a;
					return m.a.createElement(tt.a, {
						containerRef: n,
						maxWidth: B.i,
						fitPageToContent: p,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: c,
						isCollectionLayout: i,
						navBar: u && m.a.Children.toArray([m.a.createElement(Le.a, {
							key: u.name,
							disableFullscreen: !0,
							headerText: u.name,
							maxWidth: h,
							prefixedHeaderText: u.displayText,
							subredditOrProfile: u,
							url: u.url
						}), !Object($.h)(u) && m.a.createElement(He.a, {
							disableFullscreen: !0,
							homeUrl: u.url,
							maxWidth: h,
							subredditId: u.id
						})]),
						sidebar: u && m.a.createElement(kt, {
							commentsPageKey: s,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					})
				};
			t.default = Object(ot.a)(ft)
		},
		"./src/reddit/pages/CommentsPage/withPageSorting.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/makeCommentsPageKey/index.ts"),
				m = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				p = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				u = s("./src/reddit/models/Comment/index.ts"),
				h = s("./src/reddit/models/Post/index.ts");
			const b = e => {
					const {
						partialPostId: t
					} = e.match.params;
					return t && Object(h.t)(t)
				},
				g = (e, t, s) => {
					const n = b(e),
						r = (e => {
							const {
								partialCommentId: t
							} = e.match.params;
							return t && Object(u.h)(t)
						})(e),
						i = (e => {
							const {
								location: {
									search: t
								}
							} = e;
							return o()([...Object(c.a)(t)])
						})(e),
						a = {
							depth: i.depth && parseInt(i.depth, 10) || void 0,
							context: i.context && parseInt(i.context, 10) || void 0,
							hasSortParam: t,
							sort: s
						};
					return Object(l.a)(n, r, a)
				},
				f = Object(d.c)({
					commentsPageSort: (e, t) => {
						const s = b(t);
						return Object(p.a)(e, s)
					}
				}),
				x = Object(a.b)(f);

			function C(e) {
				return x(t => {
					const {
						hasSortParam: s,
						sortToUse: n
					} = t.commentsPageSort, o = g(t, s, n), r = Object(m.d)(t.match.path), a = {
						...t,
						commentsPageKey: o,
						hasSortParam: s,
						onOtherDiscussions: r,
						sort: n
					};
					return i.a.createElement(e, a)
				})
			}
		},
		"./src/reddit/selectors/commentsListTruncated.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => e.commentsListTruncated
		},
		"./src/reddit/selectors/dismissedTruncationList.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			var n = s("./node_modules/reselect/es/index.js");
			const o = e => e.dismissedTruncationList,
				r = Object(n.a)((e, {
					subredditOrProfile: t
				}) => t, o, (e, t) => {
					const s = e && e.id;
					return !!s && t.includes(s)
				})
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = Object(n.a)(i.K, i.J, (e, t) => e || t),
				d = Object(n.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: o.G
				}), e => e === o.P.Enabled)
		},
		"./src/reddit/selectors/experiments/econ/avatarNfts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => Object(o.c)(e, {
				experimentEligibilitySelector: o.a,
				experimentName: n.r
			}) === n.u.Enabled
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.tc
				});
				return !(!t || Object(n.uf)(t))
			}
		},
		"./src/reddit/selectors/experiments/resonatePilot.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/meta.ts");
			const i = e => Object(o.c)(e, {
				experimentEligibilitySelector: e => !Object(r.d)(e) && "US" === Object(r.b)(e),
				experimentName: n.ze
			}) === n.He.Enabled
		},
		"./src/reddit/selectors/experiments/signupUpsellExperiment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "f", (function() {
				return b
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/meta.ts"),
				a = s("./src/reddit/selectors/experiments/index.ts");
			const d = Object(n.a)(i.g, i.d, a.e, (e, t, s) => !e && !t && !s);

			function c(e, t) {
				return s => Object(r.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: d,
					throttledVariants: {
						[o.Xb.Bottom_cell_dismissible]: e,
						[o.Xb.Bottom_cell_dismissible_immediate_trigger]: e,
						[o.Xb.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = c(o.ob, !0),
				m = c(o.pb, !0),
				p = c(o.qb, !0),
				u = c(o.ob, !1),
				h = c(o.pb, !1),
				b = c(o.qb, !1)
		},
		"./src/reddit/selectors/experiments/typingIndicators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return a
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts"),
				i = s("./src/reddit/selectors/experiments/presence.ts");
			const a = e => {
					if (Object(i.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.qf
					}) === n.Zc
				},
				d = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.rf
					}) === n.Zc
				},
				c = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.pf
					});
					return t === n.if.UIChangesOnly || t === n.if.TypingIndicators || t === n.if.IndicatorsPlusCTA
				},
				l = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.d)(e, {
							experimentName: n.pf
						}),
						s = null == t ? void 0 : t.variant;
					return s === n.if.TypingIndicators || s === n.if.IndicatorsPlusCTA
				},
				m = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.d)(e, {
						experimentName: n.pf
					});
					return (null == t ? void 0 : t.variant) === n.if.IndicatorsPlusCTA
				}
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return d
			})), s.d(t, "h", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "k", (function() {
				return p
			})), s.d(t, "j", (function() {
				return u
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "d", (function() {
				return O
			}));
			var n = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/featureFlags/index.ts"),
				r = s("./src/reddit/selectors/posts.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const d = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(i.Q)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				c = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				m = [],
				p = Object(n.a)((e, t) => {
					const s = u(e, t);
					if (!s) return m;
					const n = Object(i.U)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : m
				}),
				u = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(i.Q)(e, {
						subredditId: s
					}) : null
				},
				h = (e, t, s, n, o) => {
					const i = o.find(e => e <= t) || -1,
						a = o.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + s > t) && (!(t + s > a) && !((e, t, s) => {
						const n = s[t - 1],
							o = s[t],
							i = o && Object(r.H)(e, {
								postId: n
							}) || null,
							a = o && Object(r.H)(e, {
								postId: o
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, n)))
				},
				b = [3],
				g = Object(n.a)((e, {
					existingDUPositions: t,
					listingProps: s
				}) => {
					const n = t.slice().sort();
					let o = -1;
					const i = Object(r.A)(e, {
							listingKey: s.listingKey
						}),
						a = [];
					return b.forEach(t => {
						let s = o + t;
						if (!(s >= i.length)) {
							for (; s < i.length && !h(e, s, t, i, n);) s += 1;
							s < i.length && (a.push(s), o = s)
						}
					}), a
				}),
				f = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				x = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				C = e => e.focusedVerticals.category,
				v = e => e.focusedVerticals.lastLoadedEnv,
				O = e => {
					const t = Object(a.J)(e),
						s = o.d.geoSubredditRecommendationDULoggedIn(e),
						n = o.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && n
				}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(o.uf)(t)
				},
				d = Object(n.a)(a, r.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/isEligibleForCommentTruncation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				r = s("./src/reddit/selectors/meta.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				a = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/models/Subreddit/index.ts");
			const c = Object(n.a)((e, t) => t.isOverlay, (e, t) => {
				const s = Object(i.U)(e, {
					postId: t.postId
				});
				return Object(o.b)(e, {
					...t,
					subredditOrProfile: s
				})
			}, i.U, i.H, a.J, a.K, r.g, (e, t, s, n, o, r, i) => {
				if (!n) return !1;
				const a = !(!s || Object(d.h)(s)),
					c = n.numComments >= 3 && !e || !t;
				return i && a && c && (!o && !r)
			})
		},
		"./src/reddit/selectors/seo/reredditPromo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				r = s("./src/reddit/selectors/platform.ts");
			const i = new Date,
				a = i.getUTCFullYear(),
				d = i.getUTCMonth(),
				c = i.getUTCDate(),
				l = Date.UTC(2008, 0, 1),
				m = Date.UTC(a, d - 7, c),
				p = Object(n.a)(e => Object(r.f)(e), e => Object(o.a)(e), (e, t) => e && !!t && !!t.created && t.created > l && t.created < m)
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = (e, {
				listingKey: t
			}) => e.tracking.viewportDataLoaded[t]
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"e6613d03cfc3"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"b83ddb418d74"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"f8a400eb97dd"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"8d5cc57ee984"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"19b6f388997f"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPage.793a5017d61b47e287ca.js.map