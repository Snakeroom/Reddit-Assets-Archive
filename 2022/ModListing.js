// https://www.redditstatic.com/desktop2x/ModListing.12081fa698f8767eecda.js
// Retrieved at 4/7/2022, 6:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModListing"], {
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
					s.prototype.THROTTLE_TIMEOUT = 100, s.prototype.POLL_INTERVAL = null, s.prototype.observe = function(e) {
						if (!this._observationTargets.some((function(t) {
								return t.element == e
							}))) {
							if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: e,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, s.prototype.unobserve = function(e) {
						this._observationTargets = this._observationTargets.filter((function(t) {
							return t.element != e
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, s.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, s.prototype.takeRecords = function() {
						var e = this._queuedEntries.slice();
						return this._queuedEntries = [], e
					}, s.prototype._initThresholds = function(e) {
						var t = e || [0];
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, n) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== n[t - 1]
						}))
					}, s.prototype._parseRootMargin = function(e) {
						var t = (e || "0px").split(/\s+/).map((function(e) {
							var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
							if (!t) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(t[1]),
								unit: t[2]
							}
						}));
						return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
					}, s.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, s.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, s.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							n = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(s) {
							var i = s.element,
								o = a(i),
								d = this._rootContainsTarget(i),
								c = s.entry,
								l = t && d && this._computeTargetAndRootIntersection(i, n),
								u = s.entry = new r({
									time: e.performance && performance.now && performance.now(),
									target: i,
									boundingClientRect: o,
									rootBounds: n,
									intersectionRect: l
								});
							c ? t && d ? this._hasCrossedThreshold(c, u) && this._queuedEntries.push(u) : c && c.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, s.prototype._computeTargetAndRootIntersection = function(n, r) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var s, i, o, d, l, u, m, h, p = a(n), b = c(n), g = !1; !g;) {
								var f = null,
									y = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == y.display) return;
								if (b == this.root || b == t ? (g = !0, f = r) : b != t.body && b != t.documentElement && "visible" != y.overflow && (f = a(b)), f && (s = f, i = p, o = void 0, d = void 0, l = void 0, u = void 0, m = void 0, h = void 0, o = Math.max(s.top, i.top), d = Math.min(s.bottom, i.bottom), l = Math.max(s.left, i.left), u = Math.min(s.right, i.right), h = d - o, !(p = (m = u - l) >= 0 && h >= 0 && {
										top: o,
										bottom: d,
										left: l,
										right: u,
										width: m,
										height: h
									}))) break;
								b = c(b)
							}
							return p
						}
					}, s.prototype._getRootRect = function() {
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
					}, s.prototype._expandRectByRootMargin = function(e) {
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
					}, s.prototype._hasCrossedThreshold = function(e, t) {
						var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (n !== r)
							for (var s = 0; s < this.thresholds.length; s++) {
								var i = this.thresholds[s];
								if (i == n || i == r || i < n != i < r) return !0
							}
					}, s.prototype._rootIsInDom = function() {
						return !this.root || d(t, this.root)
					}, s.prototype._rootContainsTarget = function(e) {
						return d(this.root || t, e)
					}, s.prototype._registerInstance = function() {
						n.indexOf(this) < 0 && n.push(this)
					}, s.prototype._unregisterInstance = function() {
						var e = n.indexOf(this); - 1 != e && n.splice(e, 1)
					}, e.IntersectionObserver = s, e.IntersectionObserverEntry = r
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
						s = r.width * r.height;
					this.intersectionRatio = n ? s / n : this.isIntersecting ? 1 : 0
				}

				function s(e, t) {
					var n, r, s, i = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, s = null, function() {
						s || (s = setTimeout((function() {
							n(), s = null
						}), r))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function i(e, t, n, r) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
				}

				function o(e, t, n, r) {
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

				function d(e, t) {
					for (var n = t; n;) {
						if (n == e) return !0;
						n = c(n)
					}
					return !1
				}

				function c(e) {
					var t = e.parentNode;
					return t && 11 == t.nodeType && t.host ? t.host : t
				}
			}(window, document)
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseTimes.js"),
				s = n("./node_modules/lodash/_castFunction.js"),
				i = n("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				a = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > o) return [];
				var n = a,
					c = d(e, a);
				t = s(t), e -= a;
				for (var l = r(c, t); ++n < e;) t(n);
				return l
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, n, r) {
				var s = n ? n.call(r, e, t) : void 0;
				if (void 0 !== s) return !!s;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var i = Object.keys(e),
					o = Object.keys(t);
				if (i.length !== o.length) return !1;
				for (var a = Object.prototype.hasOwnProperty.bind(t), d = 0; d < i.length; d++) {
					var c = i[d];
					if (!a(c)) return !1;
					var l = e[c],
						u = t[c];
					if (!1 === (s = n ? n.call(r, l, u, c) : void 0) || void 0 === s && l !== u) return !1
				}
				return !0
			}
		},
		"./src/reddit/actions/inContextModeration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "INCONTEXT__BANNED",
				i = "INCONTEXT__MUTED",
				o = Object(r.a)(s),
				a = Object(r.a)(i)
		},
		"./src/reddit/actions/moderationLog/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "SUBREDDIT__MODERATION_LOG_LOADED",
				s = "SUBREDDIT__ALL_MODERATORS_LOADED"
		},
		"./src/reddit/actions/pages/modListing/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "modListingDataPending", (function() {
				return L
			})), n.d(t, "modListingDataLoaded", (function() {
				return P
			})), n.d(t, "modListingDataFailed", (function() {
				return N
			})), n.d(t, "modListingPageRequested", (function() {
				return F
			})), n.d(t, "morePostsPending", (function() {
				return B
			})), n.d(t, "morePostsLoaded", (function() {
				return H
			})), n.d(t, "morePostsFailed", (function() {
				return A
			})), n.d(t, "moreModListingRequested", (function() {
				return D
			})), n.d(t, "hideSubredditSuccess", (function() {
				return K
			})), n.d(t, "hideSubredditPending", (function() {
				return U
			})), n.d(t, "hideSubredditFailed", (function() {
				return V
			})), n.d(t, "unhideSubredditSuccess", (function() {
				return W
			})), n.d(t, "unhideSubredditPending", (function() {
				return q
			})), n.d(t, "unhideSubredditFailed", (function() {
				return J
			})), n.d(t, "toggleHiddenSubreddit", (function() {
				return z
			})), n.d(t, "hideSubreddit", (function() {
				return Q
			})), n.d(t, "unhideSubreddit", (function() {
				return X
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/pick.js"),
				i = n.n(s),
				o = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/lib/makeListingKey/index.ts"),
				c = n("./src/reddit/actions/platform.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/page.ts"),
				m = n("./src/reddit/constants/parameters.ts"),
				h = n("./src/config.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				g = n("./src/reddit/constants/headers.ts"),
				f = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				y = n("./src/reddit/helpers/name/index.ts"),
				v = n("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				_ = (e, t) => Object(p.a)(e, {
					data: t,
					endpoint: Object(f.a)(Object(v.a)(`${h.a.gatewayUrl}/desktopapi/v1/mod`)),
					method: o.jb.GET
				});
			const O = (e, t, n, r) => Object(p.a)(Object(b.a)(e, [g.a]), {
					endpoint: `${e.apiUrl}/api/filter/user/${t}/f/mod/${Object(y.c)(n)}`,
					method: r ? o.jb.PUT : o.jb.DELETE,
					data: {
						model: JSON.stringify({
							name: Object(y.h)(n)
						})
					}
				}),
				S = (e, t, n) => O(e, t, n, !0),
				I = (e, t, n) => O(e, t, n, !1);
			var w = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				E = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				x = n("./src/reddit/helpers/timeApiRoute/index.ts"),
				C = n("./src/reddit/helpers/trackers/screenview.ts"),
				M = n("./src/reddit/models/Toast/index.ts"),
				j = n("./src/reddit/routes/modListing/index.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				T = n("./src/reddit/actions/pages/modListing/constants.ts");
			const L = Object(a.a)(T.f),
				P = Object(a.a)(T.e),
				N = Object(a.a)(T.d),
				R = (e, t) => async (n, s, i) => {
					const o = s();
					if (o.listings.postOrder.api.pending[e]) return;
					n(L({
						key: e
					}));
					const a = await Object(x.a)("modListing", () => _(i.apiContext(), t)),
						d = `error-${e}`;
					a.ok ? (n(P({
						key: e,
						meta: o.meta,
						...a.body
					})), n(l.g(d))) : (n(N({
						error: a.error,
						key: e,
						...a.body
					})), 401 === a.status ? Object(E.a)(n, o) : n(l.f({
						id: d,
						kind: M.b.Error,
						text: r.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: r.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: R(e, t)
					})))
				}, F = (e, t) => async (n, s) => {
					const {
						sort: a = o.X
					} = e.params, l = Object(j.d)(e.path), h = l ? u.f : u.e, p = Object(d.a)(h, a, e.queryParams), b = s(), g = b.listings.postOrder.ids[p], f = b.listings.postOrder.api.error[p];
					if (b.listings.postOrder.api.pending[p] || g && !f && !t) return void(g && n(c.m({
						title: r.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})));
					const y = G(e.queryParams);
					await n(R(p, {
						...i()(e.queryParams, m.n),
						...i()(e.queryParams, m.m),
						filtered: !!l || void 0,
						moderated_srs: !0,
						sort: a,
						t: Object(w.a)(a, y)
					})), n(c.m({
						title: r.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})), Object(C.h)(s(), !0)
				}, B = Object(a.a)(T.i), H = Object(a.a)(T.h), A = Object(a.a)(T.g), D = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const a = n(),
						c = a.platform.currentPage;
					if (!c) return;
					const {
						sort: l = o.X
					} = e, h = c.queryParams, p = Object(j.d)(c.url), b = p ? u.f : u.e, g = Object(d.a)(b, l, h), f = a.listings.postOrder.loadMore[g];
					if (!f) return;
					const y = a.listings.postOrder.api.pending[g],
						v = a.listings.postOrder.fetchedTokens,
						O = !(!v[g] || !v[g][f.token]);
					if (y || O) return;
					const S = G(h);
					t(B({
						key: g,
						fetchedToken: f.token
					}));
					const I = await _(s(), {
							after: f.token,
							dist: f.dist,
							filtered: !!p || void 0,
							sort: l,
							t: Object(w.a)(l, S),
							...i()(h, m.n)
						}),
						E = a.listings.postOrder.ids[g],
						x = {
							...I.body,
							postIds: (I.body.postIds || []).filter(e => !E || !E.includes(e))
						};
					I.ok ? t(H({
						key: g,
						fetchedToken: f.token,
						meta: a.meta,
						...x
					})) : t(A({
						key: g,
						error: I.error,
						fetchedToken: f.token,
						...x
					}))
				};

			function G(e) {
				const t = m.E in e && e[m.E].toUpperCase() || "";
				return t in o.hc && o.hc[t]
			}
			const K = Object(a.a)(T.c),
				U = Object(a.a)(T.b),
				V = Object(a.a)(T.a),
				W = Object(a.a)(T.l),
				q = Object(a.a)(T.k),
				J = Object(a.a)(T.j),
				z = (e, t) => async (n, r, s) => {
					let {
						apiContext: i
					} = s;
					const o = r(),
						a = Object(k.k)(o),
						[d, c, l, u] = t ? [U, K, V, S] : [q, W, J, I];
					if (!a || !a.displayText) return;
					const {
						currentPage: m
					} = o.platform;
					if (!m || !m.routeMatch) return;
					n(d(e));
					const h = await u(i(), a.displayText, e);
					h.ok ? (await n(F(m.routeMatch.match, !0)), n(c(e))) : n(l(h.body))
				}, Q = e => z(e, !0), X = e => z(e, !1)
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/ModHub/Content/NoPermissions.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/reddit/contexts/NavbarExp.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ModHub/Content/index.m.less"),
				l = n.n(c);
			t.a = e => {
				const t = Object(i.useContext)(a.a);
				return o.a.createElement("div", {
					className: Object(d.a)(l.a.noPermissions, {
						[l.a.noPermissionsExp]: t
					})
				}, o.a.createElement("img", {
					className: l.a.rememberTheHuman,
					src: `${r.a.assetPath}/img/content-gate-icons/remember-the-human.png`
				}), e.isModerator ? s.fbt._("Sorry, you do not have the moderator permissions needed to view this page", null, {
					hk: "4wUDIF"
				}) : s.fbt._("Sorry, this is a moderator-only page", null, {
					hk: "2BZEIA"
				}), o.a.createElement("div", {
					className: l.a.noPermissionsSmallText
				}, e.isModerator ? s.fbt._("You need to change your mod permissions to view this page", null, {
					hk: "RS9sd"
				}) : e.subredditDisplayText ? s.fbt._("You must be a moderator of {subredditName} to view this page", [s.fbt._param("subredditName", e.subredditDisplayText)], {
					hk: "8eU68"
				}) : s.fbt._("You must be a moderator to view this page", null, {
					hk: "2N7TXH"
				})))
			}
		},
		"./src/reddit/components/ModHub/Content/index.m.less": function(e, t, n) {
			e.exports = {
				titleFontH1: "CgYEK3BSwEitV3N5dS53Y",
				titleFontH2: "WtxSi4x3A6EHSYOlNO6dC",
				titleFontH3: "_1s8gRCw9ZEGeZdDLi4SjEs",
				titleFontH4: "iJgEN-DVO9xH1ING9PGia",
				titleFontH5: "_1Pk2HmstIcHsVCyXL0s7WR",
				titleFontH6: "_27G51xRMOXRk6p8hF2iFF4",
				metadataFont: "_3qFnOmsyfNVU4dOg-nT7AH",
				flairFont: "IHVtmv3d9vjFTy7sOv4nb",
				labelsFont: "_3veeqeCCuB-y_5Uz7aZwNo",
				actionFont: "_2GGs_1qJNsgRTBkJjB3JyV",
				smallButtonFont: "_1wMkSw4TKFwpURuJjoijc8",
				largeButtonFont: "_37n4mei_IKI2b0S9cUN6kj",
				strongTextFont: "_3iiIycx9Jvd-wtbZRRlyrS",
				tabFont: "_2uzD_ZiaRuda1gPntdeFV-",
				buttonFontXS: "X1zM6CuE0STTL567u2KEr",
				buttonFontXs: "X1zM6CuE0STTL567u2KEr",
				buttonFontS: "_35xxostuR-t_KnCQpTxb0F",
				buttonFontM: "_1siVd6fOXNWDs8SbSH_HQ5",
				buttonFontL: "_1mAbhFs88EE9k-jaJMzlbM",
				buttonFontXL: "FxQ8KBPxEROiwB1EG0sLr",
				buttonFontXl: "FxQ8KBPxEROiwB1EG0sLr",
				bodyFontH1: "_18F7ywSczMXfDxvUzIkKou",
				bodyFontH2: "_2gpSS7qXgM9-crN9KgQr_O",
				bodyFontH3: "-JM-6-h-SOMTCi9a5ZG0g",
				bodyFontH4: "_3ZVYgWzZxJjL_cahDG32l",
				bodyFontH5: "_15iJEJUM-il2Ud09a9yqhY",
				bodyFontH6: "_2kFIrTxjdWaprwQ9leev5x",
				bodyFontH6Small: "mhRrYXj7dAprAm-wE7DdO",
				bodyFont: "_38q9ZzND20FKMoX8BeB0u8",
				bodyFontSmall: "_1tFfFAHeLftmld2a2M4yIs",
				bodyFontMono: "_1N1SJCd40K_9LeW3MSWULf",
				rememberTheHuman: "_2S6IM2TPtTriI4r_2Op1Od",
				noPermissions: "_3jaCG74Q3u55JqGJy3u664",
				noPermissionsExp: "_30KCF1VJPMgbkHOfEhoE2p",
				noPermissionsSmallText: "_1Kxv5kLQoEOhRatEhltXrQ",
				container: "_3gsyCuYXsGWEEgPSTuX9aw",
				isLargePostLayout: "_1WGjuBpIEjcQC-x3_lE_Nu"
			}
		},
		"./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less": function(e, t, n) {
			e.exports = {
				modalMain: "_3TbrCaPQ_Ciq0W4JtRYgHR",
				modIcon: "_3QZVX2_MD7fnyaRbQVH7LG",
				modalBody: "IdgjnohCE075Y2bzY7kGD",
				modalTitle: "_1uJCbZDn510LJ80M7oIUiM",
				modalDescription: "_2txvYfpiVxk7MM45Ybezvj",
				feedDetailsHeader: "_1oHK5eWnpY1WTbgUlHAPGn",
				feedDetailsTitle: "r07hBWYi9sVEcAGnnrnbt",
				feedDetailsDescription: "_3od74XOi7ZCYUaElRDtJY4",
				loadingBar: "oMm7a2SmYiOmS3c_HeyVY",
				gradientAnimation: "_2TjoHmGKn7BjeBAEpBRL3T"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3w9CCp15Dn8xjuhR8VUE5n",
				hideButton: "_34rIurg3vPxO_tswAxt4wf",
				errorText: "dHzfi1tqA9d2uJEemybvK"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less": function(e, t, n) {
			e.exports = {
				row: "_3iC2jdvm0i0Q7HlrFJVoTC",
				iconStyles: "_9A1gbtA8zl5gRftEuuKPP",
				subredditIcon: "_327j3YarD5xmiCuu19J-XN",
				planetIcon: "_3RdGW7gz6XoGZ6oEgqKAVr",
				label: "_36BB5D1byWMjvVdrjUdv2",
				unhideButton: "iV4R5u2BbUz2dioFJNTAz",
				SubredditIcon: "_327j3YarD5xmiCuu19J-XN"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less": function(e, t, n) {
			e.exports = {
				rows: "_1q1k1QSwlFELkqmvELqzPI",
				noRows: "_2bMntgRcO2XGi6Tfep4QfV"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_25Nja5fbb_ZBbGBf8Bm2jO",
				hideCommunitiesHeader: "_2UuftU5L-0PE5_qTvLLSuB",
				inputContainer: "_16VxD_GKhjj0Mvr4ayqcAO",
				tertiaryButton: "_3KQk5TlvMCuZJm3Xc1Mk6L"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, n) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return h
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "o", (function() {
				return f
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "m", (function() {
				return v
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "k", (function() {
				return S
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "i", (function() {
				return w
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "t", (function() {
				return M
			})), n.d(t, "u", (function() {
				return j
			})), n.d(t, "r", (function() {
				return k
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "s", (function() {
				return L
			})), n.d(t, "c", (function() {
				return P
			}));
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/controls/Input/ModalInput.tsx"),
				c = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const h = s.a.wrapped(c.a, "CloseIcon", u.a),
				p = s.a.section("ModalBody", u.a),
				b = s.a.section("ModalPostPreview", u.a),
				g = s.a.p("ModalText", u.a),
				f = s.a.div("ModalSmallText", u.a),
				y = s.a.div("ModalDescriptionText", u.a),
				v = s.a.div("ModalMetaText", u.a),
				_ = s.a.label("ModalFormItem", u.a),
				O = s.a.wrapped(d.a, "ModalInput", u.a),
				S = s.a.label("ModalInputLabel", u.a),
				I = s.a.footer("ModalFooter", u.a),
				w = s.a.header("ModalHeader", u.a),
				E = s.a.div("ModalTitle", u.a),
				x = s.a.div("ModalAnnotation", u.a),
				C = s.a.div("ModalMain", u.a),
				M = s.a.textarea("TextArea", u.a),
				j = s.a.wrapped(a.l, "WarningButton", u.a),
				k = s.a.wrapped(a.l, "PrimaryButton", u.a),
				T = s.a.wrapped(a.o, "CancelButton", u.a),
				L = s.a.wrapped(a.r, "RemoveButton", u.a),
				P = e => {
					let {
						className: t,
						...n
					} = e;
					return o.a.createElement(a.t, m({
						kind: a.b.Button,
						priority: a.c.Primary,
						className: Object(r.a)(u.a.ConfirmButton, t)
					}, n))
				}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less": function(e, t, n) {
			e.exports = {
				SubredditIcon: "YsExfuojv3MEBi8M0sQGM",
				subredditIcon: "YsExfuojv3MEBi8M0sQGM",
				Label: "-KyE0niKrEy2RqEuYXENt",
				label: "-KyE0niKrEy2RqEuYXENt"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less": function(e, t, n) {
			e.exports = {
				CommunityCount: "_2FGPtEJLumoHbu-QFFxout",
				communityCount: "_2FGPtEJLumoHbu-QFFxout",
				SubredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				subredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				SidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				sidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				ModalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq",
				modalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return w
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				h = n.n(m),
				p = n("./src/lib/lessComponent.tsx");
			const b = p.a.wrapped(l.b, "SubredditIcon", h.a),
				g = p.a.span("Label", h.a),
				f = Object(c.c)({
					subredditOrProfile: u.K
				});
			var y = Object(d.b)(f)(e => {
				let {
					children: t,
					subredditOrProfile: n
				} = e;
				return t(n, i.a.createElement(i.a.Fragment, null, i.a.createElement(b, {
					subredditOrProfile: n
				}), i.a.createElement(g, null, n.displayText)))
			});
			var v = e => {
					let {
						children: t,
						className: n,
						subredditsOrProfilesIds: r
					} = e;
					const s = r.map(e => i.a.createElement(y, {
						children: t,
						key: e.id,
						identifier: e
					}));
					return i.a.createElement("div", {
						className: n
					}, s)
				},
				_ = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				O = n.n(_);
			const S = p.a.div("CommunityCount", O.a),
				I = p.a.wrapped(v, "SubredditsOrProfiles", O.a),
				w = p.a.wrapped(o.a, "SidebarSubreddit", O.a),
				E = p.a.wrapped(o.a, "ModalSubreddit", O.a);
			var x;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(x || (x = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: n,
					onSeeMoreDetails: s,
					subredditCategory: o = {
						name: r.fbt._("multi", null, {
							hk: "28Z7Rp"
						})
					}
				} = e, d = t ? w : E, c = n.length, l = t && n.length > 4;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(S, null, r.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [r.fbt._plural(c, "number"), r.fbt._param("category", o.name)], {
					hk: "33iWe4"
				})), c > 0 && i.a.createElement(I, {
					subredditsOrProfilesIds: t ? n.slice(0, 4) : n
				}, (t, n) => i.a.createElement(d, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, n)), c > 0 && l && i.a.createElement(a.r, {
					onClick: s
				}, r.fbt._("See more", null, {
					hk: "QYkk2"
				})))
			}
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
				NoneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				noneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				CountryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR",
				countryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = n("./src/reddit/constants/location.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				p = n("./src/reddit/helpers/trackers/navigation.ts"),
				b = n("./src/reddit/selectors/experiments/countrySites.ts"),
				g = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				f = n("./src/reddit/selectors/meta.ts"),
				y = n("./src/reddit/components/SidebarFooter/index.m.less"),
				v = n.n(y);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = d.a.a("Link", v.a), S = Object(o.c)({
				isCountrySitesEnabled: b.b,
				isNavbarLikeMwebEnabled: g.a,
				countryCode: f.b
			}), I = Object(i.b)(S), w = Object(m.u)({
				isFrontpage: m.A,
				isCountrySitePage: m.y
			});
			t.a = w(I(Object(c.c)(e => {
				const t = Object(i.f)().getState(),
					n = Object(b.a)(t, Object(a.c)());
				if (e.isNavbarLikeMwebEnabled) return e.isFrontpage ? s.a.createElement(l.a, {
					className: v.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, s.a.createElement("div", {
					className: v.a.LinkContainer
				}, s.a.createElement("div", {
					className: v.a.Column
				}, s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, _._("User Agreement", null, {
					hk: "2RA6JL"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, _._("Privacy policy", null, {
					hk: "10K04G"
				}))), s.a.createElement("div", {
					className: v.a.Column
				}, s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, _._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, _._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), s.a.createElement("div", {
					className: v.a.Copyright
				}, _._("© {year} Reddit, Inc. All rights reserved.", [_._param("year", (new Date).getFullYear().toString())], {
					hk: "sR7zP"
				}))) : null;
				const r = t => {
					const r = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "USA/Global",
						it: "Italiano"
					};
					return n.includes(t) || "en" === t ? s.a.createElement(O, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(p.a)(t))
					}, r[t]) : null
				};
				return s.a.createElement(l.a, {
					className: v.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, s.a.createElement("div", {
					className: v.a.LinkContainer
				}, s.a.createElement("div", {
					className: v.a.Column
				}, s.a.createElement(O, {
					href: "https://www.reddithelp.com"
				}, _._("help", null, {
					hk: "4lyYaD"
				})), s.a.createElement(O, {
					href: "https://www.reddit.com/coins"
				}, _._("Reddit coins", null, {
					hk: "32iMaN"
				})), s.a.createElement(O, {
					href: "https://www.reddit.com/premium"
				}, _._("Reddit premium", null, {
					hk: "RuO3A"
				})), e.isFrontpage && s.a.createElement(s.a.Fragment, null, s.a.createElement(O, {
					href: "https://www.reddit.com/subreddits/a-1/"
				}, _._("Communities", null, {
					hk: "3CJu37"
				})), s.a.createElement(O, {
					href: `https://www.reddit.com${Object(h.a)()}`
				}, _._("Rereddit", null, {
					hk: "1z3k7C"
				})), s.a.createElement(O, {
					href: "https://www.reddit.com/topics/a-1/"
				}, _._("Topics", null, {
					hk: "349RFt"
				}))), !!u.b[e.countryCode] && s.a.createElement(s.a.Fragment, null, s.a.createElement(O, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, _._("Impressum", null, {
					hk: "4cKXSI"
				})), s.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, _._("Transparency report", null, {
					hk: "3CgBdG"
				})), s.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: v.a.NoneCapitalizeLink
				}, _._("Report NetzDG Content", null, {
					hk: "1nszCF"
				})))), s.a.createElement("div", {
					className: v.a.Column
				}, s.a.createElement(O, {
					href: "https://www.redditinc.com/"
				}, _._("about", null, {
					hk: "1sqJKs"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/careers"
				}, _._("careers", null, {
					hk: "26ABvc"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/press"
				}, _._("press", null, {
					hk: "2Qmgdz"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/advertising"
				}, _._("advertise", null, {
					hk: "Mt40U"
				})), s.a.createElement(O, {
					href: "http://www.redditblog.com/"
				}, _._("blog", null, {
					hk: "46IQJw"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, _._("Terms", null, {
					hk: "4qRzfE"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, _._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, _._("Privacy policy", null, {
					hk: "10K04G"
				})), s.a.createElement(O, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, _._("Mod policy", null, {
					hk: "2gYc2T"
				})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && s.a.createElement("div", {
					className: v.a.CountryLinkContainer
				}, s.a.createElement("div", {
					className: v.a.Column
				}, r("en"), r("fr"), r("it")), s.a.createElement("div", {
					className: v.a.Column
				}, r("de"), r("es"))), s.a.createElement("div", {
					className: v.a.Copyright
				}, _._("Reddit Inc © {year}. All rights reserved", [_._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
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
				s = n("./node_modules/lodash/throttle.js"),
				i = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				d = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/constants/elementIds.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/components/BackToTop/index.m.less"),
				m = n.n(u);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				if (e) {
					const e = document.getElementById(c.d);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var b = e => {
					let {
						className: t,
						isOverlay: n,
						style: s
					} = e;
					return a.a.createElement("div", {
						className: Object(r.a)(t, m.a.container),
						style: s
					}, a.a.createElement(l.l, {
						className: m.a.button,
						onClick: () => p(n)
					}, h._("Back to Top", null, {
						hk: "YjBtV"
					})))
				},
				g = n("./src/reddit/components/SidebarFooter/index.tsx"),
				f = n("./src/reddit/constants/componentSizes.ts"),
				y = n("./src/reddit/contexts/PageLayer/index.tsx"),
				v = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				_ = n.n(v),
				O = n("./src/lib/lessComponent.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const I = d.e[1] + 24,
				w = f.f + 8,
				E = w + 152 + 16,
				x = E + I + 8,
				C = O.a.div("Container", _.a),
				M = O.a.wrapped(e => {
					let {
						className: t,
						isOverlay: n,
						...r
					} = e;
					return a.a.createElement(b, S({
						className: t,
						isOverlay: n,
						style: {
							top: `calc(100vh - ${n?w:8}px)`
						}
					}, r))
				}, "BackToTop", _.a),
				j = e => {
					let {
						children: t,
						className: n,
						isFakeOverlay: s,
						isSticky: i
					} = e;
					return a.a.createElement("div", {
						className: Object(r.a)(n, {
							[_.a.StickyStyles]: i && !s,
							[_.a.StickyStylesFakeOverlay]: !!s
						})
					}, t)
				};
			class k extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > x,
						shouldFooterSticky: this.windowHeight > E
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
							adComponentOnFakeOverlay: n,
							children: r,
							className: s,
							hideFooter: i,
							pageLayer: o
						}
					} = this, d = this.state.isAdSticky && !(!t && !r);
					return a.a.createElement(C, {
						className: s,
						innerRef: this.setWrapperRef
					}, a.a.createElement(j, {
						isFakeOverlay: n,
						isSticky: d
					}, t, r, !i && a.a.createElement(g.a, null)), !this.props.hideBackToTop && a.a.createElement(M, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const T = Object(y.u)();
			t.a = T(k)
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
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/trackers/widgets.ts"),
				p = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = n("./src/reddit/selectors/experiments/topPosts.ts"),
				g = n("./src/reddit/selectors/structuredStyles.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/models/Theme/index.ts"),
				v = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const _ = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(v.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				O = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(v.a)(e).widgetColors.sidebarWidgetHeaderColor,
				S = e => {
					const t = _(e);
					return Object(y.f)(t)
				},
				I = e => {
					const t = O(e);
					return Object(y.f)(t)
				};
			var w = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				E = n.n(w);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js"), C = Object(u.u)(), M = Object(i.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						r = t.redditStyle || Object(g.l)(e, {
							subredditId: n
						}),
						s = Object(f.db)(e);
					return r || s
				},
				nigtmode: f.db,
				subredditId: u.n,
				topPostVariant: b.d
			}));
			class j extends s.a.Component {
				constructor() {
					super(...arguments), this.contentRef = s.a.createRef(), this.state = {
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
					return e.backgroundColor = _(this.props), e.borderColor = Object(p.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = S(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = O(this.props), e.color = e.fill = I(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: r,
						headerButton: i,
						id: o,
						onClick: d,
						onHeaderClick: l,
						title: u,
						titleClassName: h,
						truncateThreshold: p
					} = this.props, b = n ? E.a.widgetContentOnly : E.a.widgetContent, g = !r && this.props.styles, f = g ? this.getWidgetBackgroundStyles() : {}, y = g ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(a.a)(t, E.a.widgetBackground, {
							[E.a.redditStyle]: r,
							[E.a.clickable]: !!d,
							[E.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": r,
						onClick: d,
						style: f
					}, u && s.a.createElement("div", {
						className: Object(a.a)(E.a.widgetHeader, {
							[E.a.clickable]: !!l
						}),
						id: o,
						style: y,
						onClick: l
					}, s.a.createElement("div", {
						className: Object(a.a)(E.a.widgetTitle, h)
					}, s.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), i), s.a.createElement("div", {
						className: Object(a.a)(b, {
							[E.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? p : "none"
						}
					}, e), this.state.isTruncated && s.a.createElement(m.r, {
						className: E.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, x._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = C(M(Object(d.a)(Object(l.c)(j))))
		},
		"./src/reddit/constants/location.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/redditGQL/types.ts");
			const s = {
					ZZ: "No country identified",
					XZ: "No country identified",
					AF: "Afghanistan",
					AX: "Aland Islands",
					AL: "Albania",
					DZ: "Algeria",
					AS: "American Samoa",
					AD: "Andorra",
					AO: "Angola",
					AI: "Anguilla",
					AQ: "Antarctica",
					AG: "Antigua and Barbuda",
					AR: "Argentina",
					AM: "Armenia",
					AW: "Aruba",
					AU: "Australia",
					AT: "Austria",
					AZ: "Azerbaijan",
					BS: "Bahamas",
					BH: "Bahrain",
					BD: "Bangladesh",
					BB: "Barbados",
					BY: "Belarus",
					BE: "Belgium",
					BZ: "Belize",
					BJ: "Benin",
					BM: "Bermuda",
					BT: "Bhutan",
					BO: "Bolivia",
					BQ: "Bonaire, Sint Eustatius and Saba",
					BA: "Bosnia and Herzegovina",
					BW: "Botswana",
					BV: "Bouvet Island",
					BR: "Brazil",
					IO: "British Indian Ocean Territory",
					BN: "Brunei Darussalam",
					BG: "Bulgaria",
					BF: "Burkina Faso",
					BI: "Burundi",
					KH: "Cambodia",
					CM: "Cameroon",
					CA: "Canada",
					CV: "Cape Verde",
					KY: "Cayman Islands",
					CF: "Central African Republic",
					TD: "Chad",
					CL: "Chile",
					CX: "Christmas Island",
					CC: "Cocos (Keeling) Islands",
					CO: "Colombia",
					KM: "Comoros",
					CG: "Congo, Republic of the",
					CD: "Congo, The Democratic Republic of the",
					CK: "Cook Islands",
					CR: "Costa Rica",
					CI: "Cote d'Ivoire",
					HR: "Croatia",
					CU: "Cuba",
					CW: "Curacao",
					CY: "Cyprus",
					CZ: "Czech Republic",
					DK: "Denmark",
					DJ: "Djibouti",
					DM: "Dominica",
					DO: "Dominican Republic",
					EC: "Ecuador",
					EG: "Egypt",
					SV: "El Salvador",
					GQ: "Equatorial Guinea",
					ER: "Eritrea",
					EE: "Estonia",
					SZ: "Eswatini",
					ET: "Ethiopia",
					FK: "Falkland Islands (Malvinas)",
					FO: "Faroe Islands",
					FJ: "Fiji",
					FI: "Finland",
					FR: "France",
					GF: "French Guiana",
					PF: "French Polynesia",
					TF: "French Southern Territories",
					GA: "Gabon",
					GM: "Gambia",
					GE: "Georgia",
					DE: "Germany",
					GH: "Ghana",
					GI: "Gibraltar",
					GR: "Greece",
					GL: "Greenland",
					GD: "Grenada",
					GP: "Guadeloupe",
					GU: "Guam",
					GT: "Guatemala",
					GG: "Guernsey",
					GN: "Guinea",
					GW: "Guinea-Bissau",
					GY: "Guyana",
					HT: "Haiti",
					HM: "Heard Island and McDonald Islands",
					HN: "Honduras",
					HK: "Hong Kong",
					HU: "Hungary",
					IS: "Iceland",
					IN: "India",
					ID: "Indonesia",
					IR: "Iran",
					IQ: "Iraq",
					IE: "Ireland",
					IM: "Isle of Man",
					IL: "Israel",
					IT: "Italy",
					JM: "Jamaica",
					JP: "Japan",
					JE: "Jersey",
					JO: "Jordan",
					KZ: "Kazakhstan",
					KE: "Kenya",
					KI: "Kiribati",
					XK: "Kosovo",
					KW: "Kuwait",
					KG: "Kyrgyzstan",
					LA: "Laos",
					LV: "Latvia",
					LB: "Lebanon",
					LS: "Lesotho",
					LR: "Liberia",
					LY: "Libya",
					LI: "Liechtenstein",
					LT: "Lithuania",
					LU: "Luxembourg",
					MO: "Macao",
					MK: "Macedonia",
					MG: "Madagascar",
					MW: "Malawi",
					MY: "Malaysia",
					MV: "Maldives",
					ML: "Mali",
					MT: "Malta",
					MH: "Marshall Islands",
					MQ: "Martinique",
					MR: "Mauritania",
					MU: "Mauritius",
					YT: "Mayotte",
					MX: "Mexico",
					FM: "Micronesia",
					MD: "Moldova",
					MC: "Monaco",
					MN: "Mongolia",
					ME: "Montenegro",
					MS: "Montserrat",
					MA: "Morocco",
					MZ: "Mozambique",
					MM: "Myanmar",
					NA: "Namibia",
					NR: "Nauru",
					NP: "Nepal",
					NL: "Netherlands",
					NC: "New Caledonia",
					NZ: "New Zealand",
					NI: "Nicaragua",
					NE: "Niger",
					NG: "Nigeria",
					NU: "Niue",
					NF: "Norfolk Island",
					MP: "Northern Mariana Islands",
					NO: "Norway",
					OM: "Oman",
					PK: "Pakistan",
					PW: "Palau",
					PS: "Palestinian Territory",
					PA: "Panama",
					PG: "Papua New Guinea",
					PY: "Paraguay",
					PE: "Peru",
					PH: "Philippines",
					PN: "Pitcairn",
					PL: "Poland",
					PT: "Portugal",
					PR: "Puerto Rico",
					QA: "Qatar",
					RE: "Reunion",
					RO: "Romania",
					RU: "Russia",
					RW: "Rwanda",
					BL: "Saint Barthelemey",
					SH: "Saint Helena",
					KN: "Saint Kitts and Nevis",
					LC: "Saint Lucia",
					MF: "Saint Martin",
					PM: "Saint Pierre and Miquelon",
					VC: "Saint Vincent and the Grenadines",
					WS: "Samoa",
					SM: "San Marino",
					ST: "Sao Tome and Principe",
					SA: "Saudi Arabia",
					SN: "Senegal",
					RS: "Serbia",
					SC: "Seychelles",
					SL: "Sierra Leone",
					SG: "Singapore",
					SX: "Sint Maarten",
					SK: "Slovakia",
					SI: "Slovenia",
					SB: "Solomon Islands",
					SO: "Somalia",
					ZA: "South Africa",
					GS: "South Georgia and the South Sandwich Islands",
					KR: "South Korea",
					SS: "South Sudan",
					ES: "Spain",
					LK: "Sri Lanka",
					SD: "Sudan",
					SR: "Suriname",
					SJ: "Svalbard and Jan Mayen",
					SE: "Sweden",
					CH: "Switzerland",
					SY: "Syria",
					TW: "Taiwan",
					TJ: "Tajikistan",
					TZ: "Tanzania",
					TH: "Thailand",
					TL: "Timor-Leste",
					TG: "Togo",
					TK: "Tokelau",
					TO: "Tonga",
					TT: "Trinidad and Tobago",
					TN: "Tunisia",
					TR: "Turkey",
					TM: "Turkmenistan",
					TC: "Turks and Caicos Islands",
					TV: "Tuvalu",
					UG: "Uganda",
					UA: "Ukraine",
					AE: "United Arab Emirates",
					GB: "United Kingdom",
					US: "United States",
					UM: "United States Minor Outlying Islands",
					UY: "Uruguay",
					UZ: "Uzbekistan",
					VU: "Vanuatu",
					VA: "Vatican City (Holy See)",
					VE: "Venezuela",
					VN: "Vietnam",
					VG: "Virgin Islands, British",
					VI: "Virgin Islands, U.S.",
					WF: "Wallis and Futuna",
					EH: "Western Sahara",
					YE: "Yemen",
					ZM: "Zambia",
					ZW: "Zimbabwe",
					XX: "Other country"
				},
				i = {
					[r.e.De]: s[r.e.De],
					[r.e.At]: s[r.e.At]
				}
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/constants/keycodes.ts"),
				c = n("./src/reddit/controls/Input/index.m.less"),
				l = n.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends s.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = e => {
						let {
							keyCode: t
						} = e;
						t === d.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return s.a.createElement("input", u({
						className: Object(o.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(i.b)(null, {
				closeModal: a.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/helpers/makeModQueueListingKey/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				const {
					profile: t,
					subreddit: n
				} = e;
				let r = n && `r/${n}` || t && `u/${t}` || "all";
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType || (r += `--[${e.onlyOfType}]`), r
			}
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			}));
			var r, s, i = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {}));
			const a = (e, t) => n => ({
					source: s.COMMUNITY_WIDGETS,
					action: i.c.CLICK,
					noun: r.SEE_MORE,
					widget: Object(o.ub)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...o.n
				}),
				d = (e, t) => n => ({
					source: s.POST,
					action: i.c.CLICK,
					noun: r.REREDDIT_PROMO,
					post: o.H(n, e),
					subreddit: o.gb(n),
					...t && {
						banner: {
							buttonText: t,
							id: r.REREDDIT_PROMO
						}
					},
					...o.n(n)
				}),
				c = () => e => ({
					source: s.SIDEBAR,
					action: i.c.VIEW,
					noun: r.TOPICS_WIDGET,
					...o.n(e)
				}),
				l = e => t => ({
					source: s.TOPICS_WIDGET,
					action: i.c.CLICK,
					noun: r.TOPIC,
					...o.n(t),
					topicMetadata: {
						displayName: e
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
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = n.n(o);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const c = e => {
				let {
					className: t,
					isSubreddit: n,
					...r
				} = e;
				return s.a.createElement("svg", d({
					className: Object(i.a)(a.a.dropdown, {
						[a.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r), s.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = c
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/constants/colors.ts");
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? i.a.orangered : "none"
			}))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/Inline/index.m.less"),
				i = n.n(s);
			t.a = r.a.div("inlineRow", i.a)
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				d = n.n(a);
			t.a = Object(i.a)(e => s.a.createElement("div", {
				className: Object(o.a)(d.a.exapndLeftContainer, e.className)
			}, s.a.createElement("div", {
				className: d.a.left
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: d.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/pages/ModListing/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/lodash/fromPairs.js"),
				s = n.n(r),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/extractQueryParams/index.ts"),
				u = n("./src/lib/makeListingKey/index.ts"),
				m = n("./src/reddit/actions/pages/modListing/index.ts"),
				h = n("./src/reddit/components/EmptySubreddit.tsx"),
				p = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				b = n("./src/reddit/components/JumpToContent/index.tsx"),
				g = n("./src/reddit/components/ListingPostList/index.tsx"),
				f = n("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				y = n("./node_modules/fbt/lib/FbtPublic.js"),
				v = n("./src/higherOrderComponents/asModal/index.tsx"),
				_ = n("./src/reddit/actions/modal.ts"),
				O = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				S = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				I = n("./src/reddit/controls/TextButton/index.tsx"),
				w = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				E = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				x = n("./src/reddit/selectors/activeModalId.ts"),
				C = n("./src/reddit/selectors/modQueue.ts"),
				M = n("./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less"),
				j = n.n(M);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js"), T = Object(v.a)(e => o.a.createElement(O.e, {
				className: j.a.modalBody
			}, o.a.createElement(O.i, null, o.a.createElement(E.a, null, o.a.createElement(O.q, {
				className: j.a.modalTitle
			}, o.a.createElement(w.a, {
				className: j.a.modIcon
			}), k._("r/Mod", null, {
				hk: "2a9ICx"
			})), o.a.createElement(I.a, {
				onClick: e.onCloseModal
			}, o.a.createElement(O.b, null)))), o.a.createElement(O.l, {
				className: j.a.modalMain
			}, o.a.createElement("div", {
				className: j.a.modalDescription
			}, k._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), o.a.createElement(S.b, {
				isSidebar: !1,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			})))), L = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
				className: j.a.feedDetailsTitle
			}, o.a.createElement(w.a, {
				className: j.a.modIcon
			}), k._("r/Mod", null, {
				hk: "2a9ICx"
			})), o.a.createElement("div", {
				className: j.a.feedDetailsDescription
			}, k._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), e.moderatedCommunitiesIds.length ? o.a.createElement(S.b, {
				isSidebar: !0,
				onSeeMoreDetails: e.onSeeMoreDetails,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			}) : o.a.createElement("div", {
				className: j.a.loadingBar
			})), P = Object(d.c)({
				isModalOpen: Object(x.b)("MOD_LISTING_FEED_DETAILS_MODAL_ID"),
				moderatedCommunitiesIds: C.e
			});
			var N = Object(a.b)(P, (e, t) => {
					let {} = t;
					return {
						toggleModal: () => e(Object(_.i)("MOD_LISTING_FEED_DETAILS_MODAL_ID"))
					}
				})(e => {
					const {
						isModalOpen: t,
						moderatedCommunitiesIds: n,
						toggleModal: r
					} = e;
					return n ? o.a.createElement(o.a.Fragment, null, o.a.createElement(L, {
						moderatedCommunitiesIds: n,
						onSeeMoreDetails: r
					}), t && o.a.createElement(T, {
						moderatedCommunitiesIds: n,
						onCloseModal: r,
						onOverlayClick: r,
						withOverlay: !0
					})) : null
				}),
				R = n("./node_modules/react-router-redux/es/index.js"),
				F = n("./src/reddit/components/TrackingHelper/index.tsx"),
				B = n("./src/reddit/contexts/PageLayer/index.tsx"),
				H = n("./src/reddit/controls/Button/index.tsx");
			const A = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				D = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				G = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				});
			var K = n("./src/reddit/routes/modListing/index.ts");
			const U = e => e.modListingPage.filteredSubreddits.api.pending;
			var V = n("./src/reddit/constants/keycodes.ts"),
				W = n("./src/reddit/layout/row/Inline/index.tsx"),
				q = n("./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less"),
				J = n.n(q);
			const z = Object(d.c)({
				apiError: e => e.modListingPage.filteredSubreddits.api.error,
				isApiPending: U
			});
			class Q extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditInput: ""
					}, this.clearSubredditInput = () => {
						this.setSubredditInput("")
					}, this.setSubredditInput = e => {
						this.setState({
							subredditInput: e
						})
					}, this.submitInput = () => {
						this.canSubmitInput() && (this.props.sendEvent(A()), this.props.hide(this.state.subredditInput), this.clearSubredditInput())
					}, this.onChange = e => {
						this.setSubredditInput(e.target.value)
					}, this.onKeyPress = e => {
						e.key === V.b.Enter && this.submitInput()
					}, this.canSubmitInput = () => this.state.subredditInput && !this.props.isApiPending
				}
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(W.a, null, o.a.createElement("input", {
						className: J.a.input,
						onChange: this.onChange,
						onKeyPress: this.onKeyPress,
						placeholder: y.fbt._("r/community", null, {
							hk: "4ceDB9"
						}),
						value: this.state.subredditInput
					}), o.a.createElement(H.l, {
						"aria-label": y.fbt._("Hide", null, {
							hk: "1BnFmX"
						}),
						className: J.a.hideButton,
						disabled: !this.canSubmitInput(),
						onClick: this.submitInput
					}, y.fbt._("Hide", null, {
						hk: "1BnFmX"
					}))), e.apiError && e.apiError.explanation && o.a.createElement("div", {
						className: J.a.errorText
					}, e.apiError.explanation))
				}
			}
			var X = Object(a.b)(z, e => ({
					hide: t => e(Object(m.hideSubreddit)(t))
				}))(Object(F.c)(Q)),
				Y = n("./src/lib/lessComponent.tsx"),
				Z = n("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = n("./src/lib/classNames/index.ts"),
				ee = n("./src/reddit/icons/fonts/helpers.tsx");
			var te = e => o.a.createElement("i", {
					className: Object($.a)(Object(ee.b)("clear", e.isFilled), e.className)
				}),
				ne = n("./src/reddit/selectors/profile.ts"),
				re = n("./src/reddit/selectors/subreddit.ts"),
				se = n("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less"),
				ie = n.n(se);
			const oe = Y.a.wrapped(Z.b, "SubredditIcon", ie.a),
				ae = Object(d.c)({
					isApiPending: U,
					subredditOrProfile: (e, t) => {
						const n = Object(re.x)(e, {
							subredditName: t.subredditName
						});
						if (!n) {
							const n = (e => e.startsWith(c.jc) ? e.slice(2) : e)(t.subredditName);
							return n && Object(ne.j)(e, {
								profileName: n
							}) || null
						}
						return n
					}
				});
			class de extends o.a.Component {
				constructor() {
					super(...arguments), this.onClickUnhideSubreddit = e => {
						e.stopPropagation(), e.preventDefault(), this.props.subredditOrProfile && (this.props.sendEvent(D()), this.props.unhide(this.props.subredditName))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.subredditOrProfile ? o.a.createElement(S.a, {
						className: ie.a.row,
						to: e.subredditOrProfile.url
					}, o.a.createElement(oe, {
						subredditOrProfile: e.subredditOrProfile
					}), o.a.createElement("span", {
						className: ie.a.label
					}, e.subredditOrProfile.displayText), !e.isApiPending && o.a.createElement("button", {
						"aria-label": y.fbt._("Unhide", null, {
							hk: "2sCv0O"
						}),
						className: ie.a.unhideButton,
						onClick: this.onClickUnhideSubreddit
					}, o.a.createElement(te, null))) : null
				}
			}
			var ce = Object(a.b)(ae, e => ({
					unhide: t => e(Object(m.unhideSubreddit)(t))
				}))(Object(F.c)(de)),
				le = n("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less"),
				ue = n.n(le);
			const {
				fbt: me
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var he = e => {
					let {
						hiddenSubredditsNames: t
					} = e;
					const n = t.map(e => o.a.createElement(ce, {
						key: e,
						subredditName: e
					}));
					return o.a.createElement(o.a.Fragment, null, t.length ? o.a.createElement("div", {
						className: ue.a.rows
					}, n) : o.a.createElement("div", {
						className: ue.a.noRows
					}, me._("Viewing all communities", null, {
						hk: "4p9SL8"
					})))
				},
				pe = n("./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less"),
				be = n.n(pe);
			const {
				fbt: ge
			} = n("./node_modules/fbt/lib/FbtPublic.js"), fe = Object(B.u)({
				filtered: e => !!e && Object(K.d)(e.url)
			}), ye = Object(d.c)({
				hiddenSubredditsNames: e => e.modListingPage.filteredSubreddits.names
			});
			class ve extends o.a.Component {
				constructor() {
					super(...arguments), this.onToggleFiltered = () => {
						this.props.sendEvent(G(this.props.filtered)), this.props.toggleFiltered()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement("div", {
						className: be.a.container
					}, o.a.createElement("div", {
						className: be.a.hideCommunitiesHeader
					}, ge._("Hide communities", null, {
						hk: "15OtHo"
					})), o.a.createElement(H.r, {
						className: be.a.tertiaryButton,
						onClick: this.onToggleFiltered
					}, e.filtered ? ge._("Go to unfiltered r/Mods", null, {
						hk: "2RGhxF"
					}) : ge._("Go to filtered r/Mod", null, {
						hk: "YdVw7"
					})), e.filtered && o.a.createElement("div", {
						className: be.a.inputContainer
					}, o.a.createElement(X, null), o.a.createElement(he, {
						hiddenSubredditsNames: e.hiddenSubredditsNames
					})))
				}
			}
			var _e = fe(Object(a.b)(ye, (e, t) => {
					let {
						filtered: n
					} = t;
					return {
						toggleFiltered: () => e(Object(R.b)(n ? K.a : K.b))
					}
				})(Object(F.c)(ve))),
				Oe = n("./src/reddit/components/SidebarContainer/index.tsx"),
				Se = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				Ie = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx");
			var we = () => o.a.createElement(Oe.a, null, o.a.createElement(Ie.a, {
					title: y.fbt._("Feed details", null, {
						hk: "3JlrpB"
					})
				}, o.a.createElement(N, null), o.a.createElement(_e, null)), o.a.createElement(Se.a, null)),
				Ee = n("./src/reddit/constants/page.ts"),
				xe = n("./src/reddit/constants/parameters.ts"),
				Ce = n("./src/reddit/helpers/trackers/screenview.ts"),
				Me = n("./src/reddit/layout/page/Listing/index.tsx"),
				je = n("./src/reddit/selectors/moderatorPermissions.ts");
			const ke = Object(d.a)((e, t) => {
					let {
						location: n
					} = t;
					return n.search
				}, (e, t) => {
					let {
						match: n
					} = t;
					return n.params.sort || c.W.HOT
				}, (e, t) => {
					let {
						match: n
					} = t;
					return Object(K.d)(n.path)
				}, je.k, je.d, (e, t, n, r, i) => {
					const o = s()([...Object(l.a)(e)]),
						a = xe.E in o && o[xe.E].toUpperCase(),
						d = "string" == typeof a && a in c.hc ? c.hc[a] : c.ic,
						m = n ? Ee.f : Ee.e;
					return {
						filtered: n,
						isModerator: r,
						isModeratorWithPostPerms: i,
						listingKey: Object(u.a)(m, t, o),
						listingName: m,
						sort: t,
						timeSort: d
					}
				}),
				Te = Object(a.b)(ke, (e, t) => ({
					onLoadMorePosts: () => e(m.moreModListingRequested({
						sort: t.match.params.sort
					}))
				}));
			class Le extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onViewed = (e, t) => Object(Ce.f)({
						key: this.props.listingKey,
						sort: this.props.sort,
						timerType: t,
						timerMillis: e
					}), this.renderEmptySubreddit = () => o.a.createElement(h.a, {
						listingName: this.props.listingName,
						sort: this.props.sort
					})
				}
				render() {
					const e = this.props.filtered ? K.b : K.a;
					return o.a.createElement("div", null, this.props.isModeratorWithPostPerms ? o.a.createElement(Me.a, {
						className: this.props.className,
						fitPageToContent: !0,
						content: o.a.createElement(o.a.Fragment, null, o.a.createElement(p.a, {
							baseUrl: e,
							sort: this.props.sort,
							timeSort: this.props.timeSort
						}), o.a.createElement(b.a, null), o.a.createElement(g.a, {
							listingKey: this.props.listingKey,
							listingName: this.props.listingName,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderEmptySubreddit,
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: o.a.createElement(we, null)
					}) : o.a.createElement(f.a, {
						isModerator: this.props.isModerator
					}))
				}
			}
			t.default = Te(Le)
		},
		"./src/reddit/reducers/pages/modHub/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/subredditModeration/constants.ts");
			var i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.g:
						case s.f:
							return null;
						case s.e:
							return t.payload;
						default:
							return e
					}
				},
				o = n("./src/reddit/models/SubredditModeration/index.ts");
			const a = {};
			var d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.g: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(o.e)(n, r);
							return {
								...e,
								[s]: !0
							}
						}
						case s.f:
						case s.e: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(o.e)(n, r);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				c = Object(r.c)({
					error: i,
					pending: d
				});
			const l = {};
			var u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.f: {
						const {
							fetchedToken: n,
							subredditId: r
						} = t.payload, s = Object(o.e)(r, n);
						return {
							...e,
							[s]: !0
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var h = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.f: {
							const {
								subredditId: e,
								after: n
							} = t.payload;
							return {
								[e]: n
							}
						}
						default:
							return e
					}
				},
				p = n("./node_modules/icepick/icepick.js");
			const b = {};
			var g = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.d:
					case s.f: {
						const {
							subredditId: n,
							approvedSubmitters: r
						} = t.payload, s = {
							[n]: r
						};
						return Object(p.merge)(e, s)
					}
					case s.k: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(p.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.j:
					case s.i:
						return null;
					case s.h:
						return t.payload;
					default:
						return e
				}
			};
			var y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.j:
							return !0;
						case s.i:
						case s.h:
							return !1;
						default:
							return e
					}
				},
				v = Object(r.c)({
					error: f,
					pending: y
				});
			var _ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.j:
							return null;
						case s.i: {
							const e = t.payload.approvedSubmitterIds[0];
							return e ? t.payload.approvedSubmitters[e] : null
						}
						default:
							return e
					}
				},
				O = Object(r.c)({
					api: v,
					result: _
				});
			const S = {};
			var I = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.f: {
							const {
								subredditId: n,
								approvedSubmitterIds: r
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...r]
							} : {
								...e,
								[n]: r
							}
						}
						case s.k: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case s.d: {
							const {
								subredditId: n,
								approvedSubmitterIds: r
							} = t.payload, s = r[0];
							return s && e[n] && -1 === e[n].indexOf(s) ? {
								[n]: [s, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				w = Object(r.c)({
					api: c,
					fetchedTokens: u,
					loadMore: h,
					models: g,
					search: O,
					userOrder: I
				}),
				E = n("./src/reddit/actions/grantUserFlair/constants.ts");
			var x = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case E.g:
					case E.i:
						return null;
					case E.f:
						return t.payload;
					default:
						return e
				}
			};
			var C = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.i:
							return !0;
						case E.g:
						case E.f:
							return !1;
						default:
							return e
					}
				},
				M = Object(r.c)({
					error: x,
					pending: C
				}),
				j = n("./node_modules/lodash/merge.js"),
				k = n.n(j),
				T = n("./node_modules/lodash/omit.js"),
				L = n.n(T);
			const P = {};
			var N = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case E.g:
					case E.k: {
						const {
							subredditId: n,
							flairedUsers: r
						} = t.payload;
						return k()({
							...e
						}, {
							[n]: r
						})
					}
					case E.c: {
						const {
							subredditId: n,
							userName: r
						} = t.payload, s = L()(e[n], r);
						return {
							...e,
							[n]: s
						}
					}
					case E.a:
					case E.b:
					case E.h:
						const {
							subredditId: n, userName: r, applied: s
						} = t.payload;
						return s ? {
							...e,
							[n]: {
								...e[n],
								[r]: s
							}
						} : e;
					default:
						return e
				}
			};
			const R = {};
			var F = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case E.g: {
						const {
							key: n,
							pageInfo: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			var B = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case E.l:
					case E.k:
						return null;
					case E.j:
						return t.payload;
					default:
						return e
				}
			};
			var H = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.l:
							return !0;
						case E.k:
						case E.j:
							return !1;
						default:
							return e
					}
				},
				A = Object(r.c)({
					error: B,
					pending: H
				});
			var D = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case E.c: {
							const {
								userName: n
							} = t.payload;
							return e === n ? null : e
						}
						default:
							return e
					}
				},
				G = Object(r.c)({
					api: A,
					result: D
				});
			const K = {};
			var U = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.g: {
							const {
								key: n,
								userOrder: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case E.a: {
							const {
								key: n,
								userName: r
							} = t.payload;
							if (!n) return e;
							if (!e[n].includes(r)) {
								const t = [...e[n], r];
								return {
									...e,
									[n]: t
								}
							}
							return e
						}
						case E.c: {
							const {
								userName: n
							} = t.payload, r = {};
							for (const t in e) r[t] = e[t].filter(e => e !== n);
							return r
						}
						default:
							return e
					}
				},
				V = Object(r.c)({
					api: M,
					models: N,
					pageInfo: F,
					search: G,
					userOrder: U
				}),
				W = n("./src/reddit/actions/moderationLog/constants.ts");
			const q = {};
			var J = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W.b: {
						const {
							actionIds: n,
							key: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s] || {},
								[r]: n
							}
						}
					}
					default:
						return e
				}
			};
			const z = {};
			var Q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W.b: {
							const {
								normalizedModerationLog: n,
								subredditId: r
							} = t.payload, s = {};
							n.forEach(e => {
								s[e.id] = e
							});
							const i = {
								[r]: s
							};
							return k()({
								...e
							}, i)
						}
						default:
							return e
					}
				},
				X = Object(r.c)({
					itemOrder: J,
					models: Q
				});
			var Y = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W.b: {
						const {
							endCursor: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Z = {};
			var $ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W.b: {
						const {
							hasNextPage: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ee,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W.b: {
						const {
							hasPreviousPage: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			const ne = [];
			var re = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W.a: {
						const {
							normalizedModerators: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			var se = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W.b: {
							const {
								startCursor: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				ie = Object(r.c)({
					actions: X,
					endCursor: Y,
					hasNextPage: $,
					hasPreviousPage: te,
					moderators: re,
					startCursor: se
				});
			const oe = {};
			var ae = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.K:
					case s.u: {
						const {
							subredditId: n,
							moderators: r
						} = t.payload.response || t.payload, s = {
							[n]: r
						};
						return Object(p.merge)(e, s)
					}
					case s.y: {
						const {
							subredditId: n,
							userId: r,
							permissions: s
						} = t.payload;
						return Object(p.setIn)(e, [n, r, "modPermissions"], s)
					}
					case s.fb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(p.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			const de = {};
			var ce = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : de,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.v:
					case s.u: {
						const {
							key: n,
							subredditId: r
						} = t.payload;
						return r ? {
							...e,
							[n]: null
						} : e
					}
					case s.t: {
						const {
							error: n,
							key: r,
							subredditId: s
						} = t.payload;
						return s ? {
							...e,
							[r]: n
						} : e
					}
					default:
						return e
				}
			};
			const le = {};
			var ue = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.t:
						case s.u: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !1
							} : e
						}
						case s.v: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !0
							} : e
						}
						default:
							return e
					}
				},
				me = Object(r.c)({
					error: ce,
					pending: ue
				});
			const he = {};
			var pe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : he,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.u: {
							const {
								subredditId: n,
								response: r,
								key: s
							} = t.payload;
							return Object(p.setIn)(e, [n, s], r.moderatorIds)
						}
						case s.fb: {
							const {
								subredditId: n,
								userId: r,
								key: s
							} = t.payload, i = e[n][s].filter(e => e !== r);
							return Object(p.setIn)(e, [n, s], i)
						}
						default:
							return e
					}
				},
				be = Object(r.c)({
					data: pe,
					api: me
				});
			var ge = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.B:
					case s.A:
						return null;
					case s.z:
						return t.payload;
					default:
						return e
				}
			};
			var fe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.A:
						case s.z:
							return !1;
						case s.B:
							return !0;
						default:
							return e
					}
				},
				ye = Object(r.c)({
					error: ge,
					pending: fe
				});
			const ve = {};
			var _e = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ve,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.A: {
						const {
							subredditId: n,
							moderators: r
						} = t.payload;
						return Object(p.set)(e, n, r)
					}
					case s.cb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(p.unsetIn)(e, [n, r])
					}
					case s.c: {
						const n = t.payload,
							{
								subredditId: r,
								moderators: s
							} = n,
							i = {
								[r]: s
							};
						return Object(p.merge)(e, i)
					}
					default:
						return e
				}
			};
			const Oe = {};
			var Se = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.A: {
							const {
								subredditId: n,
								moderatorIds: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case s.cb: {
							const {
								subredditId: n,
								userId: r
							} = t.payload, s = e[n].filter(e => e !== r);
							return {
								...e,
								[n]: s
							}
						}
						case s.c: {
							const n = t.payload,
								{
									subredditId: r,
									moderatorIds: s
								} = n,
								i = [...e[r] || [], ...s];
							return {
								...e,
								[r]: i
							}
						}
						default:
							return e
					}
				},
				Ie = Object(r.c)({
					api: ye,
					models: _e,
					userOrder: Se
				});
			const we = {};
			var Ee = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : we,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.H: {
						const {
							subredditId: n,
							response: r
						} = t.payload, {
							invitePending: s
						} = r, i = {
							[n]: s
						};
						return Object(p.merge)(e, i)
					}
					case s.E:
					case s.F: {
						const {
							subredditId: n
						} = t.payload;
						return Object(p.unset)(e, n)
					}
					default:
						return e
				}
			};
			const xe = {};
			var Ce = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.u: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const Me = {};
			var je = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Me,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.H: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const ke = {};
			var Te = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ke,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.H: {
						const {
							response: n
						} = t.payload, r = {
							[n.subredditId]: n.moderators
						};
						return Object(p.merge)({
							...e
						}, r)
					}
					case s.y: {
						const n = t.payload,
							{
								subredditId: r,
								userId: s,
								permissions: i
							} = n;
						return e[r] && e[r][s] ? Object(p.setIn)(e, [r, s, "modPermissions"], i) : e
					}
					default:
						return e
				}
			};
			var Le = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.L:
					case s.K:
						return null;
					case s.J:
						return t.payload;
					default:
						return e
				}
			};
			var Pe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.L:
							return !0;
						case s.K:
						case s.J:
							return !1;
						default:
							return e
					}
				},
				Ne = Object(r.c)({
					error: Le,
					pending: Pe
				}),
				Re = n("./node_modules/lodash/isEqual.js"),
				Fe = n.n(Re);
			var Be = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.L:
						case s.J:
						case s.fb:
							return null;
						case s.K: {
							const e = t.payload.moderatorIds[0];
							return e ? t.payload.moderators[e] : null
						}
						case s.y: {
							const {
								userId: n,
								permissions: r
							} = t.payload;
							return e && e.id === n && !Fe()(e.modPermissions, r) ? {
								...e,
								modPermissions: r
							} : e
						}
						default:
							return e
					}
				},
				He = Object(r.c)({
					api: Ne,
					result: Be
				});
			const Ae = {};
			var De = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ae,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.I:
					case s.H: {
						const {
							subredditId: n,
							key: r
						} = t.payload;
						return n ? {
							...e,
							[r]: null
						} : e
					}
					case s.G: {
						const {
							error: n,
							subredditId: r,
							key: s
						} = t.payload;
						return r ? {
							...e,
							[s]: n
						} : e
					}
					default:
						return e
				}
			};
			const Ge = {};
			var Ke = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ge,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.G:
						case s.H: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !1
							} : e
						}
						case s.I: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !0
							} : e
						}
						default:
							return e
					}
				},
				Ue = Object(r.c)({
					error: De,
					pending: Ke
				});
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const Ve = {};
			var We = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ve,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.H: {
							const {
								response: n,
								subredditId: r,
								key: s
							} = t.payload, {
								moderatorIds: i
							} = n;
							return Object(p.merge)(e, {
								[r]: {
									[s]: i
								}
							})
						}
						case s.fb: {
							const {
								subredditId: n,
								userId: r
							} = t.payload, s = {
								...e[n]
							};
							return Object.keys(e[n]).forEach(t => {
								const i = e[n][t].filter(e => e !== r);
								s[t] = i
							}), Object(p.set)(e, n, s)
						}
						default:
							return e
					}
				},
				qe = Object(r.c)({
					data: We,
					api: Ue
				}),
				Je = Object(r.c)({
					editableModerators: ae,
					editableUserOrder: be,
					invitedModerators: Ie,
					invitePending: Ee,
					loadMoreModerators: je,
					loadMoreEditableModerators: Ce,
					models: Te,
					search: He,
					userOrder: qe
				}),
				ze = n("./src/reddit/actions/bulkActions/constants.ts");
			var Qe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ze.c:
						case ze.b:
							return null;
						case ze.a:
							return t.payload;
						default:
							return e
					}
				},
				Xe = n("./src/reddit/actions/modQueue/constants.ts");
			var Ye = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ze.c:
							return !0;
						case ze.b:
						case ze.a:
						case Xe.s:
						case Xe.r:
							return !1;
						default:
							return e
					}
				},
				Ze = Object(r.c)({
					error: Qe,
					pending: Ye
				});
			const $e = {};
			var et = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $e,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.a: {
							const {
								ids: n
							} = t.payload, r = {};
							return n.forEach(e => r[e] = !0), {
								...e,
								...r
							}
						}
						case Xe.d: {
							const {
								ids: n
							} = t.payload;
							return L()(e, n)
						}
						case Xe.c: {
							const {
								ids: e
							} = t.payload, n = {};
							return e.forEach(e => n[e] = !0), n
						}
						default:
							return e
					}
				},
				tt = n("./src/reddit/models/ModQueue/index.ts");
			const nt = {};
			var rt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ze.b: {
							const {
								operation: e,
								ids: n
							} = t.payload;
							return "approve" === e ? nt : {
								[tt.c[e]]: n
							}
						}
						default:
							return e
					}
				},
				st = Object(r.c)({
					api: Ze,
					selectedItems: et,
					undoLastAction: rt
				});
			var it = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xe.g:
					case Xe.f:
						return null;
					case Xe.e:
						return t.payload;
					default:
						return e
				}
			};
			var ot = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.g:
							return !0;
						case Xe.f:
						case Xe.e:
							return !1;
						default:
							return e
					}
				},
				at = Object(r.c)({
					error: it,
					pending: ot
				});
			const dt = {};
			var ct = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xe.f: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: i
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: i
							}
						}
					}
					default:
						return e
				}
			};
			const lt = {};
			var ut = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.f: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, i = s[s.length - 1] || null;
							return {
								...e,
								[n]: i
							}
						}
						default:
							return e
					}
				},
				mt = Object(r.c)({
					api: at,
					itemOrder: ct,
					loadMore: ut
				}),
				ht = n("./src/reddit/actions/pages/modListing/constants.ts");
			var pt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ht.e: {
						const n = t.payload,
							{
								moderatingSubreddits: r
							} = n;
						return r ? null : e
					}
					case Xe.i:
					case Xe.f:
					case Xe.m:
					case Xe.p:
					case Xe.v: {
						const {
							response: e
						} = t.payload, {
							moderatedAfter: n
						} = e;
						return n
					}
					case Xe.k: {
						const e = t.payload,
							{
								moderatedAfter: n
							} = e;
						return n
					}
					default:
						return e
				}
			};
			const bt = [];
			var gt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xe.i:
					case Xe.f:
					case Xe.m:
					case Xe.p:
					case Xe.v: {
						const {
							response: e
						} = t.payload, {
							listingOrder: n
						} = e;
						return n
					}
					case Xe.k: {
						const n = t.payload,
							{
								listingOrder: r
							} = n;
						return [...e, ...r]
					}
					case ht.e: {
						const n = t.payload,
							{
								listingOrder: r
							} = n;
						return r || e
					}
					default:
						return e
				}
			};
			var ft = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xe.b:
						return !0;
					default:
						return e
				}
			};
			var yt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.k:
							return !0;
						case Xe.b:
							return !1;
						default:
							return e
					}
				},
				vt = Object(r.c)({
					after: pt,
					data: gt,
					loaded: ft,
					pending: yt
				});
			var _t = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xe.j:
					case Xe.i:
						return null;
					case Xe.h:
						return t.payload;
					default:
						return e
				}
			};
			var Ot = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.j:
							return !0;
						case Xe.i:
						case Xe.h:
							return !1;
						default:
							return e
					}
				},
				St = Object(r.c)({
					error: _t,
					pending: Ot
				});
			const It = {};
			var wt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : It,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xe.i: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: i
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: i
							}
						}
					}
					default:
						return e
				}
			};
			const Et = {};
			var xt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Et,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.i: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, i = s[s.length - 1] || null;
							return {
								...e,
								[n]: i
							}
						}
						default:
							return e
					}
				},
				Ct = Object(r.c)({
					api: St,
					itemOrder: wt,
					loadMore: xt
				});
			var Mt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xe.n:
					case Xe.m:
						return null;
					case Xe.l:
						return t.payload;
					default:
						return e
				}
			};
			var jt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.n:
							return !0;
						case Xe.m:
						case Xe.l:
							return !1;
						default:
							return e
					}
				},
				kt = Object(r.c)({
					error: Mt,
					pending: jt
				});
			const Tt = {};
			var Lt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xe.m: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: i
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: i
							}
						}
					}
					default:
						return e
				}
			};
			const Pt = {};
			var Nt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.m: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, i = s[s.length - 1] || null;
							return {
								...e,
								[n]: i
							}
						}
						default:
							return e
					}
				},
				Rt = Object(r.c)({
					api: kt,
					itemOrder: Lt,
					loadMore: Nt
				});
			var Ft = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xe.q:
					case Xe.p:
						return null;
					case Xe.o:
						return t.payload;
					default:
						return e
				}
			};
			var Bt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.q:
							return !0;
						case Xe.p:
						case Xe.o:
							return !1;
						default:
							return e
					}
				},
				Ht = Object(r.c)({
					error: Ft,
					pending: Bt
				});
			const At = {};
			var Dt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : At,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xe.p: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: i
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: i
							}
						}
					}
					default:
						return e
				}
			};
			const Gt = {};
			var Kt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.p: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, i = s[s.length - 1] || null;
							return {
								...e,
								[n]: i
							}
						}
						default:
							return e
					}
				},
				Ut = Object(r.c)({
					api: Ht,
					itemOrder: Dt,
					loadMore: Kt
				});
			var Vt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xe.w:
					case Xe.v:
						return null;
					case Xe.u:
						return t.payload;
					default:
						return e
				}
			};
			var Wt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.w:
							return !0;
						case Xe.v:
						case Xe.u:
							return !1;
						default:
							return e
					}
				},
				qt = Object(r.c)({
					error: Vt,
					pending: Wt
				});
			const Jt = {};
			var zt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xe.v: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: i
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: i
							}
						}
					}
					default:
						return e
				}
			};
			const Qt = {};
			var Xt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.v: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, i = s[s.length - 1] || null;
							return {
								...e,
								[n]: i
							}
						}
						default:
							return e
					}
				},
				Yt = Object(r.c)({
					api: qt,
					itemOrder: zt,
					loadMore: Xt
				}),
				Zt = Object(r.c)({
					bulkAction: st,
					edited: mt,
					moderatedCommunitiesOrder: vt,
					modqueue: Ct,
					reports: Rt,
					spam: Ut,
					unmoderated: Yt
				});
			var $t = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.U:
					case s.S:
						return null;
					case s.R:
						return t.payload;
					default:
						return e
				}
			};
			const en = {};
			var tn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : en,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.U: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(o.e)(n, r);
							return {
								...e,
								[s]: !0
							}
						}
						case s.S:
						case s.R: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(o.e)(n, r);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				nn = Object(r.c)({
					error: $t,
					pending: tn
				});
			const rn = {};
			var sn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.S: {
							const {
								fetchedToken: n,
								subredditId: r
							} = t.payload, s = Object(o.e)(r, n);
							return {
								...e,
								[s]: !0
							}
						}
						default:
							return e
					}
				},
				on = n("./src/reddit/actions/inContextModeration.ts");
			var an = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case on.b:
						return t.payload;
					default:
						return e
				}
			};
			const dn = {};
			var cn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.S: {
						const {
							subredditId: e,
							after: n
						} = t.payload;
						return {
							[e]: n
						}
					}
					default:
						return e
				}
			};
			const ln = {};
			var un = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ln,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.T:
					case s.S: {
						const {
							subredditId: n,
							mutedUsers: r
						} = t.payload, s = {
							[n]: r
						};
						return Object(p.merge)(e, s)
					}
					case s.Y: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(p.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var mn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.X:
					case s.W:
						return null;
					case s.V:
						return t.payload;
					default:
						return e
				}
			};
			var hn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.X:
							return !0;
						case s.W:
						case s.V:
							return !1;
						default:
							return e
					}
				},
				pn = Object(r.c)({
					error: mn,
					pending: hn
				});
			var bn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.X:
						case s.V:
							return null;
						case s.W: {
							const e = t.payload.mutedUserIds[0];
							return e ? t.payload.mutedUsers[e] : null
						}
						default:
							return e
					}
				},
				gn = Object(r.c)({
					api: pn,
					result: bn
				});
			const fn = {};
			var yn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.S: {
							const {
								subredditId: n,
								mutedUserIds: r
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...r]
							} : {
								...e,
								[n]: r
							}
						}
						case s.Y: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case s.T: {
							const {
								subredditId: n,
								mutedUserIds: r
							} = t.payload, s = r[0];
							return s && e[n] && -1 === e[n].indexOf(s) ? {
								[n]: [s, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				vn = Object(r.c)({
					api: nn,
					fetchedTokens: sn,
					inContext: an,
					loadMore: cn,
					models: un,
					search: gn,
					userOrder: yn
				});
			t.a = Object(r.c)({
				approvedSubmitters: w,
				flairedUsers: V,
				moderationLog: ie,
				moderators: Je,
				modQueue: Zt,
				muted: vn
			})
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "e", (function() {
				return p
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/constants/index.ts");
			var r = n("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				s = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/comments/index.ts"),
				a = n("./src/reddit/reducers/pages/modHub/index.ts");
			Object(i.a)({
				features: {
					comments: o.a
				},
				pages: {
					modHub: a.a
				}
			});
			const d = (e, t) => Object(r.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					subreddit: t.subredditName
				}),
				c = Object(s.a)((e, t) => {
					var n, r, s;
					const {
						pageName: i,
						page: o
					} = t, a = d(0, t);
					if (!(null === (s = null === (r = null === (n = e.pages.modHub.modQueue[i]) || void 0 === n ? void 0 : n.itemOrder) || void 0 === r ? void 0 : r[a]) || void 0 === s ? void 0 : s[o])) return;
					const c = e.pages.modHub.modQueue[i].itemOrder[a][o];
					return c ? c.map(t => e.posts.models[t] || e.features.comments.models[t]) : []
				}),
				l = (e, t) => {
					var n;
					const {
						pageName: r
					} = t;
					return null === (n = e.pages.modHub.modQueue[r]) || void 0 === n || !n.api || e.pages.modHub.modQueue[r].api.pending
				},
				u = (e, t) => {
					var n;
					const r = d(0, t);
					return null === (n = e.pages.modHub.modQueue[t.pageName]) || void 0 === n ? void 0 : n.loadMore[r]
				},
				m = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				h = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				p = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing.12081fa698f8767eecda.js.map