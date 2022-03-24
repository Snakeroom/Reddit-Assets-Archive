// https://www.redditstatic.com/desktop2x/Governance~Reddit.3e368e0fb47398755148.js
// Retrieved at 3/24/2022, 3:40:05 PM by Reddit Dataminer v1.0.0
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
		"./node_modules/lodash/forOwn.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseForOwn.js"),
				n = r("./node_modules/lodash/_castFunction.js");
			e.exports = function(e, t) {
				return e && s(e, n(t))
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
		"./src/lib/intlList/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return o
			}));
			r("./node_modules/react/index.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js");
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
			t.c = function(e, t, r) {
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
		"./src/reddit/actions/category/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "d", (function() {
				return i
			}));
			const s = "CATEGORY__LIST_PENDING",
				n = "CATEGORY__LIST_LOADED",
				a = "CATEGORY__LIST_FAILED",
				c = "CATEGORY__SUBREDDITS_PENDING",
				o = "CATEGORY__SUBREDDITS_LOADED",
				d = "CATEGORY__SUBREDDITS_FAILED",
				i = "CATEGORY__RANK_SET"
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
								...Object(o.o)(t)
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
		"./src/reddit/actions/cooldownTime.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "e", (function() {
				return O
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/makeGqlRequest/index.ts");
			const a = {
				query: 'mutation GetPersonalizedTimer{\n  act(\n    input: {actionName: "r/replace:get_user_cooldown"}\n  ) {\n    data {\n      ... on BasicMessage {\n        id\n        data {\n          ... on GetUserCooldownResponseMessageData {\n            nextAvailablePixelTimestamp\n          }\n        }\n      }\n    }\n  }\n}\n\n\nsubscription SUBSCRIBE_TO_CONFIG_UPDATE {\n  subscribe(input: {channel: {teamOwner: AFD2022, category: CONFIG}}) {\n    id\n    ... on BasicMessage {\n      data {\n        ... on ConfigurationMessageData {\n          __typename\n          colorPalette {\n            colors {\n              hex\n              index\n            }\n          }\n          canvasConfigurations {\n            dx\n            dy\n            index\n          }\n          canvasWidth\n          canvasHeight\n        }\n      }\n    }\n  }\n}\n\n\nsubscription SUBSCRIBE_TO_CANVAS_UPDATE {\n  subscribe(\n    input: {channel: {teamOwner: AFD2022, category: CANVAS, tag: "0"}}\n  ) {\n    id\n    ... on BasicMessage {\n      id\n      data {\n        __typename\n        ... on DiffFrameMessageData {\n          currentTimestamp\n          previousTimestamp\n          name\n        }\n        ... on FullFrameMessageData {\n          __typename\n          name\n          timestamp\n        }\n      }\n    }\n  }\n}\n\n\n\n\nmutation SET_PIXEL {\n  act(\n    input: {actionName: "r/replace:set_pixel", PixelMessageData: {coordinate: { x: 53, y: 35}, colorIndex: 3, canvasIndex: 0}}\n  ) {\n    data {\n      ... on BasicMessage {\n        id\n        data {\n          ... on SetPixelResponseMessageData {\n            timestamp\n          }\n        }\n      }\n    }\n  }\n}\n\n\n\n\n# subscription configuration($input: SubscribeInput!) {\n#     subscribe(input: $input) {\n#       id\n#       ... on BasicMessage {\n#         data {\n#           __typename\n#           ... on RReplaceConfigurationMessageData {\n#             colorPalette {\n#               colors {\n#                 hex\n#                 index\n#               }\n#             }\n#             canvasConfigurations {\n#               index\n#               dx\n#               dy\n#             }\n#             canvasWidth\n#             canvasHeight\n#           }\n#         }\n#       }\n#     }\n#   }\n\n# subscription replace($input: SubscribeInput!) {\n#   subscribe(input: $input) {\n#     id\n#     ... on BasicMessage {\n#       data {\n#         __typename\n#         ... on RReplaceFullFrameMessageData {\n#           name\n#           timestamp\n#         }\n#         ... on RReplaceDiffFrameMessageData {\n#           name\n#           currentTimestamp\n#           previousTimestamp\n#         }\n#       }\n#     }\n#   }\n# }\n',
				variables: {
					input: {
						channel: {
							teamOwner: "GROWTH",
							category: "R_REPLACE",
							tag: "canvas:0:frames"
						}
					}
				},
				operationName: "GetPersonalizedTimer",
				id: null
			};
			var c = e => Object(n.a)(e, {
					...a
				}),
				o = r("./src/reddit/selectors/experiments/hotPotato.ts"),
				d = r("./src/reddit/selectors/user.ts");
			const i = "FETCH_COOLDOWN_TIMER__PENDING",
				u = "FETCH_COOLDOWN_TIMER__SUCCESS",
				l = "FETCH_COOLDOWN_TIMER__FAILED",
				p = Object(s.a)(i),
				b = Object(s.a)(u),
				f = Object(s.a)(l),
				y = "SET__COOLDOWN_TIMER",
				m = Object(s.a)(y),
				O = () => async (e, t, {
					gqlRealtime2Context: r
				}) => {
					const s = t(),
						n = Object(d.P)(s),
						a = !!Object(o.a)(s),
						{
							expiresAt: i,
							api: {
								pending: u
							}
						} = s.cooldownTimer,
						l = i <= Date.now();
					if (!n || !r || !l || !a || u) return;
					e(p());
					const y = await c(r());
					if (y.ok && y.body) {
						const t = y.body.data.act.data.find(e => e.data.nextAvailablePixelTimestamp),
							r = (null == t ? void 0 : t.data.nextAvailablePixelTimestamp) || null;
						e(m({
							expiresAt: r
						})), e(b())
					} else e(f({
						error: null == y ? void 0 : y.error
					}))
				}
		},
		"./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "e", (function() {
				return h
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/GetSubredditCountrySiteSettings.json"),
				c = r("./src/redditGQL/operations/UpdateSubredditCountrySiteSettings.json");
			const o = e => ({
				input: {
					subredditId: e.subredditId,
					countryCode: e.countryCode || "",
					languageCode: e.languageCode || ""
				}
			});
			var d = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/actions/toaster.ts");
			const l = "SUBREDDIT_COUNTRY_SITE__LOADED",
				p = "SUBREDDIT_COUNTRY_SITE__CHANGED",
				b = "SUBREDDIT_COUNTRY_SITE__UPDATE_SUCCESS",
				f = Object(s.a)(l),
				y = Object(s.a)(b),
				m = Object(s.a)(p),
				O = e => async (t, r, {
					gqlContext: s
				}) => {
					var c;
					if (!e) return;
					const o = await (async (e, t) => Object(n.a)(e, {
							...a,
							variables: {
								subredditId: t
							}
						}))(s(), e),
						d = o.body;
					o && o.ok && d && t(f({
						subredditId: e,
						subredditCountrySite: null === (c = d.data) || void 0 === c ? void 0 : c.subredditInfoById.countrySiteSettings
					}))
				}, h = (e, t) => async (r, s, {
					gqlContext: a
				}) => {
					if (!e) return;
					const l = await (async (e, t) => Object(n.a)(e, {
						...c,
						variables: o(t)
					}))(a(), {
						subredditId: e,
						countryCode: t.countryCode,
						languageCode: t.languageCode
					});
					if (!l.ok) return r(Object(u.f)({
						kind: i.b.Error,
						text: d.fbt._("Something went wrong", null, {
							hk: "2PnKbu"
						}),
						duration: 5e3
					}));
					const p = l.body;
					r(y({
						subredditId: e,
						subredditCountrySite: p.data.updateSubredditCountrySiteSettings.subreddit.countrySiteSettings
					}))
				}
		},
		"./src/reddit/actions/crosspostSubredditRec/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return d
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return u
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/postCreation/general.ts"),
				a = r("./src/reddit/selectors/experiments/crosspostRecommendations.ts");
			var c = r("./src/lib/initializeClient/installReducer.ts");
			var o = (e = !1, t) => {
				switch (t.type) {
					case "CROSSPOST_RECOMMENDATIONS__SHOULD_TRY_TO_RENDER":
						return !0;
					case "CROSSPOST_RECOMMENDATIONS__STOP_TRYING_TO_RENDER":
						return !1;
					default:
						return e
				}
			};
			Object(c.a)({
				features: {
					shouldTryToShowCrosspostModal: o
				}
			});
			const d = Object(s.a)("CROSSPOST_RECOMMENDATIONS__SHOULD_TRY_TO_RENDER"),
				i = Object(s.a)("CROSSPOST_RECOMMENDATIONS__STOP_TRYING_TO_RENDER"),
				u = e => async (t, r) => {
					const s = r();
					if (!Object(a.b)(s)) return;
					const c = e.title,
						o = Object(a.d)(e),
						d = Object(a.c)(e);
					t(Object(n.j)(c, o, d, t => {
						const r = e.belongsTo.id === t.id,
							s = "isCrosspostDestination" in t && t.isCrosspostDestination;
						return r || !s
					}))
				}
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
				return T
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
				return G
			})), r.d(t, "l", (function() {
				return F
			})), r.d(t, "m", (function() {
				return q
			})), r.d(t, "j", (function() {
				return W
			})), r.d(t, "k", (function() {
				return H
			})), r.d(t, "b", (function() {
				return V
			})), r.d(t, "n", (function() {
				return $
			})), r.d(t, "e", (function() {
				return K
			})), r.d(t, "o", (function() {
				return Y
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
				T = "STRUCTURED_STYLES__EMOJI_DELETE_FAILED",
				D = Object(p.a)(j),
				w = Object(p.a)(T),
				P = "GET_ALL_EMOJIS_PENDING",
				A = "GET_ALL_EMOJIS_LOADED",
				C = "GET_ALL_EMOJIS_FAILED",
				R = Object(p.a)(P),
				N = Object(p.a)(A),
				k = Object(p.a)(C),
				L = "STRUCTURED_STYLES__EMOJIS_ENABLED_SETTING_LOADED",
				x = Object(p.a)(L),
				U = e => ({
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
						l = Object(g.S)(a, {
							subredditId: t
						}).name;
					r(Object(b.k)(e));
					const p = e.file,
						f = await Object(O.h)(p),
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
				}, B = (e, t) => async (r, s, n) => {
					const {
						imageData: a,
						subredditId: i,
						emojiName: l,
						settings: p
					} = e, y = Object(m.a)(a.url), O = s(), h = Object(g.S)(O, {
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
				}, G = e => async (t, r, s) => {
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
						d = await B(e, i)(t, r, s)
					}, i.onmessage = r => {
						const s = JSON.parse(r.data);
						if ("success" === s.type) {
							d = !0;
							const e = s.payload.emoji_url,
								r = Object(E.o)(n, e);
							t(Object(b.l)(r));
							const i = Object(h.e)(c, r.url, a, o);
							t(v(i)), t(F(a))
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
				}, F = e => async (t, r, {
					apiContext: s
				}) => {
					const n = r();
					if (Object(I.a)(n, e)) return;
					const a = Object(g.S)(n, {
						subredditId: e
					}).name;
					t(R(e));
					const c = await l(s(), a);
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
					r().emojis[e] || await t(F(e))
				}, W = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const i = n(),
						l = Object(g.S)(i, {
							subredditId: t
						}).name,
						p = await (async (e, t, r) => Object(o.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/v1/${r}/emoji/${t}`,
							method: c.jb.DELETE,
							type: "json"
						}))(a(), e, l);
					if (p.ok) {
						r(D({
							emojiName: e,
							subredditId: t
						})), r(f.f({
							kind: _.b.SuccessCommunityGreen,
							text: s.fbt._("Emoji successfully deleted", null, {
								hk: "1zMXEe"
							})
						}))
					} else r(w(p.error)), r(f.f({
						kind: _.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, H = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const i = n(),
						l = Object(g.S)(i, {
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
				}, V = "EMOJI_CUSTOM_SIZE_UPDATED", Q = Object(p.a)(V), $ = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const i = n(),
						l = Object(g.S)(i, {
							subredditId: e
						}).name;
					(await (async (e, t, r) => Object(o.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji_custom_size`,
						method: c.jb.POST,
						data: r
					}))(a(), l, t)).ok ? r(Q({
						subredditId: e,
						emojiCustomSize: t
					})) : r(f.f({
						kind: _.b.Error,
						text: s.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}, K = "EMOJI_PERMISSIONS_UPDATED", z = Object(p.a)(K), Y = (e, t, r, n) => async (a, i, {
					apiContext: l
				}) => {
					const p = i(),
						b = Object(g.S)(p, {
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
						d = Object(u.S)(c, {
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
		"./src/reddit/actions/global/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = "LOCAL_STORAGE_LOADED"
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
						s = Object(i.P)(r),
						n = Object(d.b)(r);
					s && Object(d.d)(n) && e(l())
				}, b = () => async (e, t) => {
					const r = t(),
						s = Object(i.P)(r),
						a = Object(d.b)(r),
						c = !!Object(o.a)(r);
					s || c || !Object(d.e)(a) && !Object(d.d)(a) || e(Object(n.f)())
				}, f = e => {
					Object(c.d)(e, {
						experimentName: a.tb
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
				return T
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
				T = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
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
				return w
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
				T = Object(n.a)(h.k),
				D = Object(n.a)(h.q),
				w = Object(n.a)(h.r),
				P = Object(n.a)(h.s),
				A = Object(n.a)(h.t),
				C = Object(n.a)(h.u),
				R = Object(n.a)(h.v),
				N = Object(n.a)(h.w),
				k = Object(n.a)(h.x),
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
						} else r(T(c.body));
						const n = s();
						if ((d = n.polls.models[e]) && Object(l.d)(d)) {
							const {
								postId: e
							} = d, t = n.posts.models[e];
							t && t.voteState === m.a.notVoted && r(Object(o.kb)(e))
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
					})), t && r(Object(c.f)())) : (r(D({
						error: p.error
					})), Object(E.a)(r, p.error))
				}, U = e => async (t, r, {
					apiContext: s
				}) => {
					t(R());
					const n = await Object(f.a)(s(), e);
					n.ok ? t(N(n.body)) : t(C({
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
		"./src/reddit/actions/inAppNotifications/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = "IN_APP_NOTIFICATIONS__SHOULD_HIDE"
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
		"./src/reddit/actions/langSite/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "LANG_SITE_BANNER_CLOSED",
				a = Object(s.a)(n)
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
				return T
			})), r.d(t, "v", (function() {
				return D
			})), r.d(t, "w", (function() {
				return w
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
				T = 10,
				D = "MULTIREDDIT__REMOVE_SUBREDDIT_FAILURE",
				w = "MULTIREDDIT__REMOVE_SUBREDDIT_PENDING",
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
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "i", (function() {
				return l
			})), r.d(t, "j", (function() {
				return p
			})), r.d(t, "k", (function() {
				return b
			}));
			const s = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__FAILED",
				n = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__LOADED",
				a = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__PENDING",
				c = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__FAILED",
				o = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__LOADED",
				d = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__PENDING",
				i = "NOTIFICATION_SETTINGS_LAYOUT_UPDATED",
				u = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_FAILED",
				l = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_LOADED",
				p = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_PENDING",
				b = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_UPDATED"
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
				return T
			}));
			var s = r("./node_modules/react-router-redux/es/index.js"),
				n = r("./src/reddit/actions/pages/subreddit.ts"),
				a = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/pageTitle/index.ts"),
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
				if (l.route && l.route.meta && (l.route.meta.name === a.Nb.INDEX || l.route.meta.name === a.Nb.MULTIREDDIT || l.route.meta.name === a.Nb.SUBREDDIT)) p ? window.open(u.url) : r ? c(Object(s.b)(u.url)) : await c(l.route.action(u, !0));
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
				})), Object(h.P)(r) || await e(O.t())
			}, j = () => async e => e(i.m({
				title: c.b()
			})), T = e => async (t, s) => {
				const n = s();
				t(i.m({
					title: c.j()
				})), Object(h.P)(n) || await t(O.t());
				const a = Object(h.P)(n);
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
				T = Object(d.a)(g),
				D = Object(d.a)(S),
				w = Object(d.a)(v),
				P = Object(d.a)(j),
				A = e => async (t, r) => {
					const s = {
						subredditId: e
					};
					return !!Object(I.b)(r(), s) || (t(w(s)), !1)
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
							d = !Object(_.a)(r(), n),
							i = Object(h.c)(o, e, d);
						a = {
							...n,
							chatSettings: i
						}
					}
					if (a) t(T(a));
					else {
						const r = c.error || {
							type: o.I.UNKNOWN_ERROR
						};
						t(D({
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
					})), n(k(t, p)), r) : (i && n(D({
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
				}, N = {
					start_chatting_opt_out: (e, t, r) => ({
						source: O.b.Chat,
						action: O.a.OptOut,
						noun: "down_to_chat_subreddit",
						subreddit: Object(m.ib)(e),
						setting: {
							oldValue: t,
							value: r
						},
						...Object(m.o)(e)
					})
				}, k = (e, t) => async (r, s) => {
					t.forEach(t => {
						if (t && t.settingId) {
							const r = N[t.settingId],
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
					const s = [t(n.A()), t(Object(a.d)(e.params.profileName))];
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
				return N
			})), r.d(t, "b", (function() {
				return L
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "c", (function() {
				return M
			})), r.d(t, "e", (function() {
				return B
			})), r.d(t, "d", (function() {
				return G
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
				...E.o(e),
				screen: E.ab(e),
				profile: E.R(e),
				subreddit: E.ib(e)
			});
			var g = r("./src/reddit/helpers/trackers/postComposer.ts"),
				S = r("./src/reddit/models/Gold/Powerups/index.ts"),
				v = r("./src/reddit/models/PostCreationForm/index.ts"),
				j = r("./src/reddit/models/Toast/index.ts"),
				T = r("./src/reddit/selectors/gold/powerups/index.ts"),
				D = r("./src/reddit/selectors/postCreations.ts"),
				w = r("./src/reddit/actions/postCreation/constants.ts"),
				P = r("./src/reddit/actions/postCreation/general.ts");
			const A = Object(d.a)(w.u),
				C = Object(d.a)(w.v),
				R = Object(d.a)(w.t),
				N = e => async (t, r) => {
					t(A());
					const s = e.map(({
						url: e,
						uploadKey: r
					}) => {
						const s = Object(O.b)(Object(O.d)(e), "poster.png");
						return t(U(s, r))
					});
					await Promise.all(s);
					const n = r().uploads,
						a = e.map(({
							uploadKey: e
						}) => n[e]).find(e => e.status !== h.a.SUCCESS);
					t(a ? R(a.error) : C())
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
				U = (e, t, r, n) => async (a, o, {
					apiContext: d
				}) => {
					const i = Object(D.h)(o()),
						l = Date.now();
					let v = null,
						j = !1,
						w = !1,
						P = !1;
					const A = e => {
						if (!P && r && j) {
							P = !0;
							const s = o(),
								n = Date.now() - l,
								a = Object(y.c)(y.a.PostComposer);
							w ? (async ({
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
									source: "post_composer",
									action: "upload",
									correlationId: c,
									noun: f ? "video" : "image",
									...I(e),
									actionInfo: {
										...E.d(e),
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
							}) : g.D(s, t)
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
								o = await Object(O.h)(t) || t.type,
								d = Object(O.c)(t) || void 0;
							if (!d) return k("UNSUPPORTED_BROWSER");
							const i = {
								localUrl: d,
								mimetype: o
							};
							if (!o || !Object(O.j)(o)) return {
								error: {
									type: c.T
								}
							};
							if (o.startsWith("image/")) {
								if (n && !n.images) {
									const e = s.fbt._("Images are not allowed in r/{subredditName}", [s.fbt._param("subredditName", a)], {
										hk: "3C2E7Q"
									});
									return k(c.T, e)
								}
								if ("image/gif" === o) {
									if (t.size > c.Z) return k(c.L)
								} else if (t.size > c.bb) return k(c.R);
								const e = await Object(m.a)(d);
								i.width = e.width, i.height = e.height
							} else if (o.startsWith("video/")) {
								const o = !(null == r || !r.id) && Object(T.p)(e, {
										subredditId: r.id,
										benefit: S.a.HdVideo
									}),
									l = o ? 2 * c.fb : c.fb;
								if (t.size > l) return k(c.oc);
								let p;
								try {
									p = await Object(O.i)(d, !0)
								} catch (u) {
									return k(c.T)
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
										return k(c.T, e)
									}
									if (!t && !e) {
										const e = s.fbt._("Videos are not allowed in r/{subredditName}", [s.fbt._param("subredditName", a)], {
											hk: "4uTUZb"
										});
										return k(c.T, e)
									}
								}
								const b = o ? 2 * c.eb : c.eb;
								if (p.duration > b) {
									const e = s.fbt._("Video is too long. Maximum video length is {duration} minutes.", [s.fbt._param("duration", (b / 60).toString())], {
										hk: "20nB6Q"
									});
									return k(c.T, e)
								}
								if (p.duration < c.mb) {
									const e = s.fbt._("Video is too short. Minimum video length is {duration} seconds.", [s.fbt._param("duration", c.mb.toString())], {
										hk: "49PSW8"
									});
									return k(c.T, e)
								}
								if (0 === p.height || 0 === p.width) {
									const e = s.fbt._("Your browser does not support the video codec used for this video. Please try using a different video codec.", null, {
										hk: "1AC0mg"
									});
									return k(c.T, e)
								}
								if (p.height < c.nb || p.width < c.ob) {
									const e = s.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [s.fbt._param("min_video_width", c.ob.toString()), s.fbt._param("min_video_height", c.nb.toString())], {
										hk: "2HSUGl"
									});
									return k(c.T, e)
								}
								if (t.size / p.duration < c.lb) {
									const e = s.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [s.fbt._param("min_bitrate", (c.lb / c.U).toString())], {
										hk: "1ehgDE"
									});
									return k(c.T, e)
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
						})), w = !0, n && n();
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
				}, B = (e, t, r) => async (n, c) => {
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
				}, G = (e, t) => async (r, n) => {
					const a = n(),
						c = Object(D.W)(a),
						{
							items: o
						} = c,
						d = !o.length && 1 === e.length,
						p = Object(D.N)(a) && !d;
					let b = !1,
						f = e;
					if (p) {
						if (Object(v.x)(c)) return void r(Object(i.f)({
							kind: j.b.Error,
							text: s.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						f.some(e => Object(O.m)(e.type)) && r(Object(i.f)({
							kind: j.b.Error,
							text: s.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), f = f.filter(e => Object(O.l)(e.type));
						const e = Math.max(0, l.b - o.length);
						f.length > e && (r(Object(i.f)({
							kind: j.b.Error,
							text: s.fbt._("You have hit the limit of {images_limit} images", [s.fbt._param("images_limit", `${l.b}`)], {
								hk: "6M4kX"
							})
						})), f = f.slice(0, e))
					} else f = f.slice(0, 1), b = !0, r(Object(u.j)(x, !0));
					const y = await r(B(f, t, x));
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
				return te
			})), r.d(t, "a", (function() {
				return oe
			})), r.d(t, "b", (function() {
				return ue
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/telemetry/index.ts"),
				c = r("./src/reddit/actions/crosspostSubredditRec/index.ts"),
				o = r("./src/reddit/actions/governance/index.ts"),
				d = r("./src/reddit/actions/pages/subreddit.ts"),
				i = r("./src/reddit/actions/postDraft.ts"),
				u = r("./src/reddit/actions/scheduledPosts/index.ts"),
				l = r("./src/reddit/actions/urlRequested.ts"),
				p = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				b = r("./src/config.ts"),
				f = r("./src/lib/convertToCamelCase/index.ts"),
				y = r("./src/lib/makeApiRequest/index.ts"),
				m = r("./node_modules/node-libs-browser/node_modules/url/url.js"),
				O = r("./src/lib/omitHeaders/index.ts"),
				h = r("./src/reddit/constants/headers.ts"),
				E = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				_ = r("./src/reddit/helpers/flair.ts"),
				I = r("./src/reddit/helpers/name/index.ts"),
				g = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				S = r("./src/reddit/models/Poll/index.ts"),
				v = r("./src/reddit/models/Post/index.ts"),
				j = r("./src/reddit/models/PostCreationForm/index.ts"),
				T = r("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function D(e) {
				return Math.floor(e.valueOf() / 1e3)
			}
			const w = e => {
					switch (e.kind) {
						case j.p.CROSSPOST:
							return j.p.CROSSPOST;
						case j.p.LINK:
							return j.p.LINK;
						case j.p.POLL:
							return j.p.POLL;
						case j.p.MEDIA:
							return e.makeGif ? j.p.VIDEO_GIF : e.mediaType;
						default:
							return "self"
					}
				},
				P = e => {
					switch (e.kind) {
						case j.p.RICH_TEXT:
							return {
								richtext_json: JSON.stringify({
									document: e.document
								})
							};
						case j.p.MARKDOWN:
							return {
								text: e.markdown
							};
						case j.p.LINK:
						case j.p.MEDIA:
							return {
								url: e.url
							};
						case j.p.CROSSPOST:
							return {
								crosspost_fullname: e.sourcePostId
							};
						case j.p.POLL:
							return e.poll.type === S.a.Prediction ? {
								duration: 999999,
								end_timestamp: D(e.poll.endDate),
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
					const t = Object(I.g)(e.destSubreddit.name);
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
						discussion_type: e.isChatPost ? v.b.Chat : void 0,
						spoiler: e.isSpoiler,
						nsfw: e.isNSFW,
						...e.kind !== j.p.POLL ? {
							kind: w(e),
							original_content: e.isOC
						} : {},
						post_to_twitter: e.postToTwitter,
						sendreplies: e.sendReplies,
						...e.gRecaptchaResponse ? {
							"g-recaptcha-response": e.gRecaptchaResponse
						} : {},
						resubmit: e.resubmit,
						...P(e),
						...e.kind === j.p.MEDIA && "video" === e.mediaType ? {
							video_poster_url: e.videoThumbnailUrl
						} : {},
						...e.kind === j.p.MEDIA && e.makeGif ? {
							make_gif: "on"
						} : {},
						...e.flair ? {
							flair_id: e.flair.templateId,
							flair_text: Object(_.g)(e.flair)
						} : {},
						...e.validate_on_submit ? {
							validate_on_submit: e.validate_on_submit
						} : {},
						...e.eventSchedule && {
							event_start: e.eventSchedule.startDate,
							event_end: e.eventSchedule.endDate,
							event_tz: e.eventSchedule.timezoneName,
							unlist: e.eventSchedule.submitTime === j.j.AtEventTime
						},
						...e.collectionId && {
							collection_id: e.collectionId
						}
					}
				},
				C = async (e, t) => {
					if (!e.ok) return Object(g.b)(e);
					const r = e.body.json.data;
					let n = r.url;
					n || t.kind !== j.p.MEDIA || (n = await ((e, t) => new Promise(r => {
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
						c = Object(m.parse)(n).path,
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
			var R = (e, t) => Object(y.a)(Object(O.a)(e, [h.a]), {
				endpoint: Object(T.a)(Object(E.a)(`${e.apiUrl}/api/submit?resubmit=true`)),
				method: s.jb.POST,
				data: A(t)
			}).then(async e => await C(e, t));
			var N = r("./src/reddit/endpoints/scheduledPosts/index.ts"),
				k = r("./src/reddit/endpoints/scheduledPosts/update.ts"),
				L = r("./src/reddit/featureFlags/index.ts"),
				x = r("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				U = r("./src/reddit/helpers/scheduledPosts/index.ts"),
				M = r("./src/reddit/helpers/trackers/postComposer.ts"),
				B = r("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				G = r("./src/reddit/models/User/index.ts"),
				F = r("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				q = r("./src/reddit/selectors/postCreations.ts"),
				W = r("./src/reddit/selectors/postDraft.ts"),
				H = r("./src/reddit/selectors/scheduledPosts/index.ts"),
				V = r("./src/reddit/selectors/user.ts"),
				Q = r("./src/reddit/models/ScheduledPost/index.ts"),
				$ = r("./src/reddit/actions/postCreation/constants.ts"),
				K = r("./src/reddit/actions/postCreation/general.ts"),
				z = r("./src/reddit/actions/postCreation/mediaUpload.ts");
			const Y = Object(n.a)($.w),
				X = Object(n.a)($.P),
				J = Object(n.a)($.o),
				Z = Object(n.a)($.y),
				ee = Object(n.a)($.cb),
				te = Object(n.a)($.J),
				re = Object(n.a)($.a),
				se = Object(n.a)($.F),
				ne = e => `/r/${e}/about/${Q.r}`,
				ae = (e, t) => {
					const r = e || {
							duration: s.B,
							options: []
						},
						{
							govType: n,
							newSubreddit: a,
							newTopMod: c
						} = Object(q.u)(t),
						o = {
							...r
						};
					return n && (o.type = n), o.type === S.a.ReplaceTopMod ? (o.params = {
						userName: c
					}, o.options = S.f[S.a.ReplaceTopMod]()) : o.type === S.a.Spinoff ? (o.params = {
						subreddit: a
					}, o.options = S.f[S.a.Spinoff](a)) : o.options = o.options.map(e => ({
						text: e.text.trim()
					})).filter(e => !!e.text), o
				},
				ce = e => {
					const t = e.uploads,
						r = Object(q.W)(e),
						n = Object(q.a)(e),
						a = Object(q.gb)(e);
					if (n === s.Wb.POST) return p.a.getPendingThumbnailUploads(a, t);
					if (n === s.Wb.MEDIA && r && r.items.length) {
						const {
							video: e
						} = r.items[0];
						if (e && e.thumbnail && !t[j.n]) return [{
							...e.thumbnail,
							uploadKey: j.n
						}]
					}
				},
				oe = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					let c = n();
					const {
						pending: o
					} = c.creations.api.post.submit, d = Object(W.g)(c);
					if (o || d) return;
					r(se(e)), c = n();
					const u = Object(q.a)(c),
						l = L.d.rteVideoPoster(c),
						p = ce(c),
						b = u === s.Wb.MEDIA;
					p && (l || b) && (await r(z.f(p)), ce(n())) || (e === j.r.Draft ? await r(Object(i.r)(t.draftId)) : e === j.r.ScheduledPost && Object(H.r)(c) ? await r(de(t)) : e === j.r.ScheduledPost ? await r(ie(t)) : await r(ue(t)))
				}, de = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = r(),
						c = Object(q.db)(n),
						o = Object(q.eb)(n, e),
						d = Object(q.h)(n),
						i = Object(H.r)(n);
					if (!(o && d.id && c && Object(U.f)(i))) return;
					const p = d.id,
						b = Object(H.a)(n, {
							subredditId: p,
							scheduledPostId: i
						});
					if (b && Object(a.a)(Object(B.r)(b)(n)), t(Y(o)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(q.x)(r()))) return;
					const {
						isPoll: f,
						polls: y
					} = Object(q.u)(n), m = ae(y, n), O = {
						...Object(N.e)({
							poll: f ? m : void 0,
							submission: o,
							schedule: c,
							subredditId: d.id,
							scheduledPostId: i
						})
					}, h = await Object(k.a)(s(), O);
					if (h.ok) return t(Object(u.e)({
						subredditId: d.id
					})), void t(Object(l.a)(ne(d.name), !1));
					const E = h.error;
					t(J(E))
				}, ie = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = r(),
						c = Object(q.db)(n),
						o = Object(q.eb)(n, e),
						d = Object(q.h)(n),
						i = Object(H.b)(n);
					if (!o || !d.id || !c) return;
					if (t(Y(o)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(q.x)(r()))) return;
					const {
						isPoll: p,
						polls: b
					} = Object(q.u)(n), f = ae(b, n), y = {
						duration: f.duration,
						options: f.options
					}, m = {
						...Object(N.d)({
							poll: p ? y : void 0,
							submission: o,
							schedule: c,
							subredditId: d.id
						}),
						creationToken: i
					}, O = await Object(N.a)(s(), m);
					if (O.ok) {
						t(Object(u.e)({
							subredditId: d.id
						}));
						const e = O.body.data.createScheduledPost.scheduledPost;
						return e && Object(a.a)(Object(B.o)(Object(x.d)(e))(n)), void t(Object(l.a)(ne(d.name), !1))
					}
					const h = O.error;
					t(J(h))
				}, ue = e => async (t, r, {
					apiContext: n
				}) => {
					const a = r(),
						i = Object(q.eb)(a, e),
						{
							isPoll: u,
							polls: p
						} = Object(q.u)(a),
						m = ae(p, a);
					if (!i) return;
					if (t(Y(i)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(q.x)(r()))) return;
					let _;
					const I = u && L.d.spPolls(a);
					if ((_ = I ? await
							function(e, t, r) {
								const n = t.destSubreddit.id;
								return Object(y.a)(e, {
									method: s.jb.POST,
									endpoint: `${b.a.metaUrl}/polls/${n}`,
									type: "json",
									data: {
										poll: r,
										subredditId: n,
										...Object(f.a)(A(t))
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
										s = await C(r, t);
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
							}(n(), i, m) : u ? await ((e, t) => Object(y.a)(Object(O.a)(e, [h.a]), {
								endpoint: Object(T.a)(Object(E.a)(`${e.apiUrl}/api/submit_poll_post.json?resubmit=true`)),
								method: s.jb.POST,
								data: A(t),
								type: "json"
							}).then(e => C(e, t)))(n(), {
								...i,
								kind: j.p.POLL,
								poll: m
							}) : i.kind === j.p.GALLERY ? await ((e, t) => Object(y.a)(Object(O.a)(e, [h.a]), {
								endpoint: Object(T.a)(Object(E.a)(`${e.apiUrl}/api/submit_gallery_post.json?resubmit=true`)),
								method: s.jb.POST,
								data: {
									...A(t),
									items: t.galleryItems.map(e => ({
										caption: e.caption,
										outbound_url: e.url,
										media_id: e.assetId
									}))
								},
								type: "json"
							}).then(e => C(e, t)))(n(), i) : await R(n(), i)).ok) {
						const e = Object(V.k)(a),
							r = _.body;
						t(X({
							draftId: i.draftId,
							response: r
						})), I && t(Object(o.c)({
							poll: r.poll
						}));
						const s = Object(F.b)(a);
						i.kind !== j.p.LINK && i.kind !== j.p.RICH_TEXT && i.kind !== j.p.MARKDOWN || u || !s || t(Object(c.c)());
						const n = (r.path || `/user/${Object(G.e)(e)}/posts`).replace(/^\/r\/u_/, "/user/");
						t(Object(d.subredditInvalidateListing)(i.destSubreddit.name)), t(Object(l.a)(n, !1))
					} else {
						if (u) {
							const e = _.error;
							t(Z(e))
						}
						const e = _.error;
						e.type === s.I.BAD_CAPTCHA_ERROR ? t(re()) : e.type === s.I.VALIDATION_ERROR ? t(ee(e)) : e.type === s.I.SUBMIT_VALIDATION_ERROR ? t(te(e)) : t(J(e))
					}
					const g = Object(K.o)(i.kind),
						S = _.ok && _.body && _.body.id && Object(v.t)(_.body.id),
						D = r();
					M.B(D, g, S, e.correlationId)
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
				return w
			})), r.d(t, "a", (function() {
				return P
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "b", (function() {
				return N
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
			const T = e => g.d.reCaptchaEnterprise(e) && !Object(j.d)(e),
				D = e => !!Object(v.c)(e, {
					experimentEligibilitySelector: Object(S.d)(Object(S.b)(...a.d)),
					experimentName: b.Fe
				}),
				w = Object(s.b)("LOAD_RECAPTCHA_ENTERPRISE"),
				P = Object(s.b)("EXECUTE_RECAPTCHA_ENTERPRISE"),
				A = Object(s.b)("SEND_RECAPTCHA_TOKEN"),
				C = e => u(e => p()([T, D, e => e.tracking.reCaptchaEnterprise.send === s.a.New && e.tracking.reCaptchaEnterprise.execute === s.a.Succeeded && e.tracking.reCaptchaEnterprise.load === s.a.Succeeded], t => t(e)))(async (t, r, {
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
				N = (e = d.a.PageLoad) => u(e => p()([T, D, e => e.tracking.reCaptchaEnterprise.load === s.a.New], t => t(e)))(async (t, r) => {
					const a = r();
					try {
						await t((() => u(e => p()([T, D, e => e.tracking.reCaptchaEnterprise.load === s.a.New], t => t(e)))(async e => {
							e(w.requested());
							try {
								await d.b.loadScript(), e(w.succeeded())
							} catch (t) {
								throw e(w.failed()), t
							}
						}))());
						const r = await t((e => u(e => p()([T, D, e => e.tracking.reCaptchaEnterprise.load === s.a.Succeeded && e.tracking.reCaptchaEnterprise.execute === s.a.New], t => t(e)))(async t => {
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
				return T
			})), r.d(t, "t", (function() {
				return D
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
				T = () => s.fbt._("Successfully edited scheduled post!", null, {
					hk: "HfGcT"
				}),
				D = () => s.fbt._("Failed to update scheduled post", null, {
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
				return D
			})), r.d(t, "a", (function() {
				return w
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
				T = (e, t) => {
					e(v()), e(Object(o.f)(Object(o.e)(a.r(), p.b.Error, a.s(), D(t))))
				},
				D = ({
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
					Object(d.f)(u, o) ? P(n, Object(i.e)(u.body.data), o) : T(n, o)
				}, w = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = r();
					if (!Object(b.h)(n, {
							subredditId: e
						})) return t(D({
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
					Object(i.b)(t) ? e(_(t)) : Object(i.a)(t) ? e(g(t)) : Object(i.c)(t) ? e(I(t)) : T(e, r)
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
			var b = (e, t) => {
				const r = {
					withAds: 1,
					ad: Object(o.a)(window.location.href).get("ad"),
					subplacement: t
				};
				return Object(d.a)(Object(i.a)(e, [u.a]), {
					endpoint: `${e.apiUrl}/api/trending_searches_v1.json`,
					method: c.jb.GET,
					data: r
				})
			};
			const f = "PAGE__TRENDING_SEARCHES_LOADED",
				y = Object(s.a)(f),
				m = e => async (t, r, {
					apiContext: s
				}) => {
					const n = await b(s(), e);
					if (n.ok) {
						const r = (e => {
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
						})(n);
						return t(y({
							items: r,
							subplacement: e
						})), r
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
					const a = Object(l.S)(r(), {
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
				return a
			})), r.d(t, "a", (function() {
				return c
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/endpoints/subreddit/recommendations.ts");
			const a = (e, t) => async (r, s, {
				gqlContext: a
			}) => {
				var c;
				const d = await Object(n.a)(a(), {
					subredditIds: [e],
					count: t
				});
				if (!d.ok) return;
				const i = d.body;
				(null === (c = i.data.subredditRecommendations.recommendations) || void 0 === c ? void 0 : c.length) && r(o({
					subredditId: e,
					relatedSubreddits: i.data.subredditRecommendations.recommendations.reduce((e, {
						id: t
					}) => (t && e.push(t), e), [])
				}))
			}, c = "RELATED_SUBREDDITS__LOADED", o = Object(s.a)(c)
		},
		"./src/reddit/actions/subreddit/subredditCarousel.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return c
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/SubredditsCarousel.json");
			const c = (e, t, r, s, c) => async (o, d, {
				gqlContext: u
			}) => {
				var l, b;
				if (d().subreddits.carousel.pending) return;
				const f = await ((e, t) => Object(n.a)(e, {
					...a,
					variables: t
				}))(u(), {
					subredditIds: e,
					hasNames: t || !1,
					subredditNames: r || [],
					hasPostIds: s || !1,
					postIds: c || []
				});
				if (!f.ok) return;
				const y = f.body;
				y.data && y.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"] && o(i(null === (l = y.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"]) || void 0 === l ? void 0 : l.reduce((e, r) => ((null == r ? void 0 : r.id) && (e[t ? r.name.toLowerCase() : r.id] = r), e), {}))), (null === (b = y.data) || void 0 === b ? void 0 : b.postsInfoByIds) && o(p(y.data.postsInfoByIds.reduce((e, t) => ((null == t ? void 0 : t.id) && (e[null == t ? void 0 : t.id] = t), e), {})))
			}, o = "SUBREDDITS_CAROUSEL__LOADED", d = "SUBREDDITS_CAROUSEL__PENDING", i = Object(s.a)(o), u = (Object(s.a)(d), "POST_CAROUSEL__LOADED"), l = "POST_CAROUSEL__PENDING", p = Object(s.a)(u);
			Object(s.a)(l)
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
				return D
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "e", (function() {
				return P
			})), r.d(t, "b", (function() {
				return A
			})), r.d(t, "a", (function() {
				return C
			})), r.d(t, "f", (function() {
				return L
			})), r.d(t, "g", (function() {
				return x
			})), r.d(t, "h", (function() {
				return U
			})), r.d(t, "i", (function() {
				return M
			}));
			var s = r("./node_modules/react-router-redux/es/index.js"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/actions/postCreation/general.ts"),
				o = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/actions/postCreation/submit.ts"),
				i = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/reddit/components/ModWelcomeTooltip/index.tsx"),
				l = r("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				p = r("./src/reddit/constants/experiments.ts"),
				b = r("./src/reddit/constants/modals.ts"),
				f = r("./src/lib/makeApiRequest/index.ts"),
				y = r("./src/lib/omitHeaders/index.ts"),
				m = r("./src/reddit/constants/headers.ts"),
				O = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const h = e => ({
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
			var E = r("./src/lib/makeGqlRequest/index.ts"),
				_ = r("./src/redditGQL/operations/ValidateCreateSubreddit.json");
			var I = r("./src/reddit/helpers/correlationIdTracker.ts"),
				g = r("./src/reddit/helpers/trackers/subredditCreation.ts"),
				S = r("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				v = r("./src/reddit/selectors/posts.ts"),
				j = r("./src/reddit/selectors/subreddit.ts"),
				T = r("./src/telemetry/index.ts");
			const D = "SUBREDDIT__CREATE_SET_INITIAL_CROSSPOST",
				w = "SUBREDDIT__CREATE_PENDING",
				P = "SUBREDDIT__CREATE_SUCCEEDED",
				A = "SUBREDDIT__CREATE_FAILED",
				C = "SUBREDDIT__CREATE_CLEARED",
				R = Object(a.a)(w),
				N = Object(a.a)(P),
				k = Object(a.a)(A),
				L = Object(a.a)(C),
				x = Object(a.a)(D),
				U = e => async (t, r, {
					apiContext: a
				}) => {
					const E = r(),
						{
							name: _,
							type: D,
							crosspostId: w
						} = e;
					if (Object(j.j)(E)) return;
					t(R({
						subredditName: _
					}));
					const P = await ((e, t) => Object(f.a)(Object(y.a)(e, [m.a]), {
						endpoint: Object(O.a)(`${e.apiUrl}/api/v1/subreddit/create_subreddit`),
						method: n.jb.POST,
						data: h(t)
					}))(a(), e);
					if (P.ok) {
						const r = P.body,
							a = r.fullname;
						Object(T.a)(Object(g.d)(D, e, a)(E)), t(N({
							subredditName: _
						}));
						const f = await Object(S.b)(E);
						if (w) {
							const e = Object(v.G)(E, {
								postId: w
							});
							t(Object(c.h)(e.title)), t(Object(c.g)({
								submissionType: n.Wb.CROSSPOST
							})), await t(Object(d.b)({
								destSubreddit: {
									...r,
									isProfile: !1
								},
								sourcePostId: w,
								postFieldValidationPending: Promise.resolve()
							})), Object(l.b)(w)
						}
						await t(Object(s.b)(`${r.path}`)), f ? f === p.ie.NewModule && t(Object(i.h)({
							tooltipId: u.MOD_WELCOME_TOOLTIP_ID
						})) : (t(Object(o.h)(b.a.POST_FLOW_UPSELL_MODAL_ID)), Object(T.a)(Object(g.g)()(E))), Object(I.b)(I.a.SubredditCreation)
					} else P.error && Object(T.a)(Object(g.h)(P.error.type, _)(E)), t(k({
						subredditName: _,
						error: P.error
					}))
				}, M = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = r(),
						a = {
							name: e
						},
						c = await ((e, t) => Object(E.a)(e, {
							..._,
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
						t(k({
							subredditName: e,
							error: r
						})), r && Object(T.a)(Object(g.h)(r.type, e)(n))
					} else await t(L())
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
							s = l.body && l.body.length ? l.body.map(e => Object(i.D)(r, e)).filter(e => !!e).reduce((e, t) => (e[t] = !0, e), {}) : {};
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
					})), t(Object(n.A)());
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
				return D
			})), r.d(t, "l", (function() {
				return w
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
				T = new Map,
				D = (e, t) => {
					const r = T.get(e) || [];
					r.push(t), T.set(e, r)
				},
				w = (e, t, r, s = !1) => async (a, o, {
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
					D(p, () => {
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
						const r = T.get(e);
						r && r.forEach(r => r(e, t)), T.delete(e)
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
						f = Object(d.B)(),
						h = Date.now(),
						E = f && h - f < 18e4,
						_ = Object(l.c)(b, {
							postId: e
						}),
						I = b.upvotePromptCountPerSess,
						g = (() => {
							const e = Object(d.A)();
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
							...Object(i.o)(e)
						}))(b))
					}));
					const v = [...g, Date.now()].slice(Math.max(g.length + 1 - 1, 0));
					Object(p.a)((e => ({
						source: u,
						action: "view",
						noun: u,
						...Object(i.o)(e)
					}))(b)), Object(d.Fb)(), Object(d.Eb)(v), a(O()), r && r()
				}, y = e => async (t, r) => {
					Object(p.a)((e => ({
						source: u,
						action: "click",
						noun: "upvote",
						...Object(i.o)(e)
					}))(r())), Object(l.c)(r(), {
						postId: e
					}) && t(Object(c.kb)(e))
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
				return l
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "c", (function() {
				return E
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "g", (function() {
				return v
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/blockedRedditors.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/reddit/endpoints/accounts/index.ts"),
				d = r("./src/reddit/models/Toast/index.ts"),
				i = r("./src/reddit/selectors/experiments/antievil/index.tsx"),
				u = r("./src/reddit/selectors/user.ts");
			const l = "USER_BLOCK__PENDING",
				p = "USER_BLOCK__LOADED",
				b = "USER_BLOCK__FAILED",
				f = Object(n.a)(l),
				y = Object(n.a)(p),
				m = Object(n.a)(b),
				O = e => async (t, r, {
					apiContext: n
				}) => {
					const u = r();
					if (u.blockUser.api.pending[e]) return;
					t(f({
						username: e
					}));
					const l = await Object(o.a)(n(), e),
						p = `error-block-${e}`;
					if (l.ok) l.body.name && t(y(l.body)), l.body.id && t(Object(a.f)(l.body.id)), t(c.g(p)), t(c.f({
						kind: d.b.SuccessCommunity,
						text: s.fbt._("{username} is now blocked", [s.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const r = {
								type: l.error ? l.error.type : "Unknown error",
								username: e
							},
							n = Object(i.c)(u) && "REBLOCK_RATE_LIMIT" === l.body.reason;
						t(m(r)), t(n ? c.f({
							id: p,
							kind: d.b.Error,
							text: s.fbt._("You can't block u/{username} for 24 hours after unblocking them", [s.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: O(e)
						}) : c.f({
							id: p,
							kind: d.b.Error,
							text: s.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: O(e)
						}))
					}
				}, h = "USER_UNBLOCK__PENDING", E = "USER_UNBLOCK__SUCCESS", _ = "USER_UNBLOCK__FAILED", I = Object(n.a)(h), g = Object(n.a)(E), S = Object(n.a)(_), v = e => async (t, r, {
					apiContext: n
				}) => {
					const i = r(),
						l = Object(u.k)(i),
						p = l ? l.id : void 0,
						b = i.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(I({
						name: e
					})), (await Object(o.c)(n(), p, e)).ok ? (t(g({
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
					})), t(S({
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
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "h", (function() {
				return o
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "d", (function() {
				return l
			}));
			const s = "WRAPPED_REDDIT_CARDS_PENDING",
				n = "WRAPPED_REDDIT_CARDS_LOADED",
				a = "WRAPPED_REDDIT_CARDS_FAILED",
				c = "WRAPPED_REDDIT_RESET",
				o = "WRAPPED_REDDIT_SHARE_CARD_WAS_OPENED",
				d = "WRAPPED_REDDIT_SET_CARD_INDEX",
				i = "WRAPPED_REDDIT_SUBREDDIT_CHANGED",
				u = "WRAPPED_REDDIT_IMAGE_PENDING",
				l = "WRAPPED_REDDIT_IMAGE_LOADED"
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
		"./src/reddit/components/ModWelcomeTooltip/index.m.less": function(e, t, r) {
			e.exports = {
				Overlay: "_2PnG5snRqhlCLmlBFW9Dud",
				overlay: "_2PnG5snRqhlCLmlBFW9Dud",
				isOverlayOpen: "_1LKHMvN5rVxTXGRnTa9hrB",
				DropdownPadding: "_3GVs_x5BtyiLy35GpmGSyo",
				dropdownPadding: "_3GVs_x5BtyiLy35GpmGSyo",
				Tooltip: "_2EusAZo7A7uyI8gxC0nJdp",
				tooltip: "_2EusAZo7A7uyI8gxC0nJdp",
				TooltipContent: "_1BsafzE6q8PmCVU5uqiTWj",
				tooltipContent: "_1BsafzE6q8PmCVU5uqiTWj",
				Title: "_1BFO2H2-rybL94nyL7n-e_",
				title: "_1BFO2H2-rybL94nyL7n-e_",
				Description: "_2DnHuFoYoKwYaBvTkLrs0v",
				description: "_2DnHuFoYoKwYaBvTkLrs0v",
				modLink: "_16moQ9CB6asKjB-qTj8Tvf",
				Button: "_2x6OQ6vZfN3PNhM6Eh6FLq",
				button: "_2x6OQ6vZfN3PNhM6Eh6FLq"
			}
		},
		"./src/reddit/components/ModWelcomeTooltip/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "MOD_WELCOME_TOOLTIP_ID", (function() {
				return E
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				c = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = r("./src/reddit/controls/Button/index.tsx"),
				p = r("./src/reddit/controls/Dropdown/index.tsx"),
				b = r("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				f = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				y = r("./src/reddit/selectors/platform.ts"),
				m = r("./src/reddit/components/ModWelcomeTooltip/index.m.less"),
				O = r.n(m);
			const h = Object(u.a)(p.a),
				E = "ModProgressModule--ModWelcomeTooltip";
			t.default = Object(d.a)(e => {
				const t = Object(c.e)(y.d),
					r = E,
					d = Object(c.d)(),
					u = e => {
						e.stopPropagation(), d(Object(i.h)({
							tooltipId: r
						}))
					};
				return Object(n.useEffect)(() => {
					e.isOpen ? setTimeout(() => Object(b.a)(), 500) : setTimeout(() => Object(b.b)(), 500)
				}, [d, e.isOpen]), t ? a.a.createElement(h, {
					className: O.a.Tooltip,
					isOpen: e.isOpen,
					targetPosition: ["left", "top"],
					tooltipPosition: ["right", "top"],
					tooltipId: r,
					componentWrapper: t => a.a.createElement("div", {
						className: Object(o.a)(O.a.Overlay, {
							[O.a.isOverlayOpen]: e.isOpen
						}),
						onClick: u
					}, a.a.createElement("div", {
						className: Object(o.a)(O.a.DropdownPadding, {
							[O.a.isOverlayOpen]: e.isOpen
						}),
						onClick: u
					}), t)
				}, a.a.createElement("div", {
					className: O.a.TooltipContent
				}, a.a.createElement("div", {
					className: O.a.Title
				}, s.fbt._("Welcome to your community, r/{subredditName}!", [s.fbt._param("subredditName", t)], {
					hk: "e3rbC"
				})), a.a.createElement("div", {
					className: O.a.Description
				}, s.fbt._("We’ll walk you through how to get started here, and you can get more tips and advice through Reddit’s", null, {
					hk: "lffxe"
				}), " ", a.a.createElement("a", {
					className: O.a.modLink,
					style: {
						color: Object(f.a)(e).linkText
					},
					href: "https://www.reddit.com/r/ModCertification101/",
					rel: "noopener noreferrer",
					target: "_blank"
				}, s.fbt._("Mod Certification Program", null, {
					hk: "1FTpvR"
				})), "."), a.a.createElement(l.t, {
					className: O.a.Button,
					onClick: u
				}, s.fbt._("Let's go", null, {
					hk: "4hWwxv"
				})))) : null
			})
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
		"./src/reddit/components/SearchDropdown/TypeaheadSuggestion.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return S
			})), r.d(t, "a", (function() {
				return v
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				c = r("./src/lib/classNames/index.ts"),
				o = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = r("./src/reddit/components/Flair/index.tsx"),
				i = r("./src/reddit/constants/history.ts"),
				u = r("./src/reddit/helpers/clickSourceData/index.ts"),
				l = r("./src/reddit/icons/fonts/index.tsx"),
				p = r("./src/reddit/models/Flair/index.ts"),
				b = r("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				f = r.n(b),
				y = r("./node_modules/uuid/v4.js"),
				m = r.n(y),
				O = r("./src/reddit/helpers/ensureEndSlash/index.ts"),
				h = r("./src/reddit/helpers/trackers/searchResults.ts"),
				E = r("./src/reddit/hooks/useTracking.ts"),
				_ = r("./src/reddit/selectors/telemetry.ts"),
				I = r("./src/reddit/components/SearchDropdown/index.m.less"),
				g = r.n(I);
			const S = () => ({
				[i.b.ClickSource]: u.a.TYPEAHEAD,
				[i.b.ClickId]: m()()
			});

			function v({
				className: e,
				focusedItem: t,
				item: r,
				indexOfItem: i,
				nightmode: u,
				subredditSuggestions: b,
				onSendSearchClickTypeaheadEvent: y,
				onSetRecentSearch: m,
				onClearSearchQuery: I,
				onCloseDropdown: v
			}) {
				const j = Object(E.a)(),
					T = !r.isProfile || r.enableFollowers;
				Object(n.useEffect)(() => {
					const e = r.isProfile ? h.a.PEOPLE : h.a.SUBREDDIT,
						t = {
							displayQuery: r.searchQuery,
							rawQuery: r.rawQuery || r.searchQuery,
							searchQuery: r.searchQuery,
							structureType: _.c.Search
						};
					j(Object(h.v)(e, t, i))
				}, []);
				return a.a.createElement(o.a, {
					"aria-label": r.searchQuery,
					className: Object(c.a)(g.a.listItem, g.a.mTypeahead, f.a.item, e, {
						[g.a.mFocused]: !(!t || t.searchQuery !== r.searchQuery)
					}),
					onClick: () => {
						m(r), y(r.searchQuery, r, i, b), I(!1), v(!1)
					},
					key: r.searchQuery,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: `/${Object(O.a)(r.isProfile?r.searchQuery.replace("u/","user/"):r.searchQuery)}`,
						state: S()
					}
				}, r.displayInfo && r.displayInfo.iconUrl ? a.a.createElement("div", {
					className: g.a.subredditIcon,
					style: {
						backgroundImage: `url('${r.displayInfo.iconUrl}')`
					}
				}) : a.a.createElement(l.a, {
					name: "community",
					isFilled: !u,
					className: Object(c.a)(g.a.defaultCommunityIcon, {
						[g.a.mNightmode]: u
					})
				}), a.a.createElement("div", null, r.displayInfo && r.displayInfo.subredditOrProfileName && a.a.createElement("div", {
					className: Object(c.a)(g.a.listItemText, g.a.mTypeahead, f.a.text)
				}, r.displayInfo.subredditOrProfileName), a.a.createElement("div", null, r.displayInfo && null != r.displayInfo.subscribers && T && a.a.createElement("div", {
					className: Object(c.a)(g.a.listItemSubtext, f.a.subText)
				}, s.fbt._({
					"*": "{members count} members",
					_1: "1 member"
				}, [s.fbt._plural(r.displayInfo.subscribers, "members count")], {
					hk: "1uMCes"
				})), r.displayInfo && r.displayInfo.isNSFW && a.a.createElement(d.b, {
					flair: {
						type: p.f.Nsfw,
						text: s.fbt._("nsfw", null, {
							hk: "2nrY5X"
						})
					}
				}))))
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
				return J
			})), r.d(t, "a", (function() {
				return Z
			})), r.d(t, "c", (function() {
				return re
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/higherOrderComponents/asTooltip.tsx"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				u = r("./src/reddit/helpers/ensureEndSlash/index.ts"),
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
				I = r("./src/reddit/helpers/trackers/searchResults.ts"),
				g = r("./src/reddit/hooks/useTracking.ts"),
				S = r("./src/reddit/selectors/telemetry.ts"),
				v = r("./node_modules/uuid/v4.js"),
				j = r.n(v),
				T = r("./src/reddit/components/SearchDropdown/index.m.less"),
				D = r.n(T);
			const w = Object(c.a)(f.b);

			function P({
				activeTooltipId: e,
				className: t,
				focusedItem: r,
				nightmode: c,
				recentSearch: p,
				searchOriginPage: f,
				indexOfItem: v,
				toggleTooltip: T,
				onClearSearchQuery: P,
				onRemoveRecentSearch: A,
				onUpdateSearchQuery: C,
				onSendSearchClickRecentEvent: R,
				onCloseDropdown: N
			}) {
				const k = Object(g.a)(),
					{
						nsfwSessionSetting: L,
						refreshNsfwSessionSettingExpiryTime: x
					} = Object(y.b)(),
					U = Object(a.e)(_.jb);
				Object(s.useEffect)(() => {
					const e = {
						displayQuery: p.searchQuery,
						rawQuery: p.rawQuery || p.searchQuery,
						searchQuery: p.searchQuery,
						structureType: S.c.Recent
					};
					k(Object(I.v)(I.a.RECENT, e, v))
				}, []);
				const M = e => e.subredditOrProfileRestrictedName ? `${e.subredditOrProfileRestrictedName} ${e.searchQuery}` : e.searchQuery,
					{
						url: B,
						qs: G
					} = Object(O.a)({
						includeNsfwResults: U && L,
						multireddit: null,
						searchItem: p,
						searchOptions: {
							source: l.a.Recent
						},
						subreddit: null
					}),
					F = M(p);
				let q;
				r && (q = M(r));
				const W = p.isProfile || p.isSubreddit ? {
					[m.b.ClickSource]: "search_dropdown",
					[m.b.ClickId]: j()()
				} : void 0;
				return n.a.createElement(i.a, {
					"aria-label": p.searchQuery,
					className: Object(o.a)(D.a.listItem, b.a.item, t, {
						[D.a.mFocused]: !(!r || r.section !== E.c.recent || q !== F)
					}),
					onClick: () => {
						p.isTypeaheadSuggestion ? P() : C(p.searchQuery), R(p.searchQuery, p, v), N(), x()
					},
					key: F,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: B && Object(u.a)(B) || "",
						state: {
							...W,
							[m.b.SearchOriginPage]: f
						},
						search: G
					}
				}, p.displayInfo && p.isTypeaheadSuggestion ? p.displayInfo.iconUrl ? n.a.createElement("div", {
					className: D.a.subredditIcon,
					style: {
						backgroundImage: `url('${p.displayInfo.iconUrl}')`
					}
				}) : n.a.createElement(h.a, {
					name: "community",
					isFilled: !c,
					className: Object(o.a)(D.a.defaultCommunityIcon, {
						[D.a.mNightmode]: c
					})
				}) : n.a.createElement(h.a, {
					name: "search"
				}), n.a.createElement("span", {
					className: b.a.text
				}, F), n.a.createElement("div", {
					onMouseEnter: () => T(F),
					onMouseLeave: () => T(null),
					id: F
				}, n.a.createElement(h.a, {
					name: "clear",
					onMouseUp: e => {
						e.stopPropagation(), e.preventDefault(), A(p)
					}
				}), n.a.createElement(w, {
					className: D.a.fixedTextTooltip,
					isOpen: e === F,
					text: d.fbt._("Remove", null, {
						hk: "2P57BY"
					}),
					tooltipId: F,
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				})))
			}
			var A = r("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				C = r("./src/reddit/components/PostTitle/index.tsx"),
				R = r("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				N = r("./src/reddit/constants/adEvents.ts"),
				k = r("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				L = r("./src/reddit/helpers/canRenderThumbnail.ts"),
				x = r("./src/reddit/helpers/correlationIdTracker.ts"),
				U = r("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				M = r("./src/reddit/helpers/trackers/discoveryUnit.ts");

			function B({
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
					{
						url: S,
						qs: v
					} = Object(O.a)({
						multireddit: null,
						searchItem: s,
						searchOptions: {
							source: g ? l.a.PromotedTrend : l.a.Trending
						},
						subreddit: null
					}),
					j = n.a.createElement(i.a, {
						id: r,
						"aria-label": s.searchQuery,
						className: Object(o.a)(D.a.listItem, D.a.mTrending, b.a.item, b.a.trending, e, {
							[D.a.mFocused]: !(!t || t.section !== E.c.trending || s.searchQuery !== t.searchQuery)
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
							if (y(e), Object(x.e)(x.a.SearchResults), (e => I((t, r) => Object(M.v)(r(), e, M.a.SEARCH_DROPDOWN, E.d.dropdown, U.a.Typeahead)))(s), g) {
								const {
									post: e
								} = s;
								e && _(e, N.a.Click)
							}
							f()
						},
						key: `trending-${s.searchQuery}`,
						role: "link",
						tabIndex: -1,
						to: {
							pathname: S && Object(u.a)(S) || "",
							state: {
								[m.b.SearchOriginPage]: c
							},
							search: v
						}
					}, n.a.createElement("div", {
						className: b.a.trendingContent
					}, g && n.a.createElement("div", {
						className: b.a.promoted
					}, d.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), n.a.createElement("div", null, n.a.createElement(h.a, {
						name: "popular",
						className: D.a.trendingIcon
					}), n.a.createElement("span", null, n.a.createElement(C.a, {
						className: Object(o.a)(D.a.listItemText, D.a.mTrending, b.a.text, b.a.trending),
						redditStyle: !0,
						size: C.b.Small
					}, s.searchQuery)), s.post && n.a.createElement("div", {
						className: D.a.postTitle
					}, s.post.title)), s.subredditInfo && n.a.createElement(k.a, {
						className: Object(o.a)(b.a.relatedSubredditMetaData, D.a.listItemSubtext, {
							[D.a.mNoPostTitle]: !s.post
						}),
						iconUrl: s.subredditInfo.icon || void 0,
						suffix: d.fbt._("{subreddit name} and more", [d.fbt._param("subreddit name", s.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), s.post && Object(L.a)(s.post) && n.a.createElement(A.a, {
						post: s.post,
						removeLink: !0,
						usePreview: g
					}));
				return g ? n.a.createElement(R.a, {
					post: s.post
				}, j) : j
			}
			var G = r("./src/reddit/components/SearchDropdown/TypeaheadSuggestion.tsx"),
				F = r("./src/reddit/constants/zIndex.ts"),
				q = r("./src/reddit/controls/Dropdown/index.tsx"),
				W = r("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				H = r.n(W),
				V = r("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				Q = r.n(V),
				$ = r("./src/lib/constants/index.ts"),
				K = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				z = r("./src/reddit/hooks/usePageLayer.ts");

			function Y({
				searchOriginPage: e,
				searchItem: t,
				position: r,
				onTriggerSearch: c
			}) {
				var u;
				const l = (null === (u = t.searchQuery) || void 0 === u ? void 0 : u.trim()) || "",
					p = Object(g.a)(),
					f = Object(z.a)(),
					E = Object(a.e)(e => Object(K.ab)(e, {
						pageLayer: f
					})),
					v = Object(a.e)(e => Object(K.s)(e, {
						pageLayer: f
					})),
					j = Object(a.e)(e => Object(K.e)(e, {
						pageLayer: f
					})),
					T = Object(a.e)(_.jb),
					{
						nsfwSessionSetting: w
					} = Object(y.b)(),
					{
						url: P,
						qs: A
					} = Object(O.a)({
						subreddit: v,
						multireddit: j,
						searchItem: t,
						shouldSearchSubreddit: E,
						includeNsfwResults: T && w
					}),
					C = {
						id: (null == v ? void 0 : v.id) || "",
						q: t.searchQuery,
						eventType: E ? "subreddit" : void 0,
						t: "all",
						type: E ? [$.bc.Posts] : [$.bc.Posts, $.bc.Subreddits, $.bc.Users],
						restrict_sr: E ? "1" : ""
					};
				return Object(s.useEffect)(() => {
					p(Object(I.r)(C, E, r, f || void 0))
				}, []), n.a.createElement(i.a, {
					onClick: function(e) {
						p(Object(I.n)(S.a.FullSearchButton, C, E, U.a.Typeahead, f || void 0)), c(e)
					},
					to: {
						pathname: P,
						state: {
							[m.b.SearchOriginPage]: e
						},
						search: A
					},
					className: Object(o.a)(D.a.listItem, b.a.item),
					"data-testid": "search-trigger-item"
				}, n.a.createElement(h.a, {
					name: "search"
				}), n.a.createElement("span", {
					className: b.a.text
				}, d.fbt._("Search for “", null, {
					hk: "28KVrM"
				}), d.fbt._("{search query}", [d.fbt._param("search query", l)], {
					hk: "4vP3YT"
				}), "”"))
			}
			const {
				fbt: X
			} = r("./node_modules/fbt/lib/FbtPublic.js"), J = "SearchDropdown", Z = "SearchDropdownContent", ee = 5, te = Object(c.a)(q.a);

			function re({
				container: e,
				trendingItems: t,
				isTrendingPending: r,
				isOpen: c,
				isTypeaheadPending: d,
				itemList: i,
				recentSearches: u,
				typeaheadSuggestions: l,
				focusedItemIndex: p,
				nightmode: f,
				searchItem: y,
				searchOriginPage: m,
				isFixed: O = !0,
				isOverlay: h = !0,
				fireAdPixelsOfType: _,
				onClearSearchQuery: I,
				onClose: g,
				onRemoveRecentSearch: S,
				onSendSearchClickRecentEvent: v,
				onSendSearchClickTypeaheadEvent: j,
				onSetRecentSearch: T,
				onUpdateSearchQuery: w
			}) {
				var A;
				const C = Object(a.d)(),
					[R, N] = Object(s.useState)(null),
					k = function(e) {
						const [t, r] = Object(s.useState)(null), n = Object(s.useCallback)(() => {
							e && r(e.offsetWidth)
						}, [e]);
						return Object(s.useLayoutEffect)(n, [n]), Object(s.useEffect)(() => (window.addEventListener("resize", n), () => window.removeEventListener("resize", n)), [n]), t
					}(e),
					L = t.slice(0, ee),
					[x, q] = Object(s.useState)(new Array(ee).fill(!1)),
					W = !!(null === (A = y.searchQuery) || void 0 === A ? void 0 : A.trim()),
					V = d || r,
					$ = 0 === l.length && !d && (!W || p >= 0),
					K = Object(s.useMemo)(() => l.filter(e => e.isSubreddit), [l]),
					z = {
						width: k ? `${k}px` : "inherit",
						marginTop: "7px",
						overflow: "auto"
					};
				O && (z.zIndex = F.g), Object(s.useLayoutEffect)(() => {
					if (!r && c && document.getElementById(Z)) {
						const e = re();
						q(e), L.forEach((t, r) => {
							e[r] && C((e, r) => Object(M.w)(r(), t, M.a.SEARCH_DROPDOWN, E.d.dropdown, U.a.Typeahead))
						})
					}
				}, [r, c, C]);
				const re = () => {
					const e = new Array(L.length).fill(!1);
					return L.forEach((t, r) => {
						if (t.id) {
							const s = document.getElementById(`${J}-${t.id}`),
								n = document.getElementById(Z);
							if (s && n) {
								const t = s.getBoundingClientRect(),
									a = n.getBoundingClientRect();
								t.top < a.bottom && t.bottom > a.top && (e[r] = !0)
							}
						}
					}), e
				};
				return n.a.createElement(te, {
					className: Object(o.a)(D.a.dropdown, H.a.listContainer),
					id: Z,
					isFixed: O,
					isOpen: c,
					isOverlay: h,
					tooltipId: J,
					noFocus: !0,
					style: z,
					onDropdownMounted: () => {
						if (!r && L.length > 0) {
							const e = re();
							q(e), L.forEach((t, r) => {
								e[r] && C((e, r) => Object(M.w)(r(), t, M.a.SEARCH_DROPDOWN, E.d.dropdown, U.a.Typeahead, u.length))
							})
						}
					},
					onScroll: () => {
						const e = re();
						L.forEach((t, r) => {
							x[r] || !e[r] || t.post && t.post.isSponsored || C((e, r) => Object(M.w)(r(), t, M.a.SEARCH_DROPDOWN, E.d.dropdown, U.a.Typeahead, u.length))
						}), q(e)
					}
				}, $ && n.a.createElement(n.a.Fragment, null, u.map((e, t) => n.a.createElement(P, {
					searchOriginPage: m,
					activeTooltipId: R,
					focusedItem: i[p],
					indexOfItem: t,
					key: e.id,
					onClearSearchQuery: I,
					onRemoveRecentSearch: S,
					onSendSearchClickRecentEvent: v,
					onSetRecentSearch: T,
					onUpdateSearchQuery: w,
					recentSearch: e,
					toggleTooltip: N,
					nightmode: f,
					onCloseDropdown: g
				})), !r && t.length && n.a.createElement("div", {
					className: Object(o.a)(b.a.title, D.a.listItemTitle, {
						[D.a.mWithBorder]: !!u.length
					})
				}, X._("Trending today", null, {
					hk: "3nAMpY"
				})), L.map(e => n.a.createElement(B, {
					id: `${J}-${e.id}`,
					key: e.id,
					focusedItem: i[p],
					searchOriginPage: m,
					fireAdPixelsOfType: _,
					onCloseDropdown: g,
					onSetRecentSearch: T,
					onUpdateSearchQuery: w,
					trendingItem: e
				}))), V && n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(o.a)(D.a.loadingItem, Q.a.item)
				}), n.a.createElement("div", {
					className: Object(o.a)(D.a.loadingItem, Q.a.item)
				}), n.a.createElement("div", {
					className: Object(o.a)(D.a.loadingItem, Q.a.item)
				}), n.a.createElement("div", {
					className: Object(o.a)(D.a.loadingItem, Q.a.item)
				}), n.a.createElement("div", {
					className: Object(o.a)(D.a.loadingItem, Q.a.item)
				})), W && !d && n.a.createElement(n.a.Fragment, null, l.map((e, t) => n.a.createElement(G.a, {
					focusedItem: l[p],
					indexOfItem: t,
					subredditSuggestions: K,
					item: e,
					key: e.id,
					onClearSearchQuery: I,
					onSendSearchClickTypeaheadEvent: j,
					onSetRecentSearch: T,
					nightmode: f,
					onCloseDropdown: g
				})), n.a.createElement(Y, {
					key: y.searchQuery,
					searchOriginPage: m,
					searchItem: y,
					position: l.length,
					onTriggerSearch: g
				})))
			}
		},
		"./src/reddit/components/SubredditForkingCTA/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return S
			})), r.d(t, "a", (function() {
				return w
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
						n = Object(p.G)(e, t),
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
					if (!Object(b.P)(e)) return !1;
					if (null === (r = Object(y.b)(I)) || void 0 === r ? void 0 : r[t.postId]) return !1;
					const s = Object(p.G)(e, t),
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
				T = Object(d.b)(j),
				D = ({
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
				w = Object(c.memo)(T(Object(h.c)(D)))
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
						r[t.subredditName] = Object(l.x)(e, {
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
							customType: l.b.Direct
						}
					}
				})
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
		"./src/reddit/endpoints/subreddit/recommendations.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/redditGQL/operations/SubredditRecommendations.json");
			t.a = (e, t) => Object(s.a)(e, {
				...n,
				variables: t
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
		"./src/reddit/helpers/ensureEndSlash/index.ts": function(e, t, r) {
			"use strict";
			t.a = e => e.endsWith("/") ? e : `${e}/`
		},
		"./src/reddit/helpers/getSearchUrl/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./src/lib/search/index.ts"),
				n = r("./src/reddit/constants/parameters.ts"),
				a = r("./src/reddit/models/Search/index.ts");

			function c({
				subreddit: e,
				multireddit: t,
				searchItem: r,
				searchOptions: c,
				shouldSearchSubreddit: o,
				includeNsfwResults: d,
				searchType: i
			}) {
				let u;
				const l = [];
				if (r.isTypeaheadSuggestion) u = `/${r.isProfile?r.searchQuery.replace("u/","user/"):r.searchQuery}`;
				else {
					if (l.push(`${n.q}=${Object(s.b)(r.rawQuery||r.searchQuery)}`), u = "/search/", r.section !== a.c.trending && r.section !== a.c.recent || c && c.source && l.push(`source=${c.source}`), e && o ? (u = `/r/${e.name}${u}`, l.push(`${n.t}=1`), l.push(`${n.z}=${e.isNSFW?"1":""}`)) : !e && r.subredditOrProfileRestrictedName && (u = `/${r.subredditOrProfileRestrictedName}${u}`, l.push(`${n.t}=1`)), t) {
						u = `/user/${t.url.split("/")[2]}/m/${t.name}${u}`, l.push(`${n.t}=1`), l.push(`${n.z}=${t.isNSFW?"1":""}`), l.push(`${n.k}=1`)
					}
					c && c.category && l.push(`${n.b}=${c.category}`), d && l.push(`${n.j}=1`), i && l.push(`${n.C}=${i}`)
				}
				return {
					url: u,
					qs: l.join("&")
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
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return u
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/lib/env/index.ts"),
				n = r("./src/reddit/helpers/parseUrl.ts");
			const a = ["old", "new", "en", "www", "np", "m"],
				c = ["reddit.com", "reddit.local", ..."undefined" != typeof window && Object(s.a)() ? [window.location.host] : []].concat("").concat(a.map((function(e) {
					return e + ".reddit.com"
				}))).concat(a.map((function(e) {
					return e + ".reddit.local"
				}))),
				o = ["mod.reddit.com"],
				d = {
					subreddit: {
						pathnameComponents: ["subredditName"],
						pathname: /^\/r\/(\w+)\/?$/
					},
					user: {
						pathnameComponents: ["username"],
						pathname: /^\/(?:user|u)\/(\w+)\/?$/
					},
					postShortlink: {
						hostnames: c.concat("redd.it"),
						pathnameComponents: ["postID36"],
						pathname: /^\/([A-Za-z0-9]+)\/?$/
					},
					postDetail: {
						pathnameComponents: ["postID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)(?:\/\w+)?\/?$/
					},
					comment: {
						pathnameComponents: ["postID36", "commentID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)\/\w+\/(\w+)\/?$/
					},
					modmailConversation: {
						hostnames: o,
						pathnameComponents: ["modmailConversationId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/?$/
					},
					modmailMessage: {
						hostnames: o,
						pathnameComponents: ["modmailConversationId", "modmailMessageId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/(\w+)\/?$/
					}
				};

			function i(e, t) {
				const r = d[e];
				if (!d) throw new Error("Could not find reddit URL spec: " + e);
				const s = Object(n.a)(t);
				if (!s) return void console.error("Could not parse url", t);
				if (-1 === (r.hostnames || c).indexOf(s.hostname)) return;
				const a = s.pathname.match(r.pathname);
				if (a) {
					return {
						url: t,
						routeName: e,
						components: r.pathnameComponents.reduce((function(e, t, r) {
							return e[t] = a[r + 1], e
						}), {})
					}
				}
			}

			function u(e) {
				return (e.match(new RegExp(n.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(d).some((function(r) {
						return t = i(r, e)
					})), t
				})).filter((function(e) {
					return e
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
							i = Object(o.D)(e, d);
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
						n = Object(f.jb)(e.getState()) ? "1" : "";
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
				return u
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "i", (function() {
				return b
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "h", (function() {
				return E
			})), r.d(t, "g", (function() {
				return _
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/intlList/index.ts"),
				a = r("./src/lib/timezone/index.ts"),
				c = r("./src/reddit/helpers/isArrayEqual.ts"),
				o = r("./src/reddit/helpers/ordinal/index.ts"),
				d = r("./src/reddit/models/ScheduledPost/index.ts");
			const i = e => {
					return `${e.toLocaleDateString(void 0,{month:"numeric",day:"numeric"})} @ ${e.toLocaleTimeString(void 0,{hour:"numeric",minute:"numeric"}).replace(" ","").toLowerCase()}`
				},
				u = (e, t) => {
					if (e && t) {
						const r = Object(a.f)(p(e, t)),
							n = i(r);
						return s.fbt._("At {time}", [s.fbt._param("time", n)], {
							hk: "25s5Tg"
						})
					}
					return s.fbt._("Submit post at scheduled event time", null, {
						hk: "lYsoU"
					})
				},
				l = e => e.slice(0, 5),
				p = (e, t) => `${e}T${l(t)}:00`,
				b = e => {
					const [t, r] = e.split("T");
					return [t, l(r)]
				},
				f = e => {
					const [t, r] = b(e);
					if (t && r) {
						const e = Object(a.f)(p(t, r));
						return i(e)
					}
					return ""
				},
				y = e => {
					const t = Object(a.d)(e);
					let r, s = e;
					if (t) {
						r = t.offset, s = `(GMT${Object(a.e)(t.offset)}) ${e.replace("/"," - ").replace(/_/g," ")}`
					}
					return {
						name: e,
						displayText: s,
						offset: r
					}
				},
				m = e => "string" == typeof e,
				O = e => {
					const t = new Date,
						r = e - t.getDay();
					return t.setDate(t.getDate() + r), t.toLocaleDateString(void 0, {
						weekday: "long"
					})
				},
				h = e => {
					const t = (e => {
						const [t, r] = b(e);
						if (t && r) {
							return Object(a.f)(p(t, r)).toLocaleTimeString(void 0, {
								hour: "numeric",
								minute: "numeric"
							})
						}
						return ""
					})(e.publishAt);
					if (e.frequency === d.d.Hourly) return 2 === e.interval ? s.fbt._("Every other hour", null, {
						hk: "64vzK"
					}) : e.interval > 1 ? s.fbt._("Every {hour interval} hours", [s.fbt._param("hour interval", e.interval.toString())], {
						hk: "3x8zaD"
					}) : s.fbt._("Every hour", null, {
						hk: "1VzCs"
					});
					if (e.frequency === d.d.Daily) return 2 === e.interval ? s.fbt._("Every other day at {start time}", [s.fbt._param("start time", t)], {
						hk: "yTynp"
					}) : e.interval > 1 ? s.fbt._("Every {day interval} days at {start time}", [s.fbt._param("day interval", e.interval.toString()), s.fbt._param("start time", t)], {
						hk: "2OoGlG"
					}) : s.fbt._("Every day at {start time}", [s.fbt._param("start time", t)], {
						hk: "1cvwm2"
					});
					if (e.frequency === d.d.Weekly) {
						const r = (e => Object(n.c)(e.map(d.k).sort((e, t) => e - t).map(O), n.a.AND, n.b.COMMA))(e.byWeekDays);
						return 2 === e.interval ? s.fbt._("Every other week on {days of week } at {start time}", [s.fbt._param("days of week ", r), s.fbt._param("start time", t)], {
							hk: "43xwaa"
						}) : e.interval > 1 ? s.fbt._("Every {interval} weeks on {days of week} at {start time}", [s.fbt._param("interval", e.interval.toString()), s.fbt._param("days of week", r), s.fbt._param("start time", t)], {
							hk: "2IVbH"
						}) : s.fbt._("Every week on {days of week} at {start time}", [s.fbt._param("days of week", r), s.fbt._param("start time", t)], {
							hk: "2Zl0L"
						})
					}
					const r = (e => Object(n.c)(e.sort((e, t) => e - t).map(o.a), n.a.AND, n.b.COMMA))(e.byMonthDays);
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
				E = e => {
					let t = null;
					e.frequency && (t = e.frequency), (e.byWeekDays.length > 1 || e.byMonthDays.length > 1 || e.interval > 1) && (t = d.b);
					const r = Object(a.f)(e.publishAt),
						s = Object(d.q)(r.getDay()),
						n = r.getDate();
					return 1 === e.byWeekDays.length && e.byWeekDays[0] !== s && (t = d.b), 1 === e.byMonthDays.length && e.byMonthDays[0] !== n && (t = d.b), {
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
				_ = (e, t) => {
					if (!e && t || e && !t) return !1;
					if (!e && !t) return !0;
					for (const r in e) {
						if (!t) return !1;
						if (e.hasOwnProperty(r)) {
							if (Array.isArray(e[r]) && (!Array.isArray(t[r]) || !Object(c.a)(e[r], t[r]))) return !1;
							if (e[r] !== t[r]) return !1
						}
					}
					return !0
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
					...n.o(e),
					listing: n.z(e, t),
					subreddit: n.ib(e)
				})
			}
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return I
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "a", (function() {
				return T
			})), r.d(t, "v", (function() {
				return D
			})), r.d(t, "w", (function() {
				return w
			})), r.d(t, "B", (function() {
				return A
			})), r.d(t, "t", (function() {
				return C
			})), r.d(t, "u", (function() {
				return R
			})), r.d(t, "d", (function() {
				return N
			})), r.d(t, "q", (function() {
				return k
			})), r.d(t, "r", (function() {
				return L
			})), r.d(t, "A", (function() {
				return x
			})), r.d(t, "z", (function() {
				return U
			})), r.d(t, "y", (function() {
				return M
			})), r.d(t, "p", (function() {
				return B
			})), r.d(t, "s", (function() {
				return G
			})), r.d(t, "n", (function() {
				return H
			})), r.d(t, "h", (function() {
				return V
			})), r.d(t, "m", (function() {
				return Q
			})), r.d(t, "f", (function() {
				return $
			})), r.d(t, "g", (function() {
				return K
			})), r.d(t, "i", (function() {
				return z
			})), r.d(t, "k", (function() {
				return Y
			})), r.d(t, "l", (function() {
				return X
			})), r.d(t, "j", (function() {
				return J
			})), r.d(t, "e", (function() {
				return Z
			})), r.d(t, "o", (function() {
				return ee
			})), r.d(t, "x", (function() {
				return te
			}));
			var s, n = r("./src/lib/stringInterpolate/index.ts"),
				a = r("./src/reddit/actions/focusedVerticals/constants.ts"),
				c = (r("./src/reddit/constants/categories.tsx"), r("./src/reddit/constants/tracking.ts")),
				o = r("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				d = r("./src/reddit/helpers/trackers/searchResults.ts"),
				i = (r("./src/reddit/helpers/widgets/index.tsx"), r("./src/reddit/models/DiscoveryUnit/index.ts")),
				u = r("./src/reddit/models/Search/index.ts"),
				l = r("./src/reddit/selectors/experiments/serpSIIDs.ts"),
				p = r("./src/reddit/selectors/posts.ts"),
				b = r("./src/reddit/selectors/telemetry.ts"),
				f = r("./src/reddit/selectors/trending.ts"),
				y = r("./src/reddit/selectors/widgets.ts"),
				m = r("./src/telemetry/index.ts"),
				O = r("./src/reddit/helpers/search/searchImpressionId.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe", e.TRENDING = "trending"
			}(s || (s = {}));
			const h = "discovery_unit",
				E = (e, t, r) => ({
					...b.o(e),
					source: h,
					screen: b.ab(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && r ? Object(n.a)(t.title, {
							subredditName: r.name
						}) : t.title,
						name: t.unitName
					}
				}),
				_ = (e, t, r) => ({
					...E(e, t, r),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				I = (e, t) => {
					Object(m.a)(g(t)(e))
				},
				g = (e, t) => r => _(r, e, t),
				S = (e, t, r, s) => "unitName" in t ? E(e, t, s) : ((e, t, r) => ({
					...b.o(e),
					source: "search",
					screen: b.ab(e),
					search: r ? {
						...b.bb(e, r, o.a.SERP),
						structureType: b.c.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, r),
				v = (e, t, r, n, a) => ({
					...S(e, t, n, a),
					action: "view",
					noun: s.ITEM_POST,
					post: b.I(e, r)
				}),
				j = ({
					post: e,
					rawQuery: t,
					searchQuery: r
				}) => ({
					displayQuery: decodeURIComponent(r),
					rawQuery: t ? decodeURIComponent(t) : void 0,
					structureType: e && e.isSponsored ? b.c.PromotedTrend : b.c.Trending
				});
			var T;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(T || (T = {}));
			const D = (e, t, r, s, n, a = 0) => {
					Object(m.a)(P(e, t, r, c.c.CLICK, a, s, n))
				},
				w = (e, t, r, s, n, a = 0) => {
					Object(m.a)(P(e, t, r, c.c.VIEW, a, s, n))
				},
				P = (e, t, r, n, a, c, d) => {
					const p = Object(f.a)(e, c).filter(e => !e.post || !e.post.isSponsored).findIndex(e => e.id === t.id) + a;
					return {
						...b.o(e),
						source: "search",
						action: n,
						noun: s.TRENDING,
						metaSearch: j(t),
						discoveryUnit: r === T.POPULAR_CAROUSEL ? {
							name: i.k,
							id: i.k,
							title: i.k,
							type: "query"
						} : void 0,
						actionInfo: b.d(e, {
							paneName: r,
							position: p
						}),
						search: {
							originPageType: e.platform.currentPage ? b.v(e.platform.currentPage) : void 0,
							query: t.rawQuery,
							structureType: b.c.Trending,
							impressionId: Object(l.a)(e) ? O.a.get(d) : void 0,
							queryId: b.cb(e, c === u.d.dropdown ? o.a.Typeahead : o.a.SERP)
						}
					}
				},
				A = (e, t, r, s, n, a, o) => {
					Object(m.a)({
						...b.o(e),
						...Object(d.k)({
							state: e,
							postId: r,
							searchOptions: s,
							pageLayer: n,
							key: a,
							discoveryUnit: t
						}),
						action: c.c.VIEW,
						noun: o ? "ad" : "post"
					})
				},
				C = (e, t, r, s) => {
					Object(m.a)(v(e, t, r, s))
				},
				R = (e, t, r, s) => n => v(n, e, t, r, s),
				N = (e, t) => {
					Object(m.a)({
						...E(e, t),
						source: h,
						action: c.c.CLICK,
						noun: "show_less_often"
					})
				},
				k = (e, t, r, s) => {
					Object(m.a)(L(t, r, s)(e))
				},
				L = (e, t, r, n) => a => {
					return {
						...S(a, e, r, n),
						source: h,
						action: c.c.CLICK,
						noun: s.ITEM_POST,
						post: b.I(a, t)
					}
				},
				x = (e, t, r, s) => n => a => Object(d.k)({
					state: a,
					postId: n,
					searchOptions: e,
					pageLayer: t,
					key: r,
					discoveryUnit: s
				}),
				U = (e, t, r, s) => n => a => Object(d.i)({
					action: c.c.CLICK,
					state: a,
					searchOptions: e,
					pageLayer: t,
					subredditOrProfileIdentifier: void 0,
					key: r,
					postId: n,
					discoveryUnit: s
				}),
				M = (e, t, r, s) => n => a => ({
					...Object(d.k)({
						state: a,
						postId: n,
						searchOptions: e,
						pageLayer: t,
						key: r,
						discoveryUnit: s
					}),
					noun: "ad"
				}),
				B = (e, t) => r => n => ({
					...e ? E(n, e, t) : {},
					source: h,
					action: c.c.CLICK,
					noun: s.ITEM_POST,
					post: b.I(n, r)
				}),
				G = (e, t, r, s) => {
					Object(m.a)(F(t, r, s)(e))
				},
				F = (e, t, r, s) => n => {
					const a = Object(p.c)(n, {
							postId: t
						}),
						o = a ? Object(y.b)(n, a) : void 0;
					return {
						...S(n, e, r, s),
						...o,
						source: h,
						action: c.c.CLICK,
						noun: "item_post_subreddit",
						post: b.I(n, t)
					}
				},
				q = () => ({
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
				W = (e, t, r) => b.d(e, {
					position: r
				}),
				H = (e, t, r) => {
					const s = q();
					return e => ({
						..._(e, s),
						actionInfo: W(e, 0, r),
						subreddit: b.jb(e, t)
					})
				},
				V = (e, t, r) => {
					const s = q();
					return e => ({
						...v(e, s, t),
						actionInfo: W(e, 0, r)
					})
				},
				Q = (e, t, r) => {
					const n = q();
					return e => ({
						...E(e, n),
						actionInfo: W(e, 0, r),
						subreddit: b.jb(e, t) || null,
						source: h,
						action: c.c.VIEW,
						noun: s.ITEM_SUBREDDIT
					})
				},
				$ = (e, t, r) => {
					const n = q();
					return e => ({
						...E(e, n),
						actionInfo: W(e, 0, r),
						post: b.I(e, t) || null,
						source: h,
						action: c.c.CLICK,
						noun: s.ITEM_POST
					})
				},
				K = (e, t, r, n) => {
					const a = q();
					return e => ({
						...E(e, a),
						actionInfo: W(e, 0, n),
						subreddit: b.jb(e, r) || null,
						post: b.I(e, t) || null,
						source: h,
						action: c.c.CLICK,
						noun: s.ITEM_POST_SUBREDDIT
					})
				},
				z = (e, t, r) => {
					const n = q();
					return e => ({
						...E(e, n),
						actionInfo: W(e, 0, r),
						subreddit: b.jb(e, t) || null,
						source: h,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT
					})
				},
				Y = (e, t, r, n) => {
					const a = q();
					return e => ({
						...E(e, a),
						actionInfo: W(e, 0, r),
						subreddit: b.jb(e, t) || null,
						post: n ? b.I(e, n) : null,
						source: h,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				X = (e, t, r, n) => {
					const a = q();
					return e => ({
						...E(e, a),
						actionInfo: W(e, 0, r),
						subreddit: b.jb(e, t) || null,
						post: n ? b.I(e, n) : null,
						source: h,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				J = (e, t, r) => {
					const n = q();
					return e => ({
						...E(e, n),
						actionInfo: W(e, 0, r),
						subreddit: b.jb(e, t) || null,
						source: h,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT_HIDE
					})
				},
				Z = (e, t, r) => {
					const n = q();
					return e => ({
						...E(e, n),
						actionInfo: W(e, 0, r),
						subreddit: b.jb(e, t) || null,
						source: h,
						action: c.c.CLICK,
						noun: s.HEADER_SUBREDDIT
					})
				},
				ee = (e, t) => r => ({
					...E(r, e),
					...t && Object(y.b)(r, t),
					source: h,
					action: c.c.CLICK,
					noun: "item"
				}),
				te = e => t => ({
					...E(t, e),
					source: h,
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
					...n.o(t),
					actionInfo: n.d(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(s.e)(s.a.SubredditCreation, !0)
				}),
				c = (e, t, r) => a => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...n.o(a),
					actionInfo: n.d(a, {
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
					...n.o(e),
					actionInfo: n.d(e),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				d = (e, t) => r => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...n.o(r),
					actionInfo: n.d(r, {
						reason: e,
						settingValue: t
					}),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				i = () => e => ({
					source: "user_dropdown",
					noun: "create_community",
					action: "click",
					...n.o(e),
					actionInfo: n.d(e)
				}),
				u = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "view",
					...n.o(e),
					actionInfo: n.d(e)
				}),
				l = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "click",
					...n.o(e),
					actionInfo: n.d(e)
				}),
				p = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "dismiss",
					...n.o(e),
					actionInfo: n.d(e)
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
					...s.o(e),
					actionInfo: s.d(e, {
						settingValue: e.user.account && e.user.account.isMod ? "existing_mod" : "new_mod"
					})
				}),
				a = e => e => ({
					source: "post",
					noun: "forking_module",
					action: "dismiss",
					...s.o(e),
					actionInfo: s.d(e)
				}),
				c = e => e => ({
					source: "post",
					noun: "forking_module",
					action: "view",
					...s.o(e),
					actionInfo: s.d(e)
				})
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = s.fb
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
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return d
			}));
			const s = "new_community_setup",
				n = "ncp_v3_module",
				a = ["CommunityProgressShareButton", "CommunityProgressUrlButton", "CommunityProgressMakePostButton"];
			var c, o, d;
			! function(e) {
				e.INITIAL = "INITIAL", e.ACTIONED = "ACTIONED", e.DISMISSED = "DISMISSED", e.COMPLETED = "COMPLETED"
			}(c || (c = {})),
			function(e) {
				e[e.FILLED = 0] = "FILLED", e[e.NUMBERED = 1] = "NUMBERED"
			}(o || (o = {})),
			function(e) {
				e.HIDE_BUTTON_CLICK = "HIDE_BUTTON_CLICK", e.CTA_BUTTON_CLICK = "CTA_BUTTON_CLICK"
			}(d || (d = {}))
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
		"./src/reddit/reducers/features/categories/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/redux/es/redux.js"),
				n = r("./src/reddit/actions/category/constants.ts");
			var a = (e = null, t) => {
				switch (t.type) {
					case n.b:
					case n.c:
						return null;
					case n.a: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			var c = (e = !1, t) => {
				switch (t.type) {
					case n.c:
						return !1;
					case n.b:
						return !0;
					default:
						return e
				}
			};
			var o = (e = !1, t) => {
					switch (t.type) {
						case n.c:
							return !0;
						case n.b:
						case n.a:
							return !1;
						default:
							return e
					}
				},
				d = Object(s.c)({
					error: a,
					loaded: c,
					pending: o
				});
			const i = {};
			var u = (e = i, t) => {
				switch (t.type) {
					case n.g:
					case n.f: {
						const {
							categoryId: r
						} = t.payload, s = {
							...e
						};
						return delete s[r], s
					}
					case n.e: {
						const {
							categoryId: r,
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
			const l = {};
			var p = (e = l, t) => {
				switch (t.type) {
					case n.g: {
						const {
							categoryId: r
						} = t.payload;
						return {
							...e,
							[r]: !1
						}
					}
					case n.f: {
						const {
							categoryId: r
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
			const b = {};
			var f = (e = b, t) => {
					switch (t.type) {
						case n.g: {
							const {
								categoryId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case n.f:
						case n.e: {
							const {
								categoryId: r
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
				y = Object(s.c)({
					error: u,
					loaded: p,
					pending: f
				}),
				m = Object(s.c)({
					list: d,
					subreddits: y
				}),
				O = r("./node_modules/lodash/isEmpty.js"),
				h = r.n(O);
			const E = [];
			var _ = (e = E, t) => {
				switch (t.type) {
					case n.b: {
						const {
							categoryIds: r
						} = t.payload;
						return h()(r) ? e : r
					}
					default:
						return e
				}
			};
			const I = {};
			var g = (e = I, t) => {
					switch (t.type) {
						case n.b: {
							const {
								categories: r
							} = t.payload;
							return h()(r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				S = r("./node_modules/lodash/forOwn.js"),
				v = r.n(S),
				j = r("./src/reddit/helpers/name/index.ts");
			const T = {};
			var D = (e = T, t) => {
					switch (t.type) {
						case n.b: {
							const {
								categories: r
							} = t.payload;
							if (h()(r)) return e;
							const s = {};
							return v()(r, e => {
								s[Object(j.g)(e.name)] = e.id
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				w = r("./src/reddit/actions/global/constants.ts"),
				P = r("./src/reddit/constants/localStorage.ts");
			const A = {};
			var C = (e = A, t) => {
				switch (t.type) {
					case w.a:
						return t.payload[P.b.CATEGORIES_RANKING_STORE] || e;
					case n.d: {
						const {
							categoryId: r,
							rank: s
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
			t.a = Object(s.c)({
				api: m,
				ids: _,
				models: g,
				nameToId: D,
				ranking: C
			})
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
				return Fj
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
			var T = (e = null, t) => {
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
			var D = (e = !1, t) => {
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
				w = Object(v.c)({
					error: T,
					pending: D
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
					api: w,
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
				N = r("./node_modules/icepick/icepick.js"),
				k = r("./node_modules/lodash/mergeWith.js"),
				L = r.n(k),
				x = r("./src/reddit/actions/comment/constants.ts"),
				U = r("./src/reddit/actions/comment/websocket/constants.ts"),
				M = r("./src/reddit/actions/grantUserFlair/constants.ts"),
				B = r("./src/reddit/actions/modQueue/constants.ts"),
				G = r("./src/reddit/actions/pages/constants.ts"),
				F = r("./src/reddit/actions/pages/profileComments/constants.ts"),
				q = r("./src/reddit/actions/pages/profilePosts.ts"),
				W = r("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				H = r("./src/reddit/actions/pages/search/index.ts"),
				V = r("./src/reddit/actions/pages/subreddit.ts"),
				Q = r("./src/reddit/actions/profileConversations.ts"),
				$ = r("./src/reddit/actions/subreddit.ts"),
				K = r("./src/reddit/actions/userFlair/constants.ts"),
				z = r("./src/reddit/models/User/index.ts");
			const Y = {};
			var X = (e = Y, t) => {
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
					case W.c:
					case W.i:
					case W.e:
					case W.g:
					case H.c: {
						const {
							authorFlair: r
						} = t.payload;
						if (r) {
							return Object(N.merge)(e, r)
						}
						return e
					}
					case x.w:
					case V.SUBREDDIT_LOADED:
					case G.f:
					case F.b:
					case F.e:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case Q.e:
					case $.i:
						return J(e, t.payload);
					case B.i:
					case B.f:
					case B.m:
					case B.p:
					case B.v:
						return J(e, t.payload.response);
					case K.r: {
						const {
							subredditId: r,
							userName: s,
							applied: n,
							displaySettings: {
								isUserEnabled: a
							}
						} = t.payload;
						return Object(N.setIn)(e, [r, s], a ? n : null)
					}
					case M.h:
					case M.b: {
						const {
							subredditId: r,
							userName: s,
							applied: n
						} = t.payload;
						return e[r] && e[r][s] ? Object(N.setIn)(e, [r, s], n) : e
					}
					case K.a: {
						const {
							subredditId: r,
							userName: s,
							applied: n,
							displaySettings: {
								isEnabled: a
							}
						} = t.payload;
						return Object(N.setIn)(e, [r, s], a ? n : null)
					}
					default:
						return e
				}
			};
			const J = (e, {
				account: t,
				authorFlair: r,
				userFlair: s
			}) => {
				const n = Object(N.merge)(e, r);
				if (!s || !t) return n;
				const a = Object.keys(s)[0];
				if (!a) return n;
				const c = s[a],
					o = Object(z.e)(t),
					d = c.applied,
					i = c.displaySettings && c.displaySettings.isUserEnabled;
				return o && d && i ? Object(N.merge)(n, {
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
				je = r("./src/reddit/actions/pages/countrySite/constants.ts"),
				Te = r("./src/reddit/actions/pages/modListing/constants.ts"),
				De = r("./src/reddit/actions/pages/multireddit/constants.ts"),
				we = r("./src/reddit/actions/pages/postCreation.ts"),
				Pe = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				Ae = r("./src/reddit/actions/profileOverviewChrono/constants.ts"),
				Ce = r("./src/lib/makeActionCreator/index.ts"),
				Re = (r("./src/config.ts"), r("./src/lib/constants/index.ts"));
			r("./src/lib/makeApiRequest/index.ts"), r("./src/reddit/helpers/addRedesignIdentifier/index.ts"), r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			Object(Ce.a)("RECOMMENDED_POSTS_LOADED"), Object(Ce.a)("RECOMMENDED_POSTS_FAILED");
			var Ne = r("./src/reddit/actions/search.ts");
			const ke = _e.m,
				Le = (e => t => {
					for (let r = 0; r < e.length; r++) t = e[r](t);
					return t
				})([Ee]),
				xe = (e, t) => {
					const r = t.reduce((e, t) => (e[t.id] = Le(t), e), {});
					return Oe()({
						...e
					}, r)
				};
			var Ue = (e = ke, t) => {
				var r;
				switch (t.type) {
					case ee.G: {
						const {
							awards: r
						} = t.payload;
						return xe(e, r)
					}
					case ee.M: {
						const r = t.payload.awards.reduce((e, t) => (e[t.id] = {
							...Le(t),
							isEnabled: !0
						}, e), {});
						return Oe()({
							...e
						}, r)
					}
					case ee.b: {
						const {
							awards: r
						} = t.payload, s = r.reduce((e, t) => (e[t.award.id] = Le(t.award), e), {});
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
							[r.id]: Le(r)
						}) : {
							...e,
							[r.id]: Le(r)
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
					case G.b:
					case x.w:
					case U.b:
					case je.b:
					case je.f:
					case we.PAGE_LOADED:
					case Ie.e:
					case ge.f:
					case Te.e:
					case Te.h:
					case B.f:
					case B.m:
					case B.p:
					case B.v:
					case ve.r:
					case G.f:
					case ge.b:
					case De.b:
					case H.c:
					case F.b:
					case F.e:
					case Q.b:
					case Q.e:
					case Pe.b:
					case Pe.e:
					case Ae.b:
					case q.MORE_POSTS_LOADED:
					case q.PROFILE_POSTS_LOADED:
					case W.c:
					case W.e:
					case W.i:
					case W.g:
					case "RECOMMENDED_POSTS_LOADED":
					case Ne.e:
					case $.i:
					case V.SUBREDDIT_LOADED: {
						const r = {},
							s = t.payload.posts || [],
							n = t.payload.comments || [];
						for (const e in s) {
							const t = s[e].allAwardings || [];
							for (const e of t) r[e.id] = Le(Object(_e.h)(e))
						}
						for (const e in n) {
							const t = n[e],
								{
									associatedAward: s,
									allAwardings: a = []
								} = t;
							for (const e of a) r[e.id] = Le(Object(_e.h)(e));
							s && (r[s.id] = Le(s))
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
					case Se.s: {
						const {
							freeAwardEvent: s
						} = t.payload;
						return xe(e, (null === (r = null == s ? void 0 : s.freeAwards) || void 0 === r ? void 0 : r.awards) || [])
					}
					case Se.h: {
						const {
							awards: r
						} = t.payload;
						return xe(e, r || [])
					}
					default:
						return e
				}
			};
			const Me = {};
			var Be = (e = Me, t) => {
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
					pending: Be
				});
			const Fe = {};
			var qe = (e = Fe, t) => {
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
				We = Object(v.c)({
					api: Ge,
					order: qe
				});
			const He = {};
			var Ve = (e = He, t) => {
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
				Qe = Object(v.c)({
					order: Ve
				}),
				$e = Object(v.c)({
					blacklist: re,
					create: ce,
					manageable: ye,
					models: Ue,
					sortedUsable: We,
					tags: Qe
				}),
				Ke = r("./src/reddit/actions/badge.ts");
			const ze = {};
			var Ye = (e = ze, t) => {
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
			const Xe = {};
			var Je = (e = Xe, t) => {
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
				Ze = Object(v.c)({
					error: Ye,
					pending: Je
				});
			const et = {};
			var tt = (e = et, t) => {
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
			const rt = {};
			var st = (e = rt, t) => {
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
				nt = Object(v.c)({
					error: tt,
					pending: st
				}),
				at = Object(v.c)({
					subreddit: Ze,
					user: nt
				});
			const ct = {};
			var ot = (e = ct, t) => {
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
				dt = Object(v.c)({
					api: at,
					models: ot
				}),
				it = r("./src/reddit/actions/blockedRedditors.ts");
			const ut = {
				message: ""
			};
			var lt = (e = ut, t) => {
				switch (t.type) {
					case it.c:
					case it.d:
						return e;
					case it.b:
						return t.payload;
					default:
						return e
				}
			};
			var pt = (e = !1, t) => {
					switch (t.type) {
						case it.d:
							return !0;
						case it.c:
						case it.b:
							return !1;
						default:
							return e
					}
				},
				bt = Object(v.c)({
					error: lt,
					pending: pt
				});
			const ft = {
				ids: []
			};
			var yt = (e = ft, t) => {
					switch (t.type) {
						case it.a:
							return {
								ids: [...e.ids, t.payload], timestamp: e.timestamp
							};
						case it.e:
							const r = e.ids.slice();
							return r.splice(e.ids.indexOf(t.payload), 1), {
								...e,
								ids: r
							};
						case it.c:
							return {
								ids: [...e.ids, ...t.payload], timestamp: Date.now()
							};
						default:
							return e
					}
				},
				mt = Object(v.c)({
					api: bt,
					list: yt
				}),
				Ot = r("./src/reddit/actions/userBlocks.ts");
			const ht = {};
			var Et = (e = ht, t) => {
				switch (t.type) {
					case Ot.f:
					case Ot.e: {
						const {
							userId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Ot.d: {
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
			const _t = {};
			var It = (e = _t, t) => {
					switch (t.type) {
						case Ot.f: {
							const {
								userId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Ot.e:
						case Ot.d: {
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
				gt = Object(v.c)({
					error: Et,
					pending: It
				}),
				St = Object(v.c)({
					api: gt
				});
			const vt = {
				isViewSafe: !0,
				hasBrandSafetyBeenAssessed: !1
			};
			var jt = (e = vt, t) => {
					switch (t.type) {
						case m.a:
							return e.isViewSafe === t.payload.isViewSafe && e.hasBrandSafetyBeenAssessed ? e : {
								...e,
								isViewSafe: t.payload.isViewSafe,
								hasBrandSafetyBeenAssessed: !0
							};
						case V.SUBREDDIT_PENDING:
						case De.c:
						case ge.c:
							return e.hasBrandSafetyBeenAssessed ? {
								...e,
								hasBrandSafetyBeenAssessed: !1
							} : e;
						default:
							return e
					}
				},
				Tt = r("./src/reddit/actions/chat/init.ts");
			var Dt = (e = !1, t) => {
					switch (t.type) {
						case Tt.a:
							return !0;
						default:
							return e
					}
				},
				wt = r("./src/lib/omitKey/index.ts"),
				Pt = r("./src/reddit/actions/pages/chatSettings.ts");
			const At = {};
			var Ct = (e = At, t) => {
				switch (t.type) {
					case Pt.b: {
						const {
							subredditId: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Pt.a:
					case Pt.c:
					case Pt.d: {
						const {
							subredditId: r
						} = t.payload;
						return Object(wt.a)(e, r)
					}
					default:
						return e
				}
			};
			const Rt = {};
			var Nt = (e = Rt, t) => {
					switch (t.type) {
						case Pt.a:
						case Pt.b:
						case Pt.c:
						case Pt.d: {
							const {
								subredditId: r
							} = t.payload, s = t.type === Pt.c;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				kt = Object(v.c)({
					error: Ct,
					pending: Nt
				}),
				Lt = Object(v.c)({
					fetch: kt
				});
			const xt = {};
			var Ut, Mt = (e = xt, t) => {
					switch (t.type) {
						case Pt.a:
						case Pt.d: {
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
				Bt = Object(v.c)({
					api: Lt,
					models: Mt
				}),
				Gt = (r("./src/chat/actions/message/unreadCount.ts"), r("./src/chat/endpoints/sendbird/index.ts"), r("./src/reddit/actions/tabBadging.ts"));
			r("./src/reddit/selectors/chat.ts"), r("./src/reddit/selectors/user.ts");
			! function(e) {
				e.SYNC = "UNREAD_COUNT__SYNC", e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(Ut || (Ut = {}));
			const {
				SYNC: Ft,
				REQUEST_FAILED: qt,
				REQUEST_PENDING: Wt,
				REQUEST_SUCCESS: Ht
			} = Ut;
			Object(Ce.a)(Ft), Object(Ce.a)(qt), Object(Ce.a)(Wt), Object(Ce.a)(Ht);
			Re.kb;
			const Vt = {
				apiError: null
			};
			var Qt = (e = Vt, t) => {
				switch (t.type) {
					case Ut.REQUEST_FAILED: {
						const e = t.payload;
						return {
							...Vt,
							apiError: e
						}
					}
					case Ut.REQUEST_SUCCESS:
					case Ut.REQUEST_PENDING:
						return Vt;
					default:
						return e
				}
			};
			var $t = (e = !1, t) => {
					switch (t.type) {
						case Ut.REQUEST_PENDING:
							return !0;
						case Ut.REQUEST_FAILED:
						case Ut.REQUEST_SUCCESS:
							return !1;
						default:
							return e
					}
				},
				Kt = Object(v.c)({
					error: Qt,
					pending: $t
				});
			const zt = {
				hasNewMessages: !1,
				unreadMessages: 0
			};
			var Yt = (e = zt, t) => {
					switch (t.type) {
						case Ut.SYNC:
						case Ut.REQUEST_SUCCESS:
							return {
								...t.payload
							};
						default:
							return e
					}
				},
				Xt = Object(v.c)({
					api: Kt,
					count: Yt
				}),
				Jt = Object(v.c)({
					isInited: Dt,
					subredditSettingsPage: Bt,
					unread: Xt
				}),
				Zt = r("./src/reddit/actions/commentsListTruncated/constants.ts");
			var er = (e = !0, t) => {
					switch (t.type) {
						case Zt.a:
							return !1;
						case Zt.b:
							return !0;
						default:
							return e
					}
				},
				tr = r("./src/reddit/actions/communityFlairs/constants.ts");
			const rr = {};
			var sr = (e = rr, t) => {
					switch (t.type) {
						case tr.a: {
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
				nr = r("./src/reddit/actions/connection/constants.ts");
			const ar = {
				showBanner: !1,
				online: !0
			};
			var cr = (e = ar, t) => {
					switch (t.type) {
						case nr.a:
							return {
								online: !1, showBanner: !0
							};
						case nr.b:
							return {
								online: !0, showBanner: !0
							};
						case nr.c:
							return {
								...e, showBanner: !1
							};
						default:
							return e
					}
				},
				or = r("./src/reddit/actions/contentControls/constants.ts");
			const dr = {};
			var ir = (e = dr, t) => {
				switch (t.type) {
					case or.a: {
						const {
							subredditName: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case or.c:
					case or.b: {
						const {
							subredditName: r
						} = t.payload;
						return Object(wt.a)(e, r)
					}
					default:
						return e
				}
			};
			const ur = {};
			var lr = (e = ur, t) => {
					switch (t.type) {
						case or.c:
						case or.a:
						case or.b: {
							const {
								subredditName: r
							} = t.payload, s = t.type === or.c;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				pr = Object(v.c)({
					error: ir,
					pending: lr
				}),
				br = Object(v.c)({
					fetch: pr
				}),
				fr = r("./src/lib/safeGet/index.ts");
			const yr = {};
			var mr = (e = yr, t) => {
					switch (t.type) {
						case or.b: {
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
						case or.d: {
							const {
								subredditName: r,
								partialUpdates: s
							} = t.payload, n = Object(fr.a)(e, r);
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
				Or = Object(v.c)({
					api: br,
					models: mr
				}),
				hr = r("./src/reddit/actions/contentGate.ts"),
				Er = r("./src/reddit/actions/preferences.ts");
			const _r = {};
			var Ir = (e = _r, t) => {
				switch (t.type) {
					case hr.b: {
						const {
							subredditName: r
						} = t.payload;
						if (r) {
							if (Object(fr.a)(e, r)) {
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
					case hr.c: {
						const {
							subredditDescription: r,
							subredditName: s,
							isContributorRequestsDisabled: n,
							isContributorRequestTimestamp: a,
							subredditId: c
						} = t.payload;
						if (s) {
							if (Object(fr.a)(e, s)) {
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
					case hr.g: {
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
								...Object(fr.a)(e, r) || {},
								quarantinedSubreddit: !0,
								quarantineRequiresEmail: s,
								quarantineMessage: n,
								quarantineMessageHtml: a,
								quarantineMessageRTJson: c
							}
						} : e
					}
					case hr.a: {
						const {
							interstitialWarningMessage: r,
							interstitialWarningMessageHtml: s,
							interstitialWarningMessageRTJson: n,
							subredditName: a
						} = t.payload;
						return a ? {
							...e,
							[a]: {
								...Object(fr.a)(e, a) || {},
								interstitialWarningMessage: r,
								interstitialWarningMessageHtml: s,
								interstitialWarningMessageRTJson: n
							}
						} : e
					}
					case hr.k: {
						const {
							subredditName: r,
							banMessage: s
						} = t.payload;
						if (r) {
							if (Object(fr.a)(e, r)) {
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
					case hr.l: {
						const {
							subredditName: r
						} = t.payload;
						if (r) {
							if (Object(fr.a)(e, r)) {
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
					case hr.m: {
						const {
							subredditName: r
						} = t.payload;
						if (r) {
							if (Object(fr.a)(e, r)) {
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
					case hr.d:
					case hr.e:
					case hr.f: {
						const {
							profileName: r
						} = t.payload, s = Re.jc + r.toLocaleLowerCase(), n = Object(fr.a)(e, s) || {}, a = {
							profileDeleted: t.type === hr.e,
							profileSuspended: t.type === hr.f,
							profileBlockedForLegalReason: t.type === hr.d
						};
						return {
							...e,
							[s]: {
								...n,
								...a
							}
						}
					}
					case Er.q:
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
			const gr = {};
			var Sr = (e = gr, t) => {
					switch (t.type) {
						case x.w:
						case G.b:
						case G.f:
							return {
								...e, ...t.payload.continueThreads
							};
						default:
							return e
					}
				},
				vr = Object(v.c)({
					models: Sr
				}),
				jr = r("./src/reddit/actions/cooldownTime.ts");
			var Tr = (e = null, t) => {
				switch (t.type) {
					case jr.b:
					case jr.c:
						return null;
					case jr.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var Dr = (e = !1, t) => {
					switch (t.type) {
						case jr.b:
							return !0;
						case jr.a:
						case jr.c:
							return !1;
						default:
							return e
					}
				},
				wr = Object(v.c)({
					error: Tr,
					pending: Dr
				});
			var Pr = (e = 0, t) => {
					switch (t.type) {
						case jr.d: {
							const {
								expiresAt: r
							} = t.payload;
							return "number" == typeof r && r !== e ? r : e
						}
						default:
							return e
					}
				},
				Ar = Object(v.c)({
					api: wr,
					expiresAt: Pr
				}),
				Cr = r("./src/reddit/actions/postCollection/constants.ts");
			var Rr = (e = null, t) => {
				switch (t.type) {
					case s.c:
					case Cr.d:
					case Cr.c:
					case Cr.s:
					case Cr.r:
						return null;
					case Cr.b:
					case Cr.n:
						return t.payload;
					default:
						return e
				}
			};
			var Nr = (e = !1, t) => {
					switch (t.type) {
						case Cr.c:
						case Cr.r:
							return !0;
						case Cr.d:
						case Cr.b:
						case Cr.s:
						case Cr.n:
							return !1;
						default:
							return e
					}
				},
				kr = Object(v.c)({
					error: Rr,
					pending: Nr
				}),
				Lr = Object(v.c)({
					createOrUpdate: kr
				}),
				xr = r("./src/reddit/actions/postDraft.ts");
			const Ur = {};
			var Mr = (e = Ur, t) => {
				switch (t.type) {
					case xr.c:
					case xr.b: {
						const {
							draftId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case xr.a: {
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
			const Br = {};
			var Gr = (e = Br, t) => {
					switch (t.type) {
						case xr.b: {
							const {
								draftId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case xr.c:
						case xr.a: {
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
				Fr = Object(v.c)({
					error: Mr,
					pending: Gr
				});
			var qr = (e = null, t) => {
				switch (t.type) {
					case xr.d:
						return t.payload;
					case xr.f:
					case xr.e:
						return null;
					default:
						return e
				}
			};
			var Wr = (e = !1, t) => {
					switch (t.type) {
						case xr.f:
							return !0;
						case xr.e:
						case xr.d:
							return !1;
						default:
							return e
					}
				},
				Hr = Object(v.c)({
					error: qr,
					pending: Wr
				});
			const Vr = {
				apiError: null,
				needsCaptcha: !1,
				validationError: null,
				submitValidationError: null
			};
			var Qr = (e = Vr, t) => {
				switch (t.type) {
					case xr.l:
					case xr.j:
						return Vr;
					case xr.i: {
						const e = t.payload;
						return {
							...Vr,
							apiError: e
						}
					}
					case xr.m: {
						const e = t.payload;
						return {
							...Vr,
							validationError: e
						}
					}
					case xr.k: {
						const e = t.payload;
						return {
							...Vr,
							submitValidationError: e
						}
					}
					case xr.h:
						return {
							...Vr, needsCaptcha: !0
						};
					default:
						return e
				}
			};
			var $r = (e = !1, t) => {
					switch (t.type) {
						case xr.j:
							return !0;
						case xr.l:
						case xr.i:
						case xr.m:
						case xr.k:
						case xr.h:
							return !1;
						default:
							return e
					}
				},
				Kr = Object(v.c)({
					error: Qr,
					pending: $r
				}),
				zr = Object(v.c)({
					deleteDraft: Fr,
					listing: Hr,
					save: Kr
				}),
				Yr = r("./src/reddit/actions/postCreation/constants.ts");
			const Xr = {};
			var Jr = (e = Xr, t) => {
					switch (t.type) {
						case Yr.G: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Yr.p: {
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
				Zr = Object(v.c)({
					pending: Jr
				});
			var es = (e = null, t) => {
				switch (t.type) {
					case Yr.u:
					case Yr.v:
					case Yr.d:
					case Yr.e:
					case Yr.f:
					case Yr.i:
					case Yr.j:
					case Yr.n:
					case Yr.O:
						return null;
					case Yr.t:
						return t.payload;
					default:
						return e
				}
			};
			var ts = (e = !1, t) => {
					switch (t.type) {
						case Yr.u:
							return !0;
						case Yr.v:
						case Yr.t:
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
					converting: Zr,
					mediaUpload: rs
				});
			const ns = {};
			var as = (e = ns, t) => {
				switch (t.type) {
					case we.PAGE_LOADED:
					case we.PAGE_PENDING: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case we.PAGE_FAILED: {
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
			const cs = {};
			var os = (e = cs, t) => {
				switch (t.type) {
					case we.PAGE_PENDING: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: !1
						}
					}
					case we.PAGE_LOADED: {
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
			const ds = {};
			var is = (e = ds, t) => {
					switch (t.type) {
						case we.PAGE_PENDING: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case we.PAGE_LOADED:
						case we.PAGE_FAILED: {
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
				us = Object(v.c)({
					error: as,
					fetched: os,
					pending: is
				}),
				ls = r("./src/reddit/actions/scheduledPosts/constants.ts");
			const ps = {
				apiError: null,
				needsCaptcha: !1,
				pollError: void 0,
				validationError: null,
				submitValidationError: null
			};
			var bs = (e = ps, t) => {
				switch (t.type) {
					case Yr.P:
					case ls.h:
					case ls.k:
					case ls.b:
					case ls.d:
					case Yr.w:
					case Yr.c:
					case Yr.d:
					case Yr.e:
					case Yr.f:
					case Yr.i:
					case Yr.j:
					case Yr.n:
					case Yr.O:
					case Yr.E:
						return ps;
					case Yr.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return r ? ps : e
					}
					case Yr.o: {
						const e = t.payload;
						return {
							...ps,
							apiError: e
						}
					}
					case Yr.cb: {
						const e = t.payload;
						return {
							...ps,
							validationError: e
						}
					}
					case Yr.K:
					case Yr.J: {
						const e = t.payload;
						return {
							...ps,
							submitValidationError: e
						}
					}
					case Yr.a:
						return {
							...ps, needsCaptcha: !0
						};
					case Yr.y:
						return {
							...ps, pollError: t.payload
						};
					default:
						return e
				}
			};
			var fs = (e = !1, t) => {
					switch (t.type) {
						case Yr.w:
							return !0;
						case Yr.P:
						case ls.h:
						case Yr.o:
						case Yr.cb:
						case Yr.J:
						case Yr.K:
						case Yr.y:
						case Yr.a:
							return !1;
						default:
							return e
					}
				},
				ys = Object(v.c)({
					error: bs,
					pending: fs
				});
			var ms = (e = null, t) => {
				switch (t.type) {
					case Yr.x:
					case Yr.H:
						return null;
					case Yr.m:
						return t.payload;
					default:
						return e
				}
			};
			var Os = (e = !1, t) => {
					switch (t.type) {
						case Yr.x:
							return !0;
						case Yr.m:
						case Yr.l:
							return !1;
						default:
							return e
					}
				},
				hs = Object(v.c)({
					error: ms,
					pending: Os
				}),
				Es = Object(v.c)({
					submit: ys,
					update: hs
				});
			var _s = (e = null, t) => {
				switch (t.type) {
					case Yr.O:
					case Yr.M:
					case Yr.N:
						return null;
					default:
						return e
				}
			};
			var Is = (e = !1, t) => {
					switch (t.type) {
						case Yr.N:
							return !0;
						case Yr.M:
						case Yr.O:
							return !1;
						default:
							return e
					}
				},
				gs = Object(v.c)({
					error: _s,
					pending: Is
				}),
				Ss = Object(v.c)({
					change: gs
				}),
				vs = Object(v.c)({
					collection: Lr,
					draft: zr,
					editor: ss,
					page: us,
					post: Es,
					subreddit: Ss
				}),
				js = r("./node_modules/lodash/omit.js"),
				Ts = r.n(js),
				Ds = r("./src/reddit/actions/pages/postDraft.ts");
			const ws = {};
			var Ps = (e = ws, t) => {
				switch (t.type) {
					case xr.e: {
						const {
							postDrafts: e
						} = t.payload;
						return e || ws
					}
					case xr.c: {
						const r = e,
							{
								draftId: s
							} = t.payload;
						return Ts()(r, s)
					}
					case Yr.P: {
						const {
							draftId: r
						} = t.payload;
						return r ? Ts()(e, r) : e
					}
					case Ds.PAGE_LOADED: {
						const {
							drafts: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const As = e => {
					if (e.payload && e.payload.routeMatch) return e.payload.routeMatch.route.meta.name
				},
				Cs = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.queryParams
				};
			var Rs = r("./src/reddit/models/PostDraft/index.ts");
			var Ns = (e = "", t) => {
					switch (t.type) {
						case Yr.d:
							return t.payload || "";
						case Yr.E:
							return "";
						case u.b: {
							if (As(t) !== Re.Nb.POST_CREATION) return "";
							const r = Cs(t);
							return r && r.url ? r.url || "" : e
						}
						case xr.g: {
							const e = t.payload;
							return e.kind === Rs.b.Link && e.body || ""
						}
						case ls.b:
						case ls.n:
							return t.payload.url || "";
						default:
							return e
					}
				},
				ks = r("./src/reddit/models/PostCreationForm/index.ts"),
				Ls = r("./src/reddit/models/ScheduledPost/index.ts");
			var xs = (e = "", t) => {
				switch (t.type) {
					case Yr.e:
						return t.payload || "";
					case Yr.E:
					case Yr.I:
						return "";
					case Yr.Q:
						return t.payload.editorMode === ks.i.MARKDOWN ? t.payload.content || "" : e;
					case u.b: {
						if (As(t) !== Re.Nb.POST_CREATION) return "";
						const r = Cs(t);
						return r && r.text ? (e => e ? e.replace(/\+/g, " ") : "")(r.text) : e
					}
					case xr.g: {
						const e = t.payload;
						return e.kind === Rs.b.Markdown && e.body || ""
					}
					case ls.b:
					case ls.n: {
						const e = t.payload;
						return e.contentType === Ls.a.TEXT ? e.body : ""
					}
					default:
						return e
				}
			};
			const Us = {
				items: [],
				selectedKey: null
			};
			var Ms = (e = Us, t) => {
					switch (t.type) {
						case Yr.f:
							return t.payload || Us;
						case Yr.E:
							return Us;
						case u.b:
							return As(t) !== Re.Nb.POST_CREATION ? Us : e;
						case xr.g:
							return Us;
						case ls.b:
						case ls.n:
							return Us;
						default:
							return e
					}
				},
				Bs = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				Gs = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Fs = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
			const qs = Bs.a.createInitial;
			var Ws = (e = qs(), t) => {
					switch (t.type) {
						case Yr.h: {
							const {
								rteState: e
							} = t.payload;
							return e
						}
						case Yr.E:
							return Bs.a.createInitial();
						case Yr.Q: {
							const r = t.payload;
							return r.editorMode === ks.i.RICH_TEXT && r.editorKey === ks.h.POST_CREATION ? Bs.a.createInitial(r.content) : e
						}
						case u.b:
							return As(t) !== Re.Nb.POST_CREATION ? Bs.a.createInitial() : e;
						case xr.g: {
							const e = t.payload;
							return e.kind === Rs.b.RichText ? Bs.a.createInitial(e.body) : Bs.a.createInitial()
						}
						case ls.b:
						case ls.n: {
							const e = t.payload,
								r = Object(Gs.c)(e.mediaAssets);
							return Bs.a.createInitial(e.contentType === Ls.a.RTJSON ? Object(Fs.b)(e.body) : void 0, r || void 0)
						}
						default:
							return e
					}
				},
				Hs = Object(v.c)({
					link: Ns,
					markdown: xs,
					media: Ms,
					rte: Ws
				});
			var Vs = (e = null, t) => {
					switch (t.type) {
						case Yr.b:
							return t.payload || null;
						case Yr.E:
						case xr.g:
						case ls.b:
						case ls.n:
						case Yr.O:
							return null;
						case u.b:
							return As(t) === Re.Nb.POST_CREATION ? e : null;
						default:
							return e
					}
				},
				Qs = r("./src/reddit/selectors/scheduledPosts/index.ts");
			var $s = (e = null, t) => {
				switch (t.type) {
					case Yr.c:
						return t.payload || null;
					case ls.b:
					case ls.n: {
						const e = t.payload;
						return Object(Qs.n)({
							scheduledPost: e
						}) || null
					}
					case Yr.E:
						return null;
					case u.b:
						return As(t) === Re.Nb.POST_CREATION ? e : null;
					case xr.g:
						return t.payload.flair || null;
					default:
						return e
				}
			};
			var Ks = (e = null, t) => {
				switch (t.type) {
					case Yr.q:
						return t.payload.type || null;
					case ls.b:
					case ls.n:
					case Yr.i:
					case Yr.E:
					case u.b:
						return null;
					default:
						return e
				}
			};
			var zs = (e = !1, t) => {
				switch (t.type) {
					case Yr.S:
						return t.payload || !1;
					case ls.b:
					case ls.n:
						return "CHAT" === t.payload.discussionType;
					case Yr.E:
						return !1;
					case u.b:
						return As(t) === Re.Nb.POST_CREATION && e;
					case xr.g:
						return t.payload.isChatPost || !1;
					default:
						return e
				}
			};
			var Ys = (e = !1, t) => {
				switch (t.type) {
					case Yr.ab: {
						const {
							isContestMode: e
						} = t.payload;
						return e || !1
					}
					case Yr.E:
						return !1;
					case u.b:
						return As(t) === Re.Nb.POST_CREATION && e;
					case ls.b:
					case ls.n:
						return t.payload.isContestMode;
					default:
						return e
				}
			};
			var Xs = (e = !1, t) => {
				switch (t.type) {
					case Yr.U:
						return t.payload || !1;
					case Yr.E:
						return !1;
					case u.b:
						return As(t) === Re.Nb.POST_CREATION && e;
					case xr.g:
						return t.payload.isNSFW || !1;
					case ls.b:
					case ls.n:
						return t.payload.isNsfw;
					default:
						return e
				}
			};
			var Js = (e = !1, t) => {
				switch (t.type) {
					case Yr.V:
						return t.payload || !1;
					case Yr.E:
						return !1;
					case Yr.O: {
						const {
							name: r
						} = t.payload;
						return !!r && e
					}
					case u.b:
						return As(t) === Re.Nb.POST_CREATION && e;
					case xr.g:
						return t.payload.isOriginalContent || !1;
					case ls.b:
					case ls.n:
						return t.payload.isOriginalContent;
					default:
						return e
				}
			};
			var Zs = (e = !1, t) => {
				switch (t.type) {
					case Yr.W:
						return t.payload || !1;
					case ls.b:
					case ls.n:
						return !!t.payload.poll;
					case Yr.E:
						return !1;
					case u.b:
						return As(t) === Re.Nb.POST_CREATION && e;
					default:
						return e
				}
			};
			var en = (e = !1, t) => {
				switch (t.type) {
					case Yr.ab: {
						const {
							isPostAsMetaMod: e
						} = t.payload;
						return e || !1
					}
					case Yr.E:
						return !1;
					case u.b:
						return As(t) === Re.Nb.POST_CREATION && e;
					case ls.b:
					case ls.n:
						return t.payload.isPostAsMetaMod;
					default:
						return e
				}
			};
			var tn = (e = !1, t) => {
				switch (t.type) {
					case ls.b:
					case ls.n:
					case Yr.E:
						return !1;
					case xr.n:
						return t.payload;
					case u.b:
						return As(t) === Re.Nb.POST_CREATION && e;
					case xr.g:
						return t.payload.isPublicLink;
					default:
						return e
				}
			};
			var rn = (e = !1, t) => {
				switch (t.type) {
					case Yr.X:
						return t.payload || !1;
					case Yr.E:
						return !1;
					case u.b:
						return As(t) === Re.Nb.POST_CREATION && e;
					case xr.g:
						return t.payload.isSpoiler || !1;
					case ls.b:
					case ls.n:
						return t.payload.isSpoiler;
					default:
						return e
				}
			};
			var sn = (e = "", t) => {
				switch (t.type) {
					case d.b: {
						const {
							subredditName: e
						} = t.payload;
						return e
					}
					case u.b:
					case Yr.i:
					case Yr.q:
					case Yr.E:
					case d.h:
						return "";
					default:
						return e
				}
			};
			var nn = (e = "", t) => {
				switch (t.type) {
					case d.c: {
						const {
							username: e
						} = t.payload;
						return e
					}
					case u.b:
					case Yr.i:
					case Yr.q:
					case Yr.E:
					case d.h:
						return "";
					default:
						return e
				}
			};
			var an = (e = null, t) => {
					switch (t.type) {
						case Yr.N:
						case Yr.O:
							return t.payload;
						case Yr.M:
						case u.b:
							return null;
						default:
							return e
					}
				},
				cn = r("./src/reddit/actions/polls.ts");
			var on = (e = null, t) => {
					switch (t.type) {
						case cn.a:
							return {
								...t.payload
							};
						case ls.b:
						case ls.n: {
							const e = t.payload;
							return e.poll ? {
								options: e.poll.options,
								duration: 864e5 * e.poll.duration
							} : null
						}
						case d.h:
						case Yr.E:
							return null;
						case u.b:
							return As(t) !== Re.Nb.POST_CREATION ? null : e;
						default:
							return e
					}
				},
				dn = r("./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts"),
				un = r("./src/reddit/helpers/scheduledPosts/index.ts");
			var ln = (e = null, t) => {
				var r, s, n, a;
				switch (t.type) {
					case Yr.ab: {
						const {
							schedule: e
						} = t.payload;
						return e || null
					}
					case Yr.E:
					case xr.g:
					case Yr.O:
						return null;
					case u.b:
						if (As(t) === Re.Nb.POST_CREATION) {
							const c = null === (a = (null !== (n = null === (s = null === (r = t.payload) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.match.queryParams) && void 0 !== n ? n : {}).frequency) || void 0 === a ? void 0 : a.toUpperCase();
							if (c && Object(Ls.m)(c)) {
								const t = Object(dn.c)();
								return {
									...e,
									...t,
									frequencyOption: c,
									recurrenceInfo: {
										...dn.a,
										...null == e ? void 0 : e.recurrenceInfo,
										...Object(dn.b)(new Date(t.submitDate), c)
									}
								}
							}
							return e
						}
						return null;
					case ls.n: {
						const e = t.payload;
						return {
							submitDate: e.publishAt,
							timezoneName: e.clientTimezone,
							frequencyOption: null,
							recurrenceInfo: null
						}
					}
					case ls.b: {
						const e = t.payload;
						return {
							...Object(un.h)(e)
						}
					}
					default:
						return e
				}
			};
			var pn = (e = !1, t) => {
				const {
					type: r,
					payload: s
				} = t;
				switch (r) {
					case Yr.Y:
						return s || !1;
					case u.b:
						return As(t) === Re.Nb.POST_CREATION && e;
					case ls.b:
					case ls.n:
					case xr.g:
						return !1;
					default:
						return e
				}
			};
			var bn = (e = "", t) => {
				switch (t.type) {
					case Yr.g:
						return t.payload || "";
					case u.b:
						return As(t) !== Re.Nb.POST_CREATION ? "" : e;
					default:
						return e
				}
			};
			var fn = (e = null, t) => {
				switch (t.type) {
					case u.b:
						return As(t) !== Re.Nb.POST_CREATION ? null : e;
					case Yr.E:
						return null;
					case ls.b:
					case ls.n:
						return t.payload.id;
					default:
						return e
				}
			};
			var yn = (e = !0, t) => {
				switch (t.type) {
					case Yr.E:
						return !0;
					case Yr.Z:
						return t.payload;
					case u.b:
						return As(t) !== Re.Nb.POST_CREATION || e;
					case xr.g:
						return t.payload.sendReplies;
					case ls.b:
					case ls.n:
						return t.payload.isSendReplies;
					default:
						return e
				}
			};
			var mn = (e = null, t) => {
				switch (t.type) {
					case Yr.ab: {
						const {
							stickyPosition: e
						} = t.payload;
						return e || null
					}
					case Yr.E:
					case xr.g:
					case Yr.O:
						return null;
					case u.b:
						return As(t) === Re.Nb.POST_CREATION ? e : null;
					case ls.b:
					case ls.n:
						return t.payload.sticky || null;
					default:
						return e
				}
			};
			const On = Re.Wb.POST;
			var hn = (e = On, t) => {
				switch (t.type) {
					case Yr.E:
						return On;
					case Yr.r:
						return Re.Wb.CROSSPOST;
					case Yr.i:
						return t.payload.submissionType || On;
					case u.b: {
						if (As(t) !== Re.Nb.POST_CREATION) return On;
						const r = Cs(t);
						if (!r) return e;
						const {
							title: s = "",
							url: n,
							text: a = "",
							media: c = !1,
							selftext: o = !1,
							type: d = ""
						} = r, i = s && !a && !o;
						return c ? Re.Wb.MEDIA : void 0 !== n || i ? Re.Wb.LINK_ONLY : a || o ? Re.Wb.POST : d === Re.xb ? Re.Wb.POLL : e
					}
					case xr.g: {
						const e = t.payload;
						return Rs.a[e.kind]
					}
					case ls.b:
					case ls.n: {
						const e = t.payload;
						return e.poll ? Re.Wb.POLL : e.url ? Re.Wb.LINK_ONLY : Re.Wb.POST
					}
					default:
						return e
				}
			};
			var En = (e = null, t) => {
					switch (t.type) {
						case Yr.ab: {
							const {
								suggestedSort: e
							} = t.payload;
							return e || null
						}
						case Yr.E:
						case xr.g:
						case Yr.O:
							return null;
						case u.b:
							return As(t) === Re.Nb.POST_CREATION ? e : null;
						case ls.b:
						case ls.n:
							return t.payload.suggestedCommentSort || null;
						default:
							return e
					}
				},
				_n = r("./src/reddit/models/Poll/index.ts");
			const In = e => `Should ${e||"username"} become the top moderator?`,
				gn = e => e ? `Should we spin-off to r/${e}?` : "Should we spin-off to a new community?";
			var Sn = (e = "", t) => {
				switch (t.type) {
					case Yr.r:
						return t.payload.postTitle || "";
					case Yr.j:
						return t.payload || "";
					case Yr.D: {
						const {
							title: r
						} = t.payload;
						return e || (r || "")
					}
					case Yr.E:
						return "";
					case u.b: {
						if (As(t) !== Re.Nb.POST_CREATION) return "";
						const r = Cs(t);
						return r && r.title ? (e => e ? e.replace(/\+/g, " ") : "")(r.title) : e
					}
					case xr.g:
						return t.payload.title;
					case Yr.q: {
						const {
							oldType: r,
							type: s
						} = t.payload;
						return s === _n.a.ReplaceTopMod ? In("") : s === _n.a.Spinoff ? gn("") : r === _n.a.ReplaceTopMod || r === _n.a.Spinoff ? "" : e
					}
					case d.c: {
						const {
							username: e
						} = t.payload;
						return In(e)
					}
					case d.b: {
						const {
							subredditName: e
						} = t.payload;
						return gn(e)
					}
					case Yr.i: {
						const {
							extra: r
						} = t.payload;
						return !r || r.govType !== _n.a.ReplaceTopMod && r.govType !== _n.a.Spinoff ? e : ""
					}
					case ls.b:
					case ls.n:
						return t.payload.title;
					default:
						return e
				}
			};
			const vn = {
				name: "",
				theme: "theme_1",
				token: null
			};
			var jn = (e = vn, t) => {
					switch (t.type) {
						case Yr.bb:
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				Tn = Object(v.c)({
					body: Hs,
					eventSchedule: Vs,
					flair: $s,
					govType: Ks,
					isChatPost: zs,
					isContestMode: Ys,
					isNSFW: Xs,
					isOC: Js,
					isPostAsMetaMod: en,
					isPoll: Zs,
					isPublicLink: tn,
					isSpoiler: rn,
					newSubreddit: sn,
					newTopMod: nn,
					nextSubreddit: an,
					polls: on,
					postSchedule: ln,
					postToTwitter: pn,
					recaptcha: bn,
					scheduledPostId: fn,
					sendReplies: yn,
					stickyPosition: mn,
					submissionType: hn,
					suggestedSort: En,
					title: Sn,
					tournament: jn
				});
			var Dn = (e = null, t) => {
				switch (t.type) {
					case u.b: {
						if (As(t) !== Re.Nb.POST_CREATION) return null;
						const r = Cs(t);
						return r && r.text && (e => e ? e.replace(/\+/g, " ") : "")(r.text) ? ks.i.MARKDOWN : e
					}
					case Yr.H: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case Yr.I:
						return null;
					case Yr.Q: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case ls.b:
					case ls.n:
						return t.payload.contentType === Ls.a.RTJSON ? ks.i.RICH_TEXT : ks.i.MARKDOWN;
					default:
						return e
				}
			};
			const wn = {
				title: [],
				body: [],
				link: [],
				flair: []
			};
			var Pn = (e = wn, t) => {
				switch (t.type) {
					case Yr.c:
					case Yr.d:
					case Yr.e:
						return e[Re.wb.BODY] ? {
							...e,
							[Re.wb.BODY]: []
						} : e;
					case Yr.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return e[Re.wb.BODY] && r ? {
							...e,
							[Re.wb.BODY]: []
						} : e
					}
					case Yr.j:
						return e[Re.wb.TITLE] ? {
							...e,
							[Re.wb.TITLE]: []
						} : e;
					case Yr.L: {
						const r = t.payload;
						return {
							...e,
							[r]: []
						}
					}
					case Yr.n: {
						const r = t.payload;
						return r ? {
							...e,
							[r]: []
						} : wn
					}
					case Yr.K:
					case Yr.J:
						return ((e, t) => {
							const r = (t.fields || []).filter(({
								field: e
							}) => Object(ks.w)(e));
							if (!r.length) return e;
							const s = r.reduce((e, t) => (e[t.field] || (e[t.field] = []), e[t.field].push(t.msg), e), {});
							return {
								...e,
								...s
							}
						})(e, t.payload);
					case u.b:
						return As(t) !== Re.Nb.POST_CREATION ? wn : e;
					default:
						return e
				}
			};
			var An = (e = !1, t) => {
				switch (t.type) {
					case Yr.b:
					case Yr.c:
					case Yr.d:
					case Yr.e:
					case Yr.f:
					case Yr.j:
					case Yr.i:
					case Yr.U:
					case Yr.V:
					case Yr.X:
					case xr.n:
					case Yr.Z:
					case Yr.ab:
						return !0;
					case Yr.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return !!r || e
					}
					case Yr.P:
					case ls.h:
						return !1;
					case Yr.R:
						return t.payload;
					case u.b:
						return As(t) === Re.Nb.POST_CREATION && e;
					case Yr.E:
					case xr.l:
					case xr.g:
						return !1;
					default:
						return e
				}
			};
			const Cn = ks.r.Post;
			var Rn = (e = Cn, t) => {
					switch (t.type) {
						case Yr.w:
							return ks.r.Post;
						case Yr.F:
							return t.payload;
						case xr.j:
							return ks.r.Draft;
						case u.b:
							return As(t) !== Re.Nb.POST_CREATION ? Cn : e;
						default:
							return e
					}
				},
				Nn = Object(v.c)({
					editorMode: Dn,
					fieldValidation: Pn,
					isChanged: An,
					submitMode: Rn
				});
			var kn = (e = "", t) => {
				switch (t.type) {
					case Yr.H:
						return t.payload.editorMode === ks.i.MARKDOWN ? t.payload.postContent || "" : e;
					case Yr.I:
						return "";
					case Yr.Q:
						return t.payload.editorMode === ks.i.MARKDOWN ? t.payload.content || "" : e;
					default:
						return e
				}
			};
			const Ln = Bs.a.createInitial;
			var xn = (e = Ln(), t) => {
					switch (t.type) {
						case Yr.I:
							return Bs.a.createInitial();
						case Yr.H: {
							const r = t.payload;
							return r.editorMode === ks.i.RICH_TEXT && "object" == typeof r.postContent ? Bs.a.createInitial(r.postContent, r.mediaMetadata) : e
						}
						case Yr.Q: {
							const r = t.payload;
							return r.editorMode === ks.i.RICH_TEXT && r.editorKey === ks.h.POST_EDITING ? Bs.a.createInitial(r.content) : e
						}
						default:
							return e
					}
				},
				Un = Object(v.c)({
					markdown: kn,
					rte: xn
				});
			var Mn = (e = null, t) => {
					switch (t.type) {
						case Yr.H: {
							const {
								postId: e
							} = t.payload;
							return e
						}
						case Yr.I:
							return null;
						default:
							return e
					}
				},
				Bn = Object(v.c)({
					draft: Un,
					postId: Mn
				});
			var Gn = (e = !1, t) => {
				switch (t.type) {
					case Yr.C:
					case Yr.B:
						return !1;
					case Yr.z:
						return !0;
					default:
						return e
				}
			};
			var Fn = (e = !1, t) => {
					switch (t.type) {
						case Yr.z:
						case Yr.B:
							return !1;
						case Yr.C:
							return !0;
						default:
							return e
					}
				},
				qn = Object(v.c)({
					error: Gn,
					pending: Fn
				});
			var Wn = (e = !1, t) => {
				switch (t.type) {
					case Yr.A: {
						const {
							isChanged: e
						} = t.payload;
						return e
					}
					case Yr.j:
					case Yr.d:
					case Yr.e:
					case Yr.i:
					case Yr.r:
					case xr.g:
						return !0;
					case Yr.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return !!r || e
					}
					default:
						return e
				}
			};
			const Hn = {};
			var Vn = (e = Hn, t) => {
				switch (t.type) {
					case Yr.B: {
						const {
							recSubsDict: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Qn = [];
			var $n = (e = Qn, t) => {
					switch (t.type) {
						case Yr.B: {
							const {
								recSubsOrder: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				Kn = Object(v.c)({
					api: qn,
					isInputChanged: Wn,
					model: Vn,
					order: $n
				}),
				zn = Object(v.c)({
					api: vs,
					drafts: Ps,
					formData: Tn,
					formState: Nn,
					postEditing: Bn,
					subredditRec: Kn
				}),
				Yn = r("./src/reddit/actions/dashboard/constants.ts");
			const Xn = {
				selectedComponent: null,
				subredditPending: !1,
				subredditLoaded: {}
			};
			var Jn = (e = Xn, t) => {
				switch (t.type) {
					case Yn.a:
						return {
							...e, selectedComponent: t.payload
						};
					case Yn.d: {
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
					case Yn.c: {
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
			var Zn = (e = null, t) => {
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
			var ea = (e = !1, t) => {
				switch (t.type) {
					case Ie.c:
						return !1;
					case Ie.b:
						return !0;
					default:
						return e
				}
			};
			var ta = (e = !1, t) => {
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
				ra = Object(v.c)({
					error: Zn,
					loaded: ea,
					pending: ta
				}),
				sa = Object(v.c)({
					list: ra
				}),
				na = r("./node_modules/lodash/isEmpty.js"),
				aa = r.n(na);
			const ca = {};
			var oa = (e = ca, t) => {
					switch (t.type) {
						case Ie.b: {
							const {
								discoveryUnits: r
							} = t.payload;
							return aa()(r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				da = r("./node_modules/lodash/forOwn.js"),
				ia = r.n(da),
				ua = r("./src/reddit/helpers/name/index.ts");
			const la = {};
			var pa = (e = la, t) => {
					switch (t.type) {
						case Ie.b: {
							const {
								discoveryUnits: r
							} = t.payload;
							if (aa()(r)) return e;
							const s = {};
							return ia()(r, e => {
								s[Object(ua.g)(e.unitName)] = e.id
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				ba = Object(v.c)({
					api: sa,
					models: oa,
					nameToId: pa
				}),
				fa = r("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const ya = [];
			var ma = (e = ya, t) => {
					switch (t.type) {
						case fa.a: {
							const {
								subredditId: r
							} = t.payload;
							return [...e, r]
						}
						default:
							return e
					}
				},
				Oa = r("./src/reddit/actions/economics/banners/constants.ts");
			const ha = {
				dismissedBanners: {}
			};
			var Ea = (e = ha, t) => {
					switch (t.type) {
						case Oa.c: {
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
						case Oa.d: {
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
						case Oa.a:
						case Oa.b: {
							const {
								subredditId: r,
								bannerType: s
							} = t.payload, n = e.dismissedBanners[r] || {}, a = t.type === Oa.a;
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
			const Ia = {
				badgeType: _a.a.Cosmetic,
				view: _a.c.Gallery
			};
			var ga = (e = Ia, t) => {
				switch (t.type) {
					case o.c: {
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
						return Ia;
					default:
						return e
				}
			};
			var Sa = (e = null, t) => {
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
				va = r("./src/reddit/actions/economics/powerups/constants.ts");

			function ja(e, t) {
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

			function Ta(e) {
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
						emotes: n.map(e => ja(e, t))
					}
				}), r
			}
			const Da = {};
			var wa = (e = Da, t) => {
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
					case va.b: {
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
										[r.name]: ja(r, t)
									}
								})
							}
						}(e, r, s)
					}
					default:
						return e
				}
			};
			const Pa = {};
			var Aa = (e = Pa, t) => {
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
				Ca = r("./src/reddit/actions/economics/me/constants.ts");
			const Ra = {
				fetched: !1,
				data: {}
			};
			var Na = (e = Ra, t) => {
					switch (t.type) {
						case Ca.a:
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
				ka = r("./src/reddit/reducers/economics/paymentSystems/index.ts");
			const La = {
				fetched: !1,
				data: null
			};
			var xa = (e = La, t) => {
					switch (t.type) {
						case Ca.b:
							return {
								fetched: !0, data: e.data
							};
						case Ca.c:
							return {
								fetched: !0, data: t.payload
							};
						default:
							return e
					}
				},
				Ua = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				Ma = Object(v.c)({
					banners: Ea,
					currentBadgeManagementScreen: ga,
					currentModalArgs: Sa,
					emotes: wa,
					gifs: Aa,
					me: Na,
					paymentSystems: ka.b,
					pointsCopy: xa,
					subredditPremium: Ua.b
				}),
				Ba = r("./src/reddit/actions/emoji.ts");
			const Ga = {};
			var Fa = (e = Ga, t) => {
					switch (t.type) {
						case Ba.h: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Ba.g:
						case Ba.f: {
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
				qa = Object(v.c)({
					pending: Fa
				}),
				Wa = Object(v.c)({
					list: qa
				});
			const Ha = {};
			var Va = (e = Ha, t) => {
					switch (t.type) {
						case Ba.f:
						case Ba.c:
							return e;
						case Ba.g: {
							const {
								data: e
							} = t.payload;
							return e
						}
						case Ba.d: {
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
						case Ba.i: {
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
						case Ba.e: {
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
				Qa = Object(v.c)({
					api: Wa,
					models: Va
				}),
				$a = r("./src/reddit/actions/experiments.ts");
			const Ka = /^experiment_(.*)$/i,
				za = e => {
					const t = e.match(Ka);
					if (null !== t) return t[1]
				},
				Ya = {};
			var Xa = (e = Ya, t) => {
					switch (t.type) {
						case u.b: {
							const r = Cs(t);
							if (!r) return e;
							const s = {};
							for (const e in r) {
								const t = za(e);
								t && (s[t.toLowerCase()] = r[e] || "")
							}
							return aa()(s) ? e : {
								...e,
								...s
							}
						}
						case $a.b: {
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
				Ja = r("./src/reddit/actions/externalAccount.ts");
			const Za = {};
			var ec = (e = Za, t) => {
				switch (t.type) {
					case Ja.e:
					case Ja.f: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Ja.d: {
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
						case Ja.e: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Ja.f:
						case Ja.d: {
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
				sc = Object(v.c)({
					error: ec,
					pending: rc
				});
			const nc = {};
			var ac = (e = nc, t) => {
				switch (t.type) {
					case Ja.l:
					case Ja.k: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Ja.j: {
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
			const cc = {};
			var oc = (e = cc, t) => {
					switch (t.type) {
						case Ja.b: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Ja.c:
						case Ja.a: {
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
				dc = Object(v.c)({
					error: ac,
					pending: oc
				});
			const ic = {};
			var uc = (e = ic, t) => {
				switch (t.type) {
					case Ja.i:
					case Ja.h: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Ja.g: {
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
			const lc = {};
			var pc = (e = lc, t) => {
				switch (t.type) {
					case Ja.h: {
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
			const bc = {};
			var fc = (e = bc, t) => {
					switch (t.type) {
						case Ja.i: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Ja.h:
						case Ja.g: {
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
				yc = Object(v.c)({
					error: uc,
					fetched: pc,
					pending: fc
				});
			const mc = {};
			var Oc = (e = mc, t) => {
				switch (t.type) {
					case Ja.l:
					case Ja.k: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Ja.j: {
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
						case Ja.l: {
							const {
								username: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Ja.k:
						case Ja.j: {
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
				_c = Object(v.c)({
					error: Oc,
					pending: Ec
				}),
				Ic = Object(v.c)({
					connect: sc,
					disconnect: dc,
					user: _c,
					subreddit: yc
				});
			const gc = {};
			var Sc = (e = gc, t) => {
				switch (t.type) {
					case Ja.h: {
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
			const vc = {};
			var jc = (e = vc, t) => {
					switch (t.type) {
						case Ja.k: {
							const {
								username: r,
								accountsData: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case Ja.c: {
							const {
								username: r,
								provider: s
							} = t.payload, n = e[r];
							return n && n[s] ? {
								...e,
								[r]: Ts()(n, s)
							} : e
						}
						default:
							return e
					}
				},
				Tc = Object(v.c)({
					api: Ic,
					user: jc,
					subreddit: Sc
				}),
				Dc = r("./src/reddit/featureFlags/index.ts");
			const wc = new Set(["0", "disabled", "false", "off", ""]);
			var Pc = e => !wc.has(e.toLowerCase());
			const Ac = Dc.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				Cc = Dc.a.reduce((e, t) => (e[t] = null, e), {});
			var Rc = (e = Cc, t) => {
					switch (t.type) {
						case u.b: {
							const r = Cs(t);
							if (void 0 !== r) {
								const t = {};
								for (const e in r) {
									const s = Object(Dc.g)(e);
									if (s) {
										const n = Ac[s.toLowerCase()];
										if (n) {
											const s = r[e],
												a = "string" != typeof s || Pc(s);
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
						case Dc.b: {
							const {
								featureName: r,
								currentValue: s
							} = t.payload;
							return s === e[r] ? e : {
								...e,
								[r]: s
							}
						}
						case Dc.c: {
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
				Nc = Object(v.c)({
					overrides: Rc
				}),
				kc = r("./src/reddit/actions/focusedVerticals/constants.ts");
			const Lc = {
				focusedVerticalGqlError: null
			};
			var xc = (e = Lc, t) => {
				switch (t.type) {
					case kc.h:
					case kc.g:
					case kc.c:
						return {
							...e, focusedVerticalGqlError: null
						};
					case kc.e:
						return {
							...e, focusedVerticalGqlError: t.payload
						};
					default:
						return e
				}
			};
			const Uc = {
				focusedVerticalGqlPending: !1
			};
			var Mc = (e = Uc, t) => {
					switch (t.type) {
						case kc.h:
							return {
								...e, focusedVerticalGqlPending: !0
							};
						case kc.e:
						case kc.g:
						case kc.c:
							return {
								...e, focusedVerticalGqlPending: !1
							};
						default:
							return e
					}
				},
				Bc = Object(v.c)({
					error: xc,
					pending: Mc
				});
			var Gc = (e = "", t) => {
				switch (t.type) {
					case kc.g:
					case kc.c:
						return t.payload.category || "";
					default:
						return e
				}
			};
			const Fc = {
				dismissed: !0
			};
			var qc = (e = Fc, t) => {
				switch (t.type) {
					case kc.j:
						return {
							dismissed: !1
						};
					case kc.i:
						return {
							dismissed: !0
						};
					default:
						return e
				}
			};
			var Wc = (e = null, t) => {
				switch (t.type) {
					case kc.g:
					case kc.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var Hc = (e = null, t) => {
				switch (t.type) {
					case kc.g:
					case kc.c:
					case kc.f:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var Vc = (e = null, t) => {
					switch (t.type) {
						case kc.g:
						case kc.c:
							return t.payload.recommendedSubredditIds || null;
						default:
							return e
					}
				},
				Qc = Object(v.c)({
					api: Bc,
					components: qc,
					interactedSubredditIds: Wc,
					recommendedSubredditIds: Vc,
					category: Gc,
					lastLoadedEnv: Hc
				});
			Object(Ce.a)("FONTS_FONT_FILES_PARSED");
			const $c = [];
			var Kc = (e = $c, t) => {
				switch (t.type) {
					case "FONTS_FONT_FILES_PARSED":
						return t.payload.fonts;
					default:
						return e
				}
			};
			var zc = (e = null, t) => {
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
			var Yc = (e = !1, t) => {
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
			var Xc = (e = !1, t) => {
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
				Jc = Object(v.c)({
					error: zc,
					pending: Yc,
					showLoader: Xc
				});
			var Zc = (e = null, t) => {
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
			var eo = (e = null, t) => {
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
			var to = (e = null, t) => {
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
			var ro = (e = !1, t) => {
				switch (t.type) {
					case ee.r:
						return t.payload;
					case ee.K:
						return !1;
					default:
						return e
				}
			};
			var so = (e = !1, t) => {
				switch (t.type) {
					case ee.J:
						return !0;
					default:
						return e
				}
			};
			var no = (e = "", t) => {
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
			var co = (e = ao, t) => {
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
				oo = Object(v.c)({
					api: Jc,
					correlationId: Zc,
					gildModalThingId: to,
					isAnonymous: ro,
					isIframed: so,
					message: no,
					gildedThing: eo,
					selectedAward: co
				});
			var io = (e = null, t) => {
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
			var uo = (e = !1, t) => {
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
				lo = Object(v.c)({
					error: io,
					pending: uo
				});
			var po = (e = "", t) => {
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
				bo = Object(v.c)({
					api: lo,
					givePremiumModalAccountName: po
				}),
				fo = r("./src/reddit/actions/header.ts"),
				yo = r("./src/reddit/actions/overlayEvents.ts");
			var mo = (e = !1, t) => {
					switch (t.type) {
						case fo.a:
							return !1;
						case fo.b:
							return !0;
						case fo.c:
							return !e;
						case yo.b:
							return !1;
						default:
							return e
					}
				},
				Oo = Object(v.c)({
					isSubscriptionsDropdownOpen: mo
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
			const _o = {};
			var Io = (e = _o, t) => {
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
			};
			var go = (e = null, t) => {
				var r;
				switch (t.type) {
					case ge.b: {
						const s = t.payload;
						return aa()(s) ? e : (null === (r = s.notifications) || void 0 === r ? void 0 : r.position) || null
					}
					default:
						return e
				}
			};
			const So = {
				notifications: null,
				id: null
			};
			var vo = (e = So, t) => {
					var r, s;
					switch (t.type) {
						case ge.b: {
							const n = t.payload;
							return aa()(n) ? e : {
								...e,
								notifications: (null === (r = n.notifications) || void 0 === r ? void 0 : r.notifications) || null,
								id: null === (s = n.notifications) || void 0 === s ? void 0 : s.id
							}
						}
						default:
							return e
					}
				},
				jo = r("./src/reddit/actions/inAppNotifications/constants.ts");
			var To = (e = !1, t) => {
					switch (t.type) {
						case jo.a:
							return !0;
						default:
							return e
					}
				},
				Do = Object(v.c)({
					inFeedPosition: go,
					notifications: vo,
					shouldHideInAppNotifications: To
				}),
				wo = r("./src/reddit/actions/interceptedAction.ts");
			var Po = (e = null, t) => {
					switch (t.type) {
						case wo.a:
							return t.payload;
						case wo.b:
							return null;
						default:
							return e
					}
				},
				Ao = r("./src/reddit/actions/changeUsername.ts");
			var Co = (e = !0, t) => {
					switch (t.type) {
						case Ao.a:
							return !1;
						case Ao.b:
							return !0;
						default:
							return e
					}
				},
				Ro = r("./src/reddit/actions/emailVerificationTooltip.ts");
			var No = (e = !1, t) => {
					switch (t.type) {
						case Ro.a:
							return !e;
						default:
							return e
					}
				},
				ko = r("./src/reddit/actions/moderatingSubreddits.ts");
			var Lo = (e = !1, t) => {
					switch (t.type) {
						case ko.a: {
							if (e) return e;
							const r = t.payload;
							return Object.keys(r).some(e => !0 === r[e].posts)
						}
						case V.SUBREDDIT_LOADED:
						case G.b:
						case G.f:
						case we.PAGE_LOADED: {
							if (e) return e;
							const {
								payload: r
							} = t;
							return r.subredditPermissions && r.subreddits ? !!r.subredditPermissions.posts : e
						}
						case B.i:
						case B.f:
						case B.m:
						case B.p:
						case B.v: {
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
				xo = r("./src/reddit/actions/jsApi.ts");
			const Uo = [];
			var Mo = (e = Uo, t) => {
					switch (t.type) {
						case xo.a: {
							const r = t.payload;
							return -1 === e.indexOf(r) && (e = [...e, r]).sort(), e
						}
						default:
							return e
					}
				},
				Bo = r("./src/reddit/actions/langSite/index.ts");
			const Go = {
				bannerClosedTime: 0
			};
			var Fo = (e = Go, t) => {
					switch (t.type) {
						case Bo.a:
							return {
								...e, bannerClosedTime: Date.now()
							};
						default:
							return e
					}
				},
				qo = r("./src/reddit/actions/leaderboard/constants.ts");
			const Wo = {};
			var Ho = (e = Wo, t) => {
				switch (t.type) {
					case qo.a: {
						const {
							subredditId: r,
							data: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case qo.b:
					case qo.c: {
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
			const Vo = {};
			var Qo = (e = Vo, t) => {
					switch (t.type) {
						case qo.a:
						case qo.c: {
							const {
								subredditId: r
							} = t.payload, {
								[r]: s,
								...n
							} = e;
							return n
						}
						case qo.b: {
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
				$o = Object(v.c)({
					error: Ho,
					pending: Qo
				});
			const Ko = {};
			var zo = (e = Ko, t) => {
					switch (t.type) {
						case qo.c: {
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
				Yo = Object(v.c)({
					api: $o,
					models: zo
				});
			var Xo = (e = "", t) => {
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
			const Jo = {};
			var Zo = (e = Jo, t) => {
				switch (t.type) {
					case Ne.d:
					case Ne.e:
					case H.b:
					case H.c: {
						const {
							key: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Re.bc.Users) ? e : {
							...e,
							[r]: null
						}
					}
					case Ne.c:
					case H.a: {
						const {
							key: r,
							error: s,
							success: n,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Re.bc.Users) || n && n.authors ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const ed = {};
			var td = (e = ed, t) => {
					switch (t.type) {
						case Ne.d:
						case H.b: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.bc.Users) ? e : {
								...e,
								[r]: !0
							}
						}
						case Ne.e:
						case Ne.c:
						case H.c:
						case H.a: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.bc.Users) ? e : {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				rd = Object(v.c)({
					error: Zo,
					pending: td
				});
			const sd = {};
			var nd = (e = sd, t) => {
				switch (t.type) {
					case Ne.e: {
						const {
							fetchedToken: r,
							key: s,
							type: n
						} = t.payload;
						if (-1 === n.indexOf(Re.bc.Users)) return e;
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
			const ad = {};
			var cd = (e = ad, t) => {
				switch (t.type) {
					case Ne.e: {
						const {
							key: r,
							authorOrder: s,
							type: n
						} = t.payload;
						return -1 !== n.indexOf(Re.bc.Users) && e[r] ? {
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
						return -1 === n.indexOf(Re.bc.Users) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const od = {};
			var dd = (e = od, t) => {
					switch (t.type) {
						case Ne.e:
						case H.c: {
							const {
								key: r,
								tokens: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Re.bc.Users) ? e : s.authors ? {
								...e,
								[r]: {
									token: null
								}
							} : Object(wt.a)(e, r)
						}
						default:
							return e
					}
				},
				id = Object(v.c)({
					api: rd,
					identifiers: cd,
					fetchedTokens: nd,
					loadMore: dd
				});
			const ud = {};
			var ld = (e = ud, t) => {
				switch (t.type) {
					case Ne.d:
					case Ne.e:
					case H.b:
					case H.c: {
						const {
							key: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Re.bc.Comments) ? e : {
							...e,
							[r]: null
						}
					}
					case Ne.c:
					case H.a: {
						const {
							key: r,
							error: s,
							success: n,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Re.bc.Comments) || n && n.comments ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const pd = {};
			var bd = (e = pd, t) => {
					switch (t.type) {
						case Ne.d:
						case H.b: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.bc.Comments) ? e : {
								...e,
								[r]: !0
							}
						}
						case Ne.e:
						case Ne.c:
						case H.c:
						case H.a: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.bc.Comments) ? e : {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				fd = Object(v.c)({
					error: ld,
					pending: bd
				});
			const yd = {};
			var md = (e = yd, t) => {
				switch (t.type) {
					case Ne.e: {
						const {
							fetchedToken: r,
							key: s,
							type: n
						} = t.payload;
						if (-1 === n.indexOf(Re.bc.Comments)) return e;
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
			const Od = {};
			var hd = (e = Od, t) => {
				switch (t.type) {
					case Ne.e: {
						const {
							key: r,
							commentOrder: s,
							type: n
						} = t.payload;
						return -1 !== n.indexOf(Re.bc.Comments) && e[r] ? {
							...e,
							[r]: e[r].concat(s)
						} : e
					}
					case H.c: {
						const {
							key: r,
							commentOrder: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Re.bc.Comments) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Ed = {};
			var _d = (e = Ed, t) => {
					switch (t.type) {
						case Ne.e:
						case H.c: {
							const {
								key: r,
								tokens: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Re.bc.Comments) ? e : s.comments ? {
								...e,
								[r]: {
									token: s.comments
								}
							} : Object(wt.a)(e, r)
						}
						default:
							return e
					}
				},
				Id = Object(v.c)({
					api: fd,
					identifiers: hd,
					fetchedTokens: md,
					loadMore: _d
				});
			const gd = {};
			var Sd = (e = gd, t) => {
				switch (t.type) {
					case Ne.d:
					case Ne.e:
					case H.b:
					case H.c: {
						const {
							key: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Re.bc.Subreddits) ? e : {
							...e,
							[r]: null
						}
					}
					case Ne.c:
					case H.a: {
						const {
							key: r,
							error: s,
							success: n,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Re.bc.Subreddits) || n && n.communities ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const vd = {};
			var jd = (e = vd, t) => {
					switch (t.type) {
						case Ne.d:
						case H.b: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.bc.Subreddits) ? e : {
								...e,
								[r]: !0
							}
						}
						case Ne.e:
						case Ne.c:
						case H.c:
						case H.a: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.bc.Subreddits) ? e : {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				Td = Object(v.c)({
					error: Sd,
					pending: jd
				});
			const Dd = {};
			var wd = (e = Dd, t) => {
				switch (t.type) {
					case Ne.e: {
						const {
							fetchedToken: r,
							key: s,
							type: n
						} = t.payload;
						if (-1 === n.indexOf(Re.bc.Subreddits)) return e;
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
			const Pd = {};
			var Ad = (e = Pd, t) => {
				switch (t.type) {
					case Ne.e: {
						const {
							key: r,
							communityOrder: s,
							type: n
						} = t.payload;
						return -1 !== n.indexOf(Re.bc.Subreddits) && e[r] ? {
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
						return -1 === n.indexOf(Re.bc.Subreddits) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Cd = {};
			var Rd = (e = Cd, t) => {
					switch (t.type) {
						case Ne.e:
						case H.c: {
							const {
								key: r,
								tokens: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Re.bc.Subreddits) ? e : s.communities ? {
								...e,
								[r]: {
									token: s.communities
								}
							} : Object(wt.a)(e, r)
						}
						default:
							return e
					}
				},
				Nd = Object(v.c)({
					api: Td,
					identifiers: Ad,
					fetchedTokens: wd,
					loadMore: Rd
				});
			const kd = {};
			var Ld = (e = kd, t) => {
				switch (t.type) {
					case Ne.d:
					case Ne.e:
					case H.b:
					case H.c: {
						const {
							key: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Re.bc.Subreddits) && -1 === s.indexOf(Re.bc.Users) ? e : {
							...e,
							[r]: null
						}
					}
					case Ne.c:
					case H.a: {
						const {
							key: r,
							error: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Re.bc.Subreddits) && -1 === n.indexOf(Re.bc.Users) ? e : {
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
			const xd = {};
			var Ud = (e = xd, t) => {
					switch (t.type) {
						case Ne.d:
						case H.b: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.bc.Subreddits) && -1 === s.indexOf(Re.bc.Users) ? e : {
								...e,
								[r]: !0
							}
						}
						case Ne.e:
						case Ne.c:
						case H.c:
						case H.a: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.bc.Subreddits) && -1 === s.indexOf(Re.bc.Users) ? e : {
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
				Md = Object(v.c)({
					error: Ld,
					pending: Ud
				});
			const Bd = {};
			var Gd = (e = Bd, t) => {
				switch (t.type) {
					case Ne.e: {
						const {
							fetchedToken: r,
							key: s,
							type: n
						} = t.payload;
						if (-1 === n.indexOf(Re.bc.Subreddits) && -1 === n.indexOf(Re.bc.Users)) return e;
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
			const Fd = {};
			var qd = (e = Fd, t) => {
				switch (t.type) {
					case Ne.e: {
						const {
							key: r,
							listingOrder: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Re.bc.Subreddits) && -1 === n.indexOf(Re.bc.Users) ? e : {
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
						return -1 === n.indexOf(Re.bc.Subreddits) && -1 === n.indexOf(Re.bc.Users) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Wd = {};
			var Hd = (e = Wd, t) => {
					switch (t.type) {
						case Ne.e:
						case H.c: {
							const {
								key: r,
								tokens: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Re.bc.Subreddits) && -1 === n.indexOf(Re.bc.Users) ? e : s.listings ? {
								...e,
								[r]: {
									token: s.listings
								}
							} : Object(wt.a)(e, r)
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
				Vd = Object(v.c)({
					api: Md,
					identifiers: qd,
					fetchedTokens: Gd,
					loadMore: Hd
				});
			const Qd = {};
			var $d = r("./src/reddit/actions/eventPosts/constants.ts"),
				Kd = r("./src/reddit/actions/otherDiscussions/constants.ts"),
				zd = r("./src/reddit/actions/pages/topic.ts");
			const Yd = {};
			var Xd = (e = Yd, t) => {
					switch (t.type) {
						case je.c:
						case je.b:
						case je.g:
						case je.f:
						case ge.c:
						case ge.b:
						case De.c:
						case De.b:
						case V.SUBREDDIT_PENDING:
						case V.SUBREDDIT_LOADED:
						case ge.g:
						case ge.f:
						case Te.e:
						case Te.f:
						case Te.i:
						case Te.h:
						case ve.s:
						case ve.r:
						case Kd.b:
						case Kd.c:
						case q.PROFILE_POSTS_PENDING:
						case q.PROFILE_POSTS_LOADED:
						case q.MORE_POSTS_PENDING:
						case q.MORE_POSTS_LOADED:
						case Q.f:
						case Q.e:
						case Pe.f:
						case Pe.e:
						case $.j:
						case zd.TOPIC_DATA_PENDING:
						case zd.TOPIC_DATA_LOADED:
						case zd.MORE_POSTS_PENDING:
						case zd.MORE_POSTS_LOADED:
						case $.i:
						case $d.e:
						case $d.c:
						case $d.d: {
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
						case Ne.d:
						case Ne.e: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.bc.Posts) ? e : {
								...e,
								[r]: null
							}
						}
						case je.a:
						case je.e:
						case ge.a:
						case De.a:
						case V.SUBREDDIT_FAILED:
						case ge.e:
						case Te.g:
						case ve.q:
						case Kd.a:
						case $.h:
						case Q.d:
						case Pe.d:
						case q.PROFILE_POSTS_FAILED:
						case q.MORE_POSTS_FAILED:
						case zd.TOPIC_DATA_FAILED:
						case zd.MORE_POSTS_FAILED:
						case $d.b: {
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
						case Ne.c: {
							const {
								error: r,
								key: s,
								success: n,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Re.bc.Posts) || n && n.posts ? e : {
								...e,
								[s]: r
							}
						}
						default:
							return e
					}
				},
				Jd = r("./src/reddit/actions/linkedPosts/constants.ts"),
				Zd = r("./src/reddit/actions/nsfwLinkedPosts/constants.ts"),
				ei = r("./src/reddit/actions/subreddit/constants.ts");
			const ti = {};
			var ri = (e = ti, t) => {
					switch (t.type) {
						case je.c:
						case je.g:
						case ge.c:
						case De.c:
						case q.PROFILE_POSTS_PENDING:
						case Pe.f:
						case V.SUBREDDIT_PENDING:
						case ge.g:
						case Te.f:
						case Te.i:
						case ve.s:
						case Kd.c:
						case Q.f:
						case q.MORE_POSTS_PENDING:
						case $.j:
						case zd.MORE_POSTS_PENDING:
						case $d.e: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case H.b:
						case Ne.d: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.bc.Posts) ? e : {
								...e,
								[r]: !0
							}
						}
						case je.b:
						case je.a:
						case je.f:
						case je.e:
						case ge.b:
						case ge.a:
						case De.a:
						case De.b:
						case Pe.d:
						case Pe.e:
						case q.PROFILE_POSTS_FAILED:
						case q.PROFILE_POSTS_LOADED:
						case V.SUBREDDIT_LOADED:
						case V.SUBREDDIT_FAILED:
						case ge.f:
						case ge.e:
						case Jd.b:
						case Jd.c:
						case Te.e:
						case Te.d:
						case Te.h:
						case Te.g:
						case ve.r:
						case ve.q:
						case Q.d:
						case Q.e:
						case q.MORE_POSTS_FAILED:
						case q.MORE_POSTS_LOADED:
						case Zd.a:
						case Zd.b:
						case ei.j:
						case Kd.b:
						case Kd.a:
						case $.i:
						case $.h:
						case zd.MORE_POSTS_LOADED:
						case zd.MORE_POSTS_FAILED:
						case $d.c:
						case $d.b:
						case $d.d: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						case ei.r: {
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
						case Ne.e:
						case Ne.c: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.bc.Posts) ? e : {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				si = Object(v.c)({
					error: Xd,
					pending: ri
				});
			const ni = {};
			var ai = (e = ni, t) => {
					switch (t.type) {
						case ge.b:
						case V.SUBREDDIT_LOADED: {
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
				ci = r("./src/reddit/actions/postList.ts"),
				oi = r("./node_modules/lodash/omitBy.js"),
				di = r.n(oi);

			function ii(e, t) {
				return t = t.toLowerCase(), di()(e, (e, r) => r === t || r.startsWith(`${t}--[`))
			}
			const ui = {};
			var li = (e = ui, t) => {
				switch (t.type) {
					case ci.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case ci.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? Ts()(e, [r]) : e
					}
					case V.SUBREDDIT_INVALIDATE_LISTING:
						return ii(e, t.payload);
					default:
						return e
				}
			};
			const pi = {};
			var bi = (e = pi, t) => {
					switch (t.type) {
						case je.b:
						case Te.e:
						case ge.b:
						case De.b:
						case V.SUBREDDIT_LOADED:
						case q.PROFILE_POSTS_LOADED:
						case zd.TOPIC_DATA_LOADED: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: {}
							}
						}
						case je.f:
						case ge.f:
						case Te.h:
						case ve.r:
						case Q.e:
						case q.MORE_POSTS_LOADED:
						case $.i:
						case zd.MORE_POSTS_LOADED: {
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
						case Ne.e: {
							const {
								fetchedToken: r,
								key: s,
								type: n
							} = t.payload;
							if (n.indexOf(Re.bc.Posts) > -1) {
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
						case V.SUBREDDIT_INVALIDATE_LISTING:
							return ii(e, t.payload);
						default:
							return e
					}
				},
				fi = r("./src/reddit/actions/post.ts");
			const yi = {};
			var mi = (e = yi, t) => {
					switch (t.type) {
						case je.c:
						case ge.c:
						case Te.f:
						case De.c:
						case q.PROFILE_POSTS_PENDING:
						case V.SUBREDDIT_PENDING:
						case Pe.f:
						case q.PROFILE_POSTS_PENDING:
						case zd.TOPIC_DATA_PENDING: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: []
							}
						}
						case Ie.e:
						case Jd.c:
						case Te.e:
						case Zd.b:
						case ge.b:
						case je.b:
						case De.b:
						case V.SUBREDDIT_LOADED:
						case ei.j:
						case Kd.b:
						case Pe.e:
						case q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case zd.TOPIC_DATA_LOADED:
						case $d.c: {
							const {
								key: r,
								postIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case ei.r: {
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
						case je.f:
						case ge.f:
						case Te.h:
						case ve.r:
						case q.MORE_POSTS_LOADED:
						case Q.e:
						case $.i:
						case zd.MORE_POSTS_LOADED:
						case $d.d: {
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
							return -1 === n.indexOf(Re.bc.Posts) ? e : {
								...e,
								[r]: s
							}
						}
						case Ne.e: {
							const {
								key: r,
								postOrder: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Re.bc.Posts) ? e : {
								...e,
								[r]: e[r].concat(s)
							}
						}
						case fi.o: {
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
						case V.SUBREDDIT_INVALIDATE_LISTING:
							return ii(e, t.payload);
						default:
							return e
					}
				},
				Oi = r("./src/lib/makeListingKey/index.ts");
			const hi = {};
			var Ei = (e = hi, t) => {
				switch (t.type) {
					case V.SUBREDDIT_LOADED: {
						const {
							key: r,
							listingSort: s
						} = t.payload;
						return s && !Object(Oi.b)(r) ? {
							...e,
							[r]: {
								sort: s,
								hasChanged: !1
							}
						} : e
					}
					case Er.a:
					case Er.q: {
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
			const _i = {};
			var Ii = (e = _i, t) => {
				switch (t.type) {
					case je.b:
					case je.f:
					case ge.b:
					case De.b:
					case V.SUBREDDIT_LOADED:
					case Pe.e:
					case q.PROFILE_POSTS_LOADED:
					case ge.f:
					case Te.e:
					case Te.h:
					case ve.r:
					case Q.e:
					case q.MORE_POSTS_LOADED:
					case $.i:
					case zd.TOPIC_DATA_LOADED:
					case zd.MORE_POSTS_LOADED: {
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
						} : Object(wt.a)(e, r)
					}
					case Ne.e:
					case H.c: {
						const {
							key: r,
							tokens: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Re.bc.Posts) ? e : s.posts ? {
							...e,
							[r]: {
								token: s.posts
							}
						} : Object(wt.a)(e, r)
					}
					case V.SUBREDDIT_INVALIDATE_LISTING:
						return ii(e, t.payload);
					default:
						return e
				}
			};
			const gi = {};
			var Si = (e = gi, t) => {
					switch (t.type) {
						case $d.c:
						case $d.d: {
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
				vi = Object(v.c)({
					api: si,
					correlationIds: ai,
					endMarkers: li,
					fetchedTokens: bi,
					ids: mi,
					listingSort: Ei,
					loadMore: Ii,
					pageInfo: Si,
					treatment: ((e, t) => (r = Qd, s) => {
						switch (s.type) {
							case H.c:
							case Ne.e: {
								const {
									key: n,
									treatment: a,
									type: c
								} = s.payload;
								return -1 === c.indexOf(e) ? r : {
									...r,
									[n]: a[t]
								}
							}
							default:
								return r
						}
					})(Re.bc.Posts, Re.ac.Posts)
				}),
				ji = Object(v.c)({
					activeKey: Xo,
					authorOrder: id,
					commentOrder: Id,
					communityOrder: Nd,
					listingOrder: Vd,
					postOrder: vi
				});
			var Ti = (e = null, t) => {
				switch (t.type) {
					case ge.b: {
						const r = t.payload;
						return aa()(r.announcements) ? e : r.announcements || null
					}
					default:
						return e
				}
			};
			var Di = (e = null, t) => {
				switch (t.type) {
					case ge.b: {
						const r = t.payload;
						return aa()(r.featuredLiveThread) ? e : r.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var wi = (e = !1, t) => {
				switch (t.type) {
					case ge.b:
						return !0;
					default:
						return e
				}
			};
			var Pi = (e = !1, t) => {
					switch (t.type) {
						case "ANNOUNCEMENTS__SHOULD_SHOW":
							return !0;
						default:
							return e
					}
				},
				Ai = Object(v.c)({
					announcements: Ti,
					featured: Di,
					isFrontpageLoaded: wi,
					shouldShowAnnouncements: Pi
				}),
				Ci = r("./src/reddit/actions/media.ts");
			const Ri = {},
				Ni = {};
			var ki = (e = Ni, t) => {
				switch (t.type) {
					case Ci.b: {
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
			const Li = {};
			var xi = (e = Li, t) => {
					switch (t.type) {
						case Ci.e: {
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
				Ui = Object(v.c)({
					currentSlideIndex: ki,
					isGalleryTileLayout: xi
				});
			var Mi = (e = !0, t) => {
				switch (t.type) {
					case Ci.c:
						return t.payload;
					default:
						return e
				}
			};
			var Bi = (e = .5, t) => {
					switch (t.type) {
						case Ci.d:
							return t.payload;
						default:
							return e
					}
				},
				Gi = Object(v.c)({
					isMuted: Mi,
					volume: Bi
				}),
				Fi = r("./src/reddit/actions/meta.ts");
			const qi = {
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
				userAgent: "",
				pageloadServerTime: 0
			};
			var Wi = (e = qi, t) => {
					switch (t.type) {
						case Fi.b:
							return t.payload;
						case Fi.a:
							return {
								...e, ...t.payload
							};
						case Fi.e:
							return {
								...e, locale: t.payload
							};
						case Fi.f:
							return {
								...e, popularGeoFilter: t.payload
							};
						case Fi.c:
							return {
								...e, platform: {
									...e.platform,
									pwa: !0
								}
							};
						case Fi.d:
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
				Hi = r("./src/reddit/actions/subredditModeration/constants.ts");
			const Vi = {};
			var Qi = (e = Vi, t) => {
				switch (t.type) {
					case V.SUBREDDIT_LOADED:
					case G.b:
					case G.f:
					case we.PAGE_LOADED: {
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
					case B.i:
					case B.f:
					case B.m:
					case B.p:
					case B.v: {
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
					case Te.e:
					case B.k: {
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
					case Hi.gb: {
						const {
							subredditId: r
						} = t.payload;
						return Object(wt.a)(e, r)
					}
					case Hi.Z: {
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
			var $i = (e = null, t) => {
				switch (t.type) {
					case Te.b:
					case Te.k:
						return null;
					case Te.a:
					case Te.j:
						return t.payload;
					default:
						return e
				}
			};
			var Ki = (e = !1, t) => {
					switch (t.type) {
						case Te.b:
						case Te.k:
							return !0;
						case Te.c:
						case Te.a:
						case Te.l:
						case Te.j:
							return !1;
						default:
							return e
					}
				},
				zi = Object(v.c)({
					error: $i,
					pending: Ki
				});
			const Yi = [];
			var Xi = (e = Yi, t) => {
					switch (t.type) {
						case Te.e: {
							const r = t.payload,
								{
									filteredSubreddits: s
								} = r;
							return s || e
						}
						case Te.j: {
							const r = t.payload;
							return [...e, r]
						}
						case Te.k:
						case Te.a: {
							const r = t.payload;
							return e.filter(e => e !== r)
						}
						default:
							return e
					}
				},
				Ji = Object(v.c)({
					api: zi,
					names: Xi
				}),
				Zi = Object(v.c)({
					filteredSubreddits: Ji
				}),
				eu = r("./src/reddit/actions/modMode.ts");
			var tu = (e = !0, t) => {
				switch (t.type) {
					case eu.a:
						return t.payload.enabled;
					default:
						return e
				}
			};
			const ru = {};
			var su = (e = ru, t) => {
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
			const nu = {};
			var au = (e = nu, t) => {
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
				cu = Object(v.c)({
					error: su,
					pending: au
				});
			const ou = {};
			var du = (e = ou, t) => {
					switch (t.type) {
						case x.w:
						case G.b:
						case G.f:
							return {
								...e, ...t.payload.moreComments
							};
						default:
							return e
					}
				},
				iu = Object(v.c)({
					api: cu,
					models: du
				});
			var uu = (e = null, t) => {
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
			var lu = (e = !1, t) => {
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
			var pu = (e = null, t) => {
					switch (t.type) {
						case De.b:
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
				bu = Object(v.c)({
					error: uu,
					fetched: lu,
					pending: pu
				});
			var fu = (e = null, t) => {
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
			var yu = (e = !1, t) => {
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
			var mu = (e = !1, t) => {
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
				Ou = Object(v.c)({
					error: fu,
					fetched: yu,
					pending: mu
				});
			var hu = (e = null, t) => {
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
			var Eu = (e = !1, t) => {
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
			var _u = (e = !1, t) => {
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
				Iu = Object(v.c)({
					error: hu,
					fetched: Eu,
					pending: _u
				});
			var gu = (e = null, t) => {
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
			var Su = (e = !1, t) => {
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
			var vu = (e = !1, t) => {
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
				ju = Object(v.c)({
					error: gu,
					fetched: Su,
					pending: vu
				});
			var Tu = (e = null, t) => {
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
			var Du = (e = !1, t) => {
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
			var wu = (e = !1, t) => {
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
				Pu = Object(v.c)({
					error: Tu,
					fetched: Du,
					pending: wu
				});
			var Au = (e = !1, t) => {
				switch (t.type) {
					case ve.t:
						return !1;
					case ve.u:
						return !0;
					default:
						return e
				}
			};
			var Cu = (e = !1, t) => {
					switch (t.type) {
						case ve.t:
							return !0;
						case ve.u:
							return !1;
						default:
							return e
					}
				},
				Ru = Object(v.c)({
					fetched: Au,
					pending: Cu
				});
			var Nu = (e = null, t) => {
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
			var ku = (e = !1, t) => {
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
			var Lu = (e = !0, t) => {
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
				xu = Object(v.c)({
					error: Nu,
					fetched: ku,
					pending: Lu
				});
			var Uu = (e = null, t) => {
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
			var Mu = (e = !1, t) => {
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
			var Bu = (e = null, t) => {
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
				Gu = Object(v.c)({
					error: Uu,
					fetched: Mu,
					pending: Bu
				}),
				Fu = Object(v.c)({
					addSubreddit: bu,
					create: Ou,
					deleteMulti: Iu,
					duplicate: ju,
					edit: Pu,
					forUser: Ru,
					recommendations: xu,
					removeSubreddit: Gu
				}),
				qu = r("./node_modules/lodash/isEqual.js"),
				Wu = r.n(qu),
				Hu = r("./node_modules/lodash/union.js"),
				Vu = r.n(Hu);

			function Qu(e, t, r) {
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
			var $u = r("./src/reddit/actions/profile/constants.ts");
			const Ku = {};
			var zu = (e = Ku, t) => {
					switch (t.type) {
						case De.b:
						case ve.r:
						case ve.u:
						case $u.h: {
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
								a[t] = Vu()(n, r).sort((e, t) => c[e].displayText.toLowerCase() > c[t].displayText.toLowerCase() ? 1 : -1)
							}
							return Wu()(e, a) ? e : a
						}
						case ve.g:
						case ve.m: {
							const {
								userId: r,
								multireddit: s
							} = t.payload, n = e[r] ? e[r].slice() : [], a = Qu(n, s.url, (e, t) => e > t ? 1 : -1);
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
				Yu = r("./src/reddit/actions/subscription/constants.ts"),
				Xu = r("./src/reddit/models/Multireddit/index.ts");
			const Ju = {};
			var Zu = (e = Ju, t) => {
				switch (t.type) {
					case De.b:
					case ve.r:
					case ve.u:
					case $u.h: {
						let r = {};
						for (const s in t.payload.multireddits) {
							const n = {
									...t.payload.multireddits[s]
								},
								a = e[s];
							a && !Object(Xu.g)(n) && (n.subredditIds = a.subredditIds, n.profileIds = a.profileIds), s in e && Wu()(e[n.url], n) || (r = {
								...r,
								[s]: n
							})
						}
						return aa()(r) ? e : {
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
					case Yu.d: {
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
					case Yu.e: {
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
			const el = {};
			var tl = (e = el, t) => {
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
				rl = Object(v.c)({
					api: Fu,
					byUserId: zu,
					models: Zu,
					recommendations: tl
				}),
				sl = r("./src/reddit/actions/notificationBanner.ts");
			var nl = (e = null, t) => {
					switch (t.type) {
						case sl.b:
							return t.payload.notificationBannerId;
						case sl.a:
							return null;
						default:
							return e
					}
				},
				al = r("./src/reddit/actions/notificationsInbox/constants.ts");
			var cl = (e = !1, t) => {
				switch (t.type) {
					case al.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case al.e:
					case al.b:
						return !1;
					default:
						return e
				}
			};
			var ol = (e = !1, t) => {
					switch (t.type) {
						case al.e:
							return !0;
						case al.a:
						case al.b:
							return !1;
						default:
							return e
					}
				},
				dl = Object(v.c)({
					error: cl,
					pending: ol
				});
			var il = (e = null, t) => {
				switch (t.type) {
					case al.g:
						return t.payload && t.payload.index || e;
					default:
						return e
				}
			};
			var ul = (e = null, t) => {
				switch (t.type) {
					case al.c:
						return t.payload && t.payload.now;
					default:
						return e
				}
			};
			const ll = [];
			var pl = (e = ll, t) => {
				switch (t.type) {
					case al.b: {
						const r = t.payload && t.payload.nodes;
						return [...e, ...r]
					}
					case al.f: {
						const r = t.payload && t.payload.id;
						return e.filter(e => (e && e.id) !== r)
					}
					case al.d: {
						const r = t.payload && t.payload.id,
							s = t.payload && t.payload.now,
							n = e.findIndex(e => e.id === r);
						return -1 === n ? e : [...e.slice(0, n), {
							...e[n],
							readAt: s
						}, ...e.slice(n + 1)]
					}
					case al.c: {
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
			var bl = (e = null, t) => {
					switch (t.type) {
						case al.b:
							return t.payload && t.payload.pageInfo;
						default:
							return e
					}
				},
				fl = Object(v.c)({
					api: dl,
					earlierDividerIndex: il,
					notifications: pl,
					pageInfo: bl,
					markAllAsReadTimestamp: ul
				}),
				yl = r("./src/reddit/actions/nps.ts");
			const ml = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var Ol = (e = ml, t) => {
					switch (t.type) {
						case yl.c:
							return {
								...ml, pending: !0
							};
						case yl.a:
							return ml;
						case yl.b: {
							const {
								dest: e
							} = t.payload;
							return {
								...ml,
								success: !0,
								dest: e
							}
						}
						default:
							return e
					}
				},
				hl = r("./src/reddit/actions/accountGender/constants.ts"),
				El = r("./src/reddit/actions/onboarding/constants.ts");
			const _l = {
				success: !1,
				failure: !1
			};
			var Il = (e = _l, t) => {
				switch (t.type) {
					case hl.b:
						return {
							..._l, success: !0
						};
					case hl.c:
						return {
							..._l, failure: !0
						};
					case El.a:
						return {
							..._l
						};
					default:
						return e
				}
			};
			var gl = (e = null, t) => {
					var r;
					switch (t.type) {
						case ge.b:
						case El.b: {
							const e = t.payload;
							return (null == e ? void 0 : e.interestTopicRecommendations) && !aa()(null === (r = null == e ? void 0 : e.interestTopicRecommendations) || void 0 === r ? void 0 : r.interests) ? e.interestTopicRecommendations : null
						}
						default:
							return e
					}
				},
				Sl = Object(v.c)({
					genderUpdateState: Il,
					interestTopicRecommendationsState: gl
				});
			const vl = e => {
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
			const jl = e => {
					const t = {};
					for (const r of e) t[r.experimentName.toLowerCase()] = vl(r);
					return t
				},
				Tl = {};
			var Dl = (e = Tl, t) => {
				switch (t.type) {
					case $a.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, r = e ? e.experiments : [];
						return jl(r)
					}
					default:
						return e
				}
			};
			var wl = Object(v.c)({
					byName: Dl,
					canonicalUrl: (e = null, t) => {
						switch (t.type) {
							case $a.a: {
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
				Pl = Object(v.c)({
					experiments: wl
				}),
				Al = r("./node_modules/history/esm/history.js"),
				Cl = r("./src/reddit/constants/history.ts");
			const Rl = {
				allowNavigationCallback: null,
				currentPage: null,
				lastPage: null,
				referrers: {},
				sessionReferrer: null,
				metas: {}
			};
			var Nl = (e = Rl, t) => {
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
						const o = Object(Al.e)(a),
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
					case G.b:
					case G.f:
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
					case V.SUBREDDIT_LOADED: {
						const {
							correlationId: r
						} = t.payload;
						return e.currentPage ? {
							...e,
							currentPage: {
								...e.currentPage,
								locationState: {
									...e.currentPage.locationState,
									[Cl.b.FeedCorrelationId]: r
								}
							}
						} : e
					}
					default:
						return e
				}
			};
			const kl = {};
			var Ll = (e = kl, t) => {
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
			const xl = {};
			var Ul = (e = xl, t) => {
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
				Ml = Object(v.c)({
					error: Ll,
					pending: Ul
				}),
				Bl = Object(v.c)({
					voting: Ml
				}),
				Gl = r("./node_modules/lodash/mapValues.js"),
				Fl = r.n(Gl),
				ql = r("./src/reddit/reducers/posts/models/helpers.ts"),
				Wl = r("./src/reddit/actions/economics/predictions/constants.ts");
			var Hl = r("./src/reddit/helpers/graphql/normalizePoll/index.ts"),
				Vl = r("./src/reddit/models/Prediction/index.ts");
			const Ql = {};
			var $l = (e = Ql, t) => {
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
					case V.SUBREDDIT_LOADED:
					case $.i:
					case ge.f:
					case G.b:
					case G.f:
					case Wl.o: {
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
						const s = Fl()(t.payload.posts, Object(ql.i)([ql.p])),
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
											type: _n.a.GA,
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
										type: _n.a.GA,
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
					case Wl.q:
					case Wl.p: {
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
					case Wl.b: {
						const {
							postId: r,
							prediction: s
						} = t.payload;
						return e[r] && Object(Vl.c)(e[r]) ? {
							...e,
							[r]: {
								...e[r],
								...Object(Hl.b)(s)
							}
						} : e
					}
					default:
						return e
				}
			};
			const Kl = {};
			var zl = (e = Kl, t) => {
				switch (t.type) {
					case d.k: {
						const {
							[_n.b.ByVoters]: r, pollId: s
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
					case V.SUBREDDIT_LOADED:
					case $.i:
					case ge.f:
					case G.b:
					case G.f: {
						const {
							governance: r,
							posts: s
						} = t.payload;
						if (r) {
							const t = Object.keys(r).reduce((e, t) => {
								const s = r[t],
									{
										[_n.b.ByVoters]: n,
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
			const Yl = {};
			var Xl = (e = Yl, t) => {
					switch (t.type) {
						case d.k: {
							const {
								[_n.b.ByVotingPower]: r, pollId: s
							} = t.payload.pollResults;
							return {
								...e,
								[s]: r
							}
						}
						case ge.b:
						case V.SUBREDDIT_LOADED:
						case $.i:
						case ge.f:
						case G.b:
						case G.f: {
							const {
								governance: r
							} = t.payload;
							if (r) {
								const t = Object.keys(r).reduce((e, t) => {
									const s = r[t],
										{
											[_n.b.ByVotingPower]: n,
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
				Jl = Object(v.c)({
					byVoters: zl,
					byVotingPower: Xl
				});
			const Zl = {};
			var ep = (e = Zl, t) => {
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
				tp = Object(v.c)({
					api: Bl,
					models: $l,
					results: Jl,
					rewards: ep
				});
			const rp = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var sp = (e = rp, t) => {
				switch (t.type) {
					case Cr.i:
					case Cr.j:
						return {
							...e, reorderError: null
						};
					case Cr.h:
						return {
							...e, reorderError: t.payload
						};
					case Cr.l:
					case Cr.m:
						return {
							...e, updateDescriptionError: null
						};
					case Cr.k:
						return {
							...e, updateDescriptionError: t.payload
						};
					case Cr.p:
					case Cr.q:
						return {
							...e, updateLayoutError: null
						};
					case Cr.o:
						return {
							...e, updateLayoutError: t.payload
						};
					default:
						return e
				}
			};
			const np = {
				reorderPending: !1,
				updateDescriptionPending: !1,
				updateLayoutPending: !1
			};
			var ap = (e = np, t) => {
					switch (t.type) {
						case Cr.i:
							return {
								...e, reorderPending: !0
							};
						case Cr.h:
						case Cr.j:
							return {
								...e, reorderPending: !1
							};
						case Cr.l:
							return {
								...e, updateDescriptionPending: !0
							};
						case Cr.k:
						case Cr.m:
							return {
								...e, updateDescriptionPending: !1
							};
						case Cr.p:
							return {
								...e, updateLayoutPending: !0
							};
						case Cr.o:
						case Cr.q:
							return {
								...e, updateLayoutPending: !1
							};
						default:
							return e
					}
				},
				cp = Object(v.c)({
					error: sp,
					pending: ap
				}),
				op = r("./src/reddit/helpers/path/index.ts");
			const dp = {},
				ip = e => {
					const {
						protocol: t,
						domain: r
					} = e;
					return e => {
						const s = Object(op.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${r}${s}`
						}
					}
				};
			var up = (e = dp, t) => {
				switch (t.type) {
					case je.b:
					case je.f:
					case we.PAGE_LOADED:
					case Te.e:
					case Te.h:
					case F.b:
					case F.e:
					case Pe.e:
					case Pe.b:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case V.SUBREDDIT_LOADED:
					case ge.b:
					case De.b:
					case V.SUBREDDIT_LOADED:
					case G.b:
					case G.f:
					case fi.j:
					case ve.r:
					case ge.f:
					case Q.e:
					case "RECOMMENDED_POSTS_LOADED":
					case $.i:
					case Ne.e:
					case Ae.b:
					case H.c:
					case Cr.f: {
						const {
							collections: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						let n = r;
						if (s) {
							const e = ip(s);
							n = Fl()(r, e)
						}
						return {
							...e,
							...n
						}
					}
					case Cr.d: {
						const {
							collection: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						const n = r.id;
						let a = r;
						if (s) {
							a = ip(s)(r)
						}
						return {
							...e,
							[n]: a
						}
					}
					case Cr.g: {
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
					case Cr.a: {
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
					case Cr.e: {
						const {
							collectionId: r
						} = t.payload, s = {
							...e
						};
						return delete s[r], s
					}
					case Cr.s: {
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
					case Cr.j: {
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
					case Cr.m: {
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
					case Cr.q: {
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
			const lp = {};
			var pp = (e = lp, t) => {
					switch (t.type) {
						case we.PAGE_LOADED:
						case Cr.f: {
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
						case Cr.d: {
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
						case Cr.e: {
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
				bp = Object(v.c)({
					models: up,
					subredditToIds: pp,
					api: cp
				}),
				fp = r("./src/reddit/actions/postFlair.ts"),
				yp = r("./src/reddit/models/Flair/index.ts");
			const mp = {},
				Op = {
					displaySettings: {
						isEnabled: !1,
						position: yp.b.Left
					},
					permissions: {
						canAssignOwn: !1
					},
					templateIds: [],
					templates: {}
				},
				hp = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					return 0 === r.length ? e : r.reduce((e, r) => (e[r] = {
						...Op,
						...e[r],
						...t[r]
					}, e), {
						...e
					})
				};
			var Ep = (e = mp, t) => {
					switch (t.type) {
						case je.b:
						case je.f:
						case we.PAGE_LOADED:
						case ge.f:
						case Te.e:
						case Te.h:
						case ve.r:
						case Kd.b:
						case G.b:
						case G.f:
						case ge.b:
						case De.b:
						case H.c:
						case V.SUBREDDIT_LOADED:
						case F.b:
						case F.e:
						case W.c:
						case W.i:
						case W.e:
						case W.g:
						case Q.e:
						case Ae.b:
						case Ae.b:
						case Pe.b:
						case Pe.e:
						case q.MORE_POSTS_LOADED:
						case q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Ne.e:
						case Ne.e:
						case $.i:
							return hp(e, t.payload.postFlair);
						case fp.c: {
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
						case fp.a: {
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
						case fp.f: {
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
						case fp.b: {
							const {
								subredditId: r,
								templateId: s
							} = t.payload, n = e[r], {
								templates: a,
								templateIds: c
							} = n, o = Ts()(a, s), d = c.filter(e => e !== s);
							return {
								...e,
								[r]: {
									...n,
									templates: o,
									templateIds: d
								}
							}
						}
						case fp.e:
						case fp.d: {
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
						case B.i:
						case B.f:
						case B.m:
						case B.p:
						case B.v: {
							const {
								response: r
							} = t.payload;
							return hp(e, r.postFlair)
						}
						default:
							return e
					}
				},
				_p = r("./src/reddit/actions/subreddit/subredditCarousel.ts");
			const Ip = {
				pending: !1,
				items: {}
			};
			var gp = (e = Ip, t) => {
				switch (t.type) {
					case _p.a:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case _p.b:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			var Sp = (e = null, t) => {
					switch (t.type) {
						case fi.c:
							return t.payload;
						default:
							return e
					}
				},
				vp = r("./src/reddit/actions/embedAndImage.ts");
			const jp = {};
			var Tp = (e = jp, t) => {
					switch (t.type) {
						case vp.b: {
							const {
								postId: r
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: !1
							} : e
						}
						case vp.a: {
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
				Dp = Object(v.c)({
					loadable: Tp
				});
			const wp = {};
			var Pp = (e = wp, t) => {
				switch (t.type) {
					case fi.d: {
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
			var Ap = (e = null, t) => {
				switch (t.type) {
					case fi.e: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Cp = [];
			var Rp = (e = Cp, t) => {
				switch (t.type) {
					case fi.n:
						return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
					case fi.b:
						return [...e.filter(e => e.expiresAt > Date.now())];
					case fi.f:
						return [...t.payload.posts];
					default:
						return e
				}
			};
			const Np = {};
			var kp = (e = Np, t) => {
				switch (t.type) {
					case Te.e:
					case Te.h:
					case ge.b:
					case V.SUBREDDIT_LOADED:
					case ge.f:
					case Q.e:
					case "RECOMMENDED_POSTS_LOADED":
					case $.i:
					case Ne.e:
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
			var Lp = (e = null, t) => {
					switch (t.type) {
						case fi.a:
							return t.payload;
						default:
							return e
					}
				},
				xp = r("./src/reddit/actions/isTrackingCrossposts.ts");
			const Up = {};
			var Mp = (e = Up, t) => {
				switch (t.type) {
					case xp.a: {
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
			const Bp = {};
			var Gp = (e = Bp, t) => {
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
						case V.SUBREDDIT_LOADED:
						case $.i:
						case ge.f:
						case G.b:
						case G.f:
						case Wl.o: {
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
				Fp = r("./src/reddit/actions/bulkActions/constants.ts"),
				qp = r("./src/reddit/actions/constants.ts"),
				Wp = r("./src/reddit/actions/flairManagement/constants.ts"),
				Hp = r("./src/reddit/actions/googleQASchema/constants.ts"),
				Vp = r("./src/reddit/actions/imageOCRAltText/constants.ts"),
				Qp = r("./src/reddit/actions/subredditTopContent.ts"),
				$p = r("./src/reddit/helpers/isPost.ts"),
				Kp = r("./node_modules/lodash/pickBy.js"),
				zp = r.n(Kp);

			function Yp(e, t) {
				const r = zp()(t, (t, r = "") => !e[r] || !Wu()(e[r], t));
				return Object.keys(r).length > 0 ? {
					...e,
					...r
				} : e
			}
			var Xp = r("./src/reddit/models/Gold/Gild/index.tsx"),
				Jp = r("./src/reddit/models/Media/index.ts"),
				Zp = r("./src/reddit/models/ModQueue/index.ts"),
				eb = r("./src/reddit/models/Post/index.ts"),
				tb = r("./src/reddit/models/Vote/index.ts"),
				rb = r("./src/reddit/actions/subredditDuplicates.ts");
			const sb = {};
			var nb = (e = sb, t) => {
				switch (t.type) {
					case u.b:
						if (As(t) === (Re.Nb.COMMENTS || Re.Nb.DUPLICATES)) {
							const r = Cs(t),
								s = (e => {
									if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
								})(t);
							if (r && r.instanceId && s && s.partialPostId) {
								const t = r.instanceId,
									n = Object(eb.t)(s.partialPostId);
								if (e[n] && e[t]) return {
									...e,
									[n]: Object(ql.c)(e[n], e[t])
								}
							}
						}
						return e;
					case G.b:
					case G.f: {
						const r = Object(ql.h)(t.payload.meta);
						return {
							...e,
							...Fl()(t.payload.posts, Object(ql.i)([r, ql.d, ql.n, ql.o, ql.p, Object(ql.a)(e), Object(ql.b)(e), Object(ql.k)(e), Object(ql.l)(e), Object(ql.j)(e)]))
						}
					}
					case fi.j:
						return Yp(e, t.payload);
					case rb.a:
						return Yp(e, t.payload.posts);
					case je.b:
					case je.f:
					case we.PAGE_LOADED:
					case Jd.c:
					case Zd.b:
					case Te.e:
					case Te.h:
					case F.b:
					case F.e:
					case Pe.e:
					case Pe.b:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case V.SUBREDDIT_LOADED:
					case ge.b:
					case De.b:
					case Kd.b:
					case ve.r:
					case ge.f:
					case Q.e:
					case "RECOMMENDED_POSTS_LOADED":
					case ei.j:
					case $.i:
					case Ae.b:
					case zd.TOPIC_DATA_LOADED:
					case zd.MORE_POSTS_LOADED:
					case $d.c:
					case $d.d:
					case Wl.o: {
						const r = Object(ql.h)(t.payload.meta);
						return {
							...e,
							...Fl()(t.payload.posts, Object(ql.i)([r, ql.d, ql.n, ql.o, ql.p, Object(ql.m)(e), Object(ql.k)(e), Object(ql.j)(e)]))
						}
					}
					case ei.r: {
						if (!t.payload || !t.payload.length) return e;
						const r = {};
						for (const s of t.payload) {
							const t = s,
								n = Object(ql.h)(t.meta);
							Object.assign(r, Fl()(t.posts, Object(ql.i)([n, ql.d, ql.n, ql.o, Object(ql.m)(e), Object(ql.k)(e), Object(ql.j)(e)])))
						}
						return {
							...e,
							...r
						}
					}
					case Kd.b: {
						const r = Object(ql.h)(t.payload.meta),
							s = e[t.payload.postId];
						return {
							...e,
							...Fl()(t.payload.posts, Object(ql.i)([r, ql.d, ql.n, ql.o, Object(ql.m)(e), Object(ql.k)(e), Object(ql.j)(e)])),
							[t.payload.postId]: {
								...s,
								numDuplicates: t.payload.count
							}
						}
					}
					case Ie.e:
					case Ne.e:
					case H.c: {
						const r = Object(ql.h)(t.payload.meta),
							s = Fl()(t.payload.posts, Object(ql.i)([r, ql.n, ql.d, ql.o, Object(ql.j)(e)]));
						return L()({
							...e
						}, s, (e, t) => ({
							...t,
							...e
						}))
					}
					case fi.k: {
						const r = t.payload;
						return L()({
							...e
						}, r, (e, t) => ({
							...e,
							...t
						}))
					}
					case qp.a: {
						const {
							id: r,
							vote: s
						} = t.payload, n = e[r];
						return n ? {
							...e,
							[r]: Object(tb.c)(n, s)
						} : e
					}
					case U.b:
					case x.K: {
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
					case fi.h: {
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
					case fi.i: {
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
					case x.B: {
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
							...r.reduce((e, t) => (e[t.post.id] = Object(ql.i)([ql.n])(Object(Gs.f)(t.post)), e), {})
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
								...Object(Xp.a)(c, s, n),
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
							[s]: Object(Xp.b)(n, r)
						} : e
					}
					case Hi.n: {
						const {
							posts: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case B.i:
					case B.f:
					case B.m:
					case B.p:
					case B.v: {
						const {
							response: r
						} = t.payload, {
							posts: s
						} = r;
						return {
							...e,
							...Fl()(s, Object(ql.i)([ql.n, ql.o]))
						}
					}
					case Fp.b:
					case B.s: {
						const {
							operation: r,
							ids: s,
							username: n,
							options: a
						} = t.payload, c = s.filter(e => Object($p.a)(e)), o = Object(Zp.d)(e, r, c, n, a);
						return L()({
							...e
						}, o, (e, t) => ({
							...e,
							...t
						}))
					}
					case Cr.t: {
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
					case Cr.e: {
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
					case Cr.g: {
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
					case $d.f: {
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
					case $d.a: {
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
					case kc.g: {
						const r = t.payload.subredditTopContent;
						return r && r.posts && Object.keys(r.posts) ? {
							...Fl()(r.posts, Object(ql.i)([ql.n, ql.o])),
							...e
						} : e
					}
					case W.c:
					case W.i:
					case W.e:
					case W.g:
					case Qp.b:
						return {
							...Fl()(t.payload.posts, Object(ql.i)([ql.n, ql.o])), ...e
						};
					case fi.m: {
						const {
							postId: r,
							richtextContent: s
						} = t.payload, n = e[r];
						return n && n.media && Object(Jp.K)(n.media) ? {
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
					case Wp.a: {
						const r = t.payload;
						return {
							...e,
							[r.id]: r
						}
					}
					case Wp.b: {
						const r = t.payload;
						return Object(wt.a)(e, r)
					}
					case m.o: {
						const r = t.payload.reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							...r
						}
					}
					case Vp.b: {
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
					case Wl.t: {
						const {
							tournamentPostId: r,
							predictionId: s,
							selectedOptionId: n
						} = t.payload;
						if (!e[s] && !e[r]) return e;
						const a = {
							...e
						};
						return a[s] && (a[s] = Object(ql.e)({
							post: e[s],
							selectedOptionId: n
						})), a[r] && (a[r] = Object(ql.f)({
							post: e[r],
							selectedOptionId: n,
							predictionId: s
						})), a
					}
					case Wl.b: {
						const {
							postId: r,
							prediction: s
						} = t.payload;
						return {
							...e,
							[r]: Object(ql.q)(e[r], Object(Hl.a)(s))
						}
					}
					case Vp.a:
						return {
							...e
						};
					case Hp.b: {
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
					case Hp.a:
						return {
							...e
						};
					case Jd.a: {
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
			var ab = (e = null, t) => {
					switch (t.type) {
						case fi.g:
							return t.payload;
						default:
							return e
					}
				},
				cb = r("./src/reddit/actions/postLevelCrowdControl.ts");
			const ob = {};
			var db = (e = ob, t) => {
				switch (t.type) {
					case cb.a: {
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
			const ib = [];
			var ub = (e = ib, t) => {
					switch (t.type) {
						case fi.l: {
							const {
								postIds: e
							} = t.payload;
							return e
						}
						case ge.b:
						case V.SUBREDDIT_LOADED: {
							const {
								recentPostIds: r
							} = t.payload;
							return r && r.length ? r : e
						}
						default:
							return e
					}
				},
				lb = r("./node_modules/uuid/v4.js"),
				pb = r.n(lb);
			const bb = pb()();
			var fb = (e = bb, t) => {
				switch (t.type) {
					case we.PAGE_LOADED:
					case ls.h:
					case ls.a:
					case ls.m:
					case ls.f:
						return pb()();
					default:
						return e
				}
			};
			var yb = (e = null, t) => {
				switch (t.type) {
					case ls.d:
					case ls.o:
					case ls.k:
					case ls.g:
					case ls.a:
					case ls.m:
					case ls.f:
						return null;
					case ls.j: {
						const {
							message: e
						} = t.payload;
						return e
					}
					case ls.e:
						return "error";
					default:
						return e
				}
			};
			var mb = (e = !0, t) => {
				switch (t.type) {
					case ls.g:
						return !0;
					case ls.m:
					case ls.a:
					case ls.f:
					case ls.e:
						return !1;
					default:
						return e
				}
			};
			var Ob = (e = !1, t) => {
					switch (t.type) {
						case ls.k:
							return !0;
						case ls.j:
						case ls.e:
						case ls.o:
						case ls.d:
							return !1;
						default:
							return e
					}
				},
				hb = Object(v.c)({
					creationToken: fb,
					error: yb,
					pending: mb,
					pendingUpdate: Ob
				});
			const Eb = {};
			var _b = (e = Eb, t) => {
				switch (t.type) {
					case ls.c: {
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
			const Ib = {
				standalonePosts: {
					POSTS_LOADED: ls.m,
					postIdsKey: "standalonePostsIds",
					MUTATION_SUCCEEDED: ls.o
				},
				recurringPosts: {
					POSTS_LOADED: ls.a,
					postIdsKey: "recurringPostsIds",
					MUTATION_SUCCEEDED: ls.d
				}
			};

			function gb(e) {
				const t = {};
				return (r = t, s) => {
					switch (s.type) {
						case Ib[e].POSTS_LOADED:
						case ls.f: {
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
						case ls.i:
						case ls.l: {
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
						case ls.h: {
							const {
								subredditId: e
							} = s.payload;
							return Object.keys(r).reduce((t, s) => (s !== e && (t[s] = r[s]), t), {})
						}
						case Ib[e].MUTATION_SUCCEEDED: {
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
			const Sb = {};

			function vb(e) {
				return (t = Sb, r) => {
					switch (r.type) {
						case Ib[e].POSTS_LOADED:
						case ls.f: {
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
						case ls.h: {
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
			var jb = r("./node_modules/lodash/uniq.js"),
				Tb = r.n(jb);
			const Db = {};

			function wb(e) {
				return (t = Db, r) => {
					switch (r.type) {
						case Ib[e].POSTS_LOADED:
						case ls.f: {
							const {
								subredditInfoById: s
							} = r.payload, n = s.id, a = s.scheduledPosts[Ib[e].postIdsKey];
							return {
								...t,
								[n]: Tb()([...t[n] || [], ...a])
							}
						}
						case ls.i:
						case ls.l: {
							const {
								subredditId: e,
								scheduledPostId: s
							} = r.payload, n = t[e] || [];
							return {
								...t,
								[e]: n.filter(e => e !== s)
							}
						}
						case ls.h: {
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
			var Pb = Object(v.c)({
					models: gb("recurringPosts"),
					pageInfo: vb("recurringPosts"),
					postOrder: wb("recurringPosts"),
					editModal: _b
				}),
				Ab = Object(v.c)({
					models: gb("standalonePosts"),
					pageInfo: vb("standalonePosts"),
					postOrder: wb("standalonePosts")
				}),
				Cb = Object(v.c)({
					api: hb,
					standalonePosts: Ab,
					recurringPosts: Pb
				});
			var Rb = (e = null, t) => {
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
			var Nb = (e = !1, t) => {
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
				kb = Object(v.c)({
					error: Rb,
					pending: Nb
				});
			const Lb = [];
			var xb = (e = Lb, t) => {
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
							return Lb;
						default:
							return e
					}
				},
				Ub = Object(v.c)({
					api: kb,
					list: xb
				}),
				Mb = r("./src/reddit/actions/video.ts");
			const Bb = {};
			var Gb = (e = Bb, t) => {
				switch (t.type) {
					case Mb.e: {
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
			const Fb = {};
			var qb = (e = Fb, t) => {
				switch (t.type) {
					case Mb.a: {
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
			const Wb = {};
			var Hb = (e = Wb, t) => {
				switch (t.type) {
					case Mb.b: {
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
			const Vb = {};
			var Qb = (e = Vb, t) => {
				switch (t.type) {
					case Mb.c: {
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
			const $b = {
				mutedInFeed: !0
			};
			var Kb = (e = $b, t) => {
				switch (t.type) {
					case Mb.l:
						return {
							...e, mutedInFeed: t.payload
						};
					default:
						return e
				}
			};
			var zb = (e = null, t) => {
				switch (t.type) {
					case Mb.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case Mb.d:
						return null;
					default:
						return e
				}
			};
			const Yb = {};
			var Xb = (e = Yb, t) => {
				switch (t.type) {
					case Mb.o: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case Mb.e: {
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
			const Jb = {};
			var Zb = (e = Jb, t) => {
				switch (t.type) {
					case Mb.h: {
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
					case Mb.f: {
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
			const ef = {};
			var tf = (e = ef, t) => {
				switch (t.type) {
					case Mb.j: {
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
			const rf = {};
			var sf = (e = rf, t) => {
				switch (t.type) {
					case Mb.p: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case Mb.g: {
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
			const nf = {};
			var af = (e = nf, t) => {
				switch (t.type) {
					case Mb.i: {
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
			const cf = {};
			var of = (e = cf, t) => {
				switch (t.type) {
					case Mb.m: {
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
			}, df = r("./src/reddit/constants/video.ts");
			const uf = {};
			var lf = (e = uf, t) => {
					switch (t.type) {
						case Mb.n: {
							const {
								postId: r,
								time: s
							} = t.payload;
							return e[r] && Math.abs(Math.floor(s.currentTime) - Math.floor(e[r].currentTime)) < df.m ? e : {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				pf = Object(v.c)({
					autoPlayed: Gb,
					buffering: qb,
					consumed: Hb,
					continuousViewStartedAt: Qb,
					feed: Kb,
					fullscreen: zb,
					loadable: Xb,
					loadTimes: Zb,
					metadata: tf,
					paused: sf,
					playing: af,
					started: of ,
					time: lf
				}),
				bf = Object(v.c)({
					embedAndImage: Dp,
					expanded: Pp,
					focus: Ap,
					followed: Rp,
					instances: kp,
					isAnimatingUpvote: Lp,
					isTrackingCrossposts: Mp,
					metaMap: Gp,
					models: nb,
					modToMemberShare: ab,
					crowdControl: Sp,
					postLevelCrowdControl: db,
					recent: ub,
					scheduledPosts: Cb,
					topAwarded: Ub,
					video: pf,
					carousel: gp
				}),
				ff = r("./src/lib/reducers/addAuthentication/index.ts");
			const yf = {};
			var mf = Object(ff.a)((e = yf, t) => {
					switch (t.type) {
						case G.b:
						case G.f: {
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
						case x.G: {
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
				}, yf),
				Of = Object(v.c)({
					data: mf
				});
			const hf = {};
			var Ef = (e = hf, t) => {
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
			const _f = {};
			var If = (e = _f, t) => {
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
				gf = Object(v.c)({
					error: Ef,
					pending: If
				});
			const Sf = {};
			var vf = (e = Sf, t) => {
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
			const jf = {};
			var Tf = (e = jf, t) => {
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
				Df = Object(v.c)({
					error: vf,
					pending: Tf
				}),
				wf = Object(v.c)({
					fetch: gf,
					purchase: Df
				});
			var Pf = (e = null, t) => {
				switch (t.type) {
					case l.b:
						return t.payload.productId;
					case s.b:
						return null;
					default:
						return e
				}
			};
			const Af = {};
			var Cf = (e = Af, t) => {
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
				Rf = Object(v.c)({
					api: wf,
					currentlyPurchasing: Pf,
					models: Cf
				});
			const Nf = {};
			var kf = (e = Nf, t) => {
				switch (t.type) {
					case F.f:
					case F.e:
					case F.c:
					case F.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case F.d:
					case F.a: {
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
			const Lf = {};
			var xf = (e = Lf, t) => {
					switch (t.type) {
						case F.f:
						case F.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case F.e:
						case F.d:
						case F.b:
						case F.a: {
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
				Uf = Object(v.c)({
					error: kf,
					pending: xf
				});
			const Mf = {};
			var Bf = (e = Mf, t) => {
					switch (t.type) {
						case F.e: {
							const {
								key: r,
								commentIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case F.b: {
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
				Gf = r("./src/reddit/actions/comment/list.ts");
			const Ff = {};
			var qf = (e = Ff, t) => {
				switch (t.type) {
					case Gf.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Gf.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? Ts()(e, r) : e
					}
					default:
						return e
				}
			};
			const Wf = {};
			var Hf = (e = Wf, t) => {
				switch (t.type) {
					case F.e: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: {}
						}
					}
					case F.b: {
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
			const Vf = {};
			var Qf = (e = Vf, t) => {
					switch (t.type) {
						case F.e:
						case F.b: {
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
							} : Object(wt.a)(e, r)
						}
						default:
							return e
					}
				},
				$f = Object(v.c)({
					api: Uf,
					endMarkers: qf,
					fetchedTokens: Hf,
					commentIds: Bf,
					loadMore: Qf
				}),
				Kf = r("./src/reddit/actions/pages/profileModSettings.ts");
			var zf = (e = !0, t) => {
					switch (t.type) {
						case Kf.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				Yf = Object(v.c)({
					pending: zf
				}),
				Xf = Object(v.c)({
					api: Yf
				});
			const Jf = {};
			var Zf = (e = Jf, t) => (t.type, e);
			const ey = {};
			var ty = (e = ey, t) => {
				switch (t.type) {
					case W.a:
					case W.d: {
						const {
							listingKey: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case W.b:
					case W.c:
					case W.i:
					case W.f:
					case W.e:
					case W.g: {
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
			const ry = {};
			var sy = (e = ry, t) => {
					switch (t.type) {
						case W.b:
						case W.f: {
							const {
								listingKey: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case W.a:
						case W.d:
						case W.c:
						case W.i:
						case W.e:
						case W.g: {
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
				ny = Object(v.c)({
					error: ty,
					pending: sy
				});
			const ay = {};
			var cy = (e = ay, t) => {
				switch (t.type) {
					case W.c:
					case W.i:
					case W.e:
					case W.g: {
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
			const oy = {};
			var dy = (e = oy, t) => {
					switch (t.type) {
						case W.i:
						case W.c:
						case W.e:
						case W.g: {
							const {
								pageInfo: r,
								listingKey: s
							} = t.payload;
							return r ? {
								...e,
								[s]: r
							} : oy
						}
						default:
							return e
					}
				},
				iy = Object(v.c)({
					api: ny,
					ids: cy,
					pageInfo: dy
				}),
				uy = r("./src/reddit/constants/posts.ts");
			const ly = {};
			var py = (e = ly, t) => {
					switch (t.type) {
						case H.c:
						case Ne.e:
							return {
								...e, ...t.payload.profileAboutInfo
							};
						case $u.k: {
							const r = t.payload;
							return r.profile ? {
								...e,
								[r.profile.id]: r.about
							} : e
						}
						case Yu.h: {
							const {
								identifiers: r,
								userIsSubscriber: s
							} = t.payload, n = r.filter(e => e.type === uy.a.PROFILE);
							return n.length ? n.reduce((e, t) => (e[t.id] = {
								...e[t.id],
								userIsSubscriber: s
							}, e), {
								...e
							}) : e
						}
						case Er.n: {
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
				by = r("./src/reddit/models/Subreddit/index.ts");
			const fy = {};
			var yy = (e = fy, t) => {
				switch (t.type) {
					case je.b:
					case je.f:
					case ge.f:
					case G.b:
					case G.f:
					case ge.b:
					case F.b:
					case F.e:
					case W.c:
					case W.i:
					case W.e:
					case W.g:
					case Pe.b:
					case Pe.e:
					case q.PROFILE_POSTS_LOADED:
					case Ae.b:
					case Te.e:
					case Te.h:
					case ve.u:
					case $u.h:
					case Kd.b:
					case Ne.e:
					case $.i:
					case $u.m:
					case Q.b:
					case Q.e:
					case H.c:
					case we.PAGE_LOADED:
					case xr.e:
					case Ds.PAGE_LOADED:
					case V.SUBREDDIT_LOADED:
					case De.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Yu.c:
						return Object(N.merge)(e, t.payload.profiles);
					case Ne.h: {
						const {
							typeaheadSuggestions: r
						} = t.payload, s = Object.values(r).reduce((e, t) => Object(by.h)(t) ? {
							...e,
							[t.id]: t
						} : e, {});
						return Object.keys(s).length ? Object(N.merge)(e, s) : e
					}
					case B.i:
					case B.f:
					case B.m:
					case B.p:
					case B.v:
					case B.k: {
						const {
							response: r
						} = t.payload, s = r && r.profiles;
						return Object(N.merge)(e, s)
					}
					case $u.l:
					case $u.k: {
						const {
							profile: r
						} = t.payload;
						return r ? Object(N.merge)(e, {
							[r.id]: r
						}) : e
					}
					case Er.n: {
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
					case Er.l:
					case Er.k: {
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
			const my = {};
			var Oy = (e = my, t) => {
					switch (t.type) {
						case $u.c:
						case $u.f: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[(r || "").toLowerCase()]: !0
							}
						}
						case $u.a:
						case $u.b:
						case $u.d:
						case $u.e: {
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
				hy = Object(v.c)({
					pending: Oy
				});
			const Ey = {};
			var _y = (e = Ey, t) => {
				switch (t.type) {
					case $u.b: {
						const {
							profileName: r,
							data: s
						} = t.payload, n = s.map(e => e.id);
						return {
							...e,
							[(r || "").toLowerCase()]: n
						}
					}
					case $u.e:
					case W.c:
					case W.i:
					case W.e:
					case W.g: {
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
			const Iy = {};
			var gy = (e = Iy, t) => {
					switch (t.type) {
						case $u.e: {
							const {
								pageInfo: r,
								profileName: s
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						case W.c:
						case W.i: {
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
				Sy = Object(v.c)({
					api: hy,
					models: _y,
					pageInfo: gy
				});
			const vy = {};
			var jy = (e = vy, t) => {
					switch (t.type) {
						case $u.i: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case $u.g:
						case $u.h: {
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
				Ty = Object(v.c)({
					pending: jy
				});
			const Dy = {};
			var wy = (e = Dy, t) => {
					switch (t.type) {
						case $u.h: {
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
				Py = Object(v.c)({
					api: Ty,
					pageInfo: wy
				}),
				Ay = r("./src/reddit/actions/pinnedPost.ts");
			const Cy = {};
			var Ry = Object(ff.a)((e = Cy, t) => {
				switch (t.type) {
					case Ay.a: {
						const {
							pinned: r,
							profileId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case Ay.d: {
						const {
							postId: r,
							profileId: s
						} = t.payload, n = e[s] || [];
						return {
							...e,
							[s]: [...n, r].slice(-Re.cb)
						}
					}
					case Ay.g: {
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
			}, Cy);
			const Ny = {};
			var ky = Object(ff.a)((e = Ny, t) => {
				switch (t.type) {
					case Ay.a: {
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
			}, Ny);
			const Ly = {};
			var xy = Object(ff.a)((e = Ly, t) => {
					switch (t.type) {
						case Ay.c:
						case Ay.f: {
							const {
								postId: r,
								profileId: s
							} = t.payload, n = e[s] || [];
							return {
								...e,
								[s]: [...n, r]
							}
						}
						case Ay.b:
						case Ay.e:
						case Ay.d:
						case Ay.g: {
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
				}, Ly),
				Uy = Object(v.c)({
					data: Ry,
					initialData: ky,
					pending: xy
				}),
				My = r("./src/reddit/actions/trophyCase.ts");
			const By = {};
			var Gy, Fy, qy = (e = By, t) => {
					switch (t.type) {
						case My.a: {
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
				Wy = Object(v.c)({
					about: py,
					models: yy,
					moderated: Sy,
					multireddits: Py,
					pinnedPosts: Uy,
					trophyCases: qy
				});
			r("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(Gy || (Gy = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(Fy || (Fy = {}));
			var Hy, Vy, Qy;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(Hy || (Hy = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Vy || (Vy = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Qy || (Qy = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(Hy || (Hy = {}));
			Object(Ce.a)("PROMO__SHOW_PROMO"), Object(Ce.a)("PROMO__HIDE_PROMO");
			const $y = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var Ky = (e = $y, t) => {
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
				zy = r("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const Yy = {
				isError: !1,
				isPending: !1,
				global: {
					rpan_config_refresh_rate: zy.d,
					viewer_streams_refresh: zy.c,
					viewer_streams_refresh_slop: zy.e
				},
				subreddits: {},
				isPermanentlyCanceled: !1
			};
			var Xy = (e = Yy, t) => {
				switch (t.type) {
					case zy.w:
						return {
							...e, isError: !1, isPending: !1, global: {
								...t.payload
							}
						};
					case zy.x: {
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
					case zy.G:
						return {
							...e, isPending: !0
						};
					case zy.I:
						return {
							...e, isError: !0, isPending: !1
						};
					case zy.H:
						return {
							...e, isPermanentlyCanceled: !0, isPending: !1
						};
					default:
						return e
				}
			};
			var Jy = (e = {}, t) => {
				switch (t.type) {
					case zy.L:
						return {
							...e, [zy.b]: t.payload.error
						};
					case zy.M:
						return {
							...e, [t.payload.streamId]: t.payload.error
						};
					case zy.z: {
						const {
							[zy.b]: t, ...r
						} = e;
						return r
					}
					case zy.y: {
						const {
							[t.payload.model.post.id]: r, ...s
						} = e;
						return s
					}
					default:
						return e
				}
			};
			const Zy = (e, t, r, s) => ({
				...e,
				[t]: {
					...e[t],
					isPending: r,
					...s && {
						utcTimeStamp: s
					}
				}
			});
			var em = (e = {}, t) => {
				switch (t.type) {
					case zy.N:
						return Zy(e, t.payload, !0);
					case zy.O:
						return Zy(e, zy.b, !0);
					case zy.y:
						return Zy(e, t.payload.model.post.id, !1, t.payload.utcTimeStamp);
					case zy.z:
						return Zy(e, zy.b, !1, t.payload.utcTimeStamp);
					case zy.M:
						return Zy(e, t.payload.streamId, !1);
					case zy.L:
						return Zy(e, zy.b, !1);
					default:
						return e
				}
			};
			const tm = {
				isError: !1,
				isPending: !1,
				subreddits: []
			};
			var rm = (e = tm, t) => {
					switch (t.type) {
						case zy.v:
							return {
								...e, isError: !1, isPending: !1, subreddits: t.payload.subreddits
							};
						case zy.J:
							return {
								...e, isError: !1, isPending: !0
							};
						case zy.K:
							return {
								...e, isError: !0, isPending: !1
							};
						default:
							return e
					}
				},
				sm = Object(v.c)({
					config: Xy,
					error: Jy,
					pending: em,
					recommendedViewerSubreddits: rm
				});
			const nm = {};
			var am = (e = nm, t) => {
				switch (t.type) {
					case zy.r:
						return {
							...e, [t.payload.streamId]: {
								level: t.payload.level,
								error: !1
							}
						};
					case zy.F:
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
			const cm = {
				cursor: zy.W,
				timestamps: {},
				visitOrder: []
			};
			var om = (e = cm, t) => {
				switch (t.type) {
					case zy.P:
						return cm;
					case zy.X: {
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
						return dm(e, t.payload.id);
					case zy.E:
						return dm(e, t.payload);
					case fi.k: {
						const r = Object.keys(t.payload).filter(e => t.payload[e].hidden);
						return im(e, r)
					}
					case zy.V: {
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
			const dm = (e, t) => {
					const r = e.visitOrder.indexOf(t);
					if (-1 === r) return e;
					const s = r > e.cursor ? e.cursor : Math.max(e.cursor - 1, 0);
					return {
						...e,
						visitOrder: e.visitOrder.filter(e => e !== t),
						cursor: s
					}
				},
				im = (e, t) => {
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
				um = {
					ended: [],
					removed: []
				};

			function lm(e) {
				return [...new Set(e)]
			}
			var pm = (e = um, t) => {
				switch (t.type) {
					case zy.t:
						return {
							...e, ended: lm(e.ended.concat(t.payload))
						};
					case zy.u:
						return {
							...e, removed: lm(e.removed.concat(t.payload))
						};
					default:
						return e
				}
			};
			const bm = {};
			var fm = (e = bm, t) => {
				switch (t.type) {
					case zy.z:
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
			const ym = {},
				mm = (e, t) => {
					const r = Object.keys(e).reduce((t, r) => ({
						...t,
						[r]: {
							...e[r],
							rank: zy.m
						}
					}), {});
					return t.reduce((e, t, r) => ({
						...e,
						[t.post.id]: {
							...t,
							rank: zy.l - r
						}
					}), r)
				},
				Om = (e, t) => {
					const r = t.post.id,
						s = e[r] ? e[r].rank : zy.m;
					return {
						...e,
						[t.post.id]: {
							...t,
							rank: s
						}
					}
				};
			var hm = (e = ym, t) => {
				switch (t.type) {
					case zy.y:
						return Om(e, t.payload.model);
					case zy.z:
						return mm(e, t.payload.models);
					case zy.D: {
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
			const Em = {
				discoveryUnitThumbnails: {},
				streamPreviews: {}
			};
			var _m = (e = Em, t) => {
				switch (t.type) {
					case zy.s:
						return {
							...e, discoveryUnitThumbnails: {
								...t.payload.reduce((e, t) => ({
									...e,
									[t.postId]: t.imageUrl
								}), {})
							}
						};
					case zy.A:
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
			const Im = {
				reported: []
			};
			var gm = (e = Im, t) => {
				switch (t.type) {
					case p.d:
						return {
							...e, reported: [...e.reported, t.payload.id]
						};
					default:
						return e
				}
			};
			const Sm = {
				isIntroFinished: !1
			};
			var vm = (e = Sm, t) => {
				switch (t.type) {
					case zy.B:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const jm = {
				reportedStreams: []
			};
			var Tm = (e = jm, t) => {
					switch (t.type) {
						case zy.C:
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
				Dm = Object(v.c)({
					api: sm,
					history: om,
					hlsStreams: pm,
					listings: fm,
					models: hm,
					preloads: _m,
					reports: gm,
					theaterSettings: vm,
					userSettings: Tm,
					automuteLevels: am
				}),
				wm = r("./src/reddit/actions/recentSubreddits/constants.ts"),
				Pm = r("./src/reddit/actions/session.ts");
			const Am = [];
			var Cm = (e = Am, t) => {
				switch (t.type) {
					case Pm.c:
					case Pm.d:
						return Am;
					case wm.d:
						return ((e, t) => Wu()(e, t) ? e : t)(e, t.subreddits);
					case wm.f: {
						const {
							payload: r
						} = t, s = [r, ...e];
						return Array.from(new Set(s)).slice(0, wm.c)
					}
					case wm.a: {
						const {
							payload: e
						} = t;
						return e.slice(0, wm.c)
					}
					default:
						return e
				}
			};
			const Rm = {};
			var Nm = (e = Rm, t) => {
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
				km = r("./src/reddit/actions/pages/report/constants.ts");
			var Lm = (e = null, t) => {
				switch (t.type) {
					case km.a:
						return t.payload;
					default:
						return e
				}
			};
			var xm = (e = null, t) => {
				switch (t.type) {
					case km.b:
						return t.payload;
					case km.c:
					case km.d:
						return !1;
					default:
						return e
				}
			};
			var Um = (e = !1, t) => {
				switch (t.type) {
					case km.d:
						return !0;
					case km.c:
					case km.b:
						return !1;
					default:
						return e
				}
			};
			var Mm = (e = !1, t) => {
					switch (t.type) {
						case km.c:
							return !0;
						case km.b:
						case km.d:
							return !1;
						default:
							return e
					}
				},
				Bm = Object(v.c)({
					error: xm,
					pending: Um,
					success: Mm
				}),
				Gm = r("./src/reddit/actions/reportPageRules/constants.ts");
			const Fm = [];
			var qm = (e = Fm, t) => {
					switch (t.type) {
						case Gm.a:
							return t.payload;
						default:
							return e
					}
				},
				Wm = Object(v.c)({
					reportPageApi: Bm,
					reportPageRules: qm,
					initialReason: Lm
				}),
				Hm = r("./src/reddit/actions/reportRules.ts");
			const Vm = {
				liveStreamingRules: [],
				sitewideRules: []
			};
			var Qm = (e = Vm, t) => {
				switch (t.type) {
					case Hm.b:
						return {
							...e, sitewideRules: t.payload
						};
					case Hm.a:
						return {
							...e, liveStreamingRules: t.payload
						};
					default:
						return e
				}
			};
			Object(Ce.a)("REQUEST_HOST_SET");
			var $m = (e = "", t) => {
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			Object(Ce.a)("RUN_TIME_ENV_VARS__IS_STAGING");
			const Km = {
				staging: !1,
				startTimeInMillis: (new Date).getTime()
			};
			var zm = (e = Km, t) => {
					switch (t.type) {
						case "RUN_TIME_ENV_VARS__IS_STAGING":
							return {
								...e, staging: !0
							};
						default:
							return e
					}
				},
				Ym = r("./src/reddit/components/SearchDropdown/index.tsx");
			var Xm = (e = !1, t) => {
				switch (t.type) {
					case Ne.g:
						return !0;
					case yo.b: {
						const {
							event: r
						} = t.payload, s = r.target, n = document.getElementById(Ym.b), a = document.getElementById(Ym.a);
						return !(!s || !((null == n ? void 0 : n.contains(s)) || (null == a ? void 0 : a.contains(s)))) && e
					}
					case Ne.f:
					case yo.a:
					case yo.c:
						return !1;
					default:
						return e
				}
			};
			var Jm = (e = "", t) => {
				switch (t.type) {
					case H.c:
					case Ne.i: {
						const {
							searchQuery: e
						} = t.payload;
						return e || ""
					}
					default:
						return e
				}
			};
			const Zm = Object.create(null);
			var eO = (e = Zm, t) => {
					switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
						case Ne.h: {
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
				tO = r("./src/reddit/models/Search/index.ts");
			const rO = {};
			var sO = (e = rO, t) => {
					switch (t.type) {
						case Ne.h: {
							const {
								typeaheadSuggestions: r
							} = t.payload, s = {};
							return Object.keys(r).forEach(e => {
								const t = r[e];
								return s[e] = Object(tO.e)(t)
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				nO = Object(v.c)({
					idsByQuery: eO,
					models: sO
				});
			const aO = {};
			var cO = (e = aO, t) => {
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
				oO = Object(v.c)({
					isDropdownOpen: Xm,
					isSubredditSearchEnabled: (e = !0, t) => {
						switch (t.type) {
							case Ne.a:
								return !1;
							case Ne.b:
								return !0;
							default:
								return e
						}
					},
					searchQuery: Jm,
					typeahead: nO,
					viewTreatment: cO
				}),
				dO = r("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const iO = {};
			var uO = (e = iO, t) => {
				switch (t.type) {
					case H.c: {
						const {
							key: r,
							listingOrder: s,
							postOrder: n,
							posts: a,
							searchQuery: c,
							subreddits: o,
							viewTreatment: d
						} = t.payload, i = {
							subredditIcons: [],
							displayText: null,
							subredditOccurrences: 0,
							searchQuery: c
						};
						if (d === dO.c.Trending) {
							const e = [];
							if (s && s.map(t => {
									!e.includes(t.id) && o[t.id] && (e.push(t.id), i.subredditIcons.push({
										url: o[t.id].icon.url,
										subredditName: o[t.id].name
									}), i.displayText || (i.displayText = o[t.id].displayText))
								}), n)
								for (let t = 0; t < n.length; t++) {
									const r = a[n[t]],
										s = r && r.belongsTo ? r.belongsTo.id : void 0;
									s && !e.includes(s) && o[s] && (e.push(s), i.subredditIcons.push({
										url: o[s].icon.url,
										subredditName: o[s].name
									}))
								}
							o && (i.subredditOccurrences = Object.keys(o).length - 1)
						}
						return {
							...e,
							[r]: i
						}
					}
					default:
						return e
				}
			};
			const lO = {};
			var pO = (e = lO, t) => {
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
			const bO = {};
			var fO = (e = bO, t) => {
					switch (t.type) {
						case H.c: {
							const {
								key: r,
								searchDiscoveryUnitOrder: s
							} = t.payload;
							return s ? {
								...e,
								[r]: s
							} : bO
						}
						default:
							return e
					}
				},
				yO = Object(v.c)({
					headerContent: uO,
					models: pO,
					order: fO
				}),
				mO = r("./src/reddit/actions/searchQueryId/index.tsx");
			const OO = {};
			Object(Ce.a)("SEO__CRAWLER_RECEIVED");
			var hO = (e = null, t) => {
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				EO = r("./src/reddit/actions/seo/linksModule.ts");
			const _O = {};
			var IO = (e = _O, t) => {
					switch (t.type) {
						case EO.b:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? {
								...e,
								frontpage: t.payload
							} : e;
						case EO.c:
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
				gO = r("./src/reddit/actions/seo/topicLinks.ts");
			const SO = {};
			var vO = (e = SO, t) => {
					switch (t.type) {
						case gO.a:
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
				jO = Object(v.c)({
					crawler: hO,
					linksModule: IO,
					topicLinks: vO
				}),
				TO = r("./src/reddit/actions/shortcuts/constants.ts");
			var DO = (e = null, t) => {
				switch (t.type) {
					case TO.a:
						return t.payload;
					case u.b:
						return null;
					default:
						return e
				}
			};
			var wO = (e = null, t) => {
					switch (t.type) {
						case TO.b:
							return t.payload || null;
						default:
							return e
					}
				},
				PO = r("./src/reddit/constants/shortcuts.ts"),
				AO = r("./src/reddit/helpers/history/index.ts");
			const CO = PO.d.Global,
				RO = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(AO.b)(Cl.b.IsOverlay) ? PO.d.Lightbox : PO.d.CommentPage;
						case "rpan":
							return Object(AO.b)(Cl.b.IsOverlay) ? PO.d.Lightbox : CO;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return PO.d.Listing;
						case "modQueuePages":
							return PO.d.Modqueue;
						default:
							return CO
					}
				};
			var NO = (e = CO, t) => {
					switch (t.type) {
						case u.b:
							const r = t.payload;
							if (r.routeMatch) {
								const e = r.routeMatch.route.meta;
								return RO(e)
							}
							return CO;
						default:
							return e
					}
				},
				kO = Object(v.c)({
					activeCommentId: DO,
					activePostId: wO,
					namespace: NO
				});
			var LO = (e = !1, t) => {
					if (e) return e;
					switch (t.type) {
						case m.q:
						case m.r:
							return !0;
						default:
							return e
					}
				},
				xO = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				UO = Object(v.c)({
					firstFetch: LO,
					models: xO.b
				}),
				MO = r("./src/reddit/actions/streaming/modSettings.ts");
			var BO = (e = null, t) => {
				switch (t.type) {
					case MO.b:
					case MO.c:
						return null;
					case MO.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var GO = (e = !1, t) => {
					switch (t.type) {
						case MO.b:
							return !0;
						case MO.c:
						case MO.a:
							return !1;
						default:
							return e
					}
				},
				FO = Object(v.c)({
					error: BO,
					pending: GO
				}),
				qO = r("./src/reddit/actions/streaming/constants.ts");
			const WO = {};
			var HO = (e = WO, t) => {
					switch (t.type) {
						case qO.a: {
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
				VO = Object(v.c)({
					api: FO,
					modSettings: HO
				}),
				QO = r("./src/reddit/models/StructuredStyles/index.ts");
			const $O = {};
			var KO = (e = $O, t) => {
					switch (t.type) {
						case b.h:
						case b.b:
						case b.d:
							return t.payload.styles;
						case b.e:
							return $O;
						case b.c: {
							const r = t.payload;
							return {
								...e,
								...r
							}
						}
						case b.k: {
							const e = t.payload;
							return Object(QO.h)(e.styles)
						}
						default:
							return e
					}
				},
				zO = r("./src/reddit/actions/exportImportStyles.ts");
			var YO = (e = null, t) => {
				switch (t.type) {
					case zO.c:
					case zO.b:
						return null;
					case zO.a:
						return t.payload;
					default:
						return e
				}
			};
			var XO = (e = !1, t) => {
					switch (t.type) {
						case zO.c:
							return !0;
						case zO.b:
						case zO.a:
							return !1;
						default:
							return e
					}
				},
				JO = Object(v.c)({
					error: YO,
					pending: XO
				}),
				ZO = r("./src/reddit/actions/postFlairStyleTemplate.ts"),
				eh = r("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const th = {};
			var rh = (e = th, t) => {
					switch (t.type) {
						case V.SUBREDDIT_LOADED:
						case G.b:
						case G.f:
						case H.c:
						case Ne.e:
						case we.PAGE_LOADED:
						case Ds.PAGE_LOADED: {
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
						case ZO.b: {
							const {
								flairId: r,
								template: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case ZO.a: {
							const {
								flairId: r
							} = t.payload;
							return Object(wt.a)(e, r)
						}
						case fp.b: {
							const {
								templateId: r
							} = t.payload;
							return Object(wt.a)(e, r)
						}
						case b.k:
							return th;
						case eh.b: {
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
				sh = Object(v.c)({
					models: rh
				});
			const nh = {};
			var ah = (e = nh, t) => {
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
						return nh;
					default:
						return e
				}
			};
			var ch = (e = !1, t) => {
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
			var oh = (e = null, t) => {
				switch (t.type) {
					case b.d:
						return t.payload.subredditId;
					case b.e:
						return null;
					case u.b:
						return t.payload.location.search.indexOf("styling=true") > -1 ? e : null;
					case Er.g:
						return null;
					default:
						return e
				}
			};
			const dh = {};
			var ih = (e = dh, t) => {
					switch (t.type) {
						case V.SUBREDDIT_LOADED:
						case G.b:
						case G.f:
						case we.PAGE_LOADED:
						case Ds.PAGE_LOADED: {
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
						case Ne.e:
						case H.c: {
							const {
								payload: r
							} = t;
							if (!r.structuredStyles || !r.structuredStyles.data) return e;
							if (!r.subredditName) return e;
							let s;
							if (ia()(r.subreddits, (e, t) => {
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
								s = Object(QO.h)(r.styles);
							return {
								...e,
								[r.subredditId]: s
							}
						}
						case $u.k: {
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
						case Er.l: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Yp(e, {
									[r.subredditId]: {
										bannerBackgroundImage: r.imageUrl
									}
								})
							}
							return e
						}
						case Er.k: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Yp(e, {
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
				uh = Object(v.c)({
					draft: KO,
					exportStyles: JO,
					flairTemplate: sh,
					imagePreviews: ah,
					isBladeEditorDirty: ch,
					isEditing: oh,
					models: ih
				});
			Object(Ce.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var lh = (e = "", t) => {
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				ph = r("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const bh = {};
			var fh = (e = bh, t) => {
				switch (t.type) {
					case ph.c:
					case ph.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case ph.a: {
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
			const yh = {};
			var mh = (e = yh, t) => {
					switch (t.type) {
						case ph.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case ph.b:
						case ph.a: {
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
				Oh = Object(v.c)({
					error: fh,
					pending: mh
				});
			const hh = {};
			var Eh = (e = hh, t) => {
					switch (t.type) {
						case ph.b: {
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
				_h = Object(v.c)({
					api: Oh,
					models: Eh
				}),
				Ih = r("./src/reddit/actions/category/constants.ts"),
				gh = r("./src/reddit/actions/subredditMention/constants.ts");
			const Sh = {};
			var vh = (e = Sh, t) => {
				switch (t.type) {
					case gh.d:
					case G.b:
					case G.f:
					case H.c:
					case V.SUBREDDIT_FAILED:
					case V.SUBREDDIT_LOADED:
					case we.PAGE_LOADED:
					case Ds.PAGE_LOADED:
					case F.b:
					case F.e:
					case Pe.b:
					case Pe.a:
					case Pe.e:
					case Pe.d:
					case q.PROFILE_POSTS_LOADED:
					case Q.b:
					case Q.e:
					case Ne.e:
					case zd.TOPIC_DATA_LOADED:
					case ei.u: {
						const r = t.payload.subredditAboutInfo;
						if (!r) return e;
						const s = Object.keys(r);
						return 0 === s.length ? e : s.reduce((e, t) => (r[t] && (e[t] ? e[t] = {
							...e[t],
							...r[t],
							allowedPostTypes: {
								...e[t].allowedPostTypes,
								...r[t].allowedPostTypes
							}
						} : e[t] = r[t]), e), {
							...e
						})
					}
					case Ba.a: {
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
					case Yu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, n = r.filter(e => e.type === uy.a.SUBREDDIT);
						return n.length ? n.reduce((e, t) => Object(N.setIn)(e, [t.id, "userIsSubscriber"], s), e) : e
					}
					case kc.g:
					case Ih.f:
					case ei.g:
					case ei.o:
					case Yr.B: {
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
					case Ba.b: {
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
					case ph.b: {
						const {
							subreddits: r
						} = t.payload, s = r.reduce((e, t) => (t.allowedPostTypes && (e[t.id] = {
							allowedPostTypes: t.allowedPostTypes
						}), e), {});
						return Object(N.merge)(e, s)
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
			const jh = {};
			var Th = (e = jh, t) => {
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
			var Dh = (e = !1, t) => {
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
				wh = Object(v.c)({
					error: Th,
					pending: Dh
				}),
				Ph = r("./src/reddit/actions/subredditCreation.ts");
			const Ah = {
				apiError: null
			};
			var Ch = (e = Ah, t) => {
				switch (t.type) {
					case Ph.b: {
						const {
							error: r
						} = t.payload;
						return {
							...e,
							apiError: r
						}
					}
					case Ph.a:
					case Ph.c:
					case Ph.e:
						return Ah;
					default:
						return e
				}
			};
			var Rh = (e = null, t) => {
				switch (t.type) {
					case Ph.d: {
						const {
							crosspostId: e
						} = t.payload;
						return e || null
					}
					case Ph.a:
					case Ph.c:
					case Ph.e:
						return null;
					default:
						return e
				}
			};
			var Nh = (e = null, t) => {
				switch (t.type) {
					case Ph.e: {
						const {
							subredditName: e
						} = t.payload;
						return e || null
					}
					case Ph.c:
					case Ph.b:
						return null;
					default:
						return e
				}
			};
			var kh = (e = !1, t) => {
					switch (t.type) {
						case Ph.c:
							return !0;
						case Ph.e:
						case Ph.b:
							return !1;
						default:
							return e
					}
				},
				Lh = Object(v.c)({
					error: Ch,
					lastCreatedSubredditId: Nh,
					initialCrosspost: Rh,
					pending: kh
				});
			var xh = (e = !1, t) => {
					switch (t.type) {
						case ei.w:
							return !0;
						case ei.x:
						case ei.v:
							return !1;
						default:
							return e
					}
				},
				Uh = Object(v.c)({
					pending: xh
				});
			const Mh = {};
			var Bh = (e = Mh, t) => {
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
			const Gh = {};
			var Fh = (e = Gh, t) => {
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
				qh = Object(v.c)({
					error: Bh,
					pending: Fh
				});
			const Wh = {};
			var Hh = (e = Wh, t) => {
					switch (t.type) {
						case ei.f:
						case ei.g:
							return {
								...e, [t.payload.key]: !1
							};
						case ei.h:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				Vh = Object(v.c)({
					pending: Hh
				});
			var Qh = (e = null, t) => {
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
			var $h = (e = !1, t) => {
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
				Kh = Object(v.c)({
					error: Qh,
					pending: $h
				});
			var zh = (e = null, t) => {
				switch (t.type) {
					case ei.k: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case ei.m:
					case ei.l:
						return null;
					default:
						return e
				}
			};
			var Yh = (e = !1, t) => {
					switch (t.type) {
						case ei.m:
							return !0;
						case ei.l:
						case ei.k:
							return !1;
						default:
							return e
					}
				},
				Xh = Object(v.c)({
					error: zh,
					pending: Yh
				}),
				Jh = r("./src/reddit/actions/subredditRules/constants.ts");
			var Zh = (e = !1, t) => {
					switch (t.type) {
						case Jh.c:
							return !0;
						case Jh.a:
						case Jh.b:
							return !1;
						default:
							return e
					}
				},
				eE = r("./src/reddit/actions/subredditSettings.ts");
			var tE = (e = !1, t) => {
					switch (t.type) {
						case eE.e:
							return !0;
						case eE.f:
						case eE.d:
							return !1;
						default:
							return e
					}
				},
				rE = Object(v.c)({
					pending: tE
				});
			const sE = {};
			var nE = (e = sE, t) => {
					switch (t.type) {
						case ei.n:
						case ei.o:
							return {
								...e, [t.payload.key]: !1
							};
						case ei.p:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				aE = Object(v.c)({
					pending: nE
				}),
				cE = r("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const oE = {};
			var dE = (e = oE, t) => {
				switch (t.type) {
					case cE.c:
					case cE.b: {
						const r = t.payload,
							{
								subredditName: s
							} = r.options;
						return {
							...e,
							[s.toLowerCase()]: null
						}
					}
					case cE.a: {
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
			const iE = {};
			var uE = (e = iE, t) => {
					switch (t.type) {
						case cE.c: {
							const r = t.payload,
								{
									subredditName: s
								} = r.options;
							return {
								...e,
								[s.toLowerCase()]: !0
							}
						}
						case cE.b:
						case cE.a: {
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
				lE = Object(v.c)({
					error: dE,
					pending: uE
				});
			const pE = {};
			var bE = (e = pE, t) => {
				switch (t.type) {
					case Qp.c:
					case Qp.b: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case Qp.a: {
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
			const fE = {};
			var yE = (e = fE, t) => {
					switch (t.type) {
						case Qp.c: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case Qp.b:
						case Qp.a: {
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
				mE = Object(v.c)({
					error: bE,
					pending: yE
				}),
				OE = Object(v.c)({
					about: wh,
					create: Lh,
					inlineEditing: Uh,
					models: qh,
					onboarding: Vh,
					productOffers: Kh,
					rankings: Xh,
					rules: Zh,
					settings: rE,
					similar: aE,
					topContent: mE,
					wiki: lE
				}),
				hE = r("./node_modules/lodash/isNil.js"),
				EE = r.n(hE);
			const _E = {};
			var IE = (e = _E, t) => {
					switch (t.type) {
						case $.d: {
							const {
								subredditId: r,
								forceState: s
							} = t.payload;
							return {
								...e,
								[r]: EE()(s) ? !e[r] : s
							}
						}
						default:
							return e
					}
				},
				gE = Object(v.c)({
					meta: IE
				});
			const SE = {};
			var vE = (e = SE, t) => {
				switch (t.type) {
					case Ih.f: {
						const {
							categoryId: r,
							subredditIds: s
						} = t.payload;
						return aa()(s) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const jE = {
				pending: !1,
				items: {}
			};
			var TE = (e = jE, t) => {
				switch (t.type) {
					case _p.c:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case _p.d:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			const DE = {};
			var wE = (e = DE, t) => {
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
				PE = r("./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts");
			const AE = {};
			var CE = (e = AE, t) => {
					switch (t.type) {
						case PE.b:
						case PE.c:
						case PE.a: {
							const {
								subredditId: r,
								subredditCountrySite: s
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
				RE = r("./src/reddit/actions/subredditCrosspostable.ts");
			var NE = (e = null, t) => {
				switch (t.type) {
					case RE.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case RE.c:
					case RE.b:
						return null;
					default:
						return e
				}
			};
			var kE = (e = !1, t) => {
					switch (t.type) {
						case RE.c:
							return !0;
						case RE.b:
						case RE.a:
							return !1;
						default:
							return e
					}
				},
				LE = Object(v.c)({
					errors: NE,
					pending: kE
				});
			const xE = {};
			var UE = (e = xE, t) => {
					switch (t.type) {
						case RE.b: {
							const {
								subredditIds: r
							} = t.payload;
							return Wu()(e, r) ? e : r
						}
						default:
							return e
					}
				},
				ME = Object(v.c)({
					api: LE,
					ids: UE
				});
			const BE = {};
			var GE = (e = BE, t) => {
					switch (t.type) {
						case rb.a: {
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
							return Yp(c, {
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
				FE = Object(v.c)({
					models: GE
				});
			const qE = {};
			var WE = (e = qE, t) => {
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
			const HE = {};
			var VE = (e = HE, t) => {
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
			const QE = {};
			var $E = (e = QE, t) => {
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
			const KE = {};
			var zE = (e = KE, t) => {
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
				YE = Object(v.c)({
					assets: WE,
					communityRaw: VE,
					distributions: $E,
					releaseNotes: zE
				}),
				XE = r("./node_modules/lodash/isEqualWith.js"),
				JE = r.n(XE),
				ZE = r("./src/lib/forceHttps/index.ts");
			const e_ = {},
				t_ = (e, t) => {
					return !JE()(e, t, (e, t, r) => {
						if ("subscribers" === r) return !0
					})
				},
				r_ = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					for (let n = 0; n < r.length; n++) {
						const a = r[n],
							c = e[a],
							o = t[a];
						c && !t_(c, o) || (s[a] = {
							...c,
							...o
						})
					}
					return Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var s_ = (e = e_, t) => {
				switch (t.type) {
					case Yu.c:
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
								return a.icon.url ? c.icon.url = Object(ZE.a)(a.icon.url) : n && n.icon.url ? c.icon = n.icon : c.icon.url = "", n && n.allowChatPostCreation && (c.allowChatPostCreation = !0), Object(N.set)(r, s, c)
							}, e) : e
						})(e, t.payload.subreddits || {});
					case je.b:
					case je.f:
					case wm.b:
					case gh.d:
					case Ih.f:
					case ge.f:
					case kc.g:
					case Jd.c:
					case Zd.b:
					case Te.e:
					case Te.h:
					case B.k:
					case ve.r:
					case ve.u:
					case $u.h:
					case Kd.b:
					case G.b:
					case G.f:
					case ge.b:
					case De.b:
					case F.b:
					case F.e:
					case W.c:
					case W.i:
					case W.e:
					case W.g:
					case Pe.b:
					case Pe.e:
					case q.MORE_POSTS_LOADED:
					case q.PROFILE_POSTS_LOADED:
					case $u.e:
					case H.c:
					case V.SUBREDDIT_LOADED:
					case we.PAGE_LOADED:
					case xr.e:
					case Ds.PAGE_LOADED:
					case $u.m:
					case Q.b:
					case Q.e:
					case Ae.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Ne.e:
					case $.c:
					case $.f:
					case $.i:
					case ei.a:
					case ei.g:
					case ei.o:
					case zd.TOPIC_DATA_LOADED:
					case zd.MORE_POSTS_LOADED:
					case Yr.B:
						return r_(e, t.payload.subreddits || {});
					case B.f:
					case B.i:
					case B.m:
					case B.p:
					case B.v: {
						const {
							response: r
						} = t.payload, {
							subreddits: s
						} = r;
						return r_(e, s)
					}
					case Ne.h: {
						const {
							typeaheadSuggestions: r
						} = t.payload;
						return r_(e, r.subreddits || {})
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
						return r_(e, r)
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
					case eE.f: {
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
					case ph.b: {
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
						return Object(N.merge)(e, n)
					}
					default:
						return e
				}
			};
			var n_ = (e = null, t) => {
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
			var a_ = (e = !1, t) => {
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
			var c_ = (e = !1, t) => {
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
				o_ = Object(v.c)({
					errors: n_,
					fetched: a_,
					pending: c_
				});
			var d_ = (e = null, t) => {
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
				i_ = Object(v.c)({
					api: o_,
					order: d_
				});
			const u_ = {};
			var l_ = (e = u_, t) => {
				switch (t.type) {
					case eE.a: {
						const r = t.payload;
						return Object(N.merge)(e, r)
					}
					case eE.b: {
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
			const p_ = {};
			var b_ = (e = p_, t) => {
				switch (t.type) {
					case ei.g: {
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
			const f_ = {};
			var y_ = (e = f_, t) => {
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
			const m_ = {};
			var O_ = (e = m_, t) => {
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
			const h_ = {},
				E_ = (e, t, r) => {
					const s = null == e ? void 0 : e[t],
						n = null == s ? void 0 : s.emotes;
					if (!n) return e;
					const a = ja(r, t),
						c = [...n, a];
					return {
						...e,
						[t]: {
							...s,
							emotes: c
						}
					}
				},
				__ = (e, t, r) => {
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
			var I_ = (e = h_, t) => {
				switch (t.type) {
					case ee.pb: {
						const {
							powerups: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: Ta(r)
						}
					}
					case va.b: {
						const {
							subredditId: r,
							emoji: s
						} = t.payload, n = e[r];
						return {
							...e,
							[r]: E_(n, r, s)
						}
					}
					case va.c: {
						const {
							subredditId: r,
							emojiId: s
						} = t.payload, n = e[r];
						return {
							...e,
							[r]: __(n, r, s)
						}
					}
					default:
						return e
				}
			};
			const g_ = {},
				S_ = (e, t) => t.supporterInfo && e.supporterInfo ? 1e15 * t.score + new Date(t.lastSupportedAt).valueOf() - 1e15 * e.score - new Date(e.lastSupportedAt).valueOf() : t.supporterInfo ? 1 : e.supporterInfo ? -1 : 0;
			var v_ = (e = g_, t) => {
					switch (t.type) {
						case ee.pb: {
							const {
								topSupporters: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: r.sort(S_)
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
								[r]: o.sort(S_)
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
									[r]: [t, ...e[r]].sort(S_)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				j_ = r("./src/lib/makeProductOfferKey/index.ts");
			const T_ = {};
			var D_ = (e = T_, t) => {
				switch (t.type) {
					case ee.cb:
					case ee.pb: {
						const {
							subredditId: r,
							productOffers: s
						} = t.payload;
						if (!(null == s ? void 0 : s.length)) return e;
						const n = s.reduce((e, t) => {
							const s = Object(j_.a)(t.type, r);
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
			const w_ = {};
			var P_ = (e = w_, t) => {
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
				A_ = r("./src/reddit/models/NewCommunityProgress/index.ts");
			const C_ = {};
			var R_ = (e = C_, t) => {
				switch (t.type) {
					case ei.y: {
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
						}) => A_.e.includes(e))))(s.cards);
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
			const N_ = {};
			var k_ = (e = N_, t) => {
				var r, s;
				switch (t.type) {
					case ei.y: {
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
						return 0 === Object.keys(n).length ? e : Object(N.assign)(e, n)
					}
					case ei.d: {
						const {
							subredditId: r,
							questionId: n
						} = t.payload, a = null !== (s = e[r]) && void 0 !== s ? s : [];
						return Object(N.setIn)(e, [r], a.filter(e => e.id !== n))
					}
					case ei.e:
						return N_;
					default:
						return e
				}
			};
			const L_ = {};
			var x_ = (e = L_, t) => {
				switch (t.type) {
					case ei.b: {
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
			const U_ = {};
			var M_ = (e = U_, t) => {
					switch (t.type) {
						case ei.c: {
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
				B_ = r("./src/reddit/actions/subreddit/relatedSubreddits.ts");
			const G_ = {};
			var F_ = (e = G_, t) => {
				switch (t.type) {
					case B_.a: {
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
			const q_ = {};
			var W_ = (e = q_, t) => {
				switch (t.type) {
					case Jh.b: {
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
					case Jh.e: {
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
					case Jh.f: {
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
					case Jh.g:
					case Jh.d: {
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
			const H_ = {};
			var V_ = (e = H_, t) => {
				switch (t.type) {
					case eE.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case eE.f: {
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
					case Er.n: {
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
			const Q_ = {};
			var $_ = (e = Q_, t) => {
				switch (t.type) {
					case ei.o: {
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
			const K_ = {};
			var z_ = (e = K_, t) => {
				switch (t.type) {
					case ei.y: {
						const {
							id: r,
							survey: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case ei.z: {
						const {
							id: r,
							response: s
						} = t.payload, n = Object(N.setIn)(e, [r, "response"], s);
						return Object(N.setIn)(n, [r, "isEligible"], !1)
					}
					default:
						return e
				}
			};
			const Y_ = {};
			var X_ = (e = Y_, t) => {
				switch (t.type) {
					case kc.g: {
						const {
							subredditTopContent: r
						} = t.payload;
						return {
							...e,
							...r.subredditTopContent
						}
					}
					case Qp.b: {
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
			const J_ = [];
			var Z_ = (e = J_, t) => {
				switch (t.type) {
					case ge.b:
					case V.SUBREDDIT_LOADED: {
						const {
							trendingSubredditIds: r
						} = t.payload;
						return r && r.length ? r : e
					}
					default:
						return e
				}
			};
			const eI = {};
			var tI = (e = eI, t) => {
					switch (t.type) {
						case gh.d:
						case Yr.B:
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
				rI = Object(v.c)({
					about: vh,
					api: OE,
					appliedFilters: gE,
					byCategory: vE,
					carousel: TE,
					communityInfo: wE,
					countrySiteSettings: CE,
					crosspostable: ME,
					duplicates: FE,
					gov: YE,
					models: s_,
					moderated: i_,
					notificationSettings: l_,
					onboarding: b_,
					powerupRecentSupporters: y_,
					powerups: O_,
					powerupsEmojis: I_,
					powerupTopSupporters: v_,
					productOffers: D_,
					products: P_,
					progressModule: R_,
					questions: k_,
					rankings: x_,
					rankingsPageInfo: M_,
					related: F_,
					rules: W_,
					settings: V_,
					similar: $_,
					survey: z_,
					topContent: X_,
					trending: Z_,
					unavailableModels: tI
				});
			const sI = {};
			var nI = Object(ff.a)((e = sI, t) => {
					switch (t.type) {
						case V.SUBREDDIT_LOADED: {
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
						case fi.o: {
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
				}, sI),
				aI = Object(v.c)({
					data: nI
				}),
				cI = r("./node_modules/lodash/values.js"),
				oI = r.n(cI);
			const dI = [];
			var iI = (e = dI, t) => {
				switch (t.type) {
					case Yu.d: {
						const {
							makeFavorite: r,
							multiredditsModelsState: s,
							multiredditPath: n
						} = t.payload;
						if (r) {
							const t = [...e],
								r = Qu(t, n, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							return t.splice(r, 0, n), t
						}
						return e.filter(e => e !== n)
					}
					case ve.u: {
						const {
							multireddits: e
						} = t.payload;
						return oI()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case Yu.e: {
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
			var uI = (e = null, t) => {
				switch (t.type) {
					case Yu.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Yu.b:
					case Yu.c:
						return null;
					default:
						return e
				}
			};
			var lI = (e = !1, t) => {
				switch (t.type) {
					case Yu.b:
					case Yu.c:
						return !0;
					case Yu.a:
						return !1;
					default:
						return e
				}
			};
			var pI = (e = !1, t) => {
					switch (t.type) {
						case Yu.b:
							return !0;
						case Yu.c:
						case Yu.a:
							return !1;
						default:
							return e
					}
				},
				bI = Object(v.c)({
					errors: uI,
					fetched: lI,
					pending: pI
				});
			const fI = [];
			var yI = (e = fI, t) => {
				switch (t.type) {
					case Yu.c: {
						const {
							profiles: e,
							favoriteProfileIds: r,
							favoriteSubredditIds: s
						} = t.payload;
						let n;
						return (n = r && r.length ? r : s ? s.filter(t => !!e[t]) : []).sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), n
					}
					case Yu.f: {
						const {
							makeFavorite: r,
							identifier: s,
							profileModels: n
						} = t.payload, {
							id: a,
							type: c
						} = s;
						if (c !== uy.a.PROFILE) return e;
						const o = e ? e.slice() : [];
						if (r) {
							const e = Qu(o, a, (e, t) => n[e].displayText.toLowerCase() > n[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, a)
						} else {
							const e = o.indexOf(a);
							o.splice(e, 1)
						}
						return o
					}
					case Yu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, n = r.filter(t => t.type === uy.a.PROFILE && e.indexOf(t.id) > -1);
						return !n.length || s ? e : n.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const mI = [];
			var OI = (e = mI, t) => {
				switch (t.type) {
					case Yu.c: {
						const {
							subreddits: e,
							favoriteSubredditIds: r
						} = t.payload, s = r ? r.filter(t => !!e[t]) : [];
						return s.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), s
					}
					case Yu.f: {
						const {
							makeFavorite: r,
							identifier: s,
							subredditModels: n
						} = t.payload, {
							id: a,
							type: c
						} = s;
						if (c !== uy.a.SUBREDDIT) return e;
						const o = e ? e.slice() : [];
						if (r) {
							const e = Qu(o, a, (e, t) => n[e].displayText.toLowerCase() > n[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, a)
						} else {
							const e = o.indexOf(a);
							o.splice(e, 1)
						}
						return o
					}
					case Yu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, n = r.filter(t => t.type === uy.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !n.length || s ? e : n.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const hI = [],
				EI = e => (t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1;
			var _I = (e = hI, t) => {
					switch (t.type) {
						case ve.u: {
							const {
								multireddits: r
							} = t.payload, s = oI()(r).map(({
								url: e
							}) => e.toLowerCase()).sort(EI(r));
							return Wu()(e, s) ? e : s
						}
						case De.b: {
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
								d = Vu()(e, c).sort(EI(o));
							return Wu()(e, d) ? e : d
						}
						case Yu.e: {
							const {
								follow: r,
								multiredditPath: s,
								multiredditsModelsState: n
							} = t.payload;
							return r ? [...e, s].sort(EI(n)) : e.filter(e => e !== s)
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
							return [...e, r.url].sort(EI(n))
						}
						default:
							return e
					}
				},
				II = r("./node_modules/lodash/difference.js"),
				gI = r.n(II);
			const SI = [];
			var vI = (e = SI, t) => {
				switch (t.type) {
					case $u.n: {
						const {
							profileOrder: r
						} = t.payload;
						return Tb()([...e, ...r])
					}
					case Yu.c: {
						const {
							profiles: e
						} = t.payload, r = Object.keys(e);
						return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
					}
					case Yu.h: {
						const {
							identifiers: r,
							profileModels: s,
							userIsSubscriber: n
						} = t.payload, a = r.filter(e => e.type === uy.a.PROFILE);
						if (!a.length) return e;
						const c = a.map(e => e.id);
						return n ? Tb()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : gI()(e, c)
					}
					default:
						return e
				}
			};
			const jI = [];
			var TI = (e = jI, t) => {
					switch (t.type) {
						case $u.n: {
							const {
								subredditOrder: r
							} = t.payload;
							return Tb()([...e, ...r])
						}
						case Yu.c: {
							const {
								subreddits: e
							} = t.payload, r = Object.keys(e);
							return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
						}
						case Yu.h: {
							const {
								identifiers: r,
								subredditModels: s,
								userIsSubscriber: n
							} = t.payload, a = r.filter(e => e.type === uy.a.SUBREDDIT && !!e.id);
							if (!a.length) return e;
							const c = a.map(e => e.id);
							return n ? Tb()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : gI()(e, c)
						}
						default:
							return e
					}
				},
				DI = Object(v.c)({
					api: bI,
					favoriteMultiOrder: iI,
					favoriteProfileOrder: yI,
					favoriteSubredditOrder: OI,
					multiredditOrder: _I,
					profileOrder: vI,
					subredditOrder: TI
				}),
				wI = r("./src/reddit/actions/survey/constants.ts");
			var PI = (e = null, t) => {
				switch (t.type) {
					case wI.c:
						return t.payload || null;
					default:
						return e
				}
			};
			var AI = (e = 1, t) => {
				switch (t.type) {
					case wI.d:
						return t.payload || 1;
					default:
						return e
				}
			};
			var CI = (e = !1, t) => {
				switch (t.type) {
					case wI.b:
						return !e;
					default:
						return e
				}
			};
			var RI = (e = !0, t) => {
					switch (t.type) {
						case wI.i:
							return !e;
						default:
							return e
					}
				},
				NI = Object(v.c)({
					activeDemoTrigger: PI,
					demoTriggerThreshold: AI,
					isDemoEnabled: CI,
					isSampleFactorEnabled: RI
				});
			var kI = (e = !1, t) => {
					switch (t.type) {
						case Gt.a:
							const {
								hasUnreadMessages: r
							} = t.payload;
							return r;
						default:
							return e
					}
				},
				LI = r("./src/reddit/actions/tags/constants.ts");
			const xI = {
				pending: !1,
				error: !1
			};
			var UI = (e = xI, t) => {
				switch (t.type) {
					case LI.l:
						return {
							...e, pending: !0
						};
					case LI.m:
						return {
							error: !1, pending: !1
						};
					case LI.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const MI = {
				pending: !1,
				error: !1
			};
			var BI = (e = MI, t) => {
				switch (t.type) {
					case LI.o:
						return {
							...e, pending: !0
						};
					case LI.p:
						return {
							error: !1, pending: !1
						};
					case LI.n:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const GI = {
				pending: !1,
				error: !1
			};
			var FI = (e = GI, t) => {
				switch (t.type) {
					case LI.t:
						return {
							...e, pending: !0
						};
					case LI.s:
					case LI.r:
					case LI.e:
					case LI.j:
						return {
							error: !1, pending: !1
						};
					case LI.q:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const qI = {
				pending: !1,
				error: !1
			};
			var WI = (e = qI, t) => {
				switch (t.type) {
					case LI.v:
						return {
							...e, pending: !0
						};
					case LI.w:
						return {
							error: !1, pending: !1
						};
					case LI.u:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const HI = {
				pending: !1,
				error: !1
			};
			var VI = (e = HI, t) => {
					switch (t.type) {
						case LI.g:
							return {
								...e, pending: !0
							};
						case LI.h:
							return {
								error: !1, pending: !1
							};
						case LI.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				QI = Object(v.c)({
					create: UI,
					deleteTag: BI,
					fetch: FI,
					update: WI,
					updatePrimaryTag: VI
				});
			const $I = {
				global: [],
				recommendedGlobal: []
			};
			var KI = (e = $I, t) => {
					switch (t.type) {
						case LI.w:
						case LI.r:
						case LI.e:
						case LI.j: {
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
				zI = r("./node_modules/lodash/uniqWith.js"),
				YI = r.n(zI),
				XI = r("./src/reddit/models/Option/index.ts");
			const JI = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var ZI = (e = JI, t) => {
					switch (t.type) {
						case LI.d: {
							const {
								option: r
							} = t.payload;
							return {
								...e,
								selectedOptions: YI()([...e.selectedOptions || [], {
									...r
								}], XI.a)
							}
						}
						case LI.c: {
							const {
								option: r
							} = t.payload, s = e.selectedOptions.findIndex(e => Object(XI.a)(e, r));
							return e.selectedOptions.splice(s, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case LI.b: {
							const {
								input: r
							} = t.payload;
							return {
								...e,
								tagInput: r
							}
						}
						case LI.a: {
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
				eg = r("./src/reddit/helpers/tags/index.ts");
			const tg = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var rg = (e = tg, t) => {
					switch (t.type) {
						case LI.j: {
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
						case LI.w:
						case LI.s:
						case LI.r: {
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
								geoPlaces: d ? Object(N.set)(e.geoPlaces, o, d) : e.geoPlaces,
								suggestedItemTags: {
									...e.suggestedItemTags,
									[o]: {
										...c[o] || {}
									}
								},
								sortedItemTags: {
									...e.sortedItemTags,
									[o]: Object(eg.a)(a[o] || {})
								}
							}
						}
						case LI.p: {
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
						case LI.e: {
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
						case LI.h: {
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
				sg = r("./src/reddit/reducers/tags/selected/index.ts"),
				ng = Object(v.c)({
					api: QI,
					availableGlobalTagOrder: KI,
					models: rg,
					selected: sg.b,
					creation: ZI
				}),
				ag = r("./src/reddit/actions/redditEmbed.ts"),
				cg = r("./src/reddit/actions/theme.ts"),
				og = r("./src/reddit/actions/users.ts"),
				dg = r("./src/reddit/models/Theme/index.ts");
			const ig = {
				current: dg.c,
				cached: {}
			};
			var ug = (e = ig, t) => {
					switch (t.type) {
						case cg.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? dg.b : dg.c,
								cached: {}
							}
						}
						case hr.b:
						case hr.c:
						case hr.k:
						case hr.l:
						case hr.g:
						case hr.a:
						case hr.m:
						case je.b:
						case je.f:
						case Te.e:
						case Te.h:
						case G.a:
						case G.e:
						case G.b:
						case G.f:
						case G.d:
						case G.h:
						case ge.b:
						case V.SUBREDDIT_LOADED:
						case De.b:
						case De.a:
						case ge.f:
						case ag.b:
						case $.i:
						case Ne.e:
						case H.c:
						case Er.j:
						case we.PAGE_LOADED:
						case Ds.PAGE_LOADED:
						case og.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: dg.b,
									cached: {}
								} : {
									current: dg.c,
									cached: {}
								}
							}
							return e;
						case F.d:
						case F.e:
						case Pe.a:
						case Pe.b:
						case Pe.d:
						case Pe.e:
						case q.PROFILE_POSTS_FAILED:
						case q.PROFILE_POSTS_LOADED: {
							const {
								account: r
							} = t.payload;
							return r ? r.nightmode ? {
								current: dg.b,
								cached: {}
							} : {
								current: dg.c,
								cached: {}
							} : e
						}
						case B.h:
						case B.j:
						case B.i:
						case B.g:
						case B.f:
						case B.n:
						case B.m:
						case B.p:
						case B.q:
						case B.w:
						case B.v:
							if (t.payload && t.payload.response && t.payload.response.preferences && "nightmode" in t.payload.response.preferences) {
								const {
									nightmode: e
								} = t.payload.response.preferences;
								return e ? {
									current: dg.b,
									cached: {}
								} : {
									current: dg.c,
									cached: {}
								}
							}
							return e;
						case Er.i: {
							if (!t.payload) return e;
							const {
								nightmode: r
							} = t.payload;
							return r ? {
								current: dg.b,
								cached: {}
							} : {
								current: dg.c,
								cached: {}
							}
						}
						case b.d:
							return {
								current: dg.c, cached: {}
							};
						case b.e:
							return t.payload.nightmodeTempUpdated ? {
								current: dg.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				lg = r("./src/reddit/actions/toaster.ts");
			const pg = [];
			var bg = (e = pg, t) => {
					switch (t.type) {
						case lg.c: {
							const r = t.payload,
								s = [];
							let n = !1;
							for (const t of e) {
								const e = t.id === r.id ? r : t;
								s.push(e), n = n || e === r
							}
							return n || s.push(r), s
						}
						case lg.b: {
							const r = t.payload;
							return e.filter(e => e.id !== r)
						}
						default:
							return e
					}
				},
				fg = r("./src/reddit/actions/tooltip.ts");
			var yg = (e = null, t) => {
					switch (t.type) {
						case fg.c:
						case fg.b:
						case fg.e:
						case fg.a: {
							const {
								args: e
							} = t.payload;
							return e || null
						}
						default:
							return e
					}
				},
				mg = r("./src/reddit/components/ModWelcomeTooltip/index.tsx");
			var Og = (e = null, t) => {
					switch (t.type) {
						case fg.c: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : r
						}
						case fg.a: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? e : r
						}
						case fg.b: {
							const {
								tooltipId: r
							} = t.payload;
							return null !== e ? e : r || null
						}
						case fg.e: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : e
						}
						case ee.K:
						case fg.d:
						case u.b:
						case yo.b:
						case yo.c:
						case yo.a:
							return t.type === u.b && e === mg.MOD_WELCOME_TOOLTIP_ID ? e : null;
						default:
							return e
					}
				},
				hg = Object(v.c)({
					params: yg,
					tooltipId: Og
				}),
				Eg = r("./src/reddit/actions/tracing.ts");
			const _g = {
				traceId: void 0
			};
			var Ig = (e = _g, t) => {
					switch (t.type) {
						case Eg.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				gg = r("./src/lib/asyncActions/index.ts"),
				Sg = r("./src/reddit/actions/reCaptchaEnterprise.ts");
			const vg = Object(gg.c)(Sg.c.requestedActionType, Sg.c.succeededActionType, Sg.c.failedActionType),
				jg = Object(gg.c)(Sg.a.requestedActionType, Sg.a.succeededActionType, Sg.a.failedActionType),
				Tg = Object(gg.c)(Sg.d.requestedActionType, Sg.d.succeededActionType, Sg.d.failedActionType);
			var Dg = Object(v.c)({
					load: vg,
					execute: jg,
					send: Tg
				}),
				wg = r("./src/reddit/actions/tracking.ts");
			const Pg = {};
			var Ag = (e = Pg, t) => {
					switch (t.type) {
						case wg.a: {
							const {
								routeKey: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case wg.b: {
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
				Cg = Object(v.c)({
					reCaptchaEnterprise: Dg,
					viewportDataLoaded: Ag
				}),
				Rg = r("./src/reddit/actions/trafficStats/constants.ts");
			var Ng = (e = !1, t) => {
				switch (t.type) {
					case Rg.c:
						return !0;
					case Rg.b:
					case Rg.a:
						return !1;
					default:
						return e
				}
			};
			var kg = (e = null, t) => {
					switch (t.type) {
						case Rg.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case Rg.c:
							return null;
						default:
							return e
					}
				},
				Lg = Object(v.c)({
					pending: Ng,
					trafficStats: kg
				});
			var xg = (e = null, t) => {
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
			var Ug = (e = !1, t) => {
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
				Mg = Object(v.c)({
					error: xg,
					pending: Ug
				});
			var Bg = (e = null, t) => {
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
			var Gg = (e = "", t) => {
				switch (t.type) {
					case d.r:
						return (t.payload ? t.payload.recipient : "") || "";
					case d.t:
						return "";
					default:
						return e
				}
			};
			var Fg = (e = null, t) => {
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
				qg = Object(v.c)({
					api: Mg,
					contentId: Bg,
					initialRecipient: Gg,
					publicAddress: Fg
				}),
				Wg = Object(v.c)({
					communityPoints: qg
				}),
				Hg = r("./src/reddit/actions/search/trending.ts");
			const Vg = {};
			var Qg = (e = Vg, t) => {
					switch (t.type) {
						case V.SUBREDDIT_LOADED:
						case Hg.a: {
							const {
								items: r,
								subplacement: s
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
				$g = Object(v.c)({
					models: Qg
				});
			var Kg = r("./src/reddit/routes/premium/index.ts");
			const zg = {};
			var Yg = (e = zg, t) => {
					switch (t.type) {
						case My.a: {
							const {
								trophies: r
							} = t.payload;
							return Object.values(r).forEach(e => {
								"t6_bf" === e.awardId && (e.url = Kg.b)
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				Xg = r("./src/reddit/actions/upload.ts"),
				Jg = r("./src/reddit/models/Upload/index.ts");
			const Zg = {};
			var eS = (e = Zg, t) => {
					switch (t.type) {
						case Xg.d: {
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
									status: Jg.a.PENDING
								}
							}
						}
						case Xg.h: {
							const {
								key: r
							} = t.payload, s = e[r];
							return {
								...e,
								[r]: {
									...s,
									status: Jg.a.UPLOADING
								}
							}
						}
						case Xg.c: {
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
						case Xg.e: {
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
						case Xg.g: {
							const {
								key: r,
								url: s
							} = t.payload, n = e[r];
							return {
								...e,
								[r]: {
									...n,
									status: Jg.a.SUCCESS,
									url: s
								}
							}
						}
						case Xg.b: {
							const {
								key: r,
								error: s
							} = t.payload, n = e[r];
							return {
								...e,
								[r]: {
									...n,
									status: Jg.a.FAILED,
									error: s
								}
							}
						}
						case Xg.a: {
							const {
								key: r
							} = t.payload, s = e[r];
							return {
								...e,
								[r]: {
									...s,
									status: Jg.a.CANCELED
								}
							}
						}
						case Xg.f: {
							const {
								key: r
							} = t.payload, s = e[r];
							return s.metadata.localUrl && window.URL.revokeObjectURL(s.metadata.localUrl), Ts()(e, r)
						}
						default:
							return e
					}
				},
				tS = r("./src/reddit/actions/upvotePrompt.ts");
			var rS = (e = 0, t) => {
				switch (t.type) {
					case tS.a:
						return ++e;
					default:
						return e
				}
			};
			const sS = {};
			var nS = (e = sS, t) => {
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
			};
			Object(Ce.a)("INBOX__COUNT_UPDATE");
			var aS = r("./src/reddit/actions/pages/appeal/constants.ts"),
				cS = r("./src/reddit/actions/pages/userDataRequest/index.ts"),
				oS = r("./src/reddit/actions/sso/constants.ts"),
				dS = r("./src/reddit/endpoints/profile/info.ts");
			const iS = (e, t) => {
				const {
					gender: r,
					...s
				} = {
					...e
				};
				if (!t || Wu()(s, t)) return e;
				const {
					karma: n
				} = t;
				return {
					...t,
					karma: {
						...dS.a,
						...null == s ? void 0 : s.karma,
						...n
					},
					gender: r
				}
			};
			var uS = Object(ff.a)((e = null, t) => {
				var r, n;
				switch (t.type) {
					case aS.a:
					case aS.b:
					case km.b:
					case km.c:
					case hr.b:
					case hr.c:
					case hr.g:
					case hr.a:
					case hr.k:
					case hr.l:
					case hr.m:
					case Te.e:
					case Te.h:
					case Te.g:
					case ve.q:
					case ve.r:
					case G.a:
					case G.e:
					case G.b:
					case G.f:
					case ge.a:
					case ge.b:
					case De.a:
					case De.b:
					case V.SUBREDDIT_FAILED:
					case $u.l:
					case F.b:
					case F.a:
					case F.e:
					case F.d:
					case W.c:
					case W.i:
					case Pe.e:
					case Pe.d:
					case Pe.b:
					case Pe.a:
					case q.PROFILE_POSTS_LOADED:
					case q.PROFILE_POSTS_FAILED:
					case V.SUBREDDIT_LOADED:
					case H.a:
					case H.c:
					case we.PAGE_LOADED:
					case Ds.PAGE_LOADED:
					case Ne.c:
					case Ne.e:
					case ag.a:
					case ag.b:
					case Er.j:
					case cS.b:
					case og.c:
					case zd.TOPIC_DATA_LOADED:
						return iS(e, t.payload.account);
					case og.o:
						return e ? {
							...e,
							email: t.payload
						} : e;
					case B.i:
					case B.f:
					case B.m:
					case B.p:
					case B.v:
					case B.h:
					case B.e:
					case B.l:
					case B.o:
					case B.u: {
						const {
							response: r
						} = t.payload;
						return r ? iS(e, r.account) : e
					}
					case og.a:
						return e ? {
							...e,
							seenLayoutSwitch: !0
						} : e;
					case s.d:
						return e ? {
							...e,
							seenRedesignModal: !0
						} : e;
					case Er.l:
					case Er.k: {
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
								...dS.a,
								...null == e ? void 0 : e.karma,
								...s
							}
						}
					}
					case Se.A: {
						const {
							coins: r,
							coinsDiff: s
						} = t.payload;
						return r && e ? {
							...e,
							coins: r
						} : s && e ? {
							...e,
							coins: e.coins + s
						} : e
					}
					case Wl.q: {
						const {
							price: r
						} = t.payload;
						return (null == e ? void 0 : e.coins) && r ? {
							...e,
							coins: e.coins - r
						} : e
					}
					case "INBOX__COUNT_UPDATE": {
						const {
							inboxCount: r
						} = t.payload;
						return e ? {
							...e,
							inboxCount: r
						} : e
					}
					case oS.a: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...s, r]
						} : e
					}
					case oS.b: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: s.filter(e => e !== r)
						} : e
					}
					case Ao.c: {
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
					case hl.a:
					case hl.b: {
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
					case og.l: {
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
			var lS = (e = null, t) => {
				switch (t.type) {
					case og.n:
					case og.o:
						return null;
					case og.m:
						return t.payload;
					default:
						return e
				}
			};
			var pS = (e = !1, t) => {
					switch (t.type) {
						case og.n:
							return !0;
						case og.o:
						case og.m:
							return !1;
						default:
							return e
					}
				},
				bS = Object(v.c)({
					error: lS,
					pending: pS
				}),
				fS = Object(v.c)({
					api: bS
				});
			var yS = (e = !1, t) => {
				switch (t.type) {
					case og.j:
						return !0;
					default:
						return e
				}
			};
			var mS = (e = !1, t) => {
					switch (t.type) {
						case og.i:
							return !0;
						case og.j:
						case og.h:
							return !1;
						default:
							return e
					}
				},
				OS = Object(v.c)({
					pending: mS,
					emailSent: yS
				}),
				hS = Object(v.c)({
					api: OS
				}),
				ES = Object(v.c)({
					changeEmail: fS,
					sendResetEmail: hS
				}),
				_S = r("./src/reddit/models/WhitelistAndBlocked.ts");
			const IS = {};
			var gS = (e = IS, t) => {
				switch (t.type) {
					case Ot.f:
						return {
							...e, new: _S.a.pending
						};
					case Ot.d:
						return {
							...e, new: _S.a.error
						};
					case Ot.e:
						return {
							...e, new: _S.a.waitingForRequest
						};
					case Ot.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: _S.a.pending
						}
					}
					case Ot.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: _S.a.error
						}
					}
					case Ot.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: _S.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const SS = [];
			var vS = (e = SS, t) => {
					switch (t.type) {
						case Ot.e:
							return [t.payload, ...e];
						case Ot.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case Er.j:
							return t.payload.blockedUsers;
						default:
							return e
					}
				},
				jS = Object(v.c)({
					api: gS,
					data: vS
				}),
				TS = r("./src/reddit/actions/chat/constants.ts"),
				DS = r("./src/reddit/actions/chat/userSettings.ts");
			const wS = TS.a.anybody;
			var PS = (e = wS, t) => {
					switch (t.type) {
						case DS.a:
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
				AS = Object(v.c)({
					invitePolicy: PS
				});
			const CS = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var RS = (e = null, t) => {
				switch (t.type) {
					case we.PAGE_LOADED: {
						const {
							drafts: r
						} = t.payload;
						return e && Wu()(e, r) ? e : {
							...e,
							...r
						}
					}
					case Yr.P: {
						const {
							response: {
								draftsCount: r
							}
						} = t.payload;
						return CS(e, r)
					}
					case xr.e: {
						const {
							postDraftIds: r
						} = t.payload;
						return CS(e, r.length)
					}
					case xr.c:
					case xr.l: {
						const {
							draftsCount: r
						} = t.payload;
						return CS(e, r)
					}
					default:
						return e
				}
			};
			const NS = {};
			var kS = (e = NS, t) => {
					switch (t.type) {
						case $a.a: {
							const e = t.payload.experimentVariants;
							return jl(e)
						}
						default:
							return e
					}
				},
				LS = r("./src/reddit/actions/global/constants.ts");
			const xS = {};
			var US = (e = xS, t) => {
					switch (t.type) {
						case LS.a: {
							const r = t.payload;
							return null === r.local_persisted_experiments_store || void 0 === r.local_persisted_experiments_store ? e : r.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				MS = Object(v.c)({
					byName: kS,
					localPersisted: US
				}),
				BS = r("./src/reddit/actions/googleOneTap/index.ts");
			var GS = (e = !1, t) => {
				switch (t.type) {
					case BS.a:
						return !0;
					default:
						return e
				}
			};
			var FS = (e = !1, t) => {
				switch (t.type) {
					case Er.f:
						return !0;
					case Er.e:
						return !1;
					default:
						return e
				}
			};
			var qS = (e = "", t) => {
				switch (t.type) {
					case Er.j:
						return "string" == typeof t.payload.language ? t.payload.language : e;
					default:
						return e
				}
			};
			const WS = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var HS = (e = WS, t) => {
					switch (t.type) {
						case og.b:
							return t.payload;
						default:
							return e
					}
				},
				VS = r("./src/reddit/actions/notifications/constants.ts"),
				QS = r("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var $S = (e = null, t) => {
				switch (t.type) {
					case QS.a:
					case QS.d:
					case QS.h:
					case VS.a:
						return t.payload && t.payload.error || null;
					case QS.c:
					case QS.f:
					case QS.j:
					case VS.c:
					case VS.b:
						return null;
					default:
						return e
				}
			};
			var KS = (e = !1, t) => {
				switch (t.type) {
					case VS.c:
						return !1;
					case VS.b:
						return !0;
					default:
						return e
				}
			};
			var zS = (e = !1, t) => {
					switch (t.type) {
						case VS.c:
						case QS.j:
							return !0;
						case VS.b:
						case VS.a:
						case QS.i:
						case QS.h:
							return !1;
						default:
							return e
					}
				},
				YS = Object(v.c)({
					error: $S,
					loaded: KS,
					pending: zS
				});
			var XS = (e = null, t) => {
				switch (t.type) {
					case VS.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case VS.f:
					case VS.e:
						return null;
					default:
						return e
				}
			};
			var JS = (e = !1, t) => {
				switch (t.type) {
					case VS.f:
						return !1;
					case VS.e:
						return !0;
					default:
						return e
				}
			};
			var ZS = (e = !1, t) => {
					switch (t.type) {
						case VS.f:
							return !0;
						case VS.e:
						case VS.d:
							return !1;
						default:
							return e
					}
				},
				ev = Object(v.c)({
					error: XS,
					loaded: JS,
					pending: ZS
				}),
				tv = Object(v.c)({
					getPreferences: YS,
					setPreferences: ev
				});
			const rv = {
				byId: {},
				allIds: []
			};
			var sv = (e = rv, t) => {
				switch (t.type) {
					case QS.b: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case QS.g: {
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
			const nv = {
				byId: {},
				allIds: []
			};
			var av = (e = nv, t) => {
					switch (t.type) {
						case QS.b: {
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
				cv = Object(v.c)({
					sections: av,
					rows: sv
				}),
				ov = r("./src/lib/notifications/constants.ts");
			var dv = (e = !1, t) => {
				switch (t.type) {
					case ov.j:
						return !0;
					case ov.b:
					case ov.d:
					case ov.e:
						return !1;
					default:
						return e
				}
			};
			const iv = {
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
			var uv = (e = iv, t) => {
				switch (t.type) {
					case VS.b:
					case VS.f:
					case VS.d: {
						const {
							preferences: r
						} = t.payload;
						return aa()(r) ? e : r
					}
					default:
						return e
				}
			};
			const lv = {
				byId: {},
				allIds: []
			};
			var pv = (e = lv, t) => {
				switch (t.type) {
					case QS.e: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case QS.g: {
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
			const bv = {
				byId: {},
				allIds: []
			};
			var fv = (e = bv, t) => {
					switch (t.type) {
						case QS.e: {
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
				yv = Object(v.c)({
					sections: fv,
					rows: pv
				});
			var mv = (e = null, t) => {
				switch (t.type) {
					case QS.i:
						return t.payload && t.payload.pageInfo;
					default:
						return e
				}
			};
			const Ov = [];
			var hv = (e = Ov, t) => {
					switch (t.type) {
						case QS.i: {
							const r = t.payload && t.payload.nodes;
							return [...e, ...r]
						}
						case QS.k: {
							if (!t.payload) return [];
							const r = t.payload && t.payload.subredditId,
								s = t.payload && t.payload.notificationLevel,
								n = e.findIndex(e => e.id === r);
							return -1 === n ? e : [...e.slice(0, n), {
								...e[n],
								notificationLevel: s
							}, ...e.slice(n + 1)]
						}
						default:
							return e
					}
				},
				Ev = Object(v.c)({
					subreddits: hv,
					pageInfo: mv
				}),
				_v = Object(v.c)({
					api: tv,
					subscribedSubredditsSettings: Ev,
					emailSettingsLayout: cv,
					isNotificationPromptVisible: dv,
					preferences: uv,
					pushSettingsLayout: yv
				});
			const Iv = {};
			var gv = (e = Iv, t) => {
				switch (t.type) {
					case o.i:
					case Ke.h: {
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
			const Sv = {},
				vv = (e, t) => `${e}_${t||new Date}`;
			var jv = (e = Sv, t) => {
				switch (t.type) {
					case ee.Ab: {
						const r = t.payload.powerups;
						if (r) {
							const {
								allocation: t
							} = r, s = (t || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
								...e,
								[vv(t.subredditInfo.id, t.allocatedAt)]: t
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
							[vv(t.subredditInfo.id, t.allocatedAt)]: t
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
							const t = vv(r, n),
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
						} = t.payload, n = vv(r, s), a = e[n];
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
			var Tv = (e = null, t) => {
				switch (t.type) {
					case ee.Ab: {
						const r = t.payload.powerups;
						return r ? Ts()({
							...e,
							...r
						}, "allocation") : e
					}
					case ee.pb: {
						const {
							userPowerups: r
						} = t.payload;
						return r ? Ts()({
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
			var Dv, wv = (e = !1, t) => {
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
				Pv = Object(v.c)({
					allocationByKey: jv,
					data: Tv,
					fetched: wv
				}),
				Av = r("./src/reddit/reducers/user/prefs/index.ts");
			! function(e) {
				e.UNFETCHED = "default", e.PENDING = "pending", e.LOADED = "loaded", e.FAILED = "failed"
			}(Dv || (Dv = {}));
			const Cv = {
				status: Dv.UNFETCHED,
				subscriptions: []
			};
			var Rv = (e = Cv, t) => {
				switch (t.type) {
					case ee.Eb:
						return {
							...e, status: Dv.PENDING
						};
					case ee.Db: {
						const {
							subscriptions: r
						} = t.payload;
						return r ? {
							...e,
							subscriptions: r,
							status: Dv.LOADED
						} : e
					}
					case ee.Cb:
						return {
							...e, status: Dv.FAILED
						};
					default:
						return e
				}
			};
			var Nv = (e = "", t) => {
				switch (t.type) {
					case og.d:
						return t.payload;
					default:
						return e
				}
			};
			var kv = (e = null, t) => {
				switch (t.type) {
					case Pm.a:
					case Pm.b:
					case Pm.c:
					case Pm.e:
						return t.payload;
					case Pm.d:
						return null;
					default:
						return e
				}
			};
			var Lv = (e = !1, t) => {
				switch (t.type) {
					case Pm.f:
						return !0;
					default:
						return e
				}
			};
			var xv = (e = "", t) => {
				switch (t.type) {
					case og.k:
						return t.payload;
					default:
						return e
				}
			};
			var Uv = (e = null, t) => {
				switch (t.type) {
					case $a.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var Mv = (e = null, t) => {
					switch (t.type) {
						case $a.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				Bv = Object(v.c)({
					isEmployee: Uv,
					isLoggedIn: Mv
				});
			var Gv = (e = null, t) => {
					switch (t.type) {
						case Er.r: {
							const {
								topContentDismissal: r
							} = t.payload;
							return e && Wu()(e, r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				Fv = r("./src/reddit/actions/userWhitelist.ts");
			const qv = {};
			var Wv = (e = qv, t) => {
				switch (t.type) {
					case Fv.e:
						return {
							...e, new: _S.a.pending
						};
					case Fv.d:
						return {
							...e, new: _S.a.error
						};
					case Fv.f:
						return {
							...e, new: _S.a.waitingForRequest
						};
					case Fv.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: _S.a.pending
						}
					}
					case Fv.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: _S.a.error
						}
					}
					case Fv.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: _S.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const Hv = [];
			var Vv = (e = Hv, t) => {
					switch (t.type) {
						case Fv.f:
							return [t.payload, ...e];
						case Fv.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case Er.j:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				Qv = Object(v.c)({
					api: Wv,
					data: Vv
				}),
				$v = Object(v.c)({
					account: uS,
					accountSettings: ES,
					blocked: jS,
					chatSettings: AS,
					drafts: RS,
					experiments: MS,
					googleOneTapEnabled: GS,
					isCustomizeFlyoutShowing: FS,
					topContentDismissalPrefsSet: Gv,
					language: qS,
					loid: HS,
					notificationPrefs: _v,
					ownedBadges: gv,
					powerups: Pv,
					prefs: Av.c,
					productOfferSubscriptions: Rv,
					reddaid: Nv,
					session: kv,
					sessionRefreshFailed: Lv,
					sessionTracker: xv,
					temporaryGQL: Bv,
					wallets: nS,
					whitelist: Qv
				});
			var Kv = (e = null, t) => {
				switch (t.type) {
					case cS.a:
						return t.payload || null;
					case cS.b:
					case cS.c:
						return null;
					default:
						return e
				}
			};
			var zv = (e = !1, t) => {
				switch (t.type) {
					case cS.c:
						return !0;
					case cS.b:
					case cS.a:
						return !1;
					default:
						return e
				}
			};
			var Yv = (e = !1, t) => {
				switch (t.type) {
					case cS.b:
						return !0;
					case cS.a:
					case cS.c:
						return !1;
					default:
						return e
				}
			};
			var Xv = (e = !1, t) => {
					switch (t.type) {
						case cS.b:
							return t.payload.userDataExportEligibility;
						case cS.a:
						case cS.c:
							return !1;
						default:
							return e
					}
				},
				Jv = Object(v.c)({
					error: Kv,
					pending: zv,
					success: Yv,
					userDataExportEligibility: Xv
				}),
				Zv = Object(v.c)({
					userDataRequestPageApi: Jv
				});
			const ej = {};
			var tj = (e = ej, t) => {
				switch (t.type) {
					case og.g:
					case og.f: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case og.e: {
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
			var rj = (e = !1, t) => {
					switch (t.type) {
						case og.g:
							return !0;
						case og.f:
						case og.e:
							return !1;
						default:
							return e
					}
				},
				sj = Object(v.c)({
					error: tj,
					pending: rj
				});
			const nj = {};
			var aj = (e = nj, t) => {
				switch (t.type) {
					case Ke.e: {
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
					case Ke.b: {
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
					case Ke.a: {
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
			const cj = {},
				oj = (e, t) => {
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					return r.forEach(r => {
						const n = e[r],
							a = t[r];
						n && Wu()(n, a) || (s[r.toLowerCase()] = a)
					}), Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var dj = (e = cj, t) => {
					switch (t.type) {
						case og.f: {
							const {
								data: r
							} = t.payload;
							return oj(e, r)
						}
						case $u.k: {
							const {
								user: r
							} = t.payload;
							return oj(e, {
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
							return c ? oj(e, {
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
								...dS.a,
								...s
							};
							return oj(e, {
								[r.toLowerCase()]: {
									...n,
									karma: a
								}
							})
						}
						case Er.l:
						case Er.k: {
							const {
								imageUrl: r,
								key: s,
								username: n
							} = t.payload;
							if ("profileIcon" !== s) return e;
							const a = n.toLowerCase(),
								c = e[a];
							return c ? oj(e, {
								[a]: {
									...c,
									accountIcon: r
								}
							}) : e
						}
						case og.c:
							const r = t.payload.account;
							if (!r || !e) return e;
							const s = Object(z.e)(r).toLowerCase(),
								n = e[s];
							return n ? oj(e, {
								[s]: {
									...n,
									accountIcon: r.accountIcon,
									snoovatarFullBodyAsset: r.snoovatarFullBodyAsset
								}
							}) : e;
						case Er.n: {
							const {
								additional: r,
								settings: s
							} = t.payload;
							if (r.enableFollowers === r.prevEnableFollowers) return e;
							const n = s.currentUserName.toLowerCase(),
								a = e[n];
							return a ? oj(e, {
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
				ij = r("./src/reddit/actions/usernameAvailable.ts");
			const uj = {};
			var lj = (e = uj, t) => {
				switch (t.type) {
					case ij.a: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: ij.b.Available
						}
					}
					case ij.c: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: ij.b.Error
						}
					}
					case ij.d: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: ij.b.Pending
						}
					}
					case ij.e: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: ij.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			const pj = {};
			var bj = (e = pj, t) => {
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
			var fj = (e = !1, t) => {
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
				yj = Object(v.c)({
					allocationByKey: bj,
					fetched: fj
				});
			var mj = (e = null, t) => {
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
			var Oj = (e = !1, t) => {
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
				hj = Object(v.c)({
					error: mj,
					pending: Oj
				});
			var Ej = (e = null, t) => {
				switch (t.type) {
					case ee.yb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const _j = {};
			var Ij = (e = _j, t) => {
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
			const gj = {};
			var Sj = (e = gj, t) => {
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
							return Ts()(e, [r])
						}
						default:
							return e
					}
				},
				vj = Object(v.c)({
					api: hj,
					currentPostId: Ej,
					currentRank: Ij,
					list: Sj
				}),
				jj = Object(v.c)({
					api: sj,
					appliedBadges: aj,
					models: dj,
					nameAvailable: lj,
					topAwarders: vj,
					powerups: yj
				});
			const Tj = {};
			var Dj = (e = Tj, t) => {
					var r, s, n;
					switch (t.type) {
						case G.b:
						case G.f:
						case V.SUBREDDIT_LOADED:
						case $.i:
						case H.c:
						case we.PAGE_LOADED:
						case Ds.PAGE_LOADED: {
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
				wj = r("./src/reddit/actions/widgets/constants.ts");
			const Pj = {};
			var Aj = (e = Pj, t) => {
					var r;
					switch (t.type) {
						case G.b:
						case G.f:
						case H.c:
						case $.i:
						case V.SUBREDDIT_LOADED:
						case we.PAGE_LOADED: {
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
						case wj.g: {
							const r = t.payload;
							return "menu" !== r.widget.kind ? e : {
								...e,
								[r.subredditId]: r.widgetId
							}
						}
						case wj.h: {
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
				Cj = r("./src/reddit/helpers/widgets/index.tsx");
			const Rj = {};
			var Nj = (e = Rj, t) => {
				switch (t.type) {
					case V.SUBREDDIT_LOADED: {
						const r = t.payload,
							s = r.structuredStyles && r.structuredStyles.data && r.structuredStyles.data.content;
						if (!s) return e;
						const n = s.widgets;
						return {
							...e,
							...n.items
						}
					}
					case wj.b: {
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
								styles: Object(Cj.g)()
							}
						}), t
					}
					case wj.e: {
						const r = t.payload;
						return {
							...e,
							...r.widgets.items
						}
					}
					case wj.i:
					case wj.g: {
						const r = t.payload;
						return {
							...e,
							[r.widget.id]: r.widget
						}
					}
					case wj.h: {
						const r = t.payload,
							s = {
								...e
							};
						return delete s[r.widgetId], s
					}
					case G.b:
					case G.f:
					case V.SUBREDDIT_LOADED:
					case $.i:
					case H.c:
					case we.PAGE_LOADED:
					case Ds.PAGE_LOADED: {
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
					case Yu.h: {
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
					case eE.f: {
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
			const kj = {};
			var Lj = (e = kj, t) => {
				switch (t.type) {
					case V.SUBREDDIT_LOADED:
					case G.f:
					case $.i:
					case we.PAGE_LOADED: {
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
			const xj = {};
			var Uj = (e = xj, t) => {
					switch (t.type) {
						case V.SUBREDDIT_LOADED:
						case we.PAGE_LOADED:
						case Ds.PAGE_LOADED: {
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
						case wj.e:
						case wj.b: {
							const r = t.payload;
							return {
								...e,
								[r.subredditId]: r.widgets.layout.sidebar.order
							}
						}
						case wj.f: {
							const r = t.payload;
							return {
								...e,
								[r.subredditId]: r.widgetIds
							}
						}
						case wj.g: {
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
						case wj.h: {
							const r = t.payload;
							if (!e[r.subredditId]) return e;
							const s = e[r.subredditId].filter(e => e !== r.widgetId);
							return {
								...e,
								[r.subredditId]: s
							}
						}
						case G.b:
						case G.f:
						case V.SUBREDDIT_LOADED:
						case H.c:
						case $.i:
						case we.PAGE_LOADED:
						case Ds.PAGE_LOADED: {
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
				Mj = Object(v.c)({
					idCardIds: Dj,
					menuIds: Aj,
					models: Nj,
					moderatorIds: Lj,
					sidebar: Uj
				}),
				Bj = r("./src/reddit/actions/wrappedReddit/constants.ts");
			const Gj = {
				isImageLoading: !1,
				isCardsLoading: !1,
				cardsLoadingError: null,
				cards: [],
				shareCardWasOpened: !1,
				currentCardIndex: 0,
				subreddits: []
			};
			const Fj = {
				accountManagerModalData: a,
				activeModal: y,
				ads: _,
				apiRequestState: S,
				appBadges: C,
				authorFlair: Z,
				awards: $e,
				badges: dt,
				blockedRedditors: mt,
				blockUser: St,
				brandSafety: jt,
				chat: Jt,
				cooldownTimer: Ar,
				commentsListTruncated: er,
				communityFlairs: sr,
				connection: cr,
				contentControls: Or,
				contentGate: Ir,
				continueThreads: vr,
				creations: zn,
				dashboard: Jn,
				discoveryUnits: ba,
				dismissedTruncationList: ma,
				economics: Ma,
				emojis: Qa,
				experimentOverrides: Xa,
				externalAccount: Tc,
				featureFlags: Nc,
				focusedVerticals: Qc,
				fontFiles: Kc,
				gild: oo,
				header: Oo,
				htmlResponseStreaming: ho,
				imageUploads: Io,
				inAppNotifications: Do,
				interceptedAction: Po,
				isChangeUsernameTooltipShowing: Co,
				isEmailVerificationTooltipShowing: No,
				isModeratorWithPostPerms: Lo,
				jsApi: Mo,
				langSite: Fo,
				leaderboard: Yo,
				listings: ji,
				live: Ai,
				mediaEmbed: (e = Ri, t) => {
					switch (t.type) {
						case Ci.a:
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
				mediaGalleries: Ui,
				mediaPlayback: Gi,
				meta: Wi,
				moderatingSubreddits: Qi,
				modListingPage: Zi,
				modModeEnabled: tu,
				moreComments: iu,
				multireddits: rl,
				notificationBannerId: nl,
				notificationsInbox: fl,
				nps: Ol,
				onboarding: Sl,
				page: Pl,
				platform: Nl,
				postCollection: bp,
				polls: tp,
				postFlair: Ep,
				posts: bf,
				postStickiedComments: Of,
				givePremium: bo,
				products: Rf,
				profileCommentsPage: $f,
				profilePrivatePage: iy,
				profileModSettingsPage: Xf,
				profilePostsPage: Zf,
				profiles: Wy,
				promos: Ky,
				publicAccessNetwork: Dm,
				recentSubreddits: Cm,
				recommendations: Nm,
				reportPage: Wm,
				reportRules: Qm,
				requestHost: $m,
				runTimeEnvVars: zm,
				search: oO,
				searchDiscoveryUnits: yO,
				searchQueryId: (e = OO, t) => {
					switch (t.type) {
						case mO.a:
							return t.payload;
						case mO.b:
							return OO;
						default:
							return e
					}
				},
				seo: jO,
				shortcuts: kO,
				sidebarPromotedPosts: UO,
				streaming: VO,
				structuredStyles: uh,
				stylesheets: lh,
				subredditAutocomplete: _h,
				subreddits: rI,
				subredditStickyPosts: aI,
				subscriptions: DI,
				survey: NI,
				tabBadged: kI,
				tags: ng,
				themes: ug,
				toaster: bg,
				tooltip: hg,
				tracing: Ig,
				tracking: Cg,
				trafficStats: Lg,
				transfers: Wg,
				trending: $g,
				trophies: Yg,
				uploads: eS,
				user: $v,
				userDataRequestPage: Zv,
				upvotePromptCountPerSess: rS,
				users: jj,
				widgets: Mj,
				wrappedReddit: (e = Gj, t) => {
					switch (t.type) {
						case Bj.h:
							return {
								...e, shareCardWasOpened: !0
							};
						case Bj.d:
							return {
								...e, isImageLoading: !1
							};
						case Bj.e:
							return {
								...e, isImageLoading: !0
							};
						case Bj.c:
							return {
								...e, isCardsLoading: !0
							};
						case Bj.b: {
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
						case Bj.a: {
							const {
								error: r
							} = t.payload;
							return {
								...e,
								isCardsLoading: !1,
								cardsLoadingError: r
							}
						}
						case Bj.f:
							return {
								...e, ...Gj
							};
						case Bj.g: {
							const {
								index: r
							} = t.payload;
							return {
								...e,
								isImageLoading: !1,
								currentCardIndex: r
							}
						}
						case Bj.i: {
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
						name: n.Nb.PREMIUM,
						isResponsive: !0
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
					const r = Object(s.yb)(e, {
						userName: t
					});
					return !!r && c(e, r.id)
				}
		},
		"./src/reddit/selectors/chat.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				a = r("./src/reddit/selectors/moderatorPermissions.ts");
			Object(s.a)(e => e.chat.unread.count, e => e.unreadMessages);
			const c = e => !(e.chat.isInited || e.chat.unread.api.pending),
				o = (e, t) => {
					const {
						chatConfig: r
					} = n.c;
					return Object(a.b)(r)(e, t)
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
				const e = Object(n.fb)(),
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
				f = (e, t) => Object(d.u)(e, {
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
					experimentName: n.tb,
					expEventOverride: !1
				}), e => e),
				u = e => e === n.U.Onetap,
				l = e => e === n.U.OnetapAuto,
				p = e => e.user.googleOneTapEnabled,
				b = Object(s.a)(o.P, i, (e, t) => !e && !!t),
				f = Object(s.a)(o.P, i, (e, t) => !e && !!t && !Object(n.Bf)(t))
		},
		"./src/reddit/selectors/experiments/hotPotato.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			})), r.d(t, "b", (function() {
				return b
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/reddit/constants/experiments.ts"),
				c = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/helpers/matchRedditUrls/index.ts"),
				d = r("./src/reddit/selectors/platform.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const u = () => !0,
				l = Object(s.a)(i.W, i.N, (e, t) => !(e || t)),
				p = e => {
					if (!l(e)) return;
					const t = Object(c.c)(e, {
						experimentEligibilitySelector: u,
						experimentName: a.Bd
					});
					return null == t ? void 0 : t.toLocaleLowerCase()
				},
				b = e => {
					var t;
					const r = p(e);
					if (!r) return !1;
					let s = Object(d.r)(e),
						a = Object(d.d)(e);
					if ("undefined" != typeof window && !a) {
						const e = Object(o.a)("subreddit", window.location.href);
						(a = null === (t = null == e ? void 0 : e.components) || void 0 === t ? void 0 : t.subredditName) && (s = n.Nb.SUBREDDIT)
					}
					if (a && r) {
						const e = (null == a ? void 0 : a.toLocaleLowerCase()) === r;
						return s === n.Nb.SUBREDDIT && e
					}
					return !1
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
				return T
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
				T = e => e.posts.scheduledPosts.api.creationToken
		},
		"./src/reddit/selectors/trending.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			const s = e => Object.keys(e.trending.models).reduce((t, r) => [...t, ...e.trending.models[r]], []),
				n = (e, t) => e.trending.models[t] || []
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
					const r = Object(c.G)(e, t),
						s = Object(o.O)(e);
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
		"./src/redditGQL/operations/GetSubredditCountrySiteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"abd8b9be540b"}')
		},
		"./src/redditGQL/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/redditGQL/operations/SubredditRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"074eb98957ec"}')
		},
		"./src/redditGQL/operations/SubredditScheduledPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"de72339b938a"}')
		},
		"./src/redditGQL/operations/SubredditTopContent.json": function(e) {
			e.exports = JSON.parse('{"id":"8cea586e51d9"}')
		},
		"./src/redditGQL/operations/SubredditsCarousel.json": function(e) {
			e.exports = JSON.parse('{"id":"a818d17baafc"}')
		},
		"./src/redditGQL/operations/UpdateChatMessagesAsRead.json": function(e) {
			e.exports = JSON.parse('{"id":"bfc6fe51708d"}')
		},
		"./src/redditGQL/operations/UpdateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"f5276d63e133"}')
		},
		"./src/redditGQL/operations/UpdateSubredditChatSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"bdb05b8c7a65"}')
		},
		"./src/redditGQL/operations/UpdateSubredditCountrySiteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"c21fac68db2d"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.3e368e0fb47398755148.js.map