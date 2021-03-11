// https://www.redditstatic.com/desktop2x/Governance~Reddit.6db1d1f4b12da96bc456.js
// Retrieved at 3/11/2021, 2:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit"], {
		"./assets/fonts/NotoMono/font.less": function(e, t, r) {},
		"./node_modules/@r/frames/compiled.js": function(e, t, r) {
			"use strict";
			(function(e) {
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var r = arguments,
					s = ".*",
					n = ".postMessage",
					a = {
						targetOrigin: "*"
					},
					c = /\..+$/;

				function o(e) {
					return new RegExp("\\.(?:" + e.join("|") + ")$")
				}

				function d(e) {
					return new RegExp("^http(s)?:\\/\\/" + e.join("|") + "$", "i")
				}
				var i = [s],
					u = d(i),
					l = [n],
					p = o(l),
					b = {},
					f = !1;

				function y(t, r, s) {
					e.addEventListener ? e.addEventListener(t, r, s) : e.attachEvent && e.attachEvent("on" + t, r)
				}

				function E(t, r) {
					e.removeEventListener ? e.removeEventListener(t, r) : e.detachEvent && e.detachEvent("on" + t, r)
				}

				function m(e) {
					return /\*/.test(e)
				}
				var _ = t.postMessage = function(e, t, r) {
						var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
						c.test(t) || (t += n);
						var o = s;
						Object.keys(a).forEach((function(e) {
							o[e] = a[e]
						})), e.postMessage(JSON.stringify({
							type: t,
							data: r,
							defaultedOptions: o
						}), o.targetOrigin)
					},
					O = t.receiveMessage = function(e, t, r, s) {
						"string" == typeof e && (s = r, r = t, t = e, e = null), s = s || void 0;
						var n = function(t) {
							for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), c = 1; c < n; c++) a[c - 1] = arguments[c];
							e && e !== t.source && e.contentWindow !== t.source || r.apply(s, [t].concat(a))
						};
						return y(t, n), {
							off: function() {
								E(t, n)
							}
						}
					},
					h = (t.receiveMessageOnce = function(e, t, s, n) {
						var a = O(e, t, (function() {
							s && s.apply(void 0, r), a.off()
						}), n);
						return a
					}, t.removePostMessageOrigin = function(e) {
						var t = i.indexOf(e); - 1 !== t && (i.splice(t, 1), u = d(i))
					}),
					I = e.CustomEvent;
				if ("undefined" != typeof window && "function" != typeof I) {
					var S = {
						bubbles: !1,
						cancelable: !1,
						detail: void 0
					};
					(I = function(e, t) {
						t = t || S;
						var r = document.createEvent("CustomEvent");
						return r.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), r
					}).prototype = e.Event.prototype
				}
				t.addPostMessageOrigin = function(e) {
					m(e) ? i = [s] : -1 === i.indexOf(e) && (h(s), i.push(e), u = d(i))
				};

				function g(t) {
					if (t.origin === e.location.origin || u.test(t.origin) || "null" === t.origin) {
						var r = {};
						try {
							r = JSON.parse(t.data)
						} catch (t) {}
						var s = r.type;
						if (p.test(s)) {
							var n = s.split(".", 2)[1];
							if (b[n]) b[n].targets.forEach((function(e) {
								return _(e, s, r.data, r.options)
							}));
							var a = new I(s, {
								detail: r.data
							});
							a.source = t.source, e.dispatchEvent(a)
						}
					}
				}
				var D = t.listen = function(e) {
					-1 === l.indexOf(e) && (l.push(e), p = o(l)), f || (y("message", g), f = !0)
				};
				t.stopListening = function(e) {
					var t = l.indexOf(e); - 1 !== t && (l.splice(t, 1), l.length ? p = o(l) : (E("message", g), f = !1))
				}, t.proxy = function(e, t) {
					D(e), Array.isArray(t) || (t = [t]);
					var r = b[e];
					r ? r.targets = [].concat(r.targets, t) : r = {
						targets: t
					}, b[e] = r
				}
			}).call(this, r("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var r = -1, s = null == e ? 0 : e.length; ++r < s;)
					if (!t(e[r], r, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var r = !0;
				return s(e, (function(e, s, n) {
					return r = !!t(e, s, n)
				})), r
			}
		},
		"./node_modules/lodash/every.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_arrayEvery.js"),
				n = r("./node_modules/lodash/_baseEvery.js"),
				a = r("./node_modules/lodash/_baseIteratee.js"),
				c = r("./node_modules/lodash/isArray.js"),
				o = r("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, r) {
				var d = c(e) ? s : n;
				return r && o(e, t, r) && (t = void 0), d(e, a(t, 3))
			}
		},
		"./node_modules/lodash/isEqualWith.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseIsEqual.js");
			e.exports = function(e, t, r) {
				var n = (r = "function" == typeof r ? r : void 0) ? r(e, t) : void 0;
				return void 0 === n ? s(e, t, void 0, r) : !!n
			}
		},
		"./node_modules/lodash/negate.js": function(e, t) {
			var r = "Expected a function";
			e.exports = function(e) {
				if ("function" != typeof e) throw new TypeError(r);
				return function() {
					var t = arguments;
					switch (t.length) {
						case 0:
							return !e.call(this);
						case 1:
							return !e.call(this, t[0]);
						case 2:
							return !e.call(this, t[0], t[1]);
						case 3:
							return !e.call(this, t[0], t[1], t[2])
					}
					return !e.apply(this, t)
				}
			}
		},
		"./node_modules/lodash/omitBy.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseIteratee.js"),
				n = r("./node_modules/lodash/negate.js"),
				a = r("./node_modules/lodash/pickBy.js");
			e.exports = function(e, t) {
				return a(e, n(s(t)))
			}
		},
		"./node_modules/lodash/union.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseFlatten.js"),
				n = r("./node_modules/lodash/_baseRest.js"),
				a = r("./node_modules/lodash/_baseUniq.js"),
				c = r("./node_modules/lodash/isArrayLikeObject.js"),
				o = n((function(e) {
					return a(s(e, 1, c, !0))
				}));
			e.exports = o
		},
		"./node_modules/lodash/xorWith.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_arrayFilter.js"),
				n = r("./node_modules/lodash/_baseRest.js"),
				a = r("./node_modules/lodash/_baseXor.js"),
				c = r("./node_modules/lodash/isArrayLikeObject.js"),
				o = r("./node_modules/lodash/last.js"),
				d = n((function(e) {
					var t = o(e);
					return t = "function" == typeof t ? t : void 0, a(s(e, c), void 0, t)
				}));
			e.exports = d
		},
		"./node_modules/ts-error/lib/cjs.js": function(e, t, r) {
			"use strict";
			t.__esModule = void 0, t.__esModule = !0;
			var s = r("./node_modules/ts-error/lib/helpers.js"),
				n = s.setPrototypeOf,
				a = s.getPrototypeOf,
				c = s.defineProperty,
				o = s.objectCreate,
				d = "[object Error]" === (new Error).toString(),
				i = "";

			function u(e) {
				var t, r = this.constructor,
					s = r.name || (null === (t = r.toString().match(/^function\s*([^\s(]+)/)) ? i || "Error" : t[1]),
					o = "Error" === s,
					l = o ? i : s,
					p = Error.apply(this, arguments);
				if (n(p, a(this)), !(p instanceof r && p instanceof u)) {
					p = this;
					Error.apply(this, arguments), c(p, "message", {
						configurable: !0,
						enumerable: !1,
						value: e,
						writable: !0
					})
				}
				if (c(p, "name", {
						configurable: !0,
						enumerable: !1,
						value: l,
						writable: !0
					}), Error.captureStackTrace && Error.captureStackTrace(p, o ? u : r), void 0 === p.stack) {
					var b = new Error(e);
					b.name = p.name, p.stack = b.stack
				}
				return d && c(p, "toString", {
					configurable: !0,
					enumerable: !1,
					value: function() {
						return (this.name || "Error") + (void 0 === this.message ? "" : ": " + this.message)
					},
					writable: !0
				}), p
			}
			i = u.name || "ExtendableError", u.prototype = o(Error.prototype, {
				constructor: {
					value: Error,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t.ExtendableError = u, t.default = t.ExtendableError
		},
		"./node_modules/ts-error/lib/helpers.js": function(e, t, r) {
			"use strict";
			t.__esModule = void 0, t.__esModule = !0;
			var s = "function" == typeof Object.setPrototypeOf,
				n = "function" == typeof Object.getPrototypeOf,
				a = "function" == typeof Object.defineProperty,
				c = "function" == typeof Object.create,
				o = "function" == typeof Object.prototype.hasOwnProperty;
			t.setPrototypeOf = function(e, t) {
				s ? Object.setPrototypeOf(e, t) : e.__proto__ = t
			};
			t.getPrototypeOf = function(e) {
				return n ? Object.getPrototypeOf(e) : e.__proto__ || e.prototype
			};
			var d = !1;
			t.defineProperty = function e(t, r, s) {
				if (a && !d) try {
					Object.defineProperty(t, r, s)
				} catch (n) {
					d = !0, e(t, r, s)
				} else t[r] = s.value
			};
			var i = function(e, t) {
				return o ? e.hasOwnProperty(e, t) : void 0 === e[t]
			};
			t.hasOwnProperty = i;
			t.objectCreate = function(e, t) {
				if (c) return Object.create(e, t);
				var r = function() {};
				r.prototype = e;
				var s = new r;
				if (void 0 === t) return s;
				if ("null" == typeof t) throw new Error("PropertyDescriptors must not be null.");
				if ("object" == typeof t)
					for (var n in t) i(t, n) && (s[n] = t[n].value);
				return s
			}
		},
		"./src/graphql/operations/CrowdControlLevelInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"975a7920607d"}')
		},
		"./src/graphql/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
		},
		"./src/graphql/operations/FetchSubredditStreamingModSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"df4f7fe92d1f"}')
		},
		"./src/graphql/operations/GetSubredditChatSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"63d6a697b823"}')
		},
		"./src/graphql/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"00d537d082f7"}')
		},
		"./src/graphql/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"a752c721a60b"}')
		},
		"./src/graphql/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"8dfeb66985eb"}')
		},
		"./src/graphql/operations/SubredditTopContent.json": function(e) {
			e.exports = JSON.parse('{"id":"4787b154b63b"}')
		},
		"./src/graphql/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"8f930296d14d"}')
		},
		"./src/graphql/operations/UpdateSubredditChatSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"bdb05b8c7a65"}')
		},
		"./src/graphql/operations/UpdateSubredditStreamingModSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"1f690708b8b1"}')
		},
		"./src/graphql/operations/UserDataExportEligibility.json": function(e) {
			e.exports = JSON.parse('{"id":"3817c69d7a39"}')
		},
		"./src/graphql/operations/VerifyRecaptchaToken.json": function(e) {
			e.exports = JSON.parse('{"id":"c1242f999b6c"}')
		},
		"./src/lib/asyncActions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = e => `${e}_REQUESTED`,
				a = e => `${e}_SUCCEEDED`,
				c = e => `${e}_FAILED`;

			function o(e) {
				const t = n(e),
					r = a(e),
					o = c(e);
				return {
					requestedActionType: t,
					requested: Object(s.a)(t),
					succeededActionType: r,
					succeeded: Object(s.a)(r),
					failedActionType: o,
					failed: Object(s.a)(o)
				}
			}
			var d;
			! function(e) {
				e[e.New = 0] = "New", e[e.Pending = 1] = "Pending", e[e.Succeeded = 2] = "Succeeded", e[e.Failed = 3] = "Failed"
			}(d || (d = {}));
			const i = (e, t, r) => (s = d.New, n) => {
				switch (n.type) {
					case e:
						return s === d.New ? d.Pending : s;
					case t:
						return s === d.Pending ? d.Succeeded : s;
					case r:
						return s === d.Pending ? d.Failed : s;
					default:
						return s
				}
			}
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = "custom"
		},
		"./src/lib/forceHttps/index.ts": function(e, t, r) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/makeLinkedPostsListingKey/index.ts": function(e, t, r) {
			"use strict";
			t.a = e => {
				return `linkedPosts--[post:'${e}']`
			}
		},
		"./src/lib/makePostDraftPageKey/index.ts": function(e, t, r) {
			"use strict";

			function s(e) {
				let t = "PostDraftPage";
				return e.draftId && (t += `--[draftId:${e.draftId}]`), t
			}
			r.d(t, "a", (function() {
				return s
			}))
		},
		"./src/lib/makeProductOfferKey/index.ts": function(e, t, r) {
			"use strict";

			function s(e, t) {
				return `${e}_${t}`
			}
			r.d(t, "a", (function() {
				return s
			}))
		},
		"./src/lib/omitKey/index.ts": function(e, t, r) {
			"use strict";

			function s(e, t) {
				if (t in e) {
					const {
						[t]: r, ...s
					} = e;
					return s
				}
				return e
			}
			r.d(t, "a", (function() {
				return s
			}))
		},
		"./src/lib/reCaptchaEnterprise/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			}));
			r("./src/lib/reCaptchaEnterprise/reCaptcha.css");
			var s = r("./src/config.ts"),
				n = r("./src/reddit/helpers/loadThirdPartyScript.ts");
			const a = e => "object" == typeof e && null !== e,
				c = () => "undefined" != typeof window && a(window) && a(window.grecaptcha) && a(window.grecaptcha.enterprise),
				o = () => c() ? window.grecaptcha.enterprise : void 0,
				d = e => `https://www.google.com/recaptcha/enterprise.js?render=${e}`,
				i = e => Object(n.a)(d(e), c),
				u = e => new Promise(t => e.ready(t));
			var l, p = r("./node_modules/ts-error/lib/cjs.js"),
				b = r.n(p);
			class MissingReCaptchaEnterpriseSiteKeyError_MissingReCaptchaEnterpriseSiteKeyError extends b.a {
				constructor() {
					super("reCaptcha Enterprise site key is not set")
				}
			}
			class ReCaptchaEnterpriseClientIsNotReadyError_ReCaptchaEnterpriseClientIsNotReadyError extends b.a {
				constructor() {
					super("reCaptcha Enterprise client is not ready")
				}
			}
			class ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError extends b.a {
				constructor() {
					super("reCaptcha Enterprise client is not available")
				}
			}! function(e) {
				e.PageLoad = "PAGE_LOAD"
			}(l || (l = {}));
			var f = l;
			const y = new class {
				constructor(e = s.a.reCaptchaEnterprise.siteKey, t) {
					this.siteKey = e, this.isReady = !1, this.hasSiteKey = () => !!this.siteKey, this.hasClient = () => !!this.instance, this.setInstance = e => {
						e && (this.instance = e, this.isReady = !1)
					}, this.scriptUrl = () => d(this.siteKey), this.ensureSiteKey = () => {
						if (!this.hasSiteKey) throw new MissingReCaptchaEnterpriseSiteKeyError_MissingReCaptchaEnterpriseSiteKeyError
					}, this.ensureClient = () => {
						const e = this.instance;
						if (!e) throw new ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError;
						return e
					}, this.waitUntilClientIsReady = async () => {
						const e = this.ensureClient();
						return await u(e), this.isReady = !0, e
					}, this.ensureClientIsReady = () => {
						const e = this.ensureClient();
						if (!this.isReady) throw new ReCaptchaEnterpriseClientIsNotReadyError_ReCaptchaEnterpriseClientIsNotReadyError;
						return e
					}, this.loadScript = async (e = !1) => {
						if (!this.instance || e) {
							this.ensureSiteKey(), await i(this.siteKey);
							const e = o();
							if (!e) throw new ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError;
							this.setInstance(e)
						}
						this.isReady || await this.waitUntilClientIsReady()
					}, this.execute = async e => {
						this.ensureSiteKey();
						const t = this.ensureClientIsReady(),
							r = await t.execute(this.siteKey, e);
						if (e.fast) {
							return JSON.parse(r)[1]
						}
						return r
					}, this.setInstance(t || o())
				}
			};
			t.b = y
		},
		"./src/lib/reCaptchaEnterprise/reCaptcha.css": function(e, t, r) {},
		"./src/reddit/actions/apiRequestHeaders.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "API_REQUEST_HEADERS__set";
			Object(s.a)(n)
		},
		"./src/reddit/actions/authorFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "IN_CONTEXT_AUTHOR_FLAIR_UPDATED",
				a = Object(s.a)(n)
		},
		"./src/reddit/actions/badge.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "i", (function() {
				return p
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "h", (function() {
				return f
			})), r.d(t, "j", (function() {
				return y
			})), r.d(t, "k", (function() {
				return D
			})), r.d(t, "l", (function() {
				return T
			})), r.d(t, "m", (function() {
				return v
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/governance/errorToast.ts"),
				a = r("./src/reddit/endpoints/governance/badges.ts");
			const c = "BADGE__BADGE_MODAL_OPENED",
				o = "BADGE__BADGE_APPLICATION_SUCCESS",
				d = "BADGE__BADGE_APPLICATION_FAILURE",
				i = "BADGE__SUBREDDIT_BADGES_FETCH_SUCCESS",
				u = "BADGE__SUBREDDIT_BADGES_FETCH_FAILURE",
				l = "BADGE__SUBREDDIT_BADGES_FETCH_PENDING",
				p = "BADGE__USER_BADGES_FETCH_SUCCESS",
				b = "BADGE__USER_BADGES_FETCH_FAILURE",
				f = "BADGE__USER_BADGES_FETCH_PENDING",
				y = Object(s.a)(c),
				E = Object(s.a)(o),
				m = Object(s.a)(d),
				_ = (Object(s.a)("BADGE__BADGE_APPLICATION_PENDING"), Object(s.a)(i)),
				O = Object(s.a)(u),
				h = Object(s.a)(l),
				I = Object(s.a)(p),
				S = Object(s.a)(b),
				g = Object(s.a)(f),
				D = ({
					badgeIds: e,
					subredditId: t
				}) => async (r, s, {
					apiContext: c
				}) => {
					const o = s(),
						d = o.user.account;
					if (d) {
						const s = (o.users.appliedBadges[d.id] || {})[t] || [],
							i = e.length ? e[0] : s[0],
							u = !!e.length;
						r(E({
							badgeIds: e,
							subredditId: t,
							userId: d.id
						}));
						const l = await Object(a.a)(c(), t, i, u);
						l.ok || (r(m({
							badgeIds: e,
							subredditId: t,
							error: l.error,
							previousBadgeIds: s,
							userId: d.id
						})), Object(n.a)(r, l.error))
					}
				}, T = ({
					subredditId: e,
					userIds: t
				}) => async (r, s, {
					apiContext: n
				}) => {
					r(h({
						subredditId: e
					}));
					const c = await Object(a.b)(n(), e, t);
					c.ok ? r(_({
						...c.body,
						subredditId: e
					})) : r(O({
						subredditId: e,
						error: c.error
					}))
				}, v = ({
					subredditId: e
				}) => async (t, r, {
					apiContext: s
				}) => {
					const n = r().user.account;
					if (n) {
						t(g({
							subredditId: e
						}));
						const r = await Object(a.c)(s(), e, n.id);
						r.ok ? t(I({
							...r.body,
							subredditId: e
						})) : t(S({
							subredditId: e,
							error: r.error
						}))
					}
				}
		},
		"./src/reddit/actions/blockedRedditors.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "h", (function() {
				return f
			})), r.d(t, "g", (function() {
				return _
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/graphql/operations/FetchBlockedRedditorsInfo.json"),
				a = r("./src/lib/makeGqlRequest/index.ts");
			const c = (e, t) => Object(a.a)(e, {
				...n,
				variables: t
			}, {
				traceRequestName: "get_blocked_redditors_info"
			});
			var o = r("./src/reddit/selectors/blockedRedditors.ts");
			const d = "BLOCKED_REDDITORS_LIST__ADD",
				i = "BLOCKED_REDDITORS_LIST__REMOVE",
				u = "BLOCKED_REDDITORS_LIST__FAILED",
				l = "BLOCKED_REDDITORS_LIST__LOADED",
				p = "BLOCKED_REDDITORS_LIST__PENDING",
				b = Object(s.a)(d),
				f = Object(s.a)(i),
				y = Object(s.a)(u),
				E = Object(s.a)(l),
				m = Object(s.a)(p),
				_ = () => async (e, t, {
					gqlContext: r
				}) => {
					const s = t(),
						n = Object(o.a)(s);
					if (Object(o.b)(s) || n.timestamp && Date.now() - n.timestamp < 36e6) return;
					let a = !1,
						d = "";
					do {
						e(m());
						const t = {
								after: d,
								pageSize: 100
							},
							s = await c(r(), t);
						if (s && s.ok) {
							const {
								data: {
									identity: t
								}
							} = s.body;
							if (t && t.blockedRedditorsInfo) {
								const {
									pageInfo: r,
									edges: s
								} = t.blockedRedditorsInfo;
								if (e(E(s.map(e => e.node.id))), r) {
									const {
										hasNextPage: e,
										endCursor: t
									} = r;
									a = e, d = t || ""
								}
							} else a = !1
						} else {
							a = !1;
							const t = s.error ? s.error.type : "unknown error";
							e(y({
								message: t
							}))
						}
					} while (a)
				}
		},
		"./src/reddit/actions/chat/constants.ts": function(e, t, r) {
			"use strict";
			var s;
			r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.anybody = "Everyone", e.account_age_30_days = "Accounts older than 30 days", e.nobody = "Nobody"
				}(s || (s = {}))
		},
		"./src/reddit/actions/chat/userSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "c", (function() {
				return S
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/config.ts"),
				o = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				u = r("./src/reddit/constants/headers.ts");
			var l = r("./src/reddit/selectors/telemetry.ts");
			var p = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/telemetry/index.ts"),
				f = r("./src/reddit/actions/chat/constants.ts");
			const y = Object(n.a)("USER_SETTINGS__FETCH_PENDING"),
				E = Object(n.a)("USER_SETTINGS__FETCH_FAILURE"),
				m = "USER_SETTINGS__UPDATE_SUCCESS",
				_ = Object(n.a)(m),
				O = () => async (e, t, {
					apiContext: r
				}) => {
					e(y());
					const s = await (e => Object(d.a)(Object(i.a)(e, [u.a]), {
						endpoint: `${c.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
						method: o.cb.GET
					}))(r());
					if (s.ok) {
						const t = {
							...s.body
						};
						e(_({
							invitePolicy: f.a[t.invite_policy]
						}))
					} else e(E(s.error))
				}, h = Object(n.a)("USER_SETTINGS__SAVE_PENDING"), I = Object(n.a)("USER_SETTINGS__SAVE_FAILURE"), S = e => async (t, r, {
					apiContext: n
				}) => {
					const y = r(),
						{
							invitePolicy: E
						} = e,
						m = Object.keys(f.a).find(e => f.a[e] === E);
					if (m) {
						t(h());
						const e = await (async (e, t) => Object(d.a)(Object(i.a)(t, [u.a]), {
							endpoint: `${c.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
							method: o.cb.PUT,
							data: JSON.stringify({
								invite_policy: e
							})
						}))(m, n());
						if (Object(b.a)((e => t => ({
								source: "settings_privacy",
								action: "save",
								noun: "receive_chat_invites",
								setting: {
									value: e,
									oldValue: e
								},
								...Object(l.defaults)(t)
							}))(m)(y)), e.ok) {
							const e = f.a[m];
							t(_({
								invitePolicy: e
							})), t(Object(a.e)({
								kind: p.b.SuccessCommunity,
								text: s.fbt._("Changes saved", null, {
									hk: "4eTtdy"
								})
							}))
						} else t(I(e.error))
					}
				}
		},
		"./src/reddit/actions/claimgold.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return y
			})), r.d(t, "d", (function() {
				return E
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "g", (function() {
				return h
			})), r.d(t, "j", (function() {
				return I
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "c", (function() {
				return D
			})), r.d(t, "a", (function() {
				return T
			})), r.d(t, "h", (function() {
				return v
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/models/Toast/index.ts"),
				o = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				u = r("./src/reddit/constants/headers.ts"),
				l = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			var p = async (e, t) => {
				const {
					code: r
				} = t, s = {
					api_type: "json",
					code: r,
					raw_json: 1
				};
				return Object(d.a)(Object(i.a)(e, [u.a]), {
					method: o.cb.POST,
					endpoint: `${e.apiUrl}/api/claimgold`,
					data: s
				}).then(e => e.ok ? {
					...e
				} : {
					...e,
					error: Object(l.a)(e)
				})
			}, b = r("./src/reddit/helpers/genericServerError/index.ts"), f = r("./src/reddit/selectors/claimgold.ts");
			const y = "CLAIMGOLD__OPEN_CLAIMGOLD_MODAL",
				E = "CLAIMGOLD__CLOSE_CLAIMGOLD_MODAL",
				m = Object(n.a)(y),
				_ = Object(n.a)(E),
				O = () => async (e, t) => {
					const r = t();
					Object(f.b)(r) ? e(_()) : e(m())
				}, h = "CLAIMGOLD_UPDATE_CODE", I = Object(n.a)(h), S = "CLAIM_GOLD__TRIGGER_LOADER", g = "CLAIM_GOLD__CLAIM_GOLD_PENDING", D = "CLAIM_GOLD__CLAIM_GOLD_SUCCESSFUL", T = "CLAIM_GOLD__CLAIM_GOLD_FAILED", v = () => async (e, t, {
					apiContext: r
				}) => {
					const s = {
						code: t().claimGold.code
					};
					e(w());
					try {
						const t = await p(r(), s);
						t.error ? e(R(t)) : e(L())
					} catch (n) {
						e(R(n))
					}
				}, A = Object(n.a)(S), j = Object(n.a)(g), w = () => async (e, t) => {
					e(j()), window.setTimeout(() => {
						t().claimGold.api.pending && e(A())
					}, 2e3)
				}, C = Object(n.a)(T), R = e => async (t, r) => {
					await t(C({
						...e,
						error: e.error || Object(b.a)()
					}));
					const s = r().claimGold.api.error;
					s && t(Object(a.e)({
						kind: c.b.Error,
						duration: a.a,
						text: s
					}))
				}, P = Object(n.a)(D), L = () => async (e, t) => {
					e(P()), e(Object(a.e)({
						kind: c.b.SuccessCommunity,
						text: s.fbt._("You have redeemed your gift code successfully", null, {
							hk: "18mkH2"
						})
					}))
				}
		},
		"./src/reddit/actions/comment/list.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return i
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/helpers/trackers/commentList.ts");
			const a = "COMMENTLIST__MARKED_END",
				c = "COMMENTLIST__UNMARKED_END",
				o = Object(s.a)(a),
				d = Object(s.a)(c),
				i = (e, t) => async (r, s) => {
					const a = s();
					e in a.profileCommentsPage.fetchedTokens ? e in a.profileCommentsPage.commentIds ? r(d({
						listingKey: e
					})) : Object(n.a)(a, e) : r(o({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/commentsListTruncated/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			const s = "COMMENTS_LIST__EXPANDED",
				n = "COMMENTS_LIST__TRUNCATED"
		},
		"./src/reddit/actions/dismissedTruncationList/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = "DISMISSED_TRUNCATION_LIST__ADD_SUBREDDIT_ID"
		},
		"./src/reddit/actions/economics/banners/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			}));
			const s = "ECONOMICS__BANNERS__DISMISSED_BANNERS_PENDING",
				n = "ECONOMICS__BANNERS__DISMISSED_BANNERS_UPDATED",
				a = "ECONOMICS__BANNERS__BANNER_DISMISSED",
				c = "ECONOMICS__BANNERS__BANNER_UNDISMISSED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			}));
			const s = "ECONOMICS__ME__ME_DATA_SUCCESS",
				n = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				a = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "e", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return o
			}));
			const s = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				n = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				c = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/powerups/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			const s = 120,
				n = "ON_CREATE_CUSTOM_EMOJI_SUCCESS"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "i", (function() {
				return l
			}));
			const s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "c", (function() {
				return o
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "EMBEDS__UNLOADABLE",
				a = "EMBEDS__LOADABLE",
				c = Object(s.a)(n),
				o = Object(s.a)(a)
		},
		"./src/reddit/actions/emoji.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return g
			})), r.d(t, "d", (function() {
				return T
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "h", (function() {
				return w
			})), r.d(t, "g", (function() {
				return C
			})), r.d(t, "f", (function() {
				return R
			})), r.d(t, "a", (function() {
				return k
			})), r.d(t, "q", (function() {
				return M
			})), r.d(t, "p", (function() {
				return G
			})), r.d(t, "l", (function() {
				return B
			})), r.d(t, "m", (function() {
				return q
			})), r.d(t, "j", (function() {
				return H
			})), r.d(t, "k", (function() {
				return K
			})), r.d(t, "b", (function() {
				return V
			})), r.d(t, "n", (function() {
				return Y
			})), r.d(t, "e", (function() {
				return $
			})), r.d(t, "o", (function() {
				return X
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/forEach.js"),
				a = r.n(n),
				c = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/lib/uploadToS3/index.ts"),
				u = r("./src/reddit/constants/headers.ts");
			const l = async (e, t) => Object(o.a)(Object(d.a)(e, [u.a]), {
				endpoint: `${e.apiUrl}/api/v1/${t}/emojis/all`,
				method: c.cb.GET,
				type: "json"
			}).then(e => (e.ok && (e.body = (e => {
				let t;
				const r = a()(e, (e, r) => ("snoomojis" !== r && (t = r), a()(e, (t, r) => {
					e[r] = {
						name: r,
						userFlairAllowed: t.user_flair_allowed,
						postFlairAllowed: t.post_flair_allowed,
						modFlairOnly: t.mod_flair_only,
						url: t.url
					}
				})));
				return {
					[t]: {
						emojis: r[t],
						snoomojis: r.snoomojis
					}
				}
			})(e.body)), e));
			var p = r("./src/lib/makeActionCreator/index.ts"),
				b = r("./src/reddit/actions/imageUploads.ts"),
				f = r("./src/reddit/actions/toaster.ts"),
				y = r("./src/reddit/helpers/getGenericUploadError.ts"),
				E = r("./src/reddit/helpers/getS3KeyFromUrl/index.ts"),
				m = r("./src/reddit/helpers/media/index.ts"),
				_ = r("./src/reddit/models/Emoji/index.ts"),
				O = r("./src/reddit/models/Image/index.tsx"),
				h = r("./src/reddit/models/Toast/index.ts"),
				I = r("./src/reddit/selectors/emojis.ts"),
				S = r("./src/reddit/selectors/subreddit.ts");
			const g = "STRUCTURED_STYLES__NEW_EMOJI_ADDED",
				D = Object(p.a)(g),
				T = "STRUCTURED_STYLES__EMOJI_DELETE_LOADED",
				v = "STRUCTURED_STYLES__EMOJI_DELETE_FAILED",
				A = Object(p.a)(T),
				j = Object(p.a)(v),
				w = "GET_ALL_EMOJIS_PENDING",
				C = "GET_ALL_EMOJIS_LOADED",
				R = "GET_ALL_EMOJIS_FAILED",
				P = Object(p.a)(w),
				L = Object(p.a)(C),
				N = Object(p.a)(R),
				k = "STRUCTURED_STYLES__EMOJIS_ENABLED_SETTING_LOADED",
				U = Object(p.a)(k),
				x = e => ({
					text: s.fbt._("Failed to save emoji", null, {
						hk: "3i6FC2"
					}),
					buttonText: s.fbt._("Retry", null, {
						hk: "1XMjgA"
					}),
					buttonAction: G(e)
				}),
				M = ({
					imageData: e,
					subredditId: t
				}) => async (r, s, n) => {
					const a = s(),
						l = Object(S.T)(a, {
							subredditId: t
						}).name;
					r(Object(b.k)(e));
					const p = e.file,
						f = await Object(m.g)(p),
						y = await (async (e, t, r, s) => Object(o.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/emoji_asset_upload_s3.json`,
							method: c.cb.POST,
							data: {
								filepath: r,
								mimetype: s
							}
						}))(n.apiContext(), l, p.name, f);
					let E = !1;
					if (y.ok) {
						const t = await (async (e, t, r) => Object(i.a)(r, t))(n.apiContext(), y.body.s3UploadLease, p);
						if (t.ok) {
							if (!s().imageUploads[e.id]) return Object(O.d)(e), !1;
							const n = decodeURIComponent(t.body.PostResponse.Location),
								a = y.body.websocketUrl,
								c = Object(O.n)(e, n, a);
							r(Object(b.j)(c)), E = !0
						} else {
							const s = Object(O.k)(e, t.error);
							r(Object(b.i)(s))
						}
					} else {
						const t = Object(O.k)(e, y.error);
						r(Object(b.i)(t))
					}
					return E
				}, F = (e, t) => async (r, s, n) => {
					const {
						imageData: a,
						subredditId: i,
						emojiName: l,
						settings: p
					} = e, y = Object(E.a)(a.url), m = s(), _ = Object(S.T)(m, {
						subredditId: i
					}).name, h = await (async (e, t, r, s, n) => Object(o.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji.json`,
						method: c.cb.POST,
						data: {
							s3_key: r,
							name: s,
							mod_flair_only: n.modFlairOnly,
							post_flair_allowed: n.postFlairAllowed,
							user_flair_allowed: n.userFlairAllowed
						}
					}))(n.apiContext(), _, y, l, p);
					if (!h.ok) {
						const s = Object(O.k)(a, h.error);
						r(Object(b.i)(s)), r(Object(f.e)(x(e))), t && t.close()
					}
					return h.ok
				}, G = e => async (t, r, s) => {
					const {
						imageData: n,
						subredditId: a,
						emojiName: c,
						settings: o
					} = e;
					if (t(Object(b.k)(n)), !n.websocketUrl) return t(Object(f.e)({
						text: "Could not upload emoji"
					}));
					let d;
					const i = new WebSocket(n.websocketUrl);
					return i.onopen = async () => {
						d = await F(e, i)(t, r, s)
					}, i.onmessage = r => {
						const s = JSON.parse(r.data);
						if ("success" === s.type) {
							d = !0;
							const e = s.payload.emoji_url,
								r = Object(O.o)(n, e);
							t(Object(b.l)(r));
							const i = Object(_.e)(c, r.url, a, o);
							t(D(i)), t(B(a))
						} else {
							const r = Object(y.a)(c),
								s = Object(O.k)(n, r);
							t(Object(b.i)(s)), t(Object(f.e)(x(e)))
						}
						i.close()
					}, i.onerror = r => {
						d = !1;
						const s = Object(y.a)(c),
							a = Object(O.k)(n, s);
						t(Object(b.i)(a)), t(Object(f.e)(x(e))), i.close()
					}, d
				}, B = e => async (t, r, {
					apiContext: s
				}) => {
					const n = r();
					if (Object(I.a)(n, e)) return;
					const a = Object(S.T)(n, {
						subredditId: e
					}).name;
					t(P(e));
					const c = await l(s(), a);
					if (c.ok) {
						const r = c.body;
						t(L({
							subredditId: e,
							data: r
						}))
					} else t(N({
						subredditId: e,
						error: c.error
					}))
				}, q = e => async (t, r, {
					apiContext: s
				}) => {
					r().emojis[e] || await t(B(e))
				}, H = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const i = n(),
						l = Object(S.T)(i, {
							subredditId: t
						}).name,
						p = await (async (e, t, r) => Object(o.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/v1/${r}/emoji/${t}`,
							method: c.cb.DELETE,
							type: "json"
						}))(a(), e, l);
					if (p.ok) {
						r(A({
							emojiName: e,
							subredditId: t
						})), r(f.e({
							kind: h.b.SuccessCommunityGreen,
							text: s.fbt._("Emoji successfully deleted", null, {
								hk: "1zMXEe"
							})
						}))
					} else r(j(p.error)), r(f.e({
						kind: h.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, K = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const i = n(),
						l = Object(S.T)(i, {
							subredditId: e
						}).name;
					if ((await (async (e, t, r) => Object(o.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/enable_emojis_in_sr.json`,
							method: c.cb.POST,
							data: {
								subreddit: t,
								enable: r
							}
						}))(a(), l, t)).ok) {
						r(U({
							subredditId: e,
							emojisEnabled: t
						}))
					} else r(f.e({
						kind: h.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, V = "EMOJI_CUSTOM_SIZE_UPDATED", W = Object(p.a)(V), Y = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const i = n(),
						l = Object(S.T)(i, {
							subredditId: e
						}).name;
					(await (async (e, t, r) => Object(o.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji_custom_size`,
						method: c.cb.POST,
						data: r
					}))(a(), l, t)).ok ? r(W({
						subredditId: e,
						emojiCustomSize: t
					})) : r(f.e({
						kind: h.b.Error,
						text: s.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}, $ = "EMOJI_PERMISSIONS_UPDATED", Q = Object(p.a)($), X = (e, t, r, n) => async (a, i, {
					apiContext: l
				}) => {
					const p = i(),
						b = Object(S.T)(p, {
							subredditId: n
						}).name;
					(await (async (e, t, r, s) => Object(o.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${r}/emoji_permissions.json`,
						method: c.cb.POST,
						data: {
							name: t,
							post_flair_allowed: s.postFlairAllowed,
							user_flair_allowed: s.userFlairAllowed,
							mod_flair_only: s.modFlairOnly
						}
					}))(l(), e, b, r)).ok ? (a(Q({
						emojiName: e,
						isSnoomoji: t,
						settings: r,
						subredditId: n
					})), a(f.e({
						kind: h.b.SuccessCommunityGreen,
						text: s.fbt._("Emoji permissions updated", null, {
							hk: "4b2RIU"
						})
					}))) : a(f.e({
						kind: h.b.Error,
						text: s.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			}));
			const s = "MOD_PAGE_EVENT_POSTS_LOADED",
				n = "MOD_PAGE_EVENT_POSTS_FAILED",
				a = "MOD_PAGE_EVENT_POSTS_PENDING",
				c = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				o = "START_EVENT_NOW_SUCCESS",
				d = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/experiments.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			r("./src/reddit/endpoints/user/index.ts"), r("./src/reddit/models/Post/index.ts"), r("./src/reddit/selectors/telemetry.ts");
			const n = "EXPERIMENTS__REQUEST_LOADED",
				a = (Object(s.a)("EXPERIMENTS__REQUEST_PENDING"), Object(s.a)("EXPERIMENTS__REQUEST_FAILED"), Object(s.a)(n), "EXPERIMENTS__SET_EXPERIMENT_OVERRIDE"),
				c = Object(s.a)(a)
		},
		"./src/reddit/actions/exportImportStyles.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return l
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "a", (function() {
				return b
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "e", (function() {
				return I
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/loadWithRetries/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/actions/structuredStyles/index.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/models/StructuredStyles/index.ts"),
				i = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/selectors/subreddit.ts");
			const l = "STRUCTURED_STYLES__EXPORT_THEME_PENDING",
				p = "STRUCTURED_STYLES__EXPORT_THEME_LOADED",
				b = "STRUCTURED_STYLES__EXPORT_THEME_FAILED",
				f = Object(a.a)(l),
				y = Object(a.a)(p),
				E = Object(a.a)(b),
				m = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_PENDING"),
				_ = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_LOADED"),
				O = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_FAILED"),
				h = e => async (t, a) => {
					t(f());
					const c = a(),
						d = Object(u.T)(c, {
							subredditId: e
						}).name,
						l = c.structuredStyles.models[e],
						p = await Object(n.a)(() => Promise.all([r.e("vendors~ExportTheme~ImportTheme"), r.e("ExportTheme")]).then(r.bind(null, "./src/reddit/helpers/exportTheme/index.ts"))).then(e => e.default),
						b = await p(l, d);
					b.ok ? (t(y()), t(Object(o.e)({
						kind: i.b.SuccessMod,
						text: s.fbt._("Theme successfully exported", null, {
							hk: "24KHqI"
						})
					}))) : (t(E(b.error)), t(Object(o.e)({
						kind: i.b.Error,
						text: s.fbt._("Sorry, theme failed to export", null, {
							hk: "2MC4jC"
						})
					})))
				}, I = e => async (t, a) => {
					t(m());
					const u = await Object(n.a)(() => Promise.all([r.e("vendors~ExportTheme~ImportTheme"), r.e("ImportTheme")]).then(r.bind(null, "./src/reddit/helpers/importTheme/index.ts"))).then(e => e.default),
						l = await u(e);
					l.ok ? (t(_()), t(Object(o.e)({
						kind: i.b.SuccessMod,
						text: s.fbt._("Theme successfully imported", null, {
							hk: "42FErS"
						})
					})), 0 !== Object.keys(l.attributes).length && t(Object(c.d)(Object(d.j)(l.attributes)))) : (t(O(l.error)), t(Object(o.e)({
						kind: i.b.Error,
						text: s.fbt._("Sorry, theme failed to import", null, {
							hk: "4BqW32"
						})
					})))
				}
		},
		"./src/reddit/actions/flairManagement/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			const s = "FLAIR_PREVIEW_EXAMPLE_POST_CREATED",
				n = "FLAIR_PREVIEW_EXAMPLE_POST_DELETED"
		},
		"./src/reddit/actions/googleOneTap/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "d", (function() {
				return f
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/login.ts"),
				a = r("./src/reddit/constants/experiments.ts"),
				c = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/activeModalId.ts"),
				d = r("./src/reddit/selectors/experiments/googleOneTap.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const u = "GOOGLE_ONE_TAP_ENABLED",
				l = Object(s.a)(u),
				p = () => async (e, t) => {
					const r = t(),
						s = Object(i.K)(r),
						n = Object(d.b)(r);
					s && Object(d.d)(n) && e(l())
				}, b = () => async (e, t) => {
					const r = t(),
						s = Object(i.K)(r),
						a = Object(d.b)(r),
						c = !!Object(o.a)(r);
					s || c || !Object(d.e)(a) && !Object(d.d)(a) || e(Object(n.e)())
				}, f = e => {
					Object(c.d)(e, {
						experimentName: a.N
					})
				}
		},
		"./src/reddit/actions/googleQASchema/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__LOADED",
				n = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__FAILED"
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "i", (function() {
				return l
			})), r.d(t, "j", (function() {
				return p
			})), r.d(t, "k", (function() {
				return b
			})), r.d(t, "l", (function() {
				return f
			})), r.d(t, "m", (function() {
				return y
			})), r.d(t, "n", (function() {
				return E
			})), r.d(t, "o", (function() {
				return m
			})), r.d(t, "p", (function() {
				return _
			})), r.d(t, "q", (function() {
				return O
			})), r.d(t, "r", (function() {
				return h
			})), r.d(t, "s", (function() {
				return I
			})), r.d(t, "t", (function() {
				return S
			})), r.d(t, "u", (function() {
				return g
			})), r.d(t, "v", (function() {
				return D
			})), r.d(t, "w", (function() {
				return T
			})), r.d(t, "x", (function() {
				return v
			}));
			const s = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				n = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				a = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				c = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				o = "POLL_VOTE_SUCCESS",
				d = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				i = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				u = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				l = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				p = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				b = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				y = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				E = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				m = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				_ = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				O = "GOVERNANCE__TRANSFER_FAILURE",
				h = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				I = "GOVERNANCE__TRANSFER_PENDING",
				S = "GOVERNANCE__TRANSFER_SUCCESS",
				g = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				D = "GOVERNANCE__WALLETS_FETCH_PENDING",
				T = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				v = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./src/reddit/actions/toaster.ts"),
				n = r("./src/reddit/helpers/governanceErrorText/index.ts"),
				a = r("./src/reddit/models/Toast/index.ts");

			function c(e, t) {
				e(Object(s.e)({
					duration: 5e3,
					kind: a.b.Error,
					text: Object(n.a)(t)
				}))
			}
		},
		"./src/reddit/actions/harbergerTax/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "e", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "i", (function() {
				return l
			})), r.d(t, "j", (function() {
				return p
			}));
			const s = "HARBERGER_TAX__BANNER_MANAGE_MODAL_OPENED",
				n = "HARBERGER_TAX__BANNER_PURCHASE_MODAL_OPENED",
				a = "HARBERGER_TAX__BANNER_CRYPTO_MANAGE_MODAL_OPENED",
				c = "HARBERGER_TAX__BANNER_CRYPTO_PURCHASE_MODAL_OPENED",
				o = "HARBERGER_TAX__BANNER_PURCHASE_FAILURE",
				d = "HARBERGER_TAX__BANNER_PURCHASE_PENDING",
				i = "HARBERGER_TAX__BANNER_PURCHASE_SUCCESS",
				u = "HARBERGER_TAX__BANNER_UPDATE_FAILURE",
				l = "HARBERGER_TAX__BANNER_UPDATE_PENDING",
				p = "HARBERGER_TAX__BANNER_UPDATE_SUCCESS"
		},
		"./src/reddit/actions/imageOCRAltText/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = "IMAGE_OCR_ALT_TEXT__LOADED",
				n = "IMAGE_OCR_ALT_TEXT__FAILED"
		},
		"./src/reddit/actions/inFeedChaining.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return h
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "c", (function() {
				return D
			})), r.d(t, "a", (function() {
				return T
			})), r.d(t, "e", (function() {
				return A
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/telemetry/index.ts"),
				a = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/makeListingKey/index.ts"),
				d = r("./src/reddit/actions/discoveryUnit.ts"),
				i = r("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				u = r("./src/reddit/actions/subreddit/subredditPosts.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				p = r("./src/reddit/constants/inFeedChaining.ts"),
				b = r("./src/reddit/constants/page.ts"),
				f = r("./src/reddit/helpers/localStorage/index.ts"),
				y = r("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				E = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/selectors/inFeedChaining.ts"),
				_ = r("./src/reddit/selectors/posts.ts"),
				O = r("./src/reddit/selectors/subreddit.ts");
			const h = "FEED_CHAINING__CHAIN_LOADED",
				I = Object(c.a)(h),
				S = e => {
					const t = Date.now() - e,
						r = Object(f.y)();
					return Object.keys(r).filter(e => r[e].when >= t).map(e => r[e])
				},
				g = ({
					listingName: e,
					listingKey: t,
					postId: r
				}) => async (s, c, l) => {
					if (!r) return;
					const E = Object(_.P)(c(), {
						postId: r
					});
					if (!E) return;
					const h = E.name.toLowerCase(),
						g = e === h;
					if (!(e === b.f || e === b.b || g)) return;
					if (g) return void j(E, t, r)(s, c, l);
					0 === S(a.hb).length && Object(f.qb)(!1);
					let D = c();
					if (Object(m.d)(D, {
							listingKey: t,
							postId: r
						}) || Object(m.a)(D).length >= p.a || Object(f.K)() || S(a.x).length >= p.a) return;
					const T = Object(_.t)(D, {
						listingKey: t,
						postId: r
					});
					if (T && T.isSponsored) return;
					await s(Object(d.g)()), D = c();
					const v = Object(m.b)(D, {
						listingName: e
					});
					if (!v) return;
					if (!E || Object(m.e)(D, {
							subredditId: E.id
						}) || (e => {
							return S(a.x).some(t => t.subredditId === e)
						})(E.id)) return;
					const A = {
						subredditIds: [E.id],
						count: p.b
					};
					await s(Object(i.b)(A));
					const w = Object(i.a)(A);
					D = c();
					const C = Object(O.v)(D, {
						key: w
					});
					0 !== C.length ? (await s((e => async (t, r) => {
						const s = a.Ub.DAY.toUpperCase(),
							n = e.filter(e => {
								const t = Object(o.a)(e, a.P.TOP, {
										t: s
									}),
									n = r();
								return 0 === Object(_.w)(n, {
									listingKey: t
								}).length
							});
						await t(Object(u.b)({
							first: 1,
							range: s,
							sort: a.I.TOP,
							subredditNames: n
						}))
					})(C.map(e => e.name))), D = c(), Object(m.f)(D, {
						postId: r
					}).length < p.c ? Object(n.a)(Object(y.c)(v, "other", E)(D)) : (Object(f.a)(r, E.id), Object(n.a)(Object(y.d)(v, E)(D)), s(I({
						listingKey: t,
						postId: r
					})))) : Object(n.a)(Object(y.c)(v, "no_chaining", E)(D))
				}, D = "FEED_CHAINING__CHAIN_TOGGLED", T = (Object(c.a)(D), "FEED_CHAINING__CHAINING_TOGGLED"), v = Object(c.a)(T), A = () => async e => {
					Object(f.qb)(!0), e(v({
						isDismissed: !0
					})), e(Object(l.e)(Object(l.d)(s.fbt._("You'll see this less often.", null, {
						hk: "38LGcQ"
					}), E.b.Undo, s.fbt._("Undo", null, {
						hk: "4zFGDk"
					}), async () => {
						Object(f.qb)(!1), e(v({
							isDismissed: !1
						}))
					})))
				}, j = (e, t, r) => async (e, t, r) => {}
		},
		"./src/reddit/actions/isTrackingCrossposts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/endpoints/post/index.tsx");
			const a = "TRACKING_CROSSPOSTS_LOADED",
				c = Object(s.a)(a),
				o = e => async (t, r, {
					gqlContext: s
				}) => {
					const a = await Object(n.e)(s(), {
						postId: e
					});
					if (a.ok) {
						const {
							isTrackingCrossposts: r
						} = a.body.data.postInfoById;
						t(c({
							[e]: r
						}))
					}
				}
		},
		"./src/reddit/actions/leaderboard/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			}));
			const s = "LEADERBOARD__LEADERBOARD_FETCH_FAILURE",
				n = "LEADERBOARD__LEADERBOARD_FETCH_PENDING",
				a = "LEADERBOARD__LEADERBOARD_FETCH_SUCCESS"
		},
		"./src/reddit/actions/linkedPosts/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = "LINKED_POSTS__POSTS_LOADED",
				n = "LINKED_POSTS__POSTS_FAILED"
		},
		"./src/reddit/actions/meta.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return o
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "META__GEO_CHANGED",
				a = Object(s.a)(n),
				c = "META__META_RECEIVED",
				o = (Object(s.a)(c), "META__SET_LOCALE");
			Object(s.a)(o)
		},
		"./src/reddit/actions/multireddit/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "q", (function() {
				return s
			})), r.d(t, "r", (function() {
				return n
			})), r.d(t, "s", (function() {
				return a
			})), r.d(t, "t", (function() {
				return c
			})), r.d(t, "u", (function() {
				return o
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "i", (function() {
				return l
			})), r.d(t, "j", (function() {
				return p
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "l", (function() {
				return f
			})), r.d(t, "m", (function() {
				return y
			})), r.d(t, "k", (function() {
				return E
			})), r.d(t, "n", (function() {
				return m
			})), r.d(t, "o", (function() {
				return _
			})), r.d(t, "p", (function() {
				return O
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "c", (function() {
				return S
			})), r.d(t, "A", (function() {
				return g
			})), r.d(t, "B", (function() {
				return D
			})), r.d(t, "z", (function() {
				return T
			})), r.d(t, "y", (function() {
				return v
			})), r.d(t, "v", (function() {
				return A
			})), r.d(t, "w", (function() {
				return j
			})), r.d(t, "x", (function() {
				return w
			})), r.d(t, "d", (function() {
				return C
			}));
			const s = "MULTIREDDIT__MORE_POSTS_FAILED",
				n = "MULTIREDDIT__MORE_POSTS_LOADED",
				a = "MULTIREDDIT__MORE_POSTS_PENDING",
				c = "MULTIREDDIT__MY_MULTIREDDITS_PENDING",
				o = "MULTIREDDIT__MY_MULTIREDDITS_RECEIVED",
				d = "MULTIREDDIT__CREATE_FAILURE",
				i = "MULTIREDDIT__CREATE_PENDING",
				u = "MULTIREDDIT__CREATE_SUCCESS",
				l = "MULTIREDDIT__DELETE_PENDING",
				p = "MULTIREDDIT__DELETE_SUCCESS",
				b = "MULTIREDDIT__DELETE_FAILURE",
				f = "MULTIREDDIT__DUPLICATE_PENDING",
				y = "MULTIREDDIT__DUPLICATE_SUCCESS",
				E = "MULTIREDDIT__DUPLICATE_FAILURE",
				m = "MULTIREDDIT__EDIT_FAILURE",
				_ = "MULTIREDDIT__EDIT_PENDING",
				O = "MULTIREDDIT__EDIT_SUCCESS",
				h = "MULTIREDDIT__ADD_SUBREDDIT_FAILURE",
				I = "MULTIREDDIT__ADD_SUBREDDIT_PENDING",
				S = "MULTIREDDIT__ADD_SUBREDDIT_SUCCESS",
				g = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_PENDING",
				D = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_SUCCESS",
				T = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_FAILURE",
				v = 10,
				A = "MULTIREDDIT__REMOVE_SUBREDDIT_FAILURE",
				j = "MULTIREDDIT__REMOVE_SUBREDDIT_PENDING",
				w = "MULTIREDDIT__REMOVE_SUBREDDIT_SUCCESS";
			var C;
			! function(e) {
				e.InvalidSrQuarantine = "INVALID_SR_QUARANTINE", e.TooManySubreddits = "MULTI_TOO_MANY_SUBREDDITS"
			}(C || (C = {}))
		},
		"./src/reddit/actions/notificationSettingsLayout/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return i
			}));
			const s = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__FAILED",
				n = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__LOADED",
				a = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__PENDING",
				c = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__FAILED",
				o = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__LOADED",
				d = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__PENDING",
				i = "NOTIFICATION_SETTINGS_LAYOUT_UPDATED"
		},
		"./src/reddit/actions/notifications/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			}));
			const s = "PUSH__GET_PREFERENCES_PENDING",
				n = "PUSH__GET_PREFERENCES_LOADED",
				a = "PUSH__GET_PREFERENCES_FAILED",
				c = "PUSH__SET_PREFERENCES_PENDING",
				o = "PUSH__SET_PREFERENCES_LOADED",
				d = "PUSH__SET_PREFERENCES_FAILED"
		},
		"./src/reddit/actions/notificationsInbox/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "f", (function() {
				return i
			}));
			const s = "INBOX_NOTIFICATIONS__PENDING",
				n = "INBOX_NOTIFICATIONS__LOADED",
				a = "INBOX_NOTIFICATIONS__FAILED",
				c = "INBOX_NOTIFS_SET_OVERFLOW_MENU_ID",
				o = "INBOX_NOTIFICATIONS__REMOVE_NOTIFICATION",
				d = "INBOX_NOTIFS__MARK_AS_READ",
				i = "INBOX_NOTIFS__SET_EARLIER_DIVIDER_INDEX"
		},
		"./src/reddit/actions/nps.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return b
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "d", (function() {
				return h
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/config.ts"),
				a = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				d = r("./src/reddit/constants/headers.ts");
			var i = r("./node_modules/@r/frames/compiled.js"),
				u = r("./node_modules/lodash/debounce.js"),
				l = r.n(u),
				p = function(e) {
					document.body.appendChild(function(e) {
						let t;
						const r = l()((function() {
							t && t.contentWindow && i.postMessage(t.contentWindow, "resize.asknicely")
						}), 500);
						return function() {
							return t = function() {
								const t = document.createElement("iframe");
								return t.src = e, t.setAttribute("allowTransparency", "true"), t.style.display = "block", t.style.width = "100%", t.style.height = "1px", t.style.background = "transparent", t.style.border = "none", t
							}(), i.listen("embedjail"), i.receiveMessage(t.contentWindow, "open.embedjail", (function(e) {
								var s;
								s = e.detail, t.style.width = s.dimensions.width, t.style.height = s.dimensions.height, t.style.display = "block", t.style.position = "fixed", t.style.bottom = 0, t.style.zIndex = 2147483647, window.addEventListener("resize", r)
							})), i.receiveMessage(t.contentWindow, "close.embedjail", (function(e) {
								t.parentElement.removeChild(t), i.stopListening("asknicely"), window.removeEventListener("resize", r), t = void 0
							})), window.addEventListener("message", (function(e) {
								"https://live.asknice.ly" !== e.origin && "https://reddit.asknice.ly" !== e.origin || e.data && t && t.contentWindow && i.postMessage(t.contentWindow, e.data + ".asknicely")
							})), t
						}
					}(e)())
				};
			const b = "NPS__URL_PENDING",
				f = "NPS__URL_LOADED",
				y = "NPS__URL_FAILED",
				E = Object(s.a)(b),
				m = Object(s.a)(f),
				_ = Object(s.a)(y);
			let O = !1;
			const h = () => async (e, t, r) => {
				const s = t();
				if (s.nps.pending) return;
				if (O) return;
				e(E());
				const i = s.platform.currentPage && s.platform.currentPage.queryParams.feature || "",
					u = !!s.user.account,
					l = await ((e, t, r) => Object(c.a)(Object(o.a)(e, [d.a]), {
						data: {
							feature: t,
							app_name: "web2x"
						},
						endpoint: `${r?n.a.oauthUrl:n.a.apiUrl}/api/jail/asknicely${r?"":".json"}`,
						method: a.cb.GET,
						traceRequestName: "get_nps_survey"
					}))(r.apiContext(), i, u);
				if (l.ok) {
					const t = l.body;
					t.dest ? (e(m(t)), p(t.dest), O = !0) : e(_())
				} else e(_())
			}
		},
		"./src/reddit/actions/pages/appeal/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = "APPEAL_PAGE_LOADED",
				n = "APPEAL_PAGE_FAILED"
		},
		"./src/reddit/actions/pages/chatSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return S
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "c", (function() {
				return D
			})), r.d(t, "d", (function() {
				return T
			})), r.d(t, "e", (function() {
				return R
			})), r.d(t, "f", (function() {
				return P
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/difference.js"),
				a = r.n(n),
				c = r("./src/telemetry/index.ts"),
				o = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/graphql/operations/GetSubredditChatSettings.json"),
				p = r("./src/lib/makeGqlRequest/index.ts");
			var b = (e, t) => Object(p.a)(e, {
					...l,
					variables: t
				}),
				f = r("./src/graphql/operations/UpdateSubredditChatSettings.json");
			var y = (e, t) => Object(p.a)(e, {
					...f,
					variables: t
				}),
				E = r("./src/reddit/selectors/telemetry.ts"),
				m = r("./src/telemetry/models/Event.ts");
			var _ = r("./src/reddit/models/ChatSettingsPage/index.ts"),
				O = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/selectors/chat.ts"),
				I = r("./src/reddit/selectors/chatSettingsPage.ts");
			const S = "FETCH_CHAT_SETTINGS__LOADED",
				g = "FETCH_CHAT_SETTINGS__FAILED",
				D = "FETCH_CHAT_SETTINGS__PENDING",
				T = "UPDATE_CHAT_SETTINGS__LOADED",
				v = Object(d.a)(S),
				A = Object(d.a)(g),
				j = Object(d.a)(D),
				w = Object(d.a)(T),
				C = e => async (t, r) => {
					const s = {
						subredditId: e
					};
					return !!Object(I.b)(r(), s) || (t(j(s)), !1)
				}, R = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = {
						subredditId: e
					};
					if (await t(C(e))) return;
					let a = null;
					const c = await b(s(), n);
					if (c.ok) {
						const t = c.body || {},
							s = t.data && t.data.subredditInfoById,
							o = s && s.chatSettings,
							d = !Object(h.c)(r(), n),
							i = Object(_.c)(o, e, d);
						a = {
							...n,
							chatSettings: i
						}
					}
					if (a) t(v(a));
					else {
						const r = c.error || {
							type: o.E.UNKNOWN_ERROR
						};
						t(A({
							...n,
							error: r
						})), i.c.withScope(t => {
							t.setExtra("info", {
								subredditId: e,
								responseBody: c.body,
								responseOk: c.ok
							}), i.c.captureMessage("Missing subreddit chat settings!")
						})
					}
				}, P = (e, t, r) => async (n, c, {
					gqlContext: d
				}) => {
					if (await n(C(e))) return [];
					let i, l = !1;
					const p = a()(r, t),
						b = Object(_.b)(p);
					if (b && b.length) {
						const t = {
								subredditId: e,
								subredditChatSettings: b
							},
							r = await y(d(), {
								input: t
							});
						if (r.ok) {
							const e = (r.body || {}).data.updateSubredditChatSettings;
							l = !!e && e.ok
						} else i = r && r.error || {
							type: o.E.UNKNOWN_ERROR
						}
					}
					return l ? (n(w({
						subredditId: e,
						chatSettings: r
					})), n(N(t, p)), r) : (i && n(A({
						subredditId: e,
						error: i
					})), n(w({
						subredditId: e,
						chatSettings: t
					})), n(Object(u.e)({
						duration: u.a,
						id: "CHAT_SETTING_UPDATE_ERROR",
						kind: O.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3HpR6h"
						})
					})), t)
				}, L = {
					start_chatting_opt_out: (e, t, r) => ({
						source: m.b.Chat,
						action: m.a.OptOut,
						noun: "down_to_chat_subreddit",
						subreddit: Object(E.subreddit)(e),
						setting: {
							oldValue: t,
							value: r
						},
						...Object(E.defaults)(e)
					})
				}, N = (e, t) => async (r, s) => {
					t.forEach(t => {
						if (t && t.settingId) {
							const r = L[t.settingId],
								n = e.find(e => e.settingId === t.settingId);
							if (r && n) {
								const e = r(s(), n.state, t.state);
								Object(c.a)(e)
							}
						}
					})
				}
		},
		"./src/reddit/actions/pages/profileModSettings.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PROFILE_MOD_SETTINGS_LOADED", (function() {
				return u
			})), r.d(t, "profileModSettingsRequested", (function() {
				return p
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/preferences.ts"),
				a = r("./src/reddit/actions/profile/index.ts"),
				c = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				o = r("./src/reddit/helpers/trackers/screenview.ts"),
				d = r("./src/reddit/models/User/index.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const u = "PAGE__PROFILE_MOD_SETTINGS_LOADED",
				l = Object(s.a)(u),
				p = e => async (t, r) => {
					const s = [t(n.z()), t(Object(a.d)(e.params.profileName))];
					await Promise.all(s);
					const u = Object(i.j)(r());
					u ? (await t(Object(a.b)(Object(d.e)(u))), t(l()), Object(o.p)(r(), !0)) : Object(c.a)(t, r())
				}
		},
		"./src/reddit/actions/pages/report/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "d", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			}));
			const s = "REPORT_PAGE__FAILED",
				n = "REPORT_PAGE__PENDING",
				a = "REPORT_PAGE__LOADED",
				c = "REPORT_PAGE_INITIAL_REASON__SET"
		},
		"./src/reddit/actions/pages/subredditWiki/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			}));
			const s = "PAGE__SUBREDDIT_WIKI_PAGE_PENDING",
				n = "PAGE__SUBREDDIT_WIKI_PAGE_LOADED",
				a = "PAGE__SUBREDDIT_WIKI_PAGE_FAILED"
		},
		"./src/reddit/actions/pages/userDataRequest/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "d", (function() {
				return E
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/endpoints/me/index.ts"),
				a = r("./src/graphql/operations/UserDataExportEligibility.json"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				d = r("./src/reddit/selectors/user.ts"),
				i = r("./src/reddit/selectors/userDataRequest.ts");
			const u = "USER_DATA_REQUEST_PAGE_LOADING",
				l = "USER_DATA_REQUEST_PAGE_LOADED",
				p = "USER_DATA_REQUEST_PAGE_FAILED",
				b = Object(s.a)(u),
				f = Object(s.a)(l),
				y = Object(s.a)(p),
				E = () => async (e, t, {
					apiContext: r,
					gqlContext: s
				}) => {
					const u = t(),
						l = Object(d.j)(u),
						p = Object(i.b)(u);
					if (l && p.success) return;
					e(b());
					const E = await Object(n.a)(r());
					if (!E.ok || !E.body) return void e(y(E.error));
					if (!E.body.account) return void Object(o.a)(e, u);
					const m = await (e => Object(c.a)(e, {
						...a
					}))(s());
					if (!m.ok) return void e(y());
					const _ = E.body,
						O = m.body;
					e(f({
						account: _.account,
						userDataExportEligibility: O.data.identity.userDataExportEligibility.isUserEligibleForDataExport
					}))
				}
		},
		"./src/reddit/actions/polls.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "POLLS__POLL_CREATION_UPDATED",
				a = Object(s.a)(n)
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "g", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "t", (function() {
				return i
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "r", (function() {
				return l
			})), r.d(t, "s", (function() {
				return p
			})), r.d(t, "n", (function() {
				return b
			})), r.d(t, "l", (function() {
				return f
			})), r.d(t, "m", (function() {
				return y
			})), r.d(t, "k", (function() {
				return E
			})), r.d(t, "i", (function() {
				return m
			})), r.d(t, "j", (function() {
				return _
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "p", (function() {
				return h
			})), r.d(t, "q", (function() {
				return I
			})), r.d(t, "o", (function() {
				return S
			}));
			const s = "CREATE_COLLECTION_PENDING",
				n = "CREATE_COLLECTION_SUCCESS",
				a = "CREATE_COLLECTION_FAILED",
				c = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				o = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				d = "ADD_POST_TO_COLLECTION_SUCCESS",
				i = "UPDATE_POST_WITH_COLLECTION_ID",
				u = "DELETE_COLLECTION_SUCCESS",
				l = "UPDATE_COLLECTION_PENDING",
				p = "UPDATE_COLLECTION_SUCCESS",
				b = "UPDATE_COLLECTION_FAILED",
				f = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				y = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				E = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				m = "REORDER_COLLECTION_PENDING",
				_ = "REORDER_COLLECTION_SUCCESS",
				O = "REORDER_COLLECTION_FAILED",
				h = "UPDATE_COLLECTION_LAYOUT_PENDING",
				I = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				S = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postLevelCrowdControl.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/endpoints/crowdControl/index.ts");
			const a = "POST_LEVEL_CC_LOADED",
				c = Object(s.a)(a),
				o = e => async (t, r, {
					gqlContext: s
				}) => {
					const a = await Object(n.b)(s(), e);
					if (a.ok) {
						const r = a.body.data.postInfoById.crowdControlLevel;
						t(c({
							[e]: r
						}))
					}
				}
		},
		"./src/reddit/actions/postList.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return i
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = (r("./src/reddit/actions/embedAndImage.ts"), r("./src/reddit/actions/video.ts"), r("./src/reddit/helpers/trackers/postList.ts"));
			r("./src/reddit/constants/postLayout.ts"), r("./src/reddit/models/Media/index.ts"), r("./src/reddit/selectors/platform.ts"), r("./src/reddit/selectors/posts.ts");
			r("./src/reddit/selectors/video.ts");
			const a = "POSTLIST__MARKED_END",
				c = "POSTLIST__UNMARKED_END",
				o = Object(s.a)(a),
				d = Object(s.a)(c),
				i = (e, t) => async (r, s) => {
					const a = s();
					e in a.listings.postOrder.fetchedTokens ? e in a.listings.postOrder.ids ? r(d({
						listingKey: e
					})) : n.j(a, e) : r(o({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/product.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "h", (function() {
				return f
			})), r.d(t, "i", (function() {
				return I
			})), r.d(t, "j", (function() {
				return S
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/governance/errorToast.ts"),
				a = r("./src/reddit/endpoints/governance/badges.ts"),
				c = r("./src/reddit/endpoints/governance/products/badges.ts");
			const o = "PRODUCT__BADGE_PURCHASE_OPENED",
				d = "PRODUCT__BADGE_PURCHASE_SUCCESS",
				i = "PRODUCT__BADGE_PURCHASE_FAILURE",
				u = "PRODUCT__BADGE_PURCHASE_PENDING",
				l = "PRODUCT__FETCH_SUCCESS",
				p = "PRODUCT__FETCH_FAILURE",
				b = "PRODUCT__FETCH_PENDING",
				f = Object(s.a)(o),
				y = Object(s.a)(d),
				E = Object(s.a)(i),
				m = Object(s.a)(u),
				_ = Object(s.a)(l),
				O = Object(s.a)(p),
				h = Object(s.a)(b),
				I = ({
					productId: e
				}) => async (t, r, {
					apiContext: s
				}) => {
					const o = r(),
						d = o.products.models[e],
						i = o.user.account,
						u = !!o.products.api.purchase.pending[e];
					if (d && d.price && !u) {
						t(m({
							productId: e
						}));
						const r = await Object(c.c)(s(), {
							price: d.price,
							products: [{
								productId: e,
								quantity: "1"
							}],
							subredditId: d.subredditId
						});
						let o;
						if (r.ok && i && (o = await Object(a.c)(s(), d.subredditId, i.id)), r.ok) {
							if (o && o.ok) {
								const {
									badges: e,
									userOwnedBadges: s
								} = o.body;
								t(y({
									product: d,
									badges: e,
									userOwnedBadges: s,
									wallet: r.body.wallet
								}))
							}
						} else t(E({
							productId: e,
							error: r.error
						})), Object(n.a)(t, r.error)
					}
				}, S = ({
					subredditId: e
				}) => async (t, r, {
					apiContext: s
				}) => {
					t(h({
						subredditId: e
					}));
					const n = await Object(c.a)(s(), e);
					n.ok ? t(_({
						subredditId: e,
						products: n.body
					})) : t(O({
						subredditId: e,
						error: n.error
					}))
				}
		},
		"./src/reddit/actions/reCaptchaEnterprise.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return j
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "d", (function() {
				return C
			})), r.d(t, "b", (function() {
				return L
			}));
			var s = r("./src/lib/asyncActions/index.ts"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/constants/euCookiePolicy.ts"),
				c = r("./node_modules/ts-error/lib/cjs.js"),
				o = r.n(c);
			class GraphQLRequestError_GraphQLRequestError extends o.a {
				constructor(e) {
					super(`An error occurred during a GraphQL request. The following response was received:\n\n${JSON.stringify(e,void 0,2)}`), this.response = e
				}
			}
			var d = r("./src/lib/reCaptchaEnterprise/index.ts"),
				i = r("./src/lib/sentry/index.ts");

			function u(e) {
				return t => async (r, s, n) => {
					const a = s();
					if (e(a)) return t(r, s, n)
				}
			}
			var l = r("./node_modules/lodash/every.js"),
				p = r.n(l),
				b = r("./src/reddit/constants/experiments.ts"),
				f = r("./src/graphql/operations/VerifyRecaptchaToken.json"),
				y = r("./node_modules/os-browserify/browser.js"),
				E = r.n(y);
			const m = /\s+at.*(?:\(|\s)(.*)\)?/,
				_ = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/,
				O = void 0 === E.a.homedir ? "" : E.a.homedir();
			const h = e => e.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, "");
			class AggregateError_AggregateError extends Error {
				constructor(e) {
					if (!Array.isArray(e)) throw new TypeError(`Expected input to be an Array, got ${typeof e}`);
					let t = (e = [...e].map(e => e instanceof Error ? e : null !== e && "object" == typeof e ? Object.assign(new Error(e.message), e) : new Error(e))).map(e => "string" == typeof e.stack ? h(function(e, t = {}) {
						return t = {
							pretty: !1,
							...t
						}, e.replace(/\\/g, "/").split("\n").filter(e => {
							const t = e.match(m);
							if (null === t || !t[1]) return !0;
							const r = t[1];
							return !r.includes(".app/Contents/Resources/electron.asar") && !r.includes(".app/Contents/Resources/default_app.asar") && !_.test(r)
						}).filter(e => "" !== e.trim()).map(e => t.pretty ? e.replace(m, (e, t) => e.replace(t, t.replace(O, "~"))) : e).join("\n")
					}(e.stack)) : String(e)).join("\n");
					super(t = "\n" + function(e, t = 1, r = {}) {
						const s = {
							indent: " ",
							includeEmptyLines: !1,
							...r
						};
						if ("string" != typeof e) throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
						if ("number" != typeof t) throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
						if ("string" != typeof s.indent) throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof s.indent}\``);
						if (0 === t) return e;
						const n = s.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
						return e.replace(n, s.indent.repeat(t))
					}(t, 4)), this.name = "AggregateError", Object.defineProperty(this, "_errors", {
						value: e
					})
				}*[Symbol.iterator]() {
					for (const e of this._errors) yield e
				}
			}
			var I = r("./src/lib/makeGqlRequest/index.ts");
			class MissingDataError_MissingDataError extends o.a {
				constructor() {
					super("Missing data in GraphQL response")
				}
			}
			class RequestFailedWithoutErrorsError_RequestFailedWithoutErrorsError extends o.a {
				constructor() {
					super("GraphQL request failed without errors")
				}
			}
			var S = r("./src/reddit/featureFlags/index.ts"),
				g = r("./src/reddit/featureFlags/utils.ts"),
				D = r("./src/reddit/helpers/chooseVariant/index.ts"),
				T = r("./src/reddit/selectors/meta.ts");
			const v = e => S.d.reCaptchaEnterprise(e) && !Object(T.d)(e),
				A = e => !!Object(D.c)(e, {
					experimentEligibilitySelector: Object(g.d)(Object(g.b)(...a.c)),
					experimentName: b.Jc
				}),
				j = Object(s.b)("LOAD_RECAPTCHA_ENTERPRISE"),
				w = Object(s.b)("EXECUTE_RECAPTCHA_ENTERPRISE"),
				C = Object(s.b)("SEND_RECAPTCHA_TOKEN"),
				R = e => u(e => p()([v, A, e => e.tracking.reCaptchaEnterprise.send === s.a.New && e.tracking.reCaptchaEnterprise.execute === s.a.Succeeded && e.tracking.reCaptchaEnterprise.load === s.a.Succeeded], t => t(e)))(async (t, r, {
					gqlContext: s
				}) => {
					t(C.requested());
					try {
						await (async (e, t) => {
							const r = await Object(I.a)(e, {
								...f,
								variables: {
									input: {
										token: t
									}
								}
							});
							if (!r.ok) throw new GraphQLRequestError_GraphQLRequestError(r);
							if (!("data" in r.body)) throw new MissingDataError_MissingDataError;
							const {
								ok: s,
								errors: n
							} = r.body.data.verifyRecaptchaToken;
							if (n && n.length > 0) throw new AggregateError_AggregateError(n);
							if (!s) throw new RequestFailedWithoutErrorsError_RequestFailedWithoutErrorsError
						})(s(), e), t(C.succeeded())
					} catch (n) {
						throw t(C.failed()), n
					}
				}),
				P = (e, t) => Object(g.g)(t) ? (e => `STAGING__${e}`)(e) : e,
				L = (e = d.a.PageLoad) => u(e => p()([v, A, e => e.tracking.reCaptchaEnterprise.load === s.a.New], t => t(e)))(async (t, r) => {
					const a = r();
					try {
						await t((() => u(e => p()([v, A, e => e.tracking.reCaptchaEnterprise.load === s.a.New], t => t(e)))(async e => {
							e(j.requested());
							try {
								await d.b.loadScript(), e(j.succeeded())
							} catch (t) {
								throw e(j.failed()), t
							}
						}))());
						const r = await t((e => u(e => p()([v, A, e => e.tracking.reCaptchaEnterprise.load === s.a.Succeeded && e.tracking.reCaptchaEnterprise.execute === s.a.New], t => t(e)))(async t => {
							t(w.requested());
							try {
								const r = await d.b.execute(e);
								return t(w.succeeded({
									token: r
								})), r
							} catch (r) {
								throw t(w.failed()), r
							}
						}))({
							action: P(e, a)
						}));
						r && await t(R(r))
					} catch (c) {
						if (c instanceof GraphQLRequestError_GraphQLRequestError && "object" == typeof c.response.error && null !== c.response.error && c.response.error.type === n.i) return;
						i.c.withScope(e => {
							Object(i.a)(e, {
								serverLogging: !1
							}), i.c.captureException(c)
						})
					}
				})
		},
		"./src/reddit/actions/reportFlow/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return s
			})), r.d(t, "d", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "g", (function() {
				return i
			}));
			const s = "REPORT__PENDING",
				n = "REPORT__LOADED",
				a = "REPORT__FAILED",
				c = "REPORT_FLOW__TARGET_SET",
				o = "REPORT_FLOW__OPENED_FROM_MODAL_PAGE",
				d = "REPORT_FLOW__OPEN_CATEGORY",
				i = "REPORT_FLOW__USER_IS_MOD_SET"
		},
		"./src/reddit/actions/reportPageRules/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = "REPORT_PAGE_RULES__LOADED"
		},
		"./src/reddit/actions/reportRules.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "c", (function() {
				return f
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				d = r("./src/reddit/constants/headers.ts");
			const i = "SITEWIDE_RULES_LOADED",
				u = "LIVESTREAMING_RULES_LOADED",
				l = Object(n.a)(i),
				p = Object(n.a)(u),
				b = () => async (e, t, {
					apiContext: r
				}) => {
					if (!t().user) return;
					const s = await (e => Object(c.a)(Object(o.a)(e, [d.a]), {
						endpoint: `${e.apiUrl}/api/sitewide_rules.json`,
						method: a.cb.GET
					}))(r());
					if (s.ok) {
						const t = s.body,
							r = y(t.sitewide_rules);
						e(l(r))
					}
				}, f = () => async (e, t, {
					apiContext: r
				}) => {
					if (!t().user) return;
					const s = await (e => Object(c.a)(Object(o.a)(e, [d.a]), {
						endpoint: `${e.apiUrl}/api/livestream_rules.json`,
						method: a.cb.GET
					}))(r());
					if (s.ok) {
						const t = s.body,
							r = y(t.livestream_rules);
						e(p(r))
					}
				}, y = e => {
					let t = [];
					if (e && e.length > 2) {
						const r = {
							reasonTextToShow: s.fbt._("It's spam or abuse", null, {
								hk: "21rHqk"
							}),
							nextStepReasons: [e[0], e[1], e[2]]
						};
						4 === e.length && r.nextStepReasons && r.nextStepReasons.push(e[3]), t.push(r), t = t.concat(e.slice(e.length - 1))
					}
					return t
				}
		},
		"./src/reddit/actions/scheduledPosts/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return n
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "m", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "h", (function() {
				return i
			})), r.d(t, "l", (function() {
				return u
			})), r.d(t, "k", (function() {
				return l
			})), r.d(t, "j", (function() {
				return p
			})), r.d(t, "o", (function() {
				return b
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "n", (function() {
				return m
			})), r.d(t, "i", (function() {
				return _
			})), r.d(t, "r", (function() {
				return O
			})), r.d(t, "u", (function() {
				return h
			})), r.d(t, "p", (function() {
				return I
			})), r.d(t, "q", (function() {
				return S
			})), r.d(t, "v", (function() {
				return g
			})), r.d(t, "s", (function() {
				return D
			})), r.d(t, "x", (function() {
				return T
			})), r.d(t, "w", (function() {
				return v
			})), r.d(t, "t", (function() {
				return A
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js");
			const n = "SCHEDULED_POSTS_REQUESTED",
				a = "SCHEDULED_POSTS_LOADED",
				c = "STANDALONE_SCHEDULED_POSTS_LOADED",
				o = "RECURRING_SCHEDULED_POSTS_LOADED",
				d = "SCHEDULED_POSTS_FAILED",
				i = "SCHEDULED_POST_CREATION_SUCCEEDED",
				u = "SCHEDULED_POST_SUBMIT_NOW_SUCCESS",
				l = "SCHEDULED_POST_MUTATE_REQUESTED",
				p = "SCHEDULED_POST_MUTATE_FAILED",
				b = "STANDALONE_POST_MUTATE_SUCCESS",
				f = "RECURRING_POST_MUTATE_SUCCESS",
				y = "RECURRING_POST__EDIT_MODAL_LOAD",
				E = "RECURRING_POST__EDIT_LOAD",
				m = "STANDALONE_POST__EDIT_LOAD",
				_ = "SCHEDULED_POST__DELETE_SUCCESS",
				O = () => s.fbt._("Failed to load scheduled posts", null, {
					hk: "1fhkq4"
				}),
				h = () => s.fbt._("Whoops! Invalid scheduled post", null, {
					hk: "35jBb6"
				}),
				I = () => s.fbt._("Unable to delete scheduled post", null, {
					hk: "23nWms"
				}),
				S = () => s.fbt._("Successfully deleted scheduled post", null, {
					hk: "1Lk7r2"
				}),
				g = () => s.fbt._("Unable to submit scheduled post", null, {
					hk: "vCW43"
				}),
				D = () => s.fbt._("Retry", null, {
					hk: "4bCZ7M"
				}),
				T = () => s.fbt._("Successfully submitted scheduled post!", null, {
					hk: "ONo6q"
				}),
				v = () => s.fbt._("Successfully edited scheduled post!", null, {
					hk: "HfGcT"
				}),
				A = () => s.fbt._("Failed to update scheduled post", null, {
					hk: "2zBuRu"
				})
		},
		"./src/reddit/actions/search/trending.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			})), r.d(t, "b", (function() {
				return E
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./node_modules/uuid/v4.js"),
				a = r.n(n),
				c = r("./src/lib/constants/index.ts"),
				o = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/extractQueryParams/index.ts"));
			var d = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				u = r("./src/reddit/constants/headers.ts"),
				l = r("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				p = r("./src/reddit/models/Search/index.ts");
			var b = e => {
				const t = {
					withAds: 1,
					ad: Object(o.a)(window.location.href).get("ad")
				};
				return Object(d.a)(Object(i.a)(e, [u.a]), {
					endpoint: `${e.apiUrl}/api/trending_searches_v1.json`,
					method: c.cb.GET,
					data: t
				})
			};
			const f = "PAGE__TRENDING_SEARCHES_LOADED",
				y = Object(s.a)(f),
				E = () => async (e, t, {
					apiContext: r
				}) => {
					const s = await b(r());
					if (s.ok) {
						const t = (e => {
							const t = [];
							if (e.body && e.body.trending_searches) {
								const r = e.body.trending_searches.length;
								for (let s = 0; s < r; s++) {
									const r = e.body.trending_searches[s],
										n = r.results.data.children.length > 0 ? r.results.data.children[0].data : null,
										c = {
											id: a()(),
											post: n ? Object(l.a)(n) : null,
											rawQuery: r.query_string,
											searchQuery: r.display_string,
											section: p.c.trending,
											isWhitelisted: r.is_subreddit_whitelisted,
											subredditInfo: n ? {
												icon: n.sr_detail.community_icon || n.sr_detail.icon_img,
												displayText: n.sr_detail.display_name_prefixed
											} : null,
											subredditOccurrences: r.subreddit_occurences - 1,
											type: p.b.text
										};
									t.push(c)
								}
							}
							return t
						})(s);
						return e(y({
							items: t
						})), t
					}
					return null
				}
		},
		"./src/reddit/actions/shortcuts/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			const s = "SHORTCUTS__ACTIVE_COMMENT_SET",
				n = "SHORTCUTS__ACTIVE_POST_SET"
		},
		"./src/reddit/actions/sso/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			const s = "LINKED_IDENTITY__ADD",
				n = "LINKED_IDENTITY__REMOVE"
		},
		"./src/reddit/actions/streaming/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = "SUBREDDIT__STREAMING_MOD_SETTINGS_LOADED"
		},
		"./src/reddit/actions/streaming/modSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return b
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "e", (function() {
				return g
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/streaming/constants.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/graphql/operations/FetchSubredditStreamingModSettings.json"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/graphql/operations/UpdateSubredditStreamingModSettings.json"),
				u = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/reddit/selectors/subreddit.ts");
			const p = Object(n.a)(a.a),
				b = "STREAMING_MOD_SETTINGS__UPDATE_PENDING",
				f = "STREAMING_MOD_SETTINGS__UPDATE_LOADED",
				y = "STREAMING_MOD_SETTINGS__UPDATE_FAILED",
				E = Object(n.a)(b),
				m = Object(n.a)(f),
				_ = Object(n.a)(y),
				O = e => async (t, r, {
					gqlContext: n
				}) => {
					const a = Object(l.T)(r(), {
						subredditId: e
					});
					if (void 0 === a) {
						const e = s.fbt._("Invalid subreddit", null, {
								hk: "2iUXvs"
							}),
							r = Object(c.d)(e, u.b.Error);
						return await t(Object(c.e)({
							...r,
							duration: c.a
						})), {
							reason: e
						}
					}
					const i = await ((e, t) => Object(d.a)(e, {
						...o,
						variables: {
							subredditId: t
						}
					}))(n(), e);
					if (!i.ok) {
						const e = s.fbt._("Could not fetch settings for {subredditName}", [s.fbt._param("subredditName", a.name)], {
								hk: "2G8rnU"
							}),
							r = Object(c.d)(e, u.b.Error);
						return await t(Object(c.e)({
							...r,
							duration: c.a
						})), {
							reason: e
						}
					}
					const b = i.body.data.subredditInfoById;
					return await t(p({
						subredditId: e,
						modSettings: b.liveStreamingInfo
					})), {}
				}, h = (e, t) => async (r, s, {
					gqlContext: n
				}) => {
					await r(I(t, e, n())), r(O(t))
				}, I = (e, t, r) => async (r, n, {
					gqlContext: a
				}) => {
					r(E({
						subredditId: e
					}));
					const o = await ((e, t) => Object(d.a)(e, {
						...i,
						variables: t
					}))(a(), {
						input: {
							subredditId: e,
							liveStreamingModeratorSettings: t
						}
					});
					if (!o.ok || !o.body.data.updateSubredditLiveStreamingModeratorSettings.ok) {
						const t = o.error && o.error.fields ? o.error.fields[0].msg : s.fbt._("Could not update community broadcasting settings", null, {
								hk: "3Uw7zu"
							}),
							n = Object(c.d)(t, u.b.Error);
						await r(Object(c.e)({
							...n,
							duration: c.a
						})), r(_({
							subredditId: e
						}))
					}
					const l = s.fbt._("Community broadcasting settings saved", null, {
							hk: "GTwrg"
						}),
						p = Object(c.d)(l, u.b.SuccessCommunity);
					await r(Object(c.e)({
						...p,
						duration: c.a
					})), r(m({
						subredditId: e
					}))
				}, S = (e, t, r) => async (s, n, {
					gqlContext: a
				}) => {
					const c = [...r.whitelistedUsers.map(e => ({
						redditorName: e.name
					})), {
						redditorName: t
					}];
					await s(I(e, {
						whitelistedRedditors: c
					}, a())), await s(O(e))
				}, g = (e, t, r) => async (s, n, {
					gqlContext: a
				}) => {
					const c = r.whitelistedUsers.filter(e => e.name !== t).map(e => ({
						redditorName: e.name
					}));
					await s(I(e, {
						whitelistedRedditors: c
					}, a())), await s(O(e))
				}
		},
		"./src/reddit/actions/subreddit/similarSubreddit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			})), r.d(t, "b", (function() {
				return E
			}));
			var s, n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/subreddit/constants.ts"),
				c = r("./src/reddit/endpoints/category/subreddits.ts"),
				o = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				u = r("./src/reddit/constants/headers.ts");
			! function(e) {
				e.Factorization = "factorization", e.CustomModRelevant = "custom_mod_relevant"
			}(s || (s = {}));
			var l = r("./src/reddit/selectors/subreddit.ts");
			const p = e => {
					let t = e.subredditIds.join(",");
					return e.count && (t += `--[count:'${e.count}']`), e.variant && (t += `--[variant:'${e.variant}']`), t.toLowerCase()
				},
				b = Object(n.a)(a.q),
				f = Object(n.a)(a.p),
				y = Object(n.a)(a.o),
				E = e => async (t, r, {
					apiContext: s
				}) => {
					const n = r(),
						a = p(e),
						E = Object(l.u)(n, {
							key: a
						}),
						m = Object(l.t)(n, {
							key: a
						});
					if (E || m.length > 0) return;
					t(b({
						key: a
					}));
					const _ = await ((e, t) => Object(d.a)(Object(i.a)(e, [u.a]), {
						data: {
							sr_fullnames: t.subredditIds.join(","),
							limit: t.count,
							variant: t.variant
						},
						endpoint: `${e.apiUrl}/api/similar_subreddits.json`,
						method: o.cb.GET
					}))(s(), e);
					if (_.ok) {
						const e = Object(c.b)(_.body);
						t(f({
							key: a,
							...e
						}))
					} else {
						const e = _.error;
						t(y({
							key: a,
							error: e
						}))
					}
				}
		},
		"./src/reddit/actions/subreddit/subredditPosts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return B
			})), r.d(t, "a", (function() {
				return q
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/makeLinkedPostsListingKey/index.ts"),
				c = r("./src/lib/makeListingKey/index.ts"),
				o = r("./src/reddit/actions/googleQASchema/constants.ts");
			const d = Object(n.a)(o.b),
				i = Object(n.a)(o.a);
			var u = r("./src/reddit/actions/linkedPosts/constants.ts");
			const l = Object(n.a)(u.b),
				p = Object(n.a)(u.a);
			var b = r("./src/reddit/actions/otherDiscussions/constants.ts"),
				f = r("./src/lib/makeGqlRequest/index.ts"),
				y = (r("./src/graphql/operations/OtherDiscussions.json"), r("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts")),
				E = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				m = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				_ = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				O = r("./src/reddit/models/Post/index.ts");
			var h = ({
				getState: e,
				onFailure: t,
				onSuccess: r,
				postId: s,
				response: n
			}) => {
				if (!n.ok) return void t(n.error);
				const a = n.body,
					{
						post: o
					} = a && a.data,
					d = e(),
					i = Object(c.a)(s, null, {
						isOtherDiscussions: !0
					});
				if (o) {
					if (o.otherDiscussions && o.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = o, {
							postFlair: n,
							postIds: a,
							posts: c,
							profiles: u,
							subreddits: l
						} = (e => {
							const t = {
									postFlair: {},
									postIds: [],
									posts: {},
									profiles: {},
									subreddits: {}
								},
								r = e => {
									const r = Object(E.e)(e);
									t.posts[r.id] = r;
									const {
										crosspostRoot: s
									} = e;
									if (s && s.type === O.a.Post && s.postInfo) {
										const e = Object(E.e)(s.postInfo);
										t.posts[e.id] = e
									}
									return Object(O.k)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(m.a)(e.profile)) : Object(O.l)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(_.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(y.a)(e.subreddit))), r.id
								};
							if (e && e.edges)
								for (const {
										node: s
									} of e.edges) {
									const e = r(s);
									e && t.postIds.push(e)
								}
							return t
						})(e);
						r({
							count: t,
							key: i,
							meta: d.meta,
							postFlair: n,
							postId: s,
							postIds: a,
							posts: c,
							profiles: u,
							subreddits: l
						})
					}
				} else r({
					count: 0,
					key: i,
					meta: d.meta,
					postFlair: {},
					postId: s,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			};
			const I = Object(n.a)(b.a),
				S = Object(n.a)(b.b),
				g = Object(n.a)(b.c);
			var D = r("./src/reddit/actions/subreddit/constants.ts"),
				T = r("./src/graphql/operations/PostFeedAndOtherDiscussions.json"),
				v = (r("./src/graphql/operations/SubredditPosts.json"), r("./src/graphql/operations/SubredditsPosts.json"));
			var A = ({
				getState: e,
				onSuccess: t,
				onFailure: r,
				postId: s,
				post: n
			}) => {
				try {
					t({
						altText: n && n.media && (n.media.still && n.media.still.altText || n.media.obfuscated && n.media.obfuscated.altText) || null,
						postId: s
					})
				} catch (a) {
					r(a)
				}
			};
			var j = ({
					getState: e,
					onSuccess: t,
					onFailure: r,
					postId: s,
					post: n
				}) => {
					try {
						const r = [],
							c = {},
							o = {};
						if (!n || !n.linked) return;
						const d = e(),
							i = d.posts && d.posts.models,
							u = Object(a.a)(s),
							l = n.linked.posts && n.linked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e) break;
							if (e.id && !i.hasOwnProperty(e.id)) {
								r.push(e.id);
								const t = Object(E.a)(e);
								c[e.id] = t.post, t.crosspost && (c[t.crosspost.id] = t.crosspost)
							}
							if (Object(O.l)(e)) {
								const {
									subreddit: t
								} = e;
								o[t.id] = Object(_.a)(t)
							}
						}
						t({
							dist: n.linked.posts && n.linked.posts.dist || null,
							key: u,
							meta: d.meta,
							posts: c,
							postIds: r,
							subreddits: o
						})
					} catch (c) {
						r(c)
					}
				},
				w = r("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var C = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var R = ({
					getState: e,
					onSuccess: t,
					onFailure: r,
					options: n,
					subreddit: a
				}) => {
					try {
						if (!a) return;
						const r = a.elements || a.posts,
							o = e(),
							d = ((e, t) => {
								const {
									edges: r
								} = e, s = r.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: s
								}
							})(r, o.posts && o.posts.models);
						if (!d.edges.length) return;
						const i = Object(w.a)(d),
							{
								range: u,
								sort: l,
								subredditName: p
							} = n,
							b = Object(c.a)(p, s.P[l], {
								t: u
							}),
							f = C(i),
							y = i.map(e => e.id);
						t({
							dist: r.dist,
							key: b,
							meta: o.meta,
							postIds: y,
							posts: f
						})
					} catch (o) {
						r(o)
					}
				},
				P = r("./src/reddit/models/Media/index.ts"),
				L = r("./src/reddit/selectors/posts.ts"),
				N = r("./src/reddit/actions/imageOCRAltText/constants.ts");
			const k = Object(n.a)(N.b),
				U = Object(n.a)(N.a),
				x = Object(n.a)(D.k),
				M = Object(n.a)(D.j),
				F = Object(n.a)(D.s),
				G = Object(n.a)(D.r),
				B = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = (await ((e, t) => Object(f.a)(e, {
							...v,
							variables: t
						}))(s(), e)).body,
						{
							subredditNames: a,
							...c
						} = e,
						o = [];
					try {
						for (const e of n.data.subredditsInfoByNames) {
							const t = e.elements.edges[0];
							t && Object(O.l)(t.node) && R({
								getState: r,
								onFailure: e => {
									throw e
								},
								onSuccess: e => o.push(e),
								options: {
									...c,
									subredditName: t.node.subreddit.name
								},
								subreddit: e
							})
						}
						t(F(o))
					} catch (d) {
						t(G(d))
					}
				}, q = e => async (t, r, {
					gqlContext: n
				}) => {
					var o;
					const {
						includePostImageOCRAltText: u,
						includeListingBelowExperiment: b,
						includeOtherDiscussions: y,
						includePostFeed: E,
						includePostQASchemaEligibilityFlag: m,
						postId: _,
						range: O,
						sort: D,
						subredditName: v
					} = e, w = Object(c.a)(_, null, {
						isOtherDiscussions: !0
					}), C = r(), N = Object(L.w)(C, {
						listingKey: w
					}), F = y && (!N || 0 === N.length), G = Object(c.a)(v, s.P[D], {
						t: O
					}), B = Object(L.w)(C, {
						listingKey: G
					}), q = E && (!B || 0 === B.length), H = Object(a.a)(_), K = Object(L.w)(C, {
						listingKey: H
					}), V = b && (!K || 0 === K.length), W = Object(L.D)(C, {
						postId: _
					}), Y = u && !!W && !!W.media && (Object(P.H)(W.media) || Object(P.F)(W.media)) && !W.media.altText;
					if (!(F || q || V || Y || m)) return;
					F && t(g({
						key: w
					}));
					const $ = await ((e, t) => Object(f.a)(e, {
							...T,
							variables: t
						}))(n(), e),
						Q = $.body;
					m && ($.ok ? Q.data && Q.data.post && t(d({
						postId: _,
						isEligibleForQASchema: null !== (o = Q.data.post.isEligibleForQASchema) && void 0 !== o && o
					})) : t(i())), F && h({
						getState: r,
						onFailure: e => t(I(e)),
						onSuccess: e => t(S(e)),
						postId: _,
						response: $
					}), q && ($.ok ? Q.data && R({
						getState: r,
						onFailure: e => t(M(e)),
						onSuccess: e => t(x(e)),
						options: e,
						subreddit: Q.data.subreddit
					}) : t(M($.error))), V && $.ok && j({
						getState: r,
						onFailure: e => t(p(e)),
						onSuccess: e => t(l(e)),
						postId: _,
						post: Q.data.post
					}), Y && $.ok && A({
						getState: r,
						onFailure: e => t(U(e)),
						onSuccess: e => t(k(e)),
						postId: _,
						post: Q.data.post
					})
				}
		},
		"./src/reddit/actions/subredditAutocomplete/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			}));
			const s = "SUBREDDIT_AUTOCOMPLETE__PENDING",
				n = "SUBREDDIT_AUTOCOMPLETE__LOADED",
				a = "SUBREDDIT_AUTOCOMPLETE__FAILED"
		},
		"./src/reddit/actions/subredditCreation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return y
			})), r.d(t, "d", (function() {
				return E
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "e", (function() {
				return S
			})), r.d(t, "f", (function() {
				return g
			}));
			var s = r("./src/config.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				d = r("./src/reddit/constants/headers.ts"),
				i = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const u = e => ({
				public_description: e.publicDescription,
				name: e.name,
				type: e.type,
				over_18: e.over18,
				restrict_commenting: e.restrictCommenting,
				restrict_posting: e.restrictPosting,
				existing_tags: e.existingTags.join(","),
				new_tags: e.newTags.join(","),
				primary_tag: e.primaryTagId
			});
			var l = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = r("./src/reddit/selectors/subreddit.ts"),
				f = r("./src/telemetry/index.ts");
			const y = "SUBREDDIT__CREATE_PENDING",
				E = "SUBREDDIT__CREATE_SUCCEEDED",
				m = "SUBREDDIT__CREATE_FAILED",
				_ = "SUBREDDIT__CREATE_CLEARED",
				O = Object(n.a)(y),
				h = Object(n.a)(E),
				I = Object(n.a)(m),
				S = Object(n.a)(_),
				g = e => async (t, r, {
					apiContext: n
				}) => {
					const y = r(),
						{
							name: E,
							type: m
						} = e;
					if (Object(b.k)(y)) return;
					t(O({
						subredditName: E
					}));
					const _ = await ((e, t) => Object(c.a)(Object(o.a)(e, [d.a]), {
						endpoint: Object(i.a)(`${e.apiUrl}/api/v1/subreddit/create_subreddit`),
						method: a.cb.POST,
						data: u(t)
					}))(n(), e);
					if (_.ok) {
						const r = _.body,
							n = r.fullname;
						Object(f.a)(Object(p.c)(m, e, n)(y)), t(h({
							subredditName: E
						})), window.location.href = `${s.a.redditUrl}${r.path}new`, Object(l.b)(l.a.SubredditCreation)
					} else _.error && Object(f.a)(Object(p.d)(_.error.type)(y)), t(I({
						subredditName: E,
						error: _.error
					}))
				}
		},
		"./src/reddit/actions/subredditCrosspostable.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "d", (function() {
				return y
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/subscription/index.ts"),
				a = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				d = r("./src/reddit/constants/headers.ts"),
				i = r("./src/reddit/selectors/subreddit.ts");
			const u = "SUBREDDIT_CROSSPOSTABLE__PENDING",
				l = "SUBREDDIT_CROSSPOSTABLE__LOADED",
				p = "SUBREDDIT_CROSSPOSTABLE__FAILED",
				b = (Object(s.a)(u), Object(s.a)(l)),
				f = Object(s.a)(p),
				y = () => async (e, t, {
					apiContext: r
				}) => {
					await e(n.e());
					const {
						api: s,
						ids: u
					} = t().subreddits.crosspostable;
					if (s.pending || Object.keys(u).length) return;
					const l = await ((e, t) => Object(c.a)(Object(o.a)(e, [d.a]), {
						data: t,
						endpoint: `${e.apiUrl}/api/crosspostable_subreddits.json`,
						method: a.cb.GET
					}))(r(), {
						sr_detail: !1
					});
					if (l.ok) {
						const r = t(),
							s = l.body && l.body.length ? l.body.map(e => Object(i.F)(r, e)).filter(e => !!e).reduce((e, t) => (e[t] = !0, e), {}) : {};
						e(b({
							subredditIds: s
						}))
					} else e(f({
						error: l.error
					}))
				}
		},
		"./src/reddit/actions/subredditMention/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			}));
			const s = "SUBREDDIT_MENTION_LOADED",
				n = "SUBREDDIT__MODEL_SUCCEEDED",
				a = "SUBREDDIT__MODEL_PENDING",
				c = "SUBREDDIT__MODEL_FAILED"
		},
		"./src/reddit/actions/subredditTopContent.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return d
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "d", (function() {
				return f
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/preferences.ts"),
				a = r("./src/graphql/operations/SubredditTopContent.json"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const d = "SUBREDDIT_TOP_CONTENT__PENDING",
				i = "SUBREDDIT_TOP_CONTENT__LOADED",
				u = "SUBREDDIT_TOP_CONTENT__FAILED",
				l = Object(s.a)(d),
				p = Object(s.a)(i),
				b = Object(s.a)(u),
				f = e => async (t, r, s) => {
					const d = e.toLowerCase(),
						i = r(),
						{
							api: u,
							topContent: f
						} = i.subreddits;
					if (u.topContent.pending[d] || f[d]) return;
					t(l({
						subredditName: d
					})), t(Object(n.z)());
					const y = await ((e, t) => Object(c.a)(e, {
						...a,
						variables: t
					}))(s.gqlContext(), {
						subredditName: d
					});
					if (y.ok) {
						const e = y.body.data.subreddit;
						if (e) {
							const r = Object(o.c)(e);
							r && t(p({
								...r,
								subredditName: d
							}))
						}
					} else t(b({
						subredditName: d,
						error: y.error
					}))
				}
		},
		"./src/reddit/actions/theme.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "THEME_CHANGED",
				a = (Object(s.a)(n), "BOOTUP_THEME"),
				c = Object(s.a)(a)
		},
		"./src/reddit/actions/tracking.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "TRACKING__VIEWPORT_DATA_LOADED",
				a = "TRACKING__VIEWPORT_DATA_UNLOADED",
				c = Object(s.a)(n);
			Object(s.a)(a)
		},
		"./src/reddit/actions/trafficStats/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			}));
			const s = "SUBREDDIT__TRAFFIC_STATS_LOADED",
				n = "SUBREDDIT__TRAFFIC_STATS_PENDING",
				a = "SUBREDDIT__TRAFFIC_STATS_FAILED"
		},
		"./src/reddit/actions/upload.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return u
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "m", (function() {
				return h
			})), r.d(t, "k", (function() {
				return A
			})), r.d(t, "l", (function() {
				return j
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "j", (function() {
				return C
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/get.js"),
				n = r.n(s),
				a = r("./node_modules/uuid/v4.js"),
				c = r.n(a),
				o = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/uploadToS3/index.ts"),
				i = r("./src/reddit/models/Upload/index.ts");
			const u = "UPLOAD_PENDING",
				l = "UPLOAD_UPLOADING",
				p = "UPLOAD_METADATA_CHANGED",
				b = "UPLOAD_PROGRESS",
				f = "UPLOAD_SUCCESS",
				y = "UPLOAD_FAILED",
				E = "UPLOAD_CANCELED",
				m = "UPLOAD_REMOVED",
				_ = Object(o.a)(u),
				O = Object(o.a)(l),
				h = Object(o.a)(p),
				I = Object(o.a)(b),
				S = Object(o.a)(f),
				g = Object(o.a)(y),
				D = Object(o.a)(E),
				T = Object(o.a)(m),
				v = new Map,
				A = (e, t) => {
					const r = v.get(e) || [];
					r.push(t), v.set(e, r)
				},
				j = (e, t, r, s = !1) => async (a, o, {
					apiContext: u
				}) => {
					const l = t;
					if (o().uploads[l] && Object(i.c)(o().uploads[l])) return;
					const p = c()(),
						b = () => {
							const e = o().uploads[l];
							return !e || e.id !== p || e.status === i.a.CANCELED
						};
					a(_({
						key: l,
						id: p,
						file: e
					}));
					const {
						uploadLease: f,
						error: y
					} = await r(o().uploads[l]);
					if (b()) return;
					if (y || !f) return void a(g({
						key: l,
						error: y
					}));
					let E;
					A(p, () => {
						E && E.abort()
					}), a(O({
						key: l
					}));
					const m = await Object(d.a)(e, f, e => (E = e, s && e.on("progress", e => {
						if (!b() && "upload" === e.direction) {
							const t = {
								percent: e.percent,
								total: e.total,
								uploaded: e.loaded
							};
							a(I({
								key: l,
								progress: t
							}))
						}
					}), e));
					if (E = null, !b())
						if (m.ok) {
							const e = decodeURIComponent(m.body.PostResponse.Location);
							a(S({
								key: l,
								url: e
							}))
						} else {
							const e = n()(m, "body.Error.Message.0"),
								t = {
									type: "ERROR",
									...e ? {
										fields: [{
											field: "0",
											msg: e
										}]
									} : {}
								};
							a(g({
								key: l,
								error: t
							}))
						}
				}, w = (e, t = !1) => (r, s) => {
					const n = s().uploads[e];
					n && (((e, t) => {
						const r = v.get(e);
						r && r.forEach(r => r(e, t)), v.delete(e)
					})(n.id, t), r(t ? T({
						key: e
					}) : D({
						key: e
					})))
				}, C = (e, t = !1) => (r, s) => {
					Object.keys(s().uploads).forEach(s => {
						s.startsWith(e) && r(w(s, t))
					})
				}
		},
		"./src/reddit/actions/userBlocks.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "h", (function() {
				return E
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "g", (function() {
				return g
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/blockedRedditors.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/reddit/endpoints/accounts/index.ts"),
				d = r("./src/reddit/models/Toast/index.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const u = "USER_BLOCK__PENDING",
				l = "USER_BLOCK__LOADED",
				p = "USER_BLOCK__FAILED",
				b = Object(n.a)(u),
				f = Object(n.a)(l),
				y = Object(n.a)(p),
				E = e => async (t, r, {
					apiContext: n
				}) => {
					if (r().blockUser.api.pending[e]) return;
					t(b({
						username: e
					}));
					const i = await Object(o.a)(n(), e),
						u = `error-block-${e}`;
					if (i.ok) i.body.name && t(f(i.body)), i.body.id && t(Object(a.f)(i.body.id)), t(c.f(u)), t(c.e({
						kind: d.b.SuccessCommunity,
						text: s.fbt._("{username} is now blocked", [s.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const r = {
							type: i.error ? i.error.type : "Unknown error",
							username: e
						};
						t(y(r)), t(c.e({
							id: u,
							kind: d.b.Error,
							text: s.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: E(e)
						}))
					}
				}, m = "USER_UNBLOCK__PENDING", _ = "USER_UNBLOCK__SUCCESS", O = "USER_UNBLOCK__FAILED", h = Object(n.a)(m), I = Object(n.a)(_), S = Object(n.a)(O), g = e => async (t, r, {
					apiContext: n
				}) => {
					const u = r(),
						l = Object(i.j)(u),
						p = l ? l.id : void 0,
						b = u.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(h({
						name: e
					})), (await Object(o.c)(n(), p, e)).ok ? (t(I({
						name: e
					})), b && b.id && t(Object(a.h)(b.id)), t(c.e({
						kind: d.b.SuccessCommunity,
						text: s.fbt._("{username} is now unblocked", [s.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(c.e({
						kind: d.b.Error,
						text: s.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(S({
						name: e
					}))))
				}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "r", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "i", (function() {
				return a
			})), r.d(t, "j", (function() {
				return c
			})), r.d(t, "h", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "p", (function() {
				return l
			})), r.d(t, "q", (function() {
				return p
			})), r.d(t, "o", (function() {
				return b
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "g", (function() {
				return y
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "m", (function() {
				return m
			})), r.d(t, "n", (function() {
				return _
			})), r.d(t, "l", (function() {
				return O
			})), r.d(t, "k", (function() {
				return h
			}));
			const s = "USER_FLAIR_DATA__MUTATED",
				n = "AUTHOR_FLAIR_DATA__MUTATED",
				a = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				c = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				i = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				u = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				l = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				b = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				y = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				E = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				m = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				_ = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				O = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				h = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/actions/userWhitelist.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return d
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "c", (function() {
				return E
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "h", (function() {
				return I
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/endpoints/accounts/index.ts"),
				o = r("./src/reddit/models/Toast/index.ts");
			const d = "USER_WHITELIST__PENDING",
				i = "USER_WHITELIST__SUCCESS",
				u = "USER_WHITELIST__FAILED",
				l = Object(n.a)(d),
				p = Object(n.a)(i),
				b = Object(n.a)(u),
				f = e => async (t, r, {
					apiContext: n
				}) => {
					t(l());
					const d = await Object(c.e)(n(), e);
					d.ok ? d.body.name && (t(p(d.body)), t(a.e({
						kind: o.b.SuccessCommunity,
						text: s.fbt._("Changes saved", null, {
							hk: "3cOmlv"
						})
					}))) : (t(b()), t(a.e({
						kind: o.b.Error,
						text: s.fbt._("An error has occured. Please try again later", null, {
							hk: "3Dszn7"
						})
					})))
				}, y = "USER_UNWHITELIST__PENDING", E = "USER_UNWHITELIST__SUCCESS", m = "USER_UNWHITELIST__FAILED", _ = Object(n.a)(y), O = Object(n.a)(E), h = Object(n.a)(m), I = e => async (t, r, {
					apiContext: n
				}) => {
					t(_({
						name: e
					})), (await Object(c.d)(n(), e)).ok ? (t(O({
						name: e
					})), t(a.e({
						kind: o.b.SuccessCommunity,
						text: s.fbt._("Changes saved", null, {
							hk: "2o6UcC"
						})
					}))) : (t(h({
						name: e
					})), t(a.e({
						kind: o.b.Error,
						text: s.fbt._("An error has occured. Please try again later", null, {
							hk: "3Dszn7"
						})
					})))
				}
		},
		"./src/reddit/actions/usernameAvailable.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "f", (function() {
				return f
			}));
			var s, n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/endpoints/usernameAvailable/index.ts");
			! function(e) {
				e[e.Available = 0] = "Available", e[e.Error = 1] = "Error", e[e.Pending = 2] = "Pending", e[e.Unavailable = 3] = "Unavailable"
			}(s || (s = {}));
			const c = "USERNAME_AVAILABLE__AVAILABLE",
				o = "USERNAME_AVAILABLE__FAILURE",
				d = "USERNAME_AVAILABLE__PENDING",
				i = "USERNAME_AVAILABLE__UNAVAILABLE",
				u = Object(n.a)(c),
				l = Object(n.a)(o),
				p = Object(n.a)(d),
				b = Object(n.a)(i),
				f = ({
					username: e
				}) => async (t, r, {
					apiContext: n
				}) => {
					const c = r().users.nameAvailable;
					if (!c[e] || c[e] === s.Error) {
						t(p({
							username: e
						}));
						const r = await Object(a.a)(n(), {
							username: e
						});
						r.ok ? r.body ? t(u({
							username: e
						})) : t(b({
							username: e
						})) : t(l({
							username: e
						}))
					}
				}
		},
		"./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/lib/timezone/index.ts"),
				n = r("./src/reddit/models/ScheduledPost/index.ts");
			const a = {
					frequency: n.d.Hourly,
					interval: 1,
					byMonthDays: [],
					byWeekDays: []
				},
				c = () => {
					const e = new Date;
					return e.setMinutes(60), {
						submitDate: Object(s.g)(e),
						timezoneName: Object(s.b)() || s.a,
						frequencyOption: null,
						recurrenceInfo: null
					}
				},
				o = (e, t, r = a) => {
					const s = Object(n.q)(e.getDay()),
						c = e.getDate();
					let o = r ? {
						...r
					} : null;
					switch (t) {
						case n.d.Monthly:
							o = {
								...a,
								...r,
								frequency: t,
								byMonthDays: [c]
							};
							break;
						case n.d.Weekly:
							o = {
								...a,
								...r,
								frequency: t,
								byWeekDays: [s]
							};
							break;
						case n.d.Daily:
						case n.d.Hourly:
							o = {
								...a,
								...r,
								frequency: t
							};
							break;
						case null:
							return null
					}
					return o
				}
		},
		"./src/reddit/components/TrackingHelper/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return p
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/telemetry/index.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const i = n.a.createContext(() => {});

			function u({
				children: e
			}) {
				const t = Object(a.f)(),
					r = Object(s.useCallback)(e => {
						{
							const r = t.getState(),
								s = e(r);
							Object(o.a)({
								...c.defaults(r),
								...s
							})
						}
					}, [t]);
				return n.a.createElement(i.Provider, {
					value: r
				}, e ? n.a.Children.only(e) : null)
			}

			function l() {
				return Object(s.useContext)(i)
			}

			function p(e) {
				function t(t) {
					const r = l();
					return n.a.createElement(e, d({}, t, {
						sendEvent: r
					}))
				}
				return t.displayName = "Tracked", t.WrappedComponent = e, t
			}
		},
		"./src/reddit/constants/inFeedChaining.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			}));
			const s = 3,
				n = 5,
				a = 10
		},
		"./src/reddit/constants/shortcuts.ts": function(e, t, r) {
			"use strict";
			var s, n;
			r.d(t, "d", (function() {
					return s
				})), r.d(t, "c", (function() {
					return n
				})), r.d(t, "b", (function() {
					return a
				})), r.d(t, "a", (function() {
					return c
				})),
				function(e) {
					e.CommentPage = "CommentPage", e.Global = "Global", e.Lightbox = "Lightbox", e.Listing = "Listing", e.Modqueue = "Modqueue"
				}(s || (s = {})),
				function(e) {
					e.Close = "CLOSE", e.CollapseOrLoad = "COLLAPSE_OR_LOAD", e.Downvote = "DOWNVOTE", e.Expando = "EXPANDO", e.Hide = "HIDE", e.Konami = "KONAMI", e.NewPost = "NEW_POST", e.NextComment = "NEXT_COMMENT", e.NextPost = "NEXT_POST", e.OpenIndex = "OPEN_INDEX", e.OpenLightbox = "OPEN_LIGHTBOX", e.OpenLink = "OPEN_LINK", e.PrevComment = "PREV_COMMENT", e.PrevPost = "PREV_POST", e.Reply = "REPLY", e.Save = "SAVE", e.Upvote = "UPVOTE"
				}(n || (n = {}));
			const a = "SHORTCUT_FOCUSABLE_DIV",
				c = [9, 13, 32]
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "b", (function() {
				return p
			}));
			var s = r("./src/config.ts"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts");
			const d = async (e, t) => Object(a.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: n.cb.POST
			}), i = async (e, t, r) => Object(a.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: r,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: n.cb.POST
			}), u = async (e, t) => Object(a.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: n.cb.POST
			}), l = async (e, t) => Object(a.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: n.cb.POST
			}), p = async (e, t) => Object(a.a)(Object(c.a)(e, [o.a]), {
				endpoint: `${s.a.oauthUrl}/user/${t}/about`,
				method: n.cb.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/endpoints/crowdControl/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return c
			}));
			var s, n = r("./src/graphql/operations/CrowdControlLevelInfo.json"),
				a = r("./src/lib/makeGqlRequest/index.ts");
			! function(e) {
				e.Off = "OFF", e.Lenient = "LENIENT", e.Medium = "MEDIUM", e.Strict = "STRICT"
			}(s || (s = {}));
			const c = (e, t) => Object(a.a)(e, {
				...n,
				variables: {
					postId: t
				}
			})
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/config.ts"),
				n = r("./src/reddit/endpoints/governance/requester.ts");
			async function a(e, t, r) {
				const a = Object(n.a)(e, {
						headers: {
							"X-HTTP-Method-Override": "GET"
						},
						method: "post",
						endpoint: `${s.a.metaUrl}/badges/${t}`,
						data: {
							selected: !0,
							users: r
						}
					}),
					c = await a;
				if (c.ok) {
					const e = {},
						t = {},
						r = c.body;
					return Object.keys(r).forEach(s => {
						const n = r[s];
						t[s] = n, e[n.userId] || (e[n.userId] = []), e[n.userId].push(n.id)
					}), {
						...c,
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					}
				}
				return c
			}
			async function c(e, t, r) {
				const a = await Object(n.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/badges/${t}?users=${r}`
				});
				if (a.ok) {
					const e = {},
						t = [],
						r = a.body;
					return Object.keys(r).forEach(s => {
						const n = r[s];
						e[s] = n, t.push(n.id)
					}), {
						...a,
						body: {
							badges: e,
							userOwnedBadges: t
						}
					}
				}
				return a
			}

			function o(e, t, r, a = !0) {
				return Object(n.a)(e, {
					method: "patch",
					endpoint: `${s.a.metaUrl}/badges/${t}/${r}`,
					data: {
						selected: a
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			}));
			var s = r("./src/config.ts"),
				n = r("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(n.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function c(e, t) {
				return Object(n.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function o(e, t) {
				return Object(n.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/orders`,
					data: t
				})
			}

			function d(e, t) {
				return Object(n.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/orders`,
					data: {
						currency: "usd",
						price: t.price,
						products: t.products,
						providerArgs: {
							paymentNonce: t.nonce
						},
						providerName: "braintree",
						subredditId: t.subredditId
					}
				})
			}
		},
		"./src/reddit/endpoints/usernameAvailable/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts");
			const o = (e, t) => Object(n.a)(Object(a.a)(e, [c.a]), {
				method: s.cb.GET,
				endpoint: `${e.apiUrl}/api/username_available.json?user=${t.username}`,
				type: "json"
			})
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, r) {
			"use strict";

			function s(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let r = 0;
				return e.placement && t.placement && (r = e.placement.localeCompare(t.placement)), 0 === r && e.position && t.position && (r = e.position - t.position), 0 === r && (r = e.title.localeCompare(t.title)), r
			}

			function n(e) {
				return [...e].sort(s)
			}
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts");
			t.a = () => ({
				type: n.E.SERVER_ERROR,
				fields: [{
					field: "",
					msg: s.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js");

			function n(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function a(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(n).join(" ") : s.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function c(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const n = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: r
					} of e) t.push(Object(s.e)(r));
				return t
			}
		},
		"./src/reddit/helpers/isArrayEqual.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/lodash/isEqual.js"),
				n = r.n(s),
				a = r("./node_modules/lodash/xorWith.js"),
				c = r.n(a);
			t.a = (e, t) => {
				const r = c()(e, t, n.a);
				return !(!r || 0 !== r.length)
			}
		},
		"./src/reddit/helpers/loadThirdPartyScript.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/config.ts"),
				n = r("./src/lib/fastdom/index.ts");
			const a = "https://js.stripe.com/v3/",
				c = "https://www.paypalobjects.com/api/checkout.js",
				o = {
					checkout: "https://js.braintreegateway.com/web/3.44.2/js/paypal-checkout.min.js",
					client: "https://js.braintreegateway.com/web/3.44.2/js/client.min.js",
					paypal: `https://www.paypal.com/sdk/js?client-id=${s.a.paypal.braintreeApiKey}` + "&currency=USD&vault=true"
				};

			function d(e, t) {
				return t() ? Promise.resolve() : new Promise((r, s) => n.a.write(() => {
					t() && r();
					const s = document.head;
					let n = s.querySelector(`script[src='${e}']`);
					n || ((n = document.createElement("script")).src = e, s.appendChild(n)), n.addEventListener("load", (function e() {
						this.removeEventListener("load", e), r()
					}))
				}))
			}

			function i() {
				return d(a, () => "undefined" != typeof Stripe)
			}

			function u() {
				return d(c, () => "undefined" != typeof paypalCheckout).then(() => {
					"undefined" == typeof paypalCheckout && "undefined" != typeof window && (window.paypalCheckout = paypal), paypal = void 0
				})
			}

			function l() {
				return Promise.all(Object.keys(o).map(e => {
					const t = "__" + e;
					return d(o[e], () => void 0 !== window[t]).then(() => {
						window[t] = !0
					})
				}))
			}
		},
		"./src/reddit/helpers/onBeforeRequestFactory/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/node-libs-browser/node_modules/url/url.js"),
				n = r.n(s),
				a = r("./src/config.ts"),
				c = r("./src/lib/addQueryParams/index.ts"),
				o = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/selectors/subreddit.ts"));
			const d = new RegExp("^/desktopapi/v1/(duplicates/[^/]+|frontpage|news|search|subreddits/(all|popular))(/|$)"),
				i = new RegExp("^/desktopapi/v1/(search|subreddits|postcomments|collection_postcomments|submitpage)(/|$)"),
				u = new RegExp("^/desktopapi/v1/(subreddits|postcomments|collection_postcomments)/?$"),
				l = (new RegExp("^/desktopapi/v1/(postcomments)(/+|$)"), new RegExp("^/desktopapi/v1/frontpage/?$")),
				p = new RegExp("^/desktopapi/v1/submitpage(/|$)");
			var b = (e, t, r) => {
					const s = new Set;
					e.user.session && !e.user.session.unsafeLoggedOut && (e.user.account || (s.add("identity"), s.add("prefs"), s.add("prefsAccount")), (e => !d.test(e.pathname || ""))(t) && s.add("identity")), !e.live.isFrontpageLoaded && (e => l.test(e.pathname || ""))(t) && s.add("featuredLiveThread");
					const n = t.pathname || "";
					if (i.test(n) || u.test(n)) {
						const n = ((e, t) => {
								if (p.test(e.pathname || "")) {
									const {
										subreddit: e
									} = t.data;
									return e
								}
							})(t, r),
							a = e.platform.currentPage,
							c = a && a.urlParams.subredditName,
							d = n || c || "",
							i = Object(o.F)(e, d);
						i && e.structuredStyles.models[i] || s.add("structuredStyles"), e.user.prefs.subreddit[i] || s.add("prefsSubreddit")
					}
					return [...s].join(",")
				},
				f = r("./src/reddit/selectors/user.ts");
			t.a = e => t => {
				const r = n.a.parse(t.endpoint, !0),
					{
						host: s,
						protocol: o
					} = r;
				if (`${o}//${s}` === a.a.gatewayUrl) {
					const s = {},
						n = Object(f.cb)(e.getState()) ? "1" : "";
					s.allow_over18 = n, s.include = b(e.getState(), r, t), t.endpoint = Object(c.a)(t.endpoint, s)
				}
			}
		},
		"./src/reddit/helpers/ordinal/index.ts": function(e, t, r) {
			"use strict";
			t.a = function(e) {
				const t = ["th", "st", "nd", "rd"],
					r = e % 100;
				return e + (t[(r - 20) % 10] || t[r] || t[0])
			}
		},
		"./src/reddit/helpers/pageActionLoginRedirect.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/history/esm/history.js"), r("./src/reddit/actions/platform.ts");
			var s = r("./src/config.ts");
			t.a = (e, t) => {
				const r = t.platform.currentPage && t.platform.currentPage.url;
				let n = `${s.a.accountManagerOrigin}/login/`;
				const a = window.location.origin;
				r && (n += `?dest=${encodeURIComponent(`${a}${r}`)}`), window.location.href = n
			}
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			}));
			var s = r("./src/lib/constants/index.ts");
			const n = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case s.E.NO_STRIPE_SUBSCRIPTION:
							case s.E.USER_DOESNT_EXIST:
							case s.E.USER_REQUIRED_ERROR:
							case s.E.VALIDATION_ERROR:
								return e;
							case s.E.NO_USER:
							case s.E.NO_TEXT:
							case s.E.NO_URL:
								return s.E.VALIDATION_ERROR;
							case s.E.CREDIT_CARD_FAILURE:
							case s.E.CREDIT_CARD_FAILURE_GENERIC:
								return s.E.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return s.E.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.E.VALIDATION_ERROR
				},
				a = e => {
					const t = e.body;
					return {
						type: n(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				c = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: a(e)
					} : e
				};
			t.a = a
		},
		"./src/reddit/helpers/scheduledPosts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return f
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "i", (function() {
				return m
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "e", (function() {
				return S
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "g", (function() {
				return D
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js");
			r("./node_modules/react/index.js");
			const n = function(e) {
				if (void 0 === e) throw new Error("invariant(...): Second argument must be a string.")
			};

			function a(e, t, ...r) {
				if (n(t), !e) {
					let e;
					if (void 0 === t) e = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
					else {
						let s = 0;
						(e = new Error(t.replace(/%s/g, () => String(r[s++])))).name = "Invariant Violation"
					}
					throw e.framesToPop = 1, e
				}
			}
			const c = {
					AND: "AND",
					NONE: "NONE",
					OR: "OR"
				},
				o = {
					COMMA: "COMMA",
					SEMICOLON: "SEMICOLON"
				};
			var d = function(e, t, r) {
					const n = e.length;
					if (0 === n) return "";
					if (1 === n) return e[0];
					const d = e[n - 1];
					let i = e[0];
					for (let a = 1; a < n - 1; ++a) switch (r) {
						case o.SEMICOLON:
							i = s.fbt._("{previous items}; {following items}", [s.fbt._param("previous items", i), s.fbt._param("following items", e[a])], {
								hk: "4hs4xq"
							});
							break;
						default:
							i = s.fbt._("{previous items}, {following items}", [s.fbt._param("previous items", i), s.fbt._param("following items", e[a])], {
								hk: "2z8RMb"
							})
					}
					return function(e, t, r, n) {
						switch (r) {
							case c.AND:
								return s.fbt._("{list of items} and {last item }", [s.fbt._param("list of items", e), s.fbt._param("last item ", t)], {
									hk: "1ylan1"
								});
							case c.OR:
								return s.fbt._("{list of items} or {last item}", [s.fbt._param("list of items", e), s.fbt._param("last item", t)], {
									hk: "3q8AmB"
								});
							case c.NONE:
								switch (n) {
									case o.SEMICOLON:
										return s.fbt._("{previous item}; {last item}", [s.fbt._param("previous item", e), s.fbt._param("last item", t)], {
											hk: "1h77rJ"
										});
									default:
										return s.fbt._("{list of items}, {last item}", [s.fbt._param("list of items", e), s.fbt._param("last item", t)], {
											hk: "3Q0iaX"
										})
								}
								default:
									a(!1, "Invalid conjunction %s provided to intlList", r)
						}
					}(i, d, t || c.AND, r || o.COMMA)
				},
				i = r("./src/lib/timezone/index.ts"),
				u = r("./src/reddit/helpers/isArrayEqual.ts"),
				l = r("./src/reddit/helpers/ordinal/index.ts"),
				p = r("./src/reddit/models/ScheduledPost/index.ts");
			const b = e => {
					return `${e.toLocaleDateString(void 0,{month:"numeric",day:"numeric"})} @ ${e.toLocaleTimeString(void 0,{hour:"numeric",minute:"numeric"}).replace(" ","").toLowerCase()}`
				},
				f = (e, t) => {
					if (e && t) {
						const r = Object(i.f)(E(e, t)),
							n = b(r);
						return s.fbt._("Submit post at {time}", [s.fbt._param("time", n)], {
							hk: "IZ3L"
						})
					}
					return s.fbt._("Submit post at scheduled event time", null, {
						hk: "lYsoU"
					})
				},
				y = e => e.slice(0, 5),
				E = (e, t) => `${e}T${y(t)}:00`,
				m = e => {
					const [t, r] = e.split("T");
					return [t, y(r)]
				},
				_ = e => {
					const [t, r] = m(e);
					if (t && r) {
						const e = Object(i.f)(E(t, r));
						return b(e)
					}
					return ""
				},
				O = e => {
					const t = Object(i.d)(e);
					let r, s = e;
					if (t) {
						r = t.offset, s = `(GMT${Object(i.e)(t.offset)}) ${e.replace("/"," - ").replace(/_/g," ")}`
					}
					return {
						name: e,
						displayText: s,
						offset: r
					}
				},
				h = e => "string" == typeof e,
				I = e => {
					const t = new Date,
						r = e - t.getDay();
					return t.setDate(t.getDate() + r), t.toLocaleDateString(void 0, {
						weekday: "long"
					})
				},
				S = e => {
					const t = (e => {
						const [t, r] = m(e);
						if (t && r) {
							return Object(i.f)(E(t, r)).toLocaleTimeString(void 0, {
								hour: "numeric",
								minute: "numeric"
							})
						}
						return ""
					})(e.publishAt);
					if (e.frequency === p.d.Hourly) return 2 === e.interval ? s.fbt._("Every other hour", null, {
						hk: "64vzK"
					}) : e.interval > 1 ? s.fbt._("Every {hour interval} hours", [s.fbt._param("hour interval", e.interval.toString())], {
						hk: "3x8zaD"
					}) : s.fbt._("Every hour", null, {
						hk: "1VzCs"
					});
					if (e.frequency === p.d.Daily) return 2 === e.interval ? s.fbt._("Every other day at {start time}", [s.fbt._param("start time", t)], {
						hk: "yTynp"
					}) : e.interval > 1 ? s.fbt._("Every {day interval} days at {start time}", [s.fbt._param("day interval", e.interval.toString()), s.fbt._param("start time", t)], {
						hk: "2OoGlG"
					}) : s.fbt._("Every day at {start time}", [s.fbt._param("start time", t)], {
						hk: "1cvwm2"
					});
					if (e.frequency === p.d.Weekly) {
						const r = (e => d(e.map(p.k).sort((e, t) => e - t).map(I), c.AND, o.COMMA))(e.byWeekDays);
						return 2 === e.interval ? s.fbt._("Every other week on {days of week } at {start time}", [s.fbt._param("days of week ", r), s.fbt._param("start time", t)], {
							hk: "43xwaa"
						}) : e.interval > 1 ? s.fbt._("Every {interval} weeks on {days of week} at {start time}", [s.fbt._param("interval", e.interval.toString()), s.fbt._param("days of week", r), s.fbt._param("start time", t)], {
							hk: "2IVbH"
						}) : s.fbt._("Every week on {days of week} at {start time}", [s.fbt._param("days of week", r), s.fbt._param("start time", t)], {
							hk: "2Zl0L"
						})
					}
					const r = (e => d(e.sort((e, t) => e - t).map(l.a), c.AND, o.COMMA))(e.byMonthDays);
					return 2 === e.interval ? s.fbt._({
						"*": "Every other month on the {days of month} days at {start time}",
						_1: "Every other month on the {days of month} day at {start time}"
					}, [s.fbt._param("days of month", r), s.fbt._plural(e.byMonthDays.length), s.fbt._param("start time", t)], {
						hk: "okH9o"
					}) : e.interval > 1 ? s.fbt._({
						"*": "Every {interval} months on the {days of month} days at {start time}",
						_1: "Every {interval} months on the {days of month} day at {start time}"
					}, [s.fbt._param("interval", e.interval.toString()), s.fbt._param("days of month", r), s.fbt._plural(e.byMonthDays.length), s.fbt._param("start time", t)], {
						hk: "KqN3x"
					}) : s.fbt._({
						"*": "Every month on the {days of month} days at {start time}",
						_1: "Every month on the {days of month} day at {start time}"
					}, [s.fbt._param("days of month", r), s.fbt._plural(e.byMonthDays.length), s.fbt._param("start time", t)], {
						hk: "1jBuYc"
					})
				},
				g = e => {
					let t = null;
					e.frequency && (t = e.frequency), (e.byWeekDays.length > 1 || e.byMonthDays.length > 1 || e.interval > 1) && (t = p.b);
					const r = Object(i.f)(e.publishAt),
						s = Object(p.q)(r.getDay()),
						n = r.getDate();
					return 1 === e.byWeekDays.length && e.byWeekDays[0] !== s && (t = p.b), 1 === e.byMonthDays.length && e.byMonthDays[0] !== n && (t = p.b), {
						recurrenceInfo: e.frequency ? {
							frequency: e.frequency,
							byMonthDays: e.byMonthDays,
							byWeekDays: e.byWeekDays,
							interval: e.interval
						} : null,
						frequencyOption: t,
						submitDate: e.publishAt,
						timezoneName: e.clientTimezone
					}
				},
				D = (e, t) => {
					if (!e && t || e && !t) return !1;
					if (!e && !t) return !0;
					for (const r in e) {
						if (!t) return !1;
						if (e.hasOwnProperty(r)) {
							if (Array.isArray(e[r]) && (!Array.isArray(t[r]) || !Object(u.a)(e[r], t[r]))) return !1;
							if (e[r] !== t[r]) return !1
						}
					}
					return !0
				}
		},
		"./src/reddit/helpers/tabBadging/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return l
			}));
			var s = r("./src/config.ts");
			const n = `${s.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				a = `${s.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				c = `${s.a.assetPath}/img/favicon/favicon-32x32.png`,
				o = `${s.a.assetPath}/img/favicon/favicon-16x16.png`,
				d = "badgeCountSync",
				i = e => window.document.querySelector(`link[href="${e}"]`),
				u = (e = !0) => {
					const t = i(e ? c : n),
						r = i(e ? o : a);
					t && r && (t.href = e ? n : c, r.href = e ? a : o)
				},
				l = e => {
					navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: d,
						badgeCounts: e
					})
				}
		},
		"./src/reddit/helpers/trackers/commentList.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/telemetry/index.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			const a = (e, t) => {
				Object(s.a)({
					action: "view",
					source: "commentlist",
					noun: "bottom",
					...n.defaults(e),
					listing: n.listing(e, t),
					subreddit: n.subreddit(e)
				})
			}
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return _
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "E", (function() {
				return D
			})), r.d(t, "F", (function() {
				return T
			})), r.d(t, "M", (function() {
				return A
			})), r.d(t, "B", (function() {
				return j
			})), r.d(t, "C", (function() {
				return w
			})), r.d(t, "D", (function() {
				return C
			})), r.d(t, "i", (function() {
				return R
			})), r.d(t, "w", (function() {
				return P
			})), r.d(t, "x", (function() {
				return L
			})), r.d(t, "L", (function() {
				return N
			})), r.d(t, "K", (function() {
				return k
			})), r.d(t, "I", (function() {
				return U
			})), r.d(t, "v", (function() {
				return x
			})), r.d(t, "y", (function() {
				return M
			})), r.d(t, "z", (function() {
				return F
			})), r.d(t, "A", (function() {
				return G
			})), r.d(t, "N", (function() {
				return B
			})), r.d(t, "J", (function() {
				return q
			})), r.d(t, "t", (function() {
				return H
			})), r.d(t, "H", (function() {
				return K
			})), r.d(t, "d", (function() {
				return V
			})), r.d(t, "c", (function() {
				return W
			})), r.d(t, "b", (function() {
				return Y
			})), r.d(t, "f", (function() {
				return $
			})), r.d(t, "e", (function() {
				return Q
			})), r.d(t, "s", (function() {
				return J
			})), r.d(t, "m", (function() {
				return Z
			})), r.d(t, "r", (function() {
				return ee
			})), r.d(t, "k", (function() {
				return te
			})), r.d(t, "l", (function() {
				return re
			})), r.d(t, "n", (function() {
				return se
			})), r.d(t, "p", (function() {
				return ne
			})), r.d(t, "q", (function() {
				return ae
			})), r.d(t, "o", (function() {
				return ce
			})), r.d(t, "j", (function() {
				return oe
			})), r.d(t, "u", (function() {
				return de
			})), r.d(t, "G", (function() {
				return ie
			}));
			var s, n = r("./src/lib/stringInterpolate/index.ts"),
				a = r("./src/reddit/actions/focusedVerticals/constants.ts"),
				c = (r("./src/reddit/constants/categories.tsx"), r("./src/reddit/constants/tracking.ts")),
				o = r("./src/reddit/helpers/correlationIdTracker.ts"),
				d = r("./src/reddit/helpers/trackers/searchResults.ts"),
				i = r("./src/reddit/models/DiscoveryUnit/index.ts"),
				u = r("./src/reddit/models/Widgets/index.ts"),
				l = r("./src/reddit/selectors/posts.ts"),
				p = r("./src/reddit/selectors/telemetry.ts"),
				b = r("./src/reddit/selectors/widgets.ts"),
				f = r("./src/telemetry/index.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(s || (s = {}));
			const y = "discovery_unit",
				E = (e, t, r) => ({
					...p.defaults(e),
					source: y,
					screen: p.screen(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && r ? Object(n.a)(t.title, {
							subredditName: r.name
						}) : t.title,
						name: t.unitName
					}
				}),
				m = (e, t, r) => ({
					...E(e, t, r),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				_ = (e, t) => {
					Object(f.a)(O(t)(e))
				},
				O = (e, t) => r => m(r, e, t),
				h = (e, t, r, s) => "unitName" in t ? E(e, t, s) : ((e, t, r) => ({
					...p.defaults(e),
					source: "search",
					screen: p.screen(e),
					search: r ? {
						...p.search(e, r),
						structureType: p.StructureType.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, r),
				I = (e, t, r, n, a) => ({
					...h(e, t, n, a),
					action: "view",
					noun: s.ITEM_POST,
					post: p.post(e, r)
				}),
				S = ({
					post: e,
					rawQuery: t,
					searchQuery: r
				}) => ({
					displayQuery: decodeURIComponent(r),
					rawQuery: t ? decodeURIComponent(t) : void 0,
					structureType: e && e.isSponsored ? p.StructureType.PromotedTrend : p.StructureType.Trending
				});
			var g;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(g || (g = {}));
			const D = (e, t, r) => {
					Object(f.a)(v(e, t, r, c.c.CLICK))
				},
				T = (e, t, r) => {
					Object(f.a)(v(e, t, r, c.c.VIEW))
				},
				v = (e, t, r, s) => {
					const n = e.trending.models.filter(e => !e.post || !e.post.isSponsored).findIndex(e => e.id === t.id) + 1;
					return {
						...p.defaults(e),
						source: "search",
						action: s,
						noun: "trending",
						metaSearch: S(t),
						discoveryUnit: r === g.POPULAR_CAROUSEL ? {
							name: i.l,
							id: i.l,
							title: i.l,
							type: "query"
						} : void 0,
						actionInfo: p.actionInfo(e, {
							paneName: r,
							position: n
						}),
						search: {
							originPageType: e.platform.currentPage ? p.getPageTypeFromCurrentPage(e.platform.currentPage) : void 0,
							query: t.rawQuery,
							structureType: p.StructureType.Trending,
							queryId: s === c.c.CLICK ? Object(o.c)(o.a.SearchResults) : void 0
						}
					}
				},
				A = (e, t, r, s, n, a, o) => {
					Object(f.a)({
						...p.defaults(e),
						...Object(d.e)(e, r, s, n, a, t),
						action: c.c.VIEW,
						noun: o ? "ad" : "post"
					})
				},
				j = (e, t, r, s) => {
					Object(f.a)(I(e, t, r, s))
				},
				w = (e, t, r, s) => n => I(n, e, t, r, s),
				C = (e, t, r, n) => {
					const a = h(e, t, n);
					Object(f.a)({
						...a,
						...Object(b.b)(e, r),
						action: "view",
						noun: s.ITEM_SUBREDDIT
					})
				},
				R = (e, t) => {
					Object(f.a)({
						...E(e, t),
						source: y,
						action: c.c.CLICK,
						noun: "show_less_often"
					})
				},
				P = (e, t, r, s) => {
					Object(f.a)(L(t, r, s)(e))
				},
				L = (e, t, r, n) => a => {
					return {
						...h(a, e, r, n),
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_POST,
						post: p.post(a, t)
					}
				},
				N = (e, t, r, s) => n => a => Object(d.e)(a, n, e, t, r, s),
				k = (e, t, r, s) => n => a => Object(d.d)(a, e, t, void 0, r, n, s),
				U = (e, t, r, s) => n => a => ({
					...Object(d.e)(a, n, e, t, r, s),
					noun: "ad"
				}),
				x = (e, t) => r => n => ({
					...e ? E(n, e, t) : {},
					source: y,
					action: c.c.CLICK,
					noun: s.ITEM_POST,
					post: p.post(n, r)
				}),
				M = (e, t, r, s) => {
					Object(f.a)(F(t, r, s)(e))
				},
				F = (e, t, r, s) => n => {
					const a = Object(l.c)(n, {
							postId: t
						}),
						o = a ? Object(b.b)(n, a) : void 0;
					return {
						...h(n, e, r, s),
						...o,
						source: y,
						action: c.c.CLICK,
						noun: "item_post_subreddit",
						post: p.post(n, t)
					}
				},
				G = (e, t, r) => s => n => {
					const a = Object(l.c)(n, {
							postId: t
						}),
						o = a ? Object(b.b)(n, a) : void 0;
					return {
						...h(n, e, void 0, r),
						...o,
						source: y,
						action: c.c.CLICK,
						noun: s ? "item_post_subreddit_unsubscribe" : "item_post_subreddit_subscribe",
						post: p.post(n, t)
					}
				},
				B = (e, t, r) => {
					const s = h(e, t);
					Object(f.a)({
						...s,
						...Object(b.b)(e, r),
						source: "search",
						action: c.c.CLICK,
						noun: "search_result_discovery_unit_subreddit"
					})
				},
				q = (e, t, r, s, n, a) => {
					Object(f.a)({
						...p.defaults(e),
						...Object(d.d)(e, t, r, s, n, void 0, a)
					})
				},
				H = (e, t, r) => {
					const s = h(e, t);
					Object(f.a)({
						...s,
						...Object(b.b)(e, r),
						source: y,
						action: c.c.CLICK,
						noun: "footer_subreddit"
					})
				},
				K = (e, t) => r => {
					const s = Object(u.j)(t);
					return {
						...E(r, e, t),
						...Object(b.b)(r, s),
						source: y,
						action: c.c.CLICK,
						noun: "title_subreddit"
					}
				},
				V = (e, t) => r => ({
					...E(r, e, t),
					action: "status",
					actionInfo: p.actionInfo(r, {
						success: !0
					}),
					noun: "loading"
				}),
				W = (e, t, r) => s => ({
					...E(s, e, r),
					action: "status",
					actionInfo: p.actionInfo(s, {
						reason: t,
						success: !1
					}),
					noun: "loading"
				}),
				Y = (e, t) => r => ({
					...E(r, e, t),
					action: "click",
					noun: "close"
				}),
				$ = (e, t, r) => s => ({
					...h(s, e, t, r),
					action: "click",
					noun: "scroll"
				}),
				Q = (e, t) => r => ({
					...E(r, e, t),
					action: "click",
					noun: "overflow_menu"
				}),
				X = () => ({
					id: "xd_focus_verticals",
					unitType: i.f.Listing,
					experiment: "",
					title: a.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: i.d.Large,
					surface: i.e.Frontpage,
					url: "gql.reddit.com"
				}),
				z = (e, t, r) => p.actionInfo(e, {
					position: r
				}),
				J = (e, t, r) => {
					const s = X();
					return e => ({
						...m(e, s),
						actionInfo: z(e, 0, r),
						subreddit: p.subredditById(e, t)
					})
				},
				Z = (e, t, r) => {
					const s = X();
					return e => ({
						...I(e, s, t),
						actionInfo: z(e, 0, r)
					})
				},
				ee = (e, t, r) => {
					const n = X();
					return e => ({
						...E(e, n),
						actionInfo: z(e, 0, r),
						subreddit: p.subredditById(e, t) || null,
						source: y,
						action: c.c.VIEW,
						noun: s.ITEM_SUBREDDIT
					})
				},
				te = (e, t, r) => {
					const n = X();
					return e => ({
						...E(e, n),
						actionInfo: z(e, 0, r),
						post: p.post(e, t) || null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_POST
					})
				},
				re = (e, t, r, n) => {
					const a = X();
					return e => ({
						...E(e, a),
						actionInfo: z(e, 0, n),
						subreddit: p.subredditById(e, r) || null,
						post: p.post(e, t) || null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_POST_SUBREDDIT
					})
				},
				se = (e, t, r) => {
					const n = X();
					return e => ({
						...E(e, n),
						actionInfo: z(e, 0, r),
						subreddit: p.subredditById(e, t) || null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT
					})
				},
				ne = (e, t, r, n) => {
					const a = X();
					return e => ({
						...E(e, a),
						actionInfo: z(e, 0, r),
						subreddit: p.subredditById(e, t) || null,
						post: n ? p.post(e, n) : null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				ae = (e, t, r, n) => {
					const a = X();
					return e => ({
						...E(e, a),
						actionInfo: z(e, 0, r),
						subreddit: p.subredditById(e, t) || null,
						post: n ? p.post(e, n) : null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				ce = (e, t, r) => {
					const n = X();
					return e => ({
						...E(e, n),
						actionInfo: z(e, 0, r),
						subreddit: p.subredditById(e, t) || null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT_HIDE
					})
				},
				oe = (e, t, r) => {
					const n = X();
					return e => ({
						...E(e, n),
						actionInfo: z(e, 0, r),
						subreddit: p.subredditById(e, t) || null,
						source: y,
						action: c.c.CLICK,
						noun: s.HEADER_SUBREDDIT
					})
				},
				de = (e, t) => r => ({
					...E(r, e),
					...t && Object(b.b)(r, t),
					source: y,
					action: c.c.CLICK,
					noun: "item"
				}),
				ie = e => t => ({
					...E(t, e),
					source: y,
					action: c.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/helpers/trackers/postComposer.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "x", (function() {
				return O
			})), r.d(t, "w", (function() {
				return h
			})), r.d(t, "s", (function() {
				return I
			})), r.d(t, "p", (function() {
				return S
			})), r.d(t, "q", (function() {
				return g
			})), r.d(t, "z", (function() {
				return D
			})), r.d(t, "r", (function() {
				return T
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "u", (function() {
				return A
			})), r.d(t, "t", (function() {
				return j
			})), r.d(t, "o", (function() {
				return w
			})), r.d(t, "n", (function() {
				return C
			})), r.d(t, "y", (function() {
				return R
			})), r.d(t, "k", (function() {
				return P
			})), r.d(t, "j", (function() {
				return L
			})), r.d(t, "l", (function() {
				return N
			})), r.d(t, "d", (function() {
				return U
			})), r.d(t, "m", (function() {
				return M
			})), r.d(t, "h", (function() {
				return G
			})), r.d(t, "e", (function() {
				return B
			})), r.d(t, "f", (function() {
				return q
			})), r.d(t, "b", (function() {
				return H
			})), r.d(t, "v", (function() {
				return K
			})), r.d(t, "g", (function() {
				return V
			}));
			var s = r("./src/reddit/constants/tracking.ts"),
				n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				a = r("./src/reddit/helpers/media/index.ts"),
				c = r("./src/reddit/models/PostCreationForm/index.ts"),
				o = r("./src/reddit/models/PostDraft/index.ts"),
				d = r("./src/reddit/selectors/postDraft.ts"),
				i = r("./src/reddit/selectors/telemetry.ts"),
				u = r("./src/reddit/selectors/user.ts"),
				l = r("./src/telemetry/index.ts"),
				p = r("./src/telemetry/models/PostComposer.ts"),
				b = r("./src/telemetry/models/PostDraft.ts");
			const f = {
					imageOnly: "image",
					linkOnly: "link",
					media: "media",
					poll: "poll",
					post: "self",
					crosspost: "crosspost"
				},
				y = e => ({
					source: "post_composer",
					action: s.c.CLICK,
					...i.defaults(e),
					screen: i.screen(e),
					correlationId: Object(n.c)(n.a.PostComposer)
				}),
				E = (e, t) => "self" !== t ? {} : {
					editorMode: e.user.prefs.editorMode === c.h.MARKDOWN ? "markdown" : "rte"
				},
				m = e => {
					Object(l.a)({
						noun: "cancel",
						...y(e)
					})
				},
				_ = e => {
					Object(l.a)({
						noun: "discard",
						...y(e)
					})
				},
				O = e => {
					Object(l.a)({
						noun: "subreddit_choice",
						subreddit: i.subreddit(e),
						...y(e),
						actionInfo: i.chatPostActionInfo(e)
					})
				},
				h = e => {
					Object(l.a)({
						noun: "subreddit_selector",
						...y(e)
					})
				},
				I = (e, t) => {
					Object(l.a)({
						noun: "post_type_selector",
						postComposer: {
							type: f[t]
						},
						...y(e)
					})
				},
				S = () => e => ({
					noun: "add_option",
					...y(e)
				}),
				g = () => e => ({
					noun: "voting_length",
					...y(e)
				}),
				D = (e, t, r) => {
					"image_upload" === t || "video_upload" === t ? Object(l.a)({
						noun: t,
						...y(e)
					}) : Object(l.a)({
						noun: "text_option",
						postComposer: {
							textType: t,
							finalStatus: r ? "on" : "off"
						},
						...y(e)
					})
				},
				T = (e, t, r) => {
					Object(l.a)({
						noun: "post",
						subreddit: i.subreddit(e),
						postComposer: {
							type: t,
							...E(e, t)
						},
						post: r ? i.post(e, r) : null,
						...y(e)
					})
				},
				v = (e, t) => {
					const r = t === c.h.MARKDOWN ? "markdown_mode" : "rte_mode";
					Object(l.a)({
						noun: r,
						...y(e)
					})
				},
				A = (e, t) => {
					Object(l.a)({
						noun: "save",
						subreddit: i.subreddit(e),
						postComposer: {
							type: t,
							...E(e, t)
						},
						...y(e)
					})
				},
				j = (e, t) => {
					const r = e.uploads[t];
					r.error && Object(l.a)({
						...y(e),
						noun: "media",
						action: s.c.REJECT,
						actionInfo: {
							...i.actionInfo(e),
							reason: JSON.stringify(r.error)
						}
					})
				},
				w = (e, t) => {
					t.forEach(t => {
						const r = Object(a.f)(t.type);
						r && Object(l.a)({
							...y(e),
							action: s.c.DRAG,
							noun: r
						})
					})
				},
				C = (e, t, r) => {
					Object(l.a)({
						...y(e),
						noun: "input",
						postComposer: {
							inputType: r
						},
						action: t,
						actionInfo: i.chatPostActionInfo(e)
					})
				},
				R = (e, t, r) => {
					Object(l.a)({
						...y(e),
						noun: r,
						action: Object(p.getToggleAction)(t),
						actionInfo: i.chatPostActionInfo(e)
					})
				},
				P = e => k("input", e),
				L = () => k("add"),
				N = () => k("remove"),
				k = (e, t) => r => ({
					...y(r),
					noun: e,
					postComposer: {
						inputType: t,
						type: f.imageOnly
					},
					action: s.c.CLICK
				}),
				U = e => {
					Object(l.a)({
						...y(e),
						noun: "hide_oc_description",
						action: s.c.CLICK
					})
				},
				x = (e, t) => {
					if (t) {
						const r = i.subredditById(e, t);
						if (r) return {
							subreddit: r
						};
						const s = i.profileById(e, t);
						if (s) return {
							profile: s
						}
					}
				},
				M = (e, t) => {
					const {
						draftId: r,
						destSubreddit: s
					} = t, n = Object(u.j)(e), a = Object(d.d)(e, {
						draftId: r
					}), c = {
						authorId: n ? n.id : void 0,
						createdTimestamp: a ? a.created : void 0,
						id: r || void 0,
						nsfw: t.isNSFW,
						originalContent: t.isOC,
						spoiler: t.isSpoiler,
						titleLength: t.title.length
					};
					switch (t.kind) {
						case o.b.Link:
							c.type = b.DraftType.Link, c.urlLength = t.body.length;
							break;
						case o.b.Markdown:
							c.type = b.DraftType.Self, c.bodyTextLength = t.body.length;
							break;
						case o.b.RichText:
							c.type = b.DraftType.RichText, t.documentStats && (c.bodyTextLength = t.documentStats.textLength, c.numberRteImages = t.documentStats.rteImagesCount, c.numberRteVideos = t.documentStats.rteVideosCount);
							break;
						case o.b.Image:
							c.type = b.DraftType.Image;
							break;
						case o.b.Video:
							c.type = b.DraftType.Video
					}
					return {
						postDraft: c,
						...x(e, s.id)
					}
				},
				F = (e, t) => {
					const r = Object(u.j)(e),
						s = {
							authorId: r ? r.id : void 0,
							createdTimestamp: t.created,
							id: t.id,
							nsfw: t.isNSFW,
							originalContent: t.isOriginalContent,
							spoiler: t.isSpoiler,
							titleLength: t.title.length
						};
					switch (t.kind) {
						case o.b.Link:
							s.type = b.DraftType.Link, s.urlLength = (t.body || "").length;
							break;
						case o.b.Markdown:
							s.type = b.DraftType.Self, s.bodyTextLength = (t.body || "").length;
							break;
						case o.b.RichText:
							s.type = b.DraftType.RichText
					}
					return {
						postDraft: s,
						...x(e, t.subredditId)
					}
				},
				G = (e, t) => {
					Object(l.a)({
						noun: "draft_load",
						...y(e),
						...M(e, t)
					})
				},
				B = (e, t) => {
					Object(l.a)({
						noun: t.draftId ? "draft_update" : "draft_create",
						...y(e),
						...M(e, t)
					})
				},
				q = (e, t) => {
					Object(l.a)({
						noun: "draft_delete",
						...y(e),
						...F(e, t)
					})
				},
				H = e => {
					Object(l.a)({
						...y(e),
						noun: "social_connect_link",
						action: s.c.CLICK
					})
				},
				K = (e, t) => {
					Object(l.a)({
						...y(e),
						noun: "twitter_share_checkbox",
						action: Object(p.getToggleAction)(t)
					})
				},
				V = (e, t, r) => {
					Object(l.a)({
						...y(e),
						...M(e, t),
						noun: "draft_share",
						action: r ? s.c.ENABLE : s.c.DISABLE
					})
				}
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return D
			})), r.d(t, "f", (function() {
				return T
			})), r.d(t, "q", (function() {
				return v
			})), r.d(t, "r", (function() {
				return A
			})), r.d(t, "o", (function() {
				return j
			})), r.d(t, "s", (function() {
				return w
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "l", (function() {
				return R
			})), r.d(t, "p", (function() {
				return P
			})), r.d(t, "i", (function() {
				return L
			})), r.d(t, "j", (function() {
				return N
			})), r.d(t, "g", (function() {
				return k
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "a", (function() {
				return M
			})), r.d(t, "n", (function() {
				return F
			})), r.d(t, "m", (function() {
				return G
			})), r.d(t, "t", (function() {
				return H
			})), r.d(t, "w", (function() {
				return K
			})), r.d(t, "e", (function() {
				return V
			})), r.d(t, "d", (function() {
				return Y
			})), r.d(t, "u", (function() {
				return $
			})), r.d(t, "v", (function() {
				return Q
			})), r.d(t, "h", (function() {
				return X
			}));
			var s = r("./node_modules/lodash/pick.js"),
				n = r.n(s),
				a = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makePostDraftPageKey/index.ts"),
				o = r("./src/reddit/constants/parameters.ts"),
				d = r("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				i = r("./src/reddit/helpers/routeKey/index.ts"),
				u = r("./src/reddit/helpers/trackers/postComposer.ts"),
				l = r("./src/reddit/helpers/trackers/profileSettings.ts"),
				p = r("./src/reddit/models/Comment/index.ts"),
				b = r("./src/reddit/models/Post/index.ts"),
				f = r("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				y = r("./src/reddit/selectors/profile.ts"),
				E = r("./src/reddit/selectors/subreddit.ts"),
				m = r("./src/lib/makePostCreationPageKey/index.ts"),
				_ = r("./src/lib/makeSearchKey/index.ts"),
				O = r("./src/reddit/helpers/correlationIdTracker.ts"),
				h = r("./src/reddit/helpers/trackers/searchResults.ts"),
				I = r("./src/reddit/selectors/postDraft.ts"),
				S = r("./src/reddit/selectors/telemetry.ts"),
				g = r("./src/telemetry/index.ts");
			const D = (e, t, r, s, u, f) => {
					const {
						route: y
					} = e, {
						name: E
					} = y.meta;
					if (!E) return;
					const O = t.platform.currentPage;
					switch (E) {
						case a.Db.COMMENTS: {
							const {
								partialCommentId: n,
								partialPostId: a
							} = e.match.params, c = Object(b.r)(a), o = Object(i.a)(e, t, t.posts.models[c]);
							if (!o) return;
							const u = n && Object(p.f)(n),
								{
									sortToUse: l
								} = Object(d.a)(t, c),
								f = !0;
							Object(g.a)(C(o, c, u, r, s, l, f)(t));
							break
						}
						case a.Db.INDEX:
						case a.Db.LISTING:
						case a.Db.MULTIREDDIT:
						case a.Db.SUBREDDIT: {
							const n = Object(i.c)(e, t);
							if (!n.listingKey) return;
							const {
								params: c,
								queryParams: o
							} = e.match, {
								sort: d = (n.sort ? n.sort : a.P.HOT)
							} = c, u = o.t;
							Object(g.a)(T(n.listingKey, d, r, s, u)(t));
							break
						}
						case a.Db.TOPIC: {
							const n = Object(i.c)(e, t);
							if (!n.listingKey) return;
							const {
								params: c
							} = e.match, o = n.sort ? n.sort : a.Q, {
								sort: d = o
							} = c;
							Object(g.a)(T(n.listingKey, d, r, s)(t));
							break
						}
						case a.Db.PROFILE_OVERVIEW: {
							const n = Object(i.d)(e, t);
							if (!n) return;
							const {
								params: c,
								queryParams: o
							} = e.match, {
								sort: d = a.vb
							} = c, u = o.t;
							Object(g.a)(v(n, d, r, s, u)(t));
							break
						}
						case a.Db.PROFILE_POSTS: {
							const n = Object(i.d)(e, t);
							if (!n) return;
							const {
								queryParams: c
							} = e.match, {
								sort: o = a.vb,
								t: d = a.wb
							} = c;
							Object(g.a)(A(n, o, r, s, d)(t));
							break
						}
						case a.Db.PROFILE_COMMENTS: {
							const n = Object(i.d)(e, t);
							if (!n) return;
							const {
								queryParams: c
							} = e.match, {
								sort: o = a.vb,
								t: d = a.wb
							} = c;
							Object(g.a)(j(n, o, r, s, d)(t));
							break
						}
						case a.Db.PROFILE_PRIVATE: {
							const n = Object(i.d)(e, t);
							if (!n) return;
							Object(g.a)(w(n)(s, r)(t));
							break
						}
						case a.Db.PROFILE_MODERATION:
							f && P(t, !0);
							break;
						case a.Db.SETTINGS: {
							const n = e;
							Object(g.a)(q(r, s)(t)), n.match.params.page === a.Qb.Profile && Object(l.j)(t);
							break
						}
						case a.Db.POST_CREATION:
							if (f && u) {
								const e = Object(m.a)(u);
								Object(g.a)(R(e, r, s)(t))
							}
							break;
						case a.Db.POST_DRAFT: {
							const {
								draftId: n
							} = e.match.params, a = Object(c.a)(e.match.params);
							if (!a) return;
							U(t, a, n, r, s);
							break
						}
						case a.Db.SUBREDDIT_WIKI:
							Object(g.a)(W(r, s)(t));
							break;
						case a.Db.COINS:
							Object(g.a)(x(r, s)(t)), Object(g.a)(M()(t));
							break;
						case a.Db.PREMIUM:
							Object(g.a)(F(r, s)(t)), Object(g.a)(G()(t));
							break;
						case a.Db.APPEAL:
							Object(g.a)(B(r, s)(t));
							break;
						case a.Db.INBOX_PAGES:
							f && k(t);
							break;
						case a.Db.MODERATION_PAGES:
							f && L(t, !0, u ? u.subredditName : null, u ? u.profileName : null);
							break;
						case a.Db.COLLECTION_COMMENTS:
							f && Q(t, !0);
							break;
						case a.Db.MODQUEUE_PAGES:
							f && N(t, u ? u.subredditName : null, u ? u.profileName : null);
							break;
						case a.Db.SUBREDDIT_LEADERBOARD:
							f && Object(g.a)(V()(t));
							break;
						case a.Db.SEARCH_RESULTS:
							if (f) {
								const a = Object(i.e)(e);
								if (!a) return;
								Object(g.a)($(a, Object(_.c)(n()(O && O.queryParams || {}, o.t)), r, s, O)(t))
							}
							break;
						case a.Db.PUBLIC_ACCESS_NETWORK:
							f && Object(g.a)(H()(t));
							break;
						case a.Db.GEOTAGGING:
							f && Object(g.a)(Y()(t));
							break;
						case a.Db.SUBREDDIT_CREATION:
							f && Object(g.a)(K()(t));
							break;
						case a.Db.MOD_LISTING:
							f && X(t, !0)
					}
				},
				T = (e, t, r, s, n, a) => c => {
					const {
						api: o
					} = c.listings.postOrder, d = !o.error[e] && !o.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...S.defaults(c),
						actionInfo: S.actionInfo(c, {
							success: d
						}),
						customFeed: S.customFeed(c),
						listing: S.listing(c, e, {
							sort: t,
							sortTime: n
						}),
						subreddit: S.subreddit(c),
						timer: S.timer(r, s),
						userSubreddit: S.userSubreddit(c),
						adblock: S.adblock(c),
						postFlair: {
							title: a
						}
					}
				},
				v = (e, t, r, s, n) => a => {
					const c = S.listing(a, e);
					c && (c.sort = t, n && (c.sortTime = n));
					const {
						api: o
					} = a.listings.postOrder, d = !o.error[e] && !o.pending[e];
					return {
						listing: c,
						source: "global",
						action: "view",
						noun: "screen",
						...S.defaults(a),
						actionInfo: S.actionInfo(a, {
							success: d
						}),
						profile: S.profile(a),
						snoovatar: S.snoovatar(a),
						subreddit: S.subreddit(a),
						timer: S.timer(r, s),
						userSubreddit: S.userSubreddit(a),
						adblock: S.adblock(a)
					}
				},
				A = (e, t, r, s, n) => a => {
					const c = S.listing(a, e);
					c && (c.sort = t, n && (c.sortTime = n));
					const {
						api: o
					} = a.listings.postOrder, d = !o.error[e] && !o.pending[e];
					return {
						listing: c,
						source: "global",
						action: "view",
						noun: "screen",
						...S.defaults(a),
						actionInfo: S.actionInfo(a, {
							success: d
						}),
						profile: S.profile(a),
						subreddit: S.subreddit(a),
						timer: S.timer(r, s),
						userSubreddit: S.userSubreddit(a),
						adblock: S.adblock(a)
					}
				},
				j = (e, t, r, s, n) => a => {
					const c = S.profileComments(a, e);
					c && (c.sort = t, n && (c.sortTime = n));
					const {
						api: o
					} = a.profileCommentsPage, d = !o.error[e] && !o.pending[e];
					return {
						listing: c,
						source: "global",
						action: "view",
						noun: "screen",
						...S.defaults(a),
						actionInfo: S.actionInfo(a, {
							success: d
						}),
						profile: S.profile(a),
						subreddit: S.subreddit(a),
						timer: S.timer(r, s),
						userSubreddit: S.userSubreddit(a),
						adblock: S.adblock(a)
					}
				},
				w = e => (t, r) => s => {
					const n = !s.profilePrivatePage.api.error[e] && !s.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...S.defaults(s),
						actionInfo: S.actionInfo(s, {
							success: n
						}),
						profile: S.profile(s),
						subreddit: S.subreddit(s),
						timer: S.timer(r, t),
						userSubreddit: S.userSubreddit(s),
						adblock: S.adblock(s)
					}
				},
				C = (e, t, r, s, n, a, c) => o => {
					const {
						api: d
					} = o.pages.comments, i = !d.error[e] && !d.pending[e], u = Object(f.c)(o, {
						postId: t,
						isForceSelected: c
					}), l = {
						source: "global",
						action: "view",
						noun: "screen",
						...S.defaults(o),
						actionInfo: S.actionInfo(o, {
							success: i,
							reason: u || void 0
						}),
						post: S.post(o, t),
						profile: S.profile(o),
						subreddit: S.subreddit(o),
						timer: S.timer(s, n),
						userSubreddit: S.userSubreddit(o),
						adblock: S.adblock(o),
						postEvent: S.postEventI13nSelector(o, {
							postId: t
						}),
						postCollection: S.postCollectionI13nSelector(o, {
							postId: t
						}),
						listing: S.listing(o, void 0, {
							sort: a
						})
					};
					return r && (l.comment = S.comment(o, r)), l
				},
				R = (e, t, r) => s => {
					const n = s.creations.api.page.fetched[e],
						a = s.platform.currentPage ? s.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...S.defaults(s),
						actionInfo: S.actionInfo(s, {
							success: n
						}),
						post: a ? S.post(s, a) : void 0,
						subreddit: S.subreddit(s),
						timer: S.timer(t, r),
						userSubreddit: S.userSubreddit(s),
						adblock: S.adblock(s)
					}
				},
				P = (e, t) => {
					Object(g.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...S.defaults(e),
						actionInfo: S.actionInfo(e, {
							success: t
						})
					})
				},
				L = (e, t, r, s) => {
					Object(g.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...S.defaults(e),
						actionInfo: S.actionInfo(e, {
							success: t
						}),
						profile: S.profileById(e, Object(y.m)(e, s)),
						subreddit: S.subredditById(e, Object(E.F)(e, r)),
						userSubreddit: S.userSubreddit(e),
						adblock: S.adblock(e)
					})
				},
				N = (e, t, r) => {
					Object(g.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...S.defaults(e),
						profile: S.profileById(e, Object(y.m)(e, r)),
						subreddit: S.subredditById(e, Object(E.F)(e, t)),
						userSubreddit: S.userSubreddit(e),
						adblock: S.adblock(e)
					})
				},
				k = e => {
					Object(g.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...S.defaults(e),
						actionInfo: S.actionInfo(e)
					})
				},
				U = (e, t, r, s, n) => {
					const a = e.creations.api.page.pending[t],
						c = !e.creations.api.page.error[t] && !a && !!r,
						o = Object(I.h)(e, r);
					Object(g.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...S.defaults(e),
						actionInfo: S.actionInfo(e, {
							success: c
						}),
						subreddit: S.subreddit(e),
						timer: S.timer(s, n),
						userSubreddit: S.userSubreddit(e),
						adblock: S.adblock(e),
						...o ? Object(u.m)(e, o) : {}
					})
				},
				x = (e, t) => r => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(O.c)(O.a.GoldPayment),
					...S.defaults(r),
					timer: S.timer(e, t),
					adblock: S.adblock(r)
				}),
				M = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...S.defaults(e)
				}),
				F = (e, t) => r => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(O.c)(O.a.GoldPayment),
					...S.defaults(r),
					timer: S.timer(e, t),
					adblock: S.adblock(r)
				}),
				G = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...S.defaults(e)
				}),
				B = (e, t) => r => ({
					source: "appeal",
					action: "view",
					noun: "page",
					...S.defaults(r),
					timer: S.timer(e, t)
				}),
				q = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...S.defaults(r),
					timer: S.timer(e, t)
				}),
				H = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: S.subreddit(e),
					...S.defaults(e)
				}),
				K = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...S.defaults(e)
				}),
				V = () => e => ({
					action: "view",
					source: "global",
					noun: "screen",
					...S.defaults(e)
				}),
				W = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...S.defaults(r),
					customFeed: S.customFeed(r),
					subreddit: S.subreddit(r),
					timer: S.timer(e, t),
					userSubreddit: S.userSubreddit(r),
					adblock: S.adblock(r)
				}),
				Y = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...S.defaults(e)
				}),
				$ = (e, t, r, s, n, c) => o => {
					let d = !0;
					if (t.type.indexOf(a.Pb.Posts) > -1) {
						const {
							api: t
						} = o.listings.listingOrder;
						d = d && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(a.Pb.Subreddits) > -1 || t.type.indexOf(a.Pb.Users) > -1) {
						const {
							api: t
						} = o.listings.postOrder;
						d = d && !t.error[e] && !t.pending[e]
					}
					const i = S.paneName(o, n),
						u = S.structureType(o, n),
						l = o.platform.currentPage && o.platform.currentPage.urlParams && o.platform.currentPage.urlParams.subredditName ? S.subredditByName(o, o.platform.currentPage.urlParams.subredditName) : void 0;
					return {
						...h.c(o, t),
						source: "global",
						action: "view",
						noun: "screen",
						...S.defaults(o),
						actionInfo: S.actionInfo(o, {
							success: d,
							paneName: i
						}),
						timer: S.timer(r, s),
						search: {
							...S.search(o, t, !0, n || void 0),
							...!!c && {
								originElement: c
							},
							queryId: Object(O.c)(O.a.SearchResults),
							structureType: u,
							subredditId: t.restrict_sr && l && l.id ? l.id : void 0,
							subredditName: t.restrict_sr && l && l.name ? l.name : void 0
						},
						...!!c && {
							correlationId: Object(O.c)(O.a.SearchResults)
						},
						userPreferences: {
							hideNsfw: !o.user.prefs.over18
						}
					}
				},
				Q = (e, t) => {
					Object(g.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...S.defaults(e),
						actionInfo: S.actionInfo(e, {
							success: t
						})
					})
				},
				X = (e, t) => {
					Object(g.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...S.defaults(e),
						actionInfo: S.actionInfo(e, {
							success: t
						})
					})
				}
		},
		"./src/reddit/helpers/trackers/searchResults.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return l
			})), r.d(t, "q", (function() {
				return p
			})), r.d(t, "p", (function() {
				return b
			})), r.d(t, "r", (function() {
				return f
			})), r.d(t, "g", (function() {
				return y
			})), r.d(t, "t", (function() {
				return E
			})), r.d(t, "s", (function() {
				return m
			})), r.d(t, "u", (function() {
				return _
			})), r.d(t, "w", (function() {
				return O
			})), r.d(t, "f", (function() {
				return I
			})), r.d(t, "a", (function() {
				return S
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "x", (function() {
				return D
			})), r.d(t, "v", (function() {
				return T
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "k", (function() {
				return A
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "j", (function() {
				return w
			})), r.d(t, "d", (function() {
				return C
			})), r.d(t, "o", (function() {
				return R
			})), r.d(t, "n", (function() {
				return P
			})), r.d(t, "l", (function() {
				return L
			})), r.d(t, "m", (function() {
				return N
			})), r.d(t, "b", (function() {
				return k
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/reddit/constants/posts.ts"),
				a = r("./src/reddit/constants/tracking.ts"),
				c = r("./src/reddit/helpers/correlationIdTracker.ts"),
				o = r("./src/reddit/selectors/posts.ts"),
				d = r("./src/reddit/selectors/telemetry.ts");
			const i = "search",
				u = "search_results_best",
				l = (e, t) => {
					const r = d.subreddit(e);
					return {
						screen: d.screen(e),
						subreddit: r && t && t.restrict_sr ? r : null
					}
				},
				p = (e, t) => r => {
					const s = t;
					return s.structureType = "related", {
						action: e,
						correlationId: Object(c.c)(c.a.SearchResults),
						noun: "related_search",
						source: i,
						search: d.search(r, s),
						...l(r)
					}
				},
				b = (e, t, r, s) => n => ({
					...l(n, r),
					source: i,
					action: "click",
					noun: t,
					actionInfo: d.actionInfo(n, s ? {
						pageType: "search_results_best",
						position: 0
					} : void 0),
					discoveryUnit: s ? d.discoveryUnit(s) : null,
					search: d.search(n, r),
					post: d.post(n, e),
					media: d.media(n, e)
				}),
				f = (e, t, r, s, n) => a => ({
					...j(a, e, t, n, s, r),
					noun: "ad"
				}),
				y = (e, t, r) => n => {
					let a = !0;
					if (t.type.indexOf(s.Pb.Posts) > -1) {
						const {
							api: t
						} = n.listings.listingOrder;
						a = a && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(s.Pb.Subreddits) > -1 || t.type.indexOf(s.Pb.Users) > -1) {
						const {
							api: t
						} = n.listings.postOrder;
						a = a && !t.error[e] && !t.pending[e]
					}
					return {
						...l(n, t),
						source: i,
						action: "view",
						noun: "search_results_post",
						actionInfo: d.actionInfo(n, {
							success: a,
							pageType: "search_results_best",
							position: 0
						}),
						discoveryUnit: d.discoveryUnit(r),
						search: d.search(n, t)
					}
				},
				E = (e, t) => r => ({
					action: "view",
					actionInfo: d.actionInfo(r),
					metaSearch: d.metaSearch(t),
					noun: e,
					screen: d.screen(r),
					search: d.smartSearch(r, t),
					source: i
				}),
				m = (e, t) => r => ({
					action: "click",
					actionInfo: d.actionInfo(r),
					noun: e,
					metaSearch: d.metaSearch(t),
					screen: d.screen(r),
					search: d.smartSearch(r, t),
					source: i
				}),
				_ = (e, t, r) => s => ({
					source: i,
					action: "click",
					noun: d.SearchDropdownNouns.Recent,
					actionInfo: d.actionInfo(s, {
						paneName: "subreddit_dropdown",
						position: r + 1
					}),
					search: {
						query: e,
						originPageType: s.platform.currentPage ? d.getPageTypeFromCurrentPage(s.platform.currentPage) : void 0,
						queryId: Object(c.c)(c.a.SearchResults)
					},
					...h(s, t)
				}),
				O = (e, t, r, s) => n => {
					const a = s.filter(e => e.id);
					return {
						source: i,
						action: "click",
						noun: d.SearchDropdownNouns.Typeahead,
						actionInfo: d.actionInfo(n, {
							position: r + 1
						}),
						search: {
							query: t.displayInfo && t.displayInfo.subredditOrProfileName ? t.displayInfo.subredditOrProfileName : e,
							originPageType: n.platform.currentPage ? d.getPageTypeFromCurrentPage(n.platform.currentPage) : void 0,
							queryId: Object(c.c)(c.a.SearchResults),
							typeaheadActive: !0,
							subredditIds: a.map(e => e.id),
							numberSubreddits: a.length
						},
						...h(n, t)
					}
				},
				h = (e, t) => {
					const r = t.isSubreddit && t.id ? d.subredditForSearch(e, t.id) : void 0,
						s = t.isProfile && t.id ? d.profileForSearch(e, t.id) : void 0,
						n = {
							id: t.id,
							name: t.displayInfo ? t.displayInfo.subredditOrProfileName : void 0
						};
					return {
						subreddit: t.isSubreddit ? r || n : void 0,
						profile: t.isProfile ? s || n : void 0
					}
				},
				I = (e, t, r) => s => ({
					action: t,
					actionInfo: d.actionInfo(s),
					noun: e,
					screen: d.screen(s),
					search: d.search(s, r),
					source: u
				});
			var S;
			! function(e) {
				e.TopResults = "tab_top_results", e.Posts = "tab_posts", e.CommunitiesAndUsers = "tab_communities"
			}(S || (S = {}));
			const g = (e, t) => r => ({
					...l(r, t),
					source: i,
					action: "click",
					noun: e,
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: d.actionInfo(r),
					search: d.search(r, t)
				}),
				D = (e, t) => r => ({
					...l(r, t),
					source: i,
					action: "click",
					noun: e,
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: d.actionInfo(r),
					search: d.search(r, t)
				}),
				T = (e, t) => r => ({
					action: "click",
					correlationId: Object(c.c)(c.a.SearchResults),
					noun: e ? s.Ob.ToSubreddit : s.Ob.ToGlobal,
					search: d.search(r, t),
					source: i
				}),
				v = (e, t, r, s) => n => ({
					...l(n, r),
					source: i,
					action: "click",
					noun: "search_result_post",
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: d.actionInfo(n, {
						relativePosition: d.getRelativePostOrder(n, t, e)
					}),
					search: {
						...d.search(n, r),
						...!!s && {
							originElement: s
						}
					},
					post: d.post(n, t)
				}),
				A = (e, t, r, s, n) => a => j(a, e, t, r, s, n),
				j = (e, t, r, s, n, o) => {
					const u = d.paneName(e, s),
						l = d.postRelativePosition(e, t, n, o),
						p = d.amountOfElementsBeforePost(e, r, n, o, u),
						b = null !== l ? p + l : null,
						f = d.structureType(e, s),
						y = {
							...d.search(e, r, !0, s || void 0),
							structureType: f,
							queryId: Object(c.c)(c.a.SearchResults)
						};
					return {
						source: i,
						action: a.c.CLICK,
						noun: "post",
						actionInfo: s ? {
							pageType: d.getPageTypeFromCurrentPage(s),
							paneName: u,
							position: b,
							relativePosition: l
						} : d.actionInfo(e, {
							paneName: u,
							position: b,
							relativePosition: l
						}),
						search: y,
						post: d.post(e, t),
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: o ? d.discoveryUnit(o) : null
					}
				},
				w = (e, t, r, s, n, a) => c => C(c, e, t, r, s, n, a),
				C = (e, t, r, s, u, l, p) => {
					if (!s) {
						s = Object(o.D)(e, {
							postId: l
						}).belongsTo
					}
					const b = d.paneName(e, r);
					let f, y;
					if (l) {
						f = d.postRelativePosition(e, l, u, p);
						const r = d.amountOfElementsBeforePost(e, t, u, p, b);
						y = null !== f ? r + f : null
					} else {
						f = d.communityRelativePosition(e, s.id, u, p);
						const t = d.amountOfElementsBeforeCommunity(e, u, p);
						y = null !== f ? t + f : null
					}
					const E = d.structureType(e, r),
						m = {
							...d.search(e, t, !0, r || void 0),
							structureType: E,
							queryId: Object(c.c)(c.a.SearchResults)
						};
					return {
						source: i,
						action: a.c.CLICK,
						noun: s.type,
						search: m,
						subreddit: s.type === n.a.SUBREDDIT ? d.subredditForSearch(e, s.id) : void 0,
						profile: s.type === n.a.PROFILE ? d.profileForSearch(e, s.id) : void 0,
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: p ? d.discoveryUnit(p) : null,
						actionInfo: r ? {
							pageType: d.getPageTypeFromCurrentPage(r),
							paneName: b,
							position: y,
							relativePosition: f
						} : d.actionInfo(e, {
							paneName: b,
							position: y,
							relativePosition: f
						}),
						post: l ? d.post(e, l) : void 0
					}
				},
				R = (e, t) => r => ({
					...l(r, e),
					source: i,
					action: "click",
					noun: "search_result_subreddit",
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: d.actionInfo(r),
					search: {
						...d.search(r, e),
						...!!t && {
							originElement: t
						}
					},
					subreddit: d.subreddit(r)
				}),
				P = (e, t, r, s, n) => c => ({
					...j(c, t, r, s, e, n),
					action: a.c.VIEW
				}),
				L = (e, t, r, s) => n => ({
					...l(n, r),
					source: i,
					action: "view",
					noun: "search_results_post",
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: d.actionInfo(n, {
						relativePosition: d.getRelativePostOrder(n, t, e),
						position: d.getAbsoluteOrder(n, t, e)
					}),
					search: {
						...d.search(n, r),
						...!!s && {
							originElement: s
						}
					},
					post: d.post(n, t)
				}),
				N = (e, t, r) => s => ({
					...l(s),
					source: i,
					action: "click",
					noun: `search_result_${e}`,
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: d.actionInfo(s),
					search: {
						...d.search(s, t),
						...!!r && {
							originElement: r
						}
					},
					[e]: d[e](s)
				}),
				k = (e, t) => r => ({
					...l(r, t),
					source: i,
					action: e,
					noun: "covid_banner",
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: d.actionInfo(r),
					search: d.search(r, t)
				})
		},
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			}));
			var s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			const a = e => t => ({
					source: e,
					noun: "create_community_button",
					action: "click",
					...n.defaults(t),
					actionInfo: n.actionInfo(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(s.d)(s.a.SubredditCreation, !0)
				}),
				c = (e, t, r) => a => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...n.defaults(a),
					actionInfo: n.actionInfo(a, {
						settingValue: e
					}),
					subreddit: {
						id: r,
						name: t.name,
						publicDescription: t.publicDescription,
						nsfw: t.over18,
						accessType: t.type,
						topicTagContents: t.allTags,
						topicTagPrimaryId: t.primaryTagId
					},
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				o = () => e => ({
					source: "community_form",
					noun: "cancel",
					action: "click",
					...n.defaults(e),
					actionInfo: n.actionInfo(e),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				d = e => t => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...n.defaults(t),
					actionInfo: n.actionInfo(t, {
						reason: e
					}),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				})
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "d", (function() {
				return o
			}));
			var s, n, a = r("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(s || (s = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(n || (n = {}));
			const c = {
					[s.Loyalty]: a.a.First,
					[s.Achievement]: a.a.Second,
					[s.Cosmetic]: void 0
				},
				o = e => e === a.a.First ? s.Loyalty : e === a.a.Second ? s.Achievement : s.Cosmetic
		},
		"./src/reddit/models/ChatSettingsPage/index.ts": function(e, t, r) {
			"use strict";
			var s;
			r.d(t, "a", (function() {
					return s
				})), r.d(t, "c", (function() {
					return n
				})), r.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.Unknown = "unknown", e.Toggle = "BOOLEAN"
				}(s || (s = {}));
			const n = (e, t, r = !1) => e && Array.isArray(e) && e.length ? e.reduce((e, n) => {
					if (n && n.id && n.type && n.title && n.hasOwnProperty("state")) switch (n.type) {
						case s.Toggle:
							e.push({
								settingType: s.Toggle,
								settingId: n.id,
								subredditId: t,
								description: n.description,
								descriptionUrl: n.descriptionUrl,
								groupName: n.groupName,
								isEditable: !r && n.isEditable,
								state: "true" === String(n.state).toLowerCase(),
								title: n.title
							});
							break;
						default:
							e.push({
								settingType: s.Unknown,
								settingId: n.id,
								subredditId: t,
								description: n.description,
								descriptionUrl: n.descriptionUrl,
								groupName: n.groupName,
								isEditable: !r && n.isEditable,
								state: n.state,
								title: n.title
							})
					}
					return e
				}, []) : [],
				a = e => e.reduce((e, t) => (t.isEditable && e.push({
					id: t.settingId,
					state: String(t.state)
				}), e), [])
		},
		"./src/reddit/models/Emoji/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "e", (function() {
				return o
			}));
			const s = 24,
				n = 64e3,
				a = 128,
				c = 128,
				o = (e, t, r, s) => ({
					name: e,
					url: t,
					subredditId: r,
					...s
				})
		},
		"./src/reddit/models/NewCommunityProgress/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = ["CommunityProgressShareButton", "CommunityProgressUrlButton", "CommunityProgressMakePostButton"];
			var n;
			! function(e) {
				e.HIDE_BUTTON_CLICK = "HIDE_BUTTON_CLICK", e.CTA_BUTTON_CLICK = "CTA_BUTTON_CLICK"
			}(n || (n = {}))
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "r", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "n", (function() {
				return l
			})), r.d(t, "o", (function() {
				return p
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "q", (function() {
				return m
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "j", (function() {
				return O
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "i", (function() {
				return I
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "m", (function() {
				return g
			})), r.d(t, "b", (function() {
				return D
			})), r.d(t, "l", (function() {
				return T
			})), r.d(t, "p", (function() {
				return v
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/lib/assertNever.ts"),
				n = r("./src/reddit/models/GqlTopLevelField.ts"),
				a = r("./src/reddit/models/User/index.ts");
			const c = "scheduledposts";
			var o, d, i;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(o || (o = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(d || (d = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(i || (i = {}));
			const u = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				l = e => e.__typename === a.c.AvailableRedditor,
				p = e => e.__typename === n.a.Subreddit;
			var b, f, y, E;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(b || (b = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(f || (f = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(y || (y = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(E || (E = {}));
			const m = e => f[E[e]],
				_ = e => E[f[e]],
				O = e => y[f[e]],
				h = e => f[y[e]],
				I = e => E[y[e]];
			var S;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(S || (S = {}));
			const g = e => {
					switch (e) {
						case S.Hourly:
						case S.Daily:
						case S.Weekly:
						case S.Monthly:
							return !0
					}
					return !1
				},
				D = "custom",
				T = e => {
					switch (e) {
						case "isNsfw":
							return "mark_as_nsfw";
						case "isOriginalContent":
							return "mark_as_oc";
						case "isSticky":
							return "sticky";
						case "isModDistinguished":
							return "mod_distinguish";
						case "isSpoiler":
							return "mark_as_spoiler";
						case "isContestMode":
							return "mark_as_contest_mode";
						case "isPostAsMetaMod":
							return "post_as_meta_mod";
						default:
							return Object(s.a)(e)
					}
				},
				v = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/models/WhitelistAndBlocked.ts": function(e, t, r) {
			"use strict";
			var s;
			r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.pending = "pending", e.error = "error", e.waitingForRequest = "waitingForRequest"
				}(s || (s = {}))
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var s, n = r("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(s || (s = {}));
			const a = {
				status: s.NotFetched
			};
			t.b = (e = a, t) => {
				switch (t.type) {
					case n.a:
						if (e.status === s.Fetched && e.data.stripe && e.data.stripe.sources) {
							const r = t.payload.cardId,
								{
									[r]: s,
									...n
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: n
									}
								}
							}
						}
						return e;
					case n.e:
						if (e.status === s.Fetched && e.data.braintree && e.data.braintree.sources) {
							const r = t.payload.sourceId,
								{
									[r]: s,
									...n
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: n
									}
								}
							}
						}
						return e;
					case n.b:
						return {
							error: t.payload.error, status: s.Failure
						};
					case n.c:
						return {
							data: t.payload, status: s.Fetched
						};
					case n.d:
						return {
							status: s.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, n = r("./src/lib/constants/specialMembership.ts"),
				a = r("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				c = r("./src/reddit/helpers/economics/sortBadges.ts"),
				o = r("./src/reddit/models/Badge/index.ts"),
				d = r("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(s || (s = {}));
			const i = {};

			function u(e) {
				return "userId" in e
			}

			function l(e, t, r, s) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(n => {
						let a;
						(a = e.placement ? e.placement === o.a.First ? s[d.a.Loyalty][n] : s[d.a.Achievement][n] : u(e) ? s[d.a.Cosmetic][d.c.MyBadges][n] : s[d.a.Cosmetic][d.c.Gallery][n]) && (u(e) ? r.has(e.id) && a.unlocked.push(e) : t.has(e.id) || a.locked.push(e))
					})
				})
			}

			function p(e) {
				const t = (e, t) => {
					const r = parseInt(e.price || "0"),
						s = parseInt(t.price || "0");
					return r === s ? Object(c.b)(e, t) : r - s
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function b(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === n.a).map(p).sort((e, r) => {
					const s = t[e.id],
						n = t[r.id];
					return Object(c.b)(s, n)
				})
			}

			function f(e) {
				const t = {
					[d.a.Loyalty]: {},
					[d.a.Achievement]: {},
					[d.a.Cosmetic]: {
						[d.c.Gallery]: {},
						[d.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(r => {
					const s = e.collections[r],
						n = {
							description: s.description,
							highlight: s.extra && s.extra.style && s.extra.style.color,
							id: s.id,
							locked: [],
							title: s.title,
							unlocked: []
						};
					t[d.a.Loyalty][r] = {
						...n,
						locked: [],
						unlocked: []
					}, t[d.a.Achievement][r] = {
						...n,
						locked: [],
						unlocked: []
					}, t[d.a.Cosmetic][d.c.Gallery][r] = {
						...n,
						locked: [],
						unlocked: []
					}, t[d.a.Cosmetic][d.c.MyBadges][r] = {
						...n,
						locked: [],
						unlocked: []
					}
				});
				const r = new Set;
				e.userOwnedBadges.forEach(t => {
					const s = e.badges[t];
					s && r.add(s.type)
				});
				const s = new Set(e.userOwnedBadges);
				return l(Object.keys(e.badges).map(t => e.badges[t]), r, s, t), l(Object.keys(e.products).map(t => e.products[t]), r, s, t), {
					collections: {
						[d.a.Loyalty]: b(t[d.a.Loyalty], e.collections),
						[d.a.Achievement]: b(t[d.a.Achievement], e.collections),
						[d.a.Cosmetic]: {
							[d.c.Gallery]: b(t[d.a.Cosmetic][d.c.Gallery], e.collections),
							[d.c.MyBadges]: b(t[d.a.Cosmetic][d.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = (e = i, t) => {
				switch (t.type) {
					case a.a: {
						const {
							subredditId: r
						} = t.payload, n = e[r];
						return n && n.status === s.Fetched ? {
							...e,
							[r]: {
								...n,
								data: {
									...n.data
								},
								raw: {
									...n.raw
								}
							}
						} : e
					}
					case a.h: {
						const {
							subredditId: r
						} = t.payload, n = e[r];
						return n && n.status === s.Fetched ? {
							...e,
							[r]: {
								...n,
								data: {
									...n.data,
									subscription: {
										...n.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...n.raw,
									subscription: {
										...n.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case a.i: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: {
								raw: r,
								data: f(r),
								status: s.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return mD
			}));
			var s = r("./src/reddit/actions/modal.ts");
			const n = {};
			var a = (e = n, t) => {
					switch (t.type) {
						case s.e:
							if (!t.payload.actionSource && !t.payload.redirectUrl) return n;
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				c = r("./node_modules/redux/es/redux.js"),
				o = r("./src/reddit/actions/actionBarAnimation/constants.ts");
			const d = {};
			var i = (e = d, t) => {
				switch (t.type) {
					case o.a: {
						const {
							commentDiscount: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					default:
						return e
				}
			};
			const u = {};
			var l = (e = u, t) => {
					switch (t.type) {
						case o.a: {
							const {
								upvoteDiscount: r
							} = t.payload;
							return {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				p = Object(c.c)({
					commentDiscount: i,
					upvoteDiscount: l
				}),
				b = r("./src/reddit/actions/authorFlair.ts"),
				f = r("./src/reddit/actions/badge.ts"),
				y = r("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				E = r("./src/reddit/actions/governance/constants.ts"),
				m = r("./src/reddit/actions/harbergerTax/constants.ts"),
				_ = r("./src/reddit/actions/platform.ts"),
				O = r("./src/reddit/actions/product.ts"),
				h = r("./src/reddit/actions/reportFlow/constants.ts"),
				I = r("./src/reddit/actions/structuredStyles/constants.ts"),
				S = r("./src/reddit/constants/modals.ts");
			var g = (e = null, t) => {
					switch (t.type) {
						case s.c: {
							const {
								id: r,
								args: s
							} = t.payload;
							return (null == e ? void 0 : e.id) === r ? null : {
								id: r,
								args: s
							}
						}
						case s.b:
						case s.d:
						case _.a:
						case h.f:
							return null;
						case I.e:
							return (null == e ? void 0 : e.id) === S.a.BLADE_UNSAVED_CHANGES ? null : e;
						case I.d:
							return (null == e ? void 0 : e.id) === S.a.BLADE_NIGHTMODE ? null : e;
						case b.a:
							return (null == e ? void 0 : e.id) === S.a.USER_FLAIR_MODAL_ID ? null : {
								id: S.a.USER_FLAIR_MODAL_ID
							};
						case f.c:
							return {
								id: S.a.BADGE_PICKER
							};
						case O.b:
							return {
								id: S.a.BADGE_PURCHASE
							};
						case E.d:
							return {
								id: S.a.GOVERNANCE_OPT_OUT
							};
						case E.r:
							return {
								id: S.a.TRANSFER_POINTS
							};
						case E.o:
							return {
								id: S.a.GOVERNANCE_RELEASE_NOTES
							};
						case m.e:
							return {
								id: S.a.HARBERGER_TAX_BANNER_PURCHASE
							};
						case m.c:
							return {
								id: S.a.HARBERGER_TAX_BANNER_MANAGE
							};
						case m.b:
							return {
								id: S.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE
							};
						case m.a:
							return {
								id: S.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE
							};
						case E.x:
							return {
								id: S.a.WALLET_REGISTRATION_MODAL
							};
						case y.c:
							return {
								id: S.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT
							};
						default:
							return e
					}
				},
				D = r("./src/reddit/actions/ads/constants.ts"),
				T = r("./src/reddit/actions/unload/constants.ts");
			const v = {};

			function A(e, t, r, s) {
				const n = e[t];
				return {
					...e,
					[t]: {
						...n,
						[s]: r
					}
				}
			}
			var j = (e = v, t) => {
					if (!t.payload) return e;
					switch (t.type) {
						case D.d:
							return A(e, t.payload.postId, t.payload.vendorMetadata, "adImpression");
						case D.b:
							return A(e, t.payload.postId, t.payload.vendorMetadata, "adClick");
						case D.n:
							return A(e, t.payload.postId, t.payload.vendorMetadata, "adViewableImpression");
						case D.k:
							return A(e, t.payload.postId, t.payload.vendorMetadata, "adVideoViewable");
						case D.e:
							return A(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable");
						case D.j:
							return A(e, t.payload.postId, t.payload.vendorMetadata, "adVideoStarted");
						case D.i:
							return A(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedWithSound");
						case D.g:
							return A(e, t.payload.postId, t.payload.vendorMetadata, "adVideoGroupMViewable");
						case D.f:
							return A(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable50");
						case D.h:
							return A(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedExpanded");
						case D.l: {
							const {
								postId: r,
								eventType: s,
								vendorMetadata: n
							} = t.payload;
							return A(e, r, n, `adVideoWatchedPercent${s}`)
						}
						case D.m: {
							const {
								postId: r,
								eventType: s,
								vendorMetadata: n
							} = t.payload;
							return A(e, r, n, `adVideoWatchedSeconds${s}`)
						}
						case D.w:
							return A(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewable");
						case D.y:
							return A(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds5");
						case D.x:
							return A(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds15");
						case T.b:
							return A(e, t.payload.postId, t.payload.vendorMetadata, "adUnloaded");
						case D.s:
							return A(e, t.payload.postId, t.payload.vendorMetadata, "groupMViewable");
						case D.c:
							return A(e, t.payload.postId, t.payload.vendorMetadata, "adGalleryItemImpression");
						default:
							return e
					}
				},
				w = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/apiRequestState.ts"));
			const C = {};
			var R = (e = C, t) => {
					switch (t.type) {
						case w.d:
						case w.a:
						case w.b: {
							const r = t.payload;
							return {
								...e,
								[r.apiRequestId]: r
							}
						}
						case w.c: {
							const r = t.payload;
							if (!(r in e)) return e;
							if (1 === Object.keys(e).length) return C;
							const s = {
								...e
							};
							return delete s[r], s
						}
						default:
							return e
					}
				},
				P = r("./src/reddit/actions/appBadgeIndicators/constants.ts");
			var L = (e = null, t) => {
				switch (t.type) {
					case P.a:
						return t.payload && t.payload.error || null;
					case P.b:
					case P.c:
						return null;
					default:
						return e
				}
			};
			var N = (e = !1, t) => {
					switch (t.type) {
						case P.c:
							return !0;
						case P.a:
						case P.b:
							return !1;
						default:
							return e
					}
				},
				k = Object(c.c)({
					error: L,
					pending: N
				});
			const U = {};
			var x = (e = U, t) => {
					switch (t.type) {
						case P.d:
						case P.b: {
							const r = t.payload;
							return {
								...e,
								...r
							}
						}
						case P.c:
						case P.a:
						default:
							return e
					}
				},
				M = Object(c.c)({
					api: k,
					badges: x
				});
			var F = (e = null, t) => {
					switch (t.type) {
						case b.a:
							return t.payload;
						default:
							return e
					}
				},
				G = r("./node_modules/icepick/icepick.js"),
				B = r("./node_modules/lodash/mergeWith.js"),
				q = r.n(B),
				H = r("./src/reddit/actions/comment/constants.ts"),
				K = r("./src/reddit/actions/comment/websocket/constants.ts"),
				V = r("./src/reddit/actions/grantUserFlair/constants.ts"),
				W = r("./src/reddit/actions/modQueue/constants.ts"),
				Y = r("./src/reddit/actions/pages/constants.ts"),
				$ = r("./src/reddit/actions/pages/profileComments/constants.ts"),
				Q = r("./src/reddit/actions/pages/profilePosts.ts"),
				X = r("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				z = r("./src/reddit/actions/pages/search.ts"),
				J = r("./src/reddit/actions/pages/subreddit.ts"),
				Z = r("./src/reddit/actions/profileConversations.ts"),
				ee = r("./src/reddit/actions/subreddit.ts"),
				te = r("./src/reddit/actions/userFlair/constants.ts"),
				re = r("./src/reddit/models/User/index.ts");
			const se = {};
			var ne = (e = se, t) => {
				switch (t.type) {
					case K.b:
					case K.c: {
						const r = t.payload,
							{
								authorFlair: s,
								isChatSort: n
							} = r;
						if (s && n) {
							return q()({
								...e
							}, s, (e, t, r) => {
								if ("richtext" === r) return t
							})
						}
						return e
					}
					case X.c:
					case X.i:
					case X.e:
					case X.g:
					case z.SEARCH_RESULTS_RECEIVED: {
						const {
							authorFlair: r
						} = t.payload;
						if (r) {
							return Object(G.merge)(e, r)
						}
						return e
					}
					case H.u:
					case J.SUBREDDIT_LOADED:
					case Y.f:
					case $.b:
					case $.e:
					case Q.PROFILE_POSTS_LOADED:
					case Q.MORE_POSTS_LOADED:
					case Z.e:
					case ee.i:
						return ae(e, t.payload);
					case W.i:
					case W.f:
					case W.m:
					case W.p:
					case W.v:
						return ae(e, t.payload.response);
					case te.r: {
						const {
							subredditId: r,
							userName: s,
							applied: n,
							displaySettings: {
								isUserEnabled: a
							}
						} = t.payload;
						return Object(G.setIn)(e, [r, s], a ? n : null)
					}
					case V.h:
					case V.b: {
						const {
							subredditId: r,
							userName: s,
							applied: n
						} = t.payload;
						return e[r] && e[r][s] ? Object(G.setIn)(e, [r, s], n) : e
					}
					case te.a: {
						const {
							subredditId: r,
							userName: s,
							applied: n,
							displaySettings: {
								isEnabled: a
							}
						} = t.payload;
						return Object(G.setIn)(e, [r, s], a ? n : null)
					}
					default:
						return e
				}
			};
			const ae = (e, {
				account: t,
				authorFlair: r,
				userFlair: s
			}) => {
				const n = Object(G.merge)(e, r);
				if (!s || !t) return n;
				const a = Object.keys(s)[0];
				if (!a) return n;
				const c = s[a],
					o = Object(re.e)(t),
					d = c.applied,
					i = c.displaySettings && c.displaySettings.isUserEnabled;
				return o && d && i ? Object(G.merge)(n, {
					[a]: {
						[o]: d
					}
				}) : n
			};
			var ce = Object(c.c)({
					inContext: F,
					models: ne
				}),
				oe = r("./src/reddit/actions/gold/constants.ts");
			const de = {};
			var ie = (e = de, t) => {
				switch (t.type) {
					case oe.e: {
						const {
							disabled: r,
							subredditOrProfileId: s
						} = t.payload;
						return r ? {
							...e,
							[s]: r
						} : e
					}
					default:
						return e
				}
			};
			var ue = (e = null, t) => {
				switch (t.type) {
					case oe.i:
					case oe.j:
						return null;
					case oe.h:
						return t.payload;
					default:
						return e
				}
			};
			var le = (e = !1, t) => {
					switch (t.type) {
						case _.a:
						case oe.j:
						case oe.h:
							return !1;
						case oe.i:
							return !0;
						default:
							return e
					}
				},
				pe = Object(c.c)({
					error: ue,
					pending: le
				}),
				be = Object(c.c)({
					api: pe
				});
			var fe = (e = null, t) => {
				switch (t.type) {
					case oe.I:
					case oe.H:
						return null;
					case oe.G:
						return t.payload;
					default:
						return e
				}
			};
			const ye = {};
			var Ee = (e = ye, t) => {
					switch (t.type) {
						case oe.I: {
							const {
								subredditOrProfileId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case oe.e:
						case oe.H:
						case oe.M:
						case oe.G: {
							const {
								subredditOrProfileId: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				me = Object(c.c)({
					error: fe,
					pending: Ee
				});
			const _e = {};
			var Oe = (e = _e, t) => {
				switch (t.type) {
					case oe.M: {
						const {
							awards: r,
							subredditOrProfileId: s
						} = t.payload, n = {};
						return r.forEach(e => {
							n[e.id] = e.isEnabled
						}), {
							...e,
							[s]: n
						}
					}
					case oe.m: {
						const {
							awardId: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								[r]: !1
							}
						}
					}
					case oe.p: {
						const {
							awardId: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								[r]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const he = {};
			var Ie = (e = he, t) => {
					switch (t.type) {
						case oe.H: {
							const {
								awards: r,
								subredditOrProfileId: s
							} = t.payload, n = r.map(e => e.id);
							return {
								...e,
								[s]: n
							}
						}
						case oe.j: {
							const {
								award: r,
								subredditId: s
							} = t.payload;
							if (r && r.id) {
								if (!e[s]) return {
									...e,
									[s]: [r.id]
								};
								if (-1 === e[s].indexOf(r.id)) return {
									...e,
									[s]: [r.id, ...e[s]]
								}
							}
							return e
						}
						default:
							return e
					}
				},
				Se = Object(c.c)({
					api: me,
					availability: Oe,
					order: Ie
				}),
				ge = r("./node_modules/lodash/merge.js"),
				De = r.n(ge);
			const Te = e => {
				const t = e.split("+");
				if (1 === t.length) return e;
				const r = `${t[1].substring(0,2)}:${t[1].substring(2)}`;
				return `${t[0]}+${r}`
			};
			var ve = e => (e.startsAt && (e.startsAt = "number" == typeof e.startsAt ? new Date(e.startsAt).toISOString() : Te(e.startsAt)), e.endsAt && (e.endsAt = "number" == typeof e.endsAt ? new Date(e.endsAt).toISOString() : Te(e.endsAt)), e),
				Ae = r("./src/reddit/models/Gold/Award.ts"),
				je = r("./src/reddit/actions/discoveryUnit.ts"),
				we = r("./src/reddit/actions/frontpage/constants.ts"),
				Ce = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				Re = r("./src/reddit/actions/multireddit/constants.ts"),
				Pe = r("./src/reddit/actions/pages/modListing/constants.ts"),
				Le = r("./src/reddit/actions/pages/multireddit/constants.ts"),
				Ne = r("./src/reddit/actions/pages/postCreation.ts"),
				ke = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				Ue = r("./src/reddit/actions/profileOverviewChrono/constants.ts"),
				xe = r("./src/lib/makeActionCreator/index.ts"),
				Me = (r("./src/config.ts"), r("./src/lib/constants/index.ts"));
			r("./src/lib/makeApiRequest/index.ts"), r("./src/reddit/helpers/addRedesignIdentifier/index.ts"), r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			Object(xe.a)("RECOMMENDED_POSTS_LOADED"), Object(xe.a)("RECOMMENDED_POSTS_FAILED");
			var Fe = r("./src/reddit/actions/search.ts");
			const Ge = Ae.m,
				Be = (e => t => {
					for (let r = 0; r < e.length; r++) t = e[r](t);
					return t
				})([ve]),
				qe = (e, t) => {
					const r = t.reduce((e, t) => (e[t.id] = Be(t), e), {});
					return De()({
						...e
					}, r)
				};
			var He = (e = Ge, t) => {
				var r;
				switch (t.type) {
					case oe.H: {
						const {
							awards: r
						} = t.payload;
						return qe(e, r)
					}
					case oe.M: {
						const r = t.payload.awards.reduce((e, t) => (e[t.id] = {
							...Be(t),
							isEnabled: !0
						}, e), {});
						return De()({
							...e
						}, r)
					}
					case oe.c: {
						const {
							awards: r
						} = t.payload, s = r.reduce((e, t) => (e[t.award.id] = Be(t.award), e), {});
						return De()({
							...e
						}, s)
					}
					case oe.j: {
						const {
							award: r
						} = t.payload;
						return r && r.id ? e[r.id] ? De()({
							...e
						}, {
							[r.id]: Be(r)
						}) : {
							...e,
							[r.id]: Be(r)
						} : e
					}
					case oe.db: {
						const {
							awardId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: {
								...e[r],
								isEnabled: !1
							}
						} : e
					}
					case Y.b:
					case H.u:
					case K.b:
					case Ne.PAGE_LOADED:
					case je.e:
					case we.f:
					case Pe.e:
					case Pe.h:
					case W.f:
					case W.m:
					case W.p:
					case W.v:
					case Re.r:
					case Y.f:
					case we.b:
					case Le.b:
					case z.SEARCH_RESULTS_RECEIVED:
					case $.b:
					case $.e:
					case Z.b:
					case Z.e:
					case ke.b:
					case ke.e:
					case Ue.b:
					case Q.MORE_POSTS_LOADED:
					case Q.PROFILE_POSTS_LOADED:
					case X.c:
					case X.e:
					case X.i:
					case X.g:
					case "RECOMMENDED_POSTS_LOADED":
					case Fe.c:
					case ee.i:
					case J.SUBREDDIT_LOADED: {
						const r = {},
							s = t.payload.posts || [],
							n = t.payload.comments || [];
						for (const e in s) {
							const t = s[e].allAwardings || [];
							for (const e of t) r[e.id] = Be(Object(Ae.h)(e))
						}
						for (const e in n) {
							const t = n[e],
								{
									associatedAward: s,
									allAwardings: a = []
								} = t;
							for (const e of a) r[e.id] = Be(Object(Ae.h)(e));
							s && (r[s.id] = Be(s))
						}
						return Object.keys(r).forEach(t => {
							var s;
							0 === (null === (s = e[t]) || void 0 === s ? void 0 : s.coinPrice) && delete r[t]
						}), De()({
							...e
						}, r)
					}
					case oe.mb: {
						const r = {},
							{
								topAwardedPosts: s
							} = t.payload;
						return s.map(e => {
							const {
								post: t
							} = e, s = t.awardings || [];
							for (const n of s) {
								const e = n.award;
								r[e.id] = e
							}
						}), De()({
							...e
						}, r)
					}
					case Ce.o: {
						const {
							freeAwardEvent: s
						} = t.payload;
						return qe(e, (null === (r = null == s ? void 0 : s.freeAwards) || void 0 === r ? void 0 : r.awards) || [])
					}
					case Ce.h: {
						const {
							awards: r
						} = t.payload;
						return qe(e, r || [])
					}
					default:
						return e
				}
			};
			const Ke = {};
			var Ve = (e = Ke, t) => {
					switch (t.type) {
						case oe.d: {
							const {
								subredditOrProfileId: r,
								thingId: s
							} = t.payload;
							return {
								...e,
								[r]: {
									...e[r],
									[s]: !0
								}
							}
						}
						case oe.c:
						case oe.b: {
							const {
								subredditOrProfileId: r,
								thingId: s
							} = t.payload;
							return {
								...e,
								[r]: {
									...e[r],
									[s]: !1
								}
							}
						}
						default:
							return e
					}
				},
				We = Object(c.c)({
					pending: Ve
				});
			const Ye = {};
			var $e = (e = Ye, t) => {
					switch (t.type) {
						case oe.c: {
							const {
								awards: r,
								subredditOrProfileId: s,
								thingId: n
							} = t.payload, a = r.map(({
								award: e,
								total: t
							}) => ({
								award: {
									id: e.id
								},
								total: t
							}));
							return {
								...e,
								[s]: {
									...e[s],
									[n]: a
								}
							}
						}
						default:
							return e
					}
				},
				Qe = Object(c.c)({
					api: We,
					order: $e
				});
			const Xe = {};
			var ze = (e = Xe, t) => {
					switch (t.type) {
						case oe.c: {
							const {
								tags: r,
								subredditOrProfileId: s
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						default:
							return e
					}
				},
				Je = Object(c.c)({
					order: ze
				}),
				Ze = Object(c.c)({
					blacklist: ie,
					create: be,
					manageable: Se,
					models: He,
					sortedUsable: Qe,
					tags: Je
				});
			const et = {};
			var tt = (e = et, t) => {
				switch (t.type) {
					case f.e:
					case f.f: {
						const {
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: void 0
						}
					}
					case f.d: {
						const {
							subredditId: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const rt = {};
			var st = (e = rt, t) => {
					switch (t.type) {
						case f.e: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case f.f:
						case f.d: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				nt = Object(c.c)({
					error: tt,
					pending: st
				});
			const at = {};
			var ct = (e = at, t) => {
				switch (t.type) {
					case f.h:
					case f.i: {
						const {
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: void 0
						}
					}
					case f.g: {
						const {
							subredditId: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const ot = {};
			var dt = (e = ot, t) => {
					switch (t.type) {
						case f.h: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case f.i:
						case f.g: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				it = Object(c.c)({
					error: ct,
					pending: dt
				}),
				ut = Object(c.c)({
					subreddit: nt,
					user: it
				});
			const lt = {};
			var pt = (e = lt, t) => {
					switch (t.type) {
						case y.i:
						case f.f:
						case f.i:
						case O.d: {
							const {
								badges: r
							} = t.payload;
							return {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				bt = Object(c.c)({
					api: ut,
					models: pt
				}),
				ft = r("./src/reddit/actions/blockedRedditors.ts");
			const yt = {
				message: ""
			};
			var Et = (e = yt, t) => {
				switch (t.type) {
					case ft.c:
					case ft.d:
						return e;
					case ft.b:
						return t.payload;
					default:
						return e
				}
			};
			var mt = (e = !1, t) => {
					switch (t.type) {
						case ft.d:
							return !0;
						case ft.c:
						case ft.b:
							return !1;
						default:
							return e
					}
				},
				_t = Object(c.c)({
					error: Et,
					pending: mt
				});
			const Ot = {
				ids: []
			};
			var ht = (e = Ot, t) => {
					switch (t.type) {
						case ft.a:
							return {
								ids: [...e.ids, t.payload], timestamp: e.timestamp
							};
						case ft.e:
							const r = e.ids.slice();
							return r.splice(e.ids.indexOf(t.payload), 1), {
								...e,
								ids: r
							};
						case ft.c:
							return {
								ids: [...e.ids, ...t.payload], timestamp: Date.now()
							};
						default:
							return e
					}
				},
				It = Object(c.c)({
					api: _t,
					list: ht
				}),
				St = r("./src/reddit/actions/userBlocks.ts");
			const gt = {};
			var Dt = (e = gt, t) => {
				switch (t.type) {
					case St.f:
					case St.e: {
						const {
							userId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case St.d: {
						const {
							userId: r,
							type: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Tt = {};
			var vt = (e = Tt, t) => {
					switch (t.type) {
						case St.f: {
							const {
								userId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case St.e:
						case St.d: {
							const {
								userId: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				At = Object(c.c)({
					error: Dt,
					pending: vt
				}),
				jt = Object(c.c)({
					api: At
				});
			const wt = {
				isViewSafe: !0,
				hasBrandSafetyBeenAssessed: !1
			};
			var Ct = (e = wt, t) => {
					switch (t.type) {
						case D.a:
							return e.isViewSafe === t.payload.isViewSafe && e.hasBrandSafetyBeenAssessed ? e : {
								...e,
								isViewSafe: t.payload.isViewSafe,
								hasBrandSafetyBeenAssessed: !0
							};
						case J.SUBREDDIT_PENDING:
						case Le.c:
						case we.c:
							return e.hasBrandSafetyBeenAssessed ? {
								...e,
								hasBrandSafetyBeenAssessed: !1
							} : e;
						default:
							return e
					}
				},
				Rt = r("./src/reddit/actions/downToChat.ts");
			var Pt = (e = null, t) => {
				switch (t.type) {
					case Rt.f:
					case Rt.g:
						return null;
					case Rt.e: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var Lt = (e = !1, t) => {
					switch (t.type) {
						case Rt.b:
						case Rt.f:
							return !0;
						case Rt.a:
						case Rt.c:
						case Rt.e:
						case Rt.g:
							return !1;
						default:
							return e
					}
				},
				Nt = Object(c.c)({
					error: Pt,
					pending: Lt
				}),
				kt = r("./node_modules/lodash/mapValues.js"),
				Ut = r.n(kt);
			const xt = {};
			var Mt = (e = xt, t) => {
					switch (t.type) {
						case Rt.f:
						case Rt.e:
						case Rt.g: {
							const {
								subredditId: r,
								bannerEnabled: s,
								buttonEnabled: n
							} = t.payload;
							return {
								...e,
								[r]: {
									bannerEnabled: s,
									buttonEnabled: n
								}
							}
						}
						case Rt.c: {
							const {
								subredditId: r,
								bannerEnabled: s
							} = t.payload;
							return {
								...e,
								[r]: {
									...e[r],
									bannerEnabled: s
								}
							}
						}
						case Rt.d:
							return {
								...Ut()(e, e => ({
									bannerEnabled: !1,
									buttonEnabled: e.buttonEnabled
								}))
							};
						case Rt.a:
						case Rt.b:
						default:
							return e
					}
				},
				Ft = Object(c.c)({
					api: Nt,
					subreddits: Mt
				}),
				Gt = r("./src/reddit/actions/chat/init.ts");
			var Bt = (e = !1, t) => {
					switch (t.type) {
						case Gt.a:
							return !0;
						default:
							return e
					}
				},
				qt = r("./src/chat/actions/promo/constants.ts");
			const Ht = {
				displaySubredditChatFtux: !1
			};
			var Kt = (e = Ht, t) => {
					switch (t.type) {
						case qt.a: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case qt.b: {
							const r = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				Vt = r("./src/lib/omitKey/index.ts"),
				Wt = r("./src/reddit/actions/pages/chatSettings.ts");
			const Yt = {};
			var $t = (e = Yt, t) => {
				switch (t.type) {
					case Wt.b: {
						const {
							subredditId: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Wt.a:
					case Wt.c:
					case Wt.d: {
						const {
							subredditId: r
						} = t.payload;
						return Object(Vt.a)(e, r)
					}
					default:
						return e
				}
			};
			const Qt = {};
			var Xt = (e = Qt, t) => {
					switch (t.type) {
						case Wt.a:
						case Wt.b:
						case Wt.c:
						case Wt.d: {
							const {
								subredditId: r
							} = t.payload, s = t.type === Wt.c;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				zt = Object(c.c)({
					error: $t,
					pending: Xt
				}),
				Jt = Object(c.c)({
					fetch: zt
				});
			const Zt = {};
			var er = (e = Zt, t) => {
					switch (t.type) {
						case Wt.a:
						case Wt.d: {
							const {
								subredditId: r,
								chatSettings: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				tr = Object(c.c)({
					api: Jt,
					models: er
				}),
				rr = r("./src/reddit/actions/chat/unreadCount.ts");
			const sr = {
				apiError: null
			};
			var nr = (e = sr, t) => {
				switch (t.type) {
					case rr.a.REQUEST_FAILED: {
						const e = t.payload;
						return {
							...sr,
							apiError: e
						}
					}
					case rr.a.REQUEST_SUCCESS:
					case rr.a.REQUEST_PENDING:
						return sr;
					default:
						return e
				}
			};
			var ar = (e = !1, t) => {
					switch (t.type) {
						case rr.a.REQUEST_PENDING:
							return !0;
						case rr.a.REQUEST_FAILED:
						case rr.a.REQUEST_SUCCESS:
							return !1;
						default:
							return e
					}
				},
				cr = Object(c.c)({
					error: nr,
					pending: ar
				});
			const or = {
				basicChannelCount: 0,
				subredditChannelCount: 0
			};
			var dr = (e = or, t) => {
					switch (t.type) {
						case rr.a.SYNC:
						case rr.a.REQUEST_SUCCESS:
							return {
								...t.payload
							};
						default:
							return e
					}
				},
				ir = Object(c.c)({
					api: cr,
					count: dr
				}),
				ur = Object(c.c)({
					downToChat: Ft,
					isInited: Bt,
					promos: Kt,
					subredditSettingsPage: tr,
					unread: ir
				}),
				lr = r("./src/reddit/actions/claimgold.ts");
			var pr = (e = null, t) => {
				switch (t.type) {
					case lr.a:
						return t.payload.error && t.payload.error.fields && t.payload.error.fields[0] && t.payload.error.fields[0].msg;
					case lr.d:
					case lr.e:
					case lr.c:
						return null;
					default:
						return e
				}
			};
			var br = (e = !1, t) => {
				switch (t.type) {
					case lr.d:
					case lr.c:
					case lr.a:
						return !1;
					case lr.b:
						return !0;
					default:
						return e
				}
			};
			var fr = (e = !1, t) => {
					switch (t.type) {
						case lr.b:
						case lr.d:
						case lr.c:
						case lr.a:
							return !1;
						case lr.f:
							return !0;
						default:
							return e
					}
				},
				yr = Object(c.c)({
					error: pr,
					pending: br,
					showLoader: fr
				});
			var Er = (e = "", t) => {
				switch (t.type) {
					case lr.g:
						return t.payload;
					case lr.e:
						return "";
					default:
						return e
				}
			};
			var mr = (e = !1, t) => {
					switch (t.type) {
						case lr.e:
							return !0;
						case lr.c:
						case lr.d:
							return !1;
						default:
							return e
					}
				},
				_r = Object(c.c)({
					api: yr,
					code: Er,
					showModal: mr
				}),
				Or = r("./src/reddit/actions/commentsListTruncated/constants.ts");
			var hr = (e = !0, t) => {
					switch (t.type) {
						case Or.a:
							return !1;
						case Or.b:
							return !0;
						default:
							return e
					}
				},
				Ir = r("./src/reddit/actions/communityFlairs/constants.ts");
			const Sr = {};
			var gr = (e = Sr, t) => {
					switch (t.type) {
						case Ir.a: {
							const {
								models: r,
								sortedKeys: s,
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: {
									sortedKeys: s,
									models: r
								}
							}
						}
						default:
							return e
					}
				},
				Dr = r("./src/reddit/actions/contentControls/constants.ts");
			const Tr = {};
			var vr = (e = Tr, t) => {
				switch (t.type) {
					case Dr.a: {
						const {
							subredditName: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Dr.c:
					case Dr.b: {
						const {
							subredditName: r
						} = t.payload;
						return Object(Vt.a)(e, r)
					}
					default:
						return e
				}
			};
			const Ar = {};
			var jr = (e = Ar, t) => {
					switch (t.type) {
						case Dr.c:
						case Dr.a:
						case Dr.b: {
							const {
								subredditName: r
							} = t.payload, s = t.type === Dr.c;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				wr = Object(c.c)({
					error: vr,
					pending: jr
				}),
				Cr = Object(c.c)({
					fetch: wr
				});
			const Rr = {};
			var Pr = (e = Rr, t) => {
					switch (t.type) {
						case Dr.b: {
							const {
								subredditName: r,
								postRequirements: s,
								automatedReporting: n
							} = t.payload;
							return {
								...e,
								[r]: {
									automatedReporting: n,
									postRequirements: s
								}
							}
						}
						case Dr.d: {
							const {
								subredditName: r,
								partialUpdates: s
							} = t.payload, n = e[r];
							return n ? {
								...e,
								[r]: {
									automatedReporting: {
										...n.automatedReporting,
										...s.automatedReporting || {}
									},
									postRequirements: {
										...n.postRequirements,
										...s.postRequirements || {}
									}
								}
							} : e
						}
						default:
							return e
					}
				},
				Lr = Object(c.c)({
					api: Cr,
					models: Pr
				}),
				Nr = r("./src/reddit/actions/contentGate.ts");
			const kr = {};
			var Ur = (e = kr, t) => {
				switch (t.type) {
					case Nr.a: {
						const {
							subredditName: r
						} = t.payload;
						if (r) {
							if (e[r]) {
								const t = {
									[r]: {
										goldSubreddit: !0
									}
								};
								return q()({
									...e
								}, {
									...t
								})
							}
							return {
								...e,
								[r]: {
									goldSubreddit: !0
								}
							}
						}
						return e
					}
					case Nr.b: {
						const {
							subredditDescription: r,
							subredditName: s
						} = t.payload;
						if (s) {
							if (e[s]) {
								const t = {
									[s]: {
										privateSubreddit: !0,
										subredditDescription: r
									}
								};
								return q()({
									...e
								}, {
									...t
								})
							}
							return {
								...e,
								[s]: {
									privateSubreddit: !0,
									subredditDescription: r
								}
							}
						}
						return e
					}
					case Nr.f: {
						const {
							subredditName: r,
							quarantineRequiresEmail: s,
							quarantineMessage: n,
							quarantineMessageHtml: a,
							quarantineMessageRTJson: c
						} = t.payload;
						return r ? {
							...e,
							[r]: {
								...e[r],
								quarantinedSubreddit: !0,
								quarantineRequiresEmail: s,
								quarantineMessage: n,
								quarantineMessageHtml: a,
								quarantineMessageRTJson: c
							}
						} : e
					}
					case Nr.h: {
						const {
							subredditName: r,
							banMessage: s
						} = t.payload;
						if (r) {
							if (e[r]) {
								const t = {
									[r]: {
										subredditBanned: !0,
										subredditBanMessage: s
									}
								};
								return q()({
									...e
								}, {
									...t
								})
							}
							return {
								...e,
								[r]: {
									subredditBanned: !0,
									subredditBanMessage: s
								}
							}
						}
						return e
					}
					case Nr.i: {
						const {
							subredditName: r
						} = t.payload;
						if (r) {
							if (e[r]) {
								const t = {
									[r]: {
										subredditBlockedForLegalReason: !0
									}
								};
								return q()({
									...e
								}, {
									...t
								})
							}
							return {
								...e,
								[r]: {
									subredditBlockedForLegalReason: !0
								}
							}
						}
						return e
					}
					case Nr.j: {
						const {
							subredditName: r
						} = t.payload;
						if (r) {
							if (e[r]) {
								const t = {
									[r]: {
										subredditDoesNotExist: !0
									}
								};
								return q()({
									...e
								}, {
									...t
								})
							}
							return {
								...e,
								[r]: {
									subredditDoesNotExist: !0
								}
							}
						}
						return e
					}
					case Nr.c:
					case Nr.d:
					case Nr.e: {
						const {
							profileName: r
						} = t.payload, s = Me.Wb + r.toLocaleLowerCase(), n = e[s] || {}, a = {
							profileDeleted: t.type === Nr.d,
							profileSuspended: t.type === Nr.e,
							profileBlockedForLegalReason: t.type === Nr.c
						};
						return {
							...e,
							[s]: {
								...n,
								...a
							}
						}
					}
					default:
						return e
				}
			};
			const xr = {};
			var Mr = (e = xr, t) => {
					switch (t.type) {
						case H.u:
						case Y.b:
						case Y.f:
							return {
								...e, ...t.payload.continueThreads
							};
						default:
							return e
					}
				},
				Fr = Object(c.c)({
					models: Mr
				}),
				Gr = r("./src/reddit/actions/postCollection/constants.ts");
			var Br = (e = null, t) => {
				switch (t.type) {
					case s.c:
					case Gr.d:
					case Gr.c:
					case Gr.s:
					case Gr.r:
						return null;
					case Gr.b:
					case Gr.n:
						return t.payload;
					default:
						return e
				}
			};
			var qr = (e = !1, t) => {
					switch (t.type) {
						case Gr.c:
						case Gr.r:
							return !0;
						case Gr.d:
						case Gr.b:
						case Gr.s:
						case Gr.n:
							return !1;
						default:
							return e
					}
				},
				Hr = Object(c.c)({
					error: Br,
					pending: qr
				}),
				Kr = Object(c.c)({
					createOrUpdate: Hr
				}),
				Vr = r("./src/reddit/actions/postDraft.ts");
			const Wr = {};
			var Yr = (e = Wr, t) => {
				switch (t.type) {
					case Vr.c:
					case Vr.b: {
						const {
							draftId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Vr.a: {
						const {
							apiError: r,
							draftId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			const $r = {};
			var Qr = (e = $r, t) => {
					switch (t.type) {
						case Vr.b: {
							const {
								draftId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Vr.c:
						case Vr.a: {
							const {
								draftId: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				Xr = Object(c.c)({
					error: Yr,
					pending: Qr
				});
			var zr = (e = null, t) => {
				switch (t.type) {
					case Vr.d:
						return t.payload;
					case Vr.f:
					case Vr.e:
						return null;
					default:
						return e
				}
			};
			var Jr = (e = !1, t) => {
					switch (t.type) {
						case Vr.f:
							return !0;
						case Vr.e:
						case Vr.d:
							return !1;
						default:
							return e
					}
				},
				Zr = Object(c.c)({
					error: zr,
					pending: Jr
				});
			const es = {
				apiError: null,
				needsCaptcha: !1,
				validationError: null,
				submitValidationError: null
			};
			var ts = (e = es, t) => {
				switch (t.type) {
					case Vr.l:
					case Vr.j:
						return es;
					case Vr.i: {
						const e = t.payload;
						return {
							...es,
							apiError: e
						}
					}
					case Vr.m: {
						const e = t.payload;
						return {
							...es,
							validationError: e
						}
					}
					case Vr.k: {
						const e = t.payload;
						return {
							...es,
							submitValidationError: e
						}
					}
					case Vr.h:
						return {
							...es, needsCaptcha: !0
						};
					default:
						return e
				}
			};
			var rs = (e = !1, t) => {
					switch (t.type) {
						case Vr.j:
							return !0;
						case Vr.l:
						case Vr.i:
						case Vr.m:
						case Vr.k:
						case Vr.h:
							return !1;
						default:
							return e
					}
				},
				ss = Object(c.c)({
					error: ts,
					pending: rs
				}),
				ns = Object(c.c)({
					deleteDraft: Xr,
					listing: Zr,
					save: ss
				}),
				as = r("./src/reddit/actions/postCreation/constants.ts");
			const cs = {};
			var os = (e = cs, t) => {
					switch (t.type) {
						case as.C: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case as.p: {
							const r = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				ds = Object(c.c)({
					pending: os
				});
			var is = (e = null, t) => {
				switch (t.type) {
					case as.u:
					case as.v:
					case as.d:
					case as.e:
					case as.f:
					case as.i:
					case as.j:
					case as.n:
					case as.K:
						return null;
					case as.t:
						return t.payload;
					default:
						return e
				}
			};
			var us = (e = !1, t) => {
					switch (t.type) {
						case as.u:
							return !0;
						case as.v:
						case as.t:
							return !1;
						default:
							return e
					}
				},
				ls = Object(c.c)({
					error: is,
					pending: us
				}),
				ps = Object(c.c)({
					converting: ds,
					mediaUpload: ls
				});
			const bs = {};
			var fs = (e = bs, t) => {
				switch (t.type) {
					case Ne.PAGE_LOADED:
					case Ne.PAGE_PENDING: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Ne.PAGE_FAILED: {
						const {
							key: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const ys = {};
			var Es = (e = ys, t) => {
				switch (t.type) {
					case Ne.PAGE_PENDING: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: !1
						}
					}
					case Ne.PAGE_LOADED: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: !0
						}
					}
					default:
						return e
				}
			};
			const ms = {};
			var _s = (e = ms, t) => {
					switch (t.type) {
						case Ne.PAGE_PENDING: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Ne.PAGE_LOADED:
						case Ne.PAGE_FAILED: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				Os = Object(c.c)({
					error: fs,
					fetched: Es,
					pending: _s
				}),
				hs = r("./src/reddit/actions/scheduledPosts/constants.ts");
			const Is = {
				apiError: null,
				needsCaptcha: !1,
				pollError: void 0,
				validationError: null,
				submitValidationError: null
			};
			var Ss = (e = Is, t) => {
				switch (t.type) {
					case as.L:
					case hs.h:
					case hs.k:
					case hs.b:
					case hs.d:
					case as.w:
					case as.c:
					case as.d:
					case as.e:
					case as.f:
					case as.i:
					case as.j:
					case as.n:
					case as.K:
					case as.A:
						return Is;
					case as.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return r ? Is : e
					}
					case as.o: {
						const e = t.payload;
						return {
							...Is,
							apiError: e
						}
					}
					case as.X: {
						const e = t.payload;
						return {
							...Is,
							validationError: e
						}
					}
					case as.G:
					case as.F: {
						const e = t.payload;
						return {
							...Is,
							submitValidationError: e
						}
					}
					case as.a:
						return {
							...Is, needsCaptcha: !0
						};
					case as.y:
						return {
							...Is, pollError: t.payload
						};
					default:
						return e
				}
			};
			var gs = (e = !1, t) => {
					switch (t.type) {
						case as.w:
							return !0;
						case as.L:
						case hs.h:
						case as.o:
						case as.X:
						case as.F:
						case as.G:
						case as.y:
						case as.a:
							return !1;
						default:
							return e
					}
				},
				Ds = Object(c.c)({
					error: Ss,
					pending: gs
				});
			var Ts = (e = null, t) => {
				switch (t.type) {
					case as.x:
					case as.D:
						return null;
					case as.m:
						return t.payload;
					default:
						return e
				}
			};
			var vs = (e = !1, t) => {
					switch (t.type) {
						case as.x:
							return !0;
						case as.m:
						case as.l:
							return !1;
						default:
							return e
					}
				},
				As = Object(c.c)({
					error: Ts,
					pending: vs
				}),
				js = Object(c.c)({
					submit: Ds,
					update: As
				});
			var ws = (e = null, t) => {
				switch (t.type) {
					case as.K:
					case as.I:
					case as.J:
						return null;
					default:
						return e
				}
			};
			var Cs = (e = !1, t) => {
					switch (t.type) {
						case as.J:
							return !0;
						case as.I:
						case as.K:
							return !1;
						default:
							return e
					}
				},
				Rs = Object(c.c)({
					error: ws,
					pending: Cs
				}),
				Ps = Object(c.c)({
					change: Rs
				}),
				Ls = Object(c.c)({
					collection: Kr,
					draft: ns,
					editor: ps,
					page: Os,
					post: js,
					subreddit: Ps
				}),
				Ns = r("./node_modules/lodash/omit.js"),
				ks = r.n(Ns),
				Us = r("./src/reddit/actions/pages/postDraft.ts");
			const xs = {};
			var Ms = (e = xs, t) => {
				switch (t.type) {
					case Vr.e: {
						const {
							postDrafts: e
						} = t.payload;
						return e || xs
					}
					case Vr.c: {
						const r = e,
							{
								draftId: s
							} = t.payload;
						return ks()(r, s)
					}
					case as.L: {
						const {
							draftId: r
						} = t.payload;
						return r ? ks()(e, r) : e
					}
					case Us.PAGE_LOADED: {
						const {
							drafts: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Fs = e => {
					if (e.payload && e.payload.routeMatch) return e.payload.routeMatch.route.meta.name
				},
				Gs = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.queryParams
				};
			var Bs = r("./src/reddit/models/PostDraft/index.ts");
			var qs = (e = "", t) => {
					switch (t.type) {
						case as.d:
							return t.payload || "";
						case as.A:
							return "";
						case _.a: {
							if (Fs(t) !== Me.Db.POST_CREATION) return "";
							const r = Gs(t);
							return r && r.url ? r.url || "" : e
						}
						case Vr.g: {
							const e = t.payload;
							return e.kind === Bs.b.Link && e.body || ""
						}
						case hs.b:
						case hs.n:
							return t.payload.url || "";
						default:
							return e
					}
				},
				Hs = r("./src/reddit/models/PostCreationForm/index.ts"),
				Ks = r("./src/reddit/models/ScheduledPost/index.ts");
			var Vs = (e = "", t) => {
				switch (t.type) {
					case as.e:
						return t.payload || "";
					case as.A:
					case as.E:
						return "";
					case as.M:
						return t.payload.editorMode === Hs.h.MARKDOWN ? t.payload.content || "" : e;
					case _.a: {
						if (Fs(t) !== Me.Db.POST_CREATION) return "";
						const r = Gs(t);
						return r && r.text ? (e => e ? e.replace(/\+/g, " ") : "")(r.text) : e
					}
					case Vr.g: {
						const e = t.payload;
						return e.kind === Bs.b.Markdown && e.body || ""
					}
					case hs.b:
					case hs.n: {
						const e = t.payload;
						return e.contentType === Ks.a.TEXT ? e.body : ""
					}
					default:
						return e
				}
			};
			const Ws = {
				items: [],
				selectedKey: null
			};
			var Ys = (e = Ws, t) => {
					switch (t.type) {
						case as.f:
							return t.payload || Ws;
						case as.A:
							return Ws;
						case _.a:
							return Fs(t) !== Me.Db.POST_CREATION ? Ws : e;
						case Vr.g:
							return Ws;
						case hs.b:
						case hs.n:
							return Ws;
						default:
							return e
					}
				},
				$s = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				Qs = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Xs = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
			const zs = $s.a.createInitial;
			var Js = (e = zs(), t) => {
					switch (t.type) {
						case as.h: {
							const {
								rteState: e
							} = t.payload;
							return e
						}
						case as.A:
							return $s.a.createInitial();
						case as.M: {
							const r = t.payload;
							return r.editorMode === Hs.h.RICH_TEXT && r.editorKey === Hs.g.POST_CREATION ? $s.a.createInitial(r.content) : e
						}
						case _.a:
							return Fs(t) !== Me.Db.POST_CREATION ? $s.a.createInitial() : e;
						case Vr.g: {
							const e = t.payload;
							return e.kind === Bs.b.RichText ? $s.a.createInitial(e.body) : $s.a.createInitial()
						}
						case hs.b:
						case hs.n: {
							const e = t.payload,
								r = Object(Qs.c)(e.mediaAssets);
							return $s.a.createInitial(e.contentType === Ks.a.RTJSON ? Object(Xs.b)(e.body) : void 0, r || void 0)
						}
						default:
							return e
					}
				},
				Zs = Object(c.c)({
					link: qs,
					markdown: Vs,
					media: Ys,
					rte: Js
				});
			var en = (e = null, t) => {
					switch (t.type) {
						case as.b:
							return t.payload || null;
						case as.A:
						case Vr.g:
						case hs.b:
						case hs.n:
						case as.K:
							return null;
						case _.a:
							return Fs(t) === Me.Db.POST_CREATION ? e : null;
						default:
							return e
					}
				},
				tn = r("./src/reddit/selectors/scheduledPosts/index.ts");
			var rn = (e = null, t) => {
				switch (t.type) {
					case as.c:
						return t.payload || null;
					case hs.b:
					case hs.n: {
						const e = t.payload;
						return Object(tn.n)({
							scheduledPost: e
						}) || null
					}
					case as.A:
						return null;
					case _.a:
						return Fs(t) === Me.Db.POST_CREATION ? e : null;
					case Vr.g:
						return t.payload.flair || null;
					default:
						return e
				}
			};
			var sn = (e = null, t) => {
				switch (t.type) {
					case as.q:
						return t.payload.type || null;
					case hs.b:
					case hs.n:
					case as.i:
					case as.A:
					case _.a:
						return null;
					default:
						return e
				}
			};
			var nn = (e = !1, t) => {
				switch (t.type) {
					case as.O:
						return t.payload || !1;
					case hs.b:
					case hs.n:
						return "CHAT" === t.payload.discussionType;
					case as.A:
						return !1;
					case _.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case Vr.g:
						return t.payload.isChatPost || !1;
					default:
						return e
				}
			};
			var an = (e = !1, t) => {
				switch (t.type) {
					case as.W: {
						const {
							isContestMode: e
						} = t.payload;
						return e || !1
					}
					case as.A:
						return !1;
					case _.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case hs.b:
					case hs.n:
						return t.payload.isContestMode;
					default:
						return e
				}
			};
			var cn = (e = !1, t) => {
				switch (t.type) {
					case as.Q:
						return t.payload || !1;
					case as.A:
						return !1;
					case _.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case Vr.g:
						return t.payload.isNSFW || !1;
					case hs.b:
					case hs.n:
						return t.payload.isNsfw;
					default:
						return e
				}
			};
			var on = (e = !1, t) => {
				switch (t.type) {
					case as.R:
						return t.payload || !1;
					case as.A:
						return !1;
					case as.K: {
						const {
							name: r
						} = t.payload;
						return !!r && e
					}
					case _.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case Vr.g:
						return t.payload.isOriginalContent || !1;
					case hs.b:
					case hs.n:
						return t.payload.isOriginalContent;
					default:
						return e
				}
			};
			var dn = (e = !1, t) => {
				switch (t.type) {
					case as.S:
						return t.payload || !1;
					case hs.b:
					case hs.n:
						return !!t.payload.poll;
					case as.A:
						return !1;
					case _.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					default:
						return e
				}
			};
			var un = (e = !1, t) => {
				switch (t.type) {
					case as.W: {
						const {
							isPostAsMetaMod: e
						} = t.payload;
						return e || !1
					}
					case as.A:
						return !1;
					case _.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case hs.b:
					case hs.n:
						return t.payload.isPostAsMetaMod;
					default:
						return e
				}
			};
			var ln = (e = !1, t) => {
				switch (t.type) {
					case hs.b:
					case hs.n:
					case as.A:
						return !1;
					case Vr.n:
						return t.payload;
					case _.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case Vr.g:
						return t.payload.isPublicLink;
					default:
						return e
				}
			};
			var pn = (e = !1, t) => {
				switch (t.type) {
					case as.T:
						return t.payload || !1;
					case as.A:
						return !1;
					case _.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case Vr.g:
						return t.payload.isSpoiler || !1;
					case hs.b:
					case hs.n:
						return t.payload.isSpoiler;
					default:
						return e
				}
			};
			var bn = (e = "", t) => {
				switch (t.type) {
					case E.b: {
						const {
							subredditName: e
						} = t.payload;
						return e
					}
					case _.a:
					case as.i:
					case as.q:
					case as.A:
					case E.h:
						return "";
					default:
						return e
				}
			};
			var fn = (e = "", t) => {
				switch (t.type) {
					case E.c: {
						const {
							username: e
						} = t.payload;
						return e
					}
					case _.a:
					case as.i:
					case as.q:
					case as.A:
					case E.h:
						return "";
					default:
						return e
				}
			};
			var yn = (e = null, t) => {
					switch (t.type) {
						case as.J:
						case as.K:
							return t.payload;
						case as.I:
						case _.a:
							return null;
						default:
							return e
					}
				},
				En = r("./src/reddit/actions/polls.ts");
			var mn = (e = null, t) => {
					switch (t.type) {
						case En.a:
							return {
								...t.payload
							};
						case hs.b:
						case hs.n: {
							const e = t.payload;
							return e.poll ? {
								options: e.poll.options,
								duration: 864e5 * e.poll.duration
							} : null
						}
						case E.h:
						case as.A:
							return null;
						case _.a:
							return Fs(t) !== Me.Db.POST_CREATION ? null : e;
						default:
							return e
					}
				},
				_n = r("./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts"),
				On = r("./src/reddit/helpers/scheduledPosts/index.ts");
			var hn = (e = null, t) => {
				var r, s, n, a;
				switch (t.type) {
					case as.W: {
						const {
							schedule: e
						} = t.payload;
						return e || null
					}
					case as.A:
					case Vr.g:
					case as.K:
						return null;
					case _.a:
						if (Fs(t) === Me.Db.POST_CREATION) {
							const c = null === (a = (null !== (n = null === (s = null === (r = t.payload) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.match.queryParams) && void 0 !== n ? n : {}).frequency) || void 0 === a ? void 0 : a.toUpperCase();
							if (c && Object(Ks.m)(c)) {
								const t = Object(_n.c)();
								return {
									...e,
									...t,
									frequencyOption: c,
									recurrenceInfo: {
										..._n.a,
										...null == e ? void 0 : e.recurrenceInfo,
										...Object(_n.b)(new Date(t.submitDate), c)
									}
								}
							}
							return e
						}
						return null;
					case hs.n: {
						const e = t.payload;
						return {
							submitDate: e.publishAt,
							timezoneName: e.clientTimezone,
							frequencyOption: null,
							recurrenceInfo: null
						}
					}
					case hs.b: {
						const e = t.payload;
						return {
							...Object(On.h)(e)
						}
					}
					default:
						return e
				}
			};
			var In = (e = !1, t) => {
				const {
					type: r,
					payload: s
				} = t;
				switch (r) {
					case as.U:
						return s || !1;
					case _.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case hs.b:
					case hs.n:
					case Vr.g:
						return !1;
					default:
						return e
				}
			};
			var Sn = (e = "", t) => {
				switch (t.type) {
					case as.g:
						return t.payload || "";
					case _.a:
						return Fs(t) !== Me.Db.POST_CREATION ? "" : e;
					default:
						return e
				}
			};
			var gn = (e = null, t) => {
				switch (t.type) {
					case _.a:
						return Fs(t) !== Me.Db.POST_CREATION ? null : e;
					case as.A:
						return null;
					case hs.b:
					case hs.n:
						return t.payload.id;
					default:
						return e
				}
			};
			var Dn = (e = !0, t) => {
				switch (t.type) {
					case as.A:
						return !0;
					case as.V:
						return t.payload;
					case _.a:
						return Fs(t) !== Me.Db.POST_CREATION || e;
					case Vr.g:
						return t.payload.sendReplies;
					case hs.b:
					case hs.n:
						return t.payload.isSendReplies;
					default:
						return e
				}
			};
			var Tn = (e = null, t) => {
				switch (t.type) {
					case as.W: {
						const {
							stickyPosition: e
						} = t.payload;
						return e || null
					}
					case as.A:
					case Vr.g:
					case as.K:
						return null;
					case _.a:
						return Fs(t) === Me.Db.POST_CREATION ? e : null;
					case hs.b:
					case hs.n:
						return t.payload.sticky || null;
					default:
						return e
				}
			};
			const vn = Me.Lb.POST;
			var An = (e = vn, t) => {
				switch (t.type) {
					case as.A:
						return vn;
					case as.r:
						return Me.Lb.CROSSPOST;
					case as.i:
						return t.payload.submissionType || vn;
					case _.a: {
						if (Fs(t) !== Me.Db.POST_CREATION) return vn;
						const r = Gs(t);
						if (!r) return e;
						const {
							title: s = "",
							url: n,
							text: a = "",
							media: c = !1,
							selftext: o = !1
						} = r, d = s && !a && !o;
						return c ? Me.Lb.MEDIA : void 0 !== n || d ? Me.Lb.LINK_ONLY : a || o ? Me.Lb.POST : e
					}
					case Vr.g: {
						const e = t.payload;
						return Bs.a[e.kind]
					}
					case hs.b:
					case hs.n: {
						const e = t.payload;
						return e.poll ? Me.Lb.POLL : e.url ? Me.Lb.LINK_ONLY : Me.Lb.POST
					}
					default:
						return e
				}
			};
			var jn = (e = null, t) => {
					switch (t.type) {
						case as.W: {
							const {
								suggestedSort: e
							} = t.payload;
							return e || null
						}
						case as.A:
						case Vr.g:
						case as.K:
							return null;
						case _.a:
							return Fs(t) === Me.Db.POST_CREATION ? e : null;
						case hs.b:
						case hs.n:
							return t.payload.suggestedCommentSort || null;
						default:
							return e
					}
				},
				wn = r("./src/reddit/models/Poll/index.ts");
			const Cn = e => `Should ${e||"username"} become the top moderator?`,
				Rn = e => e ? `Should we spin-off to r/${e}?` : "Should we spin-off to a new community?";
			var Pn = (e = "", t) => {
					switch (t.type) {
						case as.r:
							return t.payload.postTitle || "";
						case as.j:
							return t.payload || "";
						case as.z: {
							const {
								title: r
							} = t.payload;
							return e || (r || "")
						}
						case as.A:
							return "";
						case _.a: {
							if (Fs(t) !== Me.Db.POST_CREATION) return "";
							const r = Gs(t);
							return r && r.title ? (e => e ? e.replace(/\+/g, " ") : "")(r.title) : e
						}
						case Vr.g:
							return t.payload.title;
						case as.q: {
							const {
								oldType: r,
								type: s
							} = t.payload;
							return s === wn.a.ReplaceTopMod ? Cn("") : s === wn.a.Spinoff ? Rn("") : r === wn.a.ReplaceTopMod || r === wn.a.Spinoff ? "" : e
						}
						case E.c: {
							const {
								username: e
							} = t.payload;
							return Cn(e)
						}
						case E.b: {
							const {
								subredditName: e
							} = t.payload;
							return Rn(e)
						}
						case as.i: {
							const {
								extra: r
							} = t.payload;
							return !r || r.govType !== wn.a.ReplaceTopMod && r.govType !== wn.a.Spinoff ? e : ""
						}
						case hs.b:
						case hs.n:
							return t.payload.title;
						default:
							return e
					}
				},
				Ln = Object(c.c)({
					body: Zs,
					eventSchedule: en,
					flair: rn,
					govType: sn,
					isChatPost: nn,
					isContestMode: an,
					isNSFW: cn,
					isOC: on,
					isPostAsMetaMod: un,
					isPoll: dn,
					isPublicLink: ln,
					isSpoiler: pn,
					newSubreddit: bn,
					newTopMod: fn,
					nextSubreddit: yn,
					polls: mn,
					postSchedule: hn,
					postToTwitter: In,
					recaptcha: Sn,
					scheduledPostId: gn,
					sendReplies: Dn,
					stickyPosition: Tn,
					submissionType: An,
					suggestedSort: jn,
					title: Pn
				});
			var Nn = (e = null, t) => {
				switch (t.type) {
					case _.a: {
						if (Fs(t) !== Me.Db.POST_CREATION) return null;
						const r = Gs(t);
						return r && r.text && (e => e ? e.replace(/\+/g, " ") : "")(r.text) ? Hs.h.MARKDOWN : e
					}
					case as.D: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case as.E:
						return null;
					case as.M: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case hs.b:
					case hs.n:
						return t.payload.contentType === Ks.a.RTJSON ? Hs.h.RICH_TEXT : Hs.h.MARKDOWN;
					default:
						return e
				}
			};
			const kn = {
				title: [],
				body: [],
				link: [],
				flair: []
			};
			var Un = (e = kn, t) => {
				switch (t.type) {
					case as.c:
					case as.d:
					case as.e:
						return e[Me.ob.BODY] ? {
							...e,
							[Me.ob.BODY]: []
						} : e;
					case as.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return e[Me.ob.BODY] && r ? {
							...e,
							[Me.ob.BODY]: []
						} : e
					}
					case as.j:
						return e[Me.ob.TITLE] ? {
							...e,
							[Me.ob.TITLE]: []
						} : e;
					case as.H: {
						const r = t.payload;
						return {
							...e,
							[r]: []
						}
					}
					case as.n: {
						const r = t.payload;
						return r ? {
							...e,
							[r]: []
						} : kn
					}
					case as.G:
					case as.F:
						return ((e, t) => {
							const r = (t.fields || []).filter(({
								field: e
							}) => Object(Hs.u)(e));
							if (!r.length) return e;
							const s = r.reduce((e, t) => (e[t.field] || (e[t.field] = []), e[t.field].push(t.msg), e), {});
							return {
								...e,
								...s
							}
						})(e, t.payload);
					case _.a:
						return Fs(t) !== Me.Db.POST_CREATION ? kn : e;
					default:
						return e
				}
			};
			var xn = (e = !1, t) => {
				switch (t.type) {
					case as.b:
					case as.c:
					case as.d:
					case as.e:
					case as.f:
					case as.j:
					case as.i:
					case as.Q:
					case as.R:
					case as.T:
					case Vr.n:
					case as.V:
					case as.W:
						return !0;
					case as.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return !!r || e
					}
					case as.L:
					case hs.h:
						return !1;
					case as.N:
						return t.payload;
					case _.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case as.A:
					case Vr.l:
					case Vr.g:
						return !1;
					default:
						return e
				}
			};
			const Mn = Hs.q.Post;
			var Fn = (e = Mn, t) => {
					switch (t.type) {
						case as.w:
							return Hs.q.Post;
						case as.B:
							return t.payload;
						case Vr.j:
							return Hs.q.Draft;
						case _.a:
							return Fs(t) !== Me.Db.POST_CREATION ? Mn : e;
						default:
							return e
					}
				},
				Gn = Object(c.c)({
					editorMode: Nn,
					fieldValidation: Un,
					isChanged: xn,
					submitMode: Fn
				});
			var Bn = (e = "", t) => {
				switch (t.type) {
					case as.D:
						return t.payload.editorMode === Hs.h.MARKDOWN ? t.payload.postContent || "" : e;
					case as.E:
						return "";
					case as.M:
						return t.payload.editorMode === Hs.h.MARKDOWN ? t.payload.content || "" : e;
					default:
						return e
				}
			};
			const qn = $s.a.createInitial;
			var Hn = (e = qn(), t) => {
					switch (t.type) {
						case as.E:
							return $s.a.createInitial();
						case as.D: {
							const r = t.payload;
							return r.editorMode === Hs.h.RICH_TEXT && "object" == typeof r.postContent ? $s.a.createInitial(r.postContent, r.mediaMetadata) : e
						}
						case as.M: {
							const r = t.payload;
							return r.editorMode === Hs.h.RICH_TEXT && r.editorKey === Hs.g.POST_EDITING ? $s.a.createInitial(r.content) : e
						}
						default:
							return e
					}
				},
				Kn = Object(c.c)({
					markdown: Bn,
					rte: Hn
				});
			var Vn = (e = null, t) => {
					switch (t.type) {
						case as.D: {
							const {
								postId: e
							} = t.payload;
							return e
						}
						case as.E:
							return null;
						default:
							return e
					}
				},
				Wn = Object(c.c)({
					draft: Kn,
					postId: Vn
				}),
				Yn = Object(c.c)({
					api: Ls,
					drafts: Ms,
					formData: Ln,
					formState: Gn,
					postEditing: Wn
				}),
				$n = r("./src/reddit/actions/dashboard/constants.ts");
			const Qn = {
				selectedComponent: null,
				subredditPending: !1,
				subredditLoaded: {}
			};
			var Xn = (e = Qn, t) => {
				switch (t.type) {
					case $n.a:
						return {
							...e, selectedComponent: t.payload
						};
					case $n.d: {
						const r = t.payload,
							s = e.subredditLoaded[r];
						return {
							...e,
							subredditPending: !s,
							subredditLoaded: {
								...e.subredditLoaded,
								[r]: s || !1
							}
						}
					}
					case $n.c: {
						const r = t.payload;
						return {
							...e,
							subredditPending: !1,
							subredditLoaded: {
								...e.subredditLoaded,
								[r]: !0
							}
						}
					}
					default:
						return e
				}
			};
			var zn = (e = null, t) => {
				switch (t.type) {
					case je.b:
					case je.c:
						return null;
					case je.a: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			var Jn = (e = !1, t) => {
				switch (t.type) {
					case je.c:
						return !1;
					case je.b:
						return !0;
					default:
						return e
				}
			};
			var Zn = (e = !1, t) => {
					switch (t.type) {
						case je.c:
							return !0;
						case je.b:
						case je.a:
							return !1;
						default:
							return e
					}
				},
				ea = Object(c.c)({
					error: zn,
					loaded: Jn,
					pending: Zn
				}),
				ta = Object(c.c)({
					list: ea
				}),
				ra = r("./node_modules/lodash/isEmpty.js"),
				sa = r.n(ra);
			const na = {};
			var aa = (e = na, t) => {
					switch (t.type) {
						case je.b: {
							const {
								discoveryUnits: r
							} = t.payload;
							return sa()(r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				ca = r("./node_modules/lodash/forOwn.js"),
				oa = r.n(ca),
				da = r("./src/reddit/helpers/name/index.ts");
			const ia = {};
			var ua = (e = ia, t) => {
					switch (t.type) {
						case je.b: {
							const {
								discoveryUnits: r
							} = t.payload;
							if (sa()(r)) return e;
							const s = {};
							return oa()(r, e => {
								s[Object(da.g)(e.unitName)] = e.id
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				la = Object(c.c)({
					api: ta,
					models: aa,
					nameToId: ua
				}),
				pa = r("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const ba = [];
			var fa = (e = ba, t) => {
					switch (t.type) {
						case pa.a: {
							const {
								subredditId: r
							} = t.payload;
							return [...e, r]
						}
						default:
							return e
					}
				},
				ya = r("./src/reddit/actions/economics/banners/constants.ts");
			const Ea = {
				dismissedBanners: {}
			};
			var ma = (e = Ea, t) => {
					switch (t.type) {
						case ya.c: {
							const r = t.payload;
							return {
								...e,
								dismissedBanners: {
									...e.dismissedBanners,
									[r]: {
										...e.dismissedBanners[r],
										pending: !0
									}
								}
							}
						}
						case ya.d: {
							const {
								subredditId: r,
								data: s
							} = t.payload;
							return {
								...e,
								dismissedBanners: {
									...e.dismissedBanners,
									[r]: {
										...e.dismissedBanners[r],
										pending: !1,
										data: s
									}
								}
							}
						}
						case ya.a:
						case ya.b: {
							const {
								subredditId: r,
								bannerType: s
							} = t.payload, n = e.dismissedBanners[r] || {}, a = t.type === ya.a;
							return {
								...e,
								dismissedBanners: {
									...e.dismissedBanners,
									[r]: {
										...n,
										data: {
											...n.data,
											[s]: a
										}
									}
								}
							}
						}
						default:
							return e
					}
				},
				_a = r("./src/reddit/models/Badge/managementPage.ts");
			const Oa = {
				badgeType: _a.a.Cosmetic,
				view: _a.c.Gallery
			};
			var ha = (e = Oa, t) => {
				switch (t.type) {
					case y.c: {
						const {
							badge: r,
							initialView: s
						} = t.payload;
						return r || s ? {
							...e,
							badgeType: r ? Object(_a.d)(r.placement) : e.badgeType,
							view: s
						} : e
					}
					case y.b: {
						const r = t.payload;
						return {
							...e,
							badgeType: r
						}
					}
					case y.d: {
						const r = t.payload;
						return {
							...e,
							view: r
						}
					}
					case s.b:
						return Oa;
					default:
						return e
				}
			};
			var Ia = (e = null, t) => {
				switch (t.type) {
					case y.c:
						return {
							badge: t.payload.badge
						};
					case s.b:
						return null;
					default:
						return e
				}
			};
			const Sa = {};
			var ga = (e = Sa, t) => {
				switch (t.type) {
					case y.e: {
						const {
							emotes: r,
							emoteCollections: s
						} = t.payload.products, n = {};
						return r.forEach(e => {
							const t = e.extra && e.extra.assets,
								r = Object.keys(e.collections || {})[0] || e.title,
								a = s[r];
							n[r] || (n[r] = {
								emotes: {},
								position: a ? a.position : 0,
								title: a ? a.title : e.title
							}), t && Object.keys(t).forEach(s => {
								const a = t[s];
								n[r].emotes[s] = {
									id: s,
									emoji: a.emoji,
									extra: {
										rtDescription: e.extra && e.extra.rtDescription
									},
									fullId: `emote|${e.id}|${s}`,
									imageType: a.emoji.type,
									sticker: a.sticker
								}
							})
						}), {
							...e,
							[t.payload.subredditId]: Object.keys(n).map(e => n[e]).sort((e, t) => e.position - t.position)
						}
					}
					case oe.ib: {
						const {
							powerups: r,
							subredditId: s
						} = t.payload;
						if (r && r.mediaPacks) {
							const t = r.mediaPacks.map(e => ({
								title: e.name,
								emotes: e.emotes.reduce((t, r) => ({
									...t,
									[r.name]: {
										id: r.name,
										fullId: `emote|${e.id}|${r.name}`,
										imageType: r.emojiIcon.mimeType,
										emoji: {
											x: r.emojiIcon.x,
											y: r.emojiIcon.y,
											path: r.emojiIcon.url,
											type: r.emojiIcon.mimeType
										},
										sticker: {
											x: r.stickerIcon.x,
											y: r.stickerIcon.y,
											path: r.stickerIcon.url,
											type: r.stickerIcon.mimeType
										}
									}
								}), {})
							}));
							return {
								...e,
								[s]: e[s] ? [...e[s], ...t] : t
							}
						}
						return e
					}
					default:
						return e
				}
			};
			const Da = {};
			var Ta = (e = Da, t) => {
					switch (t.type) {
						case y.e: {
							const r = t.payload.products.giphy.length > 0;
							return {
								...e,
								[t.payload.subredditId]: {
									hasGifProduct: r
								}
							}
						}
						default:
							return e
					}
				},
				va = r("./src/reddit/actions/economics/me/constants.ts");
			const Aa = {
				fetched: !1,
				data: {}
			};
			var ja = (e = Aa, t) => {
					switch (t.type) {
						case va.a:
							return {
								fetched: !0, data: t.payload
							};
						case y.h: {
							const {
								subredditId: r
							} = t.payload;
							return e.data.specialMemberships && e.data.specialMemberships[r] ? {
								...e,
								data: {
									...e.data,
									specialMemberships: {
										...e.data.specialMemberships,
										[r]: {
											...e.data[r],
											settings: {
												renew: !1
											}
										}
									}
								}
							} : e
						}
						default:
							return e
					}
				},
				wa = r("./src/reddit/reducers/economics/paymentSystems/index.ts");
			const Ca = {
				fetched: !1,
				data: null
			};
			var Ra = (e = Ca, t) => {
					switch (t.type) {
						case va.b:
							return {
								fetched: !0, data: e.data
							};
						case va.c:
							return {
								fetched: !0, data: t.payload
							};
						default:
							return e
					}
				},
				Pa = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				La = Object(c.c)({
					banners: ma,
					currentBadgeManagementScreen: ha,
					currentModalArgs: Ia,
					emotes: ga,
					gifs: Ta,
					me: ja,
					paymentSystems: wa.b,
					pointsCopy: Ra,
					subredditPremium: Pa.b
				}),
				Na = r("./src/reddit/actions/emoji.ts");
			const ka = {};
			var Ua = (e = ka, t) => {
					switch (t.type) {
						case Na.h: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Na.g:
						case Na.f: {
							const {
								subredditId: r
							} = t.payload, {
								[r]: s,
								...n
							} = e;
							return n
						}
						default:
							return e
					}
				},
				xa = Object(c.c)({
					pending: Ua
				}),
				Ma = Object(c.c)({
					list: xa
				});
			const Fa = {};
			var Ga = (e = Fa, t) => {
					switch (t.type) {
						case Na.f:
						case Na.c:
							return e;
						case Na.g: {
							const {
								data: e
							} = t.payload;
							return e
						}
						case Na.d: {
							const {
								emojiName: r,
								subredditId: s
							} = t.payload, n = e[s].emojis, {
								[r]: a,
								...c
							} = n;
							return {
								...e,
								[s]: {
									...e[s],
									emojis: c
								}
							}
						}
						case Na.i: {
							const r = t.payload,
								s = e[r.subredditId].emojis,
								n = {
									url: r.url,
									name: r.name,
									userFlairAllowed: r.userFlairAllowed,
									postFlairAllowed: r.postFlairAllowed,
									modFlairOnly: r.modFlairOnly
								},
								a = {
									...s,
									[r.name]: n
								};
							return {
								...e,
								[r.subredditId]: {
									...e[r.subredditId],
									emojis: a
								}
							}
						}
						case Na.e: {
							const {
								emojiName: r,
								isSnoomoji: s,
								settings: n,
								subredditId: a
							} = t.payload, c = s ? "snoomojis" : "emojis", o = e[a][c], d = {
								...o,
								[r]: {
									...o[r],
									...n
								}
							};
							return {
								...e,
								[a]: {
									...e[a],
									[c]: d
								}
							}
						}
						default:
							return e
					}
				},
				Ba = Object(c.c)({
					api: Ma,
					models: Ga
				}),
				qa = r("./src/reddit/actions/experiments.ts");
			const Ha = /^experiment_(.*)$/i,
				Ka = e => {
					const t = e.match(Ha);
					if (null !== t) return t[1]
				},
				Va = {};
			var Wa = (e = Va, t) => {
					switch (t.type) {
						case _.a: {
							const r = Gs(t);
							if (!r) return e;
							const s = {};
							for (const e in r) {
								const t = Ka(e);
								t && (s[t.toLowerCase()] = r[e] || "")
							}
							return sa()(s) ? e : {
								...e,
								...s
							}
						}
						case qa.b: {
							const {
								experimentName: r,
								override: s
							} = t.payload;
							return r ? {
								...e,
								[r]: s || ""
							} : e
						}
						default:
							return e
					}
				},
				Ya = r("./src/reddit/actions/externalAccount.ts");
			const $a = {};
			var Qa = (e = $a, t) => {
				switch (t.type) {
					case Ya.e:
					case Ya.f: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Ya.d: {
						const {
							provider: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Xa = {};
			var za = (e = Xa, t) => {
					switch (t.type) {
						case Ya.e: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Ya.f:
						case Ya.d: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				Ja = Object(c.c)({
					error: Qa,
					pending: za
				});
			const Za = {};
			var ec = (e = Za, t) => {
				switch (t.type) {
					case Ya.l:
					case Ya.k: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Ya.j: {
						const {
							provider: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const tc = {};
			var rc = (e = tc, t) => {
					switch (t.type) {
						case Ya.b: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Ya.c:
						case Ya.a: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				sc = Object(c.c)({
					error: ec,
					pending: rc
				});
			const nc = {};
			var ac = (e = nc, t) => {
				switch (t.type) {
					case Ya.i:
					case Ya.h: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Ya.g: {
						const {
							subredditName: r,
							apiError: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const cc = {};
			var oc = (e = cc, t) => {
				switch (t.type) {
					case Ya.h: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r]: !0
						}
					}
					default:
						return e
				}
			};
			const dc = {};
			var ic = (e = dc, t) => {
					switch (t.type) {
						case Ya.i: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Ya.h:
						case Ya.g: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				uc = Object(c.c)({
					error: ac,
					fetched: oc,
					pending: ic
				});
			const lc = {};
			var pc = (e = lc, t) => {
				switch (t.type) {
					case Ya.l:
					case Ya.k: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Ya.j: {
						const {
							username: r,
							apiError: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const bc = {};
			var fc = (e = bc, t) => {
					switch (t.type) {
						case Ya.l: {
							const {
								username: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Ya.k:
						case Ya.j: {
							const {
								username: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				yc = Object(c.c)({
					error: pc,
					pending: fc
				}),
				Ec = Object(c.c)({
					connect: Ja,
					disconnect: sc,
					user: yc,
					subreddit: uc
				});
			const mc = {};
			var _c = (e = mc, t) => {
				switch (t.type) {
					case Ya.h: {
						const {
							subredditName: r,
							accountsData: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Oc = {};
			var hc = (e = Oc, t) => {
					switch (t.type) {
						case Ya.k: {
							const {
								username: r,
								accountsData: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case Ya.c: {
							const {
								username: r,
								provider: s
							} = t.payload, n = e[r];
							return n && n[s] ? {
								...e,
								[r]: ks()(n, s)
							} : e
						}
						default:
							return e
					}
				},
				Ic = Object(c.c)({
					api: Ec,
					user: hc,
					subreddit: _c
				}),
				Sc = r("./src/reddit/featureFlags/index.ts");
			const gc = new Set(["0", "disabled", "false", "off", ""]);
			var Dc = e => !gc.has(e.toLowerCase());
			const Tc = Sc.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				vc = Sc.a.reduce((e, t) => (e[t] = null, e), {});
			var Ac = (e = vc, t) => {
					switch (t.type) {
						case _.a: {
							const r = Gs(t);
							if (void 0 !== r) {
								const t = {};
								for (const e in r) {
									const s = Object(Sc.g)(e);
									if (s) {
										const n = Tc[s.toLowerCase()];
										if (n) {
											const s = r[e],
												a = "string" != typeof s || Dc(s);
											t[n] = a
										}
									}
								}
								if (Object.keys(t).length > 0) return {
									...e,
									...t
								}
							}
							return e
						}
						case Sc.b: {
							const {
								featureName: r,
								currentValue: s
							} = t.payload;
							return s === e[r] ? e : {
								...e,
								[r]: s
							}
						}
						case Sc.c: {
							const {
								featureName: r,
								currentValue: s
							} = t.payload;
							return {
								...e,
								[r]: !s
							}
						}
						default:
							return e
					}
				},
				jc = Object(c.c)({
					overrides: Ac
				}),
				wc = r("./src/reddit/actions/focusedVerticals/constants.ts");
			const Cc = {
				focusedVerticalGqlError: null
			};
			var Rc = (e = Cc, t) => {
				switch (t.type) {
					case wc.h:
					case wc.g:
					case wc.c:
						return {
							...e, focusedVerticalGqlError: null
						};
					case wc.e:
						return {
							...e, focusedVerticalGqlError: t.payload
						};
					default:
						return e
				}
			};
			const Pc = {
				focusedVerticalGqlPending: !1
			};
			var Lc = (e = Pc, t) => {
					switch (t.type) {
						case wc.h:
							return {
								...e, focusedVerticalGqlPending: !0
							};
						case wc.e:
						case wc.g:
						case wc.c:
							return {
								...e, focusedVerticalGqlPending: !1
							};
						default:
							return e
					}
				},
				Nc = Object(c.c)({
					error: Rc,
					pending: Lc
				});
			var kc = (e = "", t) => {
				switch (t.type) {
					case wc.g:
					case wc.c:
						return t.payload.category || "";
					default:
						return e
				}
			};
			const Uc = {
				dismissed: !0
			};
			var xc = (e = Uc, t) => {
				switch (t.type) {
					case wc.j:
						return {
							dismissed: !1
						};
					case wc.i:
						return {
							dismissed: !0
						};
					default:
						return e
				}
			};
			var Mc = (e = null, t) => {
				switch (t.type) {
					case wc.g:
					case wc.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var Fc = (e = null, t) => {
				switch (t.type) {
					case wc.g:
					case wc.c:
					case wc.f:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var Gc = (e = null, t) => {
					switch (t.type) {
						case wc.g:
						case wc.c:
							return t.payload.recommendedSubredditIds || null;
						default:
							return e
					}
				},
				Bc = Object(c.c)({
					api: Nc,
					components: xc,
					interactedSubredditIds: Mc,
					recommendedSubredditIds: Gc,
					category: kc,
					lastLoadedEnv: Fc
				});
			Object(xe.a)("FONTS_FONT_FILES_PARSED");
			const qc = [];
			var Hc = (e = qc, t) => {
				switch (t.type) {
					case "FONTS_FONT_FILES_PARSED":
						return t.payload.fonts;
					default:
						return e
				}
			};
			var Kc = (e = null, t) => {
				switch (t.type) {
					case oe.q:
						return t.payload;
					case oe.f:
					case _.a:
					case oe.K:
					case oe.t:
						return null;
					default:
						return e
				}
			};
			var Vc = (e = !1, t) => {
				switch (t.type) {
					case oe.f:
					case _.a:
					case oe.t:
					case oe.q:
						return !1;
					case oe.r:
						return !0;
					default:
						return e
				}
			};
			var Wc = (e = !1, t) => {
					switch (t.type) {
						case oe.r:
						case oe.f:
						case _.a:
						case oe.t:
						case oe.q:
							return !1;
						case oe.v:
							return !0;
						default:
							return e
					}
				},
				Yc = Object(c.c)({
					error: Kc,
					pending: Vc,
					showLoader: Wc
				});
			var $c = (e = null, t) => {
				switch (t.type) {
					case oe.L:
					case oe.K: {
						if (!t.payload) return null;
						const {
							correlationId: e
						} = t.payload;
						return e
					}
					case oe.g:
					case oe.f:
						return null;
					default:
						return e
				}
			};
			var Qc = (e = null, t) => {
				switch (t.type) {
					case oe.u: {
						const {
							id: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var Xc = (e = null, t) => {
				const r = t.payload;
				switch (t.type) {
					case oe.J:
					case oe.K:
						return r.thingId;
					case oe.t:
					case _.a:
					case oe.f:
						return null;
					default:
						return e
				}
			};
			var zc = (e = !1, t) => {
				switch (t.type) {
					case oe.s:
						return t.payload;
					case oe.K:
						return !1;
					default:
						return e
				}
			};
			var Jc = (e = !1, t) => {
				switch (t.type) {
					case oe.J:
						return !0;
					default:
						return e
				}
			};
			var Zc = (e = "", t) => {
				switch (t.type) {
					case oe.w:
						return t.payload;
					case oe.K:
						return "";
					default:
						return e
				}
			};
			const eo = Ae.n;
			var to = (e = eo, t) => {
					switch (t.type) {
						case oe.fb:
							return t.payload;
						case oe.K: {
							const {
								award: e
							} = t.payload;
							return e || eo
						}
						default:
							return e
					}
				},
				ro = Object(c.c)({
					api: Yc,
					correlationId: $c,
					gildModalThingId: Xc,
					isAnonymous: zc,
					isIframed: Jc,
					message: Zc,
					gildedThing: Qc,
					selectedAward: to
				});
			var so = (e = null, t) => {
				switch (t.type) {
					case oe.x:
						return t.payload.error && t.payload.error.fields && t.payload.error.fields[0] && t.payload.error.fields[0].msg || "An unknown error occurred";
					case oe.g:
					case _.a:
					case oe.L:
					case oe.C:
						return null;
					default:
						return e
				}
			};
			var no = (e = !1, t) => {
					switch (t.type) {
						case oe.g:
						case _.a:
						case oe.C:
						case oe.x:
							return !1;
						case oe.y:
							return !0;
						default:
							return e
					}
				},
				ao = Object(c.c)({
					error: so,
					pending: no
				});
			var co = (e = "", t) => {
					switch (t.type) {
						case oe.L: {
							const {
								profileName: e
							} = t.payload;
							return e
						}
						case _.a:
						case oe.g:
						case oe.C:
							return "";
						default:
							return e
					}
				},
				oo = Object(c.c)({
					api: ao,
					givePremiumModalAccountName: co
				}),
				io = r("./src/reddit/actions/header.ts"),
				uo = r("./src/reddit/actions/overlayEvents.ts");
			var lo = (e = !1, t) => {
					switch (t.type) {
						case io.a:
							return !1;
						case io.b:
							return !0;
						case io.c:
							return !e;
						case uo.b:
							return !1;
						default:
							return e
					}
				},
				po = Object(c.c)({
					isSubscriptionsDropdownOpen: lo
				});
			var bo = (e = !1, t) => {
					switch (t.type) {
						case "HTML_RESPONSE_STREAMING_STARTED":
							return !0;
						case "HTML_RESPONSE_STREAMING_ENDED":
							return !1;
						default:
							return e
					}
				},
				fo = r("./src/reddit/actions/imageUploads.ts");
			const yo = {};
			var Eo = (e = yo, t) => {
					switch (t.type) {
						case fo.d: {
							const r = t.payload;
							return {
								...e,
								[r.id]: r
							}
						}
						case fo.c:
						case fo.e:
						case fo.b: {
							const r = t.payload;
							return e[r.id] ? {
								...e,
								[r.id]: r
							} : e
						}
						case fo.a: {
							const r = t.payload;
							if (!e[r.id]) return e;
							const s = {
								...e
							};
							return delete s[r.id], s
						}
						default:
							return e
					}
				},
				mo = r("./src/reddit/actions/interceptedAction.ts");
			var _o = (e = null, t) => {
					switch (t.type) {
						case mo.a:
							return t.payload;
						case mo.b:
							return null;
						default:
							return e
					}
				},
				Oo = r("./src/reddit/actions/changeUsername.ts");
			var ho = (e = !0, t) => {
					switch (t.type) {
						case Oo.a:
							return !1;
						case Oo.b:
							return !0;
						default:
							return e
					}
				},
				Io = r("./src/reddit/actions/emailVerificationTooltip.ts");
			var So = (e = !0, t) => {
					switch (t.type) {
						case Io.a:
							return !e;
						default:
							return e
					}
				},
				go = r("./src/reddit/actions/moderatingSubreddits.ts");
			var Do = (e = !1, t) => {
					switch (t.type) {
						case go.a: {
							if (e) return e;
							const r = t.payload;
							return Object.keys(r).some(e => !0 === r[e].posts)
						}
						case J.SUBREDDIT_LOADED:
						case Y.b:
						case Y.f:
						case Ne.PAGE_LOADED: {
							if (e) return e;
							const {
								payload: r
							} = t;
							return r.subredditPermissions && r.subreddits ? !!r.subredditPermissions.posts : e
						}
						case W.i:
						case W.f:
						case W.m:
						case W.p:
						case W.v: {
							if (e) return e;
							const {
								response: r
							} = t.payload, {
								moderatingSubreddits: s,
								moderatingProfiles: n
							} = r;
							let a = Object.keys(s).some(e => !0 === s[e].posts);
							if (!a) {
								a = Object.keys(n).some(e => !0 === s[e].posts)
							}
							return a
						}
						default:
							return e
					}
				},
				To = r("./src/reddit/actions/jsApi.ts");
			const vo = [];
			var Ao = (e = vo, t) => {
					switch (t.type) {
						case To.a: {
							const r = t.payload;
							return -1 === e.indexOf(r) && (e = [...e, r]).sort(), e
						}
						default:
							return e
					}
				},
				jo = r("./src/reddit/actions/leaderboard/constants.ts");
			const wo = {};
			var Co = (e = wo, t) => {
				switch (t.type) {
					case jo.a: {
						const {
							subredditId: r,
							data: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case jo.b:
					case jo.c: {
						const {
							subredditId: r
						} = t.payload, {
							[r]: s,
							...n
						} = e;
						return n
					}
					default:
						return e
				}
			};
			const Ro = {};
			var Po = (e = Ro, t) => {
					switch (t.type) {
						case jo.a:
						case jo.c: {
							const {
								subredditId: r
							} = t.payload, {
								[r]: s,
								...n
							} = e;
							return n
						}
						case jo.b: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						default:
							return e
					}
				},
				Lo = Object(c.c)({
					error: Co,
					pending: Po
				});
			const No = {};
			var ko = (e = No, t) => {
					switch (t.type) {
						case jo.c: {
							const {
								subredditId: r,
								data: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Uo = Object(c.c)({
					api: Lo,
					models: ko
				});
			var xo = (e = "", t) => {
				switch (t.type) {
					case _.a: {
						const {
							listingKey: r
						} = t.payload;
						return r || e
					}
					default:
						return e
				}
			};
			const Mo = {};
			var Fo = (e = Mo, t) => {
				switch (t.type) {
					case Fe.b:
					case Fe.c:
					case z.SEARCH_PENDING:
					case z.SEARCH_RESULTS_RECEIVED: {
						const {
							key: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Me.Pb.Subreddits) && -1 === s.indexOf(Me.Pb.Users) ? e : {
							...e,
							[r]: null
						}
					}
					case Fe.a:
					case z.SEARCH_FAILED: {
						const {
							key: r,
							error: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Me.Pb.Subreddits) && -1 === n.indexOf(Me.Pb.Users) ? e : {
							...e,
							[r]: s
						}
					}
					case je.f:
					case je.e: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case je.d: {
						const {
							key: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Go = {};
			var Bo = (e = Go, t) => {
					switch (t.type) {
						case Fe.b:
						case z.SEARCH_PENDING: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Me.Pb.Subreddits) && -1 === s.indexOf(Me.Pb.Users) ? e : {
								...e,
								[r]: !0
							}
						}
						case Fe.c:
						case Fe.a:
						case z.SEARCH_RESULTS_RECEIVED:
						case z.SEARCH_FAILED: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Me.Pb.Subreddits) && -1 === s.indexOf(Me.Pb.Users) ? e : {
								...e,
								[r]: !1
							}
						}
						case je.f: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case je.e:
						case je.d: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				qo = Object(c.c)({
					error: Fo,
					pending: Bo
				});
			const Ho = {};
			var Ko = (e = Ho, t) => {
				switch (t.type) {
					case Fe.c: {
						const {
							fetchedToken: r,
							key: s,
							type: n
						} = t.payload;
						if (-1 === n.indexOf(Me.Pb.Subreddits) && -1 === n.indexOf(Me.Pb.Users)) return e;
						const a = e[s];
						return {
							...e,
							[s]: {
								...a,
								[r]: !0
							}
						}
					}
					case je.e: {
						const {
							fetchedToken: r,
							key: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								[r]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const Vo = {};
			var Wo = (e = Vo, t) => {
				switch (t.type) {
					case Fe.c: {
						const {
							key: r,
							listingOrder: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Me.Pb.Subreddits) && -1 === n.indexOf(Me.Pb.Users) ? e : {
							...e,
							[r]: e[r].concat(s)
						}
					}
					case z.SEARCH_RESULTS_RECEIVED: {
						const {
							key: r,
							listingOrder: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Me.Pb.Subreddits) && -1 === n.indexOf(Me.Pb.Users) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Yo = {};
			var $o = (e = Yo, t) => {
					switch (t.type) {
						case Fe.c:
						case z.SEARCH_RESULTS_RECEIVED: {
							const {
								key: r,
								tokens: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Me.Pb.Subreddits) && -1 === n.indexOf(Me.Pb.Users) ? e : s.listings ? {
								...e,
								[r]: {
									token: s.listings
								}
							} : Object(Vt.a)(e, r)
						}
						case je.e: {
							const {
								key: r,
								token: s
							} = t.payload;
							return {
								...e,
								[r]: {
									token: s
								}
							}
						}
						default:
							return e
					}
				},
				Qo = Object(c.c)({
					api: qo,
					identifiers: Wo,
					fetchedTokens: Ko,
					loadMore: $o
				}),
				Xo = r("./src/reddit/actions/eventPosts/constants.ts"),
				zo = r("./src/reddit/actions/otherDiscussions/constants.ts"),
				Jo = r("./src/reddit/actions/pages/topic.ts");
			const Zo = {};
			var ed = (e = Zo, t) => {
					switch (t.type) {
						case we.c:
						case we.b:
						case Le.c:
						case Le.b:
						case J.SUBREDDIT_PENDING:
						case J.SUBREDDIT_LOADED:
						case we.g:
						case we.f:
						case Pe.e:
						case Pe.f:
						case Pe.i:
						case Pe.h:
						case Re.s:
						case Re.r:
						case zo.b:
						case zo.c:
						case Q.PROFILE_POSTS_PENDING:
						case Q.PROFILE_POSTS_LOADED:
						case Q.MORE_POSTS_PENDING:
						case Q.MORE_POSTS_LOADED:
						case Z.f:
						case Z.e:
						case ke.f:
						case ke.e:
						case ee.j:
						case Jo.TOPIC_DATA_PENDING:
						case Jo.TOPIC_DATA_LOADED:
						case Jo.MORE_POSTS_PENDING:
						case Jo.MORE_POSTS_LOADED:
						case ee.i:
						case Xo.e:
						case Xo.c:
						case Xo.d: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: null
							}
						}
						case z.SEARCH_PENDING:
						case z.SEARCH_RESULTS_RECEIVED:
						case Fe.b:
						case Fe.c: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Me.Pb.Posts) ? e : {
								...e,
								[r]: null
							}
						}
						case we.a:
						case Le.a:
						case J.SUBREDDIT_FAILED:
						case we.e:
						case Pe.g:
						case Re.q:
						case zo.a:
						case ee.h:
						case Z.d:
						case ke.d:
						case Q.PROFILE_POSTS_FAILED:
						case Q.MORE_POSTS_FAILED:
						case Jo.TOPIC_DATA_FAILED:
						case Jo.MORE_POSTS_FAILED:
						case Xo.b: {
							const {
								key: r,
								error: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case z.SEARCH_FAILED:
						case Fe.a: {
							const {
								error: r,
								key: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Me.Pb.Posts) ? e : {
								...e,
								[s]: r
							}
						}
						default:
							return e
					}
				},
				td = r("./src/reddit/actions/linkedPosts/constants.ts"),
				rd = r("./src/reddit/actions/subreddit/constants.ts");
			const sd = {};
			var nd = (e = sd, t) => {
					switch (t.type) {
						case we.c:
						case Le.c:
						case Q.PROFILE_POSTS_PENDING:
						case ke.f:
						case J.SUBREDDIT_PENDING:
						case we.g:
						case Pe.f:
						case Pe.i:
						case Re.s:
						case zo.c:
						case Z.f:
						case Q.MORE_POSTS_PENDING:
						case ee.j:
						case Jo.MORE_POSTS_PENDING:
						case Xo.e: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case z.SEARCH_PENDING:
						case Fe.b: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Me.Pb.Posts) ? e : {
								...e,
								[r]: !0
							}
						}
						case we.b:
						case we.a:
						case Le.a:
						case Le.b:
						case ke.d:
						case ke.e:
						case Q.PROFILE_POSTS_FAILED:
						case Q.PROFILE_POSTS_LOADED:
						case J.SUBREDDIT_LOADED:
						case J.SUBREDDIT_FAILED:
						case we.f:
						case we.e:
						case td.a:
						case td.b:
						case Pe.e:
						case Pe.d:
						case Pe.h:
						case Pe.g:
						case Re.r:
						case Re.q:
						case Z.d:
						case Z.e:
						case Q.MORE_POSTS_FAILED:
						case Q.MORE_POSTS_LOADED:
						case rd.k:
						case zo.b:
						case zo.a:
						case ee.i:
						case ee.h:
						case Jo.MORE_POSTS_LOADED:
						case Jo.MORE_POSTS_FAILED:
						case Xo.c:
						case Xo.b:
						case Xo.d: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						case rd.s: {
							if (!t.payload || !t.payload.length) return e;
							const r = {};
							for (const e of t.payload) {
								r[e.key] = !1
							}
							return {
								...e,
								...r
							}
						}
						case z.SEARCH_RESULTS_RECEIVED:
						case z.SEARCH_FAILED:
						case Fe.c:
						case Fe.a: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Me.Pb.Posts) ? e : {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				ad = Object(c.c)({
					error: ed,
					pending: nd
				}),
				cd = r("./src/reddit/actions/postList.ts"),
				od = r("./node_modules/lodash/omitBy.js"),
				dd = r.n(od);

			function id(e, t) {
				return t = t.toLowerCase(), dd()(e, (e, r) => r === t || r.startsWith(`${t}--[`))
			}
			const ud = {};
			var ld = (e = ud, t) => {
				switch (t.type) {
					case cd.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case cd.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? ks()(e, [r]) : e
					}
					case J.SUBREDDIT_INVALIDATE_LISTING:
						return id(e, t.payload);
					default:
						return e
				}
			};
			const pd = {};
			var bd = (e = pd, t) => {
					switch (t.type) {
						case Pe.e:
						case we.b:
						case Le.b:
						case J.SUBREDDIT_LOADED:
						case Q.PROFILE_POSTS_LOADED:
						case Jo.TOPIC_DATA_LOADED: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: {}
							}
						}
						case we.f:
						case Pe.h:
						case Re.r:
						case Z.e:
						case Q.MORE_POSTS_LOADED:
						case ee.i:
						case Jo.MORE_POSTS_LOADED: {
							const {
								key: r,
								fetchedToken: s
							} = t.payload, n = e[r];
							return {
								...e,
								[r]: {
									...n,
									[s]: !0
								}
							}
						}
						case Fe.c: {
							const {
								fetchedToken: r,
								key: s,
								type: n
							} = t.payload;
							if (n.indexOf(Me.Pb.Posts) > -1) {
								const t = e[s];
								return {
									...e,
									[s]: {
										...t,
										[r]: !0
									}
								}
							}
							return e
						}
						case J.SUBREDDIT_INVALIDATE_LISTING:
							return id(e, t.payload);
						default:
							return e
					}
				},
				fd = r("./src/reddit/actions/post.ts");
			const yd = {};
			var Ed = (e = yd, t) => {
					switch (t.type) {
						case we.c:
						case Pe.f:
						case Le.c:
						case Q.PROFILE_POSTS_PENDING:
						case J.SUBREDDIT_PENDING:
						case ke.f:
						case Q.PROFILE_POSTS_PENDING:
						case Jo.TOPIC_DATA_PENDING: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: []
							}
						}
						case je.e:
						case td.b:
						case Pe.e:
						case we.b:
						case Le.b:
						case J.SUBREDDIT_LOADED:
						case rd.k:
						case zo.b:
						case ke.e:
						case Q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Jo.TOPIC_DATA_LOADED:
						case Xo.c: {
							const {
								key: r,
								postIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case rd.s: {
							if (!t.payload || !t.payload.length) return e;
							const r = {};
							for (const e of t.payload) {
								const t = e;
								r[t.key] = t.postIds
							}
							return {
								...e,
								...r
							}
						}
						case we.f:
						case Pe.h:
						case Re.r:
						case Q.MORE_POSTS_LOADED:
						case Z.e:
						case ee.i:
						case Jo.MORE_POSTS_LOADED:
						case Xo.d: {
							const {
								key: r,
								postIds: s
							} = t.payload;
							return {
								...e,
								[r]: e[r].concat(s)
							}
						}
						case z.SEARCH_RESULTS_RECEIVED: {
							const {
								key: r,
								postOrder: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Me.Pb.Posts) ? e : {
								...e,
								[r]: s
							}
						}
						case Fe.c: {
							const {
								key: r,
								postOrder: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Me.Pb.Posts) ? e : {
								...e,
								[r]: e[r].concat(s)
							}
						}
						case fd.k: {
							const {
								newStickiedPostList: r,
								listingKey: s
							} = t.payload;
							if (!e[s]) return e;
							const n = [...e[s]].filter(e => !r.includes(e));
							return n.unshift(...r), {
								...e,
								[s]: n
							}
						}
						case J.SUBREDDIT_INVALIDATE_LISTING:
							return id(e, t.payload);
						default:
							return e
					}
				},
				md = r("./src/lib/makeListingKey/index.ts"),
				_d = r("./src/reddit/actions/preferences.ts");
			const Od = {};
			var hd = (e = Od, t) => {
				switch (t.type) {
					case J.SUBREDDIT_LOADED: {
						const {
							key: r,
							listingSort: s
						} = t.payload;
						return s && !Object(md.b)(r) ? {
							...e,
							[r]: {
								sort: s,
								hasChanged: !1
							}
						} : e
					}
					case _d.a:
					case _d.q: {
						const t = {};
						return Object.keys(e).forEach(r => {
							t[r] = {
								...e[r],
								hasChanged: !0
							}
						}), t
					}
					default:
						return e
				}
			};
			const Id = {};
			var Sd = (e = Id, t) => {
				switch (t.type) {
					case we.b:
					case Le.b:
					case J.SUBREDDIT_LOADED:
					case ke.e:
					case Q.PROFILE_POSTS_LOADED:
					case we.f:
					case Pe.e:
					case Pe.h:
					case Re.r:
					case Z.e:
					case Q.MORE_POSTS_LOADED:
					case ee.i:
					case Jo.TOPIC_DATA_LOADED:
					case Jo.MORE_POSTS_LOADED: {
						const {
							key: r,
							token: s,
							dist: n
						} = t.payload;
						return s ? {
							...e,
							[r]: {
								token: s,
								dist: n
							}
						} : Object(Vt.a)(e, r)
					}
					case Fe.c:
					case z.SEARCH_RESULTS_RECEIVED: {
						const {
							key: r,
							tokens: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Me.Pb.Posts) ? e : s.posts ? {
							...e,
							[r]: {
								token: s.posts
							}
						} : Object(Vt.a)(e, r)
					}
					case J.SUBREDDIT_INVALIDATE_LISTING:
						return id(e, t.payload);
					default:
						return e
				}
			};
			const gd = {};
			var Dd = (e = gd, t) => {
					switch (t.type) {
						case Xo.c:
						case Xo.d: {
							const {
								pageInfo: r,
								key: s
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						default:
							return e
					}
				},
				Td = Object(c.c)({
					api: ad,
					endMarkers: ld,
					fetchedTokens: bd,
					ids: Ed,
					listingSort: hd,
					loadMore: Sd,
					pageInfo: Dd
				}),
				vd = Object(c.c)({
					activeKey: xo,
					listingOrder: Qo,
					postOrder: Td
				});
			var Ad = (e = null, t) => {
				switch (t.type) {
					case we.b: {
						const r = t.payload;
						return sa()(r.announcements) ? e : r.announcements || null
					}
					default:
						return e
				}
			};
			var jd = (e = null, t) => {
				switch (t.type) {
					case we.b: {
						const r = t.payload;
						return sa()(r.featuredLiveThread) ? e : r.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var wd = (e = !1, t) => {
				switch (t.type) {
					case we.b:
						return !0;
					default:
						return e
				}
			};
			var Cd = (e = !1, t) => {
					switch (t.type) {
						case "ANNOUNCEMENTS__SHOULD_SHOW":
							return !0;
						default:
							return e
					}
				},
				Rd = Object(c.c)({
					announcements: Ad,
					featured: jd,
					isFrontpageLoaded: wd,
					shouldShowAnnouncements: Cd
				}),
				Pd = r("./src/reddit/actions/media.ts");
			const Ld = {};
			var Nd = (e = Ld, t) => {
				switch (t.type) {
					case Pd.b: {
						const {
							postId: r,
							index: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const kd = {};
			var Ud = (e = kd, t) => {
					switch (t.type) {
						case Pd.e: {
							const {
								postId: r,
								isTileLayout: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				xd = Object(c.c)({
					currentSlideIndex: Nd,
					isGalleryTileLayout: Ud
				});
			var Md = (e = !0, t) => {
				switch (t.type) {
					case Pd.c:
						return t.payload;
					default:
						return e
				}
			};
			var Fd = (e = .5, t) => {
					switch (t.type) {
						case Pd.d:
							return t.payload;
						default:
							return e
					}
				},
				Gd = Object(c.c)({
					isMuted: Md,
					volume: Fd
				}),
				Bd = r("./src/reddit/actions/meta.ts");
			const qd = {
				ampCid: void 0,
				city: "",
				country: "",
				crawler: void 0,
				domain: "",
				isBot: !1,
				isSessionSeo: !1,
				locale: "",
				method: "",
				platform: void 0,
				protocol: "",
				region: "",
				sessionReferrerDomain: "",
				userAgent: "",
				pageloadServerTime: 0
			};
			var Hd = (e = qd, t) => {
					switch (t.type) {
						case Bd.b:
							return t.payload;
						case Bd.a:
							return {
								...e, ...t.payload
							};
						case Bd.c:
							return {
								...e, locale: t.payload
							};
						default:
							return e
					}
				},
				Kd = r("./src/reddit/actions/subredditModeration/constants.ts");
			const Vd = {};
			var Wd = (e = Vd, t) => {
				switch (t.type) {
					case J.SUBREDDIT_LOADED:
					case Y.b:
					case Y.f:
					case Ne.PAGE_LOADED: {
						const {
							payload: r
						} = t;
						if (!r.subredditPermissions || !r.subreddits) return e;
						const s = Object.keys(r.subredditAboutInfo || {});
						if (1 !== s.length) return e;
						const n = s[0];
						return {
							...e,
							[n]: r.subredditPermissions
						}
					}
					case W.i:
					case W.f:
					case W.m:
					case W.p:
					case W.v: {
						const {
							response: r
						} = t.payload, {
							moderatingSubreddits: s,
							moderatingProfiles: n
						} = r;
						return {
							...e,
							...s,
							...n
						}
					}
					case ee.f:
					case Pe.e:
					case W.k: {
						const r = t.payload,
							{
								moderatingSubreddits: s,
								moderatingProfiles: n
							} = r;
						return {
							...e,
							...s,
							...n
						}
					}
					case Kd.Z: {
						const {
							subredditId: r
						} = t.payload;
						return Object(Vt.a)(e, r)
					}
					case Kd.S: {
						const r = t.payload;
						return {
							...e,
							...r
						}
					}
					default:
						return e
				}
			};
			var Yd = (e = null, t) => {
				switch (t.type) {
					case fd.e:
						return t.payload;
					case fd.d:
						return null
				}
				return e
			};
			var $d = (e = null, t) => {
				switch (t.type) {
					case Pe.b:
					case Pe.k:
						return null;
					case Pe.a:
					case Pe.j:
						return t.payload;
					default:
						return e
				}
			};
			var Qd = (e = !1, t) => {
					switch (t.type) {
						case Pe.b:
						case Pe.k:
							return !0;
						case Pe.c:
						case Pe.a:
						case Pe.l:
						case Pe.j:
							return !1;
						default:
							return e
					}
				},
				Xd = Object(c.c)({
					error: $d,
					pending: Qd
				});
			const zd = [];
			var Jd = (e = zd, t) => {
					switch (t.type) {
						case Pe.e: {
							const r = t.payload,
								{
									filteredSubreddits: s
								} = r;
							return s || e
						}
						case Pe.j: {
							const r = t.payload;
							return [...e, r]
						}
						case Pe.k:
						case Pe.a: {
							const r = t.payload;
							return e.filter(e => e !== r)
						}
						default:
							return e
					}
				},
				Zd = Object(c.c)({
					api: Xd,
					names: Jd
				}),
				ei = Object(c.c)({
					filteredSubreddits: Zd
				}),
				ti = r("./src/reddit/actions/modMode.ts");
			var ri = (e = !0, t) => {
				switch (t.type) {
					case ti.a:
						return t.payload.enabled;
					default:
						return e
				}
			};
			const si = {};
			var ni = (e = si, t) => {
				switch (t.type) {
					case H.v: {
						const {
							moreCommentsId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case H.u: {
						const {
							moreCommentsItem: r
						} = t.payload;
						return {
							...e,
							[r.id]: null
						}
					}
					case H.t: {
						const {
							moreCommentsItem: r,
							...s
						} = t.payload;
						return {
							...e,
							[r.id]: s || {}
						}
					}
					default:
						return e
				}
			};
			const ai = {};
			var ci = (e = ai, t) => {
					switch (t.type) {
						case H.v: {
							const {
								moreCommentsId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case H.t:
						case H.u: {
							const {
								moreCommentsItem: r
							} = t.payload;
							return {
								...e,
								[r.id]: !1
							}
						}
						default:
							return e
					}
				},
				oi = Object(c.c)({
					error: ni,
					pending: ci
				}),
				di = r("./src/reddit/models/Comment/index.ts");
			const ii = {};
			var ui = (e = ii, t) => {
					switch (t.type) {
						case K.b:
							const {
								comment: r, parentCommentId: s, depth: n, originId: a, isChatSort: c
							} = t.payload;
							if (!c) {
								if (a) {
									const t = "moreComments-" + a,
										c = e[t],
										o = r.id.split("_")[1];
									if (c) {
										const r = c.numComments + 1;
										if (c.depth && n === c.depth) {
											const s = atob(c.token).concat(", ", o);
											return {
												...e,
												[t]: {
													...c,
													numComments: r,
													token: btoa(s)
												}
											}
										}
										return {
											...e,
											[t]: {
												...c,
												numComments: r
											}
										}
									}
									return {
										...e,
										[t]: {
											id: t,
											depth: n,
											parentId: s,
											token: btoa(o),
											numComments: 1,
											next: null,
											prev: Object(di.g)(s),
											postId: r.postId,
											isFromLiveWebSocket: !0
										}
									}
								}
								return e
							}
							return {
								...e, ...t.payload.moreComments
							};
						case H.u:
						case Y.b:
						case Y.f:
							return {
								...e, ...t.payload.moreComments
							};
						default:
							return e
					}
				},
				li = Object(c.c)({
					api: oi,
					models: ui
				});
			var pi = (e = null, t) => {
				switch (t.type) {
					case Re.b:
					case Re.c:
						return null;
					case Re.a:
						return t.payload;
					default:
						return e
				}
			};
			var bi = (e = !1, t) => {
				switch (t.type) {
					case Re.a:
					case Re.c:
						return !0;
					case Re.b:
						return !1;
					default:
						return e
				}
			};
			var fi = (e = null, t) => {
					switch (t.type) {
						case Le.b:
						case Re.a:
						case Re.c:
							return null;
						case Re.b: {
							const {
								name: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				yi = Object(c.c)({
					error: pi,
					fetched: bi,
					pending: fi
				});
			var Ei = (e = null, t) => {
				switch (t.type) {
					case Re.f:
					case Re.g:
						return null;
					case Re.e:
						return t.payload;
					default:
						return e
				}
			};
			var mi = (e = !1, t) => {
				switch (t.type) {
					case Re.e:
					case Re.g:
						return !0;
					case Re.f:
						return !1;
					default:
						return e
				}
			};
			var _i = (e = !1, t) => {
					switch (t.type) {
						case Re.e:
						case Re.g:
							return !1;
						case Re.f:
							return !0;
						default:
							return e
					}
				},
				Oi = Object(c.c)({
					error: Ei,
					fetched: mi,
					pending: _i
				});
			var hi = (e = null, t) => {
				switch (t.type) {
					case Re.i:
					case Re.j:
						return null;
					case Re.h:
						return t.payload;
					default:
						return e
				}
			};
			var Ii = (e = !1, t) => {
				switch (t.type) {
					case Re.h:
					case Re.j:
						return !0;
					case Re.i:
						return !1;
					default:
						return e
				}
			};
			var Si = (e = !1, t) => {
					switch (t.type) {
						case Re.h:
						case Re.j:
							return !1;
						case Re.i:
							return !0;
						default:
							return e
					}
				},
				gi = Object(c.c)({
					error: hi,
					fetched: Ii,
					pending: Si
				});
			var Di = (e = null, t) => {
				switch (t.type) {
					case Re.l:
					case Re.m:
						return null;
					case Re.k:
						return t.payload;
					default:
						return e
				}
			};
			var Ti = (e = !1, t) => {
				switch (t.type) {
					case Re.k:
					case Re.m:
						return !0;
					case Re.l:
						return !1;
					default:
						return e
				}
			};
			var vi = (e = !1, t) => {
					switch (t.type) {
						case Re.k:
						case Re.m:
							return !1;
						case Re.l:
							return !0;
						default:
							return e
					}
				},
				Ai = Object(c.c)({
					error: Di,
					fetched: Ti,
					pending: vi
				});
			var ji = (e = null, t) => {
				switch (t.type) {
					case Re.o:
					case Re.p:
						return null;
					case Re.n:
						return t.payload;
					default:
						return e
				}
			};
			var wi = (e = !1, t) => {
				switch (t.type) {
					case Re.n:
					case Re.p:
						return !0;
					case Re.o:
						return !1;
					default:
						return e
				}
			};
			var Ci = (e = !1, t) => {
					switch (t.type) {
						case Re.n:
						case Re.p:
							return !1;
						case Re.o:
							return !0;
						default:
							return e
					}
				},
				Ri = Object(c.c)({
					error: ji,
					fetched: wi,
					pending: Ci
				});
			var Pi = (e = !1, t) => {
				switch (t.type) {
					case Re.t:
						return !1;
					case Re.u:
						return !0;
					default:
						return e
				}
			};
			var Li = (e = !1, t) => {
					switch (t.type) {
						case Re.t:
							return !0;
						case Re.u:
							return !1;
						default:
							return e
					}
				},
				Ni = Object(c.c)({
					fetched: Pi,
					pending: Li
				});
			var ki = (e = null, t) => {
				switch (t.type) {
					case Re.A:
					case Re.B:
						return null;
					case Re.z:
						return t.payload;
					default:
						return e
				}
			};
			var Ui = (e = !1, t) => {
				switch (t.type) {
					case Re.A:
					case Re.z:
						return !1;
					case Re.B:
						return !0;
					default:
						return e
				}
			};
			var xi = (e = !0, t) => {
					switch (t.type) {
						case Re.A:
							return !0;
						case Re.B:
						case Re.z:
							return !1;
						default:
							return e
					}
				},
				Mi = Object(c.c)({
					error: ki,
					fetched: Ui,
					pending: xi
				});
			var Fi = (e = null, t) => {
				switch (t.type) {
					case Re.w:
					case Re.x:
						return null;
					case Re.v:
						return t.payload;
					default:
						return e
				}
			};
			var Gi = (e = !1, t) => {
				switch (t.type) {
					case Re.v:
					case Re.x:
						return !0;
					case Re.w:
						return !1;
					default:
						return e
				}
			};
			var Bi = (e = null, t) => {
					switch (t.type) {
						case Re.v:
						case Re.x:
							return null;
						case Re.w:
							const {
								id: r
							} = t.payload;
							return r;
						default:
							return e
					}
				},
				qi = Object(c.c)({
					error: Fi,
					fetched: Gi,
					pending: Bi
				}),
				Hi = Object(c.c)({
					addSubreddit: yi,
					create: Oi,
					deleteMulti: gi,
					duplicate: Ai,
					edit: Ri,
					forUser: Ni,
					recommendations: Mi,
					removeSubreddit: qi
				}),
				Ki = r("./node_modules/lodash/isEqual.js"),
				Vi = r.n(Ki),
				Wi = r("./node_modules/lodash/union.js"),
				Yi = r.n(Wi);

			function $i(e, t, r) {
				let s, n, a = e.length - 1,
					c = 0;
				for (; c <= a;) {
					const o = r(s = e[n = (c + a) / 2 | 0], t);
					if (o < 0) {
						if ((c = n + 1) > a) return c
					} else {
						if (!(o > 0)) return n;
						if ((a = n - 1) < c) return a + 1
					}
				}
				return (c + a) / 2 | 0
			}
			var Qi = r("./src/reddit/actions/profile/constants.ts");
			const Xi = {};
			var zi = (e = Xi, t) => {
					switch (t.type) {
						case Le.b:
						case Re.r:
						case Re.u:
						case Qi.h: {
							const {
								multireddits: r,
								multiredditsByUser: s,
								multiredditsModelsState: n
							} = t.payload, a = {
								...e
							}, c = {
								...r,
								...n
							};
							for (const t in s) {
								const r = s[t],
									n = e[t];
								a[t] = Yi()(n, r).sort((e, t) => c[e].displayText.toLowerCase() > c[t].displayText.toLowerCase() ? 1 : -1)
							}
							return Vi()(e, a) ? e : a
						}
						case Re.g:
						case Re.m: {
							const {
								userId: r,
								multireddit: s
							} = t.payload, n = e[r] ? e[r].slice() : [], a = $i(n, s.url, (e, t) => e > t ? 1 : -1);
							return n.splice(a, 0, s.url), {
								...e,
								[r]: n
							}
						}
						case Re.j: {
							const r = t.payload;
							for (const t in e) {
								const s = e[t];
								if (s.indexOf(r) > -1) return {
									...e,
									[t]: s.filter(e => e !== r)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				Ji = r("./src/reddit/actions/subscription/constants.ts"),
				Zi = r("./src/reddit/models/Multireddit/index.ts");
			const eu = {};
			var tu = (e = eu, t) => {
				switch (t.type) {
					case Le.b:
					case Re.r:
					case Re.u:
					case Qi.h: {
						let r = {};
						for (const s in t.payload.multireddits) {
							const n = {
									...t.payload.multireddits[s]
								},
								a = e[s];
							a && !Object(Zi.g)(n) && (n.subredditIds = a.subredditIds, n.profileIds = a.profileIds), s in e && Vi()(e[n.url], n) || (r = {
								...r,
								[s]: n
							})
						}
						return sa()(r) ? e : {
							...e,
							...r
						}
					}
					case Re.g:
					case Re.m: {
						const {
							multireddit: r
						} = t.payload;
						return {
							...e,
							[r.url]: r
						}
					}
					case Re.j: {
						const r = t.payload,
							s = {
								...e
							};
						return delete s[r], s
					}
					case Re.p: {
						const r = t.payload;
						return {
							...e,
							[r.url]: r
						}
					}
					case Re.x: {
						const {
							id: r,
							multipath: s,
							type: n
						} = t.payload, a = e[s], c = "subreddit" === n ? (a.subredditIds || []).filter(e => e !== r) : a.subredditIds, o = "profile" === n ? (a.profileIds || []).filter(e => e !== r) : a.profileIds;
						return {
							...e,
							[s]: {
								...a,
								profileIds: o,
								subredditIds: c
							}
						}
					}
					case Ji.d: {
						const {
							makeFavorite: r,
							multiredditPath: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								isFavorited: r
							}
						}
					}
					case Ji.e: {
						const {
							follow: r,
							multiredditPath: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								isFollowed: r,
								isFavorited: !1
							}
						}
					}
					case Re.c: {
						const {
							id: r,
							multipaths: s,
							type: n
						} = t.payload, a = s.reduce((t, s) => {
							const a = e[s],
								c = "subreddit" === n ? [...a.subredditIds || [], r] : a.subredditIds,
								o = "profile" === n ? [...a.profileIds || [], r] : a.profileIds;
							return {
								...t,
								[s]: {
									...a,
									subredditIds: c,
									profileIds: o
								}
							}
						}, {});
						return {
							...e,
							...a
						}
					}
					default:
						return e
				}
			};
			const ru = {};
			var su = (e = ru, t) => {
					switch (t.type) {
						case Re.B: {
							const {
								multipath: r,
								subreddits: s
							} = t.payload;
							return {
								...e,
								[r]: Object.keys(s)
							}
						}
						default:
							return e
					}
				},
				nu = Object(c.c)({
					api: Hi,
					byUserId: zi,
					models: tu,
					recommendations: su
				}),
				au = r("./src/reddit/actions/notificationBanner.ts");
			var cu = (e = null, t) => {
					switch (t.type) {
						case au.b:
							return t.payload.notificationBannerId;
						case au.a:
							return null;
						default:
							return e
					}
				},
				ou = r("./src/reddit/actions/notificationsInbox/constants.ts");
			var du = (e = !1, t) => {
				switch (t.type) {
					case ou.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case ou.d:
					case ou.b:
						return !1;
					default:
						return e
				}
			};
			var iu = (e = !1, t) => {
					switch (t.type) {
						case ou.d:
							return !0;
						case ou.a:
						case ou.b:
							return !1;
						default:
							return e
					}
				},
				uu = Object(c.c)({
					error: du,
					pending: iu
				});
			var lu = (e = null, t) => {
				switch (t.type) {
					case ou.f:
						return t.payload && t.payload.index || e;
					default:
						return e
				}
			};
			const pu = [];
			var bu = (e = pu, t) => {
				switch (t.type) {
					case ou.b: {
						const r = t.payload && t.payload.nodes;
						return [...e, ...r]
					}
					case ou.e: {
						const r = t.payload && t.payload.id;
						return e.filter(e => (e && e.id) !== r)
					}
					case ou.c: {
						const r = t.payload && t.payload.id,
							s = t.payload && t.payload.now,
							n = e.findIndex(e => e.id === r);
						return -1 === n ? e : [...e.slice(0, n), {
							...e[n],
							readAt: s
						}, ...e.slice(n + 1)]
					}
					default:
						return e
				}
			};
			var fu = (e = null, t) => {
					switch (t.type) {
						case ou.b:
							return t.payload && t.payload.pageInfo;
						default:
							return e
					}
				},
				yu = Object(c.c)({
					api: uu,
					earlierDividerIndex: lu,
					notifications: bu,
					pageInfo: fu
				}),
				Eu = r("./src/reddit/actions/nps.ts");
			const mu = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var _u = (e = mu, t) => {
				switch (t.type) {
					case Eu.c:
						return {
							...mu, pending: !0
						};
					case Eu.a:
						return mu;
					case Eu.b: {
						const {
							dest: e
						} = t.payload;
						return {
							...mu,
							success: !0,
							dest: e
						}
					}
					default:
						return e
				}
			};
			const Ou = e => {
				const {
					id: t,
					experimentName: r,
					name: s,
					version: n
				} = e;
				return {
					id: parseInt(t),
					name: r,
					variant: s || void 0,
					version: n
				}
			};
			const hu = e => {
					const t = {};
					for (const r of e) t[r.experimentName.toLowerCase()] = Ou(r);
					return t
				},
				Iu = {};
			var Su = (e = Iu, t) => {
				switch (t.type) {
					case qa.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, r = e ? e.experiments : [];
						return hu(r)
					}
					default:
						return e
				}
			};
			var gu = Object(c.c)({
					byName: Su,
					canonicalUrl: (e = null, t) => {
						switch (t.type) {
							case qa.a: {
								const {
									pageExperimentVariants: e
								} = t.payload;
								return e && e.canonicalUrl ? e.canonicalUrl : null
							}
							default:
								return e
						}
					}
				}),
				Du = Object(c.c)({
					experiments: gu
				}),
				Tu = r("./node_modules/history/esm/history.js");
			const vu = {
				allowNavigationCallback: null,
				currentPage: null,
				lastPage: null,
				referrers: {},
				sessionReferrer: null
			};
			var Au = (e = vu, t) => {
				switch (t.type) {
					case _.a: {
						const r = e.currentPage,
							s = t.payload,
							{
								routeMatch: n,
								location: a
							} = s,
							{
								key: c
							} = a;
						if (void 0 === c) return e;
						const o = Object(Tu.e)(a),
							d = n ? ((e, t, r, s) => {
								const {
									action: n,
									...a
								} = r.route;
								return {
									key: e,
									locationState: s.state,
									meta: r.route.meta,
									queryParams: r.match.queryParams,
									routeMatch: {
										...r,
										route: a
									},
									status: 200,
									url: t,
									urlParams: r.match.params
								}
							})(c, o, n, a) : ((e, t) => ({
								key: e,
								locationState: {},
								meta: null,
								queryParams: {},
								routeMatch: null,
								status: 404,
								url: t,
								urlParams: {}
							}))(c, o);
						let {
							referrers: i
						} = e;
						if ("PUSH" === s.action) {
							const e = r && r.url || "";
							i = {
								...i,
								[c]: e
							}
						} else if ("REPLACE" === s.action && r && i[r.key]) {
							const {
								[r.key]: e, ...t
							} = i;
							i = {
								...t,
								[c]: e
							}
						}
						return {
							...e,
							referrers: i,
							currentPage: d,
							lastPage: r
						}
					}
					case _.f: {
						if (!e.currentPage) return e;
						const r = t.payload,
							s = {
								...e.currentPage,
								status: r
							};
						return {
							...e,
							currentPage: s
						}
					}
					case Y.b:
					case Y.f:
						return !e.currentPage || t.payload.postMeta, e;
					case _.b:
						return e;
					case _.d: {
						const {
							allowNavigationCallback: r
						} = t.payload;
						return {
							...e,
							allowNavigationCallback: r
						}
					}
					case _.c:
						return {
							...e, allowNavigationCallback: null
						};
					default:
						return e
				}
			};
			const ju = {};
			var wu = (e = ju, t) => {
				switch (t.type) {
					case E.k: {
						const {
							pollId: r
						} = t.payload.pollResults, {
							[r]: s,
							...n
						} = e;
						return n
					}
					case E.j: {
						const {
							pollId: r
						} = t.payload, {
							[r]: s,
							...n
						} = e;
						return n
					}
					case E.i: {
						const {
							pollId: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Cu = {};
			var Ru = (e = Cu, t) => {
					switch (t.type) {
						case E.k: {
							const {
								pollId: r
							} = t.payload.pollResults;
							return {
								...e,
								[r]: !1
							}
						}
						case E.i: {
							const {
								pollId: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						case E.j: {
							const {
								pollId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						default:
							return e
					}
				},
				Pu = Object(c.c)({
					error: wu,
					pending: Ru
				}),
				Lu = Object(c.c)({
					voting: Pu
				}),
				Nu = r("./src/reddit/actions/economics/predictions/constants.ts");
			const ku = {};
			var Uu = (e = ku, t) => {
				switch (t.type) {
					case E.h: {
						const {
							poll: r
						} = t.payload;
						return {
							...e,
							[r.id]: r
						}
					}
					case we.b:
					case J.SUBREDDIT_LOADED:
					case ee.i:
					case we.f:
					case Y.b:
					case Y.f: {
						const {
							governance: r,
							posts: s
						} = t.payload;
						if (r) {
							const t = Object.keys(r).reduce((e, t) => {
								const s = r[t].poll;
								return e[s.id] = s, e
							}, {});
							return {
								...e,
								...t
							}
						}
						const n = {};
						return Object.keys(s).forEach(e => {
							s[e].pollData && (n[e] = (e => {
								if (!e.pollData) return null;
								const {
									id: t,
									authorId: r,
									belongsTo: s,
									created: n,
									pollData: {
										isPrediction: a,
										options: c,
										resolvedOptionId: o,
										totalStakeAmount: d,
										totalVoteCount: i,
										tournamentId: u,
										userSelection: l,
										userWonAmount: p,
										votingEndTimestamp: b
									}
								} = e;
								return {
									id: t,
									createdAt: n,
									creatorId: r,
									subredditId: s.id,
									endsAt: b,
									postId: t,
									options: c,
									totalVoters: i,
									type: wn.a.GA,
									isPrediction: a,
									totalStakeAmount: d,
									tournamentId: u,
									userSelection: l,
									userWonAmount: p,
									resolvedOptionId: o
								}
							})(s[e]))
						}), {
							...e,
							...n
						}
					}
					case Nu.f:
					case Nu.e:
						const {
							pollId: r, prediction: {
								options: s,
								selectedOptionId: n,
								totalVoteCount: a,
								...c
							}
						} = t.payload;
						return {
							...e, [r]: {
								...e[r],
								...c,
								userSelection: n,
								options: s.map(({
									id: t,
									redditorStakeAmount: s,
									totalStakeAmount: n,
									voteCount: a
								}) => ({
									...e[r].options.find(e => e.id === t),
									totalStakeAmount: n,
									userStakeAmount: s,
									voteCount: a
								})),
								totalVoters: a
							}
						};
					default:
						return e
				}
			};
			const xu = {};
			var Mu = (e = xu, t) => {
				switch (t.type) {
					case E.k: {
						const {
							[wn.b.ByVoters]: r, pollId: s
						} = t.payload.pollResults;
						return {
							...e,
							[s]: r
						}
					}
					case E.e: {
						const {
							pollId: r,
							optionId: s,
							options: n
						} = t.payload;
						let a = 0;
						const c = {};
						for (const e of n) a += e.voteCount, c[e.id] = {
							id: "number" == typeof e.id ? e.id : parseInt(e.id),
							userSelected: e.id === s,
							votes: e.voteCount.toString()
						};
						return {
							...e,
							[r]: {
								options: c,
								totalVotes: a.toString()
							}
						}
					}
					case we.b:
					case J.SUBREDDIT_LOADED:
					case ee.i:
					case we.f:
					case Y.b:
					case Y.f: {
						const {
							governance: r,
							posts: s
						} = t.payload;
						if (r) {
							const t = Object.keys(r).reduce((e, t) => {
								const s = r[t],
									{
										[wn.b.ByVoters]: n,
										pollId: a
									} = s.pollResults;
								return e[a] = n, e
							}, {});
							return {
								...e,
								...t
							}
						}
						const n = Object.keys(s).reduce((e, t) => {
							if (!s[t].pollData) return e;
							const r = (e => {
								const {
									options: t,
									totalVoteCount: r,
									userSelection: s
								} = e;
								return {
									options: t.reduce((e, {
										id: t,
										voteCount: r
									}) => ({
										...e,
										[t.toString()]: {
											id: t,
											votes: (r || 0).toString(),
											userSelected: t === s
										}
									}), {}),
									totalVotes: r.toString()
								}
							})(s[t].pollData);
							return r ? (e[t] = r, e) : e
						}, {});
						return Object.keys(n).length ? {
							...e,
							...n
						} : e
					}
					default:
						return e
				}
			};
			const Fu = {};
			var Gu = (e = Fu, t) => {
					switch (t.type) {
						case E.k: {
							const {
								[wn.b.ByVotingPower]: r, pollId: s
							} = t.payload.pollResults;
							return {
								...e,
								[s]: r
							}
						}
						case we.b:
						case J.SUBREDDIT_LOADED:
						case ee.i:
						case we.f:
						case Y.b:
						case Y.f: {
							const {
								governance: r
							} = t.payload;
							if (r) {
								const t = Object.keys(r).reduce((e, t) => {
									const s = r[t],
										{
											[wn.b.ByVotingPower]: n,
											pollId: a
										} = s.pollResults;
									return e[a] = n, e
								}, {});
								return {
									...e,
									...t
								}
							}
							return e
						}
						default:
							return e
					}
				},
				Bu = Object(c.c)({
					byVoters: Mu,
					byVotingPower: Gu
				});
			const qu = {};
			var Hu = (e = qu, t) => {
					switch (t.type) {
						case E.k: {
							const {
								pollId: r,
								rewardPoints: s
							} = t.payload.pollResults;
							return s ? {
								...e,
								[r]: s
							} : e
						}
						default:
							return e
					}
				},
				Ku = Object(c.c)({
					api: Lu,
					models: Uu,
					results: Bu,
					rewards: Hu
				});
			const Vu = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var Wu = (e = Vu, t) => {
				switch (t.type) {
					case Gr.i:
					case Gr.j:
						return {
							...e, reorderError: null
						};
					case Gr.h:
						return {
							...e, reorderError: t.payload
						};
					case Gr.l:
					case Gr.m:
						return {
							...e, updateDescriptionError: null
						};
					case Gr.k:
						return {
							...e, updateDescriptionError: t.payload
						};
					case Gr.p:
					case Gr.q:
						return {
							...e, updateLayoutError: null
						};
					case Gr.o:
						return {
							...e, updateLayoutError: t.payload
						};
					default:
						return e
				}
			};
			const Yu = {
				reorderPending: !1,
				updateDescriptionPending: !1,
				updateLayoutPending: !1
			};
			var $u = (e = Yu, t) => {
					switch (t.type) {
						case Gr.i:
							return {
								...e, reorderPending: !0
							};
						case Gr.h:
						case Gr.j:
							return {
								...e, reorderPending: !1
							};
						case Gr.l:
							return {
								...e, updateDescriptionPending: !0
							};
						case Gr.k:
						case Gr.m:
							return {
								...e, updateDescriptionPending: !1
							};
						case Gr.p:
							return {
								...e, updateLayoutPending: !0
							};
						case Gr.o:
						case Gr.q:
							return {
								...e, updateLayoutPending: !1
							};
						default:
							return e
					}
				},
				Qu = Object(c.c)({
					error: Wu,
					pending: $u
				}),
				Xu = r("./src/reddit/helpers/path/index.ts");
			const zu = {},
				Ju = e => {
					const {
						protocol: t,
						domain: r
					} = e;
					return e => {
						const s = Object(Xu.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${r}${s}`
						}
					}
				};
			var Zu = (e = zu, t) => {
				switch (t.type) {
					case Ne.PAGE_LOADED:
					case Pe.e:
					case Pe.h:
					case $.b:
					case $.e:
					case ke.e:
					case ke.b:
					case Q.PROFILE_POSTS_LOADED:
					case Q.MORE_POSTS_LOADED:
					case J.SUBREDDIT_LOADED:
					case we.b:
					case Le.b:
					case J.SUBREDDIT_LOADED:
					case Y.b:
					case Y.f:
					case fd.g:
					case Re.r:
					case we.f:
					case Z.e:
					case "RECOMMENDED_POSTS_LOADED":
					case ee.i:
					case Fe.c:
					case Ue.b:
					case z.SEARCH_RESULTS_RECEIVED:
					case Gr.f: {
						const {
							collections: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						let n = r;
						if (s) {
							const e = Ju(s);
							n = Ut()(r, e)
						}
						return {
							...e,
							...n
						}
					}
					case Gr.d: {
						const {
							collection: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						const n = r.id;
						let a = r;
						if (s) {
							a = Ju(s)(r)
						}
						return {
							...e,
							[n]: a
						}
					}
					case Gr.g: {
						const {
							collectionId: r,
							postId: s
						} = t.payload, n = e[r];
						return n ? {
							...e,
							[r]: {
								...n,
								postIds: n.postIds.filter(e => e !== s)
							}
						} : e
					}
					case Gr.a: {
						const {
							collectionId: r,
							postId: s
						} = t.payload, n = e[r];
						return n && s ? {
							...e,
							[r]: {
								...n,
								postIds: [...n.postIds, s]
							}
						} : e
					}
					case Gr.e: {
						const {
							collectionId: r
						} = t.payload, s = {
							...e
						};
						return delete s[r], s
					}
					case Gr.s: {
						const {
							collectionId: r,
							newTitle: s
						} = t.payload, n = e[r];
						return n ? {
							...e,
							[r]: {
								...n,
								title: s
							}
						} : e
					}
					case Gr.j: {
						const {
							collectionId: r,
							postIds: s
						} = t.payload, n = e[r];
						return n ? {
							...e,
							[r]: {
								...n,
								postIds: [...s]
							}
						} : e
					}
					case Gr.m: {
						const {
							collectionId: r,
							newDescription: s
						} = t.payload, n = e[r];
						return n ? {
							...e,
							[r]: {
								...n,
								description: s
							}
						} : e
					}
					case Gr.q: {
						const {
							collectionId: r,
							newLayout: s
						} = t.payload, n = e[r];
						return n ? {
							...e,
							[r]: {
								...n,
								displayLayout: s
							}
						} : e
					}
					default:
						return e
				}
			};
			const el = {};
			var tl = (e = el, t) => {
					switch (t.type) {
						case Ne.PAGE_LOADED:
						case Gr.f: {
							const {
								collections: r
							} = t.payload;
							if (!r) return e;
							const s = Object.keys(r);
							if (!s.length) return e;
							const {
								subredditId: n
							} = r[s[0]];
							return {
								...e,
								[n]: s
							}
						}
						case Gr.d: {
							const {
								collection: r
							} = t.payload, {
								subredditId: s
							} = r, n = e[s] || [];
							return {
								...e,
								[s]: [...n, r.id]
							}
						}
						case Gr.e: {
							const {
								collectionId: r,
								collection: s
							} = t.payload;
							if (!s) return e;
							const n = s && e[s.subredditId];
							return n ? {
								...e,
								[s.subredditId]: n.filter(e => e !== r)
							} : e
						}
						default:
							return e
					}
				},
				rl = Object(c.c)({
					models: Zu,
					subredditToIds: tl,
					api: Qu
				}),
				sl = r("./src/reddit/actions/postFlair.ts"),
				nl = r("./src/reddit/models/Flair/index.ts");
			const al = {},
				cl = {
					displaySettings: {
						isEnabled: !1,
						position: nl.b.Left
					},
					permissions: {
						canAssignOwn: !1
					},
					templateIds: [],
					templates: {}
				},
				ol = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					return 0 === r.length ? e : r.reduce((e, r) => (e[r] = {
						...cl,
						...e[r],
						...t[r]
					}, e), {
						...e
					})
				};
			var dl = (e = al, t) => {
					switch (t.type) {
						case Ne.PAGE_LOADED:
						case we.f:
						case Pe.e:
						case Pe.h:
						case Re.r:
						case zo.b:
						case Y.b:
						case Y.f:
						case we.b:
						case Le.b:
						case z.SEARCH_RESULTS_RECEIVED:
						case J.SUBREDDIT_LOADED:
						case $.b:
						case $.e:
						case X.c:
						case X.i:
						case X.e:
						case X.g:
						case Z.e:
						case Ue.b:
						case Ue.b:
						case ke.b:
						case ke.e:
						case Q.MORE_POSTS_LOADED:
						case Q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Fe.c:
						case Fe.c:
						case ee.i:
							return ol(e, t.payload.postFlair);
						case sl.c: {
							const {
								subredditId: r,
								isEnabled: s
							} = t.payload, n = {
								...e[r].displaySettings,
								isEnabled: s
							};
							return {
								...e,
								[r]: {
									...e[r],
									displaySettings: n
								}
							}
						}
						case sl.a: {
							const {
								subredditId: r,
								canAssignOwn: s
							} = t.payload, n = {
								...e[r].permissions,
								canAssignOwn: s
							};
							return {
								...e,
								[r]: {
									...e[r],
									permissions: n
								}
							}
						}
						case sl.f: {
							const {
								subredditId: r,
								template: s
							} = t.payload, n = e[r], {
								templates: a,
								templateIds: c
							} = n, o = {
								...a,
								[s.id]: s
							}, d = [...c];
							return d.includes(s.id) || d.push(s.id), {
								...e,
								[r]: {
									...n,
									templates: o,
									templateIds: d
								}
							}
						}
						case sl.b: {
							const {
								subredditId: r,
								templateId: s
							} = t.payload, n = e[r], {
								templates: a,
								templateIds: c
							} = n, o = ks()(a, s), d = c.filter(e => e !== s);
							return {
								...e,
								[r]: {
									...n,
									templates: o,
									templateIds: d
								}
							}
						}
						case sl.e:
						case sl.d: {
							const r = t.payload,
								s = e[r.subredditId];
							return {
								...e,
								[r.subredditId]: {
									...s,
									templateIds: r.templateIds
								}
							}
						}
						case W.i:
						case W.f:
						case W.m:
						case W.p:
						case W.v: {
							const {
								response: r
							} = t.payload;
							return ol(e, r.postFlair)
						}
						default:
							return e
					}
				},
				il = r("./src/reddit/actions/inFeedChaining.ts");
			var ul = (e = !1, t) => {
				switch (t.type) {
					case il.a:
						return t.payload.isDismissed;
					default:
						return e
				}
			};
			const ll = {};
			var pl = (e = ll, t) => {
				switch (t.type) {
					case il.c: {
						const {
							isDismissed: r,
							listingKey: s,
							postId: n
						} = t.payload;
						if (r) return {
							...e,
							[n]: s
						};
						const a = {
							...e
						};
						return delete a[n], a
					}
					default:
						return e
				}
			};
			const bl = {};
			var fl = (e = bl, t) => {
					switch (t.type) {
						case il.b:
							return {
								...e, [t.payload.postId]: t.payload.listingKey
							};
						default:
							return e
					}
				},
				yl = Object(c.c)({
					dismissed: ul,
					dismissedIdToListingKey: pl,
					idToListingKey: fl
				});
			var El = (e = null, t) => {
					switch (t.type) {
						case fd.a:
							return t.payload;
						default:
							return e
					}
				},
				ml = r("./src/reddit/actions/embedAndImage.ts");
			const _l = {};
			var Ol = (e = _l, t) => {
					switch (t.type) {
						case ml.b: {
							const {
								postId: r
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: !1
							} : e
						}
						case ml.a: {
							const {
								postId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
					}
					return e
				},
				hl = Object(c.c)({
					loadable: Ol
				});
			const Il = {};
			var Sl = (e = Il, t) => {
				switch (t.type) {
					case fd.b: {
						const {
							postId: r
						} = t.payload;
						return {
							...e,
							[r]: !e[r]
						}
					}
					default:
						return e
				}
			};
			var gl = (e = null, t) => {
				switch (t.type) {
					case fd.c: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Dl = {};
			var Tl = (e = Dl, t) => {
					switch (t.type) {
						case Pe.e:
						case Pe.h:
						case we.b:
						case J.SUBREDDIT_LOADED:
						case we.f:
						case Z.e:
						case "RECOMMENDED_POSTS_LOADED":
						case ee.i:
						case Fe.c:
						case z.SEARCH_RESULTS_RECEIVED:
							return q()({
								...e
							}, t.payload.postInstances, (e, t) => {
								if (e) return e.concat(t)
							});
						default:
							return e
					}
				},
				vl = r("./src/reddit/actions/isTrackingCrossposts.ts");
			const Al = {};
			var jl = (e = Al, t) => {
				switch (t.type) {
					case vl.a: {
						const r = t.payload;
						return {
							...e,
							...r
						}
					}
					default:
						return e
				}
			};
			const wl = {};
			var Cl = (e = wl, t) => {
					switch (t.type) {
						case E.h: {
							const {
								poll: r
							} = t.payload;
							return {
								...e,
								[r.postId]: r.id
							}
						}
						case we.b:
						case J.SUBREDDIT_LOADED:
						case ee.i:
						case we.f:
						case Y.b:
						case Y.f: {
							const {
								governance: r,
								posts: s
							} = t.payload;
							if (r) {
								const t = Object.keys(r).reduce((e, t) => {
									const s = r[t];
									return e[t] = s.poll.id, e
								}, {});
								return {
									...e,
									...t
								}
							}
							const n = Object.keys(s).reduce((e, t) => s[t].pollData ? (e[t] = t, e) : e, {});
							return {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				Rl = r("./src/reddit/actions/bulkActions/constants.ts"),
				Pl = r("./src/reddit/actions/constants.ts"),
				Ll = r("./src/reddit/actions/flairManagement/constants.ts"),
				Nl = r("./src/reddit/actions/googleQASchema/constants.ts"),
				kl = r("./src/reddit/actions/imageOCRAltText/constants.ts"),
				Ul = r("./src/reddit/actions/subredditTopContent.ts"),
				xl = r("./src/reddit/helpers/isPost.ts"),
				Ml = r("./node_modules/lodash/pickBy.js"),
				Fl = r.n(Ml);

			function Gl(e, t) {
				const r = Fl()(t, (t, r = "") => !e[r] || !Vi()(e[r], t));
				return Object.keys(r).length > 0 ? {
					...e,
					...r
				} : e
			}
			var Bl = r("./src/reddit/models/Gold/Gild/index.tsx"),
				ql = r("./src/reddit/models/Media/index.ts"),
				Hl = r("./src/reddit/models/ModQueue/index.ts"),
				Kl = r("./src/reddit/models/Post/index.ts"),
				Vl = r("./src/reddit/models/Vote/index.ts"),
				Wl = r("./src/reddit/actions/subredditDuplicates.ts");
			const Yl = {},
				$l = e => {
					const {
						protocol: t,
						domain: r
					} = e;
					return e => {
						const s = Object(Xu.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${r}${s}`
						}
					}
				},
				Ql = e => t => {
					const r = e[t.id];
					return r && r.events && (t.events = r.events, t.source = r.source), t
				},
				Xl = e => t => {
					const r = e[t.id];
					return r && r.isSponsored && (t.isSponsored = r.isSponsored), t
				},
				zl = e => e.media && Object(ql.E)(e.media) ? {
					...Object(G.unsetIn)(e, ["source"])
				} : e,
				Jl = e => t => {
					const r = e[t.id];
					return t && t.media && r && r.media && Object(ql.H)(t.media) && t.media.isRichtextPreview && Object(ql.H)(r.media) && !r.media.isRichtextPreview && (t.media.richtextContent = r.media.richtextContent, t.media.isRichtextPreview = !1), t
				},
				Zl = e => t => {
					const r = e[t.id];
					return r && r.numDuplicates && (t.numDuplicates = r.numDuplicates), t
				},
				ep = e => {
					let t = e.source;
					return t && t.outboundUrlCreated && (t = {
						...t,
						outboundUrlReceived: Date.now()
					}, e.source = t), e
				},
				tp = e => {
					const {
						allAwardings: t,
						...r
					} = e, s = {};
					return t && t.forEach(e => {
						s[e.id] = e.count
					}), {
						...r,
						awardCountsById: s
					}
				},
				rp = e => t => {
					for (let r = 0; r < e.length; r++) t = e[r](t);
					return t
				},
				sp = (e, t) => ({
					...e,
					events: t.events,
					source: t.source
				});
			var np = (e = Yl, t) => {
				switch (t.type) {
					case _.a:
						if (Fs(t) === (Me.Db.COMMENTS || Me.Db.DUPLICATES)) {
							const r = Gs(t),
								s = (e => {
									if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
								})(t);
							if (r && r.instanceId && s && s.partialPostId) {
								const t = r.instanceId,
									n = Object(Kl.r)(s.partialPostId);
								if (e[n] && e[t]) return {
									...e,
									[n]: sp(e[n], e[t])
								}
							}
						}
						return e;
					case Y.b:
					case Y.f: {
						const r = $l(t.payload.meta);
						return {
							...e,
							...Ut()(t.payload.posts, rp([r, ep, tp, zl, Ql(e), Xl(e), Zl(e)]))
						}
					}
					case fd.g:
						return Gl(e, t.payload);
					case Wl.a:
						return Gl(e, t.payload.posts);
					case Ne.PAGE_LOADED:
					case td.b:
					case Pe.e:
					case Pe.h:
					case $.b:
					case $.e:
					case ke.e:
					case ke.b:
					case Q.PROFILE_POSTS_LOADED:
					case Q.MORE_POSTS_LOADED:
					case J.SUBREDDIT_LOADED:
					case we.b:
					case Le.b:
					case J.SUBREDDIT_LOADED:
					case zo.b:
					case Re.r:
					case we.f:
					case Z.e:
					case "RECOMMENDED_POSTS_LOADED":
					case rd.k:
					case ee.i:
					case Ue.b:
					case Jo.TOPIC_DATA_LOADED:
					case Jo.MORE_POSTS_LOADED:
					case Xo.c:
					case Xo.d: {
						const r = $l(t.payload.meta);
						return {
							...e,
							...Ut()(t.payload.posts, rp([r, ep, tp, zl, Jl(e), Zl(e)]))
						}
					}
					case rd.s: {
						if (!t.payload || !t.payload.length) return e;
						const r = {};
						for (const s of t.payload) {
							const t = s,
								n = $l(t.meta);
							Object.assign(r, Ut()(t.posts, rp([n, ep, tp, zl, Jl(e), Zl(e)])))
						}
						return {
							...e,
							...r
						}
					}
					case zo.b: {
						const r = $l(t.payload.meta),
							s = e[t.payload.postId];
						return {
							...e,
							...Ut()(t.payload.posts, rp([r, ep, tp, zl, Jl(e), Zl(e)])),
							[t.payload.postId]: {
								...s,
								numDuplicates: t.payload.count
							}
						}
					}
					case je.e:
					case Fe.c:
					case z.SEARCH_RESULTS_RECEIVED: {
						const r = $l(t.payload.meta),
							s = Ut()(t.payload.posts, rp([r, tp, ep, zl]));
						return q()({
							...e
						}, s, (e, t) => ({
							...t,
							...e
						}))
					}
					case fd.h: {
						const r = t.payload;
						return q()({
							...e
						}, r, (e, t) => ({
							...e,
							...t
						}))
					}
					case Pl.a: {
						const {
							id: r,
							vote: s
						} = t.payload, n = e[r];
						return n ? {
							...e,
							[r]: Object(Vl.c)(n, s)
						} : e
					}
					case K.b:
					case H.G: {
						const r = t.payload.comment.postId,
							s = e[r];
						if (s) {
							const n = void 0 !== t.payload.numComments ? t.payload.numComments : s.numComments + 1;
							return {
								...e,
								[r]: {
									...s,
									numComments: n
								}
							}
						}
						return e
					}
					case H.y: {
						const r = t.payload.postId,
							s = e[r];
						return s ? {
							...e,
							[r]: {
								...s,
								numComments: s.numComments - 1
							}
						} : e
					}
					case oe.mb: {
						const {
							topAwardedPosts: r
						} = t.payload;
						return {
							...e,
							...r.reduce((e, t) => (e[t.post.id] = rp([tp])(Object(Qs.e)(t.post)), e), {})
						}
					}
					case oe.t: {
						const {
							id: r,
							awardings: s,
							gilder: n,
							treatmentTags: a
						} = t.payload, c = e[r];
						return c ? {
							...e,
							[r]: {
								...Object(Bl.a)(c, s, n),
								treatmentTags: a
							}
						} : e
					}
					case oe.E: {
						const {
							awardId: r,
							thingId: s
						} = t.payload, n = e[s];
						return n ? {
							...e,
							[s]: Object(Bl.b)(n, r)
						} : e
					}
					case Kd.n: {
						const {
							posts: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case W.i:
					case W.f:
					case W.m:
					case W.p:
					case W.v: {
						const {
							response: r
						} = t.payload, {
							posts: s
						} = r;
						return {
							...e,
							...Ut()(s, rp([tp, zl]))
						}
					}
					case Rl.b:
					case W.s: {
						const {
							operation: r,
							ids: s,
							username: n,
							options: a
						} = t.payload, c = s.filter(e => Object(xl.a)(e)), o = Object(Hl.d)(e, r, c, n, a);
						return q()({
							...e
						}, o, (e, t) => ({
							...e,
							...t
						}))
					}
					case Gr.t: {
						const {
							postId: r,
							collectionId: s
						} = t.payload, n = e[r];
						if (n && s) {
							const t = n.collectionIds || [];
							return t.push(s), {
								...e,
								[r]: {
									...n,
									collectionIds: [...t]
								}
							}
						}
						return e
					}
					case Gr.e: {
						const {
							collectionId: r,
							collection: s
						} = t.payload, n = s && s.postIds || [], a = {};
						return n.forEach(t => {
							const s = e[t],
								n = s && s.collectionIds;
							if (n) {
								const e = n.filter(e => e !== r);
								a[t] = {
									...s,
									collectionIds: e
								}
							}
						}), {
							...e,
							...a
						}
					}
					case Gr.g: {
						const {
							collectionId: r,
							postId: s
						} = t.payload;
						if (!r || !s) return e;
						const n = e[s],
							a = n && n.collectionIds;
						if (!a) return e;
						const c = a.filter(e => e !== r);
						return {
							...e,
							[s]: {
								...n,
								collectionIds: c
							}
						}
					}
					case Xo.f: {
						const {
							postId: r
						} = t.payload;
						if (!r) return e;
						const s = e[r];
						if (!s || !s.eventInfo) return e;
						const n = s.eventInfo;
						return {
							...e,
							[r]: {
								...s,
								eventInfo: {
									...n,
									eventIsLive: !0
								}
							}
						}
					}
					case Xo.a: {
						const {
							postId: r,
							eventInfo: s
						} = t.payload;
						if (!r || !s) return e;
						const n = e[r];
						return n ? {
							...e,
							[r]: {
								...n,
								eventInfo: {
									...s
								}
							}
						} : e
					}
					case wc.g: {
						const r = t.payload.subredditTopContent;
						return r && r.posts && Object.keys(r.posts) ? {
							...Ut()(r.posts, rp([tp, zl])),
							...e
						} : e
					}
					case X.c:
					case X.i:
					case X.e:
					case X.g:
					case Ul.b:
						return {
							...Ut()(t.payload.posts, rp([tp, zl])), ...e
						};
					case fd.j: {
						const {
							postId: r,
							richtextContent: s
						} = t.payload, n = e[r];
						return n && n.media && Object(ql.H)(n.media) ? {
							...e,
							[r]: {
								...n,
								media: {
									...n.media,
									richtextContent: s,
									isRichtextPreview: !1
								}
							}
						} : e
					}
					case Ll.a: {
						const r = t.payload;
						return {
							...e,
							[r.id]: r
						}
					}
					case Ll.b: {
						const r = t.payload;
						return Object(Vt.a)(e, r)
					}
					case Pd.a: {
						const {
							isDeleted: r,
							height: s,
							postId: n
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								media: {
									...e[n].media,
									height: s,
									isDeleted: r
								}
							}
						}
					}
					case D.o: {
						const r = t.payload.reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							...r
						}
					}
					case kl.b: {
						const {
							altText: r,
							postId: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								media: {
									...e[s].media,
									altText: r
								}
							}
						}
					}
					case kl.a:
						return {
							...e
						};
					case Nl.b: {
						const {
							postId: r,
							isEligibleForQASchema: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								isEligibleForQASchema: s
							}
						}
					}
					case Nl.a:
						return {
							...e
						};
					default:
						return e
				}
			};
			var ap = (e = null, t) => {
					switch (t.type) {
						case fd.f:
							return t.payload;
						default:
							return e
					}
				},
				cp = r("./src/reddit/actions/postLevelCrowdControl.ts");
			const op = {};
			var dp = (e = op, t) => {
				switch (t.type) {
					case cp.a: {
						const r = t.payload;
						return {
							...e,
							...r
						}
					}
					default:
						return e
				}
			};
			const ip = [];
			var up = (e = ip, t) => {
					switch (t.type) {
						case fd.i: {
							const {
								postIds: e
							} = t.payload;
							return e
						}
						case we.b:
						case J.SUBREDDIT_LOADED: {
							const {
								recentPostIds: r
							} = t.payload;
							return r && r.length ? r : e
						}
						default:
							return e
					}
				},
				lp = r("./node_modules/uuid/v4.js"),
				pp = r.n(lp);
			const bp = pp()();
			var fp = (e = bp, t) => {
				switch (t.type) {
					case Ne.PAGE_LOADED:
					case hs.h:
					case hs.a:
					case hs.m:
					case hs.f:
						return pp()();
					default:
						return e
				}
			};
			var yp = (e = null, t) => {
				switch (t.type) {
					case hs.d:
					case hs.o:
					case hs.k:
					case hs.g:
					case hs.a:
					case hs.m:
					case hs.f:
						return null;
					case hs.j: {
						const {
							message: e
						} = t.payload;
						return e
					}
					case hs.e:
						return "error";
					default:
						return e
				}
			};
			var Ep = (e = !0, t) => {
				switch (t.type) {
					case hs.g:
						return !0;
					case hs.m:
					case hs.a:
					case hs.f:
					case hs.e:
						return !1;
					default:
						return e
				}
			};
			var mp = (e = !1, t) => {
					switch (t.type) {
						case hs.k:
							return !0;
						case hs.j:
						case hs.e:
						case hs.o:
						case hs.d:
							return !1;
						default:
							return e
					}
				},
				_p = Object(c.c)({
					creationToken: fp,
					error: yp,
					pending: Ep,
					pendingUpdate: mp
				});
			const Op = {};
			var hp = (e = Op, t) => {
				switch (t.type) {
					case hs.c: {
						const {
							subredditId: e,
							id: r
						} = t.payload;
						return {
							subredditId: e,
							scheduledPostId: r
						}
					}
					default:
						return e
				}
			};
			const Ip = {
				standalonePosts: {
					POSTS_LOADED: hs.m,
					postIdsKey: "standalonePostsIds",
					MUTATION_SUCCEEDED: hs.o
				},
				recurringPosts: {
					POSTS_LOADED: hs.a,
					postIdsKey: "recurringPostsIds",
					MUTATION_SUCCEEDED: hs.d
				}
			};

			function Sp(e) {
				const t = {};
				return (r = t, s) => {
					switch (s.type) {
						case Ip[e].POSTS_LOADED:
						case hs.f: {
							const {
								subredditInfoById: t
							} = s.payload, {
								id: n
							} = t, a = t.scheduledPosts[e].models.reduce((e, t) => (e[t.id] = t, e), {});
							return {
								...r,
								[n]: {
									...r[n] || {},
									...a
								}
							}
						}
						case hs.i:
						case hs.l: {
							const {
								subredditId: e,
								scheduledPostId: t
							} = s.payload, n = r[e] || {};
							return {
								...r,
								[e]: {
									...Object.keys(n).filter(e => e !== t).reduce((e, t) => (e[t] = n[t], e), {})
								}
							}
						}
						case hs.h: {
							const {
								subredditId: e
							} = s.payload;
							return Object.keys(r).reduce((t, s) => (s !== e && (t[s] = r[s]), t), {})
						}
						case Ip[e].MUTATION_SUCCEEDED: {
							let t;
							switch (e) {
								case "recurringPosts":
									t = s.payload.scheduledPost;
									break;
								case "standalonePosts":
								default:
									t = s.payload.scheduledPost
							}
							const n = t.subreddit.id,
								a = r[n][t.id],
								c = {
									[t.id]: {
										...a,
										...t
									}
								};
							return {
								...r,
								[n]: {
									...r[n] || {},
									...c
								}
							}
						}
						default:
							return r
					}
				}
			}
			const gp = {};

			function Dp(e) {
				return (t = gp, r) => {
					switch (r.type) {
						case Ip[e].POSTS_LOADED:
						case hs.f: {
							const {
								subredditInfoById: s
							} = r.payload, n = s.id, {
								pageInfo: a
							} = s.scheduledPosts[e];
							return {
								...t,
								[n]: {
									...a
								}
							}
						}
						case hs.h: {
							const {
								subredditId: e
							} = r.payload;
							return Object.keys(t).reduce((r, s) => (s !== e && (r[s] = t[s]), r), {})
						}
						default:
							return t
					}
				}
			}
			var Tp = r("./node_modules/lodash/uniq.js"),
				vp = r.n(Tp);
			const Ap = {};

			function jp(e) {
				return (t = Ap, r) => {
					switch (r.type) {
						case Ip[e].POSTS_LOADED:
						case hs.f: {
							const {
								subredditInfoById: s
							} = r.payload, n = s.id, a = s.scheduledPosts[Ip[e].postIdsKey];
							return {
								...t,
								[n]: vp()([...t[n] || [], ...a])
							}
						}
						case hs.i:
						case hs.l: {
							const {
								subredditId: e,
								scheduledPostId: s
							} = r.payload, n = t[e] || [];
							return {
								...t,
								[e]: n.filter(e => e !== s)
							}
						}
						case hs.h: {
							const {
								subredditId: e
							} = r.payload;
							return {
								...t,
								[e]: []
							}
						}
						default:
							return t
					}
				}
			}
			var wp = Object(c.c)({
					models: Sp("recurringPosts"),
					pageInfo: Dp("recurringPosts"),
					postOrder: jp("recurringPosts"),
					editModal: hp
				}),
				Cp = Object(c.c)({
					models: Sp("standalonePosts"),
					pageInfo: Dp("standalonePosts"),
					postOrder: jp("standalonePosts")
				}),
				Rp = Object(c.c)({
					api: _p,
					standalonePosts: Cp,
					recurringPosts: wp
				});
			var Pp = (e = null, t) => {
				switch (t.type) {
					case oe.lb:
						return t.payload;
					case oe.nb:
					case oe.mb:
						return null;
					default:
						return e
				}
			};
			var Lp = (e = !1, t) => {
					switch (t.type) {
						case oe.mb:
						case oe.lb:
							return !1;
						case oe.nb:
							return !0;
						default:
							return e
					}
				},
				Np = Object(c.c)({
					error: Pp,
					pending: Lp
				});
			const kp = [];
			var Up = (e = kp, t) => {
					switch (t.type) {
						case oe.mb: {
							const {
								topAwardedPosts: e
							} = t.payload;
							return e.filter(e => !(e.post.isNsfw || e.post.isArchived || e.post.isHidden || e.post.removedBy || e.post.removedByCategory && "NONE" !== e.post.removedByCategory)).map(e => ({
								postId: e.post.id,
								rank: e.rank,
								score: e.score
							}))
						}
						case oe.lb:
						case oe.nb:
							return kp;
						default:
							return e
					}
				},
				xp = Object(c.c)({
					api: Np,
					list: Up
				}),
				Mp = r("./src/reddit/actions/video.ts");
			const Fp = {};
			var Gp = (e = Fp, t) => {
				switch (t.type) {
					case Mp.e: {
						const {
							auto: r,
							postId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			const Bp = {};
			var qp = (e = Bp, t) => {
				switch (t.type) {
					case Mp.a: {
						const {
							postId: r,
							isBuffering: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Hp = {};
			var Kp = (e = Hp, t) => {
				switch (t.type) {
					case Mp.b: {
						const {
							postId: r
						} = t.payload;
						return {
							...e,
							[r]: !0
						}
					}
					default:
						return e
				}
			};
			const Vp = {};
			var Wp = (e = Vp, t) => {
				switch (t.type) {
					case Mp.c: {
						const {
							postId: r,
							time: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Yp = {
				mutedInFeed: !0
			};
			var $p = (e = Yp, t) => {
				switch (t.type) {
					case Mp.l:
						return {
							...e, mutedInFeed: t.payload
						};
					default:
						return e
				}
			};
			var Qp = (e = null, t) => {
				switch (t.type) {
					case Mp.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case Mp.d:
						return null;
					default:
						return e
				}
			};
			const Xp = {};
			var zp = (e = Xp, t) => {
				switch (t.type) {
					case Mp.o: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case Mp.e: {
						const {
							postId: r
						} = t.payload;
						return {
							...e,
							[r]: !0
						}
					}
				}
				return e
			};
			const Jp = {};
			var Zp = (e = Jp, t) => {
				switch (t.type) {
					case Mp.h: {
						const {
							postId: r,
							time: s
						} = t.payload, n = e[r] || {
							cached: !0,
							start: s
						};
						return s < n.start ? e : {
							...e,
							[r]: {
								...n,
								playable: s
							}
						}
					}
					case Mp.f: {
						const {
							postId: r,
							time: s
						} = t.payload;
						return {
							...e,
							[r]: {
								cached: !1,
								start: s
							}
						}
					}
					default:
						return e
				}
			};
			const eb = {};
			var tb = (e = eb, t) => {
				switch (t.type) {
					case Mp.j: {
						const {
							postId: r,
							metadata: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const rb = {};
			var sb = (e = rb, t) => {
				switch (t.type) {
					case Mp.p: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case Mp.g: {
						const {
							postId: r
						} = t.payload;
						return {
							...e,
							[r]: !0
						}
					}
				}
				return e
			};
			const nb = {};
			var ab = (e = nb, t) => {
				switch (t.type) {
					case Mp.i: {
						const {
							postId: r,
							isPlaying: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const cb = {};
			var ob = (e = cb, t) => {
					switch (t.type) {
						case Mp.m: {
							const {
								postId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						default:
							return e
					}
				},
				db = r("./src/reddit/constants/video.ts");
			const ib = {};
			var ub = (e = ib, t) => {
					switch (t.type) {
						case Mp.n: {
							const {
								postId: r,
								time: s
							} = t.payload;
							return e[r] && Math.abs(Math.floor(s.currentTime) - Math.floor(e[r].currentTime)) < db.k ? e : {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				lb = Object(c.c)({
					autoPlayed: Gp,
					buffering: qp,
					consumed: Kp,
					continuousViewStartedAt: Wp,
					feed: $p,
					fullscreen: Qp,
					loadable: zp,
					loadTimes: Zp,
					metadata: tb,
					paused: sb,
					playing: ab,
					started: ob,
					time: ub
				}),
				pb = Object(c.c)({
					chained: yl,
					embedAndImage: hl,
					expanded: Sl,
					focus: gl,
					instances: Tl,
					isTrackingCrossposts: jl,
					metaMap: Cl,
					models: np,
					modToMemberShare: ap,
					crowdControl: El,
					postLevelCrowdControl: dp,
					recent: up,
					scheduledPosts: Rp,
					topAwarded: xp,
					video: lb
				}),
				bb = r("./src/lib/reducers/addAuthentication/index.ts");
			const fb = {};
			var yb = Object(bb.a)((e = fb, t) => {
					switch (t.type) {
						case Y.b:
						case Y.f: {
							const {
								postId: r,
								commentLists: s,
								comments: n
							} = t.payload, a = s[r] && s[r].head;
							return a && n[a.id] && n[a.id].isStickied ? {
								...e,
								[r]: a.id
							} : e
						}
						case H.C: {
							const {
								id: e,
								postId: r
							} = t.payload;
							return {
								[r]: e
							}
						}
						default:
							return e
					}
				}, fb),
				Eb = Object(c.c)({
					data: yb
				});
			const mb = {};
			var _b = (e = mb, t) => {
				switch (t.type) {
					case O.f:
					case O.g: {
						const {
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: void 0
						}
					}
					case O.e: {
						const {
							subredditId: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Ob = {};
			var hb = (e = Ob, t) => {
					switch (t.type) {
						case O.f: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case O.g:
						case O.e: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				Ib = Object(c.c)({
					error: _b,
					pending: hb
				});
			const Sb = {};
			var gb = (e = Sb, t) => {
				switch (t.type) {
					case O.d: {
						const {
							product: r
						} = t.payload;
						return {
							...e,
							[r.id]: void 0
						}
					}
					case O.c:
					case m.f:
					case m.g:
					case m.i:
					case m.j: {
						const {
							productId: r
						} = t.payload;
						return {
							...e,
							[r]: void 0
						}
					}
					case O.a:
					case m.d:
					case m.h: {
						const {
							productId: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Db = {};
			var Tb = (e = Db, t) => {
					switch (t.type) {
						case O.c:
						case m.f: {
							const {
								productId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case O.d: {
							const {
								product: r
							} = t.payload;
							return {
								...e,
								[r.id]: !1
							}
						}
						case O.a:
						case m.d:
						case m.g: {
							const {
								productId: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				vb = Object(c.c)({
					error: gb,
					pending: Tb
				}),
				Ab = Object(c.c)({
					fetch: Ib,
					purchase: vb
				});
			var jb = (e = null, t) => {
				switch (t.type) {
					case O.b:
						return t.payload.productId;
					case s.b:
						return null;
					default:
						return e
				}
			};
			const wb = {};
			var Cb = (e = wb, t) => {
					switch (t.type) {
						case y.i:
						case O.g: {
							const {
								products: r
							} = t.payload;
							return {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				Rb = Object(c.c)({
					api: Ab,
					currentlyPurchasing: jb,
					models: Cb
				});
			const Pb = {};
			var Lb = (e = Pb, t) => {
				switch (t.type) {
					case $.f:
					case $.e:
					case $.c:
					case $.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case $.d:
					case $.a: {
						const {
							key: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Nb = {};
			var kb = (e = Nb, t) => {
					switch (t.type) {
						case $.f:
						case $.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case $.e:
						case $.d:
						case $.b:
						case $.a: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				Ub = Object(c.c)({
					error: Lb,
					pending: kb
				});
			const xb = {};
			var Mb = (e = xb, t) => {
					switch (t.type) {
						case $.e: {
							const {
								key: r,
								commentIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case $.b: {
							const {
								key: r,
								commentIds: s
							} = t.payload, n = e[r] || [];
							return {
								...e,
								[r]: n.concat(s)
							}
						}
						default:
							return e
					}
				},
				Fb = r("./src/reddit/actions/comment/list.ts");
			const Gb = {};
			var Bb = (e = Gb, t) => {
				switch (t.type) {
					case Fb.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Fb.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? ks()(e, r) : e
					}
					default:
						return e
				}
			};
			const qb = {};
			var Hb = (e = qb, t) => {
				switch (t.type) {
					case $.e: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: {}
						}
					}
					case $.b: {
						const {
							key: r,
							fetchedToken: s
						} = t.payload, n = e[r];
						return {
							...e,
							[r]: {
								...n,
								[s]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const Kb = {};
			var Vb = (e = Kb, t) => {
					switch (t.type) {
						case $.e:
						case $.b: {
							const {
								key: r,
								dist: s,
								token: n
							} = t.payload;
							return n ? {
								...e,
								[r]: {
									dist: s,
									token: n
								}
							} : Object(Vt.a)(e, r)
						}
						default:
							return e
					}
				},
				Wb = Object(c.c)({
					api: Ub,
					endMarkers: Bb,
					fetchedTokens: Hb,
					commentIds: Mb,
					loadMore: Vb
				}),
				Yb = r("./src/reddit/actions/pages/profileModSettings.ts");
			var $b = (e = !0, t) => {
					switch (t.type) {
						case Yb.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				Qb = Object(c.c)({
					pending: $b
				}),
				Xb = Object(c.c)({
					api: Qb
				});
			const zb = {};
			var Jb = (e = zb, t) => (t.type, e);
			const Zb = {};
			var ef = (e = Zb, t) => {
				switch (t.type) {
					case X.a:
					case X.d: {
						const {
							listingKey: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case X.b:
					case X.c:
					case X.i:
					case X.f:
					case X.e:
					case X.g: {
						const {
							listingKey: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					default:
						return e
				}
			};
			const tf = {};
			var rf = (e = tf, t) => {
					switch (t.type) {
						case X.b:
						case X.f: {
							const {
								listingKey: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case X.a:
						case X.d:
						case X.c:
						case X.i:
						case X.e:
						case X.g: {
							const {
								listingKey: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				sf = Object(c.c)({
					error: ef,
					pending: rf
				});
			const nf = {};
			var af = (e = nf, t) => {
				switch (t.type) {
					case X.c:
					case X.i:
					case X.e:
					case X.g: {
						const {
							listingKey: r,
							itemIds: s
						} = t.payload;
						return {
							...e,
							[r]: [...e[r] || [], ...s]
						}
					}
					default:
						return e
				}
			};
			const cf = {};
			var of = (e = cf, t) => {
				switch (t.type) {
					case X.i:
					case X.c:
					case X.e:
					case X.g: {
						const {
							pageInfo: r,
							listingKey: s
						} = t.payload;
						return r ? {
							...e,
							[s]: r
						} : cf
					}
					default:
						return e
				}
			}, df = Object(c.c)({
				api: sf,
				ids: af,
				pageInfo: of
			}), uf = r("./src/reddit/constants/posts.ts");
			const lf = {};
			var pf = (e = lf, t) => {
				switch (t.type) {
					case z.SEARCH_RESULTS_RECEIVED:
					case Fe.c:
						return {
							...e, ...t.payload.profileAboutInfo
						};
					case Qi.k: {
						const r = t.payload;
						return r.profile ? {
							...e,
							[r.profile.id]: r.about
						} : e
					}
					case Ji.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, n = r.filter(e => e.type === uf.a.PROFILE);
						return n.length ? n.reduce((e, t) => (e[t.id] = {
							...e[t.id],
							userIsSubscriber: s
						}, e), {
							...e
						}) : e
					}
					case _d.n: {
						const r = t.payload,
							s = e[r.subredditId];
						if (!s) return e;
						if (s.publicDescription === r.settings.publicDescription) return e;
						const n = {
							...s,
							publicDescription: r.settings.publicDescription
						};
						return {
							...e,
							[r.subredditId]: n
						}
					}
					default:
						return e
				}
			};
			const bf = {};
			var ff = (e = bf, t) => {
				switch (t.type) {
					case we.f:
					case Y.b:
					case Y.f:
					case we.b:
					case $.b:
					case $.e:
					case X.c:
					case X.i:
					case X.e:
					case X.g:
					case ke.b:
					case ke.e:
					case Q.PROFILE_POSTS_LOADED:
					case Ue.b:
					case we.f:
					case Pe.e:
					case Pe.h:
					case Re.u:
					case Qi.h:
					case zo.b:
					case Fe.c:
					case ee.i:
					case Qi.m:
					case Z.b:
					case Z.e:
					case z.SEARCH_RESULTS_RECEIVED:
					case Ne.PAGE_LOADED:
					case Vr.e:
					case Us.PAGE_LOADED:
					case J.SUBREDDIT_LOADED:
					case Le.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Ji.c:
						return Object(G.merge)(e, t.payload.profiles);
					case Fe.e: {
						const {
							typeaheadSuggestions: r
						} = t.payload;
						return Object.keys(r).length ? Object(G.merge)(e, r) : e
					}
					case W.i:
					case W.f:
					case W.m:
					case W.p:
					case W.v:
					case W.k: {
						const {
							response: r
						} = t.payload, s = r && r.profiles;
						return Object(G.merge)(e, s)
					}
					case Qi.l:
					case Qi.k: {
						const {
							profile: r
						} = t.payload;
						return r ? Object(G.merge)(e, {
							[r.id]: r
						}) : e
					}
					case _d.n: {
						const r = t.payload,
							{
								title: s,
								over18: n
							} = r.settings,
							a = e[r.subredditId];
						return !a || a.title === s && a.isNSFW === n ? e : {
							...e,
							[r.subredditId]: {
								...a,
								id: r.subredditId,
								title: s,
								isNSFW: n
							}
						}
					}
					case _d.l:
					case _d.k: {
						const {
							imageUrl: r,
							key: s,
							subredditId: n
						} = t.payload;
						if ("profileIcon" !== s) return e;
						const a = e[n];
						return a ? {
							...e,
							[n]: {
								...a,
								icon: {
									height: null,
									url: r,
									width: null
								}
							}
						} : e
					}
					default:
						return e
				}
			};
			const yf = {};
			var Ef = (e = yf, t) => {
					switch (t.type) {
						case Qi.c:
						case Qi.f: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[(r || "").toLowerCase()]: !0
							}
						}
						case Qi.a:
						case Qi.b:
						case Qi.d:
						case Qi.e: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[(r || "").toLowerCase()]: !1
							}
						}
						default:
							return e
					}
				},
				mf = Object(c.c)({
					pending: Ef
				});
			const _f = {};
			var Of = (e = _f, t) => {
				switch (t.type) {
					case Qi.b: {
						const {
							profileName: r,
							data: s
						} = t.payload, n = s.map(e => e.id);
						return {
							...e,
							[(r || "").toLowerCase()]: n
						}
					}
					case Qi.e:
					case X.c:
					case X.i:
					case X.e:
					case X.g: {
						const {
							profileName: r,
							moderatedSubredditIds: s
						} = t.payload;
						return s ? {
							...e,
							[r]: [...e[r] || [], ...s]
						} : e
					}
					default:
						return e
				}
			};
			const hf = {};
			var If = (e = hf, t) => {
					switch (t.type) {
						case Qi.e: {
							const {
								pageInfo: r,
								profileName: s
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						case X.c:
						case X.i: {
							const {
								moderatedPageInfo: r,
								profileName: s
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						default:
							return e
					}
				},
				Sf = Object(c.c)({
					api: mf,
					models: Of,
					pageInfo: If
				});
			const gf = {};
			var Df = (e = gf, t) => {
					switch (t.type) {
						case Qi.i: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case Qi.g:
						case Qi.h: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !1
							}
						}
						default:
							return e
					}
				},
				Tf = Object(c.c)({
					pending: Df
				});
			const vf = {};
			var Af = (e = vf, t) => {
					switch (t.type) {
						case Qi.h: {
							const {
								pageInfo: r,
								profileName: s
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						default:
							return e
					}
				},
				jf = Object(c.c)({
					api: Tf,
					pageInfo: Af
				}),
				wf = r("./src/reddit/actions/pinnedPost.ts");
			const Cf = {};
			var Rf = Object(bb.a)((e = Cf, t) => {
				switch (t.type) {
					case wf.a: {
						const {
							pinned: r,
							profileId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case wf.d: {
						const {
							postId: r,
							profileId: s
						} = t.payload, n = e[s] || [];
						return {
							...e,
							[s]: [...n, r].slice(-Me.V)
						}
					}
					case wf.g: {
						const {
							postId: r,
							profileId: s
						} = t.payload, n = e[s] || [];
						return {
							...e,
							[s]: n.filter(e => e !== r)
						}
					}
					default:
						return e
				}
			}, Cf);
			const Pf = {};
			var Lf = Object(bb.a)((e = Pf, t) => {
				switch (t.type) {
					case wf.a: {
						const {
							pinned: r,
							profileId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			}, Pf);
			const Nf = {};
			var kf = Object(bb.a)((e = Nf, t) => {
					switch (t.type) {
						case wf.c:
						case wf.f: {
							const {
								postId: r,
								profileId: s
							} = t.payload, n = e[s] || [];
							return {
								...e,
								[s]: [...n, r]
							}
						}
						case wf.b:
						case wf.e:
						case wf.d:
						case wf.g: {
							const {
								postId: r,
								profileId: s
							} = t.payload, n = e[s] || [];
							return {
								...e,
								[s]: n.filter(e => e !== r)
							}
						}
						default:
							return e
					}
				}, Nf),
				Uf = Object(c.c)({
					data: Rf,
					initialData: Lf,
					pending: kf
				}),
				xf = r("./src/reddit/actions/trophyCase.ts");
			const Mf = {};
			var Ff, Gf, Bf = (e = Mf, t) => {
					switch (t.type) {
						case xf.a: {
							const {
								profileId: r,
								trophyIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				qf = Object(c.c)({
					about: pf,
					models: ff,
					moderated: Sf,
					multireddits: jf,
					pinnedPosts: Uf,
					trophyCases: Bf
				});
			r("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(Ff || (Ff = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(Gf || (Gf = {}));
			var Hf, Kf, Vf;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(Hf || (Hf = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Kf || (Kf = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Vf || (Vf = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(Hf || (Hf = {}));
			Object(xe.a)("PROMO__SHOW_PROMO"), Object(xe.a)("PROMO__HIDE_PROMO");
			const Wf = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var Yf = (e = Wf, t) => {
					switch (t.type) {
						case "PROMO__SHOW_PROMO": {
							const {
								promoType: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case "PROMO__HIDE_PROMO": {
							const {
								promoType: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				$f = r("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const Qf = {
				isError: !1,
				isPending: !1,
				global: {
					rpan_config_refresh_rate: $f.d,
					viewer_streams_refresh: $f.c,
					viewer_streams_refresh_slop: $f.e
				},
				subreddits: {},
				isPermanentlyCanceled: !1
			};
			var Xf = (e = Qf, t) => {
				switch (t.type) {
					case $f.w:
						return {
							...e, isError: !1, isPending: !1, global: {
								...t.payload
							}
						};
					case $f.x: {
						const r = t.payload.name.toLowerCase();
						return {
							...e,
							isError: !1,
							isPending: !1,
							subreddits: {
								...e.subreddits,
								[r]: {
									...t.payload.config
								}
							}
						}
					}
					case $f.G:
						return {
							...e, isPending: !0
						};
					case $f.I:
						return {
							...e, isError: !0, isPending: !1
						};
					case $f.H:
						return {
							...e, isPermanentlyCanceled: !0, isPending: !1
						};
					default:
						return e
				}
			};
			var zf = (e = {}, t) => {
				switch (t.type) {
					case $f.L:
						return {
							...e, [$f.b]: t.payload.error
						};
					case $f.M:
						return {
							...e, [t.payload.streamId]: t.payload.error
						};
					case $f.z: {
						const {
							[$f.b]: t, ...r
						} = e;
						return r
					}
					case $f.y: {
						const {
							[t.payload.model.post.id]: r, ...s
						} = e;
						return s
					}
					default:
						return e
				}
			};
			const Jf = (e, t, r, s) => ({
				...e,
				[t]: {
					...e[t],
					isPending: r,
					...s && {
						utcTimeStamp: s
					}
				}
			});
			var Zf = (e = {}, t) => {
				switch (t.type) {
					case $f.N:
						return Jf(e, t.payload, !0);
					case $f.O:
						return Jf(e, $f.b, !0);
					case $f.y:
						return Jf(e, t.payload.model.post.id, !1, t.payload.utcTimeStamp);
					case $f.z:
						return Jf(e, $f.b, !1, t.payload.utcTimeStamp);
					case $f.M:
						return Jf(e, t.payload.streamId, !1);
					case $f.L:
						return Jf(e, $f.b, !1);
					default:
						return e
				}
			};
			const ey = {
				isError: !1,
				isPending: !1,
				subreddits: []
			};
			var ty = (e = ey, t) => {
					switch (t.type) {
						case $f.v:
							return {
								...e, isError: !1, isPending: !1, subreddits: t.payload.subreddits
							};
						case $f.J:
							return {
								...e, isError: !1, isPending: !0
							};
						case $f.K:
							return {
								...e, isError: !0, isPending: !1
							};
						default:
							return e
					}
				},
				ry = Object(c.c)({
					config: Xf,
					error: zf,
					pending: Zf,
					recommendedViewerSubreddits: ty
				});
			const sy = {};
			var ny = (e = sy, t) => {
				switch (t.type) {
					case $f.r:
						return {
							...e, [t.payload.streamId]: {
								level: t.payload.level,
								error: !1
							}
						};
					case $f.F:
						return {
							...e, [t.payload]: {
								level: 0,
								error: !0
							}
						};
					default:
						return e
				}
			};
			const ay = {
				cursor: $f.W,
				timestamps: {},
				visitOrder: []
			};
			var cy = (e = ay, t) => {
				switch (t.type) {
					case $f.P:
						return ay;
					case $f.X: {
						const r = t.payload,
							s = e.visitOrder.includes(r) ? e.visitOrder : [...e.visitOrder, r],
							n = s.indexOf(r);
						return s === e.visitOrder && n === e.cursor ? e : {
							...e,
							visitOrder: s,
							cursor: n
						}
					}
					case h.d:
						return oy(e, t.payload.id);
					case $f.E:
						return oy(e, t.payload);
					case fd.h: {
						const r = Object.keys(t.payload).filter(e => t.payload[e].hidden);
						return dy(e, r)
					}
					case $f.V: {
						const {
							streamId: r,
							timestamp: s
						} = t.payload;
						return {
							...e,
							timestamps: {
								...e.timestamps,
								[r]: s
							}
						}
					}
					default:
						return e
				}
			};
			const oy = (e, t) => {
					const r = e.visitOrder.indexOf(t);
					if (-1 === r) return e;
					const s = r > e.cursor ? e.cursor : Math.max(e.cursor - 1, 0);
					return {
						...e,
						visitOrder: e.visitOrder.filter(e => e !== t),
						cursor: s
					}
				},
				dy = (e, t) => {
					const r = e.visitOrder[e.cursor],
						s = new Set(t),
						n = e.visitOrder.filter(e => !s.has(e)),
						a = n.indexOf(r),
						c = a > -1 ? a : Math.max(e.cursor - 1, 0);
					return n.length !== e.visitOrder.length ? {
						...e,
						cursor: c,
						visitOrder: n
					} : e
				},
				iy = {
					ended: [],
					removed: []
				};

			function uy(e) {
				return [...new Set(e)]
			}
			var ly = (e = iy, t) => {
				switch (t.type) {
					case $f.t:
						return {
							...e, ended: uy(e.ended.concat(t.payload))
						};
					case $f.u:
						return {
							...e, removed: uy(e.removed.concat(t.payload))
						};
					default:
						return e
				}
			};
			const py = {};
			var by = (e = py, t) => {
				switch (t.type) {
					case $f.z:
						const {
							listingName: r, models: s
						} = t.payload;
						if (!r) return e;
						const n = s.map(e => e.post.id),
							a = e[r] || [],
							c = [...new Set([...n, ...a])];
						return {
							...e, [r]: c
						};
					default:
						return e
				}
			};
			const fy = {},
				yy = (e, t) => {
					const r = Object.keys(e).reduce((t, r) => ({
						...t,
						[r]: {
							...e[r],
							rank: $f.m
						}
					}), {});
					return t.reduce((e, t, r) => ({
						...e,
						[t.post.id]: {
							...t,
							rank: $f.l - r
						}
					}), r)
				},
				Ey = (e, t) => {
					const r = t.post.id,
						s = e[r] ? e[r].rank : $f.m;
					return {
						...e,
						[t.post.id]: {
							...t,
							rank: s
						}
					}
				};
			var my = (e = fy, t) => {
				switch (t.type) {
					case $f.y:
						return Ey(e, t.payload.model);
					case $f.z:
						return yy(e, t.payload.models);
					case $f.D: {
						const r = t.payload.streamId,
							s = t.payload.isUnsetting ? -1 : 1,
							n = (t.payload.isUp ? 1 : 0) * s,
							a = (t.payload.isUp ? 0 : 1) * s;
						return {
							...e,
							[r]: {
								...e[r],
								downvotes: e[r].downvotes + a,
								upvotes: e[r].upvotes + n
							}
						}
					}
					default:
						return e
				}
			};
			const _y = {
				discoveryUnitThumbnails: {},
				streamPreviews: {}
			};
			var Oy = (e = _y, t) => {
				switch (t.type) {
					case $f.s:
						return {
							...e, discoveryUnitThumbnails: {
								...t.payload.reduce((e, t) => ({
									...e,
									[t.postId]: t.imageUrl
								}), {})
							}
						};
					case $f.A:
						return {
							...e, streamPreviews: {
								...e.streamPreviews,
								...t.payload.reduce((e, t) => ({
									...e,
									[t.postId]: t.imageUrl
								}), {})
							}
						};
					default:
						return e
				}
			};
			const hy = {
				reported: []
			};
			var Iy = (e = hy, t) => {
				switch (t.type) {
					case h.d:
						return {
							...e, reported: [...e.reported, t.payload.id]
						};
					default:
						return e
				}
			};
			const Sy = {
				isIntroFinished: !1
			};
			var gy = (e = Sy, t) => {
				switch (t.type) {
					case $f.B:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const Dy = {
				reportedStreams: []
			};
			var Ty = (e = Dy, t) => {
					switch (t.type) {
						case $f.C:
							return {
								...e, ...t.payload
							};
						case h.d: {
							const r = t.payload.id;
							return e.reportedStreams.includes(r) ? e : {
								...e,
								reportedStreams: [...e.reportedStreams, r]
							}
						}
						default:
							return e
					}
				},
				vy = Object(c.c)({
					api: ry,
					history: cy,
					hlsStreams: ly,
					listings: by,
					models: my,
					preloads: Oy,
					reports: Iy,
					theaterSettings: gy,
					userSettings: Ty,
					automuteLevels: ny
				});
			const Ay = {};
			var jy = (e = Ay, t) => {
					switch (t.type) {
						case "RECOMMENDED_POSTS_LOADED":
							return {
								...e, ...t.payload
							};
						case "RECOMMENDED_POSTS_FAILED":
						default:
							return e
					}
				},
				wy = r("./src/reddit/actions/pages/report/constants.ts");
			var Cy = (e = null, t) => {
				switch (t.type) {
					case wy.a:
						return t.payload;
					default:
						return e
				}
			};
			var Ry = (e = null, t) => {
				switch (t.type) {
					case wy.b:
						return t.payload;
					case wy.c:
					case wy.d:
						return !1;
					default:
						return e
				}
			};
			var Py = (e = !1, t) => {
				switch (t.type) {
					case wy.d:
						return !0;
					case wy.c:
					case wy.b:
						return !1;
					default:
						return e
				}
			};
			var Ly = (e = !1, t) => {
					switch (t.type) {
						case wy.c:
							return !0;
						case wy.b:
						case wy.d:
							return !1;
						default:
							return e
					}
				},
				Ny = Object(c.c)({
					error: Ry,
					pending: Py,
					success: Ly
				}),
				ky = r("./src/reddit/actions/reportPageRules/constants.ts");
			const Uy = [];
			var xy = (e = Uy, t) => {
					switch (t.type) {
						case ky.a:
							return t.payload;
						default:
							return e
					}
				},
				My = Object(c.c)({
					reportPageApi: Ny,
					reportPageRules: xy,
					initialReason: Cy
				}),
				Fy = r("./src/reddit/actions/reportRules.ts");
			const Gy = {
				liveStreamingRules: [],
				sitewideRules: []
			};
			var By = (e = Gy, t) => {
				switch (t.type) {
					case Fy.b:
						return {
							...e, sitewideRules: t.payload
						};
					case Fy.a:
						return {
							...e, liveStreamingRules: t.payload
						};
					default:
						return e
				}
			};
			Object(xe.a)("REQUEST_HOST_SET");
			var qy = (e = "", t) => {
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			Object(xe.a)("RUN_TIME_ENV_VARS__IS_STAGING");
			const Hy = {
				staging: !1,
				startTimeInMillis: (new Date).getTime()
			};
			var Ky = (e = Hy, t) => {
				switch (t.type) {
					case "RUN_TIME_ENV_VARS__IS_STAGING":
						return {
							...e, staging: !0
						};
					default:
						return e
				}
			};
			const Vy = Object.create(null);
			var Wy = (e = Vy, t) => {
				switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
					case Fe.d: {
						const {
							relatedQueries: r,
							query: s
						} = t.payload;
						if (r) {
							const t = s ? s.toLowerCase() : "";
							return Object.assign(Object.create(null), e, {
								[t]: r
							})
						}
						return e
					}
					default:
						return e
				}
			};
			var Yy = (e = null, t) => {
				switch (t.type) {
					case z.SEARCH_RESULTS_RECEIVED:
					case Fe.f: {
						const {
							searchQuery: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			const $y = Object.create(null);
			var Qy = (e = $y, t) => {
					switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
						case Fe.e: {
							const {
								order: r,
								searchQuery: s
							} = t.payload;
							return Object.assign(Object.create(null), e, {
								...e,
								[s.toLowerCase()]: r
							})
						}
						default:
							return e
					}
				},
				Xy = r("./src/reddit/models/Search/index.ts");
			const zy = {};
			var Jy = (e = zy, t) => {
					switch (t.type) {
						case Fe.e: {
							const {
								typeaheadSuggestions: r
							} = t.payload, s = {};
							return Object.keys(r).forEach(e => {
								const t = r[e];
								return s[e] = Object(Xy.d)(t)
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				Zy = Object(c.c)({
					idsByQuery: Qy,
					models: Jy
				});
			const eE = {};
			var tE = (e = eE, t) => {
					switch (t.type) {
						case z.SEARCH_RESULTS_RECEIVED: {
							const {
								viewTreatment: r,
								key: s
							} = t.payload;
							return r ? {
								...e,
								[s]: r
							} : e
						}
						default:
							return e
					}
				},
				rE = Object(c.c)({
					relatedQueries: Wy,
					searchQuery: Yy,
					typeahead: Zy,
					viewTreatment: tE
				}),
				sE = r("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const nE = {};
			var aE = (e = nE, t) => {
				switch (t.type) {
					case z.SEARCH_RESULTS_RECEIVED: {
						const {
							categoryName: r,
							key: s,
							listingOrder: n,
							postOrder: a,
							posts: c,
							searchQuery: o,
							subreddits: d,
							viewTreatment: i
						} = t.payload, u = {
							subredditIcons: [],
							displayText: null,
							subredditOccurrences: 0,
							searchQuery: o
						};
						if (i === sE.c.Trending || r) {
							const e = [];
							if (n && n.map(t => {
									!e.includes(t.id) && d[t.id] && (e.push(t.id), u.subredditIcons.push({
										url: d[t.id].icon.url,
										subredditName: d[t.id].name
									}), u.displayText || (u.displayText = d[t.id].displayText))
								}), a)
								for (let t = 0; t < a.length; t++) {
									const r = c[a[t]],
										s = r && r.belongsTo ? r.belongsTo.id : void 0;
									s && !e.includes(s) && d[s] && (e.push(s), u.subredditIcons.push({
										url: d[s].icon.url,
										subredditName: d[s].name
									}))
								}
							d && (u.subredditOccurrences = Object.keys(d).length - 1)
						}
						return {
							...e,
							[s]: u
						}
					}
					default:
						return e
				}
			};
			const cE = {};
			var oE = (e = cE, t) => {
				switch (t.type) {
					case z.SEARCH_RESULTS_RECEIVED: {
						const {
							key: r,
							searchDiscoveryUnits: s
						} = t.payload;
						return s && Object.keys(s).length ? {
							...e,
							[r]: s
						} : e
					}
					default:
						return e
				}
			};
			const dE = {};
			var iE = (e = dE, t) => {
					switch (t.type) {
						case z.SEARCH_RESULTS_RECEIVED: {
							const {
								key: r,
								searchDiscoveryUnitOrder: s
							} = t.payload;
							return s ? {
								...e,
								[r]: s
							} : dE
						}
						default:
							return e
					}
				},
				uE = Object(c.c)({
					headerContent: aE,
					models: oE,
					order: iE
				});
			Object(xe.a)("SEO__CRAWLER_RECEIVED");
			var lE = (e = null, t) => {
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				pE = r("./src/reddit/actions/seo/linksModule.ts");
			const bE = {};
			var fE = (e = bE, t) => {
					switch (t.type) {
						case pE.b:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? {
								...e,
								frontpage: t.payload
							} : e;
						case pE.c:
							return t.payload && t.payload.id && t.payload.data ? {
								...e,
								subreddits: {
									...e.subreddits,
									[t.payload.id]: t.payload.data
								}
							} : e;
						default:
							return e
					}
				},
				yE = r("./src/reddit/actions/seo/topicLinks.ts");
			const EE = {};
			var mE = (e = EE, t) => {
					switch (t.type) {
						case yE.a:
							return t.payload && t.payload.id && t.payload.data ? {
								...e,
								subreddits: {
									...e.subreddits,
									[t.payload.id]: t.payload.data
								}
							} : e;
						default:
							return e
					}
				},
				_E = Object(c.c)({
					crawler: lE,
					linksModule: fE,
					topicLinks: mE
				}),
				OE = r("./src/reddit/actions/shortcuts/constants.ts");
			var hE = (e = null, t) => {
				switch (t.type) {
					case OE.a:
						return t.payload;
					case _.a:
						return null;
					default:
						return e
				}
			};
			var IE = (e = null, t) => {
					switch (t.type) {
						case OE.b:
							return t.payload || null;
						default:
							return e
					}
				},
				SE = r("./src/reddit/constants/history.ts"),
				gE = r("./src/reddit/constants/shortcuts.ts"),
				DE = r("./src/reddit/helpers/history/index.ts");
			const TE = gE.d.Global,
				vE = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(DE.b)(SE.a.IsOverlay) ? gE.d.Lightbox : gE.d.CommentPage;
						case "rpan":
						case "subredditCreation":
							return Object(DE.b)(SE.a.IsOverlay) ? gE.d.Lightbox : TE;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return gE.d.Listing;
						case "modQueuePages":
							return gE.d.Modqueue;
						default:
							return TE
					}
				};
			var AE = (e = TE, t) => {
					switch (t.type) {
						case _.a:
							const r = t.payload;
							if (r.routeMatch) {
								const e = r.routeMatch.route.meta;
								return vE(e)
							}
							return TE;
						default:
							return e
					}
				},
				jE = Object(c.c)({
					activeCommentId: hE,
					activePostId: IE,
					namespace: AE
				});
			var wE = (e = !1, t) => {
					if (e) return e;
					switch (t.type) {
						case D.q:
						case D.r:
							return !0;
						default:
							return e
					}
				},
				CE = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				RE = Object(c.c)({
					firstFetch: wE,
					models: CE.b
				}),
				PE = r("./src/reddit/actions/streaming/modSettings.ts");
			var LE = (e = null, t) => {
				switch (t.type) {
					case PE.b:
					case PE.c:
						return null;
					case PE.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var NE = (e = !1, t) => {
					switch (t.type) {
						case PE.b:
							return !0;
						case PE.c:
						case PE.a:
							return !1;
						default:
							return e
					}
				},
				kE = Object(c.c)({
					error: LE,
					pending: NE
				}),
				UE = r("./src/reddit/actions/streaming/constants.ts");
			const xE = {};
			var ME = (e = xE, t) => {
					switch (t.type) {
						case UE.a: {
							const {
								subredditId: r,
								modSettings: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				FE = Object(c.c)({
					api: kE,
					modSettings: ME
				}),
				GE = r("./src/reddit/models/StructuredStyles/index.ts");
			const BE = {};
			var qE = (e = BE, t) => {
					switch (t.type) {
						case I.h:
						case I.b:
						case I.d:
							return t.payload.styles;
						case I.e:
							return BE;
						case I.c: {
							const r = t.payload;
							return {
								...e,
								...r
							}
						}
						case I.k: {
							const e = t.payload;
							return Object(GE.h)(e.styles)
						}
						default:
							return e
					}
				},
				HE = r("./src/reddit/actions/exportImportStyles.ts");
			var KE = (e = null, t) => {
				switch (t.type) {
					case HE.c:
					case HE.b:
						return null;
					case HE.a:
						return t.payload;
					default:
						return e
				}
			};
			var VE = (e = !1, t) => {
					switch (t.type) {
						case HE.c:
							return !0;
						case HE.b:
						case HE.a:
							return !1;
						default:
							return e
					}
				},
				WE = Object(c.c)({
					error: KE,
					pending: VE
				}),
				YE = r("./src/reddit/actions/postFlairStyleTemplate.ts"),
				$E = r("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const QE = {};
			var XE = (e = QE, t) => {
					switch (t.type) {
						case J.SUBREDDIT_LOADED:
						case Y.b:
						case Y.f:
						case z.SEARCH_RESULTS_RECEIVED:
						case Fe.c:
						case Ne.PAGE_LOADED:
						case Us.PAGE_LOADED: {
							const {
								payload: r
							} = t;
							if (!r.structuredStyles || !r.structuredStyles.data) return e;
							const s = r.structuredStyles.data.flairTemplate;
							return {
								...e,
								...s
							}
						}
						case YE.b: {
							const {
								flairId: r,
								template: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case YE.a: {
							const {
								flairId: r
							} = t.payload;
							return Object(Vt.a)(e, r)
						}
						case sl.b: {
							const {
								templateId: r
							} = t.payload;
							return Object(Vt.a)(e, r)
						}
						case I.k:
							return QE;
						case $E.b: {
							const {
								templates: r
							} = t.payload;
							return {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				zE = Object(c.c)({
					models: XE
				});
			const JE = {};
			var ZE = (e = JE, t) => {
				switch (t.type) {
					case I.f: {
						const r = t.payload;
						return {
							...e,
							[r.imageKey]: r.uploadId
						}
					}
					case I.k:
					case I.e:
						return JE;
					default:
						return e
				}
			};
			var em = (e = !1, t) => {
				switch (t.type) {
					case I.n:
					case I.e:
						return !1;
					case I.a:
						return !0;
					default:
						return e
				}
			};
			var tm = (e = null, t) => {
				switch (t.type) {
					case I.d:
						return t.payload.subredditId;
					case I.e:
						return null;
					case _.a:
						return t.payload.location.search.indexOf("styling=true") > -1 ? e : null;
					case _d.f:
						return null;
					default:
						return e
				}
			};
			const rm = {};
			var sm = (e = rm, t) => {
					switch (t.type) {
						case J.SUBREDDIT_LOADED:
						case Y.b:
						case Y.f:
						case Ne.PAGE_LOADED:
						case Us.PAGE_LOADED: {
							const {
								payload: r
							} = t;
							if (!r.structuredStyles || !r.structuredStyles.data) return e;
							const s = Object.keys(r.subredditAboutInfo || {});
							if (1 !== s.length) return e;
							const n = s[0],
								a = r.structuredStyles.data.style;
							return {
								...e,
								[n]: a
							}
						}
						case Fe.c:
						case z.SEARCH_RESULTS_RECEIVED: {
							const {
								payload: r
							} = t;
							if (!r.structuredStyles || !r.structuredStyles.data) return e;
							if (!r.subredditName) return e;
							let s;
							if (oa()(r.subreddits, (e, t) => {
									if (e.name.toLowerCase() === r.subredditName.toLowerCase()) return s = t, !1
								}), !s) return e;
							const n = r.structuredStyles.data.style;
							return {
								...e,
								[s]: n
							}
						}
						case I.m: {
							const r = t.payload,
								s = e[r.subredditId];
							return {
								...e,
								[r.subredditId]: {
									...s,
									...r.styles
								}
							}
						}
						case I.h: {
							const r = t.payload;
							return {
								...e,
								[r.subredditId]: r.styles
							}
						}
						case I.k: {
							const r = t.payload,
								s = Object(GE.h)(r.styles);
							return {
								...e,
								[r.subredditId]: s
							}
						}
						case Qi.k: {
							const r = t.payload,
								{
									banner: s,
									profile: n
								} = r;
							if (!s || !n) return e;
							const a = e[n.id];
							return {
								...e,
								[n.id]: {
									...a,
									bannerBackgroundImage: s.url
								}
							}
						}
						case _d.l: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Gl(e, {
									[r.subredditId]: {
										bannerBackgroundImage: r.imageUrl
									}
								})
							}
							return e
						}
						case _d.k: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Gl(e, {
									[r.subredditId]: {
										bannerBackgroundImage: void 0
									}
								})
							}
							return e
						}
						default:
							return e
					}
				},
				nm = Object(c.c)({
					draft: qE,
					exportStyles: WE,
					flairTemplate: zE,
					imagePreviews: ZE,
					isBladeEditorDirty: em,
					isEditing: tm,
					models: sm
				});
			Object(xe.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var am = (e = "", t) => {
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				cm = r("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const om = {};
			var dm = (e = om, t) => {
				switch (t.type) {
					case cm.c:
					case cm.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case cm.a: {
						const {
							key: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const im = {};
			var um = (e = im, t) => {
					switch (t.type) {
						case cm.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case cm.b:
						case cm.a: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				lm = Object(c.c)({
					error: dm,
					pending: um
				});
			const pm = {};
			var bm = (e = pm, t) => {
					switch (t.type) {
						case cm.b: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: t.payload
							}
						}
						default:
							return e
					}
				},
				fm = Object(c.c)({
					api: lm,
					models: bm
				}),
				ym = r("./src/reddit/actions/category/constants.ts"),
				Em = r("./src/reddit/actions/subredditMention/constants.ts");
			const mm = {};
			var _m = (e = mm, t) => {
				switch (t.type) {
					case Em.d:
					case Y.b:
					case Y.f:
					case z.SEARCH_RESULTS_RECEIVED:
					case J.SUBREDDIT_FAILED:
					case J.SUBREDDIT_LOADED:
					case Ne.PAGE_LOADED:
					case Us.PAGE_LOADED:
					case $.b:
					case $.e:
					case ke.b:
					case ke.a:
					case ke.e:
					case ke.d:
					case Q.PROFILE_POSTS_LOADED:
					case Z.b:
					case Z.e:
					case Fe.c:
					case Jo.TOPIC_DATA_LOADED: {
						const r = t.payload.subredditAboutInfo;
						if (!r) return e;
						const s = Object.keys(r);
						return 0 === s.length ? e : s.reduce((e, t) => (r[t] && (e[t] ? e[t] = {
							...e[t],
							...r[t]
						} : e[t] = r[t]), e), {
							...e
						})
					}
					case Na.a: {
						const {
							subredditId: r,
							emojisEnabled: s
						} = t.payload, n = {
							...e[r],
							emojisEnabled: s
						};
						return {
							...e,
							[r]: n
						}
					}
					case Ji.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, n = r.filter(e => e.type === uf.a.SUBREDDIT);
						return n.length ? n.reduce((e, t) => Object(G.setIn)(e, [t.id, "userIsSubscriber"], s), e) : e
					}
					case wc.g:
					case ym.f:
					case rd.h:
					case rd.p: {
						const {
							subredditsAboutInfo: r
						} = t.payload;
						if (!r) return e;
						const s = Object.keys(r);
						return 0 === s.length ? e : s.reduce((e, t) => (r[t] && (e[t] = e[t] ? {
							...e[t],
							...r[t]
						} : r[t]), e), {
							...e
						})
					}
					case Na.b: {
						const r = t.payload,
							{
								emojiCustomSize: s,
								subredditId: n
							} = r,
							a = e[n];
						if (!a) return e;
						const c = {
							...a
						};
						if (s) {
							const {
								width: e,
								height: t
							} = s;
							c.emojisCustomSize = [e, t]
						} else delete c.emojisCustomSize;
						return {
							...e,
							[n]: c
						}
					}
					case ee.c: {
						const {
							data: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case oe.t: {
						const {
							subredditId: r,
							subredditCoins: s
						} = t.payload;
						if (!r || !s) return e;
						const n = e[r];
						if (!n) return e;
						const a = {
							...n,
							coins: s
						};
						return {
							...e,
							[r]: a
						}
					}
					default:
						return e
				}
			};
			const Om = {};
			var hm = (e = Om, t) => {
				switch (t.type) {
					case ee.b:
					case ee.c: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case ee.a: {
						const {
							subredditName: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: s
						}
					}
					default:
						return e
				}
			};
			var Im = (e = !1, t) => {
					switch (t.type) {
						case ee.b:
							return !0;
						case ee.c:
						case ee.a:
							return !1;
						default:
							return e
					}
				},
				Sm = Object(c.c)({
					error: hm,
					pending: Im
				}),
				gm = r("./src/reddit/actions/subredditCreation.ts");
			const Dm = {
				apiError: null
			};
			var Tm = (e = Dm, t) => {
				switch (t.type) {
					case gm.b: {
						const {
							error: r
						} = t.payload;
						return {
							...e,
							apiError: r
						}
					}
					case gm.a:
					case gm.c:
					case gm.d:
						return Dm;
					default:
						return e
				}
			};
			var vm = (e = null, t) => {
				switch (t.type) {
					case gm.d: {
						const {
							subredditName: e
						} = t.payload;
						return e || null
					}
					case gm.c:
					case gm.b:
						return null;
					default:
						return e
				}
			};
			var Am = (e = !1, t) => {
					switch (t.type) {
						case gm.c:
							return !0;
						case gm.d:
						case gm.b:
							return !1;
						default:
							return e
					}
				},
				jm = Object(c.c)({
					error: Tm,
					lastCreatedSubredditId: vm,
					pending: Am
				});
			var wm = (e = !1, t) => {
					switch (t.type) {
						case rd.u:
							return !0;
						case rd.v:
						case rd.t:
							return !1;
						default:
							return e
					}
				},
				Cm = Object(c.c)({
					pending: wm
				});
			const Rm = {};
			var Pm = (e = Rm, t) => {
				switch (t.type) {
					case ee.l:
					case ee.m: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case ee.k: {
						const {
							subredditName: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: s
						}
					}
					default:
						return e
				}
			};
			const Lm = {};
			var Nm = (e = Lm, t) => {
					switch (t.type) {
						case ee.l: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case ee.m:
						case ee.k: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !1
							}
						}
						default:
							return e
					}
				},
				km = Object(c.c)({
					error: Pm,
					pending: Nm
				});
			const Um = {};
			var xm = (e = Um, t) => {
					switch (t.type) {
						case rd.g:
						case rd.h:
							return {
								...e, [t.payload.key]: !1
							};
						case rd.i:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				Mm = Object(c.c)({
					pending: xm
				});
			var Fm = (e = null, t) => {
				switch (t.type) {
					case oe.V:
						return t.payload || null;
					case oe.X:
					case oe.W:
						return null;
					default:
						return e
				}
			};
			var Gm = (e = !1, t) => {
					switch (t.type) {
						case oe.X:
							return !0;
						case oe.W:
						case oe.V:
							return !1;
						default:
							return e
					}
				},
				Bm = Object(c.c)({
					error: Fm,
					pending: Gm
				});
			var qm = (e = null, t) => {
				switch (t.type) {
					case rd.l: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case rd.n:
					case rd.m:
						return null;
					default:
						return e
				}
			};
			var Hm = (e = !1, t) => {
					switch (t.type) {
						case rd.n:
							return !0;
						case rd.m:
						case rd.l:
							return !1;
						default:
							return e
					}
				},
				Km = Object(c.c)({
					error: qm,
					pending: Hm
				}),
				Vm = r("./src/reddit/actions/subredditRules/constants.ts");
			var Wm = (e = !1, t) => {
					switch (t.type) {
						case Vm.c:
							return !0;
						case Vm.a:
						case Vm.b:
							return !1;
						default:
							return e
					}
				},
				Ym = r("./src/reddit/actions/subredditSettings.ts");
			var $m = (e = !1, t) => {
					switch (t.type) {
						case Ym.e:
							return !0;
						case Ym.f:
						case Ym.d:
							return !1;
						default:
							return e
					}
				},
				Qm = Object(c.c)({
					pending: $m
				});
			const Xm = {};
			var zm = (e = Xm, t) => {
					switch (t.type) {
						case rd.o:
						case rd.p:
							return {
								...e, [t.payload.key]: !1
							};
						case rd.q:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				Jm = Object(c.c)({
					pending: zm
				}),
				Zm = r("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const e_ = {};
			var t_ = (e = e_, t) => {
				switch (t.type) {
					case Zm.c:
					case Zm.b: {
						const r = t.payload,
							{
								subredditName: s
							} = r.options;
						return {
							...e,
							[s.toLowerCase()]: null
						}
					}
					case Zm.a: {
						const r = t.payload,
							{
								options: s,
								error: n
							} = r,
							{
								subredditName: a
							} = s;
						return {
							...e,
							[a.toLowerCase()]: n
						}
					}
					default:
						return e
				}
			};
			const r_ = {};
			var s_ = (e = r_, t) => {
					switch (t.type) {
						case Zm.c: {
							const r = t.payload,
								{
									subredditName: s
								} = r.options;
							return {
								...e,
								[s.toLowerCase()]: !0
							}
						}
						case Zm.b:
						case Zm.a: {
							const r = t.payload,
								{
									subredditName: s
								} = r.options;
							return {
								...e,
								[s.toLowerCase()]: !1
							}
						}
						default:
							return e
					}
				},
				n_ = Object(c.c)({
					error: t_,
					pending: s_
				});
			const a_ = {};
			var c_ = (e = a_, t) => {
				switch (t.type) {
					case Ul.c:
					case Ul.b: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case Ul.a: {
						const {
							subredditName: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: s
						}
					}
					default:
						return e
				}
			};
			const o_ = {};
			var d_ = (e = o_, t) => {
					switch (t.type) {
						case Ul.c: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case Ul.b:
						case Ul.a: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !1
							}
						}
						default:
							return e
					}
				},
				i_ = Object(c.c)({
					error: c_,
					pending: d_
				}),
				u_ = Object(c.c)({
					about: Sm,
					create: jm,
					inlineEditing: Cm,
					models: km,
					onboarding: Mm,
					productOffers: Bm,
					rankings: Km,
					rules: Wm,
					settings: Qm,
					similar: Jm,
					topContent: i_,
					wiki: n_
				}),
				l_ = r("./node_modules/lodash/isNil.js"),
				p_ = r.n(l_);
			const b_ = {};
			var f_ = (e = b_, t) => {
					switch (t.type) {
						case ee.d: {
							const {
								subredditId: r,
								forceState: s
							} = t.payload;
							return {
								...e,
								[r]: p_()(s) ? !e[r] : s
							}
						}
						default:
							return e
					}
				},
				y_ = Object(c.c)({
					meta: f_
				});
			const E_ = {};
			var m_ = (e = E_, t) => {
				switch (t.type) {
					case ym.f: {
						const {
							categoryId: r,
							subredditIds: s
						} = t.payload;
						return sa()(s) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const __ = {};
			var O_ = (e = __, t) => {
					switch (t.type) {
						case Re.c: {
							const {
								communityInfo: r,
								id: s,
								type: n
							} = t.payload;
							return r && "subreddit" === n ? {
								...e,
								[s]: r
							} : e
						}
						default:
							return e
					}
				},
				h_ = r("./src/reddit/actions/subredditCrosspostable.ts");
			var I_ = (e = null, t) => {
				switch (t.type) {
					case h_.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case h_.c:
					case h_.b:
						return null;
					default:
						return e
				}
			};
			var S_ = (e = !1, t) => {
					switch (t.type) {
						case h_.c:
							return !0;
						case h_.b:
						case h_.a:
							return !1;
						default:
							return e
					}
				},
				g_ = Object(c.c)({
					errors: I_,
					pending: S_
				});
			const D_ = {};
			var T_ = (e = D_, t) => {
					switch (t.type) {
						case h_.b: {
							const {
								subredditIds: r
							} = t.payload;
							return Vi()(e, r) ? e : r
						}
						default:
							return e
					}
				},
				v_ = Object(c.c)({
					api: g_,
					ids: T_
				});
			const A_ = {};
			var j_ = (e = A_, t) => {
					switch (t.type) {
						case Wl.a: {
							const r = t.payload,
								{
									subredditId: s,
									distinguishKey: n,
									postIds: a
								} = r;
							if (!(s in e)) return {
								...e,
								[s]: {
									[n]: a
								}
							};
							const c = e[s];
							return Gl(c, {
								[n]: a
							}) === c ? e : {
								...e,
								[s]: {
									...c,
									[n]: a
								}
							}
						}
						default:
							return e
					}
				},
				w_ = Object(c.c)({
					models: j_
				});
			const C_ = {};
			var R_ = (e = C_, t) => {
				switch (t.type) {
					case E.a: {
						const {
							assets: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case m.g:
					case m.j: {
						const {
							subredditId: r,
							mainHeader: s
						} = t.payload, n = e[r] || {};
						return {
							...e,
							[r]: {
								...n,
								mainHeader: s
							}
						}
					}
					default:
						return e
				}
			};
			const P_ = {};
			var L_ = (e = P_, t) => {
				switch (t.type) {
					case E.a: {
						const {
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: t.payload
						}
					}
					case y.i: {
						const {
							communityRaw: r,
							subredditId: s
						} = t.payload;
						return r ? {
							...e,
							[s]: r
						} : e
					}
					default:
						return e
				}
			};
			const N_ = {};
			var k_ = (e = N_, t) => {
				switch (t.type) {
					case E.a: {
						const {
							subredditId: r,
							distribution: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const U_ = {};
			var x_ = (e = U_, t) => {
				switch (t.type) {
					case E.a: {
						const {
							subredditId: r,
							meta: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const M_ = {};
			var F_ = (e = M_, t) => {
					switch (t.type) {
						case E.p: {
							const {
								subredditId: r,
								releaseNotes: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				G_ = Object(c.c)({
					assets: R_,
					communityRaw: L_,
					distributions: k_,
					meta: x_,
					releaseNotes: F_
				}),
				B_ = r("./node_modules/lodash/isEqualWith.js"),
				q_ = r.n(B_),
				H_ = r("./src/lib/forceHttps/index.ts");
			const K_ = {},
				V_ = (e, t) => {
					return !q_()(e, t, (e, t, r) => {
						if ("subscribers" === r) return !0
					})
				},
				W_ = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					for (let n = 0; n < r.length; n++) {
						const a = r[n],
							c = e[a],
							o = t[a];
						c && !V_(c, o) || (s[a] = o)
					}
					return Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var Y_ = (e = K_, t) => {
				switch (t.type) {
					case Ji.c:
						return ((e, t) => {
							const r = Object.keys(t);
							return r.length ? r.reduce((r, s) => {
								const n = e[s],
									a = t[s],
									c = n ? {
										...n,
										...a
									} : {
										...a
									};
								return a.icon.url ? c.icon.url = Object(H_.a)(a.icon.url) : n && n.icon.url ? c.icon = n.icon : c.icon.url = "", n && n.allowChatPostCreation && (c.allowChatPostCreation = !0), Object(G.set)(r, s, c)
							}, e) : e
						})(e, t.payload.subreddits || {});
					case Em.d:
					case ym.f:
					case we.f:
					case wc.g:
					case td.b:
					case Pe.e:
					case Pe.h:
					case W.k:
					case Re.r:
					case Re.u:
					case Qi.h:
					case zo.b:
					case Y.b:
					case Y.f:
					case we.b:
					case Le.b:
					case $.b:
					case $.e:
					case X.c:
					case X.i:
					case X.e:
					case X.g:
					case ke.b:
					case ke.e:
					case Q.MORE_POSTS_LOADED:
					case Q.PROFILE_POSTS_LOADED:
					case Qi.e:
					case z.SEARCH_RESULTS_RECEIVED:
					case J.SUBREDDIT_LOADED:
					case Ne.PAGE_LOADED:
					case Vr.e:
					case Us.PAGE_LOADED:
					case Qi.m:
					case Z.b:
					case Z.e:
					case Ue.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Fe.c:
					case ee.c:
					case ee.f:
					case ee.i:
					case rd.a:
					case rd.h:
					case rd.p:
					case Jo.TOPIC_DATA_LOADED:
					case Jo.MORE_POSTS_LOADED:
						return W_(e, t.payload.subreddits || {});
					case W.f:
					case W.i:
					case W.m:
					case W.p:
					case W.v: {
						const {
							response: r
						} = t.payload, {
							subreddits: s
						} = r;
						return W_(e, s)
					}
					case Fe.e: {
						const {
							typeaheadSuggestions: r
						} = t.payload;
						return W_(e, r.subreddits || {})
					}
					case Re.B: {
						const {
							subreddits: r
						} = t.payload;
						return {
							...r,
							...e
						}
					}
					case y.g: {
						const r = t.payload;
						return W_(e, r)
					}
					case I.m: {
						const r = t.payload,
							{
								subredditId: s,
								styles: n
							} = r;
						return "communityIcon" in n && e[s] && "string" == typeof n.communityIcon ? {
							...e,
							[s]: {
								...e[s],
								communityIcon: n.communityIcon
							}
						} : e
					}
					case Ym.f: {
						const {
							settings: r
						} = t.payload, {
							subredditId: s,
							title: n
						} = r;
						return e[s] && void 0 !== n ? {
							...e,
							[s]: {
								...e[s],
								title: n
							}
						} : e
					}
					case cm.b: {
						const r = t.payload,
							{
								subreddits: s
							} = r,
							n = {};
						for (const e of s) n[e.id] = {
							id: e.id,
							communityIcon: e.communityIcon,
							icon: {
								url: e.icon || e.communityIcon,
								width: null,
								height: null
							},
							isNSFW: e.isNsfw,
							name: e.name,
							primaryColor: e.primaryColor,
							subscribers: e.subscribers
						};
						return Object(G.merge)(e, n)
					}
					default:
						return e
				}
			};
			var $_ = (e = null, t) => {
				switch (t.type) {
					case ee.e: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case ee.g:
					case ee.f:
						return null;
					default:
						return e
				}
			};
			var Q_ = (e = !1, t) => {
				switch (t.type) {
					case ee.g:
					case ee.f:
						return !0;
					case ee.e:
						return !1;
					default:
						return e
				}
			};
			var X_ = (e = !1, t) => {
					switch (t.type) {
						case ee.g:
							return !0;
						case ee.f:
						case ee.e:
							return !1;
						default:
							return e
					}
				},
				z_ = Object(c.c)({
					errors: $_,
					fetched: Q_,
					pending: X_
				});
			var J_ = (e = null, t) => {
					switch (t.type) {
						case ee.f: {
							const {
								subreddits: e
							} = t.payload, r = Object.keys(e);
							return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
						}
						default:
							return e
					}
				},
				Z_ = Object(c.c)({
					api: z_,
					order: J_
				});
			const eO = {};
			var tO = (e = eO, t) => {
				switch (t.type) {
					case Ym.a: {
						const r = t.payload;
						return Object(G.merge)(e, r)
					}
					case Ym.b: {
						const {
							subredditId: r,
							notificationSettings: s
						} = t.payload;
						return Object(G.merge)(e, {
							[r]: s
						})
					}
					default:
						return e
				}
			};
			const rO = {};
			var sO = (e = rO, t) => {
				switch (t.type) {
					case rd.h: {
						const {
							key: r,
							subredditIds: s
						} = t.payload;
						return 0 === s.length ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const nO = {};
			var aO = (e = nO, t) => {
					switch (t.type) {
						case oe.ib: {
							const {
								recentSupporters: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						case oe.R:
						case oe.U: {
							const {
								subredditId: r,
								powerupsCount: s,
								user: n
							} = t.payload;
							if (s > 0) {
								const t = {
									score: s,
									lastSupportedAt: (new Date).toString(),
									supporterInfo: {
										id: n.id,
										displayName: Object(re.e)(n),
										icon: {
											url: n.accountIcon
										},
										profile: {
											isNsfw: n.isNSFW
										}
									}
								};
								return {
									...e,
									[r]: [t, ...e[r]]
								}
							}
							return e
						}
						default:
							return e
					}
				},
				cO = r("./src/reddit/actions/economics/powerups/constants.ts");
			const oO = {},
				dO = (e, t) => {
					const {
						name: r,
						emojiIcon: s,
						stickerIcon: n
					} = e;
					return {
						id: r,
						fullId: `emote|${t}|${r}`,
						imageType: s.mimeType,
						emoji: {
							x: s.x,
							y: s.y,
							path: s.url,
							type: s.mimeType
						},
						sticker: {
							x: n.x,
							y: n.y,
							path: n.url,
							type: n.mimeType
						}
					}
				},
				iO = e => {
					if (!e) return e;
					const {
						mediaPacks: t,
						...r
					} = e, s = {};
					return null == t || t.forEach(e => {
						const {
							id: t,
							name: r,
							emotes: n
						} = e, a = {
							id: t,
							name: r,
							emotes: n.map(e => dO(e, t))
						};
						s[t] = a
					}), {
						...r,
						emotePacks: s
					}
				},
				uO = (e, t, r) => {
					const s = null == e ? void 0 : e.emotePacks,
						n = null == s ? void 0 : s[t],
						a = null == n ? void 0 : n.emotes;
					if (!a) return e;
					const c = [dO(r, t), ...a];
					return {
						...e,
						emotePacks: {
							...s,
							[t]: {
								...n,
								emotes: c
							}
						}
					}
				};
			var lO = (e = oO, t) => {
				var r;
				switch (t.type) {
					case oe.jb:
					case oe.ib: {
						const {
							powerups: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: iO(r)
						}
					}
					case cO.b: {
						const {
							subredditId: r,
							emoji: s
						} = t.payload, n = e[r];
						return {
							...e,
							[r]: uO(n, r, s)
						}
					}
					case oe.R:
					case oe.U: {
						const {
							subredditId: s,
							powerupsCount: n
						} = t.payload;
						if (e[s] && n > 0) {
							const t = e[s],
								a = t.tier + 1,
								c = t.tiersInfo[a - 1],
								o = c && c.benefits;
							return {
								...e,
								[s]: {
									...e[s],
									benefits: o || (null === (r = e[s]) || void 0 === r ? void 0 : r.benefits),
									count: t.count + n,
									supportersCount: t.supportersCount + 1
								}
							}
						}
						return e
					}
					default:
						return e
				}
			};
			const pO = {},
				bO = (e, t) => t.supporterInfo && e.supporterInfo ? 1e15 * t.score + new Date(t.lastSupportedAt).valueOf() - 1e15 * e.score - new Date(e.lastSupportedAt).valueOf() : t.supporterInfo ? 1 : e.supporterInfo ? -1 : 0;
			var fO = (e = pO, t) => {
					switch (t.type) {
						case oe.ib: {
							const {
								topSupporters: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: r.sort(bO)
							}
						}
						case oe.R:
						case oe.U: {
							const {
								subredditId: r,
								powerupsCount: s,
								user: n,
								isAnonymous: a
							} = t.payload;
							if (!e[r] && s < 0) return e;
							let c = !1;
							const o = e[r].map(e => {
								var t;
								return a && !e.supporterInfo || !a && (null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.id) === n.id ? (c = !0, {
									...e,
									lastSupportedAt: s > 0 ? (new Date).toString() : e.lastSupportedAt,
									score: e.score + s
								}) : e
							});
							if (c) return {
								...e,
								[r]: o.sort(bO)
							};
							if (s > 0) {
								const t = {
									score: s,
									lastSupportedAt: (new Date).toString(),
									supporterInfo: a ? null : {
										id: n.id,
										displayName: Object(re.e)(n),
										icon: {
											url: n.accountIcon
										},
										profile: {
											isNsfw: n.isNSFW
										}
									}
								};
								return {
									...e,
									[r]: [t, ...e[r]].sort(bO)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				yO = r("./src/lib/makeProductOfferKey/index.ts");
			const EO = {};
			var mO = (e = EO, t) => {
				switch (t.type) {
					case oe.W:
					case oe.ib: {
						const {
							subredditId: r,
							productOffers: s
						} = t.payload;
						if (!s || 0 === s.length) return e;
						const n = s.reduce((e, t) => {
							const s = Object(yO.a)(r, t.type);
							return e[s] = e[s] ? [...e[s], t] : [t], e
						}, {});
						return {
							...e,
							...n
						}
					}
					default:
						return e
				}
			};
			const _O = {};
			var OO = (e = _O, t) => {
					switch (t.type) {
						case O.g: {
							const {
								subredditId: r,
								products: s
							} = t.payload, n = Object.keys(s).reduce((e, t) => (e[t] = !0, e), {});
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				hO = r("./src/reddit/models/NewCommunityProgress/index.ts");
			const IO = {};
			var SO = (e = IO, t) => {
				switch (t.type) {
					case rd.w: {
						const {
							id: r,
							progressModule: s
						} = t.payload;
						if (!s) return e;
						const n = s.cards.filter(({
							id: e
						}) => "invite_contributor" !== e).filter(({
							buttons: e
						}) => e.every(({
							__typename: e
						}) => hO.b.includes(e)));
						return {
							...e,
							[r]: {
								...s,
								cards: n
							}
						}
					}
					case rd.d: {
						const {
							subredditId: r,
							cardId: s
						} = t.payload;
						return Object(G.updateIn)(e, [r, "cards"], e => e.filter(e => e.id !== s))
					}
					default:
						return e
				}
			};
			const gO = {};
			var DO = (e = gO, t) => {
				var r, s;
				switch (t.type) {
					case rd.w: {
						const {
							id: r,
							questions: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case we.f:
					case we.b: {
						const {
							subreddits: s
						} = t.payload, n = {};
						for (const e of Object.keys(s)) {
							const t = s[e];
							((null === (r = t.answerableQuestions) || void 0 === r ? void 0 : r.length) || 0) > 0 && (n[e] = t.answerableQuestions)
						}
						return 0 === Object.keys(n).length ? e : Object(G.assign)(e, n)
					}
					case rd.e: {
						const {
							subredditId: r,
							questionId: n
						} = t.payload, a = null !== (s = e[r]) && void 0 !== s ? s : [];
						return Object(G.setIn)(e, [r], a.filter(e => e.id !== n))
					}
					case rd.f:
						return gO;
					default:
						return e
				}
			};
			const TO = {};
			var vO = (e = TO, t) => {
				switch (t.type) {
					case rd.b: {
						const {
							categoryRankingsKey: r
						} = t.payload, s = e[r], n = s && s.length ? [...s, ...t.payload.rankings] : t.payload.rankings;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			const AO = {};
			var jO = (e = AO, t) => {
				switch (t.type) {
					case rd.c: {
						const {
							categoryRankingsKey: r,
							pageInfo: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const wO = {};
			var CO = (e = wO, t) => {
				switch (t.type) {
					case Vm.b: {
						const {
							rules: r,
							subredditId: s
						} = t.payload, n = {
							[s]: {
								rules: r.rules
							}
						};
						return {
							...e,
							...n
						}
					}
					case Vm.e: {
						const {
							rules: r,
							subredditId: s
						} = t.payload, n = {
							[s]: {
								rules: [...e[s].rules, ...r.rules]
							}
						};
						return {
							...e,
							...n
						}
					}
					case Vm.f: {
						const {
							rules: r,
							subredditId: s,
							oldName: n
						} = t.payload;
						r.rules.shortName !== n && (e[s].rules = e[s].rules.filter(e => e.shortName !== n));
						const a = {
							[s]: {
								rules: [...r.rules, ...e[s].rules]
							}
						};
						return a[s].rules.sort((e, t) => e.priority - t.priority), {
							...e,
							...a
						}
					}
					case Vm.g:
					case Vm.d: {
						const {
							rules: r,
							subredditId: s
						} = t.payload, n = {
							[s]: {
								rules: r.rules
							}
						};
						return {
							...e,
							...n
						}
					}
					default:
						return e
				}
			};
			const RO = {};
			var PO = (e = RO, t) => {
				switch (t.type) {
					case Ym.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case Ym.f: {
						const r = t.payload.settings,
							s = e[r.subredditId] || {};
						return {
							...e,
							[r.subredditId]: {
								...s,
								...r
							}
						}
					}
					case _d.n: {
						const r = t.payload,
							s = {
								...e[r.subredditId] || {},
								...r.settings
							};
						return {
							...e,
							[r.subredditId]: s
						}
					}
					default:
						return e
				}
			};
			const LO = {};
			var NO = (e = LO, t) => {
				switch (t.type) {
					case rd.p: {
						const {
							key: r,
							subredditIds: s
						} = t.payload;
						return 0 === s.length ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const kO = {};
			var UO = (e = kO, t) => {
				switch (t.type) {
					case rd.w: {
						const {
							id: r,
							survey: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case rd.x: {
						const {
							id: r,
							response: s
						} = t.payload, n = Object(G.setIn)(e, [r, "response"], s);
						return Object(G.setIn)(n, [r, "isEligible"], !1)
					}
					default:
						return e
				}
			};
			const xO = {};
			var MO = (e = xO, t) => {
				switch (t.type) {
					case wc.g: {
						const {
							subredditTopContent: r
						} = t.payload;
						return {
							...e,
							...r.subredditTopContent
						}
					}
					case Ul.b: {
						const {
							subredditTopContent: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					default:
						return e
				}
			};
			const FO = [];
			var GO = (e = FO, t) => {
				switch (t.type) {
					case we.b:
					case J.SUBREDDIT_LOADED: {
						const {
							trendingSubredditIds: r
						} = t.payload;
						return r && r.length ? r : e
					}
					default:
						return e
				}
			};
			const BO = {};
			var qO = (e = BO, t) => {
					switch (t.type) {
						case Em.d:
							const {
								unavailableSubreddits: r
							} = t.payload;
							return {
								...e, ...r
							};
						default:
							return e
					}
				},
				HO = r("./src/reddit/actions/subredditWelcomeMessage.ts");
			const KO = {};
			var VO = (e = KO, t) => {
					switch (t.type) {
						case HO.a: {
							const {
								welcomeMessage: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						default:
							return e
					}
				},
				WO = Object(c.c)({
					about: _m,
					api: u_,
					appliedFilters: y_,
					byCategory: m_,
					communityInfo: O_,
					crosspostable: v_,
					duplicates: w_,
					gov: G_,
					models: Y_,
					moderated: Z_,
					notificationSettings: tO,
					onboarding: sO,
					powerupRecentSupporters: aO,
					powerups: lO,
					powerupTopSupporters: fO,
					productOffers: mO,
					products: OO,
					progressModule: SO,
					questions: DO,
					rankings: vO,
					rankingsPageInfo: jO,
					rules: CO,
					settings: PO,
					similar: NO,
					survey: UO,
					topContent: MO,
					trending: GO,
					unavailableModels: qO,
					welcomeMessage: VO
				});
			const YO = {};
			var $O = Object(bb.a)((e = YO, t) => {
					switch (t.type) {
						case J.SUBREDDIT_LOADED: {
							const {
								postIds: r,
								posts: s
							} = t.payload, n = r.slice(0, 2).reduce((e, t) => {
								if (s[t].isStickied) {
									const r = s[t].belongsTo.id;
									e[r] ? e[r].push(t) : e[r] = [t]
								}
								return e
							}, {});
							return De()({
								...e
							}, n)
						}
						case fd.k: {
							const {
								newStickiedPostList: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						default:
							return e
					}
				}, YO),
				QO = Object(c.c)({
					data: $O
				}),
				XO = r("./node_modules/lodash/values.js"),
				zO = r.n(XO);
			const JO = [];
			var ZO = (e = JO, t) => {
				switch (t.type) {
					case Ji.d: {
						const {
							makeFavorite: r,
							multiredditsModelsState: s,
							multiredditPath: n
						} = t.payload;
						if (r) {
							const t = [...e],
								r = $i(t, n, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							return t.splice(r, 0, n), t
						}
						return e.filter(e => e !== n)
					}
					case Re.u: {
						const {
							multireddits: e
						} = t.payload;
						return zO()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case Ji.e: {
						const {
							follow: r,
							multiredditPath: s
						} = t.payload;
						return r ? e : e.filter(e => e !== s)
					}
					case Re.j: {
						const r = t.payload;
						return e.filter(e => e !== r)
					}
					default:
						return e
				}
			};
			var eh = (e = null, t) => {
				switch (t.type) {
					case Ji.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Ji.b:
					case Ji.c:
						return null;
					default:
						return e
				}
			};
			var th = (e = !1, t) => {
				switch (t.type) {
					case Ji.b:
					case Ji.c:
						return !0;
					case Ji.a:
						return !1;
					default:
						return e
				}
			};
			var rh = (e = !1, t) => {
					switch (t.type) {
						case Ji.b:
							return !0;
						case Ji.c:
						case Ji.a:
							return !1;
						default:
							return e
					}
				},
				sh = Object(c.c)({
					errors: eh,
					fetched: th,
					pending: rh
				});
			const nh = [];
			var ah = (e = nh, t) => {
				switch (t.type) {
					case Ji.c: {
						const {
							profiles: e,
							favoriteProfileIds: r,
							favoriteSubredditIds: s
						} = t.payload;
						let n;
						return (n = r && r.length ? r : s ? s.filter(t => !!e[t]) : []).sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), n
					}
					case Ji.f: {
						const {
							makeFavorite: r,
							identifier: s,
							profileModels: n
						} = t.payload, {
							id: a,
							type: c
						} = s;
						if (c !== uf.a.PROFILE) return e;
						const o = e ? e.slice() : [];
						if (r) {
							const e = $i(o, a, (e, t) => n[e].displayText.toLowerCase() > n[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, a)
						} else {
							const e = o.indexOf(a);
							o.splice(e, 1)
						}
						return o
					}
					case Ji.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, n = r.filter(t => t.type === uf.a.PROFILE && e.indexOf(t.id) > -1);
						return !n.length || s ? e : n.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const ch = [];
			var oh = (e = ch, t) => {
				switch (t.type) {
					case Ji.c: {
						const {
							subreddits: e,
							favoriteSubredditIds: r
						} = t.payload, s = r ? r.filter(t => !!e[t]) : [];
						return s.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), s
					}
					case Ji.f: {
						const {
							makeFavorite: r,
							identifier: s,
							subredditModels: n
						} = t.payload, {
							id: a,
							type: c
						} = s;
						if (c !== uf.a.SUBREDDIT) return e;
						const o = e ? e.slice() : [];
						if (r) {
							const e = $i(o, a, (e, t) => n[e].displayText.toLowerCase() > n[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, a)
						} else {
							const e = o.indexOf(a);
							o.splice(e, 1)
						}
						return o
					}
					case Ji.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, n = r.filter(t => t.type === uf.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !n.length || s ? e : n.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const dh = [],
				ih = e => (t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1;
			var uh = (e = dh, t) => {
					switch (t.type) {
						case Re.u: {
							const {
								multireddits: r
							} = t.payload, s = zO()(r).map(({
								url: e
							}) => e.toLowerCase()).sort(ih(r));
							return Vi()(e, s) ? e : s
						}
						case Le.b: {
							const {
								account: r,
								multireddits: s,
								multiredditsByUser: n,
								multiredditsModelsState: a
							} = t.payload;
							if (!r) return e;
							const c = n[r.id];
							if (!c || !c.length) return e;
							const o = {
									...a,
									...s
								},
								d = Yi()(e, c).sort(ih(o));
							return Vi()(e, d) ? e : d
						}
						case Ji.e: {
							const {
								follow: r,
								multiredditPath: s,
								multiredditsModelsState: n
							} = t.payload;
							return r ? [...e, s].sort(ih(n)) : e.filter(e => e !== s)
						}
						case Re.j: {
							const r = t.payload;
							return e.filter(e => e !== r)
						}
						case Re.g:
						case Re.m: {
							const {
								multireddit: r,
								multiredditsModelsState: s
							} = t.payload, n = {
								...s,
								[r.url]: r
							};
							return [...e, r.url].sort(ih(n))
						}
						default:
							return e
					}
				},
				lh = r("./node_modules/lodash/difference.js"),
				ph = r.n(lh);
			const bh = [];
			var fh = (e = bh, t) => {
				switch (t.type) {
					case Qi.n: {
						const {
							profileOrder: r
						} = t.payload;
						return vp()([...e, ...r])
					}
					case Ji.c: {
						const {
							profiles: e
						} = t.payload, r = Object.keys(e);
						return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
					}
					case Ji.h: {
						const {
							identifiers: r,
							profileModels: s,
							userIsSubscriber: n
						} = t.payload, a = r.filter(e => e.type === uf.a.PROFILE);
						if (!a.length) return e;
						const c = a.map(e => e.id);
						return n ? vp()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : ph()(e, c)
					}
					default:
						return e
				}
			};
			const yh = [];
			var Eh = (e = yh, t) => {
					switch (t.type) {
						case Qi.n: {
							const {
								subredditOrder: r
							} = t.payload;
							return vp()([...e, ...r])
						}
						case Ji.c: {
							const {
								subreddits: e
							} = t.payload, r = Object.keys(e);
							return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
						}
						case Ji.h: {
							const {
								identifiers: r,
								subredditModels: s,
								userIsSubscriber: n
							} = t.payload, a = r.filter(e => e.type === uf.a.SUBREDDIT && !!e.id);
							if (!a.length) return e;
							const c = a.map(e => e.id);
							return n ? vp()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : ph()(e, c)
						}
						default:
							return e
					}
				},
				mh = Object(c.c)({
					api: sh,
					favoriteMultiOrder: ZO,
					favoriteProfileOrder: ah,
					favoriteSubredditOrder: oh,
					multiredditOrder: uh,
					profileOrder: fh,
					subredditOrder: Eh
				}),
				_h = r("./src/reddit/actions/survey/constants.ts");
			var Oh = (e = null, t) => {
				switch (t.type) {
					case _h.c:
						return t.payload || null;
					default:
						return e
				}
			};
			var hh = (e = 1, t) => {
				switch (t.type) {
					case _h.d:
						return t.payload || 1;
					default:
						return e
				}
			};
			var Ih = (e = !1, t) => {
				switch (t.type) {
					case _h.b:
						return !e;
					default:
						return e
				}
			};
			var Sh = (e = !0, t) => {
					switch (t.type) {
						case _h.h:
							return !e;
						default:
							return e
					}
				},
				gh = Object(c.c)({
					activeDemoTrigger: Oh,
					demoTriggerThreshold: hh,
					isDemoEnabled: Ih,
					isSampleFactorEnabled: Sh
				}),
				Dh = r("./src/reddit/actions/tabBadging.ts");
			var Th = (e = !1, t) => {
					switch (t.type) {
						case Dh.a:
							const {
								hasUnreadMessages: r
							} = t.payload;
							return r;
						default:
							return e
					}
				},
				vh = r("./src/reddit/actions/tags/constants.ts");
			const Ah = {
				pending: !1,
				error: !1
			};
			var jh = (e = Ah, t) => {
				switch (t.type) {
					case vh.l:
						return {
							...e, pending: !0
						};
					case vh.m:
						return {
							error: !1, pending: !1
						};
					case vh.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const wh = {
				pending: !1,
				error: !1
			};
			var Ch = (e = wh, t) => {
				switch (t.type) {
					case vh.o:
						return {
							...e, pending: !0
						};
					case vh.p:
						return {
							error: !1, pending: !1
						};
					case vh.n:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const Rh = {
				pending: !1,
				error: !1
			};
			var Ph = (e = Rh, t) => {
				switch (t.type) {
					case vh.t:
						return {
							...e, pending: !0
						};
					case vh.s:
					case vh.r:
					case vh.e:
					case vh.j:
						return {
							error: !1, pending: !1
						};
					case vh.q:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const Lh = {
				pending: !1,
				error: !1
			};
			var Nh = (e = Lh, t) => {
				switch (t.type) {
					case vh.v:
						return {
							...e, pending: !0
						};
					case vh.w:
						return {
							error: !1, pending: !1
						};
					case vh.u:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const kh = {
				pending: !1,
				error: !1
			};
			var Uh = (e = kh, t) => {
					switch (t.type) {
						case vh.g:
							return {
								...e, pending: !0
							};
						case vh.h:
							return {
								error: !1, pending: !1
							};
						case vh.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				xh = Object(c.c)({
					create: jh,
					deleteTag: Ch,
					fetch: Ph,
					update: Nh,
					updatePrimaryTag: Uh
				});
			const Mh = {
				global: [],
				recommendedGlobal: []
			};
			var Fh = (e = Mh, t) => {
					switch (t.type) {
						case vh.w:
						case vh.r:
						case vh.e:
						case vh.j: {
							const {
								globalSubredditTags: e
							} = t.payload, r = Object.keys(e), s = r.filter(t => e[t].isRecommended);
							return {
								global: r,
								recommendedGlobal: s
							}
						}
						default:
							return e
					}
				},
				Gh = r("./node_modules/lodash/uniqWith.js"),
				Bh = r.n(Gh),
				qh = r("./src/reddit/models/Option/index.ts");
			const Hh = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var Kh = (e = Hh, t) => {
					switch (t.type) {
						case vh.d: {
							const {
								option: r
							} = t.payload;
							return {
								...e,
								selectedOptions: Bh()([...e.selectedOptions || [], {
									...r
								}], qh.a)
							}
						}
						case vh.c: {
							const {
								option: r
							} = t.payload, s = e.selectedOptions.findIndex(e => Object(qh.a)(e, r));
							return e.selectedOptions.splice(s, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case vh.b: {
							const {
								input: r
							} = t.payload;
							return {
								...e,
								tagInput: r
							}
						}
						case vh.a: {
							const {
								primaryTagId: r
							} = t.payload, s = e.selectedOptions.findIndex(e => e.id === r), n = [...e.selectedOptions];
							return s >= 0 && n.splice(s, 1), {
								...e,
								selectedPrimaryTagId: r,
								selectedOptions: n
							}
						}
						default:
							return e
					}
				},
				Vh = r("./src/reddit/helpers/tags/index.ts");
			const Wh = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var Yh = (e = Wh, t) => {
					switch (t.type) {
						case vh.j: {
							const {
								globalSubredditTags: r,
								subredditScopedTags: s,
								subredditId: n
							} = t.payload;
							return {
								...e,
								globalSubredditTags: {
									...e.globalSubredditTags,
									...r
								},
								subredditScopedTags: {
									...e.subredditScopedTags,
									[n]: {
										...e.subredditScopedTags[n] || {},
										...s[n] || {}
									}
								}
							}
						}
						case vh.w:
						case vh.s:
						case vh.r: {
							const {
								primaryTag: r,
								globalSubredditTags: s,
								subredditScopedTags: n,
								itemTags: a,
								suggestedItemTags: c,
								subredditId: o,
								geoPlace: d
							} = t.payload, i = {
								...e.subredditPrimaryTagId
							};
							return r ? i[o] = r.tag.id : delete i[o], {
								subredditPrimaryTagId: i,
								globalSubredditTags: {
									...e.globalSubredditTags,
									...s
								},
								subredditScopedTags: {
									...e.subredditScopedTags,
									[o]: {
										...e.subredditScopedTags[o] || {},
										...n[o] || {}
									}
								},
								itemTags: {
									...e.itemTags,
									[o]: {
										...a[o] || {}
									}
								},
								geoPlaces: d ? Object(G.set)(e.geoPlaces, o, d) : e.geoPlaces,
								suggestedItemTags: {
									...e.suggestedItemTags,
									[o]: {
										...c[o] || {}
									}
								},
								sortedItemTags: {
									...e.sortedItemTags,
									[o]: Object(Vh.a)(a[o] || {})
								}
							}
						}
						case vh.p: {
							const {
								subredditId: r,
								tags: s
							} = t.payload, n = s.reduce((e, {
								tagId: t
							}) => (delete e[t], e), {
								...e.subredditScopedTags[r] || {}
							});
							return {
								...e,
								subredditScopedTags: {
									...e.subredditScopedTags,
									[r]: n
								}
							}
						}
						case vh.e: {
							const {
								globalSubredditTags: r
							} = t.payload;
							return {
								...e,
								globalSubredditTags: {
									...e.globalSubredditTags,
									...r
								}
							}
						}
						case vh.h: {
							const {
								subredditId: r,
								primaryTagId: s,
								secondaryTags: n
							} = t.payload;
							return s && r ? {
								...e,
								subredditPrimaryTagId: {
									...e.subredditPrimaryTagId,
									[r]: s
								},
								itemTags: {
									...e.itemTags,
									[r]: {
										...n || {}
									}
								}
							} : e
						}
						case vh.i: {
							const {
								subredditId: r,
								primaryTagId: s
							} = t.payload;
							return s && r ? {
								...e,
								subredditPrimaryTagId: {
									...e.subredditPrimaryTagId,
									[r]: s
								}
							} : e
						}
						default:
							return e
					}
				},
				$h = r("./src/reddit/reducers/tags/selected/index.ts"),
				Qh = Object(c.c)({
					api: xh,
					availableGlobalTagOrder: Fh,
					models: Yh,
					selected: $h.b,
					creation: Kh
				}),
				Xh = r("./src/reddit/actions/redditEmbed.ts"),
				zh = r("./src/reddit/actions/theme.ts"),
				Jh = r("./src/reddit/actions/users.ts"),
				Zh = r("./src/reddit/models/Theme/index.ts");
			const eI = {
				current: Zh.c,
				cached: {}
			};
			var tI = (e = eI, t) => {
					switch (t.type) {
						case zh.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? Zh.b : Zh.c,
								cached: {}
							}
						}
						case Nr.a:
						case Nr.b:
						case Nr.h:
						case Nr.i:
						case Nr.f:
						case Nr.j:
						case Pe.e:
						case Pe.h:
						case Y.a:
						case Y.e:
						case Y.b:
						case Y.f:
						case Y.d:
						case Y.h:
						case we.b:
						case J.SUBREDDIT_LOADED:
						case Le.b:
						case Le.a:
						case we.f:
						case Xh.b:
						case ee.i:
						case Fe.c:
						case z.SEARCH_RESULTS_RECEIVED:
						case _d.j:
						case Ne.PAGE_LOADED:
						case Us.PAGE_LOADED:
						case Jh.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: Zh.b,
									cached: {}
								} : {
									current: Zh.c,
									cached: {}
								}
							}
							return e;
						case $.d:
						case $.e:
						case ke.a:
						case ke.b:
						case ke.d:
						case ke.e:
						case Q.PROFILE_POSTS_FAILED:
						case Q.PROFILE_POSTS_LOADED: {
							const {
								account: r
							} = t.payload;
							return r ? r.nightmode ? {
								current: Zh.b,
								cached: {}
							} : {
								current: Zh.c,
								cached: {}
							} : e
						}
						case W.h:
						case W.j:
						case W.i:
						case W.g:
						case W.f:
						case W.n:
						case W.m:
						case W.p:
						case W.q:
						case W.w:
						case W.v:
							if (t.payload && t.payload.response && t.payload.response.preferences && "nightmode" in t.payload.response.preferences) {
								const {
									nightmode: e
								} = t.payload.response.preferences;
								return e ? {
									current: Zh.b,
									cached: {}
								} : {
									current: Zh.c,
									cached: {}
								}
							}
							return e;
						case _d.i: {
							if (!t.payload) return e;
							const {
								nightmode: r
							} = t.payload;
							return r ? {
								current: Zh.b,
								cached: {}
							} : {
								current: Zh.c,
								cached: {}
							}
						}
						case I.d:
							return {
								current: Zh.c, cached: {}
							};
						case I.e:
							return t.payload.nightmodeTempUpdated ? {
								current: Zh.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				rI = r("./src/reddit/actions/toaster.ts");
			const sI = [];
			var nI = (e = sI, t) => {
					switch (t.type) {
						case rI.c: {
							const r = t.payload,
								s = [];
							let n = !1;
							for (const t of e) {
								const e = t.id === r.id ? r : t;
								s.push(e), n = n || e === r
							}
							return n || s.push(r), s
						}
						case rI.b: {
							const r = t.payload;
							return e.filter(e => e.id !== r)
						}
						default:
							return e
					}
				},
				aI = r("./src/reddit/actions/tooltip.ts");
			var cI = (e = null, t) => {
					switch (t.type) {
						case aI.c: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : r
						}
						case aI.a: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? e : r
						}
						case aI.b: {
							const {
								tooltipId: r
							} = t.payload;
							return null !== e ? e : r || null
						}
						case aI.e: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : e
						}
						case oe.K:
						case aI.d:
						case _.a:
						case uo.b:
						case uo.c:
						case uo.a:
							return null;
						default:
							return e
					}
				},
				oI = r("./src/reddit/actions/tracing.ts");
			const dI = {
				traceId: void 0
			};
			var iI = (e = dI, t) => {
					switch (t.type) {
						case oI.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				uI = r("./src/lib/asyncActions/index.ts"),
				lI = r("./src/reddit/actions/reCaptchaEnterprise.ts");
			const pI = Object(uI.c)(lI.c.requestedActionType, lI.c.succeededActionType, lI.c.failedActionType),
				bI = Object(uI.c)(lI.a.requestedActionType, lI.a.succeededActionType, lI.a.failedActionType),
				fI = Object(uI.c)(lI.d.requestedActionType, lI.d.succeededActionType, lI.d.failedActionType);
			var yI = Object(c.c)({
					load: pI,
					execute: bI,
					send: fI
				}),
				EI = r("./src/reddit/actions/tracking.ts");
			const mI = {};
			var _I = (e = mI, t) => {
					switch (t.type) {
						case EI.a: {
							const {
								routeKey: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case EI.b: {
							const {
								routeKey: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				OI = Object(c.c)({
					reCaptchaEnterprise: yI,
					viewportDataLoaded: _I
				}),
				hI = r("./src/reddit/actions/trafficStats/constants.ts");
			var II = (e = !1, t) => {
				switch (t.type) {
					case hI.c:
						return !0;
					case hI.b:
					case hI.a:
						return !1;
					default:
						return e
				}
			};
			var SI = (e = null, t) => {
					switch (t.type) {
						case hI.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case hI.c:
							return null;
						default:
							return e
					}
				},
				gI = Object(c.c)({
					pending: II,
					trafficStats: SI
				});
			var DI = (e = null, t) => {
				switch (t.type) {
					case E.s:
					case E.t:
						return null;
					case E.q: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var TI = (e = !1, t) => {
					switch (t.type) {
						case E.s:
							return !0;
						case E.q:
						case E.t:
							return !1;
						default:
							return e
					}
				},
				vI = Object(c.c)({
					error: DI,
					pending: TI
				});
			var AI = (e = null, t) => {
				switch (t.type) {
					case E.r:
						return (t.payload ? t.payload.contentId : null) || null;
					case s.b:
					case E.t:
						return null;
					default:
						return e
				}
			};
			var jI = (e = "", t) => {
				switch (t.type) {
					case E.r:
						return (t.payload ? t.payload.recipient : "") || "";
					case E.t:
						return "";
					default:
						return e
				}
			};
			var wI = (e = null, t) => {
					switch (t.type) {
						case E.r:
							return t.payload && t.payload.publicAddress || null;
						case s.b:
						case E.t:
							return null;
						default:
							return e
					}
				},
				CI = Object(c.c)({
					api: vI,
					contentId: AI,
					initialRecipient: jI,
					publicAddress: wI
				}),
				RI = Object(c.c)({
					communityPoints: CI
				}),
				PI = r("./src/reddit/actions/search/trending.ts");
			const LI = [];
			var NI = (e = LI, t) => {
					switch (t.type) {
						case J.SUBREDDIT_LOADED:
						case PI.a: {
							const {
								items: r
							} = t.payload;
							return r || e
						}
						default:
							return e
					}
				},
				kI = Object(c.c)({
					models: NI
				});
			const UI = {};
			var xI = (e = UI, t) => {
					switch (t.type) {
						case xf.a: {
							const {
								trophies: r
							} = t.payload;
							return {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				MI = r("./src/reddit/actions/upload.ts"),
				FI = r("./src/reddit/models/Upload/index.ts");
			const GI = {};
			var BI = (e = GI, t) => {
				switch (t.type) {
					case MI.d: {
						const {
							key: r,
							id: s,
							file: n
						} = t.payload, a = e[r], c = a && a.file === n ? {
							...a.metadata
						} : {};
						return {
							...e,
							[r]: {
								key: r,
								id: s,
								file: n,
								metadata: c,
								url: void 0,
								status: FI.a.PENDING
							}
						}
					}
					case MI.h: {
						const {
							key: r
						} = t.payload, s = e[r];
						return {
							...e,
							[r]: {
								...s,
								status: FI.a.UPLOADING
							}
						}
					}
					case MI.c: {
						const {
							key: r,
							metadata: s
						} = t.payload, n = e[r];
						return {
							...e,
							[r]: {
								...n,
								metadata: s
							}
						}
					}
					case MI.e: {
						const {
							key: r,
							progress: s
						} = t.payload, n = e[r];
						return {
							...e,
							[r]: {
								...n,
								progress: s
							}
						}
					}
					case MI.g: {
						const {
							key: r,
							url: s
						} = t.payload, n = e[r];
						return {
							...e,
							[r]: {
								...n,
								status: FI.a.SUCCESS,
								url: s
							}
						}
					}
					case MI.b: {
						const {
							key: r,
							error: s
						} = t.payload, n = e[r];
						return {
							...e,
							[r]: {
								...n,
								status: FI.a.FAILED,
								error: s
							}
						}
					}
					case MI.a: {
						const {
							key: r
						} = t.payload, s = e[r];
						return {
							...e,
							[r]: {
								...s,
								status: FI.a.CANCELED
							}
						}
					}
					case MI.f: {
						const {
							key: r
						} = t.payload, s = e[r];
						return s.metadata.localUrl && window.URL.revokeObjectURL(s.metadata.localUrl), ks()(e, r)
					}
					default:
						return e
				}
			};
			const qI = {};
			var HI = (e = qI, t) => {
					switch (t.type) {
						case O.d:
						case E.a:
						case y.f:
						case E.t: {
							const {
								wallet: r
							} = t.payload;
							return function(e, t) {
								if (!t) return e;
								const {
									subredditId: r
								} = t, s = e[r] || {};
								return {
									...e,
									[r]: {
										latest: t,
										byDate: {
											...s.byDate || {},
											[t.at]: t
										}
									}
								}
							}(e, r)
						}
						case E.w: {
							const r = t.payload,
								s = {
									...e
								};
							return Object.keys(r).forEach(t => {
								const n = r[t],
									a = e[t],
									c = {
										latest: a ? a.latest.at <= n.at ? n : a.latest : n,
										byDate: {
											...a ? a.byDate : {},
											[n.at]: n
										}
									};
								s[t] = c
							}), s
						}
						default:
							return e
					}
				},
				KI = r("./src/reddit/actions/inbox.ts"),
				VI = r("./src/reddit/actions/pages/appeal/constants.ts"),
				WI = r("./src/reddit/actions/pages/userDataRequest/index.ts"),
				YI = r("./src/reddit/actions/sso/constants.ts");
			const $I = (e, t) => {
				if (!t || Vi()(e, t)) return e;
				const {
					awardeeKarma: r,
					awarderKarma: s,
					commentKarma: n,
					postKarma: a,
					totalKarma: c
				} = t, o = e ? e.awardeeKarma : 0, d = e ? e.awarderKarma : 0, i = r || o, u = s || d, l = c || i + u + a + n;
				return {
					...t,
					awardeeKarma: i,
					awarderKarma: u,
					totalKarma: l
				}
			};
			var QI = Object(bb.a)((e = null, t) => {
				switch (t.type) {
					case VI.a:
					case VI.b:
					case wy.b:
					case wy.c:
					case Nr.a:
					case Nr.b:
					case Nr.f:
					case Nr.h:
					case Nr.i:
					case Nr.j:
					case Pe.e:
					case Pe.h:
					case Pe.g:
					case Re.q:
					case Re.r:
					case Y.a:
					case Y.e:
					case Y.b:
					case Y.f:
					case we.a:
					case we.b:
					case Le.a:
					case Le.b:
					case J.SUBREDDIT_FAILED:
					case Qi.l:
					case $.b:
					case $.a:
					case $.e:
					case $.d:
					case X.c:
					case X.i:
					case ke.e:
					case ke.d:
					case ke.b:
					case ke.a:
					case Q.PROFILE_POSTS_LOADED:
					case Q.PROFILE_POSTS_FAILED:
					case J.SUBREDDIT_LOADED:
					case z.SEARCH_FAILED:
					case z.SEARCH_RESULTS_RECEIVED:
					case Ne.PAGE_LOADED:
					case Us.PAGE_LOADED:
					case Fe.a:
					case Fe.c:
					case Xh.a:
					case Xh.b:
					case _d.j:
					case WI.b:
					case Jh.c:
					case Jo.TOPIC_DATA_LOADED:
						return $I(e, t.payload.account);
					case Jh.n:
						return e ? {
							...e,
							email: t.payload
						} : e;
					case W.i:
					case W.f:
					case W.m:
					case W.p:
					case W.v:
					case W.h:
					case W.e:
					case W.l:
					case W.o:
					case W.u: {
						const {
							response: r
						} = t.payload;
						return r ? $I(e, r.account) : e
					}
					case Jh.a:
						return e ? {
							...e,
							seenLayoutSwitch: !0
						} : e;
					case s.d:
						return e ? {
							...e,
							seenRedesignModal: !0
						} : e;
					case _d.l:
					case _d.k: {
						const r = t.payload;
						return e && "profileIcon" === r.key ? {
							...e,
							accountIcon: r.imageUrl
						} : e
					}
					case oe.C:
					case oe.t: {
						const {
							coins: r
						} = t.payload;
						return e ? {
							...e,
							coins: r
						} : e
					}
					case oe.a: {
						const {
							userName: r,
							awarderKarma: s,
							awardeeKarma: n
						} = t.payload;
						if (r.toLowerCase() !== (e && Object(re.e)(e).toLowerCase())) return e;
						const a = n || (e ? e.awardeeKarma : 0) || 0,
							c = s || (e ? e.awarderKarma : 0) || 0,
							o = a + c + (e ? e.postKarma : 0) + (e ? e.commentKarma : 0);
						return e && {
							...e,
							awardeeKarma: a,
							awarderKarma: c,
							totalKarma: o
						}
					}
					case Ce.w: {
						const {
							coins: r
						} = t.payload;
						return r && e ? {
							...e,
							coins: r
						} : e
					}
					case Nu.f: {
						const {
							price: r
						} = t.payload;
						return (null == e ? void 0 : e.coins) && r ? {
							...e,
							coins: e.coins - r
						} : e
					}
					case KI.a: {
						const {
							inboxCount: r
						} = t.payload;
						return e ? {
							...e,
							inboxCount: r
						} : e
					}
					case YI.a: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...s, r]
						} : e
					}
					case YI.b: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: s.filter(e => e !== r)
						} : e
					}
					case Oo.c: {
						const {
							username: r
						} = t.payload;
						return e ? {
							...e,
							displayText: r,
							isNameEditable: !1,
							url: `/user/${r}`,
							username: r
						} : e
					}
					default:
						return e
				}
			}, null);
			var XI = (e = null, t) => {
				switch (t.type) {
					case Jh.m:
					case Jh.n:
						return null;
					case Jh.l:
						return t.payload;
					default:
						return e
				}
			};
			var zI = (e = !1, t) => {
					switch (t.type) {
						case Jh.m:
							return !0;
						case Jh.n:
						case Jh.l:
							return !1;
						default:
							return e
					}
				},
				JI = Object(c.c)({
					error: XI,
					pending: zI
				}),
				ZI = Object(c.c)({
					api: JI
				});
			var eS = (e = !1, t) => {
				switch (t.type) {
					case Jh.j:
						return !0;
					default:
						return e
				}
			};
			var tS = (e = !1, t) => {
					switch (t.type) {
						case Jh.i:
							return !0;
						case Jh.j:
						case Jh.h:
							return !1;
						default:
							return e
					}
				},
				rS = Object(c.c)({
					pending: tS,
					emailSent: eS
				}),
				sS = Object(c.c)({
					api: rS
				}),
				nS = Object(c.c)({
					changeEmail: ZI,
					sendResetEmail: sS
				}),
				aS = r("./src/reddit/models/WhitelistAndBlocked.ts");
			const cS = {};
			var oS = (e = cS, t) => {
				switch (t.type) {
					case St.f:
						return {
							...e, new: aS.a.pending
						};
					case St.d:
						return {
							...e, new: aS.a.error
						};
					case St.e:
						return {
							...e, new: aS.a.waitingForRequest
						};
					case St.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: aS.a.pending
						}
					}
					case St.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: aS.a.error
						}
					}
					case St.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: aS.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const dS = [];
			var iS = (e = dS, t) => {
					switch (t.type) {
						case St.e:
							return [t.payload, ...e];
						case St.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case _d.j:
							return t.payload.blockedUsers;
						default:
							return e
					}
				},
				uS = Object(c.c)({
					api: oS,
					data: iS
				}),
				lS = r("./src/reddit/actions/chat/constants.ts"),
				pS = r("./src/reddit/actions/chat/userSettings.ts");
			const bS = lS.a.anybody;
			var fS = (e = bS, t) => {
					switch (t.type) {
						case pS.a:
							if (t.payload) {
								const {
									invitePolicy: e
								} = t.payload;
								return e
							}
							return e;
						default:
							return e
					}
				},
				yS = Object(c.c)({
					invitePolicy: fS
				});
			const ES = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var mS = (e = null, t) => {
				switch (t.type) {
					case Ne.PAGE_LOADED: {
						const {
							drafts: r
						} = t.payload;
						return e && Vi()(e, r) ? e : {
							...e,
							...r
						}
					}
					case as.L: {
						const {
							response: {
								draftsCount: r
							}
						} = t.payload;
						return ES(e, r)
					}
					case Vr.e: {
						const {
							postDraftIds: r
						} = t.payload;
						return ES(e, r.length)
					}
					case Vr.c:
					case Vr.l: {
						const {
							draftsCount: r
						} = t.payload;
						return ES(e, r)
					}
					default:
						return e
				}
			};
			const _S = {};
			var OS = (e = _S, t) => {
					switch (t.type) {
						case qa.a: {
							const e = t.payload.experimentVariants;
							return hu(e)
						}
						default:
							return e
					}
				},
				hS = r("./src/reddit/actions/global/constants.ts");
			const IS = {};
			var SS = (e = IS, t) => {
					switch (t.type) {
						case hS.a: {
							const r = t.payload;
							return null === r.local_persisted_experiments_store || void 0 === r.local_persisted_experiments_store ? e : r.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				gS = Object(c.c)({
					byName: OS,
					localPersisted: SS
				}),
				DS = r("./src/reddit/actions/googleOneTap/index.ts");
			var TS = (e = !1, t) => {
				switch (t.type) {
					case DS.a:
						return !0;
					default:
						return e
				}
			};
			var vS = (e = !1, t) => {
				switch (t.type) {
					case _d.e:
						return !0;
					case _d.d:
						return !1;
					default:
						return e
				}
			};
			var AS = (e = "en", t) => {
				switch (t.type) {
					case _d.g:
						return t.payload;
					case _d.j:
						return "string" == typeof t.payload.language ? t.payload.language : e;
					default:
						return e
				}
			};
			const jS = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var wS = (e = jS, t) => {
					switch (t.type) {
						case Jh.b:
							return t.payload;
						default:
							return e
					}
				},
				CS = r("./src/reddit/actions/notifications/constants.ts"),
				RS = r("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var PS = (e = null, t) => {
				switch (t.type) {
					case RS.a:
					case RS.d:
					case CS.a:
						return t.payload && t.payload.error || null;
					case RS.c:
					case RS.f:
					case RS.a:
					case CS.c:
					case CS.b:
						return null;
					default:
						return e
				}
			};
			var LS = (e = !1, t) => {
				switch (t.type) {
					case CS.c:
						return !1;
					case CS.b:
						return !0;
					default:
						return e
				}
			};
			var NS = (e = !1, t) => {
					switch (t.type) {
						case CS.c:
							return !0;
						case CS.b:
						case CS.a:
							return !1;
						default:
							return e
					}
				},
				kS = Object(c.c)({
					error: PS,
					loaded: LS,
					pending: NS
				});
			var US = (e = null, t) => {
				switch (t.type) {
					case CS.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case CS.f:
					case CS.e:
						return null;
					default:
						return e
				}
			};
			var xS = (e = !1, t) => {
				switch (t.type) {
					case CS.f:
						return !1;
					case CS.e:
						return !0;
					default:
						return e
				}
			};
			var MS = (e = !1, t) => {
					switch (t.type) {
						case CS.f:
							return !0;
						case CS.e:
						case CS.d:
							return !1;
						default:
							return e
					}
				},
				FS = Object(c.c)({
					error: US,
					loaded: xS,
					pending: MS
				}),
				GS = Object(c.c)({
					getPreferences: kS,
					setPreferences: FS
				});
			const BS = {
				byId: {},
				allIds: []
			};
			var qS = (e = BS, t) => {
				switch (t.type) {
					case RS.b: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case RS.g: {
						const r = t.payload && t.payload.messageType;
						return {
							...e,
							byId: {
								...e.byId,
								[r]: {
									...e.byId[r],
									...t.payload
								}
							}
						}
					}
					default:
						return e
				}
			};
			const HS = {
				byId: {},
				allIds: []
			};
			var KS = (e = HS, t) => {
					switch (t.type) {
						case RS.b: {
							const {
								sections: r
							} = t.payload;
							return {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				VS = Object(c.c)({
					sections: KS,
					rows: qS
				}),
				WS = r("./src/lib/notifications/constants.ts");
			var YS = (e = !1, t) => {
				switch (t.type) {
					case WS.j:
						return !0;
					case WS.b:
					case WS.d:
					case WS.e:
						return !1;
					default:
						return e
				}
			};
			const $S = {
				broadcastFollower: !1,
				broadcastRecommendation: !1,
				chatMessages: !1,
				chatRequests: !1,
				commentReplies: !1,
				communityRecommendations: !1,
				liveEvent: !1,
				newPinnedPost: !1,
				postFlairAdded: !1,
				postReplies: !1,
				privateMessages: !1,
				threadReplies: !1,
				topLevelComment: !1,
				trendingPosts: !1,
				upvotedComments: !1,
				upvotedPosts: !1,
				userFlairAdded: !1,
				usernameMentions: !1,
				userNewFollowers: !1
			};
			var QS = (e = $S, t) => {
				switch (t.type) {
					case CS.b:
					case CS.f:
					case CS.d: {
						const {
							preferences: r
						} = t.payload;
						return sa()(r) ? e : r
					}
					default:
						return e
				}
			};
			const XS = {
				byId: {},
				allIds: []
			};
			var zS = (e = XS, t) => {
				switch (t.type) {
					case RS.e: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case RS.g: {
						const r = t.payload && t.payload.messageType;
						return {
							...e,
							byId: {
								...e.byId,
								[r]: {
									...e.byId[r],
									...t.payload
								}
							}
						}
					}
					default:
						return e
				}
			};
			const JS = {
				byId: {},
				allIds: []
			};
			var ZS = (e = JS, t) => {
					switch (t.type) {
						case RS.e: {
							const {
								sections: r
							} = t.payload;
							return {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				eg = Object(c.c)({
					sections: ZS,
					rows: zS
				}),
				tg = Object(c.c)({
					api: GS,
					emailSettingsLayout: VS,
					isNotificationPromptVisible: YS,
					preferences: QS,
					pushSettingsLayout: eg
				});
			const rg = {};
			var sg = (e = rg, t) => {
				switch (t.type) {
					case y.i:
					case f.i: {
						const {
							subredditId: r,
							userOwnedBadges: s
						} = t.payload, n = s.reduce((e, t) => (e[t] = !0, e), {});
						return {
							...e,
							[r]: {
								...e[r] || {},
								...n
							}
						}
					}
					case O.d: {
						const {
							userOwnedBadges: r,
							product: s
						} = t.payload, n = r.reduce((e, t) => (e[t] = !0, e), {});
						return {
							...e,
							[s.subredditId]: {
								...e[s.subredditId] || {},
								...n
							}
						}
					}
					default:
						return e
				}
			};
			const ng = {},
				ag = (e, t) => `${e}_${t||new Date}}`;
			var cg = (e = ng, t) => {
				switch (t.type) {
					case oe.tb: {
						const r = t.payload.powerups;
						if (r) {
							const {
								allocation: t
							} = r, s = (t || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
								...e,
								[ag(t.subredditInfo.id, t.allocatedAt)]: t
							}), {});
							return {
								...e,
								...s
							}
						}
						return e
					}
					case oe.T: {
						const {
							subredditId: r,
							powerupsCount: s,
							allocatedAt: n
						} = t.payload;
						if (s < 0) {
							const t = ag(r, n),
								a = e[t];
							if (a && a.isPremium) return {
								...e,
								[t]: {
									...a,
									powerups: a.powerups + s,
									isActive: !1,
									isDeallocationAllowed: !1
								}
							}
						}
						return e
					}
					case oe.O: {
						const {
							subredditId: r,
							allocatedAt: s
						} = t.payload, n = ag(r, s), a = e[n];
						return a && !a.isPremium ? {
							...e,
							[n]: {
								...a,
								isActive: !1,
								isDeallocationAllowed: !1
							}
						} : e
					}
					default:
						return e
				}
			};
			var og = (e = null, t) => {
				switch (t.type) {
					case oe.tb: {
						const r = t.payload.powerups;
						return r ? ks()({
							...e,
							...r
						}, "allocation") : e
					}
					case oe.ib: {
						const {
							userPowerups: r
						} = t.payload;
						return r ? ks()({
							...e,
							...r
						}, "allocation") : e
					}
					case oe.T: {
						const {
							powerupsCount: r
						} = t.payload;
						if (r < 0) {
							const t = Math.max((e.freeCount || 0) - r, 0);
							if (e) return {
								...e,
								freeCount: t
							}
						}
						return e
					}
					case oe.U: {
						const {
							powerupsCount: r
						} = t.payload;
						if (r > 0) {
							const t = Math.max((e.freeCount || 0) - r, 0);
							if (e) return {
								...e,
								freeCount: t
							}
						}
						return e
					}
					default:
						return e
				}
			};
			var dg = (e = !1, t) => {
					switch (t.type) {
						case oe.sb:
						case oe.ub:
							return !1;
						case oe.tb:
							return !0;
						default:
							return e
					}
				},
				ig = Object(c.c)({
					allocationByKey: cg,
					data: og,
					fetched: dg
				}),
				ug = r("./src/reddit/reducers/user/prefs/index.ts");
			var lg = (e = "", t) => {
					switch (t.type) {
						case Jh.d:
							return t.payload;
						default:
							return e
					}
				},
				pg = r("./src/reddit/actions/session.ts");
			var bg = (e = null, t) => {
				switch (t.type) {
					case pg.a:
					case pg.b:
					case pg.c:
					case pg.e:
						return t.payload;
					case pg.d:
						return null;
					default:
						return e
				}
			};
			var fg = (e = !1, t) => {
				switch (t.type) {
					case pg.f:
						return !0;
					default:
						return e
				}
			};
			var yg = (e = "", t) => {
				switch (t.type) {
					case Jh.k:
						return t.payload;
					default:
						return e
				}
			};
			var Eg = (e = null, t) => {
				switch (t.type) {
					case qa.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var mg = (e = null, t) => {
					switch (t.type) {
						case qa.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				_g = Object(c.c)({
					isEmployee: Eg,
					isLoggedIn: mg
				});
			var Og = (e = null, t) => {
					switch (t.type) {
						case _d.r: {
							const {
								topContentDismissal: r
							} = t.payload;
							return e && Vi()(e, r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				hg = r("./src/reddit/actions/userWhitelist.ts");
			const Ig = {};
			var Sg = (e = Ig, t) => {
				switch (t.type) {
					case hg.e:
						return {
							...e, new: aS.a.pending
						};
					case hg.d:
						return {
							...e, new: aS.a.error
						};
					case hg.f:
						return {
							...e, new: aS.a.waitingForRequest
						};
					case hg.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: aS.a.pending
						}
					}
					case hg.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: aS.a.error
						}
					}
					case hg.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: aS.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const gg = [];
			var Dg = (e = gg, t) => {
					switch (t.type) {
						case hg.f:
							return [t.payload, ...e];
						case hg.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case _d.j:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				Tg = Object(c.c)({
					api: Sg,
					data: Dg
				}),
				vg = Object(c.c)({
					account: QI,
					accountSettings: nS,
					blocked: uS,
					chatSettings: yS,
					drafts: mS,
					experiments: gS,
					googleOneTapEnabled: TS,
					isCustomizeFlyoutShowing: vS,
					topContentDismissalPrefsSet: Og,
					language: AS,
					loid: wS,
					notificationPrefs: tg,
					ownedBadges: sg,
					powerups: ig,
					prefs: ug.d,
					reddaid: lg,
					session: bg,
					sessionRefreshFailed: fg,
					sessionTracker: yg,
					temporaryGQL: _g,
					wallets: HI,
					whitelist: Tg
				});
			var Ag = (e = null, t) => {
				switch (t.type) {
					case WI.a:
						return t.payload || null;
					case WI.b:
					case WI.c:
						return null;
					default:
						return e
				}
			};
			var jg = (e = !1, t) => {
				switch (t.type) {
					case WI.c:
						return !0;
					case WI.b:
					case WI.a:
						return !1;
					default:
						return e
				}
			};
			var wg = (e = !1, t) => {
				switch (t.type) {
					case WI.b:
						return !0;
					case WI.a:
					case WI.c:
						return !1;
					default:
						return e
				}
			};
			var Cg = (e = !1, t) => {
					switch (t.type) {
						case WI.b:
							return t.payload.userDataExportEligibility;
						case WI.a:
						case WI.c:
							return !1;
						default:
							return e
					}
				},
				Rg = Object(c.c)({
					error: Ag,
					pending: jg,
					success: wg,
					userDataExportEligibility: Cg
				}),
				Pg = Object(c.c)({
					userDataRequestPageApi: Rg
				});
			const Lg = {};
			var Ng = (e = Lg, t) => {
				switch (t.type) {
					case Jh.g:
					case Jh.f: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case Jh.e: {
						const {
							username: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: s
						}
					}
					default:
						return e
				}
			};
			var kg = (e = !1, t) => {
					switch (t.type) {
						case Jh.g:
							return !0;
						case Jh.f:
						case Jh.e:
							return !1;
						default:
							return e
					}
				},
				Ug = Object(c.c)({
					error: Ng,
					pending: kg
				});
			const xg = {};
			var Mg = (e = xg, t) => {
				switch (t.type) {
					case f.f: {
						const {
							subredditId: r,
							usersAppliedBadges: s
						} = t.payload, n = Object.keys(s).reduce((t, n) => {
							const a = s[n];
							return t[n] = {
								...e[n] || {},
								[r]: a
							}, t
						}, {});
						return {
							...e,
							...n
						}
					}
					case f.b: {
						const {
							badgeIds: r,
							subredditId: s,
							userId: n
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[s]: r
							}
						}
					}
					case f.a: {
						const {
							previousBadgeIds: r,
							subredditId: s,
							userId: n
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[s]: r
							}
						}
					}
					case y.a: {
						const {
							badge: r,
							currentAppliedBadges: s,
							placement: n,
							subredditId: a,
							userId: c
						} = t.payload, o = s.filter(e => e.placement !== n).concat(r).filter(Boolean).map(e => e.id);
						return {
							...e,
							[c]: {
								...e[c] || {},
								[a]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Fg = {},
				Gg = (e, t) => {
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					return r.forEach(r => {
						const n = e[r],
							a = t[r];
						n && Vi()(n, a) || (s[r.toLowerCase()] = a)
					}), Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var Bg = (e = Fg, t) => {
					switch (t.type) {
						case Jh.f: {
							const {
								data: r
							} = t.payload;
							return Gg(e, r)
						}
						case Qi.k: {
							const {
								user: r
							} = t.payload;
							return Gg(e, {
								[r.username]: r
							})
						}
						case oe.t: {
							const {
								gildee: r
							} = t.payload;
							if (!r) return e;
							const s = e[r.toLowerCase()];
							if (!s) return e;
							const n = s.awardedLastMonth,
								a = n ? n.totalCount + 1 : 1,
								c = n && n.topAward;
							return c ? Gg(e, {
								[r.toLowerCase()]: {
									...s,
									awardedLastMonth: {
										totalCount: a,
										topAward: c
									}
								}
							}) : e
						}
						case oe.a: {
							const {
								userName: r,
								awardeeKarma: s,
								awarderKarma: n
							} = t.payload, a = e[r.toLowerCase()];
							if (!a) return e;
							const c = s || a.awardeeKarma,
								o = n || a.awarderKarma;
							return Gg(e, {
								[r.toLowerCase()]: {
									...a,
									awardeeKarma: c,
									awarderKarma: o,
									totalKarma: c + o + a.postKarma + a.commentKarma
								}
							})
						}
						case _d.l:
						case _d.k: {
							const {
								imageUrl: r,
								key: s,
								username: n
							} = t.payload;
							if ("profileIcon" !== s) return e;
							const a = n.toLowerCase(),
								c = e[a];
							return c ? Gg(e, {
								[a]: {
									...c,
									accountIcon: r
								}
							}) : e
						}
						default:
							return e
					}
				},
				qg = r("./src/reddit/actions/usernameAvailable.ts");
			const Hg = {};
			var Kg = (e = Hg, t) => {
				switch (t.type) {
					case qg.a: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: qg.b.Available
						}
					}
					case qg.c: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: qg.b.Error
						}
					}
					case qg.d: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: qg.b.Pending
						}
					}
					case qg.e: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: qg.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			const Vg = {};
			var Wg = (e = Vg, t) => {
				switch (t.type) {
					case oe.Z: {
						const {
							userId: r,
							supportedSubreddits: s
						} = t.payload, n = {
							[r]: s
						};
						return {
							...e,
							...n
						}
					}
					default:
						return e
				}
			};
			var Yg = (e = !1, t) => {
					switch (t.type) {
						case oe.Y:
						case oe.ab:
							return !1;
						case oe.Z:
							return !0;
						default:
							return e
					}
				},
				$g = Object(c.c)({
					allocationByKey: Wg,
					fetched: Yg
				});
			var Qg = (e = null, t) => {
				switch (t.type) {
					case oe.ob:
						return t.payload;
					case oe.qb:
					case oe.pb:
						return null;
					default:
						return e
				}
			};
			var Xg = (e = !1, t) => {
					switch (t.type) {
						case oe.pb:
						case oe.ob:
							return !1;
						case oe.qb:
							return !0;
						default:
							return e
					}
				},
				zg = Object(c.c)({
					error: Qg,
					pending: Xg
				});
			var Jg = (e = null, t) => {
				switch (t.type) {
					case oe.rb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const Zg = {};
			var eD = (e = Zg, t) => {
				switch (t.type) {
					case oe.pb: {
						const {
							postId: r,
							currentRank: s
						} = t.payload;
						return s ? {
							...e,
							[r]: s
						} : e
					}
					default:
						return e
				}
			};
			const tD = {};
			var rD = (e = tD, t) => {
					switch (t.type) {
						case oe.pb: {
							const {
								postId: r,
								topAwardersRank: s
							} = t.payload;
							return {
								...e,
								[r]: (s || []).sort((e, t) => e.rank - t.rank)
							}
						}
						case oe.t: {
							const {
								id: r
							} = t.payload;
							return ks()(e, [r])
						}
						default:
							return e
					}
				},
				sD = Object(c.c)({
					api: zg,
					currentPostId: Jg,
					currentRank: eD,
					list: rD
				}),
				nD = Object(c.c)({
					api: Ug,
					appliedBadges: Mg,
					models: Bg,
					nameAvailable: Kg,
					topAwarders: sD,
					powerups: $g
				});
			const aD = {};
			var cD = (e = aD, t) => {
					switch (t.type) {
						case Y.b:
						case Y.f:
						case J.SUBREDDIT_LOADED:
						case ee.i:
						case z.SEARCH_RESULTS_RECEIVED:
						case Ne.PAGE_LOADED:
						case Us.PAGE_LOADED: {
							const {
								structuredStyles: r
							} = t.payload;
							if (!(r && r.data && r.data.content)) return e;
							const s = r.data.content.widgets.layout.idCardWidget,
								n = Object.keys(t.payload.subredditAboutInfo || {});
							if (1 !== n.length) return e;
							const a = n[0];
							return {
								...e,
								[a]: s
							}
						}
						default:
							return e
					}
				},
				oD = r("./src/reddit/actions/widgets/constants.ts");
			const dD = {};
			var iD = (e = dD, t) => {
					switch (t.type) {
						case Y.b:
						case Y.f:
						case z.SEARCH_RESULTS_RECEIVED:
						case ee.i:
						case J.SUBREDDIT_LOADED:
						case Ne.PAGE_LOADED: {
							const {
								structuredStyles: r
							} = t.payload;
							if (!(r && r.data && r.data.content)) return e;
							const s = r.data.content.widgets.items,
								n = r.data.content.widgets.layout.topbar.order.filter(e => s[e] && "menu" === s[e].kind);
							if (!n.length) return e;
							const a = Object.keys(t.payload.subredditAboutInfo || {});
							if (1 !== a.length) return e;
							const c = a[0];
							return {
								...e,
								[c]: n[0]
							}
						}
						case oD.g: {
							const r = t.payload;
							return "menu" !== r.widget.kind ? e : {
								...e,
								[r.subredditId]: r.widgetId
							}
						}
						case oD.h: {
							const r = t.payload;
							return e[r.subredditId] === r.widgetId ? {
								...e,
								[r.subredditId]: null
							} : e
						}
						default:
							return e
					}
				},
				uD = r("./src/reddit/models/Widgets/index.ts");
			const lD = {};
			var pD = (e = lD, t) => {
				switch (t.type) {
					case J.SUBREDDIT_LOADED: {
						const r = t.payload,
							s = r.structuredStyles && r.structuredStyles.data && r.structuredStyles.data.content;
						if (!s) return e;
						const n = s.widgets;
						return {
							...e,
							...n.items
						}
					}
					case oD.b: {
						const r = t.payload;
						return {
							...e,
							...r.widgets.items
						}
					}
					case I.k: {
						const t = {
							...e
						};
						return Object.keys(t).forEach(e => {
							t[e] = {
								...t[e],
								styles: Object(uD.m)()
							}
						}), t
					}
					case oD.e: {
						const r = t.payload;
						return {
							...e,
							...r.widgets.items
						}
					}
					case oD.i:
					case oD.g: {
						const r = t.payload;
						return {
							...e,
							[r.widget.id]: r.widget
						}
					}
					case oD.h: {
						const r = t.payload,
							s = {
								...e
							};
						return delete s[r.widgetId], s
					}
					case Y.b:
					case Y.f:
					case J.SUBREDDIT_LOADED:
					case ee.i:
					case z.SEARCH_RESULTS_RECEIVED:
					case Ne.PAGE_LOADED:
					case Us.PAGE_LOADED: {
						const {
							structuredStyles: r
						} = t.payload;
						if (!(r && r.data && r.data.content)) return e;
						const s = r.data.content.widgets;
						return {
							...e,
							...s.items
						}
					}
					case Ji.h: {
						const {
							userIsSubscriber: r,
							nameIdentifiers: s,
							widgetId: n
						} = t.payload;
						if (!n || !e[n] || "community-list" !== e[n].kind) return {
							...e
						};
						const a = r,
							c = e[n],
							o = c.data.map(e => {
								const t = {
									...e
								};
								return s.some(e => e.name === t.name) && (t.isSubscribed = a), t
							});
						return {
							...e,
							[n]: {
								...c,
								data: o
							}
						}
					}
					case Ym.f: {
						const {
							settings: r,
							idCardWidgetId: s
						} = t.payload;
						return s && e[s] && "publicDescription" in r && r.publicDescription !== e[s].description ? {
							...e,
							[s]: {
								...e[s],
								description: r.publicDescription || ""
							}
						} : e
					}
					default:
						return e
				}
			};
			const bD = {};
			var fD = (e = bD, t) => {
				switch (t.type) {
					case J.SUBREDDIT_LOADED:
					case Y.f:
					case ee.i:
					case Ne.PAGE_LOADED: {
						const {
							structuredStyles: r
						} = t.payload;
						if (!(r && r.data && r.data.content)) return e;
						const s = r.data.content.widgets.layout.moderatorWidget,
							n = Object.keys(t.payload.subredditAboutInfo || {});
						if (1 !== n.length) return e;
						const a = n[0];
						return {
							...e,
							[a]: s
						}
					}
					default:
						return e
				}
			};
			const yD = {};
			var ED = (e = yD, t) => {
				switch (t.type) {
					case J.SUBREDDIT_LOADED:
					case Ne.PAGE_LOADED:
					case Us.PAGE_LOADED: {
						const r = t.payload,
							s = r.structuredStyles && r.structuredStyles.data && r.structuredStyles.data.content;
						if (!s) return e;
						const n = Object.keys(r.subredditAboutInfo || {});
						if (1 !== n.length) return e;
						const a = n[0],
							c = s.widgets.layout.sidebar.order;
						return {
							...e,
							[a]: c
						}
					}
					case oD.e:
					case oD.b: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: r.widgets.layout.sidebar.order
						}
					}
					case oD.f: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: r.widgetIds
						}
					}
					case oD.g: {
						const r = t.payload;
						if ("menu" === r.widget.kind) return e;
						if (!e[r.subredditId]) return {
							...e,
							[r.subredditId]: [r.widgetId]
						};
						const s = e[r.subredditId].concat(r.widgetId);
						return {
							...e,
							[r.subredditId]: s
						}
					}
					case oD.h: {
						const r = t.payload;
						if (!e[r.subredditId]) return e;
						const s = e[r.subredditId].filter(e => e !== r.widgetId);
						return {
							...e,
							[r.subredditId]: s
						}
					}
					case Y.b:
					case Y.f:
					case J.SUBREDDIT_LOADED:
					case z.SEARCH_RESULTS_RECEIVED:
					case ee.i:
					case Ne.PAGE_LOADED:
					case Us.PAGE_LOADED: {
						const {
							structuredStyles: r
						} = t.payload;
						if (!(r && r.data && r.data.content)) return e;
						const s = r.data.content.widgets.layout.sidebar.order,
							n = Object.keys(t.payload.subredditAboutInfo || {});
						if (1 !== n.length) return e;
						const a = n[0];
						return {
							...e,
							[a]: s
						}
					}
					default:
						return e
				}
			};
			const mD = {
				accountManagerModalData: a,
				actionBarCountAnimation: p,
				activeModal: g,
				ads: j,
				apiRequestState: R,
				appBadges: M,
				authorFlair: ce,
				awards: Ze,
				badges: bt,
				blockedRedditors: It,
				blockUser: jt,
				brandSafety: Ct,
				chat: ur,
				claimGold: _r,
				commentsListTruncated: hr,
				communityFlairs: gr,
				contentControls: Lr,
				contentGate: Ur,
				continueThreads: Fr,
				creations: Yn,
				dashboard: Xn,
				discoveryUnits: la,
				dismissedTruncationList: fa,
				economics: La,
				emojis: Ba,
				experimentOverrides: Wa,
				externalAccount: Ic,
				featureFlags: jc,
				focusedVerticals: Bc,
				fontFiles: Hc,
				gild: ro,
				header: po,
				htmlResponseStreaming: bo,
				imageUploads: Eo,
				interceptedAction: _o,
				isChangeUsernameTooltipShowing: ho,
				isEmailVerificationTooltipShowing: So,
				isModeratorWithPostPerms: Do,
				jsApi: Ao,
				leaderboard: Uo,
				listings: vd,
				live: Rd,
				mediaGalleries: xd,
				mediaPlayback: Gd,
				meta: Hd,
				moderatingSubreddits: Wd,
				moderationPromptId: Yd,
				modListingPage: ei,
				modModeEnabled: ri,
				moreComments: li,
				multireddits: nu,
				notificationBannerId: cu,
				notificationsInbox: yu,
				nps: _u,
				page: Du,
				platform: Au,
				postCollection: rl,
				polls: Ku,
				postFlair: dl,
				posts: pb,
				postStickiedComments: Eb,
				givePremium: oo,
				products: Rb,
				profileCommentsPage: Wb,
				profilePrivatePage: df,
				profileModSettingsPage: Xb,
				profilePostsPage: Jb,
				profiles: qf,
				promos: Yf,
				publicAccessNetwork: vy,
				recommendations: jy,
				reportPage: My,
				reportRules: By,
				requestHost: qy,
				runTimeEnvVars: Ky,
				search: rE,
				searchDiscoveryUnits: uE,
				seo: _E,
				shortcuts: jE,
				sidebarPromotedPosts: RE,
				streaming: FE,
				structuredStyles: nm,
				stylesheets: am,
				subredditAutocomplete: fm,
				subreddits: WO,
				subredditStickyPosts: QO,
				subscriptions: mh,
				survey: gh,
				tabBadged: Th,
				tags: Qh,
				themes: tI,
				toaster: nI,
				tooltipId: cI,
				tracing: iI,
				tracking: OI,
				trafficStats: gI,
				transfers: RI,
				trending: kI,
				trophies: xI,
				uploads: BI,
				user: vg,
				userDataRequestPage: Pg,
				users: nD,
				widgets: Object(c.c)({
					idCardIds: cD,
					menuIds: iD,
					models: pD,
					moderatorIds: fD,
					sidebar: ED
				})
			}
		},
		"./src/reddit/selectors/appBadges.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "a", (function() {
				return b
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "h", (function() {
				return y
			})), r.d(t, "k", (function() {
				return E
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "c", (function() {
				return _
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/selectors/chat.ts"),
				a = r("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				c = r("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const d = e => e.appBadges.badges,
				i = Object(s.a)(a.a, d, n.a, (e, t, r) => e ? t && t.directMessages && t.directMessages.count || 0 : r),
				u = Object(s.a)(d, e => e && e.chatRooms && e.chatRooms.count || 0),
				l = Object(s.a)(d, e => e && e.chatRoomMentions && e.chatRoomMentions.count || 0),
				p = Object(s.a)(a.a, n.a, i, u, l, (e, t, r, s, n) => {
					if (e) {
						return r + s + n > 0
					}
					return t > 0
				}),
				b = Object(s.a)(d, e => e && e.activityTab && e.activityTab.count || 0),
				f = Object(s.a)(d, e => e && e.messageTab && e.messageTab.count || 0),
				y = Object(s.a)(b, f, (e, t) => e + t),
				E = Object(s.a)(i, f, (e, t) => e + t),
				m = Object(s.a)(i, y, (e, t) => e + t),
				_ = Object(s.a)(o.K, a.a, m, E, f, o.F, i, n.a, c.d, (e, t, r, s, n, a, c, o, d) => {
					if (!e) return 0;
					const i = () => {
						return {
							inboxCount: t ? n : a || 0,
							basicChannelCount: t ? c : o || 0
						}
					};
					let u = 0;
					return u = t ? d ? r : s : (() => {
						const {
							inboxCount: e,
							basicChannelCount: t
						} = i();
						return e + t
					})()
				})
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			}));
			const s = e => e.blockedRedditors.api.pending,
				n = e => e.blockedRedditors.list,
				a = (e, t) => {
					const r = (e => {
						const t = n(e);
						return t && t.ids
					})(e);
					return !!r && r.includes(t)
				}
		},
		"./src/reddit/selectors/chat.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "c", (function() {
				return i
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				a = r("./src/reddit/selectors/moderatorPermissions.ts");
			const c = e => e.chat.unread.count,
				o = Object(s.a)(c, e => e.basicChannelCount),
				d = (Object(s.a)(c, e => e.subredditChannelCount), e => !(e.chat.isInited || e.chat.unread.api.pending)),
				i = (e, t) => {
					const {
						chatConfig: r
					} = n.c;
					return Object(a.a)(r)(e, t)
				}
		},
		"./src/reddit/selectors/chatSettingsPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/reddit/models/ChatSettingsPage/index.ts");
			const n = (e, {
					subredditId: t
				}) => !!e.chat.subredditSettingsPage.api.fetch.pending[t],
				a = (e, {
					subredditId: t
				}) => {
					return (e.chat.subredditSettingsPage.models[t] || []).filter(e => e && e.settingType !== s.a.Unknown)
				}
		},
		"./src/reddit/selectors/claimgold.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			const s = e => e.claimGold.code,
				n = e => e.claimGold.showModal
		},
		"./src/reddit/selectors/emojis.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return u
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "a", (function() {
				return m
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/values.js"),
				n = r.n(s),
				a = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/models/Flair/index.ts"),
				o = r("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				d = r("./src/reddit/selectors/subreddit.ts");
			const i = [],
				u = e => e.emojis.models,
				l = Object(a.a)(u, (e, t) => t.subredditId, (e, t) => {
					const r = e[t];
					return r ? [...n()(r.emojis), ...n()(r.snoomojis)] : i
				}),
				p = Object(a.a)(l, o.a, (e, t) => t.isFlairModOnly, (e, t) => t.flairTemplateType, (e, t, r, s) => e.filter(e => !(e.modFlairOnly && !t || e.modFlairOnly && !r) && (!(!e.userFlairAllowed && s === c.d.UserFlair) && !(!e.postFlairAllowed && s === c.d.LinkFlair)))),
				b = Object(a.a)(u, (e, t) => t.subredditId, (e, t) => Object.keys(e[t].snoomojis)),
				f = (e, t) => Object(d.x)(e, {
					subredditName: t
				}).emojisEnabled,
				y = {
					emojis: {},
					snoomojis: {}
				},
				E = (e, {
					subredditId: t
				}) => u(e)[t] || y,
				m = (e, t) => !!e.emojis.api.list.pending[t]
		},
		"./src/reddit/selectors/experiments/googleOneTap.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "a", (function() {
				return f
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/helpers/chooseVariant/index.ts"),
				c = r("./src/reddit/selectors/meta.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const d = Object(s.a)(c.c, e => !e),
				i = Object(s.a)(e => Object(a.c)(e, {
					experimentEligibilitySelector: e => d(e),
					experimentName: n.N,
					expEventOverride: !1
				}), e => e),
				u = e => e === n.G.Onetap,
				l = e => e === n.G.OnetapAuto,
				p = e => e.user.googleOneTapEnabled,
				b = Object(s.a)(o.K, i, (e, t) => !e && !!t),
				f = Object(s.a)(o.K, i, (e, t) => !e && !!t && !Object(n.wd)(t))
		},
		"./src/reddit/selectors/experiments/inboxAppBadgingGql.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/helpers/chooseVariant/index.ts"),
				c = r("./src/reddit/selectors/experiments/utils.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const d = Object(s.a)(e => Object(a.c)(e, {
					experimentName: n.Xb,
					experimentEligibilitySelector: i
				}), c.a),
				i = e => Object(o.J)(e) || Object(o.K)(e),
				u = Object(s.a)(d, e => e === n.dc.Enabled)
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return u
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "e", (function() {
				return m
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/helpers/chooseVariant/index.ts"),
				c = r("./src/reddit/selectors/experiments/utils.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const d = Object(s.a)(e => Object(a.c)(e, {
					experimentName: n.ac,
					experimentEligibilitySelector: i
				}), c.a),
				i = e => Object(o.J)(e) || Object(o.K)(e),
				u = Object(s.a)(d, e => e === n.gc.Redesign),
				l = Object(s.a)(e => Object(a.c)(e, {
					experimentName: n.Zb,
					experimentEligibilitySelector: i
				}), c.a),
				p = Object(s.a)(l, e => e === n.fc.Enabled),
				b = Object(s.a)(e => Object(a.c)(e, {
					experimentName: n.Yb,
					experimentEligibilitySelector: i
				}), c.a),
				f = Object(s.a)(b, e => e === n.ec.Enabled),
				y = Object(s.a)(e => Object(a.c)(e, {
					experimentName: n.R,
					experimentEligibilitySelector: i
				}), c.a),
				E = Object(s.a)(y, e => e === n.ab.NoOverflow),
				m = Object(s.a)(y, e => e === n.ab.UndoBar)
		},
		"./src/reddit/selectors/inFeedChaining.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return b
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "b", (function() {
				return O
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeListingKey/index.ts"),
				c = r("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				o = r("./src/reddit/constants/inFeedChaining.ts"),
				d = r("./src/reddit/models/DiscoveryUnit/index.ts"),
				i = r("./src/reddit/selectors/discoveryUnit.ts"),
				u = r("./src/reddit/selectors/posts.ts"),
				l = r("./src/reddit/selectors/subreddit.ts");
			const p = [],
				b = (e, t) => {
					const r = e.posts.chained.idToListingKey[t.postId];
					return t.listingKey === r
				},
				f = (e, t) => {
					const r = e.posts.chained.dismissedIdToListingKey[t.postId];
					return (e => e.posts.chained.dismissed)(e) || t.listingKey === r
				},
				y = Object(s.a)(e => e.posts.chained.idToListingKey, e => Object.keys(e).filter(t => e[t])),
				E = (e, {
					subredditId: t
				}) => {
					return y(e).some(r => {
						const s = Object(u.P)(e, {
							postId: r
						});
						return !!s && s.id === t
					})
				},
				m = (e, {
					subredditName: t
				}) => {
					const r = n.Ub.DAY.toUpperCase(),
						s = Object(a.a)(t, n.P.TOP, {
							t: r
						}),
						c = Object(u.w)(e, {
							listingKey: s
						});
					if (0 !== c.length)
						for (const n of c) {
							const t = Object(u.D)(e, {
								postId: n
							});
							if (t && !t.hidden && !t.isSponsored) return t
						}
				},
				_ = (e, {
					postId: t
				}) => {
					const r = ((e, {
							postId: t
						}) => {
							const r = Object(u.D)(e, {
								postId: t
							});
							if (!r) return p;
							const s = Object(c.a)({
								subredditIds: [r.belongsTo.id],
								count: o.b
							});
							return Object(l.v)(e, {
								key: s
							})
						})(e, {
							postId: t
						}),
						s = [];
					for (const {
							name: n
						} of r) {
						const t = m(e, {
							subredditName: n
						});
						t && s.push(t.id)
					}
					return s
				},
				O = (e, {
					listingName: t
				}) => {
					const r = d.b;
					return Object(i.c)(e, {
						unitName: r
					})
				}
		},
		"./src/reddit/selectors/scheduledPosts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return c
			})), r.d(t, "g", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "j", (function() {
				return u
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "q", (function() {
				return f
			})), r.d(t, "l", (function() {
				return y
			})), r.d(t, "p", (function() {
				return m
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "r", (function() {
				return h
			})), r.d(t, "m", (function() {
				return I
			})), r.d(t, "n", (function() {
				return S
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "e", (function() {
				return D
			})), r.d(t, "o", (function() {
				return T
			})), r.d(t, "b", (function() {
				return v
			}));
			var s = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				n = r("./src/reddit/models/Flair/index.ts"),
				a = r("./src/reddit/models/ScheduledPost/index.ts");
			const c = (e, {
					subredditId: t
				}) => ((e, {
					subredditId: t,
					type: r
				}) => !!e.posts.scheduledPosts[r].models[t])(e, {
					subredditId: t,
					type: a.f.standalonePosts
				}),
				o = (e, {
					subredditId: t,
					type: r
				}) => !!e.posts.scheduledPosts[r].pageInfo[t] && e.posts.scheduledPosts[r].pageInfo[t].hasNextPage,
				d = (e, {
					subredditId: t,
					type: r
				}) => e.posts.scheduledPosts[r].pageInfo[t] ? e.posts.scheduledPosts[r].pageInfo[t].endCursor : null,
				i = e => e.posts.scheduledPosts.api.pending,
				u = e => e.posts.scheduledPosts.api.pendingUpdate,
				l = e => e.posts.scheduledPosts.api.error,
				p = {},
				b = [],
				f = (e, {
					subredditId: t
				}) => (e.posts.scheduledPosts.standalonePosts.postOrder[t] || b).filter(r => !!(e.posts.scheduledPosts.standalonePosts.models[t] || p)[r]).map(r => e.posts.scheduledPosts.standalonePosts.models[t][r]),
				y = (e, {
					subredditId: t
				}) => (e.posts.scheduledPosts.recurringPosts.postOrder[t] || b).filter(r => !!(e.posts.scheduledPosts.recurringPosts.models[t] || p)[r]).map(r => e.posts.scheduledPosts.recurringPosts.models[t][r]),
				E = (e, {
					subredditId: t,
					scheduledPostId: r,
					type: s
				}) => {
					return (e.posts.scheduledPosts[s].models[t] || p)[r] || void 0
				},
				m = (e, {
					subredditId: t,
					scheduledPostId: r
				}) => E(e, {
					subredditId: t,
					scheduledPostId: r,
					type: a.f.standalonePosts
				}),
				_ = (e, {
					subredditId: t,
					scheduledPostId: r
				}) => {
					const s = E(e, {
						subredditId: t,
						scheduledPostId: r,
						type: a.f.recurringPosts
					});
					return s || s
				},
				O = (e, {
					subredditId: t,
					scheduledPostId: r
				}) => m(e, {
					subredditId: t,
					scheduledPostId: r
				}) || _(e, {
					subredditId: t,
					scheduledPostId: r
				}),
				h = e => e.creations.formData.scheduledPostId,
				I = ({
					scheduledPost: e
				}) => (({
					flair: e,
					isNsfw: t,
					isSpoiler: r,
					isOriginalContent: a
				}) => {
					const c = [];
					return a && c.push({
						text: "OC",
						type: n.f.Oc
					}), e && c.push(...Object(s.b)(e)), r && c.push({
						text: "spoiler",
						type: n.f.Spoiler
					}), t && c.push({
						text: "nsfw",
						type: n.f.Nsfw
					}), c
				})(e),
				S = ({
					scheduledPost: e
				}) => {
					const t = I({
							scheduledPost: e
						}),
						r = t.find(e => e.type === n.f.Richtext);
					return r || (t.find(e => e.type === n.f.Text) || null)
				},
				g = e => e.posts.scheduledPosts[a.f.recurringPosts].editModal.scheduledPostId,
				D = e => e.posts.scheduledPosts[a.f.recurringPosts].editModal.subredditId,
				T = e => e.posts.scheduledPosts.api.pendingUpdate,
				v = e => e.posts.scheduledPosts.api.creationToken
		},
		"./src/reddit/selectors/userDataRequest.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			const s = e => e.userDataRequestPage.userDataRequestPageApi.userDataExportEligibility,
				n = e => e.userDataRequestPage.userDataRequestPageApi
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.6db1d1f4b12da96bc456.js.map