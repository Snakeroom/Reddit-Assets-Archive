// https://www.redditstatic.com/desktop2x/ModListing.d683fad87a94b6a82d2b.js
// Retrieved at 4/11/2022, 4:00:05 PM by Reddit Dataminer v1.0.0
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, s.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
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
							var o = s.element,
								i = d(o),
								a = this._rootContainsTarget(o),
								c = s.entry,
								l = t && a && this._computeTargetAndRootIntersection(o, n),
								u = s.entry = new r({
									time: e.performance && performance.now && performance.now(),
									target: o,
									boundingClientRect: i,
									rootBounds: n,
									intersectionRect: l
								});
							c ? t && a ? this._hasCrossedThreshold(c, u) && this._queuedEntries.push(u) : c && c.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, s.prototype._computeTargetAndRootIntersection = function(n, r) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var s, o, i, a, l, u, m, p, h = d(n), b = c(n), f = !1; !f;) {
								var g = null,
									y = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == y.display) return;
								if (b == this.root || b == t ? (f = !0, g = r) : b != t.body && b != t.documentElement && "visible" != y.overflow && (g = d(b)), g && (s = g, o = h, i = void 0, a = void 0, l = void 0, u = void 0, m = void 0, p = void 0, i = Math.max(s.top, o.top), a = Math.min(s.bottom, o.bottom), l = Math.max(s.left, o.left), u = Math.min(s.right, o.right), p = a - i, !(h = (m = u - l) >= 0 && p >= 0 && {
										top: i,
										bottom: a,
										left: l,
										right: u,
										width: m,
										height: p
									}))) break;
								b = c(b)
							}
							return h
						}
					}, s.prototype._getRootRect = function() {
						var e;
						if (this.root) e = d(this.root);
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
								var o = this.thresholds[s];
								if (o == n || o == r || o < n != o < r) return !0
							}
					}, s.prototype._rootIsInDom = function() {
						return !this.root || a(t, this.root)
					}, s.prototype._rootContainsTarget = function(e) {
						return a(this.root || t, e)
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
					var n, r, s, o = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, s = null, function() {
						s || (s = setTimeout((function() {
							n(), s = null
						}), r))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function o(e, t, n, r) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
				}

				function i(e, t, n, r) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
				}

				function d(e) {
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

				function a(e, t) {
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
				o = n("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				d = 4294967295,
				a = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > i) return [];
				var n = d,
					c = a(e, d);
				t = s(t), e -= d;
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
				var o = Object.keys(e),
					i = Object.keys(t);
				if (o.length !== i.length) return !1;
				for (var d = Object.prototype.hasOwnProperty.bind(t), a = 0; a < o.length; a++) {
					var c = o[a];
					if (!d(c)) return !1;
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
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return d
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "INCONTEXT__BANNED",
				o = "INCONTEXT__MUTED",
				i = Object(r.a)(s),
				d = Object(r.a)(o)
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
				return P
			})), n.d(t, "modListingDataLoaded", (function() {
				return L
			})), n.d(t, "modListingDataFailed", (function() {
				return N
			})), n.d(t, "modListingPageRequested", (function() {
				return F
			})), n.d(t, "morePostsPending", (function() {
				return H
			})), n.d(t, "morePostsLoaded", (function() {
				return B
			})), n.d(t, "morePostsFailed", (function() {
				return D
			})), n.d(t, "moreModListingRequested", (function() {
				return A
			})), n.d(t, "hideSubredditSuccess", (function() {
				return W
			})), n.d(t, "hideSubredditPending", (function() {
				return U
			})), n.d(t, "hideSubredditFailed", (function() {
				return G
			})), n.d(t, "unhideSubredditSuccess", (function() {
				return q
			})), n.d(t, "unhideSubredditPending", (function() {
				return V
			})), n.d(t, "unhideSubredditFailed", (function() {
				return J
			})), n.d(t, "toggleHiddenSubreddit", (function() {
				return Q
			})), n.d(t, "hideSubreddit", (function() {
				return z
			})), n.d(t, "unhideSubreddit", (function() {
				return X
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/pick.js"),
				o = n.n(s),
				i = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeListingKey/index.ts"),
				c = n("./src/reddit/actions/platform.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/page.ts"),
				m = n("./src/reddit/constants/parameters.ts"),
				p = n("./src/config.ts"),
				h = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts"),
				g = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				y = n("./src/reddit/helpers/name/index.ts"),
				v = n("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				_ = (e, t) => Object(h.a)(e, {
					data: t,
					endpoint: Object(g.a)(Object(v.a)(`${p.a.gatewayUrl}/desktopapi/v1/mod`)),
					method: i.jb.GET
				});
			const O = (e, t, n, r) => Object(h.a)(Object(b.a)(e, [f.a]), {
					endpoint: `${e.apiUrl}/api/filter/user/${t}/f/mod/${Object(y.c)(n)}`,
					method: r ? i.jb.PUT : i.jb.DELETE,
					data: {
						model: JSON.stringify({
							name: Object(y.h)(n)
						})
					}
				}),
				x = (e, t, n) => O(e, t, n, !0),
				w = (e, t, n) => O(e, t, n, !1);
			var E = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				I = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				j = n("./src/reddit/helpers/timeApiRoute/index.ts"),
				k = n("./src/reddit/helpers/trackers/screenview.ts"),
				S = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/routes/modListing/index.ts"),
				T = n("./src/reddit/selectors/user.ts"),
				M = n("./src/reddit/actions/pages/modListing/constants.ts");
			const P = Object(d.a)(M.f),
				L = Object(d.a)(M.e),
				N = Object(d.a)(M.d),
				R = (e, t) => async (n, s, o) => {
					const i = s();
					if (i.listings.postOrder.api.pending[e]) return;
					n(P({
						key: e
					}));
					const d = await Object(j.a)("modListing", () => _(o.apiContext(), t)),
						a = `error-${e}`;
					d.ok ? (n(L({
						key: e,
						meta: i.meta,
						...d.body
					})), n(l.g(a))) : (n(N({
						error: d.error,
						key: e,
						...d.body
					})), 401 === d.status ? Object(I.a)(n, i) : n(l.f({
						id: a,
						kind: S.b.Error,
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
						sort: d = i.X
					} = e.params, l = Object(C.d)(e.path), p = l ? u.f : u.e, h = Object(a.a)(p, d, e.queryParams), b = s(), f = b.listings.postOrder.ids[h], g = b.listings.postOrder.api.error[h];
					if (b.listings.postOrder.api.pending[h] || f && !g && !t) return void(f && n(c.m({
						title: r.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})));
					const y = K(e.queryParams);
					await n(R(h, {
						...o()(e.queryParams, m.n),
						...o()(e.queryParams, m.m),
						filtered: !!l || void 0,
						moderated_srs: !0,
						sort: d,
						t: Object(E.a)(d, y)
					})), n(c.m({
						title: r.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})), Object(k.h)(s(), !0)
				}, H = Object(d.a)(M.i), B = Object(d.a)(M.h), D = Object(d.a)(M.g), A = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const d = n(),
						c = d.platform.currentPage;
					if (!c) return;
					const {
						sort: l = i.X
					} = e, p = c.queryParams, h = Object(C.d)(c.url), b = h ? u.f : u.e, f = Object(a.a)(b, l, p), g = d.listings.postOrder.loadMore[f];
					if (!g) return;
					const y = d.listings.postOrder.api.pending[f],
						v = d.listings.postOrder.fetchedTokens,
						O = !(!v[f] || !v[f][g.token]);
					if (y || O) return;
					const x = K(p);
					t(H({
						key: f,
						fetchedToken: g.token
					}));
					const w = await _(s(), {
							after: g.token,
							dist: g.dist,
							filtered: !!h || void 0,
							sort: l,
							t: Object(E.a)(l, x),
							...o()(p, m.n)
						}),
						I = d.listings.postOrder.ids[f],
						j = {
							...w.body,
							postIds: (w.body.postIds || []).filter(e => !I || !I.includes(e))
						};
					w.ok ? t(B({
						key: f,
						fetchedToken: g.token,
						meta: d.meta,
						...j
					})) : t(D({
						key: f,
						error: w.error,
						fetchedToken: g.token,
						...j
					}))
				};

			function K(e) {
				const t = m.E in e && e[m.E].toUpperCase() || "";
				return t in i.hc && i.hc[t]
			}
			const W = Object(d.a)(M.c),
				U = Object(d.a)(M.b),
				G = Object(d.a)(M.a),
				q = Object(d.a)(M.l),
				V = Object(d.a)(M.k),
				J = Object(d.a)(M.j),
				Q = (e, t) => async (n, r, s) => {
					let {
						apiContext: o
					} = s;
					const i = r(),
						d = Object(T.k)(i),
						[a, c, l, u] = t ? [U, W, G, x] : [V, q, J, w];
					if (!d || !d.displayText) return;
					const {
						currentPage: m
					} = i.platform;
					if (!m || !m.routeMatch) return;
					n(a(e));
					const p = await u(o(), d.displayText, e);
					p.ok ? (await n(F(m.routeMatch.match, !0)), n(c(e))) : n(l(p.body))
				}, z = e => Q(e, !0), X = e => Q(e, !1)
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
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				d = n("./src/reddit/contexts/NavbarExp.ts"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ModHub/Content/index.m.less"),
				l = n.n(c);
			t.a = e => {
				const t = Object(o.useContext)(d.a);
				return i.a.createElement("div", {
					className: Object(a.a)(l.a.noPermissions, {
						[l.a.noPermissionsExp]: t
					})
				}, i.a.createElement("img", {
					className: l.a.rememberTheHuman,
					src: `${r.a.assetPath}/img/content-gate-icons/remember-the-human.png`
				}), e.isModerator ? s.fbt._("Sorry, you do not have the moderator permissions needed to view this page", null, {
					hk: "4wUDIF"
				}) : s.fbt._("Sorry, this is a moderator-only page", null, {
					hk: "2BZEIA"
				}), i.a.createElement("div", {
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
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "p", (function() {
				return f
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "m", (function() {
				return v
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "q", (function() {
				return I
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "t", (function() {
				return S
			})), n.d(t, "u", (function() {
				return C
			})), n.d(t, "r", (function() {
				return T
			})), n.d(t, "a", (function() {
				return M
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "c", (function() {
				return L
			}));
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				d = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/controls/Input/ModalInput.tsx"),
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
			const p = s.a.wrapped(c.a, "CloseIcon", u.a),
				h = s.a.section("ModalBody", u.a),
				b = s.a.section("ModalPostPreview", u.a),
				f = s.a.p("ModalText", u.a),
				g = s.a.div("ModalSmallText", u.a),
				y = s.a.div("ModalDescriptionText", u.a),
				v = s.a.div("ModalMetaText", u.a),
				_ = s.a.label("ModalFormItem", u.a),
				O = s.a.wrapped(a.a, "ModalInput", u.a),
				x = s.a.label("ModalInputLabel", u.a),
				w = s.a.footer("ModalFooter", u.a),
				E = s.a.header("ModalHeader", u.a),
				I = s.a.div("ModalTitle", u.a),
				j = s.a.div("ModalAnnotation", u.a),
				k = s.a.div("ModalMain", u.a),
				S = s.a.textarea("TextArea", u.a),
				C = s.a.wrapped(d.l, "WarningButton", u.a),
				T = s.a.wrapped(d.l, "PrimaryButton", u.a),
				M = s.a.wrapped(d.o, "CancelButton", u.a),
				P = s.a.wrapped(d.r, "RemoveButton", u.a),
				L = e => {
					let {
						className: t,
						...n
					} = e;
					return i.a.createElement(d.t, m({
						kind: d.b.Button,
						priority: d.c.Primary,
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
				return E
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				p = n.n(m),
				h = n("./src/lib/lessComponent.tsx");
			const b = h.a.wrapped(l.b, "SubredditIcon", p.a),
				f = h.a.span("Label", p.a),
				g = Object(c.c)({
					subredditOrProfile: u.K
				});
			var y = Object(a.b)(g)(e => {
				let {
					children: t,
					subredditOrProfile: n
				} = e;
				return t(n, o.a.createElement(o.a.Fragment, null, o.a.createElement(b, {
					subredditOrProfile: n
				}), o.a.createElement(f, null, n.displayText)))
			});
			var v = e => {
					let {
						children: t,
						className: n,
						subredditsOrProfilesIds: r
					} = e;
					const s = r.map(e => o.a.createElement(y, {
						children: t,
						key: e.id,
						identifier: e
					}));
					return o.a.createElement("div", {
						className: n
					}, s)
				},
				_ = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				O = n.n(_);
			const x = h.a.div("CommunityCount", O.a),
				w = h.a.wrapped(v, "SubredditsOrProfiles", O.a),
				E = h.a.wrapped(i.a, "SidebarSubreddit", O.a),
				I = h.a.wrapped(i.a, "ModalSubreddit", O.a);
			var j;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(j || (j = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: n,
					onSeeMoreDetails: s,
					subredditCategory: i = {
						name: r.fbt._("multi", null, {
							hk: "28Z7Rp"
						})
					}
				} = e, a = t ? E : I, c = n.length, l = t && n.length > 4;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(x, null, r.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [r.fbt._plural(c, "number"), r.fbt._param("category", i.name)], {
					hk: "33iWe4"
				})), c > 0 && o.a.createElement(w, {
					subredditsOrProfilesIds: t ? n.slice(0, 4) : n
				}, (t, n) => o.a.createElement(a, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, n)), c > 0 && l && o.a.createElement(d.r, {
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
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = n("./src/reddit/constants/location.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				h = n("./src/reddit/helpers/trackers/navigation.ts"),
				b = n("./src/reddit/selectors/experiments/countrySites.ts"),
				f = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				g = n("./src/reddit/selectors/meta.ts"),
				y = n("./src/reddit/components/SidebarFooter/index.m.less"),
				v = n.n(y);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = a.a.a("Link", v.a), x = Object(i.c)({
				isCountrySitesEnabled: b.b,
				isNavbarLikeMwebEnabled: f.a,
				countryCode: g.b
			}), w = Object(o.b)(x), E = Object(m.u)({
				isFrontpage: m.A,
				isCountrySitePage: m.y
			});
			t.a = E(w(Object(c.c)(e => {
				const t = Object(o.f)().getState(),
					n = Object(b.a)(t, Object(d.c)());
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
						onClick: () => e.sendEvent(Object(h.a)(t))
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
					href: `https://www.reddit.com${Object(p.a)()}`
				}, _._("Rereddit", null, {
					hk: "1z3k7C"
				})), s.a.createElement(O, {
					href: "https://www.reddit.com/topics/a-1/"
				}, _._("Topics", null, {
					hk: "349RFt"
				}))), !!u.c[e.countryCode] && s.a.createElement(s.a.Fragment, null, s.a.createElement(O, {
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
				o = n.n(s),
				i = n("./node_modules/react/index.js"),
				d = n.n(i),
				a = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/constants/elementIds.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/components/BackToTop/index.m.less"),
				m = n.n(u);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
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
					return d.a.createElement("div", {
						className: Object(r.a)(t, m.a.container),
						style: s
					}, d.a.createElement(l.l, {
						className: m.a.button,
						onClick: () => h(n)
					}, p._("Back to Top", null, {
						hk: "YjBtV"
					})))
				},
				f = n("./src/reddit/components/SidebarFooter/index.tsx"),
				g = n("./src/reddit/constants/componentSizes.ts"),
				y = n("./src/reddit/contexts/PageLayer/index.tsx"),
				v = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				_ = n.n(v),
				O = n("./src/lib/lessComponent.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const w = a.e[1] + 24,
				E = g.f + 8,
				I = E + 152 + 16,
				j = I + w + 8,
				k = O.a.div("Container", _.a),
				S = O.a.wrapped(e => {
					let {
						className: t,
						isOverlay: n,
						...r
					} = e;
					return d.a.createElement(b, x({
						className: t,
						isOverlay: n,
						style: {
							top: `calc(100vh - ${n?E:8}px)`
						}
					}, r))
				}, "BackToTop", _.a),
				C = e => {
					let {
						children: t,
						className: n,
						isFakeOverlay: s,
						isSticky: o
					} = e;
					return d.a.createElement("div", {
						className: Object(r.a)(n, {
							[_.a.StickyStyles]: o && !s,
							[_.a.StickyStylesFakeOverlay]: !!s
						})
					}, t)
				};
			class T extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > j,
						shouldFooterSticky: this.windowHeight > I
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
					}, this.handleResize = o()(() => {
						this.updateMeasurements(), this.updateState()
					}, a.K), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							hideFooter: o,
							pageLayer: i
						}
					} = this, a = this.state.isAdSticky && !(!t && !r);
					return d.a.createElement(k, {
						className: s,
						innerRef: this.setWrapperRef
					}, d.a.createElement(C, {
						isFakeOverlay: n,
						isSticky: a
					}, t, r, !o && d.a.createElement(f.a, null)), !this.props.hideBackToTop && d.a.createElement(S, {
						isOverlay: !!(null === (e = null == i ? void 0 : i.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const M = Object(y.u)();
			t.a = M(T)
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
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/widgets.ts"),
				h = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = n("./src/reddit/selectors/experiments/topPosts.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/models/Theme/index.ts"),
				v = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const _ = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(v.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				O = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(v.a)(e).widgetColors.sidebarWidgetHeaderColor,
				x = e => {
					const t = _(e);
					return Object(y.f)(t)
				},
				w = e => {
					const t = O(e);
					return Object(y.f)(t)
				};
			var E = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				I = n.n(E);
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js"), k = Object(u.u)(), S = Object(o.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						r = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						s = Object(g.db)(e);
					return r || s
				},
				nigtmode: g.db,
				subredditId: u.n,
				topPostVariant: b.d
			}));
			class C extends s.a.Component {
				constructor() {
					super(...arguments), this.contentRef = s.a.createRef(), this.state = {
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
					return e.backgroundColor = _(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = x(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = O(this.props), e.color = e.fill = w(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: r,
						headerButton: o,
						id: i,
						onClick: a,
						onHeaderClick: l,
						title: u,
						titleClassName: p,
						truncateThreshold: h
					} = this.props, b = n ? I.a.widgetContentOnly : I.a.widgetContent, f = !r && this.props.styles, g = f ? this.getWidgetBackgroundStyles() : {}, y = f ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(d.a)(t, I.a.widgetBackground, {
							[I.a.redditStyle]: r,
							[I.a.clickable]: !!a,
							[I.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": r,
						onClick: a,
						style: g
					}, u && s.a.createElement("div", {
						className: Object(d.a)(I.a.widgetHeader, {
							[I.a.clickable]: !!l
						}),
						id: i,
						style: y,
						onClick: l
					}, s.a.createElement("div", {
						className: Object(d.a)(I.a.widgetTitle, p)
					}, s.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), o), s.a.createElement("div", {
						className: Object(d.a)(b, {
							[I.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? h : "none"
						}
					}, e), this.state.isTruncated && s.a.createElement(m.r, {
						className: I.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, j._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = k(S(Object(a.a)(Object(l.c)(C))))
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/constants/keycodes.ts"),
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
						t === a.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return s.a.createElement("input", u({
						className: Object(i.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(o.b)(null, {
				closeModal: d.f
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
				return d
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			}));
			var r, s, o = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {}));
			const d = (e, t) => n => ({
					source: s.COMMUNITY_WIDGETS,
					action: o.c.CLICK,
					noun: r.SEE_MORE,
					widget: Object(i.ub)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...i.n
				}),
				a = (e, t) => n => ({
					source: s.POST,
					action: o.c.CLICK,
					noun: r.REREDDIT_PROMO,
					post: i.H(n, e),
					subreddit: i.gb(n),
					...t && {
						banner: {
							buttonText: t,
							id: r.REREDDIT_PROMO
						}
					},
					...i.n(n)
				}),
				c = () => e => ({
					source: s.SIDEBAR,
					action: o.c.VIEW,
					noun: r.TOPICS_WIDGET,
					...i.n(e)
				}),
				l = e => t => ({
					source: s.TOPICS_WIDGET,
					action: o.c.CLICK,
					noun: r.TOPIC,
					...i.n(t),
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
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				d = n.n(i);

			function a() {
				return (a = Object.assign || function(e) {
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
				return s.a.createElement("svg", a({
					className: Object(o.a)(d.a.dropdown, {
						[d.a.mRedditStyle]: !n
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
				o = n("./src/reddit/constants/colors.ts");
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
				fill: e.isUnread ? o.a.orangered : "none"
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
				o = n.n(s);
			t.a = r.a.div("inlineRow", o.a)
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
				o = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				a = n.n(d);
			t.a = Object(o.a)(e => s.a.createElement("div", {
				className: Object(i.a)(a.a.exapndLeftContainer, e.className)
			}, s.a.createElement("div", {
				className: a.a.left
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: a.a.right,
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
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				d = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/extractQueryParams/index.ts"),
				u = n("./src/lib/makeListingKey/index.ts"),
				m = n("./src/reddit/actions/pages/modListing/index.ts"),
				p = n("./src/reddit/components/EmptySubreddit.tsx"),
				h = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				b = n("./src/reddit/components/JumpToContent/index.tsx"),
				f = n("./src/reddit/components/ListingPostList/index.tsx"),
				g = n("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				y = n("./node_modules/fbt/lib/FbtPublic.js"),
				v = n("./src/higherOrderComponents/asModal/index.tsx"),
				_ = n("./src/reddit/actions/modal.ts"),
				O = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				x = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				w = n("./src/reddit/controls/TextButton/index.tsx"),
				E = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				I = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				j = n("./src/reddit/selectors/activeModalId.ts"),
				k = n("./src/reddit/selectors/modQueue.ts"),
				S = n("./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less"),
				C = n.n(S);
			const {
				fbt: T
			} = n("./node_modules/fbt/lib/FbtPublic.js"), M = Object(v.a)(e => i.a.createElement(O.e, {
				className: C.a.modalBody
			}, i.a.createElement(O.i, null, i.a.createElement(I.a, null, i.a.createElement(O.q, {
				className: C.a.modalTitle
			}, i.a.createElement(E.a, {
				className: C.a.modIcon
			}), T._("r/Mod", null, {
				hk: "2a9ICx"
			})), i.a.createElement(w.a, {
				onClick: e.onCloseModal
			}, i.a.createElement(O.b, null)))), i.a.createElement(O.l, {
				className: C.a.modalMain
			}, i.a.createElement("div", {
				className: C.a.modalDescription
			}, T._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), i.a.createElement(x.b, {
				isSidebar: !1,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			})))), P = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
				className: C.a.feedDetailsTitle
			}, i.a.createElement(E.a, {
				className: C.a.modIcon
			}), T._("r/Mod", null, {
				hk: "2a9ICx"
			})), i.a.createElement("div", {
				className: C.a.feedDetailsDescription
			}, T._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), e.moderatedCommunitiesIds.length ? i.a.createElement(x.b, {
				isSidebar: !0,
				onSeeMoreDetails: e.onSeeMoreDetails,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			}) : i.a.createElement("div", {
				className: C.a.loadingBar
			})), L = Object(a.c)({
				isModalOpen: Object(j.b)("MOD_LISTING_FEED_DETAILS_MODAL_ID"),
				moderatedCommunitiesIds: k.e
			});
			var N = Object(d.b)(L, (e, t) => {
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
					return n ? i.a.createElement(i.a.Fragment, null, i.a.createElement(P, {
						moderatedCommunitiesIds: n,
						onSeeMoreDetails: r
					}), t && i.a.createElement(M, {
						moderatedCommunitiesIds: n,
						onCloseModal: r,
						onOverlayClick: r,
						withOverlay: !0
					})) : null
				}),
				R = n("./node_modules/react-router-redux/es/index.js"),
				F = n("./src/reddit/components/TrackingHelper/index.tsx"),
				H = n("./src/reddit/contexts/PageLayer/index.tsx"),
				B = n("./src/reddit/controls/Button/index.tsx");
			const D = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				A = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				K = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				});
			var W = n("./src/reddit/routes/modListing/index.ts");
			const U = e => e.modListingPage.filteredSubreddits.api.pending;
			var G = n("./src/reddit/constants/keycodes.ts"),
				q = n("./src/reddit/layout/row/Inline/index.tsx"),
				V = n("./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less"),
				J = n.n(V);
			const Q = Object(a.c)({
				apiError: e => e.modListingPage.filteredSubreddits.api.error,
				isApiPending: U
			});
			class z extends i.a.Component {
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
						this.canSubmitInput() && (this.props.sendEvent(D()), this.props.hide(this.state.subredditInput), this.clearSubredditInput())
					}, this.onChange = e => {
						this.setSubredditInput(e.target.value)
					}, this.onKeyPress = e => {
						e.key === G.b.Enter && this.submitInput()
					}, this.canSubmitInput = () => this.state.subredditInput && !this.props.isApiPending
				}
				render() {
					const {
						props: e
					} = this;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(q.a, null, i.a.createElement("input", {
						className: J.a.input,
						onChange: this.onChange,
						onKeyPress: this.onKeyPress,
						placeholder: y.fbt._("r/community", null, {
							hk: "4ceDB9"
						}),
						value: this.state.subredditInput
					}), i.a.createElement(B.l, {
						"aria-label": y.fbt._("Hide", null, {
							hk: "1BnFmX"
						}),
						className: J.a.hideButton,
						disabled: !this.canSubmitInput(),
						onClick: this.submitInput
					}, y.fbt._("Hide", null, {
						hk: "1BnFmX"
					}))), e.apiError && e.apiError.explanation && i.a.createElement("div", {
						className: J.a.errorText
					}, e.apiError.explanation))
				}
			}
			var X = Object(d.b)(Q, e => ({
					hide: t => e(Object(m.hideSubreddit)(t))
				}))(Object(F.c)(z)),
				Y = n("./src/lib/lessComponent.tsx"),
				Z = n("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = n("./src/lib/classNames/index.ts"),
				ee = n("./src/reddit/icons/fonts/helpers.tsx");
			var te = e => i.a.createElement("i", {
					className: Object($.a)(Object(ee.b)("clear", e.isFilled), e.className)
				}),
				ne = n("./src/reddit/selectors/profile.ts"),
				re = n("./src/reddit/selectors/subreddit.ts"),
				se = n("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less"),
				oe = n.n(se);
			const ie = Y.a.wrapped(Z.b, "SubredditIcon", oe.a),
				de = Object(a.c)({
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
			class ae extends i.a.Component {
				constructor() {
					super(...arguments), this.onClickUnhideSubreddit = e => {
						e.stopPropagation(), e.preventDefault(), this.props.subredditOrProfile && (this.props.sendEvent(A()), this.props.unhide(this.props.subredditName))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.subredditOrProfile ? i.a.createElement(x.a, {
						className: oe.a.row,
						to: e.subredditOrProfile.url
					}, i.a.createElement(ie, {
						subredditOrProfile: e.subredditOrProfile
					}), i.a.createElement("span", {
						className: oe.a.label
					}, e.subredditOrProfile.displayText), !e.isApiPending && i.a.createElement("button", {
						"aria-label": y.fbt._("Unhide", null, {
							hk: "2sCv0O"
						}),
						className: oe.a.unhideButton,
						onClick: this.onClickUnhideSubreddit
					}, i.a.createElement(te, null))) : null
				}
			}
			var ce = Object(d.b)(de, e => ({
					unhide: t => e(Object(m.unhideSubreddit)(t))
				}))(Object(F.c)(ae)),
				le = n("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less"),
				ue = n.n(le);
			const {
				fbt: me
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var pe = e => {
					let {
						hiddenSubredditsNames: t
					} = e;
					const n = t.map(e => i.a.createElement(ce, {
						key: e,
						subredditName: e
					}));
					return i.a.createElement(i.a.Fragment, null, t.length ? i.a.createElement("div", {
						className: ue.a.rows
					}, n) : i.a.createElement("div", {
						className: ue.a.noRows
					}, me._("Viewing all communities", null, {
						hk: "4p9SL8"
					})))
				},
				he = n("./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less"),
				be = n.n(he);
			const {
				fbt: fe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ge = Object(H.u)({
				filtered: e => !!e && Object(W.d)(e.url)
			}), ye = Object(a.c)({
				hiddenSubredditsNames: e => e.modListingPage.filteredSubreddits.names
			});
			class ve extends i.a.Component {
				constructor() {
					super(...arguments), this.onToggleFiltered = () => {
						this.props.sendEvent(K(this.props.filtered)), this.props.toggleFiltered()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return i.a.createElement("div", {
						className: be.a.container
					}, i.a.createElement("div", {
						className: be.a.hideCommunitiesHeader
					}, fe._("Hide communities", null, {
						hk: "15OtHo"
					})), i.a.createElement(B.r, {
						className: be.a.tertiaryButton,
						onClick: this.onToggleFiltered
					}, e.filtered ? fe._("Go to unfiltered r/Mods", null, {
						hk: "2RGhxF"
					}) : fe._("Go to filtered r/Mod", null, {
						hk: "YdVw7"
					})), e.filtered && i.a.createElement("div", {
						className: be.a.inputContainer
					}, i.a.createElement(X, null), i.a.createElement(pe, {
						hiddenSubredditsNames: e.hiddenSubredditsNames
					})))
				}
			}
			var _e = ge(Object(d.b)(ye, (e, t) => {
					let {
						filtered: n
					} = t;
					return {
						toggleFiltered: () => e(Object(R.b)(n ? W.a : W.b))
					}
				})(Object(F.c)(ve))),
				Oe = n("./src/reddit/components/SidebarContainer/index.tsx"),
				xe = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				we = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx");
			var Ee = () => i.a.createElement(Oe.a, null, i.a.createElement(we.a, {
					title: y.fbt._("Feed details", null, {
						hk: "3JlrpB"
					})
				}, i.a.createElement(N, null), i.a.createElement(_e, null)), i.a.createElement(xe.a, null)),
				Ie = n("./src/reddit/constants/page.ts"),
				je = n("./src/reddit/constants/parameters.ts"),
				ke = n("./src/reddit/helpers/trackers/screenview.ts"),
				Se = n("./src/reddit/layout/page/Listing/index.tsx"),
				Ce = n("./src/reddit/selectors/moderatorPermissions.ts");
			const Te = Object(a.a)((e, t) => {
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
					return Object(W.d)(n.path)
				}, Ce.k, Ce.d, (e, t, n, r, o) => {
					const i = s()([...Object(l.a)(e)]),
						d = je.E in i && i[je.E].toUpperCase(),
						a = "string" == typeof d && d in c.hc ? c.hc[d] : c.ic,
						m = n ? Ie.f : Ie.e;
					return {
						filtered: n,
						isModerator: r,
						isModeratorWithPostPerms: o,
						listingKey: Object(u.a)(m, t, i),
						listingName: m,
						sort: t,
						timeSort: a
					}
				}),
				Me = Object(d.b)(Te, (e, t) => ({
					onLoadMorePosts: () => e(m.moreModListingRequested({
						sort: t.match.params.sort
					}))
				}));
			class Pe extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onViewed = (e, t) => Object(ke.f)({
						key: this.props.listingKey,
						sort: this.props.sort,
						timerType: t,
						timerMillis: e
					}), this.renderEmptySubreddit = () => i.a.createElement(p.a, {
						listingName: this.props.listingName,
						sort: this.props.sort
					})
				}
				render() {
					const e = this.props.filtered ? W.b : W.a;
					return i.a.createElement("div", null, this.props.isModeratorWithPostPerms ? i.a.createElement(Se.a, {
						className: this.props.className,
						fitPageToContent: !0,
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(h.a, {
							baseUrl: e,
							sort: this.props.sort,
							timeSort: this.props.timeSort
						}), i.a.createElement(b.a, null), i.a.createElement(f.a, {
							listingKey: this.props.listingKey,
							listingName: this.props.listingName,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderEmptySubreddit,
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: i.a.createElement(Ee, null)
					}) : i.a.createElement(g.a, {
						isModerator: this.props.isModerator
					}))
				}
			}
			t.default = Me(Pe)
		},
		"./src/reddit/reducers/pages/modHub/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/subredditModeration/constants.ts");
			var o = function() {
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
				i = n("./src/reddit/models/SubredditModeration/index.ts");
			const d = {};
			var a = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.g: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(i.e)(n, r);
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
							} = t.payload, s = Object(i.e)(n, r);
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
					error: o,
					pending: a
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
						} = t.payload, s = Object(i.e)(r, n);
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
			var p = function() {
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
				h = n("./node_modules/icepick/icepick.js");
			const b = {};
			var f = function() {
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
						return Object(h.merge)(e, s)
					}
					case s.k: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(h.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var g = function() {
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
					error: g,
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
			const x = {};
			var w = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
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
				E = Object(r.c)({
					api: c,
					fetchedTokens: u,
					loadMore: p,
					models: f,
					search: O,
					userOrder: w
				}),
				I = n("./src/reddit/actions/grantUserFlair/constants.ts");
			var j = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case I.g:
					case I.i:
						return null;
					case I.f:
						return t.payload;
					default:
						return e
				}
			};
			var k = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case I.i:
							return !0;
						case I.g:
						case I.f:
							return !1;
						default:
							return e
					}
				},
				S = Object(r.c)({
					error: j,
					pending: k
				}),
				C = n("./node_modules/lodash/merge.js"),
				T = n.n(C),
				M = n("./node_modules/lodash/omit.js"),
				P = n.n(M);
			const L = {};
			var N = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case I.g:
					case I.k: {
						const {
							subredditId: n,
							flairedUsers: r
						} = t.payload;
						return T()({
							...e
						}, {
							[n]: r
						})
					}
					case I.c: {
						const {
							subredditId: n,
							userName: r
						} = t.payload, s = P()(e[n], r);
						return {
							...e,
							[n]: s
						}
					}
					case I.a:
					case I.b:
					case I.h:
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
					case I.g: {
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
			var H = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case I.l:
					case I.k:
						return null;
					case I.j:
						return t.payload;
					default:
						return e
				}
			};
			var B = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case I.l:
							return !0;
						case I.k:
						case I.j:
							return !1;
						default:
							return e
					}
				},
				D = Object(r.c)({
					error: H,
					pending: B
				});
			var A = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case I.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case I.c: {
							const {
								userName: n
							} = t.payload;
							return e === n ? null : e
						}
						default:
							return e
					}
				},
				K = Object(r.c)({
					api: D,
					result: A
				});
			const W = {};
			var U = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case I.g: {
							const {
								key: n,
								userOrder: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case I.a: {
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
						case I.c: {
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
				G = Object(r.c)({
					api: S,
					models: N,
					pageInfo: F,
					search: K,
					userOrder: U
				}),
				q = n("./src/reddit/actions/moderationLog/constants.ts");
			const V = {};
			var J = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case q.b: {
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
			const Q = {};
			var z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case q.b: {
							const {
								normalizedModerationLog: n,
								subredditId: r
							} = t.payload, s = {};
							n.forEach(e => {
								s[e.id] = e
							});
							const o = {
								[r]: s
							};
							return T()({
								...e
							}, o)
						}
						default:
							return e
					}
				},
				X = Object(r.c)({
					itemOrder: J,
					models: z
				});
			var Y = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case q.b: {
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
					case q.b: {
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
					case q.b: {
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
					case q.a: {
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
						case q.b: {
							const {
								startCursor: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				oe = Object(r.c)({
					actions: X,
					endCursor: Y,
					hasNextPage: $,
					hasPreviousPage: te,
					moderators: re,
					startCursor: se
				});
			const ie = {};
			var de = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie,
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
						return Object(h.merge)(e, s)
					}
					case s.y: {
						const {
							subredditId: n,
							userId: r,
							permissions: s
						} = t.payload;
						return Object(h.setIn)(e, [n, r, "modPermissions"], s)
					}
					case s.fb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(h.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			const ae = {};
			var ce = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ae,
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
			const pe = {};
			var he = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.u: {
							const {
								subredditId: n,
								response: r,
								key: s
							} = t.payload;
							return Object(h.setIn)(e, [n, s], r.moderatorIds)
						}
						case s.fb: {
							const {
								subredditId: n,
								userId: r,
								key: s
							} = t.payload, o = e[n][s].filter(e => e !== r);
							return Object(h.setIn)(e, [n, s], o)
						}
						default:
							return e
					}
				},
				be = Object(r.c)({
					data: he,
					api: me
				});
			var fe = function() {
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
			var ge = function() {
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
					error: fe,
					pending: ge
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
						return Object(h.set)(e, n, r)
					}
					case s.cb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(h.unsetIn)(e, [n, r])
					}
					case s.c: {
						const n = t.payload,
							{
								subredditId: r,
								moderators: s
							} = n,
							o = {
								[r]: s
							};
						return Object(h.merge)(e, o)
					}
					default:
						return e
				}
			};
			const Oe = {};
			var xe = function() {
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
								o = [...e[r] || [], ...s];
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				we = Object(r.c)({
					api: ye,
					models: _e,
					userOrder: xe
				});
			const Ee = {};
			var Ie = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ee,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.H: {
						const {
							subredditId: n,
							response: r
						} = t.payload, {
							invitePending: s
						} = r, o = {
							[n]: s
						};
						return Object(h.merge)(e, o)
					}
					case s.E:
					case s.F: {
						const {
							subredditId: n
						} = t.payload;
						return Object(h.unset)(e, n)
					}
					default:
						return e
				}
			};
			const je = {};
			var ke = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : je,
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
			const Se = {};
			var Ce = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Se,
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
			const Te = {};
			var Me = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Te,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.H: {
						const {
							response: n
						} = t.payload, r = {
							[n.subredditId]: n.moderators
						};
						return Object(h.merge)({
							...e
						}, r)
					}
					case s.y: {
						const n = t.payload,
							{
								subredditId: r,
								userId: s,
								permissions: o
							} = n;
						return e[r] && e[r][s] ? Object(h.setIn)(e, [r, s, "modPermissions"], o) : e
					}
					default:
						return e
				}
			};
			var Pe = function() {
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
			var Le = function() {
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
					error: Pe,
					pending: Le
				}),
				Re = n("./node_modules/lodash/isEqual.js"),
				Fe = n.n(Re);
			var He = function() {
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
				Be = Object(r.c)({
					api: Ne,
					result: He
				});
			const De = {};
			var Ae = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : De,
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
			const Ke = {};
			var We = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke,
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
					error: Ae,
					pending: We
				});
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const Ge = {};
			var qe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ge,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.H: {
							const {
								response: n,
								subredditId: r,
								key: s
							} = t.payload, {
								moderatorIds: o
							} = n;
							return Object(h.merge)(e, {
								[r]: {
									[s]: o
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
								const o = e[n][t].filter(e => e !== r);
								s[t] = o
							}), Object(h.set)(e, n, s)
						}
						default:
							return e
					}
				},
				Ve = Object(r.c)({
					data: qe,
					api: Ue
				}),
				Je = Object(r.c)({
					editableModerators: de,
					editableUserOrder: be,
					invitedModerators: we,
					invitePending: Ie,
					loadMoreModerators: Ce,
					loadMoreEditableModerators: ke,
					models: Me,
					search: Be,
					userOrder: Ve
				}),
				Qe = n("./src/reddit/actions/bulkActions/constants.ts");
			var ze = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Qe.c:
						case Qe.b:
							return null;
						case Qe.a:
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
						case Qe.c:
							return !0;
						case Qe.b:
						case Qe.a:
						case Xe.s:
						case Xe.r:
							return !1;
						default:
							return e
					}
				},
				Ze = Object(r.c)({
					error: ze,
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
							return P()(e, n)
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
						case Qe.b: {
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
			var ot = function() {
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
			var it = function() {
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
				dt = Object(r.c)({
					error: ot,
					pending: it
				});
			const at = {};
			var ct = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : at,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xe.f: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: o
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
							} = r, o = s[s.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				mt = Object(r.c)({
					api: dt,
					itemOrder: ct,
					loadMore: ut
				}),
				pt = n("./src/reddit/actions/pages/modListing/constants.ts");
			var ht = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pt.e: {
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
			var ft = function() {
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
					case pt.e: {
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
			var gt = function() {
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
					after: ht,
					data: ft,
					loaded: gt,
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
				xt = Object(r.c)({
					error: _t,
					pending: Ot
				});
			const wt = {};
			var Et = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xe.i: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: o
							}
						}
					}
					default:
						return e
				}
			};
			const It = {};
			var jt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : It,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.i: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, o = s[s.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				kt = Object(r.c)({
					api: xt,
					itemOrder: Et,
					loadMore: jt
				});
			var St = function() {
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
			var Ct = function() {
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
				Tt = Object(r.c)({
					error: St,
					pending: Ct
				});
			const Mt = {};
			var Pt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xe.m: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Lt = {};
			var Nt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.m: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, o = s[s.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				Rt = Object(r.c)({
					api: Tt,
					itemOrder: Pt,
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
			var Ht = function() {
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
				Bt = Object(r.c)({
					error: Ft,
					pending: Ht
				});
			const Dt = {};
			var At = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xe.p: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Kt = {};
			var Wt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.p: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, o = s[s.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				Ut = Object(r.c)({
					api: Bt,
					itemOrder: At,
					loadMore: Wt
				});
			var Gt = function() {
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
			var qt = function() {
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
				Vt = Object(r.c)({
					error: Gt,
					pending: qt
				});
			const Jt = {};
			var Qt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xe.v: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: o
							}
						}
					}
					default:
						return e
				}
			};
			const zt = {};
			var Xt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.v: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, o = s[s.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				Yt = Object(r.c)({
					api: Vt,
					itemOrder: Qt,
					loadMore: Xt
				}),
				Zt = Object(r.c)({
					bulkAction: st,
					edited: mt,
					moderatedCommunitiesOrder: vt,
					modqueue: kt,
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
							} = t.payload, s = Object(i.e)(n, r);
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
							} = t.payload, s = Object(i.e)(n, r);
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
							} = t.payload, s = Object(i.e)(r, n);
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
			var dn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case on.b:
						return t.payload;
					default:
						return e
				}
			};
			const an = {};
			var cn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : an,
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
						return Object(h.merge)(e, s)
					}
					case s.Y: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(h.unsetIn)(e, [n, r])
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
			var pn = function() {
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
				hn = Object(r.c)({
					error: mn,
					pending: pn
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
				fn = Object(r.c)({
					api: hn,
					result: bn
				});
			const gn = {};
			var yn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gn,
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
					inContext: dn,
					loadMore: cn,
					models: un,
					search: fn,
					userOrder: yn
				});
			t.a = Object(r.c)({
				approvedSubmitters: E,
				flairedUsers: G,
				moderationLog: oe,
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
				return p
			})), n.d(t, "e", (function() {
				return h
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/constants/index.ts");
			var r = n("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				s = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				i = n("./src/reddit/reducers/features/comments/index.ts"),
				d = n("./src/reddit/reducers/pages/modHub/index.ts");
			Object(o.a)({
				features: {
					comments: i.a
				},
				pages: {
					modHub: d.a
				}
			});
			const a = (e, t) => Object(r.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					subreddit: t.subredditName
				}),
				c = Object(s.a)((e, t) => {
					var n, r, s;
					const {
						pageName: o,
						page: i
					} = t, d = a(0, t);
					if (!(null === (s = null === (r = null === (n = e.pages.modHub.modQueue[o]) || void 0 === n ? void 0 : n.itemOrder) || void 0 === r ? void 0 : r[d]) || void 0 === s ? void 0 : s[i])) return;
					const c = e.pages.modHub.modQueue[o].itemOrder[d][i];
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
					const r = a(0, t);
					return null === (n = e.pages.modHub.modQueue[t.pageName]) || void 0 === n ? void 0 : n.loadMore[r]
				},
				m = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				p = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				h = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing.d683fad87a94b6a82d2b.js.map