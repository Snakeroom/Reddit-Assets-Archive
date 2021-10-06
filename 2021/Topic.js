// https://www.redditstatic.com/desktop2x/Topic.a567ae7ffcd7c3e7e3e2.js
// Retrieved at 10/6/2021, 4:50:05 PM by Reddit Dataminer v1.0.0
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
					i.prototype.THROTTLE_TIMEOUT = 100, i.prototype.POLL_INTERVAL = null, i.prototype.observe = function(e) {
						if (!this._observationTargets.some((function(t) {
								return t.element == e
							}))) {
							if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: e,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, i.prototype.unobserve = function(e) {
						this._observationTargets = this._observationTargets.filter((function(t) {
							return t.element != e
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, i.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, i.prototype.takeRecords = function() {
						var e = this._queuedEntries.slice();
						return this._queuedEntries = [], e
					}, i.prototype._initThresholds = function(e) {
						var t = e || [0];
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, s) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== s[t - 1]
						}))
					}, i.prototype._parseRootMargin = function(e) {
						var t = (e || "0px").split(/\s+/).map((function(e) {
							var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
							if (!t) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(t[1]),
								unit: t[2]
							}
						}));
						return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
					}, i.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (n(e, "resize", this._checkForIntersections, !0), n(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, i.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, i.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							s = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(i) {
							var n = i.element,
								o = a(n),
								c = this._rootContainsTarget(n),
								d = i.entry,
								l = t && c && this._computeTargetAndRootIntersection(n, s),
								u = i.entry = new r({
									time: e.performance && performance.now && performance.now(),
									target: n,
									boundingClientRect: o,
									rootBounds: s,
									intersectionRect: l
								});
							d ? t && c ? this._hasCrossedThreshold(d, u) && this._queuedEntries.push(u) : d && d.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, i.prototype._computeTargetAndRootIntersection = function(s, r) {
						if ("none" != e.getComputedStyle(s).display) {
							for (var i, n, o, c, l, u, p, m, b = a(s), h = d(s), g = !1; !g;) {
								var f = null,
									v = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == v.display) return;
								if (h == this.root || h == t ? (g = !0, f = r) : h != t.body && h != t.documentElement && "visible" != v.overflow && (f = a(h)), f && (i = f, n = b, o = void 0, c = void 0, l = void 0, u = void 0, p = void 0, m = void 0, o = Math.max(i.top, n.top), c = Math.min(i.bottom, n.bottom), l = Math.max(i.left, n.left), u = Math.min(i.right, n.right), m = c - o, !(b = (p = u - l) >= 0 && m >= 0 && {
										top: o,
										bottom: c,
										left: l,
										right: u,
										width: p,
										height: m
									}))) break;
								h = d(h)
							}
							return b
						}
					}, i.prototype._getRootRect = function() {
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
					}, i.prototype._expandRectByRootMargin = function(e) {
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
					}, i.prototype._hasCrossedThreshold = function(e, t) {
						var s = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (s !== r)
							for (var i = 0; i < this.thresholds.length; i++) {
								var n = this.thresholds[i];
								if (n == s || n == r || n < s != n < r) return !0
							}
					}, i.prototype._rootIsInDom = function() {
						return !this.root || c(t, this.root)
					}, i.prototype._rootContainsTarget = function(e) {
						return c(this.root || t, e)
					}, i.prototype._registerInstance = function() {
						s.indexOf(this) < 0 && s.push(this)
					}, i.prototype._unregisterInstance = function() {
						var e = s.indexOf(this); - 1 != e && s.splice(e, 1)
					}, e.IntersectionObserver = i, e.IntersectionObserverEntry = r
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
						i = r.width * r.height;
					this.intersectionRatio = s ? i / s : this.isIntersecting ? 1 : 0
				}

				function i(e, t) {
					var s, r, i, n = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (n.root && 1 != n.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (s = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, i = null, function() {
						i || (i = setTimeout((function() {
							s(), i = null
						}), r))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(n.rootMargin), this.thresholds = this._initThresholds(n.threshold), this.root = n.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function n(e, t, s, r) {
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
				i = s("./node_modules/lodash/_castFunction.js"),
				n = s("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				a = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = n(e)) < 1 || e > o) return [];
				var s = a,
					d = c(e, a);
				t = i(t), e -= a;
				for (var l = r(d, t); ++s < e;) t(s);
				return l
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, s, r) {
				var i = s ? s.call(r, e, t) : void 0;
				if (void 0 !== i) return !!i;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var n = Object.keys(e),
					o = Object.keys(t);
				if (n.length !== o.length) return !1;
				for (var a = Object.prototype.hasOwnProperty.bind(t), c = 0; c < n.length; c++) {
					var d = n[c];
					if (!a(d)) return !1;
					var l = e[d],
						u = t[d];
					if (!1 === (i = s ? s.call(r, l, u, d) : void 0) || void 0 === i && l !== u) return !1
				}
				return !0
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "b", (function() {
				return L
			}));
			var r, i = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/performanceTimings/index.tsx"),
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
			var p = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				m = s("./src/reddit/selectors/platform.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(i.a)(o.g),
				g = Object(i.a)(o.e),
				f = Object(i.a)(o.h),
				v = Object(i.a)(o.c),
				x = Object(i.a)(o.f),
				_ = Object(i.a)(o.j),
				y = Object(i.a)(o.i),
				E = () => async (e, t, {
					gqlContext: s
				}) => {
					const i = t(),
						n = Object(p.e)(i),
						o = Object(p.d)(i),
						d = Object(b.J)(i);
					if (n || !o) return;
					e(f());
					let m = !1;
					try {
						const t = d ? r.LoggedInGeo : r.LoggedOutGeo,
							i = await ((e, t, s) => Object(a.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (i.ok && i.body) {
							const {
								data: t
							} = i.body;
							if (T(t)) {
								if (S(t)) {
									e(v({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), m = !0
								} else if (C(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: i,
											category: n
										} = s.focusRecommendations[0],
										o = [r, i],
										a = Object(u.d)(o),
										c = Object(l.b)(o),
										d = Object(u.c)(r),
										p = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [i.id],
											subreddits: a,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: n,
											lastLoadedEnv: "client"
										};
									e(h(p)), m = !0
								}
							} else m = !1
						}
					} catch (x) {
						m = !1
					}
					m || e(g({
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
				}, C = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						r = t && t.type;
					return !!(s && !S(e) && r === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, L = () => async (e, t, s) => {
					var r, i;
					const o = t(),
						a = Object(p.g)(o);
					if (Object(p.f)(o) || null === a || "client" === a) {
						const s = null === (i = null === (r = Object(m.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === i ? void 0 : i.route.chunk,
							a = Object(b.K)(o);
						return Object(n.i)(() => e(E()), {
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
				i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/reddit/actions/preferences.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/contexts/Tooltip.ts"),
				f = s("./src/reddit/controls/Dropdown/index.tsx"),
				v = s("./src/reddit/controls/Dropdown/Row.tsx"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				_ = s("./src/reddit/selectors/telemetry.ts"),
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
			const C = "view--layout--FUE",
				L = "LayoutSwitch--picker",
				O = Object(c.a)(f.a),
				P = {
					[b.d.Card]: function(e) {
						return n.a.createElement(x.a, S({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return n.a.createElement(x.a, S({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return n.a.createElement(x.a, S({}, e, {
							name: "view_compact"
						}))
					}
				},
				I = {
					[b.d.Card]: () => r.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => r.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => r.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[b.d.Search]: () => r.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				j = Object(h.u)(),
				N = Object(a.c)({
					dropdownIsOpen: Object(y.b)(L),
					postLayout: h.Q,
					redditStyle: h.C
				}),
				w = Object(o.b)(N, e => ({
					onListingLayoutChange: (t, s) => e(Object(u.v)(t, s)),
					openDropdown: () => e(Object(p.h)({
						tooltipId: L
					}))
				}));
			class k extends n.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: r,
							subredditId: i
						} = this.props;
						t ? t(e) : (s(e, i), r(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(_.screen)(t),
							subreddit: Object(_.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: r,
							postLayout: i
						} = this.props, o = s || b.e[i], a = e === o, c = P[e], l = I[e];
						return n.a.createElement(v.b, S({}, t, {
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
						}), n.a.createElement(c, {
							className: T.a.LayoutIcon,
							onClick: a ? void 0 : r,
							isFilled: a && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return n.a.createElement(O, S({}, e, {
							className: T.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: T.a.DropdownRow,
							rowIconClassName: T.a.DropdownRowIcon,
							rowSelectedClassName: T.a.DropdownRowSelected,
							tooltipId: L
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: r
					} = this.props, i = t || b.e[r];
					return n.a.createElement("div", {
						className: Object(d.a)(T.a.Container, e),
						id: C
					}, n.a.createElement("div", {
						className: T.a.DropdownContainer,
						onClick: s
					}, this.renderItem(i, {
						id: L,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), n.a.createElement(g.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = j(w(Object(m.c)(Object(l.a)(k))))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/PostList/index.tsx"),
				i = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(i.a)(r.a)
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return Z
			})), s.d(t, "a", (function() {
				return $
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/history/esm/history.js"),
				i = s("./node_modules/lodash/debounce.js"),
				n = s.n(i),
				o = s("./node_modules/lodash/last.js"),
				a = s.n(o),
				c = s("./node_modules/lodash/throttle.js"),
				d = s.n(c),
				l = s("./node_modules/react/index.js"),
				u = s.n(l),
				p = s("./node_modules/shallowequal/index.js"),
				m = s.n(p),
				b = s("./src/lib/addQueryParams/index.ts"),
				h = s("./src/lib/ads/index.ts"),
				g = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				v = s("./src/lib/fastdom/index.ts"),
				x = s("./src/lib/lessComponent.tsx"),
				_ = s("./src/lib/opener/index.ts"),
				y = s("./src/lib/sentry/index.ts"),
				E = s("./src/reddit/components/PostList/LoadMore.tsx"),
				T = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				S = s("./src/reddit/components/Scroller/Simple.tsx"),
				C = s("./src/reddit/constants/adEvents.ts"),
				L = s("./src/reddit/constants/componentSizes.ts"),
				O = s("./src/reddit/constants/postLayout.ts"),
				P = s("./src/reddit/controls/InternalLink/index.tsx"),
				I = s("./src/reddit/controls/OutboundLink/index.tsx"),
				j = s("./src/reddit/helpers/getClickInfo.ts"),
				N = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				w = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				k = s("./src/reddit/models/Media/index.ts"),
				R = s("./src/reddit/helpers/brandSafety/index.ts"),
				F = s("./src/reddit/helpers/trackers/ads.ts"),
				B = s("./src/lib/LRUCache/index.ts"),
				M = s("./src/telemetry/index.ts"),
				H = s("./src/telemetry/models/Timer.ts"),
				A = s("./src/reddit/components/PostList/index.m.less"),
				V = s.n(A);
			const {
				fbt: W
			} = s("./node_modules/fbt/lib/FbtPublic.js"), D = 500, U = new B.a(D), J = new B.a(D), G = new B.a(D), z = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5,
				SEARCH: 3
			}, K = x.a.div("SeeMore", V.a), q = x.a.wrapped(w.a, "ArrowRight", V.a), Q = (e, t, s, r, i, n, o, a, c) => {
				const d = `entered-${e}-${t}-${s?`last-${r}-${i}`:""}-${n}`;
				let l = U.get(d);
				return void 0 === l && (l = () => {
					s && o.onBottomViewed(r, i), o.trackOnPostEnteredViewport(e, t, a, c)
				}, U.set(d, l)), l
			}, Y = (e, t, s, r, i) => {
				const n = `left-${e}-${t}`;
				let o = J.get(n);
				return void 0 === o && (o = n => {
					s.trackOnPostExitedViewport(e, t, n, r, i)
				}, J.set(n, o)), o
			}, Z = (e, t, s = !1) => {
				const r = `click-${e}`;
				let i = G.get(r);
				return void 0 === i && (i = (e, r, i, n, o) => {
					if (r.isSponsored) {
						t.fireAdPixelsOfType(r, C.a.Click);
						const {
							source: e
						} = Object(h.t)(r, n);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							i && (t = Object(I.a)(r.id, i, t).url), Object(F.a)(r, o), Object(_.e)(t, _.d.BLANK)
						}
					} else t.openPost({
						postOrComment: r,
						clickInfo: Object(j.a)(e),
						isFrontpage: s
					})
				}, G.set(r, i)), i
			}, X = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class $ extends u.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new B.a(D), this.surveyTriggerCounted = !1, this.timerId = void 0, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						const {
							isNpsScrollSurveyEnabled: t,
							onScroll: s,
							surveyTriggerScrollCounted: r
						} = this.props;
						this.dispatchBrandSafety(e), t && r && !this.surveyTriggerCounted && this.surveyTriggerListener(e), s && s(e)
					}, this.surveyTriggerListener = d()(({
						primaryChild: e
					}) => {
						this.viewportHeight && e && e.rectangle && e.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = n()(({
						getVisibleItemsInViewport: e
					}) => {
						const {
							postsById: t,
							subredditsById: s
						} = this.props, r = e(), i = [];
						r.forEach(e => i.push(e.id));
						const n = i.map(e => t[e]).filter(Boolean),
							o = n.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(R.a)(n, o))
					}, f.d, {
						leading: !0
					}), this.eventFactoryHandler = (e, t, s) => this.props.postClickEventFactory(e, t, s, this.props)
				}
				UNSAFE_componentWillMount() {
					void 0 !== this.timerId && M.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = M.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, void 0 !== this.timerId) {
						const e = M.c.end(this.timerId);
						setTimeout(() => Object(M.b)(f.m.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					void 0 !== this.timerId && M.c.cancel(this.timerId), e.postIds.length && (this.timerId = M.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (v.a.read(() => this.checkAndSendScreenview()), this.timerId && M.c.has(this.timerId)) {
						const e = M.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(M.b)(f.m.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
					this.props.listingKey !== e.listingKey && (this.surveyTriggerCounted = !1);
					const r = null === (t = this.props.postIds) || void 0 === t ? void 0 : t[0];
					r && r !== (null === (s = e.postIds) || void 0 === s ? void 0 : s[0]) && this.props.onFirstPostChanged(r)
				}
				componentWillUnmount() {
					this.timerId && M.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && a()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return M.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview() || !t) return;
					const r = M.c.end(e);
					setTimeout(() => {
						s(t(r, H.TimerType.InApp))
					}, 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s
					} = this.props;
					return !s && (Boolean(e) || !1 !== t)
				}
				hasPosts() {
					return this.props.postIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						postIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const {
						postsById: t,
						triggerNewPostPill: s,
						...r
					} = this.props, {
						postsById: i,
						triggerNewPostPill: n,
						...o
					} = e, a = Object.keys(r), c = Object.keys(o);
					if (c.length !== a.length) return !0;
					if (c.some(e => {
							let t = !1;
							return t = "function" == typeof r[e] || "object" == typeof r[e] ? !m()(r[e], o[e]) : r[e] !== o[e]
						})) return !0;
					if (t === i) return !1;
					if (s !== n) return !0;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((r, n) => {
							const o = 0 === n;
							return s({
								isFirstPost: o,
								layout: e,
								post: t[r]
							}) !== s({
								isFirstPost: o,
								layout: e,
								post: i[r]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, r) {
					const {
						currentProfileName: i,
						hostPostData: n,
						isCommentPermalink: o,
						isCommentsPage: a,
						isFrontpage: c,
						isProfilePostListing: d,
						isTopicPage: l,
						isCommentCountAnimationEnabled: p,
						isVoteCountAnimationEnabled: m,
						isCountAnimShadowTestEnabled: b,
						listingBelowVariant: h,
						listingKey: g,
						listingName: v,
						pageLayer: x,
						pageReferrer: _,
						redditStyle: E,
						shouldHideFlair: T,
						triggerCelebratoryMoment: S,
						triggerNewPostPill: C,
						postIds: L
					} = this.props, P = 0 === t, I = `post-${r}-${e}-${t}-${s?"last-index":""}-${v}-${g}-${_}`;
					let j;
					if (void 0 === (j = this.scrollChildCache.get(I))) {
						const {
							inSubredditOrProfile: w,
							postsById: R
						} = this.props, F = R[e], B = F.crosspostRootId && R[F.crosspostRootId] ? R[F.crosspostRootId] : F;
						F.crosspostRootId && !R[F.crosspostRootId] && y.c.withScope(e => {
							e.setExtra("errorType", f.s.API), e.setExtra("description", `Post ${F.id} is crosspost of ${F.crosspostRootId}, but ` + `${F.crosspostRootId} details are missing in the state`), y.c.captureMessage("Crosspost parent details are missing")
						});
						const M = this.props.postComponentForLayout({
							isCrosspost: !!F.crosspostRootId,
							isFirstPost: P,
							layout: r,
							post: B
						});
						let H = `post-list-item-[layout: ${r}]-[postId: ${e}]`;
						this.props.listingBelowVariant && g && (H += `--${g}`);
						const A = Q(e, r, s, g, v, _, this.props, t, this.props.hostPostData),
							V = Y(e, r, this.props, t, x),
							W = Z(e, this.props, c),
							D = B.media && B.media.type === k.o.EMBED ? B.media.provider : null,
							U = p && !F.isSponsored,
							J = m && !F.isSponsored && !F.isScoreHidden,
							G = !F.isSponsored && !F.isArchived;
						j = {
							estHeight: Object(N.c)(F, r),
							id: e,
							isFocusable: !(!B.media || !(r === O.g.Large || r === O.g.Classic && Object(k.G)(B.media))) && (k.d.has(B.media.type) && (!D || !k.s.has(D)) && !B.isSpoiler),
							trackOnEnteredViewport: A,
							trackOnExitedViewport: V,
							render: ({
								className: r,
								height: p,
								width: m,
								remeasure: f,
								setScrollerChildRef: _,
								shouldLoadInitially: y
							}) => u.a.createElement(M, {
								className: r,
								currentProfileName: i,
								key: H,
								availableWidth: m,
								eventFactory: this.eventFactoryHandler,
								first: P,
								forceLoadMedia: y,
								hostPostData: n,
								inSubredditOrProfile: w,
								isCommentPermalink: o,
								isCommentsPage: a,
								isFrontpage: c,
								isProfilePostListing: d,
								isTopicPage: l,
								isCommentCountAnimationEnabled: U,
								isVoteCountAnimationEnabled: J,
								isCountAnimShadowTestEnabled: b,
								listingBelowVariant: h,
								listingIndex: t,
								listingKey: g,
								listingName: v,
								pageLayer: x,
								last: s,
								onClickPost: W,
								onSizeChanged: f,
								postId: e,
								postIds: L,
								redditStyle: E,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: _,
								shouldHideFlair: T,
								triggerCelebratoryMoment: G ? S : void 0,
								onceInViewport: C
							})
						}, this.scrollChildCache.set(I, j)
					}
					return j
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return u.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: r,
						onTryAgain: i,
						postListPlaceholderComponent: n
					} = this.props;
					if (s) return;
					const o = n;
					return u.a.createElement("div", {
						className: V.a.placeholder
					}, u.a.createElement(o, {
						className: t,
						isLoading: !e,
						layout: r
					}), !!e && u.a.createElement(T.a, {
						apiError: e,
						onTryAgain: i
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: r,
						loadMoreClassName: i,
						onLoadMore: n
					} = this.props;
					if (!s) return u.a.createElement("div", {
						className: V.a.placeholder
					}, u.a.createElement(E.a, {
						className: i,
						isLoading: !!t,
						layout: r,
						countOverride: z[r]
					}), !!e && u.a.createElement(T.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: i,
						isSerpExperimentOverride: n,
						isTruncated: o,
						layout: a,
						location: c,
						loadMore: d,
						postIds: p,
						postsById: m,
						onLoadMore: h
					} = this.props;
					let v = p.filter(e => Boolean(m[e])).map((e, t, s) => {
						const r = t === s.length - 1;
						return this.scrollChildForPost(e, t, r, a)
					});
					i && (v = X(v, i));
					const x = this.props.measureScrollFPS ? `post-listings-${a}` : void 0,
						_ = c ? Object(r.e)(c) : null,
						y = _ || o;
					return u.a.createElement(l.Fragment, null, u.a.createElement(S.b, {
						innerRef: this.updateScrollerRef,
						className: y ? V.a.truncatedPostList : Object(g.a)(V.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: d && d.token ? d.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: h,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: x,
						viewportTopPadding: L.f
					}, v), !n && _ && u.a.createElement(K, {
						className: V.a.seeMoreButton
					}, u.a.createElement(P.a, {
						className: V.a.seeMorePostsText,
						to: Object(b.a)(_, {
							type: f.Xb.Posts
						})
					}, W._("See More Posts", null, {
						hk: "3o0CqI"
					}), u.a.createElement(q, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			$.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: u.a.Fragment
			}
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
				i = s("./src/reddit/components/SidebarContainer/index.m.less"),
				n = s.n(i);
			t.a = r.a.div("container", n.a)
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
				i = s.n(r),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/makeAsync.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				p = s("./src/lib/loadWithRetries/index.ts"),
				m = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				b = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = s("./src/reddit/icons/svgs/Close/index.tsx"),
				g = s("./src/reddit/selectors/moderatorPermissions.ts"),
				f = s("./src/reddit/selectors/structuredStyles.ts"),
				v = s("./src/reddit/selectors/userPrefs.ts"),
				x = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				_ = s.n(x);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), E = u.a.div("BladeContainer", _.a), T = u.a.wrapped(h.a, "CloseIcon", _.a), S = u.a.div("LoadingTitleContainer", _.a), C = u.a.div("LoadingNavContainer", _.a), L = u.a.div("ShortLoadingNav", _.a), O = u.a.wrapped(b.a, "ThemedChevron", _.a), P = ({
				...e
			}) => o.a.createElement(E, null, o.a.createElement(T, null), o.a.createElement(m.k, null, o.a.createElement(m.p, null, y._("Back to mod tools", null, {
				hk: "1YCI0W"
			})), o.a.createElement(m.o, null, o.a.createElement(S, null, o.a.createElement("div", {
				className: Object(l.a)(_.a.LoadingTitle, e.isLoading && _.a.loading)
			})), o.a.createElement(C, null, o.a.createElement("div", {
				className: Object(l.a)(_.a.LoadingNav, e.isLoading && _.a.loading)
			}), o.a.createElement(O, null)), o.a.createElement(C, null, o.a.createElement(L, null), o.a.createElement(O, null)), o.a.createElement(C, null, o.a.createElement("div", {
				className: Object(l.a)(_.a.LoadingNav, e.isLoading && _.a.loading)
			}), o.a.createElement(O, null)), o.a.createElement(C, null, o.a.createElement(L, null), o.a.createElement(O, null)), o.a.createElement(C, null, o.a.createElement("div", {
				className: Object(l.a)(_.a.LoadingNav, e.isLoading && _.a.loading)
			}), o.a.createElement(O, null))))), I = Object(d.a)({
				getComponent: () => Object(p.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("StructuredStyles")]).then(s.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => o.a.createElement(P, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => o.a.createElement(P, {
					gradientType: "posts",
					isLoading: !0
				})
			}), j = Object(c.c)({
				isEditing: f.i,
				isSubscriptionsPinned: v.b,
				moderatorPermissions: g.m
			});
			t.a = Object(a.b)(j)(e => {
				const t = e.moderatorPermissions && i()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? o.a.createElement("div", {
					className: Object(l.a)(_.a.Container, e.isSubscriptionsPinned && _.a.isSubscriptionPinned)
				}, e.children, o.a.createElement(I, {
					subredditId: e.subredditId
				})) : o.a.createElement(n.Fragment, null, e.children)
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
				return p
			})), s.d(t, "h", (function() {
				return m
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "j", (function() {
				return y
			}));
			var r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				n = s.n(i);
			const o = r.a.section("FormPage", n.a),
				a = r.a.h1("HomePageTitle", n.a),
				c = r.a.button("HomePageBreadcrumb", n.a),
				d = r.a.div("HomePageGroup", n.a),
				l = r.a.h1("FormPageTitle", n.a),
				u = r.a.div("FormPageSection", n.a),
				p = r.a.div("FormGroup", n.a),
				m = r.a.h2("FormGroupTitle", n.a),
				b = r.a.div("FormElement", n.a),
				h = r.a.div("FormGroupDescription", n.a),
				g = r.a.div("FormItem", n.a),
				f = r.a.h3("FormElementTitle", n.a),
				v = r.a.div("FormElementDescription", n.a),
				x = r.a.div("FormElementError", n.a),
				_ = r.a.div("FormElementSubGroup", n.a),
				y = r.a.li("FormListItem", n.a)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, s) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = s.n(c),
				l = s("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = (e, t, s) => null != s ? s : t ? e : o.b.Plain,
				m = ({
					border: e,
					priority: t,
					small: s,
					...r
				}) => n.a.createElement(o.s, u({}, r, {
					priority: p(o.b.Primary, e, t),
					className: Object(l.a)(r.className, d.a.BaseButton),
					size: s ? o.c.S : o.c.M
				})),
				b = e => n.a.createElement(n.a.Fragment, null, n.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), n.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				h = ({
					buttonType: e,
					border: t,
					priority: s,
					small: r,
					...i
				}) => n.a.createElement(o.s, u({}, i, {
					priority: p(o.b.Secondary, t, s),
					className: Object(l.a)(i.className, d.a.BaseButton),
					size: r ? o.c.S : o.c.M,
					text: b(e)
				}));
			class g extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: s,
						priority: r,
						small: i = !1,
						isFullWidth: o = !1
					} = this.props, c = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: r,
						small: i,
						isFullWidth: o
					};
					return this.props.userIsSubscriber ? n.a.createElement(h, u({}, c, {
						buttonType: this.props.identifier.type
					})) : n.a.createElement(m, u({}, c, {
						id: s
					}), this.props.children, Object(a.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js");
			const i = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				n = {
					subredditActions: {
						subscribe: () => r.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => r.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => r.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => r.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => r.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => r.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				o = ({
					type: e,
					key: t
				}) => n[i({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				n = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(i.a)(Object(r.c)(n.a))
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
				i = s.n(r),
				n = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				p = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				m = s("./node_modules/fbt/lib/FbtPublic.js"),
				b = s("./node_modules/react-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				g = s("./src/lib/prettyPrintNumber/index.ts"),
				f = s("./src/reddit/components/SubredditIcon/index.tsx"),
				v = s("./src/reddit/components/SubscribeButton/index.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				_ = s("./src/reddit/controls/InternalLink/index.tsx"),
				y = s("./src/reddit/helpers/name/index.ts"),
				E = s("./src/reddit/models/Widgets/index.ts"),
				T = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less"),
				L = s.n(C);
			const O = Object(h.c)({
				isLoggedIn: S.K,
				subreddit: T.Q,
				subredditAboutInfo: T.s
			});
			class P extends i.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditClick = () => {
						const {
							discoveryUnit: e,
							sendEvent: t,
							subreddit: s,
							subredditAboutInfo: r
						} = this.props;
						if (!s) return;
						const i = Object(E.n)(s, r);
						t(Object(u.p)(e, i))
					}
				}
				render() {
					const {
						className: e,
						isLoggedIn: t,
						subreddit: s
					} = this.props;
					return s ? i.a.createElement("div", {
						className: Object(o.a)(L.a.Container, e)
					}, i.a.createElement(f.b, {
						className: L.a.Icon,
						subredditOrProfile: s
					}), i.a.createElement("div", {
						className: L.a.Text
					}, i.a.createElement(_.a, {
						className: L.a.Link,
						onMouseDown: this.trackSubredditClick,
						to: s.url
					}, i.a.createElement("div", {
						className: L.a.Name
					}, Object(y.c)(s.displayText || s.name)), i.a.createElement("div", {
						className: L.a.Members
					}, m.fbt._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [m.fbt._plural(s.subscribers, "subscribers count", Object(g.b)(s.subscribers))], {
						hk: "48BXj1"
					})))), i.a.createElement(v.a, {
						border: !1,
						className: Object(o.a)(L.a.SubscribeButton, {
							[L.a.hidden]: !t
						}),
						identifier: {
							name: s.name,
							type: x.a.SUBREDDIT
						},
						small: !0
					})) : null
				}
			}
			var I = Object(b.b)(O)(Object(d.c)(P)),
				j = s("./src/reddit/helpers/styles/mixins/loading.ts");
			var N = e => {
					const {
						className: t
					} = e, s = Object(j.b)({
						isLoading: !0
					});
					return i.a.createElement("div", {
						className: Object(o.a)(L.a.Container, t)
					}, i.a.createElement("div", {
						className: Object(o.a)(L.a.Icon, L.a.placeholder, s)
					}), i.a.createElement("div", {
						className: L.a.Text
					}, i.a.createElement("div", {
						className: L.a.Link
					}, i.a.createElement("div", {
						className: Object(o.a)(L.a.Name, L.a.placeholder, s)
					}), i.a.createElement("div", {
						className: Object(o.a)(L.a.Members, L.a.placeholder, s)
					}))), i.a.createElement("div", {
						className: L.a.SubscribeButton
					}))
				},
				w = s("./src/reddit/components/TopicSidebar/SubredditList/index.m.less"),
				k = s.n(w);
			const {
				fbt: R
			} = s("./node_modules/fbt/lib/FbtPublic.js"), F = 8, B = Array.from({
				length: F
			}).map((e, t) => i.a.createElement(N, {
				className: k.a.Subreddit,
				key: t
			})), M = {
				enabled: !0,
				id: "xd_103",
				layout: p.c.Large,
				surface: p.d.Topic,
				unitName: p.i,
				unitType: p.e.SubredditListing,
				url: ""
			};
			class H extends i.a.Component {
				constructor() {
					super(...arguments), this.onSeeMoreCommunities = () => {
						this.props.onSeeMoreCommunities && (this.props.sendEvent(Object(u.z)(M)), this.props.onSeeMoreCommunities())
					}
				}
				render() {
					const {
						className: e,
						subredditIds: t,
						topicUrl: s
					} = this.props, r = t.slice(0, F);
					return i.a.createElement(a.a, {
						className: Object(o.a)(k.a.Container, e)
					}, i.a.createElement("div", {
						className: k.a.Title
					}, i.a.createElement(c.b, {
						type: c.a.Widget
					}, R._("Top Communities", null, {
						hk: "46yzcK"
					}))), i.a.createElement("div", {
						className: k.a.SubredditList
					}, r.length > 0 ? r.map(e => i.a.createElement(I, {
						className: k.a.Subreddit,
						discoveryUnit: M,
						key: e,
						subredditId: e
					})) : B), t.length > F && i.a.createElement(n.a, {
						to: s
					}, i.a.createElement(l.q, {
						className: k.a.SeeMore,
						onClick: this.onSeeMoreCommunities
					}, R._("See more", null, {
						hk: "2qkY6H"
					}))))
				}
			}
			t.a = Object(d.c)(H)
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
				i = s.n(r),
				n = s("./src/reddit/components/SidebarContainer/index.tsx"),
				o = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				a = s("./src/reddit/components/TopicSidebar/index.m.less"),
				c = s.n(a);
			t.a = e => {
				const {
					children: t,
					className: s
				} = e;
				return i.a.createElement(n.a, {
					className: s
				}, t, i.a.createElement(o.a, {
					className: c.a.StickyBottom
				}))
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return T
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "b", (function() {
				return O
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/gold/tooltips.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				u = s("./src/reddit/actions/survey/index.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/components/PostList/Placeholder.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				v = s("./src/reddit/selectors/experiments/survey.ts"),
				x = s("./src/reddit/selectors/listings.ts"),
				_ = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/selectors/tracking.ts");

			function T() {
				return Object(m.u)({
					currentProfileName: m.i,
					isCommentPermalink: m.w,
					isCommentsPage: m.x,
					isFrontpage: m.z,
					isProfilePostListing: m.K,
					isTopicPage: m.P,
					pageLayer: e => e
				})
			}
			const S = T(),
				C = {
					apiError: x.c,
					apiPending: x.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(m.Q)(e, t),
					loadMore: x.g,
					postsById: _.S,
					postIds: Object(n.a)((e, {
						listingKey: t,
						listingName: s,
						inSubredditOrProfile: r
					}) => Object(_.E)(e, t, s, r)),
					subredditsById: y.X,
					viewportDataLoaded: E.a,
					pageReferrer: m.T,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: v.d
				},
				L = Object(i.c)(C),
				O = e => ({
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
						})), e(d.K(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(d.z(t, s))
					},
					trackOnPostEnteredViewport: (t, s, r, i) => {
						e(d.N(t, r, i))
					},
					trackOnPostExitedViewport: (t, s, r, i, n) => {
						e(d.O(t, r, i, n))
					},
					surveyTriggerScrollCounted: () => e(Object(u.i)())
				}),
				P = e => Object(b.b)({
					...e
				}),
				I = (e, t, s, r) => {
					const {
						listingKey: i,
						hostPostData: n,
						listingBelowVariant: o
					} = r;
					return Object(h.h)(e, t, "post", i, n, o, void 0)
				},
				j = Object(r.b)(L, O, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: P,
					postClickEventFactory: I
				}));
			t.a = e => Object(p.c)(S(j(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/subscription/index.ts"),
				o = s("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				a = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(i.c)({
				isInJoinOptimizationsExperiment: e => Object(o.a)(e) || Object(o.b)(e) || Object(o.c)(e) || Object(o.d)(e),
				userIsSubscriber: a.cb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(n.d([t], !0)),
				onSubscriptionsRequested: () => e(n.e()),
				onUnsubscribe: () => e(n.d([t], !1))
			}))
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r);
			t.a = i.a.createContext({})
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./src/reddit/models/WhitelistStatus/index.ts");
			const i = (e, t) => {
				const s = e.some(e => e.isNSFW),
					i = t.some(e => e.wls === r.b.NO_ADS);
				return !s && !i
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r);

			function n() {
				return (n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => i.a.createElement("svg", n({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), i.a.createElement("g", null, i.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, s) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = s.n(o);
			t.a = e => i.a.createElement("svg", {
				className: Object(n.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, i.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), i.a.createElement("polygon", {
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
				i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/pages/ErrorPages/index.m.less"),
				c = s.n(a);
			const d = ({
					message: e
				}) => n.a.createElement("div", {
					className: c.a.container
				}, n.a.createElement("h3", {
					className: c.a.title
				}, e || r.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), n.a.createElement(o.m, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, r.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				l = ({
					message: e
				}) => n.a.createElement("div", {
					className: c.a.container
				}, n.a.createElement("h3", {
					className: c.a.title
				}, e || r.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), n.a.createElement(o.m, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, r.fbt._("Go Home", null, {
					hk: "3E9E1g"
				})))
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
				i = s.n(r),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeListingKey/index.ts"),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/pages/topic.ts"),
				u = s("./src/reddit/components/ListingPostList/index.tsx"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				m = s("./src/reddit/icons/svgs/Search/index.tsx"),
				b = s("./src/reddit/components/RelatedTopicList/RelatedTopic/index.m.less"),
				h = s.n(b);
			var g = e => {
					const {
						topic: t
					} = e;
					return i.a.createElement("span", {
						className: h.a.Container
					}, i.a.createElement(p.a, {
						className: h.a.Link,
						title: t.name,
						to: t.url
					}, i.a.createElement("span", {
						className: h.a.IconContainer
					}, i.a.createElement(m.a, null)), i.a.createElement("span", {
						className: h.a.Name
					}, t.namePlural)))
				},
				f = s("./src/reddit/components/SEOTitle/index.tsx"),
				v = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = s("./src/reddit/components/RelatedTopicList/index.m.less"),
				_ = s.n(x);

			function y(e) {
				const {
					children: t,
					limit: s,
					title: r,
					topics: n
				} = e;
				return n.length ? i.a.createElement(v.a, {
					className: _.a.Container
				}, r && i.a.createElement("div", {
					className: _.a.Title
				}, i.a.createElement(f.b, {
					type: f.a.Widget
				}, r)), i.a.createElement("div", {
					className: _.a.RelatedTopicList
				}, n.slice(0, s).map(e => i.a.createElement(g, {
					key: e.id,
					topic: e
				}))), t) : null
			}
			var E = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				T = s("./src/reddit/components/TopicSidebar/index.tsx"),
				S = s("./src/reddit/components/TopicSidebar/SubredditList/index.tsx"),
				C = s("./src/reddit/constants/listings.ts"),
				L = s("./src/reddit/constants/postLayout.ts"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				P = s("./src/reddit/helpers/trackers/screenview.ts"),
				I = s("./src/reddit/layout/page/Listing/index.tsx"),
				j = s("./src/reddit/pages/ErrorPages/index.tsx"),
				N = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				w = s("./src/reddit/controls/Button/index.tsx"),
				k = s("./src/reddit/pages/Topic/TopicHeader/TopicTab/index.m.less"),
				R = s.n(k);
			class F extends i.a.Component {
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
					return r.includes(s) ? i.a.createElement("div", {
						className: Object(o.a)(R.a.Tab, {
							[R.a.ActiveTab]: s === e
						}),
						onClick: this.onClick
					}, t) : null
				}
			}
			var B = F,
				M = s("./src/reddit/pages/Topic/TopicHeader/index.m.less"),
				H = s.n(M);

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var W;
			! function(e) {
				e.Communities = "communities", e.Posts = "posts", e.RelatedTopics = "relatedTopics"
			}(W || (W = {}));
			class D extends i.a.Component {
				renderSubtitleContent() {
					const {
						parentRelatedTopics: e
					} = this.props;
					return e.length ? i.a.createElement("ul", {
						className: H.a.parentRelatedTopics
					}, e.map(({
						namePlural: e,
						url: t
					}, s) => i.a.createElement("li", {
						key: s
					}, i.a.createElement(p.a, {
						className: H.a.link,
						to: t
					}, e)))) : V._("Topic on Reddit", null, {
						hk: "3gTFev"
					})
				}
				render() {
					const {
						activeTab: e,
						className: t,
						layout: s,
						onTabClick: r,
						tabs: n,
						topicName: a
					} = this.props, c = {
						activeTab: e,
						onTabClick: r,
						tabs: n
					};
					return i.a.createElement("div", {
						className: Object(o.a)(H.a.Container, t)
					}, i.a.createElement("div", {
						className: Object(o.a)(H.a.Content, s === L.g.Large ? H.a.cardWidth : H.a.fullWidth)
					}, i.a.createElement("div", {
						className: H.a.Header
					}, i.a.createElement("div", {
						className: H.a.Title
					}, i.a.createElement(f.b, {
						type: f.a.TopicHeader
					}, a)), i.a.createElement("div", {
						className: H.a.Subtitle
					}, this.renderSubtitleContent())), i.a.createElement("div", {
						className: H.a.Tabs
					}, i.a.createElement(B, A({
						tab: W.Posts
					}, c), V._("Posts", null, {
						hk: "3RLrle"
					})), i.a.createElement(B, A({
						tab: W.Communities
					}, c), V._("Communities", null, {
						hk: "KIwd1"
					})), i.a.createElement(B, A({
						tab: W.RelatedTopics
					}, c), V._("Related Topics", null, {
						hk: "4go2cr"
					})))))
				}
			}
			var U = D,
				J = s("./src/reddit/pages/Topic/Relationship/index.m.less"),
				G = s.n(J);
			const {
				fbt: z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), K = 5;
			class q extends i.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							openTab: e,
							relationshipIndex: t
						} = this.props;
						e(W.RelatedTopics, t)
					}
				}
				render() {
					const {
						namePlural: e,
						relatedTopics: t
					} = this.props.relationship;
					return i.a.createElement(y, {
						limit: K,
						title: e,
						topics: t
					}, this.renderSeeMoreButton())
				}
				renderSeeMoreButton() {
					const {
						namePlural: e,
						relatedTopics: t
					} = this.props.relationship;
					return t.length < K ? null : i.a.createElement(N.a, {
						onClick: this.onClick,
						to: "#"
					}, i.a.createElement(w.q, {
						className: G.a.SeeAllRelatedTopics
					}, z._("See all {=[Topic name plural]}", [z._param("=[Topic name plural]", i.a.createElement("span", {
						className: G.a.TopicName
					}, z._("{Topic name plural}", [z._param("Topic name plural", e)], {
						hk: "27C3n9"
					})))], {
						hk: "uH0jh"
					})))
				}
			}
			var Q = q,
				Y = s("./src/lib/prettyPrintNumber/index.ts"),
				Z = s("./src/reddit/components/Flair/index.tsx"),
				X = s("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = s("./src/reddit/components/SubscribeButton/index.tsx"),
				ee = s("./src/reddit/constants/posts.ts"),
				te = s("./src/reddit/helpers/name/index.ts"),
				se = s("./src/reddit/models/Flair/index.ts"),
				re = s("./src/reddit/selectors/subreddit.ts"),
				ie = s("./src/reddit/selectors/user.ts"),
				ne = s("./src/reddit/pages/Topic/SubredditList/Subreddit/index.m.less"),
				oe = s.n(ne);
			const {
				fbt: ae
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ce = Object(n.c)({
				isLoggedIn: ie.K,
				subreddit: re.Q,
				subredditAboutInfo: (e, {
					subredditId: t
				}) => e.subreddits.about[t]
			}), de = Object(d.b)(ce), le = {
				text: "nsfw",
				type: se.f.Nsfw
			};
			var ue = de(e => {
					const {
						className: t,
						isLoggedIn: s,
						subreddit: r,
						subredditAboutInfo: n
					} = e, a = Object(te.c)(r.displayText || r.name);
					return i.a.createElement("div", {
						className: Object(o.a)(oe.a.Container, t)
					}, i.a.createElement(X.b, {
						className: oe.a.Icon,
						subredditOrProfile: r
					}), i.a.createElement("div", {
						className: oe.a.Text
					}, i.a.createElement(p.a, {
						className: oe.a.Link,
						to: r.url
					}, i.a.createElement("div", {
						className: oe.a.Name
					}, a), i.a.createElement("div", {
						className: oe.a.Meta
					}, i.a.createElement("div", {
						className: oe.a.Members
					}, ae._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [ae._plural(r.subscribers, "subscribers count", Object(Y.b)(r.subscribers))], {
						hk: "48BXj1"
					})), r.isNSFW && i.a.createElement(Z.b, {
						flair: le
					}))), i.a.createElement("div", {
						className: oe.a.About
					}, n.publicDescription || ae._("Welcome to {subreddit name}", [ae._param("subreddit name", a)], {
						hk: "vZ7VH"
					})), i.a.createElement(p.a, {
						className: oe.a.VisitLink,
						to: r.url
					}, ae._("Visit", null, {
						hk: "2z3clp"
					}))), i.a.createElement($.a, {
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
				pe = s("./src/reddit/pages/Topic/SubredditList/index.m.less"),
				me = s.n(pe);

			function be(e) {
				const {
					subredditIds: t = []
				} = e;
				return i.a.createElement("div", {
					className: me.a.SubredditList
				}, t.map(e => i.a.createElement(ue, {
					className: me.a.Subreddit,
					key: e,
					subredditId: e
				})))
			}
			var he = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				ge = s("./src/reddit/pages/Topic/TabHeader/RelationshipTab/index.m.less"),
				fe = s.n(ge);
			class ve extends i.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							index: e,
							onTabClick: t
						} = this.props;
						t(W.RelatedTopics, e)
					}
				}
				render() {
					const {
						activeIndex: e,
						relationship: t,
						index: s
					} = this.props, r = s === e;
					return i.a.createElement("div", {
						className: Object(o.a)(fe.a.RelationshipTab, {
							[fe.a.mActive]: r
						}),
						onClick: this.onClick
					}, t.namePlural)
				}
			}
			var xe = ve,
				_e = s("./src/reddit/pages/Topic/TabHeader/index.m.less"),
				ye = s.n(_e);
			const {
				fbt: Ee
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class Te extends i.a.Component {
				constructor() {
					super(...arguments), this.renderRelatedTopic = (e, t) => {
						const {
							activeRelationshipIndex: s,
							onTabClick: r
						} = this.props;
						return i.a.createElement(xe, {
							activeIndex: s,
							index: t,
							key: e.slug,
							onTabClick: r,
							relationship: e
						})
					}, this.renderRelatedTopicsHeader = () => i.a.createElement("div", {
						className: ye.a.TabHeader
					}, this.props.topic.childRelationships.map(this.renderRelatedTopic)), this.renderTitle = () => {
						const {
							activeTab: e,
							topicNamePlural: t
						} = this.props;
						return e === W.Posts ? Ee._("Posts about {topic name}", [Ee._param("topic name", t)], {
							hk: "3AGfU"
						}) : e === W.Communities ? Ee._("Communities related to {topic name}", [Ee._param("topic name", t)], {
							hk: "jKM0V"
						}) : null
					}
				}
				render() {
					const {
						activeLayout: e,
						activeTab: t
					} = this.props, s = t === W.Posts;
					return t === W.RelatedTopics ? this.renderRelatedTopicsHeader() : i.a.createElement("div", {
						className: ye.a.TabHeader
					}, i.a.createElement("div", {
						className: ye.a.TabTitle
					}, i.a.createElement(f.b, {
						type: f.a.Widget
					}, this.renderTitle())), s && i.a.createElement(he.a, {
						className: ye.a.PostsLayoutSwitch,
						layout: L.e[e]
					}))
				}
			}
			var Se = Te,
				Ce = s("./src/reddit/selectors/topic.ts"),
				Le = s("./src/reddit/pages/Topic/index.m.less"),
				Oe = s.n(Le);
			const {
				fbt: Pe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ie = Object(O.u)(), je = (e, t) => t.match.params.sort || a.W, Ne = e => {
				const t = [];
				return e ? (e.hasPosts && t.push(W.Posts), e.hasSubreddits && t.push(W.Communities), e.childRelationships.length && t.push(W.RelatedTopics), t) : t
			}, we = Object(d.b)(() => Object(n.a)((e, t) => Object(Ce.d)(e, t.match.params.topicSlug), (e, t) => Object(Ce.e)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Ce.c)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Ce.a)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Ce.b)(e, {
				topicSlug: t.match.params.topicSlug
			}), O.Q, je, e => {
				var t;
				return null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status
			}, (e, t, s, r, i, n, o, a) => ({
				layout: n,
				parentRelatedTopics: r,
				siblingRelatedTopics: i,
				sort: o,
				status: a || 200,
				tabs: Ne(s),
				timeSort: void 0,
				topic: s,
				topicName: e,
				topicNamePlural: t
			})), (e, t) => ({
				onLoadMorePosts: () => e(Object(l.morePostsRequested)(t.match.params))
			})), ke = (e, t) => e === W.Communities ? L.g.Large : t;
			class Re extends i.a.Component {
				constructor(e) {
					super(e), this.openTab = (e, t = 0) => {
						this.setState({
							activeLayout: ke(e, this.props.layout),
							activeRelationshipIndex: t,
							activeTab: e
						}), window.scrollTo(0, 0)
					}, this.openCommunitiesTab = () => {
						this.openTab(W.Communities)
					}, this.onViewed = (e, t) => {
						var s;
						return Object(P.f)(Object(c.a)(C.b.Topic, null, {
							topicSlug: null === (s = this.props.topic) || void 0 === s ? void 0 : s.slug
						}), this.props.sort, t, e, this.props.timeSort)
					}, this.renderNoPosts = () => null, this.renderRelationship = (e, t) => i.a.createElement(Q, {
						key: e.slug,
						openTab: this.openTab,
						relationship: e,
						relationshipIndex: t
					}), this.state = {
						activeLayout: L.g.Large,
						activeRelationshipIndex: 0,
						activeTab: void 0
					}
				}
				static getDerivedStateFromProps(e, t) {
					const s = t.activeTab && e.tabs.includes(t.activeTab) && t.activeTab,
						r = e.pageLayer && e.pageLayer.queryParams.activeTab,
						i = r && e.tabs.includes(r) && r,
						n = e.tabs[0],
						o = s || i || n;
					return {
						activeLayout: ke(o, e.layout),
						activeRelationship: t.activeRelationshipIndex,
						activeTab: o
					}
				}
				componentDidUpdate(e) {
					var t, s, r;
					const i = null === (t = e.topic) || void 0 === t ? void 0 : t.id,
						n = null === (s = this.props.topic) || void 0 === s ? void 0 : s.id;
					i && n !== (null === (r = e.topic) || void 0 === r ? void 0 : r.id) && this.openTab(this.props.tabs[0])
				}
				render() {
					const {
						className: e,
						match: t,
						parentRelatedTopics: s,
						siblingRelatedTopics: r,
						status: n,
						tabs: a,
						topic: d,
						topicName: l,
						topicNamePlural: p
					} = this.props, m = t.params.topicSlug, b = Object(c.a)(C.b.Topic, null, {
						topicSlug: m
					}), {
						activeLayout: h,
						activeRelationshipIndex: g,
						activeTab: f
					} = this.state, v = C.b.Topic;
					if (404 === n) return i.a.createElement(j.b, null);
					if (500 === n) return i.a.createElement(j.b, {
						message: Pe._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "3SZaDI"
						})
					});
					if (!d) return null;
					const x = d.childRelationships[g],
						_ = x && x.relatedTopics || [],
						L = i.a.createElement(i.a.Fragment, null, i.a.createElement(Se, {
							activeLayout: h,
							activeRelationshipIndex: g,
							activeTab: f,
							onTabClick: this.openTab,
							topic: d,
							topicName: l,
							topicNamePlural: p
						}), i.a.createElement("div", {
							className: Object(o.a)(Oe.a.TopicTab, {
								[Oe.a.active]: f === W.Communities
							})
						}, i.a.createElement(be, {
							subredditIds: d.subredditIds
						})), i.a.createElement("div", {
							className: Object(o.a)(Oe.a.TopicTab, {
								[Oe.a.active]: f === W.Posts
							})
						}, f === W.Posts && i.a.createElement(u.a, {
							forcedLayout: h,
							listingKey: b,
							listingName: v,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderNoPosts,
							onLoadMore: this.props.onLoadMorePosts
						})), i.a.createElement("div", {
							className: Object(o.a)(Oe.a.TopicTab, {
								[Oe.a.active]: f === W.RelatedTopics
							})
						}, i.a.createElement(y, {
							topics: _
						}))),
						O = f !== W.RelatedTopics,
						P = f !== W.Communities && a.includes(W.Communities),
						N = i.a.createElement("div", {
							className: Oe.a.WidgetsContainer
						}, P && i.a.createElement(S.a, {
							onSeeMoreCommunities: this.openCommunitiesTab,
							subredditIds: d.subredditIds,
							topicUrl: d.url
						}), O && d.childRelationships.map(this.renderRelationship), i.a.createElement(y, {
							limit: 5,
							title: Pe._("Similar Topics", null, {
								hk: "1Kv3xR"
							}),
							topics: r
						}));
					return i.a.createElement(E.a, null, i.a.createElement(I.a, {
						className: Object(o.a)(Oe.a.Container, e),
						content: L,
						fitPageToContent: !0,
						forcedLayout: h,
						sidebars: [null, i.a.createElement(T.a, {
							key: "right",
							className: Oe.a.SidebarRight,
							listingName: v
						}, N)],
						navBar: i.a.createElement(U, {
							activeTab: f,
							layout: h,
							onTabClick: this.openTab,
							parentRelatedTopics: s,
							tabs: a,
							topicName: l
						})
					}))
				}
			}
			t.default = Ie(we(Re))
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
				return p
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "g", (function() {
				return _
			})), s.d(t, "d", (function() {
				return y
			}));
			var r = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/featureFlags/index.ts"),
				n = s("./src/reddit/selectors/posts.ts"),
				o = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(o.Q)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				u = [],
				p = Object(r.a)((e, t) => {
					const s = m(e, t);
					if (!s) return u;
					const r = Object(o.U)(e, {
						subredditName: s.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : u
				}),
				m = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(o.Q)(e, {
						subredditId: s
					}) : null
				},
				b = (e, t, s, r, i) => {
					const o = i.find(e => e <= t) || -1,
						a = i.find(e => e > t) || 1 / 0;
					return t !== a && t !== o && (!(o + s > t) && (!(t + s > a) && !((e, t, s) => {
						const r = s[t - 1],
							i = s[t],
							o = i && Object(n.H)(e, {
								postId: r
							}) || null,
							a = i && Object(n.H)(e, {
								postId: i
							}) || null;
						return o && o.isSponsored || a && a.isSponsored
					})(e, t, r)))
				},
				h = [3],
				g = Object(r.a)((e, {
					existingDUPositions: t,
					listingProps: s
				}) => {
					const r = t.slice().sort();
					let i = -1;
					const o = Object(n.A)(e, {
							listingKey: s.listingKey
						}),
						a = [];
					return h.forEach(t => {
						let s = i + t;
						if (!(s >= o.length)) {
							for (; s < o.length && !b(e, s, t, o, r);) s += 1;
							s < o.length && (a.push(s), i = s)
						}
					}), a
				}),
				f = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				v = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				x = e => e.focusedVerticals.category,
				_ = e => e.focusedVerticals.lastLoadedEnv,
				y = e => {
					const t = Object(a.J)(e),
						s = i.d.geoSubredditRecommendationDULoggedIn(e),
						r = i.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && r
				}
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"da00c26e96b1"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Topic.a567ae7ffcd7c3e7e3e2.js.map