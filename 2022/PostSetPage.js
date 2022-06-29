// https://www.redditstatic.com/desktop2x/PostSetPage.bd51ea6b127331300eda.js
// Retrieved at 6/29/2022, 1:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostSetPage"], {
		"./node_modules/intersection-observer/intersection-observer.js": function(t, e) {
			! function(t, e) {
				"use strict";
				if ("IntersectionObserver" in t && "IntersectionObserverEntry" in t && "intersectionRatio" in t.IntersectionObserverEntry.prototype) "isIntersecting" in t.IntersectionObserverEntry.prototype || Object.defineProperty(t.IntersectionObserverEntry.prototype, "isIntersecting", {
					get: function() {
						return this.intersectionRatio > 0
					}
				});
				else {
					var r = [];
					n.prototype.THROTTLE_TIMEOUT = 100, n.prototype.POLL_INTERVAL = null, n.prototype.observe = function(t) {
						if (!this._observationTargets.some((function(e) {
								return e.element == t
							}))) {
							if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: t,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, n.prototype.unobserve = function(t) {
						this._observationTargets = this._observationTargets.filter((function(e) {
							return e.element != t
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, n.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, n.prototype.takeRecords = function() {
						var t = this._queuedEntries.slice();
						return this._queuedEntries = [], t
					}, n.prototype._initThresholds = function(t) {
						var e = t || [0];
						return Array.isArray(e) || (e = [e]), e.sort().filter((function(t, e, r) {
							if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return t !== r[e - 1]
						}))
					}, n.prototype._parseRootMargin = function(t) {
						var e = (t || "0px").split(/\s+/).map((function(t) {
							var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
							if (!e) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(e[1]),
								unit: e[2]
							}
						}));
						return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
					}, n.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (i(t, "resize", this._checkForIntersections, !0), i(e, "scroll", this._checkForIntersections, !0), "MutationObserver" in t && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, n.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, o(t, "resize", this._checkForIntersections, !0), o(e, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, n.prototype._checkForIntersections = function() {
						var e = this._rootIsInDom(),
							r = e ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(n) {
							var i = n.element,
								o = c(i),
								a = this._rootContainsTarget(i),
								d = n.entry,
								l = e && a && this._computeTargetAndRootIntersection(i, r),
								u = n.entry = new s({
									time: t.performance && performance.now && performance.now(),
									target: i,
									boundingClientRect: o,
									rootBounds: r,
									intersectionRect: l
								});
							d ? e && a ? this._hasCrossedThreshold(d, u) && this._queuedEntries.push(u) : d && d.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, n.prototype._computeTargetAndRootIntersection = function(r, s) {
						if ("none" != t.getComputedStyle(r).display) {
							for (var n, i, o, a, l, u, m, h, p = c(r), f = d(r), g = !1; !g;) {
								var b = null,
									v = 1 == f.nodeType ? t.getComputedStyle(f) : {};
								if ("none" == v.display) return;
								if (f == this.root || f == e ? (g = !0, b = s) : f != e.body && f != e.documentElement && "visible" != v.overflow && (b = c(f)), b && (n = b, i = p, o = void 0, a = void 0, l = void 0, u = void 0, m = void 0, h = void 0, o = Math.max(n.top, i.top), a = Math.min(n.bottom, i.bottom), l = Math.max(n.left, i.left), u = Math.min(n.right, i.right), h = a - o, !(p = (m = u - l) >= 0 && h >= 0 && {
										top: o,
										bottom: a,
										left: l,
										right: u,
										width: m,
										height: h
									}))) break;
								f = d(f)
							}
							return p
						}
					}, n.prototype._getRootRect = function() {
						var t;
						if (this.root) t = c(this.root);
						else {
							var r = e.documentElement,
								s = e.body;
							t = {
								top: 0,
								left: 0,
								right: r.clientWidth || s.clientWidth,
								width: r.clientWidth || s.clientWidth,
								bottom: r.clientHeight || s.clientHeight,
								height: r.clientHeight || s.clientHeight
							}
						}
						return this._expandRectByRootMargin(t)
					}, n.prototype._expandRectByRootMargin = function(t) {
						var e = this._rootMarginValues.map((function(e, r) {
								return "px" == e.unit ? e.value : e.value * (r % 2 ? t.width : t.height) / 100
							})),
							r = {
								top: t.top - e[0],
								right: t.right + e[1],
								bottom: t.bottom + e[2],
								left: t.left - e[3]
							};
						return r.width = r.right - r.left, r.height = r.bottom - r.top, r
					}, n.prototype._hasCrossedThreshold = function(t, e) {
						var r = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
							s = e.isIntersecting ? e.intersectionRatio || 0 : -1;
						if (r !== s)
							for (var n = 0; n < this.thresholds.length; n++) {
								var i = this.thresholds[n];
								if (i == r || i == s || i < r != i < s) return !0
							}
					}, n.prototype._rootIsInDom = function() {
						return !this.root || a(e, this.root)
					}, n.prototype._rootContainsTarget = function(t) {
						return a(this.root || e, t)
					}, n.prototype._registerInstance = function() {
						r.indexOf(this) < 0 && r.push(this)
					}, n.prototype._unregisterInstance = function() {
						var t = r.indexOf(this); - 1 != t && r.splice(t, 1)
					}, t.IntersectionObserver = n, t.IntersectionObserverEntry = s
				}

				function s(t) {
					this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: 0,
						height: 0
					}, this.isIntersecting = !!t.intersectionRect;
					var e = this.boundingClientRect,
						r = e.width * e.height,
						s = this.intersectionRect,
						n = s.width * s.height;
					this.intersectionRatio = r ? n / r : this.isIntersecting ? 1 : 0
				}

				function n(t, e) {
					var r, s, n, i = e || {};
					if ("function" != typeof t) throw new Error("callback must be a function");
					if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (r = this._checkForIntersections.bind(this), s = this.THROTTLE_TIMEOUT, n = null, function() {
						n || (n = setTimeout((function() {
							r(), n = null
						}), s))
					}), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map((function(t) {
						return t.value + t.unit
					})).join(" ")
				}

				function i(t, e, r, s) {
					"function" == typeof t.addEventListener ? t.addEventListener(e, r, s || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, r)
				}

				function o(t, e, r, s) {
					"function" == typeof t.removeEventListener ? t.removeEventListener(e, r, s || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, r)
				}

				function c(t) {
					var e;
					try {
						e = t.getBoundingClientRect()
					} catch (r) {}
					return e ? (e.width && e.height || (e = {
						top: e.top,
						right: e.right,
						bottom: e.bottom,
						left: e.left,
						width: e.right - e.left,
						height: e.bottom - e.top
					}), e) : {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: 0,
						height: 0
					}
				}

				function a(t, e) {
					for (var r = e; r;) {
						if (r == t) return !0;
						r = d(r)
					}
					return !1
				}

				function d(t) {
					var e = t.parentNode;
					return e && 11 == e.nodeType && e.host ? e.host : e
				}
			}(window, document)
		},
		"./node_modules/lodash/times.js": function(t, e, r) {
			var s = r("./node_modules/lodash/_baseTimes.js"),
				n = r("./node_modules/lodash/_castFunction.js"),
				i = r("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				c = 4294967295,
				a = Math.min;
			t.exports = function(t, e) {
				if ((t = i(t)) < 1 || t > o) return [];
				var r = c,
					d = a(t, c);
				e = n(e), t -= c;
				for (var l = s(d, e); ++r < t;) e(r);
				return l
			}
		},
		"./node_modules/shallowequal/index.js": function(t, e) {
			t.exports = function(t, e, r, s) {
				var n = r ? r.call(s, t, e) : void 0;
				if (void 0 !== n) return !!n;
				if (t === e) return !0;
				if ("object" != typeof t || !t || "object" != typeof e || !e) return !1;
				var i = Object.keys(t),
					o = Object.keys(e);
				if (i.length !== o.length) return !1;
				for (var c = Object.prototype.hasOwnProperty.bind(e), a = 0; a < i.length; a++) {
					var d = i[a];
					if (!c(d)) return !1;
					var l = t[d],
						u = e[d];
					if (!1 === (n = r ? r.call(s, l, u, d) : void 0) || void 0 === n && l !== u) return !1
				}
				return !0
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return _
			})), r.d(e, "d", (function() {
				return x
			})), r.d(e, "c", (function() {
				return y
			})), r.d(e, "b", (function() {
				return L
			}));
			var s, n = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/performanceTimings/index.tsx"),
				o = r("./src/reddit/actions/focusedVerticals/constants.ts"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(t) {
				t.LoggedInGeo = "2.1", t.LoggedOutGeo = "2.1"
			}(s || (s = {}));
			var d, l = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(t) {
				t.DEFAULT = "DEFAULT", t.GEO = "GEO"
			}(d || (d = {}));
			var m = r("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				h = r("./src/reddit/selectors/platform.ts"),
				p = r("./src/reddit/selectors/user.ts");
			const f = Object(n.a)(o.g),
				g = Object(n.a)(o.e),
				b = Object(n.a)(o.h),
				v = Object(n.a)(o.c),
				_ = Object(n.a)(o.f),
				x = Object(n.a)(o.j),
				y = Object(n.a)(o.i),
				O = () => async (t, e, r) => {
					let {
						gqlContext: n
					} = r;
					const i = e(),
						o = Object(m.e)(i),
						d = Object(m.d)(i),
						h = Object(p.P)(i);
					if (o || !d) return;
					t(b());
					let _ = !1;
					try {
						const e = h ? s.LoggedInGeo : s.LoggedOutGeo,
							r = await ((t, e, r) => Object(c.a)(t, {
								...a,
								variables: {
									version: e,
									isNsfwIncluded: !1
								}
							}))(n(), e);
						if (r.ok && r.body) {
							const {
								data: e
							} = r.body;
							if (E(e)) {
								if (I(e)) {
									t(v({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), _ = !0
								} else if (j(e)) {
									const r = e.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: s,
											interactedSubreddit: n,
											category: i
										} = r.focusRecommendations[0],
										o = [s, n],
										c = Object(u.d)(o),
										a = Object(l.b)(o),
										d = Object(u.c)(s),
										m = {
											recommendedSubredditIds: [s.id],
											interactedSubredditIds: [n.id],
											subreddits: c,
											subredditsAboutInfo: a,
											subredditTopContent: d,
											category: i,
											lastLoadedEnv: "client"
										};
									t(f(m)), _ = !0
								}
							} else _ = !1
						}
					} catch (x) {
						_ = !1
					}
					_ || t(g({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, E = t => {
					const e = t.focusVerticalSubredditRecommendations;
					return !(!e || !e.focusRecommendations)
				}, I = t => {
					const e = t.focusVerticalSubredditRecommendations,
						r = e && e.focusRecommendations;
					return !(!r || 0 !== r.length)
				}, j = t => {
					const e = t.focusVerticalSubredditRecommendations,
						r = e && e.focusRecommendations,
						s = e && e.type;
					return !!(r && !I(t) && s === d.GEO && r[0] && r[0].recommendedSubreddit && r[0].interactedSubreddit)
				}, L = () => async (t, e, r) => {
					var s, n;
					const o = e(),
						c = Object(m.g)(o);
					if (Object(m.f)(o) || null === c || "client" === c) {
						const r = null === (n = null === (s = Object(h.b)(e())) || void 0 === s ? void 0 : s.routeMatch) || void 0 === n ? void 0 : n.route.chunk,
							c = Object(p.Q)(o);
						return Object(i.i)(() => t(O()), {
							name: "getFocusedVerticalsRequested",
							page: r,
							isLoggedIn: c
						})
					}
					if ("server" === c) return t(_({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/components/EmptyProfile/EmptyListing.m.less": function(t, e, r) {
			t.exports = {
				PrimaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				primaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				BackgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				backgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				Wrapper: "_1aYPXfy_h5ZUIu0k_69eX1",
				wrapper: "_1aYPXfy_h5ZUIu0k_69eX1"
			}
		},
		"./src/reddit/components/EmptyProfile/forbidden.m.less": function(t, e, r) {
			t.exports = {
				container: "_1RecBWgyCRDIwbumVv_1eu",
				hideIcon: "_2ahl77ziD4jsIXBLc18_Hc",
				title: "_1MRoVpNql4popp175MVxl6",
				subtitle: "_3HccUrmIe42WfjCGgNekWK",
				buttons: "_1BrhZvjQw9AWs6w5xlkj2F"
			}
		},
		"./src/reddit/components/EmptyProfile/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "b", (function() {
				return h
			})), r.d(e, "c", (function() {
				return p
			})), r.d(e, "d", (function() {
				return f
			})), r.d(e, "a", (function() {
				return x
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/components/PostList/Placeholder.tsx"),
				d = r("./src/reddit/constants/postLayout.ts"),
				l = r("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				u = r.n(l);
			var m = t => {
				let {
					children: e,
					className: r
				} = t;
				return i.a.createElement("div", {
					className: Object(c.a)(u.a.Wrapper, r)
				}, i.a.createElement(a.a, {
					className: u.a.BackgroundPlaceholder,
					isLoading: !1,
					layout: d.g.Classic
				}), i.a.createElement("div", {
					className: u.a.PrimaryText
				}, e))
			};
			var h = t => {
				let {
					className: e,
					profileName: r,
					timeSort: n = o.ic.ALL
				} = t;
				return i.a.createElement(m, {
					className: e
				}, n === o.ic.ALL ? s.fbt._("hmm... {profileName} hasn't commented on anything", [s.fbt._param("profileName", `u/${r}`)], {
					hk: "1MHn3t"
				}) : s.fbt._("hmm... {profileName} hasn't commented recently", [s.fbt._param("profileName", `u/${r}`)], {
					hk: "qN3uL"
				}))
			};
			var p = t => {
				let {
					className: e,
					profileName: r,
					timeSort: n = o.ic.ALL
				} = t;
				return i.a.createElement(m, {
					className: e
				}, n === o.ic.ALL ? s.fbt._("hmm... {profileName} hasn't posted anything", [s.fbt._param("profileName", `u/${r}`)], {
					hk: "28vBEd"
				}) : s.fbt._("hmm... {profileName} hasn't posted recently", [s.fbt._param("profileName", `u/${r}`)], {
					hk: "38GhqN"
				}))
			};
			var f = t => {
					let {
						className: e,
						text: r
					} = t;
					return i.a.createElement(m, {
						className: e
					}, r)
				},
				g = r("./src/reddit/icons/svgs/Hide/index.tsx"),
				b = r("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				v = r.n(b);
			const {
				fbt: _
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var x = () => i.a.createElement("div", {
				className: v.a.container
			}, i.a.createElement(g.a, {
				className: v.a.hideIcon
			}), i.a.createElement("h3", {
				className: v.a.title
			}, _._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), i.a.createElement("p", {
				className: v.a.subtitle
			}, _._("You can only look at your own saved posts and comments", null, {
				hk: "3pWGtF"
			})))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(t, e, r) {
			"use strict";
			var s = r("./src/reddit/components/PostList/index.tsx"),
				n = r("./src/reddit/connectors/PostList/index.ts");
			e.a = Object(n.a)(s.a)
		},
		"./src/reddit/connectors/PostList/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "c", (function() {
				return E
			})), r.d(e, "d", (function() {
				return j
			})), r.d(e, "b", (function() {
				return P
			}));
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/objectSelector/index.ts"),
				o = r("./src/reddit/actions/ads/index.ts"),
				c = r("./src/reddit/actions/focusedVerticals/index.ts"),
				a = r("./src/reddit/actions/gold/tooltips.ts"),
				d = r("./src/reddit/actions/post.ts"),
				l = r("./src/reddit/actions/postList.ts"),
				u = r("./src/reddit/actions/survey/index.ts"),
				m = r("./src/reddit/components/TrackingHelper/index.tsx"),
				h = r("./src/reddit/contexts/PageLayer/index.tsx"),
				p = r("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				f = r("./src/reddit/helpers/trackers/post.ts"),
				g = r("./src/reddit/components/PostList/Placeholder.tsx"),
				b = r("./src/reddit/featureFlags/index.ts"),
				v = r("./src/reddit/selectors/experiments/survey.ts"),
				_ = r("./src/reddit/selectors/listings.ts"),
				x = r("./src/reddit/selectors/posts.ts"),
				y = r("./src/reddit/selectors/subreddit.ts"),
				O = r("./src/reddit/selectors/tracking.ts");

			function E() {
				return Object(h.u)({
					currentProfileName: h.i,
					isCommentPermalink: h.w,
					isCommentsPage: h.x,
					isFrontpage: h.A,
					isProfilePostListing: h.L,
					isTopicPage: h.R,
					pageLayer: t => t
				})
			}
			const I = E(),
				j = {
					apiError: _.c,
					apiPending: _.d,
					measureScrollFPS: b.d.measureScrollFPS,
					layout: (t, e) => e.forcedLayout || Object(h.S)(t, e),
					loadMore: _.g,
					postsById: x.T,
					postIds: Object(i.a)((t, e) => {
						let {
							listingKey: r,
							listingName: s,
							inSubredditOrProfile: n
						} = e;
						return Object(x.D)(t, r, s, n)
					}),
					subredditsById: y.bb,
					viewportDataLoaded: O.a,
					pageReferrer: h.V,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: v.e
				},
				L = Object(n.c)(j),
				P = t => ({
					onBottomViewed: (e, r) => t(l.c(e, r)),
					onFirstPostChanged: e => t(Object(a.a)(e)),
					adBrandSafetyStatusReceived: e => {
						t(o.d({
							isViewSafe: e
						}))
					},
					openPost: e => {
						e.isFrontpage && t(Object(c.a)({
							lastLoadedEnv: "server"
						})), t(d.L(e))
					},
					fireAdPixelsOfType: (e, r) => {
						t(d.z(e, r))
					},
					trackOnPostEnteredViewport: (e, r, s, n) => {
						t(d.O(e, s, n))
					},
					trackOnPostExitedViewport: (e, r, s, n) => {
						t(d.P(e, s, n))
					},
					showModalOnScroll: () => t(d.cb()),
					surveyTriggerScrollCounted: () => t(Object(u.l)())
				}),
				S = t => Object(p.b)({
					...t
				}),
				N = (t, e, r, s) => {
					const {
						listingKey: n,
						hostPostData: i,
						listingBelowVariant: o
					} = s;
					return Object(f.k)(t, e, "post", n, i, o, void 0)
				},
				w = Object(s.b)(L, P, (t, e, r) => ({
					...t,
					...e,
					...r,
					postComponentForLayout: S,
					postClickEventFactory: N
				}));
			e.a = t => Object(m.c)(I(w(t)))
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(t, e, r) {
			t.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(t, e, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = r.n(o);
			e.a = t => {
				let {
					center: e,
					className: r,
					sizePx: s = 10
				} = t;
				return n.a.createElement("div", {
					className: Object(i.a)(c.a.loadingIcon, r, {
						[c.a.mCentered]: e
					}),
					style: {
						"--sizePx": `${s}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return n
			}));
			var s = r("./src/reddit/models/WhitelistStatus/index.ts");
			const n = (t, e) => {
				const r = t.some(t => t.isNSFW),
					n = e.some(t => t.wls === s.b.NO_ADS);
				return !r && !n
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(t, e, r) {
			t.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return o
			})), r.d(e, "b", (function() {
				return c
			}));
			var s = r("./src/lib/classNames/index.ts"),
				n = r("./src/reddit/helpers/styles/mixins/loading.m.less"),
				i = r.n(n);
			const o = t => {
					let {
						isLoading: e
					} = t;
					return Object(s.a)(i.a.loadingBackground, {
						[i.a["m-loading"]]: e
					})
				},
				c = t => Object(s.a)(i.a.loadingBar, o(t))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(t, e, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			e.a = t => n.a.createElement("svg", {
				className: t.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(t, e, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			e.a = t => n.a.createElement("svg", {
				className: t.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), n.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(t, e, r) {
			t.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(t, e, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				a = r.n(c);

			function d() {
				return (d = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var r = arguments[e];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s])
					}
					return t
				}).apply(this, arguments)
			}
			e.a = Object(i.a)(t => {
				const {
					className: e,
					children: r,
					heightLeft: s,
					widthLeft: i,
					gutter: c,
					...l
				} = t;
				return n.a.createElement("div", d({
					className: Object(o.a)(a.a.expandRightContainer, e)
				}, l), n.a.createElement("div", {
					className: a.a.left,
					style: {
						flexBasis: i,
						height: s,
						marginRight: c
					}
				}, Array.isArray(r) && r[0]), n.a.createElement("div", {
					className: a.a.right
				}, Array.isArray(r) && r[1]))
			}, 2)
		},
		"./src/reddit/pages/PostSetPage/index.m.less": function(t, e, r) {
			t.exports = {
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
		"./src/reddit/pages/PostSetPage/index.tsx": function(t, e, r) {
			"use strict";
			r.r(e);
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/constants/index.ts"),
				c = r("./src/reddit/components/EmptyProfile/index.ts"),
				a = r("./src/reddit/components/ListingPostList/index.tsx"),
				d = r("./src/reddit/components/ProfileSidebar/index.tsx"),
				l = r("./src/reddit/controls/Button/index.tsx"),
				u = r("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				m = r("./src/reddit/layout/page/Listing/index.tsx"),
				h = r("./src/reddit/models/Post/index.ts"),
				p = r("./src/reddit/models/User/index.ts"),
				f = r("./src/reddit/selectors/experiments/postSets.ts"),
				g = r("./src/reddit/selectors/posts.ts"),
				b = r("./src/reddit/selectors/user.ts");
			var v = r("./src/reddit/pages/PostSetPage/index.m.less"),
				_ = r.n(v);
			const {
				fbt: x
			} = r("./node_modules/fbt/lib/FbtPublic.js"), y = t => {
				let {
					numPostsInPostSet: e
				} = t;
				return n.a.createElement("div", {
					className: _.a.shareFooter
				}, e >= 5 ? x._("You’ve shared your post to the maximum {maximum number of posts} communities.", [x._param("maximum number of posts", 5)], {
					hk: "3MFJ59"
				}) : n.a.createElement("div", {
					className: _.a.sharePostFooter
				}, n.a.createElement("span", {
					className: _.a.shareTitle
				}, x._("Other communities might like this too", null, {
					hk: "3p57xL"
				})), n.a.createElement("span", null, x._("Share your post with up to {maximum number of posts} communities—You can even change your title for each one.", [x._param("maximum number of posts", 5)], {
					hk: "4yTsEv"
				})), n.a.createElement(l.t, {
					className: _.a.shareButton,
					text: x._("Share post", null, {
						hk: "3GVQCW"
					})
				})))
			};
			e.default = t => {
				const {
					profileName: e,
					partialPostSetId: r
				} = t.match.params, l = Object(h.v)(r), v = Object(u.b)(e, l), O = l.toLowerCase(), E = Object(i.e)(t => Object(g.Q)(t, {
					listingKey: v
				})), I = Object(i.e)(b.k), [j, L] = Object(s.useState)(!1);
				Object(s.useEffect)(() => {
					if (I) {
						const t = Object(p.e)(I);
						L(e === t)
					}
				}, [e, I]);
				const P = Object(i.e)(t => Object(f.b)(t, j));
				return n.a.createElement(m.a, {
					disableFullscreen: !0,
					fitPageToContent: !0,
					content: n.a.createElement("div", {
						className: _.a.postSetListing
					}, n.a.createElement("div", {
						className: _.a.title
					}, x._("Shared to", null, {
						hk: "2yMnz9"
					})), n.a.createElement(a.a, {
						className: _.a.postList,
						listingKey: v,
						listingName: O,
						postClassName: _.a.post,
						noPostsComponent: () => n.a.createElement(c.c, {
							profileName: e,
							timeSort: o.ic.ALL
						}),
						shouldShowInsightsButton: j
					}), P && n.a.createElement(y, {
						numPostsInPostSet: E.length
					})),
					sidebar: n.a.createElement(d.a, {
						profileName: e
					})
				})
			}
		},
		"./src/reddit/selectors/experiments/postSets.ts": function(t, e, r) {
			"use strict";
			r.d(e, "b", (function() {
				return i
			})), r.d(e, "a", (function() {
				return o
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");
			const i = (t, e) => {
					return Object(n.c)(t, {
						experimentEligibilitySelector: () => e,
						experimentName: s.qc
					}) === s.yd
				},
				o = t => {
					return Object(n.c)(t, {
						experimentEligibilitySelector: n.a,
						experimentName: s.pc
					}) === s.yd
				}
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(t, e, r) {
			"use strict";
			r.d(e, "i", (function() {
				return a
			})), r.d(e, "h", (function() {
				return d
			})), r.d(e, "a", (function() {
				return l
			})), r.d(e, "k", (function() {
				return m
			})), r.d(e, "j", (function() {
				return h
			})), r.d(e, "b", (function() {
				return g
			})), r.d(e, "e", (function() {
				return b
			})), r.d(e, "f", (function() {
				return v
			})), r.d(e, "c", (function() {
				return _
			})), r.d(e, "g", (function() {
				return x
			})), r.d(e, "d", (function() {
				return y
			}));
			var s = r("./src/lib/objectSelector/index.ts"),
				n = r("./src/reddit/featureFlags/index.ts"),
				i = r("./src/reddit/selectors/posts.ts"),
				o = r("./src/reddit/selectors/subreddit.ts"),
				c = r("./src/reddit/selectors/user.ts");
			const a = (t, e) => {
					const r = t.focusedVerticals.interactedSubredditIds && t.focusedVerticals.interactedSubredditIds[e];
					if (r) {
						const e = Object(o.U)(t, {
							subredditId: r
						});
						return e && e.displayText || ""
					}
					return ""
				},
				d = (t, e) => t.focusedVerticals.interactedSubredditIds && t.focusedVerticals.interactedSubredditIds[e] || "",
				l = t => t.focusedVerticals.components.dismissed,
				u = [],
				m = Object(s.a)((t, e) => {
					const r = h(t, e);
					if (!r) return u;
					const s = Object(o.Y)(t, {
						subredditName: r.name
					});
					return s && s.postIds && s.postIds.length ? s.postIds : u
				}),
				h = (t, e) => {
					const r = t.focusedVerticals.recommendedSubredditIds && t.focusedVerticals.recommendedSubredditIds[e];
					return r ? Object(o.U)(t, {
						subredditId: r
					}) : null
				},
				p = (t, e, r, s, n) => {
					const o = n.find(t => t <= e) || -1,
						c = n.find(t => t > e) || 1 / 0;
					return e !== c && e !== o && (!(o + r > e) && (!(e + r > c) && !((t, e, r) => {
						const s = r[e - 1],
							n = r[e],
							o = n && Object(i.G)(t, {
								postId: s
							}) || null,
							c = n && Object(i.G)(t, {
								postId: n
							}) || null;
						return o && o.isSponsored || c && c.isSponsored
					})(t, e, s)))
				},
				f = [3],
				g = Object(s.a)((t, e) => {
					let {
						existingDUPositions: r,
						listingProps: s
					} = e;
					const n = r.slice().sort();
					let o = -1;
					const c = Object(i.z)(t, {
							listingKey: s.listingKey
						}),
						a = [];
					return f.forEach(e => {
						let r = o + e;
						if (!(r >= c.length)) {
							for (; r < c.length && !p(t, r, e, c, n);) r += 1;
							r < c.length && (a.push(r), o = r)
						}
					}), a
				}),
				b = t => {
					return t.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				v = t => {
					return t.focusedVerticals.api.error.focusedVerticalGqlError
				},
				_ = t => t.focusedVerticals.category,
				x = t => t.focusedVerticals.lastLoadedEnv,
				y = t => {
					const e = Object(c.P)(t),
						r = n.d.geoSubredditRecommendationDULoggedIn(t),
						s = n.d.geoSubredditRecommendationDULoggedOut(t);
					return e && r || !e && s
				}
		},
		"./src/reddit/selectors/tracking.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return s
			}));
			const s = (t, e) => {
				let {
					listingKey: r
				} = e;
				return t.tracking.viewportDataLoaded[r]
			}
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(t) {
			t.exports = JSON.parse('{"id":"c10a566d5f55"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostSetPage.bd51ea6b127331300eda.js.map