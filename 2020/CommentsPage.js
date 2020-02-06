// https://www.redditstatic.com/desktop2x/CommentsPage.8d23ff18ba4b2832ef04.js
// Retrieved at 2/6/2020, 1:30:14 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPage", "reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost", "ChatPost~ModQueuePages"], {
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(e, "resize", this._checkForIntersections, !0), r(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, o.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, a(e, "resize", this._checkForIntersections, !0), a(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
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
							var r = o.element,
								a = i(r),
								d = this._rootContainsTarget(r),
								c = o.entry,
								l = t && d && this._computeTargetAndRootIntersection(r, n),
								m = o.entry = new s({
									time: e.performance && performance.now && performance.now(),
									target: r,
									boundingClientRect: a,
									rootBounds: n,
									intersectionRect: l
								});
							c ? t && d ? this._hasCrossedThreshold(c, m) && this._queuedEntries.push(m) : c && c.isIntersecting && this._queuedEntries.push(m) : this._queuedEntries.push(m)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, o.prototype._computeTargetAndRootIntersection = function(n, s) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var o, r, a, d, l, m, p, u, h = i(n), b = c(n), g = !1; !g;) {
								var x = null,
									v = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == v.display) return;
								if (b == this.root || b == t ? (g = !0, x = s) : b != t.body && b != t.documentElement && "visible" != v.overflow && (x = i(b)), x && (o = x, r = h, a = void 0, d = void 0, l = void 0, m = void 0, p = void 0, u = void 0, a = Math.max(o.top, r.top), d = Math.min(o.bottom, r.bottom), l = Math.max(o.left, r.left), m = Math.min(o.right, r.right), u = d - a, !(h = (p = m - l) >= 0 && u >= 0 && {
										top: a,
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
						if (this.root) e = i(this.root);
						else {
							var n = t.documentElement,
								s = t.body;
							e = {
								top: 0,
								left: 0,
								right: n.clientWidth || s.clientWidth,
								width: n.clientWidth || s.clientWidth,
								bottom: n.clientHeight || s.clientHeight,
								height: n.clientHeight || s.clientHeight
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
							s = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (n !== s)
							for (var o = 0; o < this.thresholds.length; o++) {
								var r = this.thresholds[o];
								if (r == n || r == s || r < n != r < s) return !0
							}
					}, o.prototype._rootIsInDom = function() {
						return !this.root || d(t, this.root)
					}, o.prototype._rootContainsTarget = function(e) {
						return d(this.root || t, e)
					}, o.prototype._registerInstance = function() {
						n.indexOf(this) < 0 && n.push(this)
					}, o.prototype._unregisterInstance = function() {
						var e = n.indexOf(this); - 1 != e && n.splice(e, 1)
					}, e.IntersectionObserver = o, e.IntersectionObserverEntry = s
				}

				function s(e) {
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
						s = this.intersectionRect,
						o = s.width * s.height;
					this.intersectionRatio = n ? o / n : this.isIntersecting ? 1 : 0
				}

				function o(e, t) {
					var n, s, o, r = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), s = this.THROTTLE_TIMEOUT, o = null, function() {
						o || (o = setTimeout((function() {
							n(), o = null
						}), s))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function r(e, t, n, s) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, n, s || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
				}

				function a(e, t, n, s) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, n, s || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
				}

				function i(e) {
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
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var n = "Expected a function";
			e.exports = function(e, t, s) {
				if ("function" != typeof e) throw new TypeError(n);
				return setTimeout((function() {
					e.apply(void 0, s)
				}), t)
			}
		},
		"./node_modules/lodash/_baseFindKey.js": function(e, t) {
			e.exports = function(e, t, n) {
				var s;
				return n(e, (function(e, n, o) {
					if (t(e, n, o)) return s = n, !1
				})), s
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseDelay.js"),
				o = n("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return s(e, 1, t)
				}));
			e.exports = o
		},
		"./node_modules/lodash/findKey.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseFindKey.js"),
				o = n("./node_modules/lodash/_baseForOwn.js"),
				r = n("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return s(e, r(t, 3), o)
			}
		},
		"./node_modules/lodash/random.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRandom.js"),
				o = n("./node_modules/lodash/_isIterateeCall.js"),
				r = n("./node_modules/lodash/toFinite.js"),
				a = parseFloat,
				i = Math.min,
				d = Math.random;
			e.exports = function(e, t, n) {
				if (n && "boolean" != typeof n && o(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = r(e), void 0 === t ? (t = e, e = 0) : t = r(t)), e > t) {
					var c = e;
					e = t, t = c
				}
				if (n || e % 1 || t % 1) {
					var l = d();
					return i(e + l * (t - e + a("1e-" + ((l + "").length - 1))), t)
				}
				return s(e, t)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseTimes.js"),
				o = n("./node_modules/lodash/_castFunction.js"),
				r = n("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				i = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > a) return [];
				var n = i,
					c = d(e, i);
				t = o(t), e -= i;
				for (var l = s(c, t); ++n < e;) t(n);
				return l
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return s(e) + t
			}
		},
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/bignumber.js/bignumber.js");

			function o(e, t) {
				const n = new s.BigNumber(e),
					o = new s.BigNumber(t),
					r = new s.BigNumber(n.dividedBy(o)),
					a = new s.BigNumber("100").multipliedBy(r);
				return new s.BigNumber(a).toNumber()
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/reddit/i18n/utils.ts");
			const o = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				r = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				a = (e, t) => t ? e.getUTCDate() : e.getDate(),
				i = (e, t, n) => {
					const a = t ? e.getUTCMonth() : e.getMonth(),
						i = n ? r : o;
					return Object(s.c)(i[a])
				},
				d = (e, t) => t ? e.getUTCFullYear() : e.getFullYear();

			function c(e, t, n, s) {
				const o = new Date(1e3 * e),
					r = i(o, n, s),
					c = t ? a(o, n) + ", " : "";
				return "".concat(r, " ").concat(c).concat(d(o, n))
			}
		},
		"./src/reddit/actions/commentsListTruncated/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/commentsListTruncated/constants.ts");
			const r = Object(s.a)(o.a),
				a = Object(s.a)(o.b)
		},
		"./src/reddit/actions/dismissedTruncationList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const r = Object(s.a)(o.a)
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/app/strings/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/config.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");
			var m = n("./src/reddit/endpoints/governance/poll.ts");
			var p = n("./src/reddit/endpoints/governance/wallet.ts"),
				u = n("./src/reddit/models/Poll/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/models/Vote/index.ts"),
				g = n("./src/reddit/selectors/gov.ts"),
				x = n("./src/reddit/actions/governance/constants.ts"),
				v = n("./src/reddit/actions/governance/errorToast.ts");
			n.d(t, "a", (function() {
				return C
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "h", (function() {
				return k
			})), n.d(t, "i", (function() {
				return R
			})), n.d(t, "f", (function() {
				return A
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "j", (function() {
				return B
			})), n.d(t, "c", (function() {
				return D
			}));
			const C = Object(o.a)(x.b),
				O = Object(o.a)(x.c),
				f = Object(o.a)(x.d),
				y = Object(o.a)(x.e),
				E = Object(o.a)(x.f),
				j = (Object(o.a)(x.g), Object(o.a)(x.h), Object(o.a)(x.i)),
				w = Object(o.a)(x.j),
				I = Object(o.a)(x.k),
				P = Object(o.a)(x.l),
				_ = Object(o.a)(x.r),
				k = Object(o.a)(x.s),
				T = Object(o.a)(x.t),
				S = Object(o.a)(x.u),
				L = Object(o.a)(x.v),
				N = Object(o.a)(x.w),
				M = Object(o.a)(x.x),
				R = Object(o.a)(x.y),
				A = (e, t) => async (n, s, o) => {
					let r, {
							apiContext: a,
							gqlContext: d
						} = o,
						c = s().polls.models[e];
					if (n(I({
							pollId: e
						})), (r = c.type === u.a.GA ? await Object(m.c)(d(), e, t) : await Object(m.b)(a(), c.subredditId, e, t)).ok) {
						if (c.type === u.a.GA) {
							const {
								options: e
							} = r.body.data.updatePostPollVoteState.poll;
							n(E({
								pollId: c.id,
								optionId: t,
								options: e
							}))
						} else n(P(r.body));
						const o = s();
						if ((c = o.polls.models[e]) && Object(u.d)(c)) {
							const {
								postId: e
							} = c, t = o.posts.models[e];
							t && t.voteState === b.a.notVoted && n(Object(i.Q)(e))
						}
					} else n(w({
						pollId: e,
						error: r.error || r.errors[0].message
					})), Object(v.a)(n, r.error || r.errors[0].messsage)
				}, F = (e, t) => async (n, o, i) => {
					let {
						apiContext: m
					} = i;
					n(T());
					const p = o().transfers.communityPoints.contentId || void 0,
						u = await
					function(e, t) {
						return Object(l.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: "".concat(c.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(m(), Object.assign({}, e, {
						contentId: p
					}));
					if (u.ok) {
						const i = o().user.language;
						n(S(Object.assign({}, u.body, {
							subredditId: e.subredditId
						}))), n(Object(d.e)({
							kind: h.b.SuccessCommunity,
							text: Object(s.a)(i, "gov.transferSuccess", {
								amount: Object(r.a)(e.amount),
								recipient: e.recipient,
								tokenName: Object(g.o)(o(), {
									subredditId: e.subredditId
								})
							})
						})), t && n(Object(a.f)())
					} else n(_({
						error: u.error
					})), Object(v.a)(n, u.error)
				}, B = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					t(N());
					const r = await Object(p.a)(o(), e);
					r.ok ? t(M(r.body)) : t(L({
						error: r.error
					}))
				}, D = (e, t) => async (n, o, r) => {
					let {
						apiContext: a
					} = r;
					n(f());
					const i = await
					function(e, t, n) {
						return Object(l.a)(e, {
							data: {
								optOut: t
							},
							method: "patch",
							endpoint: "".concat(c.a.metaUrl, "/wallets/").concat(n, "/me")
						})
					}(a(), e, t);
					if (i.ok) {
						n(M({
							[t]: i.body
						}));
						const r = e ? "polls.optOutSuccess" : "polls.optInSuccess";
						n(Object(d.e)({
							kind: h.b.SuccessCommunity,
							text: Object(s.a)(o().user.language, r, {
								tokenName: Object(g.o)(o(), {
									subredditId: t
								})
							})
						}))
					} else Object(v.a)(n, i.error)
				}
		},
		"./src/reddit/components/BannerAd/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1rmObrmUCfC5t42SbwkzYC",
				container: "_1rmObrmUCfC5t42SbwkzYC",
				LoadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2",
				loadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2"
			}
		},
		"./src/reddit/components/BannerAd/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/doubleclickForPublishers/index.ts"),
				l = n("./src/lib/intersectionObserver/index.ts"),
				m = n("./src/lib/objectSelector/index.ts"),
				p = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/helpers/trackers/ads.ts"),
				g = n("./src/reddit/components/BannerAd/index.m.less"),
				x = n.n(g),
				v = n("./src/lib/lessComponent.tsx");
			const C = v.a.div("Container", x.a),
				O = v.a.div("LoadingHitbox", x.a),
				f = e => setTimeout(() => {
					throw e
				}, 0);
			class y extends o.a.Component {
				constructor() {
					super(...arguments), this.frame = null, this.loader = null, this.refreshedAt = 1 / 0, this.isWithinLoadingDistance = !1
				}
				componentDidCatch(e) {
					f(e)
				}
				defineSlot() {
					const {
						id: e,
						slot: t,
						properties: n,
						sizes: s = []
					} = this.props;
					try {
						return this.frame && c.a(this.frame, {
							id: e,
							slot: t,
							properties: n,
							sizes: s
						})
					} catch (o) {
						f(o)
					}
				}
				destroySlot() {
					try {
						this.frame && c.b(this.frame)
					} catch (e) {
						f(e)
					}
				}
				async componentDidMount() {
					this.props.sendEvent(Object(b.a)());
					try {
						await this.defineSlot()
					} catch (e) {
						f(e)
					}
					this.loader && l.a(this.loader, e => {
						this.frame && c.e(this.frame, {
							viewable: e.intersectionRatio > .5
						}), this.isWithinLoadingDistance = !0, this.refresh(this.props), this.loader && l.b(this.loader)
					})
				}
				componentWillUnmount() {
					this.loader && l.b(this.loader), this.destroySlot()
				}
				refresh(e) {
					this.isWithinLoadingDistance && (this.refreshedAt = Date.now(), this.frame && c.d(this.frame, {
						id: e.id,
						slot: e.slot,
						properties: e.properties,
						sizes: e.sizes
					}))
				}
				componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						id: e,
						slot: t,
						className: n
					} = this.props;
					return t ? o.a.createElement(C, {
						"data-slot": t
					}, o.a.createElement(O, {
						key: "".concat(e, "-loadinghitbox"),
						innerRef: e => {
							this.loader = e
						}
					}), o.a.createElement("div", {
						"data-before-content": this.props.dataBeforeContent,
						key: "".concat(e, "-div"),
						className: n,
						ref: e => {
							this.frame = e
						},
						id: e
					})) : o.a.createElement("div", {
						className: n
					})
				}
			}
			y.defaultProps = {
				sizes: [d.e]
			};
			t.a = Object(r.b)(() => Object(a.c)({
				properties: Object(m.a)((e, t) => {
					const n = e.platform.currentPage;
					if (!n) return {};
					const s = "".concat(e.meta.protocol, "://").concat(e.meta.domain);
					return Object(p.b)(t.placement, e.user, Object(i.a)("".concat(s).concat(n.url), n.queryParams), Object(u.y)(e, {
						subredditName: t.listingName
					}), t.position)
				}),
				slot: (e, t) => {
					const n = e.platform.currentPage;
					return n && n.meta ? c.c(t.listingName, n.meta.name) : ""
				}
			}))(Object(h.b)(y))
		},
		"./src/reddit/components/Collection/PostAndPostEventMeta/index.m.less": function(e, t, n) {
			e.exports = {
				postEventMeta: "UORiCb6Mik-agLw97Owil",
				Metadata: "YxCA1Mpgi_ThsEnFr_EFv",
				metadata: "YxCA1Mpgi_ThsEnFr_EFv"
			}
		},
		"./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/app/strings/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				c = n("./src/reddit/helpers/postEvent.ts"),
				l = n("./src/reddit/components/Collection/PostAndPostEventMeta/index.m.less"),
				m = n.n(l);
			const p = i.a.wrapped(e => o.a.createElement("span", {
					className: e.className
				}, e.children), "Metadata", m.a),
				u = e => {
					let {
						post: t,
						language: n
					} = e;
					return Object(c.a)(t) ? o.a.createElement(d.a, {
						className: m.a.postEventMeta,
						language: n,
						post: t
					}) : o.a.createElement(o.a.Fragment, null, !t.isScoreHidden && o.a.createElement(o.a.Fragment, null, o.a.createElement(p, {
						"data-click-id": "score"
					}, Object(a.c)(n, "posts.points.noun", t.score, {
						count: Object(r.b)(t.score)
					})), o.a.createElement(p, null, "·")), o.a.createElement(p, {
						"data-click-id": "comments"
					}, Object(a.c)(n, "posts.comments.noun", t.numComments, {
						count: Object(r.b)(t.numComments)
					})))
				}
		},
		"./src/reddit/components/Collection/PostItem/index.m.less": function(e, t, n) {
			e.exports = {
				postTitle: "_1bvyZ0jB0C8Lx6TlraZXE3",
				postContent: "_3giZKNlG6qJzee7UY1xsIJ",
				active: "_12zSt_pMIevRkRY1y7z0ZD",
				isProfilePage: "_3yF2XCFhSO-O3pN8ebYN1G",
				postBody: "_2L4qX-0aH7jj8yNe2FGxg-",
				bottomline: "NlMXOVW9HTmozMDSBJduL",
				postContainer: "rF1mJN5TPvOeX-Rs9PA04",
				postBodyWrapper: "_3LxyuVXMtCzPGToR6G4aUP",
				galleryPostContainer: "LbSOjrpQSZxNlzkqgp8IK",
				galleryPostOverlay: "_32s7Ik6Mvi_xJ6Q7PXN7cS",
				galleryPostImage: "_71EQniEmTXC8cbuXDlo2y",
				gallerySelectedBorder: "_3TY5O5VX0o1EJLeXO2CBIz",
				isNightmodeOn: "_3ToKa6hKRy0knGHXUZW0tI",
				isSelectedPost: "dKiTp-99N-ixy1MUgoxzt",
				galleryBottomLine: "_3juAZ5nip3xhlLYoa0eJHl",
				isScoreHidden: "_1gE7DLti39Ow23AU39DRyi",
				gallerySeparator: "_1REIFRRcgS4gb1OzCUiDdF",
				scrollToContainer: "R4W5__5pno6HuOR6cXIcW",
				blurBackground: "_1EmOtGLOIj5jVny00MsYDq",
				timelineThumbnail: "N7ZDF05PM85cnjxy8A9Kj",
				timelineThumbnailOverride: "_2qHZln2Y6YL5GXxpgP4Qf4",
				galleryThumbnailPlaceholder: "_3HsMbUHP3qlXSnSNv10i__",
				thumbnailContainerClassName: "_22Rd8vdnxySvffllxDpbGs",
				galleryPostPlaceholderThumbnailOverride: "_2XLoayiHEZSUCfwO0UAbso",
				commonThumbnailOverride: "_2tS9NgDPCzFiHnYMa3o1SV"
			}
		},
		"./src/reddit/components/Collection/index.m.less": function(e, t, n) {
			e.exports = {
				collectionTitleWrapper: "_10IcBRrmressbhblq2bqiU",
				isProfilePage: "_40cmCHyGWf1SgOpyoChQS",
				collectionTitle: "tFfYP5FF1o5CEXQ15uH7d",
				collectionMetaData: "_1-c9t8ecl06D08Su9pk4ni",
				collectionBy: "_17sTscKExP8XIU91kNOF2U",
				collectionTitleOptions: "_1IA_VhTzcdVBgjp_pZllHj",
				postListWrapper: "_2T_gfh-4AolUQ4rcgj8LV3",
				collectionDescription: "_1qekGnwXQb9ZXUYpC2vI3o",
				collectionList: "_3DA4B_0rR_osY0zjBQbJ8d",
				author: "_3fYAYBseZm3AMr8S-Q5ZoJ",
				overflowMenu: "_3LbMCmvXBCx5DLWUsYvKdV",
				postCount: "_1LY03RHQAwDBI6w3IOLqwg",
				galleryContainer: "_3sH08_Dk83Y6-vyvIc9ttc"
			}
		},
		"./src/reddit/components/Collection/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/app/strings/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/domUtils/index.ts"),
				l = n("./src/lib/fastdom/index.ts"),
				m = n("./src/reddit/actions/postCollection/index.ts"),
				p = n("./src/reddit/components/AuthorLink/index.tsx"),
				u = n("./src/reddit/components/PostFollow/index.tsx"),
				h = n("./src/reddit/components/SEOTitle/index.tsx"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				g = n("./src/reddit/components/Translated/index.tsx"),
				x = n("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx"),
				v = n("./src/reddit/constants/componentSizes.ts"),
				C = n("./src/reddit/constants/elementIds.ts"),
				O = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				y = n("./src/reddit/helpers/postCollection.ts"),
				E = n("./src/reddit/models/Post/index.ts"),
				j = n("./src/reddit/models/PostCollection/index.ts"),
				w = n("./src/reddit/selectors/postCollection.ts"),
				I = n("./src/reddit/selectors/posts.ts"),
				P = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/react-router-dom/esm/react-router-dom.js")),
				_ = n("./src/lib/prettyPrintNumber/index.ts"),
				k = n("./src/lib/timezone/index.ts"),
				T = n("./src/reddit/actions/modal.ts"),
				S = n("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				L = n("./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx"),
				N = n("./src/reddit/components/PostContainer/index.tsx"),
				M = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx"),
				R = n("./src/reddit/helpers/path/index.ts"),
				A = n("./src/reddit/helpers/postEvent.ts"),
				F = n("./src/reddit/helpers/trackers/postCollection.ts"),
				B = n("./src/reddit/models/PostCreationForm/index.ts"),
				D = n("./src/reddit/selectors/activeModalId.ts"),
				W = n("./src/reddit/selectors/user.ts"),
				H = n("./src/reddit/components/Collection/PostItem/index.m.less"),
				V = n.n(H);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			let G, K;
			const q = e => "".concat(e, "--collectionItem"),
				z = e => {
					const {
						activeModalId: t,
						addEventStartTime: n,
						eventFactory: s,
						isFutureEvent: r,
						isNightmodeOn: a,
						isOverlay: i,
						isSelectedPost: c,
						language: l,
						onPostSelection: m,
						onRemovePost: p,
						onStartEventNow: u,
						onPostTitleClick: h,
						post: b,
						shouldShowCollectionPostEdits: g,
						shouldShowThumbnail: x,
						style: v,
						toggleEditStartTimeModal: C,
						updateSelectedPostRef: O,
						isProfilePage: f
					} = e;
					return o.a.createElement(N.a, {
						className: Object(d.a)(V.a.postContainer, {
							[V.a.isNightmodeOn]: a,
							[V.a.isSelectedPost]: c,
							[V.a.isProfilePage]: f
						}),
						isOverlay: i,
						makePostContainerId: q,
						post: b,
						onClick: m,
						eventFactory: s,
						style: v
					}, o.a.createElement("div", {
						ref: c && O || void 0
					}, o.a.createElement("div", {
						className: Object(d.a)(V.a.postContent, {
							[V.a.active]: c
						})
					}, x && o.a.createElement(S.a, {
						className: V.a.timelineThumbnail,
						classNameInnerThumbnail: Object(d.a)(V.a.timelineThumbnailOverride, V.a.commonThumbnailOverride),
						post: b
					}), o.a.createElement("div", {
						className: V.a.postBodyWrapper
					}, o.a.createElement("div", {
						className: V.a.postBody,
						"data-click-id": "body"
					}, o.a.createElement(P.a, {
						to: Object(R.b)(b.permalink),
						className: V.a.postTitle,
						style: {
							WebkitBoxOrient: "vertical"
						},
						title: b.title,
						onClick: h
					}, b.title)), o.a.createElement("div", {
						className: V.a.bottomline
					}, o.a.createElement(L.b, {
						post: b,
						language: l
					}), g && o.a.createElement(M.a, {
						onRemoveClick: p,
						dropdownId: "collection-post-item-".concat(b.id),
						isFutureEvent: r,
						onStartEventNow: u,
						onEditStartTime: C,
						onAddEventStartTime: C,
						shouldShowAddEventStartTime: !Object(A.a)(b)
					}))))), t === Object(B.s)(b.id, i, B.j.COLLECTION_INFO_POST) && G && o.a.createElement(G, {
						onChange: n,
						onClose: C,
						schedule: Object(k.c)(b),
						shouldShowDeleteButton: !1
					}))
				},
				Y = S.a,
				J = e => {
					const {
						activeModalId: t,
						addEventStartTime: n,
						eventFactory: s,
						galleryThumbnail: r,
						isFutureEvent: a,
						isNightmodeOn: c,
						isOverlay: l,
						isSelectedPost: m,
						language: p,
						onPostSelection: u,
						onRemovePost: h,
						onStartEventNow: b,
						post: g,
						shouldShowCollectionPostEdits: x,
						style: v,
						toggleEditStartTimeModal: C,
						updateSelectedPostRef: O,
						isProfilePage: f
					} = e, y = r && r.url || "", E = g.isSpoiler || g.isNSFW, j = g.isScoreHidden;
					return o.a.createElement(N.a, {
						className: Object(d.a)(V.a.galleryPostContainer, {
							[V.a.isSelectedPost]: m,
							[V.a.isNightmodeOn]: c,
							[V.a.isProfilePage]: f
						}),
						isOverlay: l,
						makePostContainerId: q,
						post: g,
						onClick: u,
						eventFactory: s,
						style: v
					}, o.a.createElement("div", {
						className: V.a.scrollToContainer,
						ref: m && O || void 0
					}, y ? o.a.createElement("div", {
						className: Object(d.a)(V.a.galleryPostImage, {
							[V.a.blurBackground]: E
						}),
						style: {
							backgroundImage: "url('".concat(y, "')")
						}
					}) : o.a.createElement(Y, {
						className: V.a.galleryThumbnailPlaceholder,
						thumbnailContainerClassName: V.a.thumbnailContainerClassName,
						classNameInnerThumbnail: Object(d.a)(V.a.galleryPostPlaceholderThumbnailOverride, V.a.commonThumbnailOverride),
						post: g
					}), c && o.a.createElement("div", {
						className: V.a.gallerySeparator
					}), m && o.a.createElement("div", {
						className: V.a.gallerySelectedBorder
					}), o.a.createElement("div", {
						className: V.a.galleryPostOverlay
					}, o.a.createElement("div", {
						className: Object(d.a)(V.a.galleryBottomLine, {
							[V.a.isScoreHidden]: j
						})
					}, !j && o.a.createElement(L.a, {
						"data-click-id": "score"
					}, Object(i.c)(p, "posts.points.noun", g.score, {
						count: Object(_.b)(g.score)
					})), x && o.a.createElement(M.a, {
						onRemoveClick: h,
						dropdownId: "collection-post-item-".concat(g.id),
						isFutureEvent: a,
						onStartEventNow: b,
						onEditStartTime: C,
						onAddEventStartTime: C,
						shouldShowAddEventStartTime: !Object(A.a)(g)
					})))), t === Object(B.s)(g.id, l, B.j.COLLECTION_INFO_POST) && G && o.a.createElement(G, {
						onChange: n,
						onClose: C,
						schedule: Object(k.c)(g),
						shouldShowDeleteButton: !1
					}))
				};
			class Q extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onPostSelection = (e, t) => {
						const {
							onClickPost: n,
							postId: s,
							sendEvent: o
						} = this.props;
						o(Object(F.h)(s)), n && n(e, t)
					}, this.onRemovePost = () => {
						const {
							post: e,
							sendEvent: t
						} = this.props;
						this.props.onRemovePostFromCollection(), t(Object(F.p)(e.id))
					}, this.onStartEventNow = () => {
						const {
							post: e,
							sendEvent: t
						} = this.props;
						this.props.onStartEventNow(), t(Object(F.i)(e.id))
					}, this.onPostTitleClick = e => {
						const {
							post: t
						} = this.props;
						e.preventDefault(), this.onPostSelection(e, t)
					}
				}
				render() {
					const {
						displayLayout: e,
						post: t
					} = this.props;
					return t ? e === j.a.TIMELINE ? o.a.createElement(z, U({}, this.props, {
						onPostSelection: this.onPostSelection,
						onRemovePost: this.onRemovePost,
						onStartEventNow: this.onStartEventNow,
						onPostTitleClick: this.onPostTitleClick
					})) : o.a.createElement(J, U({}, this.props, {
						onPostSelection: this.onPostSelection,
						onRemovePost: this.onRemovePost,
						onStartEventNow: this.onStartEventNow
					})) : o.a.createElement("div", {
						className: V.a.postContainer
					})
				}
			}
			var X = Object(O.t)({
					currentProfileName: O.h,
					isCommentsPage: O.w,
					isProfilePostListing: O.H,
					isProfilePage: O.G,
					pageLayer: e => e
				})(Object(r.b)(() => Object(a.c)({
					activeModalId: D.a,
					galleryThumbnail: w.e,
					isFutureEvent: w.i,
					language: W.P,
					layout: O.K,
					post: I.I,
					shouldShowCollectionPostEdits: w.s,
					subredditOrProfile: I.U
				}), (e, t) => {
					let {
						collectionId: s,
						postId: o,
						isSelectedPost: r,
						isOverlay: a
					} = t;
					return {
						onRemovePostFromCollection: () => e(Object(m.g)(s, o, r)),
						onStartEventNow: async () => {
							K || (K = await Promise.resolve().then(n.bind(null, "./src/reddit/actions/eventPosts/index.ts"))), e(K.startEventNowRequested(o))
						},
						toggleEditStartTimeModal: async () => {
							G && K || ([G, K] = await Promise.all([n.e("schedulePickerModal").then(n.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(n.bind(null, "./src/reddit/actions/eventPosts/index.ts"))])), e(T.i(Object(B.s)(o, a, B.j.COLLECTION_INFO_POST)))
						},
						addEventStartTime: t => {
							K && e(K.editEventTimeRequested(o, t))
						}
					}
				})(Object(b.b)(Q))),
				Z = n("./src/reddit/components/Collection/index.m.less"),
				$ = n.n(Z);
			const ee = e => o.a.createElement(p.a, {
					author: e.author,
					className: $.a.author,
					"data-click-id": "user",
					isAuthorDeleted: e.isDeleted,
					isUnstyled: !0
				}, "u/".concat(e.author)),
				te = 100,
				ne = e => {
					return e.isOverlay ? v.n + v.b : v.f + v.b
				},
				se = e => ({
					top: ne(e),
					maxHeight: "calc(100vh - ".concat(v.f + (e.isOverlay ? v.n : 0) + v.b + 5, "px)")
				}),
				oe = Object(O.t)({
					isProfilePage: O.G,
					pageLayer: e => e
				}),
				re = Object(r.b)(() => Object(a.c)({
					collection: w.n,
					displayLayout: w.a,
					followPost: (e, t) => {
						let {
							postId: n
						} = t;
						const s = Object(w.n)(e, {
								postId: n
							}),
							o = s && (s.primaryPostId || s.postIds[0]);
						return o && Object(I.I)(e, {
							postId: o
						}) || null
					},
					post: I.I,
					shouldShowThumbnail: (e, t) => {
						let {
							postId: n
						} = t;
						const s = Object(w.n)(e, {
							postId: n
						});
						return !(!s || !s.id) && Object(w.t)(e, {
							collectionId: s.id
						})
					}
				}), (e, t) => ({
					onOpenPost: t => e(Object(m.f)(t))
				}));
			class ae extends o.a.Component {
				constructor() {
					super(...arguments), this.selectedPostRef = null, this.onClickPost = (e, t) => {
						this.props.onOpenPost(t)
					}, this.updateSelectedPostRef = e => {
						this.selectedPostRef = e
					}
				}
				componentDidMount() {
					const e = document.getElementById(C.b);
					if (e) {
						const t = this.selectedPostRef;
						let n;
						n = t ? t.offsetTop - te : 0, l.a.write(() => {
							Object(c.c)(e, n)
						})
					}
				}
				render() {
					const {
						collection: e,
						displayLayout: t,
						followPost: n,
						isNightmodeOn: s,
						isOverlay: r,
						language: a,
						post: c,
						postId: l,
						shouldShowThumbnail: m,
						isProfilePage: p
					} = this.props;
					if (!c || !e) return null;
					const {
						author: b = "",
						description: v = "",
						postIds: O = [],
						id: w
					} = e;
					return Object(y.a)(c) && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(d.a)($.a.collectionTitleWrapper, {
							[$.a.isProfilePage]: p
						})
					}, o.a.createElement("div", {
						className: $.a.collectionMetaData
					}, o.a.createElement("span", {
						className: $.a.collectionBy
					}, o.a.createElement(g.a, {
						msgId: "collection.collectionBy"
					})), o.a.createElement(ee, {
						author: b,
						isDeleted: Object(E.h)(b)
					}), o.a.createElement(f.a, {
						isSmall: !0
					}), o.a.createElement("span", {
						className: $.a.postCount
					}, Object(i.c)(a, "postCreation.postsCount", O.length))), o.a.createElement("div", {
						className: $.a.collectionTitleOptions
					}, o.a.createElement("span", {
						className: $.a.collectionTitle
					}, o.a.createElement(h.b, {
						type: h.a.Collection
					}, e.title)), n && o.a.createElement(u.a, {
						post: n,
						isEventFollow: p
					}), o.a.createElement(x.a, {
						className: $.a.overflowMenu,
						collectionId: w,
						isSubmitPage: !1,
						permalink: e.permalink,
						shouldShowCreatePost: !0
					}))), o.a.createElement("div", {
						className: $.a.postListWrapper
					}, o.a.createElement("div", {
						id: C.b,
						style: se(this.props),
						className: $.a.collectionList
					}, v && v.trim() && o.a.createElement("div", {
						className: $.a.collectionDescription
					}, v), o.a.createElement("div", {
						className: Object(d.a)({
							[$.a.galleryContainer]: t === j.a.GALLERY
						})
					}, O.map(e => o.a.createElement(X, {
						collectionId: w,
						postId: e,
						key: e,
						isSelectedPost: l === e,
						updateSelectedPostRef: this.updateSelectedPostRef,
						isOverlay: r,
						isNightmodeOn: s,
						onClickPost: this.onClickPost,
						shouldShowThumbnail: m,
						displayLayout: t
					}))))))
				}
			}
			t.a = oe(re(Object(b.b)(ae)))
		},
		"./src/reddit/components/CommentCreation/Loader.m.less": function(e, t, n) {
			e.exports = {
				spacer: "_25blA2uobENRg70NGewwpP",
				isTopLevelComment: "_1chAIcRfDnelKBQkWMIXfl",
				byline: "_1KZHWcRRAqnSYcyX8FzWOK"
			}
		},
		"./src/reddit/components/CommentCreation/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/Placeholder.tsx"),
				d = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/CommentCreation/Loader.m.less"),
				m = n.n(l);
			const p = e => {
					let {
						isTopLevelComment: t,
						children: n
					} = e;
					return o.a.createElement("div", {
						children: n,
						className: Object(c.a)(m.a.spacer, {
							[m.a.isTopLevelComment]: t
						})
					})
				},
				u = () => o.a.createElement("div", {
					className: Object(c.a)(m.a.byline, Object(d.a)({
						isLoading: !0
					}))
				}),
				h = Object(r.a)({
					ErrorComponent: e => {
						let {
							isTopLevelComment: t
						} = e;
						return o.a.createElement(p, {
							isTopLevelComment: t
						}, o.a.createElement(u, null), o.a.createElement(i.a, {
							isLoading: !1,
							toolbarPosition: "bottom"
						}))
					},
					getComponent: () => Object(a.a)(() => Promise.all([n.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), n.e("vendors~PostCreation~RichTextEditor"), n.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), n.e("RichTextEditor")]).then(n.bind(null, "./src/reddit/components/CommentCreation/index.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							isTopLevelComment: t
						} = e;
						return o.a.createElement(p, {
							isTopLevelComment: t
						}, o.a.createElement(u, null), o.a.createElement(i.a, {
							isLoading: !0,
							toolbarPosition: "bottom"
						}))
					}
				});
			t.a = e => o.a.createElement(h, e)
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				LiveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				liveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				Copy: "_3xhJYY30L68x0pxk-8uTYD",
				copy: "_3xhJYY30L68x0pxk-8uTYD",
				LiveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				liveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				SignupLink: "_1k97Y32qzGNtuVGyt73TpR",
				signupLink: "_1k97Y32qzGNtuVGyt73TpR",
				LiveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				liveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				LoginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				loginLink: "_3fM1M9rFBqKwfG-KJLnxPY"
			}
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/isSimpleClick/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/lib/loginHref/index.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/authControls.ts"),
				p = n("./src/reddit/i18n/components.tsx"),
				u = n("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				h = n.n(u);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js"), g = i.a.div("Wrapper", h.a), x = i.a.span("Copy", h.a), v = i.a.wrapped(l.g, "SignupLink", h.a), C = i.a.wrapped(l.j, "LoginLink", h.a);
			t.a = Object(c.b)(e => {
				let {
					className: t,
					isLiveStreaming: n,
					location: s,
					openLoginModal: i,
					openRegisterModal: c,
					origin: l,
					sendEvent: u
				} = e;
				return o.a.createElement(g, {
					className: Object(r.a)(t, {
						[h.a.LiveStreamingWrapper]: n
					})
				}, o.a.createElement(x, {
					className: Object(r.a)({
						[h.a.LiveStreamingCopy]: n
					})
				}, b._("Log in or sign up to leave a comment", null, {
					hk: "1KD7Eh"
				})), o.a.createElement(C, {
					href: Object(d.a)(s, l, "/login"),
					onClick: e => {
						Object(a.a)(e) && (e.preventDefault(), e.stopPropagation(), i(), u(Object(m.a)("user_convert")))
					},
					"data-redditstyle": !0
				}, o.a.createElement(p.c, null, "log in")), o.a.createElement(v, {
					className: Object(r.a)({
						[h.a.LiveStreamingSignupLink]: n
					}),
					href: Object(d.a)(s, l, "/register"),
					onClick: e => {
						Object(a.a)(e) && (e.preventDefault(), e.stopPropagation(), c(), u(Object(m.c)("user_convert")))
					},
					"data-redditstyle": !0
				}, o.a.createElement(p.c, null, "sign up")))
			})
		},
		"./src/reddit/components/CommentModModeDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				StyledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				styledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				Show: "BmpGQCO3oZBeUMzSaC5yX",
				show: "BmpGQCO3oZBeUMzSaC5yX"
			}
		},
		"./src/reddit/components/CommentModModeDropdown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/comment/index.ts"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/controls/Dropdown/index.tsx"),
				m = n("./src/reddit/helpers/trackers/modTools.ts"),
				p = n("./src/reddit/selectors/tooltip.ts"),
				u = n("./src/app/strings/index.ts"),
				h = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				g = n("./src/reddit/icons/svgs/Show/index.tsx"),
				x = n("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				v = n.n(x);
			const C = h.a.wrapped(g.a, "Show", v.a);
			var O = e => o.a.createElement(b.d, null, !e.comment.isApproved && o.a.createElement(b.c, {
				displayText: e.comment.approvedBy ? Object(u.a)(e.language, "modTools.approved") : Object(u.a)(e.language, "modTools.approve"),
				onClick: e.onApproveComment
			}, o.a.createElement(b.a, null)), !e.comment.bannedBy && o.a.createElement(o.a.Fragment, null, o.a.createElement(b.c, {
				displayText: e.comment.isRemoved ? Object(u.a)(e.language, "modTools.removed") : Object(u.a)(e.language, "modTools.remove"),
				onClick: e.onRemoveComment
			}, o.a.createElement(b.f, null)), o.a.createElement(b.c, {
				displayText: e.comment.isSpam ? Object(u.a)(e.language, "modTools.removedAsSpam") : Object(u.a)(e.language, "modTools.removeAsSpam"),
				onClick: e.onSpamComment
			}, o.a.createElement(b.g, null)), o.a.createElement(b.c, {
				displayText: e.comment.isLocked ? Object(u.a)(e.language, "modTools.unlockComment") : Object(u.a)(e.language, "modTools.lockComment"),
				onClick: e.onLockComment
			}, o.a.createElement(b.e, null))), e.comment.collapsedBecauseCrowdControl && o.a.createElement(b.c, {
				displayText: Object(u.a)(e.language, "modTools.showComment"),
				onClick: e.onShowComment
			}, o.a.createElement(C, null)));
			const f = h.a.wrapped(l.a, "StyledDropdown", v.a),
				y = Object(a.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(p.b)(n)(e)
					}
				}),
				E = Object(r.b)(y, (e, t) => {
					let {
						comment: n
					} = t;
					return {
						onApproveComment: () => e(Object(i.H)(n.id)),
						onLockComment: () => e(Object(i.X)(n.id)),
						onRemoveComment: () => e(Object(i.cb)(n.id, !1)),
						onSpamComment: () => e(Object(i.cb)(n.id, !0)),
						onShowComment: () => e(Object(i.Y)(n.id))
					}
				}),
				j = Object(d.a)(f),
				w = E(Object(c.b)(e => {
					const {
						comment: t,
						isDropdownOpen: n,
						language: s,
						onApproveComment: r,
						onLockComment: a,
						onRemoveComment: i,
						onSpamComment: d,
						onShowComment: c,
						sendEvent: l,
						tooltipId: p
					} = e;
					return o.a.createElement(j, {
						isOpen: n,
						tooltipId: p
					}, o.a.createElement(O, {
						language: s,
						onApproveComment: () => {
							r(), l(Object(m.c)("approve", t.id))
						},
						onRemoveComment: () => {
							i(), l(Object(m.c)("remove", t.id))
						},
						onSpamComment: () => {
							d(), l(Object(m.c)("spam", t.id))
						},
						onLockComment: () => {
							a(), l(Object(m.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							c(), l(Object(m.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = w
		},
		"./src/reddit/components/CommentSort/CommentSort.m.less": function(e, t, n) {
			e.exports = {
				container: "_2ulKn_zs7Y3LWsOqoFLHPo",
				mHasOtherDiscussions: "_3iO3U_i4YUx-2qahK_BTu1",
				SortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				sortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				Row: "zW82EsY6Pakxpq4WWvsUG",
				row: "zW82EsY6Pakxpq4WWvsUG",
				HighlightPicker: "_1n6gZPmNQU56UBglU718cx",
				highlightPicker: "_1n6gZPmNQU56UBglU718cx",
				ContestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				contestMode: "_3dAMO_XZMVp2K1JSO53ohA",
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
		"./src/reddit/components/CommentSort/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.search.js"), n("./node_modules/core-js/modules/es6.array.sort.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/actions/comment/index.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/post.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/lib/makeApiRequest/index.ts"),
				g = n("./src/lib/omitHeaders/index.ts"),
				x = n("./src/reddit/constants/headers.ts"),
				v = n("./src/reddit/i18n/utils.ts"),
				C = n("./src/reddit/models/Toast/index.ts");
			const O = (e, t) => async (n, s, o) => {
				let {
					apiContext: r
				} = o;
				const a = await (async (e, t, n) => Object(b.b)(Object(g.a)(e, [x.a]), {
						endpoint: "".concat(e.apiUrl, "/api/set_suggested_sort/"),
						method: d.bb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: n
						}
					}))(r(), e, t),
					i = "error-block-".concat(t),
					c = "success-block-".concat(t);
				if (a.ok) {
					n(Object(u.H)({
						[e]: {
							suggestedSort: t
						}
					}));
					const s = t ? Object(v.c)("Suggested sort is on.") : Object(v.c)("Suggested sort is off.");
					n(h.e({
						id: c,
						kind: C.b.SuccessCommunityGreen,
						text: s
					}))
				} else n(h.e({
					id: i,
					kind: C.b.Error,
					text: Object(v.c)("Try again later"),
					buttonText: Object(v.c)("Retry"),
					buttonAction: O(e, t)
				}))
			};
			var f = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				y = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				E = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				j = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				w = n("./src/reddit/components/TrackingHelper/index.tsx"),
				I = n("./src/reddit/controls/Dropdown/index.tsx"),
				P = n("./src/reddit/controls/Dropdown/Row.tsx"),
				_ = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				k = n("./src/reddit/helpers/path/index.ts"),
				T = n("./src/reddit/selectors/telemetry.ts");
			n("./src/telemetry/models/Event.ts");
			const S = (e, t, n, s, o) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(T.listing)(r, void 0, {
						oldSort: n,
						sort: s,
						source: o
					}),
					userSubreddit: Object(T.userSubreddit)(r)
				}),
				L = (e, t) => n => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				N = e => ({
					subreddit: Object(T.subreddit)(e),
					userSubreddit: Object(T.userSubreddit)(e)
				}),
				M = e => t => Object.assign({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable"
				}, N);
			var R = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				A = n("./src/reddit/icons/svgs/Info/index.tsx"),
				F = n("./src/reddit/selectors/activeModalId.ts"),
				B = n("./src/reddit/selectors/comments.ts"),
				D = n("./src/reddit/selectors/moderatorPermissions.ts"),
				W = n("./src/reddit/selectors/posts.ts"),
				H = n("./src/reddit/selectors/tooltip.ts"),
				V = n("./src/reddit/selectors/user.ts"),
				U = n("./src/reddit/components/CommentSort/CommentSort.m.less"),
				G = n.n(U),
				K = n("./src/reddit/reducers/comments/visitHighlightingFilter/index.ts");
			const q = Object(j.a)(I.a),
				z = c.a.wrapped(R.b, "DropdownTriangle", G.a),
				Y = c.a.div("HighlightWrapper", G.a),
				J = c.a.div("Title", G.a),
				Q = e => e === K.a.First ? Object(v.c)("First Visit") : e === K.a.Last ? Object(v.c)("Last Visit") : "None";
			class X extends o.a.Component {
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
				componentWillUpdate(e) {
					e.selectedSort !== this.props.selectedSort && this.track()
				}
				render() {
					const {
						highlightIsOpen: e,
						id: t,
						onOpen: n,
						selectedSort: s
					} = this.props;
					return o.a.createElement(Y, null, o.a.createElement(J, {
						onClick: n
					}, Object(v.c)("highlight comments since")), o.a.createElement(P.b, {
						className: Object(i.a)(G.a.HighlightPicker, G.a.Row),
						displayText: Q(s),
						id: t,
						onClick: n
					}), o.a.createElement(z, {
						onClick: n
					}), o.a.createElement(q, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, o.a.createElement(P.b, {
						displayText: Q(K.a.First),
						isSelected: s === K.a.First,
						onClick: this.onDropdownClickFirst
					}), o.a.createElement(P.b, {
						displayText: Q(K.a.Last),
						isSelected: s === K.a.Last,
						onClick: this.onDropdownClickLast
					}), o.a.createElement(P.b, {
						displayText: Q(K.a.None),
						isSelected: s === K.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var Z = X;
			const $ = "CommentSort--SortPicker",
				ee = "CommentSort--HighlightPicker",
				te = "CommentSort--Tooltip",
				ne = Object(j.a)(I.a),
				se = c.a.button("ContestMode", G.a),
				oe = c.a.wrapped(R.b, "DropdownTriangle", G.a),
				re = c.a.wrapped(A.a, "Info", G.a),
				ae = c.a.wrapped(P.b, "Row", G.a),
				ie = c.a.button("SetSort", G.a),
				de = c.a.button("SortLink", G.a),
				ce = c.a.div("Title", G.a),
				le = c.a.wrapped(_.a, "ToggleSwitch", G.a),
				me = c.a.wrapped(E.a, "ViewFullLinkOrOverlayLink", G.a),
				pe = c.a.wrapped(y.c, "Tooltip", G.a),
				ue = Object(a.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: n
						} = t;
						return n && Object(B.m)(e, {
							commentId: n
						})
					},
					contestModeIsEnabled: W.A,
					contestModeModalIsOpen: Object(F.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(H.b)($),
					highlightIsOpen: Object(H.b)(ee),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: n
						} = t;
						const s = Object(D.i)(e, {
							postId: n
						});
						return !!s && s.posts
					},
					postPermalink: W.H,
					showCommentHighlighter: (e, t) => {
						let {
							postId: n
						} = t;
						const s = Object(V.p)(e),
							o = !!Object(D.i)(e, {
								postId: n
							}),
							r = Object(W.I)(e, {
								postId: n
							});
						return (o || s) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: B.q
				}),
				he = Object(r.b)(ue, (e, t) => {
					let {
						postId: n
					} = t;
					return {
						changeHighlightSort: t => e(Object(m.J)({
							sort: t
						})),
						onOpenDropdown: () => e(Object(l.h)({
							tooltipId: $
						})),
						onOpenHighlightDropdown: t => {
							e(Object(l.h)({
								tooltipId: ee
							})), t()
						},
						onSetSuggestedSort: t => e(O(n, t)),
						hideTooltip: () => e(Object(l.i)()),
						setContestMode: t => e(Object(u.L)(t, n)),
						showTooltip: () => e(Object(l.h)({
							tooltipId: te
						})),
						toggleContestModeModal: () => e(Object(p.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class be extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, n, s) => this.props.sendEvent(S(e, this.props.isOverlay, t, n, s)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(L("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(M(!this.props.contestModeIsEnabled)), this.props.setContestMode(!this.props.contestModeIsEnabled)
					}
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentPermalink: n,
						contestModeModalIsOpen: s,
						contestModeIsEnabled: r,
						dropdownIsOpen: a,
						elementRef: c,
						hideTooltip: l,
						highlightIsOpen: m,
						hasModeratorPostPermissions: p,
						isOverlay: u,
						location: h,
						postPermalink: b,
						selectedHighlightSort: g,
						showCommentHighlighter: x,
						sort: C,
						suggestedSort: O,
						showTooltip: y,
						toggleContestModeModal: E
					} = this.props, j = !h.search.includes(d.q.CONFIDENCE), w = C === d.q.CONFIDENCE && j, I = p && !w, _ = Object(v.c)(" (suggested)"), T = O && C === O && !w ? d.s[C] + _ : d.s[C], S = r ? Object(v.c)("End contest mode?") : Object(v.c)("Start contest?"), N = r ? Object(v.c)("End") : Object(v.c)("Start"), M = r ? Object(v.c)("Ending contest mode will make comment vote scores visible and disable random comment ordering.") : Object(v.c)("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods."), R = r && !p;
					return o.a.createElement("div", {
						className: Object(i.a)(t, G.a.container, {
							[G.a.hideCommentSort]: !x && R
						}),
						ref: c
					}, !R && o.a.createElement(ce, {
						onClick: this.onOpenDropdownClick
					}, Object(v.c)("Sort by")), !R && o.a.createElement(o.a.Fragment, null, o.a.createElement(ae, {
						className: Object(i.a)(G.a.SortPicker, G.a.Row),
						onClick: this.onOpenDropdownClick,
						displayText: T,
						id: $,
						noHover: !0,
						skipRoleAttr: !0
					}), o.a.createElement(oe, {
						onClick: this.onOpenDropdownClick
					}), o.a.createElement(ne, {
						isOpen: a,
						tooltipId: $
					}, [d.q.CONFIDENCE, d.q.TOP, d.q.NEW, d.q.CONTROVERSIAL, d.q.OLD, d.q.QA].map(e => {
						const t = n || b,
							s = Object(k.b)(t);
						return o.a.createElement(me, {
							isOverlay: u,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: "".concat(s, "?sort=").concat(e)
						}, o.a.createElement(P.b, {
							displayText: O && e === O ? d.s[e] + _ : d.s[e],
							isSelected: C === e,
							skipRoleAttr: !0
						}))
					}))), I && !R && (O ? o.a.createElement(de, {
						onClick: C !== O ? this.setSortOnClick : this.clearSortOnClick
					}, C !== O ? Object(v.c)("Set new suggested sort") : Object(v.c)("Clear suggested sort")) : o.a.createElement(ie, null, o.a.createElement(de, {
						onClick: this.setSortOnClick
					}, Object(v.c)("Set as suggested sort")), o.a.createElement("span", {
						id: te,
						onMouseEnter: y,
						onMouseLeave: l
					}, o.a.createElement(pe, {
						text: Object(v.c)("Suggested sort defaults Redditors to a specific way of sorting comments within this post"),
						tooltipId: te
					}), o.a.createElement(re, null)))), p && o.a.createElement(se, {
						onClick: this.props.toggleContestModeModal
					}, Object(v.c)("Contest"), o.a.createElement(le, {
						on: r
					})), x && o.a.createElement(Z, {
						changeHighlightSort: e,
						highlightIsOpen: m,
						id: ee,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: g,
						trackHighlight: L
					}), s && o.a.createElement(f.a, {
						actionText: N,
						headerText: S,
						modalText: M,
						onConfirm: this.setContestMode,
						toggleModal: E,
						withOverlay: !0
					}))
				}
			}
			t.a = he(Object(w.b)(be))
		},
		"./src/reddit/components/Comments/Comment/ExpandButton/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_3XgXkbSTt-EadyaLszfRVf",
				component: "_3XgXkbSTt-EadyaLszfRVf"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less": function(e, t, n) {
			e.exports = {
				depth10: "_2sxg06qfN6lCskrSU7pyoj",
				HideIfVWSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				hideIfVwSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				depth0: "_2t8wLytikHzPCUnvXdS_wu",
				isInOverlay: "FOPddbU-vkQ5LYmQP6Fgc",
				isModModeEnabled: "_2hXOR2fIcfnUg0p-Env7KQ",
				LoggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				loggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				HideIfVWLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				hideIfVwLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				depth3: "_2Ik7QEXtA-lbZKj0ssL89G",
				depth6: "SwOx7KbRrXYrqQCWMYPf0",
				depth9: "_2EcU45Nj3OvIEdu169RlLK",
				ModeratorGroup: "_1CUkbmFVuU6wklfYeYwPFk",
				moderatorGroup: "_1CUkbmFVuU6wklfYeYwPFk"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/index.m.less": function(e, t, n) {
			e.exports = {
				ModActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				modActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				ViewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				viewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				supportButton: "_2YUu8EV4OahSxJwgb9xLbr",
				Report: "tfULaYlP83dV84XOxX3YE",
				report: "tfULaYlP83dV84XOxX3YE",
				IgnoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				ignoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				OverflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				overflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				DropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				dropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				iconWrapper: "jap7xdwXZKV3I9Oj8GdgQ",
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
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, n) {
			e.exports = {
				CommentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				commentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				badgeIconStyle: "_2MlVoXUc3Eo3KGWDukM9xn",
				modBadgeIconStyle: "_1kqPGnOAdnd9gPUXDU2_AS",
				DonationAmount: "_3sY3k4LLYR5dbXRxnGkhwG",
				donationAmount: "_3sY3k4LLYR5dbXRxnGkhwG",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				EditedText: "uMVXpG5M2xxHNW2g94S8K",
				editedText: "uMVXpG5M2xxHNW2g94S8K",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				AuthorHoverCard: "_16AAktgl_rVbXAeiWU9CQd",
				authorHoverCard: "_16AAktgl_rVbXAeiWU9CQd",
				Component: "_36uQqfCEixcb8d3_aWB5H6",
				component: "_36uQqfCEixcb8d3_aWB5H6",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				Approve: "_34mJxMS9sOCTo8dtFMQOLR",
				approve: "_34mJxMS9sOCTo8dtFMQOLR",
				Lock: "_3ATarJMtY0XRI9Lgu7e7DC",
				lock: "_3ATarJMtY0XRI9Lgu7e7DC",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				Automoderator: "EytgzUMjj1jcbKtFsodey",
				automoderator: "EytgzUMjj1jcbKtFsodey",
				removed: "_2jIbl66ymb_twdJlZslQ-e",
				CakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				cakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				Moderator: "_174Mk1p6pYIrr6f1y6b4fn",
				moderator: "_174Mk1p6pYIrr6f1y6b4fn",
				Remove: "_1DQWCB93pHPVVJCXOGsblO",
				remove: "_1DQWCB93pHPVVJCXOGsblO",
				Report: "_2wYWDvjfG1JR6VNK9ryPFk",
				report: "_2wYWDvjfG1JR6VNK9ryPFk",
				Spam: "_3kK86gdpll9ihjOPWJE6f2",
				spam: "_3kK86gdpll9ihjOPWJE6f2",
				Op: "_2pZswNTz_uW46hN02djL7j",
				op: "_2pZswNTz_uW46hN02djL7j",
				Contractor: "_1hbZy7yehvtj0w4ec-2u3Y",
				contractor: "_1hbZy7yehvtj0w4ec-2u3Y",
				redditorIcon: "_2SkK42s487b14gsRa4zinm",
				MetaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				metaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				StickiedText: "_1eNQE7Kj1TEqCLAn1BUKJy",
				stickiedText: "_1eNQE7Kj1TEqCLAn1BUKJy",
				DeletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				deletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				RemovalReason: "Gtgj2P-Js5aSN72H6Mqms",
				removalReason: "Gtgj2P-Js5aSN72H6Mqms",
				container: "_3ezOJqKdLbgkHsXcfvS5SA",
				collapsed: "_2k27lgIDltx9kOzVGXt48i",
				hasBadges: "_1KMFaeLEhRikeFEOlWE9Ti",
				liveStreaming: "_1iUed95f0HTc84gBtoOxdc",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa",
				CrowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N",
				crowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/app/strings/index.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/humanizeDateTime/index.ts"),
				p = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/timeAgo/index.ts"),
				h = n("./src/reddit/components/AuthorLink/index.tsx"),
				b = n("./src/reddit/components/AwardBadges/index.tsx"),
				g = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				x = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				v = n("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				C = n("./src/reddit/featureFlags/index.ts"),
				O = n("./src/reddit/selectors/economics.ts"),
				f = n("./src/reddit/components/Economics/TopTippers/Icon/index.tsx"),
				y = n("./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less"),
				E = n.n(y);
			const j = e => {
				switch (e) {
					case 1:
						return {
							color: "#FF2500", fontWeight: 700
						};
					case 2:
						return {
							color: "#FF7300", fontWeight: 700
						};
					case 3:
						return {
							color: "#FFA200", fontWeight: 700
						};
					default:
						return {}
				}
			};
			var w = Object(r.b)(() => Object(a.c)({
					post: (e, t) => {
						let {
							contentId: n
						} = t;
						return e.posts.models[n]
					},
					tippers: (e, t) => {
						if (C.d.spTopTippers(e)) return Object(O.s)(e, t)
					}
				}))((function(e) {
					if (e.tippers && e.tippers.allTippers.has(e.userId)) {
						const t = e.tippers.topTippers.ranking[e.userId] || 5,
							n = o.a.cloneElement(o.a.Children.only(e.children), {
								style: j(t)
							});
						return o.a.createElement("div", {
							className: E.a.container
						}, o.a.createElement(f.a, {
							className: E.a.badge,
							creatorId: e.creatorId || e.post && e.post.authorId,
							rank: t,
							subredditId: e.subredditId
						}), n)
					}
					return e.children
				})),
				I = n("./src/reddit/components/Flair/index.tsx"),
				P = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				_ = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				k = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				T = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				S = n("./src/reddit/components/PostTopMeta/index.tsx"),
				L = n("./src/reddit/helpers/isRemoved.ts"),
				N = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				M = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				R = n("./src/reddit/i18n/utils.ts"),
				A = n("./src/reddit/actions/comment/index.ts"),
				F = n("./src/reddit/models/Comment/index.ts"),
				B = n("./src/reddit/models/Flair/index.ts"),
				D = n("./src/reddit/icons/fonts/Admin/index.tsx"),
				W = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				H = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				V = n("./src/reddit/icons/fonts/helpers.tsx"),
				U = n("./src/reddit/icons/fonts/Op/index.m.less"),
				G = n.n(U);
			var K = p.a.wrapped(e => o.a.createElement("i", {
					className: "".concat(Object(V.b)("op"), " ").concat(e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, o.a.createElement(V.a, null, e.desc)), "OpIcon", G.a),
				q = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				z = n("./src/reddit/icons/fonts/Report/index.tsx"),
				Y = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				J = n("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				Q = n("./src/reddit/icons/svgs/Cake/index.tsx"),
				X = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Z = n("./src/reddit/controls/MetaData/index.tsx"),
				$ = n("./src/reddit/selectors/experiments/publicAwarding.ts"),
				ee = n("./src/reddit/selectors/subreddit.ts"),
				te = n("./src/reddit/selectors/userFlair.ts"),
				ne = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				se = n.n(ne);

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var re = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const ae = p.a.wrapped(I.b, "RightPositionedAuthorFlair", se.a),
				ie = p.a.wrapped(D.a, "AdminIcon", se.a),
				de = p.a.wrapped(W.a, "Approve", se.a),
				ce = p.a.wrapped(H.a, "Lock", se.a),
				le = p.a.div("AdminEmeritus", se.a),
				me = p.a.wrapped(J.a, "Automoderator", se.a),
				pe = p.a.wrapped(Q.a, "CakeIcon", se.a),
				ue = p.a.wrapped(X.a, "Moderator", se.a),
				he = p.a.wrapped(q.a, "Remove", se.a),
				be = p.a.wrapped(z.a, "Report", se.a),
				ge = p.a.wrapped(Y.a, "Spam", se.a),
				xe = p.a.wrapped(K, "Op", se.a),
				ve = p.a.wrapped(D.a, "Contractor", se.a),
				Ce = p.a.a("MetaLink", se.a),
				Oe = p.a.wrapped(Z.a, "EditedText", se.a),
				fe = p.a.wrapped(Z.a, "StickiedText", se.a),
				ye = p.a.span("DeletedText", se.a),
				Ee = p.a.wrapped(Z.a, "MetaSeparator", se.a),
				je = p.a.wrapped(Z.a, "CrowdControlText", se.a),
				we = p.a.wrapped(_.b, "AuthorHoverCard", se.a),
				Ie = p.a.a("RemovalReason", se.a),
				Pe = p.a.wrapped(g.b, "Component", se.a),
				_e = Object(i.d)("comment.children"),
				ke = Object(i.d)("comment.moreThanChildren"),
				Te = e => (t, n) => {
					let {
						comment: s,
						renderedInOverlay: o
					} = n;
					return "".concat(e).concat(s.id).concat(o ? "inOverlay" : "")
				},
				Se = Object(i.e)("comment.tooltips.admin"),
				Le = Object(i.e)("comment.tooltips.cakeday"),
				Ne = Object(i.e)("comment.tooltips.adminEmeritus"),
				Me = Object(i.e)("comment.tooltips.moderator"),
				Re = Object(i.e)("comment.tooltips.op"),
				Ae = Object(i.e)("comment.tooltips.contractor"),
				Fe = Object(r.b)(() => Object(a.c)({
					adminTooltipId: Te("CommentTopMeta--Admin--"),
					cakedayTooltipId: Te("CommentTopMeta--cakeday--"),
					adminEmeritusTooltipId: Te("CommentTopMeta--AdEm--"),
					automodTooltipId: Te("CommentTopMeta--Automod--"),
					approveTooltipId: Te("CommentTopMeta--Approve--"),
					createdTooltipId: Te("CommentTopMeta--Created--"),
					contractorTooltipId: Te("CommentTopMeta--Contractor--"),
					gildedTooltipId: Te("CommentTopMeta--Gold--"),
					lockedTooltipId: Te("CommentTopMeta--Locked--"),
					modTooltipId: Te("CommentTopMeta--Mod--"),
					opTooltipId: Te("CommentTopMeta--OP--"),
					publicAwardersEnabled: e => !!Object($.a)(e),
					removeTooltipId: Te("CommentTopMeta--Remove--"),
					reportTooltipId: Te("CommentTopMeta--Report--"),
					spamTooltipId: Te("CommentTopMeta--Spam--"),
					hasBadges: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(O.q)(e, n.subredditId, n.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const n = Object(ee.G)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					topTippersEnabled: C.d.spTopTippers,
					flairPosition: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(te.d)(e, {
							subredditId: n.subredditId
						})
					}
				}), (e, t) => ({
					onCreatedClick: () => {
						window.addEventListener("focus", (function n() {
							((e, t, n) => {
								window.removeEventListener("focus", n), e(Object(A.N)({
									commentListNodeId: t
								})), window.setTimeout(() => e(Object(A.N)({
									commentListNodeId: t
								})), 5e3)
							})(e, t.comment.id, n)
						}))
					},
					onHideTooltip: () => e(Object(d.i)()),
					onShowTooltip: t => e(Object(d.f)({
						tooltipId: t
					})),
					openRemovalReasonModal: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(n => e(n.fetchReasonsAndOpenModal(t.comment.subredditId, [t.comment.id])))
					}
				}));
			t.a = Fe(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: n,
					approveTooltipId: s,
					automodTooltipId: r,
					cakedayTooltipId: a,
					children: i,
					className: d,
					collapsed: m,
					collapsedBecauseCrowdControl: p,
					comment: u,
					commentsPageKey: h,
					contractorTooltipId: g,
					compact: C,
					flair: O,
					flairPosition: f,
					hasBadges: y,
					isLivestreaming: E,
					ignoreFlairPosition: j,
					ignoreLock: w,
					language: _,
					lockedTooltipId: k,
					modTooltipId: L,
					onHideTooltip: N,
					onShowTooltip: M,
					opTooltipId: R,
					openRemovalReasonModal: A,
					publicAwardersEnabled: D,
					removeTooltipId: W,
					renderContractorBadge: H,
					renderedInOverlay: V,
					reportTooltipId: U,
					spamTooltipId: G,
					subredditDisplayText: K,
					topTippersEnabled: q
				} = e;
				if (u.isDeleted) return o.a.createElement(Be, oe({}, e, {
					className: Object(c.a)(d, se.a.container, {
						[se.a.collapsed]: m
					})
				}));
				if (m) return o.a.createElement(De, oe({}, e, {
					className: Object(c.a)(d, se.a.container, {
						[se.a.collapsed]: m
					})
				}));
				const z = !j && f === B.b.Left;
				return o.a.createElement("div", {
					className: Object(c.a)(d, se.a.container, {
						[se.a.collapsed]: m,
						[se.a.hasBadges]: y,
						[se.a.liveStreaming]: E
					})
				}, O && z && o.a.createElement(I.b, {
					flair: O,
					forceSmallEmojis: C
				}), !Object(F.d)(u) && o.a.createElement(Pe, {
					showAddCustom: !0,
					subredditId: u.subredditId,
					userId: u.authorId,
					uniqueIdentifier: u.id
				}), o.a.createElement(we, {
					postOrComment: u,
					tooltipType: V ? S.c.Lightbox : void 0
				}, o.a.createElement(x.b, {
					ignore: Object(F.d)(u) || !!u.distinguishType && u.distinguishType !== l.B.NONE,
					subredditId: u.subredditId,
					userId: u.authorId
				}, o.a.createElement(He, {
					comment: u,
					isLivestreaming: E,
					isStrong: !!C,
					isAuthorDeleted: Object(F.d)(u),
					topTippersEnabled: q
				}, i && i))), p && o.a.createElement(je, null, "Crowd Control"), p && o.a.createElement(Z.c, {
					className: se.a.metaText,
					key: "crowdControlSeparator"
				}), O && !z && o.a.createElement(ae, {
					flair: O,
					forceSmallEmojis: C
				}), !C && o.a.createElement(P.a, {
					className: se.a.publicPoints,
					contentId: u.id,
					subredditId: u.subredditId,
					userId: u.authorId,
					username: u.author
				}), o.a.createElement(o.a.Fragment, null, o.a.createElement(T.b, {
					commentId: u.id
				}), o.a.createElement(T.a, {
					commentId: u.id,
					commentsPageKey: h
				}), o.a.createElement(Ge, {
					comment: u,
					compact: C,
					adminTooltipId: n,
					adminEmeritusTooltipId: t,
					cakedayTooltipId: a,
					contractorTooltipId: g,
					language: _,
					modTooltipId: L,
					onHideTooltip: N,
					onShowTooltip: M,
					opTooltipId: R,
					renderContractorBadge: H,
					subredditDisplayText: K
				})), !C && o.a.createElement(o.a.Fragment, null, !u.isDeleted && o.a.createElement(Z.b, {
					className: se.a.metaText,
					isScoreHidden: u.isScoreHidden,
					language: _,
					score: u.score
				}), o.a.createElement(Z.c, {
					className: se.a.metaText,
					key: "scoreCreatedSeparator"
				}), o.a.createElement(Ve, oe({
					key: "Created"
				}, e)), u.isStickied && qe(_), u.editedAt && We(_, u.editedAt)), o.a.createElement(o.a.Fragment, null, o.a.createElement(Ke, {
					comment: u,
					approveTooltipId: s,
					automodTooltipId: r,
					ignoreLock: w,
					language: _,
					lockedTooltipId: k,
					onHideTooltip: N,
					onShowTooltip: M,
					openRemovalReasonModal: A,
					removeTooltipId: W,
					reportTooltipId: U,
					spamTooltipId: G
				}), o.a.createElement(v.a, {
					className: se.a.DonationAmount,
					contentId: u.id,
					subredditId: u.subredditId
				})), o.a.createElement(b.a, {
					showAwarders: D,
					tooltipType: V ? S.c.Lightbox : void 0,
					thing: u
				}))
			});
			const Be = e => {
					const {
						language: t,
						childrenInfo: n,
						collapsed: s,
						className: r,
						comment: a
					} = e;
					return o.a.createElement("div", {
						className: r
					}, o.a.createElement(ye, null, a.deletedBy === F.a.User ? Object(i.a)(t, "comment.commentDeletedByAuthor") : Object(i.a)(t, "comment.commentDeletedByMod")), o.a.createElement(Ve, oe({
						key: "Created"
					}, e)), s && Ue({
						childrenInfo: n,
						language: t
					}))
				},
				De = e => {
					const {
						comment: t,
						language: n,
						className: s,
						childrenInfo: r
					} = e;
					return o.a.createElement("div", {
						className: s
					}, o.a.createElement("div", null, o.a.createElement(He, {
						comment: t,
						isAuthorDeleted: Object(F.d)(t),
						topTippersEnabled: !1
					})), o.a.createElement(Z.b, {
						className: se.a.metaText,
						isScoreHidden: t.isScoreHidden,
						language: n,
						score: t.score
					}), o.a.createElement(Z.c, {
						className: se.a.metaText,
						key: "scoreCreatedSeparator"
					}), o.a.createElement(Ve, oe({
						key: "Created"
					}, e)), Ue({
						childrenInfo: r,
						language: n
					}))
				},
				We = (e, t) => o.a.createElement(s.Fragment, null, o.a.createElement(Z.c, {
					className: se.a.metaText
				}), o.a.createElement(Oe, null, Object(i.a)(e, "comment.edited", {
					time: Object(u.d)(e, t)
				}))),
				He = e => {
					const t = o.a.createElement(h.a, {
						className: se.a.CommentAuthorLink,
						author: e.comment.author,
						isAdmin: e.comment.isAdmin,
						isAdminEmeritus: e.comment.distinguishType === l.B.ALUMNI_ADMIN,
						isAuthorDeleted: e.isAuthorDeleted,
						isLivestreaming: e.isLivestreaming,
						isMod: e.comment.isMod,
						isOp: e.comment.isOp,
						isStrong: e.isStrong,
						style: e.style
					}, e.children && e.children, e.comment.author);
					return e.topTippersEnabled ? o.a.createElement(w, {
						contentId: e.comment.postId,
						subredditId: e.comment.subredditId,
						userId: e.comment.authorId
					}, t) : t
				};
			class Ve extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t,
							language: n,
							onCreatedClick: s
						} = e,
						r = re(e, ["comment", "language", "onCreatedClick"]);
					return o.a.createElement(Ce, {
						href: t.permalink,
						id: r.createdTooltipId,
						onClick: s,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: r.onHideTooltip,
						rel: "nofollow",
						target: "_blank"
					}, o.a.createElement("span", null, Object(u.d)(n, t.created)), ze(r.createdTooltipId, Object(m.a)(t.created)))
				}
			}
			const Ue = e => {
				const {
					hasContinueThread: t,
					numChildren: n
				} = e.childrenInfo || {
					hasContinueThread: !1,
					numChildren: 0
				};
				return o.a.createElement(Ee, {
					className: se.a.metaText
				}, "(", t ? ke(e.language, n, {
					numChildren: n
				}) : _e(e.language, n, {
					numChildren: n
				}), ")")
			};
			class Ge extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						n = re(e, ["comment"]);
					return o.a.createElement(s.Fragment, null, t.isAuthorCakeday && o.a.createElement(pe, {
						"aria-label": Le(n.language),
						id: n.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: n.onHideTooltip
					}), t.isAuthorCakeday && ze(n.cakedayTooltipId, Le(n.language)), t.isAdmin && o.a.createElement(ie, {
						desc: Se(n.language),
						id: n.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: n.onHideTooltip
					}), t.isAdmin && ze(n.adminTooltipId, Se(n.language)), t.distinguishType === l.B.ALUMNI_ADMIN && o.a.createElement(le, {
						"aria-label": Ne(n.language),
						children: "Δ",
						id: n.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: n.onHideTooltip
					}), t.distinguishType === l.B.ALUMNI_ADMIN && ze(n.adminEmeritusTooltipId, Ne(n.language)), t.isMod && o.a.createElement(ue, {
						desc: Me(n.language, {
							displayText: n.subredditDisplayText
						}),
						id: n.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: n.onHideTooltip
					}), t.isMod && ze(n.modTooltipId, Me(n.language, {
						displayText: n.subredditDisplayText
					})), t.isOp && o.a.createElement(xe, {
						desc: Re(n.language),
						id: n.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: n.onHideTooltip
					}), t.isOp && ze(n.opTooltipId, Re(n.language)), n.renderContractorBadge && o.a.createElement(ve, {
						desc: Ae(n.language),
						id: n.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: n.onHideTooltip
					}), n.renderContractorBadge && ze(n.contractorTooltipId, Ae(n.language)))
				}
			}
			class Ke extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						n = re(e, ["comment"]);
					return o.a.createElement(s.Fragment, null, (t.approvedBy || t.isApproved) && o.a.createElement(de, {
						desc: Object(N.a)(n.language, t),
						id: n.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: n.onHideTooltip
					}), (t.approvedBy || t.isApproved) && ze(n.approveTooltipId, Object(N.a)(n.language, t)), Object(L.a)(t) && o.a.createElement(he, {
						desc: Object(N.c)(n.language, t),
						id: n.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: n.onHideTooltip
					}), Object(L.a)(t) && ze(n.removeTooltipId, Object(N.c)(n.language, t)), Object(L.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && o.a.createElement(Ie, {
						onClick: n.openRemovalReasonModal
					}, Object(i.a)(n.language, "modTools.addARemovalReason")), Object(L.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && o.a.createElement(Ie, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: n.onHideTooltip
					}, Object(i.a)(n.language, "modTools.removalReason")), t.isLocked && !n.ignoreLock && o.a.createElement(ce, {
						desc: Object(R.c)("Locked"),
						id: n.lockedTooltipId,
						onMouseEnter: () => {
							n.onShowTooltip(n.lockedTooltipId)
						},
						onMouseLeave: n.onHideTooltip
					}), t.bannedBy && t.isSpam && o.a.createElement(ge, {
						desc: Object(N.e)(n.language, t),
						id: n.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: n.onHideTooltip
					}), t.bannedBy && t.isSpam && ze(n.spamTooltipId, Object(N.e)(n.language, t)), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && o.a.createElement(me, {
						className: Object(c.a)({
							[se.a.removed]: !!t.bannedBy
						}),
						desc: Object(N.b)(n.language),
						id: n.automodTooltipId,
						key: n.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: n.onHideTooltip
					}), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && ze(n.automodTooltipId, Object(N.b)(n.language)), Object(M.a)(t) && o.a.createElement(be, {
						desc: Object(N.d)(n.language, t.numReports),
						id: n.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: n.onHideTooltip
					}), Object(M.a)(t) && ze(n.reportTooltipId, Object(N.d)(n.language, t.numReports)))
				}
			}
			const qe = e => o.a.createElement(s.Fragment, null, o.a.createElement(Z.c, {
					className: se.a.metaText
				}), o.a.createElement(fe, null, Object(i.a)(e, "comment.stickied"))),
				ze = (e, t) => o.a.createElement(k.c, {
					tooltipId: e,
					text: t
				})
		},
		"./src/reddit/components/Comments/Comment/index.m.less": function(e, t, n) {
			e.exports = {
				ExpandButton: "_1nGapmdexvR0BuOkfAi6wa",
				expandButton: "_1nGapmdexvR0BuOkfAi6wa",
				ErrorText: "_3XArRVBsKuWegVHX9CQjH-",
				errorText: "_3XArRVBsKuWegVHX9CQjH-",
				CommentBody: "_3cjCphgls6DH-irkVaA0GM",
				commentBody: "_3cjCphgls6DH-irkVaA0GM",
				EditCommentForm: "JchsqHyN3thfSnN8dUM3",
				editCommentForm: "JchsqHyN3thfSnN8dUM3",
				VerticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				verticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				voteButton: "_2m5vzALl8kQdr9kwIFUo5t",
				upDownVote: "_22nWXKAY6OzAfK5GcUqWV2",
				CommentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				commentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				isPendingDeletion: "_2R8NbVFaqNnBbuA7o2osje",
				isRemoved: "_2zA6eSGIr_oQU7np0uNqoB",
				isLocked: "t8jgOblBrQTKWHnVy0zGD",
				isActive: "_1vvFtxiq5874iIdCUYlL-d",
				isCollapsed: "BjX6VVsz_8JJDN1Ap9_IL",
				highlightComment: "_2ym9uYDdCxu8P4UFCLNCgE",
				CommentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				commentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				focused: "_1Sy9NCNbLA9uJZj-qgUrMG",
				topLevel: "_1z5rdmX8TDr6mqwNv7A70U",
				TopMeta: "_1S45SPAIb30fsXtEcKPSdt",
				topMeta: "_1S45SPAIb30fsXtEcKPSdt",
				collapsed: "_3c9Go6433BnvYx8_7MkPnt",
				CommentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentCreation: "_2jhbZV6mVCM5Ma7Z376DW2"
			}
		},
		"./src/reddit/components/Comments/CommentListNode/index.m.less": function(e, t, n) {
			e.exports = {
				CommentListNodeWrapper: "_3sf33-9rVAO_v4y0pIW_CH",
				commentListNodeWrapper: "_3sf33-9rVAO_v4y0pIW_CH",
				isHidden: "_2csJ1c6CZ_3VQ75SVdUAwt",
				isAwarded: "_3x1wnLNRJ5UQU9fODNc2V4",
				isNightmodeOn: "_1XNv4WhzL_uEQ36cwbjMOe"
			}
		},
		"./src/reddit/components/Comments/ContinueThreadLink/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Comments/MoreCommentsItem/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Comments/States/index.m.less": function(e, t, n) {
			e.exports = {
				CommentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				commentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				CommentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				commentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
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
				LoadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				loadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				Upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				Downvote: "_32W1DnzyRkYXP82ZO96H0V",
				downvote: "_32W1DnzyRkYXP82ZO96H0V",
				TopMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				topMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				CommentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb",
				commentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb"
			}
		},
		"./src/reddit/components/Comments/States/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return k
			})), n.d(t, "b", (function() {
				return T
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "f", (function() {
				return M
			})), n.d(t, "a", (function() {
				return U
			}));
			var s = n("./node_modules/lodash/times.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/app/strings/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/page.ts"),
				p = n("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/describeApiError/index.ts"),
				b = n("./src/reddit/helpers/path/index.ts"),
				g = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				x = n("./src/reddit/i18n/components.tsx"),
				v = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				C = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				O = n("./src/reddit/icons/svgs/Comments/index.tsx"),
				f = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				y = n("./src/reddit/components/Comments/States/index.m.less"),
				E = n.n(y);
			const j = l.a.wrapped(O.a, "CommentsIcon", E.a),
				w = l.a.wrapped(f.a, "SnooFacepalm", E.a),
				I = l.a.p("EmptyTitle", E.a),
				P = l.a.p("ErrorTitle", E.a),
				_ = l.a.p("EmptyText", E.a),
				k = e => {
					let {
						className: t,
						isChat: n
					} = e;
					return a.a.createElement("div", {
						className: Object(c.a)(E.a.StateContainer, t)
					}, a.a.createElement(j, null), a.a.createElement(I, null, a.a.createElement(x.c, null, "no ", n ? "messages" : "comments", " yet")), a.a.createElement(_, null, a.a.createElement(x.c, null, "Be the first to share what you think!")))
				},
				T = () => a.a.createElement("div", {
					className: E.a.StateContainer
				}, a.a.createElement(j, null), a.a.createElement(I, null, a.a.createElement(x.c, null, "no other discussions yet")), a.a.createElement(_, null, a.a.createElement(x.c, null, "Be the first to post the same link or crosspost in another community!"))),
				S = e => {
					let {
						link: t
					} = e;
					return a.a.createElement("div", {
						className: E.a.StateContainer
					}, a.a.createElement(j, null), a.a.createElement(I, null, a.a.createElement(x.c, null, "That comment is missing")), a.a.createElement(u.h, {
						to: Object(b.b)(t)
					}, a.a.createElement(x.c, null, "View all comments")))
				},
				L = Object(i.b)(null, (e, t) => {
					let {
						postId: n,
						commentId: s,
						sort: o
					} = t;
					return {
						onClick: () => e(Object(m.q)(n, s, {
							sort: o
						}, o))
					}
				})(e => {
					let {
						apiError: t,
						language: n,
						onClick: s
					} = e;
					return a.a.createElement("div", {
						className: E.a.StateContainer
					}, a.a.createElement(w, null), a.a.createElement(P, null, t ? Object(h.a)({
						apiError: t,
						language: n,
						isLoggedOut: !1
					}) : Object(d.a)(n, "comment.error")), a.a.createElement(u.f, {
						onClick: s
					}, a.a.createElement(x.c, null, "retry")))
				}),
				N = () => a.a.createElement("div", null, "500"),
				M = l.a.wrapped(e => {
					let {
						className: t
					} = e;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement(p.a, null))
				}, "LoadingFullPage", E.a),
				R = l.a.div("CommentsPlaceholderContainer", E.a),
				A = l.a.div("CommentPlaceholder", E.a),
				F = l.a.div("VoteColumn", E.a),
				B = l.a.div("TextColumn", E.a),
				D = l.a.wrapped(C.a, "Upvote", E.a),
				W = l.a.wrapped(v.a, "Downvote", E.a),
				H = () => a.a.createElement("div", {
					className: Object(c.a)(E.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				V = () => a.a.createElement("div", {
					className: Object(c.a)(E.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				U = () => a.a.createElement(R, null, o()(10, e => a.a.createElement(A, {
					key: e
				}, a.a.createElement(F, null, a.a.createElement(D, null), a.a.createElement(W, null)), a.a.createElement(B, null, a.a.createElement(H, null), a.a.createElement(V, null)))))
		},
		"./src/reddit/components/Comments/ThreadLines/index.m.less": function(e, t, n) {
			e.exports = {
				Line: "_36AIN2ppxy_z-XSDxTvYj5",
				line: "_36AIN2ppxy_z-XSDxTvYj5",
				LineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				lineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				ShortLineContainer: "_3Wv3am0TXfTcugZJ6niui",
				shortLineContainer: "_3Wv3am0TXfTcugZJ6niui"
			}
		},
		"./src/reddit/components/Comments/index.m.less": function(e, t, n) {
			e.exports = {
				Scroller: "_1YCqQVO-9r-Up6QPB9H6_4",
				scroller: "_1YCqQVO-9r-Up6QPB9H6_4"
			}
		},
		"./src/reddit/components/Comments/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/isEqual.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				p = n("./src/reddit/selectors/experiments/goldAwardedCommentHighlight.ts"),
				u = n("./src/reddit/actions/comment/index.ts"),
				h = n("./src/reddit/constants/comments.ts"),
				b = n("./src/reddit/constants/componentSizes.ts"),
				g = n("./src/reddit/constants/elementClassNames.ts"),
				x = n("./src/reddit/constants/gold.ts"),
				v = n("./src/reddit/selectors/comments.ts"),
				C = n("./src/reddit/selectors/communityAwards.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				f = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./src/app/strings/index.ts")),
				y = n("./src/reddit/i18n/utils.ts"),
				E = n("./src/reddit/models/PostDraft/index.ts"),
				j = n("./src/lib/makeDraftKey/index.ts"),
				w = n("./src/lib/objectSelector/index.ts"),
				I = n("./src/reddit/components/CommentCreation/Loader.tsx"),
				P = n("./src/reddit/icons/fonts/helpers.tsx"),
				_ = n("./src/reddit/icons/fonts/Expand/index.m.less"),
				k = n.n(_);
			var T, S, L = m.a.wrapped(e => a.a.createElement("i", {
					className: "".concat(Object(P.b)("expand"), " ").concat(e.className)
				}), "Expand", k.a),
				N = n("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				M = n.n(N),
				R = m.a.wrapped(e => a.a.createElement("button", e, a.a.createElement(L, null)), "Component", M.a),
				A = n("./node_modules/lodash/defer.js"),
				F = n.n(A),
				B = n("./src/reddit/actions/tooltip.ts"),
				D = n("./src/reddit/selectors/tooltip.ts"),
				W = n("./src/lib/makeCommentPermalink/index.ts"),
				H = n("./src/reddit/actions/gold/modals.ts"),
				V = n("./src/reddit/actions/modal.ts"),
				U = n("./src/reddit/actions/reportFlow.ts"),
				G = n("./src/reddit/helpers/correlationIdTracker.ts"),
				K = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				q = n("./src/reddit/helpers/trackers/lightbox.ts"),
				z = n("./src/reddit/i18n/components.tsx"),
				Y = n("./src/reddit/selectors/activeModalId.ts"),
				J = n("./src/reddit/selectors/posts.ts"),
				Q = n("./src/reddit/selectors/subreddit.ts"),
				X = n("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				Z = n("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				$ = n.n(Z);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(T || (T = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(S || (S = {}));
			const ee = (e, t) => {
					const n = $.a[t],
						s = $.a[e];
					return Object(c.a)(n, s)
				},
				te = e => Object(c.a)($.a["depth".concat(Math.min(3 * Math.ceil(e.depth / 3), 10))], {
					[$.a.isInOverlay]: e.isInOverlay,
					[$.a.isModModeEnabled]: e.isModModeEnabled
				});
			var ne = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				se = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				oe = n("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				re = n("./src/higherOrderComponents/makeAsync.tsx"),
				ae = n("./src/reddit/featureFlags/index.ts"),
				ie = n("./src/reddit/selectors/economics.ts");
			const de = Object(re.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), n.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), n.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), n.e("EconomicsEntryPointsCommentFlatlistSupportCTA")]).then(n.bind(null, "./src/reddit/components/Economics/EntryPoints/CommentFlatlistSupportCTA/index.tsx")).then(e => e.default)
			});
			var ce = Object(i.b)(() => Object(d.c)({
					featureEnabled: ae.d.spSupport,
					userAcceptsSupport: (e, t) => {
						const n = e.comments.models[t.contentId];
						return !!n && Object(ie.i)(e, {
							contentId: n.id,
							subredditId: n.subredditId
						})
					}
				}))((function(e) {
					return e.featureEnabled && e.userAcceptsSupport ? a.a.createElement(de, e) : null
				})),
				le = n("./src/reddit/components/ModActionsMenu/index.tsx"),
				me = n("./src/reddit/components/ModModeReports/helpers.ts"),
				pe = n("./src/reddit/components/OverflowMenu/index.tsx"),
				ue = n("./src/reddit/components/ReportFlow/index.tsx"),
				he = n("./src/reddit/components/ShareMenu/index.tsx"),
				be = n("./src/reddit/components/TrackingHelper/index.tsx"),
				ge = n("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				xe = n("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				ve = n("./src/reddit/helpers/trackers/modTools.ts"),
				Ce = n("./src/reddit/layout/row/Inline/index.tsx"),
				Oe = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				fe = n("./src/reddit/icons/fonts/Comment/index.tsx"),
				ye = n("./src/reddit/icons/fonts/Gild/index.tsx"),
				Ee = n("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				je = n("./src/reddit/icons/fonts/ModActions/index.tsx"),
				we = n("./src/reddit/icons/fonts/Report/index.tsx"),
				Ie = n("./src/reddit/icons/fonts/Save/index.tsx"),
				Pe = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				_e = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				ke = n("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				Te = n.n(ke);
			const Se = m.a.wrapped(fe.a, "CommentIcon", Te.a),
				Le = m.a.wrapped(we.a, "Report", Te.a),
				Ne = m.a.wrapped(Ee.a, "IgnoreReport", Te.a),
				Me = m.a.wrapped(le.a, "ModActionsMenu", Te.a),
				Re = m.a.div("OverflowMenuSpacer", Te.a),
				Ae = m.a.wrapped(pe.a, "DropdownRow", Te.a),
				Fe = m.a.wrapped(Ce.a, "Flatlist", Te.a),
				Be = m.a.button("Button", Te.a),
				De = m.a.wrapped(ne.c, "ModToolsFlatlist", Te.a),
				We = m.a.wrapped(ge.a, "ViewReportsDropdown", Te.a),
				He = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				Ve = e => "Distinguish--Dropdown--".concat(e),
				Ue = e => "".concat(e, "-overflow-menu"),
				Ge = e => "View--Reports--".concat(e),
				Ke = Object(d.c)({
					currentUser: O.i,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Y.a)(e) === He(n.id)
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(D.b)(Ve(n.id))(e)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(v.A)(e, {
							commentId: n.id
						})
					},
					isReportsDropdownOpen: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(D.b)(Ge(n.id))(e)
					},
					isLoggedIn: O.G,
					postIsArchived: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(J.D)(e, {
							postId: n.postId
						})
					},
					postIsLocked: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(J.E)(e, {
							postId: n.postId
						})
					},
					postPermalink: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(J.H)(e, {
							postId: n.postId
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: n
						} = t;
						return e.reportFlow.postOrCommentId === n.id
					},
					sendRepliesToggled: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(v.G)(e, {
							commentId: n.id
						})
					},
					subredditAboutInfo: (e, t) => {
						let {
							subreddit: n
						} = t;
						return n ? Object(Q.v)(e, {
							subredditName: n.name
						}) : void 0
					},
					subredditOrProfile: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(J.U)(e, {
							postId: n.postId
						})
					}
				});
			class qe extends a.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(q.b)(this.props.comment.postId, "comment_".concat(e))), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ve.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ve.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(ve.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						Object(G.d)(G.a.GildingFlow), this.props.onGildClick();
						const {
							clickGildEvent: e
						} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(e(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(ve.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(ve.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ve.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ve.b)(e, this.props.comment.id))
				}
				render() {
					const {
						comment: e,
						className: t,
						currentUser: n,
						deleteComment: s,
						depth: o,
						handleReply: i,
						isLoggedIn: d,
						isPendingDeletion: l,
						language: m,
						onDistinguishComment: p,
						onIgnoreReports: u,
						onToggleReportsDropdown: h,
						moderatorPermissions: b,
						modModeEnabled: g,
						postIsArchived: x,
						postIsLocked: v,
						postPermalink: C,
						renderedInOverlay: O,
						sendEvent: f,
						subreddit: E,
						subredditAboutInfo: j,
						toggleDeleteCommentModal: w,
						toggleSendReplies: I,
						trackClick: P
					} = this.props, _ = Object(K.a)(b), k = !!n && n.displayText === e.author, L = !!n && n.isEmployee, N = !(j && j.userIsBanned) && (v || x || _ && d || e.isLocked ? _ && d : d), M = Object(me.a)(e), R = _ && !g && k && !e.bannedBy, A = k && L && !e.bannedBy, B = R || A, D = n && e.isGildable, H = [];
					N && H.push({
						breakpointGroup: S.LoggedInUser,
						icon: a.a.createElement(Se, null),
						key: "reply",
						onClick: () => {
							i(), F()(() => P("reply")())
						},
						text: Object(y.c)("Reply")
					}), n && !k && H.push(a.a.createElement(ce, {
						className: Te.a.supportButton,
						contentId: e.id,
						key: "support-cta",
						subredditId: e.subredditId,
						targetName: e.author
					})), D && H.push({
						breakpointGroup: S.LoggedInUser,
						icon: a.a.createElement(ye.a, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: Object(y.c)("Give Award")
					}), H.push(a.a.createElement(he.a, {
						dropdownId: "".concat(e.id, "-comment-share-menu"),
						key: "share",
						permalink: Object(W.a)(C, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subreddit: E
					}, a.a.createElement(Be, {
						onClick: () => this.sendCommentEventWithName("share")
					}, a.a.createElement(z.c, null, "share")))), k || H.push({
						breakpointGroup: S.LoggedInUser,
						icon: a.a.createElement(we.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: Object(y.c)("Report")
					}), H.push({
						breakpointGroup: S.LoggedInUser,
						icon: e.isSaved ? a.a.createElement(Oe.e, null) : a.a.createElement(Ie.a, null),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? Object(y.c)("Unsave") : Object(y.c)("Save")
					}), k && H.push({
						breakpointGroup: S.LoggedInUser,
						icon: a.a.createElement(Pe.a, null),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: Object(y.c)("Edit")
					});
					const V = H.map(e => a.a.isValidElement(e) ? e : a.a.createElement(Be, {
							className: ee(e.breakpointGroup, T.HideIfVWSmaller),
							disabled: l,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text)),
						U = H.map(e => a.a.isValidElement(e) ? null : a.a.createElement(Ae, {
							className: ee(e.breakpointGroup, T.HideIfVWLarger),
							displayText: e.text,
							iconWrapperClassName: Te.a.iconWrapper,
							key: e.key,
							onClick: e.onClick,
							textClassName: Te.a.dropdownRowText
						}, e.icon));
					return a.a.createElement(r.Fragment, null, a.a.createElement(Fe, {
						className: Object(c.a)(te({
							depth: o,
							isInOverlay: O,
							isModModeEnabled: _ && g
						}), t)
					}, V, a.a.createElement(Re, {
						className: k ? void 0 : ee(S.LoggedInUser, T.HideIfVWLarger)
					}, a.a.createElement(pe.b, {
						className: Te.a.overflowMenu,
						disabled: l,
						dropdownId: Ue(e.id),
						onClick: () => f(Object(ve.a)("comment_overflow_menu", e.id))
					}, U, k && a.a.createElement(a.a.Fragment, null, a.a.createElement(Ae, {
						displayText: Object(y.c)("Delete comment"),
						iconWrapperClassName: Te.a.iconWrapper,
						onClick: this.handleDelete,
						textClassName: Te.a.dropdownRowText
					}, a.a.createElement(_e.b, null)), a.a.createElement(xe.a, {
						text: Object(y.c)("Send me reply notifications"),
						onClick: I,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && a.a.createElement(se.a, {
						actionText: Object(y.c)("delete"),
						cancelActionText: Object(y.c)("keep"),
						headerText: Object(y.c)("Delete comment"),
						modalText: Object(y.c)("Are you sure you want to delete your comment?"),
						onConfirm: s,
						toggleModal: w,
						trackClick: () => {},
						withOverlay: !0
					}), _ && a.a.createElement(a.a.Fragment, null, g && a.a.createElement(De, {
						className: ee(S.Moderator, T.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: k,
						language: m
					}), a.a.createElement(Me, {
						className: g ? ee(S.Moderator, T.HideIfVWLarger) : void 0,
						dropdownId: "".concat(e.id, "-mod-actions-menu"),
						inCommentFlatlist: !0,
						onClick: () => f(Object(ve.a)("comment_mod_action_menu", e.id))
					}, a.a.createElement(je.a, null), a.a.createElement(X.a, {
						comment: e,
						language: m,
						tooltipId: "".concat(e.id, "-mod-actions-menu")
					}))), Object(me.c)(e) && !g && a.a.createElement(ne.b, {
						text: "".concat(M),
						onClick: () => {
							h(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: Ge(e.id)
					}, a.a.createElement(We, {
						model: e,
						onIgnoreReports: () => {
							u(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Ge(e.id)
					}), e.ignoreReports ? a.a.createElement(Ne, null) : a.a.createElement(Le, null)), B && a.a.createElement(ne.b, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, a.a.createElement(ne.a, null), a.a.createElement(oe.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: L,
						isUserMod: _,
						onDistinguishComment: p,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Ve(e.id)
					}))), this.props.reportFlowIsOpen && a.a.createElement(ue.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: ue.b,
						postId: this.props.comment.postId
					}))
				}
			}
			var ze = Object(i.b)(Ke, (e, t) => {
					let {
						comment: n,
						commentsPageKey: s,
						language: o
					} = t;
					return {
						deleteComment: () => s && e(Object(u.db)(o, n.id, n.postId)),
						handleDelete: () => {
							e(Object(V.i)(He(n.id))), e(Object(B.h)({
								tooltipId: Ue(n.id)
							}))
						},
						handleEdit: () => {
							const t = n.media && n.media.rteMode;
							s && e(Object(u.V)({
								commentId: n.id,
								draftKey: Object(j.a)(E.c.edit, n.id),
								text: n.bodyMD || "",
								commentMode: t,
								commentsPageKey: s
							}))
						},
						handleReply: () => s && e(Object(u.ob)({
							parentCommentId: n.id,
							commentsPageKey: s
						})),
						onDistinguishComment: (t, s) => e(Object(u.S)(n.id, t, s)),
						onGildClick: () => e(Object(H.d)(n.id)),
						onIgnoreReports: () => e(Object(u.pb)(n.id)),
						onReportClick: () => e(Object(U.j)(n.id)),
						onToggleSave: () => e(Object(u.gb)(n.id)),
						onToggleDistinguishDropdown: () => e(Object(B.h)({
							tooltipId: Ve(n.id)
						})),
						onToggleReportsDropdown: () => e(Object(B.h)({
							tooltipId: Ge(n.id)
						})),
						toggleDeleteCommentModal: () => e(Object(V.i)(He(n.id))),
						toggleSendReplies: () => e(Object(u.hb)(n.id))
					}
				})(Object(be.b)(qe)),
				Ye = n("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Je = n("./src/reddit/components/GildModal/getGildModalId.ts"),
				Qe = n("./src/reddit/components/GildModal/Loader.tsx"),
				Xe = n("./src/reddit/components/ModModeReports/index.tsx"),
				Ze = n("./src/reddit/components/RichTextJson/index.tsx"),
				$e = n("./src/reddit/components/VerticalVotes/index.tsx"),
				et = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				tt = n("./src/reddit/constants/componentTestIds.ts"),
				nt = n("./src/reddit/contexts/PageLayer/index.tsx"),
				st = n("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				ot = n("./src/reddit/controls/ErrorText/index.tsx"),
				rt = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				at = n("./src/reddit/models/Subreddit/index.ts"),
				it = n("./src/reddit/models/Vote/index.ts"),
				dt = n("./src/reddit/selectors/gild.ts"),
				ct = n("./src/reddit/selectors/moderatorPermissions.ts"),
				lt = n("./src/reddit/reducers/comments/visitHighlightingFilter/index.ts"),
				mt = n("./src/reddit/selectors/moderatingComments.ts"),
				pt = n("./src/reddit/components/Comments/Comment/index.m.less"),
				ut = n.n(pt);

			function ht() {
				return (ht = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var bt = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const gt = m.a.wrapped(R, "ExpandButton", ut.a),
				xt = m.a.wrapped(ot.b, "ErrorText", ut.a),
				vt = m.a.wrapped($e.a, "VerticalVotes", ut.a),
				Ct = m.a.wrapped(Ye.a, "TopMeta", ut.a),
				Ot = m.a.div("CommentContentWrapper", ut.a),
				ft = m.a.div("CommentWrapper", ut.a),
				yt = m.a.div("CommentBody", ut.a),
				Et = m.a.wrapped(I.a, "CommentCreation", ut.a),
				jt = m.a.wrapped(Et, "EditCommentForm", ut.a),
				wt = Object(nt.t)(),
				It = Object(i.b)(() => Object(d.c)({
					comment: (e, t) => Object(v.n)(e, t),
					currentProfileModPermissions: nt.g,
					depth: (e, t) => Object(v.j)(e, t),
					collapsed: mt.b,
					collapsedBecauseCrowdControl: mt.a,
					flair: v.e,
					focused: v.u,
					gildModalIsOpen: (e, t) => {
						let {
							commentId: n
						} = t;
						const s = Object(Je.b)(n);
						return Object(dt.c)(e, s)
					},
					isEditing: v.z,
					isLoggedIn: O.G,
					isPendingDeletion: v.A,
					language: O.P,
					moderatorPermissions: (e, t) => {
						const n = Object(v.n)(e, t);
						return n ? Object(ct.j)(e, {
							subredditId: n.subredditId
						}) : null
					},
					modModeEnabled: nt.M,
					errorMsgs: v.E,
					replyFormOpen: v.H,
					subreddit: nt.q,
					subredditType: v.J,
					highlightComment: (e, t) => {
						let {
							commentId: n
						} = t;
						const s = Object(v.q)(e);
						if (s === lt.a.None) return !1;
						const o = Object(v.n)(e, {
							commentId: n
						});
						if (!o) return !1;
						const r = Object(O.p)(e),
							a = !!Object(ct.i)(e, {
								postId: o.postId
							}),
							i = Object(J.I)(e, {
								postId: o.postId
							});
						if (!i || !i.previousVisits || i.previousVisits.length < 1) return !1;
						const d = s === lt.a.Last ? i.previousVisits[i.previousVisits.length - 1] : i.previousVisits[0];
						return (a || r) && o.created > d
					}
				}), (e, t) => {
					let {
						commentId: n,
						commentsPageKey: s,
						scrollToAndRemeasure: o,
						trackClick: r
					} = t;
					return {
						onCollapseClick: () => e(Object(u.nb)({
							commentId: n,
							commentsPageKey: s,
							scrollToAndRemeasure: o
						})),
						onIgnoreReports: () => e(Object(u.pb)(n)),
						onVoteClick: t => {
							const [s, o] = t === it.a.upvoted ? [Object(u.rb)(n), "upvote_comment"] : [Object(u.T)(n), "downvote_comment"];
							r(o)(), e(s)
						}
					}
				}),
				Pt = Object(w.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				_t = wt(It(e => {
					const {
						childrenInfo: t,
						clearHovered: n,
						comment: s,
						commentsPageKey: o,
						collapsed: i,
						collapsedBecauseCrowdControl: d,
						currentProfileModPermissions: l,
						depth: m,
						errorMsgs: p,
						flair: h,
						focused: b,
						gildModalIsOpen: g,
						highlightComment: x,
						isActive: v,
						isEditing: C,
						isLoggedIn: O,
						isPendingDeletion: w,
						language: I,
						moderatorPermissions: P,
						modModeEnabled: _,
						onCollapseClick: k,
						onIgnoreReports: T,
						onLineMouseOver: S,
						onVoteClick: L,
						replyFormOpen: N,
						subreddit: M,
						trackClick: R,
						renderedInOverlay: A,
						subredditType: F
					} = e, B = !C && !s.isDeleted && !!p && p.length > 0, D = Object(j.a)(E.c.edit, s.id), W = Object(j.a)(E.c.replyToComment, s.id), H = Object(K.a)(P), V = s.authorIsContractor && F === at.c.EmployeesOnly, U = s.isLocked;
					return a.a.createElement(ft, {
						className: Object(c.a)("Comment ".concat(s.id), {
							[ut.a.focused]: b,
							[ut.a.topLevel]: !m
						})
					}, i && a.a.createElement(gt, {
						className: s.id,
						onClick: () => {
							n(), k(), R("collapse")()
						},
						onMouseOver: () => S(s.id),
						onMouseOut: n
					}), !i && !s.isDeleted && a.a.createElement(vt, {
						compact: !0,
						downvoteButtonClassName: ut.a.voteButton,
						downvoteClassName: ut.a.upDownVote,
						model: s,
						onVoteClick: L,
						upvoteButtonClassName: ut.a.voteButton,
						upvoteClassName: ut.a.upDownVote
					}), a.a.createElement(Ot, {
						className: Object(c.a)({
							[ut.a.highlightComment]: x,
							[ut.a.isActive]: v,
							[ut.a.isCollapsed]: i,
							[ut.a.isLocked]: U,
							[ut.a.isPendingDeletion]: w,
							[ut.a.isRemoved]: !!s.bannedBy
						})
					}, a.a.createElement(rt.a, null, Object(f.a)(I, "comment.level", {
						level: m + 1
					})), a.a.createElement(Ct, {
						childrenInfo: t,
						className: Object(c.a)({
							[ut.a.collapsed]: i
						}),
						collapsed: i,
						collapsedBecauseCrowdControl: d,
						comment: s,
						commentsPageKey: o,
						flair: h,
						language: I,
						renderedInOverlay: A,
						renderContractorBadge: V
					}), !i && a.a.createElement(r.Fragment, null, C && a.a.createElement(jt, {
						autofocus: !0,
						commentsPageKey: o,
						depth: m,
						draftType: E.c.edit,
						draftKey: D,
						rtJson: Object(et.a)(s),
						mediaMetadata: s.media && s.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: s.id,
						submitAction: e => Object(u.eb)({
							language: I,
							id: s.id,
							commentsPageKey: o,
							depth: m,
							draftKey: D,
							formData: e
						}),
						submitButtonText: Object(y.c)("save edits")
					}), !C && !s.isDeleted && a.a.createElement(yt, {
						"data-test-id": tt.d
					}, a.a.createElement(Ze.a, {
						content: Object(et.a)(s),
						mediaMetadata: s.media && s.media.mediaMetadata,
						rtJsonElementProps: Pt(e)
					})), _ && H && Object(me.c)(s) && a.a.createElement(Xe.a, {
						language: I,
						onIgnoreReports: T,
						reportable: s
					}), !C && !s.isDeleted && O && a.a.createElement(ze, {
						comment: s,
						commentsPageKey: o,
						depth: m,
						language: I,
						collapsedBecauseCrowdControl: d,
						modModeEnabled: _,
						moderatorPermissions: l || P,
						renderedInOverlay: A,
						subreddit: M,
						trackClick: R
					}), B && p.map(e => a.a.createElement(xt, {
						language: I
					}, e)), N && a.a.createElement(Et, {
						autofocus: !0,
						commentsPageKey: o,
						depth: m,
						draftType: E.c.replyToComment,
						draftKey: W,
						isTopLevelComment: !1,
						parentCommentId: s.id,
						submitAction: (e, t) => {
							var {
								validate: n
							} = e, r = bt(e, ["validate"]);
							return n ? Object(u.sb)({
								commentsPageKey: o,
								draftKey: W,
								language: I,
								parentCommentDepth: m,
								parentCommentId: s.id,
								formData: r,
								editorMode: t
							}) : Object(u.jb)({
								commentsPageKey: o,
								draftKey: W,
								language: I,
								parentCommentDepth: m,
								parentCommentId: s.id,
								formData: r,
								editorMode: t
							})
						},
						submitButtonText: Object(y.c)("Reply")
					}))), g && a.a.createElement(Qe.a, null))
				}));
			var kt = e => a.a.createElement(st.a.Consumer, null, t => a.a.createElement(_t, ht({}, e, {
					trackClick: t
				}))),
				Tt = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				St = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Lt = n("./src/reddit/helpers/path/index.ts"),
				Nt = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				Mt = n("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				Rt = n.n(Mt);
			const At = m.a.div("Wrapper", Rt.a),
				Ft = m.a.wrapped(Nt.a, "ArrowRight", Rt.a),
				Bt = m.a.wrapped(Tt.a, "LinkOrOverlayLink", Rt.a),
				Dt = m.a.span("HoverSpan", Rt.a),
				Wt = Object(d.c)({
					language: O.P,
					permalink: (e, t) => Object(v.m)(e, {
						commentId: Object(v.s)(e, t).parentId
					})
				});
			var Ht = Object(i.b)(Wt)(Object(St.b)(e => {
					let {
						isActive: t,
						isOverlay: n,
						permalink: s
					} = e;
					return a.a.createElement(At, {
						className: Object(c.a)({
							[Rt.a.isActive]: t
						})
					}, a.a.createElement(Bt, {
						isOverlay: !!n,
						to: Object(Lt.b)(s)
					}, a.a.createElement(Dt, null, a.a.createElement(z.c, null, "Continue this thread")), " ", a.a.createElement(Ft, null)))
				})),
				Vt = n("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				Ut = n.n(Vt);
			const Gt = m.a.div("MoreCommentsItemWrapper", Ut.a),
				Kt = m.a.p("MoreComments", Ut.a),
				qt = m.a.wrapped(Kt, "MoreCommentsInteractive", Ut.a),
				zt = Object(d.c)({
					moreCommentsItem: v.B,
					moreCommentsPending: v.C,
					language: O.P
				});
			var Yt = Object(i.b)(zt, (e, t) => ({
					moreCommentsClicked: () => e(Object(u.Z)(t.commentsPageKey, t.moreCommentsId))
				}))(e => {
					let {
						language: t,
						isActive: n,
						moreCommentsClicked: s,
						moreCommentsItem: o,
						moreCommentsPending: r
					} = e;
					return a.a.createElement(Gt, null, r ? a.a.createElement(Kt, null, a.a.createElement(z.c, null, "loading...")) : a.a.createElement(st.a.Consumer, null, e => a.a.createElement(qt, {
						className: Object(c.a)({
							[Ut.a.isActive]: n
						}),
						onClick: () => {
							s(), e("load_more_comment")()
						}
					}, Object(f.c)(t, "comment.moreReply", o.numComments, {
						numComments: o.numComments
					}))))
				}),
				Jt = n("./node_modules/lodash/times.js"),
				Qt = n.n(Jt),
				Xt = n("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				Zt = n.n(Xt);
			const $t = m.a.wrapped(e => a.a.createElement("div", e, a.a.createElement("i", {
					className: g.m
				})), "Line", Zt.a),
				en = m.a.div("LineContainer", Zt.a),
				tn = m.a.div("ShortLineContainer", Zt.a);
			var nn = e => {
					const {
						collapsed: t,
						depth: n,
						onLineClick: s,
						onLineMouseOver: o,
						onLineMouseOut: r,
						onShortLineClick: i,
						parentNodeIds: d,
						type: c
					} = e;
					return a.a.createElement(en, null, Qt()(n + 1, e => e === n ? c !== h.a.Comment || t ? null : a.a.createElement(tn, {
						key: d[e]
					}, a.a.createElement($t, {
						className: d[e],
						onClick: i,
						onMouseOver: () => o(d[e]),
						onMouseOut: () => r(d[e])
					})) : a.a.createElement($t, {
						className: d[e],
						key: d[e],
						onClick: s(e),
						onMouseOver: () => o(d[e]),
						onMouseOut: () => r(d[e])
					})))
				},
				sn = n("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				on = n.n(sn);
			const rn = m.a.div("CommentListNodeWrapper", on.a),
				an = e => {
					const t = document.querySelectorAll(".".concat(e));
					if (t && t.length)
						for (let n = 0; n < t.length; n++) t[n].classList.add(g.f)
				},
				dn = () => {
					const e = document.querySelectorAll(".".concat(g.f));
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(g.f)
				};
			var cn = Object(i.b)(() => Object(d.c)({
				collapsed: (e, t) => {
					let {
						commentLink: n,
						commentsPageKey: s
					} = t;
					return Object(mt.b)(e, {
						commentId: n.id,
						commentsPageKey: s
					})
				},
				commentListNode: (e, t) => Object(v.l)(e, t),
				depth: (e, t) => Object(v.j)(e, t),
				isActive: (e, t) => {
					let {
						commentLink: n
					} = t;
					return !!e.shortcuts.activeCommentId && n.id === e.shortcuts.activeCommentId
				},
				isCommentHighlightExperiment: (e, t) => {
					let {
						commentLink: n
					} = t;
					if (!Object(p.a)(e)) return !1;
					const s = Object(v.l)(e, {
						commentLink: n
					});
					return !(n.type !== h.a.Comment || !s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const n = Object(C.a)(e, t);
						return n && n.coinPrice >= x.g
					})
				},
				isNightmodeOn: O.R
			}), (e, t) => {
				let {
					commentLink: n,
					commentsPageKey: s,
					scrollToAndRemeasure: o
				} = t;
				return {
					onLineClick: t => () => {
						e(Object(u.K)({
							commentLink: n,
							commentsPageKey: s,
							lineDepth: t,
							scrollToAndRemeasure: o
						}))
					},
					onShortLineClick: () => e(Object(u.nb)({
						commentId: n.id,
						commentsPageKey: s,
						scrollToAndRemeasure: o
					}))
				}
			})(e => {
				const {
					childrenInfo: t,
					className: n,
					collapsed: s,
					commentLink: o,
					commentsPageKey: r,
					depth: i,
					isActive: d,
					isCommentHighlightExperiment: l,
					isHidden: m,
					isNightmodeOn: p,
					onLineClick: u,
					onShortLineClick: g,
					parentNodeIds: x,
					renderedInOverlay: v,
					scrollToAndRemeasure: C
				} = e;
				return a.a.createElement(rn, {
					className: Object(c.a)(n, {
						[on.a.isHidden]: m,
						[on.a.isAwarded]: l,
						[on.a.isNightmodeOn]: p
					}),
					id: o.id,
					style: {
						paddingLeft: i * (b.w + b.v) + (o.type === h.a.Comment ? b.w : 0)
					},
					tabIndex: -1
				}, a.a.createElement(nn, {
					collapsed: s,
					depth: i,
					onLineClick: u,
					onLineMouseOver: an,
					onLineMouseOut: dn,
					onShortLineClick: g,
					type: o.type,
					parentNodeIds: x
				}), ln({
					childrenInfo: t,
					clearHovered: dn,
					commentLink: o,
					commentsPageKey: r,
					onLineMouseOver: an,
					isActive: d,
					renderedInOverlay: v,
					scrollToAndRemeasure: C
				}))
			});
			const ln = e => {
				let {
					childrenInfo: t,
					clearHovered: n,
					commentLink: s,
					commentsPageKey: o,
					isActive: r,
					onLineMouseOver: i,
					renderedInOverlay: d,
					scrollToAndRemeasure: c
				} = e;
				switch (s.type) {
					case h.a.Comment:
						return a.a.createElement(kt, {
							childrenInfo: t,
							clearHovered: n,
							commentId: s.id,
							commentsPageKey: o,
							isActive: r,
							onLineMouseOver: i,
							renderedInOverlay: d,
							scrollToAndRemeasure: c
						});
					case h.a.MoreComments:
						return a.a.createElement(Yt, {
							commentsPageKey: o,
							isActive: r,
							moreCommentsId: s.id
						});
					case h.a.ContinueThread:
						return a.a.createElement(Ht, {
							id: s.id,
							isActive: r
						})
				}
			};
			var mn = n("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				pn = n("./src/reddit/components/Comments/States/index.tsx"),
				un = n("./src/reddit/components/Scroller/Simple.tsx"),
				hn = n("./src/reddit/constants/elementIds.ts"),
				bn = n("./src/reddit/helpers/commentList/index.ts"),
				gn = n("./src/telemetry/index.ts"),
				xn = n("./src/lib/LRUCache/index.ts"),
				vn = n("./src/reddit/components/Comments/index.m.less"),
				Cn = n.n(vn);
			const On = b.f + 10,
				fn = 65,
				yn = m.a.wrapped(un.b, "Scroller", Cn.a),
				En = Object(d.c)({
					allCollapsed: v.a,
					commentLinks: v.k,
					commentThreadLinkSet: v.p,
					language: O.P,
					measureScrollFPS: ae.d.measureScrollFPS,
					moreComments: v.b,
					postPermalink: J.H
				}),
				jn = Object(i.b)(En, (e, t) => ({
					onCommentEnteredViewport: t => e(Object(u.L)(t)),
					onCommentLeftViewport: (t, n) => e(Object(u.Q)(t, n))
				})),
				wn = new xn.a(500),
				In = new xn.a(500),
				Pn = (e, t) => {
					const n = "entered-".concat(e);
					let s = wn.get(n);
					return void 0 === s && (s = () => {
						t.onCommentEnteredViewport(e)
					}, wn.set(n, s)), s
				},
				_n = (e, t) => {
					const n = "left-".concat(e);
					let s = In.get(n);
					return void 0 === s && (s = n => {
						t.onCommentLeftViewport(e, n)
					}, In.set(n, s)), s
				};
			class kn extends a.a.Component {
				constructor(e) {
					super(e), this.getParentNodeIds = e => {
						const {
							commentLinks: t,
							commentThreadLinkSet: n
						} = this.props;
						if (this.parentNodeIdsMap[e.id]) return this.parentNodeIdsMap[e.id];
						const s = n[e.id].depth,
							o = t.findIndex(t => t.id === e.id);
						if (0 === s || 0 === o) return this.parentNodeIdsMap[e.id] = [e.id], this.parentNodeIdsMap[e.id];
						const r = t[o - 1],
							a = this.parentNodeIdsMap[r.id].slice();
						return this.parentNodeIdsMap[e.id] = a.filter(e => !!n[e] && n[e].depth < s), this.parentNodeIdsMap[e.id].push(e.id), this.parentNodeIdsMap[e.id]
					}, this.getChildrenInfo = e => this.childrenInfoMap[e] || void 0, this.parentNodeIdsMap = {}, mn.c(), this.childrenInfoMap = {}
				}
				componentWillMount() {
					const {
						commentLinks: e,
						allCollapsed: t,
						commentThreadLinkSet: n,
						moreComments: s
					} = this.props;
					this.timerId && gn.c.cancel(this.timerId), e.length && (this.timerId = gn.c.start()), this.findHiddenNodes(e, t, n, s)
				}
				componentDidMount() {
					this.timerId && Object(gn.b)(l.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: gn.c.end(this.timerId)
					})
				}
				componentWillReceiveProps(e) {
					const {
						allCollapsed: t,
						commentsPageKey: n,
						commentLinks: s,
						commentThreadLinkSet: r,
						moreComments: a
					} = e;
					(n !== this.props.commentsPageKey || s.length > this.props.commentLinks.length || !o()(t, this.props.allCollapsed)) && this.findHiddenNodes(s, t, r, a)
				}
				shouldComponentUpdate(e) {
					const {
						commentsPageKey: t,
						commentLinks: n,
						allCollapsed: s
					} = this.props;
					return e.commentsPageKey !== t || e.commentLinks.length > n.length || !o()(e.allCollapsed, s) || e.commentLinks.some((e, t) => e.id !== n[t].id)
				}
				componentWillUpdate(e) {
					this.timerId && gn.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = gn.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(gn.b)(l.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: gn.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					this.timerId && gn.c.cancel(this.timerId)
				}
				findHiddenNodes(e, t, n, s) {
					if (!t || !Object.keys(t).length) return;
					let o = null,
						r = 1 / 0,
						a = 0,
						i = !1;
					mn.c();
					for (let d = 0; d < e.length; d++) {
						const c = e[d];
						o && (n[c.id].depth > r ? (mn.a(c.id), a += Object(bn.d)(c, s), c.type === h.a.ContinueThread && (i = !0)) : (this.childrenInfoMap[o] = {
							numChildren: a,
							hasContinueThread: i
						}, o = null, r = 1 / 0, a = 0, i = !1)), !o && t[c.id] && (o = c.id, r = n[c.id].depth)
					}
				}
				render() {
					return this.props.commentLinks.length ? this.renderList() : this.renderEmptyState()
				}
				getScrollChild(e, t) {
					const {
						commentsPageKey: n,
						onCommentEnteredViewport: s,
						onCommentLeftViewport: o,
						renderedInOverlay: r
					} = this.props, i = Pn(e.id, {
						onCommentEnteredViewport: s,
						onCommentLeftViewport: o
					}), d = _n(e.id, {
						onCommentEnteredViewport: s,
						onCommentLeftViewport: o
					});
					return {
						estHeight: mn.b(e.id) ? 0 : fn,
						id: e.id,
						trackOnEnteredViewport: i,
						trackOnExitedViewport: d,
						render: t => {
							let {
								placeholderRecommended: s,
								height: o,
								width: i,
								scrollToAndRemeasure: d
							} = t;
							return s ? a.a.createElement("div", {
								style: {
									height: o,
									backgroundColor: "#fff"
								}
							}) : a.a.createElement(cn, {
								childrenInfo: this.getChildrenInfo(e.id),
								commentLink: e,
								commentsPageKey: n,
								id: e.id,
								isHidden: mn.b(e.id),
								scrollToAndRemeasure: d,
								renderedInOverlay: !!r,
								parentNodeIds: this.getParentNodeIds(e)
							})
						}
					}
				}
				renderList() {
					const {
						className: e,
						commentLinks: t,
						commentsPageKey: n,
						measureScrollFPS: s,
						renderedInOverlay: o
					} = this.props;
					let r;
					if (s) {
						r = "comments-".concat(o ? "lightbox" : "page")
					}
					const i = t.map((e, t) => this.getScrollChild(e, t));
					return a.a.createElement(yn, {
						className: Object(c.a)(Cn.a.Scroller, e),
						disableScrollCache: o,
						key: n,
						getContainer: () => o ? document.getElementById(hn.d) : null,
						preventScrollOnMount: !0,
						scrollToChildPadding: On,
						trackingName: r
					}, i)
				}
				renderEmptyState() {
					return this.props.commentId ? a.a.createElement(pn.g, {
						link: this.props.postPermalink
					}) : a.a.createElement(pn.c, null)
				}
			}
			t.a = jn(kn)
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "ChatPost",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~1993415f"), n.e("ChatPost~ModQueuePages"), n.e("ChatPost")]).then(n.bind(null, "./src/reddit/components/CommentsChat/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/CommentsChat/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = o
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.m.less": function(e, t, n) {
			e.exports = {
				LoaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				loaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				Icon: "_1nrdmuhkCLXh8N_46gKAyn",
				icon: "_1nrdmuhkCLXh8N_46gKAyn",
				gradientAnimation: "_3kGJh7EpOUlhrvN051jlhD",
				Byline: "eI85Q_-1x9VERN15oDr3X",
				byline: "eI85Q_-1x9VERN15oDr3X"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/loadWithRetries/index.ts"),
				d = n("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				c = n.n(d);
			const l = a.a.div("LoaderWrapper", c.a),
				m = a.a.div("Icon", c.a),
				p = a.a.div("Byline", c.a),
				u = Object(r.a)({
					ErrorComponent: () => o.a.createElement(l, null, o.a.createElement(m, null), o.a.createElement(p, null)),
					getComponent: () => Object(i.a)(() => Promise.all([n.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), n.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), n.e("ChatMessageInput")]).then(n.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							isLivestreaming: t
						} = e;
						return t ? null : o.a.createElement(l, null, o.a.createElement(m, null), o.a.createElement(p, null))
					}
				});
			t.a = e => o.a.createElement(u, e)
		},
		"./src/reddit/components/CommentsPageAd/index.m.less": function(e, t, n) {
			e.exports = {
				CommentsPageAdContainer: "_1kZq41JJsyWtpgT1oGyVko",
				commentsPageAdContainer: "_1kZq41JJsyWtpgT1oGyVko",
				BannerAd: "_3-iuIC1F_FWNnxkCPyySXD",
				bannerAd: "_3-iuIC1F_FWNnxkCPyySXD"
			}
		},
		"./src/reddit/components/CommentsPageAd/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/app/strings/index.ts"),
				o = n("./node_modules/lodash/throttle.js"),
				r = n.n(o),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				d = n("./src/reddit/components/BannerAd/index.tsx"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/components/BlankPost/index.tsx"),
				m = n("./src/reddit/connectors/PostViewable/index.ts"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/featureFlags/index.ts"),
				h = n("./src/reddit/selectors/brandSafety.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				g = n("./src/lib/constants/index.ts"),
				x = n("./src/lib/fastdom/index.ts"),
				v = n("./src/reddit/components/CommentsPageAd/index.m.less"),
				C = n.n(v),
				O = n("./src/lib/lessComponent.tsx");
			const f = Object(c.c)({
					canShowAds: (e, t) => {
						const n = Object(h.a)(e, t),
							s = !u.d.rabbitHole(e) && !Object(p.G)(t.pageLayer) && !Object(b.x)(e),
							o = e.meta.isSessionSeo && !Object(b.G)(e);
						return n && s && (o || Object(b.D)(e))
					},
					ads: e => e.commentsPage.ads
				}),
				y = Object(m.a)(f),
				E = Object(p.t)(),
				j = O.a.wrapped(d.a, "BannerAd", C.a),
				w = (e, t) => {
					let n = "";
					return t && (n += "overlay-"), n += "comment-".concat(e)
				},
				I = O.a.div("CommentsPageAdContainer", C.a);
			class P extends i.a.Component {
				constructor() {
					super(...arguments), this.container = null, this.state = {
						enoughSpace: !1,
						hasBeenAssessed: !1
					}, this.checkAvailableSpace = r()(() => {
						x.a.read(() => {
							if (this.container) {
								const e = g.f[0],
									t = this.container.clientWidth;
								!this.state.enoughSpace && this.state.hasBeenAssessed || x.a.write(() => {
									this.setState({
										enoughSpace: t > e,
										hasBeenAssessed: !0
									})
								})
							}
						})
					}, g.F)
				}
				componentDidMount() {
					this.props.canShowAds && (this.checkAvailableSpace(), window.addEventListener("resize", this.checkAvailableSpace))
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.checkAvailableSpace)
				}
				render() {
					if (!this.props.canShowAds) return null;
					const {
						isOverlay: e,
						refreshKey: t,
						listingName: n,
						placement: o,
						onPostViewable: r
					} = this.props;
					return i.a.createElement(I, {
						innerRef: e => {
							this.container = e
						}
					}, this.props.ads.length > 0 && i.a.createElement(l.BlankPost, {
						post: this.props.ads[0],
						onPostViewable: r
					}), this.state.enoughSpace && i.a.createElement(j, {
						id: w(o, e),
						sizes: [g.f],
						placement: o,
						listingName: n,
						refreshKey: t,
						dataBeforeContent: Object(s.a)("en", "posts.sponsored")
					}))
				}
			}
			t.a = E(y(P))
		},
		"./src/reddit/components/CommentsPageSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				communityTipJar: "_3Rb_UoC2j8wE4ckG7Yqy2K",
				communityTokens: "LRXVBnaKV0QUa_v8PZe5Q",
				leaderboard: "_2Bw_-Pd7_PSh46KT8HivGh",
				inFeedAd: "_2vWBnEHUdKqzj9DabP66L1",
				outerWrapper: "_31AVRNJbVMh2DUFRrpCQcD"
			}
		},
		"./src/reddit/components/CommentsPageSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/lodash/isEqual.js"),
				r = n.n(o),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/objectSelector/index.ts"),
				u = n("./src/reddit/components/Economics/CommunityTipJar/async.tsx"),
				h = n("./src/reddit/components/Governance/CommunityCard/index.tsx"),
				b = n("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				g = n("./src/reddit/components/IdCard/async.tsx"),
				x = n("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				v = n("./src/reddit/components/SidebarFooter/index.tsx"),
				C = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				O = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				f = n("./src/reddit/components/Widgets/AdRules/index.tsx"),
				y = n("./src/reddit/components/Widgets/Widget/index.tsx"),
				E = n("./src/reddit/featureFlags/component.tsx"),
				j = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				w = n("./src/reddit/models/Post/index.ts"),
				I = n("./src/reddit/selectors/experiments/postSeo.ts"),
				P = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				T = n.n(k);
			const S = Object(E.a)("spPoints", h.a),
				L = Object(E.a)("spLeaderboard", b.a),
				N = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-ProfileIdCard").then(n.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				M = Object(c.c)({
					isLoggedIn: _.G,
					postSEOV2IdCardVariant: I.i,
					widgets: Object(p.a)(P.r)
				}),
				R = Object(d.b)(M);
			class A extends i.a.Component {
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
					return this.props.subredditName !== e.subredditName || !r()(this.props.widgets, e.widgets)
				}
				renderFooter(e) {
					const {
						commentsPageKey: t,
						isOverlay: n,
						subredditName: s,
						post: o,
						postSEOV2IdCardVariant: r
					} = this.props, a = !Object(I.a)(r) && !Object(I.e)(r);
					return n ? i.a.createElement(i.a.Fragment, null, i.a.createElement(x.a, {
						postId: o.id,
						isOverlay: n,
						listingName: s,
						placement: m.c.BELOW_THE_FOLD,
						placementIndex: e,
						position: j.a.BOTTOM,
						refreshKey: o.id,
						sizes: m.m,
						commentsPageKey: t
					}), i.a.createElement(v.a, null)) : i.a.createElement(O.a, {
						adComponent: a ? i.a.createElement(x.a, {
							postId: o.id,
							isOverlay: n,
							listingName: s,
							placement: m.c.BELOW_THE_FOLD,
							placementIndex: e,
							position: j.a.BOTTOM,
							refreshKey: o.id,
							sizes: m.m,
							commentsPageKey: t
						}) : null
					})
				}
				render() {
					const {
						className: e,
						commentsPageKey: t,
						isLoggedIn: n,
						isOverlay: s,
						post: o,
						postSEOV2IdCardVariant: r,
						subredditId: a,
						subredditName: d,
						widgets: c
					} = this.props;
					let p = 0;
					const h = Object(I.a)(r) || Object(I.e)(r),
						b = i.a.createElement(x.a, {
							postId: o.id,
							isOverlay: s,
							listingName: d,
							placement: m.c.ABOVE_THE_FOLD,
							placementIndex: p++,
							position: j.a.FIRST,
							refreshKey: o.id,
							sizes: m.h,
							commentsPageKey: t
						});
					return i.a.createElement("div", {
						className: Object(l.a)(T.a.outerWrapper, e)
					}, Object(w.j)(o) ? i.a.createElement(N, {
						profileName: d,
						isOverlay: s || !1
					}) : i.a.createElement(g.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: s,
						listingName: d,
						postId: o.id,
						rememberPosition: o.numComments > 0,
						isMinimal: h
					}), i.a.createElement(u.a, {
						className: T.a.communityTipJar,
						subredditId: a
					}), i.a.createElement(S, {
						className: T.a.communityTokens,
						subredditId: a,
						uniqueId: o.id
					}), i.a.createElement(L, {
						className: T.a.leaderboard,
						subredditId: a,
						uniqueId: o.id
					}), b, n && c.map((e, t) => i.a.createElement(C.a, {
						key: "widgetSpacer".concat(t)
					}, i.a.createElement(y.a, {
						subredditName: d,
						widget: e
					}))), o.isSponsored && i.a.createElement(C.a, null, i.a.createElement(f.a, null)), this.renderFooter(p++))
				}
			}
			t.a = R(A)
		},
		"./src/reddit/components/CommentsWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				ContentWrapper: "_1ump7uMrSA43cqok14tPrG",
				contentWrapper: "_1ump7uMrSA43cqok14tPrG",
				TruncatedComments: "_1oTUrVtKJk1ue0r3fe31kJ",
				truncatedComments: "_1oTUrVtKJk1ue0r3fe31kJ",
				MoreCommentsButton: "j9NixHqtN2j8SKHcdJ0om",
				moreCommentsButton: "j9NixHqtN2j8SKHcdJ0om"
			}
		},
		"./src/reddit/components/CommentsWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/models/Subreddit/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/selectors/dismissedTruncationList.ts"),
				h = n("./src/reddit/selectors/experiments/listingBelowAll.ts"),
				b = n("./src/reddit/selectors/experiments/postSeo.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/components/CommentsWrapper/index.m.less"),
				v = n.n(x);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = "500px", f = 3, y = Object(a.c)({
				hasDismissedTruncation: u.b,
				isLoggedIn: g.F,
				isPostSEOEligible: b.d,
				listingBelowAllVariant: h.b,
				postSEOV2TruncatedVariant: b.j
			}), E = Object(r.b)(y);
			class j extends o.a.Component {
				render() {
					const {
						apiPending: e,
						children: t,
						className: n,
						handleViewAllCommentsClick: s,
						hasDismissedTruncation: r,
						innerRef: a,
						isCommentsListTruncated: d,
						isLoggedIn: u,
						isOverlay: b,
						listingBelowAllVariant: g,
						numberOfComments: x,
						onClick: y,
						subredditOrProfile: E
					} = this.props, j = !u, w = Object(h.a)(g), I = !(!E || Object(m.e)(E)), P = d && I && (x >= f && !b || w && !r) && (w || j), _ = P && !e, k = P ? v.a.TruncatedComments : "";
					return o.a.createElement("div", {
						onClick: y,
						ref: a
					}, o.a.createElement("div", {
						className: Object(i.a)(v.a.ContentWrapper, n, k),
						style: {
							"--commentswrapper-gradient-color": Object(p.a)(this.props).body,
							maxHeight: P ? O : "unset"
						}
					}, t), _ && o.a.createElement(l.f, {
						className: v.a.MoreCommentsButton,
						onClick: s,
						"data-redditstyle": !0
					}, C._("View entire discussion ({number of comments} comments)", [C._param("number of comments", Object(c.b)(x))], {
						hk: "2OrRQp"
					})))
				}
			}
			t.a = Object(d.a)(E(j))
		},
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, n) {
			e.exports = {
				mediaContainer: "P8p9Nku0-ZbYCsaCOSE2t",
				Container: "_2ED-O3JtIcOqp8iIL1G5cg",
				container: "_2ED-O3JtIcOqp8iIL1G5cg",
				PostMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				postMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				PostTitle: "_2akYJO5RtMK_ptA408seyG",
				postTitle: "_2akYJO5RtMK_ptA408seyG",
				FlatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				flatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				FlatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				flatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				FlatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				flatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				LinkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				linkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				Content: "_379A_08LTBsR4c8POTldR_",
				content: "_379A_08LTBsR4c8POTldR_",
				ThumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX",
				thumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX"
			}
		},
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/app/strings/index.ts"),
				c = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/Media/index.tsx"),
				p = n("./src/reddit/components/PostMeta/index.tsx"),
				u = n("./src/reddit/components/PostTitle/index.tsx"),
				h = n("./src/reddit/components/SourceLink/index.tsx"),
				b = n("./src/reddit/components/Thumbnail/index.tsx"),
				g = n("./src/reddit/selectors/posts.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/CrosspostBox/index.m.less"),
				C = n.n(v),
				O = n("./src/lib/lessComponent.tsx");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const y = O.a.div("Container", C.a),
				E = O.a.div("PostMetaWrapper", C.a),
				j = O.a.wrapped(u.c, "PostTitle", C.a),
				w = O.a.div("FlatList", C.a),
				I = O.a.div("FlatItem", C.a),
				P = O.a.span("FlatListDotSpacer", C.a),
				_ = O.a.wrapped(y, "LinkContainer", C.a),
				k = O.a.div("Content", C.a),
				T = O.a.div("ThumbnailContainer", C.a),
				S = Object(i.c)({
					isCurrentUserProfilePost: g.h,
					language: x.P,
					post: g.I,
					shouldOpenPostInNewTab: x.T,
					subreddit: g.U
				}),
				L = Object(r.b)(S);
			t.a = L(e => {
				const {
					className: t,
					isCurrentUserProfilePost: n,
					mediaProps: s,
					post: r,
					subreddit: a,
					language: i
				} = e;
				if (!r) return null;
				const d = {
						post: r,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						language: i,
						tooltipType: "".concat("CrosspostBox", "--").concat(s.isListing)
					},
					c = t;
				return r && !r.media ? o.a.createElement(_, {
					className: c
				}, o.a.createElement(k, null, o.a.createElement(E, null, o.a.createElement(p.a, d)), N(r), r.source && o.a.createElement(h.a, {
					post: r
				}), R(e)), F(e)) : o.a.createElement(y, {
					className: c
				}, o.a.createElement(E, null, o.a.createElement(p.a, d)), N(r), M(e), R(e))
			});
			const N = e => o.a.createElement(j, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				M = e => {
					const {
						mediaProps: t,
						post: n
					} = e, s = Object.assign({}, t, {
						post: n,
						crosspost: t.post
					});
					return o.a.createElement("div", null, o.a.createElement(m.a, f({}, s, {
						className: C.a.mediaContainer
					})))
				},
				R = e => {
					const {
						language: t,
						post: n
					} = e, {
						score: s
					} = n;
					return o.a.createElement(w, null, o.a.createElement(I, null, Object(d.c)(t, "posts.points.noun", s, {
						count: Object(l.b)(s)
					})), o.a.createElement(P, null), o.a.createElement(I, null, A(e)))
				},
				A = e => {
					const {
						language: t,
						post: n,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: r
					} = n;
					return o.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(c.a)(n.permalink, !0),
						target: s ? "_blank" : void 0
					}, Object(d.c)(t, "posts.comments.noun", r, {
						count: Object(l.b)(r)
					}))
				},
				F = e => o.a.createElement(T, null, o.a.createElement(b.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/Economics/CommunityTipJar/async.m.less": function(e, t, n) {
			e.exports = {
				loading: "_3gWqsGamiiRTC2h_yOIcgS"
			}
		},
		"./src/reddit/components/Economics/CommunityTipJar/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/featureFlags/component.tsx"),
				d = n("./src/reddit/components/Economics/CommunityTipJar/async.m.less"),
				c = n.n(d);
			const l = Object(r.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t
					} = e;
					return o.a.createElement("div", {
						className: Object(a.a)(t, c.a.loading)
					})
				},
				getComponent: () => Promise.all([n.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), n.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), n.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), n.e("EconomicsCommunityTipJar")]).then(n.bind(null, "./src/reddit/components/Economics/CommunityTipJar/index.tsx")).then(e => e.default)
			});
			t.a = Object(i.a)("spCommunityTipJar", l)
		},
		"./src/reddit/components/Economics/FTUE/TopTippersBenefits/async.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				d = n("./src/reddit/featureFlags/index.ts"),
				c = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
					}
					return n
				};
			const l = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("EconomicsTopTippersPostLeaderboard").then(n.bind(null, "./src/reddit/components/Economics/FTUE/TopTippersBenefits/index.tsx")).then(e => e.default)
			});
			const m = Object(a.c)({
				featureEnabled: d.d.spTopTippers
			});
			t.a = Object(r.b)(m)((function(e) {
				const {
					featureEnabled: t
				} = e, n = c(e, ["featureEnabled"]);
				return e.featureEnabled ? o.a.createElement(l, n) : null
			}))
		},
		"./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less": function(e, t, n) {
			e.exports = {
				badge: "_17rA6EEcc6RUglkZkHnYGO",
				container: "EorVQyBcpl50FYvpH-VTa"
			}
		},
		"./src/reddit/components/Economics/TopTippers/Icon/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/config.ts");
			const a = new Set(["t2_ktrtg"]),
				i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
						t = arguments.length > 1 ? arguments[1] : void 0;
					return "".concat(r.a.assetPath, "/img/badges/topTippers/").concat(t, "/rank-").concat(e, ".png")
				};
			t.a = e => o.a.createElement("img", {
				className: e.className,
				src: i(e.rank, e.creatorId && a.has(e.creatorId) ? e.creatorId : e.subredditId)
			})
		},
		"./src/reddit/components/Economics/TopTippers/PostLeaderboard/async.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				d = n("./src/reddit/featureFlags/index.ts"),
				c = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
					}
					return n
				};
			const l = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("EconomicsTopTippersPostLeaderboard").then(n.bind(null, "./src/reddit/components/Economics/TopTippers/PostLeaderboard/index.tsx")).then(e => e.default)
			});
			const m = Object(a.c)({
				featureEnabled: d.d.spTopTippers
			});
			t.a = Object(r.b)(m)((function(e) {
				const {
					featureEnabled: t
				} = e, n = c(e, ["featureEnabled"]);
				return e.featureEnabled ? o.a.createElement(l, n) : null
			}))
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/eventTools/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				c = n("./src/reddit/components/PostFollow/index.tsx"),
				l = n("./src/reddit/helpers/postCollection.ts"),
				m = n("./src/reddit/helpers/postEvent.ts"),
				p = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = n.n(p);
			const h = i.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: n,
					language: s,
					post: i
				} = e;
				if (!Object(m.a)(i)) return null;
				const p = i && i.eventInfo,
					b = Object(l.a)(i),
					g = p && Object(a.c)(p.eventStart, p.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(u.a.container, t, {
						[u.a.isCompact]: !!n
					})
				}, o.a.createElement(h, {
					className: u.a.eventMetaWrapper
				}, o.a.createElement(d.a, {
					language: s,
					post: i
				}), !b && g && o.a.createElement(c.a, {
					className: u.a.eventFollowButton,
					post: i,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, n) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/eventTools/index.ts"),
				a = (n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./src/app/strings/index.ts")),
				i = n("./src/lib/constants/index.ts");

			function d(e, t) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}
			var c = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = n("./src/reddit/icons/fonts/Calendar/index.tsx"),
				m = n("./src/reddit/icons/fonts/Live/index.tsx"),
				p = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = n.n(p),
				h = n("./src/lib/lessComponent.tsx");
			const b = h.a.span("PostEventFutureText", u.a),
				g = h.a.span("PostEventPastText", u.a),
				x = h.a.span("PostEventNowText", u.a),
				v = h.a.span("Container", u.a),
				C = h.a.wrapped(l.a, "CalendarIcon", u.a),
				O = h.a.wrapped(m.a, "LiveIcon", u.a),
				f = h.a.div("LoadingState", u.a);
			class y extends s.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						language: t,
						post: n
					} = this.props, {
						eventInfo: s
					} = n;
					if (!s) return null;
					const {
						eventEnd: l,
						eventIsLive: m,
						eventStart: p
					} = s, u = Object(r.e)(p, l);
					let h, y;
					if (this.state.mounted || u === r.a.Live) h = function(e, t, n, s) {
						const o = Object(r.e)(e, t),
							c = new Date(e * i.Cb);
						let l;
						if (o === r.a.Live || s) return Object(a.a)(n, "posts.event.inProgress");
						o === r.a.Future ? l = Object(r.d)(e) ? Object(a.a)(n, "posts.event.today") : Object(r.b)(e) >= 5 ? d(c, n) : function(e, t) {
							return e.toLocaleDateString(t, {
								weekday: "long"
							})
						}(c, n) : o === r.a.Past && (l = Object(r.d)(e) ? Object(a.a)(n, "posts.event.today") : d(c, n));
						const m = function(e, t) {
							return e.toLocaleTimeString(t, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(c, n);
						return "".concat(l, " @ ").concat(m)
					}(p, l, t, m);
					else {
						const e = Object(c.a)({
							isLoading: !0
						});
						h = o.a.createElement(f, {
							className: e
						})
					}
					if (m) y = o.a.createElement(x, null, o.a.createElement(O, null), h);
					else if (u === r.a.Future) y = o.a.createElement(b, null, o.a.createElement(C, null), h);
					else {
						if (u !== r.a.Past) return null;
						y = o.a.createElement(g, null, o.a.createElement(C, null), h)
					}
					return o.a.createElement(v, {
						className: e
					}, y)
				}
			}
			t.a = y
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, n) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo",
				outboundLinkIcon: "_1zB4YvOwHPxdPEXG2CYhKB"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				c = n("./src/reddit/i18n/utils.ts"),
				l = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/controls/OutboundLink/index.tsx"),
				p = n("./src/reddit/helpers/postHasSelfText/index.ts"),
				u = n("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				h = n("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				b = n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				g = n("./src/reddit/icons/fonts/helpers.tsx"),
				x = n("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				v = n.n(x);
			var C = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
					className: "".concat(Object(g.b)("expandoMediaLightbox"), " ").concat(e.className),
					onClick: e.onClick
				}), "LightboxIcon", v.a),
				O = n("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				f = n("./src/reddit/icons/fonts/Gif/index.tsx"),
				y = n("./src/reddit/icons/fonts/Link/index.tsx"),
				E = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				j = n("./src/reddit/icons/fonts/Photos/index.tsx"),
				w = n("./src/reddit/icons/fonts/Text/index.tsx"),
				I = n("./src/reddit/models/Media/index.ts"),
				P = n("./src/reddit/components/ExpandoButton/index.m.less"),
				_ = n.n(P);
			const k = Object(r.b)(null, (e, t) => ({
					toggle: () => e(Object(l.s)({
						postId: t.post.id
					}))
				})),
				T = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const n = Object(i.a)(_.a.icon, _.a.hideOnHover);
					if (t) return o.a.createElement(u.a, {
						className: n
					});
					switch (e) {
						case I.n.GIFVIDEO:
							return o.a.createElement(f.a, {
								className: n
							});
						case I.n.IMAGE:
							return o.a.createElement(j.a, {
								className: n
							});
						case I.n.TEXT:
						case I.n.RTJSON:
							return o.a.createElement(w.a, {
								className: n
							});
						case I.n.VIDEO:
							return o.a.createElement(O.a, {
								className: n
							});
						case I.n.EMBED:
						default:
							return o.a.createElement(y.a, {
								className: n
							})
					}
				};
			t.a = k(e => {
				const {
					className: t,
					crosspost: n,
					enableCrosspostIcon: s,
					isExpanded: r,
					post: l,
					toggle: u,
					useMediaIcons: g
				} = e, x = n || l, v = s && !!n;
				return x.media && !(("rtjson" === x.media.type || "text" === x.media.type) && !Object(p.a)(x)) ? o.a.createElement("button", {
					"aria-expanded": r,
					"aria-haspopup": !0,
					"aria-label": Object(c.c)("Expand content"),
					className: Object(i.a)(t, _.a.outer),
					"data-click-id": r ? "expando_close" : "expando_open",
					onClick: u
				}, r ? o.a.createElement(h.a, {
					className: _.a.icon
				}) : g ? o.a.createElement(o.a.Fragment, null, T(x.media && x.media.type, v), o.a.createElement(b.a, {
					className: Object(i.a)(_.a.icon, _.a.showOnHover)
				})) : o.a.createElement(b.a, {
					className: _.a.icon
				})) : x.source && x.source.url ? o.a.createElement(m.a, {
					"aria-label": Object(c.c)("Open external content"),
					className: Object(i.a)(t, _.a.outer),
					"data-click-id": "expando_open",
					href: x.source.url,
					isSponsored: l.isSponsored,
					source: l.source,
					target: "_blank"
				}, o.a.createElement(E.a, {
					className: Object(i.a)(_.a.icon, _.a.outboundLinkIcon)
				})) : o.a.createElement(a.a, {
					"aria-label": Object(c.c)("View content"),
					className: Object(i.a)(t, _.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(x.permalink),
					rel: "nofollow"
				}, o.a.createElement(C, {
					className: _.a.icon
				}))
			})
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, n) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, n) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/FocusableContent/index.m.less"),
				d = n.n(i);
			t.a = a.a.wrapped(e => o.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[d.a.isFocused]: e.isFocused,
					[d.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", d.a)
		},
		"./src/reddit/components/Governance/CommunityCard/CommunityTokens/BlockchainWalletInfo/index.m.less": function(e, t, n) {
			e.exports = {
				publicAddressSection: "e0Te0bBkUsDG6nuCjsFky",
				publicAddress: "_3GWjMTgC3OErgLOUT3TdHw",
				yourWalletAddress: "_2ZVoGra9kSZDSEzU8EoxXp",
				settingsButton: "g2yJ86Mg6P4M5NIoQA0Ve",
				settingsIcon: "_1ZIhSQEemVyqYNEOTZVZGv"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/CommunityTokens/Risk/index.m.less": function(e, t, n) {
			e.exports = {
				alertIcon: "_281dcYAIoQvZtLs7iI7QLT",
				risk: "_1r7M4su-D_hCOMd066XY3J",
				riskBody: "_12gDkO_ygs4ikCeyu5bcVg",
				riskTitle: "_3iYb38SYPwjAd1VG859AKs"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/CommunityTokens/index.m.less": function(e, t, n) {
			e.exports = {
				overflowingText: "_3s4m8dsZEYcHZ4ojNFUV0R",
				cell: "_1-v1Zgj9IOmc-oaS_dfHfI",
				cellBottomLine: "_1YrPtUZyIgZmt7BoC3IOjC",
				cellContainer: "_3y3jYnCjkWtjpibBnc9e3l",
				cellTopLine: "-pS2f0b04dtavABCVdrie",
				explanation: "_1n5fyOsQxmVlxXd1xuw6fH",
				title: "_2Q8Se5aIjJDpE5JnGoGI5R",
				token: "_2tQrDQoIjV3V6CMgrLYXU3",
				tokenCell: "_2rBuuOwPxb-X6wEPWDBmYH",
				button: "_1Vg1f_Cp7IF32wBdY1l2Gq"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/LatestProposals/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3WnHen22bLKwTkOL3W6F_D",
				link: "_3LjXe6j5_bQ3U8GZLY0HYO",
				showAll: "eRbX9WCebKIuLXdJIwNjK",
				title: "_3il8HJMlHzKppQleJjuboQ"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/index.m.less": function(e, t, n) {
			e.exports = {
				loading: "Jfh68QhZqpLgByZUbKyD1",
				section: "_3o2O8sLNM51xpdzuDH-ocD"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/index.tsx": function(e, t, n) {
			"use strict";
			var s, o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = n("./src/reddit/i18n/utils.ts"),
				l = n("./src/reddit/selectors/gov.ts"),
				m = n("./src/app/strings/index.ts"),
				p = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/prettyPrintNumber/index.ts"),
				h = n("./src/reddit/actions/governance/index.ts"),
				b = n("./src/reddit/actions/login.ts"),
				g = n("./src/reddit/components/Governance/Token/index.tsx"),
				x = n("./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts"),
				v = n("./src/reddit/contexts/PageLayer/index.tsx"),
				C = n("./src/reddit/controls/Button/index.tsx"),
				O = n("./src/reddit/endpoints/governance/crypto.ts"),
				f = n("./src/reddit/helpers/governance/tokens.ts"),
				y = n("./src/reddit/i18n/components.tsx");
			! function(e) {
				e.Initial = "initial_distribution", e.Mod = "moderator_election"
			}(s || (s = {}));
			var E = n("./src/reddit/selectors/user.ts"),
				j = n("./src/higherOrderComponents/asTooltip.tsx"),
				w = n("./src/lib/copyToClipboard/index.ts"),
				I = n("./src/reddit/actions/governance/errorToast.ts"),
				P = n("./src/reddit/actions/toaster.ts"),
				_ = n("./src/reddit/actions/tooltip.ts"),
				k = n("./src/reddit/contexts/ApiContext.tsx"),
				T = n("./src/reddit/controls/Dropdown/index.tsx"),
				S = n("./src/reddit/controls/Dropdown/Row.tsx"),
				L = n("./src/reddit/helpers/governance/ethereum.ts"),
				N = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				M = n("./src/reddit/models/Toast/index.ts"),
				R = n("./src/reddit/selectors/tooltip.ts"),
				A = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/BlockchainWalletInfo/index.m.less"),
				F = n.n(A);
			const B = Object(j.a)(T.a),
				D = "BlockchainWalletInfo--SettingsMenu";
			class W extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onCopyToClipboard = () => {
						Object(w.a)(this.props.publicAddress || "")
					}, this.onRemoveMyWallet = async () => {
						const e = await Object(O.b)(this.props.apiContext(), this.props.provider, this.props.publicAddress);
						e.ok ? this.props.onWalletRemoved() : this.props.onGovernanceError(e.error)
					}
				}
				render() {
					const {
						dropdownIsOpen: e,
						onOpenDropdown: t,
						provider: n,
						publicAddress: s,
						token: o,
						tokenName: a
					} = this.props;
					if (!s) return null;
					const i = n === O.a.Ethereum || n === O.a.Rinkeby,
						d = n === O.a.Stellar;
					return r.a.createElement("div", {
						className: F.a.publicAddressSection
					}, r.a.createElement("div", {
						className: F.a.publicAddress,
						title: s
					}, function(e, t) {
						switch (t) {
							case O.a.Stellar:
								return e.slice(0, 6) + "..." + e.slice(e.length - 6);
							default:
								return e
						}
					}(s, n)), r.a.createElement("div", {
						className: F.a.yourWalletAddress
					}, r.a.createElement(y.c, null, "Your Wallet Address"), (i || d) && r.a.createElement("button", {
						className: F.a.settingsButton,
						title: Object(c.c)("Wallet address settings"),
						role: "menu",
						onClick: t,
						id: D
					}, r.a.createElement(N.a, {
						className: F.a.settingsIcon
					})), i && r.a.createElement(B, {
						tooltipId: D,
						isOpen: e,
						renderContentsHidden: !0
					}, r.a.createElement(S.b, {
						displayText: Object(c.c)("Copy My Wallet Address"),
						onClick: this.onCopyToClipboard
					}), n && r.a.createElement(S.b, {
						displayText: Object(c.c)("Remove My Wallet"),
						onClick: this.onRemoveMyWallet
					}), o && r.a.createElement(S.b, {
						displayText: Object(c.c)("Track ".concat(Object(c.b)("tokenName", a), " in MetaMask")),
						onClick: () => Object(L.i)(o)
					})), d && r.a.createElement(B, {
						tooltipId: D,
						isOpen: e,
						renderContentsHidden: !0
					}, r.a.createElement(S.b, {
						displayText: Object(c.c)("Copy My Wallet Address"),
						onClick: this.onCopyToClipboard
					}))))
				}
			}
			const H = Object(i.c)({
					dropdownIsOpen: Object(R.b)(D),
					provider: l.a,
					token: l.q,
					tokenName: l.o
				}),
				V = Object(a.b)(H, (e, t) => ({
					onGovernanceError: t => {
						Object(I.a)(e, t)
					},
					onOpenDropdown: () => e(Object(_.h)({
						tooltipId: D
					})),
					onWalletRemoved: () => {
						e(Object(h.j)({
							subredditId: t.subredditId
						})), e(Object(P.e)({
							kind: M.b.SuccessCommunityGreen,
							text: Object(c.c)("Wallet removed successfully!")
						}))
					}
				}));
			var U = Object(k.b)(V(W)),
				G = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				K = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/Risk/index.m.less"),
				q = n.n(K);

			function z(e) {
				return r.a.createElement("div", {
					className: q.a.risk
				}, r.a.createElement("div", {
					className: q.a.riskTitle
				}, r.a.createElement(G.a, {
					className: q.a.alertIcon
				}), e.title), r.a.createElement("div", {
					className: q.a.riskBody
				}, e.body))
			}
			var Y = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/index.m.less"),
				J = n.n(Y);
			class Q extends r.a.PureComponent {
				componentDidMount() {
					const {
						pageLayer: e,
						provider: t,
						wallet: n
					} = this.props, s = n && n.publicAddress;
					Object(x.b)(e) && t && !s && this.props.onOpenRegistrationModal()
				}
				render() {
					const {
						className: e,
						distribution: t,
						isLoggedIn: n,
						language: o,
						onOpenLoginModal: a,
						onOpenRegistrationModal: i,
						onOpenTransferModal: d,
						provider: c,
						subredditId: l,
						tokenDisplayConversion: h,
						tokenName: b,
						useCrypto: x,
						wallet: v
					} = this.props, E = v && v.inactive && function(e, t, n) {
						const o = e.actionScheduledAt - Date.now(),
							r = Math.max(1, Math.floor(o / p.w)),
							a = 1 !== r ? "gov.pointsDecay.inactive.time.plural" : "gov.pointsDecay.inactive.time.singular",
							i = Object(m.a)(t, a, {
								numDays: r
							});
						switch (e.reason) {
							case s.Initial:
								return {
									title: Object(m.a)(t, "gov.pointsDecay.inactive.title", {
										tokenName: n
									}), body: Object(m.a)(t, "gov.pointsDecay.inactive.body", {
										time: i,
										tokenName: n
									})
								};
							case s.Mod:
								return {
									title: Object(m.a)(t, "gov.pointsDecay.election.title"), body: Object(m.a)(t, "gov.pointsDecay.election.body", {
										time: i,
										tokenName: n
									})
								}
						}
					}(v.inactive, o, b), j = v && v.publicAddress, w = c === O.a.Ethereum || c === O.a.Rinkeby;
					return r.a.createElement("div", {
						className: e
					}, r.a.createElement("div", {
						className: J.a.title
					}, b), r.a.createElement("div", {
						className: J.a.cellContainer
					}, v && X(r.a.createElement("div", {
						className: J.a.tokenCell
					}, r.a.createElement(g.a, {
						className: J.a.token,
						subredditId: l
					}), Object(u.a)(Object(f.b)(v.amount, h))), Object(m.a)(o, "sidebar.gov.yourTokens", {
						tokenName: b
					})), t && X(Object(u.a)(Object(f.b)(t.totalAvailable, h)), Object(m.a)(o, "sidebar.gov.tokensIssued"))), E && r.a.createElement(z, {
						body: E.body,
						title: E.title
					}), r.a.createElement("div", {
						className: J.a.explanation
					}, Object(m.a)(o, "sidebar.gov.tokenExplanation", {
						tokenName: b
					})), c && r.a.createElement(U, {
						publicAddress: j,
						subredditId: l
					}), c && !j && w && r.a.createElement(C.f, {
						className: J.a.button,
						onClick: n ? i : a
					}, r.a.createElement(y.c, null, "register")), v && !x && r.a.createElement(C.i, {
						className: J.a.button,
						onClick: d
					}, r.a.createElement(y.c, null, "send")))
				}
			}

			function X(e, t) {
				return r.a.createElement("div", {
					className: J.a.cell
				}, r.a.createElement("div", {
					className: J.a.cellTopLine
				}, e), r.a.createElement("div", {
					className: J.a.cellBottomLine
				}, t))
			}
			const Z = Object(i.c)({
				isLoggedIn: E.G,
				provider: l.a,
				tokenName: l.o,
				tokenDisplayConversion: l.n,
				language: e => e.user.language,
				useCrypto: l.r
			});
			var $ = Object(a.b)(Z, e => ({
					onOpenLoginModal: () => e(Object(b.e)()),
					onOpenRegistrationModal: () => e(Object(h.i)()),
					onOpenTransferModal: () => e(Object(h.h)())
				}))(Object(v.t)()(Q)),
				ee = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.array.sort.js"), n("./node_modules/react-router-dom/esm/react-router-dom.js")),
				te = n("./src/lib/classNames/index.ts"),
				ne = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				se = n("./src/reddit/actions/subreddit.ts"),
				oe = n("./src/reddit/components/Governance/CommunityCard/LatestProposals/index.m.less"),
				re = n.n(oe);
			const ae = Object(i.c)({
				proposals: (e, t) => Object.keys(e.polls.models).map(t => e.polls.models[t]).filter(e => e.subredditId === t.subredditId).sort((e, t) => e.createdAt > t.createdAt ? -1 : e.createdAt < t.createdAt ? 1 : 0).map(t => e.posts.models[t.postId]).filter(Boolean).slice(0, 5)
			});
			var ie = Object(v.t)()(Object(a.b)(ae, (e, t) => ({
					onFilterProposals: () => e(Object(se.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					return Object(v.E)(e.pageLayer) && e.proposals.length ? r.a.createElement("div", {
						className: Object(te.a)(e.className, re.a.container)
					}, r.a.createElement("div", {
						className: re.a.title
					}, r.a.createElement(y.c, null, "Latest Polls")), e.proposals.map(e => r.a.createElement(ee.a, {
						className: re.a.link,
						key: e.permalink,
						title: e.title,
						to: Object(ne.a)(e.permalink)
					}, e.title)), r.a.createElement("a", {
						className: re.a.showAll,
						onClick: e.onFilterProposals
					}, r.a.createElement(y.c, null, "show all"))) : null
				}))),
				de = n("./src/reddit/components/Governance/CommunityCard/index.m.less"),
				ce = n.n(de);
			const le = Object(i.c)({
				tokenName: l.o,
				distribution: (e, t) => e.subreddits.gov.distributions[t.subredditId],
				wallet: l.g,
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			t.a = Object(a.b)(le)((function(e) {
				return r.a.createElement(d.a, {
					className: e.className,
					title: Object(c.c)("Subreddit Points")
				}, e.distribution ? r.a.createElement(o.Fragment, null, r.a.createElement($, {
					className: ce.a.section,
					distribution: e.distribution,
					subredditId: e.subredditId,
					wallet: e.wallet
				}), e.subreddit && r.a.createElement(ie, {
					className: ce.a.section,
					subredditId: e.subreddit.id
				})) : r.a.createElement("div", {
					className: ce.a.loading
				}))
			}))
		},
		"./src/reddit/components/Governance/Leaderboard/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Leaderboard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-Leaderboard").then(n.bind(null, "./src/reddit/components/Governance/Leaderboard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Leaderboard/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = o
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2y2WPgX5vi2SAfi_nz_Q7B"
			}
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/i18n/components.tsx"),
				i = n("./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less"),
				d = n.n(i);
			t.a = function(e) {
				return o.a.createElement("div", {
					className: Object(r.a)(d.a.container, e.className)
				}, o.a.createElement(a.c, null, "Error: Could not load poll"))
			}
		},
		"./src/reddit/components/Governance/Proposal/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Proposal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-Proposal").then(n.bind(null, "./src/reddit/components/Governance/Proposal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Proposal/index.tsx"
				}
			})
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				d = n("./src/reddit/selectors/gov.ts");
			const c = Object(a.c)({
				tokenSymbol: d.p
			});
			t.a = Object(r.b)(c)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return o.a.createElement("img", {
					className: e.className,
					src: "".concat(i.a.assetPath, "/").concat(t)
				})
			}))
		},
		"./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js");
			var s = n("./src/lib/addQueryParams/index.ts");
			const o = "metamaskInstalled";

			function r() {
				window.location.replace(Object(s.a)(window.location.href, {
					[o]: "true"
				}))
			}

			function a(e) {
				return !!(e && e.queryParams && e.queryParams[o])
			}
		},
		"./src/reddit/components/HeaderImage/index.m.less": function(e, t, n) {
			e.exports = {
				Planet: "xAmHTHwvPxxv5jpbb68XN",
				planet: "xAmHTHwvPxxv5jpbb68XN",
				SubredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				subredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				HeaderText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				headerText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				HeaderUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				headerUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				Container: "_2L5G9B5yaoqW3IegiYN-FL",
				container: "_2L5G9B5yaoqW3IegiYN-FL",
				HeaderContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				headerContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				fullScreenDisabled: "_1yF58T8cn1Lb1f5no79sl8",
				useOverlay: "_1lDljcXh3IMpCeypDtnDAr",
				HeaderContent: "_2ejRlONMr5WoDRgyd4GRyM",
				headerContent: "_2ejRlONMr5WoDRgyd4GRyM",
				hoverHeaderContent: "wyBqMGsbezX5QI0xVtegK",
				PositionedImage: "_26j3FxU4jTfjqi8m96HMmI",
				positionedImage: "_114maV-96nVPek5oReA0kO",
				hoverPositionedImage: "_2L0wcm3McgWbJBT9_UHWyU"
			}
		},
		"./src/reddit/components/HeaderImage/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/constants/screenWidths.ts"),
				l = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				m = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				p = n("./src/reddit/models/Theme/index.ts"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = n("./src/reddit/components/HeaderImage/index.m.less"),
				b = n.n(h);
			const g = d.a.wrapped(m.a, "Planet", b.a),
				x = d.a.div("SubredditIcon", b.a),
				v = d.a.div("PositionedImage", b.a),
				C = d.a.div("HeaderContent", b.a),
				O = d.a.div("HeaderContainer", b.a),
				f = d.a.span("HeaderText", b.a),
				y = d.a.wrapped(r.a, "HeaderUrl", b.a),
				E = d.a.span("Container", b.a),
				j = Object(i.a)(e => {
					const t = Object(p.e)(e.headerText, e.prefixedHeaderText, Object(u.a)(e).banner.communityNameFormat || ""),
						n = Object(l.a)(e),
						s = Object(u.a)(e).banner.positionedImageAlignment,
						r = Object(u.a)(e).banner.positionedImage,
						i = Object(u.a)(e).banner.secondaryBannerPositionedImage;
					let d;
					switch (s) {
						case "right":
							d = {
								right: "-8px"
							};
							break;
						case "centered":
							d = {
								left: "50%",
								transform: "translate(-50%, -50%)"
							};
							break;
						default:
							d = {
								left: "-8px"
							}
					}
					const m = !!r && !!i && "left" === s,
						h = Object(p.g)(Object(u.a)(e).banner.backgroundColor, Object(u.a)(e).banner.backgroundImage, Object(u.a)(e).banner.backgroundImagePosition),
						j = parseInt(Object(u.a)(e).banner.iconDimensions.customSize, 10),
						w = "".concat(4 + j, "px");
					return o.a.createElement(E, {
						style: {
							background: h,
							backgroundPosition: "center top",
							height: "".concat(Object(u.a)(e).banner.height, "px")
						}
					}, o.a.createElement(y, {
						className: e.className,
						to: e.url
					}, o.a.createElement(O, {
						className: Object(a.a)({
							[b.a.fullScreenDisabled]: !e.disableFullscreen,
							[b.a.useOverlay]: !!Object(u.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? "".concat(e.maxWidth || c.a, "px") : "100%"
						}
					}, !e.isTopBannerVariant && o.a.createElement(C, {
						className: Object(a.a)({
							[b.a.hoverHeaderContent]: m
						})
					}, e.theme && Object(u.a)(e).banner.showCommunityIcon && (n ? o.a.createElement(x, {
						style: {
							backgroundImage: "url(".concat(n, ")"),
							borderRadius: "".concat(Object(u.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: w,
							width: w
						}
					}) : o.a.createElement(g, {
						style: {
							padding: "".concat(Object(u.a)(e).banner.iconDimensions.padding, "px"),
							borderRadius: "".concat(Object(u.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: w,
							width: w
						}
					})), o.a.createElement(f, {
						style: {
							paddingTop: 32 === j ? "4px" : "14px"
						}
					}, t)), o.a.createElement(v, {
						className: Object(a.a)(b.a.PositionedImage, {
							[b.a.positionedImage]: !!r,
							[b.a.hoverPositionedImage]: !!r && !!i
						}),
						style: Object.assign({}, d, {
							height: "".concat(Object(u.a)(e).banner.positionedImageHeight, "px")
						})
					}))))
				});
			t.a = j
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, n) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/Inline/index.tsx"),
				r = n("./src/reddit/components/Hovercards/helpers.m.less"),
				a = n.n(r);
			const i = s.a.wrapped(o.a, "UserActionItem", a.a),
				d = e => {
					const {
						author: t,
						itemId: n,
						subredditName: s,
						tooltipIdPrefix: o,
						tooltipType: r
					} = e;
					let a = o;
					return n && (a = "".concat(a, "--").concat(n)), r && (a = "".concat(a, "--").concat(r)), t && (a = "".concat(a, "--").concat(t)), s && (a = "".concat(a, "--").concat(s)), a
				}
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("IdCard").then(n.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				i = n.n(a),
				d = n("./src/lib/lessComponent.tsx");
			const c = d.a.div("IconWrapper", i.a),
				l = d.a.div("TextWrapper", i.a);
			t.a = e => {
				const {
					className: t,
					color: n,
					icon: s,
					subtitle: a,
					title: d
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(t, i.a.wrapper),
					style: n && {
						borderColor: n
					} || {}
				}, o.a.createElement("div", {
					className: i.a.leftSideRectangle,
					style: n && {
						backgroundColor: n
					} || {}
				}), s ? o.a.createElement(c, null, s) : o.a.createElement(c, null), o.a.createElement(l, null, o.a.createElement("div", {
					className: i.a.title
				}, d), a && o.a.createElement("div", {
					className: i.a.subtitle
				}, a)))
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less": function(e, t, n) {
			e.exports = {
				BannerBase: "_1EjIqPTCvhReSe3IjZptiB",
				bannerBase: "_1EjIqPTCvhReSe3IjZptiB",
				ArchivedIcon: "_3Apkcb3itLCGec85v2ZzFz",
				archivedIcon: "_3Apkcb3itLCGec85v2ZzFz"
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/colors.ts"),
				a = n("./src/reddit/i18n/utils.ts"),
				i = n("./src/reddit/icons/fonts/Archived/index.tsx"),
				d = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				c = n("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less"),
				l = n.n(c);
			t.a = () => o.a.createElement(d.a, {
				className: l.a.BannerBase,
				color: r.a.locked,
				icon: o.a.createElement(i.a, {
					className: l.a.ArchivedIcon
				}),
				subtitle: Object(a.c)("New comments cannot be posted and votes cannot be cast"),
				title: Object(a.c)("This thread is archived")
			})
		},
		"./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less": function(e, t, n) {
			e.exports = {
				lockIcon: "_26YMkU38Pb6t5wXIJSne-H",
				bannerBase: "jf95ZrrjIs2i--Ud8Kvb7"
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/linkMatchers/customLinks.ts"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/i18n/utils.ts"),
				d = n("./src/reddit/models/Subreddit/index.ts"),
				c = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				l = n("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less"),
				m = n.n(l);
			const p = o.a.createElement(e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M16,9H15V7A5,5,0,0,0,5,7V9H4a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V10A1,1,0,0,0,16,9ZM7,7a3,3,0,0,1,6,0V9H7Z"
			})), {
				className: m.a.lockIcon
			});
			t.a = e => {
				let {
					subredditOrProfile: t
				} = e;
				const n = t ? Object(i.c)("This thread has been locked by the moderators of ".concat(Object(i.b)("communityname", (e => Object(d.e)(e) ? r.d.profile : r.d.subreddit)(t) + t.name))) : Object(i.c)("This thread has been locked");
				return o.a.createElement(c.a, {
					className: m.a.bannerBase,
					color: a.a.locked,
					icon: p,
					subtitle: Object(i.c)("New comments cannot be posted"),
					title: n
				})
			}
		},
		"./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less": function(e, t, n) {
			e.exports = {
				contestModeEnabled: "_3Jf9vrUhPCp1M6DPL_bjy9",
				TrophyIcon: "_3v30vS-N87epKUIqWSlBm1",
				trophyIcon: "_3v30vS-N87epKUIqWSlBm1"
			}
		},
		"./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				d = n("./src/reddit/i18n/utils.ts"),
				c = n("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less"),
				l = n.n(c);
			const m = a.a.wrapped(e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M32,7.8l0.5-5.3h-25L8,7.8c-3.2,0.8-5.5,3.7-5.5,7.2v0.1c0,4,3.1,7.2,7,7.4l0,0c0.3,2.8,2.7,5,5.5,5h0.1 c1.3,0,2.4,1.1,2.4,2.4v0.1c0,1.3-1.1,2.4-2.4,2.4H15c-2.7,0-4.9,2.2-4.9,4.9v0.1h20v-0.1c0-2.7-2.2-4.9-4.9-4.9h-0.1 c-1.3,0-2.4-1.1-2.4-2.4v-0.1c0-1.3,1.1-2.4,2.4-2.4H25c2.8,0,5.2-2.2,5.5-5l0,0c3.9-0.2,7-3.4,7-7.4v-0.1 C37.5,11.5,35.2,8.6,32,7.8z M4.5,15.1v-0.1c0-2.4,1.6-4.4,3.7-5.1l1.1,10.7C6.6,20.1,4.5,17.9,4.5,15.1z M35.5,15.1 c0,2.8-2.1,5.1-4.8,5.4l1.1-10.7c2.2,0.7,3.7,2.8,3.7,5.1V15.1z"
			}))), "TrophyIcon", l.a);
			t.a = Object(r.a)(e => {
				const {
					hasModeratorPostPermissions: t,
					theme: n
				} = e, s = t ? Object(d.c)("Comments are in random ordering and vote scores are hidden to non-mods") : Object(d.c)("Comments are in random ordering and vote scores are hidden");
				return o.a.createElement(i.a, {
					className: l.a.contestModeEnabled,
					color: n && n.newCommunityTheme.linkText,
					icon: o.a.createElement(m, null),
					subtitle: s,
					title: Object(d.c)("This post has contest mode enabled")
				})
			})
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less": function(e, t, n) {
			e.exports = {
				BannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				bannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				icon: "S7CavmS-v3qdubhT9asIc",
				link: "FmwbWt4ZwkxbQbR-0vj1G"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3UJGTKmHd4TVKyOdhiMAJ1",
				rawHtmlDisplay: "s2P-f2c3l2Irco5Ru0S5J",
				link: "_1eRb8-B7kEgkwxWFSWuVUk",
				icon: "WCZvfrkaO-Zq7vsDKOAdS"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/app/strings/index.ts"),
				d = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = n("./src/reddit/constants/colors.ts"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				m = n("./src/reddit/i18n/components.tsx"),
				p = n("./src/reddit/i18n/utils.ts"),
				u = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				x = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				v = n.n(x);
			const C = o.a.createElement(u.a, {
					className: v.a.icon
				}),
				O = Object(a.c)({
					language: b.P,
					subreddit: h.y,
					subredditAboutInfo: h.v
				}),
				f = Object(r.b)(O);
			t.a = f(e => {
				const {
					subreddit: t,
					subredditAboutInfo: n,
					language: s
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const r = n && n.quarantineMessageHtml,
					a = n && n.quarantineMessage || Object(i.a)(s, "contentGate.quarantinedSubreddit.quarantineMsg");
				return o.a.createElement(g.a, {
					className: v.a.container,
					color: c.a.quarantine,
					icon: C,
					subtitle: o.a.createElement("span", null, o.a.createElement(m.c, null, "This community is"), " ", o.a.createElement("a", {
						className: v.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, o.a.createElement(m.c, null, "quarantined")), ": ", r ? o.a.createElement(d.a, {
						className: v.a.rawHtmlDisplay,
						html: r
					}) : a, " ", o.a.createElement(l.a, {
						className: v.a.link,
						to: "/"
					}, o.a.createElement(m.c, null, "Click to return home."))),
					title: Object(p.c)("Community Quarantined")
				})
			})
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				i = n("./src/reddit/helpers/overlay/index.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var c = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
					}
					return n
				},
				l = e => {
					const {
						children: t,
						className: n,
						to: s
					} = e, r = c(e, ["children", "className", "to"]), l = Object(i.b)(s);
					return o.a.createElement(a.a, d({
						className: n,
						to: l
					}, r), t)
				};

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			t.a = e => {
				const {
					isOverlay: t
				} = e, n = p(e, ["isOverlay"]), s = t ? l : r.a;
				return o.a.createElement(s, m({}, n, {
					children: n.children,
					className: n.className,
					onClick: n.onClick,
					to: n.to
				}))
			}
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/PostList/index.tsx"),
				o = n("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(o.a)(s.a)
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				i = n("./src/reddit/components/Thumbnail/index.tsx"),
				d = n("./src/reddit/constants/posts.ts"),
				c = n("./src/reddit/helpers/trackers/post.ts"),
				l = n("./src/reddit/models/Subreddit/index.ts"),
				m = n("./src/reddit/components/MediumPost/index.m.less"),
				p = n.n(m);
			t.a = e => {
				let {
					crosspost: t,
					post: n,
					forceShowNSFW: s,
					redditStyle: m,
					shouldShowSubscribeButton: u,
					subredditOrProfile: h,
					templatePlaceholderImage: b
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(p.a.thumbnailContainer, {
						[p.a.mShowingButtonOrOverflow]: u
					})
				}, o.a.createElement("div", {
					className: p.a.thumbnailContainerRow
				}, u && h && o.a.createElement(a.a, {
					className: p.a.subscribeButton,
					getEventFactory: e => Object(c.f)(n.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: h.name,
						type: Object(l.e)(h) ? d.a.PROFILE : d.a.SUBREDDIT
					},
					postId: n.id
				})), o.a.createElement(i.a, {
					crosspost: t,
					post: n,
					redditStyle: m,
					forceShowNSFW: s,
					templatePlaceholderImage: b
				}))
			}
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, n) {
			e.exports = {
				mainBody: "yn9v_hQEhjlRNZI0xspbA",
				modModeReports: "_3RpVs_MuohyWxfQ8DMI1hz",
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
				chain: "vLpzNkGe1yVXuRgtBVQWk",
				thumbnailContainerRow: "ly1p6kYBCM7ZqoRjGeAhw",
				postOverflow: "x4YOGJe9jA6wgzmbyKZK0",
				postSource: "_2BgmOVmNwratQ_mDI9DaHR"
			}
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, n) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/loadWithRetries/index.ts"),
				d = n("./src/reddit/i18n/components.tsx"),
				c = n("./src/reddit/components/ModModeReports/index.m.less"),
				l = n.n(c);
			const m = a.a.div("Text", l.a),
				p = a.a.div("Placeholder", l.a),
				u = Object(r.a)({
					ErrorComponent: e => {
						let {
							className: t
						} = e;
						return o.a.createElement(p, {
							className: t
						})
					},
					getComponent: () => Object(i.a)(() => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							className: t
						} = e;
						return o.a.createElement(p, {
							className: t
						}, o.a.createElement(m, null, o.a.createElement(d.c, null, "Loading reports…")))
					}
				});
			t.a = e => o.a.createElement(u, e)
		},
		"./src/reddit/components/NativeBannerAd/index.m.less": function(e, t, n) {
			e.exports = {
				BannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG",
				bannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG"
			}
		},
		"./src/reddit/components/PostContent/index.m.less": function(e, t, n) {
			e.exports = {
				content: "_3UMN4RCVY5288m_fOZlkcg",
				controlsContainer: "_1hwEKkB_38tIoal6fcdrt9",
				postNumbers: "_1svxG6WJ6vr-T9iN3rf5M6",
				flatlistContainer: "UPYG6UwB7XqTeGj4a4vBr",
				mainBody: "_3MC4c3Q_Y41YKtl1TcvyMt",
				leftPadding: "_1mK-LVHGTTlcFpMsjItjYJ",
				noProposal: "_13LHQz0igp-olmn_mDhJ7B",
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
				ProposalContainer: "_1a2Qb0YJU4-QdYRoANb0J-",
				proposalContainer: "_1a2Qb0YJU4-QdYRoANb0J-",
				isEditing: "_1_-TcT_H2BAsf4uFtfvDf9",
				LargePostMedia: "_1Ap4F5maDtT1E1YuCiaO0r",
				largePostMedia: "_1Ap4F5maDtT1E1YuCiaO0r",
				isCommentsPage: "D3IL3FD0RFy_mkKLPwL4",
				ClassicThumbnail: "_2yiWJ30hPmljAALgG9InUz",
				classicThumbnail: "_2yiWJ30hPmljAALgG9InUz",
				ThumbLink: "_3SCgQPuxXigmV7fEOhNHCN",
				thumbLink: "_3SCgQPuxXigmV7fEOhNHCN"
			}
		},
		"./src/reddit/components/PostContent/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/timeAgo/index.ts"),
				m = n("./src/reddit/helpers/canRenderThumbnail.ts"),
				p = n("./src/reddit/models/User/index.ts"),
				u = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				h = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				b = n("./src/reddit/helpers/path/index.ts"),
				g = n("./src/reddit/helpers/trackers/lightbox.ts"),
				x = n("./src/reddit/helpers/trackers/post.ts"),
				v = n("./src/reddit/actions/post.ts"),
				C = n("./src/reddit/actions/tooltip.ts"),
				O = n("./node_modules/lodash/find.js"),
				f = n.n(O),
				y = n("./node_modules/react-motion/lib/react-motion.js");
			const E = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				j = "expando_content",
				w = {},
				I = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					const n = f()(e, {
							key: j
						}),
						s = n && n.style ? n.style.opacity : 0;
					return t ? s >= 1 ? [{
						key: j,
						style: {
							opacity: 1
						}
					}] : s > 0 ? [{
						key: j,
						style: {
							opacity: Object(y.spring)(1, E)
						}
					}] : [{
						key: j,
						style: {
							opacity: .1
						}
					}] : s < .1 ? [] : [{
						key: j,
						style: {
							opacity: Object(y.spring)(0, E)
						}
					}]
				};
			class P extends o.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), w), this.state = {
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
						className: n,
						content: s
					} = this.props;
					return o.a.createElement(y.TransitionMotion, {
						styles: e => I(e, t),
						didLeave: this.onSizeChanged,
						willEnter: this.onSizeChanged
					}, e => o.a.createElement("div", {
						className: n
					}, e.map(e => o.a.createElement("div", {
						key: e.key,
						style: e.style
					}, s))))
				}
			}
			var _ = n("./src/reddit/models/Media/index.ts"),
				k = n("./src/reddit/models/Post/index.ts"),
				T = n("./src/reddit/models/Vote/index.ts"),
				S = n("./src/reddit/selectors/activeModalId.ts"),
				L = n("./src/reddit/selectors/experiments/categories.ts"),
				N = n("./src/reddit/selectors/moderatorPermissions.ts"),
				M = n("./src/reddit/selectors/postCreations.ts"),
				R = n("./src/reddit/selectors/posts.ts"),
				A = n("./src/reddit/selectors/user.ts"),
				F = n("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				B = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				D = n("./src/reddit/components/ExpandoButton/index.tsx"),
				W = n("./src/reddit/components/FlairWrapper/index.tsx"),
				H = n("./src/reddit/components/Flatlist/index.tsx"),
				V = n("./src/reddit/components/Governance/Proposal/async.ts"),
				U = n("./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx"),
				G = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				K = n("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				q = n("./src/reddit/components/ModModeReports/index.tsx"),
				z = n("./src/reddit/components/ModModeReports/helpers.ts"),
				Y = n("./src/reddit/components/PostContainer/index.tsx"),
				J = n("./src/higherOrderComponents/makeAsync.tsx"),
				Q = n("./src/lib/loadWithRetries/index.ts"),
				X = n("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const Z = Object(J.a)({
				ErrorComponent: () => o.a.createElement(X.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(Q.a)(() => Promise.all([n.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), n.e("vendors~PostCreation~RichTextEditor"), n.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), n.e("RichTextEditor")]).then(n.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => o.a.createElement(X.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var $ = e => o.a.createElement(Z, e),
				ee = n("./src/reddit/components/PostMedia/index.tsx"),
				te = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				ne = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				se = n("./src/reddit/components/PostTitle/index.tsx"),
				oe = n("./src/reddit/components/PostTopLine/index.tsx"),
				re = n("./src/reddit/components/PostTopMeta/index.tsx"),
				ae = n("./src/reddit/components/SourceLink/index.tsx"),
				ie = n("./src/reddit/constants/componentTestIds.ts"),
				de = n("./src/reddit/constants/postLayout.ts"),
				ce = n("./src/reddit/contexts/PageLayer/index.tsx"),
				le = n("./src/reddit/helpers/postEvent.ts"),
				me = n("./src/reddit/selectors/experiments/publicAwarding.ts"),
				pe = n("./src/reddit/selectors/postFlair.ts"),
				ue = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				he = n("./src/reddit/constants/colors.ts"),
				be = n("./src/config.ts"),
				ge = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				xe = e => o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", null, o.a.createElement("path", {
					d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
					id: "path-1"
				}))),
				ve = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Ce = n("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				Oe = n.n(Ce);
			const {
				fbt: fe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ye = () => fe._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy}.", [fe._param("=User Agreement", o.a.createElement("a", {
				className: Oe.a.link,
				href: "https://www.redditinc.com/policies/user-agreement\\"
			}, fe._("User Agreement", null, {
				hk: "2cojEr"
			}))), fe._param("=Content Policy", o.a.createElement("a", {
				className: Oe.a.link,
				href: "https://www.redditinc.com/policies/content-policy\\"
			}, fe._("Content Policy", null, {
				hk: "1owvRc"
			})))], {
				hk: "3LJ7At"
			}), Ee = () => fe._("This content was removed for a violation of Reddit's {=Content Policy}.", [fe._param("=Content Policy", o.a.createElement("a", {
				className: Oe.a.link,
				href: "https://www.redditinc.com/policies/content-policy\\"
			}, fe._("Content Policy", null, {
				hk: "1fd4W1"
			})))], {
				hk: "3KOOQU"
			});
			var je = e => {
					const {
						hasPerms: t,
						removedBy: n,
						removedByCategory: s,
						subredditName: r
					} = e, a = t ? ((e, t, n) => {
						switch (e) {
							case k.g.AntiEvilOps:
								return fe._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
									hk: "3a8CyR"
								});
							case k.g.Author:
								return fe._("This post was removed by the person who originally posted it.", null, {
									hk: "2lyUgL"
								});
							case k.g.AuthorDeleted:
								return fe._("This post was deleted by the person who originally posted it.", null, {
									hk: "16LeiH"
								});
							case k.g.AutomodFiltered:
								return fe._("This post was reported by automod, and is waiting for your review.", null, {
									hk: "2E46dR"
								});
							case k.g.CommunityOps:
								return fe._("This post was removed by Reddit admin, u/{username}.", [fe._param("username", t)], {
									hk: "34nHWu"
								});
							case k.g.ContentTakedown:
								return fe._("This post was removed by Reddit's Legal Operations team.", null, {
									hk: "1wmhiC"
								});
							case k.g.CopyrightTakedown:
								return fe._("This post was removed by Reddit's Legal Operations team.", null, {
									hk: "Ukfj"
								});
							case k.g.Moderator:
								return fe._("This post was removed by r/{subredditName} moderator, u/{username}.", [fe._param("subredditName", n), fe._param("username", t)], {
									hk: "270bcn"
								});
							case k.g.Reddit:
								return fe._("This post was removed by Reddit's spam filters.", null, {
									hk: "1k3lsh"
								});
							default:
								return fe._("This post was removed by Reddit's spam filters.", null, {
									hk: "3oxS8r"
								})
						}
					})(s, n, r) : ((e, t) => {
						switch (e) {
							case k.g.AntiEvilOps:
								return fe._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
									hk: "2ZqyRT"
								});
							case k.g.Author:
								return fe._("Sorry, this post was removed by the person who originally posted it.", null, {
									hk: "4IRCN"
								});
							case k.g.AuthorDeleted:
								return fe._("Sorry, this post was deleted by the person who originally posted it.", null, {
									hk: "4emmIp"
								});
							case k.g.AutomodFiltered:
								return fe._("Post is awaiting moderator approval.", null, {
									hk: "wdGOr"
								});
							case k.g.CommunityOps:
								return fe._("Sorry, this post was removed by Reddit's Community team.", null, {
									hk: "3fs5lF"
								});
							case k.g.ContentTakedown:
								return fe._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
									hk: "jiKO8"
								});
							case k.g.CopyrightTakedown:
								return fe._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
									hk: "1TbEDT"
								});
							case k.g.Moderator:
								return fe._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [fe._param("subredditName", t)], {
									hk: "12NWKq"
								});
							case k.g.Reddit:
								return fe._("Sorry, this post was removed by Reddit's spam filters.", null, {
									hk: "10ItEu"
								});
							default:
								return fe._("Sorry, this post has been removed", null, {
									hk: "11sG9V"
								})
						}
					})(s, r), i = t ? (e => {
						switch (e) {
							case k.g.AntiEvilOps:
								return o.a.createElement(ye, null);
							case k.g.AuthorDeleted:
							case k.g.Author:
								return fe._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
									hk: "2KZLgT"
								});
							case k.g.AutomodFiltered:
								return fe._("It won’t show up in your community feed until you or another moderator approve it.", null, {
									hk: "2X5ECb"
								});
							case k.g.CommunityOps:
								return fe._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask}.", [fe._param("=just ask", o.a.createElement("a", {
									className: Oe.a.link,
									href: "".concat(be.a.redditUrl, "/message/compose/?to=r/reddit.com"),
									target: "_blank"
								}, fe._("just ask", null, {
									hk: "2tChW8"
								})))], {
									hk: "1gNycd"
								});
							case k.g.ContentTakedown:
								return o.a.createElement(Ee, null);
							case k.g.CopyrightTakedown:
								return fe._("This content was removed in response to a copyright claim by a third party.", null, {
									hk: "7jiV"
								});
							case k.g.Moderator:
								return fe._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
									hk: "22qJOB"
								});
							case k.g.Reddit:
								return fe._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
									hk: "3S3oDL"
								});
							default:
								return fe._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
									hk: "uKfHK"
								})
						}
					})(s) : ((e, t) => {
						switch (e) {
							case k.g.AntiEvilOps:
								return o.a.createElement(ye, null);
							case k.g.AuthorDeleted:
							case k.g.Author:
								return fe._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
									hk: "2OBDBc"
								});
							case k.g.AutomodFiltered:
								return fe._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [fe._param("=[subreddit name]", o.a.createElement("a", {
									className: Oe.a.link,
									href: "".concat(be.a.redditUrl, "/r/").concat(t),
									target: "_blank"
								}, fe._("{subreddit name}", [fe._param("subreddit name", "r/".concat(t))], {
									hk: "2o22vl"
								})))], {
									hk: "3dxuEW"
								});
							case k.g.CommunityOps:
								return fe._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
									hk: "uPiHS"
								});
							case k.g.ContentTakedown:
								return o.a.createElement(Ee, null);
							case k.g.CopyrightTakedown:
								return fe._("This content was removed in response to a copyright claim by a third party.", null, {
									hk: "2e8fhi"
								});
							case k.g.Moderator:
								return fe._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
									hk: "QXZPk"
								});
							case k.g.Reddit:
							default:
								return fe._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
									hk: "3vUmEz"
								})
						}
					})(s, r), d = t ? he.a.warning : he.a.dayModeActionIcon, c = (e => {
						let t;
						switch (e) {
							case k.g.AntiEvilOps:
							case k.g.AutomodFiltered:
							case k.g.CommunityOps:
							case k.g.ContentTakedown:
							case k.g.CopyrightTakedown:
							case k.g.Reddit:
								t = ge.a;
								break;
							case k.g.AuthorDeleted:
							case k.g.Author:
								t = ve.b;
								break;
							case k.g.Moderator:
								t = xe;
								break;
							default:
								t = ge.a
						}
						return o.a.createElement(t, {
							className: Oe.a.icon
						})
					})(s);
					return o.a.createElement(ue.a, {
						className: Oe.a.BannerBase,
						color: d,
						icon: c,
						subtitle: i,
						title: a
					})
				},
				we = e => {
					const {
						isAdminOrMod: t,
						post: n,
						subredditOrProfile: s
					} = e;
					return o.a.createElement(o.a.Fragment, null, s && n.removedByCategory && o.a.createElement(je, {
						hasPerms: t,
						removedBy: n.removedBy,
						removedByCategory: n.removedByCategory,
						subredditName: s.name
					}))
				},
				Ie = (n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/fbt/lib/FbtPublic.js")),
				Pe = n("./src/lib/prettyPrintNumber/index.ts"),
				_e = n("./src/reddit/components/PostContent/viewCount.m.less"),
				ke = n.n(_e);
			var Te = e => {
					let {
						post: t,
						showViewCount: n
					} = e;
					const {
						upvotePercentString: s,
						viewCountString: r
					} = (e => {
						const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
							n = Object(Pe.b)(e.viewCount);
						return {
							upvotePercentString: Ie.fbt._("{percent upvoted}% Upvoted", [Ie.fbt._param("percent upvoted", t)], {
								hk: "432tjJ"
							}),
							viewCountString: Ie.fbt._({
								"*": "{number of views} Views",
								_1: "1 View"
							}, [Ie.fbt._plural(e.viewCount, "number of views", n)], {
								hk: "rP01m"
							})
						}
					})(t), a = n && !!t.viewCount;
					return o.a.createElement("div", {
						className: ke.a.viewCounts
					}, a && o.a.createElement("span", null, r), a && !!t.upvoteRatio && o.a.createElement("span", {
						className: ke.a.dotSpacer
					}), !!t.upvoteRatio && o.a.createElement("span", null, s))
				},
				Se = n("./src/reddit/components/PostContent/index.m.less"),
				Le = n.n(Se);
			const Ne = c.a.wrapped(se.c, "PostTitle", Le.a),
				Me = c.a.wrapped(D.a, "ExpandoButton", Le.a),
				Re = c.a.wrapped(P, "ClassicExpandoMotion", Le.a),
				Ae = c.a.wrapped(H.c, "FullWidthFlatlist", Le.a),
				Fe = c.a.wrapped(F.a, "ClassicThumbnail", Le.a),
				Be = Object(ce.t)({
					isCommentsPage: ce.w,
					pageLayer: e => e
				}),
				De = Object(r.b)(() => Object(i.c)({
					activeModalId: S.a,
					flairStyleTemplate: ce.O,
					currentUser: A.i,
					crosspost: R.c,
					hideNSFWPref: A.y,
					isAdminOrMod: (e, t) => {
						const n = Object(R.U)(e, {
							postId: t.postId
						});
						return !!n && Object(N.g)(e, {
							subredditId: n.id
						})
					},
					isCurrentUserProfilePost: R.h,
					isExpanded: R.j,
					post: R.I,
					language: A.P,
					metaId: (e, t) => e.posts.metaMap[t.postId],
					moderatorPermissions: N.i,
					publicAwardersEnabled: e => !!Object(me.a)(e),
					modModeEnabled: ce.M,
					isInCategoriesExperiment: L.a,
					showEditFlair: pe.a,
					subredditOrProfile: R.U,
					isEditing: M.C,
					userIsOp: A.fb
				}), (e, t) => {
					let {
						postId: n
					} = t;
					return {
						onIgnoreReports: () => e(Object(v.O)(n)),
						onOpenReportsDropdown: t => e(Object(C.h)({
							tooltipId: t
						})),
						onVoteClick: t => {
							const s = t === T.a.upvoted ? Object(v.Q)(n) : Object(v.r)(n);
							e(s)
						}
					}
				}),
				We = c.a.wrapped(a.a, "ThumbLink", Le.a),
				He = e => {
					let {
						post: t,
						templatePlaceholderImage: n
					} = e;
					return t.source ? o.a.createElement(Fe, {
						post: t,
						forceShowNSFW: !0,
						templatePlaceholderImage: n
					}) : o.a.createElement(We, {
						to: Object(b.b)(t.permalink)
					}, o.a.createElement(Fe, {
						post: t,
						forceShowNSFW: !0
					}))
				},
				Ve = (e, t, n) => o.a.createElement(Re, {
					content: o.a.createElement(ee.a, {
						className: Le.a.ClassicPostMedia,
						isListing: !1,
						isNotCardView: !0,
						post: e,
						shouldLoad: !0,
						showFull: !0,
						showCentered: !0,
						scrollerItemRef: n
					}),
					shouldExpand: !!t
				});
			t.a = Be(De(e => {
				const {
					className: t,
					crosspost: n,
					currentUser: s,
					flairStyleTemplate: r,
					hideNSFWPref: a,
					isAdminOrMod: i,
					isCommentsPage: c,
					isCurrentUserProfilePost: b,
					isEditing: v,
					isExpanded: C,
					isOverlay: O,
					language: f,
					metaId: y,
					moderatorPermissions: E,
					modModeEnabled: j,
					onIgnoreReports: w,
					onOpenReportsDropdown: I,
					onVoteClick: P,
					post: T,
					publicAwardersEnabled: S,
					scrollerItemRef: L,
					sendEvent: N,
					showEditFlair: M,
					subredditOrProfile: R,
					userIsOp: A
				} = e, F = Object(h.a)(E), D = Object(u.a)(E), J = F || D, Q = ((e, t, n) => {
					const [s, o] = e ? [Object(p.f)(e) === n.author, e.isEmployee] : [!1, !1];
					return s || t || o
				})(s, J, T), X = !!T.media && (T.media.type === _.n.RTJSON || T.media.type === _.n.TEXT), Z = A && X, ce = Object(z.c)(T);
				let me;
				const pe = !(j && h.a),
					ue = Object(te.h)({
						hide: pe,
						editPost: pe,
						save: pe,
						report: pe
					}),
					he = T.removedByCategory === k.g.AuthorDeleted,
					be = s && (s.displayText === T.author || s.username === T.author),
					ge = !he && (be || i || !(T.removedByCategory && T.media && (Object(_.E)(T.media) || Object(_.D)(T.media)))),
					xe = T.removedByCategory === k.g.Reddit && Object(l.e)(T.created) > 24,
					ve = T.removedByCategory && T.removedByCategory !== k.g.Reddit || xe,
					Ce = o.a.createElement(Ne, {
						post: T,
						size: se.b.ExtraLarge,
						showCategoryTag: O,
						isOverlay: O,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					Oe = o.a.createElement(Te, {
						post: T,
						showViewCount: Q
					}),
					fe = (e => {
						const {
							crosspost: t,
							isCommentPermalink: n,
							post: s
						} = e;
						return n ? de.g.Classic : t ? de.g.Large : s.media ? de.g.Large : de.g.Medium
					})(e);
				if (fe === de.g.Classic) me = o.a.createElement("div", {
					"data-test-id": ie.e
				}, o.a.createElement(ne.a, {
					model: T,
					handleVote: P
				}), o.a.createElement("div", {
					className: Le.a.mainBody
				}, o.a.createElement("div", {
					className: Le.a.content
				}, o.a.createElement(oe.a, {
					hideNSFWPref: a,
					inSubredditOrProfile: !0,
					isCommentsPage: c,
					isCurrentUserProfilePost: b,
					isOverlay: !!O,
					language: f,
					post: T,
					publicAwardersEnabled: S,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!O && !T.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: R
				}), Ce, o.a.createElement(W.a, {
					className: c ? Le.a.leftPadding : null,
					post: T,
					showCategoryTag: e.isInCategoriesExperiment && c,
					sendEvent: N
				}), j && F && ce && o.a.createElement(q.a, {
					language: f,
					onIgnoreReports: w,
					reportable: T
				}), o.a.createElement(G.d, {
					postId: T.id
				}), o.a.createElement("div", {
					className: Le.a.FlatlistContainer
				}, o.a.createElement(Me, {
					crosspost: n || void 0,
					isExpanded: !!C,
					post: T,
					useMediaIcons: !1
				}), Ve(T, C, L), o.a.createElement(Ae, {
					currentUser: s,
					hasModFlairPerms: D,
					hasModPostPerms: F,
					isOverlay: O,
					language: f,
					onIgnoreReports: w,
					onOpenReportsDropdown: I,
					modModeEnabled: j,
					post: T,
					showUpvotePercent: !0,
					showViewCount: Q,
					useFlatlistBreakpoints: ue
				}))), Object(m.a)(T) && o.a.createElement(He, {
					post: T,
					templatePlaceholderImage: r && r.postPlaceholderImage
				})));
				else if (fe === de.g.Medium) {
					const t = Object(m.a)(T);
					me = o.a.createElement("div", {
						"data-test-id": ie.e
					}, o.a.createElement(ne.a, {
						model: T,
						handleVote: P
					}), o.a.createElement("div", {
						className: Le.a.mainBody
					}, o.a.createElement("div", {
						className: Le.a.content
					}, o.a.createElement(oe.a, {
						hideNSFWPref: a,
						inSubredditOrProfile: !0,
						isCommentsPage: c,
						isCurrentUserProfilePost: b,
						isOverlay: !!O,
						language: f,
						post: T,
						publicAwardersEnabled: S,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!O && !T.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: R
					}), Ce, T.source && o.a.createElement(ae.a, {
						post: T,
						isCommentsPage: c
					}), o.a.createElement(W.a, {
						className: c ? Le.a.leftPadding : null,
						post: T,
						showCategoryTag: e.isInCategoriesExperiment && c,
						sendEvent: N
					}), R && ve && o.a.createElement(we, {
						isAdminOrMod: i,
						post: T,
						subredditOrProfile: R
					}), j && F && ce && o.a.createElement(q.a, {
						language: f,
						onIgnoreReports: w,
						reportable: T
					})), t && o.a.createElement(K.a, {
						post: T,
						forceShowNSFW: !0,
						hasModPostPerms: J,
						isCommentsPage: c,
						isOverlay: !0,
						modModeEnabled: j,
						templatePlaceholderImage: r && r.postPlaceholderImage
					})), o.a.createElement(G.d, {
						postId: T.id
					}), o.a.createElement("div", {
						className: Le.a.controlsContainer
					}, o.a.createElement(H.c, {
						currentUser: s,
						hasModFlairPerms: D,
						hasModPostPerms: F,
						isOverlay: O,
						language: f,
						modModeEnabled: j,
						onIgnoreReports: w,
						onOpenReportsDropdown: I,
						post: T,
						showEditPost: Z,
						showEditFlair: M,
						tooltipType: O ? re.c.Lightbox : void 0,
						useFlatlistBreakpoints: ue
					}), Oe))
				} else fe === de.g.Large && (me = o.a.createElement("div", {
					"data-test-id": ie.e
				}, o.a.createElement(ne.a, {
					model: T,
					handleVote: P
				}), o.a.createElement(oe.a, {
					hideNSFWPref: a,
					inSubredditOrProfile: !0,
					isCommentsPage: c,
					isCurrentUserProfilePost: b,
					isOverlay: !!O,
					language: f,
					post: T,
					publicAwardersEnabled: S,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!O && !T.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: R
				}), Ce, ((e, t, n, s) => e.source && !t && (n || s))(T, n, O, c) && o.a.createElement(ae.a, {
					post: T,
					isCommentsPage: c
				}), o.a.createElement(W.a, {
					className: c ? Le.a.leftPadding : null,
					post: T,
					showCategoryTag: e.isInCategoriesExperiment && c,
					sendEvent: N
				}), R && ve && o.a.createElement(we, {
					isAdminOrMod: i,
					post: T,
					subredditOrProfile: R
				}), v ? o.a.createElement($, {
					post: T
				}) : ge && o.a.createElement(ee.a, {
					className: Object(d.a)(Le.a.LargePostMedia, {
						[Le.a.isCommentsPage]: c
					}),
					isCommentsPage: !0,
					isListing: !1,
					isNotCardView: O,
					isOverlay: O,
					post: T,
					shouldLoad: !0,
					showFull: !0,
					shouldPause: !O,
					showCentered: !0,
					scrollerItemRef: L
				}), y && R ? o.a.createElement("div", {
					className: Object(d.a)(Le.a.ProposalContainer, {
						[Le.a.isEditing]: v
					})
				}, o.a.createElement(V.a, {
					pollId: y,
					subredditId: R.id
				})) : null, T.isMeta && !y && o.a.createElement(U.a, {
					className: Le.a.noProposal
				}), j && F && ce && o.a.createElement(q.a, {
					language: f,
					onIgnoreReports: w,
					reportable: T
				}), o.a.createElement(G.d, {
					postId: T.id
				}), o.a.createElement("div", {
					className: Le.a.controlsContainer
				}, o.a.createElement(H.c, {
					currentUser: s,
					hasModFlairPerms: D,
					hasModPostPerms: F,
					isOverlay: O,
					language: f,
					modModeEnabled: j,
					onIgnoreReports: w,
					onOpenReportsDropdown: I,
					post: T,
					showEditPost: Z,
					showEditFlair: M,
					tooltipType: O ? re.c.Lightbox : void 0,
					useFlatlistBreakpoints: ue
				}), Oe)));
				return o.a.createElement(Y.a, {
					className: Object(d.a)(t, Le.a.postContainer, {
						[Le.a.hasEventMeta]: Object(le.a)(T)
					}),
					isOverlay: O,
					post: T,
					eventFactory: O ? g.b : x.f
				}, o.a.createElement(B.a, {
					post: T,
					language: f
				}), me)
			}))
		},
		"./src/reddit/components/PostContent/viewCount.m.less": function(e, t, n) {
			e.exports = {
				dotSpacer: "_3g_cwSqBe5o5mAuhfMeGu5",
				viewCounts: "t4Hq30BDzTeJ85vREX7_M"
			}
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, n) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/components/Translated/index.tsx"),
				m = n("./src/reddit/helpers/trackers/postCollection.ts"),
				p = n("./src/reddit/components/PostFollow/index.m.less"),
				u = n.n(p);
			class h extends o.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: n,
								isFollowed: s
							},
							sendEvent: o
						} = this.props, r = !!s;
						o(e ? Object(m.o)({
							postId: n,
							isFollowed: r
						}) : Object(m.g)({
							postId: n,
							isFollowed: r
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: n
					} = this.props, s = this.state.isHovered, r = n.isFollowed;
					let a = r ? "collection.follow.followed" : "collection.follow.follow";
					return r && s && (a = "collection.follow.unfollow"), o.a.createElement("button", {
						className: Object(i.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!n.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, o.a.createElement(l.a, {
						msgId: a
					}))
				}
			}
			const b = Object(r.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: n
				} = t;
				return {
					onFollow: () => e(Object(d.v)(n.isSponsored ? n.postId : n.id))
				}
			})(Object(c.b)(h))
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return z
			})), n.d(t, "a", (function() {
				return J
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.array.sort.js"), n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/history/esm/history.js"),
				o = n("./node_modules/lodash/debounce.js"),
				r = n.n(o),
				a = n("./node_modules/lodash/last.js"),
				i = n.n(a),
				d = n("./node_modules/react/index.js"),
				c = n.n(d),
				l = n("./node_modules/react-dom/index.js"),
				m = n("./src/lib/addQueryParams/index.ts"),
				p = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/constants/index.ts"),
				h = n("./src/lib/fastdom/index.ts"),
				b = n("./src/lib/lessComponent.tsx"),
				g = n("./src/lib/opener/index.ts"),
				x = n("./src/lib/sentry/index.ts"),
				v = n("./src/reddit/components/PostList/LoadMore.tsx"),
				C = n("./src/reddit/components/PostList/SomethingWrong.tsx"),
				O = n("./src/reddit/components/Scroller/Simple.tsx"),
				f = n("./src/reddit/components/Translated/index.tsx"),
				y = n("./src/reddit/constants/adEvents.ts"),
				E = n("./src/reddit/constants/componentSizes.ts"),
				j = n("./src/reddit/constants/postLayout.ts"),
				w = n("./src/reddit/controls/InternalLink/index.tsx"),
				I = n("./src/reddit/helpers/getClickInfo.ts"),
				P = n("./src/reddit/helpers/pixels.ts"),
				_ = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				k = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				T = n("./src/reddit/models/Media/index.ts"),
				S = n("./src/reddit/helpers/brandSafety/index.ts"),
				L = n("./src/lib/LRUCache/index.ts"),
				N = n("./src/telemetry/index.ts"),
				M = n("./src/telemetry/models/Timer.ts"),
				R = n("./src/reddit/components/PostList/index.m.less"),
				A = n.n(R),
				F = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
					}
					return n
				};
			const B = 500,
				D = new L.a(B),
				W = new L.a(B),
				H = new L.a(B),
				V = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				U = b.a.div("SeeMore", A.a),
				G = b.a.wrapped(k.a, "ArrowRight", A.a),
				K = (e, t, n, s, o, r, a, i) => {
					const d = n ? "last-".concat(s, "-").concat(o) : "",
						c = "entered-".concat(e, "-").concat(t, "-").concat(d, "-").concat(r);
					let l = D.get(c);
					return void 0 === l && (l = () => {
						n && a.onBottomViewed(s, o), a.trackOnPostEnteredViewport(e, t, i)
					}, D.set(c, l)), l
				},
				q = (e, t, n, s) => {
					const o = "left-".concat(e, "-").concat(t);
					let r = W.get(o);
					return void 0 === r && (r = o => {
						n.trackOnPostExitedViewport(e, t, o, s)
					}, W.set(o, r)), r
				},
				z = (e, t) => {
					const n = "click-".concat(e);
					let s = H.get(n);
					return void 0 === s && (s = (e, n) => {
						n.isSponsored && Object(P.a)(n.events, y.a.Click, n), n.isSponsored && n.source && n.source.outboundUrl ? Object(g.d)(n.source.outboundUrl, g.c.BLANK) : t.openPost({
							postOrComment: n,
							clickInfo: Object(I.a)(e)
						})
					}, H.set(n, s)), s
				},
				Y = (e, t) => {
					const n = [...e];
					return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
						n.splice(e, 0, t[e])
					}), n
				};
			class J extends c.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new L.a(B), this.updateScrollerRef = e => {
						const t = e && Object(l.findDOMNode)(e);
						this.scrollerRef = t instanceof Element ? t : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e)
					}, this.dispatchBrandSafety = r()(e => {
						let {
							getVisibleItemsInViewport: t
						} = e;
						const {
							postsById: n,
							subredditsById: s
						} = this.props, o = t(), r = [];
						o.forEach(e => r.push(e.id));
						const a = r.map(e => n[e]).filter(Boolean),
							i = a.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(S.a)(a, i))
					}, u.d, {
						leading: !0
					})
				}
				componentWillMount() {
					this.timerId && N.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = N.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = N.c.end(this.timerId);
						setTimeout(() => Object(N.b)(u.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && N.c.cancel(this.timerId), e.postIds.length && (this.timerId = N.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (h.a.read(() => this.checkAndSendScreenview()), this.timerId && N.c.has(this.timerId)) {
						const e = N.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(N.b)(u.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && N.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && i()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: n
					} = this.props;
					return N.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (n || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: n
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const s = N.c.end(e);
					setTimeout(() => {
						n(t(s, M.TimerType.InApp))
					}, 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: n
					} = this.props;
					return !n && (Boolean(e) || !1 !== t)
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
					const t = this.props,
						{
							postsById: n
						} = t,
						s = F(t, ["postsById"]),
						{
							postsById: o
						} = e,
						r = F(e, ["postsById"]),
						a = Object.keys(s),
						i = Object.keys(r);
					if (i.length !== a.length) return !0;
					if (i.some(e => s[e] !== r[e])) return !0;
					if (n === o) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: t
						} = this.props;
						return this.props.postIds.some((s, r) => {
							const a = 0 === r;
							return t({
								isFirstPost: a,
								layout: e,
								post: n[s]
							}) !== t({
								isFirstPost: a,
								layout: e,
								post: o[s]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, n, s) {
					const {
						currentProfileName: o,
						isCommentPermalink: r,
						isCommentsPage: a,
						isFrontpage: i,
						isProfilePostListing: d,
						listingKey: l,
						listingName: m,
						pageLayer: p,
						pageReferrer: h,
						postClickEvent: b,
						redditStyle: g
					} = this.props, v = 0 === t, C = n ? "last-index" : "", O = "post-".concat(s, "-").concat(e, "-").concat(t, "-").concat(C, "-").concat(m, "-").concat(l, "-").concat(h);
					let f;
					if (void 0 === (f = this.scrollChildCache.get(O))) {
						const {
							inSubredditOrProfile: C,
							postsById: y
						} = this.props, E = y[e], w = E.crosspostRootId && y[E.crosspostRootId] ? y[E.crosspostRootId] : E;
						E.crosspostRootId && !y[E.crosspostRootId] && x.c.withScope(e => {
							e.setExtra("errorType", u.p.API), e.setExtra("description", "Post ".concat(E.id, " is crosspost of ").concat(E.crosspostRootId, ", but ") + "".concat(E.crosspostRootId, " details are missing in the state")), x.c.captureMessage("Crosspost parent details are missing")
						});
						const I = this.props.postComponentForLayout({
								isCrosspost: !!E.crosspostRootId,
								isFirstPost: v,
								layout: s,
								post: w
							}),
							P = "post-list-item-[layout: ".concat(s, "]-[postId: ").concat(e, "]"),
							k = K(e, s, n, l, m, h, this.props, t),
							S = q(e, s, this.props, t),
							L = z(e, this.props),
							N = w.media && w.media.type === T.n.EMBED ? w.media.provider : null;
						f = {
							estHeight: Object(_.c)(E, s),
							id: e,
							isFocusable: !(!w.media || s !== j.g.Large) && (T.d.has(w.media.type) && (!N || !T.q.has(N)) && !w.isSpoiler && !w.isNSFW),
							trackOnEnteredViewport: k,
							trackOnExitedViewport: S,
							render: t => {
								let {
									className: s,
									height: u,
									width: h,
									remeasure: x,
									setScrollerChildRef: O,
									shouldLoadInitially: f
								} = t;
								return c.a.createElement(I, {
									className: s,
									currentProfileName: o,
									key: P,
									availableWidth: h,
									eventFactory: b,
									first: v,
									forceLoadMedia: f,
									inSubredditOrProfile: C,
									isCommentPermalink: r,
									isCommentsPage: a,
									isFrontpage: i,
									isProfilePostListing: d,
									listingKey: l,
									listingName: m,
									pageLayer: p,
									last: n,
									onClickPost: L,
									onSizeChanged: x,
									postId: e,
									redditStyle: g,
									sendEvent: this.props.sendEvent,
									scrollerItemRef: O
								})
							}
						}, this.scrollChildCache.set(O, f)
					}
					return f
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return c.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: n,
						layout: s,
						onTryAgain: o,
						postListPlaceholderComponent: r
					} = this.props;
					if (n) return;
					const a = r;
					return c.a.createElement("div", {
						className: A.a.placeholder
					}, c.a.createElement(a, {
						className: t,
						isLoading: !e,
						layout: s
					}), !!e && c.a.createElement(C.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: n,
						layout: s,
						loadMoreClassName: o,
						onLoadMore: r
					} = this.props;
					if (!n) return c.a.createElement("div", {
						className: A.a.placeholder
					}, c.a.createElement(v.a, {
						className: o,
						isLoading: !!t,
						layout: s,
						countOverride: V[s]
					}), !!e && c.a.createElement(C.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: n,
						injectChildren: o,
						isTruncated: r,
						layout: a,
						location: i,
						loadMore: l,
						postIds: h,
						onLoadMore: b
					} = this.props;
					let g = h.map((e, t, n) => {
						const s = t === h.length - 1;
						return this.scrollChildForPost(e, t, s, a)
					});
					o && (g = Y(g, o));
					const x = this.props.measureScrollFPS ? "post-listings-".concat(a) : void 0,
						v = i ? Object(s.e)(i) : null,
						C = v || r;
					return c.a.createElement(d.Fragment, null, c.a.createElement(O.b, {
						innerRef: this.updateScrollerRef,
						className: C ? A.a.truncatedPostList : Object(p.a)(A.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: n,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: l && l.token ? l.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: b,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: x,
						viewportTopPadding: E.f
					}, g), v && c.a.createElement(U, {
						className: A.a.seeMoreButton
					}, c.a.createElement(w.a, {
						className: A.a.seeMorePostsText,
						to: Object(m.a)(v, {
							type: u.Kb.Posts
						})
					}, c.a.createElement(f.a, {
						msgId: "search.seeMorePosts"
					}), c.a.createElement(G, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			J.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: c.a.Fragment
			}
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/CrosspostBox/index.tsx"),
				a = n("./src/reddit/components/Media/index.tsx");
			t.a = e => {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(r.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign({}, e, {
						crosspost: t,
						primaryContent: !1
					})
				}) : o.a.createElement(a.a, Object.assign({}, e, {
					primaryContent: !!e.showFull
				}))
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, n) {
			e.exports = {
				donationAmount: "_1x9gNS8wlrugqgwofOEcGq",
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/AwardBadges/index.tsx"),
				a = n("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				i = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				d = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = n("./src/reddit/components/PostBadges/index.tsx"),
				l = n("./src/reddit/components/PostTopMeta/index.tsx"),
				m = n("./src/reddit/components/QuarantinedLabel/index.tsx"),
				p = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = n("./src/reddit/constants/posts.ts"),
				b = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				g = n("./src/reddit/helpers/trackers/post.ts"),
				x = n("./src/reddit/models/Subreddit/index.ts"),
				v = n("./src/reddit/components/PostMeta/index.m.less"),
				C = n.n(v);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: n,
					inSubredditOrProfile: s,
					isCurrentUserProfilePost: v,
					isOverlay: O,
					language: f,
					post: y,
					shouldShowSubscribeButton: E,
					subredditOrProfile: j,
					tooltipType: w
				} = e;
				return o.a.createElement("div", {
					className: C.a.metaContainer
				}, !s && !y.isSponsored && j && o.a.createElement(i.a, {
					postId: y.id,
					subredditName: j.name
				}, o.a.createElement(p.a, {
					className: C.a.subredditName,
					"data-click-id": "subreddit",
					to: j.url
				}, j.displayText)), j && j.isQuarantined && o.a.createElement(m.a, null), !s && !y.isSponsored && j && E && !v && o.a.createElement(u.a, {
					getEventFactory: e => Object(g.f)(y.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: j.name,
						type: Object(x.e)(j) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: y.id,
					small: !0
				}), !s && !y.isSponsored && o.a.createElement(b.b, null), !s && !y.isSponsored && o.a.createElement(d.h, {
					type: y.belongsTo.type,
					id: y.belongsTo.id
				}), o.a.createElement(l.d, {
					className: C.a.postTopMeta,
					flairStyleTemplate: t,
					language: f,
					post: y,
					tooltipType: w
				}), o.a.createElement(c.a, {
					displayText: j ? j.displayText : null,
					inSubredditOrProfile: !!s,
					language: f,
					post: y,
					tooltipType: w
				}), j && o.a.createElement(a.a, {
					className: C.a.donationAmount,
					contentId: y.id,
					subredditId: j.id
				}), o.a.createElement(r.a, {
					hideCta: n,
					isOverlay: O,
					thing: y,
					tooltipType: w
				}))
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, n) {
			e.exports = {
				ListContainer: "VHCAEHBEuD8bln8MDFl35",
				listContainer: "VHCAEHBEuD8bln8MDFl35",
				Icon: "_3WbGqnEpw_ds1P508Qawma",
				icon: "_3WbGqnEpw_ds1P508Qawma",
				DropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				CheckboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY",
				checkboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return O
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				r = n("./src/reddit/controls/Dropdown/Row.tsx"),
				a = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				i = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				d = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				c = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				l = n("./src/reddit/icons/fonts/Tag/index.tsx"),
				m = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				p = n.n(m);
			const u = s.a.wrapped(a.a, "Icon", p.a),
				h = s.a.wrapped(i.a, "Icon", p.a),
				b = s.a.wrapped(d.a, "Icon", p.a),
				g = s.a.wrapped(c.a, "Icon", p.a),
				x = s.a.wrapped(l.a, "Icon", p.a),
				v = s.a.wrapped(o.b, "CheckboxMenuItem", p.a),
				C = s.a.wrapped(r.b, "DropdownRow", p.a),
				O = s.a.div("ListContainer", p.a)
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/PostLeftRail/index.tsx"),
				a = n("./src/reddit/components/VerticalVotes/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.tsx"),
				d = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: l = !1,
					toggleCheckbox: m = (() => {}),
					flairStyleTemplate: p,
					redditStyle: u
				} = e, h = "upvote-button-".concat(t.id);
				return o.a.createElement(r.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(c.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: u
				}, s && o.a.createElement(i.a, {
					isCheckboxSelected: l,
					toggleCheckbox: m
				}), o.a.createElement(a.a, {
					flairStyleTemplate: p,
					model: t,
					onVoteClick: n,
					redditStyle: u,
					upvoteTooltipId: h
				}))
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, n) {
			e.exports = {
				donationAmount: "_1SRZN02bVXzHIIMqGwlZD7",
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				eventMeta: "_28_NUs_O8Nh1DCErsNLCHk",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				Container: "BiNC74axuTz66dlnEgicY",
				container: "BiNC74axuTz66dlnEgicY",
				PostOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				postOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				bulkActionCheckbox: "_3X709ZHnDjH0Rwz3pMTv40"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/AwardBadges/index.tsx"),
				i = n("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				d = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = n("./src/reddit/components/PostBadges/index.tsx"),
				l = n("./src/reddit/components/PostTopMeta/index.tsx"),
				m = n("./src/reddit/components/SubredditIcon/index.tsx"),
				p = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = n("./src/reddit/constants/posts.ts"),
				b = n("./src/reddit/controls/OutboundLink/index.tsx"),
				g = n("./src/reddit/helpers/trackers/post.ts"),
				x = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = n("./src/reddit/models/Media/index.ts"),
				C = n("./src/reddit/models/Subreddit/index.ts"),
				O = n("./src/reddit/components/PostTopLine/index.m.less"),
				f = n.n(O);
			const y = n("./src/lib/lessComponent.tsx").a.div("Container", f.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: n,
					hideNSFWPref: s,
					iconClassName: O,
					inSubredditOrProfile: E,
					isCurrentUserProfilePost: j,
					isCommentsPage: w,
					isCompactPinnedPost: I,
					isOverlay: P,
					language: _,
					post: k,
					publicAwardersEnabled: T,
					shouldShowSubscribeButton: S,
					showCornerOutboundLink: L,
					showSubreddit: N,
					showSubredditIcon: M,
					subredditOrProfile: R
				} = e, A = w && T;
				return o.a.createElement(y, {
					className: t
				}, N && R && o.a.createElement("div", {
					className: f.a.subredditIconWrapper
				}, o.a.createElement(p.a, {
					"data-click-id": "subreddit",
					to: R.url
				}, M && o.a.createElement(m.b, {
					className: Object(r.a)(f.a.subredditIcon, O),
					shouldHideNsfwIcon: s,
					subredditOrProfile: R
				}))), o.a.createElement("div", {
					className: f.a.everythingElseWrapper
				}, N && o.a.createElement(d.h, {
					type: k.belongsTo.type,
					id: k.belongsTo.id
				}), o.a.createElement(l.d, {
					className: f.a.postTopMeta,
					flairStyleTemplate: n,
					tooltipType: P ? l.c.Lightbox : void 0,
					language: _,
					post: k,
					showSub: N,
					subredditOrProfile: R
				}), o.a.createElement(c.a, {
					className: f.a.postBadges,
					displayText: R ? R.displayText : null,
					inSubredditOrProfile: E,
					language: _,
					isCompactPinnedPost: I,
					post: k,
					tooltipType: P ? l.c.Lightbox : void 0
				}), R && o.a.createElement(i.a, {
					className: f.a.donationAmount,
					contentId: k.id,
					subredditId: R.id
				}), o.a.createElement(a.a, {
					forceShowAllAwards: w,
					isOverlay: P,
					showAwarders: A,
					tooltipType: P ? l.c.Lightbox : void 0,
					thing: k
				})), R && N && S && !j && o.a.createElement(u.a, {
					getEventFactory: e => Object(g.f)(k.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: R.name,
						type: Object(C.e)(R) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: k.id
				}, "Subscribe"), L && o.a.createElement(b.a, {
					className: f.a.OutboundLink,
					isSponsored: k.isSponsored,
					href: Object(v.A)(e.post),
					source: k.source
				}, o.a.createElement(x.a, {
					className: f.a.outboundLinkIcon
				})))
			}
		},
		"./src/reddit/components/RecommendedPostList/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				footer: "_1khvWSB4GNuM2XwSjluHzO",
				background: "_3P_3k_jLv_J8ieIol9GqFL",
				layout: "_3CzLjB_82xAxB3iyad5yLM",
				arrow: "_3P6Ag4hY0u5ujhvLSAAVUH"
			}
		},
		"./src/reddit/components/RecommendedPostList/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/RecommendedPostList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/noop.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/makeListingKey/index.ts"),
				m = n("./src/reddit/actions/subreddit.ts"),
				p = n("./src/reddit/components/ListingPostList/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/elementIds.ts"),
				b = n("./src/reddit/constants/page.ts"),
				g = n("./src/reddit/constants/postLayout.ts"),
				x = n("./src/reddit/helpers/trackers/lightbox.ts"),
				v = n("./src/reddit/helpers/trackers/screenview.ts"),
				C = n("./src/reddit/i18n/components.tsx"),
				O = n("./src/reddit/selectors/commentsListTruncated.ts"),
				f = n("./src/reddit/selectors/dismissedTruncationList.ts"),
				y = n("./src/reddit/selectors/experiments/chatPost.ts"),
				E = n("./src/reddit/selectors/experiments/listingBelowAll.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				w = n("./src/lib/classNames/index.ts"),
				I = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				P = n("./src/reddit/constants/listings.ts"),
				_ = n("./src/reddit/controls/InternalLink/index.tsx"),
				k = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				T = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				S = n("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				L = n.n(S);
			var N = Object(I.a)(e => {
					const {
						className: t,
						onClick: n,
						shouldDisplaySeeMore: s,
						shouldNavigateToHome: o,
						subredditOrProfile: r
					} = e, {
						primaryColor: i
					} = r, d = !o && i || Object(T.a)(Object.assign({}, e, {
						redditStyle: !0
					})).button, c = s ? "See more" : "Continue browsing";
					return a.a.createElement(_.a, {
						className: Object(w.a)(L.a.footer, t),
						onMouseDown: n,
						to: o ? P.c[P.b.Home] : r.url,
						style: {
							backgroundColor: d
						}
					}, a.a.createElement("div", {
						className: L.a.background
					}), a.a.createElement("div", {
						className: L.a.layout
					}, o ? a.a.createElement(C.c, null, "See more recommended") : a.a.createElement(C.c, null, c, " in ", a.a.createElement(C.b, {
						name: "subredditName"
					}, r.displayText)), a.a.createElement(k.a, {
						className: L.a.arrow
					})))
				}),
				M = n("./src/reddit/components/RecommendedPostList/index.m.less"),
				R = n.n(M);
			const A = Object(d.a)((e, t) => {
					let {
						isOverlay: n
					} = t;
					return n
				}, O.a, f.b, E.b, (e, t, n, s) => {
					const o = Object(E.a)(s);
					return !((!t || !o || n) && e)
				}),
				F = Object(d.c)({
					isChatPost: y.d,
					isLoggedIn: j.F,
					shouldShowSubredditUpsell: A
				}),
				B = Object(i.b)(F, e => ({
					loadMorePosts: t => e(Object(m.r)({
						sort: c.N.HOT,
						subredditName: t
					}))
				}));
			class D extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(h.d) : null, this.onViewed = (e, t) => Object(v.d)(this.listingKey(), c.N.TOP, t, e, c.Pb.WEEK), this.onFooterClick = e => {
						this.props.sendEvent(Object(x.c)("recommended_footer"))
					}
				}
				listingKey() {
					const {
						subredditOrProfile: e
					} = this.props;
					return Object(l.a)(e.name, c.N.TOP, {
						t: c.Pb.WEEK
					})
				}
				renderSmallBanner() {
					const {
						subredditOrProfile: e
					} = this.props, {
						name: t
					} = e;
					return a.a.createElement("div", {
						className: R.a.smallBanner
					}, a.a.createElement(C.c, null, "More posts from the ", a.a.createElement(C.b, {
						name: "name"
					}, t), " community"))
				}
				renderTextBanner() {
					const {
						subredditOrProfile: e
					} = this.props, {
						name: t
					} = e;
					return a.a.createElement("span", {
						className: R.a.textBanner
					}, a.a.createElement(C.c, null, "More from ", a.a.createElement(C.b, {
						name: "name"
					}, t)))
				}
				render() {
					const {
						contentContainerRef: e,
						isChatPost: t,
						isLoggedIn: n,
						shouldShowSubredditUpsell: s,
						subredditOrProfile: r
					} = this.props;
					return n || t || !s ? null : a.a.createElement("div", {
						className: R.a.container
					}, this.renderSmallBanner(), a.a.createElement(p.a, {
						className: R.a.postList,
						disablePlaceholder: !0,
						forcedLayout: g.g.Large,
						getScrollContainer: this.scrollContainer,
						isTruncated: !0,
						listingKey: this.listingKey(),
						listingName: b.c.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: R.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: o.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e
					}), a.a.createElement(N, {
						className: R.a.footer,
						onClick: this.onFooterClick,
						shouldNavigateToHome: !1,
						subredditOrProfile: r
					}))
				}
			}
			t.a = B(Object(u.b)(D))
		},
		"./src/reddit/components/RichTextEditor/Placeholder.m.less": function(e, t, n) {
			e.exports = {
				content: "_3Yo9aCwUoJBBuPKwf3r5cP",
				prompt: "_3CuuiBuYvA4VXTClabDCUK",
				toolbar: "_31gqZmjkDlF5-81EKQ7w_Y",
				topToolbar: "_6rO7u4xvTeWjMNR68asbw",
				bottomToolbar: "_2Qh8N3s0Z7NWIPCVBDCcxH"
			}
		},
		"./src/reddit/components/RichTextEditor/Placeholder.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/FocusableContent/index.tsx"),
				i = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = n("./src/reddit/components/RichTextEditor/Placeholder.m.less"),
				c = n.n(d);
			t.a = e => {
				let {
					className: t,
					isLoading: n,
					toolbarPosition: s
				} = e;
				return o.a.createElement("div", {
					className: t
				}, o.a.createElement(a.a, {
					isFocused: !1
				}, "top" === s && o.a.createElement("div", {
					className: Object(r.a)(c.a.toolbar, c.a.topToolbar, Object(i.a)({
						isLoading: n
					}))
				}), o.a.createElement("div", {
					className: c.a.content
				}, o.a.createElement("div", {
					className: Object(r.a)(c.a.prompt, Object(i.a)({
						isLoading: !0
					}))
				})), "bottom" === s && o.a.createElement("div", {
					className: Object(r.a)(c.a.toolbar, c.a.bottomToolbar, Object(i.a)({
						isLoading: n
					}))
				})))
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, n) {
			e.exports = {
				sideBarStyle: "wYQbYt3FNY5w9oBiYrHzv",
				BannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				bannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1",
				SidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9",
				sidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/app/strings/index.ts"),
				d = n("./src/reddit/components/BannerAd/index.tsx"),
				c = n("./src/config.ts"),
				l = n("./node_modules/lodash/random.js"),
				m = n.n(l),
				p = n("./src/reddit/components/FakeBannerAd/index.m.less"),
				u = n.n(p),
				h = n("./src/lib/lessComponent.tsx");
			const b = h.a.div("BannerContainer", u.a),
				g = h.a.wrapped(e => o.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", u.a),
				x = [{
					img: "/img/house-ads/btc.png",
					href: "/r/btc"
				}, {
					img: "/img/house-ads/campfirecooking.png",
					href: "/r/campfirecooking"
				}, {
					img: "/img/house-ads/casualconversation.png",
					href: "/r/casualconversation"
				}, {
					img: "/img/house-ads/fantrailers.png",
					href: "/r/fantrailers"
				}, {
					img: "/img/house-ads/rubberducks.png",
					href: "/r/advertising"
				}, {
					img: "/img/house-ads/casualconversation.png",
					href: "/r/casualconversation"
				}, {
					img: "/img/house-ads/fantrailers.png",
					href: "/r/fantrailers"
				}, {
					img: "/img/house-ads/imaginarycolorscapes.png",
					href: "/r/imaginarycolorscapes"
				}, {
					img: "/img/house-ads/imaginarydragons.png",
					href: "/r/imaginarydragons"
				}, {
					img: "/img/house-ads/oldschoolcelebs.png",
					href: "/r/oldschoolcelebs"
				}];
			var v = () => {
					const e = m()(0, x.length - 1),
						{
							img: t,
							href: n
						} = x[e];
					return o.a.createElement(b, {
						className: "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}, o.a.createElement("a", {
						href: c.a.redditUrl + n,
						target: "_blank"
					}, o.a.createElement(g, {
						src: c.a.assetPath + t
					})))
				},
				C = n("./src/lib/constants/index.ts"),
				O = n("./src/reddit/components/PostMedia/index.tsx"),
				f = n("./src/reddit/components/PostTitle/index.tsx"),
				y = n("./src/reddit/components/PostTopMeta/index.tsx"),
				E = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				j = n("./src/lib/getShortenedLink.ts"),
				w = n("./src/lib/opener/index.ts"),
				I = n("./src/reddit/actions/ads/index.ts"),
				P = n("./src/reddit/components/PostContainer/index.tsx"),
				_ = n("./src/reddit/constants/adEvents.ts"),
				k = n("./src/reddit/contexts/InsideOverlay.tsx"),
				T = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				S = n("./src/reddit/helpers/adCount/index.ts"),
				L = n("./src/reddit/helpers/pixels.ts"),
				N = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				M = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				R = n("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				A = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				F = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				B = n("./src/reddit/models/Theme/index.ts"),
				D = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				W = n("./src/reddit/models/Media/index.ts"),
				H = n("./src/reddit/components/NativeBannerAd/index.m.less"),
				V = n.n(H);
			const U = h.a.wrapped(e => o.a.createElement("img", {
				className: e.className,
				src: e.src
			}), "BannerAdImage", V.a);
			class G extends o.a.Component {
				render() {
					const {
						post: e
					} = this.props;
					if (!e.media) return null;
					const t = !e.media || Object(W.F)(e.media) || Object(W.C)(e.media) ? "" : e.media.content,
						{
							type: n
						} = e.media;
					if (!t || !n) return null;
					switch (n) {
						case C.eb.IMAGE:
							return o.a.createElement(U, {
								src: t
							});
						default:
							return null
					}
				}
			}
			var K = n("./src/reddit/components/SidebarNativeAd/index.m.less"),
				q = n.n(K);
			const z = h.a.wrapped(y.d, "PostTopMeta", q.a),
				Y = h.a.div("BannerAdContainer", q.a),
				J = e => {
					let {
						children: t
					} = e;
					return o.a.createElement("div", null, t)
				},
				Q = h.a.div("PromotedPostContainer", q.a),
				X = h.a.wrapped(A.a, "OutboundLinkIcon", q.a),
				Z = h.a.div("SourceLinkWrapper", q.a),
				$ = h.a.div("TopLine", q.a),
				ee = h.a.wrapped(f.c, "PostTitle", q.a),
				te = h.a.div("PostMediaWrapper", q.a),
				ne = h.a.div("BackgroundWrapper", q.a),
				se = h.a.wrapped(P.a, "PostContainer", q.a),
				oe = 640,
				re = (e, t) => {
					Object(L.a)(t.events, _.a.Click, t), t.source ? t.source.outboundUrl ? Object(w.d)(t.source.outboundUrl, w.c.BLANK) : Object(w.d)(t.source.url, w.c.BLANK) : Object(w.d)(t.permalink, w.c.BLANK)
				},
				ae = e => Object(R.a)(e.title, 100),
				ie = e => {
					if (e.post.isMediaOnly) return {};
					const t = Object(M.a)(Object(N.a)(e), F.a.actionIcon, F.b.actionIcon);
					return {
						color: t,
						fill: t
					}
				},
				de = e => ({
					background: Object(B.g)(Object(D.a)(e).body, null, null) || ""
				});
			class ce extends o.a.Component {
				constructor() {
					super(...arguments), this.refreshedAt = 1 / 0
				}
				refresh(e) {
					this.refreshedAt = Date.now(), this.props.refreshSidebarPromotedPost()
				}
				componentDidMount() {
					this.refreshedAt = Date.now()
				}
				componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						post: e,
						className: t,
						eventFactory: n,
						isOverlay: s
					} = this.props;
					let r, a, d = {};
					return e.isBlank ? (r = J, a = null) : e.isMediaOnly ? (r = Y, d = {
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}, a = o.a.createElement(G, {
						post: e
					})) : (r = Q, a = o.a.createElement(ne, {
						style: de(this.props)
					}, o.a.createElement($, null, o.a.createElement(z, {
						tooltipType: s ? y.c.Lightbox : void 0,
						language: C.y,
						post: e,
						showTimestamp: !1
					})), o.a.createElement(ee, {
						post: e,
						size: f.b.Large,
						format: ae
					}), e.source && o.a.createElement(Z, null, o.a.createElement(T.a, {
						href: e.source.url,
						isSponsored: !0,
						source: e.source
					}, Object(j.a)(e), o.a.createElement(X, null))), o.a.createElement(te, null, e.media && o.a.createElement(O.a, {
						isListing: !0,
						isNotCardView: !0,
						showCentered: !0,
						post: e,
						availableWidth: oe,
						shouldLoad: !0
					})))), o.a.createElement(r, d, o.a.createElement(se, {
						className: t,
						isOverlay: s,
						post: e,
						onClick: re,
						eventFactory: n,
						style: ie(this.props)
					}, a))
				}
			}
			var le = Object(r.b)(null, (e, t) => ({
					refreshSidebarPromotedPost: () => {
						const {
							placement: n,
							placementIndex: s,
							isOverlay: o
						} = t;
						e(Object(I.c)(Object(S.a)(n, !!o, s)))
					}
				}))(Object(k.b)(Object(E.a)(ce))),
				me = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				pe = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				ue = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				he = n.n(ue);
			const be = Object(a.c)({
					post: (e, t) => {
						const {
							placement: n,
							placementIndex: s
						} = t, o = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(S.a)(n, o, s)]
					},
					pending: e => !e.sidebarPromotedPosts.firstFetch
				}),
				ge = Object(r.b)(be),
				xe = h.a.wrapped(d.a, "BannerAd", he.a),
				ve = h.a.wrapped(pe.a, "ThemedWidget", he.a),
				Ce = h.a.div("SidebarAdPlaceholder", he.a),
				Oe = (e, t, n) => {
					let s = "";
					return t && (s += "overlay-"), s += "sidebar-".concat(e), null != n && (s += "-".concat(n)), s
				},
				fe = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(W.B)(e.media) && e.media.content)),
				ye = e => !!e && e.isBlank;
			class Ee extends o.a.Component {
				render() {
					const {
						className: e,
						pending: t,
						post: n,
						isOverlay: s,
						placementIndex: r,
						refreshKey: a,
						listingName: d,
						placement: c,
						sizes: l,
						position: m,
						redditStyle: p,
						forcePlaceholder: u,
						forceHouseAd: h,
						waitForProgrammatic: b
					} = this.props;
					return u || t || !fe(n) && b ? o.a.createElement(me.a, null, o.a.createElement(ve, {
						className: e,
						contentOnly: !0,
						redditStyle: p
					}, o.a.createElement(Ce, {
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}))) : h ? o.a.createElement(me.a, null, o.a.createElement(ve, {
						className: e,
						contentOnly: !0,
						redditStyle: p
					}, o.a.createElement(v, null))) : fe(n) ? o.a.createElement(me.a, null, o.a.createElement(le, {
						post: n,
						refreshKey: a,
						listingName: d,
						placement: c,
						placementIndex: r
					})) : o.a.createElement(me.a, null, o.a.createElement(ve, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: p
					}, ye(n) && o.a.createElement(le, {
						post: n,
						refreshKey: a,
						listingName: d,
						placement: c,
						placementIndex: r
					}), o.a.createElement(xe, {
						id: Oe(c, s, r),
						sizes: l,
						placement: c,
						listingName: d,
						refreshKey: a,
						position: m,
						dataBeforeContent: Object(i.a)("en", "sidebar.sponsored")
					})))
				}
			}
			t.a = ge(Ee)
		},
		"./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/selectors/brandSafety.ts"),
				i = n("./src/reddit/selectors/comments.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx"),
				l = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
					}
					return n
				};
			t.a = Object(r.b)((e, t) => {
				let {
					postId: n,
					commentsPageKey: s
				} = t;
				return {
					canShowAd: Object(a.a)(e, {
						postId: n
					}) && !Object(d.x)(e),
					waitForProgrammatic: Object(i.d)(e, {
						commentsPageKey: s
					})
				}
			})(e => {
				var {
					canShowAd: t,
					postId: n,
					commentsPageKey: s
				} = e, r = l(e, ["canShowAd", "postId", "commentsPageKey"]);
				return t ? o.a.createElement(c.a, r) : null
			})
		},
		"./src/reddit/components/SidebarNativeAd/index.m.less": function(e, t, n) {
			e.exports = {
				PostTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				postTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				BannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				bannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				PromotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				promotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				OutboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				outboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				SourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				sourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				TopLine: "_1kNrrHG9HK0nS07e9SmLEe",
				topLine: "_1kNrrHG9HK0nS07e9SmLEe",
				PostTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				postTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				PostMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				postMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				BackgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				backgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				PostContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf",
				postContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", o.a)
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, n) {
			e.exports = {
				metaNavLink: "_3K8jBMDp0QPnKaJK8FVP6a",
				navLinkStyles: "_2NJL-agPg8YnfLMLdMbED5",
				subNavTitle: "_2wtKbmW1aPrT3MyHoaupQh",
				navLink: "_1O30sSXmfkKMRZqSaESf0S",
				topBannerVariant: "uGdFXCHH-nwVp4gU3UaTw",
				mActive: "_1YpJV_aDQqujwuofx9-eAX",
				navDropdownIcon: "_3u_CcXw7slod9vNJKIlYvx",
				subNavLink: "_1p4TpHzWWRAkGYYw9_jU-B",
				subNavContainer: "hcJJEc0gVBKH5pWCFgdET",
				subNavList: "_1T423RClx-mTPxfuiCw4UN",
				mIsOpen: "_2azsE3I8rle1m5FBqLLHpN",
				outerContainer: "_1gVVmSnHZpkUgVShsn7-ua",
				innerContainer: "_1_TJAX-8zAT3vVN1Iz7cys"
			}
		},
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/featureFlags/component.tsx"),
				l = n("./src/reddit/selectors/user.ts"),
				m = n("./src/reddit/selectors/widgets.ts"),
				p = n("./src/reddit/actions/subreddit.ts"),
				u = n("./src/reddit/i18n/components.tsx"),
				h = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/react-router-dom/esm/react-router-dom.js")),
				b = n("./src/lib/classNames/index.ts"),
				g = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				x = n("./src/reddit/components/SubredditNav/index.m.less"),
				v = n.n(x);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const f = (e, t, n) => Object(b.a)(e, {
					[v.a.mActive]: t
				}, {
					[v.a.topBannerVariant]: n
				}),
				y = e => {
					var {
						children: t,
						isActive: n,
						isTopBannerVariant: s
					} = e, r = O(e, ["children", "isActive", "isTopBannerVariant"]);
					return o.a.createElement("div", C({
						className: f(v.a.subNavTitle, n, s)
					}, r), o.a.createElement("span", null, t), o.a.createElement(g.b, {
						className: v.a.navDropdownIcon
					}))
				},
				E = e => {
					var {
						className: t,
						isActive: n,
						to: s,
						isTopBannerVariant: r
					} = e, a = O(e, ["className", "isActive", "to", "isTopBannerVariant"]);
					const i = f(v.a.navLink, n, r);
					return s ? o.a.createElement(h.a, C({
						className: i,
						to: s
					}, a)) : o.a.createElement("a", C({
						className: i
					}, a))
				},
				j = e => {
					var {
						className: t,
						isActive: n
					} = e, s = O(e, ["className", "isActive"]);
					return o.a.createElement(h.a, C({
						className: f(v.a.navLink, n)
					}, s))
				},
				w = e => {
					var {
						className: t,
						isActive: n
					} = e, s = O(e, ["className", "isActive"]);
					return o.a.createElement("a", C({
						className: f(v.a.subNavLink, n)
					}, s))
				},
				I = e => {
					var {
						className: t
					} = e, n = O(e, ["className"]);
					return o.a.createElement("div", C({
						className: Object(b.a)(v.a.subNavContainer, t)
					}, n))
				},
				P = e => {
					var {
						className: t,
						isOpen: n
					} = e, s = O(e, ["className", "isOpen"]);
					return o.a.createElement("div", C({
						className: Object(b.a)(v.a.subNavList, t, {
							[v.a.mIsOpen]: n
						})
					}, s))
				};
			const _ = Object(a.c)({
				isActive: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			var k = Object(d.t)()(Object(r.b)(_, (e, t) => ({
					onTurnOnMetaFilter: () => e(Object(p.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					const {
						pageLayer: t,
						subreddit: n
					} = e;
					return n ? o.a.createElement(j, {
						className: v.a.metaNavLink,
						to: n.url,
						isActive: e.isActive,
						onClick: n => {
							Object(d.E)(t) && n.preventDefault(), e.onTurnOnMetaFilter()
						}
					}, o.a.createElement(u.c, null, "Polls")) : null
				}))),
				T = n("./src/lib/linkMatchers/index.ts");
			class S extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isOpen: !1
					}, this.handleOpen = e => this.setState(() => ({
						isOpen: !0
					})), this.handleClose = e => this.setState(() => ({
						isOpen: !1
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return o.a.createElement(I, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, o.a.createElement(y, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), o.a.createElement(P, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var L = S;
			const N = e => {
				const t = e.url && Object(T.g)(T.e, e.url);
				return t ? t.url : e.url
			};
			var M = e => e.menuItem.url ? o.a.createElement(E, {
					href: N(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : o.a.createElement(L, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => o.a.createElement(w, {
					key: "".concat(e.text, "-").concat(N(e)),
					role: "listitem",
					href: N(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				R = n("./src/lib/constants/index.ts");
			const A = Object(d.t)(),
				F = [R.yb.SUBREDDIT, R.yb.COMMENTS, R.yb.COLLECTION_COMMENTS],
				B = Object(a.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && F.indexOf(t.pageLayer.meta.name) > -1
				});
			var D = A(Object(r.b)(B, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(p.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: n,
						isPostsRoute: s,
						isTopBannerVariant: r,
						onTurnOffMetaFilter: a
					} = e, i = s && !n;
					return o.a.createElement(E, {
						to: t,
						isActive: i,
						isTopBannerVariant: r,
						onClick: e => {
							n && (e.preventDefault(), a())
						}
					}, o.a.createElement(u.c, null, "Posts"))
				}))),
				W = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				H = n("./src/higherOrderComponents/makeAsync.tsx");
			var V = Object(H.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("HarbergerTaxBannerPurchaseCTA").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				U = n("./src/reddit/constants/postLayout.ts"),
				G = n("./src/reddit/constants/screenWidths.ts"),
				K = n("./src/reddit/models/Theme/index.ts"),
				q = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				z = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
					}
					return n
				};
			const Y = Object(W.a)(e => {
				var {
					className: t,
					children: n,
					isTopBannerVariant: s
				} = e, r = z(e, ["className", "children", "isTopBannerVariant"]);
				const a = Object(q.a)(r);
				return o.a.createElement("div", {
					className: Object(b.a)(v.a.outerContainer, t),
					style: {
						position: a.navBar.useOverlay && !s ? "absolute" : "static",
						background: s ? "inherit" : Object(K.g)(a.navBar.backgroundColor, a.navBar.backgroundImage, "tiled")
					}
				}, n)
			});
			var J = e => o.a.createElement(Y, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, o.a.createElement("div", {
					className: v.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === U.g.Large ? "".concat(e.maxWidth || G.a, "px") : "100%"
					}
				}, o.a.createElement("div", null, e.children), o.a.createElement(V, null))),
				Q = n("./src/reddit/components/Translated/index.tsx"),
				X = n("./src/reddit/constants/wiki.ts"),
				Z = n("./src/reddit/helpers/trackers/subredditWiki.ts");
			var $ = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: n,
					pageLayer: s
				} = e, r = !!s && !!s.meta && s.meta.name === R.yb.SUBREDDIT_WIKI, a = "wiki/".concat(X.i), i = t.endsWith("/") ? t + a : "".concat(t, "/").concat(a);
				return o.a.createElement(E, {
					isActive: r,
					isTopBannerVariant: n,
					to: i,
					onClick: () => e.sendEvent(Object(Z.g)())
				}, o.a.createElement(Q.a, {
					msgId: "structuredStyles.forms.menuLinks.wikiHomeLinkLabel"
				}))
			};
			const ee = Object(c.a)("spPolls", k),
				te = Object(d.t)(),
				ne = Object(a.c)({
					language: l.P,
					layout: d.K,
					widget: m.f
				}),
				se = Object(r.b)(ne);
			t.a = te(se(Object(i.b)(e => o.a.createElement(J, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && o.a.createElement(o.a.Fragment, null, o.a.createElement(D, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), o.a.createElement(ee, {
				subredditId: e.subredditId
			})), e.widget && o.a.createElement(o.a.Fragment, null, e.widget.showWiki && o.a.createElement($, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, n) => o.a.createElement(M, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: n,
				menuItem: t
			})))))))
		},
		"./src/reddit/components/Widgets/AdRules/index.m.less": function(e, t, n) {
			e.exports = {
				Rule: "_3NwusXLUvLTrYmCFOYpDIA",
				rule: "_3NwusXLUvLTrYmCFOYpDIA",
				RuleIndex: "McQvObPSnfCkWc6C-ti6P",
				ruleIndex: "McQvObPSnfCkWc6C-ti6P",
				RuleTitle: "_2-jOphPs-FiWN_Da514451",
				ruleTitle: "_2-jOphPs-FiWN_Da514451"
			}
		},
		"./src/reddit/components/Widgets/AdRules/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = n("./src/reddit/i18n/utils.ts"),
				d = n("./src/reddit/components/Widgets/AdRules/index.m.less"),
				c = n.n(d);
			const l = r.a.div("Rule", c.a),
				m = r.a.div("RuleIndex", c.a),
				p = r.a.div("RuleTitle", c.a),
				u = ["Keep language civil", "Comments must be relevant to the Promoted Post and contribute to discussion", "Comments can offer feedback or criticism, but personal or other attacks on the advertiser or its products may be removed", "No impersonating or masquerading as celebrities, brands, or other users. To verify yourself in a Promoted Post's thread, message the user promoting the post"];
			t.a = e => o.a.createElement(a.a, {
				className: e.className,
				title: Object(i.c)("Rules for Reddit Ads"),
				redditStyle: !0
			}, u.map((e, t) => o.a.createElement(l, {
				key: t
			}, o.a.createElement(m, null, t + 1, "."), o.a.createElement(p, null, Object(i.c)(e)))))
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SEOTitle/index.tsx"),
				i = n("./src/reddit/components/Widgets/Base/index.m.less"),
				d = n.n(i),
				c = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
					}
					return n
				};
			const l = r.a.div("WidgetBackground", d.a),
				m = r.a.wrapped(e => {
					var {
						children: t
					} = e, n = c(e, ["children"]);
					return o.a.createElement("div", n, o.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", d.a);
			t.b = e => o.a.createElement("div", {
				className: e.className
			}, o.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/Button/index.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				rawHtmlDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				imageButton: "_1dcH2atgEZb6EIz1hPypif",
				textButton: "_3VvVLJHakguGRWc5JxUX40",
				textButtonHoverText: "_1csPJVJm94zTUzhy65Kbxo",
				vanishingTextButtonText: "_2rUZkzEG2dvopABpvgI8Zx"
			}
		},
		"./src/reddit/components/Widgets/Calendar/index.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				rawHtmlDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				EventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				eventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				EventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				eventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				EventDate: "_2VXwUwmJin6h1Pov4foGGE",
				eventDate: "_2VXwUwmJin6h1Pov4foGGE",
				EventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				eventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				EventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				eventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				ToggleDescription: "J6pcR7wS5Fc3tWloQuCxS",
				toggleDescription: "J6pcR7wS5Fc3tWloQuCxS"
			}
		},
		"./src/reddit/components/Widgets/Image/ImageFrame.m.less": function(e, t, n) {
			e.exports = {
				ImageFrame: "_3NeWg805wFgqPuE_-LZKN4",
				imageFrame: "_3NeWg805wFgqPuE_-LZKN4"
			}
		},
		"./src/reddit/components/Widgets/Image/StyledImage.m.less": function(e, t, n) {
			e.exports = {
				StyledImage: "_3WqRAmto46uhALFWnn8-Pa",
				styledImage: "_3WqRAmto46uhALFWnn8-Pa"
			}
		},
		"./src/reddit/components/Widgets/Moderator/index.m.less": function(e, t, n) {
			e.exports = {
				ModeratorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				moderatorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				Username: "ULWj94BYSOqoJDetxgcnU",
				username: "ULWj94BYSOqoJDetxgcnU",
				MessageModsLink: "_3qzNYRLcf8lEELXhDHff5z",
				messageModsLink: "_3qzNYRLcf8lEELXhDHff5z",
				FlairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				flairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				InternalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				internalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				LinkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				linkContainer: "_2pf-KRzaHwj_TjBcOIDrWG"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownRow: "JoWBeMWu_l8J_Hn6Udz_j",
				dropdownRow: "JoWBeMWu_l8J_Hn6Udz_j"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/noop.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/post.ts"),
				p = n("./src/reddit/actions/postCollection/index.ts"),
				u = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = n("./src/reddit/components/OverflowMenu/index.tsx"),
				b = n("./src/reddit/controls/Dropdown/Row.tsx"),
				g = n("./src/reddit/i18n/utils.ts"),
				x = n("./src/reddit/selectors/activeModalId.ts"),
				v = n("./src/reddit/selectors/postCollection.ts"),
				C = n("./node_modules/reselect/es/index.js"),
				O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/helpers/trackers/postCollection.ts"),
				y = n("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less"),
				E = n.n(y);
			const j = c.a.wrapped(b.b, "DropdownRow", E.a);
			let w;
			const I = Object(x.b)("DELETE_COLLECTION_CONFM_MODAL_ID"),
				P = Object(x.b)("EDIT_POST_COLLECTION_MODAL_ID"),
				_ = Object(C.c)({
					createPostUrl: v.d,
					isDeleteConfirmModalOpen: I,
					isEditCollectionModalOpen: P,
					shouldShowCollectionEditOptions: v.s
				}),
				k = Object(i.b)(_, (e, t) => ({
					copyLink: () => e(Object(m.w)(t.permalink)),
					onCreatePost: n => {
						t.shouldShowCreatePost && e(Object(d.b)(n))
					},
					onRemoveCollection: () => e(Object(p.c)(t.collectionId, t.isSubmitPage)),
					onToggleDeleteConfirmModal: () => e(l.i("DELETE_COLLECTION_CONFM_MODAL_ID")),
					onToggleEditModal: async () => {
						w || (w = await Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), n.e("editCollectionModal")]).then(n.bind(null, "./src/reddit/components/EditCollectionModal/index.tsx")).then(e => e.EditCollectionModal)), e(l.i("EDIT_POST_COLLECTION_MODAL_ID"))
					}
				}));
			t.a = k(Object(O.b)(e => {
				const {
					className: t,
					collectionId: n,
					copyLink: s,
					createPostUrl: r,
					isDeleteConfirmModalOpen: i,
					isEditCollectionModalOpen: d,
					onCreatePost: c,
					onRemoveCollection: l,
					onToggleDeleteConfirmModal: m,
					onToggleEditModal: p,
					shouldShowCollectionEditOptions: b,
					shouldShowCreatePost: x,
					targetPosition: v,
					tooltipPosition: C,
					sendEvent: O
				} = e;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(h.b, {
					className: t,
					dropdownId: "collection-menu-".concat(n, "-").concat(x ? 1 : 2),
					onClick: o.a,
					targetPosition: v,
					tooltipPosition: C
				}, a.a.createElement(j, {
					onClick: s,
					displayText: Object(g.c)("Copy collection link")
				}), b && a.a.createElement(a.a.Fragment, null, a.a.createElement(j, {
					onClick: () => {
						O(Object(f.l)(n)), p()
					},
					displayText: Object(g.c)("Edit")
				}), a.a.createElement(j, {
					onClick: () => {
						O(Object(f.k)(n)), m()
					},
					displayText: Object(g.c)("Delete collection")
				}), x && a.a.createElement(j, {
					onClick: () => {
						c(r)
					},
					displayText: Object(g.c)("Create post")
				}))), d && w && a.a.createElement(w, {
					collectionId: n,
					onClose: p,
					onEditSuccess: p
				}), i && a.a.createElement(u.a, {
					actionText: Object(g.c)("Yes, Delete"),
					headerText: Object(g.c)("Delete Collection"),
					modalText: Object(g.c)("Are you sure you want to delete this collection? The posts within the collection won't be deleted."),
					onConfirm: l,
					toggleModal: m,
					trackClick: o.a
				}))
			}))
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownRow: "_3V8ByF4idIiROiWQ9i468R",
				dropdownRow: "_3V8ByF4idIiROiWQ9i468R"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/noop.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/lib/opener/index.ts"),
				c = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				l = n("./src/reddit/components/OverflowMenu/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/Row.tsx"),
				p = n("./src/reddit/i18n/utils.ts"),
				u = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less"),
				h = n.n(u);
			const b = i.a.wrapped(m.b, "DropdownRow", h.a);
			t.a = e => {
				const {
					isFutureEvent: t,
					onAddEventStartTime: n,
					onEditStartTime: s,
					onStartEventNow: r,
					postPermalink: i,
					shouldShowAddEventStartTime: m,
					targetPosition: u,
					tooltipPosition: h
				} = e;
				return a.a.createElement(l.b, {
					className: e.className,
					dropdownId: e.dropdownId,
					onClick: o.a,
					targetPosition: u,
					tooltipPosition: h
				}, m && n && a.a.createElement(b, {
					onClick: n,
					displayText: Object(p.c)("Add event start time")
				}), t && r && a.a.createElement(b, {
					onClick: r,
					displayText: Object(p.c)("Start event now")
				}), t && s && a.a.createElement(b, {
					onClick: s,
					displayText: Object(p.c)("Edit start time")
				}), a.a.createElement(b, {
					onClick: e.onRemoveClick,
					displayText: Object(p.c)("Remove from collection")
				}), i && a.a.createElement(c.a, {
					target: d.c.BLANK,
					rel: d.b,
					isOverlay: !1,
					to: i
				}, a.a.createElement(b, {
					displayText: Object(p.c)("View post")
				})))
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				widgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				TertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				tertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				StyledFlair: "ij57zT3Rtmsew_4V8vYmY",
				styledFlair: "ij57zT3Rtmsew_4V8vYmY",
				cloudDisplay: "l8B49A4v1dhWGGEwM7vYA",
				flairFilter: "_1Dpo5nORF-CHLCeoDHpZuR",
				Flair: "_3b9QdopIknN9AuNvj2kI9X",
				flair: "_3b9QdopIknN9AuNvj2kI9X",
				"m-selected": "XUSGYTFEMdkVpqVqn1ZsC",
				mSelected: "XUSGYTFEMdkVpqVqn1ZsC",
				flairFilterContainer: "qHKWh5t-0ZHqZ00w567bU",
				flairFilterButton: "_1Uh_u9ypgpntBJ_2RC1Ge3"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/fastdom/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/Flair/index.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/constants/parameters.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/helpers/correlationIdTracker.ts"),
				v = n("./src/reddit/helpers/flair.ts"),
				C = n("./src/reddit/helpers/trackers/postFlair.ts"),
				O = n("./src/reddit/models/Widgets/index.ts"),
				f = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				E = n.n(y);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var w = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const I = 129,
				P = Object(b.t)({
					filterName: e => Object(b.P)(e)[h.f],
					url: e => Object(b.T)(e)
				}),
				_ = Object(i.c)({
					subredditId: (e, t) => Object(f.D)(e, t.subredditName)
				}),
				k = Object(a.b)(_),
				T = l.a.div("WidgetContent", E.a),
				S = e => {
					var {
						display: t,
						isFlairFilter: n,
						onMouseDown: s
					} = e, o = w(e, ["display", "isFlairFilter", "onMouseDown"]);
					return r.a.createElement("li", {
						className: Object(d.a)(E.a.StyledFlair, t === O.d.Cloud && E.a.cloudDisplay, {
							[E.a.flairFilter]: n,
							[E.a["m-selected"]]: o.isSelected
						}),
						onMouseDown: s
					}, r.a.createElement(m.b, j({}, o, {
						className: E.a.Flair,
						isFlairFilter: n,
						forceSmallEmojis: !0
					})))
				};
			class L extends r.a.Component {
				constructor(e) {
					super(e), this.flairListRef = r.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(C.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(C.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(C.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(x.d)(x.a.SearchResults), this.props.sendEvent(Object(C.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(v.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(v.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					c.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > I && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return r.a.createElement(g.n, {
						className: E.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? s.fbt._("See more", null, {
						hk: "2fWFes"
					}) : s.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: n
					} = this.props;
					return r.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => r.a.createElement(S, {
						key: e.templateId,
						display: n.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(v.e)(this.props.url, Object(v.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, n = t ? I : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return r.a.createElement("div", {
						className: E.a.flairFilterContainer,
						style: {
							maxHeight: n
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: n
					} = this.props;
					return r.a.createElement("ul", null, r.a.createElement(S, {
						key: e.templateId,
						display: n.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(v.e)(this.props.url, Object(v.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: n
					} = this.state, s = t.order, o = this.getFlairsFromIds(s), a = e && this.getSelectedFlair(o) || void 0, i = t.order.length > s.length || n && !a;
					return r.a.createElement(u.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, r.a.createElement(T, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(o), i && this.renderButton()))
				}
			}
			t.a = P(k(Object(p.b)(L)))
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/app/strings/index.ts"),
				a = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = n("./src/reddit/connectors/connectToLanguage.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				m = n("./src/reddit/components/RichTextJson/index.tsx"),
				p = n("./src/reddit/helpers/dom/index.ts"),
				u = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				h = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				b = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				g = n("./src/reddit/models/Widgets/index.ts"),
				x = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				v = n.n(x);
			const C = c.a.div("RuleShortName", v.a),
				O = c.a.div("RuleIndex", v.a),
				f = c.a.div("RuleTitle", v.a),
				y = c.a.div("RuleDescription", v.a),
				E = c.a.wrapped(l.a, "RawHTMLDisplay", v.a),
				j = {};
			class w extends o.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(p.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === g.e.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: n,
						shouldShowFullDisplay: s
					} = this, r = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), a = !s(e) && !!r;
					return o.a.createElement(C, {
						className: Object(d.a)({
							[v.a.pointerCursor]: a
						}),
						onClick: s(e) || !r ? void 0 : n
					}, o.a.createElement(b.a, null, o.a.createElement(O, null, "".concat(e.humanIndex, ".")), o.a.createElement(f, null, "".concat(e.rule.shortName)), o.a.createElement("div", null, !s(e) && r && (t.isVisible ? o.a.createElement(h.a, {
						className: v.a.Chevron
					}) : o.a.createElement(u.a, {
						className: v.a.Chevron
					})))), t.isVisible && o.a.createElement(y, null, e.rule.descriptionRichText ? o.a.createElement(m.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: j
					}) : e.rule.descriptionHtml ? o.a.createElement(E, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			n.d(t, "a", (function() {
				return I
			}));
			const I = Object(i.a)(e => e.rules.length > 0 ? o.a.createElement(a.a, {
				className: e.className,
				styles: e.styles,
				title: Object(r.a)(e.language, "structuredStyles.widgets.subreddit-rules.subredditRules", {
					subreddit: e.subredditName
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, n) {
				return o.a.createElement(w, {
					key: "rule".concat(t.shortName).concat(t.createdUtc),
					rule: t,
					display: e.display,
					humanIndex: n + 1
				})
			}))) : null);
			t.b = e => o.a.createElement(I, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/TextArea/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				widgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				RawHTMLDisplay: "_1-yyC7m50efEvz4Q5I7jn5",
				rawHtmlDisplay: "_1-yyC7m50efEvz4Q5I7jn5"
			}
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/OutboundLink/index.tsx"),
				m = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/linkMatchers/index.ts"),
				h = n("./src/reddit/models/Image/index.tsx"),
				b = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = n("./src/reddit/models/Widgets/index.ts"),
				x = n("./src/reddit/selectors/structuredStyles.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/components/Widgets/Button/index.m.less"),
				O = n.n(C);
			const f = (e, t, n) => {
					let s = {},
						o = {};
					s = e.kind === g.f.Image ? {
						"--widget-button-background-image": "url('".concat(e.url, "')")
					} : ((e, t, n) => {
						let {
							color: s,
							fillColor: o,
							textColor: r
						} = e;
						return t && (s = r = n, o = "transparent"), {
							"--widget-button-background-color": "".concat(o || "transparent"),
							"--widget-button-border": "1px solid ".concat(s),
							"--widget-button-color": "".concat(r || s)
						}
					})(e, t, n);
					const r = e.hoverState || e;
					if (r.kind === g.f.Image) o = {
						"--widget-button-hover-background-image": "url('".concat(r.url, "')"),
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: s,
							textColor: a
						} = r;
						t && (e = a = n, s = "transparent"), o = {
							"--widget-button-hover-background-color": "".concat(s || "transparent"),
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": "1px solid ".concat(e),
							"--widget-button-hover-color": "".concat(a || e)
						}
					}
					return Object.assign({}, s, o)
				},
				y = e => e.kind === g.f.Image ? O.a.imageButton : O.a.textButton,
				E = e => {
					const t = Object(g.n)(e),
						n = Object(u.g)(u.e, t);
					return n ? n.url : e.url
				},
				j = Object(m.a)(e => {
					const {
						button: t,
						overrideColors: n
					} = e, s = Object(b.a)(e).button;
					return o.a.createElement(c.i, {
						className: y(t),
						style: f(t, n, s)
					}, t.kind === g.f.Text && o.a.createElement("span", {
						className: t.hoverState ? O.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.f.Text && o.a.createElement("span", {
						className: O.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				w = e => o.a.createElement(l.a, {
					href: E(e.button),
					isSponsored: !1,
					source: null
				}, o.a.createElement(j, e)),
				I = p.a.wrapped(i.a, "RawHTMLDisplay", O.a);
			var P = Object(r.b)(() => Object(a.c)({
					forceRedditStyle: x.m,
					isNightmodeOn: v.R
				}))(e => o.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && o.a.createElement(I, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.f.Image || e.url !== h.c) && (!e.hoverState || e.hoverState.kind !== g.f.Image || e.hoverState.url !== h.c)).map(t => o.a.createElement(w, {
					key: "".concat(t.text, "-").concat(t.url),
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				_ = n("./src/lib/humanizeDate/index.ts"),
				k = n("./src/reddit/controls/TextButton/index.tsx"),
				T = n("./src/reddit/i18n/utils.ts"),
				S = n("./src/reddit/components/Widgets/Calendar/index.m.less"),
				L = n.n(S);
			const N = 100,
				M = {
					isExpanded: !1
				},
				R = p.a.wrapped(i.a, "RawHTMLDisplay", L.a),
				A = p.a.div("EventContainer", L.a),
				F = p.a.div("EventTitle", L.a),
				B = p.a.div("EventDate", L.a),
				D = p.a.div("EventLocation", L.a),
				W = p.a.div("EventDescription", L.a),
				H = p.a.wrapped(k.a, "ToggleDescription", L.a);
			class V extends o.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = M
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > N ? o.a.createElement(W, null, t.isExpanded ? e.text : e.text.slice(0, N), o.a.createElement(H, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? Object(T.c)("read less") : Object(T.c)("...read more"))) : o.a.createElement(W, null, e.text)
				}
			}
			const U = Object(a.c)({
				language: v.P
			});
			var G = Object(r.b)(U)(e => o.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, n) => o.a.createElement(A, {
					key: "".concat(n, "-").concat(t.title)
				}, o.a.createElement(F, null, t.titleHtml ? o.a.createElement(R, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && o.a.createElement(B, null, Object(_.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && o.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						n = t.getHours(),
						s = t.getMinutes();
					return s < 10 ? "".concat(n, ":0").concat(s) : "".concat(n, ":").concat(s)
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && o.a.createElement(D, null, t.locationHtml ? o.a.createElement(R, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && o.a.createElement(V, {
					language: e.language,
					text: t.description
				}))))),
				K = n("./src/reddit/components/TrackingHelper/index.tsx"),
				q = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var z = Object(K.b)(e => o.a.createElement(q.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const Y = Object(a.c)({
					stylesheet: e => e.stylesheets
				}),
				J = Object(r.b)(Y),
				Q = (e, t, n) => '<head>\n  <link rel="stylesheet" href="'.concat(e, '">\n  <link rel="stylesheet" href="').concat(t, '">\n  <base target="_blank">\n</head>\n<body>').concat(n, "</body>");
			class X extends o.a.Component {
				constructor() {
					super(...arguments), this.storeRef = e => {
						this.iframe = e
					}
				}
				shouldComponentUpdate(e) {
					return (e.widget.stylesheetUrl !== this.props.widget.stylesheetUrl || e.widget.textHtml && e.widget.textHtml !== this.props.widget.textHtml) && (this.renderIframeContent(e), this.writeIFrameDocument()), e.widget.height !== this.props.widget.height
				}
				writeIFrameDocument() {
					this.iframe && this.iframe.contentWindow && void 0 !== this.iframeContent && (this.iframe.contentWindow.document.open(), this.iframe.contentWindow.document.write(this.iframeContent), this.iframe.contentWindow.document.close())
				}
				componentWillMount() {
					this.renderIframeContent(this.props)
				}
				componentDidMount() {
					this.iframe && this.iframe.contentWindow && this.iframeContent && (this.iframe.contentWindow.document.body && this.iframe.contentWindow.document.body.childNodes.length || this.writeIFrameDocument())
				}
				renderIframeContent(e) {
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = Q(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
				}
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(d.a, {
						contentOnly: !0,
						truncateThreshold: e.truncateThreshold,
						widgetKind: e.widget.kind
					}, o.a.createElement("iframe", {
						ref: this.storeRef,
						width: "100%",
						height: e.widget.height || 300,
						srcDoc: this.iframeContent
					}))
				}
			}
			var Z = J(X),
				$ = n("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				ee = n.n($);
			var te = p.a.div("ImageFrame", ee.a),
				ne = n("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				se = n.n(ne);
			var oe = p.a.img("StyledImage", se.a);
			class re extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						imageIndex: this.getRandomIndex(e)
					}
				}
				getRandomIndex(e) {
					if (!e.widget.data.length) return -1;
					let t = Math.floor(Math.random() * e.widget.data.length);
					if (e.widget.data[t].url === h.c) {
						t = -1;
						for (let t = 0; t < e.widget.data.length; t++)
							if (e.widget.data[t].url !== h.c) return t
					}
					return t
				}
				componentWillReceiveProps(e) {
					const {
						props: t,
						state: n
					} = this;
					e.subredditName === t.subredditName && e.widget.data[n.imageIndex] && e.widget.data[n.imageIndex] === t.widget.data[n.imageIndex] || this.setState(t => ({
						imageIndex: this.getRandomIndex(e)
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (t.imageIndex < 0) return null;
					const n = e.widget.data[t.imageIndex],
						s = o.a.createElement(te, null, o.a.createElement(oe, {
							alt: Object(T.c)("Widget image"),
							src: n.url
						}));
					return n.linkUrl ? o.a.createElement(l.a, {
						href: n.linkUrl,
						isSponsored: !1,
						source: null
					}, s) : s
				}
			}
			var ae = re,
				ie = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				de = n("./src/reddit/components/Flair/index.tsx"),
				ce = n("./src/reddit/controls/InternalLink/index.tsx"),
				le = n("./src/reddit/icons/fonts/helpers.tsx"),
				me = n("./src/reddit/icons/fonts/Envelope/index.m.less"),
				pe = n.n(me);
			var ue = p.a.wrapped(e => o.a.createElement("i", {
					className: "".concat(Object(le.b)("envelope"), " ").concat(e.className)
				}), "Envelope", pe.a),
				he = n("./src/reddit/models/Flair/index.ts"),
				be = n("./src/reddit/components/Widgets/Moderator/index.m.less"),
				ge = n.n(be);
			const xe = p.a.div("ModeratorListItem", ge.a),
				ve = p.a.div("Username", ge.a),
				Ce = p.a.a("MessageModsLink", ge.a),
				Oe = p.a.wrapped(de.b, "FlairComponent", ge.a),
				fe = e => e.authorFlairType === he.f.Richtext ? {
					backgroundColor: e.authorFlairBackgroundColor,
					richtext: e.authorFlairRichText,
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				} : {
					backgroundColor: e.authorFlairBackgroundColor,
					text: e.authorFlairText || "",
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				},
				ye = e => o.a.createElement(ve, null, "u/".concat(e)),
				Ee = p.a.wrapped(ce.a, "InternalLink", ge.a),
				je = p.a.div("LinkContainer", ge.a);
			var we = e => {
					const {
						subredditName: t,
						widget: n
					} = e;
					return o.a.createElement(d.a, {
						styles: n.styles,
						title: Object(T.c)("Moderators"),
						headerButton: o.a.createElement(Ce, {
							href: "https://reddit.com/message/compose?to=/r/".concat(t),
							target: "_blank"
						}, o.a.createElement(ue, null))
					}, n.mods.map(e => o.a.createElement(xe, {
						key: e.name
					}, (e => o.a.createElement(ie.a, {
						to: "/user/".concat(e.name, "/")
					}, ye(e.name)))(e), o.a.createElement(Oe, {
						flair: fe(e),
						forceSmallEmojis: !0
					}))), o.a.createElement(je, null, o.a.createElement(Ee, {
						to: "/r/".concat(t, "/about/moderators/")
					}, Object(T.c)("View All Moderators"))))
				},
				Ie = n("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Pe = n("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				_e = n("./src/reddit/components/Widgets/TextArea/index.m.less"),
				ke = n.n(_e);
			const Te = p.a.div("WidgetContent", ke.a),
				Se = p.a.wrapped(i.a, "RawHTMLDisplay", ke.a);
			var Le = e => o.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, o.a.createElement(Te, null, o.a.createElement(Se, {
					html: e.widget.textHtml || ""
				}))),
				Ne = n("./src/reddit/components/Widgets/Base/index.tsx"),
				Me = e => o.a.createElement(Ne.b, null, "This widget hasn't been implemented yet!");
			t.a = e => {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return we;
						case "textarea":
							return Le;
						case "button":
							return P;
						case "subreddit-rules":
							return Pe.b;
						case "community-list":
							return z;
						case "calendar":
							return G;
						case "image":
							return ae;
						case "custom":
							return Z;
						case "post-flair":
							return Ie.a;
						default:
							return Me
					}
				}(e.widget);
				return o.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "b", (function() {
				return E
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/actions/ads/index.ts"),
				i = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/postList.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				p = n("./src/reddit/helpers/trackers/post.ts"),
				u = n("./src/reddit/components/PostList/Placeholder.tsx"),
				h = n("./src/reddit/featureFlags/index.ts"),
				b = n("./src/reddit/selectors/listings.ts"),
				g = n("./src/reddit/selectors/posts.ts"),
				x = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/selectors/tracking.ts");

			function C() {
				return Object(l.t)({
					currentProfileName: l.h,
					isCommentPermalink: l.v,
					isCommentsPage: l.w,
					isFrontpage: l.y,
					isProfilePostListing: l.H,
					pageLayer: e => e
				})
			}
			const O = C(),
				f = {
					apiError: b.c,
					apiPending: b.d,
					measureScrollFPS: h.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(l.K)(e, t),
					loadMore: b.g,
					postsById: g.T,
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: n,
							listingName: s,
							inSubredditOrProfile: o
						} = t;
						return Object(g.F)(e, n, s, o)
					}),
					subredditsById: x.V,
					viewportDataLoaded: v.a,
					pageReferrer: l.N,
					postListPlaceholderComponent: () => u.a
				},
				y = Object(o.c)(f),
				E = (e, t) => ({
					onBottomViewed: (t, n) => e(d.c(t, n)),
					adBrandSafetyStatusReceived: t => {
						e(a.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						e(i.A(t))
					},
					trackOnPostEnteredViewport: (t, n, s) => {
						e(i.D(t, s))
					},
					trackOnPostExitedViewport: (t, n, s, o) => {
						e(i.E(t, s, o))
					}
				}),
				j = Object(s.b)(y, E, (e, t, n) => Object.assign({}, e, t, n, {
					postClickEvent: p.f,
					postComponentForLayout: e => Object(m.b)(Object.assign({}, e))
				}));
			t.a = e => Object(c.b)(O(j(e)))
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = o.a.createContext(() => () => {})
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var d = e => o.a.createElement("svg", i({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), o.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, o.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, o.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				c = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = n("./src/reddit/controls/Checkbox/index.m.less"),
				m = n.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const h = e => t => {
					const {
						className: n,
						disabled: s,
						redditStyle: a,
						"data-redditstyle": i
					} = t, d = u(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), c = ((e, t, n) => {
						const s = !(!t && !n);
						let o = "";
						return o = e ? s ? m.a.mDisabledRedditStyle : m.a.mDisabled : s ? m.a.mActiveRedditStyle : m.a.mActive
					})(s, a, i);
					return o.a.createElement(e, p({
						className: Object(r.a)(m.a.Checkbox, c, n)
					}, d))
				},
				b = h(c.a),
				g = h(d);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? g : e.isCheckboxSelected ? b : a.a;
				return o.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, o.a.createElement(t, {
					className: Object(r.a)(m.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, n) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "d", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/app/strings/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				d = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/i18n/utils.ts")),
				c = n("./src/reddit/controls/MetaData/index.m.less"),
				l = n.n(c),
				m = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
					}
					return n
				};
			const p = a.a.span("metaText", l.a),
				u = e => o.a.createElement(p, e, " · "),
				h = Object(r.d)("comment.point"),
				b = e => {
					var {
						isScoreHidden: t,
						language: n,
						score: s,
						useUpvotes: r
					} = e, a = m(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const c = Object(i.b)(s),
						l = Object(d.c)("\n    ".concat(Object(d.b)("score", c), " ").concat(Object(d.a)("upvotes", ["upvote", "upvotes"], s), "\n  ")),
						u = t ? Object(d.c)("Score hidden") : r ? l : h(n, s, {
							count: c
						});
					return o.a.createElement(p, a, u)
				},
				g = (e, t) => {
					const n = Object(r.c)(t, "posts.comments.noun", e, {
						count: Object(i.b)(e)
					});
					return o.a.createElement(p, null, n)
				}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			}));
			var s, o = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
				switch (e) {
					case s.Ethereum:
						return "Ethereum Main Network";
					case s.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function i(e, t, n) {
				return Object(r.a)(e, {
					method: "post",
					endpoint: "".concat(o.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function d(e, t, n) {
				return await Object(r.a)(e, {
					method: "post",
					endpoint: "".concat(o.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: n
				})
			}
			async function c(e, t, n) {
				return await Object(r.a)(e, {
					method: "delete",
					endpoint: "".concat(o.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(n)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(s || (s = {}))
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/lodash/get.js"),
				o = n.n(s),
				r = n("./src/config.ts"),
				a = n("./src/graphql/operations/PollVote.json"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				l = (n("./src/reddit/models/Poll/index.ts"), n("./src/reddit/endpoints/governance/requester.ts"));

			function m(e, t, n, s) {
				return Object(l.a)(e, {
					method: "put",
					endpoint: "".concat(r.a.metaUrl, "/polls/").concat(t, "/").concat(n, "/votes/me/").concat(s)
				})
			}
			const p = (e, t, n) => Object(i.a)(e, Object.assign({}, a, {
				variables: {
					input: {
						postId: t,
						optionId: n
					}
				}
			}));

			function u(e, t) {
				return Object(l.a)(Object(d.a)(e, [c.a]), {
					method: "get",
					endpoint: "".concat(e.apiUrl, "/by_id/").concat(t, ".json")
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						title: o()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: o()(e.body, ["data", "children", 0, "data", "permalink"], "")
					}
				}) : e)
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/config.ts"),
				o = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(r.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: o.bb.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							s = {
								[t.subredditId]: n
							};
						return Object.assign({}, e, {
							body: s
						})
					}
					return e
				})
			}

			function i(e, t) {
				return Object(r.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: o.bb.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						wallets: e.body
					}
				}) : e)
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/featureFlags/index.ts"),
				d = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
					}
					return n
				};

			function c(e, t, n) {
				const s = Object(a.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(r.b)(s)(e => {
					const {
						featureEnabled: s,
						dispatch: r
					} = e, a = d(e, ["featureEnabled", "dispatch"]);
					return s ? o.a.createElement(t, a) : void 0 !== n ? o.a.createElement(n, a) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/models/WhitelistStatus/index.ts");
			const o = (e, t) => {
				const n = e.some(e => e.isNSFW),
					o = t.some(e => e.wls === s.a.NO_ADS);
				return !n && !o
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/lib/isFakeSubreddit/index.ts"),
				o = n("./src/reddit/constants/postLayout.ts");
			const r = Math.floor(100 * Math.random());
			var a;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(a || (a = {}));
			t.b = (e, t, n, a, i) => {
				const d = {
					subreddit_screen: !1,
					logged_in: !!t.account,
					placement: e,
					platform: "redesign",
					full_url: n,
					layout: o.b[t.prefs.layout]
				};
				return a && !Object(s.a)(a.name) && (d.subreddit = a.name, d.subreddit_screen = !0), d.wls = 6, d.whitelist_status = "all_ads", d.percentage = d.random_number = r, i && (d.position = i), d
			}
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(s.a)(e).banner.iconImage ? String(Object(s.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "i", (function() {
				return x
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/i18n/utils.ts");

			function o() {
				return window.ethereum
			}

			function r() {
				const e = o();
				return !(!e || !e.isMetaMask)
			}

			function a() {
				const e = o();
				return e && e.selectedAddress || null
			}

			function i() {
				return o().networkVersion || null
			}

			function d() {
				const e = o();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return a() ? Promise.resolve() : e.enable()
			}
			const c = 4001;
			async function l(e, t, s, r) {
				const [a, i] = await Promise.all([n.e("vendors~CryptoLibEthers").then(n.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers), t.then(e => e.abi)]);
				await d();
				const c = new a.providers.Web3Provider(o()).getSigner(),
					l = new a.Contract(e, i, c),
					m = await l[s](...r);
				return await m.wait()
			}
			const m = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "to",
						type: "address"
					}, {
						name: "value",
						type: "uint256"
					}, {
						name: "data",
						type: "bytes"
					}],
					name: "send",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			const p = 1;
			async function u(e, t, s, o, r) {
				const a = await n.e("vendors~CryptoLibEthers").then(n.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers),
					{
						bigNumberify: i,
						hexlify: d,
						hexZeroPad: c,
						toUtf8Bytes: u
					} = a.utils,
					h = i(s).add(r),
					b = p,
					g = "0x" + [d(1)].concat([b, i(o), i(r)].map(d).map(e => c(e, 32))).concat(d(u(""))).map(e => e.substr(2)).join("");
				return async function(e, t, n, s) {
					return l(e, Promise.resolve(m), "send", [t, n, s])
				}(e, t, h.toString(), g)
			}
			const h = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "_subscriber",
						type: "address"
					}, {
						name: "_units",
						type: "uint16"
					}],
					name: "subscribe",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			async function b(e, t, n) {
				await d();
				const o = a() || "";
				if (t.toLowerCase() !== o.toLowerCase()) throw new Error(Object(s.c)("Please select your registered address in MetaMask: ") + t);
				return l(e, Promise.resolve(h), "subscribe", [t, n])
			}

			function g(e) {
				const t = o();
				return new Promise((n, o) => {
					const r = JSON.stringify(e);
					t.sendAsync({
						method: "eth_signTypedData_v3",
						params: [t.selectedAddress, r],
						from: t.selectedAddress
					}, (e, t) => {
						if (e) o(e);
						else {
							const e = t && t.result;
							e ? n(e) : o({
								message: Object(s.c)("No signature returned from ethereum provider.")
							})
						}
					})
				})
			}

			function x(e) {
				return new Promise((t, n) => {
					o().sendAsync({
						method: "metamask_watchAsset",
						params: {
							type: "ERC20",
							options: e
						},
						id: Math.round(1e5 * Math.random())
					}, (e, s) => {
						e || "error" in s ? n("There was an error tracking the token") : t()
					})
				})
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = n("./node_modules/bignumber.js/bignumber.js"),
				o = n("./src/lib/prettyPrintNumber/index.ts");

			function r(e, t) {
				const n = new s.BigNumber(e),
					o = new s.BigNumber(t);
				return n.dividedBy(o).decimalPlaces(2).toString()
			}

			function a(e, t) {
				return Object(o.b)(parseInt(r(e, t), 10))
			}

			function i(e, t) {
				const n = new s.BigNumber(e),
					o = new s.BigNumber(t);
				return n.multipliedBy(o).toFixed(0)
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/trackers/otherDiscussions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => Object.assign({}, Object(s.defaults)(e), {
					media: Object(s.media)(e, t),
					profile: Object(s.profile)(e),
					subreddit: Object(s.subreddit)(e) || Object(s.subredditByPostOrCommentId)(e, t)
				}),
				r = e => t => Object.assign({
					source: "post",
					action: "click",
					noun: "other_discussions",
					post: Object(s.post)(t, e)
				}, o(t, e)),
				a = e => t => Object.assign({
					source: "other_discussions",
					action: "click",
					noun: "dismiss",
					post: Object(s.post)(t, e)
				}, o(t, e))
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "m", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "q", (function() {
				return p
			})), n.d(t, "r", (function() {
				return u
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "n", (function() {
				return j
			})), n.d(t, "o", (function() {
				return w
			}));
			var s = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = e => Object.assign({}, o.defaults(e), {
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				a = () => e => Object.assign({
					source: "wiki",
					action: "click",
					noun: "edit"
				}, r(e)),
				i = () => e => Object.assign({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki"
				}, r(e)),
				d = e => t => Object.assign({
					source: "wiki",
					action: "click",
					noun: e
				}, r(t)),
				c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return d(e ? "create_wiki_page" : "save_wiki_page")
				},
				l = d("compare_wiki_pages"),
				m = d("revert_wiki_page"),
				p = d("view_wiki_page"),
				u = d("view_source"),
				h = d("add_wiki_page_contributor"),
				b = d("remove_wiki_page_contributor"),
				g = d("save_wiki_page_settings"),
				x = d("copy_url"),
				v = d("add_wiki_subreddit_contributor"),
				C = d("remove_wiki_subreddit_contributor"),
				O = d("ban_wiki_contributor"),
				f = d("unban_wiki_contributor"),
				y = e => d(e ? "show_wiki_revision" : "hide_wiki_revision"),
				E = {
					[s.a.Inherit]: "subreddit_wiki_perms",
					[s.a.Contributors]: "only_wiki_contributors",
					[s.a.Mods]: "only_mods"
				},
				j = e => t => Object.assign({}, r(t), {
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: o.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				w = e => t => Object.assign({}, r(t), {
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: o.actionInfo(t, {
						settingValue: E[e]
					})
				})
		},
		"./src/reddit/helpers/truncateStringWithEllipsis.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = (e, t) => e.length > t ? e.slice(0, t - 1).replace(/\s*$/, "") + "…" : e
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, n) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/fonts/Expand/index.m.less": function(e, t, n) {
			e.exports = {
				Expand: "_3wtzqtIQz3ef53grMdBKpl",
				expand: "_3wtzqtIQz3ef53grMdBKpl"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, n) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = n.n(a);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowCollapse"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, n) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = n.n(a);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, t, n) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
			}
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, n) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), o.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), o.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), o.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("path", {
					d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
				}), o.a.createElement("path", {
					d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/layout/page/Lightbox/FakeLightbox.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				l = n("./src/reddit/components/AlertBanner/heights.ts"),
				m = n("./src/reddit/components/AppRouter/index.tsx"),
				p = n("./src/reddit/components/LightboxHeader/index.tsx"),
				u = n("./src/reddit/constants/componentSizes.ts"),
				h = n("./src/reddit/layout/page/Lightbox/index.tsx"),
				b = n("./src/reddit/models/Theme/index.ts"),
				g = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/layout/page/Lightbox/index.m.less"),
				C = n.n(v);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const y = Object(r.b)(() => Object(a.c)({
					showFPR: x.E,
					showSuspended: x.L
				})),
				E = Object(d.a)(e => {
					var {
						className: t,
						isCollectionLayout: n,
						theme: s
					} = e, r = f(e, ["className", "isCollectionLayout", "theme"]);
					const a = Object(g.a)(Object.assign({
						theme: s
					}, r));
					return o.a.createElement("div", O({
						className: Object(i.a)(C.a.fakeOverlay, t),
						style: {
							"--fakelightbox-overlay-background": Object(b.g)(a.canvas, a.canvasImgUrl, a.canvasImgPosition),
							"--fakelightbox-overlay-max-width": "".concat(n ? u.h : u.i, "px")
						}
					}, r))
				});
			class j extends o.a.Component {
				constructor() {
					super(...arguments), this.renderWrapper = e => {
						const t = {
							browserInfo: e,
							showSuspended: this.props.showSuspended,
							showFPR: this.props.showFPR
						};
						return o.a.createElement(m.a, {
							className: Object(i.a)(C.a.fakeOverlayLightboxHeaderWrapper, {
								[C.a.narrow]: !this.props.isCollectionLayout
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
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(E, {
						isCollectionLayout: !e.isCollectionLayout,
						onClick: e.handleFakeLightboxOverlayClick
					}), o.a.createElement(c.a.Consumer, null, this.renderWrapper), o.a.createElement(h.a, e))
				}
			}
			t.a = y(j)
		},
		"./src/reddit/layout/page/Lightbox/index.m.less": function(e, t, n) {
			e.exports = {
				lightboxContainer: "_1npCwF50X2J7Wt82SZi6J0",
				mIsCollectionLayout: "_2mmpCGz_MbQyZXoaIL_u6I",
				lightboxContent: "u35lf2ynn4jHsVUwPmNU",
				mIsFakeOverlay: "_2gEUIJsfk7ZZ0euRwRyv08",
				mNotCollectionLayout: "Dx3UxiK86VcfkFQVHNXNi",
				lightboxSidebar: "_2Xq-4oyrEvHjL5U_EeMnK8",
				fakeOverlay: "_1QwQLdEXq0cZZb7vcte4KK",
				fakeOverlayContainer: "_3OGqXkiUb_0ZMlksb26boO",
				fakeOverlayContent: "_3KaECfUAGLfWQPO5eNjMNl",
				fakeOverlayLightboxHeaderWrapper: "_9BEqyBVXtRCQxyeYwqJMB",
				narrow: "_1VToppe137NbqV5o2PhSdN",
				showDeprecated: "_2NxbeazXeXu0bSJRcwSxd8",
				showFPR: "Hpitc80wLQqDqDh9A37wr",
				showFpr: "Hpitc80wLQqDqDh9A37wr",
				showSuspended: "_39xFv40KohPmMxYVnMJmp"
			}
		},
		"./src/reddit/layout/page/Lightbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/page/Lightbox/index.m.less"),
				i = n.n(a);
			const d = e => o.a.createElement("div", {
					tabIndex: e.tabIndex,
					ref: e.innerRef,
					className: Object(r.a)(i.a.lightboxContainer, {
						[i.a.mIsCollectionLayout]: e.isCollectionLayout,
						[i.a.fakeOverlayContainer]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				c = e => o.a.createElement("div", {
					className: Object(r.a)(i.a.lightboxContent, {
						[i.a.mNotCollectionLayout]: !e.isCollectionLayout,
						[i.a.mIsFakeOverlay]: e.isFakeOverlay,
						[i.a.fakeOverlayContent]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				l = e => o.a.createElement("div", {
					className: Object(r.a)(i.a.lightboxSidebar, {
						[i.a.mIsFakeOverlay]: e.isFakeOverlay,
						[i.a.mIsCollectionLayout]: e.isCollectionLayout
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
						isCollectionLayout: n,
						isFakeOverlay: s,
						sidebar: r
					} = this.props;
					return o.a.createElement(d, {
						innerRef: this.setContainerRef,
						isCollectionLayout: n,
						isFakeOverlay: s,
						tabIndex: -1
					}, o.a.createElement(c, {
						isCollectionLayout: n,
						isFakeOverlay: s,
						redditStyle: !0
					}, t, e), r && o.a.createElement(l, {
						isCollectionLayout: n,
						isFakeOverlay: s
					}, r))
				}
			}
			t.a = m
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, n) {
			"use strict";
			var s, o;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(s || (s = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(o || (o = {}))
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less": function(e, t, n) {
			e.exports = {
				CommentsNavigationPane: "_1k2YW82YLtn1xvksm7RHIO",
				commentsNavigationPane: "_1k2YW82YLtn1xvksm7RHIO",
				linkOrOverlay: "_1eQ54MneFHfYv8GJO9o-jg",
				OtherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6",
				otherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6"
			}
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/otherDiscussions/constants.ts"),
				d = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/helpers/path/index.ts"),
				m = n("./src/reddit/helpers/trackers/otherDiscussions.ts"),
				p = n("./src/reddit/i18n/components.tsx"),
				u = n("./src/reddit/selectors/comments.ts"),
				h = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				g = n.n(b);
			const x = Object(r.b)(() => Object(a.c)({
				headComment: u.y,
				otherDiscussionsCount: h.y,
				post: u.F
			}));
			t.a = Object(c.b)(x(e => {
				let {
					commentId: t,
					headComment: n,
					isOverlay: s,
					otherDiscussionsCount: r,
					post: a,
					postId: c,
					sendEvent: u
				} = e;
				if (!a) return null;
				const h = void 0 !== t,
					b = a.permalink,
					x = r > 0,
					v = Object(l.b)(Object(i.e)(b));
				return h || x ? o.a.createElement("div", {
					className: g.a.CommentsNavigationPane
				}, h && o.a.createElement("div", null, o.a.createElement(d.a, {
					className: g.a.linkOrOverlay,
					isOverlay: s,
					to: Object(l.b)(b)
				}, o.a.createElement(p.c, null, "View all comments")), n && null !== n.parentId && o.a.createElement(d.a, {
					className: g.a.linkOrOverlay,
					isOverlay: s,
					to: Object(l.b)(n.permalink + "?context=8&depth=9")
				}, o.a.createElement(p.c, null, "Show parent comments"))), x && o.a.createElement(d.a, {
					className: g.a.OtherDiscussionsLink,
					isOverlay: s,
					onClick: () => u(Object(m.a)(c)),
					to: v
				}, o.a.createElement(p.c, null, "View discussions in ", o.a.createElement(p.b, {
					name: "otherDiscussionsCount"
				}, r), " other", o.a.createElement(p.a, {
					name: "communities",
					singular: " community",
					plural: " communities",
					count: r
				})))) : null
			}))
		},
		"./src/reddit/pages/CommentsPage/index.m.less": function(e, t, n) {
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
				CommentsPaneWrapper: "_2M2wOqmeoPVvcSsJ6Po9-V",
				commentsPaneWrapper: "_2M2wOqmeoPVvcSsJ6Po9-V",
				mIsInOverlay: "_3287nL7j7epK9JmDC3N1VR",
				CollectionBodyWrapper: "_3cBG1RcjxrEO-gLlwkn87S",
				collectionBodyWrapper: "_3cBG1RcjxrEO-gLlwkn87S",
				TopTippers: "BBdV-resbdJaej9EwC62l",
				topTippers: "BBdV-resbdJaej9EwC62l",
				TopTippersBenefits: "_3gq4Yi5Naapk0e9-GpLyo8",
				topTippersBenefits: "_3gq4Yi5Naapk0e9-GpLyo8",
				ChatLoggedOutForm: "_20TbWqEmJ0wq_AV7La7GWd",
				chatLoggedOutForm: "_20TbWqEmJ0wq_AV7La7GWd"
			}
		},
		"./src/reddit/pages/CommentsPage/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "CommentsPage", (function() {
				return ct
			}));
			var s = n("./node_modules/core-js/modules/es6.array.sort.js"),
				o = n.n(s),
				r = n("./node_modules/core-js/modules/es6.regexp.match.js"),
				a = n.n(r),
				i = n("./node_modules/core-js/modules/es6.symbol.js"),
				d = n.n(i),
				c = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				l = n("./node_modules/lodash/get.js"),
				m = n.n(l),
				p = n("./node_modules/lodash/throttle.js"),
				u = n.n(p),
				h = n("./node_modules/react/index.js"),
				b = n.n(h),
				g = n("./node_modules/react-redux/es/index.js"),
				x = n("./node_modules/react-router-redux/es/index.js"),
				v = n("./node_modules/reselect/es/index.js"),
				C = n("./src/reddit/i18n/utils.ts"),
				O = n("./src/reddit/models/PostDraft/index.ts"),
				f = n("./src/telemetry/index.ts"),
				y = n("./src/telemetry/models/Timer.ts"),
				E = n("./src/lib/classNames/index.ts"),
				j = n("./src/lib/constants/index.ts"),
				w = n("./src/lib/domUtils/index.ts"),
				I = n("./src/lib/fastdom/index.ts"),
				P = n("./src/lib/lessComponent.tsx"),
				_ = n("./src/lib/makeCommentsPageKey/index.ts"),
				k = n("./src/lib/makeDraftKey/index.ts"),
				T = n("./src/lib/performanceTimings/index.tsx"),
				S = n("./src/reddit/actions/comment/index.ts"),
				L = n("./src/reddit/actions/commentsListTruncated/index.ts"),
				N = n("./src/reddit/actions/login.ts"),
				M = n("./src/reddit/actions/page.ts"),
				R = n("./src/reddit/actions/tooltip.ts"),
				A = n("./src/reddit/components/Collection/index.tsx"),
				F = n("./src/reddit/components/CommentsPageAd/index.tsx"),
				B = n("./src/reddit/components/ContentGate/index.tsx"),
				D = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				W = n("./src/reddit/components/RecommendedPostList/index.tsx"),
				H = n("./src/reddit/constants/componentSizes.ts"),
				V = n("./src/reddit/constants/elementIds.ts"),
				U = n("./src/reddit/constants/history.ts"),
				G = n("./src/reddit/constants/keycodes.ts"),
				K = n("./src/reddit/constants/posts.ts"),
				q = n("./src/reddit/constants/screenWidths.ts"),
				z = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Y = n("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				J = n("./src/reddit/featureFlags/profileCollections.ts"),
				Q = n("./src/reddit/models/Comment/index.ts"),
				X = n("./src/reddit/models/Media/index.ts"),
				Z = n("./src/reddit/models/Post/index.ts"),
				$ = n("./src/reddit/models/Subreddit/index.ts"),
				ee = n("./src/reddit/selectors/comments.ts"),
				te = n("./src/reddit/selectors/commentsListTruncated.ts"),
				ne = n("./src/reddit/selectors/discoveryUnit.ts"),
				se = n("./src/reddit/selectors/dismissedTruncationList.ts"),
				oe = n("./src/reddit/selectors/experiments/chatPost.ts"),
				re = n("./src/reddit/selectors/experiments/postSeo.ts"),
				ae = n("./src/reddit/selectors/meta.ts"),
				ie = n("./src/reddit/selectors/moderatorPermissions.ts"),
				de = n("./src/reddit/selectors/posts.ts"),
				ce = n("./src/reddit/selectors/subreddit.ts"),
				le = n("./src/reddit/selectors/tooltip.ts"),
				me = n("./src/reddit/selectors/user.ts"),
				pe = n("./src/reddit/actions/dismissedTruncationList/index.ts"),
				ue = n("./src/reddit/components/CommentCreation/Loader.tsx"),
				he = n("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				be = n("./src/reddit/components/Comments/index.tsx"),
				ge = n("./src/reddit/components/Comments/States/index.tsx"),
				xe = n("./src/reddit/components/CommentsChat/Loader.ts"),
				ve = n("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Ce = n("./src/reddit/components/CommentSort/index.tsx"),
				Oe = n("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				fe = n("./src/reddit/components/CommentsWrapper/index.tsx"),
				ye = n("./src/reddit/components/Economics/FTUE/TopTippersBenefits/async.tsx"),
				Ee = n("./src/reddit/components/Economics/TopTippers/PostLeaderboard/async.tsx"),
				je = n("./src/reddit/components/HeaderImage/index.tsx"),
				we = n("./src/reddit/components/Hovercards/helpers.ts"),
				Ie = n("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				Pe = n("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				_e = n("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				ke = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Te = n("./src/reddit/components/JumpToContent/index.tsx"),
				Se = n("./src/reddit/components/PostContent/index.tsx"),
				Le = n("./src/reddit/components/PostTopMeta/index.tsx"),
				Ne = n("./src/reddit/components/SubredditNav/index.tsx"),
				Me = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Re = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Ae = n("./src/reddit/helpers/getSubredditUrl/index.ts"),
				Fe = n("./src/reddit/helpers/history/index.ts"),
				Be = n("./src/reddit/helpers/postCollection.ts"),
				De = n("./src/reddit/helpers/trackers/lightbox.ts"),
				We = n("./src/reddit/helpers/trackers/screenview.ts"),
				He = n("./src/reddit/layout/page/Lightbox/index.tsx"),
				Ve = n("./src/reddit/layout/page/Lightbox/FakeLightbox.tsx"),
				Ue = n("./src/reddit/layout/page/Listing/index.tsx"),
				Ge = n("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				Ke = n("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				qe = n("./src/reddit/selectors/experiments/listingBelowAll.ts"),
				ze = n("./src/reddit/pages/CommentsPage/index.m.less"),
				Ye = n.n(ze);

			function Je() {
				return (Je = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Qe = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const Xe = e => {
					let {
						condition: t,
						wrap: n,
						children: s
					} = e;
					return t ? n(s) : s
				},
				Ze = 80,
				$e = 200,
				et = 80,
				tt = 32,
				nt = Object(c.a)({
					resolved: {},
					chunkName: () => "reddit-pages-CommentsPage-OtherDiscussions",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-pages-CommentsPage-OtherDiscussions").then(n.bind(null, "./src/reddit/pages/CommentsPage/OtherDiscussions/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/CommentsPage/OtherDiscussions/index.tsx"
					}
				}),
				st = e => {
					const {
						state: t
					} = e.location, n = m()(t, U.a.IsOverlay, !1), s = m()(t, U.a.CloseLocation, null), o = m()(t, U.a.ScrollOnLoad, !1);
					o && Object(Fe.c)(U.a.ScrollOnLoad);
					const {
						partialCommentId: r,
						partialPostId: a,
						subredditName: i
					} = e.match.params, d = Object(Z.m)(a), c = r && Object(Q.e)(r);
					return b.a.createElement(ct, {
						closeLocation: s,
						commentId: c,
						commentsPageKey: e.commentsPageKey,
						isOverlay: n,
						location: e.location,
						onOtherDiscussions: e.onOtherDiscussions,
						postId: d,
						shouldScrollToComments: o,
						sort: e.sort,
						subredditName: i
					})
				},
				ot = Object(z.t)(),
				rt = () => Object(v.c)({
					apiError: ee.c,
					apiPending: ee.d,
					canCommentAsModerator: (e, t) => {
						let {
							postId: n
						} = t;
						const s = Object(de.U)(e, {
							postId: n
						});
						return !!(s && s.id && e.moderatingSubreddits[s.id])
					},
					comment: ee.n,
					communityBannerDiscoveryUnit: ne.b,
					contentGateInfo: (e, t) => {
						let {
							subredditName: n
						} = t;
						return Object(me.f)(e, n)
					},
					contestModeIsEnabled: de.A,
					currentUserShowNSFW: me.U,
					dismissedSubreddits: se.a,
					fullyLoaded: ee.v,
					hasModeratorPostPermissions: ie.b,
					headComment: ee.y,
					isChatPost: oe.e,
					isChatPostExperiment: oe.d,
					isCommentsListTruncated: te.a,
					isLoggedIn: me.G,
					isNightmodeOn: me.R,
					isTooltipOpen: (e, t) => !!Object(le.a)(e),
					language: me.P,
					listingBelowAllVariant: qe.b,
					origin: ae.h,
					post: ee.F,
					postSEOV2IdCardVariant: re.i,
					profileCollectionsEnabled: J.a,
					replyComment: ee.t,
					subredditAboutInfo: (e, t) => {
						let {
							subredditName: n
						} = t;
						return n ? Object(ce.v)(e, {
							subredditName: n
						}) : void 0
					},
					subredditOrProfile: de.U,
					userHovercardIsOpen: (e, t) => Object(le.b)(Object(we.b)({
						itemId: t.postId,
						tooltipIdPrefix: D.a,
						tooltipType: Le.c.StickyPost
					}))(e),
					userPrefs: me.hb
				}),
				at = (e, t) => ({
					dismissTruncation: t => e(Object(pe.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(L.a)()),
					setCommentFocus: t => e(S.M({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(M.z)(t.postId, void 0, {
						subredditName: t.subredditName
					})),
					onHideTooltip: () => e(Object(R.i)()),
					onToggleTooltip: t => e(Object(R.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(N.e)()),
					openRegisterModal: () => e(Object(N.f)()),
					goToSubredditPage: t => e(Object(x.b)(t)),
					sendChatPostExposureEvent: (t, n) => e((e, s) => Object(oe.g)(s(), t, n)),
					truncateCommentsList: () => e(Object(L.b)())
				}),
				it = Object(g.b)(rt, at);
			class dt extends b.a.Component {
				constructor(e) {
					super(e), this.collectionPostWrapperRef = null, this.didRenderLoading = !1, this.needsUpdatedMeasurements = !0, this.scrollY = null, this.recheckScrollTimer = -1, this.postPaused = !0, this.setPostScrollItemRef = e => {
						this.postScrollItemRef = e, setTimeout(this.handleScroll)
					}, this.handleScroll = u()(() => {
						if (!this.scrollContainerEl) return;
						this.needsUpdatedMeasurements && this.updateMeasurements();
						const {
							didScrollPastPost: e,
							scrollContainerEl: t,
							scrollPostThreshold: n,
							props: {
								userHovercardIsOpen: s,
								onToggleTooltip: o,
								post: r,
								postId: a
							}
						} = this;
						clearTimeout(this.recheckScrollTimer), this.recheckScrollTimer = -1;
						const i = t === window ? t.scrollY : t ? t.scrollTop : 0,
							d = null !== this.scrollY && Math.abs(i - this.scrollY) > Ze,
							c = r && r.media && r.media.type === X.n.EMBED ? r.media.provider : null,
							l = r && r.media && X.d.has(r.media.type) && (!c || !X.q.has(c));
						this.scrollY = i, !e && void 0 !== n && i >= n && (this.didScrollPastPost = !0), e && void 0 !== n && i < n && (this.didScrollPastPost = !1, s && I.a.write(() => {
							o(Object(we.b)({
								itemId: a,
								tooltipIdPrefix: D.a,
								tooltipType: Le.c.StickyPost
							}))
						})), l && this.postScrollItemRef && (this.postPaused || !d && !this.didScrollPastPost ? this.postPaused && !this.didScrollPastPost && (d ? this.recheckScrollTimer = setTimeout(this.handleScroll, 4 * j.F) : (this.postPaused = !1, I.a.write(this.postScrollItemRef.focusContent))) : (this.postPaused = !0, I.a.write(this.postScrollItemRef.pauseContent)))
					}, j.F), this.sendEventWithName = e => () => this.props.sendEvent(Object(De.b)(this.props.postId, e)), this.updateWindowHeight = () => {
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
							listingBelowAllVariant: n,
							post: s
						} = this.props;
						if (t(), Object(qe.a)(n)) {
							const t = s && Object(Z.l)(s) && s && s.belongsTo.id;
							t && e(t)
						}
						this.sendEventWithName("view_all_comments")()
					}, this.handleFakeLightboxClick = () => {
						const e = Object(Ae.a)(this.props.subredditOrProfile);
						this.props.goToSubredditPage(e)
					}, this.handleFakeLightboxOverlayClick = () => {
						this.handleFakeLightboxClick(), this.sendEventWithName("post__click__overlay")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === G.b.F || e.keyCode === G.a.F,
							n = e.ctrlKey || e.metaKey;
						t && n && this.props.expandCommentsList()
					}, this.setLayoutRef = e => {
						this.setState({
							layoutRef: e
						})
					}, this.didScrollPastPost = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.state = {
						layoutRef: null
					}
				}
				componentWillMount() {
					const {
						commentId: e,
						setCommentFocus: t
					} = this.props;
					e && t(e)
				}
				componentDidMount() {
					const {
						commentFormRef: e,
						commentSortRef: t,
						props: {
							isLoggedIn: n,
							isOverlay: s,
							post: o,
							shouldScrollToComments: r
						}
					} = this;
					s ? (this.scrollContainerEl = document.getElementById(V.d), r && (e || t) && o && o.numComments ? this.scrollToComments() : I.a.write(() => {
						setTimeout(() => {
							Object(w.c)(this.scrollContainerEl, 0)
						})
					})) : this.scrollContainerEl = window, this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), I.a.read(() => {
						this.props.isOverlay || Object(T.d)(T.c.CommentsPage, n)
					}), this.sendChatPostExposureEvent()
				}
				componentWillReceiveProps(e) {
					e.postId !== this.props.postId && (this.didRenderLoading = !1), e.commentId && e.commentId !== this.props.commentId && this.props.setCommentFocus(e.commentId)
				}
				componentWillUpdate(e) {
					this.removeListeners(e)
				}
				componentDidUpdate(e) {
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), e.postId !== this.props.postId) {
						const e = this.props.post && Object(Be.a)(this.props.post);
						this.props.post && this.props.post.numComments ? I.a.read(this.handleScroll) : I.a.write(() => {
							e || Object(w.c)(this.scrollContainerEl, 0), I.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && I.a.write(() => {
							setTimeout(() => {
								Object(w.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = H.b + (this.props.isOverlay ? H.n : 0),
								n = t.getBoundingClientRect().top;
							let s;
							const o = (s = this.props.isOverlay ? document.getElementById(V.d) : document.getElementsByTagName("body")[0]) && s.getBoundingClientRect().top,
								r = Math.abs(o - n),
								a = this.props.isOverlay ? tt : r - e;
							(this.props.isOverlay ? s && s.scrollTop || 0 : window.pageYOffset) >= a && I.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(w.c)(s, a) : Object(w.c)(document, a)
								})
							})
						}
					}
					this.truncateCommentList()
				}
				componentWillUnmount() {
					this.removeListeners(), this.needsUpdatedMeasurements = !1, this.scrollContainerEl = void 0
				}
				truncateCommentList() {
					const {
						dismissedSubreddits: e,
						listingBelowAllVariant: t,
						subredditOrProfile: n,
						truncateCommentsList: s
					} = this.props;
					if (Object(qe.a)(t)) {
						const t = n && n.id;
						t && !e.includes(t) && s()
					}
				}
				updateMeasurements() {
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = $e
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
					I.a.read(() => {
						const e = document.getElementById(V.d);
						if (e) {
							let t, n;
							this.commentFormRef ? (t = this.commentFormRef.offsetTop - et, n = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - et, n = this.commentSortRef.offsetParent) : t = 0, n && (t += n.offsetTop), I.a.write(() => {
								Object(w.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => I.a.read(this.handleScroll))
							})
						}
					})
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						apiPending: t,
						commentsPageKey: n
					} = this.props;
					return f.c.has(n) && (e || !t || this.listLongEnoughForScreenView())
				}
				listLongEnoughForScreenView() {
					return !!this.commentSortRef && this.commentSortRef.getBoundingClientRect().bottom > window.innerHeight
				}
				checkAndSendScreenview() {
					I.a.read(() => {
						const {
							commentId: e,
							commentsPageKey: t,
							postId: n,
							sendEvent: s,
							sort: o
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const r = f.c.end(t);
						s(Object(We.b)(t, n, e, y.TimerType.InApp, r, o))
					})
				}
				sendChatPostExposureEvent() {
					const {
						sendChatPostExposureEvent: e,
						hasModeratorPostPermissions: t,
						isChatPost: n
					} = this.props;
					e(n, t)
				}
				isCommentPermalink() {
					return void 0 !== this.props.commentId
				}
				renderPageError() {
					const {
						contentGateInfo: e,
						currentUserShowNSFW: t,
						isOverlay: n,
						post: s,
						subredditName: o
					} = this.props, r = !(!s || !s.isNSFW || t), a = Object(Re.a)(e, r, o);
					if (!a) return null;
					let i = b.a.createElement(B.b, a);
					return n && (i = b.a.createElement(He.a, {
						content: i
					})), i
				}
				render() {
					const {
						apiError: e,
						apiPending: t,
						closeLocation: n,
						commentsPageKey: s,
						isNightmodeOn: o,
						isLoggedIn: r,
						isOverlay: a,
						language: i,
						post: d,
						postId: c,
						postSEOV2IdCardVariant: l,
						sendEvent: m,
						subredditName: p,
						subredditOrProfile: u,
						profileCollectionsEnabled: h
					} = this.props, g = Object(re.e)(l);
					if (!d) {
						if (t) return b.a.createElement(ge.f, null);
						const n = this.renderPageError();
						return n || (e ? b.a.createElement(ge.d, null) : b.a.createElement(ge.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const x = this.isCommentPermalink(),
						v = d.belongsTo.type === K.a.PROFILE,
						C = Object(Be.a)(d) && (!v || h),
						O = !r;
					return b.a.createElement(mt, {
						closeLocation: n,
						commentsPageKey: s,
						containerRef: this.setLayoutRef,
						handleFakeLightboxClick: this.handleFakeLightboxClick,
						handleFakeLightboxOverlayClick: this.handleFakeLightboxOverlayClick,
						isLoggedIn: r,
						isOverlay: a,
						isSwapVariant: g,
						post: d,
						subredditOrProfile: u,
						shouldFitPageToContent: O,
						isCollectionLayout: C
					}, u && u.isQuarantined && b.a.createElement(ke.a, {
						subredditName: u.name
					}), b.a.createElement(Te.a, null), b.a.createElement("div", {
						className: Object(E.a)(Ye.a.PageContentWrapper, {
							[Ye.a.LargePageContent]: C,
							[Ye.a.ChatPage]: this.props.isChatPostExperiment
						}),
						key: "PostContentWrapper"
					}, C && b.a.createElement(A.a, {
						isOverlay: a,
						language: i,
						isNightmodeOn: o,
						postId: c
					}), b.a.createElement(Xe, {
						condition: C,
						wrap: e => b.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: Ye.a.CollectionBodyWrapper
						}, e)
					}, b.a.createElement(Se.a, {
						isCommentPermalink: x,
						isExclusivePost: !0,
						isOverlay: a,
						postId: c,
						redditStyle: a,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: m
					}), u && b.a.createElement(Ee.a, {
						className: Ye.a.TopTippers,
						contentId: c,
						creatorId: d.authorId,
						subredditId: u.id
					}), u && b.a.createElement(ye.a, {
						className: Ye.a.TopTippersBenefits,
						contentId: c,
						creatorId: d.authorId,
						subredditId: u.id
					}), b.a.createElement(F.a, {
						listingName: p || "",
						isOverlay: a,
						placement: j.c.ABOVE_THE_FOLD,
						postId: c
					}), this.renderCommentPanes())), u && !Object($.e)(u) && b.a.createElement(W.a, {
						contentContainerRef: this.state.layoutRef,
						isOverlay: a,
						postId: c,
						subredditOrProfile: u
					}))
				}
				renderCommentPanes() {
					const {
						apiError: e,
						apiPending: t,
						canCommentAsModerator: n,
						commentId: s,
						commentsPageKey: o,
						contestModeIsEnabled: r,
						fullyLoaded: a,
						hasModeratorPostPermissions: i,
						headComment: d,
						isChatPostExperiment: c,
						isLoggedIn: l,
						isOverlay: m,
						language: p,
						location: u,
						onOtherDiscussions: h,
						openLoginModal: g,
						openRegisterModal: x,
						origin: v,
						post: f,
						postId: y,
						replyComment: j,
						sendEvent: w,
						sort: I,
						subredditAboutInfo: P,
						subredditOrProfile: T
					} = this.props;
					if (!f) return null;
					const L = this.isCommentPermalink(),
						N = [],
						M = f.isLocked && !n,
						R = !(L || f.isArchived || P && P.userIsBanned);
					if (M) N.push(b.a.createElement(Pe.a, {
						key: "commentThreadBanner",
						subredditOrProfile: T
					}));
					else if (f.isArchived) N.push(b.a.createElement(Ie.a, {
						key: "commentThreadBanner"
					}));
					else if (R && !c && !h)
						if (l) {
							const e = Object(k.a)(O.c.replyToPost, y);
							N.push(b.a.createElement(ue.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: O.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								key: "form" + e,
								parentCommentId: "replyToPost",
								submitAction: (t, n) => {
									var {
										validate: s
									} = t, r = Qe(t, ["validate"]);
									return s ? S.tb(p, y, o, e, r, n) : S.lb(p, y, o, e, r, n)
								},
								submitButtonText: Object(C.c)("comment")
							}))
						} else N.push(b.a.createElement(he.a, {
							key: "loggedOutCommentForm",
							language: p,
							location: u,
							openLoginModal: g,
							openRegisterModal: x,
							origin: v
						}));
					if (r && N.push(b.a.createElement(_e.a, {
							hasModeratorPostPermissions: i,
							key: "contestModeBanner"
						})), !c && !h && N.push(b.a.createElement(Ce.a, {
							commentId: s,
							elementRef: this.updateCommentSortRef,
							isOverlay: m,
							key: "commentSort",
							location: u,
							postId: y,
							sort: I,
							suggestedSort: f.suggestedSort
						}), b.a.createElement(Ge.a, {
							commentId: s,
							commentsPageKey: o,
							isOverlay: m,
							key: "commentNavigation",
							postId: y
						})), !t || d || c || h)
						if (!e || d || h)
							if (h) N.push(b.a.createElement(nt, {
								commentSort: I,
								key: "otherDiscussions",
								language: p,
								postId: y,
								isOverlay: m,
								postPermalink: f.permalink
							}));
							else if (c) {
						if (T && T.id) {
							const e = j ? Object(k.a)(O.c.replyToComment, j.id) : Object(k.a)(O.c.replyToPost, y),
								n = s ? Object(_.a)(y) : o;
							N.push(b.a.createElement(xe.a, {
								commentId: s,
								commentsPageKey: n,
								draftKey: e,
								isLoading: t && !d || !a && t,
								key: "commentsChat",
								postId: y,
								renderedInOverlay: m,
								subredditId: T.id
							}, t => {
								let {
									scrollToBottom: s
								} = t;
								return l ? b.a.createElement(ve.a, {
									key: "chatCommentsForm",
									language: p,
									postId: y,
									replyComment: j,
									draftKey: e,
									commentsPageKey: n,
									isEditing: !1,
									scrollToBottom: s,
									sendEvent: w
								}) : b.a.createElement(he.a, {
									key: "loggedOutCommentForm",
									className: Ye.a.ChatLoggedOutForm,
									language: p,
									location: u,
									openLoginModal: g,
									openRegisterModal: x,
									origin: v
								})
							}))
						}
					} else N.push(b.a.createElement("div", {
						className: Object(E.a)(Ye.a.CommentsPaneWrapper, {
							[Ye.a.mIsInOverlay]: m
						}),
						key: "commentsPaneWrapper"
					}, b.a.createElement(fe.a, Je({}, this.props, {
						isCommentsListTruncated: this.props.isCommentsListTruncated,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: f.numComments,
						onClick: this.handleContentClick
					}), b.a.createElement(be.a, {
						commentId: s,
						commentsPageKey: o,
						postId: y,
						renderedInOverlay: m
					})))), e && d ? N.push(b.a.createElement(ge.e, {
						key: "commentsErrorState",
						language: p,
						postId: y,
						commentId: s,
						sort: I,
						apiError: e
					})) : !a && t && N.push(b.a.createElement(ge.a, {
						key: "commentsPlaceholder"
					}));
					else N.push(b.a.createElement(ge.e, {
						language: p,
						postId: y,
						commentId: s,
						sort: I,
						apiError: e
					}));
					else this.didRenderLoading = !0, N.push(b.a.createElement(ge.a, {
						key: "commentsPlaceholder"
					}));
					return b.a.createElement(Y.a.Provider, {
						value: this.sendEventWithName
					}, N)
				}
			}
			const ct = ot(it(Object(Me.b)(dt))),
				lt = P.a.wrapped(Oe.a, "DetailsPageSidebar", Ye.a),
				mt = e => {
					const {
						children: t,
						commentsPageKey: n,
						containerRef: s,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isCollectionLayout: a,
						isLoggedIn: i,
						isOverlay: d,
						isSwapVariant: c,
						post: l,
						shouldFitPageToContent: m,
						subredditOrProfile: p
					} = e;
					if (!i && !d) return b.a.createElement(Ve.a, {
						containerRef: s,
						content: t,
						isCollectionLayout: a,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isFakeOverlay: !0,
						post: l,
						sidebar: p && b.a.createElement(Oe.a, {
							commentsPageKey: n,
							isOverlay: !0,
							post: l,
							subredditName: p.name,
							subredditId: p.id
						})
					});
					if (d) return b.a.createElement(He.a, {
						containerRef: s,
						content: t,
						isCollectionLayout: a,
						sidebar: p && b.a.createElement(Oe.a, {
							commentsPageKey: n,
							isOverlay: !0,
							post: l,
							subredditName: p.name,
							subredditId: p.id
						})
					});
					const u = a ? H.i : q.a;
					return b.a.createElement(Ue.a, {
						containerRef: s,
						maxWidth: H.i,
						fitPageToContent: m,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: c,
						isCollectionLayout: a,
						navBar: p && b.a.Children.toArray([b.a.createElement(je.a, {
							disableFullscreen: !0,
							headerText: p.name,
							maxWidth: u,
							prefixedHeaderText: p.displayText,
							subredditOrProfile: p,
							url: p.url
						}), !Object($.e)(p) && b.a.createElement(Ne.a, {
							disableFullscreen: !0,
							homeUrl: p.url,
							maxWidth: u,
							subredditId: p.id
						})]),
						sidebar: p && b.a.createElement(lt, {
							commentsPageKey: n,
							post: l,
							subredditName: p.name,
							subredditId: p.id
						})
					})
				};
			t.default = Object(Ke.a)(st)
		},
		"./src/reddit/pages/CommentsPage/withPageSorting.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/es6.regexp.match.js");
			var s = n("./node_modules/lodash/fromPairs.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/extractQueryParams/index.ts"),
				l = n("./src/lib/makeCommentsPageKey/index.ts"),
				m = n("./src/reddit/actions/otherDiscussions/constants.ts"),
				p = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				u = n("./src/reddit/models/Comment/index.ts"),
				h = n("./src/reddit/models/Post/index.ts");
			const b = e => {
					const {
						partialPostId: t
					} = e.match.params;
					return t && Object(h.m)(t)
				},
				g = (e, t, n) => {
					const s = b(e),
						r = (e => {
							const {
								partialCommentId: t
							} = e.match.params;
							return t && Object(u.e)(t)
						})(e),
						a = (e => {
							const {
								location: {
									search: t
								}
							} = e;
							return o()([...Object(c.a)(t)])
						})(e),
						i = {
							depth: a.depth && parseInt(a.depth, 10) || void 0,
							context: a.context && parseInt(a.context, 10) || void 0,
							hasSortParam: t,
							sort: n
						};
					return Object(l.a)(s, r, i)
				},
				x = Object(d.c)({
					commentsPageSort: (e, t) => {
						const n = b(t);
						return Object(p.a)(e, n)
					}
				}),
				v = Object(i.b)(x);

			function C(e) {
				return v(t => {
					const {
						hasSortParam: n,
						sortToUse: s
					} = t.commentsPageSort, o = g(t, n, s), r = Object(m.d)(t.match.path), i = Object.assign({}, t, {
						commentsPageKey: o,
						hasSortParam: n,
						onOtherDiscussions: r,
						sort: s
					});
					return a.a.createElement(e, i)
				})
			}
		},
		"./src/reddit/selectors/commentsListTruncated.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => e.commentsListTruncated
		},
		"./src/reddit/selectors/experiments/goldAwardedCommentHighlight.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = e => !!(e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: e => Object(r.G)(e),
					experimentName: s.E
				});
				return Object(s.Nb)(t) ? void 0 : t
			})(e)
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/platform.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = new Set(["pollstest", "whatssnoo"]),
				d = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing", "nfl", "sanfranciscoanalog"]),
				c = e => i.has(e.toLowerCase()) || d.has(e.toLowerCase()),
				l = e => i.has((Object(r.e)(e) || "").toLowerCase()) || d.has((Object(r.e)(e) || "").toLowerCase()) && Object(o.c)(e, {
					experimentEligibilitySelector: a.G,
					experimentName: s.ab
				}) === s.hb.Enabled
		},
		"./src/reddit/selectors/experiments/publicAwarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.gb
				});
				return Object(s.Nb)(t) ? void 0 : t
			}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "s", (function() {
				return j
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "q", (function() {
				return P
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "r", (function() {
				return k
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/endpoints/governance/crypto.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
				a = n("./src/reddit/selectors/experiments/pollsGA.ts"),
				i = n("./src/reddit/selectors/postCreations.ts");
			const d = [],
				c = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				m = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = j(e, {
						subredditId: n
					});
					return s && s.extra && s.extra.contracts && s.extra.contracts.harberger ? s.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				p = (e, t) => {
					const n = y(e, t);
					if (n) return n.mainHeader
				},
				u = (e, t) => {
					const n = y(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				h = (e, t) => {
					const n = y(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : c
				},
				b = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				g = (e, t) => {
					if (Object(a.b)(e)) {
						const t = Object(i.g)(e);
						return !!t.allowedPostTypes && t.allowedPostTypes.polls
					}
					const n = r.d.spPolls(e) || r.d.spKarmaPoints(e),
						s = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (s) {
						const e = !!s.polls && !1 === s.polls.canCreate;
						return n && !e
					}
					return n
				},
				x = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				v = (e, t) => {
					const n = Object(s.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || d
				},
				C = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				O = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				f = (e, t) => {
					const n = P(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				y = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				E = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				j = (e, t) => {
					const n = E(e, t);
					return n && n.walletProvider
				},
				w = (e, t) => {
					const n = j(e, t),
						s = E(e, t);
					return n && n.provider || s && s.provider
				},
				I = (e, t) => {
					const n = w(e, t);
					return n === o.a.Ethereum || n === o.a.Rinkeby
				},
				P = (e, t) => {
					const n = j(e, t),
						s = w(e, t);
					if (n && !n.inTransition && s === o.a.Stellar) return {
						address: n.extra && n.extra.issuerAddress || "",
						decimals: n.extra && n.extra.decimals || 7,
						symbol: n.extra && n.extra.token || "PHOTON"
					};
					const r = n && n.extra && n.extra.contracts,
						a = r && r.unlocked;
					return a && {
						address: a.address,
						symbol: a.token || "",
						decimals: a.decimals || 18,
						image: a.image
					}
				},
				_ = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = j(e, {
						subredditId: n
					});
					return s && s.extra && s.extra.contracts && s.extra.contracts.subscriptions ? s.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				k = (e, t) => {
					const n = E(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = (e, t) => {
				let {
					listingKey: n
				} = t;
				return e.tracking.viewportDataLoaded[n]
			}
		}
	}
]);
//# sourceMappingURL=CommentsPage.8d23ff18ba4b2832ef04.js.map