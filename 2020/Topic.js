// https://www.redditstatic.com/desktop2x/Topic.49aad577adf91d03bbd9.js
// Retrieved at 5/5/2020, 1:30:06 PM by Reddit Dataminer v1.0.0
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, r.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
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
							var i = r.element,
								o = a(i),
								c = this._rootContainsTarget(i),
								l = r.entry,
								d = t && c && this._computeTargetAndRootIntersection(i, s),
								u = r.entry = new n({
									time: e.performance && performance.now && performance.now(),
									target: i,
									boundingClientRect: o,
									rootBounds: s,
									intersectionRect: d
								});
							l ? t && c ? this._hasCrossedThreshold(l, u) && this._queuedEntries.push(u) : l && l.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, r.prototype._computeTargetAndRootIntersection = function(s, n) {
						if ("none" != e.getComputedStyle(s).display) {
							for (var r, i, o, c, d, u, m, b, p = a(s), h = l(s), g = !1; !g;) {
								var _ = null,
									f = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == f.display) return;
								if (h == this.root || h == t ? (g = !0, _ = n) : h != t.body && h != t.documentElement && "visible" != f.overflow && (_ = a(h)), _ && (r = _, i = p, o = void 0, c = void 0, d = void 0, u = void 0, m = void 0, b = void 0, o = Math.max(r.top, i.top), c = Math.min(r.bottom, i.bottom), d = Math.max(r.left, i.left), u = Math.min(r.right, i.right), b = c - o, !(p = (m = u - d) >= 0 && b >= 0 && {
										top: o,
										bottom: c,
										left: d,
										right: u,
										width: m,
										height: b
									}))) break;
								h = l(h)
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
								var i = this.thresholds[r];
								if (i == s || i == n || i < s != i < n) return !0
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
					var s, n, r, i = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (s = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, r = null, function() {
						r || (r = setTimeout((function() {
							s(), r = null
						}), n))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function i(e, t, s, n) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, s, n || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, s)
				}

				function o(e, t, s, n) {
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
						s = l(s)
					}
					return !1
				}

				function l(e) {
					var t = e.parentNode;
					return t && 11 == t.nodeType && t.host ? t.host : t
				}
			}(window, document)
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseTimes.js"),
				r = s("./node_modules/lodash/_castFunction.js"),
				i = s("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				a = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > o) return [];
				var s = a,
					l = c(e, a);
				t = r(t), e -= a;
				for (var d = n(l, t); ++s < e;) t(s);
				return d
			}
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
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/higherOrderComponents/makeAsync.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/loadWithRetries/index.ts"),
				b = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				p = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = s("./src/reddit/icons/svgs/Close/index.tsx"),
				g = s("./src/reddit/selectors/moderatorPermissions.ts"),
				_ = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/userPrefs.ts"),
				v = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				E = s.n(v),
				x = function(e, t) {
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), T = u.a.div("BladeContainer", E.a), S = u.a.wrapped(h.a, "CloseIcon", E.a), N = u.a.div("LoadingTitleContainer", E.a), O = u.a.div("LoadingNavContainer", E.a), L = u.a.div("ShortLoadingNav", E.a), C = u.a.wrapped(p.a, "ThemedChevron", E.a), j = e => {
				var t = x(e, []);
				return o.a.createElement(T, null, o.a.createElement(S, null), o.a.createElement(b.k, null, o.a.createElement(b.p, null, y._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), o.a.createElement(b.o, null, o.a.createElement(N, null, o.a.createElement("div", {
					className: Object(d.a)(E.a.LoadingTitle, t.isLoading && E.a.loading)
				})), o.a.createElement(O, null, o.a.createElement("div", {
					className: Object(d.a)(E.a.LoadingNav, t.isLoading && E.a.loading)
				}), o.a.createElement(C, null)), o.a.createElement(O, null, o.a.createElement(L, null), o.a.createElement(C, null)), o.a.createElement(O, null, o.a.createElement("div", {
					className: Object(d.a)(E.a.LoadingNav, t.isLoading && E.a.loading)
				}), o.a.createElement(C, null)), o.a.createElement(O, null, o.a.createElement(L, null), o.a.createElement(C, null)), o.a.createElement(O, null, o.a.createElement("div", {
					className: Object(d.a)(E.a.LoadingNav, t.isLoading && E.a.loading)
				}), o.a.createElement(C, null)))))
			}, P = Object(l.a)({
				getComponent: () => Object(m.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("StructuredStyles")]).then(s.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => o.a.createElement(j, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => o.a.createElement(j, {
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
				return e.moderatorPermissions && t && e.isEditing ? o.a.createElement("div", {
					className: Object(d.a)(E.a.Container, e.isSubscriptionsPinned && E.a.isSubscriptionPinned)
				}, e.children, o.a.createElement(P, {
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
				return l
			})), s.d(t, "m", (function() {
				return d
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
				return E
			})), s.d(t, "j", (function() {
				return x
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				i = s.n(r);
			const o = n.a.section("FormPage", i.a),
				a = n.a.h1("HomePageTitle", i.a),
				c = n.a.button("HomePageBreadcrumb", i.a),
				l = n.a.div("HomePageGroup", i.a),
				d = n.a.h1("FormPageTitle", i.a),
				u = n.a.div("FormPageSection", i.a),
				m = n.a.div("FormGroup", i.a),
				b = n.a.h2("FormGroupTitle", i.a),
				p = n.a.div("FormElement", i.a),
				h = n.a.div("FormGroupDescription", i.a),
				g = n.a.div("FormItem", i.a),
				_ = n.a.h3("FormElementTitle", i.a),
				f = n.a.div("FormElementDescription", i.a),
				v = n.a.div("FormElementError", i.a),
				E = n.a.div("FormElementSubGroup", i.a),
				x = n.a.li("FormListItem", i.a)
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
				i = s.n(r),
				o = s("./src/reddit/constants/elementClassNames.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
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
				f = p.a.wrapped(l.a, "SubscribeIcon", m.a),
				v = p.a.wrapped(c.a, "UnsubscribeIcon", m.a),
				E = p.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = g(e, ["border", "small"]);
					return i.a.createElement(_, n, i.a.createElement(f, {
						className: Object(b.a)(n.className, {
							[m.a.isSmall]: s
						})
					}))
				}, "SubscribeIconButton", m.a),
				x = p.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = g(e, ["border", "small"]);
					return t ? i.a.createElement(a.f, h({}, n, {
						className: Object(b.a)(n.className, {
							[m.a.isSmall]: s
						})
					})) : i.a.createElement(a.n, h({}, n, {
						className: Object(b.a)(n.className, {
							[m.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", m.a),
				y = e => {
					var {
						icon: t
					} = e, s = g(e, ["icon"]);
					return t ? i.a.createElement(E, h({}, s, {
						className: Object(b.a)(s.className, {
							[m.a.isSmall]: s.small
						})
					})) : i.a.createElement(x, h({}, s, {
						className: Object(b.a)(s.className, {
							[m.a.isSmall]: s.small
						})
					}))
				},
				T = p.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: n,
						type: r
					} = e, a = g(e, ["border", "language", "small", "type"]);
					return i.a.createElement(_, a, i.a.createElement(v, {
						className: Object(b.a)(o.n, a.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "UnsubscribeIconButton", m.a),
				S = p.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: r,
						type: o
					} = e, c = g(e, ["border", "language", "small", "type"]);
					const l = i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
							className: m.a.UnsubscribeButtonDefault
						}, "subreddit" === o ? n.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : n.fbt._("Following", null, {
							hk: "1wQlVR"
						})), i.a.createElement("span", {
							className: m.a.UnsubscribeButtonHover
						}, "subreddit" === o ? n.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : n.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						d = Object(b.a)(c.className, {
							[m.a.isSmall]: r
						});
					return t ? i.a.createElement(a.i, h({}, c, {
						className: d,
						children: l
					})) : i.a.createElement(a.n, h({}, c, {
						className: d,
						children: l
					}))
				}, "UnsubscribeButton", m.a),
				N = e => {
					var {
						icon: t
					} = e, s = g(e, ["icon"]);
					return t ? i.a.createElement(T, h({}, s, {
						className: Object(b.a)(s.className, {
							[m.a.isSmall]: s.small
						})
					})) : i.a.createElement(S, h({}, s, {
						className: Object(b.a)(s.className, {
							[m.a.isSmall]: s.small
						})
					}))
				};
			class O extends i.a.Component {
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
						small: o = !1
					} = this.props, a = {
						border: e,
						className: t,
						icon: s,
						onClick: this.onClick,
						small: o
					};
					return this.props.userIsSubscriber ? i.a.createElement(N, h({}, a, {
						language: r,
						type: this.props.identifier.type
					})) : i.a.createElement(y, h({}, a, {
						id: n
					}), this.props.children, Object(d.a)({
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const r = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				i = {
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
				o = e => {
					let {
						type: t,
						key: s
					} = e;
					return i[r({
						type: t
					})][s]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/TrackingHelper/index.tsx"),
				r = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(n.c)(i.a))
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
				i = s("./src/reddit/actions/subscription/index.ts"),
				o = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			t.a = Object(n.b)(() => Object(r.c)({
				language: a.P,
				userIsSubscriber: o.Z
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(i.d([s], !0)),
					onSubscriptionsRequested: () => e(i.e()),
					onUnsubscribe: () => e(i.d([s], !1))
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
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(i.a)(a.a.chevron, e.className),
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
				return l
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/pages/ErrorPages/index.m.less"),
				c = s.n(a);
			const l = e => {
					let {
						message: t
					} = e;
					return i.a.createElement("div", {
						className: c.a.container
					}, i.a.createElement("h3", {
						className: c.a.title
					}, t || n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), i.a.createElement(o.h, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, n.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				d = e => {
					let {
						message: t
					} = e;
					return i.a.createElement("div", {
						className: c.a.container
					}, i.a.createElement("h3", {
						className: c.a.title
					}, t || n.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), i.a.createElement(o.h, {
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
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/makeListingKey/index.ts"),
				d = s("./src/reddit/actions/pages/topic.ts"),
				u = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				m = s("./src/reddit/components/Governance/VotingBanner/async.tsx"),
				b = s("./src/reddit/components/ListingPostList/index.tsx"),
				p = s("./src/reddit/components/SEOTitle/index.tsx"),
				h = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				g = s("./src/reddit/components/SidebarContainer/index.tsx"),
				_ = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				f = s("./src/reddit/components/TopicSidebar/index.m.less"),
				v = s.n(f);
			var E = e => {
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
				x = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				T = s("./src/reddit/controls/Button/index.tsx"),
				S = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				N = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				O = s("./src/reddit/selectors/topic.ts"),
				L = s("./node_modules/fbt/lib/FbtPublic.js"),
				C = s("./src/lib/prettyPrintNumber/index.ts"),
				j = s("./src/reddit/components/SubredditIcon/index.tsx"),
				P = s("./src/reddit/components/SubscribeButton/index.tsx"),
				I = s("./src/reddit/constants/posts.ts"),
				k = s("./src/reddit/controls/InternalLink/index.tsx"),
				w = s("./src/reddit/helpers/name/index.ts"),
				B = s("./src/reddit/models/Widgets/index.ts"),
				F = s("./src/reddit/selectors/subreddit.ts"),
				M = s("./src/reddit/selectors/user.ts"),
				R = s("./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less"),
				W = s.n(R);
			const H = Object(o.c)({
				isLoggedIn: M.H,
				subreddit: F.y,
				subredditAboutInfo: F.v
			});
			class J extends r.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditClick = () => {
						const {
							discoveryUnit: e,
							sendEvent: t,
							subreddit: s,
							subredditAboutInfo: n
						} = this.props;
						if (!s) return;
						const r = Object(B.i)(s, n);
						t(Object(S.j)(e, r))
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
					}, r.a.createElement(k.a, {
						className: W.a.Link,
						onMouseDown: this.trackSubredditClick,
						to: s.url
					}, r.a.createElement("div", {
						className: W.a.Name
					}, Object(w.b)(s.displayText || s.name)), r.a.createElement("div", {
						className: W.a.Members
					}, L.fbt._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [L.fbt._plural(s.subscribers, "subscribers count", Object(C.b)(s.subscribers))], {
						hk: "48BXj1"
					})))), r.a.createElement(P.a, {
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
			var A = Object(i.b)(H)(Object(y.c)(J)),
				G = s("./src/reddit/helpers/styles/mixins/loading.ts");
			var U = e => {
					const {
						className: t
					} = e, s = Object(G.b)({
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
				D = s("./src/reddit/components/TopicSidebar/SubredditList/index.m.less"),
				Q = s.n(D);
			const {
				fbt: z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), V = 8, q = Array.from({
				length: V
			}).map((e, t) => r.a.createElement(U, {
				className: Q.a.Subreddit,
				key: t
			})), Z = Object(o.c)({
				subredditNames: O.d
			}), K = Object(i.b)(Z), Y = {
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
					super(...arguments), this.renderSubreddit = e => r.a.createElement(A, {
						className: Q.a.Subreddit,
						discoveryUnit: Y,
						key: e,
						subredditName: e
					}), this.onSeeMoreCommunities = () => {
						this.props.onSeeMoreCommunities && (this.props.sendEvent(Object(S.t)(Y)), this.props.onSeeMoreCommunities())
					}
				}
				render() {
					const {
						className: e,
						subredditNames: t
					} = this.props, s = t.slice(0, V);
					return r.a.createElement(x.a, {
						className: Object(a.a)(Q.a.Container, e)
					}, r.a.createElement("div", {
						className: Q.a.Title
					}, r.a.createElement(p.b, {
						type: p.a.Widget
					}, z._("Top Communities", null, {
						hk: "46yzcK"
					}))), r.a.createElement("div", {
						className: Q.a.SubredditList
					}, s.length > 0 ? s.map(this.renderSubreddit) : q), t.length > V && r.a.createElement(T.n, {
						className: Q.a.SeeMore,
						onClick: this.onSeeMoreCommunities
					}, z._("See more", null, {
						hk: "2qkY6H"
					})))
				}
			}
			var $ = K(Object(y.c)(X)),
				ee = s("./src/reddit/constants/listings.ts"),
				te = s("./src/reddit/constants/postLayout.ts"),
				se = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ne = s("./src/reddit/helpers/trackers/screenview.ts"),
				re = s("./src/reddit/layout/page/Listing/index.tsx"),
				ie = s("./src/reddit/pages/ErrorPages/index.tsx"),
				oe = s("./src/reddit/components/Flair/index.tsx"),
				ae = s("./src/reddit/models/Flair/index.ts"),
				ce = s("./src/reddit/pages/Topic/SubredditList/Subreddit/index.m.less"),
				le = s.n(ce);
			const {
				fbt: de
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ue = Object(o.c)({
				isLoggedIn: M.H,
				subreddit: F.P,
				subredditAboutInfo: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.about[s]
				}
			}), me = Object(i.b)(ue), be = {
				text: "nsfw",
				type: ae.f.Nsfw
			};
			var pe = me(e => {
					const {
						className: t,
						isLoggedIn: s,
						subreddit: n,
						subredditAboutInfo: i
					} = e, o = Object(w.b)(n.displayText || n.name);
					return r.a.createElement("div", {
						className: Object(a.a)(le.a.Container, t)
					}, r.a.createElement(j.b, {
						className: le.a.Icon,
						subredditOrProfile: n
					}), r.a.createElement("div", {
						className: le.a.Text
					}, r.a.createElement(k.a, {
						className: le.a.Link,
						to: n.url
					}, r.a.createElement("div", {
						className: le.a.Name
					}, o), r.a.createElement("div", {
						className: le.a.Meta
					}, r.a.createElement("div", {
						className: le.a.Members
					}, de._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [de._plural(n.subscribers, "subscribers count", Object(C.b)(n.subscribers))], {
						hk: "48BXj1"
					})), (e => r.a.createElement(r.a.Fragment, null, e.isNSFW && r.a.createElement(oe.b, {
						flair: be
					})))(n))), r.a.createElement("div", {
						className: le.a.About
					}, i.publicDescription || de._("Welcome to {subreddit name}", [de._param("subreddit name", o)], {
						hk: "vZ7VH"
					})), r.a.createElement(k.a, {
						className: le.a.VisitLink,
						to: n.url
					}, de._("Visit", null, {
						hk: "2z3clp"
					}))), r.a.createElement(P.a, {
						className: Object(a.a)(le.a.SubscribeButton, {
							[le.a.hidden]: !s
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
				fe = Object(o.c)({
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
			var Ee = Object(i.b)(fe)(ve),
				xe = s("./src/reddit/selectors/platform.ts"),
				ye = s("./src/reddit/pages/Topic/TopicHeader/index.m.less"),
				Te = s.n(ye);
			const {
				fbt: Se
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
						topicName: i
					} = this.props;
					return r.a.createElement("div", {
						className: Object(a.a)(Te.a.Container, t)
					}, r.a.createElement("div", {
						className: Object(a.a)(Te.a.Content, s === te.g.Large ? Te.a.cardWidth : Te.a.fullWidth)
					}, r.a.createElement("div", {
						className: Te.a.Header
					}, r.a.createElement("div", {
						className: Te.a.Title
					}, r.a.createElement(p.b, {
						type: p.a.TopicHeader
					}, i)), r.a.createElement("div", {
						className: Te.a.Subtitle
					}, Se._("Topic on Reddit", null, {
						hk: "1HEhmv"
					}))), r.a.createElement("div", {
						className: Te.a.Tabs
					}, n.includes(Ne.Posts) && r.a.createElement("div", {
						className: Object(a.a)(Te.a.Tab, {
							[Te.a.active]: e === Ne.Posts
						}),
						onClick: this.onPostsTabClick
					}, Se._("Posts", null, {
						hk: "3RLrle"
					})), n.includes(Ne.Communities) && r.a.createElement("div", {
						className: Object(a.a)(Te.a.Tab, {
							[Te.a.active]: e === Ne.Communities
						}),
						onClick: this.onCommunitiesTabClick
					}, Se._("Communities", null, {
						hk: "KIwd1"
					})))))
				}
			}
			var Le = Oe,
				Ce = s("./src/reddit/pages/Topic/index.m.less"),
				je = s.n(Ce);
			const {
				fbt: Pe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ie = Object(se.t)(), ke = (e, t) => {
				let {
					match: s
				} = t;
				return s.params.topicSlug
			}, we = Object(o.a)(ke, e => Object(l.a)(ee.b.Topic, null, {
				topicSlug: e
			})), Be = (e, t) => t.match.params.sort || c.N, Fe = e => {
				const t = [];
				return e ? (e.hasPosts && t.push(Ne.Posts), e.hasSubreddits && t.push(Ne.Communities), t) : t
			}, Me = Object(i.b)(() => Object(o.a)((e, t) => Object(O.c)(e, ke(0, t), !0), (e, t) => Object(O.a)(e, {
				topicSlug: ke(0, t)
			}), ke, we, se.N, Be, xe.c, (e, t, s, n, r, i, o) => ({
				layout: r,
				listingKey: n,
				sort: i,
				status: o || 200,
				tabs: Fe(t),
				timeSort: void 0,
				topicName: e,
				topicSlug: s
			})), (e, t) => ({
				onLoadMorePosts: () => e(Object(d.g)(t.match.params))
			})), Re = (e, t) => e === Ne.Communities ? te.g.Large : t;
			class We extends r.a.Component {
				constructor(e) {
					super(e), this.openTab = e => {
						this.setState({
							activeTab: e,
							activeLayout: Re(e, this.props.layout)
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
						let n, i = !1;
						return s === Ne.Posts ? (n = Pe._("Posts about {topic name}", [Pe._param("topic name", e)], {
							hk: "3AGfU"
						}), i = !0) : s === Ne.Communities && (n = Pe._("Communities related to {topic name}", [Pe._param("topic name", e)], {
							hk: "jKM0V"
						})), r.a.createElement("div", {
							className: je.a.TabHeader
						}, r.a.createElement("div", {
							className: je.a.TabTitle
						}, r.a.createElement(p.b, {
							type: p.a.Widget
						}, n)), i && r.a.createElement(u.a, {
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
						activeLayout: Re(s, e.layout),
						activeTab: s
					}
				}
				render() {
					const {
						className: e,
						listingKey: t,
						status: s,
						tabs: n,
						topicName: i,
						topicSlug: o
					} = this.props, {
						activeLayout: c,
						activeTab: l
					} = this.state, d = ee.b.Topic;
					if (404 === s) return r.a.createElement(ie.b, null);
					const u = r.a.createElement(r.a.Fragment, null, this.renderHeader(), r.a.createElement("div", {
						className: Object(a.a)(je.a.TopicTab, {
							[je.a.active]: l === Ne.Communities
						})
					}, r.a.createElement(Ee, {
						topicSlug: o
					})), r.a.createElement("div", {
						className: Object(a.a)(je.a.TopicTab, {
							[je.a.active]: l === Ne.Posts
						})
					}, l === Ne.Posts && r.a.createElement(b.a, {
						forcedLayout: c,
						listingKey: t,
						listingName: d,
						listingViewed: this.onViewed,
						noPostsComponent: this.renderNoPosts,
						onLoadMore: this.props.onLoadMorePosts
					}), r.a.createElement(m.a, null)));
					let p;
					return l === Ne.Posts && n.includes(Ne.Communities) && (p = r.a.createElement(r.a.Fragment, null, r.a.createElement($, {
						topicSlug: o,
						onSeeMoreCommunities: this.openCommunitiesTab
					}))), r.a.createElement(h.a, null, r.a.createElement(re.a, {
						className: Object(a.a)(je.a.Container, e),
						content: u,
						fitPageToContent: !0,
						forcedLayout: c,
						sidebars: [null, r.a.createElement(E, {
							className: je.a.SidebarRight,
							listingName: d
						}, p)],
						navBar: r.a.createElement(Le, {
							activeTab: l,
							layout: c,
							onTabClick: this.openTab,
							tabs: n,
							topicName: i
						})
					}))
				}
			}
			t.default = Ie(Me(We))
		}
	}
]);
//# sourceMappingURL=Topic.49aad577adf91d03bbd9.js.map