// https://www.redditstatic.com/desktop2x/Topic.e3fb1202eb302c830c41.js
// Retrieved at 7/11/2022, 3:10:11 PM by Reddit Dataminer v1.0.0
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
								c = this._rootContainsTarget(i),
								d = n.entry,
								l = t && c && this._computeTargetAndRootIntersection(i, s),
								u = n.entry = new r({
									time: e.performance && performance.now && performance.now(),
									target: i,
									boundingClientRect: o,
									rootBounds: s,
									intersectionRect: l
								});
							d ? t && c ? this._hasCrossedThreshold(d, u) && this._queuedEntries.push(u) : d && d.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, n.prototype._computeTargetAndRootIntersection = function(s, r) {
						if ("none" != e.getComputedStyle(s).display) {
							for (var n, i, o, c, l, u, m, p, h = a(s), b = d(s), g = !1; !g;) {
								var f = null,
									_ = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == _.display) return;
								if (b == this.root || b == t ? (g = !0, f = r) : b != t.body && b != t.documentElement && "visible" != _.overflow && (f = a(b)), f && (n = f, i = h, o = void 0, c = void 0, l = void 0, u = void 0, m = void 0, p = void 0, o = Math.max(n.top, i.top), c = Math.min(n.bottom, i.bottom), l = Math.max(n.left, i.left), u = Math.min(n.right, i.right), p = c - o, !(h = (m = u - l) >= 0 && p >= 0 && {
										top: o,
										bottom: c,
										left: l,
										right: u,
										width: m,
										height: p
									}))) break;
								b = d(b)
							}
							return h
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
						return !this.root || c(t, this.root)
					}, n.prototype._rootContainsTarget = function(e) {
						return c(this.root || t, e)
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

				function c(e, t) {
					for (var s = t; s;) {
						if (s == e) return !0;
						s = d(s)
					}
					return !1
				}

				function d(e) {
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
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > o) return [];
				var s = a,
					d = c(e, a);
				t = n(t), e -= a;
				for (var l = r(d, t); ++s < e;) t(s);
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
				for (var a = Object.prototype.hasOwnProperty.bind(t), c = 0; c < i.length; c++) {
					var d = i[c];
					if (!a(d)) return !1;
					var l = e[d],
						u = t[d];
					if (!1 === (n = s ? s.call(r, l, u, d) : void 0) || void 0 === n && l !== u) return !1
				}
				return !0
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "b", (function() {
				return C
			}));
			var r, n = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/performanceTimings/index.tsx"),
				o = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(r || (r = {}));
			var d, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var m = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = s("./src/reddit/selectors/platform.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(n.a)(o.g),
				g = Object(n.a)(o.e),
				f = Object(n.a)(o.h),
				_ = Object(n.a)(o.c),
				x = Object(n.a)(o.f),
				v = Object(n.a)(o.j),
				y = Object(n.a)(o.i),
				E = () => async (e, t, s) => {
					let {
						gqlContext: n
					} = s;
					const i = t(),
						o = Object(m.e)(i),
						d = Object(m.d)(i),
						p = Object(h.P)(i);
					if (o || !d) return;
					e(f());
					let x = !1;
					try {
						const t = p ? r.LoggedInGeo : r.LoggedOutGeo,
							s = await ((e, t, s) => Object(a.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(n(), t);
						if (s.ok && s.body) {
							const {
								data: t
							} = s.body;
							if (T(t)) {
								if (S(t)) {
									e(_({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), x = !0
								} else if (w(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: n,
											category: i
										} = s.focusRecommendations[0],
										o = [r, n],
										a = Object(u.d)(o),
										c = Object(l.b)(o),
										d = Object(u.c)(r),
										m = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [n.id],
											subreddits: a,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: i,
											lastLoadedEnv: "client"
										};
									e(b(m)), x = !0
								}
							} else x = !1
						}
					} catch (v) {
						x = !1
					}
					x || e(g({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, T = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, S = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, w = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						r = t && t.type;
					return !!(s && !S(e) && r === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, C = () => async (e, t, s) => {
					var r, n;
					const o = t(),
						a = Object(m.g)(o);
					if (Object(m.f)(o) || null === a || "client" === a) {
						const s = null === (n = null === (r = Object(p.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === n ? void 0 : n.route.chunk,
							a = Object(h.Q)(o);
						return Object(i.i)(() => e(E()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(x({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
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
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/contexts/Tooltip.ts"),
				f = s("./src/reddit/controls/Dropdown/index.tsx"),
				_ = s("./src/reddit/controls/Dropdown/Row.tsx"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				v = s("./src/reddit/selectors/telemetry.ts"),
				y = s("./src/reddit/selectors/tooltip.ts"),
				E = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				T = s.n(E);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const w = "view--layout--FUE",
				C = "LayoutSwitch--picker",
				k = Object(c.a)(f.a),
				O = {
					[h.d.Card]: function(e) {
						return i.a.createElement(x.a, S({}, e, {
							name: "view_card"
						}))
					},
					[h.d.Classic]: function(e) {
						return i.a.createElement(x.a, S({}, e, {
							name: "view_classic"
						}))
					},
					[h.d.Compact]: function(e) {
						return i.a.createElement(x.a, S({}, e, {
							name: "view_compact"
						}))
					}
				},
				N = {
					[h.d.Card]: () => r.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[h.d.Classic]: () => r.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[h.d.Compact]: () => r.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[h.d.Search]: () => r.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				j = Object(b.u)(),
				L = Object(a.c)({
					dropdownIsOpen: Object(y.b)(C),
					postLayout: b.S,
					redditStyle: b.D
				}),
				I = Object(o.b)(L, e => ({
					onListingLayoutChange: (t, s) => e(Object(u.y)(t, s)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: C
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
							screen: Object(v.Z)(t),
							subreddit: Object(v.hb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: r,
							postLayout: n
						} = this.props, o = s || h.e[n], a = e === o, c = O[e], l = N[e];
						return i.a.createElement(_.b, S({}, t, {
							className: Object(d.a)(T.a.LayoutItem, {
								[T.a.selected]: a,
								[T.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: l(),
							iconWrapperClassName: T.a.LayoutItemIconWrapper,
							isSelected: a,
							noHover: a,
							onClick: a ? void 0 : () => this.changeLayout(e),
							textClassName: T.a.LayoutItemTextClassName
						}), i.a.createElement(c, {
							className: T.a.LayoutIcon,
							onClick: a ? void 0 : r,
							isFilled: a && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return i.a.createElement(k, S({}, e, {
							className: T.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: T.a.DropdownRow,
							rowIconClassName: T.a.DropdownRowIcon,
							rowSelectedClassName: T.a.DropdownRowSelected,
							tooltipId: C
						}), this.renderItem(h.d.Card), this.renderItem(h.d.Classic), this.renderItem(h.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: r
					} = this.props, n = t || h.e[r];
					return i.a.createElement("div", {
						className: Object(d.a)(T.a.Container, e),
						id: w
					}, i.a.createElement("div", {
						className: T.a.DropdownContainer,
						onClick: s
					}, this.renderItem(n, {
						id: C,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), i.a.createElement(g.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = j(I(Object(p.c)(Object(l.a)(P))))
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
				copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				CountryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR",
				countryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = s("./src/reddit/constants/experiments.ts"),
				m = s("./src/reddit/constants/location.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				b = s("./src/reddit/helpers/trackers/navigation.ts"),
				g = s("./src/reddit/selectors/experiments/countrySites.ts"),
				f = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				_ = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				x = s("./src/reddit/selectors/meta.ts"),
				v = s("./src/reddit/components/SidebarFooter/index.m.less"),
				y = s.n(v);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), T = c.a.a("Link", y.a), S = Object(o.c)({
				countryCode: x.b,
				d2xPdpSideRailRecsVariant: f.a,
				isCountrySitesEnabled: g.b,
				isD2xPdpSideRailRecsEnabled: f.b,
				isNavbarLikeMwebEnabled: _.a
			}), w = Object(i.b)(S), C = Object(p.u)({
				isFrontpage: p.A,
				isCountrySitePage: p.y
			}), k = e => {
				let {
					countryCode: t,
					reredditContent: s
				} = e;
				return n.a.createElement("div", {
					className: y.a.GreyRereddit
				}, s, n.a.createElement(T, {
					href: "https://www.reddithelp.com"
				}, E._("help", null, {
					hk: "4lyYaD"
				})), n.a.createElement(T, {
					href: "https://www.reddit.com/coins"
				}, E._("Reddit coins", null, {
					hk: "32iMaN"
				})), n.a.createElement(T, {
					href: "https://www.reddit.com/premium"
				}, E._("Reddit premium", null, {
					hk: "RuO3A"
				})), !!m.c[t] && n.a.createElement(n.a.Fragment, null, n.a.createElement(T, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, E._("Impressum", null, {
					hk: "4cKXSI"
				})), n.a.createElement(T, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, E._("Transparency report", null, {
					hk: "3CgBdG"
				})), n.a.createElement(T, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: y.a.NoneCapitalizeLink
				}, E._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), n.a.createElement(T, {
					href: "https://www.redditinc.com/"
				}, E._("about", null, {
					hk: "1sqJKs"
				})), n.a.createElement(T, {
					href: "https://www.redditinc.com/careers"
				}, E._("careers", null, {
					hk: "26ABvc"
				})), n.a.createElement(T, {
					href: "https://www.redditinc.com/press"
				}, E._("press", null, {
					hk: "2Qmgdz"
				})), n.a.createElement(T, {
					href: "https://www.redditinc.com/advertising"
				}, E._("advertise", null, {
					hk: "Mt40U"
				})), n.a.createElement(T, {
					href: "http://www.redditblog.com/"
				}, E._("blog", null, {
					hk: "46IQJw"
				})), n.a.createElement(T, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, E._("Terms", null, {
					hk: "4qRzfE"
				})), n.a.createElement(T, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, E._("Content policy", null, {
					hk: "1DyxZS"
				})), n.a.createElement(T, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, E._("Privacy policy", null, {
					hk: "10K04G"
				})), n.a.createElement(T, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, E._("Mod policy", null, {
					hk: "2gYc2T"
				})), n.a.createElement("div", {
					className: y.a.Copyright
				}, E._("Reddit Inc © {year}. All rights reserved", [E._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = C(w(Object(d.c)(e => {
				const t = Object(i.f)().getState(),
					s = Object(g.a)(t, Object(a.c)());
				if (e.isNavbarLikeMwebEnabled) return e.isFrontpage ? n.a.createElement(l.a, {
					className: y.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, n.a.createElement("div", {
					className: y.a.LinkContainer
				}, n.a.createElement("div", {
					className: y.a.Column
				}, n.a.createElement(T, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, E._("User Agreement", null, {
					hk: "2RA6JL"
				})), n.a.createElement(T, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, E._("Privacy policy", null, {
					hk: "10K04G"
				}))), n.a.createElement("div", {
					className: y.a.Column
				}, n.a.createElement(T, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, E._("Content policy", null, {
					hk: "1DyxZS"
				})), n.a.createElement(T, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, E._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), n.a.createElement("div", {
					className: y.a.Copyright
				}, E._("© {year} Reddit, Inc. All rights reserved.", [E._param("year", (new Date).getFullYear().toString())], {
					hk: "sR7zP"
				}))) : null;
				const r = t => {
					const r = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return s.includes(t) || "en" === t ? n.a.createElement(T, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(b.a)(t))
					}, r[t]) : null
				};
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.Kc.GreyRereddit ? e.reredditButtons : [];
					return n.a.createElement(k, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				return n.a.createElement(l.a, {
					className: y.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, n.a.createElement("div", {
					className: y.a.LinkContainer
				}, n.a.createElement("div", {
					className: y.a.Column
				}, n.a.createElement(T, {
					href: "https://www.reddithelp.com"
				}, E._("help", null, {
					hk: "4lyYaD"
				})), n.a.createElement(T, {
					href: "https://www.reddit.com/coins"
				}, E._("Reddit coins", null, {
					hk: "32iMaN"
				})), n.a.createElement(T, {
					href: "https://www.reddit.com/premium"
				}, E._("Reddit premium", null, {
					hk: "RuO3A"
				})), e.isFrontpage && n.a.createElement(n.a.Fragment, null, n.a.createElement(T, {
					href: "https://www.reddit.com/subreddits/a-1/"
				}, E._("Communities", null, {
					hk: "3CJu37"
				})), n.a.createElement(T, {
					href: `https://www.reddit.com${Object(h.a)()}`
				}, E._("Rereddit", null, {
					hk: "1z3k7C"
				})), n.a.createElement(T, {
					href: "https://www.reddit.com/topics/a-1/"
				}, E._("Topics", null, {
					hk: "349RFt"
				}))), !!m.c[e.countryCode] && n.a.createElement(n.a.Fragment, null, n.a.createElement(T, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, E._("Impressum", null, {
					hk: "4cKXSI"
				})), n.a.createElement(T, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, E._("Transparency report", null, {
					hk: "3CgBdG"
				})), n.a.createElement(T, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: y.a.NoneCapitalizeLink
				}, E._("Report NetzDG Content", null, {
					hk: "1nszCF"
				})))), n.a.createElement("div", {
					className: y.a.Column
				}, n.a.createElement(T, {
					href: "https://www.redditinc.com/"
				}, E._("about", null, {
					hk: "1sqJKs"
				})), n.a.createElement(T, {
					href: "https://www.redditinc.com/careers"
				}, E._("careers", null, {
					hk: "26ABvc"
				})), n.a.createElement(T, {
					href: "https://www.redditinc.com/press"
				}, E._("press", null, {
					hk: "2Qmgdz"
				})), n.a.createElement(T, {
					href: "https://www.redditinc.com/advertising"
				}, E._("advertise", null, {
					hk: "Mt40U"
				})), n.a.createElement(T, {
					href: "http://www.redditblog.com/"
				}, E._("blog", null, {
					hk: "46IQJw"
				})), n.a.createElement(T, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, E._("Terms", null, {
					hk: "4qRzfE"
				})), n.a.createElement(T, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, E._("Content policy", null, {
					hk: "1DyxZS"
				})), n.a.createElement(T, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, E._("Privacy policy", null, {
					hk: "10K04G"
				})), n.a.createElement(T, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, E._("Mod policy", null, {
					hk: "2gYc2T"
				})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && n.a.createElement("div", {
					className: y.a.CountryLinkContainer
				}, n.a.createElement("div", {
					className: y.a.Column
				}, r("en"), r("fr"), r("it")), n.a.createElement("div", {
					className: y.a.Column
				}, r("de"), r("es"), r("pt"))), n.a.createElement("div", {
					className: y.a.Copyright
				}, E._("Reddit Inc © {year}. All rights reserved", [E._param("year", (new Date).getFullYear().toString())], {
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
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/constants/elementIds.ts"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/components/BackToTop/index.m.less"),
				m = s.n(u);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				if (e) {
					const e = document.getElementById(d.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var b = e => {
					let {
						className: t,
						isOverlay: s,
						style: n
					} = e;
					return a.a.createElement("div", {
						className: Object(r.a)(t, m.a.container),
						style: n
					}, a.a.createElement(l.l, {
						className: m.a.button,
						onClick: () => h(s)
					}, p._("Back to Top", null, {
						hk: "YjBtV"
					})))
				},
				g = s("./src/reddit/components/SidebarFooter/index.tsx"),
				f = s("./src/reddit/constants/componentSizes.ts"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				v = s.n(x),
				y = s("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const T = c.e[1] + 24,
				S = f.f + 8,
				w = S + 152 + 16,
				C = w + T + 8,
				k = y.a.div("Container", v.a),
				O = y.a.wrapped(e => {
					let {
						className: t,
						isOverlay: s,
						...r
					} = e;
					return a.a.createElement(b, E({
						className: t,
						isOverlay: s,
						style: {
							top: `calc(100vh - ${s?S:8}px)`
						}
					}, r))
				}, "BackToTop", v.a),
				N = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: n,
						isSticky: i,
						shouldStickToBottom: o
					} = e;
					return a.a.createElement("div", {
						className: Object(r.a)(s, {
							[v.a.BottomStickyStyles]: o,
							[v.a.StickyStyles]: !o && i && !n,
							[v.a.StickyStylesFakeOverlay]: !o && !!n
						})
					}, t)
				};
			class j extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > C,
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
					}, this.handleResize = i()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.K), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							recommendationsComponent: c,
							reredditButtons: d
						}
					} = this, l = this.state.isAdSticky && !(!t && !r), u = this.state.isBottomSticky;
					return a.a.createElement(k, {
						className: n,
						innerRef: this.setWrapperRef
					}, a.a.createElement(N, {
						isFakeOverlay: s,
						isSticky: l,
						shouldStickToBottom: u
					}, t, r, c, !i && a.a.createElement(g.a, {
						reredditButtons: d
					})), !c && !this.props.hideBackToTop && a.a.createElement(O, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const L = Object(_.u)();
			t.a = L(j)
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
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/makeAsync.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/loadWithRetries/index.ts"),
				p = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				h = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				b = s("./src/reddit/icons/svgs/Close/index.tsx"),
				g = s("./src/reddit/selectors/moderatorPermissions.ts"),
				f = s("./src/reddit/selectors/structuredStyles.ts"),
				_ = s("./src/reddit/selectors/userPrefs.ts"),
				x = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				v = s.n(x);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), E = u.a.div("BladeContainer", v.a), T = u.a.wrapped(b.a, "CloseIcon", v.a), S = u.a.div("LoadingTitleContainer", v.a), w = u.a.div("LoadingNavContainer", v.a), C = u.a.div("ShortLoadingNav", v.a), k = u.a.wrapped(h.a, "ThemedChevron", v.a), O = e => {
				let {
					...t
				} = e;
				return o.a.createElement(E, null, o.a.createElement(T, null), o.a.createElement(p.k, null, o.a.createElement(p.p, null, y._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), o.a.createElement(p.o, null, o.a.createElement(S, null, o.a.createElement("div", {
					className: Object(l.a)(v.a.LoadingTitle, t.isLoading && v.a.loading)
				})), o.a.createElement(w, null, o.a.createElement("div", {
					className: Object(l.a)(v.a.LoadingNav, t.isLoading && v.a.loading)
				}), o.a.createElement(k, null)), o.a.createElement(w, null, o.a.createElement(C, null), o.a.createElement(k, null)), o.a.createElement(w, null, o.a.createElement("div", {
					className: Object(l.a)(v.a.LoadingNav, t.isLoading && v.a.loading)
				}), o.a.createElement(k, null)), o.a.createElement(w, null, o.a.createElement(C, null), o.a.createElement(k, null)), o.a.createElement(w, null, o.a.createElement("div", {
					className: Object(l.a)(v.a.LoadingNav, t.isLoading && v.a.loading)
				}), o.a.createElement(k, null)))))
			}, N = Object(d.a)({
				getComponent: () => Object(m.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("StructuredStyles")]).then(s.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => o.a.createElement(O, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => o.a.createElement(O, {
					gradientType: "posts",
					isLoading: !0
				})
			}), j = Object(c.c)({
				isEditing: f.i,
				isSubscriptionsPinned: _.b,
				moderatorPermissions: g.n
			});
			t.a = Object(a.b)(j)(e => {
				const t = e.moderatorPermissions && n()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? o.a.createElement("div", {
					className: Object(l.a)(v.a.Container, e.isSubscriptionsPinned && v.a.isSubscriptionPinned)
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
				return c
			})), s.d(t, "o", (function() {
				return d
			})), s.d(t, "m", (function() {
				return l
			})), s.d(t, "l", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "j", (function() {
				return y
			}));
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				i = s.n(n);
			const o = r.a.section("FormPage", i.a),
				a = r.a.h1("HomePageTitle", i.a),
				c = r.a.button("HomePageBreadcrumb", i.a),
				d = r.a.div("HomePageGroup", i.a),
				l = r.a.h1("FormPageTitle", i.a),
				u = r.a.div("FormPageSection", i.a),
				m = r.a.div("FormGroup", i.a),
				p = r.a.h2("FormGroupTitle", i.a),
				h = r.a.div("FormElement", i.a),
				b = r.a.div("FormGroupDescription", i.a),
				g = r.a.div("FormItem", i.a),
				f = r.a.h3("FormElementTitle", i.a),
				_ = r.a.div("FormElementDescription", i.a),
				x = r.a.div("FormElementError", i.a),
				v = r.a.div("FormElementSubGroup", i.a),
				y = r.a.li("FormListItem", i.a)
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
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				m = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				p = s("./node_modules/fbt/lib/FbtPublic.js"),
				h = s("./node_modules/react-redux/es/index.js"),
				b = s("./node_modules/reselect/es/index.js"),
				g = s("./src/lib/prettyPrintNumber/index.ts"),
				f = s("./src/reddit/components/SubredditIcon/index.tsx"),
				_ = s("./src/reddit/components/SubscribeButton/index.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/controls/InternalLink/index.tsx"),
				y = s("./src/reddit/helpers/name/index.ts"),
				E = s("./src/reddit/helpers/widgets/index.tsx"),
				T = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				w = s("./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less"),
				C = s.n(w);
			const k = Object(b.c)({
				isLoggedIn: S.Q,
				subreddit: T.U,
				subredditAboutInfo: T.v
			});
			class O extends n.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditClick = () => {
						const {
							discoveryUnit: e,
							sendEvent: t,
							subreddit: s,
							subredditAboutInfo: r
						} = this.props;
						if (!s) return;
						const n = Object(E.c)(s, r);
						t(Object(u.n)(e, n))
					}
				}
				render() {
					const {
						className: e,
						isLoggedIn: t,
						subreddit: s
					} = this.props;
					return s ? n.a.createElement("div", {
						className: Object(o.a)(C.a.Container, e)
					}, n.a.createElement(f.b, {
						className: C.a.Icon,
						subredditOrProfile: s
					}), n.a.createElement("div", {
						className: C.a.Text
					}, n.a.createElement(v.default, {
						className: C.a.Link,
						onMouseDown: this.trackSubredditClick,
						to: s.url
					}, n.a.createElement("div", {
						className: C.a.Name
					}, Object(y.c)(s.displayText || s.name)), n.a.createElement("div", {
						className: C.a.Members
					}, p.fbt._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [p.fbt._plural(s.subscribers, "subscribers count", Object(g.b)(s.subscribers))], {
						hk: "48BXj1"
					})))), n.a.createElement(_.a, {
						border: !1,
						className: Object(o.a)(C.a.SubscribeButton, {
							[C.a.hidden]: !t
						}),
						identifier: {
							name: s.name,
							type: x.a.SUBREDDIT
						},
						small: !0
					})) : null
				}
			}
			var N = Object(h.b)(k)(Object(d.c)(O)),
				j = s("./src/reddit/helpers/styles/mixins/loading.ts");
			var L = e => {
					const {
						className: t
					} = e, s = Object(j.b)({
						isLoading: !0
					});
					return n.a.createElement("div", {
						className: Object(o.a)(C.a.Container, t)
					}, n.a.createElement("div", {
						className: Object(o.a)(C.a.Icon, C.a.placeholder, s)
					}), n.a.createElement("div", {
						className: C.a.Text
					}, n.a.createElement("div", {
						className: C.a.Link
					}, n.a.createElement("div", {
						className: Object(o.a)(C.a.Name, C.a.placeholder, s)
					}), n.a.createElement("div", {
						className: Object(o.a)(C.a.Members, C.a.placeholder, s)
					}))), n.a.createElement("div", {
						className: C.a.SubscribeButton
					}))
				},
				I = s("./src/reddit/components/TopicSidebar/SubredditList/index.m.less"),
				P = s.n(I);
			const {
				fbt: R
			} = s("./node_modules/fbt/lib/FbtPublic.js"), F = 8, D = Array.from({
				length: F
			}).map((e, t) => n.a.createElement(L, {
				className: P.a.Subreddit,
				key: t
			})), W = {
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
						this.props.onSeeMoreCommunities && (this.props.sendEvent(Object(u.w)(W)), this.props.onSeeMoreCommunities())
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
					}, n.a.createElement(c.b, {
						type: c.a.Widget
					}, R._("Top Communities", null, {
						hk: "46yzcK"
					}))), n.a.createElement("div", {
						className: P.a.SubredditList
					}, r.length > 0 ? r.map(e => n.a.createElement(N, {
						className: P.a.Subreddit,
						discoveryUnit: W,
						key: e,
						subredditId: e
					})) : D), t.length > F && n.a.createElement(i.a, {
						to: s
					}, n.a.createElement(l.r, {
						className: P.a.SeeMore,
						onClick: this.onSeeMoreCommunities
					}, R._("See more", null, {
						hk: "2qkY6H"
					}))))
				}
			}
			t.a = Object(d.c)(B)
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
				c = s.n(a);
			t.a = e => {
				const {
					children: t,
					className: s
				} = e;
				return n.a.createElement(i.a, {
					className: s
				}, t, n.a.createElement(o.a, {
					className: c.a.StickyBottom
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
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/widgets.ts"),
				h = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = s("./src/reddit/selectors/experiments/topPosts.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/models/Theme/index.ts"),
				x = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const v = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(x.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				y = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(x.a)(e).widgetColors.sidebarWidgetHeaderColor,
				E = e => {
					const t = v(e);
					return Object(_.f)(t)
				},
				T = e => {
					const t = y(e);
					return Object(_.f)(t)
				};
			var S = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				w = s.n(S);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = Object(u.u)(), O = Object(i.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.n)(e, t) || void 0,
						r = t.redditStyle || Object(g.l)(e, {
							subredditId: s
						}),
						n = Object(f.db)(e);
					return r || n
				},
				nigtmode: f.db,
				subredditId: u.n,
				topPostVariant: b.d
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
					return e.backgroundColor = v(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = E(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = y(this.props), e.color = e.fill = T(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: r,
						headerButton: i,
						id: o,
						onClick: c,
						onHeaderClick: l,
						title: u,
						titleClassName: p,
						truncateThreshold: h
					} = this.props, b = s ? w.a.widgetContentOnly : w.a.widgetContent, g = !r && this.props.styles, f = g ? this.getWidgetBackgroundStyles() : {}, _ = g ? this.getWidgetHeaderStyles() : {};
					return n.a.createElement("div", {
						className: Object(a.a)(t, w.a.widgetBackground, {
							[w.a.redditStyle]: r,
							[w.a.clickable]: !!c,
							[w.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": r,
						onClick: c,
						style: f
					}, u && n.a.createElement("div", {
						className: Object(a.a)(w.a.widgetHeader, {
							[w.a.clickable]: !!l
						}),
						id: o,
						style: _,
						onClick: l
					}, n.a.createElement("div", {
						className: Object(a.a)(w.a.widgetTitle, p)
					}, n.a.createElement(d.b, {
						type: d.a.Widget
					}, u)), i), n.a.createElement("div", {
						className: Object(a.a)(b, {
							[w.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? h : "none"
						}
					}, e), this.state.isTruncated && n.a.createElement(m.r, {
						className: w.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, C._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = k(O(Object(c.a)(Object(l.c)(N))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return T
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "b", (function() {
				return k
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/gold/tooltips.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				u = s("./src/reddit/actions/survey/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/components/PostList/Placeholder.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				_ = s("./src/reddit/selectors/experiments/survey.ts"),
				x = s("./src/reddit/selectors/listings.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/selectors/tracking.ts");

			function T() {
				return Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isFrontpage: p.A,
					isProfilePostListing: p.L,
					isTopicPage: p.R,
					pageLayer: e => e
				})
			}
			const S = T(),
				w = {
					apiError: x.c,
					apiPending: x.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.S)(e, t),
					loadMore: x.g,
					postsById: v.T,
					postIds: Object(i.a)((e, t) => {
						let {
							listingKey: s,
							listingName: r,
							inSubredditOrProfile: n
						} = t;
						return Object(v.D)(e, s, r, n)
					}),
					subredditsById: y.bb,
					viewportDataLoaded: E.a,
					pageReferrer: p.V,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: _.e
				},
				C = Object(n.c)(w),
				k = e => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(o.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(d.L(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(d.z(t, s))
					},
					trackOnPostEnteredViewport: (t, s, r, n) => {
						e(d.O(t, r, n))
					},
					trackOnPostExitedViewport: (t, s, r, n) => {
						e(d.P(t, r, n))
					},
					showModalOnScroll: () => e(d.cb()),
					surveyTriggerScrollCounted: () => e(Object(u.l)())
				}),
				O = e => Object(h.b)({
					...e
				}),
				N = (e, t, s, r) => {
					const {
						listingKey: n,
						hostPostData: i,
						listingBelowVariant: o
					} = r;
					return Object(b.k)(e, t, "post", n, i, o, void 0)
				},
				j = Object(r.b)(C, k, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: O,
					postClickEventFactory: N
				}));
			t.a = e => Object(m.c)(S(j(e)))
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
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
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
					widget: Object(o.vb)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...o.n
				}),
				c = (e, t) => s => ({
					source: n.POST,
					action: i.c.CLICK,
					noun: r.REREDDIT_PROMO,
					post: o.I(s, e),
					subreddit: o.hb(s),
					...t && {
						banner: {
							buttonText: t,
							id: r.REREDDIT_PROMO
						}
					},
					...o.n(s)
				}),
				d = () => e => ({
					source: n.SIDEBAR,
					action: i.c.VIEW,
					noun: r.TOPICS_WIDGET,
					...o.n(e)
				}),
				l = e => t => ({
					source: n.TOPICS_WIDGET,
					action: i.c.CLICK,
					noun: r.TOPIC,
					...o.n(t),
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
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/pages/ErrorPages/index.m.less"),
				c = s.n(a);
			const d = e => {
					let {
						message: t
					} = e;
					return i.a.createElement("div", {
						className: c.a.container
					}, i.a.createElement("h3", {
						className: c.a.title
					}, t || r.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), i.a.createElement(o.n, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				l = e => {
					let {
						message: t
					} = e;
					return i.a.createElement("div", {
						className: c.a.container
					}, i.a.createElement("h3", {
						className: c.a.title
					}, t || r.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), i.a.createElement(o.n, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
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
				c = s("./src/lib/makeListingKey/index.ts"),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/pages/topic.ts"),
				u = s("./src/reddit/components/ListingPostList/index.tsx"),
				m = s("./src/reddit/controls/InternalLink/index.tsx"),
				p = s("./src/reddit/icons/svgs/Search/index.tsx"),
				h = s("./src/reddit/components/RelatedTopicList/RelatedTopic/index.m.less"),
				b = s.n(h);
			var g = e => {
					const {
						topic: t
					} = e;
					return n.a.createElement("span", {
						className: b.a.Container
					}, n.a.createElement(m.default, {
						className: b.a.Link,
						title: t.name,
						to: t.url
					}, n.a.createElement("span", {
						className: b.a.IconContainer
					}, n.a.createElement(p.a, null)), n.a.createElement("span", {
						className: b.a.Name
					}, t.namePlural)))
				},
				f = s("./src/reddit/components/SEOTitle/index.tsx"),
				_ = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = s("./src/reddit/components/RelatedTopicList/index.m.less"),
				v = s.n(x);

			function y(e) {
				const {
					children: t,
					limit: s,
					title: r,
					topics: i
				} = e;
				return i.length ? n.a.createElement(_.a, {
					className: v.a.Container
				}, r && n.a.createElement("div", {
					className: v.a.Title
				}, n.a.createElement(f.b, {
					type: f.a.Widget
				}, r)), n.a.createElement("div", {
					className: v.a.RelatedTopicList
				}, i.slice(0, s).map(e => n.a.createElement(g, {
					key: e.id,
					topic: e
				}))), t) : null
			}
			var E = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				T = s("./src/reddit/components/TopicSidebar/index.tsx"),
				S = s("./src/reddit/components/TopicSidebar/SubredditList/index.tsx"),
				w = s("./src/reddit/constants/listings.ts"),
				C = s("./src/reddit/constants/postLayout.ts"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/helpers/trackers/screenview.ts"),
				N = s("./src/reddit/layout/page/Listing/index.tsx"),
				j = s("./src/reddit/pages/ErrorPages/index.tsx"),
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
			var D = F,
				W = s("./src/reddit/pages/Topic/TopicHeader/index.m.less"),
				B = s.n(W);

			function M() {
				return (M = Object.assign || function(e) {
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
			var A;
			! function(e) {
				e.Communities = "communities", e.Posts = "posts", e.RelatedTopics = "relatedTopics"
			}(A || (A = {}));
			class G extends n.a.Component {
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
					} = this.props, c = {
						activeTab: e,
						onTabClick: r,
						tabs: i
					};
					return n.a.createElement("div", {
						className: Object(o.a)(B.a.Container, t)
					}, n.a.createElement("div", {
						className: Object(o.a)(B.a.Content, s === C.g.Large ? B.a.cardWidth : B.a.fullWidth)
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
					}, n.a.createElement(D, M({
						tab: A.Posts
					}, c), H._("Posts", null, {
						hk: "3RLrle"
					})), n.a.createElement(D, M({
						tab: A.Communities
					}, c), H._("Communities", null, {
						hk: "KIwd1"
					})), n.a.createElement(D, M({
						tab: A.RelatedTopics
					}, c), H._("Related Topics", null, {
						hk: "4go2cr"
					})))))
				}
			}
			var z = G,
				V = s("./src/reddit/pages/Topic/Relationship/index.m.less"),
				J = s.n(V);
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js"), q = 5;
			class K extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							openTab: e,
							relationshipIndex: t
						} = this.props;
						e(A.RelatedTopics, t)
					}
				}
				render() {
					const {
						namePlural: e,
						relatedTopics: t
					} = this.props.relationship;
					return n.a.createElement(y, {
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
						className: J.a.SeeAllRelatedTopics
					}, U._("See all {=[Topic name plural]}", [U._param("=[Topic name plural]", n.a.createElement("span", {
						className: J.a.TopicName
					}, U._("{Topic name plural}", [U._param("Topic name plural", e)], {
						hk: "27C3n9"
					})))], {
						hk: "uH0jh"
					})))
				}
			}
			var Y = K,
				Q = s("./src/lib/prettyPrintNumber/index.ts"),
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ce = Object(i.c)({
				isLoggedIn: ne.Q,
				subreddit: re.U,
				subredditAboutInfo: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.about[s]
				}
			}), de = Object(d.b)(ce), le = {
				text: "nsfw",
				type: se.f.Nsfw
			};
			var ue = de(e => {
					const {
						className: t,
						isLoggedIn: s,
						subreddit: r,
						subredditAboutInfo: i
					} = e, a = Object(te.c)(r.displayText || r.name);
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
					}, [ae._plural(r.subscribers, "subscribers count", Object(Q.b)(r.subscribers))], {
						hk: "48BXj1"
					})), r.isNSFW && n.a.createElement(Z.b, {
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

			function he(e) {
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
			var be = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				ge = s("./src/reddit/pages/Topic/TabHeader/RelationshipTab/index.m.less"),
				fe = s.n(ge);
			class _e extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							index: e,
							onTabClick: t
						} = this.props;
						t(A.RelatedTopics, e)
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
			var xe = _e,
				ve = s("./src/reddit/pages/Topic/TabHeader/index.m.less"),
				ye = s.n(ve);
			const {
				fbt: Ee
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class Te extends n.a.Component {
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
						className: ye.a.TabHeader
					}, this.props.topic.childRelationships.map(this.renderRelatedTopic)), this.renderTitle = () => {
						const {
							activeTab: e,
							topicNamePlural: t
						} = this.props;
						return e === A.Posts ? Ee._("Posts about {topic name}", [Ee._param("topic name", t)], {
							hk: "3AGfU"
						}) : e === A.Communities ? Ee._("Communities related to {topic name}", [Ee._param("topic name", t)], {
							hk: "jKM0V"
						}) : null
					}
				}
				render() {
					const {
						activeLayout: e,
						activeTab: t
					} = this.props, s = t === A.Posts;
					return t === A.RelatedTopics ? this.renderRelatedTopicsHeader() : n.a.createElement("div", {
						className: ye.a.TabHeader
					}, n.a.createElement("div", {
						className: ye.a.TabTitle
					}, n.a.createElement(f.b, {
						type: f.a.Widget
					}, this.renderTitle())), s && n.a.createElement(be.a, {
						className: ye.a.PostsLayoutSwitch,
						layout: C.e[e]
					}))
				}
			}
			var Se = Te,
				we = s("./src/reddit/selectors/topic.ts"),
				Ce = s("./src/reddit/pages/Topic/index.m.less"),
				ke = s.n(Ce);
			const {
				fbt: Oe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ne = Object(k.u)(), je = (e, t) => t.match.params.sort || a.X, Le = e => {
				const t = [];
				return e ? (e.hasPosts && t.push(A.Posts), e.hasSubreddits && t.push(A.Communities), e.childRelationships.length && t.push(A.RelatedTopics), t) : t
			}, Ie = Object(d.b)(() => Object(i.a)((e, t) => Object(we.d)(e, t.match.params.topicSlug), (e, t) => Object(we.e)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(we.c)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(we.a)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(we.b)(e, {
				topicSlug: t.match.params.topicSlug
			}), k.S, je, e => {
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
			})), Pe = (e, t) => e === A.Communities ? C.g.Large : t;
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
						this.openTab(A.Communities)
					}, this.onViewed = (e, t) => {
						var s;
						return Object(O.f)({
							key: Object(c.a)(w.b.Topic, null, {
								topicSlug: null === (s = this.props.topic) || void 0 === s ? void 0 : s.slug
							}),
							sort: this.props.sort,
							timerType: t,
							timerMillis: e,
							timeSort: this.props.timeSort
						})
					}, this.renderNoPosts = () => null, this.renderRelationship = (e, t) => n.a.createElement(Y, {
						key: e.slug,
						openTab: this.openTab,
						relationship: e,
						relationshipIndex: t
					}), this.state = {
						activeLayout: C.g.Large,
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
						topic: d,
						topicName: l,
						topicNamePlural: m
					} = this.props, p = t.params.topicSlug, h = Object(c.a)(w.b.Topic, null, {
						topicSlug: p
					}), {
						activeLayout: b,
						activeRelationshipIndex: g,
						activeTab: f
					} = this.state, _ = w.b.Topic;
					if (404 === i) return n.a.createElement(j.b, null);
					if (500 === i) return n.a.createElement(j.b, {
						message: Oe._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "3SZaDI"
						})
					});
					if (!d) return null;
					const x = d.childRelationships[g],
						v = x && x.relatedTopics || [],
						C = n.a.createElement(n.a.Fragment, null, n.a.createElement(Se, {
							activeLayout: b,
							activeRelationshipIndex: g,
							activeTab: f,
							onTabClick: this.openTab,
							topic: d,
							topicName: l,
							topicNamePlural: m
						}), n.a.createElement("div", {
							className: Object(o.a)(ke.a.TopicTab, {
								[ke.a.active]: f === A.Communities
							})
						}, n.a.createElement(he, {
							subredditIds: d.subredditIds
						})), n.a.createElement("div", {
							className: Object(o.a)(ke.a.TopicTab, {
								[ke.a.active]: f === A.Posts
							})
						}, f === A.Posts && n.a.createElement(u.a, {
							forcedLayout: b,
							listingKey: h,
							listingName: _,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderNoPosts,
							onLoadMore: this.props.onLoadMorePosts
						})), n.a.createElement("div", {
							className: Object(o.a)(ke.a.TopicTab, {
								[ke.a.active]: f === A.RelatedTopics
							})
						}, n.a.createElement(y, {
							topics: v
						}))),
						k = f !== A.RelatedTopics,
						O = f !== A.Communities && a.includes(A.Communities),
						L = n.a.createElement("div", {
							className: ke.a.WidgetsContainer
						}, O && n.a.createElement(S.a, {
							onSeeMoreCommunities: this.openCommunitiesTab,
							subredditIds: d.subredditIds,
							topicUrl: d.url
						}), k && d.childRelationships.map(this.renderRelationship), n.a.createElement(y, {
							limit: 5,
							title: Oe._("Similar Topics", null, {
								hk: "1Kv3xR"
							}),
							topics: r
						}));
					return n.a.createElement(E.a, null, n.a.createElement(N.a, {
						className: Object(o.a)(ke.a.Container, e),
						content: C,
						fitPageToContent: !0,
						forcedLayout: b,
						sidebars: [null, n.a.createElement(T.a, {
							key: "right",
							className: ke.a.SidebarRight,
							listingName: _
						}, L)],
						navBar: n.a.createElement(z, {
							activeTab: f,
							layout: b,
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
				c = s("./node_modules/reselect/es/index.js");
			const d = Object(c.a)(e => Object(n.c)(e, {
					experimentEligibilitySelector: e => Object(a.h)(e) && Object(i.f)(e),
					experimentName: r.oc
				}), o.a),
				l = Object(c.a)(e => Object(n.c)(e, {
					experimentEligibilitySelector: e => !Object(a.h)(e) && Object(i.f)(e),
					experimentName: r.nc
				}), o.a),
				u = Object(c.a)(d, l, (e, t) => e || t),
				m = Object(c.a)(d, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return c
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "j", (function() {
				return p
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "f", (function() {
				return _
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "d", (function() {
				return y
			}));
			var r = s("./src/lib/objectSelector/index.ts"),
				n = s("./src/reddit/featureFlags/index.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				o = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(o.U)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				u = [],
				m = Object(r.a)((e, t) => {
					const s = p(e, t);
					if (!s) return u;
					const r = Object(o.Y)(e, {
						subredditName: s.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : u
				}),
				p = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(o.U)(e, {
						subredditId: s
					}) : null
				},
				h = (e, t, s, r, n) => {
					const o = n.find(e => e <= t) || -1,
						a = n.find(e => e > t) || 1 / 0;
					return t !== a && t !== o && (!(o + s > t) && (!(t + s > a) && !((e, t, s) => {
						const r = s[t - 1],
							n = s[t],
							o = n && Object(i.G)(e, {
								postId: r
							}) || null,
							a = n && Object(i.G)(e, {
								postId: n
							}) || null;
						return o && o.isSponsored || a && a.isSponsored
					})(e, t, r)))
				},
				b = [3],
				g = Object(r.a)((e, t) => {
					let {
						existingDUPositions: s,
						listingProps: r
					} = t;
					const n = s.slice().sort();
					let o = -1;
					const a = Object(i.z)(e, {
							listingKey: r.listingKey
						}),
						c = [];
					return b.forEach(t => {
						let s = o + t;
						if (!(s >= a.length)) {
							for (; s < a.length && !h(e, s, t, a, n);) s += 1;
							s < a.length && (c.push(s), o = s)
						}
					}), c
				}),
				f = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				_ = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				x = e => e.focusedVerticals.category,
				v = e => e.focusedVerticals.lastLoadedEnv,
				y = e => {
					const t = Object(a.P)(e),
						s = n.d.geoSubredditRecommendationDULoggedIn(e),
						r = n.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && r
				}
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
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"c10a566d5f55"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Topic.e3fb1202eb302c830c41.js.map