// https://www.redditstatic.com/desktop2x/Topic.d6cd7ab09513b01ba8fa.js
// Retrieved at 11/12/2020, 12:30:06 PM by Reddit Dataminer v1.0.0
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(e, "resize", this._checkForIntersections, !0), r(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
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
							var r = n.element,
								o = a(r),
								c = this._rootContainsTarget(r),
								d = n.entry,
								l = t && c && this._computeTargetAndRootIntersection(r, s),
								p = n.entry = new i({
									time: e.performance && performance.now && performance.now(),
									target: r,
									boundingClientRect: o,
									rootBounds: s,
									intersectionRect: l
								});
							d ? t && c ? this._hasCrossedThreshold(d, p) && this._queuedEntries.push(p) : d && d.isIntersecting && this._queuedEntries.push(p) : this._queuedEntries.push(p)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, n.prototype._computeTargetAndRootIntersection = function(s, i) {
						if ("none" != e.getComputedStyle(s).display) {
							for (var n, r, o, c, l, p, u, m, h = a(s), b = d(s), g = !1; !g;) {
								var v = null,
									x = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == x.display) return;
								if (b == this.root || b == t ? (g = !0, v = i) : b != t.body && b != t.documentElement && "visible" != x.overflow && (v = a(b)), v && (n = v, r = h, o = void 0, c = void 0, l = void 0, p = void 0, u = void 0, m = void 0, o = Math.max(n.top, r.top), c = Math.min(n.bottom, r.bottom), l = Math.max(n.left, r.left), p = Math.min(n.right, r.right), m = c - o, !(h = (u = p - l) >= 0 && m >= 0 && {
										top: o,
										bottom: c,
										left: l,
										right: p,
										width: u,
										height: m
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
								i = t.body;
							e = {
								top: 0,
								left: 0,
								right: s.clientWidth || i.clientWidth,
								width: s.clientWidth || i.clientWidth,
								bottom: s.clientHeight || i.clientHeight,
								height: s.clientHeight || i.clientHeight
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
							i = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (s !== i)
							for (var n = 0; n < this.thresholds.length; n++) {
								var r = this.thresholds[n];
								if (r == s || r == i || r < s != r < i) return !0
							}
					}, n.prototype._rootIsInDom = function() {
						return !this.root || c(t, this.root)
					}, n.prototype._rootContainsTarget = function(e) {
						return c(this.root || t, e)
					}, n.prototype._registerInstance = function() {
						s.indexOf(this) < 0 && s.push(this)
					}, n.prototype._unregisterInstance = function() {
						var e = s.indexOf(this); - 1 != e && s.splice(e, 1)
					}, e.IntersectionObserver = n, e.IntersectionObserverEntry = i
				}

				function i(e) {
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
						i = this.intersectionRect,
						n = i.width * i.height;
					this.intersectionRatio = s ? n / s : this.isIntersecting ? 1 : 0
				}

				function n(e, t) {
					var s, i, n, r = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (s = this._checkForIntersections.bind(this), i = this.THROTTLE_TIMEOUT, n = null, function() {
						n || (n = setTimeout((function() {
							s(), n = null
						}), i))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function r(e, t, s, i) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, s, i || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, s)
				}

				function o(e, t, s, i) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, s, i || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, s)
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
			var i = s("./node_modules/lodash/_baseTimes.js"),
				n = s("./node_modules/lodash/_castFunction.js"),
				r = s("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				a = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > o) return [];
				var s = a,
					d = c(e, a);
				t = n(t), e -= a;
				for (var l = i(d, t); ++s < e;) t(s);
				return l
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
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/reddit/actions/preferences.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/contexts/Tooltip.ts"),
				v = s("./src/reddit/controls/Dropdown/index.tsx"),
				x = s("./src/reddit/controls/Dropdown/Row.tsx"),
				T = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				f = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				_ = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				w = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				O = s.n(w);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const L = "view--layout--FUE",
				j = "LayoutSwitch--picker",
				I = Object(c.a)(v.a),
				N = {
					[h.d.Card]: _.a,
					[h.d.Classic]: T.a,
					[h.d.Compact]: f.a
				},
				S = {
					[h.d.Card]: () => i.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[h.d.Classic]: () => i.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[h.d.Compact]: () => i.fbt._("compact", null, {
						hk: "1N7pcz"
					})
				},
				P = Object(b.t)(),
				R = Object(a.c)({
					dropdownIsOpen: Object(E.b)(j),
					postLayout: b.N,
					redditStyle: b.A
				}),
				k = Object(o.b)(R, e => ({
					onListingLayoutChange: (t, s) => e(Object(p.x)(t, s)),
					openDropdown: () => e(Object(u.h)({
						tooltipId: j
					}))
				}));
			class H extends r.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: i,
							subredditId: n
						} = this.props;
						t ? t(e) : (s(e, n), i(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(y.screen)(t),
							subreddit: Object(y.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: i,
							postLayout: n
						} = this.props, o = s || h.e[n], a = e === o, c = N[e], l = S[e];
						return r.a.createElement(x.b, C({}, t, {
							className: Object(d.a)(O.a.LayoutItem, {
								[O.a.selected]: a
							}),
							"data-layout": e,
							displayText: l(),
							iconWrapperClassName: O.a.LayoutItemIconWrapper,
							isSelected: a,
							noHover: a,
							onClick: a ? void 0 : () => this.changeLayout(e),
							textClassName: O.a.LayoutItemTextClassName
						}), r.a.createElement(c, {
							className: O.a.LayoutIcon,
							onClick: a ? void 0 : i
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return r.a.createElement(I, C({}, e, {
							className: O.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: O.a.DropdownRow,
							rowIconClassName: O.a.DropdownRowIcon,
							rowSelectedClassName: O.a.DropdownRowSelected,
							tooltipId: j
						}), this.renderItem(h.d.Card), this.renderItem(h.d.Classic), this.renderItem(h.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: i
					} = this.props, n = t || h.e[i];
					return r.a.createElement("div", {
						className: Object(d.a)(O.a.Container, e),
						id: L
					}, r.a.createElement("div", {
						className: O.a.DropdownContainer,
						onClick: s
					}, this.renderItem(n, {
						id: j,
						showDropdownTriangle: !0
					}), r.a.createElement(g.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = P(k(Object(m.c)(Object(l.a)(H))))
		},
		"./src/reddit/components/Governance/VotingBanner/async.tsx": function(e, t, s) {
			"use strict";
			var i = s("./src/higherOrderComponents/makeAsync.tsx");
			const n = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceVotingBanner").then(s.bind(null, "./src/reddit/components/Governance/VotingBanner/index.tsx")).then(e => e.default)
			});
			t.a = n
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./src/reddit/components/PostList/index.tsx"),
				n = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(n.a)(i.a)
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
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return E
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "b", (function() {
				return L
			}));
			var i = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/postList.ts"),
				l = s("./src/reddit/actions/survey/index.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				b = s("./src/reddit/components/PostList/Placeholder.tsx"),
				g = s("./src/reddit/featureFlags/index.ts"),
				v = s("./src/reddit/selectors/experiments/econ/predictions.ts"),
				x = s("./src/reddit/selectors/experiments/survey.ts"),
				T = s("./src/reddit/selectors/listings.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/tracking.ts");

			function E() {
				return Object(u.t)({
					currentProfileName: u.h,
					isCommentPermalink: u.v,
					isCommentsPage: u.w,
					isFrontpage: u.y,
					isProfilePostListing: u.I,
					isTopicPage: u.M,
					pageLayer: e => e
				})
			}
			const w = E(),
				O = {
					apiError: T.c,
					apiPending: T.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(u.N)(e, t),
					loadMore: T.g,
					postsById: (e, t) => Object(f.Z)(e, Object.assign(Object.assign({}, t), {
						predictionsEnabled: Object(v.a)(e)
					})),
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: i,
							inSubredditOrProfile: n
						} = t;
						return Object(f.L)(e, s, i, n, Object(v.a)(e))
					}),
					subredditsById: _.ab,
					viewportDataLoaded: y.a,
					pageReferrer: u.Q,
					postListPlaceholderComponent: () => b.a,
					isNpsScrollSurveyEnabled: x.c
				},
				C = Object(n.c)(O),
				L = (e, t) => {
					let {
						isFrontpage: s
					} = t;
					return {
						onBottomViewed: (t, s) => e(d.c(t, s)),
						adBrandSafetyStatusReceived: t => {
							e(o.d({
								isViewSafe: t
							}))
						},
						openPost: t => {
							s && e(Object(a.a)({
								lastLoadedEnv: "server"
							})), e(c.C(t))
						},
						fireAdPixelsOfType: (t, s) => {
							e(c.t(t, s))
						},
						trackOnPostEnteredViewport: (t, s, i) => {
							e(c.F(t, i))
						},
						trackOnPostExitedViewport: (t, s, i, n) => {
							e(c.G(t, i, n))
						},
						surveyTriggerScrollCounted: () => e(Object(l.b)())
					}
				},
				j = Object(i.b)(C, L, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					postClickEventFactory: (e, t) => Object(h.f)(e, t, "post", s.listingKey, s.hostPostId, s.listingBelowVariant),
					postComponentForLayout: e => Object(m.b)(Object.assign({}, e))
				}));
			t.a = e => Object(p.c)(w(j(e)))
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = n.a.createContext({})
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var i = s("./src/reddit/models/WhitelistStatus/index.ts");
			const n = (e, t) => {
				const s = e.some(e => e.isNSFW),
					n = t.some(e => e.wls === i.b.NO_ADS);
				return !s && !n
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", r({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
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
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/pages/ErrorPages/index.m.less"),
				c = s.n(a);
			const d = e => {
					let {
						message: t
					} = e;
					return r.a.createElement("div", {
						className: c.a.container
					}, r.a.createElement("h3", {
						className: c.a.title
					}, t || i.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), r.a.createElement(o.k, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, i.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				l = e => {
					let {
						message: t
					} = e;
					return r.a.createElement("div", {
						className: c.a.container
					}, r.a.createElement("h3", {
						className: c.a.title
					}, t || i.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), r.a.createElement(o.k, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, i.fbt._("Go Home", null, {
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
			s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.array.sort.js");
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeListingKey/index.ts"),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/pages/topic.ts"),
				p = s("./src/reddit/components/Governance/VotingBanner/async.tsx"),
				u = s("./src/reddit/components/ListingPostList/index.tsx"),
				m = s("./src/reddit/controls/InternalLink/index.tsx"),
				h = s("./src/reddit/icons/svgs/Search/index.tsx"),
				b = s("./src/reddit/components/RelatedTopicList/RelatedTopic/index.m.less"),
				g = s.n(b);
			var v = e => {
					const {
						topic: t
					} = e;
					return n.a.createElement("span", {
						className: g.a.Container
					}, n.a.createElement(m.a, {
						className: g.a.Link,
						title: t.name,
						to: t.url
					}, n.a.createElement("span", {
						className: g.a.IconContainer
					}, n.a.createElement(h.a, null)), n.a.createElement("span", {
						className: g.a.Name
					}, t.namePlural)))
				},
				x = s("./src/reddit/components/SEOTitle/index.tsx"),
				T = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = s("./src/reddit/components/RelatedTopicList/index.m.less"),
				_ = s.n(f);

			function y(e) {
				const {
					children: t,
					limit: s,
					title: i,
					topics: r
				} = e;
				return r.length ? n.a.createElement(T.a, {
					className: _.a.Container
				}, i && n.a.createElement("div", {
					className: _.a.Title
				}, n.a.createElement(x.b, {
					type: x.a.Widget
				}, i)), n.a.createElement("div", {
					className: _.a.RelatedTopicList
				}, r.slice(0, s).map(e => n.a.createElement(v, {
					key: e.id,
					topic: e
				}))), t) : null
			}
			var E = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				w = s("./src/reddit/components/TopicSidebar/index.tsx"),
				O = s("./src/reddit/components/TopicSidebar/SubredditList/index.tsx"),
				C = s("./src/reddit/constants/listings.ts"),
				L = s("./src/reddit/constants/postLayout.ts"),
				j = s("./src/reddit/contexts/PageLayer/index.tsx"),
				I = s("./src/reddit/helpers/trackers/screenview.ts"),
				N = s("./src/reddit/layout/page/Listing/index.tsx"),
				S = s("./src/reddit/pages/ErrorPages/index.tsx"),
				P = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				R = s("./src/reddit/controls/Button/index.tsx"),
				k = s("./src/reddit/pages/Topic/TopicHeader/TopicTab/index.m.less"),
				H = s.n(k);
			class V extends n.a.Component {
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
						tabs: i
					} = this.props;
					return i.includes(s) ? n.a.createElement("div", {
						className: Object(o.a)(H.a.Tab, {
							[H.a.ActiveTab]: s === e
						}),
						onClick: this.onClick
					}, t) : null
				}
			}
			var D = V,
				F = s("./src/reddit/pages/Topic/TopicHeader/index.m.less"),
				W = s.n(F);

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: A
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var B;
			! function(e) {
				e.Communities = "communities", e.Posts = "posts", e.RelatedTopics = "relatedTopics"
			}(B || (B = {}));
			class J extends n.a.Component {
				renderSubtitleContent() {
					const {
						parentRelatedTopics: e
					} = this.props;
					return e.length ? n.a.createElement("ul", {
						className: W.a.parentRelatedTopics
					}, e.map((e, t) => {
						let {
							namePlural: s,
							url: i
						} = e;
						return n.a.createElement("li", {
							key: t
						}, n.a.createElement(m.a, {
							className: W.a.link,
							to: i
						}, s))
					})) : A._("Topic on Reddit", null, {
						hk: "3gTFev"
					})
				}
				render() {
					const {
						activeTab: e,
						className: t,
						layout: s,
						onTabClick: i,
						tabs: r,
						topicName: a
					} = this.props, c = {
						activeTab: e,
						onTabClick: i,
						tabs: r
					};
					return n.a.createElement("div", {
						className: Object(o.a)(W.a.Container, t)
					}, n.a.createElement("div", {
						className: Object(o.a)(W.a.Content, s === L.g.Large ? W.a.cardWidth : W.a.fullWidth)
					}, n.a.createElement("div", {
						className: W.a.Header
					}, n.a.createElement("div", {
						className: W.a.Title
					}, n.a.createElement(x.b, {
						type: x.a.TopicHeader
					}, a)), n.a.createElement("div", {
						className: W.a.Subtitle
					}, this.renderSubtitleContent())), n.a.createElement("div", {
						className: W.a.Tabs
					}, n.a.createElement(D, M({
						tab: B.Posts
					}, c), A._("Posts", null, {
						hk: "3RLrle"
					})), n.a.createElement(D, M({
						tab: B.Communities
					}, c), A._("Communities", null, {
						hk: "KIwd1"
					})), n.a.createElement(D, M({
						tab: B.RelatedTopics
					}, c), A._("Related Topics", null, {
						hk: "4go2cr"
					})))))
				}
			}
			var U = J,
				z = s("./src/reddit/pages/Topic/Relationship/index.m.less"),
				Z = s.n(z);
			const {
				fbt: G
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class Y extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							openTab: e,
							relationshipIndex: t
						} = this.props;
						e(B.RelatedTopics, t)
					}
				}
				render() {
					const {
						namePlural: e,
						relatedTopics: t
					} = this.props.relationship;
					return n.a.createElement(y, {
						limit: 5,
						title: e,
						topics: t
					}, n.a.createElement(P.a, {
						onClick: this.onClick,
						to: "#"
					}, n.a.createElement(R.o, {
						className: Z.a.SeeAllRelatedTopics
					}, G._("See all {=[Topic name plural]}", [G._param("=[Topic name plural]", n.a.createElement("span", {
						className: Z.a.TopicName
					}, G._("{Topic name plural}", [G._param("Topic name plural", e)], {
						hk: "27C3n9"
					})))], {
						hk: "uH0jh"
					}))))
				}
			}
			var q = Y,
				K = s("./src/lib/prettyPrintNumber/index.ts"),
				Q = s("./src/reddit/components/Flair/index.tsx"),
				X = s("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = s("./src/reddit/components/SubscribeButton/index.tsx"),
				ee = s("./src/reddit/constants/posts.ts"),
				te = s("./src/reddit/helpers/name/index.ts"),
				se = s("./src/reddit/models/Flair/index.ts"),
				ie = s("./src/reddit/selectors/subreddit.ts"),
				ne = s("./src/reddit/selectors/user.ts"),
				re = s("./src/reddit/pages/Topic/SubredditList/Subreddit/index.m.less"),
				oe = s.n(re);
			const {
				fbt: ae
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ce = Object(r.c)({
				isLoggedIn: ne.I,
				subreddit: ie.T,
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
			var pe = de(e => {
					const {
						className: t,
						isLoggedIn: s,
						subreddit: i,
						subredditAboutInfo: r
					} = e, a = Object(te.c)(i.displayText || i.name);
					return n.a.createElement("div", {
						className: Object(o.a)(oe.a.Container, t)
					}, n.a.createElement(X.b, {
						className: oe.a.Icon,
						subredditOrProfile: i
					}), n.a.createElement("div", {
						className: oe.a.Text
					}, n.a.createElement(m.a, {
						className: oe.a.Link,
						to: i.url
					}, n.a.createElement("div", {
						className: oe.a.Name
					}, a), n.a.createElement("div", {
						className: oe.a.Meta
					}, n.a.createElement("div", {
						className: oe.a.Members
					}, ae._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [ae._plural(i.subscribers, "subscribers count", Object(K.b)(i.subscribers))], {
						hk: "48BXj1"
					})), i.isNSFW && n.a.createElement(Q.b, {
						flair: le
					}))), n.a.createElement("div", {
						className: oe.a.About
					}, r.publicDescription || ae._("Welcome to {subreddit name}", [ae._param("subreddit name", a)], {
						hk: "vZ7VH"
					})), n.a.createElement(m.a, {
						className: oe.a.VisitLink,
						to: i.url
					}, ae._("Visit", null, {
						hk: "2z3clp"
					}))), n.a.createElement($.a, {
						className: Object(o.a)(oe.a.SubscribeButton, {
							[oe.a.hidden]: !s
						}),
						identifier: {
							name: i.name,
							type: ee.a.SUBREDDIT
						},
						small: !0
					}))
				}),
				ue = s("./src/reddit/pages/Topic/SubredditList/index.m.less"),
				me = s.n(ue);

			function he(e) {
				const {
					subredditIds: t = []
				} = e;
				return n.a.createElement("div", {
					className: me.a.SubredditList
				}, t.map(e => n.a.createElement(pe, {
					className: me.a.Subreddit,
					key: e,
					subredditId: e
				})))
			}
			var be = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				ge = s("./src/reddit/pages/Topic/TabHeader/RelationshipTab/index.m.less"),
				ve = s.n(ge);
			class xe extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							index: e,
							onTabClick: t
						} = this.props;
						t(B.RelatedTopics, e)
					}
				}
				render() {
					const {
						activeIndex: e,
						relationship: t,
						index: s
					} = this.props, i = s === e;
					return n.a.createElement("div", {
						className: Object(o.a)(ve.a.RelationshipTab, {
							[ve.a.mActive]: i
						}),
						onClick: this.onClick
					}, t.namePlural)
				}
			}
			var Te = xe,
				fe = s("./src/reddit/pages/Topic/TabHeader/index.m.less"),
				_e = s.n(fe);
			const {
				fbt: ye
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class Ee extends n.a.Component {
				constructor() {
					super(...arguments), this.renderRelatedTopic = (e, t) => {
						const {
							activeRelationshipIndex: s,
							onTabClick: i
						} = this.props;
						return n.a.createElement(Te, {
							activeIndex: s,
							index: t,
							key: e.slug,
							onTabClick: i,
							relationship: e
						})
					}, this.renderRelatedTopicsHeader = () => n.a.createElement("div", {
						className: _e.a.TabHeader
					}, this.props.topic.childRelationships.map(this.renderRelatedTopic)), this.renderTitle = () => {
						const {
							activeTab: e,
							topicNamePlural: t
						} = this.props;
						return e === B.Posts ? ye._("Posts about {topic name}", [ye._param("topic name", t)], {
							hk: "3AGfU"
						}) : e === B.Communities ? ye._("Communities related to {topic name}", [ye._param("topic name", t)], {
							hk: "jKM0V"
						}) : null
					}
				}
				render() {
					const {
						activeLayout: e,
						activeTab: t
					} = this.props, s = t === B.Posts;
					return t === B.RelatedTopics ? this.renderRelatedTopicsHeader() : n.a.createElement("div", {
						className: _e.a.TabHeader
					}, n.a.createElement("div", {
						className: _e.a.TabTitle
					}, n.a.createElement(x.b, {
						type: x.a.Widget
					}, this.renderTitle())), s && n.a.createElement(be.a, {
						className: _e.a.PostsLayoutSwitch,
						layout: L.e[e]
					}))
				}
			}
			var we = Ee,
				Oe = s("./src/reddit/selectors/platform.ts"),
				Ce = s("./src/reddit/selectors/topic.ts"),
				Le = s("./src/reddit/pages/Topic/index.m.less"),
				je = s.n(Le);
			const {
				fbt: Ie
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ne = Object(j.t)(), Se = (e, t) => t.match.params.sort || a.P, Pe = e => {
				const t = [];
				return e ? (e.hasPosts && t.push(B.Posts), e.hasSubreddits && t.push(B.Communities), e.childRelationships.length && t.push(B.RelatedTopics), t) : t
			}, Re = Object(d.b)(() => Object(r.a)((e, t) => Object(Ce.e)(e, t.match.params.topicSlug), (e, t) => Object(Ce.f)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Ce.c)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Ce.a)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Ce.b)(e, {
				topicSlug: t.match.params.topicSlug
			}), j.N, Se, Oe.c, (e, t, s, i, n, r, o, a) => ({
				layout: r,
				parentRelatedTopics: i,
				siblingRelatedTopics: n,
				sort: o,
				status: a || 200,
				tabs: Pe(s),
				timeSort: void 0,
				topic: s,
				topicName: e,
				topicNamePlural: t
			})), (e, t) => ({
				onLoadMorePosts: () => e(Object(l.h)(t.match.params))
			})), ke = (e, t) => e === B.Communities ? L.g.Large : t;
			class He extends n.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.openTab = function(e) {
						let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
						t.setState({
							activeLayout: ke(e, t.props.layout),
							activeRelationshipIndex: s,
							activeTab: e
						}), window.scrollTo(0, 0)
					}, this.openCommunitiesTab = () => {
						this.openTab(B.Communities)
					}, this.onViewed = (e, t) => {
						var s;
						return Object(I.f)(Object(c.a)(C.b.Topic, null, {
							topicSlug: null === (s = this.props.topic) || void 0 === s ? void 0 : s.slug
						}), this.props.sort, t, e, this.props.timeSort)
					}, this.renderNoPosts = () => null, this.renderRelationship = (e, t) => n.a.createElement(q, {
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
						i = e.pageLayer && e.pageLayer.queryParams.activeTab,
						n = i && e.tabs.includes(i) && i,
						r = e.tabs[0],
						o = s || n || r;
					return {
						activeLayout: ke(o, e.layout),
						activeRelationship: t.activeRelationshipIndex,
						activeTab: o
					}
				}
				componentDidUpdate(e) {
					var t, s;
					(null === (t = this.props.topic) || void 0 === t ? void 0 : t.id) !== (null === (s = e.topic) || void 0 === s ? void 0 : s.id) && this.openTab(this.props.tabs[0])
				}
				render() {
					const {
						className: e,
						match: t,
						parentRelatedTopics: s,
						siblingRelatedTopics: i,
						status: r,
						tabs: a,
						topic: d,
						topicName: l,
						topicNamePlural: m
					} = this.props, h = t.params.topicSlug, b = Object(c.a)(C.b.Topic, null, {
						topicSlug: h
					}), {
						activeLayout: g,
						activeRelationshipIndex: v,
						activeTab: x
					} = this.state, T = C.b.Topic;
					if (404 === r) return n.a.createElement(S.b, null);
					if (!d) return null;
					const f = d.childRelationships[v],
						_ = f && f.relatedTopics || [],
						L = n.a.createElement(n.a.Fragment, null, n.a.createElement(we, {
							activeLayout: g,
							activeRelationshipIndex: v,
							activeTab: x,
							onTabClick: this.openTab,
							topic: d,
							topicName: l,
							topicNamePlural: m
						}), n.a.createElement("div", {
							className: Object(o.a)(je.a.TopicTab, {
								[je.a.active]: x === B.Communities
							})
						}, n.a.createElement(he, {
							subredditIds: d.subredditIds
						})), n.a.createElement("div", {
							className: Object(o.a)(je.a.TopicTab, {
								[je.a.active]: x === B.Posts
							})
						}, x === B.Posts && n.a.createElement(u.a, {
							forcedLayout: g,
							listingKey: b,
							listingName: T,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderNoPosts,
							onLoadMore: this.props.onLoadMorePosts
						}), n.a.createElement(p.a, null)), n.a.createElement("div", {
							className: Object(o.a)(je.a.TopicTab, {
								[je.a.active]: x === B.RelatedTopics
							})
						}, n.a.createElement(y, {
							topics: _
						}))),
						j = x !== B.RelatedTopics,
						I = x !== B.Communities && a.includes(B.Communities),
						P = n.a.createElement("div", {
							className: je.a.WidgetsContainer
						}, I && n.a.createElement(O.a, {
							onSeeMoreCommunities: this.openCommunitiesTab,
							subredditIds: d.subredditIds,
							topicUrl: d.url
						}), j && d.childRelationships.map(this.renderRelationship), n.a.createElement(y, {
							limit: 5,
							title: Ie._("Similar Topics", null, {
								hk: "1Kv3xR"
							}),
							topics: i
						}));
					return n.a.createElement(E.a, null, n.a.createElement(N.a, {
						className: Object(o.a)(je.a.Container, e),
						content: L,
						fitPageToContent: !0,
						forcedLayout: g,
						sidebars: [null, n.a.createElement(w.a, {
							key: "right",
							className: je.a.SidebarRight,
							listingName: T
						}, P)],
						navBar: n.a.createElement(U, {
							activeTab: x,
							layout: g,
							onTabClick: this.openTab,
							parentRelatedTopics: s,
							tabs: a,
							topicName: l
						})
					}))
				}
			}
			t.default = Ne(Re(He))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Topic.d6cd7ab09513b01ba8fa.js.map