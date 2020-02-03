// https://www.redditstatic.com/desktop2x/ProfileOverview.98e3b39ead5aa1e857df.js
// Retrieved at 2/3/2020, 2:20:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileOverview", "ModListing~ModQueuePages~Multireddit~ProfilePosts~SearchResults~Topic", "ModListing~Multireddit~ProfilePosts", "ChatPost~ModQueuePages", "ProfilePosts~ProfileSnoobuilder"], {
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
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, a(e, "resize", this._checkForIntersections, !0), a(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
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
								a = i(r),
								c = this._rootContainsTarget(r),
								d = n.entry,
								l = t && c && this._computeTargetAndRootIntersection(r, s),
								m = n.entry = new o({
									time: e.performance && performance.now && performance.now(),
									target: r,
									boundingClientRect: a,
									rootBounds: s,
									intersectionRect: l
								});
							d ? t && c ? this._hasCrossedThreshold(d, m) && this._queuedEntries.push(m) : d && d.isIntersecting && this._queuedEntries.push(m) : this._queuedEntries.push(m)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, n.prototype._computeTargetAndRootIntersection = function(s, o) {
						if ("none" != e.getComputedStyle(s).display) {
							for (var n, r, a, c, l, m, p, u, b = i(s), h = d(s), g = !1; !g;) {
								var x = null,
									v = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == v.display) return;
								if (h == this.root || h == t ? (g = !0, x = o) : h != t.body && h != t.documentElement && "visible" != v.overflow && (x = i(h)), x && (n = x, r = b, a = void 0, c = void 0, l = void 0, m = void 0, p = void 0, u = void 0, a = Math.max(n.top, r.top), c = Math.min(n.bottom, r.bottom), l = Math.max(n.left, r.left), m = Math.min(n.right, r.right), u = c - a, !(b = (p = m - l) >= 0 && u >= 0 && {
										top: a,
										bottom: c,
										left: l,
										right: m,
										width: p,
										height: u
									}))) break;
								h = d(h)
							}
							return b
						}
					}, n.prototype._getRootRect = function() {
						var e;
						if (this.root) e = i(this.root);
						else {
							var s = t.documentElement,
								o = t.body;
							e = {
								top: 0,
								left: 0,
								right: s.clientWidth || o.clientWidth,
								width: s.clientWidth || o.clientWidth,
								bottom: s.clientHeight || o.clientHeight,
								height: s.clientHeight || o.clientHeight
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
							o = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (s !== o)
							for (var n = 0; n < this.thresholds.length; n++) {
								var r = this.thresholds[n];
								if (r == s || r == o || r < s != r < o) return !0
							}
					}, n.prototype._rootIsInDom = function() {
						return !this.root || c(t, this.root)
					}, n.prototype._rootContainsTarget = function(e) {
						return c(this.root || t, e)
					}, n.prototype._registerInstance = function() {
						s.indexOf(this) < 0 && s.push(this)
					}, n.prototype._unregisterInstance = function() {
						var e = s.indexOf(this); - 1 != e && s.splice(e, 1)
					}, e.IntersectionObserver = n, e.IntersectionObserverEntry = o
				}

				function o(e) {
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
						o = this.intersectionRect,
						n = o.width * o.height;
					this.intersectionRatio = s ? n / s : this.isIntersecting ? 1 : 0
				}

				function n(e, t) {
					var s, o, n, r = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (s = this._checkForIntersections.bind(this), o = this.THROTTLE_TIMEOUT, n = null, function() {
						n || (n = setTimeout((function() {
							s(), n = null
						}), o))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function r(e, t, s, o) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, s, o || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, s)
				}

				function a(e, t, s, o) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, s, o || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, s)
				}

				function i(e) {
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
		"./node_modules/lodash/_baseFindKey.js": function(e, t) {
			e.exports = function(e, t, s) {
				var o;
				return s(e, (function(e, s, n) {
					if (t(e, s, n)) return o = s, !1
				})), o
			}
		},
		"./node_modules/lodash/findKey.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseFindKey.js"),
				n = s("./node_modules/lodash/_baseForOwn.js"),
				r = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return o(e, r(t, 3), n)
			}
		},
		"./node_modules/lodash/take.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseSlice.js"),
				n = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return e && e.length ? (t = s || void 0 === t ? 1 : n(t), o(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseTimes.js"),
				n = s("./node_modules/lodash/_castFunction.js"),
				r = s("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > a) return [];
				var s = i,
					d = c(e, i);
				t = n(t), e -= i;
				for (var l = o(d, t); ++s < e;) t(s);
				return l
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var o = s("./node_modules/lodash/toString.js"),
				n = 0;
			e.exports = function(e) {
				var t = ++n;
				return o(e) + t
			}
		},
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./node_modules/bignumber.js/bignumber.js");

			function n(e, t) {
				const s = new o.BigNumber(e),
					n = new o.BigNumber(t),
					r = new o.BigNumber(s.dividedBy(n)),
					a = new o.BigNumber("100").multipliedBy(r);
				return new o.BigNumber(a).toNumber()
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, s) {
			"use strict";
			var o = s("./src/app/strings/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/prettyPrintNumber/index.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/config.ts"),
				l = s("./src/reddit/endpoints/governance/requester.ts");
			var m = s("./src/reddit/endpoints/governance/poll.ts");
			var p = s("./src/reddit/endpoints/governance/wallet.ts"),
				u = s("./src/reddit/models/Poll/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/models/Vote/index.ts"),
				g = s("./src/reddit/selectors/gov.ts"),
				x = s("./src/reddit/actions/governance/constants.ts"),
				v = s("./src/reddit/actions/governance/errorToast.ts");
			s.d(t, "a", (function() {
				return O
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "e", (function() {
				return j
			})), s.d(t, "h", (function() {
				return N
			})), s.d(t, "i", (function() {
				return R
			})), s.d(t, "f", (function() {
				return A
			})), s.d(t, "g", (function() {
				return B
			})), s.d(t, "j", (function() {
				return F
			})), s.d(t, "c", (function() {
				return D
			}));
			const O = Object(n.a)(x.b),
				f = Object(n.a)(x.c),
				C = Object(n.a)(x.d),
				y = Object(n.a)(x.e),
				E = Object(n.a)(x.f),
				j = (Object(n.a)(x.g), Object(n.a)(x.h), Object(n.a)(x.i)),
				w = Object(n.a)(x.j),
				P = Object(n.a)(x.k),
				I = Object(n.a)(x.l),
				S = Object(n.a)(x.r),
				N = Object(n.a)(x.s),
				_ = Object(n.a)(x.t),
				T = Object(n.a)(x.u),
				L = Object(n.a)(x.v),
				k = Object(n.a)(x.w),
				M = Object(n.a)(x.x),
				R = Object(n.a)(x.y),
				A = (e, t) => async (s, o, n) => {
					let r, {
							apiContext: a,
							gqlContext: c
						} = n,
						d = o().polls.models[e];
					if (s(P({
							pollId: e
						})), (r = d.type === u.a.GA ? await Object(m.c)(c(), e, t) : await Object(m.b)(a(), d.subredditId, e, t)).ok) {
						if (d.type === u.a.GA) {
							const {
								options: e
							} = r.body.data.updatePostPollVoteState.poll;
							s(E({
								pollId: d.id,
								optionId: t,
								options: e
							}))
						} else s(I(r.body));
						const n = o();
						if ((d = n.polls.models[e]) && Object(u.d)(d)) {
							const {
								postId: e
							} = d, t = n.posts.models[e];
							t && t.voteState === h.a.notVoted && s(Object(i.N)(e))
						}
					} else s(w({
						pollId: e,
						error: r.error || r.errors[0].message
					})), Object(v.a)(s, r.error || r.errors[0].messsage)
				}, B = (e, t) => async (s, n, i) => {
					let {
						apiContext: m
					} = i;
					s(_());
					const p = n().transfers.communityPoints.contentId || void 0,
						u = await
					function(e, t) {
						return Object(l.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: "".concat(d.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(m(), Object.assign({}, e, {
						contentId: p
					}));
					if (u.ok) {
						const i = n().user.language;
						s(T(Object.assign({}, u.body, {
							subredditId: e.subredditId
						}))), s(Object(c.e)({
							kind: b.b.SuccessCommunity,
							text: Object(o.a)(i, "gov.transferSuccess", {
								amount: Object(r.a)(e.amount),
								recipient: e.recipient,
								tokenName: Object(g.o)(n(), {
									subredditId: e.subredditId
								})
							})
						})), t && s(Object(a.f)())
					} else s(S({
						error: u.error
					})), Object(v.a)(s, u.error)
				}, F = e => async (t, s, o) => {
					let {
						apiContext: n
					} = o;
					t(k());
					const r = await Object(p.a)(n(), e);
					r.ok ? t(M(r.body)) : t(L({
						error: r.error
					}))
				}, D = (e, t) => async (s, n, r) => {
					let {
						apiContext: a
					} = r;
					s(C());
					const i = await
					function(e, t, s) {
						return Object(l.a)(e, {
							data: {
								optOut: t
							},
							method: "patch",
							endpoint: "".concat(d.a.metaUrl, "/wallets/").concat(s, "/me")
						})
					}(a(), e, t);
					if (i.ok) {
						s(M({
							[t]: i.body
						}));
						const r = e ? "polls.optOutSuccess" : "polls.optInSuccess";
						s(Object(c.e)({
							kind: b.b.SuccessCommunity,
							text: Object(o.a)(n().user.language, r, {
								tokenName: Object(g.o)(n(), {
									subredditId: t
								})
							})
						}))
					} else Object(v.a)(s, i.error)
				}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				n = s.n(o);
			const r = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", n.a);
			t.a = r
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = s("./src/reddit/components/CallToActionButton/index.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = l(e, ["className"]);
				return n.a.createElement(a.a, d({
					className: Object(r.a)(t, c.a.CallToActionButton, {
						[c.a.mNotCardView]: s.isNotCardView
					})
				}, s))
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/config.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				l = s("./src/reddit/components/CallToActionButton/index.tsx"),
				m = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				u = s("./src/reddit/components/ExpandoButton/index.tsx"),
				b = s("./src/reddit/components/Flatlist/index.tsx"),
				h = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				g = s("./src/reddit/components/ModModeReports/index.tsx"),
				x = s("./src/reddit/components/ModModeReports/helpers.ts"),
				v = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				O = s("./src/reddit/components/PostContainer/index.tsx"),
				f = s("./src/reddit/components/PostMedia/index.tsx"),
				C = s("./src/reddit/components/PostMeta/index.tsx"),
				y = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				E = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				j = s("./src/reddit/components/PostTitle/index.tsx"),
				w = s("./src/reddit/components/PostTopMeta/index.tsx"),
				P = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				I = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				N = s("./node_modules/react-redux/es/index.js"),
				_ = s("./node_modules/reselect/es/index.js"),
				T = s("./src/reddit/actions/post.ts"),
				L = s("./src/reddit/actions/tooltip.ts"),
				k = s("./src/reddit/models/Vote/index.ts"),
				M = s("./src/reddit/contexts/InsideOverlay.tsx"),
				R = s("./src/reddit/contexts/PageLayer/index.tsx"),
				A = s("./src/reddit/selectors/activeModalId.ts"),
				B = s("./src/reddit/selectors/experiments/chatPost.ts"),
				F = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				D = s("./src/reddit/selectors/moderatorPermissions.ts"),
				H = s("./src/reddit/selectors/monthsToMinutes.ts"),
				V = s("./src/reddit/selectors/postFlair.ts"),
				W = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/selectors/user.ts");
			const G = {
					autoplayPref: U.b,
					activeModalId: A.a,
					crosspost: W.c,
					currentUser: U.i,
					isActive: W.g,
					isChatPostExperiment: B.d,
					isCurrentUserProfilePost: W.h,
					isExpanded: W.j,
					isFrontpageHome: H.g,
					isM2MHomeRedirectEnabled: F.c,
					isMeta: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(W.o)(e, s)
					},
					language: U.S,
					moderatorPermissions: D.i,
					modModeEnabled: R.O,
					post: W.I,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: V.a,
					showMedia: R.r,
					subredditOrProfile: W.U,
					userIsOp: U.jb,
					flairStyleTemplate: R.Q
				},
				z = (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: n
					} = t;
					return {
						handleVote: t => {
							const s = t === k.a.upvoted ? Object(T.N)(n) : Object(T.o)(n);
							e(s)
						},
						onIgnoreReports: () => e(Object(T.L)(n)),
						onOpenReportsDropdown: t => e(Object(L.g)({
							tooltipId: t
						}))
					}
				},
				K = Object(N.b)(() => Object(_.c)(G), z, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: e => e.title
				}));
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js");
			var q = s("./src/lib/LRUCache/index.ts");
			const Z = Object(R.t)({
					searchQuery: R.U
				}),
				Q = new q.a(250),
				J = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = "".concat(e.id, "-").concat(t);
						let o = Q.get(s);
						if (void 0 === o) {
							const r = new RegExp("(\\b".concat(t, "\\b)"), "gi"),
								a = e.title.split(r);
							for (let e = 1; e < a.length; e += 2) a[e] = n.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, a[e]);
							o = n.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, n.a.Children.toArray(a)), Q.set(s, o)
						}
						return o
					}
				},
				Y = Object(N.b)(() => Object(_.c)(G), z, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: J(s.searchQuery || "")
				}));
			var X = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				$ = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ee = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				te = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				se = s.n(te),
				oe = s("./src/reddit/components/ClassicPost/index.m.less"),
				ne = s.n(oe);

			function re() {
				return (re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "renderMedia", (function() {
				return ce
			})), s.d(t, "SearchResultsClassicPost", (function() {
				return me
			}));
			const ae = 16;
			class ie extends n.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						className: e,
						currentUser: t,
						handleVote: s,
						isExpanded: o,
						isMeta: i,
						inSubredditOrProfile: f,
						eventFactory: N,
						first: _,
						flairStyleTemplate: T,
						formatTitle: L,
						isCheckboxSelected: k,
						isCurrentUserProfilePost: M,
						isFrontpage: R,
						isFrontpageHome: A,
						isM2MHomeRedirectEnabled: B,
						isOverlay: F,
						language: D,
						moderatorPermissions: H,
						modModeEnabled: V,
						onClickPost: W,
						onIgnoreReports: U,
						onOpenReportsDropdown: G,
						poll: z,
						post: K,
						redditStyle: q,
						scrollerItemRef: Z,
						showBulkActionCheckbox: Q,
						showEditFlair: J,
						showMedia: Y,
						subredditOrProfile: te,
						toggleCheckbox: oe,
						userIsOp: ie
					} = this.props, de = q ? void 0 : T, le = this.props.crosspost || void 0, me = Object($.a)(H), pe = Object(X.a)(H), ue = V && $.a, be = !!K.media && K.media.type === I.n.RTJSON, he = ie && be, ge = f && !Y, xe = {
						flairStyleTemplate: de,
						post: K,
						inSubredditOrProfile: f,
						isCurrentUserProfilePost: M,
						isOverlay: F,
						shouldShowSubscribeButton: !(R && A),
						subredditOrProfile: te,
						language: D
					}, ve = n.a.createElement(O.a, {
						className: Object(a.a)(se.a.classicPostStyles, ne.a.postContainer, Object(ee.a)(this.props), _ ? ne.a.mFirst : void 0, e),
						isOverlay: F,
						style: Object.assign({}, Object(ee.d)(this.props), Object(ee.b)(this.props.flairStyleTemplate)),
						post: K,
						onClick: W,
						eventFactory: N
					}, n.a.createElement(E.a, {
						model: K,
						handleVote: s,
						showBulkActionCheckbox: Q,
						isCheckboxSelected: k,
						toggleCheckbox: oe,
						flairStyleTemplate: de,
						redditStyle: q
					}), n.a.createElement(v.a, {
						"data-click-id": "background",
						flairStyleTemplate: de
					}, n.a.createElement(p.a, {
						className: ne.a.eventMeta,
						post: K,
						language: D
					}), n.a.createElement("div", {
						className: ne.a.mainBody
					}, n.a.createElement("div", {
						className: ge ? ne.a.expandoContainer : ne.a.thumbnailContainer
					}, !ge && n.a.createElement(S.a, {
						className: ne.a.classicThumbnail,
						crosspost: le && K,
						isMeta: i,
						post: le || K,
						redditStyle: q,
						templatePlaceholderImage: de && de.postPlaceholderImage
					}), n.a.createElement(u.a, {
						crosspost: le,
						className: ne.a.rightExpando,
						isExpanded: !!o,
						post: K,
						useMediaIcons: !1
					})), n.a.createElement("div", {
						className: ne.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: "".concat(ae, "px")
						}
					}, n.a.createElement(j.c, {
						className: z ? ne.a.titleWithPoll : void 0,
						format: L,
						poll: z,
						post: K,
						redditStyle: q,
						size: j.b.Medium,
						titleColor: de && de.postTitleColor,
						isM2MHomeRedirectEnabled: B,
						isOverlay: F
					}, K.source && !le && n.a.createElement(P.a, {
						href: K.source.url,
						isSponsored: K.isSponsored,
						source: K.source
					}, Object(c.a)(K))), n.a.createElement(C.a, re({
						key: "PostMeta"
					}, xe)), V && me && Object(x.c)(K) && n.a.createElement(g.a, {
						language: D,
						onIgnoreReports: U,
						reportable: K
					}), n.a.createElement("div", {
						className: ne.a.spacer
					}), K.source && K.source.url && K.isSponsored && n.a.createElement(d.a, {
						className: ne.a.adLinkWrapper
					}, n.a.createElement(P.a, {
						href: K.source.url.replace(r.a.redditUrl, ""),
						isSponsored: K.isSponsored,
						source: K.source
					}, K.source.displayText), K.callToAction && n.a.createElement(l.a, {
						href: K.source.url.replace(r.a.redditUrl, ""),
						isSponsored: K.isSponsored,
						source: K.source
					}, K.callToAction)), n.a.createElement("div", {
						className: ne.a.flatlistContainer
					}, n.a.createElement(u.a, {
						className: ne.a.leftExpando,
						crosspost: le,
						isExpanded: !!o,
						post: K,
						useMediaIcons: !1
					}), n.a.createElement(m.a, {
						className: ne.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: de,
						model: K,
						onVoteClick: s
					}), n.a.createElement(b.a, {
						className: ne.a.flatlistSeparator
					}), n.a.createElement(b.c, {
						className: ne.a.flatlist,
						currentUser: t,
						hasModFlairPerms: pe,
						hasModPostPerms: me,
						isOverlay: !!F,
						language: D,
						modModeEnabled: V,
						onIgnoreReports: U,
						onOpenReportsDropdown: G,
						post: K,
						showEditPost: he,
						showEditFlair: J,
						tooltipType: F ? w.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(y.h)({
							editPost: !ue,
							save: !ue,
							hide: !ue,
							report: !ue
						})
					})), n.a.createElement(h.d, {
						postId: K.id
					}))), ce(K, Z, o)));
					return n.a.createElement(n.a.Fragment, null, ve)
				}
			}
			const ce = (e, t, s) => s ? e.crosspostRootId ? n.a.createElement("div", {
					className: ne.a.crosspostMediaWrapper
				}, de(e, t)) : de(e, t) : null,
				de = (e, t) => n.a.createElement(f.a, {
					isExpando: !0,
					isListing: !0,
					isNotCardView: !0,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					showFull: !0,
					showCentered: !0,
					post: e
				}),
				le = Object(i.a)(ie),
				me = (e => Z(Y(e)))(le);
			t.default = (e => K(Object(M.b)(e)))(le)
		},
		"./src/reddit/components/CommentBodyExpander/index.m.less": function(e, t, s) {
			e.exports = {
				collapsedCommentWrapper: "_3eqiPvSIRa-NZBdZNmskLn",
				collapsedCommentLine: "_3w5mzp5LqE702onvC_Wok3",
				rtjCollapsed: "_1J7xT7G-fgDlzIqRgaBrrB",
				seeMore: "_3NPaMDmW2g_XhEdxfn6inI"
			}
		},
		"./src/reddit/components/CommentContainer/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/higherOrderComponents/withClickTracking.tsx");
			const d = Object(a.c)({
					clickTrackingId: (e, t) => {
						let {
							comment: s
						} = t;
						return s.id
					}
				}),
				l = Object(r.b)(d);
			class m extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						children: t,
						className: s,
						comment: o,
						onClick: r,
						style: a
					} = this.props;
					return n.a.createElement("div", {
						className: Object(i.a)(s, "Comment ".concat(o.id)),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => r && r(t, o))(t)
						},
						style: a
					}, t)
				}
			}
			t.a = l(Object(c.c)(m))
		},
		"./src/reddit/components/CommentModModeDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				StyledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				styledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				Show: "BmpGQCO3oZBeUMzSaC5yX",
				show: "BmpGQCO3oZBeUMzSaC5yX"
			}
		},
		"./src/reddit/components/CommentModModeDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/comment/index.ts"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/helpers/trackers/modTools.ts"),
				p = s("./src/reddit/selectors/tooltip.ts"),
				u = s("./src/app/strings/index.ts"),
				b = s("./src/lib/lessComponent.tsx"),
				h = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				g = s("./src/reddit/icons/svgs/Show/index.tsx"),
				x = s("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				v = s.n(x);
			const O = b.a.wrapped(g.a, "Show", v.a);
			var f = e => n.a.createElement(h.d, null, !e.comment.isApproved && n.a.createElement(h.c, {
				displayText: e.comment.approvedBy ? Object(u.a)(e.language, "modTools.approved") : Object(u.a)(e.language, "modTools.approve"),
				onClick: e.onApproveComment
			}, n.a.createElement(h.a, null)), !e.comment.bannedBy && n.a.createElement(n.a.Fragment, null, n.a.createElement(h.c, {
				displayText: e.comment.isRemoved ? Object(u.a)(e.language, "modTools.removed") : Object(u.a)(e.language, "modTools.remove"),
				onClick: e.onRemoveComment
			}, n.a.createElement(h.f, null)), n.a.createElement(h.c, {
				displayText: e.comment.isSpam ? Object(u.a)(e.language, "modTools.removedAsSpam") : Object(u.a)(e.language, "modTools.removeAsSpam"),
				onClick: e.onSpamComment
			}, n.a.createElement(h.g, null)), n.a.createElement(h.c, {
				displayText: e.comment.isLocked ? Object(u.a)(e.language, "modTools.unlockComment") : Object(u.a)(e.language, "modTools.lockComment"),
				onClick: e.onLockComment
			}, n.a.createElement(h.e, null))), e.comment.collapsedBecauseCrowdControl && n.a.createElement(h.c, {
				displayText: Object(u.a)(e.language, "modTools.showComment"),
				onClick: e.onShowComment
			}, n.a.createElement(O, null)));
			const C = b.a.wrapped(l.a, "StyledDropdown", v.a),
				y = Object(a.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(p.b)(s)(e)
					}
				}),
				E = Object(r.b)(y, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						onApproveComment: () => e(Object(i.H)(s.id)),
						onLockComment: () => e(Object(i.X)(s.id)),
						onRemoveComment: () => e(Object(i.cb)(s.id, !1)),
						onSpamComment: () => e(Object(i.cb)(s.id, !0)),
						onShowComment: () => e(Object(i.Y)(s.id))
					}
				}),
				j = Object(c.a)(C),
				w = E(Object(d.b)(e => {
					const {
						comment: t,
						isDropdownOpen: s,
						language: o,
						onApproveComment: r,
						onLockComment: a,
						onRemoveComment: i,
						onSpamComment: c,
						onShowComment: d,
						sendEvent: l,
						tooltipId: p
					} = e;
					return n.a.createElement(j, {
						isOpen: s,
						tooltipId: p
					}, n.a.createElement(f, {
						language: o,
						onApproveComment: () => {
							r(), l(Object(m.c)("approve", t.id))
						},
						onRemoveComment: () => {
							i(), l(Object(m.c)("remove", t.id))
						},
						onSpamComment: () => {
							c(), l(Object(m.c)("spam", t.id))
						},
						onLockComment: () => {
							a(), l(Object(m.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							d(), l(Object(m.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = w
		},
		"./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				dropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				DeleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				deleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				ReportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				reportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				PencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				pencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				SaveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				saveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				SavedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				savedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				OverflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				overflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				ModToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				modToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				ModActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				modActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				Flatlist: "_1PB2jayxHhG493U6RP5qLr",
				flatlist: "_1PB2jayxHhG493U6RP5qLr",
				Button: "VFryWeVNuBPgqyjc5h68S",
				button: "VFryWeVNuBPgqyjc5h68S"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/humanizeDateTime/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/timeAgo/index.ts"),
				b = s("./src/reddit/components/AuthorLink/index.tsx"),
				h = s("./src/reddit/components/AwardBadges/index.tsx"),
				g = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				x = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				v = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				O = s("./src/reddit/featureFlags/index.ts"),
				f = s("./src/reddit/selectors/economics.ts"),
				C = s("./src/reddit/components/Economics/TopTippers/Icon/index.tsx"),
				y = s("./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less"),
				E = s.n(y);
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
							contentId: s
						} = t;
						return e.posts.models[s]
					},
					tippers: (e, t) => {
						if (O.d.spTopTippers(e)) return Object(f.s)(e, t)
					}
				}))((function(e) {
					if (e.tippers && e.tippers.allTippers.has(e.userId)) {
						const t = e.tippers.topTippers.ranking[e.userId] || 5,
							s = n.a.cloneElement(n.a.Children.only(e.children), {
								style: j(t)
							});
						return n.a.createElement("div", {
							className: E.a.container
						}, n.a.createElement(C.a, {
							className: E.a.badge,
							creatorId: e.creatorId || e.post && e.post.authorId,
							rank: t,
							subredditId: e.subredditId
						}), s)
					}
					return e.children
				})),
				P = s("./src/reddit/components/Flair/index.tsx"),
				I = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				S = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				N = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				_ = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				T = s("./src/reddit/components/PostTopMeta/index.tsx"),
				L = s("./src/reddit/helpers/isRemoved.ts"),
				k = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				M = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				R = s("./src/reddit/i18n/utils.ts"),
				A = s("./src/reddit/actions/comment/index.ts"),
				B = s("./src/reddit/models/Comment/index.ts"),
				F = s("./src/reddit/models/Flair/index.ts"),
				D = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				H = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				V = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				W = s("./src/reddit/icons/fonts/helpers.tsx"),
				U = s("./src/reddit/icons/fonts/Op/index.m.less"),
				G = s.n(U);
			var z = p.a.wrapped(e => n.a.createElement("i", {
					className: "".concat(Object(W.b)("op"), " ").concat(e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, n.a.createElement(W.a, null, e.desc)), "OpIcon", G.a),
				K = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				q = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Z = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				Q = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				J = s("./src/reddit/icons/svgs/Cake/index.tsx"),
				Y = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				X = s("./src/reddit/controls/MetaData/index.tsx"),
				$ = s("./src/reddit/selectors/experiments/publicAwarding.ts"),
				ee = s("./src/reddit/selectors/subreddit.ts"),
				te = s("./src/reddit/selectors/userFlair.ts"),
				se = s("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				oe = s.n(se);

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var re = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const ae = p.a.wrapped(P.b, "RightPositionedAuthorFlair", oe.a),
				ie = p.a.wrapped(D.a, "AdminIcon", oe.a),
				ce = p.a.wrapped(H.a, "Approve", oe.a),
				de = p.a.wrapped(V.a, "Lock", oe.a),
				le = p.a.div("AdminEmeritus", oe.a),
				me = p.a.wrapped(Q.a, "Automoderator", oe.a),
				pe = p.a.wrapped(J.a, "CakeIcon", oe.a),
				ue = p.a.wrapped(Y.a, "Moderator", oe.a),
				be = p.a.wrapped(K.a, "Remove", oe.a),
				he = p.a.wrapped(q.a, "Report", oe.a),
				ge = p.a.wrapped(Z.a, "Spam", oe.a),
				xe = p.a.wrapped(z, "Op", oe.a),
				ve = p.a.wrapped(D.a, "Contractor", oe.a),
				Oe = p.a.a("MetaLink", oe.a),
				fe = p.a.wrapped(X.a, "EditedText", oe.a),
				Ce = p.a.wrapped(X.a, "StickiedText", oe.a),
				ye = p.a.span("DeletedText", oe.a),
				Ee = p.a.wrapped(X.a, "MetaSeparator", oe.a),
				je = p.a.wrapped(X.a, "CrowdControlText", oe.a),
				we = p.a.wrapped(S.b, "AuthorHoverCard", oe.a),
				Pe = p.a.a("RemovalReason", oe.a),
				Ie = p.a.wrapped(g.b, "Component", oe.a),
				Se = Object(i.d)("comment.children"),
				Ne = Object(i.d)("comment.moreThanChildren"),
				_e = e => (t, s) => {
					let {
						comment: o,
						renderedInOverlay: n
					} = s;
					return "".concat(e).concat(o.id).concat(n ? "inOverlay" : "")
				},
				Te = Object(i.e)("comment.tooltips.admin"),
				Le = Object(i.e)("comment.tooltips.cakeday"),
				ke = Object(i.e)("comment.tooltips.adminEmeritus"),
				Me = Object(i.e)("comment.tooltips.moderator"),
				Re = Object(i.e)("comment.tooltips.op"),
				Ae = Object(i.e)("comment.tooltips.contractor"),
				Be = Object(r.b)(() => Object(a.c)({
					adminTooltipId: _e("CommentTopMeta--Admin--"),
					cakedayTooltipId: _e("CommentTopMeta--cakeday--"),
					adminEmeritusTooltipId: _e("CommentTopMeta--AdEm--"),
					automodTooltipId: _e("CommentTopMeta--Automod--"),
					approveTooltipId: _e("CommentTopMeta--Approve--"),
					createdTooltipId: _e("CommentTopMeta--Created--"),
					contractorTooltipId: _e("CommentTopMeta--Contractor--"),
					gildedTooltipId: _e("CommentTopMeta--Gold--"),
					lockedTooltipId: _e("CommentTopMeta--Locked--"),
					modTooltipId: _e("CommentTopMeta--Mod--"),
					opTooltipId: _e("CommentTopMeta--OP--"),
					publicAwardersEnabled: e => !!Object($.a)(e),
					removeTooltipId: _e("CommentTopMeta--Remove--"),
					reportTooltipId: _e("CommentTopMeta--Report--"),
					spamTooltipId: _e("CommentTopMeta--Spam--"),
					hasBadges: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(f.q)(e, s.subredditId, s.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const s = Object(ee.J)(e, {
							commentId: t.comment.id
						});
						return s ? s.displayText : ""
					},
					topTippersEnabled: O.d.spTopTippers,
					flairPosition: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(te.d)(e, {
							subredditId: s.subredditId
						})
					}
				}), (e, t) => ({
					onCreatedClick: () => {
						window.addEventListener("focus", (function s() {
							((e, t, s) => {
								window.removeEventListener("focus", s), e(Object(A.N)({
									commentListNodeId: t
								})), window.setTimeout(() => e(Object(A.N)({
									commentListNodeId: t
								})), 5e3)
							})(e, t.comment.id, s)
						}))
					},
					onHideTooltip: () => e(Object(c.h)()),
					onShowTooltip: t => e(Object(c.f)({
						tooltipId: t
					})),
					openRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.comment.subredditId, [t.comment.id])))
					}
				}));
			t.a = Be(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: s,
					approveTooltipId: o,
					automodTooltipId: r,
					cakedayTooltipId: a,
					children: i,
					className: c,
					collapsed: m,
					collapsedBecauseCrowdControl: p,
					comment: u,
					commentsPageKey: b,
					contractorTooltipId: g,
					compact: O,
					flair: f,
					flairPosition: C,
					hasBadges: y,
					isLivestreaming: E,
					ignoreFlairPosition: j,
					ignoreLock: w,
					language: S,
					lockedTooltipId: N,
					modTooltipId: L,
					onHideTooltip: k,
					onShowTooltip: M,
					opTooltipId: R,
					openRemovalReasonModal: A,
					publicAwardersEnabled: D,
					removeTooltipId: H,
					renderContractorBadge: V,
					renderedInOverlay: W,
					reportTooltipId: U,
					spamTooltipId: G,
					subredditDisplayText: z,
					topTippersEnabled: K
				} = e;
				if (u.isDeleted) return n.a.createElement(Fe, ne({}, e, {
					className: Object(d.a)(c, oe.a.container, {
						[oe.a.collapsed]: m
					})
				}));
				if (m) return n.a.createElement(De, ne({}, e, {
					className: Object(d.a)(c, oe.a.container, {
						[oe.a.collapsed]: m
					})
				}));
				const q = !j && C === F.b.Left;
				return n.a.createElement("div", {
					className: Object(d.a)(c, oe.a.container, {
						[oe.a.collapsed]: m,
						[oe.a.hasBadges]: y,
						[oe.a.liveStreaming]: E
					})
				}, f && q && n.a.createElement(P.b, {
					flair: f,
					forceSmallEmojis: O
				}), !Object(B.d)(u) && n.a.createElement(Ie, {
					showAddCustom: !0,
					subredditId: u.subredditId,
					userId: u.authorId,
					uniqueIdentifier: u.id
				}), n.a.createElement(we, {
					postOrComment: u,
					tooltipType: W ? T.c.Lightbox : void 0
				}, n.a.createElement(x.b, {
					ignore: Object(B.d)(u) || !!u.distinguishType && u.distinguishType !== l.B.NONE,
					subredditId: u.subredditId,
					userId: u.authorId
				}, n.a.createElement(Ve, {
					comment: u,
					isLivestreaming: E,
					isStrong: !!O,
					isAuthorDeleted: Object(B.d)(u),
					topTippersEnabled: K
				}, i && i))), p && n.a.createElement(je, null, "Crowd Control"), p && n.a.createElement(X.c, {
					className: oe.a.metaText,
					key: "crowdControlSeparator"
				}), f && !q && n.a.createElement(ae, {
					flair: f,
					forceSmallEmojis: O
				}), !O && n.a.createElement(I.a, {
					className: oe.a.publicPoints,
					contentId: u.id,
					subredditId: u.subredditId,
					userId: u.authorId,
					username: u.author
				}), n.a.createElement(n.a.Fragment, null, n.a.createElement(_.b, {
					commentId: u.id
				}), n.a.createElement(_.a, {
					commentId: u.id,
					commentsPageKey: b
				}), n.a.createElement(Ge, {
					comment: u,
					compact: O,
					adminTooltipId: s,
					adminEmeritusTooltipId: t,
					cakedayTooltipId: a,
					contractorTooltipId: g,
					language: S,
					modTooltipId: L,
					onHideTooltip: k,
					onShowTooltip: M,
					opTooltipId: R,
					renderContractorBadge: V,
					subredditDisplayText: z
				})), !O && n.a.createElement(n.a.Fragment, null, !u.isDeleted && n.a.createElement(X.b, {
					className: oe.a.metaText,
					isScoreHidden: u.isScoreHidden,
					language: S,
					score: u.score
				}), n.a.createElement(X.c, {
					className: oe.a.metaText,
					key: "scoreCreatedSeparator"
				}), n.a.createElement(We, ne({
					key: "Created"
				}, e)), u.isStickied && Ke(S), u.editedAt && He(S, u.editedAt)), n.a.createElement(n.a.Fragment, null, n.a.createElement(ze, {
					comment: u,
					approveTooltipId: o,
					automodTooltipId: r,
					ignoreLock: w,
					language: S,
					lockedTooltipId: N,
					onHideTooltip: k,
					onShowTooltip: M,
					openRemovalReasonModal: A,
					removeTooltipId: H,
					reportTooltipId: U,
					spamTooltipId: G
				}), n.a.createElement(v.a, {
					className: oe.a.DonationAmount,
					contentId: u.id,
					subredditId: u.subredditId
				})), n.a.createElement(h.a, {
					showAwarders: D,
					tooltipType: W ? T.c.Lightbox : void 0,
					thing: u
				}))
			});
			const Fe = e => {
					const {
						language: t,
						childrenInfo: s,
						collapsed: o,
						className: r,
						comment: a
					} = e;
					return n.a.createElement("div", {
						className: r
					}, n.a.createElement(ye, null, a.deletedBy === B.a.User ? Object(i.a)(t, "comment.commentDeletedByAuthor") : Object(i.a)(t, "comment.commentDeletedByMod")), n.a.createElement(We, ne({
						key: "Created"
					}, e)), o && Ue({
						childrenInfo: s,
						language: t
					}))
				},
				De = e => {
					const {
						comment: t,
						language: s,
						className: o,
						childrenInfo: r
					} = e;
					return n.a.createElement("div", {
						className: o
					}, n.a.createElement("div", null, n.a.createElement(Ve, {
						comment: t,
						isAuthorDeleted: Object(B.d)(t),
						topTippersEnabled: !1
					})), n.a.createElement(X.b, {
						className: oe.a.metaText,
						isScoreHidden: t.isScoreHidden,
						language: s,
						score: t.score
					}), n.a.createElement(X.c, {
						className: oe.a.metaText,
						key: "scoreCreatedSeparator"
					}), n.a.createElement(We, ne({
						key: "Created"
					}, e)), Ue({
						childrenInfo: r,
						language: s
					}))
				},
				He = (e, t) => n.a.createElement(o.Fragment, null, n.a.createElement(X.c, {
					className: oe.a.metaText
				}), n.a.createElement(fe, null, Object(i.a)(e, "comment.edited", {
					time: Object(u.d)(e, t)
				}))),
				Ve = e => {
					const t = n.a.createElement(b.a, {
						className: oe.a.CommentAuthorLink,
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
					return e.topTippersEnabled ? n.a.createElement(w, {
						contentId: e.comment.postId,
						subredditId: e.comment.subredditId,
						userId: e.comment.authorId
					}, t) : t
				};
			class We extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t,
							language: s,
							onCreatedClick: o
						} = e,
						r = re(e, ["comment", "language", "onCreatedClick"]);
					return n.a.createElement(Oe, {
						href: t.permalink,
						id: r.createdTooltipId,
						onClick: o,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: r.onHideTooltip,
						rel: "nofollow",
						target: "_blank"
					}, n.a.createElement("span", null, Object(u.d)(s, t.created)), qe(r.createdTooltipId, Object(m.a)(t.created)))
				}
			}
			const Ue = e => {
				const {
					hasContinueThread: t,
					numChildren: s
				} = e.childrenInfo || {
					hasContinueThread: !1,
					numChildren: 0
				};
				return n.a.createElement(Ee, {
					className: oe.a.metaText
				}, "(", t ? Ne(e.language, s, {
					numChildren: s
				}) : Se(e.language, s, {
					numChildren: s
				}), ")")
			};
			class Ge extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = re(e, ["comment"]);
					return n.a.createElement(o.Fragment, null, t.isAuthorCakeday && n.a.createElement(pe, {
						"aria-label": Le(s.language),
						id: s.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAuthorCakeday && qe(s.cakedayTooltipId, Le(s.language)), t.isAdmin && n.a.createElement(ie, {
						desc: Te(s.language),
						id: s.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAdmin && qe(s.adminTooltipId, Te(s.language)), t.distinguishType === l.B.ALUMNI_ADMIN && n.a.createElement(le, {
						"aria-label": ke(s.language),
						children: "Δ",
						id: s.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.distinguishType === l.B.ALUMNI_ADMIN && qe(s.adminEmeritusTooltipId, ke(s.language)), t.isMod && n.a.createElement(ue, {
						desc: Me(s.language, {
							displayText: s.subredditDisplayText
						}),
						id: s.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isMod && qe(s.modTooltipId, Me(s.language, {
						displayText: s.subredditDisplayText
					})), t.isOp && n.a.createElement(xe, {
						desc: Re(s.language),
						id: s.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isOp && qe(s.opTooltipId, Re(s.language)), s.renderContractorBadge && n.a.createElement(ve, {
						desc: Ae(s.language),
						id: s.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: s.onHideTooltip
					}), s.renderContractorBadge && qe(s.contractorTooltipId, Ae(s.language)))
				}
			}
			class ze extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = re(e, ["comment"]);
					return n.a.createElement(o.Fragment, null, (t.approvedBy || t.isApproved) && n.a.createElement(ce, {
						desc: Object(k.a)(s.language, t),
						id: s.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: s.onHideTooltip
					}), (t.approvedBy || t.isApproved) && qe(s.approveTooltipId, Object(k.a)(s.language, t)), Object(L.a)(t) && n.a.createElement(be, {
						desc: Object(k.c)(s.language, t),
						id: s.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(L.a)(t) && qe(s.removeTooltipId, Object(k.c)(s.language, t)), Object(L.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && n.a.createElement(Pe, {
						onClick: s.openRemovalReasonModal
					}, Object(i.a)(s.language, "modTools.addARemovalReason")), Object(L.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && n.a.createElement(Pe, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}, Object(i.a)(s.language, "modTools.removalReason")), t.isLocked && !s.ignoreLock && n.a.createElement(de, {
						desc: Object(R.c)("Locked"),
						id: s.lockedTooltipId,
						onMouseEnter: () => {
							s.onShowTooltip(s.lockedTooltipId)
						},
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && n.a.createElement(ge, {
						desc: Object(k.e)(s.language, t),
						id: s.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && qe(s.spamTooltipId, Object(k.e)(s.language, t)), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && n.a.createElement(me, {
						className: Object(d.a)({
							[oe.a.removed]: !!t.bannedBy
						}),
						desc: Object(k.b)(s.language),
						id: s.automodTooltipId,
						key: s.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: s.onHideTooltip
					}), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && qe(s.automodTooltipId, Object(k.b)(s.language)), Object(M.a)(t) && n.a.createElement(he, {
						desc: Object(k.d)(s.language, t.numReports),
						id: s.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(M.a)(t) && qe(s.reportTooltipId, Object(k.d)(s.language, t.numReports)))
				}
			}
			const Ke = e => n.a.createElement(o.Fragment, null, n.a.createElement(X.c, {
					className: oe.a.metaText
				}), n.a.createElement(Ce, null, Object(i.a)(e, "comment.stickied"))),
				qe = (e, t) => n.a.createElement(N.c, {
					tooltipId: e,
					text: t
				})
		},
		"./src/reddit/components/Comments/ProfileComment/index.m.less": function(e, t, s) {
			e.exports = {
				TopMeta: "Ov9DvczDidxNqJMR_axF2",
				topMeta: "Ov9DvczDidxNqJMR_axF2",
				CommentBody: "_a5_x7qimk18YbGSwE8Fy",
				commentBody: "_a5_x7qimk18YbGSwE8Fy",
				ProfileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				profileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				isRemoved: "_7kIPhlgZcmDxoV_xaWnX9"
			}
		},
		"./src/reddit/components/Comments/ProfileComment/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/objectSelector/index.ts"),
				l = s("./node_modules/lodash/throttle.js"),
				m = s.n(l),
				p = s("./src/lib/fastdom/index.ts"),
				u = s("./src/reddit/i18n/components.tsx"),
				b = s("./src/reddit/components/CommentBodyExpander/index.m.less"),
				h = s.n(b);
			const g = .75,
				x = 10 * c.F;
			class v extends n.a.Component {
				constructor(e) {
					super(e), this.commentElement = null, this.handleResize = m()(() => {
						if (this.state.expandToggled) return null;
						p.a.read(() => {
							(this.commentElement ? this.commentElement.offsetHeight : 0) <= this.props.height * (g + 1) && p.a.write(() => {
								this.setState({
									expandToggled: !0
								})
							})
						})
					}, x), this.onShowMore = e => {
						e.preventDefault(), this.setState({
							expandToggled: !0
						})
					}, this.state = {
						expandToggled: e.isExpanded
					}
				}
				render() {
					const {
						children: e,
						height: t
					} = this.props, {
						expandToggled: s
					} = this.state;
					return s ? n.a.createElement("div", null, e()) : n.a.createElement("div", {
						className: h.a.collapsedCommentWrapper
					}, n.a.createElement("div", {
						className: h.a.collapsedCommentLine,
						style: {
							height: t
						}
					}, n.a.createElement("div", {
						ref: e => this.commentElement = e
					}, e(h.a.rtjCollapsed))), n.a.createElement("a", {
						className: h.a.seeMore,
						href: "javascript: void 0;",
						onClick: this.onShowMore
					}, n.a.createElement(u.c, null, "see more")))
				}
				componentDidUpdate() {
					const {
						expandToggled: e
					} = this.state;
					e && window && window.removeEventListener("resize", this.handleResize)
				}
				componentDidMount() {
					if (this.state.expandToggled) return null;
					this.commentElement && !this.commentElement.innerText.trim().includes("\n") && (window.addEventListener("resize", this.handleResize), this.handleResize())
				}
				componentWillUnmount() {
					window && window.removeEventListener("resize", this.handleResize)
				}
			}
			var O = v,
				f = s("./node_modules/lodash/noop.js"),
				C = s.n(f),
				y = s("./src/lib/makeCommentPermalink/index.ts"),
				E = s("./src/lib/makeCommentsPageKey/index.ts"),
				j = s("./src/lib/makeDraftKey/index.ts"),
				w = s("./src/reddit/actions/comment/index.ts"),
				P = s("./src/reddit/actions/gold/modals.ts"),
				I = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/actions/reportFlow.ts"),
				N = s("./src/reddit/actions/tooltip.ts"),
				_ = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				T = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				L = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				k = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				M = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				R = s("./src/reddit/components/ModModeReports/helpers.ts"),
				A = s("./src/reddit/components/ViewReportsDropdown/index.tsx"),
				B = s("./src/reddit/contexts/InsideOverlay.tsx"),
				F = s("./src/reddit/contexts/PageLayer/index.tsx"),
				D = s("./src/reddit/helpers/correlationIdTracker.ts"),
				H = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				V = s("./src/reddit/helpers/overlay/index.ts"),
				W = s("./src/reddit/helpers/trackers/lightbox.ts"),
				U = s("./src/reddit/i18n/utils.ts"),
				G = s("./src/reddit/models/PostDraft/index.ts"),
				z = s("./src/reddit/selectors/activeModalId.ts"),
				K = s("./src/reddit/selectors/comments.ts"),
				q = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Z = s("./src/reddit/selectors/posts.ts"),
				Q = s("./src/reddit/selectors/tooltip.ts"),
				J = s("./src/reddit/selectors/user.ts"),
				Y = s("./src/reddit/components/OverflowMenu/index.tsx"),
				X = s("./src/reddit/components/ReportFlow/index.tsx"),
				$ = s("./src/reddit/components/ShareMenu/index.tsx"),
				ee = s("./src/reddit/components/TrackingHelper/index.tsx"),
				te = s("./src/reddit/controls/Dropdown/Row.tsx"),
				se = s("./src/reddit/helpers/trackers/modTools.ts"),
				oe = s("./src/reddit/layout/row/Inline/index.tsx"),
				ne = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				re = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ae = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ie = s("./src/reddit/icons/svgs/Flag/index.tsx"),
				ce = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				de = s("./src/reddit/icons/svgs/Save/index.m.less"),
				le = s.n(de);
			var me = e => n.a.createElement("svg", {
					className: Object(i.a)(le.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("defs", null, n.a.createElement("path", {
					id: "".concat("save-svg", "a"),
					d: "M14 16.209l-3.403-1.486a1.52 1.52 0 0 0-1.198.002L6 16.21V5.5c0-.52-.087-1.024-.255-1.5H12.5c.827 0 1.5.673 1.5 1.5V16.21zM12.5 2h-11a.5.5 0 1 0 0 1C2.879 3 4 4.12 4 5.5v12.236a.999.999 0 0 0 1.4.916l4.6-2.008 4.6 2.008a1 1 0 0 0 1.4-.917V5.5C16 3.57 14.43 2 12.5 2z"
				})), n.a.createElement("g", {
					fill: "inherit",
					fillRule: "evenodd"
				}, n.a.createElement("path", {
					d: "M0 20h20V0H0z",
					fill: "none"
				}), n.a.createElement("mask", {
					id: "".concat("save-svg", "b"),
					fill: "none"
				}, n.a.createElement("use", {
					xlinkHref: "#".concat("save-svg", "a")
				})), n.a.createElement("use", {
					fill: "inherit",
					xlinkHref: "#".concat("save-svg", "a")
				}), n.a.createElement("g", {
					mask: "url(#".concat("save-svg", "b)"),
					fill: "none"
				}, n.a.createElement("path", {
					d: "M0 0h20v20H0z"
				})))),
				pe = s("./src/reddit/icons/svgs/Saved/index.tsx"),
				ue = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				be = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				he = s.n(be),
				ge = s("./src/lib/lessComponent.tsx");
			const xe = ge.a.wrapped(ue.b, "DeleteIcon", he.a),
				ve = ge.a.wrapped(ie.a, "ReportIcon", he.a),
				Oe = ge.a.wrapped(ce.a, "PencilIcon", he.a),
				fe = ge.a.wrapped(me, "SaveIcon", he.a),
				Ce = ge.a.wrapped(pe.a, "SavedIcon", he.a),
				ye = ge.a.wrapped(Y.b, "OverflowMenu", he.a),
				Ee = ge.a.wrapped(T.c, "ModToolsFlatlist", he.a),
				je = ge.a.wrapped(M.a, "ModActionsMenu", he.a),
				we = ge.a.wrapped(te.b, "DropdownRow", he.a),
				Pe = ge.a.wrapped(oe.a, "Flatlist", he.a),
				Ie = ge.a.button("Button", he.a),
				Se = Object(F.t)(),
				Ne = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				_e = e => "Distinguish--Dropdown--".concat(e),
				Te = (e, t) => "".concat(e, "--").concat(t, "-overflow-menu"),
				Le = e => "View--Reports--".concat(e),
				ke = Object(a.c)({
					activeTooltipId: Q.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(z.a)(e) === Ne(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(K.A)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: J.J,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(q.j)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: J.i,
					modModeEnabled: F.O,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Z.E)(e, {
							postId: s.postId
						})
					},
					postPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Z.H)(e, {
							postId: s.postId
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return e.reportFlow.postOrCommentId === s.id
					},
					subreddit: F.q,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Z.U)(e, {
							postId: s.postId
						})
					}
				});
			class Me extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(se.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.comment.permalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						Object(D.d)(D.a.GildingFlow), this.props.onGildClick();
						const {
							clickGildEvent: e
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(e(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(se.a)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(se.a)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.comment.permalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(se.a)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(se.a)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(se.b)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(W.b)(this.props.comment.postId, "comment_".concat(e))), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(se.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(se.e)(e, this.props.comment.id))
				}
				renderModTools() {
					const {
						comment: e,
						currentUser: t,
						language: s,
						moderatorPermissions: o,
						modModeEnabled: r,
						showModTools: a
					} = this.props, i = Object(H.a)(o), c = !!t && t.displayText === e.author;
					if (a && i) return r ? n.a.createElement(Ee, {
						comment: e,
						isCommentAuthor: c,
						language: s
					}) : n.a.createElement(je, {
						dropdownId: "".concat(e.id, "-profile-mod-actions-menu"),
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, n.a.createElement(re.a, null), n.a.createElement(_.a, {
						comment: e,
						language: s,
						tooltipId: "".concat(e.id, "-profile-mod-actions-menu")
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, o = Object(R.a)(e);
					if (s && Object(R.c)(e) && !t) return n.a.createElement(T.b, {
						text: "".concat(o),
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === Le(e.id),
						id: Le(e.id)
					}, n.a.createElement(A.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: Le(e.id)
					}), e.ignoreReports ? n.a.createElement(ne.a, null) : n.a.createElement(ae.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: o,
						onDistinguishComment: r,
						showModTools: a
					} = this.props, i = Object(H.a)(s), c = !!t && t.displayText === e.author, d = !!t && t.isEmployee;
					if (a && c && !e.bannedBy && (d || i && !o)) return n.a.createElement(T.b, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === _e(e.id)
					}, n.a.createElement(T.a, null), n.a.createElement(k.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === _e(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: d,
						isUserMod: i,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: _e(e.id)
					}))
				}
				render() {
					const {
						comment: e,
						className: t,
						commentsPageKey: s,
						currentUser: o,
						deleteComment: r,
						isLoggedIn: a,
						isPendingDeletion: i,
						moderatorPermissions: c,
						postIsLocked: d,
						postPermalink: l,
						subreddit: m,
						toggleDeleteCommentModal: p
					} = this.props, b = Object(H.a)(c), h = !!o && o.displayText === e.author, g = !d && !e.isLocked || b && a, x = o && e.isGildable;
					return n.a.createElement("div", {
						className: t
					}, n.a.createElement(Pe, null, g && n.a.createElement(Ie, {
						onClick: this.handleReply,
						disabled: i
					}, n.a.createElement(u.c, null, "Reply")), x && n.a.createElement(Ie, {
						onClick: this.handleGild
					}, n.a.createElement(u.c, null, "Give Award")), n.a.createElement($.a, {
						dropdownId: "".concat(s, "--").concat(e.id, "-comment-share-menu"),
						permalink: Object(y.a)(l, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subreddit: m
					}, n.a.createElement(Ie, {
						onClick: this.sendCommentEventWithNameShare
					}, n.a.createElement(u.c, null, "share"))), this.renderReportsDropdown(), n.a.createElement(ye, {
						dropdownId: Te(s, e.id),
						onClick: this.handleOverflowMenuClick
					}, !h && !i && n.a.createElement(we, {
						displayText: Object(U.c)("report"),
						onClick: this.props.onReportClick
					}, n.a.createElement(ve, null)), n.a.createElement(we, {
						displayText: e.isSaved ? Object(U.c)("Unsave") : Object(U.c)("Save"),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? n.a.createElement(Ce, null) : n.a.createElement(fe, null)), h && n.a.createElement(we, {
						displayText: Object(U.c)("edit"),
						onClick: this.handleEdit
					}, n.a.createElement(Oe, null)), h && n.a.createElement(we, {
						displayText: Object(U.c)("delete"),
						onClick: this.handleDelete
					}, n.a.createElement(xe, null))), this.props.isConfirmModalOpen && n.a.createElement(L.a, {
						actionText: Object(U.c)("delete"),
						cancelActionText: Object(U.c)("keep"),
						headerText: Object(U.c)("Delete comment"),
						modalText: Object(U.c)("Are you sure you want to delete your comment?"),
						onConfirm: r,
						toggleModal: p,
						trackClick: C.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && n.a.createElement(X.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: X.b,
						postId: this.props.comment.postId
					}))
				}
			}
			var Re = Se(Object(r.b)(ke, (e, t) => {
					let {
						comment: s,
						commentsPageKey: o,
						language: n
					} = t;
					return {
						deleteComment: () => o && e(Object(w.db)(n, s.id, s.postId)),
						onDistinguishComment: (t, o) => e(Object(w.S)(s.id, t, o)),
						onIgnoreReports: () => e(Object(w.pb)(s.id)),
						onGildClick: () => e(Object(P.d)(s.id)),
						onReportClick: () => e(Object(S.j)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(N.g)({
							tooltipId: _e(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(N.g)({
							tooltipId: Le(s.id)
						})),
						onToggleSave: () => e(Object(w.gb)(s.id)),
						handleDelete: () => {
							e(Object(I.i)(Ne(s.id))), e(Object(N.g)({
								tooltipId: Te(o, s.id)
							}))
						},
						handleEdit: t => {
							const o = Object(E.a)(s.postId, s.id, {}),
								n = {
									commentId: s.id,
									draftKey: Object(j.a)(G.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: o
								};
							e(Object(V.a)(t)), e(Object(w.ab)(n))
						},
						handleReply: t => {
							const o = Object(E.a)(s.postId, s.id, {}),
								n = {
									parentCommentId: s.id,
									commentsPageKey: o
								};
							e(Object(V.a)(t)), e(Object(w.bb)(n))
						},
						toggleDeleteCommentModal: () => e(Object(I.i)(Ne(s.id)))
					}
				})(Object(ee.b)(Object(B.b)(Me)))),
				Ae = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Be = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				Fe = s("./src/reddit/components/GildModal/Loader.tsx"),
				De = s("./src/reddit/components/RichTextJson/index.tsx"),
				He = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Ve = s("./src/reddit/selectors/gild.ts"),
				We = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Ue = s.n(We);
			const Ge = ge.a.wrapped(Ae.a, "TopMeta", Ue.a),
				ze = ge.a.div("ProfileCommentWrapper", Ue.a),
				Ke = ge.a.div("CommentBody", Ue.a),
				qe = Object(r.b)(() => Object(a.c)({
					comment: (e, t) => Object(K.n)(e, t),
					gildModalIsOpen: (e, t) => {
						let {
							commentId: s
						} = t;
						const o = Object(Be.b)(s);
						return Object(Ve.c)(e, o)
					},
					flair: K.e,
					language: J.S
				})),
				Ze = Object(d.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = qe(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: o,
					gildModalIsOpen: r,
					isExpanded: a,
					language: d,
					showFlatlist: l,
					showModTools: m
				} = e, p = s => n.a.createElement(De.a, {
					className: s,
					content: Object(He.a)(t),
					rtJsonElementProps: Ze(e)
				});
				return n.a.createElement(ze, {
					className: Object(i.a)({
						[Ue.a.isRemoved]: !!t.bannedBy
					})
				}, n.a.createElement(Ge, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: o,
					language: d,
					renderedInOverlay: !1
				}), n.a.createElement("div", null, !t.isDeleted && n.a.createElement(Ke, null, a ? p() : n.a.createElement(O, {
					height: c.Eb,
					isExpanded: a
				}, p)), !t.isDeleted && l && n.a.createElement(Re, {
					comment: t,
					commentsPageKey: s,
					language: d,
					showModTools: m
				})), r && n.a.createElement(Fe.a, null))
			})
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, s) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const r = Object(o.a)({
				getComponent: () => Object(n.a)(() => Promise.all([s.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"), s.e("InFeedChaining")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = r
		},
		"./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less": function(e, t, s) {
			e.exports = {
				badge: "_17rA6EEcc6RUglkZkHnYGO",
				container: "EorVQyBcpl50FYvpH-VTa"
			}
		},
		"./src/reddit/components/Economics/TopTippers/Icon/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/config.ts");
			const a = new Set(["t2_ktrtg"]),
				i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
						t = arguments.length > 1 ? arguments[1] : void 0;
					return "".concat(r.a.assetPath, "/img/badges/topTippers/").concat(t, "/rank-").concat(e, ".png")
				};
			t.a = e => n.a.createElement("img", {
				className: e.className,
				src: i(e.rank, e.creatorId && a.has(e.creatorId) ? e.creatorId : e.subredditId)
			})
		},
		"./src/reddit/components/EmptyProfile/EmptyListing.m.less": function(e, t, s) {
			e.exports = {
				PrimaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				primaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				BackgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				backgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				Wrapper: "_1aYPXfy_h5ZUIu0k_69eX1",
				wrapper: "_1aYPXfy_h5ZUIu0k_69eX1"
			}
		},
		"./src/reddit/components/EmptyProfile/forbidden.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RecBWgyCRDIwbumVv_1eu",
				hideIcon: "_2ahl77ziD4jsIXBLc18_Hc",
				title: "_1MRoVpNql4popp175MVxl6",
				subtitle: "_3HccUrmIe42WfjCGgNekWK",
				buttons: "_1BrhZvjQw9AWs6w5xlkj2F"
			}
		},
		"./src/reddit/components/EmptyProfile/index.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/app/strings/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/PostList/Placeholder.tsx"),
				m = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				u = s.n(p);
			const b = d.a.div("PrimaryText", u.a),
				h = d.a.wrapped(l.a, "BackgroundPlaceholder", u.a),
				g = d.a.div("Wrapper", u.a);
			var x = e => {
					let {
						children: t,
						className: s
					} = e;
					return n.a.createElement(g, {
						className: s
					}, n.a.createElement(h, {
						isLoading: !1,
						layout: m.g.Classic
					}), n.a.createElement(b, null, t))
				},
				v = s("./src/reddit/selectors/user.ts");
			const O = Object(a.c)({
				language: v.S
			});
			var f = Object(r.b)(O)(e => {
				let {
					className: t,
					language: s,
					profileName: o,
					timeSort: r = i.Pb.ALL
				} = e;
				return n.a.createElement(x, {
					className: t
				}, r === i.Pb.ALL ? Object(c.a)(s, "listings.noComments", {
					profileName: o
				}) : Object(c.a)(s, "listings.noRecentComments", {
					profileName: o
				}))
			});
			const C = Object(a.c)({
				language: v.S
			});
			var y = Object(r.b)(C)(e => {
					let {
						className: t,
						language: s,
						profileName: o,
						timeSort: r = i.Pb.ALL
					} = e;
					return n.a.createElement(x, {
						className: t
					}, r === i.Pb.ALL ? Object(c.a)(s, "listings.noPosts", {
						profileName: o
					}) : Object(c.a)(s, "listings.noRecentPosts", {
						profileName: o
					}))
				}),
				E = s("./src/reddit/components/Translated/index.tsx");
			var j = e => {
					let {
						className: t,
						verb: s
					} = e;
					return n.a.createElement(x, {
						className: t
					}, n.a.createElement(E.a, {
						msgId: "listings.privateEmpty",
						replacements: {
							verb: s
						}
					}))
				},
				w = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				P = s("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				I = s.n(P),
				S = () => n.a.createElement("div", {
					className: I.a.container
				}, n.a.createElement(w.a, {
					className: I.a.hideIcon
				}), n.a.createElement("h3", {
					className: I.a.title
				}, n.a.createElement(E.a, {
					msgId: "profile.forbidden.title"
				})), n.a.createElement("p", {
					className: I.a.subtitle
				}, n.a.createElement(E.a, {
					msgId: "profile.forbidden.savedSubtitle"
				})));
			s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "a", (function() {
				return S
			}))
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = s.n(p);
			const b = i.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					language: o,
					post: i
				} = e;
				if (!Object(m.a)(i)) return null;
				const p = i && i.eventInfo,
					h = Object(l.a)(i),
					g = p && Object(a.c)(p.eventStart, p.eventEnd);
				return n.a.createElement("div", {
					className: Object(r.a)(u.a.container, t, {
						[u.a.isCompact]: !!s
					})
				}, n.a.createElement(b, {
					className: u.a.eventMetaWrapper
				}, n.a.createElement(c.a, {
					language: o,
					post: i
				}), !h && g && n.a.createElement(d.a, {
					className: u.a.eventFollowButton,
					post: i,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/eventTools/index.ts"),
				a = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/app/strings/index.ts")),
				i = s("./src/lib/constants/index.ts");

			function c(e, t) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}
			var d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				m = s("./src/reddit/icons/fonts/Live/index.tsx"),
				p = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = s.n(p),
				b = s("./src/lib/lessComponent.tsx");
			const h = b.a.span("PostEventFutureText", u.a),
				g = b.a.span("PostEventPastText", u.a),
				x = b.a.span("PostEventNowText", u.a),
				v = b.a.span("Container", u.a),
				O = b.a.wrapped(l.a, "CalendarIcon", u.a),
				f = b.a.wrapped(m.a, "LiveIcon", u.a),
				C = b.a.div("LoadingState", u.a);
			class y extends o.Component {
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
						post: s
					} = this.props, {
						eventInfo: o
					} = s;
					if (!o) return null;
					const {
						eventEnd: l,
						eventIsLive: m,
						eventStart: p
					} = o, u = Object(r.e)(p, l);
					let b, y;
					if (this.state.mounted || u === r.a.Live) b = function(e, t, s, o) {
						const n = Object(r.e)(e, t),
							d = new Date(e * i.Cb);
						let l;
						if (n === r.a.Live || o) return Object(a.a)(s, "posts.event.inProgress");
						n === r.a.Future ? l = Object(r.d)(e) ? Object(a.a)(s, "posts.event.today") : Object(r.b)(e) >= 5 ? c(d, s) : function(e, t) {
							return e.toLocaleDateString(t, {
								weekday: "long"
							})
						}(d, s) : n === r.a.Past && (l = Object(r.d)(e) ? Object(a.a)(s, "posts.event.today") : c(d, s));
						const m = function(e, t) {
							return e.toLocaleTimeString(t, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(d, s);
						return "".concat(l, " @ ").concat(m)
					}(p, l, t, m);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						b = n.a.createElement(C, {
							className: e
						})
					}
					if (m) y = n.a.createElement(x, null, n.a.createElement(f, null), b);
					else if (u === r.a.Future) y = n.a.createElement(h, null, n.a.createElement(O, null), b);
					else {
						if (u !== r.a.Past) return null;
						y = n.a.createElement(g, null, n.a.createElement(O, null), b)
					}
					return n.a.createElement(v, {
						className: e
					}, y)
				}
			}
			t.a = y
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo",
				outboundLinkIcon: "_1zB4YvOwHPxdPEXG2CYhKB"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				d = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				u = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				b = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				h = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				g = s("./src/reddit/icons/fonts/helpers.tsx"),
				x = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				v = s.n(x);
			var O = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
					className: "".concat(Object(g.b)("expandoMediaLightbox"), " ").concat(e.className),
					onClick: e.onClick
				}), "LightboxIcon", v.a),
				f = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				C = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				y = s("./src/reddit/icons/fonts/Link/index.tsx"),
				E = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				j = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				w = s("./src/reddit/icons/fonts/Text/index.tsx"),
				P = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/components/ExpandoButton/index.m.less"),
				S = s.n(I);
			const N = Object(r.b)(null, (e, t) => ({
					toggle: () => e(Object(l.p)({
						postId: t.post.id
					}))
				})),
				_ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const s = Object(i.a)(S.a.icon, S.a.hideOnHover);
					if (t) return n.a.createElement(u.a, {
						className: s
					});
					switch (e) {
						case P.n.GIFVIDEO:
							return n.a.createElement(C.a, {
								className: s
							});
						case P.n.IMAGE:
							return n.a.createElement(j.a, {
								className: s
							});
						case P.n.TEXT:
						case P.n.RTJSON:
							return n.a.createElement(w.a, {
								className: s
							});
						case P.n.VIDEO:
							return n.a.createElement(f.a, {
								className: s
							});
						case P.n.EMBED:
						default:
							return n.a.createElement(y.a, {
								className: s
							})
					}
				};
			t.a = N(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isExpanded: r,
					post: l,
					toggle: u,
					useMediaIcons: g
				} = e, x = s || l, v = o && !!s;
				return x.media && !(("rtjson" === x.media.type || "text" === x.media.type) && !Object(p.a)(x)) ? n.a.createElement("button", {
					"aria-expanded": r,
					"aria-haspopup": !0,
					"aria-label": Object(d.c)("Expand content"),
					className: Object(i.a)(t, S.a.outer),
					"data-click-id": r ? "expando_close" : "expando_open",
					onClick: u
				}, r ? n.a.createElement(b.a, {
					className: S.a.icon
				}) : g ? n.a.createElement(n.a.Fragment, null, _(x.media && x.media.type, v), n.a.createElement(h.a, {
					className: Object(i.a)(S.a.icon, S.a.showOnHover)
				})) : n.a.createElement(h.a, {
					className: S.a.icon
				})) : x.source && x.source.url ? n.a.createElement(m.a, {
					"aria-label": Object(d.c)("Open external content"),
					className: Object(i.a)(t, S.a.outer),
					"data-click-id": "expando_open",
					href: x.source.url,
					isSponsored: l.isSponsored,
					source: l.source,
					target: "_blank"
				}, n.a.createElement(E.a, {
					className: Object(i.a)(S.a.icon, S.a.outboundLinkIcon)
				})) : n.a.createElement(a.a, {
					"aria-label": Object(d.c)("View content"),
					className: Object(i.a)(t, S.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(x.permalink),
					rel: "nofollow"
				}, n.a.createElement(O, {
					className: S.a.icon
				}))
			})
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/contexts/Tooltip.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				x = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/i18n/utils.ts"),
				O = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				f = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				C = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				w = s.n(j);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const I = "view--layout--FUE",
				S = "LayoutSwitch--picker",
				N = Object(i.a)(g.a),
				_ = {
					[u.d.Card]: C.a,
					[u.d.Classic]: O.a,
					[u.d.Compact]: f.a
				},
				T = {
					[u.d.Card]: Object(v.c)("card"),
					[u.d.Classic]: Object(v.c)("classic"),
					[u.d.Compact]: Object(v.c)("compact")
				},
				L = Object(b.t)(),
				k = Object(a.c)({
					dropdownIsOpen: Object(E.b)(S),
					postLayout: b.M,
					redditStyle: b.B
				}),
				M = Object(r.b)(k, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					openDropdown: () => e(Object(m.g)({
						tooltipId: S
					}))
				}));
			class R extends n.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: o,
							subredditId: n
						} = this.props;
						t ? t(e) : (s(e, n), o(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(y.screen)(t),
							subreddit: Object(y.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: o,
							postLayout: r
						} = this.props, a = s || u.e[r], i = e === a, d = _[e];
						return n.a.createElement(x.b, P({}, t, {
							className: Object(c.a)(w.a.LayoutItem, {
								[w.a.selected]: i
							}),
							"data-layout": e,
							displayText: T[e],
							iconWrapperClassName: w.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: w.a.LayoutItemTextClassName
						}), n.a.createElement(d, {
							className: w.a.LayoutIcon,
							onClick: i ? void 0 : o
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return n.a.createElement(N, P({}, e, {
							className: w.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: w.a.DropdownRow,
							rowIconClassName: w.a.DropdownRowIcon,
							rowSelectedClassName: w.a.DropdownRowSelected,
							tooltipId: S
						}), this.renderItem(u.d.Card), this.renderItem(u.d.Classic), this.renderItem(u.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: o
					} = this.props, r = t || u.e[o];
					return n.a.createElement("div", {
						className: Object(c.a)(w.a.Container, e),
						id: I
					}, n.a.createElement("div", {
						className: w.a.DropdownContainer,
						onClick: s
					}, this.renderItem(r, {
						id: S,
						showDropdownTriangle: !0
					}), n.a.createElement(h.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = L(M(Object(p.b)(Object(d.a)(R))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				sortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				TimeSortWrapper: "TT_m3EkILWCY4CQjHY9FQ",
				timeSortWrapper: "TT_m3EkILWCY4CQjHY9FQ",
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
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/listingSort/index.ts"),
				c = s("./src/reddit/actions/preferences.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				p = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				u = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/reselect/es/index.js")),
				b = s("./src/lib/addQueryParams/index.ts"),
				h = s("./src/lib/constants/index.ts"),
				g = s("./src/reddit/components/ListingSort/index.tsx"),
				x = s("./src/reddit/components/TimeSort/index.tsx"),
				v = s("./src/reddit/constants/listingSorts.ts"),
				O = s("./src/reddit/controls/InternalLink/index.tsx"),
				f = s("./src/reddit/helpers/path/index.ts"),
				C = s("./src/reddit/helpers/trackers/navigation.ts"),
				y = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				E = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				w = s.n(j);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const I = new Set([h.N.CONTROVERSIAL, h.N.TOP]),
				S = new Set([h.N.CONTROVERSIAL, h.N.RISING]),
				N = "ListingSort--Overflow",
				_ = Object(l.t)({
					isFrontpage: l.z,
					isProfilePage: l.H,
					pageLayer: e => e
				}),
				T = Object(u.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, E.i, (e, t, s) => {
					if (e) return e;
					const o = [h.N.HOT, h.N.NEW, h.N.TOP, h.N.RISING];
					return t && s && o.unshift(h.N.BEST), o
				}),
				L = Object(u.c)({
					sortOptions: T
				});
			class k extends n.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(C.d)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: s
						} = this.props;
						return s ? Object(b.a)(t, {
							sort: e
						}) : Object(f.a)(t, "".concat(e, "/"))
					}, this.renderSort = e => {
						const {
							sort: t
						} = this.props;
						return n.a.createElement(O.a, {
							className: Object(a.a)(w.a.SortLink, e === t && w.a.selected),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						}, n.a.createElement(g.a, {
							className: w.a.SortIcon,
							sort: e
						}), n.a.createElement("div", {
							className: w.a.SortLabel
						}, v.a[e]))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: s,
						sort: o,
						sortOptions: r,
						timeSort: i
					} = this.props, c = !t && I.has(o), d = S.has(o), l = r.filter(e => !S.has(e)), m = r.filter(e => S.has(e) && e !== o);
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(g.d, P({}, this.props, {
						buttonClassName: w.a.DropdownButton,
						className: Object(a.a)(w.a.SortDropdown, e),
						rowClassName: w.a.DropdownRow,
						rowIconClassName: w.a.DropdownRowIcon,
						rowSelectedClassName: w.a.DropdownRowSelected,
						showTitle: !1
					})), n.a.createElement("div", {
						className: Object(a.a)(w.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(o), c && n.a.createElement(x.a, {
						baseUrl: this.getSortUrl(o),
						buttonClassName: w.a.DropdownButton,
						className: w.a.TimeSort,
						listingSort: o,
						onChange: s,
						rowClassName: w.a.DropdownRow,
						rowSelectedClassName: w.a.DropdownRowSelected,
						timeSort: i || h.Qb,
						wrapperClassName: w.a.TimeSortWrapper
					}), m.length > 0 && n.a.createElement(g.d, P({}, this.props, {
						className: Object(a.a)(w.a.SortOverflow, e),
						dropdownId: N,
						rowClassName: w.a.DropdownRow,
						rowIconClassName: w.a.DropdownRowIcon,
						rowSelectedClassName: w.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: m
					}), n.a.createElement("button", {
						className: w.a.SortOverflowButton,
						id: N
					}, n.a.createElement(y.a, null))))
				}
			}
			var M = _(Object(r.b)(L)(Object(d.b)(k))),
				R = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				A = s.n(R);
			const B = Object(l.t)({
					isProfilePage: l.H,
					pageLayer: e => e
				}),
				F = Object(r.b)(null, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, o) => {
							if (s) {
								const n = Object(i.c)({
									sort: t,
									timeSort: o
								});
								e(Object(c.G)(s, n))
							}
						}
					}
				});
			class D extends n.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						m.a.setState({
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
						countrySort: s,
						disabled: o = !1,
						isProfilePage: r,
						sort: i,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: m
					} = this.props;
					return n.a.createElement("div", {
						className: Object(a.a)(A.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, n.a.createElement(M, {
						baseUrl: e,
						disabled: o,
						geopopularSort: s,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: c,
						timeSort: l
					}), !r && n.a.createElement(p.a, {
						className: A.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = B(F(Object(d.b)(D)))
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2y2WPgX5vi2SAfi_nz_Q7B"
			}
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/i18n/components.tsx"),
				i = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less"),
				c = s.n(i);
			t.a = function(e) {
				return n.a.createElement("div", {
					className: Object(r.a)(c.a.container, e.className)
				}, n.a.createElement(a.c, null, "Error: Could not load poll"))
			}
		},
		"./src/reddit/components/Governance/Proposal/ResultsSelector/DecisionThreshold/index.m.less": function(e, t, s) {
			e.exports = {
				emptyPie: "_3FcFVjZN0xHslbheCZ6YtB",
				fullPie: "_51DvHNRm7RdZvtEr4YB90",
				checkIcon: "b6nqW0WFO2M4SexVBxfHU",
				container: "_1QSw_HlkZ06PQ4H_Gl5Qmi",
				decisionIcon: "tIv0l4mIAasOfzH_1MZzr",
				decisionThreshold: "vdDwj3MECrKPWOzGvwtX4",
				pie: "_1kLHoqYVgmdy-N798MqUkD",
				pieContainer: "_19t_3cFD9b1D_z7gV6r1Lf",
				pieInvertedMask: "_240PIKFetxH16NIbed3MhP",
				pieMask: "faQEx7XG3jztMB7Ba0IzB",
				pieSwap: "sBNylAozOUua3KlWKF9bf",
				text: "_3kJ7s4NNHNqugbRuUIg9B9"
			}
		},
		"./src/reddit/components/Governance/Proposal/ResultsSelector/Tab/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1399Kcm0dM3RnJzlAPzZsE",
				selectable: "_3-DDU6UwhIWiQZZtZLB8nv",
				selected: "biqV2RX059eee3GcVedKg"
			}
		},
		"./src/reddit/components/Governance/Proposal/ResultsSelector/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_16Gygedl8JROR3rsORhsAq"
			}
		},
		"./src/reddit/components/Governance/Proposal/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3agF4JIMydb6n5U8QiQ6Tv",
				govIcon: "Biin4hWHcVT2EfDytVnNn",
				poll: "_2-Y0QlWKQ9uE8EEq087km1",
				resultsSelector: "_31DHxzl3U6nsgzY4XJjCSD",
				votingReward: "_2JVvMYg8RBHtf5C2szMdV7"
			}
		},
		"./src/reddit/components/Governance/Proposal/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/bignumber.js/bignumber.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/Governance/Token/index.tsx"),
				m = s("./src/reddit/components/Governance/VotingReward/index.m.less"),
				p = s.n(m);

			function u(e) {
				return a.a.createElement("div", {
					className: Object(d.a)(p.a.container, e.className)
				}, a.a.createElement("div", {
					className: p.a.pill
				}, a.a.createElement(l.a, {
					className: p.a.token,
					subredditId: e.subredditId
				}), a.a.createElement("span", {
					className: p.a.amount
				}, "+", e.amount)))
			}
			var b, h = s("./src/reddit/actions/governance/index.ts"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/models/Poll/index.ts"),
				f = s("./src/reddit/selectors/gov.ts"),
				C = s("./src/reddit/components/Poll/MetaData/index.tsx"),
				y = s("./src/lib/bigNumberUtils/percent.ts"),
				E = s("./src/lib/prettyPrintNumber/index.ts"),
				j = s("./src/reddit/helpers/governance/tokens.ts"),
				w = s("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				P = s("./src/reddit/components/Poll/ResultOption/index.m.less"),
				I = s.n(P);
			! function(e) {
				e[e.Count = 0] = "Count", e[e.Percent = 1] = "Percent"
			}(b || (b = {}));
			var S = function(e) {
					const t = e.poll.options.filter(t => t.id === e.optionId)[0],
						s = e.result.totalVotes,
						n = e.result.options[e.optionId],
						r = new o.BigNumber(s).isZero() ? 0 : Object(y.a)(n.votes, s),
						i = Object(j.c)(n.votes, e.tokenDisplayConversion);
					return a.a.createElement("div", {
						className: Object(d.a)(e.className, I.a.container),
						title: e.displayType === b.Count ? n.votes : "".concat(r.toFixed(2), "% (").concat(i, " ").concat(e.tokenName, ")")
					}, a.a.createElement("div", {
						className: I.a.bar,
						style: {
							opacity: e.isWinningOption ? .3 : void 0,
							width: "".concat(r, "%")
						}
					}), a.a.createElement("div", {
						className: Object(d.a)(I.a.count, {
							[I.a.hide]: e.displayType !== b.Count,
							[I.a.show]: e.displayType === b.Count
						})
					}, Object(E.b)(parseInt(n.votes))), a.a.createElement("div", {
						className: Object(d.a)(I.a.percent, {
							[I.a.hide]: e.displayType === b.Count,
							[I.a.show]: e.displayType !== b.Count
						})
					}, "".concat(r.toFixed(1), "%")), a.a.createElement("div", {
						className: I.a.text
					}, t.text), n.userSelected && a.a.createElement(w.a, {
						className: I.a.check
					}))
				},
				N = s("./src/reddit/components/Poll/ClosedPoll/index.m.less"),
				_ = s.n(N);
			const T = Object(c.c)({
				tokenName: f.o,
				tokenDisplayConversion: f.n,
				language: e => e.user.language
			});
			var L = Object(i.b)(T)((function(e) {
					let t;
					return e.poll.options.forEach(s => {
						t || (t = s);
						const n = e.result.options[s.id],
							r = e.result.options[t.id];
						new o.BigNumber(r.votes).isLessThan(new o.BigNumber(n.votes)) && (t = s)
					}), a.a.createElement("div", {
						className: e.className
					}, e.poll.options.map((s, o) => a.a.createElement(S, {
						key: o,
						className: _.a.option,
						displayType: e.displayType,
						isWinningOption: s === t,
						optionId: s.id,
						poll: e.poll,
						result: e.result,
						tokenName: e.tokenName,
						tokenDisplayConversion: e.tokenDisplayConversion
					})), a.a.createElement(C.a, {
						className: _.a.metaData,
						language: e.language,
						poll: e.poll
					}))
				})),
				k = s("./node_modules/lodash/isNil.js"),
				M = s.n(k),
				R = s("./src/reddit/constants/elementClassNames.ts"),
				A = s("./src/reddit/controls/Button/index.tsx"),
				B = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				F = s("./src/reddit/i18n/components.tsx"),
				D = s("./src/reddit/components/Poll/OpenPoll/index.m.less"),
				H = s.n(D);

			function V(e) {
				return "INPUT" === e.tagName
			}
			class W extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						optionIsSelected: !1
					}, this.handleOptionSelected = () => this.setState({
						optionIsSelected: !0
					}), this.handleSubmit = e => {
						const {
							poll: t
						} = this.props;
						e.preventDefault();
						const s = e.currentTarget,
							o = function(e) {
								for (const t of e)
									if (t.checked) return parseInt(t.value)
							}(Array.from(s.elements).filter(V));
						M()(o) || (this.props.onVoteSelection(t.options[o]), this.props.sendEvent(Object(v.e)(t.id, t.postId, o)))
					}
				}
				render() {
					return a.a.createElement("form", {
						className: this.props.className,
						onSubmit: this.handleSubmit
					}, a.a.createElement("div", null, this.props.poll.options.map((e, t) => a.a.createElement("label", {
						key: t,
						className: H.a.option
					}, a.a.createElement("input", {
						className: H.a.optionRadio,
						onChange: this.handleOptionSelected,
						type: "radio",
						name: "proposal",
						value: t
					}), a.a.createElement("div", {
						className: H.a.optionText
					}, e.text)))), a.a.createElement("div", {
						className: H.a.controlRow
					}, a.a.createElement("div", {
						className: H.a.buttonContainer
					}, a.a.createElement(A.i, {
						className: R.p,
						disabled: this.props.voteInProgress || !this.props.userIsLoggedIn || !this.state.optionIsSelected,
						type: "submit"
					}, this.props.voteInProgress ? a.a.createElement(B.a, {
						className: H.a.loadingIcon,
						sizePx: 20
					}) : a.a.createElement(r.Fragment, null, this.props.votingIcon, a.a.createElement(F.c, null, "vote"))), !this.props.userIsLoggedIn && a.a.createElement("div", {
						className: H.a.loggedOutTooltip
					}, a.a.createElement(F.c, null, "You must be logged in to vote"))), a.a.createElement(C.a, {
						className: H.a.metaData,
						language: this.props.language,
						poll: this.props.poll
					})))
				}
			}
			const U = Object(c.c)({
				language: e => e.user.language,
				userIsLoggedIn: e => !!e.user.account
			});
			var G = Object(i.b)(U)(Object(g.b)(W)),
				z = s("./src/reddit/components/Poll/index.m.less"),
				K = s.n(z);
			class q extends a.a.Component {
				constructor() {
					super(...arguments), this.userAlreadyMadeSelection = (e, t) => !(!e || !t) && Object(O.g)(e, t), this.sendPollResultsEvent = () => {
						const {
							poll: e,
							sendEvent: t
						} = this.props;
						e && t(Object(v.d)(e.id, e.postId))
					}
				}
				componentDidMount() {
					const {
						isCommentsPage: e,
						poll: t,
						result: s
					} = this.props;
					e && this.userAlreadyMadeSelection(t, s) && this.sendPollResultsEvent()
				}
				componentDidUpdate(e) {
					!this.userAlreadyMadeSelection(e.poll, e.result) && this.userAlreadyMadeSelection(this.props.poll, this.props.result) && this.sendPollResultsEvent()
				}
				render() {
					const {
						className: e,
						displayType: t,
						onVoteSelection: s,
						poll: o,
						result: n,
						subredditId: r,
						title: i,
						voteInProgress: c,
						votingIcon: d
					} = this.props;
					return o ? a.a.createElement("div", {
						className: e
					}, i && a.a.createElement("div", {
						className: K.a.title
					}, i), n && Object(O.e)(o, n) ? a.a.createElement(L, {
						displayType: t,
						poll: o,
						result: n,
						subredditId: r
					}) : a.a.createElement(G, {
						poll: o,
						onVoteSelection: s,
						voteInProgress: c,
						votingIcon: d
					})) : null
				}
			}
			const Z = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				result: (e, t) => e.polls.results[t.resultType][t.pollId],
				voteInProgress: (e, t) => !!e.polls.api.voting.pending[t.pollId]
			});
			var Q = Object(x.t)({
					isCommentsPage: x.w
				})(Object(i.b)(Z, (e, t) => ({
					onVoteSelection: s => e(Object(h.f)(t.pollId, s.id))
				}))(Object(g.b)(q))),
				J = s("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				Y = s("./src/app/strings/index.ts"),
				X = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), e => a.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					d: "M10.7771 0.961401C10.3769 0.466643 9.62244 0.466642 9.22221 0.961401L8.71391 1.58973C8.42377 1.9484 7.92591 2.06204 7.50887 1.86478L6.77829 1.51921C6.20302 1.2471 5.52329 1.57445 5.37735 2.19386L5.19202 2.98051C5.08623 3.42955 4.68698 3.74795 4.22565 3.75117L3.41748 3.75681C2.78112 3.76125 2.31073 4.3511 2.44801 4.97249L2.62234 5.76165C2.72186 6.21213 2.50029 6.67222 2.08605 6.87528L1.36036 7.23101C0.788947 7.51112 0.621066 8.24665 1.01436 8.74695L1.51383 9.38231C1.79895 9.745 1.79895 10.2557 1.51383 10.6184L1.01436 11.2537C0.621067 11.754 0.788947 12.4895 1.36036 12.7697L2.08605 13.1254C2.50029 13.3284 2.72186 13.7885 2.62234 14.239L2.44801 15.0282C2.31073 15.6496 2.78112 16.2394 3.41748 16.2439L4.22565 16.2495C4.68698 16.2527 5.08623 16.5711 5.19202 17.0202L5.37735 17.8068C5.52329 18.4262 6.20302 18.7536 6.77829 18.4815L7.50887 18.1359C7.92591 17.9386 8.42376 18.0523 8.71391 18.4109L9.22221 19.0393C9.62244 19.534 10.3769 19.534 10.7771 19.0393L11.2854 18.4109C11.5756 18.0523 12.0734 17.9386 12.4905 18.1359L13.221 18.4815C13.7963 18.7536 14.476 18.4262 14.622 17.8068L14.8073 17.0202C14.9131 16.5711 15.3124 16.2527 15.7737 16.2495L16.5819 16.2439C17.2182 16.2394 17.6886 15.6496 17.5513 15.0282L17.377 14.239C17.2775 13.7885 17.499 13.3284 17.9133 13.1254L18.639 12.7697C19.2104 12.4895 19.3783 11.754 18.985 11.2537L18.4855 10.6184C18.2004 10.2557 18.2004 9.745 18.4855 9.38231L18.985 8.74695C19.3783 8.24665 19.2104 7.51112 18.639 7.23101L17.9133 6.87528C17.499 6.67222 17.2775 6.21213 17.377 5.76165L17.5513 4.97249C17.6886 4.3511 17.2182 3.76125 16.5819 3.75681L15.7737 3.75117C15.3124 3.74795 14.9131 3.42956 14.8073 2.98051L14.622 2.19386C14.476 1.57445 13.7963 1.2471 13.221 1.51921L12.4905 1.86478C12.0734 2.06204 11.5756 1.94841 11.2854 1.58973L10.7771 0.961401ZM12.5231 7.71779L13.0827 8.27779C13.2391 8.43419 13.2391 8.68699 13.0827 8.84339L9.44271 12.4834C9.36471 12.5614 9.26231 12.6006 9.1599 12.6006C9.0575 12.6006 8.95551 12.5614 8.8771 12.4834L6.9171 10.5234C6.7607 10.3674 6.7607 10.1142 6.9171 9.95779L7.4771 9.39779C7.6335 9.24139 7.8867 9.24139 8.0427 9.39779L9.1599 10.515L11.9575 7.71779C12.0323 7.64259 12.1339 7.60059 12.2403 7.60059C12.3463 7.60059 12.4479 7.64259 12.5231 7.71779Z"
				})))),
				$ = s("./src/reddit/selectors/user.ts"),
				ee = s("./src/reddit/components/Governance/Proposal/ResultsSelector/DecisionThreshold/index.m.less"),
				te = s.n(ee);

			function se(e) {
				return a.a.createElement(r.Fragment, null, a.a.createElement("div", {
					className: te.a.text
				}, a.a.createElement(F.c, null, "Achieved Decision Threshold")), a.a.createElement("div", {
					className: te.a.decisionIcon,
					title: e.votes
				}, a.a.createElement(X, {
					className: te.a.decisionThreshold
				})))
			}

			function oe(e) {
				return a.a.createElement(r.Fragment, null, a.a.createElement("div", {
					className: te.a.text
				}, Object(Y.a)(e.language, "polls.decisionThreshold", {
					amount: Object(E.b)(parseInt(Object(j.b)(e.threshold, e.tokenDisplayConversion)))
				})), a.a.createElement(ne, {
					percent: e.percent
				}))
			}

			function ne(e) {
				const t = Math.floor(e.percent / 100 * 360);
				return a.a.createElement("div", {
					className: te.a.pieContainer,
					title: "".concat(e.percent, "%")
				}, a.a.createElement("div", {
					className: te.a.pie
				}), a.a.createElement("div", {
					className: te.a.pieInvertedMask
				}), a.a.createElement("div", {
					className: Object(d.a)(te.a.pieMask, {
						[te.a.pieSwap]: e.percent >= 50
					}),
					style: {
						transform: e.percent < 50 ? "rotate(".concat(t, "deg)") : "rotate(".concat(t - 180, "deg)")
					}
				}))
			}
			const re = Object(c.c)({
				language: $.S,
				poll: (e, t) => {
					let {
						pollId: s
					} = t;
					return e.polls.models[s]
				},
				pollResult: (e, t) => {
					let {
						pollId: s
					} = t;
					return e.polls.results.byVotingPower[s]
				},
				tokenDisplayConversion: f.n
			});
			var ae = Object(i.b)(re)((function(e) {
					if (!(e.poll && e.poll.decisionThreshold && e.pollResult)) return null;
					const t = Object(O.c)(e.poll, e.pollResult),
						s = new n.a(e.pollResult.options[t.id].votes),
						o = e.poll.decisionThreshold,
						r = s.isGreaterThanOrEqualTo(new n.a(o)),
						i = Object(y.a)(e.pollResult.options[t.id].votes, o);
					return a.a.createElement("div", {
						className: Object(d.a)(te.a.container, e.className)
					}, r ? a.a.createElement(se, {
						language: e.language,
						votes: s.toString()
					}) : a.a.createElement(oe, {
						language: e.language,
						threshold: o,
						percent: i,
						tokenDisplayConversion: e.tokenDisplayConversion
					}))
				})),
				ie = s("./src/reddit/components/Governance/Proposal/ResultsSelector/Tab/index.m.less"),
				ce = s.n(ie);

			function de(e) {
				return a.a.createElement("a", {
					className: Object(d.a)(e.className, ce.a.container, {
						[ce.a.selectable]: !!e.selectable,
						[ce.a.selected]: !!e.selectable && !!e.isSelected
					}),
					onClick: e.onSelect,
					title: e.tooltipText
				}, e.text)
			}
			var le = s("./src/reddit/components/Governance/Proposal/ResultsSelector/index.m.less"),
				me = s.n(le);
			const pe = Object(c.c)({
				tokenName: f.o,
				tokenDisplayConversion: f.n,
				distribution: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.gov.distributions[s]
				},
				language: e => e.user.language,
				poll: (e, t) => {
					let {
						pollId: s
					} = t;
					return e.polls.models[s]
				},
				pollIsClosed: (e, t) => {
					let {
						pollId: s,
						resultsByVoters: o
					} = t;
					const n = e.polls.models[s];
					return !!(n && o && Object(O.e)(n, o))
				},
				wallet: f.g
			});
			var ue = Object(i.b)(pe)((function(e) {
					const {
						distribution: t,
						poll: s,
						resultsByVoters: n,
						resultsByVotingPower: r,
						tokenDisplayConversion: i,
						tokenName: c,
						wallet: l
					} = e, m = r ? r.totalVotes : "0", p = !new o.BigNumber(m).isZero() && l && t ? Object(y.a)(m, t.totalAvailable) : 0, u = n ? n.totalVotes : "0", b = Object(j.c)(m, i), h = Object(E.b)(parseInt(u));
					return a.a.createElement("div", {
						className: Object(d.a)(e.className, me.a.container)
					}, a.a.createElement("div", null, s.type !== O.a.GA && a.a.createElement(de, {
						isSelected: e.currentResultType === O.b.ByVotingPower,
						selectable: e.pollIsClosed,
						text: "".concat(b, " ").concat(c),
						tooltipText: Object(Y.a)(e.language, "polls.votingBreakdown", {
							tokenName: c,
							count: Object(j.c)(m, i),
							percent: p.toFixed(2)
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(O.b.ByVotingPower)
					}), a.a.createElement(de, {
						isSelected: e.currentResultType === O.b.ByVoters,
						selectable: e.pollIsClosed,
						text: Object(Y.c)(e.language, "polls.numVotes", parseInt(u), {
							count: h
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(O.b.ByVoters)
					})), Object(O.d)(s) && a.a.createElement(ae, {
						pollId: e.pollId,
						subredditId: e.subredditId
					}))
				})),
				be = s("./src/reddit/components/Governance/Proposal/index.m.less"),
				he = s.n(be);
			class ge extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						displayReward: !1,
						resultType: this.props.poll.type === O.a.GA ? O.b.ByVoters : O.b.ByVotingPower
					}, this.handleResultTypeChange = e => this.setState({
						resultType: e
					}), this.handleContainerClick = e => {
						this.props.poll.type === O.a.GA && e.stopPropagation()
					}
				}
				componentDidUpdate(e, t) {
					if (!!this.props.pollReward && !new o.BigNumber(this.props.pollReward).isZero()) {
						const s = xe(e, t.resultType),
							o = xe(this.props, this.state.resultType);
						if (s && o) {
							const t = !Object(O.e)(e.poll, s),
								n = Object(O.e)(this.props.poll, o);
							t && n && this.setState({
								displayReward: !0
							})
						}
					}
				}
				render() {
					return a.a.createElement("div", {
						className: Object(d.a)(this.props.className, he.a.container),
						onClick: this.handleContainerClick
					}, a.a.createElement(ue, {
						className: he.a.resultsSelector,
						currentResultType: this.state.resultType,
						pollId: this.props.pollId,
						resultsByVoters: this.props.resultsByVoters,
						resultsByVotingPower: this.props.resultsByVotingPower,
						subredditId: this.props.subredditId,
						onChangeResultType: this.handleResultTypeChange
					}), a.a.createElement(Q, {
						key: this.props.pollId,
						className: he.a.poll,
						displayType: this.state.resultType === O.b.ByVoters ? b.Count : b.Percent,
						pollId: this.props.pollId,
						resultType: this.state.resultType,
						subredditId: this.props.subredditId,
						votingIcon: Object(O.d)(this.props.poll) ? a.a.createElement(J.a, {
							className: he.a.govIcon
						}) : void 0
					}), this.props.pollReward && this.state.displayReward && a.a.createElement(u, {
						amount: this.props.pollReward,
						className: he.a.votingReward,
						subredditId: this.props.subredditId
					}))
				}
			}

			function xe(e, t) {
				return t === O.b.ByVotingPower ? e.resultsByVotingPower : e.resultsByVoters
			}
			const ve = Object(c.c)({
				language: e => e.user.language,
				poll: (e, t) => e.polls.models[t.pollId],
				pollReward: (e, t) => e.polls.rewards[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId],
				resultsByVotingPower: (e, t) => e.polls.results.byVotingPower[t.pollId]
			});
			t.a = Object(i.b)(ve)(ge)
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/config.ts"),
				c = s("./src/reddit/selectors/gov.ts");
			const d = Object(a.c)({
				tokenSymbol: c.p
			});
			t.a = Object(r.b)(d)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return n.a.createElement("img", {
					className: e.className,
					src: "".concat(i.a.assetPath, "/").concat(t)
				})
			}))
		},
		"./src/reddit/components/Governance/VotingReward/index.m.less": function(e, t, s) {
			e.exports = {
				amount: "_2uGwXKrmP9OljxIhbSCOjc",
				container: "dVX1qcOidD13L5NRRKOPb",
				pill: "_2tKg0JJT2prOVVIOrtS2JP",
				pillAnim: "_3qV2ZaEJd_k1NSZDxMjK-g",
				token: "_3dLs5lIwl_kKHq589IyKz5",
				tokenRotation: "_1C5oqr8CA_wteJsqqSRq0B"
			}
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RYN-7H8gYctjOQeL8p2Q7",
				topCompactPost: "_34QdMmLlbOcjhKm_jp-r3s",
				bottomCompactPost: "_2IWrSJK7OQ27rTgV_N2Zu4",
				backgroundWrapper: "_11R7M_VOgKO1RJyRSRErT3",
				isEvent: "_3js7RHbLSHKV13qUFCVIhb",
				flatListContainer: "_1ixsU4oQRnNfZ91jhBU74y",
				noProposal: "_3KYCJ3N4w1YmvpFMo_3zcn",
				postMediaWrapper: "STit0dLageRsa2yR4te_b",
				postTitle: "_3wiKjmhpIpoTE2r5KCm2o6",
				proposal: "_2dkCPUHQTdBWU2B0dYnkRb",
				mPollIsClosed: "_3sj79JhIvASSGVklMeKgTl",
				mHasNotVoted: "_5iUKicC_Y0zWFXvBBtVQJ",
				mGAPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mGaPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				chain: "_39yVNiqPz4VPgNZTlpA5fx",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/config.ts"),
				c = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				d = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				l = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				m = s("./src/reddit/actions/inFeedChaining.ts"),
				p = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/models/Poll/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/models/Vote/index.ts"),
				v = s("./src/reddit/selectors/activeModalId.ts"),
				O = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				f = s("./src/reddit/selectors/inFeedChaining.ts"),
				C = s("./src/reddit/selectors/moderatorPermissions.ts"),
				y = s("./src/reddit/selectors/monthsToMinutes.ts"),
				E = s("./src/reddit/selectors/posts.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				w = s("./src/lib/classNames/index.ts"),
				P = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				I = s("./src/reddit/components/CallToActionButton/index.tsx"),
				S = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				N = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				_ = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				T = s("./src/reddit/components/Flatlist/index.tsx"),
				L = s("./src/reddit/components/Governance/Proposal/index.tsx"),
				k = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx"),
				M = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				R = s("./src/reddit/components/ModModeReports/index.tsx"),
				A = s("./src/reddit/components/ModModeReports/helpers.ts"),
				B = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				F = s("./src/reddit/components/PostContainer/index.tsx"),
				D = s("./src/reddit/components/PostLeftRail/index.tsx"),
				H = s("./src/reddit/components/PostMedia/index.tsx"),
				V = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				W = s("./src/reddit/i18n/components.tsx"),
				U = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				G = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				z = s.n(G);
			var K = () => n.a.createElement("div", {
					className: z.a.container
				}, n.a.createElement(U.a, {
					className: z.a.pinnedIcon
				}), n.a.createElement("span", {
					className: z.a.metaText
				}, n.a.createElement(W.c, null, "pinned by moderators"))),
				q = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				Z = s("./src/reddit/components/PostTitle/index.tsx"),
				Q = s("./src/reddit/components/PostTopLine/index.tsx"),
				J = s("./src/reddit/components/SourceLink/index.tsx"),
				Y = s("./src/reddit/contexts/InsideOverlay.tsx"),
				X = s("./src/reddit/contexts/PageLayer/index.tsx"),
				$ = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				ee = s("./src/reddit/helpers/isCrosspost.ts"),
				te = s("./src/reddit/helpers/postEvent.ts"),
				se = s("./src/reddit/constants/experiments.ts"),
				oe = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ne = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const re = Object(a.a)(E.O, e => e.some(ne.c)),
				ae = Object(a.a)(re, e => e),
				ie = (e, t) => Object(oe.c)(e, {
					experimentName: se.D,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && ae(e, {
							listingKey: s
						})
					}
				});
			var ce = s("./src/reddit/selectors/postFlair.ts"),
				de = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				le = s.n(de),
				me = s("./src/reddit/components/LargePost/index.m.less"),
				pe = s.n(me);
			const ue = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(E.O)(e, {
						listingKey: s
					}) : void 0
				},
				be = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(E.C)(e, {
						listingKey: s
					}) : void 0
				},
				he = Object(r.b)(() => Object(a.c)({
					autoplayPref: j.b,
					activeModalId: v.a,
					currentUser: j.i,
					hideNSFWPref: j.z,
					flairStyleTemplate: X.Q,
					isCurrentUserProfilePost: E.h,
					isFrontpageHome: y.g,
					isM2MHomeRedirectEnabled: O.c,
					language: j.S,
					isActive: E.g,
					isPostChainDismissed: f.c,
					isPostChained: f.d,
					moderatorPermissions: C.i,
					modModeEnabled: X.O,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					pollResult: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.results.byVoters[s] : null
					},
					post: E.I,
					posts: ue,
					postHeightVariant: ie,
					postIds: be,
					showEditFlair: ce.a,
					subredditOrProfile: E.U,
					userIsOp: j.jb
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: n
					} = t;
					return {
						chainPost: () => {
							o && s && e(Object(m.d)({
								listingKey: s,
								listingName: o,
								postId: n
							}))
						},
						handleVote: t => {
							const s = t === x.a.upvoted ? Object(p.N)(n) : Object(p.o)(n);
							e(s)
						},
						onIgnoreReports: () => e(Object(p.L)(n)),
						onOpenReportsDropdown: t => e(Object(u.g)({
							tooltipId: t
						}))
					}
				}),
				ge = n.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						chainPost: o,
						className: r,
						currentUser: a,
						eventFactory: m,
						flairStyleTemplate: p,
						forceLoadMedia: u,
						hideNSFWPref: x,
						inSubredditOrProfile: v = !1,
						isCommentsPage: O,
						isCurrentUserProfilePost: f,
						isFrontpage: C,
						isFrontpageHome: y,
						isM2MHomeRedirectEnabled: E,
						isOverlay: j,
						isPostChainDismissed: W,
						isPostChained: U,
						language: G,
						listingKey: z,
						listingName: Y,
						moderatorPermissions: X,
						modModeEnabled: oe,
						onClickPost: ne,
						onIgnoreReports: re,
						onOpenReportsDropdown: ae,
						poll: ie,
						pollResult: ce,
						post: de,
						postHeightVariant: me,
						scrollerItemRef: ue,
						showEditFlair: be,
						subredditOrProfile: he,
						userIsOp: ge
					} = e, xe = !!e.redditStyle || !!e["data-redditstyle"], ve = xe ? void 0 : p, Oe = Object(d.a)(X), fe = oe && Oe, Ce = Object(c.a)(X), ye = Object(A.c)(de), Ee = !!de.media && de.media.type === b.n.RTJSON, je = ge && Ee, we = s ? s - D.a : void 0, Pe = !!ce && !!Object.keys(ce.options).filter(e => ce.options[e].userSelected).length, Ie = !(C && y), Se = (e => e === se.qb.OnlyTitles)(me) && !Object(ee.a)(de), Ne = (e => e === se.qb.MediumHeight)(me) && !Object(ee.a)(de), _e = (e => {
						const {
							post: t,
							postIds: s,
							posts: o
						} = e;
						if (!Object(g.k)(t)) return;
						const n = s && 0 === s.indexOf(t.id),
							r = s && 1 === s.indexOf(t.id),
							a = o && o[1] && Object(g.k)(o[1]);
						return {
							hasTopCompactPostStyles: n && a,
							hasBottomCompactPostStyles: r,
							showPinnnedHeader: n
						}
					})(e), Te = n.a.createElement(F.a, {
						className: Object(w.a)(pe.a.container, r, le.a.largeAndMediumPostStyles, le.a.largeAndMediumActiveStyles, Object(l.a)(e), {
							[le.a.mUseRedditTheme]: xe,
							promotedvideolink: de.isSponsored && !(de.media && b.a.has(de.media.type)),
							[pe.a.topCompactPost]: _e && _e.hasTopCompactPostStyles,
							[pe.a.bottomCompactPost]: _e && _e.hasBottomCompactPostStyles
						}),
						isOverlay: j,
						style: Object(l.b)(e.flairStyleTemplate),
						post: de,
						onClick: ne,
						onPostContentClick: o,
						eventFactory: m
					}, n.a.createElement(q.a, {
						model: de,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: ve,
						redditStyle: xe
					}), n.a.createElement(B.a, {
						className: Object(w.a)(pe.a.backgroundWrapper, {
							[pe.a.isEvent]: Object(te.a)(de)
						}),
						"data-click-id": "background",
						flairStyleTemplate: ve,
						post: de,
						redditStyle: xe
					}, n.a.createElement(_.a, {
						post: de,
						language: G
					}), _e && _e.showPinnnedHeader && n.a.createElement(K, null), n.a.createElement(Q.a, {
						className: pe.a.postTopLine,
						hideNSFWPref: x,
						iconClassName: pe.a.postTopLineIcon,
						inSubredditOrProfile: v,
						isCommentsPage: !!O,
						isCompactPinnedPost: !!_e,
						isCurrentUserProfilePost: f,
						isOverlay: !!j,
						language: G,
						post: de,
						shouldShowSubscribeButton: Ie,
						showSubreddit: !v && !de.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: he
					}), n.a.createElement(Z.c, {
						className: pe.a.postTitle,
						post: de,
						redditStyle: xe,
						size: Z.b.Large,
						titleColor: ve && ve.postTitleColor,
						isM2MHomeRedirectEnabled: E,
						isOverlay: j
					}), de.source && !de.isSponsored && n.a.createElement(J.a, {
						className: pe.a.sourceLink,
						post: de
					}), n.a.createElement("div", {
						className: Object(w.a)(pe.a.postMediaWrapper, {
							[pe.a.votedContent]: Pe
						})
					}, !_e && n.a.createElement(H.a, {
						isListing: !0,
						isMediumHeight: Ne,
						isNotCardView: !!j,
						isTitleOnly: Se,
						showCentered: !0,
						flairStyleTemplate: ve,
						post: de,
						availableWidth: we,
						shouldLoad: u,
						scrollerItemRef: ue,
						autoplayPref: t
					})), ie && n.a.createElement(L.a, {
						className: Object(w.a)(pe.a.proposal, {
							[pe.a.mHasNotVoted]: !ce,
							[pe.a.mPollIsClosed]: !!ce && Object(h.e)(ie, ce),
							[pe.a.mGAPoll]: ie.type === h.a.GA
						}),
						pollId: ie.id,
						subredditId: de.belongsTo.id
					}), de.isMeta && !ie && n.a.createElement(k.a, {
						className: pe.a.noProposal
					}), de.source && de.source.url && de.isSponsored && n.a.createElement(P.a, {
						className: pe.a.adLinkWrapper
					}, n.a.createElement($.a, {
						href: de.source.url.replace(i.a.redditUrl, ""),
						isSponsored: de.isSponsored,
						source: de.source
					}, de.source.displayText), de.callToAction && n.a.createElement(I.a, {
						href: de.source.url.replace(i.a.redditUrl, ""),
						isSponsored: de.isSponsored,
						source: de.source
					}, de.callToAction)), oe && Oe && ye && n.a.createElement(R.a, {
						language: G,
						onIgnoreReports: re,
						reportable: de
					}), n.a.createElement(M.d, {
						postId: de.id
					}), n.a.createElement("div", {
						className: pe.a.flatListContainer
					}, n.a.createElement(S.a, {
						className: pe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ve,
						model: de,
						onVoteClick: e.handleVote
					}), n.a.createElement(T.c, {
						currentUser: a,
						hasModFlairPerms: Ce,
						hasModPostPerms: Oe,
						isLargePost: !0,
						isOverlay: !!j,
						language: G,
						modModeEnabled: oe,
						onIgnoreReports: re,
						onOpenReportsDropdown: ae,
						post: de,
						showEditPost: je,
						showEditFlair: be,
						useFlatlistBreakpoints: Object(V.h)({
							editPost: !1,
							save: !fe,
							hide: !1,
							report: !1
						})
					}))));
					return n.a.createElement(n.a.Fragment, null, Te, U && !W && n.a.createElement(N.a, {
						className: pe.a.chain,
						listingKey: z,
						listingName: Y,
						postId: de.id
					}))
				});
			t.default = he(Object(Y.b)(ge))
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/componentSizes.ts"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				u = s.n(p),
				b = s("./src/lib/lessComponent.tsx");
			const h = Object(m.t)(),
				g = Object(a.c)({
					layout: m.M
				}),
				x = Object(r.b)(g);
			class v extends n.a.Component {
				constructor(e) {
					super(e), this.onClickIcon = e => {
						if (void 0 === this.state.left) {
							const e = this.ref.offsetLeft;
							this.setState({
								left: e
							})
						}
					}, this.onMouseEnter = () => {
						this.state.mouseInside || this.setState({
							mouseInside: !0
						})
					}, this.onMouseLeave = () => {
						this.state.mouseInside && this.setState({
							left: void 0,
							mouseInside: !1
						})
					}, this.ref = null, this.state = {
						left: void 0,
						mouseInside: !1
					}
				}
				componentWillReceiveProps(e) {
					0 !== e.offsetLeft - this.props.offsetLeft && (this.noTransition = !0)
				}
				componentDidUpdate() {
					this.noTransition && (this.noTransition = !1)
				}
				getDynamicStyleTags() {
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n          .".concat(u.a.Component, " {\n            --layoutNavigation-considerateNav-offsetLeft: ").concat(this.props.offsetLeft, "px;\n          }\n        ")
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * c.n + c.r + c.s,
						t = l.a - e,
						s = c.h - t,
						o = l.a + s + (this.props.bladeOpen ? c.a : 0);
					return this.props.layout !== d.g.Large ? null : n.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n            @media (min-width: ".concat(o, "px) {\n              .").concat(u.a.Component, " {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ").concat(c.h + c.r + c.s, "px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.s, "px) / 2);\n              }\n\n              .").concat(u.a.Component, ".").concat(u.a["m-consider-sidebar"], " {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.h + c.r + c.s, "px) / 2);\n              }\n            }\n          ")
						}
					})
				}
				render() {
					const e = Object(i.a)(this.props.className, u.a.Component, {
						[u.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return n.a.createElement("div", {
						className: u.a.Container
					}, n.a.createElement("div", {
						className: e,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseEnter,
						ref: e => this.ref = e,
						style: {
							left: this.state.left || void 0,
							transition: this.noTransition ? "initial" : void 0
						}
					}, this.getDynamicStyleTags(), this.props.render(this.onClickIcon)))
				}
			}
			t.a = h(x(b.a.wrapped(v, "Component", u.a)))
		},
		"./src/reddit/components/LayoutNavigation/Container.m.less": function(e, t, s) {
			e.exports = {
				BodyContainer: "_1levonEFuP4txDjgWG4Akb",
				bodyContainer: "_1levonEFuP4txDjgWG4Akb",
				SidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
				sidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
				"m-collectionLayout": "_2QBg8k5_IhSEfaeA4P26Ix",
				mCollectionLayout: "_2QBg8k5_IhSEfaeA4P26Ix",
				InnerContainer: "_342tHkB-Rwz4OVqGfKgPab",
				innerContainer: "_342tHkB-Rwz4OVqGfKgPab",
				Component: "_12Ewyh01Y1cMPB3Ri_F1C4",
				component: "_12Ewyh01Y1cMPB3Ri_F1C4"
			}
		},
		"./src/reddit/components/LayoutNavigation/Container.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/constants/componentSizes.ts"),
				c = s("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				d = s("./src/reddit/layout/page/Listing/Content.tsx"),
				l = s("./src/reddit/selectors/structuredStyles.ts"),
				m = s("./src/reddit/selectors/userPrefs.ts"),
				p = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				u = s("./src/reddit/components/LayoutNavigation/Container.m.less"),
				b = s.n(u),
				h = s("./src/lib/lessComponent.tsx");
			const g = h.a.div("BodyContainer", b.a),
				x = h.a.div("SidebarPlaceholder", b.a),
				v = h.a.div("InnerContainer", b.a),
				O = Object(a.c)({
					bladeOpen: e => !!Object(l.j)(e),
					isSubscriptionsPinned: m.b
				}),
				f = Object(r.b)(O);
			class C extends n.a.Component {
				constructor(e) {
					super(e), this.state = {
						bodyScrollOffset: 0
					}
				}
				componentDidMount() {
					const e = () => {
						const {
							marginRight: e
						} = document.body.style;
						!!e != !!this.state.bodyScrollOffset && (e ? this.setState({
							bodyScrollOffset: Object(c.c)(document.body)
						}) : this.setState({
							bodyScrollOffset: 0
						}))
					};
					try {
						this.docObserver = new MutationObserver(e)
					} catch (t) {}
					this.docObserver && this.docObserver.observe(document.body, {
						attributes: !0
					})
				}
				componentWillUnmount() {
					this.docObserver && this.docObserver.disconnect()
				}
				render() {
					const {
						bladeOpen: e,
						considerPinnedSubscriptions: t = !0,
						containerClassName: s,
						isSubscriptionsPinned: o,
						considerSidebar: r = !0,
						onFocus: a,
						onBlur: c
					} = this.props;
					let l = 0;
					return o && !e && t && (l += i.v), 0 !== this.state.bodyScrollOffset && (l -= this.state.bodyScrollOffset), n.a.createElement("div", {
						className: this.props.className
					}, n.a.createElement(g, {
						onFocus: a,
						onBlur: c
					}, n.a.createElement(d.a, {
						fitPageToContent: !0
					}, n.a.createElement(v, {
						className: s
					}, n.a.createElement(p.a, {
						bladeOpen: e,
						considerSidebar: r,
						offsetLeft: l,
						render: this.props.render
					}))), r && n.a.createElement(x, null)))
				}
			}
			t.a = h.a.wrapped(f(C), "Component", b.a)
		},
		"./src/reddit/components/LayoutNavigation/index.m.less": function(e, t, s) {
			e.exports = {
				listingSort: "_3E6INjIzonJwM0r4N1QJYK",
				separator: "lMwVtd6llwkRVdjCNiCAl"
			}
		},
		"./src/reddit/components/LayoutNavigation/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/listingSort/index.ts"),
				d = s("./src/reddit/components/LayoutNavigation/Container.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-router-redux/es/index.js")),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/lib/classNames/index.ts"),
				b = s("./src/reddit/components/ListingSort/index.tsx"),
				h = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/higherOrderComponents/asTooltip.tsx")),
				g = s("./src/lib/lessComponent.tsx"),
				x = s("./src/reddit/constants/parameters.ts"),
				v = s("./src/app/strings/index.ts");
			const O = {
				[i.Mb.AllStates]: Object(v.e)("stateSorts.allStates"),
				[i.Mb.Alaska]: Object(v.e)("stateSorts.alaska"),
				[i.Mb.Alabama]: Object(v.e)("stateSorts.alabama"),
				[i.Mb.Arkansas]: Object(v.e)("stateSorts.arkansas"),
				[i.Mb.Arizona]: Object(v.e)("stateSorts.arizona"),
				[i.Mb.California]: Object(v.e)("stateSorts.california"),
				[i.Mb.Colorado]: Object(v.e)("stateSorts.colorado"),
				[i.Mb.Connecticut]: Object(v.e)("stateSorts.connecticut"),
				[i.Mb.DistrictOfColumbia]: Object(v.e)("stateSorts.districtOfColumbia"),
				[i.Mb.Delaware]: Object(v.e)("stateSorts.delaware"),
				[i.Mb.Florida]: Object(v.e)("stateSorts.florida"),
				[i.Mb.Georgia]: Object(v.e)("stateSorts.georgia"),
				[i.Mb.Hawaii]: Object(v.e)("stateSorts.hawaii"),
				[i.Mb.Iowa]: Object(v.e)("stateSorts.iowa"),
				[i.Mb.Idaho]: Object(v.e)("stateSorts.idaho"),
				[i.Mb.Illinois]: Object(v.e)("stateSorts.illinois"),
				[i.Mb.Indiana]: Object(v.e)("stateSorts.indiana"),
				[i.Mb.Kansas]: Object(v.e)("stateSorts.kansas"),
				[i.Mb.Kentucky]: Object(v.e)("stateSorts.kentucky"),
				[i.Mb.Louisiana]: Object(v.e)("stateSorts.louisiana"),
				[i.Mb.Massachusetts]: Object(v.e)("stateSorts.massachusetts"),
				[i.Mb.Maryland]: Object(v.e)("stateSorts.maryland"),
				[i.Mb.Maine]: Object(v.e)("stateSorts.maine"),
				[i.Mb.Michigan]: Object(v.e)("stateSorts.michigan"),
				[i.Mb.Minnesota]: Object(v.e)("stateSorts.minnesota"),
				[i.Mb.Missouri]: Object(v.e)("stateSorts.missouri"),
				[i.Mb.Mississippi]: Object(v.e)("stateSorts.mississippi"),
				[i.Mb.Montana]: Object(v.e)("stateSorts.montana"),
				[i.Mb.NorthCarolina]: Object(v.e)("stateSorts.northCarolina"),
				[i.Mb.NorthDakota]: Object(v.e)("stateSorts.northDakota"),
				[i.Mb.Nebraska]: Object(v.e)("stateSorts.nebraska"),
				[i.Mb.NewHampshire]: Object(v.e)("stateSorts.newHampshire"),
				[i.Mb.NewJersey]: Object(v.e)("stateSorts.newJersey"),
				[i.Mb.NewMexico]: Object(v.e)("stateSorts.newMexico"),
				[i.Mb.Nevada]: Object(v.e)("stateSorts.nevada"),
				[i.Mb.NewYork]: Object(v.e)("stateSorts.newYork"),
				[i.Mb.Ohio]: Object(v.e)("stateSorts.ohio"),
				[i.Mb.Oklahoma]: Object(v.e)("stateSorts.oklahoma"),
				[i.Mb.Oregon]: Object(v.e)("stateSorts.oregon"),
				[i.Mb.Pennsylvania]: Object(v.e)("stateSorts.pennsylvania"),
				[i.Mb.RhodeIsland]: Object(v.e)("stateSorts.rhodeIsland"),
				[i.Mb.SouthCarolina]: Object(v.e)("stateSorts.southCarolina"),
				[i.Mb.SouthDakota]: Object(v.e)("stateSorts.southDakota"),
				[i.Mb.Tennessee]: Object(v.e)("stateSorts.tennessee"),
				[i.Mb.Texas]: Object(v.e)("stateSorts.texas"),
				[i.Mb.Utah]: Object(v.e)("stateSorts.utah"),
				[i.Mb.Virginia]: Object(v.e)("stateSorts.virginia"),
				[i.Mb.Vermont]: Object(v.e)("stateSorts.vermont"),
				[i.Mb.Washington]: Object(v.e)("stateSorts.washington"),
				[i.Mb.Wisconsin]: Object(v.e)("stateSorts.wisconsin"),
				[i.Mb.WestVirginia]: Object(v.e)("stateSorts.westVirginia"),
				[i.Mb.Wyoming]: Object(v.e)("stateSorts.wyoming")
			};
			var f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				C = s("./src/reddit/contexts/Tooltip.ts"),
				y = s("./src/reddit/controls/Dropdown/index.tsx"),
				E = s("./src/reddit/controls/Dropdown/Row.tsx"),
				j = s("./src/reddit/selectors/tooltip.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/components/StateSort/index.m.less"),
				I = s.n(P);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const N = g.a.wrapped(y.a, "_Dropdown", I.a),
				_ = Object(h.a)(N),
				T = e => {
					return e.indexOf("_") > 0 && k(e) === i.v.UnitedStates
				},
				L = e => {
					if (T(e)) {
						return e.split("_")[1]
					}
					return i.Mb.AllStates
				},
				k = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				M = e => {
					const t = k(e),
						s = L(e);
					return T(e) ? "".concat(t, "_").concat(s) : t
				},
				R = Object(f.t)(),
				A = Object(a.c)({
					dropdownIsOpen: Object(j.b)("StateSort--StateSortPicker"),
					language: w.S
				}),
				B = Object(r.b)(A, e => ({
					onOpenDropdown: () => e(Object(p.g)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, s) => {
						e(Object(m.b)(t)), e(Object(l.t)(i.v.UnitedStates + "_" + s))
					}
				}));
			var F = g.a.wrapped(R(B(e => {
					const t = "".concat(e.baseUrl, "?").concat(x.g, "=").concat(i.v.UnitedStates);
					return n.a.createElement("div", {
						className: e.className,
						onClick: e.onOpenDropdown
					}, n.a.createElement(b.c, {
						disabled: e.disabled
					}, n.a.createElement(b.b, {
						displayText: O[e.sort](e.language),
						id: "StateSort--StateSortPicker",
						showDropdownTriangle: !0
					})), n.a.createElement(C.a.Consumer, null, s => n.a.createElement(_, S({
						isOpen: e.dropdownIsOpen,
						tooltipId: "StateSort--StateSortPicker"
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(i.Mb).map(s => n.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === i.Mb.AllStates ? t : "".concat(t, "_").concat(e))(i.Mb[s]), M(i.Mb[s]))
					}, n.a.createElement(E.b, {
						displayText: O[i.Mb[s]](e.language),
						isSelected: e.sort === s
					}))))))
				})), "Component", I.a),
				D = s("./src/reddit/constants/countrySorts.ts"),
				H = s("./src/reddit/components/CountrySort/index.m.less"),
				V = s.n(H);

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const U = Object(f.t)(),
				G = Object(a.c)({
					dropdownIsOpen: Object(j.b)("CountrySort--CountrySortPicker"),
					language: w.S
				});
			var z = U(Object(r.b)(G, e => ({
					onOpenDropdown: t => e(Object(p.g)({
						tooltipId: t
					})),
					onClickLink: (t, s) => {
						e(Object(m.b)(t)), e(Object(l.t)(s))
					}
				}))(e => {
					const t = k(e.sort),
						s = L(e.sort),
						o = "".concat(e.baseUrl, "?").concat(x.g, "=");
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: Object(u.a)(V.a.countrySort, e.className),
						onClick: () => e.onOpenDropdown("CountrySort--CountrySortPicker")
					}, n.a.createElement(b.c, {
						disabled: e.disabled
					}, n.a.createElement(b.b, {
						displayText: (() => t in D.a ? D.a[t] : D.a[i.v.Everywhere])(),
						id: "CountrySort--CountrySortPicker",
						showDropdownTriangle: !0
					})), n.a.createElement(C.a.Consumer, null, s => n.a.createElement(_, W({
						isOpen: e.dropdownIsOpen,
						tooltipId: "CountrySort--CountrySortPicker"
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(i.v).map(s => n.a.createElement("div", {
						key: s,
						onClick: () => e.onClickLink("".concat(o).concat(M(i.v[s])), i.v[s])
					}, n.a.createElement(E.b, {
						displayText: D.a[i.v[s]],
						isSelected: t === s
					})))))), t === i.v.UnitedStates && n.a.createElement(F, {
						baseUrl: e.baseUrl,
						disabled: e.disabled,
						sort: s
					}))
				})),
				K = s("./src/reddit/components/TimeSort/index.tsx"),
				q = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Z = s("./src/reddit/constants/page.ts"),
				Q = s("./src/reddit/controls/LayoutSwitch/index.tsx"),
				J = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				Y = s("./src/reddit/components/LayoutNavigation/index.m.less"),
				X = s.n(Y);
			const $ = Object(f.t)({
					isProfilePage: f.H,
					pageLayer: e => e
				}),
				ee = Object(a.c)({
					currentUser: w.i,
					language: w.S,
					isPopularListing: f.D,
					redditStyle: f.B
				}),
				te = Object(r.b)(ee, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, o) => {
							if (s) {
								const n = Object(c.c)({
									sort: t,
									timeSort: o
								});
								e(Object(l.G)(s, n))
							}
						}
					}
				});
			t.a = $(te(Object(q.b)(e => {
				const {
					disabled: t = !1,
					isPopularListing: s,
					isProfilePage: o
				} = e, r = e.sort === i.N.TOP || e.sort === i.N.CONTROVERSIAL, a = s && e.countrySort && e.sort === i.N.HOT, c = e => {
					J.a.setState({
						isListingFocused: e
					})
				};
				return n.a.createElement(d.a, {
					className: e.className,
					onFocus: () => c(!0),
					onBlur: () => c(!1),
					render: s => n.a.Children.toArray([o ? null : n.a.createElement(Q.a, {
						onLayoutClick: s,
						subredditId: e.subredditId
					}), o ? null : n.a.createElement("div", {
						className: X.a.separator
					}), n.a.createElement(b.d, {
						className: X.a.listingSort,
						baseUrl: e.baseUrl,
						disabled: t,
						geopopularSort: e.countrySort,
						onChange: e.updateSortPreference,
						sort: e.sort,
						sortOptions: e.sortOptions
					}), !t && r && [n.a.createElement(K.a, {
						baseUrl: "".concat(e.baseUrl, "/").concat(e.sort),
						listingSort: e.sort,
						onChange: t => e.updateSortPreference(e.sort, t),
						timeSort: e.timeSort || i.Qb
					})], a && n.a.createElement(z, {
						baseUrl: e.isPopularListing ? "/r/".concat(Z.g, "/") : "",
						disabled: t,
						sort: e.countrySort
					})])
				})
			})))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/icons/svgs/Best/index.m.less"),
				c = s.n(i);
			var d = e => n.a.createElement("svg", {
					className: Object(r.a)(c.a.best, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
				}), n.a.createElement("path", {
					d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
				})),
				l = s("./src/reddit/icons/svgs/Controversial/index.m.less"),
				m = s.n(l);
			var p = e => n.a.createElement("svg", {
					className: Object(r.a)(m.a.controversial, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", null, n.a.createElement("polygon", {
					fill: "inherit",
					points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
				}))),
				u = s("./src/reddit/icons/svgs/Hot/index.m.less"),
				b = s.n(u);
			var h = e => n.a.createElement("svg", {
					className: Object(r.a)(b.a.icon, e.className),
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("title", null, "Hot"), n.a.createElement("path", {
					d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
				})),
				g = s("./src/reddit/icons/svgs/New/index.m.less"),
				x = s.n(g);
			var v = e => n.a.createElement("svg", {
					className: Object(r.a)(x.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", null, n.a.createElement("polygon", {
					fill: "inherit",
					points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
				}))),
				O = s("./src/reddit/icons/svgs/Rising/index.m.less"),
				f = s.n(O);
			var C = e => n.a.createElement("svg", {
					className: Object(r.a)(f.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", null, n.a.createElement("path", {
					fill: "inherit",
					d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
				}))),
				y = s("./src/reddit/icons/svgs/Top/index.tsx"),
				E = s("./src/reddit/controls/Dropdown/index.m.less"),
				j = s.n(E);
			const w = {
				[a.N.BEST]: d,
				[a.N.HOT]: h,
				[a.N.NEW]: v,
				[a.N.CONTROVERSIAL]: p,
				[a.N.TOP]: y.a,
				[a.N.RISING]: C
			};
			t.a = e => {
				let {
					className: t,
					sort: s
				} = e;
				const o = w[s];
				return o ? n.a.createElement(o, {
					className: Object(r.a)(t, j.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, s) {
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
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				ListingSortIcon: "_2_BnLcYdo9EaJjSVrN0kdW",
				listingSortIcon: "_2_BnLcYdo9EaJjSVrN0kdW"
			}
		},
		"./src/reddit/components/ListingSort/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return L
			})), s.d(t, "b", (function() {
				return M
			})), s.d(t, "c", (function() {
				return R
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/listingSorts.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/contexts/Tooltip.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				x = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/helpers/path/index.ts"),
				O = s("./src/reddit/helpers/trackers/navigation.ts"),
				f = s("./src/reddit/i18n/components.tsx"),
				C = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				y = s("./src/reddit/selectors/tooltip.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				w = s("./src/reddit/components/ListingSort/index.m.less"),
				P = s.n(w),
				I = s("./src/lib/lessComponent.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var N = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const _ = "ListingSort--SortPicker",
				T = Object(i.a)(I.a.wrapped(g.a, "Dropdown", P.a)),
				L = I.a.wrapped(j.a, "ListingSortIcon", P.a),
				k = (I.a.wrapped(C.b, "DropdownTriangle", P.a), I.a.div("Title", P.a)),
				M = I.a.wrapped(e => n.a.createElement(x.b, S({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", P.a),
				R = e => {
					var {
						disabled: t
					} = e, s = N(e, ["disabled"]);
					return n.a.createElement("div", S({}, s, {
						className: Object(d.a)(P.a.SortWrapper, s.className, {
							[P.a.isDisabled]: t
						})
					}))
				},
				A = I.a.div("DropdownRowDisabled", P.a),
				B = Object(b.t)({
					isFrontpage: b.z,
					isProfilePage: b.H,
					pageLayer: e => e
				}),
				F = Object(a.c)({
					user: E.i,
					dropdownIsOpen: (e, t) => Object(y.b)(t.dropdownId || _)(e),
					language: E.S
				}),
				D = Object(r.b)(F, (e, t) => {
					let {
						dropdownId: s,
						pageLayer: o
					} = t;
					return {
						onOpenDropdown: () => e(Object(m.g)({
							tooltipId: s || _
						}))
					}
				});
			t.d = I.a.wrapped(B(D(Object(p.b)(e => n.a.createElement("div", {
				className: e.className,
				onClick: e.onOpenDropdown
			}, !1 !== e.showTitle && n.a.createElement(k, null, n.a.createElement(f.c, null, "Sort")), n.a.createElement(R, {
				disabled: e.disabled
			}, e.children || n.a.createElement(M, {
				className: e.buttonClassName,
				displayText: u.a[e.sort],
				id: e.dropdownId || _,
				showDropdownTriangle: !0
			}, n.a.createElement(L, {
				sort: e.sort
			}))), n.a.createElement(h.a.Consumer, null, t => n.a.createElement(T, S({
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId || _
			}, t, {
				renderContentsHidden: !0
			}), e.disabled ? n.a.createElement(A, null, n.a.createElement(f.c, null, "Coming soon")) : (e.sortOptions || ((e, t) => {
				const s = [l.N.HOT, l.N.NEW, l.N.TOP, l.N.RISING];
				return e && t && s.unshift(l.N.BEST), s
			})(e.isFrontpage, e.user)).map(t => n.a.createElement(x.b, {
				className: Object(d.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
				displayText: u.a[t],
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(O.d)(t))
				},
				href: e.isProfilePage ? Object(c.a)(e.baseUrl, {
					sort: t
				}) : Object(v.a)(e.baseUrl, "".concat(t, "/")),
				isSelected: e.sort === t,
				key: t
			}, n.a.createElement(L, {
				className: e.rowIconClassName,
				sort: t
			}))))))))), "ListingSort", P.a)
		},
		"./src/reddit/components/MiniCardPost/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_3TV1zxvLEbF8phHfZ17hyU",
				shareIcon: "_2-No1ECt3Twm8oRh3GhL5T",
				shareMenu: "_1Y9kO8WxKheHpQbgAgYk9P",
				shareText: "_3ZNfZZMmSFZUWWm-nHK327",
				HorizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				horizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				score: "_3O9hIPB_M3zadlrD7rXaEG",
				ShareButton: "_3VIaRwebVBflQjPct1Wz6l",
				shareButton: "_3VIaRwebVBflQjPct1Wz6l"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_35Bx3s8VlFspHwPlg1MaHt",
				subredditNameLink: "_20yDd2SHTuiJkQnTV4zehJ",
				subredditIcon: "_32Ni_aGBoPzRxNSy5eC_ck",
				CrosspostIcon: "y4hzYjyQqdKpwuDyNnLeW",
				crosspostIcon: "y4hzYjyQqdKpwuDyNnLeW"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/app/strings/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				p = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				u = s.n(p);
			const b = s("./src/lib/lessComponent.tsx").a.wrapped(m.a, "CrosspostIcon", u.a);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: o,
					language: m,
					post: p,
					subredditOrProfile: h
				} = e;
				return n.a.createElement("div", {
					className: Object(a.a)(u.a.container, t)
				}, n.a.createElement(d.a, {
					className: u.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: h.url
				}, n.a.createElement(c.b, {
					className: u.a.subredditIcon,
					shouldHideNsfwIcon: o,
					subredditOrProfile: h
				}), n.a.createElement("span", null, h.displayText)), ((e, t, s) => {
					if (s) return n.a.createElement("div", {
						role: "img",
						"aria-label": Object(r.a)(e, "posts.crosspostedByFrom", {
							by: Object(l.c)(t),
							from: s.displayText
						})
					}, n.a.createElement(b, null))
				})(m, p.author, s), h && h.isQuarantined && n.a.createElement(i.a, null))
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1HoOlmppFDBC4s5XWY-Qcd",
				thumbnail: "_1XZerRCUnHmbtEN1gqPwnw",
				thumbnailContainer: "_3fS9xUAmm4zWkzfM1ce7Jk",
				thumbnailLinkIcon: "_2JCMpuchwaEmL9S0QsJ9Ok",
				thumbnailLinkText: "_2vJWD7kgxbAQRGL328NxHg",
				thumbnailOutboundLinkIcon: "_4GTpE-l9TNXVeix3ZOE-_"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(i);
			t.a = e => {
				const {
					source: t
				} = e.post;
				return n.a.createElement("div", {
					className: Object(r.a)(c.a.container, e.className)
				}, n.a.createElement(a.a, {
					className: Object(r.a)(c.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(r.a)(c.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(r.a)(c.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: c.a.thumbnailLinkText,
					outboundLinkIconClassName: c.a.thumbnailOutboundLinkIcon,
					post: e.post,
					showContentType: e.showPlaceholderContentType,
					templatePlaceholderImage: e.templatePlaceholderImage,
					text: t ? t.url : "",
					usePreview: e.usePreview
				}))
			}
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, s) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/MiniCardPost/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/isUrl/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/postFlair.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				b = s("./src/reddit/components/Media/index.tsx"),
				h = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				g = s("./src/reddit/components/PostContainer/index.tsx"),
				x = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				v = s("./src/reddit/components/PostTitle/index.tsx"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				C = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				y = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				E = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/models/Vote/index.ts"),
				w = s("./src/reddit/selectors/activeModalId.ts"),
				P = s("./src/reddit/selectors/moderatorPermissions.ts"),
				I = s("./src/reddit/selectors/postFlair.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				N = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/CommentsLink/index.tsx"),
				T = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				L = s("./src/reddit/components/Flatlist/index.tsx"),
				k = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				M = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				R = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				A = s("./src/reddit/components/ShareMenu/index.tsx"),
				B = s("./src/reddit/components/TrackingHelper/index.tsx"),
				F = s("./src/reddit/constants/postLayout.ts"),
				D = s("./src/reddit/helpers/trackers/post.ts"),
				H = s("./src/reddit/i18n/components.tsx"),
				V = s("./src/reddit/icons/fonts/Share/index.tsx"),
				W = s("./src/reddit/models/User/index.ts"),
				U = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				G = s.n(U),
				z = s("./src/lib/lessComponent.tsx");
			const K = "-MiniCardModMenu",
				q = "-MiniCardOverflowMenu",
				Z = "-MiniCardShareMenu",
				Q = z.a.wrapped(T.a, "HorizontalVotes", G.a),
				J = z.a.button("ShareButton", G.a),
				Y = Object(O.t)({
					currentProfileName: O.h,
					isCommentPermalink: O.v,
					isCommentsPage: O.w,
					isProfilePostListing: O.I,
					pageLayer: e => e
				}),
				X = Object(a.c)({
					layout: O.M,
					subreddit: O.q
				});
			var $ = Y(Object(r.b)(X, {})(Object(B.b)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: o,
						handleVote: r,
						hasModFlairPerms: a,
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						isProfilePostListing: p,
						isSticky: u,
						language: b,
						layout: h,
						modModeEnabled: g,
						onCommentsClick: x,
						post: v,
						sendEvent: O,
						showEditFlair: f,
						showEditPost: C,
						subreddit: y
					} = e, E = e => O(Object(D.f)(v.id, e)), j = v.postId, w = Object(L.d)(K, v.id, m, u), P = !!o && Object(W.f)(o) === v.author;
					return n.a.createElement("div", {
						className: Object(i.a)(G.a.flatlistContainer, s)
					}, n.a.createElement(Q, {
						compact: !1,
						model: v,
						onVoteClick: r,
						scoreClassName: G.a.score
					}), n.a.createElement(_.a, {
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						postId: v.id,
						modModeEnabled: g,
						numComments: v.numComments,
						type: F.g.Compact,
						onClick: x
					}), n.a.createElement(A.a, {
						className: G.a.shareMenu,
						dropdownId: Object(L.d)(Z, v.id, m, u),
						permalink: v.permalink,
						post: v,
						sendEventWithName: E,
						subreddit: y
					}, n.a.createElement(J, null, n.a.createElement(V.a, {
						className: G.a.shareIcon
					}), n.a.createElement("span", {
						className: G.a.shareText
					}, n.a.createElement(H.c, null, "share")))), c && n.a.createElement(k.a, {
						dropdownId: w,
						onClick: () => E("post_mod_action_menu")
					}, n.a.createElement(L.b, {
						className: G.a.modActionsIcon
					}), n.a.createElement(M.a, {
						canEditFlair: a && !!f,
						hasModPostPerms: c,
						isOverlay: !!m,
						isPostAuthor: P,
						language: b,
						modModeEnabled: g,
						post: v,
						tooltipId: w
					})), n.a.createElement(R.g, {
						currentProfileName: t,
						isCommentsPage: d,
						isOverlay: !!m,
						isProfilePostListing: p,
						layout: h,
						pageLayer: e.pageLayer,
						permalink: v.permalink,
						postId: j,
						dropdownId: Object(L.d)(q, v.id, m, u),
						isFixed: u,
						sendEvent: O,
						showEditPost: !!C,
						showEditFlair: !!f,
						useFlatlistBreakpoints: Object(R.h)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				ee = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				te = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				se = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				oe = s.n(se),
				ne = s("./src/reddit/components/MiniCardPost/index.m.less"),
				re = s.n(ne);
			s.d(t, "a", (function() {
				return ie
			}));
			const ae = Object(O.t)(),
				ie = Object(r.b)(() => Object(a.c)({
					activeModalId: w.a,
					autoplayPref: N.b,
					crosspostRoot: S.c,
					crosspostSubredditOrProfile: S.d,
					currentUser: N.i,
					flairStyleTemplate: O.Q,
					hideNSFWPref: N.z,
					isActive: S.g,
					language: N.S,
					moderatorPermissions: P.i,
					modModeEnabled: O.O,
					post: S.I,
					showEditFlair: I.a,
					subredditOrProfile: S.U,
					userIsOp: N.jb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: o,
								selectedTemplateId: n
							} = t;
							return e(Object(m.h)({
								post: s,
								previewFlair: o,
								selectedTemplateId: n
							}))
						},
						handleVote: t => {
							const o = t === j.a.upvoted ? Object(l.N)(s) : Object(l.o)(s);
							e(o)
						},
						onIgnoreReports: () => e(Object(l.L)(s)),
						onOpenReportsDropdown: t => e(Object(p.g)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => Object.assign({}, s, e, t, {
					onFlairChanged: s => {
						let {
							previewFlair: o,
							selectedTemplateId: n
						} = s;
						return t.dispatchFlairChanged({
							post: e.post,
							previewFlair: o,
							selectedTemplateId: n
						})
					}
				}));
			t.b = ae(ie(Object(c.a)(e => {
				const {
					autoplayPref: t,
					availableWidth: s,
					className: o,
					crosspostRoot: r,
					crosspostSubredditOrProfile: a,
					currentUser: c,
					eventFactory: l,
					flairStyleTemplate: m,
					forceLoadMedia: p,
					hideNSFWPref: O,
					language: j,
					moderatorPermissions: w,
					modModeEnabled: P,
					onClickPost: I,
					post: S,
					scrollerItemRef: N,
					shouldPause: _,
					showMetaLine: T = !0,
					showEditFlair: L,
					subredditOrProfile: k,
					userIsOp: M
				} = e, {
					media: R
				} = r || S, A = R && R.type, B = Object(x.b)(S.id), F = A === E.n.RTJSON, D = M && F, H = Object(C.a)(w), V = Object(f.a)(w), W = R && A !== E.n.RTJSON && A !== E.n.TEXT, U = !R && !!S.source && Object(d.a)(S.source.url), G = R && n.a.createElement(b.a, {
					autoplayPref: t,
					availableWidth: s,
					className: re.a.media,
					imageBoxClassName: re.a.mediaImageBox,
					imageBoxContentImageClassName: re.a.mediaImageBoxContentImage,
					forceAspectRatio: E.c,
					isListing: !0,
					isMiniCard: !0,
					isNotCardView: !0,
					post: r || S,
					scrollerItemRef: N,
					shouldPause: _,
					shouldLoad: p,
					showCentered: !0,
					showFull: !1
				});
				return n.a.createElement(g.a, {
					className: Object(i.a)(re.a.postContainer, oe.a.largeAndMediumActiveStyles, oe.a.largeAndMediumPostStyles, Object(y.a)(e), o),
					style: Object.assign({}, Object(y.b)(e.flairStyleTemplate), Object(y.d)(e)),
					post: S,
					onClick: I,
					eventFactory: l
				}, n.a.createElement(h.a, {
					className: re.a.backgroundWrapper,
					flairStyleTemplate: m
				}, W && G, n.a.createElement("div", {
					className: re.a.innerContainer
				}, U && n.a.createElement(te.a, {
					post: S,
					templatePlaceholderImage: m ? m.postPlaceholderImage : void 0
				}), n.a.createElement(v.c, {
					className: re.a.postTitleCompact,
					disableFlair: !0,
					hideSourceLink: !0,
					post: S,
					size: v.b.Large,
					titleColor: m && m.postTitleColor
				}), T && k && n.a.createElement(ee.a, {
					className: re.a.metaLine,
					crosspostSubredditOrProfile: a,
					hideNSFWPref: O,
					language: j,
					post: S,
					subredditOrProfile: k
				}), !W && n.a.createElement("div", {
					className: re.a.mediaWrapper
				}, G), n.a.createElement("div", {
					className: re.a.flexSpacer
				}), n.a.createElement($, {
					currentUser: c,
					handleVote: e.handleVote,
					hasModFlairPerms: V,
					hasModPostPerms: H,
					language: j,
					modModeEnabled: P,
					post: S,
					showEditFlair: L,
					showEditPost: D
				}))), e.activeModalId === B && n.a.createElement(x.a, {
					flairs: S.flair,
					subredditId: S.belongsTo.id,
					modalId: B,
					onFlairChanged: e.onFlairChanged
				}), n.a.createElement(u.d, {
					postId: S.id
				}))
			})))
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, s) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				c = s("./src/reddit/i18n/components.tsx"),
				d = s("./src/reddit/components/ModModeReports/index.m.less"),
				l = s.n(d);
			const m = a.a.div("Text", l.a),
				p = a.a.div("Placeholder", l.a),
				u = Object(r.a)({
					ErrorComponent: e => {
						let {
							className: t
						} = e;
						return n.a.createElement(p, {
							className: t
						})
					},
					getComponent: () => Object(i.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							className: t
						} = e;
						return n.a.createElement(p, {
							className: t
						}, n.a.createElement(m, null, n.a.createElement(c.c, null, "Loading reports…")))
					}
				});
			t.a = e => n.a.createElement(u, e)
		},
		"./src/reddit/components/OverviewChronoComment/index.m.less": function(e, t, s) {
			e.exports = {
				commentOuterWrapper: "_1g70Ndz7edo5LA6hie1Gkt",
				commentWrapper: "_324SLny5spJ682AiI73uBO",
				isLast: "_2nq8DZns5TUNKoe0aDsW4K",
				isAwarded: "_3L-s9jSlG2xSayzJ_b7J1t",
				isNightmodeOn: "Cd5iGkxl9fzuGE1cWMHC4",
				isFirst: "q4WgOJAmvFRFKX_yrlG-1",
				commentSeparator: "_3H85Xyyv141qju7KQFQ_d5",
				commentContentWrapper: "_27uDfyCMhkucg8xWyoTLYp"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.m.less": function(e, t, s) {
			e.exports = {
				OverviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				overviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				ClassicPost: "OZOlqlxhdnIVuS5MQ5yMi",
				classicPost: "OZOlqlxhdnIVuS5MQ5yMi"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/ClassicPost/index.tsx"),
				a = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/constants/gold.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/components/CommentContainer/index.tsx"),
				u = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = s("./src/reddit/helpers/getClickInfo.ts"),
				h = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				g = s("./src/reddit/selectors/comments.ts"),
				x = s("./src/reddit/selectors/communityAwards.ts"),
				v = s("./src/reddit/selectors/experiments/goldAwardedCommentHighlight.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				C = s.n(f);
			const y = Object(a.b)(() => Object(i.c)({
				comment: g.n,
				isCommentHighlightExperiment: (e, t) => {
					if (!Object(v.a)(e)) return !1;
					const s = Object(g.n)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(x.a)(e, t);
						return s && s.coinPrice >= c.g
					})
				},
				isNightmodeOn: O.U
			}), e => ({
				openPost: t => e(Object(m.x)(t))
			}));
			var E = Object(l.a)(y(e => {
					const {
						comment: t,
						commentId: s,
						first: o,
						isCommentHighlightExperiment: r,
						isNightmodeOn: a,
						last: i,
						openPost: c,
						showModTools: l
					} = e;
					if (!t) return null;
					return n.a.createElement(p.a, {
						comment: t,
						onClick: (e, t) => {
							c({
								postOrComment: t,
								clickInfo: Object(b.a)(e),
								queryParams: {
									context: 3
								}
							})
						},
						style: {
							background: Object(h.e)(e)
						}
					}, n.a.createElement("div", {
						className: Object(d.a)(C.a.commentOuterWrapper, {
							[C.a.isLast]: i,
							[C.a.isAwarded]: r,
							[C.a.isNightmodeOn]: a
						})
					}, n.a.createElement("div", {
						className: Object(d.a)(C.a.commentWrapper, {
							[C.a.isFirst]: o
						})
					}, n.a.createElement("div", {
						className: C.a.commentSeparator
					}), t.parentId && n.a.createElement("div", {
						className: C.a.commentSeparator
					}), n.a.createElement("div", {
						className: C.a.commentContentWrapper
					}, n.a.createElement(u.a, {
						commentId: s,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: l,
						isExpanded: !0
					})))))
				})),
				j = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				w = s("./src/reddit/contexts/PageLayer/index.tsx"),
				P = s("./src/reddit/helpers/isComment.ts"),
				I = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				S = s.n(I),
				N = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var T = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const L = Object(w.t)({
					currentProfileName: w.h,
					isCommentsPage: w.w,
					isCommentPermalink: w.v,
					isProfilePostListing: w.I,
					pageLayer: e => e
				}),
				k = N.a.wrapped(j.a, "OverviewCommentPost", S.a),
				M = N.a.wrapped(r.default, "ClassicPost", S.a);
			t.a = L(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: o,
					allowModToolsUnderComments: r,
					height: a,
					width: i
				} = e, c = T(e, ["itemId", "isFirstInCommentList", "isLastInCommentList", "allowModToolsUnderComments", "height", "width"]);
				return Object(P.a)(t) ? s ? n.a.createElement(n.a.Fragment, null, n.a.createElement(k, _({}, c, {
					availableWidth: i,
					commentId: t
				})), n.a.createElement(E, {
					commentId: t,
					first: s,
					last: o,
					showModTools: r
				})) : n.a.createElement(E, {
					commentId: t,
					first: s,
					last: o,
					showModTools: r
				}) : n.a.createElement(M, _({}, c, {
					inSubredditOrProfile: !1
				}))
			})
		},
		"./src/reddit/components/OverviewChronoList/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_31Psg18W6Dm5EvcCqvaQm2",
				component: "_31Psg18W6Dm5EvcCqvaQm2",
				ComponentHasItems: "_1cKfMnE4GcGLgj5Xiz5PPb",
				componentHasItems: "_1cKfMnE4GcGLgj5Xiz5PPb"
			}
		},
		"./src/reddit/components/OverviewCommentPost/index.m.less": function(e, t, s) {
			e.exports = {
				overviewCommentPost: "_32w108aFIBi3H0DKCU4OI7",
				banned: "_3P8_MTWuehQOXRUhWBpwB0",
				reported: "_1Z7-lWgZwHw4sBG3rO44v7",
				InternalLink: "_31VWB3vSkv19o3I7RVE710",
				internalLink: "_31VWB3vSkv19o3I7RVE710",
				Wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				Row: "_1InmLYfaOm6m9MZ8wKxM-0",
				row: "_1InmLYfaOm6m9MZ8wKxM-0",
				CommentIcon: "y05plmPkDK7RiRh8b3b8-",
				commentIcon: "y05plmPkDK7RiRh8b3b8-",
				TitleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				titleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				PostTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				postTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				PostTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitleOutboundLink: "_3heiUGSIAJO43_Ertq1e2F",
				postTitleTitle: "_3gWN_jC4sfo4uQ61ZRgOO",
				PostTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				postTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				postTopMetaMetaSeparator: "_2IhK-xvBLjMsX4HZ-T6j-W",
				MetaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				metaSeparator: "_3RjYJMG6TaMnSwb88daQ7W"
			}
		},
		"./src/reddit/components/OverviewCommentPost/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/i18n/components.tsx"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				u = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				b = s("./src/reddit/selectors/comments.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/PostContainer/index.tsx"),
				v = s("./src/reddit/components/PostTitle/index.tsx"),
				O = s("./src/reddit/components/PostTopMeta/index.tsx"),
				f = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				C = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				y = s.n(C),
				E = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				j = s.n(E);
			const w = l.a.wrapped(p.a, "InternalLink", j.a),
				P = l.a.div("Wrapper", j.a),
				I = l.a.div("Row", j.a),
				S = l.a.wrapped(f.a, "CommentIcon", j.a),
				N = l.a.div("TitleContainer", j.a),
				_ = l.a.div("PostTitleContainer", j.a),
				T = l.a.wrapped(v.c, "PostTitle", j.a),
				L = l.a.wrapped(O.d, "PostTopMeta", j.a),
				k = l.a.wrapped(O.a, "MetaSeparator", j.a),
				M = Object(r.b)(() => Object(i.c)({
					comment: b.n,
					language: g.S,
					post: h.I,
					subredditOrProfile: h.U
				})),
				R = e => {
					const {
						language: t,
						post: s,
						subredditOrProfile: r
					} = e;
					if (r) return n.a.createElement(o.Fragment, null, n.a.createElement(k, null), n.a.createElement(L, {
						language: t,
						metaSeparatorClassName: j.a.postTopMetaMetaSeparator,
						post: s,
						showSub: !0,
						showTimestamp: !1,
						subredditOrProfile: r
					}))
				},
				A = e => {
					const {
						comment: t,
						profileName: s
					} = e;
					if (!t) return null;
					const o = s || t.author;
					return n.a.createElement(w, {
						"data-click-id": "user",
						to: "/user/".concat(o, "/")
					}, o)
				};
			t.a = Object(d.a)(M(Object(m.b)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: o,
					post: r
				} = e;
				return n.a.createElement(x.a, {
					className: Object(c.a)(y.a.compactPostStyles, j.a.overviewCommentPost, {
						[j.a.banned]: !!e.post.bannedBy,
						[j.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: o,
					eventFactory: s
				}, n.a.createElement(P, {
					style: {
						background: Object(u.e)(e)
					}
				}, n.a.createElement(I, null, n.a.createElement(S, null), n.a.createElement(N, null, A(e), n.a.createElement(a.c, null, " commented on "), n.a.createElement(_, null, n.a.createElement(T, {
					outboundLinkClassName: j.a.postTitleOutboundLink,
					post: r,
					size: v.b.Small,
					titleClassName: j.a.postTitleTitle
				})), R(e)))))
			})))
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.m.less": function(e, t, s) {
			e.exports = {
				border: "_1lhlKOukuHHzZKIlnXcHmQ",
				isFirst: "_2o6nV_ET0Jis6_EzEHx9K3",
				isLast: "_1C2mkyHj-MAuIndy8vJIU5"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				i = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			t.a = e => {
				var {
					isFirst: t,
					isLast: s
				} = e, o = d(e, ["isFirst", "isLast"]);
				return n.a.createElement("div", c({
					className: Object(r.a)(i.a.border, {
						[i.a.isFirst]: t,
						[i.a.isLast]: s
					})
				}, o))
			}
		},
		"./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less": function(e, t, s) {
			e.exports = {
				ExtraCommentsItemWrapper: "_3S95u6JHFnb4s3dszwei2-",
				extraCommentsItemWrapper: "_3S95u6JHFnb4s3dszwei2-",
				ExtraComments: "_35d97uauE52jtrUNWw8B4i",
				extraComments: "_35d97uauE52jtrUNWw8B4i",
				ExtraCommentsInteractive: "lQv8U3Ne_-BQ6fbAfxKIS",
				extraCommentsInteractive: "lQv8U3Ne_-BQ6fbAfxKIS"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less": function(e, t, s) {
			e.exports = {
				ProfileOwnerCommentWrapper: "_3CecFEZvC8MFSvLsfuVYUs",
				profileOwnerCommentWrapper: "_3CecFEZvC8MFSvLsfuVYUs",
				CommentContentWrapper: "hpOP1hjcTLrw1L2rfRtMP",
				commentContentWrapper: "hpOP1hjcTLrw1L2rfRtMP",
				Wrapper: "_2OpuabFjFVU3UZ4jcP58gJ",
				wrapper: "_2OpuabFjFVU3UZ4jcP58gJ",
				isFirst: "_3bYCCkSa6xxUYDEPgIa7w5",
				isLast: "_3TNQpNlZH2M4X50sedpaIG",
				isAwarded: "_2UgLKr67bDuCg6zs7UOCoN",
				isNightmodeOn: "_3ZqQTMfjWU3NV-dAfa8O9E",
				CommentSeparator: "_1mvcEtI04YyIVKsT-vUkiN",
				commentSeparator: "_1mvcEtI04YyIVKsT-vUkiN"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/lodash/times.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/constants/gold.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/components/CommentContainer/index.tsx"),
				u = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				g = s("./src/reddit/selectors/comments.ts"),
				x = s("./src/reddit/selectors/communityAwards.ts"),
				v = s("./src/reddit/selectors/experiments/goldAwardedCommentHighlight.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				C = s.n(f);
			const y = m.a.div("ProfileOwnerCommentWrapper", C.a),
				E = m.a.div("CommentContentWrapper", C.a),
				j = m.a.div("Wrapper", C.a),
				w = m.a.div("CommentSeparator", C.a),
				P = Object(i.b)(() => Object(c.c)({
					comment: (e, t) => Object(g.n)(e, t),
					isCommentHighlightExperiment: (e, t) => {
						if (!Object(v.a)(e)) return !1;
						const s = Object(g.n)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(x.a)(e, t);
							return s && s.coinPrice >= d.g
						})
					},
					isNightmodeOn: O.U
				}), e => ({
					openPost: t => e(Object(b.x)(t))
				}));
			class I extends a.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: s,
						openPost: o,
						isCommentHighlightExperiment: r,
						isFirst: i,
						isLast: c,
						isNightmodeOn: d,
						profileName: m,
						showModTools: u
					} = this.props, b = m === e.author ? S : N;
					return a.a.createElement(p.a, {
						comment: e,
						onClick: (e, t) => {
							o({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, a.a.createElement(j, {
						className: Object(l.a)({
							[C.a.isFirst]: i,
							[C.a.isLast]: c,
							[C.a.isAwarded]: r,
							[C.a.isNightmodeOn]: d
						})
					}, n()(s + 1, e => a.a.createElement(w, {
						key: e
					})), a.a.createElement(E, null, b(t, m, u))))
				}
			}
			const S = (e, t, s) => a.a.createElement(y, null, N(e, t, s, !0, !0)),
				N = function(e, t, s) {
					let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						n = arguments.length > 4 ? arguments[4] : void 0;
					return a.a.createElement(u.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: o,
						showModTools: s,
						isExpanded: !!n
					})
				};
			t.a = P(I)
		},
		"./src/reddit/components/OverviewConversationsPost/index.m.less": function(e, t, s) {
			e.exports = {
				BackgroundWrapper: "_3aoyec8unb9DkDxSv2XOMX",
				backgroundWrapper: "_3aoyec8unb9DkDxSv2XOMX",
				ClassicPost: "tAHXx8uORoJlmgLFgqJEP",
				classicPost: "tAHXx8uORoJlmgLFgqJEP",
				OverviewCommentPost: "_1jbHcnuv4MQLOov7BuufdI",
				overviewCommentPost: "_1jbHcnuv4MQLOov7BuufdI",
				OverviewLargePost: "_3DVTWNXPKtpQAozvDhjI89",
				overviewLargePost: "_3DVTWNXPKtpQAozvDhjI89",
				OverviewConversationsPost: "_3KGXodqw9Ht3MoBpe8_gzB",
				overviewConversationsPost: "_3KGXodqw9Ht3MoBpe8_gzB"
			}
		},
		"./src/reddit/components/Poll/ClosedPoll/index.m.less": function(e, t, s) {
			e.exports = {
				metaData: "_3NpICHyFK-vnQ5_1ZcNtNn",
				option: "_1YnhQ_-VBuRiYmNRfa798"
			}
		},
		"./src/reddit/components/Poll/OpenPoll/index.m.less": function(e, t, s) {
			e.exports = {
				buttonContainer: "_3vyz17dpfnySBJJyBF9IqH",
				loggedOutTooltip: "_3YsZUGQHAWfxmTN8wbFYPd",
				controlRow: "_1YKCRAHpaqTk8N5LBvZ9_A",
				loadingIcon: "_2RQF5_CKHRDPDOJ-TwwXFy",
				metaData: "_28wp7DzoykykevfZW56u3_",
				option: "_3nN8pAR2tWvzxcstONuzMH",
				optionRadio: "_1d_v-dIPu8uuwF0UTaQNmF",
				optionText: "_3grr_S6IK0w2iyC7Ocv5u9"
			}
		},
		"./src/reddit/components/Poll/ResultOption/index.m.less": function(e, t, s) {
			e.exports = {
				bar: "_2mybT6Ih7gVf5B6COa9kd2",
				"m-winning": "_1kOO45KEOZraWGZ-cUgKq-",
				mWinning: "_1kOO45KEOZraWGZ-cUgKq-",
				check: "_3CF-7jBH1KihljB9AqaU04",
				container: "_3uG88YeFdY0J8n4v07jkf9",
				count: "_1VDLlB8Ys3WO8XWSZfhomw",
				percent: "_1Ot3PH7267obvD1i_V2D00",
				hide: "_3G6ZB4S9YZ26E49tE8zLJQ",
				show: "iV9AWdqazd5c9IHXNEQXX",
				text: "_3PfYu2DtunAwYpv53tmvOb"
			}
		},
		"./src/reddit/components/Poll/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_3xG1v2CUdyxRoHrB7dgiFw"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			t.a = Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: a,
					post: c,
					redditStyle: p,
					theme: u
				} = e, b = m(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return n.a.createElement("div", l({
					className: Object(r.a)(d.a.backgroundWrapper, s),
					style: Object(i.c)(o, e),
					onClick: a
				}, b), t)
			})
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Translated/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				p = s("./src/reddit/components/PostFollow/index.m.less"),
				u = s.n(p);
			class b extends n.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: o
							},
							sendEvent: n
						} = this.props, r = !!o;
						n(e ? Object(m.o)({
							postId: s,
							isFollowed: r
						}) : Object(m.g)({
							postId: s,
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
						post: s
					} = this.props, o = this.state.isHovered, r = s.isFollowed;
					let a = r ? "collection.follow.followed" : "collection.follow.follow";
					return r && o && (a = "collection.follow.unfollow"), n.a.createElement("button", {
						className: Object(i.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, n.a.createElement(l.a, {
						msgId: a
					}))
				}
			}
			const h = Object(r.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(c.s)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(d.b)(b))
		},
		"./src/reddit/components/PostList/LoadMore.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3tBFh6Ty3gSaxW4gcm6hZ_",
				component: "_3tBFh6Ty3gSaxW4gcm6hZ_"
			}
		},
		"./src/reddit/components/PostList/LoadMore.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/PostList/Placeholder.tsx"),
				r = s("./src/reddit/components/PostList/LoadMore.m.less"),
				a = s.n(r);
			t.a = o.a.wrapped(n.a, "Component", a.a)
		},
		"./src/reddit/components/PostList/SomethingWrong.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/connectors/connectToLanguage.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/helpers/describeApiError/index.ts"),
				d = s("./src/reddit/components/PostList/index.m.less"),
				l = s.n(d);
			t.a = Object(a.a)(e => {
				const {
					language: t,
					onTryAgain: s,
					apiError: n
				} = e;
				let a = o.fbt._("Something went wrong while loading.", null, {
					hk: "1ijaef"
				});
				return n && (a = Object(c.a)({
					apiError: n,
					language: t,
					isLoggedOut: !1
				})), r.a.createElement("div", {
					className: l.a.somethingWrong
				}, r.a.createElement("div", {
					className: l.a.somethingWrongText
				}, a), s && r.a.createElement(i.f, {
					onClick: s
				}, o.fbt._("Try again", null, {
					hk: "3JPIhw"
				})))
			})
		},
		"./src/reddit/components/PostList/index.m.less": function(e, t, s) {
			e.exports = {
				placeholder: "FohHGMokxXLkon1aacMoi",
				seeMoreButton: "_1Uj2L1UhJuirkaXINcf9S8",
				seeMorePostsText: "_2DB_2VI3a-y6nk57R2aWVo",
				somethingWrong: "zfoxmi0VvZvMZu1rHVbMX",
				somethingWrongText: "Ii7DEkcMDxQHElTHeeaci",
				postList: "rpBJOHq2PR60pnwJlUyP0",
				truncatedPostList: "QBfRw7Rj8UkxybFpX-USO",
				SeeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				seeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				ArrowRight: "wakXAw7uCIqmSRV84RKMW",
				arrowRight: "wakXAw7uCIqmSRV84RKMW"
			}
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return q
			})), s.d(t, "a", (function() {
				return Q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/history/esm/history.js"),
				n = s("./node_modules/lodash/debounce.js"),
				r = s.n(n),
				a = s("./node_modules/lodash/last.js"),
				i = s.n(a),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-dom/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/fastdom/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				g = s("./src/lib/opener/index.ts"),
				x = s("./src/lib/sentry/index.ts"),
				v = s("./src/reddit/components/PostList/LoadMore.tsx"),
				O = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				f = s("./src/reddit/components/Scroller/Simple.tsx"),
				C = s("./src/reddit/components/Translated/index.tsx"),
				y = s("./src/reddit/constants/adEvents.ts"),
				E = s("./src/reddit/constants/componentSizes.ts"),
				j = s("./src/reddit/constants/postLayout.ts"),
				w = s("./src/reddit/controls/InternalLink/index.tsx"),
				P = s("./src/reddit/helpers/getClickInfo.ts"),
				I = s("./src/reddit/helpers/pixels.ts"),
				S = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				N = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				_ = s("./src/reddit/models/Media/index.ts"),
				T = s("./src/reddit/helpers/brandSafety/index.ts"),
				L = s("./src/lib/LRUCache/index.ts"),
				k = s("./src/telemetry/index.ts"),
				M = s("./src/telemetry/models/Timer.ts"),
				R = s("./src/reddit/components/PostList/index.m.less"),
				A = s.n(R),
				B = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
					}
					return s
				};
			const F = 500,
				D = new L.a(F),
				H = new L.a(F),
				V = new L.a(F),
				W = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				U = h.a.div("SeeMore", A.a),
				G = h.a.wrapped(N.a, "ArrowRight", A.a),
				z = (e, t, s, o, n, r, a, i) => {
					const c = s ? "last-".concat(o, "-").concat(n) : "",
						d = "entered-".concat(e, "-").concat(t, "-").concat(c, "-").concat(r);
					let l = D.get(d);
					return void 0 === l && (l = () => {
						s && a.onBottomViewed(o, n), a.trackOnPostEnteredViewport(e, t, i)
					}, D.set(d, l)), l
				},
				K = (e, t, s, o) => {
					const n = "left-".concat(e, "-").concat(t);
					let r = H.get(n);
					return void 0 === r && (r = n => {
						s.trackOnPostExitedViewport(e, t, n, o)
					}, H.set(n, r)), r
				},
				q = (e, t) => {
					const s = "click-".concat(e);
					let o = V.get(s);
					return void 0 === o && (o = (e, s) => {
						s.isSponsored && Object(I.a)(s.events, y.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(g.d)(s.source.outboundUrl, g.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(P.a)(e)
						})
					}, V.set(s, o)), o
				},
				Z = (e, t) => {
					const s = [...e];
					return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
						s.splice(e, 0, t[e])
					}), s
				};
			class Q extends d.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new L.a(F), this.updateScrollerRef = e => {
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
							postsById: s,
							subredditsById: o
						} = this.props, n = t(), r = [];
						n.forEach(e => r.push(e.id));
						const a = r.map(e => s[e]).filter(Boolean),
							i = a.map(e => o[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(T.a)(a, i))
					}, u.d, {
						leading: !0
					})
				}
				componentWillMount() {
					this.timerId && k.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = k.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = k.c.end(this.timerId);
						setTimeout(() => Object(k.b)(u.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && k.c.cancel(this.timerId), e.postIds.length && (this.timerId = k.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (b.a.read(() => this.checkAndSendScreenview()), this.timerId && k.c.has(this.timerId)) {
						const e = k.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(k.b)(u.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && k.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
						viewportDataLoaded: s
					} = this.props;
					return k.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const o = k.c.end(e);
					setTimeout(() => {
						s(t(o, M.TimerType.InApp))
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
					const t = this.props,
						{
							postsById: s
						} = t,
						o = B(t, ["postsById"]),
						{
							postsById: n
						} = e,
						r = B(e, ["postsById"]),
						a = Object.keys(o),
						i = Object.keys(r);
					if (i.length !== a.length) return !0;
					if (i.some(e => o[e] !== r[e])) return !0;
					if (s === n) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: t
						} = this.props;
						return this.props.postIds.some((o, r) => {
							const a = 0 === r;
							return t({
								isFirstPost: a,
								layout: e,
								post: s[o]
							}) !== t({
								isFirstPost: a,
								layout: e,
								post: n[o]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, o) {
					const {
						currentProfileName: n,
						isCommentPermalink: r,
						isCommentsPage: a,
						isFrontpage: i,
						isProfilePostListing: c,
						listingKey: l,
						listingName: m,
						pageLayer: p,
						pageReferrer: b,
						postClickEvent: h,
						redditStyle: g
					} = this.props, v = 0 === t, O = s ? "last-index" : "", f = "post-".concat(o, "-").concat(e, "-").concat(t, "-").concat(O, "-").concat(m, "-").concat(l, "-").concat(b);
					let C;
					if (void 0 === (C = this.scrollChildCache.get(f))) {
						const {
							inSubredditOrProfile: O,
							postsById: y
						} = this.props, E = y[e], w = E.crosspostRootId && y[E.crosspostRootId] ? y[E.crosspostRootId] : E;
						E.crosspostRootId && !y[E.crosspostRootId] && x.c.withScope(e => {
							e.setExtra("errorType", u.p.API), e.setExtra("description", "Post ".concat(E.id, " is crosspost of ").concat(E.crosspostRootId, ", but ") + "".concat(E.crosspostRootId, " details are missing in the state")), x.c.captureMessage("Crosspost parent details are missing")
						});
						const P = this.props.postComponentForLayout({
								isCrosspost: !!E.crosspostRootId,
								isFirstPost: v,
								layout: o,
								post: w
							}),
							I = "post-list-item-[layout: ".concat(o, "]-[postId: ").concat(e, "]"),
							N = z(e, o, s, l, m, b, this.props, t),
							T = K(e, o, this.props, t),
							L = q(e, this.props),
							k = w.media && w.media.type === _.n.EMBED ? w.media.provider : null;
						C = {
							estHeight: Object(S.c)(E, o),
							id: e,
							isFocusable: !(!w.media || o !== j.g.Large) && (_.d.has(w.media.type) && (!k || !_.q.has(k)) && !w.isSpoiler && !w.isNSFW),
							trackOnEnteredViewport: N,
							trackOnExitedViewport: T,
							render: t => {
								let {
									className: o,
									height: u,
									width: b,
									remeasure: x,
									setScrollerChildRef: f,
									shouldLoadInitially: C
								} = t;
								return d.a.createElement(P, {
									className: o,
									currentProfileName: n,
									key: I,
									availableWidth: b,
									eventFactory: h,
									first: v,
									forceLoadMedia: C,
									inSubredditOrProfile: O,
									isCommentPermalink: r,
									isCommentsPage: a,
									isFrontpage: i,
									isProfilePostListing: c,
									listingKey: l,
									listingName: m,
									pageLayer: p,
									last: s,
									onClickPost: L,
									onSizeChanged: x,
									postId: e,
									redditStyle: g,
									sendEvent: this.props.sendEvent,
									scrollerItemRef: f
								})
							}
						}, this.scrollChildCache.set(f, C)
					}
					return C
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return d.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: o,
						onTryAgain: n,
						postListPlaceholderComponent: r
					} = this.props;
					if (s) return;
					const a = r;
					return d.a.createElement("div", {
						className: A.a.placeholder
					}, d.a.createElement(a, {
						className: t,
						isLoading: !e,
						layout: o
					}), !!e && d.a.createElement(O.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: o,
						loadMoreClassName: n,
						onLoadMore: r
					} = this.props;
					if (!s) return d.a.createElement("div", {
						className: A.a.placeholder
					}, d.a.createElement(v.a, {
						className: n,
						isLoading: !!t,
						layout: o,
						countOverride: W[o]
					}), !!e && d.a.createElement(O.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: n,
						isTruncated: r,
						layout: a,
						location: i,
						loadMore: l,
						postIds: b,
						onLoadMore: h
					} = this.props;
					let g = b.map((e, t, s) => {
						const o = t === b.length - 1;
						return this.scrollChildForPost(e, t, o, a)
					});
					n && (g = Z(g, n));
					const x = this.props.measureScrollFPS ? "post-listings-".concat(a) : void 0,
						v = i ? Object(o.e)(i) : null,
						O = v || r;
					return d.a.createElement(c.Fragment, null, d.a.createElement(f.b, {
						innerRef: this.updateScrollerRef,
						className: O ? A.a.truncatedPostList : Object(p.a)(A.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: l && l.token ? l.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: h,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: x,
						viewportTopPadding: E.g
					}, g), v && d.a.createElement(U, {
						className: A.a.seeMoreButton
					}, d.a.createElement(w.a, {
						className: A.a.seeMorePostsText,
						to: Object(m.a)(v, {
							type: u.Kb.Posts
						})
					}, d.a.createElement(C.a, {
						msgId: "search.seeMorePosts"
					}), d.a.createElement(G, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			Q.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: d.a.Fragment
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, s) {
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
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "f", (function() {
				return h
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "h", (function() {
				return x
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return f
			}));
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				r = s("./src/reddit/controls/Dropdown/Row.tsx"),
				a = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				i = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				c = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				d = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				l = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				m = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				p = s.n(m);
			const u = o.a.wrapped(a.a, "Icon", p.a),
				b = o.a.wrapped(i.a, "Icon", p.a),
				h = o.a.wrapped(c.a, "Icon", p.a),
				g = o.a.wrapped(d.a, "Icon", p.a),
				x = o.a.wrapped(l.a, "Icon", p.a),
				v = o.a.wrapped(n.b, "CheckboxMenuItem", p.a),
				O = o.a.wrapped(r.b, "DropdownRow", p.a),
				f = o.a.div("ListContainer", p.a)
		},
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/PostLeftRail/index.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				i = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
				d = s("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: l = !1,
					toggleCheckbox: m = (() => {}),
					flairStyleTemplate: p,
					redditStyle: u
				} = e, b = "upvote-button-".concat(t.id);
				return n.a.createElement(r.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(d.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: u
				}, o && n.a.createElement(i.a, {
					isCheckboxSelected: l,
					toggleCheckbox: m
				}), n.a.createElement(a.a, {
					flairStyleTemplate: p,
					model: t,
					onVoteClick: s,
					redditStyle: u,
					upvoteTooltipId: b
				}))
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				i = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				m = s("./src/reddit/components/SubredditIcon/index.tsx"),
				p = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = s("./src/reddit/models/Media/index.ts"),
				O = s("./src/reddit/models/Subreddit/index.ts"),
				f = s("./src/reddit/components/PostTopLine/index.m.less"),
				C = s.n(f);
			const y = s("./src/lib/lessComponent.tsx").a.div("Container", C.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					hideNSFWPref: o,
					iconClassName: f,
					inSubredditOrProfile: E,
					isCurrentUserProfilePost: j,
					isCommentsPage: w,
					isCompactPinnedPost: P,
					isOverlay: I,
					language: S,
					post: N,
					publicAwardersEnabled: _,
					shouldShowSubscribeButton: T,
					showCornerOutboundLink: L,
					showSubreddit: k,
					showSubredditIcon: M,
					subredditOrProfile: R
				} = e, A = w && _;
				return n.a.createElement(y, {
					className: t
				}, k && R && n.a.createElement("div", {
					className: C.a.subredditIconWrapper
				}, n.a.createElement(p.a, {
					"data-click-id": "subreddit",
					to: R.url
				}, M && n.a.createElement(m.b, {
					className: Object(r.a)(C.a.subredditIcon, f),
					shouldHideNsfwIcon: o,
					subredditOrProfile: R
				}))), n.a.createElement("div", {
					className: C.a.everythingElseWrapper
				}, k && n.a.createElement(c.h, {
					type: N.belongsTo.type,
					id: N.belongsTo.id
				}), n.a.createElement(l.d, {
					className: C.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: I ? l.c.Lightbox : void 0,
					language: S,
					post: N,
					showSub: k,
					subredditOrProfile: R
				}), n.a.createElement(d.a, {
					className: C.a.postBadges,
					displayText: R ? R.displayText : null,
					inSubredditOrProfile: E,
					language: S,
					isCompactPinnedPost: P,
					post: N,
					tooltipType: I ? l.c.Lightbox : void 0
				}), R && n.a.createElement(i.a, {
					className: C.a.donationAmount,
					contentId: N.id,
					subredditId: R.id
				}), n.a.createElement(a.a, {
					forceShowAllAwards: w,
					isOverlay: I,
					showAwarders: A,
					tooltipType: I ? l.c.Lightbox : void 0,
					thing: N
				})), R && k && T && !j && n.a.createElement(u.a, {
					getEventFactory: e => Object(g.f)(N.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: R.name,
						type: Object(O.e)(R) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: N.id
				}, "Subscribe"), L && n.a.createElement(h.a, {
					className: C.a.OutboundLink,
					isSponsored: N.isSponsored,
					href: Object(v.A)(e.post),
					source: N.source
				}, n.a.createElement(x.a, {
					className: C.a.outboundLinkIcon
				})))
			}
		},
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/lodash/last.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-dom/index.js"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/opener/index.ts"),
				l = s("./src/reddit/constants/adEvents.ts"),
				m = s("./src/reddit/components/PostList/LoadMore.tsx"),
				p = s("./src/reddit/components/PostList/Placeholder.tsx"),
				u = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				b = s("./src/reddit/components/Scroller/Simple.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/helpers/getClickInfo.ts"),
				x = s("./src/reddit/helpers/pixels.ts"),
				v = s("./src/reddit/helpers/isComment.ts"),
				O = s("./src/lib/LRUCache/index.ts"),
				f = s("./src/telemetry/index.ts"),
				C = s("./src/telemetry/models/Timer.ts"),
				y = s("./src/reddit/components/PostList/index.m.less"),
				E = s.n(y);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var w = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const P = 500,
				I = new O.a(P),
				S = new O.a(P),
				N = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				_ = (e, t, s, o, n, r) => {
					const a = s ? "last-".concat(o, "-").concat(n) : "",
						i = "entered-".concat(e, "-").concat(t, "-").concat(a);
					let c = I.get(i);
					return void 0 === c && (c = () => {
						s && r.onBottomViewed(o, n), r.trackOnPostEnteredViewport(e, t)
					}, I.set(i, c)), c
				},
				T = (e, t) => {
					const s = "click-".concat(e);
					let o = S.get(s);
					return void 0 === o && (o = (e, s) => {
						s.isSponsored && Object(x.a)(s.events, l.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(d.d)(s.source.outboundUrl, d.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(g.a)(e)
						})
					}, S.set(s, o)), o
				};
			class L extends a.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new O.a(P), this.updateScrollerRef = e => {
						const t = e && Object(i.findDOMNode)(e);
						this.scrollerRef = t instanceof Element ? t : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				componentWillMount() {
					this.timerId && f.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = f.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = f.c.end(this.timerId);
						setTimeout(() => Object(f.b)(c.l.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && f.c.cancel(this.timerId), e.itemIds.length && (this.timerId = f.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && f.c.has(this.timerId)) {
						const e = f.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(f.b)(c.l.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && f.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && n()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return f.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const o = f.c.end(e);
					setTimeout(() => s(t(o, C.TimerType.InApp)), 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t
					} = this.props;
					return Boolean(e) || !1 !== t
				}
				hasPosts() {
					return this.props.itemIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						itemIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const t = this.props,
						{
							itemIds: s
						} = t,
						o = w(t, ["itemIds"]),
						{
							itemIds: n
						} = e,
						r = w(e, ["itemIds"]),
						a = Object.keys(o),
						i = Object.keys(r);
					return i.length !== a.length || !!i.some(e => o[e] !== r[e])
				}
				scrollChildForItem(e, t, s, o, n, r) {
					const {
						listingKey: i,
						listingName: c,
						postClickEvent: d
					} = this.props, l = s ? "last-index" : "", m = "post-".concat(r, "-").concat(e, "-").concat(t, "-").concat(l, "-").concat(c, "-").concat(i);
					let p;
					if (void 0 === (p = this.scrollChildCache.get(m))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: l
						} = this.props, u = l[e], b = "overview-chrono-list-item-[layout: ".concat(r, "]-[itemId: ").concat(e, "]"), h = _(u, r, s, i, c, this.props), g = {
							key: b,
							eventFactory: d,
							inSubredditOrProfile: t,
							isFirstInCommentList: o,
							isLastInCommentList: n,
							isOverlay: !1,
							itemId: e,
							last: s,
							layout: r,
							onClickPost: T(e, this.props),
							postId: u
						}, x = this.props.itemComponent;
						p = {
							estHeight: this.props.estimateItemHeight(e, r, o),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: h,
							render: e => a.a.createElement(x, j({}, g, e))
						}, this.scrollChildCache.set(m, p)
					}
					return p
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return a.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						layout: s,
						onTryAgain: o
					} = this.props;
					return a.a.createElement("div", {
						className: E.a.placeholder
					}, a.a.createElement(p.a, {
						className: t,
						isLoading: !e,
						layout: s
					}), !!e && a.a.createElement(u.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						layout: s,
						onLoadMore: o
					} = this.props;
					return a.a.createElement("div", {
						className: E.a.placeholder
					}, a.a.createElement(m.a, {
						isLoading: !!t,
						layout: s,
						countOverride: N[s]
					}), !!e && a.a.createElement(u.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderList() {
					const {
						commentsById: e,
						layout: t,
						loadMore: s,
						itemIds: o,
						onLoadMore: n
					} = this.props, r = o.map((s, n, r) => {
						const a = n === o.length - 1,
							i = n && o[n - 1],
							c = !a && o[n + 1],
							d = !!Object(v.a)(s) && (!i || !Object(v.a)(i) || e[i].postId !== e[s].postId),
							l = !!Object(v.a)(s) && (!c || !Object(v.a)(c) || e[c].postId !== e[s].postId);
						return this.scrollChildForItem(s, n, a, d, l, t)
					});
					return a.a.createElement("div", null, a.a.createElement(b.b, {
						innerRef: this.updateScrollerRef,
						className: this.props.className,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						enableElementHiding: !0,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: s && s.token ? s.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: n,
						viewportTopPadding: h.g + h.t
					}, r), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = L
		},
		"./src/reddit/components/ProfileNavMenu/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2vH__bwuub4wzWRqcvhh3m",
				dropdown: "_3ulncTe6l8jRF_TM6HZZFk",
				mainLink: "_1JNzvBgvzSnX27gUBKqqmJ",
				isActive: "Zvl1svdkcyUlRhf5RHGKc",
				hideOnNarrow: "kp9WWKDE0A0U0u7XOOEQP",
				dropdownLink: "_3FXf9zUWKXtpapv4rBHh1L",
				showOnNarrow: "_2cJiWyA-Vif_pfBPZVATnV",
				isGildedExperiment: "_2NuuIeE2x84nNR2055YSCj",
				overflowMenuButton: "_2glPIthm-tV6ZxKaznhb72"
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/config.ts"),
				m = s("./src/higherOrderComponents/asTooltip.tsx"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				g = s("./src/reddit/constants/componentSizes.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/controls/Dropdown/index.tsx"),
				O = s("./src/reddit/controls/InternalLink/index.tsx"),
				f = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				C = s("./src/reddit/models/Profile/index.ts"),
				y = s("./src/reddit/featureFlags/index.ts"),
				E = s("./src/reddit/selectors/experiments/goldProfileGildedAwards.ts"),
				j = s("./src/reddit/selectors/tooltip.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/selectors/userPrefs.ts"),
				I = s("./src/reddit/i18n/utils.ts"),
				S = s("./src/reddit/components/ProfileNavMenu/index.m.less"),
				N = s.n(S);
			const _ = Object(x.t)({
					routeName: x.T,
					privateListingType: x.i
				}),
				T = Object(c.c)({
					isDropdownMenuOpen: e => Object(j.a)(e) === k,
					isOwnProfile: (e, t) => Object(w.M)(e, t.profileName),
					language: w.S,
					isInGoldProfileGildedExperiment: E.a,
					isSnoovatar30Enabled: y.d.snoovatar30,
					isSubscriptionsPinned: P.b
				}),
				L = Object(m.a)(v.a),
				k = "profile-nav-menu-tooltip";
			t.a = _(Object(a.b)(T, e => ({
				toggleTooltip: t => e(Object(b.g)({
					tooltipId: t
				}))
			}))(e => {
				let {
					isDropdownMenuOpen: t,
					isOwnProfile: s,
					language: o,
					privateListingType: n,
					profileName: a,
					routeName: i,
					toggleTooltip: c,
					isInGoldProfileGildedExperiment: d,
					isSnoovatar30Enabled: l,
					isSubscriptionsPinned: m
				} = e;
				return r.a.createElement("div", {
					className: Object(p.a)(N.a.container, {
						[N.a.isGildedExperiment]: d
					})
				}, r.a.createElement(h.a, {
					bladeOpen: !1,
					offsetLeft: m ? g.v : 0,
					render: () => r.a.createElement(r.a.Fragment, null, A({
						language: o,
						profileName: a,
						isOwnProfile: s,
						routeName: i,
						privateListingType: n,
						isSnoovatar30Enabled: l,
						isInGoldProfileGildedExperiment: d
					}).map(e => r.a.createElement(M, e)), r.a.createElement("button", {
						className: Object(p.a)(N.a.mainLink, N.a.overflowMenuButton),
						id: k,
						onClick: () => c(k)
					}, r.a.createElement(f.a, null)), r.a.createElement(L, {
						className: Object(p.a)(N.a.dropdown, {
							[N.a.isGildedExperiment]: d
						}),
						isOpen: t,
						tooltipId: k
					}, B({
						language: o,
						profileName: a,
						isOwnProfile: s,
						routeName: i,
						privateListingType: n,
						isInGoldProfileGildedExperiment: d
					}).map(e => r.a.createElement(R, e))))
				}))
			}));
			const M = e => {
					let {
						hideOnNarrow: t,
						isActive: s,
						text: o,
						url: n,
						internal: a
					} = e;
					return a ? r.a.createElement(O.a, {
						className: Object(p.a)(N.a.mainLink, {
							[N.a.hideOnNarrow]: !!t,
							[N.a.isActive]: s
						}),
						to: n
					}, o) : r.a.createElement("a", {
						className: Object(p.a)(N.a.mainLink, {
							[N.a.hideOnNarrow]: !!t,
							[N.a.isActive]: s
						}),
						href: n
					}, o)
				},
				R = e => {
					let {
						isActive: t,
						internal: s,
						key: o,
						url: n,
						showOnNarrow: a,
						text: c
					} = e;
					return s ? r.a.createElement(i.a, {
						className: Object(p.a)(N.a.dropdownLink, {
							[N.a.isActive]: t,
							[N.a.showOnNarrow]: !!a
						}),
						to: n,
						key: o,
						rel: "nofollow",
						role: "listitem"
					}, c) : r.a.createElement("a", {
						className: Object(p.a)(N.a.dropdownLink, {
							[N.a.showOnNarrow]: !!a
						}),
						href: n,
						key: o,
						rel: "nofollow",
						role: "listitem",
						target: "_blank"
					}, c)
				},
				A = e => {
					let {
						language: t,
						profileName: s,
						isOwnProfile: n,
						routeName: r,
						privateListingType: a,
						isSnoovatar30Enabled: i,
						isInGoldProfileGildedExperiment: c
					} = e;
					const l = n ? [{
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && a === C.a.Saved,
						key: "profile.saved",
						text: Object(d.a)(t, "profile.sections.saved"),
						url: "/user/".concat(s, "/saved/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && a === C.a.Hidden,
						key: "profile.hidden",
						text: Object(d.a)(t, "profile.sections.hidden"),
						url: "/user/".concat(s, "/hidden/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && a === C.a.Upvoted,
						key: "profile.upvoted",
						text: Object(d.a)(t, "profile.sections.upvoted"),
						url: "/user/".concat(s, "/upvoted/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && a === C.a.Downvoted,
						key: "profile.downvoted",
						text: Object(d.a)(t, "profile.sections.downvoted"),
						url: "/user/".concat(s, "/downvoted/")
					}] : [];
					n && c && (l.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && a === C.a.ReceivedGildings,
						key: "profile.receiverGildings",
						text: o.fbt._("Awards received", null, {
							hk: "10CLzb"
						}),
						url: "/user/".concat(s, "/gilded/")
					}), l.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && a === C.a.GivenGildings,
						key: "profile.receiverGildings",
						text: o.fbt._("Awards given", null, {
							hk: "JzMR1"
						}),
						url: "/user/".concat(s, "/gilded/given/")
					}));
					const m = i ? [{
						internal: !0,
						isActive: r === u.yb.PROFILE_SNOOBUILDER,
						key: "profile.snoobuilder",
						text: Object(I.c)("Snoobuilder"),
						url: "/user/".concat(s, "/snoo/")
					}] : [];
					return [{
						internal: !0,
						isActive: r === u.yb.PROFILE_OVERVIEW,
						key: "profile.overview",
						text: Object(d.a)(t, "profile.overview"),
						url: "/user/".concat(s, "/")
					}, {
						internal: !0,
						isActive: r === u.yb.PROFILE_POSTS,
						key: "profile.posts",
						text: Object(d.a)(t, "profile.posts"),
						url: "/user/".concat(s, "/posts/")
					}, {
						internal: !0,
						isActive: r === u.yb.PROFILE_COMMENTS,
						key: "profile.comments",
						text: Object(d.a)(t, "profile.comments"),
						url: "/user/".concat(s, "/comments/")
					}, ...m, ...l]
				},
				B = e => {
					let {
						language: t,
						profileName: s,
						isOwnProfile: n,
						routeName: r,
						privateListingType: a,
						isInGoldProfileGildedExperiment: i
					} = e;
					const c = n ? [{
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && a === C.a.Hidden,
						key: "profile.hidden",
						text: Object(d.a)(t, "profile.sections.hidden"),
						url: "/user/".concat(s, "/hidden/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && a === C.a.Upvoted,
						key: "profile.upvoted",
						text: Object(d.a)(t, "profile.sections.upvoted"),
						url: "/user/".concat(s, "/upvoted/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && a === C.a.Downvoted,
						key: "profile.downvoted",
						text: Object(d.a)(t, "profile.sections.downvoted"),
						url: "/user/".concat(s, "/downvoted/")
					}] : [];
					return n && i ? (c.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && a === C.a.ReceivedGildings,
						key: "profile.receiverGildings",
						text: o.fbt._("Awards received", null, {
							hk: "10CLzb"
						}),
						url: "/user/".concat(s, "/gilded/")
					}), c.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.yb.PROFILE_PRIVATE && a === C.a.GivenGildings,
						key: "profile.receiverGildings",
						text: o.fbt._("Awards given", null, {
							hk: "JzMR1"
						}),
						url: "/user/".concat(s, "/gilded/given/")
					}), c) : [...c, {
						internal: !1,
						isActive: !1,
						key: "profile.gilded_legacy",
						text: Object(d.a)(t, "profile.sections.gilded"),
						url: "".concat(l.a.redditUrl, "/user/").concat(s, "/gilded/")
					}]
				}
		},
		"./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less": function(e, t, s) {
			e.exports = {
				container: "_1j2O3iNM1HoiXK7B2dmp7b",
				description: "_1izt0pKGHoMq6qSvK4cAIn",
				gotIt: "_3uIlo4RbXf8gjMYw0yP_Jj"
			}
		},
		"./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3aof1UDvKACEvKW4EMZ299",
				pin: "_2KRDWSbw-bvKgY9GSzhGAx",
				title: "_3mWek_rCoNZ3KHXxqDuM88"
			}
		},
		"./src/reddit/components/ProfilePinnedPosts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_274hVfCVJjK6-eGJKLQjgQ",
				miniCardPost: "ieyMhI0VqyYOPt1Za-FW5",
				item: "fuCmx3adjKY3tXA4Zfx2p",
				education: "_1h3IXJoJFpHbyec1FkB4MV",
				title: "jY9rAXGpPzcDUv1AnLGAD"
			}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/components/SidebarContainer/index.tsx"),
				i = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				c = s("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				d = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				l = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				m = s("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				p = s("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				u = s("./src/reddit/constants/posts.ts");
			const b = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ProfileIdCard").then(s.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				h = e => r.a.createElement(a.a, {
					className: e.className
				}, r.a.createElement(b, {
					profileName: e.profileName,
					isOverlay: e.isOverlay
				}), r.a.createElement(p.a, {
					subredditOrProfile: {
						name: e.profileName,
						type: u.a.PROFILE
					}
				}), r.a.createElement(i.a, {
					profileName: e.profileName
				}), r.a.createElement(c.a, {
					profileName: e.profileName
				}), r.a.createElement(d.a, null, r.a.createElement(m.a, {
					profileName: e.profileName
				})), r.a.createElement(l.a, {
					hideBackToTop: e.hideBackToTop
				}));
			h.defaultProps = {
				isOverlay: !1
			}, t.a = h
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/SidebarContainer/index.m.less"),
				r = s.n(n);
			t.a = o.a.div("container", r.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.m.less": function(e, t, s) {
			e.exports = {
				TertiaryButton: "_1rpFWd0ROODHctwG096Da",
				tertiaryButton: "_1rpFWd0ROODHctwG096Da"
			}
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/lodash/take.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				b = s("./src/reddit/layout/row/Inline/index.tsx"),
				h = s("./src/reddit/layout/row/RightAlign/index.tsx"),
				g = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/SidebarExpandableList/index.m.less"),
				v = s.n(x),
				O = s("./src/lib/lessComponent.tsx");
			const f = 10,
				C = O.a.wrapped(p.n, "TertiaryButton", v.a);
			class y extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}, this.onButtonClick = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: s
						} = this.props;
						e || this.setState({
							expanded: !0
						}), e && !t && this.setState({
							expanded: !1
						}), t && s && s()
					}, this.renderToggleButton = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							language: s,
							onLoadMore: o,
							pending: n
						} = this.props, r = !e || t && o ? Object(d.a)(s, "sidebar.widgets.expandableList.viewMore") : Object(d.a)(s, "sidebar.widgets.expandableList.viewLess");
						return a.a.createElement(C, {
							onClick: this.onButtonClick
						}, n ? a.a.createElement(u.a, {
							sizePx: f
						}) : r)
					}
				}
				render() {
					const {
						className: e,
						hasMoreItems: t,
						headerButton: s,
						items: o,
						minimizedLength: r,
						renderItem: i,
						title: c
					} = this.props, {
						expanded: d
					} = this.state, l = o.length > r || t, p = (!l || d ? o : n()(o, r)).map(e => i({
						item: e
					}));
					return a.a.createElement(m.a, {
						className: e,
						headerButton: s,
						title: c
					}, p, a.a.createElement(b.a, null, a.a.createElement(h.a, null, l && this.renderToggleButton())))
				}
			}
			y.defaultProps = {
				minimizedLength: l.Db
			};
			const E = Object(c.c)({
				language: g.S
			});
			t.a = Object(i.b)(E)(y)
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/actions/profile/index.ts"),
				d = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				m = s("./src/reddit/models/User/index.ts"),
				p = s("./src/reddit/selectors/profile.ts"),
				u = s("./src/reddit/selectors/subscriptions.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				g = s.n(h);
			const x = Object(a.c)({
					currentUser: b.i,
					language: b.S,
					moderated: p.n,
					subscriptions: u.h,
					hasMoreModerated: p.d,
					loadMorePending: p.a
				}),
				v = Object(r.b)(x, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(c.c)(t.profileName))
				}), (e, t, s) => Object.assign({}, s, e, t, {
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				O = e => {
					let {
						item: t
					} = e;
					return n.a.createElement(l.a, {
						id: t.id,
						iconUrl: t.iconUrl,
						isNSFW: t.isNSFW,
						key: "".concat(t.type, "-").concat(t.name),
						name: t.name,
						subscribers: t.subscribers,
						isSubscribed: t.isSubscribed,
						widget: void 0,
						sendEvent: () => void 0,
						type: t.type
					})
				};
			t.a = v(e => {
				const {
					currentUser: t,
					language: s,
					moderated: o,
					profileName: r,
					subscriptions: a,
					hasMoreModerated: c,
					onLoadMore: l,
					loadMorePending: p
				} = e;
				if (0 === o.length) return null;
				const u = t && Object(m.f)(t).toLowerCase() === r.toLowerCase() ? Object(i.a)(s, "profile.moderatedSubredditsYours") : Object(i.a)(s, "profile.moderatedSubreddits"),
					b = function(e, t, s) {
						return e.map(e => ({
							name: e.name,
							subscribers: e.subscribers,
							iconUrl: e.icon.url,
							isNSFW: e.isNSFW,
							isSubscribed: t.has(e.id),
							type: "user" === e.type ? "profile" : "subreddit",
							language: s,
							sendEvent: () => void 0
						}))
					}(o, new Set(a), s);
				return n.a.createElement(d.a, {
					className: g.a.container,
					title: u,
					items: b,
					renderItem: O,
					hasMoreItems: c,
					onLoadMore: l,
					pending: p
				})
			})
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, s) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/profile/index.ts"),
				d = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = s("./src/reddit/i18n/components.tsx"),
				p = s("./src/reddit/i18n/utils.ts"),
				u = s("./src/reddit/selectors/profile.ts"),
				b = s("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				h = s.n(b);
			const g = Object(i.c)({
					hasMoreMultireddits: u.e,
					loadMorePending: u.b,
					multireddits: u.o
				}),
				x = Object(r.b)(g, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(c.e)(t.profileName, !0))
				}), (e, t, s) => Object.assign({}, s, e, t, {
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				v = e => {
					let {
						item: t
					} = e;
					return n.a.createElement("div", {
						className: h.a.listItem,
						key: t.url
					}, n.a.createElement("img", {
						className: h.a.icon,
						src: t.icon
					}), n.a.createElement("div", {
						className: h.a.description
					}, n.a.createElement(a.a, {
						className: h.a.name,
						to: t.url
					}, t.displayText), n.a.createElement("div", {
						className: h.a.meta
					}, n.a.createElement(m.c, null, n.a.createElement(m.b, {
						name: "subredditCount"
					}, t.subredditCount), " ", n.a.createElement(m.a, {
						name: "communities",
						singular: "community",
						plural: "communities",
						count: t.subredditCount
					})))))
				};
			t.a = x(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: s,
					multireddits: o,
					onLoadMore: r,
					profileName: a
				} = e;
				return o && o.length ? n.a.createElement(l.a, null, n.a.createElement(d.a, {
					hasMoreItems: t,
					items: o,
					onLoadMore: r,
					pending: s,
					renderItem: v,
					title: Object(p.c)("Public custom feeds by u/".concat(Object(p.b)("username", a)))
				})) : null
			})
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				n = s.n(o),
				r = s("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", n.a)
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, s) {
			e.exports = {
				TrophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				trophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				TrophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				trophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				TrophyItem: "QY_PhyoOHbRd-_92ivr-m",
				trophyItem: "QY_PhyoOHbRd-_92ivr-m",
				TrophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				trophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				Description: "_3n5-aYyk15dtyt-boqlDrq",
				description: "_3n5-aYyk15dtyt-boqlDrq"
			}
		},
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				c = s("./src/reddit/controls/OutboundLink/index.tsx"),
				d = s("./src/reddit/controls/Typography/index.tsx"),
				l = s("./src/reddit/i18n/utils.ts"),
				m = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = s("./src/reddit/selectors/index.ts"),
				u = s("./src/reddit/selectors/profile.ts"),
				b = s("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				h = s.n(b),
				g = s("./src/lib/lessComponent.tsx");
			const x = Object(a.c)({
				trophyCase: (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(u.r)(e, Object(u.m)(e, s))
				}
			}, p.a);
			t.a = Object(r.b)(x)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : n.a.createElement(i.a, {
					title: Object(l.c)("Trophy Case (".concat(Object(l.b)("trophyCount", t.length), ")")),
					items: t,
					renderItem: E
				})
			});
			const v = g.a.wrapped(m.a, "TrophyItem", h.a),
				O = g.a.div("TrophyIcon", h.a),
				f = g.a.h5("TrophyName", h.a),
				C = g.a.div("TrophyContent", h.a),
				y = g.a.wrapped(d.f, "Description", h.a);

			function E(e) {
				let {
					item: t
				} = e;
				const s = n.a.createElement("img", {
					src: t.icon,
					title: t.name
				});
				return n.a.createElement(v, {
					key: t.id
				}, n.a.createElement(O, null, t.url ? n.a.createElement(c.a, {
					href: t.url,
					source: void 0,
					isSponsored: !1
				}, s) : s), n.a.createElement(C, null, n.a.createElement(f, null, t.name), n.a.createElement(y, null, t.description)))
			}
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, s) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/TimeSort/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var o = s("./node_modules/path-browserify/index.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/higherOrderComponents/asTooltip.tsx"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/ListingSort/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/constants/listingSorts.ts"),
				x = s("./src/reddit/constants/parameters.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/contexts/Tooltip.ts"),
				f = s("./src/reddit/controls/Dropdown/index.tsx"),
				C = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/helpers/trackers/navigation.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				w = s("./src/reddit/components/TimeSort/index.m.less"),
				P = s.n(w),
				I = s("./src/lib/lessComponent.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const N = "TimeSort--SortPicker",
				_ = Object(l.a)(f.a),
				T = (e, t, s) => {
					let o = e.url;
					return e.urlParams.sort || Object(v.H)(e) || (o = n.a.join(o, t)), Object(m.a)(o, {
						[x.t]: s
					})
				},
				L = I.a.div("ListingSortContainer", P.a),
				k = Object(v.t)(),
				M = Object(c.c)({
					dropdownIsOpen: Object(E.b)(N),
					language: j.S
				}),
				R = Object(i.b)(M, e => ({
					onOpenDropdown: () => e(Object(u.g)({
						tooltipId: N
					}))
				}));
			t.a = k(R(Object(h.b)(e => a.a.createElement(L, {
				className: e.className,
				onClick: e.onOpenDropdown
			}, a.a.createElement(b.c, {
				className: e.wrapperClassName,
				disabled: !1
			}, a.a.createElement(b.b, {
				className: e.buttonClassName,
				displayText: g.b[e.timeSort],
				id: N,
				showDropdownTriangle: !0
			})), a.a.createElement(O.a.Consumer, null, t => a.a.createElement(_, S({
				isOpen: e.dropdownIsOpen,
				tooltipId: N
			}, t), [p.Pb.HOUR, p.Pb.DAY, p.Pb.WEEK, p.Pb.MONTH, p.Pb.YEAR, p.Pb.ALL].map(t => a.a.createElement(C.b, {
				className: Object(d.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
				displayText: g.b[t],
				href: T(e.pageLayer, e.listingSort, t),
				isSelected: e.timeSort === t,
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(y.f)(t))
				}
			}))))))))
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/components/Widgets/Base/index.m.less"),
				c = s.n(i),
				d = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
					}
					return s
				};
			const l = r.a.div("WidgetBackground", c.a),
				m = r.a.wrapped(e => {
					var {
						children: t
					} = e, s = d(e, ["children"]);
					return n.a.createElement("div", s, n.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => n.a.createElement("div", {
				className: e.className
			}, n.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1zLylbOLqdzG2C4JhdkEVQ",
				twitterLogo: "_1N1dJvzR-m3nNoVl8cxHul",
				link: "JqNsQRTEcAPCq8_G0O5mO",
				name: "_28fbIV1TS_oSVjfzjWnM0f",
				linkDescription: "_2Y1Xv08xrWbsDZuEvIuRKo",
				linkTitle: "elMVR2YfkbHdFTihhlUK4",
				linkIcon: "oi2L0mBSRAULcOPEtjXSh",
				description: "KKNu_jB7N6A-PuBrW0WoR",
				visitButton: "NBL39n3gjYvG4c9qlXJIk"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, s) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/components/Widgets/Base/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/profileSettings.ts"),
				p = s("./src/reddit/i18n/components.tsx"),
				u = s("./src/reddit/models/ExternalAccount/index.ts"),
				b = s("./src/reddit/selectors/externalAccount.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/controls/OutboundLink/index.tsx"),
				x = s("./src/reddit/i18n/utils.ts"),
				v = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				O = s("./src/reddit/icons/svgs/Twitter/index.tsx"),
				f = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				C = s("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				y = s.n(C);
			var E = e => {
					const {
						account: t,
						clickEvent: s,
						provider: o
					} = e;
					let r, a = t.username,
						i = "";
					return o !== u.a.Twitter ? null : (r = n.a.createElement(O.a, {
						className: y.a.twitterLogo
					}), i = Object(x.c)("View on Twitter"), a = "@".concat(t.username), n.a.createElement(f.a, null, n.a.createElement("span", {
						className: y.a.icon
					}, r), n.a.createElement(g.a, {
						className: y.a.link,
						href: t.link,
						isSponsored: !1,
						source: void 0,
						onClick: s
					}, n.a.createElement("div", {
						className: y.a.linkTitle
					}, n.a.createElement("span", {
						className: y.a.name
					}, a), n.a.createElement(v.a, {
						className: y.a.linkIcon
					})), n.a.createElement("div", {
						className: y.a.linkDescription
					}, i))))
				},
				j = s("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				w = s.n(j);
			const P = Object(a.c)({
					twitterAccount: (e, t) => {
						let {
							subredditOrProfile: s
						} = t;
						return s.type === l.a.PROFILE ? Object(b.c)(e, {
							profileName: s.name
						}) : null
					},
					user: (e, t) => {
						let {
							subredditOrProfile: s
						} = t;
						return s.type === l.a.PROFILE ? Object(h.hb)(e, {
							userName: s.name
						}) : null
					}
				}),
				I = Object(r.b)(P, e => ({
					trackTwitterAccountClicked: t => e((e, s) => m.k(s(), t))
				}), (e, t, s) => Object.assign({}, s, e, t, {
					onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
				}));
			t.a = Object(c.b)(I(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: s
				} = e;
				return s ? n.a.createElement(i.a, null, n.a.createElement(d.b, null, n.a.createElement(d.a, null, n.a.createElement(p.c, null, "Connected accounts")), s && n.a.createElement("div", {
					className: w.a.account
				}, n.a.createElement(E, {
					provider: u.a.Twitter,
					account: s,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/connectors/OverviewChronoList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return g
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/postList.ts"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/helpers/isComment.ts"),
				l = s("./src/reddit/helpers/isPost.ts"),
				m = s("./src/reddit/helpers/trackers/post.ts"),
				p = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/selectors/tracking.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const g = (e, t) => (e, t, s) => Object(d.a)(e) ? 120 : 47,
				x = Object(c.t)(),
				v = {
					apiError: p.a,
					apiPending: p.b,
					currentUser: h.i,
					layout: c.M,
					loadMore: p.d,
					subredditsById: u.Y,
					viewportDataLoaded: b.a,
					commentsById: p.g,
					itemIds: p.f,
					itemIdToPostId: p.e,
					postsById: p.h,
					estimateItemHeight: g
				},
				O = Object(n.c)(v),
				f = Object(o.b)(O, (e, t) => ({
					onBottomViewed: (t, s) => e(a.c(t, s)),
					openPost: t => {
						e(r.x(t))
					},
					trackOnPostEnteredViewport: (t, s) => {
						Object(l.a)(t) && e(r.A(t))
					},
					trackOnPostExitedViewport: (t, s, o) => {
						Object(l.a)(t) && e(r.B(t, o))
					}
				}), (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: m.f
				}));
			t.a = e => Object(i.b)(x(f(e)))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "b", (function() {
				return j
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/ads/index.ts"),
				i = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/postList.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				p = s("./src/reddit/helpers/trackers/post.ts"),
				u = s("./src/reddit/components/PostList/Placeholder.tsx"),
				b = s("./src/reddit/featureFlags/index.ts"),
				h = s("./src/reddit/selectors/listings.ts"),
				g = s("./src/reddit/selectors/monthsToMinutes.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/tracking.ts");

			function f() {
				return Object(l.t)({
					currentProfileName: l.h,
					isCommentPermalink: l.v,
					isCommentsPage: l.w,
					isFrontpage: l.z,
					isProfilePostListing: l.I,
					pageLayer: e => e
				})
			}
			const C = f(),
				y = {
					apiError: h.c,
					apiPending: h.d,
					m2mIsEnabled: g.w,
					measureScrollFPS: b.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(l.M)(e, t),
					loadMore: h.g,
					postsById: x.T,
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: o,
							inSubredditOrProfile: n
						} = t;
						return Object(x.F)(e, s, o, n)
					}),
					subredditsById: v.Y,
					viewportDataLoaded: O.a,
					pageReferrer: l.P,
					postListPlaceholderComponent: () => u.a
				},
				E = Object(n.c)(y),
				j = (e, t) => ({
					onBottomViewed: (t, s) => e(c.c(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(a.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						e(i.x(t))
					},
					trackOnPostEnteredViewport: (t, s, o) => {
						e(i.A(t, o))
					},
					trackOnPostExitedViewport: (t, s, o, n) => {
						e(i.B(t, o, n))
					}
				}),
				w = Object(o.b)(E, j, (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: p.f,
					postComponentForLayout: e => Object(m.b)(Object.assign({}, e))
				}));
			t.a = e => Object(d.b)(C(w(e)))
		},
		"./src/reddit/constants/countrySorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/i18n/utils.ts");
			const r = {
				[o.v.Everywhere]: Object(n.c)("everywhere"),
				[o.v.UnitedStates]: Object(n.c)("united states"),
				[o.v.Argentina]: Object(n.c)("argentina"),
				[o.v.Australia]: Object(n.c)("australia"),
				[o.v.Bulgaria]: Object(n.c)("bulgaria"),
				[o.v.Canada]: Object(n.c)("canada"),
				[o.v.Chile]: Object(n.c)("chile"),
				[o.v.Colombia]: Object(n.c)("colombia"),
				[o.v.Croatia]: Object(n.c)("croatia"),
				[o.v.CzechRepublic]: Object(n.c)("czech republic"),
				[o.v.Finland]: Object(n.c)("finland"),
				[o.v.Greece]: Object(n.c)("greece"),
				[o.v.Hungary]: Object(n.c)("hungary"),
				[o.v.Iceland]: Object(n.c)("iceland"),
				[o.v.India]: Object(n.c)("india"),
				[o.v.Ireland]: Object(n.c)("ireland"),
				[o.v.Japan]: Object(n.c)("japan"),
				[o.v.Malaysia]: Object(n.c)("malaysia"),
				[o.v.Mexico]: Object(n.c)("mexico"),
				[o.v.NewZealand]: Object(n.c)("new zealand"),
				[o.v.Philippines]: Object(n.c)("philippines"),
				[o.v.Poland]: Object(n.c)("poland"),
				[o.v.Portugal]: Object(n.c)("portugal"),
				[o.v.PuertoRico]: Object(n.c)("puerto rico"),
				[o.v.Romania]: Object(n.c)("romania"),
				[o.v.Serbia]: Object(n.c)("serbia"),
				[o.v.Singapore]: Object(n.c)("singapore"),
				[o.v.Sweden]: Object(n.c)("sweden"),
				[o.v.Taiwan]: Object(n.c)("taiwan"),
				[o.v.Thailand]: Object(n.c)("thailand"),
				[o.v.Turkey]: Object(n.c)("turkey"),
				[o.v.UnitedKingdom]: Object(n.c)("united kingdom")
			}
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var o = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/i18n/utils.ts");
			const r = {
					[o.N.BEST]: Object(n.c)("best"),
					[o.N.HOT]: Object(n.c)("hot"),
					[o.N.NEW]: Object(n.c)("new"),
					[o.N.CONTROVERSIAL]: Object(n.c)("controversial"),
					[o.N.RISING]: Object(n.c)("rising"),
					[o.N.TOP]: Object(n.c)("top")
				},
				a = {
					[o.Pb.HOUR]: Object(n.c)("Now"),
					[o.Pb.DAY]: Object(n.c)("Today"),
					[o.Pb.WEEK]: Object(n.c)("This week"),
					[o.Pb.MONTH]: Object(n.c)("This month"),
					[o.Pb.YEAR]: Object(n.c)("This year"),
					[o.Pb.ALL]: Object(n.c)("All time")
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = n.a.createContext({})
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = n.a.createContext(() => () => {})
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
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
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var c = e => n.a.createElement("svg", i({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), n.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, n.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, n.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				d = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.m.less"),
				m = s.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const b = e => t => {
					const {
						className: s,
						disabled: o,
						redditStyle: a,
						"data-redditstyle": i
					} = t, c = u(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), d = ((e, t, s) => {
						const o = !(!t && !s);
						let n = "";
						return n = e ? o ? m.a.mDisabledRedditStyle : m.a.mDisabled : o ? m.a.mActiveRedditStyle : m.a.mActive
					})(o, a, i);
					return n.a.createElement(e, p({
						className: Object(r.a)(m.a.Checkbox, d, s)
					}, c))
				},
				h = b(d.a),
				g = b(c);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? g : e.isCheckboxSelected ? h : a.a;
				return n.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, n.a.createElement(t, {
					className: Object(r.a)(m.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_3gualOXr9lNla8__xISVq_",
				iconStyles: "_35qsI3TFFX54FD3PjwpLCv",
				mDisabled: "_2D3JNnADc6N28qHblqs-qW",
				mRedditStyle: "_1Y3PuNdUp_ye6oQQPIkE2Y",
				iconContainer: "_2Q-tHVfuqqIQLbMlSTJrlV",
				tooltip: "vCHkhDAaK6nnJdqEpMGq-",
				layoutButton: "_2KZsg_1r4DJcaP-Ug1LhsQ",
				mIsActive: "_70bDvpoC4B21zobSGUMe6",
				layoutSwitch: "_1o9Wtqx2f_wpqeyceGTV5w"
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				b = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				h = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/selectors/telemetry.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/controls/LayoutSwitch/index.m.less"),
				C = s.n(f);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var E = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const j = e => Object(c.a)(C.a.iconStyles, e.className, {
					[C.a.mDisabled]: e.disabled,
					[C.a.mRedditStyle]: e.redditStyle
				}),
				w = e => {
					var {
						isActive: t
					} = e, s = E(e, ["isActive"]);
					return n.a.createElement("button", y({
						className: Object(c.a)(C.a.layoutButton, {
							[C.a.mIsActive]: t
						})
					}, s))
				},
				P = Object(i.e)("listings.layoutSwitcher.label"),
				I = Object(i.e)("listings.layoutSwitcher.card"),
				S = Object(i.e)("listings.layoutSwitcher.classic"),
				N = Object(i.e)("listings.layoutSwitcher.compact"),
				_ = [{
					layout: p.d.Card,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: o
						} = e, r = E(e, ["className", "disabled", "redditStyle"]);
						return n.a.createElement(h.a, y({
							className: j({
								className: t,
								disabled: s,
								redditStyle: o
							})
						}, r))
					},
					tooltipTranslation: I
				}, {
					layout: p.d.Classic,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: o
						} = e, r = E(e, ["className", "disabled", "redditStyle"]);
						return n.a.createElement(u.a, y({
							className: j({
								className: t,
								disabled: s,
								redditStyle: o
							})
						}, r))
					},
					tooltipTranslation: S
				}, {
					layout: p.d.Compact,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: o
						} = e, r = E(e, ["className", "disabled", "redditStyle"]);
						return n.a.createElement(b.a, y({
							className: j({
								className: t,
								disabled: s,
								redditStyle: o
							})
						}, r))
					},
					tooltipTranslation: N
				}],
				T = Object(x.t)(),
				L = Object(a.c)({
					language: O.S,
					postLayout: x.M,
					redditStyle: x.B
				}),
				k = Object(r.b)(L, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					toggleTooltip: t => e(Object(m.g)({
						tooltipId: t
					}))
				}), (e, t, s) => Object.assign({}, e, t, s, {
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = T(k(Object(g.b)(e => {
				const {
					sendEvent: t,
					subredditId: s
				} = e, o = e.layout || p.e[e.postLayout];
				return n.a.createElement("div", {
					className: Object(c.a)(C.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, n.a.createElement("div", {
					className: C.a.title
				}, P(e.language)), n.a.createElement("div", {
					className: C.a.iconContainer
				}, _.map(r => {
					const a = () => (o => {
							e.onChange ? e.onChange(o) : (e.onListingLayoutChange(o, s), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: o,
								screen: Object(v.screen)(e),
								subreddit: Object(v.subreddit)(e)
							})))
						})(r.layout),
						i = () => e.toggleTooltip(c),
						c = "layoutSwitch--" + r.layout,
						l = r.layout === o;
					return n.a.createElement(w, {
						"aria-label": r.tooltipTranslation(e.language),
						"aria-pressed": l,
						id: c,
						isActive: l,
						key: r.layout,
						onClick: a,
						onMouseEnter: i,
						onMouseLeave: i,
						onTouchStart: a
					}, n.a.createElement(r.Icon, {
						disabled: !l,
						onClick: l ? void 0 : e.onLayoutClick,
						redditStyle: e.redditStyle
					}), n.a.createElement(d.c, {
						className: C.a.tooltip,
						tooltipId: c,
						text: r.tooltipTranslation(e.language)
					}))
				})))
			})))
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, s) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "d", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/app/strings/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				c = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/i18n/utils.ts")),
				d = s("./src/reddit/controls/MetaData/index.m.less"),
				l = s.n(d),
				m = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
					}
					return s
				};
			const p = a.a.span("metaText", l.a),
				u = e => n.a.createElement(p, e, " · "),
				b = Object(r.d)("comment.point"),
				h = e => {
					var {
						isScoreHidden: t,
						language: s,
						score: o,
						useUpvotes: r
					} = e, a = m(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const d = Object(i.b)(o),
						l = Object(c.c)("\n    ".concat(Object(c.b)("score", d), " ").concat(Object(c.a)("upvotes", ["upvote", "upvotes"], o), "\n  ")),
						u = t ? Object(c.c)("Score hidden") : r ? l : b(s, o, {
							count: d
						});
					return n.a.createElement(p, a, u)
				},
				g = (e, t) => {
					const s = Object(r.c)(t, "posts.comments.noun", e, {
						count: Object(i.b)(e)
					});
					return n.a.createElement(p, null, s)
				}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			}));
			var o, n = s("./src/config.ts"),
				r = s("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
				switch (e) {
					case o.Ethereum:
						return "Ethereum Main Network";
					case o.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function i(e, t, s) {
				return Object(r.a)(e, {
					method: "post",
					endpoint: "".concat(n.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: s
					}
				})
			}
			async function c(e, t, s) {
				return await Object(r.a)(e, {
					method: "post",
					endpoint: "".concat(n.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: s
				})
			}
			async function d(e, t, s) {
				return await Object(r.a)(e, {
					method: "delete",
					endpoint: "".concat(n.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(s)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(o || (o = {}))
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "a", (function() {
				return u
			}));
			var o = s("./node_modules/lodash/get.js"),
				n = s.n(o),
				r = s("./src/config.ts"),
				a = s("./src/graphql/operations/PollVote.json"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				d = s("./src/reddit/constants/headers.ts"),
				l = (s("./src/reddit/models/Poll/index.ts"), s("./src/reddit/endpoints/governance/requester.ts"));

			function m(e, t, s, o) {
				return Object(l.a)(e, {
					method: "put",
					endpoint: "".concat(r.a.metaUrl, "/polls/").concat(t, "/").concat(s, "/votes/me/").concat(o)
				})
			}
			const p = (e, t, s) => Object(i.a)(e, Object.assign({}, a, {
				variables: {
					input: {
						postId: t,
						optionId: s
					}
				}
			}));

			function u(e, t) {
				return Object(l.a)(Object(c.a)(e, [d.a]), {
					method: "get",
					endpoint: "".concat(e.apiUrl, "/by_id/").concat(t, ".json")
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						title: n()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: n()(e.body, ["data", "children", 0, "data", "permalink"], "")
					}
				}) : e)
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
			}));
			var o = s("./src/config.ts"),
				n = (s("./src/lib/bigNumberUtils/percent.ts"), s("./src/lib/constants/index.ts")),
				r = s("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(r.a)(e, {
					endpoint: "".concat(o.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: n.bb.GET
				}).then(e => {
					if (e.ok) {
						const s = e.body,
							o = {
								[t.subredditId]: s
							};
						return Object.assign({}, e, {
							body: o
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
					endpoint: "".concat(o.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: n.bb.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						wallets: e.body
					}
				}) : e)
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./src/reddit/models/WhitelistStatus/index.ts");
			const n = (e, t) => {
				const s = e.some(e => e.isNSFW),
					n = t.some(e => e.wls === o.a.NO_ADS);
				return !s && !n
			}
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/app/strings/index.ts"),
				n = s("./src/lib/constants/index.ts");

			function r(e) {
				let {
					apiError: t,
					isLoggedOut: s,
					language: r
				} = e;
				switch (t.type) {
					case n.D.AUTHORIZATION_ERROR:
						return s ? Object(o.a)(r, "error.type.notLoggedIn") : Object(o.a)(r, "error.type.notAuthorized");
					case n.D.VALIDATION_ERROR:
						return Object(o.a)(r, "error.type.validation");
					case n.D.NOT_FOUND_ERROR:
						return Object(o.a)(r, "error.type.notFound");
					case n.D.SERVER_ERROR:
						return Object(o.a)(r, "error.type.server");
					case n.D.LIKELY_UBLOCK_ERROR:
						return Object(o.a)(r, "error.type.blocked");
					default:
						return Object(o.a)(r, "error.type.generic")
				}
			}
		},
		"./src/reddit/helpers/getClickInfo.ts": function(e, t, s) {
			"use strict";
			t.a = e => ({
				hasNewTabModifier: !(!e.metaKey && !e.ctrlKey && 1 !== e.button)
			})
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var o = s("./node_modules/bignumber.js/bignumber.js"),
				n = s("./src/lib/prettyPrintNumber/index.ts");

			function r(e, t) {
				const s = new o.BigNumber(e),
					n = new o.BigNumber(t);
				return s.dividedBy(n).decimalPlaces(2).toString()
			}

			function a(e, t) {
				return Object(n.b)(parseInt(r(e, t), 10))
			}

			function i(e, t) {
				const s = new o.BigNumber(e),
					n = new o.BigNumber(t);
				return s.multipliedBy(n).toFixed(0)
			}
		},
		"./src/reddit/helpers/postComponentForLayout/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "b", (function() {
				return C
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/isUrl/index.ts"),
				i = s("./src/lib/logs/console.ts"),
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/models/Media/index.ts");
			const l = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-BlankPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-BlankPost").then(s.bind(null, "./src/reddit/components/BlankPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/BlankPost/index.tsx"
					}
				}),
				m = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-ClassicPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), s.e("reddit-components-ClassicPost")]).then(s.bind(null, "./src/reddit/components/ClassicPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ClassicPost/index.tsx"
					}
				}),
				p = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-CompactPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), s.e("reddit-components-CompactPost")]).then(s.bind(null, "./src/reddit/components/CompactPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/CompactPost/index.tsx"
					}
				}),
				u = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-LargePost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"), s.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), s.e("reddit-components-LargePost")]).then(s.bind(null, "./src/reddit/components/LargePost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/LargePost/index.tsx"
					}
				}),
				b = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-MediumPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~84248ed7"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"), s.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), s.e("reddit-components-MediumPost")]).then(s.bind(null, "./src/reddit/components/MediumPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/MediumPost/index.tsx"
					}
				}),
				h = {
					[c.g.Large]: u,
					[c.g.Medium]: b,
					[c.g.Classic]: m,
					[c.g.Compact]: p
				},
				g = e => r.a.createElement(l, e),
				x = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://www.dyson.com", "https://dyson.com"],
				v = e => e.source && e.source.url && e.isSponsored && x.some(t => e.source.url.startsWith(t)),
				O = e => !e.media || e.media.type === d.n.EMBED && !(d.b.has(e.media.provider) || v(e)),
				f = (e, t) => {
					if (e.isBlank) return 0;
					switch (t) {
						case c.g.Medium:
							return 188;
						case c.g.Classic:
							return 96;
						case c.g.Compact:
							return 32;
						default:
							return 200
					}
				};

			function C(e) {
				let {
					isCrosspost: t,
					isFirstPost: s,
					layout: o,
					post: n
				} = e;
				if (n.isBlank) return g;
				const r = !n.media && !!n.source && Object(a.a)(n.source.url),
					d = t && r;
				o === c.g.Large && O(n) && !d && (o = c.g.Medium);
				const l = h[o];
				return void 0 === l ? (Object(i.a)(void 0, "Could not find component for layout ".concat(o, ".")), g) : s && n.isSponsored && o === c.g.Large ? b : l
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "d", (function() {
				return x
			}));
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const m = {},
				p = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: p(t)
					}
				},
				b = e => Object(o.o)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				g = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(r.a)(Object(n.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, s) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowCollapse"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
			}
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, s) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Best/index.m.less": function(e, t, s) {
			e.exports = {
				best: "_3SejsWL-17KHAzDgcp66kT"
			}
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), n.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), n.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), n.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
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
		"./src/reddit/icons/svgs/Controversial/index.m.less": function(e, t, s) {
			e.exports = {
				controversial: "_2Yq1cYyaAnws8U-1N7H_f0"
			}
		},
		"./src/reddit/icons/svgs/Flag/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("polygon", {
				fill: "inherit",
				points: "0 20 20 20 20 0 0 0",
				opacity: "0"
			}), n.a.createElement("path", {
				fill: "inherit",
				d: "M11.71875,3.14525 C14.60125,1.54375 18.75025,3.48025 18.75025,3.48025 L18.75025,13.55475 C18.75025,13.55475 14.86875,11.81975 11.71875,13.21975 C8.70525,14.55925 4.68725,12.88475 4.68725,12.88475 L4.68725,2.81025 C4.68725,2.81025 8.70525,4.81925 11.71875,3.14525 Z M2.75,18.75 C2.232,18.75 2,18.3305 2,17.8125 L2,2.8125 C2,2.2945 2.232,1.875 2.75,1.875 C3.268,1.875 3.5,2.2945 3.5,2.8125 L3.5,17.8125 C3.5,18.3305 3.268,18.75 2.75,18.75 Z"
			}))
		},
		"./src/reddit/icons/svgs/GovSmall/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8.5,0.2l6.2,3c0.5,0.3,0.6,0.9,0.3,1.4C14.9,4.8,14.6,5,14.2,5H1.8c-0.6,0-1-0.4-1-1 c0-0.4,0.2-0.7,0.5-0.9l6.2-3C7.9,0,8.1,0,8.5,0.2z"
			}), n.a.createElement("path", {
				d: "M2,12h12c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H2c-0.6,0-1-0.4-1-1l0,0C1,12.4,1.4,12,2,12z"
			}), n.a.createElement("path", {
				d: "M3.8,6h0.5C4.7,6,5,6.3,5,6.8v3.5C5,10.7,4.7,11,4.2,11H3.8C3.3,11,3,10.7,3,10.3V6.8C3,6.3,3.3,6,3.8,6z"
			}), n.a.createElement("path", {
				d: "M7.8,6h0.5C8.7,6,9,6.3,9,6.8v3.5C9,10.7,8.7,11,8.2,11H7.8C7.3,11,7,10.7,7,10.3V6.8 C7,6.3,7.3,6,7.8,6z"
			}), n.a.createElement("path", {
				d: "M11.8,6h0.5C12.7,6,13,6.3,13,6.8v3.5c0,0.4-0.3,0.8-0.8,0.8h-0.5c-0.4,0-0.8-0.3-0.8-0.8V6.8 C11,6.3,11.3,6,11.8,6z"
			})))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Hot/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14JCwSw7Z9KVa3DJCOcJWg"
			}
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
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
		"./src/reddit/icons/svgs/New/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14d58ZMXxV3Byed78nS3DU"
			}
		},
		"./src/reddit/icons/svgs/Rising/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3k-hLnRWy2KVi9lKrKSut"
			}
		},
		"./src/reddit/icons/svgs/Save/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2qT9eltTv4vv9GxxEZqvc0"
			}
		},
		"./src/reddit/icons/svgs/Top/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3rlT9yoNCxQn9Q2EW5FjjE"
			}
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Top/index.m.less"),
				i = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function r(e) {
				return n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, s) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = s.n(n);
			t.a = o.a.div("rightAligned", r.a)
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
				return m
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/i18n/components.tsx"),
				i = s("./src/reddit/i18n/utils.ts"),
				c = s("./src/reddit/pages/ErrorPages/index.m.less"),
				d = s.n(c);
			const l = e => {
					let {
						message: t
					} = e;
					return n.a.createElement("div", {
						className: d.a.container
					}, n.a.createElement("h3", {
						className: d.a.title
					}, t || Object(i.c)("Sorry, there doesn't seem to be anything here.")), n.a.createElement(r.h, {
						className: d.a.primaryRouterLink,
						to: "/"
					}, n.a.createElement(a.c, null, "Go Home")))
				},
				m = e => {
					let {
						message: t
					} = e;
					return n.a.createElement("div", {
						className: d.a.container
					}, n.a.createElement("h3", {
						className: d.a.title
					}, t || Object(i.c)("Sorry, You do not have permission to view this page.")), n.a.createElement(r.h, {
						className: d.a.primaryRouterLink,
						to: "/"
					}, n.a.createElement(a.c, null, "Go Home")))
				}
		},
		"./src/reddit/pages/ProfileOverview/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.search.js");
			var o = s("./node_modules/lodash/fromPairs.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/isFakeSubreddit/index.ts"),
				m = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/reddit/actions/pages/profileOverview.ts"),
				h = s("./src/reddit/actions/pages/profileShared.ts"),
				g = s("./src/reddit/actions/profileConversations.ts"),
				x = s("./src/reddit/actions/profileOverviewChrono.ts"),
				v = s("./src/reddit/components/ContentGate/index.tsx"),
				O = s("./src/reddit/components/EmptyProfile/index.ts"),
				f = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				C = s("./src/reddit/components/JumpToContent/index.tsx"),
				y = s("./src/reddit/components/LayoutNavigation/index.tsx"),
				E = s("./src/lib/classNames/index.ts"),
				j = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				w = s("./src/reddit/components/ProfileItemList/index.tsx"),
				P = s("./src/reddit/connectors/OverviewChronoList/index.ts"),
				I = s("./src/reddit/components/OverviewChronoList/index.m.less"),
				S = s.n(I),
				N = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const T = Object(P.a)(N.a.wrapped(e => {
				const {
					className: t,
					itemIds: s
				} = e, o = s.length > 0;
				return a.a.createElement(w.a, _({
					className: Object(E.a)(t, {
						[S.a.ComponentHasItems]: o
					})
				}, e))
			}, "Component", S.a));
			var L = e => a.a.createElement(T, _({}, e, {
					itemComponent: j.a
				})),
				k = s("./src/reddit/components/PostList/index.tsx"),
				M = s("./src/reddit/components/TrackingHelper/index.tsx"),
				R = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				A = s("./src/lib/isPinnedAdminPost/index.ts"),
				B = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				F = s("./node_modules/lodash/last.js"),
				D = s.n(F);
			var H = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				V = s("./src/reddit/selectors/posts.ts"),
				W = s("./src/reddit/components/ClassicPost/index.tsx"),
				U = s("./src/reddit/components/LargePost/index.tsx"),
				G = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				z = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				K = s("./src/reddit/i18n/components.tsx"),
				q = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				Z = s("./src/reddit/selectors/profile.ts"),
				Q = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				J = s.n(Q);
			const Y = N.a.div("ExtraCommentsItemWrapper", J.a),
				X = N.a.p("ExtraComments", J.a),
				$ = N.a.wrapped(X, "ExtraCommentsInteractive", J.a);
			var ee = Object(i.b)(() => Object(c.c)({
					extraCommentsItem: Z.c,
					extraCommentsPending: (e, t) => {
						const {
							extraCommentsId: s
						} = t, {
							extraComments: o
						} = e.profileOverviewPage.conversations;
						return !!o.api.pending[s]
					}
				}), (e, t) => {
					let {
						profileName: s
					} = t;
					return {
						extraCommentsClicked: t => e(Object(g.g)(s, t.postId, t.id))
					}
				})(e => {
					let {
						extraCommentsClicked: t,
						extraCommentsItem: s,
						extraCommentsPending: o
					} = e;
					return a.a.createElement(Y, null, o ? a.a.createElement(X, null, a.a.createElement(K.c, null, "Loading...")) : a.a.createElement(q.a.Consumer, null, e => a.a.createElement($, {
						onClick: e => {
							t(s), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, a.a.createElement(K.c, null, "Load more comments"))))
				}),
				te = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				se = s("./src/reddit/constants/postLayout.ts"),
				oe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ne = s.n(oe),
				re = s("./src/reddit/components/OverviewConversationsPost/index.m.less"),
				ae = s.n(re);

			function ie() {
				return (ie = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ce = N.a.div("BackgroundWrapper", ae.a),
				de = N.a.wrapped(W.default, "ClassicPost", ae.a),
				le = N.a.wrapped(G.a, "OverviewCommentPost", ae.a),
				me = Object(p.t)({
					currentProfileName: p.h,
					isFrontpage: p.z,
					pageLayer: e => e
				}),
				pe = Object(i.b)(() => Object(c.c)({
					commentThreadLinkSets: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						const n = o ? o.toLowerCase() : "",
							r = Object(B.a)(s, n);
						return e.profileOverviewPage.conversations.keyToCommentThreadLinkSets[r]
					},
					headComment: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						const n = o ? o.toLowerCase() : "",
							r = Object(B.a)(s, n);
						return e.profileOverviewPage.conversations.keyToHeadCommentId[r]
					},
					isInitiallyPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						return !!o && Object(V.n)(e, s, o)
					},
					isPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						return !!o && Object(V.s)(e, s, o)
					},
					post: V.I,
					profileName: (e, t) => {
						let {
							currentProfileName: s
						} = t;
						if (s) return ((e, t) => {
							const {
								users: s
							} = e, o = t.toLowerCase(), n = s.models[o];
							return n ? n.username : void 0
						})(e, s)
					},
					layout: p.M
				})),
				ue = N.a.wrapped(U.default, "OverviewLargePost", ae.a);
			var be = Object(R.a)(me(pe(e => {
					const {
						availableWidth: t,
						className: s,
						commentThreadLinkSets: o,
						eventFactory: n,
						forceLoadMedia: r,
						headComment: i,
						isFrontpage: c,
						isInitiallyPinned: d,
						isPinned: l,
						isScrolling: m,
						last: p,
						layout: u,
						onClickPost: b,
						onSizeChanged: h,
						pageLayer: g,
						post: x,
						postId: v,
						profileName: O,
						scrollerItemRef: f
					} = e, C = {
						last: p,
						onClickPost: b,
						postId: v
					};
					if (!O) return null;
					const y = O === x.author,
						j = Object(A.a)(l, x.distinguishType);
					if (!y && !i && !j) return null;
					const w = i ? function(e) {
							const t = [],
								s = e.length;
							for (let o = 0; o < s; o++) {
								(0 === o || e[o - 1].depth !== e[o].depth - 1) && t.push([]), D()(t).push(e[o])
							}
							return t
						}(function(e, t) {
							const s = [];
							let o = t,
								n = "comment";
							for (; o;) {
								const t = e[o];
								s.push({
									id: o,
									depth: t.depth,
									type: n
								}), t.next ? (o = t.next.id, n = t.next.type) : o = void 0
							}
							return s
						}(o, i)) : [],
						P = w.length - 1;
					return a.a.createElement("div", {
						className: Object(E.a)(ne.a.largeAndMediumActiveStyles, ne.a.largeAndMediumPostStyles, ae.a.OverviewConversationsPost, s),
						style: Object.assign({}, Object(H.b)(), Object(H.d)(e))
					}, a.a.createElement(z.a, {
						isFirst: !0,
						isLast: P < 0,
						key: x.id
					}, !y && !!i && a.a.createElement(le, ie({}, C, {
						commentId: i,
						key: x.id,
						profileName: O
					})), (y || j) && (u === se.g.Classic ? a.a.createElement(de, {
						availableWidth: t,
						eventFactory: n,
						inSubredditOrProfile: !1,
						isOverlay: !1,
						isScrolling: m,
						forceLoadMedia: r,
						last: p,
						onClickPost: b,
						onSizeChanged: h,
						pageLayer: g,
						postId: v,
						scrollerItemRef: f
					}) : a.a.createElement(ue, {
						availableWidth: t,
						eventFactory: n,
						isScrolling: m,
						isFrontpage: c,
						forceLoadMedia: r,
						last: p,
						onClickPost: b,
						onSizeChanged: h,
						pageLayer: g,
						postId: v,
						scrollerItemRef: f
					}))), a.a.createElement(ce, {
						style: {
							background: Object(H.e)(e)
						}
					}, !d && w.map((e, t) => a.a.createElement(z.a, {
						isLast: t === P,
						key: "".concat(t, "-isLast[").concat(t === P, "]")
					}, e.map((t, s) => {
						const o = 0 === s,
							n = s === e.length - 1;
						return "comment" === t.type ? a.a.createElement(te.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: o,
							isLast: n,
							key: t.id,
							profileName: O,
							showModTools: !0
						}) : a.a.createElement(ee, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: O
						})
					})))))
				}))),
				he = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				ge = s("./src/reddit/helpers/trackers/post.ts"),
				xe = s("./src/reddit/selectors/tracking.ts"),
				ve = s("./src/reddit/connectors/PostList/index.ts");
			const Oe = Object(c.c)(Object.assign({}, ve.d, {
					postIds: V.P,
					viewportDataLoaded: xe.a
				})),
				fe = Object(ve.c)(),
				Ce = Object(i.b)(Oe, ve.b, (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: ge.f,
					postComponentForLayout: e => {
						let {
							post: t
						} = e;
						return t.isBlank ? he.a : be
					}
				}));
			var ye = (e => Object(M.b)(fe(Ce(e))))(k.a),
				Ee = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				je = s("./node_modules/lodash/debounce.js"),
				we = s.n(je),
				Pe = s("./src/reddit/actions/post.ts"),
				Ie = s("./src/reddit/components/MiniCardPost/index.tsx"),
				Se = s("./src/reddit/helpers/getClickInfo.ts"),
				Ne = s("./src/reddit/helpers/localStorage/index.ts"),
				_e = s("./src/reddit/models/User/index.ts"),
				Te = s("./src/reddit/selectors/user.ts"),
				Le = e => a.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, a.a.createElement("g", {
					fill: "inherit"
				}, a.a.createElement("path", {
					d: "M18.71,7.75,17.24,6.29,13.71,2.76,12.25,1.29a1,1,0,0,0-1.41,0L10,2.15a1,1,0,0,0-.26,1l.46,1.78L6.89,8.17,5.11,7.71a1,1,0,0,0-1,.26l-.86.86a1,1,0,0,0,0,1.41l1.47,1.47.62.62L.6,18.7a.5.5,0,0,0,.7.7l6.37-4.78.62.62,1.47,1.47a1,1,0,0,0,1.41,0l.86-.86a1,1,0,0,0,.26-1l-.46-1.78,3.28-3.28,1.78.46a1,1,0,0,0,.25,0,1,1,0,0,0,.71-.29l.86-.86A1,1,0,0,0,18.71,7.75Z"
				}))),
				ke = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				Me = s.n(ke);
			var Re = e => a.a.createElement("div", {
					className: Object(E.a)(Me.a.container, e.className)
				}, a.a.createElement(Le, {
					className: Me.a.pin
				}), a.a.createElement("div", {
					className: Me.a.title
				}, a.a.createElement(K.c, null, "Show off that karma!")), e.children),
				Ae = s("./src/reddit/controls/TextButton/index.tsx"),
				Be = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				Fe = s.n(Be);
			var De = e => a.a.createElement(Re, {
					className: Object(E.a)(Fe.a.container, e.className)
				}, a.a.createElement("div", {
					className: Fe.a.description
				}, a.a.createElement(K.c, null, 'Pin a post from your feed using the "..." at the bottom of each post')), a.a.createElement(Ae.a, {
					className: Fe.a.gotIt,
					onClick: e.onGotItClick
				}, a.a.createElement(K.c, null, "OK, I got it"))),
				He = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				Ve = s.n(He);
			const We = 320,
				Ue = 300,
				Ge = Object(c.c)({
					arePinnedPostsLoaded: V.a,
					currentUser: Te.i,
					pinnedPostIds: V.Q
				}),
				ze = Object(i.b)(Ge, e => ({
					openPost: t => e(Object(Pe.x)(t))
				}));
			class Ke extends a.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = we()(() => {
						if (!this.containerRef) return;
						const e = this.containerRef.getBoundingClientRect();
						e.bottom < Ue ? this.pauseMedia() : e.top > 0 && this.playMedia()
					}, 250, {
						leading: !0
					}), this.playMedia = () => {
						this.setState(e => e.pauseMedia ? {
							pauseMedia: !1
						} : null)
					}, this.pauseMedia = () => {
						this.setState(e => e.pauseMedia ? null : {
							pauseMedia: !0
						})
					}, this.onGotItClick = () => {
						Object(Ne.X)(), this.setState({
							showEducation: !1
						})
					}, this.onClickPost = (e, t) => {
						this.props.openPost({
							postOrComment: t,
							clickInfo: Object(Se.a)(e)
						})
					}, this.renderPost = e => a.a.createElement(Ie.b, {
						availableWidth: We,
						className: Object(E.a)(Ve.a.item, Ve.a.miniCardPost),
						forceLoadMedia: !this.state.pauseMedia,
						key: e,
						onClickPost: this.onClickPost,
						postId: e,
						shouldPause: this.state.pauseMedia
					})
				}
				componentDidMount() {
					this.setState({
						showEducation: !Object(Ne.v)()
					}), document.addEventListener("scroll", this.handleScroll), this.handleScroll()
				}
				componentWillUnmount() {
					document.removeEventListener("scroll", this.handleScroll)
				}
				render() {
					const {
						arePinnedPostsLoaded: e,
						pinnedPostIds: t,
						children: s
					} = this.props;
					if (!e) return null;
					const o = !!this.props.currentUser && this.props.profileName === Object(_e.f)(this.props.currentUser),
						n = t.length > 0,
						r = !n && this.state.showEducation && o;
					if (!n && !r) return null;
					const i = o && this.props.pinnedPostIds.length % 2 != 0;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: Ve.a.title
					}, a.a.createElement(K.c, null, "Pinned posts")), r ? a.a.createElement(De, {
						className: Object(E.a)(Ve.a.item, Ve.a.education),
						onGotItClick: this.onGotItClick
					}) : a.a.createElement("div", {
						ref: this.setContainerRef,
						className: Ve.a.container
					}, t.map(this.renderPost), i && a.a.createElement(Re, {
						className: Ve.a.item
					})), s)
				}
			}
			var qe = Object(p.t)()(ze(Ke)),
				Ze = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				Qe = s("./src/reddit/helpers/trackers/screenview.ts"),
				Je = s("./src/reddit/layout/page/Listing/index.tsx"),
				Ye = s("./src/reddit/pages/ErrorPages/index.tsx"),
				Xe = s("./src/reddit/selectors/experiments/generalCleanup.ts");

			function $e() {
				return ($e = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const et = (e, t) => {
					let {
						location: s
					} = t;
					return n()([...Object(d.a)(s.search)])
				},
				tt = Object(p.t)(),
				st = Object(c.a)(p.C, Te.X, et, p.M, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.sort
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(Z.j)(e, {
						profileName: s.params.profileName
					})
				}, (e, t) => Object(h.a)(e, et(0, t)), (e, t) => {
					let {
						match: s
					} = t;
					return !Object(V.k)(e, {
						profileName: s.params.profileName
					})
				}, Xe.a, (e, t) => {
					let {
						match: s
					} = t;
					return Object(Te.f)(e, u.Rb + s.params.profileName)
				}, (e, t, s, o, n, r, a, i, c, d, l) => {
					let {
						sort: p,
						t: b
					} = i;
					const h = o === se.g.Compact ? u.ib : u.jb,
						g = Object(m.a)(n, h, p, s);
					return {
						contentGateInfo: l,
						generalCleanupVariant: d,
						over18Prefs: t,
						isOwnProfile: e,
						isProfileNSFW: !!a && a.isNSFW,
						layout: o,
						listingKey: g,
						profileName: n,
						shouldShowPinnedPostsSection: c,
						sort: p,
						timeSort: b
					}
				}),
				ot = Object(i.b)(st, (e, t) => ({
					onLoadMoreChronoItems: () => e(x.d({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLoadMoreConversationsItems: () => e(g.h({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLayoutChange: () => e(Object(b.g)(Object.assign({}, t.match, {
						queryParams: n()([...Object(d.a)(t.location.search)])
					})))
				}));
			class nt extends a.a.Component {
				constructor() {
					super(...arguments), this.renderNoPosts = () => a.a.createElement(O.c, {
						profileName: this.props.profileName,
						timeSort: this.props.timeSort
					})
				}
				componentWillUpdate(e) {
					this.props.layout !== e.layout && e.onLayoutChange()
				}
				render() {
					const {
						contentGateInfo: e,
						generalCleanupVariant: t,
						layout: s,
						over18Prefs: o,
						isOwnProfile: n,
						isProfileNSFW: r,
						listingKey: i,
						onLayoutChange: c,
						pageLayer: d,
						profileName: m,
						sort: p,
						shouldShowPinnedPostsSection: b,
						timeSort: h
					} = this.props;
					if (!d) return null;
					if (e && (e.profileDeleted || e.profileSuspended)) return a.a.createElement(v.b, {
						contentGateType: e.profileDeleted ? v.a.ProfileDeleted : v.a.ProfileSuspended,
						profileName: m
					});
					if (403 === d.status) return a.a.createElement(Ye.a, null);
					if (404 === d.status) return a.a.createElement(v.b, {
						contentGateType: v.a.ProfileDoesNotExist,
						profileName: m
					});
					if (!m) return null;
					const g = m.toLowerCase(),
						x = "/user/".concat(m, "/"),
						O = {
							listingKey: i,
							listingName: g
						};
					if (!o && r && !n) return a.a.createElement(v.b, {
						subredditName: m,
						contentGateType: v.a.Nsfw
					});
					const E = {
							inSubredditOrProfile: !Object(l.a)(m),
							listingKey: i,
							listingName: g,
							listingViewed: (e, t) => Object(Qe.k)(i, p, t, e, h),
							noPostsComponent: this.renderNoPosts,
							onTryAgain: c
						},
						j = Object(Xe.b)(t),
						w = {
							sort: p,
							baseUrl: x,
							sortOptions: u.nb,
							timeSort: h
						};
					let P;
					return P = s === se.g.Compact ? a.a.createElement(L, $e({}, E, {
						onLoadMore: this.props.onLoadMoreChronoItems,
						onTryAgain: c
					})) : a.a.createElement(a.a.Fragment, null, b && a.a.createElement(qe, {
						profileName: m
					}), j && a.a.createElement(f.a, w), a.a.createElement(ye, $e({}, E, {
						excludePinnedPosts: b,
						onLoadMore: this.props.onLoadMoreConversationsItems
					}))), a.a.createElement(Je.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(Ee.a, {
							profileName: m
						}), !j && a.a.createElement(y.a, w)),
						content: a.a.createElement(a.a.Fragment, null, a.a.createElement(C.a, null), P),
						sidebar: a.a.createElement(Ze.a, $e({}, O, {
							profileName: m
						}))
					})
				}
			}
			t.default = tt(ot(nt))
		},
		"./src/reddit/selectors/experiments/goldAwardedCommentHighlight.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const a = e => !!(e => {
				const t = Object(n.c)(e, {
					experimentEligibilitySelector: e => Object(r.J)(e),
					experimentName: o.J
				});
				return Object(o.Yb)(t) ? void 0 : t
			})(e)
		},
		"./src/reddit/selectors/experiments/goldProfileGildedAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const a = e => !!(e => {
				const t = Object(n.c)(e, {
					experimentEligibilitySelector: e => Object(r.J)(e),
					experimentName: o.N
				});
				return Object(o.Yb)(t) ? void 0 : t
			})(e)
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/platform.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const i = new Set(["pollstest", "whatssnoo"]),
				c = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing", "nfl"]),
				d = e => i.has(e.toLowerCase()) || c.has(e.toLowerCase()),
				l = e => i.has((Object(r.e)(e) || "").toLowerCase()) || c.has((Object(r.e)(e) || "").toLowerCase()) && Object(n.c)(e, {
					experimentEligibilitySelector: a.J,
					experimentName: o.ib
				}) === o.pb.Enabled
		},
		"./src/reddit/selectors/experiments/publicAwarding.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: o.ob
				});
				return Object(o.Yb)(t) ? void 0 : t
			}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "h", (function() {
				return g
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "j", (function() {
				return v
			})), s.d(t, "o", (function() {
				return O
			})), s.d(t, "p", (function() {
				return f
			})), s.d(t, "n", (function() {
				return C
			})), s.d(t, "k", (function() {
				return y
			})), s.d(t, "l", (function() {
				return E
			})), s.d(t, "s", (function() {
				return j
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "f", (function() {
				return P
			})), s.d(t, "q", (function() {
				return I
			})), s.d(t, "m", (function() {
				return S
			})), s.d(t, "r", (function() {
				return N
			}));
			var o = s("./src/reddit/contexts/PageLayer/index.tsx"),
				n = s("./src/reddit/endpoints/governance/crypto.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				a = s("./src/reddit/selectors/experiments/pollsGA.ts"),
				i = s("./src/reddit/selectors/postCreations.ts");
			const c = [],
				d = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				m = (e, t) => {
					let {
						subredditId: s
					} = t;
					const o = j(e, {
						subredditId: s
					});
					return o && o.extra && o.extra.contracts && o.extra.contracts.harberger ? o.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				p = (e, t) => {
					const s = y(e, t);
					if (s) return s.mainHeader
				},
				u = (e, t) => {
					const s = y(e, t);
					return s && s.mainHeader ? s.mainHeader.price : "0"
				},
				b = (e, t) => {
					const s = y(e, t);
					return s && s.mainHeader ? {
						owner: s.mainHeader.owner,
						ownerId: s.mainHeader.ownerId
					} : d
				},
				h = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				g = (e, t) => {
					if (Object(a.b)(e)) {
						const t = Object(i.g)(e);
						return !!t.allowedPostTypes && t.allowedPostTypes.polls
					}
					const s = r.d.spPolls(e) || r.d.spKarmaPoints(e),
						o = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (o) {
						const e = !!o.polls && !1 === o.polls.canCreate;
						return s && !e
					}
					return s
				},
				x = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				v = (e, t) => {
					const s = Object(o.m)(e, t);
					return s && e.subreddits.gov.releaseNotes[s] || c
				},
				O = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				f = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				C = (e, t) => {
					const s = I(e, t);
					return s && s.decimals ? "1" + "0".repeat(s.decimals) : "1"
				},
				y = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				E = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				j = (e, t) => {
					const s = E(e, t);
					return s && s.walletProvider
				},
				w = (e, t) => {
					const s = j(e, t),
						o = E(e, t);
					return s && s.provider || o && o.provider
				},
				P = (e, t) => {
					const s = w(e, t);
					return s === n.a.Ethereum || s === n.a.Rinkeby
				},
				I = (e, t) => {
					const s = j(e, t),
						o = w(e, t);
					if (s && !s.inTransition && o === n.a.Stellar) return {
						address: s.extra && s.extra.issuerAddress || "",
						decimals: s.extra && s.extra.decimals || 7,
						symbol: s.extra && s.extra.token || "PHOTON"
					};
					const r = s && s.extra && s.extra.contracts,
						a = r && r.unlocked;
					return a && {
						address: a.address,
						symbol: a.token || "",
						decimals: a.decimals || 18,
						image: a.image
					}
				},
				S = (e, t) => {
					let {
						subredditId: s
					} = t;
					const o = j(e, {
						subredditId: s
					});
					return o && o.extra && o.extra.contracts && o.extra.contracts.subscriptions ? o.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				N = (e, t) => {
					const s = E(e, t);
					return !!s && !!s.walletProvider && !s.walletProvider.inTransition
				}
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			const o = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
			}
		}
	}
]);
//# sourceMappingURL=ProfileOverview.98e3b39ead5aa1e857df.js.map