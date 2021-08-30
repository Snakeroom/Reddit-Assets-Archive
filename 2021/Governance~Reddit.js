// https://www.redditstatic.com/desktop2x/Governance~Reddit.76fc5f20bc540e138910.js
// Retrieved at 8/30/2021, 10:30:07 AM by Reddit Dataminer v1.0.0
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
					a = ".postMessage",
					n = {
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
					l = [a],
					p = o(l),
					b = {},
					f = !1;

				function y(t, r, s) {
					e.addEventListener ? e.addEventListener(t, r, s) : e.attachEvent && e.attachEvent("on" + t, r)
				}

				function m(t, r) {
					e.removeEventListener ? e.removeEventListener(t, r) : e.detachEvent && e.detachEvent("on" + t, r)
				}

				function h(e) {
					return /\*/.test(e)
				}
				var E = t.postMessage = function(e, t, r) {
						var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
						c.test(t) || (t += a);
						var o = s;
						Object.keys(n).forEach((function(e) {
							o[e] = n[e]
						})), e.postMessage(JSON.stringify({
							type: t,
							data: r,
							defaultedOptions: o
						}), o.targetOrigin)
					},
					O = t.receiveMessage = function(e, t, r, s) {
						"string" == typeof e && (s = r, r = t, t = e, e = null), s = s || void 0;
						var a = function(t) {
							for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++) n[c - 1] = arguments[c];
							e && e !== t.source && e.contentWindow !== t.source || r.apply(s, [t].concat(n))
						};
						return y(t, a), {
							off: function() {
								m(t, a)
							}
						}
					},
					_ = (t.receiveMessageOnce = function(e, t, s, a) {
						var n = O(e, t, (function() {
							s && s.apply(void 0, r), n.off()
						}), a);
						return n
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
					h(e) ? i = [s] : -1 === i.indexOf(e) && (_(s), i.push(e), u = d(i))
				};

				function S(t) {
					if (t.origin === e.location.origin || u.test(t.origin) || "null" === t.origin) {
						var r = {};
						try {
							r = JSON.parse(t.data)
						} catch (t) {}
						var s = r.type;
						if (p.test(s)) {
							var a = s.split(".", 2)[1];
							if (b[a]) b[a].targets.forEach((function(e) {
								return E(e, s, r.data, r.options)
							}));
							var n = new I(s, {
								detail: r.data
							});
							n.source = t.source, e.dispatchEvent(n)
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
				var a = (r = "function" == typeof r ? r : void 0) ? r(e, t) : void 0;
				return void 0 === a ? s(e, t, void 0, r) : !!a
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
				a = r("./node_modules/lodash/negate.js"),
				n = r("./node_modules/lodash/pickBy.js");
			e.exports = function(e, t) {
				return n(e, a(s(t)))
			}
		},
		"./node_modules/lodash/union.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseFlatten.js"),
				a = r("./node_modules/lodash/_baseRest.js"),
				n = r("./node_modules/lodash/_baseUniq.js"),
				c = r("./node_modules/lodash/isArrayLikeObject.js"),
				o = a((function(e) {
					return n(s(e, 1, c, !0))
				}));
			e.exports = o
		},
		"./node_modules/ts-error/lib/cjs.js": function(e, t, r) {
			"use strict";
			t.__esModule = void 0, t.__esModule = !0;
			var s = r("./node_modules/ts-error/lib/helpers.js"),
				a = s.setPrototypeOf,
				n = s.getPrototypeOf,
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
				if (a(p, n(this)), !(p instanceof r && p instanceof u)) {
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
				a = "function" == typeof Object.getPrototypeOf,
				n = "function" == typeof Object.defineProperty,
				c = "function" == typeof Object.create,
				o = "function" == typeof Object.prototype.hasOwnProperty;
			t.setPrototypeOf = function(e, t) {
				s ? Object.setPrototypeOf(e, t) : e.__proto__ = t
			};
			t.getPrototypeOf = function(e) {
				return a ? Object.getPrototypeOf(e) : e.__proto__ || e.prototype
			};
			var d = !1;
			t.defineProperty = function e(t, r, s) {
				if (n && !d) try {
					Object.defineProperty(t, r, s)
				} catch (a) {
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
					for (var a in t) i(t, a) && (s[a] = t[a].value);
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
			const a = e => `${e}_REQUESTED`,
				n = e => `${e}_SUCCEEDED`,
				c = e => `${e}_FAILED`;

			function o(e) {
				const t = a(e),
					r = n(e),
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
			const i = (e, t, r) => (s = d.New, a) => {
				switch (a.type) {
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
				return a
			}));
			var s = r("./node_modules/bignumber.js/bignumber.js");

			function a(e, t) {
				const r = new s.BigNumber(e),
					a = new s.BigNumber(t),
					n = new s.BigNumber(r.dividedBy(a)),
					c = new s.BigNumber("100").multipliedBy(n);
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
				a = r("./src/reddit/helpers/loadThirdPartyScript.ts");
			const n = e => "object" == typeof e && null !== e,
				c = () => "undefined" != typeof window && n(window) && n(window.grecaptcha) && n(window.grecaptcha.enterprise),
				o = () => c() ? window.grecaptcha.enterprise : void 0,
				d = e => `https://www.google.com/recaptcha/enterprise.js?render=${e}`,
				i = e => Object(a.a)(d(e), c),
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
				return a
			}));
			const s = "ACCOUNT_GENDER_LOADED",
				a = "ACCOUNT_GENDER_UPDATED"
		},
		"./src/reddit/actions/apiRequestHeaders.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const a = "API_REQUEST_HEADERS__set";
			Object(s.a)(a)
		},
		"./src/reddit/actions/authorFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return n
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const a = "IN_CONTEXT_AUTHOR_FLAIR_UPDATED",
				n = Object(s.a)(a)
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
				return O
			})), r.d(t, "j", (function() {
				return _
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/governance/errorToast.ts"),
				n = r("./src/reddit/endpoints/governance/badges.ts");
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
				h = Object(s.a)(i),
				E = Object(s.a)(u),
				O = (Object(s.a)(l), Object(s.a)(p), Object(s.a)(b), ({
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
						const l = await Object(n.a)(c(), t, i, u);
						l.ok || (r(y({
							badgeIds: e,
							subredditId: t,
							error: l.error,
							previousBadgeIds: s,
							userId: d.id
						})), Object(a.a)(r, l.error))
					}
				}),
				_ = ({
					subredditId: e,
					userIds: t
				}) => async (r, s, {
					apiContext: a
				}) => {
					r(E({
						subredditId: e
					}));
					const c = await Object(n.b)(a(), e, t);
					c.ok ? r(m({
						...c.body,
						subredditId: e
					})) : r(h({
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
				return E
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/redditGQL/operations/FetchBlockedRedditorsInfo.json");
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
				m = Object(s.a)(l),
				h = Object(s.a)(p),
				E = () => async (e, t, {
					gqlContext: r
				}) => {
					const s = t(),
						a = Object(o.a)(s);
					if (Object(o.b)(s) || a.timestamp && Date.now() - a.timestamp < 36e6) return;
					let n = !1,
						d = "";
					do {
						e(h());
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
									n = e, d = t || ""
								}
							} else n = !1
						} else {
							n = !1;
							const t = s.error ? s.error.type : "unknown error";
							e(y({
								message: t
							}))
						}
					} while (n)
				}
		},
		"./src/reddit/actions/celebratoryMoments/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			}));
			const s = "CELEBRATORY_MOMENT__START_RENDER",
				a = "CELEBRATORY_MOMENT__STOP_RENDER"
		},
		"./src/reddit/actions/chat/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return c
			}));
			var s, a = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.anybody = "Everyone", e.account_age_30_days = "Accounts older than 30 days", e.nobody = "Nobody"
			}(s || (s = {}));
			const n = {
					[s.anybody]: () => a.fbt._("Everyone", null, {
						hk: "YHmqV"
					}),
					[s.account_age_30_days]: () => a.fbt._("Accounts older than 30 days", null, {
						hk: "1g4Gwx"
					}),
					[s.nobody]: () => a.fbt._("Nobody", null, {
						hk: "2m0XS"
					})
				},
				c = e => {
					const t = n[e];
					return t && t()
				}
		},
		"./src/reddit/actions/chat/userSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "c", (function() {
				return g
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/config.ts"),
				o = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				u = r("./src/reddit/constants/headers.ts");
			var l = r("./src/reddit/selectors/telemetry.ts");
			var p = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/telemetry/index.ts"),
				f = r("./src/reddit/actions/chat/constants.ts");
			const y = Object(a.a)("USER_SETTINGS__FETCH_PENDING"),
				m = Object(a.a)("USER_SETTINGS__FETCH_FAILURE"),
				h = "USER_SETTINGS__UPDATE_SUCCESS",
				E = Object(a.a)(h),
				O = () => async (e, t, {
					apiContext: r
				}) => {
					e(y());
					const s = await (e => Object(d.a)(Object(i.a)(e, [u.a]), {
						endpoint: `${c.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
						method: o.hb.GET
					}))(r());
					if (s.ok) {
						const t = {
							...s.body
						};
						e(E({
							invitePolicy: f.a[t.invite_policy]
						}))
					} else e(m(s.error))
				}, _ = Object(a.a)("USER_SETTINGS__SAVE_PENDING"), I = Object(a.a)("USER_SETTINGS__SAVE_FAILURE"), g = e => async (t, r, {
					apiContext: a
				}) => {
					const y = r(),
						{
							invitePolicy: m
						} = e,
						h = Object.keys(f.a).find(e => f.a[e] === m);
					if (h) {
						t(_());
						const e = await (async (e, t) => Object(d.a)(Object(i.a)(t, [u.a]), {
							endpoint: `${c.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
							method: o.hb.PUT,
							data: JSON.stringify({
								invite_policy: e
							})
						}))(h, a());
						if (Object(b.a)((e => t => ({
								source: "settings_privacy",
								action: "save",
								noun: "receive_chat_invites",
								setting: {
									value: e,
									oldValue: e
								},
								...Object(l.defaults)(t)
							}))(h)(y)), e.ok) {
							const e = f.a[h];
							t(E({
								invitePolicy: e
							})), t(Object(n.f)({
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
				return m
			})), r.d(t, "i", (function() {
				return O
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
				return w
			})), r.d(t, "h", (function() {
				return j
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/toaster.ts"),
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
					method: o.hb.POST,
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
				h = Object(a.a)(y),
				E = Object(a.a)(m),
				O = () => async (e, t) => {
					const r = t();
					Object(f.b)(r) ? e(E()) : e(h())
				}, _ = "CLAIMGOLD_UPDATE_CODE", I = Object(a.a)(_), g = "CLAIM_GOLD__TRIGGER_LOADER", S = "CLAIM_GOLD__CLAIM_GOLD_PENDING", v = "CLAIM_GOLD__CLAIM_GOLD_SUCCESSFUL", w = "CLAIM_GOLD__CLAIM_GOLD_FAILED", j = () => async (e, t, {
					apiContext: r
				}) => {
					const s = {
						code: t().claimGold.code
					};
					e(A());
					try {
						const t = await p(r(), s);
						t.error ? e(R(t)) : e(N())
					} catch (a) {
						e(R(a))
					}
				}, T = Object(a.a)(g), D = Object(a.a)(S), A = () => async (e, t) => {
					e(D()), window.setTimeout(() => {
						t().claimGold.api.pending && e(T())
					}, 2e3)
				}, P = Object(a.a)(w), R = e => async (t, r) => {
					await t(P({
						...e,
						error: e.error || Object(b.a)()
					}));
					const s = r().claimGold.api.error;
					s && t(Object(n.f)({
						kind: c.b.Error,
						duration: n.a,
						text: s
					}))
				}, C = Object(a.a)(v), N = () => async (e, t) => {
					e(C()), e(Object(n.f)({
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
				return n
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return i
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/helpers/trackers/commentList.ts");
			const n = "COMMENTLIST__MARKED_END",
				c = "COMMENTLIST__UNMARKED_END",
				o = Object(s.a)(n),
				d = Object(s.a)(c),
				i = (e, t) => async (r, s) => {
					const n = s();
					e in n.profileCommentsPage.fetchedTokens ? e in n.profileCommentsPage.commentIds ? r(d({
						listingKey: e
					})) : Object(a.a)(n, e) : r(o({
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
				return a
			}));
			const s = "COMMENTS_LIST__EXPANDED",
				a = "COMMENTS_LIST__TRUNCATED"
		},
		"./src/reddit/actions/connection/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "c", (function() {
				return n
			}));
			const s = "CONNECTION__GO_ONLINE",
				a = "CONNECTION__GO_OFFLINE",
				n = "CONNECTION__HIDE_BANNER"
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
				return a
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return c
			}));
			const s = "ECONOMICS__BANNERS__DISMISSED_BANNERS_PENDING",
				a = "ECONOMICS__BANNERS__DISMISSED_BANNERS_UPDATED",
				n = "ECONOMICS__BANNERS__BANNER_DISMISSED",
				c = "ECONOMICS__BANNERS__BANNER_UNDISMISSED"
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return a
			}));
			const s = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				a = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return n
			}));
			const s = "ECONOMICS__ME__ME_DATA_SUCCESS",
				a = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				n = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/emoji.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return S
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "h", (function() {
				return A
			})), r.d(t, "g", (function() {
				return P
			})), r.d(t, "f", (function() {
				return R
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
				return K
			})), r.d(t, "e", (function() {
				return Q
			})), r.d(t, "o", (function() {
				return z
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/forEach.js"),
				n = r.n(a),
				c = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/lib/uploadToS3/index.ts"),
				u = r("./src/reddit/constants/headers.ts");
			const l = async (e, t) => Object(o.a)(Object(d.a)(e, [u.a]), {
				endpoint: `${e.apiUrl}/api/v1/${t}/emojis/all`,
				method: c.hb.GET,
				type: "json"
			}).then(e => (e.ok && (e.body = (e => {
				let t;
				const r = n()(e, (e, r) => ("snoomojis" !== r && (t = r), n()(e, (t, r) => {
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
				h = r("./src/reddit/helpers/media/index.ts"),
				E = r("./src/reddit/models/Emoji/index.ts"),
				O = r("./src/reddit/models/Image/index.tsx"),
				_ = r("./src/reddit/models/Toast/index.ts"),
				I = r("./src/reddit/selectors/emojis.ts"),
				g = r("./src/reddit/selectors/subreddit.ts");
			const S = "STRUCTURED_STYLES__NEW_EMOJI_ADDED",
				v = Object(p.a)(S),
				w = "STRUCTURED_STYLES__EMOJI_DELETE_LOADED",
				j = "STRUCTURED_STYLES__EMOJI_DELETE_FAILED",
				T = Object(p.a)(w),
				D = Object(p.a)(j),
				A = "GET_ALL_EMOJIS_PENDING",
				P = "GET_ALL_EMOJIS_LOADED",
				R = "GET_ALL_EMOJIS_FAILED",
				C = Object(p.a)(A),
				N = Object(p.a)(P),
				k = Object(p.a)(R),
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
				}) => async (r, s, a) => {
					const n = s(),
						l = Object(g.T)(n, {
							subredditId: t
						}).name;
					r(Object(b.k)(e));
					const p = e.file,
						f = await Object(h.g)(p),
						y = await (async (e, t, r, s) => Object(o.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/emoji_asset_upload_s3.json`,
							method: c.hb.POST,
							data: {
								filepath: r,
								mimetype: s
							}
						}))(a.apiContext(), l, p.name, f);
					let m = !1;
					if (y.ok) {
						const t = await (async (e, t, r) => Object(i.a)(r, t))(a.apiContext(), y.body.s3UploadLease, p);
						if (t.ok) {
							if (!s().imageUploads[e.id]) return Object(O.d)(e), !1;
							const a = decodeURIComponent(t.body.PostResponse.Location),
								n = y.body.websocketUrl,
								c = Object(O.n)(e, a, n);
							r(Object(b.j)(c)), m = !0
						} else {
							const s = Object(O.k)(e, t.error);
							r(Object(b.i)(s))
						}
					} else {
						const t = Object(O.k)(e, y.error);
						r(Object(b.i)(t))
					}
					return m
				}, G = (e, t) => async (r, s, a) => {
					const {
						imageData: n,
						subredditId: i,
						emojiName: l,
						settings: p
					} = e, y = Object(m.a)(n.url), h = s(), E = Object(g.T)(h, {
						subredditId: i
					}).name, _ = await (async (e, t, r, s, a) => Object(o.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji.json`,
						method: c.hb.POST,
						data: {
							s3_key: r,
							name: s,
							mod_flair_only: a.modFlairOnly,
							post_flair_allowed: a.postFlairAllowed,
							user_flair_allowed: a.userFlairAllowed
						}
					}))(a.apiContext(), E, y, l, p);
					if (!_.ok) {
						const s = Object(O.k)(n, _.error);
						r(Object(b.i)(s)), r(Object(f.f)(U(e))), t && t.close()
					}
					return _.ok
				}, F = e => async (t, r, s) => {
					const {
						imageData: a,
						subredditId: n,
						emojiName: c,
						settings: o
					} = e;
					if (t(Object(b.k)(a)), !a.websocketUrl) return t(Object(f.f)({
						text: "Could not upload emoji"
					}));
					let d;
					const i = new WebSocket(a.websocketUrl);
					return i.onopen = async () => {
						d = await G(e, i)(t, r, s)
					}, i.onmessage = r => {
						const s = JSON.parse(r.data);
						if ("success" === s.type) {
							d = !0;
							const e = s.payload.emoji_url,
								r = Object(O.o)(a, e);
							t(Object(b.l)(r));
							const i = Object(E.e)(c, r.url, n, o);
							t(v(i)), t(B(n))
						} else {
							const r = Object(y.a)(c),
								s = Object(O.k)(a, r);
							t(Object(b.i)(s)), t(Object(f.f)(U(e)))
						}
						i.close()
					}, i.onerror = r => {
						d = !1;
						const s = Object(y.a)(c),
							n = Object(O.k)(a, s);
						t(Object(b.i)(n)), t(Object(f.f)(U(e))), i.close()
					}, d
				}, B = e => async (t, r, {
					apiContext: s
				}) => {
					const a = r();
					if (Object(I.a)(a, e)) return;
					const n = Object(g.T)(a, {
						subredditId: e
					}).name;
					t(C(e));
					const c = await l(s(), n);
					if (c.ok) {
						const r = c.body;
						t(N({
							subredditId: e,
							data: r
						}))
					} else t(k({
						subredditId: e,
						error: c.error
					}))
				}, q = e => async (t, r, {
					apiContext: s
				}) => {
					r().emojis[e] || await t(B(e))
				}, V = (e, t) => async (r, a, {
					apiContext: n
				}) => {
					const i = a(),
						l = Object(g.T)(i, {
							subredditId: t
						}).name,
						p = await (async (e, t, r) => Object(o.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/v1/${r}/emoji/${t}`,
							method: c.hb.DELETE,
							type: "json"
						}))(n(), e, l);
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
				}, H = (e, t) => async (r, a, {
					apiContext: n
				}) => {
					const i = a(),
						l = Object(g.T)(i, {
							subredditId: e
						}).name;
					if ((await (async (e, t, r) => Object(o.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/enable_emojis_in_sr.json`,
							method: c.hb.POST,
							data: {
								subreddit: t,
								enable: r
							}
						}))(n(), l, t)).ok) {
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
				}, W = "EMOJI_CUSTOM_SIZE_UPDATED", $ = Object(p.a)(W), K = (e, t) => async (r, a, {
					apiContext: n
				}) => {
					const i = a(),
						l = Object(g.T)(i, {
							subredditId: e
						}).name;
					(await (async (e, t, r) => Object(o.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji_custom_size`,
						method: c.hb.POST,
						data: r
					}))(n(), l, t)).ok ? r($({
						subredditId: e,
						emojiCustomSize: t
					})) : r(f.f({
						kind: _.b.Error,
						text: s.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}, Q = "EMOJI_PERMISSIONS_UPDATED", J = Object(p.a)(Q), z = (e, t, r, a) => async (n, i, {
					apiContext: l
				}) => {
					const p = i(),
						b = Object(g.T)(p, {
							subredditId: a
						}).name;
					(await (async (e, t, r, s) => Object(o.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${r}/emoji_permissions.json`,
						method: c.hb.POST,
						data: {
							name: t,
							post_flair_allowed: s.postFlairAllowed,
							user_flair_allowed: s.userFlairAllowed,
							mod_flair_only: s.modFlairOnly
						}
					}))(l(), e, b, r)).ok ? (n(J({
						emojiName: e,
						isSnoomoji: t,
						settings: r,
						subredditId: a
					})), n(f.f({
						kind: _.b.SuccessCommunityGreen,
						text: s.fbt._("Emoji permissions updated", null, {
							hk: "4b2RIU"
						})
					}))) : n(f.f({
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
				return a
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return c
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			r("./src/reddit/endpoints/user/index.ts"), r("./src/reddit/models/Post/index.ts"), r("./src/reddit/selectors/telemetry.ts");
			const a = "EXPERIMENTS__REQUEST_LOADED",
				n = (Object(s.a)("EXPERIMENTS__REQUEST_PENDING"), Object(s.a)("EXPERIMENTS__REQUEST_FAILED"), Object(s.a)(a), "EXPERIMENTS__SET_EXPERIMENT_OVERRIDE"),
				c = Object(s.a)(n)
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
				a = r("./src/lib/loadWithRetries/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/actions/structuredStyles/index.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/models/StructuredStyles/index.ts"),
				i = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/selectors/subreddit.ts");
			const l = "STRUCTURED_STYLES__EXPORT_THEME_PENDING",
				p = "STRUCTURED_STYLES__EXPORT_THEME_LOADED",
				b = "STRUCTURED_STYLES__EXPORT_THEME_FAILED",
				f = Object(n.a)(l),
				y = Object(n.a)(p),
				m = Object(n.a)(b),
				h = Object(n.a)("STRUCTURED_STYLES__IMPORT_THEME_PENDING"),
				E = Object(n.a)("STRUCTURED_STYLES__IMPORT_THEME_LOADED"),
				O = Object(n.a)("STRUCTURED_STYLES__IMPORT_THEME_FAILED"),
				_ = e => async (t, n) => {
					t(f());
					const c = n(),
						d = Object(u.T)(c, {
							subredditId: e
						}).name,
						l = c.structuredStyles.models[e],
						p = await Object(a.a)(() => Promise.all([r.e("vendors~ExportTheme~ImportTheme"), r.e("ExportTheme")]).then(r.bind(null, "./src/reddit/helpers/exportTheme/index.ts"))).then(e => e.default),
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
				}, I = e => async (t, n) => {
					t(h());
					const u = await Object(a.a)(() => Promise.all([r.e("vendors~ExportTheme~ImportTheme"), r.e("ImportTheme")]).then(r.bind(null, "./src/reddit/helpers/importTheme/index.ts"))).then(e => e.default),
						l = await u(e);
					l.ok ? (t(E()), t(Object(o.f)({
						kind: i.b.SuccessMod,
						text: s.fbt._("Theme successfully imported", null, {
							hk: "42FErS"
						})
					})), 0 !== Object.keys(l.attributes).length && t(Object(c.d)(Object(d.j)(l.attributes)))) : (t(O(l.error)), t(Object(o.f)({
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
				return a
			}));
			const s = "FLAIR_PREVIEW_EXAMPLE_POST_CREATED",
				a = "FLAIR_PREVIEW_EXAMPLE_POST_DELETED"
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
				a = r("./src/reddit/actions/login.ts"),
				n = r("./src/reddit/constants/experiments.ts"),
				c = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/activeModalId.ts"),
				d = r("./src/reddit/selectors/experiments/googleOneTap.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const u = "GOOGLE_ONE_TAP_ENABLED",
				l = Object(s.a)(u),
				p = () => async (e, t) => {
					const r = t(),
						s = Object(i.J)(r),
						a = Object(d.b)(r);
					s && Object(d.d)(a) && e(l())
				}, b = () => async (e, t) => {
					const r = t(),
						s = Object(i.J)(r),
						n = Object(d.b)(r),
						c = !!Object(o.a)(r);
					s || c || !Object(d.e)(n) && !Object(d.d)(n) || e(Object(a.f)())
				}, f = e => {
					Object(c.d)(e, {
						experimentName: n.W
					})
				}
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return n
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
				return h
			})), r.d(t, "p", (function() {
				return E
			})), r.d(t, "q", (function() {
				return O
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
				return w
			})), r.d(t, "x", (function() {
				return j
			}));
			const s = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				a = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				n = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
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
				h = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				E = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				O = "GOVERNANCE__TRANSFER_FAILURE",
				_ = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				I = "GOVERNANCE__TRANSFER_PENDING",
				g = "GOVERNANCE__TRANSFER_SUCCESS",
				S = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				v = "GOVERNANCE__WALLETS_FETCH_PENDING",
				w = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				j = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/reddit/helpers/governanceErrorText/index.ts"),
				n = r("./src/reddit/models/Toast/index.ts");

			function c(e, t) {
				e(Object(s.f)({
					duration: 5e3,
					kind: n.b.Error,
					text: Object(a.a)(t)
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
				return k
			})), r.d(t, "d", (function() {
				return L
			})), r.d(t, "e", (function() {
				return x
			})), r.d(t, "h", (function() {
				return U
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/prettyPrintNumber/index.ts"),
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
				h = r("./src/reddit/selectors/crypto/points.ts"),
				E = r("./src/reddit/actions/governance/constants.ts"),
				O = r("./src/reddit/actions/governance/errorToast.ts");
			const _ = Object(a.a)(E.b),
				I = Object(a.a)(E.c),
				g = Object(a.a)(E.e),
				S = (Object(a.a)(E.f), Object(a.a)(E.g), Object(a.a)(E.h)),
				v = Object(a.a)(E.i),
				w = Object(a.a)(E.j),
				j = Object(a.a)(E.k),
				T = Object(a.a)(E.q),
				D = Object(a.a)(E.r),
				A = Object(a.a)(E.s),
				P = Object(a.a)(E.t),
				R = Object(a.a)(E.u),
				C = Object(a.a)(E.v),
				N = Object(a.a)(E.w),
				k = Object(a.a)(E.x),
				L = (e, t) => async (r, s, {
					apiContext: a,
					gqlContext: n
				}) => {
					let c, d = s().polls.models[e];
					if (r(w({
							pollId: e
						})), (c = d.type === l.a.GA ? await ((e, t, r) => Object(u.a)(e, {
								...p,
								variables: {
									input: {
										postId: t,
										optionId: r
									}
								}
							}))(n(), e, t) : await
							function(e, t, r, s) {
								return Object(b.a)(e, {
									method: "put",
									endpoint: `${i.a.metaUrl}/polls/${t}/${r}/votes/me/${s}`
								})
							}(a(), d.subredditId, e, t)).ok) {
						if (d.type === l.a.GA) {
							const {
								options: e
							} = c.body.data.updatePostPollVoteState.poll;
							r(g({
								pollId: d.id,
								optionId: t,
								options: e
							}))
						} else r(j(c.body));
						const a = s();
						if ((d = a.polls.models[e]) && Object(l.d)(d)) {
							const {
								postId: e
							} = d, t = a.posts.models[e];
							t && t.voteState === m.a.notVoted && r(Object(o.db)(e))
						}
					} else r(v({
						pollId: e,
						error: c.error || c.errors[0].message
					})), Object(O.a)(r, c.error || c.errors[0].messsage)
				}, x = (e, t) => async (r, a, {
					apiContext: o
				}) => {
					var u;
					r(A());
					const l = a().transfers.communityPoints.contentId || void 0,
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
					p.ok ? (r(P({
						...p.body,
						subredditId: e.subredditId
					})), r(Object(d.f)({
						kind: y.b.SuccessCommunity,
						text: s.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [s.fbt._param("amount", Object(n.a)(e.amount)), s.fbt._param("tokenName", (null === (u = Object(h.b)(a(), e.subredditId)) || void 0 === u ? void 0 : u.name) || ""), s.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && r(Object(c.f)())) : (r(T({
						error: p.error
					})), Object(O.a)(r, p.error))
				}, U = e => async (t, r, {
					apiContext: s
				}) => {
					t(C());
					const a = await Object(f.a)(s(), e);
					a.ok ? t(N(a.body)) : t(R({
						error: a.error
					}))
				}
		},
		"./src/reddit/actions/harbergerTax/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "a", (function() {
				return n
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
				a = "HARBERGER_TAX__BANNER_PURCHASE_MODAL_OPENED",
				n = "HARBERGER_TAX__BANNER_CRYPTO_MANAGE_MODAL_OPENED",
				c = "HARBERGER_TAX__BANNER_CRYPTO_PURCHASE_MODAL_OPENED",
				o = "HARBERGER_TAX__BANNER_PURCHASE_FAILURE",
				d = "HARBERGER_TAX__BANNER_PURCHASE_PENDING",
				i = "HARBERGER_TAX__BANNER_PURCHASE_SUCCESS",
				u = "HARBERGER_TAX__BANNER_UPDATE_FAILURE",
				l = "HARBERGER_TAX__BANNER_UPDATE_PENDING",
				p = "HARBERGER_TAX__BANNER_UPDATE_SUCCESS"
		},
		"./src/reddit/actions/isTrackingCrossposts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/endpoints/post/index.tsx");
			const n = "TRACKING_CROSSPOSTS_LOADED",
				c = Object(s.a)(n),
				o = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = await Object(a.e)(s(), {
						postId: e
					});
					if (n.ok) {
						const {
							isTrackingCrossposts: r
						} = n.body.data.postInfoById;
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
				return a
			})), r.d(t, "c", (function() {
				return n
			}));
			const s = "LEADERBOARD__LEADERBOARD_FETCH_FAILURE",
				a = "LEADERBOARD__LEADERBOARD_FETCH_PENDING",
				n = "LEADERBOARD__LEADERBOARD_FETCH_SUCCESS"
		},
		"./src/reddit/actions/multireddit/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "q", (function() {
				return s
			})), r.d(t, "r", (function() {
				return a
			})), r.d(t, "s", (function() {
				return n
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
				return h
			})), r.d(t, "o", (function() {
				return E
			})), r.d(t, "p", (function() {
				return O
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
				return w
			})), r.d(t, "y", (function() {
				return j
			})), r.d(t, "v", (function() {
				return T
			})), r.d(t, "w", (function() {
				return D
			})), r.d(t, "x", (function() {
				return A
			})), r.d(t, "d", (function() {
				return P
			}));
			const s = "MULTIREDDIT__MORE_POSTS_FAILED",
				a = "MULTIREDDIT__MORE_POSTS_LOADED",
				n = "MULTIREDDIT__MORE_POSTS_PENDING",
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
				h = "MULTIREDDIT__EDIT_FAILURE",
				E = "MULTIREDDIT__EDIT_PENDING",
				O = "MULTIREDDIT__EDIT_SUCCESS",
				_ = "MULTIREDDIT__ADD_SUBREDDIT_FAILURE",
				I = "MULTIREDDIT__ADD_SUBREDDIT_PENDING",
				g = "MULTIREDDIT__ADD_SUBREDDIT_SUCCESS",
				S = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_PENDING",
				v = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_SUCCESS",
				w = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_FAILURE",
				j = 10,
				T = "MULTIREDDIT__REMOVE_SUBREDDIT_FAILURE",
				D = "MULTIREDDIT__REMOVE_SUBREDDIT_PENDING",
				A = "MULTIREDDIT__REMOVE_SUBREDDIT_SUCCESS";
			var P;
			! function(e) {
				e.InvalidSrQuarantine = "INVALID_SR_QUARANTINE", e.TooManySubreddits = "MULTI_TOO_MANY_SUBREDDITS"
			}(P || (P = {}))
		},
		"./src/reddit/actions/notificationSettingsLayout/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return n
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
				a = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__LOADED",
				n = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__PENDING",
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
				return a
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			}));
			const s = "PUSH__GET_PREFERENCES_PENDING",
				a = "PUSH__GET_PREFERENCES_LOADED",
				n = "PUSH__GET_PREFERENCES_FAILED",
				c = "PUSH__SET_PREFERENCES_PENDING",
				o = "PUSH__SET_PREFERENCES_LOADED",
				d = "PUSH__SET_PREFERENCES_FAILED"
		},
		"./src/reddit/actions/notificationsInbox/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return n
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
				a = "INBOX_NOTIFICATIONS__LOADED",
				n = "INBOX_NOTIFICATIONS__FAILED",
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
				a = r("./src/config.ts"),
				n = r("./src/lib/constants/index.ts"),
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
				h = Object(s.a)(f),
				E = Object(s.a)(y);
			let O = !1;
			const _ = () => async (e, t, r) => {
				const s = t();
				if (s.nps.pending) return;
				if (O) return;
				e(m());
				const i = s.platform.currentPage && s.platform.currentPage.queryParams.feature || "",
					u = !!s.user.account,
					l = await ((e, t, r) => Object(c.a)(Object(o.a)(e, [d.a]), {
						data: {
							feature: t,
							app_name: "web2x"
						},
						endpoint: `${r?a.a.oauthUrl:a.a.apiUrl}/api/jail/asknicely${r?"":".json"}`,
						method: n.hb.GET,
						traceRequestName: "get_nps_survey"
					}))(r.apiContext(), i, u);
				if (l.ok) {
					const t = l.body;
					t.dest ? (e(h(t)), p(t.dest), O = !0) : e(E())
				} else e(E())
			}
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
				return w
			})), r.d(t, "e", (function() {
				return j
			}));
			var s = r("./node_modules/react-router-redux/es/index.js"),
				a = r("./src/reddit/actions/pages/subreddit.ts"),
				n = r("./src/lib/constants/index.ts"),
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
				h = r("./src/reddit/actions/users.ts"),
				E = r("./src/reddit/selectors/user.ts"),
				O = r("./src/lib/makeListingKey/index.ts"),
				_ = r("./src/lib/matchRoute/index.ts");
			const I = e => async t => {
				await t(Object(m.c)(e, !0))
			}, g = () => async e => {
				await e((() => async (e, t, {
					apiContext: r
				}) => {
					const s = t(),
						a = await Object(u.a)(r());
					if (a.ok && a.body)
						if (a.body.account)
							if (s.user.account && s.user.account.isFPR) {
								const e = b;
								window.location.href = e
							} else e(f(a.body));
					else Object(l.a)(e, s);
					else e(y(a.error))
				})())
			}, S = (e, t, r) => async (c, o, {
				routes: d
			}) => {
				const i = o(),
					u = (t || i.platform.currentPage).routeMatch.match,
					l = Object(_.a)(u.url, d);
				if (!l) return;
				const p = e.metaKey || e.ctrlKey || 1 === e.button;
				if (l.route && l.route.meta && (l.route.meta.name === n.Jb.INDEX || l.route.meta.name === n.Jb.MULTIREDDIT || l.route.meta.name === n.Jb.SUBREDDIT)) p ? window.open(u.url) : r ? c(Object(s.b)(u.url)) : await c(l.route.action(u, !0));
				else if (l.match && l.match.params && l.match.params.subredditName) {
					const {
						subredditName: e
					} = l.match.params, t = `/r/${e}/`;
					if (p) window.open(t);
					else if (r) c(Object(s.b)(t));
					else {
						const r = Object(O.a)(e, n.U.HOT);
						await c(Object(s.b)(t)), c(Object(a.subredditDataRequested)(r, e, {}))
					}
				}
			}, v = () => async (e, t) => {
				const r = t();
				e(i.l({
					title: c.b()
				})), Object(E.J)(r) || await e(h.s())
			}, w = () => async e => e(i.l({
				title: c.b()
			})), j = e => async (t, s) => {
				const a = s();
				t(i.l({
					title: c.h()
				})), Object(E.J)(a) || await t(h.s());
				const n = Object(E.J)(a);
				if (e.queryParams.thanks && n) {
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
				return a
			}));
			const s = "APPEAL_PAGE_LOADED",
				a = "APPEAL_PAGE_FAILED"
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
				return w
			})), r.d(t, "e", (function() {
				return R
			})), r.d(t, "f", (function() {
				return C
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/difference.js"),
				n = r.n(a),
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
				h = r("./src/telemetry/models/Event.ts");
			var E = r("./src/reddit/models/ChatSettingsPage/index.ts"),
				O = r("./src/reddit/models/Toast/index.ts"),
				_ = r("./src/reddit/selectors/chat.ts"),
				I = r("./src/reddit/selectors/chatSettingsPage.ts");
			const g = "FETCH_CHAT_SETTINGS__LOADED",
				S = "FETCH_CHAT_SETTINGS__FAILED",
				v = "FETCH_CHAT_SETTINGS__PENDING",
				w = "UPDATE_CHAT_SETTINGS__LOADED",
				j = Object(d.a)(g),
				T = Object(d.a)(S),
				D = Object(d.a)(v),
				A = Object(d.a)(w),
				P = e => async (t, r) => {
					const s = {
						subredditId: e
					};
					return !!Object(I.b)(r(), s) || (t(D(s)), !1)
				}, R = e => async (t, r, {
					gqlContext: s
				}) => {
					const a = {
						subredditId: e
					};
					if (await t(P(e))) return;
					let n = null;
					const c = await b(s(), a);
					if (c.ok) {
						const t = c.body || {},
							s = t.data && t.data.subredditInfoById,
							o = s && s.chatSettings,
							d = !Object(_.c)(r(), a),
							i = Object(E.c)(o, e, d);
						n = {
							...a,
							chatSettings: i
						}
					}
					if (n) t(j(n));
					else {
						const r = c.error || {
							type: o.G.UNKNOWN_ERROR
						};
						t(T({
							...a,
							error: r
						})), i.c.withScope(t => {
							t.setExtra("info", {
								subredditId: e,
								responseBody: c.body,
								responseOk: c.ok
							}), i.c.captureMessage("Missing subreddit chat settings!")
						})
					}
				}, C = (e, t, r) => async (a, c, {
					gqlContext: d
				}) => {
					if (await a(P(e))) return [];
					let i, l = !1;
					const p = n()(r, t),
						b = Object(E.b)(p);
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
							type: o.G.UNKNOWN_ERROR
						}
					}
					return l ? (a(A({
						subredditId: e,
						chatSettings: r
					})), a(k(t, p)), r) : (i && a(T({
						subredditId: e,
						error: i
					})), a(A({
						subredditId: e,
						chatSettings: t
					})), a(Object(u.f)({
						duration: u.a,
						id: "CHAT_SETTING_UPDATE_ERROR",
						kind: O.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3HpR6h"
						})
					})), t)
				}, N = {
					start_chatting_opt_out: (e, t, r) => ({
						source: h.b.Chat,
						action: h.a.OptOut,
						noun: "down_to_chat_subreddit",
						subreddit: Object(m.subreddit)(e),
						setting: {
							oldValue: t,
							value: r
						},
						...Object(m.defaults)(e)
					})
				}, k = (e, t) => async (r, s) => {
					t.forEach(t => {
						if (t && t.settingId) {
							const r = N[t.settingId],
								a = e.find(e => e.settingId === t.settingId);
							if (r && a) {
								const e = r(s(), a.state, t.state);
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
				a = r("./src/reddit/actions/preferences.ts"),
				n = r("./src/reddit/actions/profile/index.ts"),
				c = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				o = r("./src/reddit/helpers/trackers/screenview.ts"),
				d = r("./src/reddit/models/User/index.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const u = "PAGE__PROFILE_MOD_SETTINGS_LOADED",
				l = Object(s.a)(u),
				p = e => async (t, r) => {
					const s = [t(a.x()), t(Object(n.d)(e.params.profileName))];
					await Promise.all(s);
					const u = Object(i.j)(r());
					u ? (await t(Object(n.b)(Object(d.e)(u))), t(l()), Object(o.p)(r(), !0)) : Object(c.a)(t, r())
				}
		},
		"./src/reddit/actions/pages/report/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "a", (function() {
				return c
			}));
			const s = "REPORT_PAGE__FAILED",
				a = "REPORT_PAGE__PENDING",
				n = "REPORT_PAGE__LOADED",
				c = "REPORT_PAGE_INITIAL_REASON__SET"
		},
		"./src/reddit/actions/pages/subredditWiki/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = "PAGE__SUBREDDIT_WIKI_PAGE_PENDING",
				a = "PAGE__SUBREDDIT_WIKI_PAGE_LOADED",
				n = "PAGE__SUBREDDIT_WIKI_PAGE_FAILED"
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
				a = r("./src/reddit/endpoints/me/index.ts"),
				n = r("./src/lib/makeGqlRequest/index.ts"),
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
						l = Object(d.j)(u),
						p = Object(i.b)(u);
					if (l && p.success) return;
					e(b());
					const m = await Object(a.a)(r());
					if (!m.ok || !m.body) return void e(y(m.error));
					if (!m.body.account) return void Object(o.a)(e, u);
					const h = await (e => Object(n.a)(e, {
						...c
					}))(s());
					if (!h.ok) return void e(y());
					const E = m.body,
						O = h.body;
					e(f({
						account: E.account,
						userDataExportEligibility: O.data.identity.userDataExportEligibility.isUserEligibleForDataExport
					}))
				}
		},
		"./src/reddit/actions/polls.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return n
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const a = "POLLS__POLL_CREATION_UPDATED",
				n = Object(s.a)(a)
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return N
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
				a = r("./node_modules/uuid/v4.js"),
				n = r.n(a),
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
				h = r("./src/reddit/helpers/media/index.ts"),
				E = r("./src/reddit/models/Upload/index.ts"),
				O = r("./src/reddit/selectors/telemetry.ts"),
				_ = r("./src/telemetry/index.ts");
			const I = e => ({
				...O.defaults(e),
				screen: O.screen(e),
				profile: O.profile(e),
				subreddit: O.subreddit(e)
			});
			var g = r("./src/reddit/helpers/trackers/postComposer.ts"),
				S = r("./src/reddit/models/Gold/Powerups/index.ts"),
				v = r("./src/reddit/models/PostCreationForm/index.ts"),
				w = r("./src/reddit/models/Toast/index.ts"),
				j = r("./src/reddit/selectors/gold/powerups/index.ts"),
				T = r("./src/reddit/selectors/postCreations.ts"),
				D = r("./src/reddit/actions/postCreation/constants.ts"),
				A = r("./src/reddit/actions/postCreation/general.ts");
			const P = Object(d.a)(D.u),
				R = Object(d.a)(D.v),
				C = Object(d.a)(D.t),
				N = e => async (t, r) => {
					t(P());
					const s = e.map(({
						url: e,
						uploadKey: r
					}) => {
						const s = Object(h.a)(Object(h.c)(e), "poster.png");
						return t(U(s, r))
					});
					await Promise.all(s);
					const a = r().uploads,
						n = e.map(({
							uploadKey: e
						}) => a[e]).find(e => e.status !== E.a.SUCCESS);
					t(n ? C(n.error) : R())
				}, k = (e, t) => ({
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
				U = (e, t, r, a) => async (n, o, {
					apiContext: d
				}) => {
					const i = Object(T.h)(o()),
						l = Date.now();
					let v = null,
						w = !1,
						D = !1,
						A = !1;
					const P = e => {
						if (!A && r && w) {
							A = !0;
							const s = o(),
								a = Date.now() - l,
								n = Object(y.c)(y.a.PostComposer);
							D ? (async ({
								state: e,
								uploadKey: t,
								assetId: r,
								isCanceled: s,
								fileSource: a,
								uploadDuration: n,
								correlationId: c
							}) => {
								const o = e.uploads[t],
									d = s || o.status === E.a.CANCELED,
									{
										file: i,
										url: u,
										metadata: l,
										error: p
									} = o,
									b = l.mimetype || i.type,
									f = b.startsWith("video/"),
									y = o.status === E.a.SUCCESS;
								let m = "";
								p ? m = JSON.stringify(p) : d && (m = "canceled");
								const h = {
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
										...O.actionInfo(e),
										success: y,
										...m ? {
											reason: m
										} : {}
									},
									media: {
										mimetype: b,
										uploadDuration: n,
										source: a,
										fileName: i.name,
										size: i.size,
										type: f ? "video" : "image",
										...r ? {
											id: r
										} : {},
										...u ? {
											url: u
										} : {},
										...h
									}
								})
							})({
								state: s,
								uploadKey: t,
								assetId: v,
								isCanceled: e,
								fileSource: r,
								uploadDuration: a,
								correlationId: n
							}) : g.u(s, t)
						}
					};
					return await n(Object(u.l)(e, t, async l => {
						w = !0, Object(u.k)(l.id, () => {
							P(!0)
						});
						const {
							error: y,
							metadata: E
						} = await async function(e, t, r) {
							const a = r && r.allowedPostTypes,
								n = r && r.name,
								o = await Object(h.g)(t) || t.type,
								d = Object(h.b)(t) || void 0;
							if (!d) return k("UNSUPPORTED_BROWSER");
							const i = {
								localUrl: d,
								mimetype: o
							};
							if (!o || !Object(h.i)(o)) return {
								error: {
									type: c.R
								}
							};
							if (o.startsWith("image/")) {
								if (a && !a.images) {
									const e = s.fbt._("Images are not allowed in r/{subredditName}", [s.fbt._param("subredditName", n)], {
										hk: "3C2E7Q"
									});
									return k(c.R, e)
								}
								if ("image/gif" === o) {
									if (t.size > c.X) return k(c.J)
								} else if (t.size > c.Z) return k(c.P);
								const e = await Object(m.a)(d);
								i.width = e.width, i.height = e.height
							} else if (o.startsWith("video/")) {
								const o = !(null == r || !r.id) && Object(j.o)(e, {
										subredditId: r.id,
										benefit: S.a.HdVideo
									}),
									l = o ? 2 * c.db : c.db;
								if (t.size > l) return k(c.ic);
								let p;
								try {
									p = await Object(h.h)(d, !0)
								} catch (u) {
									return k(c.R)
								}
								if (a) {
									const {
										videos: e,
										images: t
									} = a;
									if (t && !e && p.duration > c.eb) {
										const e = s.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [s.fbt._param("subredditName", n)], {
											hk: "46ULiz"
										});
										return k(c.R, e)
									}
									if (!t && !e) {
										const e = s.fbt._("Videos are not allowed in r/{subredditName}", [s.fbt._param("subredditName", n)], {
											hk: "4uTUZb"
										});
										return k(c.R, e)
									}
								}
								const b = o ? 2 * c.cb : c.cb;
								if (p.duration > b) {
									const e = s.fbt._("Video is too long. Maximum video length is {duration} minutes.", [s.fbt._param("duration", (b / 60).toString())], {
										hk: "20nB6Q"
									});
									return k(c.R, e)
								}
								if (p.duration < c.kb) {
									const e = s.fbt._("Video is too short. Minimum video length is {duration} seconds.", [s.fbt._param("duration", c.kb.toString())], {
										hk: "49PSW8"
									});
									return k(c.R, e)
								}
								if (p.height < c.lb || p.width < c.mb) {
									const e = s.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [s.fbt._param("min_video_width", c.mb.toString()), s.fbt._param("min_video_height", c.lb.toString())], {
										hk: "2HSUGl"
									});
									return k(c.R, e)
								}
								if (t.size / p.duration < c.jb) {
									const e = s.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [s.fbt._param("min_bitrate", (c.jb / c.S).toString())], {
										hk: "1ehgDE"
									});
									return k(c.R, e)
								}
								i.height = p.height, i.width = p.width, i.videoDuration = p.duration, i.videoFirstFrameUrl = p.firstFrame.dataUrl
							}
							return {
								metadata: i
							}
						}(o(), e, i);
						if (y || !E) return {
							error: y
						};
						n(Object(u.m)({
							key: t,
							metadata: {
								fileSource: r,
								...E
							}
						})), D = !0, a && a();
						const O = e.name,
							_ = await (async (e, t, r) => Object(p.a)(Object(b.a)(e, [f.a]), {
								endpoint: `${e.apiUrl}/api/media/asset.json`,
								method: c.hb.POST,
								data: {
									filepath: t,
									mimetype: r
								}
							}))(d(), O, E.mimetype);
						return _.ok ? (v = _.body.asset.asset_id, {
							uploadLease: _.body.args
						}) : {
							error: _.error || void 0
						}
					}, !0)), P(!1), o().uploads[t] || null
				}, M = e => async (t, r, {
					apiContext: s
				}) => {
					const a = r().uploads[e];
					a && !Object(E.c)(a) && await t(U(a.file, a.key, a.metadata.fileSource, void 0))
				}, G = (e, t, r) => async (a, c) => {
					const d = e.map((e, s) => new Promise(async s => {
							const c = Object(E.d)(r, n()().slice(-6));
							await a(U(e, c, t, () => s({
								uploadKey: c,
								isValid: !0
							}))), s({
								uploadKey: c,
								isValid: !1
							})
						})),
						u = await Promise.all(d),
						l = u.map(e => e.uploadKey);
					return a(((e, t = 3) => async (r, a) => {
						const {
							uploads: n
						} = a(), c = e.map(e => n[e]).filter(e => e.status === E.a.FAILED && !e.metadata.mimetype).map(e => e.error), d = c.length > t ? t - 1 : c.length, u = c.length - d;
						c.slice(0, d).forEach(e => r(Object(i.f)({
							duration: i.a,
							kind: w.b.Error,
							text: Object(o.a)(e)
						}))), u > 0 && r(Object(i.f)({
							duration: i.a,
							kind: w.b.Error,
							text: s.fbt._({
								"*": "Couldn't add {number} more files",
								_1: "Couldn't add 1 more file"
							}, [s.fbt._plural(u, "number")], {
								hk: "2fQwvl"
							})
						}))
					})(l)), u.filter(e => e.isValid).map(e => e.uploadKey)
				}, F = (e, t) => async (r, a) => {
					const n = a(),
						c = Object(T.U)(n),
						{
							items: o
						} = c,
						d = !o.length && 1 === e.length,
						p = Object(T.L)(n) && !d;
					let b = !1,
						f = e;
					if (p) {
						if (Object(v.v)(c)) return void r(Object(i.f)({
							kind: w.b.Error,
							text: s.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						f.some(e => Object(h.l)(e.type)) && r(Object(i.f)({
							kind: w.b.Error,
							text: s.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), f = f.filter(e => Object(h.k)(e.type));
						const e = Math.max(0, l.b - o.length);
						f.length > e && (r(Object(i.f)({
							kind: w.b.Error,
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
						E = 0 === o.length;
					r(Object(A.d)({
						...c,
						items: b ? m : [...o, ...m],
						selectedKey: E ? y[0] : y[y.length - 1]
					}))
				}
		},
		"./src/reddit/actions/postCreation/submit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return Z
			})), r.d(t, "a", (function() {
				return ne
			})), r.d(t, "b", (function() {
				return de
			}));
			var s = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/telemetry/index.ts"),
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
				h = r("./src/reddit/constants/headers.ts"),
				E = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				O = r("./src/reddit/helpers/flair.ts"),
				_ = r("./src/reddit/helpers/name/index.ts"),
				I = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				g = r("./src/reddit/models/Poll/index.ts"),
				S = r("./src/reddit/models/Post/index.ts"),
				v = r("./src/reddit/models/PostCreationForm/index.ts"),
				w = r("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function j(e) {
				return Math.floor(e.valueOf() / 1e3)
			}
			const T = e => {
					switch (e.kind) {
						case v.o.CROSSPOST:
							return v.o.CROSSPOST;
						case v.o.LINK:
							return v.o.LINK;
						case v.o.POLL:
							return v.o.POLL;
						case v.o.MEDIA:
							return e.makeGif ? v.o.VIDEO_GIF : e.mediaType;
						default:
							return "self"
					}
				},
				D = e => {
					switch (e.kind) {
						case v.o.RICH_TEXT:
							return {
								richtext_json: JSON.stringify({
									document: e.document
								})
							};
						case v.o.MARKDOWN:
							return {
								text: e.markdown
							};
						case v.o.LINK:
						case v.o.MEDIA:
							return {
								url: e.url
							};
						case v.o.CROSSPOST:
							return {
								crosspost_fullname: e.sourcePostId
							};
						case v.o.POLL:
							return e.poll.type === g.a.Prediction ? {
								duration: 999999,
								end_timestamp: j(e.poll.endDate),
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
				A = e => {
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
						...e.kind !== v.o.POLL ? {
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
						...e.kind === v.o.MEDIA && "video" === e.mediaType ? {
							video_poster_url: e.videoThumbnailUrl
						} : {},
						...e.kind === v.o.MEDIA && e.makeGif ? {
							make_gif: "on"
						} : {},
						...e.flair ? {
							flair_id: e.flair.templateId,
							flair_text: Object(O.g)(e.flair)
						} : {},
						...e.validate_on_submit ? {
							validate_on_submit: e.validate_on_submit
						} : {},
						...e.eventSchedule && {
							event_start: e.eventSchedule.startDate,
							event_end: e.eventSchedule.endDate,
							event_tz: e.eventSchedule.timezoneName,
							unlist: e.eventSchedule.submitTime === v.i.AtEventTime
						},
						...e.collectionId && {
							collection_id: e.collectionId
						}
					}
				},
				P = async (e, t) => {
					if (!e.ok) return Object(I.b)(e);
					const r = e.body.json.data;
					let a = r.url;
					a || t.kind !== v.o.MEDIA || (a = await ((e, t) => new Promise(r => {
						const s = new WebSocket(e),
							a = e => {
								s.close(), clearTimeout(n), r(e)
							},
							n = setTimeout(() => {
								a("")
							}, t);
						s.onmessage = e => {
							const t = JSON.parse(e.data),
								r = "success" === t.type ? t.payload.redirect : "";
							a(r)
						}, s.onerror = e => {
							a("")
						}
					}))(r.websocket_url, 3e4));
					const n = r.id || (e => {
							const t = /comments\/(\w+)\/.*$/.exec(e),
								r = t && t[1];
							return r ? `${s.Fb.Post}_${r}` : ""
						})(a),
						c = Object(y.parse)(a).path,
						o = r.drafts_count;
					return {
						...e,
						body: {
							id: n,
							path: c,
							draftsCount: o
						}
					}
				};
			var R = (e, t) => Object(f.a)(Object(m.a)(e, [h.a]), {
				endpoint: Object(w.a)(Object(E.a)(`${e.apiUrl}/api/submit?resubmit=true`)),
				method: s.hb.POST,
				data: A(t)
			}).then(async e => await P(e, t));
			var C = r("./src/reddit/endpoints/scheduledPosts/index.ts"),
				N = r("./src/reddit/endpoints/scheduledPosts/update.ts"),
				k = r("./src/reddit/featureFlags/index.ts"),
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
				$ = r("./src/reddit/actions/postCreation/general.ts"),
				K = r("./src/reddit/actions/postCreation/mediaUpload.ts");
			const Q = Object(a.a)(W.w),
				J = Object(a.a)(W.L),
				z = Object(a.a)(W.o),
				X = Object(a.a)(W.y),
				Y = Object(a.a)(W.X),
				Z = Object(a.a)(W.F),
				ee = Object(a.a)(W.a),
				te = Object(a.a)(W.B),
				re = e => `/r/${e}/about/${H.r}`,
				se = (e, t) => {
					const r = e || {
							duration: s.z,
							options: []
						},
						{
							govType: a,
							newSubreddit: n,
							newTopMod: c
						} = Object(F.s)(t),
						o = {
							...r
						};
					return a && (o.type = a), o.type === g.a.ReplaceTopMod ? (o.params = {
						userName: c
					}, o.options = g.f[g.a.ReplaceTopMod]()) : o.type === g.a.Spinoff ? (o.params = {
						subreddit: n
					}, o.options = g.f[g.a.Spinoff](n)) : o.options = o.options.map(e => ({
						text: e.text.trim()
					})).filter(e => !!e.text), o
				},
				ae = e => {
					const t = e.uploads,
						r = Object(F.U)(e),
						a = Object(F.a)(e),
						n = Object(F.eb)(e);
					if (a === s.Sb.POST) return l.a.getPendingThumbnailUploads(n, t);
					if (a === s.Sb.MEDIA && r && r.items.length) {
						const {
							video: e
						} = r.items[0];
						if (e && e.thumbnail && !t[v.m]) return [{
							...e.thumbnail,
							uploadKey: v.m
						}]
					}
				},
				ne = (e, t) => async (r, a, {
					apiContext: n
				}) => {
					let c = a();
					const {
						pending: o
					} = c.creations.api.post.submit, i = Object(B.g)(c);
					if (o || i) return;
					r(te(e)), c = a();
					const u = Object(F.a)(c),
						l = k.d.rteVideoPoster(c),
						p = ae(c),
						b = u === s.Sb.MEDIA;
					p && (l || b) && (await r(K.f(p)), ae(a())) || (e === v.q.Draft ? await r(Object(d.r)(t.draftId)) : e === v.q.ScheduledPost && Object(q.r)(c) ? await r(ce(t)) : e === v.q.ScheduledPost ? await r(oe(t)) : await r(de(t)))
				}, ce = e => async (t, r, {
					gqlContext: s
				}) => {
					const a = r(),
						c = Object(F.bb)(a),
						o = Object(F.cb)(a, e),
						d = Object(F.h)(a),
						l = Object(q.r)(a);
					if (!(o && d.id && c && Object(x.f)(l))) return;
					const p = d.id,
						b = Object(q.a)(a, {
							subredditId: p,
							scheduledPostId: l
						});
					if (b && Object(n.a)(Object(M.r)(b)(a)), t(Q(o)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(F.v)(r()))) return;
					const {
						isPoll: f,
						polls: y
					} = Object(F.s)(a), m = se(y, a), h = {
						...Object(C.e)({
							poll: f ? m : void 0,
							submission: o,
							schedule: c,
							subredditId: d.id,
							scheduledPostId: l
						})
					}, E = await Object(N.a)(s(), h);
					if (E.ok) return t(Object(i.e)({
						subredditId: d.id
					})), void t(Object(u.a)(re(d.name), !1));
					const O = E.error;
					t(z(O))
				}, oe = e => async (t, r, {
					gqlContext: s
				}) => {
					const a = r(),
						c = Object(F.bb)(a),
						o = Object(F.cb)(a, e),
						d = Object(F.h)(a),
						l = Object(q.b)(a);
					if (!o || !d.id || !c) return;
					if (t(Q(o)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(F.v)(r()))) return;
					const {
						isPoll: p,
						polls: b
					} = Object(F.s)(a), f = se(b, a), y = {
						duration: f.duration,
						options: f.options
					}, m = {
						...Object(C.d)({
							poll: p ? y : void 0,
							submission: o,
							schedule: c,
							subredditId: d.id
						}),
						creationToken: l
					}, h = await Object(C.a)(s(), m);
					if (h.ok) {
						t(Object(i.e)({
							subredditId: d.id
						}));
						const e = h.body.data.createScheduledPost.scheduledPost;
						return e && Object(n.a)(Object(M.o)(Object(L.d)(e))(a)), void t(Object(u.a)(re(d.name), !1))
					}
					const E = h.error;
					t(z(E))
				}, de = e => async (t, r, {
					apiContext: a
				}) => {
					const n = r(),
						d = Object(F.cb)(n, e),
						{
							isPoll: i,
							polls: l
						} = Object(F.s)(n),
						y = se(l, n);
					if (!d) return;
					if (t(Q(d)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(F.v)(r()))) return;
					let O;
					const _ = i && k.d.spPolls(n);
					if ((O = _ ? await
							function(e, t, r) {
								const a = t.destSubreddit.id;
								return Object(f.a)(e, {
									method: s.hb.POST,
									endpoint: `${p.a.metaUrl}/polls/${a}`,
									type: "json",
									data: {
										poll: r,
										subredditId: a,
										...Object(b.a)(A(t))
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
										s = await P(r, t);
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
							}(a(), d, y) : i ? await ((e, t) => Object(f.a)(Object(m.a)(e, [h.a]), {
								endpoint: Object(w.a)(Object(E.a)(`${e.apiUrl}/api/submit_poll_post.json?resubmit=true`)),
								method: s.hb.POST,
								data: A(t),
								type: "json"
							}).then(e => P(e, t)))(a(), {
								...d,
								kind: v.o.POLL,
								poll: y
							}) : d.kind === v.o.GALLERY ? await ((e, t) => Object(f.a)(Object(m.a)(e, [h.a]), {
								endpoint: Object(w.a)(Object(E.a)(`${e.apiUrl}/api/submit_gallery_post.json?resubmit=true`)),
								method: s.hb.POST,
								data: {
									...A(t),
									items: t.galleryItems.map(e => ({
										caption: e.caption,
										outbound_url: e.url,
										media_id: e.assetId
									}))
								},
								type: "json"
							}).then(e => P(e, t)))(a(), d) : await R(a(), d)).ok) {
						const e = Object(V.j)(n),
							r = O.body;
						t(J({
							draftId: d.draftId,
							response: r
						})), _ && t(Object(c.c)({
							poll: r.poll
						}));
						const s = (r.path || `/user/${Object(G.e)(e)}/posts`).replace(/^\/r\/u_/, "/user/");
						t(Object(o.subredditInvalidateListing)(d.destSubreddit.name)), t(Object(u.a)(s, !1))
					} else {
						if (i) {
							const e = O.error;
							t(X(e))
						}
						const e = O.error;
						e.type === s.G.BAD_CAPTCHA_ERROR ? t(ee()) : e.type === s.G.VALIDATION_ERROR ? t(Y(e)) : e.type === s.G.SUBMIT_VALIDATION_ERROR ? t(Z(e)) : t(z(e))
					}
					const I = Object($.m)(d.kind),
						g = O.ok && O.body && O.body.id && Object(S.s)(O.body.id),
						j = r();
					U.s(j, I, g)
				}
		},
		"./src/reddit/actions/postLevelCrowdControl.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/endpoints/crowdControl/index.ts");
			const n = "POST_LEVEL_CC_LOADED",
				c = Object(s.a)(n),
				o = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = await Object(a.a)(s(), e);
					if (n.ok) {
						const r = n.body.data.postInfoById.crowdControlLevel;
						t(c({
							[e]: r
						}))
					}
				}
		},
		"./src/reddit/actions/presence.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return p
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts"),
				d = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var i = r("./src/reddit/selectors/experiments/presenceIndicator.ts");
			const u = "PRESENCE__PRESENTUSERS_LOADED",
				l = Object(s.a)(u),
				p = (e, t, r) => async (s, u, {
					apiContext: p
				}) => {
					const b = u();
					if (!Object(i.a)(b)) return;
					const f = new Set;
					e && Object.values(e).map(e => {
						e.authorId && f.add(e.authorId)
					}), t && Object.values(t).map(e => {
						e.authorId && f.add(e.authorId)
					});
					const y = await (async (e, t, r) => Object(n.a)(Object(c.a)(e, [o.a]), {
						endpoint: Object(d.a)(`${e.apiUrl}/api/presence`),
						method: a.hb.POST,
						data: {
							user_fullnames: t.join(","),
							subreddit_fullname: r || ""
						}
					}).then(e => {
						if (!e.ok) return {
							presentUsers: []
						};
						const r = e.body.present_user_fullnames || [],
							s = new Set(r),
							a = {};
						return t.forEach(e => {
							a[e] = s.has(e)
						}), {
							presentUsers: a
						}
					}))(p(), Array.from(f), r);
					s(l(y))
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
				return h
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/governance/errorToast.ts"),
				n = r("./src/reddit/endpoints/governance/badges.ts"),
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
				h = (Object(s.a)(l), Object(s.a)(p), Object(s.a)(b), ({
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
						if (r.ok && i && (o = await Object(n.c)(s(), d.subredditId, i.id)), r.ok) {
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
						})), Object(a.a)(t, r.error)
					}
				})
		},
		"./src/reddit/actions/reCaptchaEnterprise.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return D
			})), r.d(t, "a", (function() {
				return A
			})), r.d(t, "d", (function() {
				return P
			})), r.d(t, "b", (function() {
				return N
			}));
			var s = r("./src/lib/asyncActions/index.ts"),
				a = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/constants/euCookiePolicy.ts"),
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
				return t => async (r, s, a) => {
					const n = s();
					if (e(n)) return t(r, s, a)
				}
			}
			var l = r("./node_modules/lodash/every.js"),
				p = r.n(l),
				b = r("./src/reddit/constants/experiments.ts"),
				f = r("./node_modules/os-browserify/browser.js"),
				y = r.n(f);
			const m = /\s+at.*(?:\(|\s)(.*)\)?/,
				h = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/,
				E = void 0 === y.a.homedir ? "" : y.a.homedir();
			const O = e => e.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, "");
			class AggregateError_AggregateError extends Error {
				constructor(e) {
					if (!Array.isArray(e)) throw new TypeError(`Expected input to be an Array, got ${typeof e}`);
					let t = (e = [...e].map(e => e instanceof Error ? e : null !== e && "object" == typeof e ? Object.assign(new Error(e.message), e) : new Error(e))).map(e => "string" == typeof e.stack ? O(function(e, t = {}) {
						return t = {
							pretty: !1,
							...t
						}, e.replace(/\\/g, "/").split("\n").filter(e => {
							const t = e.match(m);
							if (null === t || !t[1]) return !0;
							const r = t[1];
							return !r.includes(".app/Contents/Resources/electron.asar") && !r.includes(".app/Contents/Resources/default_app.asar") && !h.test(r)
						}).filter(e => "" !== e.trim()).map(e => t.pretty ? e.replace(m, (e, t) => e.replace(t, t.replace(E, "~"))) : e).join("\n")
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
						const a = s.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
						return e.replace(a, s.indent.repeat(t))
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
				w = r("./src/reddit/selectors/meta.ts");
			const j = e => g.d.reCaptchaEnterprise(e) && !Object(w.d)(e),
				T = e => !!Object(v.c)(e, {
					experimentEligibilitySelector: Object(S.d)(Object(S.b)(...n.d)),
					experimentName: b.wd
				}),
				D = Object(s.b)("LOAD_RECAPTCHA_ENTERPRISE"),
				A = Object(s.b)("EXECUTE_RECAPTCHA_ENTERPRISE"),
				P = Object(s.b)("SEND_RECAPTCHA_TOKEN"),
				R = e => u(e => p()([j, T, e => e.tracking.reCaptchaEnterprise.send === s.a.New && e.tracking.reCaptchaEnterprise.execute === s.a.Succeeded && e.tracking.reCaptchaEnterprise.load === s.a.Succeeded], t => t(e)))(async (t, r, {
					gqlContext: s
				}) => {
					t(P.requested());
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
								errors: a
							} = r.body.data.verifyRecaptchaToken;
							if (a && a.length > 0) throw new AggregateError_AggregateError(a);
							if (!s) throw new RequestFailedWithoutErrorsError_RequestFailedWithoutErrorsError
						})(s(), e), t(P.succeeded())
					} catch (a) {
						throw t(P.failed()), a
					}
				}),
				C = (e, t) => Object(S.g)(t) ? (e => `STAGING__${e}`)(e) : e,
				N = (e = d.a.PageLoad) => u(e => p()([j, T, e => e.tracking.reCaptchaEnterprise.load === s.a.New], t => t(e)))(async (t, r) => {
					const n = r();
					try {
						await t((() => u(e => p()([j, T, e => e.tracking.reCaptchaEnterprise.load === s.a.New], t => t(e)))(async e => {
							e(D.requested());
							try {
								await d.b.loadScript(), e(D.succeeded())
							} catch (t) {
								throw e(D.failed()), t
							}
						}))());
						const r = await t((e => u(e => p()([j, T, e => e.tracking.reCaptchaEnterprise.load === s.a.Succeeded && e.tracking.reCaptchaEnterprise.execute === s.a.New], t => t(e)))(async t => {
							t(A.requested());
							try {
								const r = await d.b.execute(e);
								return t(A.succeeded({
									token: r
								})), r
							} catch (r) {
								throw t(A.failed()), r
							}
						}))({
							action: C(e, n)
						}));
						r && await t(R(r))
					} catch (c) {
						if (c instanceof GraphQLRequestError_GraphQLRequestError && "object" == typeof c.response.error && null !== c.response.error && c.response.error.type === a.i) return;
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
				return a
			})), r.d(t, "e", (function() {
				return n
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			}));
			const s = "SET_RECENT_SUBREDDITS",
				a = "SUBREDDIT_VISITED",
				n = "SUBREDDIT_SAVED",
				c = "COPY_SAVED_SUBREDDITS",
				o = "COPY_SAVED_ID_SUBREDDITS",
				d = 10
		},
		"./src/reddit/actions/reportFlow/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return s
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "c", (function() {
				return n
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
				a = "REPORT__LOADED",
				n = "REPORT__FAILED",
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
				a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				d = r("./src/reddit/constants/headers.ts");
			const i = "SITEWIDE_RULES_LOADED",
				u = "LIVESTREAMING_RULES_LOADED",
				l = Object(a.a)(i),
				p = Object(a.a)(u),
				b = () => async (e, t, {
					apiContext: r
				}) => {
					if (!t().user) return;
					const s = await (e => Object(c.a)(Object(o.a)(e, [d.a]), {
						endpoint: `${e.apiUrl}/api/sitewide_rules.json`,
						method: n.hb.GET
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
						method: n.hb.GET
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
				return a
			})), r.d(t, "f", (function() {
				return n
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
				return h
			})), r.d(t, "i", (function() {
				return E
			})), r.d(t, "r", (function() {
				return O
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
				return w
			})), r.d(t, "w", (function() {
				return j
			})), r.d(t, "t", (function() {
				return T
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js");
			const a = "SCHEDULED_POSTS_REQUESTED",
				n = "SCHEDULED_POSTS_LOADED",
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
				h = "STANDALONE_POST__EDIT_LOAD",
				E = "SCHEDULED_POST__DELETE_SUCCESS",
				O = () => s.fbt._("Failed to load scheduled posts", null, {
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
				w = () => s.fbt._("Successfully submitted scheduled post!", null, {
					hk: "ONo6q"
				}),
				j = () => s.fbt._("Successfully edited scheduled post!", null, {
					hk: "HfGcT"
				}),
				T = () => s.fbt._("Failed to update scheduled post", null, {
					hk: "2zBuRu"
				})
		},
		"./src/reddit/actions/scheduledPosts/edit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return O
			})), r.d(t, "a", (function() {
				return I
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/react-router-redux/es/index.js"),
				n = r("./src/telemetry/index.ts"),
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
			const h = Object(c.a)(d.n),
				E = Object(c.a)(d.b),
				O = (e, t) => async (r, s, n) => {
					const c = Object(m.a)(s(), {
						scheduledPostId: t,
						subredditId: e
					});
					c && (await r(Object(a.b)(Object(y.c)(c.subreddit.name, c.collectionId))), r((Object(b.p)(c) ? E : h)(c)))
				}, _ = (e, t) => {
					Object(b.p)(t) ? e(Object(o.d)({
						scheduledPost: t
					})) : e(Object(o.h)({
						scheduledPost: t
					}))
				}, I = (e, t, r) => async (a, c, {
					gqlContext: y
				}) => {
					a(Object(o.g)());
					const h = Object(m.a)(c(), {
						subredditId: e,
						scheduledPostId: t
					});
					if (h && Object(b.p)(h) && Object(n.a)(Object(p.u)()(c(), h)), !h) return void a(Object(o.f)({
						message: s.fbt._("Scheduled post not found", null, {
							hk: "2zjM55"
						})
					}));
					if (!Object.keys(r).length) return void _(a, h);
					const E = await Object(u.a)(y(), {
							...r,
							id: t
						}),
						O = E.body;
					if (!(E.ok && O && O.data && O.data.updateScheduledPost && O.data.updateScheduledPost.ok && O.data.updateScheduledPost.scheduledPost)) return a(Object(o.f)({
						message: E.error && E.error.fields && E.error.fields.length && E.error.fields[0].msg || s.fbt._("Unknown error", null, {
							hk: "fXs5s"
						})
					})), void a(Object(i.f)(Object(i.e)(d.t(), f.b.Error, d.s(), I(e, t, r))));
					a(Object(i.f)(Object(i.e)(d.w(), f.b.SuccessCommunity))), _(a, Object(l.d)(O.data.updateScheduledPost.scheduledPost))
				}
		},
		"./src/reddit/actions/scheduledPosts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return m
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "h", (function() {
				return E
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "c", (function() {
				return S
			})), r.d(t, "e", (function() {
				return w
			})), r.d(t, "i", (function() {
				return T
			})), r.d(t, "a", (function() {
				return D
			})), r.d(t, "b", (function() {
				return P
			}));
			var s = r("./src/lib/assertNever.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/scheduledPosts/constants.ts"),
				c = r("./src/reddit/actions/scheduledPosts/edit.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/endpoints/scheduledPosts/index.ts"),
				i = r("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				u = r("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				l = r("./src/reddit/models/ScheduledPost/index.ts"),
				p = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/selectors/scheduledPosts/index.ts"),
				f = r("./src/telemetry/index.ts");
			const y = Object(a.a)(n.g),
				m = Object(a.a)(n.k),
				h = Object(a.a)(n.j),
				E = Object(a.a)(n.o),
				O = Object(a.a)(n.d),
				_ = Object(a.a)(n.f),
				I = Object(a.a)(n.m),
				g = Object(a.a)(n.a),
				S = Object(a.a)(n.c),
				v = Object(a.a)(n.e),
				w = Object(a.a)(n.h),
				j = (e, t) => {
					e(v()), e(Object(o.f)(Object(o.e)(n.r(), p.b.Error, n.s(), T(t))))
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
				}) => async (a, n, {
					gqlContext: c
				}) => {
					if (Object(b.h)(n(), {
							subredditId: e
						})) return;
					a(y());
					const o = {
							subredditId: e,
							includeRecurring: r,
							includeStandalone: t,
							...s
						},
						u = await Object(d.b)(c(), o);
					Object(d.f)(u, o) ? A(a, Object(i.e)(u.body.data), o) : j(a, o)
				}, D = e => async (t, r, {
					gqlContext: s
				}) => {
					const a = r();
					if (!Object(b.h)(a, {
							subredditId: e
						})) return t(T({
						subredditId: e
					}));
					if (!Object(b.g)(a, {
							subredditId: e,
							type: l.f.standalonePosts
						})) return;
					const n = Object(b.c)(a, {
						subredditId: e,
						type: l.f.standalonePosts
					});
					if (!n) return;
					t(y());
					const c = {
							subredditId: e,
							includeStandalone: {
								standaloneFirst: 25,
								standaloneAfter: n
							}
						},
						o = await Object(d.b)(s(), c);
					o.ok ? A(t, Object(i.e)(o.body.data), c) : t(v())
				}, A = (e, t, r) => {
					Object(i.b)(t) ? e(_(t)) : Object(i.a)(t) ? e(g(t)) : Object(i.c)(t) ? e(I(t)) : j(e, r)
				}, P = (e, t) => async (r, a, n) => {
					const o = {},
						d = a();
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
				a = r("./node_modules/uuid/v4.js"),
				n = r.n(a),
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
					method: c.hb.GET,
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
										a = r.results.data.children.length > 0 ? r.results.data.children[0].data : null,
										c = {
											id: n()(),
											post: a ? Object(l.a)(a) : null,
											rawQuery: r.query_string,
											searchQuery: r.display_string,
											section: p.c.trending,
											isWhitelisted: r.is_subreddit_whitelisted,
											subredditInfo: a ? {
												icon: a.sr_detail.community_icon || a.sr_detail.icon_img,
												displayText: a.sr_detail.display_name_prefixed
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
				return a
			}));
			const s = "SHORTCUTS__ACTIVE_COMMENT_SET",
				a = "SHORTCUTS__ACTIVE_POST_SET"
		},
		"./src/reddit/actions/sso/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			}));
			const s = "LINKED_IDENTITY__ADD",
				a = "LINKED_IDENTITY__REMOVE"
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
				return _
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "e", (function() {
				return S
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/streaming/constants.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/redditGQL/operations/FetchSubredditStreamingModSettings.json"),
				i = r("./src/redditGQL/operations/UpdateSubredditStreamingModSettings.json"),
				u = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/reddit/selectors/subreddit.ts");
			const p = Object(a.a)(n.a),
				b = "STREAMING_MOD_SETTINGS__UPDATE_PENDING",
				f = "STREAMING_MOD_SETTINGS__UPDATE_LOADED",
				y = "STREAMING_MOD_SETTINGS__UPDATE_FAILED",
				m = Object(a.a)(b),
				h = Object(a.a)(f),
				E = Object(a.a)(y),
				O = e => async (t, r, {
					gqlContext: a
				}) => {
					const n = Object(l.T)(r(), {
						subredditId: e
					});
					if (void 0 === n) {
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
					}))(a(), e);
					if (!i.ok) {
						const e = s.fbt._("Could not fetch settings for {subredditName}", [s.fbt._param("subredditName", n.name)], {
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
					gqlContext: a
				}) => {
					await r(I(t, e, a())), r(O(t))
				}, I = (e, t, r) => async (r, a, {
					gqlContext: n
				}) => {
					r(m({
						subredditId: e
					}));
					const d = await ((e, t) => Object(o.a)(e, {
						...i,
						variables: t
					}))(n(), {
						input: {
							subredditId: e,
							liveStreamingModeratorSettings: t
						}
					});
					if (!d.ok || !d.body.data.updateSubredditLiveStreamingModeratorSettings.ok) {
						const t = d.error && d.error.fields ? d.error.fields[0].msg : s.fbt._("Could not update community broadcasting settings", null, {
								hk: "3Uw7zu"
							}),
							a = Object(c.e)(t, u.b.Error);
						await r(Object(c.f)({
							...a,
							duration: c.a
						})), r(E({
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
					})), r(h({
						subredditId: e
					}))
				}, g = (e, t, r) => async (s, a, {
					gqlContext: n
				}) => {
					const c = [...r.whitelistedUsers.map(e => ({
						redditorName: e.name
					})), {
						redditorName: t
					}];
					await s(I(e, {
						whitelistedRedditors: c
					}, n())), await s(O(e))
				}, S = (e, t, r) => async (s, a, {
					gqlContext: n
				}) => {
					const c = r.whitelistedUsers.filter(e => e.name !== t).map(e => ({
						redditorName: e.name
					}));
					await s(I(e, {
						whitelistedRedditors: c
					}, n())), await s(O(e))
				}
		},
		"./src/reddit/actions/subredditAutocomplete/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = "SUBREDDIT_AUTOCOMPLETE__PENDING",
				a = "SUBREDDIT_AUTOCOMPLETE__LOADED",
				n = "SUBREDDIT_AUTOCOMPLETE__FAILED"
		},
		"./src/reddit/actions/subredditCreation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return S
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "e", (function() {
				return w
			})), r.d(t, "b", (function() {
				return j
			})), r.d(t, "a", (function() {
				return T
			})), r.d(t, "f", (function() {
				return R
			})), r.d(t, "g", (function() {
				return C
			})), r.d(t, "h", (function() {
				return N
			})), r.d(t, "i", (function() {
				return k
			}));
			var s = r("./node_modules/react-router-redux/es/index.js"),
				a = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
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
				h = r("./src/redditGQL/operations/ValidateCreateSubreddit.json");
			var E = r("./src/reddit/helpers/correlationIdTracker.ts"),
				O = r("./src/reddit/helpers/trackers/subredditCreation.ts"),
				_ = r("./src/reddit/selectors/posts.ts"),
				I = r("./src/reddit/selectors/subreddit.ts"),
				g = r("./src/telemetry/index.ts");
			const S = "SUBREDDIT__CREATE_SET_INITIAL_CROSSPOST",
				v = "SUBREDDIT__CREATE_PENDING",
				w = "SUBREDDIT__CREATE_SUCCEEDED",
				j = "SUBREDDIT__CREATE_FAILED",
				T = "SUBREDDIT__CREATE_CLEARED",
				D = Object(n.a)(v),
				A = Object(n.a)(w),
				P = Object(n.a)(j),
				R = Object(n.a)(T),
				C = Object(n.a)(S),
				N = e => async (t, r, {
					apiContext: n
				}) => {
					const m = r(),
						{
							name: h,
							type: S,
							crosspostId: v
						} = e;
					if (Object(I.k)(m)) return;
					t(D({
						subredditName: h
					}));
					const w = await ((e, t) => Object(l.a)(Object(p.a)(e, [b.a]), {
						endpoint: Object(f.a)(`${e.apiUrl}/api/v1/subreddit/create_subreddit`),
						method: a.hb.POST,
						data: y(t)
					}))(n(), e);
					if (w.ok) {
						const r = w.body,
							n = r.fullname;
						if (Object(g.a)(Object(O.d)(S, e, n)(m)), t(A({
								subredditName: h
							})), v) {
							const e = Object(_.I)(m, {
								postId: v
							});
							t(Object(c.h)(e.title)), t(Object(c.g)({
								submissionType: a.Sb.CROSSPOST
							})), await t(Object(d.b)({
								destSubreddit: {
									...r,
									isProfile: !1
								},
								sourcePostId: v,
								postFieldValidationPending: Promise.resolve()
							})), Object(i.b)(v)
						}
						await t(Object(s.b)(`${r.path}`)), t(Object(o.h)(u.a.POST_FLOW_UPSELL_MODAL_ID)), Object(g.a)(Object(O.g)()(m)), Object(E.b)(E.a.SubredditCreation)
					} else w.error && Object(g.a)(Object(O.h)(w.error.type, h)(m)), t(P({
						subredditName: h,
						error: w.error
					}))
				}, k = e => async (t, r, {
					gqlContext: s
				}) => {
					const a = r(),
						n = {
							name: e
						},
						c = await ((e, t) => Object(m.a)(e, {
							...h,
							variables: t
						}))(s(), {
							input: n
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
						t(P({
							subredditName: e,
							error: r
						})), r && Object(g.a)(Object(O.h)(r.type, e)(a))
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
				a = r("./src/reddit/actions/subscription/index.ts"),
				n = r("./src/lib/constants/index.ts"),
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
					await e(a.e());
					const {
						api: s,
						ids: u
					} = t().subreddits.crosspostable;
					if (s.pending || Object.keys(u).length) return;
					const l = await ((e, t) => Object(c.a)(Object(o.a)(e, [d.a]), {
						data: t,
						endpoint: `${e.apiUrl}/api/crosspostable_subreddits.json`,
						method: n.hb.GET
					}))(r(), {
						sr_detail: !1
					});
					if (l.ok) {
						const r = t(),
							s = l.body && l.body.length ? l.body.map(e => Object(i.E)(r, e)).filter(e => !!e).reduce((e, t) => (e[t] = !0, e), {}) : {};
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
				return a
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return c
			}));
			const s = "SUBREDDIT_MENTION_LOADED",
				a = "SUBREDDIT__MODEL_SUCCEEDED",
				n = "SUBREDDIT__MODEL_PENDING",
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
				a = r("./src/reddit/actions/preferences.ts"),
				n = r("./src/lib/makeGqlRequest/index.ts"),
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
					})), t(Object(a.x)());
					const y = await ((e, t) => Object(n.a)(e, {
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
				return a
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return c
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const a = "THEME_CHANGED",
				n = (Object(s.a)(a), "BOOTUP_THEME"),
				c = Object(s.a)(n)
		},
		"./src/reddit/actions/tracking.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return c
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const a = "TRACKING__VIEWPORT_DATA_LOADED",
				n = "TRACKING__VIEWPORT_DATA_UNLOADED",
				c = Object(s.a)(a);
			Object(s.a)(n)
		},
		"./src/reddit/actions/trafficStats/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = "SUBREDDIT__TRAFFIC_STATS_LOADED",
				a = "SUBREDDIT__TRAFFIC_STATS_PENDING",
				n = "SUBREDDIT__TRAFFIC_STATS_FAILED"
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
				return h
			})), r.d(t, "m", (function() {
				return _
			})), r.d(t, "k", (function() {
				return T
			})), r.d(t, "l", (function() {
				return D
			})), r.d(t, "i", (function() {
				return A
			})), r.d(t, "j", (function() {
				return P
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/get.js"),
				a = r.n(s),
				n = r("./node_modules/uuid/v4.js"),
				c = r.n(n),
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
				h = "UPLOAD_REMOVED",
				E = Object(o.a)(u),
				O = Object(o.a)(l),
				_ = Object(o.a)(p),
				I = Object(o.a)(b),
				g = Object(o.a)(f),
				S = Object(o.a)(y),
				v = Object(o.a)(m),
				w = Object(o.a)(h),
				j = new Map,
				T = (e, t) => {
					const r = j.get(e) || [];
					r.push(t), j.set(e, r)
				},
				D = (e, t, r, s = !1) => async (n, o, {
					apiContext: u
				}) => {
					const l = t;
					if (o().uploads[l] && Object(i.c)(o().uploads[l])) return;
					const p = c()(),
						b = () => {
							const e = o().uploads[l];
							return !e || e.id !== p || e.status === i.a.CANCELED
						};
					n(E({
						key: l,
						id: p,
						file: e
					}));
					const {
						uploadLease: f,
						error: y
					} = await r(o().uploads[l]);
					if (b()) return;
					if (y || !f) return void n(S({
						key: l,
						error: y
					}));
					let m;
					T(p, () => {
						m && m.abort()
					}), n(O({
						key: l
					}));
					const h = await Object(d.a)(e, f, e => (m = e, s && e.on("progress", e => {
						if (!b() && "upload" === e.direction) {
							const t = {
								percent: e.percent,
								total: e.total,
								uploaded: e.loaded
							};
							n(I({
								key: l,
								progress: t
							}))
						}
					}), e));
					if (m = null, !b())
						if (h.ok) {
							const e = decodeURIComponent(h.body.PostResponse.Location);
							n(g({
								key: l,
								url: e
							}))
						} else {
							const e = a()(h, "body.Error.Message.0"),
								t = {
									type: "ERROR",
									...e ? {
										fields: [{
											field: "0",
											msg: e
										}]
									} : {}
								};
							n(S({
								key: l,
								error: t
							}))
						}
				}, A = (e, t = !1) => (r, s) => {
					const a = s().uploads[e];
					a && (((e, t) => {
						const r = j.get(e);
						r && r.forEach(r => r(e, t)), j.delete(e)
					})(a.id, t), r(t ? w({
						key: e
					}) : v({
						key: e
					})))
				}, P = (e, t = !1) => (r, s) => {
					Object.keys(s().uploads).forEach(s => {
						s.startsWith(e) && r(A(s, t))
					})
				}
		},
		"./src/reddit/actions/upvotePrompt.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return y
			})), r.d(t, "b", (function() {
				return m
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/config.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/actions/post.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/helpers/localStorage/index.ts"),
				u = r("./src/reddit/selectors/telemetry.ts");
			const l = "upvote_prompt";
			var p = r("./src/reddit/selectors/experiments/index.ts"),
				b = r("./src/reddit/selectors/experiments/upvotePrompt.ts"),
				f = r("./src/telemetry/index.ts");
			const y = "INCREMENT_SEEN_COUNT_PER_SESS",
				m = (e, t, r) => async (n, c) => {
					const d = c(),
						p = Object(i.A)(),
						y = Date.now(),
						m = p && y - p < 18e4,
						_ = Object(b.c)(d, {
							postId: e
						}),
						I = d.upvotePromptCountPerSess,
						g = (() => {
							const e = Object(i.z)();
							if (!e) return [];
							const t = Date.now();
							return e.filter(e => t - e < 864e5)
						})();
					if (!e || !_ || m || I >= 4 || g.length >= 3) return;
					const S = E(d, t);
					if (!S) return;
					n(Object(o.f)({
						text: S,
						buttonText: s.fbt._("UPVOTE POST", null, {
							hk: "1u7UnZ"
						}),
						customIconAsset: `${a.a.assetPath}/img/snoo-upvote.png`,
						duration: b.a,
						buttonAction: h(e),
						onClose: () => Object(f.a)((e => ({
							source: l,
							action: "click",
							noun: "close",
							...Object(u.defaults)(e)
						}))(d))
					}));
					const v = [...g, Date.now()].slice(Math.max(g.length + 1 - 3, 0));
					Object(f.a)((e => ({
						source: l,
						action: "view",
						noun: l,
						...Object(u.defaults)(e)
					}))(d)), Object(i.Fb)(), Object(i.Eb)(v), n(O()), r && r()
				}, h = e => async (t, r) => {
					Object(f.a)((e => ({
						source: l,
						action: "click",
						noun: "upvote",
						...Object(u.defaults)(e)
					}))(r())), Object(b.c)(r(), {
						postId: e
					}) && t(Object(c.db)(e))
				}, E = (e, t) => {
					const r = Object(p.d)(e, {
						experimentName: d.ce
					});
					let a = "";
					return (null == r ? void 0 : r.variant) === d.de.Variant1 ? a = t ? s.fbt._("Was that a good post? Upvote it so it gets seen by more people", null, {
						hk: "2NOllx"
					}) : s.fbt._("Was this a good post? Upvote it so it gets seen by more people", null, {
						hk: "K1yBi"
					}) : (null == r ? void 0 : r.variant) === d.de.Variant2 && (a = t ? s.fbt._("If you enjoyed that post, upvote it so that more redditors will see it too.", null, {
						hk: "1Y6B4I"
					}) : s.fbt._("If you enjoyed this post, upvote it so that more redditors will see it too.", null, {
						hk: "HR9Ye"
					})), a
				}, O = Object(n.a)(y)
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./src/lib/matchRoute/index.ts"),
				a = r("./src/lib/opener/index.ts"),
				n = r("./node_modules/react-router-redux/es/index.js");
			const c = (e, t = !0) => async (r, c, {
				routes: o
			}) => {
				const d = c();
				Object(s.a)(e, o, d) ? r(Object(n.b)(e)) : t ? Object(a.d)(e, "_blank") : window.location.assign(e)
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
				return h
			})), r.d(t, "c", (function() {
				return E
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "g", (function() {
				return S
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/blockedRedditors.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/reddit/endpoints/accounts/index.ts"),
				d = r("./src/reddit/models/Toast/index.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const u = "USER_BLOCK__PENDING",
				l = "USER_BLOCK__LOADED",
				p = "USER_BLOCK__FAILED",
				b = Object(a.a)(u),
				f = Object(a.a)(l),
				y = Object(a.a)(p),
				m = e => async (t, r, {
					apiContext: a
				}) => {
					if (r().blockUser.api.pending[e]) return;
					t(b({
						username: e
					}));
					const i = await Object(o.a)(a(), e),
						u = `error-block-${e}`;
					if (i.ok) i.body.name && t(f(i.body)), i.body.id && t(Object(n.f)(i.body.id)), t(c.g(u)), t(c.f({
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
				}, h = "USER_UNBLOCK__PENDING", E = "USER_UNBLOCK__SUCCESS", O = "USER_UNBLOCK__FAILED", _ = Object(a.a)(h), I = Object(a.a)(E), g = Object(a.a)(O), S = e => async (t, r, {
					apiContext: a
				}) => {
					const u = r(),
						l = Object(i.j)(u),
						p = l ? l.id : void 0,
						b = u.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(_({
						name: e
					})), (await Object(o.c)(a(), p, e)).ok ? (t(I({
						name: e
					})), b && b.id && t(Object(n.h)(b.id)), t(c.f({
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
				return h
			})), r.d(t, "h", (function() {
				return I
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/endpoints/accounts/index.ts"),
				o = r("./src/reddit/models/Toast/index.ts");
			const d = "USER_WHITELIST__PENDING",
				i = "USER_WHITELIST__SUCCESS",
				u = "USER_WHITELIST__FAILED",
				l = Object(a.a)(d),
				p = Object(a.a)(i),
				b = Object(a.a)(u),
				f = e => async (t, r, {
					apiContext: a
				}) => {
					t(l());
					const d = await Object(c.e)(a(), e);
					d.ok ? d.body.name && (t(p(d.body)), t(n.f({
						kind: o.b.SuccessCommunity,
						text: s.fbt._("Changes saved", null, {
							hk: "3cOmlv"
						})
					}))) : (t(b()), t(n.f({
						kind: o.b.Error,
						text: s.fbt._("An error has occured. Please try again later", null, {
							hk: "3Dszn7"
						})
					})))
				}, y = "USER_UNWHITELIST__PENDING", m = "USER_UNWHITELIST__SUCCESS", h = "USER_UNWHITELIST__FAILED", E = Object(a.a)(y), O = Object(a.a)(m), _ = Object(a.a)(h), I = e => async (t, r, {
					apiContext: a
				}) => {
					t(E({
						name: e
					})), (await Object(c.d)(a(), e)).ok ? (t(O({
						name: e
					})), t(n.f({
						kind: o.b.SuccessCommunity,
						text: s.fbt._("Changes saved", null, {
							hk: "2o6UcC"
						})
					}))) : (t(_({
						name: e
					})), t(n.f({
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
			var s, a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/endpoints/usernameAvailable/index.ts");
			! function(e) {
				e[e.Available = 0] = "Available", e[e.Error = 1] = "Error", e[e.Pending = 2] = "Pending", e[e.Unavailable = 3] = "Unavailable"
			}(s || (s = {}));
			const c = "USERNAME_AVAILABLE__AVAILABLE",
				o = "USERNAME_AVAILABLE__FAILURE",
				d = "USERNAME_AVAILABLE__PENDING",
				i = "USERNAME_AVAILABLE__UNAVAILABLE",
				u = Object(a.a)(c),
				l = Object(a.a)(o),
				p = Object(a.a)(d),
				b = Object(a.a)(i),
				f = ({
					username: e
				}) => async (t, r, {
					apiContext: a
				}) => {
					const c = r().users.nameAvailable;
					if (!c[e] || c[e] === s.Error) {
						t(p({
							username: e
						}));
						const r = await Object(n.a)(a(), {
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
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "BlankPost", (function() {
				return u
			}));
			var s = r("./node_modules/react/index.js"),
				a = r.n(s),
				n = r("./src/reddit/components/AdViewability/index.tsx"),
				c = r("./src/reddit/connectors/PostViewable/index.ts"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/contexts/Post/index.tsx");
			const i = Object(c.a)(null),
				u = ({
					className: e,
					post: t
				}) => t.isSponsored ? a.a.createElement(n.a, {
					post: t,
					trackDisplay: !0
				}, a.a.createElement("div", {
					className: Object(o.a)(e, `Blank ${t.id}`)
				})) : null;
			t.default = Object(d.b)(i(u))
		},
		"./src/reddit/components/ClassicPost/Thumbnail.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				a = r.n(s),
				n = r("./src/lib/classNames/index.ts"),
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
			}) => a.a.createElement("div", {
				className: Object(n.a)(d.a.thumbnailContainer, e)
			}, a.a.createElement(c.a, {
				className: Object(n.a)(d.a.thumbnail, t),
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
				chain: "sfueWOUNVDpNGfP_Ow2yN",
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
				coinIcon: "JisrPypso_3RK4iDgDdke",
				modQueueIcon: "_2L4XuYlbElLC5REx1XpdG_",
				premiumIcon: "_2ulegyMhoTE_WCFyBC-IBx",
				publicAccessNetworkIcon: "_3jFEC4X3IL9Zr-pzUzyCp7",
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
				return a
			}));
			const s = 20,
				a = 180
		},
		"./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/lib/timezone/index.ts"),
				a = r("./src/reddit/models/ScheduledPost/index.ts");
			const n = {
					frequency: a.d.Hourly,
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
				o = (e, t, r = n) => {
					const s = Object(a.q)(e.getDay()),
						c = e.getDate();
					let o = r ? {
						...r
					} : null;
					switch (t) {
						case a.d.Monthly:
							o = {
								...n,
								...r,
								frequency: t,
								byMonthDays: [c]
							};
							break;
						case a.d.Weekly:
							o = {
								...n,
								...r,
								frequency: t,
								byWeekDays: [s]
							};
							break;
						case a.d.Daily:
						case a.d.Hourly:
							o = {
								...n,
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
				return Z
			})), r.d(t, "a", (function() {
				return ee
			})), r.d(t, "c", (function() {
				return se
			}));
			var s = r("./node_modules/react/index.js"),
				a = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
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
				h = r("./src/reddit/helpers/getSearchUrl/index.ts"),
				E = r("./src/reddit/icons/fonts/index.tsx"),
				O = r("./src/reddit/models/Search/index.ts"),
				_ = r("./src/reddit/selectors/experiments/serpRedesignLayout.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				g = r("./node_modules/uuid/v4.js"),
				S = r.n(g),
				v = r("./src/reddit/components/SearchDropdown/index.m.less"),
				w = r.n(v);
			const j = Object(c.a)(f.b);

			function T({
				activeTooltipId: e,
				className: t,
				focusedItem: r,
				nightmode: s,
				recentSearch: c,
				searchOriginPage: p,
				indexOfItem: f,
				toggleTooltip: g,
				onClearSearchQuery: v,
				onRemoveRecentSearch: T,
				onUpdateSearchQuery: D,
				onSendSearchClickRecentEvent: A,
				onCloseDropdown: P
			}) {
				const {
					nsfwSessionSetting: R,
					refreshNsfwSessionSettingExpiryTime: C
				} = Object(y.a)(), N = Object(n.e)(_.b), k = Object(n.e)(I.db), L = e => e.subredditOrProfileRestrictedName ? `${e.subredditOrProfileRestrictedName} ${e.searchQuery}` : e.searchQuery, x = Object(h.a)({
					includeNsfwResults: N && k && R,
					multireddit: null,
					searchItem: c,
					searchOptions: {
						source: l.a.Recent
					},
					subreddit: null
				}), U = null == x ? void 0 : x.url, M = null == x ? void 0 : x.qs, G = L(c);
				let F;
				r && (F = L(r));
				const B = c.isProfile || c.isSubreddit ? {
					[m.a.ClickSource]: "search_dropdown",
					[m.a.ClickId]: S()()
				} : void 0;
				return a.a.createElement(i.a, {
					"aria-label": c.searchQuery,
					className: Object(o.a)(w.a.listItem, b.a.item, t, {
						[w.a.mFocused]: !(!r || r.section !== O.c.recent || F !== G)
					}),
					onClick: () => {
						c.isTypeaheadSuggestion ? v() : D(c.searchQuery), A(c.searchQuery, c, f), P(), C()
					},
					key: G,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: U && u(U) || "",
						state: {
							...B,
							[m.a.SearchOriginPage]: p
						},
						search: M
					}
				}, c.displayInfo && c.isTypeaheadSuggestion ? c.displayInfo.iconUrl ? a.a.createElement("div", {
					className: w.a.subredditIcon,
					style: {
						backgroundImage: `url('${c.displayInfo.iconUrl}')`
					}
				}) : a.a.createElement(E.a, {
					name: "community",
					isFilled: !s,
					className: Object(o.a)(w.a.defaultCommunityIcon, {
						[w.a.mNightmode]: s
					})
				}) : a.a.createElement(E.a, {
					name: "search"
				}), a.a.createElement("span", {
					className: b.a.text
				}, G), a.a.createElement("div", {
					onMouseEnter: () => g(G),
					onMouseLeave: () => g(null),
					id: G
				}, a.a.createElement(E.a, {
					name: "clear",
					onMouseUp: e => {
						e.stopPropagation(), e.preventDefault(), T(c)
					}
				}), a.a.createElement(j, {
					className: w.a.fixedTextTooltip,
					isOpen: e === G,
					text: d.fbt._("Remove", null, {
						hk: "2P57BY"
					}),
					tooltipId: G,
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				})))
			}
			var D = r("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				A = r("./src/reddit/components/PostTitle/index.tsx"),
				P = r("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				R = r("./src/reddit/constants/adEvents.ts"),
				C = r("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				N = r("./src/reddit/helpers/canRenderThumbnail.ts"),
				k = r("./src/reddit/helpers/correlationIdTracker.ts"),
				L = r("./src/reddit/helpers/trackers/discoveryUnit.ts");

			function x({
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
				const I = Object(n.d)(),
					g = !(!s.post || !s.post.isSponsored),
					S = Object(h.a)({
						multireddit: null,
						searchItem: s,
						searchOptions: {
							source: g ? l.a.PromotedTrend : l.a.Trending
						},
						subreddit: null
					}),
					v = null == S ? void 0 : S.url,
					j = null == S ? void 0 : S.qs,
					T = a.a.createElement(i.a, {
						id: r,
						"aria-label": s.searchQuery,
						className: Object(o.a)(w.a.listItem, w.a.mTrending, b.a.item, b.a.trending, e, {
							[w.a.mFocused]: !(!t || t.section !== O.c.trending || s.searchQuery !== t.searchQuery)
						}),
						onClick: () => {
							p(s.searchQuery);
							const e = (() => {
								const {
									post: e,
									subredditInfo: t,
									subredditOccurrences: r,
									...a
								} = s;
								return a
							})();
							if (y(e), Object(k.d)(k.a.SearchResults), (e => I((t, r) => Object(L.E)(r(), e, L.a.SEARCH_DROPDOWN)))(s), g) {
								const {
									post: e
								} = s;
								e && _(e, R.a.Click)
							}
							f()
						},
						key: `trending-${s.searchQuery}`,
						role: "link",
						tabIndex: -1,
						to: {
							pathname: v && u(v) || "",
							state: {
								[m.a.SearchOriginPage]: c
							},
							search: j
						}
					}, a.a.createElement("div", {
						className: b.a.trendingContent
					}, g && a.a.createElement("div", {
						className: b.a.promoted
					}, d.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), a.a.createElement("div", null, a.a.createElement(E.a, {
						name: "popular",
						className: w.a.trendingIcon
					}), a.a.createElement("span", null, a.a.createElement(A.a, {
						className: Object(o.a)(w.a.listItemText, w.a.mTrending, b.a.text, b.a.trending),
						redditStyle: !0,
						size: A.b.Small
					}, s.searchQuery)), s.post && a.a.createElement("div", {
						className: w.a.postTitle
					}, s.post.title)), s.subredditInfo && a.a.createElement(C.a, {
						className: Object(o.a)(b.a.relatedSubredditMetaData, w.a.listItemSubtext, {
							[w.a.mNoPostTitle]: !s.post
						}),
						iconUrl: s.subredditInfo.icon || void 0,
						suffix: d.fbt._("{subreddit name} and more", [d.fbt._param("subreddit name", s.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), s.post && Object(N.a)(s.post) && a.a.createElement(D.a, {
						post: s.post,
						removeLink: !0,
						usePreview: g
					}));
				return g ? a.a.createElement(P.a, {
					post: s.post
				}, T) : T
			}
			var U = r("./src/reddit/components/Flair/index.tsx"),
				M = r("./src/reddit/models/Flair/index.ts");

			function G({
				className: e,
				focusedItem: t,
				item: r,
				indexOfItem: s,
				nightmode: n,
				subredditSuggestions: c,
				onSendSearchClickTypeaheadEvent: l,
				onSetRecentSearch: p,
				onClearSearchQuery: f,
				onCloseDropdown: y
			}) {
				const h = !r.isProfile || r.enableFollowers;
				return a.a.createElement(i.a, {
					"aria-label": r.searchQuery,
					className: Object(o.a)(w.a.listItem, w.a.mTypeahead, b.a.item, e, {
						[w.a.mFocused]: !(!t || t.searchQuery !== r.searchQuery)
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
							[m.a.ClickSource]: "typeahead",
							[m.a.ClickId]: S()()
						}
					}
				}, r.displayInfo && r.displayInfo.iconUrl ? a.a.createElement("div", {
					className: w.a.subredditIcon,
					style: {
						backgroundImage: `url('${r.displayInfo.iconUrl}')`
					}
				}) : a.a.createElement(E.a, {
					name: "community",
					isFilled: !n,
					className: Object(o.a)(w.a.defaultCommunityIcon, {
						[w.a.mNightmode]: n
					})
				}), a.a.createElement("div", null, r.displayInfo && r.displayInfo.subredditOrProfileName && a.a.createElement("div", {
					className: Object(o.a)(w.a.listItemText, w.a.mTypeahead, b.a.text)
				}, r.displayInfo.subredditOrProfileName), a.a.createElement("div", null, r.displayInfo && null != r.displayInfo.subscribers && h && a.a.createElement("div", {
					className: Object(o.a)(w.a.listItemSubtext, b.a.subText)
				}, d.fbt._({
					"*": "{members count} members",
					_1: "1 member"
				}, [d.fbt._plural(r.displayInfo.subscribers, "members count")], {
					hk: "1uMCes"
				})), r.displayInfo && r.displayInfo.isNSFW && a.a.createElement(U.b, {
					flair: {
						type: M.f.Nsfw,
						text: "nsfw"
					}
				}))))
			}
			var F = r("./src/reddit/constants/zIndex.ts"),
				B = r("./src/reddit/controls/Dropdown/index.tsx"),
				q = r("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				V = r.n(q),
				H = r("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				W = r.n(H),
				$ = r("./node_modules/reselect/es/index.js"),
				K = r("./src/reddit/constants/experiments.ts"),
				Q = r("./src/reddit/helpers/chooseVariant/index.ts");
			const J = Object($.a)(e => Object(Q.c)(e, {
				experimentEligibilitySelector: Q.a,
				experimentName: K.ib
			}), e => e === K.tb.Enabled);
			var z = r("./src/reddit/constants/parameters.ts");

			function X({
				searchOriginPage: e,
				searchQuery: t,
				onCloseDropdown: r
			}) {
				return a.a.createElement(i.a, {
					onClick: r,
					to: {
						pathname: "/search/",
						state: {
							[m.a.SearchOriginPage]: e
						},
						search: `${z.p}=${encodeURI(t)}`
					},
					className: Object(o.a)(w.a.listItem, b.a.item)
				}, a.a.createElement(E.a, {
					name: "search"
				}), a.a.createElement("span", {
					className: b.a.text
				}, d.fbt._("Search for “", null, {
					hk: "28KVrM"
				}), d.fbt._("{search query}", [d.fbt._param("search query", t)], {
					hk: "4vP3YT"
				}), "”"))
			}
			const {
				fbt: Y
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Z = "SearchDropdown", ee = "SearchDropdownContent", te = 5, re = Object(c.a)(B.a);

			function se({
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
				searchQuery: h,
				searchOriginPage: E,
				isFixed: O = !0,
				isOverlay: _ = !0,
				fireAdPixelsOfType: I,
				onClearSearchQuery: g,
				onClose: S,
				onRemoveRecentSearch: v,
				onSendSearchClickRecentEvent: j,
				onSendSearchClickTypeaheadEvent: D,
				onSetRecentSearch: A,
				onUpdateSearchQuery: P
			}) {
				const R = Object(n.d)(),
					[C, N] = Object(s.useState)(null),
					k = Object(n.e)(J),
					U = function(e) {
						const [t, r] = Object(s.useState)(null), a = Object(s.useCallback)(() => {
							e && r(e.offsetWidth)
						}, [e]);
						return Object(s.useLayoutEffect)(a, [a]), Object(s.useEffect)(() => (window.addEventListener("resize", a), () => window.removeEventListener("resize", a)), [a]), t
					}(e),
					M = t.slice(0, te),
					[B, q] = Object(s.useState)(new Array(te).fill(!1)),
					H = k && h,
					$ = 0 === f.length && !u && !H;
				Object(s.useLayoutEffect)(() => {
					if (!r && i && document.getElementById(ee)) {
						const e = K();
						q(e), M.forEach((t, r) => {
							e[r] && R((e, r) => Object(L.F)(r(), t, L.a.SEARCH_DROPDOWN))
						})
					}
				}, [r, i, R]);
				const K = () => {
						const e = new Array(M.length).fill(!1);
						return M.forEach((t, r) => {
							if (t.id) {
								const s = document.getElementById(`${Z}-${t.id}`),
									a = document.getElementById(ee);
								if (s && a) {
									const t = s.getBoundingClientRect(),
										n = a.getBoundingClientRect();
									t.top < n.bottom && t.bottom > n.top && (e[r] = !0)
								}
							}
						}), e
					},
					Q = {
						width: U ? `${U}px` : "inherit",
						marginTop: "7px",
						overflow: "auto"
					};
				O && (Q.zIndex = F.g);
				const z = Object(s.useMemo)(() => f.filter(e => e.isSubreddit), [f]);
				return a.a.createElement(re, {
					className: Object(o.a)(w.a.dropdown, V.a.listContainer),
					id: ee,
					isFixed: O,
					isOpen: i,
					isOverlay: _,
					tooltipId: Z,
					noFocus: !0,
					renderContentsHidden: !0,
					style: Q,
					onDropdownMounted: () => {
						if (!r && M.length > 0) {
							const e = K();
							q(e), M.forEach((t, r) => {
								e[r] && R((e, r) => Object(L.F)(r(), t, L.a.SEARCH_DROPDOWN))
							})
						}
					},
					onScroll: () => {
						const e = K();
						M.forEach((t, r) => {
							B[r] || !e[r] || t.post && t.post.isSponsored || R((e, r) => Object(L.F)(r(), t, L.a.SEARCH_DROPDOWN))
						}), q(e)
					}
				}, f.map((e, t) => a.a.createElement(G, {
					focusedItem: f[y],
					indexOfItem: t,
					subredditSuggestions: z,
					item: e,
					key: e.id,
					onClearSearchQuery: g,
					onSendSearchClickTypeaheadEvent: D,
					onSetRecentSearch: A,
					nightmode: m,
					onCloseDropdown: S
				})), $ && p.map((e, t) => a.a.createElement(T, {
					searchOriginPage: E,
					activeTooltipId: C,
					focusedItem: l[y],
					indexOfItem: t,
					key: e.id,
					onClearSearchQuery: g,
					onRemoveRecentSearch: v,
					onSendSearchClickRecentEvent: j,
					onSetRecentSearch: A,
					onUpdateSearchQuery: P,
					recentSearch: e,
					toggleTooltip: N,
					nightmode: m,
					onCloseDropdown: S
				})), $ && !d && c && !r && t && a.a.createElement("div", {
					className: Object(o.a)(b.a.title, w.a.listItemTitle, {
						[w.a.mWithBorder]: !!p.length
					})
				}, Y._("Trending today", null, {
					hk: "3nAMpY"
				})), (u || !d && r) && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: Object(o.a)(w.a.loadingItem, W.a.item)
				}), a.a.createElement("div", {
					className: Object(o.a)(w.a.loadingItem, W.a.item)
				}), a.a.createElement("div", {
					className: Object(o.a)(w.a.loadingItem, W.a.item)
				}), a.a.createElement("div", {
					className: Object(o.a)(w.a.loadingItem, W.a.item)
				}), a.a.createElement("div", {
					className: Object(o.a)(w.a.loadingItem, W.a.item)
				})), $ && !d && c && M.map(e => a.a.createElement(x, {
					id: `${Z}-${e.id}`,
					key: e.id,
					focusedItem: l[y],
					searchOriginPage: E,
					fireAdPixelsOfType: I,
					onCloseDropdown: S,
					onSetRecentSearch: A,
					onUpdateSearchQuery: P,
					trendingItem: e
				})), H && a.a.createElement(X, {
					searchOriginPage: E,
					searchQuery: h,
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
				a = r("./src/reddit/hooks/useLocalStorage.ts");
			const n = 30 * s.ib,
				c = () => Date.now() + n,
				o = () => ({
					allowNsfwSearchResults: !1,
					expires: c()
				}),
				d = () => {
					const [e, t] = Object(a.a)("allow-nsfw-search-results", o());
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
				a = r.n(s),
				n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
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
				h = r("./src/reddit/helpers/trackers/subredditForking.ts"),
				E = r("./src/reddit/components/TrackingHelper/index.tsx");
			const O = Object(n.a)({
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
					const r = Object(b.j)(e),
						s = Object(m.a)(t.postId),
						a = Object(p.I)(e, t),
						n = Object(l.o)(e, {
							...t,
							commentsPageKey: s
						}),
						c = Object(l.k)(e, {
							...t,
							commentsPageKey: s
						}).reduce((t, r) => {
							var s;
							const a = Object(l.l)(e, {
								commentLink: r
							});
							return r.type !== i.a.Comment && 0 !== (null === (s = n[r.id]) || void 0 === s ? void 0 : s.depth) || t.push(a), t
						}, []).sort((e, t) => t.score - e.score).slice(0, 5);
					return (null == r ? void 0 : r.id) === a.authorId || !!c.find(e => e.authorId === (null == r ? void 0 : r.id))
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
					if (!Object(b.J)(e)) return !1;
					if (null === (r = Object(y.b)(I)) || void 0 === r ? void 0 : r[t.postId]) return !1;
					const s = Object(p.I)(e, t),
						a = Object(p.V)(e, {
							...t,
							disallowProfile: !0
						});
					if ((null == a ? void 0 : a.type) !== u.f.Public || a.isNSFW || a.isQuarantined || (null == s ? void 0 : s.isNSFW) || (null == s ? void 0 : s.source)) return !1;
					const n = _.find(({
						low: e,
						high: t
					}) => t >= a.subscribers && a.subscribers > e);
					return !(!n || !s.numComments || n.threshold > s.numComments) && !!g(e, t)
				},
				w = () => Object(f.c)({
					shouldLoadCTA: v
				}),
				j = Object(d.b)(w),
				T = ({
					shouldLoadCTA: e,
					postId: t,
					sendEvent: r
				}) => {
					const [s, a] = Object(c.useState)(!1);
					return s || !e ? null : o.a.createElement(O, {
						onClose: () => {
							S(t), a(!0), r(Object(h.b)(t))
						},
						postId: t
					})
				},
				D = Object(c.memo)(j(Object(E.c)(T)))
		},
		"./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				a = r.n(s),
				n = r("./src/reddit/components/AdViewability/index.tsx"),
				c = r("./src/reddit/components/BlankPost/index.tsx"),
				o = r("./src/reddit/connectors/PostViewable/index.ts");
			const d = Object(o.a)(null);
			class i extends a.a.Component {
				render() {
					const {
						children: e,
						post: t,
						onPostViewable: r
					} = this.props;
					if (t) return t.isBlank ? a.a.createElement(c.BlankPost, {
						post: t,
						postId: t.id,
						onPostViewable: r
					}) : a.a.createElement(n.a, {
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
				a = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
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
			const m = Object(n.b)(() => Object(c.c)({
				subredditsByName: Object(d.a)((e, t) => {
					const r = {};
					return t.subredditIcons && t.subredditIcons.map(t => {
						r[t.subredditName] = Object(l.z)(e, {
							subredditName: t.subredditName
						})
					}), r
				})
			}))(e => a.a.createElement("div", {
				className: Object(o.a)(b.a.subText, y.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => a.a.createElement(i.a, {
				key: `${t.subredditName}-hoverCard`,
				subredditName: t.subredditName
			}, a.a.createElement(u.b, {
				className: Object(o.a)(y.a.subredditIcon, y.a.isHeaderIcon, e.iconClassName),
				linkTo: `/r/${t.subredditName}/`,
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : a.a.createElement(u.b, {
				className: Object(o.a)(y.a.subredditIcon, e.iconClassName),
				key: e.iconUrl,
				iconUrl: e.iconUrl
			}), e.suffix && a.a.createElement("span", null, e.suffix)))
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
				a = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts"),
				d = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const i = async (e, t) => Object(n.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: a.hb.POST
			}), u = async (e, t, r) => Object(n.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: r,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: a.hb.POST
			}), l = async (e, t) => Object(n.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: a.hb.POST
			}), p = async (e, t) => Object(n.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: a.hb.POST
			}), b = async (e, t) => Object(n.a)(Object(c.a)(e, [o.a]), {
				endpoint: Object(d.a)(`${s.a.oauthUrl}/user/${t}/about`),
				method: a.hb.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/endpoints/crowdControl/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s, a = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/redditGQL/operations/CrowdControlLevelInfo.json");
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
				return n
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/config.ts"),
				a = r("./src/reddit/endpoints/governance/requester.ts");
			async function n(e, t, r) {
				const n = Object(a.a)(e, {
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
					c = await n;
				if (c.ok) {
					const e = {},
						t = {},
						r = c.body;
					return Object.keys(r).forEach(s => {
						const a = r[s];
						t[s] = a, e[a.userId] || (e[a.userId] = []), e[a.userId].push(a.id)
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
				const n = await Object(a.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/badges/${t}?users=${r}`
				});
				if (n.ok) {
					const e = {},
						t = [],
						r = n.body;
					return Object.keys(r).forEach(s => {
						const a = r[s];
						e[s] = a, t.push(a.id)
					}), {
						...n,
						body: {
							badges: e,
							userOwnedBadges: t
						}
					}
				}
				return n
			}

			function o(e, t, r, n = !0) {
				return Object(a.a)(e, {
					method: "patch",
					endpoint: `${s.a.metaUrl}/badges/${t}/${r}`,
					data: {
						selected: n
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
				return h
			})), r.d(t, "n", (function() {
				return E
			}));
			var s, a = r("./src/config.ts"),
				n = r("./src/reddit/endpoints/governance/requester.ts");

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
				return Object(n.a)(e, {
					method: "post",
					endpoint: `${a.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function l(e, t, r) {
				return await Object(n.a)(e, {
					method: "post",
					endpoint: `${a.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function p(e, t, r) {
				return await Object(n.a)(e, {
					method: "delete",
					endpoint: `${a.a.metaUrl}/crypto/${t}/registrations/${r}`
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
				h = (e, t, r, s) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: s
				});
			async function E(e, t) {
				return await Object(n.a)(e, {
					method: "put",
					endpoint: `${a.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			}));
			var s = r("./src/config.ts"),
				a = r("./src/reddit/endpoints/governance/requester.ts");

			function n(e, t) {
				return Object(a.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function c(e, t) {
				return Object(a.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function o(e, t) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/orders`,
					data: t
				})
			}

			function d(e, t) {
				return Object(a.a)(e, {
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
				a = (r("./src/lib/bigNumberUtils/percent.ts"), r("./src/lib/constants/index.ts")),
				n = r("./src/reddit/endpoints/governance/requester.ts");

			function c(e, t) {
				return Object(n.a)(e, {
					endpoint: `${s.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: a.hb.GET
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
				return Object(n.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${s.a.metaUrl}/wallets/${t.subredditId}`,
					method: a.hb.POST,
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
				return h
			})), r.d(t, "a", (function() {
				return g
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/reddit/helpers/flair.ts"),
				n = r("./src/reddit/helpers/richTextJson/index.ts"),
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
						text: Object(a.g)(r.flair)
					} : {},
					sticky: r.sticky,
					subredditId: s,
					suggestedCommentSort: r.suggestedSort,
					isSendReplies: r.sendReplies,
					...y(t),
					...O(r),
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
				h = ({
					poll: e,
					schedule: t,
					scheduledPostId: r,
					submission: s,
					subredditId: a
				}) => {
					const n = f({
						poll: e,
						schedule: t,
						submission: s,
						subredditId: a
					});
					return {
						id: r,
						...n,
						flair: Object.keys(n.flair || {}).length ? {
							...n.flair
						} : {
							id: "",
							text: ""
						}
					}
				},
				E = e => /^https?:\/\//i.test(e) ? e : `http://${e}`,
				O = e => {
					switch (e.kind) {
						case o.o.RICH_TEXT:
							return {
								content: {
									richText: JSON.stringify({
										document: e.document
									})
								}
							};
						case o.o.MARKDOWN:
							return {
								content: {
									markdown: e.markdown
								}
							};
						case o.o.LINK:
							return {
								content: {}, link: {
									url: E(e.url)
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
						t = Object(n.c)(r)
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
				return n
			}));
			var s = r("./src/redditGQL/operations/UpdateScheduledPost.json"),
				a = r("./src/lib/makeGqlRequest/index.ts");
			const n = (e, t) => Object(a.a)(e, {
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
				a = r("./src/lib/makeApiRequest/index.ts"),
				n = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts");
			const o = (e, t) => Object(a.a)(Object(n.a)(e, [c.a]), {
				method: s.hb.GET,
				endpoint: `${e.apiUrl}/api/username_available.json?user=${t.username}`,
				type: "json"
			})
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/constants/index.ts");
			t.a = () => ({
				type: a.G.SERVER_ERROR,
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
			r.d(t, "b", (function() {
				return c
			}));
			var s = r("./src/lib/search/index.ts"),
				a = r("./src/reddit/constants/parameters.ts"),
				n = r("./src/reddit/models/Search/index.ts");
			const c = ({
				subreddit: e,
				multireddit: t,
				searchItem: r,
				searchOptions: c,
				shouldSearchSubreddit: o,
				includeNsfwResults: d
			}) => {
				let i, u;
				if ("" !== r.searchQuery) {
					if (r.isTypeaheadSuggestion) i = `/${r.isProfile?r.searchQuery.replace("u/","user/"):r.searchQuery}`;
					else {
						if (u = `${a.p}=${Object(s.b)(r.rawQuery||r.searchQuery)}`, i = "/search/", r.section !== n.c.trending && r.section !== n.c.recent || c && c.source && (u += `&source=${c.source}`), e && o ? (i = `/r/${e.name}${i}`, u = `${u}&${a.s}=1`) : !e && r.subredditOrProfileRestrictedName && (i = `/${r.subredditOrProfileRestrictedName}${i}`, u = `${u}&${a.s}=1`), t) {
							i = `/user/${t.url.split("/")[2]}/m/${t.name}${i}`, u = `${u}&${a.s}=1&${a.j}=1`
						}
						c && c.category && (u = `${u}&${a.b}=${c.category}`), d && (u = `${u}&${a.i}=1`)
					}
					return {
						url: i,
						qs: u
					}
				}
			};
			t.a = c
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return c
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js");

			function a(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function n(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(a).join(" ") : s.fbt._("Something went wrong. Please try again later.", null, {
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
				return n
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
				a = e => e.subredditInfoById.scheduledPosts.standalonePosts ? {
					standalonePosts: {
						models: l(e.subredditInfoById.scheduledPosts.standalonePosts.edges),
						pageInfo: {
							...e.subredditInfoById.scheduledPosts.standalonePosts.pageInfo
						}
					},
					standalonePostsIds: e.subredditInfoById.scheduledPosts.standalonePosts.edges.map(e => e.node.id)
				} : {},
				n = e => ({
					...e,
					subredditInfoById: {
						id: e.subredditInfoById.id,
						scheduledPosts: {
							...s(e),
							...a(e)
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
				a = r("./src/lib/fastdom/index.ts");
			const n = "https://js.stripe.com/v3/",
				c = "https://www.paypalobjects.com/api/checkout.js",
				o = {
					checkout: "https://js.braintreegateway.com/web/3.44.2/js/paypal-checkout.min.js",
					client: "https://js.braintreegateway.com/web/3.44.2/js/client.min.js",
					paypal: `https://www.paypal.com/sdk/js?client-id=${s.a.paypal.braintreeApiKey}` + "&currency=USD&vault=true"
				};

			function d(e, t) {
				return t() ? Promise.resolve() : new Promise((r, s) => a.a.write(() => {
					t() && r();
					const a = document.head;
					let n = a.querySelector(`script[src='${e}']`);

					function c() {
						this.removeEventListener("load", c), this.removeEventListener("error", o), r()
					}

					function o() {
						this.removeEventListener("load", c), this.removeEventListener("error", o), n && a.removeChild(n), s()
					}
					n || ((n = document.createElement("script")).src = e, a.appendChild(n)), n.addEventListener("load", c), n.addEventListener("error", o)
				}))
			}

			function i() {
				return d(n, () => "undefined" != typeof Stripe)
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
				a = r.n(s),
				n = r("./src/config.ts"),
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
					const a = t.pathname || "";
					if (i.test(a) || u.test(a)) {
						const a = ((e, t) => {
								if (p.test(e.pathname || "")) {
									const {
										subreddit: e
									} = t.data;
									return e
								}
							})(t, r),
							n = e.platform.currentPage,
							c = n && n.urlParams.subredditName,
							d = a || c || "",
							i = Object(o.E)(e, d);
						i && e.structuredStyles.models[i] || s.add("structuredStyles"), e.user.prefs.subreddit[i] || s.add("prefsSubreddit")
					}
					return [...s].join(",")
				},
				f = r("./src/reddit/selectors/user.ts");
			t.a = e => t => {
				const r = a.a.parse(t.endpoint, !0),
					{
						host: s,
						protocol: o
					} = r;
				if (`${o}//${s}` === n.a.gatewayUrl) {
					const s = {},
						a = Object(f.db)(e.getState()) ? "1" : "";
					s.allow_over18 = a, s.include = b(e.getState(), r, t), t.endpoint = Object(c.a)(t.endpoint, s)
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
				return h
			})), r.d(t, "c", (function() {
				return E
			})), r.d(t, "d", (function() {
				return O
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
			const a = function(e) {
				if (void 0 === e) throw new Error("invariant(...): Second argument must be a string.")
			};

			function n(e, t, ...r) {
				if (a(t), !e) {
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
					const a = e.length;
					if (0 === a) return "";
					if (1 === a) return e[0];
					const d = e[a - 1];
					let i = e[0];
					for (let n = 1; n < a - 1; ++n) switch (r) {
						case o.SEMICOLON:
							i = s.fbt._("{previous items}; {following items}", [s.fbt._param("previous items", i), s.fbt._param("following items", e[n])], {
								hk: "4hs4xq"
							});
							break;
						default:
							i = s.fbt._("{previous items}, {following items}", [s.fbt._param("previous items", i), s.fbt._param("following items", e[n])], {
								hk: "2z8RMb"
							})
					}
					return function(e, t, r, a) {
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
								switch (a) {
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
									n(!1, "Invalid conjunction %s provided to intlList", r)
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
							a = b(r);
						return s.fbt._("Submit post at {time}", [s.fbt._param("time", a)], {
							hk: "IZ3L"
						})
					}
					return s.fbt._("Submit post at scheduled event time", null, {
						hk: "lYsoU"
					})
				},
				y = e => e.slice(0, 5),
				m = (e, t) => `${e}T${y(t)}:00`,
				h = e => {
					const [t, r] = e.split("T");
					return [t, y(r)]
				},
				E = e => {
					const [t, r] = h(e);
					if (t && r) {
						const e = Object(i.f)(m(t, r));
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
						const [t, r] = h(e);
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
						a = r.getDate();
					return 1 === e.byWeekDays.length && e.byWeekDays[0] !== s && (t = p.b), 1 === e.byMonthDays.length && e.byMonthDays[0] !== a && (t = p.b), {
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
		"./src/reddit/helpers/trackers/commentList.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/telemetry/index.ts"),
				a = r("./src/reddit/selectors/telemetry.ts");
			const n = (e, t) => {
				Object(s.a)({
					action: "view",
					source: "commentlist",
					noun: "bottom",
					...a.defaults(e),
					listing: a.listing(e, t),
					subreddit: a.subreddit(e)
				})
			}
		},
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
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
				a = r("./src/reddit/selectors/telemetry.ts");
			const n = e => t => ({
					source: e,
					noun: "create_community_button",
					action: "click",
					...a.defaults(t),
					actionInfo: a.actionInfo(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(s.d)(s.a.SubredditCreation, !0)
				}),
				c = (e, t, r) => n => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...a.defaults(n),
					actionInfo: a.actionInfo(n, {
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
					...a.defaults(e),
					actionInfo: a.actionInfo(e),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				d = (e, t) => r => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...a.defaults(r),
					actionInfo: a.actionInfo(r, {
						reason: e,
						settingValue: t
					}),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				i = () => e => ({
					source: "user_dropdown",
					noun: "create_community",
					action: "click",
					...a.defaults(e),
					actionInfo: a.actionInfo(e)
				}),
				u = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "view",
					...a.defaults(e),
					actionInfo: a.actionInfo(e)
				}),
				l = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "click",
					...a.defaults(e),
					actionInfo: a.actionInfo(e)
				}),
				p = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "dismiss",
					...a.defaults(e),
					actionInfo: a.actionInfo(e)
				})
		},
		"./src/reddit/helpers/trackers/subredditForking.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return c
			}));
			var s = r("./src/reddit/selectors/telemetry.ts");
			const a = e => e => ({
					source: "post",
					noun: "forking_module",
					action: "click",
					...s.defaults(e),
					actionInfo: s.actionInfo(e, {
						settingValue: e.user.account && e.user.account.isMod ? "existing_mod" : "new_mod"
					})
				}),
				n = e => e => ({
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
				a = r("./src/reddit/helpers/localStorage/index.ts");
			const n = {},
				c = (e, t, r) => (n[e] || (n[e] = {
					callbacks: [],
					value: r
				}), n[e].callbacks.push(t), {
					deregister: () => {
						const {
							callbacks: r
						} = n[e], s = r.indexOf(t);
						s > -1 && r.splice(s, 1)
					},
					emit: r => {
						n[e].value !== r && (n[e].value = r, n[e].callbacks.forEach(e => {
							e !== t && e(r)
						}))
					}
				});

			function o(e, t) {
				const r = Object(s.useRef)(null);
				let n;
				n = Object(a.B)(e);
				const [o, d] = Object(s.useState)(null != n ? n : t);
				return Object(s.useEffect)(() => (r.current = c(e, d, t), () => {
					var e;
					return null === (e = r.current) || void 0 === e ? void 0 : e.deregister()
				}), [e, t]), Object(s.useEffect)(() => {
					var e;
					null === (e = r.current) || void 0 === e || e.emit(o)
				}, [o]), [o, function(t) {
					Object(a.Gb)(e, t), d(t)
				}]
			}
		},
		"./src/reddit/models/ChatSettingsPage/index.ts": function(e, t, r) {
			"use strict";
			var s;
			r.d(t, "a", (function() {
					return s
				})), r.d(t, "c", (function() {
					return a
				})), r.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.Unknown = "unknown", e.Toggle = "BOOLEAN"
				}(s || (s = {}));
			const a = (e, t, r = !1) => e && Array.isArray(e) && e.length ? e.reduce((e, a) => {
					if (a && a.id && a.type && a.title && a.hasOwnProperty("state")) switch (a.type) {
						case s.Toggle:
							e.push({
								settingType: s.Toggle,
								settingId: a.id,
								subredditId: t,
								description: a.description,
								descriptionUrl: a.descriptionUrl,
								groupName: a.groupName,
								isEditable: !r && a.isEditable,
								state: "true" === String(a.state).toLowerCase(),
								title: a.title
							});
							break;
						default:
							e.push({
								settingType: s.Unknown,
								settingId: a.id,
								subredditId: t,
								description: a.description,
								descriptionUrl: a.descriptionUrl,
								groupName: a.groupName,
								isEditable: !r && a.isEditable,
								state: a.state,
								title: a.title
							})
					}
					return e
				}, []) : [],
				n = e => e.reduce((e, t) => (t.isEditable && e.push({
					id: t.settingId,
					state: String(t.state)
				}), e), [])
		},
		"./src/reddit/models/Emoji/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "e", (function() {
				return o
			}));
			const s = 24,
				a = 64e3,
				n = 128,
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
				return a
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			}));
			const s = "new_community_setup",
				a = ["CommunityProgressShareButton", "CommunityProgressUrlButton", "CommunityProgressMakePostButton"];
			var n, c, o;
			! function(e) {
				e.INITIAL = "INITIAL", e.ACTIONED = "ACTIONED", e.DISMISSED = "DISMISSED", e.COMPLETED = "COMPLETED"
			}(n || (n = {})),
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
				a = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/economics/claims/constants.ts")),
				n = r("./src/reddit/actions/economics/me/constants.ts");
			const c = {};
			var o = (e = c, t) => {
					switch (t.type) {
						case n.a: {
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
						case a.b:
						case a.a:
							const {
								subredditId: r
							} = t.payload;
							return {
								...e, [r]: {
									...e[r],
									isClaiming: t.type === a.b
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
				var t, r, s, a, n;
				const c = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					o = null == c ? void 0 : c.contracts,
					d = null == o ? void 0 : o.unlocked,
					i = null !== (s = null === (r = e.walletProvider) || void 0 === r ? void 0 : r.provider) && void 0 !== s ? s : e.provider,
					l = !!(null === (a = e.walletProvider) || void 0 === a ? void 0 : a.inTransition),
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
					nomenclature: null === (n = e.extra) || void 0 === n ? void 0 : n.nomenclature,
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
						} = t.payload, a = Object.keys(s).reduce((t, a) => {
							return {
								...t,
								[a]: {
									...e[a] || {},
									[r]: s[a]
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
			t.a = Object(s.c)({
				claims: o,
				points: p,
				publicWallets: f
			})
		},
		"./src/reddit/reducers/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return Kv
			}));
			var s = r("./src/reddit/actions/modal.ts");
			const a = {};
			var n = (e = a, t) => {
					switch (t.type) {
						case s.e:
							if (!t.payload.actionSource && !t.payload.redirectUrl) return a;
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
						case u.a:
						case p.f:
							return t.type === u.a && (null == e ? void 0 : e.id) === f.a.POST_FLOW_UPSELL_MODAL_ID ? e : null;
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
				h = r("./src/reddit/actions/unload/constants.ts");
			const E = {};

			function O(e, t, r, s) {
				const a = e[t];
				return {
					...e,
					[t]: {
						...a,
						[s]: r
					}
				}
			}
			var _ = (e = E, t) => {
					if (!t.payload) return e;
					switch (t.type) {
						case m.d:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "adImpression");
						case m.b:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "adClick");
						case m.n:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "adViewableImpression");
						case m.k:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "adVideoViewable");
						case m.e:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable");
						case m.j:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "adVideoStarted");
						case m.i:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedWithSound");
						case m.g:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "adVideoGroupMViewable");
						case m.f:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable50");
						case m.h:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedExpanded");
						case m.l: {
							const {
								postId: r,
								eventType: s,
								vendorMetadata: a
							} = t.payload;
							return O(e, r, a, `adVideoWatchedPercent${s}`)
						}
						case m.m: {
							const {
								postId: r,
								eventType: s,
								vendorMetadata: a
							} = t.payload;
							return O(e, r, a, `adVideoWatchedSeconds${s}`)
						}
						case m.w:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewable");
						case m.y:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds5");
						case m.x:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds15");
						case h.b:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "adUnloaded");
						case m.s:
							return O(e, t.payload.postId, t.payload.vendorMetadata, "groupMViewable");
						case m.c: {
							const {
								postId: r,
								vendorMetadata: s,
								eventType: a
							} = t.payload;
							return O(e, r, s, `adGalleryItemImpression${a}`)
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
				w = r("./src/reddit/actions/appBadgeIndicators/constants.ts");
			var j = (e = null, t) => {
				switch (t.type) {
					case w.a:
						return t.payload && t.payload.error || null;
					case w.b:
					case w.c:
						return null;
					default:
						return e
				}
			};
			var T = (e = !1, t) => {
					switch (t.type) {
						case w.c:
							return !0;
						case w.a:
						case w.b:
							return !1;
						default:
							return e
					}
				},
				D = Object(v.c)({
					error: j,
					pending: T
				});
			const A = {};
			var P = (e = A, t) => {
					switch (t.type) {
						case w.d:
						case w.b: {
							const r = t.payload;
							return {
								...e,
								...r
							}
						}
						case w.c:
						case w.a:
						default:
							return e
					}
				},
				R = Object(v.c)({
					api: D,
					badges: P
				});
			var C = (e = null, t) => {
					switch (t.type) {
						case c.a:
							return t.payload;
						default:
							return e
					}
				},
				N = r("./node_modules/icepick/icepick.js"),
				k = r("./node_modules/lodash/mergeWith.js"),
				L = r.n(k),
				x = r("./src/reddit/actions/comment/constants.ts"),
				U = r("./src/reddit/actions/comment/websocket/constants.ts"),
				M = r("./src/reddit/actions/grantUserFlair/constants.ts"),
				G = r("./src/reddit/actions/modQueue/constants.ts"),
				F = r("./src/reddit/actions/pages/constants.ts"),
				B = r("./src/reddit/actions/pages/profileComments/constants.ts"),
				q = r("./src/reddit/actions/pages/profilePosts.ts"),
				V = r("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				H = r("./src/reddit/actions/pages/search.ts"),
				W = r("./src/reddit/actions/pages/subreddit.ts"),
				$ = r("./src/reddit/actions/profileConversations.ts"),
				K = r("./src/reddit/actions/subreddit.ts"),
				Q = r("./src/reddit/actions/userFlair/constants.ts"),
				J = r("./src/reddit/models/User/index.ts");
			const z = {};
			var X = (e = z, t) => {
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
					case H.SEARCH_RESULTS_RECEIVED: {
						const {
							authorFlair: r
						} = t.payload;
						if (r) {
							return Object(N.merge)(e, r)
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
					case $.e:
					case K.i:
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
							applied: a,
							displaySettings: {
								isUserEnabled: n
							}
						} = t.payload;
						return Object(N.setIn)(e, [r, s], n ? a : null)
					}
					case M.h:
					case M.b: {
						const {
							subredditId: r,
							userName: s,
							applied: a
						} = t.payload;
						return e[r] && e[r][s] ? Object(N.setIn)(e, [r, s], a) : e
					}
					case Q.a: {
						const {
							subredditId: r,
							userName: s,
							applied: a,
							displaySettings: {
								isEnabled: n
							}
						} = t.payload;
						return Object(N.setIn)(e, [r, s], n ? a : null)
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
				const a = Object(N.merge)(e, r);
				if (!s || !t) return a;
				const n = Object.keys(s)[0];
				if (!n) return a;
				const c = s[n],
					o = Object(J.e)(t),
					d = c.applied,
					i = c.displaySettings && c.displaySettings.isUserEnabled;
				return o && d && i ? Object(N.merge)(a, {
					[n]: {
						[o]: d
					}
				}) : a
			};
			var Z = Object(v.c)({
					inContext: C,
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
			var ae = (e = !1, t) => {
					switch (t.type) {
						case u.a:
						case ee.i:
						case ee.g:
							return !1;
						case ee.h:
							return !0;
						default:
							return e
					}
				},
				ne = Object(v.c)({
					error: se,
					pending: ae
				}),
				ce = Object(v.c)({
					api: ne
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
						} = t.payload, a = {};
						return r.forEach(e => {
							a[e.id] = e.isEnabled
						}), {
							...e,
							[s]: a
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
							} = t.payload, a = r.map(e => e.id);
							return {
								...e,
								[s]: a
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
				he = r.n(me);
			const Ee = e => {
				const t = e.split("+");
				if (1 === t.length) return e;
				const r = `${t[1].substring(0,2)}:${t[1].substring(2)}`;
				return `${t[0]}+${r}`
			};
			var Oe = e => (e.startsAt && (e.startsAt = "number" == typeof e.startsAt ? new Date(e.startsAt).toISOString() : Ee(e.startsAt)), e.endsAt && (e.endsAt = "number" == typeof e.endsAt ? new Date(e.endsAt).toISOString() : Ee(e.endsAt)), e),
				_e = r("./src/reddit/models/Gold/Award.ts"),
				Ie = r("./src/reddit/actions/discoveryUnit.ts"),
				ge = r("./src/reddit/actions/frontpage/constants.ts"),
				Se = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				ve = r("./src/reddit/actions/multireddit/constants.ts"),
				we = r("./src/reddit/actions/pages/modListing/constants.ts"),
				je = r("./src/reddit/actions/pages/multireddit/constants.ts"),
				Te = r("./src/reddit/actions/pages/postCreation.ts"),
				De = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				Ae = r("./src/reddit/actions/profileOverviewChrono/constants.ts"),
				Pe = r("./src/lib/makeActionCreator/index.ts"),
				Re = (r("./src/config.ts"), r("./src/lib/constants/index.ts"));
			r("./src/lib/makeApiRequest/index.ts"), r("./src/reddit/helpers/addRedesignIdentifier/index.ts"), r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			Object(Pe.a)("RECOMMENDED_POSTS_LOADED"), Object(Pe.a)("RECOMMENDED_POSTS_FAILED");
			var Ce = r("./src/reddit/actions/search.ts");
			const Ne = _e.m,
				ke = (e => t => {
					for (let r = 0; r < e.length; r++) t = e[r](t);
					return t
				})([Oe]),
				Le = (e, t) => {
					const r = t.reduce((e, t) => (e[t.id] = ke(t), e), {});
					return he()({
						...e
					}, r)
				};
			var xe = (e = Ne, t) => {
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
							...ke(t),
							isEnabled: !0
						}, e), {});
						return he()({
							...e
						}, r)
					}
					case ee.b: {
						const {
							awards: r
						} = t.payload, s = r.reduce((e, t) => (e[t.award.id] = ke(t.award), e), {});
						return he()({
							...e
						}, s)
					}
					case ee.i: {
						const {
							award: r
						} = t.payload;
						return r && r.id ? e[r.id] ? he()({
							...e
						}, {
							[r.id]: ke(r)
						}) : {
							...e,
							[r.id]: ke(r)
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
					case we.e:
					case we.h:
					case G.f:
					case G.m:
					case G.p:
					case G.v:
					case ve.r:
					case F.f:
					case ge.b:
					case je.b:
					case H.SEARCH_RESULTS_RECEIVED:
					case B.b:
					case B.e:
					case $.b:
					case $.e:
					case De.b:
					case De.e:
					case Ae.b:
					case q.MORE_POSTS_LOADED:
					case q.PROFILE_POSTS_LOADED:
					case V.c:
					case V.e:
					case V.i:
					case V.g:
					case "RECOMMENDED_POSTS_LOADED":
					case Ce.g:
					case K.i:
					case W.SUBREDDIT_LOADED: {
						const r = {},
							s = t.payload.posts || [],
							a = t.payload.comments || [];
						for (const e in s) {
							const t = s[e].allAwardings || [];
							for (const e of t) r[e.id] = ke(Object(_e.h)(e))
						}
						for (const e in a) {
							const t = a[e],
								{
									associatedAward: s,
									allAwardings: n = []
								} = t;
							for (const e of n) r[e.id] = ke(Object(_e.h)(e));
							s && (r[s.id] = ke(s))
						}
						return Object.keys(r).forEach(t => {
							var s;
							0 === (null === (s = e[t]) || void 0 === s ? void 0 : s.coinPrice) && delete r[t]
						}), he()({
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
							for (const a of s) {
								const e = a.award;
								r[e.id] = e
							}
						}), he()({
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
								thingId: a
							} = t.payload, n = r.map(({
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
									[a]: n
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
				$e = Object(v.c)({
					blacklist: re,
					create: ce,
					manageable: ye,
					models: xe,
					sortedUsable: qe,
					tags: We
				}),
				Ke = r("./src/reddit/actions/badge.ts");
			const Qe = {};
			var Je = (e = Qe, t) => {
				switch (t.type) {
					case Ke.d:
					case Ke.e: {
						const {
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: void 0
						}
					}
					case Ke.c: {
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
			const ze = {};
			var Xe = (e = ze, t) => {
					switch (t.type) {
						case Ke.d: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Ke.e:
						case Ke.c: {
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
					error: Je,
					pending: Xe
				});
			const Ze = {};
			var et = (e = Ze, t) => {
				switch (t.type) {
					case Ke.g:
					case Ke.h: {
						const {
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: void 0
						}
					}
					case Ke.f: {
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
						case Ke.g: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Ke.h:
						case Ke.f: {
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
				at = Object(v.c)({
					subreddit: Ye,
					user: st
				});
			const nt = {};
			var ct = (e = nt, t) => {
					switch (t.type) {
						case o.i:
						case Ke.e:
						case Ke.h:
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
					api: at,
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
			const ht = {};
			var Et = (e = ht, t) => {
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
			const Ot = {};
			var _t = (e = Ot, t) => {
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
					error: Et,
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
						case je.c:
						case ge.c:
							return e.hasBrandSafetyBeenAssessed ? {
								...e,
								hasBrandSafetyBeenAssessed: !1
							} : e;
						default:
							return e
					}
				},
				wt = r("./src/reddit/actions/celebratoryMoments/constants.ts");
			const jt = {
				isRenderCelebratoryMoment: !1
			};
			var Tt = (e = jt, t) => {
					switch (t.type) {
						case wt.a: {
							const {
								isUpvote: e,
								postId: r
							} = t.payload;
							return {
								isRenderCelebratoryMoment: !0,
								isUpvote: e,
								postId: r
							}
						}
						case wt.b:
							return jt;
						default:
							return e
					}
				},
				Dt = r("./src/reddit/actions/downToChat.ts");
			var At = (e = null, t) => {
				switch (t.type) {
					case Dt.f:
					case Dt.g:
						return null;
					case Dt.e: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var Pt = (e = !1, t) => {
					switch (t.type) {
						case Dt.b:
						case Dt.f:
							return !0;
						case Dt.a:
						case Dt.c:
						case Dt.e:
						case Dt.g:
							return !1;
						default:
							return e
					}
				},
				Rt = Object(v.c)({
					error: At,
					pending: Pt
				}),
				Ct = r("./node_modules/lodash/mapValues.js"),
				Nt = r.n(Ct);
			const kt = {};
			var Lt = (e = kt, t) => {
					switch (t.type) {
						case Dt.f:
						case Dt.e:
						case Dt.g: {
							const {
								subredditId: r,
								bannerEnabled: s,
								buttonEnabled: a
							} = t.payload;
							return {
								...e,
								[r]: {
									bannerEnabled: s,
									buttonEnabled: a
								}
							}
						}
						case Dt.c: {
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
						case Dt.d:
							return {
								...Nt()(e, e => ({
									bannerEnabled: !1,
									buttonEnabled: e.buttonEnabled
								}))
							};
						case Dt.a:
						case Dt.b:
						default:
							return e
					}
				},
				xt = Object(v.c)({
					api: Rt,
					subreddits: Lt
				}),
				Ut = r("./src/reddit/actions/chat/init.ts");
			var Mt = (e = !1, t) => {
					switch (t.type) {
						case Ut.a:
							return !0;
						default:
							return e
					}
				},
				Gt = r("./src/chat/actions/promo/constants.ts");
			const Ft = {
				displaySubredditChatFtux: !1
			};
			var Bt = (e = Ft, t) => {
					switch (t.type) {
						case Gt.a: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Gt.b: {
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
				qt = r("./src/lib/omitKey/index.ts"),
				Vt = r("./src/reddit/actions/pages/chatSettings.ts");
			const Ht = {};
			var Wt = (e = Ht, t) => {
				switch (t.type) {
					case Vt.b: {
						const {
							subredditId: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Vt.a:
					case Vt.c:
					case Vt.d: {
						const {
							subredditId: r
						} = t.payload;
						return Object(qt.a)(e, r)
					}
					default:
						return e
				}
			};
			const $t = {};
			var Kt = (e = $t, t) => {
					switch (t.type) {
						case Vt.a:
						case Vt.b:
						case Vt.c:
						case Vt.d: {
							const {
								subredditId: r
							} = t.payload, s = t.type === Vt.c;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Qt = Object(v.c)({
					error: Wt,
					pending: Kt
				}),
				Jt = Object(v.c)({
					fetch: Qt
				});
			const zt = {};
			var Xt = (e = zt, t) => {
					switch (t.type) {
						case Vt.a:
						case Vt.d: {
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
				Yt = Object(v.c)({
					api: Jt,
					models: Xt
				}),
				Zt = r("./src/reddit/actions/chat/unreadCount.ts");
			const er = {
				apiError: null
			};
			var tr = (e = er, t) => {
				switch (t.type) {
					case Zt.a.REQUEST_FAILED: {
						const e = t.payload;
						return {
							...er,
							apiError: e
						}
					}
					case Zt.a.REQUEST_SUCCESS:
					case Zt.a.REQUEST_PENDING:
						return er;
					default:
						return e
				}
			};
			var rr = (e = !1, t) => {
					switch (t.type) {
						case Zt.a.REQUEST_PENDING:
							return !0;
						case Zt.a.REQUEST_FAILED:
						case Zt.a.REQUEST_SUCCESS:
							return !1;
						default:
							return e
					}
				},
				sr = Object(v.c)({
					error: tr,
					pending: rr
				});
			const ar = {
				basicChannelCount: 0,
				subredditChannelCount: 0
			};
			var nr = (e = ar, t) => {
					switch (t.type) {
						case Zt.a.SYNC:
						case Zt.a.REQUEST_SUCCESS:
							return {
								...t.payload
							};
						default:
							return e
					}
				},
				cr = Object(v.c)({
					api: sr,
					count: nr
				}),
				or = Object(v.c)({
					downToChat: xt,
					isInited: Mt,
					promos: Bt,
					subredditSettingsPage: Yt,
					unread: cr
				}),
				dr = r("./src/reddit/actions/claimgold.ts");
			var ir = (e = null, t) => {
				switch (t.type) {
					case dr.a:
						return t.payload.error && t.payload.error.fields && t.payload.error.fields[0] && t.payload.error.fields[0].msg;
					case dr.d:
					case dr.e:
					case dr.c:
						return null;
					default:
						return e
				}
			};
			var ur = (e = !1, t) => {
				switch (t.type) {
					case dr.d:
					case dr.c:
					case dr.a:
						return !1;
					case dr.b:
						return !0;
					default:
						return e
				}
			};
			var lr = (e = !1, t) => {
					switch (t.type) {
						case dr.b:
						case dr.d:
						case dr.c:
						case dr.a:
							return !1;
						case dr.f:
							return !0;
						default:
							return e
					}
				},
				pr = Object(v.c)({
					error: ir,
					pending: ur,
					showLoader: lr
				});
			var br = (e = "", t) => {
				switch (t.type) {
					case dr.g:
						return t.payload;
					case dr.e:
						return "";
					default:
						return e
				}
			};
			var fr = (e = !1, t) => {
					switch (t.type) {
						case dr.e:
							return !0;
						case dr.c:
						case dr.d:
							return !1;
						default:
							return e
					}
				},
				yr = Object(v.c)({
					api: pr,
					code: br,
					showModal: fr
				}),
				mr = r("./src/reddit/actions/commentsListTruncated/constants.ts");
			var hr = (e = !0, t) => {
					switch (t.type) {
						case mr.a:
							return !1;
						case mr.b:
							return !0;
						default:
							return e
					}
				},
				Er = r("./src/reddit/actions/communityFlairs/constants.ts");
			const Or = {};
			var _r = (e = Or, t) => {
					switch (t.type) {
						case Er.a: {
							const {
								models: r,
								sortedKeys: s,
								subredditId: a
							} = t.payload;
							return {
								...e,
								[a]: {
									sortedKeys: s,
									models: r
								}
							}
						}
						default:
							return e
					}
				},
				Ir = r("./src/reddit/actions/connection/constants.ts");
			const gr = {
				showBanner: !1,
				online: !0
			};
			var Sr = (e = gr, t) => {
					switch (t.type) {
						case Ir.a:
							return {
								online: !1, showBanner: !0
							};
						case Ir.b:
							return {
								online: !0, showBanner: !0
							};
						case Ir.c:
							return {
								...e, showBanner: !1
							};
						default:
							return e
					}
				},
				vr = r("./src/reddit/actions/contentControls/constants.ts");
			const wr = {};
			var jr = (e = wr, t) => {
				switch (t.type) {
					case vr.a: {
						const {
							subredditName: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case vr.c:
					case vr.b: {
						const {
							subredditName: r
						} = t.payload;
						return Object(qt.a)(e, r)
					}
					default:
						return e
				}
			};
			const Tr = {};
			var Dr = (e = Tr, t) => {
					switch (t.type) {
						case vr.c:
						case vr.a:
						case vr.b: {
							const {
								subredditName: r
							} = t.payload, s = t.type === vr.c;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Ar = Object(v.c)({
					error: jr,
					pending: Dr
				}),
				Pr = Object(v.c)({
					fetch: Ar
				});
			const Rr = {};
			var Cr = (e = Rr, t) => {
					switch (t.type) {
						case vr.b: {
							const {
								subredditName: r,
								postRequirements: s,
								automatedReporting: a
							} = t.payload;
							return {
								...e,
								[r]: {
									automatedReporting: a,
									postRequirements: s
								}
							}
						}
						case vr.d: {
							const {
								subredditName: r,
								partialUpdates: s
							} = t.payload, a = e[r];
							return a ? {
								...e,
								[r]: {
									automatedReporting: {
										...a.automatedReporting,
										...s.automatedReporting || {}
									},
									postRequirements: {
										...a.postRequirements,
										...s.postRequirements || {}
									}
								}
							} : e
						}
						default:
							return e
					}
				},
				Nr = Object(v.c)({
					api: Pr,
					models: Cr
				}),
				kr = r("./src/reddit/actions/contentGate.ts"),
				Lr = r("./src/reddit/actions/preferences.ts");
			const xr = {};
			var Ur = (e = xr, t) => {
				switch (t.type) {
					case kr.a: {
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
					case kr.b: {
						const {
							subredditDescription: r,
							subredditName: s,
							isContributorRequestsDisabled: a,
							isContributorRequestTimestamp: n,
							subredditId: c
						} = t.payload;
						if (s) {
							if (e[s]) {
								const t = {
									[s]: {
										privateSubreddit: !0,
										subredditDescription: r,
										isContributorRequestsDisabled: a,
										isContributorRequestTimestamp: n,
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
									isContributorRequestsDisabled: a,
									isContributorRequestTimestamp: n,
									subredditId: c
								}
							}
						}
						return e
					}
					case kr.f: {
						const {
							subredditName: r,
							quarantineRequiresEmail: s,
							quarantineMessage: a,
							quarantineMessageHtml: n,
							quarantineMessageRTJson: c
						} = t.payload;
						return r ? {
							...e,
							[r]: {
								...e[r],
								quarantinedSubreddit: !0,
								quarantineRequiresEmail: s,
								quarantineMessage: a,
								quarantineMessageHtml: n,
								quarantineMessageRTJson: c
							}
						} : e
					}
					case kr.h: {
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
					case kr.i: {
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
					case kr.j: {
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
					case kr.c:
					case kr.d:
					case kr.e: {
						const {
							profileName: r
						} = t.payload, s = Re.ec + r.toLocaleLowerCase(), a = e[s] || {}, n = {
							profileDeleted: t.type === kr.d,
							profileSuspended: t.type === kr.e,
							profileBlockedForLegalReason: t.type === kr.c
						};
						return {
							...e,
							[s]: {
								...a,
								...n
							}
						}
					}
					case Lr.p:
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
			const Mr = {};
			var Gr = (e = Mr, t) => {
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
				Fr = Object(v.c)({
					models: Gr
				}),
				Br = r("./src/reddit/actions/postCollection/constants.ts");
			var qr = (e = null, t) => {
				switch (t.type) {
					case s.c:
					case Br.d:
					case Br.c:
					case Br.s:
					case Br.r:
						return null;
					case Br.b:
					case Br.n:
						return t.payload;
					default:
						return e
				}
			};
			var Vr = (e = !1, t) => {
					switch (t.type) {
						case Br.c:
						case Br.r:
							return !0;
						case Br.d:
						case Br.b:
						case Br.s:
						case Br.n:
							return !1;
						default:
							return e
					}
				},
				Hr = Object(v.c)({
					error: qr,
					pending: Vr
				}),
				Wr = Object(v.c)({
					createOrUpdate: Hr
				}),
				$r = r("./src/reddit/actions/postDraft.ts");
			const Kr = {};
			var Qr = (e = Kr, t) => {
				switch (t.type) {
					case $r.c:
					case $r.b: {
						const {
							draftId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case $r.a: {
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
			const Jr = {};
			var zr = (e = Jr, t) => {
					switch (t.type) {
						case $r.b: {
							const {
								draftId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case $r.c:
						case $r.a: {
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
				Xr = Object(v.c)({
					error: Qr,
					pending: zr
				});
			var Yr = (e = null, t) => {
				switch (t.type) {
					case $r.d:
						return t.payload;
					case $r.f:
					case $r.e:
						return null;
					default:
						return e
				}
			};
			var Zr = (e = !1, t) => {
					switch (t.type) {
						case $r.f:
							return !0;
						case $r.e:
						case $r.d:
							return !1;
						default:
							return e
					}
				},
				es = Object(v.c)({
					error: Yr,
					pending: Zr
				});
			const ts = {
				apiError: null,
				needsCaptcha: !1,
				validationError: null,
				submitValidationError: null
			};
			var rs = (e = ts, t) => {
				switch (t.type) {
					case $r.l:
					case $r.j:
						return ts;
					case $r.i: {
						const e = t.payload;
						return {
							...ts,
							apiError: e
						}
					}
					case $r.m: {
						const e = t.payload;
						return {
							...ts,
							validationError: e
						}
					}
					case $r.k: {
						const e = t.payload;
						return {
							...ts,
							submitValidationError: e
						}
					}
					case $r.h:
						return {
							...ts, needsCaptcha: !0
						};
					default:
						return e
				}
			};
			var ss = (e = !1, t) => {
					switch (t.type) {
						case $r.j:
							return !0;
						case $r.l:
						case $r.i:
						case $r.m:
						case $r.k:
						case $r.h:
							return !1;
						default:
							return e
					}
				},
				as = Object(v.c)({
					error: rs,
					pending: ss
				}),
				ns = Object(v.c)({
					deleteDraft: Xr,
					listing: es,
					save: as
				}),
				cs = r("./src/reddit/actions/postCreation/constants.ts");
			const os = {};
			var ds = (e = os, t) => {
					switch (t.type) {
						case cs.C: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case cs.p: {
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
				is = Object(v.c)({
					pending: ds
				});
			var us = (e = null, t) => {
				switch (t.type) {
					case cs.u:
					case cs.v:
					case cs.d:
					case cs.e:
					case cs.f:
					case cs.i:
					case cs.j:
					case cs.n:
					case cs.K:
						return null;
					case cs.t:
						return t.payload;
					default:
						return e
				}
			};
			var ls = (e = !1, t) => {
					switch (t.type) {
						case cs.u:
							return !0;
						case cs.v:
						case cs.t:
							return !1;
						default:
							return e
					}
				},
				ps = Object(v.c)({
					error: us,
					pending: ls
				}),
				bs = Object(v.c)({
					converting: is,
					mediaUpload: ps
				});
			const fs = {};
			var ys = (e = fs, t) => {
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
			const ms = {};
			var hs = (e = ms, t) => {
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
			const Es = {};
			var Os = (e = Es, t) => {
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
				_s = Object(v.c)({
					error: ys,
					fetched: hs,
					pending: Os
				}),
				Is = r("./src/reddit/actions/scheduledPosts/constants.ts");
			const gs = {
				apiError: null,
				needsCaptcha: !1,
				pollError: void 0,
				validationError: null,
				submitValidationError: null
			};
			var Ss = (e = gs, t) => {
				switch (t.type) {
					case cs.L:
					case Is.h:
					case Is.k:
					case Is.b:
					case Is.d:
					case cs.w:
					case cs.c:
					case cs.d:
					case cs.e:
					case cs.f:
					case cs.i:
					case cs.j:
					case cs.n:
					case cs.K:
					case cs.A:
						return gs;
					case cs.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return r ? gs : e
					}
					case cs.o: {
						const e = t.payload;
						return {
							...gs,
							apiError: e
						}
					}
					case cs.X: {
						const e = t.payload;
						return {
							...gs,
							validationError: e
						}
					}
					case cs.G:
					case cs.F: {
						const e = t.payload;
						return {
							...gs,
							submitValidationError: e
						}
					}
					case cs.a:
						return {
							...gs, needsCaptcha: !0
						};
					case cs.y:
						return {
							...gs, pollError: t.payload
						};
					default:
						return e
				}
			};
			var vs = (e = !1, t) => {
					switch (t.type) {
						case cs.w:
							return !0;
						case cs.L:
						case Is.h:
						case cs.o:
						case cs.X:
						case cs.F:
						case cs.G:
						case cs.y:
						case cs.a:
							return !1;
						default:
							return e
					}
				},
				ws = Object(v.c)({
					error: Ss,
					pending: vs
				});
			var js = (e = null, t) => {
				switch (t.type) {
					case cs.x:
					case cs.D:
						return null;
					case cs.m:
						return t.payload;
					default:
						return e
				}
			};
			var Ts = (e = !1, t) => {
					switch (t.type) {
						case cs.x:
							return !0;
						case cs.m:
						case cs.l:
							return !1;
						default:
							return e
					}
				},
				Ds = Object(v.c)({
					error: js,
					pending: Ts
				}),
				As = Object(v.c)({
					submit: ws,
					update: Ds
				});
			var Ps = (e = null, t) => {
				switch (t.type) {
					case cs.K:
					case cs.I:
					case cs.J:
						return null;
					default:
						return e
				}
			};
			var Rs = (e = !1, t) => {
					switch (t.type) {
						case cs.J:
							return !0;
						case cs.I:
						case cs.K:
							return !1;
						default:
							return e
					}
				},
				Cs = Object(v.c)({
					error: Ps,
					pending: Rs
				}),
				Ns = Object(v.c)({
					change: Cs
				}),
				ks = Object(v.c)({
					collection: Wr,
					draft: ns,
					editor: bs,
					page: _s,
					post: As,
					subreddit: Ns
				}),
				Ls = r("./node_modules/lodash/omit.js"),
				xs = r.n(Ls),
				Us = r("./src/reddit/actions/pages/postDraft.ts");
			const Ms = {};
			var Gs = (e = Ms, t) => {
				switch (t.type) {
					case $r.e: {
						const {
							postDrafts: e
						} = t.payload;
						return e || Ms
					}
					case $r.c: {
						const r = e,
							{
								draftId: s
							} = t.payload;
						return xs()(r, s)
					}
					case cs.L: {
						const {
							draftId: r
						} = t.payload;
						return r ? xs()(e, r) : e
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
				Bs = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.queryParams
				};
			var qs = r("./src/reddit/models/PostDraft/index.ts");
			var Vs = (e = "", t) => {
					switch (t.type) {
						case cs.d:
							return t.payload || "";
						case cs.A:
							return "";
						case u.a: {
							if (Fs(t) !== Re.Jb.POST_CREATION) return "";
							const r = Bs(t);
							return r && r.url ? r.url || "" : e
						}
						case $r.g: {
							const e = t.payload;
							return e.kind === qs.b.Link && e.body || ""
						}
						case Is.b:
						case Is.n:
							return t.payload.url || "";
						default:
							return e
					}
				},
				Hs = r("./src/reddit/models/PostCreationForm/index.ts"),
				Ws = r("./src/reddit/models/ScheduledPost/index.ts");
			var $s = (e = "", t) => {
				switch (t.type) {
					case cs.e:
						return t.payload || "";
					case cs.A:
					case cs.E:
						return "";
					case cs.M:
						return t.payload.editorMode === Hs.h.MARKDOWN ? t.payload.content || "" : e;
					case u.a: {
						if (Fs(t) !== Re.Jb.POST_CREATION) return "";
						const r = Bs(t);
						return r && r.text ? (e => e ? e.replace(/\+/g, " ") : "")(r.text) : e
					}
					case $r.g: {
						const e = t.payload;
						return e.kind === qs.b.Markdown && e.body || ""
					}
					case Is.b:
					case Is.n: {
						const e = t.payload;
						return e.contentType === Ws.a.TEXT ? e.body : ""
					}
					default:
						return e
				}
			};
			const Ks = {
				items: [],
				selectedKey: null
			};
			var Qs = (e = Ks, t) => {
					switch (t.type) {
						case cs.f:
							return t.payload || Ks;
						case cs.A:
							return Ks;
						case u.a:
							return Fs(t) !== Re.Jb.POST_CREATION ? Ks : e;
						case $r.g:
							return Ks;
						case Is.b:
						case Is.n:
							return Ks;
						default:
							return e
					}
				},
				Js = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				zs = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Xs = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
			const Ys = Js.a.createInitial;
			var Zs = (e = Ys(), t) => {
					switch (t.type) {
						case cs.h: {
							const {
								rteState: e
							} = t.payload;
							return e
						}
						case cs.A:
							return Js.a.createInitial();
						case cs.M: {
							const r = t.payload;
							return r.editorMode === Hs.h.RICH_TEXT && r.editorKey === Hs.g.POST_CREATION ? Js.a.createInitial(r.content) : e
						}
						case u.a:
							return Fs(t) !== Re.Jb.POST_CREATION ? Js.a.createInitial() : e;
						case $r.g: {
							const e = t.payload;
							return e.kind === qs.b.RichText ? Js.a.createInitial(e.body) : Js.a.createInitial()
						}
						case Is.b:
						case Is.n: {
							const e = t.payload,
								r = Object(zs.c)(e.mediaAssets);
							return Js.a.createInitial(e.contentType === Ws.a.RTJSON ? Object(Xs.b)(e.body) : void 0, r || void 0)
						}
						default:
							return e
					}
				},
				ea = Object(v.c)({
					link: Vs,
					markdown: $s,
					media: Qs,
					rte: Zs
				});
			var ta = (e = null, t) => {
					switch (t.type) {
						case cs.b:
							return t.payload || null;
						case cs.A:
						case $r.g:
						case Is.b:
						case Is.n:
						case cs.K:
							return null;
						case u.a:
							return Fs(t) === Re.Jb.POST_CREATION ? e : null;
						default:
							return e
					}
				},
				ra = r("./src/reddit/selectors/scheduledPosts/index.ts");
			var sa = (e = null, t) => {
				switch (t.type) {
					case cs.c:
						return t.payload || null;
					case Is.b:
					case Is.n: {
						const e = t.payload;
						return Object(ra.n)({
							scheduledPost: e
						}) || null
					}
					case cs.A:
						return null;
					case u.a:
						return Fs(t) === Re.Jb.POST_CREATION ? e : null;
					case $r.g:
						return t.payload.flair || null;
					default:
						return e
				}
			};
			var aa = (e = null, t) => {
				switch (t.type) {
					case cs.q:
						return t.payload.type || null;
					case Is.b:
					case Is.n:
					case cs.i:
					case cs.A:
					case u.a:
						return null;
					default:
						return e
				}
			};
			var na = (e = !1, t) => {
				switch (t.type) {
					case cs.O:
						return t.payload || !1;
					case Is.b:
					case Is.n:
						return "CHAT" === t.payload.discussionType;
					case cs.A:
						return !1;
					case u.a:
						return Fs(t) === Re.Jb.POST_CREATION && e;
					case $r.g:
						return t.payload.isChatPost || !1;
					default:
						return e
				}
			};
			var ca = (e = !1, t) => {
				switch (t.type) {
					case cs.W: {
						const {
							isContestMode: e
						} = t.payload;
						return e || !1
					}
					case cs.A:
						return !1;
					case u.a:
						return Fs(t) === Re.Jb.POST_CREATION && e;
					case Is.b:
					case Is.n:
						return t.payload.isContestMode;
					default:
						return e
				}
			};
			var oa = (e = !1, t) => {
				switch (t.type) {
					case cs.Q:
						return t.payload || !1;
					case cs.A:
						return !1;
					case u.a:
						return Fs(t) === Re.Jb.POST_CREATION && e;
					case $r.g:
						return t.payload.isNSFW || !1;
					case Is.b:
					case Is.n:
						return t.payload.isNsfw;
					default:
						return e
				}
			};
			var da = (e = !1, t) => {
				switch (t.type) {
					case cs.R:
						return t.payload || !1;
					case cs.A:
						return !1;
					case cs.K: {
						const {
							name: r
						} = t.payload;
						return !!r && e
					}
					case u.a:
						return Fs(t) === Re.Jb.POST_CREATION && e;
					case $r.g:
						return t.payload.isOriginalContent || !1;
					case Is.b:
					case Is.n:
						return t.payload.isOriginalContent;
					default:
						return e
				}
			};
			var ia = (e = !1, t) => {
				switch (t.type) {
					case cs.S:
						return t.payload || !1;
					case Is.b:
					case Is.n:
						return !!t.payload.poll;
					case cs.A:
						return !1;
					case u.a:
						return Fs(t) === Re.Jb.POST_CREATION && e;
					default:
						return e
				}
			};
			var ua = (e = !1, t) => {
				switch (t.type) {
					case cs.W: {
						const {
							isPostAsMetaMod: e
						} = t.payload;
						return e || !1
					}
					case cs.A:
						return !1;
					case u.a:
						return Fs(t) === Re.Jb.POST_CREATION && e;
					case Is.b:
					case Is.n:
						return t.payload.isPostAsMetaMod;
					default:
						return e
				}
			};
			var la = (e = !1, t) => {
				switch (t.type) {
					case Is.b:
					case Is.n:
					case cs.A:
						return !1;
					case $r.n:
						return t.payload;
					case u.a:
						return Fs(t) === Re.Jb.POST_CREATION && e;
					case $r.g:
						return t.payload.isPublicLink;
					default:
						return e
				}
			};
			var pa = (e = !1, t) => {
				switch (t.type) {
					case cs.T:
						return t.payload || !1;
					case cs.A:
						return !1;
					case u.a:
						return Fs(t) === Re.Jb.POST_CREATION && e;
					case $r.g:
						return t.payload.isSpoiler || !1;
					case Is.b:
					case Is.n:
						return t.payload.isSpoiler;
					default:
						return e
				}
			};
			var ba = (e = "", t) => {
				switch (t.type) {
					case d.b: {
						const {
							subredditName: e
						} = t.payload;
						return e
					}
					case u.a:
					case cs.i:
					case cs.q:
					case cs.A:
					case d.h:
						return "";
					default:
						return e
				}
			};
			var fa = (e = "", t) => {
				switch (t.type) {
					case d.c: {
						const {
							username: e
						} = t.payload;
						return e
					}
					case u.a:
					case cs.i:
					case cs.q:
					case cs.A:
					case d.h:
						return "";
					default:
						return e
				}
			};
			var ya = (e = null, t) => {
					switch (t.type) {
						case cs.J:
						case cs.K:
							return t.payload;
						case cs.I:
						case u.a:
							return null;
						default:
							return e
					}
				},
				ma = r("./src/reddit/actions/polls.ts");
			var ha = (e = null, t) => {
					switch (t.type) {
						case ma.a:
							return {
								...t.payload
							};
						case Is.b:
						case Is.n: {
							const e = t.payload;
							return e.poll ? {
								options: e.poll.options,
								duration: 864e5 * e.poll.duration
							} : null
						}
						case d.h:
						case cs.A:
							return null;
						case u.a:
							return Fs(t) !== Re.Jb.POST_CREATION ? null : e;
						default:
							return e
					}
				},
				Ea = r("./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts"),
				Oa = r("./src/reddit/helpers/scheduledPosts/index.ts");
			var _a = (e = null, t) => {
				var r, s, a, n;
				switch (t.type) {
					case cs.W: {
						const {
							schedule: e
						} = t.payload;
						return e || null
					}
					case cs.A:
					case $r.g:
					case cs.K:
						return null;
					case u.a:
						if (Fs(t) === Re.Jb.POST_CREATION) {
							const c = null === (n = (null !== (a = null === (s = null === (r = t.payload) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.match.queryParams) && void 0 !== a ? a : {}).frequency) || void 0 === n ? void 0 : n.toUpperCase();
							if (c && Object(Ws.m)(c)) {
								const t = Object(Ea.c)();
								return {
									...e,
									...t,
									frequencyOption: c,
									recurrenceInfo: {
										...Ea.a,
										...null == e ? void 0 : e.recurrenceInfo,
										...Object(Ea.b)(new Date(t.submitDate), c)
									}
								}
							}
							return e
						}
						return null;
					case Is.n: {
						const e = t.payload;
						return {
							submitDate: e.publishAt,
							timezoneName: e.clientTimezone,
							frequencyOption: null,
							recurrenceInfo: null
						}
					}
					case Is.b: {
						const e = t.payload;
						return {
							...Object(Oa.h)(e)
						}
					}
					default:
						return e
				}
			};
			var Ia = (e = !1, t) => {
				const {
					type: r,
					payload: s
				} = t;
				switch (r) {
					case cs.U:
						return s || !1;
					case u.a:
						return Fs(t) === Re.Jb.POST_CREATION && e;
					case Is.b:
					case Is.n:
					case $r.g:
						return !1;
					default:
						return e
				}
			};
			var ga = (e = "", t) => {
				switch (t.type) {
					case cs.g:
						return t.payload || "";
					case u.a:
						return Fs(t) !== Re.Jb.POST_CREATION ? "" : e;
					default:
						return e
				}
			};
			var Sa = (e = null, t) => {
				switch (t.type) {
					case u.a:
						return Fs(t) !== Re.Jb.POST_CREATION ? null : e;
					case cs.A:
						return null;
					case Is.b:
					case Is.n:
						return t.payload.id;
					default:
						return e
				}
			};
			var va = (e = !0, t) => {
				switch (t.type) {
					case cs.A:
						return !0;
					case cs.V:
						return t.payload;
					case u.a:
						return Fs(t) !== Re.Jb.POST_CREATION || e;
					case $r.g:
						return t.payload.sendReplies;
					case Is.b:
					case Is.n:
						return t.payload.isSendReplies;
					default:
						return e
				}
			};
			var wa = (e = null, t) => {
				switch (t.type) {
					case cs.W: {
						const {
							stickyPosition: e
						} = t.payload;
						return e || null
					}
					case cs.A:
					case $r.g:
					case cs.K:
						return null;
					case u.a:
						return Fs(t) === Re.Jb.POST_CREATION ? e : null;
					case Is.b:
					case Is.n:
						return t.payload.sticky || null;
					default:
						return e
				}
			};
			const ja = Re.Sb.POST;
			var Ta = (e = ja, t) => {
				switch (t.type) {
					case cs.A:
						return ja;
					case cs.r:
						return Re.Sb.CROSSPOST;
					case cs.i:
						return t.payload.submissionType || ja;
					case u.a: {
						if (Fs(t) !== Re.Jb.POST_CREATION) return ja;
						const r = Bs(t);
						if (!r) return e;
						const {
							title: s = "",
							url: a,
							text: n = "",
							media: c = !1,
							selftext: o = !1
						} = r, d = s && !n && !o;
						return c ? Re.Sb.MEDIA : void 0 !== a || d ? Re.Sb.LINK_ONLY : n || o ? Re.Sb.POST : e
					}
					case $r.g: {
						const e = t.payload;
						return qs.a[e.kind]
					}
					case Is.b:
					case Is.n: {
						const e = t.payload;
						return e.poll ? Re.Sb.POLL : e.url ? Re.Sb.LINK_ONLY : Re.Sb.POST
					}
					default:
						return e
				}
			};
			var Da = (e = null, t) => {
					switch (t.type) {
						case cs.W: {
							const {
								suggestedSort: e
							} = t.payload;
							return e || null
						}
						case cs.A:
						case $r.g:
						case cs.K:
							return null;
						case u.a:
							return Fs(t) === Re.Jb.POST_CREATION ? e : null;
						case Is.b:
						case Is.n:
							return t.payload.suggestedCommentSort || null;
						default:
							return e
					}
				},
				Aa = r("./src/reddit/models/Poll/index.ts");
			const Pa = e => `Should ${e||"username"} become the top moderator?`,
				Ra = e => e ? `Should we spin-off to r/${e}?` : "Should we spin-off to a new community?";
			var Ca = (e = "", t) => {
					switch (t.type) {
						case cs.r:
							return t.payload.postTitle || "";
						case cs.j:
							return t.payload || "";
						case cs.z: {
							const {
								title: r
							} = t.payload;
							return e || (r || "")
						}
						case cs.A:
							return "";
						case u.a: {
							if (Fs(t) !== Re.Jb.POST_CREATION) return "";
							const r = Bs(t);
							return r && r.title ? (e => e ? e.replace(/\+/g, " ") : "")(r.title) : e
						}
						case $r.g:
							return t.payload.title;
						case cs.q: {
							const {
								oldType: r,
								type: s
							} = t.payload;
							return s === Aa.a.ReplaceTopMod ? Pa("") : s === Aa.a.Spinoff ? Ra("") : r === Aa.a.ReplaceTopMod || r === Aa.a.Spinoff ? "" : e
						}
						case d.c: {
							const {
								username: e
							} = t.payload;
							return Pa(e)
						}
						case d.b: {
							const {
								subredditName: e
							} = t.payload;
							return Ra(e)
						}
						case cs.i: {
							const {
								extra: r
							} = t.payload;
							return !r || r.govType !== Aa.a.ReplaceTopMod && r.govType !== Aa.a.Spinoff ? e : ""
						}
						case Is.b:
						case Is.n:
							return t.payload.title;
						default:
							return e
					}
				},
				Na = Object(v.c)({
					body: ea,
					eventSchedule: ta,
					flair: sa,
					govType: aa,
					isChatPost: na,
					isContestMode: ca,
					isNSFW: oa,
					isOC: da,
					isPostAsMetaMod: ua,
					isPoll: ia,
					isPublicLink: la,
					isSpoiler: pa,
					newSubreddit: ba,
					newTopMod: fa,
					nextSubreddit: ya,
					polls: ha,
					postSchedule: _a,
					postToTwitter: Ia,
					recaptcha: ga,
					scheduledPostId: Sa,
					sendReplies: va,
					stickyPosition: wa,
					submissionType: Ta,
					suggestedSort: Da,
					title: Ca
				});
			var ka = (e = null, t) => {
				switch (t.type) {
					case u.a: {
						if (Fs(t) !== Re.Jb.POST_CREATION) return null;
						const r = Bs(t);
						return r && r.text && (e => e ? e.replace(/\+/g, " ") : "")(r.text) ? Hs.h.MARKDOWN : e
					}
					case cs.D: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case cs.E:
						return null;
					case cs.M: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case Is.b:
					case Is.n:
						return t.payload.contentType === Ws.a.RTJSON ? Hs.h.RICH_TEXT : Hs.h.MARKDOWN;
					default:
						return e
				}
			};
			const La = {
				title: [],
				body: [],
				link: [],
				flair: []
			};
			var xa = (e = La, t) => {
				switch (t.type) {
					case cs.c:
					case cs.d:
					case cs.e:
						return e[Re.ub.BODY] ? {
							...e,
							[Re.ub.BODY]: []
						} : e;
					case cs.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return e[Re.ub.BODY] && r ? {
							...e,
							[Re.ub.BODY]: []
						} : e
					}
					case cs.j:
						return e[Re.ub.TITLE] ? {
							...e,
							[Re.ub.TITLE]: []
						} : e;
					case cs.H: {
						const r = t.payload;
						return {
							...e,
							[r]: []
						}
					}
					case cs.n: {
						const r = t.payload;
						return r ? {
							...e,
							[r]: []
						} : La
					}
					case cs.G:
					case cs.F:
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
					case u.a:
						return Fs(t) !== Re.Jb.POST_CREATION ? La : e;
					default:
						return e
				}
			};
			var Ua = (e = !1, t) => {
				switch (t.type) {
					case cs.b:
					case cs.c:
					case cs.d:
					case cs.e:
					case cs.f:
					case cs.j:
					case cs.i:
					case cs.Q:
					case cs.R:
					case cs.T:
					case $r.n:
					case cs.V:
					case cs.W:
						return !0;
					case cs.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return !!r || e
					}
					case cs.L:
					case Is.h:
						return !1;
					case cs.N:
						return t.payload;
					case u.a:
						return Fs(t) === Re.Jb.POST_CREATION && e;
					case cs.A:
					case $r.l:
					case $r.g:
						return !1;
					default:
						return e
				}
			};
			const Ma = Hs.q.Post;
			var Ga = (e = Ma, t) => {
					switch (t.type) {
						case cs.w:
							return Hs.q.Post;
						case cs.B:
							return t.payload;
						case $r.j:
							return Hs.q.Draft;
						case u.a:
							return Fs(t) !== Re.Jb.POST_CREATION ? Ma : e;
						default:
							return e
					}
				},
				Fa = Object(v.c)({
					editorMode: ka,
					fieldValidation: xa,
					isChanged: Ua,
					submitMode: Ga
				});
			var Ba = (e = "", t) => {
				switch (t.type) {
					case cs.D:
						return t.payload.editorMode === Hs.h.MARKDOWN ? t.payload.postContent || "" : e;
					case cs.E:
						return "";
					case cs.M:
						return t.payload.editorMode === Hs.h.MARKDOWN ? t.payload.content || "" : e;
					default:
						return e
				}
			};
			const qa = Js.a.createInitial;
			var Va = (e = qa(), t) => {
					switch (t.type) {
						case cs.E:
							return Js.a.createInitial();
						case cs.D: {
							const r = t.payload;
							return r.editorMode === Hs.h.RICH_TEXT && "object" == typeof r.postContent ? Js.a.createInitial(r.postContent, r.mediaMetadata) : e
						}
						case cs.M: {
							const r = t.payload;
							return r.editorMode === Hs.h.RICH_TEXT && r.editorKey === Hs.g.POST_EDITING ? Js.a.createInitial(r.content) : e
						}
						default:
							return e
					}
				},
				Ha = Object(v.c)({
					markdown: Ba,
					rte: Va
				});
			var Wa = (e = null, t) => {
					switch (t.type) {
						case cs.D: {
							const {
								postId: e
							} = t.payload;
							return e
						}
						case cs.E:
							return null;
						default:
							return e
					}
				},
				$a = Object(v.c)({
					draft: Ha,
					postId: Wa
				}),
				Ka = Object(v.c)({
					api: ks,
					drafts: Gs,
					formData: Na,
					formState: Fa,
					postEditing: $a
				}),
				Qa = r("./src/reddit/actions/dashboard/constants.ts");
			const Ja = {
				selectedComponent: null,
				subredditPending: !1,
				subredditLoaded: {}
			};
			var za = (e = Ja, t) => {
				switch (t.type) {
					case Qa.a:
						return {
							...e, selectedComponent: t.payload
						};
					case Qa.d: {
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
					case Qa.c: {
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
			var Xa = (e = null, t) => {
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
			var Ya = (e = !1, t) => {
				switch (t.type) {
					case Ie.c:
						return !1;
					case Ie.b:
						return !0;
					default:
						return e
				}
			};
			var Za = (e = !1, t) => {
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
				en = Object(v.c)({
					error: Xa,
					loaded: Ya,
					pending: Za
				}),
				tn = Object(v.c)({
					list: en
				}),
				rn = r("./node_modules/lodash/isEmpty.js"),
				sn = r.n(rn);
			const an = {};
			var nn = (e = an, t) => {
					switch (t.type) {
						case Ie.b: {
							const {
								discoveryUnits: r
							} = t.payload;
							return sn()(r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				cn = r("./node_modules/lodash/forOwn.js"),
				on = r.n(cn),
				dn = r("./src/reddit/helpers/name/index.ts");
			const un = {};
			var ln = (e = un, t) => {
					switch (t.type) {
						case Ie.b: {
							const {
								discoveryUnits: r
							} = t.payload;
							if (sn()(r)) return e;
							const s = {};
							return on()(r, e => {
								s[Object(dn.g)(e.unitName)] = e.id
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				pn = Object(v.c)({
					api: tn,
					models: nn,
					nameToId: ln
				}),
				bn = r("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const fn = [];
			var yn = (e = fn, t) => {
					switch (t.type) {
						case bn.a: {
							const {
								subredditId: r
							} = t.payload;
							return [...e, r]
						}
						default:
							return e
					}
				},
				mn = r("./src/reddit/actions/economics/banners/constants.ts");
			const hn = {
				dismissedBanners: {}
			};
			var En = (e = hn, t) => {
					switch (t.type) {
						case mn.c: {
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
						case mn.d: {
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
						case mn.a:
						case mn.b: {
							const {
								subredditId: r,
								bannerType: s
							} = t.payload, a = e.dismissedBanners[r] || {}, n = t.type === mn.a;
							return {
								...e,
								dismissedBanners: {
									...e.dismissedBanners,
									[r]: {
										...a,
										data: {
											...a.data,
											[s]: n
										}
									}
								}
							}
						}
						default:
							return e
					}
				},
				On = r("./src/reddit/models/Badge/managementPage.ts");
			const _n = {
				badgeType: On.a.Cosmetic,
				view: On.c.Gallery
			};
			var In = (e = _n, t) => {
				switch (t.type) {
					case o.c: {
						const {
							badge: r,
							initialView: s
						} = t.payload;
						return r || s ? {
							...e,
							badgeType: r ? Object(On.d)(r.placement) : e.badgeType,
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
						return _n;
					default:
						return e
				}
			};
			var gn = (e = null, t) => {
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
				Sn = r("./src/reddit/actions/economics/powerups/constants.ts");

			function vn(e, t) {
				const {
					name: r,
					emojiIcon: s,
					stickerIcon: a
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
						x: a.x,
						y: a.y,
						path: a.url,
						type: a.mimeType
					}
				}
			}

			function wn(e) {
				if (!e) return e;
				const {
					mediaPacks: t
				} = e, r = {};
				return null == t || t.forEach(e => {
					const {
						id: t,
						name: s,
						emotes: a
					} = e;
					r[t] = {
						id: t,
						name: s,
						emotes: a.map(e => vn(e, t))
					}
				}), r
			}
			const jn = {};
			var Tn = (e = jn, t) => {
				switch (t.type) {
					case o.e: {
						const {
							emotes: r,
							emoteCollections: s
						} = t.payload.products, a = {};
						return r.forEach(e => {
							const t = e.extra && e.extra.assets,
								r = Object.keys(e.collections || {})[0] || e.title,
								n = s[r];
							a[r] || (a[r] = {
								emotes: {},
								position: n ? n.position : 0,
								title: n ? n.title : e.title
							}), t && Object.keys(t).forEach(s => {
								const n = t[s];
								a[r].emotes[s] = {
									id: s,
									emoji: n.emoji,
									extra: {
										rtDescription: e.extra && e.extra.rtDescription
									},
									fullId: `emote|${e.id}|${s}`,
									imageType: n.emoji.type,
									sticker: n.sticker
								}
							})
						}), {
							...e,
							[t.payload.subredditId]: Object.keys(a).map(e => a[e]).sort((e, t) => e.position - t.position)
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
					case Sn.b: {
						const {
							subredditId: r,
							emoji: s
						} = t.payload;
						return function(e, t, r) {
							if (!e[t]) return e;
							const s = e[t].findIndex(e => e.title === t);
							return -1 === s ? e : {
								...e,
								[t]: e[t].map((e, a) => a !== s ? e : {
									title: e.title,
									emotes: {
										...e.emotes,
										[r.name]: vn(r, t)
									}
								})
							}
						}(e, r, s)
					}
					default:
						return e
				}
			};
			const Dn = {};
			var An = (e = Dn, t) => {
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
				Pn = r("./src/reddit/actions/economics/me/constants.ts");
			const Rn = {
				fetched: !1,
				data: {}
			};
			var Cn = (e = Rn, t) => {
					switch (t.type) {
						case Pn.a:
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
				Nn = r("./src/reddit/reducers/economics/paymentSystems/index.ts");
			const kn = {
				fetched: !1,
				data: null
			};
			var Ln = (e = kn, t) => {
					switch (t.type) {
						case Pn.b:
							return {
								fetched: !0, data: e.data
							};
						case Pn.c:
							return {
								fetched: !0, data: t.payload
							};
						default:
							return e
					}
				},
				xn = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				Un = Object(v.c)({
					banners: En,
					currentBadgeManagementScreen: In,
					currentModalArgs: gn,
					emotes: Tn,
					gifs: An,
					me: Cn,
					paymentSystems: Nn.b,
					pointsCopy: Ln,
					subredditPremium: xn.b
				}),
				Mn = r("./src/reddit/actions/emoji.ts");
			const Gn = {};
			var Fn = (e = Gn, t) => {
					switch (t.type) {
						case Mn.h: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Mn.g:
						case Mn.f: {
							const {
								subredditId: r
							} = t.payload, {
								[r]: s,
								...a
							} = e;
							return a
						}
						default:
							return e
					}
				},
				Bn = Object(v.c)({
					pending: Fn
				}),
				qn = Object(v.c)({
					list: Bn
				});
			const Vn = {};
			var Hn = (e = Vn, t) => {
					switch (t.type) {
						case Mn.f:
						case Mn.c:
							return e;
						case Mn.g: {
							const {
								data: e
							} = t.payload;
							return e
						}
						case Mn.d: {
							const {
								emojiName: r,
								subredditId: s
							} = t.payload, a = e[s].emojis, {
								[r]: n,
								...c
							} = a;
							return {
								...e,
								[s]: {
									...e[s],
									emojis: c
								}
							}
						}
						case Mn.i: {
							const r = t.payload,
								s = e[r.subredditId].emojis,
								a = {
									url: r.url,
									name: r.name,
									userFlairAllowed: r.userFlairAllowed,
									postFlairAllowed: r.postFlairAllowed,
									modFlairOnly: r.modFlairOnly
								},
								n = {
									...s,
									[r.name]: a
								};
							return {
								...e,
								[r.subredditId]: {
									...e[r.subredditId],
									emojis: n
								}
							}
						}
						case Mn.e: {
							const {
								emojiName: r,
								isSnoomoji: s,
								settings: a,
								subredditId: n
							} = t.payload, c = s ? "snoomojis" : "emojis", o = e[n][c], d = {
								...o,
								[r]: {
									...o[r],
									...a
								}
							};
							return {
								...e,
								[n]: {
									...e[n],
									[c]: d
								}
							}
						}
						default:
							return e
					}
				},
				Wn = Object(v.c)({
					api: qn,
					models: Hn
				}),
				$n = r("./src/reddit/actions/experiments.ts");
			const Kn = /^experiment_(.*)$/i,
				Qn = e => {
					const t = e.match(Kn);
					if (null !== t) return t[1]
				},
				Jn = {};
			var zn = (e = Jn, t) => {
					switch (t.type) {
						case u.a: {
							const r = Bs(t);
							if (!r) return e;
							const s = {};
							for (const e in r) {
								const t = Qn(e);
								t && (s[t.toLowerCase()] = r[e] || "")
							}
							return sn()(s) ? e : {
								...e,
								...s
							}
						}
						case $n.b: {
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
				Xn = r("./src/reddit/actions/externalAccount.ts");
			const Yn = {};
			var Zn = (e = Yn, t) => {
				switch (t.type) {
					case Xn.e:
					case Xn.f: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Xn.d: {
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
			const ec = {};
			var tc = (e = ec, t) => {
					switch (t.type) {
						case Xn.e: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Xn.f:
						case Xn.d: {
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
				rc = Object(v.c)({
					error: Zn,
					pending: tc
				});
			const sc = {};
			var ac = (e = sc, t) => {
				switch (t.type) {
					case Xn.l:
					case Xn.k: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Xn.j: {
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
			const nc = {};
			var cc = (e = nc, t) => {
					switch (t.type) {
						case Xn.b: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Xn.c:
						case Xn.a: {
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
				oc = Object(v.c)({
					error: ac,
					pending: cc
				});
			const dc = {};
			var ic = (e = dc, t) => {
				switch (t.type) {
					case Xn.i:
					case Xn.h: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Xn.g: {
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
			const uc = {};
			var lc = (e = uc, t) => {
				switch (t.type) {
					case Xn.h: {
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
			const pc = {};
			var bc = (e = pc, t) => {
					switch (t.type) {
						case Xn.i: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Xn.h:
						case Xn.g: {
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
				fc = Object(v.c)({
					error: ic,
					fetched: lc,
					pending: bc
				});
			const yc = {};
			var mc = (e = yc, t) => {
				switch (t.type) {
					case Xn.l:
					case Xn.k: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Xn.j: {
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
			const hc = {};
			var Ec = (e = hc, t) => {
					switch (t.type) {
						case Xn.l: {
							const {
								username: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Xn.k:
						case Xn.j: {
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
				Oc = Object(v.c)({
					error: mc,
					pending: Ec
				}),
				_c = Object(v.c)({
					connect: rc,
					disconnect: oc,
					user: Oc,
					subreddit: fc
				});
			const Ic = {};
			var gc = (e = Ic, t) => {
				switch (t.type) {
					case Xn.h: {
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
			const Sc = {};
			var vc = (e = Sc, t) => {
					switch (t.type) {
						case Xn.k: {
							const {
								username: r,
								accountsData: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case Xn.c: {
							const {
								username: r,
								provider: s
							} = t.payload, a = e[r];
							return a && a[s] ? {
								...e,
								[r]: xs()(a, s)
							} : e
						}
						default:
							return e
					}
				},
				wc = Object(v.c)({
					api: _c,
					user: vc,
					subreddit: gc
				}),
				jc = r("./src/reddit/featureFlags/index.ts");
			const Tc = new Set(["0", "disabled", "false", "off", ""]);
			var Dc = e => !Tc.has(e.toLowerCase());
			const Ac = jc.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				Pc = jc.a.reduce((e, t) => (e[t] = null, e), {});
			var Rc = (e = Pc, t) => {
					switch (t.type) {
						case u.a: {
							const r = Bs(t);
							if (void 0 !== r) {
								const t = {};
								for (const e in r) {
									const s = Object(jc.g)(e);
									if (s) {
										const a = Ac[s.toLowerCase()];
										if (a) {
											const s = r[e],
												n = "string" != typeof s || Dc(s);
											t[a] = n
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
						case jc.b: {
							const {
								featureName: r,
								currentValue: s
							} = t.payload;
							return s === e[r] ? e : {
								...e,
								[r]: s
							}
						}
						case jc.c: {
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
				Cc = Object(v.c)({
					overrides: Rc
				}),
				Nc = r("./src/reddit/actions/focusedVerticals/constants.ts");
			const kc = {
				focusedVerticalGqlError: null
			};
			var Lc = (e = kc, t) => {
				switch (t.type) {
					case Nc.h:
					case Nc.g:
					case Nc.c:
						return {
							...e, focusedVerticalGqlError: null
						};
					case Nc.e:
						return {
							...e, focusedVerticalGqlError: t.payload
						};
					default:
						return e
				}
			};
			const xc = {
				focusedVerticalGqlPending: !1
			};
			var Uc = (e = xc, t) => {
					switch (t.type) {
						case Nc.h:
							return {
								...e, focusedVerticalGqlPending: !0
							};
						case Nc.e:
						case Nc.g:
						case Nc.c:
							return {
								...e, focusedVerticalGqlPending: !1
							};
						default:
							return e
					}
				},
				Mc = Object(v.c)({
					error: Lc,
					pending: Uc
				});
			var Gc = (e = "", t) => {
				switch (t.type) {
					case Nc.g:
					case Nc.c:
						return t.payload.category || "";
					default:
						return e
				}
			};
			const Fc = {
				dismissed: !0
			};
			var Bc = (e = Fc, t) => {
				switch (t.type) {
					case Nc.j:
						return {
							dismissed: !1
						};
					case Nc.i:
						return {
							dismissed: !0
						};
					default:
						return e
				}
			};
			var qc = (e = null, t) => {
				switch (t.type) {
					case Nc.g:
					case Nc.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var Vc = (e = null, t) => {
				switch (t.type) {
					case Nc.g:
					case Nc.c:
					case Nc.f:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var Hc = (e = null, t) => {
					switch (t.type) {
						case Nc.g:
						case Nc.c:
							return t.payload.recommendedSubredditIds || null;
						default:
							return e
					}
				},
				Wc = Object(v.c)({
					api: Mc,
					components: Bc,
					interactedSubredditIds: qc,
					recommendedSubredditIds: Hc,
					category: Gc,
					lastLoadedEnv: Vc
				});
			Object(Pe.a)("FONTS_FONT_FILES_PARSED");
			const $c = [];
			var Kc = (e = $c, t) => {
				switch (t.type) {
					case "FONTS_FONT_FILES_PARSED":
						return t.payload.fonts;
					default:
						return e
				}
			};
			var Qc = (e = null, t) => {
				switch (t.type) {
					case ee.p:
						return t.payload;
					case ee.e:
					case u.a:
					case ee.K:
					case ee.s:
						return null;
					default:
						return e
				}
			};
			var Jc = (e = !1, t) => {
				switch (t.type) {
					case ee.e:
					case u.a:
					case ee.s:
					case ee.p:
						return !1;
					case ee.q:
						return !0;
					default:
						return e
				}
			};
			var zc = (e = !1, t) => {
					switch (t.type) {
						case ee.q:
						case ee.e:
						case u.a:
						case ee.s:
						case ee.p:
							return !1;
						case ee.u:
							return !0;
						default:
							return e
					}
				},
				Xc = Object(v.c)({
					error: Qc,
					pending: Jc,
					showLoader: zc
				});
			var Yc = (e = null, t) => {
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
			var Zc = (e = null, t) => {
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
			var eo = (e = null, t) => {
				const r = t.payload;
				switch (t.type) {
					case ee.J:
					case ee.K:
						return r.thingId;
					case ee.s:
					case u.a:
					case ee.e:
						return null;
					default:
						return e
				}
			};
			var to = (e = !1, t) => {
				switch (t.type) {
					case ee.r:
						return t.payload;
					case ee.K:
						return !1;
					default:
						return e
				}
			};
			var ro = (e = !1, t) => {
				switch (t.type) {
					case ee.J:
						return !0;
					default:
						return e
				}
			};
			var so = (e = "", t) => {
				switch (t.type) {
					case ee.v:
						return t.payload;
					case ee.K:
						return "";
					default:
						return e
				}
			};
			const ao = _e.n;
			var no = (e = ao, t) => {
					switch (t.type) {
						case ee.mb:
							return t.payload;
						case ee.K: {
							const {
								award: e
							} = t.payload;
							return e || ao
						}
						default:
							return e
					}
				},
				co = Object(v.c)({
					api: Xc,
					correlationId: Yc,
					gildModalThingId: eo,
					isAnonymous: to,
					isIframed: ro,
					message: so,
					gildedThing: Zc,
					selectedAward: no
				});
			var oo = (e = null, t) => {
				switch (t.type) {
					case ee.w:
						return t.payload.error && t.payload.error.fields && t.payload.error.fields[0] && t.payload.error.fields[0].msg || "An unknown error occurred";
					case ee.f:
					case u.a:
					case ee.L:
					case ee.B:
						return null;
					default:
						return e
				}
			};
			var io = (e = !1, t) => {
					switch (t.type) {
						case ee.f:
						case u.a:
						case ee.B:
						case ee.w:
							return !1;
						case ee.x:
							return !0;
						default:
							return e
					}
				},
				uo = Object(v.c)({
					error: oo,
					pending: io
				});
			var lo = (e = "", t) => {
					switch (t.type) {
						case ee.L: {
							const {
								profileName: e
							} = t.payload;
							return e
						}
						case u.a:
						case ee.f:
						case ee.B:
							return "";
						default:
							return e
					}
				},
				po = Object(v.c)({
					api: uo,
					givePremiumModalAccountName: lo
				}),
				bo = r("./src/reddit/actions/header.ts"),
				fo = r("./src/reddit/actions/overlayEvents.ts");
			var yo = (e = !1, t) => {
					switch (t.type) {
						case bo.a:
							return !1;
						case bo.b:
							return !0;
						case bo.c:
							return !e;
						case fo.b:
							return !1;
						default:
							return e
					}
				},
				mo = Object(v.c)({
					isSubscriptionsDropdownOpen: yo
				});
			var ho = (e = !1, t) => {
					switch (t.type) {
						case "HTML_RESPONSE_STREAMING_STARTED":
							return !0;
						case "HTML_RESPONSE_STREAMING_ENDED":
							return !1;
						default:
							return e
					}
				},
				Eo = r("./src/reddit/actions/imageUploads.ts");
			const Oo = {};
			var _o = (e = Oo, t) => {
					switch (t.type) {
						case Eo.d: {
							const r = t.payload;
							return {
								...e,
								[r.id]: r
							}
						}
						case Eo.c:
						case Eo.e:
						case Eo.b: {
							const r = t.payload;
							return e[r.id] ? {
								...e,
								[r.id]: r
							} : e
						}
						case Eo.a: {
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
				Io = r("./src/reddit/actions/interceptedAction.ts");
			var go = (e = null, t) => {
					switch (t.type) {
						case Io.a:
							return t.payload;
						case Io.b:
							return null;
						default:
							return e
					}
				},
				So = r("./src/reddit/actions/changeUsername.ts");
			var vo = (e = !0, t) => {
					switch (t.type) {
						case So.a:
							return !1;
						case So.b:
							return !0;
						default:
							return e
					}
				},
				wo = r("./src/reddit/actions/emailVerificationTooltip.ts");
			var jo = (e = !1, t) => {
					switch (t.type) {
						case wo.a:
							return !e;
						default:
							return e
					}
				},
				To = r("./src/reddit/actions/moderatingSubreddits.ts");
			var Do = (e = !1, t) => {
					switch (t.type) {
						case To.a: {
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
								moderatingProfiles: a
							} = r;
							let n = Object.keys(s).some(e => !0 === s[e].posts);
							if (!n) {
								n = Object.keys(a).some(e => !0 === s[e].posts)
							}
							return n
						}
						default:
							return e
					}
				},
				Ao = r("./src/reddit/actions/jsApi.ts");
			const Po = [];
			var Ro = (e = Po, t) => {
					switch (t.type) {
						case Ao.a: {
							const r = t.payload;
							return -1 === e.indexOf(r) && (e = [...e, r]).sort(), e
						}
						default:
							return e
					}
				},
				Co = r("./src/reddit/actions/leaderboard/constants.ts");
			const No = {};
			var ko = (e = No, t) => {
				switch (t.type) {
					case Co.a: {
						const {
							subredditId: r,
							data: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Co.b:
					case Co.c: {
						const {
							subredditId: r
						} = t.payload, {
							[r]: s,
							...a
						} = e;
						return a
					}
					default:
						return e
				}
			};
			const Lo = {};
			var xo = (e = Lo, t) => {
					switch (t.type) {
						case Co.a:
						case Co.c: {
							const {
								subredditId: r
							} = t.payload, {
								[r]: s,
								...a
							} = e;
							return a
						}
						case Co.b: {
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
				Uo = Object(v.c)({
					error: ko,
					pending: xo
				});
			const Mo = {};
			var Go = (e = Mo, t) => {
					switch (t.type) {
						case Co.c: {
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
				Fo = Object(v.c)({
					api: Uo,
					models: Go
				});
			var Bo = (e = "", t) => {
				switch (t.type) {
					case u.a: {
						const {
							listingKey: r
						} = t.payload;
						return r || e
					}
					default:
						return e
				}
			};
			const qo = {};
			var Vo = (e = qo, t) => {
				switch (t.type) {
					case Ce.f:
					case Ce.g:
					case H.SEARCH_PENDING:
					case H.SEARCH_RESULTS_RECEIVED: {
						const {
							key: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Re.Wb.Subreddits) && -1 === s.indexOf(Re.Wb.Users) ? e : {
							...e,
							[r]: null
						}
					}
					case Ce.e:
					case H.SEARCH_FAILED: {
						const {
							key: r,
							error: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Re.Wb.Subreddits) && -1 === a.indexOf(Re.Wb.Users) ? e : {
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
			const Ho = {};
			var Wo = (e = Ho, t) => {
					switch (t.type) {
						case Ce.f:
						case H.SEARCH_PENDING: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.Wb.Subreddits) && -1 === s.indexOf(Re.Wb.Users) ? e : {
								...e,
								[r]: !0
							}
						}
						case Ce.g:
						case Ce.e:
						case H.SEARCH_RESULTS_RECEIVED:
						case H.SEARCH_FAILED: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.Wb.Subreddits) && -1 === s.indexOf(Re.Wb.Users) ? e : {
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
				$o = Object(v.c)({
					error: Vo,
					pending: Wo
				});
			const Ko = {};
			var Qo = (e = Ko, t) => {
				switch (t.type) {
					case Ce.g: {
						const {
							fetchedToken: r,
							key: s,
							type: a
						} = t.payload;
						if (-1 === a.indexOf(Re.Wb.Subreddits) && -1 === a.indexOf(Re.Wb.Users)) return e;
						const n = e[s];
						return {
							...e,
							[s]: {
								...n,
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
			const Jo = {};
			var zo = (e = Jo, t) => {
				switch (t.type) {
					case Ce.g: {
						const {
							key: r,
							listingOrder: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Re.Wb.Subreddits) && -1 === a.indexOf(Re.Wb.Users) ? e : {
							...e,
							[r]: e[r].concat(s)
						}
					}
					case H.SEARCH_RESULTS_RECEIVED: {
						const {
							key: r,
							listingOrder: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Re.Wb.Subreddits) && -1 === a.indexOf(Re.Wb.Users) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Xo = {};
			var Yo = (e = Xo, t) => {
					switch (t.type) {
						case Ce.g:
						case H.SEARCH_RESULTS_RECEIVED: {
							const {
								key: r,
								tokens: s,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Re.Wb.Subreddits) && -1 === a.indexOf(Re.Wb.Users) ? e : s.listings ? {
								...e,
								[r]: {
									token: s.listings
								}
							} : Object(qt.a)(e, r)
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
				Zo = Object(v.c)({
					api: $o,
					identifiers: zo,
					fetchedTokens: Qo,
					loadMore: Yo
				}),
				ed = r("./src/reddit/actions/eventPosts/constants.ts"),
				td = r("./src/reddit/actions/otherDiscussions/constants.ts"),
				rd = r("./src/reddit/actions/pages/topic.ts");
			const sd = {};
			var ad = (e = sd, t) => {
					switch (t.type) {
						case ge.c:
						case ge.b:
						case je.c:
						case je.b:
						case W.SUBREDDIT_PENDING:
						case W.SUBREDDIT_LOADED:
						case ge.g:
						case ge.f:
						case we.e:
						case we.f:
						case we.i:
						case we.h:
						case ve.s:
						case ve.r:
						case td.b:
						case td.c:
						case q.PROFILE_POSTS_PENDING:
						case q.PROFILE_POSTS_LOADED:
						case q.MORE_POSTS_PENDING:
						case q.MORE_POSTS_LOADED:
						case $.f:
						case $.e:
						case De.f:
						case De.e:
						case K.j:
						case rd.TOPIC_DATA_PENDING:
						case rd.TOPIC_DATA_LOADED:
						case rd.MORE_POSTS_PENDING:
						case rd.MORE_POSTS_LOADED:
						case K.i:
						case ed.e:
						case ed.c:
						case ed.d: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: null
							}
						}
						case H.SEARCH_PENDING:
						case H.SEARCH_RESULTS_RECEIVED:
						case Ce.f:
						case Ce.g: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.Wb.Posts) ? e : {
								...e,
								[r]: null
							}
						}
						case ge.a:
						case je.a:
						case W.SUBREDDIT_FAILED:
						case ge.e:
						case we.g:
						case ve.q:
						case td.a:
						case K.h:
						case $.d:
						case De.d:
						case q.PROFILE_POSTS_FAILED:
						case q.MORE_POSTS_FAILED:
						case rd.TOPIC_DATA_FAILED:
						case rd.MORE_POSTS_FAILED:
						case ed.b: {
							const {
								key: r,
								error: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case H.SEARCH_FAILED:
						case Ce.e: {
							const {
								error: r,
								key: s,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Re.Wb.Posts) ? e : {
								...e,
								[s]: r
							}
						}
						default:
							return e
					}
				},
				nd = r("./src/reddit/actions/linkedPosts/constants.ts"),
				cd = r("./src/reddit/actions/nsfwLinkedPosts/constants.ts"),
				od = r("./src/reddit/actions/subreddit/constants.ts");
			const dd = {};
			var id = (e = dd, t) => {
					switch (t.type) {
						case ge.c:
						case je.c:
						case q.PROFILE_POSTS_PENDING:
						case De.f:
						case W.SUBREDDIT_PENDING:
						case ge.g:
						case we.f:
						case we.i:
						case ve.s:
						case td.c:
						case $.f:
						case q.MORE_POSTS_PENDING:
						case K.j:
						case rd.MORE_POSTS_PENDING:
						case ed.e: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case H.SEARCH_PENDING:
						case Ce.f: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.Wb.Posts) ? e : {
								...e,
								[r]: !0
							}
						}
						case ge.b:
						case ge.a:
						case je.a:
						case je.b:
						case De.d:
						case De.e:
						case q.PROFILE_POSTS_FAILED:
						case q.PROFILE_POSTS_LOADED:
						case W.SUBREDDIT_LOADED:
						case W.SUBREDDIT_FAILED:
						case ge.f:
						case ge.e:
						case nd.b:
						case nd.c:
						case we.e:
						case we.d:
						case we.h:
						case we.g:
						case ve.r:
						case ve.q:
						case $.d:
						case $.e:
						case q.MORE_POSTS_FAILED:
						case q.MORE_POSTS_LOADED:
						case cd.a:
						case cd.b:
						case od.j:
						case td.b:
						case td.a:
						case K.i:
						case K.h:
						case rd.MORE_POSTS_LOADED:
						case rd.MORE_POSTS_FAILED:
						case ed.c:
						case ed.b:
						case ed.d: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						case od.r: {
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
						case H.SEARCH_RESULTS_RECEIVED:
						case H.SEARCH_FAILED:
						case Ce.g:
						case Ce.e: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.Wb.Posts) ? e : {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				ud = Object(v.c)({
					error: ad,
					pending: id
				}),
				ld = r("./src/reddit/actions/postList.ts"),
				pd = r("./node_modules/lodash/omitBy.js"),
				bd = r.n(pd);

			function fd(e, t) {
				return t = t.toLowerCase(), bd()(e, (e, r) => r === t || r.startsWith(`${t}--[`))
			}
			const yd = {};
			var md = (e = yd, t) => {
				switch (t.type) {
					case ld.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case ld.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? xs()(e, [r]) : e
					}
					case W.SUBREDDIT_INVALIDATE_LISTING:
						return fd(e, t.payload);
					default:
						return e
				}
			};
			const hd = {};
			var Ed = (e = hd, t) => {
					switch (t.type) {
						case we.e:
						case ge.b:
						case je.b:
						case W.SUBREDDIT_LOADED:
						case q.PROFILE_POSTS_LOADED:
						case rd.TOPIC_DATA_LOADED: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: {}
							}
						}
						case ge.f:
						case we.h:
						case ve.r:
						case $.e:
						case q.MORE_POSTS_LOADED:
						case K.i:
						case rd.MORE_POSTS_LOADED: {
							const {
								key: r,
								fetchedToken: s
							} = t.payload, a = e[r];
							return {
								...e,
								[r]: {
									...a,
									[s]: !0
								}
							}
						}
						case Ce.g: {
							const {
								fetchedToken: r,
								key: s,
								type: a
							} = t.payload;
							if (a.indexOf(Re.Wb.Posts) > -1) {
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
							return fd(e, t.payload);
						default:
							return e
					}
				},
				Od = r("./src/reddit/actions/post.ts");
			const _d = {};
			var Id = (e = _d, t) => {
					switch (t.type) {
						case ge.c:
						case we.f:
						case je.c:
						case q.PROFILE_POSTS_PENDING:
						case W.SUBREDDIT_PENDING:
						case De.f:
						case q.PROFILE_POSTS_PENDING:
						case rd.TOPIC_DATA_PENDING: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: []
							}
						}
						case Ie.e:
						case nd.c:
						case we.e:
						case cd.b:
						case ge.b:
						case je.b:
						case W.SUBREDDIT_LOADED:
						case od.j:
						case td.b:
						case De.e:
						case q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case rd.TOPIC_DATA_LOADED:
						case ed.c: {
							const {
								key: r,
								postIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case od.r: {
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
						case we.h:
						case ve.r:
						case q.MORE_POSTS_LOADED:
						case $.e:
						case K.i:
						case rd.MORE_POSTS_LOADED:
						case ed.d: {
							const {
								key: r,
								postIds: s
							} = t.payload;
							return {
								...e,
								[r]: e[r].concat(s)
							}
						}
						case H.SEARCH_RESULTS_RECEIVED: {
							const {
								key: r,
								postOrder: s,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Re.Wb.Posts) ? e : {
								...e,
								[r]: s
							}
						}
						case Ce.g: {
							const {
								key: r,
								postOrder: s,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Re.Wb.Posts) ? e : {
								...e,
								[r]: e[r].concat(s)
							}
						}
						case Od.o: {
							const {
								newStickiedPostList: r,
								listingKey: s
							} = t.payload;
							if (!e[s]) return e;
							const a = [...e[s]].filter(e => !r.includes(e));
							return a.unshift(...r), {
								...e,
								[s]: a
							}
						}
						case W.SUBREDDIT_INVALIDATE_LISTING:
							return fd(e, t.payload);
						default:
							return e
					}
				},
				gd = r("./src/lib/makeListingKey/index.ts");
			const Sd = {};
			var vd = (e = Sd, t) => {
				switch (t.type) {
					case W.SUBREDDIT_LOADED: {
						const {
							key: r,
							listingSort: s
						} = t.payload;
						return s && !Object(gd.b)(r) ? {
							...e,
							[r]: {
								sort: s,
								hasChanged: !1
							}
						} : e
					}
					case Lr.a:
					case Lr.p: {
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
			const wd = {};
			var jd = (e = wd, t) => {
				switch (t.type) {
					case ge.b:
					case je.b:
					case W.SUBREDDIT_LOADED:
					case De.e:
					case q.PROFILE_POSTS_LOADED:
					case ge.f:
					case we.e:
					case we.h:
					case ve.r:
					case $.e:
					case q.MORE_POSTS_LOADED:
					case K.i:
					case rd.TOPIC_DATA_LOADED:
					case rd.MORE_POSTS_LOADED: {
						const {
							key: r,
							token: s,
							dist: a
						} = t.payload;
						return s ? {
							...e,
							[r]: {
								token: s,
								dist: a
							}
						} : Object(qt.a)(e, r)
					}
					case Ce.g:
					case H.SEARCH_RESULTS_RECEIVED: {
						const {
							key: r,
							tokens: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Re.Wb.Posts) ? e : s.posts ? {
							...e,
							[r]: {
								token: s.posts
							}
						} : Object(qt.a)(e, r)
					}
					case W.SUBREDDIT_INVALIDATE_LISTING:
						return fd(e, t.payload);
					default:
						return e
				}
			};
			const Td = {};
			var Dd = (e = Td, t) => {
					switch (t.type) {
						case ed.c:
						case ed.d: {
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
				Ad = Object(v.c)({
					api: ud,
					endMarkers: md,
					fetchedTokens: Ed,
					ids: Id,
					listingSort: vd,
					loadMore: jd,
					pageInfo: Dd
				}),
				Pd = Object(v.c)({
					activeKey: Bo,
					listingOrder: Zo,
					postOrder: Ad
				});
			var Rd = (e = null, t) => {
				switch (t.type) {
					case ge.b: {
						const r = t.payload;
						return sn()(r.announcements) ? e : r.announcements || null
					}
					default:
						return e
				}
			};
			var Cd = (e = null, t) => {
				switch (t.type) {
					case ge.b: {
						const r = t.payload;
						return sn()(r.featuredLiveThread) ? e : r.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var Nd = (e = !1, t) => {
				switch (t.type) {
					case ge.b:
						return !0;
					default:
						return e
				}
			};
			var kd = (e = !1, t) => {
					switch (t.type) {
						case "ANNOUNCEMENTS__SHOULD_SHOW":
							return !0;
						default:
							return e
					}
				},
				Ld = Object(v.c)({
					announcements: Rd,
					featured: Cd,
					isFrontpageLoaded: Nd,
					shouldShowAnnouncements: kd
				}),
				xd = r("./src/reddit/actions/media.ts");
			const Ud = {};
			var Md = (e = Ud, t) => {
				switch (t.type) {
					case xd.b: {
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
			const Gd = {};
			var Fd = (e = Gd, t) => {
					switch (t.type) {
						case xd.e: {
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
				Bd = Object(v.c)({
					currentSlideIndex: Md,
					isGalleryTileLayout: Fd
				});
			var qd = (e = !0, t) => {
				switch (t.type) {
					case xd.c:
						return t.payload;
					default:
						return e
				}
			};
			var Vd = (e = .5, t) => {
					switch (t.type) {
						case xd.d:
							return t.payload;
						default:
							return e
					}
				},
				Hd = Object(v.c)({
					isMuted: qd,
					volume: Vd
				}),
				Wd = r("./src/reddit/actions/meta.ts");
			const $d = {
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
			var Kd = (e = $d, t) => {
					switch (t.type) {
						case Wd.b:
							return t.payload;
						case Wd.a:
							return {
								...e, ...t.payload
							};
						case Wd.e:
							return {
								...e, locale: t.payload
							};
						case Wd.f:
							return {
								...e, popularGeoFilter: t.payload
							};
						case Wd.c:
							return {
								...e, platform: {
									...e.platform,
									pwa: !0
								}
							};
						case Wd.d:
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
				Qd = r("./src/reddit/actions/subredditModeration/constants.ts");
			const Jd = {};
			var zd = (e = Jd, t) => {
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
						const a = s[0];
						return {
							...e,
							[a]: r.subredditPermissions
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
							moderatingProfiles: a
						} = r;
						return {
							...e,
							...s,
							...a
						}
					}
					case K.f:
					case we.e:
					case G.k: {
						const r = t.payload,
							{
								moderatingSubreddits: s,
								moderatingProfiles: a
							} = r;
						return {
							...e,
							...s,
							...a
						}
					}
					case Qd.Z: {
						const {
							subredditId: r
						} = t.payload;
						return Object(qt.a)(e, r)
					}
					case Qd.S: {
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
			var Xd = (e = null, t) => {
				switch (t.type) {
					case we.b:
					case we.k:
						return null;
					case we.a:
					case we.j:
						return t.payload;
					default:
						return e
				}
			};
			var Yd = (e = !1, t) => {
					switch (t.type) {
						case we.b:
						case we.k:
							return !0;
						case we.c:
						case we.a:
						case we.l:
						case we.j:
							return !1;
						default:
							return e
					}
				},
				Zd = Object(v.c)({
					error: Xd,
					pending: Yd
				});
			const ei = [];
			var ti = (e = ei, t) => {
					switch (t.type) {
						case we.e: {
							const r = t.payload,
								{
									filteredSubreddits: s
								} = r;
							return s || e
						}
						case we.j: {
							const r = t.payload;
							return [...e, r]
						}
						case we.k:
						case we.a: {
							const r = t.payload;
							return e.filter(e => e !== r)
						}
						default:
							return e
					}
				},
				ri = Object(v.c)({
					api: Zd,
					names: ti
				}),
				si = Object(v.c)({
					filteredSubreddits: ri
				}),
				ai = r("./src/reddit/actions/modMode.ts");
			var ni = (e = !0, t) => {
				switch (t.type) {
					case ai.a:
						return t.payload.enabled;
					default:
						return e
				}
			};
			const ci = {};
			var oi = (e = ci, t) => {
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
			const di = {};
			var ii = (e = di, t) => {
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
				ui = Object(v.c)({
					error: oi,
					pending: ii
				});
			const li = {};
			var pi = (e = li, t) => {
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
				bi = Object(v.c)({
					api: ui,
					models: pi
				});
			var fi = (e = null, t) => {
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
			var yi = (e = !1, t) => {
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
			var mi = (e = null, t) => {
					switch (t.type) {
						case je.b:
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
				hi = Object(v.c)({
					error: fi,
					fetched: yi,
					pending: mi
				});
			var Ei = (e = null, t) => {
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
			var Oi = (e = !1, t) => {
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
			var _i = (e = !1, t) => {
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
				Ii = Object(v.c)({
					error: Ei,
					fetched: Oi,
					pending: _i
				});
			var gi = (e = null, t) => {
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
			var Si = (e = !1, t) => {
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
			var vi = (e = !1, t) => {
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
				wi = Object(v.c)({
					error: gi,
					fetched: Si,
					pending: vi
				});
			var ji = (e = null, t) => {
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
			var Ti = (e = !1, t) => {
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
			var Di = (e = !1, t) => {
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
				Ai = Object(v.c)({
					error: ji,
					fetched: Ti,
					pending: Di
				});
			var Pi = (e = null, t) => {
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
			var Ri = (e = !1, t) => {
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
			var Ci = (e = !1, t) => {
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
				Ni = Object(v.c)({
					error: Pi,
					fetched: Ri,
					pending: Ci
				});
			var ki = (e = !1, t) => {
				switch (t.type) {
					case ve.t:
						return !1;
					case ve.u:
						return !0;
					default:
						return e
				}
			};
			var Li = (e = !1, t) => {
					switch (t.type) {
						case ve.t:
							return !0;
						case ve.u:
							return !1;
						default:
							return e
					}
				},
				xi = Object(v.c)({
					fetched: ki,
					pending: Li
				});
			var Ui = (e = null, t) => {
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
			var Mi = (e = !1, t) => {
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
			var Gi = (e = !0, t) => {
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
				Fi = Object(v.c)({
					error: Ui,
					fetched: Mi,
					pending: Gi
				});
			var Bi = (e = null, t) => {
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
			var qi = (e = !1, t) => {
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
			var Vi = (e = null, t) => {
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
				Hi = Object(v.c)({
					error: Bi,
					fetched: qi,
					pending: Vi
				}),
				Wi = Object(v.c)({
					addSubreddit: hi,
					create: Ii,
					deleteMulti: wi,
					duplicate: Ai,
					edit: Ni,
					forUser: xi,
					recommendations: Fi,
					removeSubreddit: Hi
				}),
				$i = r("./node_modules/lodash/isEqual.js"),
				Ki = r.n($i),
				Qi = r("./node_modules/lodash/union.js"),
				Ji = r.n(Qi);

			function zi(e, t, r) {
				let s, a, n = e.length - 1,
					c = 0;
				for (; c <= n;) {
					const o = r(s = e[a = (c + n) / 2 | 0], t);
					if (o < 0) {
						if ((c = a + 1) > n) return c
					} else {
						if (!(o > 0)) return a;
						if ((n = a - 1) < c) return n + 1
					}
				}
				return (c + n) / 2 | 0
			}
			var Xi = r("./src/reddit/actions/profile/constants.ts");
			const Yi = {};
			var Zi = (e = Yi, t) => {
					switch (t.type) {
						case je.b:
						case ve.r:
						case ve.u:
						case Xi.h: {
							const {
								multireddits: r,
								multiredditsByUser: s,
								multiredditsModelsState: a
							} = t.payload, n = {
								...e
							}, c = {
								...r,
								...a
							};
							for (const t in s) {
								const r = s[t],
									a = e[t];
								n[t] = Ji()(a, r).sort((e, t) => c[e].displayText.toLowerCase() > c[t].displayText.toLowerCase() ? 1 : -1)
							}
							return Ki()(e, n) ? e : n
						}
						case ve.g:
						case ve.m: {
							const {
								userId: r,
								multireddit: s
							} = t.payload, a = e[r] ? e[r].slice() : [], n = zi(a, s.url, (e, t) => e > t ? 1 : -1);
							return a.splice(n, 0, s.url), {
								...e,
								[r]: a
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
				eu = r("./src/reddit/actions/subscription/constants.ts"),
				tu = r("./src/reddit/models/Multireddit/index.ts");
			const ru = {};
			var su = (e = ru, t) => {
				switch (t.type) {
					case je.b:
					case ve.r:
					case ve.u:
					case Xi.h: {
						let r = {};
						for (const s in t.payload.multireddits) {
							const a = {
									...t.payload.multireddits[s]
								},
								n = e[s];
							n && !Object(tu.g)(a) && (a.subredditIds = n.subredditIds, a.profileIds = n.profileIds), s in e && Ki()(e[a.url], a) || (r = {
								...r,
								[s]: a
							})
						}
						return sn()(r) ? e : {
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
							type: a
						} = t.payload, n = e[s], c = "subreddit" === a ? (n.subredditIds || []).filter(e => e !== r) : n.subredditIds, o = "profile" === a ? (n.profileIds || []).filter(e => e !== r) : n.profileIds;
						return {
							...e,
							[s]: {
								...n,
								profileIds: o,
								subredditIds: c
							}
						}
					}
					case eu.d: {
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
					case eu.e: {
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
							type: a
						} = t.payload, n = s.reduce((t, s) => {
							const n = e[s],
								c = "subreddit" === a ? [...n.subredditIds || [], r] : n.subredditIds,
								o = "profile" === a ? [...n.profileIds || [], r] : n.profileIds;
							return {
								...t,
								[s]: {
									...n,
									subredditIds: c,
									profileIds: o
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
			const au = {};
			var nu = (e = au, t) => {
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
				cu = Object(v.c)({
					api: Wi,
					byUserId: Zi,
					models: su,
					recommendations: nu
				}),
				ou = r("./src/reddit/actions/notificationBanner.ts");
			var du = (e = null, t) => {
					switch (t.type) {
						case ou.b:
							return t.payload.notificationBannerId;
						case ou.a:
							return null;
						default:
							return e
					}
				},
				iu = r("./src/reddit/actions/notificationsInbox/constants.ts");
			var uu = (e = !1, t) => {
				switch (t.type) {
					case iu.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case iu.e:
					case iu.b:
						return !1;
					default:
						return e
				}
			};
			var lu = (e = !1, t) => {
					switch (t.type) {
						case iu.e:
							return !0;
						case iu.a:
						case iu.b:
							return !1;
						default:
							return e
					}
				},
				pu = Object(v.c)({
					error: uu,
					pending: lu
				});
			var bu = (e = null, t) => {
				switch (t.type) {
					case iu.g:
						return t.payload && t.payload.index || e;
					default:
						return e
				}
			};
			var fu = (e = null, t) => {
				switch (t.type) {
					case iu.c:
						return t.payload && t.payload.now;
					default:
						return e
				}
			};
			const yu = [];
			var mu = (e = yu, t) => {
				switch (t.type) {
					case iu.b: {
						const r = t.payload && t.payload.nodes;
						return [...e, ...r]
					}
					case iu.f: {
						const r = t.payload && t.payload.id;
						return e.filter(e => (e && e.id) !== r)
					}
					case iu.d: {
						const r = t.payload && t.payload.id,
							s = t.payload && t.payload.now,
							a = e.findIndex(e => e.id === r);
						return -1 === a ? e : [...e.slice(0, a), {
							...e[a],
							readAt: s
						}, ...e.slice(a + 1)]
					}
					case iu.c: {
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
			var hu = (e = null, t) => {
					switch (t.type) {
						case iu.b:
							return t.payload && t.payload.pageInfo;
						default:
							return e
					}
				},
				Eu = Object(v.c)({
					api: pu,
					earlierDividerIndex: bu,
					notifications: mu,
					pageInfo: hu,
					markAllAsReadTimestamp: fu
				}),
				Ou = r("./src/reddit/actions/nps.ts");
			const _u = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var Iu = (e = _u, t) => {
				switch (t.type) {
					case Ou.c:
						return {
							..._u, pending: !0
						};
					case Ou.a:
						return _u;
					case Ou.b: {
						const {
							dest: e
						} = t.payload;
						return {
							..._u,
							success: !0,
							dest: e
						}
					}
					default:
						return e
				}
			};
			const gu = e => {
				const {
					id: t,
					experimentName: r,
					name: s,
					version: a
				} = e;
				return {
					id: parseInt(t),
					name: r,
					variant: s || void 0,
					version: a
				}
			};
			const Su = e => {
					const t = {};
					for (const r of e) t[r.experimentName.toLowerCase()] = gu(r);
					return t
				},
				vu = {};
			var wu = (e = vu, t) => {
				switch (t.type) {
					case $n.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, r = e ? e.experiments : [];
						return Su(r)
					}
					default:
						return e
				}
			};
			var ju = Object(v.c)({
					byName: wu,
					canonicalUrl: (e = null, t) => {
						switch (t.type) {
							case $n.a: {
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
				Tu = Object(v.c)({
					experiments: ju
				}),
				Du = r("./node_modules/history/esm/history.js");
			const Au = {
				allowNavigationCallback: null,
				currentPage: null,
				lastPage: null,
				referrers: {},
				sessionReferrer: null,
				metas: {}
			};
			var Pu = (e = Au, t) => {
				switch (t.type) {
					case u.a: {
						const r = e.currentPage,
							s = t.payload,
							{
								routeMatch: a,
								location: n
							} = s,
							{
								key: c
							} = n;
						if (void 0 === c) return e;
						const o = Object(Du.e)(n),
							d = a ? ((e, t, r, s) => {
								const {
									action: a,
									...n
								} = r.route;
								return {
									key: e,
									locationState: s.state,
									meta: r.route.meta,
									queryParams: r.match.queryParams,
									routeMatch: {
										...r,
										route: n
									},
									status: 200,
									url: t,
									urlParams: r.match.params
								}
							})(c, o, a, n) : ((e, t) => ({
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
					case u.e: {
						const r = t.payload,
							{
								key: s,
								meta: a
							} = r;
						return {
							...e,
							metas: {
								...e.metas,
								[s]: a
							}
						}
					}
					case u.f: {
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
					case u.b:
						return e;
					case u.d: {
						const {
							allowNavigationCallback: r
						} = t.payload;
						return {
							...e,
							allowNavigationCallback: r
						}
					}
					case u.c:
						return {
							...e, allowNavigationCallback: null
						};
					default:
						return e
				}
			};
			const Ru = {};
			var Cu = (e = Ru, t) => {
				switch (t.type) {
					case d.k: {
						const {
							pollId: r
						} = t.payload.pollResults, {
							[r]: s,
							...a
						} = e;
						return a
					}
					case d.j: {
						const {
							pollId: r
						} = t.payload, {
							[r]: s,
							...a
						} = e;
						return a
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
			const Nu = {};
			var ku = (e = Nu, t) => {
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
				Lu = Object(v.c)({
					error: Cu,
					pending: ku
				}),
				xu = Object(v.c)({
					voting: Lu
				}),
				Uu = r("./src/reddit/actions/economics/predictions/constants.ts");
			var Mu = r("./src/reddit/helpers/graphql/normalizePoll/index.ts"),
				Gu = r("./src/reddit/models/Prediction/index.ts");
			const Fu = {};
			var Bu = (e = Fu, t) => {
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
					case K.i:
					case ge.f:
					case F.b:
					case F.f:
					case Uu.g: {
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
						const a = {};
						return Object.keys(s).forEach(e => {
							var t, r;
							const n = s[e];
							if (n.pollData && (a[e] = (e => {
									if (!e.pollData) return null;
									const {
										id: t,
										authorId: r,
										belongsTo: s,
										created: a,
										pollData: {
											isPrediction: n,
											options: c,
											resolvedOptionId: o,
											totalStakeAmount: d,
											totalVoteCount: i,
											tournamentId: u,
											userSelection: l,
											userWonAmount: p,
											voteUpdatesRemained: b,
											votingEndTimestamp: f,
											predictionStatus: y
										}
									} = e;
									return {
										id: t,
										createdAt: a,
										creatorId: r,
										subredditId: s.id,
										endsAt: f,
										voteUpdatesRemained: b,
										postId: t,
										options: c,
										totalVoters: i,
										type: Aa.a.GA,
										isPrediction: n,
										totalStakeAmount: d,
										tournamentId: u,
										userSelection: l,
										userWonAmount: p,
										resolvedOptionId: o,
										predictionStatus: y
									}
								})(n)), null === (r = null === (t = n.predictionTournament) || void 0 === t ? void 0 : t.predictions) || void 0 === r ? void 0 : r.length) {
								const {
									tournamentId: e,
									predictions: t
								} = n.predictionTournament;
								t.forEach(t => {
									a[t.id] = function({
										wonAmount: e,
										endsAt: t,
										id: r,
										totalVoteCount: s,
										totalStakeAmount: a,
										status: n,
										...c
									}, {
										tournamentId: o,
										subredditId: d,
										creatorId: i,
										createdAt: u
									}) {
										return {
											id: r,
											isPrediction: !0,
											predictionStatus: n,
											createdAt: u,
											creatorId: i,
											tournamentId: o,
											subredditId: d,
											userWonAmount: e,
											votingEndTimestamp: t,
											endsAt: t,
											postId: r,
											totalStakeAmount: a || 0,
											totalVoteCount: s || 0,
											totalVoters: s || 0,
											...c
										}
									}(t, {
										tournamentId: e,
										creatorId: n.author,
										createdAt: n.created,
										subredditId: n.belongsTo.id
									})
								})
							}
						}), {
							...e,
							...a
						}
					}
					case Uu.i:
					case Uu.h: {
						const {
							pollId: r,
							prediction: {
								options: s,
								selectedOptionId: a,
								totalVoteCount: n,
								...c
							}
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...c,
								userSelection: a,
								options: s.map(({
									id: t,
									redditorStakeAmount: s,
									totalStakeAmount: a,
									voteCount: n
								}) => ({
									...e[r].options.find(e => e.id === t),
									totalStakeAmount: a,
									userStakeAmount: s,
									voteCount: n
								})),
								totalVoters: n
							}
						}
					}
					case Uu.b: {
						const {
							postId: r,
							prediction: s
						} = t.payload;
						return e[r] && Object(Gu.c)(e[r]) ? {
							...e,
							[r]: {
								...e[r],
								...Object(Mu.b)(s)
							}
						} : e
					}
					default:
						return e
				}
			};
			const qu = {};
			var Vu = (e = qu, t) => {
				switch (t.type) {
					case d.k: {
						const {
							[Aa.b.ByVoters]: r, pollId: s
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
							options: a
						} = t.payload;
						let n = 0;
						const c = {};
						for (const e of a) n += e.voteCount, c[e.id] = {
							id: "number" == typeof e.id ? e.id : parseInt(e.id),
							userSelected: e.id === s,
							votes: e.voteCount.toString()
						};
						return {
							...e,
							[r]: {
								options: c,
								totalVotes: n.toString()
							}
						}
					}
					case ge.b:
					case W.SUBREDDIT_LOADED:
					case K.i:
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
										[Aa.b.ByVoters]: a,
										pollId: n
									} = s.pollResults;
								return e[n] = a, e
							}, {});
							return {
								...e,
								...t
							}
						}
						const a = Object.keys(s).reduce((e, t) => {
							var r;
							if (!(null === (r = s[t]) || void 0 === r ? void 0 : r.pollData)) return e;
							const a = (e => {
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
							return a ? (e[t] = a, e) : e
						}, {});
						return Object.keys(a).length ? {
							...e,
							...a
						} : e
					}
					default:
						return e
				}
			};
			const Hu = {};
			var Wu = (e = Hu, t) => {
					switch (t.type) {
						case d.k: {
							const {
								[Aa.b.ByVotingPower]: r, pollId: s
							} = t.payload.pollResults;
							return {
								...e,
								[s]: r
							}
						}
						case ge.b:
						case W.SUBREDDIT_LOADED:
						case K.i:
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
											[Aa.b.ByVotingPower]: a,
											pollId: n
										} = s.pollResults;
									return e[n] = a, e
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
				$u = Object(v.c)({
					byVoters: Vu,
					byVotingPower: Wu
				});
			const Ku = {};
			var Qu = (e = Ku, t) => {
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
				Ju = Object(v.c)({
					api: xu,
					models: Bu,
					results: $u,
					rewards: Qu
				});
			const zu = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var Xu = (e = zu, t) => {
				switch (t.type) {
					case Br.i:
					case Br.j:
						return {
							...e, reorderError: null
						};
					case Br.h:
						return {
							...e, reorderError: t.payload
						};
					case Br.l:
					case Br.m:
						return {
							...e, updateDescriptionError: null
						};
					case Br.k:
						return {
							...e, updateDescriptionError: t.payload
						};
					case Br.p:
					case Br.q:
						return {
							...e, updateLayoutError: null
						};
					case Br.o:
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
			var Zu = (e = Yu, t) => {
					switch (t.type) {
						case Br.i:
							return {
								...e, reorderPending: !0
							};
						case Br.h:
						case Br.j:
							return {
								...e, reorderPending: !1
							};
						case Br.l:
							return {
								...e, updateDescriptionPending: !0
							};
						case Br.k:
						case Br.m:
							return {
								...e, updateDescriptionPending: !1
							};
						case Br.p:
							return {
								...e, updateLayoutPending: !0
							};
						case Br.o:
						case Br.q:
							return {
								...e, updateLayoutPending: !1
							};
						default:
							return e
					}
				},
				el = Object(v.c)({
					error: Xu,
					pending: Zu
				}),
				tl = r("./src/reddit/helpers/path/index.ts");
			const rl = {},
				sl = e => {
					const {
						protocol: t,
						domain: r
					} = e;
					return e => {
						const s = Object(tl.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${r}${s}`
						}
					}
				};
			var al = (e = rl, t) => {
				switch (t.type) {
					case Te.PAGE_LOADED:
					case we.e:
					case we.h:
					case B.b:
					case B.e:
					case De.e:
					case De.b:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case W.SUBREDDIT_LOADED:
					case ge.b:
					case je.b:
					case W.SUBREDDIT_LOADED:
					case F.b:
					case F.f:
					case Od.j:
					case ve.r:
					case ge.f:
					case $.e:
					case "RECOMMENDED_POSTS_LOADED":
					case K.i:
					case Ce.g:
					case Ae.b:
					case H.SEARCH_RESULTS_RECEIVED:
					case Br.f: {
						const {
							collections: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						let a = r;
						if (s) {
							const e = sl(s);
							a = Nt()(r, e)
						}
						return {
							...e,
							...a
						}
					}
					case Br.d: {
						const {
							collection: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						const a = r.id;
						let n = r;
						if (s) {
							n = sl(s)(r)
						}
						return {
							...e,
							[a]: n
						}
					}
					case Br.g: {
						const {
							collectionId: r,
							postId: s
						} = t.payload, a = e[r];
						return a ? {
							...e,
							[r]: {
								...a,
								postIds: a.postIds.filter(e => e !== s)
							}
						} : e
					}
					case Br.a: {
						const {
							collectionId: r,
							postId: s
						} = t.payload, a = e[r];
						return a && s ? {
							...e,
							[r]: {
								...a,
								postIds: [...a.postIds, s]
							}
						} : e
					}
					case Br.e: {
						const {
							collectionId: r
						} = t.payload, s = {
							...e
						};
						return delete s[r], s
					}
					case Br.s: {
						const {
							collectionId: r,
							newTitle: s
						} = t.payload, a = e[r];
						return a ? {
							...e,
							[r]: {
								...a,
								title: s
							}
						} : e
					}
					case Br.j: {
						const {
							collectionId: r,
							postIds: s
						} = t.payload, a = e[r];
						return a ? {
							...e,
							[r]: {
								...a,
								postIds: [...s]
							}
						} : e
					}
					case Br.m: {
						const {
							collectionId: r,
							newDescription: s
						} = t.payload, a = e[r];
						return a ? {
							...e,
							[r]: {
								...a,
								description: s
							}
						} : e
					}
					case Br.q: {
						const {
							collectionId: r,
							newLayout: s
						} = t.payload, a = e[r];
						return a ? {
							...e,
							[r]: {
								...a,
								displayLayout: s
							}
						} : e
					}
					default:
						return e
				}
			};
			const nl = {};
			var cl = (e = nl, t) => {
					switch (t.type) {
						case Te.PAGE_LOADED:
						case Br.f: {
							const {
								collections: r
							} = t.payload;
							if (!r) return e;
							const s = Object.keys(r);
							if (!s.length) return e;
							const {
								subredditId: a
							} = r[s[0]];
							return {
								...e,
								[a]: s
							}
						}
						case Br.d: {
							const {
								collection: r
							} = t.payload, {
								subredditId: s
							} = r, a = e[s] || [];
							return {
								...e,
								[s]: [...a, r.id]
							}
						}
						case Br.e: {
							const {
								collectionId: r,
								collection: s
							} = t.payload;
							if (!s) return e;
							const a = s && e[s.subredditId];
							return a ? {
								...e,
								[s.subredditId]: a.filter(e => e !== r)
							} : e
						}
						default:
							return e
					}
				},
				ol = Object(v.c)({
					models: al,
					subredditToIds: cl,
					api: el
				}),
				dl = r("./src/reddit/actions/postFlair.ts"),
				il = r("./src/reddit/models/Flair/index.ts");
			const ul = {},
				ll = {
					displaySettings: {
						isEnabled: !1,
						position: il.b.Left
					},
					permissions: {
						canAssignOwn: !1
					},
					templateIds: [],
					templates: {}
				},
				pl = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					return 0 === r.length ? e : r.reduce((e, r) => (e[r] = {
						...ll,
						...e[r],
						...t[r]
					}, e), {
						...e
					})
				};
			var bl = (e = ul, t) => {
					switch (t.type) {
						case Te.PAGE_LOADED:
						case ge.f:
						case we.e:
						case we.h:
						case ve.r:
						case td.b:
						case F.b:
						case F.f:
						case ge.b:
						case je.b:
						case H.SEARCH_RESULTS_RECEIVED:
						case W.SUBREDDIT_LOADED:
						case B.b:
						case B.e:
						case V.c:
						case V.i:
						case V.e:
						case V.g:
						case $.e:
						case Ae.b:
						case Ae.b:
						case De.b:
						case De.e:
						case q.MORE_POSTS_LOADED:
						case q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Ce.g:
						case Ce.g:
						case K.i:
							return pl(e, t.payload.postFlair);
						case dl.c: {
							const {
								subredditId: r,
								isEnabled: s
							} = t.payload, a = {
								...e[r].displaySettings,
								isEnabled: s
							};
							return {
								...e,
								[r]: {
									...e[r],
									displaySettings: a
								}
							}
						}
						case dl.a: {
							const {
								subredditId: r,
								canAssignOwn: s
							} = t.payload, a = {
								...e[r].permissions,
								canAssignOwn: s
							};
							return {
								...e,
								[r]: {
									...e[r],
									permissions: a
								}
							}
						}
						case dl.f: {
							const {
								subredditId: r,
								template: s
							} = t.payload, a = e[r], {
								templates: n,
								templateIds: c
							} = a, o = {
								...n,
								[s.id]: s
							}, d = [...c];
							return d.includes(s.id) || d.push(s.id), {
								...e,
								[r]: {
									...a,
									templates: o,
									templateIds: d
								}
							}
						}
						case dl.b: {
							const {
								subredditId: r,
								templateId: s
							} = t.payload, a = e[r], {
								templates: n,
								templateIds: c
							} = a, o = xs()(n, s), d = c.filter(e => e !== s);
							return {
								...e,
								[r]: {
									...a,
									templates: o,
									templateIds: d
								}
							}
						}
						case dl.e:
						case dl.d: {
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
							return pl(e, r.postFlair)
						}
						default:
							return e
					}
				},
				fl = r("./src/reddit/actions/inFeedChaining.ts");
			var yl = (e = !1, t) => {
				switch (t.type) {
					case fl.a:
						return t.payload.isDismissed;
					default:
						return e
				}
			};
			const ml = {};
			var hl = (e = ml, t) => {
				switch (t.type) {
					case fl.c: {
						const {
							isDismissed: r,
							listingKey: s,
							postId: a
						} = t.payload;
						if (r) return {
							...e,
							[a]: s
						};
						const n = {
							...e
						};
						return delete n[a], n
					}
					default:
						return e
				}
			};
			const El = {};
			var Ol = (e = El, t) => {
					switch (t.type) {
						case fl.b:
							return {
								...e, [t.payload.postId]: t.payload.listingKey
							};
						default:
							return e
					}
				},
				_l = Object(v.c)({
					dismissed: yl,
					dismissedIdToListingKey: hl,
					idToListingKey: Ol
				});
			var Il = (e = null, t) => {
					switch (t.type) {
						case Od.c:
							return t.payload;
						default:
							return e
					}
				},
				gl = r("./src/reddit/actions/embedAndImage.ts");
			const Sl = {};
			var vl = (e = Sl, t) => {
					switch (t.type) {
						case gl.b: {
							const {
								postId: r
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: !1
							} : e
						}
						case gl.a: {
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
				wl = Object(v.c)({
					loadable: vl
				});
			const jl = {};
			var Tl = (e = jl, t) => {
				switch (t.type) {
					case Od.d: {
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
			var Dl = (e = null, t) => {
				switch (t.type) {
					case Od.e: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Al = [];
			var Pl = (e = Al, t) => {
				switch (t.type) {
					case Od.n:
						return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
					case Od.b:
						return [...e.filter(e => e.expiresAt > Date.now())];
					case Od.f:
						return [...t.payload.posts];
					default:
						return e
				}
			};
			const Rl = {};
			var Cl = (e = Rl, t) => {
				switch (t.type) {
					case we.e:
					case we.h:
					case ge.b:
					case W.SUBREDDIT_LOADED:
					case ge.f:
					case $.e:
					case "RECOMMENDED_POSTS_LOADED":
					case K.i:
					case Ce.g:
					case H.SEARCH_RESULTS_RECEIVED:
						return L()({
							...e
						}, t.payload.postInstances, (e, t) => {
							if (e) return e.concat(t)
						});
					default:
						return e
				}
			};
			var Nl = (e = null, t) => {
					switch (t.type) {
						case Od.a:
							return t.payload;
						default:
							return e
					}
				},
				kl = r("./src/reddit/actions/isTrackingCrossposts.ts");
			const Ll = {};
			var xl = (e = Ll, t) => {
				switch (t.type) {
					case kl.a: {
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
			const Ul = {};
			var Ml = (e = Ul, t) => {
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
						case K.i:
						case ge.f:
						case F.b:
						case F.f:
						case Uu.g: {
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
							const a = Object.keys(s).reduce((e, t) => {
								var r, a;
								const n = s[t];
								if ((null == n ? void 0 : n.pollData) && (e[t] = t), null === (a = null === (r = n.predictionTournament) || void 0 === r ? void 0 : r.predictions) || void 0 === a ? void 0 : a.length) {
									const {
										predictions: t
									} = n.predictionTournament;
									t.forEach(t => {
										e[t.id] = t.id
									})
								}
								return e
							}, {});
							return {
								...e,
								...a
							}
						}
						default:
							return e
					}
				},
				Gl = r("./src/reddit/actions/bulkActions/constants.ts"),
				Fl = r("./src/reddit/actions/constants.ts"),
				Bl = r("./src/reddit/actions/flairManagement/constants.ts"),
				ql = r("./src/reddit/actions/googleQASchema/constants.ts"),
				Vl = r("./src/reddit/actions/imageOCRAltText/constants.ts"),
				Hl = r("./src/reddit/actions/subredditTopContent.ts"),
				Wl = r("./src/reddit/helpers/isPost.ts"),
				$l = r("./node_modules/lodash/pickBy.js"),
				Kl = r.n($l);

			function Ql(e, t) {
				const r = Kl()(t, (t, r = "") => !e[r] || !Ki()(e[r], t));
				return Object.keys(r).length > 0 ? {
					...e,
					...r
				} : e
			}
			var Jl = r("./src/reddit/models/Gold/Gild/index.tsx"),
				zl = r("./src/reddit/models/Media/index.ts"),
				Xl = r("./src/reddit/models/ModQueue/index.ts"),
				Yl = r("./src/reddit/models/Post/index.ts"),
				Zl = r("./src/reddit/models/Vote/index.ts"),
				ep = r("./src/reddit/actions/subredditDuplicates.ts");

			function tp({
				tournamentId: e,
				name: t,
				status: r,
				totalParticipants: s,
				predictions: a
			}) {
				return {
					tournamentId: e,
					name: t,
					status: r,
					totalParticipantsCount: s,
					predictions: a.map(rp)
				}
			}

			function rp({
				id: e,
				title: t,
				predictionStatus: r,
				resolvedOptionId: s,
				votingEndTimestamp: a,
				userWonAmount: n,
				totalStakeAmount: c,
				totalVoteCount: o,
				userSelection: d,
				isNSFW: i,
				isSpoiler: u,
				options: l
			}) {
				return {
					id: e,
					title: t,
					endsAt: a,
					status: r,
					voteUpdatesRemained: null,
					isNSFW: i,
					isSpoiler: u,
					totalVoteCount: o,
					totalStakeAmount: c,
					wonAmount: n,
					resolvedOptionId: s,
					selectedOptionId: d,
					options: l.map(sp)
				}
			}

			function sp({
				userAmount: e,
				...t
			}) {
				return {
					...t,
					userStakeAmount: e
				}
			}
			const ap = e => {
					const {
						protocol: t,
						domain: r
					} = e;
					return e => {
						const s = Object(tl.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${r}${s}`
						}
					}
				},
				np = e => t => {
					const r = e[t.id];
					return r && r.events && (t.events = r.events, t.source = r.source), t
				},
				cp = e => t => {
					const r = e[t.id];
					return r && r.isSponsored && (t.isSponsored = r.isSponsored), t
				},
				op = (e, t) => e.pollData ? {
					...e,
					pollData: {
						...e.pollData,
						...t
					}
				} : e,
				dp = ({
					tournamentData: e,
					...t
				}) => e ? {
					...t,
					predictionTournament: tp(e)
				} : t,
				ip = e => e.media && Object(zl.E)(e.media) ? {
					...Object(N.unsetIn)(e, ["source"])
				} : e,
				up = e => t => {
					const r = e[t.id];
					return t && t.media && r && r.media && Object(zl.I)(t.media) && t.media.isRichtextPreview && Object(zl.I)(r.media) && !r.media.isRichtextPreview && (t.media.richtextContent = r.media.richtextContent, t.media.isRichtextPreview = !1), t
				},
				lp = e => t => {
					const r = e[t.id];
					return r && r.numDuplicates && (t.numDuplicates = r.numDuplicates), t
				},
				pp = e => t => {
					const r = e[t.id];
					return r && void 0 !== r.isEligibleForLinkedPosts && (t.isEligibleForLinkedPosts = r.isEligibleForLinkedPosts), t
				},
				bp = e => {
					let t = e.source;
					return t && t.outboundUrlCreated && (t = {
						...t,
						outboundUrlReceived: Date.now()
					}, e.source = t), e
				},
				fp = e => {
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
				yp = e => t => {
					for (let r = 0; r < e.length; r++) t = e[r](t);
					return t
				},
				mp = (e, t) => ({
					...e,
					events: t.events,
					source: t.source
				}),
				hp = {};
			var Ep = (e = hp, t) => {
				switch (t.type) {
					case u.a:
						if (Fs(t) === (Re.Jb.COMMENTS || Re.Jb.DUPLICATES)) {
							const r = Bs(t),
								s = (e => {
									if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
								})(t);
							if (r && r.instanceId && s && s.partialPostId) {
								const t = r.instanceId,
									a = Object(Yl.s)(s.partialPostId);
								if (e[a] && e[t]) return {
									...e,
									[a]: mp(e[a], e[t])
								}
							}
						}
						return e;
					case F.b:
					case F.f: {
						const r = ap(t.payload.meta);
						return {
							...e,
							...Nt()(t.payload.posts, yp([r, bp, fp, ip, dp, np(e), cp(e), lp(e), pp(e)]))
						}
					}
					case Od.j:
						return Ql(e, t.payload);
					case ep.a:
						return Ql(e, t.payload.posts);
					case Te.PAGE_LOADED:
					case nd.c:
					case cd.b:
					case we.e:
					case we.h:
					case B.b:
					case B.e:
					case De.e:
					case De.b:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case W.SUBREDDIT_LOADED:
					case ge.b:
					case je.b:
					case td.b:
					case ve.r:
					case ge.f:
					case $.e:
					case "RECOMMENDED_POSTS_LOADED":
					case od.j:
					case K.i:
					case Ae.b:
					case rd.TOPIC_DATA_LOADED:
					case rd.MORE_POSTS_LOADED:
					case ed.c:
					case ed.d:
					case Uu.g: {
						const r = ap(t.payload.meta);
						return {
							...e,
							...Nt()(t.payload.posts, yp([r, bp, fp, ip, dp, up(e), lp(e), pp(e)]))
						}
					}
					case od.r: {
						if (!t.payload || !t.payload.length) return e;
						const r = {};
						for (const s of t.payload) {
							const t = s,
								a = ap(t.meta);
							Object.assign(r, Nt()(t.posts, yp([a, bp, fp, ip, up(e), lp(e), pp(e)])))
						}
						return {
							...e,
							...r
						}
					}
					case td.b: {
						const r = ap(t.payload.meta),
							s = e[t.payload.postId];
						return {
							...e,
							...Nt()(t.payload.posts, yp([r, bp, fp, ip, up(e), lp(e), pp(e)])),
							[t.payload.postId]: {
								...s,
								numDuplicates: t.payload.count
							}
						}
					}
					case Ie.e:
					case Ce.g:
					case H.SEARCH_RESULTS_RECEIVED: {
						const r = ap(t.payload.meta),
							s = Nt()(t.payload.posts, yp([r, fp, bp, ip, pp(e)]));
						return L()({
							...e
						}, s, (e, t) => ({
							...t,
							...e
						}))
					}
					case Od.k: {
						const r = t.payload;
						return L()({
							...e
						}, r, (e, t) => ({
							...e,
							...t
						}))
					}
					case Fl.a: {
						const {
							id: r,
							vote: s
						} = t.payload, a = e[r];
						return a ? {
							...e,
							[r]: Object(Zl.c)(a, s)
						} : e
					}
					case U.b:
					case x.J: {
						const r = t.payload.comment.postId,
							s = e[r];
						if (s) {
							const a = void 0 !== t.payload.numComments ? t.payload.numComments : s.numComments + 1;
							return {
								...e,
								[r]: {
									...s,
									numComments: a
								}
							}
						}
						return e
					}
					case Od.h: {
						const {
							postId: r,
							delta: s
						} = t.payload, a = e[r];
						if (a) {
							let t = a.numComments + s;
							return t < 0 && (t = 0), {
								...e,
								[r]: {
									...a,
									numComments: t
								}
							}
						}
						return e
					}
					case Od.i: {
						const {
							postId: r,
							delta: s
						} = t.payload, a = e[r];
						if (a) {
							let t = a.score + s;
							return t < 0 && (t = 0), {
								...e,
								[r]: {
									...a,
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
							...r.reduce((e, t) => (e[t.post.id] = yp([fp])(Object(zs.e)(t.post)), e), {})
						}
					}
					case ee.s: {
						const {
							id: r,
							awardings: s,
							gilder: a,
							treatmentTags: n
						} = t.payload, c = e[r];
						return c ? {
							...e,
							[r]: {
								...Object(Jl.a)(c, s, a),
								treatmentTags: n
							}
						} : e
					}
					case ee.D: {
						const {
							awardId: r,
							thingId: s
						} = t.payload, a = e[s];
						return a ? {
							...e,
							[s]: Object(Jl.b)(a, r)
						} : e
					}
					case Qd.n: {
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
							...Nt()(s, yp([fp, ip]))
						}
					}
					case Gl.b:
					case G.s: {
						const {
							operation: r,
							ids: s,
							username: a,
							options: n
						} = t.payload, c = s.filter(e => Object(Wl.a)(e)), o = Object(Xl.d)(e, r, c, a, n);
						return L()({
							...e
						}, o, (e, t) => ({
							...e,
							...t
						}))
					}
					case Br.t: {
						const {
							postId: r,
							collectionId: s
						} = t.payload, a = e[r];
						if (a && s) {
							const t = a.collectionIds || [];
							return t.push(s), {
								...e,
								[r]: {
									...a,
									collectionIds: [...t]
								}
							}
						}
						return e
					}
					case Br.e: {
						const {
							collectionId: r,
							collection: s
						} = t.payload, a = s && s.postIds || [], n = {};
						return a.forEach(t => {
							const s = e[t],
								a = s && s.collectionIds;
							if (a) {
								const e = a.filter(e => e !== r);
								n[t] = {
									...s,
									collectionIds: e
								}
							}
						}), {
							...e,
							...n
						}
					}
					case Br.g: {
						const {
							collectionId: r,
							postId: s
						} = t.payload;
						if (!r || !s) return e;
						const a = e[s],
							n = a && a.collectionIds;
						if (!n) return e;
						const c = n.filter(e => e !== r);
						return {
							...e,
							[s]: {
								...a,
								collectionIds: c
							}
						}
					}
					case ed.f: {
						const {
							postId: r
						} = t.payload;
						if (!r) return e;
						const s = e[r];
						if (!s || !s.eventInfo) return e;
						const a = s.eventInfo;
						return {
							...e,
							[r]: {
								...s,
								eventInfo: {
									...a,
									eventIsLive: !0
								}
							}
						}
					}
					case ed.a: {
						const {
							postId: r,
							eventInfo: s
						} = t.payload;
						if (!r || !s) return e;
						const a = e[r];
						return a ? {
							...e,
							[r]: {
								...a,
								eventInfo: {
									...s
								}
							}
						} : e
					}
					case Nc.g: {
						const r = t.payload.subredditTopContent;
						return r && r.posts && Object.keys(r.posts) ? {
							...Nt()(r.posts, yp([fp, ip])),
							...e
						} : e
					}
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case Hl.b:
						return {
							...Nt()(t.payload.posts, yp([fp, ip])), ...e
						};
					case Od.m: {
						const {
							postId: r,
							richtextContent: s
						} = t.payload, a = e[r];
						return a && a.media && Object(zl.I)(a.media) ? {
							...e,
							[r]: {
								...a,
								media: {
									...a.media,
									richtextContent: s,
									isRichtextPreview: !1
								}
							}
						} : e
					}
					case Bl.a: {
						const r = t.payload;
						return {
							...e,
							[r.id]: r
						}
					}
					case Bl.b: {
						const r = t.payload;
						return Object(qt.a)(e, r)
					}
					case xd.a: {
						const {
							isDeleted: r,
							height: s,
							postId: a
						} = t.payload;
						return {
							...e,
							[a]: {
								...e[a],
								media: {
									...e[a].media,
									height: s,
									isDeleted: r
								}
							}
						}
					}
					case m.o: {
						const r = t.payload.reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							...r
						}
					}
					case Vl.b: {
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
					case Uu.l: {
						const {
							tournamentPostId: r,
							predictionId: s,
							selectedOptionId: a
						} = t.payload;
						if (!e[s] && !e[r]) return e;
						const n = {
							...e
						};
						return n[s] && (n[s] = (({
							post: e,
							selectedOptionId: t
						}) => op(e, {
							userSelection: t
						}))({
							post: e[s],
							selectedOptionId: a
						})), n[r] && (n[r] = (({
							post: e,
							selectedOptionId: t,
							predictionId: r
						}) => {
							var s, a;
							if (e.predictionTournament) return {
								...e,
								predictionTournament: {
									...e.predictionTournament,
									predictions: null === (a = null === (s = e.predictionTournament) || void 0 === s ? void 0 : s.predictions) || void 0 === a ? void 0 : a.map(e => e.id === r ? {
										...e,
										selectedOptionId: t
									} : e)
								}
							}
						})({
							post: e[r],
							selectedOptionId: a,
							predictionId: s
						})), n
					}
					case Uu.b: {
						const {
							postId: r,
							prediction: s
						} = t.payload;
						return {
							...e,
							[r]: op(e[r], Object(Mu.a)(s))
						}
					}
					case Vl.a:
						return {
							...e
						};
					case ql.b: {
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
					case ql.a:
						return {
							...e
						};
					case nd.a: {
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
					default:
						return e
				}
			};
			var Op = (e = null, t) => {
					switch (t.type) {
						case Od.g:
							return t.payload;
						default:
							return e
					}
				},
				_p = r("./src/reddit/actions/postLevelCrowdControl.ts");
			const Ip = {};
			var gp = (e = Ip, t) => {
				switch (t.type) {
					case _p.a: {
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
			const Sp = [];
			var vp = (e = Sp, t) => {
					switch (t.type) {
						case Od.l: {
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
				wp = r("./node_modules/uuid/v4.js"),
				jp = r.n(wp);
			const Tp = jp()();
			var Dp = (e = Tp, t) => {
				switch (t.type) {
					case Te.PAGE_LOADED:
					case Is.h:
					case Is.a:
					case Is.m:
					case Is.f:
						return jp()();
					default:
						return e
				}
			};
			var Ap = (e = null, t) => {
				switch (t.type) {
					case Is.d:
					case Is.o:
					case Is.k:
					case Is.g:
					case Is.a:
					case Is.m:
					case Is.f:
						return null;
					case Is.j: {
						const {
							message: e
						} = t.payload;
						return e
					}
					case Is.e:
						return "error";
					default:
						return e
				}
			};
			var Pp = (e = !0, t) => {
				switch (t.type) {
					case Is.g:
						return !0;
					case Is.m:
					case Is.a:
					case Is.f:
					case Is.e:
						return !1;
					default:
						return e
				}
			};
			var Rp = (e = !1, t) => {
					switch (t.type) {
						case Is.k:
							return !0;
						case Is.j:
						case Is.e:
						case Is.o:
						case Is.d:
							return !1;
						default:
							return e
					}
				},
				Cp = Object(v.c)({
					creationToken: Dp,
					error: Ap,
					pending: Pp,
					pendingUpdate: Rp
				});
			const Np = {};
			var kp = (e = Np, t) => {
				switch (t.type) {
					case Is.c: {
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
			const Lp = {
				standalonePosts: {
					POSTS_LOADED: Is.m,
					postIdsKey: "standalonePostsIds",
					MUTATION_SUCCEEDED: Is.o
				},
				recurringPosts: {
					POSTS_LOADED: Is.a,
					postIdsKey: "recurringPostsIds",
					MUTATION_SUCCEEDED: Is.d
				}
			};

			function xp(e) {
				const t = {};
				return (r = t, s) => {
					switch (s.type) {
						case Lp[e].POSTS_LOADED:
						case Is.f: {
							const {
								subredditInfoById: t
							} = s.payload, {
								id: a
							} = t, n = t.scheduledPosts[e].models.reduce((e, t) => (e[t.id] = t, e), {});
							return {
								...r,
								[a]: {
									...r[a] || {},
									...n
								}
							}
						}
						case Is.i:
						case Is.l: {
							const {
								subredditId: e,
								scheduledPostId: t
							} = s.payload, a = r[e] || {};
							return {
								...r,
								[e]: {
									...Object.keys(a).filter(e => e !== t).reduce((e, t) => (e[t] = a[t], e), {})
								}
							}
						}
						case Is.h: {
							const {
								subredditId: e
							} = s.payload;
							return Object.keys(r).reduce((t, s) => (s !== e && (t[s] = r[s]), t), {})
						}
						case Lp[e].MUTATION_SUCCEEDED: {
							let t;
							switch (e) {
								case "recurringPosts":
									t = s.payload.scheduledPost;
									break;
								case "standalonePosts":
								default:
									t = s.payload.scheduledPost
							}
							const a = t.subreddit.id,
								n = r[a][t.id],
								c = {
									[t.id]: {
										...n,
										...t
									}
								};
							return {
								...r,
								[a]: {
									...r[a] || {},
									...c
								}
							}
						}
						default:
							return r
					}
				}
			}
			const Up = {};

			function Mp(e) {
				return (t = Up, r) => {
					switch (r.type) {
						case Lp[e].POSTS_LOADED:
						case Is.f: {
							const {
								subredditInfoById: s
							} = r.payload, a = s.id, {
								pageInfo: n
							} = s.scheduledPosts[e];
							return {
								...t,
								[a]: {
									...n
								}
							}
						}
						case Is.h: {
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
			var Gp = r("./node_modules/lodash/uniq.js"),
				Fp = r.n(Gp);
			const Bp = {};

			function qp(e) {
				return (t = Bp, r) => {
					switch (r.type) {
						case Lp[e].POSTS_LOADED:
						case Is.f: {
							const {
								subredditInfoById: s
							} = r.payload, a = s.id, n = s.scheduledPosts[Lp[e].postIdsKey];
							return {
								...t,
								[a]: Fp()([...t[a] || [], ...n])
							}
						}
						case Is.i:
						case Is.l: {
							const {
								subredditId: e,
								scheduledPostId: s
							} = r.payload, a = t[e] || [];
							return {
								...t,
								[e]: a.filter(e => e !== s)
							}
						}
						case Is.h: {
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
			var Vp = Object(v.c)({
					models: xp("recurringPosts"),
					pageInfo: Mp("recurringPosts"),
					postOrder: qp("recurringPosts"),
					editModal: kp
				}),
				Hp = Object(v.c)({
					models: xp("standalonePosts"),
					pageInfo: Mp("standalonePosts"),
					postOrder: qp("standalonePosts")
				}),
				Wp = Object(v.c)({
					api: Cp,
					standalonePosts: Hp,
					recurringPosts: Vp
				});
			var $p = (e = null, t) => {
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
			var Kp = (e = !1, t) => {
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
				Qp = Object(v.c)({
					error: $p,
					pending: Kp
				});
			const Jp = [];
			var zp = (e = Jp, t) => {
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
							return Jp;
						default:
							return e
					}
				},
				Xp = Object(v.c)({
					api: Qp,
					list: zp
				}),
				Yp = r("./src/reddit/actions/video.ts");
			const Zp = {};
			var eb = (e = Zp, t) => {
				switch (t.type) {
					case Yp.e: {
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
			const tb = {};
			var rb = (e = tb, t) => {
				switch (t.type) {
					case Yp.a: {
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
			const sb = {};
			var ab = (e = sb, t) => {
				switch (t.type) {
					case Yp.b: {
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
			const nb = {};
			var cb = (e = nb, t) => {
				switch (t.type) {
					case Yp.c: {
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
			const ob = {
				mutedInFeed: !0
			};
			var db = (e = ob, t) => {
				switch (t.type) {
					case Yp.l:
						return {
							...e, mutedInFeed: t.payload
						};
					default:
						return e
				}
			};
			var ib = (e = null, t) => {
				switch (t.type) {
					case Yp.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case Yp.d:
						return null;
					default:
						return e
				}
			};
			const ub = {};
			var lb = (e = ub, t) => {
				switch (t.type) {
					case Yp.o: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case Yp.e: {
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
			const pb = {};
			var bb = (e = pb, t) => {
				switch (t.type) {
					case Yp.h: {
						const {
							postId: r,
							time: s
						} = t.payload, a = e[r] || {
							cached: !0,
							start: s
						};
						return s < a.start ? e : {
							...e,
							[r]: {
								...a,
								playable: s
							}
						}
					}
					case Yp.f: {
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
			const fb = {};
			var yb = (e = fb, t) => {
				switch (t.type) {
					case Yp.j: {
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
			const mb = {};
			var hb = (e = mb, t) => {
				switch (t.type) {
					case Yp.p: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case Yp.g: {
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
			const Eb = {};
			var Ob = (e = Eb, t) => {
				switch (t.type) {
					case Yp.i: {
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
			const _b = {};
			var Ib = (e = _b, t) => {
					switch (t.type) {
						case Yp.m: {
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
				gb = r("./src/reddit/constants/video.ts");
			const Sb = {};
			var vb = (e = Sb, t) => {
					switch (t.type) {
						case Yp.n: {
							const {
								postId: r,
								time: s
							} = t.payload;
							return e[r] && Math.abs(Math.floor(s.currentTime) - Math.floor(e[r].currentTime)) < gb.l ? e : {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				wb = Object(v.c)({
					autoPlayed: eb,
					buffering: rb,
					consumed: ab,
					continuousViewStartedAt: cb,
					feed: db,
					fullscreen: ib,
					loadable: lb,
					loadTimes: bb,
					metadata: yb,
					paused: hb,
					playing: Ob,
					started: Ib,
					time: vb
				}),
				jb = Object(v.c)({
					chained: _l,
					embedAndImage: wl,
					expanded: Tl,
					focus: Dl,
					followed: Pl,
					instances: Cl,
					isAnimatingUpvote: Nl,
					isTrackingCrossposts: xl,
					metaMap: Ml,
					models: Ep,
					modToMemberShare: Op,
					crowdControl: Il,
					postLevelCrowdControl: gp,
					recent: vp,
					scheduledPosts: Wp,
					topAwarded: Xp,
					video: wb
				}),
				Tb = r("./src/lib/reducers/addAuthentication/index.ts");
			const Db = {};
			var Ab = Object(Tb.a)((e = Db, t) => {
					switch (t.type) {
						case F.b:
						case F.f: {
							const {
								postId: r,
								commentLists: s,
								comments: a
							} = t.payload, n = s[r] && s[r].head;
							return n && a[n.id] && a[n.id].isStickied ? {
								...e,
								[r]: n.id
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
				}, Db),
				Pb = Object(v.c)({
					data: Ab
				});
			const Rb = {};
			var Cb = (e = Rb, t) => {
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
			const Nb = {};
			var kb = (e = Nb, t) => {
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
				Lb = Object(v.c)({
					error: Cb,
					pending: kb
				});
			const xb = {};
			var Ub = (e = xb, t) => {
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
			const Mb = {};
			var Gb = (e = Mb, t) => {
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
				Fb = Object(v.c)({
					error: Ub,
					pending: Gb
				}),
				Bb = Object(v.c)({
					fetch: Lb,
					purchase: Fb
				});
			var qb = (e = null, t) => {
				switch (t.type) {
					case l.b:
						return t.payload.productId;
					case s.b:
						return null;
					default:
						return e
				}
			};
			const Vb = {};
			var Hb = (e = Vb, t) => {
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
				Wb = Object(v.c)({
					api: Bb,
					currentlyPurchasing: qb,
					models: Hb
				});
			const $b = {};
			var Kb = (e = $b, t) => {
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
			const Qb = {};
			var Jb = (e = Qb, t) => {
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
				zb = Object(v.c)({
					error: Kb,
					pending: Jb
				});
			const Xb = {};
			var Yb = (e = Xb, t) => {
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
							} = t.payload, a = e[r] || [];
							return {
								...e,
								[r]: a.concat(s)
							}
						}
						default:
							return e
					}
				},
				Zb = r("./src/reddit/actions/comment/list.ts");
			const ef = {};
			var tf = (e = ef, t) => {
				switch (t.type) {
					case Zb.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Zb.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? xs()(e, r) : e
					}
					default:
						return e
				}
			};
			const rf = {};
			var sf = (e = rf, t) => {
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
						} = t.payload, a = e[r];
						return {
							...e,
							[r]: {
								...a,
								[s]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const af = {};
			var nf = (e = af, t) => {
					switch (t.type) {
						case B.e:
						case B.b: {
							const {
								key: r,
								dist: s,
								token: a
							} = t.payload;
							return a ? {
								...e,
								[r]: {
									dist: s,
									token: a
								}
							} : Object(qt.a)(e, r)
						}
						default:
							return e
					}
				},
				cf = Object(v.c)({
					api: zb,
					endMarkers: tf,
					fetchedTokens: sf,
					commentIds: Yb,
					loadMore: nf
				}),
				of = r("./src/reddit/actions/pages/profileModSettings.ts");
			var df = (e = !0, t) => {
					switch (t.type) {
						case of.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				uf = Object(v.c)({
					pending: df
				}),
				lf = Object(v.c)({
					api: uf
				});
			const pf = {};
			var bf = (e = pf, t) => (t.type, e);
			const ff = {};
			var yf = (e = ff, t) => {
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
			const mf = {};
			var hf = (e = mf, t) => {
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
				Ef = Object(v.c)({
					error: yf,
					pending: hf
				});
			const Of = {};
			var _f = (e = Of, t) => {
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
			const If = {};
			var gf = (e = If, t) => {
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
							} : If
						}
						default:
							return e
					}
				},
				Sf = Object(v.c)({
					api: Ef,
					ids: _f,
					pageInfo: gf
				}),
				vf = r("./src/reddit/constants/posts.ts");
			const wf = {};
			var jf = (e = wf, t) => {
					switch (t.type) {
						case H.SEARCH_RESULTS_RECEIVED:
						case Ce.g:
							return {
								...e, ...t.payload.profileAboutInfo
							};
						case Xi.k: {
							const r = t.payload;
							return r.profile ? {
								...e,
								[r.profile.id]: r.about
							} : e
						}
						case eu.h: {
							const {
								identifiers: r,
								userIsSubscriber: s
							} = t.payload, a = r.filter(e => e.type === vf.a.PROFILE);
							return a.length ? a.reduce((e, t) => (e[t.id] = {
								...e[t.id],
								userIsSubscriber: s
							}, e), {
								...e
							}) : e
						}
						case Lr.m: {
							const r = t.payload,
								s = e[r.subredditId];
							if (!s) return e;
							if (s.publicDescription === r.settings.publicDescription) return e;
							const a = {
								...s,
								publicDescription: r.settings.publicDescription
							};
							return {
								...e,
								[r.subredditId]: a
							}
						}
						default:
							return e
					}
				},
				Tf = r("./src/reddit/models/Subreddit/index.ts");
			const Df = {};
			var Af = (e = Df, t) => {
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
					case Ae.b:
					case we.e:
					case we.h:
					case ve.u:
					case Xi.h:
					case td.b:
					case Ce.g:
					case K.i:
					case Xi.m:
					case $.b:
					case $.e:
					case H.SEARCH_RESULTS_RECEIVED:
					case Te.PAGE_LOADED:
					case $r.e:
					case Us.PAGE_LOADED:
					case W.SUBREDDIT_LOADED:
					case je.b:
					case "RECOMMENDED_POSTS_LOADED":
					case eu.c:
						return Object(N.merge)(e, t.payload.profiles);
					case Ce.i: {
						const {
							typeaheadSuggestions: r
						} = t.payload, s = Object.values(r).reduce((e, t) => Object(Tf.h)(t) ? {
							...e,
							[t.id]: t
						} : e, {});
						return Object.keys(s).length ? Object(N.merge)(e, s) : e
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
						return Object(N.merge)(e, s)
					}
					case Xi.l:
					case Xi.k: {
						const {
							profile: r
						} = t.payload;
						return r ? Object(N.merge)(e, {
							[r.id]: r
						}) : e
					}
					case Lr.m: {
						const r = t.payload,
							{
								title: s,
								over18: a
							} = r.settings,
							n = e[r.subredditId];
						return !n || n.title === s && n.isNSFW === a ? e : {
							...e,
							[r.subredditId]: {
								...n,
								id: r.subredditId,
								title: s,
								isNSFW: a
							}
						}
					}
					case Lr.k:
					case Lr.j: {
						const {
							imageUrl: r,
							key: s,
							subredditId: a
						} = t.payload;
						if ("profileIcon" !== s) return e;
						const n = e[a];
						return n ? {
							...e,
							[a]: {
								...n,
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
			const Pf = {};
			var Rf = (e = Pf, t) => {
					switch (t.type) {
						case Xi.c:
						case Xi.f: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[(r || "").toLowerCase()]: !0
							}
						}
						case Xi.a:
						case Xi.b:
						case Xi.d:
						case Xi.e: {
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
				Cf = Object(v.c)({
					pending: Rf
				});
			const Nf = {};
			var kf = (e = Nf, t) => {
				switch (t.type) {
					case Xi.b: {
						const {
							profileName: r,
							data: s
						} = t.payload, a = s.map(e => e.id);
						return {
							...e,
							[(r || "").toLowerCase()]: a
						}
					}
					case Xi.e:
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
			const Lf = {};
			var xf = (e = Lf, t) => {
					switch (t.type) {
						case Xi.e: {
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
				Uf = Object(v.c)({
					api: Cf,
					models: kf,
					pageInfo: xf
				});
			const Mf = {};
			var Gf = (e = Mf, t) => {
					switch (t.type) {
						case Xi.i: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case Xi.g:
						case Xi.h: {
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
				Ff = Object(v.c)({
					pending: Gf
				});
			const Bf = {};
			var qf = (e = Bf, t) => {
					switch (t.type) {
						case Xi.h: {
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
				Vf = Object(v.c)({
					api: Ff,
					pageInfo: qf
				}),
				Hf = r("./src/reddit/actions/pinnedPost.ts");
			const Wf = {};
			var $f = Object(Tb.a)((e = Wf, t) => {
				switch (t.type) {
					case Hf.a: {
						const {
							pinned: r,
							profileId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case Hf.d: {
						const {
							postId: r,
							profileId: s
						} = t.payload, a = e[s] || [];
						return {
							...e,
							[s]: [...a, r].slice(-Re.ab)
						}
					}
					case Hf.g: {
						const {
							postId: r,
							profileId: s
						} = t.payload, a = e[s] || [];
						return {
							...e,
							[s]: a.filter(e => e !== r)
						}
					}
					default:
						return e
				}
			}, Wf);
			const Kf = {};
			var Qf = Object(Tb.a)((e = Kf, t) => {
				switch (t.type) {
					case Hf.a: {
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
			}, Kf);
			const Jf = {};
			var zf = Object(Tb.a)((e = Jf, t) => {
					switch (t.type) {
						case Hf.c:
						case Hf.f: {
							const {
								postId: r,
								profileId: s
							} = t.payload, a = e[s] || [];
							return {
								...e,
								[s]: [...a, r]
							}
						}
						case Hf.b:
						case Hf.e:
						case Hf.d:
						case Hf.g: {
							const {
								postId: r,
								profileId: s
							} = t.payload, a = e[s] || [];
							return {
								...e,
								[s]: a.filter(e => e !== r)
							}
						}
						default:
							return e
					}
				}, Jf),
				Xf = Object(v.c)({
					data: $f,
					initialData: Qf,
					pending: zf
				}),
				Yf = r("./src/reddit/actions/trophyCase.ts");
			const Zf = {};
			var ey, ty, ry = (e = Zf, t) => {
					switch (t.type) {
						case Yf.a: {
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
				sy = Object(v.c)({
					about: jf,
					models: Af,
					moderated: Uf,
					multireddits: Vf,
					pinnedPosts: Xf,
					trophyCases: ry
				});
			r("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(ey || (ey = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(ty || (ty = {}));
			var ay, ny, cy;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(ay || (ay = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(ny || (ny = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(cy || (cy = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(ay || (ay = {}));
			Object(Pe.a)("PROMO__SHOW_PROMO"), Object(Pe.a)("PROMO__HIDE_PROMO");
			const oy = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var dy = (e = oy, t) => {
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
				iy = r("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const uy = {
				isError: !1,
				isPending: !1,
				global: {
					rpan_config_refresh_rate: iy.d,
					viewer_streams_refresh: iy.c,
					viewer_streams_refresh_slop: iy.e
				},
				subreddits: {},
				isPermanentlyCanceled: !1
			};
			var ly = (e = uy, t) => {
				switch (t.type) {
					case iy.w:
						return {
							...e, isError: !1, isPending: !1, global: {
								...t.payload
							}
						};
					case iy.x: {
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
					case iy.G:
						return {
							...e, isPending: !0
						};
					case iy.I:
						return {
							...e, isError: !0, isPending: !1
						};
					case iy.H:
						return {
							...e, isPermanentlyCanceled: !0, isPending: !1
						};
					default:
						return e
				}
			};
			var py = (e = {}, t) => {
				switch (t.type) {
					case iy.L:
						return {
							...e, [iy.b]: t.payload.error
						};
					case iy.M:
						return {
							...e, [t.payload.streamId]: t.payload.error
						};
					case iy.z: {
						const {
							[iy.b]: t, ...r
						} = e;
						return r
					}
					case iy.y: {
						const {
							[t.payload.model.post.id]: r, ...s
						} = e;
						return s
					}
					default:
						return e
				}
			};
			const by = (e, t, r, s) => ({
				...e,
				[t]: {
					...e[t],
					isPending: r,
					...s && {
						utcTimeStamp: s
					}
				}
			});
			var fy = (e = {}, t) => {
				switch (t.type) {
					case iy.N:
						return by(e, t.payload, !0);
					case iy.O:
						return by(e, iy.b, !0);
					case iy.y:
						return by(e, t.payload.model.post.id, !1, t.payload.utcTimeStamp);
					case iy.z:
						return by(e, iy.b, !1, t.payload.utcTimeStamp);
					case iy.M:
						return by(e, t.payload.streamId, !1);
					case iy.L:
						return by(e, iy.b, !1);
					default:
						return e
				}
			};
			const yy = {
				isError: !1,
				isPending: !1,
				subreddits: []
			};
			var my = (e = yy, t) => {
					switch (t.type) {
						case iy.v:
							return {
								...e, isError: !1, isPending: !1, subreddits: t.payload.subreddits
							};
						case iy.J:
							return {
								...e, isError: !1, isPending: !0
							};
						case iy.K:
							return {
								...e, isError: !0, isPending: !1
							};
						default:
							return e
					}
				},
				hy = Object(v.c)({
					config: ly,
					error: py,
					pending: fy,
					recommendedViewerSubreddits: my
				});
			const Ey = {};
			var Oy = (e = Ey, t) => {
				switch (t.type) {
					case iy.r:
						return {
							...e, [t.payload.streamId]: {
								level: t.payload.level,
								error: !1
							}
						};
					case iy.F:
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
			const _y = {
				cursor: iy.W,
				timestamps: {},
				visitOrder: []
			};
			var Iy = (e = _y, t) => {
				switch (t.type) {
					case iy.P:
						return _y;
					case iy.X: {
						const r = t.payload,
							s = e.visitOrder.includes(r) ? e.visitOrder : [...e.visitOrder, r],
							a = s.indexOf(r);
						return s === e.visitOrder && a === e.cursor ? e : {
							...e,
							visitOrder: s,
							cursor: a
						}
					}
					case p.d:
						return gy(e, t.payload.id);
					case iy.E:
						return gy(e, t.payload);
					case Od.k: {
						const r = Object.keys(t.payload).filter(e => t.payload[e].hidden);
						return Sy(e, r)
					}
					case iy.V: {
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
			const gy = (e, t) => {
					const r = e.visitOrder.indexOf(t);
					if (-1 === r) return e;
					const s = r > e.cursor ? e.cursor : Math.max(e.cursor - 1, 0);
					return {
						...e,
						visitOrder: e.visitOrder.filter(e => e !== t),
						cursor: s
					}
				},
				Sy = (e, t) => {
					const r = e.visitOrder[e.cursor],
						s = new Set(t),
						a = e.visitOrder.filter(e => !s.has(e)),
						n = a.indexOf(r),
						c = n > -1 ? n : Math.max(e.cursor - 1, 0);
					return a.length !== e.visitOrder.length ? {
						...e,
						cursor: c,
						visitOrder: a
					} : e
				},
				vy = {
					ended: [],
					removed: []
				};

			function wy(e) {
				return [...new Set(e)]
			}
			var jy = (e = vy, t) => {
				switch (t.type) {
					case iy.t:
						return {
							...e, ended: wy(e.ended.concat(t.payload))
						};
					case iy.u:
						return {
							...e, removed: wy(e.removed.concat(t.payload))
						};
					default:
						return e
				}
			};
			const Ty = {};
			var Dy = (e = Ty, t) => {
				switch (t.type) {
					case iy.z:
						const {
							listingName: r, models: s
						} = t.payload;
						if (!r) return e;
						const a = s.map(e => e.post.id),
							n = e[r] || [],
							c = [...new Set([...a, ...n])];
						return {
							...e, [r]: c
						};
					default:
						return e
				}
			};
			const Ay = {},
				Py = (e, t) => {
					const r = Object.keys(e).reduce((t, r) => ({
						...t,
						[r]: {
							...e[r],
							rank: iy.m
						}
					}), {});
					return t.reduce((e, t, r) => ({
						...e,
						[t.post.id]: {
							...t,
							rank: iy.l - r
						}
					}), r)
				},
				Ry = (e, t) => {
					const r = t.post.id,
						s = e[r] ? e[r].rank : iy.m;
					return {
						...e,
						[t.post.id]: {
							...t,
							rank: s
						}
					}
				};
			var Cy = (e = Ay, t) => {
				switch (t.type) {
					case iy.y:
						return Ry(e, t.payload.model);
					case iy.z:
						return Py(e, t.payload.models);
					case iy.D: {
						const r = t.payload.streamId,
							s = t.payload.isUnsetting ? -1 : 1,
							a = (t.payload.isUp ? 1 : 0) * s,
							n = (t.payload.isUp ? 0 : 1) * s;
						return {
							...e,
							[r]: {
								...e[r],
								downvotes: e[r].downvotes + n,
								upvotes: e[r].upvotes + a
							}
						}
					}
					default:
						return e
				}
			};
			const Ny = {
				discoveryUnitThumbnails: {},
				streamPreviews: {}
			};
			var ky = (e = Ny, t) => {
				switch (t.type) {
					case iy.s:
						return {
							...e, discoveryUnitThumbnails: {
								...t.payload.reduce((e, t) => ({
									...e,
									[t.postId]: t.imageUrl
								}), {})
							}
						};
					case iy.A:
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
			const Ly = {
				reported: []
			};
			var xy = (e = Ly, t) => {
				switch (t.type) {
					case p.d:
						return {
							...e, reported: [...e.reported, t.payload.id]
						};
					default:
						return e
				}
			};
			const Uy = {
				isIntroFinished: !1
			};
			var My = (e = Uy, t) => {
				switch (t.type) {
					case iy.B:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const Gy = {
				reportedStreams: []
			};
			var Fy = (e = Gy, t) => {
					switch (t.type) {
						case iy.C:
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
				By = Object(v.c)({
					api: hy,
					history: Iy,
					hlsStreams: jy,
					listings: Dy,
					models: Cy,
					preloads: ky,
					reports: xy,
					theaterSettings: My,
					userSettings: Fy,
					automuteLevels: Oy
				}),
				qy = r("./src/reddit/actions/recentSubreddits/constants.ts"),
				Vy = r("./src/reddit/actions/session.ts");
			const Hy = [];
			var Wy = (e = Hy, t) => {
				switch (t.type) {
					case Vy.c:
					case Vy.d:
						return Hy;
					case qy.d:
						return ((e, t) => Ki()(e, t) ? e : t)(e, t.subreddits);
					case qy.f: {
						const {
							payload: r
						} = t, s = [r, ...e];
						return Array.from(new Set(s)).slice(0, qy.c)
					}
					case qy.a: {
						const {
							payload: e
						} = t;
						return e.slice(0, qy.c)
					}
					default:
						return e
				}
			};
			const $y = {};
			var Ky = (e = $y, t) => {
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
				Qy = r("./src/reddit/actions/pages/report/constants.ts");
			var Jy = (e = null, t) => {
				switch (t.type) {
					case Qy.a:
						return t.payload;
					default:
						return e
				}
			};
			var zy = (e = null, t) => {
				switch (t.type) {
					case Qy.b:
						return t.payload;
					case Qy.c:
					case Qy.d:
						return !1;
					default:
						return e
				}
			};
			var Xy = (e = !1, t) => {
				switch (t.type) {
					case Qy.d:
						return !0;
					case Qy.c:
					case Qy.b:
						return !1;
					default:
						return e
				}
			};
			var Yy = (e = !1, t) => {
					switch (t.type) {
						case Qy.c:
							return !0;
						case Qy.b:
						case Qy.d:
							return !1;
						default:
							return e
					}
				},
				Zy = Object(v.c)({
					error: zy,
					pending: Xy,
					success: Yy
				}),
				em = r("./src/reddit/actions/reportPageRules/constants.ts");
			const tm = [];
			var rm = (e = tm, t) => {
					switch (t.type) {
						case em.a:
							return t.payload;
						default:
							return e
					}
				},
				sm = Object(v.c)({
					reportPageApi: Zy,
					reportPageRules: rm,
					initialReason: Jy
				}),
				am = r("./src/reddit/actions/reportRules.ts");
			const nm = {
				liveStreamingRules: [],
				sitewideRules: []
			};
			var cm = (e = nm, t) => {
				switch (t.type) {
					case am.b:
						return {
							...e, sitewideRules: t.payload
						};
					case am.a:
						return {
							...e, liveStreamingRules: t.payload
						};
					default:
						return e
				}
			};
			Object(Pe.a)("REQUEST_HOST_SET");
			var om = (e = "", t) => {
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			Object(Pe.a)("RUN_TIME_ENV_VARS__IS_STAGING");
			const dm = {
				staging: !1,
				startTimeInMillis: (new Date).getTime()
			};
			var im = (e = dm, t) => {
					switch (t.type) {
						case "RUN_TIME_ENV_VARS__IS_STAGING":
							return {
								...e, staging: !0
							};
						default:
							return e
					}
				},
				um = r("./src/reddit/components/SearchDropdown/index.tsx");
			var lm = (e = !1, t) => {
				switch (t.type) {
					case Ce.c:
						return !e;
					case fo.b: {
						const {
							event: r
						} = t.payload, s = r.target, a = document.getElementById(um.b), n = document.getElementById(um.a);
						return !(!s || !((null == a ? void 0 : a.contains(s)) || (null == n ? void 0 : n.contains(s)))) && e
					}
					case Ce.b:
					case fo.a:
					case fo.c:
						return !1;
					default:
						return e
				}
			};
			const pm = Object.create(null);
			var bm = (e = pm, t) => {
				switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
					case Ce.h: {
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
			var fm = (e = null, t) => {
				switch (t.type) {
					case H.SEARCH_RESULTS_RECEIVED:
					case Ce.j: {
						const {
							searchQuery: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			const ym = Object.create(null);
			var mm = (e = ym, t) => {
					switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
						case Ce.i: {
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
				hm = r("./src/reddit/models/Search/index.ts");
			const Em = {};
			var Om = (e = Em, t) => {
					switch (t.type) {
						case Ce.i: {
							const {
								typeaheadSuggestions: r
							} = t.payload, s = {};
							return Object.keys(r).forEach(e => {
								const t = r[e];
								return s[e] = Object(hm.d)(t)
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				_m = Object(v.c)({
					idsByQuery: mm,
					models: Om
				});
			const Im = {};
			var gm = (e = Im, t) => {
					switch (t.type) {
						case H.SEARCH_RESULTS_RECEIVED: {
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
				Sm = Object(v.c)({
					isDropdownOpen: lm,
					isSubredditSearchEnabled: (e = !0, t) => {
						switch (t.type) {
							case Ce.a:
								return !1;
							case Ce.d:
								return !0;
							default:
								return e
						}
					},
					relatedQueries: bm,
					searchQuery: fm,
					typeahead: _m,
					viewTreatment: gm
				}),
				vm = r("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const wm = {};
			var jm = (e = wm, t) => {
				switch (t.type) {
					case H.SEARCH_RESULTS_RECEIVED: {
						const {
							categoryName: r,
							key: s,
							listingOrder: a,
							postOrder: n,
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
						if (i === vm.c.Trending || r) {
							const e = [];
							if (a && a.map(t => {
									!e.includes(t.id) && d[t.id] && (e.push(t.id), u.subredditIcons.push({
										url: d[t.id].icon.url,
										subredditName: d[t.id].name
									}), u.displayText || (u.displayText = d[t.id].displayText))
								}), n)
								for (let t = 0; t < n.length; t++) {
									const r = c[n[t]],
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
			const Tm = {};
			var Dm = (e = Tm, t) => {
				switch (t.type) {
					case H.SEARCH_RESULTS_RECEIVED: {
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
			const Am = {};
			var Pm = (e = Am, t) => {
					switch (t.type) {
						case H.SEARCH_RESULTS_RECEIVED: {
							const {
								key: r,
								searchDiscoveryUnitOrder: s
							} = t.payload;
							return s ? {
								...e,
								[r]: s
							} : Am
						}
						default:
							return e
					}
				},
				Rm = Object(v.c)({
					headerContent: jm,
					models: Dm,
					order: Pm
				});
			Object(Pe.a)("SEO__CRAWLER_RECEIVED");
			var Cm = (e = null, t) => {
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				Nm = r("./src/reddit/actions/seo/linksModule.ts");
			const km = {};
			var Lm = (e = km, t) => {
					switch (t.type) {
						case Nm.b:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? {
								...e,
								frontpage: t.payload
							} : e;
						case Nm.c:
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
				xm = r("./src/reddit/actions/seo/topicLinks.ts");
			const Um = {};
			var Mm = (e = Um, t) => {
					switch (t.type) {
						case xm.a:
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
				Gm = Object(v.c)({
					crawler: Cm,
					linksModule: Lm,
					topicLinks: Mm
				}),
				Fm = r("./src/reddit/actions/shortcuts/constants.ts");
			var Bm = (e = null, t) => {
				switch (t.type) {
					case Fm.a:
						return t.payload;
					case u.a:
						return null;
					default:
						return e
				}
			};
			var qm = (e = null, t) => {
					switch (t.type) {
						case Fm.b:
							return t.payload || null;
						default:
							return e
					}
				},
				Vm = r("./src/reddit/constants/history.ts"),
				Hm = r("./src/reddit/constants/shortcuts.ts"),
				Wm = r("./src/reddit/helpers/history/index.ts");
			const $m = Hm.d.Global,
				Km = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(Wm.b)(Vm.a.IsOverlay) ? Hm.d.Lightbox : Hm.d.CommentPage;
						case "rpan":
							return Object(Wm.b)(Vm.a.IsOverlay) ? Hm.d.Lightbox : $m;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return Hm.d.Listing;
						case "modQueuePages":
							return Hm.d.Modqueue;
						default:
							return $m
					}
				};
			var Qm = (e = $m, t) => {
					switch (t.type) {
						case u.a:
							const r = t.payload;
							if (r.routeMatch) {
								const e = r.routeMatch.route.meta;
								return Km(e)
							}
							return $m;
						default:
							return e
					}
				},
				Jm = Object(v.c)({
					activeCommentId: Bm,
					activePostId: qm,
					namespace: Qm
				});
			var zm = (e = !1, t) => {
					if (e) return e;
					switch (t.type) {
						case m.q:
						case m.r:
							return !0;
						default:
							return e
					}
				},
				Xm = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Ym = Object(v.c)({
					firstFetch: zm,
					models: Xm.b
				}),
				Zm = r("./src/reddit/actions/streaming/modSettings.ts");
			var eh = (e = null, t) => {
				switch (t.type) {
					case Zm.b:
					case Zm.c:
						return null;
					case Zm.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var th = (e = !1, t) => {
					switch (t.type) {
						case Zm.b:
							return !0;
						case Zm.c:
						case Zm.a:
							return !1;
						default:
							return e
					}
				},
				rh = Object(v.c)({
					error: eh,
					pending: th
				}),
				sh = r("./src/reddit/actions/streaming/constants.ts");
			const ah = {};
			var nh = (e = ah, t) => {
					switch (t.type) {
						case sh.a: {
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
				ch = Object(v.c)({
					api: rh,
					modSettings: nh
				}),
				oh = r("./src/reddit/models/StructuredStyles/index.ts");
			const dh = {};
			var ih = (e = dh, t) => {
					switch (t.type) {
						case b.h:
						case b.b:
						case b.d:
							return t.payload.styles;
						case b.e:
							return dh;
						case b.c: {
							const r = t.payload;
							return {
								...e,
								...r
							}
						}
						case b.k: {
							const e = t.payload;
							return Object(oh.h)(e.styles)
						}
						default:
							return e
					}
				},
				uh = r("./src/reddit/actions/exportImportStyles.ts");
			var lh = (e = null, t) => {
				switch (t.type) {
					case uh.c:
					case uh.b:
						return null;
					case uh.a:
						return t.payload;
					default:
						return e
				}
			};
			var ph = (e = !1, t) => {
					switch (t.type) {
						case uh.c:
							return !0;
						case uh.b:
						case uh.a:
							return !1;
						default:
							return e
					}
				},
				bh = Object(v.c)({
					error: lh,
					pending: ph
				}),
				fh = r("./src/reddit/actions/postFlairStyleTemplate.ts"),
				yh = r("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const mh = {};
			var hh = (e = mh, t) => {
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case F.b:
						case F.f:
						case H.SEARCH_RESULTS_RECEIVED:
						case Ce.g:
						case Te.PAGE_LOADED:
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
						case fh.b: {
							const {
								flairId: r,
								template: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case fh.a: {
							const {
								flairId: r
							} = t.payload;
							return Object(qt.a)(e, r)
						}
						case dl.b: {
							const {
								templateId: r
							} = t.payload;
							return Object(qt.a)(e, r)
						}
						case b.k:
							return mh;
						case yh.b: {
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
				Eh = Object(v.c)({
					models: hh
				});
			const Oh = {};
			var _h = (e = Oh, t) => {
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
						return Oh;
					default:
						return e
				}
			};
			var Ih = (e = !1, t) => {
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
			var gh = (e = null, t) => {
				switch (t.type) {
					case b.d:
						return t.payload.subredditId;
					case b.e:
						return null;
					case u.a:
						return t.payload.location.search.indexOf("styling=true") > -1 ? e : null;
					case Lr.f:
						return null;
					default:
						return e
				}
			};
			const Sh = {};
			var vh = (e = Sh, t) => {
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case F.b:
						case F.f:
						case Te.PAGE_LOADED:
						case Us.PAGE_LOADED: {
							const {
								payload: r
							} = t;
							if (!r.structuredStyles || !r.structuredStyles.data) return e;
							const s = Object.keys(r.subredditAboutInfo || {});
							if (1 !== s.length) return e;
							const a = s[0],
								n = r.structuredStyles.data.style;
							return {
								...e,
								[a]: n
							}
						}
						case Ce.g:
						case H.SEARCH_RESULTS_RECEIVED: {
							const {
								payload: r
							} = t;
							if (!r.structuredStyles || !r.structuredStyles.data) return e;
							if (!r.subredditName) return e;
							let s;
							if (on()(r.subreddits, (e, t) => {
									if (e.name.toLowerCase() === r.subredditName.toLowerCase()) return s = t, !1
								}), !s) return e;
							const a = r.structuredStyles.data.style;
							return {
								...e,
								[s]: a
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
								s = Object(oh.h)(r.styles);
							return {
								...e,
								[r.subredditId]: s
							}
						}
						case Xi.k: {
							const r = t.payload,
								{
									banner: s,
									profile: a
								} = r;
							if (!s || !a) return e;
							const n = e[a.id];
							return {
								...e,
								[a.id]: {
									...n,
									bannerBackgroundImage: s.url
								}
							}
						}
						case Lr.k: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Ql(e, {
									[r.subredditId]: {
										bannerBackgroundImage: r.imageUrl
									}
								})
							}
							return e
						}
						case Lr.j: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Ql(e, {
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
				wh = Object(v.c)({
					draft: ih,
					exportStyles: bh,
					flairTemplate: Eh,
					imagePreviews: _h,
					isBladeEditorDirty: Ih,
					isEditing: gh,
					models: vh
				});
			Object(Pe.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var jh = (e = "", t) => {
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				Th = r("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const Dh = {};
			var Ah = (e = Dh, t) => {
				switch (t.type) {
					case Th.c:
					case Th.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Th.a: {
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
			const Ph = {};
			var Rh = (e = Ph, t) => {
					switch (t.type) {
						case Th.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Th.b:
						case Th.a: {
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
				Ch = Object(v.c)({
					error: Ah,
					pending: Rh
				});
			const Nh = {};
			var kh = (e = Nh, t) => {
					switch (t.type) {
						case Th.b: {
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
				Lh = Object(v.c)({
					api: Ch,
					models: kh
				}),
				xh = r("./src/reddit/actions/category/constants.ts"),
				Uh = r("./src/reddit/actions/subredditMention/constants.ts");
			const Mh = {};
			var Gh = (e = Mh, t) => {
				switch (t.type) {
					case Uh.d:
					case F.b:
					case F.f:
					case H.SEARCH_RESULTS_RECEIVED:
					case W.SUBREDDIT_FAILED:
					case W.SUBREDDIT_LOADED:
					case Te.PAGE_LOADED:
					case Us.PAGE_LOADED:
					case B.b:
					case B.e:
					case De.b:
					case De.a:
					case De.e:
					case De.d:
					case q.PROFILE_POSTS_LOADED:
					case $.b:
					case $.e:
					case Ce.g:
					case rd.TOPIC_DATA_LOADED:
					case od.u: {
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
					case Mn.a: {
						const {
							subredditId: r,
							emojisEnabled: s
						} = t.payload, a = {
							...e[r],
							emojisEnabled: s
						};
						return {
							...e,
							[r]: a
						}
					}
					case eu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, a = r.filter(e => e.type === vf.a.SUBREDDIT);
						return a.length ? a.reduce((e, t) => Object(N.setIn)(e, [t.id, "userIsSubscriber"], s), e) : e
					}
					case Nc.g:
					case xh.f:
					case od.g:
					case od.o: {
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
					case Mn.b: {
						const r = t.payload,
							{
								emojiCustomSize: s,
								subredditId: a
							} = r,
							n = e[a];
						if (!n) return e;
						const c = {
							...n
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
							[a]: c
						}
					}
					case K.c: {
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
						const a = e[r];
						if (!a) return e;
						const n = {
							...a,
							coins: s
						};
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			const Fh = {};
			var Bh = (e = Fh, t) => {
				switch (t.type) {
					case K.b:
					case K.c: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case K.a: {
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
			var qh = (e = !1, t) => {
					switch (t.type) {
						case K.b:
							return !0;
						case K.c:
						case K.a:
							return !1;
						default:
							return e
					}
				},
				Vh = Object(v.c)({
					error: Bh,
					pending: qh
				}),
				Hh = r("./src/reddit/actions/subredditCreation.ts");
			const Wh = {
				apiError: null
			};
			var $h = (e = Wh, t) => {
				switch (t.type) {
					case Hh.b: {
						const {
							error: r
						} = t.payload;
						return {
							...e,
							apiError: r
						}
					}
					case Hh.a:
					case Hh.c:
					case Hh.e:
						return Wh;
					default:
						return e
				}
			};
			var Kh = (e = null, t) => {
				switch (t.type) {
					case Hh.d: {
						const {
							crosspostId: e
						} = t.payload;
						return e || null
					}
					case Hh.a:
					case Hh.c:
					case Hh.e:
						return null;
					default:
						return e
				}
			};
			var Qh = (e = null, t) => {
				switch (t.type) {
					case Hh.e: {
						const {
							subredditName: e
						} = t.payload;
						return e || null
					}
					case Hh.c:
					case Hh.b:
						return null;
					default:
						return e
				}
			};
			var Jh = (e = !1, t) => {
					switch (t.type) {
						case Hh.c:
							return !0;
						case Hh.e:
						case Hh.b:
							return !1;
						default:
							return e
					}
				},
				zh = Object(v.c)({
					error: $h,
					lastCreatedSubredditId: Qh,
					initialCrosspost: Kh,
					pending: Jh
				});
			var Xh = (e = !1, t) => {
					switch (t.type) {
						case od.w:
							return !0;
						case od.x:
						case od.v:
							return !1;
						default:
							return e
					}
				},
				Yh = Object(v.c)({
					pending: Xh
				});
			const Zh = {};
			var eE = (e = Zh, t) => {
				switch (t.type) {
					case K.l:
					case K.m: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case K.k: {
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
			const tE = {};
			var rE = (e = tE, t) => {
					switch (t.type) {
						case K.l: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case K.m:
						case K.k: {
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
				sE = Object(v.c)({
					error: eE,
					pending: rE
				});
			const aE = {};
			var nE = (e = aE, t) => {
					switch (t.type) {
						case od.f:
						case od.g:
							return {
								...e, [t.payload.key]: !1
							};
						case od.h:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				cE = Object(v.c)({
					pending: nE
				});
			var oE = (e = null, t) => {
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
			var dE = (e = !1, t) => {
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
				iE = Object(v.c)({
					error: oE,
					pending: dE
				});
			var uE = (e = null, t) => {
				switch (t.type) {
					case od.k: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case od.m:
					case od.l:
						return null;
					default:
						return e
				}
			};
			var lE = (e = !1, t) => {
					switch (t.type) {
						case od.m:
							return !0;
						case od.l:
						case od.k:
							return !1;
						default:
							return e
					}
				},
				pE = Object(v.c)({
					error: uE,
					pending: lE
				}),
				bE = r("./src/reddit/actions/subredditRules/constants.ts");
			var fE = (e = !1, t) => {
					switch (t.type) {
						case bE.c:
							return !0;
						case bE.a:
						case bE.b:
							return !1;
						default:
							return e
					}
				},
				yE = r("./src/reddit/actions/subredditSettings.ts");
			var mE = (e = !1, t) => {
					switch (t.type) {
						case yE.e:
							return !0;
						case yE.f:
						case yE.d:
							return !1;
						default:
							return e
					}
				},
				hE = Object(v.c)({
					pending: mE
				});
			const EE = {};
			var OE = (e = EE, t) => {
					switch (t.type) {
						case od.n:
						case od.o:
							return {
								...e, [t.payload.key]: !1
							};
						case od.p:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				_E = Object(v.c)({
					pending: OE
				}),
				IE = r("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const gE = {};
			var SE = (e = gE, t) => {
				switch (t.type) {
					case IE.c:
					case IE.b: {
						const r = t.payload,
							{
								subredditName: s
							} = r.options;
						return {
							...e,
							[s.toLowerCase()]: null
						}
					}
					case IE.a: {
						const r = t.payload,
							{
								options: s,
								error: a
							} = r,
							{
								subredditName: n
							} = s;
						return {
							...e,
							[n.toLowerCase()]: a
						}
					}
					default:
						return e
				}
			};
			const vE = {};
			var wE = (e = vE, t) => {
					switch (t.type) {
						case IE.c: {
							const r = t.payload,
								{
									subredditName: s
								} = r.options;
							return {
								...e,
								[s.toLowerCase()]: !0
							}
						}
						case IE.b:
						case IE.a: {
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
				jE = Object(v.c)({
					error: SE,
					pending: wE
				});
			const TE = {};
			var DE = (e = TE, t) => {
				switch (t.type) {
					case Hl.c:
					case Hl.b: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case Hl.a: {
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
			const AE = {};
			var PE = (e = AE, t) => {
					switch (t.type) {
						case Hl.c: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case Hl.b:
						case Hl.a: {
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
				RE = Object(v.c)({
					error: DE,
					pending: PE
				}),
				CE = Object(v.c)({
					about: Vh,
					create: zh,
					inlineEditing: Yh,
					models: sE,
					onboarding: cE,
					productOffers: iE,
					rankings: pE,
					rules: fE,
					settings: hE,
					similar: _E,
					topContent: RE,
					wiki: jE
				}),
				NE = r("./node_modules/lodash/isNil.js"),
				kE = r.n(NE);
			const LE = {};
			var xE = (e = LE, t) => {
					switch (t.type) {
						case K.d: {
							const {
								subredditId: r,
								forceState: s
							} = t.payload;
							return {
								...e,
								[r]: kE()(s) ? !e[r] : s
							}
						}
						default:
							return e
					}
				},
				UE = Object(v.c)({
					meta: xE
				});
			const ME = {};
			var GE = (e = ME, t) => {
				switch (t.type) {
					case xh.f: {
						const {
							categoryId: r,
							subredditIds: s
						} = t.payload;
						return sn()(s) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const FE = {};
			var BE = (e = FE, t) => {
					switch (t.type) {
						case ve.c: {
							const {
								communityInfo: r,
								id: s,
								type: a
							} = t.payload;
							return r && "subreddit" === a ? {
								...e,
								[s]: r
							} : e
						}
						default:
							return e
					}
				},
				qE = r("./src/reddit/actions/subredditCrosspostable.ts");
			var VE = (e = null, t) => {
				switch (t.type) {
					case qE.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case qE.c:
					case qE.b:
						return null;
					default:
						return e
				}
			};
			var HE = (e = !1, t) => {
					switch (t.type) {
						case qE.c:
							return !0;
						case qE.b:
						case qE.a:
							return !1;
						default:
							return e
					}
				},
				WE = Object(v.c)({
					errors: VE,
					pending: HE
				});
			const $E = {};
			var KE = (e = $E, t) => {
					switch (t.type) {
						case qE.b: {
							const {
								subredditIds: r
							} = t.payload;
							return Ki()(e, r) ? e : r
						}
						default:
							return e
					}
				},
				QE = Object(v.c)({
					api: WE,
					ids: KE
				});
			const JE = {};
			var zE = (e = JE, t) => {
					switch (t.type) {
						case ep.a: {
							const r = t.payload,
								{
									subredditId: s,
									distinguishKey: a,
									postIds: n
								} = r;
							if (!(s in e)) return {
								...e,
								[s]: {
									[a]: n
								}
							};
							const c = e[s];
							return Ql(c, {
								[a]: n
							}) === c ? e : {
								...e,
								[s]: {
									...c,
									[a]: n
								}
							}
						}
						default:
							return e
					}
				},
				XE = Object(v.c)({
					models: zE
				});
			const YE = {};
			var ZE = (e = YE, t) => {
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
						} = t.payload, a = e[r] || {};
						return {
							...e,
							[r]: {
								...a,
								mainHeader: s
							}
						}
					}
					default:
						return e
				}
			};
			const eO = {};
			var tO = (e = eO, t) => {
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
			const rO = {};
			var sO = (e = rO, t) => {
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
			const aO = {};
			var nO = (e = aO, t) => {
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
				cO = Object(v.c)({
					assets: ZE,
					communityRaw: tO,
					distributions: sO,
					releaseNotes: nO
				}),
				oO = r("./node_modules/lodash/isEqualWith.js"),
				dO = r.n(oO),
				iO = r("./src/lib/forceHttps/index.ts");
			const uO = {},
				lO = (e, t) => {
					return !dO()(e, t, (e, t, r) => {
						if ("subscribers" === r) return !0
					})
				},
				pO = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					for (let a = 0; a < r.length; a++) {
						const n = r[a],
							c = e[n],
							o = t[n];
						c && !lO(c, o) || (s[n] = o)
					}
					return Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var bO = (e = uO, t) => {
				switch (t.type) {
					case eu.c:
						return ((e, t) => {
							const r = Object.keys(t);
							return r.length ? r.reduce((r, s) => {
								const a = e[s],
									n = t[s],
									c = a ? {
										...a,
										...n
									} : {
										...n
									};
								return n.icon.url ? c.icon.url = Object(iO.a)(n.icon.url) : a && a.icon.url ? c.icon = a.icon : c.icon.url = "", a && a.allowChatPostCreation && (c.allowChatPostCreation = !0), Object(N.set)(r, s, c)
							}, e) : e
						})(e, t.payload.subreddits || {});
					case qy.b:
					case Uh.d:
					case xh.f:
					case ge.f:
					case Nc.g:
					case nd.c:
					case cd.b:
					case we.e:
					case we.h:
					case G.k:
					case ve.r:
					case ve.u:
					case Xi.h:
					case td.b:
					case F.b:
					case F.f:
					case ge.b:
					case je.b:
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
					case Xi.e:
					case H.SEARCH_RESULTS_RECEIVED:
					case W.SUBREDDIT_LOADED:
					case Te.PAGE_LOADED:
					case $r.e:
					case Us.PAGE_LOADED:
					case Xi.m:
					case $.b:
					case $.e:
					case Ae.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Ce.g:
					case K.c:
					case K.f:
					case K.i:
					case od.a:
					case od.g:
					case od.o:
					case rd.TOPIC_DATA_LOADED:
					case rd.MORE_POSTS_LOADED:
						return pO(e, t.payload.subreddits || {});
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
						return pO(e, s)
					}
					case Ce.i: {
						const {
							typeaheadSuggestions: r
						} = t.payload;
						return pO(e, r.subreddits || {})
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
						return pO(e, r)
					}
					case b.m: {
						const r = t.payload,
							{
								subredditId: s,
								styles: a
							} = r;
						return "communityIcon" in a && e[s] && "string" == typeof a.communityIcon ? {
							...e,
							[s]: {
								...e[s],
								communityIcon: a.communityIcon
							}
						} : e
					}
					case yE.f: {
						const {
							settings: r
						} = t.payload, {
							subredditId: s,
							title: a
						} = r;
						return e[s] && void 0 !== a ? {
							...e,
							[s]: {
								...e[s],
								title: a
							}
						} : e
					}
					case Th.b: {
						const r = t.payload,
							{
								subreddits: s
							} = r,
							a = {};
						for (const e of s) a[e.id] = {
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
						return Object(N.merge)(e, a)
					}
					default:
						return e
				}
			};
			var fO = (e = null, t) => {
				switch (t.type) {
					case K.e: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case K.g:
					case K.f:
						return null;
					default:
						return e
				}
			};
			var yO = (e = !1, t) => {
				switch (t.type) {
					case K.g:
					case K.f:
						return !0;
					case K.e:
						return !1;
					default:
						return e
				}
			};
			var mO = (e = !1, t) => {
					switch (t.type) {
						case K.g:
							return !0;
						case K.f:
						case K.e:
							return !1;
						default:
							return e
					}
				},
				hO = Object(v.c)({
					errors: fO,
					fetched: yO,
					pending: mO
				});
			var EO = (e = null, t) => {
					switch (t.type) {
						case K.f: {
							const {
								subreddits: e
							} = t.payload, r = Object.keys(e);
							return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
						}
						default:
							return e
					}
				},
				OO = Object(v.c)({
					api: hO,
					order: EO
				});
			const _O = {};
			var IO = (e = _O, t) => {
				switch (t.type) {
					case yE.a: {
						const r = t.payload;
						return Object(N.merge)(e, r)
					}
					case yE.b: {
						const {
							subredditId: r,
							notificationSettings: s
						} = t.payload;
						return Object(N.merge)(e, {
							[r]: s
						})
					}
					default:
						return e
				}
			};
			const gO = {};
			var SO = (e = gO, t) => {
				switch (t.type) {
					case od.g: {
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
			const vO = {};
			var wO = (e = vO, t) => {
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
							user: a
						} = t.payload;
						if (s > 0) {
							const t = {
								score: s,
								lastSupportedAt: (new Date).toString(),
								supporterInfo: {
									id: a.id,
									displayName: Object(J.e)(a),
									icon: {
										url: a.accountIcon
									},
									profile: {
										isNsfw: a.isNSFW
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
			const jO = {};
			var TO = (e = jO, t) => {
				var r;
				switch (t.type) {
					case ee.qb:
					case ee.pb: {
						const {
							powerups: r,
							subredditId: s
						} = t.payload;
						let a = null;
						if (r) {
							const {
								mediaPacks: e,
								...t
							} = r;
							a = t
						}
						return {
							...e,
							[s]: a
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
							powerupsCount: a
						} = t.payload;
						if (e[s] && a > 0) {
							const t = e[s],
								n = t.tier + 1,
								c = t.tiersInfo[n - 1],
								o = c && c.benefits;
							return {
								...e,
								[s]: {
									...e[s],
									benefits: o || (null === (r = e[s]) || void 0 === r ? void 0 : r.benefits),
									count: t.count + a,
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
			const DO = {},
				AO = (e, t, r) => {
					const s = null == e ? void 0 : e[t],
						a = null == s ? void 0 : s.emotes;
					if (!a) return e;
					const n = vn(r, t),
						c = [...a, n];
					return {
						...e,
						[t]: {
							...s,
							emotes: c
						}
					}
				},
				PO = (e, t, r) => {
					const s = null == e ? void 0 : e[t],
						a = null == s ? void 0 : s.emotes;
					if (!a) return e;
					const n = a.filter(e => e.id !== r);
					return {
						...e,
						[t]: {
							...s,
							emotes: n
						}
					}
				};
			var RO = (e = DO, t) => {
				switch (t.type) {
					case ee.pb: {
						const {
							powerups: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: wn(r)
						}
					}
					case Sn.b: {
						const {
							subredditId: r,
							emoji: s
						} = t.payload, a = e[r];
						return {
							...e,
							[r]: AO(a, r, s)
						}
					}
					case Sn.c: {
						const {
							subredditId: r,
							emojiId: s
						} = t.payload, a = e[r];
						return {
							...e,
							[r]: PO(a, r, s)
						}
					}
					default:
						return e
				}
			};
			const CO = {},
				NO = (e, t) => t.supporterInfo && e.supporterInfo ? 1e15 * t.score + new Date(t.lastSupportedAt).valueOf() - 1e15 * e.score - new Date(e.lastSupportedAt).valueOf() : t.supporterInfo ? 1 : e.supporterInfo ? -1 : 0;
			var kO = (e = CO, t) => {
					switch (t.type) {
						case ee.pb: {
							const {
								topSupporters: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: r.sort(NO)
							}
						}
						case ee.S:
						case ee.V: {
							const {
								subredditId: r,
								powerupsCount: s,
								user: a,
								isAnonymous: n
							} = t.payload;
							if (!e[r] && s < 0) return e;
							let c = !1;
							const o = e[r].map(e => {
								var t;
								return n && !e.supporterInfo || !n && (null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.id) === a.id ? (c = !0, {
									...e,
									lastSupportedAt: s > 0 ? (new Date).toString() : e.lastSupportedAt,
									score: e.score + s
								}) : e
							}).filter(e => e.score > 0);
							if (c) return {
								...e,
								[r]: o.sort(NO)
							};
							if (s > 0) {
								const t = {
									score: s,
									lastSupportedAt: (new Date).toString(),
									supporterInfo: n ? null : {
										id: a.id,
										displayName: Object(J.e)(a),
										icon: {
											url: a.accountIcon
										},
										profile: {
											isNsfw: a.isNSFW
										}
									}
								};
								return {
									...e,
									[r]: [t, ...e[r]].sort(NO)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				LO = r("./src/lib/makeProductOfferKey/index.ts");
			const xO = {};
			var UO = (e = xO, t) => {
				switch (t.type) {
					case ee.cb:
					case ee.pb: {
						const {
							subredditId: r,
							productOffers: s
						} = t.payload;
						if (!(null == s ? void 0 : s.length)) return e;
						const a = s.reduce((e, t) => {
							const s = Object(LO.a)(t.type, r);
							return e[s] = e[s] ? [...e[s], t] : [t], e
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
			const MO = {};
			var GO = (e = MO, t) => {
					switch (t.type) {
						case l.g: {
							const {
								subredditId: r,
								products: s
							} = t.payload, a = Object.keys(s).reduce((e, t) => (e[t] = !0, e), {});
							return {
								...e,
								[r]: a
							}
						}
						default:
							return e
					}
				},
				FO = r("./src/reddit/models/NewCommunityProgress/index.ts");
			const BO = {};
			var qO = (e = BO, t) => {
				switch (t.type) {
					case od.y: {
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
						const a = (e => e.filter(({
							id: e
						}) => "invite_contributor" !== e).filter(({
							buttons: e
						}) => e.every(({
							__typename: e
						}) => FO.d.includes(e))))(s.cards);
						return {
							...e,
							[r]: {
								...s,
								cards: a
							}
						}
					}
					default:
						return e
				}
			};
			const VO = {};
			var HO = (e = VO, t) => {
				var r, s;
				switch (t.type) {
					case od.y: {
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
						} = t.payload, a = {};
						for (const e of Object.keys(s)) {
							const t = s[e];
							((null === (r = t.answerableQuestions) || void 0 === r ? void 0 : r.length) || 0) > 0 && (a[e] = t.answerableQuestions)
						}
						return 0 === Object.keys(a).length ? e : Object(N.assign)(e, a)
					}
					case od.d: {
						const {
							subredditId: r,
							questionId: a
						} = t.payload, n = null !== (s = e[r]) && void 0 !== s ? s : [];
						return Object(N.setIn)(e, [r], n.filter(e => e.id !== a))
					}
					case od.e:
						return VO;
					default:
						return e
				}
			};
			const WO = {};
			var $O = (e = WO, t) => {
				switch (t.type) {
					case od.b: {
						const {
							categoryRankingsKey: r
						} = t.payload, s = e[r], a = s && s.length ? [...s, ...t.payload.rankings] : t.payload.rankings;
						return {
							...e,
							[r]: a
						}
					}
					default:
						return e
				}
			};
			const KO = {};
			var QO = (e = KO, t) => {
				switch (t.type) {
					case od.c: {
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
			const JO = {};
			var zO = (e = JO, t) => {
				switch (t.type) {
					case bE.b: {
						const {
							rules: r,
							subredditId: s
						} = t.payload, a = {
							[s]: {
								rules: r.rules
							}
						};
						return {
							...e,
							...a
						}
					}
					case bE.e: {
						const {
							rules: r,
							subredditId: s
						} = t.payload, a = {
							[s]: {
								rules: [...e[s].rules, ...r.rules]
							}
						};
						return {
							...e,
							...a
						}
					}
					case bE.f: {
						const {
							rules: r,
							subredditId: s,
							oldName: a
						} = t.payload;
						r.rules.shortName !== a && (e[s].rules = e[s].rules.filter(e => e.shortName !== a));
						const n = {
							[s]: {
								rules: [...r.rules, ...e[s].rules]
							}
						};
						return n[s].rules.sort((e, t) => e.priority - t.priority), {
							...e,
							...n
						}
					}
					case bE.g:
					case bE.d: {
						const {
							rules: r,
							subredditId: s
						} = t.payload, a = {
							[s]: {
								rules: r.rules
							}
						};
						return {
							...e,
							...a
						}
					}
					default:
						return e
				}
			};
			const XO = {};
			var YO = (e = XO, t) => {
				switch (t.type) {
					case yE.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case yE.f: {
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
					case Lr.m: {
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
			const ZO = {};
			var e_ = (e = ZO, t) => {
				switch (t.type) {
					case od.o: {
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
			const t_ = {};
			var r_ = (e = t_, t) => {
				switch (t.type) {
					case od.y: {
						const {
							id: r,
							survey: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case od.z: {
						const {
							id: r,
							response: s
						} = t.payload, a = Object(N.setIn)(e, [r, "response"], s);
						return Object(N.setIn)(a, [r, "isEligible"], !1)
					}
					default:
						return e
				}
			};
			const s_ = {};
			var a_ = (e = s_, t) => {
				switch (t.type) {
					case Nc.g: {
						const {
							subredditTopContent: r
						} = t.payload;
						return {
							...e,
							...r.subredditTopContent
						}
					}
					case Hl.b: {
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
			const n_ = [];
			var c_ = (e = n_, t) => {
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
			const o_ = {};
			var d_ = (e = o_, t) => {
					switch (t.type) {
						case Uh.d:
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
				i_ = r("./src/reddit/actions/subredditWelcomeMessage.ts");
			const u_ = {};
			var l_ = (e = u_, t) => {
					switch (t.type) {
						case i_.a: {
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
				p_ = Object(v.c)({
					about: Gh,
					api: CE,
					appliedFilters: UE,
					byCategory: GE,
					communityInfo: BE,
					crosspostable: QE,
					duplicates: XE,
					gov: cO,
					models: bO,
					moderated: OO,
					notificationSettings: IO,
					onboarding: SO,
					powerupRecentSupporters: wO,
					powerups: TO,
					powerupsEmojis: RO,
					powerupTopSupporters: kO,
					productOffers: UO,
					products: GO,
					progressModule: qO,
					questions: HO,
					rankings: $O,
					rankingsPageInfo: QO,
					rules: zO,
					settings: YO,
					similar: e_,
					survey: r_,
					topContent: a_,
					trending: c_,
					unavailableModels: d_,
					welcomeMessage: l_
				});
			const b_ = {};
			var f_ = Object(Tb.a)((e = b_, t) => {
					switch (t.type) {
						case W.SUBREDDIT_LOADED: {
							const {
								postIds: r,
								posts: s
							} = t.payload, a = r.slice(0, 2).reduce((e, t) => {
								if (s[t].isStickied) {
									const r = s[t].belongsTo.id;
									e[r] ? e[r].push(t) : e[r] = [t]
								}
								return e
							}, {});
							return he()({
								...e
							}, a)
						}
						case Od.o: {
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
				}, b_),
				y_ = Object(v.c)({
					data: f_
				}),
				m_ = r("./node_modules/lodash/values.js"),
				h_ = r.n(m_);
			const E_ = [];
			var O_ = (e = E_, t) => {
				switch (t.type) {
					case eu.d: {
						const {
							makeFavorite: r,
							multiredditsModelsState: s,
							multiredditPath: a
						} = t.payload;
						if (r) {
							const t = [...e],
								r = zi(t, a, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							return t.splice(r, 0, a), t
						}
						return e.filter(e => e !== a)
					}
					case ve.u: {
						const {
							multireddits: e
						} = t.payload;
						return h_()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case eu.e: {
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
			var __ = (e = null, t) => {
				switch (t.type) {
					case eu.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case eu.b:
					case eu.c:
						return null;
					default:
						return e
				}
			};
			var I_ = (e = !1, t) => {
				switch (t.type) {
					case eu.b:
					case eu.c:
						return !0;
					case eu.a:
						return !1;
					default:
						return e
				}
			};
			var g_ = (e = !1, t) => {
					switch (t.type) {
						case eu.b:
							return !0;
						case eu.c:
						case eu.a:
							return !1;
						default:
							return e
					}
				},
				S_ = Object(v.c)({
					errors: __,
					fetched: I_,
					pending: g_
				});
			const v_ = [];
			var w_ = (e = v_, t) => {
				switch (t.type) {
					case eu.c: {
						const {
							profiles: e,
							favoriteProfileIds: r,
							favoriteSubredditIds: s
						} = t.payload;
						let a;
						return (a = r && r.length ? r : s ? s.filter(t => !!e[t]) : []).sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), a
					}
					case eu.f: {
						const {
							makeFavorite: r,
							identifier: s,
							profileModels: a
						} = t.payload, {
							id: n,
							type: c
						} = s;
						if (c !== vf.a.PROFILE) return e;
						const o = e ? e.slice() : [];
						if (r) {
							const e = zi(o, n, (e, t) => a[e].displayText.toLowerCase() > a[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, n)
						} else {
							const e = o.indexOf(n);
							o.splice(e, 1)
						}
						return o
					}
					case eu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, a = r.filter(t => t.type === vf.a.PROFILE && e.indexOf(t.id) > -1);
						return !a.length || s ? e : a.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const j_ = [];
			var T_ = (e = j_, t) => {
				switch (t.type) {
					case eu.c: {
						const {
							subreddits: e,
							favoriteSubredditIds: r
						} = t.payload, s = r ? r.filter(t => !!e[t]) : [];
						return s.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), s
					}
					case eu.f: {
						const {
							makeFavorite: r,
							identifier: s,
							subredditModels: a
						} = t.payload, {
							id: n,
							type: c
						} = s;
						if (c !== vf.a.SUBREDDIT) return e;
						const o = e ? e.slice() : [];
						if (r) {
							const e = zi(o, n, (e, t) => a[e].displayText.toLowerCase() > a[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, n)
						} else {
							const e = o.indexOf(n);
							o.splice(e, 1)
						}
						return o
					}
					case eu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, a = r.filter(t => t.type === vf.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !a.length || s ? e : a.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const D_ = [],
				A_ = e => (t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1;
			var P_ = (e = D_, t) => {
					switch (t.type) {
						case ve.u: {
							const {
								multireddits: r
							} = t.payload, s = h_()(r).map(({
								url: e
							}) => e.toLowerCase()).sort(A_(r));
							return Ki()(e, s) ? e : s
						}
						case je.b: {
							const {
								account: r,
								multireddits: s,
								multiredditsByUser: a,
								multiredditsModelsState: n
							} = t.payload;
							if (!r) return e;
							const c = a[r.id];
							if (!c || !c.length) return e;
							const o = {
									...n,
									...s
								},
								d = Ji()(e, c).sort(A_(o));
							return Ki()(e, d) ? e : d
						}
						case eu.e: {
							const {
								follow: r,
								multiredditPath: s,
								multiredditsModelsState: a
							} = t.payload;
							return r ? [...e, s].sort(A_(a)) : e.filter(e => e !== s)
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
							} = t.payload, a = {
								...s,
								[r.url]: r
							};
							return [...e, r.url].sort(A_(a))
						}
						default:
							return e
					}
				},
				R_ = r("./node_modules/lodash/difference.js"),
				C_ = r.n(R_);
			const N_ = [];
			var k_ = (e = N_, t) => {
				switch (t.type) {
					case Xi.n: {
						const {
							profileOrder: r
						} = t.payload;
						return Fp()([...e, ...r])
					}
					case eu.c: {
						const {
							profiles: e
						} = t.payload, r = Object.keys(e);
						return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
					}
					case eu.h: {
						const {
							identifiers: r,
							profileModels: s,
							userIsSubscriber: a
						} = t.payload, n = r.filter(e => e.type === vf.a.PROFILE);
						if (!n.length) return e;
						const c = n.map(e => e.id);
						return a ? Fp()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : C_()(e, c)
					}
					default:
						return e
				}
			};
			const L_ = [];
			var x_ = (e = L_, t) => {
					switch (t.type) {
						case Xi.n: {
							const {
								subredditOrder: r
							} = t.payload;
							return Fp()([...e, ...r])
						}
						case eu.c: {
							const {
								subreddits: e
							} = t.payload, r = Object.keys(e);
							return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
						}
						case eu.h: {
							const {
								identifiers: r,
								subredditModels: s,
								userIsSubscriber: a
							} = t.payload, n = r.filter(e => e.type === vf.a.SUBREDDIT && !!e.id);
							if (!n.length) return e;
							const c = n.map(e => e.id);
							return a ? Fp()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : C_()(e, c)
						}
						default:
							return e
					}
				},
				U_ = Object(v.c)({
					api: S_,
					favoriteMultiOrder: O_,
					favoriteProfileOrder: w_,
					favoriteSubredditOrder: T_,
					multiredditOrder: P_,
					profileOrder: k_,
					subredditOrder: x_
				}),
				M_ = r("./src/reddit/actions/survey/constants.ts");
			var G_ = (e = null, t) => {
				switch (t.type) {
					case M_.c:
						return t.payload || null;
					default:
						return e
				}
			};
			var F_ = (e = 1, t) => {
				switch (t.type) {
					case M_.d:
						return t.payload || 1;
					default:
						return e
				}
			};
			var B_ = (e = !1, t) => {
				switch (t.type) {
					case M_.b:
						return !e;
					default:
						return e
				}
			};
			var q_ = (e = !0, t) => {
					switch (t.type) {
						case M_.h:
							return !e;
						default:
							return e
					}
				},
				V_ = Object(v.c)({
					activeDemoTrigger: G_,
					demoTriggerThreshold: F_,
					isDemoEnabled: B_,
					isSampleFactorEnabled: q_
				}),
				H_ = r("./src/reddit/actions/tabBadging.ts");
			var W_ = (e = !1, t) => {
					switch (t.type) {
						case H_.a:
							const {
								hasUnreadMessages: r
							} = t.payload;
							return r;
						default:
							return e
					}
				},
				$_ = r("./src/reddit/actions/tags/constants.ts");
			const K_ = {
				pending: !1,
				error: !1
			};
			var Q_ = (e = K_, t) => {
				switch (t.type) {
					case $_.l:
						return {
							...e, pending: !0
						};
					case $_.m:
						return {
							error: !1, pending: !1
						};
					case $_.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const J_ = {
				pending: !1,
				error: !1
			};
			var z_ = (e = J_, t) => {
				switch (t.type) {
					case $_.o:
						return {
							...e, pending: !0
						};
					case $_.p:
						return {
							error: !1, pending: !1
						};
					case $_.n:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const X_ = {
				pending: !1,
				error: !1
			};
			var Y_ = (e = X_, t) => {
				switch (t.type) {
					case $_.t:
						return {
							...e, pending: !0
						};
					case $_.s:
					case $_.r:
					case $_.e:
					case $_.j:
						return {
							error: !1, pending: !1
						};
					case $_.q:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const Z_ = {
				pending: !1,
				error: !1
			};
			var eI = (e = Z_, t) => {
				switch (t.type) {
					case $_.v:
						return {
							...e, pending: !0
						};
					case $_.w:
						return {
							error: !1, pending: !1
						};
					case $_.u:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const tI = {
				pending: !1,
				error: !1
			};
			var rI = (e = tI, t) => {
					switch (t.type) {
						case $_.g:
							return {
								...e, pending: !0
							};
						case $_.h:
							return {
								error: !1, pending: !1
							};
						case $_.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				sI = Object(v.c)({
					create: Q_,
					deleteTag: z_,
					fetch: Y_,
					update: eI,
					updatePrimaryTag: rI
				});
			const aI = {
				global: [],
				recommendedGlobal: []
			};
			var nI = (e = aI, t) => {
					switch (t.type) {
						case $_.w:
						case $_.r:
						case $_.e:
						case $_.j: {
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
				cI = r("./node_modules/lodash/uniqWith.js"),
				oI = r.n(cI),
				dI = r("./src/reddit/models/Option/index.ts");
			const iI = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var uI = (e = iI, t) => {
					switch (t.type) {
						case $_.d: {
							const {
								option: r
							} = t.payload;
							return {
								...e,
								selectedOptions: oI()([...e.selectedOptions || [], {
									...r
								}], dI.a)
							}
						}
						case $_.c: {
							const {
								option: r
							} = t.payload, s = e.selectedOptions.findIndex(e => Object(dI.a)(e, r));
							return e.selectedOptions.splice(s, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case $_.b: {
							const {
								input: r
							} = t.payload;
							return {
								...e,
								tagInput: r
							}
						}
						case $_.a: {
							const {
								primaryTagId: r
							} = t.payload, s = e.selectedOptions.findIndex(e => e.id === r), a = [...e.selectedOptions];
							return s >= 0 && a.splice(s, 1), {
								...e,
								selectedPrimaryTagId: r,
								selectedOptions: a
							}
						}
						default:
							return e
					}
				},
				lI = r("./src/reddit/helpers/tags/index.ts");
			const pI = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var bI = (e = pI, t) => {
					switch (t.type) {
						case $_.j: {
							const {
								globalSubredditTags: r,
								subredditScopedTags: s,
								subredditId: a
							} = t.payload;
							return {
								...e,
								globalSubredditTags: {
									...e.globalSubredditTags,
									...r
								},
								subredditScopedTags: {
									...e.subredditScopedTags,
									[a]: {
										...e.subredditScopedTags[a] || {},
										...s[a] || {}
									}
								}
							}
						}
						case $_.w:
						case $_.s:
						case $_.r: {
							const {
								primaryTag: r,
								globalSubredditTags: s,
								subredditScopedTags: a,
								itemTags: n,
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
										...a[o] || {}
									}
								},
								itemTags: {
									...e.itemTags,
									[o]: {
										...n[o] || {}
									}
								},
								geoPlaces: d ? Object(N.set)(e.geoPlaces, o, d) : e.geoPlaces,
								suggestedItemTags: {
									...e.suggestedItemTags,
									[o]: {
										...c[o] || {}
									}
								},
								sortedItemTags: {
									...e.sortedItemTags,
									[o]: Object(lI.a)(n[o] || {})
								}
							}
						}
						case $_.p: {
							const {
								subredditId: r,
								tags: s
							} = t.payload, a = s.reduce((e, {
								tagId: t
							}) => (delete e[t], e), {
								...e.subredditScopedTags[r] || {}
							});
							return {
								...e,
								subredditScopedTags: {
									...e.subredditScopedTags,
									[r]: a
								}
							}
						}
						case $_.e: {
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
						case $_.h: {
							const {
								subredditId: r,
								primaryTagId: s,
								secondaryTags: a
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
										...a || {}
									}
								}
							} : e
						}
						default:
							return e
					}
				},
				fI = r("./src/reddit/reducers/tags/selected/index.ts"),
				yI = Object(v.c)({
					api: sI,
					availableGlobalTagOrder: nI,
					models: bI,
					selected: fI.b,
					creation: uI
				}),
				mI = r("./src/reddit/actions/redditEmbed.ts"),
				hI = r("./src/reddit/actions/theme.ts"),
				EI = r("./src/reddit/actions/users.ts"),
				OI = r("./src/reddit/models/Theme/index.ts");
			const _I = {
				current: OI.c,
				cached: {}
			};
			var II = (e = _I, t) => {
					switch (t.type) {
						case hI.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? OI.b : OI.c,
								cached: {}
							}
						}
						case kr.a:
						case kr.b:
						case kr.h:
						case kr.i:
						case kr.f:
						case kr.j:
						case we.e:
						case we.h:
						case F.a:
						case F.e:
						case F.b:
						case F.f:
						case F.d:
						case F.h:
						case ge.b:
						case W.SUBREDDIT_LOADED:
						case je.b:
						case je.a:
						case ge.f:
						case mI.b:
						case K.i:
						case Ce.g:
						case H.SEARCH_RESULTS_RECEIVED:
						case Lr.i:
						case Te.PAGE_LOADED:
						case Us.PAGE_LOADED:
						case EI.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: OI.b,
									cached: {}
								} : {
									current: OI.c,
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
								current: OI.b,
								cached: {}
							} : {
								current: OI.c,
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
									current: OI.b,
									cached: {}
								} : {
									current: OI.c,
									cached: {}
								}
							}
							return e;
						case Lr.h: {
							if (!t.payload) return e;
							const {
								nightmode: r
							} = t.payload;
							return r ? {
								current: OI.b,
								cached: {}
							} : {
								current: OI.c,
								cached: {}
							}
						}
						case b.d:
							return {
								current: OI.c, cached: {}
							};
						case b.e:
							return t.payload.nightmodeTempUpdated ? {
								current: OI.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				gI = r("./src/reddit/actions/toaster.ts");
			const SI = [];
			var vI = (e = SI, t) => {
					switch (t.type) {
						case gI.c: {
							const r = t.payload,
								s = [];
							let a = !1;
							for (const t of e) {
								const e = t.id === r.id ? r : t;
								s.push(e), a = a || e === r
							}
							return a || s.push(r), s
						}
						case gI.b: {
							const r = t.payload;
							return e.filter(e => e.id !== r)
						}
						default:
							return e
					}
				},
				wI = r("./src/reddit/actions/tooltip.ts");
			var jI = (e = null, t) => {
					switch (t.type) {
						case wI.c: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : r
						}
						case wI.a: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? e : r
						}
						case wI.b: {
							const {
								tooltipId: r
							} = t.payload;
							return null !== e ? e : r || null
						}
						case wI.e: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : e
						}
						case ee.K:
						case wI.d:
						case u.a:
						case fo.b:
						case fo.c:
						case fo.a:
							return null;
						default:
							return e
					}
				},
				TI = r("./src/reddit/actions/tracing.ts");
			const DI = {
				traceId: void 0
			};
			var AI = (e = DI, t) => {
					switch (t.type) {
						case TI.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				PI = r("./src/lib/asyncActions/index.ts"),
				RI = r("./src/reddit/actions/reCaptchaEnterprise.ts");
			const CI = Object(PI.c)(RI.c.requestedActionType, RI.c.succeededActionType, RI.c.failedActionType),
				NI = Object(PI.c)(RI.a.requestedActionType, RI.a.succeededActionType, RI.a.failedActionType),
				kI = Object(PI.c)(RI.d.requestedActionType, RI.d.succeededActionType, RI.d.failedActionType);
			var LI = Object(v.c)({
					load: CI,
					execute: NI,
					send: kI
				}),
				xI = r("./src/reddit/actions/tracking.ts");
			const UI = {};
			var MI = (e = UI, t) => {
					switch (t.type) {
						case xI.a: {
							const {
								routeKey: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case xI.b: {
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
				GI = Object(v.c)({
					reCaptchaEnterprise: LI,
					viewportDataLoaded: MI
				}),
				FI = r("./src/reddit/actions/trafficStats/constants.ts");
			var BI = (e = !1, t) => {
				switch (t.type) {
					case FI.c:
						return !0;
					case FI.b:
					case FI.a:
						return !1;
					default:
						return e
				}
			};
			var qI = (e = null, t) => {
					switch (t.type) {
						case FI.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case FI.c:
							return null;
						default:
							return e
					}
				},
				VI = Object(v.c)({
					pending: BI,
					trafficStats: qI
				});
			var HI = (e = null, t) => {
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
			var WI = (e = !1, t) => {
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
				$I = Object(v.c)({
					error: HI,
					pending: WI
				});
			var KI = (e = null, t) => {
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
			var QI = (e = "", t) => {
				switch (t.type) {
					case d.r:
						return (t.payload ? t.payload.recipient : "") || "";
					case d.t:
						return "";
					default:
						return e
				}
			};
			var JI = (e = null, t) => {
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
				zI = Object(v.c)({
					api: $I,
					contentId: KI,
					initialRecipient: QI,
					publicAddress: JI
				}),
				XI = Object(v.c)({
					communityPoints: zI
				}),
				YI = r("./src/reddit/actions/search/trending.ts");
			const ZI = [];
			var eg = (e = ZI, t) => {
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case YI.a: {
							const {
								items: r
							} = t.payload;
							return r || e
						}
						default:
							return e
					}
				},
				tg = Object(v.c)({
					models: eg
				});
			var rg = r("./src/reddit/routes/premium/index.ts");
			const sg = {};
			var ag = (e = sg, t) => {
					switch (t.type) {
						case Yf.a: {
							const {
								trophies: r
							} = t.payload;
							return Object.values(r).forEach(e => {
								"t6_bf" === e.awardId && (e.url = rg.b)
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				ng = r("./src/reddit/actions/upload.ts"),
				cg = r("./src/reddit/models/Upload/index.ts");
			const og = {};
			var dg = (e = og, t) => {
					switch (t.type) {
						case ng.d: {
							const {
								key: r,
								id: s,
								file: a
							} = t.payload, n = e[r], c = n && n.file === a ? {
								...n.metadata
							} : {};
							return {
								...e,
								[r]: {
									key: r,
									id: s,
									file: a,
									metadata: c,
									url: void 0,
									status: cg.a.PENDING
								}
							}
						}
						case ng.h: {
							const {
								key: r
							} = t.payload, s = e[r];
							return {
								...e,
								[r]: {
									...s,
									status: cg.a.UPLOADING
								}
							}
						}
						case ng.c: {
							const {
								key: r,
								metadata: s
							} = t.payload, a = e[r];
							return {
								...e,
								[r]: {
									...a,
									metadata: s
								}
							}
						}
						case ng.e: {
							const {
								key: r,
								progress: s
							} = t.payload, a = e[r];
							return {
								...e,
								[r]: {
									...a,
									progress: s
								}
							}
						}
						case ng.g: {
							const {
								key: r,
								url: s
							} = t.payload, a = e[r];
							return {
								...e,
								[r]: {
									...a,
									status: cg.a.SUCCESS,
									url: s
								}
							}
						}
						case ng.b: {
							const {
								key: r,
								error: s
							} = t.payload, a = e[r];
							return {
								...e,
								[r]: {
									...a,
									status: cg.a.FAILED,
									error: s
								}
							}
						}
						case ng.a: {
							const {
								key: r
							} = t.payload, s = e[r];
							return {
								...e,
								[r]: {
									...s,
									status: cg.a.CANCELED
								}
							}
						}
						case ng.f: {
							const {
								key: r
							} = t.payload, s = e[r];
							return s.metadata.localUrl && window.URL.revokeObjectURL(s.metadata.localUrl), xs()(e, r)
						}
						default:
							return e
					}
				},
				ig = r("./src/reddit/actions/upvotePrompt.ts");
			var ug = (e = 0, t) => {
				switch (t.type) {
					case ig.a:
						return ++e;
					default:
						return e
				}
			};
			const lg = {};
			var pg = (e = lg, t) => {
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
								const a = r[t],
									n = e[t],
									c = {
										latest: n ? n.latest.at <= a.at ? a : n.latest : a,
										byDate: {
											...n ? n.byDate : {},
											[a.at]: a
										}
									};
								s[t] = c
							}), s
						}
						default:
							return e
					}
				},
				bg = r("./src/reddit/actions/accountGender/constants.ts"),
				fg = r("./src/reddit/actions/inbox.ts"),
				yg = r("./src/reddit/actions/pages/appeal/constants.ts"),
				mg = r("./src/reddit/actions/pages/userDataRequest/index.ts"),
				hg = r("./src/reddit/actions/sso/constants.ts"),
				Eg = r("./src/reddit/endpoints/profile/info.ts");
			const Og = (e, t) => {
				const {
					gender: r,
					...s
				} = {
					...e
				};
				if (!t || Ki()(s, t)) return e;
				const {
					karma: a
				} = t;
				return {
					...t,
					karma: {
						...Eg.a,
						...null == s ? void 0 : s.karma,
						...a
					},
					gender: r
				}
			};
			var _g = Object(Tb.a)((e = null, t) => {
				switch (t.type) {
					case yg.a:
					case yg.b:
					case Qy.b:
					case Qy.c:
					case kr.a:
					case kr.b:
					case kr.f:
					case kr.h:
					case kr.i:
					case kr.j:
					case we.e:
					case we.h:
					case we.g:
					case ve.q:
					case ve.r:
					case F.a:
					case F.e:
					case F.b:
					case F.f:
					case ge.a:
					case ge.b:
					case je.a:
					case je.b:
					case W.SUBREDDIT_FAILED:
					case Xi.l:
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
					case H.SEARCH_FAILED:
					case H.SEARCH_RESULTS_RECEIVED:
					case Te.PAGE_LOADED:
					case Us.PAGE_LOADED:
					case Ce.e:
					case Ce.g:
					case mI.a:
					case mI.b:
					case Lr.i:
					case mg.b:
					case EI.c:
					case rd.TOPIC_DATA_LOADED:
						return Og(e, t.payload.account);
					case EI.n:
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
						return r ? Og(e, r.account) : e
					}
					case EI.a:
						return e ? {
							...e,
							seenLayoutSwitch: !0
						} : e;
					case s.d:
						return e ? {
							...e,
							seenRedesignModal: !0
						} : e;
					case Lr.k:
					case Lr.j: {
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
						return r.toLowerCase() !== (e && Object(J.e)(e).toLowerCase()) ? e : e && {
							...e,
							karma: {
								...Eg.a,
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
					case Uu.i: {
						const {
							price: r
						} = t.payload;
						return (null == e ? void 0 : e.coins) && r ? {
							...e,
							coins: e.coins - r
						} : e
					}
					case fg.a: {
						const {
							inboxCount: r
						} = t.payload;
						return e ? {
							...e,
							inboxCount: r
						} : e
					}
					case hg.a: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...s, r]
						} : e
					}
					case hg.b: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: s.filter(e => e !== r)
						} : e
					}
					case So.c: {
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
					case bg.a:
					case bg.b: {
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
					default:
						return e
				}
			}, null);
			var Ig = (e = null, t) => {
				switch (t.type) {
					case EI.m:
					case EI.n:
						return null;
					case EI.l:
						return t.payload;
					default:
						return e
				}
			};
			var gg = (e = !1, t) => {
					switch (t.type) {
						case EI.m:
							return !0;
						case EI.n:
						case EI.l:
							return !1;
						default:
							return e
					}
				},
				Sg = Object(v.c)({
					error: Ig,
					pending: gg
				}),
				vg = Object(v.c)({
					api: Sg
				});
			var wg = (e = !1, t) => {
				switch (t.type) {
					case EI.j:
						return !0;
					default:
						return e
				}
			};
			var jg = (e = !1, t) => {
					switch (t.type) {
						case EI.i:
							return !0;
						case EI.j:
						case EI.h:
							return !1;
						default:
							return e
					}
				},
				Tg = Object(v.c)({
					pending: jg,
					emailSent: wg
				}),
				Dg = Object(v.c)({
					api: Tg
				}),
				Ag = Object(v.c)({
					changeEmail: vg,
					sendResetEmail: Dg
				}),
				Pg = r("./src/reddit/models/WhitelistAndBlocked.ts");
			const Rg = {};
			var Cg = (e = Rg, t) => {
				switch (t.type) {
					case mt.f:
						return {
							...e, new: Pg.a.pending
						};
					case mt.d:
						return {
							...e, new: Pg.a.error
						};
					case mt.e:
						return {
							...e, new: Pg.a.waitingForRequest
						};
					case mt.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Pg.a.pending
						}
					}
					case mt.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Pg.a.error
						}
					}
					case mt.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Pg.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const Ng = [];
			var kg = (e = Ng, t) => {
					switch (t.type) {
						case mt.e:
							return [t.payload, ...e];
						case mt.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case Lr.i:
							return t.payload.blockedUsers;
						default:
							return e
					}
				},
				Lg = Object(v.c)({
					api: Cg,
					data: kg
				}),
				xg = r("./src/reddit/actions/chat/constants.ts"),
				Ug = r("./src/reddit/actions/chat/userSettings.ts");
			const Mg = xg.a.anybody;
			var Gg = (e = Mg, t) => {
					switch (t.type) {
						case Ug.a:
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
				Fg = Object(v.c)({
					invitePolicy: Gg
				});
			const Bg = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var qg = (e = null, t) => {
				switch (t.type) {
					case Te.PAGE_LOADED: {
						const {
							drafts: r
						} = t.payload;
						return e && Ki()(e, r) ? e : {
							...e,
							...r
						}
					}
					case cs.L: {
						const {
							response: {
								draftsCount: r
							}
						} = t.payload;
						return Bg(e, r)
					}
					case $r.e: {
						const {
							postDraftIds: r
						} = t.payload;
						return Bg(e, r.length)
					}
					case $r.c:
					case $r.l: {
						const {
							draftsCount: r
						} = t.payload;
						return Bg(e, r)
					}
					default:
						return e
				}
			};
			const Vg = {};
			var Hg = (e = Vg, t) => {
					switch (t.type) {
						case $n.a: {
							const e = t.payload.experimentVariants;
							return Su(e)
						}
						default:
							return e
					}
				},
				Wg = r("./src/reddit/actions/global/constants.ts");
			const $g = {};
			var Kg = (e = $g, t) => {
					switch (t.type) {
						case Wg.a: {
							const r = t.payload;
							return null === r.local_persisted_experiments_store || void 0 === r.local_persisted_experiments_store ? e : r.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				Qg = Object(v.c)({
					byName: Hg,
					localPersisted: Kg
				}),
				Jg = r("./src/reddit/actions/googleOneTap/index.ts");
			var zg = (e = !1, t) => {
				switch (t.type) {
					case Jg.a:
						return !0;
					default:
						return e
				}
			};
			var Xg = (e = !1, t) => {
				switch (t.type) {
					case Lr.e:
						return !0;
					case Lr.d:
						return !1;
					default:
						return e
				}
			};
			var Yg = (e = "", t) => {
				switch (t.type) {
					case Lr.i:
						return "string" == typeof t.payload.language ? t.payload.language : e;
					default:
						return e
				}
			};
			const Zg = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var eS = (e = Zg, t) => {
					switch (t.type) {
						case EI.b:
							return t.payload;
						default:
							return e
					}
				},
				tS = r("./src/reddit/actions/notifications/constants.ts"),
				rS = r("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var sS = (e = null, t) => {
				switch (t.type) {
					case rS.a:
					case rS.d:
					case tS.a:
						return t.payload && t.payload.error || null;
					case rS.c:
					case rS.f:
					case rS.a:
					case tS.c:
					case tS.b:
						return null;
					default:
						return e
				}
			};
			var aS = (e = !1, t) => {
				switch (t.type) {
					case tS.c:
						return !1;
					case tS.b:
						return !0;
					default:
						return e
				}
			};
			var nS = (e = !1, t) => {
					switch (t.type) {
						case tS.c:
							return !0;
						case tS.b:
						case tS.a:
							return !1;
						default:
							return e
					}
				},
				cS = Object(v.c)({
					error: sS,
					loaded: aS,
					pending: nS
				});
			var oS = (e = null, t) => {
				switch (t.type) {
					case tS.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case tS.f:
					case tS.e:
						return null;
					default:
						return e
				}
			};
			var dS = (e = !1, t) => {
				switch (t.type) {
					case tS.f:
						return !1;
					case tS.e:
						return !0;
					default:
						return e
				}
			};
			var iS = (e = !1, t) => {
					switch (t.type) {
						case tS.f:
							return !0;
						case tS.e:
						case tS.d:
							return !1;
						default:
							return e
					}
				},
				uS = Object(v.c)({
					error: oS,
					loaded: dS,
					pending: iS
				}),
				lS = Object(v.c)({
					getPreferences: cS,
					setPreferences: uS
				});
			const pS = {
				byId: {},
				allIds: []
			};
			var bS = (e = pS, t) => {
				switch (t.type) {
					case rS.b: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case rS.g: {
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
			const fS = {
				byId: {},
				allIds: []
			};
			var yS = (e = fS, t) => {
					switch (t.type) {
						case rS.b: {
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
				mS = Object(v.c)({
					sections: yS,
					rows: bS
				}),
				hS = r("./src/lib/notifications/constants.ts");
			var ES = (e = !1, t) => {
				switch (t.type) {
					case hS.j:
						return !0;
					case hS.b:
					case hS.d:
					case hS.e:
						return !1;
					default:
						return e
				}
			};
			const OS = {
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
			var _S = (e = OS, t) => {
				switch (t.type) {
					case tS.b:
					case tS.f:
					case tS.d: {
						const {
							preferences: r
						} = t.payload;
						return sn()(r) ? e : r
					}
					default:
						return e
				}
			};
			const IS = {
				byId: {},
				allIds: []
			};
			var gS = (e = IS, t) => {
				switch (t.type) {
					case rS.e: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case rS.g: {
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
			const SS = {
				byId: {},
				allIds: []
			};
			var vS = (e = SS, t) => {
					switch (t.type) {
						case rS.e: {
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
				wS = Object(v.c)({
					sections: vS,
					rows: gS
				}),
				jS = Object(v.c)({
					api: lS,
					emailSettingsLayout: mS,
					isNotificationPromptVisible: ES,
					preferences: _S,
					pushSettingsLayout: wS
				});
			const TS = {};
			var DS = (e = TS, t) => {
				switch (t.type) {
					case o.i:
					case Ke.h: {
						const {
							subredditId: r,
							userOwnedBadges: s
						} = t.payload, a = s.reduce((e, t) => (e[t] = !0, e), {});
						return {
							...e,
							[r]: {
								...e[r] || {},
								...a
							}
						}
					}
					case l.d: {
						const {
							userOwnedBadges: r,
							product: s
						} = t.payload, a = r.reduce((e, t) => (e[t] = !0, e), {});
						return {
							...e,
							[s.subredditId]: {
								...e[s.subredditId] || {},
								...a
							}
						}
					}
					default:
						return e
				}
			};
			const AS = {},
				PS = (e, t) => `${e}_${t||new Date}`;
			var RS = (e = AS, t) => {
				switch (t.type) {
					case ee.Ab: {
						const r = t.payload.powerups;
						if (r) {
							const {
								allocation: t
							} = r, s = (t || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
								...e,
								[PS(t.subredditInfo.id, t.allocatedAt)]: t
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
							[PS(t.subredditInfo.id, t.allocatedAt)]: t
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
							allocatedAt: a
						} = t.payload;
						if (s < 0) {
							const t = PS(r, a),
								n = e[t];
							if (n && n.isPremium) return {
								...e,
								[t]: {
									...n,
									powerups: n.powerups + s,
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
						} = t.payload, a = PS(r, s), n = e[a];
						return n && !n.isPremium ? {
							...e,
							[a]: {
								...n,
								isActive: !1,
								isDeallocationAllowed: !1
							}
						} : e
					}
					default:
						return e
				}
			};
			var CS = (e = null, t) => {
				switch (t.type) {
					case ee.Ab: {
						const r = t.payload.powerups;
						return r ? xs()({
							...e,
							...r
						}, "allocation") : e
					}
					case ee.pb: {
						const {
							userPowerups: r
						} = t.payload;
						return r ? xs()({
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
			var NS, kS = (e = !1, t) => {
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
				LS = Object(v.c)({
					allocationByKey: RS,
					data: CS,
					fetched: kS
				}),
				xS = r("./src/reddit/reducers/user/prefs/index.ts");
			! function(e) {
				e.UNFETCHED = "default", e.PENDING = "pending", e.LOADED = "loaded", e.FAILED = "failed"
			}(NS || (NS = {}));
			const US = {
				status: NS.UNFETCHED,
				subscriptions: []
			};
			var MS = (e = US, t) => {
				switch (t.type) {
					case ee.Eb:
						return {
							...e, status: NS.PENDING
						};
					case ee.Db: {
						const {
							subscriptions: r
						} = t.payload;
						return r ? {
							...e,
							subscriptions: r,
							status: NS.LOADED
						} : e
					}
					case ee.Cb:
						return {
							...e, status: NS.FAILED
						};
					default:
						return e
				}
			};
			var GS = (e = "", t) => {
				switch (t.type) {
					case EI.d:
						return t.payload;
					default:
						return e
				}
			};
			var FS = (e = null, t) => {
				switch (t.type) {
					case Vy.a:
					case Vy.b:
					case Vy.c:
					case Vy.e:
						return t.payload;
					case Vy.d:
						return null;
					default:
						return e
				}
			};
			var BS = (e = !1, t) => {
				switch (t.type) {
					case Vy.f:
						return !0;
					default:
						return e
				}
			};
			var qS = (e = "", t) => {
				switch (t.type) {
					case EI.k:
						return t.payload;
					default:
						return e
				}
			};
			var VS = (e = null, t) => {
				switch (t.type) {
					case $n.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var HS = (e = null, t) => {
					switch (t.type) {
						case $n.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				WS = Object(v.c)({
					isEmployee: VS,
					isLoggedIn: HS
				});
			var $S = (e = null, t) => {
					switch (t.type) {
						case Lr.q: {
							const {
								topContentDismissal: r
							} = t.payload;
							return e && Ki()(e, r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				KS = r("./src/reddit/actions/userWhitelist.ts");
			const QS = {};
			var JS = (e = QS, t) => {
				switch (t.type) {
					case KS.e:
						return {
							...e, new: Pg.a.pending
						};
					case KS.d:
						return {
							...e, new: Pg.a.error
						};
					case KS.f:
						return {
							...e, new: Pg.a.waitingForRequest
						};
					case KS.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Pg.a.pending
						}
					}
					case KS.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Pg.a.error
						}
					}
					case KS.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Pg.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const zS = [];
			var XS = (e = zS, t) => {
					switch (t.type) {
						case KS.f:
							return [t.payload, ...e];
						case KS.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case Lr.i:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				YS = Object(v.c)({
					api: JS,
					data: XS
				}),
				ZS = Object(v.c)({
					account: _g,
					accountSettings: Ag,
					blocked: Lg,
					chatSettings: Fg,
					drafts: qg,
					experiments: Qg,
					googleOneTapEnabled: zg,
					isCustomizeFlyoutShowing: Xg,
					topContentDismissalPrefsSet: $S,
					language: Yg,
					loid: eS,
					notificationPrefs: jS,
					ownedBadges: DS,
					powerups: LS,
					prefs: xS.c,
					productOfferSubscriptions: MS,
					reddaid: GS,
					session: FS,
					sessionRefreshFailed: BS,
					sessionTracker: qS,
					temporaryGQL: WS,
					wallets: pg,
					whitelist: YS
				});
			var ev = (e = null, t) => {
				switch (t.type) {
					case mg.a:
						return t.payload || null;
					case mg.b:
					case mg.c:
						return null;
					default:
						return e
				}
			};
			var tv = (e = !1, t) => {
				switch (t.type) {
					case mg.c:
						return !0;
					case mg.b:
					case mg.a:
						return !1;
					default:
						return e
				}
			};
			var rv = (e = !1, t) => {
				switch (t.type) {
					case mg.b:
						return !0;
					case mg.a:
					case mg.c:
						return !1;
					default:
						return e
				}
			};
			var sv = (e = !1, t) => {
					switch (t.type) {
						case mg.b:
							return t.payload.userDataExportEligibility;
						case mg.a:
						case mg.c:
							return !1;
						default:
							return e
					}
				},
				av = Object(v.c)({
					error: ev,
					pending: tv,
					success: rv,
					userDataExportEligibility: sv
				}),
				nv = Object(v.c)({
					userDataRequestPageApi: av
				});
			const cv = {};
			var ov = (e = cv, t) => {
				switch (t.type) {
					case EI.g:
					case EI.f: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case EI.e: {
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
			var dv = (e = !1, t) => {
					switch (t.type) {
						case EI.g:
							return !0;
						case EI.f:
						case EI.e:
							return !1;
						default:
							return e
					}
				},
				iv = Object(v.c)({
					error: ov,
					pending: dv
				});
			const uv = {};
			var lv = (e = uv, t) => {
				switch (t.type) {
					case Ke.e: {
						const {
							subredditId: r,
							usersAppliedBadges: s
						} = t.payload, a = Object.keys(s).reduce((t, a) => {
							const n = s[a];
							return t[a] = {
								...e[a] || {},
								[r]: n
							}, t
						}, {});
						return {
							...e,
							...a
						}
					}
					case Ke.b: {
						const {
							badgeIds: r,
							subredditId: s,
							userId: a
						} = t.payload;
						return {
							...e,
							[a]: {
								...e[a] || {},
								[s]: r
							}
						}
					}
					case Ke.a: {
						const {
							previousBadgeIds: r,
							subredditId: s,
							userId: a
						} = t.payload;
						return {
							...e,
							[a]: {
								...e[a] || {},
								[s]: r
							}
						}
					}
					case o.a: {
						const {
							badge: r,
							currentAppliedBadges: s,
							placement: a,
							subredditId: n,
							userId: c
						} = t.payload, o = s.filter(e => e.placement !== a).concat(r).filter(Boolean).map(e => e.id);
						return {
							...e,
							[c]: {
								...e[c] || {},
								[n]: o
							}
						}
					}
					default:
						return e
				}
			};
			const pv = {},
				bv = (e, t) => {
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					return r.forEach(r => {
						const a = e[r],
							n = t[r];
						a && Ki()(a, n) || (s[r.toLowerCase()] = n)
					}), Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var fv = (e = pv, t) => {
					switch (t.type) {
						case EI.f: {
							const {
								data: r
							} = t.payload;
							return bv(e, r)
						}
						case Xi.k: {
							const {
								user: r
							} = t.payload;
							return bv(e, {
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
							const a = s.awardedLastMonth,
								n = a ? a.totalCount + 1 : 1,
								c = a && a.topAward;
							return c ? bv(e, {
								[r.toLowerCase()]: {
									...s,
									awardedLastMonth: {
										totalCount: n,
										topAward: c
									}
								}
							}) : e
						}
						case ee.eb: {
							const {
								userName: r,
								karma: s
							} = t.payload, a = e[r.toLowerCase()];
							if (!a) return e;
							const n = {
								...Eg.a,
								...s
							};
							return bv(e, {
								[r.toLowerCase()]: {
									...a,
									karma: n
								}
							})
						}
						case Lr.k:
						case Lr.j: {
							const {
								imageUrl: r,
								key: s,
								username: a
							} = t.payload;
							if ("profileIcon" !== s) return e;
							const n = a.toLowerCase(),
								c = e[n];
							return c ? bv(e, {
								[n]: {
									...c,
									accountIcon: r
								}
							}) : e
						}
						case Lr.m: {
							const {
								additional: r,
								settings: s
							} = t.payload;
							if (r.enableFollowers === r.prevEnableFollowers) return e;
							const a = s.currentUserName.toLowerCase(),
								n = e[a];
							return n ? bv(e, {
								[a]: {
									...n,
									enableFollowers: r.enableFollowers
								}
							}) : e
						}
						default:
							return e
					}
				},
				yv = r("./src/reddit/actions/usernameAvailable.ts");
			const mv = {};
			var hv = (e = mv, t) => {
				switch (t.type) {
					case yv.a: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: yv.b.Available
						}
					}
					case yv.c: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: yv.b.Error
						}
					}
					case yv.d: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: yv.b.Pending
						}
					}
					case yv.e: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: yv.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			const Ev = {};
			var Ov = (e = Ev, t) => {
				switch (t.type) {
					case ee.gb: {
						const {
							userId: r,
							supportedSubreddits: s
						} = t.payload, a = {
							[r]: s
						};
						return {
							...e,
							...a
						}
					}
					default:
						return e
				}
			};
			var _v = (e = !1, t) => {
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
				Iv = Object(v.c)({
					allocationByKey: Ov,
					fetched: _v
				}),
				gv = r("./src/reddit/actions/presence.ts");
			const Sv = {};
			var vv = (e = Sv, t) => {
				switch (t.type) {
					case gv.a:
						return {
							...e, ...t.payload.presentUsers
						};
					default:
						return e
				}
			};
			var wv = (e = null, t) => {
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
			var jv = (e = !1, t) => {
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
				Tv = Object(v.c)({
					error: wv,
					pending: jv
				});
			var Dv = (e = null, t) => {
				switch (t.type) {
					case ee.yb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const Av = {};
			var Pv = (e = Av, t) => {
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
			const Rv = {};
			var Cv = (e = Rv, t) => {
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
							return xs()(e, [r])
						}
						default:
							return e
					}
				},
				Nv = Object(v.c)({
					api: Tv,
					currentPostId: Dv,
					currentRank: Pv,
					list: Cv
				}),
				kv = Object(v.c)({
					api: iv,
					appliedBadges: lv,
					models: fv,
					nameAvailable: hv,
					topAwarders: Nv,
					powerups: Iv,
					presence: vv
				});
			const Lv = {};
			var xv = (e = Lv, t) => {
					switch (t.type) {
						case F.b:
						case F.f:
						case W.SUBREDDIT_LOADED:
						case K.i:
						case H.SEARCH_RESULTS_RECEIVED:
						case Te.PAGE_LOADED:
						case Us.PAGE_LOADED: {
							const {
								structuredStyles: r
							} = t.payload;
							if (!(r && r.data && r.data.content)) return e;
							const s = r.data.content.widgets.layout.idCardWidget,
								a = Object.keys(t.payload.subredditAboutInfo || {});
							if (1 !== a.length) return e;
							const n = a[0];
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				Uv = r("./src/reddit/actions/widgets/constants.ts");
			const Mv = {};
			var Gv = (e = Mv, t) => {
					switch (t.type) {
						case F.b:
						case F.f:
						case H.SEARCH_RESULTS_RECEIVED:
						case K.i:
						case W.SUBREDDIT_LOADED:
						case Te.PAGE_LOADED: {
							const {
								structuredStyles: r
							} = t.payload;
							if (!(r && r.data && r.data.content)) return e;
							const s = r.data.content.widgets.items,
								a = r.data.content.widgets.layout.topbar.order.filter(e => s[e] && "menu" === s[e].kind);
							if (!a.length) return e;
							const n = Object.keys(t.payload.subredditAboutInfo || {});
							if (1 !== n.length) return e;
							const c = n[0];
							return {
								...e,
								[c]: a[0]
							}
						}
						case Uv.g: {
							const r = t.payload;
							return "menu" !== r.widget.kind ? e : {
								...e,
								[r.subredditId]: r.widgetId
							}
						}
						case Uv.h: {
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
				Fv = r("./src/reddit/models/Widgets/index.ts");
			const Bv = {};
			var qv = (e = Bv, t) => {
				switch (t.type) {
					case W.SUBREDDIT_LOADED: {
						const r = t.payload,
							s = r.structuredStyles && r.structuredStyles.data && r.structuredStyles.data.content;
						if (!s) return e;
						const a = s.widgets;
						return {
							...e,
							...a.items
						}
					}
					case Uv.b: {
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
								styles: Object(Fv.m)()
							}
						}), t
					}
					case Uv.e: {
						const r = t.payload;
						return {
							...e,
							...r.widgets.items
						}
					}
					case Uv.i:
					case Uv.g: {
						const r = t.payload;
						return {
							...e,
							[r.widget.id]: r.widget
						}
					}
					case Uv.h: {
						const r = t.payload,
							s = {
								...e
							};
						return delete s[r.widgetId], s
					}
					case F.b:
					case F.f:
					case W.SUBREDDIT_LOADED:
					case K.i:
					case H.SEARCH_RESULTS_RECEIVED:
					case Te.PAGE_LOADED:
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
					case eu.h: {
						const {
							userIsSubscriber: r,
							nameIdentifiers: s,
							widgetId: a
						} = t.payload;
						if (!a || !e[a] || "community-list" !== e[a].kind) return {
							...e
						};
						const n = r,
							c = e[a],
							o = c.data.map(e => {
								const t = {
									...e
								};
								return s.some(e => e.name === t.name) && (t.isSubscribed = n), t
							});
						return {
							...e,
							[a]: {
								...c,
								data: o
							}
						}
					}
					case yE.f: {
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
			const Vv = {};
			var Hv = (e = Vv, t) => {
				switch (t.type) {
					case W.SUBREDDIT_LOADED:
					case F.f:
					case K.i:
					case Te.PAGE_LOADED: {
						const {
							structuredStyles: r
						} = t.payload;
						if (!(r && r.data && r.data.content)) return e;
						const s = r.data.content.widgets.layout.moderatorWidget,
							a = Object.keys(t.payload.subredditAboutInfo || {});
						if (1 !== a.length) return e;
						const n = a[0];
						return {
							...e,
							[n]: s
						}
					}
					default:
						return e
				}
			};
			const Wv = {};
			var $v = (e = Wv, t) => {
				switch (t.type) {
					case W.SUBREDDIT_LOADED:
					case Te.PAGE_LOADED:
					case Us.PAGE_LOADED: {
						const r = t.payload,
							s = r.structuredStyles && r.structuredStyles.data && r.structuredStyles.data.content;
						if (!s) return e;
						const a = Object.keys(r.subredditAboutInfo || {});
						if (1 !== a.length) return e;
						const n = a[0],
							c = s.widgets.layout.sidebar.order;
						return {
							...e,
							[n]: c
						}
					}
					case Uv.e:
					case Uv.b: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: r.widgets.layout.sidebar.order
						}
					}
					case Uv.f: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: r.widgetIds
						}
					}
					case Uv.g: {
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
					case Uv.h: {
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
					case H.SEARCH_RESULTS_RECEIVED:
					case K.i:
					case Te.PAGE_LOADED:
					case Us.PAGE_LOADED: {
						const {
							structuredStyles: r
						} = t.payload;
						if (!(r && r.data && r.data.content)) return e;
						const s = r.data.content.widgets.layout.sidebar.order,
							a = Object.keys(t.payload.subredditAboutInfo || {});
						if (1 !== a.length) return e;
						const n = a[0];
						return {
							...e,
							[n]: s
						}
					}
					default:
						return e
				}
			};
			const Kv = {
				accountManagerModalData: n,
				activeModal: y,
				ads: _,
				apiRequestState: S,
				appBadges: R,
				authorFlair: Z,
				awards: $e,
				badges: ot,
				blockedRedditors: yt,
				blockUser: gt,
				brandSafety: vt,
				celebratoryMoments: Tt,
				chat: or,
				claimGold: yr,
				commentsListTruncated: hr,
				communityFlairs: _r,
				connection: Sr,
				contentControls: Nr,
				contentGate: Ur,
				continueThreads: Fr,
				creations: Ka,
				dashboard: za,
				discoveryUnits: pn,
				dismissedTruncationList: yn,
				economics: Un,
				emojis: Wn,
				experimentOverrides: zn,
				externalAccount: wc,
				featureFlags: Cc,
				focusedVerticals: Wc,
				fontFiles: Kc,
				gild: co,
				header: mo,
				htmlResponseStreaming: ho,
				imageUploads: _o,
				interceptedAction: go,
				isChangeUsernameTooltipShowing: vo,
				isEmailVerificationTooltipShowing: jo,
				isModeratorWithPostPerms: Do,
				jsApi: Ro,
				leaderboard: Fo,
				listings: Pd,
				live: Ld,
				mediaGalleries: Bd,
				mediaPlayback: Hd,
				meta: Kd,
				moderatingSubreddits: zd,
				modListingPage: si,
				modModeEnabled: ni,
				moreComments: bi,
				multireddits: cu,
				notificationBannerId: du,
				notificationsInbox: Eu,
				nps: Iu,
				page: Tu,
				platform: Pu,
				postCollection: ol,
				polls: Ju,
				postFlair: bl,
				posts: jb,
				postStickiedComments: Pb,
				givePremium: po,
				products: Wb,
				profileCommentsPage: cf,
				profilePrivatePage: Sf,
				profileModSettingsPage: lf,
				profilePostsPage: bf,
				profiles: sy,
				promos: dy,
				publicAccessNetwork: By,
				recentSubreddits: Wy,
				recommendations: Ky,
				reportPage: sm,
				reportRules: cm,
				requestHost: om,
				runTimeEnvVars: im,
				search: Sm,
				searchDiscoveryUnits: Rm,
				seo: Gm,
				shortcuts: Jm,
				sidebarPromotedPosts: Ym,
				streaming: ch,
				structuredStyles: wh,
				stylesheets: jh,
				subredditAutocomplete: Lh,
				subreddits: p_,
				subredditStickyPosts: y_,
				subscriptions: U_,
				survey: V_,
				tabBadged: W_,
				tags: yI,
				themes: II,
				toaster: vI,
				tooltipId: jI,
				tracing: AI,
				tracking: GI,
				trafficStats: VI,
				transfers: XI,
				trending: tg,
				trophies: ag,
				uploads: dg,
				user: ZS,
				userDataRequestPage: nv,
				upvotePromptCountPerSess: ug,
				users: kv,
				widgets: Object(v.c)({
					idCardIds: xv,
					menuIds: Gv,
					models: qv,
					moderatorIds: Hv,
					sidebar: $v
				})
			}
		},
		"./src/reddit/routes/premium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = r("./src/lib/constants/index.ts"),
				n = r("./src/reddit/actions/page.ts");
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
					action: n.e,
					chunk: a.q.PREMIUM,
					component: o,
					exact: !0,
					meta: {
						name: a.Jb.PREMIUM
					},
					path: c
				};
			t.a = d
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "c", (function() {
				return o
			}));
			var s = r("./src/reddit/selectors/user.ts");
			const a = e => e.blockedRedditors.api.pending,
				n = e => e.blockedRedditors.list,
				c = (e, t) => {
					const r = (e => {
						const t = n(e);
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
				return a
			})), r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/reddit/models/ChatSettingsPage/index.ts");
			const a = (e, {
					subredditId: t
				}) => !!e.chat.subredditSettingsPage.api.fetch.pending[t],
				n = (e, {
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
				return a
			}));
			const s = e => e.claimGold.code,
				a = e => e.claimGold.showModal
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
				a = r("./src/reddit/contexts/PageLayer/index.tsx"),
				n = r("./src/reddit/endpoints/governance/crypto.ts"),
				c = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/crypto/index.ts");
			Object(c.a)({
				features: {
					crypto: o.a
				}
			});
			const d = (e, t) => {
				var r, s, a;
				return t ? null === (a = null === (s = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === s ? void 0 : s.points) || void 0 === a ? void 0 : a[t] : void 0
			};

			function i() {
				const e = Object(a.db)(),
					t = Object(s.e)(t => Object(a.r)(t, {
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
				return s === n.a.Ethereum || s === n.a.Rinkeby || s === n.a.EthTraderEthereum || s === n.a.EthTraderRinkeby || s === n.a.ArbitrumRinkeby
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
				return h
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/values.js"),
				a = r.n(s),
				n = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/models/Flair/index.ts"),
				o = r("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				d = r("./src/reddit/selectors/subreddit.ts");
			const i = [],
				u = e => e.emojis.models,
				l = Object(n.a)(u, (e, t) => t.subredditId, (e, t) => {
					const r = e[t];
					return r ? [...a()(r.emojis), ...a()(r.snoomojis)] : i
				}),
				p = Object(n.a)(l, o.c, (e, t) => t.isFlairModOnly, (e, t) => t.flairTemplateType, (e, t, r, s) => e.filter(e => !(e.modFlairOnly && !t || e.modFlairOnly && !r) && (!(!e.userFlairAllowed && s === c.d.UserFlair) && !(!e.postFlairAllowed && s === c.d.LinkFlair)))),
				b = Object(n.a)(u, (e, t) => t.subredditId, (e, t) => Object.keys(e[t].snoomojis)),
				f = (e, t) => Object(d.w)(e, {
					subredditName: t
				}).emojisEnabled,
				y = {
					emojis: {},
					snoomojis: {}
				},
				m = (e, {
					subredditId: t
				}) => u(e)[t] || y,
				h = (e, t) => !!e.emojis.api.list.pending[t]
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
				a = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				c = r("./src/reddit/selectors/meta.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const d = Object(s.a)(c.c, e => !e),
				i = Object(s.a)(e => Object(n.c)(e, {
					experimentEligibilitySelector: e => d(e),
					experimentName: a.W,
					expEventOverride: !1
				}), e => e),
				u = e => e === a.O.Onetap,
				l = e => e === a.O.OnetapAuto,
				p = e => e.user.googleOneTapEnabled,
				b = Object(s.a)(o.J, i, (e, t) => !e && !!t),
				f = Object(s.a)(o.J, i, (e, t) => !e && !!t && !Object(a.ke)(t))
		},
		"./src/reddit/selectors/experiments/presenceIndicator.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return c
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/helpers/chooseVariant/index.ts");
			const n = e => {
					return Object(a.c)(e, {
						experimentEligibilitySelector: a.a,
						experimentName: s.hd
					}) === s.sd.Enabled
				},
				c = e => {
					return Object(a.c)(e, {
						experimentEligibilitySelector: a.a,
						experimentName: s.gd
					}) === s.rd.Enabled
				}
		},
		"./src/reddit/selectors/experiments/upvotePrompt.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return u
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/helpers/chooseVariant/index.ts"),
				n = r("./src/reddit/models/Vote/index.ts"),
				c = r("./src/reddit/selectors/posts.ts");
			const o = 5e3,
				d = 12e3,
				i = (e, t) => {
					const r = Object(c.I)(e, t);
					return r && (1 === (null == r ? void 0 : r.score) || 0 === (null == r ? void 0 : r.score)) && (null == r ? void 0 : r.voteState) === n.a.notVoted
				},
				u = (e, t) => {
					if (!i(e, t)) return !1;
					const r = Object(a.c)(e, {
						experimentEligibilitySelector: a.a,
						experimentName: s.ce
					});
					return r === s.de.Variant1 || r === s.de.Variant2
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
				return h
			})), r.d(t, "k", (function() {
				return E
			})), r.d(t, "a", (function() {
				return O
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
				return w
			})), r.d(t, "b", (function() {
				return j
			}));
			var s = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				a = r("./src/reddit/models/Flair/index.ts"),
				n = r("./src/reddit/models/ScheduledPost/index.ts");
			const c = (e, {
					subredditId: t
				}) => ((e, {
					subredditId: t,
					type: r
				}) => !!e.posts.scheduledPosts[r].models[t])(e, {
					subredditId: t,
					type: n.f.standalonePosts
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
				h = (e, {
					subredditId: t,
					scheduledPostId: r
				}) => m(e, {
					subredditId: t,
					scheduledPostId: r,
					type: n.f.standalonePosts
				}),
				E = (e, {
					subredditId: t,
					scheduledPostId: r
				}) => {
					const s = m(e, {
						subredditId: t,
						scheduledPostId: r,
						type: n.f.recurringPosts
					});
					return s || s
				},
				O = (e, {
					subredditId: t,
					scheduledPostId: r
				}) => h(e, {
					subredditId: t,
					scheduledPostId: r
				}) || E(e, {
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
					isOriginalContent: n
				}) => {
					const c = [];
					return n && c.push({
						text: "OC",
						type: a.f.Oc
					}), e && c.push(...Object(s.b)(e)), r && c.push({
						text: "spoiler",
						type: a.f.Spoiler
					}), t && c.push({
						text: "nsfw",
						type: a.f.Nsfw
					}), c
				})(e),
				g = ({
					scheduledPost: e
				}) => {
					const t = I({
							scheduledPost: e
						}),
						r = t.find(e => e.type === a.f.Richtext);
					return r || (t.find(e => e.type === a.f.Text) || null)
				},
				S = e => e.posts.scheduledPosts[n.f.recurringPosts].editModal.scheduledPostId,
				v = e => e.posts.scheduledPosts[n.f.recurringPosts].editModal.subredditId,
				w = e => e.posts.scheduledPosts.api.pendingUpdate,
				j = e => e.posts.scheduledPosts.api.creationToken
		},
		"./src/reddit/selectors/userDataRequest.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			}));
			const s = e => e.userDataRequestPage.userDataRequestPageApi.userDataExportEligibility,
				a = e => e.userDataRequestPage.userDataRequestPageApi
		},
		"./src/redditGQL/operations/CreateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"1e0a4bfe5ac9"}')
		},
		"./src/redditGQL/operations/CrowdControlLevelInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"975a7920607d"}')
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
		"./src/redditGQL/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/redditGQL/operations/SubredditScheduledPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"de72339b938a"}')
		},
		"./src/redditGQL/operations/SubredditTopContent.json": function(e) {
			e.exports = JSON.parse('{"id":"dd38535e7dd7"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.76fc5f20bc540e138910.js.map