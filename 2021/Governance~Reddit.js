// https://www.redditstatic.com/desktop2x/Governance~Reddit.69dac4c4f272432e593b.js
// Retrieved at 12/8/2021, 3:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit", "reddit-components-BlankPost"], {
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

				function m(t, r) {
					e.removeEventListener ? e.removeEventListener(t, r) : e.detachEvent && e.detachEvent("on" + t, r)
				}

				function O(e) {
					return /\*/.test(e)
				}
				var h = t.postMessage = function(e, t, r) {
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
					E = t.receiveMessage = function(e, t, r, s) {
						"string" == typeof e && (s = r, r = t, t = e, e = null), s = s || void 0;
						var n = function(t) {
							for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), c = 1; c < n; c++) a[c - 1] = arguments[c];
							e && e !== t.source && e.contentWindow !== t.source || r.apply(s, [t].concat(a))
						};
						return y(t, n), {
							off: function() {
								m(t, n)
							}
						}
					},
					_ = (t.receiveMessageOnce = function(e, t, s, n) {
						var a = E(e, t, (function() {
							s && s.apply(void 0, r), a.off()
						}), n);
						return a
					}, t.removePostMessageOrigin = function(e) {
						var t = i.indexOf(e); - 1 !== t && (i.splice(t, 1), u = d(i))
					}),
					I = e.CustomEvent;
				if ("undefined" != typeof window && "function" != typeof I) {
					var g = {
						bubbles: !1,
						cancelable: !1,
						detail: void 0
					};
					(I = function(e, t) {
						t = t || g;
						var r = document.createEvent("CustomEvent");
						return r.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), r
					}).prototype = e.Event.prototype
				}
				t.addPostMessageOrigin = function(e) {
					O(e) ? i = [s] : -1 === i.indexOf(e) && (_(s), i.push(e), u = d(i))
				};

				function S(t) {
					if (t.origin === e.location.origin || u.test(t.origin) || "null" === t.origin) {
						var r = {};
						try {
							r = JSON.parse(t.data)
						} catch (t) {}
						var s = r.type;
						if (p.test(s)) {
							var n = s.split(".", 2)[1];
							if (b[n]) b[n].targets.forEach((function(e) {
								return h(e, s, r.data, r.options)
							}));
							var a = new I(s, {
								detail: r.data
							});
							a.source = t.source, e.dispatchEvent(a)
						}
					}
				}
				var v = t.listen = function(e) {
					-1 === l.indexOf(e) && (l.push(e), p = o(l)), f || (y("message", S), f = !0)
				};
				t.stopListening = function(e) {
					var t = l.indexOf(e); - 1 !== t && (l.splice(t, 1), l.length ? p = o(l) : (m("message", S), f = !1))
				}, t.proxy = function(e, t) {
					v(e), Array.isArray(t) || (t = [t]);
					var r = b[e];
					r ? r.targets = [].concat(r.targets, t) : r = {
						targets: t
					}, b[e] = r
				}
			}).call(this, r("./node_modules/webpack/buildin/global.js"))
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
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./node_modules/bignumber.js/bignumber.js");

			function n(e, t) {
				const r = new s.BigNumber(e),
					n = new s.BigNumber(t),
					a = new s.BigNumber(r.dividedBy(n)),
					c = new s.BigNumber("100").multipliedBy(a);
				return new s.BigNumber(c).toNumber()
			}
		},
		"./src/lib/forceHttps/index.ts": function(e, t, r) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
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
		"./src/reddit/actions/accountGender/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			}));
			const s = "ACCOUNT_GENDER_LOADED",
				n = "ACCOUNT_GENDER_UPDATED",
				a = "ACCOUNT_GENDER_UPDATE_FAILED"
		},
		"./src/reddit/actions/apiRequestHeaders.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "API_REQUEST_HEADERS__set";
			Object(s.a)(n)
		},
		"./src/reddit/actions/badge.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "i", (function() {
				return E
			})), r.d(t, "j", (function() {
				return _
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/governance/errorToast.ts"),
				a = r("./src/reddit/endpoints/governance/badges.ts");
			const c = "BADGE__BADGE_APPLICATION_SUCCESS",
				o = "BADGE__BADGE_APPLICATION_FAILURE",
				d = "BADGE__SUBREDDIT_BADGES_FETCH_SUCCESS",
				i = "BADGE__SUBREDDIT_BADGES_FETCH_FAILURE",
				u = "BADGE__SUBREDDIT_BADGES_FETCH_PENDING",
				l = "BADGE__USER_BADGES_FETCH_SUCCESS",
				p = "BADGE__USER_BADGES_FETCH_FAILURE",
				b = "BADGE__USER_BADGES_FETCH_PENDING",
				f = Object(s.a)(c),
				y = Object(s.a)(o),
				m = (Object(s.a)("BADGE__BADGE_APPLICATION_PENDING"), Object(s.a)(d)),
				O = Object(s.a)(i),
				h = Object(s.a)(u),
				E = (Object(s.a)(l), Object(s.a)(p), Object(s.a)(b), ({
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
						r(f({
							badgeIds: e,
							subredditId: t,
							userId: d.id
						}));
						const l = await Object(a.a)(c(), t, i, u);
						l.ok || (r(y({
							badgeIds: e,
							subredditId: t,
							error: l.error,
							previousBadgeIds: s,
							userId: d.id
						})), Object(n.a)(r, l.error))
					}
				}),
				_ = ({
					subredditId: e,
					userIds: t
				}) => async (r, s, {
					apiContext: n
				}) => {
					r(h({
						subredditId: e
					}));
					const c = await Object(a.b)(n(), e, t);
					c.ok ? r(m({
						...c.body,
						subredditId: e
					})) : r(O({
						subredditId: e,
						error: c.error
					}))
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
				return h
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/FetchBlockedRedditorsInfo.json");
			const c = (e, t) => Object(n.a)(e, {
				...a,
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
				m = Object(s.a)(l),
				O = Object(s.a)(p),
				h = () => async (e, t, {
					gqlContext: r
				}) => {
					const s = t(),
						n = Object(o.a)(s);
					if (Object(o.b)(s) || n.timestamp && Date.now() - n.timestamp < 36e6) return;
					let a = !1,
						d = "";
					do {
						e(O());
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
								if (e(m(s.map(e => e.node.id))), r) {
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
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return c
			}));
			var s, n = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.anybody = "Everyone", e.account_age_30_days = "Accounts older than 30 days", e.nobody = "Nobody"
			}(s || (s = {}));
			const a = {
					[s.anybody]: () => n.fbt._("Everyone", null, {
						hk: "YHmqV"
					}),
					[s.account_age_30_days]: () => n.fbt._("Accounts older than 30 days", null, {
						hk: "1g4Gwx"
					}),
					[s.nobody]: () => n.fbt._("Nobody", null, {
						hk: "2m0XS"
					})
				},
				c = e => {
					const t = a[e];
					return t && t()
				}
		},
		"./src/reddit/actions/chat/userSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "c", (function() {
				return E
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/endpoints/chat/userSettings.ts"),
				o = r("./src/reddit/selectors/telemetry.ts");
			var d = r("./src/reddit/models/Toast/index.ts"),
				i = r("./src/telemetry/index.ts"),
				u = r("./src/reddit/actions/chat/constants.ts");
			const l = Object(n.a)("USER_SETTINGS__FETCH_PENDING"),
				p = Object(n.a)("USER_SETTINGS__FETCH_FAILURE"),
				b = "USER_SETTINGS__UPDATE_SUCCESS",
				f = Object(n.a)(b),
				y = () => async (e, t, {
					apiContext: r
				}) => {
					e(l());
					const s = await Object(c.b)(r());
					if (s.ok) {
						const t = {
							...s.body
						};
						e(f({
							invitePolicy: u.a[t.invite_policy]
						}))
					} else e(p(s.error))
				}, m = Object(n.a)("USER_SETTINGS__SAVE_PENDING"), O = Object(n.a)("USER_SETTINGS__SAVE_FAILURE"), h = e => async (t, r, {
					apiContext: n
				}) => {
					const l = r(),
						{
							invitePolicy: p
						} = e,
						b = Object.keys(u.a).find(e => u.a[e] === p);
					if (b) {
						t(m());
						const e = await Object(c.e)(b, n());
						if (Object(i.a)((e => t => ({
								source: "settings_privacy",
								action: "save",
								noun: "receive_chat_invites",
								setting: {
									value: e,
									oldValue: e
								},
								...Object(o.defaults)(t)
							}))(b)(l)), e.ok) {
							const e = u.a[b];
							t(f({
								invitePolicy: e
							})), t(Object(a.f)({
								kind: d.b.SuccessCommunity,
								text: s.fbt._("Changes saved", null, {
									hk: "4eTtdy"
								})
							}))
						} else t(O(e.error))
					}
				}, E = () => async (e, t, {
					gqlContext: r
				}) => {
					await Object(c.d)(r(), [])
				}
		},
		"./src/reddit/actions/claimgold.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return y
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "i", (function() {
				return E
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "j", (function() {
				return I
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "b", (function() {
				return S
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "h", (function() {
				return w
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
					method: o.jb.POST,
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
				m = "CLAIMGOLD__CLOSE_CLAIMGOLD_MODAL",
				O = Object(n.a)(y),
				h = Object(n.a)(m),
				E = () => async (e, t) => {
					const r = t();
					Object(f.b)(r) ? e(h()) : e(O())
				}, _ = "CLAIMGOLD_UPDATE_CODE", I = Object(n.a)(_), g = "CLAIM_GOLD__TRIGGER_LOADER", S = "CLAIM_GOLD__CLAIM_GOLD_PENDING", v = "CLAIM_GOLD__CLAIM_GOLD_SUCCESSFUL", j = "CLAIM_GOLD__CLAIM_GOLD_FAILED", w = () => async (e, t, {
					apiContext: r
				}) => {
					const s = {
						code: t().claimGold.code
					};
					e(P());
					try {
						const t = await p(r(), s);
						t.error ? e(C(t)) : e(k())
					} catch (n) {
						e(C(n))
					}
				}, T = Object(n.a)(g), D = Object(n.a)(S), P = () => async (e, t) => {
					e(D()), window.setTimeout(() => {
						t().claimGold.api.pending && e(T())
					}, 2e3)
				}, A = Object(n.a)(j), C = e => async (t, r) => {
					await t(A({
						...e,
						error: e.error || Object(b.a)()
					}));
					const s = r().claimGold.api.error;
					s && t(Object(a.f)({
						kind: c.b.Error,
						duration: a.a,
						text: s
					}))
				}, R = Object(n.a)(v), k = () => async (e, t) => {
					e(R()), e(Object(a.f)({
						kind: c.b.SuccessCommunity,
						text: s.fbt._("You have redeemed your gift code successfully", null, {
							hk: "18mkH2"
						})
					}))
				}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return A
			})), r.d(t, "m", (function() {
				return C
			})), r.d(t, "e", (function() {
				return N
			})), r.d(t, "h", (function() {
				return L
			})), r.d(t, "l", (function() {
				return G
			})), r.d(t, "q", (function() {
				return F
			})), r.d(t, "j", (function() {
				return B
			})), r.d(t, "g", (function() {
				return q
			})), r.d(t, "f", (function() {
				return V
			})), r.d(t, "o", (function() {
				return K
			})), r.d(t, "p", (function() {
				return $
			})), r.d(t, "d", (function() {
				return Q
			})), r.d(t, "a", (function() {
				return J
			})), r.d(t, "b", (function() {
				return X
			})), r.d(t, "n", (function() {
				return Y
			})), r.d(t, "c", (function() {
				return Z
			})), r.d(t, "k", (function() {
				return ee
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/config.ts"),
				n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/telemetry/index.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/economics/helpers/async.ts"),
				d = r("./src/reddit/actions/economics/powerups/flairs/async.ts"),
				i = r("./src/reddit/actions/login.ts"),
				u = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/actions/modQueueTriggers/index.ts"),
				p = r("./src/reddit/actions/shortcuts/utils.ts"),
				b = r("./src/reddit/actions/toaster.ts"),
				f = r("./src/reddit/actions/vote.ts"),
				y = r("./src/reddit/endpoints/comment/index.tsx"),
				m = r("./src/reddit/helpers/commentList/index.ts"),
				O = r("./src/reddit/helpers/trackers/comment.ts"),
				h = r("./src/reddit/models/Comment/index.ts"),
				E = r("./src/reddit/models/Post/index.ts"),
				_ = r("./src/reddit/models/Toast/index.ts"),
				I = r("./src/reddit/models/Vote/index.ts"),
				g = r("./src/reddit/selectors/comments.ts"),
				S = r("./src/reddit/selectors/commentSelector.ts"),
				v = r("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				j = r("./src/reddit/selectors/moderatingComments.ts"),
				w = r("./src/reddit/selectors/moderatorPermissions.ts"),
				T = r("./src/reddit/selectors/user.ts"),
				D = r("./src/reddit/actions/comment/constants.ts");
			const P = {},
				A = Object(c.a)(D.o),
				C = e => async (t, r, {
					apiContext: s
				}) => {
					if (!Object(T.K)(r())) return t(Object(i.k)()), void t(Object(u.k)({
						actionSource: u.a.Save,
						redirectUrl: Object(g.m)(r(), {
							commentId: e
						})
					}));
					const a = r().features.comments.models[e];
					if (!a) return;
					const c = a.isSaved ? y.m : y.i;
					if (t(A({
							[e]: {
								isSaved: !a.isSaved
							}
						})), (await c(s(), e)).ok) {
						const r = a.isSaved ? n.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : n.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							s = n.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(b.f)({
							text: r,
							kind: _.b.Undo,
							buttonText: s,
							buttonAction: C(e)
						}))
					} else t(A({
						[e]: {
							isSaved: a.isSaved
						}
					}))
				}, R = e => `viewing-comment-${e}`, k = s.a.telemetry.commentConsumedThreshold, N = e => async (t, r) => {
					const n = r();
					if (!Object(S.b)(n, {
							commentId: e
						}) || Math.random() > s.a.telemetry.commentSampleRate) return;
					O.c({
						state: n,
						commentId: e
					}), a.c.start(R(e));
					const c = setTimeout(() => O.a({
						state: n,
						commentId: e
					}), k);
					P[e] = c
				}, L = (e, t) => async (r, s) => {
					const n = s(),
						c = R(e);
					if (Object(S.b)(n, {
							commentId: e
						}) && a.c.has(c)) {
						const r = a.c.end(c);
						!t && r < k && (clearTimeout(P[e]), delete P[e])
					}
				}, x = Object(c.a)(D.x), U = Object(c.a)(D.w), M = Object(c.a)(D.v), G = (e, t) => async (r, s, {
					apiContext: n
				}) => {
					const a = s(),
						c = a.moreComments.models[t],
						i = a.platform.currentPage,
						u = i && i.routeMatch,
						p = u && u.match,
						{
							partialPostId: b
						} = p ? p.params : null;
					if (!b) return;
					const f = Object(E.t)(b);
					r(x({
						moreCommentsId: c.id
					}));
					const O = await Object(y.f)(n(), f, {
						token: c.token
					}, Object(v.a)(a));
					if (O.ok) {
						const t = O.body,
							n = Object(m.a)(t, f, a);
						r(U({
							key: e,
							moreCommentsItem: c,
							shouldCollapse: n,
							...t
						}));
						const i = a.posts.models[f];
						let u;
						i && "subreddit" === i.belongsTo.type && t.comments && (u = i.belongsTo.id, await r(Object(o.a)({
							commentIds: Object.keys(O.body.comments),
							postIds: [i.id],
							skip: ["communityDetails", "subscription"],
							subredditId: u
						})));
						const p = O.body.comments;
						await r(Object(d.b)(u, p)), Object(w.h)(s(), {
							subredditId: i.belongsTo.id
						}) && r(Object(l.a)({
							commentIds: Object.keys(t.comments)
						}))
					} else r(M({
						moreCommentsItem: c,
						...O.error
					}))
				}, F = Object(f.a)(m.b, I.a.upvoted), B = Object(f.a)(m.b, I.a.downvoted), q = Object(c.a)(D.j), V = Object(c.a)(D.i), H = Object(c.a)(D.e), W = Object(c.a)(D.f), K = (Object(c.a)(D.c), Object(c.a)(D.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: r
				}) => async (s, n) => {
					const a = n(),
						c = Object(h.i)(e),
						o = Object(g.n)(a, {
							commentLink: c,
							commentsPageKey: t
						}),
						d = Object(j.b)(a, {
							commentId: e,
							commentsPageKey: t
						}),
						i = o.depth;
					s(H({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: d
					})), d || 0 !== i || r(e, !0), Object(p.d)()
				}), $ = ({
					commentId: e,
					commentsPageKey: t
				}) => async r => {
					r(W({
						commentId: e,
						commentsPageKey: t
					}))
				}, Q = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: r,
					scrollToAndRemeasure: s
				}) => async (n, a) => {
					const c = a(),
						o = Object(m.e)(t, e, r, c),
						d = Object(j.b)(c, {
							commentId: e.id,
							commentsPageKey: t
						});
					n(H({
						commentId: o,
						commentsPageKey: t,
						isCollapsed: d
					})), 0 === r && s(o, !0), Object(p.d)()
				}, z = Object(c.a)(D.r), J = e => t => t(z({
					draftKey: e
				})), X = Object(c.a)(D.a), Y = Object(c.a)(D.E), Z = Object(c.a)(D.b), ee = Object(c.a)(D.u)
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
		"./src/reddit/actions/connection/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			}));
			const s = "CONNECTION__GO_ONLINE",
				n = "CONNECTION__GO_OFFLINE",
				a = "CONNECTION__HIDE_BANNER"
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
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				n = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
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
		"./src/reddit/actions/economics/powerups/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "i", (function() {
				return o
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "h", (function() {
				return l
			}));
			const s = 120,
				n = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				a = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
				c = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIRS_LOADED",
				o = "POWERUPS__USER_SUPPORTED_SUBREDDITS_LOADED",
				d = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_REQUESTED",
				i = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATED",
				u = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_FAILED",
				l = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_VISIBILITY_UPDATE"
		},
		"./src/reddit/actions/emoji.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return S
			})), r.d(t, "d", (function() {
				return j
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "h", (function() {
				return P
			})), r.d(t, "g", (function() {
				return A
			})), r.d(t, "f", (function() {
				return C
			})), r.d(t, "a", (function() {
				return L
			})), r.d(t, "q", (function() {
				return M
			})), r.d(t, "p", (function() {
				return F
			})), r.d(t, "l", (function() {
				return B
			})), r.d(t, "m", (function() {
				return q
			})), r.d(t, "j", (function() {
				return V
			})), r.d(t, "k", (function() {
				return H
			})), r.d(t, "b", (function() {
				return W
			})), r.d(t, "n", (function() {
				return $
			})), r.d(t, "e", (function() {
				return Q
			})), r.d(t, "o", (function() {
				return J
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
				method: c.jb.GET,
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
				m = r("./src/reddit/helpers/getS3KeyFromUrl/index.ts"),
				O = r("./src/reddit/helpers/media/index.ts"),
				h = r("./src/reddit/models/Emoji/index.ts"),
				E = r("./src/reddit/models/Image/index.tsx"),
				_ = r("./src/reddit/models/Toast/index.ts"),
				I = r("./src/reddit/selectors/emojis.ts"),
				g = r("./src/reddit/selectors/subreddit.ts");
			const S = "STRUCTURED_STYLES__NEW_EMOJI_ADDED",
				v = Object(p.a)(S),
				j = "STRUCTURED_STYLES__EMOJI_DELETE_LOADED",
				w = "STRUCTURED_STYLES__EMOJI_DELETE_FAILED",
				T = Object(p.a)(j),
				D = Object(p.a)(w),
				P = "GET_ALL_EMOJIS_PENDING",
				A = "GET_ALL_EMOJIS_LOADED",
				C = "GET_ALL_EMOJIS_FAILED",
				R = Object(p.a)(P),
				k = Object(p.a)(A),
				N = Object(p.a)(C),
				L = "STRUCTURED_STYLES__EMOJIS_ENABLED_SETTING_LOADED",
				x = Object(p.a)(L),
				U = e => ({
					text: s.fbt._("Failed to save emoji", null, {
						hk: "3i6FC2"
					}),
					buttonText: s.fbt._("Retry", null, {
						hk: "1XMjgA"
					}),
					buttonAction: F(e)
				}),
				M = ({
					imageData: e,
					subredditId: t
				}) => async (r, s, n) => {
					const a = s(),
						l = Object(g.R)(a, {
							subredditId: t
						}).name;
					r(Object(b.k)(e));
					const p = e.file,
						f = await Object(O.g)(p),
						y = await (async (e, t, r, s) => Object(o.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/emoji_asset_upload_s3.json`,
							method: c.jb.POST,
							data: {
								filepath: r,
								mimetype: s
							}
						}))(n.apiContext(), l, p.name, f);
					let m = !1;
					if (y.ok) {
						const t = await (async (e, t, r) => Object(i.a)(r, t))(n.apiContext(), y.body.s3UploadLease, p);
						if (t.ok) {
							if (!s().imageUploads[e.id]) return Object(E.d)(e), !1;
							const n = decodeURIComponent(t.body.PostResponse.Location),
								a = y.body.websocketUrl,
								c = Object(E.n)(e, n, a);
							r(Object(b.j)(c)), m = !0
						} else {
							const s = Object(E.k)(e, t.error);
							r(Object(b.i)(s))
						}
					} else {
						const t = Object(E.k)(e, y.error);
						r(Object(b.i)(t))
					}
					return m
				}, G = (e, t) => async (r, s, n) => {
					const {
						imageData: a,
						subredditId: i,
						emojiName: l,
						settings: p
					} = e, y = Object(m.a)(a.url), O = s(), h = Object(g.R)(O, {
						subredditId: i
					}).name, _ = await (async (e, t, r, s, n) => Object(o.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji.json`,
						method: c.jb.POST,
						data: {
							s3_key: r,
							name: s,
							mod_flair_only: n.modFlairOnly,
							post_flair_allowed: n.postFlairAllowed,
							user_flair_allowed: n.userFlairAllowed
						}
					}))(n.apiContext(), h, y, l, p);
					if (!_.ok) {
						const s = Object(E.k)(a, _.error);
						r(Object(b.i)(s)), r(Object(f.f)(U(e))), t && t.close()
					}
					return _.ok
				}, F = e => async (t, r, s) => {
					const {
						imageData: n,
						subredditId: a,
						emojiName: c,
						settings: o
					} = e;
					if (t(Object(b.k)(n)), !n.websocketUrl) return t(Object(f.f)({
						text: "Could not upload emoji"
					}));
					let d;
					const i = new WebSocket(n.websocketUrl);
					return i.onopen = async () => {
						d = await G(e, i)(t, r, s)
					}, i.onmessage = r => {
						const s = JSON.parse(r.data);
						if ("success" === s.type) {
							d = !0;
							const e = s.payload.emoji_url,
								r = Object(E.o)(n, e);
							t(Object(b.l)(r));
							const i = Object(h.e)(c, r.url, a, o);
							t(v(i)), t(B(a))
						} else {
							const r = Object(y.a)(c),
								s = Object(E.k)(n, r);
							t(Object(b.i)(s)), t(Object(f.f)(U(e)))
						}
						i.close()
					}, i.onerror = r => {
						d = !1;
						const s = Object(y.a)(c),
							a = Object(E.k)(n, s);
						t(Object(b.i)(a)), t(Object(f.f)(U(e))), i.close()
					}, d
				}, B = e => async (t, r, {
					apiContext: s
				}) => {
					const n = r();
					if (Object(I.a)(n, e)) return;
					const a = Object(g.R)(n, {
						subredditId: e
					}).name;
					t(R(e));
					const c = await l(s(), a);
					if (c.ok) {
						const r = c.body;
						t(k({
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
				}, V = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const i = n(),
						l = Object(g.R)(i, {
							subredditId: t
						}).name,
						p = await (async (e, t, r) => Object(o.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/v1/${r}/emoji/${t}`,
							method: c.jb.DELETE,
							type: "json"
						}))(a(), e, l);
					if (p.ok) {
						r(T({
							emojiName: e,
							subredditId: t
						})), r(f.f({
							kind: _.b.SuccessCommunityGreen,
							text: s.fbt._("Emoji successfully deleted", null, {
								hk: "1zMXEe"
							})
						}))
					} else r(D(p.error)), r(f.f({
						kind: _.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, H = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const i = n(),
						l = Object(g.R)(i, {
							subredditId: e
						}).name;
					if ((await (async (e, t, r) => Object(o.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/enable_emojis_in_sr.json`,
							method: c.jb.POST,
							data: {
								subreddit: t,
								enable: r
							}
						}))(a(), l, t)).ok) {
						r(x({
							subredditId: e,
							emojisEnabled: t
						}))
					} else r(f.f({
						kind: _.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, W = "EMOJI_CUSTOM_SIZE_UPDATED", K = Object(p.a)(W), $ = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const i = n(),
						l = Object(g.R)(i, {
							subredditId: e
						}).name;
					(await (async (e, t, r) => Object(o.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji_custom_size`,
						method: c.jb.POST,
						data: r
					}))(a(), l, t)).ok ? r(K({
						subredditId: e,
						emojiCustomSize: t
					})) : r(f.f({
						kind: _.b.Error,
						text: s.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}, Q = "EMOJI_PERMISSIONS_UPDATED", z = Object(p.a)(Q), J = (e, t, r, n) => async (a, i, {
					apiContext: l
				}) => {
					const p = i(),
						b = Object(g.R)(p, {
							subredditId: n
						}).name;
					(await (async (e, t, r, s) => Object(o.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${r}/emoji_permissions.json`,
						method: c.jb.POST,
						data: {
							name: t,
							post_flair_allowed: s.postFlairAllowed,
							user_flair_allowed: s.userFlairAllowed,
							mod_flair_only: s.modFlairOnly
						}
					}))(l(), e, b, r)).ok ? (a(z({
						emojiName: e,
						isSnoomoji: t,
						settings: r,
						subredditId: n
					})), a(f.f({
						kind: _.b.SuccessCommunityGreen,
						text: s.fbt._("Emoji permissions updated", null, {
							hk: "4b2RIU"
						})
					}))) : a(f.f({
						kind: _.b.Error,
						text: s.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}
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
				return _
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
				m = Object(a.a)(b),
				O = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_PENDING"),
				h = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_LOADED"),
				E = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_FAILED"),
				_ = e => async (t, a) => {
					t(f());
					const c = a(),
						d = Object(u.R)(c, {
							subredditId: e
						}).name,
						l = c.structuredStyles.models[e],
						p = await Object(n.a)(() => Promise.all([r.e("vendors~ExportTheme~ImportTheme"), r.e("ExportTheme")]).then(r.bind(null, "./src/reddit/helpers/exportTheme/index.ts"))).then(e => e.default),
						b = await p(l, d);
					b.ok ? (t(y()), t(Object(o.f)({
						kind: i.b.SuccessMod,
						text: s.fbt._("Theme successfully exported", null, {
							hk: "24KHqI"
						})
					}))) : (t(m(b.error)), t(Object(o.f)({
						kind: i.b.Error,
						text: s.fbt._("Sorry, theme failed to export", null, {
							hk: "2MC4jC"
						})
					})))
				}, I = e => async (t, a) => {
					t(O());
					const u = await Object(n.a)(() => Promise.all([r.e("vendors~ExportTheme~ImportTheme"), r.e("ImportTheme")]).then(r.bind(null, "./src/reddit/helpers/importTheme/index.ts"))).then(e => e.default),
						l = await u(e);
					l.ok ? (t(h()), t(Object(o.f)({
						kind: i.b.SuccessMod,
						text: s.fbt._("Theme successfully imported", null, {
							hk: "42FErS"
						})
					})), 0 !== Object.keys(l.attributes).length && t(Object(c.d)(Object(d.j)(l.attributes)))) : (t(E(l.error)), t(Object(o.f)({
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
					s || c || !Object(d.e)(a) && !Object(d.d)(a) || e(Object(n.f)())
				}, f = e => {
					Object(c.d)(e, {
						experimentName: a.wb
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
				return m
			})), r.d(t, "o", (function() {
				return O
			})), r.d(t, "p", (function() {
				return h
			})), r.d(t, "q", (function() {
				return E
			})), r.d(t, "r", (function() {
				return _
			})), r.d(t, "s", (function() {
				return I
			})), r.d(t, "t", (function() {
				return g
			})), r.d(t, "u", (function() {
				return S
			})), r.d(t, "v", (function() {
				return v
			})), r.d(t, "w", (function() {
				return j
			})), r.d(t, "x", (function() {
				return w
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
				m = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				O = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				h = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				E = "GOVERNANCE__TRANSFER_FAILURE",
				_ = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				I = "GOVERNANCE__TRANSFER_PENDING",
				g = "GOVERNANCE__TRANSFER_SUCCESS",
				S = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				v = "GOVERNANCE__WALLETS_FETCH_PENDING",
				j = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				w = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
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
				e(Object(s.f)({
					duration: 5e3,
					kind: a.b.Error,
					text: Object(n.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return _
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "c", (function() {
				return S
			})), r.d(t, "f", (function() {
				return D
			})), r.d(t, "g", (function() {
				return N
			})), r.d(t, "d", (function() {
				return L
			})), r.d(t, "e", (function() {
				return x
			})), r.d(t, "h", (function() {
				return U
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/prettyPrintNumber/index.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/actions/post.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				i = r("./src/config.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/reddit/models/Poll/index.ts"),
				p = r("./src/redditGQL/operations/PollVote.json"),
				b = r("./src/reddit/endpoints/governance/requester.ts");
			var f = r("./src/reddit/endpoints/governance/wallet.ts"),
				y = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/models/Vote/index.ts"),
				O = r("./src/reddit/selectors/crypto/points.ts"),
				h = r("./src/reddit/actions/governance/constants.ts"),
				E = r("./src/reddit/actions/governance/errorToast.ts");
			const _ = Object(n.a)(h.b),
				I = Object(n.a)(h.c),
				g = Object(n.a)(h.e),
				S = (Object(n.a)(h.f), Object(n.a)(h.g), Object(n.a)(h.h)),
				v = Object(n.a)(h.i),
				j = Object(n.a)(h.j),
				w = Object(n.a)(h.k),
				T = Object(n.a)(h.q),
				D = Object(n.a)(h.r),
				P = Object(n.a)(h.s),
				A = Object(n.a)(h.t),
				C = Object(n.a)(h.u),
				R = Object(n.a)(h.v),
				k = Object(n.a)(h.w),
				N = Object(n.a)(h.x),
				L = (e, t) => async (r, s, {
					apiContext: n,
					gqlContext: a
				}) => {
					let c, d = s().polls.models[e];
					if (r(j({
							pollId: e
						})), (c = d.type === l.a.GA ? await ((e, t, r) => Object(u.a)(e, {
								...p,
								variables: {
									input: {
										postId: t,
										optionId: r
									}
								}
							}))(a(), e, t) : await
							function(e, t, r, s) {
								return Object(b.a)(e, {
									method: "put",
									endpoint: `${i.a.metaUrl}/polls/${t}/${r}/votes/me/${s}`
								})
							}(n(), d.subredditId, e, t)).ok) {
						if (d.type === l.a.GA) {
							const {
								options: e
							} = c.body.data.updatePostPollVoteState.poll;
							r(g({
								pollId: d.id,
								optionId: t,
								options: e
							}))
						} else r(w(c.body));
						const n = s();
						if ((d = n.polls.models[e]) && Object(l.d)(d)) {
							const {
								postId: e
							} = d, t = n.posts.models[e];
							t && t.voteState === m.a.notVoted && r(Object(o.db)(e))
						}
					} else r(v({
						pollId: e,
						error: c.error || c.errors[0].message
					})), Object(E.a)(r, c.error || c.errors[0].messsage)
				}, x = (e, t) => async (r, n, {
					apiContext: o
				}) => {
					var u;
					r(P());
					const l = n().transfers.communityPoints.contentId || void 0,
						p = await
					function(e, t) {
						return Object(b.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: `${i.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(o(), {
						...e,
						contentId: l
					});
					p.ok ? (r(A({
						...p.body,
						subredditId: e.subredditId
					})), r(Object(d.f)({
						kind: y.b.SuccessCommunity,
						text: s.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [s.fbt._param("amount", Object(a.a)(e.amount)), s.fbt._param("tokenName", (null === (u = Object(O.b)(n(), e.subredditId)) || void 0 === u ? void 0 : u.name) || ""), s.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && r(Object(c.f)())) : (r(T({
						error: p.error
					})), Object(E.a)(r, p.error))
				}, U = e => async (t, r, {
					apiContext: s
				}) => {
					t(R());
					const n = await Object(f.a)(s(), e);
					n.ok ? t(k(n.body)) : t(C({
						error: n.error
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
					const a = await Object(n.c)(s(), {
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
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			}));
			const s = "LINKED_POSTS__POSTS_LOADED",
				n = "LINKED_POSTS__POSTS_FAILED",
				a = "LINKED_POSTS__ELIGIBILITY_LOADED"
		},
		"./src/reddit/actions/modQueueTriggers/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/reddit/actions/comment/index.ts"),
				n = r("./src/reddit/actions/post.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/redditGQL/operations/ModQueueTriggers.json");
			var o = r("./src/reddit/featureFlags/index.ts");
			const d = ({
				commentIds: e = [],
				postIds: t = []
			}) => async (r, d, {
				gqlContext: i
			}) => {
				var u, l;
				if (!o.d.hatefulContentFiltersEnabled(d()) || !e.length && !t.length) return;
				const p = await ((e, t) => Object(a.a)(e, {
					...c,
					variables: t
				}))(i(), {
					commentIds: e,
					postIds: t
				});
				if (p.ok) {
					const e = p.body;
					if (e.data.commentsByIds) {
						const t = Object.fromEntries(null === (u = e.data.commentsByIds) || void 0 === u ? void 0 : u.filter(e => {
							var t;
							return null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
						}).map(e => {
							var t;
							return [null == e ? void 0 : e.id, {
								modQueueTriggers: null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
							}]
						}));
						r(Object(s.i)(t))
					}
					if (e.data.postsInfoByIds) {
						const t = Object.fromEntries(null === (l = e.data.postsInfoByIds) || void 0 === l ? void 0 : l.filter(e => {
							var t;
							return null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
						}).map(e => {
							var t;
							return [null == e ? void 0 : e.id, {
								modQueueTriggers: null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
							}]
						}));
						r(Object(n.R)(t))
					}
				}
			}
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
				return m
			})), r.d(t, "n", (function() {
				return O
			})), r.d(t, "o", (function() {
				return h
			})), r.d(t, "p", (function() {
				return E
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "A", (function() {
				return S
			})), r.d(t, "B", (function() {
				return v
			})), r.d(t, "z", (function() {
				return j
			})), r.d(t, "y", (function() {
				return w
			})), r.d(t, "v", (function() {
				return T
			})), r.d(t, "w", (function() {
				return D
			})), r.d(t, "x", (function() {
				return P
			})), r.d(t, "d", (function() {
				return A
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
				m = "MULTIREDDIT__DUPLICATE_FAILURE",
				O = "MULTIREDDIT__EDIT_FAILURE",
				h = "MULTIREDDIT__EDIT_PENDING",
				E = "MULTIREDDIT__EDIT_SUCCESS",
				_ = "MULTIREDDIT__ADD_SUBREDDIT_FAILURE",
				I = "MULTIREDDIT__ADD_SUBREDDIT_PENDING",
				g = "MULTIREDDIT__ADD_SUBREDDIT_SUCCESS",
				S = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_PENDING",
				v = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_SUCCESS",
				j = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_FAILURE",
				w = 10,
				T = "MULTIREDDIT__REMOVE_SUBREDDIT_FAILURE",
				D = "MULTIREDDIT__REMOVE_SUBREDDIT_PENDING",
				P = "MULTIREDDIT__REMOVE_SUBREDDIT_SUCCESS";
			var A;
			! function(e) {
				e.InvalidSrQuarantine = "INVALID_SR_QUARANTINE", e.TooManySubreddits = "MULTI_TOO_MANY_SUBREDDITS"
			}(A || (A = {}))
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
			r.d(t, "e", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "c", (function() {
				return u
			}));
			const s = "INBOX_NOTIFICATIONS__PENDING",
				n = "INBOX_NOTIFICATIONS__LOADED",
				a = "INBOX_NOTIFICATIONS__FAILED",
				c = "INBOX_NOTIFS_SET_OVERFLOW_MENU_ID",
				o = "INBOX_NOTIFICATIONS__REMOVE_NOTIFICATION",
				d = "INBOX_NOTIFS__MARK_AS_READ",
				i = "INBOX_NOTIFS__SET_EARLIER_DIVIDER_INDEX",
				u = "INBOX_NOTIFS_MARK_ALL_AS_READ"
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
				return _
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
				m = Object(s.a)(b),
				O = Object(s.a)(f),
				h = Object(s.a)(y);
			let E = !1;
			const _ = () => async (e, t, r) => {
				const s = t();
				if (s.nps.pending) return;
				if (E) return;
				e(m());
				const i = s.platform.currentPage && s.platform.currentPage.queryParams.feature || "",
					u = !!s.user.account,
					l = await ((e, t, r) => Object(c.a)(Object(o.a)(e, [d.a]), {
						data: {
							feature: t,
							app_name: "web2x"
						},
						endpoint: `${r?n.a.oauthUrl:n.a.apiUrl}/api/jail/asknicely${r?"":".json"}`,
						method: a.jb.GET,
						traceRequestName: "get_nps_survey"
					}))(r.apiContext(), i, u);
				if (l.ok) {
					const t = l.body;
					t.dest ? (e(O(t)), p(t.dest), E = !0) : e(h())
				} else e(h())
			}
		},
		"./src/reddit/actions/nsfwLinkedPosts/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = "NSFW_LINKED_POSTS__POSTS_LOADED",
				n = "NSFW_LINKED_POSTS__POSTS_FAILED"
		},
		"./src/reddit/actions/onboarding/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = "RESET_GENDER_UPDATE_STATE"
		},
		"./src/reddit/actions/page.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return I
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "b", (function() {
				return j
			})), r.d(t, "e", (function() {
				return w
			}));
			var s = r("./node_modules/react-router-redux/es/index.js"),
				n = r("./src/reddit/actions/pages/subreddit.ts"),
				a = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/pageTitle.ts"),
				o = r("./src/config.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/platform.ts"),
				u = r("./src/reddit/endpoints/me/index.ts"),
				l = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				p = r("./src/reddit/actions/pages/appeal/constants.ts");
			const b = `${o.a.redditHelpUrl}/en/categories/rules-reporting/account-and-community-restrictions/my-account-was-suspended-or-locked`,
				f = Object(d.a)(p.b),
				y = Object(d.a)(p.a);
			var m = r("./src/reddit/actions/redditEmbed.ts"),
				O = r("./src/reddit/actions/users.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				E = r("./src/lib/makeListingKey/index.ts"),
				_ = r("./src/lib/matchRoute/index.ts");
			const I = e => async t => {
				await t(Object(m.c)(e, !0))
			}, g = () => async e => {
				await e((() => async (e, t, {
					apiContext: r
				}) => {
					const s = t(),
						n = await Object(u.a)(r());
					if (n.ok && n.body)
						if (n.body.account)
							if (s.user.account && s.user.account.isFPR) {
								const e = b;
								window.location.href = e
							} else e(f(n.body));
					else Object(l.a)(e, s);
					else e(y(n.error))
				})())
			}, S = (e, t, r) => async (c, o, {
				routes: d
			}) => {
				const i = o(),
					u = (t || i.platform.currentPage).routeMatch.match,
					l = Object(_.a)(u.url, d);
				if (!l) return;
				const p = e.metaKey || e.ctrlKey || 1 === e.button;
				if (l.route && l.route.meta && (l.route.meta.name === a.Mb.INDEX || l.route.meta.name === a.Mb.MULTIREDDIT || l.route.meta.name === a.Mb.SUBREDDIT)) p ? window.open(u.url) : r ? c(Object(s.b)(u.url)) : await c(l.route.action(u, !0));
				else if (l.match && l.match.params && l.match.params.subredditName) {
					const {
						subredditName: e
					} = l.match.params, t = `/r/${e}/`;
					if (p) window.open(t);
					else if (r) c(Object(s.b)(t));
					else {
						const r = Object(E.a)(e, a.W.HOT);
						await c(Object(s.b)(t)), c(Object(n.subredditDataRequested)(r, e, {}))
					}
				}
			}, v = () => async (e, t) => {
				const r = t();
				e(i.m({
					title: c.b()
				})), Object(h.K)(r) || await e(O.t())
			}, j = () => async e => e(i.m({
				title: c.b()
			})), w = e => async (t, s) => {
				const n = s();
				t(i.m({
					title: c.j()
				})), Object(h.K)(n) || await t(O.t());
				const a = Object(h.K)(n);
				if (e.queryParams.thanks && a) {
					const e = await r.e("GoldPurchasePaymentActions").then(r.bind(null, "./src/reddit/actions/goldPurchaseModals/payment.ts")).then(e => e.paymentCompleted),
						s = await r.e("GoldPurchasePaymentActions").then(r.bind(null, "./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts")).then(e => e.openPremiumPurchaseModal);
					setTimeout(() => {
						t(s()), t(e({
							confirmed: !1
						}))
					}, 1e3)
				}
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
				return g
			})), r.d(t, "b", (function() {
				return S
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "d", (function() {
				return j
			})), r.d(t, "e", (function() {
				return C
			})), r.d(t, "f", (function() {
				return R
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/difference.js"),
				a = r.n(n),
				c = r("./src/telemetry/index.ts"),
				o = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/redditGQL/operations/GetSubredditChatSettings.json"),
				p = r("./src/lib/makeGqlRequest/index.ts");
			var b = (e, t) => Object(p.a)(e, {
					...l,
					variables: t
				}),
				f = r("./src/redditGQL/operations/UpdateSubredditChatSettings.json");
			var y = (e, t) => Object(p.a)(e, {
					...f,
					variables: t
				}),
				m = r("./src/reddit/selectors/telemetry.ts"),
				O = r("./src/telemetry/models/Event.ts");
			var h = r("./src/reddit/models/ChatSettingsPage/index.ts"),
				E = r("./src/reddit/models/Toast/index.ts"),
				_ = r("./src/reddit/selectors/chat.ts"),
				I = r("./src/reddit/selectors/chatSettingsPage.ts");
			const g = "FETCH_CHAT_SETTINGS__LOADED",
				S = "FETCH_CHAT_SETTINGS__FAILED",
				v = "FETCH_CHAT_SETTINGS__PENDING",
				j = "UPDATE_CHAT_SETTINGS__LOADED",
				w = Object(d.a)(g),
				T = Object(d.a)(S),
				D = Object(d.a)(v),
				P = Object(d.a)(j),
				A = e => async (t, r) => {
					const s = {
						subredditId: e
					};
					return !!Object(I.b)(r(), s) || (t(D(s)), !1)
				}, C = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = {
						subredditId: e
					};
					if (await t(A(e))) return;
					let a = null;
					const c = await b(s(), n);
					if (c.ok) {
						const t = c.body || {},
							s = t.data && t.data.subredditInfoById,
							o = s && s.chatSettings,
							d = !Object(_.c)(r(), n),
							i = Object(h.c)(o, e, d);
						a = {
							...n,
							chatSettings: i
						}
					}
					if (a) t(w(a));
					else {
						const r = c.error || {
							type: o.I.UNKNOWN_ERROR
						};
						t(T({
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
				}, R = (e, t, r) => async (n, c, {
					gqlContext: d
				}) => {
					if (await n(A(e))) return [];
					let i, l = !1;
					const p = a()(r, t),
						b = Object(h.b)(p);
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
							type: o.I.UNKNOWN_ERROR
						}
					}
					return l ? (n(P({
						subredditId: e,
						chatSettings: r
					})), n(N(t, p)), r) : (i && n(T({
						subredditId: e,
						error: i
					})), n(P({
						subredditId: e,
						chatSettings: t
					})), n(Object(u.f)({
						duration: u.a,
						id: "CHAT_SETTING_UPDATE_ERROR",
						kind: E.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3HpR6h"
						})
					})), t)
				}, k = {
					start_chatting_opt_out: (e, t, r) => ({
						source: O.b.Chat,
						action: O.a.OptOut,
						noun: "down_to_chat_subreddit",
						subreddit: Object(m.subreddit)(e),
						setting: {
							oldValue: t,
							value: r
						},
						...Object(m.defaults)(e)
					})
				}, N = (e, t) => async (r, s) => {
					t.forEach(t => {
						if (t && t.settingId) {
							const r = k[t.settingId],
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
					const u = Object(i.k)(r());
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
				return m
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/endpoints/me/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/redditGQL/operations/UserDataExportEligibility.json"),
				o = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				d = r("./src/reddit/selectors/user.ts"),
				i = r("./src/reddit/selectors/userDataRequest.ts");
			const u = "USER_DATA_REQUEST_PAGE_LOADING",
				l = "USER_DATA_REQUEST_PAGE_LOADED",
				p = "USER_DATA_REQUEST_PAGE_FAILED",
				b = Object(s.a)(u),
				f = Object(s.a)(l),
				y = Object(s.a)(p),
				m = () => async (e, t, {
					apiContext: r,
					gqlContext: s
				}) => {
					const u = t(),
						l = Object(d.k)(u),
						p = Object(i.b)(u);
					if (l && p.success) return;
					e(b());
					const m = await Object(n.a)(r());
					if (!m.ok || !m.body) return void e(y(m.error));
					if (!m.body.account) return void Object(o.a)(e, u);
					const O = await (e => Object(a.a)(e, {
						...c
					}))(s());
					if (!O.ok) return void e(y());
					const h = m.body,
						E = O.body;
					e(f({
						account: h.account,
						userDataExportEligibility: E.data.identity.userDataExportEligibility.isUserEligibleForDataExport
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
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return k
			})), r.d(t, "b", (function() {
				return L
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "c", (function() {
				return M
			})), r.d(t, "e", (function() {
				return G
			})), r.d(t, "d", (function() {
				return F
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/uuid/v4.js"),
				a = r.n(n),
				c = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/actions/upload.ts"),
				l = r("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				p = r("./src/lib/makeApiRequest/index.ts"),
				b = r("./src/lib/omitHeaders/index.ts"),
				f = r("./src/reddit/constants/headers.ts");
			var y = r("./src/reddit/helpers/correlationIdTracker.ts"),
				m = r("./src/reddit/helpers/imagePreview/index.ts"),
				O = r("./src/reddit/helpers/media/index.ts"),
				h = r("./src/reddit/models/Upload/index.ts"),
				E = r("./src/reddit/selectors/telemetry.ts"),
				_ = r("./src/telemetry/index.ts");
			const I = e => ({
				...E.defaults(e),
				screen: E.screen(e),
				profile: E.profile(e),
				subreddit: E.subreddit(e)
			});
			var g = r("./src/reddit/helpers/trackers/postComposer.ts"),
				S = r("./src/reddit/models/Gold/Powerups/index.ts"),
				v = r("./src/reddit/models/PostCreationForm/index.ts"),
				j = r("./src/reddit/models/Toast/index.ts"),
				w = r("./src/reddit/selectors/gold/powerups/index.ts"),
				T = r("./src/reddit/selectors/postCreations.ts"),
				D = r("./src/reddit/actions/postCreation/constants.ts"),
				P = r("./src/reddit/actions/postCreation/general.ts");
			const A = Object(d.a)(D.u),
				C = Object(d.a)(D.v),
				R = Object(d.a)(D.t),
				k = e => async (t, r) => {
					t(A());
					const s = e.map(({
						url: e,
						uploadKey: r
					}) => {
						const s = Object(O.a)(Object(O.c)(e), "poster.png");
						return t(U(s, r))
					});
					await Promise.all(s);
					const n = r().uploads,
						a = e.map(({
							uploadKey: e
						}) => n[e]).find(e => e.status !== h.a.SUCCESS);
					t(a ? R(a.error) : C())
				}, N = (e, t) => ({
					error: t ? {
						type: e,
						fields: [{
							field: "",
							msg: t
						}]
					} : {
						type: e
					}
				});
			const L = "RTE",
				x = "GALLERY",
				U = (e, t, r, n) => async (a, o, {
					apiContext: d
				}) => {
					const i = Object(T.h)(o()),
						l = Date.now();
					let v = null,
						j = !1,
						D = !1,
						P = !1;
					const A = e => {
						if (!P && r && j) {
							P = !0;
							const s = o(),
								n = Date.now() - l,
								a = Object(y.c)(y.a.PostComposer);
							D ? (async ({
								state: e,
								uploadKey: t,
								assetId: r,
								isCanceled: s,
								fileSource: n,
								uploadDuration: a,
								correlationId: c
							}) => {
								const o = e.uploads[t],
									d = s || o.status === h.a.CANCELED,
									{
										file: i,
										url: u,
										metadata: l,
										error: p
									} = o,
									b = l.mimetype || i.type,
									f = b.startsWith("video/"),
									y = o.status === h.a.SUCCESS;
								let m = "";
								p ? m = JSON.stringify(p) : d && (m = "canceled");
								const O = {
									width: l.width,
									height: l.height,
									duration: l.videoDuration && Math.round(1e3 * l.videoDuration)
								};
								Object(_.a)({
									source: f ? "videoupload" : "imageupload",
									action: "upload",
									correlationId: c,
									noun: f ? "video" : "image",
									...I(e),
									actionInfo: {
										...E.actionInfo(e),
										success: y,
										...m ? {
											reason: m
										} : {}
									},
									media: {
										mimetype: b,
										uploadDuration: a,
										source: n,
										fileName: i.name,
										size: i.size,
										type: f ? "video" : "image",
										...r ? {
											id: r
										} : {},
										...u ? {
											url: u
										} : {},
										...O
									}
								})
							})({
								state: s,
								uploadKey: t,
								assetId: v,
								isCanceled: e,
								fileSource: r,
								uploadDuration: n,
								correlationId: a
							}) : g.x(s, t)
						}
					};
					return await a(Object(u.l)(e, t, async l => {
						j = !0, Object(u.k)(l.id, () => {
							A(!0)
						});
						const {
							error: y,
							metadata: h
						} = await async function(e, t, r) {
							const n = r && r.allowedPostTypes,
								a = r && r.name,
								o = await Object(O.g)(t) || t.type,
								d = Object(O.b)(t) || void 0;
							if (!d) return N("UNSUPPORTED_BROWSER");
							const i = {
								localUrl: d,
								mimetype: o
							};
							if (!o || !Object(O.i)(o)) return {
								error: {
									type: c.T
								}
							};
							if (o.startsWith("image/")) {
								if (n && !n.images) {
									const e = s.fbt._("Images are not allowed in r/{subredditName}", [s.fbt._param("subredditName", a)], {
										hk: "3C2E7Q"
									});
									return N(c.T, e)
								}
								if ("image/gif" === o) {
									if (t.size > c.Z) return N(c.L)
								} else if (t.size > c.bb) return N(c.R);
								const e = await Object(m.a)(d);
								i.width = e.width, i.height = e.height
							} else if (o.startsWith("video/")) {
								const o = !(null == r || !r.id) && Object(w.p)(e, {
										subredditId: r.id,
										benefit: S.a.HdVideo
									}),
									l = o ? 2 * c.fb : c.fb;
								if (t.size > l) return N(c.lc);
								let p;
								try {
									p = await Object(O.h)(d, !0)
								} catch (u) {
									return N(c.T)
								}
								if (n) {
									const {
										videos: e,
										images: t
									} = n;
									if (t && !e && p.duration > c.gb) {
										const e = s.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [s.fbt._param("subredditName", a)], {
											hk: "46ULiz"
										});
										return N(c.T, e)
									}
									if (!t && !e) {
										const e = s.fbt._("Videos are not allowed in r/{subredditName}", [s.fbt._param("subredditName", a)], {
											hk: "4uTUZb"
										});
										return N(c.T, e)
									}
								}
								const b = o ? 2 * c.eb : c.eb;
								if (p.duration > b) {
									const e = s.fbt._("Video is too long. Maximum video length is {duration} minutes.", [s.fbt._param("duration", (b / 60).toString())], {
										hk: "20nB6Q"
									});
									return N(c.T, e)
								}
								if (p.duration < c.mb) {
									const e = s.fbt._("Video is too short. Minimum video length is {duration} seconds.", [s.fbt._param("duration", c.mb.toString())], {
										hk: "49PSW8"
									});
									return N(c.T, e)
								}
								if (p.height < c.nb || p.width < c.ob) {
									const e = s.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [s.fbt._param("min_video_width", c.ob.toString()), s.fbt._param("min_video_height", c.nb.toString())], {
										hk: "2HSUGl"
									});
									return N(c.T, e)
								}
								if (t.size / p.duration < c.lb) {
									const e = s.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [s.fbt._param("min_bitrate", (c.lb / c.U).toString())], {
										hk: "1ehgDE"
									});
									return N(c.T, e)
								}
								i.height = p.height, i.width = p.width, i.videoDuration = p.duration, i.videoFirstFrameUrl = p.firstFrame.dataUrl
							}
							return {
								metadata: i
							}
						}(o(), e, i);
						if (y || !h) return {
							error: y
						};
						a(Object(u.m)({
							key: t,
							metadata: {
								fileSource: r,
								...h
							}
						})), D = !0, n && n();
						const E = e.name,
							_ = await (async (e, t, r) => Object(p.a)(Object(b.a)(e, [f.a]), {
								endpoint: `${e.apiUrl}/api/media/asset.json`,
								method: c.jb.POST,
								data: {
									filepath: t,
									mimetype: r
								}
							}))(d(), E, h.mimetype);
						return _.ok ? (v = _.body.asset.asset_id, {
							uploadLease: _.body.args
						}) : {
							error: _.error || void 0
						}
					}, !0)), A(!1), o().uploads[t] || null
				}, M = e => async (t, r, {
					apiContext: s
				}) => {
					const n = r().uploads[e];
					n && !Object(h.c)(n) && await t(U(n.file, n.key, n.metadata.fileSource, void 0))
				}, G = (e, t, r) => async (n, c) => {
					const d = e.map((e, s) => new Promise(async s => {
							const c = Object(h.d)(r, a()().slice(-6));
							await n(U(e, c, t, () => s({
								uploadKey: c,
								isValid: !0
							}))), s({
								uploadKey: c,
								isValid: !1
							})
						})),
						u = await Promise.all(d),
						l = u.map(e => e.uploadKey);
					return n(((e, t = 3) => async (r, n) => {
						const {
							uploads: a
						} = n(), c = e.map(e => a[e]).filter(e => e.status === h.a.FAILED && !e.metadata.mimetype).map(e => e.error), d = c.length > t ? t - 1 : c.length, u = c.length - d;
						c.slice(0, d).forEach(e => r(Object(i.f)({
							duration: i.a,
							kind: j.b.Error,
							text: Object(o.a)(e)
						}))), u > 0 && r(Object(i.f)({
							duration: i.a,
							kind: j.b.Error,
							text: s.fbt._({
								"*": "Couldn't add {number} more files",
								_1: "Couldn't add 1 more file"
							}, [s.fbt._plural(u, "number")], {
								hk: "2fQwvl"
							})
						}))
					})(l)), u.filter(e => e.isValid).map(e => e.uploadKey)
				}, F = (e, t) => async (r, n) => {
					const a = n(),
						c = Object(T.W)(a),
						{
							items: o
						} = c,
						d = !o.length && 1 === e.length,
						p = Object(T.N)(a) && !d;
					let b = !1,
						f = e;
					if (p) {
						if (Object(v.x)(c)) return void r(Object(i.f)({
							kind: j.b.Error,
							text: s.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						f.some(e => Object(O.l)(e.type)) && r(Object(i.f)({
							kind: j.b.Error,
							text: s.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), f = f.filter(e => Object(O.k)(e.type));
						const e = Math.max(0, l.b - o.length);
						f.length > e && (r(Object(i.f)({
							kind: j.b.Error,
							text: s.fbt._("You have hit the limit of {images_limit} images", [s.fbt._param("images_limit", `${l.b}`)], {
								hk: "6M4kX"
							})
						})), f = f.slice(0, e))
					} else f = f.slice(0, 1), b = !0, r(Object(u.j)(x, !0));
					const y = await r(G(f, t, x));
					if (!y.length) return;
					const m = y.map(e => ({
							uploadKey: e,
							caption: "",
							url: ""
						})),
						h = 0 === o.length;
					r(Object(P.d)({
						...c,
						items: b ? m : [...o, ...m],
						selectedKey: h ? y[0] : y[y.length - 1]
					}))
				}
		},
		"./src/reddit/actions/postCreation/submit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return Z
			})), r.d(t, "a", (function() {
				return ae
			})), r.d(t, "b", (function() {
				return de
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/telemetry/index.ts"),
				c = r("./src/reddit/actions/governance/index.ts"),
				o = r("./src/reddit/actions/pages/subreddit.ts"),
				d = r("./src/reddit/actions/postDraft.ts"),
				i = r("./src/reddit/actions/scheduledPosts/index.ts"),
				u = r("./src/reddit/actions/urlRequested.ts"),
				l = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				p = r("./src/config.ts"),
				b = r("./src/lib/convertToCamelCase/index.ts"),
				f = r("./src/lib/makeApiRequest/index.ts"),
				y = r("./node_modules/node-libs-browser/node_modules/url/url.js"),
				m = r("./src/lib/omitHeaders/index.ts"),
				O = r("./src/reddit/constants/headers.ts"),
				h = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				E = r("./src/reddit/helpers/flair.ts"),
				_ = r("./src/reddit/helpers/name/index.ts"),
				I = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				g = r("./src/reddit/models/Poll/index.ts"),
				S = r("./src/reddit/models/Post/index.ts"),
				v = r("./src/reddit/models/PostCreationForm/index.ts"),
				j = r("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function w(e) {
				return Math.floor(e.valueOf() / 1e3)
			}
			const T = e => {
					switch (e.kind) {
						case v.p.CROSSPOST:
							return v.p.CROSSPOST;
						case v.p.LINK:
							return v.p.LINK;
						case v.p.POLL:
							return v.p.POLL;
						case v.p.MEDIA:
							return e.makeGif ? v.p.VIDEO_GIF : e.mediaType;
						default:
							return "self"
					}
				},
				D = e => {
					switch (e.kind) {
						case v.p.RICH_TEXT:
							return {
								richtext_json: JSON.stringify({
									document: e.document
								})
							};
						case v.p.MARKDOWN:
							return {
								text: e.markdown
							};
						case v.p.LINK:
						case v.p.MEDIA:
							return {
								url: e.url
							};
						case v.p.CROSSPOST:
							return {
								crosspost_fullname: e.sourcePostId
							};
						case v.p.POLL:
							return e.poll.type === g.a.Prediction ? {
								duration: 999999,
								end_timestamp: w(e.poll.endDate),
								options: e.poll.options.map(e => e.text),
								prediction: !0,
								text: e.markdown,
								raw_rtjson: "markdown" in e ? null : JSON.stringify({
									document: e.document
								})
							} : {
								duration: Math.floor(e.poll.duration / 864e5),
								options: e.poll.options.map(e => e.text),
								text: e.markdown,
								raw_rtjson: "markdown" in e ? null : JSON.stringify({
									document: e.document
								})
							}
					}
				},
				P = e => {
					const t = Object(_.g)(e.destSubreddit.name);
					return {
						...e.destSubreddit.isProfile ? {
							sr: `u_${t}`,
							submit_type: "profile"
						} : {
							sr: t,
							submit_type: "subreddit"
						},
						api_type: "json",
						show_error_list: !0,
						draft_id: e.draftId || void 0,
						title: e.title,
						discussion_type: e.isChatPost ? S.b.Chat : void 0,
						spoiler: e.isSpoiler,
						nsfw: e.isNSFW,
						...e.kind !== v.p.POLL ? {
							kind: T(e),
							original_content: e.isOC
						} : {},
						post_to_twitter: e.postToTwitter,
						sendreplies: e.sendReplies,
						...e.gRecaptchaResponse ? {
							"g-recaptcha-response": e.gRecaptchaResponse
						} : {},
						resubmit: e.resubmit,
						...D(e),
						...e.kind === v.p.MEDIA && "video" === e.mediaType ? {
							video_poster_url: e.videoThumbnailUrl
						} : {},
						...e.kind === v.p.MEDIA && e.makeGif ? {
							make_gif: "on"
						} : {},
						...e.flair ? {
							flair_id: e.flair.templateId,
							flair_text: Object(E.g)(e.flair)
						} : {},
						...e.validate_on_submit ? {
							validate_on_submit: e.validate_on_submit
						} : {},
						...e.eventSchedule && {
							event_start: e.eventSchedule.startDate,
							event_end: e.eventSchedule.endDate,
							event_tz: e.eventSchedule.timezoneName,
							unlist: e.eventSchedule.submitTime === v.j.AtEventTime
						},
						...e.collectionId && {
							collection_id: e.collectionId
						}
					}
				},
				A = async (e, t) => {
					if (!e.ok) return Object(I.b)(e);
					const r = e.body.json.data;
					let n = r.url;
					n || t.kind !== v.p.MEDIA || (n = await ((e, t) => new Promise(r => {
						const s = new WebSocket(e),
							n = e => {
								s.close(), clearTimeout(a), r(e)
							},
							a = setTimeout(() => {
								n("")
							}, t);
						s.onmessage = e => {
							const t = JSON.parse(e.data),
								r = "success" === t.type ? t.payload.redirect : "";
							n(r)
						}, s.onerror = e => {
							n("")
						}
					}))(r.websocket_url, 3e4));
					const a = r.id || (e => {
							const t = /comments\/(\w+)\/.*$/.exec(e),
								r = t && t[1];
							return r ? `${s.Ib.Post}_${r}` : ""
						})(n),
						c = Object(y.parse)(n).path,
						o = r.drafts_count;
					return {
						...e,
						body: {
							id: a,
							path: c,
							draftsCount: o
						}
					}
				};
			var C = (e, t) => Object(f.a)(Object(m.a)(e, [O.a]), {
				endpoint: Object(j.a)(Object(h.a)(`${e.apiUrl}/api/submit?resubmit=true`)),
				method: s.jb.POST,
				data: P(t)
			}).then(async e => await A(e, t));
			var R = r("./src/reddit/endpoints/scheduledPosts/index.ts"),
				k = r("./src/reddit/endpoints/scheduledPosts/update.ts"),
				N = r("./src/reddit/featureFlags/index.ts"),
				L = r("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				x = r("./src/reddit/helpers/scheduledPosts/index.ts"),
				U = r("./src/reddit/helpers/trackers/postComposer.ts"),
				M = r("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				G = r("./src/reddit/models/User/index.ts"),
				F = r("./src/reddit/selectors/postCreations.ts"),
				B = r("./src/reddit/selectors/postDraft.ts"),
				q = r("./src/reddit/selectors/scheduledPosts/index.ts"),
				V = r("./src/reddit/selectors/user.ts"),
				H = r("./src/reddit/models/ScheduledPost/index.ts"),
				W = r("./src/reddit/actions/postCreation/constants.ts"),
				K = r("./src/reddit/actions/postCreation/general.ts"),
				$ = r("./src/reddit/actions/postCreation/mediaUpload.ts");
			const Q = Object(n.a)(W.w),
				z = Object(n.a)(W.P),
				J = Object(n.a)(W.o),
				X = Object(n.a)(W.y),
				Y = Object(n.a)(W.cb),
				Z = Object(n.a)(W.J),
				ee = Object(n.a)(W.a),
				te = Object(n.a)(W.F),
				re = e => `/r/${e}/about/${H.r}`,
				se = (e, t) => {
					const r = e || {
							duration: s.B,
							options: []
						},
						{
							govType: n,
							newSubreddit: a,
							newTopMod: c
						} = Object(F.u)(t),
						o = {
							...r
						};
					return n && (o.type = n), o.type === g.a.ReplaceTopMod ? (o.params = {
						userName: c
					}, o.options = g.f[g.a.ReplaceTopMod]()) : o.type === g.a.Spinoff ? (o.params = {
						subreddit: a
					}, o.options = g.f[g.a.Spinoff](a)) : o.options = o.options.map(e => ({
						text: e.text.trim()
					})).filter(e => !!e.text), o
				},
				ne = e => {
					const t = e.uploads,
						r = Object(F.W)(e),
						n = Object(F.a)(e),
						a = Object(F.gb)(e);
					if (n === s.Vb.POST) return l.a.getPendingThumbnailUploads(a, t);
					if (n === s.Vb.MEDIA && r && r.items.length) {
						const {
							video: e
						} = r.items[0];
						if (e && e.thumbnail && !t[v.n]) return [{
							...e.thumbnail,
							uploadKey: v.n
						}]
					}
				},
				ae = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					let c = n();
					const {
						pending: o
					} = c.creations.api.post.submit, i = Object(B.g)(c);
					if (o || i) return;
					r(te(e)), c = n();
					const u = Object(F.a)(c),
						l = N.d.rteVideoPoster(c),
						p = ne(c),
						b = u === s.Vb.MEDIA;
					p && (l || b) && (await r($.f(p)), ne(n())) || (e === v.r.Draft ? await r(Object(d.r)(t.draftId)) : e === v.r.ScheduledPost && Object(q.r)(c) ? await r(ce(t)) : e === v.r.ScheduledPost ? await r(oe(t)) : await r(de(t)))
				}, ce = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = r(),
						c = Object(F.db)(n),
						o = Object(F.eb)(n, e),
						d = Object(F.h)(n),
						l = Object(q.r)(n);
					if (!(o && d.id && c && Object(x.f)(l))) return;
					const p = d.id,
						b = Object(q.a)(n, {
							subredditId: p,
							scheduledPostId: l
						});
					if (b && Object(a.a)(Object(M.r)(b)(n)), t(Q(o)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(F.x)(r()))) return;
					const {
						isPoll: f,
						polls: y
					} = Object(F.u)(n), m = se(y, n), O = {
						...Object(R.e)({
							poll: f ? m : void 0,
							submission: o,
							schedule: c,
							subredditId: d.id,
							scheduledPostId: l
						})
					}, h = await Object(k.a)(s(), O);
					if (h.ok) return t(Object(i.e)({
						subredditId: d.id
					})), void t(Object(u.a)(re(d.name), !1));
					const E = h.error;
					t(J(E))
				}, oe = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = r(),
						c = Object(F.db)(n),
						o = Object(F.eb)(n, e),
						d = Object(F.h)(n),
						l = Object(q.b)(n);
					if (!o || !d.id || !c) return;
					if (t(Q(o)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(F.x)(r()))) return;
					const {
						isPoll: p,
						polls: b
					} = Object(F.u)(n), f = se(b, n), y = {
						duration: f.duration,
						options: f.options
					}, m = {
						...Object(R.d)({
							poll: p ? y : void 0,
							submission: o,
							schedule: c,
							subredditId: d.id
						}),
						creationToken: l
					}, O = await Object(R.a)(s(), m);
					if (O.ok) {
						t(Object(i.e)({
							subredditId: d.id
						}));
						const e = O.body.data.createScheduledPost.scheduledPost;
						return e && Object(a.a)(Object(M.o)(Object(L.d)(e))(n)), void t(Object(u.a)(re(d.name), !1))
					}
					const h = O.error;
					t(J(h))
				}, de = e => async (t, r, {
					apiContext: n
				}) => {
					const a = r(),
						d = Object(F.eb)(a, e),
						{
							isPoll: i,
							polls: l
						} = Object(F.u)(a),
						y = se(l, a);
					if (!d) return;
					if (t(Q(d)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(F.x)(r()))) return;
					let E;
					const _ = i && N.d.spPolls(a);
					if ((E = _ ? await
							function(e, t, r) {
								const n = t.destSubreddit.id;
								return Object(f.a)(e, {
									method: s.jb.POST,
									endpoint: `${p.a.metaUrl}/polls/${n}`,
									type: "json",
									data: {
										poll: r,
										subredditId: n,
										...Object(b.a)(P(t))
									}
								}).then(async e => {
									const r = e.ok ? {
											...e,
											body: {
												json: {
													data: e.body
												}
											}
										} : e,
										s = await A(r, t);
									if (s.ok) {
										return {
											body: {
												...s.body,
												poll: e.body.poll
											},
											ok: !0,
											status: e.status
										}
									}
									return {
										error: s.body,
										ok: !1,
										status: e.status
									}
								})
							}(n(), d, y) : i ? await ((e, t) => Object(f.a)(Object(m.a)(e, [O.a]), {
								endpoint: Object(j.a)(Object(h.a)(`${e.apiUrl}/api/submit_poll_post.json?resubmit=true`)),
								method: s.jb.POST,
								data: P(t),
								type: "json"
							}).then(e => A(e, t)))(n(), {
								...d,
								kind: v.p.POLL,
								poll: y
							}) : d.kind === v.p.GALLERY ? await ((e, t) => Object(f.a)(Object(m.a)(e, [O.a]), {
								endpoint: Object(j.a)(Object(h.a)(`${e.apiUrl}/api/submit_gallery_post.json?resubmit=true`)),
								method: s.jb.POST,
								data: {
									...P(t),
									items: t.galleryItems.map(e => ({
										caption: e.caption,
										outbound_url: e.url,
										media_id: e.assetId
									}))
								},
								type: "json"
							}).then(e => A(e, t)))(n(), d) : await C(n(), d)).ok) {
						const e = Object(V.k)(a),
							r = E.body;
						t(z({
							draftId: d.draftId,
							response: r
						})), _ && t(Object(c.c)({
							poll: r.poll
						}));
						const s = (r.path || `/user/${Object(G.e)(e)}/posts`).replace(/^\/r\/u_/, "/user/");
						t(Object(o.subredditInvalidateListing)(d.destSubreddit.name)), t(Object(u.a)(s, !1))
					} else {
						if (i) {
							const e = E.error;
							t(X(e))
						}
						const e = E.error;
						e.type === s.I.BAD_CAPTCHA_ERROR ? t(ee()) : e.type === s.I.VALIDATION_ERROR ? t(Y(e)) : e.type === s.I.SUBMIT_VALIDATION_ERROR ? t(Z(e)) : t(J(e))
					}
					const I = Object(K.n)(d.kind),
						g = E.ok && E.body && E.body.id && Object(S.t)(E.body.id),
						w = r();
					U.v(w, I, g, e.correlationId)
				}
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
					const a = await Object(n.a)(s(), e);
					if (a.ok) {
						const r = a.body.data.postInfoById.crowdControlLevel;
						t(c({
							[e]: r
						}))
					}
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
				return O
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
				f = (Object(s.a)(o), Object(s.a)(d)),
				y = Object(s.a)(i),
				m = Object(s.a)(u),
				O = (Object(s.a)(l), Object(s.a)(p), Object(s.a)(b), ({
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
								t(f({
									product: d,
									badges: e,
									userOwnedBadges: s,
									wallet: r.body.wallet
								}))
							}
						} else t(y({
							productId: e,
							error: r.error
						})), Object(n.a)(t, r.error)
					}
				})
		},
		"./src/reddit/actions/reCaptchaEnterprise.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return D
			})), r.d(t, "a", (function() {
				return P
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "b", (function() {
				return k
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
				f = r("./node_modules/os-browserify/browser.js"),
				y = r.n(f);
			const m = /\s+at.*(?:\(|\s)(.*)\)?/,
				O = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/,
				h = void 0 === y.a.homedir ? "" : y.a.homedir();
			const E = e => e.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, "");
			class AggregateError_AggregateError extends Error {
				constructor(e) {
					if (!Array.isArray(e)) throw new TypeError(`Expected input to be an Array, got ${typeof e}`);
					let t = (e = [...e].map(e => e instanceof Error ? e : null !== e && "object" == typeof e ? Object.assign(new Error(e.message), e) : new Error(e))).map(e => "string" == typeof e.stack ? E(function(e, t = {}) {
						return t = {
							pretty: !1,
							...t
						}, e.replace(/\\/g, "/").split("\n").filter(e => {
							const t = e.match(m);
							if (null === t || !t[1]) return !0;
							const r = t[1];
							return !r.includes(".app/Contents/Resources/electron.asar") && !r.includes(".app/Contents/Resources/default_app.asar") && !O.test(r)
						}).filter(e => "" !== e.trim()).map(e => t.pretty ? e.replace(m, (e, t) => e.replace(t, t.replace(h, "~"))) : e).join("\n")
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
			var _ = r("./src/lib/makeGqlRequest/index.ts"),
				I = r("./src/redditGQL/operations/VerifyRecaptchaToken.json");
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
			var g = r("./src/reddit/featureFlags/index.ts"),
				S = r("./src/reddit/featureFlags/utils.ts"),
				v = r("./src/reddit/helpers/chooseVariant/index.ts"),
				j = r("./src/reddit/selectors/meta.ts");
			const w = e => g.d.reCaptchaEnterprise(e) && !Object(j.d)(e),
				T = e => !!Object(v.c)(e, {
					experimentEligibilitySelector: Object(S.d)(Object(S.b)(...a.d)),
					experimentName: b.Ge
				}),
				D = Object(s.b)("LOAD_RECAPTCHA_ENTERPRISE"),
				P = Object(s.b)("EXECUTE_RECAPTCHA_ENTERPRISE"),
				A = Object(s.b)("SEND_RECAPTCHA_TOKEN"),
				C = e => u(e => p()([w, T, e => e.tracking.reCaptchaEnterprise.send === s.a.New && e.tracking.reCaptchaEnterprise.execute === s.a.Succeeded && e.tracking.reCaptchaEnterprise.load === s.a.Succeeded], t => t(e)))(async (t, r, {
					gqlContext: s
				}) => {
					t(A.requested());
					try {
						await (async (e, t) => {
							const r = await Object(_.a)(e, {
								...I,
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
						})(s(), e), t(A.succeeded())
					} catch (n) {
						throw t(A.failed()), n
					}
				}),
				R = (e, t) => Object(S.g)(t) ? (e => `STAGING__${e}`)(e) : e,
				k = (e = d.a.PageLoad) => u(e => p()([w, T, e => e.tracking.reCaptchaEnterprise.load === s.a.New], t => t(e)))(async (t, r) => {
					const a = r();
					try {
						await t((() => u(e => p()([w, T, e => e.tracking.reCaptchaEnterprise.load === s.a.New], t => t(e)))(async e => {
							e(D.requested());
							try {
								await d.b.loadScript(), e(D.succeeded())
							} catch (t) {
								throw e(D.failed()), t
							}
						}))());
						const r = await t((e => u(e => p()([w, T, e => e.tracking.reCaptchaEnterprise.load === s.a.Succeeded && e.tracking.reCaptchaEnterprise.execute === s.a.New], t => t(e)))(async t => {
							t(P.requested());
							try {
								const r = await d.b.execute(e);
								return t(P.succeeded({
									token: r
								})), r
							} catch (r) {
								throw t(P.failed()), r
							}
						}))({
							action: R(e, a)
						}));
						r && await t(C(r))
					} catch (c) {
						if (c instanceof GraphQLRequestError_GraphQLRequestError && "object" == typeof c.response.error && null !== c.response.error && c.response.error.type === n.j) return;
						i.c.withScope(e => {
							Object(i.a)(e, {
								serverLogging: !1
							}), i.c.captureException(c)
						})
					}
				})
		},
		"./src/reddit/actions/recentSubreddits/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "f", (function() {
				return n
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			}));
			const s = "SET_RECENT_SUBREDDITS",
				n = "SUBREDDIT_VISITED",
				a = "SUBREDDIT_SAVED",
				c = "COPY_SAVED_SUBREDDITS",
				o = "COPY_SAVED_ID_SUBREDDITS",
				d = 10
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
						method: a.jb.GET
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
						method: a.jb.GET
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
				return m
			})), r.d(t, "n", (function() {
				return O
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "r", (function() {
				return E
			})), r.d(t, "u", (function() {
				return _
			})), r.d(t, "p", (function() {
				return I
			})), r.d(t, "q", (function() {
				return g
			})), r.d(t, "v", (function() {
				return S
			})), r.d(t, "s", (function() {
				return v
			})), r.d(t, "x", (function() {
				return j
			})), r.d(t, "w", (function() {
				return w
			})), r.d(t, "t", (function() {
				return T
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
				m = "RECURRING_POST__EDIT_LOAD",
				O = "STANDALONE_POST__EDIT_LOAD",
				h = "SCHEDULED_POST__DELETE_SUCCESS",
				E = () => s.fbt._("Failed to load scheduled posts", null, {
					hk: "1fhkq4"
				}),
				_ = () => s.fbt._("Whoops! Invalid scheduled post", null, {
					hk: "35jBb6"
				}),
				I = () => s.fbt._("Unable to delete scheduled post", null, {
					hk: "23nWms"
				}),
				g = () => s.fbt._("Successfully deleted scheduled post", null, {
					hk: "1Lk7r2"
				}),
				S = () => s.fbt._("Unable to submit scheduled post", null, {
					hk: "vCW43"
				}),
				v = () => s.fbt._("Retry", null, {
					hk: "4bCZ7M"
				}),
				j = () => s.fbt._("Successfully submitted scheduled post!", null, {
					hk: "ONo6q"
				}),
				w = () => s.fbt._("Successfully edited scheduled post!", null, {
					hk: "HfGcT"
				}),
				T = () => s.fbt._("Failed to update scheduled post", null, {
					hk: "2zBuRu"
				})
		},
		"./src/reddit/actions/scheduledPosts/edit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return E
			})), r.d(t, "a", (function() {
				return I
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react-router-redux/es/index.js"),
				a = r("./src/telemetry/index.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/scheduledPosts/index.ts"),
				d = r("./src/reddit/actions/scheduledPosts/constants.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/endpoints/scheduledPosts/update.ts"),
				l = r("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				p = r("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				b = r("./src/reddit/models/ScheduledPost/index.ts"),
				f = r("./src/reddit/models/Toast/index.ts"),
				y = r("./src/reddit/routes/postCreation/index.ts"),
				m = r("./src/reddit/selectors/scheduledPosts/index.ts");
			const O = Object(c.a)(d.n),
				h = Object(c.a)(d.b),
				E = (e, t) => async (r, s, a) => {
					const c = Object(m.a)(s(), {
						scheduledPostId: t,
						subredditId: e
					});
					c && (await r(Object(n.b)(Object(y.c)(c.subreddit.name, c.collectionId))), r((Object(b.p)(c) ? h : O)(c)))
				}, _ = (e, t) => {
					Object(b.p)(t) ? e(Object(o.d)({
						scheduledPost: t
					})) : e(Object(o.h)({
						scheduledPost: t
					}))
				}, I = (e, t, r) => async (n, c, {
					gqlContext: y
				}) => {
					n(Object(o.g)());
					const O = Object(m.a)(c(), {
						subredditId: e,
						scheduledPostId: t
					});
					if (O && Object(b.p)(O) && Object(a.a)(Object(p.u)()(c(), O)), !O) return void n(Object(o.f)({
						message: s.fbt._("Scheduled post not found", null, {
							hk: "2zjM55"
						})
					}));
					if (!Object.keys(r).length) return void _(n, O);
					const h = await Object(u.a)(y(), {
							...r,
							id: t
						}),
						E = h.body;
					if (!(h.ok && E && E.data && E.data.updateScheduledPost && E.data.updateScheduledPost.ok && E.data.updateScheduledPost.scheduledPost)) return n(Object(o.f)({
						message: h.error && h.error.fields && h.error.fields.length && h.error.fields[0].msg || s.fbt._("Unknown error", null, {
							hk: "fXs5s"
						})
					})), void n(Object(i.f)(Object(i.e)(d.t(), f.b.Error, d.s(), I(e, t, r))));
					n(Object(i.f)(Object(i.e)(d.w(), f.b.SuccessCommunity))), _(n, Object(l.d)(E.data.updateScheduledPost.scheduledPost))
				}
		},
		"./src/reddit/actions/scheduledPosts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return m
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "d", (function() {
				return E
			})), r.d(t, "c", (function() {
				return S
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "i", (function() {
				return T
			})), r.d(t, "a", (function() {
				return D
			})), r.d(t, "b", (function() {
				return A
			}));
			var s = r("./src/lib/assertNever.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/scheduledPosts/constants.ts"),
				c = r("./src/reddit/actions/scheduledPosts/edit.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/endpoints/scheduledPosts/index.ts"),
				i = r("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				u = r("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				l = r("./src/reddit/models/ScheduledPost/index.ts"),
				p = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/selectors/scheduledPosts/index.ts"),
				f = r("./src/telemetry/index.ts");
			const y = Object(n.a)(a.g),
				m = Object(n.a)(a.k),
				O = Object(n.a)(a.j),
				h = Object(n.a)(a.o),
				E = Object(n.a)(a.d),
				_ = Object(n.a)(a.f),
				I = Object(n.a)(a.m),
				g = Object(n.a)(a.a),
				S = Object(n.a)(a.c),
				v = Object(n.a)(a.e),
				j = Object(n.a)(a.h),
				w = (e, t) => {
					e(v()), e(Object(o.f)(Object(o.e)(a.r(), p.b.Error, a.s(), T(t))))
				},
				T = ({
					subredditId: e,
					includeStandalone: t = {
						standaloneFirst: 25
					},
					includeRecurring: r = {
						recurringFirst: 1e4
					},
					...s
				}) => async (n, a, {
					gqlContext: c
				}) => {
					if (Object(b.h)(a(), {
							subredditId: e
						})) return;
					n(y());
					const o = {
							subredditId: e,
							includeRecurring: r,
							includeStandalone: t,
							...s
						},
						u = await Object(d.b)(c(), o);
					Object(d.f)(u, o) ? P(n, Object(i.e)(u.body.data), o) : w(n, o)
				}, D = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = r();
					if (!Object(b.h)(n, {
							subredditId: e
						})) return t(T({
						subredditId: e
					}));
					if (!Object(b.g)(n, {
							subredditId: e,
							type: l.f.standalonePosts
						})) return;
					const a = Object(b.c)(n, {
						subredditId: e,
						type: l.f.standalonePosts
					});
					if (!a) return;
					t(y());
					const c = {
							subredditId: e,
							includeStandalone: {
								standaloneFirst: 25,
								standaloneAfter: a
							}
						},
						o = await Object(d.b)(s(), c);
					o.ok ? P(t, Object(i.e)(o.body.data), c) : t(v())
				}, P = (e, t, r) => {
					Object(i.b)(t) ? e(_(t)) : Object(i.a)(t) ? e(g(t)) : Object(i.c)(t) ? e(I(t)) : w(e, r)
				}, A = (e, t) => async (r, n, a) => {
					const o = {},
						d = n();
					switch (e) {
						case "isModDistinguished":
						case "isNsfw":
						case "isOriginalContent":
						case "isContestMode":
						case "isPostAsMetaMod":
						case "isSpoiler":
							o[e] = !t[e];
							break;
						case "isSticky":
							const r = !!t.sticky && "NONE" !== t.sticky;
							o.sticky = r ? "NONE" : "SECOND";
							break;
						default:
							return Object(s.a)(e)
					}
					Object(f.a)(Object(u.t)(e, o[e], Object(l.p)(t))(d)), r(Object(c.a)(t.subreddit.id, t.id, o))
				}
		},
		"./src/reddit/actions/search/trending.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			})), r.d(t, "b", (function() {
				return m
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
					method: c.jb.GET,
					data: t
				})
			};
			const f = "PAGE__TRENDING_SEARCHES_LOADED",
				y = Object(s.a)(f),
				m = () => async (e, t, {
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
				return E
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "e", (function() {
				return S
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/streaming/constants.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/redditGQL/operations/FetchSubredditStreamingModSettings.json"),
				i = r("./src/redditGQL/operations/UpdateSubredditStreamingModSettings.json"),
				u = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/reddit/selectors/subreddit.ts");
			const p = Object(n.a)(a.a),
				b = "STREAMING_MOD_SETTINGS__UPDATE_PENDING",
				f = "STREAMING_MOD_SETTINGS__UPDATE_LOADED",
				y = "STREAMING_MOD_SETTINGS__UPDATE_FAILED",
				m = Object(n.a)(b),
				O = Object(n.a)(f),
				h = Object(n.a)(y),
				E = e => async (t, r, {
					gqlContext: n
				}) => {
					const a = Object(l.R)(r(), {
						subredditId: e
					});
					if (void 0 === a) {
						const e = s.fbt._("Invalid subreddit", null, {
								hk: "2iUXvs"
							}),
							r = Object(c.e)(e, u.b.Error);
						return await t(Object(c.f)({
							...r,
							duration: c.a
						})), {
							reason: e
						}
					}
					const i = await ((e, t) => Object(o.a)(e, {
						...d,
						variables: {
							subredditId: t
						}
					}))(n(), e);
					if (!i.ok) {
						const e = s.fbt._("Could not fetch settings for {subredditName}", [s.fbt._param("subredditName", a.name)], {
								hk: "2G8rnU"
							}),
							r = Object(c.e)(e, u.b.Error);
						return await t(Object(c.f)({
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
				}, _ = (e, t) => async (r, s, {
					gqlContext: n
				}) => {
					await r(I(t, e, n())), r(E(t))
				}, I = (e, t, r) => async (r, n, {
					gqlContext: a
				}) => {
					r(m({
						subredditId: e
					}));
					const d = await ((e, t) => Object(o.a)(e, {
						...i,
						variables: t
					}))(a(), {
						input: {
							subredditId: e,
							liveStreamingModeratorSettings: t
						}
					});
					if (!d.ok || !d.body.data.updateSubredditLiveStreamingModeratorSettings.ok) {
						const t = d.error && d.error.fields ? d.error.fields[0].msg : s.fbt._("Could not update community broadcasting settings", null, {
								hk: "3Uw7zu"
							}),
							n = Object(c.e)(t, u.b.Error);
						await r(Object(c.f)({
							...n,
							duration: c.a
						})), r(h({
							subredditId: e
						}))
					}
					const l = s.fbt._("Community broadcasting settings saved", null, {
							hk: "GTwrg"
						}),
						p = Object(c.e)(l, u.b.SuccessCommunity);
					await r(Object(c.f)({
						...p,
						duration: c.a
					})), r(O({
						subredditId: e
					}))
				}, g = (e, t, r) => async (s, n, {
					gqlContext: a
				}) => {
					const c = [...r.whitelistedUsers.map(e => ({
						redditorName: e.name
					})), {
						redditorName: t
					}];
					await s(I(e, {
						whitelistedRedditors: c
					}, a())), await s(E(e))
				}, S = (e, t, r) => async (s, n, {
					gqlContext: a
				}) => {
					const c = r.whitelistedUsers.filter(e => e.name !== t).map(e => ({
						redditorName: e.name
					}));
					await s(I(e, {
						whitelistedRedditors: c
					}, a())), await s(E(e))
				}
		},
		"./src/reddit/actions/subreddit/relatedSubreddits.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/RelatedSubreddits.json");
			const c = e => async (t, r, {
				gqlContext: s
			}) => {
				var c;
				const o = await ((e, t) => Object(n.a)(e, {
					...a,
					variables: t
				}))(s(), {
					subredditId: e
				});
				if (!o.ok) return;
				const i = o.body;
				(null === (c = i.data.subredditInfoById.relatedSubreddits) || void 0 === c ? void 0 : c.length) && t(d({
					subredditId: e,
					relatedSubreddits: i.data.subredditInfoById.relatedSubreddits.reduce((e, {
						subreddit: t
					}) => ((null == t ? void 0 : t.id) && e.push(t.id), e), [])
				}))
			}, o = "RELATED_SUBREDDITS__LOADED", d = Object(s.a)(o)
		},
		"./src/reddit/actions/subreddit/subredditCarousel.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/SubredditsCarousel.json");
			const c = e => async (t, r, {
				gqlContext: s
			}) => {
				if (r().subreddits.carousel.pending) return;
				const c = await ((e, t) => Object(n.a)(e, {
					...a,
					variables: t
				}))(s(), {
					subredditIds: e
				});
				if (!c.ok) return;
				const o = c.body;
				o.data && t(i(o.data.subredditsInfoByIds.reduce((e, t) => ((null == t ? void 0 : t.id) && (e[t.id] = t), e), {})))
			}, o = "SUBREDDITS_CAROUSEL__LOADED", d = "SUBREDDITS_CAROUSEL__PENDING", i = Object(s.a)(o);
			Object(s.a)(d)
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
			r.d(t, "d", (function() {
				return v
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "e", (function() {
				return w
			})), r.d(t, "b", (function() {
				return T
			})), r.d(t, "a", (function() {
				return D
			})), r.d(t, "f", (function() {
				return R
			})), r.d(t, "g", (function() {
				return k
			})), r.d(t, "h", (function() {
				return N
			})), r.d(t, "i", (function() {
				return L
			}));
			var s = r("./node_modules/react-router-redux/es/index.js"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/actions/postCreation/general.ts"),
				o = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/actions/postCreation/submit.ts"),
				i = r("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				u = r("./src/reddit/constants/modals.ts"),
				l = r("./src/lib/makeApiRequest/index.ts"),
				p = r("./src/lib/omitHeaders/index.ts"),
				b = r("./src/reddit/constants/headers.ts"),
				f = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const y = e => ({
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
			var m = r("./src/lib/makeGqlRequest/index.ts"),
				O = r("./src/redditGQL/operations/ValidateCreateSubreddit.json");
			var h = r("./src/reddit/helpers/correlationIdTracker.ts"),
				E = r("./src/reddit/helpers/trackers/subredditCreation.ts"),
				_ = r("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				I = r("./src/reddit/selectors/posts.ts"),
				g = r("./src/reddit/selectors/subreddit.ts"),
				S = r("./src/telemetry/index.ts");
			const v = "SUBREDDIT__CREATE_SET_INITIAL_CROSSPOST",
				j = "SUBREDDIT__CREATE_PENDING",
				w = "SUBREDDIT__CREATE_SUCCEEDED",
				T = "SUBREDDIT__CREATE_FAILED",
				D = "SUBREDDIT__CREATE_CLEARED",
				P = Object(a.a)(j),
				A = Object(a.a)(w),
				C = Object(a.a)(T),
				R = Object(a.a)(D),
				k = Object(a.a)(v),
				N = e => async (t, r, {
					apiContext: a
				}) => {
					const m = r(),
						{
							name: O,
							type: v,
							crosspostId: j
						} = e;
					if (Object(g.j)(m)) return;
					t(P({
						subredditName: O
					}));
					const w = await ((e, t) => Object(l.a)(Object(p.a)(e, [b.a]), {
						endpoint: Object(f.a)(`${e.apiUrl}/api/v1/subreddit/create_subreddit`),
						method: n.jb.POST,
						data: y(t)
					}))(a(), e);
					if (w.ok) {
						const r = w.body,
							a = r.fullname;
						if (Object(S.a)(Object(E.d)(v, e, a)(m)), t(A({
								subredditName: O
							})), j) {
							const e = Object(I.H)(m, {
								postId: j
							});
							t(Object(c.h)(e.title)), t(Object(c.g)({
								submissionType: n.Vb.CROSSPOST
							})), await t(Object(d.b)({
								destSubreddit: {
									...r,
									isProfile: !1
								},
								sourcePostId: j,
								postFieldValidationPending: Promise.resolve()
							})), Object(i.b)(j)
						}
						await t(Object(s.b)(`${r.path}`)), Object(_.b)(m)[a] && Object(_.a)(m) || (t(Object(o.h)(u.a.POST_FLOW_UPSELL_MODAL_ID)), Object(S.a)(Object(E.g)()(m))), Object(h.b)(h.a.SubredditCreation)
					} else w.error && Object(S.a)(Object(E.h)(w.error.type, O)(m)), t(C({
						subredditName: O,
						error: w.error
					}))
				}, L = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = r(),
						a = {
							name: e
						},
						c = await ((e, t) => Object(m.a)(e, {
							...O,
							variables: t
						}))(s(), {
							input: a
						});
					let o = null;
					if (c.ok) {
						o = c.body.data.validateCreateSubredditInput.fieldErrors
					}
					if (o) {
						const r = {
							fields: [{
								field: o[0].field,
								msg: o[0].message
							}],
							type: o[0].code
						};
						t(C({
							subredditName: e,
							error: r
						})), r && Object(S.a)(Object(E.h)(r.type, e)(n))
					} else await t(R())
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
						method: a.jb.GET
					}))(r(), {
						sr_detail: !1
					});
					if (l.ok) {
						const r = t(),
							s = l.body && l.body.length ? l.body.map(e => Object(i.C)(r, e)).filter(e => !!e).reduce((e, t) => (e[t] = !0, e), {}) : {};
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
				a = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/redditGQL/operations/SubredditTopContent.json"),
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
					const y = await ((e, t) => Object(a.a)(e, {
						...c,
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
				return m
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "m", (function() {
				return _
			})), r.d(t, "k", (function() {
				return T
			})), r.d(t, "l", (function() {
				return D
			})), r.d(t, "i", (function() {
				return P
			})), r.d(t, "j", (function() {
				return A
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
				m = "UPLOAD_CANCELED",
				O = "UPLOAD_REMOVED",
				h = Object(o.a)(u),
				E = Object(o.a)(l),
				_ = Object(o.a)(p),
				I = Object(o.a)(b),
				g = Object(o.a)(f),
				S = Object(o.a)(y),
				v = Object(o.a)(m),
				j = Object(o.a)(O),
				w = new Map,
				T = (e, t) => {
					const r = w.get(e) || [];
					r.push(t), w.set(e, r)
				},
				D = (e, t, r, s = !1) => async (a, o, {
					apiContext: u
				}) => {
					const l = t;
					if (o().uploads[l] && Object(i.c)(o().uploads[l])) return;
					const p = c()(),
						b = () => {
							const e = o().uploads[l];
							return !e || e.id !== p || e.status === i.a.CANCELED
						};
					a(h({
						key: l,
						id: p,
						file: e
					}));
					const {
						uploadLease: f,
						error: y
					} = await r(o().uploads[l]);
					if (b()) return;
					if (y || !f) return void a(S({
						key: l,
						error: y
					}));
					let m;
					T(p, () => {
						m && m.abort()
					}), a(E({
						key: l
					}));
					const O = await Object(d.a)(e, f, e => (m = e, s && e.on("progress", e => {
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
					if (m = null, !b())
						if (O.ok) {
							const e = decodeURIComponent(O.body.PostResponse.Location);
							a(g({
								key: l,
								url: e
							}))
						} else {
							const e = n()(O, "body.Error.Message.0"),
								t = {
									type: "ERROR",
									...e ? {
										fields: [{
											field: "0",
											msg: e
										}]
									} : {}
								};
							a(S({
								key: l,
								error: t
							}))
						}
				}, P = (e, t = !1) => (r, s) => {
					const n = s().uploads[e];
					n && (((e, t) => {
						const r = w.get(e);
						r && r.forEach(r => r(e, t)), w.delete(e)
					})(n.id, t), r(t ? j({
						key: e
					}) : v({
						key: e
					})))
				}, A = (e, t = !1) => (r, s) => {
					Object.keys(s().uploads).forEach(s => {
						s.startsWith(e) && r(P(s, t))
					})
				}
		},
		"./src/reddit/actions/upvotePrompt.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			})), r.d(t, "b", (function() {
				return f
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/config.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/actions/post.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/helpers/localStorage/index.ts"),
				i = r("./src/reddit/selectors/telemetry.ts");
			const u = "upvote_prompt";
			var l = r("./src/reddit/selectors/upvotePrompt.ts"),
				p = r("./src/telemetry/index.ts");
			const b = "INCREMENT_SEEN_COUNT_PER_SESS",
				f = (e, t, r) => async (a, c) => {
					const b = c(),
						f = Object(d.A)(),
						h = Date.now(),
						E = f && h - f < 18e4,
						_ = Object(l.c)(b, {
							postId: e
						}),
						I = b.upvotePromptCountPerSess,
						g = (() => {
							const e = Object(d.z)();
							if (!e) return [];
							const t = Date.now();
							return e.filter(e => t - e < 864e5)
						})();
					if (!e || !_ || E || I >= 4 || g.length >= 1) return;
					const S = m(b, t);
					if (!S) return;
					a(Object(o.f)({
						text: S,
						buttonText: s.fbt._("UPVOTE POST", null, {
							hk: "1u7UnZ"
						}),
						customIconAsset: `${n.a.assetPath}/img/snoo-upvote.png`,
						duration: l.a,
						buttonAction: y(e),
						onClose: () => Object(p.a)((e => ({
							source: u,
							action: "click",
							noun: "close",
							...Object(i.defaults)(e)
						}))(b))
					}));
					const v = [...g, Date.now()].slice(Math.max(g.length + 1 - 1, 0));
					Object(p.a)((e => ({
						source: u,
						action: "view",
						noun: u,
						...Object(i.defaults)(e)
					}))(b)), Object(d.Cb)(), Object(d.Bb)(v), a(O()), r && r()
				}, y = e => async (t, r) => {
					Object(p.a)((e => ({
						source: u,
						action: "click",
						noun: "upvote",
						...Object(i.defaults)(e)
					}))(r())), Object(l.c)(r(), {
						postId: e
					}) && t(Object(c.db)(e))
				}, m = (e, t) => {
					return t ? s.fbt._("If you enjoyed that post, upvote it so that more redditors will see it too.", null, {
						hk: "1Y6B4I"
					}) : s.fbt._("If you enjoyed this post, upvote it so that more redditors will see it too.", null, {
						hk: "HR9Ye"
					})
				}, O = Object(a.a)(b)
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./src/lib/matchRoute/index.ts"),
				n = r("./src/lib/opener/index.ts"),
				a = r("./node_modules/react-router-redux/es/index.js");
			const c = (e, t = !0) => async (r, c, {
				routes: o
			}) => {
				const d = c();
				Object(s.a)(e, o, d) ? r(Object(a.b)(e)) : t ? Object(n.e)(e, "_blank") : window.location.assign(e)
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
				return m
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "g", (function() {
				return S
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
				m = e => async (t, r, {
					apiContext: n
				}) => {
					if (r().blockUser.api.pending[e]) return;
					t(b({
						username: e
					}));
					const i = await Object(o.a)(n(), e),
						u = `error-block-${e}`;
					if (i.ok) i.body.name && t(f(i.body)), i.body.id && t(Object(a.f)(i.body.id)), t(c.g(u)), t(c.f({
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
						t(y(r)), t(c.f({
							id: u,
							kind: d.b.Error,
							text: s.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: m(e)
						}))
					}
				}, O = "USER_UNBLOCK__PENDING", h = "USER_UNBLOCK__SUCCESS", E = "USER_UNBLOCK__FAILED", _ = Object(n.a)(O), I = Object(n.a)(h), g = Object(n.a)(E), S = e => async (t, r, {
					apiContext: n
				}) => {
					const u = r(),
						l = Object(i.k)(u),
						p = l ? l.id : void 0,
						b = u.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(_({
						name: e
					})), (await Object(o.c)(n(), p, e)).ok ? (t(I({
						name: e
					})), b && b.id && t(Object(a.h)(b.id)), t(c.f({
						kind: d.b.SuccessCommunity,
						text: s.fbt._("{username} is now unblocked", [s.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(c.f({
						kind: d.b.Error,
						text: s.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(g({
						name: e
					}))))
				}
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
				return m
			})), r.d(t, "a", (function() {
				return O
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
					d.ok ? d.body.name && (t(p(d.body)), t(a.f({
						kind: o.b.SuccessCommunity,
						text: s.fbt._("Changes saved", null, {
							hk: "3cOmlv"
						})
					}))) : (t(b()), t(a.f({
						kind: o.b.Error,
						text: s.fbt._("An error has occured. Please try again later", null, {
							hk: "3Dszn7"
						})
					})))
				}, y = "USER_UNWHITELIST__PENDING", m = "USER_UNWHITELIST__SUCCESS", O = "USER_UNWHITELIST__FAILED", h = Object(n.a)(y), E = Object(n.a)(m), _ = Object(n.a)(O), I = e => async (t, r, {
					apiContext: n
				}) => {
					t(h({
						name: e
					})), (await Object(c.d)(n(), e)).ok ? (t(E({
						name: e
					})), t(a.f({
						kind: o.b.SuccessCommunity,
						text: s.fbt._("Changes saved", null, {
							hk: "2o6UcC"
						})
					}))) : (t(_({
						name: e
					})), t(a.f({
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
		"./src/reddit/actions/wrappedReddit/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "g", (function() {
				return i
			}));
			const s = "WRAPPED_REDDIT_CARDS_PENDING",
				n = "WRAPPED_REDDIT_CARDS_LOADED",
				a = "WRAPPED_REDDIT_CARDS_FAILED",
				c = "WRAPPED_REDDIT_RESET",
				o = "WRAPPED_REDDIT_SHARE_CARD_WAS_OPENED",
				d = "WRAPPED_REDDIT_SET_CARD_INDEX",
				i = "WRAPPED_REDDIT_SUBREDDIT_CHANGED"
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "BlankPost", (function() {
				return u
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/reddit/components/AdViewability/index.tsx"),
				c = r("./src/reddit/connectors/PostViewable/index.ts"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/contexts/Post/index.tsx");
			const i = Object(c.a)(null),
				u = ({
					className: e,
					post: t
				}) => t.isSponsored ? n.a.createElement(a.a, {
					post: t,
					trackDisplay: !0
				}, n.a.createElement("div", {
					className: Object(o.a)(e, `Blank ${t.id}`)
				})) : null;
			t.default = Object(d.b)(i(u))
		},
		"./src/reddit/components/ClassicPost/Thumbnail.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/Thumbnail/index.tsx"),
				o = r("./src/reddit/components/ClassicPost/index.m.less"),
				d = r.n(o);
			t.a = ({
				className: e,
				classNameInnerThumbnail: t,
				crosspost: r,
				forceShowNSFW: s,
				isMeta: o,
				post: i,
				redditStyle: u,
				removeLink: l,
				templatePlaceholderImage: p,
				thumbnailContainerClassName: b,
				url: f,
				usePreview: y
			}) => n.a.createElement("div", {
				className: Object(a.a)(d.a.thumbnailContainer, e)
			}, n.a.createElement(c.a, {
				className: Object(a.a)(d.a.thumbnail, t),
				containerClassName: b,
				crosspost: r,
				forceShowNSFW: s,
				isMeta: o,
				post: i,
				redditStyle: u,
				removeLink: l,
				templatePlaceholderImage: p,
				url: l ? void 0 : f,
				usePreview: y
			}))
		},
		"./src/reddit/components/ClassicPost/index.m.less": function(e, t, r) {
			e.exports = {
				adLinkWrapper: "_2c-0jMA2BuDIlKjWFiOUOt",
				classicThumbnail: "nL7Q54U2LLg9rkVdSxxLe",
				content: "_1Y6dfr4zLlrygH-FLmr8x-",
				showBulkActionCheckbox: "W-Z7cDkcZIo1dPic9COiN",
				flatlistContainer: "_36kpXQ-z7Hr61j8878uRkP",
				crosspostMediaWrapper: "_1qc1-Anfrhr6APGcBKFk8M",
				expandoContainer: "_3r40yytzBnldjGGOrs2mCw",
				flatlist: "ssgs3QQidkqeycI33hlBa",
				flatlistSeparator: "_1wDt70OnYnqsrm0XIsNn8v",
				horizontalVotes: "_3ytybPoFoY12sGn375PMy1",
				leftExpando: "_35zWJjb5RJMIMkexZ2Prus",
				mainBody: "_2XDITKxlj4y3M99thqyCsO",
				rightExpando: "_2Ddj1d6vOe9NlJqkdothNe",
				spacer: "iRkLLvxarfGu_2c7HxhW0",
				titleWithPoll: "_2FcpdQwjwRwk7X_NiZub8x",
				thumbnail: "_2e9Lv1I3dOmICVO9fg3uTG",
				thumbnailContainer: "_38EcSQ9jzVrdtzkXO1cydX",
				eventMeta: "rmPDRyja27ULjwD3rW14H",
				postContainer: "D3IyhBGwXo9jPwz-Ka0Ve",
				promotedMainBody: "_1LAkIKOirJP5Hor0NamqyY",
				mFirst: "_23tSz_ar8phNRBBW1afkYr"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less": function(e, t, r) {
			e.exports = {
				item: "XEkFoehJNxIH9Wlr5Ilzd",
				mFocused: "_3Av66iQf7_N4Z-XZxsek76",
				itemWrapper: "_17q-ew4FcK6U0ZiybWkIGG",
				customFeedIcon: "ENGeNwSHzwN-SV2KTH2s7",
				icon: "_3HTtcITrR-crvsRovLrijl",
				favorite: "t2A0mgkgGzc8cAahJsR7a",
				text: "_2aqH0n-kSzFY7HZZ5GL-Jb",
				subText: "_2Efd4uMAp4YawdvL9Zhdhv",
				title: "_1JNAu7U5gWAkRoykwfUWhY",
				mFavorite: "_2cEhEGN_WTLlwspw_bpqTr",
				relatedSubredditMetaData: "_3P_WRCH8aFjwOFA7B1RlBL",
				promoted: "bpYVdL9hAnIqOnrKi8PVS"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less": function(e, t, r) {
			e.exports = {
				header: "_3n88GuUHAnxPu6a--3e0sz",
				item: "_1TJuQGHgWvq2fnkVcPN7d0"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/index.m.less": function(e, t, r) {
			e.exports = {
				caretDown: "_3CG2U_hX3HI-ibl5v2RCq1",
				container: "_3jiriKeNer8y0-1r6oWIFM",
				mOpen: "_24x5wRDxU1y38uXQXvLE4m",
				mNotPinned: "_3rS8YTDjcT7fs0k9W4rxDG",
				mPinned: "_3NgME2HFZvM-tgAE3s5hXS",
				containerExp: "_11HXvp3b_PzyK6RcoEr4bJ",
				containerText: "_1GieMuLljOrqnVpRAwz7VP",
				defaultIcon: "eZQ5o2PrhR59wkAtPbxMU",
				customFeedIcon: "_1r2uMQFZw5Hg53NkK6rsKv",
				icon: "_1jKtP65jnxLmoGCSqxAgkZ",
				subredditIcon: "_3fvJBCH6c6P0NvMwoqK9MJ",
				unknownIcon: "_1hCoGzhwFdfF2vGbt8IjSy",
				userIcon: "E6V2eHU4CpJuLWzneTk0Z",
				wrappedRedditDropdown: "XUd7bCU9SM6ycr6f242KD",
				wrappedRedditLogoActive: "_3kzPDKtqN0MnLhOsSJVKHZ",
				coinIcon: "JisrPypso_3RK4iDgDdke",
				modQueueIcon: "_2L4XuYlbElLC5REx1XpdG_",
				premiumIcon: "_2ulegyMhoTE_WCFyBC-IBx",
				publicAccessNetworkIcon: "_3jFEC4X3IL9Zr-pzUzyCp7",
				wrappedRedditLogo: "_29Am3nlgySiqDV_UaDXD69",
				itemModQueue: "_1VemFsujoJ-6RR82VRSPeM",
				listContainer: "TMMvbwyeh9yuHKmQWHrE3",
				multiPlusButton: "_3mvXSuBIpYAdAsBJSB-1G5",
				multiPlusIcon: "_2T11xMsmkdwP6G_mY6eUBW",
				pin: "_2FVCfsIPxXtl6S-c69sXO4",
				disabled: "_371yhrlWAj7dxOsk1PWqG4",
				selector: "h-jI8r2f9ozTNqu_2TBeY"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = 20,
				n = 180
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
		"./src/reddit/components/SearchDropdown/index.m.less": function(e, t, r) {
			e.exports = {
				listItemIcon: "fcDVF0HYfR8ZcZgQVT0oo",
				mTrending: "cuK0QQebBI_tpWwN_YN9M",
				listItemTitle: "_3HPgggOIyY0x9kiADxwwaj",
				mWithBorder: "_2Uets9AVOC4pygPHGHCAAM",
				listItem: "_20OHBqoDD71_8fv7tuG6u6",
				mHoverable: "_1IJwm0Qscr8yPuyii8YsSS",
				mFocused: "_1NDuQGNA_7Cuo411jRXLVg",
				mTypeahead: "_3NseKdP3_1HONmKk_kK3_l",
				listItemText: "_17mZueOafzj0Dlja0Wc9os",
				listItemSubtext: "_1CCbYggNpm1_k3lDTmKgSW",
				mNoPostTitle: "_3etfe7dx7ViSNcYo4Q--LD",
				loadingItem: "_3wwag2ZgVLfNKLCuEuXF7h",
				dropdown: "_1HnfZtTmYelxTj6QL6aaXS",
				fixedTextTooltip: "_1U-nknzRP43RdLab5D4_lK",
				planetIcon: "_2Tfe4NhLJlRQkuO1yhzqR2",
				subredditIcon: "_3uBNO7SvsRGN4W794WAO_p",
				subredditIconStyles: "_26nS8Ogzm0pqOjlwfGRgJR",
				postTitle: "YeMwUP22Up8CVxmgTayyQ",
				trendingIcon: "_2VyZLE_5g-CDpUucbfHyOg",
				defaultCommunityIcon: "nltZBKTbnoPZEcEaIufmh",
				mNightmode: "TiWmxUzfBQADxToVGHQeM"
			}
		},
		"./src/reddit/components/SearchDropdown/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return X
			})), r.d(t, "a", (function() {
				return Y
			})), r.d(t, "c", (function() {
				return te
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/higherOrderComponents/asTooltip.tsx"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				u = e => e.endsWith("/") ? e : `${e}/`,
				l = r("./src/lib/makeSearchKey/index.ts"),
				p = r("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				b = r.n(p),
				f = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				y = r("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				m = r("./src/reddit/constants/history.ts"),
				O = r("./src/reddit/helpers/getSearchUrl/index.ts"),
				h = r("./src/reddit/icons/fonts/index.tsx"),
				E = r("./src/reddit/models/Search/index.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				I = r("./node_modules/uuid/v4.js"),
				g = r.n(I),
				S = r("./src/reddit/components/SearchDropdown/index.m.less"),
				v = r.n(S);
			const j = Object(c.a)(f.b);

			function w({
				activeTooltipId: e,
				className: t,
				focusedItem: r,
				nightmode: s,
				recentSearch: c,
				searchOriginPage: p,
				indexOfItem: f,
				toggleTooltip: I,
				onClearSearchQuery: S,
				onRemoveRecentSearch: w,
				onUpdateSearchQuery: T,
				onSendSearchClickRecentEvent: D,
				onCloseDropdown: P
			}) {
				const {
					nsfwSessionSetting: A,
					refreshNsfwSessionSettingExpiryTime: C
				} = Object(y.a)(), R = Object(a.e)(_.eb), k = e => e.subredditOrProfileRestrictedName ? `${e.subredditOrProfileRestrictedName} ${e.searchQuery}` : e.searchQuery, N = Object(O.a)({
					includeNsfwResults: R && A,
					multireddit: null,
					searchItem: c,
					searchOptions: {
						source: l.a.Recent
					},
					subreddit: null
				}), L = null == N ? void 0 : N.url, x = null == N ? void 0 : N.qs, U = k(c);
				let M;
				r && (M = k(r));
				const G = c.isProfile || c.isSubreddit ? {
					[m.b.ClickSource]: "search_dropdown",
					[m.b.ClickId]: g()()
				} : void 0;
				return n.a.createElement(i.a, {
					"aria-label": c.searchQuery,
					className: Object(o.a)(v.a.listItem, b.a.item, t, {
						[v.a.mFocused]: !(!r || r.section !== E.c.recent || M !== U)
					}),
					onClick: () => {
						c.isTypeaheadSuggestion ? S() : T(c.searchQuery), D(c.searchQuery, c, f), P(), C()
					},
					key: U,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: L && u(L) || "",
						state: {
							...G,
							[m.b.SearchOriginPage]: p
						},
						search: x
					}
				}, c.displayInfo && c.isTypeaheadSuggestion ? c.displayInfo.iconUrl ? n.a.createElement("div", {
					className: v.a.subredditIcon,
					style: {
						backgroundImage: `url('${c.displayInfo.iconUrl}')`
					}
				}) : n.a.createElement(h.a, {
					name: "community",
					isFilled: !s,
					className: Object(o.a)(v.a.defaultCommunityIcon, {
						[v.a.mNightmode]: s
					})
				}) : n.a.createElement(h.a, {
					name: "search"
				}), n.a.createElement("span", {
					className: b.a.text
				}, U), n.a.createElement("div", {
					onMouseEnter: () => I(U),
					onMouseLeave: () => I(null),
					id: U
				}, n.a.createElement(h.a, {
					name: "clear",
					onMouseUp: e => {
						e.stopPropagation(), e.preventDefault(), w(c)
					}
				}), n.a.createElement(j, {
					className: v.a.fixedTextTooltip,
					isOpen: e === U,
					text: d.fbt._("Remove", null, {
						hk: "2P57BY"
					}),
					tooltipId: U,
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				})))
			}
			var T = r("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				D = r("./src/reddit/components/PostTitle/index.tsx"),
				P = r("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				A = r("./src/reddit/constants/adEvents.ts"),
				C = r("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				R = r("./src/reddit/helpers/canRenderThumbnail.ts"),
				k = r("./src/reddit/helpers/correlationIdTracker.ts"),
				N = r("./src/reddit/helpers/trackers/discoveryUnit.ts");

			function L({
				className: e,
				focusedItem: t,
				id: r,
				trendingItem: s,
				searchOriginPage: c,
				onUpdateSearchQuery: p,
				onCloseDropdown: f,
				onSetRecentSearch: y,
				fireAdPixelsOfType: _
			}) {
				const I = Object(a.d)(),
					g = !(!s.post || !s.post.isSponsored),
					S = Object(O.a)({
						multireddit: null,
						searchItem: s,
						searchOptions: {
							source: g ? l.a.PromotedTrend : l.a.Trending
						},
						subreddit: null
					}),
					j = null == S ? void 0 : S.url,
					w = null == S ? void 0 : S.qs,
					L = n.a.createElement(i.a, {
						id: r,
						"aria-label": s.searchQuery,
						className: Object(o.a)(v.a.listItem, v.a.mTrending, b.a.item, b.a.trending, e, {
							[v.a.mFocused]: !(!t || t.section !== E.c.trending || s.searchQuery !== t.searchQuery)
						}),
						onClick: () => {
							p(s.searchQuery);
							const e = (() => {
								const {
									post: e,
									subredditInfo: t,
									subredditOccurrences: r,
									...n
								} = s;
								return n
							})();
							if (y(e), Object(k.e)(k.a.SearchResults), (e => I((t, r) => Object(N.v)(r(), e, N.a.SEARCH_DROPDOWN)))(s), g) {
								const {
									post: e
								} = s;
								e && _(e, A.a.Click)
							}
							f()
						},
						key: `trending-${s.searchQuery}`,
						role: "link",
						tabIndex: -1,
						to: {
							pathname: j && u(j) || "",
							state: {
								[m.b.SearchOriginPage]: c
							},
							search: w
						}
					}, n.a.createElement("div", {
						className: b.a.trendingContent
					}, g && n.a.createElement("div", {
						className: b.a.promoted
					}, d.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), n.a.createElement("div", null, n.a.createElement(h.a, {
						name: "popular",
						className: v.a.trendingIcon
					}), n.a.createElement("span", null, n.a.createElement(D.a, {
						className: Object(o.a)(v.a.listItemText, v.a.mTrending, b.a.text, b.a.trending),
						redditStyle: !0,
						size: D.b.Small
					}, s.searchQuery)), s.post && n.a.createElement("div", {
						className: v.a.postTitle
					}, s.post.title)), s.subredditInfo && n.a.createElement(C.a, {
						className: Object(o.a)(b.a.relatedSubredditMetaData, v.a.listItemSubtext, {
							[v.a.mNoPostTitle]: !s.post
						}),
						iconUrl: s.subredditInfo.icon || void 0,
						suffix: d.fbt._("{subreddit name} and more", [d.fbt._param("subreddit name", s.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), s.post && Object(R.a)(s.post) && n.a.createElement(T.a, {
						post: s.post,
						removeLink: !0,
						usePreview: g
					}));
				return g ? n.a.createElement(P.a, {
					post: s.post
				}, L) : L
			}
			var x = r("./src/reddit/components/Flair/index.tsx"),
				U = r("./src/reddit/models/Flair/index.ts");

			function M({
				className: e,
				focusedItem: t,
				item: r,
				indexOfItem: s,
				nightmode: a,
				subredditSuggestions: c,
				onSendSearchClickTypeaheadEvent: l,
				onSetRecentSearch: p,
				onClearSearchQuery: f,
				onCloseDropdown: y
			}) {
				const O = !r.isProfile || r.enableFollowers;
				return n.a.createElement(i.a, {
					"aria-label": r.searchQuery,
					className: Object(o.a)(v.a.listItem, v.a.mTypeahead, b.a.item, e, {
						[v.a.mFocused]: !(!t || t.searchQuery !== r.searchQuery)
					}),
					onClick: () => {
						p(r), l(r.searchQuery, r, s, c), f(), y()
					},
					key: r.searchQuery,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: `/${u(r.isProfile?r.searchQuery.replace("u/","user/"):r.searchQuery)}`,
						state: {
							[m.b.ClickSource]: "typeahead",
							[m.b.ClickId]: g()()
						}
					}
				}, r.displayInfo && r.displayInfo.iconUrl ? n.a.createElement("div", {
					className: v.a.subredditIcon,
					style: {
						backgroundImage: `url('${r.displayInfo.iconUrl}')`
					}
				}) : n.a.createElement(h.a, {
					name: "community",
					isFilled: !a,
					className: Object(o.a)(v.a.defaultCommunityIcon, {
						[v.a.mNightmode]: a
					})
				}), n.a.createElement("div", null, r.displayInfo && r.displayInfo.subredditOrProfileName && n.a.createElement("div", {
					className: Object(o.a)(v.a.listItemText, v.a.mTypeahead, b.a.text)
				}, r.displayInfo.subredditOrProfileName), n.a.createElement("div", null, r.displayInfo && null != r.displayInfo.subscribers && O && n.a.createElement("div", {
					className: Object(o.a)(v.a.listItemSubtext, b.a.subText)
				}, d.fbt._({
					"*": "{members count} members",
					_1: "1 member"
				}, [d.fbt._plural(r.displayInfo.subscribers, "members count")], {
					hk: "1uMCes"
				})), r.displayInfo && r.displayInfo.isNSFW && n.a.createElement(x.b, {
					flair: {
						type: U.f.Nsfw,
						text: "nsfw"
					}
				}))))
			}
			var G = r("./src/reddit/constants/zIndex.ts"),
				F = r("./src/reddit/controls/Dropdown/index.tsx"),
				B = r("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				q = r.n(B),
				V = r("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				H = r.n(V),
				W = r("./src/reddit/constants/parameters.ts"),
				K = r("./src/reddit/helpers/trackers/searchResults.ts"),
				$ = r("./src/reddit/hooks/useTracking.ts"),
				Q = r("./src/reddit/selectors/telemetry.ts");

			function z({
				searchOriginPage: e,
				searchQuery: t,
				onCloseDropdown: r
			}) {
				const s = Object($.a)();
				return n.a.createElement(i.a, {
					onClick: function(e) {
						s(Object(K.k)(Q.OriginElement.FullSearchButton, Object(l.e)({
							q: t
						}))), r(e)
					},
					to: {
						pathname: "/search/",
						state: {
							[m.b.SearchOriginPage]: e
						},
						search: `${W.p}=${encodeURI(t)}`
					},
					className: Object(o.a)(v.a.listItem, b.a.item),
					"data-testid": "search-trigger-item"
				}, n.a.createElement(h.a, {
					name: "search"
				}), n.a.createElement("span", {
					className: b.a.text
				}, d.fbt._("Search for “", null, {
					hk: "28KVrM"
				}), d.fbt._("{search query}", [d.fbt._param("search query", t)], {
					hk: "4vP3YT"
				}), "”"))
			}
			const {
				fbt: J
			} = r("./node_modules/fbt/lib/FbtPublic.js"), X = "SearchDropdown", Y = "SearchDropdownContent", Z = 5, ee = Object(c.a)(F.a);

			function te({
				container: e,
				trendingItems: t,
				isTrendingPending: r,
				isInTrendingExperiment: c,
				isInUISimplificationI18NExperiment: d,
				isOpen: i,
				isTypeaheadPending: u,
				itemList: l,
				recentSearches: p,
				typeaheadSuggestions: f,
				focusedItemIndex: y,
				nightmode: m,
				searchQuery: O,
				searchOriginPage: h,
				isFixed: E = !0,
				isOverlay: _ = !0,
				fireAdPixelsOfType: I,
				onClearSearchQuery: g,
				onClose: S,
				onRemoveRecentSearch: j,
				onSendSearchClickRecentEvent: T,
				onSendSearchClickTypeaheadEvent: D,
				onSetRecentSearch: P,
				onUpdateSearchQuery: A
			}) {
				const C = Object(a.d)(),
					[R, k] = Object(s.useState)(null),
					x = function(e) {
						const [t, r] = Object(s.useState)(null), n = Object(s.useCallback)(() => {
							e && r(e.offsetWidth)
						}, [e]);
						return Object(s.useLayoutEffect)(n, [n]), Object(s.useEffect)(() => (window.addEventListener("resize", n), () => window.removeEventListener("resize", n)), [n]), t
					}(e),
					U = t.slice(0, Z),
					[F, B] = Object(s.useState)(new Array(Z).fill(!1)),
					V = !!(null == O ? void 0 : O.trim()),
					W = 0 === f.length && !u && !V;
				Object(s.useLayoutEffect)(() => {
					if (!r && i && document.getElementById(Y)) {
						const e = K();
						B(e), U.forEach((t, r) => {
							e[r] && C((e, r) => Object(N.w)(r(), t, N.a.SEARCH_DROPDOWN))
						})
					}
				}, [r, i, C]);
				const K = () => {
						const e = new Array(U.length).fill(!1);
						return U.forEach((t, r) => {
							if (t.id) {
								const s = document.getElementById(`${X}-${t.id}`),
									n = document.getElementById(Y);
								if (s && n) {
									const t = s.getBoundingClientRect(),
										a = n.getBoundingClientRect();
									t.top < a.bottom && t.bottom > a.top && (e[r] = !0)
								}
							}
						}), e
					},
					$ = {
						width: x ? `${x}px` : "inherit",
						marginTop: "7px",
						overflow: "auto"
					};
				E && ($.zIndex = G.g);
				const Q = Object(s.useMemo)(() => f.filter(e => e.isSubreddit), [f]);
				return n.a.createElement(ee, {
					className: Object(o.a)(v.a.dropdown, q.a.listContainer),
					id: Y,
					isFixed: E,
					isOpen: i,
					isOverlay: _,
					tooltipId: X,
					noFocus: !0,
					renderContentsHidden: !0,
					style: $,
					onDropdownMounted: () => {
						if (!r && U.length > 0) {
							const e = K();
							B(e), U.forEach((t, r) => {
								e[r] && C((e, r) => Object(N.w)(r(), t, N.a.SEARCH_DROPDOWN))
							})
						}
					},
					onScroll: () => {
						const e = K();
						U.forEach((t, r) => {
							F[r] || !e[r] || t.post && t.post.isSponsored || C((e, r) => Object(N.w)(r(), t, N.a.SEARCH_DROPDOWN))
						}), B(e)
					}
				}, f.map((e, t) => n.a.createElement(M, {
					focusedItem: f[y],
					indexOfItem: t,
					subredditSuggestions: Q,
					item: e,
					key: e.id,
					onClearSearchQuery: g,
					onSendSearchClickTypeaheadEvent: D,
					onSetRecentSearch: P,
					nightmode: m,
					onCloseDropdown: S
				})), W && p.map((e, t) => n.a.createElement(w, {
					searchOriginPage: h,
					activeTooltipId: R,
					focusedItem: l[y],
					indexOfItem: t,
					key: e.id,
					onClearSearchQuery: g,
					onRemoveRecentSearch: j,
					onSendSearchClickRecentEvent: T,
					onSetRecentSearch: P,
					onUpdateSearchQuery: A,
					recentSearch: e,
					toggleTooltip: k,
					nightmode: m,
					onCloseDropdown: S
				})), W && !d && c && !r && t && n.a.createElement("div", {
					className: Object(o.a)(b.a.title, v.a.listItemTitle, {
						[v.a.mWithBorder]: !!p.length
					})
				}, J._("Trending today", null, {
					hk: "3nAMpY"
				})), (u || !d && r) && n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(o.a)(v.a.loadingItem, H.a.item)
				}), n.a.createElement("div", {
					className: Object(o.a)(v.a.loadingItem, H.a.item)
				}), n.a.createElement("div", {
					className: Object(o.a)(v.a.loadingItem, H.a.item)
				}), n.a.createElement("div", {
					className: Object(o.a)(v.a.loadingItem, H.a.item)
				}), n.a.createElement("div", {
					className: Object(o.a)(v.a.loadingItem, H.a.item)
				})), W && !d && c && U.map(e => n.a.createElement(L, {
					id: `${X}-${e.id}`,
					key: e.id,
					focusedItem: l[y],
					searchOriginPage: h,
					fireAdPixelsOfType: I,
					onCloseDropdown: S,
					onSetRecentSearch: P,
					onUpdateSearchQuery: A,
					trendingItem: e
				})), V && n.a.createElement(z, {
					searchOriginPage: h,
					searchQuery: O,
					onCloseDropdown: S
				}))
			}
		},
		"./src/reddit/components/SearchNSFWToggle/hooks.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/reddit/hooks/useLocalStorage.ts");
			const a = 30 * s.kb,
				c = () => Date.now() + a,
				o = () => ({
					allowNsfwSearchResults: !1,
					expires: c()
				}),
				d = () => {
					const [e, t] = Object(n.a)("allow-nsfw-search-results", o());
					return {
						get nsfwSessionSetting() {
							if (e.expires < Date.now()) {
								const e = o();
								return t(e), e.allowNsfwSearchResults
							}
							return e.allowNsfwSearchResults
						},
						refreshNsfwSessionSettingExpiryTime: () => {
							t({
								allowNsfwSearchResults: e.allowNsfwSearchResults,
								expires: c()
							})
						},
						setNsfwSessionSetting: e => {
							t({
								allowNsfwSearchResults: e,
								expires: c()
							})
						}
					}
				}
		},
		"./src/reddit/components/SubredditForkingCTA/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return S
			})), r.d(t, "a", (function() {
				return D
			}));
			var s = r("./node_modules/core-js/modules/web.dom.iterable.js"),
				n = r.n(s),
				a = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				c = r("./node_modules/react/index.js"),
				o = r.n(c),
				d = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/constants/comments.ts"),
				u = r("./src/reddit/models/Subreddit/index.ts"),
				l = r("./src/reddit/selectors/comments.ts"),
				p = r("./src/reddit/selectors/posts.ts"),
				b = r("./src/reddit/selectors/user.ts"),
				f = r("./node_modules/reselect/es/index.js"),
				y = r("./src/lib/cache/index.ts"),
				m = r("./src/lib/makeCommentsPageKey/index.ts"),
				O = r("./src/reddit/helpers/trackers/subredditForking.ts"),
				h = r("./src/reddit/components/TrackingHelper/index.tsx");
			const E = Object(a.a)({
					resolved: {},
					chunkName: () => "SubredditForkingCTA",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => r.e("SubredditForkingCTA").then(r.bind(null, "./src/reddit/components/SubredditForkingCTA/SubredditForkingCTA.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditForkingCTA/SubredditForkingCTA.tsx"
					}
				}),
				_ = [{
					low: 0,
					high: 1e5,
					threshold: 100
				}, {
					low: 1e5,
					high: 3e5,
					threshold: 200
				}, {
					low: 3e5,
					high: 8e5,
					threshold: 300
				}, {
					low: 8e5,
					high: 1 / 0,
					threshold: 500
				}],
				I = "subreddit-forking.dismissals",
				g = (e, t) => {
					const r = Object(b.k)(e),
						s = Object(m.a)(t.postId),
						n = Object(p.H)(e, t),
						a = Object(l.o)(e, {
							...t,
							commentsPageKey: s
						}),
						c = Object(l.k)(e, {
							...t,
							commentsPageKey: s
						}).reduce((t, r) => {
							var s;
							const n = Object(l.l)(e, {
								commentLink: r
							});
							return r.type !== i.a.Comment && 0 !== (null === (s = a[r.id]) || void 0 === s ? void 0 : s.depth) || t.push(n), t
						}, []).sort((e, t) => t.score - e.score).slice(0, 5);
					return (null == r ? void 0 : r.id) === n.authorId || !!c.find(e => e.authorId === (null == r ? void 0 : r.id))
				},
				S = e => {
					let t = Object(y.b)(I);
					const r = Object.entries(t || {});
					r.length >= 99 && (t = r.sort(([, e], [, t]) => t - e).splice(0, 99).reduce((e, [t, r]) => (e[t] = r, e), {})), Object(y.d)(I, {
						...t,
						[e]: Date.now()
					}, Date.now() + 2592e3)
				},
				v = (e, t) => {
					var r;
					if (!Object(b.K)(e)) return !1;
					if (null === (r = Object(y.b)(I)) || void 0 === r ? void 0 : r[t.postId]) return !1;
					const s = Object(p.H)(e, t),
						n = Object(p.U)(e, {
							...t,
							disallowProfile: !0
						});
					if ((null == n ? void 0 : n.type) !== u.f.Public || n.isNSFW || n.isQuarantined || (null == s ? void 0 : s.isNSFW) || (null == s ? void 0 : s.source)) return !1;
					const a = _.find(({
						low: e,
						high: t
					}) => t >= n.subscribers && n.subscribers > e);
					return !(!a || !s.numComments || a.threshold > s.numComments) && !!g(e, t)
				},
				j = () => Object(f.c)({
					shouldLoadCTA: v
				}),
				w = Object(d.b)(j),
				T = ({
					shouldLoadCTA: e,
					postId: t,
					sendEvent: r
				}) => {
					const [s, n] = Object(c.useState)(!1);
					return s || !e ? null : o.a.createElement(E, {
						onClose: () => {
							S(t), n(!0), r(Object(O.b)(t))
						},
						postId: t
					})
				},
				D = Object(c.memo)(w(Object(h.c)(T)))
		},
		"./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/reddit/components/AdViewability/index.tsx"),
				c = r("./src/reddit/components/BlankPost/index.tsx"),
				o = r("./src/reddit/connectors/PostViewable/index.ts");
			const d = Object(o.a)(null);
			class i extends n.a.Component {
				render() {
					const {
						children: e,
						post: t,
						onPostViewable: r
					} = this.props;
					if (t) return t.isBlank ? n.a.createElement(c.BlankPost, {
						post: t,
						postId: t.id,
						onPostViewable: r
					}) : n.a.createElement(a.a, {
						post: t,
						trackDisplay: !0
					}, e)
				}
			}
			t.a = d(i)
		},
		"./src/reddit/controls/Search/RelatedSubredditMetaData.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/objectSelector/index.ts"),
				i = r("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				u = r("./src/reddit/components/SubredditIcon/index.tsx"),
				l = r("./src/reddit/selectors/subreddit.ts"),
				p = r("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				b = r.n(p),
				f = r("./src/reddit/controls/Search/index.m.less"),
				y = r.n(f);
			const m = Object(a.b)(() => Object(c.c)({
				subredditsByName: Object(d.a)((e, t) => {
					const r = {};
					return t.subredditIcons && t.subredditIcons.map(t => {
						r[t.subredditName] = Object(l.w)(e, {
							subredditName: t.subredditName
						})
					}), r
				})
			}))(e => n.a.createElement("div", {
				className: Object(o.a)(b.a.subText, y.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => n.a.createElement(i.a, {
				key: `${t.subredditName}-hoverCard`,
				subredditName: t.subredditName
			}, n.a.createElement(u.b, {
				className: Object(o.a)(y.a.subredditIcon, y.a.isHeaderIcon, e.iconClassName),
				linkTo: `/r/${t.subredditName}/`,
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : n.a.createElement(u.b, {
				className: Object(o.a)(y.a.subredditIcon, e.iconClassName),
				key: e.iconUrl,
				iconUrl: e.iconUrl
			}), e.suffix && n.a.createElement("span", null, e.suffix)))
		},
		"./src/reddit/controls/Search/index.m.less": function(e, t, r) {
			e.exports = {
				relativeWrapper: "_1blFGqU8stoZgWSZ8MQNpf",
				hasIcons: "_1M-azLenSs2UgxeZ2rJX20",
				subText: "_2-DL_E9cFo1xsqU3Q8BXnJ",
				subredditIcon: "_2me05I1oHEys1gUyyDWswt",
				isHeaderIcon: "_1biYoFBD4CLgOvrr_HinV4"
			}
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "b", (function() {
				return b
			}));
			var s = r("./src/config.ts"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts"),
				d = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const i = async (e, t) => Object(a.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: n.jb.POST
			}), u = async (e, t, r) => Object(a.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: r,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: n.jb.POST
			}), l = async (e, t) => Object(a.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: n.jb.POST
			}), p = async (e, t) => Object(a.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: n.jb.POST
			}), b = async (e, t) => Object(a.a)(Object(c.a)(e, [o.a]), {
				endpoint: Object(d.a)(`${s.a.oauthUrl}/user/${t}/about`),
				method: n.jb.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/endpoints/chat/userSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return p
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "a", (function() {
				return m
			}));
			var s = r("./src/config.ts"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				d = r("./src/redditGQL/operations/UpdateChatMessagesAsRead.json"),
				i = r("./src/reddit/constants/headers.ts"),
				u = r("./src/redditGQL/operations/CreateChatChannelInviteLink.json"),
				l = r("./src/redditGQL/types.ts");
			const p = e => Boolean(e && e.data && (null == e ? void 0 : e.errors)),
				b = e => Object(a.a)(Object(o.a)(e, [i.a]), {
					endpoint: `${s.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
					method: n.jb.GET
				}),
				f = async (e, t) => Object(a.a)(Object(o.a)(t, [i.a]), {
					endpoint: `${s.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
					method: n.jb.PUT,
					data: JSON.stringify({
						invite_policy: e
					})
				}), y = (e, t) => {
					const r = {
						channels: t
					};
					return Object(c.a)(e, {
						...d,
						variables: {
							input: r
						}
					})
				}, m = e => Object(c.a)(e, {
					...u,
					variables: {
						input: {
							customType: l.a.Direct
						}
					}
				})
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return m
			})), r.d(t, "m", (function() {
				return O
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "l", (function() {
				return E
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "h", (function() {
				return I
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "k", (function() {
				return S
			})), r.d(t, "j", (function() {
				return v
			})), r.d(t, "f", (function() {
				return j
			})), r.d(t, "g", (function() {
				return w
			})), r.d(t, "b", (function() {
				return D
			})), r.d(t, "c", (function() {
				return P
			}));
			var s = r("./src/config.ts"),
				n = r("./src/redditGQL/operations/UpdateCommentDistinguishState.json"),
				a = r("./src/redditGQL/operations/UpdateCommentStickyState.json"),
				c = r("./src/redditGQL/types.ts"),
				o = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				u = r("./src/lib/omitHeaders/index.ts"),
				l = r("./src/reddit/constants/headers.ts"),
				p = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				b = r("./src/reddit/models/Comment/addProfileImgParam.ts"),
				f = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				y = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const m = (e, t) => Object(d.a)(Object(u.a)(e, [l.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/save`),
					method: o.jb.POST,
					data: {
						id: t
					}
				}),
				O = (e, t) => Object(d.a)(Object(u.a)(e, [l.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/unsave`),
					method: o.jb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(d.a)(Object(u.a)(e, [l.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/lock`),
					method: o.jb.POST,
					data: {
						id: t
					}
				}),
				E = (e, t) => Object(d.a)(Object(u.a)(e, [l.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/unlock`),
					method: o.jb.POST,
					data: {
						id: t
					}
				}),
				_ = (e, t) => Object(d.a)(Object(u.a)(e, [l.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/approve`),
					method: o.jb.POST,
					data: {
						id: t
					}
				}),
				I = (e, t, r) => Object(d.a)(Object(u.a)(e, [l.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/remove`),
					method: o.jb.POST,
					data: {
						id: t,
						spam: r
					}
				}),
				g = (e, t) => Object(d.a)(Object(u.a)(e, [l.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: o.jb.POST,
					data: {
						id: t
					}
				}),
				S = (e, t) => Object(d.a)(Object(u.a)(e, [l.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: o.jb.POST,
					data: {
						id: t
					}
				}),
				v = (e, t) => Object(d.a)(Object(u.a)(e, [l.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: o.jb.POST,
					data: {
						id: t
					}
				}),
				j = (e, t, r, n) => {
					let a = Object(p.a)(Object(y.a)(Object(f.a)(`${s.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return n && (a = Object(b.a)(a)), Object(d.a)(e, {
						data: r,
						endpoint: a,
						method: o.jb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				w = (e, t, r, s) => Object(d.a)(Object(u.a)(e, [l.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/distinguish/${r}`),
					method: o.jb.POST,
					data: {
						id: t,
						sticky: s
					}
				}),
				T = {
					[o.G.NONE]: c.d.None,
					[o.G.MODERATOR]: c.d.ModDistinguished,
					[o.G.ADMIN]: c.d.AdminDistinguished,
					[o.G.ALUMNI_ADMIN]: c.d.AlumniDistinguished
				};

			function D(e, t, r) {
				const s = function(e, t) {
					return {
						input: {
							commentId: e,
							distinguishState: t === o.G.NONE ? c.b.None : c.b.Distinguished,
							distinguishType: T[t]
						}
					}
				}(t, r);
				return Object(i.a)(e, {
					...n,
					variables: s
				})
			}

			function P(e, t, r) {
				return Object(i.a)(e, {
					...a,
					variables: {
						input: {
							commentId: t,
							sticky: r
						}
					}
				})
			}
		},
		"./src/reddit/endpoints/crowdControl/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s, n = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/CrowdControlLevelInfo.json");
			! function(e) {
				e.Off = "OFF", e.Lenient = "LENIENT", e.Medium = "MEDIUM", e.Strict = "STRICT"
			}(s || (s = {}));
			const c = (e, t) => Object(n.a)(e, {
				...a,
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
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "j", (function() {
				return c
			})), r.d(t, "i", (function() {
				return o
			})), r.d(t, "h", (function() {
				return d
			})), r.d(t, "l", (function() {
				return i
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "m", (function() {
				return l
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "n", (function() {
				return h
			}));
			var s, n = r("./src/config.ts"),
				a = r("./src/reddit/endpoints/governance/requester.ts");

			function c(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "Ethereum Main Network";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function o(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case s.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:5391184"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function d(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "homestead";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "rinkeby";
					case s.ArbitrumRinkeby:
						return 5391184
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}

			function i(e) {
				return e === s.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function u(e, t, r) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: `${n.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function l(e, t, r) {
				return await Object(a.a)(e, {
					method: "post",
					endpoint: `${n.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function p(e, t, r) {
				return await Object(a.a)(e, {
					method: "delete",
					endpoint: `${n.a.metaUrl}/crypto/${t}/registrations/${r}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:5391184", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(s || (s = {}));
			const b = (e, t, r) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: r
				}),
				f = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				y = e => ({
					type: "claim",
					subredditId: e
				}),
				m = e => ({
					type: "subscribe",
					subredditId: e
				}),
				O = (e, t, r, s) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: s
				});
			async function h(e, t) {
				return await Object(a.a)(e, {
					method: "put",
					endpoint: `${n.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
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
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/config.ts"),
				n = (r("./src/lib/bigNumberUtils/percent.ts"), r("./src/lib/constants/index.ts")),
				a = r("./src/reddit/endpoints/governance/requester.ts");

			function c(e, t) {
				return Object(a.a)(e, {
					endpoint: `${s.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: n.jb.GET
				}).then(e => {
					if (e.ok) {
						const r = e.body,
							s = {
								[t.subredditId]: r
							};
						return {
							...e,
							body: s
						}
					}
					return e
				})
			}

			function o(e, t) {
				return Object(a.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${s.a.metaUrl}/wallets/${t.subredditId}`,
					method: n.jb.POST,
					data: t.userIds
				}).then(e => e.ok ? {
					...e,
					body: {
						wallets: e.body
					}
				} : e)
			}
		},
		"./src/reddit/endpoints/scheduledPosts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "e", (function() {
				return O
			})), r.d(t, "a", (function() {
				return g
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/reddit/helpers/flair.ts"),
				a = r("./src/reddit/helpers/richTextJson/index.ts"),
				c = r("./src/reddit/models/Post/index.ts"),
				o = r("./src/reddit/models/PostCreationForm/index.ts"),
				d = r("./src/reddit/models/ScheduledPost/index.ts"),
				i = r("./src/redditGQL/operations/CreateScheduledPost.json"),
				u = r("./src/redditGQL/operations/SubredditScheduledPosts.json");
			const l = (e, t) => Object(s.a)(e, {
					...u,
					variables: {
						...t,
						includeRecurring: !(!t.includeRecurring || !t.includeRecurring.recurringFirst),
						includeStandalone: !(!t.includeStandalone || !t.includeStandalone.standaloneFirst),
						recurringAfter: t.includeRecurring ? t.includeRecurring.recurringAfter : void 0,
						recurringFirst: t.includeRecurring ? t.includeRecurring.recurringFirst : void 0,
						standaloneAfter: t.includeStandalone ? t.includeStandalone.standaloneAfter : void 0,
						standaloneFirst: t.includeStandalone ? t.includeStandalone.standaloneFirst : void 0
					}
				}),
				p = (e, t) => {
					if (!e.ok || !e.body) return !1;
					const r = e.body;
					return !!(r.data && r.data.subredditInfoById && r.data.subredditInfoById.scheduledPosts && r.data.subredditInfoById.scheduledPosts[t] && r.data.subredditInfoById.scheduledPosts[t].edges)
				},
				b = (e, t) => !(!e.ok || !e.body) && (!(t.includeStandalone && !(e => p(e, d.f.standalonePosts))(e)) && !(t.includeRecurring && !(e => p(e, d.f.recurringPosts))(e))),
				f = ({
					poll: e,
					schedule: t,
					submission: r,
					subredditId: s
				}) => ({
					collectionId: r.collectionId || "",
					discussionType: r.isChatPost ? c.b.Chat : c.b.Comment,
					isContestMode: r.isContestMode,
					isPostAsMetaMod: r.isPostAsMetaMod,
					isSpoiler: r.isSpoiler,
					isNsfw: r.isNSFW,
					poll: e && I(e),
					title: r.title,
					isOriginalContent: r.isOC,
					flair: r.flair ? {
						id: r.flair.templateId,
						text: Object(n.g)(r.flair)
					} : {},
					sticky: r.sticky,
					subredditId: s,
					suggestedCommentSort: r.suggestedSort,
					isSendReplies: r.sendReplies,
					...y(t),
					...E(r),
					assetIds: _(r)
				}),
				y = e => ({
					scheduling: {
						publishAt: e.submitDate,
						clientTimezone: e.timezoneName,
						frequency: e.recurrenceInfo ? e.recurrenceInfo.frequency : void 0,
						interval: e.recurrenceInfo ? e.recurrenceInfo.interval : void 0,
						byMonthDays: e.recurrenceInfo ? e.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: e.recurrenceInfo ? e.recurrenceInfo.byWeekDays : void 0
					}
				}),
				m = e => ({
					scheduling: Object.keys(e).length > 0 ? {
						clientTimezone: e.timezoneName || void 0,
						publishAt: e.submitDate || void 0,
						frequency: e.recurrenceInfo ? e.recurrenceInfo.frequency : void 0,
						interval: e.recurrenceInfo ? e.recurrenceInfo.interval : void 0,
						byMonthDays: e.recurrenceInfo ? e.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: e.recurrenceInfo ? e.recurrenceInfo.byWeekDays : void 0
					} : void 0
				}),
				O = ({
					poll: e,
					schedule: t,
					scheduledPostId: r,
					submission: s,
					subredditId: n
				}) => {
					const a = f({
						poll: e,
						schedule: t,
						submission: s,
						subredditId: n
					});
					return {
						id: r,
						...a,
						flair: Object.keys(a.flair || {}).length ? {
							...a.flair
						} : {
							id: "",
							text: ""
						}
					}
				},
				h = e => /^https?:\/\//i.test(e) ? e : `http://${e}`,
				E = e => {
					switch (e.kind) {
						case o.p.RICH_TEXT:
							return {
								content: {
									richText: JSON.stringify({
										document: e.document
									})
								}
							};
						case o.p.MARKDOWN:
							return {
								content: {
									markdown: e.markdown
								}
							};
						case o.p.LINK:
							return {
								content: {}, link: {
									url: h(e.url)
								}
							};
						default:
							return {
								content: {}
							}
					}
				},
				_ = e => {
					let t = [];
					if (e.document) {
						const r = e.document || [];
						t = Object(a.d)(r)
					}
					return t
				},
				I = e => {
					if (e && e.options && e.duration && (e.options = e.options.map(e => ({
							text: e.text.trim()
						})).filter(e => !!e.text), e.options.length)) return e.duration = Math.floor(e.duration / 864e5), e
				},
				g = (e, t) => Object(s.a)(e, {
					...i,
					variables: {
						input: t
					}
				})
		},
		"./src/reddit/endpoints/scheduledPosts/update.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/redditGQL/operations/UpdateScheduledPost.json"),
				n = r("./src/lib/makeGqlRequest/index.ts");
			const a = (e, t) => Object(n.a)(e, {
				...s,
				variables: {
					input: t
				}
			})
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
				method: s.jb.GET,
				endpoint: `${e.apiUrl}/api/username_available.json?user=${t.username}`,
				type: "json"
			})
		},
		"./src/reddit/helpers/canRenderThumbnail.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/reddit/constants/thumbnails.ts"),
				n = r("./src/reddit/models/Media/index.ts");

			function a(e) {
				return !(!e.thumbnail || !e.thumbnail.url || e.thumbnail.url === s.a.SELF || e.thumbnail.url === s.a.NSFW || e.media && Object(n.E)(e.media))
			}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts");
			t.a = () => ({
				type: n.I.SERVER_ERROR,
				fields: [{
					field: "",
					msg: s.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/getSearchUrl/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./src/lib/search/index.ts"),
				n = r("./src/reddit/constants/parameters.ts"),
				a = r("./src/reddit/models/Search/index.ts");
			const c = ({
				subreddit: e,
				multireddit: t,
				searchItem: r,
				searchOptions: c,
				shouldSearchSubreddit: o,
				includeNsfwResults: d
			}) => {
				let i;
				const u = [];
				if ("" !== r.searchQuery) {
					if (r.isTypeaheadSuggestion) i = `/${r.isProfile?r.searchQuery.replace("u/","user/"):r.searchQuery}`;
					else {
						if (u.push(`${n.p}=${Object(s.b)(r.rawQuery||r.searchQuery)}`), i = "/search/", r.section !== a.c.trending && r.section !== a.c.recent || c && c.source && u.push(`source=${c.source}`), e && o ? (i = `/r/${e.name}${i}`, u.push(`${n.s}=1`), u.push(`${n.y}=${e.isNSFW?"1":""}`)) : !e && r.subredditOrProfileRestrictedName && (i = `/${r.subredditOrProfileRestrictedName}${i}`, u.push(`${n.s}=1`)), t) {
							i = `/user/${t.url.split("/")[2]}/m/${t.name}${i}`, u.push(`${n.s}=1`), u.push(`${n.y}=${t.isNSFW?"1":""}`), u.push(`${n.j}=1`)
						}
						c && c.category && u.push(`${n.b}=${c.category}`), d && u.push(`${n.i}=1`)
					}
					return {
						url: i,
						qs: u.join("&")
					}
				}
			}
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
		"./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return a
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "d", (function() {
				return y
			}));
			const s = e => e.subredditInfoById.scheduledPosts.recurringPosts ? {
					recurringPosts: {
						models: b(e.subredditInfoById.scheduledPosts.recurringPosts.edges),
						pageInfo: {
							...e.subredditInfoById.scheduledPosts.recurringPosts.pageInfo
						}
					},
					recurringPostsIds: e.subredditInfoById.scheduledPosts.recurringPosts.edges.map(e => e.node.id)
				} : {},
				n = e => e.subredditInfoById.scheduledPosts.standalonePosts ? {
					standalonePosts: {
						models: l(e.subredditInfoById.scheduledPosts.standalonePosts.edges),
						pageInfo: {
							...e.subredditInfoById.scheduledPosts.standalonePosts.pageInfo
						}
					},
					standalonePostsIds: e.subredditInfoById.scheduledPosts.standalonePosts.edges.map(e => e.node.id)
				} : {},
				a = e => ({
					...e,
					subredditInfoById: {
						id: e.subredditInfoById.id,
						scheduledPosts: {
							...s(e),
							...n(e)
						}
					}
				}),
				c = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.recurringPosts && !!e.subredditInfoById.scheduledPosts.recurringPostsIds,
				o = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.standalonePosts && !!e.subredditInfoById.scheduledPosts.standalonePostsIds,
				d = e => c(e) && o(e),
				i = e => !c(e) && o(e),
				u = e => c(e) && !o(e),
				l = e => e.map(e => p(e.node)),
				p = e => ({
					id: e.id,
					title: e.title,
					body: e.body,
					postKind: e.postKind,
					collectionId: e.collections.edges.length ? e.collections.edges[0].node.id : void 0,
					discussionType: e.discussionType,
					isContestMode: e.isContestMode,
					isPostAsMetaMod: e.isPostAsMetaMod,
					isSpoiler: e.isSpoiler,
					isNsfw: e.isNsfw,
					isOriginalContent: e.isOriginalContent,
					isSendReplies: e.isSendReplies,
					isSticky: !!e.sticky && "NONE" !== e.sticky,
					mediaAssets: e.mediaAssets,
					subreddit: {
						...e.subreddit
					},
					suggestedCommentSort: e.suggestedCommentSort,
					owner: {
						...e.owner
					},
					poll: e.poll,
					contentType: e.contentType,
					clientTimezone: e.clientTimezone,
					publishAt: e.publishAt.split(".")[0],
					state: e.state,
					flair: e.flair ? {
						...e.flair
					} : void 0,
					sticky: e.sticky,
					isModDistinguished: "MODERATOR" === e.distinguishedAs,
					url: e.url
				}),
				b = e => e.map(e => f(e.node)),
				f = e => ({
					...p(e),
					frequency: e.frequency,
					byMonthDays: e.byMonthDays || [],
					byWeekDays: e.byWeekDays || [],
					interval: e.interval || 1
				}),
				y = e => (e => !!e.frequency && !!e.interval)(e) ? f(e) : p(e)
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
					const n = document.head;
					let a = n.querySelector(`script[src='${e}']`);

					function c() {
						this.removeEventListener("load", c), this.removeEventListener("error", o), r()
					}

					function o() {
						this.removeEventListener("load", c), this.removeEventListener("error", o), a && n.removeChild(a), s()
					}
					a || ((a = document.createElement("script")).src = e, n.appendChild(a)), a.addEventListener("load", c), a.addEventListener("error", o)
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
							i = Object(o.C)(e, d);
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
						n = Object(f.eb)(e.getState()) ? "1" : "";
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
		"./src/reddit/helpers/scheduledPosts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return f
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "d", (function() {
				return E
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "h", (function() {
				return S
			})), r.d(t, "g", (function() {
				return v
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
						const r = Object(i.f)(m(e, t)),
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
				m = (e, t) => `${e}T${y(t)}:00`,
				O = e => {
					const [t, r] = e.split("T");
					return [t, y(r)]
				},
				h = e => {
					const [t, r] = O(e);
					if (t && r) {
						const e = Object(i.f)(m(t, r));
						return b(e)
					}
					return ""
				},
				E = e => {
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
				_ = e => "string" == typeof e,
				I = e => {
					const t = new Date,
						r = e - t.getDay();
					return t.setDate(t.getDate() + r), t.toLocaleDateString(void 0, {
						weekday: "long"
					})
				},
				g = e => {
					const t = (e => {
						const [t, r] = O(e);
						if (t && r) {
							return Object(i.f)(m(t, r)).toLocaleTimeString(void 0, {
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
				S = e => {
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
				v = (e, t) => {
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
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/telemetry/index.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			const a = ({
					state: e,
					commentId: t
				}) => Object(s.a)({
					source: "comment",
					action: "view",
					noun: "comment",
					...n.defaults(e),
					profile: n.profile(e),
					post: n.post(e, t),
					media: n.media(e, t),
					subreddit: n.subreddit(e),
					comment: n.comment(e, t)
				}),
				c = ({
					state: e,
					commentId: t
				}) => Object(s.a)({
					source: "comment",
					action: "consume",
					noun: "comment",
					...n.defaults(e),
					profile: n.profile(e),
					post: n.post(e, t),
					media: n.media(e, t),
					subreddit: n.subreddit(e),
					comment: n.comment(e, t)
				}),
				o = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: n.user(t),
					subreddit: n.subreddit(t),
					post: n.post(t, e),
					actionInfo: n.actionInfo(t),
					app: n.app(t),
					referrer: n.referrer(t),
					session: n.session(t)
				})
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
			r.d(t, "b", (function() {
				return O
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "v", (function() {
				return S
			})), r.d(t, "w", (function() {
				return v
			})), r.d(t, "B", (function() {
				return w
			})), r.d(t, "t", (function() {
				return T
			})), r.d(t, "u", (function() {
				return D
			})), r.d(t, "d", (function() {
				return P
			})), r.d(t, "q", (function() {
				return A
			})), r.d(t, "r", (function() {
				return C
			})), r.d(t, "A", (function() {
				return R
			})), r.d(t, "z", (function() {
				return k
			})), r.d(t, "y", (function() {
				return N
			})), r.d(t, "p", (function() {
				return L
			})), r.d(t, "s", (function() {
				return x
			})), r.d(t, "n", (function() {
				return F
			})), r.d(t, "h", (function() {
				return B
			})), r.d(t, "m", (function() {
				return q
			})), r.d(t, "f", (function() {
				return V
			})), r.d(t, "g", (function() {
				return H
			})), r.d(t, "i", (function() {
				return W
			})), r.d(t, "k", (function() {
				return K
			})), r.d(t, "l", (function() {
				return $
			})), r.d(t, "j", (function() {
				return Q
			})), r.d(t, "e", (function() {
				return z
			})), r.d(t, "o", (function() {
				return J
			})), r.d(t, "x", (function() {
				return X
			}));
			var s, n = r("./src/lib/stringInterpolate/index.ts"),
				a = r("./src/reddit/actions/focusedVerticals/constants.ts"),
				c = (r("./src/reddit/constants/categories.tsx"), r("./src/reddit/constants/tracking.ts")),
				o = r("./src/reddit/helpers/correlationIdTracker.ts"),
				d = r("./src/reddit/helpers/trackers/searchResults.ts"),
				i = (r("./src/reddit/helpers/widgets/index.tsx"), r("./src/reddit/models/DiscoveryUnit/index.ts")),
				u = r("./src/reddit/selectors/posts.ts"),
				l = r("./src/reddit/selectors/telemetry.ts"),
				p = r("./src/reddit/selectors/widgets.ts"),
				b = r("./src/telemetry/index.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(s || (s = {}));
			const f = "discovery_unit",
				y = (e, t, r) => ({
					...l.defaults(e),
					source: f,
					screen: l.screen(e),
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
					...y(e, t, r),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				O = (e, t) => {
					Object(b.a)(h(t)(e))
				},
				h = (e, t) => r => m(r, e, t),
				E = (e, t, r, s) => "unitName" in t ? y(e, t, s) : ((e, t, r) => ({
					...l.defaults(e),
					source: "search",
					screen: l.screen(e),
					search: r ? {
						...l.search(e, r),
						structureType: l.StructureType.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, r),
				_ = (e, t, r, n, a) => ({
					...E(e, t, n, a),
					action: "view",
					noun: s.ITEM_POST,
					post: l.post(e, r)
				}),
				I = ({
					post: e,
					rawQuery: t,
					searchQuery: r
				}) => ({
					displayQuery: decodeURIComponent(r),
					rawQuery: t ? decodeURIComponent(t) : void 0,
					structureType: e && e.isSponsored ? l.StructureType.PromotedTrend : l.StructureType.Trending
				});
			var g;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(g || (g = {}));
			const S = (e, t, r) => {
					Object(b.a)(j(e, t, r, c.c.CLICK))
				},
				v = (e, t, r) => {
					Object(b.a)(j(e, t, r, c.c.VIEW))
				},
				j = (e, t, r, s) => {
					const n = e.trending.models.filter(e => !e.post || !e.post.isSponsored).findIndex(e => e.id === t.id) + 1;
					return {
						...l.defaults(e),
						source: "search",
						action: s,
						noun: "trending",
						metaSearch: I(t),
						discoveryUnit: r === g.POPULAR_CAROUSEL ? {
							name: i.k,
							id: i.k,
							title: i.k,
							type: "query"
						} : void 0,
						actionInfo: l.actionInfo(e, {
							paneName: r,
							position: n
						}),
						search: {
							originPageType: e.platform.currentPage ? l.getPageTypeFromCurrentPage(e.platform.currentPage) : void 0,
							query: t.rawQuery,
							structureType: l.StructureType.Trending,
							queryId: s === c.c.CLICK ? Object(o.c)(o.a.SearchResults) : void 0
						}
					}
				},
				w = (e, t, r, s, n, a, o) => {
					Object(b.a)({
						...l.defaults(e),
						...Object(d.f)(e, r, s, n, a, t),
						action: c.c.VIEW,
						noun: o ? "ad" : "post"
					})
				},
				T = (e, t, r, s) => {
					Object(b.a)(_(e, t, r, s))
				},
				D = (e, t, r, s) => n => _(n, e, t, r, s),
				P = (e, t) => {
					Object(b.a)({
						...y(e, t),
						source: f,
						action: c.c.CLICK,
						noun: "show_less_often"
					})
				},
				A = (e, t, r, s) => {
					Object(b.a)(C(t, r, s)(e))
				},
				C = (e, t, r, n) => a => {
					return {
						...E(a, e, r, n),
						source: f,
						action: c.c.CLICK,
						noun: s.ITEM_POST,
						post: l.post(a, t)
					}
				},
				R = (e, t, r, s) => n => a => Object(d.f)(a, n, e, t, r, s),
				k = (e, t, r, s) => n => a => Object(d.e)(a, e, t, void 0, r, n, s),
				N = (e, t, r, s) => n => a => ({
					...Object(d.f)(a, n, e, t, r, s),
					noun: "ad"
				}),
				L = (e, t) => r => n => ({
					...e ? y(n, e, t) : {},
					source: f,
					action: c.c.CLICK,
					noun: s.ITEM_POST,
					post: l.post(n, r)
				}),
				x = (e, t, r, s) => {
					Object(b.a)(U(t, r, s)(e))
				},
				U = (e, t, r, s) => n => {
					const a = Object(u.c)(n, {
							postId: t
						}),
						o = a ? Object(p.b)(n, a) : void 0;
					return {
						...E(n, e, r, s),
						...o,
						source: f,
						action: c.c.CLICK,
						noun: "item_post_subreddit",
						post: l.post(n, t)
					}
				},
				M = () => ({
					id: "xd_focus_verticals",
					unitType: i.e.Listing,
					experiment: "",
					title: a.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: i.c.Large,
					surface: i.d.Frontpage,
					url: "gql.reddit.com"
				}),
				G = (e, t, r) => l.actionInfo(e, {
					position: r
				}),
				F = (e, t, r) => {
					const s = M();
					return e => ({
						...m(e, s),
						actionInfo: G(e, 0, r),
						subreddit: l.subredditById(e, t)
					})
				},
				B = (e, t, r) => {
					const s = M();
					return e => ({
						..._(e, s, t),
						actionInfo: G(e, 0, r)
					})
				},
				q = (e, t, r) => {
					const n = M();
					return e => ({
						...y(e, n),
						actionInfo: G(e, 0, r),
						subreddit: l.subredditById(e, t) || null,
						source: f,
						action: c.c.VIEW,
						noun: s.ITEM_SUBREDDIT
					})
				},
				V = (e, t, r) => {
					const n = M();
					return e => ({
						...y(e, n),
						actionInfo: G(e, 0, r),
						post: l.post(e, t) || null,
						source: f,
						action: c.c.CLICK,
						noun: s.ITEM_POST
					})
				},
				H = (e, t, r, n) => {
					const a = M();
					return e => ({
						...y(e, a),
						actionInfo: G(e, 0, n),
						subreddit: l.subredditById(e, r) || null,
						post: l.post(e, t) || null,
						source: f,
						action: c.c.CLICK,
						noun: s.ITEM_POST_SUBREDDIT
					})
				},
				W = (e, t, r) => {
					const n = M();
					return e => ({
						...y(e, n),
						actionInfo: G(e, 0, r),
						subreddit: l.subredditById(e, t) || null,
						source: f,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT
					})
				},
				K = (e, t, r, n) => {
					const a = M();
					return e => ({
						...y(e, a),
						actionInfo: G(e, 0, r),
						subreddit: l.subredditById(e, t) || null,
						post: n ? l.post(e, n) : null,
						source: f,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				$ = (e, t, r, n) => {
					const a = M();
					return e => ({
						...y(e, a),
						actionInfo: G(e, 0, r),
						subreddit: l.subredditById(e, t) || null,
						post: n ? l.post(e, n) : null,
						source: f,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				Q = (e, t, r) => {
					const n = M();
					return e => ({
						...y(e, n),
						actionInfo: G(e, 0, r),
						subreddit: l.subredditById(e, t) || null,
						source: f,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT_HIDE
					})
				},
				z = (e, t, r) => {
					const n = M();
					return e => ({
						...y(e, n),
						actionInfo: G(e, 0, r),
						subreddit: l.subredditById(e, t) || null,
						source: f,
						action: c.c.CLICK,
						noun: s.HEADER_SUBREDDIT
					})
				},
				J = (e, t) => r => ({
					...y(r, e),
					...t && Object(p.b)(r, t),
					source: f,
					action: c.c.CLICK,
					noun: "item"
				}),
				X = e => t => ({
					...y(t, e),
					source: f,
					action: c.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "h", (function() {
				return d
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "f", (function() {
				return p
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
					correlationId: Object(s.e)(s.a.SubredditCreation, !0)
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
				d = (e, t) => r => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...n.defaults(r),
					actionInfo: n.actionInfo(r, {
						reason: e,
						settingValue: t
					}),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				i = () => e => ({
					source: "user_dropdown",
					noun: "create_community",
					action: "click",
					...n.defaults(e),
					actionInfo: n.actionInfo(e)
				}),
				u = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "view",
					...n.defaults(e),
					actionInfo: n.actionInfo(e)
				}),
				l = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "click",
					...n.defaults(e),
					actionInfo: n.actionInfo(e)
				}),
				p = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "dismiss",
					...n.defaults(e),
					actionInfo: n.actionInfo(e)
				})
		},
		"./src/reddit/helpers/trackers/subredditForking.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			}));
			var s = r("./src/reddit/selectors/telemetry.ts");
			const n = e => e => ({
					source: "post",
					noun: "forking_module",
					action: "click",
					...s.defaults(e),
					actionInfo: s.actionInfo(e, {
						settingValue: e.user.account && e.user.account.isMod ? "existing_mod" : "new_mod"
					})
				}),
				a = e => e => ({
					source: "post",
					noun: "forking_module",
					action: "dismiss",
					...s.defaults(e),
					actionInfo: s.actionInfo(e)
				}),
				c = e => e => ({
					source: "post",
					noun: "forking_module",
					action: "view",
					...s.defaults(e),
					actionInfo: s.actionInfo(e)
				})
		},
		"./src/reddit/hooks/useLocalStorage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var s = r("./node_modules/react/index.js"),
				n = r("./src/reddit/helpers/localStorage/index.ts");
			const a = {},
				c = (e, t, r) => (a[e] || (a[e] = {
					callbacks: [],
					value: r
				}), a[e].callbacks.push(t), {
					deregister: () => {
						const {
							callbacks: r
						} = a[e], s = r.indexOf(t);
						s > -1 && r.splice(s, 1)
					},
					emit: r => {
						a[e].value !== r && (a[e].value = r, a[e].callbacks.forEach(e => {
							e !== t && e(r)
						}))
					}
				});

			function o(e, t) {
				const r = Object(s.useRef)(null);
				let a;
				a = Object(n.B)(e);
				const [o, d] = Object(s.useState)(null != a ? a : t);
				return Object(s.useEffect)(() => (r.current = c(e, d, t), () => {
					var e;
					return null === (e = r.current) || void 0 === e ? void 0 : e.deregister()
				}), [e, t]), Object(s.useEffect)(() => {
					var e;
					null === (e = r.current) || void 0 === e || e.emit(o)
				}, [o]), [o, function(t) {
					Object(n.Db)(e, t), d(t)
				}]
			}
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
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			}));
			const s = "new_community_setup",
				n = ["CommunityProgressShareButton", "CommunityProgressUrlButton", "CommunityProgressMakePostButton"];
			var a, c, o;
			! function(e) {
				e.INITIAL = "INITIAL", e.ACTIONED = "ACTIONED", e.DISMISSED = "DISMISSED", e.COMPLETED = "COMPLETED"
			}(a || (a = {})),
			function(e) {
				e[e.FILLED = 0] = "FILLED", e[e.NUMBERED = 1] = "NUMBERED"
			}(c || (c = {})),
			function(e) {
				e.HIDE_BUTTON_CLICK = "HIDE_BUTTON_CLICK", e.CTA_BUTTON_CLICK = "CTA_BUTTON_CLICK"
			}(o || (o = {}))
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
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/redux/es/redux.js"),
				n = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/economics/claims/constants.ts")),
				a = r("./src/reddit/actions/economics/me/constants.ts");
			const c = {};
			var o = (e = c, t) => {
					switch (t.type) {
						case a.a: {
							const r = t.payload.claimPoints || {},
								s = Object.keys(r).reduce((t, s) => (t[s] = {
									...e[s],
									availableClaims: r[s]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var r;
								(null === (r = e[t]) || void 0 === r ? void 0 : r.isClaiming) && (s[t] = s[t] || {
									availableClaims: []
								}, s[t].isClaiming = !0)
							}), s
						}
						case n.b:
						case n.a:
							const {
								subredditId: r
							} = t.payload;
							return {
								...e, [r]: {
									...e[r],
									isClaiming: t.type === n.b
								}
							};
						default:
							return e
					}
				},
				d = r("./src/reddit/actions/governance/constants.ts");
			const i = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function l(e) {
				var t, r, s, n, a;
				const c = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					o = null == c ? void 0 : c.contracts,
					d = null == o ? void 0 : o.unlocked,
					i = null !== (s = null === (r = e.walletProvider) || void 0 === r ? void 0 : r.provider) && void 0 !== s ? s : e.provider,
					l = !!(null === (n = e.walletProvider) || void 0 === n ? void 0 : n.inTransition),
					p = (null == d ? void 0 : d.decimals) || 0,
					b = "1" + "0".repeat(p);
				return {
					blockchainProvider: i,
					contractAddress: (null == d ? void 0 : d.address) || "",
					contracts: o,
					decimals: p,
					displayConversion: b,
					images: e.images || u,
					inTransition: l,
					name: e.name,
					nomenclature: null === (a = e.extra) || void 0 === a ? void 0 : a.nomenclature,
					polls: e.polls,
					symbol: (null == d ? void 0 : d.token) || ""
				}
			}
			var p = (e = i, t) => {
				switch (t.type) {
					case d.a: {
						const {
							subredditId: r,
							meta: s
						} = t.payload;
						return {
							...e,
							[r]: l(s)
						}
					}
					default:
						return e
				}
			};
			const b = {};
			var f = (e = b, t) => {
				switch (t.type) {
					case d.n: {
						const {
							subredditId: r,
							wallets: s
						} = t.payload, n = Object.keys(s).reduce((t, n) => {
							return {
								...t,
								[n]: {
									...e[n] || {},
									[r]: s[n]
								}
							}
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
			t.a = Object(s.c)({
				claims: o,
				points: p,
				publicWallets: f
			})
		},
		"./src/reddit/reducers/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return fj
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
				c = r("./src/reddit/actions/authorFlair.ts"),
				o = r("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				d = r("./src/reddit/actions/governance/constants.ts"),
				i = r("./src/reddit/actions/harbergerTax/constants.ts"),
				u = r("./src/reddit/actions/platform.ts"),
				l = r("./src/reddit/actions/product.ts"),
				p = r("./src/reddit/actions/reportFlow/constants.ts"),
				b = r("./src/reddit/actions/structuredStyles/constants.ts"),
				f = r("./src/reddit/constants/modals.ts");
			var y = (e = null, t) => {
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
						case u.b:
						case p.f:
							return t.type === u.b && (null == e ? void 0 : e.id) === f.a.POST_FLOW_UPSELL_MODAL_ID ? e : null;
						case b.e:
							return (null == e ? void 0 : e.id) === f.a.BLADE_UNSAVED_CHANGES ? null : e;
						case b.d:
							return (null == e ? void 0 : e.id) === f.a.BLADE_NIGHTMODE ? null : e;
						case c.a:
							return (null == e ? void 0 : e.id) === f.a.USER_FLAIR_MODAL_ID ? null : {
								id: f.a.USER_FLAIR_MODAL_ID
							};
						case l.b:
							return {
								id: f.a.BADGE_PURCHASE
							};
						case d.d:
							return {
								id: f.a.GOVERNANCE_OPT_OUT
							};
						case d.r:
							return {
								id: f.a.TRANSFER_POINTS
							};
						case d.o:
							return {
								id: f.a.GOVERNANCE_RELEASE_NOTES
							};
						case i.e:
							return {
								id: f.a.HARBERGER_TAX_BANNER_PURCHASE
							};
						case i.c:
							return {
								id: f.a.HARBERGER_TAX_BANNER_MANAGE
							};
						case i.b:
							return {
								id: f.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE
							};
						case i.a:
							return {
								id: f.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE
							};
						case d.x:
							return {
								id: f.a.WALLET_REGISTRATION_MODAL
							};
						case o.c:
							return {
								id: f.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT
							};
						default:
							return e
					}
				},
				m = r("./src/reddit/actions/ads/constants.ts"),
				O = r("./src/reddit/actions/unload/constants.ts");
			const h = {};

			function E(e, t, r, s) {
				const n = e[t];
				return {
					...e,
					[t]: {
						...n,
						[s]: r
					}
				}
			}
			var _ = (e = h, t) => {
					if (!t.payload) return e;
					switch (t.type) {
						case m.d:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "adImpression");
						case m.b:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "adClick");
						case m.n:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "adViewableImpression");
						case m.k:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "adVideoViewable");
						case m.e:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable");
						case m.j:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "adVideoStarted");
						case m.i:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedWithSound");
						case m.g:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "adVideoGroupMViewable");
						case m.f:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable50");
						case m.h:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedExpanded");
						case m.l: {
							const {
								postId: r,
								eventType: s,
								vendorMetadata: n
							} = t.payload;
							return E(e, r, n, `adVideoWatchedPercent${s}`)
						}
						case m.m: {
							const {
								postId: r,
								eventType: s,
								vendorMetadata: n
							} = t.payload;
							return E(e, r, n, `adVideoWatchedSeconds${s}`)
						}
						case m.w:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewable");
						case m.y:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds5");
						case m.x:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds15");
						case O.b:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "adUnloaded");
						case m.s:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "groupMViewable");
						case m.c: {
							const {
								postId: r,
								vendorMetadata: s,
								eventType: n
							} = t.payload;
							return E(e, r, s, `adGalleryItemImpression${n}`)
						}
						default:
							return e
					}
				},
				I = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/apiRequestState.ts"));
			const g = {};
			var S = (e = g, t) => {
					switch (t.type) {
						case I.d:
						case I.a:
						case I.b: {
							const r = t.payload;
							return {
								...e,
								[r.apiRequestId]: r
							}
						}
						case I.c: {
							const r = t.payload;
							if (!(r in e)) return e;
							if (1 === Object.keys(e).length) return g;
							const s = {
								...e
							};
							return delete s[r], s
						}
						default:
							return e
					}
				},
				v = r("./node_modules/redux/es/redux.js"),
				j = r("./src/reddit/actions/appBadgeIndicators/constants.ts");
			var w = (e = null, t) => {
				switch (t.type) {
					case j.a:
						return t.payload && t.payload.error || null;
					case j.b:
					case j.c:
						return null;
					default:
						return e
				}
			};
			var T = (e = !1, t) => {
					switch (t.type) {
						case j.c:
							return !0;
						case j.a:
						case j.b:
							return !1;
						default:
							return e
					}
				},
				D = Object(v.c)({
					error: w,
					pending: T
				});
			const P = {};
			var A = (e = P, t) => {
					switch (t.type) {
						case j.d:
						case j.b: {
							const r = t.payload;
							return {
								...e,
								...r
							}
						}
						case j.c:
						case j.a:
						default:
							return e
					}
				},
				C = Object(v.c)({
					api: D,
					badges: A
				});
			var R = (e = null, t) => {
					switch (t.type) {
						case c.a:
							return t.payload;
						default:
							return e
					}
				},
				k = r("./node_modules/icepick/icepick.js"),
				N = r("./node_modules/lodash/mergeWith.js"),
				L = r.n(N),
				x = r("./src/reddit/actions/comment/constants.ts"),
				U = r("./src/reddit/actions/comment/websocket/constants.ts"),
				M = r("./src/reddit/actions/grantUserFlair/constants.ts"),
				G = r("./src/reddit/actions/modQueue/constants.ts"),
				F = r("./src/reddit/actions/pages/constants.ts"),
				B = r("./src/reddit/actions/pages/profileComments/constants.ts"),
				q = r("./src/reddit/actions/pages/profilePosts.ts"),
				V = r("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				H = r("./src/reddit/actions/pages/search/index.ts"),
				W = r("./src/reddit/actions/pages/subreddit.ts"),
				K = r("./src/reddit/actions/profileConversations.ts"),
				$ = r("./src/reddit/actions/subreddit.ts"),
				Q = r("./src/reddit/actions/userFlair/constants.ts"),
				z = r("./src/reddit/models/User/index.ts");
			const J = {};
			var X = (e = J, t) => {
				switch (t.type) {
					case U.b:
					case U.c: {
						const r = t.payload,
							{
								authorFlair: s
							} = r;
						if (s) {
							return L()({
								...e
							}, s, (e, t, r) => {
								if ("richtext" === r) return t
							})
						}
						return e
					}
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case H.c: {
						const {
							authorFlair: r
						} = t.payload;
						if (r) {
							return Object(k.merge)(e, r)
						}
						return e
					}
					case x.w:
					case W.SUBREDDIT_LOADED:
					case F.f:
					case B.b:
					case B.e:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case K.e:
					case $.i:
						return Y(e, t.payload);
					case G.i:
					case G.f:
					case G.m:
					case G.p:
					case G.v:
						return Y(e, t.payload.response);
					case Q.r: {
						const {
							subredditId: r,
							userName: s,
							applied: n,
							displaySettings: {
								isUserEnabled: a
							}
						} = t.payload;
						return Object(k.setIn)(e, [r, s], a ? n : null)
					}
					case M.h:
					case M.b: {
						const {
							subredditId: r,
							userName: s,
							applied: n
						} = t.payload;
						return e[r] && e[r][s] ? Object(k.setIn)(e, [r, s], n) : e
					}
					case Q.a: {
						const {
							subredditId: r,
							userName: s,
							applied: n,
							displaySettings: {
								isEnabled: a
							}
						} = t.payload;
						return Object(k.setIn)(e, [r, s], a ? n : null)
					}
					default:
						return e
				}
			};
			const Y = (e, {
				account: t,
				authorFlair: r,
				userFlair: s
			}) => {
				const n = Object(k.merge)(e, r);
				if (!s || !t) return n;
				const a = Object.keys(s)[0];
				if (!a) return n;
				const c = s[a],
					o = Object(z.e)(t),
					d = c.applied,
					i = c.displaySettings && c.displaySettings.isUserEnabled;
				return o && d && i ? Object(k.merge)(n, {
					[a]: {
						[o]: d
					}
				}) : n
			};
			var Z = Object(v.c)({
					inContext: R,
					models: X
				}),
				ee = r("./src/reddit/actions/gold/constants.ts");
			const te = {};
			var re = (e = te, t) => {
				switch (t.type) {
					case ee.d: {
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
			var se = (e = null, t) => {
				switch (t.type) {
					case ee.h:
					case ee.i:
						return null;
					case ee.g:
						return t.payload;
					default:
						return e
				}
			};
			var ne = (e = !1, t) => {
					switch (t.type) {
						case u.b:
						case ee.i:
						case ee.g:
							return !1;
						case ee.h:
							return !0;
						default:
							return e
					}
				},
				ae = Object(v.c)({
					error: se,
					pending: ne
				}),
				ce = Object(v.c)({
					api: ae
				});
			var oe = (e = null, t) => {
				switch (t.type) {
					case ee.H:
					case ee.G:
						return null;
					case ee.F:
						return t.payload;
					default:
						return e
				}
			};
			const de = {};
			var ie = (e = de, t) => {
					switch (t.type) {
						case ee.H: {
							const {
								subredditOrProfileId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case ee.d:
						case ee.G:
						case ee.M:
						case ee.F: {
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
				ue = Object(v.c)({
					error: oe,
					pending: ie
				});
			const le = {};
			var pe = (e = le, t) => {
				switch (t.type) {
					case ee.M: {
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
					case ee.l: {
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
					case ee.o: {
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
			const be = {};
			var fe = (e = be, t) => {
					switch (t.type) {
						case ee.G: {
							const {
								awards: r,
								subredditOrProfileId: s
							} = t.payload, n = r.map(e => e.id);
							return {
								...e,
								[s]: n
							}
						}
						case ee.i: {
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
				ye = Object(v.c)({
					api: ue,
					availability: pe,
					order: fe
				}),
				me = r("./node_modules/lodash/merge.js"),
				Oe = r.n(me);
			const he = e => {
				const t = e.split("+");
				if (1 === t.length) return e;
				const r = `${t[1].substring(0,2)}:${t[1].substring(2)}`;
				return `${t[0]}+${r}`
			};
			var Ee = e => (e.startsAt && (e.startsAt = "number" == typeof e.startsAt ? new Date(e.startsAt).toISOString() : he(e.startsAt)), e.endsAt && (e.endsAt = "number" == typeof e.endsAt ? new Date(e.endsAt).toISOString() : he(e.endsAt)), e),
				_e = r("./src/reddit/models/Gold/Award.ts"),
				Ie = r("./src/reddit/actions/discoveryUnit.ts"),
				ge = r("./src/reddit/actions/frontpage/constants.ts"),
				Se = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				ve = r("./src/reddit/actions/multireddit/constants.ts"),
				je = r("./src/reddit/actions/pages/modListing/constants.ts"),
				we = r("./src/reddit/actions/pages/multireddit/constants.ts"),
				Te = r("./src/reddit/actions/pages/postCreation.ts"),
				De = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				Pe = r("./src/reddit/actions/profileOverviewChrono/constants.ts"),
				Ae = r("./src/lib/makeActionCreator/index.ts"),
				Ce = (r("./src/config.ts"), r("./src/lib/constants/index.ts"));
			r("./src/lib/makeApiRequest/index.ts"), r("./src/reddit/helpers/addRedesignIdentifier/index.ts"), r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			Object(Ae.a)("RECOMMENDED_POSTS_LOADED"), Object(Ae.a)("RECOMMENDED_POSTS_FAILED");
			var Re = r("./src/reddit/actions/search.ts");
			const ke = _e.m,
				Ne = (e => t => {
					for (let r = 0; r < e.length; r++) t = e[r](t);
					return t
				})([Ee]),
				Le = (e, t) => {
					const r = t.reduce((e, t) => (e[t.id] = Ne(t), e), {});
					return Oe()({
						...e
					}, r)
				};
			var xe = (e = ke, t) => {
				var r;
				switch (t.type) {
					case ee.G: {
						const {
							awards: r
						} = t.payload;
						return Le(e, r)
					}
					case ee.M: {
						const r = t.payload.awards.reduce((e, t) => (e[t.id] = {
							...Ne(t),
							isEnabled: !0
						}, e), {});
						return Oe()({
							...e
						}, r)
					}
					case ee.b: {
						const {
							awards: r
						} = t.payload, s = r.reduce((e, t) => (e[t.award.id] = Ne(t.award), e), {});
						return Oe()({
							...e
						}, s)
					}
					case ee.i: {
						const {
							award: r
						} = t.payload;
						return r && r.id ? e[r.id] ? Oe()({
							...e
						}, {
							[r.id]: Ne(r)
						}) : {
							...e,
							[r.id]: Ne(r)
						} : e
					}
					case ee.kb: {
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
					case F.b:
					case x.w:
					case U.b:
					case Te.PAGE_LOADED:
					case Ie.e:
					case ge.f:
					case je.e:
					case je.h:
					case G.f:
					case G.m:
					case G.p:
					case G.v:
					case ve.r:
					case F.f:
					case ge.b:
					case we.b:
					case H.c:
					case B.b:
					case B.e:
					case K.b:
					case K.e:
					case De.b:
					case De.e:
					case Pe.b:
					case q.MORE_POSTS_LOADED:
					case q.PROFILE_POSTS_LOADED:
					case V.c:
					case V.e:
					case V.i:
					case V.g:
					case "RECOMMENDED_POSTS_LOADED":
					case Re.g:
					case $.i:
					case W.SUBREDDIT_LOADED: {
						const r = {},
							s = t.payload.posts || [],
							n = t.payload.comments || [];
						for (const e in s) {
							const t = s[e].allAwardings || [];
							for (const e of t) r[e.id] = Ne(Object(_e.h)(e))
						}
						for (const e in n) {
							const t = n[e],
								{
									associatedAward: s,
									allAwardings: a = []
								} = t;
							for (const e of a) r[e.id] = Ne(Object(_e.h)(e));
							s && (r[s.id] = Ne(s))
						}
						return Object.keys(r).forEach(t => {
							var s;
							0 === (null === (s = e[t]) || void 0 === s ? void 0 : s.coinPrice) && delete r[t]
						}), Oe()({
							...e
						}, r)
					}
					case ee.tb: {
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
						}), Oe()({
							...e
						}, r)
					}
					case Se.o: {
						const {
							freeAwardEvent: s
						} = t.payload;
						return Le(e, (null === (r = null == s ? void 0 : s.freeAwards) || void 0 === r ? void 0 : r.awards) || [])
					}
					case Se.h: {
						const {
							awards: r
						} = t.payload;
						return Le(e, r || [])
					}
					default:
						return e
				}
			};
			const Ue = {};
			var Me = (e = Ue, t) => {
					switch (t.type) {
						case ee.c: {
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
						case ee.b:
						case ee.a: {
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
				Ge = Object(v.c)({
					pending: Me
				});
			const Fe = {};
			var Be = (e = Fe, t) => {
					switch (t.type) {
						case ee.b: {
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
				qe = Object(v.c)({
					api: Ge,
					order: Be
				});
			const Ve = {};
			var He = (e = Ve, t) => {
					switch (t.type) {
						case ee.b: {
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
				We = Object(v.c)({
					order: He
				}),
				Ke = Object(v.c)({
					blacklist: re,
					create: ce,
					manageable: ye,
					models: xe,
					sortedUsable: qe,
					tags: We
				}),
				$e = r("./src/reddit/actions/badge.ts");
			const Qe = {};
			var ze = (e = Qe, t) => {
				switch (t.type) {
					case $e.d:
					case $e.e: {
						const {
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: void 0
						}
					}
					case $e.c: {
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
			const Je = {};
			var Xe = (e = Je, t) => {
					switch (t.type) {
						case $e.d: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case $e.e:
						case $e.c: {
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
				Ye = Object(v.c)({
					error: ze,
					pending: Xe
				});
			const Ze = {};
			var et = (e = Ze, t) => {
				switch (t.type) {
					case $e.g:
					case $e.h: {
						const {
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: void 0
						}
					}
					case $e.f: {
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
			const tt = {};
			var rt = (e = tt, t) => {
					switch (t.type) {
						case $e.g: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case $e.h:
						case $e.f: {
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
				st = Object(v.c)({
					error: et,
					pending: rt
				}),
				nt = Object(v.c)({
					subreddit: Ye,
					user: st
				});
			const at = {};
			var ct = (e = at, t) => {
					switch (t.type) {
						case o.i:
						case $e.e:
						case $e.h:
						case l.d: {
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
				ot = Object(v.c)({
					api: nt,
					models: ct
				}),
				dt = r("./src/reddit/actions/blockedRedditors.ts");
			const it = {
				message: ""
			};
			var ut = (e = it, t) => {
				switch (t.type) {
					case dt.c:
					case dt.d:
						return e;
					case dt.b:
						return t.payload;
					default:
						return e
				}
			};
			var lt = (e = !1, t) => {
					switch (t.type) {
						case dt.d:
							return !0;
						case dt.c:
						case dt.b:
							return !1;
						default:
							return e
					}
				},
				pt = Object(v.c)({
					error: ut,
					pending: lt
				});
			const bt = {
				ids: []
			};
			var ft = (e = bt, t) => {
					switch (t.type) {
						case dt.a:
							return {
								ids: [...e.ids, t.payload], timestamp: e.timestamp
							};
						case dt.e:
							const r = e.ids.slice();
							return r.splice(e.ids.indexOf(t.payload), 1), {
								...e,
								ids: r
							};
						case dt.c:
							return {
								ids: [...e.ids, ...t.payload], timestamp: Date.now()
							};
						default:
							return e
					}
				},
				yt = Object(v.c)({
					api: pt,
					list: ft
				}),
				mt = r("./src/reddit/actions/userBlocks.ts");
			const Ot = {};
			var ht = (e = Ot, t) => {
				switch (t.type) {
					case mt.f:
					case mt.e: {
						const {
							userId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case mt.d: {
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
			const Et = {};
			var _t = (e = Et, t) => {
					switch (t.type) {
						case mt.f: {
							const {
								userId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case mt.e:
						case mt.d: {
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
				It = Object(v.c)({
					error: ht,
					pending: _t
				}),
				gt = Object(v.c)({
					api: It
				});
			const St = {
				isViewSafe: !0,
				hasBrandSafetyBeenAssessed: !1
			};
			var vt = (e = St, t) => {
					switch (t.type) {
						case m.a:
							return e.isViewSafe === t.payload.isViewSafe && e.hasBrandSafetyBeenAssessed ? e : {
								...e,
								isViewSafe: t.payload.isViewSafe,
								hasBrandSafetyBeenAssessed: !0
							};
						case W.SUBREDDIT_PENDING:
						case we.c:
						case ge.c:
							return e.hasBrandSafetyBeenAssessed ? {
								...e,
								hasBrandSafetyBeenAssessed: !1
							} : e;
						default:
							return e
					}
				},
				jt = r("./src/reddit/actions/downToChat.ts");
			var wt = (e = null, t) => {
				switch (t.type) {
					case jt.f:
					case jt.g:
						return null;
					case jt.e: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var Tt = (e = !1, t) => {
					switch (t.type) {
						case jt.b:
						case jt.f:
							return !0;
						case jt.a:
						case jt.c:
						case jt.e:
						case jt.g:
							return !1;
						default:
							return e
					}
				},
				Dt = Object(v.c)({
					error: wt,
					pending: Tt
				}),
				Pt = r("./node_modules/lodash/mapValues.js"),
				At = r.n(Pt);
			const Ct = {};
			var Rt = (e = Ct, t) => {
					switch (t.type) {
						case jt.f:
						case jt.e:
						case jt.g: {
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
						case jt.c: {
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
						case jt.d:
							return {
								...At()(e, e => ({
									bannerEnabled: !1,
									buttonEnabled: e.buttonEnabled
								}))
							};
						case jt.a:
						case jt.b:
						default:
							return e
					}
				},
				kt = Object(v.c)({
					api: Dt,
					subreddits: Rt
				}),
				Nt = r("./src/reddit/actions/chat/init.ts");
			var Lt = (e = !1, t) => {
					switch (t.type) {
						case Nt.a:
							return !0;
						default:
							return e
					}
				},
				xt = r("./src/lib/omitKey/index.ts"),
				Ut = r("./src/reddit/actions/pages/chatSettings.ts");
			const Mt = {};
			var Gt = (e = Mt, t) => {
				switch (t.type) {
					case Ut.b: {
						const {
							subredditId: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Ut.a:
					case Ut.c:
					case Ut.d: {
						const {
							subredditId: r
						} = t.payload;
						return Object(xt.a)(e, r)
					}
					default:
						return e
				}
			};
			const Ft = {};
			var Bt = (e = Ft, t) => {
					switch (t.type) {
						case Ut.a:
						case Ut.b:
						case Ut.c:
						case Ut.d: {
							const {
								subredditId: r
							} = t.payload, s = t.type === Ut.c;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				qt = Object(v.c)({
					error: Gt,
					pending: Bt
				}),
				Vt = Object(v.c)({
					fetch: qt
				});
			const Ht = {};
			var Wt = (e = Ht, t) => {
					switch (t.type) {
						case Ut.a:
						case Ut.d: {
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
				Kt = Object(v.c)({
					api: Vt,
					models: Wt
				}),
				$t = r("./src/reddit/actions/chat/unreadCount.ts");
			const Qt = {
				apiError: null
			};
			var zt = (e = Qt, t) => {
				switch (t.type) {
					case $t.a.REQUEST_FAILED: {
						const e = t.payload;
						return {
							...Qt,
							apiError: e
						}
					}
					case $t.a.REQUEST_SUCCESS:
					case $t.a.REQUEST_PENDING:
						return Qt;
					default:
						return e
				}
			};
			var Jt = (e = !1, t) => {
					switch (t.type) {
						case $t.a.REQUEST_PENDING:
							return !0;
						case $t.a.REQUEST_FAILED:
						case $t.a.REQUEST_SUCCESS:
							return !1;
						default:
							return e
					}
				},
				Xt = Object(v.c)({
					error: zt,
					pending: Jt
				});
			const Yt = {
				hasNewMessages: !1,
				unreadMessages: 0
			};
			var Zt = (e = Yt, t) => {
					switch (t.type) {
						case $t.a.SYNC:
						case $t.a.REQUEST_SUCCESS:
							return {
								...t.payload
							};
						default:
							return e
					}
				},
				er = Object(v.c)({
					api: Xt,
					count: Zt
				}),
				tr = Object(v.c)({
					downToChat: kt,
					isInited: Lt,
					subredditSettingsPage: Kt,
					unread: er
				}),
				rr = r("./src/reddit/actions/claimgold.ts");
			var sr = (e = null, t) => {
				switch (t.type) {
					case rr.a:
						return t.payload.error && t.payload.error.fields && t.payload.error.fields[0] && t.payload.error.fields[0].msg;
					case rr.d:
					case rr.e:
					case rr.c:
						return null;
					default:
						return e
				}
			};
			var nr = (e = !1, t) => {
				switch (t.type) {
					case rr.d:
					case rr.c:
					case rr.a:
						return !1;
					case rr.b:
						return !0;
					default:
						return e
				}
			};
			var ar = (e = !1, t) => {
					switch (t.type) {
						case rr.b:
						case rr.d:
						case rr.c:
						case rr.a:
							return !1;
						case rr.f:
							return !0;
						default:
							return e
					}
				},
				cr = Object(v.c)({
					error: sr,
					pending: nr,
					showLoader: ar
				});
			var or = (e = "", t) => {
				switch (t.type) {
					case rr.g:
						return t.payload;
					case rr.e:
						return "";
					default:
						return e
				}
			};
			var dr = (e = !1, t) => {
					switch (t.type) {
						case rr.e:
							return !0;
						case rr.c:
						case rr.d:
							return !1;
						default:
							return e
					}
				},
				ir = Object(v.c)({
					api: cr,
					code: or,
					showModal: dr
				}),
				ur = r("./src/reddit/actions/commentsListTruncated/constants.ts");
			var lr = (e = !0, t) => {
					switch (t.type) {
						case ur.a:
							return !1;
						case ur.b:
							return !0;
						default:
							return e
					}
				},
				pr = r("./src/reddit/actions/communityFlairs/constants.ts");
			const br = {};
			var fr = (e = br, t) => {
					switch (t.type) {
						case pr.a: {
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
				yr = r("./src/reddit/actions/connection/constants.ts");
			const mr = {
				showBanner: !1,
				online: !0
			};
			var Or = (e = mr, t) => {
					switch (t.type) {
						case yr.a:
							return {
								online: !1, showBanner: !0
							};
						case yr.b:
							return {
								online: !0, showBanner: !0
							};
						case yr.c:
							return {
								...e, showBanner: !1
							};
						default:
							return e
					}
				},
				hr = r("./src/reddit/actions/contentControls/constants.ts");
			const Er = {};
			var _r = (e = Er, t) => {
				switch (t.type) {
					case hr.a: {
						const {
							subredditName: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case hr.c:
					case hr.b: {
						const {
							subredditName: r
						} = t.payload;
						return Object(xt.a)(e, r)
					}
					default:
						return e
				}
			};
			const Ir = {};
			var gr = (e = Ir, t) => {
					switch (t.type) {
						case hr.c:
						case hr.a:
						case hr.b: {
							const {
								subredditName: r
							} = t.payload, s = t.type === hr.c;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Sr = Object(v.c)({
					error: _r,
					pending: gr
				}),
				vr = Object(v.c)({
					fetch: Sr
				}),
				jr = r("./src/lib/safeGet/index.ts");
			const wr = {};
			var Tr = (e = wr, t) => {
					switch (t.type) {
						case hr.b: {
							const {
								subredditName: r,
								postRequirements: s,
								hatefulContentFilters: n
							} = t.payload;
							return {
								...e,
								[r]: {
									hatefulContentFilters: n,
									postRequirements: s
								}
							}
						}
						case hr.d: {
							const {
								subredditName: r,
								partialUpdates: s
							} = t.payload, n = Object(jr.a)(e, r);
							return n ? {
								...e,
								[r]: {
									hatefulContentFilters: {
										...n.hatefulContentFilters,
										...s.hatefulContentFilters || {}
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
				Dr = Object(v.c)({
					api: vr,
					models: Tr
				}),
				Pr = r("./src/reddit/actions/contentGate.ts"),
				Ar = r("./src/reddit/actions/preferences.ts");
			const Cr = {};
			var Rr = (e = Cr, t) => {
				switch (t.type) {
					case Pr.a: {
						const {
							subredditName: r
						} = t.payload;
						if (r) {
							if (Object(jr.a)(e, r)) {
								const t = {
									[r]: {
										goldSubreddit: !0
									}
								};
								return L()({
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
					case Pr.b: {
						const {
							subredditDescription: r,
							subredditName: s,
							isContributorRequestsDisabled: n,
							isContributorRequestTimestamp: a,
							subredditId: c
						} = t.payload;
						if (s) {
							if (Object(jr.a)(e, s)) {
								const t = {
									[s]: {
										privateSubreddit: !0,
										subredditDescription: r,
										isContributorRequestsDisabled: n,
										isContributorRequestTimestamp: a,
										subredditId: c
									}
								};
								return L()({
									...e
								}, {
									...t
								})
							}
							return {
								...e,
								[s]: {
									privateSubreddit: !0,
									subredditDescription: r,
									isContributorRequestsDisabled: n,
									isContributorRequestTimestamp: a,
									subredditId: c
								}
							}
						}
						return e
					}
					case Pr.f: {
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
								...Object(jr.a)(e, r) || {},
								quarantinedSubreddit: !0,
								quarantineRequiresEmail: s,
								quarantineMessage: n,
								quarantineMessageHtml: a,
								quarantineMessageRTJson: c
							}
						} : e
					}
					case Pr.h: {
						const {
							subredditName: r,
							banMessage: s
						} = t.payload;
						if (r) {
							if (Object(jr.a)(e, r)) {
								const t = {
									[r]: {
										subredditBanned: !0,
										subredditBanMessage: s
									}
								};
								return L()({
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
					case Pr.i: {
						const {
							subredditName: r
						} = t.payload;
						if (r) {
							if (Object(jr.a)(e, r)) {
								const t = {
									[r]: {
										subredditBlockedForLegalReason: !0
									}
								};
								return L()({
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
					case Pr.j: {
						const {
							subredditName: r
						} = t.payload;
						if (r) {
							if (Object(jr.a)(e, r)) {
								const t = {
									[r]: {
										subredditDoesNotExist: !0
									}
								};
								return L()({
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
					case Pr.c:
					case Pr.d:
					case Pr.e: {
						const {
							profileName: r
						} = t.payload, s = Ce.hc + r.toLocaleLowerCase(), n = Object(jr.a)(e, s) || {}, a = {
							profileDeleted: t.type === Pr.d,
							profileSuspended: t.type === Pr.e,
							profileBlockedForLegalReason: t.type === Pr.c
						};
						return {
							...e,
							[s]: {
								...n,
								...a
							}
						}
					}
					case Ar.q:
						const {
							subredditId: r, prefs: s
						} = t.payload;
						if (s.isContributorRequestTimestamp || 0 === s.isContributorRequestTimestamp)
							for (const t in e)
								if (e[t].subredditId === r) {
									const r = e[t];
									return {
										...e,
										[t]: {
											...r,
											isContributorRequestTimestamp: s.isContributorRequestTimestamp
										}
									}
								} return e;
					default:
						return e
				}
			};
			const kr = {};
			var Nr = (e = kr, t) => {
					switch (t.type) {
						case x.w:
						case F.b:
						case F.f:
							return {
								...e, ...t.payload.continueThreads
							};
						default:
							return e
					}
				},
				Lr = Object(v.c)({
					models: Nr
				}),
				xr = r("./src/reddit/actions/correlationId/index.tsx"),
				Ur = r("./src/reddit/helpers/correlationIdTracker.ts");
			const Mr = {
				[Ur.a.AwardCreationFlow]: void 0,
				[Ur.a.AwardDeletionFlow]: void 0,
				[Ur.a.CommentComposer]: void 0,
				[Ur.a.Explore]: void 0,
				[Ur.a.GildingFlow]: void 0,
				[Ur.a.GiftPremiumFlow]: void 0,
				[Ur.a.GoldPayment]: void 0,
				[Ur.a.LinkedPosts]: void 0,
				[Ur.a.ModQueue]: void 0,
				[Ur.a.NsfwLinkedPosts]: void 0,
				[Ur.a.PostComposer]: void 0,
				[Ur.a.PowerupsFlow]: void 0,
				[Ur.a.PremiumSettings]: void 0,
				[Ur.a.SearchResults]: void 0,
				[Ur.a.SubredditCreation]: void 0,
				[Ur.a.VideoView]: void 0
			};
			var Gr = r("./src/reddit/actions/postCollection/constants.ts");
			var Fr = (e = null, t) => {
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
			var Br = (e = !1, t) => {
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
				qr = Object(v.c)({
					error: Fr,
					pending: Br
				}),
				Vr = Object(v.c)({
					createOrUpdate: qr
				}),
				Hr = r("./src/reddit/actions/postDraft.ts");
			const Wr = {};
			var Kr = (e = Wr, t) => {
				switch (t.type) {
					case Hr.c:
					case Hr.b: {
						const {
							draftId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Hr.a: {
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
						case Hr.b: {
							const {
								draftId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Hr.c:
						case Hr.a: {
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
				zr = Object(v.c)({
					error: Kr,
					pending: Qr
				});
			var Jr = (e = null, t) => {
				switch (t.type) {
					case Hr.d:
						return t.payload;
					case Hr.f:
					case Hr.e:
						return null;
					default:
						return e
				}
			};
			var Xr = (e = !1, t) => {
					switch (t.type) {
						case Hr.f:
							return !0;
						case Hr.e:
						case Hr.d:
							return !1;
						default:
							return e
					}
				},
				Yr = Object(v.c)({
					error: Jr,
					pending: Xr
				});
			const Zr = {
				apiError: null,
				needsCaptcha: !1,
				validationError: null,
				submitValidationError: null
			};
			var es = (e = Zr, t) => {
				switch (t.type) {
					case Hr.l:
					case Hr.j:
						return Zr;
					case Hr.i: {
						const e = t.payload;
						return {
							...Zr,
							apiError: e
						}
					}
					case Hr.m: {
						const e = t.payload;
						return {
							...Zr,
							validationError: e
						}
					}
					case Hr.k: {
						const e = t.payload;
						return {
							...Zr,
							submitValidationError: e
						}
					}
					case Hr.h:
						return {
							...Zr, needsCaptcha: !0
						};
					default:
						return e
				}
			};
			var ts = (e = !1, t) => {
					switch (t.type) {
						case Hr.j:
							return !0;
						case Hr.l:
						case Hr.i:
						case Hr.m:
						case Hr.k:
						case Hr.h:
							return !1;
						default:
							return e
					}
				},
				rs = Object(v.c)({
					error: es,
					pending: ts
				}),
				ss = Object(v.c)({
					deleteDraft: zr,
					listing: Yr,
					save: rs
				}),
				ns = r("./src/reddit/actions/postCreation/constants.ts");
			const as = {};
			var cs = (e = as, t) => {
					switch (t.type) {
						case ns.G: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case ns.p: {
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
				os = Object(v.c)({
					pending: cs
				});
			var ds = (e = null, t) => {
				switch (t.type) {
					case ns.u:
					case ns.v:
					case ns.d:
					case ns.e:
					case ns.f:
					case ns.i:
					case ns.j:
					case ns.n:
					case ns.O:
						return null;
					case ns.t:
						return t.payload;
					default:
						return e
				}
			};
			var is = (e = !1, t) => {
					switch (t.type) {
						case ns.u:
							return !0;
						case ns.v:
						case ns.t:
							return !1;
						default:
							return e
					}
				},
				us = Object(v.c)({
					error: ds,
					pending: is
				}),
				ls = Object(v.c)({
					converting: os,
					mediaUpload: us
				});
			const ps = {};
			var bs = (e = ps, t) => {
				switch (t.type) {
					case Te.PAGE_LOADED:
					case Te.PAGE_PENDING: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Te.PAGE_FAILED: {
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
			const fs = {};
			var ys = (e = fs, t) => {
				switch (t.type) {
					case Te.PAGE_PENDING: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: !1
						}
					}
					case Te.PAGE_LOADED: {
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
			var Os = (e = ms, t) => {
					switch (t.type) {
						case Te.PAGE_PENDING: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Te.PAGE_LOADED:
						case Te.PAGE_FAILED: {
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
				hs = Object(v.c)({
					error: bs,
					fetched: ys,
					pending: Os
				}),
				Es = r("./src/reddit/actions/scheduledPosts/constants.ts");
			const _s = {
				apiError: null,
				needsCaptcha: !1,
				pollError: void 0,
				validationError: null,
				submitValidationError: null
			};
			var Is = (e = _s, t) => {
				switch (t.type) {
					case ns.P:
					case Es.h:
					case Es.k:
					case Es.b:
					case Es.d:
					case ns.w:
					case ns.c:
					case ns.d:
					case ns.e:
					case ns.f:
					case ns.i:
					case ns.j:
					case ns.n:
					case ns.O:
					case ns.E:
						return _s;
					case ns.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return r ? _s : e
					}
					case ns.o: {
						const e = t.payload;
						return {
							..._s,
							apiError: e
						}
					}
					case ns.cb: {
						const e = t.payload;
						return {
							..._s,
							validationError: e
						}
					}
					case ns.K:
					case ns.J: {
						const e = t.payload;
						return {
							..._s,
							submitValidationError: e
						}
					}
					case ns.a:
						return {
							..._s, needsCaptcha: !0
						};
					case ns.y:
						return {
							..._s, pollError: t.payload
						};
					default:
						return e
				}
			};
			var gs = (e = !1, t) => {
					switch (t.type) {
						case ns.w:
							return !0;
						case ns.P:
						case Es.h:
						case ns.o:
						case ns.cb:
						case ns.J:
						case ns.K:
						case ns.y:
						case ns.a:
							return !1;
						default:
							return e
					}
				},
				Ss = Object(v.c)({
					error: Is,
					pending: gs
				});
			var vs = (e = null, t) => {
				switch (t.type) {
					case ns.x:
					case ns.H:
						return null;
					case ns.m:
						return t.payload;
					default:
						return e
				}
			};
			var js = (e = !1, t) => {
					switch (t.type) {
						case ns.x:
							return !0;
						case ns.m:
						case ns.l:
							return !1;
						default:
							return e
					}
				},
				ws = Object(v.c)({
					error: vs,
					pending: js
				}),
				Ts = Object(v.c)({
					submit: Ss,
					update: ws
				});
			var Ds = (e = null, t) => {
				switch (t.type) {
					case ns.O:
					case ns.M:
					case ns.N:
						return null;
					default:
						return e
				}
			};
			var Ps = (e = !1, t) => {
					switch (t.type) {
						case ns.N:
							return !0;
						case ns.M:
						case ns.O:
							return !1;
						default:
							return e
					}
				},
				As = Object(v.c)({
					error: Ds,
					pending: Ps
				}),
				Cs = Object(v.c)({
					change: As
				}),
				Rs = Object(v.c)({
					collection: Vr,
					draft: ss,
					editor: ls,
					page: hs,
					post: Ts,
					subreddit: Cs
				}),
				ks = r("./node_modules/lodash/omit.js"),
				Ns = r.n(ks),
				Ls = r("./src/reddit/actions/pages/postDraft.ts");
			const xs = {};
			var Us = (e = xs, t) => {
				switch (t.type) {
					case Hr.e: {
						const {
							postDrafts: e
						} = t.payload;
						return e || xs
					}
					case Hr.c: {
						const r = e,
							{
								draftId: s
							} = t.payload;
						return Ns()(r, s)
					}
					case ns.P: {
						const {
							draftId: r
						} = t.payload;
						return r ? Ns()(e, r) : e
					}
					case Ls.PAGE_LOADED: {
						const {
							drafts: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Ms = e => {
					if (e.payload && e.payload.routeMatch) return e.payload.routeMatch.route.meta.name
				},
				Gs = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.queryParams
				};
			var Fs = r("./src/reddit/models/PostDraft/index.ts");
			var Bs = (e = "", t) => {
					switch (t.type) {
						case ns.d:
							return t.payload || "";
						case ns.E:
							return "";
						case u.b: {
							if (Ms(t) !== Ce.Mb.POST_CREATION) return "";
							const r = Gs(t);
							return r && r.url ? r.url || "" : e
						}
						case Hr.g: {
							const e = t.payload;
							return e.kind === Fs.b.Link && e.body || ""
						}
						case Es.b:
						case Es.n:
							return t.payload.url || "";
						default:
							return e
					}
				},
				qs = r("./src/reddit/models/PostCreationForm/index.ts"),
				Vs = r("./src/reddit/models/ScheduledPost/index.ts");
			var Hs = (e = "", t) => {
				switch (t.type) {
					case ns.e:
						return t.payload || "";
					case ns.E:
					case ns.I:
						return "";
					case ns.Q:
						return t.payload.editorMode === qs.i.MARKDOWN ? t.payload.content || "" : e;
					case u.b: {
						if (Ms(t) !== Ce.Mb.POST_CREATION) return "";
						const r = Gs(t);
						return r && r.text ? (e => e ? e.replace(/\+/g, " ") : "")(r.text) : e
					}
					case Hr.g: {
						const e = t.payload;
						return e.kind === Fs.b.Markdown && e.body || ""
					}
					case Es.b:
					case Es.n: {
						const e = t.payload;
						return e.contentType === Vs.a.TEXT ? e.body : ""
					}
					default:
						return e
				}
			};
			const Ws = {
				items: [],
				selectedKey: null
			};
			var Ks = (e = Ws, t) => {
					switch (t.type) {
						case ns.f:
							return t.payload || Ws;
						case ns.E:
							return Ws;
						case u.b:
							return Ms(t) !== Ce.Mb.POST_CREATION ? Ws : e;
						case Hr.g:
							return Ws;
						case Es.b:
						case Es.n:
							return Ws;
						default:
							return e
					}
				},
				$s = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				Qs = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				zs = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
			const Js = $s.a.createInitial;
			var Xs = (e = Js(), t) => {
					switch (t.type) {
						case ns.h: {
							const {
								rteState: e
							} = t.payload;
							return e
						}
						case ns.E:
							return $s.a.createInitial();
						case ns.Q: {
							const r = t.payload;
							return r.editorMode === qs.i.RICH_TEXT && r.editorKey === qs.h.POST_CREATION ? $s.a.createInitial(r.content) : e
						}
						case u.b:
							return Ms(t) !== Ce.Mb.POST_CREATION ? $s.a.createInitial() : e;
						case Hr.g: {
							const e = t.payload;
							return e.kind === Fs.b.RichText ? $s.a.createInitial(e.body) : $s.a.createInitial()
						}
						case Es.b:
						case Es.n: {
							const e = t.payload,
								r = Object(Qs.c)(e.mediaAssets);
							return $s.a.createInitial(e.contentType === Vs.a.RTJSON ? Object(zs.b)(e.body) : void 0, r || void 0)
						}
						default:
							return e
					}
				},
				Ys = Object(v.c)({
					link: Bs,
					markdown: Hs,
					media: Ks,
					rte: Xs
				});
			var Zs = (e = null, t) => {
					switch (t.type) {
						case ns.b:
							return t.payload || null;
						case ns.E:
						case Hr.g:
						case Es.b:
						case Es.n:
						case ns.O:
							return null;
						case u.b:
							return Ms(t) === Ce.Mb.POST_CREATION ? e : null;
						default:
							return e
					}
				},
				en = r("./src/reddit/selectors/scheduledPosts/index.ts");
			var tn = (e = null, t) => {
				switch (t.type) {
					case ns.c:
						return t.payload || null;
					case Es.b:
					case Es.n: {
						const e = t.payload;
						return Object(en.n)({
							scheduledPost: e
						}) || null
					}
					case ns.E:
						return null;
					case u.b:
						return Ms(t) === Ce.Mb.POST_CREATION ? e : null;
					case Hr.g:
						return t.payload.flair || null;
					default:
						return e
				}
			};
			var rn = (e = null, t) => {
				switch (t.type) {
					case ns.q:
						return t.payload.type || null;
					case Es.b:
					case Es.n:
					case ns.i:
					case ns.E:
					case u.b:
						return null;
					default:
						return e
				}
			};
			var sn = (e = !1, t) => {
				switch (t.type) {
					case ns.S:
						return t.payload || !1;
					case Es.b:
					case Es.n:
						return "CHAT" === t.payload.discussionType;
					case ns.E:
						return !1;
					case u.b:
						return Ms(t) === Ce.Mb.POST_CREATION && e;
					case Hr.g:
						return t.payload.isChatPost || !1;
					default:
						return e
				}
			};
			var nn = (e = !1, t) => {
				switch (t.type) {
					case ns.ab: {
						const {
							isContestMode: e
						} = t.payload;
						return e || !1
					}
					case ns.E:
						return !1;
					case u.b:
						return Ms(t) === Ce.Mb.POST_CREATION && e;
					case Es.b:
					case Es.n:
						return t.payload.isContestMode;
					default:
						return e
				}
			};
			var an = (e = !1, t) => {
				switch (t.type) {
					case ns.U:
						return t.payload || !1;
					case ns.E:
						return !1;
					case u.b:
						return Ms(t) === Ce.Mb.POST_CREATION && e;
					case Hr.g:
						return t.payload.isNSFW || !1;
					case Es.b:
					case Es.n:
						return t.payload.isNsfw;
					default:
						return e
				}
			};
			var cn = (e = !1, t) => {
				switch (t.type) {
					case ns.V:
						return t.payload || !1;
					case ns.E:
						return !1;
					case ns.O: {
						const {
							name: r
						} = t.payload;
						return !!r && e
					}
					case u.b:
						return Ms(t) === Ce.Mb.POST_CREATION && e;
					case Hr.g:
						return t.payload.isOriginalContent || !1;
					case Es.b:
					case Es.n:
						return t.payload.isOriginalContent;
					default:
						return e
				}
			};
			var on = (e = !1, t) => {
				switch (t.type) {
					case ns.W:
						return t.payload || !1;
					case Es.b:
					case Es.n:
						return !!t.payload.poll;
					case ns.E:
						return !1;
					case u.b:
						return Ms(t) === Ce.Mb.POST_CREATION && e;
					default:
						return e
				}
			};
			var dn = (e = !1, t) => {
				switch (t.type) {
					case ns.ab: {
						const {
							isPostAsMetaMod: e
						} = t.payload;
						return e || !1
					}
					case ns.E:
						return !1;
					case u.b:
						return Ms(t) === Ce.Mb.POST_CREATION && e;
					case Es.b:
					case Es.n:
						return t.payload.isPostAsMetaMod;
					default:
						return e
				}
			};
			var un = (e = !1, t) => {
				switch (t.type) {
					case Es.b:
					case Es.n:
					case ns.E:
						return !1;
					case Hr.n:
						return t.payload;
					case u.b:
						return Ms(t) === Ce.Mb.POST_CREATION && e;
					case Hr.g:
						return t.payload.isPublicLink;
					default:
						return e
				}
			};
			var ln = (e = !1, t) => {
				switch (t.type) {
					case ns.X:
						return t.payload || !1;
					case ns.E:
						return !1;
					case u.b:
						return Ms(t) === Ce.Mb.POST_CREATION && e;
					case Hr.g:
						return t.payload.isSpoiler || !1;
					case Es.b:
					case Es.n:
						return t.payload.isSpoiler;
					default:
						return e
				}
			};
			var pn = (e = "", t) => {
				switch (t.type) {
					case d.b: {
						const {
							subredditName: e
						} = t.payload;
						return e
					}
					case u.b:
					case ns.i:
					case ns.q:
					case ns.E:
					case d.h:
						return "";
					default:
						return e
				}
			};
			var bn = (e = "", t) => {
				switch (t.type) {
					case d.c: {
						const {
							username: e
						} = t.payload;
						return e
					}
					case u.b:
					case ns.i:
					case ns.q:
					case ns.E:
					case d.h:
						return "";
					default:
						return e
				}
			};
			var fn = (e = null, t) => {
					switch (t.type) {
						case ns.N:
						case ns.O:
							return t.payload;
						case ns.M:
						case u.b:
							return null;
						default:
							return e
					}
				},
				yn = r("./src/reddit/actions/polls.ts");
			var mn = (e = null, t) => {
					switch (t.type) {
						case yn.a:
							return {
								...t.payload
							};
						case Es.b:
						case Es.n: {
							const e = t.payload;
							return e.poll ? {
								options: e.poll.options,
								duration: 864e5 * e.poll.duration
							} : null
						}
						case d.h:
						case ns.E:
							return null;
						case u.b:
							return Ms(t) !== Ce.Mb.POST_CREATION ? null : e;
						default:
							return e
					}
				},
				On = r("./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts"),
				hn = r("./src/reddit/helpers/scheduledPosts/index.ts");
			var En = (e = null, t) => {
				var r, s, n, a;
				switch (t.type) {
					case ns.ab: {
						const {
							schedule: e
						} = t.payload;
						return e || null
					}
					case ns.E:
					case Hr.g:
					case ns.O:
						return null;
					case u.b:
						if (Ms(t) === Ce.Mb.POST_CREATION) {
							const c = null === (a = (null !== (n = null === (s = null === (r = t.payload) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.match.queryParams) && void 0 !== n ? n : {}).frequency) || void 0 === a ? void 0 : a.toUpperCase();
							if (c && Object(Vs.m)(c)) {
								const t = Object(On.c)();
								return {
									...e,
									...t,
									frequencyOption: c,
									recurrenceInfo: {
										...On.a,
										...null == e ? void 0 : e.recurrenceInfo,
										...Object(On.b)(new Date(t.submitDate), c)
									}
								}
							}
							return e
						}
						return null;
					case Es.n: {
						const e = t.payload;
						return {
							submitDate: e.publishAt,
							timezoneName: e.clientTimezone,
							frequencyOption: null,
							recurrenceInfo: null
						}
					}
					case Es.b: {
						const e = t.payload;
						return {
							...Object(hn.h)(e)
						}
					}
					default:
						return e
				}
			};
			var _n = (e = !1, t) => {
				const {
					type: r,
					payload: s
				} = t;
				switch (r) {
					case ns.Y:
						return s || !1;
					case u.b:
						return Ms(t) === Ce.Mb.POST_CREATION && e;
					case Es.b:
					case Es.n:
					case Hr.g:
						return !1;
					default:
						return e
				}
			};
			var In = (e = "", t) => {
				switch (t.type) {
					case ns.g:
						return t.payload || "";
					case u.b:
						return Ms(t) !== Ce.Mb.POST_CREATION ? "" : e;
					default:
						return e
				}
			};
			var gn = (e = null, t) => {
				switch (t.type) {
					case u.b:
						return Ms(t) !== Ce.Mb.POST_CREATION ? null : e;
					case ns.E:
						return null;
					case Es.b:
					case Es.n:
						return t.payload.id;
					default:
						return e
				}
			};
			var Sn = (e = !0, t) => {
				switch (t.type) {
					case ns.E:
						return !0;
					case ns.Z:
						return t.payload;
					case u.b:
						return Ms(t) !== Ce.Mb.POST_CREATION || e;
					case Hr.g:
						return t.payload.sendReplies;
					case Es.b:
					case Es.n:
						return t.payload.isSendReplies;
					default:
						return e
				}
			};
			var vn = (e = null, t) => {
				switch (t.type) {
					case ns.ab: {
						const {
							stickyPosition: e
						} = t.payload;
						return e || null
					}
					case ns.E:
					case Hr.g:
					case ns.O:
						return null;
					case u.b:
						return Ms(t) === Ce.Mb.POST_CREATION ? e : null;
					case Es.b:
					case Es.n:
						return t.payload.sticky || null;
					default:
						return e
				}
			};
			const jn = Ce.Vb.POST;
			var wn = (e = jn, t) => {
				switch (t.type) {
					case ns.E:
						return jn;
					case ns.r:
						return Ce.Vb.CROSSPOST;
					case ns.i:
						return t.payload.submissionType || jn;
					case u.b: {
						if (Ms(t) !== Ce.Mb.POST_CREATION) return jn;
						const r = Gs(t);
						if (!r) return e;
						const {
							title: s = "",
							url: n,
							text: a = "",
							media: c = !1,
							selftext: o = !1,
							type: d = ""
						} = r, i = s && !a && !o;
						return c ? Ce.Vb.MEDIA : void 0 !== n || i ? Ce.Vb.LINK_ONLY : a || o ? Ce.Vb.POST : d === Ce.xb ? Ce.Vb.POLL : e
					}
					case Hr.g: {
						const e = t.payload;
						return Fs.a[e.kind]
					}
					case Es.b:
					case Es.n: {
						const e = t.payload;
						return e.poll ? Ce.Vb.POLL : e.url ? Ce.Vb.LINK_ONLY : Ce.Vb.POST
					}
					default:
						return e
				}
			};
			var Tn = (e = null, t) => {
					switch (t.type) {
						case ns.ab: {
							const {
								suggestedSort: e
							} = t.payload;
							return e || null
						}
						case ns.E:
						case Hr.g:
						case ns.O:
							return null;
						case u.b:
							return Ms(t) === Ce.Mb.POST_CREATION ? e : null;
						case Es.b:
						case Es.n:
							return t.payload.suggestedCommentSort || null;
						default:
							return e
					}
				},
				Dn = r("./src/reddit/models/Poll/index.ts");
			const Pn = e => `Should ${e||"username"} become the top moderator?`,
				An = e => e ? `Should we spin-off to r/${e}?` : "Should we spin-off to a new community?";
			var Cn = (e = "", t) => {
				switch (t.type) {
					case ns.r:
						return t.payload.postTitle || "";
					case ns.j:
						return t.payload || "";
					case ns.D: {
						const {
							title: r
						} = t.payload;
						return e || (r || "")
					}
					case ns.E:
						return "";
					case u.b: {
						if (Ms(t) !== Ce.Mb.POST_CREATION) return "";
						const r = Gs(t);
						return r && r.title ? (e => e ? e.replace(/\+/g, " ") : "")(r.title) : e
					}
					case Hr.g:
						return t.payload.title;
					case ns.q: {
						const {
							oldType: r,
							type: s
						} = t.payload;
						return s === Dn.a.ReplaceTopMod ? Pn("") : s === Dn.a.Spinoff ? An("") : r === Dn.a.ReplaceTopMod || r === Dn.a.Spinoff ? "" : e
					}
					case d.c: {
						const {
							username: e
						} = t.payload;
						return Pn(e)
					}
					case d.b: {
						const {
							subredditName: e
						} = t.payload;
						return An(e)
					}
					case ns.i: {
						const {
							extra: r
						} = t.payload;
						return !r || r.govType !== Dn.a.ReplaceTopMod && r.govType !== Dn.a.Spinoff ? e : ""
					}
					case Es.b:
					case Es.n:
						return t.payload.title;
					default:
						return e
				}
			};
			const Rn = {
				name: "",
				theme: "theme_1",
				token: null
			};
			var kn = (e = Rn, t) => {
					switch (t.type) {
						case ns.bb:
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				Nn = Object(v.c)({
					body: Ys,
					eventSchedule: Zs,
					flair: tn,
					govType: rn,
					isChatPost: sn,
					isContestMode: nn,
					isNSFW: an,
					isOC: cn,
					isPostAsMetaMod: dn,
					isPoll: on,
					isPublicLink: un,
					isSpoiler: ln,
					newSubreddit: pn,
					newTopMod: bn,
					nextSubreddit: fn,
					polls: mn,
					postSchedule: En,
					postToTwitter: _n,
					recaptcha: In,
					scheduledPostId: gn,
					sendReplies: Sn,
					stickyPosition: vn,
					submissionType: wn,
					suggestedSort: Tn,
					title: Cn,
					tournament: kn
				});
			var Ln = (e = null, t) => {
				switch (t.type) {
					case u.b: {
						if (Ms(t) !== Ce.Mb.POST_CREATION) return null;
						const r = Gs(t);
						return r && r.text && (e => e ? e.replace(/\+/g, " ") : "")(r.text) ? qs.i.MARKDOWN : e
					}
					case ns.H: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case ns.I:
						return null;
					case ns.Q: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case Es.b:
					case Es.n:
						return t.payload.contentType === Vs.a.RTJSON ? qs.i.RICH_TEXT : qs.i.MARKDOWN;
					default:
						return e
				}
			};
			const xn = {
				title: [],
				body: [],
				link: [],
				flair: []
			};
			var Un = (e = xn, t) => {
				switch (t.type) {
					case ns.c:
					case ns.d:
					case ns.e:
						return e[Ce.wb.BODY] ? {
							...e,
							[Ce.wb.BODY]: []
						} : e;
					case ns.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return e[Ce.wb.BODY] && r ? {
							...e,
							[Ce.wb.BODY]: []
						} : e
					}
					case ns.j:
						return e[Ce.wb.TITLE] ? {
							...e,
							[Ce.wb.TITLE]: []
						} : e;
					case ns.L: {
						const r = t.payload;
						return {
							...e,
							[r]: []
						}
					}
					case ns.n: {
						const r = t.payload;
						return r ? {
							...e,
							[r]: []
						} : xn
					}
					case ns.K:
					case ns.J:
						return ((e, t) => {
							const r = (t.fields || []).filter(({
								field: e
							}) => Object(qs.w)(e));
							if (!r.length) return e;
							const s = r.reduce((e, t) => (e[t.field] || (e[t.field] = []), e[t.field].push(t.msg), e), {});
							return {
								...e,
								...s
							}
						})(e, t.payload);
					case u.b:
						return Ms(t) !== Ce.Mb.POST_CREATION ? xn : e;
					default:
						return e
				}
			};
			var Mn = (e = !1, t) => {
				switch (t.type) {
					case ns.b:
					case ns.c:
					case ns.d:
					case ns.e:
					case ns.f:
					case ns.j:
					case ns.i:
					case ns.U:
					case ns.V:
					case ns.X:
					case Hr.n:
					case ns.Z:
					case ns.ab:
						return !0;
					case ns.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return !!r || e
					}
					case ns.P:
					case Es.h:
						return !1;
					case ns.R:
						return t.payload;
					case u.b:
						return Ms(t) === Ce.Mb.POST_CREATION && e;
					case ns.E:
					case Hr.l:
					case Hr.g:
						return !1;
					default:
						return e
				}
			};
			const Gn = qs.r.Post;
			var Fn = (e = Gn, t) => {
					switch (t.type) {
						case ns.w:
							return qs.r.Post;
						case ns.F:
							return t.payload;
						case Hr.j:
							return qs.r.Draft;
						case u.b:
							return Ms(t) !== Ce.Mb.POST_CREATION ? Gn : e;
						default:
							return e
					}
				},
				Bn = Object(v.c)({
					editorMode: Ln,
					fieldValidation: Un,
					isChanged: Mn,
					submitMode: Fn
				});
			var qn = (e = "", t) => {
				switch (t.type) {
					case ns.H:
						return t.payload.editorMode === qs.i.MARKDOWN ? t.payload.postContent || "" : e;
					case ns.I:
						return "";
					case ns.Q:
						return t.payload.editorMode === qs.i.MARKDOWN ? t.payload.content || "" : e;
					default:
						return e
				}
			};
			const Vn = $s.a.createInitial;
			var Hn = (e = Vn(), t) => {
					switch (t.type) {
						case ns.I:
							return $s.a.createInitial();
						case ns.H: {
							const r = t.payload;
							return r.editorMode === qs.i.RICH_TEXT && "object" == typeof r.postContent ? $s.a.createInitial(r.postContent, r.mediaMetadata) : e
						}
						case ns.Q: {
							const r = t.payload;
							return r.editorMode === qs.i.RICH_TEXT && r.editorKey === qs.h.POST_EDITING ? $s.a.createInitial(r.content) : e
						}
						default:
							return e
					}
				},
				Wn = Object(v.c)({
					markdown: qn,
					rte: Hn
				});
			var Kn = (e = null, t) => {
					switch (t.type) {
						case ns.H: {
							const {
								postId: e
							} = t.payload;
							return e
						}
						case ns.I:
							return null;
						default:
							return e
					}
				},
				$n = Object(v.c)({
					draft: Wn,
					postId: Kn
				});
			var Qn = (e = !1, t) => {
				switch (t.type) {
					case ns.C:
					case ns.B:
						return !1;
					case ns.z:
						return !0;
					default:
						return e
				}
			};
			var zn = (e = !1, t) => {
					switch (t.type) {
						case ns.z:
						case ns.B:
							return !1;
						case ns.C:
							return !0;
						default:
							return e
					}
				},
				Jn = Object(v.c)({
					error: Qn,
					pending: zn
				});
			var Xn = (e = !1, t) => {
				switch (t.type) {
					case ns.A: {
						const {
							isChanged: e
						} = t.payload;
						return e
					}
					case ns.j:
					case ns.d:
					case ns.e:
					case ns.i:
					case ns.r:
					case Hr.g:
						return !0;
					case ns.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return !!r || e
					}
					default:
						return e
				}
			};
			const Yn = {};
			var Zn = (e = Yn, t) => {
				switch (t.type) {
					case ns.B: {
						const {
							recSubsDict: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const ea = [];
			var ta = (e = ea, t) => {
					switch (t.type) {
						case ns.B: {
							const {
								recSubsOrder: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				ra = Object(v.c)({
					api: Jn,
					isInputChanged: Xn,
					model: Zn,
					order: ta
				}),
				sa = Object(v.c)({
					api: Rs,
					drafts: Us,
					formData: Nn,
					formState: Bn,
					postEditing: $n,
					subredditRec: ra
				}),
				na = r("./src/reddit/actions/dashboard/constants.ts");
			const aa = {
				selectedComponent: null,
				subredditPending: !1,
				subredditLoaded: {}
			};
			var ca = (e = aa, t) => {
				switch (t.type) {
					case na.a:
						return {
							...e, selectedComponent: t.payload
						};
					case na.d: {
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
					case na.c: {
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
			var oa = (e = null, t) => {
				switch (t.type) {
					case Ie.b:
					case Ie.c:
						return null;
					case Ie.a: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			var da = (e = !1, t) => {
				switch (t.type) {
					case Ie.c:
						return !1;
					case Ie.b:
						return !0;
					default:
						return e
				}
			};
			var ia = (e = !1, t) => {
					switch (t.type) {
						case Ie.c:
							return !0;
						case Ie.b:
						case Ie.a:
							return !1;
						default:
							return e
					}
				},
				ua = Object(v.c)({
					error: oa,
					loaded: da,
					pending: ia
				}),
				la = Object(v.c)({
					list: ua
				}),
				pa = r("./node_modules/lodash/isEmpty.js"),
				ba = r.n(pa);
			const fa = {};
			var ya = (e = fa, t) => {
					switch (t.type) {
						case Ie.b: {
							const {
								discoveryUnits: r
							} = t.payload;
							return ba()(r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				ma = r("./node_modules/lodash/forOwn.js"),
				Oa = r.n(ma),
				ha = r("./src/reddit/helpers/name/index.ts");
			const Ea = {};
			var _a = (e = Ea, t) => {
					switch (t.type) {
						case Ie.b: {
							const {
								discoveryUnits: r
							} = t.payload;
							if (ba()(r)) return e;
							const s = {};
							return Oa()(r, e => {
								s[Object(ha.g)(e.unitName)] = e.id
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				Ia = Object(v.c)({
					api: la,
					models: ya,
					nameToId: _a
				}),
				ga = r("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const Sa = [];
			var va = (e = Sa, t) => {
					switch (t.type) {
						case ga.a: {
							const {
								subredditId: r
							} = t.payload;
							return [...e, r]
						}
						default:
							return e
					}
				},
				ja = r("./src/reddit/actions/economics/banners/constants.ts");
			const wa = {
				dismissedBanners: {}
			};
			var Ta = (e = wa, t) => {
					switch (t.type) {
						case ja.c: {
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
						case ja.d: {
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
						case ja.a:
						case ja.b: {
							const {
								subredditId: r,
								bannerType: s
							} = t.payload, n = e.dismissedBanners[r] || {}, a = t.type === ja.a;
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
				Da = r("./src/reddit/models/Badge/managementPage.ts");
			const Pa = {
				badgeType: Da.a.Cosmetic,
				view: Da.c.Gallery
			};
			var Aa = (e = Pa, t) => {
				switch (t.type) {
					case o.c: {
						const {
							badge: r,
							initialView: s
						} = t.payload;
						return r || s ? {
							...e,
							badgeType: r ? Object(Da.d)(r.placement) : e.badgeType,
							view: s
						} : e
					}
					case o.b: {
						const r = t.payload;
						return {
							...e,
							badgeType: r
						}
					}
					case o.d: {
						const r = t.payload;
						return {
							...e,
							view: r
						}
					}
					case s.b:
						return Pa;
					default:
						return e
				}
			};
			var Ca = (e = null, t) => {
					switch (t.type) {
						case o.c:
							return {
								badge: t.payload.badge
							};
						case s.b:
							return null;
						default:
							return e
					}
				},
				Ra = r("./src/reddit/actions/economics/powerups/constants.ts");

			function ka(e, t) {
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
			}

			function Na(e) {
				if (!e) return e;
				const {
					mediaPacks: t
				} = e, r = {};
				return null == t || t.forEach(e => {
					const {
						id: t,
						name: s,
						emotes: n
					} = e;
					r[t] = {
						id: t,
						name: s,
						emotes: n.map(e => ka(e, t))
					}
				}), r
			}
			const La = {};
			var xa = (e = La, t) => {
				switch (t.type) {
					case o.e: {
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
					case ee.pb: {
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
					case Ra.b: {
						const {
							subredditId: r,
							emoji: s
						} = t.payload;
						return function(e, t, r) {
							if (!e[t]) return e;
							const s = e[t].findIndex(e => e.title === t);
							return -1 === s ? e : {
								...e,
								[t]: e[t].map((e, n) => n !== s ? e : {
									title: e.title,
									emotes: {
										...e.emotes,
										[r.name]: ka(r, t)
									}
								})
							}
						}(e, r, s)
					}
					default:
						return e
				}
			};
			const Ua = {};
			var Ma = (e = Ua, t) => {
					switch (t.type) {
						case o.e: {
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
				Ga = r("./src/reddit/actions/economics/me/constants.ts");
			const Fa = {
				fetched: !1,
				data: {}
			};
			var Ba = (e = Fa, t) => {
					switch (t.type) {
						case Ga.a:
							return {
								fetched: !0, data: t.payload
							};
						case o.h: {
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
				qa = r("./src/reddit/reducers/economics/paymentSystems/index.ts");
			const Va = {
				fetched: !1,
				data: null
			};
			var Ha = (e = Va, t) => {
					switch (t.type) {
						case Ga.b:
							return {
								fetched: !0, data: e.data
							};
						case Ga.c:
							return {
								fetched: !0, data: t.payload
							};
						default:
							return e
					}
				},
				Wa = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				Ka = Object(v.c)({
					banners: Ta,
					currentBadgeManagementScreen: Aa,
					currentModalArgs: Ca,
					emotes: xa,
					gifs: Ma,
					me: Ba,
					paymentSystems: qa.b,
					pointsCopy: Ha,
					subredditPremium: Wa.b
				}),
				$a = r("./src/reddit/actions/emoji.ts");
			const Qa = {};
			var za = (e = Qa, t) => {
					switch (t.type) {
						case $a.h: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case $a.g:
						case $a.f: {
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
				Ja = Object(v.c)({
					pending: za
				}),
				Xa = Object(v.c)({
					list: Ja
				});
			const Ya = {};
			var Za = (e = Ya, t) => {
					switch (t.type) {
						case $a.f:
						case $a.c:
							return e;
						case $a.g: {
							const {
								data: e
							} = t.payload;
							return e
						}
						case $a.d: {
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
						case $a.i: {
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
						case $a.e: {
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
				ec = Object(v.c)({
					api: Xa,
					models: Za
				}),
				tc = r("./src/reddit/actions/experiments.ts");
			const rc = /^experiment_(.*)$/i,
				sc = e => {
					const t = e.match(rc);
					if (null !== t) return t[1]
				},
				nc = {};
			var ac = (e = nc, t) => {
					switch (t.type) {
						case u.b: {
							const r = Gs(t);
							if (!r) return e;
							const s = {};
							for (const e in r) {
								const t = sc(e);
								t && (s[t.toLowerCase()] = r[e] || "")
							}
							return ba()(s) ? e : {
								...e,
								...s
							}
						}
						case tc.b: {
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
				cc = r("./src/reddit/actions/externalAccount.ts");
			const oc = {};
			var dc = (e = oc, t) => {
				switch (t.type) {
					case cc.e:
					case cc.f: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case cc.d: {
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
			const ic = {};
			var uc = (e = ic, t) => {
					switch (t.type) {
						case cc.e: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case cc.f:
						case cc.d: {
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
				lc = Object(v.c)({
					error: dc,
					pending: uc
				});
			const pc = {};
			var bc = (e = pc, t) => {
				switch (t.type) {
					case cc.l:
					case cc.k: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case cc.j: {
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
			const fc = {};
			var yc = (e = fc, t) => {
					switch (t.type) {
						case cc.b: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case cc.c:
						case cc.a: {
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
				mc = Object(v.c)({
					error: bc,
					pending: yc
				});
			const Oc = {};
			var hc = (e = Oc, t) => {
				switch (t.type) {
					case cc.i:
					case cc.h: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case cc.g: {
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
			const Ec = {};
			var _c = (e = Ec, t) => {
				switch (t.type) {
					case cc.h: {
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
			const Ic = {};
			var gc = (e = Ic, t) => {
					switch (t.type) {
						case cc.i: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case cc.h:
						case cc.g: {
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
				Sc = Object(v.c)({
					error: hc,
					fetched: _c,
					pending: gc
				});
			const vc = {};
			var jc = (e = vc, t) => {
				switch (t.type) {
					case cc.l:
					case cc.k: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case cc.j: {
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
			const wc = {};
			var Tc = (e = wc, t) => {
					switch (t.type) {
						case cc.l: {
							const {
								username: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case cc.k:
						case cc.j: {
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
				Dc = Object(v.c)({
					error: jc,
					pending: Tc
				}),
				Pc = Object(v.c)({
					connect: lc,
					disconnect: mc,
					user: Dc,
					subreddit: Sc
				});
			const Ac = {};
			var Cc = (e = Ac, t) => {
				switch (t.type) {
					case cc.h: {
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
			const Rc = {};
			var kc = (e = Rc, t) => {
					switch (t.type) {
						case cc.k: {
							const {
								username: r,
								accountsData: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case cc.c: {
							const {
								username: r,
								provider: s
							} = t.payload, n = e[r];
							return n && n[s] ? {
								...e,
								[r]: Ns()(n, s)
							} : e
						}
						default:
							return e
					}
				},
				Nc = Object(v.c)({
					api: Pc,
					user: kc,
					subreddit: Cc
				}),
				Lc = r("./src/reddit/featureFlags/index.ts");
			const xc = new Set(["0", "disabled", "false", "off", ""]);
			var Uc = e => !xc.has(e.toLowerCase());
			const Mc = Lc.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				Gc = Lc.a.reduce((e, t) => (e[t] = null, e), {});
			var Fc = (e = Gc, t) => {
					switch (t.type) {
						case u.b: {
							const r = Gs(t);
							if (void 0 !== r) {
								const t = {};
								for (const e in r) {
									const s = Object(Lc.g)(e);
									if (s) {
										const n = Mc[s.toLowerCase()];
										if (n) {
											const s = r[e],
												a = "string" != typeof s || Uc(s);
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
						case Lc.b: {
							const {
								featureName: r,
								currentValue: s
							} = t.payload;
							return s === e[r] ? e : {
								...e,
								[r]: s
							}
						}
						case Lc.c: {
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
				Bc = Object(v.c)({
					overrides: Fc
				}),
				qc = r("./src/reddit/actions/focusedVerticals/constants.ts");
			const Vc = {
				focusedVerticalGqlError: null
			};
			var Hc = (e = Vc, t) => {
				switch (t.type) {
					case qc.h:
					case qc.g:
					case qc.c:
						return {
							...e, focusedVerticalGqlError: null
						};
					case qc.e:
						return {
							...e, focusedVerticalGqlError: t.payload
						};
					default:
						return e
				}
			};
			const Wc = {
				focusedVerticalGqlPending: !1
			};
			var Kc = (e = Wc, t) => {
					switch (t.type) {
						case qc.h:
							return {
								...e, focusedVerticalGqlPending: !0
							};
						case qc.e:
						case qc.g:
						case qc.c:
							return {
								...e, focusedVerticalGqlPending: !1
							};
						default:
							return e
					}
				},
				$c = Object(v.c)({
					error: Hc,
					pending: Kc
				});
			var Qc = (e = "", t) => {
				switch (t.type) {
					case qc.g:
					case qc.c:
						return t.payload.category || "";
					default:
						return e
				}
			};
			const zc = {
				dismissed: !0
			};
			var Jc = (e = zc, t) => {
				switch (t.type) {
					case qc.j:
						return {
							dismissed: !1
						};
					case qc.i:
						return {
							dismissed: !0
						};
					default:
						return e
				}
			};
			var Xc = (e = null, t) => {
				switch (t.type) {
					case qc.g:
					case qc.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var Yc = (e = null, t) => {
				switch (t.type) {
					case qc.g:
					case qc.c:
					case qc.f:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var Zc = (e = null, t) => {
					switch (t.type) {
						case qc.g:
						case qc.c:
							return t.payload.recommendedSubredditIds || null;
						default:
							return e
					}
				},
				eo = Object(v.c)({
					api: $c,
					components: Jc,
					interactedSubredditIds: Xc,
					recommendedSubredditIds: Zc,
					category: Qc,
					lastLoadedEnv: Yc
				});
			Object(Ae.a)("FONTS_FONT_FILES_PARSED");
			const to = [];
			var ro = (e = to, t) => {
				switch (t.type) {
					case "FONTS_FONT_FILES_PARSED":
						return t.payload.fonts;
					default:
						return e
				}
			};
			var so = (e = null, t) => {
				switch (t.type) {
					case ee.p:
						return t.payload;
					case ee.e:
					case u.b:
					case ee.K:
					case ee.s:
						return null;
					default:
						return e
				}
			};
			var no = (e = !1, t) => {
				switch (t.type) {
					case ee.e:
					case u.b:
					case ee.s:
					case ee.p:
						return !1;
					case ee.q:
						return !0;
					default:
						return e
				}
			};
			var ao = (e = !1, t) => {
					switch (t.type) {
						case ee.q:
						case ee.e:
						case u.b:
						case ee.s:
						case ee.p:
							return !1;
						case ee.u:
							return !0;
						default:
							return e
					}
				},
				co = Object(v.c)({
					error: so,
					pending: no,
					showLoader: ao
				});
			var oo = (e = null, t) => {
				switch (t.type) {
					case ee.L:
					case ee.K: {
						if (!t.payload) return null;
						const {
							correlationId: e
						} = t.payload;
						return e
					}
					case ee.f:
					case ee.e:
						return null;
					default:
						return e
				}
			};
			var io = (e = null, t) => {
				switch (t.type) {
					case ee.t: {
						const {
							id: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var uo = (e = null, t) => {
				const r = t.payload;
				switch (t.type) {
					case ee.J:
					case ee.K:
						return r.thingId;
					case ee.s:
					case u.b:
					case ee.e:
						return null;
					default:
						return e
				}
			};
			var lo = (e = !1, t) => {
				switch (t.type) {
					case ee.r:
						return t.payload;
					case ee.K:
						return !1;
					default:
						return e
				}
			};
			var po = (e = !1, t) => {
				switch (t.type) {
					case ee.J:
						return !0;
					default:
						return e
				}
			};
			var bo = (e = "", t) => {
				switch (t.type) {
					case ee.v:
						return t.payload;
					case ee.K:
						return "";
					default:
						return e
				}
			};
			const fo = _e.n;
			var yo = (e = fo, t) => {
					switch (t.type) {
						case ee.mb:
							return t.payload;
						case ee.K: {
							const {
								award: e
							} = t.payload;
							return e || fo
						}
						default:
							return e
					}
				},
				mo = Object(v.c)({
					api: co,
					correlationId: oo,
					gildModalThingId: uo,
					isAnonymous: lo,
					isIframed: po,
					message: bo,
					gildedThing: io,
					selectedAward: yo
				});
			var Oo = (e = null, t) => {
				switch (t.type) {
					case ee.w:
						return t.payload.error && t.payload.error.fields && t.payload.error.fields[0] && t.payload.error.fields[0].msg || "An unknown error occurred";
					case ee.f:
					case u.b:
					case ee.L:
					case ee.B:
						return null;
					default:
						return e
				}
			};
			var ho = (e = !1, t) => {
					switch (t.type) {
						case ee.f:
						case u.b:
						case ee.B:
						case ee.w:
							return !1;
						case ee.x:
							return !0;
						default:
							return e
					}
				},
				Eo = Object(v.c)({
					error: Oo,
					pending: ho
				});
			var _o = (e = "", t) => {
					switch (t.type) {
						case ee.L: {
							const {
								profileName: e
							} = t.payload;
							return e
						}
						case u.b:
						case ee.f:
						case ee.B:
							return "";
						default:
							return e
					}
				},
				Io = Object(v.c)({
					api: Eo,
					givePremiumModalAccountName: _o
				}),
				go = r("./src/reddit/actions/header.ts"),
				So = r("./src/reddit/actions/overlayEvents.ts");
			var vo = (e = !1, t) => {
					switch (t.type) {
						case go.a:
							return !1;
						case go.b:
							return !0;
						case go.c:
							return !e;
						case So.b:
							return !1;
						default:
							return e
					}
				},
				jo = Object(v.c)({
					isSubscriptionsDropdownOpen: vo
				});
			var wo = (e = !1, t) => {
					switch (t.type) {
						case "HTML_RESPONSE_STREAMING_STARTED":
							return !0;
						case "HTML_RESPONSE_STREAMING_ENDED":
							return !1;
						default:
							return e
					}
				},
				To = r("./src/reddit/actions/imageUploads.ts");
			const Do = {};
			var Po = (e = Do, t) => {
					switch (t.type) {
						case To.d: {
							const r = t.payload;
							return {
								...e,
								[r.id]: r
							}
						}
						case To.c:
						case To.e:
						case To.b: {
							const r = t.payload;
							return e[r.id] ? {
								...e,
								[r.id]: r
							} : e
						}
						case To.a: {
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
				Ao = r("./src/reddit/actions/interceptedAction.ts");
			var Co = (e = null, t) => {
					switch (t.type) {
						case Ao.a:
							return t.payload;
						case Ao.b:
							return null;
						default:
							return e
					}
				},
				Ro = r("./src/reddit/actions/changeUsername.ts");
			var ko = (e = !0, t) => {
					switch (t.type) {
						case Ro.a:
							return !1;
						case Ro.b:
							return !0;
						default:
							return e
					}
				},
				No = r("./src/reddit/actions/emailVerificationTooltip.ts");
			var Lo = (e = !1, t) => {
					switch (t.type) {
						case No.a:
							return !e;
						default:
							return e
					}
				},
				xo = r("./src/reddit/actions/moderatingSubreddits.ts");
			var Uo = (e = !1, t) => {
					switch (t.type) {
						case xo.a: {
							if (e) return e;
							const r = t.payload;
							return Object.keys(r).some(e => !0 === r[e].posts)
						}
						case W.SUBREDDIT_LOADED:
						case F.b:
						case F.f:
						case Te.PAGE_LOADED: {
							if (e) return e;
							const {
								payload: r
							} = t;
							return r.subredditPermissions && r.subreddits ? !!r.subredditPermissions.posts : e
						}
						case G.i:
						case G.f:
						case G.m:
						case G.p:
						case G.v: {
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
				Mo = r("./src/reddit/actions/jsApi.ts");
			const Go = [];
			var Fo = (e = Go, t) => {
					switch (t.type) {
						case Mo.a: {
							const r = t.payload;
							return -1 === e.indexOf(r) && (e = [...e, r]).sort(), e
						}
						default:
							return e
					}
				},
				Bo = r("./src/reddit/actions/leaderboard/constants.ts");
			const qo = {};
			var Vo = (e = qo, t) => {
				switch (t.type) {
					case Bo.a: {
						const {
							subredditId: r,
							data: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Bo.b:
					case Bo.c: {
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
			const Ho = {};
			var Wo = (e = Ho, t) => {
					switch (t.type) {
						case Bo.a:
						case Bo.c: {
							const {
								subredditId: r
							} = t.payload, {
								[r]: s,
								...n
							} = e;
							return n
						}
						case Bo.b: {
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
				Ko = Object(v.c)({
					error: Vo,
					pending: Wo
				});
			const $o = {};
			var Qo = (e = $o, t) => {
					switch (t.type) {
						case Bo.c: {
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
				zo = Object(v.c)({
					api: Ko,
					models: Qo
				});
			var Jo = (e = "", t) => {
				switch (t.type) {
					case u.b: {
						const {
							listingKey: r
						} = t.payload;
						return r || e
					}
					default:
						return e
				}
			};
			const Xo = {};
			var Yo = (e = Xo, t) => {
				switch (t.type) {
					case Re.f:
					case Re.g:
					case H.b:
					case H.c: {
						const {
							key: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Ce.Zb.Users) ? e : {
							...e,
							[r]: null
						}
					}
					case Re.e:
					case H.a: {
						const {
							key: r,
							error: s,
							success: n,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Ce.Zb.Users) || n && n.authors ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Zo = {};
			var ed = (e = Zo, t) => {
					switch (t.type) {
						case Re.f:
						case H.b: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ce.Zb.Users) ? e : {
								...e,
								[r]: !0
							}
						}
						case Re.g:
						case Re.e:
						case H.c:
						case H.a: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ce.Zb.Users) ? e : {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				td = Object(v.c)({
					error: Yo,
					pending: ed
				});
			const rd = {};
			var sd = (e = rd, t) => {
				switch (t.type) {
					case Re.g: {
						const {
							fetchedToken: r,
							key: s,
							type: n
						} = t.payload;
						if (-1 === n.indexOf(Ce.Zb.Users)) return e;
						const a = e[s];
						return {
							...e,
							[s]: {
								...a,
								[r]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const nd = {};
			var ad = (e = nd, t) => {
				switch (t.type) {
					case Re.g: {
						const {
							key: r,
							authorOrder: s,
							type: n
						} = t.payload;
						return -1 !== n.indexOf(Ce.Zb.Users) && e[r] ? {
							...e,
							[r]: e[r].concat(s)
						} : e
					}
					case H.c: {
						const {
							key: r,
							authorOrder: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Ce.Zb.Users) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const cd = {};
			var od = (e = cd, t) => {
					switch (t.type) {
						case Re.g:
						case H.c: {
							const {
								key: r,
								tokens: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Ce.Zb.Users) ? e : s.authors ? {
								...e,
								[r]: {
									token: null
								}
							} : Object(xt.a)(e, r)
						}
						default:
							return e
					}
				},
				dd = Object(v.c)({
					api: td,
					identifiers: ad,
					fetchedTokens: sd,
					loadMore: od
				});
			const id = {};
			var ud = (e = id, t) => {
				switch (t.type) {
					case Re.f:
					case Re.g:
					case H.b:
					case H.c: {
						const {
							key: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Ce.Zb.Subreddits) ? e : {
							...e,
							[r]: null
						}
					}
					case Re.e:
					case H.a: {
						const {
							key: r,
							error: s,
							success: n,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Ce.Zb.Subreddits) || n && n.communities ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const ld = {};
			var pd = (e = ld, t) => {
					switch (t.type) {
						case Re.f:
						case H.b: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ce.Zb.Subreddits) ? e : {
								...e,
								[r]: !0
							}
						}
						case Re.g:
						case Re.e:
						case H.c:
						case H.a: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ce.Zb.Subreddits) ? e : {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				bd = Object(v.c)({
					error: ud,
					pending: pd
				});
			const fd = {};
			var yd = (e = fd, t) => {
				switch (t.type) {
					case Re.g: {
						const {
							fetchedToken: r,
							key: s,
							type: n
						} = t.payload;
						if (-1 === n.indexOf(Ce.Zb.Subreddits)) return e;
						const a = e[s];
						return {
							...e,
							[s]: {
								...a,
								[r]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const md = {};
			var Od = (e = md, t) => {
				switch (t.type) {
					case Re.g: {
						const {
							key: r,
							communityOrder: s,
							type: n
						} = t.payload;
						return -1 !== n.indexOf(Ce.Zb.Subreddits) && e[r] ? {
							...e,
							[r]: e[r].concat(s)
						} : e
					}
					case H.c: {
						const {
							key: r,
							communityOrder: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Ce.Zb.Subreddits) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const hd = {};
			var Ed = (e = hd, t) => {
					switch (t.type) {
						case Re.g:
						case H.c: {
							const {
								key: r,
								tokens: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Ce.Zb.Subreddits) ? e : s.communities ? {
								...e,
								[r]: {
									token: s.communities
								}
							} : Object(xt.a)(e, r)
						}
						default:
							return e
					}
				},
				_d = Object(v.c)({
					api: bd,
					identifiers: Od,
					fetchedTokens: yd,
					loadMore: Ed
				});
			const Id = {};
			var gd = (e = Id, t) => {
				switch (t.type) {
					case Re.f:
					case Re.g:
					case H.b:
					case H.c: {
						const {
							key: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Ce.Zb.Subreddits) && -1 === s.indexOf(Ce.Zb.Users) ? e : {
							...e,
							[r]: null
						}
					}
					case Re.e:
					case H.a: {
						const {
							key: r,
							error: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Ce.Zb.Subreddits) && -1 === n.indexOf(Ce.Zb.Users) ? e : {
							...e,
							[r]: s
						}
					}
					case Ie.f:
					case Ie.e: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Ie.d: {
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
			const Sd = {};
			var vd = (e = Sd, t) => {
					switch (t.type) {
						case Re.f:
						case H.b: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ce.Zb.Subreddits) && -1 === s.indexOf(Ce.Zb.Users) ? e : {
								...e,
								[r]: !0
							}
						}
						case Re.g:
						case Re.e:
						case H.c:
						case H.a: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ce.Zb.Subreddits) && -1 === s.indexOf(Ce.Zb.Users) ? e : {
								...e,
								[r]: !1
							}
						}
						case Ie.f: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Ie.e:
						case Ie.d: {
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
				jd = Object(v.c)({
					error: gd,
					pending: vd
				});
			const wd = {};
			var Td = (e = wd, t) => {
				switch (t.type) {
					case Re.g: {
						const {
							fetchedToken: r,
							key: s,
							type: n
						} = t.payload;
						if (-1 === n.indexOf(Ce.Zb.Subreddits) && -1 === n.indexOf(Ce.Zb.Users)) return e;
						const a = e[s];
						return {
							...e,
							[s]: {
								...a,
								[r]: !0
							}
						}
					}
					case Ie.e: {
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
			const Dd = {};
			var Pd = (e = Dd, t) => {
				switch (t.type) {
					case Re.g: {
						const {
							key: r,
							listingOrder: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Ce.Zb.Subreddits) && -1 === n.indexOf(Ce.Zb.Users) ? e : {
							...e,
							[r]: e[r].concat(s)
						}
					}
					case H.c: {
						const {
							key: r,
							listingOrder: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Ce.Zb.Subreddits) && -1 === n.indexOf(Ce.Zb.Users) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Ad = {};
			var Cd = (e = Ad, t) => {
					switch (t.type) {
						case Re.g:
						case H.c: {
							const {
								key: r,
								tokens: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Ce.Zb.Subreddits) && -1 === n.indexOf(Ce.Zb.Users) ? e : s.listings ? {
								...e,
								[r]: {
									token: s.listings
								}
							} : Object(xt.a)(e, r)
						}
						case Ie.e: {
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
				Rd = Object(v.c)({
					api: jd,
					identifiers: Pd,
					fetchedTokens: Td,
					loadMore: Cd
				}),
				kd = r("./src/reddit/actions/eventPosts/constants.ts"),
				Nd = r("./src/reddit/actions/otherDiscussions/constants.ts"),
				Ld = r("./src/reddit/actions/pages/topic.ts");
			const xd = {};
			var Ud = (e = xd, t) => {
					switch (t.type) {
						case ge.c:
						case ge.b:
						case we.c:
						case we.b:
						case W.SUBREDDIT_PENDING:
						case W.SUBREDDIT_LOADED:
						case ge.g:
						case ge.f:
						case je.e:
						case je.f:
						case je.i:
						case je.h:
						case ve.s:
						case ve.r:
						case Nd.b:
						case Nd.c:
						case q.PROFILE_POSTS_PENDING:
						case q.PROFILE_POSTS_LOADED:
						case q.MORE_POSTS_PENDING:
						case q.MORE_POSTS_LOADED:
						case K.f:
						case K.e:
						case De.f:
						case De.e:
						case $.j:
						case Ld.TOPIC_DATA_PENDING:
						case Ld.TOPIC_DATA_LOADED:
						case Ld.MORE_POSTS_PENDING:
						case Ld.MORE_POSTS_LOADED:
						case $.i:
						case kd.e:
						case kd.c:
						case kd.d: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: null
							}
						}
						case H.b:
						case H.c:
						case Re.f:
						case Re.g: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ce.Zb.Posts) ? e : {
								...e,
								[r]: null
							}
						}
						case ge.a:
						case we.a:
						case W.SUBREDDIT_FAILED:
						case ge.e:
						case je.g:
						case ve.q:
						case Nd.a:
						case $.h:
						case K.d:
						case De.d:
						case q.PROFILE_POSTS_FAILED:
						case q.MORE_POSTS_FAILED:
						case Ld.TOPIC_DATA_FAILED:
						case Ld.MORE_POSTS_FAILED:
						case kd.b: {
							const {
								key: r,
								error: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case H.a:
						case Re.e: {
							const {
								error: r,
								key: s,
								success: n,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Ce.Zb.Posts) || n && n.posts ? e : {
								...e,
								[s]: r
							}
						}
						default:
							return e
					}
				},
				Md = r("./src/reddit/actions/linkedPosts/constants.ts"),
				Gd = r("./src/reddit/actions/nsfwLinkedPosts/constants.ts"),
				Fd = r("./src/reddit/actions/subreddit/constants.ts");
			const Bd = {};
			var qd = (e = Bd, t) => {
					switch (t.type) {
						case ge.c:
						case we.c:
						case q.PROFILE_POSTS_PENDING:
						case De.f:
						case W.SUBREDDIT_PENDING:
						case ge.g:
						case je.f:
						case je.i:
						case ve.s:
						case Nd.c:
						case K.f:
						case q.MORE_POSTS_PENDING:
						case $.j:
						case Ld.MORE_POSTS_PENDING:
						case kd.e: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case H.b:
						case Re.f: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ce.Zb.Posts) ? e : {
								...e,
								[r]: !0
							}
						}
						case ge.b:
						case ge.a:
						case we.a:
						case we.b:
						case De.d:
						case De.e:
						case q.PROFILE_POSTS_FAILED:
						case q.PROFILE_POSTS_LOADED:
						case W.SUBREDDIT_LOADED:
						case W.SUBREDDIT_FAILED:
						case ge.f:
						case ge.e:
						case Md.b:
						case Md.c:
						case je.e:
						case je.d:
						case je.h:
						case je.g:
						case ve.r:
						case ve.q:
						case K.d:
						case K.e:
						case q.MORE_POSTS_FAILED:
						case q.MORE_POSTS_LOADED:
						case Gd.a:
						case Gd.b:
						case Fd.j:
						case Nd.b:
						case Nd.a:
						case $.i:
						case $.h:
						case Ld.MORE_POSTS_LOADED:
						case Ld.MORE_POSTS_FAILED:
						case kd.c:
						case kd.b:
						case kd.d: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						case Fd.r: {
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
						case H.c:
						case H.a:
						case Re.g:
						case Re.e: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ce.Zb.Posts) ? e : {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				Vd = Object(v.c)({
					error: Ud,
					pending: qd
				});
			const Hd = {};
			var Wd = (e = Hd, t) => {
					switch (t.type) {
						case ge.b:
						case W.SUBREDDIT_LOADED: {
							const {
								key: r,
								correlationId: s
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
				Kd = r("./src/reddit/actions/postList.ts"),
				$d = r("./node_modules/lodash/omitBy.js"),
				Qd = r.n($d);

			function zd(e, t) {
				return t = t.toLowerCase(), Qd()(e, (e, r) => r === t || r.startsWith(`${t}--[`))
			}
			const Jd = {};
			var Xd = (e = Jd, t) => {
				switch (t.type) {
					case Kd.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Kd.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? Ns()(e, [r]) : e
					}
					case W.SUBREDDIT_INVALIDATE_LISTING:
						return zd(e, t.payload);
					default:
						return e
				}
			};
			const Yd = {};
			var Zd = (e = Yd, t) => {
					switch (t.type) {
						case je.e:
						case ge.b:
						case we.b:
						case W.SUBREDDIT_LOADED:
						case q.PROFILE_POSTS_LOADED:
						case Ld.TOPIC_DATA_LOADED: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: {}
							}
						}
						case ge.f:
						case je.h:
						case ve.r:
						case K.e:
						case q.MORE_POSTS_LOADED:
						case $.i:
						case Ld.MORE_POSTS_LOADED: {
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
						case Re.g: {
							const {
								fetchedToken: r,
								key: s,
								type: n
							} = t.payload;
							if (n.indexOf(Ce.Zb.Posts) > -1) {
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
						case W.SUBREDDIT_INVALIDATE_LISTING:
							return zd(e, t.payload);
						default:
							return e
					}
				},
				ei = r("./src/reddit/actions/post.ts");
			const ti = {};
			var ri = (e = ti, t) => {
					switch (t.type) {
						case ge.c:
						case je.f:
						case we.c:
						case q.PROFILE_POSTS_PENDING:
						case W.SUBREDDIT_PENDING:
						case De.f:
						case q.PROFILE_POSTS_PENDING:
						case Ld.TOPIC_DATA_PENDING: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: []
							}
						}
						case Ie.e:
						case Md.c:
						case je.e:
						case Gd.b:
						case ge.b:
						case we.b:
						case W.SUBREDDIT_LOADED:
						case Fd.j:
						case Nd.b:
						case De.e:
						case q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Ld.TOPIC_DATA_LOADED:
						case kd.c: {
							const {
								key: r,
								postIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case Fd.r: {
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
						case ge.f:
						case je.h:
						case ve.r:
						case q.MORE_POSTS_LOADED:
						case K.e:
						case $.i:
						case Ld.MORE_POSTS_LOADED:
						case kd.d: {
							const {
								key: r,
								postIds: s
							} = t.payload;
							return {
								...e,
								[r]: e[r].concat(s)
							}
						}
						case H.c: {
							const {
								key: r,
								postOrder: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Ce.Zb.Posts) ? e : {
								...e,
								[r]: s
							}
						}
						case Re.g: {
							const {
								key: r,
								postOrder: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Ce.Zb.Posts) ? e : {
								...e,
								[r]: e[r].concat(s)
							}
						}
						case ei.o: {
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
						case W.SUBREDDIT_INVALIDATE_LISTING:
							return zd(e, t.payload);
						default:
							return e
					}
				},
				si = r("./src/lib/makeListingKey/index.ts");
			const ni = {};
			var ai = (e = ni, t) => {
				switch (t.type) {
					case W.SUBREDDIT_LOADED: {
						const {
							key: r,
							listingSort: s
						} = t.payload;
						return s && !Object(si.b)(r) ? {
							...e,
							[r]: {
								sort: s,
								hasChanged: !1
							}
						} : e
					}
					case Ar.a:
					case Ar.q: {
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
			const ci = {};
			var oi = (e = ci, t) => {
				switch (t.type) {
					case ge.b:
					case we.b:
					case W.SUBREDDIT_LOADED:
					case De.e:
					case q.PROFILE_POSTS_LOADED:
					case ge.f:
					case je.e:
					case je.h:
					case ve.r:
					case K.e:
					case q.MORE_POSTS_LOADED:
					case $.i:
					case Ld.TOPIC_DATA_LOADED:
					case Ld.MORE_POSTS_LOADED: {
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
						} : Object(xt.a)(e, r)
					}
					case Re.g:
					case H.c: {
						const {
							key: r,
							tokens: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Ce.Zb.Posts) ? e : s.posts ? {
							...e,
							[r]: {
								token: s.posts
							}
						} : Object(xt.a)(e, r)
					}
					case W.SUBREDDIT_INVALIDATE_LISTING:
						return zd(e, t.payload);
					default:
						return e
				}
			};
			const di = {};
			var ii = (e = di, t) => {
					switch (t.type) {
						case kd.c:
						case kd.d: {
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
				ui = Object(v.c)({
					api: Vd,
					correlationIds: Wd,
					endMarkers: Xd,
					fetchedTokens: Zd,
					ids: ri,
					listingSort: ai,
					loadMore: oi,
					pageInfo: ii
				}),
				li = Object(v.c)({
					activeKey: Jo,
					authorOrder: dd,
					communityOrder: _d,
					listingOrder: Rd,
					postOrder: ui
				});
			var pi = (e = null, t) => {
				switch (t.type) {
					case ge.b: {
						const r = t.payload;
						return ba()(r.announcements) ? e : r.announcements || null
					}
					default:
						return e
				}
			};
			var bi = (e = null, t) => {
				switch (t.type) {
					case ge.b: {
						const r = t.payload;
						return ba()(r.featuredLiveThread) ? e : r.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var fi = (e = !1, t) => {
				switch (t.type) {
					case ge.b:
						return !0;
					default:
						return e
				}
			};
			var yi = (e = !1, t) => {
					switch (t.type) {
						case "ANNOUNCEMENTS__SHOULD_SHOW":
							return !0;
						default:
							return e
					}
				},
				mi = Object(v.c)({
					announcements: pi,
					featured: bi,
					isFrontpageLoaded: fi,
					shouldShowAnnouncements: yi
				}),
				Oi = r("./src/reddit/actions/media.ts");
			const hi = {},
				Ei = {};
			var _i = (e = Ei, t) => {
				switch (t.type) {
					case Oi.b: {
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
			const Ii = {};
			var gi = (e = Ii, t) => {
					switch (t.type) {
						case Oi.e: {
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
				Si = Object(v.c)({
					currentSlideIndex: _i,
					isGalleryTileLayout: gi
				});
			var vi = (e = !0, t) => {
				switch (t.type) {
					case Oi.c:
						return t.payload;
					default:
						return e
				}
			};
			var ji = (e = .5, t) => {
					switch (t.type) {
						case Oi.d:
							return t.payload;
						default:
							return e
					}
				},
				wi = Object(v.c)({
					isMuted: vi,
					volume: ji
				}),
				Ti = r("./src/reddit/actions/meta.ts");
			const Di = {
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
				popularGeoFilter: void 0,
				protocol: "",
				region: "",
				sessionReferrerDomain: "",
				shredditExpBucket: "",
				userAgent: "",
				pageloadServerTime: 0
			};
			var Pi = (e = Di, t) => {
					switch (t.type) {
						case Ti.b:
							return t.payload;
						case Ti.a:
							return {
								...e, ...t.payload
							};
						case Ti.e:
							return {
								...e, locale: t.payload
							};
						case Ti.f:
							return {
								...e, popularGeoFilter: t.payload
							};
						case Ti.c:
							return {
								...e, platform: {
									...e.platform,
									pwa: !0
								}
							};
						case Ti.d:
							return {
								...e, platform: {
									...e.platform,
									pwa: !1
								}
							};
						default:
							return e
					}
				},
				Ai = r("./src/reddit/actions/subredditModeration/constants.ts");
			const Ci = {};
			var Ri = (e = Ci, t) => {
				switch (t.type) {
					case W.SUBREDDIT_LOADED:
					case F.b:
					case F.f:
					case Te.PAGE_LOADED: {
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
					case G.i:
					case G.f:
					case G.m:
					case G.p:
					case G.v: {
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
					case $.f:
					case je.e:
					case G.k: {
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
					case Ai.Z: {
						const {
							subredditId: r
						} = t.payload;
						return Object(xt.a)(e, r)
					}
					case Ai.S: {
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
			var ki = (e = null, t) => {
				switch (t.type) {
					case je.b:
					case je.k:
						return null;
					case je.a:
					case je.j:
						return t.payload;
					default:
						return e
				}
			};
			var Ni = (e = !1, t) => {
					switch (t.type) {
						case je.b:
						case je.k:
							return !0;
						case je.c:
						case je.a:
						case je.l:
						case je.j:
							return !1;
						default:
							return e
					}
				},
				Li = Object(v.c)({
					error: ki,
					pending: Ni
				});
			const xi = [];
			var Ui = (e = xi, t) => {
					switch (t.type) {
						case je.e: {
							const r = t.payload,
								{
									filteredSubreddits: s
								} = r;
							return s || e
						}
						case je.j: {
							const r = t.payload;
							return [...e, r]
						}
						case je.k:
						case je.a: {
							const r = t.payload;
							return e.filter(e => e !== r)
						}
						default:
							return e
					}
				},
				Mi = Object(v.c)({
					api: Li,
					names: Ui
				}),
				Gi = Object(v.c)({
					filteredSubreddits: Mi
				}),
				Fi = r("./src/reddit/actions/modMode.ts");
			var Bi = (e = !0, t) => {
				switch (t.type) {
					case Fi.a:
						return t.payload.enabled;
					default:
						return e
				}
			};
			const qi = {};
			var Vi = (e = qi, t) => {
				switch (t.type) {
					case x.x: {
						const {
							moreCommentsId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case x.w: {
						const {
							moreCommentsItem: r
						} = t.payload;
						return {
							...e,
							[r.id]: null
						}
					}
					case x.v: {
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
			const Hi = {};
			var Wi = (e = Hi, t) => {
					switch (t.type) {
						case x.x: {
							const {
								moreCommentsId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case x.v:
						case x.w: {
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
				Ki = Object(v.c)({
					error: Vi,
					pending: Wi
				});
			const $i = {};
			var Qi = (e = $i, t) => {
					switch (t.type) {
						case x.w:
						case F.b:
						case F.f:
							return {
								...e, ...t.payload.moreComments
							};
						default:
							return e
					}
				},
				zi = Object(v.c)({
					api: Ki,
					models: Qi
				});
			var Ji = (e = null, t) => {
				switch (t.type) {
					case ve.b:
					case ve.c:
						return null;
					case ve.a:
						return t.payload;
					default:
						return e
				}
			};
			var Xi = (e = !1, t) => {
				switch (t.type) {
					case ve.a:
					case ve.c:
						return !0;
					case ve.b:
						return !1;
					default:
						return e
				}
			};
			var Yi = (e = null, t) => {
					switch (t.type) {
						case we.b:
						case ve.a:
						case ve.c:
							return null;
						case ve.b: {
							const {
								name: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				Zi = Object(v.c)({
					error: Ji,
					fetched: Xi,
					pending: Yi
				});
			var eu = (e = null, t) => {
				switch (t.type) {
					case ve.f:
					case ve.g:
						return null;
					case ve.e:
						return t.payload;
					default:
						return e
				}
			};
			var tu = (e = !1, t) => {
				switch (t.type) {
					case ve.e:
					case ve.g:
						return !0;
					case ve.f:
						return !1;
					default:
						return e
				}
			};
			var ru = (e = !1, t) => {
					switch (t.type) {
						case ve.e:
						case ve.g:
							return !1;
						case ve.f:
							return !0;
						default:
							return e
					}
				},
				su = Object(v.c)({
					error: eu,
					fetched: tu,
					pending: ru
				});
			var nu = (e = null, t) => {
				switch (t.type) {
					case ve.i:
					case ve.j:
						return null;
					case ve.h:
						return t.payload;
					default:
						return e
				}
			};
			var au = (e = !1, t) => {
				switch (t.type) {
					case ve.h:
					case ve.j:
						return !0;
					case ve.i:
						return !1;
					default:
						return e
				}
			};
			var cu = (e = !1, t) => {
					switch (t.type) {
						case ve.h:
						case ve.j:
							return !1;
						case ve.i:
							return !0;
						default:
							return e
					}
				},
				ou = Object(v.c)({
					error: nu,
					fetched: au,
					pending: cu
				});
			var du = (e = null, t) => {
				switch (t.type) {
					case ve.l:
					case ve.m:
						return null;
					case ve.k:
						return t.payload;
					default:
						return e
				}
			};
			var iu = (e = !1, t) => {
				switch (t.type) {
					case ve.k:
					case ve.m:
						return !0;
					case ve.l:
						return !1;
					default:
						return e
				}
			};
			var uu = (e = !1, t) => {
					switch (t.type) {
						case ve.k:
						case ve.m:
							return !1;
						case ve.l:
							return !0;
						default:
							return e
					}
				},
				lu = Object(v.c)({
					error: du,
					fetched: iu,
					pending: uu
				});
			var pu = (e = null, t) => {
				switch (t.type) {
					case ve.o:
					case ve.p:
						return null;
					case ve.n:
						return t.payload;
					default:
						return e
				}
			};
			var bu = (e = !1, t) => {
				switch (t.type) {
					case ve.n:
					case ve.p:
						return !0;
					case ve.o:
						return !1;
					default:
						return e
				}
			};
			var fu = (e = !1, t) => {
					switch (t.type) {
						case ve.n:
						case ve.p:
							return !1;
						case ve.o:
							return !0;
						default:
							return e
					}
				},
				yu = Object(v.c)({
					error: pu,
					fetched: bu,
					pending: fu
				});
			var mu = (e = !1, t) => {
				switch (t.type) {
					case ve.t:
						return !1;
					case ve.u:
						return !0;
					default:
						return e
				}
			};
			var Ou = (e = !1, t) => {
					switch (t.type) {
						case ve.t:
							return !0;
						case ve.u:
							return !1;
						default:
							return e
					}
				},
				hu = Object(v.c)({
					fetched: mu,
					pending: Ou
				});
			var Eu = (e = null, t) => {
				switch (t.type) {
					case ve.A:
					case ve.B:
						return null;
					case ve.z:
						return t.payload;
					default:
						return e
				}
			};
			var _u = (e = !1, t) => {
				switch (t.type) {
					case ve.A:
					case ve.z:
						return !1;
					case ve.B:
						return !0;
					default:
						return e
				}
			};
			var Iu = (e = !0, t) => {
					switch (t.type) {
						case ve.A:
							return !0;
						case ve.B:
						case ve.z:
							return !1;
						default:
							return e
					}
				},
				gu = Object(v.c)({
					error: Eu,
					fetched: _u,
					pending: Iu
				});
			var Su = (e = null, t) => {
				switch (t.type) {
					case ve.w:
					case ve.x:
						return null;
					case ve.v:
						return t.payload;
					default:
						return e
				}
			};
			var vu = (e = !1, t) => {
				switch (t.type) {
					case ve.v:
					case ve.x:
						return !0;
					case ve.w:
						return !1;
					default:
						return e
				}
			};
			var ju = (e = null, t) => {
					switch (t.type) {
						case ve.v:
						case ve.x:
							return null;
						case ve.w:
							const {
								id: r
							} = t.payload;
							return r;
						default:
							return e
					}
				},
				wu = Object(v.c)({
					error: Su,
					fetched: vu,
					pending: ju
				}),
				Tu = Object(v.c)({
					addSubreddit: Zi,
					create: su,
					deleteMulti: ou,
					duplicate: lu,
					edit: yu,
					forUser: hu,
					recommendations: gu,
					removeSubreddit: wu
				}),
				Du = r("./node_modules/lodash/isEqual.js"),
				Pu = r.n(Du),
				Au = r("./node_modules/lodash/union.js"),
				Cu = r.n(Au);

			function Ru(e, t, r) {
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
			var ku = r("./src/reddit/actions/profile/constants.ts");
			const Nu = {};
			var Lu = (e = Nu, t) => {
					switch (t.type) {
						case we.b:
						case ve.r:
						case ve.u:
						case ku.h: {
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
								a[t] = Cu()(n, r).sort((e, t) => c[e].displayText.toLowerCase() > c[t].displayText.toLowerCase() ? 1 : -1)
							}
							return Pu()(e, a) ? e : a
						}
						case ve.g:
						case ve.m: {
							const {
								userId: r,
								multireddit: s
							} = t.payload, n = e[r] ? e[r].slice() : [], a = Ru(n, s.url, (e, t) => e > t ? 1 : -1);
							return n.splice(a, 0, s.url), {
								...e,
								[r]: n
							}
						}
						case ve.j: {
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
				xu = r("./src/reddit/actions/subscription/constants.ts"),
				Uu = r("./src/reddit/models/Multireddit/index.ts");
			const Mu = {};
			var Gu = (e = Mu, t) => {
				switch (t.type) {
					case we.b:
					case ve.r:
					case ve.u:
					case ku.h: {
						let r = {};
						for (const s in t.payload.multireddits) {
							const n = {
									...t.payload.multireddits[s]
								},
								a = e[s];
							a && !Object(Uu.g)(n) && (n.subredditIds = a.subredditIds, n.profileIds = a.profileIds), s in e && Pu()(e[n.url], n) || (r = {
								...r,
								[s]: n
							})
						}
						return ba()(r) ? e : {
							...e,
							...r
						}
					}
					case ve.g:
					case ve.m: {
						const {
							multireddit: r
						} = t.payload;
						return {
							...e,
							[r.url]: r
						}
					}
					case ve.j: {
						const r = t.payload,
							s = {
								...e
							};
						return delete s[r], s
					}
					case ve.p: {
						const r = t.payload;
						return {
							...e,
							[r.url]: r
						}
					}
					case ve.x: {
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
					case xu.d: {
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
					case xu.e: {
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
					case ve.c: {
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
			const Fu = {};
			var Bu = (e = Fu, t) => {
					switch (t.type) {
						case ve.B: {
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
				qu = Object(v.c)({
					api: Tu,
					byUserId: Lu,
					models: Gu,
					recommendations: Bu
				}),
				Vu = r("./src/reddit/actions/notificationBanner.ts");
			var Hu = (e = null, t) => {
					switch (t.type) {
						case Vu.b:
							return t.payload.notificationBannerId;
						case Vu.a:
							return null;
						default:
							return e
					}
				},
				Wu = r("./src/reddit/actions/notificationsInbox/constants.ts");
			var Ku = (e = !1, t) => {
				switch (t.type) {
					case Wu.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Wu.e:
					case Wu.b:
						return !1;
					default:
						return e
				}
			};
			var $u = (e = !1, t) => {
					switch (t.type) {
						case Wu.e:
							return !0;
						case Wu.a:
						case Wu.b:
							return !1;
						default:
							return e
					}
				},
				Qu = Object(v.c)({
					error: Ku,
					pending: $u
				});
			var zu = (e = null, t) => {
				switch (t.type) {
					case Wu.g:
						return t.payload && t.payload.index || e;
					default:
						return e
				}
			};
			var Ju = (e = null, t) => {
				switch (t.type) {
					case Wu.c:
						return t.payload && t.payload.now;
					default:
						return e
				}
			};
			const Xu = [];
			var Yu = (e = Xu, t) => {
				switch (t.type) {
					case Wu.b: {
						const r = t.payload && t.payload.nodes;
						return [...e, ...r]
					}
					case Wu.f: {
						const r = t.payload && t.payload.id;
						return e.filter(e => (e && e.id) !== r)
					}
					case Wu.d: {
						const r = t.payload && t.payload.id,
							s = t.payload && t.payload.now,
							n = e.findIndex(e => e.id === r);
						return -1 === n ? e : [...e.slice(0, n), {
							...e[n],
							readAt: s
						}, ...e.slice(n + 1)]
					}
					case Wu.c: {
						const r = t.payload && t.payload.now;
						return e.map(e => e.readAt ? e : {
							...e,
							readAt: r
						})
					}
					default:
						return e
				}
			};
			var Zu = (e = null, t) => {
					switch (t.type) {
						case Wu.b:
							return t.payload && t.payload.pageInfo;
						default:
							return e
					}
				},
				el = Object(v.c)({
					api: Qu,
					earlierDividerIndex: zu,
					notifications: Yu,
					pageInfo: Zu,
					markAllAsReadTimestamp: Ju
				}),
				tl = r("./src/reddit/actions/nps.ts");
			const rl = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var sl = (e = rl, t) => {
					switch (t.type) {
						case tl.c:
							return {
								...rl, pending: !0
							};
						case tl.a:
							return rl;
						case tl.b: {
							const {
								dest: e
							} = t.payload;
							return {
								...rl,
								success: !0,
								dest: e
							}
						}
						default:
							return e
					}
				},
				nl = r("./src/reddit/actions/accountGender/constants.ts"),
				al = r("./src/reddit/actions/onboarding/constants.ts");
			const cl = {
				success: !1,
				failure: !1
			};
			var ol = (e = cl, t) => {
					switch (t.type) {
						case nl.b:
							return {
								...cl, success: !0
							};
						case nl.c:
							return {
								...cl, failure: !0
							};
						case al.a:
							return {
								...cl
							};
						default:
							return e
					}
				},
				dl = Object(v.c)({
					genderUpdateState: ol
				});
			const il = e => {
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
			const ul = e => {
					const t = {};
					for (const r of e) t[r.experimentName.toLowerCase()] = il(r);
					return t
				},
				ll = {};
			var pl = (e = ll, t) => {
				switch (t.type) {
					case tc.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, r = e ? e.experiments : [];
						return ul(r)
					}
					default:
						return e
				}
			};
			var bl = Object(v.c)({
					byName: pl,
					canonicalUrl: (e = null, t) => {
						switch (t.type) {
							case tc.a: {
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
				fl = Object(v.c)({
					experiments: bl
				}),
				yl = r("./node_modules/history/esm/history.js"),
				ml = r("./src/reddit/constants/history.ts");
			const Ol = {
				allowNavigationCallback: null,
				currentPage: null,
				lastPage: null,
				referrers: {},
				sessionReferrer: null,
				metas: {}
			};
			var hl = (e = Ol, t) => {
				switch (t.type) {
					case u.b: {
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
						const o = Object(yl.e)(a),
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
					case u.f: {
						const r = t.payload,
							{
								key: s,
								meta: n
							} = r;
						return {
							...e,
							metas: {
								...e.metas,
								[s]: n
							}
						}
					}
					case u.g: {
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
					case F.b:
					case F.f:
						return !e.currentPage || t.payload.postMeta, e;
					case u.c:
						return e;
					case u.e: {
						const {
							allowNavigationCallback: r
						} = t.payload;
						return {
							...e,
							allowNavigationCallback: r
						}
					}
					case u.d:
						return {
							...e, allowNavigationCallback: null
						};
					case ge.b:
					case u.a:
					case W.SUBREDDIT_LOADED: {
						const {
							correlationId: r
						} = t.payload;
						return e.currentPage ? {
							...e,
							currentPage: {
								...e.currentPage,
								locationState: {
									...e.currentPage.locationState,
									[ml.b.FeedCorrelationId]: r
								}
							}
						} : e
					}
					default:
						return e
				}
			};
			const El = {};
			var _l = (e = El, t) => {
				switch (t.type) {
					case d.k: {
						const {
							pollId: r
						} = t.payload.pollResults, {
							[r]: s,
							...n
						} = e;
						return n
					}
					case d.j: {
						const {
							pollId: r
						} = t.payload, {
							[r]: s,
							...n
						} = e;
						return n
					}
					case d.i: {
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
			const Il = {};
			var gl = (e = Il, t) => {
					switch (t.type) {
						case d.k: {
							const {
								pollId: r
							} = t.payload.pollResults;
							return {
								...e,
								[r]: !1
							}
						}
						case d.i: {
							const {
								pollId: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						case d.j: {
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
				Sl = Object(v.c)({
					error: _l,
					pending: gl
				}),
				vl = Object(v.c)({
					voting: Sl
				}),
				jl = r("./src/reddit/reducers/posts/models/helpers.ts"),
				wl = r("./src/reddit/actions/economics/predictions/constants.ts");
			var Tl = r("./src/reddit/helpers/graphql/normalizePoll/index.ts"),
				Dl = r("./src/reddit/models/Prediction/index.ts");
			const Pl = {};
			var Al = (e = Pl, t) => {
				switch (t.type) {
					case d.h: {
						const {
							poll: r
						} = t.payload;
						return {
							...e,
							[r.id]: r
						}
					}
					case ge.b:
					case W.SUBREDDIT_LOADED:
					case $.i:
					case ge.f:
					case F.b:
					case F.f:
					case wl.k: {
						const {
							governance: r
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
						const s = At()(t.payload.posts, Object(jl.h)([jl.o])),
							n = {};
						return Object.keys(s).forEach(e => {
							var t, r;
							const a = s[e];
							if (a.pollData && (n[e] = (e => {
									if (!e.pollData) return null;
									const {
										id: t,
										authorId: r,
										belongsTo: s,
										created: n,
										title: a,
										isNSFW: c,
										isSpoiler: o,
										pollData: {
											isPrediction: d,
											options: i,
											resolvedOptionId: u,
											totalStakeAmount: l,
											totalVoteCount: p,
											tournamentId: b,
											userSelection: f,
											userWonAmount: y,
											voteUpdatesRemained: m,
											votingEndTimestamp: O,
											predictionStatus: h
										}
									} = e;
									if (d) {
										return {
											id: t,
											createdAt: n,
											creatorId: r,
											subredditId: s.id,
											endsAt: O,
											voteUpdatesRemained: m,
											postId: t,
											title: a,
											options: i,
											totalVoters: p,
											type: Dn.a.GA,
											isNSFW: c,
											isPrediction: d,
											isSpoiler: o,
											totalStakeAmount: l || 0,
											tournamentId: b,
											userSelection: f,
											userWonAmount: y,
											resolvedOptionId: u,
											predictionStatus: h,
											totalVoteCount: p
										}
									}
									return {
										id: t,
										createdAt: n,
										creatorId: r,
										subredditId: s.id,
										endsAt: O,
										postId: t,
										options: i,
										totalVoters: p,
										type: Dn.a.GA,
										isPrediction: d,
										userSelection: f
									}
								})(a)), null === (r = null === (t = a.predictionTournament) || void 0 === t ? void 0 : t.predictions) || void 0 === r ? void 0 : r.length) {
								const {
									tournamentId: e,
									predictions: t
								} = a.predictionTournament;
								t.forEach(t => {
									n[t.id] = function({
										wonAmount: e,
										id: t,
										title: r,
										totalVoteCount: s,
										totalStakeAmount: n,
										status: a,
										selectedOptionId: c,
										...o
									}, {
										tournamentId: d,
										subredditId: i,
										creatorId: u
									}) {
										return {
											id: t,
											isPrediction: !0,
											predictionStatus: a,
											title: r || "",
											creatorId: u,
											tournamentId: d,
											subredditId: i,
											userSelection: c,
											userWonAmount: e,
											postId: t,
											totalStakeAmount: n || 0,
											totalVoteCount: s || 0,
											totalVoters: s || 0,
											...o
										}
									}(t, {
										tournamentId: e,
										creatorId: a.author,
										createdAt: a.created,
										subredditId: a.belongsTo.id
									})
								})
							}
						}), {
							...e,
							...n
						}
					}
					case wl.m:
					case wl.l: {
						const {
							pollId: r,
							prediction: {
								options: s,
								selectedOptionId: n,
								totalVoteCount: a,
								...c
							}
						} = t.payload;
						return {
							...e,
							[r]: {
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
						}
					}
					case wl.b: {
						const {
							postId: r,
							prediction: s
						} = t.payload;
						return e[r] && Object(Dl.c)(e[r]) ? {
							...e,
							[r]: {
								...e[r],
								...Object(Tl.b)(s)
							}
						} : e
					}
					default:
						return e
				}
			};
			const Cl = {};
			var Rl = (e = Cl, t) => {
				switch (t.type) {
					case d.k: {
						const {
							[Dn.b.ByVoters]: r, pollId: s
						} = t.payload.pollResults;
						return {
							...e,
							[s]: r
						}
					}
					case d.e: {
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
					case ge.b:
					case W.SUBREDDIT_LOADED:
					case $.i:
					case ge.f:
					case F.b:
					case F.f: {
						const {
							governance: r,
							posts: s
						} = t.payload;
						if (r) {
							const t = Object.keys(r).reduce((e, t) => {
								const s = r[t],
									{
										[Dn.b.ByVoters]: n,
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
							var r;
							if (!(null === (r = s[t]) || void 0 === r ? void 0 : r.pollData)) return e;
							const n = (e => {
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
							return n ? (e[t] = n, e) : e
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
			const kl = {};
			var Nl = (e = kl, t) => {
					switch (t.type) {
						case d.k: {
							const {
								[Dn.b.ByVotingPower]: r, pollId: s
							} = t.payload.pollResults;
							return {
								...e,
								[s]: r
							}
						}
						case ge.b:
						case W.SUBREDDIT_LOADED:
						case $.i:
						case ge.f:
						case F.b:
						case F.f: {
							const {
								governance: r
							} = t.payload;
							if (r) {
								const t = Object.keys(r).reduce((e, t) => {
									const s = r[t],
										{
											[Dn.b.ByVotingPower]: n,
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
				Ll = Object(v.c)({
					byVoters: Rl,
					byVotingPower: Nl
				});
			const xl = {};
			var Ul = (e = xl, t) => {
					switch (t.type) {
						case d.k: {
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
				Ml = Object(v.c)({
					api: vl,
					models: Al,
					results: Ll,
					rewards: Ul
				});
			const Gl = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var Fl = (e = Gl, t) => {
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
			const Bl = {
				reorderPending: !1,
				updateDescriptionPending: !1,
				updateLayoutPending: !1
			};
			var ql = (e = Bl, t) => {
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
				Vl = Object(v.c)({
					error: Fl,
					pending: ql
				}),
				Hl = r("./src/reddit/helpers/path/index.ts");
			const Wl = {},
				Kl = e => {
					const {
						protocol: t,
						domain: r
					} = e;
					return e => {
						const s = Object(Hl.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${r}${s}`
						}
					}
				};
			var $l = (e = Wl, t) => {
				switch (t.type) {
					case Te.PAGE_LOADED:
					case je.e:
					case je.h:
					case B.b:
					case B.e:
					case De.e:
					case De.b:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case W.SUBREDDIT_LOADED:
					case ge.b:
					case we.b:
					case W.SUBREDDIT_LOADED:
					case F.b:
					case F.f:
					case ei.j:
					case ve.r:
					case ge.f:
					case K.e:
					case "RECOMMENDED_POSTS_LOADED":
					case $.i:
					case Re.g:
					case Pe.b:
					case H.c:
					case Gr.f: {
						const {
							collections: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						let n = r;
						if (s) {
							const e = Kl(s);
							n = At()(r, e)
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
							a = Kl(s)(r)
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
			const Ql = {};
			var zl = (e = Ql, t) => {
					switch (t.type) {
						case Te.PAGE_LOADED:
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
				Jl = Object(v.c)({
					models: $l,
					subredditToIds: zl,
					api: Vl
				}),
				Xl = r("./src/reddit/actions/postFlair.ts"),
				Yl = r("./src/reddit/models/Flair/index.ts");
			const Zl = {},
				ep = {
					displaySettings: {
						isEnabled: !1,
						position: Yl.b.Left
					},
					permissions: {
						canAssignOwn: !1
					},
					templateIds: [],
					templates: {}
				},
				tp = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					return 0 === r.length ? e : r.reduce((e, r) => (e[r] = {
						...ep,
						...e[r],
						...t[r]
					}, e), {
						...e
					})
				};
			var rp = (e = Zl, t) => {
				switch (t.type) {
					case Te.PAGE_LOADED:
					case ge.f:
					case je.e:
					case je.h:
					case ve.r:
					case Nd.b:
					case F.b:
					case F.f:
					case ge.b:
					case we.b:
					case H.c:
					case W.SUBREDDIT_LOADED:
					case B.b:
					case B.e:
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case K.e:
					case Pe.b:
					case Pe.b:
					case De.b:
					case De.e:
					case q.MORE_POSTS_LOADED:
					case q.PROFILE_POSTS_LOADED:
					case "RECOMMENDED_POSTS_LOADED":
					case Re.g:
					case Re.g:
					case $.i:
						return tp(e, t.payload.postFlair);
					case Xl.c: {
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
					case Xl.a: {
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
					case Xl.f: {
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
					case Xl.b: {
						const {
							subredditId: r,
							templateId: s
						} = t.payload, n = e[r], {
							templates: a,
							templateIds: c
						} = n, o = Ns()(a, s), d = c.filter(e => e !== s);
						return {
							...e,
							[r]: {
								...n,
								templates: o,
								templateIds: d
							}
						}
					}
					case Xl.e:
					case Xl.d: {
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
					case G.i:
					case G.f:
					case G.m:
					case G.p:
					case G.v: {
						const {
							response: r
						} = t.payload;
						return tp(e, r.postFlair)
					}
					default:
						return e
				}
			};
			var sp = (e = null, t) => {
					switch (t.type) {
						case ei.c:
							return t.payload;
						default:
							return e
					}
				},
				np = r("./src/reddit/actions/embedAndImage.ts");
			const ap = {};
			var cp = (e = ap, t) => {
					switch (t.type) {
						case np.b: {
							const {
								postId: r
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: !1
							} : e
						}
						case np.a: {
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
				op = Object(v.c)({
					loadable: cp
				});
			const dp = {};
			var ip = (e = dp, t) => {
				switch (t.type) {
					case ei.d: {
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
			var up = (e = null, t) => {
				switch (t.type) {
					case ei.e: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const lp = [];
			var pp = (e = lp, t) => {
				switch (t.type) {
					case ei.n:
						return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
					case ei.b:
						return [...e.filter(e => e.expiresAt > Date.now())];
					case ei.f:
						return [...t.payload.posts];
					default:
						return e
				}
			};
			const bp = {};
			var fp = (e = bp, t) => {
				switch (t.type) {
					case je.e:
					case je.h:
					case ge.b:
					case W.SUBREDDIT_LOADED:
					case ge.f:
					case K.e:
					case "RECOMMENDED_POSTS_LOADED":
					case $.i:
					case Re.g:
					case H.c:
						return L()({
							...e
						}, t.payload.postInstances, (e, t) => {
							if (e) return e.concat(t)
						});
					default:
						return e
				}
			};
			var yp = (e = null, t) => {
					switch (t.type) {
						case ei.a:
							return t.payload;
						default:
							return e
					}
				},
				mp = r("./src/reddit/actions/isTrackingCrossposts.ts");
			const Op = {};
			var hp = (e = Op, t) => {
				switch (t.type) {
					case mp.a: {
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
			const Ep = {};
			var _p = (e = Ep, t) => {
					switch (t.type) {
						case d.h: {
							const {
								poll: r
							} = t.payload;
							return {
								...e,
								[r.postId]: r.id
							}
						}
						case ge.b:
						case W.SUBREDDIT_LOADED:
						case $.i:
						case ge.f:
						case F.b:
						case F.f:
						case wl.k: {
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
							const n = Object.keys(s).reduce((e, t) => {
								var r, n;
								const a = s[t];
								if ((null == a ? void 0 : a.pollData) && (e[t] = t), null === (n = null === (r = a.predictionTournament) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.length) {
									const {
										predictions: t
									} = a.predictionTournament;
									t.forEach(t => {
										e[t.id] = t.id
									})
								}
								return e
							}, {});
							return {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				Ip = r("./src/reddit/actions/bulkActions/constants.ts"),
				gp = r("./src/reddit/actions/constants.ts"),
				Sp = r("./src/reddit/actions/flairManagement/constants.ts"),
				vp = r("./src/reddit/actions/googleQASchema/constants.ts"),
				jp = r("./src/reddit/actions/imageOCRAltText/constants.ts"),
				wp = r("./src/reddit/actions/subredditTopContent.ts"),
				Tp = r("./src/reddit/helpers/isPost.ts"),
				Dp = r("./node_modules/lodash/pickBy.js"),
				Pp = r.n(Dp);

			function Ap(e, t) {
				const r = Pp()(t, (t, r = "") => !e[r] || !Pu()(e[r], t));
				return Object.keys(r).length > 0 ? {
					...e,
					...r
				} : e
			}
			var Cp = r("./src/reddit/models/Gold/Gild/index.tsx"),
				Rp = r("./src/reddit/models/Media/index.ts"),
				kp = r("./src/reddit/models/ModQueue/index.ts"),
				Np = r("./src/reddit/models/Post/index.ts"),
				Lp = r("./src/reddit/models/Vote/index.ts"),
				xp = r("./src/reddit/actions/subredditDuplicates.ts");
			const Up = {};
			var Mp = (e = Up, t) => {
				switch (t.type) {
					case u.b:
						if (Ms(t) === (Ce.Mb.COMMENTS || Ce.Mb.DUPLICATES)) {
							const r = Gs(t),
								s = (e => {
									if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
								})(t);
							if (r && r.instanceId && s && s.partialPostId) {
								const t = r.instanceId,
									n = Object(Np.t)(s.partialPostId);
								if (e[n] && e[t]) return {
									...e,
									[n]: Object(jl.c)(e[n], e[t])
								}
							}
						}
						return e;
					case F.b:
					case F.f: {
						const r = Object(jl.g)(t.payload.meta);
						return {
							...e,
							...At()(t.payload.posts, Object(jl.h)([r, jl.d, jl.m, jl.n, jl.o, Object(jl.a)(e), Object(jl.b)(e), Object(jl.j)(e), Object(jl.k)(e), Object(jl.i)(e)]))
						}
					}
					case ei.j:
						return Ap(e, t.payload);
					case xp.a:
						return Ap(e, t.payload.posts);
					case Te.PAGE_LOADED:
					case Md.c:
					case Gd.b:
					case je.e:
					case je.h:
					case B.b:
					case B.e:
					case De.e:
					case De.b:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case W.SUBREDDIT_LOADED:
					case ge.b:
					case we.b:
					case Nd.b:
					case ve.r:
					case ge.f:
					case K.e:
					case "RECOMMENDED_POSTS_LOADED":
					case Fd.j:
					case $.i:
					case Pe.b:
					case Ld.TOPIC_DATA_LOADED:
					case Ld.MORE_POSTS_LOADED:
					case kd.c:
					case kd.d:
					case wl.k: {
						const r = Object(jl.g)(t.payload.meta);
						return {
							...e,
							...At()(t.payload.posts, Object(jl.h)([r, jl.d, jl.m, jl.n, jl.o, Object(jl.l)(e), Object(jl.j)(e), Object(jl.i)(e)]))
						}
					}
					case Fd.r: {
						if (!t.payload || !t.payload.length) return e;
						const r = {};
						for (const s of t.payload) {
							const t = s,
								n = Object(jl.g)(t.meta);
							Object.assign(r, At()(t.posts, Object(jl.h)([n, jl.d, jl.m, jl.n, Object(jl.l)(e), Object(jl.j)(e), Object(jl.i)(e)])))
						}
						return {
							...e,
							...r
						}
					}
					case Nd.b: {
						const r = Object(jl.g)(t.payload.meta),
							s = e[t.payload.postId];
						return {
							...e,
							...At()(t.payload.posts, Object(jl.h)([r, jl.d, jl.m, jl.n, Object(jl.l)(e), Object(jl.j)(e), Object(jl.i)(e)])),
							[t.payload.postId]: {
								...s,
								numDuplicates: t.payload.count
							}
						}
					}
					case Ie.e:
					case Re.g:
					case H.c: {
						const r = Object(jl.g)(t.payload.meta),
							s = At()(t.payload.posts, Object(jl.h)([r, jl.m, jl.d, jl.n, Object(jl.i)(e)]));
						return L()({
							...e
						}, s, (e, t) => ({
							...t,
							...e
						}))
					}
					case ei.k: {
						const r = t.payload;
						return L()({
							...e
						}, r, (e, t) => ({
							...e,
							...t
						}))
					}
					case gp.a: {
						const {
							id: r,
							vote: s
						} = t.payload, n = e[r];
						return n ? {
							...e,
							[r]: Object(Lp.c)(n, s)
						} : e
					}
					case U.b:
					case x.J: {
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
					case ei.h: {
						const {
							postId: r,
							delta: s
						} = t.payload, n = e[r];
						if (n) {
							let t = n.numComments + s;
							return t < 0 && (t = 0), {
								...e,
								[r]: {
									...n,
									numComments: t
								}
							}
						}
						return e
					}
					case ei.i: {
						const {
							postId: r,
							delta: s
						} = t.payload, n = e[r];
						if (n) {
							let t = n.score + s;
							return t < 0 && (t = 0), {
								...e,
								[r]: {
									...n,
									score: t
								}
							}
						}
						return e
					}
					case x.A: {
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
					case ee.tb: {
						const {
							topAwardedPosts: r
						} = t.payload;
						return {
							...e,
							...r.reduce((e, t) => (e[t.post.id] = Object(jl.h)([jl.m])(Object(Qs.f)(t.post)), e), {})
						}
					}
					case ee.s: {
						const {
							id: r,
							awardings: s,
							gilder: n,
							treatmentTags: a
						} = t.payload, c = e[r];
						return c ? {
							...e,
							[r]: {
								...Object(Cp.a)(c, s, n),
								treatmentTags: a
							}
						} : e
					}
					case ee.D: {
						const {
							awardId: r,
							thingId: s
						} = t.payload, n = e[s];
						return n ? {
							...e,
							[s]: Object(Cp.b)(n, r)
						} : e
					}
					case Ai.n: {
						const {
							posts: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case G.i:
					case G.f:
					case G.m:
					case G.p:
					case G.v: {
						const {
							response: r
						} = t.payload, {
							posts: s
						} = r;
						return {
							...e,
							...At()(s, Object(jl.h)([jl.m, jl.n]))
						}
					}
					case Ip.b:
					case G.s: {
						const {
							operation: r,
							ids: s,
							username: n,
							options: a
						} = t.payload, c = s.filter(e => Object(Tp.a)(e)), o = Object(kp.d)(e, r, c, n, a);
						return L()({
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
					case kd.f: {
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
					case kd.a: {
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
					case qc.g: {
						const r = t.payload.subredditTopContent;
						return r && r.posts && Object.keys(r.posts) ? {
							...At()(r.posts, Object(jl.h)([jl.m, jl.n])),
							...e
						} : e
					}
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case wp.b:
						return {
							...At()(t.payload.posts, Object(jl.h)([jl.m, jl.n])), ...e
						};
					case ei.m: {
						const {
							postId: r,
							richtextContent: s
						} = t.payload, n = e[r];
						return n && n.media && Object(Rp.J)(n.media) ? {
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
					case Sp.a: {
						const r = t.payload;
						return {
							...e,
							[r.id]: r
						}
					}
					case Sp.b: {
						const r = t.payload;
						return Object(xt.a)(e, r)
					}
					case m.o: {
						const r = t.payload.reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							...r
						}
					}
					case jp.b: {
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
					case wl.p: {
						const {
							tournamentPostId: r,
							predictionId: s,
							selectedOptionId: n
						} = t.payload;
						if (!e[s] && !e[r]) return e;
						const a = {
							...e
						};
						return a[s] && (a[s] = Object(jl.e)({
							post: e[s],
							selectedOptionId: n
						})), a[r] && (a[r] = Object(jl.f)({
							post: e[r],
							selectedOptionId: n,
							predictionId: s
						})), a
					}
					case wl.b: {
						const {
							postId: r,
							prediction: s
						} = t.payload;
						return {
							...e,
							[r]: Object(jl.p)(e[r], Object(Tl.a)(s))
						}
					}
					case jp.a:
						return {
							...e
						};
					case vp.b: {
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
					case vp.a:
						return {
							...e
						};
					case Md.a: {
						const {
							postId: r,
							isEligibleForLinkedPosts: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								isEligibleForLinkedPosts: s
							}
						}
					}
					case m.t:
					case m.q: {
						const r = {};
						for (const e in t.payload) {
							const s = t.payload[e];
							r[s.id] = s
						}
						return {
							...e,
							...r
						}
					}
					default:
						return e
				}
			};
			var Gp = (e = null, t) => {
					switch (t.type) {
						case ei.g:
							return t.payload;
						default:
							return e
					}
				},
				Fp = r("./src/reddit/actions/postLevelCrowdControl.ts");
			const Bp = {};
			var qp = (e = Bp, t) => {
				switch (t.type) {
					case Fp.a: {
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
			const Vp = [];
			var Hp = (e = Vp, t) => {
					switch (t.type) {
						case ei.l: {
							const {
								postIds: e
							} = t.payload;
							return e
						}
						case ge.b:
						case W.SUBREDDIT_LOADED: {
							const {
								recentPostIds: r
							} = t.payload;
							return r && r.length ? r : e
						}
						default:
							return e
					}
				},
				Wp = r("./node_modules/uuid/v4.js"),
				Kp = r.n(Wp);
			const $p = Kp()();
			var Qp = (e = $p, t) => {
				switch (t.type) {
					case Te.PAGE_LOADED:
					case Es.h:
					case Es.a:
					case Es.m:
					case Es.f:
						return Kp()();
					default:
						return e
				}
			};
			var zp = (e = null, t) => {
				switch (t.type) {
					case Es.d:
					case Es.o:
					case Es.k:
					case Es.g:
					case Es.a:
					case Es.m:
					case Es.f:
						return null;
					case Es.j: {
						const {
							message: e
						} = t.payload;
						return e
					}
					case Es.e:
						return "error";
					default:
						return e
				}
			};
			var Jp = (e = !0, t) => {
				switch (t.type) {
					case Es.g:
						return !0;
					case Es.m:
					case Es.a:
					case Es.f:
					case Es.e:
						return !1;
					default:
						return e
				}
			};
			var Xp = (e = !1, t) => {
					switch (t.type) {
						case Es.k:
							return !0;
						case Es.j:
						case Es.e:
						case Es.o:
						case Es.d:
							return !1;
						default:
							return e
					}
				},
				Yp = Object(v.c)({
					creationToken: Qp,
					error: zp,
					pending: Jp,
					pendingUpdate: Xp
				});
			const Zp = {};
			var eb = (e = Zp, t) => {
				switch (t.type) {
					case Es.c: {
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
			const tb = {
				standalonePosts: {
					POSTS_LOADED: Es.m,
					postIdsKey: "standalonePostsIds",
					MUTATION_SUCCEEDED: Es.o
				},
				recurringPosts: {
					POSTS_LOADED: Es.a,
					postIdsKey: "recurringPostsIds",
					MUTATION_SUCCEEDED: Es.d
				}
			};

			function rb(e) {
				const t = {};
				return (r = t, s) => {
					switch (s.type) {
						case tb[e].POSTS_LOADED:
						case Es.f: {
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
						case Es.i:
						case Es.l: {
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
						case Es.h: {
							const {
								subredditId: e
							} = s.payload;
							return Object.keys(r).reduce((t, s) => (s !== e && (t[s] = r[s]), t), {})
						}
						case tb[e].MUTATION_SUCCEEDED: {
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
			const sb = {};

			function nb(e) {
				return (t = sb, r) => {
					switch (r.type) {
						case tb[e].POSTS_LOADED:
						case Es.f: {
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
						case Es.h: {
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
			var ab = r("./node_modules/lodash/uniq.js"),
				cb = r.n(ab);
			const ob = {};

			function db(e) {
				return (t = ob, r) => {
					switch (r.type) {
						case tb[e].POSTS_LOADED:
						case Es.f: {
							const {
								subredditInfoById: s
							} = r.payload, n = s.id, a = s.scheduledPosts[tb[e].postIdsKey];
							return {
								...t,
								[n]: cb()([...t[n] || [], ...a])
							}
						}
						case Es.i:
						case Es.l: {
							const {
								subredditId: e,
								scheduledPostId: s
							} = r.payload, n = t[e] || [];
							return {
								...t,
								[e]: n.filter(e => e !== s)
							}
						}
						case Es.h: {
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
			var ib = Object(v.c)({
					models: rb("recurringPosts"),
					pageInfo: nb("recurringPosts"),
					postOrder: db("recurringPosts"),
					editModal: eb
				}),
				ub = Object(v.c)({
					models: rb("standalonePosts"),
					pageInfo: nb("standalonePosts"),
					postOrder: db("standalonePosts")
				}),
				lb = Object(v.c)({
					api: Yp,
					standalonePosts: ub,
					recurringPosts: ib
				});
			var pb = (e = null, t) => {
				switch (t.type) {
					case ee.sb:
						return t.payload;
					case ee.ub:
					case ee.tb:
						return null;
					default:
						return e
				}
			};
			var bb = (e = !1, t) => {
					switch (t.type) {
						case ee.tb:
						case ee.sb:
							return !1;
						case ee.ub:
							return !0;
						default:
							return e
					}
				},
				fb = Object(v.c)({
					error: pb,
					pending: bb
				});
			const yb = [];
			var mb = (e = yb, t) => {
					switch (t.type) {
						case ee.tb: {
							const {
								topAwardedPosts: e
							} = t.payload;
							return e.filter(e => !(e.post.isNsfw || e.post.isArchived || e.post.isHidden || e.post.removedBy || e.post.removedByCategory && "NONE" !== e.post.removedByCategory)).map(e => ({
								postId: e.post.id,
								rank: e.rank,
								score: e.score
							}))
						}
						case ee.sb:
						case ee.ub:
							return yb;
						default:
							return e
					}
				},
				Ob = Object(v.c)({
					api: fb,
					list: mb
				}),
				hb = r("./src/reddit/actions/video.ts");
			const Eb = {};
			var _b = (e = Eb, t) => {
				switch (t.type) {
					case hb.e: {
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
			const Ib = {};
			var gb = (e = Ib, t) => {
				switch (t.type) {
					case hb.a: {
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
			const Sb = {};
			var vb = (e = Sb, t) => {
				switch (t.type) {
					case hb.b: {
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
			const jb = {};
			var wb = (e = jb, t) => {
				switch (t.type) {
					case hb.c: {
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
			const Tb = {
				mutedInFeed: !0
			};
			var Db = (e = Tb, t) => {
				switch (t.type) {
					case hb.l:
						return {
							...e, mutedInFeed: t.payload
						};
					default:
						return e
				}
			};
			var Pb = (e = null, t) => {
				switch (t.type) {
					case hb.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case hb.d:
						return null;
					default:
						return e
				}
			};
			const Ab = {};
			var Cb = (e = Ab, t) => {
				switch (t.type) {
					case hb.o: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case hb.e: {
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
			const Rb = {};
			var kb = (e = Rb, t) => {
				switch (t.type) {
					case hb.h: {
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
					case hb.f: {
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
			const Nb = {};
			var Lb = (e = Nb, t) => {
				switch (t.type) {
					case hb.j: {
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
			const xb = {};
			var Ub = (e = xb, t) => {
				switch (t.type) {
					case hb.p: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case hb.g: {
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
			const Mb = {};
			var Gb = (e = Mb, t) => {
				switch (t.type) {
					case hb.i: {
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
			const Fb = {};
			var Bb = (e = Fb, t) => {
					switch (t.type) {
						case hb.m: {
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
				qb = r("./src/reddit/constants/video.ts");
			const Vb = {};
			var Hb = (e = Vb, t) => {
					switch (t.type) {
						case hb.n: {
							const {
								postId: r,
								time: s
							} = t.payload;
							return e[r] && Math.abs(Math.floor(s.currentTime) - Math.floor(e[r].currentTime)) < qb.l ? e : {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Wb = Object(v.c)({
					autoPlayed: _b,
					buffering: gb,
					consumed: vb,
					continuousViewStartedAt: wb,
					feed: Db,
					fullscreen: Pb,
					loadable: Cb,
					loadTimes: kb,
					metadata: Lb,
					paused: Ub,
					playing: Gb,
					started: Bb,
					time: Hb
				}),
				Kb = Object(v.c)({
					embedAndImage: op,
					expanded: ip,
					focus: up,
					followed: pp,
					instances: fp,
					isAnimatingUpvote: yp,
					isTrackingCrossposts: hp,
					metaMap: _p,
					models: Mp,
					modToMemberShare: Gp,
					crowdControl: sp,
					postLevelCrowdControl: qp,
					recent: Hp,
					scheduledPosts: lb,
					topAwarded: Ob,
					video: Wb
				}),
				$b = r("./src/lib/reducers/addAuthentication/index.ts");
			const Qb = {};
			var zb = Object($b.a)((e = Qb, t) => {
					switch (t.type) {
						case F.b:
						case F.f: {
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
						case x.F: {
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
				}, Qb),
				Jb = Object(v.c)({
					data: zb
				});
			const Xb = {};
			var Yb = (e = Xb, t) => {
				switch (t.type) {
					case l.f:
					case l.g: {
						const {
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: void 0
						}
					}
					case l.e: {
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
			const Zb = {};
			var ef = (e = Zb, t) => {
					switch (t.type) {
						case l.f: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case l.g:
						case l.e: {
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
				tf = Object(v.c)({
					error: Yb,
					pending: ef
				});
			const rf = {};
			var sf = (e = rf, t) => {
				switch (t.type) {
					case l.d: {
						const {
							product: r
						} = t.payload;
						return {
							...e,
							[r.id]: void 0
						}
					}
					case l.c:
					case i.f:
					case i.g:
					case i.i:
					case i.j: {
						const {
							productId: r
						} = t.payload;
						return {
							...e,
							[r]: void 0
						}
					}
					case l.a:
					case i.d:
					case i.h: {
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
			const nf = {};
			var af = (e = nf, t) => {
					switch (t.type) {
						case l.c:
						case i.f: {
							const {
								productId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case l.d: {
							const {
								product: r
							} = t.payload;
							return {
								...e,
								[r.id]: !1
							}
						}
						case l.a:
						case i.d:
						case i.g: {
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
				cf = Object(v.c)({
					error: sf,
					pending: af
				}),
				of = Object(v.c)({
					fetch: tf,
					purchase: cf
				});
			var df = (e = null, t) => {
				switch (t.type) {
					case l.b:
						return t.payload.productId;
					case s.b:
						return null;
					default:
						return e
				}
			};
			const uf = {};
			var lf = (e = uf, t) => {
					switch (t.type) {
						case o.i:
						case l.g: {
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
				pf = Object(v.c)({
					api: of ,
					currentlyPurchasing: df,
					models: lf
				});
			const bf = {};
			var ff = (e = bf, t) => {
				switch (t.type) {
					case B.f:
					case B.e:
					case B.c:
					case B.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case B.d:
					case B.a: {
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
			const yf = {};
			var mf = (e = yf, t) => {
					switch (t.type) {
						case B.f:
						case B.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case B.e:
						case B.d:
						case B.b:
						case B.a: {
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
				Of = Object(v.c)({
					error: ff,
					pending: mf
				});
			const hf = {};
			var Ef = (e = hf, t) => {
					switch (t.type) {
						case B.e: {
							const {
								key: r,
								commentIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case B.b: {
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
				_f = r("./src/reddit/actions/comment/list.ts");
			const If = {};
			var gf = (e = If, t) => {
				switch (t.type) {
					case _f.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case _f.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? Ns()(e, r) : e
					}
					default:
						return e
				}
			};
			const Sf = {};
			var vf = (e = Sf, t) => {
				switch (t.type) {
					case B.e: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: {}
						}
					}
					case B.b: {
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
			const jf = {};
			var wf = (e = jf, t) => {
					switch (t.type) {
						case B.e:
						case B.b: {
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
							} : Object(xt.a)(e, r)
						}
						default:
							return e
					}
				},
				Tf = Object(v.c)({
					api: Of,
					endMarkers: gf,
					fetchedTokens: vf,
					commentIds: Ef,
					loadMore: wf
				}),
				Df = r("./src/reddit/actions/pages/profileModSettings.ts");
			var Pf = (e = !0, t) => {
					switch (t.type) {
						case Df.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				Af = Object(v.c)({
					pending: Pf
				}),
				Cf = Object(v.c)({
					api: Af
				});
			const Rf = {};
			var kf = (e = Rf, t) => (t.type, e);
			const Nf = {};
			var Lf = (e = Nf, t) => {
				switch (t.type) {
					case V.a:
					case V.d: {
						const {
							listingKey: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case V.b:
					case V.c:
					case V.i:
					case V.f:
					case V.e:
					case V.g: {
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
			const xf = {};
			var Uf = (e = xf, t) => {
					switch (t.type) {
						case V.b:
						case V.f: {
							const {
								listingKey: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case V.a:
						case V.d:
						case V.c:
						case V.i:
						case V.e:
						case V.g: {
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
				Mf = Object(v.c)({
					error: Lf,
					pending: Uf
				});
			const Gf = {};
			var Ff = (e = Gf, t) => {
				switch (t.type) {
					case V.c:
					case V.i:
					case V.e:
					case V.g: {
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
			const Bf = {};
			var qf = (e = Bf, t) => {
					switch (t.type) {
						case V.i:
						case V.c:
						case V.e:
						case V.g: {
							const {
								pageInfo: r,
								listingKey: s
							} = t.payload;
							return r ? {
								...e,
								[s]: r
							} : Bf
						}
						default:
							return e
					}
				},
				Vf = Object(v.c)({
					api: Mf,
					ids: Ff,
					pageInfo: qf
				}),
				Hf = r("./src/reddit/constants/posts.ts");
			const Wf = {};
			var Kf = (e = Wf, t) => {
					switch (t.type) {
						case H.c:
						case Re.g:
							return {
								...e, ...t.payload.profileAboutInfo
							};
						case ku.k: {
							const r = t.payload;
							return r.profile ? {
								...e,
								[r.profile.id]: r.about
							} : e
						}
						case xu.h: {
							const {
								identifiers: r,
								userIsSubscriber: s
							} = t.payload, n = r.filter(e => e.type === Hf.a.PROFILE);
							return n.length ? n.reduce((e, t) => (e[t.id] = {
								...e[t.id],
								userIsSubscriber: s
							}, e), {
								...e
							}) : e
						}
						case Ar.n: {
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
				},
				$f = r("./src/reddit/models/Subreddit/index.ts");
			const Qf = {};
			var zf = (e = Qf, t) => {
				switch (t.type) {
					case ge.f:
					case F.b:
					case F.f:
					case ge.b:
					case B.b:
					case B.e:
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case De.b:
					case De.e:
					case q.PROFILE_POSTS_LOADED:
					case Pe.b:
					case je.e:
					case je.h:
					case ve.u:
					case ku.h:
					case Nd.b:
					case Re.g:
					case $.i:
					case ku.m:
					case K.b:
					case K.e:
					case H.c:
					case Te.PAGE_LOADED:
					case Hr.e:
					case Ls.PAGE_LOADED:
					case W.SUBREDDIT_LOADED:
					case we.b:
					case "RECOMMENDED_POSTS_LOADED":
					case xu.c:
						return Object(k.merge)(e, t.payload.profiles);
					case Re.i: {
						const {
							typeaheadSuggestions: r
						} = t.payload, s = Object.values(r).reduce((e, t) => Object($f.h)(t) ? {
							...e,
							[t.id]: t
						} : e, {});
						return Object.keys(s).length ? Object(k.merge)(e, s) : e
					}
					case G.i:
					case G.f:
					case G.m:
					case G.p:
					case G.v:
					case G.k: {
						const {
							response: r
						} = t.payload, s = r && r.profiles;
						return Object(k.merge)(e, s)
					}
					case ku.l:
					case ku.k: {
						const {
							profile: r
						} = t.payload;
						return r ? Object(k.merge)(e, {
							[r.id]: r
						}) : e
					}
					case Ar.n: {
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
					case Ar.l:
					case Ar.k: {
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
			const Jf = {};
			var Xf = (e = Jf, t) => {
					switch (t.type) {
						case ku.c:
						case ku.f: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[(r || "").toLowerCase()]: !0
							}
						}
						case ku.a:
						case ku.b:
						case ku.d:
						case ku.e: {
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
				Yf = Object(v.c)({
					pending: Xf
				});
			const Zf = {};
			var ey = (e = Zf, t) => {
				switch (t.type) {
					case ku.b: {
						const {
							profileName: r,
							data: s
						} = t.payload, n = s.map(e => e.id);
						return {
							...e,
							[(r || "").toLowerCase()]: n
						}
					}
					case ku.e:
					case V.c:
					case V.i:
					case V.e:
					case V.g: {
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
			const ty = {};
			var ry = (e = ty, t) => {
					switch (t.type) {
						case ku.e: {
							const {
								pageInfo: r,
								profileName: s
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						case V.c:
						case V.i: {
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
				sy = Object(v.c)({
					api: Yf,
					models: ey,
					pageInfo: ry
				});
			const ny = {};
			var ay = (e = ny, t) => {
					switch (t.type) {
						case ku.i: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case ku.g:
						case ku.h: {
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
				cy = Object(v.c)({
					pending: ay
				});
			const oy = {};
			var dy = (e = oy, t) => {
					switch (t.type) {
						case ku.h: {
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
				iy = Object(v.c)({
					api: cy,
					pageInfo: dy
				}),
				uy = r("./src/reddit/actions/pinnedPost.ts");
			const ly = {};
			var py = Object($b.a)((e = ly, t) => {
				switch (t.type) {
					case uy.a: {
						const {
							pinned: r,
							profileId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case uy.d: {
						const {
							postId: r,
							profileId: s
						} = t.payload, n = e[s] || [];
						return {
							...e,
							[s]: [...n, r].slice(-Ce.cb)
						}
					}
					case uy.g: {
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
			}, ly);
			const by = {};
			var fy = Object($b.a)((e = by, t) => {
				switch (t.type) {
					case uy.a: {
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
			}, by);
			const yy = {};
			var my = Object($b.a)((e = yy, t) => {
					switch (t.type) {
						case uy.c:
						case uy.f: {
							const {
								postId: r,
								profileId: s
							} = t.payload, n = e[s] || [];
							return {
								...e,
								[s]: [...n, r]
							}
						}
						case uy.b:
						case uy.e:
						case uy.d:
						case uy.g: {
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
				}, yy),
				Oy = Object(v.c)({
					data: py,
					initialData: fy,
					pending: my
				}),
				hy = r("./src/reddit/actions/trophyCase.ts");
			const Ey = {};
			var _y, Iy, gy = (e = Ey, t) => {
					switch (t.type) {
						case hy.a: {
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
				Sy = Object(v.c)({
					about: Kf,
					models: zf,
					moderated: sy,
					multireddits: iy,
					pinnedPosts: Oy,
					trophyCases: gy
				});
			r("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(_y || (_y = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(Iy || (Iy = {}));
			var vy, jy, wy;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(vy || (vy = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(jy || (jy = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(wy || (wy = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(vy || (vy = {}));
			Object(Ae.a)("PROMO__SHOW_PROMO"), Object(Ae.a)("PROMO__HIDE_PROMO");
			const Ty = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var Dy = (e = Ty, t) => {
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
				Py = r("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const Ay = {
				isError: !1,
				isPending: !1,
				global: {
					rpan_config_refresh_rate: Py.d,
					viewer_streams_refresh: Py.c,
					viewer_streams_refresh_slop: Py.e
				},
				subreddits: {},
				isPermanentlyCanceled: !1
			};
			var Cy = (e = Ay, t) => {
				switch (t.type) {
					case Py.w:
						return {
							...e, isError: !1, isPending: !1, global: {
								...t.payload
							}
						};
					case Py.x: {
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
					case Py.G:
						return {
							...e, isPending: !0
						};
					case Py.I:
						return {
							...e, isError: !0, isPending: !1
						};
					case Py.H:
						return {
							...e, isPermanentlyCanceled: !0, isPending: !1
						};
					default:
						return e
				}
			};
			var Ry = (e = {}, t) => {
				switch (t.type) {
					case Py.L:
						return {
							...e, [Py.b]: t.payload.error
						};
					case Py.M:
						return {
							...e, [t.payload.streamId]: t.payload.error
						};
					case Py.z: {
						const {
							[Py.b]: t, ...r
						} = e;
						return r
					}
					case Py.y: {
						const {
							[t.payload.model.post.id]: r, ...s
						} = e;
						return s
					}
					default:
						return e
				}
			};
			const ky = (e, t, r, s) => ({
				...e,
				[t]: {
					...e[t],
					isPending: r,
					...s && {
						utcTimeStamp: s
					}
				}
			});
			var Ny = (e = {}, t) => {
				switch (t.type) {
					case Py.N:
						return ky(e, t.payload, !0);
					case Py.O:
						return ky(e, Py.b, !0);
					case Py.y:
						return ky(e, t.payload.model.post.id, !1, t.payload.utcTimeStamp);
					case Py.z:
						return ky(e, Py.b, !1, t.payload.utcTimeStamp);
					case Py.M:
						return ky(e, t.payload.streamId, !1);
					case Py.L:
						return ky(e, Py.b, !1);
					default:
						return e
				}
			};
			const Ly = {
				isError: !1,
				isPending: !1,
				subreddits: []
			};
			var xy = (e = Ly, t) => {
					switch (t.type) {
						case Py.v:
							return {
								...e, isError: !1, isPending: !1, subreddits: t.payload.subreddits
							};
						case Py.J:
							return {
								...e, isError: !1, isPending: !0
							};
						case Py.K:
							return {
								...e, isError: !0, isPending: !1
							};
						default:
							return e
					}
				},
				Uy = Object(v.c)({
					config: Cy,
					error: Ry,
					pending: Ny,
					recommendedViewerSubreddits: xy
				});
			const My = {};
			var Gy = (e = My, t) => {
				switch (t.type) {
					case Py.r:
						return {
							...e, [t.payload.streamId]: {
								level: t.payload.level,
								error: !1
							}
						};
					case Py.F:
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
			const Fy = {
				cursor: Py.W,
				timestamps: {},
				visitOrder: []
			};
			var By = (e = Fy, t) => {
				switch (t.type) {
					case Py.P:
						return Fy;
					case Py.X: {
						const r = t.payload,
							s = e.visitOrder.includes(r) ? e.visitOrder : [...e.visitOrder, r],
							n = s.indexOf(r);
						return s === e.visitOrder && n === e.cursor ? e : {
							...e,
							visitOrder: s,
							cursor: n
						}
					}
					case p.d:
						return qy(e, t.payload.id);
					case Py.E:
						return qy(e, t.payload);
					case ei.k: {
						const r = Object.keys(t.payload).filter(e => t.payload[e].hidden);
						return Vy(e, r)
					}
					case Py.V: {
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
			const qy = (e, t) => {
					const r = e.visitOrder.indexOf(t);
					if (-1 === r) return e;
					const s = r > e.cursor ? e.cursor : Math.max(e.cursor - 1, 0);
					return {
						...e,
						visitOrder: e.visitOrder.filter(e => e !== t),
						cursor: s
					}
				},
				Vy = (e, t) => {
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
				Hy = {
					ended: [],
					removed: []
				};

			function Wy(e) {
				return [...new Set(e)]
			}
			var Ky = (e = Hy, t) => {
				switch (t.type) {
					case Py.t:
						return {
							...e, ended: Wy(e.ended.concat(t.payload))
						};
					case Py.u:
						return {
							...e, removed: Wy(e.removed.concat(t.payload))
						};
					default:
						return e
				}
			};
			const $y = {};
			var Qy = (e = $y, t) => {
				switch (t.type) {
					case Py.z:
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
			const zy = {},
				Jy = (e, t) => {
					const r = Object.keys(e).reduce((t, r) => ({
						...t,
						[r]: {
							...e[r],
							rank: Py.m
						}
					}), {});
					return t.reduce((e, t, r) => ({
						...e,
						[t.post.id]: {
							...t,
							rank: Py.l - r
						}
					}), r)
				},
				Xy = (e, t) => {
					const r = t.post.id,
						s = e[r] ? e[r].rank : Py.m;
					return {
						...e,
						[t.post.id]: {
							...t,
							rank: s
						}
					}
				};
			var Yy = (e = zy, t) => {
				switch (t.type) {
					case Py.y:
						return Xy(e, t.payload.model);
					case Py.z:
						return Jy(e, t.payload.models);
					case Py.D: {
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
			const Zy = {
				discoveryUnitThumbnails: {},
				streamPreviews: {}
			};
			var em = (e = Zy, t) => {
				switch (t.type) {
					case Py.s:
						return {
							...e, discoveryUnitThumbnails: {
								...t.payload.reduce((e, t) => ({
									...e,
									[t.postId]: t.imageUrl
								}), {})
							}
						};
					case Py.A:
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
			const tm = {
				reported: []
			};
			var rm = (e = tm, t) => {
				switch (t.type) {
					case p.d:
						return {
							...e, reported: [...e.reported, t.payload.id]
						};
					default:
						return e
				}
			};
			const sm = {
				isIntroFinished: !1
			};
			var nm = (e = sm, t) => {
				switch (t.type) {
					case Py.B:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const am = {
				reportedStreams: []
			};
			var cm = (e = am, t) => {
					switch (t.type) {
						case Py.C:
							return {
								...e, ...t.payload
							};
						case p.d: {
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
				om = Object(v.c)({
					api: Uy,
					history: By,
					hlsStreams: Ky,
					listings: Qy,
					models: Yy,
					preloads: em,
					reports: rm,
					theaterSettings: nm,
					userSettings: cm,
					automuteLevels: Gy
				}),
				dm = r("./src/reddit/actions/recentSubreddits/constants.ts"),
				im = r("./src/reddit/actions/session.ts");
			const um = [];
			var lm = (e = um, t) => {
				switch (t.type) {
					case im.c:
					case im.d:
						return um;
					case dm.d:
						return ((e, t) => Pu()(e, t) ? e : t)(e, t.subreddits);
					case dm.f: {
						const {
							payload: r
						} = t, s = [r, ...e];
						return Array.from(new Set(s)).slice(0, dm.c)
					}
					case dm.a: {
						const {
							payload: e
						} = t;
						return e.slice(0, dm.c)
					}
					default:
						return e
				}
			};
			const pm = {};
			var bm = (e = pm, t) => {
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
				fm = r("./src/reddit/actions/pages/report/constants.ts");
			var ym = (e = null, t) => {
				switch (t.type) {
					case fm.a:
						return t.payload;
					default:
						return e
				}
			};
			var mm = (e = null, t) => {
				switch (t.type) {
					case fm.b:
						return t.payload;
					case fm.c:
					case fm.d:
						return !1;
					default:
						return e
				}
			};
			var Om = (e = !1, t) => {
				switch (t.type) {
					case fm.d:
						return !0;
					case fm.c:
					case fm.b:
						return !1;
					default:
						return e
				}
			};
			var hm = (e = !1, t) => {
					switch (t.type) {
						case fm.c:
							return !0;
						case fm.b:
						case fm.d:
							return !1;
						default:
							return e
					}
				},
				Em = Object(v.c)({
					error: mm,
					pending: Om,
					success: hm
				}),
				_m = r("./src/reddit/actions/reportPageRules/constants.ts");
			const Im = [];
			var gm = (e = Im, t) => {
					switch (t.type) {
						case _m.a:
							return t.payload;
						default:
							return e
					}
				},
				Sm = Object(v.c)({
					reportPageApi: Em,
					reportPageRules: gm,
					initialReason: ym
				}),
				vm = r("./src/reddit/actions/reportRules.ts");
			const jm = {
				liveStreamingRules: [],
				sitewideRules: []
			};
			var wm = (e = jm, t) => {
				switch (t.type) {
					case vm.b:
						return {
							...e, sitewideRules: t.payload
						};
					case vm.a:
						return {
							...e, liveStreamingRules: t.payload
						};
					default:
						return e
				}
			};
			Object(Ae.a)("REQUEST_HOST_SET");
			var Tm = (e = "", t) => {
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			Object(Ae.a)("RUN_TIME_ENV_VARS__IS_STAGING");
			const Dm = {
				staging: !1,
				startTimeInMillis: (new Date).getTime()
			};
			var Pm = (e = Dm, t) => {
					switch (t.type) {
						case "RUN_TIME_ENV_VARS__IS_STAGING":
							return {
								...e, staging: !0
							};
						default:
							return e
					}
				},
				Am = r("./src/reddit/components/SearchDropdown/index.tsx");
			var Cm = (e = !1, t) => {
				switch (t.type) {
					case Re.c:
						return !e;
					case So.b: {
						const {
							event: r
						} = t.payload, s = r.target, n = document.getElementById(Am.b), a = document.getElementById(Am.a);
						return !(!s || !((null == n ? void 0 : n.contains(s)) || (null == a ? void 0 : a.contains(s)))) && e
					}
					case Re.b:
					case So.a:
					case So.c:
						return !1;
					default:
						return e
				}
			};
			const Rm = Object.create(null);
			var km = (e = Rm, t) => {
				switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
					case Re.h: {
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
			var Nm = (e = null, t) => {
				switch (t.type) {
					case H.c:
					case Re.j: {
						const {
							searchQuery: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			const Lm = Object.create(null);
			var xm = (e = Lm, t) => {
					switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
						case Re.i: {
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
				Um = r("./src/reddit/models/Search/index.ts");
			const Mm = {};
			var Gm = (e = Mm, t) => {
					switch (t.type) {
						case Re.i: {
							const {
								typeaheadSuggestions: r
							} = t.payload, s = {};
							return Object.keys(r).forEach(e => {
								const t = r[e];
								return s[e] = Object(Um.d)(t)
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				Fm = Object(v.c)({
					idsByQuery: xm,
					models: Gm
				});
			const Bm = {};
			var qm = (e = Bm, t) => {
					switch (t.type) {
						case H.c: {
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
				Vm = Object(v.c)({
					isDropdownOpen: Cm,
					isSubredditSearchEnabled: (e = !0, t) => {
						switch (t.type) {
							case Re.a:
								return !1;
							case Re.d:
								return !0;
							default:
								return e
						}
					},
					relatedQueries: km,
					searchQuery: Nm,
					typeahead: Fm,
					viewTreatment: qm
				}),
				Hm = r("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const Wm = {};
			var Km = (e = Wm, t) => {
				switch (t.type) {
					case H.c: {
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
						if (i === Hm.c.Trending || r) {
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
			const $m = {};
			var Qm = (e = $m, t) => {
				switch (t.type) {
					case H.c: {
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
			const zm = {};
			var Jm = (e = zm, t) => {
					switch (t.type) {
						case H.c: {
							const {
								key: r,
								searchDiscoveryUnitOrder: s
							} = t.payload;
							return s ? {
								...e,
								[r]: s
							} : zm
						}
						default:
							return e
					}
				},
				Xm = Object(v.c)({
					headerContent: Km,
					models: Qm,
					order: Jm
				});
			Object(Ae.a)("SEO__CRAWLER_RECEIVED");
			var Ym = (e = null, t) => {
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				Zm = r("./src/reddit/actions/seo/linksModule.ts");
			const eO = {};
			var tO = (e = eO, t) => {
					switch (t.type) {
						case Zm.b:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? {
								...e,
								frontpage: t.payload
							} : e;
						case Zm.c:
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
				rO = r("./src/reddit/actions/seo/topicLinks.ts");
			const sO = {};
			var nO = (e = sO, t) => {
					switch (t.type) {
						case rO.a:
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
				aO = Object(v.c)({
					crawler: Ym,
					linksModule: tO,
					topicLinks: nO
				}),
				cO = r("./src/reddit/actions/shortcuts/constants.ts");
			var oO = (e = null, t) => {
				switch (t.type) {
					case cO.a:
						return t.payload;
					case u.b:
						return null;
					default:
						return e
				}
			};
			var dO = (e = null, t) => {
					switch (t.type) {
						case cO.b:
							return t.payload || null;
						default:
							return e
					}
				},
				iO = r("./src/reddit/constants/shortcuts.ts"),
				uO = r("./src/reddit/helpers/history/index.ts");
			const lO = iO.d.Global,
				pO = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(uO.b)(ml.b.IsOverlay) ? iO.d.Lightbox : iO.d.CommentPage;
						case "rpan":
							return Object(uO.b)(ml.b.IsOverlay) ? iO.d.Lightbox : lO;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return iO.d.Listing;
						case "modQueuePages":
							return iO.d.Modqueue;
						default:
							return lO
					}
				};
			var bO = (e = lO, t) => {
					switch (t.type) {
						case u.b:
							const r = t.payload;
							if (r.routeMatch) {
								const e = r.routeMatch.route.meta;
								return pO(e)
							}
							return lO;
						default:
							return e
					}
				},
				fO = Object(v.c)({
					activeCommentId: oO,
					activePostId: dO,
					namespace: bO
				});
			var yO = (e = !1, t) => {
					if (e) return e;
					switch (t.type) {
						case m.q:
						case m.r:
							return !0;
						default:
							return e
					}
				},
				mO = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				OO = Object(v.c)({
					firstFetch: yO,
					models: mO.b
				}),
				hO = r("./src/reddit/actions/streaming/modSettings.ts");
			var EO = (e = null, t) => {
				switch (t.type) {
					case hO.b:
					case hO.c:
						return null;
					case hO.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var _O = (e = !1, t) => {
					switch (t.type) {
						case hO.b:
							return !0;
						case hO.c:
						case hO.a:
							return !1;
						default:
							return e
					}
				},
				IO = Object(v.c)({
					error: EO,
					pending: _O
				}),
				gO = r("./src/reddit/actions/streaming/constants.ts");
			const SO = {};
			var vO = (e = SO, t) => {
					switch (t.type) {
						case gO.a: {
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
				jO = Object(v.c)({
					api: IO,
					modSettings: vO
				}),
				wO = r("./src/reddit/models/StructuredStyles/index.ts");
			const TO = {};
			var DO = (e = TO, t) => {
					switch (t.type) {
						case b.h:
						case b.b:
						case b.d:
							return t.payload.styles;
						case b.e:
							return TO;
						case b.c: {
							const r = t.payload;
							return {
								...e,
								...r
							}
						}
						case b.k: {
							const e = t.payload;
							return Object(wO.h)(e.styles)
						}
						default:
							return e
					}
				},
				PO = r("./src/reddit/actions/exportImportStyles.ts");
			var AO = (e = null, t) => {
				switch (t.type) {
					case PO.c:
					case PO.b:
						return null;
					case PO.a:
						return t.payload;
					default:
						return e
				}
			};
			var CO = (e = !1, t) => {
					switch (t.type) {
						case PO.c:
							return !0;
						case PO.b:
						case PO.a:
							return !1;
						default:
							return e
					}
				},
				RO = Object(v.c)({
					error: AO,
					pending: CO
				}),
				kO = r("./src/reddit/actions/postFlairStyleTemplate.ts"),
				NO = r("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const LO = {};
			var xO = (e = LO, t) => {
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case F.b:
						case F.f:
						case H.c:
						case Re.g:
						case Te.PAGE_LOADED:
						case Ls.PAGE_LOADED: {
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
						case kO.b: {
							const {
								flairId: r,
								template: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case kO.a: {
							const {
								flairId: r
							} = t.payload;
							return Object(xt.a)(e, r)
						}
						case Xl.b: {
							const {
								templateId: r
							} = t.payload;
							return Object(xt.a)(e, r)
						}
						case b.k:
							return LO;
						case NO.b: {
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
				UO = Object(v.c)({
					models: xO
				});
			const MO = {};
			var GO = (e = MO, t) => {
				switch (t.type) {
					case b.f: {
						const r = t.payload;
						return {
							...e,
							[r.imageKey]: r.uploadId
						}
					}
					case b.k:
					case b.e:
						return MO;
					default:
						return e
				}
			};
			var FO = (e = !1, t) => {
				switch (t.type) {
					case b.n:
					case b.e:
						return !1;
					case b.a:
						return !0;
					default:
						return e
				}
			};
			var BO = (e = null, t) => {
				switch (t.type) {
					case b.d:
						return t.payload.subredditId;
					case b.e:
						return null;
					case u.b:
						return t.payload.location.search.indexOf("styling=true") > -1 ? e : null;
					case Ar.g:
						return null;
					default:
						return e
				}
			};
			const qO = {};
			var VO = (e = qO, t) => {
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case F.b:
						case F.f:
						case Te.PAGE_LOADED:
						case Ls.PAGE_LOADED: {
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
						case Re.g:
						case H.c: {
							const {
								payload: r
							} = t;
							if (!r.structuredStyles || !r.structuredStyles.data) return e;
							if (!r.subredditName) return e;
							let s;
							if (Oa()(r.subreddits, (e, t) => {
									if (e.name.toLowerCase() === r.subredditName.toLowerCase()) return s = t, !1
								}), !s) return e;
							const n = r.structuredStyles.data.style;
							return {
								...e,
								[s]: n
							}
						}
						case b.m: {
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
						case b.h: {
							const r = t.payload;
							return {
								...e,
								[r.subredditId]: r.styles
							}
						}
						case b.k: {
							const r = t.payload,
								s = Object(wO.h)(r.styles);
							return {
								...e,
								[r.subredditId]: s
							}
						}
						case ku.k: {
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
						case Ar.l: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Ap(e, {
									[r.subredditId]: {
										bannerBackgroundImage: r.imageUrl
									}
								})
							}
							return e
						}
						case Ar.k: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Ap(e, {
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
				HO = Object(v.c)({
					draft: DO,
					exportStyles: RO,
					flairTemplate: UO,
					imagePreviews: GO,
					isBladeEditorDirty: FO,
					isEditing: BO,
					models: VO
				});
			Object(Ae.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var WO = (e = "", t) => {
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				KO = r("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const $O = {};
			var QO = (e = $O, t) => {
				switch (t.type) {
					case KO.c:
					case KO.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case KO.a: {
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
			const zO = {};
			var JO = (e = zO, t) => {
					switch (t.type) {
						case KO.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case KO.b:
						case KO.a: {
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
				XO = Object(v.c)({
					error: QO,
					pending: JO
				});
			const YO = {};
			var ZO = (e = YO, t) => {
					switch (t.type) {
						case KO.b: {
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
				eh = Object(v.c)({
					api: XO,
					models: ZO
				}),
				th = r("./src/reddit/actions/category/constants.ts"),
				rh = r("./src/reddit/actions/subredditMention/constants.ts");
			const sh = {};
			var nh = (e = sh, t) => {
				switch (t.type) {
					case rh.d:
					case F.b:
					case F.f:
					case H.c:
					case W.SUBREDDIT_FAILED:
					case W.SUBREDDIT_LOADED:
					case Te.PAGE_LOADED:
					case Ls.PAGE_LOADED:
					case B.b:
					case B.e:
					case De.b:
					case De.a:
					case De.e:
					case De.d:
					case q.PROFILE_POSTS_LOADED:
					case K.b:
					case K.e:
					case Re.g:
					case Ld.TOPIC_DATA_LOADED:
					case Fd.u: {
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
					case $a.a: {
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
					case xu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, n = r.filter(e => e.type === Hf.a.SUBREDDIT);
						return n.length ? n.reduce((e, t) => Object(k.setIn)(e, [t.id, "userIsSubscriber"], s), e) : e
					}
					case qc.g:
					case th.f:
					case Fd.g:
					case Fd.o:
					case ns.B: {
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
					case $a.b: {
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
					case $.c: {
						const {
							data: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case ee.s: {
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
			const ah = {};
			var ch = (e = ah, t) => {
				switch (t.type) {
					case $.b:
					case $.c: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case $.a: {
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
			var oh = (e = !1, t) => {
					switch (t.type) {
						case $.b:
							return !0;
						case $.c:
						case $.a:
							return !1;
						default:
							return e
					}
				},
				dh = Object(v.c)({
					error: ch,
					pending: oh
				}),
				ih = r("./src/reddit/actions/subredditCreation.ts");
			const uh = {
				apiError: null
			};
			var lh = (e = uh, t) => {
				switch (t.type) {
					case ih.b: {
						const {
							error: r
						} = t.payload;
						return {
							...e,
							apiError: r
						}
					}
					case ih.a:
					case ih.c:
					case ih.e:
						return uh;
					default:
						return e
				}
			};
			var ph = (e = null, t) => {
				switch (t.type) {
					case ih.d: {
						const {
							crosspostId: e
						} = t.payload;
						return e || null
					}
					case ih.a:
					case ih.c:
					case ih.e:
						return null;
					default:
						return e
				}
			};
			var bh = (e = null, t) => {
				switch (t.type) {
					case ih.e: {
						const {
							subredditName: e
						} = t.payload;
						return e || null
					}
					case ih.c:
					case ih.b:
						return null;
					default:
						return e
				}
			};
			var fh = (e = !1, t) => {
					switch (t.type) {
						case ih.c:
							return !0;
						case ih.e:
						case ih.b:
							return !1;
						default:
							return e
					}
				},
				yh = Object(v.c)({
					error: lh,
					lastCreatedSubredditId: bh,
					initialCrosspost: ph,
					pending: fh
				});
			var mh = (e = !1, t) => {
					switch (t.type) {
						case Fd.w:
							return !0;
						case Fd.x:
						case Fd.v:
							return !1;
						default:
							return e
					}
				},
				Oh = Object(v.c)({
					pending: mh
				});
			const hh = {};
			var Eh = (e = hh, t) => {
				switch (t.type) {
					case $.l:
					case $.m: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case $.k: {
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
			const _h = {};
			var Ih = (e = _h, t) => {
					switch (t.type) {
						case $.l: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case $.m:
						case $.k: {
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
				gh = Object(v.c)({
					error: Eh,
					pending: Ih
				});
			const Sh = {};
			var vh = (e = Sh, t) => {
					switch (t.type) {
						case Fd.f:
						case Fd.g:
							return {
								...e, [t.payload.key]: !1
							};
						case Fd.h:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				jh = Object(v.c)({
					pending: vh
				});
			var wh = (e = null, t) => {
				switch (t.type) {
					case ee.bb:
						return t.payload || null;
					case ee.db:
					case ee.cb:
						return null;
					default:
						return e
				}
			};
			var Th = (e = !1, t) => {
					switch (t.type) {
						case ee.db:
							return !0;
						case ee.cb:
						case ee.bb:
							return !1;
						default:
							return e
					}
				},
				Dh = Object(v.c)({
					error: wh,
					pending: Th
				});
			var Ph = (e = null, t) => {
				switch (t.type) {
					case Fd.k: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case Fd.m:
					case Fd.l:
						return null;
					default:
						return e
				}
			};
			var Ah = (e = !1, t) => {
					switch (t.type) {
						case Fd.m:
							return !0;
						case Fd.l:
						case Fd.k:
							return !1;
						default:
							return e
					}
				},
				Ch = Object(v.c)({
					error: Ph,
					pending: Ah
				}),
				Rh = r("./src/reddit/actions/subredditRules/constants.ts");
			var kh = (e = !1, t) => {
					switch (t.type) {
						case Rh.c:
							return !0;
						case Rh.a:
						case Rh.b:
							return !1;
						default:
							return e
					}
				},
				Nh = r("./src/reddit/actions/subredditSettings.ts");
			var Lh = (e = !1, t) => {
					switch (t.type) {
						case Nh.e:
							return !0;
						case Nh.f:
						case Nh.d:
							return !1;
						default:
							return e
					}
				},
				xh = Object(v.c)({
					pending: Lh
				});
			const Uh = {};
			var Mh = (e = Uh, t) => {
					switch (t.type) {
						case Fd.n:
						case Fd.o:
							return {
								...e, [t.payload.key]: !1
							};
						case Fd.p:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				Gh = Object(v.c)({
					pending: Mh
				}),
				Fh = r("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const Bh = {};
			var qh = (e = Bh, t) => {
				switch (t.type) {
					case Fh.c:
					case Fh.b: {
						const r = t.payload,
							{
								subredditName: s
							} = r.options;
						return {
							...e,
							[s.toLowerCase()]: null
						}
					}
					case Fh.a: {
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
			const Vh = {};
			var Hh = (e = Vh, t) => {
					switch (t.type) {
						case Fh.c: {
							const r = t.payload,
								{
									subredditName: s
								} = r.options;
							return {
								...e,
								[s.toLowerCase()]: !0
							}
						}
						case Fh.b:
						case Fh.a: {
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
				Wh = Object(v.c)({
					error: qh,
					pending: Hh
				});
			const Kh = {};
			var $h = (e = Kh, t) => {
				switch (t.type) {
					case wp.c:
					case wp.b: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case wp.a: {
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
			const Qh = {};
			var zh = (e = Qh, t) => {
					switch (t.type) {
						case wp.c: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case wp.b:
						case wp.a: {
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
				Jh = Object(v.c)({
					error: $h,
					pending: zh
				}),
				Xh = Object(v.c)({
					about: dh,
					create: yh,
					inlineEditing: Oh,
					models: gh,
					onboarding: jh,
					productOffers: Dh,
					rankings: Ch,
					rules: kh,
					settings: xh,
					similar: Gh,
					topContent: Jh,
					wiki: Wh
				}),
				Yh = r("./node_modules/lodash/isNil.js"),
				Zh = r.n(Yh);
			const eE = {};
			var tE = (e = eE, t) => {
					switch (t.type) {
						case $.d: {
							const {
								subredditId: r,
								forceState: s
							} = t.payload;
							return {
								...e,
								[r]: Zh()(s) ? !e[r] : s
							}
						}
						default:
							return e
					}
				},
				rE = Object(v.c)({
					meta: tE
				});
			const sE = {};
			var nE = (e = sE, t) => {
					switch (t.type) {
						case th.f: {
							const {
								categoryId: r,
								subredditIds: s
							} = t.payload;
							return ba()(s) ? e : {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				aE = r("./src/reddit/actions/subreddit/subredditCarousel.ts");
			const cE = {
				pending: !1,
				items: {}
			};
			var oE = (e = cE, t) => {
				switch (t.type) {
					case aE.a:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case aE.b:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			const dE = {};
			var iE = (e = dE, t) => {
					switch (t.type) {
						case ve.c: {
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
				uE = r("./src/reddit/actions/subredditCrosspostable.ts");
			var lE = (e = null, t) => {
				switch (t.type) {
					case uE.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case uE.c:
					case uE.b:
						return null;
					default:
						return e
				}
			};
			var pE = (e = !1, t) => {
					switch (t.type) {
						case uE.c:
							return !0;
						case uE.b:
						case uE.a:
							return !1;
						default:
							return e
					}
				},
				bE = Object(v.c)({
					errors: lE,
					pending: pE
				});
			const fE = {};
			var yE = (e = fE, t) => {
					switch (t.type) {
						case uE.b: {
							const {
								subredditIds: r
							} = t.payload;
							return Pu()(e, r) ? e : r
						}
						default:
							return e
					}
				},
				mE = Object(v.c)({
					api: bE,
					ids: yE
				});
			const OE = {};
			var hE = (e = OE, t) => {
					switch (t.type) {
						case xp.a: {
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
							return Ap(c, {
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
				EE = Object(v.c)({
					models: hE
				});
			const _E = {};
			var IE = (e = _E, t) => {
				switch (t.type) {
					case d.a: {
						const {
							assets: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case i.g:
					case i.j: {
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
			const gE = {};
			var SE = (e = gE, t) => {
				switch (t.type) {
					case d.a: {
						const {
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: t.payload
						}
					}
					case o.i: {
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
			const vE = {};
			var jE = (e = vE, t) => {
				switch (t.type) {
					case d.a: {
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
			const wE = {};
			var TE = (e = wE, t) => {
					switch (t.type) {
						case d.p: {
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
				DE = Object(v.c)({
					assets: IE,
					communityRaw: SE,
					distributions: jE,
					releaseNotes: TE
				}),
				PE = r("./node_modules/lodash/isEqualWith.js"),
				AE = r.n(PE),
				CE = r("./src/lib/forceHttps/index.ts");
			const RE = {},
				kE = (e, t) => {
					return !AE()(e, t, (e, t, r) => {
						if ("subscribers" === r) return !0
					})
				},
				NE = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					for (let n = 0; n < r.length; n++) {
						const a = r[n],
							c = e[a],
							o = t[a];
						c && !kE(c, o) || (s[a] = {
							...c,
							...o
						})
					}
					return Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var LE = (e = RE, t) => {
				switch (t.type) {
					case xu.c:
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
								return a.icon.url ? c.icon.url = Object(CE.a)(a.icon.url) : n && n.icon.url ? c.icon = n.icon : c.icon.url = "", n && n.allowChatPostCreation && (c.allowChatPostCreation = !0), Object(k.set)(r, s, c)
							}, e) : e
						})(e, t.payload.subreddits || {});
					case dm.b:
					case rh.d:
					case th.f:
					case ge.f:
					case qc.g:
					case Md.c:
					case Gd.b:
					case je.e:
					case je.h:
					case G.k:
					case ve.r:
					case ve.u:
					case ku.h:
					case Nd.b:
					case F.b:
					case F.f:
					case ge.b:
					case we.b:
					case B.b:
					case B.e:
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case De.b:
					case De.e:
					case q.MORE_POSTS_LOADED:
					case q.PROFILE_POSTS_LOADED:
					case ku.e:
					case H.c:
					case W.SUBREDDIT_LOADED:
					case Te.PAGE_LOADED:
					case Hr.e:
					case Ls.PAGE_LOADED:
					case ku.m:
					case K.b:
					case K.e:
					case Pe.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Re.g:
					case $.c:
					case $.f:
					case $.i:
					case Fd.a:
					case Fd.g:
					case Fd.o:
					case Ld.TOPIC_DATA_LOADED:
					case Ld.MORE_POSTS_LOADED:
					case ns.B:
						return NE(e, t.payload.subreddits || {});
					case G.f:
					case G.i:
					case G.m:
					case G.p:
					case G.v: {
						const {
							response: r
						} = t.payload, {
							subreddits: s
						} = r;
						return NE(e, s)
					}
					case Re.i: {
						const {
							typeaheadSuggestions: r
						} = t.payload;
						return NE(e, r.subreddits || {})
					}
					case ve.B: {
						const {
							subreddits: r
						} = t.payload;
						return {
							...r,
							...e
						}
					}
					case o.g: {
						const r = t.payload;
						return NE(e, r)
					}
					case b.m: {
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
					case Nh.f: {
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
					case KO.b: {
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
						return Object(k.merge)(e, n)
					}
					default:
						return e
				}
			};
			var xE = (e = null, t) => {
				switch (t.type) {
					case $.e: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case $.g:
					case $.f:
						return null;
					default:
						return e
				}
			};
			var UE = (e = !1, t) => {
				switch (t.type) {
					case $.g:
					case $.f:
						return !0;
					case $.e:
						return !1;
					default:
						return e
				}
			};
			var ME = (e = !1, t) => {
					switch (t.type) {
						case $.g:
							return !0;
						case $.f:
						case $.e:
							return !1;
						default:
							return e
					}
				},
				GE = Object(v.c)({
					errors: xE,
					fetched: UE,
					pending: ME
				});
			var FE = (e = null, t) => {
					switch (t.type) {
						case $.f: {
							const {
								subreddits: e
							} = t.payload, r = Object.keys(e);
							return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
						}
						default:
							return e
					}
				},
				BE = Object(v.c)({
					api: GE,
					order: FE
				});
			const qE = {};
			var VE = (e = qE, t) => {
				switch (t.type) {
					case Nh.a: {
						const r = t.payload;
						return Object(k.merge)(e, r)
					}
					case Nh.b: {
						const {
							subredditId: r,
							notificationSettings: s
						} = t.payload;
						return Object(k.merge)(e, {
							[r]: s
						})
					}
					default:
						return e
				}
			};
			const HE = {};
			var WE = (e = HE, t) => {
				switch (t.type) {
					case Fd.g: {
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
			const KE = {};
			var $E = (e = KE, t) => {
				switch (t.type) {
					case ee.pb: {
						const {
							recentSupporters: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case ee.S:
					case ee.V: {
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
									displayName: Object(z.e)(n),
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
			};
			const QE = {};
			var zE = (e = QE, t) => {
				var r;
				switch (t.type) {
					case ee.qb:
					case ee.pb: {
						const {
							powerups: r,
							subredditId: s
						} = t.payload;
						let n = null;
						if (r) {
							const {
								mediaPacks: e,
								...t
							} = r;
							n = t
						}
						return {
							...e,
							[s]: n
						}
					}
					case ee.I: {
						const {
							subredditsPowerupsInfo: r
						} = t.payload, s = r.reduce((e, {
							id: t,
							powerups: r
						}) => ({
							...e,
							[t]: r
						}), {});
						return {
							...e,
							...s
						}
					}
					case ee.S:
					case ee.V: {
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
			const JE = {},
				XE = (e, t, r) => {
					const s = null == e ? void 0 : e[t],
						n = null == s ? void 0 : s.emotes;
					if (!n) return e;
					const a = ka(r, t),
						c = [...n, a];
					return {
						...e,
						[t]: {
							...s,
							emotes: c
						}
					}
				},
				YE = (e, t, r) => {
					const s = null == e ? void 0 : e[t],
						n = null == s ? void 0 : s.emotes;
					if (!n) return e;
					const a = n.filter(e => e.id !== r);
					return {
						...e,
						[t]: {
							...s,
							emotes: a
						}
					}
				};
			var ZE = (e = JE, t) => {
				switch (t.type) {
					case ee.pb: {
						const {
							powerups: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: Na(r)
						}
					}
					case Ra.b: {
						const {
							subredditId: r,
							emoji: s
						} = t.payload, n = e[r];
						return {
							...e,
							[r]: XE(n, r, s)
						}
					}
					case Ra.c: {
						const {
							subredditId: r,
							emojiId: s
						} = t.payload, n = e[r];
						return {
							...e,
							[r]: YE(n, r, s)
						}
					}
					default:
						return e
				}
			};
			const e_ = {},
				t_ = (e, t) => t.supporterInfo && e.supporterInfo ? 1e15 * t.score + new Date(t.lastSupportedAt).valueOf() - 1e15 * e.score - new Date(e.lastSupportedAt).valueOf() : t.supporterInfo ? 1 : e.supporterInfo ? -1 : 0;
			var r_ = (e = e_, t) => {
					switch (t.type) {
						case ee.pb: {
							const {
								topSupporters: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: r.sort(t_)
							}
						}
						case ee.S:
						case ee.V: {
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
							}).filter(e => e.score > 0);
							if (c) return {
								...e,
								[r]: o.sort(t_)
							};
							if (s > 0) {
								const t = {
									score: s,
									lastSupportedAt: (new Date).toString(),
									supporterInfo: a ? null : {
										id: n.id,
										displayName: Object(z.e)(n),
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
									[r]: [t, ...e[r]].sort(t_)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				s_ = r("./src/lib/makeProductOfferKey/index.ts");
			const n_ = {};
			var a_ = (e = n_, t) => {
				switch (t.type) {
					case ee.cb:
					case ee.pb: {
						const {
							subredditId: r,
							productOffers: s
						} = t.payload;
						if (!(null == s ? void 0 : s.length)) return e;
						const n = s.reduce((e, t) => {
							const s = Object(s_.a)(t.type, r);
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
			const c_ = {};
			var o_ = (e = c_, t) => {
					switch (t.type) {
						case l.g: {
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
				d_ = r("./src/reddit/models/NewCommunityProgress/index.ts");
			const i_ = {};
			var u_ = (e = i_, t) => {
				switch (t.type) {
					case Fd.y: {
						const {
							id: r,
							progressModule: s
						} = t.payload;
						if (!s) {
							const t = {
								...e
							};
							return delete t[r], t
						}
						const n = (e => e.filter(({
							id: e
						}) => "invite_contributor" !== e).filter(({
							buttons: e
						}) => e.every(({
							__typename: e
						}) => d_.d.includes(e))))(s.cards);
						return {
							...e,
							[r]: {
								...s,
								cards: n
							}
						}
					}
					default:
						return e
				}
			};
			const l_ = {};
			var p_ = (e = l_, t) => {
				var r, s;
				switch (t.type) {
					case Fd.y: {
						const {
							id: r,
							questions: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case ge.f:
					case ge.b: {
						const {
							subreddits: s
						} = t.payload, n = {};
						for (const e of Object.keys(s)) {
							const t = s[e];
							((null === (r = t.answerableQuestions) || void 0 === r ? void 0 : r.length) || 0) > 0 && (n[e] = t.answerableQuestions)
						}
						return 0 === Object.keys(n).length ? e : Object(k.assign)(e, n)
					}
					case Fd.d: {
						const {
							subredditId: r,
							questionId: n
						} = t.payload, a = null !== (s = e[r]) && void 0 !== s ? s : [];
						return Object(k.setIn)(e, [r], a.filter(e => e.id !== n))
					}
					case Fd.e:
						return l_;
					default:
						return e
				}
			};
			const b_ = {};
			var f_ = (e = b_, t) => {
				switch (t.type) {
					case Fd.b: {
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
			const y_ = {};
			var m_ = (e = y_, t) => {
					switch (t.type) {
						case Fd.c: {
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
				},
				O_ = r("./src/reddit/actions/subreddit/relatedSubreddits.ts");
			const h_ = {};
			var E_ = (e = h_, t) => {
				switch (t.type) {
					case O_.a: {
						const {
							subredditId: r,
							relatedSubreddits: s
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
			const __ = {};
			var I_ = (e = __, t) => {
				switch (t.type) {
					case Rh.b: {
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
					case Rh.e: {
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
					case Rh.f: {
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
					case Rh.g:
					case Rh.d: {
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
			const g_ = {};
			var S_ = (e = g_, t) => {
				switch (t.type) {
					case Nh.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case Nh.f: {
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
					case Ar.n: {
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
			const v_ = {};
			var j_ = (e = v_, t) => {
				switch (t.type) {
					case Fd.o: {
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
			const w_ = {};
			var T_ = (e = w_, t) => {
				switch (t.type) {
					case Fd.y: {
						const {
							id: r,
							survey: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Fd.z: {
						const {
							id: r,
							response: s
						} = t.payload, n = Object(k.setIn)(e, [r, "response"], s);
						return Object(k.setIn)(n, [r, "isEligible"], !1)
					}
					default:
						return e
				}
			};
			const D_ = {};
			var P_ = (e = D_, t) => {
				switch (t.type) {
					case qc.g: {
						const {
							subredditTopContent: r
						} = t.payload;
						return {
							...e,
							...r.subredditTopContent
						}
					}
					case wp.b: {
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
			const A_ = [];
			var C_ = (e = A_, t) => {
				switch (t.type) {
					case ge.b:
					case W.SUBREDDIT_LOADED: {
						const {
							trendingSubredditIds: r
						} = t.payload;
						return r && r.length ? r : e
					}
					default:
						return e
				}
			};
			const R_ = {};
			var k_ = (e = R_, t) => {
					switch (t.type) {
						case rh.d:
						case ns.B:
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
				N_ = Object(v.c)({
					about: nh,
					api: Xh,
					appliedFilters: rE,
					byCategory: nE,
					carousel: oE,
					communityInfo: iE,
					crosspostable: mE,
					duplicates: EE,
					gov: DE,
					models: LE,
					moderated: BE,
					notificationSettings: VE,
					onboarding: WE,
					powerupRecentSupporters: $E,
					powerups: zE,
					powerupsEmojis: ZE,
					powerupTopSupporters: r_,
					productOffers: a_,
					products: o_,
					progressModule: u_,
					questions: p_,
					rankings: f_,
					rankingsPageInfo: m_,
					related: E_,
					rules: I_,
					settings: S_,
					similar: j_,
					survey: T_,
					topContent: P_,
					trending: C_,
					unavailableModels: k_
				});
			const L_ = {};
			var x_ = Object($b.a)((e = L_, t) => {
					switch (t.type) {
						case W.SUBREDDIT_LOADED: {
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
							return Oe()({
								...e
							}, n)
						}
						case ei.o: {
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
				}, L_),
				U_ = Object(v.c)({
					data: x_
				}),
				M_ = r("./node_modules/lodash/values.js"),
				G_ = r.n(M_);
			const F_ = [];
			var B_ = (e = F_, t) => {
				switch (t.type) {
					case xu.d: {
						const {
							makeFavorite: r,
							multiredditsModelsState: s,
							multiredditPath: n
						} = t.payload;
						if (r) {
							const t = [...e],
								r = Ru(t, n, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							return t.splice(r, 0, n), t
						}
						return e.filter(e => e !== n)
					}
					case ve.u: {
						const {
							multireddits: e
						} = t.payload;
						return G_()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case xu.e: {
						const {
							follow: r,
							multiredditPath: s
						} = t.payload;
						return r ? e : e.filter(e => e !== s)
					}
					case ve.j: {
						const r = t.payload;
						return e.filter(e => e !== r)
					}
					default:
						return e
				}
			};
			var q_ = (e = null, t) => {
				switch (t.type) {
					case xu.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case xu.b:
					case xu.c:
						return null;
					default:
						return e
				}
			};
			var V_ = (e = !1, t) => {
				switch (t.type) {
					case xu.b:
					case xu.c:
						return !0;
					case xu.a:
						return !1;
					default:
						return e
				}
			};
			var H_ = (e = !1, t) => {
					switch (t.type) {
						case xu.b:
							return !0;
						case xu.c:
						case xu.a:
							return !1;
						default:
							return e
					}
				},
				W_ = Object(v.c)({
					errors: q_,
					fetched: V_,
					pending: H_
				});
			const K_ = [];
			var $_ = (e = K_, t) => {
				switch (t.type) {
					case xu.c: {
						const {
							profiles: e,
							favoriteProfileIds: r,
							favoriteSubredditIds: s
						} = t.payload;
						let n;
						return (n = r && r.length ? r : s ? s.filter(t => !!e[t]) : []).sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), n
					}
					case xu.f: {
						const {
							makeFavorite: r,
							identifier: s,
							profileModels: n
						} = t.payload, {
							id: a,
							type: c
						} = s;
						if (c !== Hf.a.PROFILE) return e;
						const o = e ? e.slice() : [];
						if (r) {
							const e = Ru(o, a, (e, t) => n[e].displayText.toLowerCase() > n[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, a)
						} else {
							const e = o.indexOf(a);
							o.splice(e, 1)
						}
						return o
					}
					case xu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, n = r.filter(t => t.type === Hf.a.PROFILE && e.indexOf(t.id) > -1);
						return !n.length || s ? e : n.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const Q_ = [];
			var z_ = (e = Q_, t) => {
				switch (t.type) {
					case xu.c: {
						const {
							subreddits: e,
							favoriteSubredditIds: r
						} = t.payload, s = r ? r.filter(t => !!e[t]) : [];
						return s.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), s
					}
					case xu.f: {
						const {
							makeFavorite: r,
							identifier: s,
							subredditModels: n
						} = t.payload, {
							id: a,
							type: c
						} = s;
						if (c !== Hf.a.SUBREDDIT) return e;
						const o = e ? e.slice() : [];
						if (r) {
							const e = Ru(o, a, (e, t) => n[e].displayText.toLowerCase() > n[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, a)
						} else {
							const e = o.indexOf(a);
							o.splice(e, 1)
						}
						return o
					}
					case xu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, n = r.filter(t => t.type === Hf.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !n.length || s ? e : n.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const J_ = [],
				X_ = e => (t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1;
			var Y_ = (e = J_, t) => {
					switch (t.type) {
						case ve.u: {
							const {
								multireddits: r
							} = t.payload, s = G_()(r).map(({
								url: e
							}) => e.toLowerCase()).sort(X_(r));
							return Pu()(e, s) ? e : s
						}
						case we.b: {
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
								d = Cu()(e, c).sort(X_(o));
							return Pu()(e, d) ? e : d
						}
						case xu.e: {
							const {
								follow: r,
								multiredditPath: s,
								multiredditsModelsState: n
							} = t.payload;
							return r ? [...e, s].sort(X_(n)) : e.filter(e => e !== s)
						}
						case ve.j: {
							const r = t.payload;
							return e.filter(e => e !== r)
						}
						case ve.g:
						case ve.m: {
							const {
								multireddit: r,
								multiredditsModelsState: s
							} = t.payload, n = {
								...s,
								[r.url]: r
							};
							return [...e, r.url].sort(X_(n))
						}
						default:
							return e
					}
				},
				Z_ = r("./node_modules/lodash/difference.js"),
				eI = r.n(Z_);
			const tI = [];
			var rI = (e = tI, t) => {
				switch (t.type) {
					case ku.n: {
						const {
							profileOrder: r
						} = t.payload;
						return cb()([...e, ...r])
					}
					case xu.c: {
						const {
							profiles: e
						} = t.payload, r = Object.keys(e);
						return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
					}
					case xu.h: {
						const {
							identifiers: r,
							profileModels: s,
							userIsSubscriber: n
						} = t.payload, a = r.filter(e => e.type === Hf.a.PROFILE);
						if (!a.length) return e;
						const c = a.map(e => e.id);
						return n ? cb()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : eI()(e, c)
					}
					default:
						return e
				}
			};
			const sI = [];
			var nI = (e = sI, t) => {
					switch (t.type) {
						case ku.n: {
							const {
								subredditOrder: r
							} = t.payload;
							return cb()([...e, ...r])
						}
						case xu.c: {
							const {
								subreddits: e
							} = t.payload, r = Object.keys(e);
							return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
						}
						case xu.h: {
							const {
								identifiers: r,
								subredditModels: s,
								userIsSubscriber: n
							} = t.payload, a = r.filter(e => e.type === Hf.a.SUBREDDIT && !!e.id);
							if (!a.length) return e;
							const c = a.map(e => e.id);
							return n ? cb()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : eI()(e, c)
						}
						default:
							return e
					}
				},
				aI = Object(v.c)({
					api: W_,
					favoriteMultiOrder: B_,
					favoriteProfileOrder: $_,
					favoriteSubredditOrder: z_,
					multiredditOrder: Y_,
					profileOrder: rI,
					subredditOrder: nI
				}),
				cI = r("./src/reddit/actions/survey/constants.ts");
			var oI = (e = null, t) => {
				switch (t.type) {
					case cI.c:
						return t.payload || null;
					default:
						return e
				}
			};
			var dI = (e = 1, t) => {
				switch (t.type) {
					case cI.d:
						return t.payload || 1;
					default:
						return e
				}
			};
			var iI = (e = !1, t) => {
				switch (t.type) {
					case cI.b:
						return !e;
					default:
						return e
				}
			};
			var uI = (e = !0, t) => {
					switch (t.type) {
						case cI.i:
							return !e;
						default:
							return e
					}
				},
				lI = Object(v.c)({
					activeDemoTrigger: oI,
					demoTriggerThreshold: dI,
					isDemoEnabled: iI,
					isSampleFactorEnabled: uI
				}),
				pI = r("./src/reddit/actions/tabBadging.ts");
			var bI = (e = !1, t) => {
					switch (t.type) {
						case pI.a:
							const {
								hasUnreadMessages: r
							} = t.payload;
							return r;
						default:
							return e
					}
				},
				fI = r("./src/reddit/actions/tags/constants.ts");
			const yI = {
				pending: !1,
				error: !1
			};
			var mI = (e = yI, t) => {
				switch (t.type) {
					case fI.l:
						return {
							...e, pending: !0
						};
					case fI.m:
						return {
							error: !1, pending: !1
						};
					case fI.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const OI = {
				pending: !1,
				error: !1
			};
			var hI = (e = OI, t) => {
				switch (t.type) {
					case fI.o:
						return {
							...e, pending: !0
						};
					case fI.p:
						return {
							error: !1, pending: !1
						};
					case fI.n:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const EI = {
				pending: !1,
				error: !1
			};
			var _I = (e = EI, t) => {
				switch (t.type) {
					case fI.t:
						return {
							...e, pending: !0
						};
					case fI.s:
					case fI.r:
					case fI.e:
					case fI.j:
						return {
							error: !1, pending: !1
						};
					case fI.q:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const II = {
				pending: !1,
				error: !1
			};
			var gI = (e = II, t) => {
				switch (t.type) {
					case fI.v:
						return {
							...e, pending: !0
						};
					case fI.w:
						return {
							error: !1, pending: !1
						};
					case fI.u:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const SI = {
				pending: !1,
				error: !1
			};
			var vI = (e = SI, t) => {
					switch (t.type) {
						case fI.g:
							return {
								...e, pending: !0
							};
						case fI.h:
							return {
								error: !1, pending: !1
							};
						case fI.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				jI = Object(v.c)({
					create: mI,
					deleteTag: hI,
					fetch: _I,
					update: gI,
					updatePrimaryTag: vI
				});
			const wI = {
				global: [],
				recommendedGlobal: []
			};
			var TI = (e = wI, t) => {
					switch (t.type) {
						case fI.w:
						case fI.r:
						case fI.e:
						case fI.j: {
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
				DI = r("./node_modules/lodash/uniqWith.js"),
				PI = r.n(DI),
				AI = r("./src/reddit/models/Option/index.ts");
			const CI = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var RI = (e = CI, t) => {
					switch (t.type) {
						case fI.d: {
							const {
								option: r
							} = t.payload;
							return {
								...e,
								selectedOptions: PI()([...e.selectedOptions || [], {
									...r
								}], AI.a)
							}
						}
						case fI.c: {
							const {
								option: r
							} = t.payload, s = e.selectedOptions.findIndex(e => Object(AI.a)(e, r));
							return e.selectedOptions.splice(s, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case fI.b: {
							const {
								input: r
							} = t.payload;
							return {
								...e,
								tagInput: r
							}
						}
						case fI.a: {
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
				kI = r("./src/reddit/helpers/tags/index.ts");
			const NI = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var LI = (e = NI, t) => {
					switch (t.type) {
						case fI.j: {
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
						case fI.w:
						case fI.s:
						case fI.r: {
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
								geoPlaces: d ? Object(k.set)(e.geoPlaces, o, d) : e.geoPlaces,
								suggestedItemTags: {
									...e.suggestedItemTags,
									[o]: {
										...c[o] || {}
									}
								},
								sortedItemTags: {
									...e.sortedItemTags,
									[o]: Object(kI.a)(a[o] || {})
								}
							}
						}
						case fI.p: {
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
						case fI.e: {
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
						case fI.h: {
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
						default:
							return e
					}
				},
				xI = r("./src/reddit/reducers/tags/selected/index.ts"),
				UI = Object(v.c)({
					api: jI,
					availableGlobalTagOrder: TI,
					models: LI,
					selected: xI.b,
					creation: RI
				}),
				MI = r("./src/reddit/actions/redditEmbed.ts"),
				GI = r("./src/reddit/actions/theme.ts"),
				FI = r("./src/reddit/actions/users.ts"),
				BI = r("./src/reddit/models/Theme/index.ts");
			const qI = {
				current: BI.c,
				cached: {}
			};
			var VI = (e = qI, t) => {
					switch (t.type) {
						case GI.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? BI.b : BI.c,
								cached: {}
							}
						}
						case Pr.a:
						case Pr.b:
						case Pr.h:
						case Pr.i:
						case Pr.f:
						case Pr.j:
						case je.e:
						case je.h:
						case F.a:
						case F.e:
						case F.b:
						case F.f:
						case F.d:
						case F.h:
						case ge.b:
						case W.SUBREDDIT_LOADED:
						case we.b:
						case we.a:
						case ge.f:
						case MI.b:
						case $.i:
						case Re.g:
						case H.c:
						case Ar.j:
						case Te.PAGE_LOADED:
						case Ls.PAGE_LOADED:
						case FI.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: BI.b,
									cached: {}
								} : {
									current: BI.c,
									cached: {}
								}
							}
							return e;
						case B.d:
						case B.e:
						case De.a:
						case De.b:
						case De.d:
						case De.e:
						case q.PROFILE_POSTS_FAILED:
						case q.PROFILE_POSTS_LOADED: {
							const {
								account: r
							} = t.payload;
							return r ? r.nightmode ? {
								current: BI.b,
								cached: {}
							} : {
								current: BI.c,
								cached: {}
							} : e
						}
						case G.h:
						case G.j:
						case G.i:
						case G.g:
						case G.f:
						case G.n:
						case G.m:
						case G.p:
						case G.q:
						case G.w:
						case G.v:
							if (t.payload && t.payload.response && t.payload.response.preferences && "nightmode" in t.payload.response.preferences) {
								const {
									nightmode: e
								} = t.payload.response.preferences;
								return e ? {
									current: BI.b,
									cached: {}
								} : {
									current: BI.c,
									cached: {}
								}
							}
							return e;
						case Ar.i: {
							if (!t.payload) return e;
							const {
								nightmode: r
							} = t.payload;
							return r ? {
								current: BI.b,
								cached: {}
							} : {
								current: BI.c,
								cached: {}
							}
						}
						case b.d:
							return {
								current: BI.c, cached: {}
							};
						case b.e:
							return t.payload.nightmodeTempUpdated ? {
								current: BI.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				HI = r("./src/reddit/actions/toaster.ts");
			const WI = [];
			var KI = (e = WI, t) => {
					switch (t.type) {
						case HI.c: {
							const r = t.payload,
								s = [];
							let n = !1;
							for (const t of e) {
								const e = t.id === r.id ? r : t;
								s.push(e), n = n || e === r
							}
							return n || s.push(r), s
						}
						case HI.b: {
							const r = t.payload;
							return e.filter(e => e.id !== r)
						}
						default:
							return e
					}
				},
				$I = r("./src/reddit/actions/tooltip.ts");
			var QI = (e = null, t) => {
					switch (t.type) {
						case $I.c: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : r
						}
						case $I.a: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? e : r
						}
						case $I.b: {
							const {
								tooltipId: r
							} = t.payload;
							return null !== e ? e : r || null
						}
						case $I.e: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : e
						}
						case ee.K:
						case $I.d:
						case u.b:
						case So.b:
						case So.c:
						case So.a:
							return null;
						default:
							return e
					}
				},
				zI = r("./src/reddit/actions/tracing.ts");
			const JI = {
				traceId: void 0
			};
			var XI = (e = JI, t) => {
					switch (t.type) {
						case zI.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				YI = r("./src/lib/asyncActions/index.ts"),
				ZI = r("./src/reddit/actions/reCaptchaEnterprise.ts");
			const eg = Object(YI.c)(ZI.c.requestedActionType, ZI.c.succeededActionType, ZI.c.failedActionType),
				tg = Object(YI.c)(ZI.a.requestedActionType, ZI.a.succeededActionType, ZI.a.failedActionType),
				rg = Object(YI.c)(ZI.d.requestedActionType, ZI.d.succeededActionType, ZI.d.failedActionType);
			var sg = Object(v.c)({
					load: eg,
					execute: tg,
					send: rg
				}),
				ng = r("./src/reddit/actions/tracking.ts");
			const ag = {};
			var cg = (e = ag, t) => {
					switch (t.type) {
						case ng.a: {
							const {
								routeKey: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case ng.b: {
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
				og = Object(v.c)({
					reCaptchaEnterprise: sg,
					viewportDataLoaded: cg
				}),
				dg = r("./src/reddit/actions/trafficStats/constants.ts");
			var ig = (e = !1, t) => {
				switch (t.type) {
					case dg.c:
						return !0;
					case dg.b:
					case dg.a:
						return !1;
					default:
						return e
				}
			};
			var ug = (e = null, t) => {
					switch (t.type) {
						case dg.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case dg.c:
							return null;
						default:
							return e
					}
				},
				lg = Object(v.c)({
					pending: ig,
					trafficStats: ug
				});
			var pg = (e = null, t) => {
				switch (t.type) {
					case d.s:
					case d.t:
						return null;
					case d.q: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var bg = (e = !1, t) => {
					switch (t.type) {
						case d.s:
							return !0;
						case d.q:
						case d.t:
							return !1;
						default:
							return e
					}
				},
				fg = Object(v.c)({
					error: pg,
					pending: bg
				});
			var yg = (e = null, t) => {
				switch (t.type) {
					case d.r:
						return (t.payload ? t.payload.contentId : null) || null;
					case s.b:
					case d.t:
						return null;
					default:
						return e
				}
			};
			var mg = (e = "", t) => {
				switch (t.type) {
					case d.r:
						return (t.payload ? t.payload.recipient : "") || "";
					case d.t:
						return "";
					default:
						return e
				}
			};
			var Og = (e = null, t) => {
					switch (t.type) {
						case d.r:
							return t.payload && t.payload.publicAddress || null;
						case s.b:
						case d.t:
							return null;
						default:
							return e
					}
				},
				hg = Object(v.c)({
					api: fg,
					contentId: yg,
					initialRecipient: mg,
					publicAddress: Og
				}),
				Eg = Object(v.c)({
					communityPoints: hg
				}),
				_g = r("./src/reddit/actions/search/trending.ts");
			const Ig = [];
			var gg = (e = Ig, t) => {
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case _g.a: {
							const {
								items: r
							} = t.payload;
							return r || e
						}
						default:
							return e
					}
				},
				Sg = Object(v.c)({
					models: gg
				});
			var vg = r("./src/reddit/routes/premium/index.ts");
			const jg = {};
			var wg = (e = jg, t) => {
					switch (t.type) {
						case hy.a: {
							const {
								trophies: r
							} = t.payload;
							return Object.values(r).forEach(e => {
								"t6_bf" === e.awardId && (e.url = vg.b)
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				Tg = r("./src/reddit/actions/upload.ts"),
				Dg = r("./src/reddit/models/Upload/index.ts");
			const Pg = {};
			var Ag = (e = Pg, t) => {
					switch (t.type) {
						case Tg.d: {
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
									status: Dg.a.PENDING
								}
							}
						}
						case Tg.h: {
							const {
								key: r
							} = t.payload, s = e[r];
							return {
								...e,
								[r]: {
									...s,
									status: Dg.a.UPLOADING
								}
							}
						}
						case Tg.c: {
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
						case Tg.e: {
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
						case Tg.g: {
							const {
								key: r,
								url: s
							} = t.payload, n = e[r];
							return {
								...e,
								[r]: {
									...n,
									status: Dg.a.SUCCESS,
									url: s
								}
							}
						}
						case Tg.b: {
							const {
								key: r,
								error: s
							} = t.payload, n = e[r];
							return {
								...e,
								[r]: {
									...n,
									status: Dg.a.FAILED,
									error: s
								}
							}
						}
						case Tg.a: {
							const {
								key: r
							} = t.payload, s = e[r];
							return {
								...e,
								[r]: {
									...s,
									status: Dg.a.CANCELED
								}
							}
						}
						case Tg.f: {
							const {
								key: r
							} = t.payload, s = e[r];
							return s.metadata.localUrl && window.URL.revokeObjectURL(s.metadata.localUrl), Ns()(e, r)
						}
						default:
							return e
					}
				},
				Cg = r("./src/reddit/actions/upvotePrompt.ts");
			var Rg = (e = 0, t) => {
				switch (t.type) {
					case Cg.a:
						return ++e;
					default:
						return e
				}
			};
			const kg = {};
			var Ng = (e = kg, t) => {
					switch (t.type) {
						case l.d:
						case d.a:
						case o.f:
						case d.t: {
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
						case d.w: {
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
				Lg = r("./src/reddit/actions/inbox.ts"),
				xg = r("./src/reddit/actions/pages/appeal/constants.ts"),
				Ug = r("./src/reddit/actions/pages/userDataRequest/index.ts"),
				Mg = r("./src/reddit/actions/sso/constants.ts"),
				Gg = r("./src/reddit/endpoints/profile/info.ts");
			const Fg = (e, t) => {
				const {
					gender: r,
					...s
				} = {
					...e
				};
				if (!t || Pu()(s, t)) return e;
				const {
					karma: n
				} = t;
				return {
					...t,
					karma: {
						...Gg.a,
						...null == s ? void 0 : s.karma,
						...n
					},
					gender: r
				}
			};
			var Bg = Object($b.a)((e = null, t) => {
				var r, n;
				switch (t.type) {
					case xg.a:
					case xg.b:
					case fm.b:
					case fm.c:
					case Pr.a:
					case Pr.b:
					case Pr.f:
					case Pr.h:
					case Pr.i:
					case Pr.j:
					case je.e:
					case je.h:
					case je.g:
					case ve.q:
					case ve.r:
					case F.a:
					case F.e:
					case F.b:
					case F.f:
					case ge.a:
					case ge.b:
					case we.a:
					case we.b:
					case W.SUBREDDIT_FAILED:
					case ku.l:
					case B.b:
					case B.a:
					case B.e:
					case B.d:
					case V.c:
					case V.i:
					case De.e:
					case De.d:
					case De.b:
					case De.a:
					case q.PROFILE_POSTS_LOADED:
					case q.PROFILE_POSTS_FAILED:
					case W.SUBREDDIT_LOADED:
					case H.a:
					case H.c:
					case Te.PAGE_LOADED:
					case Ls.PAGE_LOADED:
					case Re.e:
					case Re.g:
					case MI.a:
					case MI.b:
					case Ar.j:
					case Ug.b:
					case FI.c:
					case Ld.TOPIC_DATA_LOADED:
						return Fg(e, t.payload.account);
					case FI.o:
						return e ? {
							...e,
							email: t.payload
						} : e;
					case G.i:
					case G.f:
					case G.m:
					case G.p:
					case G.v:
					case G.h:
					case G.e:
					case G.l:
					case G.o:
					case G.u: {
						const {
							response: r
						} = t.payload;
						return r ? Fg(e, r.account) : e
					}
					case FI.a:
						return e ? {
							...e,
							seenLayoutSwitch: !0
						} : e;
					case s.d:
						return e ? {
							...e,
							seenRedesignModal: !0
						} : e;
					case Ar.l:
					case Ar.k: {
						const r = t.payload;
						return e && "profileIcon" === r.key ? {
							...e,
							accountIcon: r.imageUrl
						} : e
					}
					case ee.B:
					case ee.s: {
						const {
							coins: r
						} = t.payload;
						return e ? {
							...e,
							coins: r
						} : e
					}
					case ee.eb: {
						const {
							userName: r,
							karma: s
						} = t.payload;
						return r.toLowerCase() !== (e && Object(z.e)(e).toLowerCase()) ? e : e && {
							...e,
							karma: {
								...Gg.a,
								...null == e ? void 0 : e.karma,
								...s
							}
						}
					}
					case Se.w: {
						const {
							coins: r
						} = t.payload;
						return r && e ? {
							...e,
							coins: r
						} : e
					}
					case wl.m: {
						const {
							price: r
						} = t.payload;
						return (null == e ? void 0 : e.coins) && r ? {
							...e,
							coins: e.coins - r
						} : e
					}
					case Lg.a: {
						const {
							inboxCount: r
						} = t.payload;
						return e ? {
							...e,
							inboxCount: r
						} : e
					}
					case Mg.a: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...s, r]
						} : e
					}
					case Mg.b: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: s.filter(e => e !== r)
						} : e
					}
					case Ro.c: {
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
					case nl.a:
					case nl.b: {
						if (!(null == t ? void 0 : t.payload)) return e;
						const r = t.payload;
						return e ? {
							...e,
							gender: {
								genderCategory: r.genderCategory,
								definedGender: r.definedGender
							}
						} : e
					}
					case FI.l: {
						if (!(null === (n = null === (r = null == t ? void 0 : t.payload) || void 0 === r ? void 0 : r.avatar) || void 0 === n ? void 0 : n.headshot_image_url) || !e) return e;
						const s = t.payload;
						return {
							...e,
							accountIcon: s.avatar.headshot_image_url,
							snoovatarFullBodyAsset: s.avatar.image_url
						}
					}
					default:
						return e
				}
			}, null);
			var qg = (e = null, t) => {
				switch (t.type) {
					case FI.n:
					case FI.o:
						return null;
					case FI.m:
						return t.payload;
					default:
						return e
				}
			};
			var Vg = (e = !1, t) => {
					switch (t.type) {
						case FI.n:
							return !0;
						case FI.o:
						case FI.m:
							return !1;
						default:
							return e
					}
				},
				Hg = Object(v.c)({
					error: qg,
					pending: Vg
				}),
				Wg = Object(v.c)({
					api: Hg
				});
			var Kg = (e = !1, t) => {
				switch (t.type) {
					case FI.j:
						return !0;
					default:
						return e
				}
			};
			var $g = (e = !1, t) => {
					switch (t.type) {
						case FI.i:
							return !0;
						case FI.j:
						case FI.h:
							return !1;
						default:
							return e
					}
				},
				Qg = Object(v.c)({
					pending: $g,
					emailSent: Kg
				}),
				zg = Object(v.c)({
					api: Qg
				}),
				Jg = Object(v.c)({
					changeEmail: Wg,
					sendResetEmail: zg
				}),
				Xg = r("./src/reddit/models/WhitelistAndBlocked.ts");
			const Yg = {};
			var Zg = (e = Yg, t) => {
				switch (t.type) {
					case mt.f:
						return {
							...e, new: Xg.a.pending
						};
					case mt.d:
						return {
							...e, new: Xg.a.error
						};
					case mt.e:
						return {
							...e, new: Xg.a.waitingForRequest
						};
					case mt.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Xg.a.pending
						}
					}
					case mt.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Xg.a.error
						}
					}
					case mt.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Xg.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const eS = [];
			var tS = (e = eS, t) => {
					switch (t.type) {
						case mt.e:
							return [t.payload, ...e];
						case mt.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case Ar.j:
							return t.payload.blockedUsers;
						default:
							return e
					}
				},
				rS = Object(v.c)({
					api: Zg,
					data: tS
				}),
				sS = r("./src/reddit/actions/chat/constants.ts"),
				nS = r("./src/reddit/actions/chat/userSettings.ts");
			const aS = sS.a.anybody;
			var cS = (e = aS, t) => {
					switch (t.type) {
						case nS.a:
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
				oS = Object(v.c)({
					invitePolicy: cS
				});
			const dS = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var iS = (e = null, t) => {
				switch (t.type) {
					case Te.PAGE_LOADED: {
						const {
							drafts: r
						} = t.payload;
						return e && Pu()(e, r) ? e : {
							...e,
							...r
						}
					}
					case ns.P: {
						const {
							response: {
								draftsCount: r
							}
						} = t.payload;
						return dS(e, r)
					}
					case Hr.e: {
						const {
							postDraftIds: r
						} = t.payload;
						return dS(e, r.length)
					}
					case Hr.c:
					case Hr.l: {
						const {
							draftsCount: r
						} = t.payload;
						return dS(e, r)
					}
					default:
						return e
				}
			};
			const uS = {};
			var lS = (e = uS, t) => {
					switch (t.type) {
						case tc.a: {
							const e = t.payload.experimentVariants;
							return ul(e)
						}
						default:
							return e
					}
				},
				pS = r("./src/reddit/actions/global/constants.ts");
			const bS = {};
			var fS = (e = bS, t) => {
					switch (t.type) {
						case pS.a: {
							const r = t.payload;
							return null === r.local_persisted_experiments_store || void 0 === r.local_persisted_experiments_store ? e : r.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				yS = Object(v.c)({
					byName: lS,
					localPersisted: fS
				}),
				mS = r("./src/reddit/actions/googleOneTap/index.ts");
			var OS = (e = !1, t) => {
				switch (t.type) {
					case mS.a:
						return !0;
					default:
						return e
				}
			};
			var hS = (e = !1, t) => {
				switch (t.type) {
					case Ar.f:
						return !0;
					case Ar.e:
						return !1;
					default:
						return e
				}
			};
			var ES = (e = "", t) => {
				switch (t.type) {
					case Ar.j:
						return "string" == typeof t.payload.language ? t.payload.language : e;
					default:
						return e
				}
			};
			const _S = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var IS = (e = _S, t) => {
					switch (t.type) {
						case FI.b:
							return t.payload;
						default:
							return e
					}
				},
				gS = r("./src/reddit/actions/notifications/constants.ts"),
				SS = r("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var vS = (e = null, t) => {
				switch (t.type) {
					case SS.a:
					case SS.d:
					case gS.a:
						return t.payload && t.payload.error || null;
					case SS.c:
					case SS.f:
					case SS.a:
					case gS.c:
					case gS.b:
						return null;
					default:
						return e
				}
			};
			var jS = (e = !1, t) => {
				switch (t.type) {
					case gS.c:
						return !1;
					case gS.b:
						return !0;
					default:
						return e
				}
			};
			var wS = (e = !1, t) => {
					switch (t.type) {
						case gS.c:
							return !0;
						case gS.b:
						case gS.a:
							return !1;
						default:
							return e
					}
				},
				TS = Object(v.c)({
					error: vS,
					loaded: jS,
					pending: wS
				});
			var DS = (e = null, t) => {
				switch (t.type) {
					case gS.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case gS.f:
					case gS.e:
						return null;
					default:
						return e
				}
			};
			var PS = (e = !1, t) => {
				switch (t.type) {
					case gS.f:
						return !1;
					case gS.e:
						return !0;
					default:
						return e
				}
			};
			var AS = (e = !1, t) => {
					switch (t.type) {
						case gS.f:
							return !0;
						case gS.e:
						case gS.d:
							return !1;
						default:
							return e
					}
				},
				CS = Object(v.c)({
					error: DS,
					loaded: PS,
					pending: AS
				}),
				RS = Object(v.c)({
					getPreferences: TS,
					setPreferences: CS
				});
			const kS = {
				byId: {},
				allIds: []
			};
			var NS = (e = kS, t) => {
				switch (t.type) {
					case SS.b: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case SS.g: {
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
			const LS = {
				byId: {},
				allIds: []
			};
			var xS = (e = LS, t) => {
					switch (t.type) {
						case SS.b: {
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
				US = Object(v.c)({
					sections: xS,
					rows: NS
				}),
				MS = r("./src/lib/notifications/constants.ts");
			var GS = (e = !1, t) => {
				switch (t.type) {
					case MS.j:
						return !0;
					case MS.b:
					case MS.d:
					case MS.e:
						return !1;
					default:
						return e
				}
			};
			const FS = {
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
			var BS = (e = FS, t) => {
				switch (t.type) {
					case gS.b:
					case gS.f:
					case gS.d: {
						const {
							preferences: r
						} = t.payload;
						return ba()(r) ? e : r
					}
					default:
						return e
				}
			};
			const qS = {
				byId: {},
				allIds: []
			};
			var VS = (e = qS, t) => {
				switch (t.type) {
					case SS.e: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case SS.g: {
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
			var WS = (e = HS, t) => {
					switch (t.type) {
						case SS.e: {
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
				KS = Object(v.c)({
					sections: WS,
					rows: VS
				}),
				$S = Object(v.c)({
					api: RS,
					emailSettingsLayout: US,
					isNotificationPromptVisible: GS,
					preferences: BS,
					pushSettingsLayout: KS
				});
			const QS = {};
			var zS = (e = QS, t) => {
				switch (t.type) {
					case o.i:
					case $e.h: {
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
					case l.d: {
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
			const JS = {},
				XS = (e, t) => `${e}_${t||new Date}`;
			var YS = (e = JS, t) => {
				switch (t.type) {
					case ee.Ab: {
						const r = t.payload.powerups;
						if (r) {
							const {
								allocation: t
							} = r, s = (t || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
								...e,
								[XS(t.subredditInfo.id, t.allocatedAt)]: t
							}), {});
							return {
								...e,
								...s
							}
						}
						return e
					}
					case ee.pb: {
						const {
							userPowerups: r
						} = t.payload, s = ((null == r ? void 0 : r.allocation) || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
							...e,
							[XS(t.subredditInfo.id, t.allocatedAt)]: t
						}), {});
						return {
							...e,
							...s
						}
					}
					case ee.U: {
						const {
							subredditId: r,
							powerupsCount: s,
							allocatedAt: n
						} = t.payload;
						if (s < 0) {
							const t = XS(r, n),
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
					case ee.P: {
						const {
							subredditId: r,
							allocatedAt: s
						} = t.payload, n = XS(r, s), a = e[n];
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
			var ZS = (e = null, t) => {
				switch (t.type) {
					case ee.Ab: {
						const r = t.payload.powerups;
						return r ? Ns()({
							...e,
							...r
						}, "allocation") : e
					}
					case ee.pb: {
						const {
							userPowerups: r
						} = t.payload;
						return r ? Ns()({
							...e,
							...r
						}, "allocation") : e
					}
					case ee.U: {
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
					case ee.V: {
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
			var ev, tv = (e = !1, t) => {
					switch (t.type) {
						case ee.zb:
						case ee.Bb:
							return !1;
						case ee.Ab:
							return !0;
						default:
							return e
					}
				},
				rv = Object(v.c)({
					allocationByKey: YS,
					data: ZS,
					fetched: tv
				}),
				sv = r("./src/reddit/reducers/user/prefs/index.ts");
			! function(e) {
				e.UNFETCHED = "default", e.PENDING = "pending", e.LOADED = "loaded", e.FAILED = "failed"
			}(ev || (ev = {}));
			const nv = {
				status: ev.UNFETCHED,
				subscriptions: []
			};
			var av = (e = nv, t) => {
				switch (t.type) {
					case ee.Eb:
						return {
							...e, status: ev.PENDING
						};
					case ee.Db: {
						const {
							subscriptions: r
						} = t.payload;
						return r ? {
							...e,
							subscriptions: r,
							status: ev.LOADED
						} : e
					}
					case ee.Cb:
						return {
							...e, status: ev.FAILED
						};
					default:
						return e
				}
			};
			var cv = (e = "", t) => {
				switch (t.type) {
					case FI.d:
						return t.payload;
					default:
						return e
				}
			};
			var ov = (e = null, t) => {
				switch (t.type) {
					case im.a:
					case im.b:
					case im.c:
					case im.e:
						return t.payload;
					case im.d:
						return null;
					default:
						return e
				}
			};
			var dv = (e = !1, t) => {
				switch (t.type) {
					case im.f:
						return !0;
					default:
						return e
				}
			};
			var iv = (e = "", t) => {
				switch (t.type) {
					case FI.k:
						return t.payload;
					default:
						return e
				}
			};
			var uv = (e = null, t) => {
				switch (t.type) {
					case tc.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var lv = (e = null, t) => {
					switch (t.type) {
						case tc.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				pv = Object(v.c)({
					isEmployee: uv,
					isLoggedIn: lv
				});
			var bv = (e = null, t) => {
					switch (t.type) {
						case Ar.r: {
							const {
								topContentDismissal: r
							} = t.payload;
							return e && Pu()(e, r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				fv = r("./src/reddit/actions/userWhitelist.ts");
			const yv = {};
			var mv = (e = yv, t) => {
				switch (t.type) {
					case fv.e:
						return {
							...e, new: Xg.a.pending
						};
					case fv.d:
						return {
							...e, new: Xg.a.error
						};
					case fv.f:
						return {
							...e, new: Xg.a.waitingForRequest
						};
					case fv.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Xg.a.pending
						}
					}
					case fv.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Xg.a.error
						}
					}
					case fv.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Xg.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const Ov = [];
			var hv = (e = Ov, t) => {
					switch (t.type) {
						case fv.f:
							return [t.payload, ...e];
						case fv.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case Ar.j:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				Ev = Object(v.c)({
					api: mv,
					data: hv
				}),
				_v = Object(v.c)({
					account: Bg,
					accountSettings: Jg,
					blocked: rS,
					chatSettings: oS,
					drafts: iS,
					experiments: yS,
					googleOneTapEnabled: OS,
					isCustomizeFlyoutShowing: hS,
					topContentDismissalPrefsSet: bv,
					language: ES,
					loid: IS,
					notificationPrefs: $S,
					ownedBadges: zS,
					powerups: rv,
					prefs: sv.c,
					productOfferSubscriptions: av,
					reddaid: cv,
					session: ov,
					sessionRefreshFailed: dv,
					sessionTracker: iv,
					temporaryGQL: pv,
					wallets: Ng,
					whitelist: Ev
				});
			var Iv = (e = null, t) => {
				switch (t.type) {
					case Ug.a:
						return t.payload || null;
					case Ug.b:
					case Ug.c:
						return null;
					default:
						return e
				}
			};
			var gv = (e = !1, t) => {
				switch (t.type) {
					case Ug.c:
						return !0;
					case Ug.b:
					case Ug.a:
						return !1;
					default:
						return e
				}
			};
			var Sv = (e = !1, t) => {
				switch (t.type) {
					case Ug.b:
						return !0;
					case Ug.a:
					case Ug.c:
						return !1;
					default:
						return e
				}
			};
			var vv = (e = !1, t) => {
					switch (t.type) {
						case Ug.b:
							return t.payload.userDataExportEligibility;
						case Ug.a:
						case Ug.c:
							return !1;
						default:
							return e
					}
				},
				jv = Object(v.c)({
					error: Iv,
					pending: gv,
					success: Sv,
					userDataExportEligibility: vv
				}),
				wv = Object(v.c)({
					userDataRequestPageApi: jv
				});
			const Tv = {};
			var Dv = (e = Tv, t) => {
				switch (t.type) {
					case FI.g:
					case FI.f: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case FI.e: {
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
			var Pv = (e = !1, t) => {
					switch (t.type) {
						case FI.g:
							return !0;
						case FI.f:
						case FI.e:
							return !1;
						default:
							return e
					}
				},
				Av = Object(v.c)({
					error: Dv,
					pending: Pv
				});
			const Cv = {};
			var Rv = (e = Cv, t) => {
				switch (t.type) {
					case $e.e: {
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
					case $e.b: {
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
					case $e.a: {
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
					case o.a: {
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
			const kv = {},
				Nv = (e, t) => {
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					return r.forEach(r => {
						const n = e[r],
							a = t[r];
						n && Pu()(n, a) || (s[r.toLowerCase()] = a)
					}), Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var Lv = (e = kv, t) => {
					switch (t.type) {
						case FI.f: {
							const {
								data: r
							} = t.payload;
							return Nv(e, r)
						}
						case ku.k: {
							const {
								user: r
							} = t.payload;
							return Nv(e, {
								[r.username]: r
							})
						}
						case ee.s: {
							const {
								gildee: r
							} = t.payload;
							if (!r) return e;
							const s = e[r.toLowerCase()];
							if (!s) return e;
							const n = s.awardedLastMonth,
								a = n ? n.totalCount + 1 : 1,
								c = n && n.topAward;
							return c ? Nv(e, {
								[r.toLowerCase()]: {
									...s,
									awardedLastMonth: {
										totalCount: a,
										topAward: c
									}
								}
							}) : e
						}
						case ee.eb: {
							const {
								userName: r,
								karma: s
							} = t.payload, n = e[r.toLowerCase()];
							if (!n) return e;
							const a = {
								...Gg.a,
								...s
							};
							return Nv(e, {
								[r.toLowerCase()]: {
									...n,
									karma: a
								}
							})
						}
						case Ar.l:
						case Ar.k: {
							const {
								imageUrl: r,
								key: s,
								username: n
							} = t.payload;
							if ("profileIcon" !== s) return e;
							const a = n.toLowerCase(),
								c = e[a];
							return c ? Nv(e, {
								[a]: {
									...c,
									accountIcon: r
								}
							}) : e
						}
						case FI.c:
							const r = t.payload.account;
							if (!r || !e) return e;
							const s = Object(z.e)(r).toLowerCase(),
								n = e[s];
							return n ? Nv(e, {
								[s]: {
									...n,
									accountIcon: r.accountIcon,
									snoovatarFullBodyAsset: r.snoovatarFullBodyAsset
								}
							}) : e;
						case Ar.n: {
							const {
								additional: r,
								settings: s
							} = t.payload;
							if (r.enableFollowers === r.prevEnableFollowers) return e;
							const n = s.currentUserName.toLowerCase(),
								a = e[n];
							return a ? Nv(e, {
								[n]: {
									...a,
									enableFollowers: r.enableFollowers
								}
							}) : e
						}
						default:
							return e
					}
				},
				xv = r("./src/reddit/actions/usernameAvailable.ts");
			const Uv = {};
			var Mv = (e = Uv, t) => {
				switch (t.type) {
					case xv.a: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: xv.b.Available
						}
					}
					case xv.c: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: xv.b.Error
						}
					}
					case xv.d: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: xv.b.Pending
						}
					}
					case xv.e: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: xv.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			const Gv = {};
			var Fv = (e = Gv, t) => {
				switch (t.type) {
					case ee.gb: {
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
			var Bv = (e = !1, t) => {
					switch (t.type) {
						case ee.fb:
						case ee.hb:
							return !1;
						case ee.gb:
							return !0;
						default:
							return e
					}
				},
				qv = Object(v.c)({
					allocationByKey: Fv,
					fetched: Bv
				});
			var Vv = (e = null, t) => {
				switch (t.type) {
					case ee.vb:
						return t.payload;
					case ee.xb:
					case ee.wb:
						return null;
					default:
						return e
				}
			};
			var Hv = (e = !1, t) => {
					switch (t.type) {
						case ee.wb:
						case ee.vb:
							return !1;
						case ee.xb:
							return !0;
						default:
							return e
					}
				},
				Wv = Object(v.c)({
					error: Vv,
					pending: Hv
				});
			var Kv = (e = null, t) => {
				switch (t.type) {
					case ee.yb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const $v = {};
			var Qv = (e = $v, t) => {
				switch (t.type) {
					case ee.wb: {
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
			const zv = {};
			var Jv = (e = zv, t) => {
					switch (t.type) {
						case ee.wb: {
							const {
								postId: r,
								topAwardersRank: s
							} = t.payload;
							return {
								...e,
								[r]: (s || []).sort((e, t) => e.rank - t.rank)
							}
						}
						case ee.s: {
							const {
								id: r
							} = t.payload;
							return Ns()(e, [r])
						}
						default:
							return e
					}
				},
				Xv = Object(v.c)({
					api: Wv,
					currentPostId: Kv,
					currentRank: Qv,
					list: Jv
				}),
				Yv = Object(v.c)({
					api: Av,
					appliedBadges: Rv,
					models: Lv,
					nameAvailable: Mv,
					topAwarders: Xv,
					powerups: qv
				});
			const Zv = {};
			var ej = (e = Zv, t) => {
					var r, s, n;
					switch (t.type) {
						case F.b:
						case F.f:
						case W.SUBREDDIT_LOADED:
						case $.i:
						case H.c:
						case Te.PAGE_LOADED:
						case Ls.PAGE_LOADED: {
							const {
								structuredStyles: a
							} = t.payload;
							if (!(null === (n = null === (s = null === (r = null == a ? void 0 : a.data) || void 0 === r ? void 0 : r.content) || void 0 === s ? void 0 : s.widgets) || void 0 === n ? void 0 : n.layout)) return e;
							const c = a.data.content.widgets.layout.idCardWidget,
								o = Object.keys(t.payload.subredditAboutInfo || {});
							if (1 !== o.length) return e;
							const d = o[0];
							return {
								...e,
								[d]: c
							}
						}
						default:
							return e
					}
				},
				tj = r("./src/reddit/actions/widgets/constants.ts");
			const rj = {};
			var sj = (e = rj, t) => {
					var r;
					switch (t.type) {
						case F.b:
						case F.f:
						case H.c:
						case $.i:
						case W.SUBREDDIT_LOADED:
						case Te.PAGE_LOADED: {
							const {
								structuredStyles: s
							} = t.payload;
							if (!(s && s.data && s.data.content)) return e;
							const n = null === (r = s.data.content.widgets) || void 0 === r ? void 0 : r.items,
								a = s.data.content.widgets.layout.topbar.order.filter(e => n[e] && "menu" === n[e].kind);
							if (!a.length) return e;
							const c = Object.keys(t.payload.subredditAboutInfo || {});
							if (1 !== c.length) return e;
							const o = c[0];
							return {
								...e,
								[o]: a[0]
							}
						}
						case tj.g: {
							const r = t.payload;
							return "menu" !== r.widget.kind ? e : {
								...e,
								[r.subredditId]: r.widgetId
							}
						}
						case tj.h: {
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
				nj = r("./src/reddit/helpers/widgets/index.tsx");
			const aj = {};
			var cj = (e = aj, t) => {
				switch (t.type) {
					case W.SUBREDDIT_LOADED: {
						const r = t.payload,
							s = r.structuredStyles && r.structuredStyles.data && r.structuredStyles.data.content;
						if (!s) return e;
						const n = s.widgets;
						return {
							...e,
							...n.items
						}
					}
					case tj.b: {
						const r = t.payload;
						return {
							...e,
							...r.widgets.items
						}
					}
					case b.k: {
						const t = {
							...e
						};
						return Object.keys(t).forEach(e => {
							t[e] = {
								...t[e],
								styles: Object(nj.g)()
							}
						}), t
					}
					case tj.e: {
						const r = t.payload;
						return {
							...e,
							...r.widgets.items
						}
					}
					case tj.i:
					case tj.g: {
						const r = t.payload;
						return {
							...e,
							[r.widget.id]: r.widget
						}
					}
					case tj.h: {
						const r = t.payload,
							s = {
								...e
							};
						return delete s[r.widgetId], s
					}
					case F.b:
					case F.f:
					case W.SUBREDDIT_LOADED:
					case $.i:
					case H.c:
					case Te.PAGE_LOADED:
					case Ls.PAGE_LOADED: {
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
					case xu.h: {
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
					case Nh.f: {
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
			const oj = {};
			var dj = (e = oj, t) => {
				switch (t.type) {
					case W.SUBREDDIT_LOADED:
					case F.f:
					case $.i:
					case Te.PAGE_LOADED: {
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
			const ij = {};
			var uj = (e = ij, t) => {
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case Te.PAGE_LOADED:
						case Ls.PAGE_LOADED: {
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
						case tj.e:
						case tj.b: {
							const r = t.payload;
							return {
								...e,
								[r.subredditId]: r.widgets.layout.sidebar.order
							}
						}
						case tj.f: {
							const r = t.payload;
							return {
								...e,
								[r.subredditId]: r.widgetIds
							}
						}
						case tj.g: {
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
						case tj.h: {
							const r = t.payload;
							if (!e[r.subredditId]) return e;
							const s = e[r.subredditId].filter(e => e !== r.widgetId);
							return {
								...e,
								[r.subredditId]: s
							}
						}
						case F.b:
						case F.f:
						case W.SUBREDDIT_LOADED:
						case H.c:
						case $.i:
						case Te.PAGE_LOADED:
						case Ls.PAGE_LOADED: {
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
				},
				lj = Object(v.c)({
					idCardIds: ej,
					menuIds: sj,
					models: cj,
					moderatorIds: dj,
					sidebar: uj
				}),
				pj = r("./src/reddit/actions/wrappedReddit/constants.ts");
			const bj = {
				isCardsLoading: !1,
				cardsLoadingError: null,
				cards: [],
				shareCardWasOpened: !1,
				currentCardIndex: 0,
				subreddits: []
			};
			const fj = {
				accountManagerModalData: a,
				activeModal: y,
				ads: _,
				apiRequestState: S,
				appBadges: C,
				authorFlair: Z,
				awards: Ke,
				badges: ot,
				blockedRedditors: yt,
				blockUser: gt,
				brandSafety: vt,
				chat: tr,
				claimGold: ir,
				commentsListTruncated: lr,
				communityFlairs: fr,
				connection: Or,
				contentControls: Dr,
				contentGate: Rr,
				continueThreads: Lr,
				correlationId: (e = Mr, t) => {
					switch (t.type) {
						case xr.a: {
							const {
								correlationId: r,
								key: s
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						case xr.b: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: void 0
							}
						}
						default:
							return e
					}
				},
				creations: sa,
				dashboard: ca,
				discoveryUnits: Ia,
				dismissedTruncationList: va,
				economics: Ka,
				emojis: ec,
				experimentOverrides: ac,
				externalAccount: Nc,
				featureFlags: Bc,
				focusedVerticals: eo,
				fontFiles: ro,
				gild: mo,
				header: jo,
				htmlResponseStreaming: wo,
				imageUploads: Po,
				interceptedAction: Co,
				isChangeUsernameTooltipShowing: ko,
				isEmailVerificationTooltipShowing: Lo,
				isModeratorWithPostPerms: Uo,
				jsApi: Fo,
				leaderboard: zo,
				listings: li,
				live: mi,
				mediaEmbed: (e = hi, t) => {
					switch (t.type) {
						case Oi.a:
							const {
								isDeleted: r, height: s, postId: n
							} = t.payload;
							return {
								...e, [n]: {
									height: s,
									isDeleted: r
								}
							};
						default:
							return e
					}
				},
				mediaGalleries: Si,
				mediaPlayback: wi,
				meta: Pi,
				moderatingSubreddits: Ri,
				modListingPage: Gi,
				modModeEnabled: Bi,
				moreComments: zi,
				multireddits: qu,
				notificationBannerId: Hu,
				notificationsInbox: el,
				nps: sl,
				onboardingModal: dl,
				page: fl,
				platform: hl,
				postCollection: Jl,
				polls: Ml,
				postFlair: rp,
				posts: Kb,
				postStickiedComments: Jb,
				givePremium: Io,
				products: pf,
				profileCommentsPage: Tf,
				profilePrivatePage: Vf,
				profileModSettingsPage: Cf,
				profilePostsPage: kf,
				profiles: Sy,
				promos: Dy,
				publicAccessNetwork: om,
				recentSubreddits: lm,
				recommendations: bm,
				reportPage: Sm,
				reportRules: wm,
				requestHost: Tm,
				runTimeEnvVars: Pm,
				search: Vm,
				searchDiscoveryUnits: Xm,
				seo: aO,
				shortcuts: fO,
				sidebarPromotedPosts: OO,
				streaming: jO,
				structuredStyles: HO,
				stylesheets: WO,
				subredditAutocomplete: eh,
				subreddits: N_,
				subredditStickyPosts: U_,
				subscriptions: aI,
				survey: lI,
				tabBadged: bI,
				tags: UI,
				themes: VI,
				toaster: KI,
				tooltipId: QI,
				tracing: XI,
				tracking: og,
				trafficStats: lg,
				transfers: Eg,
				trending: Sg,
				trophies: wg,
				uploads: Ag,
				user: _v,
				userDataRequestPage: wv,
				upvotePromptCountPerSess: Rg,
				users: Yv,
				widgets: lj,
				wrappedReddit: (e = bj, t) => {
					switch (t.type) {
						case pj.f:
							return {
								...e, shareCardWasOpened: !0
							};
						case pj.c:
							return {
								...e, isCardsLoading: !0
							};
						case pj.b: {
							const {
								cards: r,
								subreddits: s
							} = t.payload;
							return {
								...e,
								cards: r,
								subreddits: s,
								isCardsLoading: !1
							}
						}
						case pj.a: {
							const {
								error: r
							} = t.payload;
							return {
								...e,
								isCardsLoading: !1,
								cardsLoadingError: r
							}
						}
						case pj.d:
							return {
								...e, ...bj
							};
						case pj.e: {
							const {
								index: r
							} = t.payload;
							return {
								...e,
								currentCardIndex: r
							}
						}
						case pj.g: {
							const {
								subredditName: r,
								subscribe: s
							} = t.payload, n = e.subreddits.findIndex(e => e.subredditName === r);
							if (n < 0) return e;
							const a = [...e.subreddits];
							return a.splice(n, 1, {
								...e.subreddits[n],
								subscribe: s
							}), {
								...e,
								subreddits: a
							}
						}
						default:
							return e
					}
				}
			}
		},
		"./src/reddit/routes/premium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/reddit/actions/page.ts");
			const c = "/premium",
				o = Object(s.a)({
					resolved: {},
					chunkName: () => "Premium",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => Promise.all([r.e("Premium~reddit-components-Econ-Prediction-PremiumModal"), r.e("Premium")]).then(r.bind(null, "./src/reddit/pages/Premium/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/pages/Premium/index.tsx"
					}
				}),
				d = {
					action: a.e,
					chunk: n.s.PREMIUM,
					component: o,
					exact: !0,
					meta: {
						name: n.Mb.PREMIUM
					},
					path: c
				};
			t.a = d
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, r) {
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
			var s = r("./src/reddit/selectors/user.ts");
			const n = e => e.blockedRedditors.api.pending,
				a = e => e.blockedRedditors.list,
				c = (e, t) => {
					const r = (e => {
						const t = a(e);
						return t && t.ids
					})(e);
					return !!r && r.includes(t)
				},
				o = (e, t) => {
					const r = Object(s.nb)(e, {
						userName: t
					});
					return !!r && c(e, r.id)
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
		"./src/reddit/selectors/crypto/points.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "a", (function() {
				return u
			}));
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				a = r("./src/reddit/endpoints/governance/crypto.ts"),
				c = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/crypto/index.ts");
			Object(c.a)({
				features: {
					crypto: o.a
				}
			});
			const d = (e, t) => {
				var r, s, n;
				return t ? null === (n = null === (s = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === s ? void 0 : s.points) || void 0 === n ? void 0 : n[t] : void 0
			};

			function i() {
				const e = Object(n.eb)(),
					t = Object(s.e)(t => Object(n.r)(t, {
						pageLayer: e
					})),
					r = Object(s.e)(e => d(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: r
				}
			}
			const u = (e, t) => {
				var r;
				const s = null === (r = d(e, t)) || void 0 === r ? void 0 : r.blockchainProvider;
				return s === a.a.Ethereum || s === a.a.Rinkeby || s === a.a.EthTraderEthereum || s === a.a.EthTraderRinkeby || s === a.a.ArbitrumRinkeby
			}
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
				return m
			})), r.d(t, "a", (function() {
				return O
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
				p = Object(a.a)(l, o.c, (e, t) => t.isFlairModOnly, (e, t) => t.flairTemplateType, (e, t, r, s) => e.filter(e => !(e.modFlairOnly && !t || e.modFlairOnly && !r) && (!(!e.userFlairAllowed && s === c.d.UserFlair) && !(!e.postFlairAllowed && s === c.d.LinkFlair)))),
				b = Object(a.a)(u, (e, t) => t.subredditId, (e, t) => Object.keys(e[t].snoomojis)),
				f = (e, t) => Object(d.t)(e, {
					subredditName: t
				}).emojisEnabled,
				y = {
					emojis: {},
					snoomojis: {}
				},
				m = (e, {
					subredditId: t
				}) => u(e)[t] || y,
				O = (e, t) => !!e.emojis.api.list.pending[t]
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
					experimentName: n.wb,
					expEventOverride: !1
				}), e => e),
				u = e => e === n.Y.Onetap,
				l = e => e === n.Y.OnetapAuto,
				p = e => e.user.googleOneTapEnabled,
				b = Object(s.a)(o.K, i, (e, t) => !e && !!t),
				f = Object(s.a)(o.K, i, (e, t) => !e && !!t && !Object(n.Af)(t))
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = (e, {
					commentId: t,
					commentsPageKey: r
				}) => {
					if (!t) return !1;
					if (e.features.comments.collapsed[r] && t in e.features.comments.collapsed[r]) return !!e.features.comments.collapsed[r][t];
					const s = e.features.comments.models[t];
					return !!s && ("computedCollapsed" in s ? !!s.computedCollapsed : s.collapsedBecauseCrowdControl ? !e.modModeEnabled : s.collapsed)
				},
				n = (e, {
					commentId: t
				}) => {
					if (!t) return !1;
					const r = e.features.comments.models[t];
					return !(!r || !r.collapsedBecauseCrowdControl) && e.modModeEnabled
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
				return O
			})), r.d(t, "k", (function() {
				return h
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "r", (function() {
				return _
			})), r.d(t, "m", (function() {
				return I
			})), r.d(t, "n", (function() {
				return g
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "o", (function() {
				return j
			})), r.d(t, "b", (function() {
				return w
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
				m = (e, {
					subredditId: t,
					scheduledPostId: r,
					type: s
				}) => {
					return (e.posts.scheduledPosts[s].models[t] || p)[r] || void 0
				},
				O = (e, {
					subredditId: t,
					scheduledPostId: r
				}) => m(e, {
					subredditId: t,
					scheduledPostId: r,
					type: a.f.standalonePosts
				}),
				h = (e, {
					subredditId: t,
					scheduledPostId: r
				}) => {
					const s = m(e, {
						subredditId: t,
						scheduledPostId: r,
						type: a.f.recurringPosts
					});
					return s || s
				},
				E = (e, {
					subredditId: t,
					scheduledPostId: r
				}) => O(e, {
					subredditId: t,
					scheduledPostId: r
				}) || h(e, {
					subredditId: t,
					scheduledPostId: r
				}),
				_ = e => e.creations.formData.scheduledPostId,
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
				g = ({
					scheduledPost: e
				}) => {
					const t = I({
							scheduledPost: e
						}),
						r = t.find(e => e.type === n.f.Richtext);
					return r || (t.find(e => e.type === n.f.Text) || null)
				},
				S = e => e.posts.scheduledPosts[a.f.recurringPosts].editModal.scheduledPostId,
				v = e => e.posts.scheduledPosts[a.f.recurringPosts].editModal.subredditId,
				j = e => e.posts.scheduledPosts.api.pendingUpdate,
				w = e => e.posts.scheduledPosts.api.creationToken
		},
		"./src/reddit/selectors/upvotePrompt.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "c", (function() {
				return l
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/reddit/models/User/index.ts"),
				a = r("./src/reddit/models/Vote/index.ts"),
				c = r("./src/reddit/selectors/posts.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const d = 5e3,
				i = 12e3,
				u = 6 * s.pb,
				l = (e, t) => {
					const r = Object(c.H)(e, t),
						s = Object(o.J)(e);
					let d = !1;
					const i = Object(o.k)(e);
					if (i) {
						d = (Object(n.d)(i) || (new Date).getTime()) > (new Date).getTime() - u
					}
					const l = r && !r.isArchived && (1 === (null == r ? void 0 : r.score) || 0 === (null == r ? void 0 : r.score)) && (null == r ? void 0 : r.voteState) === a.a.notVoted;
					return s && d && l
				}
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
		},
		"./src/redditGQL/operations/CreateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"1e0a4bfe5ac9"}')
		},
		"./src/redditGQL/operations/CrowdControlLevelInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"0100b521f182"}')
		},
		"./src/redditGQL/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
		},
		"./src/redditGQL/operations/FetchSubredditStreamingModSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"df4f7fe92d1f"}')
		},
		"./src/redditGQL/operations/GetSubredditChatSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"63d6a697b823"}')
		},
		"./src/redditGQL/operations/ModQueueTriggers.json": function(e) {
			e.exports = JSON.parse('{"id":"de8696c3b5fd"}')
		},
		"./src/redditGQL/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/redditGQL/operations/RelatedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"02181c91f216"}')
		},
		"./src/redditGQL/operations/SubredditScheduledPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"de72339b938a"}')
		},
		"./src/redditGQL/operations/SubredditTopContent.json": function(e) {
			e.exports = JSON.parse('{"id":"eba3db8414d9"}')
		},
		"./src/redditGQL/operations/SubredditsCarousel.json": function(e) {
			e.exports = JSON.parse('{"id":"736dca8070d9"}')
		},
		"./src/redditGQL/operations/UpdateChatMessagesAsRead.json": function(e) {
			e.exports = JSON.parse('{"id":"bfc6fe51708d"}')
		},
		"./src/redditGQL/operations/UpdateCommentDistinguishState.json": function(e) {
			e.exports = JSON.parse('{"id":"e1f407c8ceba"}')
		},
		"./src/redditGQL/operations/UpdateCommentStickyState.json": function(e) {
			e.exports = JSON.parse('{"id":"236938d65d55"}')
		},
		"./src/redditGQL/operations/UpdateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"f5276d63e133"}')
		},
		"./src/redditGQL/operations/UpdateSubredditChatSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"bdb05b8c7a65"}')
		},
		"./src/redditGQL/operations/UpdateSubredditStreamingModSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"1f690708b8b1"}')
		},
		"./src/redditGQL/operations/UserDataExportEligibility.json": function(e) {
			e.exports = JSON.parse('{"id":"3817c69d7a39"}')
		},
		"./src/redditGQL/operations/ValidateCreateSubreddit.json": function(e) {
			e.exports = JSON.parse('{"id":"4c43ed06b3c2"}')
		},
		"./src/redditGQL/operations/VerifyRecaptchaToken.json": function(e) {
			e.exports = JSON.parse('{"id":"c1242f999b6c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.69dac4c4f272432e593b.js.map