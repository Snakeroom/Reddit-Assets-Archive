// https://www.redditstatic.com/desktop2x/Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit.1a19c1e7154c3add732c.js
// Retrieved at 12/1/2021, 11:20:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"], {
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
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, n) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== n[t - 1]
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (s(e, "resize", this._checkForIntersections, !0), s(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, o.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, o.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							n = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(o) {
							var s = o.element,
								i = a(s),
								c = this._rootContainsTarget(s),
								l = o.entry,
								d = t && c && this._computeTargetAndRootIntersection(s, n),
								u = o.entry = new r({
									time: e.performance && performance.now && performance.now(),
									target: s,
									boundingClientRect: i,
									rootBounds: n,
									intersectionRect: d
								});
							l ? t && c ? this._hasCrossedThreshold(l, u) && this._queuedEntries.push(u) : l && l.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, o.prototype._computeTargetAndRootIntersection = function(n, r) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var o, s, i, c, d, u, p, h, m = a(n), b = l(n), f = !1; !f;) {
								var w = null,
									g = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == g.display) return;
								if (b == this.root || b == t ? (f = !0, w = r) : b != t.body && b != t.documentElement && "visible" != g.overflow && (w = a(b)), w && (o = w, s = m, i = void 0, c = void 0, d = void 0, u = void 0, p = void 0, h = void 0, i = Math.max(o.top, s.top), c = Math.min(o.bottom, s.bottom), d = Math.max(o.left, s.left), u = Math.min(o.right, s.right), h = c - i, !(m = (p = u - d) >= 0 && h >= 0 && {
										top: i,
										bottom: c,
										left: d,
										right: u,
										width: p,
										height: h
									}))) break;
								b = l(b)
							}
							return m
						}
					}, o.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
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
					}, o.prototype._expandRectByRootMargin = function(e) {
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
					}, o.prototype._hasCrossedThreshold = function(e, t) {
						var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (n !== r)
							for (var o = 0; o < this.thresholds.length; o++) {
								var s = this.thresholds[o];
								if (s == n || s == r || s < n != s < r) return !0
							}
					}, o.prototype._rootIsInDom = function() {
						return !this.root || c(t, this.root)
					}, o.prototype._rootContainsTarget = function(e) {
						return c(this.root || t, e)
					}, o.prototype._registerInstance = function() {
						n.indexOf(this) < 0 && n.push(this)
					}, o.prototype._unregisterInstance = function() {
						var e = n.indexOf(this); - 1 != e && n.splice(e, 1)
					}, e.IntersectionObserver = o, e.IntersectionObserverEntry = r
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
						o = r.width * r.height;
					this.intersectionRatio = n ? o / n : this.isIntersecting ? 1 : 0
				}

				function o(e, t) {
					var n, r, o, s = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (s.root && 1 != s.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, o = null, function() {
						o || (o = setTimeout((function() {
							n(), o = null
						}), r))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(s.rootMargin), this.thresholds = this._initThresholds(s.threshold), this.root = s.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function s(e, t, n, r) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
				}

				function i(e, t, n, r) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
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
						n = l(n)
					}
					return !1
				}

				function l(e) {
					var t = e.parentNode;
					return t && 11 == t.nodeType && t.host ? t.host : t
				}
			}(window, document)
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseTimes.js"),
				o = n("./node_modules/lodash/_castFunction.js"),
				s = n("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				a = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = s(e)) < 1 || e > i) return [];
				var n = a,
					l = c(e, a);
				t = o(t), e -= a;
				for (var d = r(l, t); ++n < e;) t(n);
				return d
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, n, r) {
				var o = n ? n.call(r, e, t) : void 0;
				if (void 0 !== o) return !!o;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var s = Object.keys(e),
					i = Object.keys(t);
				if (s.length !== i.length) return !1;
				for (var a = Object.prototype.hasOwnProperty.bind(t), c = 0; c < s.length; c++) {
					var l = s[c];
					if (!a(l)) return !1;
					var d = e[l],
						u = t[l];
					if (!1 === (o = n ? n.call(r, d, u, l) : void 0) || void 0 === o && d !== u) return !1
				}
				return !0
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, n) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asTooltip.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/actions/tooltip.ts"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/postLayout.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/contexts/Tooltip.ts"),
				w = n("./src/reddit/controls/Dropdown/index.tsx"),
				g = n("./src/reddit/controls/Dropdown/Row.tsx"),
				_ = n("./src/reddit/icons/fonts/index.tsx"),
				S = n("./src/reddit/selectors/telemetry.ts"),
				y = n("./src/reddit/selectors/tooltip.ts"),
				k = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				O = n.n(k);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const C = "view--layout--FUE",
				E = "LayoutSwitch--picker",
				x = Object(c.a)(w.a),
				N = {
					[m.d.Card]: function(e) {
						return s.a.createElement(_.a, v({}, e, {
							name: "view_card"
						}))
					},
					[m.d.Classic]: function(e) {
						return s.a.createElement(_.a, v({}, e, {
							name: "view_classic"
						}))
					},
					[m.d.Compact]: function(e) {
						return s.a.createElement(_.a, v({}, e, {
							name: "view_compact"
						}))
					}
				},
				I = {
					[m.d.Card]: () => r.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[m.d.Classic]: () => r.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[m.d.Compact]: () => r.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[m.d.Search]: () => r.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				T = Object(b.u)(),
				j = Object(a.c)({
					dropdownIsOpen: Object(y.b)(E),
					postLayout: b.Q,
					redditStyle: b.C
				}),
				D = Object(i.b)(j, e => ({
					onListingLayoutChange: (t, n) => e(Object(u.x)(t, n)),
					openDropdown: () => e(Object(p.h)({
						tooltipId: E
					}))
				}));
			class R extends s.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: n,
							sendEvent: r,
							subredditId: o
						} = this.props;
						t ? t(e) : (n(e, o), r(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(S.screen)(t),
							subreddit: Object(S.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: r,
							postLayout: o
						} = this.props, i = n || m.e[o], a = e === i, c = N[e], d = I[e];
						return s.a.createElement(g.b, v({}, t, {
							className: Object(l.a)(O.a.LayoutItem, {
								[O.a.selected]: a,
								[O.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: d(),
							iconWrapperClassName: O.a.LayoutItemIconWrapper,
							isSelected: a,
							noHover: a,
							onClick: a ? void 0 : () => this.changeLayout(e),
							textClassName: O.a.LayoutItemTextClassName
						}), s.a.createElement(c, {
							className: O.a.LayoutIcon,
							onClick: a ? void 0 : r,
							isFilled: a && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return s.a.createElement(x, v({}, e, {
							className: O.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: O.a.DropdownRow,
							rowIconClassName: O.a.DropdownRowIcon,
							rowSelectedClassName: O.a.DropdownRowSelected,
							tooltipId: E
						}), this.renderItem(m.d.Card), this.renderItem(m.d.Classic), this.renderItem(m.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: r
					} = this.props, o = t || m.e[r];
					return s.a.createElement("div", {
						className: Object(l.a)(O.a.Container, e),
						id: C
					}, s.a.createElement("div", {
						className: O.a.DropdownContainer,
						onClick: n
					}, this.renderItem(o, {
						id: E,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), s.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = T(D(Object(h.c)(Object(d.a)(R))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/listingSort/index.ts"),
				c = n("./src/reddit/actions/preferences.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				p = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				h = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/addQueryParams/index.ts")),
				m = n("./src/lib/constants/index.ts"),
				b = n("./node_modules/react-router-redux/es/index.js"),
				f = n("./node_modules/reselect/es/index.js"),
				w = n("./src/reddit/actions/tooltip.ts"),
				g = n("./node_modules/fbt/lib/FbtPublic.js"),
				_ = n("./src/higherOrderComponents/asTooltip.tsx"),
				S = n("./src/reddit/constants/listingSorts.ts"),
				y = n("./src/reddit/contexts/Tooltip.ts"),
				k = n("./src/reddit/controls/Dropdown/index.tsx"),
				O = n("./src/reddit/controls/Dropdown/Row.tsx"),
				v = n("./src/reddit/helpers/path/index.ts"),
				C = n("./src/reddit/helpers/trackers/navigation.ts"),
				E = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				x = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				N = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				I = n("./src/reddit/selectors/tooltip.ts"),
				T = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				D = n("./src/reddit/components/ListingSort/index.m.less"),
				R = n.n(D),
				L = n("./src/lib/lessComponent.tsx");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const A = "ListingSort--SortPicker",
				W = Object(_.a)(L.a.wrapped(k.a, "Dropdown", R.a)),
				B = L.a.wrapped(j.a, "ListingSortIcon", R.a),
				M = (L.a.wrapped(E.b, "DropdownTriangle", R.a), L.a.div("Title", R.a)),
				H = L.a.wrapped(e => o.a.createElement(O.b, P({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", R.a),
				F = ({
					disabled: e,
					...t
				}) => o.a.createElement("div", P({}, t, {
					className: Object(i.a)(R.a.SortWrapper, t.className, {
						[R.a.isDisabled]: e
					})
				})),
				U = L.a.div("DropdownRowDisabled", R.a),
				z = Object(d.u)({
					isFrontpage: d.z,
					isProfilePage: d.I,
					pageLayer: e => e
				}),
				G = Object(f.c)({
					isAwardListingExperimentEnabled: N.a,
					isBestSortPopularEnabled: x.a,
					user: T.k,
					dropdownIsOpen: (e, t) => Object(I.b)(t.dropdownId || A)(e),
					isPopularPage: d.E
				}),
				K = Object(s.b)(G, (e, {
					dropdownId: t,
					pageLayer: n
				}) => ({
					onOpenDropdown: () => e(Object(w.h)({
						tooltipId: t || A
					}))
				}));
			var Y = L.a.wrapped(z(K(Object(l.c)(e => o.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && o.a.createElement(M, null, g.fbt._("Sort", null, {
					hk: "2BfINq"
				})), o.a.createElement(F, {
					disabled: e.disabled
				}, e.children || o.a.createElement(H, {
					className: e.buttonClassName,
					displayText: Object(S.a)(e.sort),
					id: e.dropdownId || A,
					showDropdownTriangle: !0
				}, o.a.createElement(B, {
					sort: e.sort
				}))), o.a.createElement(y.a.Consumer, null, t => o.a.createElement(W, P({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || A
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? o.a.createElement(U, null, g.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, r, o) => {
					const s = [m.W.HOT, m.W.NEW, m.W.TOP, m.W.RISING];
					return (e && (n || r) || t && r) && s.unshift(m.W.BEST), t && o && s.splice(3, 0, m.W.AWARDED), s
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => o.a.createElement(O.b, {
					className: Object(i.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(S.a)(t),
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(C.a)(t))
					},
					href: e.isProfilePage ? Object(h.a)(e.baseUrl, {
						sort: t
					}) : Object(v.a)(e.baseUrl, `${t}/`),
					isSelected: e.sort === t,
					key: t
				}, o.a.createElement(B, {
					className: e.rowIconClassName,
					sort: t
				}))))))))), "ListingSort", R.a),
				q = n("./src/reddit/constants/parameters.ts");
			const V = e => {
					const t = X[e];
					return t && t() || ""
				},
				X = {
					[m.cc.AllStates]: () => g.fbt._("All", null, {
						hk: "3FfdRL"
					}),
					[m.cc.Alaska]: () => g.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[m.cc.Alabama]: () => g.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[m.cc.Arkansas]: () => g.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[m.cc.Arizona]: () => g.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[m.cc.California]: () => g.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[m.cc.Colorado]: () => g.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[m.cc.Connecticut]: () => g.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[m.cc.DistrictOfColumbia]: () => g.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[m.cc.Delaware]: () => g.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[m.cc.Florida]: () => g.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[m.cc.Georgia]: () => g.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[m.cc.Hawaii]: () => g.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[m.cc.Iowa]: () => g.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[m.cc.Idaho]: () => g.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[m.cc.Illinois]: () => g.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[m.cc.Indiana]: () => g.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[m.cc.Kansas]: () => g.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[m.cc.Kentucky]: () => g.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[m.cc.Louisiana]: () => g.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[m.cc.Massachusetts]: () => g.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[m.cc.Maryland]: () => g.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[m.cc.Maine]: () => g.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[m.cc.Michigan]: () => g.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[m.cc.Minnesota]: () => g.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[m.cc.Missouri]: () => g.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[m.cc.Mississippi]: () => g.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[m.cc.Montana]: () => g.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[m.cc.NorthCarolina]: () => g.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[m.cc.NorthDakota]: () => g.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[m.cc.Nebraska]: () => g.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[m.cc.NewHampshire]: () => g.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[m.cc.NewJersey]: () => g.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[m.cc.NewMexico]: () => g.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[m.cc.Nevada]: () => g.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[m.cc.NewYork]: () => g.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[m.cc.Ohio]: () => g.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[m.cc.Oklahoma]: () => g.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[m.cc.Oregon]: () => g.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[m.cc.Pennsylvania]: () => g.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[m.cc.RhodeIsland]: () => g.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[m.cc.SouthCarolina]: () => g.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[m.cc.SouthDakota]: () => g.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[m.cc.Tennessee]: () => g.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[m.cc.Texas]: () => g.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[m.cc.Utah]: () => g.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[m.cc.Virginia]: () => g.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[m.cc.Vermont]: () => g.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[m.cc.Washington]: () => g.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[m.cc.Wisconsin]: () => g.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[m.cc.WestVirginia]: () => g.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[m.cc.Wyoming]: () => g.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var J = n("./src/reddit/components/StateSort/index.m.less"),
				Q = n.n(J);

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const $ = L.a.wrapped(k.a, "_Dropdown", Q.a),
				ee = Object(_.a)($),
				te = e => {
					return e.indexOf("_") > 0 && re(e) === m.A.UnitedStates
				},
				ne = e => {
					if (te(e)) {
						return e.split("_")[1]
					}
					return m.cc.AllStates
				},
				re = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				oe = e => {
					const t = re(e),
						n = ne(e);
					return te(e) ? `${t}_${n}` : t
				},
				se = Object(d.u)(),
				ie = Object(f.c)({
					dropdownIsOpen: Object(I.b)("StateSort--StateSortPicker")
				}),
				ae = Object(s.b)(ie, e => ({
					onOpenDropdown: () => e(Object(w.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(b.b)(t)), e(Object(c.v)(m.A.UnitedStates + "_" + n))
					}
				}));
			var ce = L.a.wrapped(se(ae(e => {
				const t = `${e.baseUrl}?${q.h}=${m.A.UnitedStates}`;
				return o.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, o.a.createElement(F, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, o.a.createElement(H, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : V(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), o.a.createElement(y.a.Consumer, null, n => o.a.createElement(ee, Z({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(m.cc).map(n => {
					const r = m.cc[n];
					return o.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === m.cc.AllStates ? t : `${t}_${e}`)(r), oe(r))
					}, o.a.createElement(O.b, {
						className: Object(i.a)(e.rowClassName, e.sort === r ? e.rowSelectedClassName : void 0),
						displayText: V(r),
						isSelected: e.sort === r
					}))
				}))))
			})), "Component", Q.a);
			const le = {
				[m.A.Everywhere]: () => g.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[m.A.UnitedStates]: () => g.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[m.A.Argentina]: () => g.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[m.A.Australia]: () => g.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[m.A.Bulgaria]: () => g.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[m.A.Canada]: () => g.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[m.A.Chile]: () => g.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[m.A.Colombia]: () => g.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[m.A.Croatia]: () => g.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[m.A.CzechRepublic]: () => g.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[m.A.Finland]: () => g.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[m.A.France]: () => g.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[m.A.Germany]: () => g.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[m.A.Greece]: () => g.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[m.A.Hungary]: () => g.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[m.A.Iceland]: () => g.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[m.A.India]: () => g.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[m.A.Ireland]: () => g.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[m.A.Italy]: () => g.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[m.A.Japan]: () => g.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[m.A.Malaysia]: () => g.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[m.A.Mexico]: () => g.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[m.A.NewZealand]: () => g.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[m.A.Philippines]: () => g.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[m.A.Poland]: () => g.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[m.A.Portugal]: () => g.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[m.A.PuertoRico]: () => g.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[m.A.Romania]: () => g.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[m.A.Serbia]: () => g.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[m.A.Singapore]: () => g.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[m.A.Spain]: () => g.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[m.A.Sweden]: () => g.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[m.A.Taiwan]: () => g.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[m.A.Thailand]: () => g.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[m.A.Turkey]: () => g.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[m.A.UnitedKingdom]: () => g.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var de = n("./src/reddit/constants/history.ts"),
				ue = n("./src/reddit/components/CountrySort/index.m.less"),
				pe = n.n(ue);

			function he() {
				return (he = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const me = "CountrySort--CountrySortPicker",
				be = Object(d.u)(),
				fe = Object(f.c)({
					dropdownIsOpen: Object(I.b)(me)
				});
			var we = be(Object(s.b)(fe, e => ({
					onCloseDropdown: t => e(Object(w.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(w.g)({
						tooltipId: t
					})),
					onClickLink: (t, n) => {
						e(Object(b.b)(t, {
							[de.b.FeedLoadReason]: de.a.GeoModeChange
						})), e(Object(c.v)(n))
					}
				}))(e => {
					const t = re(e.sort),
						n = ne(e.sort),
						r = `${e.baseUrl}?${q.h}=`;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(i.a)(pe.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(me) : e.onOpenDropdown(me)
					}, o.a.createElement(F, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, o.a.createElement(H, {
						className: e.buttonClassName,
						displayText: (() => t in le ? le[t]() : le[m.A.Everywhere]())(),
						id: me,
						showDropdownTriangle: !0
					})), o.a.createElement(y.a.Consumer, null, n => o.a.createElement(ee, he({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: me
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(m.A).map(n => {
						const s = m.A[n];
						return o.a.createElement("div", {
							key: s,
							onClick: () => e.onClickLink(`${r}${oe(s)}`, s)
						}, o.a.createElement(O.b, {
							className: Object(i.a)(e.rowClassName, t === s ? e.rowSelectedClassName : void 0),
							displayText: le[s](),
							isSelected: t === s
						}))
					})))), t === m.A.UnitedStates && o.a.createElement(ce, {
						baseUrl: e.baseUrl,
						buttonClassName: e.buttonClassName,
						className: e.stateSortClassName,
						disabled: e.disabled,
						dropdownClassName: e.dropdownClassName,
						rowClassName: e.rowClassName,
						rowSelectedClassName: e.rowSelectedClassName,
						showStateAbbreviations: e.showStateAbbreviations,
						sort: n,
						wrapperClassName: e.wrapperClassName
					}))
				})),
				ge = n("./node_modules/path-browserify/index.js"),
				_e = n.n(ge),
				Se = n("./src/reddit/components/TimeSort/index.m.less"),
				ye = n.n(Se);

			function ke() {
				return (ke = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Oe = Object(_.a)(k.a),
				ve = (e, t, n) => {
					let r = e.url;
					return e.urlParams.sort || Object(d.I)(e) || (r = _e.a.join(r, t)), Object(h.a)(r, {
						[q.A]: n
					})
				},
				Ce = L.a.div("ListingSortContainer", ye.a),
				Ee = Object(d.u)(),
				xe = Object(f.c)({
					dropdownIsOpen: Object(I.b)("TimeSort--SortPicker")
				});
			var Ne = Ee(Object(s.b)(xe, e => ({
					onOpenDropdown: () => e(Object(w.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(l.c)(e => o.a.createElement(Ce, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, o.a.createElement(F, {
					className: e.wrapperClassName,
					disabled: !1
				}, o.a.createElement(H, {
					className: e.buttonClassName,
					displayText: Object(S.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), o.a.createElement(y.a.Consumer, null, t => o.a.createElement(Oe, ke({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [m.fc.HOUR, m.fc.DAY, m.fc.WEEK, m.fc.MONTH, m.fc.YEAR, m.fc.ALL].map(t => o.a.createElement(O.b, {
					className: Object(i.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
					key: `time_sort_${t}`,
					displayText: Object(S.b)(t),
					href: ve(e.pageLayer, e.listingSort, t),
					isSelected: e.timeSort === t,
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(C.c)(t))
					}
				})))))))),
				Ie = n("./src/reddit/constants/listings.ts"),
				Te = n("./src/reddit/controls/Button/index.tsx"),
				je = n("./src/reddit/icons/fonts/index.tsx"),
				De = n("./src/reddit/selectors/meta.ts"),
				Re = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Le = n.n(Re);

			function Pe() {
				return (Pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Ae = new Set([m.W.CONTROVERSIAL, m.W.TOP]),
				We = new Set([m.W.CONTROVERSIAL, m.W.RISING]),
				Be = new Set([m.W.CONTROVERSIAL]),
				Me = "ListingSort--Overflow",
				He = Object(d.u)({
					isFrontpage: d.z,
					isProfilePage: d.I,
					pageLayer: e => e
				}),
				Fe = Object(f.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, x.a, T.k, d.E, N.a, De.i, (e, t, n, r, o, s, i) => {
					if (e) return {
						isPopularPage: o,
						sortOptions: e,
						locale: i
					};
					const a = [m.W.HOT, m.W.NEW, m.W.TOP, m.W.RISING];
					return (t && (r || n) || o && n) && a.unshift(m.W.BEST), o && s && a.splice(3, 0, m.W.AWARDED), {
						isPopularPage: o,
						sortOptions: a,
						locale: i
					}
				});
			class Ue extends o.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(C.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: n
						} = this.props;
						return n ? Object(h.a)(t, {
							sort: e
						}) : Object(v.a)(t, `${e}/`)
					}, this.renderSortButton = e => {
						const {
							sort: t
						} = this.props;
						return o.a.createElement(Te.t, {
							className: Object(i.a)(Le.a.SortLink, e === t && Le.a.selected),
							kind: Te.b.InternalLink,
							priority: Te.c.Plain,
							Icon: n => o.a.createElement(B, Pe({}, n, {
								className: Object(i.a)(Le.a.SortIcon, n.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(S.a)(e),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: n,
							isPopularPage: r,
							sort: s
						} = this.props, i = r && !!n && e === m.W.HOT && s === m.W.HOT;
						return o.a.createElement(o.a.Fragment, {
							key: e
						}, this.renderSortButton(e), i && o.a.createElement(we, {
							baseUrl: Ie.c[Ie.b.Popular],
							buttonClassName: Le.a.DropdownButton,
							className: Le.a.CountrySort,
							disabled: t,
							dropdownClassName: Le.a.Dropdown,
							rowClassName: Le.a.DropdownRow,
							rowSelectedClassName: Le.a.DropdownRowSelected,
							wrapperClassName: Le.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: n,
							stateSortClassName: Le.a.StateSort
						}))
					}
				}
				isLocaleDependentOverflowSort(e) {
					const {
						sort: t,
						isPopularPage: n,
						locale: r
					} = this.props;
					return !r.startsWith("en") && (n ? e === m.W.AWARDED && (t === m.W.HOT || t === m.W.TOP) : e === m.W.BEST && t === m.W.TOP)
				}
				isWideSortCurrentSelected(e) {
					const {
						sort: t
					} = this.props, n = new Set([m.W.TOP, m.W.NEW]);
					return Be.has(t) && n.has(e)
				}
				isOverflowSort(e) {
					return We.has(e) || this.isLocaleDependentOverflowSort(e) || this.isWideSortCurrentSelected(e)
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: n,
						sort: r,
						sortOptions: s,
						timeSort: a
					} = this.props, c = !t && Ae.has(r), l = We.has(r), d = s.filter(e => !this.isOverflowSort(e)), u = s.filter(e => this.isOverflowSort(e) && e !== r);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(Y, Pe({}, this.props, {
						buttonClassName: Le.a.DropdownButton,
						className: Object(i.a)(Le.a.SortDropdown, e),
						rowClassName: Le.a.DropdownRow,
						rowIconClassName: Le.a.DropdownRowIcon,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						showTitle: !1
					})), o.a.createElement("div", {
						className: Object(i.a)(Le.a.SortButtons, e)
					}, d.map(this.renderSort)), l && this.renderSort(r), c && o.a.createElement(Ne, {
						baseUrl: this.getSortUrl(r),
						buttonClassName: Le.a.DropdownButton,
						className: Le.a.TimeSort,
						dropdownClassName: Le.a.Dropdown,
						listingSort: r,
						onChange: n,
						rowClassName: Le.a.DropdownRow,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						timeSort: a || m.gc,
						wrapperClassName: Le.a.DropdownSortWrapper
					}), u.length > 0 && o.a.createElement(Y, Pe({}, this.props, {
						className: Object(i.a)(Le.a.SortOverflow, e),
						dropdownClassName: Le.a.Dropdown,
						dropdownId: Me,
						rowClassName: Le.a.DropdownRow,
						rowIconClassName: Le.a.DropdownRowIcon,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), o.a.createElement("button", {
						className: Le.a.SortOverflowButton,
						id: Me
					}, o.a.createElement(je.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var ze = He(Object(s.b)(Fe)(Object(l.c)(Ue))),
				Ge = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				Ke = n.n(Ge);
			const Ye = Object(d.u)({
					isProfilePage: d.I,
					pageLayer: e => e
				}),
				qe = Object(s.b)(null, (e, {
					subredditId: t
				}) => ({
					updateSortPreference: (n, r) => {
						if (t) {
							const o = Object(a.c)({
								sort: n,
								timeSort: r
							});
							e(Object(c.I)(t, o))
						}
					}
				}));
			class Ve extends o.a.Component {
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
						countrySort: n,
						disabled: r = !1,
						isProfilePage: s,
						sort: a,
						sortOptions: c,
						subredditId: l,
						timeSort: d,
						updateSortPreference: u
					} = this.props;
					return o.a.createElement("div", {
						className: Object(i.a)(Ke.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, o.a.createElement(ze, {
						baseUrl: e,
						disabled: r,
						geopopularSort: n,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: a,
						sortOptions: c,
						timeSort: d
					}), !s && o.a.createElement(p.a, {
						className: Ke.a.LayoutSwitch,
						subredditId: l
					}))
				}
			}
			t.a = Ye(qe(Object(l.c)(Ve)))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/controls/Dropdown/index.m.less"),
				l = n.n(c);
			const d = {
				[i.W.BEST]: "best",
				[i.W.HOT]: "hot",
				[i.W.NEW]: "new",
				[i.W.CONTROVERSIAL]: "controversial",
				[i.W.TOP]: "top",
				[i.W.RISING]: "rising",
				[i.W.AWARDED]: "award"
			};

			function u({
				className: e,
				isFilled: t,
				sort: n
			}) {
				return d[n] ? o.a.createElement(a.a, {
					name: d[n],
					isFilled: t,
					className: Object(s.a)(e, l.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SidebarContainer/index.m.less"),
				s = n.n(o);
			t.a = r.a.div("container", s.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				d = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/components/SidebarFooter/index.m.less"),
				p = n.n(u);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = s.a.a("Link", p.a), b = Object(d.c)({
				isNavbarLikeMwebEnabled: l.a
			}), f = Object(i.b)(b), w = Object(c.u)({
				isFrontpage: c.z
			});
			t.a = w(f(e => e.isNavbarLikeMwebEnabled ? e.isFrontpage ? o.a.createElement(a.a, {
				className: p.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, o.a.createElement("div", {
				className: p.a.LinkContainer
			}, o.a.createElement("div", {
				className: p.a.Column
			}, o.a.createElement(m, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, h._("User Agreement", null, {
				hk: "2RA6JL"
			})), o.a.createElement(m, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, h._("Privacy policy", null, {
				hk: "10K04G"
			}))), o.a.createElement("div", {
				className: p.a.Column
			}, o.a.createElement(m, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, h._("Content policy", null, {
				hk: "1DyxZS"
			})), o.a.createElement(m, {
				href: "https://www.redditinc.com/policies/moderator-guidelines"
			}, h._("Moderator Guidelines", null, {
				hk: "2O9otm"
			})))), o.a.createElement("div", {
				className: p.a.Copyright
			}, h._("© {year} Reddit, Inc. All rights reserved.", [h._param("year", (new Date).getFullYear().toString())], {
				hk: "sR7zP"
			}))) : null : o.a.createElement(a.a, {
				className: p.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, o.a.createElement("div", {
				className: p.a.LinkContainer
			}, o.a.createElement("div", {
				className: p.a.Column
			}, o.a.createElement(m, {
				href: "https://www.reddithelp.com"
			}, h._("help", null, {
				hk: "4lyYaD"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/coins"
			}, h._("Reddit coins", null, {
				hk: "32iMaN"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/premium"
			}, h._("Reddit premium", null, {
				hk: "RuO3A"
			})), o.a.createElement(m, {
				href: "https://redditgifts.com/"
			}, h._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && o.a.createElement(o.a.Fragment, null, o.a.createElement(m, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, h._("Communities", null, {
				hk: "3CJu37"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/posts/2020/"
			}, h._("Rereddit", null, {
				hk: "1z3k7C"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/topics/a-1/"
			}, h._("Topics", null, {
				hk: "349RFt"
			})))), o.a.createElement("div", {
				className: p.a.Column
			}, o.a.createElement(m, {
				href: "https://about.reddit.com"
			}, h._("about", null, {
				hk: "1sqJKs"
			})), o.a.createElement(m, {
				href: "https://about.reddit.com/careers/"
			}, h._("careers", null, {
				hk: "26ABvc"
			})), o.a.createElement(m, {
				href: "https://about.reddit.com/press/"
			}, h._("press", null, {
				hk: "2Qmgdz"
			})), o.a.createElement(m, {
				href: "https://www.redditinc.com/advertising"
			}, h._("advertise", null, {
				hk: "Mt40U"
			})), o.a.createElement(m, {
				href: "http://www.redditblog.com/"
			}, h._("blog", null, {
				hk: "46IQJw"
			})), o.a.createElement(m, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, h._("Terms", null, {
				hk: "4qRzfE"
			})), o.a.createElement(m, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, h._("Content policy", null, {
				hk: "1DyxZS"
			})), o.a.createElement(m, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, h._("Privacy policy", null, {
				hk: "10K04G"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, h._("Mod policy", null, {
				hk: "2gYc2T"
			})))), o.a.createElement("div", {
				className: p.a.Copyright
			}, h._("Reddit Inc © {year} . All rights reserved", [h._param("year", (new Date).getFullYear().toString())], {
				hk: "3nJUt5"
			})))))
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/lodash/throttle.js"),
				s = n.n(o),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/constants/elementIds.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/components/BackToTop/index.m.less"),
				p = n.n(u);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = e => {
				if (e) {
					const e = document.getElementById(l.d);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var b = ({
					className: e,
					isOverlay: t,
					style: n
				}) => a.a.createElement("div", {
					className: Object(r.a)(e, p.a.container),
					style: n
				}, a.a.createElement(d.l, {
					className: p.a.button,
					onClick: () => m(t)
				}, h._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				f = n("./src/reddit/components/SidebarFooter/index.tsx"),
				w = n("./src/reddit/constants/componentSizes.ts"),
				g = n("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				S = n.n(_),
				y = n("./src/lib/lessComponent.tsx");

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const O = c.e[1] + 24,
				v = w.f + 8,
				C = v + 152 + 16,
				E = C + O + 8,
				x = y.a.div("Container", S.a),
				N = y.a.wrapped(({
					className: e,
					isOverlay: t,
					...n
				}) => a.a.createElement(b, k({
					className: e,
					isOverlay: t,
					style: {
						top: `calc(100vh - ${t?v:8}px)`
					}
				}, n)), "BackToTop", S.a),
				I = ({
					children: e,
					className: t,
					isFakeOverlay: n,
					isSticky: o
				}) => a.a.createElement("div", {
					className: Object(r.a)(t, {
						[S.a.StickyStyles]: o && !n,
						[S.a.StickyStylesFakeOverlay]: !!n
					})
				}, e);
			class T extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > E,
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
					}, this.handleResize = s()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.K), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							adComponentOnFakeOverlay: n,
							children: r,
							className: o,
							hideFooter: s,
							pageLayer: i
						}
					} = this, c = this.state.isAdSticky && !(!t && !r);
					return a.a.createElement(x, {
						className: o,
						innerRef: this.setWrapperRef
					}, a.a.createElement(I, {
						isFakeOverlay: n,
						isSticky: c
					}, t, r, !s && a.a.createElement(f.a, null)), !this.props.hideBackToTop && a.a.createElement(N, {
						isOverlay: !!(null === (e = null == i ? void 0 : i.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const j = Object(g.u)();
			t.a = j(T)
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, n) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/reddit/components/SEOTitle/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/trackers/widgets.ts"),
				m = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = n("./src/reddit/selectors/experiments/topPosts.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				w = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/models/Theme/index.ts"),
				_ = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const S = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(_.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				y = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(_.a)(e).widgetColors.sidebarWidgetHeaderColor,
				k = e => {
					const t = S(e);
					return Object(g.f)(t)
				},
				O = e => {
					const t = y(e);
					return Object(g.f)(t)
				};
			var v = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				C = n.n(v);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = Object(u.u)(), N = Object(s.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						r = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						o = Object(w.X)(e);
					return r || o
				},
				nigtmode: w.X,
				subredditId: u.n,
				topPostVariant: b.d
			}));
			class I extends o.a.Component {
				constructor() {
					super(...arguments), this.contentRef = o.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(h.b)(e, t)), this.setState({
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
					return e.backgroundColor = S(this.props), e.borderColor = Object(m.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = k(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = y(this.props), e.color = e.fill = O(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: r,
						headerButton: s,
						onClick: i,
						title: c,
						titleClassName: d,
						truncateThreshold: u
					} = this.props, h = n ? C.a.widgetContentOnly : C.a.widgetContent, m = !r && this.props.styles, b = m ? this.getWidgetBackgroundStyles() : {}, f = m ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(a.a)(t, C.a.widgetBackground, {
							[C.a.redditStyle]: r,
							[C.a.clickable]: !!i,
							[C.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": r,
						onClick: i,
						style: b
					}, c && o.a.createElement("div", {
						className: C.a.widgetHeader,
						style: f
					}, o.a.createElement("div", {
						className: Object(a.a)(C.a.widgetTitle, d)
					}, o.a.createElement(l.b, {
						type: l.a.Widget
					}, c)), s), o.a.createElement("div", {
						className: Object(a.a)(h, {
							[C.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(p.r, {
						className: C.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, E._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = x(N(Object(c.a)(Object(d.c)(I))))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			const s = {
					[o.W.BEST]: () => r.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[o.W.HOT]: () => r.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[o.W.NEW]: () => r.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[o.W.CONTROVERSIAL]: () => r.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[o.W.RISING]: () => r.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[o.W.TOP]: () => r.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[o.W.AWARDED]: () => r.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				i = e => {
					const t = s[e];
					return t && t() || ""
				},
				a = {
					[o.fc.HOUR]: () => r.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[o.fc.DAY]: () => r.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[o.fc.WEEK]: () => r.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[o.fc.MONTH]: () => r.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[o.fc.YEAR]: () => r.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[o.fc.ALL]: () => r.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				c = e => {
					const t = a[e];
					return t && t() || ""
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = o.a.createContext({})
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return w
			}));
			var r = n("./node_modules/lodash/throttle.js"),
				o = n.n(r),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				l = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/index.m.less"),
				h = n.n(p),
				m = n("./src/reddit/controls/Dropdown/row.m.less"),
				b = n.n(m);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			class w extends i.a.Component {
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
					}, n = Object(a.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(c.a, f({}, t, {
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
						className: n
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(u.a, f({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(d.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(l.a, {
						className: h.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(a.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle
				});
				return i.a.createElement(w, f({
					className: n
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
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
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				s = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = n.n(s);
			t.a = r.a.wrapped(o.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/models/WhitelistStatus/index.ts");
			const o = (e, t) => {
				const n = e.some(e => e.isNSFW),
					o = t.some(e => e.wls === r.b.NO_ADS);
				return !n && !o
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				s = n.n(o);
			const i = ({
					isLoading: e
				}) => Object(r.a)(s.a.loadingBackground, {
					[s.a["m-loading"]]: e
				}),
				a = e => Object(r.a)(s.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			}));
			var r, o, s = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(o || (o = {}));
			const a = (e, t) => n => ({
					source: o.COMMUNITY_WIDGETS,
					action: s.c.CLICK,
					noun: r.SEE_MORE,
					widget: Object(i.widget)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...i.defaults
				}),
				c = (e, t) => n => ({
					source: o.POST,
					action: s.c.CLICK,
					noun: r.REREDDIT_PROMO,
					post: i.post(n, e),
					subreddit: i.subreddit(n),
					...t && {
						banner: {
							buttonText: t,
							id: r.REREDDIT_PROMO
						}
					},
					...i.defaults(n)
				}),
				l = () => e => ({
					source: o.SIDEBAR,
					action: s.c.VIEW,
					noun: r.TOPICS_WIDGET,
					...i.defaults(e)
				}),
				d = e => t => ({
					source: o.TOPICS_WIDGET,
					action: s.c.CLICK,
					noun: r.TOPIC,
					...i.defaults(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(s.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = (e, {
				listingKey: t
			}) => e.tracking.viewportDataLoaded[t]
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit.1a19c1e7154c3add732c.js.map