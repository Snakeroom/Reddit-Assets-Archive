// https://www.redditstatic.com/desktop2x/Topic.27a3d6f5d2318b29da95.js
// Retrieved at 4/23/2020, 12:40:06 PM by Reddit Dataminer v1.0.0
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
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, s) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== s[t - 1]
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
							s = t ? this._getRootRect() : {
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
								l = t && c && this._computeTargetAndRootIntersection(o, s),
								u = r.entry = new n({
									time: e.performance && performance.now && performance.now(),
									target: o,
									boundingClientRect: i,
									rootBounds: s,
									intersectionRect: l
								});
							d ? t && c ? this._hasCrossedThreshold(d, u) && this._queuedEntries.push(u) : d && d.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, r.prototype._computeTargetAndRootIntersection = function(s, n) {
						if ("none" != e.getComputedStyle(s).display) {
							for (var r, o, i, c, l, u, m, b, p = a(s), h = d(s), g = !1; !g;) {
								var _ = null,
									f = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == f.display) return;
								if (h == this.root || h == t ? (g = !0, _ = n) : h != t.body && h != t.documentElement && "visible" != f.overflow && (_ = a(h)), _ && (r = _, o = p, i = void 0, c = void 0, l = void 0, u = void 0, m = void 0, b = void 0, i = Math.max(r.top, o.top), c = Math.min(r.bottom, o.bottom), l = Math.max(r.left, o.left), u = Math.min(r.right, o.right), b = c - i, !(p = (m = u - l) >= 0 && b >= 0 && {
										top: i,
										bottom: c,
										left: l,
										right: u,
										width: m,
										height: b
									}))) break;
								h = d(h)
							}
							return p
						}
					}, r.prototype._getRootRect = function() {
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
					}, r.prototype._expandRectByRootMargin = function(e) {
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
					}, r.prototype._hasCrossedThreshold = function(e, t) {
						var s = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							n = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (s !== n)
							for (var r = 0; r < this.thresholds.length; r++) {
								var o = this.thresholds[r];
								if (o == s || o == n || o < s != o < n) return !0
							}
					}, r.prototype._rootIsInDom = function() {
						return !this.root || c(t, this.root)
					}, r.prototype._rootContainsTarget = function(e) {
						return c(this.root || t, e)
					}, r.prototype._registerInstance = function() {
						s.indexOf(this) < 0 && s.push(this)
					}, r.prototype._unregisterInstance = function() {
						var e = s.indexOf(this); - 1 != e && s.splice(e, 1)
					}, e.IntersectionObserver = r, e.IntersectionObserverEntry = n
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
						r = n.width * n.height;
					this.intersectionRatio = s ? r / s : this.isIntersecting ? 1 : 0
				}

				function r(e, t) {
					var s, n, r, o = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (s = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, r = null, function() {
						r || (r = setTimeout((function() {
							s(), r = null
						}), n))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function o(e, t, s, n) {
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
			var n = s("./node_modules/lodash/_baseTimes.js"),
				r = s("./node_modules/lodash/_castFunction.js"),
				o = s("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				a = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > i) return [];
				var s = a,
					d = c(e, a);
				t = r(t), e -= a;
				for (var l = n(d, t); ++s < e;) t(s);
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/contexts/Tooltip.ts"),
				_ = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				x = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				E = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				S = s("./src/reddit/selectors/tooltip.ts"),
				T = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				N = s.n(T);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = "view--layout--FUE",
				L = "LayoutSwitch--picker",
				j = Object(c.a)(_.a),
				w = {
					[p.d.Card]: E.a,
					[p.d.Classic]: v.a,
					[p.d.Compact]: x.a
				},
				I = {
					[p.d.Card]: () => n.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[p.d.Classic]: () => n.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[p.d.Compact]: () => n.fbt._("compact", null, {
						hk: "1N7pcz"
					})
				},
				P = Object(h.t)(),
				k = Object(a.c)({
					dropdownIsOpen: Object(S.b)(L),
					postLayout: h.M,
					redditStyle: h.A
				}),
				F = Object(i.b)(k, e => ({
					onListingLayoutChange: (t, s) => e(Object(u.v)(t, s)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: L
					}))
				}));
			class B extends o.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: n,
							subredditId: r
						} = this.props;
						t ? t(e) : (s(e, r), n(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(y.screen)(t),
							subreddit: Object(y.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: n,
							postLayout: r
						} = this.props, i = s || p.e[r], a = e === i, c = w[e], l = I[e];
						return o.a.createElement(f.b, O({}, t, {
							className: Object(d.a)(N.a.LayoutItem, {
								[N.a.selected]: a
							}),
							"data-layout": e,
							displayText: l(),
							iconWrapperClassName: N.a.LayoutItemIconWrapper,
							isSelected: a,
							noHover: a,
							onClick: a ? void 0 : () => this.changeLayout(e),
							textClassName: N.a.LayoutItemTextClassName
						}), o.a.createElement(c, {
							className: N.a.LayoutIcon,
							onClick: a ? void 0 : n
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(j, O({}, e, {
							className: N.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: N.a.DropdownRow,
							rowIconClassName: N.a.DropdownRowIcon,
							rowSelectedClassName: N.a.DropdownRowSelected,
							tooltipId: L
						}), this.renderItem(p.d.Card), this.renderItem(p.d.Classic), this.renderItem(p.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: n
					} = this.props, r = t || p.e[n];
					return o.a.createElement("div", {
						className: Object(d.a)(N.a.Container, e),
						id: C
					}, o.a.createElement("div", {
						className: N.a.DropdownContainer,
						onClick: s
					}, this.renderItem(r, {
						id: L,
						showDropdownTriangle: !0
					}), o.a.createElement(g.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = P(F(Object(b.c)(Object(l.a)(B))))
		},
		"./src/reddit/components/Governance/VotingBanner/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx");
			const r = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceVotingBanner").then(s.bind(null, "./src/reddit/components/Governance/VotingBanner/index.tsx")).then(e => e.default)
			});
			t.a = r
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
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/values.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/makeAsync.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/loadWithRetries/index.ts"),
				b = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				p = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = s("./src/reddit/icons/svgs/Close/index.tsx"),
				g = s("./src/reddit/selectors/moderatorPermissions.ts"),
				_ = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/userPrefs.ts"),
				v = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				x = s.n(v),
				E = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = u.a.div("BladeContainer", x.a), T = u.a.wrapped(h.a, "CloseIcon", x.a), N = u.a.div("LoadingTitleContainer", x.a), O = u.a.div("LoadingNavContainer", x.a), C = u.a.div("ShortLoadingNav", x.a), L = u.a.wrapped(p.a, "ThemedChevron", x.a), j = e => {
				var t = E(e, []);
				return i.a.createElement(S, null, i.a.createElement(T, null), i.a.createElement(b.k, null, i.a.createElement(b.p, null, y._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), i.a.createElement(b.o, null, i.a.createElement(N, null, i.a.createElement("div", {
					className: Object(l.a)(x.a.LoadingTitle, t.isLoading && x.a.loading)
				})), i.a.createElement(O, null, i.a.createElement("div", {
					className: Object(l.a)(x.a.LoadingNav, t.isLoading && x.a.loading)
				}), i.a.createElement(L, null)), i.a.createElement(O, null, i.a.createElement(C, null), i.a.createElement(L, null)), i.a.createElement(O, null, i.a.createElement("div", {
					className: Object(l.a)(x.a.LoadingNav, t.isLoading && x.a.loading)
				}), i.a.createElement(L, null)), i.a.createElement(O, null, i.a.createElement(C, null), i.a.createElement(L, null)), i.a.createElement(O, null, i.a.createElement("div", {
					className: Object(l.a)(x.a.LoadingNav, t.isLoading && x.a.loading)
				}), i.a.createElement(L, null)))))
			}, w = Object(d.a)({
				getComponent: () => Object(m.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("StructuredStyles")]).then(s.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => i.a.createElement(j, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => i.a.createElement(j, {
					gradientType: "posts",
					isLoading: !0
				})
			}), I = Object(c.c)({
				isEditing: _.j,
				isSubscriptionsPinned: f.b,
				moderatorPermissions: g.j
			});
			t.a = Object(a.b)(I)(e => {
				const t = e.moderatorPermissions && r()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? i.a.createElement("div", {
					className: Object(l.a)(x.a.Container, e.isSubscriptionsPinned && x.a.isSubscriptionPinned)
				}, e.children, i.a.createElement(w, {
					subredditId: e.subredditId
				})) : i.a.createElement(o.Fragment, null, e.children)
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
				return i
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
				return b
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "j", (function() {
				return E
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = s.n(r);
			const i = n.a.section("FormPage", o.a),
				a = n.a.h1("HomePageTitle", o.a),
				c = n.a.button("HomePageBreadcrumb", o.a),
				d = n.a.div("HomePageGroup", o.a),
				l = n.a.h1("FormPageTitle", o.a),
				u = n.a.div("FormPageSection", o.a),
				m = n.a.div("FormGroup", o.a),
				b = n.a.h2("FormGroupTitle", o.a),
				p = n.a.div("FormElement", o.a),
				h = n.a.div("FormGroupDescription", o.a),
				g = n.a.div("FormItem", o.a),
				_ = n.a.h3("FormElementTitle", o.a),
				f = n.a.div("FormElementDescription", o.a),
				v = n.a.div("FormElementError", o.a),
				x = n.a.div("FormElementSubGroup", o.a),
				E = n.a.li("FormListItem", o.a)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, s) {
			e.exports = {
				IconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				iconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				active: "_2FebEA49ReODemDlwzYHSR",
				SubscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				subscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				UnsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				unsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				isSmall: "_2ilDLNSvkCHD3Cs9duy9Q_",
				SubscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				subscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				UnsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				unsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				SubscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				subscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				UnsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				unsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/reddit/constants/elementClassNames.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				u = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				m = s.n(u),
				b = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const _ = p.a.button("IconButton", m.a),
				f = p.a.wrapped(d.a, "SubscribeIcon", m.a),
				v = p.a.wrapped(c.a, "UnsubscribeIcon", m.a),
				x = p.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = g(e, ["border", "small"]);
					return o.a.createElement(_, n, o.a.createElement(f, {
						className: Object(b.a)(n.className, {
							[m.a.isSmall]: s
						})
					}))
				}, "SubscribeIconButton", m.a),
				E = p.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = g(e, ["border", "small"]);
					return t ? o.a.createElement(a.f, h({}, n, {
						className: Object(b.a)(n.className, {
							[m.a.isSmall]: s
						})
					})) : o.a.createElement(a.n, h({}, n, {
						className: Object(b.a)(n.className, {
							[m.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", m.a),
				y = e => {
					var {
						icon: t
					} = e, s = g(e, ["icon"]);
					return t ? o.a.createElement(x, h({}, s, {
						className: Object(b.a)(s.className, {
							[m.a.isSmall]: s.small
						})
					})) : o.a.createElement(E, h({}, s, {
						className: Object(b.a)(s.className, {
							[m.a.isSmall]: s.small
						})
					}))
				},
				S = p.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: n,
						type: r
					} = e, a = g(e, ["border", "language", "small", "type"]);
					return o.a.createElement(_, a, o.a.createElement(v, {
						className: Object(b.a)(i.n, a.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "UnsubscribeIconButton", m.a),
				T = p.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: r,
						type: i
					} = e, c = g(e, ["border", "language", "small", "type"]);
					const d = o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
							className: m.a.UnsubscribeButtonDefault
						}, "subreddit" === i ? n.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : n.fbt._("Following", null, {
							hk: "1wQlVR"
						})), o.a.createElement("span", {
							className: m.a.UnsubscribeButtonHover
						}, "subreddit" === i ? n.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : n.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						l = Object(b.a)(c.className, {
							[m.a.isSmall]: r
						});
					return t ? o.a.createElement(a.i, h({}, c, {
						className: l,
						children: d
					})) : o.a.createElement(a.n, h({}, c, {
						className: l,
						children: d
					}))
				}, "UnsubscribeButton", m.a),
				N = e => {
					var {
						icon: t
					} = e, s = g(e, ["icon"]);
					return t ? o.a.createElement(S, h({}, s, {
						className: Object(b.a)(s.className, {
							[m.a.isSmall]: s.small
						})
					})) : o.a.createElement(T, h({}, s, {
						className: Object(b.a)(s.className, {
							[m.a.isSmall]: s.small
						})
					}))
				};
			class O extends o.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
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
						icon: s = !1,
						id: n,
						language: r,
						small: i = !1
					} = this.props, a = {
						border: e,
						className: t,
						icon: s,
						onClick: this.onClick,
						small: i
					};
					return this.props.userIsSubscriber ? o.a.createElement(N, h({}, a, {
						language: r,
						type: this.props.identifier.type
					})) : o.a.createElement(y, h({}, a, {
						id: n
					}), this.props.children, Object(l.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const r = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				o = {
					subredditActions: {
						subscribe: () => n.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => n.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => n.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => n.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => n.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => n.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = e => {
					let {
						type: t,
						key: s
					} = e;
					return o[r({
						type: t
					})][s]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/TrackingHelper/index.tsx"),
				r = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(n.c)(o.a))
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
		"./src/reddit/components/TopicSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				StickyBottom: "_2yV768nzIKxq_QdOCYdJ3-",
				stickyBottom: "_2yV768nzIKxq_QdOCYdJ3-"
			}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/subscription/index.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			t.a = Object(n.b)(() => Object(r.c)({
				language: a.P,
				userIsSubscriber: i.Z
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(o.d([s], !0)),
					onSubscriptionsRequested: () => e(o.e()),
					onUnsubscribe: () => e(o.d([s], !1))
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = s.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, r.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("polygon", {
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/pages/ErrorPages/index.m.less"),
				c = s.n(a);
			const d = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: c.a.container
					}, o.a.createElement("h3", {
						className: c.a.title
					}, t || n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), o.a.createElement(i.h, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, n.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				l = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: c.a.container
					}, o.a.createElement("h3", {
						className: c.a.title
					}, t || n.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), o.a.createElement(i.h, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, n.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
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
				Tab: "_2uHXZPL50rkqc9W6hfkMqh",
				tab: "_2uHXZPL50rkqc9W6hfkMqh",
				active: "_6HS8TG3gGfQ0riebWteWQ",
				focus: "_25AQL5oJuA5PKbvrdQ4SPp"
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
				TabHeader: "_1muyR0TUeh2SYSizmqyfRP",
				tabHeader: "_1muyR0TUeh2SYSizmqyfRP",
				TabTitle: "XrV8c7ORQWcvL04ZOGcvh",
				tabTitle: "XrV8c7ORQWcvL04ZOGcvh"
			}
		},
		"./src/reddit/pages/Topic/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeListingKey/index.ts"),
				l = s("./src/reddit/actions/pages/topic.ts"),
				u = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				m = s("./src/reddit/components/Governance/VotingBanner/async.tsx"),
				b = s("./src/reddit/components/ListingPostList/index.tsx"),
				p = s("./src/reddit/components/SEOTitle/index.tsx"),
				h = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				g = s("./src/reddit/components/SidebarContainer/index.tsx"),
				_ = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				f = s("./src/reddit/components/TopicSidebar/index.m.less"),
				v = s.n(f);
			var x = e => {
					const {
						children: t,
						className: s
					} = e;
					return r.a.createElement(g.a, {
						className: s
					}, t, r.a.createElement(_.a, {
						className: v.a.StickyBottom
					}))
				},
				E = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				S = s("./src/reddit/controls/Button/index.tsx"),
				T = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				N = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				O = s("./src/reddit/selectors/topic.ts"),
				C = s("./node_modules/fbt/lib/FbtPublic.js"),
				L = s("./src/lib/prettyPrintNumber/index.ts"),
				j = s("./src/reddit/components/SubredditIcon/index.tsx"),
				w = s("./src/reddit/components/SubscribeButton/index.tsx"),
				I = s("./src/reddit/constants/posts.ts"),
				P = s("./src/reddit/controls/InternalLink/index.tsx"),
				k = s("./src/reddit/helpers/name/index.ts"),
				F = s("./src/reddit/models/Widgets/index.ts"),
				B = s("./src/reddit/selectors/subreddit.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less"),
				W = s.n(H);
			const M = Object(i.c)({
				isLoggedIn: R.H,
				subreddit: B.y,
				subredditAboutInfo: B.v
			});
			class D extends r.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditClick = () => {
						const {
							discoveryUnit: e,
							sendEvent: t,
							subreddit: s,
							subredditAboutInfo: n
						} = this.props;
						if (!s) return;
						const r = Object(F.i)(s, n);
						t(Object(T.j)(e, r))
					}
				}
				render() {
					const {
						className: e,
						isLoggedIn: t,
						subreddit: s
					} = this.props;
					return s ? r.a.createElement("div", {
						className: Object(a.a)(W.a.Container, e)
					}, r.a.createElement(j.b, {
						className: W.a.Icon,
						subredditOrProfile: s
					}), r.a.createElement("div", {
						className: W.a.Text
					}, r.a.createElement(P.a, {
						className: W.a.Link,
						onMouseDown: this.trackSubredditClick,
						to: s.url
					}, r.a.createElement("div", {
						className: W.a.Name
					}, Object(k.b)(s.displayText || s.name)), r.a.createElement("div", {
						className: W.a.Members
					}, C.fbt._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [C.fbt._plural(s.subscribers, "subscribers count", Object(L.b)(s.subscribers))], {
						hk: "48BXj1"
					})))), r.a.createElement(w.a, {
						border: !1,
						className: Object(a.a)(W.a.SubscribeButton, {
							[W.a.hidden]: !t
						}),
						identifier: {
							name: s.name,
							type: I.a.SUBREDDIT
						},
						small: !0
					})) : null
				}
			}
			var J = Object(o.b)(M)(Object(y.c)(D)),
				A = s("./src/reddit/helpers/styles/mixins/loading.ts");
			var G = e => {
					const {
						className: t
					} = e, s = Object(A.b)({
						isLoading: !0
					});
					return r.a.createElement("div", {
						className: Object(a.a)(W.a.Container, t)
					}, r.a.createElement("div", {
						className: Object(a.a)(W.a.Icon, W.a.placeholder, s)
					}), r.a.createElement("div", {
						className: W.a.Text
					}, r.a.createElement("div", {
						className: W.a.Link
					}, r.a.createElement("div", {
						className: Object(a.a)(W.a.Name, W.a.placeholder, s)
					}), r.a.createElement("div", {
						className: Object(a.a)(W.a.Members, W.a.placeholder, s)
					}))), r.a.createElement("div", {
						className: W.a.SubscribeButton
					}))
				},
				U = s("./src/reddit/components/TopicSidebar/SubredditList/index.m.less"),
				z = s.n(U);
			const {
				fbt: Q
			} = s("./node_modules/fbt/lib/FbtPublic.js"), V = 8, Y = Array.from({
				length: V
			}).map((e, t) => r.a.createElement(G, {
				className: z.a.Subreddit,
				key: t
			})), q = Object(i.c)({
				subredditNames: O.d
			}), Z = Object(o.b)(q), K = {
				enabled: !0,
				id: "xd_103",
				layout: N.d.Large,
				surface: N.e.Topic,
				unitName: N.i,
				unitType: N.f.SubredditListing,
				url: ""
			};
			class X extends r.a.Component {
				constructor() {
					super(...arguments), this.renderSubreddit = e => r.a.createElement(J, {
						className: z.a.Subreddit,
						discoveryUnit: K,
						key: e,
						subredditName: e
					}), this.onSeeMoreCommunities = () => {
						this.props.onSeeMoreCommunities && (this.props.sendEvent(Object(T.t)(K)), this.props.onSeeMoreCommunities())
					}
				}
				render() {
					const {
						className: e,
						subredditNames: t
					} = this.props, s = t.slice(0, V);
					return r.a.createElement(E.a, {
						className: Object(a.a)(z.a.Container, e)
					}, r.a.createElement("div", {
						className: z.a.Title
					}, r.a.createElement(p.b, {
						type: p.a.Widget
					}, Q._("Top Communities", null, {
						hk: "46yzcK"
					}))), r.a.createElement("div", {
						className: z.a.SubredditList
					}, s.length > 0 ? s.map(this.renderSubreddit) : Y), t.length > V && r.a.createElement(S.n, {
						className: z.a.SeeMore,
						onClick: this.onSeeMoreCommunities
					}, Q._("See more", null, {
						hk: "2qkY6H"
					})))
				}
			}
			var $ = Z(Object(y.c)(X)),
				ee = s("./src/reddit/constants/listings.ts"),
				te = s("./src/reddit/constants/postLayout.ts"),
				se = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ne = s("./src/reddit/helpers/trackers/screenview.ts"),
				re = s("./src/reddit/layout/page/Listing/index.tsx"),
				oe = s("./src/reddit/pages/ErrorPages/index.tsx"),
				ie = s("./src/reddit/components/Flair/index.tsx"),
				ae = s("./src/reddit/models/Flair/index.ts"),
				ce = s("./src/reddit/pages/Topic/SubredditList/Subreddit/index.m.less"),
				de = s.n(ce);
			const {
				fbt: le
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ue = Object(i.c)({
				isLoggedIn: R.H,
				subreddit: B.P,
				subredditAboutInfo: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.about[s]
				}
			}), me = Object(o.b)(ue), be = {
				text: "nsfw",
				type: ae.f.Nsfw
			};
			var pe = me(e => {
					const {
						className: t,
						isLoggedIn: s,
						subreddit: n,
						subredditAboutInfo: o
					} = e, i = Object(k.b)(n.displayText || n.name);
					return r.a.createElement("div", {
						className: Object(a.a)(de.a.Container, t)
					}, r.a.createElement(j.b, {
						className: de.a.Icon,
						subredditOrProfile: n
					}), r.a.createElement("div", {
						className: de.a.Text
					}, r.a.createElement(P.a, {
						className: de.a.Link,
						to: n.url
					}, r.a.createElement("div", {
						className: de.a.Name
					}, i), r.a.createElement("div", {
						className: de.a.Meta
					}, r.a.createElement("div", {
						className: de.a.Members
					}, le._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [le._plural(n.subscribers, "subscribers count", Object(L.b)(n.subscribers))], {
						hk: "48BXj1"
					})), (e => r.a.createElement(r.a.Fragment, null, e.isNSFW && r.a.createElement(ie.b, {
						flair: be
					})))(n))), r.a.createElement("div", {
						className: de.a.About
					}, o.publicDescription || le._("Welcome to {subreddit name}", [le._param("subreddit name", i)], {
						hk: "vZ7VH"
					})), r.a.createElement(P.a, {
						className: de.a.VisitLink,
						to: n.url
					}, le._("Visit", null, {
						hk: "2z3clp"
					}))), r.a.createElement(w.a, {
						className: Object(a.a)(de.a.SubscribeButton, {
							[de.a.hidden]: !s
						}),
						identifier: {
							name: n.name,
							type: I.a.SUBREDDIT
						},
						small: !0
					}))
				}),
				he = s("./src/reddit/pages/Topic/SubredditList/index.m.less"),
				ge = s.n(he);
			const _e = [],
				fe = Object(i.c)({
					subredditIds: (e, t) => {
						let {
							topicSlug: s
						} = t;
						const n = Object(O.a)(e, {
							topicSlug: s
						});
						return n && n.subredditIds || _e
					}
				});
			class ve extends r.a.Component {
				constructor() {
					super(...arguments), this.renderSubreddit = e => r.a.createElement(pe, {
						className: ge.a.Subreddit,
						key: e,
						subredditId: e
					})
				}
				render() {
					const {
						subredditIds: e
					} = this.props;
					return r.a.createElement("div", {
						className: ge.a.SubredditList
					}, e.map(this.renderSubreddit))
				}
			}
			var xe = Object(o.b)(fe)(ve),
				Ee = s("./src/reddit/selectors/platform.ts"),
				ye = s("./src/reddit/pages/Topic/TopicHeader/index.m.less"),
				Se = s.n(ye);
			const {
				fbt: Te
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Ne;
			! function(e) {
				e.Communities = "communities", e.Posts = "posts"
			}(Ne || (Ne = {}));
			class Oe extends r.a.Component {
				constructor() {
					super(...arguments), this.onPostsTabClick = () => {
						this.props.onTabClick(Ne.Posts)
					}, this.onCommunitiesTabClick = () => {
						this.props.onTabClick(Ne.Communities)
					}
				}
				render() {
					const {
						activeTab: e,
						className: t,
						layout: s,
						tabs: n,
						topicName: o
					} = this.props;
					return r.a.createElement("div", {
						className: Object(a.a)(Se.a.Container, t)
					}, r.a.createElement("div", {
						className: Object(a.a)(Se.a.Content, s === te.g.Large ? Se.a.cardWidth : Se.a.fullWidth)
					}, r.a.createElement("div", {
						className: Se.a.Header
					}, r.a.createElement("div", {
						className: Se.a.Title
					}, r.a.createElement(p.b, {
						type: p.a.TopicHeader
					}, o)), r.a.createElement("div", {
						className: Se.a.Subtitle
					}, Te._("Topic on Reddit", null, {
						hk: "1HEhmv"
					}))), r.a.createElement("div", {
						className: Se.a.Tabs
					}, n.includes(Ne.Posts) && r.a.createElement("div", {
						className: Object(a.a)(Se.a.Tab, {
							[Se.a.active]: e === Ne.Posts
						}),
						onClick: this.onPostsTabClick
					}, Te._("Posts", null, {
						hk: "3RLrle"
					})), n.includes(Ne.Communities) && r.a.createElement("div", {
						className: Object(a.a)(Se.a.Tab, {
							[Se.a.active]: e === Ne.Communities
						}),
						onClick: this.onCommunitiesTabClick
					}, Te._("Communities", null, {
						hk: "KIwd1"
					})))))
				}
			}
			var Ce = Oe,
				Le = s("./src/reddit/pages/Topic/index.m.less"),
				je = s.n(Le);
			const {
				fbt: we
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ie = Object(se.t)(), Pe = (e, t) => {
				let {
					match: s
				} = t;
				return s.params.topicSlug
			}, ke = Object(i.a)(Pe, e => Object(d.a)(ee.b.Topic, null, {
				topicSlug: e
			})), Fe = (e, t) => t.match.params.sort || c.O, Be = e => {
				const t = [];
				return e ? (e.hasPosts && t.push(Ne.Posts), e.hasSubreddits && t.push(Ne.Communities), t) : t
			}, Re = Object(o.b)(() => Object(i.a)((e, t) => Object(O.c)(e, Pe(0, t), !0), (e, t) => Object(O.a)(e, {
				topicSlug: Pe(0, t)
			}), Pe, ke, se.M, Fe, Ee.c, (e, t, s, n, r, o, i) => ({
				layout: r,
				listingKey: n,
				sort: o,
				status: i || 200,
				tabs: Be(t),
				timeSort: void 0,
				topicName: e,
				topicSlug: s
			})), (e, t) => ({
				onLoadMorePosts: () => e(Object(l.g)(t.match.params))
			})), He = (e, t) => e === Ne.Communities ? te.g.Large : t;
			class We extends r.a.Component {
				constructor(e) {
					super(e), this.openTab = e => {
						this.setState({
							activeTab: e,
							activeLayout: He(e, this.props.layout)
						}), window.scrollTo(0, 0)
					}, this.openCommunitiesTab = () => {
						this.openTab(Ne.Communities)
					}, this.onViewed = (e, t) => Object(ne.d)(this.props.listingKey, this.props.sort, t, e, this.props.timeSort), this.renderNoPosts = () => null, this.renderHeader = () => {
						const {
							topicName: e
						} = this.props, {
							activeLayout: t,
							activeTab: s
						} = this.state;
						let n, o = !1;
						return s === Ne.Posts ? (n = we._("Posts about {topic name}", [we._param("topic name", e)], {
							hk: "3AGfU"
						}), o = !0) : s === Ne.Communities && (n = we._("Communities related to {topic name}", [we._param("topic name", e)], {
							hk: "jKM0V"
						})), r.a.createElement("div", {
							className: je.a.TabHeader
						}, r.a.createElement("div", {
							className: je.a.TabTitle
						}, r.a.createElement(p.b, {
							type: p.a.Widget
						}, n)), o && r.a.createElement(u.a, {
							className: je.a.PostsLayoutSwitch,
							layout: te.e[t]
						}))
					}, this.state = {
						activeTab: void 0,
						activeLayout: te.g.Large
					}
				}
				static getDerivedStateFromProps(e, t) {
					const s = t.activeTab && e.tabs && e.tabs.includes(t.activeTab) ? t.activeTab : e.tabs ? e.tabs[0] : void 0;
					return {
						activeLayout: He(s, e.layout),
						activeTab: s
					}
				}
				render() {
					const {
						className: e,
						listingKey: t,
						status: s,
						tabs: n,
						topicName: o,
						topicSlug: i
					} = this.props, {
						activeLayout: c,
						activeTab: d
					} = this.state, l = ee.b.Topic;
					if (404 === s) return r.a.createElement(oe.b, null);
					const u = r.a.createElement(r.a.Fragment, null, this.renderHeader(), r.a.createElement("div", {
						className: Object(a.a)(je.a.TopicTab, {
							[je.a.active]: d === Ne.Communities
						})
					}, r.a.createElement(xe, {
						topicSlug: i
					})), r.a.createElement("div", {
						className: Object(a.a)(je.a.TopicTab, {
							[je.a.active]: d === Ne.Posts
						})
					}, d === Ne.Posts && r.a.createElement(b.a, {
						forcedLayout: c,
						listingKey: t,
						listingName: l,
						listingViewed: this.onViewed,
						noPostsComponent: this.renderNoPosts,
						onLoadMore: this.props.onLoadMorePosts
					}), r.a.createElement(m.a, null)));
					let p;
					return d === Ne.Posts && n.includes(Ne.Communities) && (p = r.a.createElement(r.a.Fragment, null, r.a.createElement($, {
						topicSlug: i,
						onSeeMoreCommunities: this.openCommunitiesTab
					}))), r.a.createElement(h.a, null, r.a.createElement(re.a, {
						className: Object(a.a)(je.a.Container, e),
						content: u,
						fitPageToContent: !0,
						forcedLayout: c,
						sidebars: [null, r.a.createElement(x, {
							className: je.a.SidebarRight,
							listingName: l
						}, p)],
						navBar: r.a.createElement(Ce, {
							activeTab: d,
							layout: c,
							onTabClick: this.openTab,
							tabs: n,
							topicName: o
						})
					}))
				}
			}
			t.default = Ie(Re(We))
		}
	}
]);
//# sourceMappingURL=Topic.27a3d6f5d2318b29da95.js.map